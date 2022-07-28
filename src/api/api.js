//管理我们的开发 接口 api
import axios from "axios"
let instance = axios.create({
    baseURL:"/api", //
    timeout:5000
})
//请求响应拦截
instance.interceptors.request.use((config)=>{
    // 请求拦截
    console.log(config)
    // config.headers.token = "wwnnc"
    return config
})
instance.interceptors.request.use((response)=>{
    // console.log(response)
    // response:后台发回的响应拦截
    return response
})

export default instance