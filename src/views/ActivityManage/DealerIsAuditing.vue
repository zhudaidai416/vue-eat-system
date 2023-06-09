<template>
  <div id="DealerSelfDetail">
    <!-- <div class="title">商家自建活动详情</div> -->
    <div class="DealerSelfDetailBody">
      <div class="PicHead">
        <div class="PicBox">
          <img src="../../assets/logo.png" alt="">
          <p class="tip">待审核</p>
        </div>
        <div class="PicHeadText">
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">活动ID: </p>
            <span>100000004</span>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">活动类型：</p>
            <span>店铺代金券</span>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">活动状态：</p>
            <span>审核中</span>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">所属店铺：</p>
            <el-link type="primary">辣小龙小龙虾湘菜馆（凤凰广场）</el-link>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">所在地：</p>
            <span>广东 深圳 龙华</span>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">创建时间：</p>
            <span>2022-04-26 14:00:52</span>
          </div>
          <div class="PicHeadTextItem">
            <p class="PicHeadTextItemTitle">修改时间：</p>
            <span>2022-04-28 14:06:50</span>
          </div>
        </div>
      </div>
      <div class="BasicInfoTitle">
        <p class="BlueStyle">▶</p><p>基本信息</p>
      </div>
      <div class="BasicInfo">
        <p class="BasicInfoDetailTitle">活动信息</p>
        <div class="BasicInfoDetailItem"><p>优惠金额：</p><span>50P</span></div>
        <div class="BasicInfoDetailItem"><p>达标金额：</p><span>500P</span></div>
        <div class="BasicInfoDetailItem"><p>发放总数量：</p><span>1000张</span></div>
        <div class="BasicInfoDetailItem"><p>用户类型：</p><span>店铺新用户</span></div>
        <div class="BasicInfoDetailItem"><p>发放日期：</p><span>2022-05-01 至 2022-05-31</span></div>
        <div class="BasicInfoDetailItem"><p>可用日期：</p><span>2022-05-01 至 2022-05-31</span></div>
        <div class="BasicInfoDetailItem"><p>使用方式：</p><span>移动端</span></div>
        <div class="BasicInfoDetailItem"><p>同享活动：</p><span>本活动与店铺满减同享</span></div>
      </div>
    </div>
  </div>




  
</template>

<script>
export default {
  name : 'DealerIsAuditing',
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
#DealerSelfDetail{
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
.DealerSelfDetailBody{
  width: calc(100% - 140px);
  height: calc(100% - 80px);
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin : 20px 50px 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
.PicHead{
  padding: 20px;
  width: calc(100% - 40px);
  height: 100px;
  background: #f5f6fd;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
}
.PicBox{
  width: 100px;
  height: 100px;
  position: relative;
  background: darkcyan;
}
.PicBox img{
  width: 100px;
  height: 100px;
}
.tip{
  width: 41px;
  height: 16px;
  background: #ff9900;
  color: #ffffff;
  text-align: center;
  line-height: 16px;
  position: absolute;
  right: -10px;
  top: 5px;
  font-size: 12px;
}
.PicHeadText{
  width: calc(100% - 160px);
  column-count: 3;
  padding-left: 60px;
  font-size: 13px;
}
.PicHeadTextItem{
  width: 100%;
  padding-bottom: 20px;
  display: flex;
}
.PicHeadTextItemTitle{
  width: 25%;
}
.BasicInfoTitle{
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  height: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.BasicInfoTitle p{
  height: 20px;
  line-height: 20px;
}
.BlueStyle{
  color: #4e73df;
  padding-right: 5px;
  font-size: 13px;
}
.BasicInfo{
  background: #fafafa;
  width: calc(100% - 40px);
  padding: 20px 20px 0 20px;
  font-size: 13px;
}
.BasicInfoDetailItem p{
  color: #797979;
}
.BasicInfoDetailTitle{
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 20px;
  padding-top: 10px;
}
.BasicInfoDetailItem{
  display: flex;
  padding-bottom: 20px;
}
.BasicInfoDetailItem p{
  width: 8%;
}
.textBox{
  width: 70%;
}
.textBox p{
  width: 100%;
  color: #000000;
  padding-bottom: 2px;
}

</style>