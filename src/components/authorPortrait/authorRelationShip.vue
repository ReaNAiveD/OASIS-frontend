<template>
    <div id="authorRelationContainer" style="width:100%; height:100%; overflow: hidden "></div>
</template>

<script>
  import echarts from 'echarts'
  import { authorRelation as getAuthorRelation, coworkerRecommend as getCoworkerRecommend } from '@/api/author'

  export default {
    name: 'authorRelation',
    data () {
      return {
        myChart: null,
        relationArray: {},
        coworkerRecommend:[],
        coworkerLimitNum: 10,
        chartData: [],
        chartLink: [],
        categoryArray: [],
        w: 400,
        h: 300,
      }
    },
    mounted () {
      this.loadData()
    },
    methods: {
      loadData(){
        // console.log(this.relationArray);
        // console.log(this.$route.params.id);
        for (let i = 0; i < 1000; i++) {
          this.categoryArray[i] = {
            name: ''
          }
        }
        // 获取作者关系
        getAuthorRelation(this.$route.params.id).then(response => {
          this.relationArray = response.data
        }).catch(error => {
          console.log(error)
        })

        // 获取潜在合作者推荐
        getCoworkerRecommend(this.$route.params.id).then(response=>{
          let size = Math.min(response.data.data.length, this.coworkerLimitNum)
          this.coworkerRecommend = response.data.data.slice(0, size)
          this.initEchart()
        }).catch(error=>{
          console.log(error)
        })
      },
      initEchart () {
        // console.log(this.relationArray);
        let dom = document.getElementById('authorRelationContainer')
        this.myChart = echarts.init(dom)
        this.chartData = this.getData(this.relationArray.vertices)
        this.chartLink = this.getRelation(this.relationArray.edges)
        this.categories = this.categoryArray
        // let routeTemp=this.$route;
        let option = {
          title: {
            text: '作者关系图谱',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
          },
          tooltip: {},
          legend: {
            x: 'left',
            data: this.categories.map(function (a) {//显示策略
              return a.name
            })
          },
          series: [
            {
              categories: this.categories,
              name: 'Author Relationship',
              edgeLabel: {//关系注释
                normal: {
                  formatter: '{c}',
                  show: true
                }
              },
              edgeSymbol: 'circle',
              // force:{//点之间的距离
              //     repulsion:3000
              // },
              force: { //力引导图基本配置
                //initLayout: ,//力引导的初始化布局，默认使用xy轴的标点
                repulsion: 800,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                gravity: 0.03,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                edgeLength: 400,//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                layoutAnimation: true
                //因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
              },
              layout: 'force',//点之间的距离
              roam: true,
              itemStyle: {//球颜色
                normal: {
                  //color: '#ed3e5e'
                },

                //鼠标放上去有阴影效果
                emphasis: {
                  shadowColor: '#b5c2db',
                  shadowOffsetX: 0,//阴影方向
                  shadowOffsetY: 0,
                  shadowBlur: 20,//阴影大小
                },
              },
              label: {
                normal: {
                  show: true //球上的名字
                }
              },

              symbolSize: (value) => {return value * 7}, //球的大小
              type: 'graph',
              links: this.chartLink,//关系源
              data: this.chartData,//数据源
              focusNodeAdjacency: true,//鼠标移上去高亮相关人
              lineStyle: {
                color: 'source',//线和源同色
                curveness: 0.3//线弯曲程度
              },
              emphasis: {
                lineStyle: {
                  width: 8 //鼠标移上去后线的宽度
                }
              }
            }
          ]
        }
        this.myChart.setOption(option)
        // this.myChart.on('click', function (params) {
        //     console.log(params.data.id)//获取点击的人或关系的数据信息
        //         // console.log(this.$route.params.id)
        //         // this.goAuthor(params.data.id)
        //     window.open(routeTemp.resolve('/author/'+params.data.id).href, '_blank');
        // });
        this.myChart.on('click', param => {
          // console.log("func:",this.clickItem)
          // console.log(param);
          console.log(param.data.authorId)
          // this.$router.push({ path: '/author/' + param.data.authorId })
          let routeData=this.$router.resolve({
             path: '/author/' + param.data.authorId
          })
          window.open(routeData.href, '_blank')
        })

      },
      goAuthor (id) {
        window.open(this.$router.resolve('/author/' + id).href, '_blank')
      },
      getData (input) {
        let data = []
        let item
        // 作者关系数据
        for (item of input) {
          data.push({
            category: item.category,
            name: item.content.name,
            value: item.content.activation,
            id: item.id,
            authorId: item.content.id
          })
        }

        const scale=10
        // data.push({
        //   category:0,
        //   name: 'Yang Liu',
        //   value: scale,
        //   id: 0,
        //   authorId: 10551
        // })

        let id=data.length
        // 潜在合作者数据
        this.coworkerRecommend.map(recommend=>{
          data.push({
            category: 0,
            name: recommend.authorName,
            value:(recommend.score*scale).toFixed(2),
            id: id++,
            authorId: recommend.id
          })
        })
        // console.log(input)
        console.log("getData()")
        console.log(data)
        return data
      },
      getRelation (input) {
        let data = []
        let item
        for (item of input) {
          data.push({
            source: item.v1,
            target: item.v2,
            weight: item.weight,
            value: '合作项目数：' + item.content.commonWorks,
          })
        }
        let size=this.relationArray.vertices.length+1
        this.coworkerRecommend.map(()=>{
          data.push({
            source: size++,
            target: 0,
            weight: 5,
            value: '潜在合作者关系',
          })
        })
        console.log("getRelation()")
        console.log(data)
        return data
      },

      // dataEChart () {
      //   let data = [
      //     { category: 0, name: '乔布斯', value: 10, label: '乔布斯', id: 1 },
      //   ]
      //   return data
      // },
      // linkEChart () {
      //   let dataLink = [
      //     { source: '2', target: '1', weight: 1, value: '女儿\r' },
      //   ]
      //   return dataLink
      // },
    },
    watch:{
      '$route'(){
        this.loadData()
      }
    }
  }
</script>

<style scoped>

</style>
