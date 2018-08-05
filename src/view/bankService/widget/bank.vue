<template>
  <div class="bank-main">
    <div @click="jump(bank.tels)">
      <span>{{bank.bankname}}</span>
      <span>{{'>'}}</span>
    </div>
  </div>
</template>
<script>
import store from '~/store'
export default {
  props: {
    bank: Object
  },
  data () {
    return {
    }
  },
  methods: {
    jump (tells) {
      store.set('tells', tells)
      this.$router.push({path: '/detail'})
    }
  }
};
</script>
<style scoped>
  .bank-main {
  }
  .bank-main>div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.2rem;
    padding: 0.15rem 0;
    border-top: 1px solid #e7e7e7;
  }
</style>

