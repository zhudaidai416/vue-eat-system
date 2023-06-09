<template>
  <div class="add-role">
    <el-form
      :model="form"
      label-width="100px"
      label-position="left"
      size="small"
    >
      <div class="title">角色信息</div>
      <el-form-item label="角色名称：">
        <el-input
          placeholder="请输入名称"
          v-model="form.role"
          maxlength="20"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="角色描述：">
        <el-input
          placeholder="请输入名称"
          v-model="form.roleDescribe"
          maxlength="100"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="参考角色：">
        <el-select v-model="form.value" placeholder="请选择">
          <el-option
            v-for="item in roleList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <div class="title">权限信息</div>
      <el-form-item label="资源配置：">
        <el-input placeholder="请输入资源名称" v-model="resource">
          <template slot="append"><i class="el-icon-search"></i>搜索</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button>取消</el-button>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AddRole",
  data() {
    return {
      resource: "",
      roleList: [
        { value: 1, label: "审核人员" },
        { value: 2, label: "财务人员" },
        { value: 3, label: "超级管理员" },
      ],
      form: {
        role: 14,
        roleDescribe: "证件类型",
        value: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>

<style scoped>
.title {
  font-weight: 800;
  margin: 20px 0;
}
.goback {
  color: blue;
  position: absolute;
  top: 80px;
  right: 40px;
}
</style>