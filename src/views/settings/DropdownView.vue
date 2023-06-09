<template>
  <div class="dropdown">
    <!-- 搜索框 -->
    <div class="search">
      <InputCom
        class="search-input"
        placeholder="请输入Key值"
        v-model="search.key"
        >Key值</InputCom
      >
      <InputCom
        class="search-input"
        placeholder="请输入Value值"
        v-model="search.value"
        >Value值</InputCom
      >
      <InputCom
        class="search-input"
        placeholder="请输入备注"
        v-model="search.remarks"
        >备注</InputCom
      >
      <SelectCom :options="useStateList" v-model="search.useState"
        >使用状态</SelectCom
      >
    </div>
    <!-- 测试搜索框输出的值：<div>{{search}}</div> -->
    <!-- 搜索按钮 -->
    <el-button class="reset-btn" @click="resetDropdown">重置</el-button>
    <el-button class="search-btn" @click="searchDropdown">搜索</el-button>
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
              <span @click="editDropdown(scope.row)">编辑Dropdown</span>
            </div>
            <div class="popover-item">
              <i class="el-icon-remove-outline"></i>
              <span
                @click="disableDropdown(scope.row.dropdownId, scope.row.status)"
                >禁用Dropdown</span
              >
            </div>
            <div class="popover-item">
              <i class="el-icon-circle-check"></i>
              <span @click="useDropdown(scope.row.dropdownId, scope.row.status)"
                >启用Dropdown</span
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
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3]"
        :page-size="pageSize"
        layout="prev, pager, next, sizes, total"
        :total="totalDataLength"
      >
      </el-pagination>
    </div>

    <!-- 编辑Dropdown弹窗 -->
    <el-dialog title="编辑Dropdown" :visible.sync="editDropdownDialog">
      <!-- 编辑dropdown的表单 -->
      <el-form
        :model="form"
        label-width="100px"
        label-position="left"
        size="small"
      >
        <el-form-item label="编号：">{{ form.dropdownId }}</el-form-item>
        <el-form-item label="中文Key：">
          <el-input
            v-model="form.keyZhi"
            maxlength="20"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="英文Key：">
          <el-input
            v-model="form.enKey"
            maxlength="50"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="Value：">
          <div class="textarea">
            <TextareaCom
              class="textarea-item"
              placeholder="请输入中文Value"
              v-model="form.valueZhi"
              >中文Value</TextareaCom
            >
            <TextareaCom
              class="textarea-item"
              placeholder="请输入英文Value"
              v-model="form.enValue"
              >英文Value</TextareaCom
            >
          </div>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input
            v-model="form.remarksZhi"
            maxlength="50"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="状态：">{{ form.status }}</el-form-item>
        <el-form-item label="创建时间：">{{ form.createTime }}</el-form-item>
        <el-form-item label="修改时间：">{{ form.editTime }}</el-form-item>
      </el-form>
      <!-- <div>{{ form }}</div> -->

      <div slot="footer" class="dialog-footer">
        <el-button @click="editDropdownDialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import InputCom from "../../components/settings/InputCom.vue";
import SelectCom from "../../components/settings/SelectCom.vue";
import TextareaCom from "../../components/settings/TextareaCom.vue";

