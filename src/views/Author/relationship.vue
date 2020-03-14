<template>
    <div class="echartLayout">
        <div id="container" style="width:100%; height:100%; overflow:hidden;"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "authorRelation",
        data() {
            return {
                myChart: null,
                chartData:[],
                chartLink:[],
                categoryArray:[{name:"核心人物"},{name:"家人"},{name:"朋友"}],
            }
        },
        created(){
            console.log(this.$route.params.id);

        },
        mounted() {
            this.initEchart()
        },
        methods: {
            initEchart() {
                let dom = document.getElementById("container");
                this.myChart = echarts.init(dom);
                this.chartData=this.dataEChart();
                this.chartLink=this.linkEChart();
                this.categories=this.categoryArray;
                let option = {
                    title: {
                        text: 'Author Relationship',
                        subtext: 'Default layout',
                        top: 'bottom',
                        left: 'right'
                    },
                    tooltip:{},
                    legend: {
                        x: 'left',
                        data: this.categories.map(function (a) {//显示策略
                            return a.name;
                        })
                    },
                    series: [
                        {

                            categories: this.categories,
                            name:'Author Relationship',
                            edgeLabel: {//关系注释
                                normal: {
                                    formatter:"{c}",
                                    show:true
                                }
                            },
                            edgeSymbol:'circle',
                            force:{//点之间的距离
                                repulsion:3000
                            },
                            layout:'force',//点之间的距离
                            roam:true,
                            itemStyle:{//球颜色
                                normal:{
                                    //color: '#ed3e5e'
                                },

                                //鼠标放上去有阴影效果
                                emphasis: {
                                    shadowColor: '#b5c2db',
                                    shadowOffsetX: 0,//阴影方向
                                    shadowOffsetY: 0,
                                    shadowBlur: 20,//阴影大小
                                },
                            },
                            label:{
                                normal:{
                                    show:true //球上的名字
                                }
                            },

                            symbolSize:(value)=>{return value*7;}, //球的大小
                            type:'graph',
                            links: this.chartLink,//关系源
                            data:this.chartData,//数据源
                            focusNodeAdjacency: true,//鼠标移上去高亮相关人
                            lineStyle: {
                                color: 'source',//线和源同色
                                curveness:0.3//线弯曲程度
                            },
                            emphasis: {
                                lineStyle: {
                                    width: 8 //鼠标移上去后线的宽度
                                }
                            }
                        }
                    ]
                };
                this.myChart.setOption(option);
                this.myChart.on('click', function (params) {
                    console.log(params.data)//获取点击的人或关系的数据信息
                });
            },
            /**
             * 数据集合
             */
            dataEChart(){
                let data = [

                        {category:0, name: '乔布斯', value : 10, label: '乔布斯',id:1},

                        {category:1, name: '丽萨-乔布斯',value : 2,id:2},

                        {category:1, name: '保罗-乔布斯',value : 3,id:3},

                        {category:1, name: '克拉拉-乔布斯',value : 3,id:4},

                        {category:1, name: '劳伦-鲍威尔',value : 7,id:5},

                        {category:2, name: '史蒂夫-沃兹尼艾克',value : 11},

                        {category:2, name: '奥巴马',value : 8,id:6},

                        {category:2, name: '比尔-盖茨',value : 9,id:7},

                        {category:2, name: '乔纳森-艾夫',value : 4,id:8},

                        {category:2, name: '蒂姆-库克',value : 4,id:9},

                        {category:2, name: '龙-韦恩',value : 1,id:10},

                    ];
                return data;
            },
            /**
             * 关系数据集合
             */
            linkEChart(){
                let dataLink=[

                    {source : '2', target : "1", weight : 1, value: '女儿\r'},

                    {source : '3', target : '1', weight : 2, value: '父亲'},

                    {source : '4', target : '1', weight : 1, value: '母亲'},

                    {source : '5', target : '1', weight : 2},

                    {source : '11', target : '1', weight : 3, value: '合伙人'},

                    {source : '6', target : '1', weight : 1},

                    {source : '7', target : '1', weight : 6, value: '竞争对手'},

                    {source : '8', target : '1', weight : 1, value: '爱将'},

                    {source : '9', target : '1', weight : 1},

                    {source : '10', target : '1', weight : 1},

                    {source : '4', target : '3', weight : 1},

                    {source : '6', target : '3', weight : 1},

                    {source : '6', target : '4', weight : 1},

                    {source : '6', target : '5', weight : 1},

                    {source : '6', target : '11', weight : 1},

                    {source : '7', target : '6', weight : 6},

                    {source : '7', target : '4', weight : 1},

                    {source : '9', target : '6', weight : 1}
                ];
                return dataLink;
            },
        }
    }
</script>

<style scoped>
    .echartLayout {
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
</style>