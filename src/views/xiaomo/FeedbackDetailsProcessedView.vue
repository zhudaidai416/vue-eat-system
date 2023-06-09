<template>
    <div>
        <el-row>
           <el-col :span="24"><div class="header">意见反馈详情-待处理</div></el-col>
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

            <el-row :gutter="20" class="content-7">
                <el-col :span="1">
                  <div class="content-7-div" style="writing-mode:tb-rl">反馈处理</div>
                </el-col>

                <el-col  :span="2" style="margin-left:20px">
                    <p style="margin-top:20px">当前审核人:</p>
                    <p style="margin-top:20px">处理意见:</p>
                </el-col>

                <el-col  :span="8" style="margin-left:5px">
                    <p style="margin-top:20px">周审核</p>
                    <template>
                        <el-radio v-model="radio" label="1" style="margin-top:25px">处理完成</el-radio>
                        <el-radio v-model="radio" label="2" style="margin-top:20px">继续跟进</el-radio>
                    </template>
                </el-col>
               
                <el-col  :span="2">
                    <p style="margin-top:20px">回复内容:</p>
                </el-col>

                <el-col :span="10">
                    <el-input
                    style="margin-top:10px"
                    type="text"
                    placeholder="请输入中文回复"
                    v-model="text1"
                    maxlength="60"
                    show-word-limit
                    >
                    </el-input>

                    <el-input
                    style="margin-top:10px"
                    type="text"
                    placeholder="请输入英文回复"
                    v-model="text2"
                    maxlength="60"
                    show-word-limit
                    >
                    </el-input>

                    <el-button style="margin-top:10px">取消</el-button>
                    <el-button type="primary" @click='confirm(dataList.number)'>确定</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
// import Bus from "./bus";
export default {
    data(){
        return{
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            url2: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            url3: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',

            radio: '1',

            text1:'',
            text2:'',

            dataList:'',
        }
    },
    methods:{
        confirm(number){
        //    Bus.$emit('send',number)
            this.$store.commit('hz_store/Data_mutations',number)
            // console.log(this.$store.state.hz_store.number);
            this.$router.push('feedback')
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
    .content-1{
        height: 150px;
        border-radius: 5px;
        background-color: #f4f6fd;
        font-size: 14px;
    }
    .content-1>.el-col{
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