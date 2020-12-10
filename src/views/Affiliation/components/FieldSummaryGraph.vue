<template>
  <div class="field-graph-container">
    <div class="title">
      <!--            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">-->
      <!--                <path d="M289.5 237.1c-13.8 0-25.1 11.2-25.1 25.1v501.2c0 13.8 11.2 25.1 25.1 25.1h451.1c13.8 0 25.1-11.2 25.1-25.1V262.1c0-13.8-11.2-25.1-25.1-25.1H289.5z m-25.1-50.2h501.2c27.7 0 50.1 22.4 50.1 50.1v551.3c0 27.7-22.4 50.1-50.1 50.1H264.4c-27.7 0-50.1-22.4-50.1-50.1V237.1c0-27.7 22.5-50.2 50.1-50.2z m316.8 219.4c-19.2-12-41.9-18.9-66.2-18.9-69.2 0-125.3 56.1-125.3 125.3S445.8 638 515 638c69.2 0 125.3-56.1 125.3-125.3 0-26.8-8.4-51.6-22.7-72l-36.4 36.4c5.7 10.6 9 22.7 9 35.6 0 41.5-33.7 75.2-75.2 75.2s-75.2-33.7-75.2-75.2 33.7-75.2 75.2-75.2c10.3 0 20.1 2.1 29.1 5.8l37.1-37z m36.1-36.1l50.7-50.7c9.8-9.8 25.7-9.8 35.4 0 9.8 9.8 9.8 25.7 0 35.4l-50 50c23.2 29.7 37 67.2 37 107.8 0 96.9-78.5 175.4-175.4 175.4s-175.4-78.5-175.4-175.4S418.2 337.3 515 337.3c38.2 0 73.5 12.2 102.3 32.9z">-->
      <!--                </path>-->
      <!--            </svg>-->
      <i class="el-icon-document"/>
      <span class="title-text">研究方向统计</span>
    </div>
    <div class="charts">
      <CommonBar ref="bar" :option="option"/>
    </div>
  </div>
</template>

<script>
import CommonBar from '@/components/CommonCharts/index'
import {getDocumentCountByField} from '@/api/affiliation'

export default {
  name: "FieldSummaryGraph",
  components: {
    CommonBar
  },
  data: function () {
    return {
      title: '研究方向论文统计',
      option: {
        tooltip: {
          padding: 8,
          backgroundColor: '#222',
          borderColor: '#777',
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          },
          formatter(obj) {
            const value = obj[0].data
            return '<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.3); font-size: 18px;padding-bottom: 4px; margin: 4px">' +
                value.field + '</div>' +
                '发表文章：' + value.docCount + '<br>'
          }
        },
        dataset: {
          dimension: ['field', 'docCount'],
          source: []
        },
        legend: {
          data: ['docCount']
        },
        // tooltip:{
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'cross',
        //         crossStyle: {
        //             color: '#999'
        //         }
        //     }
        // },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            rotate: 40,
            formatter: function (value) {
              return value.replace(/ /g, '\n');
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '文章数',
          minInterval: 1
        },
        visualMap: {
          show: false,
          type: 'continuous',
          min: 1,
          max: 15,
          dimension: 1,
          inRange: {
            color: ['#90d7ec', '#11264f'],
            // colorLightness: [0.2, 1]
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              x: 'field',
              y: 'docCount'
            }
          }
        ]
      }
    }
  },
  created: function () {
    getDocumentCountByField(this.$route.params.id).then(res => {
      this.option.dataset.source = res.data.data.slice(0, 5);
      this.option.dataset.source.map(d => {
        d.onclick = () => {
          window.open(this.$router.resolve('/field/' + d.field_id).href, '_blank');
        }
      })
      this.$refs.bar.setOnClick(param => {
        param.data.onclick()
      })
      this.$refs.bar.updateCharts();
    })
  }
}
</script>

<style scoped>
.field-graph-container .charts {
  width: 100%;
  height: 300px;
}

.title-text {
  /*padding: 4px;*/
}
</style>
