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
            v-model="html1"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
            @input="gitInformContent"
        />
    </div>
</template>
<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default Vue.extend({
    components: { Editor, Toolbar },
    props : {
        html: {
                type:String,
                default:'你好'
            }
    },
    watch: {
        html: {
            immediate: true, //绑定值就开始执行监听，而不是等值改变。
            handler(newValue) {
                this.html1 = newValue
            },
        },
    },
    data() {
        return {
            html1:'',
            editor: null,
            toolbarConfig: { },
            editorConfig: { placeholder: '请输入内容...',autofocus :"autofocus"},
            mode: 'default', // or 'simple'
        }
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
        /* 触发父组件绑定的自定义事件 */
        gitInformContent() {
            this.$emit('gitInform',this.html1)
        }
    },
    mounted() {
        
        // 模拟 ajax 请求，异步渲染编辑器
        /* setTimeout(() => {
            this.html = ''
        }, 1500) */
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    }
})
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>