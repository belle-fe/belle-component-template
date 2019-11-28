import axios from 'axios'
import { Message } from 'element-ui' // MessageBox

// 创建axios实例
const service = axios.create({
<<<<<<< HEAD
  baseURL: process.env.BASE_API, // api 的 base_url
=======
  baseURL: 'http://10.0.30.96/mock/149', // api 的 base_url
>>>>>>> a4b7c7e7e44916208406f4c4f10368aad07808e5
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
<<<<<<< HEAD
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  // response => {
  //   /**
  //    * code为非20000是抛错 可结合自己业务进行修改
  //    */
  //   const res = response.data
  //   if (res.code !== 200) {
  //     Message({
  //       message: res.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })

  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //     .confirm( // MessageBox
  //         '你已被登出，可以取消继续留在该页面，或者重新登录',
  //         '确定登出',
  //         {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }
  //       ).then(() => {
  //         store.dispatch('FedLogOut').then(() => {
  //           location.reload() // 为了重新实例化vue-router对象 避免bug
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
=======
>>>>>>> a4b7c7e7e44916208406f4c4f10368aad07808e5
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
