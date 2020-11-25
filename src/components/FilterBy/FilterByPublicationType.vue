<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-size: 14px;font-weight: bolder">Publication Type</span>
    </div>

    <div>
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="ASE" style="float: left;margin-top: 5px"></el-checkbox>
        <el-checkbox label="ICSE" style="float: left;margin-top: 5px"></el-checkbox>
      </el-checkbox-group>
      <el-button icon="el-icon-search" type="primary" size="mini" round @click="clickFilter"
                 style="float: right; margin-left: 20px;margin-bottom: 10px"></el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'FilterByPublicationType',
  data() {
    return {
      checked1: true,
      checked2: true,
      checkboxGroup1: [],
      checkboxGroup2: []
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
