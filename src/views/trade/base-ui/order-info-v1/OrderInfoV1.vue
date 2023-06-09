<template>
	<div class="order-track-info" :infoData="infoData">
		<h4 :style="{ 'padding-bottom': '20px' }">订单信息</h4>
		<el-descriptions
			:column="1"
			:labelStyle="{ 'font-size': '13px', color: '#999999' }"
			:contentStyle="{ 'font-size': '13px', color: '#000000' }">
			<el-descriptions-item label="订单编号">
				{{ infoData.orderDetail.orderId }}
				<el-link type="primary" :underline="false" :style="{ 'padding-left': '10px' }">
					复制
				</el-link>
			</el-descriptions-item>
			<el-descriptions-item label="订单类型">
				<h4>{{ infoData.orderDetail.orderType | orderType }}</h4>
			</el-descriptions-item>
			<el-descriptions-item label="买家昵称">
				<el-link
					type="primary"
					:underline="false"
					@click="jumpPageCustomerDetail(infoData.customerDetail.customerId)">
					{{ infoData.customerDetail.customerNickName }}
				</el-link>
			</el-descriptions-item>
			<el-descriptions-item label="收货地址">{{
				infoData.addressDetail.address
			}}</el-descriptions-item>
			<el-descriptions-item label="店铺名称">
				<el-link
					type="primary"
					:underline="false"
					@click="jumpPageShopDetail(infoData.shopDetail.shopId)">
					{{ infoData.shopDetail.shopName }}
				</el-link>
			</el-descriptions-item>
			<el-descriptions-item label="店铺地址">{{
				infoData.shopDetail.shopAdress
			}}</el-descriptions-item>
			<el-descriptions-item label="配送方式">
				<h4>{{ infoData.addressDetail.tranfromMethod | tranfromMethod }}</h4>
			</el-descriptions-item>
			<el-descriptions-item label="配送员">
				<el-link
					type="primary"
					:underline="false"
					@click="jumpPageDispatcherDetail(infoData.transactionDetail.dispatcherId)">
					{{ infoData.orderDetail.dispatcher }}
				</el-link>
			</el-descriptions-item>
			<!-- 商品列表 -->
			<el-descriptions-item label="商品明细">
				<div class="order-goods-list">
					<GoodsItem
						v-for="item in infoData.goodsDetails"
						:key="item.id"
						:goods="item"
						:config="configGoodsItem"></GoodsItem>
				</div>
			</el-descriptions-item>
		</el-descriptions>
	</div>
</template>

<script>
import GoodsItem from '../goods-item/GoodsItem.vue'
export default {
	components: {
		// GoodsList,
		GoodsItem,
	},

	props: {
		infoData: {
			type: Object,
		},
	},

	data() {
		return {
			//商品item配置
			configGoodsItem: {
				isShowPreview: true,
				isShowPrice: false,
				isShowAttr: true,
				isShowAmount: false,
				isShowId: true,
				isSpecifications: true,
				isShowProps: false,
				isShowTradeSnapshot: false,
			},
		}
	},

	methods: {
		jumpPageCustomerDetail(id) {
			this.$router.push({ path: 'user/memberDetails/' + id })
		},
		jumpPageShopDetail(id) {
			this.$router.push({ path: 'businessManagement/ownedBusinessDetails/' + id })
		},
		jumpPageDispatcherDetail(id) {
			this.$router.push({ path: 'marKiManagement/dispatcherDetails/' + id })
		},
	},

	filters: {
		// 订单类型
		orderType(val) {
			switch (val) {
				case 0:
					return '外卖订单'
				case 1:
					return '客户自取'

				default:
					break
			}
		},
		//配送方式
		tranfromMethod(val) {
			switch (val) {
				case 0:
					return '平台专送'
				case 1:
					return '众包平台'

				default:
					break
			}
		},
	},
}
</script>

<style scoped>
.order-track-info {
	width: 500px;
}
.order-track-info,
.order-track-status {
	padding: 10px 10px;
}

.order-track-status .step {
	padding: 0px 25%;
}
</style>
