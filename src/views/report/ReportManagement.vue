<template>
    <div>
        <div class="box">
            <!-- 第一行 -->
            <el-row :gutter="2">
                <el-col :span="4" :push="2">
                    <el-form>
                        <el-select v-model="objValue.reportType" placeholder="全部类型">
                            <div slot="prefix">
                                <div class="select-before">举报类型</div>
                            </div>
                            <el-option label="全部类型" value=""></el-option>
                            <el-option label="资质问题" value="资质问题"></el-option>
                            <el-option label="超范围经营" value="超范围经营"></el-option>
                            <el-option label="违规商品" value="违规商品"></el-option>
                            <el-option label="品牌侵权" value="品牌侵权"></el-option>
                        </el-select>
                    </el-form>
                </el-col>
                <el-col :span="6" :push="2">
                    <el-form>
                        <el-input placeholder="请输入店铺名称" v-model="objValue.relatedStore">
                            <template slot="prepend">相关店铺</template>
                        </el-input>
                    </el-form>
                </el-col>
                <el-col :span="6" :push="2">
                    <el-form>
                        <el-input placeholder="请输入类容关键词" v-model="objValue.reportContent">
                            <template slot="prepend">举报类容</template>
                        </el-input>
                    </el-form>
                </el-col>
                <el-col :span="6" :push="2">
                    <el-form>
                        <el-input placeholder="请输入联系方式" v-model="objValue.telephone">
                            <template slot="prepend">联系方式</template>
                        </el-input>
                    </el-form>
                </el-col>

            </el-row>
            <!-- 第二行 -->
            <el-row :gutter="2">
                <el-col :span="4" :push="2" :gutter="10">
                    <el-form>
                        <el-select v-model="objValue.reportTime" placeholder="全部">
                            <div slot="prefix">
                                <div class="select-before">举报时间</div>
                            </div>
                            <el-option label="全部时间" value=""></el-option>
                            <el-option label="近一个月" value="30"></el-option>
                            <el-option label="近三个月" value="90"></el-option>
                            <el-option label="今年内" value="365"></el-option>
                        </el-select>
                    </el-form>
                </el-col>
                <el-col :span="4" :push="4">
                    <el-form>
                        <el-select v-model="objValue.dealTime" placeholder="全部">
                            <div slot="prefix">
                                <div class="select-before">处理时间</div>
                            </div>
                            <el-option label="全部时间" value=""></el-option>
                            <el-option label="近一个月" value="30"></el-option>
                            <el-option label="近三个月" value="90"></el-option>
                            <el-option label="今年内" value="365"></el-option>
                        </el-select>
                    </el-form>
                </el-col>
                <el-col :span="4" :push="6">
                    <el-form>
                        <el-select v-model="objValue.status" placeholder="全部状态">
                            <div slot="prefix">
                                <div class="select-before">处理状态</div>
                            </div>
                            <el-option label="全部状态" value=""></el-option>
                            <el-option label="待发布" value=1></el-option>
                            <el-option label="已发布" value=0></el-option>
                            <el-option label="已停用" value=2></el-option>
                        </el-select>
                    </el-form>
                </el-col>
                <el-col :span="6" :push="6">
                    <el-form>
                        <el-input placeholder="请输入店铺名称" v-model="objValue.dealPeople">
                            <template slot="prepend">处&nbsp;理&nbsp;人</template>
                        </el-input>
                    </el-form>
                </el-col>
            </el-row>
            <!-- 按钮 -->
            <el-row style="margin-top:20px;">
                <el-col>
                    <el-button type="warning" @click="resetData">重置</el-button>
                    <el-button type="primary" @click="search">搜索</el-button>
                </el-col>
            </el-row>
            <!-- table -->
            <div class="report_table">
                <el-table :data="reportList" style="width: 100% ;font-size: 9px;"
                    :header-cell-style="{background:'#eef1fc',color:'#606266',textAlign:'center' }"
                    :highlight-current-row="true">
                    <el-table-column prop="id" label="流水号" width="130">
                        <template slot-scope="scope">
                            <a class="tableA" @click="detail(scope.row.id)">{{scope.row.id}}</a>
                        </template>
                    </el-table-column>
                    <el-table-column prop="reportType" label="举报类型"></el-table-column>
                    <el-table-column prop="relatedStore" label="相关店铺" width="120"></el-table-column>
                    <el-table-column prop="reportContent" label="举报类容" width="160"></el-table-column>
                    <el-table-column prop="telephone" label="联系方式" width="125"></el-table-column>
                    <el-table-column prop="reportTime" sortable label="举报时间" width="160"></el-table-column>
                    <el-table-column prop="dealTime" sortable label="处理时间" width="160">
                        <template slot-scope="scope">
                            <p>{{scope.row.dealTime}}</p>
                            <p style="text-align:center">
                                <span :class="[scope.row.handling =='无法判定'? 'no_determine': 'be_true']">{{scope.row.handling}}</span>
                            </p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="状态">
                        <template slot-scope="scope">{{scope.row.status | reportStatus}}</template>
                    </el-table-column>
                    <el-table-column prop="operation" label="操作">
                        <template slot-scope="scope" v-if="scope.row.status == 1">
                            <el-popover placement="top" width="100px">
                                <div style="text-align:center">
                                    <p @click="editInform (scope.row.id)" style="cursor: pointer">
                                        <span style="color:blue;" class="el-icon-edit"></span>&emsp;编辑通知
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
            <div style="display: flex;justify-content:center;">
                <el-pagination
                    background
                    @size-change="handleSizeChange" 
                    @current-change="handleCurrentChange"
                    :current-page="nowPage" 
                    :page-sizes="[3, 6, 8]" 
                    :page-size="limit"
                    layout="prev, pager, next, sizes,total" :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'ReportManagement',
    data() {
        return {
            objValue : {
                reportType : '',
                relatedStore : '',
                reportContent : '',
                telephone : '',
                reportTime : '',
                dealTime : '',
                status : '',
                dealPeople : ''
            },
            time : "2022-10-11 08:00:00",
            /* table */
            reportData: [],
            reportList: [],
            nowPage: 1,
            limit: 3,
            total: null,
    }
    },
    filters : {
        reportStatus(value) {
            let text;
            switch (value) {
                case 0:
                    text = "已处理"
                    break;
                case 1:
                    text = "待处理"
                    break;
                default:
                    break;
            }
            return text
        }
    },
    computed : {
        ...mapState({ reportData1 : state => state.PlatformVindicate_Store.reportData })
    },
    mounted() {
        if (!this.reportData1.length) {
            this.getTableData()
        }else {
            this.reportData = this.reportData1
            this.pageList();
            this.total = this.reportData.length
        }
    },
    methods: {
        ...mapActions(
            {   reportDataAction: 'PlatformVindicate_Store/reportDataAction', 
                searchReportAction : 'PlatformVindicate_Store/searchReportAction'
            }),
        /* 得到tableDates数据 */
        async getTableData() {
            await this.reportDataAction()
            this.reportData = this.$store.state.PlatformVindicate_Store.reportData
            this.pageList();
            this.total = this.reportData.length
        },
        /* 一页显示多少条数据 */
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.limit = val;
            this.nowPage = 1;
            this.pageList();
        },
        /* 当前页码变化时 */
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.nowPage = val;
            this.pageList();
        },
        /* 具体分页操作 */
        pageList() {
            this.reportList = this.reportData.filter(
                (item, index) =>
                index < this.nowPage * this.limit &&
                index >= this.limit * (this.nowPage - 1)
            );
            this.total = this.reportData.length;
        },
        /* 搜索条件查询 */
        async search() {
            await this.searchReportAction(this.objValue)
            this.reportData = this.reportData1;
            this.nowPage = 1
            this.pageList();
            this.total = this.reportData.length
        },
        /* 重置 */
        resetData() {
            this.emptyInput()
            this.nowPage = 1
            this.getTableData()
        },
        /* 清空搜索框 */
        emptyInput() {
            this.objValue.reportType = '';
            this.objValue.relatedStore = '';
            this.objValue.reportContent = '';
            this.objValue.telephone=  '';
            this.objValue.reportTime = '';
            this.objValue.dealTime = '';
            this.objValue.status = '';
            this.objValue.dealPeople = '';
        },
        /* 编辑通知跳转 */
        editInform(id) {
            this.$router.push({
                path: '/ReportDetails',
                query: {
                    id
                }
            })
        },
        /* 查看举报详情 */
        detail(id) {
            this.$router.push('/ReportDetailsno?id='+id)
        }

    }

}


</script>


<style scoped>
.box {
    width: 100%;
    margin: 10px auto;
    padding: 10px;
    /* background-color: azure; */
    box-sizing: border-box;
}

.box>div {
    margin-bottom: 10px;
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
.tableA {
    color: blue;
    font-size: 12px;
    cursor: pointer;
}
.tableA:hover {
    text-decoration: underline;
}
/* 无法判定 */
.no_determine {
    background-color: #ffc266;
    color: white;
    text-align: center;
}
.be_true {
    background-color: #ff6666;
    color: white;
    text-align: center;
}
</style>