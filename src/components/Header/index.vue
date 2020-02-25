<template>
    <el-row >
        <el-col :span="18"><div class="grid-content "></div></el-col>
        <el-col :span="5">
            <div class="grid-content ">
                <el-menu :default-active="this.$router.path" router  class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-col :span="8" v-for="(item,i) in menuList" :key="i" :index="item.name"><div class="grid-content "><el-menu-item :index="item.name"> {{ item.navItem }}</el-menu-item></div></el-col>
                </el-menu>
            </div>
        </el-col>
        <el-col :span="1"><div class="grid-content "></div></el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                menuList:[
                    {name:'/home',navItem:'主页'},
                    {name:'/search',navItem:'发现'},
                    {name:'/null',navItem:'登录/注册'}
                ],
                activeIndex: '1',//当前激活菜单的 index
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    }
</script>

<style scoped>
    .grid-content {
        min-height: 36px;
    }
</style>
