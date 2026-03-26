<template>
  <div class="add-short-answer-modal">
    <div class="modal-content">
      <h2>捞一个简答题</h2>
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
        <label for="knowledge-point" class="col-form-label col-sm-2">知识点:</label>
        <div class="col-sm-10">
          <span>{{ objGameBottle?.knowledgeNames }}</span>
        </div>
      </div>

      <!-- 难度选择 -->
      <div class="form-group row">
        <label for="difficulty" class="col-form-label col-sm-2">难度:</label>
        <div class="col-sm-10">
          <span>{{ objGameBottle?.difficultyLevelName }}</span>
        </div>
      </div>

      <!-- 题目名称 -->
      <div class="form-group row">
        <label for="question-name" class="col-form-label col-sm-2">题目名称:</label>
        <div class="col-sm-10">
          <span>{{ objGameBottle?.questionName }}</span>
        </div>
      </div>

      <!-- 题目内容 -->
      <div class="form-group row">
        <label for="question-content" class="col-form-label col-sm-2">题目内容:</label>
        <div class="col-sm-10">
          <span>{{ questionContent }}</span>
        </div>
      </div>

      <!-- 答案选项 -->
      <div class="form-group row">
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
  import { clsGameBottleENEx } from '@/ts/L0Entity/GameLearn/clsGameBottleENEx';
  import {
    GameBottleEx_CopyToEx,
    GameBottleEx_FuncMapByFldName,
  } from '@/ts/L3ForWApiEx/GameLearn/clsGameBottleExWApi';
  import { GameBottle_GetObjByBottleIdAsync } from '@/ts/L3ForWApi/GameLearn/clsGameBottleWApi';
  import { useQuestionnaireStore } from '@/store/modules/questionnaire';

  export default defineComponent({
    name: 'AddShortAnswer',
    props: {
      bottleId: {
        type: Number,
        default: 0,
      },
    },
    setup(props, { emit }) {
      const questionnaireStore = useQuestionnaireStore();
      const objGameBottle = ref<clsGameBottleENEx>();
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

        answerContent.value = '';
        teachingLog.value = '';
        emit('close');
      };
      const confirmAddQuestion = async () => {
        if (
          !courseKnowledgeId.value ||
          !difficultyLevelId.value ||
          !questionContent.value ||
          !questionName.value
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
        const obj = await GameBottle_GetObjByBottleIdAsync(props.bottleId);
        if (obj == null) return;
        const objGameBottleEx = GameBottleEx_CopyToEx(obj);
        await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_QuestionTypeId, objGameBottleEx);
        await GameBottleEx_FuncMapByFldName(
          clsGameBottleENEx.con_QuestionTypeName,
          objGameBottleEx,
        );
        await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_QuestionName, objGameBottleEx);
        await GameBottleEx_FuncMapByFldName(
          clsGameBottleENEx.con_DifficultyLevelName,
          objGameBottleEx,
        );
        await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_KnowledgeNames, objGameBottleEx);
        await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_UserName_Throw, objGameBottleEx);
        objGameBottle.value = objGameBottleEx;
        questionContent.value = await questionnaireStore.getQuestionContent(
          objGameBottleEx.questionId,
        );

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

        answerContent,
        teachingLog,

        Clear,
        btnSubmit_Click,
        closeModal,
        objGameBottle,
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
