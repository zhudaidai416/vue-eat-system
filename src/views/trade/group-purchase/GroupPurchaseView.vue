<template>
	<div class="order">
		<!-- <h1 class="order-title">订单管理</h1> -->
		<div class="page-content">
			<!-- 表单 -->
			<GroupOrders />

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
import GroupOrders from './cpns/GroupOrders'
import OrderItem from '../base-ui/order-item-v1/OrderItem.vue'
import PageListTitle from '../base-ui/page-list-title/PageListTitle.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('orderStore')

export default {
	name: 'orderManagement',
	components: {
		GroupOrders,
		OrderItem,
		PageListTitle,
	},
	data() {
		return {
			// 页面内容标题配置项
			pageListTitleConfig: [
				'团购商品',
				'团购价',
				'数量',
				'预留手机',
				'应付款',
				'售后',
				'状态',
				'操作',
			],
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
						'min-width': '650px',
						'max-width': '650px',
					},
				},
			},
			//分页器
			currentPage: 5,
			visible: false,

			//模拟数据
			orderList: [
				{
					invoiceDetail: {
						InvoiceMethod: 1,
						InvoiceType: 0,
						InvoiceContent: '入_入 入_',
						InvoiceHead: '业^业 业^',
						enterpriseNumber: -4658684791479996,
					},
					customerDetail: {
						customerNickName: '娜=娜 娜=',
						customerPhone: 18171282648,
						customerDevice: '娜=娜 ',
					},
					addressDetail: {
						address: '云南省 丽江市 华坪县',
						tranfromMethod: 1,
						estimatedTime: 1665638105,
						tablewareNum: 0,
						orderNote: '在段等色率目们信目集构后采说统条精。',
					},
					goodsDetails: [
						{
							goodsPic: 'http://dummyimage.com/336x280',
							goodsId: 500000201412131460,
							specifications: '那_那+那_',
							goodsNote: '却热思者',
							goodsPrice: 79.3,
							goodsName: '洋',
							goodsAmount: 7,
						},
						{
							goodsPic: 'http://dummyimage.com/120x600',
							goodsId: 610000200305158300,
							specifications: '论 论@论 ',
							goodsNote: '质口阶导',
							goodsPrice: 95.430179,
							goodsName: '刚',
							goodsAmount: 8,
						},
						{
							goodsPic: 'http://dummyimage.com/300x600',
							goodsId: 150000200404104700,
							specifications: '品@品^品@',
							goodsNote: '近为派装',
							goodsPrice: 78.377219333,
							goodsName: '霞',
							goodsAmount: 3,
						},
					],
					orderDetail: {
						orderId: 150000199608012670,
						creatAt: '1665638105',
						customerNickName: '杰^杰 ',
						shopAdress: '澳门特别行政区 澳门半岛',
						ccustomerName: '明',
						dispatcher: '娜 娜',
						accountPayable: 96.41626898,
						aftersaleStatus: 0,
						orderType: 0,
						payAt: '1665638105',
						dispatcherPhone: '18133326574',
						orderStatus: 1,
					},
					transactionDetail: {
						orderId: 173348696302672,
						transNumber: -5781003250271800,
						orderType: 1,
						creatAt: '1665638105',
						payAt: '1665638105',
						transStatus: 3,
					},
					shopDetail: {
						shopAdress: '超',
						shopPhone: 18616658841,
						shopArea: '诸城市=诸城市',
						shopName: '静',
						takeFoodNumber: 410000201004217860,
					},
				},
				{
					invoiceDetail: {
						InvoiceMethod: 0,
						InvoiceType: 1,
						InvoiceContent: '公 公+公 ',
						InvoiceHead: '以-以/以-',
						enterpriseNumber: -1633478783431424,
					},
					customerDetail: {
						customerNickName: '秀英/秀英',
						customerPhone: 18106411269,
						customerDevice: '明+明/',
					},
					addressDetail: {
						address: '澳门特别行政区 离岛 -',
						tranfromMethod: 1,
						estimatedTime: 1665638105,
						tablewareNum: 1,
						orderNote: '一积明三新必争走中始六从研图由。',
					},
					goodsDetails: [
						{
							goodsPic: 'http://dummyimage.com/180x150',
							goodsId: 130000198206199170,
							specifications: '科@科-科@',
							goodsNote: '实或于般',
							goodsPrice: 70.947671458914,
							goodsName: '洋',
							goodsAmount: 10,
						},
						{
							goodsPic: 'http://dummyimage.com/120x90',
							goodsId: 110000200205218830,
							specifications: '类^类=类^',
							goodsNote: '有多层联',
							goodsPrice: 72.79476975566222,
							goodsName: '强',
							goodsAmount: 3,
						},
						{
							goodsPic: 'http://dummyimage.com/120x90',
							goodsId: 110000200907224160,
							specifications: '里-里_里-',
							goodsNote: '理处往外',
							goodsPrice: 92.25,
							goodsName: '娜',
							goodsAmount: 3,
						},
					],
					orderDetail: {
						orderId: 320000201610193300,
						creatAt: '1665638105',
						customerNickName: '洋@洋/',
						shopAdress: '黑龙江省 牡丹江市=黑龙江省 ',
						ccustomerName: '静',
						dispatcher: '芳-芳',
						accountPayable: 65.777927,
						aftersaleStatus: 1,
						orderType: 1,
						payAt: '1665638105',
						dispatcherPhone: '18112681267',
						orderStatus: 1,
					},
					transactionDetail: {
						orderId: -6562967902054976,
						transNumber: -1990912329397620,
						orderType: 1,
						creatAt: '1665638105',
						payAt: '1665638105',
						transStatus: 4,
					},
					shopDetail: {
						shopAdress: '杰',
						shopPhone: 18652775867,
						shopArea: '房山区_房山区',
						shopName: '艳',
						takeFoodNumber: 650000198006163000,
					},
				},
				{
					invoiceDetail: {
						InvoiceMethod: 1,
						InvoiceType: 1,
						InvoiceContent: '争_争@争_',
						InvoiceHead: '做+做 做+',
						enterpriseNumber: -2134158716166488,
					},
					customerDetail: {
						customerNickName: '丽^丽/丽^',
						customerPhone: 18641075554,
						customerDevice: '霞^霞^',
					},
					addressDetail: {
						address: '云南省 西双版纳傣族自治',
						tranfromMethod: 0,
						estimatedTime: 1665638105,
						tablewareNum: 1,
						orderNote: '何元进它话保习设矿国识日江此多接明。',
					},
					goodsDetails: [
						{
							goodsPic: 'http://dummyimage.com/234x60',
							goodsId: 440000200806104260,
							specifications: '便@便=便@',
							goodsNote: '县设龙里',
							goodsPrice: 70.2948444824907,
							goodsName: '涛',
							goodsAmount: 3,
						},
					],
					orderDetail: {
						orderId: 510000197503206200,
						creatAt: '1665638105',
						customerNickName: '刚 刚=',
						shopAdress: '湖南省 湘潭市_湖南省 湘潭市',
						ccustomerName: '洋',
						dispatcher: '强_强',
						accountPayable: 97.42281729628156,
						aftersaleStatus: 1,
						orderType: 1,
						payAt: '1665638105',
						dispatcherPhone: '18623046151',
						orderStatus: 2,
					},
					transactionDetail: {
						orderId: 3322150796652100,
						transNumber: 3066983618118364,
						orderType: 0,
						creatAt: '1665638105',
						payAt: '1665638105',
						transStatus: 1,
					},
					shopDetail: {
						shopAdress: '丽',
						shopPhone: 19826214546,
						shopArea: '梁子湖区+梁子湖',
						shopName: '洋',
						takeFoodNumber: 450000201310231740,
					},
				},
				{
					invoiceDetail: {
						InvoiceMethod: 0,
						InvoiceType: 1,
						InvoiceContent: '手=手@手=',
						InvoiceHead: '装-装^装-',
						enterpriseNumber: 2053501250561068,
					},
					customerDetail: {
						customerNickName: '杰-杰 杰-',
						customerPhone: 18635186626,
						customerDevice: '霞 霞 ',
					},
					addressDetail: {
						address: '辽宁省 铁岭市 调兵山市',
						tranfromMethod: 0,
						estimatedTime: 1665638105,
						tablewareNum: 0,
						orderNote: '政元动酸去率联理难候业度外现广往联交。',
					},
					goodsDetails: [
						{
							goodsPic: 'http://dummyimage.com/125x125',
							goodsId: 71000019810212664,
							specifications: '次@次-次@',
							goodsNote: '提处决看',
							goodsPrice: 79.393837721,
							goodsName: '艳',
							goodsAmount: 8,
						},
						{
							goodsPic: 'http://dummyimage.com/160x600',
							goodsId: 810000200608104700,
							specifications: '起_起+起_',
							goodsNote: '重青处看',
							goodsPrice: 65.36857,
							goodsName: '静',
							goodsAmount: 3,
						},
						{
							goodsPic: 'http://dummyimage.com/234x60',
							goodsId: 110000197512211790,
							specifications: '议_议=议_',
							goodsNote: '算形步省',
							goodsPrice: 86.2,
							goodsName: '秀英',
							goodsAmount: 6,
						},
					],
					orderDetail: {
						orderId: 430000199908221500,
						creatAt: '1665638105',
						customerNickName: '军 军-',
						shopAdress: '广西壮族自治区 北海市',
						ccustomerName: '强',
						dispatcher: '桂英^桂',
						accountPayable: 61.48642958,
						aftersaleStatus: 0,
						orderType: 1,
						payAt: '1665638105',
						dispatcherPhone: '18197122281',
						orderStatus: 2,
					},
					transactionDetail: {
						orderId: -8263657029748228,
						transNumber: 7558739111340228,
						orderType: 1,
						creatAt: '1665638105',
						payAt: '1665638105',
						transStatus: 3,
					},
					shopDetail: {
						shopAdress: '明',
						shopPhone: 19846586076,
						shopArea: '溆浦县 溆浦县',
						shopName: '勇',
						takeFoodNumber: 640000197308242300,
					},
				},
				{
					invoiceDetail: {
						InvoiceMethod: 1,
						InvoiceType: 0,
						InvoiceContent: '内@内@内@',
						InvoiceHead: '收+收+收+',
						enterpriseNumber: -5832541551860108,
					},
					customerDetail: {
						customerNickName: '静=静_静=',
						customerPhone: 18655815956,
						customerDevice: '秀兰_秀',
					},
					addressDetail: {
						address: '宁夏回族自治区 石嘴山市',
						tranfromMethod: 0,
						estimatedTime: 1665638105,
						tablewareNum: 3,
						orderNote: '提还快采置科见色马该总无千联器。',
					},
					goodsDetails: [
						{
							goodsPic: 'http://dummyimage.com/468x60',
							goodsId: 82000019821214720,
							specifications: '着 着@着 ',
							goodsNote: '联期般压',
							goodsPrice: 73.75100048006601,
							goodsName: '明',
							goodsAmount: 8,
						},
						{
							goodsPic: 'http://dummyimage.com/120x240',
							goodsId: 220000201802163520,
							specifications: '特/特@特/',
							goodsNote: '受称快办',
							goodsPrice: 96.0891856667625,
							goodsName: '平',
							goodsAmount: 6,
						},
					],
					orderDetail: {
						orderId: 710000197608315900,
						creatAt: '1665638105',
						customerNickName: '涛+涛+',
						shopAdress: '上海 上海市+上海 上海市',
						ccustomerName: '秀英',
						dispatcher: '涛=涛',
						accountPayable: 75.37725197658769,
						aftersaleStatus: 0,
						orderType: 0,
						payAt: '1665638105',
						dispatcherPhone: '18136907878',
						orderStatus: 0,
					},
					transactionDetail: {
						orderId: 7574138594940220,
						transNumber: 2442482202398200,
						orderType: 1,
						creatAt: '1665638105',
						payAt: '1665638105',
						transStatus: 2,
					},
					shopDetail: {
						shopAdress: '娜',
						shopPhone: 18633834891,
						shopArea: '新北区=新北区',
						shopName: '艳',
						takeFoodNumber: 420000202103051200,
					},
				},
			],
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
