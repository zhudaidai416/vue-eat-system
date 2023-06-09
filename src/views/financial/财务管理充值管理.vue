<template>
  <!-- <div class="yemian"> -->
    <!-- <div class="tou"><span><strong>账户列表</strong></span></div> -->
    <div class="mian">
      <!-- 第一行搜索类 -->
      <div class="hang1">
        <div class="sousuo1">
          <div>
            <span class="sousuoname">交易号</span>
            <span class="sousuoneirong"><input type="text" placeholder="请输入交易号" v-model="transactionNo"></span>
          </div>
          <div>
            <span class="sousuoname">用户类型</span>
            <span class="sousuoneirong">
              <el-select v-model="vip" placeholder="全部">
                <el-option
                  v-for="item in viplist"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
          </div>
          <div>
            <span class="sousuoname">昵称名称</span>
            <span class="sousuoneirong"><input type="text" placeholder="请输入昵称或名称" v-model="nickname"></span>
          </div>
          <div>
            <span class="sousuoname">手机号码</span>
            <span class="sousuoneirong"><input type="text" placeholder="请输入手机号码" v-model="phone"></span>
          </div>
        </div>
        <div class="sousuo1">
          <div>
            <span class="sousuoname">创建时间</span>
            <span class="sousuoneirong">
              <el-select v-model="createtime" placeholder="全部">
                <el-option
                  v-for="item in chuangjiantime"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
          </div>
          <div>
            <span class="sousuoname">交易状态</span>
            <span class="sousuoneirong">
              <el-select v-model="zhuangtai" placeholder="全部">
                <el-option
                    v-for="item in zhuangtailist"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </span>
          </div>
        </div>
      </div>
      <!-- 第一行搜索类 -->
      <!-- 第二行按钮 -->
      <div class="hang2">
        <span>
          <el-button type="warning">重置</el-button>
        </span>
        <span>
          <el-button type="primary" @click="sousuo">搜索</el-button>
        </span>
      </div>
      <!-- 第二行按钮 -->
      <!-- 第三行表格 -->
      <div class="hang3">
        <el-table
          :header-cell-style="{background:'#eef1fc'}"
          :data="list"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="transactionNo"
            label="交易号"
            width="120px">
            <template slot-scope="scope">
              <div style="color: blue;cursor: pointer;" @click="chongzhihao(scope.row.transactionNo)">{{scope.row.transactionNo}}</div>
            </template>
          </el-table-column>
          <el-table-column
            class-name="table-fon-size"
            align="center"
            prop="name"
            label="昵称名称"
            width="150px">
            <template slot-scope="scope">
            <!-- <template slot-scope="scope"> -->
              <!-- <a @click="iii(scope.row.ID)" ></a> -->
              <div style="width: 100%;height: 50px; display: flex;">
                <div style="line-height: 50px;" v-show="(scope.row.accountType==0)"><span style="background-color: #a7b9ef;border-radius: 5px;">商家</span></div>
                <div style="line-height: 50px;" v-show="(scope.row.accountType==1)"><span style="background-color: #ffc266;border-radius: 5px;">骑手</span></div>
                <div>
                  <div>{{scope.row.nickname}}</div>
                  <div>{{scope.row.phone}}</div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="rechargeAmount"
            label="充值金额"
            width="80px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="paymentMethod"
            label="支付方式"
            width="90px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="paymentCurrency"
            label="支付币种"
            width="80px">
            <template slot-scope="scope">
              <div v-if="scope.row.paymentCurrency == 0">人民币</div>
              <div v-else>美元</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="accountsPayable"
            label="应付款"
            width="90px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="exchangeRate"
            label="汇率"
            width="100px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="zhanghuyue"
            label="账户余额"
            width="80px">
            <template slot-scope="scope">
            <!-- <template slot-scope="scope"> -->
              <!-- <a @click="iii(scope.row.ID)" ></a> -->
                <div>
                  <div>新:{{scope.row.newAccountBalance}}</div>
                  <div>原:{{scope.row.oldAccountBalance}}</div>
                </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="createTime"
            label="创建时间"
            width="100px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="completionTime"
            label="完成时间"
            width="100px">
            <template slot-scope="scope">
              <div v-if="scope.row.status != 0">{{scope.row.completionTime}}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="status"
            label="状态"
            width="100px">
            <template slot-scope="scope">
                <div>
                  <div v-if="scope.row.status == 0">充值中</div>
                  <div v-else-if="scope.row.status == 1">充值成功</div>
                  <div v-else>充值失败</div>
                </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="fenye">
          <div>
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-sizes="[1, 2, 3, 4]"
                :page-size="100"
                background
                layout="sizes, prev, pager, next"
                :total="maxpage">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
      <!-- 第三行表格 -->
    </div>
  <!-- </div> -->
