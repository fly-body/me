import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import common from '@/store/common'
import menuList from '@/store/menuList'

export default new Vuex.Store({
  modules: {
      common,
      menuList
  }
})