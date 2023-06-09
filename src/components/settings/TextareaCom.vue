<template>
  <div class="textarea-component">
    <div class="textarea-title">
      <slot></slot>
    </div>
    <input class="textarea"
      type="textarea"
      :class="{'selected':selectedState}"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleinput"
      @focus="selectedState = true"
      @blur="selectedState = false">
  </div>
</template>

<script>
export default {
  name: 'TextareaCom',
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      selectedState: false,
      
    }
  },
  methods:{
    handleinput(event) {
      //父组件在绑定v-model时，其实就绑定的input事件，因此父组件不需要再声明事件了
      this.$emit("input", event.target.value);
    },
  }
}
</script>

<style scoped>
.textarea-component{
  width: 200px;
  height: 100px;
  box-sizing: border-box;
  font-size: 13px;
}
.textarea-title{
  width: 100%;
  height: 20px;
  border: 1px solid rgba(228, 228, 228, 1);
  border-bottom: none;
  background-color: #F6F7F9;
  text-align: center;
  line-height: 20px;
  border-radius: 4px 4px 0 0;
}
.textarea{
  width: 100%;
  height: 110px;
  overflow-y: auto;
  border: 1px solid rgba(228, 228, 228, 1);
  outline: none;
  border-radius: 0 0 4px 4px;
  resize: none;
}
.textarea:hover{
  border: 1px solid blue;
}
.selected{
  border: 1px solid blue;
  box-shadow: 0px 0px 2px gray;
}
</style>