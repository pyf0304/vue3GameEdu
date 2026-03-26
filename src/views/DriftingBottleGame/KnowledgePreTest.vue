<template>
  <div class="pretest-container">
    <h2 v-if="showTitle">知识点前测</h2>
    <div class="info-row">
      <div class="info-item">
        <span class="info-title">模块:</span>
        <span class="info-content">{{ moduleName }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">知识点:</span>
        <span class="info-content">{{ knowledgeName }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">难度:</span>
        <span class="info-content">{{ difficultyLevelName }}</span>
      </div>
    </div>
    <div v-if="currentQuestionIndex < ge_StuBatchQuesRelaLst.length">
      <div class="question">
        <h3>题目 {{ currentQuestionIndex + 1 }} / {{ ge_StuBatchQuesRelaLst.length }}</h3>
        <p
          >{{ ge_StuBatchQuesRelaLst[currentQuestionIndex].questionName }}({{
            ge_StuBatchQuesRelaLst[currentQuestionIndex].questionTypeName
          }})</p
        >
        <div v-if="ge_StuBatchQuesRelaLst[currentQuestionIndex].questionTypeName === '单选题'">
          <!-- <div>选项数:{{ questions[currentQuestionIndex].options.length }}</div> -->
          <div
            v-for="(option, index) in ge_StuBatchQuesRelaLst[currentQuestionIndex].options"
            :key="index"
          >
            <input
              type="radio"
              :name="'question' + currentQuestionIndex"
              :value="option.questionOptionId"
              v-model="myAnswers[currentQuestionIndex]"
            />
            <label>{{ option.optionName }}</label>
          </div>
        </div>
        <div v-if="ge_StuBatchQuesRelaLst[currentQuestionIndex].questionTypeName === '填空题'">
          <input type="text" v-model="myAnswers[currentQuestionIndex]" />
        </div>
        <div v-if="ge_StuBatchQuesRelaLst[currentQuestionIndex].questionTypeName === '判断题'">
          <input
            type="radio"
            :name="'question' + currentQuestionIndex"
            value="true"
            v-model="myAnswers[currentQuestionIndex]"
          />
          <label>正确</label>
          <input
            type="radio"
            :name="'question' + currentQuestionIndex"
            value="false"
            v-model="myAnswers[currentQuestionIndex]"
          />
          <label>错误</label>
        </div>
        <div class="answer-display">
          <p>你的答案: {{ myAnswers[currentQuestionIndex] }}({{ answerName }})</p>
        </div>
      </div>
      <div class="navigation-buttons">
        <button @click="prevQuestion" :disabled="currentQuestionIndex === 0">上一题</button>
        <button @click="nextQuestion">下一题</button>
      </div>
    </div>
    <div v-else>
      <h3>所有题目已完成</h3>
      <button @click="submitAnswers">提交答案</button>
      <button @click="reviewAnswers">返回检查</button>
      <div class="answers-summary">
        <h4>做题结果:</h4>
        <ul>
          <li v-for="(answer, index) in myAnswers" :key="index">
            题目 {{ index + 1 }}: {{ answer }}({{ myAnswerNames[index] }})
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import router from '@/router';
  import { useQuestionnaireStore } from '@/store/modules/questionnaire';
  import { useUserStore } from '@/store/modulesShare/user';
  import { questionResult } from '@/ts/FunClass/questionResult';
  import { clsge_StuBatchQuesRelaENExV2 } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaENExV2';
  import { clsUserAnswerResultEN } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN';
  import { enumBatchType } from '@/ts/L0Entity/SysPara/clsBatchTypeEN';
  import { enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache } from 'share-stu-study-base-lib';
  import { ge_DifficultyLevel_GetNameByDifficultyLevelIdCache } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
  import { QuestionType_GetNameByQuestionTypeIdCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
  import { DriftingBottleGameEx_SubmitKnowledgePreTest } from '@/ts/L3ForWApiEx/GameLearn/clsDriftingBottleGameExWApi';
  import {
    ge_StuBatchQuesRelaEx_CopyToExV2,
    ge_StuBatchQuesRelaEx_GetRandomQuesByKnowledge,
  } from '@/ts/L3ForWApiEx/InteractManage/clsge_StuBatchQuesRelaExWApi';
  import { ge_GameLevelEx_GetObjByGameLevelNameAsync } from '@/ts/L3ForWApiEx/Knowledges/clsge_GameLevelExWApi';
  import { QuestionOptionsEx_GetObjLstByQuestionId } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionOptionsExWApi';
  import { UserAnswerResultEx_AddOrUpdateRecord } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsUserAnswerResultExWApi';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { defineComponent, ref, PropType, onMounted, computed, watchEffect, watch } from 'vue';

  export default defineComponent({
    name: 'KnowledgePreTest',
    props: {
      moduleName: {
        type: String as PropType<string>,
        required: true,
      },
      courseKnowledgeId: {
        type: String as PropType<string>,
        required: true,
      },
      difficultyLevelId: {
        type: String as PropType<string>,
        required: true,
      },
      showTitle: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
    },
    setup(props, { emit }) {
      const userStore = useUserStore();
      const questionnaireStore = useQuestionnaireStore();
      const userId = userStore.userId;
      const courseId = clsPubLocalStorage.courseId;
      const batchTypeId = enumBatchType.PreTest_01;
      const questionNum = 5;
      const GameLevelName = '前测';
      const gameLevelId = ref('');
      const examBatchNo = ref('');
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const { moduleName, courseKnowledgeId, difficultyLevelId } = props;
      const knowledgeName = ref('');
      const difficultyLevelName = ref('');
      const answerName = ref('');
      const ge_StuBatchQuesRelaLst = ref<Array<clsge_StuBatchQuesRelaENExV2>>([]);
      const thisConstructorName = 'KnowledgePreTest';
      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsUserAnswerResultEN._CurrTabName;
      };
      //   {
      //     question: '单选题1',
      //     type: 'single-choice',
      //     options: ['选项1', '选项2', '选项3', '选项4'],
      //   },
      //   { question: '填空题1', type: 'fill-in-the-blank' },
      //   { question: '判断题1', type: 'true-false' },
      //   {
      //     question: '单选题2',
      //     type: 'single-choice',
      //     options: ['选项1', '选项2', '选项3', '选项4'],
      //   },
      //   { question: '填空题2', type: 'fill-in-the-blank' },
      // ]);

      const currentQuestionIndex = ref(0);
      const myAnswers = ref(Array(ge_StuBatchQuesRelaLst.value.length).fill(''));
      const myAnswerNames = ref(Array(ge_StuBatchQuesRelaLst.value.length).fill(''));

      watch(ge_StuBatchQuesRelaLst, (newVal, oldVal) => {
        myAnswers.value = Array(newVal.length).fill('');
        myAnswerNames.value = Array(newVal.length).fill('');
      });
      watch(
        () => myAnswers.value,
        async (newVal, oldVal) => {
          console.log('myAnswers:(in watch)', myAnswers.value);
          await getAnswerName();
        },
        { deep: true },
      );
      async function nextQuestion() {
        const questionId = ge_StuBatchQuesRelaLst.value[currentQuestionIndex.value].questionId;
        const strAnser = myAnswers.value[currentQuestionIndex.value];
        try {
          if (currentQuestionIndex.value < ge_StuBatchQuesRelaLst.value.length - 1) {
            //MarkType是用来区分是点击提交按钮，或是其他按钮点击区别：提交按钮（值:2）提交 会进行总分核算；其他按钮传入（值：1）
            const returnDbl = await UserAnswerResultEx_AddOrUpdateRecord(
              userId,
              examBatchNo.value,
              questionId,
              idCurrEduCls,
              strAnser,
            );
            if (returnDbl >= 0.0) {
              console.log('完成答案存放成功');
            } else {
              console.log('答案存放失败-2!');
            }

            currentQuestionIndex.value++;
          } else {
            // 确保在最后一道题后显示提交按钮
            const returnDbl = await UserAnswerResultEx_AddOrUpdateRecord(
              userId,
              examBatchNo.value,
              questionId,
              idCurrEduCls,
              strAnser,
            );
            if (returnDbl >= 0.0) {
              console.log('完成答案存放成功');
            } else {
              console.log('答案存放失败-3!');
            }
            currentQuestionIndex.value++;
          }
        } catch (e) {
          console.error(e);
          alert(`提交答案失败:${e}`);
        }
      }

      async function prevQuestion() {
        if (currentQuestionIndex.value > 0) {
          currentQuestionIndex.value--;
        }
      }
      const getResult = (): questionResult[] => {
        const results: questionResult[] = [];
        for (let i = 0; i < ge_StuBatchQuesRelaLst.value.length; i++) {
          const questionId = ge_StuBatchQuesRelaLst.value[i].questionId;
          const answerId = myAnswers.value[i];
          const questionTypeId = ge_StuBatchQuesRelaLst.value[i].questionTypeId;
          // const idCurrEduCls = idCurrEduCls;
          const userId = userStore.userId;
          results.push({ questionId, answerId, questionTypeId, idCurrEduCls, userId });
        }
        return results;
      };
      async function submitAnswers() {
        const strThisFuncName = submitAnswers.name;
        const results = getResult();
        console.log('提交答案结果:', results);
        try {
          // const intRecNum = await UserAnswerResultEx_SubmitUserResult(results);

          const returnInt = await DriftingBottleGameEx_SubmitKnowledgePreTest(
            gameLevelId.value,
            examBatchNo.value,
            true,
            userId,
            idCurrEduCls,
          );

          if (returnInt == -1) {
            console.error('添加用户闯关日志出错!');
            alert('添加用户闯关日志出错!');
            return;
          }

          // 在这里将答案提交到数据库
          if (returnInt >= 3) {
            alert(`恭喜你，你已通过,获取了${returnInt}分！`);
            router.push('/SimpleBottleGame');
          } else {
            alert(`很遗憾，你没有通过,获取了${returnInt}分，重新挑战！`);
            // router.push('/drifting-bottle-game');

            emit('close'); // 触发关闭事件
            // router.push('/KnowledgeSelection'); // 导航到知识点选择界面
          }
        } catch (e) {
          const strMsg = `提交答案不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      }

      async function reviewAnswers() {
        currentQuestionIndex.value = 0;
      }

      async function getOptions(strQuestionId: number) {
        const options = await QuestionOptionsEx_GetObjLstByQuestionId(strQuestionId);
        console.log('options:', options);
        return options;
      }
      const options = computed(async () => {
        console.log('currentQuestionIndex:', currentQuestionIndex);
        const questionId = ge_StuBatchQuesRelaLst.value[currentQuestionIndex.value].questionId;
        console.log('questionId:', questionId);
        const options = await QuestionOptionsEx_GetObjLstByQuestionId(questionId);
        console.log('options:', options);
        return options;
      });
      async function getAnswerName() {
        // console.log('myAnswers.value:', myAnswers.value);
        // console.log(
        //   'myAnswers.value[currentQuestionIndex.value]:',
        //   myAnswers.value[currentQuestionIndex.value],
        // );
        if (ge_StuBatchQuesRelaLst.value.length === 0) return;
        if (currentQuestionIndex.value >= ge_StuBatchQuesRelaLst.value.length) return;
        const questionId = ge_StuBatchQuesRelaLst.value[currentQuestionIndex.value].questionId;
        const questionTypeId =
          ge_StuBatchQuesRelaLst.value[currentQuestionIndex.value].questionTypeId;
        // console.log('questionTypeId:', questionTypeId);
        if (questionTypeId !== enumQuestionType.SingleChoice_02) {
          answerName.value = myAnswers.value[currentQuestionIndex.value];
          myAnswerNames.value[currentQuestionIndex.value] = answerName.value;
        } else {
          const optionsList = await QuestionOptionsEx_GetObjLstByQuestionId(questionId);
          // console.log('optionsList:', optionsList);
          const questionOptionId = myAnswers.value[currentQuestionIndex.value];
          // console.log('questionOptionId:', questionOptionId);
          const selectedOption = optionsList.find((x) => x.questionOptionId == questionOptionId);
          answerName.value = selectedOption
            ? selectedOption.optionName
            : myAnswers.value[currentQuestionIndex.value];
          myAnswerNames.value[currentQuestionIndex.value] = answerName.value;
        }
      }
      const answerName0 = computed(async () => {
        console.log(
          'myAnswers.value[currentQuestionIndex.value]:',
          myAnswers.value[currentQuestionIndex.value],
        );

        const questionId = ge_StuBatchQuesRelaLst.value[currentQuestionIndex.value].questionId;
        const questionTypeId =
          ge_StuBatchQuesRelaLst.value[currentQuestionIndex.value].questionTypeId;
        if (questionTypeId != enumQuestionType.SingleChoice_02)
          return myAnswers.value[currentQuestionIndex.value];

        const options = await QuestionOptionsEx_GetObjLstByQuestionId(questionId);

        const option = options.filter(
          (x) => x.questionOptionId == myAnswers.value[currentQuestionIndex.value],
        );
        console.log('option:', option);
        return option[0].optionName;
      });

      watchEffect(async () => {
        console.log('myAnswers.value:(in watchEffect)', myAnswers.value);
        // console.log(
        //   'myAnswers.value[currentQuestionIndex.value]:',
        //   myAnswers.value[currentQuestionIndex.value],
        // );
        getAnswerName();
      });
      async function LoadData() {
        const objge_GameLevel = await ge_GameLevelEx_GetObjByGameLevelNameAsync(
          GameLevelName,
          idCurrEduCls,
          1,
        );
        if (objge_GameLevel) gameLevelId.value = objge_GameLevel.gameLevelId;

        difficultyLevelName.value = await ge_DifficultyLevel_GetNameByDifficultyLevelIdCache(
          difficultyLevelId,
        );
        console.log('difficultyLevelName:', difficultyLevelName.value);
        knowledgeName.value = await cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache(
          courseKnowledgeId,
          courseId,
        );
        console.log('knowledgeName:', knowledgeName.value);
        // const arrQuestionnaire = await QuestionnaireEx_GetRandomObjLstByCourseKnowledgeId(
        //   courseKnowledgeId,
        //   difficultyLevelId,
        //   courseId,
        // );
        try {
          const arrge_StuBatchQuesRela = await ge_StuBatchQuesRelaEx_GetRandomQuesByKnowledge(
            userId,
            idCurrEduCls,
            batchTypeId,
            courseKnowledgeId,
            difficultyLevelId,
            questionNum,
            gameLevelId.value,
          );
          if (arrge_StuBatchQuesRela == null || arrge_StuBatchQuesRela.length === 0) {
            alert('没有找到题目，请联系管理员！');
            return;
          }
          if (arrge_StuBatchQuesRela.length < 5) {
            const knowledgeName = await cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache(
              courseKnowledgeId,
              courseId,
            );
            const difficultyLevelName = await ge_DifficultyLevel_GetNameByDifficultyLevelIdCache(
              difficultyLevelId,
            );
            const strMsg = `知识点：${knowledgeName}，难度：${difficultyLevelName}，题目数量:${arrge_StuBatchQuesRela.length}，不足5道，请联系管理员！`;
            alert(strMsg);
            console.log(strMsg);
            emit('close'); // 触发关闭事件
            return;
          }
          // console.log('arrge_StuBatchQuesRela:', arrge_StuBatchQuesRela);
          examBatchNo.value = arrge_StuBatchQuesRela[0].examBatchNo;
          const arrge_StuBatchQuesRelaEx = arrge_StuBatchQuesRela.map(
            ge_StuBatchQuesRelaEx_CopyToExV2,
          );
          for (const objge_StuBatchQuesRela of arrge_StuBatchQuesRelaEx) {
            const objQuestionnaire = await questionnaireStore.getObjEN(
              objge_StuBatchQuesRela.questionId,
            );
            if (objQuestionnaire == null) {
              alert(
                `'没有找到questionId:${objge_StuBatchQuesRela.questionId}的题目，请联系管理员！`,
              );
              continue;
            }
            objge_StuBatchQuesRela.questionnaire = objQuestionnaire;
            objge_StuBatchQuesRela.questionName = objQuestionnaire.questionName;
            objge_StuBatchQuesRela.questionTypeId = objQuestionnaire.questionTypeId;
            objge_StuBatchQuesRela.questionTypeName =
              await QuestionType_GetNameByQuestionTypeIdCache(objQuestionnaire.questionTypeId);
            objge_StuBatchQuesRela.options = await getOptions(objQuestionnaire.questionId);
          }
          const aa = enumQuestionType.SingleChoice_02;
          ge_StuBatchQuesRelaLst.value = arrge_StuBatchQuesRelaEx;
        } catch (e) {
          console.error(e);
          alert(`'获取题目失败，请联系管理员！(${e})`);
        }
      }
      // 生命周期钩子
      onMounted(async () => {
        LoadData();
      });
      return {
        ge_StuBatchQuesRelaLst,
        currentQuestionIndex,
        myAnswers,
        nextQuestion,
        prevQuestion,
        submitAnswers,
        reviewAnswers,
        moduleName,
        knowledgeName,
        difficultyLevelName,
        getOptions,
        options,
        answerName,
        answerName0,
        myAnswerNames,
      };
    },
  });
</script>

<style scoped>
  .pretest-container {
    max-width: 900px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .info-item {
    display: flex;
    align-items: center;
  }

  .info-title {
    font-weight: bold;
    margin-right: 5px;
  }

  .info-content {
    color: #007bff;
  }

  .question {
    margin-bottom: 20px;
  }

  .answer-display {
    margin-top: 10px;
    font-style: italic;
    color: #555;
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .answers-summary {
    margin-top: 20px;
  }

  .answers-summary ul {
    list-style-type: none;
    padding: 0;
  }

  .answers-summary li {
    margin-bottom: 10px;
  }
</style>
