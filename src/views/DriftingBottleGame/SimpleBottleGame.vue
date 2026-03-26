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
    <!-- 拥有分值 -->
    <div class="ownership">
      <img src="/imageswu/Shop/Ownership.png" alt="Ownership" class="ownership-image" />
      <span class="ownership-value">{{ myCredits }}</span>
    </div>
    <div
      class="bottle"
      v-for="(bottle, index) in bottles"
      :key="index"
      @click="pickBottle(bottle.bottleId)"
      :style="{ top: `${bottle.posTop}px`, left: `${bottle.posLeft}%` }"
    >
      <img src="/imageswu/bottle.png" alt="Bottle" />
      <!-- 显示题型 -->
      <div
        @mouseover="showQuestionName[index] = true"
        @mouseleave="showQuestionName[index] = false"
        class="bottle-container"
      >
        <span class="is-master"> {{ bottle.isMasterStr }} </span>
        <span class="question-type"> ( </span>
        <span class="question-type"> {{ bottle.questionTypeName }} </span>
        <span class="question-type"> 、{{ bottle.difficultyLevelName }} </span>
        <span class="question-name"> 、{{ bottle.userName_Throw }} </span>
        <span class="question-type"> ) </span>
        <span class="question-type"> ({{ 5 - bottle.pickUpNum }}) </span>
        <br />
        <span class="question-name"> 知识点: {{ bottle.knowledgeNames }} </span>
        <br />
        <span class="question-name" v-show="showQuestionName[index]">
          题目: {{ bottle.questionName }}
        </span>
      </div>
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
        <span class="button-label">捞一个({{ bottleNum }})</span>
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

    <!-- 我的瓶子 -->
    <MyBottle v-if="showMyBottle" @close="closeMyBottle" />
    <!-- 我的瓶子 -->
    <Shop v-if="showShop" @close="closeShop" />
    <Achievement v-if="showAchievement" @close="closeAchievement" />

    <ShiXinDa
      v-if="showShiXinDa"
      @close="closeShiXinDa"
      @open-write-letter="openWriteLetter"
      @open-inbox-list="openInboxList"
    />
    <WriteLetter v-if="showWriteLetter" @close="showWriteLetter = false" />

    <!-- InboxList Modal -->
    <InboxList v-if="showInboxList" @close="closeInboxList" @open-message="openInboxMessage" />

    <!-- InboxMessageContent Modal -->
    <InboxMessageContent
      v-if="selectedMessage"
      :message="selectedMessage"
      @close="closeInboxMessage"
    />
    <!-- 师信达按钮 -->

    <div class="shixin-da-container">
      <button class="shixin-da-button" @click="handleShixinDa">
        <img src="/imageswu/师信达.png" alt="师信达" class="shixin-da-image" />
        <span class="shixin-da-title">师信达</span>
      </button>
    </div>

    <!-- 用户标识 -->
    <div class="user-identifier">
      <img :src="currentUser.avatar" alt="用户头像" class="user-avatar" />
      <span class="user-name">{{ currentUser.name }}</span>
    </div>
    <!-- SelQuestionType Modal -->
    <SelQuestionType
      v-if="showSelQuestionType"
      @close="closeSelQuestionType"
      @open-add-judgment-question="openAddJudgmentQuestion"
      @open-add-short-answer="openAddShortAnswer"
      @open-add-single-choice="openAddSingleChoice"
    />
    <!-- AddJudgmentQuestion Modal -->
    <AddJudgmentQuestion
      v-if="showAddJudgmentQuestion"
      ref="refQuestionnaire_Edit"
      @close="closeAddJudgmentQuestion"
      @generate-bottles="generateBottles"
    />
    <PickUpJudgmentQuestion
      v-if="showPickUpJudgmentQuestion"
      ref="refQuestionnaire_Edit"
      @close="closePickUpJudgmentQuestion"
      :bottle-id="bottleId_Pick"
    />
    <AddShortAnswer
      v-if="showAddShortAnswer"
      ref="refQuestionnaire_Edit"
      @close="closeAddShortAnswer"
      @generate-bottles="generateBottles"
    />
    <PickUpShortAnswer
      v-if="showPickUpShortAnswer"
      ref="refQuestionnaire_Edit"
      @close="closePickUpShortAnswer"
    />
    <AddSingleChoice
      v-if="showAddSingleChoice"
      ref="refQuestionnaire_Edit"
      :question-type-id="questionTypeId"
      @close="closeAddSingleChoice"
      @generate-bottles="generateBottles"
    />
    <PickUpSingleChoice
      v-if="showPickUpSingleChoice"
      ref="refQuestionnaire_Edit"
      :pick-bottle-id="bottleId_Pick"
      @close="closePickUpSingleChoice"
      @generate-bottles="generateBottles"
    />
  </div>
