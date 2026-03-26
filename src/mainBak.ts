import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zh from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en'; // element-ui lang
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faHome,
  faCoffee,
  faUser,
  faSearch,
  faPlus,
  faPlay,
  faSortUp,
  faArrowsRotate,
  faFileLines,
  faTimes,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
let lang = { zh, en };
app.use(ElementPlus);

const pinia = createPinia();
app.use(pinia);
app.use(router);

// 全局注册模态框组件
setupPlugins();
app.mount('#app');

function setupPlugins() {
  // // 引入静态资源
  // setupAssets();
  // // 注册全局自定义组件,如：<svg-icon />
  // setupCustomComponents(app);
  // // 注册全局自定义指令，如：v-permission权限指令
  // setupDirectives(app);
  // // 注册全局方法，如：app.config.globalProperties.$message = message
  // setupGlobalMethods(app);
}
