<template>
  <div id='AllActivity'>
    <div id='SearchBoxInActivitySecond'>

      <div class="ComponentManageSecond">
        <div class="ComponentManageSecondTitle">活动ID</div>
        <input v-model="SearchId" type="text" placeholder="请输入ID" class="ComponentManageSecondInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
      </div>

      <div class="ComponentManageSecond">
        <div class="ComponentManageSecondTitle">活动类型</div>
        <select v-model="SearchAcType" class="ComponentManageSecondInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
          <option :value="null">全部类型</option>
          <option :value="1">满500P减50P</option>
          <option :value="2">免基础配送费</option>
          <option :value="3">五折钜惠商家</option>
          <option :value="4">新店八折特惠</option>
        </select>
      </div>

      <div class="ComponentManageSecond">
        <div class="ComponentManageSecondTitle">报名量</div>
        <input v-model="SearchNumLow" type="text" placeholder="最低" class="ComponentManageSecondInput DoubleInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
        <div class="ComponentManageSecondTitleSub">至</div>
        <input v-model="SearchNumHigh" type="text" placeholder="最高" class="ComponentManageSecondInput DoubleInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
      </div>
        
      <div class="ComponentManageSecond">
        <div class="ComponentManageSecondTitle">应用范围</div>
        <input type="text" placeholder="请输入关键词" class="ComponentManageSecondInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
      </div>

      <div class="ComponentManageSecond">
        <div class="ComponentManageSecondTitle">创建时间</div>
        <select class="ComponentManageSecondInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
          <option value="">全部</option>
          <option value="">近三个月</option>
          <option value="">今年内</option>
          <option value="">2021年</option>
          <option value="">2020年</option>
          <option value="">2020年以前</option>
        </select>
      </div>

      <div class="ComponentManageSecond">
        <div class="ComponentManageSecondTitle">活动状态</div>
        <select v-model="SearchAcaStatus" placeholder="请输入关键词" class="ComponentManageSecondInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
          <option :value="null">全部状态</option>
          <option :value="1">未开始</option>
          <option :value="2">进行中</option>
          <option :value="3">已暂停</option>
          <option :value="4">已结束</option>
        </select>
      </div>
        
    </div>


    <div id='ButtonBox'>
      <button class="buttonStyle orangeStyle" @click="ResetListPage2">重置</button>
      <button class="buttonStyle blueStyle" @click="SearchPage2">搜索</button>
    </div>
    <div class="AddActivity">
      <el-button round icon="el-icon-plus" @click="gotoPostNewActivity">发布报名活动</el-button>
    </div>


    <div id="TableBox">
      <el-table
        :data="AllActivityTableData"
        style="width: 100%"
        :header-cell-style="{background:'#eef1fc',height:'45px', fontSize:'13px',color: '#000000',fontWeight:'400'}"
        :row-style="{height:'70px',fontSize:'13px',fontWeight:'400'}"
        >
        <el-table-column
          prop="actype"
          label="活动类型"
          width="150"
          header-align="center"
          align="center">
          <template slot-scope="scope">
            <el-link type="primary" @click="GoToDetail(scope.row.id)">{{scope.row.actype | actypefil}}</el-link>
            <p class="fontSize12Px">ID：{{scope.row.id}}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="rulesCh"
          label="活动细则"
          width="200"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="acData"
          label="活动日期"
          width="200"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="applicationData"
          label="报名日期"
          width="200"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="acAsk"
          label="店铺品类要求"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="ranges"
          label="应用范围"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="applicationExp"
          label="报名费"
          header-align="center"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="applicationPlaces"
          label="报名量"
          header-align="center"
          align="center">
          <template slot-scope="scope">
            <el-link type="primary">{{scope.row.applicationNum}}/{{scope.row.applicationPlaces}}</el-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          header-align="center"
          align="center"
          width="200">
          <template slot="header">
            创建时间<i class="el-icon-sort"></i>
          </template>
          <template slot-scope="scope">
            <div class="tableTipBox">
              <p>{{scope.row.createTime}}</p>
              <p class="tableTip" 
              :class="[scope.row.status == 2 ? 'StateIng':'',
              scope.row.status == 3 ? 'StateStop':'',
              scope.row.status == 4 ? 'StateOver':'']"
              >{{scope.row.status | acaStatusfil}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="50"
          header-align="center"
          align="center">
          <template  slot-scope="scope">
            <el-popover
              placement="bottom"
              width="100">
              <div class="insideButton" v-if="scope.row.status == 1">
                <el-button type="text" @click="ToEdit(scope.row.id)"><i class="el-icon-edit-outline marginTen colorBlue"></i>编辑活动</el-button>
                <el-button type="text" @click="stopConfirm(scope.row.id)"><i class="el-icon-remove-outline colorRed"></i>暂停活动</el-button>
              </div>
              <div class="insideButton" v-if="scope.row.status == 2">
                <el-button type="text" @click="stopConfirm(scope.row.id)"><i class="el-icon-remove-outline colorRed"></i>暂停活动</el-button>
              </div>
              <div class="insideButton" v-if="scope.row.status == 3">
                  <el-button type="text" @click="RestartConfirm(scope.row.id)"><i class="el-icon-circle-check colorGreen"></i>恢复活动</el-button>
              </div>
              <div class="insideButton" v-if="scope.row.status == 4">
                  <el-button type="text" @click="gotoPostNewActivity"><i class="el-icon-refresh-left colorBlue"></i>重新发布</el-button>
              </div>
              <el-button slot="reference" type="text"><b>...</b></el-button>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <div class="paginationCenter">
        <el-pagination
          @size-change="handleSizeChangeInPage2"
          @current-change="handleCurrentChangeInPage2"
          :current-page.sync="currentPage2"
          :page-size="pageSize2"
          prev-text="上一页"
          next-text="下一页"
          :page-sizes="[2, 3, 4]"
          layout="prev, pager, next, sizes, total"
          :total="totalPage2">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'AllActivity',
  data(){
    return{
      AllActivityTableData:[],
      currentPage2:1,
      pageSize2:2,
      totalPage2:0,
      SearchId:null,
      SearchAcType:null,
      SearchNumLow:null,
      SearchNumHigh:null,
      SearchAcaStatus:null,
    }
  },
  filters:{
    acaStatusfil(val){
      if(val == 1){
        return '未开始'
      }
      if(val == 2){
        return '进行中'
      }
      if(val == 3){
        return '已暂停'
      }
      if(val == 4){
        return '已结束'
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
    stopConfirm(id){
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '确定要暂停该活动吗？ ')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              this.StopActivity(id);
              done();
            } else {
              done();
            }
          }
        })
    },
    RestartConfirm(id){
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '确定要恢复该活动吗？ ')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              this.RestartActivity(id);
              done();
            } else {
              done();
            }
          }
        })
    },
    SearchPage2(){
      this.getAllActivityData()
    },
    StopActivity(ItemId){
      console.log('OK');
      console.log(ItemId);
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/application/updateActivityStatus",
        params: {
          id: ItemId,
          status: 3,
        },
      })
      .then((res) => {
        console.log("请求成功", res);
        this.getAllActivityData();
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    },
    RestartActivity(ItemId){
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/application/updateActivityStatus",
        params: {
          id: ItemId,
          status: 2,
        },
      })
      .then((res) => {
        console.log("请求成功", res);
        this.getAllActivityData();
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    },
    ResetListPage2(){
      this.SearchId= null,
      this.SearchAcType= null,
      this.SearchNumLow= null,
      this.SearchNumHigh= null,
      this.SearchAcaStatus= null,
      this.getAllActivityData()
    },
    ToEdit(id){
      this.$router.push("EditPostNewActivity?id=" + id)
    },
    gotoPostNewActivity(){
      this.$router.push("PostNewActivity")
    },
    GoToDetail(id){
      this.$router.push("DealerAllActivityDetail?id=" + id)
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
    getAllActivityData(){
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/application/queryAcaBySome",
        params: {
          currentPage:this.currentPage2,
          
          pageSize:this.pageSize2,

          id:this.SearchId,
          status:this.SearchAcaStatus,
          numLow:this.SearchNumLow,
          numHigh:this.SearchNumHigh,
          actype:this.SearchAcType,
        },
      })
      .then((res) => {
        console.log("请求成功", res);
        this.totalPage2 = res.data.total
        this.AllActivityTableData = res.data.data;
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    },
    handleSizeChangeInPage2(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize2 = val,
      this.getAllActivityData()
    },
    handleCurrentChangeInPage2(val) {
      this.currentPage2 = val,
      console.log(`当前页: ${val}`);
      this.getAllActivityData()
    }
  },
  created(){
    this.getAllActivityData()
  }
}
</script>

