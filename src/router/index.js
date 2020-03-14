/**
 * 配置vue-router
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './Home'
import searchRouter from './Search'
import authorRouter from './Author'
import fieldRouter from './Field'

Vue.use(VueRouter);

// 路由的数组
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    homeRouter,
    searchRouter,
    authorRouter,
    {
        path: '/document/:id',
        name: 'DocumentDetail',
        component: () => import('@/views/DocumentDetail')
    },
    fieldRouter
]

const router = new VueRouter({
    mode:'history',
    routes
});
export default router;


