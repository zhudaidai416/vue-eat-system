<template>
  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo"
    style="width:300px;height=100%"
    background-color="#417ce2"
    text-color="#fff"
    active-text-color="#204ecf"
  >
    <div class="el-menu-vertical-demo-div">
      <div>
        <img
          src="https://tse4-mm.cn.bing.net/th/id/OIP-C.N8u5YgZnruaJAcgAdm-oMwAAAA?w=198&h=197&c=7&r=0&o=5&dpr=1.25&pid=1.7https://tse4-mm.cn.bing.net/th/id/OIP-C.N8u5YgZnruaJAcgAdm-oMwAAAA?w=198&h=197&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt=""
        />
      </div>
      <h4>小默外卖后台系统</h4>
      <p>V2.0.0.1</p>
    </div>

    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span slot="title">运营概况</span>
    </el-menu-item>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item index="/user">会员管理</el-menu-item>
      <el-menu-item index="/businessManagement">商家管理</el-menu-item>
      <el-menu-item index="/storeManagement">店铺管理</el-menu-item>
      <el-menu-item index="/printerManagement">打印机管理</el-menu-item>
      <el-menu-item index="/distributionManagement">配送站管理</el-menu-item>
      <el-menu-item index="/marKiManagement">配送员管理</el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-s-claim"></i>
        <span>商品管理</span>
      </template>
      <el-menu-item index="/goodsManagement">商品管理</el-menu-item>
      <el-menu-item index="/goodsClassification">商品分类</el-menu-item>
    </el-submenu>

    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-c-scale-to-original"></i>
        <span>交易管理</span>
      </template>
      <el-menu-item index="/orderManagement">订单管理</el-menu-item>
      <el-menu-item index="/refundManagement">退款管理</el-menu-item>
      <el-menu-item index="/bulkManagement">团购管理</el-menu-item>
      <el-menu-item index="/evaluationManagement">评价管理</el-menu-item>
    </el-submenu>

    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-present"></i>
        <span>活动管理</span>
      </template>
      <el-menu-item index="/applyActivity">商家报名活动</el-menu-item>
      <el-menu-item index="/builtActivity">商家自建活动</el-menu-item>
      <el-menu-item index="/bulkActivity">商家团购活动</el-menu-item>
      <el-menu-item index="/preferentialActivity">平台优惠活动</el-menu-item>
      <el-menu-item index="/promoteActivity">平台推广活动</el-menu-item>
    </el-submenu>

    <el-submenu index="6" id="myIndex">
      <template slot="title">
        <i class="el-icon-medal"></i>
        <span>财务管理</span>
      </template>
      <el-menu-item index="/accountList">账户管理</el-menu-item>
      <el-menu-item index="/paymentRecords">支付记录</el-menu-item>
      <el-menu-item index="/cashManagement">提现管理</el-menu-item>
      <el-menu-item index="/topUpManagement">充值管理</el-menu-item>
      <el-menu-item index="/orderFenRun">订单分润</el-menu-item>
      <el-menu-item index="/exchangeRateManagement">汇率管理</el-menu-item>
    </el-submenu>

    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-message-solid"></i>
        <span>平台维护</span>
      </template>
      <el-menu-item index="/PlatformInform">平台通知</el-menu-item>
      <el-menu-item index="/advertising">广告投放</el-menu-item>
      <el-menu-item index="/helpCenter">帮助中心</el-menu-item>
      <el-menu-item index="/ReportManagement">举报管理</el-menu-item>
      <el-menu-item index="/feedback">意见反馈</el-menu-item>
    </el-submenu>

    <el-submenu index="8">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>系统设置</span>
      </template>
      <el-menu-item index="/settings-region">地区开放配置</el-menu-item>
      <el-menu-item index="/settings-platform">
        配送相关设置
      </el-menu-item>
      <el-menu-item index="/settings-dropdown">Dropdown配置</el-menu-item>
      <el-menu-item index="/settings-sensitive">敏感词管理</el-menu-item>
      <el-menu-item index="/settings-account">子账号管理</el-menu-item>
      <el-menu-item index="/settings-personal">个人设置</el-menu-item>
      <el-menu-item index="/settings-log">操作日志</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      asideHeight: '',
    }
  },
  created() {
    this.asideHeight = window.innerHeight - 0 + 'px'
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu {
  height: 100vh;
}
.el-menu-vertical-demo-div {
  padding: 20px;
  height: 120px;
  color: rgb(244, 241, 241);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.el-menu-vertical-demo-div div {
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
}
.el-menu-vertical-demo-div div img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.el-submenu .el-menu-item {
  min-width: none;
  /* overflow: hidden; */
  /* overflow: -moz-hidden-unscrollable; */
}
/* .menu-wrapper{
  overflow: hidden;
}  */
.el-icon-setting,
.el-icon-s-home,
.el-icon-s-custom,
.el-icon-s-claim,
.el-icon-c-scale-to-original,
.el-icon-present,
.el-icon-medal,
.el-icon-message-solid {
  color: aliceblue;
}
</style>

<style scoped>
.el-icon-arrow-down:before {
  color: white;
}
.el-submenu .el-menu-item {
  background-color: white !important;
  width: 80%;
  color: gray !important;
}
.el-menu-item.is-active {
  color: #204ecf !important ;
  font-size: 16px;
}
</style>
<style>
.el-menu .el-menu--inline {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-icon-arrow-down:before {
  color: white;
}
</style>
