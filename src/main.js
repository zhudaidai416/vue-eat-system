import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './config/axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import './plugins/element'
import * as echarts from 'echarts'
import scrollToTop from './assets/js/toTop'
import Distpicker from 'v-distpicker'
import moment from 'moment'
import VueClipboards from 'vue-clipboard2'

//时间格式化
Vue.filter('dateFormat', (value, pattern = 'MM-DD HH:mm:ss') => {
	//需要什么格式，自行修改
	return moment(value).format(pattern)
})

//时间格式化
Vue.filter('dateFormat', (value, pattern = 'MM-DD HH:mm:ss') => {
	//需要什么格式，自行修改
	return moment(value).format(pattern)
})

Vue.directive('focus', {
	//自定义全局指令
	inserted: function (el) {
		el.focus()
	},
})
//全局时间滤器 :
Vue.filter('DateFormat', function (value) {
	var padDate = value => {
		return value < 10 ? '0' + value : value
	}
	var date = new Date(value)
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	var day = padDate(date.getDate())
	var hour = padDate(date.getHours())
	var min = padDate(date.getMinutes())
	var sec = padDate(date.getSeconds())
	return `${year}-${month}-${day} ${hour}:${min}:${sec}`
})

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.component('v-distpicker', Distpicker)

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts;
Vue.prototype.$toTop = scrollToTop

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')

//复制到剪切板
VueClipboards.config.autoSetContainer = true
Vue.use(VueClipboards)
