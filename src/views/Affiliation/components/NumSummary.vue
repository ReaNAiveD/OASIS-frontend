<template>
    <div class="summary-container">
        <el-row class="info-line">
            <el-col span="12" class="info-text">
                <i class="el-icon-document"></i>
                文章
            </el-col>
            <el-col span="12" class="summary-num">{{documentCount}}</el-col>
        </el-row>
        <el-row class="info-line">
            <el-col span="12" class="info-text">
                <i class="el-icon-user"></i>
                作者
            </el-col>
            <el-col span="12" class="summary-num">{{authorCount}}</el-col>
        </el-row>
        <el-row class="info-line">
            <el-col span="12" class="info-text">
                <i class="el-icon-link"></i>
                引用
            </el-col>
            <el-col span="12" class="summary-num">{{refCount}}</el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "NumSummary",
        props: {
            documentCount: {
                type: Number,
                default: 8848
            },
            authorCount: {
                type: Number,
                default: 8848
            },
            refCount: {
                type: Number,
                default: 8848
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .summary-container{
        width: 100%;
        height: 100%;
    }
    .info-line{
        padding: 0 12px 14px;
    }
    .info-line .info-text{
        text-align: right;
        padding:  12px 8px 8px;
        color: #909399;
        font-size: 14px;
    }

    .info-line .summary-num{
        text-align: left;
        padding: 8px;
        color: #409EFF;
        font-size: 24px;
    }
</style>
