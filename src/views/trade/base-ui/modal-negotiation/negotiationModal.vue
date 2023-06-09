<template>
	<div class="negotiation">
		<el-button type="text" @click="dialogFormVisible = true">纠纷处理</el-button>

		<el-dialog title="退款纠纷处理" :visible="dialogFormVisible" width="40%">
			<el-form :model="form" label-width="80px">
				<el-form-item label="判定支持">
					<el-radio-group v-model="form.support">
						<el-radio label="支持商家" value="0"></el-radio>
						<el-radio label="支持用户" value="1"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="退款原因">
					<el-select v-model="form.region" placeholder="请选择退款原因">
						<el-option label="退款原因0" value="0"></el-option>
						<el-option label="退款原因1" value="1"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="补充说明">
					<el-input
						maxlength="200"
						show-word-limit
						type="textarea"
						autosize
						placeholder="补充说明"
						v-model="textarea1">
					</el-input>
					<div style="margin: 20px 0"></div>
					<el-input
						maxlength="200"
						show-word-limit
						type="textarea"
						:autosize="{ minRows: 2, maxRows: 4 }"
						placeholder="英文补充说明"
						v-model="textarea2">
					</el-input>
				</el-form-item>
			</el-form>

			<template #footer>
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</template>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dialogTableVisible: false,
			dialogFormVisible: false,
			form: {
				support: '0',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: '',
			},

			//多行文本框
			textarea1: '',
			textarea2: '',
		}
	},
	methods: {},
}
</script>

<style scoped></style>
