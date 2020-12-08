<template>
    <div id="home"  class="home-box">
<!--        <Header></Header>-->
        <div class="home-header">
                <div class="note home-header" :style ="note">
                    <div class="search-box">
                        <h1 class="search-title " >-   O   A   S   I   S   -</h1>
                    </div>

                    <div class="search-body">

                        <div class="document-list-head-search">
                            <el-select v-model="select" slot="prepend" placeholder="混合搜索" style="width: 110px;" class="document-list-search" >
                                <el-option label="综合搜索" value="0"></el-option>
                                <el-option label="标题" value="1"></el-option>
                                <el-option label="作者" value="2"></el-option>
                                <el-option label="作者机构" value="3"></el-option>
                            </el-select>
                            <el-input :placeholder="getplaceholder" v-model="searchInput" class="input-with-select document-list-search search-input" @keyup.enter.native="search">
                            </el-input>
                            <el-button class="document-list-search" type="primary" @click="search">搜索</el-button>
                        </div>
                        
                    </div>
                </div>
        </div>
        <div class="home-top-list">
            <div class="top-list">
<!--                <TopList v-bind:authors="topAuthors" ></TopList>-->
                <TopListCommon :title="'Top Authors'" :measure="'papers'"
                               :data="topAuthorsData"></TopListCommon>
                <TopListCommon :title="'Top Download Documents'" :measure="'downloads'" :labels="['标题', '下载量', '操作']"
                               :data="topDownloadDocumentsData"></TopListCommon>
                <TopListCommon :title="'Top Affiliation'" :measure="'activation'" :labels="['标题', '下载量', '操作']"
                               :data="topAffiliationActiveData"></TopListCommon>
            </div>
        </div>

    </div>


</template>

<script>

  // import Header from '@/components/Header'
  import { getAuthorTOPList, getDocumentDownloadTopList,getAffiliationActiveTopList } from '@/api/home'
  import TopListCommon from '@/components/TopList/common'

  export default {
        name: 'home',
        data() {
            return {
                note: {
                    backgroundImage: "url(" + require("../../assets/home-background.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "2000px ",
                    marginTop: "5px",
                },
                searchInput: '',
                combined:'',
                title:'',
                author:'',
                affiliation:'',
                select: '0',
                topAuthors:[],
                topDownloadDocuments:[],
                topAffiliationActive:[],
                placeholders:['请输入搜索内容','请输入标题','请输入作者','请输入机构名'],
            }
        },
        computed: {
            getplaceholder(){
                return this.placeholders[this.select];
            },
            topDownloadDocumentsData: function () {
                return this.topDownloadDocuments.map(function (doc) {
                    return {
                        name: doc.title,
                        count: doc.totalDownload,
                        pushPath: '/document/' + doc.id
                    }
                })
            },
            topAuthorsData:function () {
                return this.topAuthors.map(function (author) {
                    return{
                        name:author.name,
                        count:author.documentCount,
                        pushPath: '/author/'+author.authorId
                    }
                })
            },
            //活跃度最高的机构
            topAffiliationActiveData:function () {
                return this.topAffiliationActive.map(function (aff) {
                    return{
                        name:aff.name,
                        count:aff.activation.toFixed(2),
                        pushPath:'/aff/'+aff.affiliationId
                    }
                })
            }
        },
        created(){
            this.getTopList();
        },
        methods:{
            search(){
                // console.log("search");
                this.combined = ''
                this.title = ''
                this.author = ''
                this.affiliation = ''

              if(this.select==='0'){
                    this.combined=this.searchInput;
                }else if(this.select==='1'){
                    this.title=this.searchInput;
                }else if(this.select==='2'){
                    this.author=this.searchInput;
                }else if(this.select==='3'){
                    this.affiliation=this.searchInput;
                }
                this.$router.push({path: '/search', query: {combined: this.combined,title:this.title,author:this.author,affiliation:this.affiliation}});
            },
            getTopList(){
                getAuthorTOPList(30).then(res=>{
                    this.topAuthors=res.data;
                    //console.log(this.topAuthors);
                });
                getDocumentDownloadTopList(30).then(res=>{
                    this.topDownloadDocuments=res.data;
                });
                getAffiliationActiveTopList(30).then(res=>{
                    this.topAffiliationActive=res.data;
                    // console.log(this.topAffiliationActive);
                })
            }
        },
        components: {
            TopListCommon,
            // Header
        }
    }
</script>

<style scoped>
    .home-box{
        box-sizing: border-box;
    }
.home-header{
    /*position:absolute;*/
    width:100%;
    height:700px;
    background-size: cover;

}
.search-box{
    font-size: 50px;
}

.input-with-select .el-input-group__prepend {
    background-color: #fff;
    width: 100%
}
.search-body{
    position: relative;
    margin: 0 auto;
    width: 50%;
    height: 56px;
}
.home-top-list {
    position: relative;
    margin-top: -100px;
    left: 0px;
    width: 100%;
    height: 500px;
    justify-content: space-between;
    height: 500px;
    /*background: #f7f8fa;*/
}
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
        /*position: fixed;*/
        width: 100%;
        /*backgroundn-color: white;*/
        /*图层置顶*/
        /*z-index: 999;*/
        /*display: flex;*/
        align-items: center;
        /*padding-left: 30px;*/
        /*justify-content: center;*/
    }

    .document-list-head-search > * {
    }
    .top-list{
        z-index: 2;
        position: absolute;
        /*top: -80px;*/
        left: 50%;
        width: 90%;
        -webkit-transform: translate(-50%);
        /*transform: translate(-50%);*/
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }

    .search-title{
        padding-top: 180px;
        padding-bottom: 70px;
        margin-top: 0px;
        width: 100%;
        font-size: 64px;
        color: #fff;
        font-weight: 600;
        text-align: center;
        animation: changeshadow 2s ease-in infinite;
        /* 其它浏览器兼容性前缀 */
        -webkit-animation: changeshadow 2s linear infinite;
        -moz-animation: changeshadow 2s linear infinite;
        -ms-animation: changeshadow 2s linear infinite;
        -o-animation: changeshadow 2s linear infinite;
    }
    @keyframes changeshadow {
        0% {
            text-shadow: 0 0 4px #fffcfb;
        }
        50% {
            text-shadow: 0 0 40px #e6eb19;
        }
        100% {
            text-shadow: 0 0 4px #f2af3f;
        }
    }
    /* 添加兼容性前缀 */
    @-webkit-keyframes changeshadow {
        0% {
            text-shadow: 0 0 4px #fffcfb;
        }
        50% {
            text-shadow: 0 0 40px #e6eb19;
        }
        100% {
            text-shadow: 0 0 4px #f2af3f;
        }
    }
    @-moz-keyframes changeshadow {
        0% {
            text-shadow: 0 0 4px #fffcfb;
        }
        50% {
            text-shadow: 0 0 40px #e6eb19;
        }
        100% {
            text-shadow: 0 0 4px #f2af3f;
        }
    }
    @-ms-keyframes changeshadow {
        0% {
            text-shadow: 0 0 4px #fffcfb;
        }
        50% {
            text-shadow: 0 0 40px #e6eb19;
        }
        100% {
            text-shadow: 0 0 4px #f2af3f;
        }
    }
    @-o-keyframes changeshadow {
        0% {
            text-shadow: 0 0 4px #fffcfb;
        }
        50% {
            text-shadow: 0 0 40px #e6eb19;
        }
        100% {
            text-shadow: 0 0 4px #f2af3f;
        }
    }

</style>

