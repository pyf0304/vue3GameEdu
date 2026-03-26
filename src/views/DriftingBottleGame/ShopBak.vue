<template>
  <div class="overlay">
    <div class="leaderboard-modal">
      <!-- 背景图 -->
      <img src="/imageswu/LeaderboardBG.png" alt="Leaderboard Background" class="background" />

      <!-- 标题 -->
      <img src="/imageswu/ShopTitle.png" alt="Leaderboard Title" class="title" />

      <!-- 退出按钮 -->
      <button class="close-button" @click="$emit('close')" aria-label="关闭商店">
        <img src="/imageswu/LeaderboardClose.png" alt="关闭" />
      </button>

      <!-- 排行榜类型按钮 -->
      <div class="leaderboard-types">
        <!-- 商品架子 -->
        <div class="shelves">
          <div class="shelf" v-for="(shelf, shelfIndex) in shelves" :key="shelfIndex">
            <img src="/imageswu/Shop/GoodsShelf.png" alt="Goods Shelf" class="shelf-image" />
            <div class="goods">
              <div class="goods">
                <div
                  class="good"
                  v-for="(good, goodIndex) in shelf"
                  :key="goodIndex"
                  @click="selectGood(good)"
                >
                  <img :src="good.image" :alt="good.name" class="good-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 兑换确认框 -->
    <div v-if="selectedGood" class="exchange-modal">
      <div class="exchange-content">
        <p>你确定要兑换 {{ selectedGood.name }} 吗？</p>
        <button @click="confirmExchange">确定</button>
        <button @click="cancelExchange">取消</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  interface Good {
    name: string;
    credits: number;
    image: string;
  }

  export default defineComponent({
    name: 'Leaderboard',
    setup() {
      const shelves = ref<Good[][]>([
        [
          { name: '潮汐之星', credits: 5, image: '/imageswu/Shop/good01.png' },
          { name: '珍珠猎手', credits: 10, image: '/imageswu/Shop/good02.png' },
          { name: '海洋之心', credits: 15, image: '/imageswu/Shop/good03.png' },
          { name: '智慧海星', credits: 20, image: '/imageswu/Shop/good04.png' },
        ],
        [
          { name: '海浪骑士', credits: 40, image: '/imageswu/Shop/good05.png' },
          { name: '解惑之光', credits: 40, image: '/imageswu/Shop/good06.png' },
          { name: '海上明月', credits: 50, image: '/imageswu/Shop/good07.png' },
          { name: '瓶中宝藏', credits: 60, image: '/imageswu/Shop/good08.png' },
        ],
        [
          { name: '飘流瓶友', credits: 70, image: '/imageswu/Shop/good09.png' },
          { name: '智慧灯塔', credits: 80, image: '/imageswu/Shop/good10.png' },
          { name: '海螺之声', credits: 100, image: '/imageswu/Shop/good11.png' },
          { name: '海洋传奇', credits: 100, image: '/imageswu/Shop/good12.png' },
        ],
      ]);
      const selectedGood = ref<Good | null>(null);

      const selectGood = (good: any) => {
        selectedGood.value = good;
      };

      const confirmExchange = () => {
        if (selectedGood.value) {
          alert(`你已成功兑换 ${selectedGood.value.name}`);
          selectedGood.value = null;
        }
      };

      const cancelExchange = () => {
        selectedGood.value = null;
      };
      // 记录当前排行榜类型
      const currentLeaderboardType = ref<'weekly' | 'all-time'>('weekly');

      // 当前用户数据
      const currentUser = ref({
        avatar: '/imageswu/Avatar1.png',
        name: '张三',
        rank: 5,
        score: 1450,
        medal: '/imageswu/勋章/珍珠猎手.png',
      });

      return {
        currentLeaderboardType,
        currentUser,

        shelves,
        selectedGood,
        selectGood,
        confirmExchange,
        cancelExchange,
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

  .shop-modal {
    position: relative;
    width: 800px;
    height: 600px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    padding: 20px;
  }

  .title {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .shelves {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
  }

  .shelf {
    position: relative;
  }

  .shelf-image {
    width: 100%;
    height: auto;
  }

  .goods {
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .good {
    width: 60px;
    height: 60px;
    cursor: pointer;
    text-align: center;
  }

  .good-image {
    width: 50px; /* 设置宽度 */
    height: 50px; /* 设置高度 */
    object-fit: contain;
  }

  .good-info {
    margin-top: 5px;
    font-size: 12px;
  }

  .exchange-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1100;
  }

  .exchange-content {
    text-align: center;
  }

  .exchange-content p {
    margin-bottom: 20px;
  }

  .exchange-content button {
    margin: 0 10px;
    padding: 10px 20px;
    cursor: pointer;
  }
</style>
