<template>
    <div id="authorRelationContainer" style="width:100%; height:100%; overflow: hidden "></div>
</template>

<script>
  import echarts from 'echarts'
  import { authorRelation as getAuthorRelation, coworkerRecommend as getCoworkerRecommend } from '@/api/author'

  export default {
    name: 'authorRelation',
      props:{
          isPrview: {
              //如果是预览图，不会点击节点跳转
              type: Boolean,
              default: false
          }
      },
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
          this.categoryArray = [];
        // 获取作者关系
        getAuthorRelation(this.$route.params.id).then(response => {
          this.relationArray = response.data
        }).catch(error => {
          console.log(error)
        });

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
              // x: "left",
              type: "scroll",
              orient: "vertical",
              left: 10,
              top: 20,
              bottom: 20,
              data: this.categories.map(function(a) {
                  //显示策略
                  return a.name;
              }),
              selected: this.selectedcategoryArray
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
                normal: {},

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
        this.myChart.on('click', param => {

            if (!this.isPrview && param.dataType === "node") {
                let routeData = this.$router.resolve({
                    path: '/author/' + param.data.authorId
                });
                window.open(routeData.href, '_blank');
            }
        })

      },
      goAuthor (id) {
        window.open(this.$router.resolve('/author/' + id).href, '_blank')
      },
      getData (input) {
        let data = [];
        let categoryArrayTemp = [];
        let item;
        // 作者关系数据
        for (item of input) {
          data.push({
            category: item.category,
            name: item.content.name,
            value: item.content.activation,
            id: item.id,
            authorId: item.content.id
          });
          // console.log(item)
            if (item.content.affiliation.length > 0) {
                categoryArrayTemp.push(item.content.affiliation);
            }
            else {
                categoryArrayTemp.push("暂无机构信息");
            }
        }

        const scale=10
          let categorytempcount = [...new Set(categoryArrayTemp)].length;
        let id=data.length
        // 潜在合作者数据
        this.coworkerRecommend.map(recommend=>{
          data.push({
            category: categorytempcount,
            name: recommend.authorName,
            value:(recommend.score*scale).toFixed(2),
            id: id++,
            authorId: recommend.id,
              symbol: "pin"
          });
            categoryArrayTemp.push("潜在合作者");
        });
          // console.log(categoryArrayTemp)
          let temp = [...new Set(categoryArrayTemp)];
          this.selectedcategoryArray = {};
          // console.log(temp);
          // console.log(this.categoryArray)
          for (item of temp) {
              this.categoryArray.push({ name: item });
          }
          // 预览只显示0个图例
          if (this.isPrview && this.categoryArray.length > 0) {
              for (var i = 0; i < this.categoryArray.length; i++)
                  this.categoryArray[i] = "";
          }
          //第10个机构及之后初加载不显示
          for (let i = 0; i < this.categoryArray.length; i++) {
              // console.log("i:",i,this.categoryArray[i].name)
              this.selectedcategoryArray[this.categoryArray[i].name] = i < 10;
          }
          // console.log(this.categoryArray)
          // console.log(this.selectedcategoryArray)
        return data;
      },
      getRelation (input) {
        let data = [];
        let item;
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
        });
        return data
      },

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
