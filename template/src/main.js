import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BelleUi from './../packages/index'
Vue.use(BelleUi)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
