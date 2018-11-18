import Vue from 'vue'
import App from './App'
import appSNC from './import'

import '~/assets/style/reset.css'
import 'lib-flexible'

Vue.prototype.$snc = appSNC
/* eslint-disable no-new */
// let vm = new Vue({
//   el: '#app',
//   data: {firstAjax: false},
//   template: '<App :firstAjax="firstAjax"/>',
//   components: {App},
//   provide: {ext: {}}
// })

appSNC.ready(data => {
  data.ext || (data.ext = {});
  new Vue({
    el: '#app',
    data: {firstAjax: false},
    template: '<App :firstAjax="firstAjax"/>',
    components: {App},
    provide: data
  })
  // appSNC.hideLoading()
  // appSNC.enablePullDownRefresh({
  //   theme: 'worldcup',
  //   success (response) {
	// 		console.log('下拉刷新启用成功！')
	// 	}
  // })
})
