import axios from 'axios'

import { Message, Loading } from 'element-ui'
/*
  封装 axios，实现发送/响应接口的拦截，来实现统一提示效果
*/

// 页面遇到错误，显示提示消息函数
const err = () => {
  Message({
    type: 'error',
    message: '遇到错误',
    duration: 2 * 1000
  })
}

// 加载提示
var loading
const startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: '加载中......',
    background: 'rgba(0,0,0,0.7)'
  })
}

// 关闭加载提示
const endLoading = () => {
  loading.close()
}

//  创建实例时配置默认值
const request = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  startLoading()
  return config
}, function (error) {
  // 对请求错误做些什么
  endLoading()
  err()
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  endLoading()
  return response.data
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  endLoading()
  err()
  return Promise.reject(error)
})

export default request
