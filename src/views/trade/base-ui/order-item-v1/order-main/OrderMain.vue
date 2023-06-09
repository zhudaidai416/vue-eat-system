<template>
	<div class="order-item-content">
		<!-- 订单的商品列表 -->
		<div :style="config.goodsStyle" class="common">
			<GoodsItem
				v-for="item in infoData.goodsDetails"
				:key="item.id"
				:goods="item"
				:config="config" />
		</div>
		<!-- 收货人 -->
		<div class="consigneeName common">
			<div>
				{{ infoData.customerDetail.customerNickName }}
				<el-popover
					placement="left"
					:title="infoData.addressDetail.customerNickName"
					width="200"
					trigger="click"
					visible-arrow
					content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<el-descriptions
						:column="1"
						:labelStyle="{ 'font-size': '12px', color: '#c0c4cc' }"
						:contentStyle="{ 'font-size': '12px', color: '#c0c4cc' }">
						<el-descriptions-item label="地址">
							{{ infoData.addressDetail.address }}
						</el-descriptions-item>
						<el-descriptions-item label="电话">
							{{ infoData.customerDetail.customerPhone }}
						</el-descriptions-item>
					</el-descriptions>
					<template #reference>
						<el-link class="el-icon-user"> </el-link>
					</template>
				</el-popover>
			</div>
		</div>
		<!-- 配送人 -->
		<div class="dispatcher common">
			<span :style="{ 'font-size': '14px', padding: '5px 0px', width: '150px' }">
				{{ infoData.orderDetail.dispatcher }}
			</span>
			<span
				:style="{
					'font-size': '14px',
					color: '#c0c4cc',
					padding: '5px 0px',
					width: '150px',
				}">
				+86{{ infoData.orderDetail.dispatcherPhone }}
			</span>
		</div>
		<!-- 应付款 -->
		<div class="payable common">
			<span :style="{ 'font-size': '14px', padding: '5px 0px', width: '150px' }">
				<!-- {{ payable(infoData) }} -->
				{{ infoData.orderDetail.accountPayable }} 元
			</span>
			<span
				:style="{
					'font-size': '14px',
					color: '#c0c4cc',
					padding: '5px 0px',
					width: '150px',
				}">
				(含打包:₱15.00, 配送:₱30.00, 优惠:₱-30.00)
			</span>
		</div>
		<!-- 售后 -->
		<div class="afterSale common">
			<el-link
				v-if="infoData.orderDetail.aftersaleStatus === 0"
				@click="jumpPageRefundDetail(infoData.orderDetail.orderId)"
				type="primary"
				:underline="false"
				icon="el-icon-alarm-clock">
				退款关闭
			</el-link>
			<el-link
				v-else-if="infoData.orderDetail.aftersaleStatus === 1"
				@click="jumpPageRefundDetail(infoData.orderDetail.orderId)"
				type="primary"
				:underline="false"
				icon="el-icon-alarm-clock">
				待商家退款
			</el-link>
			<span v-if="infoData.orderDetail.aftersaleStatus === 2">商家拒绝退款</span>
			<el-link
				v-show="infoData.orderDetail.aftersaleStatus === 2"
				@click="jumpPageRefundDetail(infoData.orderDetail.orderId)"
				type="primary"
				:underline="false"
				icon="el-icon-alarm-clock">
				详情
			</el-link>
		</div>
		<!-- 交易状态 -->
		<div class="common">
			<el-link v-if="infoData.transactionDetail.transStatus === 0" :underline="false">
				未到店预警
			</el-link>
			<el-link
				v-if="infoData.transactionDetail.transStatus === 1"
				type="primary"
				:underline="false"
				icon="el-icon-alarm-clock">
				未离店预警
			</el-link>
			<el-link
				v-if="infoData.transactionDetail.transStatus === 2"
				type="warning"
				:underline="false"
				icon="el-icon-alarm-clock">
				未送达预警
			</el-link>
			<el-link
				v-if="infoData.transactionDetail.transStatus === 3"
				type="danger"
				:underline="false"
				icon="el-icon-alarm-clock">
				超时未到店
			</el-link>
			<el-link
				v-if="infoData.transactionDetail.transStatus === 4"
				type="danger"
				:underline="false"
				icon="el-icon-alarm-clock">
				超时未取货
			</el-link>
			<el-link
				v-if="infoData.transactionDetail.transStatus === 5"
				type="danger"
				:underline="false"
				icon="el-icon-alarm-clock">
				超时未送达
			</el-link>
		</div>
		<!-- 操作 -->
		<div class="operation common">
			<el-link
				@click="jumpPageDetail(infoData.orderDetail.orderId)"
				type="primary"
				:underline="false">
				订单详情
			</el-link>
			<el-link
				@click="jumpPageTrack(infoData.orderDetail.orderId)"
				type="primary"
				:underline="false">
				订单跟踪
			</el-link>
			<el-link
				@click="jumpPageTrack(infoData.orderDetail.orderId)"
				type="primary"
				:underline="false">
				调度跟踪
			</el-link>
			<el-link type="primary" :underline="false" icon="el-icon-alarm-clock">
				<negotiationModal />
			</el-link>
		</div>
	</div>
</template>

<script>
import GoodsItem from '../../goods-item/GoodsItem.vue'
import negotiationModal from '../../modal-negotiation//negotiationModal.vue'
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
		//订单详情呢
		jumpPageDetail(id) {
			console.log(id)
			this.$router.push({
				path: 'orderDetail/',
				query: { id },
			})
		},
		//调度追踪
		jumpPageTrack(id) {
			console.log(id)
			this.$router.push({
				path: 'orderTrack/',
				query: { id },
			})
		},
		//退款关闭
		jumpPageRefundClose(id) {
			console.log(id)
			this.$router.push({
				path: 'refundClose/',
				query: { id },
			})
		},
		//退款详情
		jumpPageRefundDetail(id) {
			console.log(id)
			this.$router.push({
				path: 'refundDetail/',
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
