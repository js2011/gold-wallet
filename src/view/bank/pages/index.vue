<template>
  <div class="bank-list">
    <bank v-for="bank in banks" :key="bank.tell" :bank="bank"></bank>
  </div>
</template>
<script>
import Bank from '../widget/bank.vue'
export default {
  components: {Bank},
  data () {
    return {
      banks: [{
          'title': '交通银行',
          'logo': 'jiaotong.png',
          'url': 'https://creditcardapp.bankcomm.com/member/apply/status/preinquiry.html',
          'tell': '400-800-9888',
          'des': '按“1” 中文——按“#” 办卡服务——按“2” 办卡进度查询'
        },
        {
          'title': '农业银行',
          'logo': 'nongye.png',
          'url': 'https://eapply.abchina.com/CreditCardApp/CreditcardsInfo/CreditSearch',
          'tell': '400-66-95599',
          'des': '拨打400-66-95599——在语音中选择“1”中文服务后，选择“6”申请进度查询'
        },
        {
          'title': '平安银行',
          'logo': 'pingan.png',
          'url': 'https://c.pingan.com/apply/mobile/modules/queryApp/index.html#queryf',
          'tell': '95511',
          'des': '1、拨95511按“2”转信用卡--按“2#”信用卡进度查询。'
        },
        {
          'title': '中信银行',
          'logo': 'zhongxin.png',
          'url': 'https://creditcard.ecitic.com/citiccard/wap/cardappquery/app_inq.jsp?main=1&left=1',
          'tell': '40088-95558',
          'des': '1、按“1” 普通话——按“2” 查询类服务——按“1” 信用卡申请及审批进度查询。'
        },
        {
          'title': '建设银行',
          'logo': 'jianshe.png',
          'url': 'http://creditcard.ccb.com/cn/creditcard/apply_process3.html',
          'tell': '400-820-0588',
          'des': '操作流程：拨打400-820-0588——选择“进度查询”——输入身份证号码即可查询'
        },
        {
          'title': '浦发银行',
          'logo': 'pufa.png',
          'url': 'https://weixin.spdbccc.com.cn/spdbcccWeChatPage/applyProgressPath.do?path=applyProgress&page=index&noCheck=1',
          'tell': '400-820-8788',
          'des': '按“1”中文——按“3#”信用卡申请相关——按“2”信用卡申请进度查询'
        },
        {
          'title': '广发银行',
          'logo': 'guangfa.png',
          'url': 'https://wap.cgbchina.com.cn/queryApply.do?sid=0.7710854143363747',
          'tell': '95508',
          'des': '拨打95508——输入电话查询密码——选择“信用卡进度查询”。'
        },
        {
          'title': '民生银行',
          'logo': 'minsheng.png',
          'url': 'https://kefu.creditcard.cmbc.com.cn/wdxykindex.shtml?age=11#dingWeiAllByHSY',
          'tell': '400-66-95568',
          'des': '输入身份证号码+“#”号——按“1” 申请进度'
        },
        {
          'title': '招商银行',
          'logo': 'zhaoshang.png',
          'url': 'https://ccclub.cmbchina.com/mca/MQuery.aspx?WT.refp=%2Fcard-progress',
          'tell': '400-820-5555',
          'des': '1、按“3#”申请信用卡咨询服务——按“1” 信用卡申请进度查询'
        },
        {
          'title': '兴业银行',
          'logo': 'xingye.png',
          'url': 'https://3g.cib.com.cn/app/00282.html',
          'tell': '95561',
          'des': '按“1” 信用卡——按“1” 申请进度查询——输入身份证号码+“#”号'
        },
        {
          'title': '光大银行',
          'logo': 'guangda.png',
          'url': 'https://xyk.cebbank.com/cebmms/apply/fz/card-app-status.htm',
          'tell': '4007-888-888',
          'des': '按“1” 自助语音服务——按“#” 信用卡进度查询——输入身份证+“#”号'
        },
        {
          'title': '储蓄银行',
          'logo': 'chuxu.png',
          'url': 'https://pbank.psbc.com/pweb/CreditApplyProQryOutPre.do?_locale=zh_CN&BankId=9999',
          'tell': '400-88-95580',
          'des': '拨打400-88-95580——按“1”选择信用卡申请及申请进度查询——按“2”选择信用卡申请进度查询——输入身份证号码后即可查询申请进度'
        },
        {
          'title': '北京银行',
          'logo': 'beijing.png',
          'url': 'https://onlinepay.cupdata.com/weixin/apply.do?action=applyProgressInit&bankNum=6403&userId=weixin',
          'tell': '4006-601169',
          'des': '根据语音提示选择语音——按“3”信用卡申请进度查询——输入证件号码'
        },
        {
          'title': '吉林银行',
          'logo': 'jilin.png',
          'url': 'https://onlinepay.cupdata.com/weixin/webApply.do?action=applyProgressInit&bankNum=0406&userId=oEl7_t7eeqwNEqPtp8UpHC2mlDUk',
          'tell': '400-83-96666',
          'des': '直接拨打电话咨询'
        },
        {
          'title': '广州银行',
          'logo': 'guangzhou.png',
          'url': 'https://onlinepay.cupdata.com/weixin/webApply.do?action=applyProgressInit&bankNum=6413&userId=o37EKj6ieENxU57oll0BHOCcNCLk',
          'tell': '96699',
          'des': '拨打广州银行客服热线——按“1”选择信用卡业务——按“2”选择申请进度查询。'
        },
        {
          'title': '广州农商银行',
          'logo': 'guangzhounongshang.png',
          'url': 'https://ebank.grcbank.com/perbank/userCardRegisterSubmit.do',
          'tell': '95313',
          'des': '拨打广州农商银行信用卡客服电话：95313，接通人工服务，让银行客服人员为您查询广州农商银行信用卡申请进度。'
        },
        {
          'title': '上海银行',
          'logo': 'shanghai.png',
          'url': 'https://mbank.bankofshanghai.com/pweixin/static/index.html?Page=6+u9suZEEdXdHr2yWsL+6vg1uyMf1z9JNV8YXU27Vhva6UWXYRg5LC4VQS3th6unisoBBHfgCgctpSgKhneQjyrNYjh36PWWt40bQlFymbfsTdjCukorht3S+lHXn2dDDOXYfgqwjlLc7V+rBz+P+b77f3AzsYgciE2OfKRP/cYppSKS/yz+kjGyOeMrbFyLwALsxwZmT/9Bne17eR+yStc6yk6B0/12hsS19ls6lXOHIayfKRrFIvGEg/gG5JKd/Oxc639FgtyYZbE+YzAGt/696/8fuF1caaG1p9+aTKVQTc8dffJkszder6H6NHeqQtfwS0vWHhAMqMP8jyl/O7Adolw/XAJOcbxwimNseFP+HCrA0DzUSnG8cIpjbHhTQDAXgSpxfaFxvHCKY2x4U/F5+zdjXwo1O2Jhrng6Hzo=',
          'tell': '95594',
          'des': '拨打95594——选择“1”普通话——“2”自助服务——“3”信用卡客户服务——“5”申请进度查询。'
        },
        {
          'title': '渣打银行',
          'logo': 'zhada.png',
          'url': 'https://ccibanking.standardchartered.com.cn/onlinebank/apply.do?pid=',
          'tell': '400-820-6663',
          'des': '拨打客服电话后，根据语音提示或转人工服务，即可查询您的信用卡申请进度。'
        },
        {
          'title': '浙商银行',
          'logo': 'zheshang.png',
          'url': 'https://e.czbank.com/weixinHTML/eApply/queryCreditCardApplyProgress.html?wxCustFakeId=36f4b3cc-ea1f-4da1-a8ed-defb43b5982f-9RtxwN&wxRandomCode=0',
          'tell': '95527',
          'des': '拨打浙商银行信用卡24小时客户服务热线：95527。'
        },
        {
          'title': '花旗银行',
          'logo': 'huaqi.png',
          'url': 'https://www.citibank.com.cn/CNGCB/ICARD/appsta/showNext.do',
          'tell': '400-821-1880',
          'des': '拨打客服电话后，根据语音提示或转人工服务，即可查询您的信用卡申请进度。'
        },
        {
          'title': '徽商银行',
          'logo': 'weishang.png',
          'url': '',
          'tell': '40088-96588',
          'des': '拨打40088-96588——按“2”信用卡业务——输入身份证号加“#”查询。'
        },
        {
          'title': '重庆银行',
          'logo': 'chongqing.png',
          'url': '',
          'tell': '96899',
          'des': '拨打客服电话后，根据语音提示或转人工服务，即可查询您的信用卡申请进度。'
        },
        {
          'title': '宁夏银行',
          'logo': 'ningxia.png',
          'url': '',
          'tell': '96558',
          'des': '拨打客服电话后，根据语音提示或转人工服务，即可查询您的信用卡申请进度。'
        },
        {
          'title': '东亚银行',
          'logo': 'dongya.png',
          'url': '',
          'tell': '400-8888-338',
          'des': '按“1”选择普通话--按“3”选择信用卡业务--按“4”选择申请/申请进度查询--按“2”申请进度查询。'
        },
        {
          'title': '汇丰银行',
          'logo': 'huifeng.png',
          'url': '',
          'tell': '(+86)-(20)-83918133',
          'des': '拨打客服电话后，根据语音提示或转人工服务，即可查询您的信用卡申请进度。'
        },
        {
          'title': '宁波银行',
          'logo': 'ningbo.png',
          'url': '',
          'tell': '95574',
          'des': '拨打客服电话后，根据语音提示或转人工服务，即可查询您的信用卡申请进度。'
        },
        {
          'title': '华夏银行',
          'logo': 'huaxia.png',
          'url': '',
          'tell': '95511',
          'des': '1、拨95511按“2”转信用卡--按“2#”信用卡进度查询。'
        },
        {
          'title': '工商银行',
          'logo': 'gongshang.png',
          'url': '',
          'tell': '95588',
          'des': '根据语音提示选择中文/英文——按“6”信用卡服务——输入卡号或者身份证号查询。'
        },
        {
          'title': '江苏银行',
          'logo': 'jiangsu.png',
          'url': '',
          'tell': '400-82-80888',
          'des': '拨打400-82-80888——按“1”选择信用卡客户——按“6”选择申请进度查询——按“1”选择身份证件查询申请进度或按“0”选择人工查询申请进度。'
        },
        {
          'title': '温州银行',
          'logo': 'wenzhou.png',
          'url': '',
          'tell': '96699',
          'des': '0577-96699，按“2”信用卡业务--按“0”转人工服务查询信用卡申请进度。'
        },
        {
          'title': '南京银行',
          'logo': 'nanjing.png',
          'url': '',
          'tell': '40088-96400',
          'des': '拨打40088-96400——按“6”信用卡服务——按“9”转人工查询信用卡申请进度。'
        },
        {
          'title': '杭州银行',
          'logo': 'hangzhou.png',
          'url': '',
          'tell': '400-8888-508',
          'des': '拨打400-8888-508——按“6”信用卡服务——输入身份证及卡号后连续按两下#号选择3“办卡进度查询。'
        },
        {
          'title': '天津银行',
          'logo': 'tianjin.png',
          'url': '',
          'tell': '4006-960296',
          'des': '拨打4006-960296——按“0”选择人工服务查询信用卡申请进度。'
        },
        {
          'title': '包商银行',
          'logo': 'baoshang.png',
          'url': '',
          'tell': '95352',
          'des': '拨打95352——选择“1”包商银行 ——“1”自助服务——“1”信用卡业务——“4”申请进度查询'
        },
        {
          'title': '河北银行',
          'logo': 'hebei.png',
          'url': '',
          'tell': '400-612-9999',
          'des': '拨打400-612-9999——按“1”选择信用卡业务——按“7”选择信用卡进度查询——输入身份证号码即可查询信用卡申请进度。'
        },
        {
          'title': '盛京银行',
          'logo': 'shengjing.png',
          'url': '',
          'tell': '800-890-7789',
          'des': '拨打800-890-7789 ——按“1”选择信用卡申请进度查询——输入申请信用卡时预留的身份证号即可查询信用卡申请进度。'
        },
        {
          'title': '哈尔滨银行',
          'logo': 'haerbing.png',
          'url': '',
          'tell': '400-60-95537',
          'des': '按“6”信用卡服务--按“2#”信用卡申请进度查询。'
        },
        {
          'title': '中国银行',
          'logo': 'zhongguo.png',
          'url': '',
          'tell': '40066-95566',
          'des': '按“1” 中文——按“8” 选信用卡——按“4” 申请进度查询——输入身份证号码+“#”号'
        }
      ]
    }
  },
  created () {
    let vm = this
    this.$snc.fetch({
      // url: 'http://res.txingdai.com/site/0b487a85dea0a75074aa1dce6834149d?ts=1531811436150&start=0&limit=100',
      url: 'http://res.txingdai.com/appinfo/b114e4027afc43b89adcded84d470aa5?ts=1531811436150&start=0&limit=100',
      success (data) {
        // debugger
        vm.feedData = data.data.list.sort(() => Math.random() >= 0.5)
      },
      error (e) {
        // debugger
      }
    })
    vm.$snc.onPullDownRefresh({
      success () {
        vm.$snc.fetch({
          // url: 'http://res.txingdai.com/site/0b487a85dea0a75074aa1dce6834149d?ts=1531811436150&start=0&limit=100',
          url: 'http://res.txingdai.com/appinfo/b114e4027afc43b89adcded84d470aa5?ts=1531811436150&start=0&limit=100',
          success (data) {
            vm.feedData = data.data.list.sort(() => Math.random() >= 0.5)
            vm.$snc.stopPullDownRefresh({
              msg: `更新了${data.data.list.length}条信息`
            })
          },
          error (e) {
            vm.$snc.stopPullDownRefresh({
              msg: `更新失败`
            })
          }
        })
      }
    })
  },
  methods: {
    jump (url) {
      this.$snc.URLNavigateTo({
        url,
        action: 'web'
      })
    }
  },
  mounted() {
    let mySwiper = new Swiper ('.swiper-container', {
      // direction: 'vertical',
      loop: true,
      autoplay: 3000,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
    })
  }
};
</script>
<style scoped>
</style>
