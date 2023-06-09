<template>
    <div class="formContainer">
        <p>配送员送单规则</p>
        <div>
            <p>配送员坐标上传：</p>
            <span>配送员送单过程中实时上传坐标位置</span>
            <span>
                <el-switch
                    v-model="switchValue"
                    active-color="#2c84e1"
                    inactive-color="#e4e4e4">
                </el-switch>
            </span>
        </div>
        <div>
            <p :style="{fontSize:'16px'}">配送员抢单上限：</p>
            <span>当配送员持单量达到</span>
            <el-input-number size="mini" v-model="num1"></el-input-number>
            <span>单时，则不能再从团队抢单群中抢单（持单量是指配送员已接单且未送达的订单数量，0表示无上限）</span>
        </div>
        <div>
            <p>配送员自动接单：</p>
            <div>
               <span>以下哪种模式中，站长指派订单给配送员，配送员无需手动接单，直接进入配送员【我的订单】列表中并推送通知</span>
                <div class="paidan">
                    <input type="checkbox" name="" id="xtzdpd"><label for="xtzdpd">系统自动派单</label>
                    <input type="checkbox" name="" id="tdsdpd"><label for="tdsdpd">团队手动派单</label>
                </div> 
            </div>
        </div>
        <div>
            <p>抢单群订单排序：</p>
            <span>系统向配送员APP推送群抢单时，配送员看到的订单顺序为：</span>
            <select name="" id="">
                <option value="0">最新的订单排在最前</option>
                <option value="1">最新的订单排在最后</option>
            </select>
        </div>
        <p>配送员权限</p>
        <div>
            <p>配送员权限管理：</p>
            <div>
                <span>团队可赋予配送员某些权限，配送员方可在配送员APP有相应的操作</span>
                <div class="power">
                    <div>
                        <p class="powerTitle">录单权限</p>
                        <p>配送员可在配送员APP中帮商家手动录单</p>
                    </div>
                    <div>
                        <p class="powerTitle">拒单权限</p>
                        <p>对于团队手动指派的订单，配送员可以拒绝接收</p>
                    </div>
                    <div>
                        <p class="powerTitle">转单权限</p>
                        <p>配送员已接的订单，若因故无法继续配送时可以转单给其他配送员</p>
                    </div>
                </div>
            </div>
            
        </div>
        <button class="btn">保存</button>
    </div>
</template>
    
<script>
import "../../assets/css/base_s.css"
export default {
    name: "DispatchRules",
    data() {
        return {
            switchValue:true,
            num1:1,
        };
    },
    methods: {},
};
</script>
    
<style scoped> 
.formContainer{
    margin: 10px 0;
    /* width: 90%; */
    font-size: 13px;
}
.formContainer>p{
    font-size: 16px;
    font-weight: 700;
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
.paidan{
    margin-top: 20px;
}
.paidan>input{
    margin-left:40px;
}
.power{
    display: flex;
}
.power>div{
    border: 1px #95abec solid;
    border-radius: 5px;
    background-color: #eef1fc;
    height: 80px;
    width: 200px;
    padding: 10px;
    margin: 10px;
}
.powerTitle{
    font-size: 16px;
    font-weight: 700;
    text-align: center ;
}
</style>