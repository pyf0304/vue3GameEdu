import type { RouteRecordRaw } from 'vue-router';
// import RouterView from '@/layout/routerView/index.vue';
// import { t } from '@/hooks/useI18n';

// const moduleName = 'demos';
const routes: Array<RouteRecordRaw> = [
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
    path: '/pyf-about2',
    name: `pyf-about2`,
    // redirect: { name: `${moduleName}-custom-modal` },
    meta: {
      title: '关于2',
      icon: 'icon-zhuomian',
      // keepAlive: true,
      isExt: true,
    },
    component: () =>
      import(/* webpackChunkName: "demos-custom-a-custom-modal" */ '@/ViewsTest/test/about2.vue'),
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
  // {
  //   path: '/testAutoComplete',
  //   name: `testAutoComplete`,
  //   // redirect: { name: `${moduleName}-custom-modal` },
  //   meta: {
  //     title: t('routes.demo.testAutoComplete'),
  //     icon: 'icon-zhuomian',
  //     // keepAlive: true,
  //     isExt: true,
  //   },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/ts/components/testAutoComplete.vue'
  //     ),
  // },
  // {
  //   path: '/testAutoCompletePro',
  //   name: `testAutoCompletePro`,
  //   // redirect: { name: `${moduleName}-custom-modal` },
  //   meta: {
  //     title: t('routes.demo.testAutoComplete'),
  //     icon: 'icon-zhuomian',
  //     // keepAlive: true,
  //     isExt: true,
  //   },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/ts/components/testAutoCompletePro.vue'
  //     ),
  // },
];
export default routes;
