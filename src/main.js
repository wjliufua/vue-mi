import Vue from 'vue'
// 引入jquery
import $ from 'jquery'

import App from './App.vue'
import router from './router'
import store from './store'

// css全局样式
import './assets/css/common.css'
import './assets/css/font.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.config.productionTip = false
Vue.prototype.$jq = $

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
