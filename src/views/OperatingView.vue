<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first">
      <OperatingAll />
    </el-tab-pane>
    <el-tab-pane label="用户" name="second">
      <OperatingUser />
    </el-tab-pane>
    <el-tab-pane label="商家" name="third">
      <OperatingBus />
    </el-tab-pane>
    <el-tab-pane label="店铺" name="fourth">
      <OperatingShop />
    </el-tab-pane>
    <el-tab-pane label="配送员" name="five">
      <OperatingDelivery />
    </el-tab-pane>
    <el-tab-pane label="商品" name="six">
      <OperatingCommodity />
    </el-tab-pane>
    <el-tab-pane label="订单" name="seven">
      <OperatingOrders />
    </el-tab-pane>
  </el-tabs>

</template>

<script>
import OperatingAll from "../components/OperatingView/all.vue";
import OperatingUser from "../components/OperatingView/users.vue";
import OperatingBus from "../components/OperatingView/bus.vue";
import OperatingShop from "../components/OperatingView/shop.vue";
import OperatingDelivery from "../components/OperatingView/delivery.vue";
import OperatingCommodity from "../components/OperatingView/commodity.vue";
import OperatingOrders from "../components/OperatingView/orders.vue";

  export default {
    components: {
      OperatingAll,
      OperatingUser,
      OperatingBus,
      OperatingShop,
      OperatingDelivery,
      OperatingCommodity,
      OperatingOrders
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
