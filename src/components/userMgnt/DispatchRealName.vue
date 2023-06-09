<template>
    <div class="formContainer">
        <div>
            <p>认证状态：</p>
            <span>已认证</span>
        </div>
        <div>
            <p>真实姓名：</p>
            <span>李站长</span>
        </div>
        <div>
            <p>性别：</p>
            <span>男</span>
        </div>
        <div>
            <p>证件类型：</p>
            <span>居民身份证</span>
        </div>
        <div>
            <p>证件号：</p>
            <span>4***************2</span>
        </div>
        <div>
            <p>证件有效期：</p>
            <span>2035-08-13</span>
        </div>
        <div>
            <p>证件正面图：</p>
            <img src="../../assets/images/zhengjian.svg" alt="">
        </div>
        <div>
            <p>证件背面图：</p>
            <img src="../../assets/images/zhengjian.svg" alt="">
        </div>
    </div>
</template>
    
<script>
import "../../assets/css/base_s.css"
export default {
    name: "DispatchRealName",
    data() {
        return {
        };
    },
    methods: {},
};
</script>
    
<style scoped> 
.formContainer{
    margin: 10px 0;
    width: 80%;
    font-size: 13px;
}
.formContainer>div{
    margin: 20px 0; 
    display: flex;
}
.formContainer>div>p{
    width: 20%;
    color: #797979;
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