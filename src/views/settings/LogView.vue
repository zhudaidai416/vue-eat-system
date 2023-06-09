<template>
  <div class="log">
    <!-- 搜索框 -->
    <div class="search">
      <InputCom
        class="search-input"
        placeholder="请输入流水号"
        v-model="search.serialNum"
        >流水号</InputCom
      >
      <InputCom
        class="search-input"
        placeholder="请输入日志关键词"
        v-model="search.keyword"
        >关键词</InputCom
      >
      <SelectCom
        class="search-input"
        :options="createTimeList"
        v-model="search.createTime"
        >创建时间</SelectCom
      >
      <InputCom
        class="search-input"
        placeholder="请输入IP地址/归属地"
        v-model="search.ipAddress"
        >IP来源</InputCom
      >
      <InputCom
        class="search-input"
        placeholder="周审核"
        v-model="search.operator"
        >操作人</InputCom
      >
    </div>
    <!-- 测试搜索框输出的值：<div>{{search}}</div> -->
    <!-- 搜索按钮 -->
    <el-button class="reset-btn" @click="reset">重置</el-button>
    <el-button class="search-btn">搜索</el-button>
    <!-- 数据表格 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{
        'background-color': '#EEF1FC',
        color: 'black',
        'font-weight': 'normal',
        'text-align': 'center',
      }"
    >
      <el-table-column
        v-for="item in theadList"
        :key="item.index"
        :prop="item.prop"
        :label="item.label"
        :sortable="item.sort"
        align="center"
      >
      </el-table-column>
    </el-table>
    <!-- 数据分页 -->
    <div class="block">
      <el-pagination
        :background="true"
        prev-text="上一页"
        next-text="下一页"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 15, 20]"
        :page-size="10"
        layout="prev, pager, next, sizes, total"
        :total="407"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import InputCom from "../../components/settings/InputCom.vue";
import SelectCom from "../../components/settings/SelectCom.vue";

export default {
  name: "LogView",
  components: {
    InputCom,
    SelectCom,
  },
  data() {
    return {
      // 搜索框
      search: {
        serialNum: "",
        keyword: "",
        createTime: "",
        ipAddress: "",
        operator: "",
      },
      currentPage: 4, // 当前所在页
      // 搜索 - 下拉框选项
      createTimeList: [
        { value: 1, label: "全部" },
        { value: 2, label: "近三个月" },
        { value: 3, label: "今年内" },
        { value: 4, label: "2021年" },
        { value: 5, label: "2020年" },
        { value: 6, label: "2020年以前" },
      ],
      theadList: [
        { prop: "serialNum", label: "流水号", sort: false },
        { prop: "functionModule", label: "功能模块", sort: true },
        { prop: "log", label: "操作日志", sort: false },
        { prop: "ipAddress", label: "IP地址", sort: false },
        { prop: "ipBelongs", label: "IP归属地", sort: true },
        { prop: "createTime", label: "创建时间", sort: true },
      ],
      tableData: [
        {
          serialNum: 10232964187883,
          functionModule: "登录",
          log: "周审核  登录了系统",
          ipAddress: "219.134.104.255",
          ipBelongs: "四川 成都 武侯",
          createTime: "2022-09-10 18:22:40",
        },
        {
          serialNum: 10232964187883,
          functionModule: "登录",
          log: '周审核  审核通过/拒绝了"小默123"的用户头像/用户昵称修改，流水号为10232964187883',
          ipAddress: "219.134.104.255",
          ipBelongs: "广东 深圳 龙华",
          createTime: "2022-09-11 18:22:40",
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    reset() {
      this.search.serialNum = "";
      this.search.keyword = "";
      this.search.createTime = "";
      this.search.ipAddress = "";
      this.search.operator = "";
    }
  },
};
</script>

<style scoped>
@import "../../assets/css/paging.css";
.log {
  width: 100%;
  /* border: 1px solid red; */
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: white;
}
.search {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.search-input {
  margin-right: 20px;
}
.search-input:nth-of-type(4) {
  margin-right: 0px;
}
.search-input:last-of-type {
  margin-top: 20px;
}
</style>