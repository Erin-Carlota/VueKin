import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import axios from 'axios'
let str = ''
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log(config)
  // str = config.data
    // config.data = 'id=1'
      return config;
  }, function (error) {
      // 对请求错误做些什么
      console.log(error)
      // return Promise.reject(error);
  });

  // 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log(response)
  // str = str.slice(3);
  // console.log(str)
  // response.data.id = str
  return response;
}, function (error) {
  // 对响应错误做点什么
  console.log(error)
  // return Promise.reject(error);
});
// 挂载到全局
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
