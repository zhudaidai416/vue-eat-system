<template>
	<div class="order-status">
		<h4 :style="{ 'padding-bottom': '20px' }">配送动态</h4>
		<!-- 地图api站位 -->
		<div id="a-map"></div>
		<!-- 步骤条 -->
		<div class="step">
			<el-timeline>
				<el-timeline-item
					v-for="(activity, index) in activities"
					:key="index"
					:icon="activity.icon"
					:type="activity.type"
					:color="activity.color"
					:size="activity.size"
					:timestamp="activity.timestamp">
					{{ activity.content }}
				</el-timeline-item>
			</el-timeline>
		</div>
	</div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
	data() {
		return {
			activities: [
				{
					content: '支持使用图标',
					timestamp: '2018-04-12 20:46',
					size: 'large',
					type: 'primary',
					icon: 'el-icon-more',
				},
				{
					content: '支持自定义颜色',
					timestamp: '2018-04-03 20:46',
					color: '#0bbd87',
				},
				{
					content: '支持自定义尺寸',
					timestamp: '2018-04-03 20:46',
					size: 'large',
				},
				{
					content: '默认样式的节点',
					timestamp: '2018-04-03 20:46',
				},
			],
		}
	},
	methods: {
		initMap() {
			AMapLoader.load({
				key: '4b5d45bbce7a7196c3262a7706707d4c',
				version: '2.0',
				// plugins: ['overlay/SimpleMarker'],
			})
				.then(AMap => {
					this.map = new AMap.Map('a-map', {
						viewMode: '3D',
						zoom: 5,
						center: [105.602725, 37.076636],
					})
					AMap.plugin(['AMap.ToolBar', 'AMap.Driving'], () => {
						//异步同时加载多个插件
						const toolbar = new AMap.ToolBar()
						this.map.addControl(toolbar)
						var driving = new AMap.Driving() //驾车路线规划
						driving.search(/*参数*/)
					})
				})
				.catch(e => {
					console.log(e)
				})
		},
	},

	mounted() {
		//DOM初始化完成进行地图初始化
		this.initMap()
	},
}
</script>

<style scoped>
.order-status {
	padding: 10px 10px;
}

.order-status .step {
	padding: 0px 25%;
}

#a-map {
	width: 500px;
	height: 300px;
	border-radius: 15px;
	margin-bottom: 30px;
}
</style>
