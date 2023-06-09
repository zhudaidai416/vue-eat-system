<template>
  <div id="commentDetailBox">
    <div id="DealInfo">
      <p class="subTitle">订单信息</p>
      <div class="DealInfoItem"><p class="DealInfoItemTitle">订单编号:</p><span class="normalFont">{{obj.DealNum}}</span> <span class="normalFont blueFont">复制</span></div>
      <div class="DealInfoItem"><p class="DealInfoItemTitle">订单类型:</p><span class="normalFont fontWeightSevenHundred">{{obj.DealType}}</span></div>
      <div class="DealInfoItem"><p class="DealInfoItemTitle">创建时间:</p><span class="normalFont">{{obj.createdTime}}</span></div>
      <div class="DealInfoItem"><p class="DealInfoItemTitle">成交时间:</p><span class="normalFont">{{obj.DealTime}}</span></div>
      <div class="DealInfoItem"><p class="DealInfoItemTitle">买家昵称:</p><span class="normalFont blueFont">{{obj.DealerName}}</span></div>
      <div class="DealInfoItem"><p class="DealInfoItemTitle">店铺名称:</p><span class="normalFont blueFont">{{obj.StoreName}}</span></div>
      <div class="DealInfoItem"><p class="DealInfoItemTitle">配送方式:</p><span class="normalFont fontWeightSevenHundred">{{obj.DeliveryWay}}</span></div>
      <div class="DealInfoItem"><p class="DealInfoItemTitle">配送员:</p><span class="normalFont blueFont">{{obj.DeliveryManDetail}}</span></div>
      <div class="DealInfoItemOfGoods">
        <p class="DealInfoItemTitle">商品明细:</p>
        <div class="GoodsItemBox">
          <div class="GoodsItem">
            <div class="GoodsItemPic">
              <img src="../../assets/logo.png">
            </div>
            <div class="GoodsItemPicText">
              <p class="GoodsItemPicTextTitle">{{obj.goodsName}}</p>
              <p class="GoodsItemPicTextContent">{{obj.goodsTip}}</p>
              <p class="GoodsItemPicTextContent">{{obj.goodsTip}}</p>
            </div>
            <div class="goodsNum">x{{obj.goodsNum}}</div>
          </div>
          <div class="GoodsItem">
            <div class="GoodsItemPic">
              <img src="../../assets/logo.png">
            </div>
            <div class="GoodsItemPicText">
              <p class="GoodsItemPicTextTitle">{{obj.goodsName}}</p>
              <p class="GoodsItemPicTextContent">{{obj.goodsTip}}</p>
              <p class="GoodsItemPicTextContent">{{obj.goodsTip}}</p>
            </div>
            <div class="goodsNum">x{{obj.goodsNum}}</div>
          </div>
          <div class="GoodsItem">
            <div class="GoodsItemPic">
              <img src="../../assets/logo.png">
            </div>
            <div class="GoodsItemPicText">
              <p class="GoodsItemPicTextTitle">{{obj.goodsName}}</p>
              <p class="GoodsItemPicTextContent">{{obj.goodsTip}}</p>
              <p class="GoodsItemPicTextContent">{{obj.goodsTip}}</p>
            </div>
            <div class="goodsNum">x{{obj.goodsNum}}</div>
          </div>
          <div class="GoodsItem">
            <div class="GoodsItemPic">
              <img src="../../assets/logo.png">
            </div>
            <div class="GoodsItemPicText">
              <p class="GoodsItemPicTextTitle">{{obj.goodsName}}</p>
              <p class="GoodsItemPicTextContent">{{obj.goodsTip}}</p>
              <p class="GoodsItemPicTextContent">{{obj.goodsTip}}</p>
            </div>
            <div class="goodsNum">x{{obj.goodsNum}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="commentBox">
      <p class="subTitle">订单信息</p>
      <div class="commentItem">
        <div class="itemPersonMsg">
          <div class="AvatorStyle">
            <img src="../../assets/logo.png">  
          </div>

          <div class="verifyStateStyle">{{itemList[0].verifyState}}</div>

          <div>
            <div>
              <span class="customerName">{{itemList[0].customerName}}</span>
              <div class="roleTip">{{itemList[0].role}}</div>
            </div>
          </div>
          <p class="commentTime">{{itemList[0].createTime}}</p>
          <div class="starBox">
            <img src="../../assets/images/五星.png" class="StarImg">
            <img src="../../assets/images/五星.png" class="StarImg">
            <img src="../../assets/images/五星.png" class="StarImg">
            <img src="../../assets/images/五星.png" class="StarImg">
            <img src="../../assets/images/五星off.png" class="StarImg">
          </div>
          <p class="commentText">{{itemList[0].comment}}</p>
          <div class="commentReply">
            <p>商家回复：感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！<span class="timeTip">— 2022-02-15 17:18:28</span></p>
            <div class="verifyReplayStateStyle">{{itemList[0].verifyState}}</div>
          </div>
        </div>
        <div class="auditingResults">
          <p class="auditingResultsTitle">审核意见</p>
          <div class="auditingResultsItem">
            <div class="auditingResultsItemBox"><p class="auditingResultsItemTitle">审核人:</p><span>周审核</span></div>
            <div class="auditingResultsItemBox"><p class="auditingResultsItemTitle">审核结果:</p><span>拒绝</span></div>
            <div class="auditingResultsItemBox"><p class="auditingResultsItemTitle">拒绝原因:</p><span>存在刷单嫌疑</span></div>
            <div class="auditingResultsItemBox"><p class="auditingResultsItemTitle">审核时间:</p><span>2022-05-15 18:09:50</span></div>
          </div>
          <div class="auditingResultsItem">
            <div class="auditingResultsItemBox"><p class="auditingResultsItemTitle">审核人:</p><span>周审核</span></div>
            <div class="auditingResultsItemBox"><p class="auditingResultsItemTitle">审核结果:</p><span>拒绝</span></div>
            <div class="auditingResultsItemBox"><p class="auditingResultsItemTitle">拒绝原因:</p><span>存在刷单嫌疑</span></div>
            <div class="auditingResultsItemBox"><p class="auditingResultsItemTitle">审核时间:</p><span>2022-05-15 18:09:50</span></div>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  export default {
    name:'commentDetail',
    data(){
      return{
        obj:{
          DealNum:'12232964103521',
          createdTime:'2022-12-03 15:55:21',
          DealTime:'2022-12-03 16:30:06',
          DealType:'外卖订单',
          DealerName:'zhangsan123',
          StoreName:'辣小龙小龙虾湘菜馆（凤凰广场店）',
          DeliveryWay:'平台专送',
          DeliveryManDetail:'王骑手，+8613612345678',
          imgsrc:'../../assets/logo.png',
          goodsName:'小龙虾（全家桶）',
          goodsTip:'规格 ： 五斤',
          goodsNum:2
        },
        itemList: [
          {
            DealNumber:12232964103521,
            deliveryMan:'王骑手',
            customerName:'zhangsan123',
            role:'商家',
            verifyState: '审核通过',
            createTime:'2022.12.03 15:47:51',
            comment:'有点慢了，但是大风大雨的，送餐速度还能准时,辛苦外卖小哥哥了.'
          }
        ]
      }
    },
    methods:{
    }
  }

</script>
<style scoped>
#commentDetailBox{
  padding: 40px;
  width: calc(100% - 80px);
  height: 100%;
  display: flex;
}
#DealInfo{
  width: 50%;
  border-right: 1px dashed #797979;
}
.subTitle{
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  color: #000000;
  padding-bottom: 15px;
}
.DealInfoItem{
  line-height: 20px;
  height: 20px;
  margin: 20px 0;
  width: 100%;
  display: flex;
}
.DealInfoItemOfGoods{
  margin: 20px 0;
  width: 100%;
  display: flex;
}
.DealInfoItemTitle{
  font-weight: 400;
  color: #797979;
  font-size: 14px;
  width: 10%;
  display: inline-block;
}
.normalFont{
  font-weight: 400;
  color: #000000;
  font-size: 14px;
  line-height: 20px;
  padding-left: 10px;
}
.blueFont{
  color: #4E73DF;
}
.fontWeightSevenHundred{
  font-weight: 700;
}
.GoodsItemPic{
  width: 80px;
  height: 80px;
}
.GoodsItemPic img{
  width: 80px;
  height: 80px;
}
.GoodsItemBox{
  width:80%;
  display: flex;
  flex-direction: column;
}
.GoodsItem{
  padding-left: 10px;
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 20px;
}
.GoodsItemPicText{
  width: 50%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.GoodsItemPicTextTitle{
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #4E73DF;
  line-height: 25px;
}
.GoodsItemPicTextTitle{
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: #4E73DF;
  line-height: 25px;
}
.GoodsItemPicTextContent{
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  line-height: 25px;
  color: #999999;
}
.goodsNum{
  width: 15%;
  height: 80px;
  line-height: 80px;
  font-size: 15px;
  color: #000000;
  display: flex;
  align-content: center;
}
.commentBox{
  padding-left: 40px;
  width: calc(50% - 41px);
  display: flex;
  flex-direction: column;

}
.commentItem{
  width: 100%;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
}

.itemPersonMsg{
  width: 100%;
  padding:15px 15px 15px 80px;
  box-sizing: border-box;
  position: relative;
  border-radius: 5px;
}
.AvatorStyle{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 15px;
  top: 15px;
}
.AvatorStyle > img{
  width: 50px;
  height: 50px;
}
.customerName{
  font-size: 13px;
  height: 25px;
  line-height: 25px;
}
.roleTip{
  width: 30px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  color: #ffffff;
  background-color: #a7b9ef;
  margin-left: 5px;
  border-radius: 2px;
  text-align: center;
  display: inline-block;
}
.verifyStateStyle{
  width:55px;
  height:16px;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  background-color: #339933;
  position: absolute;
  right: -5px;
  top: 18px;
}
.commentTime{
  font-size: 12px;
  color: #999999;
  margin: 5px 0;
}
.commentText{
  font-size: 14px;
  padding:5px 0;
}
.starBox{
  height: 20px;
}
.StarImg{
  margin-right: 10px;
}
.commentReply{
  width: 100%;
}
.commentReply p{
  width: 100%;
  padding:5px 15px;
  background-color: #fafafa;
}
.verifyReplayStateStyle{
  width:55px;
  height:16px;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  background-color: #339933;
  position: absolute;
  right: -5px;
  bottom: 7px;
}
.commentReply{
  width: 100%;
  position: relative;
}
.commentReply p{
  width: calc(100% - 20px);
  padding:10px;
  background-color: #fafafa;
  font-size: 13px;
  font-weight: 400;
  color: #666666;
}
.timeTip{
  font-weight: 400;
  font-size: 12px;
  color: #999999;
}
.auditingResults{
  width: calc(100% - 40px);
  padding: 20px;
  background-color: #fafafa;
  border-radius: 0 0 5px 5px;
}
.auditingResultsTitle{
  font-size: 13px;
  line-height: 15px;
  color: #333333;
  font-weight: 700;
}
.auditingResultsItem{
  width: 100%;
  padding-top: 20px;
}
.auditingResultsItemBox{
  width: 100%;
  display: flex;
  padding-bottom: 10px;
}
.auditingResultsItemBox span{
  font-size: 13px;
  font-weight: 400;
}
.auditingResultsItemTitle{
  width: 12%;
  font-weight: 400;
  color: #797979;
  font-size: 13px;

}
</style>