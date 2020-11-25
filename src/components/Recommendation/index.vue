<template>
    <!--    被下载次数最多的作者-->
    <div class="recommendation-container">
        <div>Recommendation</div>
        <MaxDownload></MaxDownload>
    </div>

</template>

<script>
  import MaxDownload from '@/components/Recommendation/MaxDownload'

  export default {
    name: 'index',
    components: { MaxDownload },
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
    },

  }
</script>

<style scoped>
    .recommendation-container> div:first-child {
      text-align: left;
        height: 35px;
        line-height: 35px;
        color: darkgray;
        font-size: 15px;
    }
    .statistic {
        text-align: center;
        font-size: 16px;
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
        margin-bottom: 10px;
    }
</style>
