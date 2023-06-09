<template>
	<!-- 协商历史 -->

	<div class="card">
		<!-- 头像 -->
		<div class="avatar"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>

		<!-- 描述 -->
		<div class="desc">
			<h5 class="name">张三的歌</h5>
			<div class="time">2022-03-07 12:59:43</div>
			<h4 class="content">顾客发起了退款申请</h4>
			<el-descriptions :column="1" size="mini">
				<el-descriptions-item label="退款原因">计划有变，不想要了</el-descriptions-item>
				<el-descriptions-item label="补充说明">点了别的外卖</el-descriptions-item>
			</el-descriptions>
		</div>

		<!-- 下载证明 -->
		<div class="prove" v-show="config.isShowProve">
			<svg
				version="1.1"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width="69px"
				height="80px"
				xmlns="http://www.w3.org/2000/svg">
				<g transform="matrix(1 0 0 1 -820 -995 )">
					<path
						d="M 57 69  L 57 14.9145535714285  L 41.0243234536083 0  L 0 0  L 0 69  L 57 69  Z M 51 64  L 6 64  L 6 6  L 36 6  L 36 20  L 51 20  L 51 64  Z M 68 19.9293750000001  L 62 19.9293750000001  L 62 74  L 11.1391430412371 74  L 11.1391430412371 80  L 68 80  L 68 19.9293750000001  Z M 11.4021610824742 33  L 11.4021610824742 28  L 45.7998170103093 28  L 45.7998170103093 33  L 11.4021610824742 33  Z M 11.4021610824742 45  L 11.4021610824742 40  L 45.7998170103093 40  L 45.7998170103093 45  L 11.4021610824742 45  Z M 11.4021610824742 57  L 11.4021610824742 52  L 45.7998170103093 52  L 45.7998170103093 57  L 11.4021610824742 57  Z "
						fill-rule="nonzero"
						fill="#cccccc"
						stroke="none"
						transform="matrix(1 0 0 1 820 995 )" />
				</g>
			</svg>

			<el-link type="primary" class="prove-link">下载证明</el-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		config: {
			type: Object,
			default: () => ({
				isShowProve: false,
			}),
		},
	},
	data() {
		return {
			circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
		}
	},
}
</script>

<style scoped>
.card {
	width: 450px;
	border: 1px solid rgb(225, 225, 225);
	box-sizing: border-box;
	border-radius: 10px;
	padding: 20px;
	display: flex;
	flex-shrink: 0;
	margin-bottom: 20px;
	margin-right: 20px;
}

.desc {
	width: 220px;
}
.avatar {
	margin-right: 20px;
}
.name {
	margin-bottom: 10px;
}
.time {
	margin-bottom: 10px;
	font-size: 13px;
	color: #ccc;
}
.content {
	margin-bottom: 10px;
	display: inline-block;
	max-width: 220px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-wrap: normal;
}

/* 下载证明 */
.prove {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.prove-link {
	margin-top: 15px;
}
</style>
