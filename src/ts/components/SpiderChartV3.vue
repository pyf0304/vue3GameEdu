<template>
  <div>
    <div ref="radarChart" style="height: 400px"></div>
    <div class="legend">
      <div class="legend-item">
        <span class="legend-color" style="background-color: rgba(255, 0, 0, 0.5)"></span>
        <span>当前值</span>
      </div>
      <div class="legend-item">
        <span class="legend-color" style="background-color: rgba(255, 125, 0, 0.5)"></span>
        <span>目标值</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import * as echarts from 'echarts';
  import { PropType, defineComponent, onMounted, ref, watch } from 'vue';
  import { clsCboObject } from '../PubFun/clsCboObject';
  export default defineComponent({
    name: 'ButtonRadio',
    components: {
      // 组件注册
    },
    props: {
      currData: {
        type: Array<number> as () => number[],
        required: true,
      },
      perceivedData: {
        type: Array<number> as () => number[],
        required: true,
      },
      goalData: {
        type: Array<number> as () => number[],
        required: true,
      },
      indicator: {
        type: Array as PropType<{ name: string }[]>,
        required: true,
      },
    },
    emits: ['optionSelected'],
    setup(props, { emit }) {
      const radarChart = ref(null);
      const chart = ref();
      const option = {
        tooltip: {
          trigger: 'axis', // 将触发类型设置为 'axis'
          axisPointer: {
            type: 'line', // 设置指示器类型为 'cross'
          },
        },
        legend: {
          data: ['当前值', '自认值', '目标值'],
        },
        radar: {
          indicator: props.indicator,
          radius: 100,
        },
        series: [
          {
            name: '当前值',
            type: 'radar',
            data: [
              {
                value: props.currData,
                label: {
                  show: true, // 显示标签
                  formatter: (params: any) => params.value[0], // 标签格式化，显示第一个值
                },
                itemStyle: {
                  color: 'rgba(255, 0, 0, 0.5)', // 当前值颜色
                },
                // areaStyle: {
                //   color: 'rgba(255, 0, 0, 0.5)', // 当前值颜色
                // },
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
                  show: true, // 显示标签
                  formatter: (params: any) => params.value[0], // 标签格式化，显示第一个值
                },
                itemStyle: {
                  color: 'rgba(255, 125, 0, 0.5)', // 目标值颜色
                },
                // areaStyle: {
                //   color: 'rgba(255, 125, 0, 0.5)', // 目标值颜色
                // },
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
                  show: true, // 显示标签
                  formatter: (params: any) => params.value[0], // 标签格式化，显示第一个值
                },
                itemStyle: {
                  color: 'rgba(255, 125, 125, 0.5)', // 目标值颜色
                },
                // areaStyle: {
                //   color: 'rgba(255, 125, 125, 0.5)', // 目标值颜色
                // },
              },
            ],
          },
        ],
      };
      onMounted(() => {
        chart.value = echarts.init(radarChart.value);
      });
      watch(
        () => props.currData,
        (newOptions, oldOptions) => {
          console.log('Options changed:', newOptions, oldOptions);
          option.series[0].data[0].value = props.currData;
          option.series[1].data[0].value = props.perceivedData;
          option.series[2].data[0].value = props.goalData;
          // const arrIndicator = props.indicator.map((x) => {
          //   name: x;
          // });
          option.radar.indicator = props.indicator;

          chart.value.setOption(option);
        },
      );
      function btn_Click(strCommandName: string, strKeyId: any) {
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
            break;
          default:
            break;
        }
        // PaperQAA.btn_Click(strCommandName, strKeyId);
      }

      /**
       * 页面导入-在导入页面后运行的函数
       **/
      function window_onload() {
        // $('#h1idOrderbyId').val('1');
      }

      return {
        btn_Click,

        window_onload,
        option,
        chart,
        radarChart,
      };
    },

    methods: {
      // 方法定义
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
