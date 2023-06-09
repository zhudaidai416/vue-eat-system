<template>
    <div>
        <!-- <el-row>
           <el-col :span="24"><div class="header">广告详情</div></el-col>
        </el-row> -->

        <div class="content">
            <el-row :gutter="20" class="content-1">
                <el-col :span="2">
                    <span>编号:</span>
                </el-col>

                <el-col :span="6">
                    <span>{{details.id}}</span>
                </el-col>
            </el-row>
            
            <el-row :gutter="20" class="content-1">
                <el-col :span="2">
                    <span>广告类型:</span>
                </el-col>

                <el-col :span="6">
                    <span>{{details.adType}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-2">
                <el-col :span="2">
                    <span>客户端:</span>
                </el-col>

                <el-col :span="6">
                    <span>{{details.clientSide}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-3">
                <el-col :span="2">
                    <span>语言类型:</span>
                </el-col>

                <el-col :span="6">
                    <span>{{details.language}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-4">
                <el-col :span="2">
                    <span>广告标题:</span>
                </el-col>

                <el-col :span="12">
                    <span>{{details.adTitle}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-5">
                <el-col :span="2">
                    <span>展示封面:</span>
                </el-col>

                <el-col :span="20">
                   <div class="demo-image">
                        <!-- <div class="block" v-for="fit in fits" :key="fit"> -->
                            <el-image
                            style="width: 500px; height: 500px"
                            :src="url"
                            ></el-image>
                        <!-- </div> -->
                    </div>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-6">
                <el-col :span="2">
                    <span>跳转链接:</span>
                </el-col>

                <el-col :span="20">
                    <span>{{details.jumpUrl}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-7">
                <el-col :span="2">
                    <span>推送频率:</span>
                </el-col>

                <el-col :span="6">
                    <span>每天首次打开APP时</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-1">
                <el-col :span="2">
                    <span>状态:</span>
                </el-col>

                <el-col :span="6">
                    <span>{{statusToChinese(details.status)}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-1">
                <el-col :span="2">
                    <span>创建时间:</span>
                </el-col>

                <el-col :span="6">
                    <span>{{details.creationTime}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-1">
                <el-col :span="2">
                    <span>修改时间:</span>
                </el-col>

                <el-col :span="6">
                    <span>{{details.startTime}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-1">
                <el-col :span="2">
                    <span>推送时间:</span>
                </el-col>

                <el-col :span="6">
                    <span>2022-09-29 10:09:06</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-1">
                <el-col :span="2">
                    <span>失效时间:</span>
                </el-col>

                <el-col :span="6">
                    <span>2022-09-29 10:09:06</span>
                </el-col>
            </el-row>

            <el-row  class="content-9">
                <el-col :offset='2' :span="20">
                    <el-button class="myButton" type="primary">编辑广告</el-button>
                    <el-button class="myButton" type="primary">重新发布</el-button>
                </el-col>
            </el-row>
        </div>
    </div>

</template>

<script>
export default {
    name:'AdvertisingDetailsView',
    data(){
        return {
        //    fits:['fill'], //['fill', 'contain', 'cover', 'none', 'scale-down'],
           url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',

           details:[]
        }
    },
    methods:{
       statusToChinese(key){
      switch (key) {
        case 0:
          return  '生效中'
        case 1:
          return  '待推送'
        case 2:
          return  '已过期'
        case 3:
          return  '已停用'
        default:
          break;
      }
    },
    },
    mounted(){
        console.log(this.$route.query.data,89897);
        this.details=this.$route.query.data
    }
    
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 50px;
        background-color: #f8f8f8;
        /* text-align: center; */
        line-height: 50px;
        font-size: 18px;
    }
    .content{
        width: 100%;
        height: 100vh;
        padding: 20px;
    }
    .content > .el-row{
        margin-bottom: 10px;
        padding: 10px 0;
    }
    .content-1,.content-2,.content-4,.content-6,.content-8
    {
        display: flex;
        align-items: center;
    }
    .content-9{
       padding-bottom: 50px !important;
    }
</style>