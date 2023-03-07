import mockRequest from './mockAjax'

// 请求首页数据
export const getIndexDate = ()=>mockRequest.get('/index')
// 请求前端学习数据
export const getMenuList = (id)=>mockRequest({
  url: `menuList/${id}`,
  method: 'get'
})