<template>
  <div class="icon-view">
    <div class="search-box">
      <div class="content-search">
        <div class="input-box" ref="inputBox">
          <span class="span">活动备注:</span>
          <input
            class="input"
            v-model="activeTips"
            type="text"
            @focus="changeActiveTipsCss"
            @blur="changeActiveTips"
            placeholder="请输入备注"
          />
        </div>
        <div class="input-box" ref="inputBox2">
          <span class="span">创建时间</span>
          <select
            v-model="date"
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
        <div class="input-box special" ref="inputBox3">
          <span class="span">状态</span>
          <select
            v-model="state"
            @focus="changeStateCss"
            @blur="changeState"
            class="input"
          >
            <option value="0">全部状态</option>
            <option value="1">未生效</option>
            <option value="2">生效中</option>
            <option value="3">已停用</option>
            <option value="4">已结束</option>
          </select>
        </div>
      </div>
    </div>
    <div class="btn-box">
      <button class="reset-btn">重置</button>
      <button class="search-btn">搜索</button>
    </div>
    <hr />
    <div class="add-box">
      <button class="add-btn" @click="SendICON">+发布ICON</button>
    </div>
    <div class="table-box">
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>效果缩略图</th>
            <th>备注</th>
            <th>生效日期</th>
            <th>创建时间<i class="el-icon-sort order-btn"></i></th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in iconList" :key="index">
            <td @click="goICONDetail">
              <span class="link">{{ item.id }}</span>
            </td>
            <td><img :src="item.imgSrc" alt="" /></td>
            <td>{{ item.tip }}</td>
            <td>{{ item.startDate }}</td>
            <td>{{ item.createTime }}</td>
            <td>{{ item.state }}</td>
            <td>
              <el-popover placement="top" width="150" trigger="hover">
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  "
                >
                  <el-button type="text" size="mini" @click="gotoAmendICON"
                    ><i class="el-icon-edit-outline"></i>编辑ICON</el-button
                  >
                  <el-button type="text" size="mini" @click="openModalStop"
                    ><i class="el-icon-remove-outline"></i>暂停ICON</el-button
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
</template>

<script>
export default {
  name: "IconView",
  data() {
    return {
      activeTips: "",
      date: "1",
      state: "0",
      iconList: [
        {
          id: "1010",
          imgSrc:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.fjzht.com%2Fsoft%2F2104%2F05%2Fimg_20210405161744ct2j0a.jpg&refer=http%3A%2F%2Fimg.fjzht.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667362694&t=e27e3e726e8802bb181055a3526e6455",
          tip: "2022年618年中大促活动",
          startDate: "2022-06-01 至 2022-06-18",
          createTime: "2022-04-27 16:29:02",
          state: "未生效",
        },
      ],
      currentPage: 1,
      pageSizes: [10, 15, 20],
      pageSize: 10,
      totalCount: 407,
    };
  },
  methods: {
    changeActiveTipsCss() {
      console.log(this.$refs.inputBox);
      this.$refs.inputBox.style.background = "white";
      this.$refs.inputBox.style.border = "1px solid #4e73df";
      this.$refs.inputBox.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeActiveTips() {
      this.$refs.inputBox.style.background = "#f5f5f5";
      this.$refs.inputBox.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox.style.boxShadow = "none";
    },
    changeDateCss() {
      this.$refs.inputBox2.style.background = "white";
      this.$refs.inputBox2.style.border = "1px solid #4e73df";
      this.$refs.inputBox2.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeDate() {
      this.$refs.inputBox2.style.background = "#f5f5f5";
      this.$refs.inputBox2.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox2.style.boxShadow = "none";
    },
    changeStateCss() {
      this.$refs.inputBox3.style.background = "white";
      this.$refs.inputBox3.style.border = "1px solid #4e73df";
      this.$refs.inputBox3.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeState() {
      this.$refs.inputBox3.style.background = "#f5f5f5";
      this.$refs.inputBox3.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox3.style.boxShadow = "none";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    SendICON() {
      this.$router.push("SendICON");
    },
    goICONDetail() {
      this.$router.push("ICONDetail");
    },
    gotoAmendICON() {
      this.$router.push("AmendICON");
    },
    openModalStop() {
      this.$confirm("确定要停用该外卖首页ICON设置吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "停用ICON设置成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消停用ICON设置",
          });
        });
    },
  },
};
</script>

<style scoped>
.content-search {
  display: flex;
  /* justify-content: space-between; */
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
  margin-right: 10px;
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
  /* margin-top: 20px; */
  margin-bottom: 20px;
}
.add-btn {
  padding: 6px 16px;
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
tbody tr:hover {
  background-color: #f4f5fd;
}
.link {
  color: #4e73df;
  cursor: pointer;
}
.link:hover {
  text-decoration: underline #4e73df;
}
.order-btn {
  cursor: pointer;
}
.page-box {
  display: flex;
  justify-content: flex-end;
  padding-right: 20%;
}
.more-btn {
  padding: 0;
  border: none;
  background-color: transparent;
}
</style>
