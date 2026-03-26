<template>
  <div class="add-single-choice-modal">
    <div class="modal-content">
      <h2>捞一个单选题</h2>
      <button class="close-button" @click="closeModal" aria-label="关闭">
        <img src="/imageswu/ShiXinDa/close.png" alt="关闭" />
      </button>

      <!-- 题型 -->
      <div class="form-group row">
        <label class="col-form-label col-sm-2">题型:</label>
        <div class="col-sm-10">
          <span>单选题</span>
        </div>
      </div>
      <div>
        <ShowQuestionnaireCom
          ref="refShowQuestionnaire"
          :key="questionId"
          :questionId="questionId"
        />
      </div>

      <!-- 学习日志文本框 -->
      <div class="form-group row">
        <label for="study-log" class="col-form-label col-sm-2">我的学习日志:</label>
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
          <button class="btn btn-secondary" @click="closeModal">丢回去</button>
          <button class="btn btn-secondary" @click="prepareAnswer">准备回答</button>

          <button class="btn btn-primary" @click="confirmAddQuestion">{{
            strSubmitButtonText
          }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
  import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
  import { cc_CourseKnowledges_GetObjLstCache } from 'share-stu-study-base-lib';
  import { ge_DifficultyLevel_GetObjLstCache } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { defineComponent, getCurrentInstance, onMounted, PropType, ref } from 'vue';

  import { useUserStore } from '@/store/modulesShare/user';
  import { CourseId_Session } from '../QuestionaireEdit/QuestionnaireVueShare';

  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { enumge_LevelModeType } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
  import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
  import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
  import { Answer_EditEx } from '../QuestionaireEdit/Answer_EditEx';
  import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
  import { cc_KnowledgeStuTeachLog_EditEx } from '../Knowledges/cc_KnowledgeStuTeachLog_EditEx';
  import { clscc_KnowledgeStuTeachLogEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeStuTeachLogEN';
  import { QuestionOptions_EditEx } from '../QuestionaireEdit/QuestionOptions_EditEx';
  import { enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { GameBottle_GetObjByBottleIdAsync } from '@/ts/L3ForWApi/GameLearn/clsGameBottleWApi';
  import { clsGameBottleEN } from '@/ts/L0Entity/GameLearn/clsGameBottleEN';
  import { Questionnaire_GetObjByQuestionIdAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
  import { cc_KnowledgesExamLibRelaEx_GetKnowledgeObjByQuestionId } from '@/ts/L3ForWApiEx/Knowledges/clscc_KnowledgesExamLibRelaExWApi';
  import ShowQuestionnaireCom from '@/ts/components/ShowQuestionnaire.vue';
  import { cc_KnowledgeStuTeachLogEx_AddNewLog } from '@/ts/L3ForWApiEx/Knowledges/clscc_KnowledgeStuTeachLogExWApi';
  import { UserExamBatchRelaEx_GetObjWithAddByBatchType } from '@/ts/L3ForWApiEx/UserManage/clsUserExamBatchRelaExWApi';
  import { enumBatchType } from '@/ts/L0Entity/SysPara/clsBatchTypeEN';
  import { GameBottleEx_PickBottle } from '@/ts/L3ForWApiEx/GameLearn/clsGameBottleExWApi';
  import { GameBottle_PickUpEx_ThrowBackBottle } from '@/ts/L3ForWApiEx/GameLearn/clsGameBottle_PickUpExWApi';
  import { ClassPerfAnalysisEx_CalculateClassPerformanceForQuestion } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsClassPerfAnalysisExWApi';
  import { StuPerfAnalysisEx_CalculateStudentPerformance } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsStuPerfAnalysisExWApi';
  import { DriftingBottleGameEx_PickUpBottleSave } from '@/ts/L3ForWApiEx/GameLearn/clsDriftingBottleGameExWApi';

  export default defineComponent({
    name: 'AddSingleChoice',
    components: {
      ShowQuestionnaireCom,
    },
    props: {
      pickBottleId: {
        type: Number as PropType<number>,
        required: true,
      },
    },
    setup(props, { emit }) {
      const userStore = useUserStore();
      const courseId = clsPubLocalStorage.courseId;
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const userId = userStore.getUserId;
      const batchTypeId = enumBatchType.RetrieveSolve_06;
      const objGameBottle = ref<clsGameBottleEN>();
      const objQuestionnaire = ref<clsQuestionnaireEN>();
      const objcc_CourseKnowledges_Main = ref<clscc_CourseKnowledgesEN_T>();
      const canSolve = ref(''); // 用于跟踪是否会解答
      const answerTrueOrFalse = ref(false); // 用于跟踪选择的答案
      const teachingLog = ref(''); // 用于学习日志
      const refShowQuestionnaire = ref();
      const answerContent = ref('');
      const isShow = ref(true);
      const keyId = ref('');
      const questionId = ref(0);
      const opType = ref('AddWithMaxId');
      const componentName = ref('');
      const idStudentInfo = ref('');

      const selectedAnswer = ref('');

      // 使用 getCurrentInstance 获取组件实例
      const instance = getCurrentInstance();
      if (instance && instance.type.name) {
        componentName.value = instance.type.name;
        console.log('组件名称:', componentName.value);
      } else {
        console.warn('无法获取组件名称');
      }
      const objEdit_QuestionOptions = ref<QuestionOptions_EditEx>();

      const strSubmitButtonText = ref('确认回答');
      const strCancelButtonText = ref('丢回去');

      const knowledgePoints = ref<clscc_CourseKnowledgesEN_T[]>([]);
      const difficultyLevels = ref<clsge_DifficultyLevelEN[]>([]);
      const courseKnowledgeId = ref('');
      const difficultyLevelId = ref('');
      const questionName = ref('');
      const questionContent = ref('');
      async function closeModal() {
        const bolThrowBack = await GameBottle_PickUpEx_ThrowBackBottle(
          props.pickBottleId,
          userStore.getUserId,
        );
        if (bolThrowBack == false) {
          alert('该瓶子丢回去失败!');
          return;
        }
        // 重置表单内容
        courseKnowledgeId.value = '';
        difficultyLevelId.value = '';
        questionName.value = '';
        questionContent.value = '';
        canSolve.value = '';
        answerTrueOrFalse.value = false;
        teachingLog.value = '';

        emit('close');
      }
      async function confirmAddQuestion() {
        answerContent.value = refShowQuestionnaire.value.answerContent;
        if (!answerContent.value || answerContent.value == '') {
          alert('请填写答案！');
          return;
        }
        try {
          await btnSubmit_Click4FinishPickBottole();
          // 处理添加单选题的逻辑
          alert('答案已经提交');
          emit('close');
        } catch (e) {
          console.error(e);
          alert(`答案提交失败${e}`);
        }
      }
      async function prepareAnswer() {
        strSubmitButtonText.value = '确认回答';
        canSolve.value = 'no';
        //扔瓶子

        const returnBool_GameBottle = await GameBottleEx_PickBottle(props.pickBottleId, userId);
        if (returnBool_GameBottle == false) {
          const strInfo = '捡瓶子不成功！(In Questionnaire_Edit.btnSubmit_Click)';
          console.log(strInfo);
          alert(strInfo);
          return;
        }
      }
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
       * @param pobjcc_KnowledgesExamLibRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacc_KnowledgesExamLibRelaObj() {
        const pobjcc_KnowledgesExamLibRelaEN = new clscc_KnowledgesExamLibRelaEN();
        pobjcc_KnowledgesExamLibRelaEN.SetCourseId(CourseId_Session.value); // 课程
        pobjcc_KnowledgesExamLibRelaEN.SetQuestionId(questionId.value); // 题目
        pobjcc_KnowledgesExamLibRelaEN.SetCourseKnowledgeId(courseKnowledgeId.value); // 知识点Id
        pobjcc_KnowledgesExamLibRelaEN.SetPositiveCorrelation(0.8); // 正相关度
        pobjcc_KnowledgesExamLibRelaEN.SetNegativeCorrelation(0.2); // 负相关度
        pobjcc_KnowledgesExamLibRelaEN.SetMemo('学生通过扔一个添加'); // 备注
        pobjcc_KnowledgesExamLibRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjcc_KnowledgesExamLibRelaEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        return pobjcc_KnowledgesExamLibRelaEN;
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
        pobjAnswerEN.SetAnswerContent(answerContent.value); // 答案内容
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
       * @param pobjcc_KnowledgeStuTeachLogEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacc_KnowledgeStuTeachLogObj() {
        const pobjcc_KnowledgeStuTeachLogEN = new clscc_KnowledgeStuTeachLogEN();

        pobjcc_KnowledgeStuTeachLogEN.SetQuestionId(questionId.value); // 题目Id
        pobjcc_KnowledgeStuTeachLogEN.SetIdStudentInfo(idStudentInfo.value); // 学生流水号
        pobjcc_KnowledgeStuTeachLogEN.SetTeachingLog(teachingLog.value); // 教学日志
        pobjcc_KnowledgeStuTeachLogEN.SetCourseId(CourseId_Session.value); // 课程Id
        pobjcc_KnowledgeStuTeachLogEN.SetMemo('学生通过扔一个添加'); // 备注
        pobjcc_KnowledgeStuTeachLogEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjcc_KnowledgeStuTeachLogEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        return pobjcc_KnowledgeStuTeachLogEN;
      }

      async function btnSubmit_Click4FinishPickBottole() {
        const strCommandText: string = strSubmitButtonText.value;
        try {
          let strInfo;

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
            return;
          }
          // //用户做题的结果
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
          //   console.log('答案存放失败-4!');
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
              return;
            }
          }
          //扔瓶子

          // const returnBool_GameBottle = await GameBottle_PickUpEx_SubmitPickUpBottle(
          //   props.pickBottleId,
          //   userId,
          // );
          const returnBool_GameBottle = await DriftingBottleGameEx_PickUpBottleSave(
            userId,
            props.pickBottleId,
            answerContent.value,
          );
          if (returnBool_GameBottle == false) {
            strInfo = '扔瓶子不成功！(In Questionnaire_Edit.btnSubmit_Click)';
            console.log(strInfo);
            alert(strInfo);
            return;
          }
          // //计算表现
          // await calculatePerformance();
          emit('generate-bottles');
        } catch (e) {
          const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
          console.error(strMsg);
          alert(strMsg);
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
            // const ge_KnowledgesUserMasterResult1 =
            //   await ge_KnowledgesUserMasterEx_CalcKnowledgesUserMaster(
            //     userId,
            //     questionId.value,
            //     courseId,
            //   );

            console.log('Class Performance:', classPerfResult);
            console.log('Student Performance:', studentPerfResult);
            // console.log('ge_KnowledgesUserMasterResult1:', ge_KnowledgesUserMasterResult1);
          } catch (error) {
            console.error('Error calculating performance:', error);
          }
        }
      };
      onMounted(async () => {
        const objGameBottle_temp = await GameBottle_GetObjByBottleIdAsync(props.pickBottleId);
        if (objGameBottle_temp == null) {
          const strMsg = `gameBottleId=${props.pickBottleId}没有相应的对象！`;
          alert(strMsg);
          console.error(strMsg);
          return;
        }
        objGameBottle.value = objGameBottle_temp;
        const objQuestionnaire_Temp = await Questionnaire_GetObjByQuestionIdAsync(
          objGameBottle.value.questionId,
        );
        if (objQuestionnaire_Temp == null) {
          const strMsg = `questionId=${objGameBottle.value.questionId}没有相应的对象！`;
          alert(strMsg);
          console.error(strMsg);
          return;
        }
        objQuestionnaire.value = objQuestionnaire_Temp;
        questionId.value = objQuestionnaire.value.questionId;
        const objcc_CourseKnowledges_Main_temp =
          await cc_KnowledgesExamLibRelaEx_GetKnowledgeObjByQuestionId(questionId.value);
        if (objcc_CourseKnowledges_Main_temp == null) {
          const strMsg = `题目：${objQuestionnaire.value.questionName}没有相应的知识点！`;
          alert(strMsg);
          console.error(strMsg);
          return;
        }
        objcc_CourseKnowledges_Main.value = objcc_CourseKnowledges_Main_temp;

        idStudentInfo.value = clsPubLocalStorage.idStu;
        CourseId_Session.value = courseId;
        console.log('AddSingleChoice mounted');
        knowledgePoints.value = await cc_CourseKnowledges_GetObjLstCache(courseId);
        difficultyLevels.value = await ge_DifficultyLevel_GetObjLstCache();

        courseKnowledgeId.value = objcc_CourseKnowledges_Main.value.courseKnowledgeId;
        difficultyLevelId.value = objQuestionnaire.value.difficultyLevelId;
        questionName.value = objQuestionnaire.value.questionName;
        questionContent.value = objQuestionnaire.value.questionContent;
        strSubmitButtonText.value = '确认回答';
      });
      return {
        knowledgePoints,
        difficultyLevels,
        courseKnowledgeId,
        difficultyLevelId,
        questionContent,
        questionName,

        confirmAddQuestion,
        prepareAnswer,
        strSubmitButtonText,
        keyId,
        opType,
        componentName,
        courseId,
        GetEditDataQuestionnaireObj,
        GetEditDatacc_KnowledgesExamLibRelaObj,
        canSolve,
        answerTrueOrFalse,
        teachingLog,
        GetEditDataAnswerObj,
        Clear,
        closeModal,
        GetEditDatacc_KnowledgeStuTeachLogObj,
        selectedAnswer,
        questionId,
        refShowQuestionnaire,
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
</style>

function GameBottle_PickUpEx_ThrowBackBottle(pickBottleId: number, getUserId: string) { throw new
Error('Function not implemented.'); }
