<template>
  <div>
    <el-table
      :data="showData"
      style="width: 100%;"
      :header-cell-style="{
        'background-color': '#EEF1FC',
        padding: '10px 0',
      }"
      :fit="true"
      :default-sort="{ prop: 'id', order: 'descending' }"
    >
      <el-table-column
        :prop="item.props"
        :label="item.label"
        v-for="(item, index) in tableHeader"
        :key="index"
        :sortable="item.sort"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div style="cursor: pointer;">
            <el-popover
              popper-class="operaSlot"
              placement="top-start"
              trigger="hover"
            >
              <div class="bbSlot">
                <slot :rowData="scope.row"></slot>
              </div>
              <p slot="reference">···</p>
            </el-popover>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-bottom-page"></div>
    <div style="display: flex; justify-content: center;">
      <el-pagination
        @size-change="handleSizeChange"
        background
        layout="prev, pager, next, sizes, total"
        :total="this.$store.state.setting.dataTotal"
        :page-size="pageSize"
        :page-sizes="[10, 20]"
        :pager-count="7"
        :current-page.sync="pageNum"
        prev-text="上一页"
        next-text="下一页"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'cpn',
  props: ['tableData'],
  data() {
    return {
      visible: false,
      pageSize: 10,
      pageNum: 1,
      nowData: [],
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val
    },
  },
  computed: {
    ...mapGetters({
      tableHeader: 'setting/tableHeader',
    }),
    showData() {
      if (this.nowData.length == 0) {
        return this.tableData
      } else {
        return this.nowData
      }
    },
  },
}
</script>
<style scoped></style>
