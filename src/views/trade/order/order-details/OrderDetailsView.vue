<template>
	<div class="order-detail">
		<!-- <h1>订单详情</h1> -->
		<StatusHeader :infoData="orderItem" :steps="steps" />
		<!-- 基本信息 -->
		<SectionHeader sectionHeader="基本信息" />
		<SectionInfoV1 :infoData="orderItem" />
		<!-- 商品信息 -->
		<SectionHeader sectionHeader="商品信息" />
		<OrderTableV1 :infoData="orderItem" />
		<!-- 资金信息 -->
		<SectionHeader sectionHeader="资金信息" />
		<OrderTableV2 :infoData="fundTableData" />
	</div>
</template>

<script>
import StatusHeader from '../../base-ui/status-header/StatusHeader'

import SectionInfoV1 from '../../base-ui/section-Info-v1/SectionInfoV1'
import OrderTableV1 from '../../base-ui/section-order-table-v1/OrderTableV1.vue'
import OrderTableV2 from '../../base-ui/section-order-table-v2/OrderTableV2.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('orderStore')
export default {
	components: {
		StatusHeader,
		SectionInfoV1,
		OrderTableV1,
		OrderTableV2,
	},
	data() {
		return {
			//配置header

			steps: ['顾客下单', '顾客付款', '商家接单', '配送商品', '确认送达', '评价'],

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

			// 订单id
			orderId: '',
		}
	},
	created() {
		// 获取订单Id
		this.getOrderId()
		//根据订单id发起请求
		this.getOrderDetail({ id: this.orderId })
	},
	methods: {
		//引入store中方法
		...mapActions(['getOrderDetailAction']),

		//获取订单id
		getOrderId() {
			this.orderId = this.$route.query.id
		},
		//根据订单id发起请求
		getOrderDetail(params) {
			this.getOrderDetailAction(params)
		},
	},
	computed: {
		...mapState(['orderItem']),
	},
}
</script>

<style scoped></style>
