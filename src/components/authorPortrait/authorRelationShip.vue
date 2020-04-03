<template>
        <div id="authorRelationContainer" style="width:100%; height:100%; overflow: hidden "></div>
</template>

<script>
    import echarts from 'echarts'
    import {authorRelation as getAuthorRelation} from  '@/api/author'
    export default {
        name: "authorRelation",
        data() {
            return {
                myChart: null,
                    relationArray:{},
                chartData:[],
                chartLink:[],
                categoryArray:[{name:""},{name:""},{name:""},{name:""},{name:""},
                        {name:""},{name:""},{name:""},{name:""},{name:""},{name:""},
                        {name:""},{name:""},{name:""},{name:""},{name:""},
                        {name:""},{name:""},{name:""},{name:""},{name:""}],
                w:400,
                h:300,
            }
        },

        created(){

        },
        mounted() {
                // console.log(this.relationArray);
                // console.log(this.$route.params.id);
                getAuthorRelation(this.$route.params.id).then(response=>{
                        // console.log(response);
                        this.relationArray=response.data;
                        this.initEchart();
                        // console.log(this.relationArray);
                }).catch(error=>{
                        console.log(error)
                });

        },
        methods: {
            initEchart() {
                    // console.log(this.relationArray);
                let dom = document.getElementById("authorRelationContainer");
                this.myChart = echarts.init(dom);
                this.chartData=this.getData(this.relationArray.vertices);
                this.chartLink=this.getRelation(this.relationArray.edges);
                this.categories=this.categoryArray;
                // let routeTemp=this.$route;
                let option = {
                    title: {
                        text: '作者关系图谱',
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
                // this.myChart.on('click', function (params) {
                //     console.log(params.data.id)//获取点击的人或关系的数据信息
                //         // console.log(this.$route.params.id)
                //         // this.goAuthor(params.data.id)
                //     window.open(routeTemp.resolve('/author/'+params.data.id).href, '_blank');
                // });
                    this.myChart.on('click',param=>{
                            // console.log("func:",this.clickItem)
                            // console.log(param);
                            console.log(param.data.authorId);
                            this.$router.push({path:'/author/'+param.data.authorId})
                    });


            },
                goAuthor(id){
                        window.open(this.$router.resolve('/author/'+id).href, '_blank');
                },
                getData(input){
                    let data=[];
                        let item;
                        for(item of input){
                                data.push({category:item.category,
                                        name:item.content.name,
                                        value:item.content.activation,
                                id:item.id,
                                        authorId:item.content.id
                                });
                        }
                        console.log(input)
                        // console.log(data)
                        return data;
                },
                getRelation(input){
                        let data=[];
                        let item;
                        for(item of input){
                                data.push({source:item.v1,
                                        target:item.v2,
                                        weight:item.weight,
                                        value:'合作项目数：'+item.content.commonWorks,
                                });
                        }
                        return data;
                },
            dataEChart(){
                let data = [
                    {category:0, name: '乔布斯', value : 10, label: '乔布斯',id:1},
                ];
                return data;
            },
            linkEChart(){
                let dataLink=[
                    {source : '2', target : "1", weight : 1, value: '女儿\r'},
                ];
                return dataLink;
            },
        }
    }
</script>

<style scoped>

</style>