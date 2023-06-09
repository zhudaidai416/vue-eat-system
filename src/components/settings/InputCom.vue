<template>
  <div
    class="input-component"
    :class="{ 'input-com-mouseover': titleState, selected: selectedState }"
  >
    <div
      class="input-title"
      @mouseover="titleState = true"
      @mouseout="titleState = false"
    >
      <slot></slot>
    </div>

    <input
      class="input"
      :type="showPassword ? (passwordVisiable ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      :class="{ 'input-mouseover': inputState || selectedState }"
      @input="handleinput"
      @mouseover="inputState = true"
      @mouseout="inputState = false"
      @focus="selectedState = true"
      @blur="selectedState = false"
    />
  </div>
</template>

<script>
export default {
  name: "InputCom",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
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
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputState: false, // 移入移出时输入框的状态
      titleState: false, // 移入移出时文字的状态
      selectedState: false, // 输入框是否被选中
      passwordVisiable: false, //控制是否显示密码
    };
  },
  methods: {
    handleinput(event) {
      //父组件在绑定v-model时，其实就绑定的input事件，因此父组件不需要再声明事件了
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
.input-component {
  width: calc((100% - 60px) / 4);
  height: 35px;
  background-color: #f6f7f9;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 3px;
  box-sizing: border-box;
}
.input-com-mouseover,
.selected {
  background-color: white;
  border: 1px solid blue;
}
.selected {
  box-shadow: 0px 0px 2px gray;
}
.input-title {
  width: 25%;
  padding: 0 10px;
  color: #797979;
  font-size: 13px;
}
.input {
  width: 75%;
  margin-right: 5px;
  height: 30px;
  border: none;
  outline: none;
  background-color: #f6f7f9;
  font-size: 13px;
}
.input-mouseover {
  background-color: white;
}
</style>