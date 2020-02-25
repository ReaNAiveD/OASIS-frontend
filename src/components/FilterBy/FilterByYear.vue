<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>Publication Date</span>
        </div>
        <div class="text item">
            <el-link @click="clickYear(5)" :class="{'clicked':year_index===5}">Past 5 years</el-link>
<!--            <el-radio v-model="radio" label="1"></el-radio>-->
        </div>
        <div class="text item">
            <el-link @click="clickYear(2)" :class="{'clicked':year_index===2}">Past 2 years</el-link>
<!--            <el-radio v-model="radio" label="2"></el-radio>-->
        </div>
        <div class="text item">
            <el-link @click="clickYear(1)" :class="{'clicked':year_index===1}">Past years</el-link>
<!--            <el-radio v-model="radio" label="3"></el-radio>-->
        </div>
        <div class="text item">
            <el-link @click="clickYear(-1)" :class="{'clicked':year_index===-1}">No Limitation</el-link>
            <!--            <el-radio v-model="radio" label="3"></el-radio>-->
        </div>

    </el-card>
</template>

<script>
  export default {
    name: 'FilterByYear',
    data(){
      return {
      radio: '1',
        year_index:-1

    }
    },
    methods:{
      clickYear(num){
        this.year_index=num
        let params = this.$route.params
        params.year=num
        this.$router.params=params
        console.log(this.$route.params)
      }
    }
  }
</script>

<style scoped>
    .text {
        font-size: 16px;
    }

    .item {
        /*margin-bottom: 18px;*/
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
        margin-bottom: 10px;
    }

    .el-link,.el-radio {
        /*height: 30px;*/
        line-height: 40px;
    }

    .el-radio{
        float: right;
    }

    .clicked{
        color: #409EFF;
    }
</style>
