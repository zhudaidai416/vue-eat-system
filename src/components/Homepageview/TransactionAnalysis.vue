<template>
    <div class="home-body-transactionanalysis">
        <span class="home-body-transactionanalysis-span">交易分析</span>
        <div class="home-body-transactionanalysis-chart">
            <div class="home-body-transactionanalysis-charttitle">
                <div>
                    <span>消费端订单量</span>
                </div>
                <div>
                    <span class="home-body-transactionanalysis-charttitle-span2">日</span>
                    <span class="home-body-transactionanalysis-charttitle-span2">周</span>
                    <span class="home-body-transactionanalysis-charttitle-span2">月</span>
                    <span class="home-body-transactionanalysis-charttitle-span2">自定义</span>
                </div>
            </div>
            <div class="home-body-transactionanalysis-chart-box">
                <div class="histogram">
                    <Histogram />
                </div>
                <div class="funnelplot">
                    <FunnelPlot />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FunnelPlot from '../../components/Homepageview/FunnelPlot.vue'
    import Histogram from '../../components/Homepageview/Histogram.vue'

    export default {
        name: 'TransactionAnalysis',
        components: {
            FunnelPlot,
            Histogram
        },
    }
</script>

<style scoped>
    .home-body-transactionanalysis{
        width: 98%;
        margin-top: 20px;
    }

    .home-body-transactionanalysis-span{
        font-size: 18px;
        padding-left: 20px;
        padding-bottom: 20px;
    }

    .home-body-transactionanalysis-chart{
        padding: 20px;
        margin: 20px;
        background: white;
    }

    .home-body-transactionanalysis-charttitle{
        display: flex;
        justify-content: space-between;
    }
    
    .home-body-transactionanalysis-charttitle-span2{
        font-size: 14px;
        padding: 2px;
        border: 1px #999999 solid;
        margin-left: 6px;
    }

    .home-body-transactionanalysis-chart-box{
        display: flex;
    }

    .histogram{
        width: 65%;
    }

    .funnelplot{
        width: 35%;
    }
</style> 