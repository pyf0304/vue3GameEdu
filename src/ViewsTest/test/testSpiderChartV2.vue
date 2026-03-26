<template>
  <div style="width: 450px; height: 300px">
    <SpiderChartCom
      ref="refSpiderChart"
      :my-title="'雷达图测试'"
      :indicator="radar_indicator"
      :curr-data="radar_currData"
      :perceived-data="radar_perceivedData"
      :goal-data="radar_goalData"
    ></SpiderChartCom>
  </div>
</template>
<script lang="ts">
  import { PropType, Ref, onMounted, ref } from 'vue';
  import SpiderChartCom from '@/ts/components/SpiderChartV4.vue';
  import { clsDimensions } from '@/ts/FunClass/clsDimensions';
  export default {
    name: 'TestSpiderChart',
    components: {
      SpiderChartCom,
    },
    setup() {
      const refSpiderChart = ref();
      // const indicator = ref < Array as PropType<{ name: string }[]>) > ([{ name: '计算机软件' }]);
      const radar_indicator: Ref<{ name: string }[]> = ref([{ name: '计算机软件' }]);
      const radar_currData = ref<Array<number>>([11, 22]);
      const radar_perceivedData = ref<Array<number>>([11, 22]);
      const radar_goalData = ref<Array<number>>([11, 22]);

      const visible = ref(false);
      onMounted(() => {
        radar_indicator.value = [
          { name: '计算机软件' },
          { name: '计算机组成' },
          { name: '二进制' },
          { name: '数字编码' },
          { name: '文件夹' },
        ];
        radar_currData.value = [80, 60, 55, 87, 45];
        radar_perceivedData.value = [82, 69, 60, 90, 55];
        radar_goalData.value = [88, 67, 80, 90, 60];
      });
      const handleButtonClick = (key: string) => {
        // 根据点击的按钮选项执行相应的操作
        if (key === 'button1') {
          // 处理按钮1的点击操作
          // ...
          alert('button1');
        } else if (key === 'button2') {
          // 处理按钮2的点击操作
          // ...
          alert('button2');
        } else if (key === 'button3') {
          // 处理按钮3的点击操作
          // ...
          alert('button3');
        }

        // 切换按钮的显示和隐藏
        // visible.value = !visible.value;
      };

      return {
        visible,
        handleButtonClick,
        refSpiderChart,
        radar_indicator,
        radar_currData,
        radar_perceivedData,
        radar_goalData,
      };
    },
  };
</script>
<style scoped>
  .dropdown-btn {
    display: none; /* 初始状态隐藏按钮 */
  }

  a-dropdown[aria-expanded='true'] .dropdown-btn {
    display: inline-block; /* 下拉展开后显示按钮 */
  }
</style>
