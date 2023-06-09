<template>
	<div class="card">
		<el-descriptions class="title" :title="title" :column="1">
			<el-descriptions-item
				v-for="(item, index) in cardItemConfig"
				:key="index"
				:label="item.label">
				<span class="desContent" v-if="item.type === 'default'">
					{{ infoData[`${item.field}`] }}
				</span>
				<span class="desContent" v-else-if="item.type === 'orderType'">
					{{ infoData[`${item.field}`] | orderType }}
					<!-- {{ infoData[`${item.field}`] }} -->
				</span>
				<span class="desContent" v-else-if="item.type === 'time'">
					{{ infoData[`${item.field}`] | dateFormat }}
					<!-- {{ infoData[`${item.field}`] }} -->
				</span>
				<span class="desContent" v-else-if="item.type === 'InvoiceMethod'">
					{{ infoData[`${item.field}`] | InvoiceMethod }}
					<!-- {{ infoData[`${item.field}`] }} -->
				</span>
				<span class="desContent" v-else-if="item.type === 'InvoiceType'">
					{{ infoData[`${item.field}`] | InvoiceType }}
					<!-- {{ infoData[`${item.field}`] }} -->
				</span>
				<span class="desContent" v-else-if="item.type === 'tranfromMethod'">
					{{ infoData[`${item.field}`] | tranfromMethod }}
					<!-- {{ infoData[`${item.field}`] }} -->
				</span>
				<span class="desContent" v-else-if="item.type === 'customerNickName'">
					<el-link
						type="primary"
						:underline="false"
						class="el-icon-user-solid"
						@click="jumpPageCustomer">
						{{ infoData[`${item.field}`] }}
					</el-link>
				</span>
				<span v-else-if="item.type === 'tablewareNum'"> {{ infoData[`${item.field}`] }} 份 </span>
				<el-link
					v-show="item.isShowCopy"
					type="primary"
					:underline="false"
					:style="{ padding: '0px 5px' }"
					class="desContent"
					v-clipboard:copy="infoData[`${item.field}`]"
					v-clipboard:success="onCopy"
					v-clipboard:error="onError">
					复制
				</el-link>
				<!-- <button type="button" @click="doCopy(item.a1)">复制</button> -->
			</el-descriptions-item>
		</el-descriptions>
	</div>
</template>

<script>
// import Clipboard from 'clipboard'
export default {
	props: {
		//卡片标题
		title: {
			type: String,
			default: '默认标题',
		},
		//卡片config
		cardItemConfig: {
			type: Array,
		},
		infoData: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			// message: 'vcv',
			// cardItemConfigD: [],
		}
	},
	computed: {
		// formateConfig() {
		// 	const newConfig = this.cardItemConfig.map(item => {
		// 		const obj = { ...item }
		// 		obj.a1 = this.infoData[item.field]
		// 		return obj
		// 	})
		// 	console.log('---', newConfig)
		// 	return newConfig
		// },
	},
	methods: {
		// doCopy(txt) {
		// 	this.$copyText(txt).then(
		// 		function (e) {
		// 			alert('Copied')
		// 			console.log(e, txt)
		// 		},
		// 		function (e) {
		// 			alert('Can not copy')
		// 			console.log(e)
		// 		}
		// 	)
		// },
		onCopy() {
			console.log('复制成功！')
		},
		onError() {
			console.log('复制失败！')
		},
		//
		jumpPageCustomer() {
			this.$router.push('/user/verifyDetails/11111')
		},
	},
	filters: {
		orderType(val) {
			switch (val) {
				case 0:
					return '外卖类型'
				case 1:
					return '顾客自取'

				default:
					break
			}
		},
		InvoiceMethod(val) {
			switch (val) {
				case 0:
					return '在线开票'
				case 1:
					return '其他类型'

				default:
					break
			}
		},
		InvoiceType(val) {
			switch (val) {
				case 0:
					return '纸质发票'
				case 1:
					return '电子发票'

				default:
					break
			}
		},
		tranfromMethod(val) {
			switch (val) {
				case 0:
					return '平台专送'
				case 1:
					return '众包骑手'

				default:
					break
			}
		},
	},
}
</script>

<style scoped>
.card >>> .el-descriptions {
	width: 300px;
	height: 280px;
	padding: 20px 0px 0px 20px;
	margin-right: 15px;
	box-sizing: border-box;
	background-color: #fafafa;
	border-radius: 5px;
}
.card >>> .el-descriptions__body {
	background-color: #fafafa;
}
</style>
