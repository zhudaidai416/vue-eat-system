<template>
    <div>
        <div class="formContainer" v-for="item in dispatcherDetailList" :key="item.id">
            <div>
                <p>认证状态：</p>
                <span>已认证</span>
            </div>
            <div>
                <p>发证城市：</p>
                <span>{{item.fazhengchengshi}}</span>
            </div>
            <div>
                <p>健康证号：</p>
                <span>{{item.jiankangzhenghao}}</span>
            </div>
            <div>
                <p>证件有效期：</p>
                <span>{{item.zhengjianyouxiaoqi}}</span>
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
    </div>

</template>
    
<script>
import "../../assets/css/base_s.css"
export default {
    name: "DispatcherHealth",
    data() {
        return {
            dispatcherDetailList:[]
        };
    },
    created(){
    this.getDispatcherDetailList()
    },
    methods: {
        // 获取数据
        getDispatcherDetailList(){
        this.$axios({
            method: 'GET',
            url: 'http://127.0.0.1:4523/m1/1680117-0-default/DispatcherHosted/Details',
            params: {
            id:1000
            }
        })
            .then(res => {
            this.dispatcherDetailList = res.data
            console.log(this.dispatcherDetailList);
            })
            .catch(err => {
            console.log("请求失败", err)
            });
        },
    }
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