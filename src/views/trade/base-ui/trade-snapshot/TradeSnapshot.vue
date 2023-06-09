<template>
	<div>
		<el-button round size="mini" @click="dialogFormVisible = true"> 订单快照 </el-button>
		<el-dialog width="35%" title="交易快照" :visible="dialogFormVisible">
			<!-- tips -->
			<h6 class="tips">
				当前页面内容为交易快照，包含订单创建时的商品描述和下单信息，买卖双方和平台在发生交易争议时，该页面作为判定依据。
			</h6>
			<div class="content">
				<!-- 订单card -->
				<SnapshotCardV1 :config="orderConfig" />
				<SnapshotCardV1 />
				<SnapshotCardV1 />
			</div>
			<!-- 按钮 -->
			<template #footer>
				<!-- <el-button @click="dialogFormVisible = false">取 消</el-button> -->
				<el-button type="primary" @click="dialogFormVisible = false">知道了</el-button>
			</template>
		</el-dialog>
	</div>
</template>

<script>
import SnapshotCardV1 from '../../base-ui/trade-snapshot-card-v1/SnapshotCardV1.vue'
export default {
	components: {
		SnapshotCardV1,
	},
	data() {
		return {
			// 弹框
			dialogTableVisible: false,
			dialogFormVisible: false,

			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: '',
			},
			formLabelWidth: '120px',
			// 子组件配置
			orderConfig: {
				isShowDiscount: true,
				isShowCardFooter: true,
				isShowOrderImg: true,
			},
		}
	},
}
</script>

<style scoped>
.tips {
	color: #ccc;
}

.content {
	display: flex;
	padding: 20px;
	width: 90%;
	flex-direction: column;
	overflow-y: scroll;
	height: 600px;
}
</style>
