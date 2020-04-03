<template>
<!--    <div class="echartLayout">-->
        <div id="sun" style="width:100%; height:100%; overflow: hidden "></div>
<!--    </div>-->
</template>

<script>
    import echarts from 'echarts'
    import {authorFieldPaper as getAuthorFieldPaper} from  '@/api/author'

    export default {
        name: 'fieldGraph',
        data() {
            return {
                    // fieldPaperData:{},
                    realList: [],
                    fieldPaperData: {//下面是例子
                       "documents":
                               [
                                       {
                                               "field_id": 1,
                                               "total_citations": 0,
                                               "title": "DeepMutation++: A Mutation Testing Framework for Deep Learning Systems",
                                               "docActivation": 0.8333,
                                               "id": 4352
                                       },
                                       {
                                               "field_id": 1,
                                               "total_citations": 0,
                                               "title": "An Empirical Study Towards Characterizing Deep Learning Development and Deployment Across Different Frameworks and Platforms",
                                               "id": 4414,
                                               "docActivation": 0.8333
                                       },

                                       {
                                               "id": 4635,
                                               "docActivation": 2.0000,
                                               "title": "CodeHow: Effective Code Search Based on API Understanding and Extended Boolean Model (E)",
                                               "field_id": 34,
                                               "total_citations": 15
                                       },
                                       {
                                               "title": "JaConTeBe: A Benchmark Suite of Real-World Java Concurrency Bugs (T)",
                                               "id": 4760,
                                               "docActivation": 1.1000,
                                               "total_citations": 6,
                                               "field_id": 41
                                       },

                                       {
                                               "id": 4859,
                                               "total_citations": 2,
                                               "title": "Mining revision histories to detect cross-language clones without intermediates",
                                               "field_id": 10,
                                               "docActivation": 0.7778
                                       }
                               ],
                       "fields": [

                               {
                                       "field_id": 10,
                                       "field_name": "Management science",
                                       "activation": 0.7778
                               },
                               {
                                       "field_name": "Engineering drawing",
                                       "field_id": 55,
                                       "activation": 0.8333
                               },
                               {
                                       "field_name": "Software engineering",
                                       "activation": 1.1000,
                                       "field_id": 41
                               },
                               {
                                       "activation": 2.0000,
                                       "field_id": 34,
                                       "field_name": "Parallel computing"
                               },
                               {
                                       "field_id": 1,
                                       "field_name": "Artificial intelligence",
                                       "activation": 2.4999
                               }
                       ]
                       },

            }
        },
        mounted: function() {
                getAuthorFieldPaper(this.$route.params.id).then(response=>{
                        // console.log("---"+response);
                        this.fieldPaperData=response.data.data;
                         this.operateData(this.fieldPaperData);
                        this.$nextTick(function() {
                                this.getPie()
                        })
                }).catch(error=>{
                        console.log(error)
                });


        },
        methods: {
                operateData(input){
                        let data=[];//最终结果
                        let item;
                        for(item of input.fields){//初始化领域
                                let fathername=Math.round(item.field_id/10);//先假设的父类名称
                                let flag=0;
                                for(let i=0;i<data.length;i++){//遍历查看是否已存在父类
                                        if(data[i].name===fathername){//已存在父类
                                                flag=1;
                                                data[i].children.push({//
                                                        name:item.field_name,
                                                        id:item.field_id,
                                                        children: [{
                                                                name: '5☆',
                                                                children: [{}]
                                                        },{
                                                                name: '4☆',
                                                                children: [{}]
                                                        },{
                                                                name: '3☆',
                                                                children: [{}]
                                                        }]
                                                });
                                                break;
                                        }
                                }
                                if(flag===0){//不存在父类
                                        data.push({
                                                name:fathername,
                                                id:fathername,
                                                itemStyle: {//暂用style
                                                        color: '#FFAE57'
                                                },
                                                children:[{
                                                        name:item.field_name,
                                                        id:item.field_id,
                                                        children: [{
                                                                name: '5☆',
                                                                children: [{}]
                                                        },{
                                                                name: '4☆',
                                                                children: [{}]
                                                        },{
                                                                name: '3☆',
                                                                children: [{}]
                                                        }]
                                                }]
                                        })
                                }
                        }
                        for(item of input.documents) {//初始化论文
                                for(let i=0;i<data.length;i++) {//遍历父领域
                                        for(let j=0;j<data[i].children.length;j++){//遍历子领域
                                                if(item.field_id===data[i].children[j].id){
                                                        // console.log(data[i].children[j].children[0])
                                                        let level=Math.round(item.docActivation*10/5)-1;//暂用的一种level分布
                                                        level=Math.min(level,2);
                                                        console.log(level);
                                                        data[i].children[j].children[level].children.push({
                                                               name:item. title
                                                        });
                                                        break;
                                                }
                                        }
                                }
                        }
                        this.realList=data;
                        // console.log(this.realList);
                },
            getPie() {
                    // console.log(this.fieldPaperData);
                // 绘制图表
                var myChart = echarts.init(document.getElementById('sun'));
                var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
                var bgColor = '#2E2733';

                var itemStyle = {
                    star5: {
                        color: colors[0]
                    },
                    star4: {
                        color: colors[1]
                    },
                    star3: {
                        color: colors[2]
                    },
                    star2: {
                        color: colors[3]
                    }
                };

                var data =this.realList;

                for (var j = 0; j < data.length; ++j) {
                    var level1 = data[j].children;
                    for (var i = 0; i < level1.length; ++i) {
                        var block = level1[i].children;
                        var bookScore = [];
                        var bookScoreId;
                        for (var star = 0; star < block.length; ++star) {
                            var style = (function (name) {
                                switch (name) {
                                    case '5☆':
                                        bookScoreId = 0;
                                        return itemStyle.star5;
                                    case '4☆':
                                        bookScoreId = 1;
                                        return itemStyle.star4;
                                    case '3☆':
                                        bookScoreId = 2;
                                        return itemStyle.star3;
                                    case '2☆':
                                        bookScoreId = 3;
                                        return itemStyle.star2;
                                }
                            })(block[star].name);

                            block[star].label = {
                                color: style.color,
                                downplay: {
                                    opacity: 0.5
                                }
                            };

                            if (block[star].children) {
                                style = {
                                    opacity: 1,
                                    color: style.color
                                };
                                block[star].children.forEach(function (book) {
                                    book.value = 1;
                                    book.itemStyle = style;

                                    book.label = {
                                        color: style.color
                                    };

                                    var value = 1;
                                    if (bookScoreId === 0 || bookScoreId === 3) {
                                        value = 5;
                                    }

                                    if (bookScore[bookScoreId]) {
                                        bookScore[bookScoreId].value += value;
                                    }
                                    else {
                                        bookScore[bookScoreId] = {
                                            color: colors[bookScoreId],
                                            value: value
                                        };
                                    }
                                });
                            }
                        }

                        level1[i].itemStyle = {
                            color: data[j].itemStyle.color
                        };
                    }
                }

                var option = {
                    title: {
                        text: '研究方向发表论文统计',
                        top: 'bottom',
                        left: 'right',
                        textStyle:{
                            color:'#fff'
                        }

                    },
                    backgroundColor: bgColor,
                    color: colors,
                    series: [{
                        type: 'sunburst',
                        radius: [0, '90%'],
                        center: ['50%', '50%'],
                        data: data,//设置每个扇形块的样式,优先级最高；
                        sort: function (a, b) {
                            if (a.depth === 1) {
                                return b.getValue() - a.getValue();
                            }
                            else {
                                return a.dataIndex - b.dataIndex;
                            }
                        },
                        label: {
                            rotate: 'radial',//径向旋转
                            color: bgColor
                        },
                        itemStyle: {//整个旭日图的样式，优先级最低
                            borderColor: bgColor,
                            borderWidth: 2
                        },
                        levels: [//设置每一层的样式，优先级中等
                            {},
                            {
                                r0: 0,//空心圆半径
                                r: 150,//外半径
                                label: {
                                    rotate: 0
                                }
                            },
                            {
                                r0: 150,
                                r: 320
                             },
                            {
                                r0: 320,
                                r: 345,
                                itemStyle: {
                                    shadowBlur: 2,
                                    shadowColor: colors[2],
                                    color: 'transparent'
                                },
                                label: {
                                    rotate: 'tangential',
                                    fontSize: 10,
                                    color: colors[0]
                                }
                            },
                            {
                                r0: 345,
                                r: 350,
                                itemStyle: {
                                    shadowBlur: 80,
                                    shadowColor: colors[0]
                                },
                                label: {
                                    position: 'outside',
                                    textShadowBlur: 5,
                                    textShadowColor: '#333',
                                },
                                downplay: {//downplay 表示除了 highlight 扇形块之外的被淡化的扇形块
                                    label: {
                                        opacity: 0.5//圆形透明度
                                    }
                                }
                             }
                        ]
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option)
            }
        }

    }

</script>

<style scoped>

</style>
