<template>
    <div>
        <div class="box">
            <!-- 通知类型 -->
            <el-row>
                <el-col :span="2">通知类型：</el-col>
                <el-col :span="22">
                    <el-form>
                        <el-select v-model="dataObj.noticeType" placeholder="请选择">
                            <el-option label="系统通知" value="系统通知"></el-option>
                            <el-option label="活动通知" value="活动通知"></el-option>
                        </el-select>
                    </el-form>
                </el-col>
            </el-row>
            <!-- 客户端 -->
            <el-row>
                <el-col :span="2">客户端 ：</el-col>
                <el-col :span="22">
                    <el-form>
                        <el-select v-model="dataObj.clientSide" placeholder="请选择">
                            <el-option label="全部客服" value="全部客服"></el-option>
                            <el-option label="外卖APP" value="外卖APP"></el-option>
                            <el-option label="商家App" value="商家App"></el-option>
                            <el-option label="骑手App" value="骑手App"></el-option>
                            <el-option label="众包APP" value="众包APP"></el-option>
                        </el-select>
                    </el-form>
                </el-col>
            </el-row>
            <!-- 语言类型 -->
            <el-row>
                <el-col :span="2">语言类型: </el-col>
                <el-col :span="20">
                    <el-radio v-model="dataObj.language" label="中文">中文</el-radio>
                    <el-radio v-model="dataObj.language" label="English">English</el-radio>
                </el-col>
            </el-row>
            <!-- 通知标题 -->
            <el-row>
                <el-col :span="2">通知标题:</el-col>
                <el-col :span="10">
                    <el-input type="text" placeholder="请输入内容" v-model="dataObj.noticeTitle" maxlength="10" show-word-limit>
                    </el-input>
                </el-col>
            </el-row>
            <!-- 通知类容 -->
            <el-row type="flex" align="top">
                <el-col :span="2">通知类容:</el-col>
                <el-col :span="18">
                    <wangEnduit :html="dataObj.informContent" @gitInform="gitInformContent" />
                </el-col>
            </el-row>
            <!-- 跳转链接 -->
            <el-row>
                <el-col :span="2">跳转链接:</el-col>
                <el-col :span="18">
                    <el-input type="text" placeholder="null" v-model="dataObj.jumpUrl" maxlength="10" show-word-limit>
                        <template slot="append">0/10(选填)</template>
                    </el-input>
                </el-col>
            </el-row>
            <!-- 展示封面 -->
            <el-row>
                <el-col :span="2">展示封面: </el-col>
                <el-col :span="20">
                    <el-radio v-model="dataObj.showCover" label="无封面">无封面</el-radio>
                    <el-radio v-model="dataObj.showCover" label="单图">单图</el-radio>
                </el-col>
            </el-row>
            <!-- 按钮 -->
            <el-row>
                <el-col :span="20" :offset="2">
                    <el-button>取消</el-button>
                    <el-button type="primary" plain>定时推送</el-button>
                    <el-button type="primary" @click="dialogVisible = true">立即推送</el-button>
                </el-col>
            </el-row>
            <!-- 模态框 -->
            <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" top="10px">
                <span>确定立即推送和停用改通知吗？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="confirm">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>

</template>

<script>
import wangEnduit from "./wangEnduit.vue";


export default {
    name: "PostBox",
    components: {
        wangEnduit
    },
    props: {
        "title" : String,
        "dataObj" : Object
    },
    watch: {
        dataObj: {
        immediate: true, //绑定值就开始执行监听，而不是等值改变。
        handler(newValue) { //newValue, oldValue
        this.dataObj = newValue || {}
        },
        },
    },
    data() {
        return {
            /* 表单 */
            noticeType: "",
            clientSide: '',
            language: '中文',
            text_title: '',
            inform_content: '',
            jump_link: '',
            cover: '',
            dialogVisible: false
        }
    },
    methods: {
        /* 自定义事件 */
        gitInformContent(msg) {
            // console.log('接收到子组件传递的数据',msg);
            this.dataObj.informContent = msg
        },
        /* 模态框 */
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(() => {
                    done();
                })
                .catch(() => { });
        },
        /* 确定 */
        async confirm() {
            this.dialogVisible = false
            //触发自定义事件将值
            await this.$emit('getDate',this.dataObj)
            //发起axios请求修改数据
            await this.$axios.post('/platformNotice/updatePlatFormNotice',this.dataObj)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script> 

<style>
.box {
    width: 100%;
    /* background-color: aliceblue; */
    /* height: 700px; */
    padding: 20px;
    box-sizing: border-box;
}

.box>div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
</style>