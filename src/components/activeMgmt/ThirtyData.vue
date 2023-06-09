<template>
  <div class="thirty-data">
    <div class="card-box">
      <div class="card">
        <span>活动订单数量</span>
        <h1>305</h1>
        <span>昨日 -</span>
      </div>
      <div class="card">
        <span>活动订单量占比</span>
        <h1>15.57%</h1>
        <span>昨日 -</span>
      </div>
      <div class="card">
        <span>活动订单净收入</span>
        <h1>52,920.68</h1>
        <span>昨日 -</span>
      </div>
      <div class="card">
        <span>活动订单收入占比</span>
        <h1>9.8%</h1>
        <span>昨日 -</span>
      </div>
      <div class="card">
        <span>活动订单优惠总额</span>
        <h1>15000</h1>
        <span>昨日 -</span>
      </div>
      <div class="card">
        <span>活动订单客单价</span>
        <h1>200.62</h1>
        <span>昨日 -</span>
      </div>
    </div>
    <div class="tip-box">
      <span
        >活动净收入=顾客参与此活动的预计收入之和，活动订单客单价=活动订单营业额/活动订单笔数</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirtyData",
};
</script>

<style scoped>
.card-box {
  display: flex;
  justify-content: space-between;
}
.card {
  border: 1px solid rgb(228, 228, 228);
  width: 15%;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
}
.card :nth-child(1) {
  color: #797979;
  font-size: 13px;
  margin-bottom: 5px;
}
.card :nth-child(2) {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 5px;
}
.card :nth-child(3) {
  color: #797979;
  font-size: 12px;
}
.tip-box {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  color: #999999;
  font-size: 12px;
}
</style>
