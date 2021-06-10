import request from '@/utils/request'
/**
 * 
 * @param {*} data 登录接口
 * @returns 
 */
export function mockData(data) {
  return request({
    url: '/api/mockdata',
    method: 'post',
    data
  })
}
/**
 * 
 * @param {*} data 登录接口
 * @returns 
 */
export function mockBackData(data) {
  return request({
    url: '/api/mockbackdata',
    method: 'post',
    data,
    responseType: "blob"
  })
}
/**
 * 
 * @returns 登录完再调用获取个人信息
 */
export function getAllProvince() {
  return request({
    url: '/api/getallprovince',
    method: 'get',
  })
}
export function getAreaNumber(code) {
  return request({
    url: '/api/getareanumber',
    method: 'get',
  })
}
export function getAreaData(code) {
  return request({
    url: `/api/getareadata/${code}`,
    method: 'get',
  })
}
