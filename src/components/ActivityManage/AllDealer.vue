<template>
  <div id='AllDealer'>
    <div id='SearchBoxInActivity'>
      <div class="ComponentManageFirst">
        <div class="ComponentManageFirstTitle">流水号</div>
        <input type="text" placeholder="请输入ID" class="ComponentManageFirstInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)" v-model="SearchwaterId">
      </div>

      <div class="ComponentManageFirst">
        <div class="ComponentManageFirstTitle">活动类型</div>
        <select v-model="Searchactype" class="ComponentManageFirstInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
          <option :value="null">全部类型</option>
          <option :value="1">满500P减50P</option>
          <option :value="2">免基础配送费</option>
          <option :value="3">五折钜惠商家</option>
          <option :value="4">新店八折特惠</option>
        </select>
      </div>

      <div class="ComponentManageFirst">
        <div class="ComponentManageFirstTitle">店铺名称</div>
        <input v-model="SearchstorName" type="text" placeholder="请输入店铺名称" class="ComponentManageFirstInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
      </div>
        
      <div class="ComponentManageFirst">
        <div class="ComponentManageFirstTitle">所在地</div>
        <div class="ComponentManageFirstRegion">
          <v-distpicker></v-distpicker>
        </div>
      </div>

      <div class="ComponentManageFirst">
        <div class="ComponentManageFirstTitle">报名时间</div>
        <select class="ComponentManageFirstInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
          <option :value="null">全部</option>
          <option :value="1">近三个月</option>
          <option :value="2">今年内</option>
          <option :value="3">2021年</option>
          <option :value="4">2020年</option>
          <option :value="5">2020年以前</option>
        </select>
      </div>

      <div class="ComponentManageFirst">
        <div class="ComponentManageFirstTitle">报名状态</div>
        <select v-model="SearchapplicationStatus" placeholder="请输入关键词" class="ComponentManageFirstInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
          <option :value="null">全部状态</option>
          <option :value="1">待付款</option>
          <option :value="2">报名成功</option>
          <option :value="3">报名关闭</option>
        </select>
      </div>
    </div>



    <div id='ButtonBoxInActivity'>
      <button class="buttonStyle orangeStyle" @click="ResetList">重置</button>
      <button class="buttonStyle blueStyle" @click="Search">搜索</button>
    </div>


    <div id="TableBox">
      <el-table
        :data="AllDealerTableData"
        style="width: 100%"
        :header-cell-style="{background:'#eef1fc',height:'45px', fontSize:'13px',color: '#000000',fontWeight:'400'}"
        :row-style="{height:'70px',fontSize:'13px',fontWeight:'400'}"
        >
        <el-table-column
          prop="waterId"
          label="流水号"
          width="180"
          header-align="center"
          align="center">
          <template slot-scope="scope">
            <el-link type="primary" @click="GoToDealerActivityDetail(scope.row.waterId)">{{scope.row.waterId}}</el-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="storName"
          label="报名店铺"
          width="200"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="storLocal"
          label="所在地"
          width="150"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="actype"
          label="活动类型"
          header-align="center"
          align="center">
          <template slot-scope="scope">
            <div>
              <p>{{scope.row.actype | actypefil}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="rulesCh"
          label="活动细则"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="acData"
          label="活动日期"
          header-align="center"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          prop="applicationExp"
          label="报名费"
          header-align="center"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="报名时间"
          header-align="center"
          align="center"
          width="200">
          <template slot="header">
            报名时间<i class="el-icon-sort"></i>
          </template>
          <template slot-scope="scope">
            <div>
              <p>{{scope.row.createTime}}</p>
              <p>{{scope.row.applicationStatus | applicationStatusfil}}</p>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="paginationCenter">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          prev-text="上一页"
          next-text="下一页"
          :page-sizes="[3, 5, 10]"
          layout="prev, pager, next, sizes, total"
          :total="totalPage">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'AllDealer',
  data(){
    return{
      currentPage: 1,
      pageSize: 3,
      SearchwaterId: null,
      Searchactype: null,
      SearchstorName: '',
      SearchapplicationStatus: null,
      totalPage: 0,
      copySearch:{},
      AllDealerTableData: []
    }
  },
  filters:{
    applicationStatusfil(val){
      if(val == 1){
        return '待付款'
      }
      if(val == 2){
        return '报名成功'
      }
      if(val == 3){
        return '报名关闭'
      }
    },
    actypefil(val){
      if(val == 1){
        return '满500P减50P'
      }
      if(val == 2){
        return '免基础配送费'
      }
      if(val == 3){
        return '五折钜惠商家'
      }
      if(val == 4){
        return '新店八折特惠'
      }
    },

  },
  methods:{
    Search(){
      this.getAllDealerData()
    },
    ResetList(){
      this.SearchwaterId= null,
      this.Searchactype= null,
      this.SearchstorName= '',
      this.SearchapplicationStatus= null,
      this.getAllDealerData()
    },
    GoToDealerActivityDetail(id){
      this.$router.push("DealerActivityDetail?waterId=" + id)
    },
    InputFocusStyle(e){
      e.currentTarget.parentElement.classList.add('ChooseStyle')
      e.currentTarget.previousSibling.classList.add('backgroundWhite')
      e.currentTarget.classList.add('backgroundWhite')
    },
    InputBlurStyle(e){
      e.currentTarget.parentElement.classList.remove('ChooseStyle')
      e.currentTarget.previousSibling.classList.remove('backgroundWhite')
      e.currentTarget.classList.remove('backgroundWhite')
    },
    getAllDealerData(){
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/application/queryListBySome",
        params: {
          currentPage:this.currentPage,
          pageSize:this.pageSize,
          
          waterId:this.SearchwaterId,
          actype:this.Searchactype,
          storName:this.SearchstorName,
          applicationStatus:this.SearchapplicationStatus,
        },
      })
      .then((res) => {
        console.log("请求成功", res);
        this.totalPage = res.data.total
        this.AllDealerTableData = res.data.data;

      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val,
      this.getAllDealerData()
    },
    handleCurrentChange(val) {
      this.getAllDealerData()
      this.currentPage = val,
      console.log(`当前页: ${val}`);
    }
  },
  created(){
    this.getAllDealerData()
  }
}
</script>

