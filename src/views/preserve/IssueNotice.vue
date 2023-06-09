<template>
    <div>
        <h1>{{new Date().toLocaleString() | DateFormat}}</h1>
        <div class="box">
            <!-- 通知类型 -->
            <el-row>
                <el-col :span="2">通知类型：</el-col>
                <el-col :span="22">
                    <el-form>
                        <el-select v-model="inform_type" placeholder="请选择">
                            <el-option label="系统通知" value="system_inform"></el-option>
                            <el-option label="活动通知" value="active_inform"></el-option>
                        </el-select>
                    </el-form>
                </el-col>
            </el-row>
            <!-- 客户端 -->
            <el-row>
                <el-col :span="2">客户端 ：</el-col>
                <el-col :span="22">
                    <el-form>
                        <el-select v-model="service" placeholder="请选择">
                            <el-option label="全部客服" value="service_all"></el-option>
                            <el-option label="外卖APP" value="takeout"></el-option>
                            <el-option label="商家App" value="merchant"></el-option>
                            <el-option label="骑手App" value="rider"></el-option>
                            <el-option label="众包APP" value="Crowds"></el-option>
                        </el-select>
                    </el-form>
                </el-col>
            </el-row>
            <!-- 语言类型 -->
            <el-row>
                <el-col :span="2">语言类型: </el-col>
                <el-col :span="20">
                    <el-radio v-model="language_radio" label="Chinese">中文</el-radio>
                    <el-radio v-model="language_radio" label="English">English</el-radio>
                </el-col>
            </el-row>
            <!-- 通知标题 -->
            <el-row>
                <el-col :span="2">通知标题:</el-col>
                <el-col :span="10">
                    <el-input
                        type="text"
                        placeholder="请输入内容"
                        v-model="text_title"
                        maxlength="10"
                        show-word-limit
                        >
                    </el-input>
                </el-col>
            </el-row>
            <!-- 通知类容 -->
            <el-row type="flex" align="top">
                <el-col :span="2">通知类容:</el-col>
                <el-col :span="18"><wangEnduit @gitInform="gitInformContent" /></el-col>
            </el-row>
            <!-- 跳转链接 -->
            <el-row>
                <el-col :span="2">跳转链接:</el-col>
                <el-col :span="18">
                    <el-input
                        type="text"
                        placeholder="请输入url或者接口"
                        v-model="jump_link"
                        maxlength="10"
                        show-word-limit >
                        <template slot="append">0/10(选填)</template>
                    </el-input>
                </el-col>
            </el-row>
            <!-- 展示封面 -->
            <el-row>
                <el-col :span="2">展示封面: </el-col>
                <el-col :span="20">
                    <el-radio v-model="cover" label="no_cover">无封面</el-radio>
                    <el-radio v-model="cover" label="single_cover">单图</el-radio>
                </el-col>
            </el-row>
            <!-- 按钮 -->
            <el-row>
                <el-col :span="20" :offset="2">
                    <el-button @click="cancel">取消</el-button>
                    <el-button type="primary" plain @click="timingPush">定时推送</el-button>
                    <el-button type="primary" @click="ImmediatePush">立即推送</el-button>
                </el-col>
            </el-row>
            <!-- 对话框 -->
            <el-dialog
                title="定时推送"
                :visible.sync="dialogVisible"
                width="30%"
                top="10px">
                <span>请选择当前时间之后 2小时~7天 进行定时推送：</span>
                <el-row class="input-modal">
                    <el-col :span="5">
                        <el-form>
                            <el-select v-model="day" size="mini">
                                <el-option label="5月5号" value="5-5"></el-option>
                                <el-option label="5月6号" value="5-6"></el-option>
                                <el-option label="5月7号" value="5-7"></el-option>
                            </el-select>
                        </el-form>
                    </el-col>&nbsp;
                    <el-col :span="5">
                        <el-form>
                            <el-select v-model="hour" size="mini">
                                <el-option v-for="item in 12" :label="item" :value="item" :key="item"></el-option>
                            </el-select>
                        </el-form>
                    </el-col>
                    <el-col :span="2">&nbsp;&nbsp;时</el-col>
                    <el-col :span="5">
                        <el-form>
                            <el-select v-model="minute" size="mini">
                                <el-option v-for="item in 60" :label="item" :value="item" :key="item"></el-option>
                            </el-select>
                        </el-form>
                    </el-col>
                    <el-col :span="1">&nbsp;分</el-col>
                </el-row>
                <span class="gray-font">本通知/广告将于&nbsp;</span>
                <span class="black-font">北京时间&nbsp;</span>
                <span class="black-font">2022-{{day}}&nbsp;{{hour}}:{{minute}}</span>
                <span class="gray-font">&nbsp;推送</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="closeDialog">定时推送</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
    
