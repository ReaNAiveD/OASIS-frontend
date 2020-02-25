<template>
    <el-card class="box-card">
        <div class="item-container">
            <div class="document-title">
                {{title}}
            </div>

            <div class="author_year">
                <el-link :underline="false" v-for="(author, index) in authors" :key="index" @click="$router.push('/author/' + author.id)">
                    {{author.name}}
                </el-link>
                <span>{{year}}</span>
            </div>

            <div>
                <p class="document-abstract">
                    {{abstract}}
                </p>

            </div>


            <div class="keywords">
                <span style="line-height: 25px">Keywords:</span>
                <el-tag type="info" effect="plain" hit="true" v-for="(keyword,index) in keywords" :key="index">
                    {{keyword}}
                </el-tag>
            </div>
        </div>
        <div>
            <el-button type="text"><i class="el-icon-link"></i>Cite</el-button>
            <el-button type="text"><i class="el-icon-folder"></i>Save</el-button>
            <el-button type="text" class="citations">Citations ({{citations}})</el-button>
            <div></div>
        </div>
        <div style="height: 26px"></div>

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
      abstract: {
        type: String,
        default: ''
      },
      year: {
        type: String,
        default: ''
      },
      keywords: {
        type: Array,
        default: () => {return ['Topping', 'Computer hardware', 'Engineering']}
      },
      citations: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
    .box-card {
        margin-bottom: 10px;
    }
    .item-container {
        border-bottom-style: solid;
        border-width: 1px 0;
        border-color: rgba(105, 105, 105, 0.32);
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
    }

    .document-abstract {
        text-align: left;
        font-size: 14px;
        margin: 5px;
        color: dimgrey;

        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 4; /** 显示的行数 **/
        overflow: hidden; /** 隐藏超出的内容 **/
    }

    .keywords {
        text-align: left;
        overflow: hidden;
    }

    .keywords span {
        margin: 5px;
        font-size: 13px;
        height: 25px;
        line-height: 25px;
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

</style >
