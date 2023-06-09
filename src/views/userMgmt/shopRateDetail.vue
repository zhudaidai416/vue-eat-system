<template>
    <div class="main">
        <div class="sub">
            <div class="header">
                <div class="header-icon"><img src="../../assets/userMgmt/待审核.png" alt="图片加载失败"></div>

                <div class="header-info">
                    <div>店铺ID:</div>
                    <div>店铺名称:</div>
                    <div>所在地:</div>
                </div>
                <div class="header-info">
                    <div>{{data.id}}</div>
                    <div>{{data.name}}</div>
                    <div>{{data.contact}}</div>
                </div>
                <div class="header-info">
                    <div>详细地址:</div>
                    <div>店铺类型:</div>
                    <div>主营/辅营:</div>
                </div>
                <div class="header-info">
                    <div>{{data.email}}<i class="el-icon-location-outline" style="color:blue"></i></div>
                    <div>{{data.email}}</div>
                    <div>{{data.email}}</div>
                </div>
                <div class="header-info">
                    <div>配送方式:</div>
                    <div>负责人:</div>
                    <div>状态:</div>
                </div>
                <div class="header-info">
                    <div>{{data.email}}</div>
                    <div>{{data.email}}</div>
                    <div>{{data.email}}</div>
                </div>
            </div>
        </div>

        <!-- 综合评分 -->
        <div :style="{fontSize:'18px',display:'flex'}">
            <p :style="{margin:'20px 0'}">配送员综合评分：</p>
            <div>
                <p :style="{margin:'20px 0'}">
                    <el-rate v-model="starsValueA" disabled show-score text-color="#ff9900" score-template="{value}">
                    </el-rate>
                </p>
                <p :style="{fontSize:'13px',color:'#999999',margin:'20px 0'}">(根据最近90天评价计算所得)</p>
            </div>
        </div>

        <!-- 筛选 -->
        <div class="searchDiv" :style="{display:'flex',color:'#797979'}">
            <form :style="{width:'315px'}">
                <label for="" :style="{width:'20%',height:'30px',padding:'5px'}">评价时间</label>
                <select name="" id="" :style="{width:'79%',height:'30px',backgroundColor: '#fafafa',border:'none'}">
                    <option value="0">全部</option>
                    <option value="1">近三个月</option>
                    <option value="2">今年内</option>
                    <option value="3">2021年</option>
                    <option value="4">2020年</option>
                    <option value="5">2020年以前</option>
                </select>
            </form>
            <div :style="{backgroundColor:'#fff',color:'#e4e4e4'}">|</div>
            <div class="searchA">全部 2.4 万</div>
            <div class="searchA">五星</div>
            <div class="searchA">四星</div>
            <div class="searchA">三星</div>
            <div class="searchA">二星</div>
            <div class="searchA">一星</div>
            <div :style="{backgroundColor:'#fff',color:'#e4e4e4'}">|</div>
            <div class="searchA">有内容</div>
            <div class="searchA">顾客的</div>
            <div class="searchA">商家的</div>
        </div>

        <!-- 按钮 -->
        <div :style="{margin:'10px'}">
            <el-button type="warning">重置</el-button>
            <el-button type="primary">搜索</el-button>
        </div>

        <!-- 内容 -->
        <div class="scoreDiv">
            <DispatcherScoreDiv name="张三的歌" :starsValue="showStarsValue"></DispatcherScoreDiv>
            <DispatcherScoreDiv name="辣小龙小龙虾湘菜馆(凤凰广场店)" :starsValue="showStarsValue"></DispatcherScoreDiv>
            <DispatcherScoreDiv :starsValue="showStarsValue"></DispatcherScoreDiv>
            <DispatcherScoreDiv :starsValue="showStarsValue"></DispatcherScoreDiv>
        </div>
        <!-- 页码 -->
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[10, 15, 20]" :page-size="10"
                layout="prev, pager, next, sizes, total" :total="rateData.length" :pagerCount="11" prev-text="上一页"
                next-text="下一页">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import DispatcherScoreDiv from "../../components/userMgnt/dispatcherScoreDiv";
export default {
    name: 'verifyMemberDetail',
    components: {
        DispatcherScoreDiv
    },
    data() {
        return {
            starsValueA: 5,
            showStarsValue: 3.7,
            currentPage: 1,
            rateData: [],
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
            lockVisible: false,
            form: {
            },
            formLabelWidth: '120px',
        }
    },
    created() {
        // 当前审核会员的流水号 this.$route.params.id
    },
    methods: {
        // 页面条数改变
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },

        // 当前页面改变
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
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

.searchDiv>div,
.searchDiv>form {
    font-size: 13px;
    background-color: #fafafa;
    margin: 5px;
    height: 30px;
    line-height: 30px;
    padding: 3px;
}

.searchDiv>div {
    padding: 3px 10px;
}

.scoreDiv {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.searchA:hover {
    background-color: #F3F6FD;
}

.searchDiv select,
.searchDiv label:hover {
    background-color: #fff;
}

/* 按钮 */
.reset,
.search {
    width: 80px;
    height: 35px;
    color: #fff;
    border: none;
    border-radius: 5px;
}

.search {
    margin-left: 20px;
}
</style>