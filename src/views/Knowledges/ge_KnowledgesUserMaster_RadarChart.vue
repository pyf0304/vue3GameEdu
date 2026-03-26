<template>
  <div id="divLayout" ref="refDivLayout" class="container">
    <!-- <button @click="showRadar"> 显示雷达图</button> -->
    <div class="row">
      <div style="height: 300px" class="col-sm-6">
        <!-- <span>条形图</span> -->
        <BarChartCom
          ref="refBarChartCom"
          :my-title="chartTitle"
          :curr-data="currData"
          :perceived-data="perceivedData"
          :goal-data="goalData"
          :yAxisData="yAxisData"
          @serial-clicked="serialClicked"
        ></BarChartCom>
      </div>
      <div style="height: 300px" class="col-sm-6">
        <!-- <span>雷达图</span> -->
        <SpiderChartCom
          ref="refSpiderChart"
          :my-title="radar_chartTitle"
          :indicator="radar_indicator"
          :curr-data="radar_currData"
          :perceived-data="radar_perceivedData"
          :goal-data="radar_goalData"
        ></SpiderChartCom>
      </div>
    </div>
    <!-- <input type="hidden" v-model="hidyAxisData" id="hidyAxisData" /> -->
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { Ref, defineComponent, onMounted, ref } from 'vue';

  import SpiderChartCom from '@/ts/components/SpiderChartV4.vue';
  import BarChartCom from '@/ts/components/BarChartV3.vue';
  import { Format } from '@/ts/PubFun/clsString';

  import { useUserStore } from '@/store/modulesShare/user';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { ge_KMLearningGoals_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clsge_KMLearningGoalsWApi';

  import { usecc_KnowledgeModulesStore } from '@/store/modulesShare/cc_KnowledgeModules';

  import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
  import { cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache } from 'share-stu-study-base-lib';
  import { ge_KnowledgesUserMaster_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesUserMasterWApi';
  import { cc_KnowledgeModulesEx_GetKeyIdByKnowledgeModuleName } from 'share-stu-study-base-lib';
  export default defineComponent({
    name: 'GeKnowledgesUserMaster_RadarChart',
    components: {
      // 组件注册
      BarChartCom,
      SpiderChartCom,
    },
    setup() {
      const cc_KnowledgeModulesStore = usecc_KnowledgeModulesStore();
      const userStore = useUserStore();
      const hidyAxisData = ref('');
      const strUserName = userStore.getUserName;
      const refBarChartCom = ref();
      let arryAxisData: Array<string> = [];

      const chartTitle = ref('条形图');

      const currData = ref<Array<number>>([11, 22]);
      const perceivedData = ref<Array<number>>([11, 22]);
      const goalData = ref<Array<number>>([11, 22]);
      const yAxisData = ref<Array<string>>(['AA', 'BB']);

      const visible = ref(false);

      const refSpiderChart = ref();
      // const indicator = ref < Array as PropType<{ name: string }[]>) > ([{ name: '计算机软件' }]);
      const radar_chartTitle = ref('雷达图');

      const radar_indicator: Ref<{ name: string }[]> = ref([{ name: '计算机软件' }]);
      const radar_currData = ref<Array<number>>([11, 22]);
      const radar_perceivedData = ref<Array<number>>([11, 22]);
      const radar_goalData = ref<Array<number>>([11, 22]);

      onMounted(async () => {});
      async function showRadar() {
        await get_KMLearningGoalsLst();
        console.log('in showRadar');
        // currData.value = [80, 60, 55, 87, 45];
        // perceivedData.value = [82, 69, 60, 90, 55];
        // goalData.value = [88, 67, 80, 90, 60];
        // yAxisData.value = ['计算机软件', '计算机组成', '二进制', '数字编码', '文件夹'];
        // radar_indicator.value = [
        //   { name: '计算机软件' },
        //   { name: '计算机组成' },
        //   { name: '二进制' },
        //   { name: '数字编码' },
        //   { name: '文件夹' },
        // ];
        // radar_currData.value = [80, 60, 55, 87, 45];
        // radar_perceivedData.value = [82, 69, 60, 90, 55];
        // radar_goalData.value = [88, 67, 80, 90, 60];
      }
      async function get_KMLearningGoalsLst(): Promise<boolean> {
        //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
        //例如 1 = 1 && UserName = '张三'
        let strWhereCond = ' 1 = 1 ';
        //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

        strWhereCond += Format(" and CourseId ='{0}'", clsPubLocalStorage.courseId);
        strWhereCond += Format(" and UserId ='{0}'", userStore.userId);
        try {
          const arrge_KMLearningGoalsExObjLst = await ge_KMLearningGoals_GetObjLstAsync(
            strWhereCond,
          );
          const strUserName = await userStore.getUserName;
          chartTitle.value = `[${strUserName}]知识点模块条形图`;
          currData.value.splice(0, currData.value.length);
          perceivedData.value.splice(0, perceivedData.value.length);
          goalData.value.splice(0, goalData.value.length);
          yAxisData.value.splice(0, yAxisData.value.length);
          const arrCurrData: Array<number> = [];
          const arrPerceivedData: Array<number> = [];
          const arrgoalData: Array<number> = [];
          // const arryAxisData: Array<string> = [];
          for (const objInFor of arrge_KMLearningGoalsExObjLst) {
            const dblmasteryValue = objInFor.masteryValue ?? 0;
            arrCurrData.push(dblmasteryValue * 100);
            const dblselfPerceivedValue = objInFor.selfPerceivedValue ?? 0;
            arrPerceivedData.push(dblselfPerceivedValue * 100);
            const dblgoalValue = objInFor.goalValue ?? 0;
            arrgoalData.push(dblgoalValue * 100);
            const strModuleName = await cc_KnowledgeModulesStore.getKnowledgeModuleName(
              objInFor.knowledgeModuleId,
            );
            arryAxisData.push(strModuleName);
          }
          hidyAxisData.value = arryAxisData.join(',');
          currData.value = arrCurrData.map((x) => {
            if (x > 0) return x;
            else return x + 1;
          });
          perceivedData.value = arrPerceivedData.map((x) => {
            if (x > 0) return x;
            else return x + 1;
          });
          goalData.value = arrgoalData.map((x) => {
            if (x > 0) return x;
            else return x + 1;
          });
          yAxisData.value = arryAxisData;
          console.log('currData.value:', currData.value);
          console.log('perceivedData.value:', perceivedData.value);
          console.log('goalData.value:', goalData.value);
          console.log('yAxisData.value:', yAxisData.value);
        } catch (objException) {
          const strMsg: string = Format(
            '(errid:WiTsCs0017)在组合查询条件(Combinege_KMLearningGoalsCondition)时出错!请联系管理员!{0}',
            objException,
          );
          throw strMsg;
        }
        return true;
      }

      async function getge_KnowledgesUserMasterLat(strKnowledgeModuleId: string): Promise<boolean> {
        //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
        //例如 1 = 1 && UserName = '张三'
        let strWhereCond = ' 1 = 1 ';
        //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

        strWhereCond += Format(" and CourseId ='{0}'", clsPubLocalStorage.courseId);
        strWhereCond += Format(" and UserId ='{0}'", userStore.userId);
        strWhereCond += ` and CourseKnowledgeId in
          (select CourseKnowledgeId from ${(clscc_CourseKnowledgesEN as any)._CurrTabName}
          where ${clscc_CourseKnowledgesEN.con_KnowledgeModuleId} = '${strKnowledgeModuleId}')`;

        try {
          const arrge_KnowledgesUserMasterObjLst = await ge_KnowledgesUserMaster_GetObjLstAsync(
            strWhereCond,
          );
          const strModuleName = await cc_KnowledgeModulesStore.getKnowledgeModuleName(
            strKnowledgeModuleId,
          );

          //radar_chartTitle.value = `[${strUserName}]-${strModuleName}模块-知识点雷达图`;
          radar_chartTitle.value = `${strModuleName}-知识点雷达图`;

          const arrCurrData: Array<number> = [];
          const arrPerceivedData: Array<number> = [];
          const arrgoalData: Array<number> = [];
          // const arryAxisData: Array<string> = [];
          const arrradar_indicator: { name: string }[] = [];
          for (const objInFor of arrge_KnowledgesUserMasterObjLst) {
            const dblmasteryValue = objInFor.masteryValue ?? 0;
            arrCurrData.push(Math.round(dblmasteryValue * 100));
            const dblselfPerceivedValue = objInFor.selfPerceivedValue ?? 0;
            arrPerceivedData.push(Math.round(dblselfPerceivedValue * 100));
            const dblgoalValue = objInFor.goalValue ?? 0;
            arrgoalData.push(Math.round(dblgoalValue * 100));
            const strModuleName = await cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache(
              objInFor.courseKnowledgeId,
              clsPubLocalStorage.courseId,
            );
            arrradar_indicator.push({ name: strModuleName });
          }
          radar_currData.value = arrCurrData.map((x) => {
            if (x > 0) return x;
            else return x + 1;
          });
          radar_perceivedData.value = arrPerceivedData.map((x) => {
            if (x > 0) return x;
            else return x + 1;
          });
          radar_goalData.value = arrgoalData.map((x) => {
            if (x > 0) return x;
            else return x + 1;
          });
          radar_indicator.value = arrradar_indicator;
          console.log('radar_currData.value:', radar_currData.value);
          console.log('radar_perceivedData.value:', radar_perceivedData.value);
          console.log('radar_goalData.value:', radar_goalData.value);
          console.log('radar_indicator.value:', radar_indicator.value);
        } catch (objException) {
          const strMsg: string = Format(
            '(errid:WiTsCs0017)在组合查询条件(Combinege_KnowledgesUserMasterCondition)时出错!请联系管理员!{0}',
            objException,
          );
          throw strMsg;
        }
        return true;
      }
      const serialClicked = async (clickData: any) => {
        console.log('clickData:', clickData);

        // if (arryAxisData == null || arryAxisData.length) {
        //   arryAxisData = hidyAxisData.value.split(',');
        //   console.error('arryAxisData:(after split)', arryAxisData);
        // }
        console.error('yAxisData.value:', yAxisData.value, 'arryAxisData:', arryAxisData);
        console.log(arryAxisData[clickData.dataIndex]);
        const strKnowledgeModuleName = arryAxisData[clickData.dataIndex];
        if (strKnowledgeModuleName == null || strKnowledgeModuleName == '') return;
        const strKnowledgeModuleId = await cc_KnowledgeModulesEx_GetKeyIdByKnowledgeModuleName(
          strKnowledgeModuleName,
          clsPubLocalStorage.courseId,
        );
        await getge_KnowledgesUserMasterLat(strKnowledgeModuleId);
        // 根据点击的按钮选项执行相应的操作
        // if (clickData.dataIndex === 1) {
        //   // 处理按钮1的点击操作
        //   // ...
        //   alert('button1');
        // } else if (clickData.dataIndex === 2) {
        //   // 处理按钮2的点击操作
        //   // ...
        //   alert('button2');
        // }
        // if (clickData.seriesIndex === 1) {
        //   // 处理按钮3的点击操作
        //   // ...
        //   alert('自认值');
        // }

        // 切换按钮的显示和隐藏
        // visible.value = !visible.value;
      };

      return {
        visible,
        serialClicked,
        refBarChartCom,
        currData,
        perceivedData,
        goalData,
        yAxisData,
        refSpiderChart,
        radar_indicator,
        radar_currData,
        radar_perceivedData,
        radar_goalData,
        showRadar,
        chartTitle,
        radar_chartTitle,
        hidyAxisData,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
