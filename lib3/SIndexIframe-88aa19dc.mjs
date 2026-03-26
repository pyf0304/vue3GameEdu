var it = Object.defineProperty;
var ut = (t, s, e) => s in t ? it(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var o = (t, s, e) => (ut(t, typeof s != "symbol" ? s + "" : s, e), e);
import { I as lt, F as N, L as je, h as _e, i as Me, j as Re, M as A, O as X, K as be, N as Y, u as B, v as he, d as R, P as ct, y as dt, z as mt, m as ht, g as ye, R as Q, T as G, V as pt, W as ft, Y as It, Z as Ct, a0 as gt, a1 as St, a2 as jt, a3 as _t, a4 as Mt, a5 as Rt, a6 as bt, a7 as yt, a8 as Pt, a9 as Nt, aa as xt, ab as Ut, ac as wt, ad as Lt, ae as $t, af as vt, ag as Dt, ah as Tt, ai as qt, aj as Et, ak as Ft, al as Ot, am as kt, an as Qt, ao as At, ap as Bt, aq as Gt, ar as Wt, as as Kt, at as zt, au as Vt, av as Xt, aw as Jt, ax as Ht, k as Zt, ay as Yt, $ as es, r as ts, _ as ss } from "./index-b2b0ebb3.mjs";
import { ref as M, reactive as J, defineComponent as rs, markRaw as p, onMounted as ns, resolveComponent as W, openBlock as v, createElementBlock as T, createElementVNode as S, createVNode as K, Fragment as ee, renderList as te, normalizeClass as pe, toDisplayString as se, createCommentVNode as os, createTextVNode as as, withCtx as re, createBlock as fe, resolveDynamicComponent as is } from "vue";
const j = class j {
  constructor() {
    //以下是属性变量
    /**
     * 设置对象中公共属性.
     * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
    */
    o(this, "menuId", "");
    //菜单Id
    o(this, "menuName", "");
    //菜单名
    o(this, "qxPrjId", "");
    //项目Id
    o(this, "upMenuId", "");
    //上级菜单Id
    o(this, "linkFile", "");
    //链接文件
    o(this, "qsParameters", "");
    //qs参数
    o(this, "tabId", "");
    //表ID
    o(this, "imgFile", "");
    //图像文件
    o(this, "roleId", "");
    //角色Id
    o(this, "orderNum", 0);
    //排序号
    o(this, "isLeafNode", !1);
    //是否叶子
    o(this, "menuTitle", "");
    //菜单标题
    o(this, "pageDispModeId", "");
    //页面显示模式Id
    o(this, "inUse", !1);
    //是否在用
    o(this, "menuControlName", "");
    //菜单控件名
    o(this, "applicationTypeId", 0);
    //应用程序类型Id
    o(this, "updDate", "");
    //修改日期
    o(this, "updUserId", "");
    //修改用户Id
    o(this, "memo", "");
  }
  //备注
  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
  */
  GetFldValue(s) {
    let e = "";
    switch (s) {
      case j.con_MenuId:
        return this.menuId;
      case j.con_MenuName:
        return this.menuName;
      case j.con_QxPrjId:
        return this.qxPrjId;
      case j.con_UpMenuId:
        return this.upMenuId;
      case j.con_LinkFile:
        return this.linkFile;
      case j.con_qsParameters:
        return this.qsParameters;
      case j.con_TabId:
        return this.tabId;
      case j.con_ImgFile:
        return this.imgFile;
      case j.con_RoleId:
        return this.roleId;
      case j.con_OrderNum:
        return this.orderNum;
      case j.con_IsLeafNode:
        return this.isLeafNode;
      case j.con_MenuTitle:
        return this.menuTitle;
      case j.con_PageDispModeId:
        return this.pageDispModeId;
      case j.con_InUse:
        return this.inUse;
      case j.con_MenuControlName:
        return this.menuControlName;
      case j.con_ApplicationTypeId:
        return this.applicationTypeId;
      case j.con_UpdDate:
        return this.updDate;
      case j.con_UpdUserId:
        return this.updUserId;
      case j.con_Memo:
        return this.memo;
      default:
        return e = `字段名:[${s}]在表对象:[QxPrjMenus]中不存在!`, console.error(e), "";
    }
  }
  /**
  * 常量:"MenuId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_MenuId() {
    return "menuId";
  }
  //菜单Id
  /**
  * 常量:"MenuName"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_MenuName() {
    return "menuName";
  }
  //菜单名
  /**
  * 常量:"QxPrjId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_QxPrjId() {
    return "qxPrjId";
  }
  //项目Id
  /**
  * 常量:"UpMenuId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_UpMenuId() {
    return "upMenuId";
  }
  //上级菜单Id
  /**
  * 常量:"LinkFile"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_LinkFile() {
    return "linkFile";
  }
  //链接文件
  /**
  * 常量:"qsParameters"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_qsParameters() {
    return "qsParameters";
  }
  //qs参数
  /**
  * 常量:"TabId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_TabId() {
    return "tabId";
  }
  //表ID
  /**
  * 常量:"ImgFile"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_ImgFile() {
    return "imgFile";
  }
  //图像文件
  /**
  * 常量:"RoleId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_RoleId() {
    return "roleId";
  }
  //角色Id
  /**
  * 常量:"OrderNum"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_OrderNum() {
    return "orderNum";
  }
  //排序号
  /**
  * 常量:"IsLeafNode"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_IsLeafNode() {
    return "isLeafNode";
  }
  //是否叶子
  /**
  * 常量:"MenuTitle"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_MenuTitle() {
    return "menuTitle";
  }
  //菜单标题
  /**
  * 常量:"PageDispModeId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_PageDispModeId() {
    return "pageDispModeId";
  }
  //页面显示模式Id
  /**
  * 常量:"InUse"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_InUse() {
    return "inUse";
  }
  //是否在用
  /**
  * 常量:"MenuControlName"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_MenuControlName() {
    return "menuControlName";
  }
  //菜单控件名
  /**
  * 常量:"ApplicationTypeId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_ApplicationTypeId() {
    return "applicationTypeId";
  }
  //应用程序类型Id
  /**
  * 常量:"UpdDate"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_UpdDate() {
    return "updDate";
  }
  //修改日期
  /**
  * 常量:"UpdUserId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_UpdUserId() {
    return "updUserId";
  }
  //修改用户Id
  /**
  * 常量:"Memo"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_Memo() {
    return "memo";
  }
  //备注
};
o(j, "_CurrTabName", "QxPrjMenus"), //当前表名,与该类相关的表名
o(j, "_KeyFldName", "MenuId"), //当前表中的关键字名称,与该类相关的表中关键字名
o(j, "mintAttributeCount", 19), o(j, "AttributeName", ["menuId", "menuName", "qxPrjId", "upMenuId", "linkFile", "qsParameters", "tabId", "imgFile", "roleId", "orderNum", "isLeafNode", "menuTitle", "pageDispModeId", "inUse", "menuControlName", "applicationTypeId", "updDate", "updUserId", "memo"]);
let ae = j;
const us = "QxPrjMenusApi", Ie = "qxPrjMenus";
async function k(t) {
  const s = "GetObjByMenuIdAsync";
  if (lt(t) == !0) {
    const i = N("参数:[strMenuId]不能为空!(In clsQxPrjMenusWApi.GetObjByMenuIdAsync)");
    throw console.error(i), i;
  }
  if (t.length != 8) {
    const i = N("缓存分类变量:[strMenuId]的长度:[{0}]不正确!(clsQxPrjMenusWApi.GetObjByMenuIdAsync)", t.length);
    throw console.error(i), i;
  }
  const r = je(us, "GetObjByMenuId"), u = {
    headers: {
      Authorization: `${_e.get(Me)}`
    },
    params: {
      strMenuId: t
    }
  };
  try {
    const l = (await Re.get(r, u)).data;
    if (l.errorId == 0) {
      const c = l.returnObj;
      return c == null ? null : ls(c);
    } else
      throw console.error(l.errorMsg), l.errorMsg;
  } catch (i) {
    if (console.error(i), i.statusText == null)
      throw i;
    if (i.statusText == "error") {
      const l = N("网络错误!访问地址:{0}不成功!(in {1}.{2})", r, Ie, s);
      throw console.error(l), l;
    } else if (i.statusText == "Not Found") {
      const l = N("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", r, Ie, s);
      throw console.error(l), l;
    } else
      throw i.statusText;
  }
}
function ls(t) {
  const s = new A();
  return X(s, t), s;
}
function E(t) {
  const s = E.name, e = new ae();
  try {
    return X(e, t), e;
  } catch (r) {
    const n = N("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})", r, s);
    return console.error(n), alert(n), e;
  }
}
const Ce = be("QxPrjMenus", {
  state() {
    return {
      qxPrjMenusLst: []
    };
  },
  actions: {
    async getMenuName(t) {
      if (t == "" || t == null)
        return "";
      const s = this.qxPrjMenusLst.find((n) => n.menuId === t);
      if (s != null && s != null)
        return s.menuName;
      let e = await k(t);
      if (e == null) {
        const n = `MenuId=${t} 的QxPrjMenus中不存在，请检查！`;
        return console.error(n), "";
      }
      const r = E(e);
      return this.qxPrjMenusLst.push(r), r.menuName;
    },
    async getOrderNum(t) {
      if (t == "" || t == null)
        return 0;
      const s = this.qxPrjMenusLst.find((n) => n.menuId === t);
      if (s != null && s != null)
        return s.orderNum;
      let e = await k(t);
      if (e == null) {
        const n = `MenuId=${t} 的QxPrjMenus中不存在，请检查！`;
        return console.error(n), 0;
      }
      const r = E(e);
      return this.qxPrjMenusLst.push(r), r.orderNum;
    },
    async getQxPrjId(t) {
      if (t == "" || t == null)
        return "";
      const s = this.qxPrjMenusLst.find((n) => n.menuId === t);
      if (s != null && s != null)
        return s.qxPrjId;
      let e = await k(t);
      if (e == null) {
        const n = `MenuId=${t} 的QxPrjMenus中不存在，请检查！`;
        return console.error(n), "";
      }
      const r = E(e);
      return this.qxPrjMenusLst.push(r), r.qxPrjId;
    },
    async getUpMenuId(t) {
      if (t == "" || t == null)
        return "";
      const s = this.qxPrjMenusLst.find((n) => n.menuId === t);
      if (s != null && s != null)
        return s.upMenuId;
      let e = await k(t);
      if (e == null) {
        const n = `MenuId=${t} 的QxPrjMenus中不存在，请检查！`;
        return console.error(n), "";
      }
      const r = E(e);
      return this.qxPrjMenusLst.push(r), r.upMenuId;
    },
    async getObj(t) {
      if (t == "" || t == null)
        return null;
      const s = this.qxPrjMenusLst.find((n) => n.menuId === t);
      if (s != null && s != null)
        return s;
      let e = await k(t);
      if (e == null) {
        const n = `MenuId=${t} 的QxPrjMenus中不存在，请检查！`;
        return console.error(n), null;
      }
      const r = E(e);
      return this.qxPrjMenusLst.push(r), r;
    },
    getMenuIdLstByMenuName(t, s) {
      let e, r = [];
      switch (s) {
        case Y.Equal_01:
          e = this.qxPrjMenusLst.filter((n) => n.menuName === t), r = e.map((n) => n.menuId);
          break;
        case Y.Like_03:
          e = this.qxPrjMenusLst.filter((n) => n.menuName.indexOf(t) > -1), r = e.map((n) => n.menuId);
          break;
      }
      return r;
    },
    getSubMenuIdLst(t) {
      return this.qxPrjMenusLst.filter((r) => r.upMenuId === t).map((r) => r.menuId);
    },
    getMenuIdLstByQxPrjId(t, s) {
      let e, r = [];
      switch (s) {
        case Y.Equal_01:
          e = this.qxPrjMenusLst.filter((n) => n.qxPrjId === t), r = e.map((n) => n.menuId);
          break;
      }
      return r;
    },
    delObj(t) {
      if (t == null || t == "")
        return !0;
      const s = this.qxPrjMenusLst.findIndex((e) => e.menuId != t);
      return this.qxPrjMenusLst = this.qxPrjMenusLst.filter((e) => e.menuId != t), s > -1 ? (console.log(`MenuId:${t}在QxPrjMenus中已经移除！`), !0) : (console.error(`MenuId:${t}在QxPrjMenus中不存在！`), !1);
    },
    async getFieldValue(t, s) {
      let e = this.qxPrjMenusLst.find((n) => n.menuId === t);
      if (e == null) {
        const n = await k(t);
        if (n == null)
          return "";
        e = E(n), this.qxPrjMenusLst.push(e);
      }
      let r = "";
      switch (s) {
        case A.con_QxPrjId:
          return e.qxPrjId;
        case A.con_MenuId:
          return e.menuId;
        case A.con_MenuName:
          return e.menuName;
        case A.con_QxPrjId:
          return e.qxPrjId;
        default:
          return r = `字段名:[${s}]在表对象:[QxPrjMenus]中不存在!`, console.error(r), "";
      }
    }
  }
});
var x;
let ne = (x = class {
  //界面布局的层对象
  /**
   * 获取当前组件的divLayout的层对象
   **/
  get thisDivLayout() {
    return x.divLayout;
  }
  //public static divName4List: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  get pageSize() {
    return 10;
  }
  async PageLoad() {
    const s = this.PageLoad.name;
    try {
      const e = B();
      if (e.userId != "") {
        $("#userName").append(e.getUserName + "(" + e.getRoleName + ")"), $("#spanMajorName").html(e.getMajorName + "专业");
        const r = await this.Bind_QuestionsCount();
        if (he(this.thisDivLayout, "hidPage") != "")
          switch (he(this.thisDivLayout, "hidPage")) {
            case "1":
              $("#li_PaperSee").show(), $("#li_PaperMg").show(), $("#li_TopicMg").hide(), $("#li_MajorDirection").hide(), $("#li_PaperQA").hide(), $("#li_UserManage").hide(), $("#li_UserCenter").hide(), $("#li_CurrEduCls").hide(), $("#li_SysTools").hide(), $("#ulModularName").show(), $("#ModularName").html("论文阅读");
              break;
            case "2":
              $("#ulModularName").show(), $("#ModularName").html("答疑标注"), $("#li_PaperSee").hide(), $("#li_PaperMg").hide(), $("#li_TopicMg").hide(), $("#li_MajorDirection").hide(), $("#li_PaperQA").show(), $("#li_PaperSee").removeClass("open"), $("#li_PaperSee a").removeClass("active"), $("#li_PaperQA").addClass("open"), $("#li_PaperQA ul").css("display", "block"), $("#li_UserManage").hide(), $("#li_UserCenter").hide(), $("#li_CurrEduCls").hide(), $("#li_SysTools").hide();
              break;
            case "3":
              $("#ulModularName").show(), $("#ModularName").html("个人中心"), $("#li_PaperSee").hide(), $("#li_PaperMg").hide(), $("#li_TopicMg").hide(), $("#li_MajorDirection").hide(), $("#li_PaperQA").hide(), $("#li_UserManage").hide(), $("#li_UserCenter").show(), $("#li_PaperSee").removeClass("open"), $("#li_PaperSee a").removeClass("active"), $("#li_UserCenter").addClass("open"), $("#li_UserCenter ul").css("display", "block"), $("#li_CurrEduCls").hide(), $("#li_SysTools").hide();
              break;
            case "4":
              $("#ulModularName").show(), $("#ModularName").html("控制中心"), $("#li_PaperSee").hide(), $("#li_PaperMg").hide(), $("#li_TopicMg").hide(), $("#li_MajorDirection").hide(), $("#li_PaperQA").hide(), $("#li_UserManage").hide(), $("#li_UserCenter").hide(), $("#li_CurrEduCls").show(), $("#li_SysTools").show(), $("#li_PaperSee").removeClass("open"), $("#li_PaperSee a").removeClass("active"), $("#li_SysTools").addClass("open"), $("#li_SysTools ul").css("display", "block");
              break;
            default:
              break;
          }
        if (e.getRoleId == "00620001") {
          $("#li_UserManage").show(), $("#li__ExplainType").show(), $("#li__SubViewpointType").show(), $("#li__LiteratureType").show(), $("#li__ViewpointType").show(), $("#li__DiscussionType").show(), $("#pdftest1").show(), $("#pdftest2").show(), $("#pdftest3").show(), $("#comment").show(), $("#commentType").show(), $("#ScoreWeight").show(), $("#ScoreSummaryNew").show(), $("#TotalDataStatistics").show(), $("#li_CurrEduCls").show(), $("#li_SysTools").show(), $("#licc_course").show(), $("#liCurrEduClsTeacher").show(), $("#liCurrEduClsDate").show(), $("#liCurrEduCls").show(), $("#lixzMajor").show(), $("#li__spake_Super").show(), $("#li__spake_Sub").show(), $("#li__TopicTask").show(), $("#liTextType").show(), $("#liUnit").show(), $("#liTextStatus").show(), $("#liGrade").show(), $("#liCacheUseState").show();
          const n = await this.Bind_EduClsTeaList();
        } else if (e.getRoleId == "00620002") {
          $("#li_UserManage").hide(), $("#li__ExplainType").show(), $("#li__SubViewpointType").show(), $("#li__LiteratureType").show(), $("#li__ViewpointType").hide(), $("#li__DiscussionType").hide(), $("#TotalDataStatistics").show(), $("#comment").show(), $("#ScoreSummaryNew").show(), $("#licc_course").show(), $("#liCurrEduClsTeacher").show(), $("#liCurrEduClsDate").show(), $("#liCurrEduCls").show(), $("#lixzMajor").show();
          const n = await this.Bind_EduClsTeaList();
        } else {
          $("#li_UserManage").hide(), $("#li__ExplainType").show(), $("#li__SubViewpointType").show(), $("#li__LiteratureType").show(), $("#li__DiscussionType").hide(), $("#PersonalKnowledgeView").hide(), $("#liViewpointShare").show(), $("#comment").show(), $("#ScoreSummaryNew").show(), $("#ligs_ReflectLog").show();
          const n = await this.Bind_EduClsStuList();
        }
      } else
        window.top.location.href = "../Web/Index";
    } catch (e) {
      const r = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${s})`;
      console.error(r), alert(r);
    }
  }
  //答疑被邀请数
  async Bind_QuestionsCount() {
    const s = this.Bind_QuestionsCount.name;
    try {
      const e = B();
      let r = " 1=1 and idCurrEduCls='" + R.idCurrEduCls + "'";
      r += " and ReceiveUser='" + e.userId + "' and isReceive=0";
      const n = await ct(r);
      $("#QuestionsCount").html(n.toString());
    } catch (e) {
      const r = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${s})`;
      console.error(r);
    }
  }
  //教学班教师
  async Bind_EduClsTeaList() {
    const s = this.Bind_EduClsTeaList.name;
    try {
      const r = " TeacherID='" + B().userId + "' order by updDate Desc", n = await dt(r);
      let u = "";
      for (let i = 0; i < n.length; i++) {
        const l = n[i].idCurrEduCls, c = n[i].eduClsName, m = n[i].eduClsTypeId, d = n[i].courseId, h = n[i].courseName, a = c + "(" + h + ")";
        if (i == 0)
          if (R.idCurrEduCls == "")
            $("#eduClsName").html(a), R.idCurrEduCls = l, R.eduClsTypeId = m, R.eduClsName = c, R.courseId = d, R.courseName = h;
          else {
            const f = R.eduClsName + "(" + R.courseName + ")";
            $("#eduClsName").html(f);
          }
        u += '<dd><a onclick=EduCls_Click("' + l + '","' + c + '","' + m + '","' + d + '","' + h + '")> ' + a + "</a></dd>";
      }
      $("#dlEduClsList").html(u);
    } catch (e) {
      const r = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${s})`;
      console.error(r), alert(r);
    }
  }
  //教学班学生
  async Bind_EduClsStuList() {
    const s = this.Bind_EduClsStuList.name;
    try {
      const r = " stuId='" + B().userId + "' order by modifyDate Desc", n = await mt(r);
      let u = "";
      for (let i = 0; i < n.length; i++) {
        const l = n[i].idCurrEduCls, c = n[i].eduClsName, m = n[i].eduClsTypeId, d = n[i].courseId, h = n[i].courseName, a = c + "(" + h + ")";
        if (i == 0)
          if (R.idCurrEduCls == "")
            $("#eduClsName").html(a), R.idCurrEduCls = l, R.eduClsTypeId = m, R.eduClsName = c, R.courseId = d, R.courseName = h;
          else {
            const f = R.eduClsName + "(" + R.courseName + ")";
            $("#eduClsName").html(f);
          }
        u += '<dd><a onclick=EduCls_Click("' + l + '","' + c + '","' + m + '","' + d + '","' + h + '")> ' + a + "</a></dd>";
      }
      $("#dlEduClsList").html(u);
    } catch (e) {
      const r = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${s})`;
      console.error(r), alert(r);
    }
  }
  //教学班教师
  async EduCls_Click(s, e, r, n, u) {
    const i = e + "(" + u + ")";
    $("#eduClsName").html(i), R.idCurrEduCls = s, R.eduClsTypeId = r, R.eduClsName = e, R.courseId = n, R.courseName = u, ht.success("已切换教学班！");
    const l = $("#Index_iframe")[0];
    l != null && l.contentWindow != null && l.contentWindow.WelcomeLoad_Click();
  }
}, o(x, "GetPropValue"), o(x, "divList"), //列表区的层对象
o(x, "divDataLst"), //列表中数据区的层对象
o(x, "divPager"), //列表中的分页区的层对象
o(x, "divQuery"), //查询区的层对象
o(x, "divFunction"), //功能区的层对象
o(x, "divLayout"), x);
const b = class b {
  constructor() {
    //以下是属性变量
    /**
     * 设置对象中公共属性.
     * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
    */
    o(this, "mId", 0);
    //流水号
    o(this, "roleId", "");
    //角色Id
    o(this, "qxPrjId", "");
    //项目Id
    o(this, "cmPrjId", "");
    //Cm项目Id
    o(this, "menuSetId", "");
    //菜单集Id
    o(this, "menuId", "");
    //菜单Id
    o(this, "isDisp", !1);
    //是否显示
    o(this, "updDate", "");
    //修改日期
    o(this, "updUserId", "");
    //修改用户Id
    o(this, "memo", "");
  }
  //备注
  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
  */
  GetFldValue(s) {
    let e = "";
    switch (s) {
      case b.con_mId:
        return this.mId;
      case b.con_RoleId:
        return this.roleId;
      case b.con_QxPrjId:
        return this.qxPrjId;
      case b.con_CmPrjId:
        return this.cmPrjId;
      case b.con_MenuSetId:
        return this.menuSetId;
      case b.con_MenuId:
        return this.menuId;
      case b.con_IsDisp:
        return this.isDisp;
      case b.con_UpdDate:
        return this.updDate;
      case b.con_UpdUserId:
        return this.updUserId;
      case b.con_Memo:
        return this.memo;
      default:
        return e = `字段名:[${s}]在表对象:[QxRoleMenus]中不存在!`, console.error(e), "";
    }
  }
  /**
  * 常量:"mId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_mId() {
    return "mId";
  }
  //流水号
  /**
  * 常量:"RoleId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_RoleId() {
    return "roleId";
  }
  //角色Id
  /**
  * 常量:"QxPrjId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_QxPrjId() {
    return "qxPrjId";
  }
  //项目Id
  /**
  * 常量:"CmPrjId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_CmPrjId() {
    return "cmPrjId";
  }
  //Cm项目Id
  /**
  * 常量:"MenuSetId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_MenuSetId() {
    return "menuSetId";
  }
  //菜单集Id
  /**
  * 常量:"MenuId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_MenuId() {
    return "menuId";
  }
  //菜单Id
  /**
  * 常量:"IsDisp"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_IsDisp() {
    return "isDisp";
  }
  //是否显示
  /**
  * 常量:"UpdDate"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_UpdDate() {
    return "updDate";
  }
  //修改日期
  /**
  * 常量:"UpdUserId"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_UpdUserId() {
    return "updUserId";
  }
  //修改用户Id
  /**
  * 常量:"Memo"
  * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
  */
  static get con_Memo() {
    return "memo";
  }
  //备注
};
o(b, "_CurrTabName", "QxRoleMenus"), //当前表名,与该类相关的表名
o(b, "_KeyFldName", "mId"), //当前表中的关键字名称,与该类相关的表中关键字名
o(b, "mintAttributeCount", 10), o(b, "AttributeName", ["mId", "roleId", "qxPrjId", "cmPrjId", "menuSetId", "menuId", "isDisp", "updDate", "updUserId", "memo"]);
let ie = b;
const I = class I extends ye {
  //以下是属性变量
  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
  */
  constructor() {
    super();
    /**
     * 设置对象中私有属性.
     * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
    */
    o(this, "mlngmId", 0);
    //流水号
    o(this, "mstrRoleId", "");
    //角色Id
    o(this, "mstrQxPrjId", "");
    //项目Id
    o(this, "mstrCmPrjId", "");
    //Cm项目Id
    o(this, "mstrMenuSetId", "");
    //菜单集Id
    o(this, "mstrMenuId", "");
    //菜单Id
    o(this, "mbolIsDisp", !1);
    //是否显示
    o(this, "mstrUpdDate", "");
    //修改日期
    o(this, "mstrUpdUserId", "");
    //修改用户Id
    o(this, "mstrMemo", "");
    /**
     * 设置对象中公共属性.
     * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
    */
    o(this, "mId", 0);
    //流水号
    o(this, "roleId", "");
    //角色Id
    o(this, "qxPrjId", "");
    //项目Id
    o(this, "cmPrjId", "");
    //Cm项目Id
    o(this, "menuSetId", "");
    //菜单集Id
    o(this, "menuId", "");
    //菜单Id
    o(this, "isDisp", !1);
    //是否显示
    o(this, "updDate", "");
    //修改日期
    o(this, "updUserId", "");
    //修改用户Id
    o(this, "memo", "");
  }
  //备注
  /**
   * 流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetmId(e) {
    e != null && (this.mId = e, this.hmProperty.mId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 角色Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetRoleId(e) {
    e != null && (this.roleId = e, this.hmProperty.roleId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 项目Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetQxPrjId(e) {
    e != null && (this.qxPrjId = e, this.hmProperty.qxPrjId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * Cm项目Id(说明:;字段类型:char;字段长度:6;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetCmPrjId(e) {
    e != null && (this.cmPrjId = e, this.hmProperty.cmPrjId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 菜单集Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetMenuSetId(e) {
    e != null && (this.menuSetId = e, this.hmProperty.menuSetId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 菜单Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetMenuId(e) {
    e != null && (this.menuId = e, this.hmProperty.menuId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIsDisp(e) {
    e != null && (this.isDisp = e, this.hmProperty.isDisp = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetUpdDate(e) {
    e != null && (this.updDate = e, this.hmProperty.updDate = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetUpdUserId(e) {
    e != null && (this.updUserId = e, this.hmProperty.updUserId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetMemo(e) {
    e != null && (this.memo = e, this.hmProperty.memo = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
  */
  GetFldValue(e) {
    let r = "";
    switch (e) {
      case I.con_mId:
        return this.mId;
      case I.con_RoleId:
        return this.roleId;
      case I.con_QxPrjId:
        return this.qxPrjId;
      case I.con_CmPrjId:
        return this.cmPrjId;
      case I.con_MenuSetId:
        return this.menuSetId;
      case I.con_MenuId:
        return this.menuId;
      case I.con_IsDisp:
        return this.isDisp;
      case I.con_UpdDate:
        return this.updDate;
      case I.con_UpdUserId:
        return this.updUserId;
      case I.con_Memo:
        return this.memo;
      case "sfUpdFldSetStr":
        return this.sfUpdFldSetStr;
      case "sfFldComparisonOp":
        return this.sfFldComparisonOp;
      default:
        return r = `字段名:[${e}]在表对象:[QxRoleMenus]中不存在!`, console.error(r), "";
    }
  }
  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
  */
  SetFldValue(e, r) {
    const n = "SetFldValue";
    let u = "";
    switch (e) {
      case I.con_mId:
        this.mId = Number(r), this.hmProperty.mId = !0;
        break;
      case I.con_RoleId:
        this.roleId = r, this.hmProperty.roleId = !0;
        break;
      case I.con_QxPrjId:
        this.qxPrjId = r, this.hmProperty.qxPrjId = !0;
        break;
      case I.con_CmPrjId:
        this.cmPrjId = r, this.hmProperty.cmPrjId = !0;
        break;
      case I.con_MenuSetId:
        this.menuSetId = r, this.hmProperty.menuSetId = !0;
        break;
      case I.con_MenuId:
        this.menuId = r, this.hmProperty.menuId = !0;
        break;
      case I.con_IsDisp:
        this.isDisp = !!r, this.hmProperty.isDisp = !0;
        break;
      case I.con_UpdDate:
        this.updDate = r, this.hmProperty.updDate = !0;
        break;
      case I.con_UpdUserId:
        this.updUserId = r, this.hmProperty.updUserId = !0;
        break;
      case I.con_Memo:
        this.memo = r, this.hmProperty.memo = !0;
        break;
      case "sfUpdFldSetStr":
        this.sfUpdFldSetStr = r;
        break;
      case "sfFldComparisonOp":
        this.sfFldComparisonOp = r;
        break;
      default:
        u = `字段名:[${e}]在表对象:[QxRoleMenus]中不存在!(in ${this.constructor.name}.${n})`, console.error(u);
        break;
    }
  }
  //备注
  /**
  * 常量:"mId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_mId() {
    return "mId";
  }
  //流水号
  /**
  * 常量:"RoleId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_RoleId() {
    return "roleId";
  }
  //角色Id
  /**
  * 常量:"QxPrjId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_QxPrjId() {
    return "qxPrjId";
  }
  //项目Id
  /**
  * 常量:"CmPrjId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_CmPrjId() {
    return "cmPrjId";
  }
  //Cm项目Id
  /**
  * 常量:"MenuSetId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_MenuSetId() {
    return "menuSetId";
  }
  //菜单集Id
  /**
  * 常量:"MenuId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_MenuId() {
    return "menuId";
  }
  //菜单Id
  /**
  * 常量:"IsDisp"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IsDisp() {
    return "isDisp";
  }
  //是否显示
  /**
  * 常量:"UpdDate"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_UpdDate() {
    return "updDate";
  }
  //修改日期
  /**
  * 常量:"UpdUserId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_UpdUserId() {
    return "updUserId";
  }
  //修改用户Id
  /**
  * 常量:"Memo"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_Memo() {
    return "memo";
  }
  //备注
  /**
  * 设置条件字段值.
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
  * @param strFldName:字段名
  * @param strFldValue:字段值
  * @param strComparisonOp:比较操作条符
  * @returns 根据关键字获取的名称
  **/
  SetCondFldValue(e, r, n) {
    this.SetFldValue(e, r), Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, e) == !1 ? this.dicFldComparisonOp[e] = n : this.dicFldComparisonOp[e] = n, this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
  /**
  * 判断一个字符串是否是类的属性
  * @param propName: 属性名
  * @returns 是否是属性
  */
  static hasProperty(e) {
    return new I().hasOwnProperty(e);
  }
};
o(I, "_RefreshTimeLst", new Array()), o(I, "CacheAddiCondition", ""), //缓存附加条件,作为向后台调取数据的附加条件
o(I, "CacheModeId", "04"), //sessionStorage
o(I, "PrimaryTypeId", "02"), //identity
o(I, "IsUseDelSign", !1), //使用删除标志,记录不能删除,仅设置删除标志
o(I, "WhereFormat", ""), //条件格式串
o(I, "_CurrTabName", "QxRoleMenus"), //当前表名,与该类相关的表名
o(I, "_KeyFldName", "mId"), //当前表中的关键字名称,与该类相关的表中关键字名
o(I, "mintAttributeCount", 10), o(I, "AttributeName", ["mId", "roleId", "qxPrjId", "cmPrjId", "menuSetId", "menuId", "isDisp", "updDate", "updUserId", "memo"]);
let D = I;
const cs = "QxRoleMenusApi", oe = "qxRoleMenus";
async function H(t) {
  const s = "GetObjLstAsync", r = je(cs, "GetObjLst"), u = {
    headers: {
      Authorization: `${_e.get(Me)}`
    },
    params: {
      strWhereCond: t
    }
  };
  try {
    const l = (await Re.get(r, u)).data;
    if (l.errorId == 0) {
      const c = l.returnObjLst;
      if (c == null) {
        const d = N("获取数据为null, 请注意!(in {0}.{1})", oe, s);
        throw console.error(d), d;
      }
      return ds(c);
    } else
      throw console.error(l.errorMsg), l.errorMsg;
  } catch (i) {
    if (console.error(i), i.statusText == null)
      throw i;
    if (i.statusText == "error") {
      const l = N("网络错误!访问地址:{0}不成功!(in {1}.{2})", r, oe, s);
      throw console.error(l), l;
    } else if (i.statusText == "Not Found") {
      const l = N("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", r, oe, s);
      throw console.error(l), l;
    } else
      throw i.statusText;
  }
}
function ds(t) {
  const s = new Array();
  for (const e of t) {
    const r = ms(e);
    r != null && s.push(r);
  }
  return s;
}
function ms(t) {
  const s = new D();
  return X(s, t), s;
}
const C = class C extends ye {
  //以下是属性变量
  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
  */
  constructor() {
    super();
    /**
     * 设置对象中私有属性.
     * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
    */
    o(this, "mstrMenuSetId", "");
    //菜单集Id
    o(this, "mstrMenuSetName", "");
    //菜单集名称
    o(this, "mstrMenuSetENName", "");
    //菜单集英文名
    o(this, "mstrQxPrjId", "");
    //项目Id
    o(this, "mstrCmPrjId", "");
    //Cm项目Id
    o(this, "mbolIsDefault", !1);
    //是否默认
    o(this, "mstrUpdDate", "");
    //修改日期
    o(this, "mstrUpdUser", "");
    //修改用户
    o(this, "mstrMemo", "");
    /**
     * 设置对象中公共属性.
     * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
    */
    o(this, "menuSetId", "");
    //菜单集Id
    o(this, "menuSetName", "");
    //菜单集名称
    o(this, "menuSetENName", "");
    //菜单集英文名
    o(this, "qxPrjId", "");
    //项目Id
    o(this, "cmPrjId", "");
    //Cm项目Id
    o(this, "isDefault", !1);
    //是否默认
    o(this, "updDate", "");
    //修改日期
    o(this, "updUser", "");
    //修改用户
    o(this, "memo", "");
  }
  //备注
  /**
   * 菜单集Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetMenuSetId(e) {
    e != null && (this.menuSetId = e, this.hmProperty.menuSetId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 菜单集名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetMenuSetName(e) {
    e != null && (this.menuSetName = e, this.hmProperty.menuSetName = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 菜单集英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetMenuSetENName(e) {
    e != null && (this.menuSetENName = e, this.hmProperty.menuSetENName = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 项目Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetQxPrjId(e) {
    e != null && (this.qxPrjId = e, this.hmProperty.qxPrjId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * Cm项目Id(说明:;字段类型:char;字段长度:6;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetCmPrjId(e) {
    e != null && (this.cmPrjId = e, this.hmProperty.cmPrjId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 是否默认(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIsDefault(e) {
    e != null && (this.isDefault = e, this.hmProperty.isDefault = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetUpdDate(e) {
    e != null && (this.updDate = e, this.hmProperty.updDate = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 修改用户(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetUpdUser(e) {
    e != null && (this.updUser = e, this.hmProperty.updUser = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetMemo(e) {
    e != null && (this.memo = e, this.hmProperty.memo = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
  */
  GetFldValue(e) {
    let r = "";
    switch (e) {
      case C.con_MenuSetId:
        return this.menuSetId;
      case C.con_MenuSetName:
        return this.menuSetName;
      case C.con_MenuSetENName:
        return this.menuSetENName;
      case C.con_QxPrjId:
        return this.qxPrjId;
      case C.con_CmPrjId:
        return this.cmPrjId;
      case C.con_IsDefault:
        return this.isDefault;
      case C.con_UpdDate:
        return this.updDate;
      case C.con_UpdUser:
        return this.updUser;
      case C.con_Memo:
        return this.memo;
      case "sfUpdFldSetStr":
        return this.sfUpdFldSetStr;
      case "sfFldComparisonOp":
        return this.sfFldComparisonOp;
      default:
        return r = `字段名:[${e}]在表对象:[QxPrjMenuSet]中不存在!`, console.error(r), "";
    }
  }
  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
  */
  SetFldValue(e, r) {
    const n = "SetFldValue";
    let u = "";
    switch (e) {
      case C.con_MenuSetId:
        this.menuSetId = r, this.hmProperty.menuSetId = !0;
        break;
      case C.con_MenuSetName:
        this.menuSetName = r, this.hmProperty.menuSetName = !0;
        break;
      case C.con_MenuSetENName:
        this.menuSetENName = r, this.hmProperty.menuSetENName = !0;
        break;
      case C.con_QxPrjId:
        this.qxPrjId = r, this.hmProperty.qxPrjId = !0;
        break;
      case C.con_CmPrjId:
        this.cmPrjId = r, this.hmProperty.cmPrjId = !0;
        break;
      case C.con_IsDefault:
        this.isDefault = !!r, this.hmProperty.isDefault = !0;
        break;
      case C.con_UpdDate:
        this.updDate = r, this.hmProperty.updDate = !0;
        break;
      case C.con_UpdUser:
        this.updUser = r, this.hmProperty.updUser = !0;
        break;
      case C.con_Memo:
        this.memo = r, this.hmProperty.memo = !0;
        break;
      case "sfUpdFldSetStr":
        this.sfUpdFldSetStr = r;
        break;
      case "sfFldComparisonOp":
        this.sfFldComparisonOp = r;
        break;
      default:
        u = `字段名:[${e}]在表对象:[QxPrjMenuSet]中不存在!(in ${this.constructor.name}.${n})`, console.error(u);
        break;
    }
  }
  //备注
  /**
  * 常量:"MenuSetId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_MenuSetId() {
    return "menuSetId";
  }
  //菜单集Id
  /**
  * 常量:"MenuSetName"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_MenuSetName() {
    return "menuSetName";
  }
  //菜单集名称
  /**
  * 常量:"MenuSetENName"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_MenuSetENName() {
    return "menuSetENName";
  }
  //菜单集英文名
  /**
  * 常量:"QxPrjId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_QxPrjId() {
    return "qxPrjId";
  }
  //项目Id
  /**
  * 常量:"CmPrjId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_CmPrjId() {
    return "cmPrjId";
  }
  //Cm项目Id
  /**
  * 常量:"IsDefault"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IsDefault() {
    return "isDefault";
  }
  //是否默认
  /**
  * 常量:"UpdDate"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_UpdDate() {
    return "updDate";
  }
  //修改日期
  /**
  * 常量:"UpdUser"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_UpdUser() {
    return "updUser";
  }
  //修改用户
  /**
  * 常量:"Memo"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_Memo() {
    return "memo";
  }
  //备注
  /**
  * 设置条件字段值.
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
  * @param strFldName:字段名
  * @param strFldValue:字段值
  * @param strComparisonOp:比较操作条符
  * @returns 根据关键字获取的名称
  **/
  SetCondFldValue(e, r, n) {
    this.SetFldValue(e, r), Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, e) == !1 ? this.dicFldComparisonOp[e] = n : this.dicFldComparisonOp[e] = n, this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
  /**
  * 判断一个字符串是否是类的属性
  * @param propName: 属性名
  * @returns 是否是属性
  */
  static hasProperty(e) {
    return new C().hasOwnProperty(e);
  }
};
o(C, "_RefreshTimeLst", new Array()), o(C, "CacheAddiCondition", ""), //缓存附加条件,作为向后台调取数据的附加条件
o(C, "CacheModeId", "03"), //localStorage
o(C, "PrimaryTypeId", "03"), //自增
o(C, "IsUseDelSign", !1), //使用删除标志,记录不能删除,仅设置删除标志
o(C, "WhereFormat", ""), //条件格式串
o(C, "_CurrTabName", "QxPrjMenuSet"), //当前表名,与该类相关的表名
o(C, "_KeyFldName", "MenuSetId"), //当前表中的关键字名称,与该类相关的表中关键字名
o(C, "mintAttributeCount", 9), o(C, "AttributeName", ["menuSetId", "menuSetName", "menuSetENName", "qxPrjId", "cmPrjId", "isDefault", "updDate", "updUser", "memo"]);
let ge = C;
async function q(t, s) {
  try {
    if (t == "") {
      const n = N(
        "参数:[strMenuId]不能为空!(In clsQxRoleMenusExWApi.GetObjLstByMenuIdAndPrjId)"
      );
      throw console.error(n), n;
    }
    if (s == "") {
      const n = N(
        "参数:[strQxPrjId]不能为空!(In clsQxRoleMenusExWApi.GetObjLstByMenuIdAndPrjId)"
      );
      throw console.error(n), n;
    }
    const e = `${D.con_MenuId} = '${t}' and ${D.con_QxPrjId} = '${s}'`;
    return await H(e);
  } catch (e) {
    throw console.error(e), `获取对象列表时出错。${e}`;
  }
}
async function hs(t) {
  try {
    if (t == "") {
      const r = N(
        "参数:[strMenuId]不能为空!(In clsQxRoleMenusExWApi.GetObjLstByMenuIdAndPrjId)"
      );
      throw console.error(r), r;
    }
    const s = `${D.con_MenuId} = '${t}' `;
    return await H(s);
  } catch (s) {
    throw console.error(s), `获取对象列表时出错。${s}`;
  }
}
async function z(t) {
  try {
    if (t == "") {
      const r = N(
        "参数:[strCmPrjId]不能为空!(In clsQxRoleMenusExWApi.QxRoleMenusEx_GetObjLstByCmPrjId)"
      );
      throw console.error(r), r;
    }
    const s = ` ${D.con_CmPrjId} = '${t}'`;
    return await H(s);
  } catch (s) {
    throw console.error(s), `获取对象列表时出错。${s}`;
  }
}
async function Se(t) {
  try {
    if (t == "") {
      const r = N(
        "参数:[strMenuSetId]不能为空!(In clsQxRoleMenusExWApi.QxRoleMenusEx_GetObjLstByMenuSetId)"
      );
      throw console.error(r), r;
    }
    const s = ` ${D.con_MenuSetId} = '${t}'`;
    return await H(s);
  } catch (s) {
    throw console.error(s), `获取对象列表时出错。${s}`;
  }
}
function ps(t, s) {
  return t.cmPrjId == s.cmPrjId ? t.menuSetId.localeCompare(s.menuSetId) : t.cmPrjId.localeCompare(s.cmPrjId);
}
function y(t) {
  const s = y.name, e = new ie();
  try {
    return X(e, t), e;
  } catch (r) {
    const n = N("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})", r, s);
    return console.error(n), alert(n), e;
  }
}
const fs = be("QxRoleMenus", {
  state() {
    return {
      qxRoleMenusLst: [],
      menuRoleNamesLst: []
      // roleMenuNamesLst: [],
    };
  },
  actions: {
    async getRoleNamesBak(t, s, e) {
      if (t == "" || t == null || e == "" || e == null)
        return "";
      const r = this.menuRoleNamesLst.find(
        (a) => a.menuId === t && a.prjId === e
      );
      if (r != null)
        return r.roleNames;
      let n = this.qxRoleMenusLst.filter(
        (a) => a.menuId === t && a.qxPrjId === e
      );
      if (n.length == 0) {
        let a = await q(t, e);
        if (a.length == 0) {
          const f = {
            menuId: t,
            prjId: e,
            cmPrjId: "",
            roleIds: "",
            roleNames: ""
          };
          return this.menuRoleNamesLst.push(f), "";
        }
        n = a.filter((f) => f.cmPrjId == s).map(y), n.forEach((f) => {
          this.qxRoleMenusLst.push(f);
        });
      }
      const u = n.map((a) => a.roleId), m = (await Q(e)).filter(
        (a) => u.indexOf(a.roleId) > -1
      ).map((a) => a.roleName).join(","), d = u.join(","), h = {
        menuId: t,
        prjId: e,
        cmPrjId: s,
        roleIds: d,
        roleNames: m
      };
      return this.menuRoleNamesLst.push(h), m;
    },
    delRoleNamesByMenuIdBak(t) {
      if (t == "" || t == null)
        return !0;
      let s = this.menuRoleNamesLst.findIndex((e) => e.menuId === t);
      if (this.menuRoleNamesLst = this.menuRoleNamesLst.filter(
        (e) => e.menuId !== t
      ), s > -1)
        console.log(`菜单Id:${t}在菜单角色名's列表中已经移除！`);
      else
        return console.error(`菜单Id:${t}在菜单角色名's列表中不存在！`), !1;
      return s = this.qxRoleMenusLst.findIndex((e) => e.menuId === t), this.qxRoleMenusLst = this.qxRoleMenusLst.filter((e) => e.menuId !== t), s > -1 ? (console.log(`菜单Id:${t}在角色菜单列表中已经移除！`), !0) : (console.error(`菜单Id:${t}在角色菜单列表中不存在！`), !1);
    },
    async getRoleNames(t, s, e) {
      if (t == "" || t == null || s == "" || s == null)
        return "";
      const r = this.menuRoleNamesLst.find(
        (a) => a.menuId === t && a.cmPrjId === s
      );
      if (r != null)
        return r.roleNames;
      let n = this.qxRoleMenusLst.filter(
        (a) => a.menuId === t && a.cmPrjId === s
      );
      if (n.length == 0) {
        let a = await q(t, e);
        if (a.length == 0) {
          const f = {
            menuId: t,
            prjId: "",
            cmPrjId: s,
            roleIds: "",
            roleNames: ""
          };
          return this.menuRoleNamesLst.push(f), "";
        }
        n = a.filter((f) => f.cmPrjId == s).map(y), n.forEach((f) => {
          this.qxRoleMenusLst.push(f);
        });
      }
      const u = n.map((a) => a.roleId), m = (await Q(e)).filter(
        (a) => u.indexOf(a.roleId) > -1
      ).map((a) => a.roleName).join(","), d = u.join(","), h = {
        menuId: t,
        prjId: e,
        cmPrjId: s,
        roleIds: d,
        roleNames: m
      };
      return this.menuRoleNamesLst.push(h), m;
    },
    async getRefreshMenuId(t) {
      if (t == "" || t == null)
        return !1;
      let s = await hs(t);
      return s.length == 0 ? !1 : (s.map(y).forEach((r) => {
        this.qxRoleMenusLst.push(r);
      }), !0);
    },
    async getRoleNamesWithDelButton(t, s, e) {
      if (t == "" || t == null || e == "" || e == null)
        return "";
      const r = this.menuRoleNamesLst.find(
        (a) => a.menuId === t && a.prjId === e
      );
      if (r != null)
        return r.roleNames;
      let n = this.qxRoleMenusLst.filter(
        (a) => a.menuId === t && a.qxPrjId === e
      );
      if (n.length == 0) {
        let a = await q(t, e);
        if (a.length == 0) {
          const f = {
            menuId: t,
            prjId: e,
            cmPrjId: s,
            roleIds: "",
            roleNames: ""
          };
          return this.menuRoleNamesLst.push(f), "";
        }
        n = a.filter((f) => f.cmPrjId == s).map(y), n.forEach((f) => {
          this.qxRoleMenusLst.push(f);
        });
      }
      const u = n.map((a) => a.roleId), m = (await Q(e)).filter(
        (a) => u.indexOf(a.roleId) > -1
      ).map((a) => a.roleName).join(","), d = u.join(","), h = {
        menuId: t,
        prjId: e,
        cmPrjId: s,
        roleIds: d,
        roleNames: m
      };
      return this.menuRoleNamesLst.push(h), m;
    },
    delMenuId(t, s) {
      if (t == null || t == "")
        return !0;
      const e = this.menuRoleNamesLst.findIndex((r) => r.menuId === t);
      return this.menuRoleNamesLst = this.menuRoleNamesLst.filter(
        (r) => r.menuId !== t
      ), this.qxRoleMenusLst = this.qxRoleMenusLst.filter((r) => r.menuId !== t), e > -1 ? (console.log(`菜单Id:${t}在菜单角色关系列表中已经移除！`), !0) : (console.error(`菜单Id:${t}在菜单角色关系列表中不存在！`), !1);
    },
    async getRoleIds(t, s, e) {
      if (t == "")
        return [];
      if (t == null)
        return [];
      if (e == "")
        return [];
      if (e == null)
        return [];
      let r = this.qxRoleMenusLst.filter(
        (h) => h.menuId === t && h.menuSetId === s
      );
      if (r.length == 0) {
        let h = await q(t, e);
        if (h.length == 0) {
          const a = {
            menuId: t,
            prjId: e,
            cmPrjId: "",
            roleIds: "",
            roleNames: ""
          };
          return this.menuRoleNamesLst.push(a), [];
        }
        r = h.filter((a) => a.menuSetId === s && a.menuId == t).map(y), r.forEach((a) => {
          this.qxRoleMenusLst.push(a);
        });
      }
      const n = r.map((h) => h.roleId), c = (await Q(e)).filter(
        (h) => n.indexOf(h.roleId) > -1
      ).map((h) => h.roleName).join(","), m = n.join(","), d = {
        menuId: t,
        prjId: e,
        cmPrjId: "",
        roleIds: m,
        roleNames: c
      };
      return this.menuRoleNamesLst.push(d), n;
    },
    async getRoleIdCmPrjIdMenuSetIds(t, s) {
      if (t == "")
        return [];
      if (t == null)
        return [];
      if (s == "")
        return [];
      if (s == null)
        return [];
      let e = this.qxRoleMenusLst.filter((n) => n.menuId === t);
      if (e.length == 0) {
        let n = await q(t, s);
        if (n.length == 0) {
          const u = {
            menuId: t,
            prjId: s,
            cmPrjId: "",
            roleIds: "",
            roleNames: ""
          };
          return this.menuRoleNamesLst.push(u), [];
        }
        n = n.sort(ps), e = n.filter((u) => u.menuId == t).map(y), e.forEach((u) => {
          this.qxRoleMenusLst.push(u);
        });
      }
      return e.map(
        (n) => `${n.roleId}|${n.cmPrjId}|${n.menuSetId}`
      );
    },
    async getRoleIdsByCmPrjId(t, s, e, r) {
      if (t == "")
        return [];
      if (t == null)
        return [];
      if (r == "")
        return [];
      if (r == null)
        return [];
      let n = this.qxRoleMenusLst.filter(
        (a) => a.menuId === t && a.menuSetId === s && a.cmPrjId === e
      );
      if (n.length == 0) {
        let a = await q(t, r);
        if (a.length == 0) {
          const f = {
            menuId: t,
            prjId: r,
            cmPrjId: e,
            roleIds: "",
            roleNames: ""
          };
          return this.menuRoleNamesLst.push(f), [];
        }
        n = a.filter(
          (f) => f.menuSetId === s && f.menuId == t && f.cmPrjId == e
        ).map(y), n.forEach((f) => {
          this.qxRoleMenusLst.push(f);
        });
      }
      const u = n.map((a) => a.roleId), m = (await Q(r)).filter(
        (a) => u.indexOf(a.roleId) > -1
      ).map((a) => a.roleName).join(","), d = u.join(","), h = {
        menuId: t,
        prjId: r,
        cmPrjId: e,
        roleIds: d,
        roleNames: m
      };
      return this.menuRoleNamesLst.push(h), u;
    },
    async getMenuIdsByCmPrjId(t) {
      if (t == "")
        return [];
      if (t == null)
        return [];
      const s = this.qxRoleMenusLst.filter((n) => n.cmPrjId === t);
      if (s.length > 0)
        return s.map((u) => u.menuId);
      let e = await z(t);
      if (e.length == 0)
        return [];
      for (const n of e) {
        const u = y(n);
        this.qxRoleMenusLst.push(u);
      }
      return e.map((n) => n.menuId);
    },
    async getMenuNamesByCmPrjId(t, s, e) {
      if (e == "")
        return [];
      if (e == null)
        return [];
      const r = Ce(), n = this.qxRoleMenusLst.filter(
        (c) => c.cmPrjId === e && c.roleId == t && c.menuSetId == s
      );
      if (n.length > 0) {
        const c = n.map((d) => d.menuId), m = [];
        for (const d of c) {
          const h = await r.getMenuName(d);
          m.push(h);
        }
        return m;
      }
      let u = await z(e);
      if (u.length == 0)
        return [];
      for (const c of u) {
        const m = y(c);
        this.qxRoleMenusLst.push(m);
      }
      const i = u.filter((c) => c.roleId == t && c.menuSetId == s).map((c) => c.menuId), l = [];
      for (const c of i) {
        const m = await r.getMenuName(c);
        l.push(m);
      }
      return l;
    },
    async getUpMenuNamesByCmPrjId(t, s, e) {
      if (e == "")
        return [];
      if (e == null)
        return [];
      const r = Ce(), n = this.qxRoleMenusLst.filter(
        (c) => c.cmPrjId === e && c.roleId == t && c.menuSetId == s
      );
      if (n.length > 0) {
        const c = n.map((d) => d.menuId), m = [];
        for (const d of c) {
          const h = await r.getMenuName(d);
          m.push(h);
        }
        return m;
      }
      let u = await z(e);
      if (u.length == 0)
        return [];
      for (const c of u) {
        const m = y(c);
        this.qxRoleMenusLst.push(m);
      }
      const i = u.filter((c) => c.roleId == t && c.menuSetId == s).map((c) => c.menuId), l = [];
      for (const c of i) {
        const m = await r.getObj(c);
        m != null && m.upMenuId == "00000000" && l.push(m.menuName);
      }
      return l;
    },
    async getMenuIdsByMenuSetId(t) {
      if (t == "")
        return [];
      if (t == null)
        return [];
      const s = this.qxRoleMenusLst.filter((n) => n.menuSetId == t);
      if (s.length > 0) {
        const n = s.map((u) => u.menuId);
        return G(n);
      }
      let e = await Se(t);
      if (e.length == 0)
        return [];
      for (const n of e) {
        const u = y(n);
        this.qxRoleMenusLst.push(u);
      }
      const r = e.map((n) => n.menuId);
      return G(r);
    },
    async getMenuIdsByMenuSetIds(t) {
      if (t.length == 0)
        return [];
      if (t == null)
        return [];
      const s = this.qxRoleMenusLst.filter(
        (r) => t.indexOf(r.menuSetId) > -1
      );
      if (s.length > 0) {
        const r = s.map((n) => n.menuId);
        return G(r);
      }
      let e = [];
      for (const r of t) {
        let n = await Se(r);
        if (n.length == 0)
          return [];
        for (const i of n) {
          const l = y(i);
          this.qxRoleMenusLst.push(l);
        }
        const u = n.map((i) => i.menuId);
        for (const i of u)
          e.push(i);
      }
      return G(e);
    },
    async getMenuIdsByRoleId(t, s, e) {
      if (e == "")
        return [];
      if (e == null)
        return [];
      const r = this.qxRoleMenusLst.filter(
        (i) => i.cmPrjId === e && i.menuSetId == s && i.roleId == t
      );
      if (r.length > 0)
        return r.map((l) => l.menuId);
      let n = await z(e);
      if (n.length == 0)
        return [];
      if (n = n.filter((i) => i.menuSetId == s), n.length == 0)
        return [];
      if (n = n.filter((i) => i.roleId == t), n.length == 0)
        return [];
      for (const i of n) {
        const l = y(i);
        this.qxRoleMenusLst.push(l);
      }
      return n.map((i) => i.menuId);
    },
    delMenuIdsByRoleId(t) {
      if (t == "" || t == null)
        return !0;
      const s = this.qxRoleMenusLst.findIndex((e) => e.roleId != t);
      return this.qxRoleMenusLst = this.qxRoleMenusLst.filter((e) => e.roleId != t), s > -1 ? (console.log(`角色Id:${t}在角色名列表中已经移除！`), !0) : (console.error(`角色Id:${t}在角色名列表中不存在！`), !1);
    },
    async getObjLst(t, s) {
      if (t == "" || t == null || s == "" || s == null)
        return null;
      let e = this.qxRoleMenusLst.filter(
        (r) => r.menuId === t && r.qxPrjId === s
      );
      if (e.length == 0) {
        let r = await q(t, s);
        if (r.length == 0)
          return null;
        e = r.map(y), e.forEach((n) => {
          this.qxRoleMenusLst.push(n);
        });
      }
      return e;
    }
  }
}), Is = M("Asc"), Cs = M("");
J({
  ascOrDesc4SortFun: Is,
  sortge_UserCreditsLogBy: Cs
});
M("");
M("");
const V = M(), gs = M(), Ss = M(), js = M(), _s = M(), Ms = M(), Rs = M(), bs = M(), ys = M();
J({
  refDivLayout: V,
  refDivQuery: gs,
  refDivFunction: Ss,
  refDivList: js,
  refDivEdit: _s,
  refDivDetail: Ms,
  refge_UserCreditsLog_Detail: Rs,
  refge_UserCreditsLog_Edit: bs,
  refge_UserCreditsLog_List: ys
});
M(!1);
M("");
const Ps = M("");
J({
  masterLevelId_q_Cls: Ps
});
J({});
const Ns = rs({
  name: "SIndexIframe",
  components: {
    // 组件注册
    //   Paper_QUDI,
    //   Paper_List,
    //   SysScoreSummaryNewTotal,
    PageHeadCom: pt
  },
  props: {
    page: {
      type: String,
      required: !1
    }
  },
  setup(t) {
    const s = B(), e = fs(), r = ft(), n = M("游戏化学习-后台管理"), u = M(""), i = p(It), l = p(Ct), c = p(gt), m = p(St), d = p(jt), h = p(_t), a = p(Mt), f = p(Rt), ue = p(bt), Pe = p(yt), Ne = p(Pt), xe = p(Nt), Ue = p(xt), we = p(Ut), Le = p(wt), $e = p(Lt), ve = p($t), De = p(vt), le = p(Dt);
    p(Tt), p(qt);
    const Te = p(Et), qe = p(Ft), Ee = p(Ot), Fe = p(kt), Oe = p(Qt), ke = p(At), Qe = p(Bt), ce = p(Gt), Ae = p(Wt), Be = p(Kt), Ge = p(zt), We = p(Vt), Ke = p(Xt), ze = p(Jt), Ve = p(Ht), F = M([
      {
        name: "专业方向",
        active: !1,
        items: [
          {
            name: "用户专业方向维护",
            title: "",
            active: !1,
            component: De,
            paras: ""
          }
        ]
      },
      {
        name: "用户管理",
        active: !1,
        items: [
          { name: "学生维护", title: "", active: !1, component: Te, paras: "" },
          {
            name: "学生维护Zx",
            title: "",
            active: !1,
            component: qe,
            paras: ""
          },
          { name: "教师维护", title: "", active: !1, component: Ee, paras: "" }
          // { name: '用户维护', title: '', active: false, component: UsersCRUD, paras: '' },
          // <a @click="xadmin.add_tab('用户维护','../UserManage/Users_QUDI')">
        ]
      },
      {
        name: "个人中心",
        active: !1,
        items: [
          {
            name: "知识点逻辑图",
            title: "",
            active: !1,
            component: le,
            paras: ""
          },
          // <a  @click="xadmin.add_tab('知识点逻辑图', '../Knowledges/gs_KnowledgesGraphCRUD')"
          // { name: '结构思维图', title: '', active: false, component: StructureChart, paras: '' },
          // <a @click="xadmin.add_tab('结构思维图', '../Knowledges/StructureChart')">
          // <a onclick="xadmin.add_tab('结构章节维护(旧)', '../Knowledges/ge_StructureSectionCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>结构章节维护(旧)</cite>
          // </a>
          {
            name: "结构章节维护(旧)",
            title: "",
            active: !1,
            component: i,
            paras: ""
          },
          // <a onclick="xadmin.add_tab('结构图谱维护(旧)', '../Knowledges/ge_StructureGraphCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>结构图谱维护(旧)</cite>
          // </a>
          {
            name: "结构图谱维护(旧)",
            title: "",
            active: !1,
            component: l,
            paras: ""
          },
          // <a onclick="xadmin.add_tab('章节结构维护', '../Knowledges/StructureSection')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>章节结构维护</cite>
          // </a>
          {
            name: "章节结构维护",
            title: "",
            active: !1,
            component: c,
            paras: ""
          },
          {
            name: "章节结构分类",
            title: "",
            active: !1,
            component: m,
            paras: ""
          },
          // <a onclick="xadmin.add_tab('知识结构图', '../Knowledges/StructureChart')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>结构思维图</cite>
          // </a>
          { name: "知识结构图", title: "", active: !1, component: d, paras: "" }
        ]
      },
      {
        name: "教学班课程",
        active: !1,
        items: [
          { name: "专业", title: "", active: !1, component: Qe, paras: "" },
          // <a @click="xadmin.add_tab('专业', '../BaseInfo/XzMajorCRUD')">
          { name: "课程", title: "", active: !1, component: ce, paras: "" },
          // <a @click="xadmin.add_tab('课程', '../CourseLearning_Share/cc_CourseCRUD')">
          { name: "教学班", title: "", active: !1, component: Ae, paras: "" },
          // <a @click="xadmin.add_tab('教学班', '../DailyRunning/CurrEduClsCRUD')">
          {
            name: "教学班学生",
            title: "",
            active: !1,
            component: Be,
            paras: ""
          },
          // <a @click="xadmin.add_tab('教学班学生', '../DailyRunning/CurrEduClsStuCRUD')">
          {
            name: "教学班教师",
            title: "",
            active: !1,
            component: Ge,
            paras: ""
          },
          // <a  @click="xadmin.add_tab('教学班老师', '../DailyRunning/CurrEduClsTeacherCRUD')"
          {
            name: "教学班日期",
            title: "",
            active: !1,
            component: We,
            paras: ""
          }
          // <a @click="xadmin.add_tab('教学班日期', '../GradEduTools/gs_TeachingDateCRUD')">
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
          { name: "缓存配置", title: "", active: !1, component: Ke, paras: "" },
          { name: "学校维护", title: "", active: !1, component: ze, paras: "" }
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
      },
      {
        name: "知识点相关",
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
          // <a onclick="xadmin.add_tab('知识点', '../Knowledges_Share/cc_CourseKnowledgesCRUD')">
          //                   <i class="iconfont">&#xe6a7;</i>
          //                   <cite>知识点</cite>
          //               </a>
          {
            name: "知识点模块",
            title: "",
            active: !1,
            component: ke,
            paras: ""
          },
          {
            name: "知识点",
            title: "",
            active: !1,
            component: Fe,
            paras: ""
          },
          {
            name: "知识点权重设置",
            title: "",
            active: !1,
            component: Oe,
            paras: ""
          },
          {
            name: "知识点逻辑",
            title: "",
            active: !1,
            component: h,
            paras: ""
          },
          // <a onclick="xadmin.add_tab('知识点逻辑图', '../Knowledges/gs_KnowledgesGraphCRUD')">
          //                     <i class="iconfont">&#xe6a7;</i>
          //                     <cite>知识点逻辑图</cite>
          //                 </a>
          {
            name: "知识点逻辑图",
            title: "",
            active: !1,
            component: le,
            paras: ""
          },
          //     <a onclick="xadmin.add_tab('知识点习题', '../Knowledges/cc_KnowledgesExamLibRelaCRUD')">
          //                         <i class="iconfont">&#xe6a7;</i>
          //                         <cite>知识点习题</cite>
          // < /a>
          // {
          //   name: '知识点习题',
          //   title: '',
          //   active: false,
          //   component: cc_KnowledgesExamLibRelaCRUD,
          //   paras: 'isDialog=false',
          // },
          // <a onclick="xadmin.add_tab('知识点逻辑关系', '../Knowledges/gs_KnowledgesLogicRelaCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>知识点逻辑关系</cite>
          // </a>
          {
            name: "知识点逻辑关系",
            title: "",
            active: !1,
            component: a,
            paras: ""
          },
          // <a onclick="xadmin.add_tab('知识点关系类型', '../Knowledges_Share/gs_RelaTypeCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>知识点关系类型</cite>
          // </a>
          {
            name: "知识点关系类型",
            title: "",
            active: !1,
            component: f,
            paras: ""
          },
          // <a onclick="xadmin.add_tab('知识点掌握度', '../Knowledges/KnowledgeMasterLevelCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>知识点掌握度</cite>
          // </a>
          {
            name: "知识点掌握度",
            title: "",
            active: !1,
            component: Pe,
            paras: ""
          },
          // <a onclick="xadmin.add_tab('知识点类别', '../Knowledges_Share/KnowledgeTypeCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>知识点类别</cite>
          // </a>
          {
            name: "知识点类别",
            title: "",
            active: !1,
            component: Le,
            paras: ""
          },
          // <a onclick="xadmin.add_tab('学习模式', '../CourseLearning/LearnModeCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>学习模式</cite>
          // </a>
          { name: "学习模式", title: "", active: !1, component: $e, paras: "" }
        ]
      },
      {
        name: "试卷习题管理",
        active: !1,
        items: [
          // <a onclick="xadmin.add_tab('考卷维护', '../Knowledges/cc_CourseExamPaperCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>考卷维护</cite>
          // </a>
          {
            name: "考卷维护",
            title: "",
            active: !1,
            component: ve,
            paras: ""
          }
          // <a onclick="xadmin.add_tab('学生批次题目关系', '../InteractManage/ge_StuBatchQuesRelaCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>学生批次题目关系</cite>
          // </a>
        ]
      },
      {
        name: "题库管理",
        active: !1,
        items: [
          // <a title="可以查看当前教学班内的所有题目" onclick="xadmin.add_tab('题目', '../QuestionaireEdit/QuestionnaireCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>题目</cite>
          // </a>
        ]
      },
      {
        name: "课程相关管理",
        active: !1,
        items: [
          // <a onclick="xadmin.add_tab('课程维护', '../CourseLearning/cc_CourseCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>课程维护</cite>
          // </a>
          { name: "课程维护", title: "", active: !1, component: ce, paras: "" },
          // <a onclick="xadmin.add_tab('章节', '../Knowledges_Share/cc_CourseChapterCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>章节</cite>
          // </a>
          { name: "章节", title: "", active: !1, component: ue, paras: "" },
          // <a onclick="xadmin.add_tab('课程学习案例', '../CourseLearning/CourseLearningCaseCRUD')" >
          //                     <i class="iconfont">&#xe6a7;</i>
          //                     <cite>课程学习案例</cite>
          //                 </a>
          // <a onclick="xadmin.add_tab('课程学生关系', '../CourseManage/cc_CourseStudentRelationCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>课程学生关系</cite>
          // </a>
          {
            name: "课程学生关系",
            title: "",
            active: !1,
            component: we,
            paras: ""
          },
          // <a onclick="xadmin.add_tab('课程教师关系', '../CourseManage/cc_CourseTeacherRelationCRUD')">
          //     <i class="iconfont">&#xe6a7;</i>
          //     <cite>课程教师关系</cite>
          // </a>
          {
            name: "课程教师关系",
            title: "",
            active: !1,
            component: Ue,
            paras: ""
          }
        ]
      },
      {
        name: "编码代码检查",
        active: !1,
        items: [
          {
            name: "测试上传Excel",
            title: "",
            active: !1,
            component: Ne,
            paras: ""
          },
          {
            name: "测试上传Excel4Ques",
            title: "",
            active: !1,
            component: xe,
            paras: ""
          }
        ]
      }
    ]), U = M([
      {
        label: "欢迎",
        name: "Welcome",
        component: Ve,
        paras: ""
      }
    ]), L = M(""), Z = M(""), Xe = (_, g) => {
      if (U.value.find((P) => P.name === g))
        Z.value = L.value, L.value = g;
      else {
        const P = F.value.find((O) => O.name === _);
        if (P) {
          const O = P.items.find(
            (at) => at.name === g
          );
          O && (U.value.push({
            label: g,
            name: g,
            component: O.component,
            paras: O.paras
          }), Z.value = L.value, L.value = g), Ye(O);
        }
      }
      setTimeout(() => {
        de(g);
      }, 500);
    }, de = (_) => {
      for (let g = 0; g < U.value.length; g++)
        if (U.value[g].name == _) {
          const w = V.value, P = Yt(w, `tab-${g}`);
          P && P.click();
        }
    }, Je = (_, g) => {
      if (U.value.find((P) => P.name === g)) {
        let P = U.value.indexOf(g);
        P !== -1 && U.value.splice(P, 1), L.value = Z.value;
      }
      me(L.value), setTimeout(() => {
        de(g);
      }, 100);
    }, He = (_) => {
      var w;
      let g = U.value.indexOf(_);
      U.value.splice(g, 1), L.value === ((w = U.value[g]) == null ? void 0 : w.name) && (L.value = "");
    }, Ze = M(0), me = (_) => {
      F.value.forEach((g) => {
        g !== _ && (g.active = !1);
      }), _.active = !_.active;
    }, Ye = (_) => {
      F.value.forEach((g) => {
        g.items.forEach((w) => {
          w !== _ && (w.active = !1);
        });
      }), _.active = !_.active;
    };
    function et() {
      window.open("/#/CacheUseStateCRUD", "_blank");
    }
    ns(async () => {
      typeof r.query.menuSetId == "string" && (u.value = r.query.menuSetId);
      let _;
      switch (u.value) {
        case "0018":
          n.value = "研究生论文阅读系统-个人中心";
          break;
        case "0025":
          n.value = "游戏化教育平台-后台管理";
          break;
        case "0026":
          n.value = "游戏化教育平台-个人中心";
          break;
        default:
          _ = `菜单集Id:${u.value} 在函数中没有被处理!`, console.error(_), alert(_);
          break;
      }
      const g = s.roleId, w = await e.getMenuNamesByCmPrjId(
        g,
        u.value,
        Zt.cmPrjId
      );
      F.value = F.value.filter((P) => w.indexOf(P.name) > -1), ne.GetPropValue = tt, ne.divLayout = V.value, rt();
    });
    function tt(_) {
      switch (_) {
        case "menuSetId":
          return u.value;
        default:
          return "";
      }
    }
    function st() {
      localStorage.removeItem("hid"), es(".layui-tab-title li[lay-id]").find(".layui-tab-close").click();
    }
    function rt() {
      st();
    }
    function nt() {
      new ne().Bind_QuestionsCount();
    }
    function ot(_, g) {
      switch (console.log(g), _) {
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
          ts.push("/about"), console.log("router.push('/about');");
          break;
      }
    }
    return {
      refDivLayout: V,
      tabs: U,
      activeTab: Ze,
      btn_Click: ot,
      toggleActive: me,
      menu: F,
      addTab: Xe,
      removeTab: Je,
      currentTab: L,
      closeTab: He,
      Bind_QuestionsCount1: nt,
      menuSetId: u,
      strTitle: n,
      showUserCacheStatus: et
    };
  }
});
const xs = {
  id: "divLayout",
  ref: "refDivLayout",
  class: "app-container"
}, Us = { class: "main-content" }, ws = { class: "sidebar" }, Ls = { class: "container-fluid" }, $s = { class: "nav flex-column" }, vs = ["onClick"], Ds = {
  key: 0,
  class: "nav flex-column ml-1"
}, Ts = ["onClick"], qs = { class: "content" }, Es = {
  class: "layui-tab tab",
  "lay-filter": "xbs_tab",
  "lay-allowclose": "false"
}, Fs = { class: "layui-tab-title" }, Os = { class: "home" }, ks = { class: "mr-2" }, Qs = ["onClick"];
function As(t, s, e, r, n, u) {
  const i = W("PageHeadCom"), l = W("font-awesome-icon"), c = W("el-tab-pane"), m = W("el-tabs");
  return v(), T("div", xs, [
    S("header", null, [
      K(i, {
        ref: "PageHeadRef",
        title: t.strTitle,
        isShowEduCls: "true",
        "header-height": "60px",
        "is-show-paper-iframe": "false",
        "is-show-topic": "false",
        "is-show-search": "false",
        "is-show-major": "true",
        "is-show-user-cache": "true",
        "is-show-attention": "true",
        "paper-id": "",
        onShowUserCacheStatus: t.showUserCacheStatus
      }, null, 8, ["title", "onShowUserCacheStatus"])
    ]),
    S("div", Us, [
      S("aside", ws, [
        s[1] || (s[1] = S("nav", { class: "navbar navbar-light bg-light" }, [
          S("div", { class: "container-fluid" }, [
            S("a", {
              class: "navbar-brand",
              href: "javascript:void(0)"
            }, "游戏化学习平台")
          ])
        ], -1)),
        S("div", Ls, [
          S("ul", $s, [
            (v(!0), T(ee, null, te(t.menu, (d, h) => (v(), T("li", {
              class: "nav-item",
              key: h
            }, [
              S("a", {
                class: pe(["nav-link module-name", { active: d.active }]),
                href: "javascript:void",
                onClick: (a) => t.toggleActive(d)
              }, se(d.name), 11, vs),
              d.active ? (v(), T("ul", Ds, [
                (v(!0), T(ee, null, te(d.items, (a, f) => (v(), T("li", {
                  class: "nav-item",
                  key: f
                }, [
                  S("a", {
                    class: pe(["nav-link item-name", { item_active: a.active }]),
                    href: "javascript:void",
                    onClick: (ue) => t.addTab(d.name, a.name)
                  }, se(a.name), 11, Ts)
                ]))), 128))
              ])) : os("", !0)
            ]))), 128))
          ])
        ])
      ]),
      S("main", qs, [
        S("div", Es, [
          S("ul", Fs, [
            S("li", Os, [
              K(l, { icon: "fa-regular fa-heart" }),
              s[2] || (s[2] = as("我的桌面0 "))
            ])
          ]),
          s[4] || (s[4] = S("div", {
            id: "tab_right",
            class: "layui-unselect layui-form-select layui-form-selected"
          }, [
            S("dl", null, [
              S("dd", { "data-type": "this" }, "关闭当前"),
              S("dd", { "data-type": "other" }, "关闭其它"),
              S("dd", { "data-type": "all" }, "关闭全部")
            ])
          ], -1)),
          K(m, {
            modelValue: t.currentTab,
            "onUpdate:modelValue": s[0] || (s[0] = (d) => t.currentTab = d)
          }, {
            default: re(() => [
              (v(!0), T(ee, null, te(t.tabs, (d) => (v(), fe(c, {
                key: d.name
              }, {
                label: re(() => [
                  S("span", ks, se(d.label), 1),
                  s[3] || (s[3] = S("span", null, "  ", -1)),
                  S("a", {
                    href: "javascript:void(0)",
                    class: "ml-2",
                    title: "移除该页面",
                    onClick: (h) => t.closeTab(d)
                  }, [
                    K(l, {
                      icon: "times",
                      style: { color: "rgb(164, 207, 247)" }
                    })
                  ], 8, Qs)
                ]),
                default: re(() => [
                  (v(), fe(is(d.component), {
                    paras: d.paras
                  }, null, 8, ["paras"]))
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"]),
          s[5] || (s[5] = S("div", { id: "tab_show" }, null, -1))
        ])
      ]),
      s[6] || (s[6] = S("div", { class: "page-content-bg" }, null, -1))
    ]),
    s[7] || (s[7] = S("input", {
      id: "hidPage",
      type: "hidden"
    }, null, -1))
  ], 512);
}
const Ks = /* @__PURE__ */ ss(Ns, [["render", As], ["__scopeId", "data-v-ac6e65b0"]]);
export {
  Ks as default
};
