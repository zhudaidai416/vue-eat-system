<template>
<div>
    <!-- 筛选框集合 -->
        <div>
          <form class="filterBox" :model="dispatcherHostedForm">
            <label class="filterAa" for="" >
              骑手ID
              <input type="text" placeholder="请输入ID" v-model="dispatcherHostedForm.id">
            </label>
            <label class="filterAa" for="" >真实姓名
              <input type="text" placeholder="请输入姓名" v-model="dispatcherHostedForm.realName">
            </label>
            <label class="filterAa" for="" >手机号码
              <input type="text" placeholder="请输入手机号码" v-model="dispatcherHostedForm.tel">
            </label>
            <label class="filterAa" for="" >工作类型
            <select name="" id="" v-model="dispatcherHostedForm.workType"> 
                <option value="0">全部类型</option>
                <option value="1">全职专送</option>
                <option value="2">兼职众包</option>
            </select></label>
            <label class="filterAa" for="" >所属站点
            <input type="text" placeholder="请输入站点名称" v-model="dispatcherHostedForm.station"></label>
          <el-form class="filterAa">
            <locationSelect></locationSelect>
          </el-form>
          <ScoreSelect></ScoreSelect>
            <label class="filterAa" for="">注册时间
              <select name="" id="">
                  <option value="0">近三个月</option>
                  <option value="1">今年内</option>
                  <option value="2">2021年</option>
                  <option value="3">2020年</option>
                  <option value="4">2020年之前</option>
              </select>
            </label>
            <label class="filterAa" for="">骑手状态
              <select name="" id="" v-model="dispatcherHostedForm.state">
                  <option value="0">全部状态</option>
                  <option value="1">待审核</option>
                  <option value="2">审核中</option>
                  <option value="3">审核通过</option>
                  <option value="4">审核失败</option>
              </select>
            </label>
          </form>
        </div>

        <!-- 按钮 -->
        <div class="btnBox">
            <button class="resetS" @click="resetRequest">重置</button>
            <button class="searchS">搜索</button>
        </div>
        <!-- 表格 -->
        <table id="printTable">
            <tr class="tableHead">
                <th>ID</th>
                <th>真实姓名</th>
                <th>手机号码</th>
                <th>工作类型</th>
                <th>工作城市</th>
                <th>所属站点</th>
                <th>90日完成单</th>
                <th>评分</th>
                <th>实名认证</th>
                <th>注册时间</th>
                <th>状态</th>
            </tr>
            <tr class="tableBody" v-for="item in dispatcherHostedList" :key="item.id">
              <!-- 点击id跳转配送员详情 -->
                <td @click="goUrlDispatcherHostedDetails(item)"  :style="{color:'#4E73DF',cursor:'pointer'}">{{item.id}}</td>
                <td>{{item.realName}}</td>
                <td>{{item.tel}}</td>
                <td>{{item.workType | workTypeText}}</td>
                <td>{{item.workCity}}</td>
                <td>{{item.station}}</td>
                <td @click="goUrl('/orderManagement')" :style="{color:'#4E73DF',cursor:'pointer'}">{{item.orderNum}}</td>
                <td @click="goUrl('/dispatcherScore')" :style="{color:'#4E73DF',cursor:'pointer'}">{{item.score}}</td>
                <td>{{item.certification | certificationText}}</td>
                <td>{{item.state}}</td>
                <td class="moreS">
                  <el-popover placement="right" width="400" trigger="click">
                    <div class="moreTips" :v-model="visible">
                      <i class="el-icon-remove-outline"></i>
                      <span @click="lockingRider">&nbsp;&nbsp;锁定骑手</span><br />
                      <i class="el-icon-check"></i>
                      <span @click="unlockRider">&nbsp;&nbsp;解锁骑手</span><br />
                      <i class="el-icon-lock"></i>
                      <span @click="lockingAccount">&nbsp;&nbsp;冻结账户</span><br />
                      <i class="el-icon-unlock"></i>
                      <span @click="unlockAccount">&nbsp;&nbsp;解冻账户</span><br />
                      <i class="el-icon-magic-stick"></i>
                      <span @click="unlockSite">&nbsp;&nbsp;解绑站点</span><br />
                      <i class="el-icon-link"></i>
                      <span @click="lockingSite">&nbsp;&nbsp;绑定站点</span><br />
                    </div>
                    <div slot="reference"><i class="el-icon-more"></i></div>
                  </el-popover>
                </td>
            </tr>
        </table>
        <!-- 分页 -->
        <div class="pageBox">
          <div class="block pageDiv">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-sizes="pageNum"
              :page-size="this.a"
              layout="prev, pager, next,sizes"
              :total=this.count
            >
            </el-pagination>
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
    <!-- 解锁骑手模态框 -->
    <LockingDispatch :visible="showUnlockRider" title="确定解锁该配送员？" @onConfirm="unlockRiderConfirm" @onClose="unlockRiderClose">
        <div>
          <p>站长帐号被解锁后将恢复可处理配送订单，请慎重操作！</p>
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
    <!-- 解冻账户模态框 -->
    <LockingDispatch :visible="showUnlockAccount" title="确定解冻该账户？" @onConfirm="unlockAccountConfirm" @onClose="unlockAccountClose">
        <div>
          <p>配送员账户被解冻后将恢复提现、充值，请慎重操作！</p>
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
    <!-- 绑定站点模态框 -->
    <LockingDispatch :visible="showLockingSite" title="确定绑定站点关系？" @onConfirm="lockingSiteConfirm" @onClose="lockingSiteClose">
        <div>
          <p>配送员绑定站点后将入职并接受配送订单，请慎重操作！</p>
          <form action="" :style="{alignItems: 'center'}">
              <label for="">骑手姓名：</label>
              <input type="text" name="" id=""><br />
              <label for="">工作城市：</label>
              <input type="text" name="" id=""><br />
              <label for="">所属站点：</label>
              <select name="" id="">
                <option value="0">请选择站点</option>
                <option value="1">站点1</option>
                <option value="2">站点2</option>
              </select>
            </form>
        </div>
    </LockingDispatch>
