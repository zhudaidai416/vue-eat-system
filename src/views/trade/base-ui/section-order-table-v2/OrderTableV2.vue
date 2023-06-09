<template>
	<div class="table-wrap">
		<el-table
			:data="infoData"
			style="width: 100%"
			:row-style="{ height: '100px' }"
			:header-cell-style="{ background: '#f4f6fd' }">
			<el-table-column
				prop="payable"
				label="应付款"
				width="300"
				header-align="center"
				align="center">
			</el-table-column>
			<el-table-column prop="freight" label="配送费" header-align="center" align="center">
			</el-table-column>
			<el-table-column
				prop="shopFreight"
				label="商家承担配送费"
				header-align="center"
				align="center">
			</el-table-column>
			<el-table-column
				prop="technicalServiceFee"
				label="技术服务费"
				header-align="center"
				align="center">
			</el-table-column>
			<el-table-column
				prop="technicalServiceDiscount"
				label="技术服务优惠"
				header-align="center"
				align="center">
			</el-table-column>
			<el-table-column
				prop="platformSubsidies"
				label="平台优惠"
				header-align="center"
				align="center">
			</el-table-column>
			<el-table-column prop="income" label="商家预计收入" header-align="center" align="center">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	props: {
		infoData: {
			type: Array,
		},
	},
}
</script>

<style scoped></style>
