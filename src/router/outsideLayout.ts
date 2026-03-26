import type { RouteRecordRaw } from 'vue-router';
import { LOGIN_NAME } from '@/router/constant';

/**
 * layout布局之外的路由
 */
export const LoginRoute: RouteRecordRaw = {
  path: '/login1',
  name: LOGIN_NAME,
  //component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
  component: () => import(/* webpackChunkName: "login" */ '@/views/web/Index.vue'),

  meta: {
    title: '登录',
  },
};
export default [LoginRoute];
