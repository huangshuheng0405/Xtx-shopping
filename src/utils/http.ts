import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加请求拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 非http开头 需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 请求超时 默认 60s
    options.timeout = 10000
    // 添加小程序请求头标识
    options.header = {
      ...options.header, // 要保留原来的东西 不然等号直接覆盖原来的东西
      'source-client': 'miniapp'
    }
    // 添加token请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token // 清除后undefined没有token 加？防止
    if (token) {
      options.header.Authorization = token
    }
    // console.log(options)
  }
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
interface Data<T> {
  code: string
  msg: string
  result: T
}
// 添加类型 支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 提取核心数据
          resolve(res.data as Data<T>) // 断言
        } else if (res.statusCode === 401) {
          // TODO: 处理401错误 清理用户信息
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({ title: (res.data as Data<T>).msg || '请求失败', icon: 'none' })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({ title: '网络错误,换个网络试试', icon: 'none' })
        reject(err)
      }
    })
  })
}
