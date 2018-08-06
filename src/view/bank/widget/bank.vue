<template>
  <div class="bank-main">
    <div @click="jump(bank.url)">
      <div class="card-icon">
        <img :src="require('../../../img/credit/' + bank.logo)">
      </div>
      <div class="card-info">
        <span class="title">{{bank.title}}</span>
        <span class="tell">{{bank.tell}}</span>
        <span class="info">{{bank.des}}</span>
        <span class="nourl" v-if="!bank.url">暂不支持线上查询</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bank: Object
  },
  data () {
    return {
    }
  },
  methods: {
    jump (url) {
      if (!url) return
      this.$snc.URLNavigateTo({
        url,
        action: 'web'
      })
    }
  }
};
</script>
<style scoped>
  .bank-main {
  }
  .bank-main>div {
    display: flex;
    align-items: center;
    /* margin: 0 0.2rem; */
    padding: 0.2rem 0;
    border-top: 1px solid #e7e7e7;
    margin-right: 0.3rem;
  }
  .card-icon {
    height: 1.2rem;
    margin: 0 0.2rem;
  }
  .card-icon img {
    height: 100%;
  }
  .card-icon {
    margin: 0 0.15rem;
  }
  .card-info {
    position: relative;
    width: 100%;
  }
  .card-info span{
    display: block;
    margin: 0.03rem 0;
  }
  .card-info .title{
    font-weight: 700;
  }
  .card-info .tell, .card-info .info{
    font-size: 0.23rem;
    font-weight: 500;
    color: rgb(146, 146, 146);
  }
  .card-info .nourl {
    position: absolute;
    top: .05rem;
    right: .2rem;
    color: red;
    font-size: .24rem;
    font-weight: 300;
  }
</style>

