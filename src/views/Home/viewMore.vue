<template>
    <div>
        <div>
            <!--        头部-->
            <SearchHeader style="position: absolute"></SearchHeader>
            <!--        面包屑-->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
                <el-breadcrumb-item>{{title[type]}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="below-containner">
            <h1>{{title[type]}}</h1>
            <el-table
                    v-if="type===0"
                    :data="list"
                    @row-click="goDetail"
                    style="width: 100%;margin-bottom: 200px;padding: 20px">

                <el-table-column
                        prop="name"
                        label="姓名"
                        min-width="300">
                </el-table-column>
                <el-table-column
                        prop="documentCount"
                        label="论文数"
                        min-width="300">
                </el-table-column>
                <el-table-column
                        prop="affiliation"
                        label="机构"
                        min-width="330">
                </el-table-column>
            </el-table>
            <el-table
                    v-if="type===1"
                    :data="list"
                    @row-click="goDetail"
                    v-loading="list.length===0"
                    style="width: 100%;margin-bottom: 200px;padding: 20px">

                <el-table-column
                        prop="title"
                        label="标题"
                        min-width="300">
                </el-table-column>
                <el-table-column
                        prop="totalDownload"
                        label="下载量"
                        min-width="300">
                </el-table-column>
                <el-table-column
                        prop="publicationTitle"
                        label="出版社"
                        min-width="330">
                </el-table-column>
            </el-table>
            <el-table
                    v-if="type===2"
                    :data="list"
                    @row-click="goDetail"
                    style="width: 100%;margin-bottom: 200px;padding: 20px">

                <el-table-column
                        prop="name"
                        label="出版社名称"
                        min-width="300">
                </el-table-column>
                <el-table-column
                        prop="docCount"
                        label="论文数"
                        min-width="300">
                </el-table-column>
                <el-table-column
                        prop="authorCount"
                        label="作者数"
                        min-width="330">
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>
<style></style>
<script>
    import SearchHeader from '@/components/SearchHeader'
    import { getAuthorTOPList, getDocumentDownloadTopList,getAffiliationActiveTopList } from '@/api/home'
    export default {
        data() {
            return {
                msg: this.$route.params.type,
                type:0,
                title:["Top Authors","Top Download Documents","Top Affiliation"],
                list:[],
            }
        },
        components:{
            SearchHeader
        },
        mounted(){
            this.init();
            if(this.type===0)
                getAuthorTOPList(100).then(res=>{
                    this.list=res.data;
                    // console.log(this.list);
                });
            if(this.type===1)
            getDocumentDownloadTopList(100).then(res=>{
                this.list=res.data;
                // console.log(this.list)
            });
            if(this.type===2)
            getAffiliationActiveTopList(100).then(res=>{
                this.list=res.data;
                // console.log(this.list)
            })
        },
        methods:{
            init(){
                if(this.$route.params.type==="Authors")
                    this.type=0;
                else if(this.$route.params.type==="Download")
                    this.type=1;
                else if(this.$route.params.type==="Affiliation")
                    this.type=2;

            },
            goDetail(row){
                if(row){
                    if(this.type===0)
                        window.open(this.$router.resolve('/author/'+row.authorId).href, '_blank');
                    else if(this.type===1)
                        window.open(this.$router.resolve('/document/'+row.id).href, '_blank');
                    else if(this.type===2)
                        window.open(this.$router.resolve('/aff/'+row.id).href, '_blank');
                }
            }
        }
    }
</script>
<style scoped>
    .el-breadcrumb {
        width: 100%;
        padding-top: 80px;
        padding-bottom: 10px;
        padding-left: 40px;
        background: white;
        /*position: fixed;*/
        border-bottom: 2px solid #3588f5;
    }

    .el-breadcrumb-item:first-child {
    }
    .below-containner {
        margin-top: 50px;
    }
</style>

