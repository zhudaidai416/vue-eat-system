<template>
    <div id="funnelplot" style="width: 100%;height:400px;"></div>
</template>

<script>
    export default {
        name: '',
        components: {},
        mounted(){
            var myChart = this.$echarts.init(document.getElementById('funnelplot'))
            var option = {
                series: [
                    {
                    name: 'Funnel',
                    type: 'funnel',
                    top: 80,
                    bottom: 30,
                    minSize: '25%',
                    maxSize: '100%',
                    sort: 'ascending',
                    gap: 2,
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    data: [
                        { 
                            value: 20,
                            name: '支付', 
                            itemStyle: {
                                color: '#ff9900'
                            }
                        },
                        { 
                            value: 40, 
                            name: '下单', 
                            itemStyle: {
                                color: '#64af64'
                            }
                        },
                        { 
                            value: 60, 
                            name: '访客', 
                            itemStyle: {
                                color: '#8ca4ea'
                            }
                        },
                    ]
                    }
                ]
            }
            myChart.setOption(option)
        } 
    }
</script>

<style scoped>

</style>