<style scoped>
#AllActivity{
  width: 100%;
}
.fontSize12Px{
  font-size: 12px;
}
.AddActivity button{
  border-color: #4d74df;
  color: #4d74df;
  width: 150px;
  height: 35px;
  text-align: center;
  font-size: 13px;
  margin-bottom: 20px;
}
#TableBox{
  width: 100%;
}
.insideButton{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0px;
}
.insideButton button{
  font-size: 14px;
  color: black;
}
.insideButton i{
  margin-right: 5px;
}
.insideButton button:hover{
  color: #409eff;
}
.marginTen{
  margin-left: 10px;
}
.colorBlue{
  color: #4e73df;
}
.colorRed{
  color: red;
}
.colorGreen{
  color: #008000;
}
.tableTip{
  font-size: 12px;
  color: #FFFFFF;
  background-color: #66b366;
  width: 40px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  margin-top: 5px;
}
.StateIng{
  background-color: #66a3ff;
}
.StateStop{
  background-color: #888888;
}
.StateOver{
  background-color: #c4c4c4;
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

#ButtonBox{
  width: calc(100% - 1px);
  display: flex;
  margin-left: 1px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 20px;
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

input{
  outline: none;
}
select{
  outline: none;
}
#SearchBoxInActivitySecond{
  padding: 10px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.ComponentManageSecond{
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
}

.ComponentManageSecondTitle{
  width: 25%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 13px;
  color: #666666;
  background-color: #f6f7f9;
}
.ComponentManageSecondTitleSub{
  width: 15%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 13px;
  color: #666666;
  background-color: #f6f7f9;
}
.ComponentManageSecondInput{
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
.ComponentManageSecondInput:hover,.ComponentManageSecondTitle:hover{
  background-color: transparent;
}
.ChooseStyle{
  box-shadow:0px 0px 3px 1px #6a9dee;
}
.backgroundWhite{
  background-color: #ffffff;
}
</style>