</template>

<script>
    import  wangEnduit  from "../../components/PlatformVindicate/wangEnduit.vue";
    

    export default {
        name : "IssueNotice",
        components : {
            wangEnduit
        },
        props :{},
        data () {
            return {
                /* 表单 */
                service : '',
                inform_type : '',
                language_radio : 'Chinese',
                text_title : '',
                inform_content : '',
                informContent : '',
                jump_link : '',
                cover : '',
                /* 模态框 */
                dialogVisible: false,
                day : '5-5',
                hour : '11',
                minute : '45'
            }
        },
        methods : {
            /* 自定义事件 */
            gitInformContent(msg) {
                /* console.log('接收到子组件传递的数据',msg); */
                this.informContent = msg
            },
            /* 取消 */
            cancel() {
                this.$router.push('/PlatformInform')
            },
            /* 获取表单数据 */
            getFormData() {
                let obj = {}
                obj.noticeType = this.inform_type;
                obj.noticeTitle = this.text_title;
                obj.clientSide = this.service;
                obj.language = this.language_radio;
                //直接调用全局的filter里面
                obj.creationTime = this.$options.filters['DateFormat'](new Date().toLocaleString());
                obj.releaseTime  = obj.creationTime
                obj.status = 1
                obj.informContent = this.informContent
                obj.jumpUrl = this.jump_link;
                obj.showCover = this.cover;
                console.log(obj);
                return obj
            },
            /* 清空表单数据 */
            clearFormData() {
                this.service = '';
                this.inform_type = '';
                this.language_radio = 'Chinese';
                this.text_title = '';
                this.inform_content = '';
                this.jump_link = '';
                this.cover = '';
            },
            /* 立即推送 */
            ImmediatePush() {
                /* this.dialogVisible = true; */
                this.$confirm('确定要立即推送该通知吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                })
                .then(() => {
                    this.getFormData()
                    /* // 将数据写入数据库
                    this.$axios({
                        method:'post',
                        url : '/platformNotice/addPlatFormNotice',
                        data : {
                            obj : this.getFormData()
                        }
                    })
                    .then(() => {
                        this.$message({ type: 'success', message: '推送成功!' });
                    })
                    .catch(err => { console.log(err); }) */
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消推送'
                    });          
                });
            },
            /* 定时推送 */
            timingPush() {
                this.dialogVisible = true
            },
            /* 模态框立面的确认 */
            closeDialog() {
                this.dialogVisible = false
                // 将数据写入数据库
                this.$message({
                    type: 'success',
                    message: '推送成功!'
                });
            }, 
        }
    }
</script> 

<style>
    .box{
        width: 100%;
        /* background-color: aliceblue; */
        /* height: 700px; */
        padding: 20px;
        box-sizing: border-box;
    }
    .box > div {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    .input-modal {
        display: flex;
        align-items: center;
        margin: 15px 0;
    }
    .gray-font{
        font-size: 12px;
        color: gray;
    }
    .black-font{
        font-size: 12px;
        color: black;
    }



</style>