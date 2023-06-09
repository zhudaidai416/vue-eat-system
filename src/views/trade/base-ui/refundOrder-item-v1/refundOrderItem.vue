<template>
	<div class="order-item">
		<refundOrderHeader :infoData="infoData" :config="config.orderHeaderTitle" />
		<refundOrderMain :infoData="infoData" :config="config.configGoodsItem" />
	</div>
</template>

<script>
import refundOrderHeader from '../refundOrder-item-v1/refund-order-header/refundOrderHeader.vue'
import refundOrderMain from '../refundOrder-item-v1/refund-order-main/refundOrderMain.vue'
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
		refundOrderHeader,
		refundOrderMain,
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
