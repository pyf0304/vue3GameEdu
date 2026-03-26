<template>
  <div class="chart-container">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import * as echarts from 'echarts';

  export default defineComponent({
    name: 'RectangularChart',
    setup() {
      const chart = ref<null | HTMLDivElement>(null);

      const renderChart = (meData: any, socialData: any, compareData: any, xAxisData: any) => {
        if (!chart.value) return;

        const echartsInstance = echarts.init(chart.value);

        const option = {
          tooltip: {
            trigger: 'item',
          },
          grid: {
            top: '3%',
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: Object.values(xAxisData),
          },
          yAxis: {
            type: 'category',
            data: ['Me Data', 'Compare Data', 'Social Data'],
          },
          visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: 10,
          },
          series: [
            {
              name: 'Me Data',
              type: 'heatmap',
              data: Object.entries(meData).map(([key, value]) => [Number(key), 0, value]),
            },
            {
              name: 'Compare Data',
              type: 'heatmap',
              data: Object.entries(compareData).map(([key, value]) => [Number(key), 1, value]),
            },
            {
              name: 'Social Data',
              type: 'heatmap',
              data: Object.entries(socialData).map(([key, value]) => [Number(key), 2, value]),
            },
          ],
        };

        echartsInstance.setOption(option);
      };

      onMounted(() => {
        const meData = {
          0: 100,
          1: 74,
          2: 50,
          3: 29,
          4: 4,
          5: 28,
          6: 91,
          7: 94,
          8: 94,
          9: 72,
          10: 73,
          11: 100,
          12: 72,
          13: 97,
          14: 94,
          15: 0,
        };
        const socialData = {
          0: 63,
          1: 64,
          2: 50,
          3: 43,
          4: 9,
          5: 34,
          6: 91,
          7: 76,
          8: 75,
          9: 58,
          10: 49,
          11: 65,
          12: 49,
          13: 97,
          14: 94,
          15: 0,
        };
        const compareData = {
          0: 37,
          1: 10,
          2: 0,
          3: -14,
          4: -5,
          5: -6,
          6: 0,
          7: 18,
          8: 19,
          9: 14,
          10: 24,
          11: 35,
          12: 23,
          13: 0,
          14: 0,
          15: 0,
        };
        const xAxisData = {
          0: '应用软件',
          1: '文件格式',
          2: 'PPT基础操作',
          3: 'Windows操作',
          4: '系统软件',
          5: '文件属性',
          6: '存储器',
          7: '二进制定义',
          8: '二进制转换',
          9: '信息安全意识',
          10: '网络道德规范',
          11: '网络生活',
          12: '计算机病毒',
          13: '输入输出设备',
          14: 'CPU',
          15: 'PPT美化',
        };
        renderChart(meData, socialData, compareData, xAxisData);
      });

      return { chart, renderChart };
    },
  });
</script>

<style>
  .chart-container {
    width: 800px;
    height: 600px;
  }
  .chart {
    width: 100%;
    height: 100%;
  }
</style>
