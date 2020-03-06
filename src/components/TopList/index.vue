<template>
    <div class="top-item box">
        <div class="top-name">
            <div class="top-name-title">
                <strong>Top Author</strong>
<!--                <div style="width: 100% ;font-size: 14px;margin-top: 4px"  >view more</div>-->
                <el-popover
                        placement="right"
                        width="300"
                        trigger="click">
                    <el-table :data="authors"  height="500">
                        <el-table-column width="150" property="name" label="姓名"   @click="deleteRow(scope.row)"></el-table-column>
                        <el-table-column width="70" property="documentCount" label="论文数"></el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="70">
                            <template slot-scope="scope">
                                <el-button
                                        @click.native.prevent="authorDetail(scope.$index)"
                                        type="text"
                                        size="small">
                                    查看
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div slot="reference" style="width: 100% ;font-size: 14px;margin-top: 4px"  >view more</div>
                </el-popover>

            </div>
        </div>
        <div class="top-list">
            <ul>
                <li  v-for="(author, index) in authors" :key="index">
                    <div class="item-top">
                        <a class="left" :href="'/author/'+author.authorId" target="_blank">
                            {{author.name}}
                        </a>
                        <div class="right">
                            {{author.documentCount}}
                            <span>Papers</span>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <div class="el-progress el-progress--line el-progress--without-text" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="el-progress-bar">
                                <div class="el-progress-bar__outer" style="height: 6px;">
                                    <div class="el-progress-bar__inner" :style="'width:'+author.documentCount/authors[0].documentCount*100+'%'">
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
        name: 'TopList',
        data() {
            return {
                drawer: false,
                direction: 'rtl',
            };
        },
        props:['authors'],
        methods: {
            authorDetail(index) {
                // console.log(index);
                // this.$router.push({path: '/author/'+this.authors[index].authorId, query: {}});
                window.open(this.$router.resolve('/author/'+this.authors[index].authorId).href, '_blank');

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
    /*height: 100%;*/
    font-size: 18px;
    background: rgba(20, 98, 138, 0.76);
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
    width: 80%;
    color: white;
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
