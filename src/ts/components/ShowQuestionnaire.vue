<template>
  <div class="pretest-container">
    <div v-if="showKnowledge === true" class="info-row">
      <div class="info-item">
        <span class="info-title">知识点:</span>
        <span class="info-content">{{ knowledgeName }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">难度:</span>
        <span class="info-content">{{ difficultyLevelName }}</span>
      </div>
    </div>
    <div class="question">
      <p>{{ questionName }}({{ questionTypeName }})</p>
      <p v-if="questionContent.length > 0">{{ questionContent }}</p>

      <div v-if="questionTypeName === '单选题' && showOptions === true">
        <!-- <div>选项数:{{ questions[currentQuestionIndex].options.length }}</div> -->
        <div v-for="(option, index) in arrQuestionOptions" :key="index">
          <input
            type="radio"
            :name="'question' + currentQuestionIndex"
            :value="option.questionOptionId"
            v-model="answerContent"
          />
          <label>{{ option.optionNameEx }}</label>
        </div>
      </div>
      <div v-if="questionTypeName === '填空题'">
        <input type="text" v-model="answerContent" />
      </div>
      <div v-if="questionTypeName === '判断题'">
        <input
          type="radio"
          :name="'question' + currentQuestionIndex"
          value="true"
          v-model="answerContent"
        />
        <label>正确</label>
        <input
          type="radio"
          :name="'question' + currentQuestionIndex"
          value="false"
          v-model="answerContent"
        />
        <label>错误</label>
      </div>
      <div v-if="showAnswer === true" class="answer-display">
        <p>你的答案: ({{ answerNameEx }})</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useQuestionnaireStore } from '@/store/modules/questionnaire';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';

  import { clsQuestionTypeEN, enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache } from 'share-stu-study-base-lib';
  import { ge_DifficultyLevel_GetNameByDifficultyLevelIdCache } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
  import { QuestionType_GetObjByQuestionTypeIdCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
  import { cc_KnowledgesExamLibRelaEx_GetKnowledgeIdLstByQuestionId } from '@/ts/L3ForWApiEx/Knowledges/clscc_KnowledgesExamLibRelaExWApi';
  import {
    QuestionOptionsEx_CopyToEx,
    QuestionOptionsEx_GetObjLstByQuestionId,
  } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionOptionsExWApi';
  import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { defineComponent, ref, PropType, onMounted, computed } from 'vue';
  import { clsQuestionOptionsENEx } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsENEx';

  export default defineComponent({
    name: 'ShowQuestionnaire',
    props: {
      questionId: {
        type: Number as PropType<number>,
        required: true,
      },
      questionnaire: {
        type: clsQuestionnaireEN as PropType<clsQuestionnaireEN>,
        required: false,
      },
      showTitle: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
      showOptions: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
      showAnswer: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
      showKnowledge: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
    },
    setup(props, { emit }) {
      const userStore = useUserStore();

      const questionnaireStore = useQuestionnaireStore();
      const userId = userStore.userId;
      const courseId = clsPubLocalStorage.courseId;
      const objQuestionnaire = ref<clsQuestionnaireEN>();
      const arrQuestionOptions = ref<Array<clsQuestionOptionsENEx>>();
      const questionName = ref('');
      const questionContent = ref('');
      const objQuestionType = ref<clsQuestionTypeEN>();
      const questionTypeName = computed(() => {
        return objQuestionType.value?.questionTypeName;
      });
      const knowledgeName = ref('');
      const difficultyLevelName = ref('');
      const answerContent = ref('');
      // const answerNameEx = ref('');

      const thisConstructorName = 'ShowQuestionnaire';
      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsQuestionnaireEN._CurrTabName;
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

      async function getOptions(strQuestionId: number) {
        const options = await QuestionOptionsEx_GetObjLstByQuestionId(strQuestionId);
        const optionExs = options.map(QuestionOptionsEx_CopyToEx);
        console.log('options:', options);
        let intIndex = 0;
        if (options.length > 0 || options[0].optionTitle == '') {
          for (const objOption of optionExs) {
            objOption.optionTitle = String.fromCharCode(65 + intIndex);
            objOption.optionNameEx = `${objOption.optionTitle}、${objOption.optionName}`;
            intIndex++;
          }
        }
        return optionExs;
      }

      const options = computed(async () => {
        console.log('currentQuestionIndex:', currentQuestionIndex);
        const questionId = props.questionId;
        console.log('questionId:', questionId);
        const options = await QuestionOptionsEx_GetObjLstByQuestionId(questionId);
        console.log('options:', options);
        return options;
      });
      // 计算 answerNameEx 的值
      const answerNameEx = computed(() => {
        if (objQuestionType.value == null) return '';
        if (arrQuestionOptions.value == null) return '';
        switch (objQuestionType.value.questionTypeId) {
          case enumQuestionType.SingleChoice_02:
            return arrQuestionOptions.value.find(
              (option) => option.questionOptionId === answerContent.value,
            )?.optionNameEx;
          case enumQuestionType.TrueorFalse_11:
            return answerContent.value === 'true' ? '正确' : '错误';
          case enumQuestionType.FillInBlank_01:
            return answerContent.value;
          default:
            return answerContent.value;
        }
      });
      // watchEffect(async () => {
      //   const questionId = questions.value[currentQuestionIndex.value].questionId;
      //   options.value = await QuestionOptionsEx_GetObjLstByQuestionId(questionId);
      // });

      async function LoadData() {
        if (props.questionnaire == null) {
          const objQuestionnaire_Temp = await questionnaireStore.getObjEN(props.questionId);
          if (objQuestionnaire_Temp == null) {
            alert(`没有找到questionId:${props.questionId}的题目，请联系管理员！`);
            console.error(`没有找到questionId:${props.questionId}的题目，请联系管理员！`);
            return;
          }
          objQuestionnaire.value = objQuestionnaire_Temp;
        } else {
          objQuestionnaire.value = props.questionnaire;
          console.log('objQuestionnaire:', objQuestionnaire.value);
        }
        questionName.value = objQuestionnaire.value.questionName;
        questionContent.value = objQuestionnaire.value.questionContent;
        difficultyLevelName.value = await ge_DifficultyLevel_GetNameByDifficultyLevelIdCache(
          objQuestionnaire.value.difficultyLevelId,
        );
        console.log('difficultyLevelName:', difficultyLevelName.value);
        const objQuestionType_Temp = await QuestionType_GetObjByQuestionTypeIdCache(
          objQuestionnaire.value.questionTypeId,
        );
        if (objQuestionType_Temp == null) {
          alert(
            `没有找到questionTypeId:${objQuestionnaire.value.questionTypeId}的题型，请联系管理员！`,
          );
          console.error(
            `没有找到questionTypeId:${objQuestionnaire.value.questionTypeId}的题型，请联系管理员！`,
          );
          return;
        }
        objQuestionType.value = objQuestionType_Temp;

        if (objQuestionType.value.questionTypeId === enumQuestionType.SingleChoice_02) {
          arrQuestionOptions.value = await getOptions(props.questionId);
        } else {
          arrQuestionOptions.value = [];
        }
        const arrCourseKnowledgeId = await cc_KnowledgesExamLibRelaEx_GetKnowledgeIdLstByQuestionId(
          props.questionId,
        );
        if (arrCourseKnowledgeId.length === 0) {
          alert('没有找到知识点，请联系管理员！');
          return;
        }
        console.log('arrCourseKnowledgeId:', arrCourseKnowledgeId);
        let intIndex = 0;
        for (const strKnowledgeId of arrCourseKnowledgeId) {
          const strKnowledgeName = await cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache(
            strKnowledgeId,
            courseId,
          );
          if (strKnowledgeName == null || strKnowledgeName === '') {
            const strCourseName = clsPubLocalStorage.courseName;
            alert(
              `在课程:[${strCourseName}]中没有找到知识点:${strKnowledgeId}的对象，请联系管理员！`,
            );
            return;
          }
          console.log('strKnowledgeName:', strKnowledgeName);
          if (intIndex === 0) {
            knowledgeName.value = ` ${strKnowledgeName}(主)`;
          } else {
            knowledgeName.value += `, ${strKnowledgeName}`;
          }
          intIndex++;
        }
        console.log('knowledgeName:', knowledgeName.value);
        // const arrQuestionnaire = await QuestionnaireEx_GetRandomObjLstByCourseKnowledgeId(
        //   courseKnowledgeId,
        //   difficultyLevelId,
        //   courseId,
        // );
      }
      // 生命周期钩子
      onMounted(async () => {
        if (props.questionId == 0) return;
        LoadData();
      });
      return {
        objQuestionnaire,
        objQuestionType,
        currentQuestionIndex,

        knowledgeName,
        difficultyLevelName,
        getOptions,
        options,
        answerContent,

        questionName,
        questionContent,
        questionTypeName,
        arrQuestionOptions,
        answerNameEx,
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
