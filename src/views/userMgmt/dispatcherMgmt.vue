<template>
    <div>
      <div class="containerS">
        <div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="骑手招募审核" name="first">
                <DispatcherRecruitEx></DispatcherRecruitEx>
            </el-tab-pane>
            <el-tab-pane label="已入驻配送员" name="second">
                <DispatcherHosted></DispatcherHosted>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
</template>

<script>
import "../../assets/css/base_s.css";
import DispatcherRecruitEx from "../../components/userMgnt/dispatcherRecruitEx";
import DispatcherHosted from "../../components/userMgnt/dispatcherHosted";
export default {
  name: "dispatcherMgmt",
  data() {
    return {
      activeName: "first",
    };
  },
  components:{
    DispatcherRecruitEx,//骑手招募审核
    DispatcherHosted,//已入驻配送员
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>