export default {
  name: "DropdownView",
  components: {
    InputCom,
    SelectCom,
    TextareaCom,
  },
  created() {
    this.showData();
  },
  data() {
    return {
      search: { key: "", value: "", remarks: "", useState: "" }, // 搜索框
      visible: false, // 操作...按钮的状态
      editDropdownDialog: false, // 编辑弹窗
      currentPage: 1, // 当前所在页
      pageSize: 3, // 每页条数
      totalDataLength: 0,
      // 表头
      theadList: [
        { prop: "dropdownId", label: "编号" },
        { prop: "keyZhi", label: "Key" },
        { prop: "valueZhi", label: "Value", width: "400" },
        { prop: "remarksZhi", label: "备注" },
        { prop: "status", label: "状态" },
      ],
      tableData: [],
      // 下拉框选项
      useStateList: [
        { value: 1, label: "全部状态" },
        { value: 2, label: "正常" },
        { value: 3, label: "已禁用" },
      ],
      // 编辑表单
      form: {
        dropdownId: 0,
        keyZhi: "",
        enKey: "",
        valueZhi: "",
        enValue: "",
        remarksZhi: "",
        status: "",
        createTime: "",
        editTime: "",
      },
    };
  },
  methods: {
    // 搜索 - 下拉框 - 传值
    // selectedValue(value) {
    //   this.search.useState = value;
    // },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.showData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.showData();
    },
    // 数据渲染接口
    showData() {
      this.$axios
        .get("/DropdownList", {
          params: {
            currentPage: this.currentPage,
            pageSize: this.pageSize,
          },
        })
        .then((res) => {
          console.log(res);
          res.data.data.records.forEach((item) => {
            item.status = item.status == 1 ? "正常" : "已禁用";
          });
          this.tableData = res.data.data.records;
          this.totalDataLength = res.data.data.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 重置 - 接口
    resetDropdown() {
      this.search.key = "";
      this.search.value = "";
      this.search.remarks = "";
      this.search.useState = "";
      this.showData();
    },
    // 搜索 - 接口
    searchDropdown() {
      this.$axios
        .post("/selectDropdownByConditions", {
          status: parseInt(this.search.useState),
        })
        .then((res) => {
          console.log(res);
          res.data.forEach((item) => {
            item.status = item.status == 1 ? "正常" : "已禁用";
          });
          this.tableData = res.data;
          this.totalDataLength = res.data.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 编辑弹框 - 接口
    editDropdown(row) {
      this.editDropdownDialog = true;
      this.form = Object.assign({}, row);
      console.log("选中编辑的数据" + this.form);
    },
    confirmEdit() {
      this.editDropdownDialog = false;
      this.$axios
        .post("/updateDropdown", {
          dropdownId: this.form.dropdownId,
          keyZhi: this.form.keyZhi,
          valueZhi: this.form.valueZhi,
          remarksZhi: this.form.remarksZhi,
        })
        .then((res) => {
          console.log(res);
          this.showData();
          this.$message({
            type: "success",
            message: "编辑成功!",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 禁用/启用/删除弹框 - 接口
    disableDropdown(id, status) {
      console.log("禁用的id：" + id, status);
      if (status == "已禁用") {
        this.$message({
          type: "success",
          message: "已禁用!",
        });
      } else {
        this.$confirm("确定要禁用所选Dropdown吗？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$axios
              .get("/stopOrUseDropdown", {
                params: {
                  dropdownId: id,
                  flag: 0,
                },
              })
              .then((res) => {
                console.log(res);
                this.showData();
                this.$message({
                  type: "success",
                  message: "禁用成功!",
                });
              })
              .catch((err) => {
                console.log(err);
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
    useDropdown(id, status) {
      console.log("启用的id：" + id, status);
      if (status == "正常") {
        this.$message({
          type: "success",
          message: "已启用!",
        });
      } else {
        this.$confirm("确定要启用所选Dropdown吗？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$axios
              .get("/stopOrUseDropdown", {
                params: {
                  dropdownId: id,
                  flag: 1,
                },
              })
              .then((res) => {
                console.log(res);
                this.showData();
                this.$message({
                  type: "success",
                  message: "启用成功!",
                });
              })
              .catch((err) => {
                console.log(err);
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
  },
};
</script>

<style scoped>
@import "../../assets/css/paging.css";
.dropdown {
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
}
.search-input {
  margin-right: 20px;
}
.el-icon-edit,
.el-icon-remove-outline,
.el-icon-circle-check {
  font-weight: 700;
  margin-right: 10px;
}
.el-icon-more:hover,
.el-icon-edit {
  color: blue;
}
.el-icon-remove-outline {
  color: red;
}
.el-icon-circle-check {
  color: green;
}
.popover-item {
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
}
.popover-item > span:hover {
  color: blue;
}
.popover-item:nth-of-type(3) {
  margin-bottom: 0px;
}
:deep(.el-table .cell) {
  white-space: pre-line;
}
.textarea {
  height: 150px;
  display: flex;
  flex-direction: row;
}
.textarea-item {
  margin-right: 20px;
}
</style>