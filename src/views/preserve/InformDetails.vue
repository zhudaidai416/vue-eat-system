<template>
    <div class="details">
        <div class="box1">
            <!-- 编号 -->
            <el-row>
                <el-col :span="2">编号:</el-col>
                <el-col :span="10">{{id}}</el-col>
            </el-row>
            <!-- 通知类型 -->
            <el-row>
                <el-col :span="2">通知类型:</el-col>
                <el-col :span="10">{{obj.noticeType}}</el-col>
            </el-row>
            <!-- 客户端 -->
            <el-row>
                <el-col :span="2">客户端:</el-col>
                <el-col :span="10">{{obj.clientSide}}</el-col>
            </el-row>
            <!-- 语言 -->
            <el-row>
                <el-col :span="2">语言:</el-col>
                <el-col :span="10">{{obj.language}}</el-col>
            </el-row>
            <!-- 通知标题 -->
            <el-row>
                <el-col :span="2">通知标题:</el-col>
                <el-col :span="10">{{obj.noticeTitle || "无"}}</el-col>
            </el-row>
            <!-- 通知类容 -->
            <el-row>
                <el-col :span="2">通知类容:</el-col>
                <el-col :span="17">{{obj.informContent || "无"}}</el-col>
            </el-row>
            <!-- 跳转链接 -->
            <el-row>
                <el-col :span="2">跳转链接:</el-col>
                <el-col :span="10"><a :href="obj.jumpUrl" target="_blank">{{obj.jumpUrl}}</a></el-col>
            </el-row>
            <!-- 展示封面 -->
            <el-row>
                <el-col :span="2">展示封面:</el-col>
                <el-col :span="10">
                    <div class="demo-image">
                        <div class="block">
                            <el-image :src="url1" ></el-image>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!-- 状态 -->
            <el-row>
                <el-col :span="2">状态:</el-col>
                <el-col :span="10">{{obj.status | issueStatus}}</el-col>
            </el-row>
            <!-- 创建时间 -->
            <el-row>
                <el-col :span="2">创建时间:</el-col>
                <el-col :span="10">{{obj.creationTime}}</el-col>
            </el-row>
            <!-- 修改时间 -->
            <el-row>
                <el-col :span="2">修改时间:</el-col>
                <el-col :span="10">{{obj.creationTime}}</el-col>
            </el-row>
            <!-- 推送时间 -->
            <el-row>
                <el-col :span="2">推送时间:</el-col>
                <el-col :span="10">{{obj.releaseTime}}</el-col>
            </el-row>
            <!-- 按钮 -->
            <el-row>
                <el-col :offset="4" :span="10">
                    <el-button type="primary" icon="el-icon-edit" @click="editInform">编辑通知</el-button>
                    <el-button icon="el-icon-refresh-left" @click="republish">重新发布</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'InformDetails',
        data () {
            return {
                id : this.$route.query.id,
                obj : {},
                url1: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                url : 'https://cdn3.axureshop.com/demo/2031128/images/%E9%80%9A%E7%9F%A5%E8%AF%A6%E6%83%85/u30757.svg'
            }
        },
        filters : {
            issueStatus(value) {
                let text;
                switch (value) {
                    case 0:
                        text = "已发布"
                        break;
                    case 1:
                        text = "待发布"
                        break;
                    case 2:
                        text = "已停用"
                        break;
                    default:
                        break;
                }
                return text
            }
        },
        mounted () {
            //请求数据
            this.getDetails(this.id)
        },
        methods : {
            //请求数据
            getDetails(id) {
                this.$axios.post('/platformNotice/selectPlatFormById',{id})
                .then(res => {
                    this.obj = res.data
                    console.log(res.data);
                })
                .catch(err => {
                    console.log("err",err);
                })
            },
            /* 编辑通知 */
            editInform() {
                //表示待发布状态才能编辑通知
                if (this.obj.status != 1) 
                return this.$message({
                            message: '只有待发布状态才能编辑哟！',
                            showClose: true,
                            type: 'warning'
                        });
                this.$router.push({
                    path:'/EditNotice',
                    query : {
                        id : this.id
                    }
                })

            },
            /* 重新发布 */
            republish() {
                this.$router.push('/EditNotice')
            },
        }
    }
</script>

<style scoped>
    .box1{
        background-color: aliceblue;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
    .box1 > div {
        margin-bottom: 15px;
        font-size: 13px;
    }

</style>