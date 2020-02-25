import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import axios from 'axios'

axios.defaults.baseURL='http://101.37.80.37:8081/'

Vue.prototype.$http=axios

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
