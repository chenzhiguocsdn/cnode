import request from '../utils/request'

// 获取用户详情数据
export default function getUserByName (loginame) {
  return request({
    url: `user/${loginame}`,
    method: 'get'
  })
}
