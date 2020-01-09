import axios from 'axios'
import store from '@/store'
axios.defaults.baseURL='/api'
const service = axios.create({
  timeout:100000,
  headers:{'Content-Type': 'application/json'},
  method:'post'
})

service.interceptors.request.use(
  config => {
      let header = {
        transactionId:new Date().getTime().toString(),
        language:store.getters.lang,
        userName:"admin"
      }
      config.data.header = header
      console.log("请求数据：")
      console.log(config.data)
      return config;
  }
)

service.interceptors.response.use(
  response =>{
    console.log("返回数据: ")
    console.log(response.data)
    const res = response.data
    if(res.header.result=="SUCCESS"){
      return res.body
    }else{
      alert(res.header.resultMessage)
    }  
  }
)

export default service