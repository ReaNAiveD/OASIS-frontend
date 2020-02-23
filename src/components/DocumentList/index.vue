<template>
    <div class="document-list-container">
        <div class="head-container">
            <span class="left">Papers({{searchCount}})</span>
            <el-select class="right" size="small" v-model="value" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <span class="middle">Sort By</span>

        </div>

        <div class="list-container">
            <DocumentListItem v-for="document in documents" :key="document.id" :title="document.title" :id="document.id"
                              :authors="document.authors" :abstract="document.abstract" :year="document.year"/>
        </div>
    </div>
</template>

<script>
  import DocumentListItem from '@/components/DocumentList/DocumentListItem'

  export default {
    name: 'DocumentList',
    components: { DocumentListItem },
    data: function () {
      return {
        options: [{
          value: '选项1',
          label: 'Default'
        }, {
          value: '选项2',
          label: 'Most Recent'
        }, {
          value: '选项3',
          label: 'Most Early'
        }, {
          value: '选项4',
          label: 'Most Citation'
        }],
        value: '选项1',
        searchKeyword: '',
        searchType: 'title',
        searchCount: 120087,
        searchTypes: [
          { value: 'title', label: '标题' },
          { value: 'author', label: '作者' },
          { value: 'affiliation', label: '第一作者单位' },
          { value: 'publicationTitle', label: '出版物' },
          { value: 'abstract', label: '摘要' },
          { value: 'publicationYear', label: '出版年份' }
        ],
        documents: [
          {
            title: 'Big problems in industry (panel)',
            id: '123456',
            authors: [{
              name: 'John Penix',
              affiliation: 'Google, USA',
              id: '123456789'
            }],
            abstract: 'Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.',
            keywords: 'SoftwareConferencesSoftware engineeringSecurityCommitteesIndustriesCollaboration',
            publication: '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
            year: '2013',
            startPage: 'xxiii',
            endPage: 'xxv',
            doi: '10.1109/ASE.2013.6693060',
            pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060',
            authorKeyWord: 'Program Repair;JVM Bytecode;Mutation Testing',
            ieeeTerms: 'Generators;Software;Testing;Indexes;Data mining;Computer science',
            inspecControlledTerms: 'formal specification;software fault tolerance;temporal logic',
            inspecNonControlledTerms: 'automated digital controller synthesis tool;physical plants;linear timeinvariant systems;intricate physical plant models;digital control literature;real-world control engineering problems;automated MATLAB',
            citationCount: '1',
            ref: []
          },
          {
            title: 'Big problems in industry (panel)',
            id: '123456',
            authors: [{
              name: 'John Penix',
              affiliation: 'Google, USA',
              id: '123456789'
            }],
            abstract: 'Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.',
            keywords: 'SoftwareConferencesSoftware engineeringSecurityCommitteesIndustriesCollaboration',
            publication: '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
            year: '2013',
            startPage: 'xxiii',
            endPage: 'xxv',
            doi: '10.1109/ASE.2013.6693060',
            pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060',
            authorKeyWord: 'Program Repair;JVM Bytecode;Mutation Testing',
            ieeeTerms: 'Generators;Software;Testing;Indexes;Data mining;Computer science',
            inspecControlledTerms: 'formal specification;software fault tolerance;temporal logic',
            inspecNonControlledTerms: 'automated digital controller synthesis tool;physical plants;linear timeinvariant systems;intricate physical plant models;digital control literature;real-world control engineering problems;automated MATLAB',
            citationCount: '1',
            ref: []
          },
          {
            title: 'Big problems in industry (panel)',
            id: '123456',
            authors: [{
              name: 'John Penix',
              affiliation: 'Google, USA',
              id: '123456789'
            }],
            abstract: 'Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.',
            keywords: 'SoftwareConferencesSoftware engineeringSecurityCommitteesIndustriesCollaboration',
            publication: '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
            year: '2013',
            startPage: 'xxiii',
            endPage: 'xxv',
            doi: '10.1109/ASE.2013.6693060',
            pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060',
            authorKeyWord: 'Program Repair;JVM Bytecode;Mutation Testing',
            ieeeTerms: 'Generators;Software;Testing;Indexes;Data mining;Computer science',
            inspecControlledTerms: 'formal specification;software fault tolerance;temporal logic',
            inspecNonControlledTerms: 'automated digital controller synthesis tool;physical plants;linear timeinvariant systems;intricate physical plant models;digital control literature;real-world control engineering problems;automated MATLAB',
            citationCount: '1',
            ref: []
          },
          {
            title: 'Big problems in industry (panel)',
            id: '123456',
            authors: [{
              name: 'John Penix',
              affiliation: 'Google, USA',
              id: '123456789'
            }],
            abstract: 'Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.',
            keywords: 'SoftwareConferencesSoftware engineeringSecurityCommitteesIndustriesCollaboration',
            publication: '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
            year: '2013',
            startPage: 'xxiii',
            endPage: 'xxv',
            doi: '10.1109/ASE.2013.6693060',
            pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060',
            authorKeyWord: 'Program Repair;JVM Bytecode;Mutation Testing',
            ieeeTerms: 'Generators;Software;Testing;Indexes;Data mining;Computer science',
            inspecControlledTerms: 'formal specification;software fault tolerance;temporal logic',
            inspecNonControlledTerms: 'automated digital controller synthesis tool;physical plants;linear timeinvariant systems;intricate physical plant models;digital control literature;real-world control engineering problems;automated MATLAB',
            citationCount: '1',
            ref: []
          },
          {
            title: 'Big problems in industry (panel)',
            id: '123456',
            authors: [{
              name: 'John Penix',
              affiliation: 'Google, USA',
              id: '123456789'
            }],
            abstract: 'Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.',
            keywords: 'SoftwareConferencesSoftware engineeringSecurityCommitteesIndustriesCollaboration',
            publication: '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
            year: '2013',
            startPage: 'xxiii',
            endPage: 'xxv',
            doi: '10.1109/ASE.2013.6693060',
            pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060',
            authorKeyWord: 'Program Repair;JVM Bytecode;Mutation Testing',
            ieeeTerms: 'Generators;Software;Testing;Indexes;Data mining;Computer science',
            inspecControlledTerms: 'formal specification;software fault tolerance;temporal logic',
            inspecNonControlledTerms: 'automated digital controller synthesis tool;physical plants;linear timeinvariant systems;intricate physical plant models;digital control literature;real-world control engineering problems;automated MATLAB',
            citationCount: '1',
            ref: []
          },
          {
            title: 'Big problems in industry (panel)',
            id: '123456',
            authors: [{
              name: 'John Penix',
              affiliation: 'Google, USA',
              id: '123456789'
            }],
            abstract: 'Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.',
            keywords: 'SoftwareConferencesSoftware engineeringSecurityCommitteesIndustriesCollaboration',
            publication: '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
            year: '2013',
            startPage: 'xxiii',
            endPage: 'xxv',
            doi: '10.1109/ASE.2013.6693060',
            pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060',
            authorKeyWord: 'Program Repair;JVM Bytecode;Mutation Testing',
            ieeeTerms: 'Generators;Software;Testing;Indexes;Data mining;Computer science',
            inspecControlledTerms: 'formal specification;software fault tolerance;temporal logic',
            inspecNonControlledTerms: 'automated digital controller synthesis tool;physical plants;linear timeinvariant systems;intricate physical plant models;digital control literature;real-world control engineering problems;automated MATLAB',
            citationCount: '1',
            ref: []
          },
          {
            title: 'Big problems in industry (panel)',
            id: '123456',
            authors: [{
              name: 'John Penix',
              affiliation: 'Google, USA',
              id: '123456789'
            }],
            abstract: 'Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.',
            keywords: 'SoftwareConferencesSoftware engineeringSecurityCommitteesIndustriesCollaboration',
            publication: '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
            year: '2013',
            startPage: 'xxiii',
            endPage: 'xxv',
            doi: '10.1109/ASE.2013.6693060',
            pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060',
            authorKeyWord: 'Program Repair;JVM Bytecode;Mutation Testing',
            ieeeTerms: 'Generators;Software;Testing;Indexes;Data mining;Computer science',
            inspecControlledTerms: 'formal specification;software fault tolerance;temporal logic',
            inspecNonControlledTerms: 'automated digital controller synthesis tool;physical plants;linear timeinvariant systems;intricate physical plant models;digital control literature;real-world control engineering problems;automated MATLAB',
            citationCount: '1',
            ref: []
          },
          {
            title: 'Big problems in industry (panel)',
            id: '123456',
            authors: [{
              name: 'John Penix',
              affiliation: 'Google, USA',
              id: '123456789'
            }],
            abstract: 'Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.',
            keywords: 'SoftwareConferencesSoftware engineeringSecurityCommitteesIndustriesCollaboration',
            publication: '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
            year: '2013',
            startPage: 'xxiii',
            endPage: 'xxv',
            doi: '10.1109/ASE.2013.6693060',
            pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060',
            authorKeyWord: 'Program Repair;JVM Bytecode;Mutation Testing',
            ieeeTerms: 'Generators;Software;Testing;Indexes;Data mining;Computer science',
            inspecControlledTerms: 'formal specification;software fault tolerance;temporal logic',
            inspecNonControlledTerms: 'automated digital controller synthesis tool;physical plants;linear timeinvariant systems;intricate physical plant models;digital control literature;real-world control engineering problems;automated MATLAB',
            citationCount: '1',
            ref: []
          },
          {
            title: 'Big problems in industry (panel)',
            id: '123456',
            authors: [{
              name: 'John Penix',
              affiliation: 'Google, USA',
              id: '123456789'
            }],
            abstract: 'Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.',
            keywords: 'SoftwareConferencesSoftware engineeringSecurityCommitteesIndustriesCollaboration',
            publication: '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
            year: '2013',
            startPage: 'xxiii',
            endPage: 'xxv',
            doi: '10.1109/ASE.2013.6693060',
            pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060',
            authorKeyWord: 'Program Repair;JVM Bytecode;Mutation Testing',
            ieeeTerms: 'Generators;Software;Testing;Indexes;Data mining;Computer science',
            inspecControlledTerms: 'formal specification;software fault tolerance;temporal logic',
            inspecNonControlledTerms: 'automated digital controller synthesis tool;physical plants;linear timeinvariant systems;intricate physical plant models;digital control literature;real-world control engineering problems;automated MATLAB',
            citationCount: '1',
            ref: []
          },
          {
            title: 'Big problems in industry (panel)',
            id: '123456',
            authors: [{
              name: 'John Penix',
              affiliation: 'Google, USA',
              id: '123456789'
            }],
            abstract: 'Software Engineering in practice deals with scale in a variety of dimensions. We build large scale systems operating on vast amount of data. We have millions of customers with billions of queries and transactions. We have distributed teams making thousands of changes, running millions of tests and releasing multiple times per day. These dimensions of scale interact to provide challenges for software development tools and processes. The panelists will describe the challenging aspects of scale in their specific problem domains and discuss which software engineering methods work and which leave room for improvement.',
            keywords: 'SoftwareConferencesSoftware engineeringSecurityCommitteesIndustriesCollaboration',
            publication: '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
            year: '2013',
            startPage: 'xxiii',
            endPage: 'xxv',
            doi: '10.1109/ASE.2013.6693060',
            pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693060',
            authorKeyWord: 'Program Repair;JVM Bytecode;Mutation Testing',
            ieeeTerms: 'Generators;Software;Testing;Indexes;Data mining;Computer science',
            inspecControlledTerms: 'formal specification;software fault tolerance;temporal logic',
            inspecNonControlledTerms: 'automated digital controller synthesis tool;physical plants;linear timeinvariant systems;intricate physical plant models;digital control literature;real-world control engineering problems;automated MATLAB',
            citationCount: '1',
            ref: []
          },
        ]
      }
    }
  }
</script>

<style scoped>
    .head-container {
        overflow: hidden;
        line-height: 35px;
        height: 35px;
    }
    .left {
        float: left;
    }

    .middle {
        float: right;
        margin-right: 10px;
    }
    .right {
        float: right;
        width: 150px;
    }
    .document-list-container > div:first-child {
        color: darkgray;
        font-size: 15px;
        text-align: left;
    }

    .document-list-search {
        display: inline-block;
        margin: 5px;
    }

    .document-list-search.search-input {
        max-width: 400px;
        min-width: 200px;
    }

    .list-container {
        /*margin: 5px 0;*/
    }
</style>
