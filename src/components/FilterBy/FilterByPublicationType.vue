<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-size: 14px;font-weight: bolder">Publication Type</span>
    </div>

    <div>
      <el-checkbox-group v-model="checkList" size="small">
        <el-checkbox label="ASE"></el-checkbox>
        <el-checkbox label="ICSE" style="margin-left: 25px"></el-checkbox>
      </el-checkbox-group>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'FilterByPublicationType',
  props:{
    checkList:{
      type: Array,
      default:()=>["ASE","ICSE"]
    }
  },
  data() {
    return {
      // checkList: ["ASE","ICSE"]
    }
  },
  created() {
    // this.getFilterByType()
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    clickType(id) {
      console.log("id:", id)
      let params = this.$route.params
      params.type = id
      this.$router.params = params
      console.log(this.$route.params)
    },
    // 获取Type
    async getFilterByType() {
      // 解构赋值
      const {data: res} = await this.$http.get('publicationType')
      console.log(res)
      // 将获取到的数据挂载到组件的私有data中
      if (res.meta.status !== 200) {
        return this.$message.error(res.meta.msg)
      }
      this.publicationTypes = res.data
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

.clearfix {
  text-align: left;
}

.box-card {
  margin-bottom: 10px;
}
</style>
