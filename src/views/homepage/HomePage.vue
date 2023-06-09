<template>
  <div id="home">
    <div class="home-body">
      <div class="home-body-titile">
        <span class="home-body-titile-span1">实时概况</span>
        <span class="home-body-titile-span2">数据更新时间：{{getNowDate()}}</span>
      </div>
      <GeneralSituation />
      <span class="home-body-span">快捷工具</span>
      <ChromeToolbox />
      <DataStatistics />
      <TransactionAnalysis />
    </div>
  </div>
</template>

<script>
import GeneralSituation from "../../components/Homepageview/GeneralSituation.vue";
import ChromeToolbox from "../../components/Homepageview/ChromeToolbox.vue";
import DataStatistics from "../../components/Homepageview/DataStatistics.vue";
import TransactionAnalysis from "../../components/Homepageview/TransactionAnalysis.vue";

export default {
  name: "HomePage",
  date() {
    return {
        
    };
  },
  // created() {
  //   this.$axios({
  //     method: 'GET',
  //         url: 'http://127.0.0.1:4523/m1/1705858-0-default/HomePage',
  //         params:{
  //           id: 4
  //         }
  //   })
  //   .then(res => {
  //         console.log(res)
  //         // console.log('登录请求成功：', res.data)
  //         // if(res.data.code === 200) {
            
  //         // }
  //       }) 
  //       .catch(err => {
  //         console.log('请求错误：', err)
  //       })
  // },
  methods: {
    getNowDate() {
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      this.gettime = yy + "-" + mm + "-" + dd + " " + hh + "-" + mf + "-" + ss;
      return this.gettime
    },
  },
  components: {
    GeneralSituation,
    ChromeToolbox,
    DataStatistics,
    TransactionAnalysis,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

#home {
  margin: 0 50px;
  background-color: #f5f5f5;
}

.home-body {
  background-color: #f5f5f5;
}
.home-body-titile {
  padding: 20px;
}
.home-body-titile-span1 {
  color: #000000;
  font-size: 18px;
}
.home-body-titile-span2 {
  margin-left: 2%;
  color: #666666;
  font-size: 13px;
}

.home-body-span {
  font-size: 18px;
  padding: 20px;
}
</style>
