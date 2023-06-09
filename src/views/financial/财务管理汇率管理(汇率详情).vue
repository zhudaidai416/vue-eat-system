<template>
  <!-- <div class="yemian"> -->
    <!-- <div class="tou"><span><strong>账户列表</strong></span></div> -->
    <div class="mian">
     <div class="kuai">
      <span>
        <div><i class="el-icon-caret-right" style="color: #4e73df;"></i><strong style="font-size: 14px;">基本信息</strong></div>
        <div>汇率ID：</div>
        <div>基本币：</div>
        <div>当日基准汇率：</div>
        <div>系统计算汇率：</div>
        <div>系统汇率公式：</div>
        <div>有效时间：</div>
        <div>状态：</div>
        <div>备注：</div>
      </span>
      <span>
        <div>&nbsp;</div>
        <div>{{admin.id}}</div>
        <div v-if="admin.baseCurrency = 0">人民币</div>
        <div v-if="admin.baseCurrency = 1">美元</div>
        <div>{{admin.currentDayExchangeRate}}</div>
        <div>{{admin.systemExchangeRate}}</div>
        <div>{{admin.exchangeRateFormula}}</div>
        <div>{{admin.startValidTime}}至{{admin.endValidTime}}</div>
        <div v-if="admin.status==0">使用中</div>
        <div v-if="admin.status==1">已过期</div>
        <div>{{admin.remark}}</div>
      </span>
     </div>
     <div class="kuai" style="flex-direction: column;">
        <span>
          <div><i class="el-icon-caret-right" style="color: #4e73df;"></i><strong style="font-size: 14px;">外汇记录</strong></div>
        </span>
        <div>
          <el-table
          :header-cell-style="{background:'#eef1fc'}"
          :data="list"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="id"
            label="序号"
            width="150px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="balance"
            label="基本币"
            width="150px">
            <template slot-scope="scope">
              <div v-if="(scope.row.baseCurrency)==0">人民币</div>
              <div v-if="(scope.row.baseCurrency)==1">美元</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="tradeCurrency"
            label="交易币"
            width="150px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="tradeCurrencyUnit"
            label="交易币单位"
            width="150px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="purchasePrice"
            label="现汇买入价"
            width="160px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="sellPrice"
            label="现汇卖出价"
            width="160px">
          </el-table-column>
          <el-table-column
            align="center"
            prop="releaseTime"
            label="发布时间"
            width="160px">
          </el-table-column>
        </el-table>
        </div>
        <div class="fenye">
          <div>
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="dangqianpage"
                :page-sizes="[1, 2, 3, 4]"
                :page-size="10"
                background
                layout="sizes, prev, pager, next"
                :total="5">
              </el-pagination>
            </div>
          </div>
        </div>
     </div>
    </div>
  <!-- </div> -->
</template>

<script>
  export default {
    name:'tixianno',
    data() {
      return {
        admin:[],
        adminlist:[],
        list:[],
        dangqianpage:1,
        pageSize:1,
        currentPage:1
      }
    },
    methods:{
      // 多少条一页
      handleSizeChange(val){
        this.pageSize = val
        this.datashow()
      },
      // 当前多少页点击
      handleCurrentChange(val){
        this.currentPage = val
        this.fenye()
        
      },
      fenye(){
        let index = (this.currentPage-1)*this.pageSize
        let arr = JSON.parse(JSON.stringify( this.adminlist))
        console.log(arr);
        this.list = arr.slice(index,index+this.pageSize)
        // console.log( this.list);
        // console.log(this.adminlist);
      },
      async datashow(){
        return this.$axios({
          method:'get',
          url:'/exchangerate/selectExchangeRateById',
          params:{
            id:this.$route.query.id
          }
        })
        .then(res=>{
          this.adminlist = res.data.recordList
          this.admin = res.data.exchangeRateManagement
          this.fenye()
        })
        .catch(err=>{
          console.log(err);
        })
      }
    },
    mounted(){
      this.admin.huilvid = this.$route.query.id
      this.datashow()
    }
  }
</script>

<style scoped>
  .mian {
    width: 100%;
    height: auto;
    background-color: #ffffff;
    margin:  0 auto;
    border-radius: 10px;
    overflow: hidden;
    font-size: 13px;
  }
  .kuai {
    margin: 20px;
    display: flex;
  }
  .kuai div {
    margin: 20px 0;
  }
  .kuai span {
    width: auto;
    min-width: 80px;
    margin-right: 40px;
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

</style>