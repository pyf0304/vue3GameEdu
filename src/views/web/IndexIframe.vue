<template>
  <div id="divLayout" ref="refDivLayout" class="app-container">
    <!-- 顶部开始 -->
    <header>
      <PageHeadCom
        ref="PageHeadRef"
        :title="strTitle"
        :isShowEduCls="'true'"
        :header-height="'60px'"
        :is-show-paper-iframe="'false'"
        :is-show-topic="'false'"
        :is-show-search="'false'"
        :is-show-major="'true'"
        :is-show-attention="'true'"
        :paper-id="''"
      ></PageHeadCom>
    </header>
    <!-- 顶部结束 -->
    <!-- 中部开始 -->
    <div class="main-content">
      <!-- 左侧菜单开始 -->
      <aside class="sidebar">
        <!-- 菜单内容 -->
        <!-- <ul>
          <li v-for="module in menu" :key="module.name">
            {{ module.name }}
            <ul>
              <li v-for="item in module.items" :key="item.name">
                <button @click="addTab(module.name, item.name)">
                  {{ item.name }}
                </button>
              </li>
            </ul>
          </li>
        </ul> -->
        <!-- 菜单内容 -->
        <!-- <div> -->
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="javascript:void(0)">游戏化学习平台</a>
          </div>
        </nav>
        <div class="container-fluid">
          <ul class="nav flex-column">
            <li class="nav-item" v-for="(module, index) in menu" :key="index">
              <a
                class="nav-link module-name"
                :class="{ active: module.active }"
                href="javascript:void"
                @click="toggleActive(module)"
              >
                {{ module.name }}
              </a>
              <ul class="nav flex-column ml-1" v-if="module.active">
                <li class="nav-item" v-for="(item, idx) in module.items" :key="idx">
                  <a
                    class="nav-link item-name"
                    :class="{ item_active: item.active }"
                    href="javascript:void"
                    @click="addTab(module.name, item.name)"
                    >{{ item.name }}
                  </a>
                </li>
              </ul>
              <!-- 分隔底纹 -->
              <!-- <hr class="module-divider mt-1" v-if="index !== menu.length - 1" /> -->
            </li>
          </ul>
        </div>
        <!-- </div> -->
      </aside>
      <!-- <div class="x-slide_left"></div> -->
      <!-- 左侧菜单结束 -->
      <!-- 右侧主体开始 -->
      <main class="content">
        <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
          <ul class="layui-tab-title">
            <li class="home"> <font-awesome-icon icon="fa-regular fa-heart" />我的桌面 </li>
          </ul>
          <div id="tab_right" class="layui-unselect layui-form-select layui-form-selected">
            <dl>
              <dd data-type="this">关闭当前</dd>
              <dd data-type="other">关闭其它</dd>
              <dd data-type="all">关闭全部</dd>
            </dl>
          </div>
          <!-- <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
              <iframe
                id="Index_iframe"
                src="../Web/Welcome"
                frameborder="0"
                scrolling="yes"
                class="x-iframe"
              ></iframe>
            </div>
          </div> -->

          <el-tabs v-model="currentTab">
            <el-tab-pane v-for="tab in tabs" :key="tab.name">
              <template v-slot:label>
                <span class="mr-2">{{ tab.label }}</span>
                <span>&nbsp;&nbsp;</span>

                <a href="javascript:void(0)" class="ml-2" title="移除该页面" @click="closeTab(tab)">
                  <font-awesome-icon icon="times" style="color: rgb(164, 207, 247)" />
                </a>
              </template>
              <component :is="tab.component" :paras="tab.paras"></component>
            </el-tab-pane>
          </el-tabs>

          <div id="tab_show"></div>
        </div>
      </main>
      <div class="page-content-bg"></div>
    </div>
    <!-- 右侧主体结束 -->
    <!-- 中部结束 -->

    <input id="hidPage" type="hidden" />
  </div>
