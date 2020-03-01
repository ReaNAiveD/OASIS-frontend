<template>
    <div class="main-container">
        <el-card>
            <div class="info-container">
                <div class="doc-title">
                    {{document.title}}
                    <span class="doc-year">- {{document.publicationYear}} -</span>
                </div>
                <div v-if="document.authors.length >= 1" class="doc-authors">
                    <span v-for="(author, index) in document.authors" :key="index">
                        <span v-if="index!==0">, </span>
                        <el-link :underline="false" @click="$router.push('/author/' + author.id)">
                            {{author.name}}
                        </el-link>
                    </span>
                </div>
                <el-divider/>
                <ul class="doc-detail">
                    <li v-if="document.publicationTitle">
                        <span class="detail-label">Publication:</span>
                        <span class="detail">{{document.publicationTitle}}</span>
                    </li>
                    <li v-if="document.volume !== undefined">
                        <span class="detail-label">Volume:</span>
                        <span class="detail">{{document.volume}}</span>
                    </li>
                    <li v-if="document.startPage && document.endPage">
                        <span class="detail-label">Page Range:</span>
                        <span class="detail">{{document.startPage}} / {{document.endPage}}</span>
                    </li>
                    <li v-if="document.doi">
                        <span class="detail-label">DOI:</span>
                        <span class="detail">{{document.doi}}</span>
                    </li>
                    <li v-if="document.publisher">
                        <span class="detail-label">Publisher:</span>
                        <span class="detail">{{document.publisher}}</span>
                    </li>
                </ul>
                <div class="doc-keywords">
                    <el-tag class="doc-keyword" v-for="(keyword, index) in document.keywords.split(';')" :key="index">{{keyword}}</el-tag>
                </div>
                <el-divider/>
                <div class="doc-abstract">
                    {{document.docuAbstract}}
                </div>
            </div>
        </el-card>
        <el-card class="doc-pdf">
            <div class="detail-label">Document Link</div>
            <div>
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path d="M901.850593 926.476283a48.761858 48.761858 0 0 1-48.761859 48.761859H170.422718a48.761858 48.761858 0 0 1-48.761858-48.761859V48.762834a48.761858 48.761858 0 0 1 48.761858-48.761859h418.864363a48.761858 48.761858 0 0 1 34.620919 14.140939l263.801654 263.801654a48.761858 48.761858 0 0 1 14.140939 34.620919V926.476283z" fill="#EBECF0"></path>
                    <path d="M901.850593 926.476283v48.761859a48.761858 48.761858 0 0 1-48.761859 48.761858H170.422718a48.761858 48.761858 0 0 1-48.761858-48.761858v-48.761859a48.761858 48.761858 0 0 0 48.761858 48.761859h682.666016a48.761858 48.761858 0 0 0 48.761859-48.761859z" fill="#C1C7D0"></path>
                    <path d="M24.137143 536.381417h975.237166v243.809291a48.761858 48.761858 0 0 1-48.761858 48.761859H72.899001a48.761858 48.761858 0 0 1-48.761858-48.761859v-243.809291z" fill="#FF5630"></path>
                    <path d="M121.66086 536.381417V438.8577l-97.523717 97.523717h97.523717zM901.850593 536.381417l0.975237-97.523717 97.036098 97.523717H901.850593z" fill="#DE350B"></path>
                    <path d="M267.946434 585.143275h84.845634a57.051374 57.051374 0 0 1 41.935198 15.603795 55.1009 55.1009 0 0 1 16.091413 40.959961 55.588518 55.588518 0 0 1-16.091413 40.959961 59.001849 59.001849 0 0 1-43.398054 16.091413h-48.761858v76.556118H267.946434z m32.670446 81.919922h43.885672a42.422817 42.422817 0 0 0 25.843785-6.339041 23.893311 23.893311 0 0 0 7.801897-19.992362q0-24.868548-32.670445-24.868548h-44.860909zM434.71199 588.068987H511.755726a73.142787 73.142787 0 0 1 58.51423 25.356166 100.937047 100.937047 0 0 1 21.942836 68.266602 110.689418 110.689418 0 0 1-20.967599 69.729457A71.679932 71.679932 0 0 1 511.755726 780.190708H434.71199z m32.670445 158.963658H511.755726a43.398054 43.398054 0 0 0 36.083775-17.066651A75.093262 75.093262 0 0 0 560.517584 682.666992a70.704695 70.704695 0 0 0-13.65332-48.761859 48.761858 48.761858 0 0 0-37.546631-16.579031h-41.935198zM755.565018 618.788957h-100.937047v45.348529H755.565018v31.207589h-100.937047v81.919922h-32.670445v-190.171248H755.565018z" fill="#FFFFFF"></path>
                    <path d="M901.850593 312.564487v6.82666h-263.801654a48.761858 48.761858 0 0 1-48.761858-48.761858V0.000975a48.761858 48.761858 0 0 1 34.620919 14.140939l264.289272 263.801654a48.761858 48.761858 0 0 1 13.653321 34.620919z" fill="#C1C7D0"></path>
                </svg>
                [<el-link :href="document.pdfLink">{{document.pdfLink}}</el-link>]
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "DocumentInfo",
        props: {
            document: {
                type: Object,
                default: function () {
                    return {
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
                        "abstract": "Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.",
                        "doi": "10.1109/ASE.2013.6693060",
                        "pdfLink": "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060",
                        "authorKeyWord": "Program Repair;JVM Bytecode;Mutation Testing",
                        "keywords": "Software;Conferences;Software engineering;Security;Committees;Industries;Collaboration",
                        "reference_count": "1",
                        "publisher": "IEEE",
                        "document_identifier": "IEEE Conferences",
                        "total_download": "33",
                        "ref": [
                            {
                                "title": "title",
                                "text": "text",
                                "google_link": "link",
                                "document_id": "123456789"
                            }
                        ]
                    }
                }
            }
        },
        data: function () {
            return {
            }
        },
        computed: {
        }
    }
</script>

<style scoped>
    .main-container{
        padding: 12px;
    }

    .doc-pdf{
        margin-top: 12px;
    }

    .info-container {
        text-align: left;
    }

    .doc-title{
        font-size: 18px;
        margin-bottom: 8px;
    }

    .doc-year{
        font-size: 14px;
        color: dimgrey;
    }

    ul.doc-detail{
        list-style: none;
        padding-left: 12px;
    }

    ul.doc-detail li{
        padding-bottom: 12px;
    }

    ul.doc-detail .detail-label{
        color: dimgrey;
        padding-right: 8px;
        font-size: 14px;
    }

    .doc-keyword {
        margin: 0 4px;
    }

    .doc-abstract {
        font-size: 14px;
        color: dimgrey;
    }

    .doc-pdf {
        text-align: left;
    }

    .doc-pdf .detail-label {
        font-size: 18px;
        padding: 8px;
    }
</style>
