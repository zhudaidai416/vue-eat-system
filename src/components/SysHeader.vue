<template>
  <el-header class="sys-header">
    <el-row>
      <el-col :span="8" :offset="1">
        <div style="margin-top: 0px">
          <el-input placeholder="陈商家" class="input-with-select">
            <el-button
              slot="append"
              @click="toSearchView" class="el-icon-search"
            ></el-button>
          </el-input>
        </div>
      </el-col>

      <el-col :span="1" :offset="14">
        <el-dropdown @command="handleCommand" class="header-dropdown">
          <span class="el-dropdown-link" style="color: #505050">
            {{ $store.state.username }}<i class="el-icon-s-custom">周审核</i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/settings-personal">
              <i class="el-icon-user-solid"></i>个人设置
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item
              ><router-link to="/settings-log"
                ><i class="el-icon-s-unfold"></i>操作日志</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item command="quit"
              ><i class="el-icon-close"></i>退出系统</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "SysHeader",
  methods: {
    ...mapActions(["removeToken"]),
    handleCommand(command) {
      //点击下拉菜单选项时触发，参数为下拉选项的command属性值，通过该值判断点击了哪一个下拉项
      switch (command) {
        case "quit":
          this.quitSys();
          break;
      } 
    },
    quitSys() {
      this.removeToken();
      this.$router.push("/login");
    },
    toSearchView() {
      // console.log(111);
      this.$router.push("/search");
    },
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.sys-header {
  width: calc(100% - 300px);
  line-height: 60px;
  background-color: #ffffff;
  /* box-shadow: 16px 18px 4px 0px red; */
  /* box-shadow:  0px 2px 12px 0 rgba(0, 0, 0, 0.1) */
  /* border-bottom: 2px solid rgb(145, 142, 142); */
  border-bottom: 2px solid #e1e1e1;
  position: fixed;
  z-index: 997;
  top: 0;
  left: 300px;
}
.header-title {
  float: left;
  height: 60px;
  color: #fff;
}
.header-dropdown {
  float: right;
  z-index: 1000;
}
a {
  text-decoration: none;
  color: black;
}
.router-link-active {
  text-decoration: none;
  color: black;
}
.el-icon-s-custom {
  font-size: 22px;
  width: 100px;
}
.el-dropdown-link{
  cursor: pointer;
}
.el-icon-search{
  border-color: #3e65d0 !important;
  color: #ffffff !important;
}
.el-button{
  background-color: #417ce2 !important;
}
</style>