</template>

<script lang="ts">
  import { ref, onMounted, defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import Leaderboard from './Leaderboard.vue';
  import MyBottle from './MyBottle.vue';
  import Shop from './Shop.vue';
  import Achievement from './Achievement.vue';

  import ShiXinDa from './ShiXinDa.vue';
  import WriteLetter from './WriteLetter.vue';
  import InboxList from './InboxList.vue';
  import InboxMessageContent from './InboxMessageContent.vue';
  import { Message } from '@/views/DriftingBottleGame/ShiXinDaVueShare';
  import SelQuestionType from './SelQuestionType.vue';
  import AddJudgmentQuestion from './AddJudgmentQuestion.vue';
  import PickUpJudgmentQuestion from './PickUpJudgmentQuestion.vue';
  import AddShortAnswer from './AddShortAnswer.vue';
  import PickUpShortAnswer from './PickUpShortAnswer.vue';
  import AddSingleChoice from './AddSingleChoice.vue';
  import PickUpSingleChoice from '@/views/DriftingBottleGame/PickUpSingleChoice.vue';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import {
    CourseId_Session,
    IsVisible_Giving,
    refQuestionnaire_Edit,
  } from '../QuestionaireEdit/QuestionnaireVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { refcc_KnowledgesExamLibRela_Edit } from '@/views/Knowledges/cc_KnowledgesExamLibRelaVueShare';
  import { StudentInfoEx_GetIdStudentInfoByStuId } from 'share-stu-study-base-lib';

  import { clsGameBottleEN } from '@/ts/L0Entity/GameLearn/clsGameBottleEN';
  import { GameBottle_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsGameBottleWApi';
  import { enumBottleState } from '@/ts/L0Entity/SysPara/clsBottleState';
  import {
    GameBottleEx_CopyToEx,
    GameBottleEx_FuncMapByFldName,
  } from '@/ts/L3ForWApiEx/GameLearn/clsGameBottleExWApi';
  import { clsGameBottleENEx } from '@/ts/L0Entity/GameLearn/clsGameBottleENEx';
  import { enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import {
    idCurrEduCls_q,
    IdCurrEduCls_Session,
  } from '../QuestionnaireResult/UserAnswerResultVueShare';
  import {
    GameBottle_PickUpEx_CheckExistedPickUpBottle,
    GameBottle_PickUpEx_PickUpBottle,
  } from '@/ts/L3ForWApiEx/GameLearn/clsGameBottle_PickUpExWApi';
  import { clsGameBottle_PickUpEN } from '@/ts/L0Entity/GameLearn/clsGameBottle_PickUpEN';
  import PageHeadCom from '@/ts/components/PageHead_Show.vue';
  import { refPageHead } from '@/ts/components/PageHead_ShowVueShare';
  import { ge_UserScoreEx_GetCreditsByUserId } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserScoreExWApi';

  // 定义瓶子类型
  interface Bottle1 {
    top: number;
    left: number;
  }

  export default defineComponent({
    name: 'SimpleBottleGame',
    components: {
      Leaderboard,
      MyBottle,
      Shop,
      Achievement,
      ShiXinDa,
      WriteLetter,
      InboxList,
      InboxMessageContent,
      SelQuestionType,
      AddJudgmentQuestion,
      AddShortAnswer,
      AddSingleChoice,

      PickUpJudgmentQuestion,
      PickUpShortAnswer,
      PickUpSingleChoice,
      PageHeadCom,
    },

    // 定义组件属性
    props: {
      bottleCount: {
        type: Number,
        default: 15,
      },
    },

    setup(props) {
      const userStore = useUserStore();
      // if (userStore.getUserId == '' || userStore.getUserId == null) {
      //   userStore.userId = '0310276';
      // }
      // clsPubLocalStorage.idCurrEduCls = '00000068';
      // clsPubLocalStorage.courseId = '00000043';
      CourseId_Session.value = clsPubLocalStorage.courseId;
      CourseId_Session.value = clsPubLocalStorage.courseId;
      const myCredits = ref<number>(0);
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
      IsVisible_Giving.value = true;
      const bottleNum = ref(0);
      const questionTypeId = ref('');
      const router = useRouter();
      const bottleId_Pick = ref(0);
      const showAddJudgmentQuestion = ref(false);
      const showPickUpJudgmentQuestion = ref(false);
      const showPickUpShortAnswer = ref(false);
      const showPickUpSingleChoice = ref(false);
      const showAddShortAnswer = ref(false);
      const showAddSingleChoice = ref(false);

      const showQuestionName = ref<boolean[]>(new Array(100).fill(false));

      const closeAddJudgmentQuestion = () => {
        showAddJudgmentQuestion.value = false;
      };
      const closePickUpJudgmentQuestion = () => {
        showPickUpJudgmentQuestion.value = false;
      };
      const closeAddShortAnswer = () => {
        showAddShortAnswer.value = false;
      };
      const closePickUpShortAnswer = () => {
        showPickUpShortAnswer.value = false;
      };
      const closeAddSingleChoice = () => {
        showAddSingleChoice.value = false;
      };
      const closePickUpSingleChoice = () => {
        showPickUpSingleChoice.value = false;
      };
      const openAddJudgmentQuestion = () => {
        showAddJudgmentQuestion.value = true;
        showSelQuestionType.value = false;
      };

      const openPickUpJudgmentQuestion = () => {
        showPickUpJudgmentQuestion.value = true;
        showSelQuestionType.value = false;
      };
      const openPickUpShortAnswer = () => {
        showPickUpShortAnswer.value = true;
        showSelQuestionType.value = false;
      };
      const checkIsExistPickUpSingleChoice = async () => {
        const objGameBottle_PickUp = await GameBottle_PickUpEx_CheckExistedPickUpBottle(
          userStore.getUserId,
        );
        console.log('objGameBottle_PickUp', objGameBottle_PickUp);
        if (objGameBottle_PickUp.bottleId > 0) {
          bottleId_Pick.value = objGameBottle_PickUp.bottleId;
          showPickUpSingleChoice.value = true;
          showSelQuestionType.value = false;
          return;
        }
      };

      const openPickUpSingleChoice = async () => {
        const bolPickUpSingleChoice = await GameBottle_PickUpEx_PickUpBottle(
          bottleId_Pick.value,
          userStore.getUserId,
        );
        if (bolPickUpSingleChoice) {
          showPickUpSingleChoice.value = true;
          showSelQuestionType.value = false;
        } else {
          alert('该瓶子已被捡走！或者捡瓶不成功');
          return;
        }
        // showPickUpSingleChoice.value = true;
        // showSelQuestionType.value = false;
      };
      const openAddShortAnswer = () => {
        showAddShortAnswer.value = true;
        showSelQuestionType.value = false;
      };
      const openAddSingleChoice = (data: any) => {
        console.log('data', data);
        questionTypeId.value = data.questionTypeId;
        showAddSingleChoice.value = true;
        showSelQuestionType.value = false;
      };
      const showSelQuestionType = ref(false);

      const openSelQuestionType = () => {
        showSelQuestionType.value = true;
      };

      const closeSelQuestionType = () => {
        showSelQuestionType.value = false;
      };

      const showShiXinDa = ref(false);

      const closeShiXinDa = () => {
        showShiXinDa.value = false;
      };
      const showWriteLetter = ref(false);
      const showInboxList = ref(false);
      const selectedMessage = ref<Message | null>(null);

      const openWriteLetter = () => {
        showShiXinDa.value = false;
        showWriteLetter.value = true;
      };

      const openInboxList = () => {
        console.log('Opening inbox list');
        showShiXinDa.value = false;
        showInboxList.value = true;
      };

      const closeInboxList = () => {
        showInboxList.value = false;
      };

      const openInboxMessage = (message: Message) => {
        console.log('Opening message:', message);
        selectedMessage.value = message;
      };

      const closeInboxMessage = () => {
        selectedMessage.value = null;
      };
      // 状态控制排行榜弹窗显示
      const showLeaderboard = ref(false);

      // 打开排行榜弹窗
      const openLeaderboard = (): void => {
        showLeaderboard.value = true;
      };

      // 状态控制排行榜弹窗显示
      const showMyBottle = ref(false);
      const showShop = ref(false);
      const showAchievement = ref(false);
      // 关闭排行榜弹窗
      const closeLeaderboard = (): void => {
        showLeaderboard.value = false;
      };
      const closeMyBottle = (): void => {
        showMyBottle.value = false;
      };
      const closeShop = (): void => {
        showShop.value = false;
      };
      const closeAchievement = (): void => {
        showAchievement.value = false;
      };
      // 响应式瓶子数组
      const bottles = ref<clsGameBottleENEx[]>([]);

      // 生成随机整数
      const getRandomInt = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      // 生成瓶子位置
      const generateBottles = async (): Promise<void> => {
        const strWhere =
          `${clsGameBottleEN.con_IdCurrEduCls} = '${IdCurrEduCls_Session.value}' ` +
          `and ${clsGameBottleEN.con_BottleStateId} <>'${enumBottleState.Finished_04}' ` +
          `and ${clsGameBottleEN.con_BottleId} not in (select ${clsGameBottle_PickUpEN.con_BottleId} from GameBottle_PickUp where ${clsGameBottle_PickUpEN.con_UserId_PickUp} = '${userStore.getUserId}')`;
        const arrGameBottle = await GameBottle_GetObjLstAsync(strWhere);
        let arrGameBottleEx = arrGameBottle.map(GameBottleEx_CopyToEx);
        for (const objBottle of arrGameBottleEx) {
          await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_QuestionName, objBottle);
        }
        arrGameBottleEx = arrGameBottleEx.filter(
          (bottle: clsGameBottleENEx) => bottle.questionName !== '',
        );
        bottleNum.value = arrGameBottleEx.length;
        for (const objBottle of arrGameBottleEx) {
          await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_QuestionTypeId, objBottle);
          await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_QuestionTypeName, objBottle);
          await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_DifficultyLevelName, objBottle);
          await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_KnowledgeNames, objBottle);
          await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_UserName_Throw, objBottle);
          await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_IsMasterStr, objBottle);
        }
        bottles.value = arrGameBottleEx;

        // 网格化分布
        const gridRows = 5; // 网格行数
        const gridCols = 5; // 网格列数
        const cellWidth = 80 / gridCols; // 每个网格单元的宽度百分比
        const cellHeight = 400 / gridRows; // 每个网格单元的高度像素

        const usedCells = new Set<string>();

        for (const objBottle of bottles.value) {
          let row, col, cellKey;
          do {
            row = getRandomInt(0, gridRows - 1);
            col = getRandomInt(0, gridCols - 1);
            cellKey = `${row}-${col}`;
          } while (usedCells.has(cellKey));

          usedCells.add(cellKey);

          objBottle.posTop = 100 + row * cellHeight + getRandomInt(0, cellHeight / 2); // 垂直位置
          objBottle.posLeft = 10 + col * cellWidth + getRandomInt(0, cellWidth / 2); // 水平位置
        }
        // for (const objBottle of bottles.value) {
        //   objBottle.posTop = getRandomInt(100, 600); // 垂直位置在200px到500px之间
        //   objBottle.posLeft = getRandomInt(10, 90); // 水平位置为10%到90%
        //   // bottles.value.push({ top, left });
        // }
      };

      // 方法定义
      const pickBottle = (strBottleId: number): void => {
        const objBottle = bottles.value.find((bottle: any) => bottle.bottleId === strBottleId);
        if (objBottle === undefined) {
          return;
        }
        if (objBottle.userId_Throw === userStore.userId) {
          alert('该瓶子是您自己丢的，不能捡！');
          return;
        }
        bottleId_Pick.value = strBottleId;
        // alert(`你捡到了第 ${objBottle?.questionName} 个瓶子!`);
        switch (objBottle.questionTypeId) {
          case enumQuestionType.TrueorFalse_11: //'判断题':
            openPickUpJudgmentQuestion();
            break;
          case enumQuestionType.ShortAnswer_10: // '简答题':
            openPickUpShortAnswer();
            break;
          case enumQuestionType.SingleChoice_02: // '单选题':
            openPickUpSingleChoice();
            break;
          default:
            break;
        }
      };

      const throwBottle = (): void => {
        openSelQuestionType();
        //        alert('你扔了一个瓶子!');
      };

      const catchBottle = (): void => {
        alert('你捞了一个瓶子!');
      };

      const myBottles = (): void => {
        // alert('这是你的瓶子!');
        showMyBottle.value = true;
      };

      const shop = (): void => {
        // alert('打开商店!');
        showShop.value = true;
      };

      const achievements = (): void => {
        // alert('查看成就!');
        showAchievement.value = true;
      };

      const simpleMode = (): void => {
        alert('进入简单模块!');
      };

      // Handle '师信达' button click
      const handleShixinDa = (): void => {
        // 定义点击后的动作
        showShiXinDa.value = true;
      };

      // 当前用户数据，假设从session获取
      const currentUser = ref({
        avatar: '/imageswu/Avatar1.png',
        name: sessionStorage.getItem('UserName') || '用户',
      });

      // 生命周期钩子
      onMounted(async () => {
        clsPubLocalStorage.idStu = await StudentInfoEx_GetIdStudentInfoByStuId(userStore.getUserId);
        const userId = userStore.getUserId; // 替换为实际的用户ID
        const idCurrEduCls = clsPubLocalStorage.idCurrEduCls; // 替换为实际的课程ID
        myCredits.value = await ge_UserScoreEx_GetCreditsByUserId(userId, idCurrEduCls);
        console.log('myCredits:', myCredits.value);
        refcc_KnowledgesExamLibRela_Edit.value = refQuestionnaire_Edit.value;

        generateBottles();
        checkIsExistPickUpSingleChoice();
      });

      return {
        bottles,
        selectedMessage,
        showLeaderboard,
        currentUser,
        bottleId_Pick,
        showShiXinDa,
        showWriteLetter,
        showInboxList,
        showSelQuestionType,

        refQuestionnaire_Edit,
        refcc_KnowledgesExamLibRela_Edit,

        showAddJudgmentQuestion,
        showAddShortAnswer,
        showAddSingleChoice,

        showPickUpSingleChoice,
        showPickUpJudgmentQuestion,
        showPickUpShortAnswer,

        pickBottle,
        throwBottle,
        catchBottle,
        myBottles,
        shop,
        showShop,
        achievements,
        simpleMode,
        openLeaderboard,
        closeLeaderboard,
        handleShixinDa, // Expose the handler
        closeShiXinDa,
        openWriteLetter,
        openInboxList,
        closeInboxList,

        openInboxMessage,
        closeInboxMessage,

        openSelQuestionType,
        closeSelQuestionType,

        closeAddJudgmentQuestion,
        closeAddSingleChoice,
        closeAddShortAnswer,

        closePickUpJudgmentQuestion,
        closePickUpShortAnswer,
        closePickUpSingleChoice,
        closeShop,
        openAddShortAnswer,
        openAddJudgmentQuestion,
        openAddSingleChoice,

        openPickUpJudgmentQuestion,
        openPickUpShortAnswer,
        openPickUpSingleChoice,

        generateBottles,
        showQuestionName,
        questionTypeId,
        bottleNum,
        refPageHead,
        showMyBottle,
        closeMyBottle,
        showAchievement,
        closeAchievement,
        myCredits,
      };
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
    left: 30px; /* 距离左边30px */
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

  /* 师信达按钮容器 */
  .shixin-da-container {
    position: absolute;
    bottom: 60px; /* 增加底部距离，避免覆盖标题 */
    right: 300px;
  }

  .shixin-da-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
  }

  .shixin-da-image {
    width: 100px; /* 根据需要调整大小 */
    height: auto;
  }

  .shixin-da-title {
    margin-top: 5px;
    font-size: 16px;
    color: #fff;
    text-shadow: 1px 1px 2px #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .is-master {
    font-size: 16px;
    color: #e40a0a;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .question-type {
    font-size: 14px;
    color: #4308cc;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .question-name {
    font-size: 14px;
    color: #05010e;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  /* 可选：添加按钮悬停效果 */
  .shixin-da-button:hover .shixin-da-image {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  /* 用户标识 */
  .user-identifier {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column; /* 改为垂直排列 */
    align-items: center; /* 居中对齐 */
    background: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 8px;
  }

  .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 5px; /* 从右对齐改为下方 */
  }

  .user-name {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center; /* 居中对齐文字 */
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

  /* 响应式设计 */
  @media (max-width: 1269px) {
    .game-container {
      width: 100%;
      height: 100vh;
    }

    .buttons-container {
      left: 20px;
      gap: 20px;
    }

    .top-buttons-container {
      left: 20px;
      gap: 20px;
    }

    .shixin-da-container {
      right: 200px;
      bottom: 60px; /* 保持与常规样式一致 */
    }

    .user-identifier {
      bottom: 10px;
      right: 10px;
      padding: 8px;
    }

    .shixin-da-image {
      width: 80px;
    }

    .shixin-da-title {
      font-size: 14px; /* 调整标题字体大小以适应空间 */
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      margin-bottom: 3px;
    }

    .user-name {
      font-size: 14px;
    }
    .bottle-container {
      background-color: rgba(255, 255, 255, 0.8); /* 半透明白色背景 */
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
    }
  }
</style>
