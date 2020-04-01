<template>
    <ChartsTemplate :title="title" height="400px" ref="chartsTemplate"></ChartsTemplate>
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
        title: '最热门的领域',
        option: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['领域活跃度', '文章数量']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: [],
            axisLabel: {
              interval:0,
              rotate:50
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
        get_hot_field().then(res => {
          this.buildOption(res.data.data.slice(0, 20))
          console.log('created')
          this.$refs.chartsTemplate.drawChart(this.option)
        })
    },
    methods: {
      buildOption (data) {
        let series = []
        let item
        let fieldActivation=[]
        let docCount=[]
        let fieldName=[]

        this.option.series = []
        this.option.xAxis.data=[]
        for (item of data) {
          fieldActivation.push(parseInt(item.fieldActivation))
          docCount.push(item.docCount)
          fieldName.push(item.field)
        }
        series.push(
          {
            name: "领域活跃度",
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: fieldActivation
          }
        )
        series.push(
          {
            name: "文章数量",
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: docCount
          }
        )
        this.option.series=series
        this.option.xAxis.data=fieldName
      },
    }
  }
</script>

<style scoped>
</style>
