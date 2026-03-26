<template>
  <div class="add-judgment-question-modal">
    <div class="modal-content">
      <h2>捞一个判断题</h2>
      <button class="close-button" @click="closeModal" aria-label="关闭">
        <img src="/imageswu/ShiXinDa/close.png" alt="关闭" />
      </button>

      <!-- 题型 -->
      <div class="form-group row">
        <label class="col-form-label col-sm-2">题型:</label>
        <div class="col-sm-10">
          <span>判断题</span>
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
        <label class="col-form-label col-sm-2">请选择答案:</label>
        <div class="col-sm-10">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="true"
              :value="true"
              v-model="answerTrueOrFalse"
            />
            <label class="form-check-label" for="true">对</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="false"
              :value="false"
              v-model="answerTrueOrFalse"
            />
            <label class="form-check-label" for="false">错</label>
          </div>
        </div>
      </div>

      <!-- 学习日志文本框 -->
      <div class="form-group row">
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
    </div>
  </div>
</template>

<script lang="ts">
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue';

  import { useUserStore } from '@/store/modulesShare/user';
  import {
    CourseId_Session,
    refQuestionnaire_Edit,
  } from '../QuestionaireEdit/QuestionnaireVueShare';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { refcc_KnowledgeStuTeachLog_Edit } from '../Knowledges/cc_KnowledgeStuTeachLogVueShare';
  import { cc_KnowledgeStuTeachLog_EditEx } from '../Knowledges/cc_KnowledgeStuTeachLog_EditEx';
  import { clscc_KnowledgeStuTeachLogEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeStuTeachLogEN';
  import { clsGameBottleEN } from '@/ts/L0Entity/GameLearn/clsGameBottleEN';
  import { enumBottleState } from '@/ts/L0Entity/SysPara/clsBottleState';
  import { refGameBottle_Edit } from '../GameLearn/GameBottleVueShare';
  import { GameBottle_EditEx } from '../GameLearn/GameBottle_EditEx';
  import { clsGameBottleENEx } from '@/ts/L0Entity/GameLearn/clsGameBottleENEx';
  import { GameBottle_GetObjByBottleIdAsync } from '@/ts/L3ForWApi/GameLearn/clsGameBottleWApi';
  import {
    GameBottleEx_CopyToEx,
    GameBottleEx_FuncMapByFldName,
  } from '@/ts/L3ForWApiEx/GameLearn/clsGameBottleExWApi';
  import { useQuestionnaireStore } from '@/store/modules/questionnaire';
  import { UserAnswerResult_EditEx } from '@/views/QuestionnaireResult/UserAnswerResult_EditEx';
  import { clsUserAnswerResultEN } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN';
  import {
    IdCurrEduCls_Session,
    refUserAnswerResult_Edit,
  } from '@/views/QuestionnaireResult/UserAnswerResultVueShare';

  export default defineComponent({
    name: 'AddJudgmentQuestion',
    props: {
      bottleId: {
        type: Number,
        default: 0,
      },
    },
    setup(props, { emit }) {
      const questionnaireStore = useQuestionnaireStore();
      const userStore = useUserStore();
      const objGameBottle = ref<clsGameBottleENEx>();

      const answerTrueOrFalse = ref(false); // 用于跟踪选择的答案
      const teachingLog = ref(''); // 用于学习日志
      const answerContent = ref('');
      const isShow = ref(true);
      const keyId = ref('');
      const questionId = ref(0);
      const opType = ref('AddWithMaxId');
      const componentName = ref('');
      const idStudentInfo = ref('');
      const objEdit_GameBottle = ref<GameBottle_EditEx>(); // new GameBottle_EditEx(componentName.value, null);
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

        answerTrueOrFalse.value = false;
        teachingLog.value = '';
        emit('close');
      };
      const confirmAddQuestion = async () => {
        // if (
        //   !teachingLog.value
        // ) {
        //   alert('请填写所有必填项');

        //   return;
        // }
        try {
          const bolResult = await btnSubmit_Click();
          if (bolResult == false) {
            alert('捞瓶子做题存盘失败！');
            return;
          }
          // 处理添加判断题的逻辑
          alert('捞瓶子做判断题存盘成功！');
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
       * @param pobjUserAnswerResultEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataUserAnswerResultObj() {
        const pobjUserAnswerResultEN = new clsUserAnswerResultEN();
        pobjUserAnswerResultEN.SetQuestionId(questionId.value); // 题目
        pobjUserAnswerResultEN.SetQuestionnaireSetId(''); // 问卷集
        pobjUserAnswerResultEN.SetIdCurrEduCls(IdCurrEduCls_Session.value); // 课程
        pobjUserAnswerResultEN.SetCourseId(CourseId_Session.value); // 课程
        pobjUserAnswerResultEN.SetCourseExamPaperId(''); // 考卷
        pobjUserAnswerResultEN.SetBatchId(''); // 批次
        pobjUserAnswerResultEN.SetUserId(userStore.getUserId); // 用户ID
        pobjUserAnswerResultEN.SetAnswerText(answerTrueOrFalse.value.toString()); // 回答文本
        pobjUserAnswerResultEN.SetIsMarking(false); // 是否批阅
        pobjUserAnswerResultEN.SetScore(0); // 得分
        pobjUserAnswerResultEN.SetMarkerId(userStore.getUserId); // 打分者
        pobjUserAnswerResultEN.SetComment(''); // 批注
        pobjUserAnswerResultEN.SetIsAccessKnowledge(false); // 是否处理知识点
        pobjUserAnswerResultEN.SetMemo('学生通过捞一个添加'); // 备注
        pobjUserAnswerResultEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjUserAnswerResultEN.SetUpdUser(userStore.getUserId); // 修改人
        return pobjUserAnswerResultEN;
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
      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjGameBottleEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataGameBottleObj() {
        const pobjGameBottleEN = new clsGameBottleEN();
        if (objEdit_GameBottle.value == null) return pobjGameBottleEN;
        pobjGameBottleEN.SetBottleId(props.bottleId); // 瓶子Id
        pobjGameBottleEN.SetQuestionId(questionId.value); // 题目Id
        // pobjGameBottleEN.SetUserId_PickUp(userStore.userId); // 用户ID

        if (objEdit_GameBottle.value.tag == 'Finish') {
          pobjGameBottleEN.SetBottleStateId(enumBottleState.Finished_04); // 操作方式Id
          // pobjGameBottleEN.SetFinishedTime(clsDateTime.getTodayDateTimeStr(0)); // 扔的时间
        } else {
          pobjGameBottleEN.SetBottleStateId(enumBottleState.PickUpBottle_02); // 操作方式Id
          // pobjGameBottleEN.SetPickUpTime(clsDateTime.getTodayDateTimeStr(0)); // 扔的时间
        }
        pobjGameBottleEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjGameBottleEN.SetMemo('学生通过扔一个添加'); // 备注
        pobjGameBottleEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjGameBottleEN;
      }
      /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
      具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
      (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
    */
      async function btnSubmit_Click(): Promise<boolean> {
        const strCommandText: string = strSubmitButtonText.value;
        try {
          let strInfo;

          let objEdit_UserAnswerResult = new UserAnswerResult_EditEx(componentName.value, null);

          let objEdit_StuTeachLog = new cc_KnowledgeStuTeachLog_EditEx(componentName.value, null);

          switch (strCommandText) {
            case '添加':
              await AddNewRecord();
              return true;
            case '确认添加':
              //添加做题结果

              refUserAnswerResult_Edit.value = refQuestionnaire_Edit.value;
              objEdit_UserAnswerResult.isShowMsg = false;
              const returnBool = await objEdit_UserAnswerResult.EditRecordSave();

              if (returnBool == false) {
                strInfo = '添加做题结果不成功！(In Questionnaire_Edit.btnSubmit_Click)';
                console.log(strInfo);
                alert(strInfo);
                return false;
              }

              //题目的学习日志

              refcc_KnowledgeStuTeachLog_Edit.value = refQuestionnaire_Edit.value;
              objEdit_StuTeachLog.isShowMsg = false;
              const returnKeyId_TeachLog = await objEdit_StuTeachLog.AddNewRecordSave();

              if (returnKeyId_TeachLog == false) {
                strInfo = '添加题目学习日志不成功！(In Questionnaire_Edit.btnSubmit_Click)';
                console.log(strInfo);
                alert(strInfo);
                return false;
              }
              //捞瓶子完成后，更新瓶子状态
              if (objEdit_GameBottle.value != null) {
                refGameBottle_Edit.value = refQuestionnaire_Edit.value;
                objEdit_GameBottle.value.isShowMsg = false;
                objEdit_GameBottle.value.tag = 'Finish';
                objEdit_GameBottle.value.keyId = props.bottleId;
                const returnBool_GameBottle = await objEdit_GameBottle.value.UpdateRecordSave();

                if (returnBool_GameBottle == false) {
                  strInfo = '捞瓶子后完成操作存盘不成功！(In Questionnaire_Edit.btnSubmit_Click)';
                  console.log(strInfo);
                  alert(strInfo);
                  return false;
                }
              }
              return true;

            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,

              return true;

            default:
              const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnSubmit_Click())`;
              console.error(strMsg);
              alert(strMsg);
              return false;
          }
        } catch (e) {
          const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
          console.error(strMsg);
          alert(strMsg);
          return false;
        }
      }
      const setPickupBottleState = async () => {
        if (objEdit_GameBottle.value == null) return;
        refGameBottle_Edit.value = refQuestionnaire_Edit.value;
        objEdit_GameBottle.value.isShowMsg = false;
        objEdit_GameBottle.value.tag = 'PickUp';
        objEdit_GameBottle.value.keyId = props.bottleId;
        const returnBool_GameBottle = await objEdit_GameBottle.value.UpdateRecordSave();

        if (returnBool_GameBottle == false) {
          const strInfo = '捞瓶子不成功！(In Questionnaire_Edit.btnSubmit_Click)';
          console.log(strInfo);
          alert(strInfo);
          return;
        }
      };
      onMounted(async () => {
        const obj = await GameBottle_GetObjByBottleIdAsync(props.bottleId);
        if (obj == null) return;
        questionId.value = obj.questionId;
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
        objEdit_GameBottle.value = new GameBottle_EditEx(componentName.value, null);
        await setPickupBottleState();
        idStudentInfo.value = clsPubLocalStorage.idStu;
        console.log('AddJudgmentQuestion mounted');

        strSubmitButtonText.value = '确认添加';
      });
      return {
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

        answerTrueOrFalse,
        teachingLog,

        Clear,
        btnSubmit_Click,
        closeModal,

        objGameBottle,
        GetEditDataUserAnswerResultObj,
        GetEditDataGameBottleObj,
        GetEditDatacc_KnowledgeStuTeachLogObj,
      };
    },
  });
</script>

<style scoped>
  .add-judgment-question-modal {
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
