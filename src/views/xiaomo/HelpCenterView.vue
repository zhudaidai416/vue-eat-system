<template>
    <div>
        <!-- <el-row>
           <el-col :span="24"><div class="header">帮助中心</div></el-col>
        </el-row> -->

        <div class="content">
            <template>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="问题列表" name="first">
                        <IssuesList />   
                    </el-tab-pane>
                    <el-tab-pane label="问题分类" name="second">
                        <el-row class="content-2" :gutter="20">
                                <el-col :span="6">
                                    <div>
                                        <el-input placeholder="请输入分类名称" v-model="input3">
                                            <template slot="prepend">分类名称</template>
                                        </el-input>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="content-div">客户端</div>
                                    <template>
                                        <el-select style="width:60%" v-model="value5" placeholder="全部客户端">
                                            <el-option
                                            v-for="item in options5"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-col>
                                <el-col :span="6">
                                    <div class="content-div">创建时间</div>
                                    <template>
                                        <el-select style="width:60%" v-model="value6" placeholder="全部">
                                            <el-option
                                            v-for="item in options6"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-col>
                                <el-col :span="6">
                                    <div class="content-div">状态</div>
                                    <template>
                                        <el-select style="width:60%" v-model="value7" placeholder="全部状态">
                                            <el-option
                                            v-for="item in options7"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-col>
                            </el-row>

                            <el-row class="content-3">
                                <el-col :span="24">
                                    <el-button type="warning"  @click="reset">重置</el-button>
                                    <el-button type="primary" @click="search">搜索</el-button>
                                </el-col>
                            </el-row>

                            <el-row class="content-4">
                                <el-col :span="24">
                                    <el-button @click="dialogVisible = true">+添加分类</el-button>
                                    <!-- 对话框，类似模态框 -->
                                    <el-dialog
                                        title="添加问题分类"
                                        :visible.sync="dialogVisible"
                                        width="30%"
                                        @open='open_submit'
                                        @close='confirm_submit'
                                        :before-close="handleClose">
                                        <div><span>问题编号：</span><el-input style="width:60%;height:5px" v-model="input5" placeholder="请输入编号"></el-input></div>

                                         <div style="width:100%;height:20px;margin-top:20px">
                                            <span>分类名称：</span>
                                            <el-select style="width:60%;height:5px" v-model="value10">
                                                <el-option value='网络问题' label='网络问题'></el-option>
                                                <el-option value='密码问题' label='密码问题'></el-option>
                                                <el-option value='账号问题' label='账号问题'></el-option>
                                            </el-select>
                                        </div>

                                         <div style="width:100%;height:20px;margin-top:30px">
                                            <span>客户端：&emsp;</span>
                                            <el-select style="width:60%;height:5px" v-model="value11">
                                                <el-option value='外卖APP' label='外卖APP'></el-option>
                                                <el-option value='商家APP' label='商家APP'></el-option>
                                                <el-option value='外卖APP' label='外卖APP'></el-option>
                                            </el-select>
                                        </div>

                                        <div style="width:100%;height:20px;margin-top:30px">
                                            <span>关联问题：</span><el-input style="width:60%;height:5px" v-model="input6" placeholder="请输入关联问题："></el-input>
                                        </div>

                                        <div style="width:100%;height:20px;margin-top:30px">
                                            <span>排序号：&emsp;</span><el-input style="width:60%;height:5px" v-model="input7" placeholder="请输入排序号："></el-input>
                                        </div>

                                        <div style="width:100%;height:20px;margin-top:30px">
                                            <span>创建时间：</span>
                                            <el-select style="width:60%;height:5px" v-model="value12">
                                                <el-option value='近三个月' label='近三个月'></el-option>
                                                <el-option value='今年内' label='今年内'></el-option>
                                                <el-option value='2021年' label='2021年'></el-option>
                                                <el-option value='2020年' label='2020年'></el-option>
                                                <el-option value='2022年以前' label='2022年以前'></el-option>
                                            </el-select>
                                        </div>

                                        <div style="width:100%;height:20px;margin-top:30px">
                                            <span>状态：&emsp;&emsp;</span>
                                            <el-select style="width:60%;height:5px" v-model="value13">
                                                <el-option value='正常' label='正常'></el-option>
                                                <el-option value='已禁用' label='已禁用'></el-option>                                            </el-select>
                                        </div>


                                        <span slot="footer" class="dialog-footer">
                                            <el-button @click="dialogVisible = false">取 消</el-button>
                                            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                                        </span>
                                    </el-dialog>
                                    <!-- 对话框，类似模态框 -->
                                </el-col>
                            </el-row>

                            <template>
                                <el-table
                                :header-cell-style="{
                                background:'#eef1fc'}"
                                :data="tableData2"
                                style="width: 100%">
                                    <el-table-column
                                        prop="number"
                                        label="编号"
                                        width="100">
                                         <template slot-scope="scope">
                                            <span  @click="QuestionClassification(scope.row.number)" style="cursor:pointer;color:red">{{scope.row.number}}
                                            </span>
                                         </template>
                                    </el-table-column>
                                    <el-table-column
                                        prop="name"
                                        label="分类名称"
                                        width="250">
                                    </el-table-column>
                                    <el-table-column
                                        prop="client"
                                        label="客户端"
                                        width="180">
                                    </el-table-column>
                                    <el-table-column
                                        prop="problems"
                                        label="关联问题"
                                        width="120">
                                    </el-table-column>
                                    <el-table-column
                                        prop="order"
                                        label="排序号"
                                        width="120">
                                    </el-table-column>
                                    <el-table-column
                                        prop="time"
                                        label="创建时间"
                                        width="180">
                                    </el-table-column>
                                    <el-table-column
                                        prop="status"
                                        label="状态"
                                        width="180">
                                    </el-table-column>
                                    <el-table-column
                                        prop="operation"
                                        label="操作"
                                        width="90">
                                            <template slot-scope="scope">
                                                <el-popover placement="bottom" width="150" trigger="click">
                                                    <div slot="reference" style="cursor:pointer">···</div>
                                                    <div>
                                                        <div style="cursor:pointer;text-align:center;margin-bottom:5px" @click="aaa(scope.row.number)"><i class="el-icon-edit" style="margin-right:10px;color:blue"></i>编辑分类</div>
                                                        <div style="cursor:pointer;text-align:center;margin-bottom:5px" @click="Disable_Classification(scope.row.number)"><i class="el-icon-remove" style="margin-right:10px;color:red"></i>禁用分类</div>
                                                        <div style="cursor:pointer;text-align:center;margin-bottom:5px" @click="Enable_Classification(scope.row.number)"><i class="el-icon-success"  style="margin-right:10px;color:green"></i>启用分类</div>
                                                        <div style="cursor:pointer;text-align:center;margin-bottom:5px" @click="Delete_Classification(scope.row.number)"><i class="el-icon-delete"  style="margin-right:10px;color:red"></i>删除分类</div>
                                                    </div>
                                                </el-popover>
                                            </template>
                                    </el-table-column>
                                </el-table>
                            </template>
                        <!-- 页码渲染区 --> 
                            <el-pagination 
                            style="margin:50px auto "
                            background
                            layout="prev, pager, next, sizes, total"
                            :total="pageNumLength"
                            :current-page='pageNum'
                            :page-sizes="[2, 5, 10, 20]"
                            :page-size="sizeChange"
                            @size-change='handleSizeChange'
                            @prev-click="prevPage" 
                            @current-change='currentPage'
                            @next-click='nextPage' >
                            </el-pagination>
                        <!-- 页码渲染区 -->
                    </el-tab-pane>
                </el-tabs>
            </template>
           
        </div>
    </div>
