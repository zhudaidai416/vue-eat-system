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
    <div class="AuditingBox">
      <div id="AuditingIdeaInSelf">
        <div class="AuditingIdeaInSelfIcon">
          <div class="AuditingIdeaInSelfIconText">
            <p>审</p>
            <p>核</p>
            <p>意</p>
            <p>见</p>
          </div>
        </div>
        <div class="AuditingContent">
          <div class="AuditingContentLeft">
            <div class="AuditingContentLeftBox">
              <p class="AuditingContentLeftTitle">当前审核人：</p>周审核
            </div>
            <div class="AuditingContentLeftBox">
              <p class="AuditingContentLeftTitle">审核结果：</p>
              <div class="optionBox">
                <el-radio v-model="radio" label="1">同意</el-radio>
                <el-radio v-model="radio" label="2">拒绝</el-radio>
              </div>
            </div>
            <div class="AuditingContentLeftBox">
              <p class="AuditingContentLeftTitle">拒绝原因：</p>
              <el-select v-model="value" placeholder="请选择原因">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="AuditingContentRight">
            <div class="AuditingContentRightTitle">补充说明：</div>
            <div class="AuditingContentRightContent">
              <div class="AuditingContentRightInput"><el-input v-model="input1" placeholder="请输入中文补充说明"></el-input><p>0/200（选填）</p></div>
              <div class="AuditingContentRightInput"><el-input v-model="input2" placeholder="请输入英文补充说明"></el-input><p>0/500（选填）</p></div>
              <div class="AuditingContentRightButton">
                <el-button>取消</el-button>
                <el-button type="primary">确定</el-button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>




  
</template>

<script>
export default {
  name : 'DealerWaitingAuditing',
  data(){
    return{
      radio:'1',
      input1:'',
      input2:'',
      options: [{
        value: '选项1',
        label: '拒绝原因1'
      }, {
        value: '选项2',
        label: '拒绝原因2'
      }, {
        value: '选项3',
        label: '拒绝原因3'
      }],
      value: ''
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
.AuditingBox{
  width: calc(100% - 100px);
  padding-bottom: 20px;
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
  background: orange;
}
.PicBox img{
  width: 100px;
  height: 100px;
}
.tip{
  width: 41px;
  height: 16px;
  background: #4e73df;
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


#AuditingIdeaInSelf{
  width: calc(100% - 10px);
  height: 145px;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
}
.AuditingIdeaInSelfIcon{
  width: 55px;
  height: 145px;
  background-color: #eef1fc;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.AuditingIdeaInSelfIconText{
  width: 55px;
  height: 105px;
}
.AuditingIdeaInSelfIconText p{
  height: 25%;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  color: #000000;
}

.AuditingContent{
  width: calc(100% - 55px);
  height: 145px;
  display: flex;
}
.AuditingContentLeft{
  width: calc(40% - 40px);
  height: 105px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #333333;
  border-right:1px dashed #e4e4e4;
}

.AuditingContentLeftBox{
  width: 100%;
  display: flex;
  margin-bottom: 20px;
} 
.AuditingContentLeftTitle{
  width: 90px;
  display: inline-block;
} 
.el-select{
  width: calc(100% - 90px);
}
.optionBox{
  padding-top: 1px;
}

.AuditingContentRight{
  width: calc(60% - 21px);
  height: 105px;
  padding: 10px;
  display: flex;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #333333;
}
.AuditingContentRightTitle{
  width: 10%;
  padding-top: 10px;
  color: #999999;

}
.AuditingContentRightContent{
  width: 90%;
}
.AuditingContentRightInput{
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
}
.AuditingContentRightInput p{
  width: 100px;
  display: inline-block;
  font-size: 12px;
  padding-left: 10px;
  color: #999999;
}
.AuditingContentRightButton button{
  height: 30px;
  padding-top: 8px;
}
</style>