<template>
    <div class="container">
        <SearchHeader v-on:clickSearch="clickSearch"></SearchHeader>
      <div class="content">
        <el-row :gutter="30" :justify="center">
          <el-col :md="5">
            <Filters v-on:clickFilter="clickFilter"></Filters>
          </el-col>
          <el-col :md="11">
            <Loading v-if="isLoading" style="position: fixed"></Loading>
            <div :class="{gray:isLoading}">
              <DocumentList v-if="documents.length!==0" :documents="documents" :document-count="totalElements"
                            v-on:clickSortBy="clickSortBy" :keyword-limit="10"></DocumentList>
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
          </el-col>
          <el-col :md="6">
            <Recommendation></Recommendation>
          </el-col>
        </el-row>
      </div>
    </div>

</template>

<script>
  import SearchHeader from '@/components/SearchHeader/SearchHeader'
  import DocumentList from '@/components/DocumentList/index'
  import  Filters from '@/components/FilterBy/index'
  import Recommendation from '@/components/Recommendation/index'
  import Loading from '@/components/Loading'

  //todo: 从path中获取搜索的条件keywords？
  export default {
    name: 'Search',
    components: {
      SearchHeader,
      Filters,
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
        /*background-color: #B3C0D1;*/
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-row {
        /*background-color: whitesmoke;*/
        padding-top: 50px;
      /*margin: auto;*/
      /*text-align: center;*/
    }

    .el-col {
        /*background-color: #E9EEF3;*/
        color: #333;
        /*text-align: center;*/
        /*line-height: 160px;*/
        margin: 10px;
        padding: 0;
        min-width: 280px;
    }

    body > .el-row {
        margin-bottom: 40px;
    }

    .gray {
        opacity: 0.15;
        background: whitesmoke;
    }

    .container {
      background-color: whitesmoke;
    }

    .content {
      position: relative;
      margin: auto;
      min-width: 1220px;
      max-width: 1700px;
      padding-left: 40px;
      padding-right: 40px;
    }

</style>
