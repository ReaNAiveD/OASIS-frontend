<template>
    <el-card class="item-container">
        <div class="doc-title">
            <span>
                {{this.title}}
            </span>
<!--            <span v-if="!documentId || documentId < 0">-->
<!--                {{this.title}}-->
<!--            </span>-->
<!--            <el-link v-else>-->
<!--                {{this.title}}-->
<!--            </el-link>-->
        </div>
        <div class="doc-link" v-if="googleLink && googleLink!==''">
            <span class="detail-label">Google: </span>
            <el-link type="primary" :href="googleLink">
                {{googleLink}}
            </el-link>
        </div>
        <div class="doc-abstract" v-html="text">
<!--            {{text}}-->
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "ReferenceListItem",
        props: {
            title: {
                type: String,
                default: 'NON Title'
            },
            text: {
                type: String,
                default: ''
            },
            googleLink: {
                type: String,
                default: ''
            },
            documentId: {
                type: Number,
                default: -1
            }
        }
    }
</script>

<style scoped>

    .doc-abstract {
        text-align: left;
        font-size: 14px;
        margin: 5px;
        color: dimgrey;

        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 4; /** 显示的行数 **/
        overflow: hidden; /** 隐藏超出的内容 **/
    }

    .item-container {
        text-align: left;
    }

    .doc-title {
        font-size: 16px;
        margin-bottom: 4px;
    }

    .doc-link {
        margin: 8px 0;
    }

</style>
