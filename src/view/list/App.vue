<template>
  <div class="main">
    <!-- <feed-page v-if="firstAjax"></feed-page> -->
    <feed-page :user="user"></feed-page>
  </div>
</template>
<script>
import FeedPage from './pages'
export default{
  props: {
    user: Object,
    firstAjax: Boolean
  },
  components: {FeedPage}
}
</script>
<style scoped>
  .main {
    max-width: 750px;
    margin: 0 auto;
  }
</style>
