<template>
    <el-row>
        <el-col class="info-row" v-for="author in authorSplit" :key="author.id" :xs="24" :sm="12" :md="8">
            <div>
                <a class="author" :href="'/author/'+author.id" target="_blank">
                    {{author.authorName}}
                </a>
            </div>
            <div>
                <a class="affiliation" :href="'/aff/'+author.affiliationId" target="_blank">
                    {{author.affiliationName}}
                </a>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "SimpleAuthorList",
        props: {
            authors: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        computed: {
            authorSplit: function () {
                return this.authors.slice(0, 9)
            }
        },
        data: function () {
            return {
                col_count: 3
            }
        }
    }
</script>

<style scoped>
    .info-row{
        margin-bottom: 16px;
        padding: 0 4px;
    }

    .author{
        text-align: left;
        font-size: 18px;
        color: #303133;

        display:-webkit-box;
        white-space: nowrap;
        overflow: hidden; /** 隐藏超出的内容 **/
        text-overflow:ellipsis;
    }

    .affiliation{
        text-align: left;
        font-size: 14px;
        color: dimgray;
        display:-webkit-box;
        overflow: hidden; /** 隐藏超出的内容 **/
        white-space: nowrap;
        text-overflow:ellipsis;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
        color: dodgerblue;
    }
</style>
