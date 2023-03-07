import {getMenuList} from '@/network'
const state = {
  menuList: []
}
const getters = {}
const mutations = {
  GETFONTSTUDYMENULIST(state,data){
    state.menuList = data
  }
}
const actions = {
  async getFontStudyMenuList({commit},id){
    let result = await getMenuList(id)
    if(result.code == 200){
      commit('GETFONTSTUDYMENULIST',result.data)
    }
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}