</template>

<script>
import IssuesList  from "../../components/PlatformVindicate/IssuesList.vue";

import { getData } from "../../store/hz_store/helpCenter";  //引入模拟数据
export default {
    name:'ClassView',
    components : {
        IssuesList
    },
    data(){
        return {
          options5: [
            {
            value: '',
            label: '全部客户端'
            }, 
            {
            value: '外卖APP',
            label: '外卖APP'
            }, {
            value: '商家APP',
            label: '商家APP'
             }, {
            value: '骑手APP',
            label: '骑手APP'
            }],
           value5: '',

           options6: [
            {
            value: '',
            label: '全部'
            }, 
            {
            value: '近三个月',
            label: '近三个月'
            }, {
            value: '选项3',
            label: '今年内'
             }, {
            value: '2021年',
            label: '2021年'
            }, {
            value: '2020年',
            label: '2020年'
            },
             {
            value: '2020年以前',
            label: '2020年以前'
            }],
           value6: '',

           options7: [
            {
            value: '',
            label: '全部状态'
            }, 
            {
            value: '正常',
            label: '正常'
            }, {
            value: '已禁用',
            label: '已禁用'
             }],
           value7: '',
           input1:'',
           input3:'',

           tableData2: [],  //数据渲染列表
           middleData:[],  //中间中转数据

           pageNumLength:0, //总页码
           pageNum:1,       //当前页
           sizeChange:2 ,    //每页多少条数据

          activeName: 'first' ,//tab选项卡

          dialogVisible: false ,//对话框的参数


          //添加数据
          input5:'',
          value10:'',
          value11:'',
          input6:'',
          input7:'',
          value12:'',
          value13:'',
          //添加数据

        }
    },
   

    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        },

        getTableData(){
            getData()
            .then((res)=>{
                this.pageNum=1  
                this.sizeChange=2
                this.middleData=res
                this.pageNumLength=this.middleData.length
                this.tableData2= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
            })
        },

        reset() {              //重置按钮
            this.input3='';
            this.value5='';
            this.value6='';
            this.value7='';
            this.getTableData()
            },

        prevPage(e){    //上一页
            this.pageNum=e
            this.tableData2= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },

        currentPage(e){   //当前页
            this.pageNum=e;
            this.tableData2= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        nextPage(e){     //下一页
            this.pageNum=e;
            this.tableData2= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        handleSizeChange(val){   //每页显示多少条
            // console.log(`每页 ${val} 条`);
            this.sizeChange=val
            this.tableData2= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        
        search() {             //搜索按钮
            if (this.input3) {
                this.middleData=this.middleData.filter(item=>item.name==this.input3)
            }
            if (this.value5) {
                this.middleData=this.middleData.filter(item=>item.client==this.value5)
            }
            if (this.value6) {
                this.middleData=this.middleData.filter(item=>item.time==this.value6)
            }
            if (this.value7) {
                this.middleData=this.middleData.filter(item=>item.status==this.value7)
            }
         
            console.log(this.input3,this.value5,this.value6,this.value7);

            this.pageNumLength=this.middleData.length
            this.pageNum=1  
            this.sizeChange=2
            this.tableData2= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        
            
        },
    //     handleClose(done) {    // 对话框函数
    //     this.$confirm('确认关闭？')
    //       .then(_ => {
    //         done();
    //       })
    //       .catch(_ => {});
    //   },
        handleClose(done) {        // 对话框函数
            this.$confirm('确认关闭？')
            .then(()=> {
                console.log(4589);
                done();
            })
            .catch(() => {});
        },
        open_submit(a){   //打开Dialog对话框
           console.log(a);
           this.input5=this.middleData[this.middleData.length-1].number+1
        },
        confirm_submit(){  //确认Dialog对话框
            console.log(this.input5,this.value10,this.value11,this.input6,this.input7,this.value12,this.value12,);
            let s={
                number: this.input5,
                name: this.value10,
                client: this.value11,
                problems:this.input6,
                order:this.input7,
                time:this.value12,
                status:this.value12,
            }
            this.middleData.push(s)
            this.pageNumLength=this.middleData.length
            this.tableData2= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
            
        },
        EditCategory(){   //编辑分类
            // open_submit()
        },
        Disable_Classification(number){  //禁用分类
            for (let i = 0; i < this.middleData.length; i++) {
               if (this.middleData[i].number==number&&this.middleData[i].status=='正常') {
                this.middleData[i].status='已禁用'
               }
            }
            this.tableData2= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        Enable_Classification(number){  //启用分类
            for (let i = 0; i < this.middleData.length; i++) {
               if (this.middleData[i].number==number&&this.middleData[i].status=='已禁用') {
                this.middleData[i].status='正常'
               }
            }
            this.tableData2= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        Delete_Classification(number){  //删除分类
            this.middleData=this.middleData.filter(item=>item.number!=number)
            this.pageNumLength=this.middleData.length
            this.pageNum=Math.ceil(this.pageNumLength/this.sizeChange)
            this.tableData2= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        }
    },
    created(){
        this.getTableData()
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 50px;
        background-color: #f8f8f8;
        /* text-align: center; */
        line-height: 50px;
        font-size: 18px;
    }
    .content{
        width: 98%;
        /* height: 100vh; */
        padding: 20px;
    }
    .content-div{
        display:inline-block;
        width:95px;
        height: 38px;
        border: 1px solid #dcdfe6;
        background-color:#f5f7fa;
        border-radius: 3px;
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
</style>