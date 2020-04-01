<template>
    <div class="graph-container" :style="{width:width,height:height}">
        <div class="title">
            <i class="el-icon-data-line"></i>
            <el-link :underline="false">{{title}}</el-link>
        </div>
        <div class="charts" ref="charts" :style="{width:width,height:height}"></div>
    </div>
</template>

<script>
  // 引入 ECharts 主模块
  const echarts = require('echarts/lib/echarts')
  // 引入柱状图
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')
  require('echarts/lib/chart/graph')
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  // 引入词云
  require('echarts-wordcloud')

  export default {
    name: 'Charts',
    props: {
      title: {
        type: String,
        default: ''
      },
      width:{
        type:String,
        default:'100%'
      },
      height:{
        type:String,
        default:'300px'
      },
      option: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      drawChart (option) {
        this.charts = echarts.init(this.$refs.charts)
        this.charts.setOption(option)
      },
    }
  }
</script>

<style scoped>
    .graph-container {
        text-align: center;
        border: 1px solid #EBEEF5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        background: white;
        /*margin-top: 20px;*/
        /*margin-bottom: 20px;*/
    }

    .title {
        width: 100%;
        float: left;
        margin-top: 10px;
        /*transform: translateY(10px);*/
        /*图标大小*/
        font-size: 30px;
        /*border-bottom: 1px solid #EBEEF5;*/
    }

    .title .el-link {
        /*标题大小*/
        font-size: 19px;
    }

    .el-link {
        margin-left: 5px;
    }

    .charts {
        /*width: 90%;*/
        /*height: 90%;*/
        /*margin-left: 10px;*/
        /*padding-left: 10px;*/
    }

    .charts  *{
        width: 90%;
        height: 90%;
        /*padding-left: 10px;*/
    }
</style>
