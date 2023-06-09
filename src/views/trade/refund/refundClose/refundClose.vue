<template>
	<div class="order-detail">
		<!-- <h1>订单详情</h1> -->
		<StatusHeader :isShowSteps="false" />
		<!-- 基本信息 -->
		<SectionHeader sectionHeader="基本信息" />
		<SectionInfoV1 />
		<!-- 协商历史 -->
		<SectionHeader sectionHeader="协商历史" />
		<SectionInfoV2 />
		<!-- 纠纷处理 -->
		<SectionHeader sectionHeader="纠纷处理" />
	</div>
</template>

<script>
import StatusHeader from '../../base-ui/status-header/StatusHeader'
import SectionHeader from '../../base-ui/section-header/SectionHeader.vue'
import SectionInfoV1 from '../../base-ui/section-Info-v1/SectionInfoV1.vue'
import SectionInfoV2 from '../../base-ui/section-info-v2/SectionInfoV2.vue'

export default {
	components: {
		StatusHeader,
		SectionHeader,
		SectionInfoV1,
		SectionInfoV2,
	},
	data() {
		return {
			//资金信息
			fundTableData: [
				{
					payable: 1000,
					freight: 15,
					shopFreight: 10,
					technicalServiceFee: 5,
					technicalServiceDiscount: 0.6,
					platformSubsidies: 10,
					income: 400,
				},
			],
		}
	},
}
</script>

<style scoped></style>
