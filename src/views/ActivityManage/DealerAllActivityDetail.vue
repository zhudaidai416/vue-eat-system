<template>
  <div id="out" v-if="Ready">
    <!-- <div class="title">报名活动详情</div> -->
    <div class="size">
      <div class="RegisterDetailBox">
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">活动ID：</p><span>{{SingleActivityTableData[0].id}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">活动类型：</p><span>{{SingleActivityTableData[0].actype | actypefil}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">应用范围：</p><span>{{SingleActivityTableData[0].ranges}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">店铺类型：</p><span>{{SingleActivityTableData[0].storType | storTypefil}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">主营品类：</p><span>{{SingleActivityTableData[0].category | categoryfil}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">活动细则：</p><span>{{SingleActivityTableData[0].rulesCh}}<br />{{SingleActivityTableData[0].rulesEn}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">用户类型：</p><span>{{SingleActivityTableData[0].userType | userTypefil}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">使用方式：</p><span>{{SingleActivityTableData[0].useType}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">活动日期：</p><span>{{SingleActivityTableData[0].acData}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">报名日期：</p><span>{{SingleActivityTableData[0].applicationData}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">报名费用：</p><span>{{SingleActivityTableData[0].applicationExp}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">报名名额：</p><span>{{SingleActivityTableData[0].applicationPlaces}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">状态：</p><span>{{SingleActivityTableData[0].status | acaStatusfil}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">报名量：</p><span>{{SingleActivityTableData[0].applicationNum}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">创建时间：</p><span>{{SingleActivityTableData[0].createTime}}</span></div>
        <div class="RegisterDetailItem"><p class="RegisterDetailTitle">修改时间：</p><span>{{SingleActivityTableData[0].updateTime}}</span></div>
        
      </div>
      <div class="ButtonBox">
        <el-button type="primary" icon="el-icon-edit" @click="ToEdit(SingleActivityTableData[0].id)">编辑活动</el-button>
        <el-button type="primary" icon="el-icon-refresh-left" @click="gotoPostNewActivity">重新发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name : 'DealerAllActivityDetail',
  data(){
    return{
      id:null,
      SingleActivityTableData:[],
      currentPage:1,
      pageSize:1,
      Ready:false,
    }
  },
  filters:{
    acaStatusfil(val){
      if(val == 1){
        return '未开始'
      }
      if(val == 2){
        return '进行中'
      }
      if(val == 3){
        return '已暂停'
      }
      if(val == 4){
        return '已结束'
      }
    },
    actypefil(val){
      if(val == 1){
        return '满500P减50P'
      }
      if(val == 2){
        return '免基础配送费'
      }
      if(val == 3){
        return '五折钜惠商家'
      }
      if(val == 4){
        return '新店八折特惠'
      }
    },
    storTypefil(val){
      if(val == 1){
        return '餐饮店铺'
      }
      if(val == 2){
        return '零售店铺'
      }
    },
    categoryfil(val){
      if(val == 1){
        return '品类一'
      }
      if(val == 2){
        return '品类二'
      }
      if(val == 3){
        return '品类三'
      }
      if(val == 4){
        return '品类四'
      }
    },
    userTypefil(val){
      if(val == 1){
        return '所有用户'
      }
      if(val == 2){
        return '新注册用户'
      }
      if(val == 3){
        return '店铺新用户'
      }
    },
  },
  methods:{
    gotoPostNewActivity(){
      this.$router.push("PostNewActivity")
    },
    
    ToEdit(val){
      this.$router.push("EditPostNewActivity?id=" + val)
    },
    getSingleActivityData(){
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/application/queryAcaBySome",
        params: {
          currentPage:this.currentPage,
          pageSize:this.pageSize,

          id:this.id,
        },
      })
      .then((res) => {
        console.log("请求成功", res);
        this.SingleActivityTableData = res.data.data;
        this.Ready = true
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    },
  },
  created(){
    this.id = this.$route.query.id
  },
  mounted(){
    this.getSingleActivityData()
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

.RegisterDetailBox{
  padding: 20px;
  width: calc(100% - 40px);
  font-size: 13px;

}

.RegisterDetailItem{
  width: 100%;
  display:flex;
  margin-bottom: 20px;
}
.RegisterDetailTitle{
  width: 8%;
  color: #797979;
}
.ButtonBox{
  width: 100%;
  padding-left: 5%;
}
.ButtonBox button{
  width: 130px;
  height: 35px;
  margin-right: 15px;
  text-align: center;
}

</style>