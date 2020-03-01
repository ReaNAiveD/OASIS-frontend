<template>
    <div class="document-list-head-search">
        <img src="@/assets/logo.png" width="40" alt="">
        <span>CSEIII</span>
        <el-select class="document-list-search" v-model="searchType">
            <el-option v-for="type in searchTypes" :key="type.value" :value="type.value" :label="type.label"/>
        </el-select>
        <el-input class="document-list-search search-input" v-model="searchKeyword" placeholder="请输入搜索内容"></el-input>
        <el-button class="document-list-search" type="primary">搜索</el-button>
    </div>
</template>

<script>
  export default {
    name: 'SearchHeader',
    data () {
      return {
        searchType: '',
        searchTypes: [
          {
            value: '1',
            label: '作者名称'
          }, {
            value: '2',
            label: '出版社'
          }, {
            value: '3',
            label: '论文标题'
          }],
        searchKeyword: ''
      }
    }
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
        /*图层置顶*/
        z-index: 999;
        display: flex;
        align-items: center;
        padding-left: 30px;
        /*justify-content: center;*/
    }

    .document-list-head-search > * {
    }

    .el-select {
        margin-left: 90px;
    }

    .list-container {
        margin: 20px 0;
    }
</style>
