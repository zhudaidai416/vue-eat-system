<template>
  <div id="index">
    <!-- tab页 -->
    <el-tabs v-model="tabName" @tab-click="handleClick">
      <el-tab-pane label="平台配送设置" name="first">
        <div v-if="tabName == 'first'">
          <div class="set-platform-search-input">
            <inputCpn v-model="searchP.scopeApplication">应用范围</inputCpn>
            <selectCpn v-model="searchP.status">使用状态</selectCpn>
          </div>
          <div class="set-platform-search-button">
            <el-button class="reset" @click="resetTable" data-type="p">
              重置
            </el-button>
            <el-button class="search" @click="mx_searchP">搜索</el-button>
          </div>
          <div class="set-platform-add-button">
            <operatCpn @click.native="toAddShipping">
              添加配送设置
            </operatCpn>
          </div>
          <div class="set-platform-table">
            <!-- 平台配送设置 - 表格 -->
            <div>
              <el-table
                :data="tableData"
                style="width: 100%;"
                :header-cell-style="{
                  'background-color': '#EEF1FC',
                  padding: '10px 0',
                }"
                :fit="true"
                :default-sort="{ prop: 'id', order: 'descending' }"
              >
                <el-table-column
                  prop="platformDistributionId"
                  label="编号"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="scopeApplication"
                  label="范围"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="basicDistance"
                  label="基础距离"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="basicDistributionFee"
                  label="基础配送费"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="chargePerOnehundredMeters"
                  label="每百米计费"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="mostPDeliveryDistance"
                  label="最远配送距离"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="markUpZerotothree"
                  label="0~3点加价"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="markUpThreetosix"
                  label="3~6点加价"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="markUpBadweather"
                  label="恶劣天气加价"
                  :sortable="false"
                ></el-table-column>
                <el-table-column prop="status" label="状态" :sortable="false">
                  <template slot-scope="scope">
                    {{ scope.row.status == 1 ? '启用' : '禁用' }}
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <div style="cursor: pointer;">
                      <el-popover
                        popper-class="operaSlot"
                        placement="top-start"
                        trigger="hover"
                      >
                        <div class="bbSlot">
                          <p
                            class="operaP"
                            @click="toChangeShipping(scope.row)"
                          >
                            编辑配送设置
                          </p>
                          <p
                            class="operaP"
                            @click="mx_popupOpen(scope.row)"
                            data-type="sTurnOn"
                            v-if="scope.row.status == 0"
                          >
                            启用配送设置
                          </p>
                          <p
                            class="operaP"
                            @click="mx_popupOpen(scope.row)"
                            data-type="sTurnOff"
                            v-if="scope.row.status == 1"
                          >
                            禁用配送设置
                          </p>
                        </div>
                        <p slot="reference">···</p>
                      </el-popover>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="恶劣天气设置" name="second">
        <div v-if="tabName == 'second'">
          <div class="set-platform-search-input">
            <inputCpn v-model="searchW.scopeApplication">应用范围</inputCpn>
            <selectCpn>恶劣天气</selectCpn>
            <inputCpn>广播消息</inputCpn>
            <selectCpn>创建时间</selectCpn>
            <selectCpn>天气状态</selectCpn>
          </div>
          <div class="set-platform-search-button">
            <el-button class="reset" @click="resetTable" data-type="w">
              重置
            </el-button>
            <el-button class="search" @click="mx_searchW">搜索</el-button>
          </div>
          <div class="set-platform-add-button">
            <operatCpn @click.native="dialogVisible = true">
              添加恶劣天气
            </operatCpn>
            <!-- 添加恶劣天气 - 弹框 -->
            <el-dialog
              title="添加恶劣天气"
              :visible.sync="dialogVisible"
              width="30%"
            >
              <span class="add-bWeather-window">
                <div class="add-bWeather-window-item">
                  <p>应用范围：</p>
                  <select v-model="addWeatherData.range[0]">
                    <option value="">请选择</option>
                  </select>
                  <select v-model="addWeatherData.range[1]">
                    <option value="">请选择</option>
                  </select>
                  <select v-model="addWeatherData.range[2]">
                    <option value="">请选择</option>
                  </select>
                </div>
                <div class="add-bWeather-window-item">
                  <p>恶劣天气：</p>
                  <select v-model="addWeatherData.bWeather">
                    <option value="">请选择</option>
                  </select>
                </div>
                <div
                  class="add-bWeather-window-item"
                  style="align-items: flex-start;"
                >
                  <p>广播公告：</p>
                  <div style="display: flex; flex-direction: column;">
                    <div
                      style="
                        display: flex;
                        align-items: flex-start;
                        margin-bottom: 15px;
                      "
                    >
                      <el-input
                        type="textarea"
                        placeholder="请输入中文公告"
                        v-model="addWeatherData.cnNotice"
                        maxlength="400"
                        show-word-limit
                      ></el-input>
                    </div>
                    <div style="display: flex; align-items: flex-start;">
                      <el-input
                        type="textarea"
                        placeholder="请输入英文公告"
                        v-model="addWeatherData.enNotice"
                        maxlength="500"
                        show-word-limit
                      ></el-input>
                    </div>
                  </div>
                </div>
                <div
                  class="add-bWeather-window-item"
                  style="align-items: flex-start;"
                >
                  <p>起始时间：</p>
                  <el-date-picker
                    v-model="addWeatherData.startDate"
                    type="date"
                    placeholder="选择日期"
                  ></el-date-picker>
                  <el-time-select
                    v-model="addWeatherData.startTime"
                    :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30',
                    }"
                    placeholder="选择时间"
                  ></el-time-select>
                </div>
                <div class="add-bWeather-window-item">
                  <p>结束时间：</p>
                  <el-date-picker
                    v-model="addWeatherData.endDate"
                    type="date"
                    placeholder="选择日期"
                  ></el-date-picker>
                  <el-time-select
                    v-model="addWeatherData.endTime"
                    :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30',
                    }"
                    placeholder="选择时间"
                  ></el-time-select>
                </div>
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                  确 定
                </el-button>
              </span>
            </el-dialog>
          </div>
          <div class="set-platform-table">
            <!-- 恶劣天气设置 - 表格 -->
            <div>
              <el-table
                :data="tableData"
                style="width: 100%;"
                :header-cell-style="{
                  'background-color': '#EEF1FC',
                  padding: '10px 0',
                }"
                :fit="true"
                :default-sort="{ prop: 'id', order: 'descending' }"
              >
                <el-table-column
                  prop="badweatherId"
                  label="编号"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="scopeApplication"
                  label="应用范围"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="badweatherType"
                  label="恶劣天气"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="broadcastMessage"
                  label="广播消息"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="validTime"
                  label="生效时间"
                  :sortable="false"
                ></el-table-column>
                <el-table-column
                  prop="createTime"
                  label="创建时间"
                  :sortable="true"
                ></el-table-column>
                <el-table-column prop="status" label="状态" :sortable="false">
                  <template slot-scope="scope">
                    {{
                      scope.row.status != 0
                        ? scope.row.status != 1
                          ? scope.row.status != 2
                            ? scope.row.status != 3
                              ? 'error'
                              : '已停用'
                            : '已结束'
                          : '已生效'
                        : '未生效'
                    }}
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <div style="cursor: pointer;">
                      <el-popover
                        popper-class="operaSlot"
                        placement="top-start"
                        trigger="hover"
                      >
                        <div class="bbSlot">
                          <p class="operaP">编辑天气</p>
                          <p
                            class="operaP"
                            @click="mx_popupOpen(scope.row)"
                            data-type="wTurnOff"
                            v-if="/[^03]/.test(scope.row.status)"
                          >
                            停用天气
                          </p>
                          <p
                            class="operaP"
                            v-if="/[23]/.test(scope.row.status)"
                          >
                            重新发布
                          </p>
                        </div>
                        <p slot="reference">···</p>
                      </el-popover>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="骑手薪资设置" name="third">
        <div v-if="tabName == 'third'"></div>
        <div class="set-platform-search-input">
          <inputCpn v-model="searchX.scope_application">应用范围</inputCpn>
          <selectCpn v-model="searchX.status">使用状态</selectCpn>
        </div>
        <div class="set-platform-search-button">
          <el-button class="reset" @click="resetTable" data-type="x">
            重置
          </el-button>
          <el-button class="search" @click="mx_searchX">搜索</el-button>
        </div>
        <div class="set-platform-add-button">
          <operatCpn @click.native="toAddSalary">添加薪资设置</operatCpn>
          <p>|</p>
          <p style="font-size: 12px; color: black; line-height: 12px;">
            薪资类型
          </p>
          <button
            class="set-platform-select-button"
            :class="{
              'set-platform-select-button-on': isTypeSelect == 'fullTime',
            }"
            @click="changeJobType"
            data-type="fullTime"
          >
            全职薪资设置
          </button>
          <button
            class="set-platform-select-button"
            :class="{
              'set-platform-select-button-on': isTypeSelect == 'partTime',
            }"
            @click="changeJobType"
            data-type="partTime"
          >
            兼职薪资设置
          </button>
        </div>
        <div class="set-platform-table">
          <!-- 骑手薪资设置 - 表格 -->
          <div>
            <el-table
              :data="tableData"
              style="width: 100%;"
              :header-cell-style="{
                'background-color': '#EEF1FC',
                padding: '10px 0',
              }"
              :fit="true"
              :default-sort="{ prop: 'id', order: 'descending' }"
            >
              <el-table-column
                prop="horsemanSalaryId"
                label="编号"
                :sortable="false"
              ></el-table-column>
              <el-table-column
                prop="scopeApplication"
                label="应用范围"
                :sortable="false"
              ></el-table-column>
              <el-table-column
                prop="horsemanType"
                label="骑手类型"
                :sortable="false"
              ></el-table-column>
              <el-table-column
                prop="settlementMethod"
                label="结算方式"
                :sortable="false"
              ></el-table-column>
              <el-table-column
                prop="baseSalary"
                label="基本工资"
                :sortable="false"
              ></el-table-column>
              <el-table-column
                prop="telephoneSubsidy"
                label="话费补助"
                :sortable="false"
              ></el-table-column>
              <el-table-column
                prop="lastOrderCount"
                label="最低订单量"
                :sortable="false"
              ></el-table-column>
              <el-table-column
                prop="moreOnetothreehundred"
                label="超1~300单奖励"
                :sortable="false"
              ></el-table-column>
              <el-table-column
                prop="moreThreehundredandonetosixhundred"
                label="超301~600单奖励"
                :sortable="false"
              ></el-table-column>
              <el-table-column
                prop="moreSixhundred"
                label="超600单奖励"
                :sortable="false"
              ></el-table-column>
              <el-table-column prop="status" label="状态" :sortable="false">
                <template slot-scope="scope">
                  {{ scope.row.status == 1 ? '正常' : '已禁用' }}
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <div style="cursor: pointer;">
                    <el-popover
                      popper-class="operaSlot"
                      placement="top-start"
                      trigger="hover"
                    >
                      <div class="bbSlot">
                        <p class="operaP">编辑薪资设置</p>
                        <p
                          class="operaP"
                          @click="mx_popupOpen(scope.row)"
                          data-type="xTurnOn"
                          v-if="scope.row.status == 0"
                        >
                          启用薪资设置
                        </p>
                        <p
                          class="operaP"
                          @click="mx_popupOpen(scope.row)"
                          data-type="xTurnOff"
                          v-if="scope.row.status == 1"
                        >
                          禁用薪资设置
                        </p>
                      </div>
                      <p slot="reference">···</p>
                    </el-popover>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 分页按钮 -->
    <div class="table-bottom-page" v-if="!pageStatus.isSearch">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next, sizes, total"
        :total="this.pageStatus.total"
        :page-size="pageStatus.pageSize"
        :page-sizes="[10, 20]"
        :pager-count="7"
        :current-page.sync="pageStatus.pageNum"
        prev-text="上一页"
        next-text="下一页"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
