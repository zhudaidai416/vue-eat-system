<template>
  <div class="settingsAddShipping">
    <el-form :model="formData" ref="addForm">
      <div class="salary-window">
        <div class="salary-window-item">
          <p class="salary-window-item-title">应用范围：</p>
        </div>
        <div class="salary-window-item">
          <p class="salary-window-item-title">骑手类型：</p>
        </div>
        <div class="salary-window-item">
          <p class="salary-window-item-title">结算方式：</p>
          <p class="salary-window-item-title">月结</p>
        </div>
        <div class="salary-window-item">
          <p class="salary-window-item-title">基础工资：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.distance"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">P</p>
        </div>
        <div class="salary-window-item">
          <p class="salary-window-item-title">话费补助：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.cost"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">P</p>
        </div>
        <div class="salary-window-item">
          <p class="salary-window-item-title">最低订单量：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.per_100"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">单</p>
        </div>
        <div class="salary-window-item">
          <p class="salary-window-item-title">超1~300单奖励</p>
          <el-form-item>
            <el-input-number
              v-model="formData.longest"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">P / 单</p>
        </div>
        <div class="salary-window-item">
          <p class="salary-window-item-title">超301~600单奖励：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.up_0_3"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">P / 单</p>
        </div>
        <div class="salary-window-item">
          <p class="salary-window-item-title">超600单以上奖励：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.up_3_6"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">P / 单</p>
        </div>
        <div class="salary-window-item" style="padding-top: 20px;">
          <p class="salary-window-item-title"></p>
          <el-button class="cancel" @click="goBack">取消</el-button>
          <el-button class="hold" type="primary">保存</el-button>
        </div>
      </div>
      <div class="salary-window"></div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'cpn',
  data() {
    return {
      formData: {
        range: '',
        distance: 3,
        cost: 4,
        per_100: 0.2,
        longest: 5,
        up_0_3: 1,
        up_3_6: 1.5,
        bWeather: 2,
      },
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    goBack() {
      this.$router.push('/settings-platform')
    },
  },
  mounted() {
    this.$toTop()
  },
}
</script>
<style scoped>
.settingsAddShipping {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.salary-title {
  font-size: 14px;
}
.salary-window {
  width: 100%;
  height: auto;
  padding-top: 35px;
  /* background-color: red; */
}
.salary-window-item {
  width: 100%;
  height: 28px;
  /* background-color: #fff; */
  display: flex;
  align-items: center;
  padding-bottom: 30px;
}
.salary-window-item-title {
  width: 12%;
  /* height: 100%; */
  /* background-color: blue; */
  font-size: 13px;
}
:deep(.el-input-number .el-input__inner) {
  height: 30px;
}
.el-form-item {
  margin-bottom: 0;
}
.el-input-number {
  width: 300px;
}
/deep/ .el-input-number__decrease,
/deep/ .el-input-number__increase,
/deep/ .el-input-number__decrease.is-disabled,
/deep/ .el-input-number__increase.is-disabled {
  width: 33px;
  height: 30px;
  border: 1px solid #cdcdcd;
  top: 3px;
  line-height: 30px;
}
/deep/
  .el-input-number__decrease:hover:not(.is-disabled)
  ~ .el-input
  .el-input__inner:not(.is-disabled),
/deep/
  .el-input-number__increase:hover:not(.is-disabled)
  ~ .el-input
  .el-input__inner:not(.is-disabled) {
  border-color: #cdcdcd;
}
.detailText {
  padding-left: 10px;
  font-size: 13px;
}
.detailText span {
  font-size: 13px;
  color: #cdcdcd;
}
.el-button {
  height: 30px;
  line-height: 6px;
}
</style>
