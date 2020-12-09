<template>
    <div class="intro-container">
        <el-row>
            <el-col v-if="logoUrl!=null && logoUrl!==''" :sm="6" :xs="24">
                <el-image class="logo" :src="logoUrl" fit="contain"></el-image>
            </el-col>
            <el-col class="text-info" :sm="(logoUrl==null||logoUrl==='')? 24 : 18" :xs="24">
                <div class="name">
                    {{name}}
                </div>
                <div class="detail">
                    <el-scrollbar style="height: calc(100% + 17px)">
                        <div>
                        {{introduction || ''}}
                        </div>
                    </el-scrollbar>
                </div>
                <div class="link">
                    <i class="el-icon-link"></i>
                    <el-link :href="site==null||site===''? 'https://www.bing.com/search?q='+name+'&PC=U316&FORM=CHROMN' : site">Affiliation Site</el-link>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "AffiliationIntroduction",
        props: {
            logoUrl: {
                type: String,
                default: ""
            },
            name: {
                type: String,
                default: "Affiliation"
            },
            introduction: {
                type: String,
                default: "Introduction"
            },
            site: {
                type: String,
                default: ""
            },
            id: {
                type: Number,
                default: -1
            }
        },
        computed: {
            // contentWidth: function () {
            //     return
            // }
        }
    }
</script>

<style scoped>
    .logo{
        width: 100%;
    }

    .intro-container{
        height: 100%;
    }

    .text-info {
        text-align: left;
        height: 100%;
    }

    .text-info .name{
        font-size: 28px;
        text-overflow: ellipsis;
    }

    .text-info .detail{
        margin-top: 16px;
        max-height: 90px;
        overflow: hidden;
    }

    .text-info .link{
        padding-top: 16px;
    }

</style>
