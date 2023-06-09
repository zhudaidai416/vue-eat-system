<template>
  <div class="account-manage">
    <!-- 搜索框 -->
    <div class="search">
      <InputCom
        class="search-input"
        placeholder="请输入账号"
        v-model="search.account"
        >登录账号</InputCom
      >
      <InputCom
        class="search-input"
        placeholder="请输入真实姓名"
        v-model="search.realName"
        >真实姓名</InputCom
      >
      <SelectCom class="search-input" :options="roleList" v-model="search.role"
        >角色</SelectCom
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
        <el-button round @click="addDialog = true" class="add-btn"
          >+ 添加子账号</el-button
        >
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
            <el-popover trigger="click" placement="bottom">
              <div class="popover-item">
                <i class="el-icon-edit"></i>
                <span @click="editAccount(scope.row)">编辑账号</span>
              </div>
              <div class="popover-item">
                <i class="el-icon-remove-outline"></i>
                <span @click="disableAccount(scope.row.id, scope.row.state)"
                  >禁用账号</span
                >
              </div>
              <div class="popover-item">
                <i class="el-icon-circle-check"></i>
                <span @click="useAccount(scope.row.id, scope.row.state)"
                  >启用账号</span
                >
              </div>
              <div class="popover-item">
                <i class="el-icon-delete"></i>
                <span @click="delAccount(scope.row.id)">删除账号</span>
              </div>
              <i
                slot="reference"
                @click="visible = !visible"
                class="el-icon-more"
              ></i> </el-popover
          ></template>
        </el-table-column>
      </el-table>
      <!-- 数据分页 -->
      <div class="block">
        <el-pagination
          :background="true"
          prev-text="上一页"
          next-text="下一页"
          :current-page="currentPage"
          :page-sizes="[3, 4, 5]"
          :page-size="3"
          layout="prev, pager, next, sizes, total"
          :total=tableData.length
        >
        </el-pagination>
      </div>
    </div>

    <!-- 添加账号弹窗 -->
    <el-dialog title="添加子账号" :visible.sync="addDialog">
      <!-- 添加子账号的表单 -->
      <el-form
        :model="addForm"
        label-width="100px"
        label-position="left"
        size="small"
        :rules="rules"
      >
        <el-form-item label="角色：">
          <el-select v-model="addForm.role" multiple placeholder="请选择">
            <el-option
              v-for="item in addRoleList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账号：" prop="username">
          <el-input
            type="text"
            v-model="addForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            type="password"
            v-model="addForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="真实姓名：">
          <el-input
            placeholder="请输入真实姓名"
            v-model="addForm.realName"
            maxlength="20"
            show-word-limit
          >
          </el-input>
        </el-form-item>
      </el-form>
      <!-- <div>{{addForm}}</div> -->

      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="addDialog = false">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑账号弹窗 -->
    <el-dialog title="编辑子账号" :visible.sync="editDialog">
      <!-- 编辑子账号的表单 -->
      <el-form
        :model="editForm"
        label-width="100px"
        label-position="left"
        size="small"
        :rules="rules"
      >
        <el-form-item label="编号：">{{ editForm.id }}</el-form-item>
        <el-form-item label="角色：">
          <el-select v-model="editForm.role" multiple placeholder="请选择">
            <el-option
              v-for="item in addRoleList"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账号：" prop="username">
          <el-input
            type="text"
            v-model="editForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            type="password"
            v-model="editForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="真实姓名：">
          <el-input
            placeholder="请输入真实姓名"
            v-model="editForm.realName"
            maxlength="20"
            show-word-limit
          >
          </el-input>
        </el-form-item>
        <el-form-item label="状态：">{{ editForm.state }}</el-form-item>
        <el-form-item label="创建时间：">{{
          editForm.createTime
        }}</el-form-item>
        <el-form-item label="修改时间：">{{ editForm.editTime }}</el-form-item>
      </el-form>
      <!-- <div>{{editForm}}</div> -->

      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import InputCom from "../../components/settings/InputCom.vue";
import SelectCom from "../../components/settings/SelectCom.vue";

