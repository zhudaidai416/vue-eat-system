<template>
	<div class="info">
		<div class="list-card">
			<InfoCard
				title="交易信息"
				:infoData="infoData.transactionDetail"
				:cardItemConfig="tranCardConfig" />
			<InfoCard
				title="发票信息"
				:infoData="infoData.invoiceDetail"
				:cardItemConfig="invoiceCardConfig" />
			<InfoCard
				title="配送信息"
				:infoData="infoData.addressDetail"
				:cardItemConfig="addressCardConfig" />
			<InfoCard
				title="买家信息"
				:infoData="infoData.customerDetail"
				:cardItemConfig="customerCardConfig" />
		</div>
	</div>
</template>

<script>
import InfoCard from '../section-Info-v1-card/InfoCard.vue'

export default {
	components: {
		InfoCard,
	},
	props: {
		infoData: {
			type: Object,
			default: () => {},
		},
	},

	data() {
		return {
			//交易信息卡片配置
			tranCardConfig: [
				{
					field: 'orderId',
					label: '订单编号',
					isShowCopy: true,
					type: 'default',
				},
				{
					field: 'transNumber',
					label: '交易编号',
					isShowCopy: true,
					type: 'default',
				},
				{
					field: 'orderType',
					label: '订单类型',
					isShowCopy: false,
					type: 'orderType',
				},
				{
					field: 'creatAt',
					label: '创建时间',
					isShowCopy: false,
					type: 'time',
				},
				{
					field: 'payAt',
					label: '付款时间',
					isShowCopy: false,
					type: 'time',
				},
			],
			//发票信息卡片配置
			invoiceCardConfig: [
				{
					field: 'InvoiceMethod',
					label: '开票方法',
					isShowCopy: false,
					type: 'InvoiceMethod',
				},
				{
					field: 'InvoiceType',
					label: '发票类型',
					isShowCopy: false,
					type: 'InvoiceType',
				},
				{
					field: 'InvoiceContent',
					label: '发票内容',
					isShowCopy: false,
					type: 'default',
				},
				{
					field: 'InvoiceHead',
					label: '发票抬头',
					isShowCopy: false,
					type: 'default',
				},
				{
					field: 'enterpriseNumber',
					label: '企业税号',
					isShowCopy: false,
					type: 'default',
				},
			],
			//配送信息卡片配置
			addressCardConfig: [
				{
					field: 'address',
					label: '配送地址',
					isShowCopy: false,
					type: 'default',
				},
				{
					field: 'tranfromMethod',
					label: '配送方式',
					isShowCopy: false,
					type: 'tranfromMethod',
				},
				{
					field: 'estimatedTime',
					label: '预计时间',
					isShowCopy: false,
					type: 'time',
				},
				{
					field: 'tablewareNum',
					label: '餐具数量',
					isShowCopy: false,
					type: 'tablewareNum',
				},
				{
					field: 'orderNote',
					label: '订单备注',
					isShowCopy: false,
					type: 'default',
				},
			],
			//买家信息
			customerCardConfig: [
				{
					field: 'customerNickName',
					label: '买家昵称',
					isShowCopy: false,
					type: 'customerNickName',
				},
				{
					field: 'customerPhone',
					label: '买家手机号',
					isShowCopy: false,
					type: 'default',
				},
				{
					field: 'customerDevice',
					label: '顾客设备',
					isShowCopy: false,
					type: 'default',
				},
			],
		}
	},
}
</script>

<style scoped>
.list-card {
	display: flex;
	overflow-x: scroll;
}
</style>
