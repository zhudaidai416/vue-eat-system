<template>
	<div class="card-v1">
		<!-- 订单图片 -->
		<div class="card-img" v-show="config.isShowOrderImg">
			<img src="@/assets/img/temp/u16443.jpeg" alt="" />
		</div>
		<div class="card-content">
			<!-- 卡片描述和标题 -->
			<el-descriptions title="香辣鸡排汉堡套餐" :column="1" :colon="false">
				<el-descriptions-item label="用户名" :labelStyle="labelStyle" :contentStyle="contentStyle">
					<span>kooriookami</span>
				</el-descriptions-item>
				<el-descriptions-item label="主料" :labelStyle="labelStyle" :contentStyle="contentStyle">
					<span>鸡胸肉</span>
				</el-descriptions-item>
				<el-descriptions-item
					label="月售"
					:span="2"
					:labelStyle="labelStyle"
					:contentStyle="contentStyle">
					<span>54</span>
				</el-descriptions-item>
				<el-descriptions-item :labelStyle="labelStyle" :contentStyle="contentStyle">
					<el-tag size="mini" type="danger">9.6折</el-tag>
				</el-descriptions-item>
			</el-descriptions>

			<!-- 是否显示折扣传入props -->
			<div class="discount" v-show="config.isShowDiscount">
				<span class="icon">125P</span>
				<span class="del">130P</span>
				<span class="packFree">打包费10P/份</span>
			</div>
			<!-- 是否显示底部传入props -->
			<div class="card-footer" v-show="config.isShowDiscount">
				<span class="el-icon-eleme"></span>
				<span class="address">华莱士·全鸡汉堡-凤凰广场华莱士·全鸡汉堡-凤凰广场</span>
				<span class="score">4.5</span>
				<span class="dispatch">配送30P</span>
				<span class="time">30分钟</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		config: {
			type: Object,
			default: () => ({
				isShowDiscount: false,
				isShowCardFooter: false,
				isShowOrderImg: false,
			}),
		},

		data() {
			return {
				imgSrc:
					'https://cdn3.axureshop.com/demo/2031128/images/%E4%BA%A4%E6%98%93%E5%BF%AB%E7%85%A7%E5%BC%B9%E6%A1%86/u16443.jpg',
			}
		},
	},

	data() {
		return {
			// 卡片描述样式
			labelStyle: { 'font-size': '12px', color: '#c0c4cc' },
			contentStyle: { 'font-size': '12px', color: '#c0c4cc' },
		}
	},
}
</script>

<style scoped>
.card-content {
	background-color: #fafafa;
	border-radius: 10px;
	margin-bottom: 20px;
}
.card-content >>> .el-descriptions {
	padding: 10px;
	box-sizing: border-box;
	background-color: #fafafa;
	border-radius: 10px;
}
.card-content >>> .el-descriptions__body {
	background-color: #fafafa;
}
.card-content >>> .el-descriptions-row {
	background-color: #fafafa;
}

/* 订单图片 */

.card-img {
	height: 400px;
	overflow: hidden;
}

.card-img img {
	width: 100%;
	/* object-fit: cover; */
}

/* 打折打包费 */

.discount {
	font-size: 12px;
	color: #c0c4cc;
	padding: 0px 10px;
	box-sizing: border-box;
}

.discount span {
	padding-right: 10px;
}
.icon {
	font-size: 26px;
	color: #ff644d;
	font-weight: 800;
}

/* 底部 */
.card-footer {
	color: red;
	display: flex;
	align-items: center;
	padding: 10px;
	box-sizing: border-box;
	font-size: 12px;
	background-color: #f5f5f5;
}

.del {
	text-decoration: line-through;
}
.card-footer {
	border-radius: 0px 0px 10px 10px;
}
.card-footer span {
	display: inline-block;
	padding-right: 10px;
}
.address {
	color: #000;
	display: inline-block;
	max-width: 150px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-wrap: normal;
}

.score {
	color: #ff6600;
}
.dispatch,
.time {
	color: #000;
}
</style>
