<template>
  <div class="account">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="子账号管理" name="first">
        <AccountManage></AccountManage>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="second">
        <RoleManage></RoleManage>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AccountManage from "../../components/settings/AccountManage.vue";
import RoleManage from "../../components/settings/RoleManage.vue";

export default {
  name: "AccountView",
  components: {
    AccountManage,
    RoleManage,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style>
.account {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: white;
}
</style>
