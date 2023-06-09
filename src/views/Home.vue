<template>
  <div class="layout">
    <el-container>
      <el-aside width="300px" class="myAside">
        <AllSubassembly></AllSubassembly>
      </el-aside>
      <el-container direction="vertical" class="rightMain">
        <!-- <el-header> -->
        <SysHeader></SysHeader>
        <!-- </el-header> -->
        <!-- <el-main :style='{height:mainHeight}'><router-view></router-view></el-main> -->
        <div class="index-content">
          <div class="index-content-header">
            <h1>{{this.$store.state.pageName}}</h1>
            <span @click="backPage" class="el-icon-refresh-left back" v-if="this.$store.state.is_back">返回</span>
          </div>
          <div class="index-content-main">
            <keep-alive include="DealerJoin">
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AllSubassembly from "../components/AllSubassembly.vue";
import SysHeader from "../components/SysHeader.vue";
export default {
  name: "Home",
  components: {
    SysHeader,
    AllSubassembly,
  },
  data() {
    return {
      mainHeight: "200px",
      themColor: {
        default: {
          bodyColor: {
            bg: "#f6f8fc",
            color: "#666",
          },
        },
      },
    };
  },
  created() {
    this.mainHeight = window.innerHeight - 60 + "px";
  },
  methods: {
    backPage() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.layout {
  background-color: #ffffff;
}
.myAside {
  border-radius: 0 50px 0 0;
  text-align: center;
  /* height: 100%; */
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.rightMain {
  padding-left: 300px;
}
.index-content {
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}
.index-content-header {
  width: 97%;
  height: 60px;
  /* padding-left: 10px; */
  box-sizing: border-box;
  /* background-color: rgb(76, 161, 154); */
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}
.index-content-main {
  padding: 10px 15px;
  box-sizing: border-box;
  width: 97%;
  /* height: 100vh; */
  min-height: calc(100% - 80px);
  /* background-color: blue; */
  background-color: #ffffff;
  border-radius: 5px;
}
.back{
  color: blue;
  cursor: pointer;
  font-size: 18px;
}
</style>
