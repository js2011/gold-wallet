<template>
  <div class="main">
    <detail-page></detail-page>
  </div>
</template>
<script>
import DetailPage from "./pages";
export default {
  props: {
    firstAjax: Boolean
  },
  components: { DetailPage }
};
</script>
<style>
.main {
  width: 10rem;
  margin: 0 auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body,
html {
  background: #f5f5f5;
}
</style>
