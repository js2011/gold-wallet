<template>
  <div class="feed-list">
    <article class="g-big">
      <!-- 顶栏 -->
      <!-- <section class="f-frt-tle" style="background-color: #FDD900">
        <i>
          <img src="../../../img/lg_frtle_txtico.png">
        </i>
      </section> -->
      <!-- 平台分类入口 -->
      <section class="swiper-frt-mian swiper-container-horizontal">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide-jk-box swiper-slide-active" style="width: 640px;">
            <div class="slide-jk-bul" @click="jump('category', 'hybrid', '爆款推荐')">
              <a href="javascript:;">
                <i>
                  <img src="../../../img/1.png">
                </i>
                <p>爆款推荐</p>
              </a>
            </div>
            <div class="slide-jk-bul" @click="jump('category', 'hybrid', '无视黑白')">
              <a href="javascript:;">
                <i>
                  <img src="../../../img/2.png">
                </i>
                <p>无视黑白</p>
              </a>
            </div>
            <div class="slide-jk-bul" @click="jump('category', 'hybrid', '小额秒过')">
              <a href="javascript:;">
                <i>
                  <img src="../../../img/8.png">
                </i>
                <p>小额秒过</p>
              </a>
            </div>
            <div class="slide-jk-bul" @click="jump('category', 'hybrid', '免审放款')">
              <a href="javascript:;">
                <i>
                  <img src="../../../img/7.png">
                </i>
                <p>免审放款</p>
              </a>
            </div>
          </div>
          <!-- <div class="swiper-slide slide-jk-box swiper-slide-next" style="width: 640px;">
            <div class="slide-jk-bul">
            </div>
          </div> -->
        </div>
      </section>
      <!-- 小额极速贷 -->
      <section class="speedloan-info-list">
        <div class="jk-sdln-main">
          <h1 class="speedloan-js-head">
            <img src="../../../img/speedloan_infoico.png">
          </h1>
          <p class="sdln-max-jk">最高可借</p>
          <p class="sdln-max-je">{{100000}}
            <span>元</span>
          </p>
          <!-- 代码 开始 -->
          <section class="sdlninfo-user-li">
            <i></i>
            <ul style="margin-top: 0px;">
              <font color="#FF7955">
                <font color="#FF7955">
                  <font color="#FF7955">
                  </font>
                </font>
              </font>
              <li>
                <span @click="jump">
                  <font color="#FF7955">本平台不收取任何中介费用</font>
                </span>
                <font color="#FF7955">
                </font>
              </li>
              <li>
                <span @click="jump">
                  <font color="#FF7955">申请多家贷款可提升通过率</font>
                </span>
                <font color="#FF7955">
                </font>
              </li>
              <li>
                <span @click="jump">
                  <font color="#FF7955">本平台一律不向学生提供率借贷</font>
                </span>
                <font color="#FF7955">
                </font>
              </li>
            </ul>
            <font color="#FF7955">
              <font color="#FF7955">
                <font color="#FF7955">
                </font>
              </font>
            </font>
          </section>
          <font color="#FF7955">
            <font color="#FF7955">
              <font color="#FF7955">
                <div class="pinfo-list-btn">
                  <a @click="jump(feed1.link)" class="s-gnel-ylbtn-gdt">立即拿钱</a>
                </div>
                <div class="pinfo-sdln-tgl">
                  <span>成功率</span>
                  <strong>100%</strong>
                </div>
              </font>
            </font>
          </font>
        </div>
        <font color="#FF7955">
          <font color="#FF7955">
            <font color="#FF7955">
            </font>
          </font>
        </font>
      </section>
      <font color="#FF7955">
        <font color="#FF7955">
          <font color="#FF7955">
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
          </font>
        </font>
      </font>
    </article>
  </div>
</template>
<script>
import Feed from '../widget/feed.vue'
const $ = require("jquery")
// require("~/lib/common.js")
require("~/lib/swiper.js")
require("~/lib/borrow1.js")
export default {
  components: {Feed},
  data () {
    return {
      feedData: [],
      feed1: {detail: {limit: ''}}
    }
  },
  created () {
    let vm = this
    this.$snc.fetch({
      // url: 'http://res.txingdai.com/site/0b487a85dea0a75074aa1dce6834149d?ts=1531811436150&start=0&limit=100',
      url: 'http://res.txingdai.com/appinfo/b114e4027afc43b89adcded84d470aa5?ts=1531811436150&start=0&limit=100',
      success (data) {
        // debugger
        vm.feedData = data.data.list
        vm.feed1 = vm.feedData.splice(0, 1)[0]
      },
      error (e) {
        // debugger
      }
    });
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
            vm.feedData = data.data.list
            vm.feed1 = vm.feedData.splice(0, 1)[0]
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
    jump (url, action = 'web', title) {
      this.$snc.URLNavigateTo({id: url, url, action, title})
    }
  },
  mounted() {
    //滚动插件 
    (function ($) {
      $.fn.extend({
        Scroll: function (opt, callback) {
          //参数初始化 
          if (!opt) var opt = {};
          var _this = this.eq(0).find("ul:first");
          var lineH = _this.find("li:first").height(), //获取行高 
            line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH, 10), //每次滚动的行数，默认为一屏，即父容器高度 
            speed = opt.speed ? parseInt(opt.speed, 10) : 500, //卷动速度，数值越大，速度越慢（毫秒） 
            timer = opt.timer ? parseInt(opt.timer, 10) : 3000; //滚动的时间间隔（毫秒） 
          if (line == 0) line = 1;
          var upHeight = 0 - line * lineH;
          //滚动函数 
          var scrollUp = function () {
            _this.animate({
              marginTop: upHeight
            }, speed, function () {
              for (let i = 1; i <= line; i++) {
                _this.find("li:first").appendTo(_this);
              }
              _this.css({
                marginTop: 0
              });
            });
          }
          //鼠标事件绑定 
          let timerID;
          _this.hover(function () {
            if (timerID) clearInterval(timerID);
          }, function () {
            timerID = setInterval(scrollUp, timer);
          }).mouseout();
        }
      })
    })($);
    $(function () {
      //消息滚动
    	$(".sdlninfo-user-li").Scroll({
    		line: 1,
    		speed: 1000,
    		timer: 3000
    	});
    });

    // 顶部平台分类入口
    var mySwiper = new Swiper(".swiper-frt-mian", {
      pagination: ".swiper-paginatiom-m"
    });

    // 中部banner滚动
    var mySwiper = new Swiper(".swiper-frt-bnr", {
      autoplay: 5000,
      loop: true,
      pagination: ".swiper-paginatiom-bnrsd"
    });

    // function 滚动
    var mySwiper = new Swiper(".sdln-erne-jp1", {
      loop: false,
      slidesPerView: "auto"
    });
  }
};
</script>
