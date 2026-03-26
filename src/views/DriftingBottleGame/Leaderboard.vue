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
          :class="[
            'leaderboard-button',
            currentLeaderboardType === 'weekly' ? 'active-yellow-btn' : 'gray-btn',
          ]"
          @click="showWeeklyLeaderboard"
          aria-label="显示周排行榜"
        >
          <span class="button-text">周排行榜</span>
        </button>
        <button
          :class="[
            'leaderboard-button',
            currentLeaderboardType === 'all-time' ? 'blue-btn' : 'gray-btn',
          ]"
          @click="showAllTimeLeaderboard"
          aria-label="显示总排行榜"
        >
          <span class="button-text">总排行榜</span>
        </button>
      </div>

      <!-- 当前用户信息 -->
      <div class="current-user">
        <div class="user-avatar">
          <img :src="currentUser.avatar" alt="用户头像" />
          <span class="user-name">{{ currentUser.name }}({{ weekIndexStr }})</span>
        </div>
        <div class="user-info">
          <span class="user-rank">当前排名: {{ currentUser.rank + 1 }}</span>
          <span class="user-score">当前积分: {{ currentUser.score }}</span>
        </div>
        <div class="user-medal">
          <img :src="currentUser.medal" alt="勋章" />
          <span>{{ currentUser.medalName }}</span>
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

