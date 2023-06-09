<template>
  <div id="login">
    <div class="login-imgbox">
      <img
        src="https://cdn3.axureshop.com/demo/2031128/images/%E5%B8%90%E5%8F%B7%E7%99%BB%E5%BD%95/u203.svg"
        class="login-img"
      />
    </div>
    <div class="login-registerbox">
      <div class="login-registerbox-title">
        <img
          src="https://cdn3.axureshop.com/demo/2031128/images/%E5%B8%90%E5%8F%B7%E7%99%BB%E5%BD%95/u214.png"
        />
        <span>小默外卖总后台管理系统</span>
      </div>
      <div class="login-registerbox-from">
        <el-form
          :model="user"
          status-icon
          :rules="rules"
          ref="userForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-input
            type="text"
            prefix-icon="el-icon-user-solid"
            placeholder="账号"
            v-model="user.name"
            autocomplete="off"
            style="margin-bottom: 25px;"
          ></el-input>
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            placeholder="密码"
            v-model="user.pass"
            autocomplete="off"
            style="margin-bottom: 25px;"
          ></el-input>
          <div class="login-registerbox-verifybtn" @click="dianjiyanzheng">
            <div class="login-registerbox-verifybtn-btn1" v-if="yanZheng">
              <div>
                <div class="login-registerbox-verifybtn-img">
                  <img
                    src="https://cdn3.axureshop.com/demo/2031128/images/%E5%B8%90%E5%8F%B7%E7%99%BB%E5%BD%95/u209.svg"
                  />
                  <img
                    class="login-registerbox-verifybtn-imgs"
                    src="https://cdn3.axureshop.com/demo/2031128/images/%E5%B8%90%E5%8F%B7%E7%99%BB%E5%BD%95/u210.svg"
                  />
                </div>
              </div>
              <span class="login-registerbox-verifyspan"> 点击按钮进行验证 </span>
            </div>
            <div class="login-registerbox-verifybtn-btn2" v-if="chengGong">
              <div>
                <div class="login-registerbox-verifybtn-img">
                  <img
                    src="https://cdn3.axureshop.com/demo/2031128/images/%E5%B8%90%E5%8F%B7%E7%99%BB%E5%BD%95/u212.svg"
                  />
                </div>
              </div>
              <span class="login-registerbox-verifyspan"> 验证成功 </span>
            </div>
          </div>
          <div class="login-registerbox-text">
            <span class="jieguo">{{jieguo}}</span>
            <span class="login-registerbox-textspan"> 忘记帐号/密码 </span>
          </div>
          <el-button type="primary" @click="submitLogin">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "LoginView",
  data() {
    const validatePass = (rule, value, callback) => {
      const pat = /^\w+$/i;
      if (pat.test(value)) {
        callback();
      } else {
        callback(new Error("密码只能由字母、数字、下划线组成"));
      }
    };
    return {
      yanZheng: true,
      chengGong: false,
      jieguo: '',
      user: {
        name: "17837282739",
        pass: "Mima123456",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            trigger: "blur",
          },
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            trigger: "blur",
          },
          { validator: validatePass, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    ...mapActions({loginAction:'user/loginAction'}),
    
    dianjiyanzheng() {
      this.yanZheng =! this.yanZheng
      this.chengGong =! this.chengGong
    },

    submitLogin() {
      if(this.user.name == ''){
        return this.jieguo ='请输入账号'
      }else if(this.user.pass == '') {
        return this.jieguo ='请输入密码'
      }else if(this.chengGong == false) {
        return this.jieguo ='请点击验证按钮进行验证'
      }else{
        this.$refs.userForm.validate((valid) => {
        if (valid) {
          console.log("登录");
          this.loginAction({
            userName: this.user.name,
            passWord: this.user.pass,
          })
          .then(()=>{
            this.$router.push("/");
          })
          .catch(err=>{
            console.log(err)
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      }
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

#login {
  width: 100%;
  height: 100%;
  background-color: #718fe5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-imgbox {
  width: 30%;
  margin-right: 15%;
}

.login-img {
  width: 100%;
}

.login-registerbox {
  width: 20%;
  background-color: #ffffff;
  border-radius: 15px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-registerbox-title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-registerbox-title > img {
  padding-right: 3%;
  margin-top: 50px;
  margin-bottom: 35px;
}

.login-registerbox-title > span{
  font-size: 18px;
  margin-top: 50px;
  margin-bottom: 35px;
}

.login-registerbox-verifybtn {
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid #dcdfe6;
  border-radius: 5px 5px 5px 5px;
}

.login-registerbox-verifybtn-btn1{
  height: 50px;
  border-radius: 5px 5px 5px 5px;
  display: flex;
  align-items: center;
}

.login-registerbox-verifybtn-btn2{
  height: 50px;
  background: #e8ffe8;
  border: #009900 1px solid;
  border-radius: 5px 5px 5px 5px;
  display: flex;
  align-items: center;
}

.login-registerbox-verifybtn-img {
  width: 24px;
  height: 24px;
  margin: 8px 11px;
  position: relative;
}

.login-registerbox-verifybtn-imgs {
  position: absolute;
  top: calc(50% - 5px);
  left: calc(50% - 5px);
}

.login-registerbox-verifyspan {
  font-size: 14px;
  color: #c0c4cc;
}

.login-registerbox-verifybtn:hover {
  border: 1px solid #c0c4cc;
}

.login-registerbox-text {
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.login-registerbox-textspan {
  color: #999999;
  font-size: 13px;
  display: flex;
  justify-content: flex-end;
}

.login-registerbox-from {
  width: 75%;
}

>>> .el-input__inner{
    height: 50px;
}

.el-button--primary{
  width: 100%;
  height: 50px;
  font-size: 16px;
  margin-bottom: 50px;
  border-radius: 5px 5px 5px 5px;
  background: -webkit-linear-gradient(top, rgba(77, 116, 223, 1), rgba(9, 150, 227, 1));
}

.el-button--primary:hover{
  opacity: 80%;
}

.jieguo{
  font-size: 13px;
  color: red;
}
</style>
