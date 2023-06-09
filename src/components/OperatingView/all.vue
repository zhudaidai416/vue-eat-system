<template>
<!-- 外层大盒子 -->
    <div class="da">
        <!-- 用户标题 -->
        <div class="bio">
            <div class="left"><i class="el-icon-caret-right"></i>用户</div>
            <div class="end">全部4个用户</div>
        </div>
        <!-- 用户图 -->
        <div class="one">
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
        </div>
        <!-- 商家标题 -->
        <div class="bio">
            <div class="left"><i class="el-icon-caret-right"></i>商家</div>
            <div class="end">全部16个商家</div>
        </div>
        <!-- 商家图 -->
        <div class="one">
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
        </div>
        <!-- 店铺标题 -->
        <div class="bio">
            <div class="left"><i class="el-icon-caret-right"></i>店铺</div>
            <div class="end">全部4个店铺</div>
        </div>
        <!-- 店铺图 -->
        <div class="one">
            <!-- 一排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge" v-for="item in dianpuList" :key="item.id">
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
        <!-- 站长 -->
        <div class="bio">
            <div class="left"><i class="el-icon-caret-right"></i>站长</div>
            <div class="end">全部6个站长</div>
        </div>
        <!-- 站长图 -->
        <div class="one">
            <!-- 一排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge" v-for="item in zhanzhangList" :key="item.id">
                <!-- 左侧图片 -->
                <img :src="item.img" alt="图片加载失败">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">{{item.id}}</div>
                    <div class="phone">{{item.msg}}</div>
                    <div class="song">+86{{item.phone}}</div>
                </div>
            </div>
        </div>
        </div>
        <!-- 商品 -->
        <div class="bio">
            <div class="left"><i class="el-icon-caret-right"></i>商品</div>
            <div class="end">全部6个商品</div>
        </div>
        <!-- 商品图 -->
        <div class="one">
            <!-- 一排 -->
        <div class="rider-pai">
            <router-link to="distributionManagement/dispatchDetails/:id">
            <!-- 一个 -->
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.eNxOLT25Erx0vGdXCpbkHwHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">河村石墨肠粉(双蛋加肉</div>
                    <div class="phone">价格：￥10.00起</div>
                    <div class="song">库存：999</div>
                </div>
            </div>
            </router-link>
            <div class="rider-ge-co">
               
            </div>
            <div class="rider-ge-co">
               
            </div>
            <div class="rider-ge-co">
                
            </div>
        </div>
        </div>
        <!-- 订单 -->
        <div class="bio">
            <div class="left"><i class="el-icon-caret-right"></i>订单</div>
            <div class="end">全部6个订单</div>
        </div>
        <!-- 订单图 -->
        <div class="one">
            <!-- 一排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.ROK1e0ZN6iaAk0KVHySZawD6D6?w=173&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">香辣鸡块汉堡包,百事.....</div>
                    <div class="phone">金额：￥226.00</div>
                    <div class="song">状态：交易成功</div>
                </div>
            </div>
           <div class="rider-ge-co">
                
            </div>
            <div class="rider-ge-co">
                
            </div>
            <div class="rider-ge-co">
            
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'allView',
    data () {
        return {
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
            zhanzhangList : [
                {
                    id : '赵站长',
                    msg : '广东深圳龙华区民治街...',
                    phone: '12345678911',
                    img : `https://tse3-mm.cn.bing.net/th/id/OIP-C.SsYONy0m1DcfmqRWUfvTSwHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id : '郑站长',
                    msg : '广东深圳龙华区民治街...',
                    phone: '12345678911',
                    img : `https://tse3-mm.cn.bing.net/th/id/OIP-C.7Lm1tnz20vTDgYh8RpFiEAHaHs?w=174&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id : '赵站长',
                    msg : '广东深圳龙华区民治街...',
                    phone: '12345678911',
                    img : `https://tse2-mm.cn.bing.net/th/id/OIP-C.C-A-RGs56Bothm-jh6QHqAAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id : '徐站长',
                    msg : '广东深圳龙华区民治街...',
                    phone: '12345678911',
                    img : `https://tse3-mm.cn.bing.net/th/id/OIP-C.sEGCBOVYcBqSYiVPkFIaOQAAAA?w=129&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                
            ]
        }
    }
}
</script>
<style scoped>
.da{
    width: 100%;
    height: 100%;
    /* background-color: aqua; */
}
.one{
    width: 100%;
    height: 120px;
    /* background-color: red; */
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
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    /* border: 1px solid blue; */
    border-radius: 3%;
}
.rider-ge-co{
    width: 290px;
    height: 100%;
    
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
.bio{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 0 15px;
}
.el-icon-caret-right{
    color: blue;
}
.end{
    padding-right: 30px;
    font-size: 12px;
}
.end:hover{
    color: blue;
    cursor: pointer;
}
div > a {
    color: black;
}
</style>