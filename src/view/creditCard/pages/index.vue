<template>
  <div class="credit-card-list">
    <div class="credit-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
            <img class="slide-img" :src="banner.picture">
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
    <div class="credit-warning">
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
      credits: [{
          'id': 1,
          'title': '各大银行官网办卡',
          'logo': 'xinyongka1.png',
          'info': '去官方更快捷，更放心',
          'link': 'https://channel.haodai.com/?ref=hd_11014159',
          'sort': 1
        },
        {
          'id': 2,
          'title': '快速预约办卡',
          'logo': 'xinyongka2.png',
          'info': '同时可以申请多家信用卡，成功率，大额度机会更大',
          'link': 'https://credit.haodai.com/?ref=hd_11014159',
          'sort': 2
        },
        {
          'id': 3,
          'title': '信用卡办理进度查询',
          'logo': 'xinyongka3.png',
          'info': '随时随地查询',
          'type': 'hybrid',
          'link': 'bank',
          // 'link': 'https://loan.rongba.com/h5tuiguang/jff?ref=hd_11014159&sid=daikuan.guahao.me&showhead=0',
          'sort': 3
        },
        {
          'id': 4,
          'title': '信用卡激活',
          'logo': 'xinyongka4.png',
          'info': '各大银行信用卡激活',
          'link': 'https://cloud.haodai.com/Public/activate/city/beijing/showhead/1/showdown/1.html',
          'sort': 4
        },
        {
          'id': 5,
          'title': '银行电话服务',
          'logo': 'xinyongka5.png',
          'info': '二十五家银行电话随时查询',
          'type': 'hybrid',
          'link': 'bank-service',
          // 'link': 'https://loan.rongba.com/h5tuiguang/jff?ref=hd_11012515&sid=daikuan.guahao.me&showhead=0',
          'sort': 5
        }
      ],
      banners: [{
        'id': 9,
        'name': '办理信用卡',
        'picture': 'http://123.56.70.231:9090/upload/common/20170713/215549.png',
        'link': 'https://credit.haodai.com/?ref=hd_11014159',
        'tab': 1,
        'sort': 1
      }, {
        'id': 10,
        'name': '办理信用卡',
        'picture': 'http://123.56.70.231:9090/upload/common/20170713/215549.png',
        'link': 'https://credit.haodai.com/?ref=hd_11014159',
        'tab': 2,
        'sort': 2
      }]
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
    padding: 0.8rem .5rem;
  }
</style>
