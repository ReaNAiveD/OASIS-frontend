<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-size: 14px;font-weight: bolder">Publication Type</span>
    </div>

    <div>
      <el-checkbox-group v-model="checkList" size="small" @change="changePublishType">
        <el-checkbox label="ase"></el-checkbox>
        <el-checkbox label="icse" style="margin-left: 25px"></el-checkbox>
      </el-checkbox-group>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'FilterByPublicationType',
  data() {
    return {
      checkList: ["ase", "icse"]
    }
  },
  methods: {
    changePublishType(){
      this.$emit("changePublishType",this.checkList)
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
