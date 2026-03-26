<template>
  <div class="add-single-choice-modal">
    <div class="modal-content">
      <h2>添加{{ questionTypeName }}</h2>
      <button class="close-button" @click="closeModal" aria-label="关闭">
        <img src="/imageswu/ShiXinDa/close.png" alt="关闭" />
      </button>

      <!-- 题型 -->
      <div class="form-group row">
        <label class="col-form-label col-sm-2">题型:</label>
        <div class="col-sm-10">
          <span>{{ questionTypeName }}</span>
        </div>
      </div>

      <!-- 请选择知识点 -->
      <div class="form-group row">
        <label for="knowledge-point" class="col-form-label col-sm-2">请选择知识点:</label>
        <div class="col-sm-10">
          <select
            id="knowledge-point"
            v-model="courseKnowledgeId"
            @change="knowledge_change"
            class="form-select"
          >
            <option disabled value="">请选择知识点</option>
            <option
              v-for="point in knowledgePoints"
              :key="point.courseKnowledgeId"
              :value="point.courseKnowledgeId"
            >
              {{ point.knowledgeName }}
            </option>
          </select>
        </div>
      </div>

      <!-- 难度选择 -->
      <div class="form-group row">
        <label for="difficulty" class="col-form-label col-sm-2">请选择难度:</label>
        <div class="col-sm-10">
          <select
            id="difficulty"
            v-model="difficultyLevelId"
            @change="difficulty_change"
            class="form-select"
          >
            <option disabled value="">请选择难度</option>
            <option
              v-for="level in difficultyLevels"
              :key="level.difficultyLevelId"
              :value="level.difficultyLevelId"
            >
              {{ level.difficultyLevelName }}
            </option>
          </select>
        </div>
      </div>
      <div>
        <div class="tabs">
          <button @click="activeTab = 0" :class="{ active: activeTab === 0 }">选择已有题目</button>
          <button @click="activeTab = 1" :class="{ active: activeTab === 1 }">新建题目</button>
        </div>

        <div v-if="activeTab === 0">
          <!-- 选择已有题目 -->
          <div class="form-group row">
            <label for="question-name" class="col-form-label col-sm-2">请选择题目:</label>
            <div class="col-sm-10">
              <select
                id="ddlQuestionId"
                v-model.number="questionId"
                class="form-control form-control-sm"
                placeholder="请选择题目"
              >
                <option
                  v-for="(item, index) in arrvQuestionnaire_Sim"
                  :key="index"
                  :value="item.questionId"
                >
                  {{ item.questionName }}
                </option>
              </select>
              <ShowQuestionnaireCom
                ref="refShowQuestionnaire"
                :key="questionId"
                :questionId="questionId"
              />
            </div>
          </div>
        </div>

        <div v-if="activeTab === 1">
          <!-- 题目名称 -->
          <div class="form-group row">
            <label for="question-name" class="col-form-label col-sm-2">题目名称:</label>
            <div class="col-sm-10">
              <input
                id="question-name"
                v-model="questionName"
                placeholder="请输入题目名称"
                class="form-control"
              />
            </div>
          </div>

          <!-- 题目内容 -->
          <div class="form-group row">
            <label for="question-content" class="col-form-label col-sm-2">题目内容:</label>
            <div class="col-sm-10">
              <textarea
                id="question-content"
                v-model="questionContent"
                placeholder="请输入题目内容"
                class="form-textarea form-control"
              ></textarea>
            </div>
          </div>

          <!-- 选项 -->
          <div class="form-group row" v-for="(option, index) in options" :key="index">
            <label :for="'option-' + index" class="col-form-label col-sm-2"
              >{{ option.label }}:</label
            >
            <div class="col-sm-10">
              <input
                :id="'option-' + index"
                v-model="option.value"
                :placeholder="'请输入选项' + option.label"
                class="form-control"
              />
              <span v-if="index === options.length - 1">（可选）</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 是否会解答 -->
      <div class="form-group row">
        <label class="col-form-label col-sm-2">你是否会解答:</label>
        <div class="col-sm-10">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="yes" value="yes" v-model="canSolve" />
            <label class="form-check-label" for="yes">我会解答</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="no" value="no" v-model="canSolve" />
            <label class="form-check-label" for="no">我不会</label>
          </div>
        </div>
      </div>

      <!-- 答案选项 -->
      <div class="form-group row" v-if="isShowOptions === true">
        <label class="col-form-label col-sm-2">请选择答案:</label>
        <div class="col-sm-10">
          <div
            class="form-check form-check-inline"
            v-for="(option, index) in questionOptions"
            :key="index"
          >
            <input
              class="form-check-input"
              type="radio"
              :id="'answer-' + index"
              :value="option.value"
              v-model="selectedAnswer"
            />
            <label class="form-check-label" :for="'answer-' + index">{{ option.value }}</label>
          </div>
        </div>
      </div>

      <!-- 学习日志文本框 -->
      <div class="form-group row" v-if="canSolve === 'yes'">
        <label for="study-log" class="col-form-label col-sm-2">你的学习日志:</label>
        <div class="col-sm-10">
          <textarea
            id="study-log"
            v-model="teachingLog"
            placeholder="请输入学习日志"
            class="form-textarea form-control"
          ></textarea>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="form-group row">
        <div class="col-sm-12 text-center">
          <button class="btn btn-secondary" @click="closeModal">取消</button>
          <button class="btn btn-primary" @click="confirmAddQuestion">{{
            strSubmitButtonText
          }}</button>
        </div>
      </div>

      <!-- 请选择题目 -->

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script lang="ts">
  import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
  import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
  import { ge_DifficultyLevel_GetObjLstCache } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import {
    computed,
    defineComponent,
    getCurrentInstance,
    onMounted,
    PropType,
    ref,
    watch,
  } from 'vue';
  import Questionnaire_EditEx from '../QuestionaireEdit/Questionnaire_EditEx';

  import { useUserStore } from '@/store/modulesShare/user';
  import {
    CourseId_Session,
    refQuestionnaire_Edit,
  } from '../QuestionaireEdit/QuestionnaireVueShare';

  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { enumge_LevelModeType } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
  import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
  import { refAnswer_Edit } from '../QuestionaireEdit/AnswerVueShare';
  import { Answer_EditEx } from '../QuestionaireEdit/Answer_EditEx';
  import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
  import { cc_KnowledgeStuTeachLog_EditEx } from '../Knowledges/cc_KnowledgeStuTeachLog_EditEx';
  import { QuestionOptions_EditEx } from '../QuestionaireEdit/QuestionOptions_EditEx';
  import { refQuestionOptions_Edit } from '../QuestionaireEdit/QuestionOptionsVueShare';
  import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
  import { enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';

  import { vQuestionnaire_Sim_GetArrvQuestionnaire_SimByKnowledgeAndDiff } from '@/ts/L3ForWApiEx/BaseInfo/clsvQuestionnaire_SimExWApi';
  import { GameBottleEx_throwBottle } from '@/ts/L3ForWApiEx/GameLearn/clsGameBottleExWApi';
  import { cc_KnowledgeStuTeachLogEx_AddNewLog } from '@/ts/L3ForWApiEx/Knowledges/clscc_KnowledgeStuTeachLogExWApi';
  import { cc_KnowledgesExamLibRelaEx_AddNewRela } from '@/ts/L3ForWApiEx/Knowledges/clscc_KnowledgesExamLibRelaExWApi';
  import { CourseId_Session as CourseId_Session_Answer } from '@/views/QuestionaireEdit/AnswerVueShare';
  import { QuestionOptionsEx_GetObjLstByQuestionId } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionOptionsExWApi';
  import { UserAnswerResultEx_AddOrUpdateRecordNoStuBatch } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsUserAnswerResultExWApi';
  import { cc_CourseKnowledgesEx_GetArrcc_CourseKnowledgesByQuestionType } from 'share-stu-study-base-lib';

  import { ge_GameLevelEx_GetObjByGameLevelNameAsync } from '@/ts/L3ForWApiEx/Knowledges/clsge_GameLevelExWApi';
  import { enumBatchType } from '@/ts/L0Entity/SysPara/clsBatchTypeEN';
  import { UserExamBatchRelaEx_GetObjWithAddByBatchType } from '@/ts/L3ForWApiEx/UserManage/clsUserExamBatchRelaExWApi';
  import ShowQuestionnaireCom from '@/ts/components/ShowQuestionnaire.vue';

  import { CourseId_Session as CourseId_Session_Option } from '@/views/QuestionaireEdit/QuestionOptionsVueShare';
  import { QuestionType_GetNameByQuestionTypeIdCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
  import { ClassPerfAnalysisEx_CalculateClassPerformanceForQuestion } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsClassPerfAnalysisExWApi';
  import { StuPerfAnalysisEx_CalculateStudentPerformance } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsStuPerfAnalysisExWApi';
  import { DriftingBottleGameEx_SubmitThrowBottle } from '@/ts/L3ForWApiEx/GameLearn/clsDriftingBottleGameExWApi';
  import { enumQuestionSource } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionSourceEN';

  export default defineComponent({
    name: 'AddSingleChoice',
    components: {
      ShowQuestionnaireCom,
    },
    props: {
      questionTypeId: {
        type: String as PropType<string>,
        required: true,
      },
    },
    setup(props, { emit }) {
      const userStore = useUserStore();
      const GameLevelName = '前测';
      const refShowQuestionnaire = ref();
      const batchTypeName = '扔瓶解题';
      const batchTypeId = enumBatchType.ThrowSolve_07;
      const gameLevelId = ref('');
      const examBatchNo = ref('');
      const questionSourceId = ref('');
      const courseId = clsPubLocalStorage.courseId;
      CourseId_Session_Option.value = courseId;
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const objEdit_QuestionOptions = ref<QuestionOptions_EditEx>();
      const questionTypeName = ref('');
      const strSubmitButtonText = ref('提交已有题目');
      const strCancelButtonText = ref('取消');
      const userId = userStore.getUserId;
      const knowledgePoints = ref<clscc_CourseKnowledgesEN_T[] | null>([]);
      const difficultyLevels = ref<clsge_DifficultyLevelEN[]>([]);
      const courseKnowledgeId = ref('');
      const difficultyLevelId = ref('');
      const questionName = ref('');
      const questionContent = ref('');
      const arrvQuestionnaire_Sim = ref<clsvQuestionnaire_SimEN[] | null>([]);
      const activeTab = ref(0);
      const canSolve = ref(''); // 用于跟踪是否会解答
      const isShowOptions = ref(false); // 用于控制选项的显示
      const answerTrueOrFalse = ref(false); // 用于跟踪选择的答案
      const teachingLog = ref(''); // 用于学习日志
      const answerContent = ref('');
      const rightAnswer = ref('');
      const isShow = ref(true);
      const keyId = ref('');
      const questionId = ref(0);
      const opType = ref('AddWithMaxId');
      const componentName = ref('');
      const idStudentInfo = ref('');

      const options = ref([
        { label: 'A', id: '1', value: '', keyId: '' },
        { label: 'B', id: '2', value: '', keyId: '' },
        { label: 'C', id: '3', value: '', keyId: '' },
        { label: 'D', id: '4', value: '', keyId: '' },
        { label: 'E', id: '5', value: '', keyId: '' },
      ]);
      const questionOptions = ref([
        { label: 'A', id: '1', value: '', keyId: '' },
        { label: 'B', id: '2', value: '', keyId: '' },
        { label: 'C', id: '3', value: '', keyId: '' },
        { label: 'D', id: '4', value: '', keyId: '' },
        { label: 'E', id: '5', value: '', keyId: '' },
      ]);
      const selectedAnswer = ref('');
      // 观察 canSolve 的变化，并在 canSolve 为 'yes' 时根据 questionId 获取题目选项
      watch(canSolve, async (newVal) => {
        if (activeTab.value === 0) {
          // const arr = await await QuestionOptionsEx_GetObjLstByQuestionId(questionId.value);
          // if (arr == null || arr.length == 0) {
          //   questionOptions.value = [];
          // } else {
          //   questionOptions.value = arr.map((option) => ({
          //     label: option.optionName,
          //     value: option.questionOptionId,
          //     id: option.questionOptionId,
          //   }));
          // }

          return;
        }
        if (newVal === 'yes') {
          isShowOptions.value = true;
        } else {
          isShowOptions.value = false;
        }

        if (newVal === 'yes') {
          questionOptions.value = options.value.filter((option: any) => option.value.trim() !== '');
        }
      });
      const filteredOptions = computed(async () => {
        if (activeTab.value === 0) {
          if (questionId.value === 0) {
            return [];
          }
          const questionOptions = await QuestionOptionsEx_GetObjLstByQuestionId(questionId.value);
          if (questionOptions == null) {
            return [];
          }
          return questionOptions.map((option) => ({
            label: option.optionTitle,
            value: option.optionName,
            id: option.questionOptionId,
          }));
        } else {
          return options.value.filter((option: any) => option.value.trim() !== '');
        }
      });

      // 观察 options 的变化，并根据非空条件赋值给 questionOptions
      watch(options, (newOptions) => {
        questionOptions.value = newOptions.filter(
          (option) => option !== null && option !== undefined && option.value.trim() !== '',
        );
      });
      // 观察 activeTab 的变化，并更新 strSubmitButtonText 的值
      watch(activeTab, (newVal) => {
        if (newVal === 0) {
          strSubmitButtonText.value = '提交已有题目';
        } else if (newVal === 1) {
          strSubmitButtonText.value = '提交新建题目';
        }
      });
      // 使用 getCurrentInstance 获取组件实例
      const instance = getCurrentInstance();
      if (instance && instance.type.name) {
        componentName.value = instance.type.name;
        console.log('组件名称:', componentName.value);
      } else {
        console.warn('无法获取组件名称');
      }

      const closeModal = () => {
        // 重置表单内容
        courseKnowledgeId.value = '';
        difficultyLevelId.value = '';
        questionName.value = '';
        questionContent.value = '';
        canSolve.value = '';
        answerTrueOrFalse.value = false;
        teachingLog.value = '';
        options.value = options.value.map((option: any) => ({ ...option, value: '' }));
        emit('close');
      };
      const confirmAddQuestion = async () => {
        if (!courseKnowledgeId.value || !difficultyLevelId.value || !canSolve.value) {
          alert('请填写所有必填项');

          return;
        }
        try {
          if (activeTab.value === 0) {
            const bolIsSuccess1 = await btnSubmit_Click4SelectQuestion();
            if (!bolIsSuccess1) {
              alert('抛瓶子失败');
              return;
            }
            alert('抛瓶子成功0！');
            emit('close');
            return;
          }
          if (!questionContent.value || !questionName.value) {
            alert('请填写所有必填项');
            return;
          }

          const bolIsSuccess = await btnSubmit_Click4AddNewQuestion();
          if (!bolIsSuccess) {
            alert('抛瓶子失败');
            return;
          }
          // 处理添加单选题的逻辑
          alert('抛瓶子成功1！');
          emit('close');
        } catch (e) {
          console.error(e);
          alert(`添加单选题失败${e}`);
        }
      };
      function Clear() {
        questionName.value = '';
        difficultyLevelId.value = '0';
        questionContent.value = '';
      }
      /** 为插入记录做准备工作
       * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
       **/
      async function AddNewRecord() {
        const strThisFuncName = AddNewRecord.name;
        console.log('strThisFuncName1', strThisFuncName);
        Clear();
        //wucQuestionnaireB1.questionId = QuestionnaireGetMaxStrId_S();
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQuestionnaireEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQuestionnaireObj() {
        const pobjQuestionnaireEN = new clsQuestionnaireEN();
        pobjQuestionnaireEN.SetQuestionName(questionName.value); // 题目名称
        pobjQuestionnaireEN.SetDifficultyLevelId(difficultyLevelId.value); // 难度等级
        pobjQuestionnaireEN.SetQuestionContent(questionContent.value); // 题目内容
        pobjQuestionnaireEN.SetQuestionTypeId(enumQuestionType.SingleChoice_02); // 题型
        // pobjQuestionnaireEN.SetQuestionCode(questionCode.value); // html代码
        // pobjQuestionnaireEN.SetCourseChapterId(courseChapterId.value); // 课程章节
        // pobjQuestionnaireEN.SetQuestionTypeId(questionTypeId.value); // 题目类型
        // pobjQuestionnaireEN.SetAnswerTypeId(answerTypeId.value); // 答案类型
        // pobjQuestionnaireEN.SetSectionTypeId(sectionTypeId.value); // 节点类型
        // pobjQuestionnaireEN.SetIsShow(isShow.value); // 是否启用
        // pobjQuestionnaireEN.SetIsEffective(isEffective.value); // 是否有效
        // pobjQuestionnaireEN.SetMemo(memo.value); // 备注
        // pobjQuestionnaireEN.SetKnowledgeGraphId(knowledgeGraphId.value); // 知识点图Id
        // pobjQuestionnaireEN.SetIsTest(isTest.value); // 是否测试
        pobjQuestionnaireEN.SetLevelModeTypeId(enumge_LevelModeType.All_03); // 模式Id
        pobjQuestionnaireEN.SetCourseId(CourseId_Session.value); // 课程
        pobjQuestionnaireEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjQuestionnaireEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改时间
        return pobjQuestionnaireEN;
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjAnswerEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataAnswerObj() {
        const pobjAnswerEN = new clsAnswerEN();
        pobjAnswerEN.SetQuestionId(questionId.value); // 题目
        pobjAnswerEN.SetAnswerTrueOrFalse(answerTrueOrFalse.value); // 答案内容
        pobjAnswerEN.SetAnswerContent(rightAnswer.value); // 答案内容
        pobjAnswerEN.SetIsShow(isShow.value); // 是否启用
        pobjAnswerEN.SetMemo('学生通过扔一个添加'); // 备注
        pobjAnswerEN.SetAnswerFillInBlank(''); // 填空题答案
        pobjAnswerEN.SetCourseId(CourseId_Session.value); // 课程Id
        pobjAnswerEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjAnswerEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改时间

        return pobjAnswerEN;
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQuestionOptionsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQuestionOptionsObj() {
        const pobjQuestionOptionsEN = new clsQuestionOptionsEN();
        if (objEdit_QuestionOptions.value == null) {
          alert('请先添加选项！');
          return pobjQuestionOptionsEN;
        }
        const id = objEdit_QuestionOptions.value.tag;
        const objOption = options.value.find((option: any) => option.id.toString() === id);
        if (objOption == null) {
          alert('请先添加选项！');
          return pobjQuestionOptionsEN;
        }
        let bolIsCorrect = false;
        if (objOption.value === selectedAnswer.value) {
          bolIsCorrect = true;
        }
        pobjQuestionOptionsEN.SetOptionName(objOption.value); // 选项名称
        pobjQuestionOptionsEN.SetOptionIndex(Number(objOption.id)); // 选项序号
        pobjQuestionOptionsEN.SetOptionTitle(objOption.label); // 选项标题
        pobjQuestionOptionsEN.SetOptionContent(''); // 选项内容
        pobjQuestionOptionsEN.SetIsCorrect(bolIsCorrect); // 是否正确
        pobjQuestionOptionsEN.SetIsShow(isShow.value); // 是否启用
        pobjQuestionOptionsEN.SetMemo('学生通过扔一个添加'); // 备注
        pobjQuestionOptionsEN.SetQuestionId(questionId.value); // 题目ID
        pobjQuestionOptionsEN.SetCourseId(courseId); // 课程Id

        pobjQuestionOptionsEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjQuestionOptionsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjQuestionOptionsEN.SetCourseId(CourseId_Session.value); // 课程Id
        return pobjQuestionOptionsEN;
      }

      /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
      具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
      (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
    */
      async function btnSubmit_Click4AddNewQuestion(): Promise<boolean> {
        const strCommandText: string = strSubmitButtonText.value;
        questionSourceId.value = enumQuestionSource.CreatedByStudent_02;
        try {
          if (canSolve.value == 'yes') {
            answerContent.value = selectedAnswer.value;
            if (answerContent.value == '') {
              const strMsg = `你会解题，但没有提供答案，请选好答案后再提交！`;
              alert(strMsg);
              return false;
            }
          }

          let strInfo;
          let objEdit = new Questionnaire_EditEx(componentName.value, null);
          let objEdit_Answer = new Answer_EditEx(componentName.value, null);

          objEdit_QuestionOptions.value = new QuestionOptions_EditEx(componentName.value, null);

          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (opType.value != 'AddWithMaxId') {
            const returnBool = await objEdit.AddNewRecordSave();
            if (returnBool == true) {
              // this.HideDialog_Questionnaire();
              // this.iShowList.BindGv(clsQuestionnaireEN._CurrTabName, '');
            }
            return false;
          }
          //添加题目
          objEdit.isShowMsg = false;
          const returnKeyId_QuestionId = await objEdit.AddNewRecordWithReturnKeySave();
          if (returnKeyId_QuestionId == 0) {
            strInfo = '添加题目不成功！(In Questionnaire_Edit.btnSubmit_Click)';
            console.log(strInfo);
            alert(strInfo);
            return false;
          }
          //添加知识点与题目关联
          questionId.value = returnKeyId_QuestionId;
          const returnKeyId_Knowledge = await cc_KnowledgesExamLibRelaEx_AddNewRela(
            questionId.value,
            courseKnowledgeId.value,
            true,
          );

          if (returnKeyId_Knowledge == '') {
            strInfo = '添加题目知识点不成功！(In Questionnaire_Edit.btnSubmit_Click)';
            console.log(strInfo);
            alert(strInfo);
            return false;
          }

          //单选题的选项维护
          questionId.value = returnKeyId_QuestionId;

          refQuestionOptions_Edit.value = refQuestionnaire_Edit.value;
          objEdit_QuestionOptions.value.isShowMsg = false;
          for (const objOption of options.value) {
            objEdit_QuestionOptions.value.tag = objOption.id.toString();
            if (objOption.value == '') {
              continue;
            }
            const returnKeyId_QuestionOption =
              await objEdit_QuestionOptions.value.AddNewRecordWithMaxIdSave();

            if (returnKeyId_QuestionOption.length == 0) {
              strInfo = '添加题目选项不成功！(In Questionnaire_Edit.btnSubmit_Click)';
              console.log(strInfo);
              alert(strInfo);
              return false;
            }
            objOption.keyId = returnKeyId_QuestionOption;
            if (answerContent.value == objOption.value) {
              rightAnswer.value = returnKeyId_QuestionOption;
            }
          }
          //题目的答案
          questionId.value = returnKeyId_QuestionId;

          refAnswer_Edit.value = refQuestionnaire_Edit.value;
          objEdit_Answer.isShowMsg = false;
          const returnKeyId_Answer = await objEdit_Answer.AddNewRecordWithReturnKeySave();

          if (returnKeyId_Answer == 0) {
            strInfo = '添加答案不成功！(In Questionnaire_Edit.btnSubmit_Click)';
            console.log(strInfo);
            alert(strInfo);
            return false;
          }
          if (teachingLog.value.length > 0) {
            //题目的学习日志
            questionId.value = returnKeyId_QuestionId;
            const returnKeyId_TeachLog = await cc_KnowledgeStuTeachLogEx_AddNewLog(
              questionId.value,
              idStudentInfo.value,
              teachingLog.value,
            );

            if (returnKeyId_TeachLog == false) {
              strInfo = '添加题目学习日志不成功！(In Questionnaire_Edit.btnSubmit_Click)';
              console.log(strInfo);
              alert(strInfo);
              return false;
            }
          }
          //扔瓶子
          questionId.value = returnKeyId_QuestionId;
          // const isMaster = canSolve.value === 'yes';
          // const returnKeyId_GameBottle = await GameBottleEx_throwBottle(
          //   returnKeyId_QuestionId,
          //   isMaster,
          // );
          const returnKeyId_GameBottle = await DriftingBottleGameEx_SubmitThrowBottle(
            userId,
            idCurrEduCls,
            questionId.value,
            answerContent.value,
            questionSourceId.value,
            canSolve.value === 'yes',
          );

          if (returnKeyId_GameBottle == false) {
            strInfo = '扔瓶子不成功！(In Questionnaire_Edit.btnSubmit_Click)';
            console.log(strInfo);
            alert(strInfo);
            return false;
          }
          //计算表现
          // await calculatePerformance();
          //重新生成瓶子
          emit('generate-bottles');
          return true;
        } catch (e) {
          const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
          console.error(strMsg);
          alert(strMsg);
          return false;
        }
      }

      const calculatePerformance = async () => {
        if (questionId.value !== null) {
          try {
            const classPerfResult = await ClassPerfAnalysisEx_CalculateClassPerformanceForQuestion(
              idCurrEduCls,
              questionId.value,
            );
            // classPerformance.value = classPerfResult;

            const studentPerfResult = await StuPerfAnalysisEx_CalculateStudentPerformance(
              idStudentInfo.value,
              idCurrEduCls,
              courseId,
            );
            // studentPerformance.value = studentPerfResult;

            console.log('Class Performance:', classPerfResult);
            console.log('Student Performance:', studentPerfResult);
          } catch (error) {
            console.error('Error calculating performance:', error);
          }
        }
      };
      async function btnSubmit_Click4SelectQuestion(): Promise<boolean> {
        const strCommandText: string = strSubmitButtonText.value;
        questionSourceId.value = enumQuestionSource.CreatedByTeacher_01;
        try {
          let strInfo;
          if (canSolve.value == 'yes') {
            answerContent.value = refShowQuestionnaire.value.answerContent;
            if (answerContent.value == '') {
              const strMsg = `你会解题，但没有提供答案，请选好答案后再提交！`;
              alert(strMsg);
              return false;
            }
          }
          let objEdit_Answer = new Answer_EditEx(componentName.value, null);
          let objEdit_StuTeachLog = new cc_KnowledgeStuTeachLog_EditEx(componentName.value, null);
          objEdit_QuestionOptions.value = new QuestionOptions_EditEx(componentName.value, null);

          //题目的答案--选择问题时不需要提供答案
          const objUserExamBatchRela = await UserExamBatchRelaEx_GetObjWithAddByBatchType(
            userId,
            idCurrEduCls,
            batchTypeId,
          );
          if (objUserExamBatchRela == null) {
            strInfo = '获取扔瓶子批次不成功！(In Questionnaire_Edit.btnSubmit_Click)';
            console.log(strInfo);
            alert(strInfo);
            return false;
          }
          //用户做题的结果
          answerContent.value = refShowQuestionnaire.value.answerContent;
          // const returnDbl = await UserAnswerResultEx_AddOrUpdateRecordNoStuBatch(
          //   userId,
          //   objUserExamBatchRela.examBatchNo,
          //   questionId.value,
          //   idCurrEduCls,
          //   answerContent.value,
          // );
          // if (returnDbl >= 0.0) {
          //   console.log('完成答案存放成功');
          // } else {
          //   console.log('答案存盘失败-1!');
          //   canSolve.value = 'no';
          // }

          //题目的学习日志
          if (teachingLog.value.length > 0) {
            const returnKeyId_TeachLog = await cc_KnowledgeStuTeachLogEx_AddNewLog(
              questionId.value,
              idStudentInfo.value,
              teachingLog.value,
            );

            if (returnKeyId_TeachLog == false) {
              strInfo = '添加题目学习日志不成功！(In Questionnaire_Edit.btnSubmit_Click)';
              console.log(strInfo);
              alert(strInfo);
              return false;
            }
          }
          //扔瓶子
          const isMaster = canSolve.value === 'yes';
          // const returnKeyId_GameBottle = await GameBottleEx_throwBottle(questionId.value, isMaster);

          const returnKeyId_GameBottle = await DriftingBottleGameEx_SubmitThrowBottle(
            userId,
            idCurrEduCls,
            questionId.value,
            answerContent.value,
            questionSourceId.value,
            canSolve.value === 'yes',
          );

          if (returnKeyId_GameBottle == false) {
            strInfo = '扔瓶子不成功！(In Questionnaire_Edit.btnSubmit_Click)';
            console.log(strInfo);
            alert(strInfo);
            return false;
          }
          emit('generate-bottles');
          return true;
        } catch (e) {
          const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
          console.error(strMsg);
          alert(strMsg);
          return false;
        }
        return true;
      }
      // 生命周期钩子
      onMounted(async () => {
        LoadData();
        questionTypeName.value = await QuestionType_GetNameByQuestionTypeIdCache(
          props.questionTypeId,
        );
        console.log('questionTypeName:', questionTypeName.value);
        idStudentInfo.value = clsPubLocalStorage.idStu;
        CourseId_Session.value = courseId;
        CourseId_Session_Answer.value = CourseId_Session.value;
        console.log('AddSingleChoice mounted');
        knowledgePoints.value = await cc_CourseKnowledgesEx_GetArrcc_CourseKnowledgesByQuestionType(
          props.questionTypeId,
          courseId,
        );
        difficultyLevels.value = await ge_DifficultyLevel_GetObjLstCache();
        strSubmitButtonText.value = '提交已有题目';
      });

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储
        if (courseKnowledgeId.value == null) {
          return;
        }
        if (courseKnowledgeId.value == '') {
          return;
        }
        if (difficultyLevelId.value == '') {
          return;
        }
        arrvQuestionnaire_Sim.value =
          await vQuestionnaire_Sim_GetArrvQuestionnaire_SimByKnowledgeAndDiff(
            courseKnowledgeId.value,
            difficultyLevelId.value,
            strCourseId,
          ); //编辑区域
        questionId.value = 0;
      }
      function difficulty_change() {
        console.log('difficultyLevelId', difficultyLevelId.value);
        BindDdl4EditRegionInDiv();
      }
      function knowledge_change() {
        console.log('courseKnowledgeId', courseKnowledgeId.value);
        BindDdl4EditRegionInDiv();
      }
      async function LoadData() {
        const objge_GameLevel = await ge_GameLevelEx_GetObjByGameLevelNameAsync(
          GameLevelName,
          idCurrEduCls,
          1,
        );
        if (objge_GameLevel) gameLevelId.value = objge_GameLevel.gameLevelId;
      }

      return {
        knowledgePoints,
        difficultyLevels,
        courseKnowledgeId,
        difficultyLevelId,
        questionContent,
        questionName,

        strSubmitButtonText,
        keyId,
        opType,
        componentName,
        courseId,
        canSolve,
        answerTrueOrFalse,
        teachingLog,
        options,
        selectedAnswer,
        filteredOptions,
        Clear,

        closeModal,
        confirmAddQuestion,
        GetEditDataAnswerObj,
        GetEditDataQuestionnaireObj,

        GetEditDataQuestionOptionsObj,

        questionId,
        arrvQuestionnaire_Sim,
        activeTab,
        difficulty_change,
        knowledge_change,
        questionOptions,
        refShowQuestionnaire,
        isShowOptions,
        questionTypeName,
      };
    },
  });
</script>

<style scoped>
  .add-single-choice-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1004;
  }

  .modal-content {
    position: relative;
    width: 800px;
    max-width: 90%;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 20px;
    align-self: center;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .close-button img {
    width: 30px;
    height: 30px;
  }

  .form-textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: vertical;
    height: 100px;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
  }

  .cancel-button,
  .confirm-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .cancel-button {
    background: #ccc;
  }

  .confirm-button {
    background: #007bff;
    color: #fff;
  }

  /* 响应式设计优化 */
  @media (max-width: 600px) {
    .modal-content {
      width: 90%;
      padding: 30px 20px 20px;
    }

    .form-label {
      min-width: 100px;
    }

    .radio-group {
      gap: 10px;
    }
  }
  .tabs {
    display: flex;
    margin-bottom: 1rem;
  }

  .tabs button {
    flex: 1;
    padding: 0.5rem;
    cursor: pointer;
    background: none;
    border: 1px solid #ccc;
    border-bottom: none;
  }

  .tabs button.active {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  .form-group {
    margin-bottom: 1rem;
  }
</style>
