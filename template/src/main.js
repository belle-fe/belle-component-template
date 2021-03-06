import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import BelleUi from './../packages/index'
import request from  './request'
Vue.use(BelleUi)
Vue.use(ElementUI)
Vue.prototype.$request = request
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
