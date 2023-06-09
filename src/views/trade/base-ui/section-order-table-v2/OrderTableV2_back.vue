<template>
	<div class="order-table">
		<FundInfoTable :infoData="infoData" />
	</div>
</template>

<script>
import FundInfoTable from './fundInfoTable/FundInfoTable.vue'
export default {
	components: {
		FundInfoTable,
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
</style>
