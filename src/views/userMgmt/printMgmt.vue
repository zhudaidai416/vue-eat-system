<template>
    <div>
        <div class="containerS">
            <div>
                <form class="filterBox" :model="printForm">
                    <label class="filterAa" for="">流水号
                        <input type="text" placeholder="请输入流水号" v-model.number="printForm.liushuihao" />
                    </label>
                    <label class="filterAa" for="">店铺ID
                        <input type="text" placeholder="请输入店铺ID" v-model.number="printForm.dianpuId" />
                    </label>
                    <label class="filterAa" for="">店铺名称
                        <input type="text" placeholder="请输入店铺名称" v-model="printForm.dianpuname" />
                    </label>
                    <label class="filterAa" for="">接单手机
                        <input type="text" placeholder="请输入接单手机" v-model.number="printForm.jiedanshoujihao" />
                    </label>
                    <label class="filterAa" for="">设备商
                        <select name="" id="" v-model.number="printForm.shebeishang">
                            <option value="">全部设备商</option>
                            <option value="1">易联云</option>
                            <option value="2">飞鹅</option>
                            <option value="3">得力</option>
                            <option value="4">芯烨</option>
                        </select>
                    </label>
                    <label class="filterAa" for="">创建时间
                        <select name="" id="" v-model.number="printForm.time">
                            <option value="">近三个月</option>
                            <option value="1">今年内</option>
                            <option value="2">2021年</option>
                            <option value="3">2020年</option>
                            <option value="4">2020年之前</option>
                        </select>
                    </label>
                    <label class="filterAa" for="">连接状态
                        <select name="" id="" v-model.number="printForm.state">
                            <option value="">全部状态</option>
                            <option value="1">正常</option>
                            <option value="2">异常</option>
                        </select>
                    </label>
                </form>
            </div>
            <!-- 按钮 -->
            <div class="btnBox">
                <button class="resetS" @click="resetRequest">重置</button>
                <button class="searchS" @click="searchAll">搜索</button>
            </div>
            <!-- 表格 -->
            <table id="printTable">
                <tr class="tableHead">
                    <th>流水号</th>
                    <th>店铺ID</th>
                    <th>店铺名称</th>
                    <th>接单手机</th>
                    <th>设备商</th>
                    <th>终端号</th>
                    <th>密钥</th>
                    <th>创建时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                <tr class="tableBody" v-for="item in printList" :key="item.liushuihao">
                    <td>{{ item.liushuihao }}</td>
                    <td>{{ item.dianpuId }}</td>
                    <td>{{ item.dianpuName }}</td>
                    <td>{{ item.jiedanshoujihao }}</td>
                    <td>{{ item.shebeishang | memaText}}</td>
                    <td>{{ item.zhongduanhao }}</td>
                    <td>{{ item.miyao }}</td>
                    <td>{{ item.time }}</td>
                    <td>{{ item.state | printStateText}}</td>
                    <td class="moreS">
                    <el-popover placement="right" width="0" trigger="click" popper-class="none">
                        <div class="moreTips" :v-model="visible"  @click="goUrlShopDetail(item.dianpuId)">
                        <i class="el-icon-tickets"></i>
                        <span>&nbsp;&nbsp;查看店铺详情</span>
                        </div>
                        <div slot="reference"><i class="el-icon-more"></i></div>
                    </el-popover>
                    </td>
                </tr>
            </table>
            <!-- 分页 -->
            <div class="pageBox">
                <div class="block pageDiv">
                    <el-pagination 
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-sizes="pageNum"
                    :page-size="this.pageSize"
                    layout="prev, pager, next,sizes"
                    :total=totalLength
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "../../assets/css/base_s.css";
export default {
    name: "printMgmt",
    data() {
        return{
            // 打印机表格数据
            printList:[],
            input1: "",
            // 分页
            currentPage: 1,
            pageSize:this.pageSize,
            visible: false,
            pageNum:[
                2,4,6,8
            ],
            totalLength:8,
            // 搜索数据
            printForm:{
                liushuihao:'',
                dianpuId:'',
                dianpuname:'',
                jiedanshoujihao:'',
                shebeishang:'',
                time:'',
                state:''
            }
        }
    },
    filters:{
        printStateText(val){
            // console.log(val);
            if(val==0){
                return '异常'
            }else{
                return '正常'
            }
        },
        memaText(val){
            if(val==1){
                return '易联云'
            }else if(val==2){
                return '飞鹅'
            }else if(val==3){
                return '得力'
            }else{
                return '芯烨'
            }
        }
    },
    created() {
        this.showPrintList()
    },
    methods: {
        // 初始表格
        showPrintList(){
            this.$axios({
                method:'GET',
                url:'http://1.14.106.61:7101/findDaYinJi',
                params:{
                currentPage:1,
                pageSize:2
                }
            })
            .then(res=>{
                console.log('成功',res);
                this.printLists=res.data; 
                // 深拷贝
                this.printList= JSON.parse(JSON.stringify(this.printLists))
                console.log(this.printList);
            })
            .catch(err=>{
                console.log(err);
            })
        },
        // 跳转骑手招募详情
        goUrlShopDetail(param){
            console.log(param);
            this.$router.push({path:'storeManagement/shopDetail/'+param});
        },
        // 分页
        // 每页多少条
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.$axios({
                method:'GET',
                url:'http://1.14.106.61:7101/findDaYinJi',
                params:{
                currentPage:1,
                pageSize:val
                }
            })
            .then(res=>{
                console.log('成功',res);
                this.printList=res.data;
                // 深拷贝
                // this.printList= JSON.parse(JSON.stringify(this.printLists))
            })
            .catch(err=>{
                console.log(err);
            })
        },
        // 点击页码
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.$axios({
                method:'GET',
                url:'http://1.14.106.61:7101/findDaYinJi',
                params:{
                currentPage:val,
                pageSize:2
                }
            })
            .then(res=>{
                console.log('成功',res);
                this.printList=res.data;
                // 深拷贝
                // this.printList= JSON.parse(JSON.stringify(this.printLists))
            })
            .catch(err=>{
                console.log(err);
            })
        },
        // 重置
        resetRequest(){
            this.printForm.liushuihao=''
            this.printForm.dianpuId=''
            this.printForm.dianpuname=''
            this.printForm.jiedanshoujihao=''
            this.printForm.shebeishang=''
            this.printForm.time=''
            this.printForm.state=''
            this.showPrintList()
        },
        // 搜索
        searchAll(){
            const printList=this.printList;
            // var arr=[];
            const liushuihao=this.printForm.liushuihao;
            const dianpuId=this.printForm.dianpuId;
            const dianpuname=this.printForm.dianpuname;
            const jiedanshoujihao=this.printForm.jiedanshoujihao;
            const shebeishang=this.printForm.shebeishang;
            const time=this.printForm.time;
            const state=this.printForm.state;
            console.log(liushuihao,dianpuId,dianpuname,jiedanshoujihao,shebeishang,time,state);
            for(var i=0;i<printList.length;i++){
                if(liushuihao!=printList[i].liushuihao&&dianpuId!=printList[i].dianpuId&&dianpuname!=printList[i].dianpuname&&jiedanshoujihao!=printList[i].jiedanshoujihao&&shebeishang!=printList[i].shebeishang&&time!=printList.time&&state!=printList.state){
                    printList.splice(i)
                }
            }
            console.log(printList);
        },
    },
}

</script>