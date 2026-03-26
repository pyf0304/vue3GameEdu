// import 'nprogress/css/nprogress.css'; // 进度条样式
import { App } from 'vue';
// import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// import { createRouterGuards } from './router-guards';

// import outsideLayout from './outsideLayout';
import { whiteNameList } from './constant';
// import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import KnowledgePreTest from '@/views/DriftingBottleGame/KnowledgePreTest.vue';
import { dailyRunningMap } from 'share-stu-study-base-lib';
// import demosPyf from '@/router/staticModules/demosPyf';
// import rtParams from '@/router/staticModules/rtParams';
// import { t } from '@/hooks/useI18n';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    // redirect: '/about',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index.vue'),

    meta: {
      title: '首页',
    },
    children: [],
  },
  // window.location.href = '../Web/Basicknowledge';
  {
    path: '/Basicknowledge',
    name: 'Basicknowledge',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Basicknowledge.vue'),
    meta: {
      title: 'Basicknowledge',
    },
    children: [],
  },
  {
    path: '/KnowledgeAssess',
    name: 'KnowledgeAssess',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/KnowledgeAssess.vue'),
    meta: {
      title: 'KnowledgeAssess',
    },
    children: [],
  },
  {
    path: '/PassGame',
    name: 'PassGame',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/PassGame.vue'),
    meta: {
      title: 'PassGame',
    },
    children: [],
  },

  {
    path: '/BottleGame',
    name: 'BottleGame',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/BottleGame.vue'),
    meta: {
      title: 'BottleGame',
    },
    children: [],
  },
  {
    path: '/Achievement',
    name: 'Achievement',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Achievement.vue'),
    meta: {
      title: 'Achievement',
    },
    children: [],
  },
  {
    path: '/KnowledgeGraph',
    name: 'KnowledgeGraph',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/viewsShare/LearnChart/KnowledgeGraph.vue'),
    meta: {
      title: 'KnowledgeGraph',
    },
    children: [],
  },
  {
    path: '/ExamSet',
    name: 'ExamSet',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/ExamSet.vue'),
    meta: {
      title: 'ExamSet',
    },
    children: [],
  },
  {
    path: '/Work',
    name: 'Work',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Work.vue'),
    meta: {
      title: 'Work',
    },
    children: [],
  },
  {
    path: '/LearningCommunity',
    name: 'LearningCommunity',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/LearningCommunity.vue'),
    meta: {
      title: 'LearningCommunity',
    },
    children: [],
  },
  {
    path: '/CheckOperationQuestionNew',
    name: 'CheckOperationQuestionNew',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/web/CheckOperationQuestionNew.vue'),
    meta: {
      title: 'CheckOperationQuestionNew',
    },
    children: [],
  },

  {
    path: '/testNewAgc',
    name: 'testNewAgc',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/TeachingPlan/JxTeachingPlanCRUD.vue'),
    meta: {
      title: 'testNewAgc',
    },
    children: [],
  },
  {
    path: '/editTeachingPlanKnowledge/:idTeachingPlan',
    name: `editTeachingPlanKnowledge`,
    component: () => import('@/views/TeachingPlan/JxTeachPlanKnowledgeCRUD.vue'),
    meta: {
      title: 'editTeachingPlanKnowledge',
    },
  },
  {
    path: '/testButtonRadio',
    name: 'testButtonRadio',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/testButtonRadio.vue'),
    meta: {
      title: 'testButtonRadio',
    },
    children: [],
  },

  {
    path: '/testSpiderChart',
    name: 'testSpiderChart',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/testSpiderChart.vue'),
    meta: {
      title: 'testSpiderChart',
    },
    children: [],
  },
  {
    path: '/testHeatmapChart',
    name: 'testHeatmapChart',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/testHeatmapChart.vue'),
    meta: {
      title: 'testHeatmapChart',
    },
    children: [],
  },

  {
    path: '/testSpiderChartV2',
    name: 'testSpiderChartV2',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/testSpiderChartV2.vue'),
    meta: {
      title: 'testSpiderChartV2',
    },
    children: [],
  },

  {
    path: '/testTabs2',
    name: 'testTabs2',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/viewsShare/tabs/testTabsInBootStrap.vue'),
    meta: {
      title: 'testTabs2',
    },
    children: [],
  },
  {
    path: '/admin1',
    name: 'admin1',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/testAdmin/admin1.vue'),
    meta: {
      title: 'admin1',
    },
    children: [
      {
        path: '/about',
        name: 'myabout',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/about.vue'),
        meta: {
          title: '首页',
        },
        children: [],
      },
    ],
  },
  {
    path: '/admin2',
    name: 'admin2',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/testAdmin/admin2.vue'),
    meta: {
      title: 'admin2',
    },
    children: [
      {
        path: '/about',
        name: 'myabout',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/about.vue'),
        meta: {
          title: '关于',
        },
        children: [],
      },
      {
        path: '/about2',
        name: 'myabout2',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/about2.vue'),
        meta: {
          title: '关于2',
        },
        children: [],
      },
    ],
  },
  {
    path: '/admin3',
    name: 'admin3',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/testAdmin/admin3.vue'),
    meta: {
      title: 'admin3',
    },
    children: [
      {
        path: '/about',
        name: 'myabout',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/about.vue'),
        meta: {
          title: '关于',
        },
        children: [],
      },
      {
        path: '/about2',
        name: 'myabout2',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/about2.vue'),
        meta: {
          title: '关于2',
        },
        children: [],
      },
    ],
  },
  {
    path: '/admin4',
    name: 'admin4',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/testAdmin/admin4.vue'),
    meta: {
      title: 'admin4',
    },
    children: [
      {
        path: '/about',
        name: 'myabout',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/about.vue'),
        meta: {
          title: '关于',
        },
        children: [],
      },
      {
        path: '/about2',
        name: 'myabout2',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/about2.vue'),
        meta: {
          title: '关于2',
        },
        children: [],
      },
    ],
  },
  {
    path: '/admin5',
    name: 'admin5',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/testAdmin/admin5.vue'),
    meta: {
      title: 'admin5',
    },
    children: [
      {
        path: '/about',
        name: 'myabout',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/about.vue'),
        meta: {
          title: '关于',
        },
        children: [],
      },
      {
        path: '/about2',
        name: 'myabout2',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/about2.vue'),
        meta: {
          title: '关于2',
        },
        children: [],
      },
    ],
  },

  {
    path: '/testDropdownMenu1',
    name: 'testDropdownMenu1',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/ViewsTest/testDropdownMenu/dropdownMenu1.vue'),
    meta: {
      title: 'testDropdownMenu1',
    },
    children: [],
  },
  {
    path: '/testDropdownMenu2',
    name: 'testDropdownMenu2',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/ViewsTest/testDropdownMenu/dropdownMenu2.vue'),
    meta: {
      title: 'testDropdownMenu2',
    },
    children: [],
  },
  {
    path: '/testTabs',
    name: 'testTabs',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/tabs/testTabs.vue'),
    meta: {
      title: 'testTabs',
    },
    children: [],
  },
  // {
  //   path: '/MindMap',
  //   name: 'MindMap',
  //   component: () => import('@/ViewsTest/TestMindMap/MindMap.vue'),
  //   meta: {
  //     title: 'MindMap',
  //   },
  //   children: [],
  // },
  {
    path: '/MindMap2',
    name: 'MindMap2',
    component: () => import('@/ViewsTest/TestMindMap/MindMap2.vue'),
    meta: {
      title: 'MindMap2',
    },
    children: [],
  },
  {
    path: '/downloadFile',
    name: 'downloadFile',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/tools/downloadFile.vue'),
    meta: {
      title: '下载文件',
    },
    children: [],
  },
  {
    path: '/IndexIframe',
    name: 'index',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },

  {
    path: '/IndexIframe',
    name: 'IndexIframe',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/IndexIframe.vue'),
    meta: {
      title: '用户中心',
    },
    children: [],
  },

  {
    path: '/CurrEduClsInfo',
    name: 'CurrEduClsInfo',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(
        /* webpackChunkName: "layout" */ (dailyRunningMap as GlobalComponentMap)['CurrEduClsInfo']
      ),
    meta: {
      title: '教学班信息',
    },
    children: [],
  },

  {
    path: '/UploadFile',
    name: 'UploadFile',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/tUploadFile.vue'),
    meta: {
      title: '上传文件',
    },
    children: [],
  },
  {
    path: '/dialog1',
    name: 'dialog1',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/myDialog/Dialog1.vue'),
    meta: {
      title: '对话框',
    },
    children: [],
  },

  {
    path: '/testDropButton',
    name: 'testDropButton',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/testADropButton.vue'),
    meta: {
      title: '测试下拉按钮',
    },
    children: [],
  },
  {
    path: '/tElDropButton1',
    name: 'tElDropButton1',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/tElDropButton1.vue'),
    meta: {
      title: '测试下拉按钮',
    },
    children: [],
  },
  {
    path: '/tElDropButton2',
    name: 'tElDropButton2',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/tElDropButton2.vue'),
    meta: {
      title: '测试下拉按钮2',
    },
    children: [],
  },
  {
    path: '/tElDropButton3',
    name: 'tElDropButton3',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/tElDropButton4.vue'),
    meta: {
      title: '测试下拉按钮3',
    },
    children: [],
  },
  {
    path: '/testMyDropButton',
    name: 'testMyDropButton',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/ViewsTest/test/testMyDropButton.vue'),
    meta: {
      title: '测试下拉按钮3',
    },
    children: [],
  },

  {
    path: '/testPdf3',
    name: 'testPdf3',
    component: () => import(/* webpackChunkName: "about" */ '@/ViewsTest/test/Pdf/testPdf3.vue'),
  },
  {
    path: '/testBsDialog2',
    name: 'testBsDialog2',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/ViewsTest/testBootstrapDialog/bsDialog2.vue'),
  },
  {
    path: '/testJsMind1',
    name: 'testJsMind1',
    component: () => import(/* webpackChunkName: "about" */ '@/ViewsTest/testJsMind/jsMind4.vue'),
  },
  {
    path: '/BottleGameStart',
    name: `BottleGameStart`,
    // redirect: { name: `${moduleName}-custom-modal` },
    meta: {
      title: '漂流瓶游戏开始',
      icon: 'icon-zhuomian',
      // keepAlive: true,
      isExt: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/DriftingBottleGame/BottleGameStart.vue'
      ),
  },
  {
    path: '/pretest',
    name: 'KnowledgePreTest',
    component: KnowledgePreTest,
  },
  {
    path: '/SimpleBottleGame',
    name: `SimpleBottleGame`,
    // redirect: { name: `${moduleName}-custom-modal` },
    meta: {
      title: '漂流瓶测试',
      icon: 'icon-zhuomian',
      // keepAlive: true,
      isExt: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/DriftingBottleGame/SimpleBottleGame.vue'
      ),
  },
  {
    path: '/testShare1',
    name: `testShare1`,
    // redirect: { name: `${moduleName}-custom-modal` },
    meta: {
      title: '测试共享1',
      icon: 'icon-zhuomian',
      // keepAlive: true,
      isExt: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/ViewsTest/testShare/testShare1.vue'
      ),
  },
  {
    path: '/GameBottleCRUD',
    name: `GameBottleCRUD`,
    // redirect: { name: `${moduleName}-custom-modal` },
    meta: {
      title: '漂流瓶维护',
      icon: 'icon-zhuomian',
      // keepAlive: true,
      isExt: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/GameLearn/GameBottleCRUD.vue'
      ),
  },
  {
    path: '/Leaderboard',
    name: `Leaderboard`,
    // redirect: { name: `${moduleName}-custom-modal` },
    meta: {
      title: '排行榜',
      icon: 'icon-zhuomian',
      // keepAlive: true,
      isExt: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/DriftingBottleGame/Leaderboard.vue'
      ),
  },

  {
    path: '/cc_KnowledgeStuTeachLogCRUD',
    name: `cc_KnowledgeStuTeachLogCRUD`,
    // redirect: { name: `${moduleName}-custom-modal` },
    meta: {
      title: '学生知识点学习日志',
      icon: 'icon-zhuomian',
      // keepAlive: true,
      isExt: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/Knowledges/cc_KnowledgeStuTeachLogCRUD.vue'
      ),
  },

  // Layout之外的路由

  // ...demosPyf,
  // ...rtParams,
  // Layout之外的路由
];
export const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(''),
  routes,
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route: any) => {
    const { name } = route;
    if (name && !whiteNameList.some((n) => n === name)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}
export async function setupRouter(app: App) {
  // 创建路由守卫
  // createRouterGuards(router, whiteNameList);

  app.use(router);
  // console.log(router);
  // 路由准备就绪后挂载APP实例
  await router.isReady();
}
export default router;
