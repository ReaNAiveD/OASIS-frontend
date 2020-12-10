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
        realList: [],
        fieldData: [],
        fieldName: [],
        documentData: [],
        fieldPaperData: {//下面是例子
        },

      }
    },
    mounted: function () {
      getAuthorFieldPaper(this.$route.params.id).then(response => {
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
        let legenddata = this.fieldData
          // console.log(this.fieldData)
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

        this.fieldData.map(field => {
          this.fieldName.push(field.field_name)
        })
          // console.log(this.fieldName)
      },
      getPie () {
        // console.log(this.fieldPaperData);
        // 绘制图表
        var myChart = echarts.init(document.getElementById('sun'))
        var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555']
        var bgColor = '#fff'

        let dataset = []
        this.fieldData.forEach(field => {
          dataset.push({
              "activation":field.activation,
              "value":field.doc_count,
              "id":field.field_id,
              "name":field.field_name,
              "citaions":field.total_citations
          })
            console.log(dataset)
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
              return params.data.name + '</br>' + '领域活跃度：' + params.data.activation + '</br>' + '文章数：' + params.data.value + '</br>' + '总引用量：' + params.data.citaions
            }
          },
            //图例
            legend: {
                left: 0,
                top: 'top',
                data:this.fieldName
            },
          series: [
            {
              name: '半径模式',
              type: 'pie',
              clockWise: false,
              radius: [20, 100],
              center: ['50%', '50%'],
              roseType: 'area',
                label: {
                    show: false
                },
              // encode: {
              //   itemName: 'FieldName',
              //   value: 'DocCount'
              // },
                data:dataset,
              itemStyle: {
                normal: {
                  color: function (params) {
                    var colorList = [
                      '#a71a4f', '#bc1540', '#c71b1b', '#d93824', '#ce4018', '#d15122', '#e7741b', '#e58b3d', '#e59524', '#dc9e31', '#da9c2d', '#d2b130', '#bbd337', '#8cc13f', '#67b52d', '#53b440', '#48af54', '#479c7f', '#48a698', '#57868c'
                    ]
                    return colorList[params.dataIndex]
                  },

                },
              },

            },

          ]

        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      }
    }

  }

</script>

<style scoped>

</style>
