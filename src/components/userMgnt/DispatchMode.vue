<template>
    <div class="formContainer">
        <p>• 系统提供 2 种配送调度模式，站长可根据团队的实际业务情况进行选择；</p>
        <p>• 仅支持开启其中一种模式；</p>
        <p>• 默认开启【抢派混合模式】。</p>
        <div>
            <p :style="{fontSize:'16px'}">抢派混合模式：</p>
            <span>
                <el-switch
                    v-model="switchValue1"
                    active-color="#2c84e1"
                    inactive-color="#e4e4e4">
                </el-switch>
            </span>
            <span>开启后，团队可手动发单到抢单群或指派到人</span>
        </div>
        <div>
            <p :style="{fontSize:'16px'}">智能派单模式：</p>
            <span>
                <el-switch
                    v-model="switchValue2"
                    active-color="#2c84e1"
                    inactive-color="#e4e4e4">
                </el-switch>
            </span>
            <span>开启后，系统会根据调度规则，自动将订单指派给配送员</span>
        </div>
        <div>
            <p>调度范围限制：</p>
            <span>订单仅指派给距离取单地址</span>
            <el-input-number size="mini" v-model="num1"></el-input-number>
            <span>km范围内的配送员</span>
        </div>
        <div>
            <p>配送员持单量限制：</p>
            <span>当配送员持单量达到</span>
            <el-input-number size="mini" v-model="num2"></el-input-number>
            <span>单时，系统不再向该配送员派单（持单量是指配送员已接单且未送达的订单数量，0表示不限制单量）</span>
        </div>
        <div>
            <p>配送员派单优先级：</p>
            <span>订单指派给配送员，根据配送员身份设置优先级规则：</span>
            <select name="" id="">
                <option value="0">无优先级</option>
                <option value="1">全职优先</option>
                <option value="2">兼职优先</option>
            </select>
        </div>
        <div>
            <p>预订单调度时长：</p>
            <span>系统根据预订单送达时间,提前</span>
            <el-input-number size="mini" v-model="num3"></el-input-number>
            <span>分钟自动指派订单（例如：顾客10:30下单，送达时间为12:00，设置提前45分钟派单；则订单会在11:15自动派单给配送员）</span>
        </div>
        <div>
            <p>自动改派时长：</p>
            <span>订单已被指派，超过</span>
            <el-input-number size="mini" v-model="num4"></el-input-number>
            <span>分钟后，若配送员仍未接单时，系统会自动将该订单改派给其他配送员</span>
        </div>
        <div>
            <p>指派单被拒绝：</p>
            <span>若订单指派给配送员，配送员拒绝接单时，则订单将立即自动改派给其他配送员</span>
        </div>
        <div>
            <p>调度失败通知：</p>
            <span>若未找到符合派单标准的配送员时，即视为调度失败；团队可手动指派订单，同时系统每隔1分钟将会再次执行指派配送员</span>
        </div>
        <button class="btn">保存</button>
    </div>
</template>
    
<script>
import "../../assets/css/base_s.css"
export default {
    name: "DispatchMode",
    data() {
        return {
            switchValue1:true,
            switchValue2:true,
            // 计数器
            num1:1,
            num2:1,
            num3:1,
            num4:1,
        };
    },
    methods: {},
};
</script>
    
<style scoped> 
.formContainer{
    margin: 10px 0;
    width: 100%;
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
    width: 14%;
    font-size: 13px;
    font-weight: 700;
}
.btn{
    color:#fff;
    border: none;
    background:linear-gradient(to bottom,#3e80e0,#1694e2);
    padding: 5px 10px;
    font-size: 13px;
    border-radius: 5px;
    margin-left: 150px;
    margin-top: 20px;
}
.btn:hover{
    background:linear-gradient(to bottom,#3e7fe0c9,#1694e265);
}
</style>