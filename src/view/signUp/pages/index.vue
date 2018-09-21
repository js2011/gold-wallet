<template>
  <div class="sign-up-page">
    <span class="title">注册</span>
    <span class="info">欢迎使用有钱记</span>
    <mt-field :state="state ? 'success' : 'error'" class="phone" label="+86" type="tel" placeholder="请输入手机号" v-model="phone"></mt-field>
    <div class="next">
      <span @click="jump">下一步</span>
    </div>
  </div>
</template>
<script>
import MtField from "../components/field";

export default {
  components: {MtField},
  data () {
    return {
      phone: ''
    }
  },
  methods: {
    jump () {
      if (!this.state) return;
      this.$snc.URLNavigateTo({id: 'sign-in', action: 'hybrid', title: '注册', ext: {phone: this.phone}});
    }
  },
  computed: {
    state() {
      return /^1[3|4|5|8][0-9]\d{8}$/.test(this.phone);
    }
  }
}
</script>
<style>
  .sign-up-page {
    padding: 0.3rem .5rem;
  }
  .sign-up-page>span {
    display: block;
  }
  .sign-up-page .title {
    font-size: .8rem;
    font-weight: 700;
  }
  .sign-up-page .info {
    margin: .1rem 0;
    color: rgb(128, 137, 158);
  }
  .sign-up-page .next {
    text-align: right;
    margin: .2rem 0;
  }
  .sign-up-page .next span {
    display: inline-block;
    text-align: center;
    width: 2.3rem;
    height: 1rem;
    line-height: 1rem;
    background: rgb(255, 215, 25);
    border-radius: .5rem;
    font-weight: 500;
  }
  .sign-up-page .phone {
    margin: .5rem 0;
  }
  .sign-up-page .mint-cell-wrapper {
    background-image: none;
    border-bottom: 1px solid rgb(238, 242, 249);
    padding: 0;
  }
  .sign-up-page .mint-cell-title {
    width: 1.2rem;
  }
</style>
