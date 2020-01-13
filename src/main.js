// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import i18n from './lang'
import box from '@/utils/box.js'

import './icons'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/variables.scss'
import '@/styles/index.scss'

Vue.use(ElementUI,{
  size:'mini',
  i18n:(key,value) => i18n.t(key,value)
})
Vue.config.productionTip = false
Vue.prototype.$box = box
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  render: h => h(App)
})
