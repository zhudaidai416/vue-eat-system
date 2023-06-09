<template>
  <div id='NavComponent'>

    <div class="ComponentManage">
      <div class="ComponentManageTitle">订单编号</div>
      <input type=" text" placeholder="请输入订单号" class="ComponentManageInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
    </div>

    <div class="ComponentManage">
      <div class="ComponentManageTitle">被评价人</div>
      <input type=" text" placeholder="请输入骑手/商家名称" class="ComponentManageInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
    </div>

    <div class="ComponentManage">
      <div class="ComponentManageTitle">评价人</div>
      <input type=" text" placeholder="请输入顾客/商家名称" class="ComponentManageInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
    </div>
      
    <div class="ComponentManage">
      <div class="ComponentManageTitle">评价内容</div>
      <input type=" text" placeholder="请输入关键词" class="ComponentManageInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
    </div>

    <div class="ComponentManage">
      <div class="ComponentManageTitle">评价时间</div>
      <select placeholder="请输入关键词" class="ComponentManageInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
        <option value="">全部</option>
        <option value="">近三个月</option>
        <option value="">今年内</option>
        <option value="">2021年</option>
        <option value="">2020年</option>
        <option value="">2020年以前</option>
      </select>
    </div>

    <div class="ComponentManage">
      <div class="ComponentManageTitle">审核状态</div>
      <select placeholder="请输入关键词" class="ComponentManageInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
        <option value="">全部状态</option>
        <option value="">待审核</option>
        <option value="">审核中</option>
        <option value="">审核通过</option>
        <option value="">审核失败</option>
      </select>
    </div>
      
    <div class="ComponentManage">
      <div class="ComponentManageTitle">审核人</div>
      <input type=" text" placeholder="请输入审核人" class="ComponentManageInput" @focus="InputFocusStyle($event)" @blur="InputBlurStyle($event)">
    </div>

  </div>
</template>

<script>
export default {
  name:'SearchBox',
  data(){
    return{
      ComponentManageInput : '',
    }
  },
  methods:{
    InputFocusStyle(e){
      e.currentTarget.parentElement.classList.add('ChooseStyle')
      e.currentTarget.previousSibling.classList.add('backgroundWhite')
      e.currentTarget.classList.add('backgroundWhite')
    },
    InputBlurStyle(e){
      e.currentTarget.parentElement.classList.remove('ChooseStyle')
      e.currentTarget.previousSibling.classList.remove('backgroundWhite')
      e.currentTarget.classList.remove('backgroundWhite')
    },
  }
}
</script>

<style scoped>
input{
  outline: none;
}
select{
  outline: none;
}
#NavComponent{
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 40px);
}

.ComponentManage{
  width: 23%;
  height: 35px;
  display: flex;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #f6f7f9 ;
  box-sizing: border-box;
  box-shadow: none;
  transition:all .3s linear;
  margin: 0px 2% 20px 0px;
}

.ComponentManageTitle{
  width: 30%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 13px;
  color: #666666;
  background-color: #f6f7f9;
}
.ComponentManageInput{
  width: 70%;
  height: 35px;
  line-height: 35px;
  padding: 0px 10px 0px 15px;
  box-sizing: border-box;
  border: 0px;
  border-color: yellow ;
  background-color: #f6f7f9;
}
.ComponentManageInput:hover,.ComponentManageTitle:hover{
  background-color: transparent;
}
.ChooseStyle{
  box-shadow:0px 0px 3px 1px #6a9dee;
}
.backgroundWhite{
  background-color: #ffffff;
}
</style>