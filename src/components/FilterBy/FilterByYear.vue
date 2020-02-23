<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>Publication Date</span>
        </div>
        <div class="text item"><el-link>Past 5 years</el-link></div>
        <div class="text item"><el-link>Past 2 years</el-link></div>
        <div class="text item"><el-link>Past years</el-link></div>

    </el-card>
</template>

<script>
  export default {
    name: 'FilterByYear'
  }
</script>

<style scoped>
    .text {
        font-size: 16px;
    }

    .item {
        /*margin-bottom: 18px;*/
    }

    .item:hover {
        cursor: pointer;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        /*width: 480px;*/
        margin-bottom: 10px;
    }

    .el-link {
        /*height: 30px;*/
        line-height: 40px;
    }
</style>
