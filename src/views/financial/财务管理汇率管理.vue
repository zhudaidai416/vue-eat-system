<template>
  <!-- <div class="yemian"> -->
    <!-- <div class="tou"><span><strong>账户列表</strong></span></div> -->
    <div class="mian">
      <!-- 第一行搜索类 -->
      <div class="hang1">
        <div class="sousuo1">
          <div>
            <span class="sousuoname">基本币</span>
            <span class="sousuoneirong">
              <el-select v-model="jibenbi" placeholder="全部">
                <el-option
                  v-for="item in jibenbilist"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
          </div>
          <div>
            <span class="sousuoname">生效时间</span>
            <span class="sousuoneirong">
              <el-select v-model="shengxiaoshijian" placeholder="全部">
                <el-option
                  v-for="item in shengxiaoshijianlist"
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
          <el-button type="primary" @click="chaxun">搜索</el-button>
        </span>
      </div>
      <!-- 第二行按钮 -->
      <!-- 第三行表格 -->
      <div class="hang3">
        <div class="huilvset" v-if="state == false">
          <span>汇率浮动红线：</span>
          <span>
            <el-input-number v-model="huilv" :min="1" :max="99" label="%"></el-input-number>
            <span>%</span>
          </span>
          <span style="color: blue;cursor: pointer;" @click="showinputok">确定</span>
          <span style="color: blue;cursor: pointer;" @click="showinputno">取消</span>
        </div>
        <div class="huilvset" v-if="state == true">
          <span>汇率浮动红线：</span>
          <span>
            <el-input
              placeholder="请输入内容"
              v-model="huilv"
              :disabled="true">
            </el-input>
            <span>%</span>
          </span>
          <span style="color: blue;cursor: pointer;" @click="showinput">修改</span>
        </div>
        <el-table
          :header-cell-style="{background:'#eef1fc'}"
          :data="adminlist"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="id"
            label="ID"
            width="160px">
            <template slot-scope="scope">
              <div style="color: blue;" @click="huilvguanli(scope.row.id)">{{scope.row.id}}</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="baseCurrency"
            label="基本币"
            width="60px">
            <template slot-scope="scope">
              <div v-if="(scope.row.baseCurrency)==0">人民币</div>
              <div v-if="(scope.row.baseCurrency)==1">美元</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="systemExchangeRate"
            label="系统计算汇率"
            width="150px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="currentDayExchangeRate"
            label="当日基准汇率"
            width="120px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="time"
            label="有效时间"
            width="280px">
            <template slot-scope="scope">
              <span>{{scope.row.startValidTime}}</span>至
              <span>{{scope.row.endValidTime}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="status"
            label="状态"
            width="80px">
            <template slot-scope="scope">
              <div v-if="(scope.row.status)==0">使用中</div>
              <div v-if="(scope.row.status)==1">已过期</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="remark"
            label="备注"
            width="240px">
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
                :page-size="pageSize"
                background
                layout="sizes, prev, pager, next,total"
                :total='max'>
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
        max:null,
        state:true,
        jibenbilist: [
        {
          value: 1,
          label: '美元'
        },{
          value: 0,
          label: '人民币'
        }],
        jibenbi: '',
        shengxiaoshijianlist: [
        {
          value: 0,
          label: '近三个月'
        },
        {
          value: 1,
          label: '今年内'
        },
        {
          value: 2,
          label: '2021年'
        },
        {
          value: 3,
          label: '2020年'
        },
        {
          value: 4,
          label: '2020年以前'
        }],
        shengxiaoshijian: '',
        adminlist: [],
        dangqianpage:null,
        huilv:null,
        huilvhuancun:null,
        pageSize:1,
        currentPage:1,
        maxpage:null,
        list:[]
      }
    },
    methods:{
      // 一页多少条
      handleSizeChange(val) {
        this.pageSize = val;
        this.fenye()
      },
      // 切换页数
      handleCurrentChange(val) {
        this.currentPage = val
        this.fenye()
      },
      showinput(){
          this.state = !this.state
          this.huilvhuancun = this.huilv
      },
      showinputok(){
        this.state = !this.state
        this.$axios({
          method:'post',
          url:'/exchangerate/updateExchangeRateRedLine',
          data:{
            floatingRedLine: this.huilv
          }
        })
        .then(res=>{
          console.log(res,1111111111111111111);
        })
        .catch(err=>{
          console.log(err);
        })
      },
      showinputno(){
        this.state = !this.state
        this.huilv = this.huilvhuancun
      },
      huilvguanli(id){
        this.$router.push({
          path:"/exchangeRateManagementxiangqing",
          query:{
            id:id
          }
        })
      },
      chaxun(){
        console.log(this.jibenbi);
        console.log(this.shengxiaoshijian);
        this.fenye()
      },
      chongzhi(){
        this.jibenbi = '',
        this.shengxiaoshijian = ''
        this.fenye()
      },
      async fenye(){
        this.$axios({
          method:'get',
          url:'/exchangerate/selectExchangeRate',
          params:{
            currentPage:this.currentPage,
            pageSize:this.pageSize,
            baseCurrency:this.jibenbi,
            timeNo:this.shengxiaoshijian
          }
        })
        .then(res=>{
          console.log(res);
          this.max = res.data.totalSize
          this.adminlist = res.data.totalData
          this.huilv = res.data.totalData[0].floatingRedLine
        
        })
        .catch(err=>{
          console.log(err);
        })
      }
    },
    mounted(){
      this.fenye()
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
    height: 40px;
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
    border-bottom: 1px solid #e4e4e4;
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
  .huilvset{
    padding: 10px;
  }
  .huilvset > span {
    margin: 0 10px;
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
  .hang3 .el-input {
    width: 180px;
  }
</style>