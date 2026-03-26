<template>
  <div>
    <div ref="radarChart" style="height: 400px"></div>
    <div class="legend">
      <div class="legend-item">
        <span class="legend-color" style="background-color: red"></span>
        <span>当前值</span>
      </div>
      <div class="legend-item">
        <span class="legend-color" style="background-color: yellow"></span>
        <span>目标值</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import * as echarts from 'echarts';
  import { onMounted, ref } from 'vue';

  const radarChart = ref(null);

  onMounted(() => {
    const chart = echarts.init(radarChart.value);

    const option = {
      radar: {
        indicator: [
          { name: '计算机软件' },
          { name: '计算机组成' },
          { name: '二进制' },
          { name: '数字编码' },
          { name: '文件夹' },
        ],
        radius: 100,
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: [80, 88],
              itemStyle: {
                color: 'red', // 当前值颜色
              },
            },
            {
              value: [60, 67],
              itemStyle: {
                color: 'red', // 当前值颜色
              },
            },
            {
              value: [55, 80],
              itemStyle: {
                color: 'red', // 当前值颜色
              },
            },
            {
              value: [87, 90],
              itemStyle: {
                color: 'red', // 当前值颜色
              },
            },
            {
              value: [45, 60],
              itemStyle: {
                color: 'red', // 当前值颜色
              },
            },
          ],
        },
        {
          type: 'radar',
          data: [
            {
              value: [88, 88],
              itemStyle: {
                color: 'yellow', // 目标值颜色
              },
            },
            {
              value: [67, 67],
              itemStyle: {
                color: 'yellow', // 目标值颜色
              },
            },
            {
              value: [80, 80],
              itemStyle: {
                color: 'yellow', // 目标值颜色
              },
            },
            {
              value: [90, 90],
              itemStyle: {
                color: 'yellow', // 目标值颜色
              },
            },
            {
              value: [60, 60],
              itemStyle: {
                color: 'yellow', // 目标值颜色
              },
            },
          ],
        },
      ],
    };

    chart.setOption(option);
  });
</script>

<style scoped>
  .legend {
    display: flex;
    margin-top: 10px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .legend-color {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 5px;
  }
</style>
