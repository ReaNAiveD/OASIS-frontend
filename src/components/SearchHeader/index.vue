<template>
    <div class="document-list-head-search">
        <el-select class="document-list-search" v-model="searchType">
            <el-option v-for="type in searchTypes" :key="type.value" :value="type.value" :label="type.label"/>
        </el-select>
        <el-input class="document-list-search search-input" v-model="searchKeyword" placeholder="请输入搜索内容"></el-input>
        <el-button class="document-list-search" type="primary">搜索</el-button>
    </div>
</template>

<script>
  export default {
    name: 'SearchHeader'
  }
</script>

<style scoped>

    .document-list-search {
        display: inline-block;
        margin: 5px;
    }

    .document-list-search.search-input {
        max-width: 400px;
        min-width: 200px;
    }

    .document-list-head-search {
        /*float: right;*/
        position: fixed;
        width: 100%;
        background-color: white;
    }

    .list-container {
        margin: 20px 0;
    }
</style>
