<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <label
                id="lblIdTeachingPlan_q"
                name="lblIdTeachingPlan_q"
                class="col-form-label text-right"
                style="width: 90px"
                >教案流水号
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdTeachingPlan_q"
                name="ddlIdTeachingPlan_q"
                v-model="idTeachingPlan_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrJxTeachingPlan"
                  :key="index"
                  :value="item.idTeachingPlan"
                >
                  {{ item.teachingPlanDesc }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblCourseKnowledgeId_q"
                name="lblCourseKnowledgeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseKnowledgeId_q"
                name="ddlCourseKnowledgeId_q"
                v-model="courseKnowledgeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrcc_CourseKnowledges"
                  :key="index"
                  :value="item.courseKnowledgeId"
                >
                  {{ item.knowledgeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblTeachingMethodId_q"
                name="lblTeachingMethodId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >教学方式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlTeachingMethodId_q"
                name="ddlTeachingMethodId_q"
                v-model="teachingMethodId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrTeachingMethods"
                  :key="index"
                  :value="item.teachingMethodId"
                >
                  {{ item.teachingMethodName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblAssessmentMethodId_q"
                name="lblAssessmentMethodId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >考核方式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlAssessmentMethodId_q"
                name="ddlAssessmentMethodId_q"
                v-model="assessmentMethodId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrAssessmentMethods"
                  :key="index"
                  :value="item.assessmentMethodId"
                >
                  {{ item.assessmentMethodName }}
                </option></select
              >
            </td>
          </tr>
        </tbody></table
      >
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblJxTeachPlanKnowledgeList"
            name="lblJxTeachPlanKnowledgeList"
            class="col-form-label text-info"
            style="width: 250px"
            >教学计划知识点列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            name="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Query', '')"
            >查询</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <JxTeachPlanKnowledge_ListCom
        :items="dataListJxTeachPlanKnowledge"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </JxTeachPlanKnowledge_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortJxTeachPlanKnowledgeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <JxTeachPlanKnowledge_EditCom ref="refJxTeachPlanKnowledge_Edit"></JxTeachPlanKnowledge_EditCom>
    <!--详细信息层-->
    <JxTeachPlanKnowledge_DetailCom
      ref="refJxTeachPlanKnowledge_Detail"
    ></JxTeachPlanKnowledge_DetailCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import router from '@/router';
  import { clsJxTeachPlanKnowledgeEN } from '@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeEN';
  import { clsJxTeachPlanKnowledgeENEx } from '@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeENEx';
  import { JxTeachPlanKnowledgeCRUDEx } from '@/views/TeachingPlan/JxTeachPlanKnowledgeCRUDEx';
  import { JxTeachPlanKnowledgeCRUD } from '@/viewsBase/TeachingPlan/JxTeachPlanKnowledgeCRUD';
  import JxTeachPlanKnowledge_EditCom from '@/views/TeachingPlan/JxTeachPlanKnowledge_Edit.vue';
  import JxTeachPlanKnowledge_DetailCom from '@/views/TeachingPlan/JxTeachPlanKnowledge_Detail.vue';
  import JxTeachPlanKnowledge_ListCom from '@/views/TeachingPlan/JxTeachPlanKnowledge_List.vue';
  import { JxTeachPlanKnowledge_Edit } from '@/viewsBase/TeachingPlan/JxTeachPlanKnowledge_Edit';
  import { JxTeachPlanKnowledge_Detail } from '@/viewsBase/TeachingPlan/JxTeachPlanKnowledge_Detail';
  import { clsJxTeachingPlanEN } from '@/ts/L0Entity/TeachingPlan/clsJxTeachingPlanEN';
  import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
  import { clsTeachingMethodsEN } from '@/ts/L0Entity/SysPara/clsTeachingMethodsEN';
  import { clsAssessmentMethodsEN } from '@/ts/L0Entity/SysPara/clsAssessmentMethodsEN';
  import {
    JxTeachingPlan_GetObjByIdTeachingPlanAsync,
    JxTeachingPlan_GetObjLstCache,
  } from '@/ts/L3ForWApi/TeachingPlan/clsJxTeachingPlanWApi';
  import { cc_CourseKnowledges_GetObjLstCache } from 'share-stu-study-base-lib';
  import { TeachingMethods_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsTeachingMethodsWApi';
  import { AssessmentMethods_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsAssessmentMethodsWApi';
  import { useRoute } from 'vue-router';
  import {
    refJxTeachPlanKnowledge_Detail,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refJxTeachPlanKnowledge_Edit,
  } from '@/views/TeachingPlan/JxTeachPlanKnowledgeVueShare';

  const objPageCRUD = ref<JxTeachPlanKnowledgeCRUD>();
  const ascOrDesc4SortFun = ref('Asc');
  const sortJxTeachPlanKnowledgeBy = ref('');
  const viewVarSet = reactive({
    objPageCRUD,
    ascOrDesc4SortFun,
    sortJxTeachPlanKnowledgeBy,
  });
  export { viewVarSet };

  const CourseIdStatic = ref(''); //6、定义下拉框条件变量1
  const IdTeachingPlanStatic = ref(''); //6、定义下拉框条件变量1

  const idTeachingPlan_q = ref('0');
  const courseKnowledgeId_q = ref('0');
  const teachingMethodId_q = ref('0');
  const assessmentMethodId_q = ref('0');
  const qryVarSet = reactive({
    idTeachingPlan_q,
    courseKnowledgeId_q,
    teachingMethodId_q,
    assessmentMethodId_q,
  });
  export { qryVarSet };

  export let CombineJxTeachPlanKnowledgeCondition: () => Promise<string>;
  export let CombineJxTeachPlanKnowledgeConditionObj: () => Promise<clsJxTeachPlanKnowledgeEN>;
  export let CombineJxTeachPlanKnowledgeConditionObj4ExportExcel: () => Promise<clsJxTeachPlanKnowledgeEN>;
  export let BindTabByList: (
    arrObjLst: Array<clsJxTeachPlanKnowledgeENEx>,
    bolIsShowErrMsg: boolean,
  ) => Promise<void>;

  export default defineComponent({
    name: 'JxTeachPlanKnowledgeCRUD',
    components: {
      // 组件注册
      JxTeachPlanKnowledge_EditCom,
      JxTeachPlanKnowledge_DetailCom,
      JxTeachPlanKnowledge_ListCom,
    },

    setup() {
      const route = useRoute(); // 获取当前路由信息
      if (typeof route.params.idTeachingPlan === 'string') {
        IdTeachingPlanStatic.value = route.params.idTeachingPlan;

        // clsPrivateSessionStorage.viewId = viewId.value;
      }
      const showErrorMessage = ref(false);
      const dataListJxTeachPlanKnowledge = ref<Array<clsJxTeachPlanKnowledgeENEx>>([]);
      const emptyRecNumInfo = ref('');

      const arrJxTeachingPlan = ref<clsJxTeachingPlanEN[]>([]);
      const arrcc_CourseKnowledges = ref<clscc_CourseKnowledgesEN_T[]>([]);
      const arrTeachingMethods = ref<clsTeachingMethodsEN[]>([]);
      const arrAssessmentMethods = ref<clsAssessmentMethodsEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrJxTeachingPlan() {
        const arrObjLstSel = await JxTeachingPlan_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrJxTeachingPlan.value.length = 0;
        const obj0 = new clsJxTeachingPlanEN();
        obj0.idTeachingPlan = '0';
        obj0.teachingPlanDesc = '请选择教学计划...';
        arrJxTeachingPlan.value.push(obj0);
        arrObjLstSel.forEach((x) => arrJxTeachingPlan.value.push(x));
        idTeachingPlan_q.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
   * @param objDDL:需要绑定当前表的下拉框
  
   * @param strCourseId:
  */
      async function getArrcc_CourseKnowledges(strCourseId: string) {
        let arrObjLstSel = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
        if (arrObjLstSel == null) return;
        arrcc_CourseKnowledges.value.length = 0;
        const obj0 = new clscc_CourseKnowledgesEN();
        obj0.courseKnowledgeId = '0';
        obj0.knowledgeName = '请选择知识点...';
        arrcc_CourseKnowledges.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.courseId == strCourseId);
        arrObjLstSel.forEach((x) => arrcc_CourseKnowledges.value.push(x));
        courseKnowledgeId_q.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrTeachingMethods() {
        const arrObjLstSel = await TeachingMethods_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrTeachingMethods.value.length = 0;
        const obj0 = new clsTeachingMethodsEN();
        obj0.teachingMethodId = '0';
        obj0.teachingMethodName = '请选择教学方式...';
        arrTeachingMethods.value.push(obj0);
        arrObjLstSel.forEach((x) => arrTeachingMethods.value.push(x));
        teachingMethodId_q.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrAssessmentMethods() {
        const arrObjLstSel = await AssessmentMethods_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrAssessmentMethods.value.length = 0;
        const obj0 = new clsAssessmentMethodsEN();
        obj0.assessmentMethodId = '0';
        obj0.assessmentMethodName = '请选择考核方式...';
        arrAssessmentMethods.value.push(obj0);
        arrObjLstSel.forEach((x) => arrAssessmentMethods.value.push(x));
        assessmentMethodId_q.value = '0';
      }

      /**
       * 通过List组件来绑定表数据
       */
      BindTabByList = async (
        arrObjLst: Array<clsJxTeachPlanKnowledgeENEx>,
        bolIsShowErrMsg: boolean,
      ): Promise<void> => {
        dataListJxTeachPlanKnowledge.value = arrObjLst;
        showErrorMessage.value = bolIsShowErrMsg;
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegionInDiv)
       **/
      async function BindDdl4QryRegionInDiv() {
        const strCourseIdStatic = CourseIdStatic.value; //静态变量;//静态变量

        await getArrJxTeachingPlan(); //查询区域

        await getArrcc_CourseKnowledges(strCourseIdStatic); //查询区域

        await getArrTeachingMethods(); //查询区域

        await getArrAssessmentMethods(); //查询区域
      }

      const strTitle = ref('教学计划知识点维护');

      onMounted(async () => {
        const objJxTeachingPlan = await JxTeachingPlan_GetObjByIdTeachingPlanAsync(
          IdTeachingPlanStatic.value,
        );
        if (objJxTeachingPlan != null) {
          CourseIdStatic.value = objJxTeachingPlan.courseId;
        }
        BindDdl4QryRegionInDiv();
        JxTeachPlanKnowledgeCRUDEx.vuebtn_Click = btn_Click;
        JxTeachPlanKnowledgeCRUDEx.GetPropValue = GetPropValue;
        const objPage = new JxTeachPlanKnowledgeCRUDEx();
        objPage.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }

      /** 把所有的查询控件内容组合成一个条件串
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_vue_ts_setup_fun_CombineConditionObj)
       * @returns 条件串(strWhereCond)
       **/
      CombineJxTeachPlanKnowledgeConditionObj = async (): Promise<clsJxTeachPlanKnowledgeEN> => {
        //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
        //例如 1 = 1 && UserName = '张三'
        let strWhereCond = ' 1 = 1 ';
        const objJxTeachPlanKnowledgeCond = new clsJxTeachPlanKnowledgeEN();
        //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
        try {
          if (idTeachingPlan_q.value != '' && idTeachingPlan_q.value != '0') {
            strWhereCond += Format(
              " And {0} = '{1}'",
              clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan,
              idTeachingPlan_q.value,
            );
            objJxTeachPlanKnowledgeCond.SetCondFldValue(
              clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan,
              idTeachingPlan_q.value,
              '=',
            );
          }
          if (courseKnowledgeId_q.value != '' && courseKnowledgeId_q.value != '0') {
            strWhereCond += Format(
              " And {0} = '{1}'",
              clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId,
              courseKnowledgeId_q.value,
            );
            objJxTeachPlanKnowledgeCond.SetCondFldValue(
              clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId,
              courseKnowledgeId_q.value,
              '=',
            );
          }
          if (teachingMethodId_q.value != '' && teachingMethodId_q.value != '0') {
            strWhereCond += Format(
              " And {0} = '{1}'",
              clsJxTeachPlanKnowledgeEN.con_TeachingMethodId,
              teachingMethodId_q.value,
            );
            objJxTeachPlanKnowledgeCond.SetCondFldValue(
              clsJxTeachPlanKnowledgeEN.con_TeachingMethodId,
              teachingMethodId_q.value,
              '=',
            );
          }
          if (assessmentMethodId_q.value != '' && assessmentMethodId_q.value != '0') {
            strWhereCond += Format(
              " And {0} = '{1}'",
              clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId,
              assessmentMethodId_q.value,
            );
            objJxTeachPlanKnowledgeCond.SetCondFldValue(
              clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId,
              assessmentMethodId_q.value,
              '=',
            );
          }
        } catch (objException) {
          const strMsg: string = Format(
            '在组合查询条件对象(CombineJxTeachPlanKnowledgeConditionObj)时出错!请联系管理员!{0}',
            objException,
          );
          throw strMsg;
        }
        objJxTeachPlanKnowledgeCond.whereCond = strWhereCond;
        return objJxTeachPlanKnowledgeCond;
      };

      /** 把所有的查询控件内容组合成一个条件串
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_vue_ts_setup_fun_CombineCondition)
       * @returns 条件串(strWhereCond)
       **/
      CombineJxTeachPlanKnowledgeCondition = async (): Promise<string> => {
        //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
        //例如 1 = 1 && UserName = '张三'
        let strWhereCond = ' 1 = 1 ';
        //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

        try {
          if (idTeachingPlan_q.value != '' && idTeachingPlan_q.value != '0') {
            strWhereCond += Format(
              " And {0} = '{1}'",
              clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan,
              idTeachingPlan_q.value,
            );
          }
          if (courseKnowledgeId_q.value != '' && courseKnowledgeId_q.value != '0') {
            strWhereCond += Format(
              " And {0} = '{1}'",
              clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId,
              courseKnowledgeId_q.value,
            );
          }
          if (teachingMethodId_q.value != '' && teachingMethodId_q.value != '0') {
            strWhereCond += Format(
              " And {0} = '{1}'",
              clsJxTeachPlanKnowledgeEN.con_TeachingMethodId,
              teachingMethodId_q.value,
            );
          }
          if (assessmentMethodId_q.value != '' && assessmentMethodId_q.value != '0') {
            strWhereCond += Format(
              " And {0} = '{1}'",
              clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId,
              assessmentMethodId_q.value,
            );
          }
        } catch (objException) {
          const strMsg: string = Format(
            '在组合查询条件(CombineJxTeachPlanKnowledgeCondition)时出错!请联系管理员!{0}',
            objException,
          );
          throw strMsg;
        }
        return strWhereCond;
      };

      /** 把所有的查询控件内容组合成一个条件串
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
       * @returns 条件串(strWhereCond)
       **/
      CombineJxTeachPlanKnowledgeConditionObj4ExportExcel =
        async (): Promise<clsJxTeachPlanKnowledgeEN> => {
          //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
          //例如 1 = 1 && UserName = '张三'
          let strWhereCond = ' 1 = 1 ';
          const objJxTeachPlanKnowledgeCond = new clsJxTeachPlanKnowledgeENEx();
          //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
          try {
            if (idTeachingPlan_q.value != '' && idTeachingPlan_q.value != '0') {
              strWhereCond += Format(
                " And {0} = '{1}'",
                clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan,
                idTeachingPlan_q.value,
              );
              objJxTeachPlanKnowledgeCond.SetCondFldValue(
                clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan,
                idTeachingPlan_q.value,
                '=',
              );
            }
            if (courseKnowledgeId_q.value != '' && courseKnowledgeId_q.value != '0') {
              strWhereCond += Format(
                " And {0} = '{1}'",
                clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId,
                courseKnowledgeId_q.value,
              );
              objJxTeachPlanKnowledgeCond.SetCondFldValue(
                clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId,
                courseKnowledgeId_q.value,
                '=',
              );
            }
            if (teachingMethodId_q.value != '' && teachingMethodId_q.value != '0') {
              strWhereCond += Format(
                " And {0} = '{1}'",
                clsJxTeachPlanKnowledgeEN.con_TeachingMethodId,
                teachingMethodId_q.value,
              );
              objJxTeachPlanKnowledgeCond.SetCondFldValue(
                clsJxTeachPlanKnowledgeEN.con_TeachingMethodId,
                teachingMethodId_q.value,
                '=',
              );
            }
            if (assessmentMethodId_q.value != '' && assessmentMethodId_q.value != '0') {
              strWhereCond += Format(
                " And {0} = '{1}'",
                clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId,
                assessmentMethodId_q.value,
              );
              objJxTeachPlanKnowledgeCond.SetCondFldValue(
                clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId,
                assessmentMethodId_q.value,
                '=',
              );
            }
          } catch (objException) {
            const strMsg: string = Format(
              '在组合导出Excel条件对象(CombineJxTeachPlanKnowledgeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
              objException,
            );
            throw strMsg;
          }
          objJxTeachPlanKnowledgeCond.whereCond = strWhereCond;
          return objJxTeachPlanKnowledgeCond;
        };
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        JxTeachPlanKnowledgeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListJxTeachPlanKnowledge,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        refJxTeachPlanKnowledge_Edit,
        refJxTeachPlanKnowledge_Detail,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        idTeachingPlan_q,
        courseKnowledgeId_q,
        teachingMethodId_q,
        assessmentMethodId_q,
        arrJxTeachingPlan,
        arrcc_CourseKnowledges,
        arrTeachingMethods,
        arrAssessmentMethods,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editJxTeachPlanKnowledge', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new JxTeachPlanKnowledgeCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
