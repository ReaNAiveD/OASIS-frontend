<template>
    <div class="field-info-container">
        <el-card class="box-card">
            <div slot="header" class="clearfix header">
                <i class="el-icon-link"></i>
                <span class="title">{{field}}</span>
                <!--                <i :class="{'el-icon-star-off':!isStar,'el-icon-star-on':isStar,'star-button':true} "-->
                <!--                   @click="isStar=!isStar"></i>-->

            </div>
            <!--            <div class="text item">-->
            <!--                {{keywords}}-->
            <!--            </div>-->
<!--            <div class="keywords" v-if="keywords[0]!==''">-->
<!--                <span style="line-height: 25px">Keywords:</span>-->
<!--                <el-tag type="info" effect="plain" :hit=true v-for="(keyword,index) in keywords" :key="index">-->
<!--                    {{keyword}}-->
<!--                </el-tag>-->
<!--            </div>-->
            <div class="charts" ref="charts"></div>

<!--            <ChartsTemplate ref="chartsTemplate"></ChartsTemplate>-->
        </el-card>
    </div>

</template>

<script>
  // import ChartsTemplate from '@/components/Field/ChartsTemplate'
  // import { gradientColor } from '@/components/Field/color'
  import { get_field_detail } from '@/api/field'

  const echarts = require('echarts/lib/echarts')
  require('echarts-wordcloud')


  export default {
    name: 'FieldInfo',
    components: {
      // ChartsTemplate
    },
    data () {
      return {
        field:'',
        keywords:'',
        isStar: false,
        option: {
          series: [
            {
              type: 'wordCloud',
              gridSize: 50,
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
                  color:  function() {
                    return '#' +
                      (function f(color) {
                        return(color += '6789678967896789' [Math.floor(Math.random() * 16)]) &&
                        (color.length === 6) ? color : f(color);
                      })('');
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
        }
      }
    },
    created () {
      get_field_detail(this.$route.params.id).then(res=>{
        this.field=res.data.data.field
        this.keywords=res.data.data.keywords.split(',')
        this.drawChart()
      })
    },
    methods: {
      // handleClick (tab, event) {
      //   console.log(tab, event)
      // },
      drawChart () {
        console.log("key:",this.keywords)
        this.option.series[0].data=this.keywords.map(keyword=>{
          return {
            name:keyword,
            value:100
          }
        })
        // let colors=gradientColor("#000000","#000000",this.keywords.length)
        // console.log(colors)
        // this.option.series[0].textStyle.normal.color='#5aff00'
        this.charts = echarts.init(this.$refs.charts)
        this.charts.setOption(this.option)
        console.log(this.option.series[0].data)
      },
    }
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
        font-size: 30px;
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

    .charts,.charts  *{
        width: 400px;
        height: 300px;
        /*padding-left: 10px;*/
    }
</style>
