<template>
  <div>
    <div ref="barChart" style="height: 300px; width: 350px"></div>
    <!-- <div class="legend">
      <div class="legend-item">
        <span class="legend-color" style="background-color: red"></span>
        <span>当前值</span>
      </div>
      <div class="legend-item">
        <span class="legend-color" style="background-color: green"></span>
        <span>自认值</span>
      </div>
      <div class="legend-item">
        <span class="legend-color" style="background-color: yellow"></span>
        <span>目标值</span>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
  import * as echarts from 'echarts';
  import { defineComponent, onMounted, ref, watch } from 'vue';

  export default defineComponent({
    name: 'BarSocialCompChart',
    components: {
      // 组件注册
    },
    props: {
      myTitle: {
        type: String,
        required: true,
      },
      meData: {
        type: Array<number> as () => number[],
        required: true,
      },
      socialData: {
        type: Array<number> as () => number[],
        required: true,
      },
      compareData: {
        type: Array<number> as () => number[],
        required: true,
      },
      yAxisData: {
        type: Array<string> as () => string[],
        required: true,
      },
    },
    emits: ['serialClicked'],
    setup(props, { emit }) {
      const barChart = ref(null);
      const chart = ref();
      const option = {
        grid: {
          left: '25%', // 调整图表左侧的空白区域
          right: '5%', // 调整图表右侧的空白区域
          top: '15%', // 调整图表顶部的空白区域
          bottom: '10%', // 调整图表底部的空白区域
        },
        title: {
          text: props.myTitle, //'雷达图', // 标题文本
          left: 'center', // 标题水平居中
          textStyle: {
            fontSize: 14, // 设置字体大小为 16px
            fontWeight: 'bold', // 设置字体加粗
            fontFamily: 'Arial, sans-serif', // 设置字体类型
            color: '#333', // 设置字体颜色
          },
        },

        legend: {
          data: ['我的', '比较', '小组'],
          left: 'right', // 标题水平居中
          top: '7%', // 标题垂直位置
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow',
          },
        },

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
          data: ['计算机软件', '计算机组成'],
          axisLine: {
            lineStyle: {
              width: 2, // 调整整个轴线的宽度
              // 其他轴线样式属性...
            },
          },
          //          data: ['计算机软件', '计算机组成', '二进制', '数字编码', '文件夹'],
        },
        series: [
          {
            name: '我的',
            type: 'bar',
            // barWidth: 4, // 设置条形图的宽度
            data: [80, 88],
            itemStyle: {
              color: 'red', // 当前值颜色
            },
          },
          {
            name: '比较',
            type: 'bar',
            // barWidth: 4, // 设置条形图的宽度
            data: [82, 88],
            itemStyle: {
              color: 'green', // 目标值颜色
            },
          },
          {
            name: '小组',
            type: 'bar',
            // barWidth: 4, // 设置条形图的宽度
            data: [88, 88],
            itemStyle: {
              color: 'yellow', // 目标值颜色
            },
          },
        ],
      };

      onMounted(() => {
        chart.value = echarts.init(barChart.value);
        // option.series[0].data = props.currData;
        // option.series[1].data = props.perceivedData;
        // option.series[2].data = props.goalData;
        console.log(option);
        // chart.setOption(option);
      });
      watch(
        () => props.meData,
        (newOptions, oldOptions) => {
          console.log('Options changed in BarChartV3:', newOptions, oldOptions);
          // if (newOptions.length > 0) {
          //   selectedOption.value = newOptions[0].value;
          // }
          option.title.text = props.myTitle;
          option.series[0].data = props.meData;
          option.series[1].data = props.compareData;
          option.series[2].data = props.socialData;
          option.yAxis.data = props.yAxisData;
          console.log(option);
          chart.value.setOption(option);
          // 监听 yAxis 轴的点击事件
          chart.value.on('click', { seriesType: 'bar' }, (params: any) => {
            // if (params.componentType === 'yAxis') {
            //   const dataIndex = params.dataIndex;
            //   const currentValue = data[dataIndex].value[0];
            //   const targetValue = data[dataIndex].value[1];
            //   console.log(
            //     `Clicked on ${data[dataIndex].name}: Current Value: ${currentValue}, Target Value: ${targetValue}`,
            //   );
            // }
            if (params.componentType === 'series') {
              const dataIndex = params.dataIndex;
              const seriesId = params.seriesId;
              const seriesIndex = params.seriesIndex;

              // const currentValue = option.series[seriesIndex].value[0];
              // const targetValue = option.series[seriesIndex].value[1];
              const serialName = option.series[seriesIndex].name;
              const serialValue = option.series[seriesIndex].data[dataIndex];
              const clickData = {
                seriesIndex,
                dataIndex,
              };
              emit('serialClicked', clickData);
              console.log(
                `Clicked on ${option.yAxis.data[dataIndex]}: Serial Name: ${serialName}, Serial Value: ${serialValue}`,
              );
            }
          });
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
        barChart,
        chart,
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
