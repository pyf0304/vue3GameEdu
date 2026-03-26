<template>
  <div class="chart-container">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import * as echarts from 'echarts';

  export default defineComponent({
    name: 'SquareChart',
    setup() {
      const chart = ref<null | HTMLDivElement>(null);

      const renderChart = (
        meData: number[],
        compareData: number[],
        groupData: number[],
        xAxisData: string[],
      ) => {
        if (!chart.value) return;

        const echartsInstance = echarts.init(chart.value);

        const option = {
          tooltip: {
            trigger: 'item',
          },
          grid: {
            top: '5%',
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: xAxisData,
            axisLabel: {
              interval: 0,
              rotate: 45,
            },
          },
          yAxis: {
            type: 'category',
            data: ['我的', '比较', '小组'],
          },
          visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: 10,
            inRange: {
              color: ['#5A94DF', '#61C0BF'], // 从蓝色到绿色的线性渐变色
            },
          },
          series: [
            {
              name: '我的',
              type: 'custom',
              renderItem: (params: any, api: any) => {
                const xValue = api.value(0);
                const yValue = api.value(1);
                const value = api.value(2);

                const position = api.coord([xValue, yValue]);
                const size = api.size([1, 1]);

                return {
                  type: 'rect',
                  shape: {
                    x: position[0] - size[0] / 2,
                    y: position[1] - size[0] / 2, // 矩形的高度和宽度一致，确保是正方形
                    width: size[0],
                    height: size[0],
                  },
                  style: {
                    fill:
                      value > 0
                        ? getColor(value / 100)
                        : value < 0
                        ? getColor(-value / 100, true)
                        : 'transparent',
                  },
                };
              },
              data: meData.map((value, index) => [index, 0, value]),
            },
            {
              name: '比较',
              type: 'custom',
              renderItem: (params: any, api: any) => {
                const xValue = api.value(0);
                const yValue = api.value(1);
                const value = api.value(2);

                const position = api.coord([xValue, yValue]);
                const size = api.size([1, 1]);

                return {
                  type: 'rect',
                  shape: {
                    x: position[0] - size[0] / 2,
                    y: position[1] - size[0] / 2,
                    width: size[0],
                    height: size[0],
                  },
                  style: {
                    fill: value >= 0 ? getColor(value / 100) : getColor(-value / 100),
                  },
                };
              },
              data: compareData.map((value, index) => [index, 1, value]),
            },
            {
              name: '小组',
              type: 'custom',
              renderItem: (params: any, api: any) => {
                const xValue = api.value(0);
                const yValue = api.value(1);
                const value = api.value(2);

                const position = api.coord([xValue, yValue]);
                const size = api.size([1, 1]);

                return {
                  type: 'rect',
                  shape: {
                    x: position[0] - size[0] / 2,
                    y: position[1] - size[0] / 2,
                    width: size[0],
                    height: size[0],
                  },
                  style: {
                    fill: value >= 0 ? getColor(value / 100) : getColor(-value / 100),
                  },
                };
              },
              data: groupData.map((value, index) => [index, 2, value]),
            },
          ],
        };

        echartsInstance.setOption(option);
      };

      onMounted(() => {
        const meData = [100, 74, 50, 29, 4, 28, 91, 94, 94, 72, 73, 100, 72, 97, 94, 0];
        const compareData = [37, 10, 0, -14, -5, -6, 0, 18, 19, 14, 24, 35, 23, 0, 0, 0];
        const groupData = [63, 64, 50, 43, 9, 34, 91, 76, 75, 58, 49, 65, 49, 97, 94, 0];
        const xAxisData = [
          '应用软件',
          '文件格式',
          'PPT基础操作',
          'Windows操作',
          '系统软件',
          '文件属性',
          '存储器',
          '二进制定义',
          '二进制转换',
          '信息安全意识',
          '网络道德规范',
          '网络生活',
          '计算机病毒',
          '输入输出设备',
          'CPU',
          'PPT美化',
        ];
        renderChart(meData, compareData, groupData, xAxisData);
      });

      const getColor = (value: number, isInverse: boolean = false) => {
        const lightness = isInverse ? 50 - value * 50 : 50 + value * 50;
        return `hsl(120, 100%, ${lightness}%)`;
      };

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
