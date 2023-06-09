<template>
    <!-- <div class="containerB">
      <div class="containerA"> -->
        <div>
      <div class="containerS">
            <!-- 详情页的header -->
            <div class="detailsHeaderS">
                <div>
                    <!-- <i class="el-icon-s-home" :style="{padding:'10px',color:'#4678e0',fontSize:'57px',borderRadius:'50%',border:'2px solid #4678e0'}"></i> -->
                    <img src="../../assets/images/daishenhe.png" alt="" :style="{width:'100px',height:'75px'}">
                </div>
                <div>
                    <div>
                        <span>骑手ID：</span><span>100000</span>
                    </div>
                    <div>
                        <span>真实姓名：</span><span>未认证</span>
                    </div>
                    <div>
                        <span>手机号码：</span><span>+8615231372</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span>工作类型：</span><span>全职专送/兼职众包</span>
                    </div>
                    <div>
                        <span>工作城市：</span><span>广东 深圳 龙华</span>
                    </div>
                    <div>
                        <span>工作地点：</span><span>民治街道大润达民治店</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span>来源：</span><span>外卖APP/骑手APP</span>
                    </div>
                </div>
            </div>
            <!-- 审核内容 -->
            <p :style="{fontSize:'15px',fontWeight:'600'}">审核内容</p>
            <hr :style="{margin:'10px 0',borderRight:'none',borderLeft:'none',borderBottom:'none',borderTop:'#e4e4e4 1px solid'}" />
            <div>
                <span>审核类型：</span>
                <span>注册报名</span>
            </div>
            <div>
                <span>提交时间：</span>
                <span>2022-09-10 10:55:33</span>
            </div>
      </div>
      <!-- 底部 -->
      <div class="footerBox">
            <div class="footer">
                <div :style="{backgroundColor:'#eef1fc',fontSize:'14px',fontWeight:'700',borderRadius:'5px',padding:'20px'}">
                    审<br />核<br />意<br />见
                </div>
                <div :style="{width:'60%'}">
                    <div :style="{margin:'25px'}">
                        <span>当前审核人：</span>
                        <span>周审核</span>
                    </div>
                    <div :style="{margin:'25px'}">
                        <span>工作城市：</span>
                        <span>广东 深圳 龙华</span>
                    </div>
                    <div :style="{margin:'25px'}">
                        <span>所属站点：</span>
                        <select name="" id="" :style="{width:'380px'}">
                            <option value="0">请选择站点</option>
                            <option value="1">站点1</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button class="backBtn" @click="goBack">取消</button>
                    <button class="confirmBtn">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../../assets/css/base_s.css"
export default {
  name: "dispatcherRecruitDetails",
  data() {
    return {
    };
  },
  components:{
  },
  created(){
    console.log(this.$route.params.id);
  },
  methods: {
    goBack(){//点击返回
      this.$router.go(-1)
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
.container{
    height: 400px;
}
.footerBox{
    height: 170px;
    background-color: #f8f8f8;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px 0;
}
.footer{
    display: flex;
    background-color: #fff;
    margin-top: 20px;
    height: 100%;
}
button{
    width: 70px;
    padding: 5px 15px;
    margin: 10px;
    border-radius: 5px;
}
.backBtn{
    background-color: #fff;
    border: 1px solid #d7d7d7;
}
.confirmBtn{
    border: none;
    background:linear-gradient(to bottom,#3e80e0,#1694e2);
}
.confirmBtn:hover{
    background:linear-gradient(to bottom,#3e7fe0c9,#1694e265);
}
</style>