<template>
  <!-- <div class="yemian"> -->
    <!-- <div class="tou"><span><strong>账户列表</strong></span></div> -->
    <div class="mian">
      <div class="xinxi">
        <div><span>交易号:</span><span>{{jiaoyihao}}</span></div>
        <div><span>交易状态:</span><span v-show="state == 0">支付中</span><span v-show="state == 1">支付成功</span><span v-show="state == 2">支付失败</span></div>
        <div><span>用户类型:</span><span v-show="yonghuleixin == 0">普通会员</span><span v-show="yonghuleixin == 1">VIP会员</span><span v-show="yonghuleixin == 2">商家</span><span v-show="yonghuleixin == 3">配送站</span><span v-show="yonghuleixin == 4">配送员</span></div>
        <div><span>昵称名称:</span><span>{{name}}</span></div>
        <div><span>手机号码:</span><span>{{dianhua}}</span></div>
      </div>
      <div class="xinxi">
        <div><span>订单号:</span><span>{{dingdanhao}}</span></div>
        <div><span>订单类型:</span><span>{{dingdanleixing}}</span></div>
        <div><span>订单金额:</span><span>{{dingdanjine}}</span></div>
        <div><span>优惠金额:</span><span>{{youhuijine}}</span></div>
        <div><span>应付款:</span><span>{{yingfukuan}}</span></div>
      </div>
      <div class="xinxi">
        <div><span>支付方式:</span><span>{{zhifufangshi}}</span></div>
        <div><span>支付币种:</span><span>{{zhifubizhong}}</span></div>
        <div><span>支付账户UUID:</span><span>{{zhifuzhanghu}}</span></div>
        <div><span>汇率:</span><span>{{huilv}}</span></div>
        <div><span>实付款:</span><span>{{shifukuan}}</span></div>
        <div><span>创建时间:</span><span>{{chuangjianshijian}}</span></div>
        <div><span>付款时间:</span><span v-if="state != 0">{{fukuanshijian}}</span></div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
  import { zhifuxiangxiData } from "../../store/zsl_store/data";
  export default {
    name:'zhanghujiluxiangxi',
    data() {
      return {
        jiaoyihao:'',
        state:'',
        yonghuleixin:'',
        name:'',
        dianhua:'',
        dingdanhao:'',
        dingdanleixing:'',
        dingdanjine:'',
        youhuijine:'',
        yingfukuan:'',
        zhifufangshi:'',
        zhifubizhong:'',
        zhifuzhanghu:'',
        huilv:'',
        shifukuan:'',
        chuangjianshijian:'',
        fukuanshijian:''
      }
    },
    methods:{
      async getData(){
       await zhifuxiangxiData()
            .then(res=>{
              console.log(res);
                for (let index = 0; index < res.length; index++) {
                  if(this.jiaoyihao == res[index].jiaoyihao){
                    this.state = res[index].state
                    this.yonghuleixin = res[index].leixing
                    this.name = res[index].name
                    this.dianhua = res[index].shouji
                    this.dingdanhao = res[index].dingdanhao
                    this.dingdanleixing = res[index].dingdanleixing
                    this.dingdanjine = res[index].dingdanjine
                    this.youhuijine = res[index].youhuijine
                    this.yingfukuan = res[index].yinfukuan
                    this.zhifufangshi = res[index].zhifufangshi
                    this.zhifubizhong = res[index].bizhong
                    this.zhifuzhanghu = res[index].zhifuUUID
                    this.huilv = res[index].huilv
                    this.shifukuan = res[index].shifukuan
                    this.chuangjianshijian = res[index].createtime
                    this.fukuanshijian = res[index].outtime
                  }
                }
            })
            .catch(err=>{
                console.log(err);
            }) 

      }
    },
    created () {
            this.jiaoyihao = this.$route.query.id
            this.getData()
    },
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