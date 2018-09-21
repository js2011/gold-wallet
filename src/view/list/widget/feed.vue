<template>
  <div class="jk-wod-main" data-id="d31976fd626384f02f199f5a7c374f53" data-hittype="2">
    <a @click="jump(feed.link)">
      <div class="jk-wod-gshead">
        <i><img :src="feed.logo"></i>
        <div class="wod-gshead-cnt">
          <h2>
            <span>{{feed.name}}</span>
          </h2>
          <h3></h3>
          <p>{{feed.detail.feature}}</p>
        </div>
        <span class="wod-gshead-btn">点我拿钱</span>
      </div>
      <form name="form1" method="post" action="http://res.txingdai.com/t_2/?id=0b487a85dea0a75074aa1dce6834149d">
      </form>
      <div class="jk-wod-gscnt">
        <ul>
          <li>
            <header>额度(元)</header>
            <p>{{feed.detail.limit}}</p>
          </li>
          <li>
            <header>成功率</header>
            <p>{{feed.detail.successRate}}%</p>
          </li>
          <li>
            <header>日费率</header>
            <p>{{feed.detail.rate}}%</p>
          </li>
        </ul>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    user: Object,
    feed: Object
  },
  methods: {
    jump (url) {
      if (this.user && this.user.phone) {
        this.$snc.URLNavigateTo({
          url,
          action: 'web'
        })
        return;
      }
      this.$snc.URLNavigateTo({id: 'signup', actionType: 99, title: '注册'});
    }
  }
};
</script>

