<template>
  <div v-if="documents.length!==0">
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
      pageSize: 5,
      currentPage: 1,
      totalPages: 0,
      totalElements: 0,
      documents: [],
      sortFunc: sortFuncs.defaultSort,
    }
  },
  computed: {
    displayDocuments: function () {
      console.log("+++++", this.documents)
      console.log("=====", this.documents.slice().sort(this.sortFunc).slice(this.pageSize * (this.currentPage - 1), this.pageSize * (this.currentPage) - 1))
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
        console.log("----", this.documents)
      })
    },
    pageChange: function (currentPage) {
      this.currentPage = currentPage
      this.loadData(this.$route)
      this.backTop()
    },
    resort: function (sortType) {
      if (sortType === 'recent') {
        this.sortFunc = sortFuncs.recentSort
      } else if (sortType === 'early') {
        this.sortFunc = sortFuncs.earlySort
      } else {
        this.sortFunc = sortFuncs.defaultSort
      }
    },
    // todo: qiao~为什么获取的test.scrollTop一直是0呢？？？
    backTop() {
      let timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        // let test = document.querySelector('#test').scrollTop
        console.log("osTop:", osTop)
        // console.log("test:", test)
        let speed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    },
  },
  watch: {
    '$route': function (to) {
      if (to.path.indexOf('/field') !== -1) {
        this.loadData(to)
      }
    }
  },
}
</script>

<style scoped>
.left {
  float: left;
}

</style>
