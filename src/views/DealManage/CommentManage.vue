<template>
  <div id="out">
    <!-- <div class="title">评价管理</div> -->
    <div class="size">
      <SearchBox />
      <ButtonBox />
      <TipBox />
      <ShowItems />
      <!-- <el-pagination
        background=""
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[100, 200, 300, 400]"
        layout="prev, pager, next, sizes, total"
        :total="1000">
      </el-pagination> -->
    </div>
  </div>
</template>

<script>
import SearchBox from '../../components/DealManage/SearchBox.vue'
import ButtonBox from '../../components/DealManage/ButtonBox.vue'
import TipBox from '../../components/DealManage/TipBox.vue'
import ShowItems from '../../components/DealManage/ShowItems.vue'

export default {
  name : 'CommentManage',
  components : {
    SearchBox,
    ButtonBox,
    TipBox,
    ShowItems,
  },
  data(){
    return{
          List:[
                  {
                      "commentId": 1,
                      "orderId": 1234342344,
                      "shopChineseName": "店铺C",
                      "customerName": "顾客A",
                      "deleverymanName": "骑手B",
                      "merchantServices1": 5,
                      "merchantServices2": 5,
                      "commendGoodsName": "小炒肉",
                      "uncommendGoodsName": "小炒肉",
                      "content": "这是一段内容用来测试通过关键词来查询内容，关键词是哈哈123",
                      "image": null,
                      "commentTime": "2022-09-14T15:04:38.000+00:00",
                      "merchantReply": null,
                      "merchantReplyTime": null,
                      "deleveryService": null,
                      "deleveryReply": null,
                      "deleveryReplyTime": null,
                      "merchantToDeleveryService": null,
                      "merchantToDeleveryReply": null,
                      "reviewer": "wang",
                      "reviewResult": 1,
                      "refuseReason": "图片吧合格",
                      "additionalNotes": "这是文字这是文字",
                      "additionalNotesEn": "sfsaiuofhu"
                  },
                  {
                      "commentId": 2,
                      "orderId": 1414214154,
                      "shopChineseName": "店铺F",
                      "customerName": "顾客D",
                      "deleverymanName": "骑手E",
                      "merchantServices1": 2,
                      "merchantServices2": 5,
                      "commendGoodsName": "小炒肉",
                      "uncommendGoodsName": "砂锅米线",
                      "content": "评论内容内容内容hahaha",
                      "image": null,
                      "commentTime": "2022-08-19T15:08:36.000+00:00",
                      "merchantReply": null,
                      "merchantReplyTime": null,
                      "deleveryService": null,
                      "deleveryReply": null,
                      "deleveryReplyTime": null,
                      "merchantToDeleveryService": null,
                      "merchantToDeleveryReply": null,
                      "reviewer": null,
                      "reviewResult": null,
                      "refuseReason": null,
                      "additionalNotes": null,
                      "additionalNotesEn": null
                  },
                  {
                      "commentId": 3,
                      "orderId": 1414344234,
                      "shopChineseName": "店铺C",
                      "customerName": "顾客H",
                      "deleverymanName": "骑手E",
                      "merchantServices1": 3,
                      "merchantServices2": 5,
                      "commendGoodsName": "豆浆",
                      "uncommendGoodsName": "小炒肉",
                      "content": "这是一段内容用来测试通过关键词来查询内容，关键词是哈哈123",
                      "image": null,
                      "commentTime": "2022-07-15T09:20:39.000+00:00",
                      "merchantReply": null,
                      "merchantReplyTime": null,
                      "deleveryService": null,
                      "deleveryReply": null,
                      "deleveryReplyTime": null,
                      "merchantToDeleveryService": null,
                      "merchantToDeleveryReply": null,
                      "reviewer": null,
                      "reviewResult": null,
                      "refuseReason": null,
                      "additionalNotes": null,
                      "additionalNotesEn": null
                  },
                  {
                      "commentId": 4,
                      "orderId": 1414144344,
                      "shopChineseName": "店铺C",
                      "customerName": "顾客D",
                      "deleverymanName": "骑手E",
                      "merchantServices1": 5,
                      "merchantServices2": 5,
                      "commendGoodsName": "面饼",
                      "uncommendGoodsName": "小炒肉",
                      "content": "评论内容内容内容abababa",
                      "image": null,
                      "commentTime": "2019-03-11T09:20:45.000+00:00",
                      "merchantReply": null,
                      "merchantReplyTime": null,
                      "deleveryService": null,
                      "deleveryReply": null,
                      "deleveryReplyTime": null,
                      "merchantToDeleveryService": null,
                      "merchantToDeleveryReply": null,
                      "reviewer": null,
                      "reviewResult": null,
                      "refuseReason": null,
                      "additionalNotes": null,
                      "additionalNotesEn": null
                  },
                  {
                      "commentId": 5,
                      "orderId": 14124141525,
                      "shopChineseName": "店铺C",
                      "customerName": "顾客I",
                      "deleverymanName": "骑手B",
                      "merchantServices1": 2,
                      "merchantServices2": 3,
                      "commendGoodsName": "小炒肉",
                      "uncommendGoodsName": "炖猪蹄",
                      "content": "评论内容内容内容ddddddd",
                      "image": null,
                      "commentTime": "2022-09-11T09:20:51.000+00:00",
                      "merchantReply": null,
                      "merchantReplyTime": null,
                      "deleveryService": null,
                      "deleveryReply": null,
                      "deleveryReplyTime": null,
                      "merchantToDeleveryService": null,
                      "merchantToDeleveryReply": null,
                      "reviewer": null,
                      "reviewResult": null,
                      "refuseReason": null,
                      "additionalNotes": null,
                      "additionalNotesEn": null
                  }
              ],
    single: {
        "commentId": 1,
        "orderId": 1234342344,
        "shopChineseName": "店铺C",
        "customerName": "顾客A",
        "deleverymanName": "骑手B",
        "merchantServices1": 5,
        "merchantServices2": 5,
        "commendGoodsName": "小炒肉",
        "uncommendGoodsName": "小炒肉",
        "content": "这是一段内容用来测试通过关键词来查询内容，关键词是哈哈123",
        "image": null,
        "commentTime": "2022-09-14T15:04:38.000+00:00",
        "merchantReply": null,
        "merchantReplyTime": null,
        "deleveryService": null,
        "deleveryReply": null,
        "deleveryReplyTime": null,
        "merchantToDeleveryService": null,
        "merchantToDeleveryReply": null,
        "reviewer": "wang",
        "reviewResult": 1,
        "refuseReason": "图片吧合格",
        "additionalNotes": "这是文字这是文字",
        "additionalNotesEn": "sfsaiuofhu"
    },
send:{
    "commentId": 1,
    "reviewer": "wang",
    "reviewResult": 1,
    "refuseReason": "图片吧合格",
    "additionalNotes": "这是文字这是文字",
    "additionalNotesEn": "sfsaiuofhu"
}
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
}
</style>