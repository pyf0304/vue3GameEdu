import { defineComponent as _, createElementBlock as p, openBlock as u, createElementVNode as t, ref as $, Fragment as j, toDisplayString as d, createTextVNode as c, pushScopeId as C, popScopeId as O } from "vue";
const y = _({
  name: "ComponentA"
}), a = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of o)
    n[s] = l;
  return n;
}, S = /* @__PURE__ */ t("span", null, "Component A", -1), k = [
  S
];
function B(e, o, n, s, l, h) {
  return u(), p("div", null, k);
}
const A = /* @__PURE__ */ a(y, [["render", B]]), m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A
}, Symbol.toStringTag, { value: "Module" })), M = _({
  name: "ComponentB"
}), x = /* @__PURE__ */ t("p", null, "Component B", -1), V = [
  x
];
function H(e, o, n, s, l, h) {
  return u(), p("div", null, V);
}
const I = /* @__PURE__ */ a(M, [["render", H]]), g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I
}, Symbol.toStringTag, { value: "Module" })), r = (e) => (C("data-v-1d5be6d4"), e = e(), O(), e), T = { class: "card" }, z = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ c(" Edit "),
  /* @__PURE__ */ t("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ c(" to test HMR ")
], -1)), P = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ c(" Check out "),
  /* @__PURE__ */ t("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ c(", the official Vue + Vite starter ")
], -1)), W = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ c(" Install "),
  /* @__PURE__ */ t("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ c(" in your IDE for a better DX ")
], -1)), E = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), D = /* @__PURE__ */ _({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    const o = $(0);
    return (n, s) => (u(), p(j, null, [
      t("h1", null, d(n.msg), 1),
      t("div", T, [
        t("button", {
          type: "button",
          onClick: s[0] || (s[0] = (l) => o.value++)
        }, "count is " + d(o.value), 1),
        z
      ]),
      P,
      W,
      E
    ], 64));
  }
}), N = /* @__PURE__ */ a(D, [["__scopeId", "data-v-1d5be6d4"]]), b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: N
}, Symbol.toStringTag, { value: "Module" })), f = /* @__PURE__ */ Object.assign({ "./ComponentA.vue": m, "./ComponentB.vue": g, "./HelloWorld.vue": b });
console.log("components:in src/components/index", f);
const i = Object.entries(f).reduce(
  (e, [o, n]) => {
    const s = o.replace("./", "").replace(".vue", "");
    return e[s] = n.default, e;
  },
  {}
), q = i.ComponentA, Q = i.ComponentB;
console.log("ComponentA:", q);
console.log("componentMap:", i);
function w(e, o) {
  return e + o;
}
function F(e, o) {
  return e - o;
}
const R = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: w,
  subtract: F
}, Symbol.toStringTag, { value: "Module" }));
function X(e) {
  return e.split("").reverse().join("");
}
const G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  reverseString: X
}, Symbol.toStringTag, { value: "Module" })), J = /* @__PURE__ */ Object.assign({ "./math.ts": R, "./string.ts": G });
Object.entries(J).reduce((e, [o, n]) => {
  const s = o.replace("./", "").replace(".ts", "");
  return e[s] = n, e;
}, {});
const v = /* @__PURE__ */ Object.assign({ "./components/ComponentA.vue": m, "./components/ComponentB.vue": g, "./components/HelloWorld.vue": b });
console.log("components: in src/index", v);
const K = Object.keys(v);
console.log("paths:", K);
export {
  q as ComponentA,
  Q as ComponentB,
  w as add,
  i as componentMap,
  F as subtract
};
