<template>
    <div class="aff-container">
        <search-header/>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/'}">OASIS</el-breadcrumb-item>
            <el-breadcrumb-item>Affiliation</el-breadcrumb-item>
            <el-breadcrumb-item>{{'Affiliation id ' + $route.params.id}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="aff-content">
            <el-row>
                <el-col :sm="16" :xs="24">
                    <el-card class="top-line">
                        <AffiliationIntroduction :name="info.name" :introduction="info.introduction"
                                                 :logo-url="info.logoLink" :site="info.homePageLink"/>
                    </el-card>
                </el-col>
                <el-col :sm="8" :xs="24">
                    <el-card class="top-line">
                        <NumSummary :author-count="info.authorCount" :document-count="info.docCount" :ref-count="info.citationCount"/>
                    </el-card>
                </el-col>
            </el-row>
            <el-row>
                <el-col :sm="8" :xs="24">
                    <el-card class="graph-line">
                        <FieldSummaryGraph/>
                    </el-card>
                </el-col>
                <el-col :sm="8" :xs="24">
                    <el-card class="graph-line">
                        <AuthorSummaryGraph/>
                    </el-card>
                </el-col>
                <el-col :sm="8" :xs="24">
                    <el-card class="graph-line">
                        <AuthorActivationGraph/>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import SearchHeader from "@/components/SearchHeader/index";
    import AffiliationIntroduction from "@/views/Affiliation/components/AffiliationIntroduction";
    import NumSummary from "@/views/Affiliation/components/NumSummary";
    import FieldSummaryGraph from "@/views/Affiliation/components/FieldSummaryGraph";
    import AuthorSummaryGraph from "@/views/Affiliation/components/AuthorSummaryGraph";
    import AuthorActivationGraph from "@/views/Affiliation/components/AuthorActivationGraph";
    import {basicInfo} from '@/api/affiliation'
    export default {
        name: "Affiliation",
        components: {
            AuthorActivationGraph,
            AuthorSummaryGraph, FieldSummaryGraph, NumSummary, AffiliationIntroduction, SearchHeader},
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
                }
            }
        },
        created: function () {
            basicInfo(this.$route.params.id).then(res => {
                if (res.data.result === 0) this.info = res.data.data;
            })
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
        /*height: 350px;*/
    }
</style>