export default {
  name: "AccountManage",
  components: {
    InputCom,
    SelectCom,
  },
  computed: {
    ...mapState({
      tableData: state => state.accountStore.tableData
    })
  },
  data() {
    // 账号/密码 - 自定义规则
    var validateUserName = (rule, value, callback) => {
      const reg = /^[A-Za-z0-9]+$/;
      if (reg.test(value)) {
        callback();
      } else {
        callback(new Error("以字母开头的4-16位字母和数字组合"));
      }
    };
    var validatePass = (rule, value, callback) => {
      const reg = /^[A-Za-z0-9]+$/;
      if (reg.test(value)) {
        callback();
      } else {
        callback(new Error("限6-20个字符，仅支持字母和数字"));
      }
    };
    return {
      // 搜索框
      search: {
        account: "",
        realName: "",
        role: "",
        createTime: "",
        useState: "",
      },
      // 添加/编辑弹窗变量
      addDialog: false,
      editDialog: false,
      visible: false, // 操作...按钮的状态
      currentPage: 1, // 当前所在页
      // 搜索 - 下拉框选项
      roleList: [
        { value: 1, label: "全部角色" },
        { value: 2, label: "超级管理员" },
        { value: 3, label: "用户审核员" },
        { value: 4, label: "商家审核员" },
        { value: 5, label: "配送审核员" },
        { value: 6, label: "商品审核员" },
        { value: 7, label: "售后处理员" },
        { value: 8, label: "活动审核员" },
        { value: 9, label: "财务人员" },
      ],
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
        { prop: "username", label: "登录账号", sort: false },
        { prop: "realName", label: "真实姓名", sort: false },
        { prop: "role", label: "角色", sort: false, width: "200" },
        { prop: "loginTime", label: "最近登录时间", sort: true, width: "170" },
        { prop: "createTime", label: "创建时间", sort: true, width: "170" },
        { prop: "state", label: "状态", sort: false },
      ],
      // 添加/编辑子账号 - 规则
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 4,
            max: 16,
            message: "以字母开头的4-16位字母和数字组合",
            trigger: "blur",
          },
          { validator: validateUserName, trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "限6-20个字符，仅支持字母和数字",
            trigger: "blur",
          },
          { validator: validatePass, trigger: "blur" },
        ],
      },
      // 添加/编辑敏感词 - 下拉框选项
      addRoleList: [
        { value: 1, label: "超级管理员" },
        { value: 2, label: "用户审核员" },
        { value: 3, label: "商家审核员" },
        { value: 4, label: "配送审核员" },
        { value: 5, label: "商品审核员" },
        { value: 6, label: "售后处理员" },
        { value: 7, label: "活动审核员" },
        { value: 8, label: "财务人员" },
      ],
      // 添加/编辑的表单
      addForm: {
        role: [],
        username: "",
        password: "",
        realName: "",
      },
      editForm: {
        // id: 0,
        // role: [],
        // username: "",
        // password: "",
        // realName: "",
        // state: "",
        // createTime: "",
        // editTime: "",
      },
    };
  },
  methods: {
    reset() {
      this.search.account = "";
      this.search.realName = "";
      this.search.role = "";
      this.search.createTime = "";
      this.search.useState = "";
    },
    editAccount(row) {
      this.editDialog = true;
      this.editForm = row;
      // console.log(this.editForm);
      console.log(this.tableData);
    },
    confirmEdit(){
      console.log(this.tableData);
      this.editDialog = false;
      this.editForm.editTime = new Date();
    },
    // 禁用/启用/删除弹框
    disableAccount(id, state) {
      console.log("禁用的id：" + id, state);
      if (state == "已禁用") {
        this.$message({
          type: "success",
          message: "已禁用!",
        });
      } else {
        this.$confirm("确定要禁用该子账号吗？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.editForm.state = '已禁用'
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
      }
    },
    useAccount(id, state) {
      console.log("启用的id：" + id, state);
      if (state == "正常") {
        this.$message({
          type: "success",
          message: "已启用!",
        });
      } else {
        this.$confirm("确定要启用该子账号吗？", "提示", {
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
      }
    },
    delAccount() {
      this.$confirm("确定要删除该子账号吗？", "提示", {
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
.search-input:nth-of-type(4) {
  margin-right: 0px;
}
.search-input:last-of-type {
  margin-top: 20px;
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