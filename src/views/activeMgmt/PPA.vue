<template>
  <div class="platform-promotion-activities">
    <!-- <div class="header">
      <p>平台推广活动</p>
    </div> -->
    <div class="content">
      <div class="content-tabs">
        <el-tabs v-model="tabs" @tab-click="handleClick">
          <el-tab-pane label="外卖首页ICON" name="first"
            ><IconView
          /></el-tab-pane>
          <el-tab-pane label="邀请有奖活动" name="second"
            ><invitedView
          /></el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import IconView from "../../components/activeMgmt/ICON.vue";
import invitedView from "../../components/activeMgmt/invited.vue";
export default {
  name: "PPA",
  data() {
    return {
      tabs: "first",
    };
  },
  components: {
    IconView,
    invitedView,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.platform-promotion-activities {
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
</style>
