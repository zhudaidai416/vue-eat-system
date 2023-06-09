import axios from '../../../config/axios.js'

//获取订单列表
export function getOrderListApi(params) {
	return axios({
		method: 'get',
		url: 'http://127.0.0.1:4523/m1/1680117-0-default/orderList',
		params,
	})
}

//获取订单详情
export function getOrderDetailApi(params) {
	return axios({
		method: 'get',
		url: 'http://127.0.0.1:4523/m1/1680117-0-default/orderDetail',
		params,
	})
}

//获取订单列表
export function getRefundOrderListApi(params) {
	return axios({
		method: 'get',
		url: 'http://127.0.0.1:4523/m1/1680117-0-default/refundOrderList',
		params,
	})
}
//获取退款订单详情
export function getRefundOrderItemApi(params) {
	return axios({
		method: 'get',
		url: 'http://127.0.0.1:4523/m1/1680117-0-default/refundOrderDetail',
		params,
	})
}
