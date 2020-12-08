<template>
  <div class="filter-by-year-container">
    <div class="one-line">
      <div>Filter By</div>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Interval: </span>
        <span class="interval">{{ startYear }} ~ {{ endYear }}</span>
      </div>
      <div class="block">
        <el-slider
            v-model="value"
            range
            :marks="marks"
            :format-tooltip="formatTooltip"
            @input="onInput"
            @change="changeYear">
        </el-slider>
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
      startYear:1970,
      endYear:2020,
      present_year: "2020",
      marks: null,
    }
  },
  computed:{
    value:{
      get(){
        let left=Math.floor((this.startYear-1970)/this.gap*100)
        let right=Math.floor((this.endYear-1970)/this.gap*100)
        return [left,right]
      },
      set(value){
        return value
      }
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
  methods: {
    formatTooltip(val) {
      return this.computeYear(val)
    },
    computeYear(val) {
      return 1970 + Math.floor(val / 100 * this.gap)
    },
    onInput(range) {
      console.log("range:",range)
      this.startYear = this.computeYear(range[0])
      this.endYear = this.computeYear(range[1])
      console.log("startYear:", this.startYear)
      console.log("endYear:", this.endYear)
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    },
    changeYear(){
      // 修改父组件的值
      console.log("cccccccccccccccccccccccccccccc")
      this.$emit('changeYear',this.startYear,this.endYear)
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

.interval {
  /*font-size: larger;*/
  font-weight: bolder;
  color: #409eff;
}
</style>
