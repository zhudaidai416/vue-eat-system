<template>
  <div class="platform-active-detail">
    <!-- <div class="header">
      <p>平台活动详情</p>
      <div class="back-btn">
        <router-link to="preferentialActivity"
          ><i class="el-icon-back"></i> <span>返回</span></router-link
        >
      </div>
    </div> -->
    <div class="content">
      <div class="content-box">
        <div class="content-top-title">
          <i class="el-icon-caret-right"></i>
          <p>活动信息</p>
        </div>
        <div class="content-top-content">
          <div class="content-col">
            <div class="content-col-row">
              <span class="keys k1">活动ID：</span>
              <span>{{ obj.id }}</span>
            </div>
            <div class="content-col-row">
              <span class="keys">活动类型：</span>
              <span>{{ obj.acType | fil1 }}</span>
            </div>
            <div class="content-col-row">
              <span class="keys">应用范围：</span>
              <span>{{ obj.ranges }}</span>
            </div>
            <div class="content-col-row">
              <span class="keys">活动规则：</span>
              <span>{{ obj.rules }}</span>
            </div>
            <div class="content-col-row">
              <span class="keys">用户类型：</span>
              <span>{{ obj.userType | fil2 }}</span>
            </div>
            <div class="content-col-row">
              <span class="keys">使用方式：</span>
              <span>{{ obj.useType }}</span>
            </div>
            <div class="content-col-row">
              <span class="keys">活动日期：</span>
              <span>{{ obj.acData }}</span>
            </div>
            <div class="content-col-row">
              <span class="keys k1">有效期：</span>
              <span>{{ obj.expirationDate }}</span>
            </div>
            <div class="content-col-row btn-box">
              <button><i class="el-icon-edit-outline"></i>编辑活动</button>
              <button><i class="el-icon-refresh-left"></i>重新发布</button>
            </div>
          </div>
          <div class="content-col">
            <div class="content-col-row">
              <span class="keys k2">状态：</span>
              <span>{{ obj.status | fli3 }}</span>
            </div>
            <div class="content-col-row">
              <span class="keys">创建时间：</span>
              <span>{{ obj.createTime }}</span>
            </div>
            <div class="content-col-row">
              <span class="keys">修改时间：</span>
              <span>{{ obj.updateTime }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-box">
        <div class="content-top-title">
          <i class="el-icon-caret-right"></i>
          <p>数据分析</p>
        </div>
        <div class="content-top-content">
          <div class="content-tabs">
            <el-tabs v-model="dateData" @tab-click="handleClick">
              <el-tab-pane label="今日" name="first"
                ><TodayData></TodayData
              ></el-tab-pane>
              <el-tab-pane label="近7日" name="second"
                ><SevenData></SevenData
              ></el-tab-pane>
              <el-tab-pane label="近30日" name="third"
                ><ThirtyData></ThirtyData
              ></el-tab-pane>
              <el-tab-pane label="全部" name="fourth"
                ><AllData></AllData
              ></el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
      <div class="content-box">
        <div class="content-top-title">
          <i class="el-icon-caret-right"></i>
          <p>使用记录</p>
        </div>
        <div class="content-top-content special-content">
          <div class="table-box">
            <table>
              <thead>
                <tr>
                  <th>序号</th>
                  <th>订单编号</th>
                  <th>优惠金额</th>
                  <th>订单应付款</th>
                  <th>买家昵称</th>
                  <th>下单时间<i class="el-icon-sort order-btn"></i></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in recordList" :key="index">
                  <td>{{ item.num }}</td>
                  <td>
                    <span class="link" @click="goDingdan">{{
                      item.order
                    }}</span>
                  </td>
                  <td>{{ item.coupon }}</td>
                  <td>{{ item.price }}</td>
                  <td>
                    <span class="link">{{ item.buyers }}</span>
                  </td>
                  <td>{{ item.time }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="page-box">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="pageSizes"
              :page-size="pageSize"
              layout="prev,pager,next,sizes,total"
              :total="totalCount"
              prev-text="上一页"
              next-text="下一页"
              :background="true"
              :pagerCount="7"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodayData from "../../components/activeMgmt/TodayData.vue";
import SevenData from "../../components/activeMgmt/SevenData.vue";
import ThirtyData from "../../components/activeMgmt/ThirtyData.vue";
import AllData from "../../components/activeMgmt/AllData.vue";
export default {
  name: "PADetail",
  data() {
    return {
      obj: {},
      dateData: "first",
      recordList: [
        {
          num: 407,
          order: 12232964103521,
          coupon: "₱50.00",
          price: "₱520.00",
          buyers: "小默123",
          time: "2022-05-11 15:20:51",
        },
      ],
      currentPage: 1,
      pageSizes: [10, 15, 20],
      pageSize: 10,
      totalCount: 407,
    };
  },
  components: {
    TodayData,
    SevenData,
    ThirtyData,
    AllData,
  },
  created() {
    this.getObj(this.$route.query.id);
    console.log("这里是什么", this.$route.query.id);
  },
  filters: {
    fil1(val) {
      if (val == 1) {
        return "满减红包";
      } else if (val == 2) {
        return "配送费红包";
      } else if (val == 3) {
        return "通用红包";
      } else if (val == 4) {
        return "首单立减";
      }
    },
    fil2(val) {
      if (val == 1) {
        return "所有用户";
      } else if (val == 2) {
        return "新用户";
      }
    },
    fli3(val) {
      if (val == 1) {
        return "未开始";
      } else if (val == 2) {
        return "进行中";
      } else if (val == 3) {
        return "已暂停";
      } else if (val == 4) {
        return "已结束";
      }
    },
  },
  methods: {
    // 从后端拿数据 请求
    getObj(id) {
      this.$axios({
        method: "GET",
        url: "http://172.16.101.63:8001/pre/queryPreById",
        params: {
          id,
        },
      })
        .then((res) => {
          console.log("详情页面请求成功", res);
          this.obj = res.data;
        })
        .catch((err) => {
          console.log("详情页面请求失败", err);
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    goDingdan() {
      this.$router.push("orderDetail");
    },
  },
};
</script>

<style scoped>
.platform-active-detail {
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
.content-box {
  margin-bottom: 20px;
}
.content-top-title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 700;
}
.content-top-content {
  display: flex;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  font-size: 13px;
}
.content-col {
  margin-right: 80px;
}
.content-col-row {
  margin-bottom: 20px;
}
.keys {
  color: #797979;
  margin-right: 40px;
}
.k1 {
  margin-right: 53px;
}
.k2 {
  margin-right: 66px;
}
.btn-box {
  margin-left: 105px;
}
.btn-box button {
  outline: none;
  border: none;
  background-color: #4e73df;
  color: #fff;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
}
.btn-box button:hover {
  background-color: #87a2f2;
}
.content-tabs {
  width: 100%;
}
.special-content {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0;
}
table {
  width: 100%;
  font-size: 13px;
  border-spacing: 0;
  margin-bottom: 30px;
  table-layout: fixed;
}
thead {
  height: 45px;
  background-color: #f4f5fd;
}
th {
  font-weight: 400;
}
tbody {
  text-align: center;
}
tbody tr td {
  height: 45px;
  border-bottom: 1px solid #e4e4e4;
}
tbody tr:hover {
  background-color: #f4f5fd;
}
.order-btn {
  cursor: pointer;
}
.link {
  color: #4e73df;
  cursor: pointer;
}
.link:hover {
  text-decoration: underline #4e73df;
}
.page-box {
  display: flex;
  justify-content: flex-end;
  padding-right: 20%;
}
</style>
