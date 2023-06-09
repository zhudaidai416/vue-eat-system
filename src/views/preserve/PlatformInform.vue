<template>
    <div>
        <div class="box">
            <!-- 第一行 -->
            <el-row :gutter="10">
                <el-col :span="4" :push="2">
                    <el-form>
                        <el-select v-model="inform" placeholder="全部类型">
                            <div slot="prefix">
                                <div class="select-before">通知类型</div>
                            </div>
                            <el-option label="全部" value=""></el-option>
                            <el-option label="系统通知" value="系统通知"></el-option>
                            <el-option label="活动通知" value="活动通知"></el-option>
                        </el-select>
                    </el-form>
                </el-col>
                <el-col :span="6" :push="2">
                    <el-form>
                        <el-input placeholder="请输入通知标题" v-model="title_input">
                            <template slot="prepend">通知标题</template>
                        </el-input>
                    </el-form>
                </el-col>
                <el-col :span="4" :push="4">
                    <el-form>
                        <el-select v-model="service" placeholder="全部客户">
                            <div slot="prefix">
                                <div class="select-before">客户端</div>
                            </div>
                            <el-option label="全部客服" value=""></el-option>
                            <el-option label="外卖APP" value="外卖APP"></el-option>
                            <el-option label="商家App" value="商家App"></el-option>
                            <el-option label="骑手App" value="骑手App"></el-option>
                            <el-option label="众包APP" value="众包APP"></el-option>
                        </el-select>
                    </el-form>
                </el-col>
                <el-col :span="4" :push="6">
                    <el-form>
                        <el-select v-model="language" placeholder="全部">
                            <div slot="prefix">
                                <div class="select-before">语言类型</div>
                            </div>
                            <el-option label="全部" value=""></el-option>
                            <el-option label="中文" value="中文"></el-option>
                            <el-option label="英文" value="English"></el-option>
                        </el-select>
                    </el-form>
                </el-col>
            </el-row>
            <!-- 第二行 -->
            <el-row :gutter="10">
                <!-- 创建时间 -->
                <el-col :span="4" :offset="2">
                    <el-form>
                        <el-select v-model="create_time" placeholder="全部">
                            <div slot="prefix">
                                <div class="select-before">创建时间</div>
                            </div>
                            <el-option label="全部时间" value=""></el-option>
                            <el-option label="近三个月" value=3></el-option>
                            <el-option label="今年内" value=12></el-option>
                        </el-select>
                    </el-form>
                </el-col>
                <!-- 发布时间 -->
                <el-col :span="4" :offset="2">
                    <el-form>
                        <el-select v-model="issue_time" placeholder="全部">
                            <div slot="prefix">
                                <div class="select-before">发布时间</div>
                            </div>
                            <el-option label="全部时间" value=""></el-option>
                            <el-option label="近三个月" value=3></el-option>
                            <el-option label="今年内" value=12></el-option>
                        </el-select>
                    </el-form>
                </el-col>
                <el-col :span="4" :offset="2">
                    <el-form>
                        <el-select v-model="status" placeholder="全部状态">
                            <div slot="prefix">
                                <div class="select-before">状态</div>
                            </div>
                            <el-option label="全部状态" value=""></el-option>
                            <el-option label="待发布" value=1></el-option>
                            <el-option label="已发布" value="0"></el-option>
                            <el-option label="已停用" value=2></el-option>
                        </el-select>
                    </el-form>
                </el-col>
            </el-row>
            <!-- 按钮 -->
            <el-row style="margin-top:20px;">
                <el-col>
                    <el-button type="warning" @click="resetData">重置</el-button>
                    <el-button type="primary" @click="searchData">搜索</el-button>
                </el-col>
            </el-row>
            <!-- 发布通知 -->
            <el-row type="flex" justify="space-between">
                <el-col class="issue-notices">
                    <el-button round plain type="primary" icon="el-icon-plus" @click="issue_notice">发布通知</el-button>
                </el-col>
            </el-row>
            <!-- 表格 -->
            <div style="padding:10px">
                <el-table :data="tableList" style="width: 100%"
                    :header-cell-style="{background:'#eef1fc',color:'#606266'}">
                    <el-table-column prop="id" label="老师ID" width="100">
                        <template slot-scope="scope">
                            <a class="table-a" @click="detail(scope.row.id)">{{scope.row.id}}</a>
                        </template>
                    </el-table-column>
                    <el-table-column prop="noticeType" label="通知类型" width="100"></el-table-column>
                    <el-table-column prop="noticeTitle" label="通知标题" width="200"></el-table-column>
                    <el-table-column prop="clientSide" label="客户端"></el-table-column>
                    <el-table-column prop="language" label="语言"></el-table-column>
                    <el-table-column prop="releaseTime" sortable label="发布时间"></el-table-column>
                    <el-table-column prop="creationTime" sortable label="创建时间"></el-table-column>
                    <el-table-column prop="status" label="状态">
                        <template slot-scope="scope">{{scope.row.status | issueStatus}}</template>
                    </el-table-column>
                    <el-table-column prop="operation" label="操作">
                        <template slot-scope="scope">
                            <el-popover placement="top" width="100px">
                                <div v-if="scope.row.status ==1" class="popover-div1">
                                    <p @click="editInform (scope.row.id)">
                                        <span style="color : blue" class="el-icon-edit"></span>&emsp;编辑通知
                                    </p>
                                    <p @click="pushInform (scope.row.id)">
                                        <span style="color : blue" class="el-icon-s-promotion"></span>&emsp;立即推送
                                    </p>
                                    <p @click="stopInform (scope.row.id)">
                                        <span style="color : red" class="el-icon-remove"></span>&emsp;停用通知
                                    </p>
                                </div>
                                <!-- 重新发布 -->
                                <div v-else-if="scope.row.status==0" class="popover-div2">
                                    <p @click="republish (scope.row.id)">
                                        <span style="color : blue" class="el-icon-refresh-left"></span>&emsp;重新发布
                                    </p>
                                </div>
                                <!-- 停用通知 -->
                                <div v-else-if="scope.row.status==2" class="popover-div2">
                                    <p @click="stopInform (scope.row.id)">
                                        <span style="color : red" class="el-icon-remove"></span>&emsp;停用通知
                                    </p>
                                </div>
                                <el-button slot="reference" type="text">
                                    <span class="el-icon-more" style="font-size:25px;color:black"></span>
                                </el-button>
                            </el-popover>
                        </template>



                    </el-table-column>
                </el-table>

            </div>
            <!-- 页码 -->
            <div class="show_page">
                <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage1" :page-size="limit" :page-sizes="[3, 6, 8]"
                    layout="prev, pager, next, sizes,total" :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'PlatformInform',
    data() {
        return {
            inform: '',
            title_input: '',
            service: '',
            language: '',
            create_time: '',
            issue_time: '',
            status: '',

            /* table数据 */
            tableData: [],
            tableList: [],
            visible: false,
            visible1: false,
            /* 页码 */
            currentPage1: 1,
            limit: 3,
            total: 0,
            page: 1,
            pageNum: 1
        }
    },
    /* 过滤器 */
    filters : {
        issueStatus(value) {
            let text;
            switch (value) {
                case 0:
                    text = "已发布"
                    break;
                case 1:
                    text = "待发布"
                    break;
                case 2:
                    text = "已停用"
                    break;
                default:
                    break;
            }
            return text
        }
    },
    mounted() {
        /* 请求首页数据 */
        /* this.getInformData() */
        this.getTableData()
    },
    methods: {
        ...mapActions({ getTableAction: 'PlatformVindicate_Store/getTableAction' }),
        ...mapActions({searchTableAction: 'PlatformVindicate_Store/searchTableAction'}),
        /* 设置本地tableDates数据 */
        async getTableData() {
            await this.getTableAction()
            this.tableData = this.$store.state.PlatformVindicate_Store.tableData
            this.pageList();
            this.total = this.tableData.length
        },
        /* 搜索数据 */
        async searchData() {
            let obj = {};
            obj.noticeType = this.inform;
            obj.noticeTitle = this.title_input;
            obj.clientSide = this.service;
            obj.language = this.language;
            obj.startTimeFlag = this.create_time;
            obj.endTimeFlag = this.issue_time;
            obj.status = this.status;
            console.log(obj);
            /* this.emptyInput() */
            //调用actions里面的方法发起请求
            await this.searchTableAction(obj)
            this.tableData = this.$store.state.PlatformVindicate_Store.tableData
            this.pageList();
            this.total = this.tableData.length
        },
        /* 重置按钮操作 */
        resetData() {
            this.emptyInput()
            this.getTableData()
        },
        /* 清空表单 */
        emptyInput() {
            this.inform = '';
            this.title_input = '';
            this.service = '';
            this.language = '';
            this.create_time = '';
            this.issue_time = '';
            this.status = '';
        },
        /* 发布通知 */
        issue_notice() {
            this.$router.push('/IssueNotice')
        },
        /* 通知详情 */
        detail(id) {
            console.log(id);
            // 通过路由传参 显示详情页面
            this.$router.push({
                path: '/InformDetails',
                query: {
                    id: id,
                }
            })
        },
        /* 编辑通知 */
        editInform(id) {
            document.body.click()
            this.$message(id + '点击了编辑通知');
            console.log(id);
            this.$router.push({
                path: '/EditNotice',
                query: {
                    id: id,
                }
            })
        },
        /* 立即推送 */
        pushInform(id) {
            console.log(id);
            document.body.click()
            this.$confirm('确定要立即推送该通知吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'success'
            })
                .then(() => {
                    this.$message({
                        type: 'success',
                        message: '推送成功!'
                        // 将数据写入数据库
                    });
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消推送'
                    });
                });
        },
        /* 停用通知 */
        stopInform(id) {
            document.body.click()
            console.log(id);
            document.body.click()
            this.$confirm('确定要立即停用该通知吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(() => {
                this.$axios.get('/platformNotice/stopPlatFormById?id='+ id)
                .then(res => {
                    console.log(res,'hjdgfshjghsj');
                    this.getTableData()
                     this.$message({
                        type: 'success',
                        message: '停用成功!'
                        // 将数据写入数据库
                    });
                })
                .catch(err => {
                    console.log(err);
                })
               
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消停用'
                });
            });
        },
        /* 重新发布 */
        republish(id) {
            this.$router.push({
                path: '/IssueNotice',
                query: {
                    id: id
                }
            })
        },
        /* 请求对应页码数据 */
        getInformData() {
            //发起请求
            this.$axios({
                method: 'get',
                url: '/platformNotice/selectPlatFormNoticeByPage',
                params: {
                    currentPage: this.currentPage1,
                    pageSize: this.limit
                }
            })
                .then(res => {
                    this.tableData = res
                })
                .catch(err => {
                    console.log(err);
                })

        },
        //当前页改变时
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage1 = val;
            this.pageList();
        },
        /* 一页多少条数据改变时 */
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.limit = val;
            this.currentPage1 = 1;
            this.pageList();
        },
        // 具体分页操作
        pageList() {
            this.tableList = this.tableData.filter(
                (item, index) =>
                    index < this.currentPage1 * this.limit &&
                    index >= this.limit * (this.currentPage1 - 1)
            );
            this.total = this.tableData.length;
        },
    }
}

</script>

<style scoped>
.box {
    width: 100%;
    height: 700px;
    margin: 10px auto;
    padding: 10px;
    box-sizing: border-box;
}

.box>div {
    margin-bottom: 10px;
}

.issue-notices {
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-top: 1px solid gray;
    margin-top: 10px;
}

.show_page {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 10px;
    padding-right: 20px;
}

.table-a {
    color: blue;
    font-size: 12px;
    cursor: pointer;
}

.table-a:hover {
    text-decoration: underline;
}

.popover-div1 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    height: 50px;
}

.popover-div2 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    height: 30px;
}

.popover-div1>p {
    margin-top: 5px;
    font-size: 12px;
}

.select-before {
    width: 92px;
    height: 38px;
    border: 1px solid #DCDFE6;
    border-right: none;
    background-color: #f5f7fa;
    border-radius: 5px 0 0 5px;
    color: gray;
    text-align: center;
    line-height: 40px;
    position: absolute;
    left: -98px;

}
</style>