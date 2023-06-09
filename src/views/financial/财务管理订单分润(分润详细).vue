<template>
    <div class="yemian">
        <div class="xiangxi">
            <div><strong>订单详细</strong></div>
            <div class="dingdanxiangxi">
                <div class="wenzi">
                    <div>订单号：</div>
                    <div>订单类型：</div>
                    <div>买家昵称：</div>
                    <div>收获地址：</div>
                    <div>店铺名称：</div>
                    <div>店铺地址：</div>
                    <div>配送方式：</div>
                    <div>配送员：</div>
                    <div>商品明细：</div>
                </div>
                <div class="neirong">
                    <div>{{dingdanbianhao}}<span>详情</span></div>
                    <div>{{dingdanleixing}}</div>
                    <div>{{maijianicheng}}</div>
                    <div>{{shouhuodizhi}}</div>
                    <div>{{dianpumingcheng}}</div>
                    <div>{{dianpudizhi}}</div>
                    <div>{{peisongfangshi}}</div>
                    <div>{{peisongyuan}}{{dianhua}}</div>
                    <div>
                        <div style="display: flex;width: 100%;height: 100%;">
                            <div class="shangpingtupian"><img src="../../assets/images/未定义图片.png" alt=""></div>
                            <div class="xinxineirong">
                                <div>
                                    <span>金枕榴莲薄饼披萨</span><span><strong>x1</strong></span>
                                </div>
                                <div>
                                    <span>规格：七寸</span>
                                </div>
                                <div>
                                    <span>规格:中辣</span><span>₱285.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="xinxi">
            <div><strong>分润信息</strong></div>
            <div>
                <div><i class="el-icon-caret-right" style="color: #4e73df;"></i>订单金额</div>
                <div>
                    <template>
                        <el-table
                        class="tableset"
                        :header-cell-style="{background:'#eef1fc'}"
                        :data="dingdandata"
                        style="width: 100%">
                        <el-table-column
                            prop="shangpingzongjia"
                            label="商品总价"
                            width="110">
                        </el-table-column>
                        <el-table-column
                            prop="dabaofei"
                            label="打包费"
                            width="110">
                        </el-table-column>
                        <el-table-column
                            prop="peisongfei"
                            label="配送费"
                            width="110">
                        </el-table-column>
                        <el-table-column
                            prop="youhui"
                            label="优惠"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="yinfukuan"
                            label="应付款"
                            width="100">
                        </el-table-column>
                        </el-table>
                    </template>
                </div>
            </div>
            <div>
                <div><i class="el-icon-caret-right" style="color: #4e73df;"></i>商家分润</div>
                <div>
                    <template>
                        <el-table
                        class="tableset"
                        :header-cell-style="{background:'#eef1fc'}"
                        :data="shangjiadata"
                        style="width: 100%">
                        <el-table-column
                            prop="yinfukuan"
                            label="应付款"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="peisongfei"
                            label="配送费"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="chengdan"
                            label="商家承担配送费"
                            width="130">
                        </el-table-column>
                        <el-table-column
                            prop="bili"
                            label="抽成比例"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="jishufuwu"
                            label="技术服务费"
                            width="100">
                        </el-table-column>
                        </el-table>
                    </template>
                </div>
                <div>
                    <template>
                        <el-table
                        class="tableset"
                        :header-cell-style="{background:'#eef1fc'}"
                        :data="shangjiadata2"
                        style="width: 100%">
                        <el-table-column
                            prop="yinfukuan"
                            label="应付款"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="peisongfei"
                            label="总配送费"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="chengdan"
                            label="总技术服务费"
                            width="130">
                        </el-table-column>
                        <el-table-column
                            prop="bili"
                            label="平台补贴"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="jishufuwu"
                            label="商家收入"
                            width="100">
                        </el-table-column>
                        </el-table>
                    </template>
                </div>
            </div>
            <div>
                <div><i class="el-icon-caret-right" style="color: #4e73df;"></i>平台分润</div>
                <div>
                    <template>
                        <el-table
                        class="tableset"
                        :header-cell-style="{background:'#eef1fc'}"
                        :data="pingtaidata"
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="平台配送费"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="技术服务费用"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="name1"
                            label="技术服务费优惠"
                            width="130">
                        </el-table-column>
                        <el-table-column
                            prop="name2"
                            label="平台补贴"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="name3"
                            label="平台收入"
                            width="100">
                        </el-table-column>
                        </el-table>
                    </template>
                </div>
            </div>
            <div>
                <div><i class="el-icon-caret-right" style="color: #4e73df;"></i>入账状态</div>
                <div>
                    <template>
                        <el-table
                        class="tableset"
                        :header-cell-style="{background:'#eef1fc'}"
                        :data="ruzhangdata"
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="下单时间"
                            width="140">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="成交时间"
                            width="140">
                        </el-table-column>
                        <el-table-column
                            prop="name1"
                            label="入账状态"
                            width="110">
                        </el-table-column>
                        <el-table-column
                            prop="name2"
                            label="入账时间"
                            width="140">
                        </el-table-column>
                        </el-table>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'fenrunxiangxi',
        data(){
            return{
                dingdanbianhao:'',
                dingdanleixing:'外卖订单',
                maijianicheng:'小默123',
                shouhuodizhi:'刘吃货，+8613612345678，广东省深圳市龙华区民治街道横岭二区38栋1楼',
                dianpumingcheng:'辣小龙小龙虾湘菜馆(凤凰广场店)',
                dianpudizhi:'张店长，+8615312345678，广东省深圳市龙华区民治街道民丰路鑫茂公寓旁',
                peisongfangshi:'平台专送',
                peisongyuan:'王骑手',
                dianhua:'+8613612345678',
                dingdandata:[{
                    shangpingzongjia:'₱535.00',
                    dabaofei:'₱35.00',
                    peisongfei:'₱0.00',
                    youhui:'₱30.00',
                    yinfukuan:'₱520.00'
                }],
                shangjiadata:[{
                    yinfukuan:'₱520.00',
                    peisongfei:'-₱0.00',
                    chengdan:'-₱30.00',
                    bili:'15.00%',
                    jishufuwu:'₱73.00'
                }],
                shangjiadata2:[{
                    yinfukuan:'₱520.00',
                    peisongfei:'-₱0.00',
                    chengdan:'-₱30.00',
                    bili:'-₱30.00',
                    jishufuwu:'₱73.00'
                }],
                pingtaidata:[{
                    date:'₱56.00',
                    name:'₱73.00',
                    name1:'₱65.00',
                    name2:'₱28.00',
                    name3:'₱22.00'
                }],
                ruzhangdata:[{
                    date:'2022-09-10 18:00:10',
                    name:'2022-09-10 18:22:40',
                    name1:'已入账',
                    name2:'2022-09-11 23:59:59'
                }]

            }
        },
        mounted(){
            this.dingdanbianhao = this.$route.query.id
        }
    }
</script>

<style scoped>
    .yemian {
        width: 100%;
        height: 100%;
        padding: 10px;
        display: flex;
    }
    .xiangxi{
        width: calc(50% - 10px);
        height: 100%;
        border-right: 1px solid #e4e4e4;
    }
    .xiangxi > div {
        margin: 10px 0 ;
    }
    .wenzi >div {
        margin: 20px 0 ;
    }
    .neirong > div {
        margin: 20px 0 ;
    }
    .xinxi {
        width: calc(50% - 10px);
        height: 100%;
        margin-left: 20px;
    }
    .xinxi > div {
        margin: 10px 0 ;
    }
    .dingdanxiangxi {
        width: 100%;
        height: 100%;
        font-size: 14px;
        display: flex;
    }
    .shangpingtupian {
        width: 100px;
        height: 100px;
        margin-right: 10px;
    }
    .xinxineirong {
        width: 350px;
        height: auto;
    }
    .xinxineirong > div {
        width: 100%;
        height: 33%;
        line-height: 33px;
        display: flex;
        justify-content: space-between;
    }
    .tableset {
        width: calc(100% - 20px) !important;
        font-size: 13px;
        margin: 10px;
    }
    .tableset .el-main{
        line-height: 30px;
    }
</style>