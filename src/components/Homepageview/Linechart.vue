<template>
  <div>
    <div class="home-body-flowanalysis-charttitle">
      <div>
        <span>消费端访客数</span>
      </div>
      <div>
        <span class="home-body-flowanalysis-charttitle-span2">日</span>
        <span class="home-body-flowanalysis-charttitle-span2">周</span>
        <span class="home-body-flowanalysis-charttitle-span2">月</span>
        <span class="home-body-flowanalysis-charttitle-span2">自定义</span>
      </div>
    </div>
    <div class="linechart">
      <div id="linecharts" style="width: 100%; height: 540px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  mounted() {
    var myChart = this.$echarts.init(document.getElementById("linecharts"));
    var option = {
      grid: {
        left: "3%",
        right: "3%",
        top: "30",
        bottom: "0",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: [
          "09-11",
          "09-12",
          "09-13",
          "09-14",
          "09-15",
          "09-16",
          "09-17",
          "09-18",
          "09-19",
          "09-20",
          "09-21",
          "09-22",
          "09-23",
          "09-24",
          "09-25",
          "09-26",
          "09-27",
          "09-28",
          "09-29",
          "09-30",
          "10-01",
          "10-02",
          "10-03",
          "10-04",
          "10-05",
          "10-06",
          "10-07",
          "10-08",
          "10-09",
          "10-10",
          "10-11",
        ],
      },
      yAxis: {
        type: "value",
        data: ["4w", "8w", "12w", "16w", "20w"],
      },
      series: [
        {
          type: "line",
          data: [
            11.7, 12.4, 13.9, 10.54, 10.61, 9.38, 13.51, 13.9, 10.54, 9.38,
            13.51, 13.9, 10.54, 10.61, 9.38, 13.51, 13.9, 10.54, 9.38, 13.51,
            13.9, 13.9, 10.54, 10.61, 9.38, 10.39, 14.72, 8.73, 10.99, 13.14,
            10.96,
          ],
          label: {
            show: false,
            position: "bottom",
            textStyle: {
              fontSize: 12,
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style scoped>
.home-body-flowanalysis-charttitle {
  display: flex;
  justify-content: space-between;
}

.home-body-flowanalysis-charttitle-span2 {
  font-size: 14px;
  padding: 2px;
  border: 1px #999999 solid;
  margin-left: 6px;
}

.linechart {
  width: 100%;
  height: 560px;
}
</style>
