<template>
  <div>
    <!-- <el-row>
      <el-col :span="24"><div class="header">编辑广告</div></el-col>
    </el-row> -->

    <div class="content">
      <el-row :gutter="20" class="content-1">
        <el-col :span="2">
          <span>编号:</span>
        </el-col>

        <el-col :span="6">
          <span>{{dataDetail.id}}</span>
        </el-col>
      </el-row>

      <el-row :gutter="20" class="content-1">
        <el-col :span="2">
          <span>广告类型:</span>
        </el-col>

        <el-col :span="6">
          <template>
            <el-select style="width: 78%;" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
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
            <el-select
              style="width: 78%;"
              v-model="value2"
              placeholder="请选择"
            >
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
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
          ></el-input>
        </el-col>
      </el-row>

      <el-row :gutter="20" class="content-5">
        <el-col :span="2">
          <span>展示封面:</span>
        </el-col>

        <el-col :span="20">
          <EditorBar :title='showCover' @add='addText'></EditorBar>
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
            v-model="link"
            maxlength="200"
            show-word-limit
          ></el-input>
        </el-col>
        <el-col :span="2">
          <span>(选填)</span>
        </el-col>
      </el-row>

      <el-row :gutter="20" class="content-7">
        <el-col :span="2">
          <span>推送频率:</span>
        </el-col>

        <el-col :span="12">
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

        <el-col :span="4">
          <template>
            <div class="block">
              <el-date-picker
                v-model="valueData"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </div>
          </template>
        </el-col>

        <el-col :span="10" :offset='1'>
          <span style="font-size: 14px;">
            失效日期必须大于当前日期，时间默认精确至23:59:59
          </span>
        </el-col>
      </el-row>

      <el-row :gutter="20" class="content-1">
        <el-col :span="2">
          <span>状态:</span>
        </el-col>

        <el-col :span="6">
          <span>{{statusToChinese(dataDetail.status)}}</span>
        </el-col>
      </el-row>

      <el-row :gutter="20" class="content-1">
        <el-col :span="2">
          <span>创建时间:</span>
        </el-col>

        <el-col :span="6">
          <span>{{dataDetail.creationTime}}</span>
        </el-col>
      </el-row>

      <el-row :gutter="20" class="content-1">
        <el-col :span="2">
          <span>修改时间:</span>
        </el-col>

        <el-col :span="6">
          <span>{{dataDetail.startTime}}</span>
        </el-col>
      </el-row>

      <el-row class="content-9">
        <el-col :offset="2" :span="20">
          <el-button>取消</el-button>
          <el-button>定时推送</el-button>
          <el-button type="primary" @click='ImmediatelyPush'>立即推送</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import EditorBar from '../../components/hz_wangEnduit/wangEnduit.vue'
export default {
  name: 'ClassView',
  components: { EditorBar },
  data() {
    return {
      options: [
        { value: '选项1', label: '启动页广告' },
        { value: '选项2', label: '首页弹窗广告'},
      ],
      value: '',  //广告类型

      options2: [
        { value: '选项1', label: '外卖APP' },
        { value: '选项2', label: '商家APP' },
        { value: '选项3', label: '骑手APP' },
        { value: '选项4', label: '众包APP' },
      ],
      value2: '',  //客户端

      radio: '1', // 语言类型

      textarea: '', //广告标题

      radio2: '1', // 推送频率

      link:'',    //跳转链接

      showCover:'',//富文本编辑器

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
      },
      valueData: '',

      dataDetail:'',

    }
  },
  methods: {
    advertising() {
      this.$router.push('/publishAdvertisement')
    },

    addText(text){         //接收子组件传递数据
      // console.log('接收到子组件传递的数据',text);
      this.showCover=text
    },

    loading(id){            
       return this.$axios({
        method:'POST',
        url:'/adPut/updateAdPut',
        data:{id}
      })
      .then((res) => {
        if (res.status == 200) {
          // console.log(res);
          this.dataDetail=res.data.data
          this.value=this.dataDetail.adType
          this.value2=this.dataDetail.clientSide
          this.radio=this.dataDetail.language=='中文'?"1":"2"
          this.textarea=this.dataDetail.adTitle
          this.link=this.dataDetail.jumpUrl
          this.showCover=this.dataDetail.showCover
          // return Promise.resolve()
        }
      })
      .catch((err) => {
        console.log('请求错误',err)
      })
    },

    ImmediatelyPush(){      //更改数据
      return this.$axios({
        method:'POST',
        url:'/adPut/updateAdPut',
        data:{
          id:this.dataDetail.id,
          adType:this.value,
          clientSide:this.value2,
          language:this.radio==1?"中文":"English",
          adTitle:this.textarea,
          jumpUrl:this.link,
          showCover:this.showCover,
        }
      })
      .then((res) => {
        if (res.status == 200) {
          // console.log(res);
          this.$router.push('/advertising')
        }
      })
      .catch((err) => {
        console.log('请求错误',err)
      })
    },
   

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

  created(){
    // console.log(this.$route.query.id);
    // this.loading(this.$route.query.id)
    this.loading(this.$route.query.id)
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #f8f8f8;
  /* text-align: center; */
  line-height: 50px;
  font-size: 18px;
}
.content {
  width: 100%;
  height: 100vh;
  padding: 20px;
}
.content > .el-row {
  margin-bottom: 10px;
  padding: 10px 0;
}
.content-1,
.content-2,
.content-4,
.content-6,
.content-8 {
  display: flex;
  align-items: center;
}
</style>
