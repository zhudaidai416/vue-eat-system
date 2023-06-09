<template>
    <form class="filterAaa">
        <label for="" >评分</label>
        <input type="text" placeholder="最底" class="inputA">
        <span>至</span>
        <input type="text" placeholder="最高" class="inputB">
    </form>
</template>
<script>
export default{
    name:'ScoreSelect',
    props:{
    },
    methods:{
    }
} 
</script>
<style>
.filterAaa{
      height: 40px;
      display: flex;
      align-items: center;
      background-color: #f7f7f9;
      border-radius: 5px;
      width: 22%;
      margin: 12px;
  }
  .filterAaa>label{
      height: 100%;
      line-height: 40px;
      border-radius: 5px;
      width: 25%;
      font-size: 13px;
      padding-left: 8px;
      color:#797979;
  }
  .filterAaa>label:hover{
      background-color: #fff;
  }
  .filterAaa>input,.filterAaa>select{
      border: none;
      height:90%;
      background-color: #f7f7f9;
      border-radius: 5px;
      /* width: 70%; */
      padding-left: 8px;
  }
  .filterAaa>input:hover,.filterAaa>span:hover{
      background-color: #fff;
  }
  .filterAaa>select:hover{
      background-color: #fff;
  }
  .filterAaa>span{
    height: inherit;
    line-height: 40px;
  }
  .inputA{
    width: 15%;
  }
  .inputB{
    width: 45%;
  }
  </style>