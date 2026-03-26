<template>
  <div class="overlay">
    <div class="leaderboard-modal">
      <!-- 背景图 -->
      <img src="/imageswu/LeaderboardBG.png" alt="Leaderboard Background" class="background" />

      <!-- 标题 -->
      <img src="/imageswu/LeaderboardTitle.png" alt="Leaderboard Title" class="title" />

      <!-- 退出按钮 -->
      <button class="close-button" @click="$emit('close')" aria-label="关闭排行榜">
        <img src="/imageswu/LeaderboardClose.png" alt="关闭" />
      </button>

      <!-- 排行榜类型按钮 -->
      <div class="leaderboard-types">
        <button
          class="leaderboard-button yellow-btn"
          @click="showWeeklyLeaderboard"
          aria-label="显示周排行榜"
        >
          <span class="button-text">周排行榜</span>
        </button>
        <button
          class="leaderboard-button gray-btn"
          @click="showAllTimeLeaderboard"
          aria-label="显示总排行榜"
        >
          <span class="button-text">总排行榜</span>
        </button>
      </div>

      <!-- 当前用户信息 -->
      <div class="current-user">
        <div class="user-avatar">
          <img src="/imageswu/Avatar1.png" alt="用户头像" />
          <span class="user-name">张三</span>
        </div>
        <div class="user-info">
          <span class="user-rank">当前排名: 5</span>
          <span class="user-score">当前积分: 1450</span>
        </div>
        <div class="user-medal">
          <img src="/imageswu/勋章/珍珠猎手.png" alt="勋章" />
        </div>
      </div>

      <!-- 排行榜内容 -->
      <div class="leaderboard-content">
        <ul>
          <li v-for="(player, index) in currentLeaderboard" :key="index">
            <span class="rank">{{ index + 1 }}.</span>
            <span class="name">{{ player.name }}</span>
            <span class="score">{{ player.score }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  // 模拟排行榜数据
  interface Player {
    name: string;
    score: number;
  }

  // 示例数据
  const weeklyLeaderboard = ref<Player[]>([
    { name: '玩家A', score: 1500 },
    { name: '玩家B', score: 1400 },
    { name: '玩家C', score: 1300 },
    { name: '玩家D', score: 1200 },
    { name: '玩家E', score: 1100 },
    { name: '玩家F', score: 1000 },
    { name: '玩家G', score: 900 },
    { name: '玩家H', score: 800 },
    { name: '玩家I', score: 700 },
    { name: '玩家J', score: 600 },
    { name: '玩家K', score: 500 },
    { name: '玩家L', score: 400 },
    { name: '玩家M', score: 300 },
    { name: '玩家N', score: 200 },
    { name: '玩家O', score: 100 },
    { name: '玩家P', score: 950 },
    { name: '玩家Q', score: 850 },
    { name: '玩家R', score: 750 },
    { name: '玩家S', score: 650 },
    { name: '玩家T', score: 550 },
  ]);

  const allTimeLeaderboard = ref<Player[]>([
    { name: '玩家D', score: 3000 },
    { name: '玩家E', score: 2800 },
    { name: '玩家F', score: 2700 },
    { name: '玩家G', score: 2600 },
    { name: '玩家H', score: 2500 },
    { name: '玩家I', score: 2400 },
    { name: '玩家J', score: 2300 },
    { name: '玩家K', score: 2200 },
    { name: '玩家L', score: 2100 },
    { name: '玩家M', score: 2000 },
    { name: '玩家N', score: 1900 },
    { name: '玩家O', score: 1800 },
    { name: '玩家P', score: 1700 },
    { name: '玩家Q', score: 1600 },
    { name: '玩家R', score: 1500 },
    { name: '玩家S', score: 1400 },
    { name: '玩家T', score: 1300 },
    { name: '玩家U', score: 1200 },
    { name: '玩家V', score: 1100 },
    { name: '玩家W', score: 1000 },
  ]);

  // 当前显示的排行榜
  const currentLeaderboard = ref<Player[]>(weeklyLeaderboard.value);

  // 当前用户数据
  const currentUser = ref({
    avatar: '/imageswu/Avatar1.png',
    name: '张三',
    rank: 5,
    score: 1450,
    medal: '/imageswu/勋章/珍珠猎手.png',
  });

  const router = useRouter();

  // const closeLeaderboard = (): void => {
  //   router.back();
  // };

  const showWeeklyLeaderboard = (): void => {
    currentLeaderboard.value = weeklyLeaderboard.value;
  };

  const showAllTimeLeaderboard = (): void => {
    currentLeaderboard.value = allTimeLeaderboard.value;
  };
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
    width: 400px;
    height: 600px; /* 减少高度以适应上移20px */
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
    width: 150px; /* 减小宽度以防换行 */
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
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row; /* 水平排列 */
    gap: 12px; /* 减少按钮间距 */
    align-items: center;
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
  }

  .yellow-btn {
    background-image: url('/imageswu/LeaderboardYellowBtnLeft.png');
  }

  .gray-btn {
    background-image: url('/imageswu/LeaderboardGrayBtnRight.png');
  }

  /* 调整后的按钮文字 */
  .button-text {
    position: absolute;
    top: 50%;
    left: 50%; /* 恢复为 50% 以居中对齐 */
    transform: translate(-50%, -50%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px; /* 从16px改为14px，以防止文字换行 */
    color: #fff;
    text-shadow: 1px 1px 2px #000;
    pointer-events: none; /* 允许点击穿透到按钮 */
    text-align: center; /* 确保文字居中对齐 */
    width: 100%; /* 使文字宽度填满按钮 */
    white-space: nowrap; /* 防止文字换行 */
  }

  /* 当前用户信息 */
  .current-user {
    position: absolute;
    top: 75px; /* 从140px上移至115px，距排行榜按钮15px */
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
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
    top: 165px; /* 从180px上移至170px，距当前用户信息5-10px */
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-height: 415px;
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
      height: 530px; /* 相应减少高度 */
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
      top: 50px; /* 上移30px，靠近标题 */
      gap: 10px; /* 进一步减少按钮间距 */
    }

    .leaderboard-button {
      width: 84px; /* 140px * 0.6 = 84px */
      height: 27px; /* 45px * 0.6 = 27px */
    }

    .button-text {
      font-size: 14px;
    }

    .current-user {
      top: 45px; /* 从120px上移至105px，距排行榜按钮15px */
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
      top: 55px; /* 从180px上移至170px，距当前用户信息5-10px */
      width: 90%;
      max-height: 415px;
    }
  }
</style>
