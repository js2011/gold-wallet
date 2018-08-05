<template>
  <div class="credit-main">
    <div @click="jump(credit.type, credit.link)">
      <div class="card-icon">
        <img :src="require('../../../img/credit/' + credit.logo)">
      </div>
      <div class="card-info">
        <span class="title">{{credit.title}}</span>
        <span class="info">{{credit.info}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    credit: Object
  },
  data () {
    return {
    }
  },
  methods: {
    jump (type = 'web', url) {
      this.$snc.URLNavigateTo({
        [type === 'web' ? 'url' : 'id']: url,
        action: type
      })
    }
  }
};
</script>
<style scoped>
  .credit-main {
  }
  .credit-main>div {
    display: flex;
    align-items: center;
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    border-top: 1px solid #e7e7e7;
  }
  .card-icon {
    height: 1.2rem;
    margin: 0 0.2rem;
  }
  .card-icon img {
    height: 100%;
  }
  .card-icon {
    margin: 0 0.2rem;
  }
  .card-info span{
    display: block;
    margin: 0.1rem 0;
  }
  .card-info .title{
    font-weight: 700;
  }
  .card-info .info{
    font-size: 0.2rem;
    font-weight: 400;
    color: rgb(185, 185, 185);
  }
</style>

