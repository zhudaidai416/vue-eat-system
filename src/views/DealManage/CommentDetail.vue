<template>
  <div id="out">
    <!-- <div class="title">评价详情</div> -->
    <div class="size">
      <commentDetail />
    </div>
    <div class="AuditingIdeaSize">
      <AuditingIdea />
    </div>
  </div>
</template>

<script>
import commentDetail from '../../components/DealManage/commentDetail.vue'
import AuditingIdea from '../../components/DealManage/AuditingIdea.vue'

export default {
  name : 'CommentDetail',
  components : {
    commentDetail,
    AuditingIdea
  },
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
.AuditingIdeaSize{
  width: calc(100% - 100px);
  height: calc(100% - 80px);
  background-color: #ffffff;
  border-radius: 10px;
  margin : 0px 50px 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>