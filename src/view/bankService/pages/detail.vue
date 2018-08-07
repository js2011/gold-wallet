<template>
  <div class="bank-service-detail">
    <div class="container" v-for="(tell, i) in tells" :key="tell.tel + i">
      <div class="tell">
        <span class="name">{{tell.teltype}}</span>
        <span class="number">{{tell.tel}}</span>
      </div>
      <a class="icon" :href="`tel://${tell.tel}`" @click="tellphone(tell.tel)">
        <img :src="require('../../../img/credit/tell.png')">
      </a>
    </div>
  </div>
</template>
<script>
import store from '~/store'
export default {
  data () {
    return {
      tells: store.get('tells')
    }
  },
  methods: {
    tellphone (tell) {
      this.$snc.tellphone({
        phoneNumber: tell
      })
    }
  }
}
</script>
<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    border-bottom: 1px solid #e7e7e7;
  }
  .tell span {
    display: block;
  }
  .tell .number {
    font-size: 0.23rem;
    font-weight: 500;
    color: rgb(146, 146, 146);
  }
  .icon img {
    width: 0.5rem;
  }
</style>
