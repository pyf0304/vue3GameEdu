<template>
  <div class="sel-question-type-modal">
    <div class="modal-content">
      <img
        src="/imageswu/ThrowBottle/sel-question-type-title.png"
        alt="收件箱标题"
        class="modal-title"
      />
      <button class="close-button" @click="$emit('close')" aria-label="关闭">
        <img src="/imageswu/ThrowBottle/close.png" alt="关闭" />
      </button>

      <!-- List Title -->
      <h2 class="list-title">题型</h2>

      <!-- Inbox questionTypes List -->
      <!-- 题型选择 -->
      <div class="form-group">
        <label for="question-type">请选择题型:</label>
        <select id="question-type" v-model="strQuestionTypeId">
          <option disabled value="">请选择题型</option>
          <option
            v-for="type in questionTypes"
            :key="type.questionTypeId"
            :value="type.questionTypeId"
          >
            {{ type.questionTypeNameEx }}
          </option>
        </select>
      </div>

      <!-- 操作按钮 -->
      <div class="action-buttons">
        <button class="confirm-button" @click="openAddQuestion">确认</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { clsQuestionTypeEN, enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { QuestionType_GetObjLstCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
  import { courseId_f } from '@/views/QuestionaireEdit/QuestionnaireVueShare';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { vQuestionnaireByQuesTypeEx_GetArrvQuestionnaireByQuesTypeByCourseId } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsvQuestionnaireByQuesTypeExWApi';
  import { clsvQuestionnaireByQuesTypeENEx } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaireByQuesTypeENEx';

  export default defineComponent({
    name: 'SelQuestionType',
    components: {},
    emits: [
      'close',
      'open-add-single-choice',
      'open-add-judgment-question',
      'open-add-short-answer',
    ],
    setup(_, { emit }) {
      const strQuestionTypeId = ref('');
      const questionTypes = ref<clsvQuestionnaireByQuesTypeENEx[]>([]);
      const courseId = clsPubLocalStorage.courseId;
      const openAddQuestion = () => {
        switch (strQuestionTypeId.value) {
          case enumQuestionType.SingleChoice_02:
            // showAddJudgmentQuestion.value = true;
            // emit('open-add-single-choice');
            emit('open-add-single-choice', { questionTypeId: enumQuestionType.SingleChoice_02 });
            // emit('close');
            console.log('添加-单选题');
            break;
          case enumQuestionType.ShortAnswer_10:
            // showAddJudgmentQuestion.value = true;
            // emit('open-add-short-answer');
            emit('open-add-single-choice', { questionTypeId: enumQuestionType.ShortAnswer_10 });
            // emit('close');
            console.log('添加-简答题');
            break;
          case enumQuestionType.TrueorFalse_11:
            // showAddJudgmentQuestion.value = true;
            // emit('open-add-judgment-question', { questionTypeId: enumQuestionType.TrueorFalse_11 });
            emit('open-add-single-choice', { questionTypeId: enumQuestionType.TrueorFalse_11 });
            // emit('close');
            console.log('添加-判断题');
            break;

          default:
            alert('请选择有效的题型');
        }
      };

      // 生命周期钩子
      onMounted(async () => {
        const arr = await vQuestionnaireByQuesTypeEx_GetArrvQuestionnaireByQuesTypeByCourseId(
          courseId,
        );
        console.log(arr);
        questionTypes.value = arr; //.filter((item) => item.isExercise == true);
      });
      return {
        questionTypes,
        openAddQuestion,

        strQuestionTypeId,
      };
    },
  });
</script>

<style scoped>
  .sel-question-type-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1002; /* 确保位于其他模态窗口之上 */
  }

  .modal-content {
    position: relative;
    width: 600px;
    max-width: 90%;
    background: url('/imageswu/ThrowBottle/background1.png') no-repeat center center;
    background-size: cover;
    border-radius: 10px;
    padding: 40px 30px 30px; /* 将底部内边距从60px改为30px */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-title {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: auto;
  }

  .close-button {
    position: absolute;
    top: -20px;
    right: -5px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .close-button img {
    width: 30px;
    height: 30px;
  }

  .list-title {
    align-self: flex-start; /* 左对齐 */
    width: 100%; /* 使标题占满容器宽度 */
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 10px; /* 增加左边距 */
    font-size: 20px;
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }

  .sel-question-type {
    width: 100%;
    max-height: 400px;
    overflow-y: auto; /* 添加滚动条 */
    margin-top: 10px; /* 调整与标题的间距 */
  }

  .sel-question-type ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sel-question-type li {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    transition: background 0.3s;
  }

  .sel-question-type li:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .serial-number {
    margin-right: 10px;
    font-weight: bold;
    color: #fff;
  }

  .clsQuestionTypeEN-title {
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }

  /* 响应式设计 */
  @media (max-width: 500px) {
    .modal-content {
      width: 90%;
      padding: 30px 20px 20px; /* 进一步减少底部内边距 */
    }

    .modal-title {
      width: 150px;
      top: -25px;
    }

    .close-button img {
      width: 25px;
      height: 25px;
    }

    .list-title {
      font-size: 18px;
      margin-top: 15px;
      margin-bottom: 8px;
    }

    .sel-question-type {
      max-height: 300px;
      margin-top: 8px;
    }

    .sel-question-type li {
      padding: 8px;
    }

    .serial-number {
      margin-right: 8px;
      font-size: 14px;
    }

    .clsQuestionTypeEN-title {
      font-size: 14px;
    }
  }
</style>
