<template>
    <div>
      <div class="containerS">
        <!-- 筛选框集合 -->
        <div>
          <form class="filterBox" :model="dispatchForm">
            <label class="filterAa" for="" >站点ID
              <input type="text" placeholder="请输入站点ID" ref="dispatchId" v-model="dispatchForm.id">
            </label>
            <label class="filterAa" for="" >站点名称
              <input type="text" placeholder="请输入站点名称"  v-model="dispatchForm.distributionName">
            </label>
            <label class="filterAa" for="" >用户名
              <input type="text" placeholder="请输入用户名"  v-model="dispatchForm.username">
            </label>
            <label class="filterAa" for="" >站长姓名
              <input type="text" placeholder="请输入站长姓名"  v-model="dispatchForm.principalName">
            </label>
            <label class="filterAa" for="" >手机号码
              <input type="text" placeholder="请输入手机号码" v-model="dispatchForm.principalPhone">
            </label>
            <el-form class="filterAa">
              <locationSelect v-model="dispatchForm.address"></locationSelect>
            </el-form>
            <label class="filterAa" for="" >建站时间
              <select name="" id="" v-model="dispatchForm.distributionTime">
                  <option value="0">近三个月</option>
                  <option value="1">今年内</option>
                  <option value="2">2021年</option>
                  <option value="3">2020年</option>
                  <option value="4">2020年之前</option>
              </select>
            </label>
            <label class="filterAa" for="">站点状态
              <select name="" id="" v-model="dispatchForm.state">
                  <option value="0">全部状态</option>
                  <option value="1">正常</option>
                  <option value="2">已禁用</option>
                  <option value="3">已注销</option>
              </select>
            </label>
        </form>
        </div>

        <!-- 按钮 -->
        <div class="btnBox">
            <button class="resetS" @click="resetRequest">重置</button>
            <button class="searchS" @click="searchRequest">搜索</button>
        </div>

        <hr />
        <!-- 添加配送站按钮 -->
        <!-- <button class="addDispatch"><router-link to="/addDispatch">+添加配送站</router-link></button> -->
        <button class="addDispatch" @click="goUrl('/addDispatch')">+添加配送站</button>

        <!-- 表格 -->
        <table id="printTable">
            <tr class="tableHead">
                <th>ID</th>
                <th>站点名称</th>
                <th>站长用户名 / 姓名</th>
                <th>手机号码</th>
                <th>所在地</th>
                <th>配送员</th>
                <th>建站时间</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
            <tr class="tableBody" v-for="item in dispatchList" :key="item.id">
                <td @click="goUrlDispatchDetails(item.id)" :style="{color:'#4e73e5',cursor:'pointer'}">{{item.id}}</td>
                <td>{{item.distributionName}}</td>
                <td>{{item.principalName}}</td>
                <td>{{item.principalPhone}}</td>
                <td>{{item.address}}</td>
                <td>{{item.username}}</td>
                <td>{{item.distributionTime}}</td>
                <td>{{item.state | stateText}}</td>
                <td class="moreS">
                  <el-popover placement="right" width="400" trigger="click">
                    <div class="moreTips" :v-model="visible">
                      <i class="el-icon-edit"></i>
                      <span @click="goUrlEditDispatch(item.id)">&nbsp;&nbsp;编辑配送站</span><br />
                      <i class="el-icon-remove-outline"></i>
                      <span @click="lockingDispatch">&nbsp;&nbsp;锁定配送站</span><br />
                      <i class="el-icon-circle-check"></i>
                      <span @click="unlockDispatch">&nbsp;&nbsp;解锁配送站</span><br />
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
              :page-size="this.pageSize"
              layout="prev, pager, next,sizes"
              :total="count"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <!-- 模态框 -->
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
      <!-- 解锁模态框 -->
      <LockingDispatch :visible="showUnlockDispatch" title="确定解锁该账号？" @onConfirm="unlockDispatchConfirm" @onClose="unlockDispatchClose">
        <div>
          <p>站长帐号被解锁后将恢复可处理配送订单，请慎重操作！</p>
        </div>
      </LockingDispatch>
      
    </div>
</template>

