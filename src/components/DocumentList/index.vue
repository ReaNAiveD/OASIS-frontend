<template>
    <div class="document-list-container">
        <div class="list-container">
            <DocumentListItem v-for="document in documents" :key="document.id" :title="document.title" :id="document.id"
                              :authors="document.authors" :abstract="document.abstract" :year="document.year" :keywords="document.keywords.split(';')"/>
        </div>
    </div>
</template>

<script>
    import DocumentListItem from "@/components/DocumentList/DocumentListItem";
    export default {
        name: "DocumentList",
        components: {DocumentListItem},
        data: function () {
            return {
                searchKeyword: '',
                searchType: 'title',
                searchTypes: [
                    { value: 'title', label: '标题' },
                    { value: 'author', label: '作者' },
                    { value: 'affiliation', label: '第一作者单位' },
                    { value: 'publicationTitle', label: '出版物' },
                    { value: 'abstract', label: '摘要'},
                    { value: 'publicationYear', label: '出版年份' }
                ],
                documents: [
                    {
                        title: "Big problems in industry (panel)",
                        id: "123456",
                        authors: [{
                            name: "John Penix",
                            affiliation: "Google, USA",
                            id: "123456789"
                        }],
                        abstract: "Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.",
                        keywords: "Software;Conferences;Software engineering;Security;Committees;Industries;Collaboration",
                        publication: "2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)",
                        year: "2013",
                        startPage: "xxiii",
                        endPage: "xxv",
                        doi: "10.1109/ASE.2013.6693060",
                        pdf: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060",
                        authorKeyWord: "Program Repair;JVM Bytecode;Mutation Testing",
                        ieeeTerms: "Generators;Software;Testing;Indexes;Data mining;Computer science",
                        inspecControlledTerms: "formal specification;software fault tolerance;temporal logic",
                        inspecNonControlledTerms: "automated digital controller synthesis tool;physical plants;linear timeinvariant systems;intricate physical plant models;digital control literature;real-world control engineering problems;automated MATLAB",
                        citationCount: "1",
                        ref: []
                    }
                ]
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .document-list-search {
        display: inline-block;
        margin: 5px;
    }

    .document-list-search.search-input {
        max-width: 400px;
        min-width: 200px;
    }

    .document-list-head-search {
        /*float: right;*/
    }

    .list-container {
        margin: 20px 0;
    }
</style>
