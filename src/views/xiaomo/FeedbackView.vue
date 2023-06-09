<template>
    <div>
        <!-- <el-row>
           <el-col :span="24"><div class="header">意见反馈</div> </el-col>
        </el-row> -->

        <div class="content">
            <el-row class="content-2" :gutter="20">
                <el-col :span="6">
                    <div class="content-div">意见类型</div>
                    <template>
                        <el-select style="width:60%;color:red" v-model="value" placeholder="全部类型">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-col>

                <el-col :span="6">
                    <div>
                        <el-input placeholder="请输入内容关键词" v-model="input1">
                            <template slot="prepend">反馈内容</template>
                        </el-input>
                    </div>
                </el-col>

                <el-col :span="6">
                    <div>
                        <el-input placeholder="请输入联系方式" v-model="input2">
                            <template slot="prepend">联系方式</template>
                        </el-input>
                    </div>
                </el-col>
               
                <el-col :span="6">
                    <div class="content-div">来源</div>
                    <template>
                        <el-select style="width:60%" v-model="value2" placeholder="全部客户端">
                            <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-col>
            </el-row>

            <el-row class="content-3" :gutter="20">
                <el-col :span="6">
                    <div class="content-div">反馈时间</div>
                    <template>
                        <el-select style="width:60%" v-model="value3" placeholder="全部">
                            <el-option
                            v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-col>

                <el-col :span="6">
                    <div class="content-div">处理时间</div>
                    <template>
                        <el-select style="width:60%" v-model="value4" placeholder="全部">
                            <el-option
                            v-for="item in options4"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-col>

                <el-col :span="6">
                    <div class="content-div">处理状态</div>
                    <template>
                        <el-select style="width:60%" v-model="value5" placeholder="全部状态">
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
                    <div>
                        <el-input placeholder="请输入处理人" v-model="input3">
                            <template slot="prepend">处理人</template>
                        </el-input>
                    </div>
                </el-col>

            </el-row>

            <el-row class="content-4">
                <el-col :span="24">
                    <el-button type="warning" @click='reset'>重置</el-button>
                    <el-button type="primary" @click='search'>搜索</el-button>
                </el-col>
            </el-row>

           <template>
                <el-table
                :header-cell-style="{
                 background:'#eef1fc'}"
                :data="tableData"
                style="width: 100%">
                    <el-table-column
                        prop="number"
                        label="流水号"
                        width="120">
                            <template slot-scope="scope">
                                <span  @click="FeedbackDetails(scope.row)" style="cursor:pointer;color:red">
                                    {{scope.row.number}}
                                </span>
                            </template>
                    </el-table-column>
                    <el-table-column
                        prop="OpinionType"
                        label="意见类型"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="feedback"
                        label="反馈内容"
                        width="280">
                    </el-table-column>
                    <el-table-column
                        prop="phone"
                        label="联系方式"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="source"
                        label="来源"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="FeedbackTime"
                        label="反馈时间"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="processingTime"
                        label="处理时间"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="状态"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="operation"
                        label="操作"
                        width="80">
                         <template slot-scope="scope">
                            <el-popover v-if="scope.row.status==='待处理'" placement="bottom" width="150" trigger="click">
                                <div slot="reference" style="cursor:pointer">···</div>
                                <div>
                                    <div style="cursor:pointer;text-align:center" @click="To_processed(scope.row)"><i class="el-icon-edit-outline" style="margin-right:10px;color:blue"></i>查看并处理</div>
                                </div>
                            </el-popover>

                            <el-popover v-if="scope.row.status==='跟进中'" placement="bottom" width="150" trigger="click">
                                <div slot="reference" style="cursor:pointer">···</div>
                                <div>
                                   <div style="cursor:pointer;text-align:center" @click="follow_up(scope.row)"><i class="el-icon-edit-outline" style="margin-right:10px;color:blue"></i>查看</div>
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
            :page-sizes='[2,5,10,20]'
            :page-size='sizeChange'
            @size-change='handleSizeChange'
            @prev-click='prevPage'
            @current-change='currentPage'
            @next-click='nextPage'>
            </el-pagination>
<!-- 页码渲染区 -->
        </div>
    </div> 
</template>

