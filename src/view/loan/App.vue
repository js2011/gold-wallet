<template>
  <div class="main">
    <!-- <feed-page v-if="firstAjax"></feed-page> -->
    <loan-page :user="user"></loan-page>
  </div>
</template>
<script>
import LoanPage from './pages'
export default{
  props: {
    user: Object,
    firstAjax: Boolean
  },
  components: {LoanPage}
}
</script>
<style scoped>
  .main {
    max-width: 750px;
    margin: 0 auto;
  }
</style>
