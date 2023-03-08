import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import NavBar from '@/components/navbar/Index.vue'
Vue.component(NavBar.name,NavBar)


import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

import "./assets/css/reset.css"
import "@/utils/element.js"
import "@/mock/mockServer"
import store from '@/store'

import $ from 'jquery'
import 'bootstrap'
// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 全局注册 $
Vue.prototype.$ = $

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
