<template>
    <div class="container">
        <SearchHeader v-on:clickSearch="clickSearch"></SearchHeader>
        <el-container>
            <el-aside style="width: 250px">
                <FilterBy v-on:clickFilter="clickFilter"></FilterBy>
            </el-aside>
            <el-main>
                <DocumentList :documents="documents" :search-count="searchCount" v-on:clickSortBy="clickSortBy"></DocumentList>
            </el-main>
            <el-aside style="width: 260px">
                <Recommendation></Recommendation>
            </el-aside>
        </el-container>
    </div>

</template>

<script>
  import SearchHeader from '@/components/SearchHeader/index'
  import DocumentList from '@/components/DocumentList/index'
  import FilterBy from '@/components/FilterBy/index'
  import Recommendation from '@/components/Recommendation/index'

  //todo: 从path中获取搜索的条件keywords？
  export default {
    name: 'Search',
    components: {
      SearchHeader,
      FilterBy,
      DocumentList,
      Recommendation
    },
    data () {
      return {
        // 查询参数：由子组件来更新这些参数
        params: {
          'combined': '',
          'title': '',
          'author': 'Yuexing Wang',
          'abstract': '',
          'affiliation': '',
          'publicationTitle': '',
          'yearFrom': '',
          'yearTo': '',
          'publisher': '',
          'conference': '',
          'orderby': 'default',
          'pageSize': '',
          'page': ''
        },
        searchCount:0,
        documents:[]
      }
    },
    created () {
      // 从$route.params中提取home页面传入的参数
      this.params.combined=this.$route.params.combined
      this.params.title=this.$route.params.title
      this.params.author=this.$route.params.author
      this.params.affiliation=this.$route.params.affiliation
      this.fetchList()
      // this.$api.getDocumentDetail(4322).then(res=>{
      //   console.log(res)
      // })
    },
    methods: {
      fetchList () {
        this.$api.fetchList(this.params).then(res => {
          this.documents=res.data.content
          this.searchCount=this.documents.length
          console.log("documentList: ",this.documents)
        },err=>{
          console.log(err)
        })
      },
      clickSearch(combined,title,author,affiliation){
        this.params.combined=combined
        this.params.title=title
        this.params.author=author
        this.params.affiliation=affiliation
        console.log(1111)
        this.fetchList()
      },
      clickSortBy(orderby){
        this.params.orderby=orderby
        this.fetchList()
      },
      clickFilter(yearFrom,yearTo){
        this.params.yearFrom = yearFrom
        this.params.yearTo=yearTo

        console.log(this.params.yearFrom)
        console.log(this.params.yearTo)

        this.fetchList()
      }

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
