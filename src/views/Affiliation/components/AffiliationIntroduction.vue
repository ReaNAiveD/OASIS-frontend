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
                        {{introduction || '南京大学坐落于钟灵毓秀、虎踞龙蟠的金陵古都，是一所历史悠久、声誉卓著的百年名校。其前身是创建于1902年的三江师范学堂，此后历经两江师范学堂、南京高等师范学校、国立东南大学、国立第四中山大学、国立中央大学、国立南京大学等历史时期，于1950年更名为南京大学。1952年，在全国高校院系调整中，南京大学调整出工学、农学、师范等部分院系后与创办于1888年的金陵大学文、理学院等合并，仍名南京大学。校址从四牌楼迁至鼓楼金大原址。'}}
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
        data:function() {
            return{
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
