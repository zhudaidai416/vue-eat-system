<template>
  <div id="AuditingIdea">
    <div class="AuditingIdeaIcon">
      <div class="AuditingIdeaIconText">
        <p>审</p>
        <p>核</p>
        <p>意</p>
        <p>见</p>
      </div>
    </div>
    <div class="AuditingContent">
      <div class="AuditingContentLeft">
        <div class="AuditingContentLeftBox">
          <p class="AuditingContentLeftTitle">当前审核人：</p>周审核
        </div>
        <div class="AuditingContentLeftBox">
          <p class="AuditingContentLeftTitle">审核结果：</p>
          <div class="optionBox">
            <el-radio v-model="radio" label="1">同意</el-radio>
            <el-radio v-model="radio" label="2">拒绝</el-radio>
          </div>
        </div>
        <div class="AuditingContentLeftBox">
          <p class="AuditingContentLeftTitle">拒绝原因：</p>
          <el-select v-model="value" placeholder="请选择原因">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="AuditingContentRight">
        <div class="AuditingContentRightTitle">补充说明：</div>
        <div class="AuditingContentRightContent">
          <div class="AuditingContentRightInput"><el-input v-model="input1" placeholder="请输入中文补充说明"></el-input><p>0/200（选填）</p></div>
          <div class="AuditingContentRightInput"><el-input v-model="input2" placeholder="请输入英文补充说明"></el-input><p>0/500（选填）</p></div>
          <div class="AuditingContentRightButton">
            <el-button>取消</el-button>
            <el-button type="primary">确定</el-button>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name:'AuditingIdea',
  data(){
    return{
      radio:'1',
      input1:'',
      input2:'',
      options: [{
        value: '选项1',
        label: '拒绝原因1'
      }, {
        value: '选项2',
        label: '拒绝原因2'
      }, {
        value: '选项3',
        label: '拒绝原因3'
      }],
      value: ''
    }
  },
  methods:{

  },
}
</script>

<style scoped>
#AuditingIdea{
  width: calc(100% - 10px);
  height: 145px;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
}
.AuditingIdeaIcon{
  width: 55px;
  height: 145px;
  background-color: #eef1fc;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.AuditingIdeaIconText{
  width: 55px;
  height: 105px;
}
.AuditingIdeaIconText p{
  height: 25%;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  color: #000000;
}

.AuditingContent{
  width: calc(100% - 55px);
  height: 145px;
  display: flex;
}
.AuditingContentLeft{
  width: calc(40% - 40px);
  height: 105px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #333333;
  border-right:1px dashed #e4e4e4;
}

.AuditingContentLeftBox{
  width: 100%;
  display: flex;
  margin-bottom: 20px;
} 
.AuditingContentLeftTitle{
  width: 90px;
  display: inline-block;
} 
.el-select{
  width: calc(100% - 90px);
}
.optionBox{
  padding-top: 1px;
}

.AuditingContentRight{
  width: calc(60% - 21px);
  height: 105px;
  padding: 10px;
  display: flex;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #333333;
}
.AuditingContentRightTitle{
  width: 10%;
  padding-top: 10px;
  color: #999999;

}
.AuditingContentRightContent{
  width: 90%;
}
.AuditingContentRightInput{
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
}
.AuditingContentRightInput p{
  width: 100px;
  display: inline-block;
  font-size: 12px;
  padding-left: 10px;
  color: #999999;
}
.AuditingContentRightButton button{
  padding-top: 8px;
  height: 30px;
}
</style>