<script lang="ts">
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsEduClsCalendarEN } from '@/ts/L0Entity/DailyRunning/clsEduClsCalendarEN';
  import { clsge_UserScoreCurrWeekEN } from '@/ts/L0Entity/GameLearn/clsge_UserScoreCurrWeekEN';
  import { clsge_UserScoreCurrWeekENEx } from '@/ts/L0Entity/GameLearn/clsge_UserScoreCurrWeekENEx';
  import { clsge_UserScoreEN } from '@/ts/L0Entity/GameLearn/clsge_UserScoreEN';
  import { clsge_UserScoreENEx } from '@/ts/L0Entity/GameLearn/clsge_UserScoreENEx';
  import { ge_UserScoreCurrWeek_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsge_UserScoreCurrWeekWApi';
  import { ge_UserScore_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsge_UserScoreWApi';
  import { EduClsCalendarEx_GetEduClsCalendarByCurrentSystemDate } from '@/ts/L3ForWApiEx/DailyRunning/clsEduClsCalendarExWApi';
  import { ge_UserBadgeTtlEx_GetWearBadgeImageDirAndName } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserBadgeTtlExWApi';
  import {
    ge_UserScoreCurrWeekEx_CopyToEx,
    ge_UserScoreCurrWeekEx_FuncMapByFldName,
    ge_UserScoreCurrWeekEx_SortByCredits,
  } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserScoreCurrWeekExWApi';
  import {
    ge_UserScoreEx_CopyToEx,
    ge_UserScoreEx_FuncMapByFldName,
    ge_UserScoreEx_SortByCredits,
  } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserScoreExWApi';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { defineComponent, onMounted, ref } from 'vue';

  // 模拟排行榜数据
  interface Player {
    userId: string;
    name: string;
    score: number;
  }
  export default defineComponent({
    name: 'Leaderboard',
    setup() {
      const userStore = useUserStore();
      const courseId = clsPubLocalStorage.courseId;
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const currEduClsName = clsPubLocalStorage.eduClsName;
      const objEduClsCalendarCurrWeek = ref<clsEduClsCalendarEN | null>(null);
      const weekIndexStr = ref('');
      const badgeTypeMedal = ref(<{ ImageDir: string; Name: string }>{
        ImageDir: '/imageswu/勋章/珍珠猎手.png',
        Name: '珍珠猎手',
      });
      // 示例数据
      const weeklyLeaderboard = ref<Player[]>([
        { name: '玩家A', score: 1500, userId: '1' },
        { name: '玩家B', score: 1400, userId: '2' },
        { name: '玩家C', score: 1300, userId: '3' },
        { name: '玩家D', score: 1200, userId: '4' },
      ]);

      const allTimeLeaderboard = ref<Player[]>([
        { name: '玩家D', score: 3000, userId: '4' },
        { name: '玩家E', score: 2800, userId: '5' },
        { name: '玩家F', score: 2700, userId: '6' },
      ]);

      // 当前显示的排行榜
      const currentLeaderboard = ref<Player[]>(weeklyLeaderboard.value);

      // 记录当前排行榜类型
      const currentLeaderboardType = ref<'weekly' | 'all-time'>('weekly');
      onMounted(async () => {
        objEduClsCalendarCurrWeek.value =
          await EduClsCalendarEx_GetEduClsCalendarByCurrentSystemDate(idCurrEduCls);
        if (objEduClsCalendarCurrWeek.value == null) {
          const strMsg = `前日期不在教学班：${currEduClsName}的周历中, 请检查教学班的起止日期！`;
          console.error(strMsg);
          alert(strMsg);
          return;
          // await EduClsCalendar_AddNewObjSave(idCurrEduCls);
        }
        weekIndexStr.value = `第${objEduClsCalendarCurrWeek.value.weekIndex}周`;
        badgeTypeMedal.value = await ge_UserBadgeTtlEx_GetWearBadgeImageDirAndName(
          userStore.userId,
        );
        await fetchWeeklyLeaderboard();
        await fetchAllTimeLeaderboard();
        showWeeklyLeaderboard();
      });
      // 获取当前用户当前教学班当前周的记录
      const fetchWeeklyLeaderboard = async () => {
        try {
          if (objEduClsCalendarCurrWeek.value == null) {
            return;
          }
          const strWhere =
            `${clsge_UserScoreEN.con_IdCurrEduCls}= '${idCurrEduCls}'  ` +
            ` and ${clsge_UserScoreCurrWeekEN.con_IdEduClsCalendar}= ${objEduClsCalendarCurrWeek.value.idEduClsCalendar}`;
          const arrObjLst = await ge_UserScoreCurrWeek_GetObjLstAsync(strWhere);
          const arrObjLstEx = arrObjLst
            .sort(ge_UserScoreCurrWeekEx_SortByCredits)
            .map(ge_UserScoreCurrWeekEx_CopyToEx);
          for (let obj of arrObjLstEx) {
            await ge_UserScoreCurrWeekEx_FuncMapByFldName(
              clsge_UserScoreCurrWeekENEx.con_UserName,
              obj,
            );
          }
          weeklyLeaderboard.value = arrObjLstEx.map((record: any) => ({
            userId: record.userId,
            name: record.userName,
            score: record.credits,
          }));
        } catch (error) {
          console.error('Error fetching weekly leaderboard:', error);
        }
      };

      // 获取当前用户当前教学班的总记录
      const fetchAllTimeLeaderboard = async () => {
        try {
          const strWhere = `${clsge_UserScoreEN.con_IdCurrEduCls}= '${idCurrEduCls}' `;

          const arrObjLst = await ge_UserScore_GetObjLstAsync(strWhere);
          const arrObjLstEx = arrObjLst
            .sort(ge_UserScoreEx_SortByCredits)
            .map(ge_UserScoreEx_CopyToEx);
          for (let obj of arrObjLstEx) {
            await ge_UserScoreEx_FuncMapByFldName(clsge_UserScoreENEx.con_UserName, obj);
          }
          allTimeLeaderboard.value = arrObjLstEx.map((record: any) => ({
            userId: record.userId,
            name: record.userName,
            score: record.credits,
          }));
        } catch (error) {
          console.error('Error fetching all-time leaderboard:', error);
        }
      };

      // 当前用户数据
      const currentUser = ref({
        avatar: '/imageswu/Avatar1.png',
        userId: userStore.userId,
        name: '张三',
        rank: 5,
        score: 1450,
        medal: '/imageswu/勋章/珍珠猎手.png',
        medalName: '珍珠猎手',
      });

      // 方法定义
      const showWeeklyLeaderboard = (): void => {
        currentLeaderboard.value = weeklyLeaderboard.value;
        currentLeaderboardType.value = 'weekly';
        currentUser.value.rank = currentLeaderboard.value.findIndex(
          (player) => player.userId === currentUser.value.userId,
        );
        currentUser.value.score = currentLeaderboard.value[currentUser.value.rank]?.score || 0;
        currentUser.value.medal =
          badgeTypeMedal.value.ImageDir == ''
            ? '/imageswu/勋章/珍珠猎手.png'
            : badgeTypeMedal.value.ImageDir;
        currentUser.value.medalName =
          badgeTypeMedal.value.Name == '' ? '珍珠猎手' : badgeTypeMedal.value.Name;

        currentUser.value.avatar = '/imageswu/Avatar1.png';
        currentUser.value.name =
          currentLeaderboard.value.find((player) => player.userId === currentUser.value.userId)
            ?.name || '张三';
      };

      const showAllTimeLeaderboard = (): void => {
        currentLeaderboard.value = allTimeLeaderboard.value;
        currentLeaderboardType.value = 'all-time';
        currentUser.value.rank = currentLeaderboard.value.findIndex(
          (player) => player.userId === currentUser.value.userId,
        );
        currentUser.value.score = currentLeaderboard.value[currentUser.value.rank]?.score || 0;
        currentUser.value.medal =
          badgeTypeMedal.value.ImageDir == ''
            ? '/imageswu/勋章/珍珠猎手.png'
            : badgeTypeMedal.value.ImageDir;
        currentUser.value.medalName =
          badgeTypeMedal.value.Name == '' ? '珍珠猎手' : badgeTypeMedal.value.Name;
        currentUser.value.avatar = '/imageswu/Avatar1.png';
        currentUser.value.name =
          currentLeaderboard.value.find((player) => player.userId === currentUser.value.userId)
            ?.name || '张三';
      };
      return {
        currentLeaderboardType,
        showWeeklyLeaderboard,
        showAllTimeLeaderboard,
        currentUser,
        currentLeaderboard,
        weekIndexStr,
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
    width: 400px;
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
    gap: 12px; /* 保持按钮间距 */
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
</style>
