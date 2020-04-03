<template>
    <div class="graph-container" :style="{width:width,height:height}">
        <div class="title">
            <i class="el-icon-data-line"></i>
            <el-link :underline="false">{{title}}</el-link>
        </div>
        <div class="charts" ref="charts" :style="{width:width,height:height}" ></div>
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
  require('echarts/lib/component/legend')
  // 引入词云
  require('echarts-wordcloud')

  export default {
    name: 'Charts',
    props: {
      clickItem:{
        type:Function,
        default:null
      },
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
    mounted(){
      this.initChart()
    },
    methods: {
      initChart () {
        this.charts = echarts.init(this.$refs.charts)
        //添加点击事件
        this.charts.on('click',param=>{
          // console.log("func:",this.clickItem)
          if(this.clickItem){
            this.clickItem(param)
          }
        })
      },
      drawChart(option){
        this.charts.setOption(option)
      }
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
