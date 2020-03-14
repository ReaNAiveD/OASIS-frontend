<template>
    <div class="field-info-container">
        <el-card class="box-card card-left">
            <div slot="header" class="clearfix">
                <i class="el-icon-link"></i>
                <span>{{fieldName}}</span>
                <i :class="{'el-icon-star-off':!isStar,'el-icon-star-on':isStar,'star-button':true} "
                   @click="isStar=!isStar"></i>

            </div>
            <div class="text item">
                {{fieldIntro}}
            </div>
        </el-card>
        <el-card class="box-card card-right">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="Parent Topic" name="parentTopic">
                    <el-scrollbar style="height: 140px;">
                        <div v-for="(parent,index) in parentField" :key="index">
                            <el-link target="_blank">{{parent}}</el-link>
                        </div>
                    </el-scrollbar>
                </el-tab-pane>
                <el-tab-pane label="Child Topic" name="childTopic">
                    <el-scrollbar style="height: 140px;">
                        <div v-for="(child,index) in childField" :key="index">
                            <el-link target="_blank">{{child}}</el-link>
                        </div>
                    </el-scrollbar>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>

</template>

<script>
  export default {
    name: 'FieldInfo',
    data () {
      return {
        isStar: false,
        activeName: 'childTopic',
        fieldId: 0,
        fieldName: 'Mathematics',
        fieldIntro: 'Mathematics (from Greek μάθημα máthēma, \'knowledge, study, learning\') includes the study of such topics as quantity (number theory), structure (algebra), space (geometry), and change (mathematical analysis). ',
        parentField: ['Computational science', 'Geometry'],
        childField: ['Algorithm', 'Applied mathematics', 'Calculus', 'Algorithm', 'Applied mathematics', 'Calculus'],
      }
    },
    created () {
      // 获取该研究方向的详细信息
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card:first-child {
        text-align: left;
        margin: 40px;
        width: 50%;
        height: 200px;
    }

    .box-card:last-child {
        text-align: left;
        margin: 40px;
        width: 30%;
        height: 200px;
    }

    .field-info-container {
        text-align: center;
        display: flex;
        justify-content: space-between;
    }

    .star-button {
        padding: 3px 0;
        color: #409EFF;
        float: right;
    }

    .el-icon-link {
        margin-right: 5px;
        color: #409EFF;
    }

    .el-tab-pane {
    }

    .el-link {
        margin-bottom: 5px;
    }
</style>
