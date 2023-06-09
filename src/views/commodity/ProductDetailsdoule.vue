<template>
    <div class="CommodityA">
       
         <div class="home"> 
         <p class="pageName">商品详情</p>
         <div class="returnA" @click="returnB"><i class="el-icon-back"></i>返回</div>
         <div class="sub_container">
            <div class="top">
                <div class="topLeft"><img class="imgA" src="https://ts1.cn.mm.bing.net/th/id/R-C.17bfe1ee771b21c667df4395c99c02f1?rik=8EqSv1wB7l%2f4Gw&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20090714%2fbki-20090714174744-1571587087.jpg&ehk=fiS8yIkVAFMP37CnuwIdTmcT19VR9kySbh2mZ2U2xgU%3d&risl=&pid=ImgRaw&r=0" alt=""></div>
                <div class="topRight">
                    <div>
                        <ul>
                            <li>商品 I D：   {{passValue.goodsId}}</li>
                            <li>中文名称：   {{passValue.chineseName}}</li>
                            <li>英文名称：   {{passValue.cnGoodsDescription}}</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>商品编号： {{passValue.shopId}}</li>
                            <li>商品分类： {{passValue.cnGoodsDescription}}</li>
                            <li>所属店铺： {{passValue.cnGoodsDescription}}</li>
                        </ul>
                    </div>
                    <div>

                         <ul>
                            <li>商品状态： <span style="color:red">{{shopStu(passValue.goodsStatus)}}</span></li>
                            <li>创建时间： {{passValue.termOfValidity}}</li>
                            <li>修改时间： {{passValue.submitTime}}</li>
                        </ul>
                    </div>
                </div>

            </div>
            <p class="middleLabel"><i class="el-icon-caret-right " style="color:blue"></i>商品信息</p>
         <div class="middle">
            
            <div>
                <ul>
                    <li>商品描述</li>
                    <li>商品类型：   单品</li>
                    <li>中文描述：   广东河村地方特色早餐小吃</li>
                    <li>英文描述：   Guangdong special breakfast snacks</li>
                    <li>中文主料：   大米</li>
                    <li>英文主料：   Rice</li>
                    <li>中文口味：   清淡</li>
                    <li>英文口味：   Mild</li>
                    <li>制作时长：   5 min</li>
                    <li>过期日期：   2022-03-20</li>
                </ul>
                <div class="middleSingle" @click="goVerifyMemberDetail(passValue)">
                        查看套餐样式<i class="el-icon-d-arrow-right" style="color:blue"></i>
                </div>
            </div>
            <div>
                <ul>
                    <li>规格属性</li>
                    <li>套餐规格A：   双蛋肠粉 / Two egg Chang-fen / 9999份</li>
                    <li> &emsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;蛋肉肠粉 / Eggs & meat Chang-fen / 9999份</li>
                    <li>&emsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鸡蛋油条肠粉 / Egg & Fried bread stick Chang-fen / 9999份</li>
                    <li>套餐规格B：绿豆沙 / Green bean soup / 9999份</li>
                    <li>&emsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;豆浆 / Soy milk  / 9999份</li>
                    <li>中文属性：辅料</li>
                    <li>英文属性：SubsIDiary</li>
                    <li>属性标签：加香菜 / Coriander 加葱花 / Scallion</li>
                    <li>价格：₱120.00</li>
                </ul>
            </div>
            <div>
                  <ul>
                    <li>其他信息</li>
                    <li>是否新品：否</li>
                    <li>是否促销：是/li>
                    <li>促销折扣：   95%</li>
                    <li>生效日期：   2022-03-20 至 2022-05-20</li>
                    <li>每人每天限购：   1份</li>
                    <li>促销时段：   09:00-12:00, 18:00-20:00</li>
                </ul>
            </div>

            </div>  



        </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'CommodityA',
    data() {
        return {
            activeName: "first",
            currentPage: 1,
            radio: '1',
            passValue:""
        };
    },
    methods: {
        // 点击数据操作跳转审核详情
        goVerifyMemberDetail(data) {
            this.$router.push({
                path:'/ProductDetails',
                query:{
                    data
                }
            })
        },
        returnB(){
            this.$router.push('/goodsManagement')
        },
                //在售或下架
        shopStu(data){
            switch (data){
                case 1:
                    return "在售中";
                case 2:
                    return "已下架"
                default:
                    break
            }
        } ,
        //商品类型
        shopTypeA(data){
            switch (data){
                case 1 :
                    return '单品'
                case 2 :
                    return '套餐'
                default:
                    break
            }
        },
        //是否新品
        ifNew(data){
            switch (data) {
                case 1 :
                    return '新品'
                case 2 :
                    return '原货'
                default:
                    break
            }
        },
        //是否促销
        ifPromotion(data){
            switch (data) {
                case 1 :
                    return '促销产品'
                case 2 :
                    return '非促销产品'
                default:
                    break
            }
        },
    },
    created(){
        this.passValue = this.$route.query.data
        console.log('套餐',this.$route.query.data);
    }
}
</script>
  
<style scoped>
.home {
    background-color: #f5f5f5;
    position: relative;
}
.returnA{
    position: absolute;
    right: 50px;
    top: 20px;
    color: red;
    cursor: pointer;
}
.pageName {
    height: 60px;
    font-size: 18px;
    line-height: 60px;
    margin-left: 50px;
}

.sub_container {
    margin-left: 50px;
    margin-right: 50px;
    padding: 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
}

.top{
    width: 100%;
    height: 160px;
    background-color: rgb(239, 236, 236);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.topLeft{
    width: 15%;
    height: 160px;
    /* border: 1px red solid; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.topRight{
    width: 85%;
    height: 160px;
    /* border: 1px red solid; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.topRight li{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 10px;
}
.middleLabel{
    padding: 20px 20px 20px 0;
}
.middle{
    display: flex;
    justify-content: space-between;
}
.middle>div{
    position: relative;
    width: 32%;
    height: 400px;
    background-color: rgb(239, 236, 236);
}
.middle li{
    height: 40px;
    font-size: 14px;
}
.imgA{
    width: 130px;
    height: 130px;
    
}
.middle :first-child>div{
    position: absolute;
    right: 20px;
    bottom: 20px;
    background-color: gray;
    border-left: 1px black solid;
    border-right: 1px black solid;
    border-radius: 5px;
    cursor: pointer;
}
</style>