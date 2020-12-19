<template>
    <el-card class="author-result-container">
        <el-container>
            <el-aside
                width="100px">
                <div class="author-photo">
                    <el-image
                        src=https://www.acemap.info/attachment/default/author.png
                    ></el-image>
                </div>
            </el-aside>
            <el-main>
                <el-link :href="'/author/'+id" class="author-name">{{name}}</el-link>
                <div class="author-aff">
                    <i class="el-icon-office-building"></i>{{aff}}
                </div>
<!--                <div class="author-field">-->
<!--                    <el-tag class="author-keyword" type="info" size="small" v-for="(field, index) in domains.slice(0, 3)" :key="index">{{field}}</el-tag>-->
<!--                </div>-->
                <el-col :span="12">
                    <div class="data">{{docCount}}</div>
                    <div class="data-name">篇文章</div>
                </el-col>
                <el-col :span="12">
                    <div class="data">{{activation.toFixed(2)}}</div>
                    <div class="data-name">活跃度</div>
                </el-col>
            </el-main>
        </el-container>
    </el-card>
</template>

<script>
export default {
    name: "AuthorResultInfo",
    props: {
        id: {
            type: Number
        },
        name: {
            type: String,
            default: ""
        },
        aff: {
            type: String,
            default: ""
        },
        docCount: {
            type: Number,
            default: 0
        },
        activation: {
            type: Number,
            default: 0
        },
        domains: {
            type: Array,
            default: function (){
                return []
            }
        }
    }
}
</script>

<style scoped>
.author-photo{
    margin-top: 16px;
}
.data{
    font-size: x-large;
    padding-top: 16px;
    text-align: center;
}
.data-name{
    font-size: smaller;
    text-align: center;
}
.author-name{
    font-size: large;
    padding: 4px;
}
</style>
