<template>
    <!-- <div class="containerB">
      <div class="containerA"> -->
        <div>
        <div class="containerS">
          <!-- 表单 -->
          <div>
            <form class="formDiv" action="" :model="dispatchListForm" >
              <label for="">站点ID：
                <input v-model="dispatchListForm.id">
              </label>
              <label for="">站长用户名：
                <input v-model="dispatchListForm.username">
              </label>
              <label for="">站长手机号：
                <p></p>
              </label>
              <label for="">站点名称：
                <input type="text" name="" id="" placeholder="请输入站点名称">
              </label>
              <label for="">站点所在地：
                <input type="text" name="" id="" placeholder="请输入站点所在地">
              </label>
              <label for="">站点详细地址：
                <input type="text" name="" id="" placeholder="请输入站点详细地址">
              </label>
              <label for="deliveryPeriod">配送时段：
                <label for="deliveryPeriod0" :style="{margin:'0'}"><input type="radio" name="deliveryPeriod" id="deliveryPeriod0" value="0">全天配送</label>
                <label for="deliveryPeriod1" :style="{margin:'0'}"><input type="radio" name="deliveryPeriod" id="deliveryPeriod1" value="1">自定义配送</label>
              </label>
              <label for="">配送区域：</label>
            </form>
          </div>
          <!-- 按钮 -->
          <button @click="goBack" :style="{marginLeft:'150px',marginRight:'20px'}">取消</button>
          <button :style="{background:'linear-gradient(to bottom,#3e80e0,#1694e2a7)',color: '#fff !important'}">保存</button>
        </div>
      </div>
  </template>
  
  <script>
  import "../../assets/css/base_s.css";
  export default {
    name: "editDispatch",
    data() {
      return {
        dispatchList:[],
        dispatchListForm:{
          id:'6'
        },
        thisId:0,
        form: {
          name: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc: "",
        },
        // 站长手机号
        stationmasterTelOptions:[
          {
            value:0,
            label:'+63 菲律宾'
          },
          {
            value:1,
            label:'+86 中国'
          },
          {
            value:2,
            label:'+852 中国香港'
          },
          {
            value:3,
            label:'+853 中国澳门'
          },
          {
            value:4,
            label:'+355 阿尔巴尼亚'
          },
          {
            value:5,
            label:'+213 阿尔及利亚'
          },
        ],
        valuetype: 0,
        // 站点所在地
        stationLocationOptions:[
          {
            value:0,
            label:'--东南亚--'
          },
          {
            value:1,
            label:'菲律宾'
          },
          {
            value:2,
            label:'--国内--'
          },
          {
            value:3,
            label:'北京'
          },
          {
            value:4,
            label:'河北'
          },
        ]
      };
    },
    created(){
      // console.log(this.$route.params.id);
      this.getEditDispatchData(this.$route.params.id);
    },
    methods: {
      goBack(){//点击返回
        this.$router.go(-1)
      },
      getEditDispatchData(thisId){
        this.$axios({
          method: 'POST',
          url: 'http://1.14.106.61:7101/Distribution/findById',
          params: {
            id:thisId
          }
        })
          .then(res => {
            this.dispatchList = res.data
            console.log(this.dispatchList);
          })
          .catch(err => {
            console.log("请求失败", err)
          });
      }
    },
  };
  </script>
  
  <style scoped>
  .formDiv {
    width: 50%;
  }
  .formDiv label{
    margin: 20px 0;
    display: flex;
    align-content: center;
    height: 30px;
    justify-content: space-between;
  }
  .formDiv>label>input,.formDiv select,.formDiv p{
    height: 26px;
    padding-left: 2px;
    border-radius: 2px;
    width:70%;
  }
  .formDiv input,.formDiv select{
    border: solid 1px #e4e4e4;
  }
  select{
    margin-right: 10px;
  }
  input,option{
  height: 20px;
  margin-right: 10px;
  }
  button{
    width: 70px;
    border: 1px #d7d7d7 solid;
    border-radius: 5px;
    background-color: #fff;
    padding: 6px;
  }
  </style>