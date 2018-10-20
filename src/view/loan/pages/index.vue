<template>
  <div class="loan-page">
    <!-- <div style="width:100%;height:40%;text-align:center;" :style="`background-image:url(${background})`">
      <canvas id="myCanvas" width="200" height="200" style="margin:20px;"></canvas>
    </div> -->
    <div class="banner">
      <img src="../../../img/8000.jpg">
    </div>
    <div class="content">
      <div class="step">
        <div><span class="icon">1</span>填写资料</div>
        <div><span class="icon">2</span>一键投递</div>
        <div><span class="icon">3</span>最快1分钟放款</div>
      </div>
      <div class="loanBtn" @click="jump('http://res.txingdai.com/site/d/7e49ec05b3bf157f58407ec0b2ca81b8')">
        <span>立即借款</span>
      </div>
      <div class="random">
        <span></span>
        <div>已有<span style="color:#f48534;font-size:0.4rem;">{{Math.floor(Math.random() * (3000000 - 1000000 + 1) + 1000000)}}</span>人借款成功</div>
        <span></span>
      </div>
      <div class="record">
        <div>
          <img src="../../../img/1528730185320.png">
        </div>
        <div class="item">
          <div class="scroll">
            <span v-for="item in records" :key="item.key">{{item.value}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { user: Object },
  data() {
    return {
      // background: require("../../../img/f0.png"),
      records: [
        {
          value: "136****7752成功借款50000元",
          key: "reason1"
        },
        {
          value: "133****6893成功借款30000元",
          key: "reason2"
        },
        {
          value: "153****6853成功借款20000元",
          key: "reason3"
        },
        {
          value: "135****0233成功借款50000元",
          key: "reason4"
        },
        {
          value: "135****6972成功借款10000元",
          key: "reason5"
        },
        {
          value: "133****6776成功借款20000元",
          key: "reason6"
        },
        {
          value: "186****6097成功借款50000元",
          key: "reason7"
        },
        {
          value: "153****0763成功借款40000元",
          key: "reason8"
        },
        {
          value: "133****7796成功借款15000元",
          key: "reason9"
        },
        {
          value: "133****2421成功借款8000元",
          key: "reason10"
        },
        {
          value: "153****7896成功借款10000元",
          key: "reason11"
        },
        {
          value: "183****9996成功借款50000元",
          key: "reason12"
        },
        {
          value: "189****7096成功借款3000元",
          key: "reason13"
        },
        {
          value: "189****5342成功借款20000元",
          key: "reason14"
        },
        {
          value: "199****7342成功借款45000元",
          key: "reason15"
        },
        {
          value: "173****7899成功借款8000元",
          key: "reason16"
        },
        {
          value: "180****7595成功借款1000元",
          key: "reason17"
        },
        {
          value: "180****7373成功借款3000元",
          key: "reason18"
        },
        {
          value: "133****7785成功借款2000元",
          key: "reason19"
        },
        {
          value: "181****7676成功借款35000元",
          key: "reason20"
        },
        {
          value: "133****9391成功借款50000元",
          key: "reason21"
        },
        {
          value: "133****7796成功借款20000元",
          key: "reason22"
        },
        {
          value: "135****5672成功借款30000元",
          key: "reason23"
        },
        {
          value: "135****7796成功借款10000元",
          key: "reason24"
        },
        {
          value: "177****7706成功借款3500元",
          key: "reason25"
        },
        {
          value: "186****9692成功借款2000元",
          key: "reason26"
        },
        {
          value: "132****0332成功借款5000元",
          key: "reason27"
        },
        {
          value: "",
          key: "reason28"
        }
      ]
    };
  },
  created() {},
  methods: {
    initCanvas(moneyCount) {
      var title = null;
      var dscb = null;
      dscb = moneyCount;
      if (null == title) {
        title = "预计可借款额度(元)";
      }
      if (null == dscb) {
        dscb = "2500";
      }
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      //https://www.zhihu.com/question/37698502  抗锯齿
      var width = canvas.width,
        height = canvas.height;
      if (window.devicePixelRatio) {
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        canvas.height = height * window.devicePixelRatio;
        canvas.width = width * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#FDC39E";
      ctx.arc(100, 100, 90, 0, 2 * Math.PI, false);
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = "#FFFFFF";
      ctx.arc(100, 100, 90, 0, 1 * Math.PI, false);
      ctx.stroke();

      ctx.font = "bold 18pt Arial"; // 字体大小，样式
      ctx.fillStyle = "#FFFFFF"; // 颜色
      ctx.textAlign = "center"; // 位置
      ctx.textBaseline = "middle";
      ctx.moveTo(100, 100); // 文字填充位置
      ctx.font = "12pt Calibri";
      ctx.fillText(title, 100, 100 - 20);
      ctx.font = "32pt Calibri";
      ctx.fillText(dscb, 100, 100 + 20);
      ctx.stroke();
    },
    jump(url) {
      this.$snc.URLNavigateTo({
        url,
        action: "web"
      });
    }
  },
  mounted() {
    // this.initCanvas(8000);
  }
};
</script>
<style scoped>
.banner img {
  width: 100%;
}
.step {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.3rem;
  margin: 10px 0;
}
.step .icon {
  display: inline-block;
  font-size: .35rem;
  color: #fff;
  text-align: center;
  /* background: #ff530f; */
  background: rgb(244, 133, 52);
  width: .5rem;
  height: .5rem;
  line-height: .5rem;
  border-radius: 50%;
  margin: 0 .1rem;
}
.loanBtn {
  height: 1rem;
  line-height: 1rem;
  /* color: #fff; */
  margin: 0.4rem;
  /* padding: 0 .4rem; */
  border-radius: 1rem;
  background: linear-gradient(90deg, rgb(248, 173, 19), rgba(248, 229, 11, 1));
  font-size: .35rem;
  /* font-weight: 700; */
  text-align: center;
  box-shadow: 0.01rem 0.03rem 0.2rem rgb(248, 173, 19);
}
.random {
  display: flex;
  justify-content: center;
  font-size: 0.3rem;
}
.record {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
.record img {
  width: 40vw;
  height: 40vw;
}
.record .item {
  width: 55vw;
  height: 35vw;
  overflow: hidden;
  text-align: center;
  margin: .2rem;
}
.record .scroll {
  animation: gogogo 20s steps(200) infinite;
}
.record span {
  display: block;
  font-size: 0.25rem;
}

@keyframes gogogo {
  0% {
    margin-top: 0;
  }
  100% {
    margin-top: -7rem;
  }
}
</style>