</template>
<script lang="ts">
  import $ from 'jquery';
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import { markRaw, computed, defineComponent, onMounted, ref } from 'vue';
  // import DiscussionTopics0 from '@/views/GradEduTools/DiscussionTopics.vue';
  // import DiscussionTopics_QUDI0 from '@/views/GradEduTools/DiscussionTopics_QUDI.vue';

  // import { XzMajorDirectionCRUD0 } from 'share-stu-study-base-lib';
  // import gs_KnowledgesGraphCRUD0 from '@/viewsShare/Knowledges/gs_KnowledgesGraphCRUD.vue';
  // import StudentInfoList0 from '@/viewsShare/UserManage/StudentInfoList.vue';

  import {
    userManageMap,
    dailyRunningMap,
    knowledgesMap,
    courseManageMap,
    gameLearnMap,
  } from 'share-stu-study-base-lib';

  // import StudentInfoXzCRUD0 from '@shared/ts/L3ForWApiExShare/BaseInfo/StudentInfoZxCRUD.vue';
  // import { ComponentA, add } from '@sharedprj';
  // import { MyComponent, add } from '../lib/share-prj.mjs';
  import { add } from 'share-prj';
  // import '../lib/share-prj.css'; // 引入样式

  import { baseInfoMap } from 'share-stu-study-base-lib';
  import { userManage_GPMap, systemSetMap as systemSetMapInGP } from 'share-gen-plat-base-lib';
  import { menuManage_GPMap, potenceManMap } from 'share-gen-plat-base-lib';

  import { courseLearningMap, systemSetMap } from 'share-stu-study-base-lib';

  // import cc_CourseKnowledgesCRUD0 from '@/viewsShare/Knowledges/cc_CourseKnowledgesCRUD.vue';
  import ge_KMLearningGoalsCRUD0 from '@/views/Knowledges/ge_KMLearningGoalsCRUD.vue';

  import Welcome0 from '@/views/web/Welcome.vue';

  import cc_CourseExamPaperCRUD0 from '@/viewsShare/Knowledges/cc_CourseExamPaperCRUD.vue';
  import LearnModeCRUD0 from '@/views/CourseLearning/LearnModeCRUD.vue';

  import cc_ExamPaperStuRelationCRUD0 from '@/views/InteractManage/cc_ExamPaperStuRelationCRUD.vue';
  import ge_StuBatchQuesRelaCRUD0 from '@/views/InteractManage/ge_StuBatchQuesRelaCRUD.vue';
  import cc_CourseExamPaperRelationshipCRUD0 from '@/views/Knowledges/cc_CourseExamPaperRelationshipCRUD.vue';
  import ge_UserCreditsLogCRUD0 from '@/views/GameLearn/ge_UserCreditsLogCRUD.vue';
  import ge_UserLevelScoreCRUD0 from '@/views/GameLearn/ge_UserLevelScoreCRUD.vue';
  import ge_UserCreditsTtlCRUD0 from '@/views/GameLearn/ge_UserCreditsTtlCRUD.vue';

  import ge_UserBadgeLogCRUD0 from '@/views/GameLearn/ge_UserBadgeLogCRUD.vue';
  import ge_UserBadgeTtlCRUD0 from '@/views/GameLearn/ge_UserBadgeTtlCRUD.vue';
  import BadgeTypeCRUD0 from '@/views/GameLearn/BadgeTypeCRUD.vue';
  import QuestionnaireCRUD0 from '@/views/QuestionaireEdit/QuestionnaireCRUD.vue';
  import ClassPerfAnalysisCRUD0 from '@/views/QuestionnaireResult/ClassPerfAnalysisCRUD.vue';
  import StuPerfAnalysisCRUD0 from '@/views/QuestionnaireResult/StuPerfAnalysisCRUD.vue';
  import QuestionnaireCRUD_List0 from '@/views/QuestionaireEdit/QuestionnaireCRUD_List.vue';
  import ge_StuErrorLibCRUD0 from '@/views/InteractManage/ge_StuErrorLibCRUD.vue';
  import ge_GameLevelCRUD0 from '@/views/Knowledges/ge_GameLevelCRUD.vue';
  import UserAnswerResultCRUD0 from '@/views/QuestionnaireResult/UserAnswerResultCRUD.vue';
  import ge_StuBatchQuesRelaCRUDScore0 from '@/views/InteractManage/ge_StuBatchQuesRelaCRUDScore.vue';

  import ge_InspectionResultsCRUD0 from '@/views/GameLearn/ge_InspectionResultsCRUD.vue';

  import ge_EventTypeCRUD0 from '@/views/GameLearn/ge_EventTypeCRUD.vue';
  import UploadXlsFile0 from '@/viewsShare/tools/UploadXlsFile.vue';
  import UploadXlsFile4Ques0 from '@/viewsShare/tools/UploadXlsFile4Ques.vue';

  import ge_KnowledgesUserMasterCRUD0 from '@/views/Knowledges/ge_KnowledgesUserMasterCRUD.vue';
  import ge_KnowledgesClsMasterCRUD0 from '@/views/Knowledges/ge_KnowledgesClsMasterCRUD.vue';

  import KnowledgeLearnTotalCRUD0 from '@/views/Knowledges/KnowledgeLearnTotalCRUD.vue';
  import KnowledgeLearnDetailCRUD0 from '@/views/Knowledges/KnowledgeLearnDetailCRUD.vue';

  import cc_KnowledgesExamLibRelaCRUD0 from '@/views/Knowledges/cc_KnowledgesExamLibRelaCRUD.vue';

  import StructureChart0 from '@/views/Knowledges/StructureChart.vue';
  import StructureSection0 from '@/views/Knowledges/StructureSection.vue';

  import ge_ControlTypeCRUD0 from '@/views/GameLearn/ge_ControlTypeCRUD.vue';

  import JxTeachingPlanCRUD0 from '@/views/TeachingPlan/JxTeachingPlanCRUD.vue';

  import router from '@/router';

  import { IndexIframe } from '@/views/web/IndexIframe';
  import { message } from '@/utils/myMessage';
  import { GetDivObjInDivObj, GetDivObjInDivObjN } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import PageHeadCom from '@/ts/components/PageHead_GE.vue';
  import { useQxRoleMenusStore } from '@/store/modulesShare/qxRoleMenus';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { useRoute } from 'vue-router';
  import { refDivLayout } from './IndexIframeVueShare';
  // 定义 item 的类型
  interface Item {
    name: string;
    title: string;
    active: boolean;
    component: any; // 根据实际情况定义类型
    paras: string;
  }
  export default defineComponent({
    name: 'IndexIframe',
    components: {
      // 组件注册
      //   Paper_QUDI,
      //   Paper_List,
      //   SysScoreSummaryNewTotal,
      PageHeadCom,
    },
    props: {
      page: {
        type: String,
        required: false,
      },
    },
    setup(props) {
      const userStore = useUserStore();
      const qxRoleMenusStore = useQxRoleMenusStore();
      const route = useRoute(); // 获取当前路由信息
      const strTitle = ref('游戏化学习-后台管理');

      // const About = markRaw(About0);
      const menuSetId = ref('');

      const ge_ControlTypeCRUD = markRaw(ge_ControlTypeCRUD0);
      const JxTeachingPlanCRUD = markRaw(JxTeachingPlanCRUD0);

      const ge_StructureSectionCRUD = markRaw(
        (knowledgesMap as GlobalComponentMap)['ge_StructureSectionCRUD'],
      );
      const ge_StructureGraphCRUD = markRaw(
        (knowledgesMap as GlobalComponentMap)['ge_StructureGraphCRUD'],
      );
      const StructureSection = markRaw(StructureSection0);
      const ge_StructureSectionTypeCRUD = markRaw(
        (knowledgesMap as GlobalComponentMap)['ge_StructureSectionTypeCRUD'],
      );

      const StructureChart = markRaw(StructureChart0);
      const gs_KnowledgesLogicCRUD = markRaw(
        (knowledgesMap as GlobalComponentMap)['gs_KnowledgesLogicCRUD'],
      );

      const cc_KnowledgesExamLibRelaCRUD = markRaw(cc_KnowledgesExamLibRelaCRUD0);
      const gs_KnowledgesLogicRelaCRUD = markRaw(
        (knowledgesMap as GlobalComponentMap)['gs_KnowledgesLogicRelaCRUD'],
      );
      const KnowledgeLearnDetailCRUD = markRaw(KnowledgeLearnDetailCRUD0);
      const KnowledgeLearnTotalCRUD = markRaw(KnowledgeLearnTotalCRUD0);
      const ge_KnowledgesUserMasterCRUD = markRaw(ge_KnowledgesUserMasterCRUD0);
      const ge_KnowledgesClsMasterCRUD = markRaw(ge_KnowledgesClsMasterCRUD0);

      const gs_RelaTypeCRUD = markRaw((knowledgesMap as GlobalComponentMap)['gs_RelaTypeCRUD']);
      const cc_CourseChapterCRUD = markRaw(
        (knowledgesMap as GlobalComponentMap)['cc_CourseChapterCRUD'],
      );
      const KnowledgeMasterLevelCRUD = markRaw(
        (knowledgesMap as GlobalComponentMap)['KnowledgeMasterLevelCRUD'],
      );
      const ge_EventTypeCRUD = markRaw(ge_EventTypeCRUD0);

      const UploadXlsFile = markRaw(UploadXlsFile0);
      const UploadXlsFile4Ques = markRaw(UploadXlsFile4Ques0);

      const ge_InspectionResultsCRUD = markRaw(ge_InspectionResultsCRUD0);
      const cc_CourseTeacherRelationCRUD = markRaw(
        (courseManageMap as GlobalComponentMap)['cc_CourseTeacherRelationCRUD'],
      );
      const cc_CourseStudentRelationCRUD = markRaw(
        (courseManageMap as GlobalComponentMap)['cc_CourseStudentRelationCRUD'],
      );

      const ge_StuBatchQuesRelaCRUDScore = markRaw(ge_StuBatchQuesRelaCRUDScore0);
      const UserAnswerResultCRUD = markRaw(UserAnswerResultCRUD0);
      const ge_GameLevelCRUD = markRaw(ge_GameLevelCRUD0);
      const ge_StuErrorLibCRUD = markRaw(ge_StuErrorLibCRUD0);
      const QuestionnaireCRUD_List = markRaw(QuestionnaireCRUD_List0);
      const QuestionnaireCRUD = markRaw(QuestionnaireCRUD0);
      const ClassPerfAnalysisCRUD = markRaw(ClassPerfAnalysisCRUD0);
      const StuPerfAnalysisCRUD = markRaw(StuPerfAnalysisCRUD0);
      const BadgeTypeCRUD = markRaw(BadgeTypeCRUD0);
      const ge_UserBadgeTtlCRUD = markRaw(ge_UserBadgeTtlCRUD0);
      const ge_UserBadgeLogCRUD = markRaw(ge_UserBadgeLogCRUD0);
      const ge_UserCreditsTtlCRUD = markRaw(ge_UserCreditsTtlCRUD0);
      const ge_UserScoreCRUD = markRaw((gameLearnMap as GlobalComponentMap)['ge_UserScoreCRUD']);
      const ge_UserScoreCurrWeekCRUD = markRaw(
        (gameLearnMap as GlobalComponentMap)['ge_UserScoreCurrWeekCRUD'],
      );

      const ge_UserLevelScoreCRUD = markRaw(ge_UserLevelScoreCRUD0);

      const ge_UserCreditsLogCRUD = markRaw(ge_UserCreditsLogCRUD0);
      const cc_CourseExamPaperRelationshipCRUD = markRaw(cc_CourseExamPaperRelationshipCRUD0);
      const ge_StuBatchQuesRelaCRUD = markRaw(ge_StuBatchQuesRelaCRUD0);
      const cc_ExamPaperStuRelationCRUD = markRaw(cc_ExamPaperStuRelationCRUD0);
      const KnowledgeTypeCRUD = markRaw((knowledgesMap as GlobalComponentMap)['KnowledgeTypeCRUD']);
      const LearnModeCRUD = markRaw(LearnModeCRUD0);
      const cc_CourseExamPaperCRUD = markRaw(cc_CourseExamPaperCRUD0);

      const XzMajorDirectionCRUD = markRaw(
        (baseInfoMap as GlobalComponentMap)['XzMajorDirectionCRUD'],
      );

      const gs_KnowledgesGraphCRUD = markRaw(
        (knowledgesMap as GlobalComponentMap)['gs_KnowledgesGraphCRUD'],
      );
      const StudentInfoList = markRaw((userManageMap as GlobalComponentMap)['StudentInfoList']);
      const TeacherInfoList = markRaw((dailyRunningMap as GlobalComponentMap)['TeacherInfoList']);
      const StudentInfoCRUD = markRaw((userManageMap as GlobalComponentMap)['StudentInfoCRUD']);
      const StudentInfoZxCRUD = markRaw((userManageMap as GlobalComponentMap)['StudentInfoZxCRUD']);

      const TeacherInfoCRUD = markRaw((baseInfoMap as GlobalComponentMap)['TeacherInfoCRUD']);

      const QxUsersCRUD = markRaw((userManage_GPMap as GlobalComponentMap)['QxUsersCRUD']);

      const QxRolesCRUD = markRaw((userManage_GPMap as GlobalComponentMap)['QxRolesCRUD']);
      const QxUserRoleRelationCRUD = markRaw(
        (userManage_GPMap as GlobalComponentMap)['QxUserRoleRelationCRUD'],
      );
      const QxPrjMenuSetCRUD = markRaw(
        (menuManage_GPMap as GlobalComponentMap)['QxPrjMenuSetCRUD'],
      );
      const QxPrjMenusCRUD = markRaw((menuManage_GPMap as GlobalComponentMap)['QxPrjMenusCRUD']);
      const QxRoleMenusCRUD = markRaw((menuManage_GPMap as GlobalComponentMap)['QxRoleMenusCRUD']);
      const QxPotenceTypeCRUD = markRaw((potenceManMap as GlobalComponentMap)['QxPotenceTypeCRUD']);
      const QxPrjPotenceCRUD = markRaw((potenceManMap as GlobalComponentMap)['QxPrjPotenceCRUD']);

      const cc_CourseKnowledgesCRUD = markRaw(
        (knowledgesMap as GlobalComponentMap)['cc_CourseKnowledgesCRUD'],
      );
      const cc_CourseKnowledgesCRUD_Weight = markRaw(
        (knowledgesMap as GlobalComponentMap)['cc_CourseKnowledgesCRUD_Weight'],
      );

      const cc_KnowledgeModulesCRUD = markRaw(
        (knowledgesMap as GlobalComponentMap)['cc_KnowledgeModulesCRUD'],
      );
      const ge_KMLearningGoalsCRUD = markRaw(ge_KMLearningGoalsCRUD0);

      // const StructureChart = markRaw(StructureChart0);
      const XzMajorCRUD = markRaw((baseInfoMap as GlobalComponentMap)['XzMajorCRUD']);

      const cc_CourseCRUD = markRaw((courseLearningMap as GlobalComponentMap)['cc_CourseCRUD']);

      const CurrEduClsCRUD = markRaw((dailyRunningMap as GlobalComponentMap)['CurrEduClsCRUD']);
      const CurrEduClsStuCRUD = markRaw(
        (dailyRunningMap as GlobalComponentMap)['CurrEduClsStuCRUD'],
      );
      const CurrEduClsTeacherCRUD = markRaw(
        (dailyRunningMap as GlobalComponentMap)['CurrEduClsTeacherCRUD'],
      );
      const gs_TeachingDateCRUD = markRaw(
        (dailyRunningMap as GlobalComponentMap)['gs_TeachingDateCRUD'],
      );

      // const PersonalKnowledgeView = markRaw(PersonalKnowledgeView0);
      // const gs_UserConfig = markRaw(gs_UserConfig0);
      const CacheUseStateCRUD = markRaw((systemSetMap as GlobalComponentMap)['CacheUseStateCRUD']);
      // const XzSchoolCRUD = markRaw((systemSetMap as GlobalComponentMap)['XzSchoolCRUD']);
      const XzSchoolCRUD = markRaw((systemSetMapInGP as GlobalComponentMap)['XzSchoolCRUD']);

      // const SysCommentTypeCRUD = markRaw(SysCommentTypeCRUD0);

      const Welcome = markRaw(Welcome0);
      // 菜单数据
      const menu = ref([
        {
          name: '专业方向',
          active: false,
          items: [
            {
              name: '用户专业方向维护',
              title: '',
              active: false,
              component: XzMajorDirectionCRUD,
              paras: '',
            },
          ],
        },

        {
          name: '用户管理',
          active: false,
          items: [
            { name: '学生维护', title: '', active: false, component: StudentInfoCRUD, paras: '' },
            {
              name: '学生维护Zx',
              title: '',
              active: false,
              component: StudentInfoZxCRUD,
              paras: '',
            },
            { name: '教师维护', title: '', active: false, component: TeacherInfoCRUD, paras: '' },

            { name: '平台用户维护', title: '', active: false, component: QxUsersCRUD, paras: '' },
            { name: '平台角色维护', title: '', active: false, component: QxRolesCRUD, paras: '' },

            {
              name: '用户角色关系维护',
              title: '',
              active: false,
              component: QxUserRoleRelationCRUD,
              paras: '',
            },
            {
              name: '菜单集维护',
              title: '',
              active: false,
              component: QxPrjMenuSetCRUD,
              paras: '',
            },
            {
              name: '工程菜单维护',
              title: '',
              active: false,
              component: QxPrjMenusCRUD,
              paras: 'EditTabName=QxPrjMenus',
            },
            {
              name: '角色菜单',
              title: '',
              active: false,
              component: QxRoleMenusCRUD,
              paras: 'EditTabName=QxRoleMenus',
            },
            // <a @click="xadmin.add_tab('用户维护','../UserManage/Users_QUDI')">
            {
              name: '权限类型维护',
              title: '',
              active: false,
              component: QxPotenceTypeCRUD,
              paras: '',
            },
            {
              name: '权限维护',
              title: '',
              active: false,
              component: QxPrjPotenceCRUD,
              paras: '',
            },

            // {
            //   name: '角色赋权关系',
            //   title: '',
            //   active: false,
            //   component: QxRoleRightRelationCRUD,
            //   paras: '',
            // },
          ],
        },
        {
          name: '个人中心',
          active: false,
          items: [
            {
              name: '知识点逻辑图',
              title: '',
              active: false,
              component: gs_KnowledgesGraphCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('知识点逻辑图', '../Knowledges/gs_KnowledgesGraphCRUD')"
            // { name: '结构思维图', title: '', active: false, component: StructureChart, paras: '' },
            // <a @click="xadmin.add_tab('结构思维图', '../Knowledges/StructureChart')">

            // <a onclick="xadmin.add_tab('结构章节维护(旧)', '../Knowledges/ge_StructureSectionCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>结构章节维护(旧)</cite>
            // </a>
            {
              name: '结构章节维护(旧)',
              title: '',
              active: false,
              component: ge_StructureSectionCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('结构图谱维护(旧)', '../Knowledges/ge_StructureGraphCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>结构图谱维护(旧)</cite>
            // </a>
            {
              name: '结构图谱维护(旧)',
              title: '',
              active: false,
              component: ge_StructureGraphCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('章节结构维护', '../Knowledges/StructureSection')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>章节结构维护</cite>
            // </a>
            {
              name: '章节结构维护',
              title: '',
              active: false,
              component: StructureSection,
              paras: '',
            },
            {
              name: '章节结构分类',
              title: '',
              active: false,
              component: ge_StructureSectionTypeCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('知识结构图', '../Knowledges/StructureChart')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>结构思维图</cite>
            // </a>
            { name: '知识结构图', title: '', active: false, component: StructureChart, paras: '' },
          ],
        },
        {
          name: '教学班课程',
          active: false,
          items: [
            { name: '专业', title: '', active: false, component: XzMajorCRUD, paras: '' },
            // <a @click="xadmin.add_tab('专业', '../BaseInfo/XzMajorCRUD')">
            { name: '课程', title: '', active: false, component: cc_CourseCRUD, paras: '' },
            // <a @click="xadmin.add_tab('课程', '../CourseLearning_Share/cc_CourseCRUD')">
            { name: '教学班', title: '', active: false, component: CurrEduClsCRUD, paras: '' },
            // <a @click="xadmin.add_tab('教学班', '../DailyRunning/CurrEduClsCRUD')">
            {
              name: '教学班学生',
              title: '',
              active: false,
              component: CurrEduClsStuCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('教学班学生', '../DailyRunning/CurrEduClsStuCRUD')">
            {
              name: '教学班教师',
              title: '',
              active: false,
              component: CurrEduClsTeacherCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('教学班老师', '../DailyRunning/CurrEduClsTeacherCRUD')"
            {
              name: '教学班日期',
              title: '',
              active: false,
              component: gs_TeachingDateCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('教学班日期', '../GradEduTools/gs_TeachingDateCRUD')">
          ],
        },
        {
          name: '系统设置',
          active: false,
          items: [
            // <a  @click="xadmin.add_tab('分数权重管理','../ParameterTable/SysScoreWeight_QUDI_TS')"
            // {
            //   name: '个人知识点查看',
            //   title: '',
            //   active: false,
            //   component: PersonalKnowledgeView,
            //   paras: '',
            // },
            // <a  @click="xadmin.add_tab('个人知识点查看', '../GradEduTopic/PersonalKnowledgeView')"

            // <a @click="xadmin.add_tab('各观点分享配置', '../GradEduTools/gs_UserConfig')">
            { name: '缓存配置', title: '', active: false, component: CacheUseStateCRUD, paras: '' },
            { name: '学校维护', title: '', active: false, component: XzSchoolCRUD, paras: '' },

            // <a @click="xadmin.add_tab('缓存配置', '../SystemSet_Share/CacheUseStateCRUD')">

            // <a  @click="xadmin.add_tab('评论类型管理','../GradEduTopic/SysCommentType_QUDI_TS')"

            // <a onclick="xadmin.add_tab('个人知识点查看', '../GraduateEduTopic/PersonalKnowledgeView')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>个人知识点查看</cite>
            // </a>
            // {
            //   name: '个人知识点查看',
            //   title: '',
            //   active: false,
            //   component: PersonalKnowledgeView,
            //   paras: '',
            // },
          ],
        },
        {
          name: '知识点相关',
          active: false,
          items: [
            // <a  @click="xadmin.add_tab('分数权重管理','../ParameterTable/SysScoreWeight_QUDI_TS')"
            // {
            //   name: '个人知识点查看',
            //   title: '',
            //   active: false,
            //   component: PersonalKnowledgeView,
            //   paras: '',
            // },
            // <a  @click="xadmin.add_tab('个人知识点查看', '../GradEduTopic/PersonalKnowledgeView')"

            // <a @click="xadmin.add_tab('各观点分享配置', '../GradEduTools/gs_UserConfig')">

            // <a onclick="xadmin.add_tab('知识点', '../Knowledges_Share/cc_CourseKnowledgesCRUD')">
            //                   <i class="iconfont">&#xe6a7;</i>
            //                   <cite>知识点</cite>
            //               </a>
            {
              name: '知识点模块',
              title: '',
              active: false,
              component: cc_KnowledgeModulesCRUD,
              paras: '',
            },
            {
              name: '知识点',
              title: '',
              active: false,
              component: cc_CourseKnowledgesCRUD,
              paras: '',
            },
            {
              name: '知识点权重设置',
              title: '',
              active: false,
              component: cc_CourseKnowledgesCRUD_Weight,
              paras: '',
            },
            {
              name: '知识点模块目标',
              title: '',
              active: false,
              component: ge_KMLearningGoalsCRUD,
              paras: '',
            },
            // <a onclick="xadmin.add_tab('知识点逻辑', '../Knowledges/gs_KnowledgesLogicCRUD')">
            //                     <i class="iconfont">&#xe6a7;</i>
            //                     <cite>知识点逻辑</cite>
            //                 </a>
            {
              name: '知识点逻辑',
              title: '',
              active: false,
              component: gs_KnowledgesLogicCRUD,
              paras: '',
            },
            // <a onclick="xadmin.add_tab('知识点逻辑图', '../Knowledges/gs_KnowledgesGraphCRUD')">
            //                     <i class="iconfont">&#xe6a7;</i>
            //                     <cite>知识点逻辑图</cite>
            //                 </a>
            {
              name: '知识点逻辑图',
              title: '',
              active: false,
              component: gs_KnowledgesGraphCRUD,
              paras: '',
            },
            //     <a onclick="xadmin.add_tab('知识点习题', '../Knowledges/cc_KnowledgesExamLibRelaCRUD')">
            //                         <i class="iconfont">&#xe6a7;</i>
            //                         <cite>知识点习题</cite>
            // < /a>
            {
              name: '知识点习题',
              title: '',
              active: false,
              component: cc_KnowledgesExamLibRelaCRUD,
              paras: 'isDialog=false',
            },
            // <a onclick="xadmin.add_tab('知识点逻辑关系', '../Knowledges/gs_KnowledgesLogicRelaCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>知识点逻辑关系</cite>
            // </a>
            {
              name: '知识点逻辑关系',
              title: '',
              active: false,
              component: gs_KnowledgesLogicRelaCRUD,
              paras: '',
            },

            // < a onclick = "xadmin.add_tab('知识点学习情况', '../Knowledges/KnowledgeLearnDetailCRUD')" >
            //                         <i class="iconfont">&#xe6a7;</i>
            //                         <cite>知识点学习情况</cite>
            //                     </a>
            {
              name: '知识点学习情况',
              title: '',
              active: false,
              component: KnowledgeLearnDetailCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('知识点学习汇总', '../Knowledges/KnowledgeLearnTotalCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>知识点学习汇总</cite>
            // </a>
            {
              name: '知识点学习汇总',
              title: '',
              active: false,
              component: KnowledgeLearnTotalCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('用户知识点掌握', '../Knowledges/ge_KnowledgesUserMasterCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>用户知识点掌握</cite>
            // </a>
            {
              name: '用户知识点掌握',
              title: '',
              active: false,
              component: ge_KnowledgesUserMasterCRUD,
              paras: '',
            },
            {
              name: '教学班知识点掌握',
              title: '',
              active: false,
              component: ge_KnowledgesClsMasterCRUD,
              paras: '',
            },
            // <a onclick="xadmin.add_tab('知识点关系类型', '../Knowledges_Share/gs_RelaTypeCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>知识点关系类型</cite>
            // </a>
            {
              name: '知识点关系类型',
              title: '',
              active: false,
              component: gs_RelaTypeCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('知识点掌握度', '../Knowledges/KnowledgeMasterLevelCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>知识点掌握度</cite>
            // </a>
            {
              name: '知识点掌握度',
              title: '',
              active: false,
              component: KnowledgeMasterLevelCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('知识点类别', '../Knowledges_Share/KnowledgeTypeCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>知识点类别</cite>
            // </a>
            {
              name: '知识点类别',
              title: '',
              active: false,
              component: KnowledgeTypeCRUD,
              paras: '',
            },
            // <a onclick="xadmin.add_tab('学习模式', '../CourseLearning/LearnModeCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>学习模式</cite>
            // </a>
            { name: '学习模式', title: '', active: false, component: LearnModeCRUD, paras: '' },
          ],
        },
        {
          name: '试卷习题管理',
          active: false,
          items: [
            // <a onclick="xadmin.add_tab('考卷维护', '../Knowledges/cc_CourseExamPaperCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>考卷维护</cite>
            // </a>
            {
              name: '考卷维护',
              title: '',
              active: false,
              component: cc_CourseExamPaperCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('考卷与学生', '../InteractManage/cc_ExamPaperStuRelationCRUD')" >
            //                         <i class="iconfont">&#xe6a7;</i>
            //                         <cite>考卷与学生</cite>
            //                     </a>
            {
              name: '考卷与学生',
              title: '',
              active: false,
              component: cc_ExamPaperStuRelationCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('学生批次题目关系', '../InteractManage/ge_StuBatchQuesRelaCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>学生批次题目关系</cite>
            // </a>
            {
              name: '学生批次题目关系',
              title: '',
              active: false,
              component: ge_StuBatchQuesRelaCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('题目与试卷', '../Knowledges/cc_CourseExamPaperRelationshipCRUD')" >
            //                           <i class="iconfont">&#xe6a7;</i>
            //                           <cite>题目与试卷</cite>
            //                       </a>
            {
              name: '题目与试卷',
              title: '',
              active: false,
              component: cc_CourseExamPaperRelationshipCRUD,
              paras: '',
            },
          ],
        },
        {
          name: '积分徽章-漂流瓶',
          active: false,
          items: [
            // <a title="可以查看当前教学班内的用户积分信息" onclick="xadmin.add_tab('用户积分日志', '../GameLearn/ge_UserCreditsLogCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>用户积分日志</cite>
            // </a>
            {
              name: '用户积分日志',
              title: '',
              active: false,
              component: ge_UserLevelScoreCRUD,
              paras: '',
            },

            {
              name: '用户积分汇总-漂流瓶',
              title: '',
              active: false,
              component: ge_UserScoreCRUD,
              paras: '',
            },
            {
              name: '用户每周积分汇总-漂流瓶',
              title: '',
              active: false,
              component: ge_UserScoreCurrWeekCRUD,
              paras: '',
            },
            // <a title="可以查看当前教学班内的所有用户徽章记录" onclick="xadmin.add_tab('用户徽章日志', '../GameLearn/ge_UserBadgeLogCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>用户徽章日志</cite>
            // </a>
            {
              name: '用户徽章日志',
              title: '',
              active: false,
              component: ge_UserBadgeLogCRUD,
              paras: '',
            },

            // <a title="可以查看当前教学班内的所有徽章汇总信息" onclick="xadmin.add_tab('用户徽章汇总', '../GameLearn/ge_UserBadgeTtlCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>用户徽章汇总</cite>
            // </a>
            {
              name: '用户徽章汇总',
              title: '',
              active: false,
              component: ge_UserBadgeTtlCRUD,
              paras: '',
            },

            // <a title="徽章类型" onclick="xadmin.add_tab('徽章类型', '../GameLearn/BadgeTypeCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>徽章类型</cite>
            // </a>
            { name: '徽章类型', title: '', active: false, component: BadgeTypeCRUD, paras: '' },
          ],
        },
        {
          name: '积分徽章-闯关',
          active: false,
          items: [
            {
              name: '用户积分日志',
              title: '',
              active: false,
              component: ge_UserLevelScoreCRUD,
              paras: '',
            },

            {
              name: '用户关卡得分',
              title: '',
              active: false,
              component: ge_UserLevelScoreCRUD,
              paras: '',
            },

            {
              name: '用户积分汇总-闯关',
              title: '',
              active: false,
              component: ge_UserCreditsTtlCRUD,
              paras: '',
            },

            {
              name: '用户徽章日志',
              title: '',
              active: false,
              component: ge_UserBadgeLogCRUD,
              paras: '',
            },

            {
              name: '用户徽章汇总',
              title: '',
              active: false,
              component: ge_UserBadgeTtlCRUD,
              paras: '',
            },

            // <a title="徽章类型" onclick="xadmin.add_tab('徽章类型', '../GameLearn/BadgeTypeCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>徽章类型</cite>
            // </a>
            { name: '徽章类型', title: '', active: false, component: BadgeTypeCRUD, paras: '' },
          ],
        },
        {
          name: '题库管理',
          active: false,
          items: [
            // <a title="可以查看当前教学班内的所有题目" onclick="xadmin.add_tab('题目', '../QuestionaireEdit/QuestionnaireCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>题目</cite>
            // </a>
            { name: '题目', title: '', active: false, component: QuestionnaireCRUD, paras: '' },

            {
              name: '题目列表',
              title: '',
              active: false,
              component: QuestionnaireCRUD_List,
              paras: '',
            },
            // <a title="针对错题" onclick="xadmin.add_tab('错题集', '../InteractManage/ge_StuErrorLibCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>错题集</cite>
            // </a>
            { name: '错题集', title: '', active: false, component: ge_StuErrorLibCRUD, paras: '' },
            // <a onclick="xadmin.add_tab('游戏关卡', '../GameLearn/ge_GameLevelCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>游戏关卡</cite>
            // </a>
            { name: '游戏关卡', title: '', active: false, component: ge_GameLevelCRUD, paras: '' },

            // <a onclick="xadmin.add_tab('用户答题结果', '../QuestionnaireResult/UserAnswerResultCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>用户答题结果</cite>
            // </a>
            {
              name: '用户答题结果',
              title: '',
              active: false,
              component: UserAnswerResultCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('学生练习批改', '../InteractManage/ge_StuBatchQuesRelaCRUDScore')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>学生练习批改</cite>
            // </a>
            {
              name: '学生练习批改',
              title: '',
              active: false,
              component: ge_StuBatchQuesRelaCRUDScore,
              paras: '',
            },

            {
              name: '班级问题分析',
              title: '',
              active: false,
              component: ClassPerfAnalysisCRUD,
              paras: '',
            },
            {
              name: '学生问题分析',
              title: '',
              active: false,
              component: StuPerfAnalysisCRUD,
              paras: '',
            },
          ],
        },
        {
          name: '课程相关管理',
          active: false,
          items: [
            // <a onclick="xadmin.add_tab('课程维护', '../CourseLearning/cc_CourseCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>课程维护</cite>
            // </a>
            { name: '课程维护', title: '', active: false, component: cc_CourseCRUD, paras: '' },
            // <a onclick="xadmin.add_tab('章节', '../Knowledges_Share/cc_CourseChapterCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>章节</cite>
            // </a>
            { name: '章节', title: '', active: false, component: cc_CourseChapterCRUD, paras: '' },
            // <a onclick="xadmin.add_tab('课程学习案例', '../CourseLearning/CourseLearningCaseCRUD')" >
            //                     <i class="iconfont">&#xe6a7;</i>
            //                     <cite>课程学习案例</cite>
            //                 </a>

            // <a onclick="xadmin.add_tab('课程学生关系', '../CourseManage/cc_CourseStudentRelationCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>课程学生关系</cite>
            // </a>
            {
              name: '课程学生关系',
              title: '',
              active: false,
              component: cc_CourseStudentRelationCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('课程教师关系', '../CourseManage/cc_CourseTeacherRelationCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>课程教师关系</cite>
            // </a>
            {
              name: '课程教师关系',
              title: '',
              active: false,
              component: cc_CourseTeacherRelationCRUD,
              paras: '',
            },
          ],
        },
        {
          name: '教学计划管理',
          active: false,
          items: [
            {
              name: '教学计划维护',
              title: '',
              active: false,
              component: JxTeachingPlanCRUD,
              paras: '',
            },

            {
              name: '控件类型',
              title: '',
              active: false,
              component: ge_ControlTypeCRUD,
              paras: '',
            },

            { name: '事件类型', title: '', active: false, component: ge_EventTypeCRUD, paras: '' },
          ],
        },
        {
          name: '编码代码检查',
          active: false,
          items: [
            {
              name: '编程检查结果',
              title: '',
              active: false,
              component: ge_InspectionResultsCRUD,
              paras: '',
            },

            {
              name: '控件类型',
              title: '',
              active: false,
              component: ge_ControlTypeCRUD,
              paras: '',
            },

            { name: '事件类型', title: '', active: false, component: ge_EventTypeCRUD, paras: '' },
            {
              name: '测试上传Excel',
              title: '',
              active: false,
              component: UploadXlsFile,
              paras: '',
            },
            {
              name: '测试上传Excel4Ques',
              title: '',
              active: false,
              component: UploadXlsFile4Ques,
              paras: '',
            },
          ],
        },
      ]);

      const tabs = ref<any[]>([
        {
          label: '欢迎',
          name: 'Welcome',
          component: Welcome,
          paras: '',
        },
      ]);
      // 当前标签页
      const currentTab = ref('');
      const lastCurrentTab = ref('');
      // 添加标签页
      const addTab = (moduleName: string, componentName: string) => {
        const existingTab = tabs.value.find((tab: any) => tab.name === componentName);
        if (!existingTab) {
          const selectedModule = menu.value.find((module: any) => module.name === moduleName);
          if (selectedModule) {
            const selectedComponent = (selectedModule.items as Item[]).find(
              (item: any) => item.name === componentName,
            );
            if (selectedComponent) {
              tabs.value.push({
                label: componentName,
                name: componentName,
                component: selectedComponent.component,
                paras: selectedComponent.paras,
              });
              lastCurrentTab.value = currentTab.value;
              currentTab.value = componentName;
            }
            toggleActiveItem(selectedComponent);
            // selectedModule.items.forEach((m) => {
            //   if (m !== componentName) {
            //     m.active = false;
            //   }
            // });
            // selectedComponent.active = !module.active;
          }
        } else {
          lastCurrentTab.value = currentTab.value;
          currentTab.value = componentName;
        }
        // console.log('currentTab:', currentTab);
        // console.log('currentTab.value:', currentTab.value);

        setTimeout(() => {
          SelectedTab(componentName);
        }, 500);
      };
      const SelectedTab = (componentName: string) => {
        for (let i = 0; i < tabs.value.length; i++) {
          if (tabs.value[i].name == componentName) {
            const divName = refDivLayout.value;
            const divCurr = GetDivObjInDivObjN(divName, `tab-${i}`);
            if (divCurr) divCurr.click();
          }
        }
      };
      const removeTab = (moduleName: string, componentName: string) => {
        const existingTab = tabs.value.find((tab: any) => tab.name === componentName);
        if (existingTab) {
          let indexToRemove = tabs.value.indexOf(componentName); // 获取要移除的元素的索引
          if (indexToRemove !== -1) {
            tabs.value.splice(indexToRemove, 1); // 从数组中移除一个元素
          }

          currentTab.value = lastCurrentTab.value;
        }
        toggleActive(currentTab.value);

        setTimeout(() => {
          SelectedTab(componentName);
        }, 100);
      };
      const closeTab = (tabName: string) => {
        let indexToRemove = tabs.value.indexOf(tabName); // 获取要移除的元素的索引

        tabs.value.splice(indexToRemove, 1);
        if (currentTab.value === tabs.value[indexToRemove]?.name) {
          currentTab.value = ''; // 关闭当前标签页
        }
      };
      // function removeTab(tabName: string): void {
      //   let indexToActive = tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引

      //   tabsStore.removeTab(tabName);
      //   tabsRef.value = tabsStore.myTabs;
      //   if (indexToActive > 0) {
      //     activeTab.value = indexToActive - 1;
      //   } else {
      //     activeTab.value = 0;
      //   }
      // }
      const activeTab = ref(0);
      // 切换菜单状态
      const toggleActive = (module: any) => {
        menu.value.forEach((m: any) => {
          if (m !== module) {
            m.active = false;
          }
        });
        module.active = !module.active;
      };
      const toggleActiveItem = (item: any) => {
        menu.value.forEach((m: any) => {
          m.items.forEach((i: any) => {
            if (i !== item) {
              i.active = false;
            }
          });
        });
        item.active = !item.active;
      };
      // const currentTabComponent = computed(() => {
      //   return tabs[activeTab.value].component;
      // });
      onMounted(async () => {
        console.log(add(2, 3)); // 输出: 5
        if (typeof route.query.menuSetId === 'string') {
          menuSetId.value = route.query.menuSetId;
        }
        let strMsg;
        switch (menuSetId.value) {
          case '0018':
            strTitle.value = '研究生论文阅读系统-个人中心';
            break;
          case '0025':
            strTitle.value = '游戏化教育平台-后台管理';
            break;
          case '0026':
            strTitle.value = '游戏化教育平台-个人中心';
            break;
          default:
            strMsg = `菜单集Id:${menuSetId.value} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
        const strRoleId = userStore.roleId;
        // console.log(strRoleId);

        const arrMenuName_CurrMenuSet = await qxRoleMenusStore.getMenuNamesByCmPrjId(
          strRoleId,
          menuSetId.value,
          clsSysPara4WebApi.cmPrjId,
        );
        // console.log('arrMenuName_CurrMenuSet:', arrMenuName_CurrMenuSet);
        menu.value = menu.value.filter((x: any) => arrMenuName_CurrMenuSet.indexOf(x.name) > -1);
        // console.log(menu.value);
        IndexIframe.GetPropValue = GetPropValue;
        IndexIframe.divLayout = refDivLayout.value;
        window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'menuSetId':
            return menuSetId.value;
          default:
            return '';
        }
        return '';
      }
      //清空框架页
      function RemoveIfame_Click() {
        localStorage.removeItem('hid');
        $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
      }
      //接收的参数
      // function GetRequest() {
      //   const url = location.search; //获取url中"?"符后的字串
      //   const theRequest = new Object();
      //   if (url.indexOf('?') != -1) {
      //  const str = url.substring(1);
      //  strs = str.split('&');
      //  for (let i = 0; i < strs.length; i++) {
      // theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //  }
      //   }
      //   return theRequest;
      // }
      //加载首页
      function window_onload() {
        //加载页面的时候关闭控制框架的所有缓存页面
        RemoveIfame_Click();
        // const Request = new Object();
        // Request = GetRequest();
        // const str1 = Request['page'];

        // const objPage = new IndexIframe();
        // objPage.PageLoad();
        // setInterval('Bind_QuestionsCount1()', 300000); //指定300s刷新一次
      }
      //加载答疑统计数量

      function Bind_QuestionsCount1() {
        const objPage = new IndexIframe();
        objPage.Bind_QuestionsCount();
      }
      //切换教学班
      function EduCls_Click(strkey: string, strName: string, strTypeID: string) {
        const objPage = new IndexIframe();
        const divName = refDivLayout.value;
        objPage.EduCls_Click(divName, strkey, strName, strTypeID, '');
        //RemoveIfame_Click();
      }
      //加载欢迎页
      //function WelcomeLoad_Click() {
      //  const objPage = new welcome.Welcome();
      //  objPage.PageLoad();
      //}
      //信息提示
      function layui_Alert(iconKey: string, strMsg: string) {
        message.success(strMsg);
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");
            // router.push({ name: 'myabout' });
            // console.log("router.push({ name: 'myabout' });");
            break;
          default:
            break;
        }
      }
      return {
        refDivLayout,
        tabs,
        activeTab,

        btn_Click,
        toggleActive,
        menu,
        addTab,
        removeTab,
        currentTab,
        closeTab,
        Bind_QuestionsCount1,
        menuSetId,
        strTitle,
      };
    },
  });
</script>
<style scoped>
  #ModularName {
    font-size: 18px;
    font-style: italic;
    /*font-weight: bold;*/
  }
  /* 样式可以根据需求进行修改 */
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  header {
    /* background-color: #333; */
    /* color: white; */
    padding: 20px;
    text-align: center;
  }
  .main-content {
    display: flex;
    flex: 1;
  }
  .sidebar {
    background-color: #f0f0f0;
    width: 250px;
    padding: 20px;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar li {
    margin-bottom: 1px;
  }
  .content {
    flex: 1;
    padding: 20px;
  }
  .nav-link {
    cursor: pointer;
    background-color: #f2f8fc;
  }

  .nav-link.active {
    font-weight: bold;
    background-color: #60b6f3;
  }
  /* .nav-item {
  } */

  .module-divider {
    border-top: 2px solid #d1b1b1;
    margin: 0;
  }
  .module-name {
    font-weight: bold;
    padding: 10px 0;
    font-size: 1.05rem;
  }
  .item-name {
    font-weight: normal;
    /* background-color: #7ac2f5; */
    font-size: 0.9rem;
  }
  .module-active {
    font-weight: bold;
    background-color: #1a9bf7;
  }
  .item_active {
    font-weight: bold;
    background-color: #dadcf3;
  }
</style>
<!-- // 
// <script src="~/lib/Xadmin/js/x1admin.js" type="text/javascript"></script>
//  -->
