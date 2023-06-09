<template>
	<div class="status-heder">
		<div class="top">
			<!-- 左侧状态按钮 -->

			<div class="top-left">
				<!-- <h1 class="title">订单状态：顾客已下单，等待付款</h1> -->
				<h1 class="title">
					<slot name="orderStatusSlot" :status="infoData">
						订单状态：{{ infoData.orderDetail.orderStatus | orderDetailStatusTitle }}
					</slot>
				</h1>
				<el-button
					@click="jumpPageTrack(infoData.orderDetail.orderId)"
					v-show="config.isShowTrack"
					round>
					订单跟踪
				</el-button>
				<el-button
					@click="jumpPageDispatch(infoData.orderDetail.orderId)"
					v-show="config.isShowDispatch"
					round>
					调度跟踪
				</el-button>
				<el-button
					@click="jumpPageRefundDetail(infoData.orderDetail.orderId)"
					v-show="config.isShowRefundDetail"
					round>
					退款详情
				</el-button>
				<el-button
					@click="isEvaluationDetails(infoData.orderDetail.orderId)"
					v-show="config.isEvaluationDetails"
					round>
					评价详情
				</el-button>
				<el-button round size="mini">
					<negotiationModal v-show="config.isShowNegotiationModal" />
				</el-button>
			</div>

			<!-- 右侧步骤条 -->
			<el-steps
				v-show="config.isShowSteps"
				class="top-right"
				:active="infoData.orderDetail.orderStatus"
				finish-status="success"
				align-center>
				<el-step v-for="step in steps" :key="step" :title="step"></el-step>
			</el-steps>
		</div>
		<!-- 小提示 -->
		<div class="tips">
			<span>
				买家(小默123)需在
				<el-link type="warning" :underline="false" class="el-icon-timer">9分56秒</el-link>
				内付款；若未及时付款，系统将自动取消订单。
			</span>
		</div>
	</div>
</template>

<script>
import negotiationModal from '../../base-ui/modal-negotiation/negotiationModal.vue'
export default {
	name: 'StatusHeader',
	components: { negotiationModal },
	props: {
		//header配置项
		config: {
			type: Object,
			default: () => ({
				isShowTrack: true,
				isShowDispatch: true,
				isShowRefundDetail: false,
				isEvaluationDetails: false,
				isShowSteps: true,
				isShowNegotiationModal: false,
			}),
		},

		//header数据
		infoData: {
			type: Object,
			default: () => {},
		},
		//配置header
		steps: {
			type: Array,
			default: () => ['顾客下单', '顾客付款', '商家接单', '配送商品', '确认送达', '评价'],
		},
	},

	data() {
		return {}
	},
	methods: {
		//订单详情呢
		jumpPageDetail(id) {
			this.$router.push({ path: '/orderDetail', query: { id } })
		},
		//订单追踪
		jumpPageTrack(id) {
			this.$router.push({ path: '/orderTrack', query: { id } })
		},
		//调度追踪
		jumpPageDispatch(id) {
			this.$router.push({ path: '/orderDispatch', query: { id } })
		},
		//退款关闭
		jumpPageRefundClose(id) {
			this.$router.push({ path: '/refundClose', query: { id } })
		},
		//退款详情
		jumpPageRefundDetail(id) {
			this.$router.push({ path: '/refundDetail', query: { id } })
		},
	},

	filters: {
		orderDetailStatusTitle(val) {
			switch (val) {
				case 0:
					return '顾客下单'
				case 1:
					return '顾客付款'
				case 2:
					return '商家接单'
				case 3:
					return '配送商品'
				case 4:
					return '确认送达'
				case 5:
					return '评价'

				default:
					break
			}
		},
	},
}
</script>

<style scoped>
.top {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.top-left {
	flex: 30%;
}
.top-left > h1 {
	margin-top: 30px;
	margin-bottom: 30px;
}
.top-right {
	flex: 70%;
}
.tips {
	margin-top: 30px;
	margin-bottom: 30px;
}

.tips > span {
	background-color: #fafafa;
	padding: 10px 10px;
	font-size: 14px;
	color: #999999;
}
</style>
