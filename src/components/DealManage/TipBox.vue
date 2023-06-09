<template>
  <div id="CommentBox">
    <div>
      <div class="CommentTitle">评价星级</div>
      <div class="starStyle" @click="styleChange($event)">五星</div>
      <div class="starStyle" @click="styleChange($event)">四星</div>
      <div class="starStyle" @click="styleChange($event)">三星</div>
      <div class="starStyle" @click="styleChange($event)">二星</div>
      <div class="starStyle" @click="styleChange($event)">一星</div>
    </div>
    <div class="cutStyle">｜</div>
    <div>
      <div class="CommentTitle" @click="styleChange($event)">评价类型</div>
      <div class="optionStyle" @click="styleChange($event)">有内容</div>
      <div class="optionStyle" @click="styleChange($event)">有图片</div>
      <div class="optionStyle" @click="styleChange($event)">有回复</div>
    </div>
    <div class="cutStyle">｜</div>
    <div>
      <div class="CommentTitle" @click="styleChange($event)">被评价人</div>
      <div class="optionStyle" @click="styleChange($event)">商家的</div>
      <div class="optionStyle" @click="styleChange($event)">骑手的</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'TipBox',
  data(){
    return{
      
    }
  },
  methods:{
    styleChange(e){
      console.log(e.currentTarget)
      e.currentTarget.classList.add('chooseStyle')
    }
  },
}
</script>

<style scoped>
#CommentBox{
  width: calc(100% - 40px);
  padding: 15px 20px 15px 20px;
  display: flex;
}
.cutStyle{
  height: 30px;
  line-height: 30px;
  color: #e4e4e4;
  padding:0 15px 0 7px;
  font-size: 16px;
  font-weight: 100;
}
.CommentTitle{
  width: 60px;
  height: 30px;
  font-size: 13px;
  line-height: 30px;
  display: inline-block;
  margin-right: 5px;
}
.optionStyle{
  width: 80px;
  height: 30px;
  line-height: 30px;
  background-color: #fafafa;
  border-radius: 3px;
  font-size: 13px;
  text-align: center;
  display: inline-block;
  border:1px solid #fafafa;
  box-sizing: border-box;
  margin: 0px 15px 0px 0px;
  color:#797979;
  cursor: pointer;
}
.starStyle{
  width: 60px;
  height: 30px;
  line-height: 30px;
  background-color: #fafafa;
  border:1px solid #fafafa;
  border-radius: 3px;
  font-size: 13px;
  text-align: center;
  display: inline-block;
  margin: 0px 15px 0px 0px;
  color:#797979;
  cursor: pointer;
}
.starStyle:hover,.optionStyle:hover{
  background-color: #f3f6fd;
  border-color: #f3f6fd;
  color: #4e73df;
}
.chooseStyle{
  background-color: #ffffff;
  border-color: #4e73df;
  color: #4e73df;
}
</style>