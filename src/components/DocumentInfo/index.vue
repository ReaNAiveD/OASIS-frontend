<template>
    <div class="info-container">
        <div class="doc-title">{{document.title}}</div>
        <div v-if="document.authors.length >= 1" class="dov-authors">
            <span v-for="(author, index) in document.authors" :key="index">
                <span v-if="index!==0">, </span>
                <el-link :underline="false" @click="$router.push('/author/' + author.id)">
                    {{author.name}}
                </el-link>
            </span>
        </div>
        <el-divider/>
        <ul class="doc-detail">
            <li v-if="document.publication">
                Publication:
                <span>{{document.publication}}</span>
            </li>
            <li v-if="document.volume">
                Volume:
                <span>{{document.volume}}</span>
            </li>
            <li v-if="document.startPage && document.endPage">
                Page Range:
                <span>{{document.startPage}} / {{document.endPage}}</span>
            </li>
            <li v-if="document.doi">
                DOI:
                <span>{{document.doi}}</span>
            </li>
            <li v-if="document.publisher">
                Publisher:
                <span>{{document.publisher}}</span>
            </li>
        </ul>
        <div class="doc-keywords">
            <el-tag v-for="(keyword, index) in document.keywords.split(';')" :key="index">{{keyword}}</el-tag>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DocumentInfo",
        data: function () {
            return {
                document: {
                    "id": "123456",
                    "title": "Big problems in industry (panel)",
                    "authors": [{
                        "name": "John Penix",
                        "affiliation": "Google, USA",
                        "id": "123456789",
                        "keywords": "",
                    }],
                    "publication": "2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)",
                    "year": "2013",
                    "volume": "2",
                    "startPage": "xxiii",
                    "endPage": "xxv",
                    "abstract": "Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.",
                    "doi": "10.1109/ASE.2013.6693060",
                    "pdf": "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060",
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
        },
        computed: {
        }
    }
</script>

<style scoped>

</style>
