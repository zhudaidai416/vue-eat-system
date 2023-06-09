<template>
    <div class="home">
        <div class="container">
            <div class="sub_container">
                <el-form :inline="true" class="demo-form-inline">
                    <!-- 搜索栏1 -->
                    <div class="searchContainer1">
                        <el-form-item>
                            <el-input placeholder="请输入ID">
                                <template v-slot:prepend>商家ID</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="请输入姓名">
                                <template v-slot:prepend>真实姓名</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="请输入手机号">
                                <template v-slot:prepend>手机号码</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="请输入邮箱">
                                <template v-slot:prepend>电子邮箱</template>
                            </el-input>
                        </el-form-item>
                    </div>
                    <!-- 搜索栏2 -->
                    <div class="searchContainer2">
                        <el-form-item label="注册时间">
                            <el-select v-model="searchForm.submitTime">
                                <el-option value="time_all">全部时间</el-option>
                                <el-option value="time_threeMonth">近三个月</el-option>
                                <el-option value="type_thisYear">今年年内</el-option>
                                <el-option value="type_year2021">2021年</el-option>
                                <el-option value="type_year2020">2020年</el-option>
                                <el-option value="type_before2020">2020年以前</el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="商家状态">
                            <el-select v-model="searchForm.state">
                                <el-option value="state_all">全部状态</el-option>
                                <el-option value="state_wait">待审核</el-option>
                                <el-option value="state_on">审核中</el-option>
                                <el-option value="state_pass">审核通过</el-option>
                                <el-option value="state_fail">审核失败</el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <!-- 按键 -->
                    <el-form-item class="btn">
                        <el-button type="warning">重置</el-button>
                        <el-button type="primary">搜索</el-button>
                    </el-form-item>
                </el-form>
                <!-- 渲染表 -->
                <el-table :data="enterpriseTable" style="width: 100%" :header-cell-style="{'text-align':'center'}"
                    :cell-style="{'text-align':'center'}" @sort-change="sort_change">
                    <el-table-column prop="ID" label="ID" width="180">
                        <template slot-scope="scope">
                            <!-- 注意：这个地方要传参数进去才能进行操作  函数名称(scope.row) -->
                            <div @click="goBussinessDetail(scope.row.ID)" style="color:#4E73DF;cursor: pointer;">{{
                            scope.row.ID }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="enterpriseRealName" label="真实姓名" width="180">
                        <template slot-scope="scope">
                            <!-- 注意：这个地方要传参数进去才能进行操作  函数名称(scope.row) -->
                            <div>{{ scope.row.enterpriseRealName + '商家' }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="enterpriseContact" label="手机号码">
                    </el-table-column>
                    <el-table-column prop="enterpriseEmail" label="邮箱">
                    </el-table-column>
                    <el-table-column prop="ID" label="名下店铺" sortable="custom">
                        <template slot-scope="scope">
                            <!-- 注意：这个地方要传参数进去才能进行操作  函数名称(scope.row) -->
                            <div @click="goOwnedBussinessDetail(scope.row.ID)" style="color:#4E73DF;cursor: pointer;">{{
                            scope.row.enterpriseNum }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="identifyState" label="实名认证">
                    </el-table-column>
                    <el-table-column prop="registTime" label="注册时间" sortable="custom">
                    </el-table-column>
                    <el-table-column prop="enterpriseState" label="状态">
                    </el-table-column>
                    <el-table-column label="操作">
                        <el-tooltip placement="bottom" effect="light">
                            <i class="el-icon-more"></i>
                            <div slot="content">
                                <p class="lock hoverBlue" @click="lockVisible = true"><i class="el-icon-remove-outline"
                                        style="color:red"></i> 锁定商家</p>
                                <br>
                                <p class="unlock hoverBlue" @click="unlockVisible = true"><i
                                        class="el-icon-circle-check" style="color:lightgreen"></i> 解锁商家</p>
                            </div>
                        </el-tooltip>
                    </el-table-column>
                </el-table>
                <!-- 锁定模态框 -->
                <el-dialog title="确定锁定该账号？" :visible.sync="lockVisible">
                    <div class="modalHint">商家帐号被锁定后将无法新建店铺，请慎重操作！</div>
                    <el-form :model="form">
                        <el-form-item label="锁定原因" :label-width="formLabelWidth">
                            <el-select v-model="value" placeholder="请选择原因">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="中文补充说明" :label-width="formLabelWidth">
                            <el-input type="text" placeholder="请输入中文补充说明" v-model="CNtext" maxlength="200"
                                show-word-limit>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="英文补充说明" :label-width="formLabelWidth">
                            <el-input type="text" placeholder="请输入英文补充说明" v-model="ENtext" maxlength="500"
                                show-word-limit>
                            </el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="lockVisible = false">取 消</el-button>
                        <el-button type="primary" @click="lockVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
                <!-- 解锁模态框 -->
                <el-dialog title="确定解锁该账号？" :visible.sync="unlockVisible">
                    <div class="modalHint">店铺帐号被解锁后将恢复可新建店铺，请慎重操作！</div>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="unlockVisible = false">取 消</el-button>
                        <el-button type="primary" @click="unlockVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
                <!-- 页码 -->
                <div class="block">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[10, 15, 20]" :page-size="enterpriseTable.length"
                        layout="prev, pager, next, sizes, total" :total="enterpriseTable.length" :pagerCount="11"
                        prev-text="上一页" next-text="下一页">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'enterpriseMgmt',
    data() {
        return {
            activeName: "first",
            // 搜索框数据
            searchForm: {
                submitTime: '',
                state: '',
            },
            enterpriseTable: [],
            currentPage: 1,
            lockVisible: false,
            unlockVisible: false,
            form: {
            },
            formLabelWidth: '120px',
            CNtext: '',
            ENtext: '',
            options: [
                {
                    value: '选项1',
                    label: "原因一"
                }
            ],
            value: '',
        };
    },
    created() {
        this.$axios({
            method: 'GET',
            url: 'http://127.0.0.1:4523/m1/1680117-0-default/enterpriseMgmt/allEnterprise',
            params: {
                currentPage: 1,
                pageSize: 5,
            }
        })
            .then(res => {
                console.log(res)
                this.enterpriseTable = res.data
            })
            .catch(err => {
                console.log("请求失败", err)
            });
    },
    methods: {
        // 点击数据操作跳转审核详情
        goOwnedBussinessDetail(param) {
            console.log(param)
            this.$router.push({ path: 'businessManagement/ownedBusinessDetails/' + param });
        },
        // 查看商家详情页
        goBussinessDetail(param) {
            console.log(param);
            this.$router.push({ path: 'businessManagement/businessDetails/' + param });
        },
        // 页面条数改变
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },

        // 当前页面改变
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },

        // 表格数据升降序排列
        sort_change(column) {
            this.currentPage = 1;
            this.enterpriseTable = this.enterpriseTable.sort(this.sortFun(column.prop, column.order === 'ascending'));
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