<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>Publication Type</span>
        </div>

        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-for="(type,index) in publicationTypes" :key="index" :title="type.category"
                              :name="index">
                <div v-for="(item,index_) in type.items" :key="index_">{{item.name}}({{item.amount}})</div>
            </el-collapse-item>
        </el-collapse>

    </el-card>
</template>

<script>
  export default {
    name: 'FilterByPublicationType',
    data () {
      return {
        activeNames: ['1'],
        publicationTypes: [
          {
            category: 'Journal/Magazine Names',
            items: [
              {
                name: 'Communications of the ACM',
                amount: 7890
              }, {
                name: 'ACM SIGPLAN Notices',
                amount: 6911
              }, {
                name: 'ACM SIGCSE Bulletin',
                amount: 2692
              }
            ]
          }, {
            category: 'Journal/Magazine Names',
            items: [
              {
                name: 'Communications of the ACM',
                amount: 7890
              }, {
                name: 'ACM SIGPLAN Notices',
                amount: 6911
              }, {
                name: 'ACM SIGCSE Bulletin',
                amount: 2692
              }
            ]
          }, {
            category: 'Journal/Magazine Names',
            items: [
              {
                name: 'Communications of the ACM',
                amount: 7890
              }, {
                name: 'ACM SIGPLAN Notices',
                amount: 6911
              }, {
                name: 'ACM SIGCSE Bulletin',
                amount: 2692
              }
            ]
          }, {
            category: 'Journal/Magazine Names',
            items: [
              {
                name: 'Communications of the ACM',
                amount: 7890
              }, {
                name: 'ACM SIGPLAN Notices',
                amount: 6911
              }, {
                name: 'ACM SIGCSE Bulletin',
                amount: 2692
              }
            ]
          }

        ]
      }
    },
    methods: {
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
        margin-bottom: 10px;
    }
</style>
