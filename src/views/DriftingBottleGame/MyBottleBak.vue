<template>
  <div class="my-bottle-container">
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
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';

  import ShowQuestionnaireCom from '@/ts/components/ShowQuestionnaireItem.vue';

  import { GameBottle_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsGameBottleWApi';
  import { GameBottle_PickUp_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsGameBottle_PickUpWApi';
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
  .my-bottle-container {
    padding: 20px;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
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
  }
</style>
