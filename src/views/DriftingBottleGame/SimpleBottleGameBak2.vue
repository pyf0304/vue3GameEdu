<template>
  <div class="game-container">
    <div
      class="bottle"
      v-for="(bottle, index) in bottles"
      :key="index"
      @click="pickBottle(index)"
      :style="{ top: `${bottle.top}px`, left: `${bottle.left}%` }"
    >
      <img src="/imageswu/bottle.png" alt="Bottle" />
    </div>
    <div class="buttons-container">
      <div class="button-item">
        <button class="action-button simple-mode-button" @click="simpleMode">
          <img src="/imageswu/SimpleMode.png" alt="简单模块" />
        </button>
        <!-- <span class="button-label">简单模块</span> -->
      </div>
      <div class="button-item">
        <button class="action-button" @click="throwBottle">
          <img src="/imageswu/bottle_empty.png" alt="扔瓶子" />
        </button>
        <span class="button-label">扔瓶子</span>
      </div>
      <div class="button-item">
        <button class="action-button" @click="catchBottle">
          <img src="/imageswu/NetBag1.png" alt="捞一个" />
        </button>
        <span class="button-label">捞一个</span>
      </div>
      <div class="button-item">
        <button class="action-button" @click="myBottles">
          <img src="/imageswu/MyBottles.png" alt="我的瓶子" />
        </button>
        <span class="button-label">我的瓶子</span>
      </div>
    </div>

    <!-- 顶部按钮 -->
    <div class="top-buttons-container">
      <div class="button-item">
        <button class="action-button" @click="shop">
          <img src="/imageswu/StoreIcon.png" alt="商店" />
        </button>
        <span class="button-label">商店</span>
      </div>
      <div class="button-item">
        <button class="action-button" @click="openLeaderboard">
          <img src="/imageswu/LeaderboardIcon.png" alt="排行榜" />
        </button>
        <span class="button-label">排行榜</span>
      </div>
      <div class="button-item">
        <button class="action-button" @click="achievements">
          <img src="/imageswu/AchievementIcon.png" alt="成就" />
        </button>
        <span class="button-label">成就</span>
      </div>
    </div>
    <!-- 排行榜弹窗 -->
    <Leaderboard v-if="showLeaderboard" @close="closeLeaderboard" />
  </div>
</template>

<script lang="ts">
  import { ref, onMounted, defineProps, defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import Leaderboard from './Leaderboard.vue';
  // 定义瓶子类型
  interface Bottle {
    top: number;
    left: number;
  }
  export default defineComponent({
    name: 'BadgeTypeEdit',
    components: {
      // 组件注册
      Leaderboard,
    },

    // 定义组件属性
    props: {
      bottleCount: {
        type: Number,
        default: 15,
      },
    },
    setup(props) {
      // 状态控制排行榜弹窗显示
      const showLeaderboard = ref(false);

      // 打开排行榜弹窗
      const openLeaderboard = (): void => {
        showLeaderboard.value = true;
      };
      // 关闭排行榜弹窗
      const closeLeaderboard = (): void => {
        showLeaderboard.value = false;
      };
      const router = useRouter();
      // 响应式瓶子数组
      const bottles = ref<Bottle[]>([]);

      // 生成随机整数
      const getRandomInt = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      // 生成瓶子位置
      const generateBottles = (): void => {
        bottles.value = [];
        for (let i = 0; i < props.bottleCount; i++) {
          const top = getRandomInt(200, 500); // 垂直位置在200px到500px之间
          const left = getRandomInt(10, 90); // 水平位置为10%到90%
          bottles.value.push({ top, left });
        }
      };

      // 方法定义
      const pickBottle = (index: number): void => {
        alert(`你捡到了第 ${index + 1} 个瓶子!`);
      };

      const throwBottle = (): void => {
        alert('你扔了一个瓶子!');
      };

      const catchBottle = (): void => {
        alert('你捞了一个瓶子!');
      };

      const myBottles = (): void => {
        alert('这是你的瓶子!');
      };

      const shop = (): void => {
        alert('打开商店!');
      };

      const leaderboard = (): void => {
        router.push('/Leaderboard');
        alert('查看排行榜!');
      };

      const achievements = (): void => {
        alert('查看成就!');
      };
      const simpleMode = (): void => {
        alert('进入简单模块!');
      };
      // 生命周期钩子
      onMounted(() => {
        generateBottles();
      });
      return {
        bottles,
        pickBottle,
        throwBottle,
        catchBottle,
        myBottles,
        shop,
        leaderboard,
        achievements,
        simpleMode,
        openLeaderboard,
        closeLeaderboard,
        showLeaderboard,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义
    },
  });
</script>

<style scoped>
  .game-container {
    position: relative;
    width: 1269px; /* 固定宽度 */
    height: 773px; /* 固定高度 */
    background: url('/imageswu/background1.jpg') no-repeat center center;
    background-size: cover;
    overflow: hidden;
    border: 5px solid #000; /* 添加边框 */
    margin: auto; /* 居中对齐 */
  }

  .bottle {
    position: absolute;
    animation: float 5s ease-in-out infinite;
  }

  .bottle img {
    width: 50px;
    height: auto;
  }

  /* 浮动动画 */
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  /* 底部按钮容器 */
  .buttons-container {
    position: absolute;
    bottom: 20px;
    left: 30px; /* 距离左边100px */
    display: flex;
    flex-direction: row; /* 水平排列 */
    align-items: flex-end; /* 下沿对齐 */
    gap: 30px; /* 增加按钮间距 */
  }

  .button-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end; /* 保证内容向下对齐 */
  }

  .action-button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .action-button img {
    width: 60px;
    height: auto;
    transition: transform 0.2s;
  }

  .action-button img:hover {
    transform: scale(1.1);
  }

  .button-label {
    margin-top: 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: #fff;
    text-shadow: 2px 2px 4px #000;
  }

  /* 简单模块按钮特定样式 */
  .simple-mode-button img {
    width: 180px; /* 增大简单模块按钮的图标宽度 */
  }

  /* 顶部按钮容器 */
  .top-buttons-container {
    position: absolute;
    top: 20px;
    left: 100px; /* 距离左边100px */
    display: flex;
    flex-direction: row; /* 水平排列 */
    gap: 30px; /* 增加按钮间距 */
  }

  .top-buttons-container .button-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-buttons-container .action-button img {
    width: 60px;
    height: auto;
    transition: transform 0.2s;
  }

  .top-buttons-container .action-button img:hover {
    transform: scale(1.1);
  }

  .top-buttons-container .button-label {
    margin-top: 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: #fff;
    text-shadow: 2px 2px 4px #000;
  }
</style>
