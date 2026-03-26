<template>
  <div class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" href="#Discuss1" role="tab">教师答疑</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#Discuss2" role="tab">综合讨论</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#Discuss3" role="tab">小组讨论</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div id="Discuss1" class="tab-pane fade show active">
        <!-- Discuss1 内容 -->
        aaaa
      </div>
      <div id="Discuss2" class="tab-pane fade">
        <!-- Discuss2 内容 -->
        bbbb
      </div>
      <div id="Discuss3" class="tab-pane fade">
        <!-- Discuss3 内容 -->
        cccc
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { computed, defineComponent, onMounted, ref } from 'vue';
  //   import { useStore } from 'vuex'

  import aaCom from '@/viewsShare/tabs/aa.vue';
  import bbCom from '@/viewsShare/tabs/bb.vue';
  import ccCom from '@/viewsShare/tabs/cc.vue';
  import { useTabsStore } from '@/store/modules/tabs';

  // 组件中使用 Store

  export default defineComponent({
    name: 'testTabs',

    setup() {
      const tabsStore = useTabsStore();
      const components = {
        aaCom,
        bbCom,
        ccCom,
      };
      const activeTab = ref(0);
      // const activeTabLast = ref(1);
      const currentTabComponent = computed(() => {
        // const intActiveTab = activeTabLast.value;
        // if (intActiveTab > 0) {
        //   activeTab.value = intActiveTab;
        // }
        const myTabs = tabsStore.myTabs;
        const tabName = myTabs[activeTab.value];
        // return tabName;
        // return `${tabName}Com`;
        switch (tabName) {
          case 'aaCom':
            return aaCom;
          case 'bbCom':
            return bbCom;
          case 'ccCom':
            return ccCom;
        }
        // const arrEntries = Object.entries(components);
        // const objCom = arrEntries[activeTab.value];
        // return objCom;
        // const strIndex: any = `${tabName}Com`;
        // return components[tabName];
      });
      onMounted(() => {
        console.log('components list:', components);
        const componentNames = Object.keys(components);
        const arrEntries = Object.entries(components);
        for (let i = 0; i < arrEntries.length; i++) {
          const objCom = arrEntries[i];
          console.log(`arrEntries [${i}]:`, objCom);
          console.log(`typeof objCom [${i}]:`, typeof objCom);
        }

        // const arrProps = Object.entries(components);
        // for (let i = 0; i < arrEntries.length; i++) {
        //   const objCom = arrEntries[i];
        //   console.log(`arrEntries [${i}]:`, objCom);
        //   console.log(`typeof objCom [${i}]:`, typeof objCom);
        // }

        console.log('arrEntries:', arrEntries);
        // 遍历组件列表
        componentNames.forEach((componentName) => {
          // 对每个组件进行操作或其他处理
          console.log(componentName);
        });
        for (let i = 0; i < 3; i++) {
          console.log(`components [${i}]:`, components['aaCom']);
        }
        // components.forEach((component) => {
        //   console.log(component);
        // });
      });

      // const textRef = ref(store.state.moduleA.text);
      const tabsRef = ref(tabsStore.myTabs);

      function addTab(tabName: string): void {
        tabsStore.addTab(tabName);
        tabsRef.value = tabsStore.myTabs;
        let indexToActive = tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引
        if (indexToActive !== -1) {
          activeTab.value = indexToActive;
        }
      }
      function removeTab(tabName: string): void {
        let indexToActive = tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引

        tabsStore.removeTab(tabName);
        tabsRef.value = tabsStore.myTabs;
        if (indexToActive > 0) {
          activeTab.value = indexToActive - 1;
        } else {
          activeTab.value = 0;
        }
      }

      return {
        addTab,

        removeTab,
        tabsRef,

        activeTab,
        currentTabComponent,
        tabsStore,
      };
    },
    computed: {
      tabs() {
        // 这里是从 Vuex store 获取 tabs 状态
        // return this.$store.state.tabs;
        this.tabsRef = this.tabsStore.myTabs;

        return this.tabsRef;
      },
    },
    methods: {
      // addTab(componentName: any) {
      //   // 更新 Vuex store 中的 tabs 状态
      //   // this.$store.commit("addTab", componentName);
      //   store.commit("tabs/addTabs", componentName);
      //   this.tabsRef = store.state.tabs.myTabs;
      // },
      changeTab(tabName: string) {
        const indexToActive = this.tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引
        if (indexToActive != -1) this.activeTab = indexToActive;
        // 切换当前显示的组件
        // this.$router.push({ name: tabName });
      },
    },
  });
</script>
<style scoped></style>
