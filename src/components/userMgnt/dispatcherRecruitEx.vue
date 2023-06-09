<template>
<div>
    <!-- 筛选框集合 -->
        <div>
          <form class="filterBox" :model="dispatcherRecruitExForm">
            <label class="filterAa" for="" >骑手ID
              <input type="text" placeholder="请输入ID" v-model="dispatcherRecruitExForm.id">
            </label>
            <label class="filterAa" for="" >真实姓名
              <input type="text" placeholder="请输入姓名" v-model="dispatcherRecruitExForm.deliverymanName">
            </label>
            <label class="filterAa" for="" >手机号码
              <input type="text" placeholder="请输入手机号码" v-model="dispatcherRecruitExForm.deliverymanPhone">
            </label>
            <label class="filterAa" for="" >审核类型
              <select name="" id="" v-model="dispatcherRecruitExForm.auditType">
                  <option value="0">全部类型</option>
                  <option value="1">注册报名</option>
                  <option value="2">上传健康证</option>
              </select>
            </label>
            <label class="filterAa" for="">工作类型
              <select name="" id="" v-model="dispatcherRecruitExForm.workType">
                  <option value="">全部类型</option>
                  <option value="1">全职专送</option>
                  <option value="2">兼职众包</option>
              </select>
            </label>
            <el-form class="filterAa">
              <locationSelect></locationSelect>
            </el-form>
            <label class="filterAa" for="" >来源
              <select name="" id="" v-model="dispatcherRecruitExForm.source">
                  <option value="0">全部来源</option>
                  <option value="1">外卖APP</option>
                  <option value="2">骑手APP</option>
                  <option value="3">众包APP</option>
              </select>
            </label>
            <label class="filterAa" for="" >提交时间
              <select name="" id="" v-model="dispatcherRecruitExForm.submissionTime">
                  <option value="0">近三个月</option>
                  <option value="1">今年内</option>
                  <option value="2">2021年</option>
                  <option value="3">2020年</option>
                  <option value="4">2020年之前</option>
              </select>
            </label>
            <label class="filterAa" for="" >审核时间
              <input type="date" placeholder="请输入审核时间" v-model="dispatcherRecruitExForm.auditTime">
            </label>
            <label class="filterAa" for="" >审核状态
              <select name="" id="" v-model="dispatcherRecruitExForm.state">
                  <option value="0">全部状态</option>
                  <option value="1">待审核</option>
                  <option value="2">审核中</option>
                  <option value="3">审核通过</option>
                  <option value="4">审核失败</option>
              </select>
            </label>
            <label class="filterAa" for="" >审核人
              <input type="text" placeholder="请输入审核人" v-model="dispatcherRecruitExForm.audit">
            </label>
          </form>
        </div>

        <!-- 按钮 -->
        <div class="btnBox">
            <button class="resetS" @click="resetRequest">重置</button>
            <button class="searchS" @click="searchAll">搜索</button>
        </div>

        <hr />
        <!-- 添加配送员按钮 -->
            <button class="addDispatcher" @click="addDispatcher">+添加配送员</button>

        <!-- 表格 -->
        <table id="printTable">
            <tr class="tableHead">
                <th>ID</th>
                <th>真实姓名</th>
                <th>手机号码</th>
                <th>审核类型</th>
                <th>工作类型</th>
                <th>工作城市</th>
                <th>来源</th>
                <th>最近提交时间</th>
                <th>最近审核时间</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
            <tr class="tableBody" v-for="item in dispatcherRecruitExList" :key="item.id">
                <td  @click="goUrlDispatcherRecruitDetails(item.id)" :style="{color:'#4e73df',cursor:'pointer'}">{{item.id}}</td>
                <td>{{item.deliverymanName}}</td>
                <td>{{item.deliverymanPhone}}</td>
                <td>{{item.auditType}}</td>
                <td>{{item.workType}}</td>
                <td>{{item.workAdrress}}</td>
                <td>{{item.source}}</td>
                <td>{{item.submissionTime}}</td>
                <td>{{item.auditTime}}</td>
                <td>{{item.state}}</td>
                <td class="moreS">
                  <el-popover placement="right" width="400" trigger="click">
                    <div class="moreTips" :v-model="visible">
                      <i class="el-icon-tickets"></i>
                      <span @click="goUrlDispatcherRecruitDetails(item.id)">&nbsp;&nbsp;查看并处理</span>
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
        <!-- 添加配送员模态框 -->
        <LockingDispatch :visible="showAddDispatcher" title="添加配送员" @onConfirm="addDispatcherConfirm" @onClose="addDispatcherClose">
          <div class="addDispatcherModal">
            <form action="">
              <label for="">手机号码：</label>
              <div>
                <select name="" id="" :style="{width:'60px'}">
                  <option value="1">+63</option>
                  <option value="2">+63</option>
                </select>
                <input type="text" name="" id="" placeholder="请输入骑手手机号"  :style="{width:'150px'}">
              </div>
            </form>
            <form action="">
              <label for="">工作类型：</label>
              <input type="radio" name="jobType" id="jobType1"><label for="jobType1"  :style="{marginRight:'30px'}">全职专送</label>
              <input type="radio" name="jobType" id="jobType2"><label for="jobType2">全职专送</label>
            </form>
            <form action="">
              <label for="">工作城市：</label>
              <div>
                <select name="" id="" :style="{width:'80px'}">
                  <option value="0">请选择</option>
                  <option value="1">+63</option>
                </select>
                <select name="" id="" :style="{width:'125px'}">
                  <option value="0">请选择</option>
                  <option value="1">+63</option>
                </select>
                <select name="" id="" :style="{width:'125px'}">
                  <option value="0">请选择</option>
                  <option value="1">+63</option>
                </select>
              </div>
            </form>
            <form action="">
              <label for="">工作地点：</label>
              <input type="text" name="" id="" placeholder="请输入小区/写字楼/学校等" :style="{width:'300px'}">
            </form>
            <form action="">
              <label for="">所属站点：</label>
              <select name="" id="" :style="{width:'200px'}">
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
import "../../assets/css/base_s.css"
import locationSelect from '../../components/userMgnt/locationSelect.vue'
import LockingDispatch from "../../components/userMgnt/LockingDispatch.vue";
export default {
  name: "DispatcherRecruitEx",
  data() {
    return {
      input1: "",
      dispatcherRecruitExList:[],
      showAddDispatcher:false,//模态框的默认值
      // 分页
      currentPage: 1,
      pageSize:this.pageSize,
      visible: false,
      pageNum:[
        2,4,6,8
      ],
      count:7,
      // 搜索表单
      dispatcherRecruitExForm:{
        id:'',
        deliverymanName:'',
        deliverymanPhone:'',
        auditType:'',
        workType:'',
        source:'',
        submissionTime:'',
        audit:''//数据没有审核人
      }
    };
  },
  components:{
    LockingDispatch,
    locationSelect
  },
  created(){
    this.showDispatcherRcruitExList()
  },
  methods: {
    goUrl(url){
      this.$router.push(url)
    },
    // 跳转骑手招募详情
    goUrlDispatcherRecruitDetails(param){
      console.log(param);
      this.$router.push({path:'marKiManagement/dispatcherRecruitDetails/'+param})
    },
    showDispatcherRcruitExList(){
      this.$axios({
        method:'GET',
        url:'http://1.14.106.61:7101/findDeliveryman',
        params:{
          currentPage:1,
          pageSize:2
        }
      })
      .then(res=>{
        console.log('成功',res);
        this.dispatcherRecruitExList=res.data;
        console.log(this.dispatcherRecruitExList);
        console.log(this.dispatcherRecruitExList.length);
      })
      .catch(err=>{
        console.log(err);
      })
    },
    // 模态框
    addDispatcher(){
      this.showAddDispatcher=true;//锁定visible的值
    },
    addDispatcherConfirm(){
      console.log('调用者确认');
    },
    addDispatcherClose(){
      console.log('调用者取消');
      this.showAddDispatcher=false;//改变visible的值
    },
    // 分页
    // 每页多少条
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      // this.pageSize=val
      this.$axios({
        method:'GET',
        url:'http://1.14.106.61:7101/findDeliveryman',
        params:{
          currentPage:1,
          pageSize:val
        }
      })
      .then(res=>{
        console.log('成功',res);
        this.dispatcherRecruitExList=res.data;
        console.log(this.dispatcherRecruitExList);
        console.log(this.dispatcherRecruitExList.length);
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
        method:'GET',
        url:'http://1.14.106.61:7101/findDeliveryman',
        params:{
          currentPage:val,
          pageSize:2
        }
      })
      .then(res=>{
        console.log('成功',res);
        this.dispatcherRecruitExList=res.data;
        console.log(this.dispatcherRecruitExList);
        console.log(this.dispatcherRecruitExList.length);
        console.log(this.pageNum);
      })
      .catch(err=>{
        console.log(err);
      })
    },
    // 重置
    resetRequest(){
      console.log(this.dispatcherRecruitExForm.id);
      this.dispatcherRecruitExForm.id=''
      this.dispatcherRecruitExForm.deliverymanName=''
      this.dispatcherRecruitExForm.deliverymanPhone=''
      this.dispatcherRecruitExForm.auditType=''
      this.dispatcherRecruitExForm.workType=''
      // this.dispatcherRecruitExForm.address=''
      this.dispatcherRecruitExForm.source=''
      this.dispatcherRecruitExForm.submissionTime=''
      this.dispatcherRecruitExForm.auditTime=''
      this.dispatcherRecruitExForm.audit=''
      this.showDispatcherRcruitExList();
    },
    // 搜索
    searchAll(){
            const dispatcherRecruitExList=this.dispatcherRecruitExList;
            const id=this.dispatcherRecruitExForm.id;
            const deliverymanName=this.dispatcherRecruitExForm.deliverymanName;
            const deliverymanPhone=this.dispatcherRecruitExForm.deliverymanPhone;
            const auditType=this.dispatcherRecruitExForm.auditType;
            const workType=this.dispatcherRecruitExForm.workType;
            const source=this.dispatcherRecruitExForm.source;
            const submissionTime=this.dispatcherRecruitExForm.submissionTime;
            const audit=this.dispatcherRecruitExForm.audit;
            
            for(let i=0;i<dispatcherRecruitExList.length;i++){
                if(id!=dispatcherRecruitExList[i].id&&deliverymanName!=dispatcherRecruitExList[i].deliverymanName&&deliverymanPhone!=dispatcherRecruitExList[i].deliverymanPhone&&auditType!=dispatcherRecruitExList[i].auditType&&workType!=dispatcherRecruitExList[i].workType&&source!=dispatcherRecruitExList[i].source&&submissionTime!=dispatcherRecruitExList.submissionTime&&audit!=dispatcherRecruitExList.audit){
                  dispatcherRecruitExList.splice(i);
                }
            }
            console.log(dispatcherRecruitExList);
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
.addDispatcher{
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
.addDispatcher:hover{
    background-color: #f4f6fc;
    cursor: pointer;
}
/* 模态框 */
.addDispatcherModal>form{
  font-size: 13px;
  margin: 20px 0;
  display: flex;
  align-items: center;
}
.addDispatcherModal>form select,.addDispatcherModal>form input{
  height: 25px;
  margin: 0 5px;
}
</style>