</template>

<script>
  export default {
    name:'zhanghulist',
    data() {
      return {
        viplist: [{
          value: 0,
          label: '普通会员'
        }, {
          value: 1,
          label: 'VIP会员'
        }, {
          value: 2,
          label: '商家店铺'
        }, {
          value: 3,
          label: '配送站'
        },{
          value: 4,
          label: '配送员'
        }],
        vip: '',
        chuangjiantime: [ 
        {
          value: 0,
          label: '近三个月'
        },{
          value: 1,
          label: '今年内'
        }, {
          value: 2,
          label: '2021年'
        }, {
          value: 3,
          label: '2020年'
        }, {
          value: 4,
          label: '2020年以前'
        }],
        createtime: '',
        zhuangtailist: [{
          value: 0,
          label: '充值中'
        }, 
        {
          value: 1,
          label: '充值成功'
        },{
          value: 2,
          label: '充值失败'
        }],
        zhuangtai: '',
        list: [],
        maxpage:null,
        currentPage:1,
        pageSize:1,
        transactionNo:'',
        nickname:'',
        phone:''
      }
    },
    methods:{
      // 每页多少条数据
      handleSizeChange(val) {
        this.pageSize = val
        this.datashow()
      },
      // 当前在第几页
      handleCurrentChange(val) {
        this.currentPage = val
        this.datashow()
      },
      // 跳转详细页面
      chongzhihao(id){
        this.$router.push({
          path:"/topUpManagementxiangqing",
          query:{
            id:id
          }
        })
      },
      // 数据渲染分页
      datashow(){
        this.$axios({
          method:'get',
          url:'/recharge/selectRechargeManagement',
          params:{
            currentPage:this.currentPage,
            pageSize:this.pageSize,
            transactionNo:this.transactionNo,
            accountType:this.vip,
            nickname:this.nickname,
            phone:this.phone,
            status:this.zhuangtai,
            timeNo:this.createtime
          }
        })
        .then(res=>{
          console.log(res);
          this.maxpage = res.data.totalPage
          this.list = res.data.totalData
        })
        .catch(err=>{
          console.log(err);
        })
      },
      sousuo(){
        this.datashow()
      }
    },
    mounted(){
      this.datashow()
    }
  }
</script>

<style scoped>
  .yemian {
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    overflow: hidden;
  }
  .tou {
    width: 100%;
    height: 80px;
    background-color: #f8f8f8;
    margin:  0 auto;
    font-size: 25px;
    line-height: 80px;
  }
  .mian {
    width: 100%;
    height: auto;
    background-color: #ffffff;
    margin:  0 auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .hang1 {
    width: calc(100% - 30px);
    height: 80px;
    margin: 15px;
  }
  .sousuo1 {
    width: 100%;
    height: 30px;
    margin: 10px 0;
    display: flex;
    color: #797979;
  }
  .sousuo1 > div {
    width: calc(25% - 20px);
    height: 100%;
    display: flex;
    margin: 0 10px;
    align-items: center;
    border-radius: 5px;
    background-color:#f8f8f8;
  }
  .sousuoname {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sousuoneirong{
    width: 70%;
    height: 100%;
  }
  .sousuoneirong input {
    width: 100%;
    height: 100%;
    background-color:#f8f8f8;
    border: 0;
    border-radius: 5px;
    border-left: 1px solid #f8f8f8;
  }
  .dandulei {
    height: 30px;
  }
  

  .hang2 {
    width: calc(100% - 30px);
    height: 50px;
    margin: 15px;
  }
  .hang2 span {
    margin: 0 10px;
  }


  .hang3 {
    width: calc(100% - 30px);
    height: auto;
    margin: 15px;
  }
  .fenye {
    width: 100%;
    height: 50px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<style>
  .sousuoneirong .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
  .sousuoneirong .el-input__icon {
    line-height: 30px;
  }
  .sousuoneirong .el-popover {
    min-width: 60px;
  }
  .table-fon-size {
    font-size: 10px;
  }
  .hang3 .el-table {
    font-size: 5px;
  }
</style>