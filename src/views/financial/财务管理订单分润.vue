<template>
  <!-- <div class="yemian"> -->
    <!-- <div class="tou"><span><strong>账户列表</strong></span></div> -->
    <div class="mian">
      <div>
        <template>
        <el-tabs v-model="dangqianye" @tab-click="handleClick">
          <el-tab-pane label="订单商家分润" name="shangjia">
            

            <div>
              <!-- 第一行搜索类 -->
              <div class="hang1">
                <div class="sousuo1">
                  <div>
                    <span class="sousuoname">订单号</span>
                    <span class="sousuoneirong"><input type="text" placeholder="请输入订单号" v-model="dingdanhao"></span>
                  </div>
                  <div>
                    <span class="sousuoname">订单类型</span>
                    <span class="sousuoneirong">
                      <el-select v-model="dingdan" placeholder="全部">
                        <el-option
                          v-for="item in dingdanlist"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </span>
                  </div>
                  <div>
                    <span class="sousuoname">店铺名称</span>
                    <span class="sousuoneirong"><input type="text" placeholder="请输入店铺名称" v-model="mingceng"></span>
                  </div>
                  <div>
                    <span class="sousuoname">手机号码</span>
                    <span class="sousuoneirong"><input type="text" placeholder="请输入手机号码" v-model="shouji"></span>
                  </div>
                </div>
                <div class="sousuo1">
                  <div>
                    <span class="sousuoname">成交时间</span>
                    <span class="sousuoneirong">
                      <el-select v-model="chengjiaotime" placeholder="全部">
                        <el-option
                          v-for="item in chengjiaotimelist"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </span>
                  </div>
                  <div>
                    <span class="sousuoname">入账状态</span>
                    <span class="sousuoneirong">
                      <el-select v-model="ruzhang" placeholder="全部状态">
                        <el-option
                            v-for="item in ruzhanglist"
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
                  :data="list1"
                  style="width: 100%">
                  <el-table-column
                    align="center"
                    prop="dingdanhao"
                    label="订单号"
                    width="120px">
                    <template slot-scope="scope">
                        <div @click="pingtai(scope.row.dingdanhao)" style="color: blue;">{{scope.row.dingdanhao}}</div>
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
                    class-name="table-fon-size"
                    align="center"
                    prop="dianpumingcheng"
                    label="店铺名称"
                    width="180px">
                    <template slot-scope="scope">
                    <!-- <template slot-scope="scope"> -->
                      <!-- <a @click="iii(scope.row.ID)" ></a> -->
                        <div>
                          <div>{{scope.row.dianpuname}}</div>
                          <div>{{scope.row.shouji}}</div>
                        </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="dingdanjine"
                    label="订单金额"
                    width="100px">
                  </el-table-column>
                  <el-table-column
                    prop="peisongfei"
                    label="配送费"
                    width="120px">
                    <template slot-scope="scope">
                        <div v-if="(scope.row.peisongleixing == 1)">
                          <div>商家承担:{{scope.row.peisongfei}}</div>
                          <div style="width: 48px;height: 20px;border-radius: 5px;background-color: #fff0ee;color: #ff644d;">平台专送</div>
                        </div>
                        <div  v-else-if="(scope.row.peisongleixing == 2)">
                          <div>{{scope.row.peisongfei}}</div>
                          <div style="width: 48px;height: 20px;border-radius: 5px;background-color: #ebf2fe;color: #3478f6;">商家配送</div>
                        </div>
                        <div v-else>₱0.00</div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    class-name="table-fon-size"
                    align="center"
                    prop="jishufuwufei"
                    label="技术服务费"
                    width="110px">
                    <template slot-scope="scope">
                    <!-- <template slot-scope="scope"> -->
                      <!-- <a @click="iii(scope.row.ID)" ></a> -->
                        <div>
                          <div>服务费：{{scope.row.fuwufei}}</div>
                          <div>优惠：{{scope.row.youhui}}</div>
                        </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="pingtaibutie"
                    label="平台补贴"
                    width="80px">
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="shangjiashouru"
                    label="商家收入"
                    width="80px">
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="chengjiaotime"
                    label="成交时间"
                    width="80px">
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="ruzhangtime"
                    label="入账时间"
                    width="80px">
                    <template slot-scope="scope">
                      <div v-if="scope.row.state != 1">{{scope.row.ruzhangtime}}</div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="state"
                    label="状态"
                    width="80px">
                    <template slot-scope="scope">
                        <div>
                          <div v-if="scope.row.state == 1">结算中</div>
                          <div v-if="scope.row.state == 2">已入账</div>
                        </div>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="fenye">
                  <div>
                    <div class="block">
                      <el-pagination
                        @size-change="shangjiapage"
                        @current-change="shangjiacurrent"
                        :current-page.sync="dangqianpage"
                        :page-sizes="[1, 2, 3, 4]"
                        :page-size="pageSize"
                        background
                        layout="sizes, prev, pager, next,total"
                        :total="maxpage">
                      </el-pagination>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 第三行表格 -->
            </div>




          </el-tab-pane>
          <el-tab-pane label="订单平台分润" name="pingtai">


            <div>
              <!-- 第一行搜索类 -->
              <div class="hang1">
                <div class="sousuo1">
                  <div>
                    <span class="sousuoname">订单号</span>
                    <span class="sousuoneirong"><input type="text" placeholder="请输入订单号" v-model="dingdanhao1"></span>
                  </div>
                  <div>
                    <span class="sousuoname">订单类型</span>
                    <span class="sousuoneirong">
                      <el-select v-model="dingdan2" placeholder="全部">
                        <el-option
                          v-for="item in dingdanlist2"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </span>
                  </div>
                  <div>
                    <span class="sousuoname">配送方式</span>
                    <span class="sousuoneirong">
                      <el-select v-model="peisong" placeholder="全部">
                        <el-option
                          v-for="item in peisonglist"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </span>
                  </div>
                  <div>
                    <span class="sousuoname">成交时间</span>
                    <span class="sousuoneirong">
                      <el-select v-model="chengjiaotime2" placeholder="全部">
                        <el-option
                          v-for="item in chengjiaotimelist2"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </span>
                  </div>
                </div>
                <div class="sousuo1">
                  <div>
                    <span class="sousuoname">入账状态</span>
                    <span class="sousuoneirong">
                      <el-select v-model="ruzhang2" placeholder="全部状态">
                        <el-option
                            v-for="item in ruzhanglist2"
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
                  <el-button type="warning" @click="chongzhi1">重置</el-button>
                </span>
                <span>
                  <el-button type="primary" @click="sousuo1">搜索</el-button>
                </span>
              </div>
              <!-- 第二行按钮 -->
              <!-- 第三行表格 -->
              <div class="hang3">
                <el-table
                  :header-cell-style="{background:'#eef1fc'}"
                  :data="list2"
                  style="width: 100%">
                  <el-table-column
                    align="center"
                    prop="dingdanhao"
                    label="订单号"
                    width="120px">
                    <template slot-scope="scope">
                        <div @click="shangjia(scope.row.dingdanhao)" style="color: blue;">{{scope.row.dingdanhao}}</div>
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
                    prop="dingdanjine"
                    label="订单金额"
                    width="100px">
                  </el-table-column>
                  <el-table-column
                    prop="peisongfei"
                    label="配送费"
                    width="120px">
                    <template slot-scope="scope">
                        <div v-if="(scope.row.peisongleixing == 1)">
                          <div>商家承担:{{scope.row.peisongfei}}</div>
                          <div style="width: 48px;height: 20px;border-radius: 5px;background-color: #fff0ee;color: #ff644d;">平台专送</div>
                        </div>
                        <div  v-else-if="(scope.row.peisongleixing == 2)">
                          <div>{{scope.row.peisongfei}}</div>
                          <div style="width: 48px;height: 20px;border-radius: 5px;background-color: #ebf2fe;color: #3478f6;">商家配送</div>
                        </div>
                        <div v-else>₱0.00</div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="bili"
                    label="抽成比例"
                    width="80px">
                  </el-table-column>
                  <el-table-column
                    class-name="table-fon-size"
                    align="center"
                    prop="fuwufei"
                    label="技术服务费"
                    width="110px">
                  </el-table-column>
                  <el-table-column
                    class-name="table-fon-size"
                    align="center"
                    prop="youhui"
                    label="技术服务费优惠"
                    width="110px">
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="butie"
                    label="平台补贴"
                    width="80px">
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="shouru"
                    label="平台收入"
                    width="80px">
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="chengjiaotime"
                    label="成交时间"
                    width="80px">
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="ruzhangtime"
                    label="入账时间"
                    width="80px">
                    <template slot-scope="scope">
                      <div v-if="scope.row.state != 1">{{scope.row.ruzhangtime}}</div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="state"
                    label="状态"
                    width="80px">
                    <template slot-scope="scope">
                        <div>
                          <div v-if="scope.row.state == 1">结算中</div>
                          <div v-if="scope.row.state == 2">已入账</div>
                        </div>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="fenye">
                  <div>
                    <div class="block">
                      <el-pagination
                        @size-change="pingtaippage"
                        @current-change="pingtaicurrent"
                        :current-page.sync="dangqianpage1"
                        :page-sizes="[1, 2, 3, 4]"
                        :page-size="pageSize1"
                        background
                        layout="sizes, prev, pager, next,total"
                        :total="maxpage1">
                      </el-pagination>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 第三行表格 -->
            </div>



          </el-tab-pane>
        </el-tabs>
      </template>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
  import { shangjiafenrunData,pingtaifenrunData } from "../../store/zsl_store/data";
  export default {
    name:'FenRun',
    data() {
      return {
        dangqianye: 'shangjia',
        dingdanlist:[
          {
            value: 1,
            label: '外卖订单'
          },
          {
            value: 2,
            label: '到店自取'
          },
          {
            value: 3,
            label: '团购订单'
          },
        ],
        dingdan:'',
        dingdanlist2:[
          {
            value: 1,
            label: '外卖订单'
          },
          {
            value: 2,
            label: '到店自取'
          },
          {
            value: 3,
            label: '团购订单'
          },
        ],
        dingdan2:'',
        chengjiaotimelist:[
          {
            value: 1,
            label: '近三个月'
          },
          {
            value: 2,
            label: '今年内'
          },
          {
            value: 3,
            label: '2021年'
          },
          {
            value: 4,
            label: '2020年'
          },
          {
            value: 5,
            label: '2020年以前'
          }
        ],
        chengjiaotime:'',
        chengjiaotimelist2:[
          {
            value: 1,
            label: '近三个月'
          },
          {
            value: 2,
            label: '今年内'
          },
          {
            value: 3,
            label: '2021年'
          },
          {
            value: 4,
            label: '2020年'
          },
          {
            value: 5,
            label: '2020年以前'
          }
        ],
        chengjiaotime2:'',
        ruzhanglist:[
          {
            value:1,
            label:'结算中'
          },
          {
            value:2,
            label:'已入账'
          }
        ],
        ruzhang:'',
        ruzhanglist2:[
          {
            value:1,
            label:'结算中'
          },
          {
            value:2,
            label:'已入账'
          }
        ],
        ruzhang2:'',
        peisonglist:[
          {
            value:1,
            label:'平台转送'
          },
          {
            value:2,
            label:'商家配送'
          },
          {
            value:3,
            label:'没有配送'
          }
        ],
        peisong:'',
        adminlist1:[],
        list1:[],
        adminlist2:[],
        list2:[],
        dangqianpage:null,
        currentPage:1,
        pageSize:1,
        dingdanhao:'',
        mingceng:'',
        shouji:'',
        maxpage:null,
        //平台
        maxpage1:null,
        dangqianpage1:null,
        currentPage1:1,
        pageSize1:1,
        dingdanhao1:''
      }
    },
    methods:{
      // 顶部页面切换
      handleClick(tab, event) {
        console.log(tab, event);
      },
      // 商家每页多少条数据
      shangjiapage(val) {
        this.pageSize = val
        this.showData()
      },
      // 商家当前多少页
      shangjiacurrent(val) {
        this.currentPage = val
        this.showData()
      },
      // 平台每页多少条数据
      pingtaippage(val) {
        this.pageSize1 = val
        this.showData1()
      },
      // 平台当前多少页
      pingtaicurrent(val) {
        this.currentPage1 = val
        this.showData1()
      },
      // 平台详细页面跳转
      pingtai(id){
        this.$router.push({
          path:"/orderFenRunxiangqing",
          query:{
            id:id
          }
        })
      },
      // 商家详细页面跳转
      shangjia(id){
        this.$router.push({
          path:"/orderFenRunxiangqing",
          query:{
            id:id
          }
        })
      },
      // 从后端获取数据
      async getData(){
        await shangjiafenrunData()
            .then(res=>{
                sessionStorage.setItem('shangjia',JSON.stringify(res));
            })
            .catch(err=>{
                console.log(err);
            })
        await pingtaifenrunData()
            .then(res=>{
                sessionStorage.setItem('pingtai',JSON.stringify(res));
            })
            .catch(err=>{
                console.log(err);
            }) 
      },
      showData(){
        // 条件
        let new_issuesTableData = this.adminlist1.filter(item => {
              let transactionNo = true; //订单号
              let dingdanvalue = true; //订单类型
              let nickname = true; //店铺名字
              let phone = true; //手机号码
              let createtime = true; //成交时间
              let zhuangtai = true; //入账状态

              if(this.dingdanhao) {
                transactionNo = (item.dingdanhao == this.dingdanhao)
              }
              if(this.dingdan) {
                dingdanvalue = (item.dingdanleixing == this.dingdan)
              }
              if(this.mingceng) {
                nickname = (item.dianpuname == this.mingceng)
              }
              if(this.shouji) {
                phone = (item.shouji == this.shouji)
              }
              if(this.chengjiaotime) {
                createtime = (item.chengjiaotime == this.chengjiaotime)
              }
              if(this.ruzhang) {
                zhuangtai = (item.state == this.ruzhang)
              }
              return transactionNo && dingdanvalue && nickname && zhuangtai && phone && createtime
          })
        //分页
        let page = (this.currentPage-1)*this.pageSize
        this.list1 = new_issuesTableData.slice(page,page+this.pageSize)
      },
      sousuo(){
        this.showData()
      },
      // 重置
      chongzhi(){
        this.dingdanhao = ''
        this.dingdan = ''
        this.mingceng = ''
        this.shouji = ''
        this.chengjiaotime = ''
        this.ruzhang = ''
        this.showData()
      },

      //平台分润函数
      // 从后端获取数据
      showData1(){
        // 条件
        let new_issuesTableData = this.adminlist1.filter(item => {
              let transactionNo = true; //订单号
              let dingdanvalue = true; //订单类型
              let peisong = true; //配送方式
              let createtime = true; //成交时间
              let zhuangtai = true; //入账状态

              if(this.dingdanhao1) {
                transactionNo = (item.dingdanhao == this.dingdanhao)
              }
              if(this.dingdan) {
                dingdanvalue = (item.dingdanleixing == this.dingdan)
              }
              if(this.peisong) {
                peisong = (item.peisongleixing == this.peisong)
              }
              if(this.chengjiaotime) {
                createtime = (item.chengjiaotime == this.chengjiaotime)
              }
              if(this.ruzhang) {
                zhuangtai = (item.state == this.ruzhang)
              }
              return transactionNo && dingdanvalue && peisong && zhuangtai && createtime
          })
        //分页
        let page = (this.currentPage1-1)*this.pageSize1
        this.list2 = new_issuesTableData.slice(page,page+this.pageSize1)
      },
      sousuo1(){
        this.showData1()
      },
      // 重置
      chongzhi1(){
        this.dingdanhao1 = ''
        this.dingdan = ''
        this.peisong = ''
        this.shouji = ''
        this.chengjiaotime = ''
        this.ruzhang = ''
        this.showData1()
      },
    },
    mounted(){
      this.getData()
      this.adminlist1 = JSON.parse(sessionStorage.getItem('shangjia'))
      this.maxpage = this.adminlist1.length
      this.showData()
      //平台
      this.adminlist2 = JSON.parse(sessionStorage.getItem('pingtai'))
      this.maxpage1 = this.adminlist2.length
      this.showData1()

    }
  }
</script>

<style scoped>
  .yemian {
    width: 100%;
    height: 100%;
    background-color: red;
    overflow: hidden;
    margin: 10px;
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
    width: 100%;
    height: 80px;
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
    width:100%;
    height: 50px;
  }
  .hang2 span {
    margin: 0 10px;
  }


  .hang3 {
    width:100%;
    height: auto;
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