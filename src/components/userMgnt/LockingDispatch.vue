<template>
    <div class="modal" v-show="visible">
  <!--     遮罩 -->
      <div class="modal-mask" @click="clickMask"></div>
  <!--     主体部分 -->
      <div class="modal-content">
  <!--       头部 -->
        <header class="modal-header">
          <slot name="header">{{title}}</slot>
          <span class="closed" @click.stop="onClose"><i class="el-icon-close"></i></span>
        </header>
  
  <!--       内容 -->
        <main class="modal-body">
          <slot>
            <div>{{text}}</div>
          </slot>
        </main>
  
  <!--       底部 -->
        <footer class="modal-footer">
          <slot name="footer">
            <button @click.stop="onClose">取消</button>
            <button @click.stop="onConfirm" class="confirm">确定</button>
          </slot>
        </footer>
      </div>
    </div>
  </template>

<script>
export default{
    name:'LockingDispatch',
    props:{
        visible:{
            type:Boolean,//类型
            default:false//默认值
        },
        title:{
            type:String,
            default:'标题',
        },
        text:{
            type:String,
            default:'内容',
        }
    },
    methods:{
        clickMask(){//遮罩
            this.$emit('onClose')
        },
        onClose(){//取消
            this.$emit('onClose')
        },
        onConfirm(){//确认
            //触发父组件传递的事件
            this.$emit('onConfirm')
        }
    }
} 
</script>

<style scoped>
*{
    font-size: 13px;
}
.modal{
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  z-index:999;
}
.modal-mask{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.6);
}
.modal-content{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  min-width:300px;
  z-index:9999;
  background:#fff;
  padding: 30px;
}
.modal-header{
  position:relative;
  width:100%;
  height:40px;
  line-height:40px;
  font-weight:700;
  font-size: 16px;
}
.closed{
  position:absolute;
  top:50%;
  right:3px;
  font-size:12px;
  transform:translateY(-50%);
  cursor:pointer;
}
.modal-body{
  padding:10px 0;
}
.modal-footer{
  padding:10px;
  text-align:right;
}
button{
    background-color: #fff;
    width: 70px;
    height: 30px;
    border: rgba(215, 215, 215, 1) 1px solid;
    border-radius: 5px;
    margin: 10px;
}
.confirm{
    background:linear-gradient(to bottom,#3e80e0,#1694e2a7);
    color: #fff !important;
}
</style>