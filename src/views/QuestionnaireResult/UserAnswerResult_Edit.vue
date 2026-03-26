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
          <tr id="trQuestionnaireSetId">
            <td class="text-right">
              <label
                id="lblQuestionId"
                name="lblQuestionId"
                class="col-form-label text-right"
                style="width: 90px"
                >题目
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQuestionId"
                v-model.number="questionId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrQuestionnaire"
                  :key="index"
                  :value="item.questionId"
                >
                  {{ item.questionName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblQuestionnaireSetId"
                name="lblQuestionnaireSetId"
                class="col-form-label text-right"
                style="width: 90px"
                >问卷集
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQuestionnaireSetId"
                v-model="questionnaireSetId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrQuestionnaireSet"
                  :key="index"
                  :value="item.questionnaireSetId"
                >
                  {{ item.questionnaireSetName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trBatchId">
            <td class="text-right">
              <label
                id="lblCourseExamPaperId"
                name="lblCourseExamPaperId"
                class="col-form-label text-right"
                style="width: 90px"
                >考卷
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseExamPaperId"
                v-model="courseExamPaperId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrcc_CourseExamPaper"
                  :key="index"
                  :value="item.courseExamPaperId"
                >
                  {{ item.examPaperName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblBatchId"
                name="lblBatchId"
                class="col-form-label text-right"
                style="width: 90px"
                >批次
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlBatchId"
                v-model="batchId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrQuestionnaireBatch"
                  :key="index"
                  :value="item.batchId"
                >
                  {{ item.batchName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trAnswerText">
            <td class="text-right">
              <label
                id="lblUserId"
                name="lblUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserId"
                v-model="userId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblAnswerText"
                name="lblAnswerText"
                class="col-form-label text-right"
                style="width: 90px"
                >回答文本
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtAnswerText"
                v-model="answerText"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trScore">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsMarking"
                  v-model="isMarking"
                  type="checkbox"
                  Text="是否批阅"
                /><label for="chkIsMarking">是否批阅</label></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblScore"
                name="lblScore"
                class="col-form-label text-right"
                style="width: 90px"
                >得分
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtScore"
                v-model.number="score"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trComment">
            <td class="text-right">
              <label
                id="lblMarkerId"
                name="lblMarkerId"
                class="col-form-label text-right"
                style="width: 90px"
                >打分者
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMarkerId"
                v-model="markerId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblComment"
                name="lblComment"
                class="col-form-label text-right"
                style="width: 90px"
                >批注
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtComment"
                v-model="comment"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsAccessKnowledge"
                  v-model="isAccessKnowledge"
                  type="checkbox"
                  Text="是否处理知识点"
                /><label for="chkIsAccessKnowledge">是否处理知识点</label></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >备注
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelUserAnswerResult" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitUserAnswerResult"
        type="primary"
        @click="btnUserAnswerResult_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { UserAnswerResult_EditEx } from '@/views/QuestionnaireResult/UserAnswerResult_EditEx';
  import { clsUserAnswerResultEN } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN';
  import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
  import { clsQuestionnaireSetEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireSetEN';
  import { clscc_CourseExamPaperEN } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperEN';
  import { clsQuestionnaireBatchEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireBatchEN';
  import { Questionnaire_GetObjLstAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
  import { QuestionnaireSet_GetObjLstAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireSetWApi';
  import { cc_CourseExamPaper_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clscc_CourseExamPaperWApi';
  import { QuestionnaireBatch_GetObjLstCache } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireBatchWApi';
  import {
    CourseId_Session,
    refDivEdit,
  } from '@/views/QuestionnaireResult/UserAnswerResultVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'UserAnswerResultEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const questionId = ref(0);
      const questionnaireSetId = ref('');
      const courseId = ref('');
      const courseExamPaperId = ref('');
      const batchId = ref('');
      const userId = ref('');
      const answerText = ref('');
      const isMarking = ref(true);
      const score = ref(0);
      const markerId = ref('');
      const comment = ref('');
      const isAccessKnowledge = ref(true);
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrQuestionnaire = ref<clsQuestionnaireEN[]>([]);
      const arrQuestionnaireSet = ref<clsQuestionnaireSetEN[]>([]);
      const arrcc_CourseExamPaper = ref<clscc_CourseExamPaperEN[]>([]);
      const arrQuestionnaireBatch = ref<clsQuestionnaireBatchEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
   * @param strCourseId:
  */
      async function getArrQuestionnaire(strCourseId: string) {
        const strCondition = `courseId = '${strCourseId}'`;
        const arrObjLstSel = await Questionnaire_GetObjLstAsync(strCondition);
        if (arrObjLstSel == null) return;
        arrQuestionnaire.value.length = 0;
        const obj0 = new clsQuestionnaireEN();
        obj0.questionId = 0;
        obj0.questionName = '请选择题目...';
        arrQuestionnaire.value.push(obj0);
        arrObjLstSel.forEach((x) => arrQuestionnaire.value.push(x));
        questionId.value = 0;
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrQuestionnaireSet() {
        const strCondition = `1=1`;
        const arrObjLstSel = await QuestionnaireSet_GetObjLstAsync(strCondition);
        if (arrObjLstSel == null) return;
        arrQuestionnaireSet.value.length = 0;
        const obj0 = new clsQuestionnaireSetEN();
        obj0.questionnaireSetId = '0';
        obj0.questionnaireSetName = '请选择问卷集...';
        arrQuestionnaireSet.value.push(obj0);
        arrObjLstSel.forEach((x) => arrQuestionnaireSet.value.push(x));
        questionnaireSetId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
   * @param strCourseId:
  */
      async function getArrcc_CourseExamPaper(strCourseId: string) {
        let arrObjLstSel = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
        if (arrObjLstSel == null) return;
        arrcc_CourseExamPaper.value.length = 0;
        const obj0 = new clscc_CourseExamPaperEN();
        obj0.courseExamPaperId = '0';
        obj0.examPaperName = '请选择考卷...';
        arrcc_CourseExamPaper.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.courseId == strCourseId);
        arrObjLstSel.forEach((x) => arrcc_CourseExamPaper.value.push(x));
        courseExamPaperId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrQuestionnaireBatch() {
        const arrObjLstSel = await QuestionnaireBatch_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrQuestionnaireBatch.value.length = 0;
        const obj0 = new clsQuestionnaireBatchEN();
        obj0.batchId = '0';
        obj0.batchName = '请选择问卷批次...';
        arrQuestionnaireBatch.value.push(obj0);
        arrObjLstSel.forEach((x) => arrQuestionnaireBatch.value.push(x));
        batchId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        await getArrQuestionnaire(strCourseId); //编辑区域

        await getArrQuestionnaireSet(); //编辑区域

        await getArrcc_CourseExamPaper(strCourseId); //编辑区域

        await getArrQuestionnaireBatch(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjUserAnswerResultEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataUserAnswerResultObj() {
        const pobjUserAnswerResultEN = new clsUserAnswerResultEN();
        pobjUserAnswerResultEN.SetQuestionId(questionId.value); // 题目
        pobjUserAnswerResultEN.SetQuestionnaireSetId(questionnaireSetId.value); // 问卷集
        pobjUserAnswerResultEN.SetCourseId(CourseId_Session.value); // 课程
        pobjUserAnswerResultEN.SetCourseExamPaperId(courseExamPaperId.value); // 考卷
        pobjUserAnswerResultEN.SetBatchId(batchId.value); // 批次
        pobjUserAnswerResultEN.SetUserId(userId.value); // 用户ID
        pobjUserAnswerResultEN.SetAnswerText(answerText.value); // 回答文本
        pobjUserAnswerResultEN.SetIsMarking(isMarking.value); // 是否批阅
        pobjUserAnswerResultEN.SetScore(Number(score.value)); // 得分
        pobjUserAnswerResultEN.SetMarkerId(markerId.value); // 打分者
        pobjUserAnswerResultEN.SetComment(comment.value); // 批注
        pobjUserAnswerResultEN.SetIsAccessKnowledge(isAccessKnowledge.value); // 是否处理知识点
        pobjUserAnswerResultEN.SetMemo(memo.value); // 备注
        pobjUserAnswerResultEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjUserAnswerResultEN.SetUpdUser(userStore.getUserId); // 修改人
        return pobjUserAnswerResultEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjUserAnswerResultEN">表实体类对象</param>
       **/
      async function ShowDataFromUserAnswerResultObj(
        pobjUserAnswerResultEN: clsUserAnswerResultEN,
      ) {
        questionId.value = pobjUserAnswerResultEN.questionId; // 题目
        questionnaireSetId.value = pobjUserAnswerResultEN.questionnaireSetId; // 问卷集
        courseExamPaperId.value = pobjUserAnswerResultEN.courseExamPaperId; // 考卷
        batchId.value = pobjUserAnswerResultEN.batchId; // 批次
        userId.value = pobjUserAnswerResultEN.userId; // 用户ID
        answerText.value = pobjUserAnswerResultEN.answerText; // 回答文本
        isMarking.value = pobjUserAnswerResultEN.isMarking; // 是否批阅
        score.value = pobjUserAnswerResultEN.score; // 得分
        markerId.value = pobjUserAnswerResultEN.markerId; // 打分者
        comment.value = pobjUserAnswerResultEN.comment; // 批注
        isAccessKnowledge.value = pobjUserAnswerResultEN.isAccessKnowledge; // 是否处理知识点
        memo.value = pobjUserAnswerResultEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        questionId.value = 0;
        questionnaireSetId.value = '0';
        courseExamPaperId.value = '0';
        batchId.value = '0';
        userId.value = '';
        answerText.value = '';
        isMarking.value = false;
        score.value = 0;
        markerId.value = '';
        comment.value = '';
        isAccessKnowledge.value = false;
        memo.value = '';
      }
      const strTitle = ref('用户答题结果编辑');
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
        GetEditDataUserAnswerResultObj,
        ShowDataFromUserAnswerResultObj,
        Clear,
        questionId,
        questionnaireSetId,
        courseId,
        courseExamPaperId,
        batchId,
        userId,
        answerText,
        isMarking,
        score,
        markerId,
        comment,
        isAccessKnowledge,
        memo,
        updDate,
        updUser,
        arrQuestionnaire,
        arrQuestionnaireSet,
        arrcc_CourseExamPaper,
        arrQuestionnaireBatch,
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
      btnUserAnswerResult_Edit_Click(strCommandName: string, strKeyId: string) {
        UserAnswerResult_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
