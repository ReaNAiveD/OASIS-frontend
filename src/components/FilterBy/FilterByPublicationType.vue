<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>Publication Type</span>
        </div>

        <el-collapse v-model="activeNames" @change="handleChange" accordion>
            <el-collapse-item v-for="(type,index) in publicationTypes" :key="index" :title="type.category" :name="index">
                <el-link v-for="(item,index_) in type.children" :key="index_" @click="clickType(item.name)">{{item.name}}({{item.amount}})</el-link>
            </el-collapse-item>
        </el-collapse>

    </el-card>
</template>

<script>
  export default {
    name: 'FilterByPublicationType',
    data () {
      return {
        activeNames: [],
        publicationTypes: [
          {
            category: 'Journal/Magazine Names',
            children: [
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
            children: [
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
            children: [
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
            children: [
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
    created(){
      // this.getFilterByType()
    },
    methods: {
      handleChange (val) {
        console.log(val)
      },
      clickType(id){
        console.log("id:",id)
        let params = this.$route.params
        params.type=id
        this.$router.params=params
        console.log(this.$route.params)
      },
      // 获取Type
      async getFilterByType () {
        // 解构赋值
        const { data: res } = await this.$http.get('publicationType')
        console.log(res)
        // 将获取到的数据挂载到组件的私有data中
        if (res.meta.status !== 200) {return this.$message.error(res.meta.msg)}
        this.publicationTypes=res.data
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
