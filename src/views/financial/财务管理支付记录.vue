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
            <span class="sousuoname">订单类型</span>
            <span class="sousuoneirong">
              <el-select v-model="dingdanvalue" placeholder="全部">
                <el-option
                  v-for="item in dingdan"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
          </div>
          <div>
            <span class="sousuoname">昵称名称</span>
            <span class="sousuoneirong"><input type="text" placeholder="请输入昵称名称" v-model="nickname"></span>
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
          <el-button type="warning" @click="chongzhi">重置</el-button>
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
          :data="listshow"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="jiaoyihao"
            label="交易号"
            width="110px">
            <template slot-scope="scope">
              <a style="color: blue;cursor: pointer;" @click="xiangxi(scope.row.jiaoyihao)">{{scope.row.jiaoyihao}}</a>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="dingdanleixing"
            label="订单类型"
            width="80px">
            <template slot-scope="scope">
              <div v-if="scope.row.dingdanleixing == 1">外卖订单</div>
              <div v-if="scope.row.dingdanleixing == 2">到店自取</div>
              <div v-if="scope.row.dingdanleixing == 3">团购订单</div>
              <div v-if="scope.row.dingdanleixing == 4">商家报名活动</div>
              <div v-if="scope.row.dingdanleixing == 5">配送员服装</div>
              <div v-if="scope.row.dingdanleixing == 6">配送餐箱</div>
              <div v-if="scope.row.dingdanleixing == 7">配送员押金</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="dingdanhao"
            label="订单号"
            width="120px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="name"
            label="昵称名称"
            width="160px">
            <template slot-scope="scope">
            <!-- <template slot-scope="scope"> -->
              <!-- <a @click="iii(scope.row.ID)" ></a> -->
              <div style="width: 100%;height: 50px; display: flex;">
                <div style="line-height: 50px;" v-show="(scope.row.leixing==0||scope.row.leixing==1)"><span style="background-color: #a7b9ef;border-radius: 5px;">会员</span></div>
                <div style="line-height: 50px;" v-show="(scope.row.leixing==2)"><span style="background-color: #ffc266;border-radius: 5px;">商家</span></div>
                <div style="line-height: 50px;" v-show="(scope.row.leixing==3||scope.row.leixing==4)"><span style="background-color: #ec808d;border-radius: 5px;">骑手</span></div>
                <div>
                  <div>{{scope.row.name}}</div>
                  <div>{{scope.row.shouji}}</div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="yinfukuan"
            label="应付款"
            width="60px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="zhifufangshi"
            label="支付方式"
            width="80px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="bizhong"
            label="支付币种"
            width="80px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="shifukuan"
            label="实付款"
            width="80px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="huilv"
            label="汇率"
            width="110px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="createtime"
            label="创建时间"
            width="90px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="outtime"
            label="完成时间"
            width="90px">
            <template  slot-scope="scope">
              <div v-if="scope.row.state != 1">{{scope.row.outtime}}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="state"
            label="状态"
            width="60px">
            <template  slot-scope="scope">
              <div v-show="scope.row.state == 1">支付中</div>
              <div v-show="scope.row.state == 2">支付成功</div>
              <div v-show="scope.row.state == 3">支付失败</div>
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
                :page-size="pageSize"
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
  // import {mapActions} from 'vuex'
  import { zhifuData } from "../../store/zsl_store/data";
  export default {
    name:'zhanghujilu',
    data() {
      return {
        phone:'',
        nickname:'',
        dingdan: [{
          value: 1,
          label: '外卖订单'
        }, {
          value: 2,
          label: '到店自取'
        }, {
          value: 3,
          label: '团购订单'
        }, {
          value: 4,
          label: '商家报名活动'
        },{
          value: 5,
          label: '配送员服装'
        },{
          value: 6,
          label: '配送餐箱'
        },{
          value: 7,
          label: '配送员押金'
        }],
        dingdanvalue: '',
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
        zhuangtailist: [ 
        {
          value: 1,
          label: '支付中'
        },{
          value: 2,
          label: '支付成功'
        },{
          value: 3,
          label: '支付失败'
        }],
        zhuangtai: '',
        list: [],
        listshow:[],
        currentPage:1,
        pageSize:1,
        maxpage:null,
        transactionNo:'',
        new_issuesTableData:[]
      }
    },
    methods:{
      // 每页多少条
      handleSizeChange(val) {
        this.pageSize = val
        this.showData()
      },
      // 当前在第几页切换
      handleCurrentChange(val) {
        this.currentPage = val
        this.showData()
      },
      xiangxi(id){
        this.$router.push({
          path:"/paymentRecordsxiangxi",
          query:{
            id:id
          }
        })
      },
      async getData(){
       await zhifuData()
            .then(res=>{
                sessionStorage.setItem('zhifu',JSON.stringify(res));
            })
            .catch(err=>{
                console.log(err);
            }) 
      },
      // 搜索
      sousuo(){
        this.showData()
      },
      // 重置
      chongzhi(){
        this.transactionNo = ''
        this.dingdanvalue = ''
        this.nickname = ''
        this.phone = ''
        this.createtime = ''
        this.zhuangtai = ''
        this.showData()
      },
      // 渲染表格
      showData(){
        // 条件
        this.new_issuesTableData = this.list.filter(item => {
              let transactionNo = true; //交易号
              let dingdanvalue = true; //订单类型
              let nickname = true; //昵称
              let phone = true; //电话
              let createtime = true; //创建时间
              let zhuangtai = true; //状态

              if(this.transactionNo) {
                transactionNo = (item.jiaoyihao == this.transactionNo)
              }
              if(this.dingdanvalue) {
                dingdanvalue = (item.dingdanleixing == this.dingdanvalue)
              }
              if(this.nickname) {
                nickname = (item.name == this.nickname)
              }
              if(this.phone) {
                phone = (item.shouji == this.phone)
              }
              if(this.createtime) {
                createtime = (item.createtime == this.createtime)
              }
              if(this.zhuangtai) {
                zhuangtai = (item.state == this.zhuangtai)
              }
              return transactionNo && dingdanvalue && nickname && zhuangtai && phone && createtime
          })


        // console.log(this.transactionNo);
        // console.log(this.dingdanvalue);
        // console.log(this.nickname);
        // console.log(this.phone);
        // console.log(this.createtime);
        // console.log(this.zhuangtai);



        //分页
        let page = (this.currentPage-1)*this.pageSize
        this.listshow = this.new_issuesTableData.slice(page,page+this.pageSize)
      }
    },
    mounted(){
      this.getData()
      this.list = JSON.parse(sessionStorage.getItem('zhifu'))
      this.maxpage = this.list.length
      this.showData()
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
  .hang3 .el-table {
    font-size: 12px;
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
  .hang3 .el-table .cell {
    padding: 0 2px;
  }
</style>