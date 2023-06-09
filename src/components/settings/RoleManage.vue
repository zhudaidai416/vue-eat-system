<template>
  <div class="role-manage">
    <!-- 搜索框 -->
    <div class="search">
      <InputCom
        class="search-input"
        placeholder="请输入账号"
        v-model="search.role"
        >角色名称</InputCom
      >
      <SelectCom
        class="search-input"
        :options="createTimeList"
        v-model="search.createTime"
        >创建时间</SelectCom
      >
      <SelectCom
        class="search-input"
        :options="useStateList"
        v-model="search.useState"
        >使用状态</SelectCom
      >
    </div>
    <!-- 测试搜索框输出的值：<div>{{search}}</div> -->
    <!-- 搜索按钮 -->
    <el-button class="reset-btn" @click="reset">重置</el-button>
    <el-button class="search-btn">搜索</el-button>
    <!-- 数据表格 -->
    <div class="table-content">
      <div class="table-btn">
        <el-button round class="add-btn" @click="addRole">+ 添加角色</el-button>
      </div>
      <!-- 数据表格 -->
      <el-table
        :data="tableData"
        :fit="true"
        style="width: 100%"
        :header-cell-style="{
          'background-color': '#EEF1FC',
          color: 'black',
          'font-weight': 'normal',
          'text-align': 'center',
        }"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column
          v-for="item in theadList"
          :key="item.index"
          :prop="item.prop"
          :label="item.label"
          :sortable="item.sort"
          :width="item.width"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <!-- 操作弹出框 -->
            <el-popover v-model="visible">
              <div class="popover-item">
                <i class="el-icon-edit"></i>
                <span @click="editRole(scope.row)">编辑角色</span>
              </div>
              <div class="popover-item">
                <i class="el-icon-remove-outline"></i>
                <span @click="disableRole(scope.row.id, scope.row.status)"
                  >禁用角色</span
                >
              </div>
              <div class="popover-item">
                <i class="el-icon-circle-check"></i>
                <span @click="useRole(scope.row.id, scope.row.status)"
                  >启用角色</span
                >
              </div>
              <div class="popover-item">
                <i class="el-icon-delete"></i>
                <span @click="delRole(scope.row.id, scope.row.status)"
                  >删除角色</span
                >
              </div>
              <i
                slot="reference"
                @click="visible = !visible"
                class="el-icon-more"
              ></i>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <!-- 数据分页 -->
      <div class="block">
        <el-pagination
          :background="true"
          prev-text="上一页"
          next-text="下一页"
          :current-page="currentPage"
          :page-sizes="[10, 15, 20]"
          :page-size="10"
          layout="prev, pager, next, sizes, total"
          :total="407"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InputCom from "../../components/settings/InputCom.vue";
import SelectCom from "../../components/settings/SelectCom.vue";

export default {
  name: "RoleManage",
  components: {
    InputCom,
    SelectCom,
  },
  computed: {
    ...mapState({
      tableData: (state) => state.roleStore.tableData,
    }),
  },
  data() {
    return {
      search: { role: "", createTime: "", useState: "" },
      editDialog: false,
      mandate: false,
      visible: false, // 操作...按钮的状态
      currentPage: 1,
      createTimeList: [
        { value: 1, label: "全部" },
        { value: 2, label: "近三个月" },
        { value: 3, label: "今年内" },
        { value: 4, label: "2021年" },
        { value: 5, label: "2020年" },
        { value: 6, label: "2020年以前" },
      ],
      useStateList: [
        { value: 1, label: "全部状态" },
        { value: 2, label: "正常" },
        { value: 3, label: "已禁用" },
      ],
      theadList: [
        { prop: "id", label: "编号", sort: false },
        { prop: "roleName", label: "角色名称", sort: false },
        { prop: "personNum", label: "授权人数", sort: false },
        { prop: "role", label: "角色", sort: false, width: "200" },
        {
          id: 5,
          prop: "createTime",
          label: "创建时间",
          sort: true,
          width: "170",
        },
        { id: 6, prop: "state", label: "状态", sort: false },
      ],
    };
  },
  methods: {
    reset() {
      this.search.role = "";
      this.search.createTime = "";
      this.search.useState = "";
    },
    addRole() {
      this.$router.push("/settings-addrole");
    },
    editRole() {
      this.$router.push("/settings-editrole");
    },
    disableRole() {
      this.$confirm("确定要禁用该角色吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "禁用成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消禁用",
          });
        });
    },
    useRole() {
      this.$confirm("确定要启用该角色吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "启用成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消启用",
          });
        });
    },
    delRole() {
      this.$confirm("确定要删除该角色吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/paging.css";
.search {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.search-input {
  margin-right: 20px;
}
.table-content {
  border-top: 2px solid #e4e7ed;
}
.table-btn {
  padding: 20px 0;
}
.add-btn {
  height: 35px;
  line-height: 10px;
  font-size: 13px;
  border: 1px solid #4e73df;
  color: #4e73df;
}
.el-icon-edit,
.el-icon-remove-outline,
.el-icon-circle-check,
.el-icon-delete {
  font-weight: 700;
  margin-right: 10px;
}
.el-icon-more:hover,
.el-icon-edit {
  color: blue;
}
.el-icon-remove-outline,
.el-icon-delete {
  color: red;
}
.el-icon-circle-check {
  color: green;
}
.popover-item {
  margin-bottom: 10px;
  text-align: center;
}
.popover-item > span:hover {
  color: blue;
}
.popover-item:nth-of-type(4) {
  margin-bottom: 0px;
}
</style>