<template>
	<div class="order-track">
		<!-- <h1>调度追踪</h1> -->
		<!-- 订单信息 -->
		<OrderInfoV1 :infoData="orderItem" />
		<!-- 分割线 -->
		<el-divider direction="vertical" />
		<!-- 配送动态 -->
		<OrderStatusV1 />
	</div>
</template>

<script>
import OrderInfoV1 from '../../base-ui/order-info-v1/OrderInfoV1.vue'
import OrderStatusV1 from '../../base-ui/order-status-v1/OrderStatusV1.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('orderStore')
export default {
	components: {
		OrderInfoV1,
		OrderStatusV1,
	},
	data() {
		return {
			orderInfo: {
				orderNum: '12232964103521',
				type: '外卖订单',
				buyerNickName: '小莫',
				address: '刘吃货，+8613612345678,广东省深圳市龙华区民治街道横岭二区38栋1楼',
				shopName: '啦小龙龙虾店',
				shopAddress: '张店长，+8615312345678,广东省深圳市龙华区民治街道民丰路鑫茂公寓旁',
				dispatchType: '平台专送',
				dispatcher: '王骑手,+86134324523',
				goods: [
					{
						id: 645645,
						name: '金枕榴',
						specifications: '七寸',
						attr: '中辣',
						price: 285,
						discount: 0.9,
						amount: 6,
						url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						srcList: [
							'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
							'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
						],
					},
					{
						id: 3465356,
						name: '金枕榴',
						specifications: '七寸',
						attr: '中辣',
						price: 285,
						discount: 0.9,
						amount: 6,
						url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						srcList: [
							'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
							'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
						],
					},
					{
						id: 45674,
						name: '金枕榴',
						specifications: '七寸',
						attr: '中辣',
						price: 285,
						discount: 0.9,
						amount: 6,
						url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						srcList: [
							'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
							'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
						],
					},
					{
						id: 56354356,
						name: '金枕榴',
						specifications: '七寸',
						attr: '中辣',
						price: 285,
						discount: 0.9,
						amount: 6,
						url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						srcList: [
							'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
							'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
						],
					},
				],
			},
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

<style scoped>
.order-track {
	display: flex;
}

.order-track >>> .el-divider--vertical {
	/* width: 1000px; */
	height: inherit;
	margin: 0px 10px;
}
</style>
