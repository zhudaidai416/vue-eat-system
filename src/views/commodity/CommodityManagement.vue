<template>
    <div class="CommodityA">
       
        <!-- <div class="container"> -->
         <div class="home"> 
         <!-- <div class="container"> -->
         <p class="pageName">商品列表</p>
         <div class="sub_container">
      
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="所有的商品" name="first">
        
         <div class="sub_container">
                <el-form :inline="true" class="demo-form-inline">
                    <!-- 搜索栏1 -->
                    <div class="searchContainer1">
                        <el-form-item>
                            <el-input placeholder="请输入ID" v-model="inputId">
                                <template slot="prepend">商家ID</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="请输入商品名称" v-model="inputName">
                                <template slot="prepend">商品名称</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="价格" v-model="inputShop">
                                <template slot="prepend">价格</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item label="商品类型" style="width:28%; border:1px solid #dcdfe6; background:#f5f7fa; display: flex;justify-content: flex-end;  border-radius:5px ;">
                            <el-select v-model="inputType">
                                <el-option value="">全部类型</el-option>
                                <el-option value="1" label='单品'>单品</el-option>
                                <el-option value="2" label='套餐'>套餐</el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <!-- 搜索栏2 -->
                    <div class="searchContainer2">

                        <div class="searchA">
                            <p>价格</p>
                            <el-input v-model="inputAA" placeholder="最高" class="searchMix"></el-input>
                            <p>至</p>
                            <el-input v-model="inputB" placeholder="最低" class="searchMix"></el-input>
                        </div>

                        <div class="searchA">
                            <p>销量</p>
                            <el-input v-model="inputC" placeholder="最高" class="searchMix"></el-input>
                            <p>至</p>
                            <el-input v-model="inputD" placeholder="最低" class="searchMix"></el-input>
                        </div>

                        <el-form-item label="创建时间" style="width:28%; border:1px solid #dcdfe6; background:#f5f7fa; display: flex;justify-content: flex-end;  border-radius:5px ;">
                            <el-select v-model="tableData.submitTime">
                                <el-option value="全部时间">全部时间</el-option>
                                <el-option value="近三个月">近三个月</el-option>
                                <el-option value="今年年内">今年年内</el-option>
                                <el-option value="2021年">2021年</el-option>
                                <el-option value="2020年">2020年</el-option>
                                <el-option value="2020年以前">2020年以前</el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="审核状态" style="width:28%; border:1px solid #dcdfe6; background:#f5f7fa; display: flex;justify-content: flex-end;  border-radius:5px ;">
                            <el-select v-model="inputWith">
                                <el-option value="" label=''>全部状态</el-option>
                                <el-option value="1" label='待审核'>待审核</el-option>
                                <el-option value="2" label='审核中'>审核中</el-option>
                                <el-option value="3" label='审核通过'>审核通过</el-option>
                                <el-option value="4" label='审核失败'>审核失败</el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    
                    <!-- 搜索栏3 -->
                    <div class="searchContainer2">

                        <el-form-item>
                            <el-input placeholder="请输入审核人">
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
                <el-table :data="tableData" style="width: 100% " @sort-change="sort_change" :cell-style="rowStyle" >
                   <el-table-column label="ID" align="center" >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.goodsId }}<br></span>
                    </template>
                    </el-table-column>
                    <el-table-column prop="goodsPrice" label="价格" align="center">
                    </el-table-column>
                   <el-table-column label="商品类型" align="center" >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{shopType( scope.row.goodsType) }}<br></span>
                    </template>
                    </el-table-column>
                    <el-table-column prop="goodsSales" label="库存" align="center">
                    </el-table-column>
                    <el-table-column prop="goodsInventory" label="月售" sortable="custom" align="center">
                    </el-table-column>
                    <el-table-column prop="chineseName" label="商品名称" width="160" align="center">
                    </el-table-column>
                    <el-table-column label="提交时间" width="280" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.submitTime }}</span>
                        <br/>
                         <span style="margin-left: 15px;border: 1px solid red;color:#ffffff;background:#409eff" v-if=" scope.row.goodsStatus == 1">{{  auditMethod( scope.row.goodsStatus )  }}<br></span>
                         <span  style="margin-left: 15px;border: 1px solid red;color:#ffffff;background:#e6a23c;" v-else-if=" scope.row.goodsStatus == 2">{{  auditMethod( scope.row.goodsStatus )  }}<br></span>
                        
                    </template>
                    </el-table-column>
                    <el-table-column label="审核状态" width="180" align="center">
                    <template slot-scope="scope">
                        <span>{{ reviewStatusA( scope.row.reviewStatus ) }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                        <el-tooltip placement="bottom" effect="light" align="center">
                            <div slot="content">
                                <p class="lock" v-on:click="goVerifyMemberDetail(scope.row)"><i class="el-icon-edit-outline" style="color:blue"></i> 查看并处理</p>
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
                        layout="prev, pager, next, sizes, total" :total="pageNumLength"  @prev-click="prevPage" @next-click="nextPage">
                    </el-pagination>
                </div>
            </div>

    </el-tab-pane>
    <el-tab-pane label="在售中的商品 " name="second">
        
         <div class="sub_container">
                <el-form :inline="true" class="demo-form-inline">
                    <!-- 搜索栏1 -->
                    <div class="searchContainer1">
                        <el-form-item>
                            <el-input placeholder="请输入ID" v-model="inputId">
                                <template slot="prepend">商家ID</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="请输入商品名称" v-model="inputName">
                                <template slot="prepend">商品名称</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="价格" v-model="inputShop">
                                <template slot="prepend">价格</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item label="商品类型" style="width:28%; border:1px solid #dcdfe6; background:#f5f7fa; display: flex;justify-content: flex-end;  border-radius:5px ;">
                            <el-select v-model="inputType">
                                <el-option value="">全部类型</el-option>
                                <el-option value="1" label='单品'>单品</el-option>
                                <el-option value="2" label='套餐'>套餐</el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <!-- 搜索栏2 -->
                    <div class="searchContainer2">

                        <div class="searchA">
                            <p>价格</p>
                            <el-input v-model="inputAA" placeholder="最高" class="searchMix"></el-input>
                            <p>至</p>
                            <el-input v-model="inputB" placeholder="最低" class="searchMix"></el-input>
                        </div>

                        <div class="searchA">
                            <p>销量</p>
                            <el-input v-model="inputC" placeholder="最高" class="searchMix"></el-input>
                            <p>至</p>
                            <el-input v-model="inputD" placeholder="最低" class="searchMix"></el-input>
                        </div>

                        <el-form-item label="创建时间" style="width:28%; border:1px solid #dcdfe6; background:#f5f7fa; display: flex;justify-content: flex-end;  border-radius:5px ;">
                            <el-select v-model="tableData.submitTime">
                                <el-option value="全部时间">全部时间</el-option>
                                <el-option value="近三个月">近三个月</el-option>
                                <el-option value="今年年内">今年年内</el-option>
                                <el-option value="2021年">2021年</el-option>
                                <el-option value="2020年">2020年</el-option>
                                <el-option value="2020年以前">2020年以前</el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="审核状态" style="width:28%; border:1px solid #dcdfe6; background:#f5f7fa; display: flex;justify-content: flex-end;  border-radius:5px ;">
                            <el-select v-model="inputWith">
                                <el-option value="" label=''>全部状态</el-option>
                                <el-option value="1" label='待审核'>待审核</el-option>
                                <el-option value="2" label='审核中'>审核中</el-option>
                                <el-option value="3" label='审核通过'>审核通过</el-option>
                                <el-option value="4" label='审核失败'>审核失败</el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    
                    <!-- 搜索栏3 -->
                    <div class="searchContainer2">

                        <el-form-item>
                            <el-input placeholder="请输入审核人">
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
                <el-table :data="tableDataS" style="width: 100% " @sort-change="sort_change" :cell-style="rowStyle" >
                   <el-table-column label="ID" align="center" >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.goodsId }}<br></span>
                    </template>
                    </el-table-column>
                    <el-table-column prop="goodsPrice" label="价格" align="center">
                    </el-table-column>
                   <el-table-column label="商品类型" align="center" >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{shopType( scope.row.goodsType) }}<br></span>
                    </template>
                    </el-table-column>
                    <el-table-column prop="goodsSales" label="库存" align="center">
                    </el-table-column>
                    <el-table-column prop="goodsInventory" label="月售" sortable="custom" align="center">
                    </el-table-column>
                    <el-table-column prop="chineseName" label="商品名称" width="160" align="center">
                    </el-table-column>
                    <el-table-column label="提交时间" width="280" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.submitTime }}</span>
                        <br/>
                         <span style="margin-left: 15px;border: 1px solid red;color:#ffffff;background:#409eff">{{  auditMethod( scope.row.goodsStatus )  }}<br></span>
                        
                    </template>
                    </el-table-column>
                    <el-table-column label="审核状态" width="180" align="center">
                    <template slot-scope="scope">
                        <span>{{ reviewStatusA( scope.row.reviewStatus ) }}</span>
                    </template>
                    </el-table-column>
                     <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                        <el-tooltip placement="bottom" effect="light" align="center">
                            <div slot="content">
                                <p class="lock" v-on:click="goVerifyMemberDetail(scope.row)"><i class="el-icon-edit-outline" style="color:blue"></i> 查看并处理</p>
                            </div>
                            <i class="el-icon-more" ></i>
                        </el-tooltip>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- 页码 -->
                 <div class="block">
                    <el-pagination @size-change="handleSizeChangeS" @current-change="handleCurrentChangeS"
                        :current-page="pageNum" :page-sizes="[3, 6, 9]" :page-size="sizeChange"
                        layout="prev, pager, next, sizes, total" :total="pageNumLengthS"  @prev-click="prevPageS" @next-click="nextPageS">
                    </el-pagination>
                </div>
            </div>

    </el-tab-pane>
    <el-tab-pane label="已下架的商品" name="third">
        
         <div class="sub_container">
                <el-form :inline="true" class="demo-form-inline">
                    <!-- 搜索栏1 -->
                    <div class="searchContainer1">
                        <el-form-item>
                            <el-input placeholder="请输入ID" v-model="inputId">
                                <template slot="prepend">商家ID</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="请输入商品名称" v-model="inputName">
                                <template slot="prepend">商品名称</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-input placeholder="价格" v-model="inputShop">
                                <template slot="prepend">价格</template>
                            </el-input>
                        </el-form-item>

                        <el-form-item label="商品类型" style="width:28%; border:1px solid #dcdfe6; background:#f5f7fa; display: flex;justify-content: flex-end;  border-radius:5px ;">
                            <el-select v-model="inputType">
                                <el-option value="">全部类型</el-option>
                                <el-option value="1" label='单品'>单品</el-option>
                                <el-option value="2" label='套餐'>套餐</el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <!-- 搜索栏2 -->
                    <div class="searchContainer2">

                        <div class="searchA">
                            <p>价格</p>
                            <el-input v-model="inputAA" placeholder="最高" class="searchMix"></el-input>
                            <p>至</p>
                            <el-input v-model="inputB" placeholder="最低" class="searchMix"></el-input>
                        </div>

                        <div class="searchA">
                            <p>销量</p>
                            <el-input v-model="inputC" placeholder="最高" class="searchMix"></el-input>
                            <p>至</p>
                            <el-input v-model="inputD" placeholder="最低" class="searchMix"></el-input>
                        </div>

                        <el-form-item label="创建时间" style="width:28%; border:1px solid #dcdfe6; background:#f5f7fa; display: flex;justify-content: flex-end;  border-radius:5px ;">
                            <el-select v-model="tableData.submitTime">
                                <el-option value="全部时间">全部时间</el-option>
                                <el-option value="近三个月">近三个月</el-option>
                                <el-option value="今年年内">今年年内</el-option>
                                <el-option value="2021年">2021年</el-option>
                                <el-option value="2020年">2020年</el-option>
                                <el-option value="2020年以前">2020年以前</el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="审核状态" style="width:28%; border:1px solid #dcdfe6; background:#f5f7fa; display: flex;justify-content: flex-end;  border-radius:5px ;">
                            <el-select v-model="inputWith">
                                <el-option value="" label=''>全部状态</el-option>
                                <el-option value="1" label='待审核'>待审核</el-option>
                                <el-option value="2" label='审核中'>审核中</el-option>
                                <el-option value="3" label='审核通过'>审核通过</el-option>
                                <el-option value="4" label='审核失败'>审核失败</el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    
                    <!-- 搜索栏3 -->
                    <div class="searchContainer2">

                        <el-form-item>
                            <el-input placeholder="请输入审核人">
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
                <el-table :data="tableDataX" style="width: 100% " @sort-change="sort_change" :cell-style="rowStyle" >
                   <el-table-column label="ID" align="center" >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.goodsId }}<br></span>
                    </template>
                    </el-table-column>
                    <el-table-column prop="goodsPrice" label="价格" align="center">
                    </el-table-column>
                   <el-table-column label="商品类型" align="center" >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{shopType( scope.row.goodsType) }}<br></span>
                    </template>
                    </el-table-column>
                    <el-table-column prop="goodsSales" label="库存" align="center">
                    </el-table-column>
                    <el-table-column prop="goodsInventory" label="月售" sortable="custom" align="center">
                    </el-table-column>
                    <el-table-column prop="chineseName" label="商品名称" width="160" align="center">
                    </el-table-column>
                    <el-table-column label="提交时间" width="280" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.submitTime }}</span>
                        <br/>
                         <span style="margin-left: 15px;border: 1px solid red;color:#ffffff;background:#e6a23c;">{{  auditMethod( scope.row.goodsStatus )  }}<br></span>
                        
                    </template>
                    </el-table-column>
                    <el-table-column label="审核状态" width="180" align="center">
                    <template slot-scope="scope">
                        <span>{{ reviewStatusA( scope.row.reviewStatus ) }}</span>
                    </template>
                    </el-table-column>
                     <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                        <el-tooltip placement="bottom" effect="light" align="center">
                            <div slot="content">
                                <p class="lock" v-on:click="goVerifyMemberDetail(scope.row)"><i class="el-icon-edit-outline" style="color:blue"></i> 查看并处理</p>
                            </div>
                            <i class="el-icon-more" ></i>
                        </el-tooltip>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- 页码 -->
                 <div class="block">
                    <el-pagination @size-change="handleSizeChangeX" @current-change="handleCurrentChangeX"
                        :current-page="pageNum" :page-sizes="[3, 6, 9]" :page-size="sizeChange"
                        layout="prev, pager, next, sizes, total" :total="pageNumLengthX"  @prev-click="prevPageX" @next-click="nextPageX">
                    </el-pagination>
                </div>
            </div>

    </el-tab-pane>
  </el-tabs>
        </div>
        </div>
    </div>
    <!-- </div> -->
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    name: 'CommodityA',
    data() {
        return {
            activeName: "first",
            tableData: [],//所有商品的
            tableDataX: [],//已下架的
            tableDataS: [],//在售
            currentPage: 1,
            inputAA:'',
            inputB:"",
            inputC:'',
            inputD:'',
            inputE:'',
            inputF:"",
            inputG:'',
            inputH:'',
            inputI:'',
            inputJ:'',
            inputK:'',
            inputId:"",
            inputName:'',
            inputShop:"",
            inputType:'',
            inputWith:'',
            middle:[], //所有商品中间变量
            searchD:[],//搜索数据中间变量
            pageNum:1 ,//当前页
            sizeChange:3 ,//每一页显示的条数
            pageNumLength:0, //总条数
              middleX:[], //已下架商品中间变量
              pageNumLengthX:0, //已下架总条数
              handleSizeChangeX:'',
              handleCurrentChangeX:"",
              prevPageX:'',
              nextPageX:'',
                middleS:[], //在售商品中间变量
                pageNumLengthS:0, //在售总条数
                handleSizeChangeS:'',
                handleCurrentChangeS:"",
                prevPageS:'',
                nextPageS:''


        };
    },

    methods: {
        ...mapActions({
            getTableDataAction : "xc_store/getTableDataAction",
            shopSearch : "xc_store/shopSearch"
            }),
        
        // 点击数据操作跳转审核详情
        goVerifyMemberDetail(data){
            this.$router.push({
                path:'/ProductDetails',
                query:{
                    data
                }
            })
        },
        //页码初始时的加载
        loading(){
            this.getTableDataAction()
            .then(()=>{
                //所有商品
                this.pageNum = 1 //当前页
                this.sizeChange = 3 //每一页显示的条数
                this.middle = this.$store.state.xc_store.tableData //tableData 的中间变量，便于使用
                this.pageNumLength = this.middle.length //总页数
                this.tableData = this.middle.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange) //初始化时页面显示的数据
                //以下架的商品
                this.middleX = this.$store.state.xc_store.tableData.filter(item=>{
                    return item.goodsStatus == 2
                })
                this.tableDataX = this.middleX
                this.pageNumLengthX = this.middleX.length //总页数
                //在售的商品
                this.middleS = this.$store.state.xc_store.tableData.filter(item=>{
                    return item.goodsStatus == 1
                })
                this.tableDataS = this.middleS
                this.pageNumLengthS = this.middleS.length //总页数
               
               
            })
        },
        //商品管理搜索
        search(){
           
            this.getTableDataAction()
            .then(()=>{
                this.searchD = this.$store.state.xc_store.tableData
                this.searchAA()
            })
        },
        searchAA(){

        if(this.inputId){
        this.searchD=this.searchD.filter(item=>{return item.goodsId == this.inputId}) 
        }
        if(this.inputName){
        this.searchD=this.searchD.filter(item=>{return item.chineseName == this.inputName})
        }
        if(this.inputShop){
        this.searchD=this.searchD.filter(item=>{return item.goodsPrice == this.inputShop})
        }
        if(this.inputType){
        this.searchD=this.searchD.filter(item=>{return item.goodsType == this.inputType })
        }
        if(this.inputWith){
        this.searchD=this.searchD.filter(item=>{return item.reviewStatus == this.inputWith })

        }
        
        this.pageNum = 1 //当前页
        this.sizeChange = 3 //每一页显示的条数
        this.pageNumLength = this.searchD.length //总页数
        this.tableData = this.searchD.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        
        },
        //上一页-所有
        prevPage(e){
            this.pageNum = e
            this.tableData = this.middle.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        //下一页-所有
        nextPage(e){
            this.pageNum = e
            this.tableData = this.middle.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
         // 当前页面改变-所有
        handleCurrentChange(e) {
             this.pageNum = e
            this.tableData = this.middle.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        // 页面条数改变-所有
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.sizeChange = val
            this.tableData = this.middle.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
           

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
         //在售中、已下架
        auditMethod (key) {
            switch (key) {
                case 2:
                    return  "已下架"
                case 1:
                    return  "在售中"
                    default: 
                    break;
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
        //table表格内的文字居中
        rowStyle() {
            return "text-align:center";
            },

        //商品类型转换
        shopType (key){
            switch (key){
                case 1:
                    return "单品";
                case 2:
                    return "套餐"
                     default:
                    break
            }
        },
        //重置
        reset(){
            this.inputId = '',
            this.inputName = '',
            this.inputShop = '',
            this.inputType = '',
            this.inputWith = '',
            this.loading()
        }
    },
    //初始值页面加载
     created(){
        this.loading()  
    },
    //加载已下架的页面
        //上一页-下架
        prevPageX(e){
            this.pageNum = e
            this.tableDataX = this.middleX.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        //下一页-下架
        nextPageX(e){
            this.pageNum = e
            this.tableDataX = this.middleX.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
         // 当前页面改变-下架
        handleCurrentChangeX(e) {
             this.pageNum = e
            this.tableDataX = this.middleX.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        // 页面条数改变-下架
        handleSizeChangeX(val) {
            console.log(`每页 ${val} 条`);
            this.sizeChange = val
            this.tableDataX = this.middleX.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
           

        },
        //加载在售的页面
        //上一页-在售
        prevPageS(e){
            this.pageNum = e
            this.tableDataS = this.middleS.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        //下一页-在售
        nextPageS(e){
            this.pageNum = e
            this.tableDataS = this.middleS.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
         // 当前页面改变-在售
        handleCurrentChangeS(e) {
             this.pageNum = e
            this.tableDataS = this.middleS.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
        },
        // 页面条数改变-在售
        handleSizeChangeS(val) {
            console.log(`每页 ${val} 条`);
            this.sizeChange = val
            this.tableDataS = this.middleS.slice((this.pageNum-1)*this.sizeChange,(this.pageNum-1)*this.sizeChange+this.sizeChange)
           

        },

   
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
    width: 22.5%;
    height: 60px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-right: 54px;
}

.searchA>p{
    width: 22%;
    height: 60px;
    color: rgb(172, 177, 177);
    line-height: 40px;
    text-align: center;

}
.searchMix{
    width: 36%;
    height: 60px;

}
.el-form-item{
    width: 26%;
    display: flex;
}
.lock{
    cursor: pointer;
   
}

</style>