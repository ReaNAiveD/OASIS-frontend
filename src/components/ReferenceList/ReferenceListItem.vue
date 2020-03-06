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
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                <path d="M214.101333 512c0-32.512 5.546667-63.701333 15.36-92.928L57.173333 290.218667A491.861333 491.861333 0 0 0 4.693333 512c0 79.701333 18.858667 154.88 52.394667 221.610667l172.202667-129.066667A290.56 290.56 0 0 1 214.101333 512" fill="#FBBC05"></path>
                <path d="M516.693333 216.192c72.106667 0 137.258667 25.002667 188.458667 65.962667L854.101333 136.533333C763.349333 59.178667 646.997333 11.392 516.693333 11.392c-202.325333 0-376.234667 113.28-459.52 278.826667l172.373334 128.853333c39.68-118.016 152.832-202.88 287.146666-202.88" fill="#EA4335"></path>
                <path d="M516.693333 807.808c-134.357333 0-247.509333-84.864-287.232-202.88l-172.288 128.853333c83.242667 165.546667 257.152 278.826667 459.52 278.826667 124.842667 0 244.053333-43.392 333.568-124.757333l-163.584-123.818667c-46.122667 28.458667-104.234667 43.776-170.026666 43.776" fill="#34A853"></path>
                <path d="M1005.397333 512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696 65.962667-51.072 116.650667-104.533333 149.632l163.541333 123.818667c93.994667-85.418667 155.136-212.650667 155.136-375.850667" fill="#4285F4"></path>
            </svg>
            <el-link class="google-link" type="primary" :href="googleLink">
                learn more in Google Schedule
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

    .google-link {
        padding-left: 8px;
    }

</style>
