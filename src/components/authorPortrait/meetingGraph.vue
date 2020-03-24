<template>
    <div class="echartLayout">
        <div id="authorMeetingContainer" style="width:100%; height:100%; overflow: hidden "></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: 'meetingGraph',
        data() {
            return {}
        },
        mounted: function() {
            this.$nextTick(function() {
                this.getPie()
            })
        },
        methods: {
            getPie() {
                // 绘制图表
                var myChart = echarts.init(document.getElementById('authorMeetingContainer'))
                // 指定图表的配置项和数据
                var option = {
                    //标题
                    title: {
                        text: '参与会议统计',
                        top: 'bottom',
                        left: 'right'
                    },
                    //鼠标划过时饼状图上显示的数据
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a}<br/>{b}:{c} ({d}%)'
                    },
                    //图例
                    legend: {//图例  标注各种颜色代表的模块
                        x: 'left',
                        textStyle: {//图例中文字的样式
                            color: '#000',
                            fontSize: 16
                        },
                        data: ['a', 'ab', 'ccccccccccc会议']//图例上显示的饼图各模块上的名字
                    },
                    //饼图中各模块的颜色
                    //color: ['#dd4838', '#b6a2de', '#5ab1ef'],
                    // 饼图数据
                    visualMap: {
                        show: false,
                        // min: 80,
                        // max: 600,
                        inRange: {
                            colorLightness: [0.5, 1]
                        }
                    },
                    itemStyle: {
                        color: '#c23531',
                        shadowBlur: 10,
                        shadowColor: 'rgba(68,122,191,0.5)'
                    },
                    series: {
                        name:'参加会议',
                        type: 'pie',             //echarts图的类型   pie代表饼图
                        radius: '60%',           //饼图中饼状部分的大小所占整个父元素的百分比
                        center: ['50%', '50%'],  //整个饼图在整个父元素中的位置
                        data: [                  //每个模块的名字和值
                            { name: 'a', value: 10 },
                            { name: 'ab', value: 30},
                            { name: 'ccccccccccc会议', value: 50 },

                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,//饼图上是否出现标注文字 标注各模块代表什么  默认是true
                                    // position: 'inner',//控制饼图上标注文字相对于饼图的位置  默认位置在饼图外
                                },
                                labelLine: {
                                    show: true//官网demo里外部标注上的小细线的显示隐藏    默认显示
                                }
                            }
                        },
                    }

                }
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option)
            }
        }

    }

</script>

<style scoped>
    .echartLayout {
        width: 300px;
        margin: 10px;
        height: 300px;

        text-align: center;
        border: 1px solid #EBEEF5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        background: white;
        /*position: absolute;*/
    }
</style>
