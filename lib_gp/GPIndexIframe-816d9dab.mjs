var he = Object.defineProperty;
var be = (t, e, i) => e in t ? he(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var M = (t, e, i) => (be(t, typeof e != "symbol" ? e + "" : e, i), i);
import { u as I, $ as B, H as ge, Y as _e, Z as Ce, a0 as De, _ as X, S as Se, e as D, a as ee, m as ae, A as ke, U as Ee, r as te, a1 as xe, a2 as we, a3 as Be, a4 as je, a5 as Fe, a6 as $e, a7 as Pe, a8 as Re, a9 as Ue, aa as Ae, ab as Le, ac as Ie, g as Te, ad as Me } from "./index-72dceb29.mjs";
import { ref as s, reactive as E, defineComponent as J, onMounted as K, openBlock as c, createElementBlock as p, createStaticVNode as Ne, resolveComponent as P, createElementVNode as a, normalizeStyle as Qe, toDisplayString as N, createVNode as R, withCtx as U, createTextVNode as z, createCommentVNode as k, createBlock as G, markRaw as b, Fragment as W, renderList as O, normalizeClass as se, resolveDynamicComponent as qe } from "vue";
import { _ as Ve, c as L } from "./CirclePoint-6a0c4163.mjs";
const He = s("Asc"), We = s("");
E({
  ascOrDesc4SortFun: He,
  sortge_UserCreditsLogBy: We
});
s("");
s("");
const ie = s(), oe = s(), le = s(), re = s(), Oe = s(), ze = s(), Ge = s(), Xe = s(), Je = s(), Ke = E({
  refDivLayout: ie,
  refDivQuery: oe,
  refDivFunction: le,
  refDivList: re,
  refDivEdit: Oe,
  refDivDetail: ze,
  refge_UserCreditsLog_Detail: Ge,
  refge_UserCreditsLog_Edit: Xe,
  refge_UserCreditsLog_List: Je
});
s(!1);
s("");
const Ye = s("");
E({
  masterLevelId_q_Cls: Ye
});
E({});
class Ze {
  //public static divName4List: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  get pageSize() {
    return 10;
  }
  async PageLoad() {
    const e = this.PageLoad.name;
    try {
      I().getRoleId == "00620001" ? B("#Personaldiv").hide() : B("#Personaldiv").show();
      const o = await this.Bind_Major();
      ge(Ke.refDivLayout, "divLoading");
    } catch (i) {
      const o = `根据条件获取相应的记录对象的列表不成功,${i}.(in ${this.constructor.name}.${e})`;
      console.error(o), alert(o);
    }
  }
  async Bind_Major() {
    const e = this.Bind_Major.name;
    try {
      const i = I(), o = new _e();
      o.SetCondFldValue(
        Ce.con_IdXzMajor,
        i.getIdXzMajor,
        "="
      );
      const d = await De(
        o
      );
      let n = "";
      for (let v = 0; v < d.length; v++)
        n += d[v].majorDirectionName + ",";
      B("#spanMajordirection").html(
        i.getUserName + i.getMajorName + "专业，专业方向包含(" + n + ")"
      );
    } catch (i) {
      console.log("catch(e)="), console.error(i);
      const o = `根据条件获取相应的记录对象的列表不成功,${i}.(in ${this.constructor.name}.${e})`;
      alert(o);
    }
  }
}
const ea = J({
  name: "Welcome",
  components: {
    // 组件注册
    // SysScoreSummary_EditCom,
  },
  setup() {
    const t = s("欢迎");
    K(() => {
      new Ze().PageLoad();
    });
    function e(i, o) {
    }
    return {
      strTitle: t,
      btn_Click: e,
      refDivLayout: ie,
      refDivQuery: oe,
      refDivFunction: le,
      refDivList: re
    };
  },
  methods: {
    // 方法定义
  }
}), aa = {
  id: "divLayout",
  ref: "refDivLayout",
  class: "divComContainer"
};
function sa(t, e, i, o, d, n) {
  return c(), p("div", aa, e[0] || (e[0] = [
    Ne('<div id="divLoading" class="loading"><img src="' + Ve + '"></div><div class="container"><div class="row"><div class="col-md-3"><div class="list-group"><a href="javascript:void(0)" class="list-group-item active">模块1</a><a href="javascript:void(0)" class="list-group-item">菜单项1</a><a href="javascript:void(0)" class="list-group-item">菜单项2</a><a href="javascript:void(0)" class="list-group-item">菜单项3</a></div></div><div class="col-md-9"><div class="panel panel-default"><div class="panel-heading">模块1</div><div class="panel-body">这里是模块1的内容。</div></div></div></div></div><div class="layui-fluid"><div class="layui-row layui-col-space15"><div class="layui-col-md12"><div class="layui-card"><div class="layui-card-body"><blockquote class="layui-elem-quote"><span id="spanMajordirection" style="font-size:14px;"></span><br><br> 当前时间： <span class="x-red"></span>@DateTime.Now.ToString(); </blockquote></div></div></div><div class="layui-col-md12"><div class="layui-card"><div class="layui-card-header">数据统计</div><div class="layui-card-body"><ul class="layui-row layui-col-space10 layui-this x-admin-carousel x-admin-backlog"><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>论文数</h3><p><cite><span id="PaperNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>引用论文数</h3><p><cite><span id="QuotePaperNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>本组论文数</h3><p><cite><span id="GroupPaperNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>论文阅读数</h3><p><cite><span id="PaperReadNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>论文写作数</h3><p><cite><span id="PaperWriteNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>论文观点数</h3><p><cite><span id="PaperSubViewpointNum" style="color:red;"></span></cite></p></a></li></ul></div></div></div><div class="layui-col-md12" id="Personaldiv"><div class="layui-card"><div class="layui-card-header">个人数据统计</div><div class="layui-card-body"><ul class="layui-row layui-col-space10 layui-this x-admin-carousel x-admin-backlog"><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>论文数</h3><p><cite><span id="PersonalPaperNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>论文阅读数</h3><p><cite><span id="PersonalPaperReadNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>论文写作数</h3><p><cite><span id="PersonalPaperWriteNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>论文观点数</h3><p><cite><span id="PersonalPaperSubViewpointNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>主题个人观点</h3><p><cite><span id="PersonalViewpointNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>主题专家观点</h3><p><cite><span id="PersonalExpertViewpointNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>主题概念</h3><p><cite><span id="PersonalConceptNum" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>主题客观事实</h3><p><cite><span id="PersonalObjectiveFact" style="color:red;"></span></cite></p></a></li><li class="layui-col-md2 layui-col-xs6"><a href="javascript:;" class="x-admin-backlog-body"><h3>主题客观数据</h3><p><cite><span id="PersonalObjectiveBasis" style="color:red;"></span></cite></p></a></li></ul></div></div></div><div class="layui-col-md12"><div class="layui-card"><div class="layui-card-header">系统信息</div><div class="layui-card-body"><table class="layui-table"><tbody><tr><th>系统版本</th><td>v1.6</td></tr><tr><th>服务器地址</th><td>www.sh-tz.com</td></tr><tr><th>操作系统</th><td>Win servier2008</td></tr><tr><th>运行环境</th><td>IIS7.5</td></tr><tr><th>开发语言</th><td>C#、JavaScript、TypeScript</td></tr><tr><th>Sql版本</th><td>Sql Server2008</td></tr><tr><th>上传附件限制</th><td>2M</td></tr><tr><th>执行时间限制</th><td>30s</td></tr></tbody></table></div></div></div></div></div>', 3)
  ]), 512);
}
const ta = /* @__PURE__ */ X(ea, [["render", sa]]), C = class C {
  //界面布局的层对象
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  get pageSize() {
    return 10;
  }
  async PageLoad() {
    try {
      const e = I();
      if (e.getUserId != "" && (Se(
        C.divLayout,
        "lnkUserName",
        `${e.getUserName}(${e.getRoleName})`
      ), B("#spanMajorName").html(`${e.getMajorName}专业`), C.GetPropValue("isShowEduCls") == "true")) {
        let o = "";
        switch (e.getRoleId) {
          case D.System_Admin_00620001:
          case D.Secondary_School_System_Admin_00620018:
          case D.University_System_Admin_00620019:
            break;
          case "00620002":
          case "00620013":
            break;
          case "00620003":
          case D.High_School_Student_00620017:
            break;
          default:
            o = `角色:[${e.getRoleName}(${e.getRoleId})]在switch中没有被处理，请联系管理员！`, console.error(o), alert(o);
            break;
        }
      }
    } catch (e) {
      const i = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(i), alert(i);
    }
  }
  //教学班教师
  static async EduCls_Click(e, i, o, d) {
    ee(C.divLayout, "spnEduClsName_Head", o), L.idCurrEduCls = i, L.eduClsTypeId = d, L.eduClsName = o;
    const n = B("#Paper_iframe")[0];
    n != null && n.contentWindow != null && n.contentWindow.btnQuery_Click(), ae.success("已切换教学班！");
  }
  static async Topic_Click(e, i) {
    ee(C.divLayout, "spnTopicName_Head", i), L.idCurrEduCls = e, L.topicName = i;
    const o = B("#Paper_iframe")[0];
    o != null && o.contentWindow != null && o.contentWindow.btnQuery_Click(), ae.success("已切换教学班！");
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  static btn_Click(e, i) {
    switch (console.log(i), e) {
      case "CopyRecord":
      case "Clone":
        break;
      case "ExportExcel":
        break;
      default:
        ke(e, "PageHead_GE.btn_Click");
        break;
    }
  }
};
M(C, "vuebtn_Click"), M(C, "GetPropValue"), M(C, "divLayout");
let w = C;
const ia = J({
  name: "PageHead_GE",
  components: {
    // 组件注册
  },
  props: {
    title: {
      type: String,
      required: !0
    },
    isShowEduCls: {
      type: String,
      required: !0
    },
    isShowPaperIframe: {
      type: String,
      required: !0
    },
    isShowTopic: {
      type: String,
      required: !0
    },
    isShowMajor: {
      type: String,
      required: !0
    },
    isShowSearch: {
      type: String,
      required: !0
    },
    isShowAttention: {
      type: String,
      required: !0
    },
    paperId: {
      type: String,
      required: !0
    },
    headerHeight: {
      type: String,
      required: !0,
      default: "60"
    },
    leftMargin: {
      type: String,
      required: !1,
      default: "0"
    }
  },
  setup(t) {
    const e = I(), i = s("关注论文"), o = s(), d = s(), n = s(!0), v = s(!0), g = s("pyf");
    async function j() {
      console.log(g);
    }
    K(() => {
      switch (w.divLayout = d.value, w.vuebtn_Click = x, w.GetPropValue = A, e.getUserType === Ee.middle_School && (n.value = !1, i.value = "关注课文"), e.roleId) {
        case D.System_Admin_00620001:
        case D.K_12_Teacher_00620013:
        case D.Regular_Teacher_00620002:
        case D.Secondary_School_System_Admin_00620018:
        case D.University_System_Admin_00620019:
          v.value = !0;
          break;
        default:
          v.value = !1;
          break;
      }
      new w().PageLoad();
    });
    function A(m) {
      switch (m) {
        case "title":
          return t.title;
        case "isShowEduCls":
          return t.isShowEduCls;
        case "isShowTopic":
          return t.isShowTopic;
        case "paperId":
          return t.paperId;
        default:
          return "";
      }
    }
    function u(m, S, T, q, V) {
      console.log(m, S, T, q, V);
    }
    function x(m, S) {
      switch (console.log(S), m) {
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
          te.push("/about"), console.log("router.push('/about');");
          break;
      }
      w.btn_Click(m, S);
    }
    return {
      refDivLayout_Head: d,
      btn_Click: x,
      getUser: j,
      isShowMajor1: n,
      canEditEduCls: v,
      UserName: g,
      selectedValue: o,
      focusPaper: i,
      xadmin_open: u
      // headerStyle,
    };
  },
  methods: {
    async EduClsItemChange() {
      this.selectedValue, this.refDivLayout_Head;
    }
  }
});
const oa = {
  id: "divLayout_Head",
  ref: "refDivLayout_Head"
}, la = { class: "navbar navbar-expand-lg bg-body-tertiary" }, ra = { class: "container-fluid" }, na = {
  class: "navbar-brand moduleTitle text-secondary",
  href: "index"
}, ua = {
  id: "navbarSupportedContent",
  class: "collapse navbar-collapse"
}, ca = { class: "navbar-nav me-auto mb-2 mb-lg-0" }, da = { class: "nav-item ml-3" }, pa = {
  key: 0,
  class: "nav-item"
}, va = {
  key: 1,
  class: "nav-item dropdown"
}, ma = {
  key: 2,
  class: "nav-item ml-1"
}, fa = {
  key: 3,
  class: "nav-item dropdown"
}, ya = { class: "nav-item ml-3" }, ha = {
  id: "ulCurrEduCls",
  class: "dropdown-menu"
}, ba = {
  key: 4,
  class: "nav-item ml-3"
}, ga = {
  key: 0,
  class: "d-flex",
  role: "search"
};
function _a(t, e, i, o, d, n) {
  const v = P("router-link"), g = P("router-Link");
  return c(), p("div", oa, [
    a("div", {
      style: Qe({ height: `${t.headerHeight}px`, left: `${t.leftMargin}px`, position: "absolute" }),
      class: "layout-header"
    }, [
      a("nav", la, [
        a("div", ra, [
          a("a", na, N(t.title), 1),
          e[9] || (e[9] = a("button", {
            class: "navbar-toggler",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarSupportedContent",
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation"
          }, [
            a("span", { class: "navbar-toggler-icon" })
          ], -1)),
          a("div", ua, [
            a("ul", ca, [
              a("li", da, [
                R(v, {
                  to: "/index",
                  class: "nav-link"
                }, {
                  default: U(() => e[1] || (e[1] = [
                    z("首页-G")
                  ])),
                  _: 1
                })
              ]),
              t.isShowPaperIframe == "true" ? (c(), p("li", pa, [
                R(v, {
                  to: "/PaperIframe",
                  class: "nav-link"
                }, {
                  default: U(() => e[2] || (e[2] = [
                    z("/论文阅读")
                  ])),
                  _: 1
                })
              ])) : k("", !0),
              t.isShowEduCls == "true" ? (c(), p("li", va, e[3] || (e[3] = [
                a("a", {
                  class: "nav-link dropdown-toggle",
                  href: "javascript:void(0)",
                  role: "button",
                  "data-bs-toggle": "dropdown",
                  "aria-expanded": "false"
                }, [
                  a("span", {
                    id: "spnEduClsName_Head",
                    title: "当前选择的教学班"
                  })
                ], -1),
                a("ul", {
                  id: "ulCurrEduCls",
                  class: "dropdown-menu"
                }, null, -1)
              ]))) : k("", !0),
              t.isShowEduCls == "true" ? (c(), p("li", ma, [
                t.canEditEduCls == !0 ? (c(), G(g, {
                  key: 0,
                  to: "/CurrEduClsInfo",
                  class: "nav-link"
                }, {
                  default: U(() => e[4] || (e[4] = [
                    a("span", { title: "维护当前教学班的相关信息" }, " 维护教学班信息0 ", -1)
                  ])),
                  _: 1
                })) : k("", !0)
              ])) : k("", !0),
              t.isShowTopic == "true" ? (c(), p("li", fa, e[5] || (e[5] = [
                a("a", {
                  class: "nav-link dropdown-toggle",
                  href: "javascript:void(0)",
                  role: "button",
                  "data-bs-toggle": "dropdown",
                  "aria-expanded": "false"
                }, [
                  a("span", {
                    id: "spnTopicName_Head",
                    title: "当前研究主题"
                  }, "当前研究主题")
                ], -1),
                a("ul", {
                  id: "ulResearchTopic",
                  class: "dropdown-menu"
                }, null, -1)
              ]))) : k("", !0),
              a("li", ya, [
                e[6] || (e[6] = a("a", {
                  id: "lnkUserName",
                  class: "nav-link",
                  href: "javascript:;"
                }, null, -1)),
                a("ul", ha, [
                  a("li", null, [
                    a("a", {
                      onClick: e[0] || (e[0] = (j) => t.xadmin_open("个人信息", "../Web/UserInfo", 1e3, 800, !0))
                    }, "个人信息")
                  ])
                ])
              ]),
              t.isShowMajor1 == !0 ? (c(), p("li", ba, e[7] || (e[7] = [
                a("span", {
                  id: "spanMajorName",
                  title: "当前用户专业名称",
                  class: "nav-link"
                }, null, -1)
              ]))) : k("", !0)
            ]),
            t.isShowSearch == "true" ? (c(), p("form", ga, e[8] || (e[8] = [
              a("input", {
                class: "form-control me-2",
                type: "search",
                placeholder: "Search",
                "aria-label": "Search"
              }, null, -1),
              a("button", {
                class: "btn btn-outline-success",
                type: "submit"
              }, " Search ", -1)
            ]))) : k("", !0)
          ])
        ])
      ])
    ], 4)
  ], 512);
}
const Ca = /* @__PURE__ */ X(ia, [["render", _a], ["__scopeId", "data-v-a72ec300"]]), Da = s("Asc"), Sa = s("");
E({
  ascOrDesc4SortFun: Da,
  sortge_UserCreditsLogBy: Sa
});
s("");
s("");
const Q = s(), ka = s(), Ea = s(), xa = s(), wa = s(), Ba = s(), ja = s(), Fa = s(), $a = s();
E({
  refDivLayout: Q,
  refDivQuery: ka,
  refDivFunction: Ea,
  refDivList: xa,
  refDivEdit: wa,
  refDivDetail: Ba,
  refge_UserCreditsLog_Detail: ja,
  refge_UserCreditsLog_Edit: Fa,
  refge_UserCreditsLog_List: $a
});
s(!1);
s("");
const Pa = s("");
E({
  masterLevelId_q_Cls: Pa
});
E({});
const Ra = J({
  name: "PaperIframe",
  components: {
    // 组件注册
    //   Paper_QUDI,
    //   Paper_List,
    //   SysScoreSummaryNewTotal,
    PageHeadCom: Ca
  },
  props: {
    page: {
      type: String,
      required: !1
    }
  },
  setup(t) {
    const e = I(), i = xe(), o = we(), d = s("游戏化学习-后台管理"), n = s(""), v = b(Be), g = b(je), j = b(Fe), A = b($e), u = b(Pe), x = b(Re), m = b(Ue), S = b(Ae), T = b(Le), q = b(Ie), V = b(ta), F = s([
      {
        name: "用户管理",
        active: !1,
        items: [
          // { name: '用户维护', title: '', active: false, component: UsersCRUD, paras: '' },
          // <a @click="xadmin.add_tab('用户维护','../UserManage/Users_QUDI')">
          { name: "平台用户维护", title: "", active: !1, component: g, paras: "" },
          { name: "平台角色维护", title: "", active: !1, component: j, paras: "" },
          {
            name: "用户角色关系维护",
            title: "",
            active: !1,
            component: A,
            paras: ""
          },
          {
            name: "工程菜单维护",
            title: "",
            active: !1,
            component: u,
            paras: "EditTabName=QxPrjMenus"
          },
          {
            name: "角色菜单",
            title: "",
            active: !1,
            component: x,
            paras: "EditTabName=QxRoleMenus"
          },
          // <a @click="xadmin.add_tab('用户维护','../UserManage/Users_QUDI')">
          {
            name: "权限类型维护",
            title: "",
            active: !1,
            component: m,
            paras: ""
          },
          {
            name: "权限维护",
            title: "",
            active: !1,
            component: S,
            paras: ""
          },
          {
            name: "角色赋权关系",
            title: "",
            active: !1,
            component: v,
            paras: ""
          }
        ]
      },
      {
        name: "系统设置",
        active: !1,
        items: [
          // <a  @click="xadmin.add_tab('分数权重管理','../ParameterTable/SysScoreWeight_QUDI_TS')"
          // {
          //   name: '个人知识点查看',
          //   title: '',
          //   active: false,
          //   component: PersonalKnowledgeView,
          //   paras: '',
          // },
          // <a  @click="xadmin.add_tab('个人知识点查看', '../GradEduTopic/PersonalKnowledgeView')"
          // <a @click="xadmin.add_tab('各观点分享配置', '../GradEduTools/gs_UserConfig')">
          { name: "缓存配置", title: "", active: !1, component: T, paras: "" },
          { name: "学校维护", title: "", active: !1, component: q, paras: "" }
          // <a @click="xadmin.add_tab('缓存配置', '../SystemSet_Share/CacheUseStateCRUD')">
          // <a  @click="xadmin.add_tab('评论类型管理','../GradEduTopic/SysCommentType_QUDI_TS')"
          // <a onclick="xadmin.add_tab('个人知识点查看', '../GraduateEduTopic/PersonalKnowledgeView')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>个人知识点查看</cite>
          // </a>
          // {
          //   name: '个人知识点查看',
          //   title: '',
          //   active: false,
          //   component: PersonalKnowledgeView,
          //   paras: '',
          // },
        ]
      }
    ]), y = s([
      {
        label: "欢迎",
        name: "Welcome",
        component: V,
        paras: ""
      }
    ]), _ = s(""), H = s(""), ne = (r, l) => {
      if (y.value.find((f) => f.name === l))
        H.value = _.value, _.value = l;
      else {
        const f = F.value.find(($) => $.name === r);
        if (f) {
          const $ = f.items.find(
            (ye) => ye.name === l
          );
          $ && (y.value.push({
            label: l,
            name: l,
            component: $.component,
            paras: $.paras
          }), H.value = _.value, _.value = l), pe($);
        }
      }
      setTimeout(() => {
        Y(l);
      }, 500);
    }, Y = (r) => {
      for (let l = 0; l < y.value.length; l++)
        if (y.value[l].name == r) {
          const h = Q.value, f = Me(h, `tab-${l}`);
          f && f.click();
        }
    }, ue = (r, l) => {
      if (y.value.find((f) => f.name === l)) {
        let f = y.value.indexOf(l);
        f !== -1 && y.value.splice(f, 1), _.value = H.value;
      }
      Z(_.value), setTimeout(() => {
        Y(l);
      }, 100);
    }, ce = (r) => {
      var h;
      let l = y.value.indexOf(r);
      y.value.splice(l, 1), _.value === ((h = y.value[l]) == null ? void 0 : h.name) && (_.value = "");
    }, de = s(0), Z = (r) => {
      F.value.forEach((l) => {
        l !== r && (l.active = !1);
      }), r.active = !r.active;
    }, pe = (r) => {
      F.value.forEach((l) => {
        l.items.forEach((h) => {
          h !== r && (h.active = !1);
        });
      }), r.active = !r.active;
    };
    K(async () => {
      typeof o.query.menuSetId == "string" && (n.value = o.query.menuSetId);
      let r;
      switch (n.value) {
        case "0018":
          d.value = "研究生论文阅读系统-个人中心";
          break;
        case "0025":
          d.value = "游戏化教育平台-后台管理";
          break;
        case "0026":
          d.value = "游戏化教育平台-个人中心";
          break;
        default:
          r = `菜单集Id:${n.value} 在函数中没有被处理!`, console.error(r), alert(r);
          break;
      }
      const l = e.roleId, h = await i.getMenuNamesByCmPrjId(
        l,
        n.value,
        Te.cmPrjId
      );
      F.value = F.value.filter((f) => h.indexOf(f.name) > -1), Q.value, me();
    });
    function ve() {
      localStorage.removeItem("hid"), B(".layui-tab-title li[lay-id]").find(".layui-tab-close").click();
    }
    function me() {
      ve();
    }
    function fe(r, l) {
      switch (console.log(l), r) {
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
          te.push("/about"), console.log("router.push('/about');");
          break;
      }
    }
    return {
      refDivLayout: Q,
      tabs: y,
      activeTab: de,
      btn_Click: fe,
      toggleActive: Z,
      menu: F,
      addTab: ne,
      removeTab: ue,
      currentTab: _,
      closeTab: ce,
      menuSetId: n,
      strTitle: d
    };
  }
});
const Ua = {
  id: "divLayout",
  ref: "refDivLayout",
  class: "app-container"
}, Aa = { class: "main-content" }, La = { class: "sidebar" }, Ia = { class: "container-fluid" }, Ta = { class: "nav flex-column" }, Ma = ["onClick"], Na = {
  key: 0,
  class: "nav flex-column ml-1"
}, Qa = ["onClick"], qa = { class: "content" }, Va = {
  class: "layui-tab tab",
  "lay-filter": "xbs_tab",
  "lay-allowclose": "false"
}, Ha = { class: "layui-tab-title" }, Wa = { class: "home" }, Oa = { class: "mr-2" }, za = ["onClick"];
function Ga(t, e, i, o, d, n) {
  const v = P("PageHeadCom"), g = P("font-awesome-icon"), j = P("el-tab-pane"), A = P("el-tabs");
  return c(), p("div", Ua, [
    a("header", null, [
      R(v, {
        ref: "PageHeadRef",
        title: t.strTitle,
        isShowEduCls: "true",
        "header-height": "60px",
        "is-show-paper-iframe": "false",
        "is-show-topic": "false",
        "is-show-search": "false",
        "is-show-major": "true",
        "is-show-attention": "true",
        "paper-id": ""
      }, null, 8, ["title"])
    ]),
    a("div", Aa, [
      a("aside", La, [
        e[1] || (e[1] = a("nav", { class: "navbar navbar-light bg-light" }, [
          a("div", { class: "container-fluid" }, [
            a("a", {
              class: "navbar-brand",
              href: "javascript:void(0)"
            }, "游戏化学习平台")
          ])
        ], -1)),
        a("div", Ia, [
          a("ul", Ta, [
            (c(!0), p(W, null, O(t.menu, (u, x) => (c(), p("li", {
              class: "nav-item",
              key: x
            }, [
              a("a", {
                class: se(["nav-link module-name", { active: u.active }]),
                href: "javascript:void",
                onClick: (m) => t.toggleActive(u)
              }, N(u.name), 11, Ma),
              u.active ? (c(), p("ul", Na, [
                (c(!0), p(W, null, O(u.items, (m, S) => (c(), p("li", {
                  class: "nav-item",
                  key: S
                }, [
                  a("a", {
                    class: se(["nav-link item-name", { item_active: m.active }]),
                    href: "javascript:void",
                    onClick: (T) => t.addTab(u.name, m.name)
                  }, N(m.name), 11, Qa)
                ]))), 128))
              ])) : k("", !0)
            ]))), 128))
          ])
        ])
      ]),
      a("main", qa, [
        a("div", Va, [
          a("ul", Ha, [
            a("li", Wa, [
              R(g, { icon: "fa-regular fa-heart" }),
              e[2] || (e[2] = z("我的桌面 "))
            ])
          ]),
          e[4] || (e[4] = a("div", {
            id: "tab_right",
            class: "layui-unselect layui-form-select layui-form-selected"
          }, [
            a("dl", null, [
              a("dd", { "data-type": "this" }, "关闭当前"),
              a("dd", { "data-type": "other" }, "关闭其它"),
              a("dd", { "data-type": "all" }, "关闭全部")
            ])
          ], -1)),
          R(A, {
            modelValue: t.currentTab,
            "onUpdate:modelValue": e[0] || (e[0] = (u) => t.currentTab = u)
          }, {
            default: U(() => [
              (c(!0), p(W, null, O(t.tabs, (u) => (c(), G(j, {
                key: u.name
              }, {
                label: U(() => [
                  a("span", Oa, N(u.label), 1),
                  e[3] || (e[3] = a("span", null, "  ", -1)),
                  a("a", {
                    href: "javascript:void(0)",
                    class: "ml-2",
                    title: "移除该页面",
                    onClick: (x) => t.closeTab(u)
                  }, [
                    R(g, {
                      icon: "times",
                      style: { color: "rgb(164, 207, 247)" }
                    })
                  ], 8, za)
                ]),
                default: U(() => [
                  (c(), G(qe(u.component), {
                    paras: u.paras
                  }, null, 8, ["paras"]))
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"]),
          e[5] || (e[5] = a("div", { id: "tab_show" }, null, -1))
        ])
      ]),
      e[6] || (e[6] = a("div", { class: "page-content-bg" }, null, -1))
    ]),
    e[7] || (e[7] = a("input", {
      id: "hidPage",
      type: "hidden"
    }, null, -1))
  ], 512);
}
const Za = /* @__PURE__ */ X(Ra, [["render", Ga], ["__scopeId", "data-v-0a721f44"]]);
export {
  Za as default
};
