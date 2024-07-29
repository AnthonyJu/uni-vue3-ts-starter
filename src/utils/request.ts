import axios from 'axios'
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter'

const request = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
  adapter: createUniAppAxiosAdapter(),
})

// request 拦截器
request.interceptors.request.use(
  (config) => {
    // TODO 在请求发送之前做一些处理，携带 token 等
    return config
  },
)

// response 拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data

    // 不是 200，则判断为错误
    if (res.code !== 200) {
      // 401: 未登录
      if (res.code === 401) {
        // TODO  重新登录
      }

      // TODO 其他后台返回的状态码处理
      uni.showToast({
        title: res.message,
        icon: 'error',
      })

      uni.$emit('z-paging-error-emit')

      return Promise.reject(new Error(res.message || 'Error'))
    }
    // 200: 正常
    else {
      return res
    }
  },
  (error) => {
    let msg = error.message
    if (error.message.includes('timeout')) msg = '请求超时！'
    else if (error.message.includes('Network Error')) msg = '网络错误！'
    else if (error.message.includes('404')) msg = '请求地址出错！'

    uni.showToast({
      title: msg,
      icon: 'error',
    })

    uni.$emit('z-paging-error-emit')

    return Promise.reject(error)
  },
)

export { request }
