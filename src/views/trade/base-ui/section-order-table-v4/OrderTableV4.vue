<template>
	<div class="order-table">
		<h4 class="title">什么东西</h4>
		<div class="table-wrap">
			<el-table :data="infoData" style="width: 100%" :header-cell-style="{ background: '#f4f6fd' }">
				<el-table-column prop="goods" label="商品" width="300" header-align="center" align="center">
					<template v-slot="scope">
						<div class="goods-item">
							<!-- 商品图片预览 -->
							<div class="preview">
								<el-image
									style="width: 100px; height: 100px"
									:src="scope.row.goods.url"
									:preview-src-list="scope.row.goods.srcList">
								</el-image>
							</div>
							<!-- 商品属性描述 -->
							<div class="desc common">
								<el-descriptions
									:column="1"
									:labelStyle="{ 'font-size': '12px', color: '#c0c4cc' }"
									:contentStyle="{ 'font-size': '12px', color: '#c0c4cc' }">
									<template #title>
										<el-link type="primary">
											{{ scope.row.goods.name }}
										</el-link>
									</template>
									<el-descriptions-item label="ID">
										{{ scope.row.goods.id }}
									</el-descriptions-item>
								</el-descriptions>
								<!-- 订单快照 -->
								<div style="text-align: left">
									<TradeSnapshot></TradeSnapshot>
								</div>
							</div>
						</div>
					</template>
				</el-table-column>
				<el-table-column
					prop="goods.specifications"
					label="规格"
					header-align="center"
					align="center">
				</el-table-column>
				<el-table-column prop="goods.attr" label="属性" header-align="center" align="center">
				</el-table-column>
				<el-table-column prop="goods.price" label="单价" header-align="center" align="center">
					<template v-slot="scope">
						<h6 style="margin-left: 10px; font-size: 14px">
							{{ scope.row.goods.price }}
						</h6>
						<h6 style="margin-left: 10px; font-size: 12px; color: #999999">
							原价:{{ scope.row.goods.price * 100 }}
						</h6>
					</template>
				</el-table-column>
				<el-table-column
					prop="goods.packagingFee"
					label="打包费"
					header-align="center"
					align="center">
				</el-table-column>
				<el-table-column prop="freight" label="配送费" header-align="center" align="center">
				</el-table-column>
				<el-table-column prop="discounts" label="满减" header-align="center" align="center">
				</el-table-column>
				<el-table-column prop="Rebate" label="返赠" header-align="center" align="center">
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
import TradeSnapshot from '../trade-snapshot/TradeSnapshot.vue'
export default {
	components: {
		TradeSnapshot,
	},

	props: {
		infoData: {
			type: Array,
		},
	},
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
	justify-content: end;
	padding: 50px 0px 0px 0px;
}
.settle >>> .el-descriptions {
	width: 150px;
}
</style>
