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
        <loading v-if="!feedData.length"></loading>
        <feed v-else :user="user" v-for="feed in feedData" :feed="feed" :key="feed.key"></feed>
      </section>
      <!-- 推荐专题 -->
      <div class="tuijian" v-show="feedData.length">
        <div class="title"><div>&nbsp;</div>推荐专题</div>
        <div class="tuijian-img">
          <img src="../../../img/zhuanti1.png" @click="openHybrid('login_category_xinkouzituijian')">
          <img src="../../../img/zhuanti2.png" @click="openHybrid('login_category_gaotongguotuijian')">
          <img src="../../../img/zhuanti3.png" @click="openHybrid('login_category_jinrirementuijian')">
        </div>
      </div>
      <!-- <div style="height:3.8rem"></div> -->
      <!-- 系统通知 -->
    </article>
  </div>
</template>
<script>
import crossEvent from  "@mfelibs/universal-framework/src/libs/apis/crossEvent";
import Feed from '../widget/feed.vue'
import Loading from '../widget/loading.vue'
const $ = require("jquery")
// require("~/lib/common.js")
// require("~/lib/swiper.js")
// require("~/lib/borrow1.js")
export default {
  inject: ['ext'],
  props: {user: Object},
  components: {Feed, Loading},
  data () {
    return {
      feedData: []
    }
  },
  created () {
    let vm = this
    this.$snc.fetch({
      // url: 'http://res.txingdai.com/site/0b487a85dea0a75074aa1dce6834149d?ts=1531811436150&start=0&limit=100',
      url: 'http://res.txingdai.com/appinfo/?ts=1531811436150&start=0&limit=100',
      data: {
        // boundleId: 'com.tengxin.youqianji',
        // channel: 'appStore',
        moudleId: vm.ext.moudleId || 'login_xiakuanbibei_shenzhen'
      },
      success (data) {
        // debugger
        // vm.feedData = data.data.list.sort(() => Math.random() >= 0.5)
        vm.feedData = data.data.list
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
          url: 'http://res.txingdai.com/appinfo/?ts=1531811436150&start=0&limit=100',
          data: {
            moudleId: vm.ext.moudleId || 'login_xiakuanbibei_shenzhen'
          },
          success (data) {
            // vm.feedData = data.data.list.sort(() => Math.random() >= 0.5)
            vm.feedData = data.data.list
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
    });
    crossEvent.on('book.homeReload', data => {
      vm.$snc.pageReload();
    })
  },
  methods: {
    openHybrid(id) {
      let vm = this;
      this.$snc.URLNavigateTo({
        id,
        action: 'hybrid',
        title: '推荐专题',
        ext: {moudleId: id}
      });
    },
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
  .feed-list {
    height: 100%;
  }
  .pt-rsd-list {
    margin-top: 0;
  }
  .tuijian {
    background: #fff;
    padding: 10px 0;
  }
  .tuijian .title {
    font-size: 14px;
    font-weight: 300;
    border-top: 5px solid #eee;
    margin-bottom: 5px;
    padding-top: 5px;
  }
  .tuijian .title div {
    display: inline-block;
    width: 3px;
    height: 100%;
    background: orange;
    margin: 0 5px;
  }
  .tuijian .tuijian-img {
    display: flex;
  }
  .tuijian .tuijian-img img {
    flex: 1;
    width: 100px;
    height: 100%;
    margin: 0 3px;
  }
</style>
