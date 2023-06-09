<template>
	<div class="order-item-content">
		<!-- 订单的商品列表 -->
		<div :style="config.goodsStyle" class="common">
			<GoodsItem
				v-for="item in infoData.refundOrderDetail.refundGoodsDetail"
				:key="item.id"
				:goods="item"
				:config="config" />
		</div>
		<!-- 交易金额 -->
		<div class="common">
			<div>₱ {{ infoData.refundOrderDetail.tradePrice }} 元</div>
		</div>
		<!-- 退款金额 -->
		<div class="common">
			<span :style="{ 'font-size': '16px', color: 'red', padding: '5px 0px', width: '150px' }">
				{{ infoData.refundOrderDetail.refundPrice }} 元
			</span>
		</div>
		<!-- 退款原因 -->
		<div class="common">
			<span :style="{ 'font-size': '12px', color: '#666', padding: '5px 0px', width: '150px' }">
				{{ infoData.refundOrderDetail.reason }}
			</span>
		</div>
		<!-- 配送结果 -->
		<div class="common">
			<span :style="{ 'font-size': '12px', color: '#666', padding: '5px 0px', width: '150px' }">
				{{ infoData.refundOrderDetail.result == 0 ? '配送完成' : '未配送' }}
			</span>
		</div>
		<!-- 最近申请时间 -->
		<div class="common">
			<span :style="{ 'font-size': '14px', color: '#666', padding: '5px 0px', width: '150px' }">
				{{ infoData.refundOrderDetail.recentlyTime }}
			</span>
		</div>

		<!-- 售后 -->
		<div class="afterSale common">
			<el-link
				v-if="infoData.refundOrderDetail.refundStatus === 0"
				@click="jumpPagerRefundDetail(infoData.refundOrderDetail.refundOrderId)"
				type="primary"
				:underline="false"
				icon="el-icon-alarm-clock">
				退款成功
			</el-link>
			<el-link
				v-else-if="infoData.refundOrderDetail.refundStatus === 1"
				@click="jumpPagerRefundDetail(infoData.refundOrderDetail.refundOrderId)"
				type="primary"
				:underline="false"
				icon="el-icon-alarm-clock">
				退款关闭
			</el-link>
			<el-link
				v-else-if="infoData.refundOrderDetail.refundStatus === 2"
				@click="jumpPagerRefundDetail(infoData.refundOrderDetail.refundOrderId)"
				type="warning"
				:underline="false"
				icon="el-icon-alarm-clock">
				商家拒绝退款
			</el-link>
		</div>

		<!-- 操作 -->
		<div class="operation common">
			<el-link
				@click="jumpPagerRefundDetail(infoData.refundOrderDetail.refundOrderId)"
				type="primary"
				:underline="false">
				退款详情
			</el-link>

			<el-link type="primary" :underline="false" icon="el-icon-alarm-clock">
				<negotiationModal />
			</el-link>
		</div>
	</div>
</template>

<script>
import GoodsItem from '../../goods-item/GoodsItem.vue'
import negotiationModal from '../../modal-negotiation/negotiationModal.vue'
export default {
	components: {
		GoodsItem,
		negotiationModal,
	},
	props: {
		infoData: {
			type: Object,
		},
		config: {
			type: Object,
		},
	},

	data() {
		return {}
	},

	methods: {
		//退款详情
		jumpPagerRefundDetail(id) {
			this.$router.push({
				path: 'refundDetail',
				query: { id },
			})
		},
	},
}
</script>

<style scoped>
.order-item-content {
	display: flex;
	justify-content: flex-start;
	padding: 20px 0px;
	text-align: center;
}

.common {
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-width: 150px;
	max-width: 150px;
	box-sizing: border-box;
}
.goods {
	min-width: 500px;
	max-width: 500px;
}
</style>
