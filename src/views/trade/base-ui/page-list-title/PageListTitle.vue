<template>
	<div class="page-content-title">
		<span v-for="item in config" :key="item">{{ item }}</span>
	</div>
</template>

<script>
export default {
	props: {
		config: {
			type: Array,
		},
	},
}
</script>

<style scoped>
.page-content-title {
	background-color: #eff1fc;
	display: flex;
	justify-content: flex-start;
	height: 50px;
	line-height: 50px;
	margin-top: 20px;
	margin-bottom: 20px;
}

.page-content-title span {
	display: block;
	padding: 0px 20px;
	box-sizing: border-box;
	font-size: 14px;
	text-align: center;
	min-width: 150px;
	max-width: 150px;
}
.page-content-title span:first-child {
	min-width: 500px;
}
</style>
