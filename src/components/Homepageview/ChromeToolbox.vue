<template>
    <div class="home-body-tool">
        <div class="home-body-tool-box1">
            <div class="home-body-tool-data">
                <div class="home-body-tool-data-box" @click="pingtaitongzhi">
                    <img class="home-body-tool-data-box-img" src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u831.svg" />
                    <span class="home-body-tool-data-box-span">
                        发布平台通知
                    </span>
                </div>
                <div class="home-body-tool-data-box" @click="guanggaotoufang">
                    <img class="home-body-tool-data-box-img" src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u834.svg" />
                    <span class="home-body-tool-data-box-span">
                        发布广告投放
                    </span>
                </div>
                <div class="home-body-tool-data-box" @click="baominghuodong">
                    <img class="home-body-tool-data-box-img" src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u837.svg" />
                    <span class="home-body-tool-data-box-span">
                        发布报名活动
                    </span>
                </div>
                <div class="home-body-tool-data-box" @click="pingtaihuodong">
                    <img class="home-body-tool-data-box-img" src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u840.svg" />
                    <span class="home-body-tool-data-box-span">
                        发布平台活动
                    </span>
                </div>
            </div>
        </div>
        <div>
            <img src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u857.svg" />
        </div>
        <div class="home-body-tool-box2">
            <div class="home-body-tool-data">
                <div class="home-body-tool-data-box" @click="tianjiapeisongzhan">
                    <img class="home-body-tool-data-box-img" src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u843.svg" />
                    <span class="home-body-tool-data-box-span">
                        添加配送站
                    </span>
                </div>
                <div class="home-body-tool-data-box" @click="tianjiapeisongyuan">
                    <img class="home-body-tool-data-box-img" src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u846.svg" />
                    <span class="home-body-tool-data-box-span">
                        添加配送员
                    </span>
                </div>
                <div class="home-body-tool-data-box" @click="changjianwenti">
                    <img class="home-body-tool-data-box-img" src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u849.svg" />
                    <span class="home-body-tool-data-box-span">
                        添加常见问题
                    </span>
                </div>
                <div class="home-body-tool-data-box" @click="elietianqi">
                    <img class="home-body-tool-data-box-img" src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u852.svg" />
                    <span class="home-body-tool-data-box-span">
                        添加恶劣天气
                    </span>
                </div>
                <div class="home-body-tool-data-box" @click="mingganci">
                    <img class="home-body-tool-data-box-img" src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u855.svg" />
                    <span class="home-body-tool-data-box-span">
                        添加敏感词
                    </span>
                </div>
                <div class="home-body-tool-data-box" @click="zizhanghao">
                    <img class="home-body-tool-data-box-img" src="https://cdn3.axureshop.com/demo/2031128/images/%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5/u859.svg" />
                    <span class="home-body-tool-data-box-span">
                        添加子帐号
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"ChromeToolbox",
        data(){
            return{}
        },
        methods:{
            pingtaitongzhi(){
                this.$router.push("IssueNotic")
            },
            guanggaotoufang(){
                this.$router.push("publishAdvertisement")
            },
            baominghuodong(){
                this.$router.push("PostNewActivity")
            },
            pingtaihuodong(){
                this.$router.push("addActives")
            },
            tianjiapeisongzhan(){
                this.$router.push("addDispatch")
            },
            tianjiapeisongyuan(){
                this.$router.push("marKiManagement")
            },
            changjianwenti(){
                this.$router.push("helpCenter")
            },
            elietianqi(){

            },
            mingganci(){
                this.$router.push("settings-sensitive")
            },
            zizhanghao(){
                this.$router.push("settings-account")
            },
        }
    }
</script>

<style scoped>
    .home-body-tool{
        margin: 20px 50px 20px 20px;
        border-radius: 5px 5px 5px 5px;
        border-left: 3px #4E73DF solid;
        background: white;
        display: flex;
        align-items: center;
    }
    .home-body-tool-box1{
        width: 38%;
        padding: 0 2%;
    }
    .home-body-tool-box2{
        width: 55%;
        padding: 0 2%;
    }
    .home-body-tool-data{
        display: flex;
        justify-content: space-around;
    }
    .home-body-tool-data-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .home-body-tool-data-box:hover{
        cursor: pointer;
        color: rgb(78, 115, 223);
    }
    .home-body-tool-data-box-img{
        width: 32px;
        height: 30px;
        padding-top: 27px;
        padding-bottom: 18px;
    }
    .home-body-tool-data-box-span{
        font-size: 14px;
        padding-bottom: 27px;
    }
</style>