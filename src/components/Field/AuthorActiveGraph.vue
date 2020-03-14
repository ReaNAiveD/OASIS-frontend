<template>
    <ChartsTemplate :title="title" :option="option"></ChartsTemplate>
</template>

<script>
  import ChartsTemplate from '@/components/Field/ChartsTemplate'

  export default {
    name: 'AuthorActiveGraph',
    components:{
      ChartsTemplate
    },
    data(){
      return {
        title:'学者活跃度统计',
        option : {
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ['product', '2015', '2016', '2017'],
              ['Matcha Latte', 43.3, 85.8, 93.7],
              ['Milk Tea', 83.1, 73.4, 55.1],
              ['Cheese Cocoa', 86.4, 65.2, 82.5],
              ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
          },
          xAxis: { type: 'category' },
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            { type: 'bar' },
            { type: 'bar' },
            { type: 'bar' }
          ]
        }
      }
    },
  }
</script>

<style scoped>
    .author-active-graph-container {
        text-align: center;
        float: right;
        /*width: 30%;*/
        margin: 10px;
    }

    .title {
        width: 100%;
        float: left;
        transform: translateY(20px);
        text-align: center;
    }

    .el-link{
        margin-left: 5px;
    }
</style>
