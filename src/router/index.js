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
    {
        path: "/",
        redirect: "/home"
    },
    homeRouter,
    searchRouter,
    {
        path: "/author",
        component: () =>import('@/views/Author')
    }
];

const router = new VueRouter({
    mode:'history',
    routes
});
export default router;


