<template>
    <div class="charts-container" ref="charts"/>
</template>

<script>
    // 引入 ECharts 主模块
    const echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/bar');
    require('echarts/lib/chart/graph');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    require('echarts/lib/component/visualMap');
    export default {
        name: "CommonCharts",
        props: {
            option: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data () {
            return {}
        },
        mounted () {
            this.drawChart()
        },
        methods: {
            drawChart () {
                if (!this.charts) this.charts = echarts.init(this.$refs.charts)
                this.charts.setOption(this.option)
            },
            updateCharts(){
                if (!this.charts) this.charts = echarts.init(this.$refs.charts)
                this.charts.setOption(this.option)
            },
            setOnClick(event){
                if (!this.charts) this.charts = echarts.init(this.$refs.charts)
                this.charts.on('click', event)
            }
        }
    }
</script>

<style scoped>
    .charts-container{
        width: 100%;
        height: 100%;
    }
</style>
