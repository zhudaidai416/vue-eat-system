<template>
	<div class="order-table">
		<div class="table-wrap">
			<el-table
				:span-method="objectSpanMethod"
				:data="infoData.goodsDetails"
				style="width: 100%"
				:header-cell-style="{ background: '#f4f6fd' }">
				<el-table-column
					prop="goodsDetails"
					label="商品"
					width="300"
					header-align="center"
					align="center">
					<template v-slot="scope">
						<GoodsItem :goods="scope.row" :config="configGoodsItem" />
					</template>
				</el-table-column>
				<el-table-column prop="specifications" label="规格" header-align="center" align="center">
				</el-table-column>
				<el-table-column prop="goodsAmount" label="数量" header-align="center" align="center">
				</el-table-column>
				<el-table-column prop="goodsPrice" label="单价" header-align="center" align="center">
					<template v-slot="scope">
						<h6 style="margin-left: 10px; font-size: 14px">{{ scope.row.goodsPrice }} 元</h6>
						<h6 style="margin-left: 10px; font-size: 12px; color: #999999">
							原价:{{ scope.row.goodsPrice * 10 }} 元
						</h6>
					</template>
				</el-table-column>
				<el-table-column label="打包费" header-align="center" align="center">
					<template v-slot="scope"> ₱ {{ scope.row.goodsPackingFee }} 元 </template>
				</el-table-column>
				<el-table-column label="配送费" header-align="center" align="center">
					<template v-slot="scope"> ₱ {{ scope.row.transfromFree }} 元 </template>
				</el-table-column>
				<el-table-column prop="goodsPackingFee" label="满减" header-align="center" align="center">
					<template v-slot="scope">
						<div>满 {{ scope.row.transfromFree }} 元减5元</div>
						<div style="margin-left: 10px; font-size: 12px; color: #999999">
							(平台承担xx元,商家承担xx元)
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="goodsPackingFee" label="返赠" header-align="center" align="center">
					<template v-slot="scope">
						<div>
							店铺满 {{ scope.row.goodsPackingFee }}返5元, 店铺满
							{{ scope.row.goodsPackingFee * 2 }} 返10元,
						</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!-- //商品结算 -->
		<div class="settle">
			<el-descriptions
				:column="1"
				:labelStyle="{ 'font-size': '13px', color: '#c0c4cc' }"
				:contentStyle="{ color: '#000000' }">
				<el-descriptions-item label="商品总价">₱535.00</el-descriptions-item>
				<el-descriptions-item label="打包费">＋₱35.00</el-descriptions-item>
				<el-descriptions-item label="配送费">＋₱30.00</el-descriptions-item>
				<el-descriptions-item label="店铺满减">－₱30.00</el-descriptions-item>
				<el-descriptions-item
					label="应付款"
					:labelStyle="{ 'font-size': '16px', color: '#4e73df' }"
					:contentStyle="{ color: '#000000' }">
					₱570.00
				</el-descriptions-item>
			</el-descriptions>
		</div>
	</div>
</template>

<script>
import GoodsItem from '../goods-item/GoodsItem.vue'
export default {
	components: {
		GoodsItem,
	},

	props: {
		infoData: {
			type: Object,
		},
	},

	data() {
		return {
			//商品item配置
			configGoodsItem: {
				isShowPreview: true,
				isShowPrice: false,
				isShowAttr: true,
				isShowAmount: false,
				isShowId: true,
				isSpecifications: true,
				isShowProps: false,
				isShowTradeSnapshot: true,
			},
		}
	},
	methods: {
		// 解析数据
		objectSpanMethod({ rowIndex, columnIndex }) {
			if (columnIndex === 6 || columnIndex === 7) {
				if (rowIndex % 2 === 0) {
					return {
						rowspan: 4,
						colspan: 1,
					}
				} else {
					return {
						rowspan: 0,
						colspan: 0,
					}
				}
			}
		},
		goodsTotalPrice() {
			return this.infoData.goodsDetails
				.map(item => item.goodsPrice * item.goodsAmount)
				.reduce((a, b) => a + b, 0)
		},
	},

	computed: {},
}
</script>

<style scoped>
.order-table > h4 {
	margin-top: 20px;
	margin-bottom: 20px;
}

.common {
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-sizing: border-box;
}

.goods-item {
	display: flex;
	align-items: center;
	padding: 5px;
}

.desc {
	padding: 0px 20px;
	box-sizing: border-box;
}

.settle {
	display: flex;
	justify-content: flex-end;
	padding: 50px 0px 0px 0px;
}
.settle >>> .el-descriptions {
	width: 150px;
}
</style>
