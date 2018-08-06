<template>
  <div class="credit-main">
    <div @click="jump(credit.title, credit.link)">
      <div class="card-icon">
        <img :src="credit.logo">
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
    jump (title, url) {
      switch (true) {
        case title.indexOf('进度查询') != -1:
          this.$snc.URLNavigateTo({id: 'bank', action: 'hybrid', title: '进度查询'})
          break
        case title.indexOf('电话服务') != -1:
          this.$snc.URLNavigateTo({id: 'bank-service', action: 'hybrid', title: '电话服务'})
          break
        default:
          this.$snc.URLNavigateTo({url, action: 'web'})
          break
      }
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
    height: 1.1rem;
    margin: 0 0.2rem;
  }
  .card-icon img {
    height: 100%;
  }
  .card-icon {
    margin: 0 0.1rem;
  }
  .card-info span{
    display: block;
    margin: 0.1rem 0;
  }
  .card-info .info {
    margin-top: 0.15rem;
  }
  .card-info .title{
    font-weight: 700;
  }
  .card-info .info{
    font-size: 0.23rem;
    font-weight: 400;
    color: rgb(185, 185, 185);
  }
</style>

