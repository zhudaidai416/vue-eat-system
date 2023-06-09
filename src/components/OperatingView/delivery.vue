<template>
    <div class="delivery">
        <!-- 一排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge"  v-for="item in qishouList" :key="item.id">
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
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
        </div>
        <!-- 第三排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
        </div>
        <!-- 第四排 -->
        <div class="rider-pai">
            <!-- 一个 -->
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
            <div class="rider-ge">
                <!-- 左侧图片 -->
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.yQH2vOvSHq2KFyiFjSoFiwAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
                <!-- 右侧文字 -->
                <div class="right">
                    <div class="top">王骑手</div>
                    <div class="phone">+8613612345678</div>
                    <div class="song">全职专送</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'deliveryView',
    data(){
        return{
            qishouList:[
                {
                    id :'王骑手',
                    phone:'789456153545',
                    msg:'全职专送',
                    img:`https://tse2-mm.cn.bing.net/th/id/OIP-C.BZstxKZxubaYSC3vATGUXgHaG7?w=177&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id :'刘骑手',
                    phone:'7894564564535',
                    msg:'全职专送',
                    img:`https://tse1-mm.cn.bing.net/th/id/OIP-C.uReaKR8k9l5tVMmLi8H0SwHaEx?w=269&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id :'朱骑手',
                    phone:'7894435434545',
                    msg:'全职专送',
                    img:`https://tse3-mm.cn.bing.net/th/id/OIP-C.yj9iZhuw89MGPN5K0eDQqAHaEh?w=257&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7`
                },
                {
                    id :'李骑手',
                    phone:'435456153545',
                    msg:'全职专送',
                    img:`https://www.mp3pc.com/uploads/cf94cd76a88eb67f73a47f27dc35aecb.jpg`
                },
            ]
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