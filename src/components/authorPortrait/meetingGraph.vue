<template>
    <ChartsTemplate :title="title" :option="option"></ChartsTemplate>
</template>

<script>
    import ChartsTemplate from '@/components/Field/ChartsTemplate'

    export default {
        name: 'meetingGraph',
        components:{
            ChartsTemplate
        },
        data(){
            return {
                title:'参与会议统计',
                option : {
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: [
                            ['product', '2015', '2016', '2017'],
                            ['Matcha Latte', 43.3, 85.8, 93.7],
                            ['Milk Tea', 83.1, 73.4, 55.1],
                            ['Cheese Cocoa', 86.4, 65.2, 82.5],
                            ['Walnut Brownie', 72.4, 53.9, 39.1]
                        ]
                    },
                    xAxis: { type: 'category' },
                    yAxis: {},
                    // Declare several bar series, each will be mapped
                    // to a column of dataset.source by default.
                    series: [
                        { type: 'bar' },
                        { type: 'bar' },
                        { type: 'bar' }
                    ]
                }
            }
        },
    }
</script>

<style scoped>
    .affiliate-active-graph-container {
        text-align: center;
        float: left;
        /*width: 30%;*/
        margin: 10px;
        border: 1px solid #EBEEF5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

    }

    .title {
        width: 100%;
        /*height: 30px;*/
        float: left;
        transform: translateY(10px);
        /*border-bottom: 1px solid #EBEEF5;*/
    }

    .el-link{
        margin-left: 5px;
    }

    .charts {
        margin-left: 10px;
        /*margin-right: 10px;*/
    }
</style>
