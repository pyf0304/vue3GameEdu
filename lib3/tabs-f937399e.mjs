import { defineComponent as l, ref as a, toRefs as _, openBlock as i, createElementBlock as m, Fragment as d, createElementVNode as p } from "vue";
import { _ as f, K as b } from "./index-b2b0ebb3.mjs";
const $ = l({
  name: "aa",
  props: { msg: String },
  setup(e) {
    const t = a(""), s = a("");
    let { msg: n } = _(e);
    const o = (u, c) => {
      alert(`"命令:${u}, 关键字:${c}.`);
    };
    function r() {
      alert(t.value);
    }
    return {
      btn_Click: o,
      msg: n,
      prop1: t,
      prop2: s,
      GetPropValue: r
    };
  },
  methods: {}
});
function v(e, t, s, n, o, r) {
  return i(), m(d, null, [
    t[0] || (t[0] = p("span", { class: "text-primary h4" }, "aa页面:", -1)),
    t[1] || (t[1] = p("span", null, "aa页面:", -1))
  ], 64);
}
const S = /* @__PURE__ */ f($, [["render", v], ["__scopeId", "data-v-11e92cef"]]), x = l({
  name: "bb",
  props: { msg: String },
  setup(e) {
    const t = a(""), s = a("");
    let { msg: n } = _(e);
    const o = (u, c) => {
      alert(`"命令:${u}, 关键字:${c}.`);
    };
    function r() {
      alert(t.value);
    }
    return {
      btn_Click: o,
      msg: n,
      prop1: t,
      prop2: s,
      GetPropValue: r
    };
  },
  methods: {}
});
function y(e, t, s, n, o, r) {
  return i(), m(d, null, [
    t[0] || (t[0] = p("span", { class: "text-primary h4" }, "bb页面:", -1)),
    t[1] || (t[1] = p("span", null, "bb页面:", -1))
  ], 64);
}
const V = /* @__PURE__ */ f(x, [["render", y], ["__scopeId", "data-v-5e9907b5"]]), g = l({
  name: "cc",
  props: { msg: String },
  setup(e) {
    const t = a(""), s = a("");
    let { msg: n } = _(e);
    const o = (u, c) => {
      alert(`"命令:${u}, 关键字:${c}.`);
    };
    function r() {
      alert(t.value);
    }
    return {
      btn_Click: o,
      msg: n,
      prop1: t,
      prop2: s,
      GetPropValue: r
    };
  },
  methods: {}
});
function T(e, t, s, n, o, r) {
  return i(), m(d, null, [
    t[0] || (t[0] = p("span", { class: "text-primary h4" }, "cc页面:", -1)),
    t[1] || (t[1] = p("span", null, "cc页面:", -1))
  ], 64);
}
const G = /* @__PURE__ */ f(g, [["render", T], ["__scopeId", "data-v-252a33c2"]]), I = b({
  id: "tabs",
  state() {
    return {
      myTabs: []
    };
  },
  actions: {
    addTab(e) {
      this.myTabs.indexOf(e) == -1 && this.myTabs.push(e);
    },
    removeTab(e) {
      let t = this.myTabs.indexOf(e);
      t !== -1 && this.myTabs.splice(t, 1);
    }
  }
});
export {
  S as a,
  V as b,
  G as c,
  I as u
};
