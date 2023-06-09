<template>
    <div>
        <div class="formContainer" v-for="item in dispatcherDetailList" :key="item.id">
            <div>
                <p>邮箱：</p>
                <span>{{item.email}}</span>
            </div>
            <div>
                <p>工作类型：</p>
                <span>{{item.workType}}</span>
            </div>
            <div>
                <p>工作城市：</p>
                <span>{{item.workCity}}</span>
            </div>
            <div>
                <p>工作地点：</p>
                <span>{{item.address}}</span>
            </div>
            <div>
                <p>所属站点：</p>
                <span>{{item.station}}</span>
            </div>
            <div>
                <p>骑手状态：</p>
                <span>{{item.state}}</span>
            </div>
            <div>
                <p>押金：</p>
                <span>{{item.yajin}}</span>
            </div>
            <div>
                <p>押金状态：</p>
                <span>{{item.yajinzhuangtai}}</span>
            </div>
            <div>
                <p>服装：</p>
                <span>{{item.fuzhuang}}</span>
            </div>
            <div>
                <p>餐箱：</p>
                <span>{{item.canxiang}}</span>
            </div>
            <div>
                <p>交通工具：</p>
                <span>{{item.jiaotonggongju}}</span>
            </div>
            <div>
                <p>注册时间：</p>
                <span>{{item.zhuceshijian}}</span>
            </div>
            <div>
                <p>开通时间：</p>
                <span>{{item.kaitongshijian}}</span>
            </div>
            <div>
                <p>最后登录时间：</p>
                <span>{{item.zuihoudenglushijian}}</span>
            </div>
        </div>
    </div>
    
</template>
    
<script>
import "../../assets/css/base_s.css"
export default {
    name: "DispatcherBaseInformation",
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