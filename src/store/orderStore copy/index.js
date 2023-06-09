import { getOrderListApi } from '../../api/trade/order'

export default {
	namespaced: true,
	state: () => ({
		orderData: [
			{
				orderNumber: '524263456',
				packingFee: 15,
				afterSale: '商家拒绝退款',
				orderState: 0,
				shopName: '小飞龙某某店',
				orderType: 0,
				createAt: '2022-02-22 15:55:19',
				goods: [
					{
						id: 345634556,
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
				consigneeInfo: {
					name: '刘憨憨',
					nickName: '小莫',
					address: '广东省深圳市龙华区民治街道大润发商场一楼',
					phone: '+8613612345678',
				},
				dispatcher: {
					name: '王骑手',
					phone: '+8613612345678',
				},
			},
			{
				orderNumber: '43563366745',
				packingFee: 15,
				afterSale: '商家拒绝退款',
				orderState: 0,
				shopName: '小飞龙某某店',
				orderType: 0,
				createAt: '2022-02-22 15:55:19',
				goods: [
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
						id: 345634556,
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
				consigneeInfo: {
					name: '刘吃货',
					nickName: '小莫',
					address: '广东省深圳市龙华区民治街道大润发商场一楼',
					phone: '+8613612345678',
				},
				dispatcher: {
					name: '王骑手',
					phone: '+8613612345678',
				},
			},
			{
				orderNumber: '8679678',
				packingFee: 15,
				afterSale: '商家拒绝退款',
				orderState: 0,
				shopName: '小飞龙某某店',
				orderType: 0,
				createAt: '2022-02-22 15:55:19',
				goods: [
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
						id: 12243123,
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
						id: 345634556,
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
				consigneeInfo: {
					name: '刘吃货',
					nickName: '小莫',
					address: '广东省深圳市龙华区民治街道大润发商场一楼',
					phone: '+8613612345678',
				},
				dispatcher: {
					name: '王骑手',
					phone: '+8613612345678',
				},
			},
			{
				orderNumber: '254453452',
				packingFee: 15,
				afterSale: '商家拒绝退款',
				orderState: 0,
				shopName: '小飞龙某某店',
				orderType: 0,
				createAt: '2022-02-22 15:55:19',
				goods: [
					{
						id: 12243123,
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
						id: 345634556,
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
				consigneeInfo: {
					name: '刘吃货',
					nickName: '小莫',
					address: '广东省深圳市龙华区民治街道大润发商场一楼',
					phone: '+8613612345678',
				},
				dispatcher: {
					name: '王骑手',
					phone: '+8613612345678',
				},
			},
		],

		orderList: [],
	}),
	getters: {},
	mutations: {
		setOrderList(state, payload) {
			state.orderList = payload
		},
	},
	actions: {
		getOrderListAction({ commit }, params) {
			getOrderListApi(params).then(res => {
				console.log(res.data.data)
				commit('setOrderList', res.data.data)
			})
		},
	},
}
