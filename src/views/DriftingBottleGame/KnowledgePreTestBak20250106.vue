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
    <div v-if="currentQuestionIndex < questions.length">
      <div class="question">
        <h3>题目 {{ currentQuestionIndex + 1 }} / {{ questions.length }}</h3>
        <p
          >{{ questions[currentQuestionIndex].questionName }}({{
            questions[currentQuestionIndex].questionTypeName
          }})</p
        >
        <div v-if="questions[currentQuestionIndex].questionTypeName === '单选题'">
          <!-- <div>选项数:{{ questions[currentQuestionIndex].options.length }}</div> -->
          <div v-for="(option, index) in questions[currentQuestionIndex].options" :key="index">
            <input
              type="radio"
              :name="'question' + currentQuestionIndex"
              :value="option.questionOptionId"
              v-model="myAnswers[currentQuestionIndex]"
            />
            <label>{{ option.optionName }}</label>
          </div>
        </div>
        <div v-if="questions[currentQuestionIndex].questionTypeName === '填空题'">
          <input type="text" v-model="myAnswers[currentQuestionIndex]" />
        </div>
        <div v-if="questions[currentQuestionIndex].questionTypeName === '判断题'">
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
  import { useUserStore } from '@/store/modulesShare/user';
  import { questionResult } from '@/ts/FunClass/questionResult';
  import { clsQuestionnaireENExV2 } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireENExV2';
  import { clsUserAnswerResultEN } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN';
  import { enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache } from 'share-stu-study-base-lib';
  import { ge_DifficultyLevel_GetNameByDifficultyLevelIdCache } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
  import { QuestionType_GetNameByQuestionTypeIdCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
  import {
    QuestionnaireEx_CopyToExV2,
    QuestionnaireEx_GetRandomObjLstByCourseKnowledgeId,
  } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionnaireExWApi';
  import { QuestionOptionsEx_GetObjLstByQuestionId } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionOptionsExWApi';
  import { UserAnswerResultEx_SubmitUserResult } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsUserAnswerResultExWApi';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { defineComponent, ref, PropType, onMounted, computed, watchEffect } from 'vue';

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
    setup(props) {
      const userStore = useUserStore();
      const courseId = clsPubLocalStorage.courseId;
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const { moduleName, courseKnowledgeId, difficultyLevelId } = props;
      const knowledgeName = ref('');
      const difficultyLevelName = ref('');
      const answerName = ref('');
      const questions = ref<Array<clsQuestionnaireENExV2>>([]);
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
      const myAnswers = ref(Array(questions.value.length).fill(''));
      const myAnswerNames = ref(Array(questions.value.length).fill(''));

      const nextQuestion = () => {
        if (currentQuestionIndex.value < questions.value.length - 1) {
          currentQuestionIndex.value++;
        } else {
          // 确保在最后一道题后显示提交按钮
          currentQuestionIndex.value++;
        }
      };

      const prevQuestion = () => {
        if (currentQuestionIndex.value > 0) {
          currentQuestionIndex.value--;
        }
      };
      const getResult = (): questionResult[] => {
        const results: questionResult[] = [];
        for (let i = 0; i < questions.value.length; i++) {
          const questionId = questions.value[i].questionId;
          const answerId = myAnswers.value[i];
          const questionTypeId = questions.value[i].questionTypeId;
          // const idCurrEduCls = idCurrEduCls;
          const userId = userStore.userId;
          results.push({ questionId, answerId, questionTypeId, idCurrEduCls, userId });
        }
        return results;
      };
      const submitAnswers = async () => {
        const strThisFuncName = submitAnswers.name;
        const results = getResult();
        console.log('提交答案结果:', results);
        try {
          const intRecNum = await UserAnswerResultEx_SubmitUserResult(results);
          // 在这里将答案提交到数据库
          alert(`答案已提交,共提交了${intRecNum}条记录！`);
        } catch (e) {
          const strMsg = `提交答案不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      const reviewAnswers = () => {
        currentQuestionIndex.value = 0;
      };

      const getOptions = async (strQuestionId: number) => {
        const options = await QuestionOptionsEx_GetObjLstByQuestionId(strQuestionId);
        console.log('options:', options);
        return options;
      };
      const options = computed(async () => {
        console.log('currentQuestionIndex:', currentQuestionIndex);
        const questionId = questions.value[currentQuestionIndex.value].questionId;
        console.log('questionId:', questionId);
        const options = await QuestionOptionsEx_GetObjLstByQuestionId(questionId);
        console.log('options:', options);
        return options;
      });

      const answerName0 = computed(async () => {
        console.log(
          'myAnswers.value[currentQuestionIndex.value]:',
          myAnswers.value[currentQuestionIndex.value],
        );

        const questionId = questions.value[currentQuestionIndex.value].questionId;
        const questionTypeId = questions.value[currentQuestionIndex.value].questionTypeId;
        if (questionTypeId != enumQuestionType.SingleChoice_02)
          return myAnswers.value[currentQuestionIndex.value];

        const options = await QuestionOptionsEx_GetObjLstByQuestionId(questionId);

        const option = options.filter(
          (x) => x.questionOptionId == myAnswers.value[currentQuestionIndex.value],
        );
        console.log('option:', option);
        return option[0].optionName;
      });

      // watchEffect(async () => {
      //   const questionId = questions.value[currentQuestionIndex.value].questionId;
      //   options.value = await QuestionOptionsEx_GetObjLstByQuestionId(questionId);
      // });

      watchEffect(async () => {
        // console.log('myAnswers.value:', myAnswers.value);
        // console.log(
        //   'myAnswers.value[currentQuestionIndex.value]:',
        //   myAnswers.value[currentQuestionIndex.value],
        // );
        if (questions.value.length === 0) return;
        const questionId = questions.value[currentQuestionIndex.value].questionId;
        const questionTypeId = questions.value[currentQuestionIndex.value].questionTypeId;
        // console.log('questionTypeId:', questionTypeId);
        if (questionTypeId !== enumQuestionType.SingleChoice_02) {
          answerName.value = myAnswers.value[currentQuestionIndex.value];
          myAnswerNames.value[currentQuestionIndex.value] =
            myAnswers.value[currentQuestionIndex.value];
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
          console.log('myAnswerNames:', myAnswerNames.value);
        }
      });
      const LoadData = async () => {
        difficultyLevelName.value = await ge_DifficultyLevel_GetNameByDifficultyLevelIdCache(
          difficultyLevelId,
        );
        console.log('difficultyLevelName:', difficultyLevelName.value);
        knowledgeName.value = await cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache(
          courseKnowledgeId,
          courseId,
        );
        console.log('knowledgeName:', knowledgeName.value);
        const arrQuestionnaire = await QuestionnaireEx_GetRandomObjLstByCourseKnowledgeId(
          courseKnowledgeId,
          difficultyLevelId,
          courseId,
        );
        console.log('arrQuestionnaire:', arrQuestionnaire);
        const arrQuestionnaireEx = arrQuestionnaire.map(QuestionnaireEx_CopyToExV2);
        for (const objQuestionnaire of arrQuestionnaireEx) {
          objQuestionnaire.questionTypeName = await QuestionType_GetNameByQuestionTypeIdCache(
            objQuestionnaire.questionTypeId,
          );
          objQuestionnaire.options = await getOptions(objQuestionnaire.questionId);
        }
        const aa = enumQuestionType.SingleChoice_02;
        questions.value = arrQuestionnaireEx;
      };
      // 生命周期钩子
      onMounted(async () => {
        LoadData();
      });
      return {
        questions,
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
