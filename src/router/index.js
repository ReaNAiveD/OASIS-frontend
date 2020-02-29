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
        path: "/author/:id",
        name: "Author",
        component: () =>import('@/views/Author')
    },
    {
        path: "/document/:id",
        name: "DocumentDetail",
        component: () =>import('@/views/DocumentDetail')
    }
];

const router = new VueRouter({
    routes
});
export default router;


