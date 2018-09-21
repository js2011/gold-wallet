<template>
  <div class="main">
    <sign-in-page></sign-in-page>
  </div>
</template>
<script>
import SignInPage from './pages'
export default{
  props: {
    firstAjax: Boolean
  },
  components: {SignInPage}
}
</script>
<style scoped>
  .main {
    max-width: 750px;
    margin: 0 auto;
    background: #fff;
  }
</style>
