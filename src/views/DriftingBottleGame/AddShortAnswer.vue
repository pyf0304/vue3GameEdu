<template>
  <div class="add-short-answer-modal">
    <div class="modal-content">
      <h2>添加简答题</h2>
      <button class="close-button" @click="closeModal" aria-label="关闭">
        <img src="/imageswu/ShiXinDa/close.png" alt="关闭" />
      </button>

      <!-- 题型 -->
      <div class="form-group row">
        <label class="col-form-label col-sm-2">题型:</label>
        <div class="col-sm-10">
          <span>简答题</span>
        </div>
      </div>

      <!-- 请选择知识点 -->
      <div class="form-group row">
        <label for="knowledge-point" class="col-form-label col-sm-2">请选择知识点:</label>
        <div class="col-sm-10">
          <select id="knowledge-point" v-model="courseKnowledgeId" class="form-select">
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
          <select id="difficulty" v-model="difficultyLevelId" class="form-select">
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
      <div class="form-group row" v-if="canSolve === 'yes'">
        <label class="col-form-label col-sm-2">我的答案:</label>
        <div class="col-sm-10">
          <textarea
            id="answer-content"
            v-model="answerContent"
            placeholder="请输入答案内容"
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
    </div>
  </div>
</template>

<script lang="ts">
  import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
  import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
  import { cc_CourseKnowledges_GetObjLstCache } from 'share-stu-study-base-lib';
  import { ge_DifficultyLevel_GetObjLstCache } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue';
  import Questionnaire_EditEx from '../QuestionaireEdit/Questionnaire_EditEx';

  import { useUserStore } from '@/store/modulesShare/user';
  import {
    CourseId_Session,
    refQuestionnaire_Edit,
  } from '../QuestionaireEdit/QuestionnaireVueShare';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { enumge_LevelModeType } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
  import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
  import cc_KnowledgesExamLibRela_EditEx from '../Knowledges/cc_KnowledgesExamLibRela_EditEx';
  import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
  import { refcc_KnowledgesExamLibRela_Edit } from '@/views/Knowledges/cc_KnowledgesExamLibRelaVueShare';
  import { refAnswer_Edit } from '../QuestionaireEdit/AnswerVueShare';
  import { Answer_EditEx } from '../QuestionaireEdit/Answer_EditEx';
  import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
  import { enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { refGameBottle_Edit } from '@/views/GameLearn/GameBottleVueShare';
  import { GameBottle_EditEx } from '@/views/GameLearn/GameBottle_EditEx';
  import { clsGameBottleEN } from '@/ts/L0Entity/GameLearn/clsGameBottleEN';
  import { enumBottleState } from '@/ts/L0Entity/SysPara/clsBottleState';

  export default defineComponent({
    name: 'AddShortAnswer',
    setup(_, { emit }) {
      const userStore = useUserStore();
      const canSolve = ref(''); // 用于跟踪是否会解答

      const teachingLog = ref(''); // 用于学习日志
      const answerContent = ref('');
      const isShow = ref(true);
      const keyId = ref('');
      const questionId = ref(0);
      const opType = ref('AddWithMaxId');
      const componentName = ref('');
      const idStudentInfo = ref('');

      // 使用 getCurrentInstance 获取组件实例
      const instance = getCurrentInstance();
      if (instance && instance.type.name) {
        componentName.value = instance.type.name;
        console.log('组件名称:', componentName.value);
      } else {
        console.warn('无法获取组件名称');
      }

      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const courseId = ref(clsPubLocalStorage.courseId);
      const knowledgePoints = ref<clscc_CourseKnowledgesEN_T[]>([]);
      const difficultyLevels = ref<clsge_DifficultyLevelEN[]>([]);
      const courseKnowledgeId = ref('');
      const difficultyLevelId = ref('');
      const questionName = ref('');
      const questionContent = ref('');
      const closeModal = () => {
        // 重置表单内容
        courseKnowledgeId.value = '';
        difficultyLevelId.value = '';
        questionName.value = '';
        questionContent.value = '';
        canSolve.value = '';
        answerContent.value = '';
        teachingLog.value = '';
        emit('close');
      };
      const confirmAddQuestion = async () => {
        if (
          !courseKnowledgeId.value ||
          !difficultyLevelId.value ||
          !questionContent.value ||
          !questionName.value ||
          !canSolve.value
        ) {
          alert('请填写所有必填项');

          return;
        }
        try {
          await btnSubmit_Click();
          // 处理添加简答题的逻辑
          alert('简答题已添加');
          emit('close');
        } catch (e) {
          console.error(e);
          alert(`添加判断题失败${e}`);
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
        pobjQuestionnaireEN.SetQuestionTypeId(enumQuestionType.ShortAnswer_10); // 题型
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
       * @param pobjGameBottleEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataGameBottleObj() {
        const pobjGameBottleEN = new clsGameBottleEN();
        pobjGameBottleEN.SetQuestionId(questionId.value); // 题目Id
        pobjGameBottleEN.SetUserId_Throw(userStore.userId); // 用户ID
        pobjGameBottleEN.SetThrowTime(clsDateTime.getTodayDateTimeStr(0)); // 扔的时间

        pobjGameBottleEN.SetBottleStateId(enumBottleState.ThrowBottle_01); // 操作方式Id
        pobjGameBottleEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjGameBottleEN.SetMemo('学生通过扔一个添加'); // 备注
        pobjGameBottleEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjGameBottleEN;
      }
      /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
      具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
      (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
    */
      async function btnSubmit_Click() {
        const strCommandText: string = strSubmitButtonText.value;
        try {
          let strInfo;
          let objEdit = new Questionnaire_EditEx(componentName.value, null);
          let objEdit_Knowledge = new cc_KnowledgesExamLibRela_EditEx(componentName.value, null);
          let objEdit_Answer = new Answer_EditEx(componentName.value, null);
          let objEdit_GameBottle = new GameBottle_EditEx(componentName.value, null);

          switch (strCommandText) {
            case '添加':
              const responseText1 = await AddNewRecord();
              break;
            case '确认添加':
              //这是一个单表的插入的代码,由于逻辑层太简单,
              //就把逻辑层合并到控制层,
              if (opType.value != 'AddWithMaxId') {
                const returnBool = await objEdit.AddNewRecordSave();
                if (returnBool == true) {
                  // this.HideDialog_Questionnaire();
                  // this.iShowList.BindGv(clsQuestionnaireEN._CurrTabName, '');
                }
                return;
              }
              //添加题目
              objEdit.isShowMsg = false;
              const returnKeyId_QuestionId = await objEdit.AddNewRecordWithReturnKeySave();
              if (returnKeyId_QuestionId == 0) {
                strInfo = '添加题目不成功！(In Questionnaire_Edit.btnSubmit_Click)';
                console.log(strInfo);
                alert(strInfo);
                return;
              }
              //添加知识点与题目关联
              questionId.value = returnKeyId_QuestionId;
              // this.HideDialog_Questionnaire();
              // this.iShowList.BindGv(clsQuestionnaireEN._CurrTabName, '');
              refcc_KnowledgesExamLibRela_Edit.value = refQuestionnaire_Edit.value;

              objEdit_Knowledge.isShowMsg = false;
              const returnKeyId_Knowledge = await objEdit_Knowledge.AddNewRecordWithReturnKeySave();

              if (returnKeyId_Knowledge == 0) {
                strInfo = '添加题目知识点不成功！(In Questionnaire_Edit.btnSubmit_Click)';
                console.log(strInfo);
                alert(strInfo);
                return;
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
                return;
              }

              //扔瓶子
              questionId.value = returnKeyId_QuestionId;
              refGameBottle_Edit.value = refQuestionnaire_Edit.value;
              objEdit_GameBottle.isShowMsg = false;
              const returnKeyId_GameBottle = await objEdit_GameBottle.AddNewRecordSave();

              if (returnKeyId_GameBottle == false) {
                strInfo = '扔瓶子不成功！(In Questionnaire_Edit.btnSubmit_Click)';
                console.log(strInfo);
                alert(strInfo);
                return;
              }
              emit('generate-bottles');
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              const returnBool = await objEdit.UpdateRecordSave();
              strInfo = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In Questionnaire_Edit.btnSubmit_Click)';

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                // this.HideDialog_Questionnaire();
                // this.iShowList.BindGv(clsQuestionnaireEN._CurrTabName, '');
              }

              break;
            default:
              const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnSubmit_Click())`;
              console.error(strMsg);
              alert(strMsg);
              break;
          }
        } catch (e) {
          const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
          console.error(strMsg);
          alert(strMsg);
        }
      }
      onMounted(async () => {
        idStudentInfo.value = clsPubLocalStorage.idStu;
        console.log('AddShortAnswer mounted');
        knowledgePoints.value = await cc_CourseKnowledges_GetObjLstCache(courseId.value);
        difficultyLevels.value = await ge_DifficultyLevel_GetObjLstCache();
        strSubmitButtonText.value = '确认添加';
      });
      return {
        knowledgePoints,
        difficultyLevels,
        courseKnowledgeId,
        difficultyLevelId,
        questionContent,
        questionName,

        confirmAddQuestion,
        strSubmitButtonText,
        keyId,
        opType,
        componentName,
        courseId,
        GetEditDataQuestionnaireObj,
        GetEditDatacc_KnowledgesExamLibRelaObj,
        canSolve,
        answerContent,
        teachingLog,
        GetEditDataAnswerObj,
        Clear,
        btnSubmit_Click,
        closeModal,
        GetEditDataGameBottleObj,
      };
    },
  });
</script>

<style scoped>
  .add-short-answer-modal {
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
