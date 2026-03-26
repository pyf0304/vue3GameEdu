<template>
  <div class="game-container">
    <PageHeadCom
      ref="refPageHead"
      :title="''"
      :isShowEduCls="'true'"
      :header-height="'40'"
      :left-margin="'600'"
      :is-show-paper-iframe="'false'"
      :is-show-topic="'false'"
      :is-show-search="'false'"
      :is-show-major="'false'"
      :is-show-attention="'false'"
      :paper-id="''"
    ></PageHeadCom>
    <div class="button-item">
      <button class="action-button" @click="StartGame">
        <img src="/imageswu/GameStart/StartButtonEmpty.png" alt="开始游戏" />
        <span class="button-label">开始游戏</span>
      </button>
    </div>

    <!-- 知识点选择弹出窗 -->
    <div v-if="showKnowledgeModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>选择知识点</h2>
          <span class="close" @click="closeKnowledgeModal">&times;</span>
        </div>
        <div class="modal-body">
          <KnowledgeSelection :showTitle="false" />
        </div>
      </div>
    </div>
    <div v-if="showPreTestModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>知识点前测</h2>
          <span class="close" @click="closePreTestModal">&times;</span>
        </div>
        <div class="modal-body">
          <KnowledgePreTest
            @close="closePreTestModal"
            :moduleName="moduleName"
            :courseKnowledgeId="courseKnowledgeId"
            :difficultyLevelId="selectedDifficulty"
            :showTitle="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useUserStore } from '@/store/modulesShare/user';
  import { enumBatchType } from '@/ts/L0Entity/SysPara/clsBatchTypeEN';
  import { cc_KnowledgeModules_GetNameByKnowledgeModuleIdCache } from 'share-stu-study-base-lib';
  import { UserExamBatchRelaEx_GetObjByBatchType } from '@/ts/L3ForWApiEx/UserManage/clsUserExamBatchRelaExWApi';
  import { cc_CourseKnowledgesEx_GetKnowledgeModuleIdByCourseKnowledgeIdCache } from 'share-stu-study-base-lib';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { defineComponent, ref } from 'vue';

  import KnowledgeSelection from './KnowledgeSelection.vue';
  import KnowledgePreTest from './KnowledgePreTest.vue';
  import PageHeadCom from '@/ts/components/PageHead_Show.vue';
  import { refPageHead } from '@/ts/components/PageHead_ShowVueShare';
  export default defineComponent({
    name: 'BottleGameStart',
    components: {
      KnowledgeSelection,
      KnowledgePreTest,
      PageHeadCom,
    },
    setup() {
      const userStore = useUserStore();
      const userId = userStore.getUserId;
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const courseId = clsPubLocalStorage.courseId;
      const batchTypeId = enumBatchType.PreTest_01;
      const showKnowledgeModal = ref(false);
      const showPreTestModal = ref(false);
      const moduleName = ref('');
      const courseKnowledgeId = ref('');
      const selectedDifficulty = ref('easy');
      const showKnowledgeSelection = () => {
        showKnowledgeModal.value = true;
      };

      const closeKnowledgeModal = () => {
        showKnowledgeModal.value = false;
      };
      function closePreTestModal() {
        showPreTestModal.value = false;
        console.log('closePreTestModal:', showPreTestModal.value);
      }
      const StartGame = async () => {
        // alert('开始游戏!');
        const res = await CheckExamBatchNoInProcess();

        if (res) {
          showKnowledgeModal.value = true;
        } else {
          showPreTestModal.value = true;
        }
      };
      async function CheckExamBatchNoInProcess() {
        //题目的答案--选择问题时不需要提供答案
        const objUserExamBatchRela = await UserExamBatchRelaEx_GetObjByBatchType(
          userId,
          idCurrEduCls,
          batchTypeId,
        );
        if (objUserExamBatchRela == null) {
          return true;
        }
        selectedDifficulty.value = objUserExamBatchRela.difficultyLevelId;
        courseKnowledgeId.value = objUserExamBatchRela.courseKnowledgeId;
        const knowledgeModuleId =
          await cc_CourseKnowledgesEx_GetKnowledgeModuleIdByCourseKnowledgeIdCache(
            courseKnowledgeId.value,
            courseId,
          );
        moduleName.value = await cc_KnowledgeModules_GetNameByKnowledgeModuleIdCache(
          knowledgeModuleId,
          courseId,
        );
        return false;
      }
      return {
        showKnowledgeModal,
        showKnowledgeSelection,
        closeKnowledgeModal,
        StartGame,
        CheckExamBatchNoInProcess,
        closePreTestModal,
        moduleName,
        courseKnowledgeId,
        selectedDifficulty,
        showPreTestModal,
        refPageHead,
      };
    },
  });
</script>

<style scoped>
  .game-container {
    position: relative;
    width: 1269px; /* 固定宽度 */
    height: 773px; /* 固定高度 */
    background: url('/imageswu/GameStart/StartView.png') no-repeat center center;
    background-size: cover;
    overflow: hidden;
    border: 5px solid #000; /* 添加边框 */
    margin: auto; /* 居中对齐 */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 使容器占满整个视口高度 */
  }

  .button-item {
    position: absolute;
    top: 30%; /* 调整按钮位置 */
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .action-button {
    position: relative;
    width: 200px; /* 按钮宽度 */
    height: 100px; /* 按钮高度 */
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  .action-button img {
    width: 100%;
    height: 100%;
  }

  .button-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white; /* 文本颜色 */
    font-size: 24px; /* 文本大小 */
    font-weight: bold;
    pointer-events: none; /* 使文本不可点击 */
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #c8e8f5; /* 更明显的弹出窗背景色 */
    padding: 20px;
    border-radius: 5px;
    width: 80%;
    max-width: 800px;
    max-height: 80%;
    overflow-y: auto;
  }

  .modal-header,
  .modal-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-header {
    border-bottom: 1px solid #ccc;
  }

  .modal-footer {
    border-top: 1px solid #ccc;
    justify-content: flex-end; /* 将按钮放在右下角 */
  }

  .close {
    cursor: pointer;
    font-size: 24px;
  }

  .tabs ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  .tabs li {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #e0e0e0; /* Tab 页背景色 */
    margin-right: 5px;
    border-radius: 5px 5px 0 0;
  }

  .tabs li.active {
    font-weight: bold;
    background-color: #007bff; /* 选中Tab页背景色 */
    color: white;
    border-bottom: 2px solid #007bff;
  }

  .knowledge-content {
    max-height: 300px;
    overflow-y: auto;
    margin-top: 20px;
  }

  .knowledge-content ul {
    padding: 0;
    list-style-type: none;
  }

  .knowledge-content li {
    padding: 10px;
    cursor: pointer;
  }

  .knowledge-content li.selected {
    background-color: #3399ff; /* 更淡的选中知识点背景色 */
    color: white;
  }

  .difficulty-select {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end; /* 将难度选择框放在右边 */
  }

  .modal-footer button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .modal-footer button:hover {
    background-color: #0056b3;
  }
</style>
