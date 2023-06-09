<template>
  <div id="out">
    <!-- <div class="title">商家报名活动</div> -->
    <div class="size">
      <el-tabs v-model="activeName">
        <el-tab-pane label="所有报名活动" name="second"><AllActivity /></el-tab-pane>
        <el-tab-pane label="所有商家报名" name="first"><AllDealer /></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import AllDealer from '../../components/ActivityManage/AllDealer.vue'
import AllActivity from '../../components/ActivityManage/AllActivity.vue'


export default {
  name : 'DealerJoin',
  components : {
    AllDealer,
    AllActivity
  },
  data(){
    return{
      activeName: 'second'
    }
  }
}

</script>

<style scoped>
#out{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
}

.title{
  width: calc(100% - 50px);
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  color: black;
  text-align: start;
  margin-left: 50px;
}

.size{
  width: calc(100% - 100px);
  height: calc(100% - 80px);
  background-color: #ffffff;
  border-radius: 10px;
  margin : 20px 50px 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
.el-tabs{
  width: calc(100% - 40px);
  margin-top: 10px;
}

</style>