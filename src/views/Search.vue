<template>
    <div class="container">
        <SearchHeader></SearchHeader>
        <el-container>
            <el-aside style="width: 250px">
                <FilterBy></FilterBy>
            </el-aside>
            <el-main>
                <DocumentList></DocumentList>
            </el-main>
            <el-aside style="width: 260px">
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
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-container {
        background-color: whitesmoke;
        padding-top: 50px;
    }

    .el-aside {
        /*background-color: #D3DCE6;*/
        color: #333;
        text-align: left;
        /*line-height: 200px;*/
        /*width: 200px;*/
        margin: 10px;
    }

    .el-main {
        /*background-color: #E9EEF3;*/
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
        margin: 10px;
        padding: 0;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
</style>
