<template>
  <div class="platform">
    <!-- <div class="header">
      <p>平台优惠活动</p>
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
          <div class="input-box" ref="inputBox2">
            <span class="span">活动类型</span>
            <select
              v-model="searchList.actype"
              @focus="changeActiveTypeCss"
              @blur="changeActiveType"
              class="input"
            >
              <option value="">全部类型</option>
              <option :value="1">满减红包</option>
              <option :value="2">配送费红包</option>
              <option :value="3">通用红包</option>
              <option :value="4">首单立减</option>
            </select>
          </div>
          <div class="input-box" ref="inputBox3">
            <span class="span">应用范围</span>
            <input
              class="input"
              v-model="searchList.ranges"
              type="text"
              @focus="changeApplicationCss"
              @blur="changeApplication"
              placeholder="请输入关键字"
            />
          </div>
          <div class="input-box" ref="inputBox4">
            <span class="jiage">使用量</span>
            <input
              class="inputMin"
              v-model="searchList.numLow"
              type="text"
              @focus="changeMinUseCss"
              @blur="changeMinUse"
              placeholder="最低"
            />
            <span class="zhi">至</span>
            <input
              class="inputMax"
              v-model="searchList.numHigh"
              type="text"
              @focus="changeMaxUseCss"
              @blur="changeMaxUse"
              placeholder="最高"
            />
          </div>
          <div class="input-box" ref="inputBox5">
            <span class="span">创建时间</span>
            <select
              v-model="searchList.beginTime"
              @focus="changeDateCss"
              @blur="changeDate"
              class="input"
            >
              <option value="0">全部</option>
              <option value="1">近三个月</option>
              <option value="2">今年内</option>
              <option value="3">2021年</option>
              <option value="4">2020年</option>
              <option value="5">2020年以前</option>
            </select>
          </div>
          <div class="input-box special" ref="inputBox6">
            <span class="span">活动状态</span>
            <select
              v-model="searchList.acaStatus"
              @focus="changeActiveCss"
              @blur="changeActive"
              class="input"
            >
              <option value="">全部状态</option>
              <option :value="1">进行中</option>
              <option :value="2">未开始</option>
              <option :value="3">已暂停</option>
              <option :value="4">已结束</option>
            </select>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <button class="reset-btn" @click="reset">重置</button>
        <button class="search-btn" @click="search">搜索</button>
      </div>
      <hr />
      <div class="add-box">
        <button class="add-btn" @click="addActives">+发布平台活动</button>
      </div>
      <div class="table-box">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>活动类型</th>
              <th>活动规则</th>
              <th>用户类型</th>
              <th>活动日期</th>
              <th>有效期</th>
              <th>应用范围</th>
              <th>使用量<i class="el-icon-sort order-btn"></i></th>
              <th>创建时间<i class="el-icon-sort order-btn"></i></th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list" :key="item.id">
              <td @click="toPAD(item.id)">
                <div class="link">
                  <span>{{ item.id }}</span>
                </div>
              </td>
              <td>{{ item.acType | fil2 }}</td>
              <td>{{ item.rules }}</td>
              <td>{{ item.userType | fil1 }}</td>
              <td>{{ item.acData }}</td>
              <td>{{ item.expirationDate }}</td>
              <td>{{ item.ranges }}</td>
              <td>{{ item.useNum }}</td>
              <td>
                <div class="td1">
                  <span>{{ item.createTime }}</span>
                  <span class="acState1" v-if="item.status == 1">进行中</span>
                  <span class="acState2" v-if="item.status == 2">未开始</span>
                  <span class="acState3" v-if="item.status == 3">暂停</span>
                  <span class="acState4" v-if="item.status == 4">结束</span>
                </div>
              </td>
              <td>
                <el-popover placement="top" width="150" trigger="hover">
                  <div
                    style="
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      margin: 0;
                    "
                  >
                    <el-button
                      v-if="item.status == 2"
                      type="text"
                      size="mini"
                      @click="gotoAmendPlatformActive(item.id)"
                    >
                      <i class="el-icon-edit-outline"></i>
                      编辑活动
                    </el-button>
                    <el-button
                      type="text"
                      size="mini"
                      @click="openModalStop(item.id)"
                      v-if="item.status == 1"
                    >
                      <i class="el-icon-remove-outline"></i>
                      暂停活动
                    </el-button>
                    <el-button
                      type="text"
                      size="mini"
                      @click="openModalRecover(item.id)"
                      v-if="item.status == 3"
                    >
                      <i class="el-icon-refresh"></i>
                      恢复活动
                    </el-button>
                    <el-button
                      type="text"
                      size="mini"
                      @click="reSend"
                      v-if="item.status == 4"
                    >
                      <i class="el-icon-refresh-right"></i>
                      重新发布
                    </el-button>
                  </div>
                  <el-button slot="reference" class="more-btn">
                    <i class="el-icon-more"></i>
                  </el-button>
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
export default {
  name: "Platform",
  data() {
    return {
      searchList: {
        id: "",
        actype: "",
        ranges: "",
        numLow: "",
        numHigh: "",
        beginTime: "",
        acaStatus: "",
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
    this.getList();
  },
  filters: {
    fil1(val) {
      if (val == 1) {
        return "所有用户";
      } else if (val == 2) {
        return "新用户";
      }
    },
    fil2(val) {
      if (val == 1) {
        return "满减红包";
      } else if (val == 2) {
        return "配送费红包";
      } else if (val == 3) {
        return "通用红包";
      } else if (val == 4) {
        return "首单立减";
      }
    },
  },
  methods: {
    // 向后端拿数据
    getList() {
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/pre/queryAllPre",
        params: {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
        },
      })
        .then((res) => {
          console.log("获取数据成功", res);
          this.list = res.data.data;
          this.totalCount = res.data.total;
        })
        .catch((err) => {
          console.log("获取数据失败", err);
        });
    },
    // 搜索按钮
    search() {
      this.currentPage = 1;
      this.copySearchList = { ...this.searchList };
      this.getSearchList(this.copySearchList);
    },
    // 条件搜索请求
    getSearchList(list) {
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/pre/queryPreBySome",
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
    // 重制
    reset() {
      this.searchList.id = "";
      this.searchList.actype = "";
      this.searchList.ranges = "";
      this.searchList.numLow = "";
      this.searchList.numHigh = "";
      this.searchList.beginTime = "";
      this.searchList.acaStatus = "";

      this.search();
    },
    // 改样式
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
    changeActiveTypeCss() {
      this.$refs.inputBox2.style.background = "white";
      this.$refs.inputBox2.style.border = "1px solid #4e73df";
      this.$refs.inputBox2.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeActiveType() {
      this.$refs.inputBox2.style.background = "#f5f5f5";
      this.$refs.inputBox2.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox2.style.boxShadow = "none";
    },
    changeApplicationCss() {
      console.log(this.$refs.inputBox);
      this.$refs.inputBox3.style.background = "white";
      this.$refs.inputBox3.style.border = "1px solid #4e73df";
      this.$refs.inputBox3.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeApplication() {
      this.$refs.inputBox3.style.background = "#f5f5f5";
      this.$refs.inputBox3.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox3.style.boxShadow = "none";
    },
    changeMinUseCss() {
      this.$refs.inputBox4.style.background = "white";
      this.$refs.inputBox4.style.border = "1px solid #4e73df";
      this.$refs.inputBox4.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeMinUse() {
      this.$refs.inputBox4.style.background = "#f5f5f5";
      this.$refs.inputBox4.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox4.style.boxShadow = "none";
    },
    changeMaxUseCss() {
      this.$refs.inputBox4.style.background = "white";
      this.$refs.inputBox4.style.border = "1px solid #4e73df";
      this.$refs.inputBox4.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeMaxUse() {
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
    // 分页
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      this.getSearchList(this.copySearchList);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getSearchList(this.copySearchList);
    },
    addActives() {
      this.$router.push("addActives");
    },
    // 跳转详情页面
    toPAD(id) {
      this.$router.push({ path: "PADetail", query: { id } });
    },
    gotoAmendPlatformActive(id) {
      this.$router.push("APA?id=" + id);
    },
    // 暂停模态框
    openModalStop(id) {
      this.$confirm("确定要暂停活动吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "暂停活动成功!",
          });
          this.sendState(id, 3);
          this.getList();
        })
        .catch(() => {
          1;
          this.$message({
            type: "info",
            message: "已取消暂停活动",
          });
        });
    },
    // 恢复模态框
    openModalRecover(id) {
      this.$confirm("确定要恢复活动吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "恢复活动成功!",
          });
          this.sendState(id, 1);
          this.getList();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消恢复活动",
          });
        });
    },
    // 给后端发更改状态的请求
    sendState(id, status) {
      this.$axios({
        method: "get",
        url: "http://172.16.101.63:8001/pre/updatePreStatus",
        params: {
          id,
          status,
        },
      })
        .then((res) => {
          console.log("更改状态请求发送成功", res);
        })
        .catch((err) => {
          console.log("更改失败", err);
        });
    },
    // 重新发布
    reSend() {
      this.$router.push("addActives");
    },
  },
};
</script>

