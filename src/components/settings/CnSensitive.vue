<template>
  <div class="cn-sensitive">
    <!-- 搜索框 -->
    <div class="search">
      <InputCom
        class="search-input"
        placeholder="请输入ID"
        v-model="search.wordId"
        >敏感词ID</InputCom
      >
      <InputCom
        class="search-input"
        placeholder="请输入敏感词"
        v-model="search.word"
        >敏感词</InputCom
      >
      <SelectCom
        class="search-input"
        :options="createTimeList"
        v-model="search.createTime"
        >创建时间</SelectCom
      >
      <SelectCom :options="useStateList" v-model="search.useState"
        >使用状态</SelectCom
      >
    </div>
    <!-- 测试搜索框输出的值：<div>{{search}}</div> -->
    <!-- 搜索按钮 -->
    <el-button class="reset-btn" @click="resetWord">重置</el-button>
    <el-button class="search-btn" @click="searchWord">搜索</el-button>
    <!-- 数据表格 -->
    <div class="table-content">
      <div class="table-btn">
        <el-button round @click="addSenWordDialog = true" class="add-btn"
          >+ 添加敏感词</el-button
        >
        <span class="btn-line"></span>
        <el-button round @click="disableWord">批量禁用</el-button>
        <el-button round @click="useWord">批量启用</el-button>
        <el-button round @click="delWord">批量删除</el-button>
      </div>
      <!-- 数据表格 -->
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
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
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="bottom">
              <div class="popover-item">
                <i class="el-icon-edit"></i>
                <span @click="editWord(scope.row)">编辑敏感词</span>
              </div>
              <i
                slot="reference"
                @click="visible = !visible"
                class="el-icon-more"
              ></i> </el-popover
          ></template>
          <!-- 操作弹出框 -->
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
          :page-sizes="[3, 4, 10]"
          :page-size="pageSize"
          layout="prev, pager, next, sizes, total"
          :total="totalDataLength"
        >
        </el-pagination>
      </div>
    </div>

    <!-- 添加敏感词弹窗 -->
    <el-dialog title="添加敏感词" :visible.sync="addSenWordDialog">
      <!-- 添加敏感词的表单 -->
      <el-form
        :model="addForm"
        label-width="100px"
        label-position="left"
        size="small"
      >
        <el-form-item label="语言：">
          <el-radio v-model="addForm.language" label="1">中文敏感词</el-radio>
          <el-radio v-model="addForm.language" label="2">英文敏感词</el-radio>
        </el-form-item>
        <el-form-item label="用途：">
          <el-select v-model="addForm.use" placeholder="请选择">
            <el-option
              v-for="item in useList"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="敏感词：">
          <el-input
            type="textarea"
            rows="2"
            placeholder="请输入敏感词"
            class="textarea"
            v-model="addForm.senWord"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="替换词：">
          <el-select v-model="addForm.replaceWord" placeholder="请选择">
            <el-option
              v-for="item in replaceWordList"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div>{{ addForm }}</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addSenWordDialog = false">取 消</el-button>
        <el-button type="primary" @click="addWord">保 存</el-button>
      </div>
    </el-dialog>

    <!-- 编辑敏感词弹窗 -->
    <el-dialog title="编辑敏感词" :visible.sync="editSenWordDialog">
      <!-- 编辑敏感词的表单 -->
      <el-form
        :model="editForm"
        label-width="100px"
        label-position="left"
        size="small"
        :rules="rules"
      >
        <el-form-item label="ID：">{{ editForm.sensitiveWordId }}</el-form-item>
        <el-form-item label="语言：">
          <el-radio v-model="editForm.language" label="1">中文敏感词</el-radio>
          <el-radio v-model="editForm.language" label="2">英文敏感词</el-radio>
        </el-form-item>
        <el-form-item label="用途：">
          <el-select v-model="editForm.scopeApplication" placeholder="请选择">
            <el-option
              v-for="item in useList"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="敏感词：" prop="sensitiveWordValue">
          <el-input
            type="text"
            v-model="editForm.sensitiveWordValue"
            maxlength="20"
            show-word-limit
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="替换词：">
          <el-select
            v-model="editForm.sensitiveWordReplace"
            placeholder="请选择"
          >
            <el-option
              v-for="item in replaceWordList"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态：">{{ editForm.state }}</el-form-item>
        <el-form-item label="创建时间：">{{
          editForm.createTime
        }}</el-form-item>
        <el-form-item label="修改时间：">{{ editForm.editTime }}</el-form-item>
      </el-form>
      <div>{{ editForm }}</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editSenWordDialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmEdit">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import InputCom from "../../components/settings/InputCom.vue";
import SelectCom from "../../components/settings/SelectCom.vue";

