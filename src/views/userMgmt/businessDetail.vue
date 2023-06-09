<template>
    <div class="main">
        <div class="sub">
            <div class="header">
                <div class="header-icon"><img src="../../assets/userMgmt/待审核.png" alt="图片加载失败"></div>

                <div class="header-info">
                    <div>商家ID:</div>
                    <div>真实姓名:</div>
                    <div>手机号码:</div>
                </div>
                <div class="header-info">
                    <div>{{data.id}}</div>
                    <div>{{data.name}}</div>
                    <div>{{data.contact}}</div>
                </div>
                <div class="header-info">
                    <div>卖家认证:</div>
                    <div>银行卡:</div>
                    <div>名下店铺:</div>
                </div>
                <div class="header-info">
                    <div>{{data.email}}</div>
                    <div>{{data.email}}</div>
                    <div>{{data.email}}</div>
                </div>
                <div class="header-info">
                    <div>登录密码:</div>
                    <div>支付密码:</div>
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
                            <div>昵称:</div>
                            <div>手机号码:</div>
                            <div>邮箱:</div>
                            <div>会员身份:</div>
                            <div>注册时间:</div>
                            <div>最近访问时间:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="实名认证" name="second">
                        <div class="content-info">
                            <div>认证状态:</div>
                            <div>证件类型:</div>
                            <div>真实姓名:</div>
                            <div>性别:</div>
                            <div>证件号:</div>
                            <div>证件有效期:</div>
                            <div>证件正面图:</div>
                            <div>证件反面图:</div>
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
                    <el-tab-pane label="银行卡信息" name="third">
                        <div class="content-info">
                            <div>绑定状态:</div>
                            <div>国家:</div>
                            <div>开户银行:</div>
                            <div>银行卡号:</div>
                            <div>开户人:</div>
                            <div>预留手机号:</div>
                        </div>
                        <div class="content-info">
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
                            <div>{{data.serialNum}}</div>
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
    background-color: #f5f5f5;
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