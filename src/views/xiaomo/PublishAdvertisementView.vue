<template>
    <div>
        <!-- <el-row>
           <el-col :span="24"><div class="header">发布广告</div></el-col>
        </el-row> -->

        <div class="content">
            <el-row :gutter="20" class="content-1">
                <el-col :span="2">
                    <span>广告类型:</span>
                </el-col>

                <el-col :span="6">
                   <template>
                        <el-select style="width:78%" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-2">
                <el-col :span="2">
                    <span>客户端:</span>
                </el-col>

                <el-col :span="6">
                   <template>
                        <el-select style="width:78%" v-model="value2" placeholder="请选择">
                            <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-3">
                <el-col :span="2">
                    <span>语言类型:</span>
                </el-col>

                <el-col :span="6">
                    <template>
                        <el-radio v-model="radio" label="1">中文</el-radio>
                        <el-radio v-model="radio" label="2">English</el-radio>
                    </template>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-4">
                <el-col :span="2">
                    <span>广告标题:</span>
                </el-col>

                <el-col :span="9">
                   <el-input
                    type="text"
                    placeholder="国庆特惠活动国庆特惠活动国庆特惠活动"
                    v-model="textarea"
                    maxlength="60"
                    show-word-limit
                    >
                    </el-input>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="content-5">
                <el-col :span="2">
                    <span>展示封面:</span>
                </el-col>

                <el-col :span="20">
                   <EditorBar></EditorBar>
                </el-col>
            </el-row>

             <el-row :gutter="20" class="content-6">
                <el-col :span="2">
                    <span>跳转链接:</span>
                </el-col>

                <el-col :span="12">
                   <el-input
                    type="text"
                    placeholder="请输入url或接口"
                    v-model="textarea"
                    maxlength="200"
                    show-word-limit
                    >
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <span>(选填)</span>
                </el-col>
            </el-row>

             <el-row :gutter="20" class="content-7">
                <el-col :span="2">
                    <span>推送频率:</span>
                </el-col>

                <el-col :span="10">
                    <template>
                        <el-radio v-model="radio2" label="1">每天首次打开APP时</el-radio>
                        <el-radio v-model="radio2" label="2">每次打开APP时</el-radio>
                    </template>
                </el-col>
            </el-row>

             <el-row :gutter="20" class="content-8">
                <el-col :span="2">
                    <span>失效日期:</span>
                </el-col>

                <el-col :span="5">
                    <template>
                        <div class="block">
                            <el-date-picker
                            v-model="valueData"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                        </div>
                    </template>
                </el-col>

                <el-col :span="8">
                    <span style="font-size:14px">失效日期必须大于当前日期，时间默认精确至23:59:59</span>
                </el-col>
            </el-row>


            <el-row  class="content-9">
                <el-col :offset='2' :span="20">
                    <el-button >取消</el-button>
                    <el-button  @click="dialogVisible = true" style="margin-right:10px">定时推送</el-button>

                    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
                    <el-dialog
                    title="定时推送"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                    <div style="height:20px;margin-bottom:20px">请选择当前时间之后 2小时~7天 进行定时推送：</div>
                

                    <div class="block">

                        <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        style="width:40%;margin-right:10px">
                        </el-date-picker>
                       

                        <template>
                            <el-select style="width:20%;height:5px" v-model="value3" placeholder="1">
                                <el-option v-for="item in 24" :key="item" :value="item"></el-option>
                            </el-select>
                            <span style="margin:0 5px">时</span>
                        </template>
                        
                        <template>
                            <el-select style="width:20%;height:5px" v-model="value4" placeholder="1">
                                <el-option v-for="item in 60" :key="item" :value="item"></el-option>
                            </el-select>
                            <span style="margin-left:5px">时</span>
                        </template>

                        <div style="margin-top:20px">本通知/广告将于 北京时间 {{value1}} {{value3}}:{{value4}} 推送</div>

                    </div>

                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">定时推送</el-button>
                    </span>
                    </el-dialog>

                    <template>
                    <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
                    </template>
                    <el-button type="primary" @click="open">立即推送</el-button>
                </el-col>
            </el-row>
        </div>
    </div>

</template>

<script>
import EditorBar from '../../components/hz_wangEnduit/wangEnduit.vue'
export default {
    name:'ClassView',
    components: { EditorBar },
    data(){
        return {
          options: [ 
            {
            value: '选项1',
            label: '启动页广告'
            }, 
            {
            value: '选项2',
            label: '首页弹窗广告'
            }],
           value: '',

          options2: [ 
            {
            value: '选项1',
            label: '外卖APP'
            }, {
            value: '选项2',
            label: '商家APP'
             }, {
            value: '选项3',
            label: '骑手APP'
            }, {
            value: '选项4',
            label: '众包APP'
            }],
           value2: ''
           ,

          radio: '1',   // 语言类型

          textarea: '', //广告标题

          radio2: '1',   // 推送频率

          pickerOptions: {
            disabledDate(time) {
                return time.getTime() > Date.now();
            },
          },
          valueData: '',

          dialogVisible: false,

           value1: '',
           value3: '',
           value4: '',
        }
    },
    methods:{
        advertising(){
            this.$router.push('/publishAdvertisement')
        },


        open() {
            this.$confirm('确定要立即推送/停用该通知吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                // type: 'warning'
            }).then(() => {
            this.$message({
                type: 'success',
                message: '推送成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消推送'
            });          
            });
        },

        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(()=> {
            done();
          })
          .catch(()=> {});
        },

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
</style>