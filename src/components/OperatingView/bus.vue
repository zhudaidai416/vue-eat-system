<template>
    <div class="delivery">
        <!-- 一排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge" v-for="item in shangjiaList" :key="item.id">
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
            <div class="rider-ge" v-for="item in shangjiaList" :key="item.id">
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
            <div class="rider-ge" v-for="item in shangjiaList" :key="item.id">
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
            <div class="rider-ge" v-for="item in shangjiaList" :key="item.id">
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
    name: 'busView',
    data(){
        return{
          shangjiaList : [
                {
                    id : '陈商家',
                    phone: '98765432111',
                    msg : '名下有3家店铺',
                    img : `https://tse4-mm.cn.bing.net/th/id/OIP-C.VoNBAOBN3Dc0wLzz-PgjlQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id : '楚湘坊',
                    phone: '98765432111',
                    msg : '名下有3家店铺',
                    img : `https://tse2-mm.cn.bing.net/th/id/OIP-C.eEjM033mZtMHGDFIB-pMMwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id : '孔记面馆',
                    phone: '98765432111',
                    msg : '名下有3家店铺',
                    img : `https://tse4-mm.cn.bing.net/th/id/OIP-C._oXWbNchX4t19ODE9DoH_AHaFj?w=244&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id : '四川火锅',
                    phone: '98765432111',
                    msg : '名下有3家店铺',
                    img : `https://tse2-mm.cn.bing.net/th/id/OIP-C.roDz9EpjDfPhjmGyZtYxZwHaFj?w=214&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7`
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