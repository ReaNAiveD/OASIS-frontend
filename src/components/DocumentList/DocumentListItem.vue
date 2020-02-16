<template>
    <div class="item-container">
        <el-row :gutter="10">
            <el-col :md="16" :sm="24">
                <div class="document-title">
                    {{title}}
                </div>
                <div class="document-abstract">
                    {{abstract}}
                </div>
            </el-col>
            <el-col :md="6" :xs="16">
                <ul>
                    <li class="document-author" v-for="(author, index) in authors" :key="index">
                        {{author.name}}
                    </li>
                </ul>
            </el-col>
            <el-col class="document-year" :md="2" :xs="8">
                {{year}}
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "DocumentListItem",
        props: {
            title: {
                type: String,
                default: "Document"
            },
            id: {
                type: Number,
                default: -1
            },
            authors: {
                type: Array,
                default: () => {
                    return []
                }
            },
            abstract: {
                type: String,
                default: ""
            },
            year: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped>
    .item-container {
        border-style: solid;
        border-width: 1px 0;
        border-color: rgba(105, 105, 105, 0.32);
        padding: 20px 10px;
    }

    .document-title {
        text-align: left;
        font-size: 36px;
        margin: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .document-abstract {
        text-align: left;
        font-size: 14px;
        margin: 0 0 0 10px;
        color: dimgrey;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .document-year {
        margin: 20px 0;
    }

    .document-author {
        font-size: 14px;
    }
</style>
