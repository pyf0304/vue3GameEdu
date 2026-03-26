<template>
  <div class="overlay">
    <div class="my-bottle-modal">
      <!-- 标题 -->
      <img src="/imageswu/BrandBackground_Empty.png" alt="My Bottle Title" class="title" />

      <!-- 退出按钮 -->
      <button class="close-button" @click="$emit('close')" aria-label="关闭我的瓶子">
        <img src="/imageswu/LeaderboardClose.png" alt="关闭" />
      </button>

      <!-- Tab页选择 -->
      <div class="tabs">
        <button :class="{ active: selectedTab === 'thrown' }" @click="selectedTab = 'thrown'"
          >我扔的</button
        >
        <button :class="{ active: selectedTab === 'picked' }" @click="selectedTab = 'picked'"
          >我捞了</button
        >
      </div>

      <!-- 我扔的瓶子列表 -->
      <div v-if="selectedTab === 'thrown'" class="question-list">
        <ShowQuestionnaireCom
          v-for="question in thrownQuestions"
          :key="question.questionId"
          :question-id="question.questionId"
          :show-options="false"
          :show-answer="false"
          :show-knowledge="false"
          :index="1"
        />
      </div>

      <!-- 我捞的瓶子列表 -->
      <div v-if="selectedTab === 'picked'" class="question-list">
        <ShowQuestionnaireCom
          v-for="question in pickedQuestions"
          :key="question.questionId"
          :question-id="question.questionId"
          :show-options="false"
          :show-answer="false"
          :show-knowledge="false"
          :index="1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';

  import ShowQuestionnaireCom from '@/ts/components/ShowQuestionnaireItem.vue';

  import { GameBottle_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsGameBottleWApi';

  import { clsGameBottleEN } from '@/ts/L0Entity/GameLearn/clsGameBottleEN';
  import { clsGameBottle_PickUpEN } from '@/ts/L0Entity/GameLearn/clsGameBottle_PickUpEN';
  import { useUserStore } from '@/store/modulesShare/user';
  import { enumBottleState } from '@/ts/L0Entity/SysPara/clsBottleState';

  export default defineComponent({
    name: 'MyBottle',
    components: {
      ShowQuestionnaireCom,
    },
    setup() {
      const userStore = useUserStore();
      const selectedTab = ref('thrown');
      const thrownQuestions = ref<clsGameBottleEN[]>([]);
      const pickedQuestions = ref<clsGameBottleEN[]>([]);

      const loadThrownQuestions = async (): Promise<clsGameBottleEN[]> => {
        const userId = userStore.getUserId;
        const strWhere = `userId_Throw='${userId}' AND bottleStateId <> '${enumBottleState.Finished_04}'`;
        const bottles = await GameBottle_GetObjLstAsync(strWhere);
        return bottles;
      };

      const loadPickedQuestions = async (): Promise<clsGameBottleEN[]> => {
        const userId = userStore.getUserId;
        const strWhere = `${clsGameBottleEN.con_BottleId} in (select ${clsGameBottle_PickUpEN.con_BottleId} from ${clsGameBottle_PickUpEN._CurrTabName} where userId_PickUp='${userId}' AND bottleStateId <> '${enumBottleState.Finished_04}')`;
        const bottles = await GameBottle_GetObjLstAsync(strWhere);
        return bottles;
      };

      const loadQuestions = async () => {
        thrownQuestions.value = await loadThrownQuestions();
        pickedQuestions.value = await loadPickedQuestions();
      };

      // 初始加载
      onMounted(() => {
        loadQuestions();
      });

      return {
        selectedTab,
        thrownQuestions,
        pickedQuestions,
        loadQuestions,
      };
    },
  });
</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .my-bottle-modal {
    position: relative;
    width: 600px; /* 设置宽度 */
    height: 700px; /* 设置高度 */
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    background-image: url('/imageswu/MyBottleBG.png'); /* 设置背景图片 */
    background-size: cover; /* 背景图片覆盖整个容器 */
    background-position: center; /* 背景图片居中 */
  }

  .title {
    position: absolute;
    top: -50px; /* 高出 -50px */
    left: 50%;
    transform: translateX(-50%);
  }

  @keyframes rotate {
    from {
      transform: translateX(-50%) rotate(0deg);
    }
    to {
      transform: translateX(-50%) rotate(360deg);
    }
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .tabs {
    display: flex;
    gap: 10px;
    margin: 20px;
  }

  .tabs button {
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    background-color: #f0f0f0;
  }

  .tabs button.active {
    background-color: #007bff;
    color: white;
  }

  .question-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }
</style>
