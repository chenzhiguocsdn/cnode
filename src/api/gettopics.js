import request from '../utils/request'

// 获取主题首页数据
export default function getTopics (data) {
  return request({
    url: '/topics',
    method: 'get',
    params: data
  })
}