// 自定义组件
import inputCpn from '../../components/settings/inputCpn.vue'
import selectCpn from '../../components/settings/selectCpn.vue'
import operatCpn from '../../components/settings/operatCpn.vue'

// 混入对象
import popupMixin from '../../assets/mixins/mx_setting_platformPopup'
import dataMixin from '../../assets/mixins/mx_setting_data'
import searchMixin from '../../assets/mixins/mx_setting_search'

// store
import { mapMutations } from 'vuex'

export default {
  name: 'settingPlatform',
  mixins: [popupMixin, dataMixin, searchMixin],
  components: {
    inputCpn,
    selectCpn,
    operatCpn,
  },
  data() {
    return {
      tabName: 'first',
      dialogVisible: false,
      visible: false,
      isTypeSelect: 'null',
      tableData: [],
      pageStatus: {
        isSearch: false,
        pageSize: 10,
        pageNum: 1,
        total: 0,
      },
      addWeatherData: {
        range: ['请选择', '请选择', '请选择'],
        bWeather: '请选择',
        cnNotice: '',
        enNotice: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
      },
      // 表格行数据抓取
      sendRow: {},
      // 搜索 - 表单 - 平台配送
      searchP: {
        scopeApplication: '',
        status: -1,
      },
      // 搜索 - 表单 - 天气
      searchW: {
        scopeApplication: '',
      },
      // 搜索 - 表单 - 骑手薪资
      searchX: {
        scope_application: '',
        status: -1,
      },
    }
  },
  created() {
    // 创建时 - 渲染分发
    this.mx_selectTableData()
  },
  mounted() {
    // 挂载时 - 回到顶部
    this.$toTop()
  },
  computed: {},
  methods: {
    ...mapMutations({
      changeTabName: 'setting/changeTabName',
      changeDataTotal: 'setting/changeDataTotal',
    }),
    // 切换 - pageSize
    handleSizeChange(val) {
      this.changeTabName({ tabName: this.tabName })
      this.pageStatus.pageSize = val
      // 渲染分发
      this.mx_selectTableData()
    },
    // 切换 - currentPage
    handleCurrentChange(val) {
      this.pageStatus.pageNum = val
      console.log(this.pageStatus.pageNum)
      // 渲染分发
      this.mx_selectTableData()
    },
    // 切换tab
    handleClick() {
      // 重置表单
      this.searchP.scopeApplication = ''
      this.searchP.status = -1
      this.searchW.scopeApplication = ''
      this.searchX.scope_application = ''
      this.searchX.status = -1
      // 重置search状态
      this.pageStatus.isSearch = false
      // 渲染分发
      this.mx_selectTableData()
    },
    // 重置
    resetTable(e) {
      // 重置表单
      switch (e.currentTarget.dataset.type) {
        case 'p':
          this.searchP.scopeApplication = ''
          this.searchP.status = -1
          // console.log(this.searchP);
          break
        case 'w':
          this.searchW.scopeApplication = ''
          // console.log(this.searchW);
          break
        case 'x':
          this.searchX.scope_application = ''
          this.searchX.status = -1
          // console.log(this.searchX);
          break
        default:
          break
      }
      if (this.pageStatus.isSearch == true) {
        // 渲染分发
        this.mx_selectTableData()
        // 重置search状态
        this.pageStatus.isSearch = false
      }
    },
    // 跳转 - 添加配送设置
    toAddShipping() {
      this.$router.push('/settings-platform-addShipping')
    },
    // 跳转 - 编辑配送设置
    toChangeShipping(data) {
      this.$router.push({
        path: '/settings-platform-addShipping',
        query: {
          data: JSON.stringify(data),
        },
      })
    },
    // 跳转 - 添加薪资设置
    toAddSalary() {
      this.$router.push('/settings-platform-addSalary')
    },
    // 切换职业类型
    changeJobType(e) {
      let jobType = e.target.dataset.type
      if (this.isTypeSelect == jobType) {
        this.isTypeSelect = 'null'
      } else {
        this.isTypeSelect = jobType
      }
    },
  },
}
</script>
<style scoped>
@import '../../assets/css/settingTable.css';

