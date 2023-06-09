<template>
  <el-button class="index-button">
    +&nbsp;
    <slot></slot>
  </el-button>
</template>
<script>
export default {
  name: 'cpn',
  data() {
    return {
      msg: 'Hello Vue.js',
    }
  },
}
</script>
<style scoped>
.el-button {
  width: auto;
  height: 30px;
  line-height: 8px;
  /* background-color: red; */
  border-radius: 30px;
  border: 1px solid rgb(45, 45, 255);
  color: rgb(45, 45, 255);
  font-size: 12px;
  margin-right: 20px;
}
</style>
