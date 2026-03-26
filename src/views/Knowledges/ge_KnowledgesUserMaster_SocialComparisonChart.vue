<template>
  <div id="divLayout" ref="refDivLayout">
    <div style="height: 300px">
      <HeatmapChart_SocialCompCom
        ref="refBarSocialCompChartCom"
        :my-title="chartTitle"
        :meData="meData"
        :groupData="groupData"
        :xAxisData="xAxisData"
        @serial-clicked="serialClicked"
      ></HeatmapChart_SocialCompCom>
    </div>

    <!-- <input type="hidden" v-model="hidyAxisData" id="hidyAxisData" /> -->
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { Ref, defineComponent, onMounted, ref } from 'vue';

  import HeatmapChart_SocialCompCom from '@/ts/components/HeatmapChart_SocialComp.vue';
  import { Format } from '@/ts/PubFun/clsString';

  import { useUserStore } from '@/store/modulesShare/user';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

  import { cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache } from 'share-stu-study-base-lib';
  import { ge_KnowledgesUserMaster_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesUserMasterWApi';
  import { cc_KnowledgeModulesEx_GetKeyIdByKnowledgeModuleName } from 'share-stu-study-base-lib';
  import { ge_KnowledgesClsMaster_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesClsMasterWApi';
  import { clsge_KnowledgesClsMasterEN } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesClsMasterEN';
  import { clsSocialCompare } from '@/ts/FunClass/clsSocialCompare';
  export default defineComponent({
    name: 'GeKnowledgesUserMaster_SocialComparisonChart',
    components: {
      // 组件注册
      HeatmapChart_SocialCompCom,
    },
    setup() {
      const userStore = useUserStore();
      const hidyAxisData = ref('');
      const strUserName = userStore.getUserName;
      const refBarSocialCompChartCom = ref();
      let arryAxisData: Array<string> = [];

      const chartTitle = ref('条形图');

      const meData = ref<Array<number>>([11, 22]);
      const groupData = ref<Array<number>>([11, 22]);
      const compareData = ref<Array<number>>([11, 22]);
      const xAxisData = ref<Array<string>>(['AA', 'BB']);

      onMounted(async () => {});
      async function showRadar() {
        const arrSocialCompare = await getSocialCompareLst();
        const bolIsSuccess = await getChartData(arrSocialCompare);
        console.log('in showRadar');
      }

      async function getChartData(arrSocialCompare: Array<clsSocialCompare>): Promise<boolean> {
        //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
        //例如 1 = 1 && UserName = '张三'

        try {
          chartTitle.value = `[${strUserName}]知识点社会比较热力图`;
          meData.value = arrSocialCompare.map((x) => x.meValue);
          groupData.value = arrSocialCompare.map((x) => x.socialValue);
          compareData.value = arrSocialCompare.map((x) => x.compareValue);
          xAxisData.value = arrSocialCompare.map((x) => x.courseKnowledgeName);
          console.log('meData.value:', meData.value);
          console.log('groupData.value:', groupData.value);
          console.log('compareData.value:', compareData.value);
          console.log('xAxisData.value:', xAxisData.value);
        } catch (objException) {
          const strMsg: string = Format(
            '(errid:WiTsCs0017)在组合查询条件(Combinege_KMLearningGoalsCondition)时出错!请联系管理员!{0}',
            objException,
          );
          throw strMsg;
        }
        return true;
      }

      async function getSocialCompareLst(): Promise<Array<clsSocialCompare>> {
        //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
        //例如 1 = 1 && UserName = '张三'
        let strWhereCond = ' 1 = 1 ';
        let strWhereCond_Social = ' 1 = 1 ';
        //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

        strWhereCond += Format(" and CourseId ='{0}'", clsPubLocalStorage.courseId);
        strWhereCond += Format(" and UserId ='{0}'", userStore.userId);
        strWhereCond_Social += ` and ${clsge_KnowledgesClsMasterEN.con_CourseId} ='${clsPubLocalStorage.courseId}'`;
        strWhereCond_Social += ` and ${clsge_KnowledgesClsMasterEN.con_IdCurrEduCls} ='${clsPubLocalStorage.idCurrEduCls}'`;
        const arrSocialCompare: Array<clsSocialCompare> = [];
        try {
          const arrge_KnowledgesClsMasterObjLst = await ge_KnowledgesClsMaster_GetObjLstAsync(
            strWhereCond_Social,
          );

          const arrge_KnowledgesUserMasterObjLst = await ge_KnowledgesUserMaster_GetObjLstAsync(
            strWhereCond,
          );
          const strUserName = await userStore.getUserName;
          chartTitle.value = `[${strUserName}]知识点模块条形图`;
          meData.value.splice(0, meData.value.length);

          for (const objInFor of arrge_KnowledgesUserMasterObjLst) {
            const objSocialCompare = new clsSocialCompare();
            const dblmasteryValue = objInFor.masteryValue ?? 0;
            objSocialCompare.meValue = Math.round(dblmasteryValue * 100);
            objSocialCompare.courseKnowledgeId = objInFor.courseKnowledgeId;
            const strCourseKnowledgeName =
              await cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache(
                objInFor.courseKnowledgeId,
                clsPubLocalStorage.courseId,
              );
            objSocialCompare.courseKnowledgeName = strCourseKnowledgeName;
            const objSocial = arrge_KnowledgesClsMasterObjLst.find(
              (x) => x.courseKnowledgeId == objInFor.courseKnowledgeId,
            );
            if (objSocial != null) {
              const dblmasteryValue1 = objSocial.masteryValue ?? 0;
              objSocialCompare.socialValue = Math.round(dblmasteryValue1 * 100);
              objSocialCompare.compareValue = Math.round(
                objSocialCompare.meValue - objSocialCompare.socialValue,
              );
            }
            arrSocialCompare.push(objSocialCompare);
          }

          console.log('arrSocialCompare:', arrSocialCompare);
          return arrSocialCompare;
        } catch (objException) {
          const strMsg: string = Format(
            '(errid:WiTsCs0017)在组合查询条件(Combinege_KMLearningGoalsCondition)时出错!请联系管理员!{0}',
            objException,
          );
          throw strMsg;
        }
        return arrSocialCompare;
      }

      const serialClicked = async (clickData: any) => {
        console.log('clickData:', clickData);

        // if (arryAxisData == null || arryAxisData.length) {
        //   arryAxisData = hidyAxisData.value.split(',');
        //   console.error('arryAxisData:(after split)', arryAxisData);
        // }
        console.error('xAxisData.value:', xAxisData.value, 'arryAxisData:', arryAxisData);
        console.log(arryAxisData[clickData.dataIndex]);
        const strKnowledgeModuleName = arryAxisData[clickData.dataIndex];
        if (strKnowledgeModuleName == null || strKnowledgeModuleName == '') return;
        const strKnowledgeModuleId = await cc_KnowledgeModulesEx_GetKeyIdByKnowledgeModuleName(
          strKnowledgeModuleName,
          clsPubLocalStorage.courseId,
        );
        // await getge_KnowledgesUserMasterLat(strKnowledgeModuleId);
        // 根据点击的按钮选项执行相应的操作
      };

      return {
        serialClicked,
        refBarSocialCompChartCom,
        meData,
        groupData,
        compareData,
        xAxisData,

        showRadar,
        chartTitle,

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
