import Vue from 'vue/types/vue'
import VueRouter from 'vue-router'
import Search from '../views/Search'

Vue.use(VueRouter)

const router=new VueRouter({
  routes:[
    {path:'/search',component:Search}
  ]
})

export default router
