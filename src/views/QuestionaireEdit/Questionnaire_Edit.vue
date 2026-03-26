<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trDifficultyLevelId">
            <td class="text-right">
              <label
                id="lblQuestionName"
                name="lblQuestionName"
                class="col-form-label text-right"
                style="width: 90px"
                >题目名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtQuestionName"
                v-model="questionName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDifficultyLevelId"
                name="lblDifficultyLevelId"
                class="col-form-label text-right"
                style="width: 90px"
                >难度等级
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDifficultyLevelId"
                v-model="difficultyLevelId"
                class="form-control form-control-sm"
                style="width: 150px"
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
          </tr>
          <tr id="trQuestionContent">
            <td class="text-right">
              <label
                id="lblQuestionContent"
                name="lblQuestionContent"
                class="col-form-label text-right"
                style="width: 90px"
                >题目内容
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtQuestionContent"
                v-model="questionContent"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trQuestionCode">
            <td class="text-right">
              <label
                id="lblQuestionCode"
                name="lblQuestionCode"
                class="col-form-label text-right"
                style="width: 90px"
                >html代码
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtQuestionCode"
                v-model="questionCode"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trQuestionTypeId">
            <td class="text-right">
              <label
                id="lblCourseChapterId"
                name="lblCourseChapterId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程章节
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseChapterId"
                v-model="courseChapterId"
                class="form-control form-control-sm"
                style="width: 150px"
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
            <td class="text-right">
              <label
                id="lblQuestionTypeId"
                name="lblQuestionTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >题目类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQuestionTypeId"
                v-model="questionTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
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
          <tr id="trSectionTypeId">
            <td class="text-right">
              <label
                id="lblAnswerTypeId"
                name="lblAnswerTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >答案类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlAnswerTypeId"
                v-model="answerTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrAnswerType"
                  :key="index"
                  :value="item.answerTypeId"
                >
                  {{ item.answerTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblSectionTypeId"
                name="lblSectionTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >节点类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlSectionTypeId"
                v-model="sectionTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrge_StructureSectionType"
                  :key="index"
                  :value="item.sectionTypeId"
                >
                  {{ item.sectionTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIsEffective">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsShow" v-model="isShow" type="checkbox" Text="是否启用" /><label
                  for="chkIsShow"
                  >是否启用</label
                ></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsEffective"
                  v-model="isEffective"
                  type="checkbox"
                  Text="是否有效"
                /><label for="chkIsEffective">是否有效</label></span
              >
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >备注
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trIsTest">
            <td class="text-right">
              <label
                id="lblKnowledgeGraphId"
                name="lblKnowledgeGraphId"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点图Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlKnowledgeGraphId"
                v-model="knowledgeGraphId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrgs_KnowledgesGraph"
                  :key="index"
                  :value="item.knowledgeGraphId"
                >
                  {{ item.knowledgeGraphName }}
                </option></select
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsTest" v-model="isTest" type="checkbox" Text="是否测试" /><label
                  for="chkIsTest"
                  >是否测试</label
                ></span
              >
            </td>
          </tr>
          <tr id="trLevelModeTypeId">
            <td class="text-right">
              <label
                id="lblLevelModeTypeId"
                name="lblLevelModeTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >模式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlLevelModeTypeId"
                v-model="levelModeTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
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
          </tr>
        </tbody></table
      >
    </div>
    <template #footer>
      <el-button id="btnCancelQuestionnaire" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitQuestionnaire"
        type="primary"
        @click="btnQuestionnaire_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import Questionnaire_EditEx from '@/views/QuestionaireEdit/Questionnaire_EditEx';
  import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
  import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
  import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
  import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { clsAnswerTypeEN } from '@/ts/L0Entity/SysPara/clsAnswerTypeEN';
  import { clsge_StructureSectionTypeEN } from 'share-stu-study-base-lib';
  import { clsgs_KnowledgesGraphEN } from 'share-stu-study-base-lib';
  import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
  import { ge_DifficultyLevel_GetObjLstCache } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
  import { cc_CourseChapter_GetObjLstCache } from 'share-stu-study-base-lib';
  import { QuestionType_GetObjLstCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
  import { AnswerType_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsAnswerTypeWApi';
  import { ge_StructureSectionType_GetObjLstAsync } from 'share-stu-study-base-lib';
  import { gs_KnowledgesGraph_GetObjLstCache } from 'share-stu-study-base-lib';
  import { ge_LevelModeType_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
  import { refDivEdit, CourseId_Session } from '@/views/QuestionaireEdit/QuestionnaireVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'QuestionnaireEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const questionName = ref('');
      const difficultyLevelId = ref('');
      const questionContent = ref('');
      const questionCode = ref('');
      const courseChapterId = ref('');
      const questionTypeId = ref('');
      const answerTypeId = ref('');
      const sectionTypeId = ref('');
      const isShow = ref(true);
      const isEffective = ref(true);
      const memo = ref('');
      const knowledgeGraphId = ref('');
      const isTest = ref(true);
      const levelModeTypeId = ref('');
      const courseId = ref('');
      const updUser = ref('');

      const arrge_DifficultyLevel = ref<clsge_DifficultyLevelEN[]>([]);
      const arrcc_CourseChapter = ref<clscc_CourseChapterEN_T[]>([]);
      const arrQuestionType = ref<clsQuestionTypeEN[]>([]);
      const arrAnswerType = ref<clsAnswerTypeEN[]>([]);
      const arrge_StructureSectionType = ref<clsge_StructureSectionTypeEN_T[]>([]);
      const arrgs_KnowledgesGraph = ref<clsgs_KnowledgesGraphEN_T[]>([]);
      const arrge_LevelModeType = ref<clsge_LevelModeTypeEN_T[]>([]);
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
      async function getArrge_DifficultyLevel() {
        const arrObjLstSel = await ge_DifficultyLevel_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrge_DifficultyLevel.value.length = 0;
        const obj0 = new clsge_DifficultyLevelEN();
        obj0.difficultyLevelId = '0';
        obj0.difficultyLevelName = '请选择难度等级表...';
        arrge_DifficultyLevel.value.push(obj0);
        arrObjLstSel.forEach((x) => arrge_DifficultyLevel.value.push(x));
        difficultyLevelId.value = '0';
      }
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
      async function getArrcc_CourseChapter(strCourseId: string) {
        let arrObjLstSel = await cc_CourseChapter_GetObjLstCache(strCourseId);
        if (arrObjLstSel == null) return;
        arrcc_CourseChapter.value.length = 0;
        const obj0 = new clscc_CourseChapterEN();
        obj0.courseChapterId = '0';
        obj0.courseChapterName = '请选择课程章节...';
        arrcc_CourseChapter.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.courseId == strCourseId);
        arrObjLstSel.forEach((x) => arrcc_CourseChapter.value.push(x));
        courseChapterId.value = '0';
      }
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param bolIsUse:
*/
      async function getArrQuestionType(bolIsUse: boolean) {
        let arrObjLstSel = await QuestionType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrQuestionType.value.length = 0;
        const obj0 = new clsQuestionTypeEN();
        obj0.questionTypeId = '0';
        obj0.questionTypeName = '请选择题目类型...';
        arrQuestionType.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.isUse == bolIsUse);
        arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
        arrObjLstSel.forEach((x) => arrQuestionType.value.push(x));
        questionTypeId.value = '0';
      }
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
      async function getArrAnswerType() {
        const arrObjLstSel = await AnswerType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrAnswerType.value.length = 0;
        const obj0 = new clsAnswerTypeEN();
        obj0.answerTypeId = '0';
        obj0.answerTypeName = '请选择答案类型...';
        arrAnswerType.value.push(obj0);
        arrObjLstSel.forEach((x) => arrAnswerType.value.push(x));
        answerTypeId.value = '0';
      }
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
      async function getArrge_StructureSectionType(strCourseId: string) {
        const strCondition = `courseId = '${strCourseId}'`;
        const arrObjLstSel = await ge_StructureSectionType_GetObjLstAsync(strCondition);
        if (arrObjLstSel == null) return;
        arrge_StructureSectionType.value.length = 0;
        const obj0 = new clsge_StructureSectionTypeEN();
        obj0.sectionTypeId = '0';
        obj0.sectionTypeName = '请选择结构章节类型...';
        arrge_StructureSectionType.value.push(obj0);
        arrObjLstSel.forEach((x) => arrge_StructureSectionType.value.push(x));
        sectionTypeId.value = '0';
      }
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
      async function getArrgs_KnowledgesGraph(strCourseId: string) {
        let arrObjLstSel = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
        if (arrObjLstSel == null) return;
        arrgs_KnowledgesGraph.value.length = 0;
        const obj0 = new clsgs_KnowledgesGraphEN();
        obj0.knowledgeGraphId = '0';
        obj0.knowledgeGraphName = '请选择知识点逻辑图...';
        arrgs_KnowledgesGraph.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.courseId == strCourseId);
        arrObjLstSel.forEach((x) => arrgs_KnowledgesGraph.value.push(x));
        knowledgeGraphId.value = '0';
      }
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
      async function getArrge_LevelModeType() {
        const arrObjLstSel = await ge_LevelModeType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrge_LevelModeType.value.length = 0;
        const obj0 = new clsge_LevelModeTypeEN();
        obj0.levelModeTypeId = '0';
        obj0.levelModeTypeName = '请选择关卡模式类型...';
        arrge_LevelModeType.value.push(obj0);
        arrObjLstSel.forEach((x) => arrge_LevelModeType.value.push(x));
        levelModeTypeId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储
        const bolIsVisible_Giving = true; //给定值

        await getArrge_DifficultyLevel(); //编辑区域

        await getArrcc_CourseChapter(strCourseId); //编辑区域

        await getArrQuestionType(bolIsVisible_Giving); //编辑区域

        await getArrAnswerType(); //编辑区域

        await getArrge_StructureSectionType(strCourseId); //编辑区域

        await getArrgs_KnowledgesGraph(strCourseId); //编辑区域

        await getArrge_LevelModeType(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQuestionnaireEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQuestionnaireObj() {
        if (levelModeTypeId.value == '0') {
          levelModeTypeId.value = '01';
        }
        if (difficultyLevelId.value == '0') {
          alert('请选择难度类型...');
          return null;
        }
        if (courseChapterId.value == '0') {
          alert('请选择课程章节...');
          return null;
        }
        if (questionTypeId.value == '0') {
          alert('请选择题目类型...');
          return null;
        }
        if (answerTypeId.value == '0') {
          alert('请选择答案类型...');
          return null;
        }
        const pobjQuestionnaireEN = new clsQuestionnaireEN();
        pobjQuestionnaireEN.SetQuestionName(questionName.value); // 题目名称
        pobjQuestionnaireEN.SetDifficultyLevelId(difficultyLevelId.value); // 难度等级
        pobjQuestionnaireEN.SetQuestionContent(questionContent.value); // 题目内容
        pobjQuestionnaireEN.SetQuestionCode(questionCode.value); // html代码
        pobjQuestionnaireEN.SetCourseChapterId(courseChapterId.value); // 课程章节
        pobjQuestionnaireEN.SetQuestionTypeId(questionTypeId.value); // 题目类型
        pobjQuestionnaireEN.SetAnswerTypeId(answerTypeId.value); // 答案类型
        pobjQuestionnaireEN.SetSectionTypeId(sectionTypeId.value); // 节点类型
        pobjQuestionnaireEN.SetIsShow(isShow.value); // 是否启用
        pobjQuestionnaireEN.SetIsEffective(isEffective.value); // 是否有效
        pobjQuestionnaireEN.SetMemo(memo.value); // 备注
        pobjQuestionnaireEN.SetKnowledgeGraphId(knowledgeGraphId.value); // 知识点图Id
        pobjQuestionnaireEN.SetIsTest(isTest.value); // 是否测试
        pobjQuestionnaireEN.SetLevelModeTypeId(levelModeTypeId.value); // 模式Id
        pobjQuestionnaireEN.SetCourseId(CourseId_Session.value); // 课程
        pobjQuestionnaireEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjQuestionnaireEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改人

        return pobjQuestionnaireEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQuestionnaireEN">表实体类对象</param>
       **/
      async function ShowDataFromQuestionnaireObj(pobjQuestionnaireEN: clsQuestionnaireEN) {
        questionName.value = pobjQuestionnaireEN.questionName; // 题目名称
        difficultyLevelId.value = pobjQuestionnaireEN.difficultyLevelId; // 难度等级
        questionContent.value = pobjQuestionnaireEN.questionContent; // 题目内容
        questionCode.value = pobjQuestionnaireEN.questionCode; // html代码
        courseChapterId.value = pobjQuestionnaireEN.courseChapterId; // 课程章节
        questionTypeId.value = pobjQuestionnaireEN.questionTypeId; // 题目类型
        answerTypeId.value = pobjQuestionnaireEN.answerTypeId; // 答案类型
        sectionTypeId.value = pobjQuestionnaireEN.sectionTypeId; // 节点类型
        isShow.value = pobjQuestionnaireEN.isShow; // 是否启用
        isEffective.value = pobjQuestionnaireEN.isEffective; // 是否有效
        memo.value = pobjQuestionnaireEN.memo; // 备注
        knowledgeGraphId.value = pobjQuestionnaireEN.knowledgeGraphId; // 知识点图Id
        isTest.value = pobjQuestionnaireEN.isTest; // 是否测试
        levelModeTypeId.value = pobjQuestionnaireEN.levelModeTypeId; // 模式Id
      }
      watch(difficultyLevelId, (newValue, oldValue) => {
        console.log(`difficultyLevelId changed from ${oldValue} to ${newValue}`);
      });
      function Clear() {
        questionName.value = '';
        difficultyLevelId.value = '0';
        questionContent.value = '';
        questionCode.value = '';
        courseChapterId.value = '0';
        questionTypeId.value = '0';
        answerTypeId.value = '0';
        sectionTypeId.value = '0';
        isShow.value = false;
        isEffective.value = false;
        memo.value = '';
        knowledgeGraphId.value = '0';
        isTest.value = false;
        levelModeTypeId.value = '0';
      }
      const strTitle = ref('题目编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataQuestionnaireObj,
        ShowDataFromQuestionnaireObj,
        questionName,
        difficultyLevelId,
        questionContent,
        questionCode,
        courseChapterId,
        questionTypeId,
        answerTypeId,
        sectionTypeId,
        isShow,
        isEffective,
        memo,
        knowledgeGraphId,
        isTest,
        levelModeTypeId,
        courseId,
        updUser,
        arrge_DifficultyLevel,
        arrcc_CourseChapter,
        arrQuestionType,
        arrAnswerType,
        arrge_StructureSectionType,
        arrgs_KnowledgesGraph,
        arrge_LevelModeType,
        Clear,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQuestionnaire_Edit_Click(strCommandName: string, strKeyId: string) {
        Questionnaire_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
