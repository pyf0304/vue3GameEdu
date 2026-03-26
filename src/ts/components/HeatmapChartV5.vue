<template>
  <div class="chart-container">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script lang="ts">
  import { PropType, defineComponent, onMounted, ref } from 'vue';
  import * as echarts from 'echarts';

  export default defineComponent({
    name: 'HeatmapChart',
    props: {
      myTitle: {
        type: String,
        required: true,
        default: '热力图',
      },
      meData: {
        type: Array as PropType<number[]>,
        required: true,
      },
      groupData: {
        type: Array as PropType<number[]>,
        required: true,
      },
      xAxisData: {
        type: Array as PropType<string[]>,
        required: true,
      },
    },
    setup(props) {
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
          title: {
            text: props.myTitle, //'雷达图', // 标题文本
            left: 'left', // 标题水平居中
            textStyle: {
              fontSize: 15, // 设置字体大小为 16px
              fontWeight: 'bold', // 设置字体加粗
              fontFamily: 'Arial, sans-serif', // 设置字体类型
              color: '#333', // 设置字体颜色
            },
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params: any) {
              const seriesName = params.seriesName;
              const categoryName = params.name;
              const value = params.value[2];
              const value_Group = params.value[3];
              let valueType = '';
              if (seriesName === '我的') {
                valueType = '我的';
                return `${valueType} - ${categoryName}: ${value}`;
              } else if (seriesName === '小组') {
                valueType = '小组';
                return `${valueType} - ${categoryName}: ${value}`;
              } else if (seriesName === '比较') {
                valueType = '比较';
                if (value > value_Group) {
                  return `${valueType} - ${categoryName}: 我的比小组大${value - value_Group}`;
                } else if (value < value_Group) {
                  return `${valueType} - ${categoryName}: 我的比小组小${value_Group - value}`;
                } else {
                  return `${valueType} - ${categoryName}: 我的和小组一样`;
                }
              }
            },
          },

          grid: {
            top: '5%',
            left: '3%',
            right: '3%',
            bottom: '10%', // 调整底部间距
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
            axisLabel: {
              interval: 0, // 调整 y 轴标签间隔
            },
          },

          // visualMap: {
          //   min: -100,
          //   max: 100,
          //   calculable: true,
          //   orient: 'horizontal',
          //   left: 'center',
          //   bottom: 10,
          //   inRange: {
          //     color: ['#5A94DF', '#61C0BF'],
          //   },
          // },
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
                    y: position[1] - size[0] / 2,
                    width: size[0] - 1,
                    height: size[0],
                  },
                  style: {
                    fill: getColor(value / 100.0), // 根据值的大小获取颜色
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
                const meValue = api.value(2);
                const groupValue = api.value(3);

                const position = api.coord([xValue, yValue]);
                const size = api.size([1, 1]);

                const color = getComparisonColor(meValue, groupValue);

                return {
                  type: 'rect',
                  shape: {
                    x: position[0] - size[0] / 2,
                    y: position[1] - size[0] / 2,
                    width: size[0] - 1,
                    height: size[0],
                  },
                  style: {
                    fill: color,
                  },
                };
              },
              data: meData.map((value, index) => [index, 1, value, groupData[index]]),
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
                    width: size[0] - 1,
                    height: size[0],
                  },
                  style: {
                    fill: getColor4Blue(value / 100.0), // 根据值的大小获取颜色
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

      const getColor = (value: number) => {
        const myGreen = Math.round(value * 255);
        // const meColoe = `rgba(0, 255, 0, ${myGreen})`;
        const meColoe = `rgba(0, ${myGreen}, 0, ${value})`;

        console.log('meColoe', meColoe);
        return meColoe; // 绿色
      };

      const getColor4Blue = (value: number) => {
        const myBlue = Math.round(value * 255);
        return `rgba(0, 0, ${myBlue}, ${value})`; // 蓝色
      };

      const getComparisonColor = (meValue: number, groupValue: number) => {
        const comparisonValue = meValue - groupValue;
        // const myGreen = Math.round(meValue * 255);
        // const myBlue = Math.round(groupValue * 255);
        const myGreen = Math.round(comparisonValue * 255);
        const myBlue = Math.round(-comparisonValue * 255);
        if (comparisonValue > 0) {
          return `rgba(0, ${myGreen}, 0, ${comparisonValue / 100.0})`; // 绿色
        } else if (comparisonValue < 0) {
          return `rgba(0, 0, ${myBlue}, ${-comparisonValue / 100.0})`; // 蓝色
        } else {
          return 'transparent'; // 透明
        }
      };

      return { chart, renderChart };
    },
  });
</script>

<style>
  .chart-container {
    width: 800px;
    height: 300px;
  }
  .chart {
    width: 100%;
    height: 100%;
  }
</style>
