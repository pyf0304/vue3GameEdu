<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <PageHead_Game ref="refPageHead" :title="headEndTitle"></PageHead_Game>

    <!-- 网页内容信息 -->
    <div class="content">
      <div class="box21">
        <!-- <div style="float: left; width: 25%" class="leftNav"> -->
        <div class="leftNav">
          <ul class="nav nav-pills flex-column" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(1, $event)"
                >游戏</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(8, $event)"
                >推荐习题</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(12, $event)"
                >题目管理-List</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(13, $event)"
                >题目管理</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(14, $event)"
                >学生管理</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="toggleMenu"
                style="font-weight: bold"
              >
                答题情况
                <span v-if="isMenuOpen">▲</span>
                <span v-else>▼</span></a
              >
              <ul v-if="isMenuOpen" class="submenu">
                <li class="submenu-item">
                  <a
                    class="nav-link"
                    data-toggle="pill"
                    href="javascript:void(0)"
                    @click="Menu_Click(151, $event)"
                    >问题分析</a
                  >
                </li>
                <li class="submenu-item">
                  <a
                    class="nav-link"
                    data-toggle="pill"
                    href="javascript:void(0)"
                    @click="Menu_Click(152, $event)"
                    >个人分析</a
                  >
                </li>
                <li class="submenu-item">
                  <a
                    class="nav-link"
                    data-toggle="pill"
                    href="javascript:void(0)"
                    @click="Menu_Click(153, $event)"
                    >整体分析</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(2, $event)"
                >得分</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(3, $event)"
                >排名</a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(4, $event)"
              >
                习题集
              </a>
            </li>
            <li v-show="isHasOpQues == true" class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(5, $event)"
              >
                操作题检查
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(6, $event)"
              >
                知识点掌握
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="pill"
                href="javascript:void(0)"
                @click="Menu_Click(7, $event)"
              >
                冲关历史题目
              </a>
            </li>
          </ul>
        </div>
        <!-- <div style="float: right; width: 74%; margin-right: 10px" class="rightContent"> -->
        <div class="rightContent">
          <div class="title">
            <nav class="breadcrumb">
              <a class="breadcrumb-item" href="#/Index">首页</a>
              <a class="breadcrumb-item" href="#/BottleGame">漂流瓶游戏</a>
              <span id="navTitle" class="breadcrumb-item active">游戏</span>
            </nav>
          </div>
          <div class="content">
            <div class="tab-content">
              <div v-if="activeTabId === 'menu1'" id="menu1">
                <br />

                <PassGame_ChanllegeCom
                  ref="refPassGame_Chanllege"
                  :title="''"
                ></PassGame_ChanllegeCom>
              </div>

              <div v-if="activeTabId === 'menu8'" id="menu8">
                <br />
                <PassGame_RecommendCom
                  ref="refPassGame_Recommend"
                  :title="''"
                ></PassGame_RecommendCom>
              </div>
              <div v-if="activeTabId === 'menu12'" id="menu12">
                <br />
                <QuestionnaireCRUD_ListCom
                  ref="refQuestionnaireCRUD_List"
                  :title="''"
                ></QuestionnaireCRUD_ListCom>
              </div>
              <div v-if="activeTabId === 'menu13'" id="menu13">
                <br />
                <QuestionnaireCRUDCom ref="refQuestionnaireCRUD" :title="''"></QuestionnaireCRUDCom>
              </div>
              <div v-if="activeTabId === 'menu14'" id="menu14">
                <br />
                <StudentInfoZxCRUDCom ref="refStudentInfoZxCRUD" :title="''"></StudentInfoZxCRUDCom>
              </div>
              <div v-if="activeTabId === 'menu151'" id="menu151">
                <br />
                <ClassPerfAnalysisCRUDCom
                  ref="refClassPerfAnalysisCRUD"
                  :title="''"
                ></ClassPerfAnalysisCRUDCom>
              </div>
              <div v-if="activeTabId === 'menu152'" id="menu152">
                <br />
                <StuPerfAnalysisCRUDCom
                  ref="refStuPerfAnalysisCRUD"
                  :title="''"
                ></StuPerfAnalysisCRUDCom>
              </div>

              <div v-if="activeTabId === 'menu2'" id="menu2">
                <br />
                <PassGame_ScoreCom ref="refPassGame_Score" :title="''"></PassGame_ScoreCom>
              </div>
              <div v-if="activeTabId === 'menu3'" id="menu3">
                <br />
                <PassGame_RankingCom ref="refPassGame_Ranking" :title="''"></PassGame_RankingCom>
              </div>

              <div v-if="activeTabId === 'menu4'" id="menu4">
                <br />
                <PassGame_QuestionListCom
                  ref="refPassGame_QuestionList"
                  :title="''"
                ></PassGame_QuestionListCom>
              </div>

              <div v-if="activeTabId === 'menu6'" id="menu6">
                <br />
                <PassGame_KnowledgeMasterCom
                  ref="refPassGame_KnowledgeMaster"
                  :title="''"
                ></PassGame_KnowledgeMasterCom>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 各观点分类调整  -->
      <div class="modal" :class="{ show: modalActive }">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- 模态框头部 -->
            <div class="modal-header">
              <h4 class="modal-title">请选择此关难度：</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- 模态框主体 -->
            <div class="modal-body">
              <table style="width: 100%" class="table table-bordered table-hover table td">
                <tr>
                  <td style="text-align: center">
                    <select
                      id="ddlSelectionDifficulty"
                      class="form-control"
                      style="width: 200px; display: inherit"
                    >
                      <option value="1">简单</option>
                      <option value="2">中等</option>
                      <option value="3">困难</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center">
                    <a
                      id="btnOK"
                      class="layui-btn layui-btn-normal"
                      style="color: white; line-height: 35px"
                      title="确认"
                      href="GameDetails"
                    >
                      <i class="layui-icon layui-icon-ok-circle" style="line-height: 35px"></i>确认
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- 显示信息框层  -->
      <div id="divMsgBox" value="1"></div>
    </div>
    <div id="hidRegion">
      <input id="hidCurrPageIndex" type="hidden" value="1" />

      <input id="hidRecCount" type="hidden" value="0" />

      <input id="hidSortge_UserCreditsLogBy" type="hidden" value="" />

      <input id="hidSortge_UserCreditsTtlBy" type="hidden" value="" />
      <!-- 存放json数据； -->
      <input id="hidJsonData" type="hidden" />

      <!-- 存放关卡等级数据； -->
      <input id="hidDifficultyLevelId" type="hidden" />
      <!-- 存放关卡题目类型； -->
      <input id="hidQuestionTypeId" type="hidden" />
      <!-- 存放关卡题目数； -->
      <input id="hidQuestionNum" type="hidden" />
      <!-- 存放关卡主键； -->
      <input id="hidGameLevelId" type="hidden" />
      <!-- 用户知识点掌握排序； -->
      <input id="hidSortge_KnowledgesUserMasterBy" type="hidden" value="" />
    </div>
    <PageEnd_Game :title="headEndTitle"></PageEnd_Game>
    <TzMsgBoxCom ref="TzMsgBoxRef"></TzMsgBoxCom>

    <CheckOperationQuestionNewCom
      ref="refCheckOperationQuestionNew"
      :game-level-id="gameLevelId"
      :question-id="questionId"
    ></CheckOperationQuestionNewCom>

    <QuestionnaireHistoryCom ref="refQuestionnaireHistory"></QuestionnaireHistoryCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/index/css/index.css';
  import '@/assets/lib/Xadmin/css/font.css';
  // import '@/assets/lib/Xadmin/css/xadmin.css';
  import '@/assets/css/comment.css';
  import '@/assets/css/indexQuestion.css';
  import '@/assets/css/public.css';
  import '@/assets/css/SimpleTree.css';

  import $ from 'jquery';
  import { defineComponent, onMounted, ref } from 'vue';

  import PageEnd_Game from '@/views/Shared/PageEnd_Game.vue';
  import PageHead_Game from '@/views/Shared/PageHead_Game.vue';
  import TzMsgBoxCom from '@/views/CommPage/TzMsgBox.vue';
  import QuestionnaireHistoryCom from '@/views/web/QuestionnaireHistory.vue';
  import CheckOperationQuestionNewCom from '@/views/web/CheckOperationQuestionNew.vue';
  import PassGame_ChanllegeCom from '@/views/web/PassGame_Chanllege.vue';
  import PassGame_RecommendCom from '@/views/web/PassGame_Recommend.vue';
  import QuestionnaireCRUD_ListCom from '@/views/QuestionaireEdit/QuestionnaireCRUD_List.vue';
  import QuestionnaireCRUDCom from '@/views/QuestionaireEdit/QuestionnaireCRUD.vue';
  import { userManageMap } from 'share-stu-study-base-lib';

  // import StudentInfoZxCRUDCom from '@/viewsShare/UserManage/StudentInfoZxCRUD.vue';

  import ClassPerfAnalysisCRUDCom from '@/views/QuestionnaireResult/ClassPerfAnalysisCRUD.vue';
  import StuPerfAnalysisCRUDCom from '@/views/QuestionnaireResult/StuPerfAnalysisCRUD.vue';

  import PassGame_ScoreCom from '@/views/web/PassGame_Score.vue';
  import PassGame_RankingCom from '@/views/web/PassGame_Ranking.vue';
  import PassGame_QuestionListCom from '@/views/web/PassGame_QuestionList.vue';
  import PassGame_KnowledgeMasterCom from '@/views/web/PassGame_KnowledgeMaster.vue';

  import { TzMsgBox } from '@/views/CommPage/TzMsgBox';

  // import { messagePushUsersRelationEx_ConstructorName } from '@/ts/L3ForWApiExShare/NewsAnn/clsMessagePushUsersRelationExWApi';
  import { message } from '@/utils/myMessage';
  import { SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import PassGameEx from '@/views/web/PassGameEx';
  import { QuestionList } from '@/views/web/QuestionList';

  import { clsQuestionnaireENEx } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireENEx';

  import { QuestionnaireCRUD } from '@/viewsBase/QuestionaireEdit/QuestionnaireCRUD';
  import { menu_SetActiveItemA } from '@/ts/FunClass/clsPubFun4Menu';
  import { Index } from '@/views/web/Index';
  import { PassGame_Chanllege } from '@/views/web/PassGame_Chanllege';
  import { PassGame_Recommend } from '@/views/web/PassGame_Recommend';

  import { cc_Course_GetObjByCourseIdCache } from 'share-stu-study-base-lib';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { PassGame_Score } from '@/views/web/PassGame_Score';
  import { PassGame_Ranking } from '@/views/web/PassGame_Ranking';
  import { refDivLayout, refDivList } from './BottleGameVueShare';

  export default defineComponent({
    name: 'BottleGame',
    components: {
      // 组件注册

      PageEnd_Game,
      PageHead_Game,
      TzMsgBoxCom,
      QuestionnaireHistoryCom,

      CheckOperationQuestionNewCom,
      PassGame_ChanllegeCom,
      PassGame_RecommendCom,
      QuestionnaireCRUD_ListCom,
      QuestionnaireCRUDCom,
      StudentInfoZxCRUDCom: (userManageMap as GlobalComponentMap).get('StudentInfoZxCRUD'),
      ClassPerfAnalysisCRUDCom,
      StuPerfAnalysisCRUDCom,
      PassGame_ScoreCom,
      PassGame_RankingCom,
      PassGame_QuestionListCom,
      PassGame_KnowledgeMasterCom,
    },
    setup() {
      const isMenuOpen = ref(false);

      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };

      // const Menu_Click = (menuId: number, event: Event) => {
      //   console.log(`Menu ${menuId} clicked`);
      //   // 你的逻辑代码
      // };
      const modalActive = ref(false);

      const showModal = () => {
        modalActive.value = true;
      };

      const hideModal = () => {
        modalActive.value = false;
      };
      const headEndTitle = ref('');
      const difficultyLevelId = ref('');
      const questionTypeId = ref('');
      const questionNum = ref(0);
      const gameLevelId = ref('');
      const gameLevelName = ref('');
      const levelModeTypeId = ref('');
      const questionId = ref(0);

      const refgs_ReflectLogCRUD = ref();
      const refPassGame_KnowledgeMaster = ref();
      const examBatchNo = ref('');

      const isHasOpQues = ref(false);
      const activeTabId = ref('menu1');

      const refPageHead = ref();
      const TzMsgBoxRef = ref();
      const refQuestionnaireHistory = ref();
      const refPassGame_Chanllege = ref();
      const refPassGame_Recommend = ref();
      const refQuestionnaireCRUD_List = ref();
      const refQuestionnaireCRUD = ref();
      const refCheckOperationQuestionNew = ref();

      const mySystemName = ref('漂流瓶游戏-游戏化教育平台');

      const refDivList_Cls = ref();

      const refDivQuestionList = ref();
      const sysTitle = ref('首页-游戏化教育平台');

      const UserName = ref('pyf');

      onMounted(() => {
        Index.vuebtn_Click = btn_Click;
        PassGameEx.vuebtn_Click = btn_Click;
        PassGameEx.GetPropValue = GetPropValue;
        TzMsgBox.EditRef = TzMsgBoxRef;
        GetCourseIsHasOp();
        window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'examBatchNo':
            return examBatchNo.value;

          default:
            return '';
        }
      }
      async function GetCourseIsHasOp() {
        const objCourse = await cc_Course_GetObjByCourseIdCache(clsPubLocalStorage.courseId);
        if (objCourse != null) {
          isHasOpQues.value = objCourse.isHasOpQues;
        }
      }

      function window_onload() {
        //        require(["../js/Web/Index.js"], function (index) {

        refPageHead.value.indexTitle = '漂流瓶游戏';

        window.onscroll = function () {
          //const topScroll = document.body.scrollTop;//滚动的距离,距离顶部的距离
          const topScroll = document.body.scrollTop || document.documentElement.scrollTop;

          const divPage_list = document.getElementById('page_list') as HTMLDivElement;
          if (divPage_list != null) {
            if (topScroll > 203) {
              //当滚动距离大于250px时执行下面的东西
              //bignav.removeClass = "page_list1";
              //bignav.addClass = "page_list2";
              // $('#page_list').removeClass();
              divPage_list.classList.remove();
              // $('#page_list').addClass('page_list2');
              divPage_list.classList.add('page_list2');
              //bignav.style.position = 'fixed';
              //bignav.style.top = '0';
              //bignav.style.zIndex = '9999';
            } else {
              //当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
              //bignav.style.position = 'static';
              //bignav.removeClass = "page_list2";
              //bignav.addClass = "page_list1";
              // $('#page_list').removeClass();
              divPage_list.classList.remove();
              // $('#page_list').addClass('page_list1');
              divPage_list.classList.add('page_list1');
            }
          }
        };

        const objPage0 = new Index();
        objPage0.PageLoad();
        const objPage = new PassGameEx();
        objPage.PageLoad();
        const objPage_Chanllege = new PassGame_Chanllege();
        objPage_Chanllege.PageLoad();

        /*答题卡的切换*/
        $('#openCard').click(function () {
          $('#closeCard').show();
          $('#answerCard').slideDown();
          $(this).hide();
        });
        $('#closeCard').click(function () {
          $('#openCard').show();
          $('#answerCard').slideUp();
          $(this).hide();
        });
      }
      /*i
      获取每个关卡前几名函数
      */

      function btnChallengeClick(k: string) {
        const objPage = new PassGameEx();
        objPage.Getge_UserCreditsRank(k);
      }
      function ShowGameHistory() {
        SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '冲关历史');
        // xadmin1_open('冲关历史题目', '../Web/QuestionnaireHistory', '', '', true);
        refQuestionnaireHistory.value.showDialog();
      }
      //菜单事件
      function Menu_Click(key: number, event: MouseEvent) {
        const clickedElement = event.target as HTMLElement;
        console.log('当前被单击的控件：', clickedElement);
        menu_SetActiveItemA(clickedElement as HTMLAnchorElement);
        switch (key) {
          case 1:
            activeTabId.value = 'menu1';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '游戏');
            // require(["../js/Web/PassGameEx.js"], function (index) {

            setTimeout(() => {
              const objPage = new PassGame_Chanllege();
              objPage.Show_GameChallenge();
            }, 500);

            break;
          case 8:
            activeTabId.value = 'menu8';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '推荐习题');
            // require(["../js/Web/PassGameEx.js"], function (index) {

            setTimeout(() => {
              const objPage = new PassGame_Recommend();
              objPage.Show_GameChallenge();
            }, 500);

            break;
          case 12:
            activeTabId.value = 'menu12';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '题目管理-List');
            // require(["../js/Web/PassGameEx.js"], function (index) {

            setTimeout(() => {
              const objPage = new PassGame_Recommend();
              objPage.Show_GameChallenge();
            }, 500);

            break;
          case 13:
            activeTabId.value = 'menu13';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '题目管理');

            break;
          case 14:
            activeTabId.value = 'menu14';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '学生管理');

            break;
          case 15:
            activeTabId.value = 'menu15';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '答题情况');

            break;
          case 151:
            activeTabId.value = 'menu151';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '问题分析');

            break;
          case 152:
            activeTabId.value = 'menu152';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '个人分析');

            break;
          case 153:
            activeTabId.value = 'menu153';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '整体分析');

            break;
          case 2:
            activeTabId.value = 'menu2';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '得分');
            setTimeout(() => {
              // ge_UserCreditsLogCRUD.divList = refDivList.value;

              const objPage = new PassGame_Score();
              objPage.Getge_UserCredits();
            }, 500);

            break;
          case 3:
            activeTabId.value = 'menu3';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '排名');
            setTimeout(() => {
              // ge_UserCreditsLogCRUD.divList = refDivList.value;

              const objPage = new PassGame_Ranking();
              objPage.Getge_UserCreditsOrderByUser();
            }, 500);

            break;
          case 4:
            activeTabId.value = 'menu4';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '习题集');

            // require(["../js/Web/QuestionList.js"], function (questionnaire) {
            setTimeout(() => {
              QuestionList.divQuestionList = refDivQuestionList.value;

              const objPage2 = new QuestionList();
              objPage2.PageLoad();
            }, 500);

            //xadmin.open('知识结构图题目', '../Web/StructureChartQuestion');
            break;
          case 5:
            activeTabId.value = 'menu5';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '推荐习题');

            // window.location.href = '../Web/CheckOperationQuestionNew';
            // router.push('/CheckOperationQuestionNew');
            gameLevelId.value = ''; //strGameLevelId;
            questionId.value = 3038;
            refCheckOperationQuestionNew.value.showDialog();
            break;
          case 6:
            activeTabId.value = 'menu6';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '知识点掌握');
            setTimeout(() => {
              // ge_UserCreditsLogCRUD.divList = refDivList.value;
              // const objPage = new PassGameEx();
              // objPage.UserMaterMsg(key.toString());
              refPassGame_KnowledgeMaster.value.getUserMasterKnowledge();
            }, 500);

            break;
          case 7:
            activeTabId.value = 'menu7';
            SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle', '冲关历史');

            // xadmin1_open('冲关历史题目', '../Web/QuestionnaireHistory', '', '', true);
            refQuestionnaireHistory.value.showDialog();
            break;
        }

        // MenuShow(key);
      }

      //习题集查询事件
      function btnQuestionQuery() {
        // require(["../js/Web/QuestionList.js"], function (questionnaire) {
        const objPage = new QuestionList();
        objPage.btnQuery_Click();
      }

      function btnQuery() {
        // isForCls.value = 'false';
        const objPage = new PassGameEx();
        objPage.btnQuery_Click();
      }

      /*
      显示对话框
      (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_ShowDialog)
      */
      function ShowDialogSelectionDifficulty() {
        // require(['jquery', 'bootstrap'], function ($) {
        //     $('#editSelectionDifficulty').modal('show');
        // });
      }

      /*
      隐藏对话框
      (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_HideDialog)
      */
      function HideDialogSelectionDifficulty() {
        // require(['jquery', 'bootstrap'], function ($) {
        //     $('#editSelectionDifficulty').modal('hide');
        // });
      }

      //操作题型 各类型点击事件
      function CaoZuoQuestionTypeClick(ClickType: number) {
        switch (ClickType) {
          //case 1:
          //   // CheckOperationQuestionNew
          //    xadmin.open('html或js题型', '../Web/CheckOperationQuestion?questionId=00003038', '', '', true)
          //    break;
          //case 2:

          //    xadmin.open('自带html题型', '../Web/CheckOperationQuestion?questionId=00000138', '', '', true)
          //    break;

          case 1:
            // CheckOperationQuestionNew
            // xadmin1_open(
            //   'html或js题型',
            //   '../Web/CheckOperationQuestionNew?questionId=00003038',
            //   '',
            //   '',
            //   true,
            // );
            gameLevelId.value = ''; //strGameLevelId;
            questionId.value = 3038;
            refCheckOperationQuestionNew.value.showDialog();
            break;
          case 2:
            // xadmin1_open(
            //   '自带html题型',
            //   '../Web/CheckOperationQuestionNew?questionId=00000138',
            //   '',
            //   '',
            //   true,
            // );
            gameLevelId.value = ''; //strGameLevelId;
            questionId.value = 138;
            refCheckOperationQuestionNew.value.showDialog();
            break;

          //case 3:
          //    SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle',"排名");
          //    break;
          //case 4:
          //    SetSpanHtmlInDivObj(refDivLayout.value, 'navTitle',"操作习题");
          //    // window.location.href = "../Web/CheckOperationQuestion";
          //    break;
        }
      }

      /*答题卡*/
      function answerCardBak(questions: Array<clsQuestionnaireENEx>) {
        // questions = questions;
        // questions = eval(questions)
        $('.question_sum').text(questions.length);
        for (let i = 0; i < questions.length; i++) {
          const questionId =
            "<li id='ques" +
            i +
            "'@click='saveQuestionState(" +
            i +
            ")' class='questionId'>" +
            (i + 1) +
            '</li>';
          $('#answerCard ul').append(questionId);
        }
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'SetExamBatchNo':
            examBatchNo.value = strKeyId;
            return;
          case 'Bind_EduClsList':
            refPageHead.value.Bind_EduClsList();
            return;
          case 'setRoles':
            refPageHead.value.setRoles();
            return;
          case 'setEduClss':
            refPageHead.value.setEduClss();
            return;
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          case 'submitQuestions':
            TzMsgBox.EditRef = TzMsgBoxRef;

            break;
          default:
            break;
        }
        PassGameEx.btn_Click(strCommandName, strKeyId);
      }
      function DiscussSubmit_Click() {
        message.warning('函数DiscussSubmit_Click没有实现！');
      }
      return {
        examBatchNo,
        refDivLayout,
        refDivList,
        refDivList_Cls,
        refDivQuestionList,
        activeTabId,
        btn_Click,
        sysTitle,
        UserName,
        mySystemName,
        refPageHead,
        TzMsgBoxRef,
        refQuestionnaireHistory,
        refPassGame_Chanllege,
        refPassGame_Recommend,
        refQuestionnaireCRUD_List,
        refQuestionnaireCRUD,
        refCheckOperationQuestionNew,
        refPassGame_KnowledgeMaster,
        Menu_Click,
        DiscussSubmit_Click,
        btnQuestionQuery,

        btnQuery,

        difficultyLevelId,
        questionTypeId,
        questionNum,
        gameLevelId,
        gameLevelName,
        levelModeTypeId,

        questionId,
        showModal,
        modalActive,
        hideModal,
        headEndTitle,

        refgs_ReflectLogCRUD,

        isHasOpQues,
        isMenuOpen,
        toggleMenu,
      };
    },
  });
