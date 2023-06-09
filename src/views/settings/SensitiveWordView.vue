<template>
  <div class="sensitive">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="中文敏感词" name="first">
        <CnSensitive></CnSensitive>
      </el-tab-pane>
      <el-tab-pane label="英文敏感词" name="second">
        <EnSensitive></EnSensitive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CnSensitive from "../../components/settings/CnSensitive.vue";
import EnSensitive from "../../components/settings/EnSensitive.vue";

export default {
  name:'SensitiveWordView',
  components: {
    CnSensitive,
    EnSensitive
  },
  data() {
    return {
      activeName: 'first',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style>
.sensitive{
  width: 100%;
  /* border: 1px solid red; */
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: white;
}
</style>
