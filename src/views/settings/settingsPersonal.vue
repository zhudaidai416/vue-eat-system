<template>
  <div class="settingsPersonal">
    <el-form :model="paramData" ref="paramData" :rules="userRule">
      <h2 class="personal-title">修改真实姓名</h2>
      <div class="personal-window">
        <div class="personal-window-item">
          <p class="personal-window-item-title">登录账号：</p>
          <p style="font-size: 13px;">
            {{ userData.id ? userData.account : errTip }}
          </p>
        </div>
        <div class="personal-window-item">
          <p class="personal-window-item-title">角色权限：</p>
          <p>{{ userData.id ? userData.author : errTip }}</p>
        </div>
        <div class="personal-window-item">
          <p class="personal-window-item-title">真实姓名：</p>
          <el-form-item prop="name">
            <el-input
              type="text"
              v-model="paramData.name"
              placeholder="请输入真实姓名"
            />
          </el-form-item>
          <p class="detailText">
            <span>{{ paramData.name.length }}/20</span>
          </p>
        </div>
      </div>
      <h2 class="personal-title">修改登录密码</h2>
      <div class="personal-window">
        <div class="personal-window-item">
          <p class="personal-window-item-title">新密码：</p>
          <el-form-item prop="newPwd1">
            <el-input
              type="text"
              v-model="paramData.newPwd1"
              placeholder="请输入新密码"
            />
          </el-form-item>
          <p class="detailText">
            <span>限6-20个字符，支持英文、数字和符号</span>
          </p>
        </div>
        <div class="personal-window-item">
          <p class="personal-window-item-title">重复新密码：</p>
          <el-form-item prop="newPwd2">
            <el-input
              type="text"
              v-model="paramData.newPwd2"
              placeholder="请再次输入新密码"
            />
          </el-form-item>
        </div>
      </div>
      <div class="personal-window">
        <div class="personal-window-item" style="padding-top: 20px;">
          <p class="personal-window-item-title"></p>
          <el-button class="hold" type="primary" @click="submit">
            保存修改
          </el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'cpn',
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.paramData.newPwd1) {
        callback(new Error('前后密码输入不一致'))
      } else {
        callback()
      }
    }
    return {
      errTip: '{{ system error }}',
      // 请求数据
      userData: {
        id: '',
        account: '',
        author: '',
      },
      // 发送数据
      paramData: {
        name: '',
        newPwd1: '',
        newPwd2: '',
      },
      userRule: {
        name: [
          { required: true, message: '请输入您的真实姓名', trigger: 'blur' },
        ],
        newPwd1: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: '长度在 6 到 20 个字符以内',
            trigger: 'blur',
          },
        ],
        newPwd2: [{ validator: validatePass, trigger: 'blur' }],
      },
    }
  },
  methods: {
    submit() {
      this.$refs['paramData'].validate((valid) => {
        if (valid) {
          this.$message('这是一条消息提示')
        } else {
          this.$message({
            message: '警告哦，这是一条警告消息',
            type: 'warning',
          })
        }
      })
    },
  },
  mounted() {
    this.$toTop()
  },
}
</script>
<style scoped>
.settingsPersonal {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.personal-title {
  font-size: 14px;
  padding-bottom: 35px;
}
.personal-window {
  width: 100%;
  height: auto;
}
.personal-window-item {
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  font-size: 13px;
}
.personal-window-item-title {
  width: 12%;
}
.el-form-item {
  margin-bottom: 0;
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
  width: 120px;
  height: 30px;
  line-height: 6px;
}
.user-form-input:focus {
  border: 1px solid blue;
}
.el-input:deep(.el-input__inner) {
  width: 400px;
  height: 22px;
  padding: 14px 10px;
  outline: none;
  border-radius: 3px;
  border: 1px solid #afafaf;
}
</style>