export default {
  name: "CnSensitive",
  components: {
    InputCom,
    SelectCom,
  },
  created() {
    this.showData();
  },
  data() {
    var validate = (rule, value, callback) => {
      const reg = /^[\u4e00-\u9fa5]+$/;
      if (reg.test(value)) {
        callback();
      } else {
        callback(new Error("请输入中文！"));
      }
    };
    return {
      // 搜索框
      search: { wordId: "", word: "", createTime: "", useState: "" },
      visible: false, // 操作...按钮的状态
      // 添加/编辑弹窗变量
      addSenWordDialog: false,
      editSenWordDialog: false,
      currentPage: 1, // 当前所在页
      pageSize: 4, // 每页条数
      totalDataLength: 0,
      tableData: [],
      multipleSelectionArr: [],
      multipleSelection: "", // 批量id
      // 搜索 - 下拉框选项
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
        { prop: "sensitiveWordId", label: "ID", sort: false },
        { prop: "scopeApplication", label: "应用范围", sort: false },
        { prop: "sensitiveWordValue", label: "敏感词", sort: false },
        { prop: "sensitiveWordReplace", label: "替换为", sort: false },
        { prop: "createTime", label: "创建时间", sort: true },
        { prop: "status", label: "状态", sort: false },
      ],
      // 添加/编辑敏感词 - 下拉框选项
      useList: [
        { value: "1", label: "通用" },
        { value: "2", label: "昵称" },
        { value: "3", label: "商品" },
        { value: "4", label: "评价" },
        { value: "5", label: "活动" },
      ],
      replaceWordList: [
        { value: "1", label: "***" },
        { value: "2", label: "为空" },
      ],
      // 添加/编辑的表单
      addForm: {
        language: "",
        use: "",
        senWord: "",
        replaceWord: "",
      },
      editForm: {
        sensitiveWordId: 0,
        language: 1,
        scopeApplication: "",
        sensitiveWordValue: "",
        sensitiveWordReplace: "",
        status: 0,
        createTime: "",
        editTime: "",
      },
      rules: {
        sensitiveWordValue: [
          { required: true, message: "请输入敏感词", trigger: "blur" },
          { min: 1, max: 16, message: "请输入中文！", trigger: "blur" },
          { validator: validate, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
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
    // 多选选中的数据
    handleSelectionChange(val) {
      this.multipleSelectionArr = val;
      // console.log(JSON.stringify(this.multipleSelectionArr));
    },
    mul() {
      this.multipleSelectionArr.forEach((item) => {
        this.multipleSelection += item.sensitiveWordId + ",";
      });
      console.log(this.multipleSelection);
    },
    // 数据渲染接口
    showData() {
      this.$axios
        .get("/SensitiveWordsList", {
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
          // this.tableData = this.tableData.filter(item =>{
          //   const reg = /^[\u4e00-\u9fa5]+$/;
          //   if(reg.test(item.sensitiveWordValue)){
          //     return item.sensitiveWordValue
          //   }
          // });
          console.log(this.tableData);
          this.totalDataLength = res.data.data.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 重置 - 接口
    resetWord() {
      this.search.wordId = "";
      this.search.word = "";
      this.search.createTime = "";
      this.search.useState = "";
      this.showData();
    },
    // 搜索 - 接口
    searchWord() {
      this.$axios
        .post("/selectByConditions", {
          sensitiveWordId: parseInt(this.search.wordId),
        })
        .then((res) => {
          console.log(res.data.data);
          res.data.data.forEach((item) => {
            item.status = item.status == 1 ? "正常" : "已禁用";
          });
          this.tableData = res.data.data;
          this.totalDataLength = res.data.data.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 禁用 - 接口
    disableWord() {
      this.$confirm("确定要禁用所选敏感词吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.mul();
          this.$axios
            .get("/batchUpdateStatus", {
              params: {
                sensitive_word_ids: this.multipleSelection,
                status: 0,
              },
            })
            .then((res) => {
              console.log(res);
              this.showData();
              this.$message({
                type: "success",
                message: "禁用成功!",
              });
              this.multipleSelection = "";
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
    },
    // 启用 - 接口
    useWord() {
      this.$confirm("确定要启用所选敏感词吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.mul();
          this.$axios
            .get("/batchUpdateStatus", {
              params: {
                sensitive_word_ids: this.multipleSelection,
                status: 1,
              },
            })
            .then((res) => {
              console.log(res);
              this.showData();
              this.$message({
                type: "success",
                message: "启用成功!",
              });
              this.multipleSelection = "";
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
    },
    // 删除 - 接口
    delWord() {
      this.$confirm("确定要删除所选敏感词吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.mul();
          this.$axios
            .get("/batchDelSensitiveWordsList", {
              params: {
                sensitive_word_ids: this.multipleSelection,
              },
            })
            .then((res) => {
              console.log(res);
              this.showData();
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.multipleSelection = "";
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 添加 - 接口
    addWord() {
      this.addSenWordDialog = false;
      this.$axios
        .post("/insertSensitiveWords", {
          scopeApplication: this.addForm.use,
          sensitiveWordValue: this.addForm.senWord,
          sensitiveWordReplace: this.addForm.replaceWord,
        })
        .then((res) => {
          console.log(res);
          this.showData();
          this.$message({
            type: "success",
            message: "添加成功!",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 编辑 - 接口
    editWord(row) {
      this.editSenWordDialog = true;
      this.editForm = Object.assign({}, row);
      console.log("选中编辑的数据" + this.editForm);
      if (this.editForm.language == 1) {
        let reg = /^[\u4e00-\u9fa5]+$/;
        if (reg.test(this.this.editForm.sensitiveWordValue)) {
          alert("请输入中文！");
        }
      }
      console.log(this.editForm.language);
    },
    confirmEdit() {
      this.editSenWordDialog = false;
      this.$axios
        .post("/updateSensitiveWords", {
          sensitiveWordId: this.editForm.sensitiveWordId,
          scopeApplication: this.editForm.scopeApplication,
          sensitiveWordValue: this.editForm.sensitiveWordValue,
          sensitiveWordReplace: this.editForm.sensitiveWordReplace,
          status: this.status,
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
  },
};
</script>

<style scoped>
@import "../../assets/css/paging.css";
.search {
  display: flex;
  flex-direction: row;
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
.el-icon-more:hover {
  color: blue;
}
.el-icon-edit {
  color: blue;
  font-weight: 700;
  margin-right: 10px;
}
.btn-line {
  margin: 0 10px;
  border-left: 2px solid #e4e7ed;
}
.popover-item {
  text-align: center;
}
.popover-item > span:hover {
  color: blue;
}
:deep(.el-textarea__inner) {
  width: 300px;
  height: 100px;
}
.el-input {
  width: 205px;
}
</style>