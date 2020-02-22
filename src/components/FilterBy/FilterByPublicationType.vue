<template>
    <div class="publication-container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Publication Type</span>
                <!--            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
            </div>

            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item v-for="(type,index) in publicationTypes" :key="index" :title="type.category" :name="index">
                    <div v-for="(item,index_) in type.items" :key="index_">{{item.name}}({{item.amount}})</div>
                </el-collapse-item>
            </el-collapse>

        </el-card>
    </div>
</template>

<script>
  export default {
    name: 'FilterByPublicationType',
    data () {
      return {
        activeNames:['1'],
        publicationTypes: [
          {
            category: 'Journal/Magazine Names',
            items: [
              {
                name:'Communications of the ACM',
                amount: 7890
              },{
              name:'ACM SIGPLAN Notices',
                amount:6911
              },{
              name:'ACM SIGCSE Bulletin',
                amount:2692
              }
            ]
          },{
            category: 'Journal/Magazine Names',
            items: [
              {
                name:'Communications of the ACM',
                amount: 7890
              },{
                name:'ACM SIGPLAN Notices',
                amount:6911
              },{
                name:'ACM SIGCSE Bulletin',
                amount:2692
              }
            ]
          },{
            category: 'Journal/Magazine Names',
            items: [
              {
                name:'Communications of the ACM',
                amount: 7890
              },{
                name:'ACM SIGPLAN Notices',
                amount:6911
              },{
                name:'ACM SIGCSE Bulletin',
                amount:2692
              }
            ]
          },{
            category: 'Journal/Magazine Names',
            items: [
              {
                name:'Communications of the ACM',
                amount: 7890
              },{
                name:'ACM SIGPLAN Notices',
                amount:6911
              },{
                name:'ACM SIGCSE Bulletin',
                amount:2692
              }
            ]
          }

        ]
      }
    },
    methods:{
      handleChange (val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        /*width: 480px;*/
        margin: 10px;
    }
</style>
