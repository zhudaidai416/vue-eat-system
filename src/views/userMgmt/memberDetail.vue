<template>
    <div class="main">
        <div class="sub">
            <div class="header">
                <div class="header-icon" v-if="getData"><img :src="this.memberDetail[0].icon" alt="图片加载失败"></div>

                <div class="header-info" v-if="getData">
                    <div>会员ID:</div>
                    <div>手机号码:</div>
                    <div>登录密码:</div>
                </div>
                <div class="header-info" v-if="getData">
                    <div>{{this.memberDetail[0].Id}}</div>
                    <div>{{this.memberDetail[0].Contact}}</div>
                    <div>{{this.memberDetail[0].Password}}</div>
                </div>
                <div class="header-info" v-if="getData">
                    <div>下单量:</div>
                    <div>团购量:</div>
                    <div>状态:</div>
                </div>
                <div class="header-info" v-if="getData">
                    <div @click="goOtherLink('/orderManagement')" style="color:#4E73DF;cursor: pointer;">{{this.memberDetail[0].OrderCount}}</div>
                    <div @click="goOtherLink('/bulkManagement')" style="color:#4E73DF;cursor: pointer;">{{this.memberDetail[0].GroupOrderCount}}</div>
                    <div>{{this.memberDetail[0].State}}</div>
                </div>
                <div class="lockMember">
                    <!-- 锁定模态框 -->
                    <el-button round @click="lockVisible = true">锁定会员</el-button>

                    <el-dialog title="确定锁定该会员？" :visible.sync="lockVisible">
                        <div class="modalHint">会员帐号被锁定后将无法下单、评价，请慎重操作！</div>
                        <el-form :model="form">
                            <el-form-item label="锁定原因" :label-width="formLabelWidth">
                                <el-select v-model="value" placeholder="请选择原因">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="中文补充说明" :label-width="formLabelWidth">
                                <el-input type="text" placeholder="请输入中文补充说明" v-model="CNtext" maxlength="200"
                                    show-word-limit>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="英文补充说明" :label-width="formLabelWidth">
                                <el-input type="text" placeholder="请输入英文补充说明" v-model="ENtext" maxlength="500"
                                    show-word-limit>
                                </el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="lockVisible = false">取 消</el-button>
                            <el-button type="primary" @click="lockVisible = false">确 定</el-button>
                        </div>
                    </el-dialog>
                </div>
            </div>

            <div class="middle"><i class="el-icon-caret-right"></i> 基本信息</div>
            <div class="content" v-if="getData">
                <hr style="background-color:lightgrey; height:1px; border:none;">
                <div class="content-info">
                    <div>昵称:</div>
                    <div>手机号码:</div>
                    <div>邮箱:</div>
                    <div>会员身份:</div>
                    <div>注册时间:</div>
                    <div>最近访问时间:</div>
                </div>
                <div class="content-info" v-if="getData">
                    <div>{{this.memberDetail[0].NickName}}</div>
                    <div>{{this.memberDetail[0].Contact}}</div>
                    <div>{{this.memberDetail[0].Email}}</div>
                    <div>{{this.memberDetail[0].MemberType}}</div>
                    <div>{{this.memberDetail[0].RegistTime}}</div>
                    <div>{{this.memberDetail[0].LatestVisitTime}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'verifyMemberDetail',
    data() {
        return {
            getData: false,
            CNtext: '',
            ENtext: '',
            memberDetail: [],
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
        this.$axios({
            methods: 'GET',
            url: 'http://127.0.0.1:4523/m1/1680117-0-default/memberMgmt/memberDetail',
            params: {
                id: this.$route.params.id
            }
        })
            .then(res => {
                this.getData = true
                this.memberDetail = res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    methods: {
        goOtherLink(url) {
            this.$router.push(url)
        }
    }
}
</script>

<style scoped>
.main {
    background-color: #f5f5f5;
    height: 100%;
}

.middle {
    margin: 20px 0;
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

.content {
    display: flex;
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
</style>