<template>
  <div id="ItemShow">
    <div class="itemBox">
      <div class="itemHeader">
        <div class="itemHeaderLeft">
          <span>订单号:{{itemList[0].DealNumber}}</span>
          <span>配送员: <a>{{itemList[0].deliveryMan}}</a></span>
        </div>
        <div class="itemHeaderRight">
          <span @click="GoToCommentDetail">评价详情 ></span>
        </div>
      </div>

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
        <div class="StarWithTitle">
          <span>商家：</span>
          <div class="starBox">
            <img src="../../assets/images/五星.png" class="StarImg">
            <img src="../../assets/images/五星.png" class="StarImg">
            <img src="../../assets/images/五星.png" class="StarImg">
            <img src="../../assets/images/五星.png" class="StarImg">
            <img src="../../assets/images/五星off.png" class="StarImg">
          </div>
          <span class="StarWithTitleSub">包装4星</span>
          <span class="StarWithTitleSub">味道5星</span>
          <span></span>
        </div>
        <div class="StarWithTitle">
          <span>推荐：</span>
          <span class="StarWithTitleSubText">口水鸡，小鸡炖蘑菇</span>
        </div>
        <div class="StarWithTitle">
          <span>点踩：</span>
          <span class="StarWithTitleSubText">水煮鱼</span>
        </div>

        <p class="commentText">{{itemList[0].comment}}</p>
        <div class="commentPics">
          <img src="../../assets/logo.png">
          <img src="../../assets/logo.png">
          <img src="../../assets/logo.png">
        </div>
        <div class="commentReply">
          <p>商家回复：感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！<span class="timeTip">— 2022-02-15 17:18:28</span></p>
          <div class="verifyReplayStateStyle">{{itemList[0].verifyState}}</div>
        </div>
      </div>

    </div>
    <div class="itemBox">
      <div class="itemHeader">
        <div class="itemHeaderLeft">
          <span>订单号:{{itemList[0].DealNumber}}</span>
          <span>配送员: <a>{{itemList[0].deliveryMan}}</a></span>
        </div>
        <div class="itemHeaderRight">
          <span>评价详情 ></span>
        </div>
      </div>

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
        <div class="commentPics">
          <img src="../../assets/logo.png">
          <img src="../../assets/logo.png">
          <img src="../../assets/logo.png">
        </div>
        <div class="commentReply">
          <p>商家回复：感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！感谢亲的惠顾！<span class="timeTip">— 2022-02-15 17:18:28</span></p>
          <div class="verifyReplayStateStyle">{{itemList[0].verifyState}}</div>
        </div>
      </div>

    </div>
    <div class="itemBox">
      <div class="itemHeader">
        <div class="itemHeaderLeft">
          <span>订单号:{{itemList[0].DealNumber}}</span>
          <span>配送员: <a>{{itemList[0].deliveryMan}}</a></span>
        </div>
        <div class="itemHeaderRight">
          <span>评价详情 ></span>
        </div>
      </div>

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

    </div>
    <div class="itemBox">
      <div class="itemHeader">
        <div class="itemHeaderLeft">
          <span>订单号:{{itemList[0].DealNumber}}</span>
          <span>配送员: <a>{{itemList[0].deliveryMan}}</a></span>
        </div>
        <div class="itemHeaderRight">
          <span>评价详情 ></span>
        </div>
      </div>

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
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:'ShowItems',
  data(){
    return{
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
    GoToCommentDetail(){
      this.$router.push("CommentDetail")
    }
  },
}
</script>

<style scoped>
#ItemShow{
  width: calc(100% - 40px);
  column-count: 2;
  padding: 20px;
}
.itemBox{
  width:100%;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  margin-bottom: 20px;
  page-break-inside: avoid;
}
.itemHeader{
  width:100%;
  height: 38px;
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
  border-radius: 5px;
  border-bottom: 1px solid #e4e4e4;
}
.itemHeader span{
  padding-right: 20px;
  padding-left: 10px;
  height:38px;
  line-height: 38px;
  font-size: 12px;
  color:#797979;
}
.itemHeaderLeft{
  display: flex;
}
.itemHeaderLeft a{
  color:#4e73df;
  cursor: pointer;
}
.itemHeaderRight span{
  color:#4e73df;
  cursor: pointer;
}
.itemPersonMsg{
  width: 100%;
  padding:15px 15px 15px 80px;
  box-sizing: border-box;
  position: relative;
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
  width: 30%;
  height: 23px;
  display: flex;
  align-items: center;
}
.StarImg{
  width: 14px;
  height: 14px;
  margin-right: 10px;
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
.commentPics{
  width:100%;
}
.commentPics img{
  width: 80px;
  height: 80px;
  padding-right: 10px;
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
.StarWithTitle{
  width: 100%;
  height: 23px;
  display: flex;
  margin: 3px 0;
}
.StarWithTitle span{
  height:23px;
  line-height: 23px;
  font-size: 13px;
  color:#797979;
}
.StarWithTitleSubText{
  margin:0 5px;
}
.StarWithTitleSub{
  margin:0 5px;
}
</style>