<script>
import "../../assets/css/base_s.css";
// import "../../assets/css/base_ss.css";
import locationSelect from '../../components/userMgnt/locationSelect.vue'
import LockingDispatch from "../../components/userMgnt/LockingDispatch";
export default {
  name: "dispatchMgmt",
  data() {
    return {
      input1: "",
      dispatchList:[],
      // 分页
      currentPage: 1,
      count:this.count,
      visible: false,
      pageNum:[
        3,6,9
      ],
      pageSize:this.pageSize,
      showLockingDispatch:false,//锁定模态框的默认值
      showUnlockDispatch:false,//解锁模态框的默认值
      // 搜索数据
      dispatchForm:{
        id:'',
        distributionName:'',
        username:'',
        principalName:'',
        principalPhone:'',
        distributionTime:'',
        state:''
      }
    };
  },
  components:{
    LockingDispatch,
    locationSelect
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
  created(){
    this.showDispatchList()
  },
  methods: {
    goUrl(url){
      this.$router.push(url)
    },
    lockingDispatch(){
      this.showLockingDispatch=true;//锁定visible的值
    },
    unlockDispatch(){
      this.showUnlockDispatch=true;//解锁visible的值
    },
    lockingDispatchConfirm(){
      console.log('调用者确认');
    },
    lockingDispatchClose(){
      console.log('调用者取消');
      this.showLockingDispatch=false;//改变visible的值
    },
    unlockDispatchConfirm(){
      console.log('调用者确认');
    },
    unlockDispatchClose(){
      console.log('调用者取消');
      this.showUnlockDispatch=false;//改变visible的值
    },
    // 起始表格
    showDispatchList(){
      this.$axios({
        method:'POST',
        url:'http://1.14.106.61:7101/Distribution/findAll',
        params:{
          currentPage:1,
          pageSize:3
        }
      })
      .then(res=>{
        console.log('成功',res)
        this.dispatchList=res.data.distribution;
        this.count=res.data.count;
        console.log(this.dispatchList);
        console.log(this.count);
        console.log(this.dispatchList.length);
      })
      .catch(err=>{
        console.log(err);
      })
    },
    // 分页
    // 每页多少条
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      // this.pageSize=val
      this.$axios({
        method:'POST',
        url:'http://1.14.106.61:7101/Distribution/findAll',
        params:{
          currentPage:1,
          pageSize:val
        }
      })
      .then(res=>{
        console.log('成功',res);
        this.dispatchList=res.data.distribution;
        this.count=res.data.count;
        console.log(this.dispatchList);
        console.log(this.count);
        console.log(this.pageNum);
      })
      .catch(err=>{
        console.log(err);
      })
    },
    // 点击页码
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$axios({
        method:'POST',
        url:'http://1.14.106.61:7101/Distribution/findAll',
        params:{
          currentPage:val,
          pageSize:3
        }
      })
      .then(res=>{
        console.log('成功',res);
        this.dispatchList=res.data.distribution;
        this.count=res.data.count;
        console.log(this.dispatchList);
        console.log(this.dispatchList.length);
        console.log(this.pageNum);
      })
      .catch(err=>{
        console.log(err);
      })
    },
    // 重置
    resetRequest(){
      console.log(this.dispatchForm.id);
      this.dispatchForm.id=''
      this.dispatchForm.username=''
      this.dispatchForm.principalName=''
      this.dispatchForm.principalPhone=''
      this.dispatchForm.distributionTime=''
      // this.dispatchForm.address=''
      this.dispatchForm.state=''
      this.showDispatchList()
    },
    // 搜索
    searchRequest() {
      // console.log(this.dispatchForm)
      this.$axios({
        method: 'POST',
        url: 'http://1.14.106.61:7101/Distribution/findById', 
        params: {
          id:this.dispatchForm.id
        }
      })
        .then(res => {
          console.log(this.dispatchForm.id);
          this.dispatchList=res.data;
          console.log(this.dispatchList);
        })
        .catch(err => {
          console.log("请求失败", err)
        });
    },
    // 跳转配送站详情
    goUrlDispatchDetails(param){
      console.log(param);
      this.$router.push({path:'distributionManagement/dispatchDetails/'+param})
    },
    // 跳转编辑配送站
    goUrlEditDispatch(param){
      console.log(param);
      this.$router.push({path:'distributionManagement/editDispatch/'+param})
    },
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
#locationA,#locationB,#locationC{
  width: 34%;
}
.el-form-item{
    display: flex;
    margin-bottom: 0;
}
.el-form-item__label{
    height: 100%;
    line-height: 40px;
    border-radius: 5px;
    width: 25%;
    font-size: 13px;
    padding-right: 0;
    padding-left: 8px;
    color:#797979;
}
.el-input__inner{
    border: none;
    height:90%;
    background-color: #f7f7f9;
    border-radius: 5px;
    width: 70%;
    padding-left: 8px;
}
</style>