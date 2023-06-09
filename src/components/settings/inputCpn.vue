<template>
  <div
    class="input-cpn-item"
    :class="{
      inputCpnItemBorder: inputState.isTipHover || inputState.isInputFocus,
      inputCpnItemNoumenonBack: inputState.isInputFocus,
    }"
  >
    <p
      @mouseover="inputState.isTipHover = true"
      @mouseout="inputState.isTipHover = false"
    >
      <slot></slot>
    </p>
    <input
      class="input-cpn-item-noumenon"
      placeholder="请输入关键字"
      @focus="changeInputFocus"
      @blur="changeInputFocus"
      @input="sendData"
      :value="value"
    />
  </div>
</template>
<script>
export default {
  name: 'cpn',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      msg: 'Hello Vue.js',
      inputState: {
        isTipHover: false,
        isInputFocus: false,
      },
    }
  },
  methods: {
    // 样式控制
    changeInputFocus() {
      this.inputState.isInputFocus = !this.inputState.isInputFocus
    },
    // 数据传输 - 子传父
    sendData(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>
<style>
.inputCpnItemBorder {
  outline: 1px solid blue;
}
.input-cpn-item {
  width: calc(25% - 11px);
  height: 30px;
  display: flex;
  align-items: center;
  margin: 1px 10px 0 1px;
  border-radius: 2px;
  background-color: #efefef;
  margin-bottom: 10px;
  /* padding: 3px 0; */
}
.input-cpn-item p:hover {
  background-color: #fff;
}
.input-cpn-item p {
  width: 25%;
  height: 100%;
  color: #868686;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  /* background-color: #efefef; */
  border-radius: 2px 0 0 2px;
}
.inputCpnItemNoumenonBack {
  background-color: #fff;
}
.input-cpn-item-noumenon {
  font-size: 12px;
  outline: none;
  margin-right: 3px;
}
.input-cpn-item-noumenon:hover {
  background-color: #fff;
}
.input-cpn-item-noumenon:focus {
  background-color: #fff;
}
.input-cpn-item-noumenon {
  height: 24px;
  border-radius: 0;
  border: none;
  border-radius: 2px;
  background-color: #efefef;
  padding: 0 3px;
}
.input-cpn-item-noumenon {
  width: 74%;
}
</style>
