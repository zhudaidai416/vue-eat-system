<template>
	<!-- 订单的商品列表 -->
	<div class="order-item-goods">
		<div v-for="good in goods" :key="good.name" class="order-item-goods-item">
			<!-- 商品图片预览 -->
			<div class="order-goods-image-preview order-item-common">
				<el-image
					style="width: 100px; height: 100px"
					:src="good.url"
					:preview-src-list="good.srcList">
				</el-image>
			</div>
			<!-- 商品属性描述 -->
			<div class="order-goods-attr order-item-common">
				<el-descriptions
					:column="1"
					:labelStyle="{ 'font-size': '12px', color: '#c0c4cc' }"
					:contentStyle="{ 'font-size': '12px', color: '#c0c4cc' }">
					<template #title>
						<el-link type="primary" :underline="false">
							{{ good.name }}
						</el-link>
					</template>
					<el-descriptions-item label="规格">
						{{ good.specifications }}
					</el-descriptions-item>
					<el-descriptions-item label="辣度">
						{{ good.attr }}
					</el-descriptions-item>
				</el-descriptions>
			</div>
			<!-- 商品单价 -->
			<div class="order-goods-price order-item-common">
				<el-descriptions :column="1">
					<el-descriptions-item label="单价">
						{{ good.price }}
					</el-descriptions-item>
					<el-descriptions-item
						label="原价"
						:labelStyle="{ 'font-size': '12px', color: '#c0c4cc' }"
						:contentStyle="{ 'font-size': '12px', color: '#c0c4cc' }">
						{{ good.price }}
					</el-descriptions-item>
				</el-descriptions>
			</div>
			<!-- 商品数量 -->
			<div class="order-goods-amount order-item-common">
				<el-descriptions :column="1" :colon="false">
					<el-descriptions-item>
						{{ good.amount }}
					</el-descriptions-item>
				</el-descriptions>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		goods: Array,
	},

	data() {
		return {}
	},
}
</script>

<style scoped>
/* .order-item-goods {
	outline: solid red;
} */
.order-item-common {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	box-sizing: border-box;
	padding-right: 20px;
}
.order-item-goods-item {
	display: flex;
	align-items: center;
	padding: 5px;
}

.order-goods-amount >>> .el-descriptions-item__label {
	padding-right: 40%;
}
</style>
