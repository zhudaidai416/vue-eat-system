import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomePage from '../views/homepage/HomePage.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginView.vue'),
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { pageName: '首页' },
		children: [
			/* 运营概况 */
			{
				path: '',
				name: 'HomePage',
				component: HomePage,
				meta: { auth: true ,pageName: '首页'},
			},
			/* 全局搜索 */
			{
				path: 'search',
				name: 'search',
				component: () => import('../views/OperatingView.vue'),
				meta: { auth: true, pageName: '全局搜索', isBack: true },
			},
			/* 用户管理 */
			{
				path: 'user',
				name: 'user',
				component: () => import('../views/userMgmt/memberMgmt.vue'),
				meta: { auth: true, pageName: '会员管理' },
			},
			{
				path: 'user/verifyDetails/:id',
				name: 'verifyMemberDetail',
				component: () => import('../views/userMgmt/verifyMemberDetail.vue'),
				meta: { auth: true, pageName: '会员信息审核详情', isBack: true },
			},
			{
				path: 'user/memberDetails/:id',
				name: 'MemberDetail',
				component: () => import('../views/userMgmt/memberDetail.vue'),
				meta: { auth: true, pageName: '会员详情', isBack: true },
			},
			{
				path: 'businessManagement',
				name: 'businessManagement',
				component: () => import('../views/userMgmt/enterpriseMgmt.vue'),
				meta: { auth: true, pageName: '商家管理' },
			},
			{
				path: 'businessManagement/businessDetails/:id',
				name: 'businessDetail',
				component: () => import('../views/userMgmt/businessDetail.vue'),
				meta: { auth: true, pageName: '商家详情', isBack: true },
			},
			{
				path: 'businessManagement/ownedBusinessDetails/:id',
				name: 'ownedBusinessDetails',
				component: () => import('../views/userMgmt/ownedBusinessDetail.vue'),
				meta: { auth: true, pageName: '名下店铺', isBack: true },
			},
			{
				path: 'storeManagement',
				name: 'storeManagement',
				component: () => import('../views/userMgmt/shopMgmt.vue'),
				meta: { auth: true, pageName: '店铺管理' },
			},
			{
				path: 'storeManagement/openShopRequestDetail/:id',
				name: 'openShopRequestDetail',
				component: () => import('../views/userMgmt/openShopRequestDetail.vue'),
				meta: { auth: true, pageName: '开店审核详情', isBack: true },
			},
			{
				path: 'storeManagement/shopInfoDetail/:id',
				name: 'shopInfoDetail',
				component: () => import('../views/userMgmt/shopInfoDetail.vue'),
				meta: { auth: true, pageName: '店铺信息审核详情', isBack: true },
			},
			{
				path: 'storeManagement/shopDetail/:id',
				name: 'shopDetail',
				component: () => import('../views/userMgmt/shopDetail.vue'),
				meta: { auth: true, pageName: '店铺详情', isBack: true },
			},
			{
				path: 'storeManagement/shopRateDetail/:id',
				name: 'shopRateDetail',
				component: () => import('../views/userMgmt/shopRateDetail.vue'),
				meta: { auth: true, pageName: '店铺评分详情', isBack: true },
			},
			{
				path: 'printerManagement',
				name: 'PrinterManagement',
				component: () => import('../views/userMgmt/printMgmt.vue'),
				meta: { auth: true, pageName: '打印机管理' },
			},
			{
				path: 'distributionManagement',
				name: 'DistributionManagement',
				component: () => import('../views/userMgmt/dispatchMgmt.vue'),
				meta: { auth: true, pageName: '配送站管理' },
			},
			{
				path: 'addDispatch',
				name: 'addDispatch',
				component: () => import('../views/userMgmt/addDispatch.vue'),
				meta: { auth: true, pageName: '添加配送站', isBack: true },
			},
			//平台维护-衡志
			{
				path: 'advertising',
				name: 'advertising',
				component: () => import('../views/xiaomo/AdvertisingView.vue'),
				meta: { auth: true, pageName: '广告投放' },
			},
			{
				path: 'publishAdvertisement',
				name: 'publishAdvertisement',
				component: () => import('../views/xiaomo/PublishAdvertisementView.vue'),
				meta: { auth: true, pageName: '发布广告', isBack: true },
			},
			{
				path: 'editAdvertisement',
				name: 'editAdvertisement',
				component: () => import('../views/xiaomo/EditAdvertisementView.vue'),
				meta: { auth: true, pageName: '编辑广告', isBack: true },
			},
			{
				path: 'advertisingDetails',
				name: 'advertisingDetails',
				component: () => import('../views/xiaomo/AdvertisingDetailsView.vue'),
				meta: { auth: true, pageName: '广告详情', isBack: true },
			},
			{
				path: 'helpCenter',
				name: 'helpCenter',
				component: () => import('../views/xiaomo/HelpCenterView.vue'),
				meta: { auth: true, pageName: '帮助中心' },
			},
			{
				path: 'feedback',
				name: 'feedback',
				component: () => import('../views/xiaomo/FeedbackView.vue'),
				meta: { auth: true, pageName: '意见反馈' },
			},
			{
				path: 'feedbackDetailsProcessed',
				name: 'feedbackDetailsProcessed',
				component: () => import('../views/xiaomo/FeedbackDetailsProcessedView.vue'),
				meta: { auth: true, pageName: '意见反馈详情', isBack: true },
			},
			{
				path: 'feedbackDetailsFollowUp',
				name: 'feedbackDetailsFollowUp',
				component: () => import('../views/xiaomo/FeedbackDetailsFollowUpView.vue'),
				meta: { auth: true, pageName: '意见反馈详情', isBack: true },
			},
			{
				path: 'feedbackDetailsFinished',
				name: 'feedbackDetailsFinished',
				component: () => import('../views/xiaomo/FeedbackDetailsFinishedView.vue'),
				meta: { auth: true, pageName: '意见反馈详情', isBack: true },
			},
			//-----------
			{
				path: 'distributionManagement/editDispatch/:id',
				name: 'editDispatch',
				component: () => import('../views/userMgmt/editDispatch.vue'),
				meta: { auth: true, pageName: '编辑配送站', isBack: true },
			},
			{
				path: 'distributionManagement/dispatchDetails/:id',
				name: 'dispatchDetails',
				component: () => import('../views/userMgmt/dispatchDetails.vue'),
				meta: { auth: true, pageName: '配送站详情', isBack: true },
			},
			{
				path: 'marKiManagement',
				name: 'marKiManagement',
				component: () => import('../views/userMgmt/dispatcherMgmt.vue'),
				meta: { auth: true, pageName: '配送员管理' },
			},
			{
				path: 'marKiManagement/dispatcherRecruitDetails/:id',
				name: 'dispatcherRecruitDetails',
				component: () => import('../views/userMgmt/dispatcherRecruitDetails.vue'),
				meta: { auth: true, pageName: '骑手招募详情', isBack: true },
			},
			{
				path: 'marKiManagement/dispatcherDetails/:dispatcherDetailList',
				name: 'dispatcherDetails',
				component: () => import('../views/userMgmt/dispatcherDetails.vue'),
				meta: { auth: true, pageName: '配送员详情', isBack: true },
			},
			{
				path: 'dispatcherScore',
				name: 'dispatcherScore',
				component: () => import('../views/userMgmt/dispatcherScore.vue'),
				meta: { auth: true, pageName: '配送员评分', isBack: true },
			},
			/* 平台通知 */
			{
				path: 'PlatformInform',
				name: 'PlatformInform',
				component: () => import('../views/preserve/PlatformInform.vue'),
				meta: { auth: true, pageName: '平台通知' },
			},
			{
				path: 'IssueNotice',
				name: 'IssueNotice',
				component: () => import('../views/preserve/IssueNotice.vue'),
				meta: { auth: true, pageName: '发布通知', isBack: true },
			},
			{
				path: 'InformDetails',
				name: 'InformDetails',
				component: () => import('../views/preserve/InformDetails.vue'),
				meta: { auth: true, pageName: '通知详情', isBack: true },
			},
			{
				path: 'EditNotice',
				name: 'EditNotice',
				component: () => import('../views/preserve/EditNotice.vue'),
				meta: { auth: true, pageName: '编辑通知', isBack: true },
			},

			// ---------// 退款管理
			{
				path: 'refundManagement',
				name: 'refundManagement',
				component: () => import('../views/trade/refund/refundView.vue'),
				meta: { auth: true, pageName: '退款管理' },
			},
			//退款关闭
			{
				path: 'refundClose',
				name: 'refundClose',
				component: () => import('../views/trade/refund/refundClose/refundClose.vue'),
				meta: { auth: true, pageName: '退款关闭', isBack: true },
			},
			//退款详情
			{
				path: 'refundDetail',
				name: 'refundDetail',
				component: () => import('../views/trade/refund/refund-details/refundDetailView.vue'),
				meta: { auth: true, pageName: '退款详情', isBack: true },
			},
			/* 系统设置 */
			{
				path: 'settings-region',
				name: 'settings-region',
				component: () => import('../views/settings/settingsRegion.vue'),
				meta: { auth: true, pageName: '地区开放设置' },
			},
			{
				path: 'settings-platform',
				name: 'settings-platform',
				component: () => import('../views/settings/settingsPlatform.vue'),
				meta: { auth: true, pageName: '配送设置' },
			},
			{
				path: 'settings-platform-addShipping',
				name: 'settings-platform-addShipping',
				component: () => import('../views/settings/settingsAddShipping.vue'),
				meta: { auth: true, pageName: '添加配送配置', isBack: true },
			},
			{
				path: 'settings-platform-addSalary',
				name: 'settings-platform-addSalary',
				component: () => import('../views/settings/settingsAddSalary.vue'),
				meta: { auth: true, pageName: '添加薪资设置', isBack: true },
			},
			{
				path: 'settings-personal',
				name: 'settings-personal',
				component: () => import('../views/settings/settingsPersonal.vue'),
				meta: { auth: true, pageName: '个人设置' },
			},
			{
				path: 'settings-dropdown',
				name: 'settings-dropdown',
				component: () => import('../views/settings/DropdownView.vue'),
				meta: { auth: true, pageName: 'Dropdown配置' },
			},
			{
				path: 'settings-sensitive',
				name: 'settings-sensitive',
				component: () => import('../views/settings/SensitiveWordView.vue'),
				meta: { auth: true, pageName: '敏感词管理' },
			},
			{
				path: 'settings-account',
				name: 'settings-account',
				component: () => import('../views/settings/AccountView.vue'),
				meta: { auth: true, pageName: '子账号设置' },
			},
			{
				path: 'settings-addrole',
				name: 'settings-addrole',
				component: () => import('../views/settings/AddRole.vue'),
				meta: { auth: true, pageName: '添加角色', isBack: true },
			},
			{
				path: 'settings-editrole',
				name: 'settings-editrole',
				component: () => import('../views/settings/EditRole.vue'),
				meta: { auth: true, pageName: '编辑角色', isBack: true },
			},
			{
				path: 'settings-log',
				name: 'settings-log',
				component: () => import('../views/settings/LogView.vue'),
				meta: { auth: true, pageName: '操作日志' },
			},
			/* 举报管理 */
			{
				path: 'ReportManagement',
				name: 'ReportManagement',
				component: () => import('../views/report/ReportManagement.vue'),
				meta: { auth: true, pageName: '举报管理' },
			},
			{
				path: 'ReportDetails',
				name: 'ReportDetails',
				component: () => import('../views/report/ReportDetails.vue'),
				meta: { auth: true, pageName: '举报管理', isBack: true },
			},
			/* 财务管理 */
			{
				path: 'accountList',
				name: 'accountList',
				component: () => import('../views/financial/财务管理账户列表.vue'),
				meta: { auth: true, pageName: '账户列表' },
			},
			{
				path: 'paymentRecords',
				name: 'paymentRecords',
				component: () => import('../views/financial/财务管理支付记录.vue'),
				meta: { auth: true, pageName: '支付记录' },
			},
			{
				path: 'paymentRecordsxiangxi',
				name: 'paymentRecordsxiangxi',
				component: () => import('../views/financial/财务管理支付记录(支付详细).vue'),
				meta: { auth: true, pageName: '支付详细', isBack: true },
			},
			{
				path: 'cashManagement',
				name: 'cashManagement',
				component: () => import('../views/financial/财务管理提现管理.vue'),
				meta: { auth: true, pageName: '提现管理' },
			},
			{
				path: 'cashManagementing',
				name: 'cashManagementing',
				component: () => import('../views/financial/财务管理提现管理(提现中).vue'),
				meta: { auth: true, pageName: '提现中', isBack: true },
			},
			{
				path: 'cashManagementok',
				name: 'cashManagementok',
				component: () => import('../views/financial/财务管理提现管理(提现成功).vue'),
				meta: { auth: true, pageName: '提现成功', isBack: true },
			},
			{
				path: 'cashManagementno',
				name: 'cashManagementno',
				component: () => import('../views/financial/财务管理提现管理(提现失败).vue'),
				meta: { auth: true, pageName: '提现失败', isBack: true },
			},
			{
				path: 'topUpManagement',
				name: 'topUpManagement',
				component: () => import('../views/financial/财务管理充值管理.vue'),
				meta: { auth: true, pageName: '充值管理' },
			},
			{
				path: 'topUpManagementxiangqing',
				name: 'topUpManagementxiangqing',
				component: () => import('../views/financial/财务管理充值管理(充值详情).vue'),
				meta: { auth: true, pageName: '充值管理详情', isBack: true },
			},
			{
				path: 'orderFenRun',
				name: 'orderFenRun',
				component: () => import('../views/financial/财务管理订单分润.vue'),
				meta: { auth: true, pageName: '订单分润' },
			},
			{
				path: 'orderFenRunxiangqing',
				name: 'orderFenRunxiangqing',
				component: () => import('../views/financial/财务管理订单分润(分润详细).vue'),
				meta: { auth: true, pageName: '分润详细', isBack: true },
			},
			{
				path: 'exchangeRateManagement',
				name: 'exchangeRateManagement',
				component: () => import('../views/financial/财务管理汇率管理.vue'),
				meta: { auth: true, pageName: '汇率管理' },
			},
			{
				path: 'exchangeRateManagementxiangqing',
				name: 'exchangeRateManagementxiangqing',
				component: () => import('../views/financial/财务管理汇率管理(汇率详情).vue'),
				meta: { auth: true, pageName: '汇率详情', isBack: true },
			},
			{
				path: 'ReportDetailsNo',
				name: 'ReportDetailsNo',
				component: () => import('../views/report/ReportDetailsno.vue'),
				meta: { auth: true },
			},
			/* 活动管理 */
			{
				path: 'bulkActivity',
				name: 'bulkActivity',
				component: () => import('../views/activeMgmt/BGBAView.vue'),
				meta: { auth: true, pageName: '商家团购活动' },
			},
			{
				path: 'groupActiveDetail',
				name: 'groupActiveDetail',
				component: () => import('../views/activeMgmt/GroupActiveDetail.vue'),
				meta: { auth: true, pageName: '商家团购活动详情', isBack: true },
			},
			{
				path: 'preferentialActivity',
				name: 'preferentialActivity',
				component: () => import('../views/activeMgmt/PDA.vue'),
				meta: { auth: true, pageName: '平台优惠活动' },
			},
			{
				path: 'promoteActivity',
				name: 'promoteActivity',
				component: () => import('../views/activeMgmt/PPA.vue'),
				meta: { auth: true, pageName: '平台推广活动' },
			},
			{
				path: 'addActives',
				name: 'addActives',
				component: () => import('../views/activeMgmt/AddActives.vue'),
				meta: { auth: true, pageName: '发布平台活动', isBack: true },
			},
			{
				path: 'PADetail',
				name: 'PADetail',
				component: () => import('../views/activeMgmt/PADetail.vue'),
				meta: { auth: true, pageName: '平台活动详情', isBack: true },
			},
			{
				path: 'SendICON',
				name: 'SendICON',
				component: () => import('../views/activeMgmt/SendICON.vue'),
				meta: { auth: true, pageName: '发布外卖首页ICON设置', isBack: true },
			},
			{
				path: 'ICONDetail',
				name: 'ICONDetail',
				component: () => import('../views/activeMgmt/ICONDetail.vue'),
				meta: { auth: true, pageName: '外卖首页ICON设置详情', isBack: true },
			},
			{
				path: 'AmendActive',
				name: 'AmendActive',
				component: () => import('../views/activeMgmt/AmendActive.vue'),
				meta: { auth: true, pageName: '编辑推广活动', isBack: true },
			},
			{
				path: 'APA',
				name: 'APA',
				component: () => import('../views/activeMgmt/APA.vue'),
				meta: { auth: true, pageName: '编辑平台活动', isBack: true },
			},
			{
				path: 'AmendICON',
				name: 'AmendICON',
				component: () => import('../views/activeMgmt/AmendICON.vue'),
				meta: { auth: true, pageName: '编辑外卖首页ICON设置', isBack: true },
			},
			/* 商品管理 */
			{
				path: 'goodsManagement',
				name: 'CommodityManagement',
				component: () => import('../views/commodity/CommodityManagement.vue'),
				meta: { auth: true, pageName: '商品列表' },
			},
			{
				path: 'goodsClassification',
				name: 'CommodityClassify',
				component: () => import('../views/commodity/CommodityClassify.vue'),
				meta: { auth: true, pageName: '商品分类' },
			},
			// 商品详情
			{
				path: 'productDetails',
				name: 'productDetails',
				component: () => import('../views/commodity/ProductDetails.vue'),
				meta: { auth: true },
			},
			{
				path: 'productDetailsdoule',
				name: 'productDetailsdoule',
				component: () => import('../views/commodity/ProductDetailsdoule.vue'),
				meta: { auth: true },
			},
			{
				path: 'ReviewComments',
				name: 'ReviewComments',
				component: () => import('../views/commodity/ReviewComments.vue'),
				meta: { auth: true },
			},
			{
				path: 'Review',
				name: 'Review',
				component: () => import('../views/commodity/Review.vue'),
				meta: { auth: true },
			},

			/* 交易管理 */
			//  订单管理
			{
				path: 'orderManagement',
				name: 'orderManagement',
				component: () => import('../views/trade/order/OrderView.vue'),
				meta: { auth: true, pageName: '订单管理' },
			},
			//订单详情
			{
				path: 'orderDetail',
				name: 'orderDetail',
				component: () => import('../views/trade/order/order-details/OrderDetailsView.vue'),
				meta: { auth: true, pageName: '订单详情' },
			},
			//订单追踪
			{
				path: 'orderTrack',
				name: 'orderTrack',
				component: () => import('../views/trade/order/order-track/OrderTrackView.vue'),
				meta: { auth: true, pageName: '订单跟踪' },
			},
			//调度追踪
			{
				path: 'orderDispatch',
				name: 'orderDispatch',
				component: () => import('../views/trade/order/order-dispatch//OrderDispatchView.vue'),
				meta: { auth: true, pageName: '调度追踪' },
			},

			//团购管理
			{
				path: 'bulkManagement',
				name: 'GroupPurchaseView',
				component: () => import('../views/trade/group-purchase/GroupPurchaseView.vue'),
				meta: { auth: true, pageName: '团购管理', isBack: true },
			},
			/* 评价管理 */
			{
				path: 'evaluationManagement',
				name: 'evaluationManagement',
				component: () => import('../views/DealManage/CommentManage.vue'),
				meta: { auth: true, pageName: '评价管理' },
			},
			{
				path: 'CommentDetail',
				name: 'CommentDetail',
				component: () => import('../views/DealManage/CommentDetail.vue'),
				meta: { auth: true, pageName: '评价详情', isBack: true },
			},
			/* 活动管理 1-2 */
			{
				path: 'applyActivity',
				name: 'applyActivity',
				component: () => import('../views/ActivityManage/DealerJoin.vue'),
				meta: { auth: true, pageName: '商家报名活动' },
			},
			{
				path: 'builtActivity',
				name: 'builtActivity',
				component: () => import('../views/ActivityManage/DealerSelfActivity.vue'),
				meta: { auth: true, pageName: '商家自建活动' },
			},
			{
				path: 'DealerActivityDetail',
				name: 'DealerActivityDetail',
				component: () => import('../views/ActivityManage/DealerActivityDetail.vue'),
				meta: { auth: true, pageName: '商家报名详情', isBack: true },
			},
			{
				path: 'DealerAllActivityDetail',
				name: 'DealerAllActivityDetail',
				component: () => import('../views/ActivityManage/DealerAllActivityDetail.vue'),
				meta: { auth: true, pageName: '报名活动详情', isBack: true },
			},
			{
				path: 'DealerIsAuditing',
				name: 'DealerIsAuditing',
				component: () => import('../views/ActivityManage/DealerIsAuditing.vue'),
				meta: { auth: true, pageName: '商家自建活动详情', isBack: true },
			},
			{
				path: 'DealerSelfPass',
				name: 'DealerSelfPass',
				component: () => import('../views/ActivityManage/DealerSelfPass.vue'),
				meta: { auth: true, pageName: '商家自建活动详情', isBack: true },
			},
			{
				path: 'DealerWaitingAuditing',
				name: 'DealerWaitingAuditing',
				component: () => import('../views/ActivityManage/DealerWaitingAuditing.vue'),
				meta: { auth: true, pageName: '商家自建活动详情', isBack: true },
			},
			{
				path: 'PostNewActivity',
				name: 'PostNewActivity',
				component: () => import('../views/ActivityManage/PostNewActivity.vue'),
				meta: { auth: true, pageName: '发布报名活动', isBack: true },
			},
			{
				path: 'EditPostNewActivity',
				name: 'EditPostNewActivity',
				component: () => import('../views/ActivityManage/EditPostNewActivity.vue'),
				meta: { auth: true, pageName: '编辑报名活动', isBack: true },
			},
		],
	},
	/* 404页面 */
	{
		path: '*',
		name: 'NotFind',
		component: () => import('../views/NotFind.vue'),
		meta: { auth: true },
	},
]

const router = new VueRouter({
	mode: 'history', // 路由模式，另一种模式是 hash
	routes,
})

/* 路由守卫 */
router.beforeEach((to, from, next) => {
	// to: 表示要访问的路由对象
	//from: 你从哪一个路由过来的，即跳转之前的路由对象
	//next: 必须调用才能进入下一个路由
	store.commit('removeChange', to.meta.pageName)
	store.commit('setIsBack', to.meta.isBack || false)
	next()

	const token = sessionStorage.getItem('token') // 表示用户登录的凭证
	console.log(token)
	if (!to.meta.auth) {
		return next()
	}
	if (to.meta.auth) {
		if (token) {
			next()
		} else {
			next('/login')
		}
	} else {
		next()
	}
})

export default router
