import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component (resolve) {
        require(['../pages/index.vue'], resolve)
      }
    },
    {
      path: '/detail',
      component (resolve) {
        require(['../pages/detail.vue'], resolve)
      }
    }
  ]
})

export default router
