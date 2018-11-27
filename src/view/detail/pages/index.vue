<template>
  <div class="jp-box">
    <div class="jp-head">
      <div class="jp-back-top"></div>
      <div class="jp-head-top">
        <div class="jp-head-top-left">
          <img :src="detail.logo" alt="">
          </div>
          <div class="jp-head-top-right">
            <h1>{{detail.name}}</h1>
            <p class="jp-label">
              <span v-for="(word, i) in detail.detail.feature.split(/,|，/g)" :class="`back${i > 2 ? 3 : i + 1}`" :key="i">{{word}}</span>
              <!-- <span class="back1">小额极速贷</span>
              <span class="back2">低门槛</span>
              <span class="back3">新口子</span> -->
            </p>
            <p class="jp-label2">
              <span>申请成功：{{detail.detail.successNum}}人</span>
              <span>下款时间：30分钟放贷</span>
            </p>
          </div>
        </div>
        <div class="jp-head-bottom">
          <ul>
            <li style="width: 25%">
              <p class="pone">{{detail.detail.rate}}%</p>
              <p class="ptwo">日利率</p>
            </li>
            <li style="width: 40%">
              <p class="pone">{{detail.detail.limit}}</p>
              <p class="ptwo">额度范围(元)</p>
            </li>
            <li style="width: 35%">
              <p class="pone">7-30日</p>
              <p class="ptwo">期限范围(日)</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="jp-progess">
        <p class="jp-main-title">
          <img src="../../../assets/img/jpico01.png">
          <span>申请过程</span>
        </p>
        <ul class="jp-progess-main">
          <li class="jp-progess-li">
            <img src="../../../assets/img/jpico03.png">
            <p>身份认证</p>
          </li>
          <li class="aright">
            <img  src="../../../assets/img/aright.png">
          </li>
          <li class="jp-progess-li">
            <img src="../../../assets/img/jpico04.png">
            <p>手机号认证</p>
          </li>
          <li class="aright">
            <img  src="../../../assets/img/aright.png">
          </li>
          <li class="jp-progess-li">
            <img src="../../../assets/img/jpico06.png">
            <p>通讯录认证</p>
          </li>
          <li class="aright">
            <img  src="../../../assets/img/aright.png">
          </li>
          <li class="jp-progess-li">
            <img src="../../../assets/img/jpico05.png">
            <p>银行卡绑定</p>
          </li>
          <!-- <li class="aright">
            <img src="../../../assets/img/aright.png">
          </li>
          <li class="jp-progess-li">
            <img src="../../../assets/img/jpico07.png">
            <p>芝麻授信</p>
          </li> -->
        </ul>
      </div>
      <div class="jp-progess jp-condition">
        <p class="jp-main-title">
          <img src="../../../assets/img/jpico02.png">
          <span>申请资格</span>
        </p>
        <div class="jp-statu-text">
          <p v-if="!detail.memo">暂无内容</p>
          <p v-else v-for="(text, i) in detail.memo.split(/\n/g)" :key="i">{{text}}</p>
          <!-- <p>1、年龄：满22-40周岁以上的中国大陆公民</p>
          <p>2、地区：港澳台地区除外</p>
          <p>3、芝麻分580以上</p>
          <p>4、手机号实名半年以上</p> -->
        </div>
      </div>
      <div class="jp-btn" @click="jump(detail.link)">立即申请</div>
    </div>
</template>
<script>
export default {
  inject: ["ext"],
  data() {
    return {
      detail: this.ext.detail || {
        name: "小额极速贷",
        key: "qI8LwQoK",
        logo:
          "http://static.txingdai.com/img/201811/10/56f6e94faff444e2a9accb34dda2f00b@80x80.png",
        link: "http://s.txingdai.com/qI8LwQoK",
        weight: null,
        memo: "1、年龄：满22-40周岁以上的中国大陆公民\n2、地区：港澳台地区除外\n",
        detail: {
          feature: "新口子,额度高,秒下款",
          limit: "200-9000",
          rate: "0.01",
          successNum: "93949",
          successRate: "100"
        }
      }
    };
  },
  methods: {
    jump(url) {
      this.$snc.URLNavigateTo({
        url,
        action: "web"
      });
    }
  }
};
</script>

