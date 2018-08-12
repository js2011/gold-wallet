<template>
  <div class="main">
    <!-- <feed-page v-if="firstAjax"></feed-page> -->
    <bank-page></bank-page>
  </div>
</template>
<script>
import BankPage from './pages'
export default{
  props: {
    firstAjax: Boolean
  },
  components: {BankPage}
}
</script>
<style scoped>
  .main {
    max-width: 750px;
    margin: 0 auto;
    background: #fff !important;
  }
</style>
