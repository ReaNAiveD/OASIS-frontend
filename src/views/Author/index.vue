<template>

    <el-row class="main-container">
        <el-col class="col-container" :md="8" :sm="24">
            <el-card>
                <AuthorInfo :info="authorDetail"/>
            </el-card>
        </el-col>
        <el-col class="col-container" :md="16" :sm="24">
            <DocumentList :documents="displayDocuments" :document-count="authorDetail.documentCount" @clickSortBy="resort"></DocumentList>
            <el-pagination small layout="prev, pager, next" :total="authorDetail.documentCount" :page-size="pageSize" @current-change="pageChange"></el-pagination>
        </el-col>
    </el-row>
</template>

<script>
  import AuthorInfo from '@/components/AuthorInfo'
  import DocumentList from '@/components/DocumentList/index'
  import { detail as getAuthorDetail } from '@/api/author'

  const sortFuncs= {
        // eslint-disable-next-line no-unused-vars
        defaultSort : function (a, b) {
            return 0;
        },
        recentSort : function (a, b) {
            return b.publicationYear - a.publicationYear;
        },
        earlySort : function (a, b) {
            return a.publicationYear - b.publicationYear;
        }
    }

    export default {
        name: "index",
        components: {DocumentList, AuthorInfo},
        data: function () {
            return {
                authorDetail: {
                    "id":10448,
                    "name":"",
                    "firstName":"",
                    "lastName":"",
                    "affiliation":"",
                    "authorKeywords":"",
                    "ieeeId":"",
                    "coworkers":[],
                    "documentCount":0,
                    "documents": []
                },
                pageSize: 20,
                currentPage: 1,
                sortFunc: sortFuncs.defaultSort,
            }
        },
        computed: {
            displayDocuments: function () {
                console.log('Author\\index: displayDocuments')
                console.log(this.authorDetail.documents)
                return this.authorDetail.documents.slice().sort(this.sortFunc).slice(this.pageSize * (this.currentPage - 1), this.pageSize * (this.currentPage) - 1);
            }
        },
        created: function () {
            this.loadData()
        },
        methods: {
          loadData(){
            console.log(this.$route.params.id);
            getAuthorDetail(this.$route.params.id).then(response => {
              console.log(response);
              this.authorDetail = response.data;
            }).catch(error =>{
              console.log(error)
            })
          },
            pageChange: function (currentPage) {
                this.currentPage = currentPage;
                scrollTo(0, 0);
            },
            resort: function (sortType) {
                if (sortType === 'recent'){
                    this.sortFunc = sortFuncs.recentSort;
                }
                else if (sortType === 'early'){
                    this.sortFunc = sortFuncs.earlySort;
                }
                else{
                    this.sortFunc = sortFuncs.defaultSort;
                }
            }
        },
        watch:{
          '$route'(){
            this.loadData()
            this.displayDocuments()
          }
        }
    }
</script>

<style scoped>
    .main-container {
        margin: 12px;
    }

    .col-container {
        padding: 6px;
    }
</style>
