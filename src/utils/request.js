import axios from 'axios'
// 创建一个axios实例，说白了就是复制了一个 axios
// 通过这个实例去发请求，

const request = axios.create({
//  baseURL:'http://ttapi.research.itcast.cn'
  baseURL: 'http://api-toutiao-web.itheima.net'
})
// 导出请求方法
export default request
