import {
	getOrderListApi,
	getOrderDetailApi,
	getRefundOrderListApi,
	getRefundOrderItemApi,
} from '../../api/trade/order'

export default {
	namespaced: true,
	state: () => ({
		orderListData: {},
		orderItem: {},
		refundOrderList: {},
		refundOrderItem: {},
	}),
	getters: {},
	mutations: {
		setOrderListData(state, payload) {
			state.orderListData = payload
		},
		setOrderItem(state, payload) {
			state.orderItem = payload
		},
		setRefundOrderList(state, payload) {
			state.refundOrderList = payload
		},
		setRefundOrderItem(state, payload) {
			state.refundOrderItem = payload
		},
	},
	actions: {
		// 获取订单列表
		getOrderListAction({ commit }, params) {
			getOrderListApi(params).then(res => {
				commit('setOrderListData', res.data)
			})
		},
		// 获取订单详情
		getOrderDetailAction({ commit }, params) {
			console.log(params)
			getOrderDetailApi(params).then(res => {
				commit('setOrderItem', res)
			})
		},
		// 获取退款订单列表
		getRefundOrderLisAction({ commit }, params) {
			getRefundOrderListApi(params).then(res => {
				commit('setRefundOrderList', res.data)
			})
		},
		// 获取退款订单详情
		getRefundOrderItemAction({ commit }, params) {
			getRefundOrderItemApi(params).then(res => {
				commit('setRefundOrderItem', res)
			})
		},
	},
}
