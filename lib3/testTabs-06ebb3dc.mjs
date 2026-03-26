import { defineComponent as y, ref as T, computed as g, onMounted as k, resolveComponent as $, openBlock as m, createElementBlock as l, createElementVNode as a, toDisplayString as f, Fragment as _, renderList as B, normalizeClass as h, createTextVNode as E, createVNode as j, createBlock as I, resolveDynamicComponent as O } from "vue";
import { u as S, c as p, b as v, a as C } from "./tabs-f937399e.mjs";
import { _ as A } from "./index-b2b0ebb3.mjs";
const D = y({
  name: "testTabs",
  setup() {
    const e = S(), o = {
      aaCom: C,
      bbCom: v,
      ccCom: p
    }, r = T(0), b = g(() => {
      switch (e.myTabs[r.value]) {
        case "aaCom":
          return C;
        case "bbCom":
          return v;
        case "ccCom":
          return p;
      }
    });
    k(() => {
      console.log("components list:", o);
      const t = Object.keys(o), n = Object.entries(o);
      for (let s = 0; s < n.length; s++) {
        const d = n[s];
        console.log(`arrEntries [${s}]:`, d), console.log(`typeof objCom [${s}]:`, typeof d);
      }
      console.log("arrEntries:", n), t.forEach((s) => {
        console.log(s);
      });
      for (let s = 0; s < 3; s++)
        console.log(`components [${s}]:`, o.aaCom);
    });
    const c = T(e.myTabs);
    function u(t) {
      e.addTab(t), c.value = e.myTabs;
      let n = e.myTabs.indexOf(t);
      n !== -1 && (r.value = n);
    }
    function i(t) {
      let n = e.myTabs.indexOf(t);
      e.removeTab(t), c.value = e.myTabs, n > 0 ? r.value = n - 1 : r.value = 0;
    }
    return {
      addTab: u,
      removeTab: i,
      tabsRef: c,
      activeTab: r,
      currentTabComponent: b,
      tabsStore: e
    };
  },
  computed: {
    tabs() {
      return this.tabsRef = this.tabsStore.myTabs, this.tabsRef;
    }
  },
  methods: {
    // addTab(componentName: any) {
    //   // 更新 Vuex store 中的 tabs 状态
    //   // this.$store.commit("addTab", componentName);
    //   store.commit("tabs/addTabs", componentName);
    //   this.tabsRef = store.state.tabs.myTabs;
    // },
    changeTab(e) {
      const o = this.tabsStore.myTabs.indexOf(e);
      o != -1 && (this.activeTab = o);
    }
  }
});
const N = { class: "tabs" }, R = ["onClick"], w = ["onClick"];
function V(e, o, r, b, c, u) {
  const i = $("font-awesome-icon");
  return m(), l("div", null, [
    a("p", null, "moduleB-items: " + f(e.tabsRef), 1),
    o[4] || (o[4] = a("span", { class: "h5" }, "测试动态tabs", -1)),
    a("button", {
      onClick: o[0] || (o[0] = (t) => e.addTab("aaCom"))
    }, "addItem-aa"),
    a("button", {
      onClick: o[1] || (o[1] = (t) => e.addTab("bbCom"))
    }, "addItem-bb"),
    a("button", {
      onClick: o[2] || (o[2] = (t) => e.addTab("ccCom"))
    }, "addItem-cc"),
    a("button", {
      onClick: o[3] || (o[3] = (t) => e.removeTab("aaCom"))
    }, "removeItem-aa"),
    a("ul", N, [
      (m(!0), l(_, null, B(e.tabs, (t, n) => (m(), l("li", {
        key: n,
        class: h({ active: e.activeTab === n }),
        onClick: (s) => e.changeTab(t)
      }, [
        E(f(t) + " ", 1),
        a("a", {
          href: "javascript:void(0)",
          class: "ml-2",
          title: "移除该页面",
          onClick: (s) => e.removeTab(t)
        }, [
          j(i, {
            icon: "times",
            style: { color: "rgb(164, 207, 247)" }
          })
        ], 8, w)
      ], 10, R))), 128))
    ]),
    (m(), I(O(e.currentTabComponent)))
  ]);
}
const M = /* @__PURE__ */ A(D, [["render", V], ["__scopeId", "data-v-b3a7f549"]]);
export {
  M as default
};
