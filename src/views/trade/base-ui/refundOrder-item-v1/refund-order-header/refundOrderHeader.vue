<template>
	<div :config="config" :infoData="infoData" class="order-item-title">
		<div class="order-col">
			<span>{{ config[0].title }}:</span>
			<span>{{ infoData.orderDetail.orderId }}</span>
		</div>
		<div class="order-col">
			<span>{{ config[1].title }}:</span>
			<span>{{ infoData.orderDetail.creatAt }}</span>
		</div>
		<div class="order-col">
			<span>{{ config[2].title }}:</span>
			<el-link type="primary" :underline="false" @click="jumpPageCustomerDetail()">
				{{ infoData.orderDetail.ccustomerName }}
				<i class="el-icon-view el-icon--right"></i>
			</el-link>
		</div>
		<div class="order-col">
			<el-link type="primary" :underline="false" @click="jumpPageShopDetail()">
				<i class="el-icon-view el-icon--left"></i>
				{{ infoData.shopDetail.shopAdress }}
				<el-tag v-if="infoData.orderDetail.orderType === 0" size="mini" type="success">
					到店自取
				</el-tag>
				<el-tag v-if="infoData.orderDetail.orderType === 1" size="mini" type="danger">
					外卖订单
				</el-tag>
			</el-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		config: {
			type: Array,
		},
		infoData: {
			type: Object,
		},
	},
	methods: {
		//跳转商家详情
		jumpPageShopDetail() {
			this.$router.push('storeManagement/shopDetail/11111')
		},
		//跳转买家详情
		jumpPageCustomerDetail() {
			this.$router.push('user/verifyDetails/11111')
		},
	},
}
</script>

<style scoped>
.order-item-title {
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	font-size: 14px;
	background-color: #f3f3f3;
	color: rgb(162, 162, 162);
}
.order-col {
	padding-right: 40px;
}
</style>
