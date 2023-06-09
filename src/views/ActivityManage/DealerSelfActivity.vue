<template>
  <div id="out">
    <!-- <div class="title">商家自建活动</div> -->
    <div class="size">
      <div id='SearchBoxInActivityThird'>

        <div class="ComponentManageThird">
          <div class="ComponentManageThirdTitle">流水号</div>
          <input type="text" placeholder="请输入ID" class="ComponentManageThirdInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
        </div>

        <div class="ComponentManageThird">
          <div class="ComponentManageThirdTitle">活动类型</div>
          <select class="ComponentManageThirdInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
            <option value="">全部类型</option>
            <option value="">满500P减50P</option>
            <option value="">免基础配送费</option>
            <option value="">五折钜惠商家</option>
            <option value="">新店八折特惠</option>
          </select>
        </div>

        <div class="ComponentManageThird">
          <div class="ComponentManageThirdTitle">报名量</div>
          <input type="text" placeholder="最低" class="ComponentManageThirdInput DoubleInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
          <div class="ComponentManageThirdTitleSub">至</div>
          <input type="text" placeholder="最高" class="ComponentManageThirdInput DoubleInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
        </div>
          
        <div class="ComponentManageThird">
          <div class="ComponentManageThirdTitle">所在地</div>
          <div class="ComponentManageThirdRegion">
            <v-distpicker></v-distpicker>
          </div>
        </div>

        <div class="ComponentManageThird">
          <div class="ComponentManageThirdTitle">报名时间</div>
          <select class="ComponentManageThirdInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
            <option value="">全部</option>
            <option value="">近三个月</option>
            <option value="">今年内</option>
            <option value="">2021年</option>
            <option value="">2020年</option>
            <option value="">2020年以前</option>
          </select>
        </div>

        <div class="ComponentManageThird">
          <div class="ComponentManageThirdTitle">报名状态</div>
          <select placeholder="请输入关键词" class="ComponentManageThirdInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
            <option value="">全部状态</option>
            <option value="">待付款</option>
            <option value="">报名成功</option>
            <option value="">报名关闭</option>
          </select>
        </div>

        <div class="ComponentManageThird">
          <div class="ComponentManageThirdTitle">审核状态</div>
          <select placeholder="请输入关键词" class="ComponentManageThirdInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
            <option value="">全部状态</option>
            <option value="">待审核</option>
            <option value="">审核中</option>
            <option value="">审核通过</option>
            <option value="">审核拒绝</option>
          </select>
        </div>
          

        <div class="ComponentManageThird">
          <div class="ComponentManageThirdTitle">审核人</div>
          <input type="text" placeholder="请输入审核人" class="ComponentManageThirdInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
        </div>
      </div>
      

      <div id='ButtonBoxInDealerSelf'>
        <button class="buttonStyle orangeStyle">重置</button>
        <button class="buttonStyle blueStyle">搜索</button>
      </div>

      <div id="TipBoxInDealerSelf">
        <div>
          <div class="CommentTitleTipBoxInDealerSelf">活动类型</div>
          <div class="optionStyleTipBoxInDealerSelf" @click="DPDJQ()">店铺代金券</div>
          <div class="optionStyleTipBoxInDealerSelf" @click="DPMJHD()">店铺满减活动</div>
          <div class="optionStyleTipBoxInDealerSelf" @click="MFDJQ()">满返代金券</div>
          <div class="optionStyleTipBoxInDealerSelf" @click="DPMZHD()">店铺满赠活动</div>
          <div class="optionStyleTipBoxInDealerSelf" @click="SPTJHD()">商品推荐活动</div>
        </div>
      </div>

      <div id="TableInDealerSelf">
        <el-table
          :data="tableData"
          style="width: 100%"
          :header-cell-style="{background:'#eef1fc',height:'45px', fontSize:'13px',color: '#000000',fontWeight:'400'}"
          :row-style="{height:'70px',fontSize:'13px',fontWeight:'400'}"
          >
          <el-table-column
            prop="id"
            label="ID"
            width="100"
            header-align="center"
            align="center">
            <template slot-scope="scope">
              <el-link type="primary" @click="GoToDetail(scope.row.id)">{{scope.row.id}}</el-link>
            </template>
          </el-table-column>
          <el-table-column
            prop="shop"
            label="店铺名称"
            width="180"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="ActivityRules"
            label="活动规则"
            width="150"
            header-align="center"
            align="center">
            <template slot-scope="scope">
              {{scope.row.rules}}
            </template>
          </el-table-column>
          <el-table-column
            prop="userType"
            label="用户类型"
            width="150"
            header-align="center"
            align="center">
            <template slot-scope="scope">
              {{scope.row.userType | userTypefil}}
            </template>
          </el-table-column>
          <el-table-column
            prop="acData"
            label="发放日期"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="applicationData"
            label="可用日期"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="share"
            label="同享活动"
            header-align="center"
            width="100"
            align="center">
            <template slot-scope="scope">
              {{scope.row.share | sharefil}}
            </template>
          </el-table-column>
          <el-table-column
            prop="totle"
            label="发放量"
            header-align="center"
            align="center">
            <template slot="header">
              发放量<i class="el-icon-sort"></i>
            </template>
            <template slot-scope="scope">
              {{scope.row.used}}/{{scope.row.totle}}
            </template>
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间"
            header-align="center"
            align="center"
            width="150">
            <template slot="header">
              创建时间<i class="el-icon-sort"></i>
            </template>
            <template slot-scope="scope">
              <div class="tableTipBox">
                <p>{{scope.row.createTime}}</p>
                <template v-if="scope.row.auditStatus == 3">
                  <p class="tableTip"
                  :class="[scope.row.status == 2 ? 'StateIng':'',
                  scope.row.status == 3 ? 'StateStop':'',
                  scope.row.status == 4 ? 'StateOver':'',
                  ]"
                  >{{scope.row.status | acaStatusfil}}</p>
                </template>
                <template v-if="scope.row.auditStatus == 1 || scope.row.auditStatus == 2 || scope.row.auditStatus == 4">
                  <p class="tableTip"
                  :class="[
                  scope.row.auditStatus == 1 ? 'AuditingWaiting':'',
                  scope.row.auditStatus == 2 ? 'Auditing':'',
                  scope.row.auditStatus == 4 ? 'AuditingRefuse':'',
                  ]"
                  >{{scope.row.auditStatus | auditStatusfil}}</p>
                </template>

              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="auditStatus"
            label="审核状态"
            header-align="center"
            align="center">
            <template slot-scope="scope">
              {{scope.row.auditStatus | auditStatusfil}}  
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="50"
            header-align="center"
            align="center">
            <template slot-scope="scope">
              <template v-if="scope.row.auditStatus == 1">
                <el-popover
                  placement="bottom"
                  width="100">
                  <div class="insideButton">
                    <el-button type="text" icon="el-icon-edit-outline" @click="GoToDetail(scope.row.id)">查看并处理</el-button>
                  </div>
                  <el-button slot="reference" type="text"><b>...</b></el-button>
                </el-popover>
              </template>
            </template>
          </el-table-column>
        </el-table>
        <div class="paginationCenter">
          <el-pagination
            @size-change="handleSizeChange2"
            @current-change="handleCurrentChange2"
            :current-page.sync="currentPage"
            :page-size="2"
            prev-text="上一页"
            next-text="下一页"
            :page-sizes="[2, 3, 4]"
            layout="prev, pager, next, sizes, total"
            :total="totalPage">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'DealerSelfActivity',
  data(){
    return{
      totalPage:null,
      currentPage:1,
      pageSize:2,
      tableData: []
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
    userTypefil(val){
      if(val == 1){
        return '所有用户'
      }
      if(val == 2){
        return '新注册用户'
      }
      if(val == 3){
        return '店铺新用户'
      }
    },
    auditStatusfil(val){
      if(val == 1){
        return '待审核'
      }
      if(val == 2){
        return '审核中'
      }
      if(val == 3){
        return '审核通过'
      }
      if(val == 4){
        return '审核拒绝'
      }
    },
    sharefil(val){
      if(val == 1){
        return '是'
      }
      if(val == 2){
        return '否'
      }
    },
  },
  methods:{
    DPDJQ(){
      this.getActivityData()
    },
    DPMJHD(){
      this.getActivityDataOther("http://172.16.101.63:8001/buildb/queryBuildBByAcType")
    },
    MFDJQ(){
      this.getActivityDataOther("http://172.16.101.63:8001/buildc/queryBuildCByAcType")
    },
    DPMZHD(){
      this.getActivityDataOther("http://172.16.101.63:8001/buildd/queryBuildDByAcType")
    },
    SPTJHD(){
      this.tableData = []
    },
    GoToDetail(id){
      this.$router.push("DealerWaitingAuditing?id=" + id)
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
    styleChange(e){
      console.log(e.currentTarget)
      e.currentTarget.classList.add('chooseStyle')
    },
    getActivityData(){
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/builda/queryBuildAByAcType",
        params: {
          currentPage:this.currentPage,
          pageSize:this.pageSize,
        },
      })
      .then((res) => {
        console.log("请求成功", res);
        this.totalPage = res.data.total
        this.tableData = res.data.data
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    },
    getActivityDataOther(TableAddress){
      this.$axios({
        method: "GET",
        url:TableAddress,
        params: {
          currentPage:this.currentPage,
          pageSize:this.pageSize,
        },
      })
      .then((res) => {
        console.log("请求成功", res);
        this.totalPage = res.data.total
        this.tableData = res.data.data
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    },
    handleSizeChange2(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val,
      this.getActivityData()
    },
    handleCurrentChange2(val) {
      this.currentPage = val,
      console.log(`当前页: ${val}`);
      this.getActivityData()
    }
  },
  created(){
    this.getActivityData()
  },
}
</script>

<style scoped>
#out{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
}

.title{
  width: calc(100% - 50px);
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  color: black;
  text-align: start;
  margin-left: 50px;
}

.size{
  width: calc(100% - 100px);
  height: calc(100% - 80px);
  background-color: #ffffff;
  border-radius: 10px;
  margin : 20px 50px 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
#ButtonBoxInDealerSelf{
  width: calc(100% - 20px);
  display: flex;
  padding-left: 20px;
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



#SearchBoxInActivityThird input{
  outline: none;
}
#SearchBoxInActivityThird select{
  outline: none;
}
#SearchBoxInActivityThird{
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 40px);
}

