<template>
    <div class="delivery">
        <!-- 一排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge" v-for="item in huiyuanList" :key="item.id">
                <!-- 左侧图片 -->
                <img :src="item.img" alt="图片加载失败">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">{{item.id}}</div>
                    <div class="phone">+86{{item.phone}}</div>
                    <div class="song">{{item.msg}}</div>
                </div>
            </div>
        </div>
        <!-- 第二排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge" v-for="item in huiyuanList" :key="item.id">
                <!-- 左侧图片 -->
                <img :src="item.img" alt="图片加载失败">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">{{item.id}}</div>
                    <div class="phone">+86{{item.phone}}</div>
                    <div class="song">{{item.msg}}</div>
                </div>
            </div>
        </div>
        <!-- 第三排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge" v-for="item in huiyuanList" :key="item.id">
                <!-- 左侧图片 -->
                <img :src="item.img" alt="图片加载失败">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">{{item.id}}</div>
                    <div class="phone">+86{{item.phone}}</div>
                    <div class="song">{{item.msg}}</div>
                </div>
            </div>
        </div>
        <!-- 第四排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge" v-for="item in huiyuanList" :key="item.id">
                <!-- 左侧图片 -->
                <img :src="item.img" alt="图片加载失败">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">{{item.id}}</div>
                    <div class="phone">+86{{item.phone}}</div>
                    <div class="song">{{item.msg}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "usersView",
    data(){
        return{
            huiyuanList : [
                {
                    id : '大默1',
                    phone: '12345678911',
                    msg : '近90天下单6次',
                    img : `https://ts2.cn.mm.bing.net/th?id=OIP-C.jHUH4s7TQ48X_B-1iozuJgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2`
                },
                {
                    id : '小默2',
                    phone: '12345678911',
                    msg : '近90天下单16次',
                    img : `https://tse3-mm.cn.bing.net/th/id/OIP-C.m3qcuNnWaS6L8I2J3FuIsAHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id : '小默3',
                    phone: '12345678911',
                    msg : '近90天下单48次',
                    img : `https://tse3-mm.cn.bing.net/th/id/OIP-C.tpOs1kFtRNfu6pzkNl1auQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id : '小默4',
                    phone: '12345678911',
                    msg : '近90天下单76次',
                    img : `https://tse4-mm.cn.bing.net/th/id/OIP-C.UgNI8PL0w756fAdgVxg7BQHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7`
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