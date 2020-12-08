<template>
    <div class="container">
        <SearchHeader v-on:clickSearch="clickSearch"></SearchHeader>
      <div class="content">
        <el-row :gutter="5" type="flex" justify="space-around">
          <el-col :span="5">
            <Filters @changeYear="changeYear" @changePublishType="changePublishType"></Filters>
          </el-col>
          <el-col :span="11">
            <Loading v-if="isLoading" style="position: fixed;z-index: 99999"></Loading>
            <div>
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
          <el-col :span="6">
            <Recommendation></Recommendation>
          </el-col>
        </el-row>
      </div>
      <div :class="{loading:isLoading}"></div>
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
          'combined': '',  // 混合搜索关键词，根据此关键词在包括论文标题、作者、年份等中匹配，可包含多个关键词，空格分隔，作且运算，可选，空为全部
          'title': '',  // 论文标题搜索关键词，可选，空为全部
          'author': '',  // 论文作者搜索关键词，可选，空为全部
          'abstract': '',  // 摘要搜索关键词，可选，空为全部
          'affiliation': '',  // 论文第一作者所属单位搜索关键词，可选，空为全部
          'publicationTitle': '',  // 出版物名搜索关键词，可选，空为全部
          'yearFrom': 1970,  // 出版年份搜索关键词，可选，空为全部
          'yearTo': 2020,  // 出版年份搜索关键词，可选，空为全部
          'publisher': '',  // 出版商搜索关键词，可选，空为全部
          'conference': 'all',  // 会议，"all"，"ase"或"icse"或"others"，默认为"all"
          'orderby': 'default',  // 排序方式关键词，默认为default，可选值default/early/recent
          'pageSize': 5,  // 分页大小，可选，默认20
          'page': 0  // 页号，可选，默认0（也可能是1，最小的那个）
        },
        // pageable:{},
        totalPages: 0,
        totalElements: 0,
        documents: [],
        isLoading: true,
        startYear:1970,
        endYear:2020,
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

        console.log("====================fetchList: start====================")
        console.log("params:" ,this.params)
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
        console.log("====================fetchList: end====================")
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
      clickFilter () {
        this.params.page=0
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
      },
      changeYear(startYear,endYear){
        this.params.yearFrom=startYear
        this.params.yearTo=endYear
        // todo: 调用fetchList
        console.log("changeYear--param: ",this.params)
        this.clickFilter()
      },
      changePublishType(checkList){
        let count=checkList.length
        if (count===2){
          this.params.conference='all'
        }else if(count===1){
          this.params.conference=checkList[0]
        }else if(count===0){
          this.params.conference='others'
        }
        // todo: 调用fetchList
        console.log("changePublishType--param: ",this.params)
        this.clickFilter()
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

    .loading {
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
</style>
