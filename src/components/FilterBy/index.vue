<template>
    <div class="filter-by-container">
        <div class="one-line">
            <div>Filter By</div>
            <el-link icon="el-icon-search" @click="clickFilter">过滤</el-link>
        </div>


        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Publication Date</span>
            </div>
            <!--        <div class="text item">-->
            <!--            <el-link @click="clickYear(5)" :class="{'clicked':year_index===5}">Past 5 years</el-link>-->
            <!--&lt;!&ndash;            <el-radio v-model="radio" label="1"></el-radio>&ndash;&gt;-->
            <!--        </div>-->
            <!--        <div class="text item">-->
            <!--            <el-link @click="clickYear(2)" :class="{'clicked':year_index===2}">Past 2 years</el-link>-->
            <!--&lt;!&ndash;            <el-radio v-model="radio" label="2"></el-radio>&ndash;&gt;-->
            <!--        </div>-->
            <!--        <div class="text item">-->
            <!--            <el-link @click="clickYear(1)" :class="{'clicked':year_index===1}">Past years</el-link>-->
            <!--&lt;!&ndash;            <el-radio v-model="radio" label="3"></el-radio>&ndash;&gt;-->
            <!--        </div>-->
            <!--        <div class="text item">-->
            <!--            <el-link @click="clickYear(-1)" :class="{'clicked':year_index===-1}">No Limitation</el-link>-->
            <!--            &lt;!&ndash;            <el-radio v-model="radio" label="3"></el-radio>&ndash;&gt;-->
            <!--        </div>-->
            <el-form>
                <div class="container">
                    <div class="block">
                        <span class="demonstration">起始年份</span>
                        <el-date-picker size="small"
                                        v-model="yearFrom"
                                        type="year"
                                        placeholder="选择年"
                                        value-format="yyyy">
                        </el-date-picker>
                    </div>
                    <div class="block">
                        <span class="demonstration">截止年份</span>
                        <el-date-picker size="small"
                                        v-model="yearTo"
                                        type="year"
                                        placeholder="选择年"
                                        value-format="yyyy">
                        </el-date-picker>
                    </div>
                </div>

                <!--            <el-form-item label="机构">-->
                <!--                <el-checkbox-group v-model="sizeForm.type">-->
                <!--                    <el-checkbox-button label="ICSE" name="type"></el-checkbox-button>-->
                <!--                    <el-checkbox-button label="ASE" name="type"></el-checkbox-button>-->
                <!--                </el-checkbox-group>-->
                <!--            </el-form-item>-->
            </el-form>

        </el-card>





        <!--        <FilterByYear></FilterByYear>-->
        <!--        <FilterByPublicationType></FilterByPublicationType>-->


<!--        <el-card class="box-card">-->
<!--            <div slot="header" class="clearfix">-->
<!--                <span>Filter Condition</span>-->
<!--            </div>-->
<!--            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">-->
<!--                <el-form-item label="年份">-->
<!--                    <div class="block">-->
<!--                        <el-date-picker-->
<!--                                v-model="value1"-->
<!--                                type="daterange"-->
<!--                                range-separator="至"-->
<!--                                start-placeholder="开始日期"-->
<!--                                end-placeholder="结束日期">-->
<!--                        </el-date-picker>-->
<!--                    </div>-->
<!--                </el-form-item>-->

<!--            </el-form>-->
<!--        </el-card>-->

    </div>
</template>

<script>
  // import FilterByYear from '@/components/FilterBy/FilterByYear'
  // import FilterByPublicationType from '@/components/FilterBy/FilterByPublicationType'

  export default {
    name: 'index',
    components: {
      // FilterByYear,
      // FilterByPublicationType
    },
    data () {
      return {
        sizeForm: {
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
          radio: '1',
          year_index: -1,
          yearFrom: '1970',
          yearTo: '2020'
      }
    },
    methods: {
      clickYear (num) {
        this.year_index = num
        let params = this.$route.params
        params.year = num
        this.$router.params = params
        console.log(this.$route.params)
      },
      clickFilter(){
        // let num=this.yearTo - this.yearFrom
        // console.log(11111)
        // console.log(num)
        if (this.yearTo - this.yearFrom < 0) {
          alert("请选择正确的年份范围！")
        }else{
          this.$emit('clickFilter',this.yearFrom,this.yearTo)
        }
      }
    }
  }
</script>

<style scoped>
    .filter-by-container div:first-child {
        /*height: 35px;*/
        /*line-height: 35px;*/
        /*color: darkgray;*/
        /*font-size: 15px;*/
    }

    .one-line {
        display: flex;
        height: 35px;
        justify-content: space-between;
        line-height: 35px;
        color: darkgray;
        font-size: 15px;
    }

    .one-line .el-link {
        /*height: 25px;*/
    }


    /**/
    /**/
    /**/

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

    .el-link, .el-radio {
        /*height: 30px;*/
        line-height: 40px;
    }

    .el-radio {
        float: right;
    }

    .clicked {
        color: #409EFF;
    }

    .demonstration {
        font-size: 14px;
        color: #8492a6;
        text-align: center;
    }

    .el-input{
        /*年份选择框的宽度*/
        width: 100px;
        margin-left: 25px;
    }

    .block {
        margin-bottom: 10px;
    }

</style>
