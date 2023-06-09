<template>
  <div id="out">
    <!-- <div class="title">发布报名活动</div> -->
    <div class="size">
      <div class="PublishBox">
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle">活动类型：</div>
          <div>
            <select v-model="AcType">
              <option :value="0">请选择</option>
              <option :value="1">满500P减50P</option>
              <option :value="2">免基础配送费</option>
              <option :value="3">五折钜惠商家</option>
              <option :value="4">新店八折特惠</option>
            </select>
          </div>
        </div>
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle">应用范围：</div>
          <div class="ApplyArea">
            <div v-if="UserDefinedOfApplyArea" class="ApplyAreaOn">通用  <span @click="UserDefinedOfApplyArea = !UserDefinedOfApplyArea" class="UserDefine">自定义</span></div>
            <div v-else class="ApplyAreaInside"><v-distpicker @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker><span @click="UserDefinedOfApplyArea = !UserDefinedOfApplyArea" class="UserDefineCancel">取消</span></div>
          </div>
        </div>
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle">店铺类型：</div>
          <div class="RadioBox">
            <el-radio v-model="StoreType" :label="1">餐饮店铺</el-radio>
            <el-radio v-model="StoreType" :label="2">零售店铺</el-radio>
          </div>
        </div>
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle">主营品类：</div>
          <div>
            <select v-model="MainType">
              <option :value="null">请选择</option>
              <option :value="1">品类一</option>
              <option :value="2">品类二</option>
              <option :value="3">品类三</option>
              <option :value="4">品类四</option>
              <option :value="5">品类五</option>
            </select>
            <span class="InputAfterTip">(选填)</span>
          </div>
        </div>
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle">活动细则：</div>
          <div>
            <el-input
              type="textarea"
              placeholder="请输入中文细则"
              v-model="ChineseDetail"
              maxlength="400"
              show-word-limit
            >
            </el-input>
            <el-input
              type="textarea"
              placeholder="请输入英文细则"
              v-model="EnglishDetail"
              maxlength="800"
              show-word-limit
            >
            </el-input>
          </div>
        </div>
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle">用户类型：</div>
          <div class="RadioBox">
            <el-radio v-model="UserType" :label="1">所有用户</el-radio>
            <el-radio v-model="UserType" :label="2">新注册用户</el-radio>
            <el-radio v-model="UserType" :label="3">店铺新用户</el-radio>
          </div>
        </div>
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle">使用方式：</div>
          <div class="NormalSize" ref="MobileMsg">
            移动端
          </div>
        </div>
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle">活动日期：</div>
          <div class="NormalSize">
            <div v-if="UserDefinedOfActivityDate">
              <input type="text" placeholder="请输入数字" v-model="FullMonth">&nbsp;&nbsp;个月  <span @click="UserDefinedOfActivityDate = !UserDefinedOfActivityDate" class="UserDefine">自定义</span>
            </div>
            <div v-else>
                <el-date-picker
                  v-model="ActivityDateValue"
                  type="daterange"
                  range-separator="至"
                  format="yyyy-M-d"
                  value-format="yyyy-M-d"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              <span @click="UserDefinedOfActivityDate = !UserDefinedOfActivityDate" class="UserDefineCancel">取消</span>
            </div>
          </div>
        </div>
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle">报名日期：</div>
          <div class="ApplyArea">
            <div v-if="UserDefinedOfRegisterDate" class="ApplyAreaOn">长期  <span @click="UserDefinedOfRegisterDate = !UserDefinedOfRegisterDate" class="UserDefine">自定义</span></div>
            <div v-else class="ApplyAreaInside">
              <el-date-picker
                v-model="RegisterDateValue"
                type="daterange"
                range-separator="至"
                format="yyyy-M-d"
                value-format="yyyy-M-d"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
              <span @click="UserDefinedOfRegisterDate = !UserDefinedOfRegisterDate" class="UserDefineCancel">取消</span>
            </div>
          </div>
        </div>
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle">报名费用：</div>
          <div class="NormalSize">
            <input type="text" placeholder="请输入费用金额" v-model="RegisterPrice">&nbsp;&nbsp;P  <span class="InputAfterTip">(0或空表示免费)</span>
          </div>
        </div>
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle">报名名额：</div>
          <div class="NormalSize">
            <input type="text" placeholder="请输入名额数量" v-model="RegisterTotal"> <span class="InputAfterTip">0或空表示不限额</span>
          </div>
        </div>
        <div class="PublishBoxItem">
          <div class="PublishBoxItemTitle"></div>
          <div class="NormalSize">
            <el-button @click="Cancel">取消</el-button>
            <el-button type="primary" @click="SubmitMsg">确定</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'PostNewActivity',
  data(){
    return{
      UserDefinedOfApplyArea: true,
      UserDefinedOfActivityDate: true,
      UserDefinedOfRegisterDate: true,


      AcType:null,
      MainType:null,
      RegisterDateValue:'',
      ActivityDateValue:'',
      ActivityDate:'',
      RegisterDate:'',
      StoreType: 1,
      UserType: 1,
      ChineseDetail:'',
      EnglishDetail:'',
      Province:'',
      City:'',
      Area:'',
      FullMonth:'',
      ApplyRange:'',
      RegisterPrice:'',
      RegisterTotal:'',
      AcName:''
    }
  },
  methods:{
    onChangeProvince(Province){
      this.Province = Province.value   
    },
    onChangeCity(City){
      this.City = City.value           
    },
    onChangeArea(Area){
      this.Area = Area.value   
    },
    SubmitMsg(){
      if(this.UserDefinedOfApplyArea){
        this.ApplyRange = '通用'
        console.log(this.ApplyRange);
      }else{
        this.ApplyRange = this.Province + this.City + this.Area
        console.log(this.ApplyRange);
      }
      if(this.UserDefinedOfActivityDate){
        this.ActivityDate = this.FullMonth + '个月'
        console.log(this.ActivityDate);
      }else{
        this.ActivityDate = this.ActivityDateValue[0] + '至' + this.ActivityDateValue[1]
        console.log(this.ActivityDate);
      }
      if(this.UserDefinedOfRegisterDate){
        this.RegisterDate = '长期'
      }else{
        this.RegisterDate = this.RegisterDateValue[0] + '至' + this.RegisterDateValue[1]

      }
      if(this.AcType == 1){
        this.AcName = '满500P减50P'
      }
      if(this.AcType == 2){
        this.AcName = '免基础配送费'
      }
      if(this.AcType == 3){
        this.AcName = '五折钜惠商家'
      }
      if(this.AcType == 4){
        this.AcName = '新店八折特惠'
      }

      var createdTime = this.getCurrentTime()

      this.$axios({
        method: "POST",
        url: "http://172.16.101.63:8001/application/insertActivity",
        data: {
          actype:this.AcType,
          ranges:this.ApplyRange,
          storType:this.StoreType,
          category:this.MainType,
          rulesCh:this.ChineseDetail,
          rulesEn:this.EnglishDetail,
          userType:this.UserType,
          useType:'移动端',
          acData:this.ActivityDate,
          applicationData:this.RegisterDate,
          applicationExp:this.RegisterPrice,
          applicationPlaces:this.RegisterTotal,
          status: 1,
          createTime: createdTime,
          acName: this.AcName,
        },
      })
      .then((res) => {
        console.log("请求成功", res);
        alert("请求成功")
        this.$router.go(-1)
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    },
    Cancel(){
      this.$router.go(-1)
    },
    getCurrentTime(){
      var date = new Date()
      var year = date.getFullYear()
      var month = this.repair(date.getMonth() + 1)
      var day = this.repair(date.getDate())
      var hour = this.repair(date.getHours())
      var minute = this.repair(date.getMinutes())
      var second = this.repair(date.getSeconds())

      var curTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ":" +second
      return curTime
    },
    repair(i){
      if (i >= 0 && i <= 9){
        return '0' + i
      }else{
        return i
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
  padding-bottom: 20px;
}
.el-tabs{
  width: calc(100% - 40px);
  margin-top: 10px;
}

.PublishBox{
  padding: 20px;
  width: calc(100% - 40px);
  font-size: 13px;
}
.PublishBoxItem{
  display: flex;
  margin-bottom: 25px;
}
.PublishBoxItemTitle{
  width: 8%;
  height: 30px;
  line-height: 30px;
}
.PublishBoxItem select{
  width: 200px;
  height: 30px;
  border-color: #e4e4e4;
  padding-left: 10px;
  border-radius: 3px;
}

.ApplyArea{
  height: 30px;
}

.ApplyAreaOn{
  height: 30px;
  line-height: 30px;
}

.UserDefine{
  color: #4E73DF;
  margin-left: 20px;
}
.ApplyAreaInside{
  height: 30px;
  line-height: 30px;
  display: flex;
}

.UserDefineCancel{
  color: #FF9900;
  margin-left: 20px;
}

.RadioBox{
  height: 30px;
  line-height: 30px;
}
.InputAfterTip{
  font-size: 12px;
  color: #999999;
  margin-left: 10px;
}
.NormalSize{
  height: 30px;
  line-height: 30px;
}
.NormalSize input{
  width: 200px;
  height: 30px;
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  box-sizing: border-box;
  padding-left: 10px;
}

.NormalSize button{
  width: 70px;
  height: 30px;
  padding-top: 8px;
}

.el-textarea{
  margin-bottom: 15px;
}
</style>