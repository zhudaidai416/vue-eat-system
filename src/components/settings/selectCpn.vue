<template>
  <div
    class="select-cpn-item"
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
    <select
      class="select-cpn-item-noumenon"
      @focus="changeInputFocus"
      @blur="changeInputFocus"
      :value="value"
      @change="sendData"
    >
      <option :value="item.value" v-for="(item, index) in option" :key="index">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'cpn',
  props: ['value'],
  data() {
    return {
      inputState: {
        isTipHover: false,
        isInputFocus: false,
      },
    }
  },
  methods: {
    changeInputFocus() {
      this.inputState.isInputFocus = !this.inputState.isInputFocus
    },
    sendData(e) {
      this.$emit('input', e.target.value)
    },
  },
  computed: {
    option() {
      return this.$store.state.setting.option
    },
  },
}
</script>
<style>
.inputCpnItemBorder {
  outline: 1px solid blue;
}
.select-cpn-item {
  width: calc(25% - 11px);
  height: 30px;
  display: flex;
  align-items: center;
  margin: 1px 10px 10px 1px;
  border-radius: 2px;
  background-color: #efefef;
  /* padding: 3px 0; */
}
.select-cpn-item p:hover {
  background-color: #fff;
}
.select-cpn-item p {
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
.select-cpn-item-noumenon::placeholder {
  font-size: 12px;
}
.select-cpn-item-noumenon:hover {
  background-color: #fff;
}
.select-cpn-item-noumenon:focus {
  background-color: #fff;
}
.select-cpn-item-noumenon {
  width: calc(75% - 3px);
  height: 24px;
  font-size: 12px;
  border-radius: 0;
  border: none;
  border-radius: 2px;
  background-color: #efefef;
  padding: 0 3px;
  outline: none;
}
.select-cpn-item-noumenon option {
  background-color: white;
}
</style>
