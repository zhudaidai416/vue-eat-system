<template>
  <div class="home">
    <div class="container">
      <div class="sub_container">
        <el-tabs v-model="activeName" @tab-click="handleTabsClick">
          <el-tab-pane label="会员信息审核" name="first">
            <el-form :inline="true" class="demo-form-inline">
              <!-- 搜索栏1 -->
              <div class="searchContainer1">
                <el-form-item>
                  <el-input placeholder="请输入流水号">
                    <template v-slot:prepend>流水号</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入ID">
                    <template v-slot:prepend>会员ID</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入昵称">
                    <template v-slot:prepend>会员昵称</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入手机号">
                    <template v-slot:prepend>手机号码</template>
                  </el-input>
                </el-form-item>
              </div>
              <!-- 搜索栏2 -->
              <div class="searchContainer2">
                <el-form-item label="审核类型">
                  <el-select v-model="tableData.type">
                    <el-option value="type_all">全部类型</el-option>
                    <el-option value="type_icon">用户头像</el-option>
                    <el-option value="type_nickName">用户昵称</el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="提交时间">
                  <el-select v-model="tableData.submitTime">
                    <el-option value="time_all">全部时间</el-option>
                    <el-option value="time_threeMonth">近三个月</el-option>
                    <el-option value="type_thisYear">今年年内</el-option>
                    <el-option value="type_year2021">2021年</el-option>
                    <el-option value="type_year2020">2020年</el-option>
                    <el-option value="type_before2020">2020年以前</el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="审核状态">
                  <el-select v-model="tableData.state">
                    <el-option value="state_all">全部状态</el-option>
                    <el-option value="state_wait">待审核</el-option>
                    <el-option value="state_on">审核中</el-option>
                    <el-option value="state_pass">审核通过</el-option>
                    <el-option value="state_fail">审核失败</el-option>
                  </el-select>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入审核人">
                    <template v-slot:prepend>审核人</template>
                  </el-input>
                </el-form-item>
              </div>

              <!-- 按键 -->
              <el-form-item class="btn">
                <el-button type="warning">重置</el-button>
                <el-button type="primary">搜索</el-button>
              </el-form-item>
            </el-form>
            <!-- 渲染表 -->
            <el-table :data="verifyMemberTable" style="width: 100%" :header-cell-style="{'text-align':'center'}"
              :cell-style="{'text-align':'center'}" @sort-change="sort_change">
              <el-table-column prop="serialNum" label="流水号" width="180">
                <template slot-scope="scope">
                  <!-- 注意：这个地方要传参数进去才能进行操作  函数名称(scope.row) -->
                  <div @click="goVerifyMemberDetail(scope.row.serialNum)" style="color:#4E73DF;cursor: pointer;">{{
                  scope.row.serialNum }}</div>
                </template>
              </el-table-column>

              <el-table-column prop="verifyMemberId" label="会员ID" width="180" sortable="custom">
              </el-table-column>
              <el-table-column prop="verifyMemberName" label="会员姓名">
              </el-table-column>
              <el-table-column prop="verifyMemberPhone" label="手机号码">
              </el-table-column>
              <el-table-column prop="verifyType" label="审核类型">
              </el-table-column>
              <el-table-column prop="verifyNewInfo" label="新信息"  width="180">
                <template slot-scope="scope">
                  <img :src="scope.row.verifyNewInfo" alt="图片加载错误">
                </template>
              </el-table-column>
              <el-table-column prop="verifyOldInfo" label="旧信息"  width="180">
                <template slot-scope="scope">
                  <img :src="scope.row.verifyOldInfo" alt="图片加载错误">
                </template>
              </el-table-column>
              <el-table-column prop="verifySubmitTime" label="提交时间" sortable="custom">
              </el-table-column>
              <el-table-column prop="state" label="状态">
              </el-table-column>
              <el-table-column prop="serialNum" label="操作">
                <template slot-scope="scope">
                  <el-tooltip placement="bottom" effect="light">
                    <div slot="content" class="hoverBlue">
                      <p v-on:click="goVerifyMemberDetail(scope.row.serialNum)"><i class="el-icon-edit-outline"
                          style="color:blue"></i> 查看并处理</p>
                    </div>
                    <i class="el-icon-more"></i>
                  </el-tooltip>
                </template>
              </el-table-column>
            </el-table>
            <!-- 页码 -->
            <div class="block">
              <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20]" :page-size="10"
                layout="prev, pager, next, sizes, total" :total="verifyMemberTable.length" :pagerCount="11" prev-text="上一页"
                next-text="下一页">
              </el-pagination>
            </div>
          </el-tab-pane>
          <!-- 选项卡2 -->
          <el-tab-pane label="所有的会员" name="second">
            <el-form :inline="true" class="demo-form-inline" :model="memberform">
              <!-- 搜索栏1 -->
              <div class="searchContainer1">
                <el-form-item>
                  <el-input placeholder="请输入ID" v-model="memberform.id">
                    <template v-slot:prepend>会员ID</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入昵称" v-model="memberform.vipuserName">
                    <template v-slot:prepend>会员昵称</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入姓名" v-model="memberform.vipuserRealName">
                    <template v-slot:prepend>真实姓名</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input placeholder="请输入手机号" v-model="memberform.vipuserPhone">
                    <template v-slot:prepend>手机号码</template>
                  </el-input>
                </el-form-item>
              </div>
              <!-- 搜索栏2 -->
              <div class="searchContainer2">
                <el-form-item>
                  <el-input placeholder="请输入邮箱" v-model="memberform.vipuserEmile">
                    <template v-slot:prepend>电子邮箱</template>
                  </el-input>
                </el-form-item>

                <el-form-item label="会员身份">
                  <el-select v-model="memberform.memberType">
                    <el-option v-for="item in memberTypeOptions" :key="item.value" :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="注册时间">
                  <el-select v-model="memberform.registTime">
                    <el-option v-for="item in memberRegistTimeOptions" :key="item.value" :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="会员状态">
                  <el-select v-model="memberform.state">
                    <el-option v-for="item in memberOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>

              <!-- 按键 -->
              <el-form-item class="btn">
                <el-button type="warning" @click="memberReset">重置</el-button>
                <el-button type="primary" @click="memberSearch">搜索</el-button>
              </el-form-item>
            </el-form>
            <!-- 渲染表 -->
            <el-table :data="allMemberTable" style="width: 100%;" :header-cell-style="{'text-align':'center'}"
              :cell-style="{'text-align':'center'}" @sort-change="sort_change">
              <el-table-column prop="id" label="会员ID" width="180">
                <template slot-scope="scope">
                  <!-- 注意：这个地方要传参数进去才能进行操作  函数名称(scope.row) -->
                  <div @click="goMemberDetail(scope.row.id)" style="color:#4E73DF;cursor: pointer;">{{ scope.row.id }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="vipuserName" label="昵称" width="180">
              </el-table-column>
              <el-table-column prop="vipuserPhone" label="手机号码">
              </el-table-column>
              <el-table-column prop="vipuserEmile" label="邮箱">
              </el-table-column>
              <el-table-column prop="vipuserOrder" label="近90日下单" sortable="custom">
                <template slot-scope="scope">
                  <div style="color:#4E73DF;cursor: pointer;" @click="goOtherLink('/orderManagement')">{{ scope.row.vipuserOrder }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="loginTime" label="最近访问时间">
              </el-table-column>
              <el-table-column prop="registerTime" label="注册时间" sortable="custom">
              </el-table-column>
              <el-table-column prop="state" label="状态">
                <template slot-scope="scope">
                  <div>{{ scope.row.state | memberState }}</div>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-tooltip placement="bottom" effect="light">
                    <div slot="content">
                      <p class="lock hoverBlue" @click="lockVisible = true;setSelectMember(scope.row.id)"><i
                          class="el-icon-remove-outline" style="color:red"></i>
                        锁定会员</p>
                      <br>
                      <p class="unlock hoverBlue" @click="unlockVisible = true;setSelectMember(scope.row.id)"><i
                          class="el-icon-circle-check" style="color:lightgreen"></i> 解锁会员</p>
                    </div>
                    <i class="el-icon-more"></i>
                  </el-tooltip>
                </template>
              </el-table-column>
            </el-table>
            <!-- 锁定模态框 -->
            <el-dialog title="确定锁定该会员？" :visible.sync="lockVisible">
              <div class="modalHint">会员帐号被锁定后将无法下单、评价，请慎重操作！</div>
              <el-form :model="form">
                <el-form-item label="锁定原因" :label-width="formLabelWidth">
                  <el-select v-model="lockReason" placeholder="请选择原因">
                    <el-option v-for="item in lockReasons" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="中文补充说明" :label-width="formLabelWidth">
                  <el-input type="text" placeholder="请输入中文补充说明" v-model="CNExplain" maxlength="200" show-word-limit>
                  </el-input>
                </el-form-item>
                <el-form-item label="英文补充说明" :label-width="formLabelWidth">
                  <el-input type="text" placeholder="请输入英文补充说明" v-model="ENExplain" maxlength="500" show-word-limit>
                  </el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="lockVisible = false">取 消</el-button>
                <el-button type="primary" @click="lockVisible = false;lockMember()">确 定</el-button>
              </div>
            </el-dialog>
            <!-- 解锁模态框 -->
            <el-dialog title="确定解锁该会员？" :visible.sync="unlockVisible">
              <div class="modalHint">会员帐号被解锁后将恢复下单、评价，请慎重操作!</div>
              <div slot="footer" class="dialog-footer">
                <el-button @click="unlockVisible = false">取 消</el-button>
                <el-button type="primary" @click="unlockVisible = false;unlockMember()">确 定</el-button>
              </div>
            </el-dialog>
            <!-- 页码 -->
            <div class="block">
              <el-pagination @size-change="handleMemberTableSizeChange" @current-change="handleMemberTableCurrentChange"
                :current-page="this.currentPage" :page-sizes="[5, 10, 20]" :page-size="this.currentTableSize"
                layout="prev, pager, next, sizes, total" :total="this.allMemberTableCount" :pagerCount="5"
                prev-text="上一页" next-text="下一页">
              </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'memberMgmt',
  data() {
    return {
      activeName: "first",
      tableData: [],
      verifyMemberTable: [],
      allMemberTable: [],
      allMemberTableCount: 0,
      // 搜索框数据
      memberform: {
        id: '',
        vipuserName: '',
        vipuserRealName: '',
        memberType: '',
        registTime: '',
        vipuserPhone: '',
        vipuserEmile: '',
        state: '',
      },
      // 搜索框备份-搜索时使用
      searchFunctionMemberForm: {},

      // 所有会员状态选择器
      memberOptions: [
        {
          value: '',
          label: "全部状态 "
        },
        {
          value: 1,
          label: "正常"
        },
        {
          value: 2,
          label: "已锁定"
        },
        {
          value: 3,
          label: "已注销"
        },
      ],
      memberTypeOptions: [
        {
          value: '',
          label: "全部身份"
        },
        {
          value: 1,
          label: "普通用户"
        },
        {
          value: 2,
          label: "VIP用户"
        }
      ],
      memberRegistTimeOptions: [
        {
          value: '',
          label: "全部"
        },
        {
          value: 1,
          label: "近三个月"
        },
        {
          value: 2,
          label: "今年内"
        },
        {
          value: 3,
          label: "2021年"
        },
        {
          value: 4,
          label: "2020年"
        },
        {
          value: 5,
          label: "2020年以前"
        }
      ],
      currentPage: 1,
      currentTableSize: 5,
      selectMemberId: '',
      lockVisible: false,
      unlockVisible: false,
      form: {},
      formLabelWidth: '120px',
      CNExplain: '',
      ENExplain: '',
      lockReasons: [
        {
          value: 1,
          label: "原因一"
        },
        {
          value: 2,
          label: "原因二"
        },
        {
          value: 3,
          label: "原因三"
        },
      ],
      lockReason: '',
    };
  },
  created() {
    // 会员信息审核 表格初始化请求
    this.$axios({
      method: 'GET',
      url: 'http://127.0.0.1:4523/m1/1680117-0-default/allVerifyMemberData',
      params: {
        currentPage: 1,
        pageSize: 5,
      }
    })
      .then(res => {
        console.log(res)
        this.verifyMemberTable = res.data
      })
      .catch(err => {
        console.log("请求失败", err)
      });
  },
  filters: {
    memberState(value) {
      if (value == 1) {
        return '正常'
      }
      else if (value == 2) {
        return '已锁定'
      }
      else if (value == 3) {
        return '已注销'
      }
    }
  },
  methods: {
    handleTabsClick(tab) {
      if (tab.name == "first") {
        // 等接口
      }
      // 初始化
      else if (tab.name == "second") {
        this.$axios({
          method: 'GET',
          url: 'http://1.14.106.61:7101/findVipUserAll',
          params: {
            currentPage: 1,
            pageSize: 5
          }
        })
          .then(res => {
            this.allMemberTable = res.data.vipuser
            this.allMemberTableCount = res.data.count
          })
          .catch(err => {
            console.log("请求失败", err)
          });
      }
    },
    // 审核会员搜索

    // 所有会员搜索
    memberSearch() {
      // 备份搜索栏数据
      this.searchFunctionMemberForm = { ...this.memberform }
      this.memberSearchRequest(this.searchFunctionMemberForm)
    },

    // 所有会员显示/搜索请求
    memberSearchRequest(list) {
      this.$axios({
        method: 'GET',
        url: 'http://1.14.106.61:7101/findVipUserBy',
        params: {
          currentPage: this.currentPage,
          pageSize: this.currentTableSize,
          ...list,
        }
      })
        .then(res => {
          console.log(res)
          this.allMemberTable = res.data
          // 这儿
          this.allMemberTableCount = res.data.length
        })
        .catch(err => {
          console.log("请求失败", err)
        });
    },

    // 重置
    memberReset() {
      this.memberform.id = ''
      this.memberform.name = ''
      this.memberform.realName = ''
      this.memberform.memberType = ''
      this.memberform.registType = ''
      this.memberform.phoneNum = ''
      this.memberform.email = ''
      this.memberform.state = ''

      // 重新发起请求刷新表格
      this.$axios({
        method: 'GET',
        url: 'http://1.14.106.61:7101/findVipUserAll',
        params: {
          currentPage: 1,
          pageSize: 5,
        }
      })
        .then(res => {
          this.allMemberTable = res.data.vipuser
          this.allMemberTableCount = res.data.count
        })
        .catch(err => {
          console.log("请求失败", err)
        });
    },
    // 设定会员
    setSelectMember(param) {
      this.selectMemberId = param
    },

    // 锁定会员
    lockMember() {
      // console.log(this.selectMemberId)
      this.$axios({
        method: 'GET',
        url: 'http://1.14.104.61:7101/updateVipUser',
        params: {
          id: this.selectMemberId,
          state: 2,
          reason: this.lockReason,
          explain: this.CNExplain,
          englishExplain: this.ENExplain,
        }
      })
        .then(res => {
          this.allMemberTable = res.data.vipuser
        })
        .catch(err => {
          console.log("请求失败", err)
        });
    },

    // 解锁会员
    unlockMember() {
      // console.log(this.selectMemberId)
      this.$axios({
        method: 'GET',
        url: 'http://1.14.104.61:7101/updateVipUser',
        params: {
          id: this.selectMemberId,
          state: 1,
        }
      })
        .then(res => {
          this.allMemberTable = res.data.vipuser
        })
        .catch(err => {
          console.log("请求失败", err)
        });
    },
    // 查看审核详情
    goVerifyMemberDetail(param) {
      console.log(param)
      this.$router.push({ path: 'user/verifyDetails/' + param })
    },
    // 查看会员详情
    goMemberDetail(param) {
      console.log(param)
      this.$router.push({ path: 'user/memberDetails/' + param })
    },
    // 升降序排列
    sort_change(column) {
      this.currentPage = 1;
      this.verifyMemberTable = this.verifyMemberTable.sort(this.sortFun(column.prop, column.order === 'ascending'));
      this.allMemberTable = this.allMemberTable.sort(this.sortFun(column.prop, column.order === 'ascending'));
    },
    sortFun(attr, rev) {
      //第一个参数传入info里的prop表示排的是哪一列，第二个参数是升还是降排序
      if (rev == undefined) {
        rev = 1;
      } else {
        rev = (rev) ? 1 : -1;
      }
      return function (a, b) {
        a = a[attr];
        b = b[attr];
        if (a < b) {
          return rev * -1;
        }
        if (a > b) {
          return rev * 1;
        }
        return 0;
      }
    },
    // 会员页面条数改变
    handleMemberTableSizeChange(val) {
      this.currentTableSize = val;
      this.$axios({
        method: 'GET',
        url: 'http://1.14.106.61:7101/findVipUserAll',
        params: {
          currentPage: 1,
          pageSize: val
        }
      })
        .then(res => {
          console.log(res)
          this.allMemberTable = res.data.vipuser
          this.allMemberTableCount = res.data.count
        })
        .catch(err => {
          console.log("请求失败", err)
        });
    },

    // 会员页面当前页改变
    handleMemberTableCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
      // 发起请求
      this.memberSearchRequest(this.searchFunctionMemberForm)
    },

    // 查看近90日订单管理
    goOtherLink(url){
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.home {
  background-color: #f5f5f5;
}

.pageName {
  height: 60px;
  font-size: 18px;
  line-height: 60px;
  margin-left: 50px;
}

.sub_container {
  margin-left: 50px;
  margin-right: 50px;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}

.searchContainer1 {
  display: flex;
  align-items: flex-end;
}

.searchContainer1>* {
  width: 24%;
}

.searchContainer2 {
  display: flex;
  align-items: flex-end;
}

.searchContainer2>* {
  width: 24%;
}

.el-icon-more:hover {
  cursor: pointer;
}

.btn {
  margin: 10px 10px;
}

.block {
  margin-top: 10px;
  text-align: center;
}

.hoverBlue:hover {
  cursor: pointer;
  color: #4E73DF
}
</style>
