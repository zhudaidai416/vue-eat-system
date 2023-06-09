<template>
    <div style="border: 1px solid #ccc;">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="height: 400px; overflow-y: hidden;"
            v-model="html"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
            @input='addChild'
        ></Editor>
    </div>
</template>
<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default Vue.extend({
    components: { Editor, Toolbar },
    props:['title'],
    watch:{
        title:{
            immediate:true,
            handler(newValue){
                this.html=newValue
            }
            
        }
    },
    data() {
        return {
            editor: null,
            // html: '<p>hello</p>',
            html:'',
            toolbarConfig: { },
            editorConfig: { placeholder: '请输入内容...',autofocus :"autofocus"},
            mode: 'default', // or 'simple'
        }
    },
    created(){
        // console.log(this.title,typeof this.title);
        // // this.html=this.title
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },


        addChild() {
        // 父组件给子组件添加了一个自定义事件，事件名为 add，那么该事件可以在子组件中通过 $emit 去触发
        // console.log(9999999999);
        this.$emit('add', this.html);
        }
    },
    
    mounted() {
        // 模拟 ajax 请求，异步渲染编辑器
        setTimeout(() => {
            // this.html = ''
        }, 3500)
        
        // console.log(this.title);
        //  this.html=this.title
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    }
})
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>