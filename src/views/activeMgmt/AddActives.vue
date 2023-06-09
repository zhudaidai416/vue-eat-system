<template>
  <div class="add-actives">
    <!-- <div class="header">
      <p>发布平台活动</p>
      <div class="back-btn">
        <router-link to="preferentialActivity"
          ><i class="el-icon-back"></i> <span>返回</span></router-link
        >
      </div>
    </div> -->
    <div class="content">
      <div class="content-row">
        <span class="keys special-keys">活动类型：</span>
        <label class="activeType-label">
          <input type="radio" :value="1" v-model="acType" />满减红包
          <input type="radio" :value="2" v-model="acType" />配送费红包
          <input type="radio" :value="3" v-model="acType" />通用红包
          <input type="radio" :value="4" v-model="acType" />首单立减
        </label>
      </div>
      <div class="content-row">
        <span class="keys">应用范围：</span>
        <label>
          <template v-if="isCustom">
            <span>通用</span>
            <button class="custom-btn" @click="customType">自定义</button>
          </template>
          <template v-if="!isCustom">
            <select class="regionSel" v-model="ranges" @change="regionChange">
              <option value="0">请选择</option>
              <option value="1" disabled>--东南亚--</option>
              <option value="2">菲律宾</option>
              <option value="3" disabled>--国内--</option>
              <option value="4">北京</option>
              <option value="5">河北</option>
            </select>
            <div v-if="choseArea == 0">
              <select disabled>
                <option value="0">请选择</option>
              </select>
            </div>
            <div v-if="choseArea == 2">
              <select :disabled="isAreaSel" v-model="areaSel" class="areaSel">
                <option value="0">请选择</option>
                <option value="1">马尼拉大都会</option>
              </select>
            </div>
            <div v-if="choseArea == 4">
              <select :disabled="isAreaSel" v-model="areaSel" class="areaSel">
                <option value="0">请选择</option>
                <option value="1">东城</option>
                <option value="2">西城</option>
                <option value="3">崇文</option>
                <option value="4">宣武</option>
                <option value="5">朝阳</option>
              </select>
            </div>
            <div v-if="choseArea == 5">
              <select :disabled="isAreaSel" v-model="areaSel" class="areaSel">
                <option value="0">请选择</option>
                <option value="1">石家庄</option>
                <option value="2">唐山</option>
                <option value="3">秦皇岛</option>
                <option value="4">邯郸</option>
                <option value="5">保定</option>
              </select>
            </div>

            <select :disabled="isF" v-model="disSel" class="disSel">
              <option value="0">请选择</option>
            </select>
            <button class="cancel-btn" @click="cancelCustom">取消</button>
          </template>
        </label>
      </div>
      <div class="content-row special-content-row">
        <span class="keys">活动规则：</span>
        <label class="special-row rule-label">
          <div class="row">
            <span>满</span
            ><input type="text" placeholder="达标金额" v-model="man1" /><span
              >减</span
            ><input type="text" placeholder="优惠金额" v-model="jian1" />
          </div>
          <div class="row">
            <span>满</span
            ><input type="text" placeholder="达标金额" v-model="man2" /><span
              >减</span
            ><input type="text" placeholder="优惠金额" v-model="jian2" />
          </div>
          <div class="row">
            <span>满</span
            ><input type="text" placeholder="达标金额" v-model="man3" /><span
              >减</span
            ><input type="text" placeholder="优惠金额" v-model="jian3" />
          </div>
          <div class="row">
            <span>满</span
            ><input type="text" placeholder="达标金额" v-model="man4" /><span
              >减</span
            ><input type="text" placeholder="优惠金额" v-model="jian4" />
          </div>
          <div class="row">
            <span>满</span
            ><input type="text" placeholder="达标金额" v-model="man5" /><span
              >减</span
            ><input type="text" placeholder="优惠金额" v-model="jian5" />
          </div>
        </label>
      </div>
      <div class="content-row">
        <span class="keys special-keys">活动类型：</span>
        <label class="activeType-label">
          <input type="radio" :value="1" v-model="userType" />所有用户
          <input type="radio" :value="2" v-model="userType" />新注册用户
        </label>
      </div>
      <div class="content-row">
        <span class="keys">使用方式：</span>
        <label>
          <span>移动端</span>
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
        <span class="keys special-keys2">有效期：</span>
        <label class="useTime-label">
          <input type="text" class="useTimeInput" v-model="expirationDate" />天
        </label>
      </div>
      <div class="content-row">
        <label>
          <button class="cancel-btn2" @click="cancel">取消</button>
          <button class="confirm-btn" @click="save">保存</button>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddActives",
  data() {
    return {
      acType: 1,
      isCustom: true,
      man1: "",
      man2: "",
      man3: "",
      man4: "",
      man5: "",
      jian1: "",
      jian2: "",
      jian3: "",
      jian4: "",
      jian5: "",
      expirationDate: "15",
      regionSel: "0",
      areaSel: "0",
      disSel: "0",
      isAreaSel: true,
      isF: true,
      userType: 1,
      isCustomDate: true,
      startDate: "",
      finaleDate: "",

      choseArea: "",
      str: "",
      ddd: "长期",
    };
  },
  methods: {
    customType() {
      this.isCustom = false;
    },
    cancelCustom() {
      this.isCustom = true;
    },
    regionChange() {
      if (this.regionSel != "0") {
        this.isAreaSel = false;
        if (this.regionSel == "2") {
          this.choseArea = "2";
        } else if (this.regionSel == "4") {
          this.choseArea = "4";
        } else if (this.regionSel == "5") {
          this.choseArea = "5";
        }
      } else {
        this.isAreaSel = true;
        this.areaSel = "0";
      }
    },
    customDate() {
      this.isCustomDate = false;
    },
    cancelDateCustom() {
      this.isCustomDate = true;
      this.startDate = "";
      this.finaleDate = "";
    },
    // 取消
    cancel() {
      this.$router.push("preferentialActivity");
    },
    // 保存
    save() {
      // 更改数据格式
      this.str =
        "满" +
        this.man1 +
        "减" +
        this.jian1 +
        "," +
        "满" +
        this.man2 +
        "减" +
        this.jian2 +
        "," +
        "满" +
        this.man3 +
        "减" +
        this.jian3 +
        "," +
        "满" +
        this.man4 +
        "减" +
        this.jian4 +
        "," +
        "满" +
        this.man5 +
        "减" +
        this.jian5;

      if (this.startDate && this.finaleDate) {
        let year1 = new Date(this.startDate).getFullYear();
        let month1 = new Date(this.startDate).getMonth() + 1;
        let day1 = new Date(this.startDate).getDate();
        let date1 = year1 + "-" + month1 + "-" + day1;
        let year2 = new Date(this.finaleDate).getFullYear();
        let month2 = new Date(this.finaleDate).getMonth() + 1;
        let day2 = new Date(this.finaleDate).getDate();
        let date2 = year2 + "-" + month2 + "-" + day2;
        this.ddd = date1 + "至" + date2;
      } else {
        this.ddd = "长期";
      }

      console.log(this.acType);
      console.log(this.str);
      console.log(this.userType);
      console.log(this.ddd);
      console.log(this.expirationDate);
      // 发请求
      this.$axios({
        method: "POST",
        url: "http://172.16.101.63:8001/pre/insertPre",
        data: {
          acType: this.acType,
          rules: this.str,
          userType: this.userType,
          acData: this.ddd,
          expirationDate: this.expirationDate,
        },
      })
        .then((res) => {
          console.log("保存成功", res);
          this.$message("保存成功");
          this.$router.push("preferentialActivity");
        })
        .catch((err) => {
          console.log("保存失败", err);
          this.$message("保存失败");
        });
    },
  },
};
</script>