<style scoped>
.platform {
  background-color: #f5f5f5;
}
/* .header {
  height: 60px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  justify-content: space-between;
}
.header p {
  font-size: 18px;
} */
.content {
  /* margin-left: 50px;
  margin-right: 50px; */
  /* margin-bottom: 20px; */
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}
.content-search {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.special {
  margin-right: calc(50% + 5px);
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
hr {
  margin: 20px 0;
  background-color: #e4e4e4;
  height: 1px;
  border: none;
}
.add-box {
  margin-bottom: 20px;
}
.add-btn {
  padding: 6px 13px;
  outline: none;
  border: 1px solid #4e73df;
  cursor: pointer;
  background-color: #fff;
  border-radius: 15px;
  font-size: 13px;
  color: #4e73df;
}
.add-btn:hover {
  background-color: #f8f9fe;
}
table {
  width: 100%;
  font-size: 13px;
  border-spacing: 0;
  margin-bottom: 30px;
  table-layout: fixed;
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
  height: 90px;
  border-bottom: 1px solid #e4e4e4;
}
.order-btn {
  cursor: pointer;
}
.td1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.acState1 {
  width: 50px;
  background-color: #75a3ff;
  color: #ffffff;
}
.acState2 {
  width: 50px;
  background-color: #7bb474;
  color: #ffffff;
}
.acState3 {
  width: 50px;
  background-color: #7bb474;
  color: #ffffff;
}
.acState3 {
  width: 50px;
  background-color: #888888;
  color: #ffffff;
}
.acState4 {
  width: 50px;
  background-color: #c4c4c4;
  color: #ffffff;
}
.link {
  color: #4e73df;
}
.link:hover {
  text-decoration: underline #4e73df;
  cursor: pointer;
}
tbody tr:hover {
  background-color: #f4f5fd;
}
.page-box {
  display: flex;
  justify-content: flex-end;
  padding-right: 20%;
}
.more-btn {
  border: none;
  background-color: transparent;
  padding: 0;
}
</style>
