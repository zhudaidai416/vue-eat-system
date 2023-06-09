<template>
  <div class="settingsAddShipping">
    <el-form :model="formData" ref="addForm">
      <h2 class="add-title">应用范围设置</h2>
      <div class="add-window">
        <div class="add-window-item">
          <p class="add-window-item-title">应用范围：</p>
          <p v-if="!cpnStatus.isEdit">
            {{ formData.scopeApplication }}
          </p>
          <el-input
            type="text"
            class="app-input"
            v-if="cpnStatus.isEdit"
            placeholder="请输入关键字"
            v-model="formData.scopeApplication"
          />
          <p
            :class="[
              cpnStatus.isEdit
                ? 'active-isEditor-true'
                : 'active-isEditor-false',
            ]"
            @click="cpnStatus.isEdit = !cpnStatus.isEdit"
          >
            {{ cpnStatus.isEdit ? '确定' : '自定义' }}
          </p>
        </div>
      </div>
      <h2 class="add-title">基础配送设置</h2>
      <div class="add-window">
        <div class="add-window-item">
          <p class="add-window-item-title">基础距离：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.basicDistance"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">KM</p>
        </div>
        <div class="add-window-item">
          <p class="add-window-item-title">基础配送费：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.basicDistributionFee"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">P</p>
        </div>
        <div class="add-window-item">
          <p class="add-window-item-title">每百米计费：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.chargePerOnehundredMeters"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">
            P
            <span>(超出基础距离到最远距离的配送费)</span>
          </p>
        </div>
        <div class="add-window-item">
          <p class="add-window-item-title">最远配送距离：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.mostPDeliveryDistance"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">KM</p>
        </div>
      </div>
      <h2 class="add-title">特殊时段附加费</h2>
      <div class="add-window">
        <div class="add-window-item">
          <p class="add-window-item-title">0~3点加价：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.markUpZerotothree"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">P / 单</p>
        </div>
        <div class="add-window-item">
          <p class="add-window-item-title">3~6点加价：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.markUpThreetosix"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">P / 单</p>
        </div>
        <div class="add-window-item">
          <p class="add-window-item-title">恶劣天气加价：</p>
          <el-form-item>
            <el-input-number
              v-model="formData.markUpBadweather"
              @change="handleChange"
              :min="1"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <p class="detailText">P / 单</p>
        </div>
        <div class="add-window-item" style="padding-top: 20px;">
          <p class="add-window-item-title"></p>
          <el-button class="cancel" @click="goBack">取消</el-button>
          <el-button class="hold" type="primary" @click="submit">
            保存
          </el-button>
        </div>
        {{ formData }}
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'cpn',
  data() {
    return {
      cpnStatus: {
        isEdit: false,
      },
      formData: {
        basicDistance: 1,
        basicDistributionFee: '1',
        chargePerOnehundredMeters: '1',
        markUpBadweather: '1',
        markUpThreetosix: '1',
        markUpZerotothree: '1',
        mostPDeliveryDistance: 1,
        platformDistributionId: 1,
        scopeApplication: '通用',
        status: 0,
      },
    }
  },
  created() {
    this.getUrlData()
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    goBack() {
      this.$router.push('/settings-platform')
    },
    getUrlData() {
      if (this.$route.params == '{}') {
        console.log(this.$route.params)
        this.formData = this.$route.query.data
      }
    },
    submit() {
      this.$axios
        .post('/insertPlatformDistribution', this.formData)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
<style scoped>
.settingsAddShipping {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.add-title {
  font-size: 14px;
}
.add-window {
  width: 100%;
  height: auto;
  padding-top: 35px;
  /* background-color: red; */
}
.add-window-item {
  width: 100%;
  height: 28px;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-bottom: 30px;
}
.add-window-item-title {
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
.active-isEditor-true {
  padding-left: 10px;
  color: #ff8120;
  cursor: pointer;
}
.active-isEditor-false {
  padding-left: 10px;
  color: #0000ff;
  cursor: pointer;
}
.el-input {
  width: 160px;
}
.app-input :deep(.el-input__inner) {
  height: 28px;
  font-size: 12px;
}
</style>