#index {
  background-color: white;
  padding: 10px;
}
.set-platform-search-input {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  /* align-items: flex-start; */
}
.set-platform-search-button {
  width: 100%;
  height: 60px;
  display: flex;
  border-bottom: 1px solid rgb(220, 220, 220);
}
.set-platform-search-button .el-button {
  width: 70px;
  height: 32px;
  font-size: 12px;
  line-height: 10px;
  color: white;
}
.reset {
  background-color: #ff9900;
}
.search {
  background-color: #3281e0;
}
.set-platform-add-button {
  width: 100%;
  height: 45px;
  padding: 10px 0;
  display: flex;
  align-items: center;
}
.set-platform-table {
  width: 100%;
  height: auto;
}
.operaP:hover {
  color: blue;
}
.opera,
.operaP {
  cursor: pointer;
}
:deep(.el-dialog__title) {
  font-weight: bolder;
}
.add-bWeather-window {
  font-size: 13px;
}
.add-bWeather-window-item {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.add-bWeather-window-item select {
  height: 32px;
  outline: none;
  margin-right: 12px;
}
.set-platform-add-button p {
  color: #cdcdcd;
  padding-right: 20px;
}
.set-platform-select-button-on {
  border: 1px solid blue !important;
  background-color: white !important;
  color: blue;
}
.set-platform-select-button {
  width: 120px;
  height: 30px;
  font-size: 13px;
  outline: none;
  border: none;
  background-color: #ebebeb;
  margin-right: 10px;
  border-radius: 2px;
  cursor: pointer;
}
</style>
