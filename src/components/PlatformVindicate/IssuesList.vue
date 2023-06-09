<template>
    <div>
        <!-- 第一行 -->
        <el-row :gutter="10">
            <!-- 问题标题 -->
            <el-col :span="6">
                <div>
                    <el-input placeholder="请输入问题标题" v-model="objValue.problem_title">
                        <template slot="prepend">问题标题</template>
                    </el-input>
                </div>
            </el-col>
            <!-- 问题分类 -->
            <el-col :span="6">
                <div>
                    <el-input placeholder="请输入问题分类" v-model="objValue.problem_classify">
                        <template slot="prepend">问题分类</template>
                    </el-input>
                </div>
            </el-col>
            <!-- 客户端 -->
            <el-col :span="4" :push="2">
                <template>
                    <el-select v-model="objValue.client" placeholder="全部客户端">
                        <div slot="prefix"><div class="select-before">客户端</div></div>
                        <el-option v-for="item in client_options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-col>
            <!-- 语言类型 -->
            <el-col :span="4" :push="4">
                <template>
                    <el-select v-model="objValue.language" placeholder="全部">
                        <div slot="prefix"><div class="select-before">语言类型</div></div>
                        <el-option v-for="item in language_options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="10">
            <!-- 创建时间 -->
            <el-col :span="4" :push="2">
                <template>
                    <el-select v-model="objValue.create_time" placeholder="创建时间">
                        <div slot="prefix"><div class="select-before">创建时间</div></div>
                        <el-option v-for="item in create_time_options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-col>
            <!-- 状态 -->
            <el-col :span="4" :push="4">
                <template>
                    <el-select v-model="objValue.status" placeholder="全部状态">
                        <div slot="prefix"><div class="select-before">状态</div></div>
                        <el-option v-for="item in status_options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-col>
        </el-row>
        <!-- 按钮 -->
        <el-row class="content-3">
            <el-col :span="24">
                <el-button type="warning" @click="resetData">重置</el-button>
                <el-button type="primary" @click="search">搜索</el-button>
            </el-col>
        </el-row>
        <!-- 添加问题 -->
        <el-row class="content-4">
            <el-col :span="24">
                <el-button round>+添加问题</el-button>
            </el-col>
        </el-row>
        <!-- 表格 -->
        <template>
            <el-table :header-cell-style="{background:'#eef1fc'}" :data="tableList" style="width: 100%">
                <el-table-column prop="number" label="编号" width="100">
                    <template slot-scope="scope">
                        <span @click="EditingProblems(scope.row.number)" class="table-number">{{scope.row.number}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="问题标题" width="250"></el-table-column>
                <el-table-column prop="problem" label="问题分类" width="180"></el-table-column>
                <el-table-column prop="click" label="客户端" width="120"></el-table-column>
                <el-table-column prop="language" label="语言类型" width="120"></el-table-column>
                <el-table-column prop="order" label="排序号" width="80"></el-table-column>
                <el-table-column prop="time" label="创建时间" sortable width="180"></el-table-column>
                <el-table-column prop="status" label="状态" width="120"></el-table-column>
                <el-table-column prop="operation" label="操作" width="80">
                    <template slot-scope="scope">
                        <el-popover placement="top" width="150" trigger="click">
                            <el-button slot="reference" type="text">
                                <span class="el-icon-more" style="font-size:25px;color:black"></span>
                            </el-button>
                            <div>
                                <div style="cursor:pointer;text-align:center;margin-bottom:5px" @click="1(scope.row.id)">
                                    <i class="el-icon-edit" style="margin-right:10px;color:blue"></i>编辑问题
                                </div>
                                <div style="cursor:pointer;text-align:center;margin-bottom:5px" @click="2(scope.row.id)">
                                    <i class="el-icon-remove" style="margin-right:10px;color:red"></i>禁用问题
                                </div>
                                <div style="cursor:pointer;text-align:center;margin-bottom:5px" @click="3(scope.row.id)">
                                    <i class="el-icon-success" style="margin-right:10px;color:green"></i>启用问题
                                </div>
                                <div style="cursor:pointer;text-align:center;margin-bottom:5px" @click="4(scope.row.id)">
                                    <i class="el-icon-delete" style="margin-right:10px;color:red"></i>删除问题
                                </div>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>
        </template>
        <!-- 页码 -->
        <el-pagination style="text-align: center;margin-top: 20px;" 
            @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage" :page-size="limit" :page-sizes="[3, 6, 8]"
            background layout="prev, pager, next, sizes, total" :total="total">
        </el-pagination>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name : 'IssuesList',
    mounted() {
        this.getData()
    },
    data() {
        return {
            objValue : {
                problem_title : '',
                problem_classify : '',
                client: '',
                language: '',
                create_time: '',
                status: '',
            },
        
            client_options: [
                { value: '',label: '全部客户端'}, 
                { value: '外卖APP',label: '外卖APP'}, 
                { value: '商家APP',label: '商家APP'}, 
                { value: '骑手APP',label: '骑手APP'}
            ],
            
            language_options: [
                { value: '',label: '全部'},
                { value: '中文',label: '中文'},
                { value: 'English',label: 'English'}
            ],
            
            create_time_options: [
                { value: '',label: '全部'},
                { value: '30',label: '近一个月'},
                { value: '90',label: '近三个月'},
                { value: '365',label: '近一年'},
            ],
            
            status_options: [
                { value: '',label: '全部状态'}, 
                { value: '正常',label: '正常'},
                { value: '已禁用',label: '已禁用'}
            ],
            tableData: [],
            tableList: [],
            total:null,
            currentPage:1,
            limit: 3,

        }
    },
    computed : {
        ...mapState({ issuesTableData : state => state.PlatformVindicate_Store.issuesTableData })
    },
    methods : {
        ...mapActions(
            {
                issuesDataAction: 'PlatformVindicate_Store/issuesDataAction',
                searchDataAction: 'PlatformVindicate_Store/searchDataAction'
            }),
        /* 获取数据 */
        async getData() {
            await this.issuesDataAction();
            this.tableData = this.issuesTableData;
            this.pageList();
            this.total = this.tableData.length
        },
        //当前页改变时
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.pageList();
        },
        /* 一页多少条数据改变时 */
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.limit = val;
            this.currentPage = 1;
            this.pageList();
        },
        // 具体分页操作
        pageList() {
            this.tableList = this.tableData.filter(
                (item, index) =>
                    index < this.currentPage * this.limit &&
                    index >= this.limit * (this.currentPage - 1)
            );
            this.total = this.tableData.length;
        },
        /* 搜索条件查询 */
        async search() {
            await this.searchDataAction(this.objValue)
            this.tableData = this.issuesTableData;
            this.currentPage = 1
            this.pageList();
            this.total = this.tableData.length
        },
        /* 重置 */
        resetData() {
            this.emptyInput()
            this.currentPage = 1
            this.getData()
        },
        /* 清空搜索框 */
        emptyInput() {
            this.objValue.problem_title = '';
            this.objValue.problem_classify = '';
            this.objValue.client = '';
            this.objValue.language=  '';
            this.objValue.create_time = '';
            this.objValue.status = '';
        }
    }
}
</script>

<style scoped>
.content-div{
    display:inline-block;
    width:95px;
    height: 38px;
    border: 1px solid #dcdfe6;
    background-color:#f5f7fa;
    border-radius: 3px 0 0 3px;
    line-height: 35px;
    text-align: center;
    color:#909399 ;
    font-size: 14px;
}
.content  .el-row{
    margin-bottom: 20px;
}
.content-1{
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e4e4;
}
.content-3{
    padding-bottom: 20px;
    border-bottom: 1px solid #e4e4e4;
}
.table-number{
    cursor: pointer;
    color:blue

}
.select-before{
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