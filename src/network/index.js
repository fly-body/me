import mockRequest from './mockAjax'

// 请求服务器数据
export const getIndexDate = ()=>mockRequest.get('/index')