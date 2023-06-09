<template>
    <div class="formContainer">
        <p>• 若已设置配送时长时，则订单耗时采用倒倒计时展示；</p>
        <p>• 若团队未设置配送时长，则订单耗时采用正计时展示。</p>
        <p :style="{fontSize:'16px',fontWeight:'700',color:'#000'}">配送员时长考核</p>
        <p>团队可设置配送过程中限定配送时长 ，超过限定时长则视为超时；并向团队后台推送通知，在【订单管理_异常订单】中标红且排列最前提示。</p>
        <div>
            <p>限定到店时间：</p>
            <span>从配送员接单起算,</span>
            <el-input-number size="mini" v-model="num1"></el-input-number>
            <span>分钟内到店</span>
        </div>
        <div>
            <p>限定送达时间：</p>
            <span>从配送员接单起算,</span>
            <el-input-number size="mini" v-model="num2"></el-input-number>
            <span>分钟内到达</span>
        </div>
        <p :style="{fontSize:'16px',fontWeight:'700',color:'#000'}">配送员超时预警</p>
        <p>团队可设置各个环节的超时预警，让相应的人员能够及时处理；以下设置仅作为预警通知，不纳入考核机制。（0表示不预警）</p>
        <div>
            <p>从订单发入团队起算：：</p>
            <div>
                <div>
                    <span>超出</span>
                    <el-input-number size="mini" v-model="num3"></el-input-number>
                    <span>分钟团队未调度订单，则向团队后台推送通知，并在【调度管理_指派订单】中标红且排列最前提示</span>
                </div>
                <div>
                    <span>超出</span>
                    <el-input-number size="mini" v-model="num4"></el-input-number>
                    <span>分钟配送员未接单，则向团队后台推送通知，并在【调度管理_指派订单】中标红且排列最前提示</span>
                </div>
                
            </div>
        </div>
        <div>
            <p>从订单发入团队起算：：</p>
            <div>
                <div>
                    <span>超出</span>
                    <el-input-number size="mini" v-model="num5"></el-input-number>
                    <span>分钟配送员未到店，则向团队后台推送通知，并在【订单管理_异常订单】中标橙且排列前面提示</span>
                </div>
                <div>
                    <span>超出</span>
                    <el-input-number size="mini" v-model="num6"></el-input-number>
                    <span>分钟配送员未接单，则向团队后台推送通知，并在【调度管理_指派订单】中标红且排列最前提示</span>
                </div>
                <div>
                    <span>超出</span>
                    <el-input-number size="mini" v-model="num7"></el-input-number>
                    <span>分钟配送员未送达，则向团队后台推送通知，并在【订单管理_异常订单】中标橙且排列前面提示</span> 
                </div>
                
            </div>
        </div>
        <button class="btn">保存</button>
    </div>
</template>
    
<script>
import "../../assets/css/base_s.css"
export default {
    name: "DispatchDuration",
    data() {
        return {
            switchValue1:true,
            switchValue2:true,
            // 计数器
            num1:15,
            num2:45,
            num3:5,
            num4:5,
            num5:0,
            num6:0,
            num7:0,
        };
    },
    methods: {},
};
</script>
    
<style scoped> 
.formContainer{
    margin: 10px 0;
    width: 90%;
    font-size: 13px;
}
.formContainer>p{
    font-size: 13px;
    color: #999999;
    margin: 15px 0;
}
.formContainer>div{
    margin: 20px 0; 
    display: flex;
}
.formContainer>div>p{
    width: 20%;
    font-size: 13px;
    font-weight: 700;
}
.btn{
    color:#fff;
    border: none;
    background:linear-gradient(to bottom,#3e80e0,#1694e2);
    padding: 5px 15px;
    font-size: 13px;
    border-radius: 5px;
    margin-left: 150px;
    margin-top: 20px;
}
.btn:hover{
    background:linear-gradient(to bottom,#3e7fe0c9,#1694e265);
}
.formContainer>div>div>div{
    margin-bottom: 10px;
}
</style>