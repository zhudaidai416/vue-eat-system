<template>
    <div class="report-box">
        <!-- <h1>{{this.$route.query.id}}举报详情</h1> -->
        <!-- 头部banner -->
        <div class="top-label">
            <el-row type="flex" justify="start">
                <!-- 第一列 -->
                <el-col>
                    <el-image
                        style="width: 100px; height: 100px"
                        :src="url">
                    </el-image>
                </el-col>
                <el-col class="disperse">
                    <el-row><span>流水号:</span></el-row>
                    <el-row><span>举报人:</span></el-row>
                    <el-row><span>联系方式:</span></el-row>
                </el-col>
                <el-col class="disperse">
                    <el-row><span>{{data.id}}</span></el-row>
                    <el-row><span>{{data.reportName}}</span></el-row>
                    <el-row><span>{{data.telephone}}</span></el-row>
                </el-col>
                <el-col></el-col>
                <el-col></el-col>
                <el-col class="disperse">
                    <el-row><span>来源：</span></el-row>
                    <el-row><span>IP地址:</span></el-row>
                    <el-row><span>IP归属地:</span></el-row>
                </el-col>
                <el-col class="disperse">
                    <el-row><span>{{data.source}}</span></el-row>
                    <el-row><span>{{data.ipAddress}}</span></el-row>
                    <el-row><span>{{data.ipLocation}}</span></el-row>
                </el-col>
                <el-col></el-col>
                <el-col></el-col>
            </el-row>

        </div>
        <!-- 小标题 -->
        <h5 class="title1"><span class="el-icon-caret-right"></span>举报类容</h5>
        <div class="report-content">
            <!-- 举报类型 -->
            <el-row>
                <el-col :span="2">举报类型：</el-col>
                <el-col :span="10">{{data.reportType}}</el-col>
            </el-row>
            <!-- 相关店铺 -->
            <el-row>
                <el-col :span="2">相关店铺：</el-col>
                <el-col :span="10"><a href="#" style="font-size:xx-small">{{data.relatedStore}}</a></el-col>
            </el-row>
            <!-- 举报类容 -->
            <el-row>
                <el-col :span="2">举报类容：</el-col>
                <el-col :span="18">{{data.reportContent}}</el-col>
            </el-row>
            <!-- 图片 -->
            <el-row>
                <el-col :span="6" :offset="4"><el-image style="width: 250px; height: 400px" :src="url"></el-image></el-col>
                <el-col :span="6"><el-image style="width: 250px; height: 400px" :src="url"></el-image></el-col>
            </el-row>
            <!-- 举报时间 -->
            <el-row>
                <el-col :span="2">举报时间：</el-col>
                <el-col :span="10">{{data.reportTime}}</el-col>
            </el-row>
        </div>
        <!-- 底部banner -->
        <div class="bottom-banner">
            <el-row type="flex" justify="start">
                <el-col :span="1" class="bottom-left-box">举报处理</el-col>
                <el-col :span="2" :offset="1" class="disperse">
                    <el-row>当前审核人:</el-row>
                    <el-row>处理意见:</el-row>
                    <el-row></el-row>
                </el-col>
                <el-col :span="2"  class="disperse">
                    <el-row>{{data.dealPeople}}</el-row>
                    <el-row><el-radio size="mini" v-model="radio" label="0"><span class="report-content">情况属实</span></el-radio></el-row>
                    <el-row><el-radio size="mini" v-model="radio" label="1"><span class="report-content">无法判断</span></el-radio></el-row>
                </el-col>
                <el-col :span="2" :offset="6" class="disperse">
                    <el-row>回复类容：</el-row>
                    <el-row></el-row>
                    <el-row></el-row>
                </el-col>
                <el-col :span="8" class="disperse">
                    <el-row class="abc">
                        <el-input size="mini" placeholder="请输入内容" v-model="input1" clearable>
                            <template slot="append" ><span><span>{{input1.trim().length}}/100</span></span></template>
                        </el-input>
                    </el-row>
                    <el-row>
                        <el-input size="mini" placeholder="请输入内容" v-model="input2" clearable>
                            <template slot="append"> {{input2.trim().length}}/100</template>
                        </el-input>
                    </el-row>
                    <el-row>
                        <el-button size="mini" @click="cancel">取消</el-button>
                        <el-button type="primary" size="mini" @click="affirm">确定</el-button>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>


<script>
import { mapGetters ,mapMutations} from 'vuex';

    export default {
        name : 'ReportDetails',
        data () {
            return {
                /* 获取路由传递过来的当前点击对象 */
                id : '',
                data : {},
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                radio : '0',
                input1 :'',
                input2 : '',
                sizeNum : 0
            }
        },
        mounted () {
            this.getDataId()
        },
        computed : {
            ...mapGetters({getDataIdGetters : 'PlatformVindicate_Store/getDataIdGetters'})
        },
        methods : {
            ...mapMutations({changeStatusMutation : 'PlatformVindicate_Store/changeStatusMutation'}),
            // 发起请求获取 对应数据
            async getDataId() {
                this.id = this.$route.query.id
                const data = await this.getDataIdGetters(this.id);
                this.data = data[0]
            },
            /* 确认将未处理状态改成已处理 changeStatusMutation*/
            affirm() {
               this.changeStatusMutation({
                id : this.id,
                handling_case : this.radio,
                replyContent : this.input1
               })
                this.$router.push('/ReportManagement')
            },
            /* 取消退出 */
            cancel() {
                this.$router.push('/ReportManagement')
            }
            
        }
        
    }
    
</script>

<style scoped>
    .report-box{
        padding: 20px;
        box-sizing: border-box;

    }
    .top-label{
        width: 95%;
        margin: 0 auto;
        padding: 10px;
        background-color:#eff2fc ;
        margin-top: 20px;
    }
    .disperse{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 10px;
    }
    .title1{
        width: 95%;
        margin: 0 auto;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid gray;
    }
    .report-content{
        font-size: smaller;
    }
    .report-content > div {
        margin-top: 15px;
        box-sizing: border-box;
        padding-left: 25px;
    }
    .bottom-banner {
        width: 95%;
        margin: 0 auto;
        padding: 10px;
        border: 1px solid white;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        /* background-color:#eff2fc ; */
        margin-top: 20px;
    }
    .bottom-banner  div {
        font-size: 10px;
    }
    .bottom-banner .bottom-left-box{
        height: 100px;
        padding: 10px;
        background-color: #eff2fc;
        font-size: 12px;
        text-align: center;
        writing-mode:tb-rl;
        font-weight: bold;
        /* padding-top: 20px; */
        
    }
    /* 深度选择 */
    :deep(.el-input-group__append){
        background-color: transparent;
        border: none;
        padding: 2px;
    }


</style>