.ComponentManageThird{
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

.ComponentManageThirdTitle{
  width: 25%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 13px;
  color: #666666;
  background-color: #f6f7f9;
}
.ComponentManageThirdRegion{
  width: 75%;
}
.distpicker-address-wrapper select{
  width: 32%;
  padding: 0;
  margin: 0;
  border: 0;
  height: 40px;
  font-size: 13px;
  color: #666666;
  background-color: #f6f7f9;
}
.ComponentManageThirdTitleSub{
  width: 10%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 13px;
  color: #666666;
  background-color: #f6f7f9;
}
.ComponentManageThirdInput{
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
.ComponentManageThirdInput:hover,.ComponentManageThirdTitle:hover{
  background-color: transparent;
}
.ChooseStyle{
  box-shadow:0px 0px 3px 1px #6a9dee;
}
.backgroundWhite{
  background-color: #ffffff;
}




#TipBoxInDealerSelf{
  width: calc(100% - 40px);
  padding: 15px 20px 15px 20px;
  display: flex;
  border-top: 1px solid #e4e4e4
  ;
}
.CommentTitleTipBoxInDealerSelf{
  width: 60px;
  height: 35px;
  font-size: 13px;
  line-height: 35px;
  display: inline-block;
  margin-right: 10px;
}
.optionStyleTipBoxInDealerSelf{
  width: 110px;
  height: 35px;
  line-height: 35px;
  background-color: #fafafa;
  border-radius: 3px;
  font-size: 13px;
  text-align: center;
  display: inline-block;
  border:1px solid #fafafa;
  box-sizing: border-box;
  margin: 0px 15px 0px 0px;
  color:#797979;
  cursor: pointer;
}
.optionStyleTipBoxInDealerSelf:hover{
  background-color: #f3f6fd;
  border-color: #f3f6fd;
  color: #4e73df;
}
.chooseStyle{
  background-color: #ffffff;
  border-color: #4e73df;
  color: #4e73df;
}

#TableInDealerSelf{
  padding: 0 20px;
  width: calc(100% - 40px);
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
  background-color: #64af64;
  padding: 0 3px;
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
.StateIng{
  background-color: #8ca4ea;
}
.StateStop{
  background-color: #797979;
}
.StateOver{
  background-color: #cccccc;
}
.Auditing{
  background-color: #ffc266;
}
.AuditingRefuse{
  background-color: #ff6666;
}
.AuditingWaiting{
  background-color: darkgreen;
}

</style>