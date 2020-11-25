<template>
    <div class="graph-container">
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
      clickItem: {
        type: Function,
        default: null
      },
      title: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '30vh'
      },
      option: {
        type: Object,
        grid:{
          top:'15%',
          bottom: '8%'
        },
        default() {
          return {}
        }
      }
    },
    mounted() {
      this.initChart()
      // window.onresize=()=>{
      //   console.log("++++++++++++++++++++++++++++resize")
      //   this.charts.resize()
      // }
      // 处理在多个echarts图表下 resize()方法只生效一个
      // 在使用window.onresize监听窗口变化时，要使用DOM二级绑定方式：addEventListener方式。
      window.addEventListener(
          'resize',
          () =>{this.charts.resize()}
      )
    },
    destroyed() {
      window.removeEventListener('resize', () =>{this.charts.resize()})
    },
    methods: {
      initChart() {
        this.charts = echarts.init(this.$refs.charts)
        //添加点击事件
        this.charts.on('click', param => {
          // console.log("func:",this.clickItem)
          if (this.clickItem) {
            this.clickItem(param)
          }
        })
      },
      drawChart(option) {
        this.charts.setOption(option)
      },
    },
    screenAdapter() {
      console.log("===============================screenAdapter")
    //   // this.titleFontSize = this.$refs.hot_ref.offsetWidth / 100 * 3.6
    //   // const adapterOption = {
    //   //   title: {
    //   //     textStyle: {
    //   //       fontSize: this.titleFontSize
    //   //     }
    //   //   },
    //   //   legend: {
    //   //     itemWidth: this.titleFontSize / 2,
    //   //     itemHeight: this.titleFontSize / 2,
    //   //     itemGap: this.titleFontSize / 2,
    //   //     textStyle: {
    //   //       fontSize: this.titleFontSize / 2
    //   //     }
    //   //   },
    //   //   series: [
    //   //     {
    //   //       radius: this.titleFontSize * 4.5,
    //   //       center: ['50%', '60%']
    //   //     }
    //   //   ]
    //   // }
    //   this.charts.setOption(this.option)
    //   this.charts.resize()
    },
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
        overflow: hidden;
        transform: translateY(-50px);
        /*width: 90%;*/
        /*height: 90%;*/
        margin-top: 100px;
        /*padding-left: 10px;*/
    }

    .charts  *{
        width: 90%;
        height: 90%;
        /*padding-left: 10px;*/
    }

</style>
