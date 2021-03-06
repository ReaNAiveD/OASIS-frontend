/**
 * 配置vue-router
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './Home'
import searchRouter from './Search'
// import authorRouter from './Author/index';
import viewMore from './Home/viewMore'
import authorRelationship from './Author/relationShip'
import fieldPaper from '@/router/Author/fieldPaper'
import fieldRouter from './Field'
import affiliationRouter from './Affiliation'
import authorPortrait from './Author/portrait'
// import fieldPaper from "./Author/fieldPaper";
import fieldPie from './Author/fieldPie'
import enrich from './Enrich/index'
import affiliationAll from './Affiliation/all'
import authorlist from "@/router/Author/authorlist";

Vue.use(VueRouter)

// 路由的数组
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  homeRouter,
  searchRouter,
  // authorRouter,
  authorRelationship,
    authorlist,
  fieldPaper,
  authorPortrait,
  // fieldPaper,
  fieldPie,
  viewMore,
  {
    path: '/document/:id',
    name: 'DocumentDetail',
    component: () => import('@/views/DocumentDetail')
  },
  fieldRouter,
  affiliationRouter,
  affiliationAll,
  enrich

]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router


