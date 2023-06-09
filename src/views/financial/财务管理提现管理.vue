<template>
  <!-- <div class="yemian"> -->
    <!-- <div class="tou"><span><strong>账户列表</strong></span></div> -->
    <div class="mian">
      <!-- 第一行搜索类 -->
      <div class="hang1">
        <div class="sousuo1">
          <div>
            <span class="sousuoname">交易号</span>
            <span class="sousuoneirong"><input type="text" placeholder="请输入交易号"></span>
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
            <span class="sousuoname">申请人</span>
            <span class="sousuoneirong"><input type="text" placeholder="请输入申请人真实姓名"></span>
          </div>
          <div>
            <span class="sousuoname">手机号码</span>
            <span class="sousuoneirong"><input type="text" placeholder="请输入手机号码"></span>
          </div>
        </div>
        <div class="sousuo1">
          <div>
            <span class="sousuoname">银行卡号</span>
            <span class="sousuoneirong"><input type="text" placeholder="请输入银行卡号"></span>
          </div>
          <div>
            <span class="sousuoname">申请时间</span>
            <span class="sousuoneirong">
              <el-select v-model="shenqingtime" placeholder="全部">
                <el-option
                  v-for="item in shenqingtimelist"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
          </div>
          <div>
            <span class="sousuoname">提现状态</span>
            <span class="sousuoneirong">
              <el-select v-model="tixian" placeholder="全部">
                <el-option
                    v-for="item in tixianlist"
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
          <el-button type="primary">搜索</el-button>
        </span>
      </div>
      <!-- 第二行按钮 -->
      <!-- 第三行表格 -->
      <div class="hang3">
        <hr style="border:1px dotted #e4e4e4" />
        <div style="margin: 20px 0px;">
          <el-button round style="border: 1px solid #5377e0;"><i class="el-icon-download"></i>导出提现待办</el-button>
          <el-button round style="border: 1px solid #5377e0;" @click="tixiankuang = true"><i class="el-icon-s-tools"></i>提现设置</el-button>

          <!-- 提现设置弹出框 -->
          <el-dialog title="提现设置" class="setmodal" :visible.sync="tixiankuang">
            <p>可按用户类型设置手续费与提现限额。每次只能能保存一个类型~</p>
            <div style="width: 100%;height: 100%;display: flex;">
              <span class="settext">
                <div>用户类型：</div>
                <div>提现费率:</div>
                <div>单笔最低手续费：</div>
                <div>单笔最高手续费：</div>
                <div>单笔最小限额：</div>
                <div>单笔最大限额：</div>
                <div>每日限额：</div>
              </span>
              <span class="setneirong">
                <div>
                    <el-select v-model="tixianset.yonghuleixing" placeholder="请选择">
                      <el-option
                        v-for="item in tixianset.yonghuleixinglist"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </div>
                <div>
                  <el-input-number v-model="tixianset.tixianfeilv" :precision="2" :step="0.1"></el-input-number>
                </div>
                <div>
                  <el-input-number v-model="tixianset.zuidi" :precision="2" :step="1"></el-input-number>
                </div>
                <div>
                  <el-input-number v-model="tixianset.zuigao" :precision="2" :step="10"></el-input-number>
                </div>
                <div>
                  <el-input-number v-model="tixianset.zuixiao" :precision="2" :step="1"></el-input-number>
                </div>
                <div>
                  <el-input-number v-model="tixianset.zuida" :precision="2" :step="1000"></el-input-number>
                </div>
                <div>
                  <el-input-number v-model="tixianset.meiri" :precision="2" :step="1000"></el-input-number>
                </div>
              </span>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button @click="tixiankuang = false">取 消</el-button>
              <el-button type="primary" @click="tixiankuang = false">确 定</el-button>
            </div>
          </el-dialog>

        </div>
        <el-table
          :header-cell-style="{background:'#eef1fc'}"
          :data="adminlist"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="ID"
            label="交易号"
            width="110px">
            <template slot-scope="scope">
              <div style="color: blue;cursor: pointer;" @click="tixianhao(scope.row.state,scope.row.ID)">{{scope.row.ID}}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="name"
            label="昵称名称"
            width="140px">
            <template slot-scope="scope">
            <!-- <template slot-scope="scope"> -->
              <!-- <a @click="iii(scope.row.ID)" ></a> -->
                <div style="width: 100%;height: 50px; display: flex;    justify-content: center;">
                  <div style="line-height: 50px;" v-show="(scope.row.xinxi.leixin==1)"><span style="background-color: #a7b9ef;border-radius: 5px;">会员</span></div>
                  <div style="line-height: 50px;" v-show="(scope.row.xinxi.leixin==2)"><span style="background-color: #ffc266;border-radius: 5px;">商家</span></div>
                  <div style="line-height: 50px;" v-show="(scope.row.xinxi.leixin==3)"><span style="background-color: #ec808d;border-radius: 5px;">店铺</span></div>
                  <div>
                    <div>{{scope.row.xinxi.name}}</div>
                    <div>{{scope.row.xinxi.dianhua}}</div>
                  </div>
                </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="Withdrawal"
            label="提现方式"
            width="80px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="number"
            label="银行卡号"
            width="150px">
            <template slot-scope="scope">
            <!-- <template slot-scope="scope"> -->
              <!-- <a @click="iii(scope.row.ID)" ></a> -->
              <div>
                  <div>{{scope.row.number.kahao}}</div>
                  <div>{{scope.row.number.name}}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="shoujihao"
            label="预留手机号"
            width="120px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="tixianjine"
            label="提现金额"
            width="90px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="dakuanjine"
            label="打款金额"
            width="80px">
            <template slot-scope="scope">
            <!-- <template slot-scope="scope"> -->
              <!-- <a @click="iii(scope.row.ID)" ></a> -->
              <div>
                  <div>{{scope.row.dakuanjine.num}}</div>
                  <div>{{scope.row.dakuanjine.value}}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="shenqingshijian"
            label="申请时间"
            width="80px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="chulishijian"
            label="处理时间"
            width="80px">
            <template slot-scope="scope">
              <div v-if="(scope.row.state)!=1">{{scope.row.chulishijian}}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="state"
            label="状态"
            width="80px">
            <template slot-scope="scope">
              <div style="color: blue;" v-if="(scope.row.state)==1">提现中</div>
              <div style="color: greenyellow;" v-if="(scope.row.state)==2">提现成功</div>
              <div style="color: red;" v-if="(scope.row.state)==3">提现失败</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="operate"
            label="操作"
            width="80px"
            cell-click="iii">
            <template slot-scope="scope">
            <!-- <template slot-scope="scope"> -->
              <!-- <a @click="iii(scope.row.ID)" ></a> -->
              <el-popover
                placement="top"
                width="60px">
                  <div @click="iii(scope.row.ID)" style="cursor: pointer;"><i class="el-icon-s-order" style="font-size: 20px;color: blue;"></i>查看并处理</div>
                <button style="height: 50px; border: 0;background-color: rgba(0, 0, 0, 0);" slot="reference"><i class="el-icon-more" style="font-size: 25px;"></i></button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
        <div class="fenye">
          <div>
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="dangqianpage"
                :page-sizes="[1, 2, 3, 4]"
                :page-size="100"
                background
                layout="sizes, prev, pager, next"
                :total="1000">
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
    name:'tixianguanli',
    data() {
      return {
        viplist: [{
          value: '选项1',
          label: '全部'
        }, 
        {
          value: '选项2',
          label: '普通会员'
        },{
          value: '选项3',
          label: 'VIP会员'
        }, {
          value: '选项4',
          label: '商家店铺'
        }, {
          value: '选项5',
          label: '配送站'
        }, {
          value: '选项6',
          label: '配送员'
        }],
        vip: '',
        shenqingtimelist: [{
          value: '选项1',
          label: '全部'
        }, 
        {
          value: '选项2',
          label: '近三个月'
        },{
          value: '选项3',
          label: '今年内'
        }, {
          value: '选项4',
          label: '2021年'
        }, {
          value: '选项5',
          label: '2020年'
        }, {
          value: '选项6',
          label: '2020年以前'
        }],
        shenqingtime: '',
        tixianlist: [{
          value: '选项1',
          label: '全部'
        }, 
        {
          value: '选项2',
          label: '待审核'
        },{
          value: '选项3',
          label: '提现中'
        },{
          value: '选项4',
          label: '提现成功'
        },{
          value: '选项5',
          label: '提现失败'
        },{
          value: '选项6',
          label: '交易关闭'
        }],
        tixian: '',
        adminlist: [{
            ID: '13232964103508',
            xinxi: {
              name:'王小虎',
              leixin:1,
              dianhua:'1345125123'
            },
            Withdrawal:'外卖订单',
            number:{
              kahao:'12314123123124123123',
              name:'招商银行'
            },
            shoujihao:'12314123123123',
            tixianjine:'₱1000.00',
            dakuanjine:{
              num:'₱950.00',
              value:'(手续费:₱50)'
            },
            shenqingshijian:'2020-20-20 18:21:22',
            chulishijian:'2020-20-20 18:21:22',
            state:1,
          },{
            ID: '13232964103508',
            xinxi: {
              name:'王小虎',
              leixin:3,
              dianhua:'1345125123'
            },
            Withdrawal:'外卖订单',
            number:{
              kahao:'12314123123124123123',
              name:'招商银行'
            },
            shoujihao:'12314123123123',
            tixianjine:'₱1000.00',
            dakuanjine:{
              num:'₱950.00',
              value:'(手续费:₱50)'
            },
            shenqingshijian:'2020-20-20 18:21:22',
            chulishijian:'2020-20-20 18:21:22',
            state:2,
          },{
            ID: '13232964103508',
            xinxi: {
              name:'王小虎',
              leixin:2,
              dianhua:'1345125123'
            },
            Withdrawal:'外卖订单',
            number:{
              kahao:'12314123123124123123',
              name:'招商银行'
            },
            shoujihao:'12314123123123',
            tixianjine:'₱1000.00',
            dakuanjine:{
              num:'₱950.00',
              value:'(手续费:₱50)'
            },
            shenqingshijian:'2020-20-20 18:21:22',
            chulishijian:'2020-20-20 18:21:22',
            state:3,
          },{
            ID: '13232964103508',
            xinxi: {
              name:'王小虎',
              leixin:1,
              dianhua:'1345125123'
            },
            Withdrawal:'外卖订单',
            number:{
              kahao:'12314123123124123123',
              name:'招商银行'
            },
            shoujihao:'12314123123123',
            tixianjine:'₱1000.00',
            dakuanjine:{
              num:'₱950.00',
              value:'(手续费:₱50)'
            },
            shenqingshijian:'2020-20-20 18:21:22',
            chulishijian:'2020-20-20 18:21:22',
            state:2,
          },],
        dangqianpage:null,
        tixiankuang: false,
        tixianset:{
          yonghuleixinglist:[
          {
            value: '选项1',
            label: '请选择'
          }, 
          {
            value: '选项2',
            label: '会员'
          },{
            value: '选项3',
            label: '商家'
          },{
            value: '选项4',
            label: '配送员'
          }],
          yonghuleixing:'',
          tixianfeilv:0.1,
          zuidi:1,
          zuigao:100,
          zuixiao:10,
          zuida:4000,
          meiri:5000
          }
      }
    },
    methods:{
      iii(id){
        console.log(id)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      tixianhao(state,id){
        if(state == 1){
          this.$router.push({
          path:"/cashManagementing",
          query:{
            id:id
          }
        })
        }else if(state == 2){
          this.$router.push({
          path:"/cashManagementok",
          query:{
            id:id
          }
        })
        }else{
          this.$router.push({
            path:"/cashManagementno",
            query:{
              id:id
            }
          })
        }
      }
    },
    mounted(){
      // this.$axios({
      //   method:'get',
      //   url:'/withdrawal/selectWithdrawalList',
      //   params:{
      //     currentPage:1,
      //     pageSize:this.pageSize
      //   }
      // })
      // .then(res=>{
      //   console.log(res);
      //   this.adminlist = res.data.totalData
      //   this.huilv = res.data.totalData[0].floatingRedLine
      // })
      // .catch(err=>{
      //   console.log(err);
      // })
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
  .settext>div{
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .setneirong {
    width: 50%;
    height: auto;
    margin-left: 40px;
  }
  .setneirong > div {
    width: 100%;
    height: 40px;
    margin: 10px;
  }
  .setneirong  .el-input-number {
    width: 300px;
  }
  .setneirong .el-select {
    width: 300px;
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
  .table-fon-size {
    font-size: 10px;
  }
  .hang3 .el-table {
    font-size: 5px;
  }
  .setmodal .el-dialog {
    width: 35%;
    height: 600px;
  }
</style>