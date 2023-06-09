<template>
    <div class="home-body-situation">
        <div class="home-body-situation-box situation-box1" @click="dingan">
            <div class="home-body-situation-data">
                <span class="situation-data-span1">今日完成订单</span>
                <span class="situation-data-today">77,051</span>
                <span class="situation-data-yesterday">昨日 8,063</span>
            </div>
            <div class="home-body-situation-image">
                <img src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u806.svg" />
            </div>
        </div>
        <div class="home-body-situation-box situation-box2" @click="yonghu">
            <div class="home-body-situation-data">
                <span class="situation-data-span2">今日新增用户</span>
                <span class="situation-data-today">4,051</span>
                <span class="situation-data-yesterday">昨日 2,783</span>
            </div>
            <div class="home-body-situation-image">
                <img src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u813.svg" />
            </div>
        </div>
        <div class="home-body-situation-box situation-box3" @click="dianpu">
            <div class="home-body-situation-data">
                <span class="situation-data-span3">今日入驻店铺</span>
                <span class="situation-data-today">400</span>
                <span class="situation-data-yesterday">昨日 205</span>
            </div>
            <div class="home-body-situation-image">
                <img src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u819.svg" />
            </div>
        </div>
        <div class="home-body-situation-box situation-box4" @click="peisongyuan">
            <div class="home-body-situation-data">
                <span class="situation-data-span4">今日新增配送员</span>
                <span class="situation-data-today">1,500</span>
                <span class="situation-data-yesterday">昨日 1,085</span>
            </div>
            <div class="home-body-situation-image">
                <img src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u825.svg" />
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"GeneralSituation",
        data(){
            return{}
        },
        methods:{
            dingan(){
                this.$router.push("orderManagement")
            },
            yonghu(){
                this.$router.push("user")
            },
            dianpu(){
                this.$router.push("storeManagement")
            },
            peisongyuan(){
                this.$router.push("marKiManagement")
            }
        }
    }
</script>

<style scoped>
    .home-body-situation{
        padding: 0 20px 20px 20px;
        display: flex;
    }
    .home-body-situation-data{
        padding: 25px 0 25px 20px;
        display: flex;
        flex-direction: column;    
    }
    .situation-data-today{
        color: #000000;
        font-size: 28px;
    }
    .situation-data-yesterday{
        color: #999999;
        font-size: 12px;
    }
    .home-body-situation-image{
        padding-right: 20px;
    }
    .home-body-situation-box{
        width: 23%;
        margin-right: 2%;
        border-radius: 5px 5px 5px 5px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between; 
    }
    .home-body-situation-box:hover{
        cursor: pointer;
    }
    .situation-box1{
        border-left: 3px #ff0000 solid;
    }
    .situation-data-span1{
        color: #ff0000;
        font-size: 14px;
    }
    .situation-box2{
        border-left: 3px #ff9900 solid;
    }
    .situation-data-span2{
        color: #ff9900;
        font-size: 14px;
    }
    .situation-box3{
        border-left: 3px #c280ff solid;
    }
    .situation-data-span3{
        color: #c280ff;
        font-size: 14px;
    }
    .situation-box4{
        border-left: 3px #ec808d solid;
    }
    .situation-data-span4{
        color: #ec808d;
        font-size: 14px;
    }
</style> 