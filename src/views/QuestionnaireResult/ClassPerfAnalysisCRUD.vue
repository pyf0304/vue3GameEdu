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
                id="lblIdCurrEduCls_q"
                name="lblIdCurrEduCls_q"
                class="col-form-label text-right"
                style="width: 90px"
                >教学班
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdCurrEduCls_q"
                v-model="idCurrEduCls_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrvCurrEduCls_Sim"
                  :key="index"
                  :value="item.idCurrEduCls"
                >
                  {{ item.eduClsName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblQuestionName_q"
                name="lblQuestionName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >题目名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtQuestionName_q"
                v-model="questionName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDifficultyLevelId_q"
                name="lblDifficultyLevelId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >难度
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDifficultyLevelId_q"
                v-model="difficultyLevelId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrge_DifficultyLevel"
                  :key="index"
                  :value="item.difficultyLevelId"
                >
                  {{ item.difficultyLevelName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblQuestionTypeId_q"
                name="lblQuestionTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >题型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQuestionTypeId_q"
                v-model="questionTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrQuestionType"
                  :key="index"
                  :value="item.questionTypeId"
                >
                  {{ item.questionTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
            <td class="text-left">
              <button
                id="btnQuery"
                name="btnQuery"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnQuery_Click"
                >查询</button
              >
            </td>
            <td class="text-left">
              <button
                id="btnExportExcel"
                name="btnExportExcel"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnExportExcel_Click"
                >导出Excel</button
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
            id="lblClassPerfAnalysisList"
            name="lblClassPerfAnalysisList"
            class="col-form-label text-info"
            style="width: 250px"
            >班级问题分析列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnDelete_Click"
            >删除</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <ClassPerfAnalysis_ListCom
        ref="refClassPerfAnalysis_List"
        :items="dataListClassPerfAnalysis"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </ClassPerfAnalysis_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortClassPerfAnalysisBy" type="hidden" />
    </div>
    <!--详细信息层-->
    <ClassPerfAnalysis_DetailCom ref="refClassPerfAnalysis_Detail"></ClassPerfAnalysis_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import {
    GetCheckedKeyLstsInDivObj,
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refClassPerfAnalysis_Detail,
    refClassPerfAnalysis_List,
    showErrorMessage,
    dataListClassPerfAnalysis,
    emptyRecNumInfo,
    CourseId_Session,
    IdSchool_Session,
    idSchool_q,
    courseId_q,
    idCurrEduCls_q,
    questionName_q,
    difficultyLevelId_q,
    questionTypeId_q,
  } from '@/views/QuestionnaireResult/ClassPerfAnalysisVueShare';
  import { clsClassPerfAnalysisEN } from '@/ts/L0Entity/QuestionnaireResult/clsClassPerfAnalysisEN';
  import ClassPerfAnalysis_DetailEx from '@/views/QuestionnaireResult/ClassPerfAnalysis_DetailEx';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import ClassPerfAnalysisCRUDEx from '@/views/QuestionnaireResult/ClassPerfAnalysisCRUDEx';
  import ClassPerfAnalysis_DetailCom from '@/views/QuestionnaireResult/ClassPerfAnalysis_Detail.vue';
  import ClassPerfAnalysis_ListCom from '@/views/QuestionnaireResult/ClassPerfAnalysis_List.vue';
  import { clsvCurrEduCls_SimEN } from 'share-stu-study-base-lib';
  import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
  import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { vCurrEduCls_Sim_GetArrvCurrEduCls_SimByCourseId } from 'share-stu-study-base-lib';
  import { ge_DifficultyLevel_GetArrge_DifficultyLevel } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
  import { QuestionTypeEx_GetDdlDataCacheEx } from '@/ts/L3ForWApiEx/SystemSet/clsQuestionTypeExWApi';
  export default defineComponent({
    name: 'ClassPerfAnalysisCRUD',
    components: {
      // 组件注册
      ClassPerfAnalysis_DetailCom,
      ClassPerfAnalysis_ListCom,
    },

    setup() {
      CourseId_Session.value = clsPubLocalStorage.courseId;
      IdSchool_Session.value = clsPrivateSessionStorage.idSchool;
      const objPage = ref<ClassPerfAnalysisCRUDEx>();
      const objPage_Detail = ref<ClassPerfAnalysis_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'ClassPerfAnalysisCRUD';

      const arrvCurrEduCls_Sim = ref<clsvCurrEduCls_SimEN_T[] | null>([]);
      const arrge_DifficultyLevel = ref<clsge_DifficultyLevelEN[] | null>([]);
      const arrQuestionType = ref<clsQuestionTypeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_ClassPerfAnalysis4Func(refDivList.value);
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsClassPerfAnalysisEN._CurrTabName;
      };

      /** 删除记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDelete_Click)
       **/
      const btnDelete_Click = async () => {
        const strThisFuncName = btnDelete_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
          if (arrKeyLsts.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyLsts.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord_KeyLst(arrKeyLsts);
          await objPage.value.BindGv_ClassPerfAnalysis4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnExportExcel_Click)
       **/
      const btnExportExcel_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        await objPage.value.ExportExcel_ClassPerfAnalysis4Func();
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrvCurrEduCls_Sim.value = await vCurrEduCls_Sim_GetArrvCurrEduCls_SimByCourseId(
          strCourseId,
        ); //查询区域
        idCurrEduCls_q.value = '0';

        arrge_DifficultyLevel.value = await ge_DifficultyLevel_GetArrge_DifficultyLevel(); //查询区域
        difficultyLevelId_q.value = '0';

        arrQuestionType.value = await QuestionTypeEx_GetDdlDataCacheEx(); //查询区域
        questionTypeId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('班级问题分析维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        ClassPerfAnalysisCRUDEx.vuebtn_Click = btn_Click;
        ClassPerfAnalysisCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new ClassPerfAnalysisCRUDEx();
        objPage.value.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;
          default:
            break;
        }
        ClassPerfAnalysisCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListClassPerfAnalysis,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refClassPerfAnalysis_Detail,
        refClassPerfAnalysis_List,
        idSchool_q,
        courseId_q,
        idCurrEduCls_q,
        questionName_q,
        difficultyLevelId_q,
        questionTypeId_q,
        arrvCurrEduCls_Sim,
        arrge_DifficultyLevel,
        arrQuestionType,
        btnQuery_Click,
        btnDelete_Click,
        btnExportExcel_Click,
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
        router.push({ name: 'editClassPerfAnalysis', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new ClassPerfAnalysisCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
