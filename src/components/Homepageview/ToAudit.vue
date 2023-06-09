<template>
  <div class="toaudit-box">
    <div class="toaudit-box-form">
      <div class="toaudit-box-form-span">
        <span>用户信息待审核</span>
        <span class="toaudit-box-form-spans">3,000</span>
      </div>
      <div class="toaudit-box-form-el" @click="yonghuxinxi">
        <el-progress
          :percentage="percentage[0]"
          :color="customColor[0]"
        ></el-progress>
      </div>
    </div>
    <div class="toaudit-box-form">
      <div class="toaudit-box-form-span" @click="kaidianshenqing">
        <span>开店申请待审核</span>
        <span class="toaudit-box-form-spans">500</span>
      </div>
      <div class="toaudit-box-form-el">
        <el-progress
          :percentage="percentage[1]"
          :color="customColor[1]"
        ></el-progress>
      </div>
    </div>
    <div class="toaudit-box-form" @click="dianpuxinxi">
      <div class="toaudit-box-form-span">
        <span>店铺信息待审核</span>
        <span class="toaudit-box-form-spans">1,500</span>
      </div>
      <div class="toaudit-box-form-el">
        <el-progress
          :percentage="percentage[2]"
          :color="customColor[2]"
        ></el-progress>
      </div>
    </div>
    <div class="toaudit-box-form" @click="qishouzhaomu">
      <div class="toaudit-box-form-span">
        <span>骑手招募待审核</span>
        <span class="toaudit-box-form-spans">1,300</span>
      </div>
      <div class="toaudit-box-form-el">
        <el-progress
          :percentage="percentage[3]"
          :color="customColor[3]"
        ></el-progress>
      </div>
    </div>
    <div class="toaudit-box-form" @click="shangping">
      <div class="toaudit-box-form-span">
        <span>商品待审核</span>
        <span class="toaudit-box-form-spans">1,000</span>
      </div>
      <div class="toaudit-box-form-el">
        <el-progress
          :percentage="percentage[4]"
          :color="customColor[4]"
        ></el-progress>
      </div>
    </div>
    <div class="toaudit-box-form" @click="pingjia">
      <div class="toaudit-box-form-span">
        <span>评价待审核</span>
        <span class="toaudit-box-form-spans">3,600</span>
      </div>
      <div class="toaudit-box-form-el">
        <el-progress
          :percentage="percentage[5]"
          :color="customColor[5]"
        ></el-progress>
      </div>
    </div>
    <div class="toaudit-box-form" @click="tuangou">
      <div class="toaudit-box-form-span">
        <span>团购活动待审核</span>
        <span class="toaudit-box-form-spans">1,200</span>
      </div>
      <div class="toaudit-box-form-el">
        <el-progress
          :percentage="percentage[6]"
          :color="customColor[6]"
        ></el-progress>
      </div>
    </div>
    <div class="toaudit-box-form" @click="jubao">
      <div class="toaudit-box-form-span">
        <span>商家举报待处理</span>
        <span class="toaudit-box-form-spans">1,526</span>
      </div>
      <div class="toaudit-box-form-el">
        <el-progress
          :percentage="percentage[7]"
          :color="customColor[7]"
        ></el-progress>
      </div>
    </div>
    <div class="toaudit-box-form" @click="yijian">
      <div class="toaudit-box-form-span">
        <span>意见反馈待处理</span>
        <span class="toaudit-box-form-spans">2,014</span>
      </div>
      <div class="toaudit-box-form-el">
        <el-progress
          :percentage="percentage[8]"
          :color="customColor[8]"
        ></el-progress>
      </div>
    </div>
    <div class="toaudit-box-form" @click="yichang">
      <div class="toaudit-box-form-span">
        <span>异常订单</span>
        <span class="toaudit-box-form-spans">1,100</span>
      </div>
      <div class="toaudit-box-form-el">
        <el-progress
          :percentage="percentage[9]"
          :color="customColor[9]"
        ></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: [89, 21, 46, 39, 26, 105, 31, 75, 63, 41],
      customColor: [
        "#f5a329",
        "#01ffff",
        "#00bfbf",
        "#70b603",
        "#80ffff",
        "#1cc88a",
        "#81d3f8",
        "#ff0000",
        "#c280ff",
        "#8080ff",
      ],
    };
  },
  methods: {
    yonghuxinxi() {
      this.$router.push("IssueNotic")
    },
    kaidianshenqing() {
      this.$router.push("storeMangement")
    },
    dianpuxinxi() {
      
    },
    qishouzhaomu() {
      
    },
    shangping() {
      this.$router.push("goodsManagement")
    },
    pingjia() {
      this.$router.push("evaluationManagement")
    },
    tuangou() {
      this.$router.push("bulkActivity")
    },
    jubao() {
      this.$router.push("ReportManagement")
    },
    yijian() {
      this.$router.push("feedback")
    },
    yichang() {
      this.$router.push("orderManagement")
    },
  },
};
</script>

<style scoped>
.toaudit-box {
  padding-bottom: 20px;
  margin-top: 20px;
  margin-right: 20px;
  background: white;
}

.toaudit-box-form-span{
  display: flex;
  justify-content: space-between;
}

.toaudit-box-form-spans{
  color: #999999;
  font-size: 14px;
}

.toaudit-box-form {
  padding: 20px 2% 0 5%;
}

>>> .el-progress-bar{
    padding: 0;
}

>>> .el-progress__text{
    display: none;
}
</style>
