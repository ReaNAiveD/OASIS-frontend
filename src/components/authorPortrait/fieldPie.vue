<template>
    <div >
        <div id="authorFieldPieContainer" style="width:100%; height:800px; overflow: hidden "></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "fieldPie",
        data() {
            return {
                list:[]
            }
        },
        created: function() {

            this.$nextTick(function() {
                this.getPie()
            })
        },
        methods: {
            getPie() {
                // 绘制图表
                var myChart = echarts.init(document.getElementById('authorFieldPieContainer'))
                var option = {
                    title: {
                        text: '研究方向发表论文统计',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true},
                            dataView: {show: true, readOnly: false},
                            magicType: {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    series: [
                        {
                            name: '研究方向',
                            type: 'pie',
                            radius: [80, 300],
                            center: ['50%', '50%'],
                            roseType: 'area',
                            data: [
                                {value: 10, name: 'rose1'},
                                {value: 5, name: 'rose2'},
                                {value: 15, name: 'rose3'},
                                {value: 25, name: 'rose4'},
                                {value: 20, name: 'rose5'},
                                {value: 35, name: 'rose6'},
                                {value: 30, name: 'rose7'},
                                {value: 40, name: 'rose8'}
                            ]
                        }
                    ]
                };
                myChart.setOption(option)

            }

        }

    }
</script>

<style scoped>

</style>