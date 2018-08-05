import Vue from 'vue'
import App from './App'
import appSNC from './import'

// 引入css
import '~/css/skpt_mian.css-v=3.4.4.css'
import '~/css/style.css-v=3.4.4.css'

Vue.prototype.$snc = appSNC
/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
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
