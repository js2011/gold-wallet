import Vue from 'vue'
import App from './App'
import appSNC from './import'
import wintip from 'wintip'
import store from '~/store'

import * as apis from '~/apis';
appSNC.init('app', apis);

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
  appSNC.hideLoading();
  // appSNC.login({
  //   success (data) {}
  // })
	// ready 后初始化基础信息
	// init(data)
  // appSNC.onFirstAjax({
  //   success (data) {
  //     vm.firstAjax = true
  //     store.set('activityList', data)
	// 		appSNC.hideLoading()
	// 	},
	// 	error (e) {
	// 		appSNC.hideLoading()
	// 		wintip(e)
	// 	}
  // })
})

function init (data) {
  let shareInfo = {
    title: 'data.commonData && data.commonData.share_title',
    url: 'data.commonData && data.commonData.share_url',
    pic: 'data.commonData && data.commonData.share_pic',
    introduction: 'data.commonData && data.commonData.share_summary'
  }
  appSNC.onShareInfo({
    success (res) {
      appSNC.openShare(shareInfo)
    }
  })
  appSNC.setNavigationBarTitle({
		title: '福利',
    success (response) {}
	})

	appSNC.enablePullDownRefresh({
    theme: 'worldcup',
    success (response) {
			console.log('下拉刷新启用成功！')
		}
  })
}
