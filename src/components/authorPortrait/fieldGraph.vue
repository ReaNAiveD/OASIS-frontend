<template>
    <!--    <div class="echartLayout">-->
    <div id="sun" style="width:100%; height:100%; overflow: hidden "></div>
    <!--    </div>-->
</template>

<script>
  import echarts from 'echarts'
  import { authorFieldPaper as getAuthorFieldPaper } from '@/api/author'

  export default {
    name: 'fieldGraph',  // 研究方向发表论文统计
    data () {
      return {
        // fieldPaperData:{},
        realList: [],
        fieldData: [],
        fieldName: [],
        documentData: [],
        fieldPaperData: {//下面是例子
          'documents':
            [
              {
                'field_id': 1,
                'total_citations': 0,
                'title': 'DeepMutation++: A Mutation Testing Framework for Deep Learning Systems',
                'docActivation': 0.8333,
                'id': 4352
              },
              {
                'field_id': 1,
                'total_citations': 0,
                'title': 'An Empirical Study Towards Characterizing Deep Learning Development and Deployment Across Different Frameworks and Platforms',
                'id': 4414,
                'docActivation': 0.8333
              },

              {
                'id': 4635,
                'docActivation': 2.0000,
                'title': 'CodeHow: Effective Code Search Based on API Understanding and Extended Boolean Model (E)',
                'field_id': 34,
                'total_citations': 15
              },
              {
                'title': 'JaConTeBe: A Benchmark Suite of Real-World Java Concurrency Bugs (T)',
                'id': 4760,
                'docActivation': 1.1000,
                'total_citations': 6,
                'field_id': 41
              },

              {
                'id': 4859,
                'total_citations': 2,
                'title': 'Mining revision histories to detect cross-language clones without intermediates',
                'field_id': 10,
                'docActivation': 0.7778
              }
            ],
          'fields': [

            {
              'field_id': 10,
              'field_name': 'Management science',
              'activation': 0.7778
            },
            {
              'field_name': 'Engineering drawing',
              'field_id': 55,
              'activation': 0.8333
            },
            {
              'field_name': 'Software engineering',
              'activation': 1.1000,
              'field_id': 41
            },
            {
              'activation': 2.0000,
              'field_id': 34,
              'field_name': 'Parallel computing'
            },
            {
              'field_id': 1,
              'field_name': 'Artificial intelligence',
              'activation': 2.4999
            }
          ]
        },

      }
    },
    mounted: function () {
      getAuthorFieldPaper(this.$route.params.id).then(response => {
        console.log('+++++++++++++++++++++')
        console.log(response.data.data)
        // this.fieldPaperData = response.data.data
        this.fieldData = response.data.data.fields
        this.documentData = response.data.data.documents
        this.operateData()
        this.$nextTick(function () {
          this.getPie()
        })
      }).catch(error => {
        console.log(error)
      })

    },
    methods: {
      operateData () {
        // let data = []//最终结果
        // let item
        // for (item of input.fields) {//初始化领域
        //   let fathername = Math.round(item.field_id / 10)//先假设的父类名称
        //   let flag = 0
        //   for (let i = 0; i < data.length; i++) {//遍历查看是否已存在父类
        //     if (data[i].name === fathername) {//已存在父类
        //       flag = 1
        //       data[i].children.push({//
        //         name: item.field_name,
        //         id: item.field_id,
        //         children: [{
        //           name: '5☆',
        //           children: [{}]
        //         }, {
        //           name: '4☆',
        //           children: [{}]
        //         }, {
        //           name: '3☆',
        //           children: [{}]
        //         }]
        //       })
        //       break
        //     }
        //   }
        //   if (flag === 0) {//不存在父类
        //     data.push({
        //       name: fathername,
        //       id: fathername,
        //       itemStyle: {//暂用style
        //         color: '#FFAE57'
        //       },
        //       children: [{
        //         name: item.field_name,
        //         id: item.field_id,
        //         children: [{
        //           name: '5☆',
        //           children: [{}]
        //         }, {
        //           name: '4☆',
        //           children: [{}]
        //         }, {
        //           name: '3☆',
        //           children: [{}]
        //         }]
        //       }]
        //     })
        //   }
        // }
        // for (item of input.documents) {//初始化论文
        //   for (let i = 0; i < data.length; i++) {//遍历父领域
        //     for (let j = 0; j < data[i].children.length; j++) {//遍历子领域
        //       if (item.field_id === data[i].children[j].id) {
        //         // console.log(data[i].children[j].children[0])
        //         let level = Math.round(item.docActivation * 10 / 5) - 1//暂用的一种level分布
        //         level = Math.min(level, 2)
        //         // console.log(level);
        //         data[i].children[j].children[level].children.push({
        //           name: item.title
        //         })
        //         break
        //       }
        //     }
        //   }
        // }
        let legenddata = this.fieldData

        for (let i = 0; i < legenddata.length; i++) {
          legenddata[i].doc_count = 0
          legenddata[i].total_citations = 0
        }

        this.documentData.map(document => {
          for (let i = 0; i < legenddata.length; i++) {
            if (document.field_id === legenddata[i].field_id) {
              legenddata[i].doc_count += 1
              legenddata[i].total_citations += document.total_citations
              break
            }
          }
        })

        console.log('======================================================')
        console.log(legenddata)

        // this.realList = data
        // console.log(this.realList);
        this.fieldData.map(field => {
          this.fieldName.push(field.field_name)
        })
      },
      getPie () {
        // console.log(this.fieldPaperData);
        // 绘制图表
        var myChart = echarts.init(document.getElementById('sun'))
        var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555']
        var bgColor = '#fff'

        let dataset = []
        this.fieldData.forEach(field => {
          dataset.push([
            field.activation,
            field.doc_count,
            field.field_id,
            field.field_name,
            field.total_citations
          ])
          // dataset.push(field)
        })
        var option = {
          title: {
            text: '研究方向发表论文统计',
            top: 'bottom',
            left: 'right',
          },
          backgroundColor: bgColor,
          color: colors,
          tooltip: {
            trigger: 'item',
            formatter (params) {
              console.log(params)
              return params.data[3] + '</br>' + '领域活跃度：' + params.data[0] + '</br>' + '文章数：' + params.data[1] + '</br>' + '总引用量：' + params.data[4]
            }
          },
          dataset: {
            source: dataset
          },
          // toolbox: {
          //   show: false,//false则不显示工具栏
          //   feature: {
          //     saveAsImage: { show: true, type: 'jpeg' }
          //   }
          // },
          // title: {
          //   text: '人民日报式海外疫情玫瑰图',
          //   x: '60%',
          //   y: '150',
          //   textStyle:
          //     {fontSize:27,
          //       fontWeight:'bold',
          //       fontFamily:'Microsoft YaHei',
          //       color:'#000'
          //     },
          //   subtextStyle:
          //     {
          //       fontStyle:'italic',
          //       fontSize:14
          //     }
          // },
          // legend: {
          //   x: '60%',//水平位置，【left\center\right\数字】
          //   y: '350',//垂直位置，【top\center\bottom\数字】
          //   align: 'left',//字在图例的左边或右边【left/right】
          //   orient: 'vertical',//图例方向【horizontal/vertical】
          //   icon: 'circle',   //图例形状【circle\rect\roundRect\triangle\diamond\pin\arrow\none】
          //   textStyle://图例文字
          //     {
          //       fontFamily: '微软雅黑',
          //       color: '#000',
          //     }
          //   ,
            data: this.fieldName,
            // formatter: function (params) {
            // console.log('图例参数', params)
            // for (var i = 0; i < legenddata.length; i++) {
            //   if (legenddata[i].name === params) {
            //     // return params + '\t文章数:' + legenddata[i].doc_count + '\t活跃度:' + legenddata[i].activation+'\t引用量:'+legenddata[i].total_citations
            //   }
            // }
            // }
          // },
          calculable: true,
          series: [
            {
              name: '半径模式',
              type: 'pie',
              clockWise: false,
              radius: [20, 120],
              center: ['50%', '50%'],
              roseType: 'area',
              encode: {
                itemName: 'FieldName',
                value: 'DocCount'
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    var colorList = [
                      '#a71a4f', '#bc1540', '#c71b1b', '#d93824', '#ce4018', '#d15122', '#e7741b', '#e58b3d', '#e59524', '#dc9e31', '#da9c2d', '#d2b130', '#bbd337', '#8cc13f', '#67b52d', '#53b440', '#48af54', '#479c7f', '#48a698', '#57868c'
                    ]
                    return colorList[params.dataIndex]
                  },
                  label: {
                    position: 'inside',
                    textStyle:
                      {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#000',
                        fontSize: 10
                      },
                    // formatter:'{b} \n{@Confirmed}例 \n死亡{@Dead}',//注意这里大小写敏感哦
                    formatter: function (params) {
                      console.log('参数列表', params)
                      // if (params.data[1] > 9000) {return params.data[0] + '\n' + params.data[1] + '例' + '\n' + '死亡' + params.data[3] + '例'} else {return ''}
                      return '文章数：' + params.data[1] + '篇'

                    },
                  },
                },
              },

            },
            // {
            //   name: '透明圆圈',
            //   type: 'pie',
            //   radius: [10, 27],
            //   center: ['50%', '50%'],
            //   itemStyle: {
            //     color: 'rgba(250, 250, 250, 0.3)',
            //   },
            //   data: [
            //     { value: 10, name: '' }
            //   ]
            // },
            // {
            //   name: '透明圆圈',
            //   type: 'pie',
            //   radius: [10, 35],
            //   center: ['50%', '50%'],
            //   itemStyle: {
            //     color: 'rgba(250, 250, 250, 0.3)',
            //   },
            //   data: [
            //     { value: 10, name: '' }
            //   ]
            // }
          ]
          // series: [{
          //   type: 'sunburst',
          //   radius: [0, '90%'],
          //   center: ['50%', '50%'],
          //   data: data,//设置每个扇形块的样式,优先级最高；
          //   sort: function (a, b) {
          //     if (a.depth === 1) {
          //       return b.getValue() - a.getValue()
          //     } else {
          //       return a.dataIndex - b.dataIndex
          //     }
          //   },
          //   label: {
          //     rotate: 'radial',//径向旋转
          //     color: bgColor
          //   },
          //   itemStyle: {//整个旭日图的样式，优先级最低
          //     borderColor: bgColor,
          //     borderWidth: 2
          //   },
          //   levels: [//设置每一层的样式，优先级中等
          //     {},
          //     {
          //       r0: 0,//空心圆半径
          //       r: 150,//外半径
          //       label: {
          //         rotate: 0
          //       }
          //     },
          //     {
          //       r0: 150,
          //       r: 320
          //     },
          //     {
          //       r0: 320,
          //       r: 345,
          //       itemStyle: {
          //         shadowBlur: 2,
          //         shadowColor: colors[2],
          //         color: 'transparent'
          //       },
          //       label: {
          //         rotate: 'tangential',
          //         fontSize: 10,
          //         color: colors[0]
          //       }
          //     },
          //     {
          //       r0: 345,
          //       r: 350,
          //       itemStyle: {
          //         shadowBlur: 80,
          //         shadowColor: colors[0]
          //       },
          //       label: {
          //         position: 'outside',
          //         textShadowBlur: 5,
          //         textShadowColor: '#333',
          //       },
          //       downplay: {//downplay 表示除了 highlight 扇形块之外的被淡化的扇形块
          //         label: {
          //           opacity: 0.5//圆形透明度
          //         }
          //       }
          //     }
          //   ]
          // }]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      }
    }

  }

</script>

<style scoped>

</style>
