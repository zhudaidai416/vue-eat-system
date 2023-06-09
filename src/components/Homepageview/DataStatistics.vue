<template>
    <div class="home-body-datastatistics">
        <div class="home-body-tdl">
            <span class="home-body-tdl-span">今日待办<span style="color: red; font-size:13px">(16,400)</span></span>
            <div class="toaudit">
                <ToAudit />
            </div>
        </div>
        <div class="home-body-flowanalysis">
            <span class="home-body-flowanalysis-span">流量分析</span>
            <div class="home-body-flowanalysis-chart">
                <Linechart />
            </div>
        </div>
    </div>
</template>

<script>
    import Linechart from "../../components/Homepageview/Linechart.vue"
    import ToAudit from "../../components/Homepageview/ToAudit.vue"

    export default {
        name: 'DataStatistics',
        components: {
            ToAudit,
            Linechart,
        },
    }
</script>

<style scoped>
    .home-body-datastatistics{
        padding: 20px;
        display: flex;
    }

    .home-body-tdl{
        width: 31%;
    }

    .home-body-tdl-span{
        font-size: 18px;
        padding: 20px 0;
    }

    .home-body-flowanalysis{
        width: 67%;
    }

    .home-body-flowanalysis-span{
        font-size: 18px;
        padding: 20px 0;
    }

    .home-body-flowanalysis-chart{
        background: white;
        padding: 20px 20px 0 20px;
        margin-top: 20px;
    }

    .toaudit{
        width: 100%;
    }
</style> 