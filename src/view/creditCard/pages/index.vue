<template>
  <div class="credit-card-list">
    <div class="credit-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
            <img class="slide-img" :src="banner.picture" @click="jump(banner.link)">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
    </div>
    <div class="credit-card">
      <credit v-for="credit in credits" :key="credit.id" :credit="credit"></credit>
    </div>
    <div v-if="credits.length" class="credit-warning">
      <span>温馨提示：银行及机构工作人员不会收办卡费用，如遇收费情况重新申请或换一家即可</span>
    </div>
  </div>
</template>
<script>
import Credit from '../widget/credit.vue'
require("~/lib/swiper.js")
require('~/css/swiper.css')
export default {
  components: {Credit},
  data () {
    return {
      credits: [],
      banners: []
    }
  },
  created () {
    let vm = this
    this.$snc.fetch({
      url: 'http://sudai.esoudai.com/api/loan/credit',
      success (data) {
        debugger
        vm.credits = data.body.credits
        vm.banners = data.body.banners
      },
      error (e) {}
    })
    vm.$snc.onPullDownRefresh({
      success () {
        vm.$snc.fetch({
          url: 'http://sudai.esoudai.com/api/loan/credit',
          success (data) {
            vm.credits = data.body.credits
            vm.banners = data.body.banners
            vm.$snc.stopPullDownRefresh({
              msg: `更新了${data.body.credits.length}条信息`
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
    let mySwiper = new Swiper ('.swiper-container', {
      // direction: 'vertical',
      loop: true,
      autoplay: 3000,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
    })
  }
};
</script>
<style scoped>
  .slide-img {
    width: 100%;
    object-fit: cover;
  }
  .credit-warning {
    text-align: center;
    color: red;
    font-size: 0.25rem;
    /* font-weight: 300; */
    padding: 0.35rem;
  }
</style>
