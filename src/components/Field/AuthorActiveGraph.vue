<template>
    <ChartsTemplate :title="title" ref="chartsTemplate"></ChartsTemplate>
</template>

<script>
  import ChartsTemplate from '@/components/Field/ChartsTemplate'
  import { get_author_activation } from '@/api/field'
  import { gradientColor } from '@/components/Field/color'

  export default {
    name: 'AuthorActiveGraph',
    components: {
      ChartsTemplate
    },
    data () {
      return {
        title: '学者活跃度统计',
        option: {
          dataset: [],
          tooltip: {
            padding: 8,
            backgroundColor: '#222',
            borderColor: '#777',
            formatter: function (obj) {
              const value = obj.data
              return '<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.3); font-size: 18px;padding-bottom: 4px; margin: 4px">' +
                value.name + '</div>' +
                '活跃度：' + value.activation.toFixed(2) + '<br>'
            }
          },
          visualMap: [
            {
              show: false,
              type: 'continuous',
              min: 5,
              max: 90,
              inRange: {
                symbolSize: [5, 20]
              }
            },
          ],
          series: [
            {
              name: '机构',
              type: 'graph',
              layout: 'force',
              force: {
                initLayout: 'circular',
                repulsion: 20
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 5,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
              },
              symbolSize: (value) => {
                // console.log("activation: ",value)
                return value
              },
              data: []
            }
          ]
        }

      }
    },
    created () {
      get_author_activation(this.$route.params.id).then(res => {
        let limitSize=30
        let totalSize=res.data.data.length
        let size=totalSize>limitSize?limitSize:totalSize
        this.option.series[0].data = res.data.data.slice(0, size).map(function (data) {
          return {
            name: data.name,
            value: Math.ceil(data.activation * 5),
            activation: data.activation,
            id: data.author_id
          }
        })
        let colors = gradientColor('#3399FF', '#5aff00', size)
        for (let i = 0; i < size; i++) {
          this.option.series[0].data[i].itemStyle = {
            color: colors[i]
          }
        }
        this.$refs.chartsTemplate.drawChart(this.option)
        console.log('机构活跃度', this.option)
      })
    },
  }
</script>

<style scoped>
</style>
