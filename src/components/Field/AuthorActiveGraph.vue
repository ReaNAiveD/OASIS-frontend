<template>
    <ChartsTemplate :title="title" :clickItem="clickItem" ref="chartsTemplate"></ChartsTemplate>
</template>

<script>
  import ChartsTemplate from '@/components/Field/ChartsTemplate'
  import { get_author_activation } from '@/api/field'
  import { gradientColor } from '@/components/Field/color'

  export default {
    name: 'AuthorActiveGraph',
    components: {
      ChartsTemplate
    },
    data () {
      return {
        pointNum:0,
        authorIds:[],
        title: '学者活跃度统计',
        option: {
          dataset: [],
          tooltip: {
            padding: 8,
            backgroundColor: '#222',
            borderColor: '#777',
            formatter: function (obj) {
              const value = obj.data
              return '<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.3); font-size: 18px;padding-bottom: 4px; margin: 4px">' +
                value.name + '</div>' +
                '活跃度：' + value.activation.toFixed(2) + '<br>'
            }
          },
          visualMap: [
            {
              show: false,
              type: 'continuous',
              min: 5,
              max: 90,
              inRange: {
                symbolSize: [5, 20]
              }
            },
          ],
          series: [
            {
              name: '机构',
              type: 'graph',
              layout: 'force',
              force: {
                initLayout: 'circular',
                repulsion: 20
              },
              itemStyle: {
                normal:{
                  // borderColor: '#fff',
                  // borderWidth: 1,
                  shadowBlur: 10,
                  shadowColor: 'rgba(0, 0, 0, 0.45)',
                  label:{
                    show:true,
                    formatter: param=>{
                      if(param.dataIndex>this.option.series[0].data.length-4){
                        return param.data.name
                      }
                    },
                  },
                }
              },
              symbolSize: (value) => {
                return value
              },
              data: []
            }
          ]
        }
      }
    },
    created () {
      this.loadGraph(this.$route)
    },
    methods:{
      loadGraph(route){
        get_author_activation(route.params.id).then(res => {
          let limitSize=30
          let totalSize=res.data.data.length
          let size=totalSize>limitSize?limitSize:totalSize
          let activation_list=res.data.data.slice(0, size)
          // 统计前size个活跃度的总和
          let sum=0
          for (let i = 0; i < size; i++) {
            sum+=activation_list[i].activation
          }
          this.option.series[0].data = activation_list.map(function (data) {
            // softmax
            return {
              name: data.name,
              value: Math.ceil(data.activation/sum * 500),
              activation: data.activation,
              id: data.author_id
            }
          }).reverse()
          this.authorIds=res.data.data.slice(0, size).map(function (data) {
            return data.author_id
          })
          let colors = gradientColor('#5aff00', '#3399FF', size)
          for (let i = 0; i < size; i++) {
            this.option.series[0].data[i].itemStyle = {
              color: colors[i]
            }
          }
          this.$refs.chartsTemplate.drawChart(this.option)
        })
      },
      clickItem(param){
        let temp=this.$router.resolve({path:'/author/'+this.authorIds[param.dataIndex]})
        window.open(temp.href, '_blank');
      }
    },
    watch:{
      '$route': function (to) {
        console.log("+++++++++++",to)
        if (to.path.indexOf('/field') !== -1) {
          this.loadGraph(to)
        }
      }
    },
  }
</script>

<style scoped>
</style>
