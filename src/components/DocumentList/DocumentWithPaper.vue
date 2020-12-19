<template>
    <div ref="docList">
        <el-col class="col-container" :sm="24">
            <DocumentList :documents="displayDocuments" :document-count="docCount" @clickSortBy="resort"></DocumentList>
            <el-pagination small layout="prev, pager, next" :total="docCount" :page-size="pageSize" @current-change="pageChange"></el-pagination>
        </el-col>
    </div>

</template>

<script>
  import DocumentList from '@/components/DocumentList/index'

  const sortFuncs = {
    // eslint-disable-next-line no-unused-vars
    defaultSort: function (a, b) {
      return 0
    },
    recentSort: function (a, b) {
      return b.publicationYear - a.publicationYear
    },
    earlySort: function (a, b) {
      return a.publicationYear - b.publicationYear
    }
  }
  export default {
    name: 'documentWithPaper',
    data () {
      return {
        pageSize: 20,
        currentPage: 1,
        sortFunc: sortFuncs.defaultSort,
        documents: [{
          'id': 4608,
          'title': 'Automated testing of cloud-based elastic systems with AUToCLES',
          'publicationTitle': '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
          'publicationYear': 2013,
          'volume': 0,
          'startPage': '714',
          'endPage': '717',
          'docuAbstract': 'Cloud-based elastic computing systems dynamically change their resources allocation to provide consistent quality of service and minimal usage of resources in the face of workload fluctuations. As elastic systems are increasingly adopted to implement business critical functions in a cost-efficient way, their reliability is becoming a key concern for developers. Without proper testing, cloud-based systems might fail to provide the required functionalities with the expected service level and costs. Using system testing techniques, developers can expose problems that escaped the previous quality assurance activities and have a last chance to fix bugs before releasing the system in production. System testing of cloud-based systems accounts for a series of complex and time demanding activities, from the deployment and configuration of the elastic system, to the execution of synthetic clients, and the collection and persistence of execution data. Furthermore, clouds enable parallel executions of the same elastic system that can reduce the overall test execution time. However, manually managing the concurrent testing of multiple system instances might quickly overwhelm developers\' capabilities, and automatic support for test generation, system test execution, and management of execution data is needed. In this demo we showcase AUToCLES, our tool for automatic testing of cloud-based elastic systems. Given specifications of the test suite and the system under test, AUToCLES implements testing as a service (TaaS): It automatically instantiates the SUT, configures the testing scaffoldings, and automatically executes test suites. If required, AUToCLES can generate new test inputs. Designers can inspect executions both during and after the tests.',
          'doi': '10.1109/ASE.2013.6693140',
          'pdfLink': 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693140',
          'authorKeywords': '',
          'keywords': 'Elasticity;Monitoring;Standards;System testing;Cloud computing',
          'referenceCount': 18,
          'publisher': 'IEEE',
          'documentIdentifier': 'IEEE Conferences',
          'totalDownload': 268,
          'authors': [{
            'id': 11367,
            'name': 'Alessio Gambi',
            'firstName': 'Alessio',
            'lastName': 'Gambi',
            'affiliation': 'University of Lugano, Switzerland',
            'authorKeywords': ';integration test;test-driven development;snapshot;system tests;linear programming;cost flow;flow constraints',
            'ieeeId': '37321402300'
          }, {
            'id': 11368,
            'name': 'Waldemar Hummer',
            'firstName': 'Waldemar',
            'lastName': 'Hummer',
            'affiliation': 'Vienna University of Technology, Austria',
            'authorKeywords': '',
            'ieeeId': '37890737100'
          }, {
            'id': 11369,
            'name': 'Schahram Dustdar',
            'firstName': 'Schahram',
            'lastName': 'Dustdar',
            'affiliation': 'Vienna University of Technology, Austria',
            'authorKeywords': ';integration test;test-driven development;snapshot;system tests;linear programming;cost flow;flow constraints',
            'ieeeId': '37267275000'
          }],
          'ref': null
        },]
      }
    },
    components: {
      DocumentList
    },
    methods: {
      pageChange: function (currentPage) {
        this.currentPage = currentPage;
          this.$refs.docList.scrollIntoView();
          window.scrollTo(0, window.scrollY-100)
      },
      resort: function (sortType) {
        if (sortType === 'recent') {
          this.sortFunc = sortFuncs.recentSort
        } else if (sortType === 'early') {
          this.sortFunc = sortFuncs.earlySort
        } else {
          this.sortFunc = sortFuncs.defaultSort
        }
      }
    },
    props: ['docs', 'docCount'],
    computed: {
      displayDocuments: function () {
        return this.docs.slice().sort(this.sortFunc).slice(this.pageSize * (this.currentPage - 1), this.pageSize * (this.currentPage) - 1)
      }
    },

  }
</script>

<style scoped>
    .col-container {
        /*margin: 5px auto;*/
        /*padding: 6px;*/
        width: 100%;
        float: none;
    }
</style>
