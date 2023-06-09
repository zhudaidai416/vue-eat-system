<template>
    <div class="main">
        <div class="sub">
            <div class="header">
                <div class="header-icon"><img src="../../assets/userMgmt/待审核.png" alt="图片加载失败"></div>

                <div class="header-info">
                    <div>店铺ID:</div>
                    <div>店铺名称:</div>
                    <div>所在地:</div>
                </div>
                <div class="header-info">
                    <div>{{data.id}}</div>
                    <div>{{data.name}}</div>
                    <div>{{data.contact}}</div>
                </div>
                <div class="header-info">
                    <div>详情地址:</div>
                    <div>商品:</div>
                    <div>评分:</div>
                </div>
                <div class="header-info">
                    <div>{{data.email}}</div>
                    <div>{{data.email}}</div>
                    <div>{{data.email}}</div>
                </div>
                <div class="header-info">
                    <div>所属商家:</div>
                    <div>负责人:</div>
                    <div>状态:</div>
                </div>
                <div class="header-info">
                    <div>{{data.email}}</div>
                    <div>{{data.email}}</div>
                    <div>{{data.email}}</div>
                </div>
            </div>

            <div class="content">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="基本信息" name="first">
                        <div class="content-info">
                            <div>中文店铺名称:</div>
                            <div>英文店铺名称:</div>
                            <div>店铺类型:</div>
                            <div>主营:</div>
                            <div>辅营:</div>
                            <div>状态:</div>
                            <div>配送方式:</div>
                            <div>开店日期:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                        </div>
                        <div class="content-info">
                            <div>保证金:</div>
                            <div>保证金状态:</div>
                            <div>结算方式:</div>
                            <div>技术服务费比例:</div>
                            <div>最低技术服务费:</div>
                            <div>技术服务费优惠:</div>
                            <div>优惠状态:</div>
                            <div>优惠期限:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                        </div>
                        <div class="content-info">
                            <div>账户状态:</div>
                            <div>店铺余额:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="店铺管理" name="second">
                        <h3>堂食营业</h3>
                        <div class="content-info">
                            <div>预订手机号:</div>
                            <div>营业时段:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                        </div>

                        <h3>外卖营业</h3>
                        <div class="content-info">
                            <div>接单手机号:</div>
                            <div>营业时段:</div>
                            <div>起送价:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                        </div>

                        <h3>外卖配送</h3>
                        <div class="content-info">
                            <div>配送方式:</div>
                            <div>基础距离:</div>
                            <div>基础配送费:</div>
                            <div>每百米计费:</div>
                            <div>最远配送距离:</div>
                            <div>0~3点加价:</div>
                            <div>3~6点加价:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                        </div>

                        <h3>线上开票</h3>
                        <div class="content-info">
                            <div>支持线上开具发票:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                        </div>

                        <h3>店铺外卖店招</h3>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                        </div>

                        <h3>店铺团购店招</h3>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="到店自取" name="third">
                        <div class="content-info">
                            <div>服务状态:</div>
                            <div>抽成比例:</div>
                            <div>开启时段:</div>
                            <div>备货时间:</div>
                            <div>享受商品特价:</div>
                            <div>参与自建活动:</div>
                            <div>自动参与:</div>
                            <div>参与的活动:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="门店环境" name="fourth">
                        <div class="content-info">
                            <div>店铺门面图:</div>
                            <div>店内环境图:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="资质信息" name="fifth">
                        <div class="content-info">
                            <div>证件名称:</div>
                            <div>证件ID:</div>
                            <div>证件有效期:</div>
                            <div>证件正面图:</div>
                            <div>证件名称:</div>
                            <div>证件ID:</div>
                            <div>证件有效期:</div>
                            <div>证件正面图:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="签约合同" name="sixth">
                        <div class="content-info">
                            <div>签约合同图:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'businessDetail',
    data() {
        return {
            activeName: 'first',
            CNtext: '',
            ENtext: '',
            data: {

            },
            options: [
                {
                    value: '选项1',
                    label: "原因一"
                }
            ],
            value: '',
            lockVisible: false,
            form: {
            },
            formLabelWidth: '120px',
        }
    },
    created() {
        // 当前审核会员的流水号 this.$route.params.id
    },
    methods: {
    }
}
</script>

<style scoped>
.main {
    background-color: #FFFFFF;
    height: 100%;
}

.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.return {
    cursor: pointer;
    margin-right: 50px;
    color: #4E73DF;
}

.title {
    height: 60px;
    font-size: 18px;
    line-height: 60px;
    margin-left: 50px;
}

.modalHint {
    margin-bottom: 30px;
}

.sub {
    margin-top: 10px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 5px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
}

.sub2 {
    height: 20%;
    margin-top: 10px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 5px;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
}

.sub2>.sub2-content {
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 95%;
    margin: 10px 30px;
}

.sub2>.sub2-content>div {
    margin: 5px;
}

.header {
    display: flex;
    align-items: center;
    background-color: #eff1fc;
    border-radius: 5px;
}

.header-icon {
    font-size: 16px;
    text-align: center;
}

.header-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.header-info>div {
    margin: 10px 30px;
}

.content>* {
    margin: 20px 0;
}

.content>:first-child {
    font-weight: bold;
}

.el-icon-caret-right {
    color: #4E73DF;
}

.content-info {
    display: flex;
    flex-direction: column;
}

.content-info>div {
    margin: 10px;
}

.sub2-header {
    height: 95%;
    font-size: 20px;
    font-weight: 700;
    width: 50px;
    background-color: #eff1fc;
    padding: 5px 5px;
    border-radius: 5px;
    writing-mode: tb-rl;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>