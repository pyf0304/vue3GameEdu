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
      xAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value}',
        },
      },
      yAxis: {
        type: 'category',
        data: ['计算机软件', '计算机组成', '二进制', '数字编码', '文件夹'],
      },
      series: [
        {
          name: '当前值',
          type: 'bar',
          data: [80, 60, 55, 87, 45],
          itemStyle: {
            color: 'red', // 当前值颜色
          },
        },
        {
          name: '目标值',
          type: 'bar',
          data: [88, 67, 80, 90, 60],
          itemStyle: {
            color: 'yellow', // 目标值颜色
          },
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
