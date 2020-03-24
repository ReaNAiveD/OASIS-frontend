<template>
    <div class="author-info-container">
        <el-card class="box-card card-left">
            <el-container class="author-top">
                <div class="author-photo">
                    <el-image
                            src=https://www.acemap.info/attachment/default/author.png
                            :fit="fit"></el-image>
                </div>
                <div class="author-introduce">
                    <div class="author-name">{{author.name}}</div>
                    <div class="author-descrip">
                        <i class="el-icon-office-building"></i>
                        <a :href="'/aff/'+affiliationID" target="_blank">{{author.affiliation}}</a>

                    </div>
                    <div class="author-field">
                        <el-tag class="author-keyword" @click="toField(index)" size="small" v-for="(keyword, index) in authorKeywords" :key="index">{{keyword}}</el-tag>
                    </div>
                </div>
            </el-container>
            <el-container class="author-bottom">
                <div class="data">
                    <div style="font-size: x-large;margin-top: 20px">{{author.documentCount}}</div>
                    <div style="font-size: smaller">papers</div>
                </div>
                <div class="data">
                    <div style="font-size: x-large;margin-top: 20px">{{author.documentCount}}</div>
                    <div style="font-size: smaller">Citations</div>
                </div>
                <div class="data">
                    <div style="font-size: x-large;margin-top: 20px">{{author.documentCount}}</div>
                    <div style="font-size: smaller">Citations</div>
                </div>

                <div class="data">
                    <div style="font-size: x-large;margin-top: 20px">{{author.documentCount}}</div>
                    <div style="font-size: smaller">Citations</div>
                </div>

            </el-container>
        </el-card>
    </div>

</template>

<script>
    export default {
        name: "AuthorInfoCard",
        data(){
            return{
                affiliationID:1,//需要一个可以根据作者id返回机构id的接口
            }
        },
        computed: {
            authorKeywords: function () {
                if (this.author.authorKeywords === "") return [];
                return (this.author.authorKeywords.split(";").filter(function (keyword) {
                    return keyword !== '';
                })).splice(0,6);
            }
        },
        methods:{
            toField(tag) {
                console.log(tag);
                window.open(this.$router.resolve('/field/'+tag).href, '_blank');
            },
        },
        props:['author']

    }
</script>

<style scoped>
    .author-info-container{
        display: flex;
        justify-content: space-between;
    }
    .box-card {
        text-align: left;
        margin: 40px;
        width: 100%;
        height: 250px;

    }
    .author-top{
        align-items: center;
    }
    .author-photo{
        width: 80px;
        margin-top: 0px;
    }
    .el-image{
        border-radius: 100px;
    }
    .author-introduce{
        padding-left: 16px;
        box-sizing: border-box;
        min-width: 250px;
    }
    .author-name{
        font-size: x-large;
    }
    .author-descrip{
        margin: 5px;
        font-size: smaller;
    }
    .author-field{
        margin: 5px;
    }
    .author-keyword{
        float: left;
        margin: 0 3px 6px;
    }

    .author-bottom{
        margin-top: 30px;
        width: 100%;
        height: 90px;
        background: #f9fafc;
    }
    .data{
        width: 33%;
        height: 100%;
        text-align: center;
    }
</style>