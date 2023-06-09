<template>
	<div class="order">
		<!-- <h1 class="order-title">订单管理</h1> -->
		<div class="page-content">
			<!-- tabs组件 -->
			<el-tabs v-model="activeName">
				<!-- 异常订单 -->
				<el-tab-pane label="异常订单" name="first"> <AbnormalOrders /> </el-tab-pane>
				<!-- 历史订单 -->
				<el-tab-pane label="历史订单" name="second"><AllOrders /></el-tab-pane>
				<!-- 所有订单 -->
				<el-tab-pane label="所有订单" name="third"><HistoryOrders /></el-tab-pane>
			</el-tabs>

			<!-- 页面内容标题 -->
			<PageListTitle :config="pageListTitleConfig" />

			<!-- 订单列表 -->
			<OrderItem
				v-for="order in orderListData.orderList"
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
				:total="orderListData.total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import AbnormalOrders from './cpns/AbnormalOrders.vue'
import AllOrders from './cpns/AllOrders.vue'
import HistoryOrders from './cpns/HistoryOrders.vue'
import OrderItem from '../base-ui/order-item-v1/OrderItem.vue'
import PageListTitle from '../base-ui/page-list-title/PageListTitle.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('orderStore')

export default {
	name: 'orderManagement',
	components: {
		AbnormalOrders,
		AllOrders,
		HistoryOrders,
		OrderItem,
		PageListTitle,
	},
	data() {
		return {
			// 选项卡激活
			activeName: 'first',
			// 页面内容标题配置项
			pageListTitleConfig: ['商品', '收货人', '配送员', '应付款', '售后', '交易状态', '操作', ''],
			//订单配置项
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
					isShowPrice: true,
					isShowAttr: true,
					isShowAmount: true,
					isShowId: false,
					isSpecifications: true,
					isShowProps: true,
					isShowTradeSnapshot: false,
					//商品样式
					goodsStyle: {
						'min-width': '500px',
						'max-width': '500px',
					},
				},
			},
			//分页器
			currentPage: 1,
			visible: false,
		}
	},

	created() {
		this.getOrderList(this.currentPage)
	},

	methods: {
		...mapActions(['getOrderListAction']),
		// 请求页面数据
		getOrderList(currentPage) {
			this.getOrderListAction({
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
			this.getOrderList(this.currentPage)
		},
	},
	computed: {
		...mapState(['orderListData']),
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
