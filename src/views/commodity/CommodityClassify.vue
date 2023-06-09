<template>
    <div class="CommodityA">
        <p class="pageName">商品分类</p>
        <div class="container">
        <div class="sub_container">
     <el-tabs v-model="activeName" @tab-click="handleClick">

        
         
                <el-form :inline="true" class="demo-form-inline">
                    <!-- 搜索栏1 -->
                    <div class="searchContainer1">
                        <el-form-item>
                            <el-input placeholder="请输入ID" v-model="inputId">
                                <template slot="prepend">分类ID</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="请输入分类名称" v-model="inputName">
                                <template slot="prepend">分类名称</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="请输入店铺名称" >
                                <template slot="prepend">店铺名称</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item label="提交时间" style="width:23%; border:1px solid #dcdfe6; background:#f5f7fa; display: flex;justify-content: flex-end;  border-radius:5px ;">
                            <el-select v-model="tableData.submitTime">
                                <el-option value="time_all">全部时间</el-option>
                                <el-option value="time_threeMonth">近三个月</el-option>
                                <el-option value="type_thisYear">今年年内</el-option>
                                <el-option value="type_year2021">2021年</el-option>
                                <el-option value="type_year2020">2020年</el-option>
                                <el-option value="type_before2020">2020年以前</el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <!-- 搜索栏2 -->
                    <div class="searchContainer2">
                        <el-form-item label="审核状态" style="width:23%; border:1px solid #dcdfe6; background:#f5f7fa; display: flex;justify-content: flex-end;  border-radius:5px ;">
                            <el-select v-model="inputWith">
                                <el-option value="">全部状态</el-option>
                                <el-option value="1" label = "待审核">待审核</el-option>
                                <el-option value="2" label = "审核中">审核中</el-option>
                                <el-option value="3" label = "审核通过">审核通过</el-option>
                                <el-option value="4" label = "审核失败">审核失败</el-option>
                            </el-select>
                        </el-form-item>

                         <el-form-item>
                            <el-input placeholder="请输入审核人" v-model="inputType">
                                <template slot="prepend">审核人</template>
                            </el-input>
                        </el-form-item>

                    </div>


                    <!-- 按键 -->
                    <el-form-item class="btn">
                        <el-button type="warning" @click="reset">重置</el-button>
                        <el-button type="primary" @click="search">搜索</el-button>
                    </el-form-item>
                </el-form>
                <!-- 渲染表 -->
                <el-table :data="tableData" style="width: 100%" @sort-change="sort_change" :cell-style="rowStyle">
                    <el-table-column prop="id" label="ID" align="center">
                    </el-table-column>
                    <el-table-column prop="classifyName" label="分类" align="center">
                    </el-table-column>
                    <el-table-column prop="describtion" label="描述" align="center">
                    </el-table-column>
                    <!-- <el-table-column prop="shopName" label="店铺名称" align="center">
                    </el-table-column> -->
                    <el-table-column prop="createTime" label="提交时间" sortable="custom" align="center">
                    </el-table-column>
                    <el-table-column label="是否可用" align="center" >
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ifUse(scope.row.userful)  }}<br></span>
                        </template>
                    </el-table-column>
                    <el-table-column label="审核状态" align="center" >
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{reviewStatusA(scope.row.result)  }}<br></span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="reviewman" label="审核人" sortable="custom" align="center">
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                        <el-tooltip placement="bottom" effect="light" align="center">

                            <div slot="content">
                                <p class="lock" v-on:click="goVerifyMemberDetail(scope.row)"><i class="el-icon-edit-outline" style="color:blue"></i> 查看并处理</p>
                                <!-- <p class="lock" ><i class="el-icon-remove-outline" style="color:red"></i> 删除该条数据</p> -->
                                <el-button type="text" @click="open"><p class="lock" ><i class="el-icon-remove-outline" style="color:red"></i> 删除该条数据</p></el-button>
                                <p class="lock" ><i class="el-icon-circle-plus-outline" style="color:#E6A23C"></i> 更多</p>
                            </div>
                            <i class="el-icon-more" ></i>
                        </el-tooltip>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- 页码 -->
                <div class="block">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="pageNum" :page-sizes="[3, 6, 9]" :page-size="sizeChange"
                        layout="prev, pager, next, sizes, total" :total="pageNumLength" @prev-click="prevPage" @next-click="nextPage">
                    </el-pagination>
                </div>
     </el-tabs>
     </div>


        </div>
    </div>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    name: 'CommodityA',
    data() {
        return {
            activeName: "first",
            tableData: [],
            inputId : '',
            inputName : '',
            inputShop : '',
            inputType : '',
            inputWith : '',
            middleData:[],  //中间中转数据
            searchData:[],  //搜索数据
            pageNumLength:0,//总页码
            pageNum:1,//当前页
            sizeChange:3,//每一页显示几条数据
            pageNumOne:0,
            centerDialogVisible: false //对话框弹出
        }
    },
    methods: {
        //获得store中的actions
        ...mapActions({getTableDataActionA : 'xc_store/getTableDataActionA'}),
        // 点击数据操作跳转审核详情
        goVerifyMemberDetail(data) {
            //  this.$router.push("/Review")
            console.log(data);
            this.$router.push({
                path:"/Review",
                query:{
                    data
                    }
            })
        },
        loading(){//初始时加载数据
            this.getTableDataActionA()
            .then(()=>{
                this.pageNum = 1 //当前页
                this.sizeChange = 3//每一页显示的条数
                this.middleData = this.$store.state.xc_store.tableData
                this.pageNumLength = this.middleData.length
              this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)

            })
            .catch((err)=>{
                console.log(err);
            })
        },
        //上一页
        prevPage(e) {
            this.pageNum = e
          this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        //下一页
        nextPage(e){
            this.pageNum = e
          this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        // 当前页面改变
        handleCurrentChange(e) {
            console.log('e=',e);
            this.pageNum = e
            this.tableData = this.middleData.slice((this.pageNum-1)*this.sizeChange,((this.pageNum-1)*this.sizeChange)+this.sizeChange)
        },
          // 页面条数改变
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.sizeChange=val
          this.tableData= this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },

        // 表格数据升降序排列
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
        //handleClick点击事件
        handleClick(){},
        //table表格内的文字居中
        rowStyle() {
            return "text-align:center";
            },
        //是否可用
        ifUse(key){
            switch (key) {
                case 1:
                    return '可用';
                case 2:
                    return '不可用'
            }
        },
        //审核状态判断
        reviewStatusA (key) {
            switch (key){
                case 1:
                    return "待审核"; 
                case 2:
                    return "审核中";
                case 3 :
                    return '审核通过';
                case 4:
                    return '审核拒绝'
                    default:
                        break;
            }
        },
                //商品分类搜索
        search(){
           
            this.getTableDataActionA()
            .then(()=>{
                this.searchD = this.$store.state.xc_store.tableData
                this.searchAA()
            })
        },
        searchAA(){

        if(this.inputId){
        this.middleData=this.middleData.filter(item=>{return item.id == this.inputId}) 
        }
        if(this.inputName){
        this.middleData=this.middleData.filter(item=>{return item.classifyName == this.inputName})
        }
        // if(this.inputShop){
        // this.searchD=this.searchD.filter(item=>{return item.reviewman == this.inputShop})
        // }
        if(this.inputWith){
            console.log(this.inputWith);
        this.middleData=this.middleData.filter(item=>{return item.result == this.inputWith })
        }
        if(this.inputType){
            console.log(this.inputType);
        this.middleData=this.middleData.filter(item=>{return item.reviewman == this.inputType })

        }
        console.log(this.searchD,999);
        this.pageNumLength = this.middleData.length //总页数
        this.pageNum = 1 //当前页
        this.sizeChange = 3 //每一页显示的条数
        this.tableData = this.middleData.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        
        },
        //重置
        reset(){
            this.inputId = '',
            this.inputName = '',
            this.inputShop = '',
            this.inputType = '',
            this.inputWith = '',
            this.loading()
        },
        //对话框弹出
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },

    mounted(){
        this.loading()
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
.searchA{
    width: 21%;
    height: 60px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-right: 54px;
}

.searchA>p{
    /* width: 15%; */
    height: 60px;
    color: rgb(172, 177, 177);
    line-height: 40px;
    text-align: center;

}
.searchMix{
    /* width: 25%; */
    height: 60px;

}
.lock{
    cursor: pointer;
}
.el-form--inline .el-form-item{
    margin-left: 16px;
}
</style>