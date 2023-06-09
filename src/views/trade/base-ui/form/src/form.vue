<template>
	<div>
		<el-row class="form-header">
			<el-col>
				<slot name="form-header"></slot>
			</el-col>
		</el-row>
		<el-row :gutter="50">
			<el-form :label-width="labelWidth" size="mini">
				<el-col v-for="(item, index) in formItem" :key="index" v-bind="colLayout">
					<el-form-item :label="item.label" :style="itemStyle">
						<!--按条件渲染普通input -->
						<template
							v-if="item.type === 'input' || item.type === 'text' || item.type === 'password'">
							<el-input
								v-model="formData[`${item.field}`]"
								:prop="formData[`${item.field}`]"
								:placeholder="item.placeholder"
								:show-password="item.type === 'password'">
							</el-input>
						</template>
						<!-- 按条件渲染时间input -->
						<template v-else-if="item.type === 'daterange'">
							<el-date-picker
								v-model="formData[`${item.field}`]"
								v-bind="item.otherOptions"
								style="width: 100%">
							</el-date-picker>
						</template>
						<!-- 按条件渲染select -->
						<template v-else-if="item.type === 'select'">
							<el-select
								v-model="formData[`${item.field}`]"
								:placeholder="item.placeholder"
								style="width: 100%">
								<el-option
									v-for="option in item.options"
									:key="option.label"
									v-bind="option"></el-option>
							</el-select>
						</template>
					</el-form-item>
				</el-col>
			</el-form>
		</el-row>
		<el-row class="form-footer">
			<el-col :span="24">
				<slot name="form-footer"></slot>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	props: {
		formData: {
			type: Object,
			require: true,
		},
		formItem: {
			type: Array,
			default: () => [],
		},
		labelWidth: {
			type: String,
			default: '100px',
		},
		itemStyle: {
			type: Object,
			default: () => {},
		},
		//表单响应式
		colLayout: {
			type: Object,
			default: () => {
				return {
					xs: 6,
					sm: 6,
					md: 6,
					xl: 6,
				}
			},
		},
	},
	data() {
		return {
			// formData: { ...this.modeValue },
		}
	},
	watch: {
		formData: {
			handler: function (newVal) {
				console.log(newVal)
				this.$emit('update:input', newVal)
			},
			deep: true,
		},
	},
}
</script>

<style scoped></style>
