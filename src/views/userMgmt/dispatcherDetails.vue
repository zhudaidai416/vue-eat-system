<template>
    <!-- <div class="containerB">
      <div class="containerA"> -->
        <div>
      <div class="containerS">
        <!-- 详情页的header -->
        <div class="detailsHeaderS" v-for="item in dispatcherDetailList" :key="item.id">
            <div>
                <img src="../../assets/images/qishou.svg" alt="" :style="{width:'100px',height:'100px'}">
            </div>
            <div>
                <div>
                    <span>骑手ID：</span><span>{{item.id}}</span>
                </div>
                <div>
                    <span>真实姓名：</span><span>{{item.realName}}</span>
                </div>
                <div>
                    <span>手机号码：</span><span>{{item.tel}}</span>
                </div>
            </div>
            <div>
                <div>
                    <span>账户余额：</span><span>1213</span>
                </div>
                <div>
                    <span>完成订单：</span><span>近90天完成{{item.orderNum}}单</span>
                </div>
                <div>
                    <span>评分：</span><span>{{item.score}}分</span>
                </div>
            </div>
            <div>
                <div>
                    <span>登陆密码：</span><span>已设置</span>
                </div>
                <div>
                    <span>支付密码：</span><span>已设置</span>
                </div>
                <div>
                    <span>状态：</span><span>接单中</span>
                </div>
            </div>
            <div>
                <div>
                    <button @click="lockingRider">锁定骑手</button>
                </div>
                <div>
                    <button @click="lockingAccount">冻结账户</button>
                </div>
                <div>
                    <button @click="unlockSite">解绑站点</button>
                </div>
            </div>
        </div>
        <!-- 切换 -->
        <div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="first">
                <DispatcherBaseInformation></DispatcherBaseInformation>
            </el-tab-pane>
            <el-tab-pane label="实名认证" name="second">
                <DispatcherRealName></DispatcherRealName>
            </el-tab-pane>
            <el-tab-pane label="健康证明" name="third">
                <DispatcherHealth></DispatcherHealth>
            </el-tab-pane>
            <el-tab-pane label="账户信息" name="forth">
                <DispatcherAccount></DispatcherAccount>
            </el-tab-pane>
            <el-tab-pane label="银行卡信息" name="fifth">
                <DispatcherBankCard></DispatcherBankCard>
            </el-tab-pane>
          </el-tabs>
        </div>
        </div>
              <!-- 模态框 -->
      <!-- 锁定骑手模态框 -->
    <LockingDispatch :visible="showLockingRider" title="确定锁定该骑手？" @onConfirm="lockingRiderConfirm" @onClose="lockingRiderClose">
        <div>
          <p>配送员帐号被锁定后将无法接受配送订单，请慎重操作！</p>
          <div class="modalForm">
            <form action="" :style="{alignItems: 'center'}">
              <label for="">锁定原因：</label>
              <select name="" id="" >
                <option value="0">请选择原因</option>
                <option value="1">原因一</option>
                <option value="2">原因二</option>
                <option value="3">原因三</option>
              </select>
            </form>
            <form action="">
              <label for="">补充说明：</label>
              <div>
                <input :style="{width:'100%'}" type="text" name="" id="" placeholder="请输入中文补充说明">
                <input :style="{width:'100%'}" type="text" name="" id="" placeholder="请输入英文补充说明">
              </div>
            </form>
          </div>
        </div>
      </LockingDispatch>
      <!-- 冻结账户模态框 -->
    <LockingDispatch :visible="showLockingAccount" title="确定冻结该账户？" @onConfirm="lockingAccountConfirm" @onClose="lockingAccountClose">
        <div>
          <p>配送员账户被冻结后将无法提现、充值，请慎重操作！</p>
          <div class="modalForm">
            <form action="" :style="{alignItems: 'center'}">
              <label for="">冻结原因：</label>
              <select name="" id="" >
                <option value="0">请选择原因</option>
                <option value="1">原因一</option>
                <option value="2">原因二</option>
                <option value="3">原因三</option>
              </select>
            </form>
            <form action="">
              <label for="">补充说明：</label>
              <div>
                <input :style="{width:'100%'}" type="text" name="" id="" placeholder="请输入中文补充说明">
                <input :style="{width:'100%'}" type="text" name="" id="" placeholder="请输入英文补充说明">
              </div>
            </form>
          </div>
        </div>
    </LockingDispatch>
      <!-- 解绑站点模态框 -->
    <LockingDispatch :visible="showUnlockSite" title="确定解绑站点关系？" @onConfirm="unlockSiteConfirm" @onClose="unlockSiteClose">
        <div>
          <p>配送员与站点解绑关系后将变更离职状态，请慎重操作！</p>
          <div class="modalForm">
            <form action="" :style="{alignItems: 'center'}">
              <label for="">骑手姓名：</label>
              <input type="text" name="" id=""><br />
              <label for="">当前站点：</label>
              <input type="text" name="" id="">
            </form>
          </div>
        </div>
    </LockingDispatch>
      </div>

</template>

<script>
import LockingDispatch from "../../components/userMgnt/LockingDispatch.vue";
import "../../assets/css/base_s.css"
import DispatcherBaseInformation from "../../components/userMgnt/DispatcherBaseInformation";
import DispatcherRealName from "../../components/userMgnt/DispatcherRealName";
import DispatcherHealth from "../../components/userMgnt/DispatcherHealth";
import DispatcherAccount from "../../components/userMgnt/DispatcherAccount";
import DispatcherBankCard from "../../components/userMgnt/DispatcherBankCard";
export default {
  name: "dispatcherDetails",
  data() {
    return {
      
      activeName: "first",
      showLockingRider:false,//锁定骑手模态框的默认值
      showLockingAccount:false,//锁定账户模态框的默认值
      showUnlockSite:false,//解锁站点模态框的默认值
      dispatcherDetailList:[],
    };
  },
  components:{
    LockingDispatch,
    DispatcherBaseInformation,
    DispatcherRealName,
    DispatcherHealth,
    DispatcherAccount,
    DispatcherBankCard,
  },
  created(){
    this.getDispatcherDetailList()
  },
  methods: {
    // 获取数据
    getDispatcherDetailList(){
      this.$axios({
        method: 'GET',
        url: 'http://127.0.0.1:4523/m1/1680117-0-default/DispatcherHosted/Details',
        params: {
          id:1000
        }
      })
        .then(res => {
          console.log(res.data);
          this.dispatcherDetailList = res.data
          console.log(this.dispatcherDetailList);
        })
        .catch(err => {
          console.log("请求失败", err)
        });
    },
    goBack(){//点击返回
      this.$router.go(-1)
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 锁定骑手
    lockingRider(){
      this.showLockingRider=true;//锁定visible的值
    },
    lockingRiderConfirm(){
      console.log('调用者确认');
    },
    lockingRiderClose(){
      console.log('调用者取消');
      this.showLockingRider=false;//改变visible的值
    },
    // 锁定账户
    lockingAccount(){
      this.showLockingRider=true;//锁定visible的值
    },
    lockingAccountConfirm(){
      console.log('调用者确认');
    },
    lockingAccountClose(){
      console.log('调用者取消');
      this.showLockingAccount=false;//改变visible的值
    },
    // 解锁站点
    unlockSite(){
      this.showUnlockSite=true;//解锁visible的值
    },
    unlockSiteConfirm(){
      console.log('调用者确认');
    },
    unlockSiteClose(){
      console.log('调用者取消');
      this.showUnlockSite=false;//改变visible的值
    },
  },
};
</script>