<style scoped>
.add-actives {
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
.special-keys {
  margin-right: 20px;
}
.special-keys2 {
  margin-right: 53px;
}
label {
  display: flex;
  align-items: center;
}
.activeType-label input {
  margin-right: 5px;
  margin-left: 20px;
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
select {
  outline: none;
  border: 1px solid #f5f5f5;
  padding: 5px 20px 5px 5px;
  border-radius: 3px;
  margin-right: 10px;
  font-size: 13px;
}
select:focus {
  border-color: #4e73df;
  box-shadow: 0px 0px 2px 1px #6a9dee;
}
.special-row {
  display: flex;
  flex-direction: column;
}
.rule-label input,
.useTimeInput {
  width: 100px;
  outline: none;
  border: 1px solid #f5f5f5;
  padding: 5px 20px 5px 5px;
  border-radius: 3px;
  font-size: 13px;
  margin: 0 8px 8px 8px;
  box-sizing: border-box;
}
.useTimeInput {
  width: 200px;
  margin-right: 8px;
  margin-top: 0;
  margin-left: 0;
  margin-bottom: 0;
}
.rule-label input::placeholder,
.useTimeInput::placeholder {
  color: rgb(187, 187, 187);
}
.rule-label input:focus,
.useTimeInput:focus {
  border-color: #4e73df;
  box-shadow: 0px 0px 2px 1px #6a9dee;
}
.zhi {
  margin: 0 8px;
}
.useTime-label {
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
