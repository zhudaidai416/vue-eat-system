<template>
  <div class="home-body-transactionanalysis">
    <div id="histogram" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  mounted() {
    var myChart = this.$echarts.init(document.getElementById("histogram"));
    var option = {
      barWidth: 10,
      legend: {
        x: "center",
        y: "bottom",
      },
      grid: {
        left: "3%",
        right: "3%",
        top: "30",
        bottom: "9%",
        containLabel: true,
      },
      xAxis: [
        {
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
          "10-11"
        ],
          // data: ['04-18', '04-21', '04-24', '04-27', '04-30', '05-03', '05-06', '05-09', '05-12', '05-15']
        },
      ],
      yAxis: [
        {
          type: "value",
          data: ["2w", "4w", "6w", "8w", "10w"],
        },
      ],
      series: [
        {
          name: "外卖",
          type: "bar",
          stack: "Ad",
          colorBy: "series",
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            color: "#4e73df",
          },
          data: [
            120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 132, 101,
            134, 90, 230, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230,
            132, 101,
          ],
        },
        {
          name: "团购",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            color: "#00bfbf",
          },
          data: [
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
          ],
        },
        {
          name: "自取",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            color: "#c280ff",
          },
          data: [
            13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,
            13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,
          ],
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style scoped>
</style> 