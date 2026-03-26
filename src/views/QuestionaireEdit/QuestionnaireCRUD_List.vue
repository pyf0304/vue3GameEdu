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
            <td class="text-left">
              <input
                id="txtQuestionName_q"
                v-model="questionName_q"
                placeholder="请输入题目名称"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <select
                id="ddlCourseChapterId_q"
                v-model="courseChapterId_q"
                title="课程章节"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrcc_CourseChapter"
                  :key="index"
                  :value="item.courseChapterId"
                >
                  {{ item.courseChapterName }}
                </option></select
              >
            </td>

            <td class="text-left">
              <select
                id="ddlQuestionTypeId_q"
                v-model="questionTypeId_q"
                placeholder="请输入题目类型"
                class="form-control form-control-sm"
                style="width: 80px"
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

            <td class="text-left">
              <select
                id="ddlDifficultyLevelId_q"
                v-model="difficultyLevelId_q"
                title="难度等级"
                class="form-control form-control-sm"
                style="width: 80px"
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

            <td class="text-left">
              <select
                id="ddlLevelModeTypeId_q"
                v-model="levelModeTypeId_q"
                title="关卡模式"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrge_LevelModeType"
                  :key="index"
                  :value="item.levelModeTypeId"
                >
                  {{ item.levelModeTypeName }}
                </option></select
              >
            </td>

            <td class="text-left">
              <select
                id="ddlIsTest_q"
                v-model="isTest_q"
                title="是否测试"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择是/否测试</option>
                <option value="true">是-测试</option>
                <option value="false">否-不测试</option></select
              >
            </td>
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
            id="lblQuestionnaireList"
            name="lblQuestionnaireList"
            class="col-form-label text-info"
            style="width: 250px"
            >题目列表
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
        <li class="nav-item ml-3">
          <button
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClone_Click"
            >复制</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnKnowledgesExamLibRela"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnKnowledgesExamLibRela_Click"
            >设置知识点</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example"> </div>
        </li>
      </ul>
    </div>
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
    </div>
    <cc_KnowledgesExamLibRelaCRUDCom
      ref="refcc_KnowledgesExamLibRelaCRUD"
      :question-id="questionId"
      :courseChapterId="courseChapterId"
      :content-type-id="'0001'"
      :paras="'isDialog=true'"
      @on-finish-set-knowledge="FinishSetKnowledge"
    ></cc_KnowledgesExamLibRelaCRUDCom>
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
  import {
    GetCheckedKeyIdsInDivObj,
    SetCheckedItem4KeyIdInDiv,
    GetDivObjInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    CourseId_Session,
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQuestionnaire_List,
    showErrorMessage,
    dataListQuestionnaire,
    emptyRecNumInfo,
    questionName_q,
    courseChapterId_q,
    questionTypeId_q,
    difficultyLevelId_q,
    levelModeTypeId_q,
    isTest_q,
    courseId_q,
    courseId_f,
  } from '@/views/QuestionaireEdit/QuestionnaireCRUD_ListVueShare';
  import {
    Questionnaire_UpMoveAsync,
    Questionnaire_GoTopAsync,
    Questionnaire_GoBottomAsync,
    Questionnaire_ReOrderAsync,
  } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
  import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
  import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
  import { QuestionnaireCRUD_ListEx } from '@/views/QuestionaireEdit/QuestionnaireCRUD_ListEx';
  import Questionnaire_ListCom from '@/views/QuestionaireEdit/Questionnaire_List.vue';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
  import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
  import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
  import { cc_CourseChapter_GetArrcc_CourseChapterByCourseId } from 'share-stu-study-base-lib';
  import { ge_DifficultyLevel_GetArrge_DifficultyLevel } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
  import { ge_LevelModeType_GetArrge_LevelModeType } from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
  import { QuestionTypeEx_GetDdlDataCacheEx } from '@/ts/L3ForWApiEx/SystemSet/clsQuestionTypeExWApi';
  import { QuestionnaireEx_DelRecordEx } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionnaireExWApi';
  import cc_KnowledgesExamLibRelaCRUDCom from '@/views/Knowledges/cc_KnowledgesExamLibRelaCRUDDialog.vue';
  import { cc_KnowledgesExamLibRela_ReFreshCache } from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi';

  export default defineComponent({
    name: 'QuestionnaireCRUD_List',
    components: {
      // 组件注册
      Questionnaire_ListCom,
      cc_KnowledgesExamLibRelaCRUDCom,
    },

    setup() {
      CourseId_Session.value = clsPubLocalStorage.courseId;
      const questionId = ref(0);
      const courseChapterId = ref('');
      const objPage = ref<QuestionnaireCRUD_ListEx>();
      const opType = ref('');
      const thisConstructorName = 'QuestionnaireCRUD_List';
      const refcc_KnowledgesExamLibRelaCRUD = ref();
      const arrcc_CourseChapter = ref<clscc_CourseChapterEN_T[] | null>([]);
      const arrQuestionType = ref<clsQuestionTypeEN[] | null>([]);
      const arrge_DifficultyLevel = ref<clsge_DifficultyLevelEN[] | null>([]);
      const arrge_LevelModeType = ref<clsge_LevelModeTypeEN[] | null>([]);
      const FinishSetKnowledge = async (para: any) => {
        console.log(para);
        cc_KnowledgesExamLibRela_ReFreshCache(CourseId_Session.value);
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        await objPage.value.BindGv_Questionnaire4Func(divVarSet.refDivList);
      };
      /**
       * 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCopyRecord_Click)
       **/
      const btnClone_Click = async () => {
        const strThisFuncName = btnClone_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要克隆的${thisTabName}记录!`);
            return '';
          }
          await objPage.value.CopyRecord(arrKeyIds);
          await objPage.value.BindGv_Questionnaire4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `复制记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /**
       * 上移
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpMove_Click)
       **/
      const btnUpMove_Click = async () => {
        const strThisFuncName = btnUpMove_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCourseId = CourseId_Session.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要上移的${thisTabName}记录!`);
          return;
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            courseid: strCourseId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await Questionnaire_UpMoveAsync(objOrderByData);
          //Questionnaire_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `上移记录出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_Questionnaire4Func(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /** 置顶
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnGoTop_Click)
       **/
      const btnGoTop_Click = async () => {
        const strThisFuncName = btnGoTop_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCourseId = CourseId_Session.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要置顶的${thisTabName}记录!`);
          return '';
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            courseid: strCourseId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await Questionnaire_GoTopAsync(objOrderByData);
          //Questionnaire_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `置顶出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_Questionnaire4Func(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /**
       * 置底
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnGoBottum_Click)
       **/
      const btnGoBottum_Click = async () => {
        const strThisFuncName = btnGoBottum_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCourseId = CourseId_Session.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要置底的${thisTabName}记录!`);
          return '';
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            courseid: strCourseId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await Questionnaire_GoBottomAsync(objOrderByData);
          //Questionnaire_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `置底出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_Questionnaire4Func(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /**
       * 重序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnReOrder_Click)
       **/
      const btnReOrder_Click = async () => {
        const strThisFuncName = btnReOrder_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCourseId = CourseId_Session.value;
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          const jsonObject = {
            courseid: strCourseId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await Questionnaire_ReOrderAsync(objOrderByData);
          //Questionnaire_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `重序出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_Questionnaire4Func(divVarSet.refDivList);
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_Questionnaire4Func(refDivList.value);
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsQuestionnaireEN._CurrTabName;
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
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyIds.length) == false) {
            return;
          }
          for (const strKeyId of arrKeyIds) {
            await QuestionnaireEx_DelRecordEx(Number(strKeyId));
          }
          // await objPage.value.DelMultiRecord(arrKeyIds);
          await objPage.value.BindGv_Questionnaire4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrcc_CourseChapter.value = await cc_CourseChapter_GetArrcc_CourseChapterByCourseId(
          strCourseId,
        ); //查询区域
        courseChapterId_q.value = '0';
        arrQuestionType.value = await QuestionTypeEx_GetDdlDataCacheEx(); //查询区域
        questionTypeId_q.value = '0';

        arrge_DifficultyLevel.value = await ge_DifficultyLevel_GetArrge_DifficultyLevel(); //查询区域
        difficultyLevelId_q.value = '0';
        arrge_LevelModeType.value = await ge_LevelModeType_GetArrge_LevelModeType(); //查询区域
        levelModeTypeId_q.value = '0';
        // BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlIsTest_q');
        isTest_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('题目维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        QuestionnaireCRUD_ListEx.vuebtn_Click = btn_Click;
        QuestionnaireCRUD_ListEx.GetPropValue = GetPropValue;
        objPage.value = new QuestionnaireCRUD_ListEx();
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
      const btnExportExcel_Click = () => {};
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          default:
            break;
        }
        QuestionnaireCRUD_ListEx.btn_Click(strCommandName, strKeyId);
      }
      //问题知识点关系
      function btnKnowledgesExamLibRela_Click() {
        const strFstKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        const lngQuestionId = Number(strFstKeyId);
        if (lngQuestionId == 0) {
          const strMsg = '用于设置知识点的题目为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        questionId.value = lngQuestionId;
        courseChapterId.value = '0';
        refcc_KnowledgesExamLibRelaCRUD.value.showDialog();
      }
      return {
        showErrorMessage,
        dataListQuestionnaire,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refQuestionnaire_List,
        questionName_q,
        courseChapterId_q,
        questionTypeId_q,
        difficultyLevelId_q,
        levelModeTypeId_q,
        isTest_q,
        courseId_q,
        courseId_f,
        arrcc_CourseChapter,
        arrQuestionType,
        arrge_DifficultyLevel,
        arrge_LevelModeType,
        btnClone_Click,
        btnUpMove_Click,
        btnGoTop_Click,
        btnGoBottum_Click,
        btnReOrder_Click,
        btnQuery_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        questionId,
        courseChapterId,
        refcc_KnowledgesExamLibRelaCRUD,
        btnKnowledgesExamLibRela_Click,
        FinishSetKnowledge,
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
        router.push({ name: 'editQuestionnaire', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new QuestionnaireCRUD_ListEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
