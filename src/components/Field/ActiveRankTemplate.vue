<template>
    <div class="top-10">
        <ul>
            <li v-for="(item,index) in data" :key="index"><a>{{item}}    </a><a>{{item}}</a></li>
        </ul>
        <div id="rank-more">
            <span class="span-h7"><a href="#">查看更多</a></span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ActiveRankTemplate',
    props:{
      data:{
        type:Array,
        default(){
          return [11111]
        }
      }
    }
  }
</script>

<style scoped>
    a {
        color: #525C66;
        text-decoration: none;
    }
    .top-10 {
        float: left;
        width: 340px;

        margin-top: 106px;
        margin-left: 118px;
        background: #fff;
        border: 1px solid #FFF;
        box-shadow: #d0d0d0 1px 1px 10px 0px;
    }

    .top-10 ul {
        counter-reset: section;
    }

    .top-10 li {
        float: left;
        width: 260px;
        border-bottom: 1px solid #b8c2cc;
        line-height: 46px;
        height: 46px;
        overflow: hidden;
        color: #525C66;
        font-size: 14px;

    }

    .top-10 li:before {
        counter-increment: section;
        content: counter(section);
        display: inline-block;
        padding: 0 12px;
        margin-right: 10px;
        height: 18px;
        line-height: 18px;
        background: #b8c2cc;
        color: #fff;
        border-radius: 3px;
        font-size: 9px
    }
    .top-10 li:nth-child(1):before {
        background: #0164b4
    }

    .top-10 li:nth-child(2):before {
        background: #0164b4
    }

    .top-10 li:nth-child(3):before {
        background: #0164b4
    }

    #rank-more {
        float: left;
        width: 100%;
        margin-top: 8px;
        text-align: center;
    }

    .span-h7 {
        font-size: 14px;
        color: #B8C2CC;
        font-weight: 300;
    }
</style>
