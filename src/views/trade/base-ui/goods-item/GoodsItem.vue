<template>
	<!-- 商品item -->
	<div class="item">
		<!-- 商品图片预览 -->
		<div v-show="config.isShowPreview" class="preview common">
			<el-image style="width: 100px; height: 100px" :src="goods.goodsPic"> </el-image>
		</div>
		<!-- 商品属性描述 -->
		<div v-show="config.isShowAttr" class="attr common">
			<el-descriptions
				:column="1"
				:labelStyle="{ 'font-size': '12px', color: '#c0c4cc' }"
				:contentStyle="{ 'font-size': '12px', color: '#c0c4cc' }">
				<template #title>
					<el-link type="primary" :underline="false" @click="jumpPageGoodsDetail()">
						{{ goods.goodsName }}
					</el-link>
				</template>
				<el-descriptions-item v-if="config.isShowId" label="ID">
					{{ goods.goodsId }}
				</el-descriptions-item>
				<el-descriptions-item v-if="config.isSpecifications" label="规格">
					{{ goods.specifications }}
				</el-descriptions-item>
				<el-descriptions-item v-if="config.isShowProps" label="辣度">
					{{ goods.goodsNote }}
				</el-descriptions-item>
			</el-descriptions>
			<!-- 订单快照 -->
			<div v-show="config.isShowTradeSnapshot" style="text-align: left">
				<TradeSnapshot></TradeSnapshot>
			</div>
		</div>
		<!-- 商品单价 -->
		<div v-show="config.isShowPrice" class="price common">
			<el-descriptions :column="1">
				<el-descriptions-item label="单价"> ₱ {{ goods.goodsPrice }} 元 </el-descriptions-item>
				<el-descriptions-item
					label="原价"
					:labelStyle="{ 'font-size': '12px', color: '#c0c4cc' }"
					:contentStyle="{ 'font-size': '12px', color: '#c0c4cc' }">
					({{ goods.goodsOriginalPrice }} 元)
				</el-descriptions-item>
			</el-descriptions>
		</div>
		<!-- 商品数量 -->
		<div v-show="config.isShowAmount" class="amount common">
			<el-descriptions :column="1" :colon="false">
				<el-descriptions-item> {{ goods.goodsAmount }} 份 </el-descriptions-item>
			</el-descriptions>
		</div>
	</div>
</template>

<script>
import TradeSnapshot from '../trade-snapshot/TradeSnapshot.vue'
export default {
	props: {
		// 配置
		config: {
			type: Object,
			default: () => ({
				isShowPreview: true,
				isShowPrice: false,
				isShowAmount: false,
				isShowAttr: true,
				isShowId: true,
				isSpecifications: true,
				isShowProps: true,
				isShowTradeSnapshot: false,
			}),
		},

		//数据
		goods: {
			type: Object,
		},
	},
	components: { TradeSnapshot },

	data() {
		return {}
	},

	methods: {
		//跳转商品详情
		jumpPageGoodsDetail() {
			this.$router.push('productDetails')
		},
	},
}
</script>

<style scoped>
.item {
	display: flex;
	align-items: center;
	padding: 5px;
}
.common {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	box-sizing: border-box;
	padding-right: 20px;
}

.order-goods-amount >>> .el-descriptions-item__label {
	padding-right: 40%;
}
</style>
