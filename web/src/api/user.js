import request from '@/utils/request'
/**
 * 
 * @param {*} data 登录接口
 * @returns 
 */
export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}
/**
 * 
 * @returns 登录完再调用获取个人信息
 */
export function getInfo() {
  return request({
    url: '/api/user/info',
    method: 'get',
  })
}

/**
 * 
 * @param {*} params 分页查询
 * @returns 
 */
export function getUsers (params) {
  return request({
    url: `/api/user?${params}`,
    method: 'get',
  })
}

export function createUser (data) {
  return request({
    url: '/api/user',
    method: 'post',
    data
  })
}

export function editUser (id, data) {
  return request({
    url: `/api/user/${id}`,
    method: 'put',
    data
  })
}

export function deleteUser (id) {
  return request({
    url: `/api/user/${id}`,
    method: 'delete',
  })
}

