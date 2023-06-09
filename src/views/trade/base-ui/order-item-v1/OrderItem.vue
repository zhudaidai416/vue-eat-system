<template>
	<div class="order-item">
		<OrderHeader :infoData="infoData" :config="config.orderHeaderTitle" />
		<OrderMain :infoData="infoData" :config="config.configGoodsItem" />
	</div>
</template>

<script>
import OrderHeader from '../order-item-v1/order-header/OrderHeader.vue'
import OrderMain from '../order-item-v1/order-main/OrderMain.vue'
export default {
	props: {
		// 组件配置
		config: {
			type: Object,
		},

		//数据
		infoData: {
			type: Object,
		},
	},
	components: {
		OrderHeader,
		OrderMain,
	},
}
</script>

<style scoped>
/* 分页器 */
.page-num {
	display: flex;
	justify-content: center;
	margin: 20px 0px;
}
</style>
