<template>
    <div class="CommodityA">
       
         <div class="home"> 
         <p class="pageName">商品详情</p>
         <div class="returnA" @click="ReviewContent"><i class="el-icon-back"></i>返回</div>
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
                    <li>商品类型：   {{shopTypeA(passValue.goodsType) }}</li>
                    <li>中文描述：   {{passValue.cnGoodsDescription}}</li>
                    <li>英文描述：   {{passValue.cnGoodsDescription}}</li>
                    <li>中文主料：   {{passValue.cnGoodsDescription}}</li>
                    <li>英文主料：   {{passValue.cnGoodsDescription}}</li>
                    <li>中文口味：   {{passValue.cnGoodsDescription}}</li>
                    <li>英文口味：   {{passValue.cnGoodsDescription}}</li>
                    <li>制作时长：   {{passValue.productionDuration}}</li>
                    <li>过期日期：   {{passValue.productionDuration}}</li>
                </ul> 
                <div class="middleSingle" @click="goVerifyMemberDetail(passValue)">
                        查看单品样式<i class="el-icon-d-arrow-right" style="color:blue"></i>
                </div>
            </div>
            <div class="middleSecond">
                <ul>
                    <li>规格属性</li>
                    <li>中文属性：   {{passValue.cnGoodsDescription}}</li>
                    <li>英文属性：   {{passValue.cnGoodsDescription}}</li>
                    <li>属性标签：   加香菜 / Coriander 加葱花 / Scallion</li>
                    <li>价格：   {{passValue.goodsPrice}}</li>
                    <li>库存数量：   {{passValue.goodsInventory}}</li>
                    <li>打包费：   {{passValue.goodsPackingFee}}</li>
                </ul>
                <div class="middlePairA" >
                        无规格<i class="el-icon-d-arrow-right" style="color:blue"></i>
                </div>
                <div class="middlePairB">
                        单品规格<i class="el-icon-d-arrow-right" style="color:blue"></i>
                </div>
            </div>
            <div>
                  <ul>
                    <li>其他信息</li>
                    <li>是否新品：{{ifNew(passValue.newGoods)}}</li>
                    <li>是否促销：{{ifPromotion(passValue.promotionGoods) }}</li>
                    <li>促销折扣：   95%</li>
                    <li>生效日期：   2022-03-20 至 2022-05-20</li>
                    <li>每人每天限购：   1份</li>
                    <li>促销时段：   09:00-12:00, 18:00-20:00</li>
                </ul>
            </div>

            </div>  



        </div>
        <div class="below">
            <div class="belowLeft">
                <div>审核意见</div>
                <div>
                    <ul>
                        <li><span>当前审核人：{{passValue.englishName}}</span></li>
                        <li><span>审核结果：</span>
                               <el-radio v-model="radio" label="2">同意</el-radio>
                                <el-radio v-model="radio" label="1">拒绝</el-radio>
                        </li>
                        <li>
                            <span>拒绝原因：</span>
                           <select name="" id="">
                            <option value="1">请选择</option>
                            <option value="1">七天无理由退货</option>
                           </select>
                        </li>
                    </ul>
                </div>
            </div>
             <div class="belowRight">
                <div>补充说明：</div>
                <div>
                    <ul>
                        <li><el-input v-model="inputA" placeholder="请输入中文补充说明"></el-input><span>0/200(选填)</span></li>
                        <li><el-input v-model="inputB" placeholder="请输入中文补充说明"></el-input><span>0/200(选填)</span></li>
                        <li ><el-button v-on:click="ReviewContent">取消</el-button><el-button type="primary" v-on:click="ReviewContent">确定</el-button></li>
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
            inputA:'',
            inputB:'',
            passValue:""
        };
    },
    methods: {
        // 点击数据操作跳转审核详情
        goVerifyMemberDetail(data){
            console.log('PA', data);
            this.$router.push({
                path:'/ProductDetailsdoule',
                query:{
                    data}
            })
        },
        ReviewContent(){
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
        this.passValue = this.$route.query.data//拿到上一级的数据
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
    width: 32%;
    height: 400px;
    background-color: rgb(239, 236, 236);
    position: relative;
}
.middle li{
    height: 40px;
    font-size: 14px;
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
.below{
    width: 93%;
    height: 160px;
    background-color: #ffffff;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
}
.belowLeft{
    width: 30%;
    display: flex;
}
.belowLeft>:first-child{
    width: 15px;
    padding: 20px;
    background-color: aqua;
    border-radius: 5px;
    margin-right: 10px ;
}
.belowLeft>:last-child{
    width: 70%;
    height: 140px;
    padding-top: 20px;
    /* padding-bottom: 20px; */
    
}
.belowLeft>:last-child li{
    height: 50px;
}
.belowRight{
    width: 60%;
    height: 160px;
    display: flex;
}
.belowRight>:first-child{
    width: 80px;
    color: rgb(129, 140, 140);
    padding-top: 20px;
}
.belowRight>:last-child{
    width: 80%;
}
.belowRight>:last-child li{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
}
.belowRight>:last-child li span{
    width: 120px;
}
.middleSecond{
    position: relative;
}
.middlePairA{
    position: absolute;
    right: 20px;
    bottom: 60px;
    background-color: gray;
    border-left: 1px black solid;
    border-right: 1px black solid;
    border-radius: 5px;
    cursor: pointer;
}
.middlePairB{
    position: absolute;
    right: 20px;
    bottom: 20px;
    background-color: gray;
    border-left: 1px black solid;
    border-right: 1px black solid;
    border-radius: 5px;
    cursor: pointer;
}
.imgA{
    width: 130px;
    height: 130px;
}
</style>