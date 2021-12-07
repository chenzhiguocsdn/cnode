import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'
import api from './api/index'

// 设置使用中文
moment.locale('zh-cn')

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$moment = moment
// 封装成全局$api,方便使用
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
