<template>
	<h4>{{ sectionHeader }}</h4>
</template>

<script>
export default {
	props: {
		sectionHeader: {
			type: String,
			default: '局部标题',
		},
	},
}
</script>

<style scoped>
h4 {
	margin-top: 20px;
	margin-bottom: 20px;
}
</style>
