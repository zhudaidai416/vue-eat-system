<template>
	<div class="info">
		<div class="list-card">
			<NegotiationCard />
			<NegotiationCard />
			<NegotiationCard :config="configSystem" />
		</div>
	</div>
</template>

<script>
import NegotiationCard from '../section-info-v2-card/NegotiationCard.vue'
export default {
	data() {
		return {
			configSystem: {
				isShowProve: true,
			},
		}
	},

	components: {
		NegotiationCard,
	},
}
</script>

<style scoped>
.list-card {
	display: flex;
	/* flex-wrap: wrap; */
	overflow-x: scroll;
}
</style>
