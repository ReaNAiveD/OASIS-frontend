<template>
  <div v-if="documents.length!==0" ref="docList">
    <DocumentList :documents="displayDocuments" :document-count="totalElements" @clickSortBy="resort"></DocumentList>
    <el-pagination small layout="prev, pager, next" :total="totalElements" :page-size="pageSize"
                   @current-change="pageChange"></el-pagination>
  </div>
</template>

<script>
import DocumentList from '@/components/DocumentList/index'
import {get_field_document} from '@/api/field'

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
  name: 'FieldDocuments',
  components: {
    DocumentList
  },
  data() {
    return {
      pageSize: 10,
      currentPage: 1,
      totalPages: 0,
      totalElements: 0,
      documents: [],
      sortFunc: sortFuncs.defaultSort,
    }
  },
  computed: {
    displayDocuments: function () {
      console.log('FieldDocuments: displayDocuments')
      console.log("++++++++++++++++++",this.documents[0].title)
      return this.documents.slice().sort(this.sortFunc)
    }
  },
  created() {
    this.loadData(this.$route)
  },
  methods: {
    loadData(route) {
      console.log("page:", this.currentPage)
      get_field_document(route.params.id, this.pageSize, this.currentPage - 1).then(res => {
        this.documents = res.data.content
        this.totalPages = res.data.totalPages
        this.totalElements = res.data.totalElements
        console.log("------------------------", this.documents)
      })
    },
    pageChange: function (currentPage) {
      this.currentPage = currentPage
      this.loadData(this.$route)
      // this.backTop()
      this.$refs.docList.scrollIntoView()
      window.scrollTo(0, window.scrollY-100)
    },
    resort: function (sortType) {
      console.log("FieldDocuments: resort")
      if (sortType === 'recent') {
        this.sortFunc = sortFuncs.recentSort
      } else if (sortType === 'early') {
        this.sortFunc = sortFuncs.earlySort
      } else {
        this.sortFunc = sortFuncs.defaultSort
      }
    },
    backTop () {
      let timer = setInterval(function () {
        this.$refs.docList.scrollIntoView()
        let osTop = window.scrollY-100
        let speed = Math.floor(-osTop / 5)
        console.log(osTop+speed)
        window.scrollTo(0, osTop + speed)
        // document.documentElement.scrollTop = document.body.scrollTop = osTop + speed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    },
  },
  watch: {
    '$route': function (to) {
      console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
      if (to.path.indexOf('/field') !== -1) {
        this.loadData(to)
      }
    },
  },
}
</script>

<style scoped>
.left {
  float: left;
}

</style>
