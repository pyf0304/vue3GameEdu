<template>
  <div class="overlay">
    <div class="leaderboard-modal">
      <!-- 背景图 -->
      <img src="/imageswu/LeaderboardBG.png" alt="Leaderboard Background" class="background" />

      <!-- 
      <img src="/imageswu/BrandBackground_Empty.png" alt="Leaderboard Title" class="title" /> -->

      <!-- 标题 -->
      <div class="title-container">
        <img src="/imageswu/BrandBackground_Empty.png" alt="My Bottle Title" class="title-image" />
        <div class="title-text">我的瓶子</div>
      </div>

      <!-- 退出按钮 -->
      <button class="close-button" @click="$emit('close')" aria-label="关闭排行榜">
        <img src="/imageswu/LeaderboardClose.png" alt="关闭" />
      </button>

      <!-- 排行榜类型按钮 -->
      <div class="leaderboard-types">
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
          <div
            v-for="(question, index) in thrownQuestions"
            :key="question.questionId"
            class="question-item"
          >
            <ShowQuestionnaireCom
              :question-id="question.questionId"
              :show-options="false"
              :show-answer="false"
              :show-knowledge="false"
              :show-source="true"
              :show-score="true"
              :score="question.credits"
              :index="index"
            />
          </div>
        </div>

        <!-- 我捞的瓶子列表 -->
        <div v-if="selectedTab === 'picked'" class="question-list">
          <div
            v-for="(question, index) in pickedQuestions"
            :key="question.questionId"
            class="question-item"
          >
            <ShowQuestionnaireCom
              :key="question.questionId"
              :question-id="question.questionId"
              :show-options="false"
              :show-answer="false"
              :show-knowledge="false"
              :show-source="true"
              :show-score="true"
              :score="question.credits"
              :index="index"
            />
          </div>
        </div>
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
  import { GameBottle_PickUp_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsGameBottle_PickUpWApi';

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
        const strWhere_PickUp = `userId_PickUp='${userId}' AND bottleStateId <> '${enumBottleState.Finished_04}'`;
        const bottles_Pickup = await GameBottle_PickUp_GetObjLstAsync(strWhere_PickUp);
        for (const bottle of bottles) {
          const bottlePickUp = bottles_Pickup.find((b) => b.bottleId === bottle.bottleId);
          if (bottlePickUp) {
            bottle.credits = bottlePickUp.credits;
          }
        }
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
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .leaderboard-modal {
    position: relative;
    width: 500px; /* 修改宽度为500px */
    height: 610px; /* 修改高度为600px */
    background: transparent;
    border-radius: 10px;
    overflow: visible; /* 允许内容溢出显示 */
    padding-top: 20px; /* 为标题留出空间 */
  }

  /* 背景图 */
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0; /* 确保背景图在最底层 */
  }

  /* 标题 */
  .title {
    position: absolute;
    top: -20px; /* 上移20px，使标题悬空 */
    left: 50%;
    transform: translateX(-50%);
    width: 250px; /* 减小宽度以防换行 */
    z-index: 1; /* 确保标题位于背景图之上 */
    display: block; /* 防止图片换行 */
  }

  /* 退出按钮 */
  .close-button {
    position: absolute;
    top: -20px; /* 与标题同步上移20px */
    right: -5px; /* 向右移动 */
    background: none;
    border: none;
    cursor: pointer;
    z-index: 2; /* 确保关闭按钮位于标题之上 */
  }

  .close-button img {
    width: 30px; /* 根据实际图片大小调整 */
    height: auto;
  }

  /* 排行榜类型按钮容器 */
  .leaderboard-types {
    position: absolute;
    top: 40px; /* 上移30px，靠近标题 */
    left: 12px; /* 调整为10px，避免与背景图重叠 */
    /* transform: translateX(-50%);
    display: flex;
    flex-direction: row; /* 水平排列 */
    gap: 12px; /* 保持按钮间距 */
    /*align-items: center; */
    z-index: 1;
  }

  /* 排行榜按钮 */
  .leaderboard-button {
    position: relative;
    width: 96px; /* 160px * 0.6 = 96px */
    height: 30px; /* 50px * 0.6 = 30px */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-image 0.3s ease; /* 添加过渡效果 */
  }

  /* 按钮状态样式 */
  .gray-btn {
    background-image: url('/imageswu/LeaderboardGrayBtnRight.png');
  }

  .active-yellow-btn {
    background-image: url('/imageswu/LeaderboardYellowBtnLeft.png');
  }

  .blue-btn {
    background-image: url('/imageswu/LeaderboardBlueBtnRight.png');
  }

  /* 调整后的按钮文字 */
  .button-text {
    position: absolute;
    top: 50%;
    left: 50%; /* 居中对齐 */
    transform: translate(-50%, -50%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px; /* 调整字体大小 */
    color: #fff;
    text-shadow: 1px 1px 2px #000;
    pointer-events: none; /* 允许点击穿透到按钮 */
    text-align: center; /* 确保文字居中对齐 */
    width: 100%; /* 文字容器填满按钮 */
    white-space: nowrap; /* 防止文字换行 */
  }

  /* 当前用户信息 */
  .current-user {
    position: absolute;
    top: 75px; /* 调整为150px，避免与排行榜内容重叠 */
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    z-index: 1;
  }

  .user-avatar,
  .user-info,
  .user-medal {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .user-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .user-name {
    margin-top: 5px;
    font-size: 14px;
    font-weight: bold;
  }

  .user-info {
    text-align: center;
  }

  .user-rank,
  .user-score {
    font-size: 14px;
  }

  .user-medal img {
    width: 30px;
    height: auto;
  }

  /* 排行榜内容 */
  .leaderboard-content {
    position: absolute;
    top: 170px; /* 调整为160px，距当前用户信息10px */
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-height: 420px; /* 设置足够高度显示10行 */
    overflow-y: auto; /* 添加垂直滚动条 */
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 10px;
    z-index: 1;
  }

  .leaderboard-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .leaderboard-content li {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
  }

  .leaderboard-content li:last-child {
    border-bottom: none;
  }

  .rank {
    width: 30px;
    text-align: center;
    font-weight: bold;
  }

  .name {
    flex: 1;
    text-align: left;
    padding-left: 10px;
  }

  .score {
    width: 60px;
    text-align: right;
    padding-right: 10px;
    font-weight: bold;
  }

  /* 响应式设计 */
  @media (max-width: 500px) {
    .leaderboard-modal {
      width: 90%;
      height: 600px; /* 保持总高为600px */
      padding-top: 20px; /* 为标题留出空间 */
    }

    .title {
      width: 120px; /* 进一步减小宽度以适应小屏设备 */
    }

    .close-button {
      top: -20px; /* 与标题同步上移 */
      right: -5px;
    }

    .leaderboard-types {
      top: 20px; /* 上移30px */
      gap: 10px; /* 保持按钮间距 */
    }

    .leaderboard-button {
      width: 84px; /* 140px * 0.6 = 84px */
      height: 27px; /* 45px * 0.6 = 27px */
    }

    .button-text {
      font-size: 14px;
    }

    .current-user {
      top: 120px; /* 调整为120px，确保距排行榜按钮保持10px */
      width: 95%;
    }

    .user-avatar img {
      width: 40px;
      height: 40px;
    }

    .user-medal img {
      width: 30px;
    }

    .leaderboard-content {
      top: 130px; /* 调整为130px，距当前用户信息10px */
      width: 90%;
      max-height: 420px; /* 保持显示10行 */
    }
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
    padding: 10px;
    overflow-y: auto;
    max-height: 480px; /* 设定最大高度，避免页面无限增长 */
  }
  .title-container {
    position: absolute;
    top: -40px; /* 高出 -50px */
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  .title-image {
    width: 100%;
    height: auto;
  }

  .title-text {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 22px;
    font-weight: bold;
  }
</style>
