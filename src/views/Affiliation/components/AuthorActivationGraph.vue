<template>
    <div class="author-activation-container">
        <div class="title">
            <i class="el-icon-document"/>
            <span class="title-text">{{title}}</span>
        </div>
        <div class="charts">
            <CommonCharts ref="bar" :option="option"/>
        </div>
    </div>
</template>

<script>
    import {getAuthorActivation} from "@/api/affiliation";
    import CommonCharts from "@/components/CommonCharts/index";
    export default {
        name: "AuthorActivationGraph",
        components: {CommonCharts},
        data: function () {
            return {
                title: '作者活跃度统计',
                option: {
                    dataset: [
                    ],
                    tooltip:{
                        padding: 8,
                        backgroundColor: '#222',
                        borderColor:'#777',
                        formatter: function (obj) {
                            const value = obj.data;
                            return '<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.3); font-size: 18px;padding-bottom: 4px; margin: 4px">' +
                                value.name + '</div>' +
                                '活跃度：' + value.activation.toFixed(2) + '<br>' +
                                '发表论文：' + value.docCount + '<br>'
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
                        // {
                        //     show: false,
                        //     type: 'continuous',
                        //     min: 3,
                        //     max: 20,
                        //     dimension: 2,
                        //     inRange: {
                        //         color: ['#714096', '#850d0b']
                        //     }
                        // }
                    ],
                    series: [
                        {
                            name: '作者',
                            type: 'graph',
                            layout: 'force',
                            force:{
                                initLayout: 'circular',
                                repulsion: 20
                            },
                            itemStyle: {
                                borderColor: '#fff',
                                borderWidth: 1,
                                shadowBlur: 5,
                                shadowColor: 'rgba(0, 0, 0, 0.3)'
                            },
                            data: []
                        }
                    ]
                }
            }
        },
        created:function(){
            getAuthorActivation(this.$route.params.id).then(res =>{
                this.option.series[0].data = res.data.data.slice(0, 50).map(function(data){
                    return {
                        name: data.name,
                        value: Math.ceil(data.activation * 10),
                        activation: data.activation,
                        docCount: data.docCount,
                        id: data.id
                    }
                });
                for (let i = 0; i < this.option.series[0].data.length; i++){
                    this.option.series[0].data[i].itemStyle = {
                        color : this.getRandomColor('#c26eff', '#d41512')
                    }
                }
                this.$refs.bar.updateCharts();
            });
            // this.option.series[0].data = this.option.series[0].data.map(function (a) {
            //     a.itemStyle.color = this.getRandomColor(parseInt('71', 16), parseInt('40', 16), parseInt('96', 16), 1,
            //         parseInt('85', 16), parseInt('0d', 16), parseInt('0b', 16), 1)
            // })
        },
        methods: {
            getRandomColor:function(color1, color2){
                const r1 = parseInt(color1.substr(1, 2), 16);
                const b1 = parseInt(color1.substr(3, 2), 16);
                const g1 = parseInt(color1.substr(5, 2), 16);
                const a1 = parseInt(color1.substr(7, 2), 16) | 255;
                const r2 = parseInt(color2.substr(1, 2), 16);
                const b2 = parseInt(color2.substr(3, 2), 16);
                const g2 = parseInt(color2.substr(5, 2), 16);
                const a2 = parseInt(color2.substr(7, 2), 16) | 255;
                return 'rgba('+Math.floor(r1+(r2-r1)*Math.random())+','+Math.floor(g1+(g2-g1)*Math.random())+','
                    +Math.floor(b1+(b2-b1)*Math.random())+','+Math.floor(a1+(a2-a1)*Math.random())+')'
            }
        }
    }
</script>

<style scoped>
    .author-activation-container .charts{
        height: 300px;
    }
</style>