<style>

#AllDealer{
  width: 100%;
}
#TableBox{
  width: 100%;
}
.insideButton{
  width: 100%;
  padding-left: 30px;
}
.insideButton button{
  font-size: 14px;
  color: black;
}
.insideButton button:hover{
  color: #409eff;
}
.tableTip{
  font-size: 12px;
  color: #FFFFFF;
  background-color: #409eff;
  width: 40px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  margin-top: 5px;
}
.tableTipBox{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.paginationCenter{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
#SearchBoxInActivity input{
  outline: none;
}
#SearchBoxInActivity select{
  outline: none;
}
#SearchBoxInActivity{
  padding: 10px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.ComponentManageFirst{
  width: calc(23% - 1px);
  height: 35px;
  display: flex;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #f6f7f9 ;
  box-sizing: border-box;
  box-shadow: none;
  transition:all .3s linear;
  margin: 0px 2% 20px 1px;
  background-color: #f6f7f9;
}

.ComponentManageFirstTitle{
  width: 25%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 13px;
  color: #666666;
  background-color: #f6f7f9;
}
.ComponentManageFirstRegion{
  width: 75%;
}
.distpicker-address-wrapper select{
  width: 30%;
  padding: 0;
  margin: 0;
  border: 0;
  height: 30px;
  font-size: 13px;
  color: #666666;
  background-color: transparent;
}
.ComponentManageFirstTitleSub{
  width: 10%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 13px;
  color: #666666;
  background-color: #f6f7f9;
}
.ComponentManageFirstInput{
  width: 75%;
  height: 35px;
  line-height: 35px;
  padding: 0px 10px 0px 15px;
  box-sizing: border-box;
  border: 0px;
  border-color: yellow ;
  background-color: #f6f7f9;
}
.DoubleInput{
  width: 30%;
}
.ComponentManageFirstInput:hover,.ComponentManageFirstTitle:hover{
  background-color: transparent;
}
.ChooseStyle{
  box-shadow:0px 0px 3px 1px #6a9dee;
}
.backgroundWhite{
  background-color: #ffffff;
}
#ButtonBoxInActivity{
  width: calc(100% - 1px);
  display: flex;
  margin-left: 1px;
  padding-bottom: 20px;
}
.buttonStyle{
  width: 80px;
  height:35px;
  line-height: 35px;
  border-radius: 3px;
  border: 0;
  color: white;
  cursor: pointer;
  margin-right: 20px;
}
.orangeStyle{
  background-color: #ff9900;
}
.blueStyle{
  background: -webkit-linear-gradient(top,#4d73df,#0995e3);
}
.orangeStyle:hover,.blueStyle:hover{
  opacity: 70%;
}
</style>




