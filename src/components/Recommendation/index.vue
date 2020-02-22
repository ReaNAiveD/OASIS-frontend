<template>
    <!--    被下载次数最多的作者-->
    <div class="recommendation-container">
        <div>Recommendation</div>
        <el-card class="box-card" v-for="(item,index) in recommendations" :key="index">
            <div slot="header" class="clearfix">
                <span>{{item.name}}</span>
            </div>
            <div class="statistic">
                <div class="left">
                    <div>{{item.papers_count}}</div>
                    <div>Papers</div>
                </div>
                <div class="right">
                    <div>{{item.h_index}}</div>
                    <div>H-index</div>
                </div>
                <div class="middle">
                    <div>{{item.citations_count}}</div>
                    <div>Citations</div>
                </div>
            </div>
            <div class="introduction">
                <strong>Introduction: </strong>
                {{item.introduction}}
            </div>
        </el-card>
    </div>

</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        recommendations: [
          {
            name: 'Topology',
            papers_count: 9789,
            citations_count: 8979878,
            h_index: 721,
            introduction: 'the branch of pure mathematics that deals only with the properties of a figure X that hold for every figure into which X can be transformed with a one-to-one correspondence that is continuous in both directions'
          },
          {
            name: 'Topology',
            papers_count: 9789,
            citations_count: 8979878,
            h_index: 721,
            introduction: 'the branch of pure mathematics that deals only with the properties of a figure X that hold for every figure into which X can be transformed with a one-to-one correspondence that is continuous in both directions'
          },
          {
            name: 'Topology',
            papers_count: 9789,
            citations_count: 8979878,
            h_index: 721,
            introduction: 'the branch of pure mathematics that deals only with the properties of a figure X that hold for every figure into which X can be transformed with a one-to-one correspondence that is continuous in both directions'
          }
        ]
      }
    }
  }
</script>

<style scoped>
    .statistic {
        text-align: center;
    }

    .statistic .left {
        float: left;
        width: 33%;
    }

    .statistic .right {
        float: right;
        width: 33%;
    }

    .statistic .middle {
        margin-left: 33%;
        margin-right: 33%;
    }

    .left > :first-child, .middle > :first-child, .right > :first-child {
        color: dodgerblue;
    }


    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .clearfix span {
        color: dodgerblue;
    }

    .introduction {
        margin-top: 15px;
        font-size: 15px;
    }

    .el-card {
        margin-top: 10px;
    }
</style>
