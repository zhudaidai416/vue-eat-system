<template>
    <div class="main">
        <div class="sub">
            <div class="header">
                <div class="header-icon"><img src="../../assets/userMgmt/待审核.png" alt="图片加载失败"></div>

                <div class="header-info">
                    <div>商家姓名:</div>
                    <div>手机号码:</div>
                    <div>邮箱:</div>
                </div>
                <div class="header-info">
                    <div>{{data.id}}</div>
                    <div>{{data.name}}</div>
                    <div>{{data.contact}}</div>
                </div>
                <div class="header-info">
                    <div>商家状态:</div>
                    <div>名下店铺:</div>
                </div>
                <div class="header-info">
                    <div>{{data.email}}</div>
                    <div>{{data.email}}</div>
                </div>
            </div>

            <div class="content">
                <!-- 搜索栏 -->
                <el-form :inline="true" class="demo-form-inline">
                    <div class="searchContainer1">
                        <el-form-item>
                            <el-input placeholder="请输入ID">
                                <template v-slot:prepend>店铺ID</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="请输入手机号码">
                                <template v-slot:prepend>接单手机</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="请输入店铺名称">
                                <template v-slot:prepend>店铺名称</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="最低">
                                <template v-slot:prepend>评分</template>
                            </el-input>
                        </el-form-item>
                    </div>
                    <el-form-item class="btn">
                        <el-button type="warning">重置</el-button>
                        <el-button type="primary">搜索</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <div class="table">
                <!-- 渲染表 -->
                <el-table :data="ownedBusinessTable" style="width: 100%" @sort-change="sort_change">
                    <el-table-column prop="ID" label="ID" width="180">
                        <template slot-scope="scope">
                            <!-- 注意：这个地方要传参数进去才能进行操作  函数名称(scope.row) -->
                            <div>{{ scope.row.ID }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="shopName" label="店铺名称" width="180">
                    </el-table-column>
                    <el-table-column prop="contact" label="接单手机">
                    </el-table-column>
                    <el-table-column prop="mainAndSupBusiness" label="主营/辅营">
                    </el-table-column>
                    <el-table-column prop="shopPlace" label="所在地">
                    </el-table-column>
                    <el-table-column prop="deliveryWay" label="配送方式">
                    </el-table-column>
                    <el-table-column prop="rate" label="评分" sortable="custom">
                    </el-table-column>
                    <el-table-column prop="goods" label="商品" sortable="custom">
                    </el-table-column>
                    <el-table-column prop="openTime" label="开店时间" sortable="custom">
                    </el-table-column>
                    <el-table-column prop="shopState" label="状态">
                    </el-table-column>
                    <el-table-column label="操作">
                        <el-tooltip placement="bottom" effect="light">
                            <div slot="content">
                                <p class="lock" @click="lockVisible = true"><i class="el-icon-remove-outline"
                                        style="color:red"></i>
                                    锁定店铺</p>
                                <br>
                                <p class="unlock" @click="unlockVisible = true"><i class="el-icon-circle-check"
                                        style="color:lightgreen"></i> 解锁店铺</p>
                                <br>
                                <p class="lock" @click="lockAccountVisible = true"><i class="el-icon-lock"
                                        style="color:yellow"></i>
                                    冻结账户</p>
                                <br>
                                <p class="lock" @click="unlockAccountVisible = true"><i class="el-icon-unlock"
                                        style="color:lightblue"></i>
                                    解冻账户</p>
                            </div>
                            <i class="el-icon-more"></i>
                        </el-tooltip>
                    </el-table-column>
                </el-table>
            </div>

            <!-- 锁定模态框 -->
            <el-dialog title="确定锁定该账户？" :visible.sync="lockVisible">
                <div class="modalHint">店铺账户被冻结后将无法提现、充值，请慎重操作！</div>
                <el-form :model="form">
                    <el-form-item label="冻结原因" :label-width="formLabelWidth">
                        <el-select v-model="value" placeholder="请选择原因">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="中文补充说明" :label-width="formLabelWidth">
                        <el-input type="text" placeholder="请输入中文补充说明" v-model="CNtext" maxlength="200" show-word-limit>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="英文补充说明" :label-width="formLabelWidth">
                        <el-input type="text" placeholder="请输入英文补充说明" v-model="ENtext" maxlength="500" show-word-limit>
                        </el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="lockVisible = false">取 消</el-button>
                    <el-button type="primary" @click="lockVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            <!-- 解锁模态框 -->
            <el-dialog title="确定解锁该账户？" :visible.sync="unlockVisible">
                <div class="modalHint">店铺账户被解冻后将恢复提现、充值，请慎重操作！</div>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="unlockVisible = false">取 消</el-button>
                    <el-button type="primary" @click="unlockVisible = false">确 定</el-button>
                </div>
            </el-dialog>

            <!-- 锁定账户模态框 -->
            <el-dialog title="确定锁定该账号？" :visible.sync="lockAccountVisible">
                <div class="modalHint">店铺帐号被锁定后将无法营业接单，请慎重操作！</div>
                <el-form :model="form">
                    <el-form-item label="锁定原因" :label-width="formLabelWidth">
                        <el-select v-model="value" placeholder="请选择原因">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="中文补充说明" :label-width="formLabelWidth">
                        <el-input type="text" placeholder="请输入中文补充说明" v-model="CNtext" maxlength="200" show-word-limit>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="英文补充说明" :label-width="formLabelWidth">
                        <el-input type="text" placeholder="请输入英文补充说明" v-model="ENtext" maxlength="500" show-word-limit>
                        </el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="lockAccountVisible = false">取 消</el-button>
                    <el-button type="primary" @click="lockAccountVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            <!-- 解锁账户模态框 -->
            <el-dialog title="确定解锁该账号？" :visible.sync="unlockAccountVisible">
                <div class="modalHint">店铺帐号被解锁后将恢复可营业接单，请慎重操作！</div>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="unlockAccountVisible = false">取 消</el-button>
                    <el-button type="primary" @click="unlockAccountVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
    name: 'businessDetail',
    data() {
        return {
            activeName: 'first',
            CNtext: '',
            ENtext: '',
            data: {

            },
            options: [
                {
                    value: '选项1',
                    label: "原因一"
                }
            ],
            value: '',
            form: {
            },
            formLabelWidth: '120px',
            ownedBusinessTable: [{}],
            lockVisible: false,
            unlockVisible: false,
            lockAccountVisible: false,
            unlockAccountVisible: false,
        }
    },
    created() {
        // 当前审核会员的流水号 this.$route.params.id
    },
    methods: {
        sort_change(column) {
            this.currentPage = 1;
            this.tableData = this.tableData.sort(this.sortFun(column.prop, column.order === 'ascending'));
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
.main {
    background-color: #f5f5f5;
    height: 100%;
}

.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.return {
    cursor: pointer;
    margin-right: 50px;
    color: #4E73DF;
}

.title {
    height: 60px;
    font-size: 18px;
    line-height: 60px;
    margin-left: 50px;
}

.modalHint {
    margin-bottom: 30px;
}

.sub {
    margin-top: 10px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 5px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
}

.sub2 {
    height: 20%;
    margin-top: 10px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 5px;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
}

.sub2>.sub2-content {
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 95%;
    margin: 10px 30px;
}

.sub2>.sub2-content>div {
    margin: 5px;
}

.header {
    display: flex;
    align-items: center;
    background-color: #eff1fc;
    border-radius: 5px;
}

.header-icon {
    font-size: 16px;
    text-align: center;
}

.header-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.header-info>div {
    margin: 10px 30px;
}

.content>* {
    margin: 20px 0;
}

.content>:first-child {
    font-weight: bold;
}

.el-icon-caret-right {
    color: #4E73DF;
}

.content-info {
    display: flex;
    flex-direction: column;
}

.content-info>div {
    margin: 10px;
}

.sub2-header {
    height: 95%;
    font-size: 20px;
    font-weight: 700;
    width: 50px;
    background-color: #eff1fc;
    padding: 5px 5px;
    border-radius: 5px;
    writing-mode: tb-rl;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>