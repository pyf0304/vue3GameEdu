<template>
  <div>
    <SpiderChartCom ref="refSpiderChart" :dimensions="dimensions"></SpiderChartCom>
  </div>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import SpiderChartCom from '@/ts/components/SpiderChart.vue';
  import { clsDimensions } from '@/ts/FunClass/clsDimensions';
  export default {
    name: 'TestSpiderChart',
    components: {
      SpiderChartCom,
    },
    setup() {
      const refSpiderChart = ref();
      const dimensions: Array<clsDimensions> = [
        { name: '计算机软件', value: 80 },
        { name: '计算机组成', value: 60 },
        { name: '二进制', value: 55 },
        { name: '数字编码', value: 87 },
        { name: '文件夹', value: 95 },
      ];

      const buttons = ref([
        { key: 'button1', label: '按钮1' },
        { key: 'button2', label: '按钮2' },
        { key: 'button3', label: '按钮3' },
      ]);

      const visible = ref(false);

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
        buttons,
        visible,
        handleButtonClick,
        refSpiderChart,
        dimensions,
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
