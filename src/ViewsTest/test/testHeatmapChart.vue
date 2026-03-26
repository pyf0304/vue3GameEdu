<template>
  <div style="width: 450px; height: 300px">
    <HeatmapChartCom
      ref="refHeatmapChartCom"
      :meData="meData"
      :groupData="groupData"
      :xAxisData="xAxisData"
      @serial-clicked="serialClicked"
    ></HeatmapChartCom>
  </div>
</template>
<script lang="ts">
  import { onMounted, ref } from 'vue';
  import HeatmapChartCom from '@/ts/components/HeatmapChart_SocialComp.vue';
  import { clsDimensions } from '@/ts/FunClass/clsDimensions';
  export default {
    name: 'TestSpiderChart',
    components: {
      HeatmapChartCom,
    },
    setup() {
      const refHeatmapChartCom = ref();

      const meData = ref<Array<number>>([11, 22]);
      const groupData = ref<Array<number>>([11, 22]);
      const xAxisData = ref<Array<string>>(['AA', 'BB']);

      const visible = ref(false);
      onMounted(() => {
        meData.value = [80, 60, 55, 87, 45];
        groupData.value = [82, 69, 60, 90, 55];
        xAxisData.value = ['计算机软件', '计算机组成', '二进制', '数字编码', '文件夹'];
      });

      const serialClicked = (clickData: any) => {
        console.log(clickData);
        // 根据点击的按钮选项执行相应的操作
        if (clickData.dataIndex === 1) {
          // 处理按钮1的点击操作
          // ...
          alert('button1');
        } else if (clickData.dataIndex === 2) {
          // 处理按钮2的点击操作
          // ...
          alert('button2');
        }
        if (clickData.seriesIndex === 1) {
          // 处理按钮3的点击操作
          // ...
          alert('自认值');
        }

        // 切换按钮的显示和隐藏
        // visible.value = !visible.value;
      };

      return {
        visible,
        serialClicked,
        refHeatmapChartCom,
        meData,
        groupData,
        xAxisData,
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
