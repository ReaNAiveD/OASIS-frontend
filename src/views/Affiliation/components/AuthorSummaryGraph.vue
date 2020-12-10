<template>
  <div class="author-graph-container">
    <div class="title">
      <i class="el-icon-document"/>
      <span class="title-text">{{ title }}</span>
    </div>
    <div class="charts">
      <CommonBar ref="bar" :option="option"/>
    </div>
  </div>
</template>

<script>
import {getDocumentCountByAuthor} from "@/api/affiliation";
import CommonBar from '@/components/CommonCharts/index'

export default {
  name: "AuthorSummaryGraph",
  components: {
    CommonBar
  },
  data: function () {
    return {
      title: '机构作者统计',
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
                value.name + '</div>' +
                '发表文章：' + value.docCount + '<br>'
          }
        },
        dataset: {
          dimension: ['name', 'docCount'],
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
          dimension: 0,
          inRange: {
            color: ['#FF645E', '#80130F'],
            // colorLightness: [0.2, 1]
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              x: 'name',
              y: 'docCount'
            }
          }
        ]
      }
    }
  },
  created: function () {
    getDocumentCountByAuthor(this.$route.params.id).then(res => {
      this.option.dataset.source = res.data.data.slice(0, 6);
      this.option.dataset.source.map(d => {
        d.onclick = () => {
          window.open(this.$router.resolve('/author/' + d.id).href, '_blank');
        }
      })
      this.$refs.bar.updateCharts();
      this.$refs.bar.setOnClick(param => {
        param.data.onclick()
      })
    })
  }
}
</script>

<style scoped>
.author-graph-container .charts {
  width: 100%;
  height: 300px;
}

</style>
