<template>
  <div
    class="select-component"
    :class="{ 'select-com-mouseover': titleState, selected: selectedState }"
  >
    <div
      class="select-title"
      @mouseover="titleState = true"
      @mouseout="titleState = false"
    >
      <slot></slot>
    </div>

    <select
      class="select"
      :value="value"
      @change="selectValue"
      :class="{ 'select-mouseover': selectState || selectedState }"
      @mouseover="selectState = true"
      @mouseout="selectState = false"
      @focus="selectedState = true"
      @blur="selectedState = false"
    >
      <option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectCom",
  props: ["options", "value"],
  data() {
    return {
      selectState: false, // 移入移出时下拉框的状态
      titleState: false, // 移入移出时文字的状态
      selectedState: false, // 输入框是否被选中
    };
  },
  methods: {
    selectValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
.select-component {
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
.select-com-mouseover,
.selected {
  background-color: white;
  border: 1px solid blue;
}
.selected {
  box-shadow: 0px 0px 2px gray;
}
.select-title {
  width: 25%;
  padding: 0 10px;
  color: #797979;
  font-size: 13px;
}
.select {
  width: 75%;
  margin-right: 5px;
  height: 31px;
  border: none;
  outline: none;
  background-color: #f6f7f9;
  font-size: 13px;
}
.select-mouseover {
  background-color: white;
}
</style>