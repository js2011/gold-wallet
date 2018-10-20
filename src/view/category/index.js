import Vue from 'vue'
import App from './App'
import appSNC from './import'

import * as apis from '~/apis';
appSNC.init('app', apis);

// 引入css
import '~/css/skpt_mian.css-v=3.4.4.css'
import '~/css/style.css-v=3.4.4.css'

Vue.prototype.$snc = appSNC
/* eslint-disable no-new */
// let vm = new Vue({
//   el: '#app',
//   data: {firstAjax: false, user: {}},
//   template: '<App :firstAjax="firstAjax" :user="user"/>',
//   components: {App}
// })

appSNC.ready(data => {
  data.ext || (data.ext = {});
  let vm = new Vue({
    el: '#app',
    data: {firstAjax: false, user: data.user || {}},
    template: '<App :firstAjax="firstAjax" :user="user"/>',
    components: {App},
    provide: data
  })
  vm.user = data.user || {};
  // appSNC.hideLoading()
  // appSNC.enablePullDownRefresh({
  //   theme: 'worldcup',
  //   success (response) {
	// 		console.log('下拉刷新启用成功！')
	// 	}
  // })
})
