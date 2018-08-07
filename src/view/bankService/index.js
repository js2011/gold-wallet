import Vue from 'vue'
import App from './App'
import appSNC from './import'
import router from './router'

import * as apis from '~/apis'
appSNC.init('app', apis)

// 引入css
import '~/css/reset.css'

Vue.prototype.$snc = appSNC
/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  data: {firstAjax: false},
  template: '<App :firstAjax="firstAjax"/>',
  components: {App}
})

appSNC.ready(data => {
  appSNC.hideLoading()
  appSNC.enablePullDownRefresh({
    theme: 'worldcup',
    success (response) {
			console.log('下拉刷新启用成功！')
		}
  })
})
