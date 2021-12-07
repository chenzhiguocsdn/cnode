import request from '../utils/request'
// 获取主题详情
export default function getTopicById (id) {
  return request({
    url: `/topic/${id}`,
    method: 'get'
  })
}
