import Vue from 'vue'
import $ from 'jquery'

import App from './App.vue'
import router from './router'
import store from './store'

// css全局样式
import './assets/css/common.css'
import './assets/css/font.css'

Vue.config.productionTip = false
Vue.prototype.$jq = $

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
