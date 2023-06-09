<template>
	<div class="order-detail">
		<!-- <h1>订单详情</h1> -->
		<StatusHeader :infoData="refundOrderItem" :steps="steps" :config="config" />

		<!-- 退款信息 -->
		<SectionHeader sectionHeader="退款信息" />
		<SectionInfoV1 :infoData="refundOrderItem" />
		<!-- 协商历史 -->
		<SectionHeader sectionHeader="协商历史" />
		<SectionInfoV2 />
	</div>
</template>

<script>
import StatusHeader from '../../base-ui/status-header/StatusHeader'
import SectionHeader from '../../base-ui/section-header/SectionHeader.vue'
import SectionInfoV1 from '../../base-ui/section-Info-v1/SectionInfoV1.vue'
import SectionInfoV2 from '../../base-ui/section-info-v2/SectionInfoV2.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('orderStore')
export default {
	components: {
		StatusHeader,
		SectionHeader,
		SectionInfoV1,
		SectionInfoV2,
	},
	data() {
		return {
			//资金信息
			fundTableData: [
				{
					payable: 1000,
					freight: 15,
					shopFreight: 10,
					technicalServiceFee: 5,
					technicalServiceDiscount: 0.6,
					platformSubsidies: 10,
					income: 400,
				},
			],

			steps: ['发起申请', '商家处理', '退款完毕'],

			//header配置项
			config: {
				isShowTrack: false,
				isShowDispatch: false,
				isShowRefundDetail: false,
				isEvaluationDetails: false,
				isShowSteps: true,
				isShowNegotiationModal: true,
			},

			// 订单id
			orderId: '',
		}
	},
	created() {
		// 获取订单Id
		this.getOrderId()
		//根据订单id发起请求
		this.getRefundOrderDetail({ id: this.orderId })
	},
	methods: {
		//引入store中方法
		...mapActions(['getRefundOrderItemAction']),

		//获取订单id
		getOrderId() {
			this.orderId = this.$route.query.id
		},
		//根据订单id发起请求
		getRefundOrderDetail(params) {
			this.getRefundOrderItemAction(params)
		},
	},
	computed: {
		...mapState(['refundOrderItem']),
	},
}
</script>

<style scoped></style>
