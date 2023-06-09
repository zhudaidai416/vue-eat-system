<template>
  <div id='NavComponent'>
    <button class="buttonStyle orangeStyle">重置</button>
    <button class="buttonStyle blueStyle">搜索</button>
  </div>
</template>

<script>
export default {
  name:'ButtonBox',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>
#NavComponent{
  width: calc(100% - 40px);
  display: flex;
  margin-left: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #e4e4e4;
}
.buttonStyle{
  width: 80px;
  height:35px;
  line-height: 35px;
  border-radius: 3px;
  border: 0;
  color: white;
  cursor: pointer;
  margin-right: 20px;
}
.orangeStyle{
  background-color: #ff9900;
}
.blueStyle{
  background: -webkit-linear-gradient(top,#4d73df,#0995e3);
}
.orangeStyle:hover,.blueStyle:hover{
  opacity: 70%;
}
</style>