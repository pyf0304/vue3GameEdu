import { S as p, r as T, m as _, _ as I } from "./index-b2b0ebb3.mjs";
import { L as j, M as R, P, a as M, I as g } from "./PageHead_Game-c516a874.mjs";
import { ref as a, reactive as r, defineComponent as G, onMounted as z, resolveComponent as k, openBlock as d, createElementBlock as c, createVNode as x, createElementVNode as i, createStaticVNode as n, createTextVNode as y, createCommentVNode as h } from "vue";
import { m as U } from "./clsPubFun4Menu-b6310675.mjs";
const N = a("Asc"), H = a("");
r({
  ascOrDesc4SortFun: N,
  sortge_UserCreditsLogBy: H
});
a("");
a("");
const l = a(), V = a(), W = a(), K = a(), X = a(), O = a(), q = a(), Q = a(), J = a();
r({
  refDivLayout: l,
  refDivQuery: V,
  refDivFunction: W,
  refDivList: K,
  refDivEdit: X,
  refDivDetail: O,
  refge_UserCreditsLog_Detail: q,
  refge_UserCreditsLog_Edit: Q,
  refge_UserCreditsLog_List: J
});
const Y = a("");
r({
  masterLevelId_q_Cls: Y
});
r({});
const Z = G({
  name: "KnowledgeAssess",
  components: {
    // 组件注册
    LoginCom: j,
    MyDropButton: R,
    // Use the correct component name here
    PageEnd_Game: P,
    PageHead_Game: M
  },
  setup() {
    const e = a("menu1"), t = a(), f = a("知识测评-游戏化教育平台"), m = a("首页-游戏化教育平台"), C = a("pyf");
    z(() => {
      g.vuebtn_Click = F, E();
    });
    function E() {
      t.value.indexTitle = "知识测评", new g().PageLoad();
    }
    function v(s, o) {
      const D = o.target;
      switch (console.log("当前被单击的控件：", D), U(D), s) {
        case 1:
          p(l.value, "navTitle", "1vs1"), e.value = "menu1";
          break;
        case 2:
          p(l.value, "navTitle", "单人挑战赛"), e.value = "menu2";
          break;
        case 3:
          p(l.value, "navTitle", "协作模式"), e.value = "menu3";
          break;
      }
    }
    function b() {
      $("#1vs1Details").show(), $("#1vs1List").hide();
    }
    function u() {
      $("#1vs1Details").hide(), $("#1vs1List").show();
    }
    function B(s) {
      switch (s) {
        case 1:
          $("#DifficultyLevelTitle").html("难度：简单");
          break;
        case 2:
          $("#DifficultyLevelTitle").html("难度：中等");
          break;
        case 3:
          $("#DifficultyLevelTitle").html("难度：复杂");
          break;
      }
      $("#SingleChallengeDetails").show(), $("#SingleChallengeList").hide();
    }
    function w() {
      $("#SingleChallengeDetails").hide(), $("#SingleChallengeList").show();
    }
    function A() {
      $("#div_Cooperation").hide(), $("#div_CooperationDiscuss").show();
    }
    function F(s, o) {
      switch (console.log(o), s) {
        case "Bind_EduClsList":
          t.value.Bind_EduClsList();
          return;
        case "setRoles":
          t.value.setRoles();
          return;
        case "setEduClss":
          t.value.setEduClss();
          return;
        case "Detail":
          break;
        case "Create":
        case "AddNewRecordWithMaxId":
        case "CreateWithMaxId":
        case "Update":
        case "UpdateRecord":
        case "UpdateRecordInTab":
          break;
        case "liPaper":
          T.push("/about"), console.log("router.push('/about');");
          break;
      }
      g.btn_Click(s, o);
    }
    function S() {
      _.warning("函数DiscussSubmit_Click没有实现！");
    }
    function L() {
      _.warning("函数btnInviteFriends_Click没有实现！");
    }
    return {
      refDivLayout: l,
      activeTabId: e,
      btn_Click: F,
      sysTitle: m,
      UserName: C,
      mySystemName: f,
      refPageHead: t,
      Menu_Click: v,
      DiscussSubmit_Click: S,
      btnInviteFriends_Click: L,
      btn1vs1Return_Click: u,
      btnRandomMatch_Click: b,
      btnGradeSelection_Click: B,
      btnSingleChallengeReturn_Click: w,
      btnWrongTopicDiscussion_Click: A
    };
  }
});
const tt = {
  id: "divLayout",
  ref: "refDivLayout",
  class: "divComContainer"
}, it = { class: "content" }, et = { class: "box1" }, at = { style: { float: "left", width: "25%" } }, ut = {
  class: "nav nav-pills flex-column",
  role: "tablist"
}, st = { class: "nav-item" }, nt = { class: "nav-item" }, lt = { class: "nav-item" }, ot = { style: { float: "right", width: "74%", "margin-right": "10px" } }, dt = { class: "content" }, ct = { class: "tab-content" }, rt = {
  key: 0,
  id: "menu1"
}, vt = {
  id: "1vs1List",
  style: { "padding-top": "150px", "text-align": "center" }
}, bt = {
  id: "1vs1Details",
  style: { display: "none" }
}, pt = { class: "rightDetails" }, gt = {
  key: 1,
  id: "menu2"
}, yt = {
  id: "SingleChallengeList",
  style: { "padding-top": "150px", "text-align": "center" }
}, ht = {
  id: "SingleChallengeDetails",
  style: { display: "none" }
}, ft = { class: "rightDetails" }, mt = {
  key: 2,
  id: "menu3"
}, Ct = {
  id: "div_Cooperation",
  class: "rightDetails"
}, Et = {
  id: "div_CooperationDiscuss",
  style: { display: "none" }
}, Ft = { style: { float: "right", width: "64%" } }, Dt = {
  style: { width: "100%" },
  class: "table table-bordered table-hover table td table-sm"
}, _t = { style: { width: "20%" } };
function kt(e, t, f, m, C, E) {
  const v = k("PageHead_Game"), b = k("PageEnd_Game");
  return d(), c("div", tt, [
    x(v, {
      ref: "refPageHead",
      title: ""
    }, null, 512),
    i("div", it, [
      i("div", et, [
        i("div", at, [
          i("ul", ut, [
            i("li", st, [
              i("a", {
                class: "nav-link active",
                "data-toggle": "pill",
                href: "javascript:void(0)",
                onClick: t[0] || (t[0] = (u) => e.Menu_Click(1, u))
              }, "1vs1")
            ]),
            i("li", nt, [
              i("a", {
                class: "nav-link",
                "data-toggle": "pill",
                href: "javascript:void(0)",
                onClick: t[1] || (t[1] = (u) => e.Menu_Click(2, u))
              }, "单人挑战赛")
            ]),
            i("li", lt, [
              i("a", {
                class: "nav-link",
                "data-toggle": "pill",
                href: "javascript:void(0)",
                onClick: t[2] || (t[2] = (u) => e.Menu_Click(3, u))
              }, "协作模式")
            ])
          ])
        ]),
        i("div", ot, [
          t[24] || (t[24] = n('<div class="title" data-v-965485bc><nav class="breadcrumb" data-v-965485bc><a class="breadcrumb-item" href="#/Index" data-v-965485bc>首页</a><a class="breadcrumb-item" href="#/KnowledgeAssess" data-v-965485bc>知识测评</a><span id="navTitle" class="breadcrumb-item active" data-v-965485bc>1vs1</span></nav></div>', 1)),
          i("div", dt, [
            i("div", ct, [
              e.activeTabId === "menu1" ? (d(), c("div", rt, [
                i("div", vt, [
                  i("button", {
                    id: "btnInviteFriends",
                    type: "button",
                    class: "layui-btn",
                    style: { width: "50%", height: "80px" },
                    onClick: t[3] || (t[3] = (u) => e.btnInviteFriends_Click())
                  }, "邀请好友"),
                  i("button", {
                    id: "btnRandomMatch",
                    type: "button",
                    class: "layui-btn",
                    style: { width: "50%", height: "80px", "margin-top": "50px" },
                    onClick: t[4] || (t[4] = (u) => e.btnRandomMatch_Click())
                  }, "随机匹配")
                ]),
                i("div", bt, [
                  t[14] || (t[14] = i("div", { class: "row" }, [
                    i("div", {
                      class: "col",
                      style: { "text-align": "right" }
                    }, "张三"),
                    i("div", {
                      class: "col",
                      style: { "text-align": "center", "line-height": "30px", height: "30px" }
                    }, [
                      i("div", { class: "progress" }, [
                        i("div", {
                          class: "progress-bar",
                          role: "progressbar",
                          "aria-valuenow": "60",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100",
                          style: { width: "40%" }
                        }, [
                          i("span", { class: "sr-only" }, "40% 完成")
                        ])
                      ])
                    ]),
                    i("div", { class: "col" }, "李四")
                  ], -1)),
                  i("div", pt, [
                    t[13] || (t[13] = n('<div class="row" data-v-965485bc><div class="col" data-v-965485bc><a href="javascript:void(0)" data-v-965485bc><i class="layui-icon layui-icon-console" style="font-size:30px;color:#1e9fff;" data-v-965485bc></i></a></div><div class="col" style="text-align:right;" data-v-965485bc><a href="javascript:void(0)" data-v-965485bc><i class="layui-icon layui-icon-rate" style="font-size:30px;color:#1e9fff;" data-v-965485bc></i></a></div></div><div style="height:350px;" data-v-965485bc> 大数据价值密度低是指( )<br data-v-965485bc> a.大数据具有多元异构性<br data-v-965485bc> b.大数据中有价值数据的比例小<br data-v-965485bc> c.大数据的积累速度快<br data-v-965485bc> d.大数据的变化速率高<br data-v-965485bc></div>', 2)),
                    i("div", null, [
                      i("a", {
                        id: "btn1vs1Return",
                        class: "layui-btn layui-btn-normal",
                        style: { color: "white", "line-height": "1.6em", "margin-top": "3px", float: "right", "margin-right": "20px" },
                        title: "返回",
                        onClick: t[5] || (t[5] = (u) => e.btn1vs1Return_Click())
                      }, t[12] || (t[12] = [
                        i("i", {
                          class: "layui-icon layui-icon-return",
                          style: { "line-height": "30px" }
                        }, null, -1),
                        y("返回 ")
                      ]))
                    ])
                  ])
                ])
              ])) : h("", !0),
              e.activeTabId === "menu2" ? (d(), c("div", gt, [
                i("div", yt, [
                  i("button", {
                    id: "btnSimple",
                    type: "button",
                    class: "layui-btn",
                    style: { width: "50%", height: "80px" },
                    onClick: t[6] || (t[6] = (u) => e.btnGradeSelection_Click(1))
                  }, "简单"),
                  i("button", {
                    id: "btnSecondary",
                    type: "button",
                    class: "layui-btn",
                    style: { width: "50%", height: "80px", "margin-top": "30px" },
                    onClick: t[7] || (t[7] = (u) => e.btnGradeSelection_Click(2))
                  }, "中等"),
                  i("button", {
                    id: "btnComplex",
                    type: "button",
                    class: "layui-btn",
                    style: { width: "50%", height: "80px", "margin-top": "30px" },
                    onClick: t[8] || (t[8] = (u) => e.btnGradeSelection_Click(3))
                  }, "复杂")
                ]),
                i("div", ht, [
                  t[17] || (t[17] = n('<div style="text-align:center;width:100%;" data-v-965485bc><span id="DifficultyLevelTitle" style="font-size:24px;" data-v-965485bc></span></div><div style="text-align:center;width:100%;margin-top:10px;" data-v-965485bc><button type="button" class="btn btn-primary" data-v-965485bc>1</button><button type="button" class="btn btn-primary" data-v-965485bc>2</button><button type="button" class="btn btn-danger" data-v-965485bc>3</button><button type="button" class="btn btn-outline-primary" data-v-965485bc>4</button><button type="button" class="btn btn-outline-primary" data-v-965485bc>5</button><button type="button" class="btn btn-outline-primary" data-v-965485bc>6</button></div>', 2)),
                  i("div", ft, [
                    t[16] || (t[16] = n('<div class="row" data-v-965485bc><div class="col" data-v-965485bc><a href="javascript:void(0)" data-v-965485bc><i class="layui-icon layui-icon-console" style="font-size:40px;color:#1e9fff;" data-v-965485bc></i></a></div><div class="col" style="text-align:right;" data-v-965485bc><a href="javascript:void(0)" data-v-965485bc><i class="layui-icon layui-icon-rate" style="font-size:40px;color:#1e9fff;" data-v-965485bc></i></a></div></div><div style="height:350px;" data-v-965485bc> 大数据价值密度低是指( )<br data-v-965485bc> a.大数据具有多元异构性<br data-v-965485bc> b.大数据中有价值数据的比例小<br data-v-965485bc> c.大数据的积累速度快<br data-v-965485bc> d.大数据的变化速率高<br data-v-965485bc></div>', 2)),
                    i("div", null, [
                      i("a", {
                        id: "btnSingleChallengeReturn",
                        class: "layui-btn layui-btn-normal",
                        style: { color: "white", "line-height": "1.6em", "margin-top": "3px", float: "right", "margin-right": "20px" },
                        title: "返回",
                        onClick: t[9] || (t[9] = (u) => e.btnSingleChallengeReturn_Click())
                      }, t[15] || (t[15] = [
                        i("i", {
                          class: "layui-icon layui-icon-return",
                          style: { "line-height": "30px" }
                        }, null, -1),
                        y("返回 ")
                      ]))
                    ])
                  ])
                ])
              ])) : h("", !0),
              e.activeTabId === "menu3" ? (d(), c("div", mt, [
                i("div", Ct, [
                  t[19] || (t[19] = n('<div class="row" data-v-965485bc><div class="col" data-v-965485bc><a href="javascript:void(0)" data-v-965485bc><i class="layui-icon layui-icon-console" style="font-size:40px;color:#1e9fff;" data-v-965485bc></i></a></div><div class="col" style="text-align:right;" data-v-965485bc><a href="javascript:void(0)" data-v-965485bc><i class="layui-icon layui-icon-rate" style="font-size:40px;color:#1e9fff;" data-v-965485bc></i></a></div></div><div style="height:350px;" data-v-965485bc> 大数据价值密度低是指( )<br data-v-965485bc> a.大数据具有多元异构性<br data-v-965485bc> b.大数据中有价值数据的比例小<br data-v-965485bc> c.大数据的积累速度快<br data-v-965485bc> d.大数据的变化速率高<br data-v-965485bc></div>', 2)),
                  i("div", null, [
                    i("a", {
                      id: "btnWrongTopicDiscussion",
                      class: "layui-btn layui-btn-normal",
                      style: { color: "white", "line-height": "1.6em", "margin-top": "3px", float: "right", "margin-right": "20px" },
                      title: "错题讨论",
                      onClick: t[10] || (t[10] = (u) => e.btnWrongTopicDiscussion_Click())
                    }, t[18] || (t[18] = [
                      i("i", {
                        class: "layui-icon layui-icon-return",
                        style: { "line-height": "30px" }
                      }, null, -1),
                      y("错题讨论 ")
                    ]))
                  ])
                ]),
                i("div", Et, [
                  t[23] || (t[23] = n('<div style="float:left;width:35%;padding:20px;border-radius:20px;background-color:ghostwhite;height:500px;" data-v-965485bc><div style="text-align:right;" data-v-965485bc><a href="javascript:void(0)" data-v-965485bc><i class="layui-icon layui-icon-rate" style="font-size:40px;color:#1e9fff;" data-v-965485bc></i></a></div><div style="height:350px;" data-v-965485bc> 大数据价值密度低是指( )<br data-v-965485bc> a.大数据具有多元异构性<br data-v-965485bc> b.大数据中有价值数据的比例小<br data-v-965485bc> c.大数据的积累速度快<br data-v-965485bc> d.大数据的变化速率高<br data-v-965485bc></div><div data-v-965485bc><a href="javascript:void(0)" data-v-965485bc><i class="layui-icon layui-icon-notice" style="font-size:40px;color:#1e9fff;" data-v-965485bc></i></a> 相关知识点：XXX（个性化建议） </div></div>', 1)),
                  i("div", Ft, [
                    t[21] || (t[21] = i("div", null, [
                      i("h2", null, "临时讨论区")
                    ], -1)),
                    t[22] || (t[22] = i("div", { style: { height: "400px" } }, null, -1)),
                    i("div", null, [
                      i("table", Dt, [
                        i("tr", null, [
                          t[20] || (t[20] = i("td", { style: { width: "80%" } }, [
                            i("textarea", {
                              id: "txtDiscussContent",
                              name: "txtDiscussContent",
                              placeholder: "请输入讨论内容",
                              class: "form-control",
                              style: { width: "100%", height: "100px" }
                            })
                          ], -1)),
                          i("td", _t, [
                            i("button", {
                              id: "btnDiscussSubmit",
                              type: "button",
                              class: "layui-btn",
                              style: { width: "100%", height: "100px" },
                              onClick: t[11] || (t[11] = (u) => e.DiscussSubmit_Click())
                            }, "发布")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])) : h("", !0)
            ])
          ])
        ])
      ])
    ]),
    x(b, { title: "" })
  ], 512);
}
const St = /* @__PURE__ */ I(Z, [["render", kt], ["__scopeId", "data-v-965485bc"]]);
export {
  St as default
};
