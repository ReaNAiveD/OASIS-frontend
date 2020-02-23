<template>
    <div class="container">
        <SearchHeader></SearchHeader>
        <el-container>
            <el-aside>
                <FilterBy></FilterBy>
            </el-aside>
            <el-main>
                <DocumentList></DocumentList>
                <DocumentList></DocumentList>
                <DocumentList></DocumentList>
                <DocumentList></DocumentList>
            </el-main>
            <el-aside>
                <Recommendation></Recommendation>
            </el-aside>
        </el-container>
    </div>

</template>

<script>
  import SearchHeader from '@/components/SearchHeader'
  import DocumentList from '@/components/DocumentList'
  import FilterBy from '@/components/FilterBy'
  import Recommendation from '@/components/Recommendation'

  export default {
    name: 'Search',
    components: {
      SearchHeader,
      FilterBy,
      DocumentList,
      Recommendation
    }
  }
</script>

<style scoped>
    .el-aside::-webkit-scrollbar {
        display: none
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-container {
        background-color: whitesmoke;
    }

    .el-aside {
        /*background-color: #D3DCE6;*/
        color: #333;
        text-align: left;
        /*line-height: 200px;*/
        width: 200px;
        margin: 10px;
    }

    .el-main {
        /*background-color: #E9EEF3;*/
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
        margin: 10px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .container {
        height: 100%;
    }

    .el-container {
        height: 100%;
    }
</style>
