<template>
    <div class="report-box">
        <!-- <h1>举报详情</h1> -->
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
                    <el-row><span>10232964187883</span></el-row>
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
                <el-col :span="10" style="font-size:xx-small">{{data.reportTime}}</el-col>
            </el-row>
        </div>
        <!-- 处理意见 -->
        <h5 class="title1"><span class="el-icon-caret-right"></span>处理意见</h5>
        <div class="report-content">
            <el-row>
                <el-col :span="2">处理人：</el-col>
                <el-col :span="10">{{data.dealPeople}}</el-col>
            </el-row>
            <el-row>
                <el-col :span="2">处理意见：</el-col>
                <el-col :span="10">{{data.handling || "待处理"}}</el-col>
            </el-row>
            <el-row >
                <el-col :span="2" >回复类容：</el-col>
                <el-col :span="20"><span style="font-size:xx-small">{{data.replyContent}}</span></el-col>
            </el-row>
            <el-row>
                <el-col :span="2">处理时间：</el-col>
                <el-col :span="10"><span style="font-size:xx-small">{{data.dealTime}}</span></el-col>
            </el-row>
        </div>

        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name : 'ReportDetailsno',
        data () {
            return {
                /* 获取路由传递过来的当前点击对象 */
                id:'',
                data:{},
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                radio : '1'
            }
        },
        computed : {
            ...mapGetters({getDataIdGetters : 'PlatformVindicate_Store/getDataIdGetters'})
        },
        mounted () {
            this.getDataId()
        },
        methods: {
             // 发起请求获取 对应数据
             async getDataId() {
                this.id = this.$route.query.id
                const data = await this.getDataIdGetters(this.id);
                this.data = data[0]
                console.log(this.data);
            },
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
        margin-top: 25px;
        box-sizing: border-box;
        padding-left: 25px;
    }
</style>
