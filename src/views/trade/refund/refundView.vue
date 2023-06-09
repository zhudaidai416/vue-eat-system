<template>
	<div class="order">
		<!-- <h1 class="order-title">订单管理</h1> -->
		<div class="page-content">
			<!-- 表单 -->
			<refundOrders />

			<!-- 页面内容标题 -->
			<PageListTitle :config="pageListTitleConfig" />

			<!-- 订单列表 -->
			<refundOrderItem
				v-for="order in refundOrderList.orderList"
				:key="order.orderDetail.orderId"
				:infoData="order"
				:config="orderListItemConfig" />

			<!-- 分页器 -->
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage"
				:page-sizes="[5, 20, 30, 40]"
				:page-size="5"
				layout="total, sizes, prev, pager, next, jumper"
				:total="refundOrderList.total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import refundOrders from './cpns/refundOrders.vue'
import refundOrderItem from '../base-ui/refundOrder-item-v1/refundOrderItem.vue'
import PageListTitle from '../base-ui/page-list-title/PageListTitle.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('orderStore')

export default {
	name: 'orderManagement',
	components: {
		refundOrders,
		refundOrderItem,
		PageListTitle,
	},
	data() {
		return {
			// 页面内容标题配置项
			pageListTitleConfig: [
				'商品',
				'交易金额',
				'退款金额',
				'退款原因',
				'配送结果',
				'最近申请时间',
				'退款状态',
				'操作',
			],
			orderListItemConfig: {
				// 订单title配置向
				orderHeaderTitle: [
					{
						field: 'orderNumber',
						title: '订单号',
					},
					{
						field: 'orderNumber',
						title: '创建时间',
					},
					{
						field: 'orderNumber',
						title: '买家',
					},
					{
						field: 'orderNumber',
						title: '',
					},
				],
				//商品item配置
				configGoodsItem: {
					isShowPreview: true,
					isShowPrice: false,
					isShowAttr: true,
					isShowAmount: false,
					isShowId: true,
					isSpecifications: true,
					isShowProps: true,
					isShowTradeSnapshot: false,

					//商品样式
					goodsStyle: {
						'min-width': '500px',
						'max-width': '500px',
					},

					//col配置
					colConfig: [
						{
							label: '商品',
							field: 'refundGoodsDetail',
						},
						{
							label: '交易金额',
							field: 'refundOrderDetail.tradePrice',
						},
						{
							label: '退款金额',
							field: 'refundPrice',
						},
						{
							label: '退款原因',
							field: 'reason',
						},
						{
							label: '配送结果',
							field: 'result',
						},
						{
							label: '最近申请时间',
							field: 'recentlyTime',
						},
						{
							label: '退款状态',
							field: 'refundStatus',
						},
						{
							label: '操作',
							field: '',
						},
					],
				},
			},
			//分页器
			currentPage: 1,
			visible: false,
		}
	},
	created() {
		this.getRefundOrderList(this.currentPage)
	},

	methods: {
		...mapActions(['getRefundOrderLisAction']),
		// 请求页面数据
		getRefundOrderList(currentPage) {
			this.getRefundOrderLisAction({
				currentPage,
				pageSize: 5,
			})
		},
		//分页器
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
			this.getRefundOrderList(this.currentPage)
		},
	},
	computed: {
		...mapState(['refundOrderList']),
	},
}
</script>

<style scoped>
/* * {
	outline: solid rebeccapurple;
} */
.order {
	overflow-x: scroll;
}
.order-title {
	text-align: left;
	margin: 20px 0px;
}

.page-content {
	/* overflow-x: scroll; */
	min-width: 1550px;
	max-width: 1550px;
}
</style>
