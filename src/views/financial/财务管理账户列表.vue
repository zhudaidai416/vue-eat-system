<template>
  <!-- <div class="yemian"> -->
    <!-- <div class="tou"><span><strong>账户列表</strong></span></div> -->
    <div class="mian">
      <!-- 第一行搜索类 -->
      <div class="hang1">
        <div class="sousuo1">
          <div>
            <span class="sousuoname">用户ID</span>
            <span class="sousuoneirong"><input type="text" placeholder="请输入ID" v-model="id"></span>
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
          :data="list"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="id"
            label="ID"
            width="120px">
            <template slot-scope="scope">
              <span @click="zhanghu" style="color: blue;">{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column
            class-name="table-fon-size"
            align="center"
            prop="nickname"
            label="昵称名称"
            width="160px">
            <template slot-scope="scope">
            <!-- <template slot-scope="scope"> -->
              <!-- <a @click="iii(scope.row.ID)" ></a> -->
              <div style="width: 100%;height: 50px; display: flex;">
                <div style="line-height: 50px;" v-show="(scope.row.accountType==0||scope.row.accountType==1)"><span style="background-color: #a7b9ef;border-radius: 5px;">会员</span></div>
                <div style="line-height: 50px;" v-show="(scope.row.accountType==2)"><span style="background-color: #ffc266;border-radius: 5px;">商家</span></div>
                <div style="line-height: 50px;" v-show="(scope.row.accountType==4)"><span style="background-color: #ec808d;border-radius: 5px;">店铺</span></div>
                <div style="line-height: 50px;" v-show="(scope.row.accountType==3)"><span style="background-color: #68d966;border-radius: 5px;">站点</span></div>
                <div>
                  <div>{{scope.row.nickname}}</div>
                  <div>{{scope.row.phone}}</div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="accountBalance"
            label="账户余额"
            width="120px">
            <template slot-scope="scope">
              <div v-if="scope.row.accountType==0||scope.row.accountType==1||scope.row.accountType==3">0</div>
              <div v-else>{{scope.row.accountBalance}}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="availableBalance"
            label="可用余额"
            width="120px">
            <template slot-scope="scope">
              <div v-if="scope.row.accountType==0||scope.row.accountType==1||scope.row.accountType==3">0</div>
              <div v-else>{{scope.row.accountBalance}}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="receivedAmount"
            label="待收"
            width="120px">
            <template slot-scope="scope">
              <div v-if="scope.row.accountType==0||scope.row.accountType==1||scope.row.accountType==3">0</div>
              <div v-else>{{scope.row.accountBalance}}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="frozenAmount"
            label="冻结"
            width="120px">
            <template slot-scope="scope">
              <div v-if="scope.row.accountType==0||scope.row.accountType==1||scope.row.accountType==3">0</div>
              <div v-else>{{scope.row.accountBalance}}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="createTime"
            label="创建时间"
            width="160px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="status"
            label="状态"
            width="80px">
            <template slot-scope="scope">
              <span v-if="scope.row.status == 0">已禁用</span>
              <span v-if="scope.row.status == 1">正常</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="operate"
            label="操作"
            width="80px">
            <template slot-scope="scope">
            <!-- <template slot-scope="scope"> -->
              <!-- <a @click="iii(scope.row.ID)" ></a> -->
              <el-popover
                placement="top"
                width="60px">
                  <div v-if="scope.row.status == 1" style="cursor: pointer;">
                    <i class="el-icon-lock" style="font-size: 20px;color: yellow;"></i>
                    <el-button type="text" @click="dongjietrue(scope.row.id)">冻结账户</el-button></div>
                  <div v-else style="cursor: pointer;">
                    <i class="el-icon-unlock" style="font-size: 20px;color: blue;"></i>
                    <el-button type="text" @click="jiedongtrue(scope.row.id)">解冻账户</el-button></div>
                <button style="height: 50px; border: 0;background-color: rgba(0, 0, 0, 0);" slot="reference"><i class="el-icon-more" style="font-size: 25px;cursor: pointer;"></i></button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>

        <!-- 冻结账户模态框 -->
        <el-dialog
          title="确定冻结该账户?"
          :visible.sync="dongjiezhanghu"
          width="30%">
          <div class="dongjiezhanghu">
            <div>用户账户被冻结后将无法提现,充值,请慎重操作！</div>
            <div>
              <span style="line-height: 0px;">冻结原因:</span>
              <span>
                <template>
                  <el-select v-model="dongjieyuanying" placeholder="请选择原因">
                    <el-option
                      v-for="item in dongjieyuanyinglist"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </span>
            </div>
            <div>
              <span style="vertical-align: top;">补充说明:</span>
              <span>
                <el-input
                  type="textarea"
                  maxlength="200"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder="请输入中文补充说明"
                  v-model="yuanyin1">
                </el-input>
              </span>
              <span style="font-size: 10px;">{{yuanyin1.length}}/200 (选填)</span>
              <span>
                <el-input
                  style="margin-left: 60px;margin-top: 10px;"
                  type="textarea"
                  maxlength="500"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder="请输入中文补充说明"
                  v-model="yuanyin2">
                </el-input>
              </span>
              <span style="font-size: 10px;">{{yuanyin2.length}}/500 (选填)</span>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dongjiezhanghu = false">取 消</el-button>
            <el-button type="primary" @click="dongjieyonghu">确 定</el-button>
          </span>
        </el-dialog>



        <!-- 解冻账户模态框 -->
        <el-dialog
          title="确定解冻该账户?"
          :visible.sync="jiedongzhanghu"
          width="30%">
          <div class="dongjiezhanghu">
            <p>用户账户被解冻后将回复提现.充值.请慎重操作!</p>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="jiedongzhanghu = false">取 消</el-button>
            <el-button type="primary" @click="jiedongyonghu">确 定</el-button>
          </span>
        </el-dialog>





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
                layout="sizes, prev, pager, next,total"
                :total="maxdata">
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
        phone:'',
        id:'',
        nickname:'',
        dongjieyuanyinglist:[
          {
            value:'原因1',
            label:'冻结原因一冻结原因一'
          },
          {
            value:'原因2',
            label:'冻结原因二冻结原因二'
          },
          {
            value:'原因3',
            label:'冻结原因三冻结原因三'
          }
        ],
        dongjieyuanying:'',
        dongjiezhanghu:false,
        jiedongzhanghu:false,
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
        vip: null,
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
        createtime: null,
        zhuangtailist: [ 
        {
          value: 1,
          label: '正常'
        },{
          value: 0,
          label: '已禁用'
        }],
        zhuangtai: null,
        list: [],
        yuanyin1:'',
        yuanyin2:'',
        currentPage:1,
        pageSize:1,
        maxdata:null,
        idhuancun:null
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
      zhanghu(){
        console.log('暂无跳转');
      },
      // 条件分页查询
      datashow(){
        this.$axios({
          method:'get',
          url:'/accountList/selectAccount',
          params:{
            currentPage:this.currentPage,
            pageSize:this.pageSize,
            nickname:this.nickname,
            id:this.id,
            accountType:this.vip,
            phone:this.phone,
            timeNo:this.createtime,
            status:this.zhuangtai
          }
        })
        .then(res=>{
          console.log(res);
          this.maxdata = res.data.totalSize
          this.list = res.data.totalData
        })
        .catch(err=>{
          console.log(err);
        })
      },
      // 用户搜索
      sousuo(){
        this.datashow()
      },
      // 用户重置
      chongzhi(){
        this.nickname = '',
        this.id = '',
        this.vip = null,
        this.phone = '',
        this.createtime = null,
        this.zhuangtai = null
        this.datashow()
      },
      // 打开冻结用户模态框
      dongjietrue(id){
        this.dongjiezhanghu = true
        this.idhuancun = id
      },
      // 冻结用户
      dongjieyonghu(){
        this.dongjiezhanghu = false
        this.$axios({
          method:'post',
          url:'/accountList/updateAccountFrozen',
          data:{
            id:this.idhuancun,
            frozenReason: this.dongjieyuanying,
            chRemark: this.yuanyin1,
            enRemark: this.yuanyin2
          }
        })
        .then(res=>{
          console.log(res);
          this.datashow()
          this.dongjieyuanying = '',
          this.yuanyin1 = '',
          this.yuanyin2 = ''
        })
        .catch(err=>{
          console.log(err);
        })
      },
      // 打开解冻用户模态框
      jiedongtrue(id){
        this.jiedongzhanghu = true
        this.idhuancun = id
      },
      // 解冻用户
      jiedongyonghu(){
        this.jiedongzhanghu = false
        this.$axios({
          method:'post',
          url:'/accountList/updateAccountThaw',
          data:{
            id:this.idhuancun
          }
        })
        .then(res=>{
          console.log(res);
          this.datashow()
        })
        .catch(err=>{
          console.log(err);
        })
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
  .dongjiezhanghu > div {
    margin-bottom: 20px;
  }
  .dongjiezhanghu .el-textarea {
    width: 65%;
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