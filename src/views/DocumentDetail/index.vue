<template>
    <div class="field-container" style="min-width: 800px;">
        <SearchHeader></SearchHeader>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
            <el-breadcrumb-item>Document</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="below-containner">
            <el-row class="detail-container">
                <el-col :md="16">
                    <DocumentInfo :document="documentInfo"/>
                </el-col>
                <el-col :md="8">
                    <div class="detail-label">Reference({{correctRef.length}})</div>
                    <ReferenceList :refs="displayRef"/>
                    <el-pagination small layout="prev, pager, next" :total="correctRef.length" :page-size="pageSize" @current-change="pageChange"></el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import SearchHeader from '@/components/SearchHeader'
    import DocumentInfo from "@/components/DocumentInfo/index";
    import ReferenceList from "@/components/ReferenceList/index";
    import {getDocumentDetail} from "@/api/documentlist";
    export default {
        name: "DocumentDetail",
        components: {ReferenceList, DocumentInfo,SearchHeader},
        data: function () {
            return {
                documentInfo: {
                    "id": "123456",
                    "title": "Big problems in industry (panel)",
                    "authors": [{
                        "name": "John Penix",
                        "affiliation": "Google, USA",
                        "id": "123456789",
                        "keywords": "",
                    }],
                    "publicationTitle": "2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)",
                    "publicationYear": "2013",
                    "volume": "2",
                    "startPage": "xxiii",
                    "endPage": "xxv",
                    "docuAbstract": "Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.",
                    "doi": "10.1109/ASE.2013.6693060",
                    "pdfLink": "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060",
                    "authorKeyWord": "Program Repair;JVM Bytecode;Mutation Testing",
                    "keywords": "Software;Conferences;Software engineering;Security;Committees;Industries;Collaboration",
                    "referenceCount": "1",
                    "publisher": "IEEE",
                    "documentIdentifier": "IEEE Conferences",
                    "totalDownload": "33",
                    "ref": [
                        {
                            "title": "title",
                            "text": "text",
                            "google_link": "link",
                            "document_id": "123456789"
                        }
                    ]
                },
                pageSize: 5,
                currentPage: 1
            }
        },
        computed: {
            correctRef: function(){
                return this.documentInfo.ref.filter((ref) => { return ref.title!=null && ref.title.substring(0, 11)!=='Xamarin Bug' });
            },
            displayRef: function () {
                return this.correctRef.slice(this.pageSize * (this.currentPage - 1), this.pageSize * (this.currentPage));
            }
        },
        created: function () {
            getDocumentDetail(this.$route.params.id).then(response => {
                console.log(response);
                this.documentInfo = response.data;
            }).catch(error =>{
                console.log(error)
            })
        },
        methods: {
            pageChange: function (currentPage) {
                this.currentPage = currentPage;
                scrollTo(0, 0);
            }
        }
    }
</script>

<style scoped>
    .detail-container {
        margin: 12px;
    }
    .detail-label {
        margin: 8px 0 16px 8px;
        font-size: 18px;
        text-align: left;
    }
    .field-container {
        background: whitesmoke;
    }
    .below-containner{
        padding-top: 100px;
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
</style>