<style>
.jp-box {
  padding-bottom: 1.2rem;
}

.jp-back-top {
  background: #fdd802;
  height: 1.5rem;
}

.jp-head {
  overflow: hidden;
  background: #fff;
}

.jp-head-top {
  overflow: hidden;
  margin-top: -0.8rem;
}

.jp-head-top-left {
  float: left;
  padding-left: 0.32rem;
}

.jp-head-top-left img {
  width: 1.586667rem;
  height: 1.586667rem;
}

.jp-head-top-right {
  float: left;
  margin-left: 0.266667rem;

  text-align: left;
}

.jp-head-top-right h1 {
  /* margin-top: 0.1rem; */
  font-size: 0.5rem;
  font-weight: bold;
}

.jp-label {
  margin-top: 0.406667rem;
  font-size: 0.266667rem;
  font-weight: 400;
  color: #fff;
}

.jp-label span {
  font-size: 0.266667rem;
  padding: 0.066667rem 0.133333rem;
  margin-right: 0.15rem;
  border-radius: 0.053333rem;
}

.back1 {
  background: #4a7ef3;
}

.back2 {
  background: #fe6118;
}

.back3 {
  background: #fec924;
}

.jp-label2 {
  margin-top: 0.266667rem;
  font-size: 0.32rem;
  color: #646464;
  font-weight: bold;
}

.jp-head-bottom {
  width: 100%;
}

.jp-head-bottom ul {
  height: 0.96rem;
  margin-top: 0.8rem;
  padding-bottom: 0.2rem;
  border-bottom: #f5f5f5 solid 0.266667rem;
}

.jp-head-bottom ul li {
  float: left;
  height: 0.4rem;
  box-sizing: border-box;
  border-right: #e5e5e5 solid 0.053333rem;
}

.jp-head-bottom ul li:last-child {
  border-right: none;
}

.jp-head-bottom ul li .pone {
  font-size: 0.48rem;
  color: #000;
  margin-top: -0.4rem;
}

.jp-head-bottom ul li .ptwo {
  font-size: 0.32rem;
  color: #919191;
}

.jp-progess {
  padding: 0.38rem 0.373333rem 0.2rem 0.373333rem;
  background: #fff;
  border-bottom: #f5f5f5 solid 0.266667rem;
}

.jp-main-title {
  overflow: hidden;
}

.jp-main-title img {
  display: block;
  float: left;
  width: 0.48rem;
  height: 0.48rem;
}

.jp-main-title span {
  float: left;
  font-size: 0.38rem;
  line-height: 0.48rem;
  color: #000;
  font-weight: bold;
  margin-left: 0.4rem;
}

.jp-progess-main {
  padding: 0.37rem 0 0 0.6rem;
  overflow: hidden;
}

.jp-progess-main li {
  float: left;
  height: 1.633333rem;
  margin-bottom: 0.3rem;
}

.aright {
}

.aright img {
  width: 0.666667rem;
  margin-top: 0.24rem;
}

.jp-progess-main li p {
  font-size: 0.4rem;
  color: #000;
}

.jp-progess-li {
  padding: 0 0.166667rem;
}

.jp-progess-li img {
  width: 1.066667rem !important;
}

.jp-statu-text {
  padding-left: 0.9rem;
  margin-top: 0.4rem;
  padding-bottom: 0.2rem;
  font-size: 0.35rem;
  color: #434343;
  font-weight: 400;
  line-height: 0.586667rem;
  text-align: left;
}

.jp-btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.2rem;
  background: -webkit-linear-gradient(left, #fcb913, #fce604);
  color: #323232;
  font-size: 0.4rem;
  line-height: 1.2rem;
  text-align: center;
  border-top: #f5f5f5 solid 0.266667rem;
}
</style>
