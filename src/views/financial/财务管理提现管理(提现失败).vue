<template>
  <!-- <div class="yemian"> -->
    <!-- <div class="tou"><span><strong>账户列表</strong></span></div> -->
    <div class="mian">
     <div class="kuai">
      <span>
        <div>交易号：</div>
        <div>提现状态：</div>
        <div>用户类型：</div>
        <div>申请人：</div>
        <div>手机号码：</div>
      </span>
      <span>
        <div>{{admin.jiaoyihao}}</div>
        <div><strong>{{admin.tixianzhuangtai}}</strong></div>
        <div>{{admin.yonghuleixing}}</div>
        <div>{{admin.shengqingren}}</div>
        <div>{{admin.shoujihaoma}}</div>
      </span>
     </div>
     <div class="kuai">
      <span>
        <div>提现方式：</div>
        <div>开户银行：</div>
        <div>银行卡号：</div>
        <div>预留手机号：</div>
      </span>
      <span>
        <div>{{admin.tixianfangshi}}</div>
        <div>{{admin.kaihuyinghang}}</div>
        <div>{{admin.yinghangkahao}}</div>
        <div>{{admin.yuliushoujihao}}</div>
      </span>
     </div>
     <div class="kuai">
      <span>
        <div>提现金额：</div>
        <div>手续费：</div>
        <div>打款金额：</div>
        <div>申请时间：</div>
      </span>
      <span>
        <div><strong>{{admin.tixianjine}}</strong></div>
        <div>{{admin.shouxvfei}}</div>
        <div>{{admin.dakuanjine}}</div>
        <div>{{admin.chuangjianshijian}}</div>
      </span>
     </div>
     <div class="kuai">
      <span>
        <div>处理人：</div>
        <div>打款结果：</div>
        <div>申请时间：</div>
      </span>
      <span>
        <div>{{admin.chuliren}}</div>
        <div><strong>{{admin.dakuanjieguo}}</strong></div>
        <div>{{admin.shenqingshijian}}</div>
      </span>
     </div>
    </div>
  <!-- </div> -->
</template>

<script>
  export default {
    name:'tixianno',
    data() {
      return {
        admin:{
          jiaoyihao:'',
          tixianzhuangtai:'提现失败',
          yonghuleixing:'商家',
          shengqingren:'陈商家',
          shoujihaoma:'+8613612345678',
          tixianfangshi:'银行卡提现',
          kaihuyinghang:'招商银行',
          yinghangkahao:'1234 5678 1234 5678 900',
          yuliushoujihao:'+8613712345678',
          tixianjine:'₱1000.00',
          shouxvfei:'₱50.00',
          dakuanjine:'₱950.00',
          chuangjianshijian:'2022-09-10 18:22:40',
          chuliren:'周财务',
          dakuanjieguo:'打款成功',
          shenqingshijian:'2022-09-16 14:29:53'
        }
      }
    },
    methods:{
      
    },
    mounted () {
      this.admin.jiaoyihao = this.$route.query.id
    }
  }
</script>

<style scoped>
  .mian {
    width: 100%;
    height: 800px;
    background-color: #ffffff;
    margin:  0 auto;
    border-radius: 10px;
    overflow: hidden;
    font-size: 13px;
  }
  .kuai {
    margin: 20px;
    display: flex;
  }
  .kuai div {
    margin: 20px 0;
  }
  .kuai span {
    width: auto;
    min-width: 80px;
    margin-right: 40px;
  }
</style>

<style>

</style>