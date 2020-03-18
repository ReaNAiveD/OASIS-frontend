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
        <documentWithPaper :docs="authorDetail.documents" :docCount="authorDetail.documentCount"></documentWithPaper>

    </div>
</template>

<script>

    import SearchHeader from '@/components/SearchHeader'
    import { detail as getAuthorDetail } from '@/api/author'
    import AuthorInfoCard from '@/components/authorPortrait/info'
    import authorRelation from '@/components/authorPortrait/authorRelationShip'
    import meetingGraph from '@/components/authorPortrait/meetingGraph'
    import fieldGraph from '@/components/authorPortrait/fieldGraph'
    import documentWithPaper from '@/components/DocumentList/DocumentWithPaper'

    export default {
        name: 'index',
        components: {
            SearchHeader,

            fieldGraph,
            meetingGraph,
            AuthorInfoCard,
            authorRelation,
            documentWithPaper
        },
        data () {
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
