<template>
  <div class="bank-service-list">
    <bank-service v-for="(bank, i) in banklist" :key="i" :bank="bank"></bank-service>
  </div>
</template>
<script>
import BankService from "../widget/bank.vue";
export default {
  components: { BankService },
  data() {
    return {
      banklist: [
        {
          bankname: "交通银行",
          tels: [
            {
              tel: "4008009888",
              teltype: "客服电话"
            }
          ]
        },
        {
          bankname: "中信银行",
          tels: [
            {
              tel: "4008009888",
              teltype: "客服电话"
            },
            {
              tel: "4008895558",
              teltype: "海外客服热线"
            },
            {
              tel: "4006095558",
              teltype: "白金客服热线"
            },
            {
              tel: "075582380730",
              teltype: "境外白金客服热线"
            }
          ]
        },
        {
          bankname: "平安银行",
          tels: [
            {
              tel: "95511",
              teltype: "客服电话"
            },
            {
              tel: "4008895511",
              teltype: "白金客服热线"
            },
            {
              tel: "8695511",
              teltype: "境外客服热线"
            },
            {
              tel: "8695511",
              teltype: "境外紧急服务热线"
            }
          ]
        },
        {
          bankname: "招商银行",
          tels: [
            {
              tel: "4008205555",
              teltype: "客服电话"
            },
            {
              tel: "4008885555",
              teltype: "白金热线"
            },
            {
              tel: "862168674800",
              teltype: "境外白金热线"
            },
            {
              tel: "8675584391000",
              teltype: "境外服务热线"
            },
            {
              tel: "4008895555",
              teltype: "金葵花贵宾服务专线"
            },
            {
              tel: "4006895555",
              teltype: "钻石贵宾服务专线"
            },
            {
              tel: "4006695555",
              teltype: "私人银行服务专线"
            },
            {
              tel: "4000666000",
              teltype: "出行易商预订服务热线"
            }
          ]
        },
        {
          bankname: "光大银行",
          tels: [
            {
              tel: "4007888888",
              teltype: "客服电话"
            },
            {
              tel: "4008111333",
              teltype: "白金客服热线"
            },
            {
              tel: "864007888888",
              teltype: "境外客服热线"
            }
          ]
        },
        {
          bankname: "兴业银行",
          tels: [
            {
              tel: "95561",
              teltype: "客服电话"
            },
            {
              tel: "862138769999",
              teltype: "境外客服热线"
            },
            {
              tel: "862138429696",
              teltype: "境外信用卡白金热线"
            }
          ]
        },
        {
          bankname: "工商银行",
          tels: [
            {
              tel: "4006695588",
              teltype: "客服电话"
            }
          ]
        },
        {
          bankname: "浦发银行",
          tels: [
            {
              tel: "4008208788",
              teltype: "客服电话"
            }
          ]
        },
        {
          bankname: "华夏银行",
          tels: [
            {
              tel: "4006695577",
              teltype: "客服电话"
            },
            {
              tel: "+861066209577",
              teltype: "境外客服热线"
            }
          ]
        },
        {
          bankname: "上海银行",
          tels: [
            {
              tel: "95594",
              teltype: "客服电话"
            },
            {
              tel: "021962888",
              teltype: "信用卡客服热线"
            },
            {
              tel: "862166614500",
              teltype: "境外客服热线"
            },
            {
              tel: "4008896288",
              teltype: "白金贵宾专线"
            }
          ]
        },
        {
          bankname: "民生银行",
          tels: [
            {
              tel: "4006695568",
              teltype: "客服电话"
            },
            {
              tel: "4008108008",
              teltype: "白金客服热线"
            },
            {
              tel: "861063767131",
              teltype: "境外客服热线"
            }
          ]
        },
        {
          bankname: "广州银行",
          tels: [
            {
              tel: "4008396699",
              teltype: "客服电话"
            }
          ]
        },
        {
          bankname: "浙商银行",
          tels: [
            {
              tel: "95527",
              teltype: "客服电话"
            }
          ]
        },
        {
          bankname: "花旗银行",
          tels: [
            {
              tel: "4008211880",
              teltype: "客服电话"
            },
            {
              tel: "862138969500",
              teltype: "境外客服热线"
            }
          ]
        },
        {
          bankname: "中国银行",
          tels: [
            {
              tel: "4006695566",
              teltype: "客服电话"
            }
          ]
        },
        {
          bankname: "建设银行",
          tels: [
            {
              tel: "4008200588",
              teltype: "信用卡电话"
            }
          ]
        },
        {
          bankname: "渣打银行",
          tels: [
            {
              tel: "4008206663",
              teltype: "客服电话"
            },
            {
              tel: "8675525892333",
              teltype: "境外客服电话"
            }
          ]
        },
        {
          bankname: "北京农商",
          tels: [
            {
              tel: "4008896198",
              teltype: "客服电话"
            }
          ]
        },
        {
          bankname: "广州农商",
          tels: [
            {
              tel: "95313",
              teltype: "客服电话"
            }
          ]
        },
        {
          bankname: "包商银行",
          tels: [
            {
              tel: "96016",
              teltype: "客服电话"
            },
            {
              tel: "967210",
              teltype: "宁波，深圳"
            },
            {
              tel: "65558555",
              teltype: "成都"
            },
            {
              tel: "047296016",
              teltype: "其他各地"
            }
          ]
        },
        {
          bankname: "重庆银行",
          tels: [
            {
              tel: "4007096899",
              teltype: "客服电话"
            }
          ]
        },
        {
          bankname: "北京银行",
          tels: [
            {
              tel: "4006601169",
              teltype: "客服电话"
            }
          ]
        },
        {
          bankname: "储蓄银行",
          tels: [
            {
              tel: "400889558",
              teltype: "客服电话"
            }
          ]
        },
        {
          bankname: "农业银行",
          tels: [
            {
              tel: "4006695599",
              teltype: "客服电话"
            },
            {
              tel: "4006195599",
              teltype: "白金信用卡贵宾专线"
            }
          ]
        },
        {
          bankname: "广发银行",
          tels: [
            {
              tel: "95508",
              teltype: "客服电话"
            },
            {
              tel: "+860085263766",
              teltype: "境外客服电话"
            },
            {
              tel: "4008863766",
              teltype: "白金客户热线"
            },
            {
              tel: "+862087310029",
              teltype: "境外紧急服务热线"
            }
          ]
        }
      ]
    };
  },
  created() {
    let vm = this;
    this.$snc.fetch({
      // url: 'http://res.txingdai.com/site/0b487a85dea0a75074aa1dce6834149d?ts=1531811436150&start=0&limit=100',
      url:
        "http://res.txingdai.com/appinfo/b114e4027afc43b89adcded84d470aa5?ts=1531811436150&start=0&limit=100",
      success(data) {
        // debugger
        vm.feedData = data.data.list.sort(() => Math.random() >= 0.5);
      },
      error(e) {
        // debugger
      }
    });
    vm.$snc.onPullDownRefresh({
      success() {
        vm.$snc.fetch({
          // url: 'http://res.txingdai.com/site/0b487a85dea0a75074aa1dce6834149d?ts=1531811436150&start=0&limit=100',
          url:
            "http://res.txingdai.com/appinfo/b114e4027afc43b89adcded84d470aa5?ts=1531811436150&start=0&limit=100",
          success(data) {
            vm.feedData = data.data.list.sort(() => Math.random() >= 0.5);
            vm.$snc.stopPullDownRefresh({
              msg: `更新了${data.data.list.length}条信息`
            });
          },
          error(e) {
            vm.$snc.stopPullDownRefresh({
              msg: `更新失败`
            });
          }
        });
      }
    });
  },
  methods: {
    jump(url) {
      this.$snc.URLNavigateTo({
        url,
        action: "web"
      });
    }
  },
  mounted() {
  }
};
</script>
<style scoped>
</style>