</script>
<style scoped>
  .myTitle {
    font-size: 1.05rem; /* 设置标题字体大小 */
    font-weight: bold; /* 设置标题字体粗细 */
    line-height: 1.5; /*设置内容行高 */
    color: #333; /* 设置标题字体颜色 */
    /* 其他标题样式 */
  }

  .myContent {
    font-size: 1.05rem; /* 设置内容字体大小 */
    line-height: 1.5; /*设置内容行高 */
    margin-top: 2px;
    color: #666; /* 设置内容字体颜色 */
    /* 其他内容样式 */
  }
  .subDiv {
    margin-bottom: 10px !important; /* 设置子层之间的下边距为 10px */
    margin-top: 10px;
  }
  .box1 {
    margin-bottom: 10px;
  }

  .box4 {
    padding: 10px 10px 0px 10px;
    background-color: white;
    border-left: solid 1px #dbdcde;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-radius: 7px 4px 4px 2px;
    margin-bottom: 8px;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0px;
    margin-left: 0px;
    padding-top: 5px;
    background-color: white;
    border-radius: 4px 4px 4px 2px;
    line-height: 3;
  }

  .alert {
    position: relative;
    padding: 0.55rem 1.25rem;
    margin-bottom: 0.5rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }

  .carousel-inner img {
    width: 1000px;
    height: 300px;
  }

  .slider {
    width: 100%;
    min-width: 1000px;
    height: 305px;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  #demo {
    width: 1000px;
    height: 305px;
    margin: 0 auto;
  }

  .nav {
    list-style-type: none;
    padding: 0;
  }

  .nav-item {
    margin-bottom: 10px;
    background-color: #e0f7fa; /* 清蓝色底纹 */
    border-bottom: 1px solid #ccc; /* 分隔线 */
  }

  .nav-link {
    cursor: pointer;
    text-decoration: none;
    color: #007bff;
    display: block;
    padding: 10px;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: red;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: bold;
    font-size: 15px;
  }
  /********************************左边导航********************************/
  .leftNav {
    padding: 20px;
    width: 200px;
    height: 650px;
    overflow: hidden;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-top: solid 1px #dededf;
    border-left: solid 1px #dbdcde;
    /*border-radius: 7px 4px 4px 2px;*/
    border-radius: 2px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: left;
    background: #fff;
    font-size: 16px;
  }
  /********************************右边内容********************************/
  .rightContent {
    /*width: 690px;*/
    width: calc(100% - 210px);
    background: #fff;
    min-height: 650px;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-bottom: solid 1px #dbdcde;
    border-top: solid 1px #dededf;
    border-left: solid 1px #dbdcde;
    border-radius: 7px 4px 4px 2px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: right;
  }

  .divTree {
    /*margin-left: 10px;*/
    padding-top: 10px;
    width: 24%;
    font-size: 17px;
    min-height: 300px;
    overflow: hidden;
    /*overflow-y:scroll;*/
    overflow-y: auto;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-radius: 10px 8px 8px 4px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: left;
    background: #fff;
    font-family: 'Microsoft YaHei';
  }

  .divTree3 {
    border: solid 1px #fff;
    margin: 10px;
    /*bottom: 5%;*/
    z-index: 999;
    background: whitesmoke;
  }

  .MeetingTree {
    margin-top: 10px;
    width: 100%;
    min-height: 200px;
    border-radius: 10px 8px 8px 4px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    background-color: whitesmoke;
  }

  .breadcrumb {
    width: 1000px;
    padding: 8px 15px;
    margin-bottom: 0px;
    list-style: none;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  .rightContent .content {
    overflow: hidden;
    width: 100%;
    /* height: 580px; */
    padding: 0px;
    font-size: 15px;
  }

  .divQuestionPager {
    width: 650px;
    float: right;
  }
  /*分页样式*/
  .page_list1 {
    /*position: fixed;
                    right: 200px;
                    top: 203px;*/
    z-index: 999;
    width: 100%;
    text-align: right;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: white;
    /*border: 1px solid #ddd;*/
    padding-left: 10px;
  }

  .page_list2 {
    position: fixed;
    right: 200px;
    top: 0px;
    z-index: 999;
    width: 700px;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: white;
    padding-left: 10px;
  }
  .divParent {
    display: flex;
    flex-direction: column;
  }
  .modal {
    display: none;
  }

  .modal.show {
    display: block;
  }

  .box21,
  .box22,
  .box23,
  .box24,
  .box25,
  .box26,
  .box27,
  .box28 {
    width: 1220px;
    float: left;
    _float: none;
  }
  .submenu {
    padding-left: 20px; /* 向右缩进 */
  }
  .submenu-item {
    background-color: #e0f7fa; /* 清蓝色底纹 */
    border-bottom: 1px solid #ccc; /* 分隔线 */
  }

  .submenu-item:last-child {
    border-bottom: none; /* 去掉最后一个子菜单项的分隔线 */
  }
</style>

<!-- 

<link rel="stylesheet" href="@/assets/css/comment.css">    
<link href="@/assets/css/indexQuestion.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="../css/SimpleTree.css">
<link rel="stylesheet" type="text/css" href="../css/public.css">

  -->
