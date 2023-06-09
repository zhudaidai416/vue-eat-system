<template>
    <div class="host">
        <div class="review" >
            <div class="paddingA">
                 <p>审核意见</p>
                 <p class="return" v-on:click="ReviewContent"><i class="el-icon-close"></i></p>
                  <div class="second">
                    <span class="secondFirst">分类信息：</span>
                    <div class="hostFirst">
                        <p>分类ID:&emsp;&emsp;{{passValue.id}}</p>
                        <p>中文名称：{{passValue.classifyName}}</p>
                        <p>分类描述：{{passValue.describtion}}</p>
                        <p>是否可用：{{ifUse(passValue.userful)}}</p>
                    </div>
                </div>
                <p>创建时间： {{passValue.createTime}}</p>
                <p>修改时间： {{passValue.createTime}}</p>
                <p>审核人员： {{passValue.reviewman}}</p>
                <div>
                    <span>审核结果：</span>
                    <el-radio v-model="radio" label="1">同意</el-radio>
                    <el-radio v-model="radio" label="2">拒绝</el-radio>
                </div>
                <div>
                    <el-form   ref="ruleForm" label-width="100px" class="demo-ruleForm ">
                        <el-form-item label="拒绝原因：" >
                            <el-select class="RejectBox" v-model="form.region" placeholder="请选择原因">
                            <el-option label="无理由拒绝" value="shanghai"></el-option>
                            <el-option label="心情不好拒绝" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="supplement">
                    <div >
                        <span>补充说明：</span>
                        <el-input class="elInputA" v-model="inputA" placeholder="请输入内容"></el-input>
                        <span class="supplementLast">0/200(选填)</span>
                    </div>
                    <div class="supplementA">
                        
                        <el-input class="elInput" v-model="inputB" placeholder="请输入内容"></el-input>
                        <span class="supplementLast" style="width:17%">0/200(选填)</span>
                    </div>
                    
                </div>
                <div class="Confirm">
                    <el-button v-on:click="ReviewContent">取消</el-button>
                    <el-button type="primary" v-on:click="ReviewContent">确定</el-button>
                </div>
            </div>
    </div>
</div>

</template>

<script>
  export default {
    data () {
      return {
        radio: '1',
        form: {
          name: '',
        },
        inputA:'',
        inputB:'',
        rules:[],
        ruleForm:"",
        passValue:''
      }
      },
       methods: {
        ReviewContent() {
        this.$router.push("/goodsClassification")
        },
        ifUse(data){
            switch (data){
                case 1 :
                    return "可用"
                case 2 :
                    return "不可用"
            }
        }
        },
        created(){
            this.passValue = this.$route.query.data 
        }
   
    }
  
</script>

<style>
.host{
    width: 100%;
    height: 100%;
    background-color: #f5f7fa;
}
.review{
    width: 40%;
    /* height: 660px; */
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    margin: auto;
    background-color: white;
   
}
.paddingA{
    padding-left: 30px;
    position: relative;
}
.paddingA>*{
    padding-top: 20px;
}
.return{
    position: absolute;
    right: 20px;
    top: -5px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bolder;
}
.paddingA>:first-child{
    width: 20%;
    font-size: 20px;
    font-weight: bolder;
}
.second{
    width: 80%;
    display: flex;
}
.secondFirst{
    width: 20%;
}
.second>div{
    width: 360px;
    border: 1px solid #f5f7fa;
    background-color: #f5f7fa;
}
.el-form-item__label{
    /* text-align: none; */
    margin-left: -8px;
    font-size: 16px;
    color: black;
}
.supplement>div{
 width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;

}

.supplement>div>span{
    display: inline-block;
    width: 26%;
}
.elInput{
    width: 64.5%;
}
.supplementA{
    flex: right;
    margin-top: 20px;
}
.supplementLast{
    width: 34%;
    margin-left: 10px;
}
.elInputA{
    width: 100%;
}
.Confirm{
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin-bottom:40px;
}
.RejectBox{
    width: 78%;
    padding: 0;
    margin-left: -5px;
}
.hostFirst>p{
height: 40px;
line-height: 40px;
padding-left:10px;
}
</style>