<template>
    <div class="aff-container">
        <search-header/>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/'}">OASIS</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path: '/aff-all'}">Affiliation</el-breadcrumb-item>
            <el-breadcrumb-item>{{info.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="aff-content">
            <el-row>
                <el-col :sm="18" :xs="24">
                    <el-card class="top-line">
                        <AffiliationIntroduction :name="info.name" :introduction="info.introduction"
                                                 :logo-url="info.logoLink" :site="info.homePageLink"/>
                    </el-card>
                </el-col>
                <el-col :sm="6" :xs="24">
                    <el-card class="top-line">
                        <NumSummary :author-count="info.authorCount" :document-count="info.docCount" :ref-count="info.citationCount"/>
                    </el-card>
                </el-col>

            </el-row>
            <el-row>
                <el-col :sm="6" :xs="24">
                    <el-card class="graph-line">
                        <FieldSummaryGraph/>
                    </el-card>
                </el-col>
                <el-col :sm="6" :xs="24">
                    <el-card class="graph-line">
                        <AuthorSummaryGraph/>
                    </el-card>
                </el-col>
                <el-col :sm="6" :xs="24">
                    <el-card class="graph-line">
                        <AuthorActivationGraph/>
                    </el-card>
                </el-col>
                <el-col :sm="5" :xs="24">
                    <TopListCommon :title="'合作机构关系预测'" :measure="'cooperate'" :labels="['机构', '合作程度', '操作']"
                                   :data="potentialPartners"></TopListCommon>
                </el-col>

            </el-row>
            <div class="doc-list">
                <DocumentList :documents="displayDocuments" :document-count="info.docCount"></DocumentList>
                <el-pagination small layout="prev, pager, next" :total="info.docCount" :page-size="pageSize" @current-change="pageChange"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchHeader from '@/components/SearchHeader/index'
    import AffiliationIntroduction from '@/views/Affiliation/components/AffiliationIntroduction'
    import NumSummary from '@/views/Affiliation/components/NumSummary'
    import FieldSummaryGraph from '@/views/Affiliation/components/FieldSummaryGraph'
    import AuthorSummaryGraph from '@/views/Affiliation/components/AuthorSummaryGraph'
    import AuthorActivationGraph from '@/views/Affiliation/components/AuthorActivationGraph'
    import { basicInfo, getDocList,getCooperate } from '@/api/affiliation'
    import DocumentList from '@/components/DocumentList/index'
    import TopListCommon from '@/components/TopList/common'

    export default {
        name: "Affiliation",
        components: {
            AuthorActivationGraph,
            AuthorSummaryGraph, FieldSummaryGraph, NumSummary, AffiliationIntroduction, SearchHeader, DocumentList,
            TopListCommon},

        data: function () {
            return {
                info: {
                    name: "",
                    homePageLink: null,
                    logoLink: null,
                    introduction: null,
                    authorCount: 0,
                    docCount: 0,
                    citationCount: 0
                },
                pageSize: 5,
                displayDocuments: [],
                cooperateList:[]
            }
        },
        created: function () {
            basicInfo(this.$route.params.id).then(res => {
                if (res.data.result === 0) this.info = res.data.data;
            });
            getDocList(this.$route.params.id, 0, this.pageSize).then(res => {
                this.displayDocuments = res.data.content;
            });
            getCooperate(this.$route.params.id).then(res=>{
                if(res.data.data.length>7)
                    this.cooperateList=res.data.data.slice(0,7);
                else
                    this.cooperateList=res.data.data;
            })

        },
        computed:{
            potentialPartners:function () {
                console.log(this.cooperateList)
                return this.cooperateList.map(function (cooperate) {
                    return{
                        name:cooperate.affiliationName,
                        count:cooperate.cooperateCount,
                        pushPath:'/aff/'+cooperate.affiliationId
                    }
                })
            },
        },
        methods: {
            pageChange: function (currentPage) {
                getDocList(this.$route.params.id, currentPage-1, this.pageSize).then(res => {
                    this.displayDocuments = res.data.content;
                })
            }
        }
    }
</script>

<style scoped>
    .aff-container{
        background-color: whitesmoke;
    }

    .el-breadcrumb{
        width: 100%;
        z-index: 998;
        padding-top: 80px;
        padding-bottom: 10px;
        padding-left: 40px;
        background: white;
        position: fixed;
        border-bottom: 2px solid #3588f5;
    }

    .aff-content{
        padding-top: 100px;
        position: relative;
        max-width: 1280px;
        margin: auto;
    }

    .el-card{
        padding: 8px;
        margin: 20px;
    }

    .el-card.top-line{
        height: 200px;
    }

    .el-card.graph-line{
        height: 350px;

    }

    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .doc-list {
        padding: 0 10px;
    }
    .top-item{
        width: 100%;
        height: 370px;
        margin: 20px;
        overflow: hidden;
    }

</style>
