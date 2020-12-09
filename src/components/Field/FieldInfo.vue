<template>
  <div class="field-info-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix header">
        <i class="el-icon-link"></i>
        <span class="title">{{ field }}</span>
      </div>
      <el-row class="info-line">
        <el-col :span="6" class="info-text">
          <i class="el-icon-document"></i>
          文章
        </el-col>
        <el-col :span="7" class="summary-num">{{ documentCount }}</el-col>

        <el-col :span="9" class="info-text">
          <i class="el-icon-search"></i>
          <el-link :href="'https://www.google.com.hk/search?q='+field" target="_blank" class="google">谷歌链接</el-link>
        </el-col>
      </el-row>
<!--      <div class="charts" ref="charts"></div>-->
      <el-row class="info-line">
        <div class="introduction">
          {{ introduction }}
        </div>
      </el-row>
    </el-card>
  </div>

</template>

<script>
// import ChartsTemplate from '@/components/Field/ChartsTemplate'
// import { gradientColor } from '@/components/Field/color'
import {get_field_detail, get_field_document} from '@/api/field'

// const echarts = require('echarts/lib/echarts')
require('echarts-wordcloud')

export default {
  name: 'FieldInfo',
  components: {
    // ChartsTemplate
  },
  data() {
    return {
      field: '',
      keywords: '',
      isStar: false,
      documentCount: 0,
      option: {
        series: [
          {
            type: 'wordCloud',
            gridSize: 30,
            drawOutOfBound: true,
            sizeRange: [40, 40],
            rotationRange: [0, 0],
            shape: 'pentagon',
            left: 'center',
            top: 'center',
            width: '70%',
            height: '80%',
            right: null,
            bottom: null,
            textStyle: {
              normal: {
                color: function () {
                  return '#' +
                      (function f(color) {
                        return (color += '6789678967896789' [Math.floor(Math.random() * 16)]) &&
                        (color.length === 6) ? color : f(color)
                      })('')
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: []
          }
        ]
      },
      origin: "[1] is a very popular research field. In recent years, many researchers have made outstanding contributions in this field. Its main research is [2]. It is closely related to our life, and its vigorous development will influence our life imperceptibly.",
      introduction: "[1] is a very popular research field. In recent years, many researchers have made outstanding contributions in this field. Its main research is [2]. It is closely related to our life, and its vigorous development will influence our life imperceptibly."
    }
  },
  mounted() {
    // this.initChart()
    this.loadData(this.$route)
    // this.loadGraph(this.$route)
  },
  methods: {
    loadData(route) {
      get_field_document(route.params.id).then(res => {
        this.documentCount = res.data.totalElements
        console.log("===", this.documentCount)
      })
      get_field_detail(route.params.id).then(res => {
        this.field = res.data.data.field
        this.keywords = res.data.data.keywords.split(',')
        this.option.series[0].data = this.keywords.map(keyword => {
          return {
            name: keyword,
            value: 100
          }
        })
        this.introduction=this.origin
        this.introduction=this.introduction.replace(/\[1\]/,this.field)
        this.introduction=this.introduction.replace(/\[2\]/,"'"+this.keywords+"'")
      })
    },
    // loadGraph(route) {
      // get_field_detail(route.params.id).then(res => {
      //   this.field = res.data.data.field
      //   this.keywords = res.data.data.keywords.split(',')
      //   this.option.series[0].data = this.keywords.map(keyword => {
      //     return {
      //       name: keyword,
      //       value: 100
      //     }
      //   })
      //   this.charts.setOption(this.option)
      // })
    // },
    // initChart() {
    //   this.charts = echarts.init(this.$refs.charts)
    // },
  },
  watch: {
    '$route': function (to) {
      if (to.path.indexOf('/field') !== -1) {
        this.loadData(to)
        console.log("=============", to)
        // this.loadGraph(to)
      }
    }
  },
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  text-align: left;
  /*margin: 40px;*/
  width: 100%;
}

/*.box-card:last-child {*/
/*    text-align: left;*/
/*    margin: 0;*/
/*    width: 30%;*/
/*    height: 100%;*/
/*}*/

.field-info-container {
  text-align: center;
  display: flex;
  justify-content: space-between;
  /*margin-top: 20px;*/
  /*margin-bottom: 20px;*/
  height: 100%;
}

.star-button {
  padding: 3px 0;
  color: #409EFF;
  float: right;
}

.el-icon-link {
  margin-right: 5px;
  color: #409EFF;
}

.el-tab-pane {
}

.el-link {
  margin-bottom: 5px;
}

.title, .header {
  font-size: 27px;
}

.keywords {
  text-align: left;
  overflow: hidden;
}

.keywords span {
  margin: 5px;
  font-size: 20px;
  height: 28px;
  line-height: 28px;
}

.charts, .charts * {
  width: 100%;
  height: 300px;
  transform: translateY(-50px);
  /*padding-bottom: 50px;*/
  /*padding-left: 10px;*/
}

.info-text {
  text-align: right;
  padding: 12px 8px 8px;
  color: #909399;
  font-size: 14px;
}

.summary-num {
  text-align: left;
  padding: 8px;
  color: #409EFF;
  font-size: 24px;
}

.google {
  /*z-index: 999;*/
  margin-left: 6px;
}

.introduction {
  font-size: 17px;
  line-height: 24px;
  /*height: 24px;*/
  color: #909399;
  padding-left: 10px;
  padding-right: 10px;
  font-family:"Times New Roman", Times, serif;

  /*word-break: break-all;*/
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 8; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
