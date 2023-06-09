<template>
  <!-- <div class="yemian"> -->
    <!-- <div class="tou"><span><strong>账户列表</strong></span></div> -->
    <div>
      <div class="mian">
      <div class="xinxi">
        <div><span>交易号:</span><span>{{jiaoyihao}}</span></div>
        <div><span>提现状态:</span><span><strong>{{state}}</strong></span></div>
        <div><span>用户类型:</span><span>{{yonghuleixin}}</span></div>
        <div><span>申请人:</span><span>{{name}}</span></div>
        <div><span>手机号码:</span><span>{{dianhua}}</span></div>
      </div>
      <div class="xinxi">
        <div><span>提现方式:</span><span>{{tixianfangshi}}</span></div>
        <div><span>开户银行:</span><span>{{kaihuyinhang}}</span></div>
        <div><span>银行卡号:</span><span>{{yinghangkahao}}</span></div>
        <div><span>预留手机:</span><span>{{yuliushouji}}</span></div>
      </div>
      <div class="xinxi">
        <div><span>提现金额:</span><span><strong>{{tixianjine}}</strong></span></div>
        <div><span>手续费:</span><span>{{shouxvfei}}</span></div>
        <div><span>打款金额:</span><span>{{dakuanjine}}</span></div>
        <div><span>申请时间:</span><span>{{shenqingshijian}}</span></div>
      </div>
      </div>
      <div class="di">
        <div class="zuo">
          <div class="yijian">
            处理意见
          </div>
          <div class="chuli">
            <div><span>当前处理人:</span><span>周财务</span></div>
            <div>
              <span>打款结果</span>
              <span>
                <template>
                  <el-radio v-model="jieguo" label="1">成功</el-radio>
                  <el-radio v-model="jieguo" label="2">失败</el-radio>
                </template>
              </span>
            </div>
            <div>
              <span>失败原因:</span>
              <span>
                <template>
                  <el-select v-model="yuanyin" placeholder="请选择原因">
                    <el-option
                      v-for="item in yuanyinlist"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </span>
            </div>
          </div>
        </div>
        <div class="you">
          <div class="buchong">补充说明:</div>
          <div class="youfrom">
            <div><el-input class="elinput" disabled placeholder="请输入内容"></el-input><span>0/200(选填)</span></div>
            <div><el-input class="elinput" disabled placeholder="请输入内容"></el-input><span>0/500(选填)</span></div>
            <div>
              <el-button class="elbutt" plain>取消</el-button>
              <el-button class="elbutt" type="primary">确定</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
  export default {
    name:'tixianing',
    data() {
      return {
        jiaoyihao:'',
        state:'提现中',
        yonghuleixin:'普通会员',
        name:'小默123',
        dianhua:'+8613612345678',
        tixianfangshi:'银行卡提现',
        kaihuyinhang:'招商银行',
        yinghangkahao:'129049102590712097',
        yuliushouji:'134512759172',
        tixianjine:'₱1000.00',
        shouxvfei:'₱50.00',
        dakuanjine:'₱950.00',
        shenqingshijian:'2022-09-10 18:22:40',
        jieguo:1,
        yuanyinlist: [{
          value: '选项1',
          label: '请在系统设置修改原因'
        }, {
          value: '选项2',
          label: '请在系统设置修改原因'
        }],
        yuanyin: ''
      }
    },
    methods:{
      
    },
    mounted () {
            this.jiaoyihao = this.$route.query.id
    }
  }
</script>

<style scoped>
  .mian {
    width: 100%;
    height: 600px;
    background-color: #ffffff;
    margin:  0 auto;
    border-radius: 10px;
    overflow: hidden;
    font-size: 13px;
  }
  .di {
    width: 100%;
    height: 150px;
    background-color: #ffffff;
    margin:  0 auto;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
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
  .zuo {
    width: 50%;
    height: 100%;
    display: flex;
  }
  .you {
    width: 50%;
    height: 100%;
    display: flex;
    color: #efefef;
    border-left: 1px solid aliceblue;
  }
  .buchong{
    margin: 20px 10px;
  }
  .you input{
    border: 1px solid #efefef;
  }
  .yijian {
    width: 40px;
    height: calc(100% - 10px);
    background-color: #eef1fc;
    border-radius: 10px;
    margin: 5px;
    writing-mode: vertical-rl;
    text-align: center;
    line-height: 40px;
    letter-spacing: 10px;
  }
  .chuli {
    margin: 10px;
  }
  .chuli >div {
    margin-bottom: 20px;
  }
  .chuli span {
    margin:0 20px;
  }
  .elinput {
    width: 350px;
    height: 30px;
  }
  .youfrom {
    margin: 10px 0;
  }
  .youfrom > div{
    margin: 10px 0;
  }
</style>

<style>
  .you .el-input__inner{
    width: 100%;
    height: 30px;
    line-height: 30px;
  }
  .you .elbutt{
    width: 70px;
    height: 30px;
    padding: 0;
    line-height: 0;
  }
</style>