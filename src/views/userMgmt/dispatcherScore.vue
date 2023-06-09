<template>
    <div>
      <!-- <p :style="{display:'flex',justifyContent: 'space-between'}">
        <span>配送员评价</span>
        <span :style="{color:'#4e73df',cursor:'pointer'}" @click="goBack"><i class="el-icon-back"></i>返回</span>
      </p> -->
      <div class="containerS">
        <!-- 详情页的header -->
        <div class="detailsHeaderS">
            <div>
                <!-- <i class="el-icon-s-home" :style="{padding:'10px',color:'#4678e0',fontSize:'57px',borderRadius:'50%',border:'2px solid #4678e0'}"></i> -->
                <img src="https://cdn3.axureshop.com/demo/2031128/images/%E9%85%8D%E9%80%81%E5%91%98%E8%AF%A6%E6%83%85/u10520.svg" alt="">
            </div>
            <div>
                <div>
                    <span>骑手ID：</span><span>100000</span>
                </div>
                <div>
                    <span>真实姓名：</span><span>广东深圳龙华区民治街道第一站</span>
                </div>
                <div>
                    <span>手机号码：</span><span>+86128361826316</span>
                </div>
            </div>
            <div>
                <div>
                    <span>工作类型：</span><span>1213</span>
                </div>
                <div>
                    <span>工作城市：</span><span>近90天完成3777单</span>
                </div>
                <div>
                    <span>工作地点：</span><span>4.5分</span>
                </div>
            </div>
            <div>
                <div>
                    <span>所属站点：</span><span>已设置</span>
                </div>
                <div>
                    <span>状态：</span><span>接单中</span>
                </div>
            </div>
        </div>
        <!-- 综合评分 -->
        <div :style="{fontSize:'18px',display:'flex'}">
            <p :style="{margin:'20px 0'}">配送员综合评分：</p>
            <div>
                <p :style="{margin:'20px 0'}">
                    <el-rate
                        v-model="starsValueA"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
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
            <button class="resetS">重置</button>
            <button class="searchS">搜索</button>
        </div>
        <!-- 内容 -->
        <div class="scoreDiv">
            <DispatcherScoreDiv name="张三的歌" :starsValue="showStarsValue"></DispatcherScoreDiv>
            <DispatcherScoreDiv name="辣小龙小龙虾湘菜馆(凤凰广场店)" :starsValue="showStarsValue"></DispatcherScoreDiv>
            <DispatcherScoreDiv :starsValue="showStarsValue"></DispatcherScoreDiv>
            <DispatcherScoreDiv :starsValue="showStarsValue"></DispatcherScoreDiv>
        </div>
        </div>
      </div>
</template>

<script>
import "../../assets/css/base_s.css";
import DispatcherScoreDiv from "../../components/userMgnt/dispatcherScoreDiv";
export default {
  name: "dispatcherDetails",
  data() {
    return {
        starsValueA:5,//综合评分
        showStarsValue:3.7,//组件评分
    };
  },
  components:{
    DispatcherScoreDiv
  },
  methods: {
    goBack(){//点击返回
      this.$router.go(-1)
    },
  },
};
</script>
<style scoped>
.searchDiv>div,.searchDiv>form{
    font-size: 13px;
    background-color: #fafafa;
    margin: 5px;
    height: 30px;
    line-height:30px;
    padding:3px;
}
.searchDiv>div{
    padding:3px 10px;
}
.scoreDiv{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.searchA:hover{
    background-color:#F3F6FD;
}
.searchDiv select,.searchDiv label:hover{
    background-color: #fff;
}
/* 按钮 */
.resetS,.searchS{
    width: 80px;
    height: 35px;
    color: #fff;
    border: none ;
    border-radius: 5px;
}
.searchS{
    margin-left: 20px;
}
</style>