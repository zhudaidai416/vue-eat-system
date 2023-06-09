<template>
	<LyForm
		:form-item="formItem"
		:label-width="labelWidth"
		:item-style="itemStyle"
		:formData="formData"
		@update:formData="formData = $event">
		<template #form-footer>
			<div class="handle-btn">
				<el-button type="warning" size="medium"> 重置</el-button>
				<el-button type="primary" size="medium"> 搜索 </el-button>
			</div>
		</template>
	</LyForm>
</template>

<script>
import LyForm from '../../base-ui/form/index'
export default {
	components: {
		LyForm,
	},

	data() {
		return {
			formData: {
				user: '',
				password: '',
				createAt: '',
				sports: '',
				music: '',
			},
			formItem: [
				{
					field: 'user',
					label: '订单号',
					rules: [],
					type: 'input',
					placeholder: '请输入订单号',
				},
				{
					field: 'password',
					label: '商品名称',
					rules: [],
					type: 'input',
					placeholder: '请输入商品名称',
				},
				{
					field: 'password',
					label: '店铺名称',
					rules: [],
					type: 'input',
					placeholder: '请输入商店铺名称',
				},
				{
					field: 'password',
					label: '买家昵称',
					rules: [],
					type: 'input',
					placeholder: '请输入买家昵称',
				},
				{
					field: 'password',
					label: '收货人',
					rules: [],
					type: 'input',
					placeholder: '请输入收货人',
				},
				{
					field: 'password',
					label: '手机号',
					rules: [],
					type: 'input',
					placeholder: '请输入手机号',
				},
				{
					field: 'password',
					label: '配送员',
					rules: [],
					type: 'input',
					placeholder: '请输入配送员姓名',
				},
				{
					field: 'sports',
					label: '订单类型',
					type: 'select',
					placeholder: '请输入所有订单类型!',
					options: [
						{ label: '全部类型', value: 'allType' },
						{ label: '外卖订单', value: 'takeOutType' },
						{ label: '到店自取', value: 'pickSelfType' },
					],
				},
				{
					field: 'sports',
					label: '创建时间',
					type: 'select',
					placeholder: '请输入所有订单类型!',
					options: [
						{ label: '全部类型', value: 'allType' },
						{ label: '近三个月', value: 'takeOutType' },
						{ label: '今年内', value: 'pickSelfType' },
						{ label: '2021年', value: 'pickSelfType' },
						{ label: '2020年', value: 'pickSelfType' },
						{ label: '2020年以前', value: 'pickSelfType' },
					],
				},
				{
					field: 'sports',
					label: '订单状态',
					type: 'select',
					placeholder: '请输入所有订单类型!',
					options: [
						{ label: '全部异常', value: 'allType' },
						{ label: '未到店预警', value: 'takeOutType' },
						{ label: '未离店预警', value: 'pickSelfType' },
						{ label: '未送达预警', value: 'pickSelfType' },
						{ label: '超时未到店', value: 'pickSelfType' },
						{ label: '超时未取货', value: 'pickSelfType' },
						{ label: '待商家退款', value: 'pickSelfType' },
						{ label: '商家拒绝退款', value: 'pickSelfType' },
					],
				},
			],
			labelWidth: '80px',
			itemStyle: {
				width: '100%',
				padding: '2px 0',
				// background: '#f6f7f9',
				borderRadius: '5px',
			},
			colLayout: {
				xs: 6,
				sm: 6,
				md: 6,
				xl: 6,
			},
		}
	},
}
</script>

<style scoped>
.handle-btn {
	display: flex;
	justify-content: flex-start;
}
</style>
