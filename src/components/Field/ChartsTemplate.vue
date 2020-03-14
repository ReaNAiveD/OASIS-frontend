<template>
    <div class="graph-container">
        <div class="title">
            <i class="el-icon-data-line"></i>
            <el-link :underline="false">{{title}}</el-link>
        </div>
        <div class="charts" ref="charts"></div>
    </div>
</template>

<script>
  // 引入 ECharts 主模块
  const echarts = require('echarts/lib/echarts')
  // 引入柱状图
  require('echarts/lib/chart/bar')
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  export default {
    name: 'Charts',
    props: {
      title: {
        type: String,
        default: ''
      },
      option: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {}
    },
    mounted () {
      this.drawChart()
    },
    methods: {
      drawChart () {
        this.charts = echarts.init(this.$refs.charts)
        this.charts.setOption(this.option)
      }
    }
  }
</script>

<style scoped>
    .graph-container {
        width: 300px;
        height: 300px;
        margin: 10px;
        text-align: center;
        border: 1px solid #EBEEF5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        background: white;
    }

    .title {
        width: 100%;
        float: left;
        transform: translateY(10px);
        /*border-bottom: 1px solid #EBEEF5;*/
    }

    .el-link {
        margin-left: 5px;
    }

    .charts {
        width: 300px;
        height: 300px;
        margin-left: 10px;
    }
</style>
