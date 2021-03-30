import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css全局样式
import './assets/css/commont.css'
import './assets/css/font.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
