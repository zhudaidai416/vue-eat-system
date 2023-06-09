<template>
    <div class="formContainer">
        <div>
            <p>详细地址：</p>
            <span>广东省深圳市龙华区民治渠道</span>
        </div>
        <div>
            <p>配送时段：</p>
            <span>11:00-14:00,17:00-20:00,22:00-次日05:00</span>
        </div>
        <div>
            <p>建站时间：</p>
            <span>2022-03-20 18:20:40</span>
        </div>
        <div>
            <p>开通时间：</p>
            <span>2022-03-20 18:20:40</span>
        </div>
        <div>
            <p>修改时间：</p>
            <span>2022-03-20 18:20:40</span>
        </div>
        <button class="editbtn" @click="goUrl('/editDispatch')"><i class="el-icon-edit"></i>编辑配送站</button>
    </div>
</template>
    
<script>
import "../../assets/css/base_s.css"
export default {
    name: "DispatchBaseInformation",
    data() {
        return {
        };
    },
    methods: {
        goUrl(url){
            this.$router.push(url)
        },
    },
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
.editbtn{
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