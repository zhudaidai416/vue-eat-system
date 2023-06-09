<template>
	<div class="info-item">
		<el-descriptions class="margin-top" title="交易信息" :column="1">
			<!-- <template #title>
							<span :Style="{ 'font-size': '10px', color: 'red' }">交易信息</span>
						</template> -->
			<el-descriptions-item label="订单编号">
				kooriookami
				<el-link type="primary" :underline="false" :style="{ padding: '0px 5px' }"> 复制 </el-link>
			</el-descriptions-item>
			<el-descriptions-item label="订单类型">外卖订单</el-descriptions-item>
			<el-descriptions-item label="创建时间" :span="2"> 2022-03-01 15:55:21 </el-descriptions-item>
		</el-descriptions>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.info-item >>> .el-descriptions {
	width: 300px;
	height: 280px;
	padding: 20px 0px 0px 20px;
	margin-right: 15px;
	box-sizing: border-box;
	background-color: #fafafa;
	border-radius: 5px;
}
.info-item >>> .el-descriptions__body {
	background-color: #fafafa;
}
</style>
