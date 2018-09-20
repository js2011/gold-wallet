<template>
  <div class="feed-list">
    <article class="g-big">
      <!-- 热门推荐 -->
      <section class="pt-rsd-list">
        <div class="pt-rds-header">
          <h4 class="pt-rds-lh4">
            <img src="../../../img/sdln_hotico.png">
          </h4>
        </div>
        <!-- feed card -->
        <feed v-for="feed in feedData" :feed="feed" :key="feed.key"></feed>
      </section>
      <div style="height:3.8rem"></div>
      <!-- 系统通知 -->
    </article>
  </div>
</template>
<script>
import Feed from '../widget/feed.vue'
const $ = require("jquery")
// require("~/lib/common.js")
// require("~/lib/swiper.js")
// require("~/lib/borrow1.js")
export default {
  components: {Feed},
  data () {
    return {
      feedData: []
    }
  },
  created () {
    let vm = this
    this.$snc.fetch({
      // url: 'http://res.txingdai.com/site/0b487a85dea0a75074aa1dce6834149d?ts=1531811436150&start=0&limit=100',
      url: 'http://res.txingdai.com/appinfo/b114e4027afc43b89adcded84d470aa5?ts=1531811436150&start=0&limit=100',
      success (data) {
        // debugger
        vm.feedData = data.data.list.sort(() => Math.random() >= 0.5)
      },
      error (e) {
        // debugger
      }
    })
    vm.$snc.enablePullDownRefresh({
      // theme: 'worldcup',
      success (response) {
        console.log('下拉刷新启用成功！')
      }
    });
    vm.$snc.onPullDownRefresh({
      success () {
        vm.$snc.fetch({
          // url: 'http://res.txingdai.com/site/0b487a85dea0a75074aa1dce6834149d?ts=1531811436150&start=0&limit=100',
          url: 'http://res.txingdai.com/appinfo/b114e4027afc43b89adcded84d470aa5?ts=1531811436150&start=0&limit=100',
          success (data) {
            vm.feedData = data.data.list.sort(() => Math.random() >= 0.5)
            vm.$snc.stopPullDownRefresh({
              msg: `更新了${data.data.list.length}条信息`
            })
          },
          error (e) {
            vm.$snc.stopPullDownRefresh({
              msg: `更新失败`
            })
          }
        })
      }
    })
  },
  methods: {
    jump (url) {
      this.$snc.URLNavigateTo({
        url,
        action: 'web'
      })
    }
  },
  mounted() {
  }
};
</script>
<style scoped>
  .pt-rsd-list {
    margin-top: 0;
  }
</style>
