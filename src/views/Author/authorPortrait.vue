<template>
    <div class="field-container" style="min-width: 800px;">
        <!--        头部-->
        <SearchHeader></SearchHeader>
        <!--        面包屑-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
            <el-breadcrumb-item  >{{authorDetail.name}}</el-breadcrumb-item>
            <el-breadcrumb-item>Portrait</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="below-containner">
            <!--        个人信息简介-->
            <AuthorInfoCard :author="authorDetail" style="padding-top: 100px;"></AuthorInfoCard>

            <!--        ECharts图像-->
            <div class="charts-container">

                    <meetingGraph ></meetingGraph>

                <div @click="fieldPaperDetail" class="echartLayout">
                    <fieldGraph ></fieldGraph>
                </div>

                <div  @click="authorRelationDetail" class="echartLayout" :relationArray="relationData">
                    <authorRelation ></authorRelation>
                </div>

            </div>
            <div class="coworker-rec">
                <div class="coworker-rec-head"><span class="left">潜在合作者推荐</span></div>
                <div class="rec-main">
                    <el-card>
                        <SimpleAuthorList :authors="coworkerRecommend"/>
                    </el-card>
                </div>
            </div>
            <!--        论文列表-->
            <div class="doc-list">
                <documentWithPaper :docs="authorDetail.documents" :docCount="authorDetail.documentCount"></documentWithPaper>
            </div>
        </div>


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
    import {authorFieldPaper as getAuthorFieldPaper, coworkerRecommend} from  '@/api/author'
    import SimpleAuthorList from "@/components/authorPortrait/SimpleAuthorList";
    // import {authorRelation as getAuthorRelation} from  '@/api/author'

    export default {
        name: 'index',
        components: {
            SimpleAuthorList,
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
                    "affiliationId":0,//
                    "authorKeywords":"",
                    "ieeeId":"",
                    "coworkers":[],
                    "documentCount":0,
                    "documents": [],
                    "fieldList":[],//
                    "totalCitations":0,//
                    "totalDownloads":0,//
                    "activation":0,//
                },
                fieldPaperData:{},
                relationData:{},
                coworkerRecommend: []

            }
        },
        mounted(){
            getAuthorDetail(this.$route.params.id).then(response => {
                this.authorDetail = response.data;
                console.log(this.authorDetail);
            }).catch(error =>{
                console.log(error)
            });


            getAuthorFieldPaper(this.$route.params.id).then(response=>{
                // console.log(response);
                this.fieldPaperData=response.data.data;
            }).catch(error=>{
                console.log(error)
            });

            coworkerRecommend(this.$route.params.id).then(res=>{
                this.coworkerRecommend = res.data.data;
            })

        },
        computed: {
            // getActivation:function(){
            //     return this.authorDetail.activation.toFixed(2)
            // }
        },
        methods:{
            authorRelationDetail:function() {
                // console.log("ok");
                window.open(this.$router.resolve('/authorRelationship/'+this.authorDetail.id).href, '_blank');
            },
            fieldPaperDetail:function() {
                // console.log("ok");
                window.open(this.$router.resolve('/fieldPaper/'+this.authorDetail.id).href, '_blank');
            }

        }

    }
</script>
<style scoped>
    .left{
        float: left;
    }
    .coworker-rec{
        padding: 6px;
        margin: 30px 20px 20px;
    }
    .coworker-rec-head {
        float: left;
        color: dimgray;
        font-size: 14px;
        width: 100%;
    }
    .rec-main {
        width: 100%;
    }
    .field-container {
        background: whitesmoke;

        /*width: 80%;*/
    }
    .below-containner{
        margin-left: 100px;
        margin-right: 100px;
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
    .doc-list{
        padding: 6px;
        margin: 20px;
        margin-top: 30px;
        /*width: 50%;*/
    }
    .echartLayout {
        width: 400px;
        margin: 10px;
        height: 300px;

        text-align: center;
        border: 1px solid #EBEEF5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        background: white;
        /*position: absolute;*/
    }
</style>
