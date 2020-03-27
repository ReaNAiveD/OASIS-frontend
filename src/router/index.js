/**
 * 配置vue-router
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import homeRouter from './Home';
import searchRouter from './Search';
// import authorRouter from './Author/index';
import authorRelationship from './Author/relationShip'
import fieldRouter from './Field'
import affiliationRouter from './Affiliation'
import authorPortrait from './Author/portrait'

Vue.use(VueRouter);

// 路由的数组
const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    homeRouter,
    searchRouter,
    // authorRouter,
    authorRelationship,
    authorPortrait,
    {
        path: "/document/:id",
        name: "DocumentDetail",
        component: () =>import('@/views/DocumentDetail')
    },
    fieldRouter,
    affiliationRouter

];

const router = new VueRouter({
    mode:'history',
    routes
});
export default router;


