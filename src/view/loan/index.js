import Vue from 'vue'
import App from './App'
import appSNC from './import'

import * as apis from '~/apis';
appSNC.init('app', apis);

Vue.prototype.$snc = appSNC
/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  data: {firstAjax: false, user: {}},
  template: '<App :firstAjax="firstAjax" :user="user"/>',
  components: {App}
})

appSNC.ready(data => {
  // let vm = new Vue({
  //   el: '#app',
  //   data: {firstAjax: false, user: data.user || {}},
  //   template: '<App :firstAjax="firstAjax" :user="user"/>',
  //   components: {App}
  // })
  vm.user = data.user || {};
  // appSNC.hideLoading()
  // appSNC.enablePullDownRefresh({
  //   theme: 'worldcup',
  //   success (response) {
	// 		console.log('下拉刷新启用成功！')
	// 	}
  // })
})
