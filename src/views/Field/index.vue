<template>
    <div class="aff-container">
        <!--        头部-->
        <SearchHeader></SearchHeader>

        <!--        面包屑-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">OASIS</el-breadcrumb-item>
            <el-breadcrumb-item>Research Field Profile</el-breadcrumb-item>
            <el-breadcrumb-item>{{field}}</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="aff-content">

            <el-row :gutter="40">
                <el-col :sm="8" :xs="24">
                    <div class="grid-content bg-purple" style="height: 400px">
                        <FieldInfo></FieldInfo>
                    </div>
                </el-col>
                <el-col :sm="16" :xs="24">
                    <div class="grid-content bg-purple">
                        <HotFields></HotFields>
                    </div>
                </el-col>

            </el-row>
            <!--            gutter：指定每一栏之间的间隔，默认间隔为 0-->
            <el-row :gutter="40">
                <el-col :md="8" :xs="24">
                    <div class="grid-content bg-purple">
                        <PaperGraph></PaperGraph>

                    </div>
                </el-col>
                <el-col :md="8" :xs="24">
                    <div class="grid-content bg-purple">
                        <AuthorActiveGraph></AuthorActiveGraph>

                    </div>
                </el-col>
                <el-col :md="8" :xs="24">
                    <div class="grid-content bg-purple">
                        <AffiliateActiveGraph></AffiliateActiveGraph>
                    </div>
                </el-col>
            </el-row>

            <!--        论文列表-->
            <el-row :gutter="40">
                <el-col class="" :xs="24">
                    <FieldDocuments></FieldDocuments>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
  import FieldInfo from '@/components/Field/FieldInfo'
  import PaperGraph from '@/components/Field/PaperGraph'
  import AffiliateActiveGraph from '@/components/Field/AffiliateActiveGraph'
  import AuthorActiveGraph from '@/components/Field/AuthorActiveGraph'
  // import DocumentList from '@/components/DocumentList'
  import FieldDocuments from '@/components/Field/FieldDocuments'
  import SearchHeader from '@/components/SearchHeader'
  import HotFields from '@/components/Field/HotFieldGraph'
  import { get_field_detail } from '@/api/field'

  export default {
    name: 'index',
    components: {
      SearchHeader,
      FieldInfo,
      PaperGraph,
      AffiliateActiveGraph,
      AuthorActiveGraph,
      // DocumentList,
      HotFields,
      FieldDocuments
    },
    data () {
      return {
        id: 0,
        field: '',
        keywords: '',
        pageSize: 5,
        page: 0,
        documents: [],
        totalPages: 0,
        totalElements: 0
      }
    },
    created () {
      this.loadData(this.$route)
    },
    methods: {
      loadData(route){
        get_field_detail(route.params.id).then(res => {
          this.field = res.data.data.field
          this.keywords = res.data.data.keywords
          console.log(res.data)
        })
      }
    },
    watch:{
      '$route': function (to) {
        if (to.path.indexOf('/field') !== -1) {
          this.loadData(to)
        }
      }
    },
  }
</script>
<style scoped>
    .aff-container {
        background-color: whitesmoke;
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

    .charts-container {
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*margin-left: 30px;*/
        /*margin-right: 30px;*/
    }

    /*.document-container {*/
    /*    margin-left: 40px;*/
    /*    margin-right: 40px;*/
    /*}*/

    .aff-content {
        padding-top: 120px;
        position: relative;
        max-width: 1300px;
        margin: auto;
        padding-left: 40px;
        padding-right: 40px;
    }

    .el-row, .el-col {
        margin-bottom: 20px;
    }

    .el-row:last-child, .el-col:last-child {
        margin-bottom: 0;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        text-align: center;
    }
</style>
