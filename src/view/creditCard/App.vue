<template>
  <div class="main">
    <!-- <feed-page v-if="firstAjax"></feed-page> -->
    <credit-page></credit-page>
  </div>
</template>
<script>
import CreditPage from './pages'
export default{
  props: {
    firstAjax: Boolean
  },
  components: {CreditPage}
}
</script>
<style scoped>
  .main {
    max-width: 750px;
    margin: 0 auto;
    background: #f8f8f8;
  }
</style>
