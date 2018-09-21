<template>
  <div class="main">
    <sign-up-page></sign-up-page>
  </div>
</template>
<script>
import SignUpPage from './pages'
export default{
  props: {
    firstAjax: Boolean
  },
  components: {SignUpPage}
}
</script>
<style scoped>
  .main {
    max-width: 750px;
    margin: 0 auto;
    background: #fff;
  }
</style>
