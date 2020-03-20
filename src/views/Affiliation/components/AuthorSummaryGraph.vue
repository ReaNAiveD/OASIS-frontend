<template>
    <div class="author-graph-container">
        <div class="title">
            <i class="el-icon-document"/>
            <span class="title-text">{{title}}</span>
        </div>
        <div class="charts">
            <CommonBar :option="option"/>
        </div>
    </div>
</template>

<script>

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
                    dataset: {
                        source:[
                            ['field', 'docCount'],
                            ['a', 624],
                            ['b', 154],
                            ['c', 125],
                            ['d', 26]
                        ]
                    },
                    legend:{
                        data:['docCount']
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
                    xAxis: {type: 'category'},
                    yAxis: {},
                    visualMap: {
                        show: false,
                        type: 'continuous',
                        min: 50,
                        max: 1500,
                        dimension: 1,
                        inRange: {
                            color: ['#FF645E', '#80130F'],
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
        }
    }
</script>

<style scoped>
    .author-graph-container .charts{
        width: 100%;
        height: 300px;
    }

</style>
