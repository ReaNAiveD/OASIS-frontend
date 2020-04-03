<template>
    <ChartsTemplate :title="title" ref="chartsTemplate"></ChartsTemplate>
</template>

<script>
  import ChartsTemplate from '@/components/Field/ChartsTemplate'
  import { get_doc_publication } from '@/api/field'

  export default {
    name: 'PaperGraph',
    components: {
      ChartsTemplate
    },
    props: {
      affiliation_id: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        title: '论文数量统计',
        currentDate: new Date(),
        charts: '',
        option: {
          // legend:{},
          tooltip: {},
          xAxis: {
            type: 'category',
            data: []
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [],
            type: 'line'
          }]
        }
      }
    },
    created () {
      this.loadGraph(this.$route)
    },
    methods: {
      loadGraph(route){
        get_doc_publication(route.params.id).then(res => {
          this.buildOption(res.data.data)
          this.$refs.chartsTemplate.drawChart(this.option)
        })
      },
      buildOption (data) {
        let years = []  // 所有年份，可能存在有的年份发表论文数为0，但也要显示出来
        let docCount=[]
        let minYear=data[0].year
        let maxYear=data[data.length-1].year
        for (let i = minYear; i <= maxYear; i++) {
          years.push(i)
          docCount.push(0)
        }

        this.option.series[0].data = []
        this.option.xAxis.data=[]
        for (let item of data) {
          docCount[item.year-minYear]=item.docCount
        }
        this.option.xAxis.data=years
        this.option.series[0].data=docCount

        console.log(this.option.series[0].data)
      },
    },
    watch:{
      '$route': function (to) {
        this.loadGraph(to)
      }
    },
  }
</script>

<style scoped>
</style>
