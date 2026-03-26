<template>
  <div class="overlay">
    <div class="achievement-modal">
      <!-- 拥有分值 -->
      <div class="ownership">
        <img src="/imageswu/Shop/Ownership.png" alt="Ownership" class="ownership-image" />
        <span class="ownership-value">{{ myCredits }}</span>
      </div>

      <!-- 标题 -->
      <img src="/imageswu/AchievementTitle.png" alt="Achievement Title" class="title" />

      <!-- 退出按钮 -->
      <button class="close-button" @click="$emit('close')" aria-label="关闭成就">
        <img src="/imageswu/LeaderboardClose.png" alt="关闭" />
      </button>

      <!-- 徽章架子 -->
      <div class="shelves">
        <div class="shelf" v-for="(shelf, shelfIndex) in shelves" :key="shelfIndex">
          <img src="/imageswu/Shop/GoodsShelf.png" alt="Goods Shelf" class="shelf-image" />
          <div class="goods">
            <div
              class="good"
              v-for="(good, goodIndex) in shelf"
              :key="goodIndex"
              @click="toggleWearBadge(good)"
            >
              <img :src="good.image" :alt="good.name" class="good-image" />
              <div class="good-info">
                <p>{{ good.name }}</p>
                <span v-if="good.isWorn" style="color: red">(已配戴)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import {
    ge_UserScoreEx_GetCreditsByUserId,
    ge_UserScoreEx_GetRemainCreditsByUserId,
  } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserScoreExWApi';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import {
    ge_UserBadgeTtlEx_CopyToEx,
    ge_UserBadgeTtlEx_FuncMapImageDir,
    ge_UserBadgeTtlEx_SetWearStatus,
  } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserBadgeTtlExWApi';
  import {
    ge_UserBadgeTtlEx_FuncMap_BadgeTypeName,
    ge_UserBadgeTtlEx_GetObjByIdCurrEduClsAndUserId,
  } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserBadgeTtlExWApi';

  interface Badge {
    id: string;
    name: string;
    image: string;
    isWorn?: boolean;
  }

  export default defineComponent({
    name: 'Achievement',
    setup() {
      const userStore = useUserStore();
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const myCredits = ref<number>(0);
      const shelves = ref<Badge[][]>([]);
      const currentWornBadgeImage = ref<string>('/imageswu/Shop/Ownership.png');

      const toggleWearBadge = async (badge: Badge) => {
        try {
          const userId = userStore.getUserId; // 替换为实际的用户ID
          const response = await ge_UserBadgeTtlEx_SetWearStatus(
            userId,
            idCurrEduCls,
            badge.id,
            !badge.isWorn,
            userId,
          );
          if (response) {
            badge.isWorn = !badge.isWorn;
            if (badge.isWorn) {
              currentWornBadgeImage.value = badge.image;
            } else if (currentWornBadgeImage.value === badge.image) {
              currentWornBadgeImage.value = '/imageswu/Shop/Ownership.png';
            }
            await getAchievementData();
          } else {
            alert('设置配戴状态失败，请重试');
          }
        } catch (error) {
          console.error('Error setting wear status:', error);
          alert('设置配戴状态失败，请重试');
        }
      };

      const getAchievementData = async () => {
        try {
          const userId = userStore.getUserId; // 替换为实际的用户ID

          const userBadges = await ge_UserBadgeTtlEx_GetObjByIdCurrEduClsAndUserId(
            idCurrEduCls,
            userId,
          );
          const userBadgesEx = userBadges.map(ge_UserBadgeTtlEx_CopyToEx);
          for (const badge of userBadgesEx) {
            await ge_UserBadgeTtlEx_FuncMap_BadgeTypeName(badge);
            await ge_UserBadgeTtlEx_FuncMapImageDir(badge);
          }
          const badgeShelves: Badge[][] = [];
          for (let i = 0; i < userBadgesEx.length; i += 4) {
            badgeShelves.push(
              userBadgesEx.slice(i, i + 4).map((badge) => ({
                id: badge.badgeTypeId,
                name: badge.badgeTypeName,
                image: badge.imageDir,
                isWorn: badge.isWorn,
              })),
            );
          }
          shelves.value = badgeShelves;
          const wornBadge = userBadgesEx.find((badge) => badge.isWorn);
          if (wornBadge) {
            currentWornBadgeImage.value = wornBadge.imageDir;
          }
        } catch (error) {
          console.error('Error fetching user badges:', error);
        }
      };

      onMounted(async () => {
        try {
          const userId = userStore.getUserId; // 替换为实际的用户ID
          const idCurrEduCls = clsPubLocalStorage.idCurrEduCls; // 替换为实际的课程ID
          myCredits.value = await ge_UserScoreEx_GetCreditsByUserId(userId, idCurrEduCls);
          console.log('myCredits:', myCredits.value);
          await getAchievementData();
        } catch (error) {
          console.error('Error fetching user badges:', error);
        }
      });

      return {
        myCredits,
        shelves,
        toggleWearBadge,
        currentWornBadgeImage,
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

  .achievement-modal {
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
    right: 30px; /* 调整位置 */
    display: flex;
    align-items: center;
  }

  .ownership-image {
    width: 100px; /* 调整宽度 */
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
    gap: 60px; /* 调整架子之间的间距 */
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
</style>
