<template>
    <div class="top-item box">
        <div class="top-name">
            <div style="font-size:50px;width:20%;color: #6b6b6b;line-height: 80px;margin-left: 3%">
                <i :class="icon" ></i>
            </div>

            <div class="top-name-title">
                <strong>{{title}}</strong>
                <div style="width: 100% ;font-size: 14px;margin-top: 4px"  >
                    <el-button size="mini" round @click="detail()" >view more</el-button>
                </div>

<!--                <el-popover-->
<!--                        placement="right"-->
<!--                        width="300"-->
<!--                        trigger="click">-->
<!--                    <el-table :data="data"  height="500">-->
<!--                        <el-table-column width="150" property="name" :label="labels[0] || '姓名'"   @click="deleteRow(scope.row)"></el-table-column>-->
<!--                        <el-table-column width="70" property="count" :label="labels[1] || '论文数'"></el-table-column>-->
<!--                        <el-table-column-->
<!--                                fixed="right"-->
<!--                                :label="labels[2] || '操作'"-->
<!--                                width="70">-->
<!--                            <template slot-scope="scope">-->
<!--                                <el-button-->
<!--                                        @click.native.prevent="detail(data[scope.$index].pushPath)"-->
<!--                                        type="text"-->
<!--                                        size="small">-->
<!--                                    查看-->
<!--                                </el-button>-->
<!--                            </template>-->
<!--                        </el-table-column>-->
<!--                    </el-table>-->
<!--                    <div slot="reference" style="width: 100% ;font-size: 14px;margin-top: 4px"  ><a>view more</a></div>-->
<!--                </el-popover>-->
            </div>
        </div>
        <div class="top-list">
            <ul>
                <li  v-for="(line, index) in data" :key="index">
                    <div class="item-top">
                        <a class="left" :href="line.pushPath" target="_blank">
                            {{line.name}}
                        </a>
                        <div class="right">
                            {{line.count}}
                            <span>{{measure}}</span>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <div class="el-progress el-progress--line el-progress--without-text" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="el-progress-bar">
                                <div class="el-progress-bar__outer" style="height: 6px;">
                                    <div class="el-progress-bar__inner" :style="'width:'+line.count/data[0].count*100+'%'">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopListCommon',
        data() {
            return {
                drawer: false,
                direction: 'rtl'
            };
        },
        props:{
            title: {
                type: String,
                default: 'Top'
            },
            icon:{
                type: String,
                default: 'el-icon-document'
            },
            listType:{
                type: String,
                default: 'Authors'
            },
            labels: {
                type: Array,
                default: function () {
                    return ['姓名', '论文数', '操作']
                }
            },
            measure: {
                type: String,
                default: 'Papers'
            },
            data: {
                type: Array,
                default: function () {
                    return [
                        {
                            name: 'YangLiu',
                            count: 22,
                            pushPath: '/author/10551'
                        }
                    ]
                }
            }
        },
        methods: {

            detail(path) {
                // this.$router.push({path: path, query: {}});
                if(this.listType==='Authors')
                    window.open(this.$router.resolve('/author-all').href, '_blank');
                else if(this.listType==='Affiliation')
                    window.open(this.$router.resolve('/aff-all').href, '_blank');
                else{
                    path='/home/'+this.listType
                    window.open(this.$router.resolve(path).href, '_blank');
                }

            }
        },
        computed:{
        }

    }
</script>

<style scoped>
    .box {
        box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
        border-radius: 4px;
        background: #fff;
    }

    .top-name{
        /*width: 75%;*/
        width: 100%;
        height: 80px;
        padding-top: 2%;
        /*height: 100%;*/
        font-size: 18px;
        background: rgba(255, 255, 255, 0.61);
        display: flex;
        -webkit-box-pack: justify;
        /*-webkit-box-pack: start;*/
        justify-content: space-between;
        justify-content: flex-start;
        /*-webkit-box-align: center;*/
        /*align-items: center;*/
        /*color: #20283e;*/
    }
    .top-name-title{
        /*padding-left: 15px;*/
        margin: 6% auto;
        margin-top: 4%;
        width: 80%;
        color: #6b6b6b;
        text-align:left;
        /*box-sizing: border-box;*/
    }
    .top-list {
        width: 100%;
        padding: 10px 30px 20px;
        box-sizing: border-box;
        text-align:left;

    }

    .top-item{

        margin: 0 10px;
        max-width: 520px;
        width: 24%;
    }
    .item-top {
        width: 100%;
        height: 20px;
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        font-size: 13px;
    }
    .left {
        width: 60%;
        color: #83a7cf;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-decoration: none;


    }
    .right {
        width: 40%;
        text-align: right;
        color: #777;
        width: 50% !important;
        font-size: 10px !important;
    }
    .item-bottom {
        margin-top: 3px;
        width: 100%;
        height: 14px;
    }
    .el-progress {
        position: relative;
        line-height: 1;
    }
    .top-list ul {
        width: 100%;
        height: 395px;
        overflow: hidden;
        padding: 0;
        margin-top: -5px;

    }


</style>
