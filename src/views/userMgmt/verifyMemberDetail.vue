<template>
    <div class="main">
        <div class="sub">
            <div class="header">
                <div class="header-icon"><img src="../../assets/userMgmt/待审核.png" alt="图片加载失败"></div>

                <div class="header-info">
                    <div>会员ID:</div>
                    <div>会员昵称:</div>
                    <div>手机号码:</div>
                </div>
                <div class="header-info">
                    <div>{{data.id}}</div>
                    <div>{{data.name}}</div>
                    <div>{{data.contact}}</div>
                </div>
                <div class="header-info">
                    <div>电子邮箱:</div>
                </div>
                <div class="header-info">
                    <div>{{data.email}}</div>
                </div>
            </div>

            <div class="content">
                <div><i class="el-icon-caret-right"></i> 审核内容</div>
                <hr style="background-color:lightgrey; height:1px; border:none;">
                <div class="content-info">
                    <div>流水号:</div>
                    <div>审核类型:</div>
                    <div>新信息:</div>
                    <div>旧信息:</div>
                    <div>提交时间:</div>
                </div>
                <div class="content-info">
                    <div>{{data.serialNum}}</div>
                    <div>{{data.serialNum}}</div>
                    <div>{{data.serialNum}}</div>
                    <div>{{data.serialNum}}</div>
                    <div>{{data.serialNum}}</div>
                </div>
            </div>
        </div>

        <div class="sub2">
            <div class="sub2-header">审核意见</div>
            <div class="sub2-content">
                <div>当前审核人: 周审核</div>
                <div>审核结果:
                    <input type="radio" name="result" value="pass">通过
                    <input type="radio" name="result" value="deny">失败
                </div>
                <div>拒绝原因:
                    <el-select v-model="options" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="sub2-content">
                <div>补充说明:
                    <el-input type="text" placeholder="请输入中文补充说明" v-model="CNtext" maxlength="200" show-word-limit>
                    </el-input>
                </div>
                <div>英文说明:
                    <el-input type="text" placeholder="请输入英文补充说明" v-model="ENtext" maxlength="500" show-word-limit>
                    </el-input>
                </div>
                <div>
                    <el-button>取消</el-button>
                    <el-button type="primary">确定</el-button>
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
            CNtext: '',
            ENtext: '',
            data: {
                id: "00000",
                name: "小王",
                contact: '123456',
                email: 'fake@email.com'
            },
            options: [],
        }
    },
    created() {
        // 当前审核会员的流水号 this.$route.params.id
    },
    methods:{
    }
}
</script>

<style scoped>
.main {
    background-color: #f5f5f5;
    height: 100%;
}
.main-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.return{
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