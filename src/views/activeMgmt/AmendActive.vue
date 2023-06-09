<template>
  <div class="amend-active">
    <!-- <div class="header">
      <p>编辑推广活动</p>
      <div class="back-btn">
        <router-link to="promoteActivity"
          ><i class="el-icon-back"></i> <span>返回</span></router-link
        >
      </div>
    </div> -->
    <div class="content">
      <div class="content-row">
        <span class="keys">活动名称：</span>
        <span>邀请有奖</span>
      </div>
      <div class="content-row">
        <span class="keys">活动奖励：</span>
        <label class="acReward-label">
          <input type="text" class="acRewardInput" v-model="acReward" />P
        </label>
      </div>
      <div class="content-row">
        <span class="keys">活动日期：</span>
        <label>
          <template v-if="isCustomDate">
            <span>长期</span>
            <button class="customDate-btn" @click="customDate">自定义</button>
          </template>
          <template v-if="!isCustomDate">
            <el-date-picker
              v-model="startDate"
              type="date"
              placeholder="选择日期"
              size="small"
            >
            </el-date-picker>
            <span class="zhi">至</span>
            <el-date-picker
              v-model="finaleDate"
              type="date"
              placeholder="选择日期"
              size="small"
            >
            </el-date-picker>
            <button class="cancelCustom-btn" @click="cancelDateCustom">
              取消
            </button>
          </template>
        </label>
      </div>
      <div class="content-row">
        <span class="keys k1">有效期：</span>
        <label>
          <template v-if="isCustomUseDate">
            <span>长期</span>
            <button class="customDate-btn" @click="customUseDate">
              自定义
            </button>
          </template>
          <template v-if="!isCustomUseDate">
            <input
              class="useDate-input"
              type="text"
              placeholder="请输入天数"
              v-model="useDate"
            />天
            <button class="cancelCustom-btn" @click="cancelUseDateCustom">
              取消
            </button>
          </template>
        </label>
      </div>
      <div class="content-row">
        <span class="keys">使用方式：</span>
        <label>
          <span>移动端</span>
        </label>
      </div>
      <div class="content-row">
        <span class="keys">使用规则：</span>
        <span>无门槛红包</span>
      </div>
      <div class="content-row">
        <span class="keys k2">状态：</span>
        <span>进行中</span>
      </div>
      <div class="content-row">
        <span class="keys">创建时间：</span>
        <span>2022-04-28 16:45:16</span>
      </div>
      <div class="content-row">
        <span class="keys">修改时间：</span>
        <span>2022-04-28 16:45:16</span>
      </div>
      <div class="content-row">
        <label>
          <button class="cancel-btn2">取消</button>
          <button class="confirm-btn">保存</button>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AmendActive",
  data() {
    return {
      acReward: "50",
      isCustomDate: true,
      isCustomUseDate: true,
      useDate: "",
    };
  },
  methods: {
    customDate() {
      this.isCustomDate = false;
    },
    cancelDateCustom() {
      this.isCustomDate = true;
    },
    customUseDate() {
      this.isCustomUseDate = false;
    },
    cancelUseDateCustom() {
      this.isCustomUseDate = true;
    },
  },
};
</script>

<style scoped>
.amend-active {
  background-color: #f5f5f5;
}
/* .header {
  height: 60px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  justify-content: space-between;
}
.header p {
  font-size: 18px;
}
.back-btn {
  font-size: 13px;
} */
.content {
  /* margin-left: 50px;
  margin-right: 50px; */
  /* margin-bottom: 20px; */
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  font-size: 13px;
}
.content-row {
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  height: 30px;
}
.special-content-row {
  display: flex;
  align-items: flex-start;
  height: auto;
}
.keys {
  margin-right: 40px;
}
.k1 {
  margin-right: 53px;
}
.k2 {
  margin-right: 66px;
}
label {
  display: flex;
  align-items: center;
}
.custom-btn,
.cancel-btn,
.customDate-btn,
.cancelCustom-btn {
  border: none;
  background-color: transparent;
  color: #4e73df;
  margin-left: 20px;
  cursor: pointer;
}
.cancel-btn,
.cancelCustom-btn {
  color: #ff9900;
}
.custom-btn:hover,
.customDate-btn:hover {
  color: #93aaee;
}
.cancel-btn:hover,
.cancelCustom-btn:hover {
  color: #dbb77f;
}
.acRewardInput,
.useDate-input {
  width: 100px;
  outline: none;
  border: 1px solid #f5f5f5;
  padding: 5px 20px 5px 5px;
  border-radius: 3px;
  font-size: 13px;
  margin: 0 8px 8px 8px;
  box-sizing: border-box;
}
.acRewardInput,
.useDate-input {
  width: 200px;
  margin-right: 8px;
  margin-top: 0;
  margin-left: 0;
  margin-bottom: 0;
}
.acRewardInput::placeholder,
.useDate-input::placeholder {
  color: rgb(187, 187, 187);
}
.acRewardInput:focus,
.useDate-input:focus {
  border-color: #4e73df;
  box-shadow: 0px 0px 2px 1px #6a9dee;
}
.zhi {
  margin: 0 8px;
}
.acReward-label {
  display: flex;
  align-items: center;
}
.cancel-btn2,
.confirm-btn {
  width: 70px;
  height: 30px;
  margin-left: 105px;
  outline: none;
  border: 1px solid #d7d7d7;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: #fff;
  font-size: 13px;
  cursor: pointer;
  color: black;
}
.confirm-btn {
  margin-left: 10px;
  background-color: #4e73df;
  border: 1px solid #4e73df;
  color: #fff;
}
.confirm-btn:hover {
  background-color: #6595e6;
}
</style>
