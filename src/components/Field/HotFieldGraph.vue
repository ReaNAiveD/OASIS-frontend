<template>
    <ChartsTemplate :title="title" :clickItem="clickItem" height="300px" ref="chartsTemplate"></ChartsTemplate>
</template>

<script>
  import { get_hot_field } from '@/api/field'
  import ChartsTemplate from '@/components/Field/ChartsTemplate'

  export default {
    name: 'HotField',
    components: {
      ChartsTemplate
    },
    data () {
      return {
        fieldIds: [],
        title: '最热门的领域',
        option: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            show: true,
            type: 'plain',
            x: 'right',
            y: 'bottom',
            data: ['领域活跃度', '文章数量']
          },
          grid: {
            left: '13%',
            right: '3%',
            bottom: '3%',
            top:'6%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: [],
            axisLabel: {
              interval: 0,
              rotate: 35
            }
          },
          yAxis: {
            type: 'value'
          },
          series: []
        },
      }
    },
    created () {
      this.loadGraph()
    },
    methods: {
      loadGraph () {
        get_hot_field().then(res => {
          this.buildOption(res.data.data.slice(0, 20))
          this.$refs.chartsTemplate.drawChart(this.option)
        })
      },
      buildOption (data) {
        let series = []
        let fieldActivation = []
        let docCount = []
        let fieldName = []
        let fieldIds = []

        this.option.series = []
        this.option.xAxis.data = []
        for (let item of data) {
          fieldIds.push(item.fieldId)
          fieldActivation.push(parseInt(item.fieldActivation))
          docCount.push(item.docCount)
          fieldName.push(item.field)
        }
        series.push(
          {
            name: '领域活跃度',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: fieldActivation,
            color: '#3588f5',
          }
        )
        series.push(
          {
            name: '文章数量',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: docCount,
            color: '#0db3e7',
          }
        )
        this.option.series = series
        this.option.xAxis.data = fieldName
        this.fieldIds = fieldIds
        // this.option.legend.data=['领域活跃度', '文章数量']
      },
      clickItem (param) {
        this.$router.push({ path: '/field/' + this.fieldIds[param.dataIndex] })
      }
    },

  }
</script>

<style scoped>
</style>
