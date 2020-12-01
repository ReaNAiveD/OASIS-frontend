<template>
  <div class="filter-by-year-container">
    <div class="one-line">
      <div>Filter By</div>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Interval: </span>
        <span style="font-size: larger;font-weight: bolder;color: #419df7">{{startYear}} ~ {{ endYear }}</span>
      </div>
      <div class="block">
        <el-slider
            v-model="value"
            range
            :marks="marks"
            :format-tooltip="formatTooltip"
            @input="changeYear">
        </el-slider>
<!--        <div class="filter_year">-->
<!--          <div class="year_box"  style="float: left">-->
<!--            <div class="year_num">{{ startYear }}</div>-->
<!--          </div>-->
<!--          <div  style="float: right; margin-left: 20px;margin-top: 5px">-->
<!--            <el-button icon="el-icon-search"  type="primary" size="mini" round @click="clickFilter"></el-button>-->
<!--          </div>-->
<!--          <div class="year_box"  style="float: right">-->
<!--            <i class="el-icon-caret-bottom"></i>-->
<!--            <div class="year_num">{{ endYear }}</div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </el-card>
  </div>
</template>
<script>

export default {
  name: 'index',
  components: {},
  data() {
    return {
      present_year: "2020",
      marks: null,
      value: [0, 100],
      startYear: 1970,
      endYear: 2020
    }
  },
  created() {
    let date = new Date()
    this.present_year = date.getFullYear()
    this.gap = this.present_year - 1970

    this.marks = {
      0: '1970',
      25: this.computeYear(25) + "",
      50: this.computeYear(50) + "",
      75: this.computeYear(75) + "",
      100: this.present_year + ""
    }


    this.yearFrom = localStorage.getItem('yearFrom') || 1970
    this.yearTo = localStorage.getItem('yearTo') || 2020
    console.log('FilterBy Created')
  },
  mounted() {

  },
  methods: {
    clickYear(num) {
      this.year_index = num
      let params = this.$route.params
      params.year = num
      this.$router.params = params
      console.log(this.$route.params)
    },
    clickFilter() {
      // if (this.yearTo - this.yearFrom < 0) {
      //   alert("请选择正确的年份范围！")
      // } else {
      //   this.$emit('clickFilter', this.yearFrom, this.yearTo)
      // }
    },
    formatTooltip(val) {
      return this.computeYear(val)
    },
    computeYear(val) {
      return 1970 + Math.floor(val / 100 * this.gap)
    },
    changeYear(range) {
      this.startYear = this.computeYear(range[0])
      this.endYear = this.computeYear(range[1])
      console.log("startYear: ", this.startYear)
      console.log("endYear: ", this.endYear)
    }
  }
}
</script>

<style scoped>
.one-line {
  display: flex;
  height: 35px;
  justify-content: space-between;
  line-height: 35px;
  color: darkgray;
  font-size: 15px;
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
  font-size: 15px;
  font-weight: bolder;
}

.box-card {
  /*width: 100%;*/
  text-align: left;
  margin-bottom: 10px;
}

.block {
  margin-bottom: 10px;
}

/* 开始 */
.filter-by-year-container {
  /*margin: 0;*/
  /*width: 300px;*/
}

.filter_year {
  margin-top: 35px;
  padding-bottom: 10px;
}

/*.filter_year > div {*/
/*   display: inline;*/
/*}*/

.year_num {
  font-size: 15px;
  font-weight: bolder;
  color: #909399;
}

.year_box {
  text-align: center;
}

i {
  color: #409eff;
}

/*.el-col {*/
/*  width: 300px;*/
/*  min-width: 300px;*/
/*}*/
</style>
