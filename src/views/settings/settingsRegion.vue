<template>
  <div class="region-setting">
    <!-- 头部 -->
    <div class="region-setting-header">
      <div style="display: flex;">
        <el-input
          placeholder="请输入关键词查询"
          suffix-icon="el-icon-search"
        ></el-input>
      </div>
      <el-button
        class="region-setting-button-save"
        icon="el-icon-s-claim"
        @click="submit"
      >
        保存配置
      </el-button>
    </div>
    <!-- 表格 -->
    <div class="region-setting-content">
      <el-table
        :data="tableData"
        style="width: 100%;"
        border
        stripe
        :fit="true"
        row-key="id"
        lazy
        :load="load"
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        :header-cell-style="{
          'background-color': '#EEF1FC',
          padding: '10px 0',
        }"
      >
        <!-- 懒加载 - 按钮 -->
        <el-table-column label="" width="30"></el-table-column>
        <!-- 省 -->
        <el-table-column prop="province" label="省"></el-table-column>
        <!-- 市 -->
        <el-table-column prop="city" label="市"></el-table-column>
        <!-- 县/区 -->
        <el-table-column prop="area" label="县/区" width="1200">
          <template slot-scope="scope">
            <div class="region-setting-area">
              <span
                class="region-setting-area-span"
                v-for="(item, index) in scope.row.area"
                :key="index"
              >
                <input
                  type="checkbox"
                  v-model="item.check"
                  @change="addParam(scope.row.id, scope.row.area)"
                />
                {{ item.name }}
              </span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'cpn',
  data() {
    return {
      tableData: [],
      paramObj: {},
    }
  },
  created() {
    this.treeCreate()
  },
  methods: {
    ...mapActions({ axios_get: 'setting/axios_get' }),
    // axios - 数据初始化
    async treeCreate() {
      await this.axios_get({ api: '/getRegionP' }).then(() => {
        this.tableData = this.$store.state.setting.regionData
      })
    },
    // axios - 懒加载 - 树分支
    load(tree, treeNode, resolve) {
      this.axios_get({ api: '/getRegionCA', pid: tree.id }).then(() => {
        let arr = JSON.parse(JSON.stringify(this.branchData))
        resolve(arr)
      })
    },
    // 添加待传递数据
    addParam(name, value) {
      this.paramObj[name] = value
    },
    // axios - 保存配置
    submit() {
      let obj = JSON.parse(JSON.stringify(this.paramObj))
      if (JSON.stringify(obj) != '{}') {
        console.log(obj)
        this.$message({
          message: '保存成功',
          type: 'success',
        })
        console.log('提交成功', obj)
      } else {
        this.$message({
          message: '配置无任何变化',
          type: 'warning',
        })
      }
    },
  },
  computed: {
    ...mapState({
      regionData: (state) => state.setting.regionData,
      branchData: (state) => state.setting.branchData,
    }),
  },
}
</script>
<style scoped>
.region-setting-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.el-input {
  width: 330px;
}
.el-input >>> .el-input__inner {
  height: 36px;
}
.region-setting-button-save {
  width: 100px;
  height: 36px;
  padding: 4px;
  color: white;
  background-color: #3f7be0;
}
.el-table >>> .el-table__cell {
  height: 36px;
  min-height: 36px;
  padding: 5px 0;
}
.el-table >>> .el-table__expand-icon .el-icon-arrow-right:before {
  content: '\e722';
}
.el-table >>> .el-table__expand-icon--expanded .el-icon-arrow-right:before {
  content: '\e723';
}
.el-table >>> .el-table__expand-icon,
.el-table >>> .el-table__expand-icon--expanded {
  font-size: 20px;
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  transform: rotate(0deg);
}
.region-setting-area {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.region-setting-area-span {
  padding: 0 8px;
  display: flex;
  align-items: center;
}
.region-setting-area-span input {
  margin-right: 8px;
}
</style>
