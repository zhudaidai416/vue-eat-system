<template>
  <!-- <div class="yemian"> -->
    <!-- <div class="tou"><span><strong>账户列表</strong></span></div> -->
    <div class="mian">
      <div class="xinxi">
        <div><span>交易号:</span><span>{{jiaoyihao}}</span></div>
        <div><span>交易状态:</span><span v-if="state == 0">充值中</span><span v-else-if="state == 1">充值成功</span><span v-else>充值失败</span></div>
        <div><span>用户类型:</span><span v-if="yonghuleixin == 0">商家</span><span v-else>骑手</span></div>
        <div><span>昵称名称:</span><span>{{name}}</span></div>
        <div><span>手机号码:</span><span>{{dianhua}}</span></div>
        <div><span>原账户余额:</span><span>{{yuanyue}}</span></div>
        <div><span>新账户余额:</span><span>{{xinyue}}</span></div>
      </div>
      <div class="xinxi">
        <div><span>充值金额:</span><span>{{chongzhijine}}</span></div>
        <div><span>支付方式:</span><span>{{zhifufangshi}}</span></div>
        <div><span>支付币种:</span><span>{{zhifubizhong}}</span></div>
        <div><span>支付账户UUID:</span><span>{{zhifuzhanghu}}</span></div>
        <div><span>汇率:</span><span>{{huilv}}</span></div>
        <div><span>应付款:</span><span>{{shifukuan}}</span></div>
        <div><span>创建时间:</span><span>{{chuangjianshijian}}</span></div>
        <div><span>付款时间:</span><span>{{fukuanshijian}}</span></div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
  export default {
    name:'zhanghujiluxiangxi',
    data() {
      return {
        jiaoyihao:'',
        state:'',
        yonghuleixin:'',
        name:'',
        dianhua:'',
        chongzhijine:'',
        dingdanleixing:'',
        dingdanjine:'₱900.00',
        youhuijine:'₱60.00',
        yingfukuan:'₱900.00',
        zhifufangshi:'微信',
        zhifubizhong:'CNY',
        zhifuzhanghu:'12134343413612345678',
        huilv:'1元=8.196298P',
        shifukuan:'￥109.98',
        chuangjianshijian:'2022-09-10 18:22:40',
        fukuanshijian:'2022-09-10 18:23:10',
        yuanyue:'₱23.00',
        xinyue:'₱1023.00'
      }
    },
    methods:{
      datashow(){
        this.$axios({
          method:'get',
          url:'/recharge/selectRechargeDetails',
          params:{
            id:this.jiaoyihao
          }
        })
        .then(res=>{
          console.log(res);
          this.state = res.data.accountType
          this.yonghuleixin = res.data.accountType
          this.name = res.data.nickname
          this.dianhua = res.data.phone
          this.chongzhijine = res.data.rechargeAmount
          this.dingdanleixing = res.data.paymentMethod
        })
        .catch(err=>{
          console.log(err);
        })
      },
    },
    mounted(){
      this.jiaoyihao = this.$route.query.id
      this.datashow()
    }
  }
</script>

<style scoped>
  .mian {
    width: 100%;
    height: 1000px;
    background-color: #ffffff;
    margin:  0 auto;
    border-radius: 10px;
    overflow: hidden;
    font-size: 13px;
  }
  .xinxi {
    margin:40px 20px;
  }
  .xinxi div {
    margin: 20px;
  }
  .xinxi span {
    margin: 0 20px;
  }
</style>

<style>

</style>