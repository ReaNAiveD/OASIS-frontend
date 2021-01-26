<template>
  <el-card class="box-card">
    <div class="item-container">
      <div class="document-title clickable" v-if="id!=null && id>=0" @click="docRedirect(id)">
        {{ title }}
      </div>
      <div class="document-title" v-else>
        {{ title }}
      </div>

      <div class="author_year">
        <el-link :underline="false" style="color: #606266;cursor:auto ">{{ publicationYear }}
        </el-link>
        <el-link :underline="false" v-for="(author, index) in authors" :key="index" @click="authorRedirect(author.id)">
          {{ author.name }}
        </el-link>
      </div>

      <div>
        <p class="document-abstract">
          {{ docuAbstract }}
        </p>

      </div>
      <div class="keywords" v-if="keywords[0]!==''">
        <span style="line-height: 25px">Keywords: </span>
        <el-tag type="info" effect="plain" :limitSize="keywords.length" :hit=true
                v-for="(keyword,index) in keywords.slice(0,keywordLimit)" :key="index" style="background: transparent">
          {{ keyword }}
        </el-tag>
      </div>
    </div>
  </el-card>


</template>

<script>
export default {
  name: 'DocumentListItem',
  props: {
    title: {
      type: String,
      default: 'Document'
    },
    id: {
      type: Number,
      default: -1
    },
    authors: {
      type: Array,
      default: () => {
        return []
      }
    },
    docuAbstract: {
      type: String,
      default: ''
    },
    publicationYear: {
      type: Number,
      default: 2020
    },
    keywords: {
      type: Array,
      default: () => {
        return ['Topping', 'Computer hardware', 'Engineering']
      }
    },
    referenceCount: {
      type: Number,
      default: 0
    },
    keywordLimit: {
      type: Number,
      default: 10
    }
  },
  methods: {
    docRedirect: function (id) {
      window.open(this.$router.resolve('/document/' + id).href, '_blank')
    },
    authorRedirect: function (id) {
      window.open(this.$router.resolve('/author/' + id).href, '_blank')
    }
  }
}
</script>

<style scoped>
.box-card {
  margin-bottom: 10px;
}

.box-card:hover {
  background-color: #e8e6e6;
}

.item-container {
  /*border-bottom-style: solid;*/
  /*border-width: 1px 0;*/
  /*border-color: rgba(105, 105, 105, 0.32);*/
}

.document-title {
  text-align: left;
  font-size: 25px;
  margin: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.author_year {
  text-align: left;
  font-size: 15px;
  color: dimgrey;
}

.author_year > * {
  margin: 5px;
  height: 20px;
}

.author_year .el-link:after {
  content: ","
}

.author_year .el-link:first-child:after {
  content: ""
}

.author_year .el-link:first-child {
  margin-right: 20px;
}

.author_year .el-link:last-child:after {
  content: ""
}

.document-abstract {
  text-align: left;
  font-size: 14px;
  margin: 5px;
  color: dimgrey;

  /*word-break: break-all;*/
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 4; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}

.keywords {
  margin-top: 10px;
  padding-top: 10px;
  text-align: left;
  overflow: hidden;
  border-top-style: solid;
  border-width: 1px 0;
  border-color: rgba(105, 105, 105, 0.32);
}

.keywords span {
  margin: 3px;
  font-size: 13px;
  height: 23px;
  line-height: 23px;
}

.el-button {
  margin-left: 5px;
  padding: 5px;
  float: left;
  color: lightslategray;
}

.citations {
  margin-right: 0;
  float: right;
  cursor: text;
}

.clickable:hover {
  cursor: pointer;
  color: dodgerblue;
  text-decoration: underline;
}

</style>
