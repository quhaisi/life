import axios from 'axios'

import { getToken } from '../utils'

// create an axios instance
const service = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

let timer

// 拦截请求
service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    message.error('bed request')
    Promise.reject(error)
  }
)

// 拦截响应
service.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (err.response) {
        const { status, data } = err.response
        switch (status) {
          case 401:
            message.error((data && data.message) || '登录信息过期或未授权，请重新登录！')
            break

          default:
            message.error(data.message || `连接错误 ${status}！`)
            break
        }
      } else {
        message.error(err.message)
      }
    }, 200)

    return Promise.reject(err)
  }
)

export default service