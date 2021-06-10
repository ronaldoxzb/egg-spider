import request from '@/utils/request'

export function getSystemInfo(params) {
  return request({
    url: '/api/system',
    method: 'get',
    params
  })
}

