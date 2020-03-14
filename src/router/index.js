/**
 * 配置vue-router
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import homeRouter from './Home';
import searchRouter from './Search';
import authorRouter from './Author/index';
import authorRelationship from './Author/relationShip';
Vue.use(VueRouter);

// 路由的数组
const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    homeRouter,
    searchRouter,
    authorRouter,
    authorRelationship,
    {
        path: "/document/:id",
        name: "DocumentDetail",
        component: () =>import('@/views/DocumentDetail')
    }
];

const router = new VueRouter({
    mode:'history',
    routes
});
export default router;


