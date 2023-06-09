import Vue from 'vue'
import Vuex from 'vuex'
import user from './userStore'
import setting from './settingStore'
import PlatformVindicate_Store from './PlatformVindicate_Store'
import userMgmt from './userMgmt'
import hz_store from './hz_store'
import orderStore from './orderStore/index'
import roleStore from './roleStore/index'
import accountStore from './accountStore/index'
import xc_store from './xc_store'

import zsl_store from './zsl_store/index'

Vue.use(Vuex)

export default new Vuex.Store({
	namespaced: true,
	state: {
		userInfo: { id: '', token: '' },
		pageName: '',
		is_back:false,
	},
	getters: {},
	mutations: {
		removeToken(state) {
			state.user.id = ''
			state.user.token = ''
		},
		/* 修改页面pageName的值 */
		removeChange(state, pageName) {
			state.pageName = pageName
		},
		/* 判断是否有返回按钮 */
		setIsBack(state, is_back) {
			state.is_back = is_back
		}
	},
	actions: {},
	modules: {
		user,
		setting,
		PlatformVindicate_Store,
		userMgmt,
		hz_store,
		orderStore,
		roleStore,
		accountStore,
        xc_store,
		zsl_store,
	},
})
