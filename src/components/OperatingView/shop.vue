<template>
    <div class="delivery">
        <!-- 一排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge"  v-for="item in dianpuList" :key="item.id">
                <!-- 左侧图片 -->
                <img :src="item.img" alt="图片加载失败">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">{{item.id}}</div>
                    <div class="phone">{{item.name}}</div>
                    <div class="song">+86{{item.phone}}</div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: "shopView",
    data(){
        return{
            dianpuList : [
                {
                    id : '辣小龙小龙虾湘菜馆...',
                    name: '张店长',
                    phone : '8765432199',
                    img: `https://tse4-mm.cn.bing.net/th/id/OIP-C.-ntmvUpNNXBYL5pAc2gjbQAAAA?w=148&h=150&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id : '茶道',
                    name: '陈店长',
                    phone : '8765432199',
                    img: `https://tse4-mm.cn.bing.net/th/id/OIP-C.PR9bKmPW6MbdZC8GBTE0FAAAAA?w=200&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id : '维尼小铺',
                    name: '朱店长',
                    phone : '8765432199',
                    img: `https://tse3-mm.cn.bing.net/th/id/OIP-C.yPzSYtaOGa_qY9DoYhM8JAHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id : 'DM',
                    name: '衡店长',
                    phone : '8765432199',
                    img: `https://tse4-mm.cn.bing.net/th/id/OIP-C.RE2yxMgT8h1a6vCjm9A1KwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                
            ],
        }
    }
}
</script>
<style scoped>
.delivery{
    width: 100%;
    height: 100%;
    /* background-color: aqua; */
}
.rider-pai{
    width: 100%;
    height: 110px;
    /* background-color: aquamarine; */
    margin: 0 0 20px 0;
    display: flex;
    justify-content: space-evenly;
}
.rider-ge{
    width: 290px;
    height: 100%;
    /* background-color: blue; */
    margin-top: 1px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    /* border: 1px solid blue; */
    border-radius: 3%;
}
.rider-ge:hover{
    cursor: pointer;
    outline: 1px solid blue;
}
.rider-ge img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
</style>