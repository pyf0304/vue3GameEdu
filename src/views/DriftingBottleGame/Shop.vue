<template>
  <div class="overlay">
    <div class="shop-modal">
      <!-- 拥有分值 -->
      <div class="ownership">
        <img src="/imageswu/Shop/Ownership.png" alt="Ownership" class="ownership-image" />
        <span class="ownership-value">{{ myRemainingCredits }}/{{ myCredits }}</span>
      </div>

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
              <div
                class="good"
                v-for="(good, goodIndex) in shelf"
                :key="goodIndex"
                @click="selectGood(good)"
              >
                <img :src="good.image" :alt="good.name" class="good-image" />
                <div class="good-info">
                  <p
                    >{{ good.name }} {{ good.credits }} 分<br />
                    <span v-if="good.isOwned == true" style="color: red">(已拥有)</span></p
                  >
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
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsge_UserBadgeTtlEN } from '@/ts/L0Entity/GameLearn/clsge_UserBadgeTtlEN';
  import { ge_UserBadgeTtlEx_GetObjByIdCurrEduClsAndUserId } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserBadgeTtlExWApi';
  import {
    ge_UserScoreEx_GetCreditsByUserId,
    ge_UserScoreEx_GetRemainCreditsByUserId,
    ge_UserScoreEx_RedeemBadge,
  } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserScoreExWApi';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { defineComponent, onMounted, ref } from 'vue';

  interface Good {
    id: string;
    name: string;
    credits: number;
    image: string;
    isOwned?: boolean;
  }

  export default defineComponent({
    name: 'Leaderboard',
    setup() {
      const userStore = useUserStore();
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const ge_UserBadgeTtlLst = ref<clsge_UserBadgeTtlEN[]>([]);
      const myCredits = ref<number>(0);
      const myRemainingCredits = ref<number>(0);

      const shelves = ref<Good[][]>([
        [
          { id: '07', name: '潮汐之星', credits: 5, image: '/imageswu/Shop/good01.png' },
          { id: '08', name: '珍珠猎手', credits: 10, image: '/imageswu/Shop/good02.png' },
          { id: '09', name: '海洋之心', credits: 15, image: '/imageswu/Shop/good03.png' },
          { id: '10', name: '智慧海星', credits: 20, image: '/imageswu/Shop/good04.png' },
        ],
        [
          { id: '11', name: '海浪骑士', credits: 30, image: '/imageswu/Shop/good05.png' },
          { id: '12', name: '解惑之光', credits: 40, image: '/imageswu/Shop/good06.png' },
          { id: '13', name: '海上明月', credits: 50, image: '/imageswu/Shop/good07.png' },
          { id: '14', name: '瓶中宝藏', credits: 60, image: '/imageswu/Shop/good08.png' },
        ],
        [
          { id: '15', name: '飘流瓶友', credits: 70, image: '/imageswu/Shop/good09.png' },
          { id: '16', name: '智慧灯塔', credits: 80, image: '/imageswu/Shop/good10.png' },
          { id: '17', name: '海螺之声', credits: 90, image: '/imageswu/Shop/good11.png' },
          { id: '18', name: '海洋传奇', credits: 100, image: '/imageswu/Shop/good12.png' },
        ],
      ]);
      onMounted(async () => {
        try {
          const userId = userStore.getUserId; // 替换为实际的用户ID
          myCredits.value = await ge_UserScoreEx_GetCreditsByUserId(userId, idCurrEduCls);
          myRemainingCredits.value = await ge_UserScoreEx_GetRemainCreditsByUserId(
            userId,
            idCurrEduCls,
          );
          await setIsOwned();
        } catch (error) {
          console.error('Error fetching user credits:', error);
        }
      });
      const setIsOwned = async () => {
        const userId = userStore.getUserId; // 替换为实际的用户ID
        const userBadges = await ge_UserBadgeTtlEx_GetObjByIdCurrEduClsAndUserId(
          idCurrEduCls,
          userId,
        );
        const ownedBadgeIds = new Set(userBadges.map((badge) => badge.badgeTypeId));

        shelves.value.forEach((shelf) => {
          shelf.forEach((good) => {
            good.isOwned = ownedBadgeIds.has(good.id);
          });
        });
      };
      const selectedGood = ref<Good | null>(null);
      // const userCredits = ref<number>(1234); // 当前用户所拥有的分值，至多4位数

      const selectGood = (good: any) => {
        selectedGood.value = good;
      };

      const confirmExchange = async () => {
        if (selectedGood.value) {
          try {
            const userId = userStore.userId; // 替换为实际的用户ID

            const badgeTypeId = selectedGood.value.id;
            const gameLevelId = '0'; // 替换为实际的游戏等级ID
            const courseChapterId = '0'; // 替换为实际的课程章节ID
            const updatedBy = userStore.userId; // 替换为实际的更新者ID
            const memo = '兑换徽章'; // 备注信息

            const response = await ge_UserScoreEx_RedeemBadge(
              userId,
              idCurrEduCls,
              badgeTypeId,
              gameLevelId,
              courseChapterId,
              updatedBy,
            );

            if (response) {
              alert(`你已成功兑换 ${selectedGood.value.name}`);
              myCredits.value -= selectedGood.value.credits; // 更新用户积分
              selectedGood.value = null;
              await setIsOwned();
            } else {
              alert('兑换失败，请重试');
            }
          } catch (error) {
            console.error('Error redeeming badge:', error);
            alert(`${error}`);
            selectedGood.value = null;
          }
        }
      };

      const cancelExchange = () => {
        selectedGood.value = null;
      };

      return {
        shelves,
        selectedGood,
        selectGood,
        confirmExchange,
        cancelExchange,
        myCredits,
        myRemainingCredits,
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
    width: 600px; /* 设置宽度 */
    height: 400px; /* 设置高度 */
    background-color: white;
    border-radius: 10px;
    overflow: visible; /* 确保标题高出部分可见 */
    padding: 20px;
    background-image: url('/imageswu/LeaderboardBG.png'); /* 设置背景图 */
    background-size: cover; /* 背景图完全覆盖 */
    background-position: center; /* 背景图居中 */
  }

  .ownership {
    position: absolute;
    top: 10px;
    right: 130px; /* 调整位置 */
    display: flex;
    align-items: center;
  }

  .ownership-image {
    width: 120px; /* 调整宽度 */
    height: 50px; /* 保持高度 */
    position: relative;
  }

  .ownership-value {
    position: absolute;
    right: 10px; /* 调整位置 */
    font-size: 14px; /* 调整字体大小 */
    font-weight: bold;
    color: white;
  }

  .title {
    position: relative;
    top: -50px; /* 调整 top 属性，使标题高出弹出窗 */
    left: 50%;
    transform: translateX(-50%);
    width: 300px; /* 设置宽度 */
    height: 50px; /* 设置高度 */
    object-fit: contain;
    z-index: 3000; /* 确保标题在最前面 */
  }

  .close-button {
    position: absolute;
    top: -30px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .shelves {
    display: flex;
    flex-direction: column;
    gap: 70px; /* 调整架子之间的间距 */
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
    top: -30px; /* 商品图向上升高 */
    left: 0;
    width: 100%;
    height: 100%;
  }

  .good {
    width: 60px;
    height: 100px; /* 增加高度以显示名称和分值 */
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
    white-space: nowrap; /* 确保名称和分值为一行，不换行 */
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
