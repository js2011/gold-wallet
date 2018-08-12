<template>
  <div class="main">
    <!-- <feed-page v-if="firstAjax"></feed-page> -->
    <!-- <bank-service-page></bank-service-page> -->
    <router-view></router-view>
  </div>
</template>
<script>
// import BankServicePage from './pages'
export default{
  props: {
    firstAjax: Boolean
  },
  // components: {BankServicePage}
}
</script>
<style scoped>
  .main {
    max-width: 750px;
    margin: 0 auto;
    background: #fff !important;
  }
</style>