</div>
        
</template>

<script>
import LockingDispatch from "../../components/userMgnt/LockingDispatch.vue";
import locationSelect from "../../components/userMgnt/locationSelect"
import ScoreSelect from "../../components/userMgnt/ScoreSelect"
import "../../assets/css/base_s.css"

export default {
  name: "DispatcherHosted",
  components:{
    LockingDispatch,
    locationSelect,
    ScoreSelect
  },
  data() {
    return {
      input1: "",
      count:'',
      dispatchers:[],
      dispatcherHostedList:[],
      dispatcherHostedForm:{
        id:'',
        realName:'',
        tel:'',
        workType:'',
        station:'',
        state:'',
      },
      // 分页
      currentPage: 5,
      visible: false,
      pageNum:[
        10,15,20
      ],
      a:20,
      b:1,
      showLockingRider:false,//锁定骑手模态框的默认值
      showUnlockRider:false,//解锁骑手模态框的默认值
      showLockingAccount:false,//锁定账户模态框的默认值
      showUnlockAccount:false,//解锁账户模态框的默认值
      showLockingSite:false,//锁定站点模态框的默认值
      showUnlockSite:false,//解锁站点模态框的默认值
    };
  },
  filters:{
    workTypeText(val){
      // console.log(val);
      if(val==1){
        return '全职专送'
      }else{
        return '兼职众包'
      }
    },
    certificationText(val){
      // console.log(val);
      if(val==1){
        return '已认证'
      }else{
        return '未认证'
      }
    },
  },
  created(){
    this.showDispatcherHostedList()
  },
  methods: {
    // 初始表格
    showDispatcherHostedList(){
      this.$axios({
        method:'GET',
        url:'http://127.0.0.1:4523/m1/1680117-0-default/DispatcherHosted/FindALL',
        params:{
          currentPage:1,
          pageSize:2
        }
      })
      .then(res=>{
        console.log('成功',res.data);
        this.dispatcherHostedList=res.data; 
        this.count=res.count; 
        // 深拷贝
        // this.dispatcherHostedList= JSON.parse(JSON.stringify(this.dispatcherHostedLists))
        console.log(this.dispatcherHostedList);
        console.log(this.count);
      })
      .catch(err=>{
        console.log(err);
      })
    },
    goUrl(url){
      this.$router.push(url)
    },
    // 分页
    handleSizeChange(val1) {
      console.log(`每页 ${val1} 条`);
      this.a=val1;
      this.$axios({
        method:'GET',
        url:'http://127.0.0.1:4523/m1/1680117-0-default/DispatcherRecruitHosted/FindALL',
        params:{
          currentPage:this.b,
          pageSize:this.a,
        }
      })
      .then(res=>{
        console.log('成功',res.data);
        // this.dispatcherHostedList=res.data;
        this.dispatcherHostedList=res.data; 
        console.log(this.dispatcherHostedList);
        this.count=res.count; 
        // 深拷贝
        // this.dispatcherHostedList= JSON.parse(JSON.stringify(this.dispatcherHostedLists))
        console.log(this.dispatcherHostedList);
        console.log(this.count);
      })
      .catch(err=>{
        console.log(err);
      })
    },
    handleCurrentChange(val2) {
      console.log(`当前页: ${val2}`);
      this.b=val2;
      this.$axios({
        method:'GET',
        url:'http://127.0.0.1:4523/m1/1680117-0-default/DispatcherRecruitHosted/FindALL',
        params:{
          currentPage:this.b,
          pageSize:this.a,
        }
      })
      .then(res=>{
        console.log('成功',res.data);
        this.dispatcherHostedList=res.data; 
        this.count=res.count; 
        // 深拷贝
        // this.dispatcherHostedList= JSON.parse(JSON.stringify(this.dispatcherHostedLists))
        console.log(this.dispatcherHostedList);
        console.log(this.count);
      })
      .catch(err=>{
        console.log(err);
      })
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
    // 解锁骑手
    unlockRider(){
      this.showUnlockRider=true;//解锁visible的值
    },
    unlockRiderConfirm(){
      console.log('调用者确认');
    },
    unlockRiderClose(){
      console.log('调用者取消');
      this.showUnlockRider=false;//改变visible的值
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
    // 解锁账户
    unlockAccount(){
      this.showUnlockAccount=true;//解锁visible的值
    },
    unlockAccountConfirm(){
      console.log('调用者确认');
    },
    unlockAccountClose(){
      console.log('调用者取消');
      this.showUnlockAccount=false;//改变visible的值
    },
    // 锁定站点
    lockingSite(){
      this.showLockingSite=true;//锁定visible的值
    },
    lockingSiteConfirm(){
      console.log('调用者确认');
    },
    lockingSiteClose(){
      console.log('调用者取消');
      this.showLockingSite=false;//改变visible的值
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
    // 重置
    resetRequest(){
      console.log(this.dispatcherHostedForm.id);
      this.dispatcherHostedForm.id=''
      this.dispatcherHostedForm.realName=''
      this.dispatcherHostedForm.tel=''
      this.dispatcherHostedForm.workType=''
      this.dispatcherHostedForm.station=''
      this.dispatcherHostedForm.state=''
      // this.dispatcherHostedForm.score=''
      this.showDispatcherHostedList()
    },
    // 搜索
    searchAll(){
      this.$axios({
        method:'GET',
        url:'http://127.0.0.1:4523/m1/1680117-0-default/DispatcherRecruitHosted/FindOption',
        params:{
          id:this.dispatcherHostedForm.id,
          realName:this.dispatcherHostedForm.realName,
        }
      })
      .then(res=>{
        console.log('成功',res.data);
        this.dispatcherHostedList=res.data; 
        this.count=res.count; 
        console.log(this.dispatcherHostedList);
        console.log(this.count);
      })
      .catch(err=>{
        console.log(err);
      })
    },
    // 点击id跳转
    goUrlDispatcherHostedDetails(obj){
      console.log(obj);
      // let object=JSON.stringify(obj)
      // console.log(object);
      this.$router.push({path:'marKiManagement/dispatcherDetails/'+obj})
    }
  },
};
</script>

<style scoped>
#printTable{
    border-spacing:0;
    width: 100%;
    font-size: 13px;
}
.tableHead{
    background-color: #edf1fc;
}
#printTable th{
    height: 45px;
}
.tableBody:hover{
    background-color: #f4f6fc;
}
.tableBody td{
    height: 50px;
    text-align: center;
}
hr{
    margin-bottom: 20px;
    border: 1px dashed #e4e4e4;

}
.addDispatch{
    border:1px solid #4878df;
    color: #4878df;
    background-color: #fff;
    border-radius: 20px;
    width: 120px;
    height: 36px;
    padding: 0;
    line-height: 36px;
    margin-bottom: 20px;
}
.addDispatch:hover{
    background-color: #f4f6fc;
    cursor: pointer;
}
</style>