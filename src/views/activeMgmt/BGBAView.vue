<template>
  <div class="business-group">
    <!-- <div class="header">
      <p>商家团购活动</p>
    </div> -->
    <div class="content">
      <div class="search-box">
        <div class="content-search">
          <div class="input-box" ref="inputBox">
            <span class="span">活动ID</span>
            <input
              class="input"
              v-model="searchList.id"
              type="text"
              @focus="changeActiveIdCss"
              @blur="changeActiveId"
              placeholder="请输入ID"
            />
          </div>
          <div class="input-box" ref="inputBox1">
            <span class="span">活动名称</span>
            <input
              class="input"
              v-model="searchList.acaName"
              type="text"
              @focus="changeActiveNameCss"
              @blur="changeActiveName"
              placeholder="请输入活动名称"
            />
          </div>
          <div class="input-box" ref="inputBox2">
            <span class="span">店铺名称</span>
            <input
              class="input"
              v-model="searchList.storName"
              type="text"
              @focus="changeStoreNameCss"
              @blur="changeStoreName"
              placeholder="请输入店铺名称"
            />
          </div>
          <div class="input-box" ref="inputBox3">
            <span class="jiage">价格</span>
            <input
              class="inputMin"
              v-model="searchList.priceLow"
              type="text"
              @focus="changeMinPriceCss"
              @blur="changeMinPrice"
              placeholder="最低"
            />
            <span class="zhi">至</span>
            <input
              class="inputMax"
              v-model="searchList.priceHigh"
              type="text"
              @focus="changeMaxPriceCss"
              @blur="changeMaxPrice"
              placeholder="最高"
            />
          </div>
          <div class="input-box" ref="inputBox4">
            <span class="sales">销量</span>
            <input
              class="inputMin"
              v-model="searchList.salNumLow"
              type="text"
              @focus="changeMinSalesCss"
              @blur="changeMinSales"
              placeholder="最低"
            />
            <span class="zhi">至</span>
            <input
              class="inputMax"
              v-model="searchList.salNumHigh"
              type="text"
              @focus="changeMaxSalesCss"
              @blur="changeMaxSales"
              placeholder="最高"
            />
          </div>
          <div class="input-box" ref="inputBox5">
            <span class="date">创建时间</span>
            <select
              v-model="searchList.beginTime"
              @focus="changeDateCss"
              @blur="changeDate"
              class="dateSelect"
            >
              <option value="">全部</option>
              <option :value="1">近三个月</option>
              <option :value="2">今年内</option>
              <option :value="3">2021年</option>
              <option :value="4">2020年</option>
              <option :value="5">2020年以前</option>
            </select>
          </div>
          <div class="input-box" ref="inputBox6">
            <span class="activeState">活动状态</span>
            <select
              v-model="searchList.acaStatus"
              @focus="changeActiveCss"
              @blur="changeActive"
              class="activeSelect"
            >
              <option value="">全部状态</option>
              <option :value="2">未开始</option>
              <option :value="1">进行中</option>
              <option :value="3">已暂停</option>
              <option :value="4">已结束</option>
            </select>
          </div>
          <div class="input-box" ref="inputBox7">
            <span class="auditState">审核状态</span>
            <select
              v-model="searchList.auditStatus"
              @focus="changeAuditCss"
              @blur="changeAudit"
              class="auditSelect"
            >
              <option value="">全部状态</option>
              <option :value="1">待审核</option>
              <option :value="2">审核中</option>
              <option :value="3">审核通过</option>
              <option :value="4">审核拒绝</option>
            </select>
          </div>
          <div class="input-box" ref="inputBox8">
            <span class="span">审核人</span>
            <input
              class="input"
              v-model="searchList.auditPeople"
              type="text"
              @focus="changeAuditorCss"
              @blur="changeAuditor"
              placeholder="请输入审核人"
            />
          </div>
        </div>
        <div class="btn-box">
          <button class="reset-btn" @click="reset">重置</button>
          <button class="search-btn" @click="search">搜索</button>
        </div>
      </div>
      <div class="table-box">
        <table>
          <thead>
            <tr>
              <th>名称</th>
              <th>团购价</th>
              <th>活动日期</th>
              <th>可用时间</th>
              <th>已售<i class="el-icon-sort order-btn"></i></th>
              <th>所属店铺</th>
              <th>创建时间<i class="el-icon-sort order-btn"></i></th>
              <th>审核状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list" :key="item.id">
              <td style="width: 23%">
                <div class="td1">
                  <img :src="item.pictures" alt="" class="activeImg" />
                  <div class="link" @click="goto(item.id, item.auditStatus)">
                    <span class="chineseName">{{ item.nameCh }}</span>
                    <span class="englishName">{{ item.nameEn }}</span>
                    <span class="name-id">ID:{{ item.id }}</span>
                  </div>
                </div>
                <!-- <a :href="item.name.link">{{ item.name.txt }}</a> -->
              </td>
              <td style="width: 10%">
                <div class="td2">
                  <span>₱{{ item.buyPrice }}</span>
                  <span class="beforePrice"
                    >(价值：₱{{ item.totlePrice }})</span
                  >
                </div>
              </td>
              <td style="width: 11%">
                {{ item.acData }}
              </td>
              <td style="width: 13%">
                {{ item.useData }}
              </td>
              <td style="width: 7%">
                {{ item.salNum | fil2 }}
              </td>
              <td style="width: 11%">
                <div class="link2" @click="gotoStore">
                  <span>{{ item.shopName }}</span>
                </div>
              </td>
              <td style="width: 13%">
                <div class="td3">
                  <span>{{ item.createTime }}</span>
                  <span class="audit-state1" v-if="item.acaStatus == 1"
                    >进行中</span
                  >
                  <span class="audit-state2" v-if="item.acaStatus == 2"
                    >未开始</span
                  >
                  <span class="audit-state3" v-if="item.acaStatus == 3"
                    >暂停</span
                  >
                  <span class="audit-state4" v-if="item.acaStatus == 4"
                    >结束</span
                  >
                </div>
              </td>
              <td style="width: 6%">
                {{ item.auditStatus | fil1 }}
              </td>
              <td>
                <el-popover placement="bottom" width="150" trigger="hover">
                  <div style="text-align: center; margin: 0">
                    <el-button
                      size="mini"
                      type="text"
                      @click="goto(item.id, item.auditStatus)"
                      ><i class="el-icon-document"></i>查看并处理</el-button
                    >
                  </div>
                  <el-button slot="reference" class="more-btn">
                    <i class="el-icon-more"></i
                  ></el-button>
                </el-popover>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="page-box">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          layout="prev,pager,next,sizes,total"
          :total="totalCount"
          prev-text="上一页"
          next-text="下一页"
          :background="true"
          :pagerCount="7"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "BGBAView",
  components: {},
  data() {
    return {
      searchList: {
        id: "",
        acaName: "",
        storName: "",
        priceLow: "",
        priceHigh: "",
        salNumLow: "",
        salNumHigh: "",
        // beginTime: 1,
        acaStatus: "",
        auditStatus: "",
        auditPeople: "",
      },
      copySearchList: {},

      currentPage: 1,
      pageSizes: [1, 3, 5, 10, 15, 20],
      pageSize: 3,
      totalCount: null,

      list: [],
    };
  },
  created() {
    this.getList(this.currentPage, this.pageSize);
  },
  filters: {
    fil1(val) {
      if (val == 1) {
        return "待审核";
      } else if (val == 2) {
        return "审核中";
      } else if (val == 3) {
        return "通过";
      } else {
        return "拒绝";
      }
    },
    fil2(val) {
      if (val == null) {
        return "";
      }
      let newNum = val.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      return newNum;
    },
  },
  methods: {
    goto(id, state) {
      this.$router.push({ path: "groupActiveDetail", query: { id, state } });
    },
    search() {
      this.currentPage = 1;
      this.copySearchList = { ...this.searchList };
      this.getSearchList(this.copySearchList);
    },
    getSearchList(list) {
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/buy/queryBuyBySome",
        params: {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          ...list,
        },
      })
        .then((res) => {
          console.log("查询成功", res);
          this.list = res.data.data;
          this.totalCount = res.data.total;
        })
        .catch((err) => {
          console.log("查询失败", err);
        });
    },
    reset() {
      this.searchList.id = "";
      this.searchList.acaName = "";
      this.searchList.storName = "";
      this.searchList.priceLow = "";
      this.searchList.priceHigh = "";
      this.searchList.salNumLow = "";
      this.searchList.salNumHigh = "";
      this.searchList.acaStatus = "";
      this.searchList.auditStatus = "";
      this.searchList.auditPeople = "";
      this.search();
    },
    changeActiveIdCss() {
      console.log(this.$refs.inputBox);
      this.$refs.inputBox.style.background = "white";
      this.$refs.inputBox.style.border = "1px solid #4e73df";
      this.$refs.inputBox.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeActiveId() {
      this.$refs.inputBox.style.background = "#f5f5f5";
      this.$refs.inputBox.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox.style.boxShadow = "none";
    },
    changeActiveNameCss() {
      this.$refs.inputBox1.style.background = "white";
      this.$refs.inputBox1.style.border = "1px solid #4e73df";
      this.$refs.inputBox1.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeActiveName() {
      this.$refs.inputBox1.style.background = "#f5f5f5";
      this.$refs.inputBox1.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox1.style.boxShadow = "none";
    },
    changeStoreNameCss() {
      this.$refs.inputBox2.style.background = "white";
      this.$refs.inputBox2.style.border = "1px solid #4e73df";
      this.$refs.inputBox2.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeStoreName() {
      this.$refs.inputBox2.style.background = "#f5f5f5";
      this.$refs.inputBox2.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox2.style.boxShadow = "none";
    },
    changeMinPriceCss() {
      this.$refs.inputBox3.style.background = "white";
      this.$refs.inputBox3.style.border = "1px solid #4e73df";
      this.$refs.inputBox3.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeMinPrice() {
      this.$refs.inputBox3.style.background = "#f5f5f5";
      this.$refs.inputBox3.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox3.style.boxShadow = "none";
    },
    changeMaxPriceCss() {
      this.$refs.inputBox3.style.background = "white";
      this.$refs.inputBox3.style.border = "1px solid #4e73df";
      this.$refs.inputBox3.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeMaxPrice() {
      this.$refs.inputBox3.style.background = "#f5f5f5";
      this.$refs.inputBox3.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox3.style.boxShadow = "none";
    },
    changeMinSalesCss() {
      this.$refs.inputBox4.style.background = "white";
      this.$refs.inputBox4.style.border = "1px solid #4e73df";
      this.$refs.inputBox4.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeMinSales() {
      this.$refs.inputBox4.style.background = "#f5f5f5";
      this.$refs.inputBox4.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox4.style.boxShadow = "none";
    },
    changeMaxSalesCss() {
      this.$refs.inputBox4.style.background = "white";
      this.$refs.inputBox4.style.border = "1px solid #4e73df";
      this.$refs.inputBox4.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeMaxSales() {
      this.$refs.inputBox4.style.background = "#f5f5f5";
      this.$refs.inputBox4.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox4.style.boxShadow = "none";
    },
    changeDateCss() {
      this.$refs.inputBox5.style.background = "white";
      this.$refs.inputBox5.style.border = "1px solid #4e73df";
      this.$refs.inputBox5.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeDate() {
      this.$refs.inputBox5.style.background = "#f5f5f5";
      this.$refs.inputBox5.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox5.style.boxShadow = "none";
    },
    changeActiveCss() {
      this.$refs.inputBox6.style.background = "white";
      this.$refs.inputBox6.style.border = "1px solid #4e73df";
      this.$refs.inputBox6.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeActive() {
      this.$refs.inputBox6.style.background = "#f5f5f5";
      this.$refs.inputBox6.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox6.style.boxShadow = "none";
    },
    changeAuditCss() {
      this.$refs.inputBox7.style.background = "white";
      this.$refs.inputBox7.style.border = "1px solid #4e73df";
      this.$refs.inputBox7.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeAudit() {
      this.$refs.inputBox7.style.background = "#f5f5f5";
      this.$refs.inputBox7.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox7.style.boxShadow = "none";
    },
    changeAuditorCss() {
      this.$refs.inputBox8.style.background = "white";
      this.$refs.inputBox8.style.border = "1px solid #4e73df";
      this.$refs.inputBox8.style.boxShadow = "0px 0px 3px 1px #4e73df";
    },

    changeAuditor() {
      this.$refs.inputBox8.style.background = "#f5f5f5";
      this.$refs.inputBox8.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox8.style.boxShadow = "none";
    },

    // ==============分页 函数==========
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      this.getSearchList(this.copySearchList);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getSearchList(this.copySearchList);
    },
    // 向后端请求数据
    getList(currentPage, pageSize) {
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/buy/queryAllBuy",
        params: {
          currentPage,
          pageSize,
        },
      })
        .then((res) => {
          console.log("请求成功", res);
          this.list = res.data.data;
          this.totalCount = res.data.total;
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    // 跳转到店铺详情页面
    gotoStore() {
      this.$router.push("storeManagement/shopRateDetail/000");
    },
  },
};
</script>

<style scoped>
/* 整个页面 一级背景色*/
.business-group {
  background: #f5f5f5;
}
/* 头部 */
/* .header p {
  height: 60px;
  font-size: 18px;
  line-height: 60px;
  margin-left: 15px;
} */
/* 主要内容部 */
.content {
  /* margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px; */
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}
/* 主要内容部 搜索部 */
.content-search {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.search-box {
  height: 250px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.input-box {
  width: calc(28% - 40px);
  height: 35px;
  display: flex;
  font-size: 13px;
  background-color: #f5f5f5;
  border-radius: 5px;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.input-box span {
  width: 25%;
  height: 33px;
  line-height: 31px;
  text-align: center;
  color: #797979;
  border-radius: 5px 0 0 5px;
  border-top: 1px solid #f5f5f5;
  border-left: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  box-sizing: border-box;
}
.input-box .span:hover {
  background-color: #ffff;
  border-top: 1px solid #4e73df;
  border-left: 1px solid #4e73df;
  border-bottom: 1px solid #4e73df;
}
.span:hover + .input {
  border-top: 1px solid #4e73df;
  border-right: 1px solid #4e73df;
  border-bottom: 1px solid #4e73df;
}
.input-box input,
.input-box select {
  width: 75%;
  border: none;
  outline: none;
  background-color: #f5f5f5;
  padding-left: 10px;
  border-radius: 0 5px 5px 0;
  box-sizing: border-box;
  font-size: 13px;
}
.input-box input::placeholder {
  color: #bbbb;
}
.input-box .input:hover {
  background-color: #ffff;
}
.input-box .input:focus {
  background-color: #ffff;
}
.input-box .inputMin {
  width: 19%;
  padding-left: 10px;
  border-radius: 0;
  border-right: none;
}
.input-box .inputMax {
  width: 44%;
  padding-left: 10px;
}
.input-box .zhi {
  width: 11%;
  border-radius: 0;
  border-left: none;
}
.jiage:hover {
  border-top: 1px solid #4e73df;
  border-left: 1px solid #4e73df;
  border-bottom: 1px solid #4e73df;
  background-color: #ffff;
}
.jiage:hover + .inputMin {
  border-top: 1px solid #4e73df;
  border-bottom: 1px solid #4e73df;
}
.jiage:hover ~ .zhi {
  border-top: 1px solid #4e73df;
  border-bottom: 1px solid #4e73df;
  background-color: #ffff;
}
.jiage:hover ~ .inputMax {
  border-top: 1px solid #4e73df;
  border-bottom: 1px solid #4e73df;
  border-right: 1px solid #4e73df;
}
.inputMin:hover {
  background-color: #ffff;
}
.inputMin:focus {
  background-color: #ffff;
}
.inputMax:hover {
  background-color: #ffff;
}
.inputMax:focus {
  background-color: #ffff;
}
option {
  background-color: #ffff;
}
.date:hover,
.activeState:hover,
.auditState:hover {
  background-color: #ffff;
  border-top: 1px solid #4e73df;
  border-left: 1px solid #4e73df;
  border-bottom: 1px solid #4e73df;
}
.date:hover + .dateSelect,
.activeState:hover + .activeSelect,
.auditState:hover + .auditSelect {
  background-color: #ffff;
  border-top: 1px solid #4e73df;
  border-right: 1px solid #4e73df;
  border-bottom: 1px solid #4e73df;
}
.dateSelect:hover,
.activeSelect:hover,
.auditSelect:hover {
  background-color: #ffff;
}
.dateSelect:focus,
.activeSelect:focus,
.auditSelect:focus {
  background-color: #ffff;
}
/* 按钮区 */
.reset-btn,
.search-btn {
  width: 80px;
  height: 35px;
  font-size: 13px;
  line-height: 35px;
  color: #ffff;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
  background-color: #ff9900;
  cursor: pointer;
}
.search-btn {
  background-color: #4e73df;
}
.reset-btn:hover {
  background-color: #f9b349;
}
.search-btn:hover {
  background-color: #7792e2;
}
/* 表格区 */
table {
  width: 100%;
  font-size: 13px;
  border-spacing: 0;
  margin-bottom: 30px;
  /* table-layout: fixed; */
}
thead {
  height: 45px;
  background-color: #f4f5fd;
}
th {
  font-weight: 400;
}

tbody {
  text-align: center;
}
tbody tr td {
  height: 120px;
  border-bottom: 1px solid #e4e4e4;
}
.td1 {
  display: flex;
  /* justify-content: center; */
  margin-left: 20px;
  align-items: center;
  cursor: pointer;
}
.td2,
.td3 {
  display: flex;
  flex-direction: column;
}
.td3 {
  align-items: center;
}
.beforePrice {
  color: #999999;
  font-size: 12px;
}
.td1:hover .chineseName,
.td1:hover .englishName {
  text-decoration: underline #4e73df;
}
.link {
  color: #4e73df;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 70px;
  justify-content: space-between;
}
.link2 {
  color: #4e73df;
  cursor: pointer;
}
.link2:hover {
  text-decoration: underline #4e73df;
}
.englishName {
  text-align: start;
}
.activeImg {
  width: 80px;
  height: 80px;
  /* background-color: #4e73df; */
  margin-right: 15px;
}
.name-id {
  color: #999999;
}
.audit-state1,
.audit-state2,
.audit-state3,
.audit-state4 {
  background-color: #f9b349;
  color: #ffffff;
  width: 50px;
  margin-top: 10px;
}
.audit-state2 {
  background-color: #64af64;
}
.audit-state3 {
  background-color: #797979;
}
.audit-state3 {
  background-color: #8da4ea;
}
tbody tr:hover {
  background-color: #f4f5fd;
}

.order-btn {
  cursor: pointer;
}
.more-btn {
  padding: 0;
  background-color: transparent;
  border: none;
}
/* 分页区 */
.page-box {
  display: flex;
  justify-content: flex-end;
  padding-right: 20%;
}
</style>
