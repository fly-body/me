import {getIndexDate} from '@/network'
const state = {
  menuList: [],
  url:""
}
const getters = {}
const mutations = {
  GETMENULIST(state,result){
    state.menuList = result.menuList
    state.url = result.url
  }
}
const actions = {
  async getMenuList({commit}){
    let result = await getIndexDate()
    if(result.code == 200){
      commit('GETMENULIST',result.data)
    }
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}