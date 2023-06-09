<template>
    <div class="dispatcherScoreBox">
        <div class="picBox">
            <img class="pic" src="https://cdn3.axureshop.com/demo/2031128/images/%E5%BA%97%E9%93%BA4_5%E8%AF%84%E5%88%86%E8%AF%A6%E6%83%85/u7128.svg" alt="">
        </div>
        <div class="contentBox">
            <slot>
                <p class="name">{{name}}</p>
            </slot>
            <slot>
                <p class="date">{{date}}</p>
            </slot>
            <slot>
                <div class="stars">
                    <el-rate
                        v-model="starsValue"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                    </el-rate>
                </div>
            </slot>
            <slot>
                <div class="content">{{content}}</div>
            </slot>
            
        </div>
    </div>
  </template>

<script>
export default{
    name:'DispatcherScoreDiv',
    data() {
      return {
        // starsValue: 3.7
      }
    },
    props:{
        name:{
            type:String,
            default:'姓名',
        },
        date:{
            type:String,
            default:'2022.12.03 15:47:51',
        },
        starsValue:{
            type:Number,//类型
            default:5
        },
        stars:{
            type:String,
            default:'评分',
        },
        content:{
            type:String,
            default:'有点慢了，但是大风大雨的，送餐速度还能准时，辛苦外卖小哥哥了。',
        }
    },
    methods:{
    }
} 
</script>
<style scoped>
.dispatcherScoreBox{
    border:1px solid #e4e4e4;
    border-radius: 5px;
    display: flex;
    width:475px;
    margin: 10px 0;
    padding: 10px;
}
.picBox{
    margin: 10px;
}
.pic{
    width:50px;
    height: 50px;
}
.name,.date,.stars,content{
    margin-bottom: 5px;
}
.name{
    font-size: 13px;
}
.date{
    font-size: 12px;
}
.content{
    font-size: 14px;
}
</style>