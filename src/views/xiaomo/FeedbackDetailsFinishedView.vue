<template>
    <div>
        <el-row>
           <el-col :span="24"><div class="header">意见反馈详情-已完结</div></el-col>
        </el-row>

        <div class="content">
            <el-row :gutter="20" class="content-1">
                <el-col :span="3">
                    <div class="demo-image-1">
                        <!-- <div class="block" v-for="fit in fits" :key="fit"> -->
                            <el-image
                            style="width: 100px; height: 100px"
                            :src="url"
                            ></el-image>
                        <!-- </div> -->
                    </div>
                </el-col>
                <el-col :span="2">
                    <p>流水号:</p>
                    <p>反馈人:</p>
                    <p>联系方式:</p>
                </el-col>
                <el-col :span="3">
                    <p>{{dataList.number}}</p>
                    <p>小默123</p>
                    <p>{{dataList.phone}}</p>
                </el-col>

                <el-col :offset='3' :span="2">
                    <p>来源:</p>
                    <p>IP地址:</p>
                    <p>IP归属地:</p>
                </el-col>
                <el-col :span="3">
                    <p>{{dataList.source}}</p>
                    <p>219.134.104.255</p>
                    <p>广东 深圳 龙华</p>
                </el-col>
            </el-row>

            <el-row class="content-2">
                <el-col :span="2"><i  class="el-icon-caret-right"></i>反馈内容</el-col>
            </el-row>

            <el-row :gutter="20" class="content-3">
                <el-col :span="3">
                    <span>意见类型:</span>
                </el-col>

                <el-col :span="6">
                    <span>{{dataList.OpinionType}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-4">
                <el-col :span="3">
                    <span>反馈内容:</span>
                </el-col>

                <el-col :span="20">
                    <span>{{dataList.feedback}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-5">
               
                <el-col :offset='3' :span="8">
                    <div class="demo-image-2">
                        <!-- <div class="block" v-for="fit in fits" :key="fit"> -->
                            <el-image
                            style="width: 400px; height: 400px"
                            :src="url2"
                            ></el-image>
                        <!-- </div> -->
                    </div>
                </el-col>

                <el-col  :span="8">
                   <div class="demo-image-3">
                        <!-- <div class="block" v-for="fit in fits" :key="fit"> -->
                            <el-image
                            style="width: 400px; height: 400px"
                            :src="url3"
                            ></el-image>
                        <!-- </div> -->
                    </div>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-6">
                <el-col :span="3">
                    <span>反馈时间:</span>
                </el-col>

                <el-col :span="20">
                    <span>{{dataList.FeedbackTime}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-8">
                <el-col :span="3">
                   <i class="el-icon-platform-eleme"></i>
                </el-col>
                <el-col :span="2">
                    <p>流水号:</p>
                    <p>反馈状态:</p>
                    <p>联系方式:</p>
                    <p>处理时间:</p>
                </el-col>
                <el-col :span="10">
                    <p>{{dataList.number}}</p>
                    <p>{{dataList.status}}</p>
                    <p>{{dataList.phone}}</p>
                    <p>{{dataList.processingTime}}</p>
                </el-col>
            </el-row>

             <el-row class="content-2">
                <el-col :span="2"><i  class="el-icon-caret-right"></i>补充内容</el-col>
            </el-row>

            <el-row :gutter="20" class="content-4">
                <el-col :span="3">
                    <span>补充内容:</span>
                </el-col>

                <el-col :span="20">
                    <span>就是红圈的位置，看到了没，就是红圈的位置，看到了没，如下图所示。</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-5">
               
                <el-col :offset='3' :span="8">
                    <div class="demo-image-2">
                        <!-- <div class="block" v-for="fit in fits" :key="fit"> -->
                            <el-image
                            style="width: 400px; height: 400px"
                            :src="url2"
                            ></el-image>
                        <!-- </div> -->
                    </div>
                </el-col>

            </el-row>

            <el-row :gutter="20" class="content-6">
                <el-col :span="3">
                    <span>补充时间:</span>
                </el-col>

                <el-col :span="20">
                    <span>2022-04-30 10:16:46</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-8">
                <el-col :span="3">
                   <i class="el-icon-platform-eleme"></i>
                </el-col>
                <el-col :span="2">
                    <p>处理人:</p>
                    <p>处理意见:</p>
                    <p>回复内容:</p>
                    <p>处理时间:</p>
                </el-col>
                <el-col :span="19">
                    <p>周审核</p>
                    <p>处理完成</p>
                    <p>您好，感谢您的支持。我会将该意见及时反馈给研发部门，加强改善。小默外卖的发展离不开您的支持，祝您生活愉快！</p>
                    <p>{{dataList.processingTime}}</p>
                </el-col>
            </el-row> 
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            url2: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            url3: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',

            radio: '1',

            text1:'',
            text2:'',
            dataList:[]
        }
    },
    created(){
        this.dataList=this.$route.query.data
        console.log(this.dataList);
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
        margin-bottom: 20px;
    }
    .content-1,.content-8{
        height: 150px;
        border-radius: 5px;
        background-color: #f4f6fd;
        font-size: 14px;
    }
    .content-1>.el-col,.content-8>.el-col{
        padding: 10px 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .content-1>.el-col:first-child{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 50%;
    }
    .content-8>.el-col:first-child{
        font-size: 50px;
        height: 100%;
        padding-top: 15px;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: center;
        border-radius: 50%;
    }
    .content-2{
        padding-bottom: 10px;
        border-bottom: 1px solid #e4e4e4;
        font-weight: 900;
    }
    .el-icon-caret-right{
        color: blue;
    }
    .content-6,.content-7{
        padding-bottom: 5px;
        border-bottom: 20px solid #f7f7f7;
    }
    .content > .content-6{
        margin-bottom: 5px;
    }
    .content-7-div{
        padding: 20px 0;
        width: 50px;
        height: 120px;
        background-color: #eef1fc;
        border-radius: 5px;
        line-height: 50px;
        text-align: center;
        /* text-align:justify; */
        text-align-last:justify;
        text-align:justify;
        font-weight: 900;
    }    
</style>