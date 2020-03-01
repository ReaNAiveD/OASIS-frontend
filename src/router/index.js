/**
 * 配置vue-router
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import homeRouter from './Home';
import searchRouter from './Search';
Vue.use(VueRouter);

// 路由的数组
const routes = [
        homeRouter,
        searchRouter
];

const router = new VueRouter({
    routes:routes,
    mode:'history'
});
export default router;


