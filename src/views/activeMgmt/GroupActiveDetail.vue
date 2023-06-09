<template>
  <div class="group-active-detail">
    <!-- <div class="header">
      <p>商家团购活动详情</p>
      <div class="back-btn">
        <router-link to="bulkActivity"
          ><i class="el-icon-back"></i> <span>返回</span></router-link
        >
      </div>
    </div> -->
    <div class="content">
      <div class="content-top">
        <div class="top-left">
          <div class="top-left-img">
            <img :src="obj.pictures" alt="" />
          </div>
        </div>
        <div class="top-right">
          <div class="top-right-col">
            <div class="row">
              <span class="keys k1">活动ID:</span><span>{{ obj.id }}</span>
            </div>
            <div class="row">
              <span class="keys">活动名称:</span><span>{{ obj.nameCh }}</span>
            </div>
            <div class="row">
              <span class="keys">团购状态:</span
              ><span>{{ obj.acaStatus | fil1 }}</span>
            </div>
          </div>
          <div class="top-right-col">
            <div class="row">
              <span class="keys">团购价:</span
              ><span>₱{{ obj.buyPrice }}.00</span>
            </div>
            <div class="row">
              <span class="keys">总价值:</span
              ><span>₱{{ obj.totlePrice }}.00</span>
            </div>
            <div class="row">
              <span class="keys k2">所属店铺:</span>
              <router-link
                to="storeManagement/shopRateDetail/000"
                class="link"
                >{{ obj.shopName }}</router-link
              >
            </div>
          </div>
          <div class="top-right-col">
            <div class="row">
              <span class="keys">创建时间:</span
              ><span>{{ obj.createTime }}</span>
            </div>
            <div class="row">
              <span class="keys">修改时间:</span
              ><span>{{ obj.updateTime }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-mid">
        <div class="mid-title">
          <i class="el-icon-caret-right"></i>
          <p>商品信息</p>
        </div>
        <div class="mid-content">
          <div class="mid-content-col">
            <div class="mid-content-col-title">
              <p>基本信息</p>
            </div>
            <div class="mid-content-col-content">
              <div class="row">
                <span class="info">中文名称:</span
                ><span class="detail">{{ obj.nameCh }}</span>
              </div>
              <div class="row">
                <span class="info">英文名称:</span
                ><span class="detail">{{ obj.nameEn }}</span>
              </div>
              <div class="row">
                <span class="info">商品图片:</span>
                <div class="detail">
                  <img :src="obj.pictures" alt="" class="img111" />
                </div>
              </div>
            </div>
          </div>
          <div class="mid-content-col">
            <div class="mid-content-col-title">
              <p>团购套餐</p>
            </div>
            <div class="mid-content-col-card">
              <div class="card-title"><p>主菜4选2(不可复选)</p></div>
              <ul v-for="item in mainCourseList" :key="item.id">
                <li>
                  <span
                    >{{ item.chinese }}/{{ item.english }}/{{
                      item.num
                    }}份</span
                  ><span>₱{{ item.price }}.00</span>
                </li>
              </ul>
              <hr />
              <span class="totalPrice">价值:₱{{ totalPrice1 }}.00</span>
            </div>
            <div class="mid-content-col-card">
              <div class="card-title"><p>小吃·2选1</p></div>
              <ul v-for="item in snacksList" :key="item.id">
                <li>
                  <span
                    >{{ item.chinese }}/{{ item.english }}/{{
                      item.num
                    }}份</span
                  ><span>₱{{ item.price }}.00</span>
                </li>
              </ul>
              <hr />
              <span class="totalPrice">价值:₱{{ totalPrice2 }}.00</span>
            </div>
            <div class="mid-content-col-card">
              <div class="card-title"><p>饮品</p></div>
              <ul v-for="item in drinkList" :key="item.id">
                <li>
                  <span
                    >{{ item.chinese }}/{{ item.english }}/{{
                      item.num
                    }}份</span
                  ><span>₱{{ item.price }}.00</span>
                </li>
              </ul>
              <hr />
              <span class="totalPrice">价值:₱{{ totalPrice3 }}.00</span>
            </div>
          </div>
          <div class="mid-content-col">
            <div class="mid-content-col-title">
              <p>团购规则</p>
            </div>
            <div
              class="mid-content-col-content"
              v-for="item in rulesList"
              :key="item.id"
            >
              <div class="row">
                <span class="info">有效期:</span
                ><span class="detail">{{ item.expirationDate }}</span>
              </div>
              <div class="row">
                <span class="info">活动日期:</span
                ><span class="detail">{{ item.acData }}</span>
              </div>
              <div class="row">
                <span class="info">不可用日期:</span
                ><span class="detail">{{ item.fallData }}</span>
              </div>
              <div class="row">
                <span class="info">可用时间:</span
                ><span class="detail">{{ item.useData }}</span>
              </div>
              <div class="row">
                <span class="info">限购数量:</span
                ><span class="detail">{{ item.buyRules }}</span>
              </div>
              <div class="row">
                <span class="info">库存数量:</span
                ><span class="detail">{{ item.totle }}份</span>
              </div>
              <div class="row">
                <span class="info">使用规则:</span>
                <div class="detail useRules">
                  <span class="useRules-content">{{ item.useRules }}</span>
                </div>
              </div>
              <div class="row serve-row">
                <span class="info">商家服务:</span>
                <div class="detail">
                  <div class="service-card">
                    {{ item.service | fil2 }}
                  </div>
                </div>
              </div>
              <div class="row serve-row">
                <span class="info">发票信息:</span>
                <div class="detail">
                  <div class="service-card">
                    {{ item.invoice | fil3 }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" v-if="state == 1">
      <div class="footer-left">
        <div class="footer-left-title">
          <span>审核意见</span>
        </div>
        <div class="footer-left-label">
          <div class="footer-left-label-row">
            <p>当前审核人:</p>
            <span class="footer-detail">{{ auditor }}</span>
          </div>
          <div class="footer-left-label-row">
            <p>审核结果:</p>
            <div class="footer-detail">
              <el-radio v-model="radio" :label="1">同意</el-radio>
              <el-radio v-model="radio" :label="2">拒绝</el-radio>
            </div>
          </div>
          <div class="footer-left-label-row">
            <p>拒绝原因:</p>
            <div class="footer-detail">
              <select v-model="refuse" class="refuse-select">
                <option value="">请选择原因</option>
                <option :value="1">拒绝原因一拒绝原因一</option>
                <option :value="2">拒绝原因二拒绝原因二</option>
                <option :value="3">拒绝原因三拒绝原因三</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-right-label">
          <div class="footer-right-label-row">
            <p>补充说明:</p>
            <div class="footer-detail">
              <el-input
                type="text"
                size="small"
                placeholder="请输入中文补充内容"
                v-model="cText"
                maxlength="200"
                show-word-limit
              >
              </el-input>
            </div>
          </div>
          <div class="footer-right-label-row english">
            <div class="footer-detail">
              <el-input
                type="text"
                size="small"
                placeholder="请输入英文补充内容"
                v-model="eText"
                maxlength="500"
                show-word-limit
              >
              </el-input>
            </div>
          </div>
          <div class="footer-right-label-row">
            <button class="cancel-btn" @click="cancel">取消</button>
            <button class="confirm-btn" @click="confirm">确定</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer f1" v-if="state == 3 || state == 4">
      <div class="mid-title">
        <i class="el-icon-caret-right"></i>
        <p>审核意见</p>
      </div>
      <hr class="hr" />
      <div class="f1-content">
        <div class="row">
          <span class="f1-info">提交时间：</span
          ><span>2022-03-20 20:16:36</span>
        </div>
        <div class="row">
          <span class="f1-info special-info">审核人：</span><span>周审核</span>
        </div>
        <div class="row">
          <span class="f1-info">审核结果：</span><span>{{ state | fil4 }}</span>
        </div>
        <div class="row" v-if="state == 4">
          <span class="f1-info">拒绝原因：</span><span>活动信息不符合规格</span>
        </div>
        <div class="row">
          <span class="f1-info">审核时间：</span
          ><span>2022-03-26 14:00:52</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupActiveDetail",
  data() {
    return {
      obj: {},
      radio: 1,
      auditor: "周审核",
      refuse: "",
      cText: "",
      eText: "",
      packages: [],
      rulesList: [],
      state: "",
    };
  },
  computed: {
    mainCourseList() {
      return this.packages.filter((item) => {
        return item.type == "主菜";
      });
    },
    totalPrice1() {
      return this.mainCourseList
        .map((item) => Number(item.price))
        .reduce((a, b) => a + b, 0);
    },
    snacksList() {
      return this.packages.filter((item) => {
        return item.type == "小吃";
      });
    },
    totalPrice2() {
      return this.snacksList
        .map((item) => Number(item.price))
        .reduce((a, b) => a + b, 0);
    },
    drinkList() {
      return this.packages.filter((item) => {
        return item.type == "饮品";
      });
    },
    totalPrice3() {
      return this.drinkList
        .map((item) => Number(item.price))
        .reduce((a, b) => a + b, 0);
    },
  },
  created() {
    this.getObj(this.$route.query.id);
    console.log(this.$route.query.id);
    this.state = this.$route.query.state;
    console.log("这里", this.packages);
  },
  filters: {
    fil1(val) {
      if (val == 1) {
        return "审核中";
      } else if (val == 2) {
        return "待审核";
      } else if (val == 3) {
        return "审核通过";
      } else if (val == 4) {
        return "审核拒绝";
      }
    },
    fil2(val) {
      if (val == 1) {
        return "免预约";
      } else if (val == 2) {
        return "包间除外";
      } else if (val == 3) {
        return "免费WIFI";
      }
    },
    fil3(val) {
      if (val == 1) {
        return "提供纸质发票";
      } else if (val == 2) {
        return "提供电子发票";
      }
    },
    fil4(val) {
      if (val == 3) {
        return "通过";
      } else if (val == 4) {
        return "拒绝";
      }
    },
  },
  methods: {
    // 向后端拿数据
    getObj(id) {
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/buy/queryByNameCh",
        params: {
          id,
        },
      })
        .then((res) => {
          console.log("详情页请求成功", res);
          this.obj = res.data.msg;
          this.packages = res.data.packages;
          this.rulesList = res.data.rules;
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    // 取消
    cancel() {
      this.$router.push("bulkActivity");
    },
    // 确定
    confirm() {
      this.sendAudit();
      this.$router.push("bulkActivity");
    },
    // 审核结果传给后端
    sendAudit() {
      this.$axios({
        method: "POST",
        url: "http://172.16.101.63:8001/buy/insertBuyAudit",
        data: {
          audit: this.$route.query.id,
          auditPeople: "周审核",
          auditResult: this.radio,
          refuseCouse: this.refuse,
          remarkCh: this.cText,
          remarkEn: this.eText,
        },
      })
        .then((res) => {
          console.log("审核结果发送成功", res);
          this.$message("审核结果发送成功");
        })
        .catch((err) => {
          console.log("审核结果发送失败", err);
          this.$message("审核结果发送失败");
        });
    },
  },
};
</script>

<style scoped>
/* 整个页面 一级背景色*/
.group-active-detail {
  background: #f5f5f5;
}
/* 头部 */
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
/* 主要内容部 */
/* 主要内容头部 */
.content {
  /* margin-left: 50px;
  margin-right: 50px; */
  /* margin-bottom: 20px; */
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}

/* 主要内容顶部 */
.content-top {
  height: 140px;
  border-radius: 5px;
  background-color: #f4f5fd;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 20px;
}
.top-left {
  margin-right: 40px;
}
.top-left-img {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.top-right {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 160px);
  font-size: 13px;
}
.top-right-col {
  display: flex;
  flex-direction: column;
}
.top-right-col .row {
  margin-bottom: 25px;
}
.keys {
  margin-right: 30px;
  color: rgb(121, 121, 121);
}
.k1 {
  margin-right: 43px;
}
.k2 {
  margin-right: 17px;
}
.link {
  color: #4e73df;
}
.link:hover {
  text-decoration: underline #4e73df;
}
/* 主要内容中部 */
.mid-title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.mid-title i {
  font-size: 15px;
  color: #4e73df;
}
.mid-title p {
  font-size: 15px;
  font-weight: 700;
}
.mid-content {
  display: flex;
  justify-content: space-between;
}
.mid-content-col {
  width: calc(36.5% - 40px);
  background-color: #fafafa;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 13px;
}
.mid-content-col-title {
  font-weight: 700;
  margin-bottom: 20px;
}
.mid-content-col-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mid-content-col-content .row {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  /* align-items: center; */
}
.detail {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.info {
  color: #797979;
}
.mid-content-col-card {
  padding: 10px;
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  margin-bottom: 10px;
}
.card-title {
  font-weight: 700;
  margin-bottom: 10px;
}
.mid-content-col-card ul li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
hr {
  margin-bottom: 10px;
  background-color: #e4e4e4;
  height: 1px;
  border: none;
}
.totalPrice {
  display: flex;
  justify-content: flex-end;
}
.useRules {
  padding: 10px;
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  box-sizing: border-box;
}
.useRules-content {
  margin-bottom: 5px;
}
.service-card {
  padding: 3px 10px;
  border: 1px solid #e4e4e4;
  border-radius: 3px;
}
.serve-row {
  display: flex;
  align-items: center;
}
/* 底部 */
.footer {
  height: 155px;
  display: flex;
  padding: 20px;
  margin-top: 20px;
  /* margin-left: 50px;
  margin-right: 50px; */
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 5px;
}
.f1 {
  height: auto;
  display: flex;
  flex-direction: column;
}
.footer-left-title {
  padding: 25px 20px;
  background-color: #eef1fc;
  width: 55px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 5px;
}
.footer-left-title span {
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 14px;
}
.footer-left,
.footer-right {
  display: flex;
}
.footer-left-label,
.footer-right-label {
  padding: 20px 20px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer-left-label-row,
.footer-right-label-row {
  display: flex;
  align-items: center;
}
.refuse-select {
  outline: none;
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  padding: 5px;
  font-size: 13px;
  width: 100%;
}
.refuse-select:hover {
  border: 1px solid #4e73df;
}
.refuse-select:focus {
  box-shadow: 0px 0px 2px 1px #4e73df;
}
.footer-detail {
  width: 380px;
  margin-left: 20px;
}
.el_input {
  height: 30px !important;
  font-size: 13px;
  width: 100%;
}
.english {
  display: flex;
  justify-content: flex-end;
}
.cancel-btn,
.confirm-btn {
  width: 70px;
  height: 30px;
  margin-left: 75px;
  outline: none;
  border: 1px solid #d7d7d7;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: #fff;
  font-size: 13px;
  cursor: pointer;
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
.hr {
  width: 100%;
  margin-bottom: 10px;
  background-color: #e4e4e4;
  height: 1px;
  border: none;
}
.f1-content {
  font-size: 13px;
}
.f1-content .row {
  margin: 20px 0;
}
.f1-info {
  color: #797979;
  margin-right: 40px;
}
.special-info {
  margin-right: 53px;
}
.img111 {
  width: 170px;
}
</style>
