<template>
    <ChartsTemplate :title="title" :clickItem="clickItem" ref="chartsTemplate"></ChartsTemplate>
</template>

<script>
  import ChartsTemplate from '@/components/Field/ChartsTemplate'
  import { get_aff_activation } from '@/api/field'
  import { gradientColor } from '@/components/Field/color'

  export default {
    name: 'AffiliateActiveGraph',
    components: {
      ChartsTemplate
    },
    data () {
      return {
        affiliationIds: [],
        title: '机构活跃度统计',
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
                return value
              },
              data: []
            }
          ]
        }
      }
    },
    created () {
      this.loadGraph(this.$route)
    },
    methods: {
      loadGraph (route) {
        get_aff_activation(route.params.id).then(res => {
          let limitSize = 30
          let totalSize = res.data.data.length
          let size = totalSize > limitSize ? limitSize : totalSize
          this.option.series[0].data = res.data.data.slice(0, size).map(function (data) {
            return {
              name: data.affiliation,
              value: Math.ceil(data.activation * 5),
              activation: data.activation,
              id: data.id
            }
          })
          this.affiliationIds = res.data.data.slice(0, size).map(function (data) {
            return data.affiliation_id
          })
          let colors = gradientColor('#d700f5', '#fff709', size)
          for (let i = 0; i < size; i++) {
            this.option.series[0].data[i].itemStyle = {
              color: colors[i]
            }
          }
          this.$refs.chartsTemplate.drawChart(this.option)
        })
      },
      clickItem (param) {
        console.log("click")
        let temp=this.$router.resolve({ path: '/aff/' + this.affiliationIds[param.dataIndex] })
        window.open(temp.href, '_blank');
      }
    },
    watch:{
      '$route': function (to) {
        console.log("=========",to)
        if (to.path.indexOf('/field') !== -1) {
          this.loadGraph(to)
        }
      }
    },
  }
</script>

<style scoped>
</style>
