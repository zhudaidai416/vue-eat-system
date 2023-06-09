<template>
  <div>
      <div class="containerS">
        <!-- 表单 -->
        <div :style="{marginTop:'30px'}">
          <form class="formDiv"  action="" :model="AddDispatchForm">
            <label for="">
              站长用户名：
              <input :style="{width:'71%'}" type="text" placeholder="请输入站长用户名" v-model="AddDispatchForm.username">
            </label>
            <label for="">站长手机号：
              <div :style="{width:'75%'}">
                <select name="" id="" :style="{width:'20%'}">
                  <option v-for="item in stationmasterTelOptions" 
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </option>
                </select>
                <input :style="{width:'72%'}" type="text" placeholder="请输入站长手机号" v-model="AddDispatchForm.principalPhone">
              </div>
            </label>
            <label for="">站点名称：
              <input :style="{width:'71%'}" type="text" name="" id="" placeholder="请输入站点名称" v-model="AddDispatchForm.distributionName">
            </label>
            <label for="">站点所在地：
              <div :style="{width:'75%'}">
                <select name="" id="" :style="{width:'30%'}" v-model="AddDispatchForm.city">
                  <option v-for="item in stationLocationOptions" 
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                  </option>
                </select>
                <select name="" id="" :style="{width:'30%'}"></select>
                <select name="" id="" :style="{width:'30%'}"></select>
              </div>
              
            </label>
            <label for="">站点详情地址：
              <input :style="{width:'71%'}" type="text" name="" id="" placeholder="请输入站点详细地址" v-model="AddDispatchForm.address">
            </label>
            <label for="deliveryPeriod" :style="{display:'flex'}">配送时段：
              <div :style="{width:'71%',display:'flex'}">
                <label for="deliveryPeriod0"><input type="radio" name="deliveryPeriod" id="deliveryPeriod0" value="0">全天配送</label>
                <label for="deliveryPeriod1"><input type="radio" name="deliveryPeriod" id="deliveryPeriod1" value="1" v-model="AddDispatchForm.distributionTime">自定义配送</label>
              </div>
            </label>
            <label for="">配送区域：
              
            </label>
          </form>
        </div>
        <Map2></Map2>
        <!-- 按钮 -->
        <button @click="goBack" :style="{marginLeft:'150px',marginRight:'20px'}">取消</button>
        <button :style="{background:'linear-gradient(to bottom,#3e80e0,#1694e2a7)',color: '#fff !important'}" @click="goUrlDispatch('distributionManagement')">保存</button>
      </div>
    </div>
</template>

<script>
import "../../assets/css/base_s.css";
import Map2 from "../../components/userMgnt/Map2"
export default {
  name: "addDispatch",
  data() {
    return {
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
      ],
      AddDispatchForm:{
          distributionName:'',
          principalName:'',
          principalPhone:'',
          address:'',
          city:'',
          username:'',
          area:'',
          distributionTime:''
      }
    };
  },
  components:{
    Map2
  },
  methods: {
    goBack(){//点击返回
      this.$router.go(-1)
    },
    submitAddDispatch(){
      
    },
    goUrlDispatch(param){
      this.$axios({
        method:'POST',
        url:'Distribution/add',
        params:{
          distributionName:this.AddDispatchForm.distributionName,
          principalName:this.AddDispatchForm.principalName,
          principalPhone:this.AddDispatchForm.principalPhone,
          address:this.AddDispatchForm.address,
          city:this.AddDispatchForm.city,
          username:this.AddDispatchForm.username,
          area:this.AddDispatchForm.area,
          distributionTime:this.AddDispatchForm.distributionTime
        }
      })
      .then(res=>{
        console.log('成功',res);
        // this.dispatchList=res.data;
        // this.count=res.data.count;
        // console.log(this.dispatchList);
        // console.log(this.dispatchList.length);
        console.log(this.AddDispatchForm);
        console.log(param);
        this.$router.push(param)
      })
      .catch(err=>{
        console.log(err);
      })
      
    }
  },
};
</script>

<style>
.formDiv {
  width: 60%;
}
label{
    margin: 20px 0;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }
/* select{
  margin-right: 10px;
} */
input,select{
  height: 25px;
  margin-right: 10px;
  border: 1px solid #e4e4e4;
  padding: 2px 8px;
}
button{
  width: 70px;
  border: 1px #d7d7d7 solid;
  border-radius: 5px;
  background-color: #fff;
  padding: 6px;
}
/* 地图 */
.admap{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
  .home{
    width:500px;
    height: 300px;
  }
</style>