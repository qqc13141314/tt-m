
import request from '@/utils/request.js'
export const login = data => {
  return request({
    method: 'post',
    url: '/mp/v1_0/authorizations',
    data: data
  })
}
