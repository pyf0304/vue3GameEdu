import { S as D, m as j, _ as c } from "./index-b2b0ebb3.mjs";
import { P as R, a as w, I as C } from "./PageHead_Game-c516a874.mjs";
import { ref as n, reactive as r, defineComponent as P, onMounted as L, resolveComponent as B, openBlock as x, createElementBlock as T, createVNode as E, createElementVNode as i, createStaticVNode as A, createTextVNode as o } from "vue";
import { m as G } from "./clsPubFun4Menu-b6310675.mjs";
const S = n("Asc"), I = n("");
r({
  ascOrDesc4SortFun: S,
  sortge_UserCreditsLogBy: I
});
n("");
n("");
const a = n(), H = n(), N = n(), U = n(), M = n(), V = n(), O = n(), q = n(), z = n();
r({
  refDivLayout: a,
  refDivQuery: H,
  refDivFunction: N,
  refDivList: U,
  refDivEdit: M,
  refDivDetail: V,
  refge_UserCreditsLog_Detail: O,
  refge_UserCreditsLog_Edit: q,
  refge_UserCreditsLog_List: z
});
n(!1);
n("");
const Q = n("");
r({
  masterLevelId_q_Cls: Q
});
r({});
const J = P({
  name: "Work",
  components: {
    // 组件注册
    PageEnd_Game: R,
    PageHead_Game: w
  },
  setup() {
    const s = n("menu1"), l = n(), k = n("作业-游戏化教育平台"), p = n("首页-游戏化教育平台"), b = n("pyf");
    L(() => {
      C.vuebtn_Click = g, f();
    });
    function f() {
      l.value.indexTitle = "作业", new C().PageLoad();
    }
    function d(e, u) {
      const m = u.target;
      switch (console.log("当前被单击的控件：", m), G(m), e) {
        case 1:
          D(a.value, "navTitle", "个人作业");
          break;
        case 2:
          D(a.value, "navTitle", "小组项目");
          break;
      }
    }
    function v(e) {
      $("#WorkList").hide(), $("#WorkDetails").show();
      const u = "第" + e + "周作业";
      $("#spanWeekWork").html(u);
    }
    function t() {
      $("#WorkDetails").hide(), $("#WorkList").show();
    }
    function F(e) {
      $("#ReportList").hide(), $("#ReportDetails").show();
      const u = "第" + e + "次汇报";
      $("#spanReportTitle").html(u);
    }
    function y() {
      $("#ReportDetails").hide(), $("#ReportList").show();
    }
    function g(e, u) {
      switch (console.log(u), e) {
        case "Bind_EduClsList":
          l.value.Bind_EduClsList();
          return;
        case "setRoles":
          l.value.setRoles();
          return;
        case "setEduClss":
          l.value.setEduClss();
          return;
      }
      C.btn_Click(e, u);
    }
    function W() {
      j.warning("函数DiscussSubmit_Click没有实现！");
    }
    return {
      refDivLayout: a,
      activeTabId: s,
      btn_Click: g,
      sysTitle: p,
      UserName: b,
      mySystemName: k,
      refPageHead: l,
      Menu_Click: d,
      DiscussSubmit_Click: W,
      WorkDetails_Click: v,
      WorkReturn_Click: t,
      ReportDetails_Click: F,
      ReportReturn_Click: y
    };
  }
});
const X = {
  id: "divLayout",
  ref: "refDivLayout",
  class: "divComContainer"
}, Y = { class: "content" }, Z = { class: "box1" }, K = { style: { float: "left", width: "25%" } }, h = {
  class: "nav nav-pills flex-column",
  role: "tablist"
}, _ = { class: "nav-item" }, ll = { class: "nav-item" }, il = { style: { float: "right", width: "74%", "margin-right": "10px" } }, tl = { class: "content" }, sl = { class: "tab-content" }, nl = {
  id: "menu1",
  class: "tab-pane fade show active"
}, el = { class: "tab-content" }, ul = {
  id: "PersonalWork1",
  class: "tab-pane fade show active"
}, ol = { id: "WorkList" }, al = { class: "list_ul4" }, rl = {
  id: "WorkDetails",
  style: { display: "none" }
}, dl = { class: "rightDetails" }, vl = {
  id: "menu2",
  class: "tab-pane fade"
}, Cl = { class: "tab-content" }, kl = {
  id: "GroupProject1",
  class: "tab-pane fade show active"
}, pl = { id: "ReportList" }, bl = { class: "list_ul4" }, fl = {
  id: "ReportDetails",
  style: { display: "none" }
}, gl = { class: "rightDetails" };
function ml(s, l, k, p, b, f) {
  const d = B("PageHead_Game"), v = B("PageEnd_Game");
  return x(), T("div", X, [
    E(d, {
      ref: "refPageHead",
      title: ""
    }, null, 512),
    i("div", Y, [
      i("div", Z, [
        i("div", K, [
          i("ul", h, [
            i("li", _, [
              i("a", {
                class: "nav-link active",
                "data-toggle": "pill",
                href: "javascript:void(0)",
                onClick: l[0] || (l[0] = (t) => s.Menu_Click(1, t))
              }, "个人作业")
            ]),
            i("li", ll, [
              i("a", {
                class: "nav-link",
                "data-toggle": "pill",
                href: "javascript:void(0)",
                onClick: l[1] || (l[1] = (t) => s.Menu_Click(2, t))
              }, "小组项目")
            ])
          ])
        ]),
        i("div", il, [
          l[64] || (l[64] = A('<div class="title" data-v-15287134><nav class="breadcrumb" data-v-15287134><a class="breadcrumb-item" href="#/Index" data-v-15287134>首页</a><a class="breadcrumb-item" href="#/Work" data-v-15287134>作业</a><span id="navTitle" class="breadcrumb-item active" data-v-15287134>个人作业</span></nav></div>', 1)),
          i("div", tl, [
            i("div", sl, [
              i("div", nl, [
                l[45] || (l[45] = i("ul", {
                  class: "nav nav-tabs",
                  role: "tablist"
                }, [
                  i("li", { class: "nav-item" }, [
                    i("a", {
                      class: "nav-link active",
                      "data-bs-toggle": "tab",
                      role: "tab",
                      href: "#PersonalWork1"
                    }, " 作业历史 ")
                  ]),
                  i("li", { class: "nav-item" }, [
                    i("a", {
                      class: "nav-link",
                      "data-bs-toggle": "tab",
                      role: "tab",
                      href: "#PersonalWork2"
                    }, " 本周作业 ")
                  ])
                ], -1)),
                i("div", el, [
                  i("div", ul, [
                    l[43] || (l[43] = i("br", null, null, -1)),
                    i("div", ol, [
                      i("ul", al, [
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[2] || (l[2] = (t) => s.WorkDetails_Click(1))
                          }, l[28] || (l[28] = [
                            i("label", null, "第一周作业", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[3] || (l[3] = (t) => s.WorkDetails_Click(2))
                          }, l[29] || (l[29] = [
                            i("label", null, "第二周作业", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[4] || (l[4] = (t) => s.WorkDetails_Click(3))
                          }, l[30] || (l[30] = [
                            i("label", null, "第三周作业", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[5] || (l[5] = (t) => s.WorkDetails_Click(4))
                          }, l[31] || (l[31] = [
                            i("label", null, "第四周作业", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[6] || (l[6] = (t) => s.WorkDetails_Click(5))
                          }, l[32] || (l[32] = [
                            i("label", null, "第五周作业", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[7] || (l[7] = (t) => s.WorkDetails_Click(6))
                          }, l[33] || (l[33] = [
                            i("label", null, "第六周作业", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[8] || (l[8] = (t) => s.WorkDetails_Click(7))
                          }, l[34] || (l[34] = [
                            i("label", null, "第七周作业", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[9] || (l[9] = (t) => s.WorkDetails_Click(8))
                          }, l[35] || (l[35] = [
                            i("label", null, "第八周作业", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[10] || (l[10] = (t) => s.WorkDetails_Click(9))
                          }, l[36] || (l[36] = [
                            i("label", null, "第九周作业", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[11] || (l[11] = (t) => s.WorkDetails_Click(10))
                          }, l[37] || (l[37] = [
                            i("label", null, "第十周作业", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[12] || (l[12] = (t) => s.WorkDetails_Click(11))
                          }, l[38] || (l[38] = [
                            i("label", null, "第十一周作业", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-9",
                            onClick: l[13] || (l[13] = (t) => s.WorkDetails_Click(12))
                          }, l[39] || (l[39] = [
                            i("label", null, "第十二周作业", -1)
                          ]))
                        ])
                      ])
                    ]),
                    i("div", rl, [
                      l[42] || (l[42] = i("div", null, [
                        i("span", {
                          id: "spanWeekWork",
                          style: { "background-color": "dodgerblue", color: "white", padding: "5px", "margin-left": "10px" }
                        }, "第1周作业")
                      ], -1)),
                      i("div", dl, [
                        l[41] || (l[41] = i("div", { style: { height: "480px" } }, [
                          o(" 题目：xxxx "),
                          i("br"),
                          o(" 答案：xxxx ")
                        ], -1)),
                        i("div", null, [
                          i("a", {
                            id: "btnReturn",
                            class: "layui-btn layui-btn-normal",
                            style: { color: "white", "line-height": "1.6em", "margin-top": "3px", float: "right", "margin-right": "20px" },
                            title: "返回",
                            onClick: l[14] || (l[14] = (t) => s.WorkReturn_Click())
                          }, l[40] || (l[40] = [
                            i("i", {
                              class: "layui-icon layui-icon-return",
                              style: { "line-height": "30px" }
                            }, null, -1),
                            o("返回 ")
                          ]))
                        ])
                      ])
                    ])
                  ]),
                  l[44] || (l[44] = A('<div id="PersonalWork2" class="tab-pane fade" data-v-15287134><br data-v-15287134><div id="ThisWeekWork" data-v-15287134><div class="rightDetails" data-v-15287134><div style="height:480px;" data-v-15287134> 题目：xxxx <br data-v-15287134> 答案：xxxx </div><div data-v-15287134><a id="btnToFinish" class="layui-btn layui-btn-normal" style="font-size:16px;color:white;line-height:1.6em;float:right;margin-right:20px;" title="去完成" href="FinishWork" data-v-15287134> 去完成<i class="layui-icon layui-icon-next" style="line-height:36px;" data-v-15287134></i></a></div></div></div></div>', 1))
                ])
              ]),
              i("div", vl, [
                l[63] || (l[63] = i("ul", {
                  class: "nav nav-tabs",
                  role: "tablist"
                }, [
                  i("li", { class: "nav-item" }, [
                    i("a", {
                      class: "nav-link active",
                      "data-bs-toggle": "tab",
                      role: "tab",
                      href: "#GroupProject1"
                    }, " 进度汇报 ")
                  ]),
                  i("li", { class: "nav-item" }, [
                    i("a", {
                      class: "nav-link",
                      "data-bs-toggle": "tab",
                      role: "tab",
                      href: "#GroupProject2"
                    }, " 成果展示 ")
                  ])
                ], -1)),
                i("div", Cl, [
                  i("div", kl, [
                    l[61] || (l[61] = i("br", null, null, -1)),
                    i("div", pl, [
                      i("ul", bl, [
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[15] || (l[15] = (t) => s.ReportDetails_Click(1))
                          }, l[46] || (l[46] = [
                            i("label", null, "第一次汇报", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[16] || (l[16] = (t) => s.ReportDetails_Click(2))
                          }, l[47] || (l[47] = [
                            i("label", null, "第二次汇报", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[17] || (l[17] = (t) => s.ReportDetails_Click(3))
                          }, l[48] || (l[48] = [
                            i("label", null, "第三次汇报", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[18] || (l[18] = (t) => s.ReportDetails_Click(4))
                          }, l[49] || (l[49] = [
                            i("label", null, "第四次汇报", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[19] || (l[19] = (t) => s.ReportDetails_Click(5))
                          }, l[50] || (l[50] = [
                            i("label", null, "第五次汇报", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[20] || (l[20] = (t) => s.ReportDetails_Click(6))
                          }, l[51] || (l[51] = [
                            i("label", null, "第六次汇报", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[21] || (l[21] = (t) => s.ReportDetails_Click(7))
                          }, l[52] || (l[52] = [
                            i("label", null, "第七次汇报", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[22] || (l[22] = (t) => s.ReportDetails_Click(8))
                          }, l[53] || (l[53] = [
                            i("label", null, "第八次汇报", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[23] || (l[23] = (t) => s.ReportDetails_Click(9))
                          }, l[54] || (l[54] = [
                            i("label", null, "第九次汇报", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[24] || (l[24] = (t) => s.ReportDetails_Click(10))
                          }, l[55] || (l[55] = [
                            i("label", null, "第十次汇报", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[25] || (l[25] = (t) => s.ReportDetails_Click(11))
                          }, l[56] || (l[56] = [
                            i("label", null, "第十一次汇报", -1)
                          ]))
                        ]),
                        i("li", null, [
                          i("a", {
                            href: "javascript:void(0)",
                            class: "icon-11",
                            onClick: l[26] || (l[26] = (t) => s.ReportDetails_Click(12))
                          }, l[57] || (l[57] = [
                            i("label", null, "第十二次汇报", -1)
                          ]))
                        ])
                      ])
                    ]),
                    i("div", fl, [
                      l[60] || (l[60] = i("div", null, [
                        i("span", {
                          id: "spanReportTitle",
                          style: { "background-color": "dodgerblue", color: "white", padding: "5px", "margin-left": "10px" }
                        }, "第1次汇报")
                      ], -1)),
                      i("div", gl, [
                        l[59] || (l[59] = i("div", { style: { height: "480px" } }, [
                          o(" 汇报内容：。。。 "),
                          i("br"),
                          o(" 未来计划：。。。 "),
                          i("br"),
                          o(" 分工安排：。。。 ")
                        ], -1)),
                        i("div", null, [
                          i("a", {
                            id: "btnReturn",
                            class: "layui-btn layui-btn-normal",
                            style: { color: "white", "line-height": "1.6em", "margin-top": "3px", float: "right", "margin-right": "20px" },
                            title: "返回",
                            onClick: l[27] || (l[27] = (t) => s.ReportReturn_Click())
                          }, l[58] || (l[58] = [
                            i("i", {
                              class: "layui-icon layui-icon-return",
                              style: { "line-height": "30px" }
                            }, null, -1),
                            o("返回 ")
                          ]))
                        ])
                      ])
                    ])
                  ]),
                  l[62] || (l[62] = i("div", {
                    id: "GroupProject2",
                    class: "tab-pane fade"
                  }, [
                    i("br"),
                    i("div", { id: "AchievementDisplay" }, [
                      i("div", { class: "rightDetails" }, [
                        i("div", { style: { height: "480px" } }, [
                          o(" 期末成果提交 "),
                          i("br")
                        ])
                      ])
                    ])
                  ], -1))
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    E(v, { title: "" })
  ], 512);
}
const Fl = /* @__PURE__ */ c(J, [["render", ml], ["__scopeId", "data-v-15287134"]]);
export {
  Fl as default
};
