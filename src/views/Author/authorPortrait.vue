<template>
    <div class="field-container" style="min-width: 1000px;">
        <!--        头部-->
        <SearchHeader></SearchHeader>

        <!--        面包屑-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/author/'+authorDetail.id }  " >{{authorDetail.name}}</el-breadcrumb-item>
            <el-breadcrumb-item>Portrait</el-breadcrumb-item>
        </el-breadcrumb>

<!--        个人信息简介-->
        <AuthorInfoCard :author="authorDetail" style="padding-top: 100px;"></AuthorInfoCard>

        <!--        ECharts图像-->
        <div class="charts-container">
            <meetingGraph ></meetingGraph>
            <fieldGraph ></fieldGraph>

            <authorRelation ></authorRelation>
        </div>
        <!--        论文列表-->
<!--        <div class="document-container">-->
<!--            <DocumentList :documents="documents " :document-count="totalElements"></DocumentList>-->
<!--        </div>-->

        <el-col class="col-container"  :sm="24">
            <DocumentList :documents="displayDocuments" :document-count="authorDetail.documentCount" @clickSortBy="resort"></DocumentList>
<!--            <el-pagination small layout="prev, pager, next" :total="authorDetail.documentCount" :page-size="pageSize" @current-change="pageChange"></el-pagination>-->
        </el-col>

    </div>
</template>

<script>

    import DocumentList from '@/components/DocumentList'
    import SearchHeader from '@/components/SearchHeader'
    import { detail as getAuthorDetail } from '@/api/author'
    import AuthorInfoCard from '@/components/authorPortrait/info'
    import authorRelation from '@/components/authorPortrait/authorRelationShip'
    import meetingGraph from '@/components/authorPortrait/meetingGraph'
    import fieldGraph from '@/components/authorPortrait/fieldGraph'
    export default {
        name: 'index',
        components: {
            SearchHeader,

            fieldGraph,
            meetingGraph,

            DocumentList,
            AuthorInfoCard,
            authorRelation
        },
        data () {
            return {
                fieldId: 0,
                totalElements: 411,
                pageSize: 20,
                currentPage: 1,
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

            }
        },
        created(){
            getAuthorDetail(this.$route.params.id).then(response => {
                console.log(response);
                this.authorDetail = response.data;
            }).catch(error =>{
                console.log(error)
            })
        },
        computed: {

            displayDocuments: function () {
                console.log(this.authorDetail.documents.slice().sort(this.sortFunc).slice(this.pageSize * (this.currentPage - 1), this.pageSize * (this.currentPage) - 1));
                return this.authorDetail.documents.slice().sort(this.sortFunc).slice(this.pageSize * (this.currentPage - 1), this.pageSize * (this.currentPage) - 1);
            }
        },
    }
</script>
<style scoped>
    .field-container {
        background: whitesmoke;
    }

    .el-breadcrumb {
        width: 100%;
        z-index: 998;
        padding-top: 80px;
        padding-bottom: 10px;
        padding-left: 40px;
        background: white;
        position: fixed;
        border-bottom: 2px solid #3588f5;
    }

    .el-breadcrumb-item:first-child {
    }

    .charts-container {
        display: flex;
        justify-content: space-between;
        margin-left: 30px;
        margin-right: 30px;
    }

    .document-container {
        margin-left: 40px;
        margin-right: 40px;
    }
    .col-container {
        margin-top: 10px;
        padding: 6px;
    }

</style>
