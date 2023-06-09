<template>
    <!-- <div class="containerB">
      <div class="containerA"> -->
        <div>
      <div class="containerS">
        <!-- 详情页的header -->
        <div class="detailsHeaderS" v-for="item in dispatchList" :key="item.id">
            <div>
                <i class="el-icon-s-home" :style="{padding:'10px',color:'#4678e0',fontSize:'57px',borderRadius:'50%',border:'2px solid #4678e0'}"></i>
            </div>
            <div>
                <div>
                    <span>站点ID：</span><span>{{item.id}}</span>
                </div>
                <div>
                    <span>站点名称：</span><span>{{item.distributionName}}</span>
                </div>
                <div>
                    <span>所在地：</span><span>{{item.address}}</span>
                </div>
            </div>
            <div>
                <div>
                    <span>站长姓名：</span><span>{{item.principalName}}</span>
                </div>
                <div>
                    <span>用户名：</span><span>{{item.username}}</span>
                </div>
                <div>
                    <span>手机号码：</span><span>{{item.principalPhone}}</span>
                </div>
            </div>
            <div>
                <div>
                    <span>配送员：</span><span>18人</span>
                </div>
                <div>
                    <span>状态：</span><span>{{item.state | stateText}}</span>
                </div>
            </div>
            <div>
                <div>
                    <button @click="lockingDispatch">锁定站点</button>
                </div>
            </div>
        </div>
        <!-- 切换 -->
        <div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="first">
                <DispatchBaseInformation></DispatchBaseInformation>
            </el-tab-pane>
            <el-tab-pane label="实名认证" name="second">
                <DispatchRealName></DispatchRealName>
            </el-tab-pane>
            <el-tab-pane label="配送模式" name="third">
                <DispatchMode></DispatchMode>
            </el-tab-pane>
            <el-tab-pane label="配送规则" name="forth">
                <DispatchRules></DispatchRules>
            </el-tab-pane>
            <el-tab-pane label="配送时长" name="fifth">
                <DispatchDuration></DispatchDuration>
            </el-tab-pane>
          </el-tabs>
        </div>
        </div>
        <!-- 锁定模态框 -->
      <LockingDispatch :visible="showLockingDispatch" title="确定锁定该账号？" @onConfirm="lockingDispatchConfirm" @onClose="lockingDispatchClose">
        <div>
          <p>站长帐号被锁定后将无法处理配送订单，请慎重操作！</p>
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
      </div>
    <!-- </div> -->
</template>

<script>
import "../../assets/css/base_s.css";
import LockingDispatch from "../../components/userMgnt/LockingDispatch"
import DispatchBaseInformation from "../../components/userMgnt/DispatchBaseInformation";
import DispatchRealName from "../../components/userMgnt/DispatchRealName";
import DispatchMode from "../../components/userMgnt/DispatchMode";
import DispatchRules from "../../components/userMgnt/DispatchRules";
import DispatchDuration from "../../components/userMgnt/DispatchDuration";
export default {
  name: "dispatchDetails",
  data() {
    return {
      dispatchList:[],
      activeName: "first",
      showLockingDispatch:false,//锁定模态框的默认值
    };
  },
  components:{
    LockingDispatch,
    DispatchBaseInformation,
    DispatchRealName,
    DispatchMode,
    DispatchRules,
    DispatchDuration,
  },
  created(){
    console.log(this.$route.params.id);
    this.getDispatchDetailList(this.$route.params.id)
  },
  filters:{
    stateText(val){
      // console.log(val);
      if(val==1){
        return '异常'
      }else{
        return '正常'
      }
    }
  },
  methods: {
    goBack(){//点击返回
      this.$router.go(-1)
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    lockingDispatch(){
      this.showLockingDispatch=true;//锁定visible的值
    },
    lockingDispatchConfirm(){
      console.log('调用者确认');
    },
    lockingDispatchClose(){
      console.log('调用者取消');
      this.showLockingDispatch=false;//改变visible的值
    },
    // 获取数据
    getDispatchDetailList(thisId){
      // console.log(this.dispatchForm)
      this.$axios({
        method: 'POST',
        url: 'http://1.14.106.61:7101/Distribution/findById',
        params: {
          id:thisId
        }
      })
        .then(res => {
          this.dispatchList = res.data
          console.log(this.dispatchList);
        })
        .catch(err => {
          console.log("请求失败", err)
        });
    }
  },
};
</script>