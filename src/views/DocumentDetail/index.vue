<template>
    <el-row class="detail-container">
        <el-col :md="16">
            <DocumentInfo :document="documentInfo"/>
        </el-col>
        <el-col :md="8">
            <ReferenceList :refs="documentInfo.ref"/>
            <el-pagination small layout="prev, pager, next" :total="documentInfo.ref.length" :page-size="pageSize" @current-change="pageChange"></el-pagination>
        </el-col>
    </el-row>
</template>

<script>
    import DocumentInfo from "@/components/DocumentInfo/index";
    import ReferenceList from "@/components/ReferenceList/index";
    import {getDocumentDetail} from "@/api/documentlist";
    export default {
        name: "DocumentDetail",
        components: {ReferenceList, DocumentInfo},
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
                pageSize: 20,
                currentPage: 1
            }
        },
        computed: {
            displayDocuments: function () {
                return this.authorDetail.documents.slice(this.pageSize * (this.currentPage - 1), this.pageSize * (this.currentPage) - 1);
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
</style>
