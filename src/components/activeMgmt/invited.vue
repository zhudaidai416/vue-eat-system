<template>
  <div class="invited">
    <div class="header">
      <div class="img"></div>
      <div class="information">
        <div class="info-col">
          <div class="info-col-row">
            <span class="keys">活动名称：</span>
            <span>{{ inviteActiveList[0].name }}</span>
          </div>
          <div class="info-col-row">
            <span class="keys">活动状态：</span>
            <span>{{ inviteActiveList[0].state }}</span>
          </div>
          <div class="info-col-row">
            <span class="keys">奖励金额：</span>
            <span>{{ inviteActiveList[0].bonus }}</span>
          </div>
        </div>
        <div class="info-col">
          <div class="info-col-row">
            <span class="keys">活动日期：</span>
            <span>{{ inviteActiveList[0].activeDate }}</span>
          </div>
          <div class="info-col-row">
            <span class="keys special-keys">有效期：</span>
            <span>{{ inviteActiveList[0].useDate }}</span>
          </div>
          <div class="info-col-row">
            <span class="keys">使用规则：</span>
            <span>{{ inviteActiveList[0].rules }}</span>
          </div>
        </div>
        <div class="info-col">
          <div class="info-col-row">
            <span class="keys">创建时间：</span>
            <span>{{ inviteActiveList[0].createTime }}</span>
          </div>
          <div class="info-col-row">
            <span class="keys">修改时间：</span>
            <span>{{ inviteActiveList[0].amendTime }}</span>
          </div>
          <div class="info-col-row special-row">
            <el-popover placement="top" width="150" trigger="hover">
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
              >
                <el-button type="text" size="mini" @click="gotoAmendActive"
                  ><i class="el-icon-edit-outline"></i>编辑活动</el-button
                >
                <el-button type="text" size="mini" @click="openModalStop"
                  ><i class="el-icon-remove-outline"></i>暂停活动</el-button
                >
                <el-button type="text" size="mini" @click="openModalRecover"
                  ><i class="el-icon-circle-check"></i>恢复活动</el-button
                >
              </div>
              <el-button slot="reference" class="more-btn">
                <div class="circle">
                  <i class="el-icon-more"></i></div
              ></el-button>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
    <div class="search-box">
      <div class="content-search">
        <div class="input-box" ref="inputBox">
          <span class="span">流水号</span>
          <input
            class="input"
            v-model="num"
            type="text"
            @focus="changeNumCss"
            @blur="changeNum"
            placeholder="请输入流水号"
          />
        </div>
        <div class="input-box" ref="inputBox2">
          <span class="span">用户昵称</span>
          <input
            class="input"
            v-model="userName"
            type="text"
            @focus="changeUserNameCss"
            @blur="changeUserName"
            placeholder="请输入用户昵称"
          />
        </div>
        <div class="input-box" ref="inputBox3">
          <span class="span">手机号码</span>
          <input
            class="input"
            v-model="phoneNum"
            type="text"
            @focus="changePhoneNumCss"
            @blur="changePhoneNum"
            placeholder="请输入手机号码"
          />
        </div>
        <div class="input-box" ref="inputBox4">
          <span class="span">注册时间</span>
          <select
            v-model="registerDate"
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
      </div>
      <div class="content-search">
        <div class="input-box" ref="inputBox5">
          <span class="span">发放状态</span>
          <select
            v-model="sendState"
            @focus="changeStateCss"
            @blur="changeState"
            class="input"
          >
            <option value="0">全部状态</option>
            <option value="1">未下单</option>
            <option value="2">发放中</option>
            <option value="3">已发送</option>
          </select>
        </div>
      </div>
    </div>
    <div class="btn-box">
      <button class="reset-btn">重置</button>
      <button class="search-btn">搜索</button>
    </div>
    <div class="table-box">
      <table>
        <thead>
          <tr>
            <th>流水号<i class="el-icon-sort"></i></th>
            <th>邀请人昵称</th>
            <th>邀请人手机号</th>
            <th>被邀请人昵称</th>
            <th>被邀请人手机号</th>
            <th>被邀请人注册时间<i class="el-icon-sort"></i></th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in invitedList" :key="index">
            <td>{{ item.num }}</td>
            <td>{{ item.inviteName }}</td>
            <td>{{ item.invitePhone }}</td>
            <td>{{ item.invitedName }}</td>
            <td>{{ item.invitedPhone }}</td>
            <td>{{ item.reTime }}</td>
            <td>{{ item.state }}</td>
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
  name: "InvitedView",
  data() {
    return {
      visible: false,
      num: "",
      userName: "",
      phoneNum: "",
      registerDate: "1",
      sendState: "0",
      currentPage: 1,
      pageSizes: [10, 15, 20],
      pageSize: 10,
      totalCount: 407,
      inviteActiveList: [
        {
          name: "邀请有奖",
          state: "进行中",
          bonus: "50P",
          activeDate: "长期",
          useDate: "长期",
          rules: "无门槛红包",
          createTime: "2022-04-28 14:06:50",
          amendTime: "2022-04-28 14:06:50",
        },
      ],
      invitedList: [
        {
          num: "16232100000010",
          inviteName: "小默123",
          invitePhone: "+8613612345678",
          invitedName: "用户12345678",
          invitedPhone: "+8615812345678",
          reTime: "2022-04-27 16:29:02",
          state: "未下单",
        },
      ],
    };
  },
  methods: {
    changeNumCss() {
      console.log(this.$refs.inputBox);
      this.$refs.inputBox.style.background = "white";
      this.$refs.inputBox.style.border = "1px solid #4e73df";
      this.$refs.inputBox.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeNum() {
      this.$refs.inputBox.style.background = "#f5f5f5";
      this.$refs.inputBox.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox.style.boxShadow = "none";
    },
    changeUserNameCss() {
      console.log(this.$refs.inputBox);
      this.$refs.inputBox2.style.background = "white";
      this.$refs.inputBox2.style.border = "1px solid #4e73df";
      this.$refs.inputBox2.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeUserName() {
      this.$refs.inputBox2.style.background = "#f5f5f5";
      this.$refs.inputBox2.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox2.style.boxShadow = "none";
    },
    changePhoneNumCss() {
      console.log(this.$refs.inputBox);
      this.$refs.inputBox3.style.background = "white";
      this.$refs.inputBox3.style.border = "1px solid #4e73df";
      this.$refs.inputBox3.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changePhoneNum() {
      this.$refs.inputBox3.style.background = "#f5f5f5";
      this.$refs.inputBox3.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox3.style.boxShadow = "none";
    },
    changeDateCss() {
      this.$refs.inputBox4.style.background = "white";
      this.$refs.inputBox4.style.border = "1px solid #4e73df";
      this.$refs.inputBox4.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeDate() {
      this.$refs.inputBox4.style.background = "#f5f5f5";
      this.$refs.inputBox4.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox4.style.boxShadow = "none";
    },
    changeStateCss() {
      this.$refs.inputBox5.style.background = "white";
      this.$refs.inputBox5.style.border = "1px solid #4e73df";
      this.$refs.inputBox5.style.boxShadow = "0px 0px 2px 1px #6a9dee";
    },
    changeState() {
      this.$refs.inputBox5.style.background = "#f5f5f5";
      this.$refs.inputBox5.style.border = "1px solid #f5f5f5";
      this.$refs.inputBox5.style.boxShadow = "none";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    gotoAmendActive() {
      this.visible = false;
      this.$router.push("AmendActive");
    },
    openModalStop() {
      this.$confirm("确定要暂停该活动吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "暂停该活动成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消暂停该活动",
          });
        });
    },
    openModalRecover() {
      this.$confirm("确定要恢复该活动吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "恢复该活动成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消恢复该活动",
          });
        });
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #f4f5fd;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  font-size: 13px;
  margin-bottom: 30px;
}
.header .img {
  width: 100px;
  height: 100px;
  background-color: blue;
  margin-right: 20px;
}
.information {
  width: calc(100% - 160px);
  display: flex;
  justify-content: space-around;
}
.info-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.special-row {
  display: flex;
  justify-content: flex-end;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid black;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
}
.keys {
  color: #797979;
  margin-right: 10px;
}
.special-keys {
  margin-right: 23px;
}
.search-box {
  display: flex;
  flex-direction: column;
}
.content-search {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
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
.btn-box {
  margin-bottom: 20px;
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
  height: 45px;
  border-bottom: 1px solid #e4e4e4;
}
tbody tr:hover {
  background-color: #f4f5fd;
}
.page-box {
  display: flex;
  justify-content: flex-end;
  padding-right: 20%;
}
.item {
  background-color: transparent;
  padding: 0;
  border: none;
}
.more-btn {
  border: none;
  padding: 0;
  background-color: transparent;
}
</style>