<script>
import { getData } from "../../store/hz_store/feedBack";
// import Bus from "./bus";
export default {
    name:'ClassView',
    data(){
        return {
          options: [
            {
            value:'',
            label:'全部类型'
            }, 
            {
            value:'功能体验',
            label:'功能体验'
            }, 
            {
            value:'配送服务',
            label:'配送服务'
            },
            {
            value:'商家服务',
            label:'商家服务'
            },
            ],
           value:'',

          options2: [
            {
            value:'全部客户端',
            label:'全部客户端'
            }, 
            {
            value:'外卖APP',
            label:'外卖APP'
            },  {
            value:'商家APP',
            label:'商家APP'
             }, 
            {
            value:'骑手APP',
            label:'骑手APP'
            } 
            ],
           value2:'',
         
          options3: [
            {
            value:'',
            label:'全部'
            }, 
            {
            value:'近三个月',
            label:'近三个月'
            }, {
            value:'今年内',
            label:'今年内'
             }, {
            value:'2021年',
            label:'2021年'
            }],
           value3:'',

          options4: [
            {
            value:'',
            label:'全部'
            }, 
            {
            value:'近三个月',
            label:'近三个月'
            }, {
            value:'今年内',
            label:'今年内'
             }, {
            value:'2021年',
            label:'2021年'
            }],
           value4:'',

          options5: [
            {
            value:'',
            label:'全部状态'
            }, 
            {
            value:'待处理',
            label:'待处理'
            }, {
            value:'跟进中',
            label:'跟进中'
             }, {
            value:'已完结',
            label:'已完结'
            }],
           value5:'',

           input1:'',
           input2:'',
           input3:'',

            tableData: [],  //数据渲染列表
            middleData:[],   //中间中转数据

            pageNumLength:0,  //总页码
            pageNum:1,       //当前页
            sizeChange:2,    //每页多少条数据

         }
    },
    methods:{
        getTableData(){
            getData()
            .then((res)=>{
                this.pageNum=1
                this.sizeChange=2
                this.middleData=res
                // console.log(this.$store.state.hz_store.number);
                if (this.$store.state.hz_store.number) {
                    for (let i = 0; i < this.middleData.length; i++) {
                       if (this.middleData[i].number==this.$store.state.hz_store.number) {
                        this.middleData[i].status='已完结'
                       }
                    }
                }
                this.pageNumLength=this.middleData.length
                this.tableData=this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
            })
        },

        reset() {              //重置按钮
        console.log(this.value,this.value2,this.value3,this.value4,this.value5,this.input1,this.input2,this.input3);
            this.value='';
            this.value2='';
            this.value3='';
            this.value4='';
            this.value5='';
            this.input1='';
            this.input2='';
            this.input3='';
            this.getTableData()
        },

        search() {             //搜索按钮
            if (this.value) {
                this.middleData=this.middleData.filter(item=>item.OpinionType==this.value)
            }
            if (this.value2) {
                this.middleData=this.middleData.filter(item=>item.source==this.value2)
            }
            if (this.value3) {
                this.middleData=this.middleData.filter(item=>item.FeedbackTime==this.value3)
            }
            if (this.value4) {
                this.middleData=this.middleData.filter(item=>item.processingTime==this.value4)
            }
            if (this.value5) {
                this.middleData=this.middleData.filter(item=>item.status==this.value5)
            }
            if (this.input1) {
                this.middleData=this.middleData.filter(item=>item.feedback==this.input1)
            }
            if (this.input2) {
                this.middleData=this.middleData.filter(item=>item.phone==this.input2)
            }
            this.pageNumLength=this.middleData.length
            this.pageNum=1  
            this.sizeChange=2
            this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },

        prevPage(e){    //上一页
            this.pageNum=e
            this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },

        currentPage(e){   //当前页
            this.pageNum=e;
            this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        nextPage(e){     //下一页
            this.pageNum=e;
            this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        handleSizeChange(val){   //每页显示多少条
            // console.log(`每页 ${val} 条`);
            this.sizeChange=val
            this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },


        FeedbackDetails(data){    //点击问题编号进入响应页面
            if (data.status=='待处理') {
                this.$router.push({
                    path:'/feedbackDetailsProcessed',
                    query:{
                        data
                    }
                })
            }
            if (data.status=='跟进中') {
                this.$router.push({
                    path:'/feedbackDetailsFollowUp',
                    query:{
                        data
                    }
                })
            }
            if (data.status=='已完结') {
                this.$router.push({
                    path:'/feedbackDetailsFinished',
                    query:{
                        data
                    }
                })
            }
        },
        To_processed(data){       //跳转到待处理页面
            this.$router.push({
                path:'/feedbackDetailsProcessed',
                query:{
                    data
                }
            })
        },
        follow_up(data){          //跳转到跟进中页面
            this.$router.push({
                path:'/feedbackDetailsFollowUp',
                query:{
                    data
                }
            })
        }
    },
    created(){
            this.getTableData();
            // console.log(this.$store.state.hz_store.number);
            // Bus.$on('send',function (payload) {
            //     for (let i = 0; i < this.middleData.length; i++) {
            //         if (this.middleData[i].number==payload) {
            //          this.middleData[i].status='已完成'
            //         }
            //     }
            // })
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
        width: 100%;
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
    .content > .el-row{
        margin-bottom: 20px;
    }
    .content-1{
        padding-bottom: 10px;
        border-bottom: 1px solid #e4e4e4;
    }
</style>