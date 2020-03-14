<template>
    <div class="container">
        <SearchHeader v-on:clickSearch="clickSearch"></SearchHeader>
        <el-container>
            <el-aside style="width: 250px">
                <FilterBy v-on:clickFilter="clickFilter"></FilterBy>
            </el-aside>
            <el-main>
                <Loading v-if="isLoading" style="position: fixed"></Loading>
                <div :class="{gray:isLoading}">
                    <DocumentList v-if="documents.length!==0" :documents="documents" :document-count="totalElements"
                                  v-on:clickSortBy="clickSortBy"></DocumentList>
                    <el-card v-else-if="!isLoading" style="margin-top: 35px ;color:lightgray">
                        很抱歉<br/>没有搜索到相关的论文！<br/>
                        不妨试试别的关键词～
                    </el-card>
                </div>
                <div class="block">
                    <span class="demonstration"></span>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="params.page+1"
                            :page-size="params.pageSize"
                            layout="prev, pager, next, jumper"
                            :total="totalElements"
                            :small=true>
                    </el-pagination>
                </div>
            </el-main>
            <el-aside style="width: 290px">
                <Recommendation></Recommendation>
            </el-aside>
        </el-container>
    </div>

</template>

<script>
  import SearchHeader from '@/components/SearchHeader/SearchHeader'
  import DocumentList from '@/components/DocumentList/index'
  import FilterBy from '@/components/FilterBy/index'
  import Recommendation from '@/components/Recommendation/index'
  import Loading from '@/components/Loading'

  //todo: 从path中获取搜索的条件keywords？
  export default {
    name: 'Search',
    components: {
      SearchHeader,
      FilterBy,
      DocumentList,
      Recommendation,
      Loading
    },
    data () {
      return {
        // 查询参数：由子组件来更新这些参数
        params: {
          'combined': '',
          'title': '',
          'author': '',
          'abstract': '',
          'affiliation': '',
          'publicationTitle': '',
          'yearFrom': 1970,
          'yearTo': 2020,
          'publisher': '',
          'conference': '',
          'orderby': 'default',
          'pageSize': 5,
          'page': 0
        },
        // pageable:{},
        totalPages: 0,
        totalElements: 0,
        documents: [],
        isLoading: true
      }
    },
    mounted () {
      window.addEventListener('beforeunload', () => this.beforeunloadFn())
    },
    created () {
      this.params.page = parseInt(localStorage.getItem('page')) || 0
    },
    methods: {
      beforeunloadFn () {
        localStorage.setItem('yearFrom', this.params.yearFrom)
        localStorage.setItem('yearTo', this.params.yearTo)
        localStorage.setItem('orderby', this.params.orderby)
        localStorage.setItem('page', this.params.page)
      },
      fetchList () {
        this.isLoading = true

        console.log(this.params)
        this.$api.fetchList(this.params).then(res => {
          this.documents = res.data.content
          this.totalPages = res.data.totalPages
          this.totalElements = res.data.totalElements
          this.isLoading = false
          console.log(res.data)
          this.backTop()

        }, err => {
          console.log(err)
        })
      },
      clickSearch (combined, title, author, affiliation) {
        this.params.combined = combined
        this.params.title = title
        this.params.author = author
        this.params.affiliation = affiliation
        this.params.page=0
        console.log(1111)
        this.fetchList()
      },
      clickSortBy (orderby) {
        this.params.orderby = orderby
        this.params.page=0
        this.fetchList()
      },
      clickFilter (yearFrom, yearTo) {
        this.params.yearFrom = yearFrom
        this.params.yearTo = yearTo
        this.params.page=0
        console.log(this.params.yearFrom)
        console.log(this.params.yearTo)
        this.fetchList()
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        this.params.page = val - 1
        this.fetchList()
        console.log(`当前页: ${val}`)
      },
      backTop () {
        let timer = setInterval(function () {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop
          let speed = Math.floor(-osTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = osTop + speed
          this.isTop = true
          if (osTop === 0) {
            clearInterval(timer)
          }
        }, 30)
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
        min-width: 380px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .block {
        background-color: whitesmoke;
    }

    .gray {
        opacity: 0.15;
        background: whitesmoke;
    }

</style>
