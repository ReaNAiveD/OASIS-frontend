<template>
    <div class="field-container" style="min-width: 1000px;">
        <!--        头部-->
        <SearchHeader></SearchHeader>

        <!--        面包屑-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
            <el-breadcrumb-item>Research Field Profile</el-breadcrumb-item>
            <el-breadcrumb-item>{{fieldName}}</el-breadcrumb-item>
        </el-breadcrumb>

        <!--        研究方向简介-->
        <FieldInfo v-bind:field_id="fieldId" style="padding-top: 90px;"></FieldInfo>
        <!--        ECharts图像-->
        <div class="charts-container">
            <PaperGraph class="left"></PaperGraph>
            <AuthorActiveGraph class="right"></AuthorActiveGraph>
            <AffiliateActiveGraph class="middle"></AffiliateActiveGraph>
        </div>
        <!--        论文列表-->
        <div class="document-container">
            <DocumentList :documents="documents " :document-count="totalElements"></DocumentList>
        </div>
    </div>
</template>

<script>
  import FieldInfo from '@/components/Field/FieldInfo'
  import PaperGraph from '@/components/Field/PaperGraph'
  import AffiliateActiveGraph from '@/components/Field/AffiliateActiveGraph'
  import AuthorActiveGraph from '@/components/Field/AuthorActiveGraph'
  import DocumentList from '@/components/DocumentList'
  import SearchHeader from '@/components/SearchHeader'

  export default {
    name: 'index',
    components: {
      SearchHeader,
      FieldInfo,
      PaperGraph,
      AffiliateActiveGraph,
      AuthorActiveGraph,
      DocumentList
    },
    data () {
      return {
        fieldId: 0,
        fieldName: 'Mathematics',
        totalElements: 411,
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
        }, {
          'id': 4619,
          'title': 'Testing properties of dataflow program operators',
          'publicationTitle': '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
          'publicationYear': 2013,
          'volume': 0,
          'startPage': '103',
          'endPage': '113',
          'docuAbstract': 'Dataflow programming languages, which represent programs as graphs of data streams and operators, are becoming increasingly popular and being used to create a wide array of commercial software applications. The dependability of programs written in these languages, as well as the systems used to compile and run these programs, hinges on the correctness of the semantic properties associated with operators. Unfortunately, these properties are often poorly defined, and frequently are not checked, and this can lead to a wide range of problems in the programs that use the operators. In this paper we present an approach for improving the dependability of dataflow programs by checking operators for necessary properties. Our approach is dynamic, and involves generating tests whose results are checked to determine whether specific properties hold or not. We present empirical data that shows that our approach is both effective and efficient at assessing the status of properties.',
          'doi': '10.1109/ASE.2013.6693071',
          'pdfLink': 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693071',
          'authorKeywords': '',
          'keywords': 'Testing;Aggregates;Optimization;Semantics;Ports (Computers);System recovery;Program processors',
          'referenceCount': 26,
          'publisher': 'IEEE',
          'documentIdentifier': 'IEEE Conferences',
          'totalDownload': 107,
          'authors': [{
            'id': 11400,
            'name': 'Zhihong Xu',
            'firstName': 'Zhihong',
            'lastName': 'Xu',
            'affiliation': 'University of Nebraska, Lincoln, USA',
            'authorKeywords': '',
            'ieeeId': '37670348300'
          }, {
            'id': 11401,
            'name': 'Martin Hirzel',
            'firstName': 'Martin',
            'lastName': 'Hirzel',
            'affiliation': 'IBM Watson Research, Yorktown Heights, NY, USA',
            'authorKeywords': '',
            'ieeeId': '37085525472'
          }, {
            'id': 11402,
            'name': 'Gregg Rothermel',
            'firstName': 'Gregg',
            'lastName': 'Rothermel',
            'affiliation': 'University of Nebraska, Lincoln, USA',
            'authorKeywords': ';Android;program analysis;inter-app communication;Web application testing;Regression testing;Browser environments;continuous integration;regression testing;large scale testing',
            'ieeeId': '37272372900'
          }, {
            'id': 11403,
            'name': 'Kun-Lung Wu',
            'firstName': 'Kun-Lung',
            'lastName': 'Wu',
            'affiliation': 'IBM Watson Research, Yorktown Heights, NY, USA',
            'authorKeywords': '',
            'ieeeId': '37086764058'
          }],
          'ref': null
        }, {
          'id': 4632,
          'title': 'SABRINE: State-based robustness testing of operating systems',
          'publicationTitle': '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
          'publicationYear': 2013,
          'volume': 0,
          'startPage': '125',
          'endPage': '135',
          'docuAbstract': 'The assessment of operating systems robustness with respect to unexpected or anomalous events is a fundamental requirement for mission-critical systems. Robustness can be tested by deliberately exposing the system to erroneous events during its execution, and then analyzing the OS behavior to evaluate its ability to gracefully handle these events. Since OSs are complex and stateful systems, robustness testing needs to account for the timing of erroneous events, in order to evaluate the robust behavior of the OS under different states. This paper presents SABRINE (StAte-Based Robustness testIng of operatiNg systEms), an approach for state-aware robustness testing of OSs. SABRINE automatically extracts state models from execution traces, and generates a set of test cases that cover different OS states. We evaluate the approach on a Linux-based Real-Time Operating System adopted in the avionic domain. Experimental results show that SABRINE can automatically identify relevant OS states, and find robustness vulnerabilities while keeping low the number of test cases.',
          'doi': '10.1109/ASE.2013.6693073',
          'pdfLink': 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693073',
          'authorKeywords': 'Robustness Testing;Fault Injection;Operating Systems;Linux kernel;Fault Tolerance;Dependability Benchmarking',
          'keywords': 'Robustness;Testing;Kernel;Probes;Hardware;Monitoring',
          'referenceCount': 47,
          'publisher': 'IEEE',
          'documentIdentifier': 'IEEE Conferences',
          'totalDownload': 224,
          'authors': [{
            'id': 11436,
            'name': 'Domenico Cotroneo',
            'firstName': 'Domenico',
            'lastName': 'Cotroneo',
            'affiliation': 'DIETI department, Università degli Studi di Napoli Federico II, Via Claudio 21, 80125, Italy',
            'authorKeywords': 'Robustness Testing;Fault Injection;Operating Systems;Linux kernel;Fault Tolerance;Dependability Benchmarking;Software Fault Injection;Robustness Testing;Test Automation;Test Parallelization;Source code analysis;Event logging;Development process;Coding practices;Industry domain',
            'ieeeId': '37265505800'
          }, {
            'id': 11437,
            'name': 'Domenico Di Leo',
            'firstName': 'Domenico',
            'lastName': 'Di Leo',
            'affiliation': 'DIETI department, Università degli Studi di Napoli Federico II, Via Claudio 21, 80125, Italy',
            'authorKeywords': 'Robustness Testing;Fault Injection;Operating Systems;Linux kernel;Fault Tolerance;Dependability Benchmarking',
            'ieeeId': '38232414600'
          }, {
            'id': 11438,
            'name': 'Francesco Fucci',
            'firstName': 'Francesco',
            'lastName': 'Fucci',
            'affiliation': 'DIETI department, Università degli Studi di Napoli Federico II, Via Claudio 21, 80125, Italy',
            'authorKeywords': 'Robustness Testing;Fault Injection;Operating Systems;Linux kernel;Fault Tolerance;Dependability Benchmarking',
            'ieeeId': '37085692980'
          }, {
            'id': 11439,
            'name': 'Roberto Natella',
            'firstName': 'Roberto',
            'lastName': 'Natella',
            'affiliation': 'DIETI department, Università degli Studi di Napoli Federico II, Via Claudio 21, 80125, Italy',
            'authorKeywords': 'Robustness Testing;Fault Injection;Operating Systems;Linux kernel;Fault Tolerance;Dependability Benchmarking;Software Fault Injection;Robustness Testing;Test Automation;Test Parallelization',
            'ieeeId': '37540518700'
          }],
          'ref': null
        }, {
          'id': 4634,
          'title': 'Pex4Fun: A web-based environment for educational gaming via automated test generation',
          'publicationTitle': '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
          'publicationYear': 2013,
          'volume': 0,
          'startPage': '730',
          'endPage': '733',
          'docuAbstract': 'Pex4Fun (http://www.pex4fun.com/) is a web-based educational gaming environment for teaching and learning programming and software engineering. Pex4Fun can be used to teach and learn programming and software engineering at many levels, from high school all the way through graduate courses. With Pex4Fun, a student edits code in any browser - with Intellisense - and Pex4Fun executes it and analyzes it in the cloud. Pex4Fun connects teachers, curriculum authors, and students in a unique social experience, tracking and streaming progress updates in real time. In particular, Pex4Fun finds interesting and unexpected input values (with Pex, an advanced test-generation tool) that help students understand what their code is actually doing. The real fun starts with coding duels where a student writes code to implement a teacher\'s secret specification (in the form of sample-solution code not visible to the student). Pex4Fun finds any discrepancies in behavior between the student\'s code and the secret specification. Such discrepancies are given as feedback to the student to guide how to fix the student\'s code to match the behavior of the secret specification. This tool demonstration shows how Pex4Fun can be used in teaching and learning, such as solving coding duels, exploring course materials in feature courses, creating and teaching a course, creating and publishing coding duels, and learning advanced topics behind Pex4Fun.',
          'doi': '10.1109/ASE.2013.6693144',
          'pdfLink': 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693144',
          'authorKeywords': '',
          'keywords': 'Encoding;Software engineering;Games;Programming profession;Education;Testing',
          'referenceCount': 25,
          'publisher': 'IEEE',
          'documentIdentifier': 'IEEE Conferences',
          'totalDownload': 156,
          'authors': [{
            'id': 10480,
            'name': 'Tao Xie',
            'firstName': 'Tao',
            'lastName': 'Xie',
            'affiliation': 'Peking University; Ministry of Education',
            'authorKeywords': 'programming education;testing;clustering;unreproducible builds;localization;system call tracing;;Online service;service incident diagnosis;incident management;;Mobile Security; Context; Program Analysis;Programming contests;unit tests;symbolic execution;Code Hunt game;Mobile apps;Android fragmentation;prioritization;usage data;Program Analysis;Mobile Security',
            'ieeeId': '37087232586'
          }, {
            'id': 11144,
            'name': 'Nikolai Tillmann',
            'firstName': 'Nikolai',
            'lastName': 'Tillmann',
            'affiliation': 'Microsoft Research, Redmond, WA, USA',
            'authorKeywords': ';;Programming contests;unit tests;symbolic execution;Code Hunt game',
            'ieeeId': '37281931500'
          }, {
            'id': 11444,
            'name': 'Jonathan de Halleux',
            'firstName': 'Jonathan',
            'lastName': 'de Halleux',
            'affiliation': 'Microsoft Research, One Microsoft Way, Redmond, WA, USA',
            'authorKeywords': ';Programming contests;unit tests;symbolic execution;Code Hunt game',
            'ieeeId': '37313237900'
          }, {
            'id': 11445,
            'name': 'Judith Bishop',
            'firstName': 'Judith',
            'lastName': 'Bishop',
            'affiliation': 'Microsoft Research, One Microsoft Way, Redmond, WA, USA',
            'authorKeywords': ';Game engineering;software engineering;Software engineering research;industrial practice;researchers;practitioners;collaboration;challenges;Programming contests;unit tests;symbolic execution;Code Hunt game',
            'ieeeId': '38546571500'
          }],
          'ref': null
        }, {
          'id': 4381,
          'title': 'The challenges of verification and validation of automated planning systems (keynote)',
          'publicationTitle': '2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE)',
          'publicationYear': 2013,
          'volume': 0,
          'startPage': '2',
          'endPage': '2',
          'docuAbstract': 'Mission planning is central to space mission operations, and has benefited from advances in model-based planning software. A model is a description of the objects, actions, constraints and preferences that the planner reasons over to generate plans. Developing, verifying and validating a planning model is, however, a difficult task. Mission planning constraints and preferences arise from many sources, including simulators and engineering specification documents. As mission constraints evolve, planning domain modelers must add and update model constraints efficiently using the available source data, catching errors quickly, and correcting the model. The consequences of erroneous models are very high, especially in the space operations environment. We first describe the space operations environment, particularly the role of the mission planning system. We then describe model-based planning, and briefly review the current state of the practice in designing model-based mission planning tools and the challenges facing model developers. We then describe an Interactive Model Development Environment (IMDE) approach to developing mission planning systems. This approach integrates modeling and simulation environments to reduce model editing time, generate simulations automatically to evaluate plans, and identify modeling errors automatically by evaluating simulation output. The IMDE approach was tested on a small subset of the Lunar Atmosphere and Dust Environment Explorer (LADEE) flight software to demonstrate how to develop the LADEE mission planning system.',
          'doi': '10.1109/ASE.2013.6693059',
          'pdfLink': 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6693059',
          'authorKeywords': '',
          'keywords': '',
          'referenceCount': 0,
          'publisher': 'IEEE',
          'documentIdentifier': 'IEEE Conferences',
          'totalDownload': 127,
          'authors': [{
            'id': 10632,
            'name': 'Jeremy Frank',
            'firstName': 'Jeremy',
            'lastName': 'Frank',
            'affiliation': 'NASA Ames Research Center, USA',
            'authorKeywords': '',
            'ieeeId': null
          }],
          'ref': null
        }]
      }
    }
  }
</script>
<style scoped>
    .field-container {
        background: whitesmoke;
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

</style>
