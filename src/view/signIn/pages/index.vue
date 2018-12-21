<template>
  <div class="sign-in-page">
    <span class="title">注册</span>
    <span class="info">请输入 {{ext.phone}} 收到的验证码</span>
    <mt-field class="code" type="number" placeholder="验证码" v-model="code"></mt-field>
    <div class="next">
      <span :class="coded ? '' : 'get-code'" @click="getCode">{{coded ? '剩余(' + time + ')秒' : '获取验证码'}}</span>
      <span class="sign-in" @click="signIn">登录</span>
    </div>
  </div>
</template>
<script>
import MtField from "../components/field";
import crossEvent from  "@mfelibs/universal-framework/src/libs/apis/crossEvent";

export default {
  inject: ['ext'],
  components: {MtField},
  data () {
    return {
      time: 120,
      code: '',
      coded: false
    }
  },
  methods: {
    signIn() {
      let vm = this;
      this.$snc.fetch({
        url: 'http://res.txingdai.com/account/login',
        method: 'POST',
        data: {
          phone: vm.ext.phone,
          code: vm.code
        },
        success(res) {
          if (res.code === 10200){
            vm.$snc.setGlobalStorage({
              user: {phone: vm.ext.phone}
            });
            crossEvent.trigger('book.signIn', {
              data: {},
              success(res) {}
            });
            crossEvent.trigger('book.homeReload', {
              data: {},
              success(res) {
                vm.$snc.URLNavigateTo({id: 'account', actionType: 100, title: '记账'});
              }
            });
            // vm.$snc.URLNavigateTo({id: 'account', actionType: 100, title: '记账'})
          }
        }
      })
    },
    getCode() {
      let vm = this
      if (vm.coded) return;
      this.$snc.fetch({
        url: 'http://res.txingdai.com/account/app_code',
        method: 'GET',
        data: {
          phone: vm.ext.phone,
          develop: false
        },
        success(res) {
          if (res.code === 10200) {
            // vm.code = res.data;
            vm.coded = true;
            let timer = setInterval(() => {
              vm.time--
              if (vm.time === 0) {
                clearInterval(timer);
                vm.coded = false;
                vm.time = 120;
              }
            }, 1000)
          } else {
            vm.coded = false
          }
          // vm.code = res.data
        }
      })
    }
  },
  created() {}
}
</script>
<style>
  .sign-in-page {
    padding: 0.3rem .5rem;
  }
  .sign-in-page>span {
    display: block;
  }
  .sign-in-page .title {
    font-size: .8rem;
    font-weight: 700;
  }
  .sign-in-page .info {
    margin: .1rem 0;
    color: rgb(128, 137, 158);
  }
  .sign-in-page .next {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .2rem 0;
  }
  .sign-in-page .next .get-code {
    cursor: pointer;
    color: rgba(32, 108, 255, .9);
  }
  .sign-in-page .next .sign-in {
    display: inline-block;
    text-align: center;
    width: 2.3rem;
    height: 1rem;
    line-height: 1rem;
    background: rgb(255, 215, 25);
    border-radius: .5rem;
    font-weight: 500;
  }
  .sign-in-page .code {
    margin: .5rem 0;
  }
  .sign-in-page .mint-cell-wrapper {
    background-image: none;
    border-bottom: 1px solid rgb(238, 242, 249);
    padding: 0;
  }
  .sign-in-page .mint-cell-title {
    width: 1.2rem;
  }
</style>
