<template>
    <div class="document-list-container">
        <div class="head-container">
            <span class="left">Papers({{searchCount}})</span>
            <el-select class="right" size="small" v-model="orderby" placeholder="请选择">
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
            <div v-if="documents.length!==0">
                <DocumentListItem v-for="document in documents" :key="document.id" :title="document.title" :id="document.id"
                                  :authors="document.authors" :docu-abstract="document.docuAbstract" :publication-year="document.publicationYear" :keywords="document.keywords.split(';')" :reference-count="document.referenceCount"/>
            </div>

            <div v-else>很抱歉没有搜索到相关的论文！</div>

        </div>
    </div>
</template>

<script>
  import DocumentListItem from '@/components/DocumentList/DocumentListItem'
  // todo：router-view
  export default {
    name: 'DocumentList',
    components: { DocumentListItem },
    props:{
      documents:{
        type:Array,
        default: ()=>[]
      },
      searchCount: {
        type:Number,
        default:0
      }
    },
    data () {
      return {
        options: [{
          value: 'default',
          label: 'Default'
        }, {
          value: 'recent',
          label: 'Most Recent'
        }, {
          value: 'early',
          label: 'Most Early'
        }],
        orderby: 'default',
        searchKeyword: '',
        searchType: 'title',
        searchTypes: [
          { value: 'title', label: '标题' },
          { value: 'author', label: '作者' },
          { value: 'affiliation', label: '第一作者单位' },
          { value: 'publicationTitle', label: '出版物' },
          { value: 'abstract', label: '摘要' },
          { value: 'publicationYear', label: '出版年份' }
        ],
      }
    },
    watch:{
      $route:{
        handler: function (val) {
          // 监听路由变化
          console.log(val.query.year)
        }
      },
      orderby(){
        this.$emit('clickSortBy',this.orderby)
      }
    },
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
