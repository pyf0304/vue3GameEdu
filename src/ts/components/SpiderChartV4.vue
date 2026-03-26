<template>
  <div>
    <div ref="radarChart" style="height: 300px; width: 350px"></div>
    <!-- <div class="legend">
      <div class="legend-item">
        <span class="legend-color" style="background-color: rgba(255, 0, 0, 0.5)"></span>
        <span>当前值</span>
      </div>
      <div class="legend-item">
        <span class="legend-color" style="background-color: rgba(255, 125, 0, 0.5)"></span>
        <span>目标值</span>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
  import * as echarts from 'echarts';
  import { PropType, defineComponent, onMounted, ref, watch } from 'vue';

  export default defineComponent({
    name: 'RadarChart',
    props: {
      myTitle: {
        type: String,
        required: true,
      },
      currData: {
        type: Array as PropType<number[]>,
        required: true,
      },
      perceivedData: {
        type: Array as PropType<number[]>,
        required: true,
      },
      goalData: {
        type: Array as PropType<number[]>,
        required: true,
      },
      indicator: {
        type: Array as PropType<{ name: string }[]>,
        required: true,
      },
    },
    setup(props) {
      const radarChart = ref<HTMLElement | null>(null);
      const chart = ref<echarts.ECharts | null>(null);

      onMounted(() => {
        if (radarChart.value) {
          chart.value = echarts.init(radarChart.value);
          updateChart();
        }
      });

      // watch([props.currData, props.perceivedData, props.goalData, props.indicator], () => {
      //   updateChart();
      // });
      watch(
        () => [props.currData, props.perceivedData, props.goalData, props.indicator],
        () => {
          console.log('Options changed in RadarChart:');
          // option.series[0].data[0].value = props.currData;
          // option.series[1].data[0].value = props.perceivedData;
          // option.series[2].data[0].value = props.goalData;
          // // const arrIndicator = props.indicator.map((x) => {
          // //   name: x;
          // // });
          // option.radar.indicator = props.indicator;

          // chart.value.setOption(option);
          updateChart();
        },
      );

      function updateChart() {
        if (!chart.value) return;

        const option: echarts.EChartsOption = {
          grid: {
            left: '15%', // 调整图表左侧的空白区域
            right: '5%', // 调整图表右侧的空白区域
            top: '15%', // 调整图表顶部的空白区域
            bottom: '5%', // 调整图表底部的空白区域
          },
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

          legend: {
            data: ['当前值', '自认值', '目标值'],

            orient: 'vertical', // 设置图例纵向排列
            right: '1%', // 设置图例在右侧
            top: 'top', // 设置图例在垂直方向上居中
          },
          radar: {
            indicator: props.indicator,
            radius: 100,
            name: {
              textStyle: {
                fontSize: 11, // 设置雷达图标签的字体大小为 12px
              },
            } as any, // 将 name 配置项转换为 unknown 类型，然后再转换为目标类型
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
            },
          },
          series: [
            {
              name: '当前值',
              type: 'radar',
              data: [
                {
                  value: props.currData,
                  label: {
                    show: true,
                    formatter: (params: any) => params.value[0],
                    fontSize: 6, // 设置标签的字体大小为 10px
                    color: '#5470C6',
                  },
                  itemStyle: {
                    // color: 'rgba(255, 0, 0, 0.5)',
                    color: '#5470C6',
                    // color: 'green',
                  },
                },
              ],
            },
            {
              name: '自认值',
              type: 'radar',
              data: [
                {
                  value: props.perceivedData,
                  label: {
                    show: true,
                    formatter: (params: any) => params.value[0],

                    fontSize: 6, // 设置标签的字体大小为 10px
                    color: '#91CC75',
                  },
                  itemStyle: {
                    color: '#91CC75',
                  },
                },
              ],
            },
            {
              name: '目标值',
              type: 'radar',
              data: [
                {
                  value: props.goalData,
                  label: {
                    show: true,
                    formatter: (params: any) => params.value[0],
                    fontSize: 6, // 设置标签的字体大小为 10px
                    color: '#FAC858',
                  },
                  itemStyle: {
                    color: '#FAC858',
                  },
                },
              ],
            },
          ],
        };

        chart.value.setOption(option);
      }

      return {
        radarChart,
      };
    },
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
