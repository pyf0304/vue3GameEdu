import { S as v, m as F, _ as h } from "./index-b2b0ebb3.mjs";
import { P as y, a as k, I as c } from "./PageHead_Game-c516a874.mjs";
import { ref as t, reactive as l, defineComponent as B, onMounted as x, resolveComponent as m, openBlock as w, createElementBlock as D, createVNode as E, createElementVNode as a, createStaticVNode as b } from "vue";
import { m as L } from "./clsPubFun4Menu-b6310675.mjs";
const j = t("Asc"), P = t("");
l({
  ascOrDesc4SortFun: j,
  sortge_UserCreditsLogBy: P
});
t("");
t("");
const s = t(), U = t(), S = t(), H = t(), R = t(), G = t(), I = t(), Q = t(), T = t();
l({
  refDivLayout: s,
  refDivQuery: U,
  refDivFunction: S,
  refDivList: H,
  refDivEdit: R,
  refDivDetail: G,
  refge_UserCreditsLog_Detail: I,
  refge_UserCreditsLog_Edit: Q,
  refge_UserCreditsLog_List: T
});
t(!1);
t("");
const z = t("");
l({
  masterLevelId_q_Cls: z
});
l({});
const O = B({
  name: "LearningCommunity",
  components: {
    // 组件注册
    PageEnd_Game: y,
    PageHead_Game: k
  },
  setup() {
    const i = t("menu1"), e = t(), A = t("学习社区-游戏化教育平台"), f = t("首页-游戏化教育平台"), p = t("pyf");
    x(() => {
      c.vuebtn_Click = u, C();
    });
    function C() {
      e.value.indexTitle = "学习社区", new c().PageLoad();
    }
    function o(d, n) {
      const _ = n.target;
      switch (console.log("当前被单击的控件：", _), L(_), d) {
        case 1:
          v(s.value, "navTitle", "战绩分享");
          break;
        case 2:
          v(s.value, "navTitle", "成果分享");
          break;
        case 3:
          v(s.value, "navTitle", "帮助");
          break;
      }
    }
    function u(d, n) {
      switch (console.log(n), d) {
        case "Bind_EduClsList":
          e.value.Bind_EduClsList();
          return;
        case "setRoles":
          e.value.setRoles();
          return;
        case "setEduClss":
          e.value.setEduClss();
          return;
      }
      c.btn_Click(d, n);
    }
    function r() {
      F.warning("函数DiscussSubmit_Click没有实现！");
    }
    return {
      refDivLayout: s,
      activeTabId: i,
      btn_Click: u,
      sysTitle: f,
      UserName: p,
      mySystemName: A,
      refPageHead: e,
      Menu_Click: o,
      DiscussSubmit_Click: r
    };
  }
}), g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB/CAMAAAD4iE1bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAVUExURQAAANnZ2dra2tra2tnZ2djY2NnZ2U8UJr0AAAAFdFJOUwBlmKrjUHgPaQAAAAlwSFlzAAAXEQAAFxEByibzPwAAALZJREFUaEPt2zESwyAMRFEIju9/5DSqVyrWWzj/1YI/tJphjX2mat7p3DOn5p3Od+SZdr2rQ9uHtkbbh7ZG24e2RtuHtkbbh7ZG24e2RtuHtkbb52XtfYauurtz1Xxrr11H8mjn0c6jnUc7j3Ye7TzaebTzaOfRzqOdRzvvj9u17Wo9sF8bY5+q0fahrdH2oa3R9qGt0fahrdH2oa3R9qGt0fahrdH2OXf9fG287d31y7lX8521fuRbwclMJkIYAAAAAElFTkSuQmCC";
const q = {
  id: "divLayout",
  ref: "refDivLayout",
  class: "divComContainer"
}, M = { class: "content" }, N = { class: "box1" }, X = { style: { width: "100%" } }, Y = {
  class: "nav nav-tabs",
  role: "tablist"
}, Z = { class: "nav-item" }, V = { class: "nav-item" }, J = { class: "nav-item" }, $ = { class: "tab-content" }, W = {
  id: "Community3",
  class: "tab-pane fade"
}, K = { style: { float: "right", width: "74%", "margin-right": "10px" } }, aa = {
  class: "title",
  style: { "text-align": "right", float: "right" }
}, ea = {
  id: "tabQuery",
  style: { width: "500px" },
  class: "table table-bordered table-hover table td"
};
function ta(i, e, A, f, p, C) {
  const o = m("PageHead_Game"), u = m("font-awesome-icon"), r = m("PageEnd_Game");
  return w(), D("div", q, [
    E(o, {
      ref: "refPageHead",
      title: ""
    }, null, 512),
    a("div", M, [
      a("div", N, [
        e[8] || (e[8] = b('<div class="title" data-v-a0a8edd8><nav class="breadcrumb" data-v-a0a8edd8><a class="breadcrumb-item" href="#/Index" data-v-a0a8edd8>首页</a><a class="breadcrumb-item" href="#/LearningCommunity" data-v-a0a8edd8>学习社区</a><span id="navTitle" class="breadcrumb-item active" data-v-a0a8edd8>战绩分享</span></nav></div>', 1)),
        a("div", X, [
          a("ul", Y, [
            a("li", Z, [
              a("a", {
                class: "nav-link active",
                "data-bs-toggle": "tab",
                role: "tab",
                href: "#Community1",
                onClick: e[0] || (e[0] = (d) => i.Menu_Click(1, d))
              }, " 战绩分享 ")
            ]),
            a("li", V, [
              a("a", {
                class: "nav-link",
                "data-bs-toggle": "tab",
                role: "tab",
                href: "#Community2",
                onClick: e[1] || (e[1] = (d) => i.Menu_Click(2, d))
              }, " 成果分享 ")
            ]),
            a("li", J, [
              a("a", {
                class: "nav-link",
                "data-bs-toggle": "tab",
                role: "tab",
                href: "#Community3",
                onClick: e[2] || (e[2] = (d) => i.Menu_Click(3, d))
              }, " 帮助 ")
            ])
          ]),
          a("div", $, [
            e[7] || (e[7] = b('<div id="Community1" class="tab-pane fade show active" data-v-a0a8edd8><div style="width:100%;line-height:650px;text-align:center;background-color:white;border-radius:0px 0px 10px 10px;" data-v-a0a8edd8><img src="' + g + '" data-v-a0a8edd8><span data-v-a0a8edd8> 上传你的游戏战绩，跟小伙伴分享分享一下你的喜悦吧！ </span></div></div><div id="Community2" class="tab-pane fade" data-v-a0a8edd8><div class="ExpressLane5" data-v-a0a8edd8><ul class="list_ul5" data-v-a0a8edd8><li data-v-a0a8edd8><a href="javascript:void(0)" class="icon-0" data-v-a0a8edd8><i data-v-a0a8edd8></i><label data-v-a0a8edd8>第一小组</label></a></li><li data-v-a0a8edd8><a href="javascript:void(0)" class="icon-0" data-v-a0a8edd8><i data-v-a0a8edd8></i><label data-v-a0a8edd8>第二小组</label></a></li><li data-v-a0a8edd8><a href="javascript:void(0)" class="icon-0" data-v-a0a8edd8><i data-v-a0a8edd8></i><label data-v-a0a8edd8>第三小组</label></a></li></ul></div><div style="width:100%;line-height:400px;text-align:center;background-color:white;border-radius:0px 0px 10px 10px;" data-v-a0a8edd8><img src="' + g + '" data-v-a0a8edd8><span data-v-a0a8edd8> 上传小组成果，和大家一起分享一下吧！ </span></div></div>', 2)),
            a("div", W, [
              e[6] || (e[6] = a("div", { style: { float: "left", width: "25%" } }, [
                a("ul", {
                  class: "nav nav-pills flex-column",
                  role: "tablist"
                }, [
                  a("li", { class: "nav-item" }, [
                    a("a", {
                      class: "nav-link active",
                      "data-toggle": "pill",
                      href: "#menu1"
                    }, " 常见问题 ")
                  ]),
                  a("li", { class: "nav-item" }, [
                    a("a", {
                      class: "nav-link",
                      "data-toggle": "pill",
                      href: "#menu2"
                    }, " 基础知识 ")
                  ]),
                  a("li", { class: "nav-item" }, [
                    a("a", {
                      class: "nav-link",
                      "data-toggle": "pill",
                      href: "#menu3"
                    }, " 冲关游戏 ")
                  ]),
                  a("li", { class: "nav-item" }, [
                    a("a", {
                      class: "nav-link",
                      "data-toggle": "pill",
                      href: "#menu4"
                    }, " 小组项目 ")
                  ]),
                  a("li", { class: "nav-item" }, [
                    a("a", {
                      class: "nav-link",
                      "data-toggle": "pill",
                      href: "#menu5"
                    }, " 学习社区 ")
                  ])
                ])
              ], -1)),
              a("div", K, [
                a("div", aa, [
                  a("table", ea, [
                    a("tr", null, [
                      e[4] || (e[4] = a("td", { class: "text-left" }, [
                        a("input", {
                          id: "txtProblem_q",
                          name: "txtProblem_q",
                          placeholder: "请输入问题",
                          class: "layui-input",
                          style: { width: "400px" }
                        })
                      ], -1)),
                      a("td", null, [
                        a("button", {
                          class: "layui-btn",
                          "lay-submit": "",
                          "lay-filter": "sreach",
                          onClick: e[3] || (e[3] = (d) => i.btn_Click("Query", ""))
                        }, [
                          E(u, { icon: "search" })
                        ])
                      ])
                    ])
                  ])
                ]),
                e[5] || (e[5] = b('<div class="content" data-v-a0a8edd8><div class="tab-content" data-v-a0a8edd8><div id="menu1" class="tab-pane fade show active newList" data-v-a0a8edd8><ul data-v-a0a8edd8><li data-v-a0a8edd8><a href="javascript:void(0)" data-v-a0a8edd8>我是否需要完成冲关游戏之后才能完成个人作业？</a></li><li data-v-a0a8edd8><a href="javascript:void(0)" data-v-a0a8edd8>如何上传小组作业？</a></li><li data-v-a0a8edd8><a href="javascript:void(0)" data-v-a0a8edd8>冲关游戏获得成绩标准是什么？</a></li></ul></div><div id="menu2" class="tab-pane fade" data-v-a0a8edd8></div><div id="menu3" class="tab-pane fade" data-v-a0a8edd8></div><div id="menu4" class="tab-pane fade" data-v-a0a8edd8></div><div id="menu5" class="tab-pane fade" data-v-a0a8edd8></div></div></div>', 1))
              ])
            ])
          ])
        ])
      ])
    ]),
    E(r, { title: "" })
  ], 512);
}
const na = /* @__PURE__ */ h(O, [["render", ta], ["__scopeId", "data-v-a0a8edd8"]]);
export {
  na as default
};
