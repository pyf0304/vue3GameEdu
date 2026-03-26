var It = Object.defineProperty;
var wt = (t, e, o) => e in t ? It(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var d = (t, e, o) => (wt(t, typeof e != "symbol" ? e + "" : e, o), o);
import { I as h, F as c, az as w, aA as X, aB as pt, G as F, h as k, i as M, j as $, aC as yt, aD as Re, O as ue, g as bt, aE as D, aF as N, aG as Qe, aH as J, d as ee, N as Ge, aI as _t, aJ as Fe, aK as qe, aL as se, aM as Ct, aN as Lt, aO as C, aP as ye, aQ as Tt, aR as We, aS as ke, aT as Me, aU as vt, aV as Dt, aW as Nt, aX as be, v as $e, aY as xt, aZ as Ft, a_ as oe, $ as kt, m as Mt, a$ as $t, b0 as Pt, u as Bt, _ as de, r as Ut } from "./index-b2b0ebb3.mjs";
import { ref as g, reactive as he, defineComponent as me, resolveComponent as R, openBlock as O, createBlock as je, withCtx as x, createElementVNode as l, toDisplayString as H, createVNode as A, createTextVNode as E, withDirectives as W, createElementBlock as q, Fragment as Ve, renderList as He, vModelSelect as Ot, vModelText as Z, vModelCheckbox as Pe, normalizeClass as z, onMounted as Kt } from "vue";
const ze = "vQuestionnaire_SimApi", Q = "vQuestionnaire_Sim";
async function At(t) {
  const e = "GetObjByQuestionIdAsync";
  if (t == 0) {
    const a = c("参数:[lngQuestionId]不能为空!(In clsvQuestionnaire_SimWApi.GetObjByQuestionIdAsync)");
    throw console.error(a), a;
  }
  const r = F(ze, "GetObjByQuestionId"), n = {
    headers: {
      Authorization: `${k.get(M)}`
    },
    params: {
      lngQuestionId: t
    }
  };
  try {
    const i = (await $.get(r, n)).data;
    if (i.errorId == 0) {
      const u = i.returnObj;
      return u == null ? null : Ye(u);
    } else
      throw console.error(i.errorMsg), i.errorMsg;
  } catch (a) {
    if (console.error(a), a.statusText == null)
      throw a;
    if (a.statusText == "error") {
      const i = c("网络错误!访问地址:{0}不成功!(in {1}.{2})", r, Q, e);
      throw console.error(i), i;
    } else if (a.statusText == "Not Found") {
      const i = c("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", r, Q, e);
      throw console.error(i), i;
    } else
      throw a.statusText;
  }
}
async function Et(t, e, o = !0) {
  const r = "GetObjByQuestionIdCache";
  if (t == 0) {
    const n = c("参数:[lngQuestionId]不能为空!(In clsvQuestionnaire_SimWApi.GetObjByQuestionIdCache)");
    throw console.error(n), n;
  }
  const s = await Je(e);
  try {
    const n = s.filter((i) => i.questionId == t);
    let a;
    if (n.length > 0)
      return a = n[0], a;
    if (o == !0) {
      const i = await At(t);
      if (i != null)
        return qt(e), i;
    }
    return null;
  } catch (n) {
    const a = c(`错误:[{0}]. 
根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})`, n, t, Q, r);
    console.error(a);
  }
  return null;
}
async function Rt(t, e, o, r) {
  if (h(r) == !0) {
    const a = c("参数:[strCourseIdClassfy]不能为空!(In clsvQuestionnaire_SimWApi.func)");
    throw console.error(a), a;
  }
  if (r.length != 8) {
    const a = c("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvQuestionnaire_SimWApi.func)", r.length);
    throw console.error(a), a;
  }
  if (t != w.con_QuestionId) {
    const a = c("输入字段名:[{0}]不正确!", t);
    throw console.error(a), new Error(a);
  }
  if (w.AttributeName.indexOf(e) == -1) {
    const a = c(
      "输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
      e,
      w.AttributeName.join(",")
    );
    throw console.error(a), new Error(a);
  }
  const s = Number(o);
  if (s == 0)
    return "";
  const n = await Et(s, r);
  return n == null || n.GetFldValue(e) == null ? "" : n.GetFldValue(e).toString();
}
async function Be(t) {
  const e = "GetObjLstClientCache";
  let o = "1=1";
  h(w.WhereFormat) == !1 ? o = c(w.WhereFormat, t) : o = c("CourseId='{0}'", t);
  const r = c("{0}_{1}", w._CurrTabName, t);
  if (h(w.CacheAddiCondition) == !1 && (o += c(" and {0}", w.CacheAddiCondition)), r == "")
    throw console.error("关键字为空!不正确"), new Error("关键字为空!不正确");
  if (X.Exsits(r)) {
    const s = X.Get(r);
    return ge(s);
  }
  try {
    const s = await ve(o);
    X.Add(r, s);
    const n = c("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", r, s.length);
    return console.log(n), s;
  } catch (s) {
    const n = c(`从本地缓存中获取所有对象列表出错. 
服务器错误：{0}.(in {1}.{2})`, s, Q, e);
    throw console.error(n), n;
  }
}
async function Qt(t) {
  const e = "GetObjLstlocalStorage";
  let o = "1=1";
  h(w.WhereFormat) == !1 ? o = c(w.WhereFormat, t) : o = c("{0}='{1}'", w.con_CourseId, t);
  const r = c("{0}_{1}", w._CurrTabName, t);
  if (h(w.CacheAddiCondition) == !1 && (o += c(" and {0}", w.CacheAddiCondition)), r == "")
    throw console.error("关键字为空!不正确"), new Error("关键字为空!不正确");
  if (Object.prototype.hasOwnProperty.call(localStorage, r)) {
    const s = localStorage.getItem(r), n = JSON.parse(s);
    return ge(n);
  }
  try {
    const s = await ve(o), n = c("{0}_", w._CurrTabName);
    pt(n).forEach((u) => localStorage.removeItem(u)), localStorage.setItem(r, JSON.stringify(s));
    const i = c("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", r, s.length);
    return console.log(i), s;
  } catch (s) {
    const n = c(`从本地缓存中获取所有对象列表出错. 
服务器错误：{0}.(in {1}.{2})`, s, Q, e);
    throw console.error(n), n;
  }
}
async function ve(t) {
  const e = "GetObjLstAsync", r = F(ze, "GetObjLst"), n = {
    headers: {
      Authorization: `${k.get(M)}`
    },
    params: {
      strWhereCond: t
    }
  };
  try {
    const i = (await $.get(r, n)).data;
    if (i.errorId == 0) {
      const u = i.returnObjLst;
      if (u == null) {
        const b = c("获取数据为null, 请注意!(in {0}.{1})", Q, e);
        throw console.error(b), b;
      }
      return ge(u);
    } else
      throw console.error(i.errorMsg), i.errorMsg;
  } catch (a) {
    if (console.error(a), a.statusText == null)
      throw a;
    if (a.statusText == "error") {
      const i = c("网络错误!访问地址:{0}不成功!(in {1}.{2})", r, Q, e);
      throw console.error(i), i;
    } else if (a.statusText == "Not Found") {
      const i = c("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", r, Q, e);
      throw console.error(i), i;
    } else
      throw a.statusText;
  }
}
async function Gt(t) {
  const e = "GetObjLstsessionStorage";
  let o = "1=1";
  h(w.WhereFormat) == !1 ? o = c(w.WhereFormat, t) : o = c("{0}='{1}'", w.con_CourseId, t);
  const r = c("{0}_{1}", w._CurrTabName, t);
  if (h(w.CacheAddiCondition) == !1 && (o += c(" and {0}", w.CacheAddiCondition)), r == "")
    throw console.error("关键字为空!不正确"), new Error("关键字为空!不正确");
  if (Object.prototype.hasOwnProperty.call(sessionStorage, r)) {
    const s = sessionStorage.getItem(r), n = JSON.parse(s);
    return ge(n);
  }
  try {
    const s = await ve(o), n = c("{0}_", w._CurrTabName);
    yt(n).forEach((u) => sessionStorage.removeItem(u)), sessionStorage.setItem(r, JSON.stringify(s));
    const i = c("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", r, s.length);
    return console.log(i), s;
  } catch (s) {
    const n = c(`从缓存中获取所有对象列表出错. 
服务器错误：{0}.(in {1}.{2})`, s, Q, e);
    throw console.error(n), n;
  }
}
async function Je(t) {
  if (h(t) == !0) {
    const o = c("参数:[strCourseId]不能为空！(In clsvQuestionnaire_SimWApi.vQuestionnaire_Sim_GetObjLstCache)");
    throw console.error(o), o;
  }
  if (t.length != 8) {
    const o = c("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvQuestionnaire_SimWApi.vQuestionnaire_Sim_GetObjLstCache)", t.length);
    throw console.error(o), o;
  }
  let e;
  switch (w.CacheModeId) {
    case "04":
      e = await Gt(t);
      break;
    case "03":
      e = await Qt(t);
      break;
    case "02":
      e = await Be(t);
      break;
    default:
      e = await Be(t);
      break;
  }
  return e;
}
function qt(t) {
  if (h(t) == !0) {
    const e = c("参数:[strCourseId]不能为空!(In clsvQuestionnaire_SimWApi.vQuestionnaire_Sim_ReFreshThisCache)");
    throw console.error(e), e;
  }
  if (t.length != 8) {
    const e = c("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvQuestionnaire_SimWApi.vQuestionnaire_Sim_ReFreshThisCache)", t.length);
    throw console.error(e), e;
  }
  {
    const e = c("{0}_{1}", w._CurrTabName, t);
    switch (w.CacheModeId) {
      case "04":
        sessionStorage.removeItem(e);
        break;
      case "03":
        localStorage.removeItem(e);
        break;
      case "02":
        X.Remove(e);
        break;
      default:
        X.Remove(e);
        break;
    }
    w._RefreshTimeLst.push(Re.getTodayDateTimeStr(0));
    const o = c("刷新缓存成功!");
    console.trace(o);
  }
}
function ge(t) {
  const e = new Array();
  for (const o of t) {
    const r = Ye(o);
    r != null && e.push(r);
  }
  return e;
}
function Ye(t) {
  const e = new w();
  return ue(e, t), e;
}
const p = class p extends bt {
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
    d(this, "mlngQuestionId", 0);
    //题目Id
    d(this, "mstrIdStudentInfo", "");
    //学生流水号
    d(this, "mstrTeachingLog", "");
    //教学日志
    d(this, "mstrCourseId", "");
    //课程Id
    d(this, "mstrUpdDate", "");
    //修改日期
    d(this, "mstrUpdUserId", "");
    //修改用户Id
    d(this, "mstrMemo", "");
    /**
     * 设置对象中公共属性.
     * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
    */
    d(this, "questionId", 0);
    //题目Id
    d(this, "idStudentInfo", "");
    //学生流水号
    d(this, "teachingLog", "");
    //教学日志
    d(this, "courseId", "");
    //课程Id
    d(this, "updDate", "");
    //修改日期
    d(this, "updUserId", "");
    //修改用户Id
    d(this, "memo", "");
  }
  //备注
  /**
   * 题目Id(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetQuestionId(o) {
    o != null && (this.questionId = o, this.hmProperty.questionId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 学生流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIdStudentInfo(o) {
    o != null && (this.idStudentInfo = o, this.hmProperty.idStudentInfo = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 教学日志(说明:;字段类型:varchar;字段长度:5000;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetTeachingLog(o) {
    o != null && (this.teachingLog = o, this.hmProperty.teachingLog = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetCourseId(o) {
    o != null && (this.courseId = o, this.hmProperty.courseId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetUpdDate(o) {
    o != null && (this.updDate = o, this.hmProperty.updDate = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetUpdUserId(o) {
    o != null && (this.updUserId = o, this.hmProperty.updUserId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetMemo(o) {
    o != null && (this.memo = o, this.hmProperty.memo = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
  */
  GetFldValue(o) {
    let r = "";
    switch (o) {
      case p.con_QuestionId:
        return this.questionId;
      case p.con_IdStudentInfo:
        return this.idStudentInfo;
      case p.con_TeachingLog:
        return this.teachingLog;
      case p.con_CourseId:
        return this.courseId;
      case p.con_UpdDate:
        return this.updDate;
      case p.con_UpdUserId:
        return this.updUserId;
      case p.con_Memo:
        return this.memo;
      case "sfUpdFldSetStr":
        return this.sfUpdFldSetStr;
      case "sfFldComparisonOp":
        return this.sfFldComparisonOp;
      default:
        return r = `字段名:[${o}]在表对象:[cc_KnowledgeStuTeachLog]中不存在!`, console.error(r), "";
    }
  }
  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
  */
  SetFldValue(o, r) {
    const s = "SetFldValue";
    let n = "";
    switch (o) {
      case p.con_QuestionId:
        this.questionId = Number(r), this.hmProperty.questionId = !0;
        break;
      case p.con_IdStudentInfo:
        this.idStudentInfo = r, this.hmProperty.idStudentInfo = !0;
        break;
      case p.con_TeachingLog:
        this.teachingLog = r, this.hmProperty.teachingLog = !0;
        break;
      case p.con_CourseId:
        this.courseId = r, this.hmProperty.courseId = !0;
        break;
      case p.con_UpdDate:
        this.updDate = r, this.hmProperty.updDate = !0;
        break;
      case p.con_UpdUserId:
        this.updUserId = r, this.hmProperty.updUserId = !0;
        break;
      case p.con_Memo:
        this.memo = r, this.hmProperty.memo = !0;
        break;
      case "sfUpdFldSetStr":
        this.sfUpdFldSetStr = r;
        break;
      case "sfFldComparisonOp":
        this.sfFldComparisonOp = r;
        break;
      default:
        n = `字段名:[${o}]在表对象:[cc_KnowledgeStuTeachLog]中不存在!(in ${this.constructor.name}.${s})`, console.error(n);
        break;
    }
  }
  //备注
  /**
  * 常量:"QuestionId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_QuestionId() {
    return "questionId";
  }
  //题目Id
  /**
  * 常量:"IdStudentInfo"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IdStudentInfo() {
    return "idStudentInfo";
  }
  //学生流水号
  /**
  * 常量:"TeachingLog"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_TeachingLog() {
    return "teachingLog";
  }
  //教学日志
  /**
  * 常量:"CourseId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_CourseId() {
    return "courseId";
  }
  //课程Id
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
  SetCondFldValue(o, r, s) {
    this.SetFldValue(o, r), Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, o) == !1 ? this.dicFldComparisonOp[o] = s : this.dicFldComparisonOp[o] = s, this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
  /**
  * 判断一个字符串是否是类的属性
  * @param propName: 属性名
  * @returns 是否是属性
  */
  static hasProperty(o) {
    const r = new p();
    return Object.prototype.hasOwnProperty.call(r, o);
  }
};
d(p, "_RefreshTimeLst", new Array()), d(p, "CacheAddiCondition", ""), //缓存附加条件,作为向后台调取数据的附加条件
d(p, "CacheModeId", ""), //
d(p, "PrimaryTypeId", "07"), //复合主键
d(p, "IsUseDelSign", !1), //使用删除标志,记录不能删除,仅设置删除标志
d(p, "WhereFormat", ""), //条件格式串
d(p, "_CurrTabName", "cc_KnowledgeStuTeachLog"), //当前表名,与该类相关的表名
d(p, "_KeyFldName", "QuestionId,IdStudentInfo"), //当前表中的关键字名称,与该类相关的表中关键字名
d(p, "mintAttributeCount", 7), d(p, "AttributeName", ["questionId", "idStudentInfo", "teachingLog", "courseId", "updDate", "updUserId", "memo"]);
let f = p;
class S extends f {
  //以下是属性变量
  /**
   * 构造函数
   * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
   **/
  constructor() {
    super();
    //教学班流水号
    d(this, "courseName", "");
    //课程名称
    d(this, "stuId", "");
    //学号
    d(this, "stuName", "");
    //姓名
    d(this, "questionName", "");
    //题目名称
    d(this, "idCurrEduCls", "");
  }
  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
  */
  GetFldValue(o) {
    let r;
    switch (o) {
      case "CtrlId":
        return "";
      case S.con_CourseName:
        return this.courseName;
      case S.con_StuId:
        return this.stuId;
      case S.con_StuName:
        return this.stuName;
      case S.con_QuestionName:
        return this.questionName;
      case S.con_IdCurrEduCls:
        return this.idCurrEduCls;
      default:
        return r = super.GetFldValue(o), r;
    }
  }
  /**
  * 常量:"CourseName"
  * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
  */
  static get con_CourseName() {
    return "courseName";
  }
  //课程名称
  /**
  * 常量:"StuId"
  * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
  */
  static get con_StuId() {
    return "stuId";
  }
  //学号
  /**
  * 常量:"StuName"
  * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
  */
  static get con_StuName() {
    return "stuName";
  }
  //姓名
  /**
  * 常量:"QuestionName"
  * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
  */
  static get con_QuestionName() {
    return "questionName";
  }
  //题目名称
  /**
  * 常量:"IdCurrEduCls"
  * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
  */
  static get con_IdCurrEduCls() {
    return "idCurrEduCls";
  }
  //教学班流水号
  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
  */
  SetFldValue(o, r) {
    const s = "SetFldValue";
    let n = "";
    switch (o) {
      case S.con_CourseName:
        this.courseName = r, this.hmProperty.courseName = !0;
        break;
      case S.con_StuId:
        this.stuId = r, this.hmProperty.stuId = !0;
        break;
      case S.con_StuName:
        this.stuName = r, this.hmProperty.stuName = !0;
        break;
      case S.con_QuestionName:
        this.questionName = r, this.hmProperty.questionName = !0;
        break;
      case S.con_IdCurrEduCls:
        this.idCurrEduCls = r, this.hmProperty.idCurrEduCls = !0;
        break;
      case "sfUpdFldSetStr":
        this.sfUpdFldSetStr = r;
        break;
      case "sfFldComparisonOp":
        this.sfFldComparisonOp = r;
        break;
      default:
        n = `字段名:[${o}]在表对象:[cc_KnowledgeStuTeachLog]中不存在!(in ${this.constructor.name}.${s})`, console.error(n);
        break;
    }
  }
  /**
  * 判断一个字符串是否是类的属性
  * @param propName: 属性名
  * @returns 是否是属性
  */
  static hasProperty(o) {
    const r = new S();
    return Object.prototype.hasOwnProperty.call(r, o);
  }
}
const G = "cc_KnowledgeStuTeachLogApi", _ = "cc_KnowledgeStuTeachLog";
function Wt(t) {
  const e = t.split("|");
  if (e.length != 2) {
    const r = "请选择需要修改的记录!";
    throw console.error(r), alert(r), r;
  }
  const o = {
    questionId: Number(e[0]),
    idStudentInfo: e[1]
  };
  if (o.questionId == 0) {
    const r = "关键字段(questionId)值不能为空!";
    throw console.error(r), alert(r), r;
  }
  if (h(o.idStudentInfo) == !0) {
    const r = "关键字段(idStudentInfo)值不能为空!";
    throw console.error(r), alert(r), r;
  }
  return o;
}
async function ne(t, e) {
  const o = "GetObjByKeyLstAsync";
  if (t == 0) {
    const i = c("参数:[lngQuestionId]不能为空!(In clscc_KnowledgeStuTeachLogWApi.GetObjByKeyLstAsync)");
    throw console.error(i), i;
  }
  if (h(e) == !0) {
    const i = c("参数:[strIdStudentInfo]不能为空!(In clscc_KnowledgeStuTeachLogWApi.GetObjByKeyLstAsync)");
    throw console.error(i), i;
  }
  if (e.length != 8) {
    const i = c("缓存分类变量:[strIdStudentInfo]的长度:[{0}]不正确!(clscc_KnowledgeStuTeachLogWApi.GetObjByKeyLstAsync)", e.length);
    throw console.error(i), i;
  }
  const s = F(G, "GetObjByKeyLst"), a = {
    headers: {
      Authorization: `${k.get(M)}`
    },
    params: {
      lngQuestionId: t,
      strIdStudentInfo: e
    }
  };
  try {
    const u = (await $.get(s, a)).data;
    if (u.errorId == 0) {
      const m = u.returnObj;
      return m == null ? null : Ze(m);
    } else
      throw console.error(u.errorMsg), u.errorMsg;
  } catch (i) {
    if (console.error(i), i.statusText == null)
      throw i;
    if (i.statusText == "error") {
      const u = c("网络错误!访问地址:{0}不成功!(in {1}.{2})", s, _, o);
      throw console.error(u), u;
    } else if (i.statusText == "Not Found") {
      const u = c("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", s, _, o);
      throw console.error(u), u;
    } else
      throw i.statusText;
  }
}
function Ue(t, e) {
  const o = "SortFunByKey";
  let r = "";
  if (e == "Asc" || e == "")
    switch (t) {
      case f.con_QuestionId:
        return (s, n) => s.questionId - n.questionId;
      case f.con_IdStudentInfo:
        return (s, n) => s.idStudentInfo.localeCompare(n.idStudentInfo);
      case f.con_TeachingLog:
        return (s, n) => s.teachingLog.localeCompare(n.teachingLog);
      case f.con_CourseId:
        return (s, n) => s.courseId == null ? -1 : n.courseId == null ? 1 : s.courseId.localeCompare(n.courseId);
      case f.con_UpdDate:
        return (s, n) => s.updDate.localeCompare(n.updDate);
      case f.con_UpdUserId:
        return (s, n) => s.updUserId == null ? -1 : n.updUserId == null ? 1 : s.updUserId.localeCompare(n.updUserId);
      case f.con_Memo:
        return (s, n) => s.memo == null ? -1 : n.memo == null ? 1 : s.memo.localeCompare(n.memo);
      default:
        r = `字段名:[${t}]在表对象:[cc_KnowledgeStuTeachLog]中不存在!(in ${_}.${o})`, console.error(r);
        break;
    }
  else
    switch (t) {
      case f.con_QuestionId:
        return (s, n) => n.questionId - s.questionId;
      case f.con_IdStudentInfo:
        return (s, n) => n.idStudentInfo.localeCompare(s.idStudentInfo);
      case f.con_TeachingLog:
        return (s, n) => n.teachingLog.localeCompare(s.teachingLog);
      case f.con_CourseId:
        return (s, n) => n.courseId == null ? -1 : s.courseId == null ? 1 : n.courseId.localeCompare(s.courseId);
      case f.con_UpdDate:
        return (s, n) => n.updDate.localeCompare(s.updDate);
      case f.con_UpdUserId:
        return (s, n) => n.updUserId == null ? -1 : s.updUserId == null ? 1 : n.updUserId.localeCompare(s.updUserId);
      case f.con_Memo:
        return (s, n) => n.memo == null ? -1 : s.memo == null ? 1 : n.memo.localeCompare(s.memo);
      default:
        r = `字段名:[${t}]在表对象:[cc_KnowledgeStuTeachLog]中不存在!(in ${_}.${o})`, console.error(r);
        break;
    }
}
async function jt(t) {
  const e = "GetObjLstAsync", r = F(G, "GetObjLst"), n = {
    headers: {
      Authorization: `${k.get(M)}`
    },
    params: {
      strWhereCond: t
    }
  };
  try {
    const i = (await $.get(r, n)).data;
    if (i.errorId == 0) {
      const u = i.returnObjLst;
      if (u == null) {
        const b = c("获取数据为null, 请注意!(in {0}.{1})", _, e);
        throw console.error(b), b;
      }
      return Xe(u);
    } else
      throw console.error(i.errorMsg), i.errorMsg;
  } catch (a) {
    if (console.error(a), a.statusText == null)
      throw a;
    if (a.statusText == "error") {
      const i = c("网络错误!访问地址:{0}不成功!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else if (a.statusText == "Not Found") {
      const i = c("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else
      throw a.statusText;
  }
}
async function Vt(t) {
  const e = "GetObjLstByPagerAsync";
  if (t.pageIndex == 0)
    return new Array();
  const r = F(G, "GetObjLstByPager"), n = {
    headers: {
      Authorization: `${k.get(M)}`
    }
  };
  try {
    const i = (await $.post(r, t, n)).data;
    if (i.errorId == 0) {
      const u = i.returnObjLst;
      if (u == null) {
        const b = c("获取数据为null, 请注意!(in {0}.{1})", _, e);
        throw console.error(b), b;
      }
      return Xe(u);
    } else
      throw console.error(i.errorMsg), i.errorMsg;
  } catch (a) {
    if (console.error(a), a.statusText == null)
      throw a;
    if (a.statusText == "error") {
      const i = c("网络错误!访问地址:{0}不成功!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else if (a.statusText == "Not Found") {
      const i = c("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else
      throw a.statusText;
  }
}
async function Ht(t, e) {
  const o = "DelRecKeyLstAsync", s = F(G, "DelRecKeyLst"), a = {
    headers: {
      Authorization: `${k.get(M)}`
    },
    params: {
      lngQuestionId: t,
      strIdStudentInfo: e
    }
  };
  try {
    const u = (await $.get(s, a)).data;
    if (u.errorId == 0)
      return u.returnInt;
    throw console.error(u.errorMsg), u.errorMsg;
  } catch (i) {
    if (console.error(i), i.statusText == null)
      throw i;
    if (i.statusText == "error") {
      const u = c("网络错误!访问地址:{0}不成功!(in {1}.{2})", s, _, o);
      throw console.error(u), u;
    } else if (i.statusText == "Not Found") {
      const u = c("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", s, _, o);
      throw console.error(u), u;
    } else
      throw i.statusText;
  }
}
async function zt(t) {
  const e = "DelRecKeyLstsAsync", r = F(G, "DelRecKeyLsts"), n = {
    headers: {
      Authorization: `${k.get(M)}`
    }
  };
  try {
    const i = (await $.post(r, t, n)).data;
    if (i.errorId == 0)
      return i.returnInt;
    throw console.error(i.errorMsg), i.errorMsg;
  } catch (a) {
    if (console.error(a), a.statusText == null)
      throw a;
    if (a.statusText == "error") {
      const i = c("网络错误!访问地址:{0}不成功!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else if (a.statusText == "Not Found") {
      const i = c("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else
      throw a.statusText;
  }
}
async function Jt(t) {
  const e = "AddNewRecordAsync", r = F(G, "AddNewRecord"), n = {
    headers: {
      Authorization: `${k.get(M)}`
    }
  };
  try {
    const i = (await $.post(r, t, n)).data;
    if (i.errorId == 0)
      return i.returnBool;
    throw console.error(i.errorMsg), i.errorMsg;
  } catch (a) {
    if (console.error(a), a.statusText == null)
      throw a;
    if (a.statusText == "error") {
      const i = c("网络错误!访问地址:{0}不成功!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else if (a.statusText == "Not Found") {
      const i = c("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else
      throw a.statusText;
  }
}
async function Yt(t) {
  const e = "UpdateRecordAsync", o = "UpdateRecord";
  if (t.sfUpdFldSetStr === void 0 || t.sfUpdFldSetStr === null || t.sfUpdFldSetStr === "")
    throw c("对象(关键字: {0})的【修改字段集】为空,不能修改!", t.questionId);
  const r = F(G, o), n = {
    headers: {
      Authorization: `${k.get(M)}`
    }
  };
  try {
    const i = (await $.post(r, t, n)).data;
    if (i.errorId == 0)
      return i.returnBool;
    throw console.error(i.errorMsg), i.errorMsg;
  } catch (a) {
    if (console.error(a), a.statusText == null)
      throw a;
    if (a.statusText == "error") {
      const i = c("网络错误!访问地址:{0}不成功!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else if (a.statusText == "Not Found") {
      const i = c("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else
      throw a.statusText;
  }
}
async function Oe(t, e) {
  const o = "IsExistAsync", s = F(G, "IsExist"), a = {
    headers: {
      Authorization: `${k.get(M)}`
    },
    params: {
      lngQuestionId: t,
      strIdStudentInfo: e
    }
  };
  try {
    const u = (await $.get(s, a)).data;
    if (u.errorId == 0)
      return u.returnBool;
    throw console.error(u.errorMsg), u.errorMsg;
  } catch (i) {
    if (console.error(i), i.statusText == null)
      throw i;
    if (i.statusText == "error") {
      const u = c("网络错误!访问地址:{0}不成功!(in {1}.{2})", s, _, o);
      throw console.error(u), u;
    } else if (i.statusText == "Not Found") {
      const u = c("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", s, _, o);
      throw console.error(u), u;
    } else
      throw i.statusText;
  }
}
async function Ke(t) {
  const e = "GetRecCountByCondAsync", r = F(G, "GetRecCountByCond"), n = {
    headers: {
      Authorization: `${k.get(M)}`
    },
    params: {
      strWhereCond: t
    }
  };
  try {
    const i = (await $.get(r, n)).data;
    if (i.errorId == 0)
      return i.returnInt;
    throw console.error(i.errorMsg), i.errorMsg;
  } catch (a) {
    if (console.error(a), a.statusText == null)
      throw a;
    if (a.statusText == "error") {
      const i = c("网络错误!访问地址:{0}不成功!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else if (a.statusText == "Not Found") {
      const i = c("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", r, _, e);
      throw console.error(i), i;
    } else
      throw a.statusText;
  }
}
function Xt(t) {
  if (h(t.teachingLog) === !0)
    throw new Error("(errid:Watl000411)字段[教学日志]不能为空(In 学生知识点教学日志)!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)");
  if (h(t.idStudentInfo) == !1 && D(t.idStudentInfo) > 8)
    throw new Error(`(errid:Watl000413)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.idStudentInfo}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
  if (h(t.teachingLog) == !1 && D(t.teachingLog) > 5e3)
    throw new Error(`(errid:Watl000413)字段[教学日志(teachingLog)]的长度不能超过5000(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.teachingLog}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
  if (h(t.courseId) == !1 && D(t.courseId) > 8)
    throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.courseId}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
  if (h(t.updDate) == !1 && D(t.updDate) > 20)
    throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.updDate}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
  if (h(t.updUserId) == !1 && D(t.updUserId) > 20)
    throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.updUserId}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
  if (h(t.memo) == !1 && D(t.memo) > 1e3)
    throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.memo}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
  if (t.questionId != null && t.questionId !== void 0 && N.isNumber(t.questionId) === !1)
    throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${t.questionId}], 非法,应该为数值型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
  if (h(t.idStudentInfo) == !1 && t.idStudentInfo !== void 0 && N.isString(t.idStudentInfo) === !1)
    throw new Error(`(errid:Watl000414)字段[学生流水号(idStudentInfo)]的值:[${t.idStudentInfo}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
  if (h(t.teachingLog) == !1 && t.teachingLog !== void 0 && N.isString(t.teachingLog) === !1)
    throw new Error(`(errid:Watl000414)字段[教学日志(teachingLog)]的值:[${t.teachingLog}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
  if (h(t.courseId) == !1 && t.courseId !== void 0 && N.isString(t.courseId) === !1)
    throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${t.courseId}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
  if (h(t.updDate) == !1 && t.updDate !== void 0 && N.isString(t.updDate) === !1)
    throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${t.updDate}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
  if (h(t.updUserId) == !1 && t.updUserId !== void 0 && N.isString(t.updUserId) === !1)
    throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${t.updUserId}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
  if (h(t.memo) == !1 && t.memo !== void 0 && N.isString(t.memo) === !1)
    throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${t.memo}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
  if (h(t.courseId) == !1 && t.courseId != "[nuull]" && D(t.courseId) != 8)
    throw "(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 学生知识点教学日志)!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)";
}
function Zt(t) {
  if (h(t.idStudentInfo) == !1 && D(t.idStudentInfo) > 8)
    throw new Error(`(errid:Watl000416)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.idStudentInfo}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (h(t.teachingLog) == !1 && D(t.teachingLog) > 5e3)
    throw new Error(`(errid:Watl000416)字段[教学日志(teachingLog)]的长度不能超过5000(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.teachingLog}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (h(t.courseId) == !1 && D(t.courseId) > 8)
    throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.courseId}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (h(t.updDate) == !1 && D(t.updDate) > 20)
    throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.updDate}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (h(t.updUserId) == !1 && D(t.updUserId) > 20)
    throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.updUserId}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (h(t.memo) == !1 && D(t.memo) > 1e3)
    throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${t.memo}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (t.questionId != null && t.questionId !== void 0 && N.isNumber(t.questionId) === !1)
    throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${t.questionId}], 非法,应该为数值型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (h(t.idStudentInfo) == !1 && t.idStudentInfo !== void 0 && N.isString(t.idStudentInfo) === !1)
    throw new Error(`(errid:Watl000417)字段[学生流水号(idStudentInfo)]的值:[${t.idStudentInfo}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (h(t.teachingLog) == !1 && t.teachingLog !== void 0 && N.isString(t.teachingLog) === !1)
    throw new Error(`(errid:Watl000417)字段[教学日志(teachingLog)]的值:[${t.teachingLog}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (h(t.courseId) == !1 && t.courseId !== void 0 && N.isString(t.courseId) === !1)
    throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${t.courseId}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (h(t.updDate) == !1 && t.updDate !== void 0 && N.isString(t.updDate) === !1)
    throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${t.updDate}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (h(t.updUserId) == !1 && t.updUserId !== void 0 && N.isString(t.updUserId) === !1)
    throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${t.updUserId}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (h(t.memo) == !1 && t.memo !== void 0 && N.isString(t.memo) === !1)
    throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${t.memo}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
  if (t.questionId === null || t.questionId != null && t.questionId.toString() === "" || t.questionId.toString() === "0")
    throw new Error("(errid:Watl000064)字段[题目Id]不能为空(In 学生知识点教学日志)!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)");
  if (h(t.courseId) == !1 && t.courseId != "[nuull]" && D(t.courseId) != 8)
    throw "(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 学生知识点教学日志)!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)";
}
function Xe(t) {
  const e = new Array();
  for (const o of t) {
    const r = Ze(o);
    r != null && e.push(r);
  }
  return e;
}
function Ze(t) {
  const e = new f();
  return ue(e, t), e;
}
const j = "cc_KnowledgeStuTeachLogEx";
function et(t) {
  const e = et.name, o = new S();
  try {
    return ue(o, t), o;
  } catch (r) {
    const s = c(
      "(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})",
      r,
      j,
      e
    );
    return console.error(s), alert(s), o;
  }
}
async function er(t) {
  const e = "GetObjExLstByPagerAsync", r = (await Vt(
    t
  )).map(
    et
  );
  if (r.length == 0)
    return r;
  let s = r;
  try {
    if (t.orderBy != null && t.orderBy.length > 0) {
      const n = t.orderBy.split(" ");
      let a = "asc";
      const i = n[0];
      n.length > 1 && (a = n[1]), s = s.sort(
        tr(i, a)
      );
    } else
      s = s.sort(t.sortFun);
    return s;
  } catch (n) {
    const a = c(
      `错误:[{0}]. 
根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})`,
      n,
      t.whereCond,
      j,
      e
    );
    throw console.error(a), new Error(a);
  }
  return new Array();
}
async function tt(t) {
  const e = tt.name;
  try {
    if (h(t.courseName) == !0) {
      const o = t.courseId, r = await _t(
        Fe.con_CourseId,
        Fe.con_CourseName,
        o
      );
      t.courseName = r;
    }
  } catch (o) {
    const r = c(
      "(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})",
      o,
      j,
      e
    );
    console.error(r), alert(r);
  }
}
async function rt(t) {
  const e = rt.name;
  try {
    if (h(t.stuId) == !0) {
      const o = t.idStudentInfo, r = await qe(
        J.con_IdStudentInfo,
        J.con_StuId,
        o,
        ee.idCurrEduCls
      );
      t.stuId = r;
    }
  } catch (o) {
    const r = c(
      "(errid:Watl000853)函数映射表对象数据出错,{0}.(in {1}.{2})",
      o,
      j,
      e
    );
    console.error(r), alert(r);
  }
}
async function ot(t) {
  const e = ot.name;
  try {
    if (h(t.stuName) == !0) {
      const o = t.idStudentInfo, r = await qe(
        J.con_IdStudentInfo,
        J.con_StuName,
        o,
        ee.idCurrEduCls
      );
      t.stuName = r;
    }
  } catch (o) {
    const r = c(
      "(errid:Watl000680)函数映射表对象数据出错,{0}.(in {1}.{2})",
      o,
      j,
      e
    );
    console.error(r), alert(r);
  }
}
async function st(t) {
  const e = st.name;
  try {
    if (h(t.questionName) == !0) {
      const o = t.questionId, r = await Rt(
        w.con_QuestionId,
        w.con_QuestionName,
        o.toString(),
        t.courseId
      );
      t.questionName = r;
    }
  } catch (o) {
    const r = c(
      "(errid:Watl000896)函数映射表对象数据出错,{0}.(in {1}.{2})",
      o,
      j,
      e
    );
    console.error(r), alert(r);
  }
}
function tr(t, e) {
  if (e == "Asc" || e == "")
    switch (t) {
      case S.con_CourseName:
        return (o, r) => o.courseName.localeCompare(r.courseName);
      case S.con_StuId:
        return (o, r) => o.stuId.localeCompare(r.stuId);
      case S.con_StuName:
        return (o, r) => o.stuName.localeCompare(r.stuName);
      case S.con_QuestionName:
        return (o, r) => o.questionName.localeCompare(r.questionName);
      default:
        return Ue(t, e);
    }
  else
    switch (t) {
      case S.con_CourseName:
        return (o, r) => r.courseName.localeCompare(o.courseName);
      case S.con_StuId:
        return (o, r) => r.stuId.localeCompare(o.stuId);
      case S.con_StuName:
        return (o, r) => r.stuName.localeCompare(o.stuName);
      case S.con_QuestionName:
        return (o, r) => r.questionName.localeCompare(o.questionName);
      default:
        return Ue(t, e);
    }
}
function nt(t, e) {
  const o = nt.name;
  let r = "";
  if (!(f.AttributeName.indexOf(t) > -1))
    switch (t) {
      case S.con_CourseName:
        return tt(e);
      case S.con_StuId:
        return rt(e);
      case S.con_StuName:
        return ot(e);
      case S.con_QuestionName:
        return st(e);
      default:
        r = c(
          "扩展字段:[{0}]在字段值函数映射中不存在!(in {1})",
          t,
          o
        ), console.error(r);
    }
}
async function De(t) {
  const e = De.name;
  try {
    if (h(t.stuId) == !0)
      return [];
    const o = t.stuId;
    return await Qe(
      J.con_StuId,
      o,
      ee.idCurrEduCls,
      Ge.Like_03
    );
  } catch (o) {
    const r = c(
      "(errid:Watl000854)函数映射表对象数据出错,{0}.(in {1}.{2})",
      o,
      j,
      e
    );
    throw console.error(r), alert(r), r;
  }
}
async function Ne(t) {
  const e = Ne.name;
  try {
    if (h(t.stuName) == !0)
      return [];
    const o = t.stuName;
    return await Qe(
      J.con_StuName,
      o,
      ee.idCurrEduCls,
      Ge.Like_03
    );
  } catch (o) {
    const r = c(
      "(errid:Watl000684)函数映射表对象数据出错,{0}.(in {1}.{2})",
      o,
      j,
      e
    );
    throw console.error(r), alert(r), r;
  }
}
const rr = g("Asc"), or = g(""), v = he({
  ascOrDesc4SortFun: rr,
  sortcc_KnowledgeStuTeachLogBy: or
}), ae = g(""), at = g(), it = g(), ct = g(), lt = g(), ut = g(), sr = g(), B = g(), T = g(), Y = g(), y = he({
  refDivLayout: at,
  refDivQuery: it,
  refDivFunction: ct,
  refDivList: lt,
  refDivEdit: ut,
  refDivDetail: sr,
  refcc_KnowledgeStuTeachLog_Detail: B,
  refcc_KnowledgeStuTeachLog_Edit: T,
  refcc_KnowledgeStuTeachLog_List: Y
}), dt = g(!1), ht = g([]), Ae = g([]), nr = g(""), mt = g(""), ie = g(""), ce = g("");
he({
  courseId_q: mt,
  stuId_q: ie,
  stuName_q: ce
});
he({});
const Ee = async () => {
  let t = " 1 = 1 ";
  t += c(" and CourseId ='{0}'", ae.value);
  try {
    const e = await ar();
    e.length > 0 && (t += c(" And {0} in ({1})", f.con_IdStudentInfo, e.join(",")));
  } catch (e) {
    throw c("在组合查询条件(Combinecc_KnowledgeStuTeachLogCondition)时出错!请联系管理员!{0}", e);
  }
  return t;
};
async function ar() {
  const t = new S();
  let e = [];
  try {
    if (ie.value != "") {
      t.SetCondFldValue(S.con_StuId, ie.value, "like");
      const o = await De(t);
      e.length == 0 ? e = o.map((r) => r.toString()) : e = se(e, o.map((r) => r.toString()));
    }
    if (ce.value != "") {
      t.SetCondFldValue(S.con_StuName, ce.value, "like");
      const o = await Ne(t);
      e.length == 0 ? e = o.map((r) => r.toString()) : e = se(e, o.map((r) => r.toString()));
    }
  } catch (o) {
    throw c("在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}", o);
  }
  return e;
}
const _e = async (t, e) => {
  ht.value = t, dt.value = e, Y.value != null && (Y.value.selectAllChecked = !1);
};
var U;
let Ce = (U = class {
  constructor() {
    //专门用于数据列表的界面变量,用于分页功能等
    d(this, "currPageIndex", 0);
    d(this, "divName4DataList", "divDataLst");
    //列表中数据区的层Id
    d(this, "divName4Pager", "divPager");
    //列表中的分页区的层Id
    d(this, "bolIsTableSm", !0);
    //是否窄行的小表,即表中加样式： table-sm
    d(this, "listPara");
    //是否窄行的小表,即表中加样式： table-sm
    d(this, "objPager");
    d(this, "recCount", 0);
    this.listPara = new Ct(y.refDivLayout, y.refDivList), U.objPageCRUD = this, this.objPager = new Lt(this);
  }
  /**
  * 获取当前组件的divList的层对象
  **/
  get thisDivList() {
    return y.refDivList;
  }
  /**
  * 获取当前组件的divLayout的层对象
  **/
  get thisDivLayout() {
    return y.refDivLayout;
  }
  /**
  * 获取当前界面的主表名
  **/
  get thisTabName() {
    return f._CurrTabName;
  }
  /**
  * 每页记录数,在扩展类可以修改
  **/
  get pageSize() {
    return 5;
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
  **/
  async PageLoad() {
    const e = this.PageLoad.name;
    try {
      await this.InitVarSet(), await this.InitCtlVar(), v.sortcc_KnowledgeStuTeachLogBy == "" && (v.sortcc_KnowledgeStuTeachLogBy = `${f.con_QuestionId} Asc`), await this.BindGv_cc_KnowledgeStuTeachLog4Func(y.refDivList);
    } catch (o) {
      const r = `页面启动不成功,${o}.(in ${this.constructor.name}.${e}`;
      console.error("Error: ", r), alert(r);
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
  **/
  async PageLoadCache() {
    const e = this.PageLoadCache.name;
    try {
      await this.InitVarSet(), await this.InitCtlVar(), v.sortcc_KnowledgeStuTeachLogBy == "" && (v.sortcc_KnowledgeStuTeachLogBy = `${f.con_QuestionId} Asc`), await this.BindGv_cc_KnowledgeStuTeachLog4Func(y.refDivList);
    } catch (o) {
      const r = `页面启动不成功,${o}.(in ${this.constructor.name}.${e}`;
      console.error("Error: ", r), alert(r);
    }
  }
  /** 根据条件获取相应的对象列表
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  **/
  async btnQuery_Click() {
    this.SetCurrPageIndex(1), await this.BindGv_cc_KnowledgeStuTeachLog4Func(y.refDivList);
  }
  /** 合并数据
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
  **/
  CombineData(e, o) {
    const r = e.length, s = o.length, n = [];
    for (let u = 0; u < r; u++) {
      const m = e[u], b = {};
      for (let P = 0; P < s; P++) {
        const fe = o[P].fldName, Se = o[P].colHeader, Ie = m.GetFldValue(fe);
        b[Se] = Ie;
      }
      n.push(b);
    }
    const a = c(
      "学生知识点教学日志({0})导出.xlsx",
      f._CurrTabName
    );
    return { arrObjLst: n, sheetName: "学生知识点教学日志列表", fileName: a };
  }
  /** 根据条件获取相应的对象列表
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcel)
  **/
  async ExportExcel_cc_KnowledgeStuTeachLog() {
    const e = this.ExportExcel_cc_KnowledgeStuTeachLog.name;
    if (v.sortcc_KnowledgeStuTeachLogBy == null) {
      const s = c("在显示列表时,排序字段(sortcc_KnowledgeStuTeachLogBy)为空,请检查!(In BindGv_cc_KnowledgeStuTeachLogCache)");
      return console.error(s), alert(s), { arrObjLst: [], sheetName: "", fileName: "" };
    }
    const o = await Ee();
    let r = [];
    try {
      if (this.recCount = await Ke(o), this.recCount == 0) {
        const s = document.createElement("span");
        s.innerHTML = c("根据条件:[{0}]获取的对象列表数为0!", o);
        const n = c("在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!", o);
        return console.error("Error: ", n), alert(n), { arrObjLst: [], sheetName: "", fileName: "" };
      }
      r = await jt(o);
    } catch (s) {
      const n = `绑定GridView不成功,${s}.(in ${this.constructor.name}.${e}`;
      return console.error(n), alert(n), { arrObjLst: [], sheetName: "", fileName: "" };
    }
    if (r.length == 0) {
      const s = `在ExportExcel过程中,根据条件获取的${this.thisTabName}记录数为0!`;
      return console.error("Error: ", s), alert(s), { arrObjLst: [], sheetName: "", fileName: "" };
    }
    try {
      const s = [
        {
          fldName: "questionId",
          sortBy: "",
          sortFun: C,
          getDataSource: "",
          colHeader: "题目Id",
          text: "",
          tdClass: "text-left",
          columnType: "Label",
          orderNum: 2,
          funcName: (n, a) => (console.log(n, a), new HTMLElement())
        },
        {
          fldName: "idStudentInfo",
          sortBy: "",
          sortFun: C,
          getDataSource: "",
          colHeader: "学生流水号",
          text: "",
          tdClass: "text-left",
          columnType: "Label",
          orderNum: 3,
          funcName: (n, a) => (console.log(n, a), new HTMLElement())
        },
        {
          fldName: "teachingLog",
          sortBy: "",
          sortFun: C,
          getDataSource: "",
          colHeader: "教学日志",
          text: "",
          tdClass: "text-left",
          columnType: "Label",
          orderNum: 4,
          funcName: (n, a) => (console.log(n, a), new HTMLElement())
        },
        {
          fldName: "updDate",
          sortBy: "",
          sortFun: C,
          getDataSource: "",
          colHeader: "修改日期",
          text: "",
          tdClass: "text-left",
          columnType: "Label",
          orderNum: 6,
          funcName: (n, a) => (console.log(n, a), new HTMLElement())
        },
        {
          fldName: "memo",
          sortBy: "",
          sortFun: C,
          getDataSource: "",
          colHeader: "备注",
          text: "",
          tdClass: "text-left",
          columnType: "Label",
          orderNum: 8,
          funcName: (n, a) => (console.log(n, a), new HTMLElement())
        }
      ];
      return r = r.sort(this.SortFunExportExcel), this.CombineData(r, s);
    } catch (s) {
      const n = `绑定${this.thisTabName}对象列表不成功, ${s}.(in ${this.constructor.name}.${e}`;
      return console.error(n), alert(n), { arrObjLst: [], sheetName: "", fileName: "" };
    }
  }
  //多关键字,不支持复制功能!
  /** 
  * 在数据表里删除记录
  * "lngQuestionId": 表关键字
  * "strIdStudentInfo": 表关键字
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
  **/
  async btnDelRecordInTab_Click(e, o) {
    const r = this.btnDelRecordInTab_Click.name;
    try {
      if (e == 0)
        return alert(`请选择需要删除的${this.thisTabName}记录!`), "";
      if (h(o) == !0)
        return alert(`请选择需要删除的${this.thisTabName}记录!`), "";
      if (ye(0) == !1)
        return;
      await this.DelRecord(e, o), await this.BindGv_cc_KnowledgeStuTeachLog4Func(y.refDivList);
    } catch (s) {
      const n = `删除${this.thisTabName}记录不成功. ${s}.(in ${this.constructor.name}.${r}`;
      console.error(n), alert(n);
    }
  }
  /** 
  * 在数据表里选择记录
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
  **/
  async btnSelectRecordInTab_Click(e, o) {
    const r = this.btnSelectRecordInTab_Click.name;
    try {
      if (e == 0) {
        const s = "请选择相关记录,请检查!";
        console.error(s), alert(s);
        return;
      }
      if (h(o) == !0) {
        const s = "请选择相关记录,请检查!";
        console.error(s), alert(s);
        return;
      }
      if (ye(0) == !1)
        return;
      this.SelectRecord(e, o);
    } catch (s) {
      const n = `选择记录不成功. ${s}.(in ${this.constructor.name}.${r}`;
      console.error(n), alert(n);
    }
  }
  /** 
  * 根据关键字删除记录
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  **/
  async DelRecord(e, o) {
    const r = this.DelRecord.name;
    try {
      const s = await Ht(e, o);
      if (s > 0) {
        const n = `删除${this.thisTabName}记录成功,共删除${s}条记录!`;
        alert(n);
      } else {
        const n = `删除${this.thisTabName}记录不成功!`;
        alert(n);
      }
      console.log("完成DelRecord!");
    } catch (s) {
      const n = `删除${this.thisTabName}记录不成功. ${s}.(in ${this.constructor.name}.${r}`;
      console.error(n), alert(n);
    }
  }
  /** 
  * 根据关键字选择相应的记录
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
  * @param sender:参数列表
  **/
  async SelectRecord(e, o) {
    const r = this.SelectRecord.name;
    try {
      const s = await ne(e, o);
      console.log("完成SelectRecord!", s), Tt("/Index/Main_cc_KnowledgeStuTeachLog");
    } catch (s) {
      const n = `根据关键字获取相应的${this.thisTabName}记录的对象不成功,${s}.(in ${this.constructor.name}.${r}`;
      console.error("Error: ", n), alert(n);
    }
  }
  /** 删除记录
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
  **/
  async btnDelRecord_Click() {
    const e = this.btnDelRecord_Click.name;
    try {
      const o = We(y.refDivList);
      if (o.length == 0)
        return alert(`请选择需要删除的${this.thisTabName}记录!`), "";
      if (ye(o.length) == !1)
        return;
      await this.DelMultiRecord_KeyLst(o), await this.BindGv_cc_KnowledgeStuTeachLog4Func(y.refDivList);
    } catch (o) {
      const r = `删除${this.thisTabName}记录不成功. ${o}.(in ${this.constructor.name}.${e}`;
      console.error(r), alert(r);
    }
  }
  /** 根据条件获取相应的对象列表
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
  **/
  async btnExportExcel_Click() {
    await this.ExportExcel_cc_KnowledgeStuTeachLog();
  }
  /** 显示cc_KnowledgeStuTeachLog对象的所有属性值
  * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
  * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
  * @param arrcc_KnowledgeStuTeachLogObjLst:需要绑定的对象列表
  **/
  async BindTab_cc_KnowledgeStuTeachLog(e, o) {
    if (e == null) {
      alert(c("{0}不存在!", e));
      return;
    }
    const r = [
      {
        fldName: "",
        sortBy: "",
        sortFun: C,
        getDataSource: "",
        colHeader: "",
        text: "",
        tdClass: "text-left",
        columnType: "CheckBox",
        orderNum: 1,
        funcName: (s, n) => (console.log(s, n), new HTMLElement())
      },
      {
        fldName: S.con_QuestionName,
        sortBy: "questionName",
        sortFun: C,
        getDataSource: "",
        colHeader: "题目名称",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 2,
        funcName: (s, n) => (console.log(s, n), new HTMLElement())
      },
      {
        fldName: S.con_StuId,
        sortBy: "stuId",
        sortFun: C,
        getDataSource: "",
        colHeader: "学号",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 3,
        funcName: (s, n) => (console.log(s, n), new HTMLElement())
      },
      {
        fldName: S.con_StuName,
        sortBy: "stuName",
        sortFun: C,
        getDataSource: "",
        colHeader: "姓名",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 4,
        funcName: (s, n) => (console.log(s, n), new HTMLElement())
      },
      {
        fldName: f.con_TeachingLog,
        sortBy: "teachingLog",
        sortFun: C,
        getDataSource: "",
        colHeader: "教学日志",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 5,
        funcName: (s, n) => (console.log(s, n), new HTMLElement())
      },
      {
        fldName: f.con_UpdDate,
        sortBy: "updDate",
        sortFun: C,
        getDataSource: "",
        colHeader: "修改日期",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 6,
        funcName: (s, n) => (console.log(s, n), new HTMLElement())
      },
      {
        fldName: f.con_Memo,
        sortBy: "memo",
        sortFun: C,
        getDataSource: "",
        colHeader: "备注",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 7,
        funcName: (s, n) => (console.log(s, n), new HTMLElement())
      }
    ];
    if (Y.value != null)
      Ae.value = r, await _e(o, this.dispAllErrMsg_q);
    else {
      const s = ke(e, "divDataLst");
      if (s == null) {
        alert("在BindTab_cc_KnowledgeStuTeachLog函数中，divDataLst不存在!");
        return;
      }
      const n = [f.con_QuestionId, f.con_IdStudentInfo];
      await Me(s, o, r, n, this);
    }
    this.objPager.IsInit(e, this.divName4Pager) == !1 && this.objPager.InitShow(e, this.divName4Pager), this.objPager.recCount = this.recCount, this.objPager.pageSize = this.pageSize, this.objPager.ShowPagerV2(e, this, this.divName4Pager);
  }
  /**
  * 是否显示所有错误
  **/
  get dispAllErrMsg_q() {
    return !0;
  }
  /** 显示cc_KnowledgeStuTeachLog对象的所有属性值
  * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
  * @param divContainer:显示容器
  * @param arrcc_KnowledgeStuTeachLogExObjLst:需要绑定的对象列表
  **/
  async BindTab_cc_KnowledgeStuTeachLog4Func(e, o) {
    const r = this.BindTab_cc_KnowledgeStuTeachLog4Func.name;
    if (e == null) {
      alert(c("{0}不存在!", e));
      return;
    }
    const s = [
      {
        fldName: "",
        sortBy: "",
        sortFun: C,
        getDataSource: "",
        colHeader: "",
        text: "",
        tdClass: "text-left",
        columnType: "CheckBox",
        orderNum: 1,
        funcName: (n, a) => (console.log(n, a), new HTMLElement())
      },
      {
        fldName: S.con_QuestionName,
        sortBy: "questionName",
        sortFun: C,
        getDataSource: "",
        colHeader: "题目名称",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 2,
        funcName: (n, a) => (console.log(n, a), new HTMLElement())
      },
      {
        fldName: S.con_StuId,
        sortBy: "stuId",
        sortFun: C,
        getDataSource: "",
        colHeader: "学号",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 3,
        funcName: (n, a) => (console.log(n, a), new HTMLElement())
      },
      {
        fldName: S.con_StuName,
        sortBy: "stuName",
        sortFun: C,
        getDataSource: "",
        colHeader: "姓名",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 4,
        funcName: (n, a) => (console.log(n, a), new HTMLElement())
      },
      {
        fldName: f.con_TeachingLog,
        sortBy: "teachingLog",
        sortFun: C,
        getDataSource: "",
        colHeader: "教学日志",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 5,
        funcName: (n, a) => (console.log(n, a), new HTMLElement())
      },
      {
        fldName: f.con_UpdDate,
        sortBy: "updDate",
        sortFun: C,
        getDataSource: "",
        colHeader: "修改日期",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 6,
        funcName: (n, a) => (console.log(n, a), new HTMLElement())
      },
      {
        fldName: f.con_Memo,
        sortBy: "memo",
        sortFun: C,
        getDataSource: "",
        colHeader: "备注",
        text: "",
        tdClass: "text-left",
        columnType: "Label",
        orderNum: 7,
        funcName: (n, a) => (console.log(n, a), new HTMLElement())
      }
    ];
    try {
      await this.ExtendFldFuncMap(o, s);
    } catch (n) {
      const a = `扩展字段值的映射出错,${n}.(in ${this.constructor.name}.${r}`;
      console.error(a), alert(a);
      return;
    }
    if (Y.value != null)
      Ae.value = s, await _e(o, this.dispAllErrMsg_q);
    else {
      const n = ke(e, "divDataLst");
      if (n == null) {
        alert("在BindTab_cc_KnowledgeStuTeachLog4Func函数中，divDataLst不存在!");
        return;
      }
      const a = [f.con_QuestionId, f.con_IdStudentInfo];
      await Me(n, o, s, a, this);
    }
    this.objPager.IsInit(e, this.divName4Pager) == !1 && this.objPager.InitShow(e, this.divName4Pager), this.objPager.recCount = this.recCount, this.objPager.pageSize = this.pageSize, this.objPager.ShowPagerV2(e, this, this.divName4Pager);
  }
  /** 扩展字段值的函数映射
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
  * @param arrcc_KnowledgeStuTeachLogExObjLst:需要映射的对象列表
  * @param arrDataColumn:用于绑定表的数据列信息
  **/
  async ExtendFldFuncMap(e, o) {
    const r = f.AttributeName;
    for (const s of o)
      if (h(s.fldName) != !0 && !(r.indexOf(s.fldName) > -1))
        for (const n of e)
          await nt(s.fldName, n);
  }
  /** 函数功能:在数据 列表中跳转到某一页
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
  * @param intPageIndex:页序号
  **/
  async IndexPage(e) {
    e == 0 && (e = this.objPager.pageCount), this.SetCurrPageIndex(e), await this.BindGv_cc_KnowledgeStuTeachLog4Func(this.listPara.listDiv);
  }
  /** 函数功能:在数据列表中跳转到下一页
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_NextPage)
  **/
  async NextPage() {
    const e = this.objPager.currPageIndex, o = Number(e) + 1;
    this.IndexPage(o);
  }
  /** 函数功能:在数据列表中跳转到前一页
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PrevPage)
  **/
  async PrevPage() {
    const e = this.objPager.currPageIndex, o = Number(e) - 1;
    this.IndexPage(o);
  }
  /** 根据条件获取相应的对象列表
  * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func_NoCache)
  **/
  async BindGv_cc_KnowledgeStuTeachLog4Func(e) {
    const o = this.BindGv_cc_KnowledgeStuTeachLog4Func.name;
    if (e == null) {
      const a = c(
        "用于显示列表的div为空,请检查!(in {0}.{1})",
        this.constructor.name,
        o
      );
      console.error(a), alert(a);
      return;
    }
    if (this.listPara.listDiv = e, v.sortcc_KnowledgeStuTeachLogBy == null) {
      const a = c("在显示列表时,排序字段(sortcc_KnowledgeStuTeachLogBy)为空,请检查!(In BindGv_cc_KnowledgeStuTeachLogCache)");
      console.error(a), alert(a);
      return;
    }
    const r = await Ee(), s = vt(this.objPager.currPageIndex);
    let n = [];
    try {
      if (this.recCount = await Ke(r), this.recCount == 0) {
        const i = document.createElement("span");
        i.innerHTML = c("根据条件:[{0}]获取的对象列表数为0!", r);
        const u = c("在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!", r);
        console.error("Error: ", u), alert(u), _e(n, !0);
        return;
      }
      const a = {
        pageIndex: s,
        pageSize: this.pageSize,
        whereCond: r,
        orderBy: v.sortcc_KnowledgeStuTeachLogBy,
        //如果该字段为空,就使用下面的排序函数
        sortFun: (i, u) => (console.log(i, u), 0)
      };
      n = await er(a);
    } catch (a) {
      const i = `绑定GridView不成功,${a}.(in ${this.constructor.name}.${o}`;
      console.error(i), alert(i);
      return;
    }
    if (n.length == 0) {
      const a = c("{0}", f._CurrTabName), i = `根据条件获取的${this.thisTabName}记录数为0!(Key=${a})`;
      console.error("Error: ", i), this.objPager.Hide(e, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_cc_KnowledgeStuTeachLog4Func(e, n);
    } catch (a) {
      const i = `绑定${this.thisTabName}对象列表不成功, ${a}.(in ${this.constructor.name}.${o}`;
      console.error(i), alert(i);
    }
  }
  /**
  * 把同一个类的对象,复制到另一个对象
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  * @param objcc_KnowledgeStuTeachLogENS:源对象
  * @returns 目标对象=>clscc_KnowledgeStuTeachLogEN:objcc_KnowledgeStuTeachLogENT
  **/
  CopyToEx(e) {
    const o = this.CopyToEx.name, r = new S();
    try {
      return ue(r, e), r;
    } catch (s) {
      const n = c("(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})", s, this.constructor.name, o);
      return console.error(n), alert(n), r;
    }
  }
  /**
  * 排序函数。根据表对象中随机两个字段的值进行比较,正常使用时,需用该类的扩展类的同名函数
  * 作者:pyf
  * 日期:
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortFunExportExcel)
  * @param a:比较的第1个对象
  * @param b:比较的第1个对象
  * @returns 返回两个对象比较的结果
  **/
  SortFunExportExcel(e, o) {
    return e.updDate == o.updDate ? e.updDate == null ? -1 : o.updDate == null ? 1 : e.updDate.localeCompare(o.updDate) : o.questionId == null ? -1 : e.questionId == null ? 1 : e.questionId - o.questionId;
  }
  /** 函数功能:从界面列表中根据某一个字段排序
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
  * @param objAnchorElement:带有排序字段的Anchors
  **/
  async SortBy(e) {
    let o = "";
    typeof e != "function" && (o = e.getAttribute("FldName"));
    const { sortFun: r, ascOrDesc4SortFun: s, sortBy: n } = Dt(e, v.ascOrDesc4SortFun, v.sortcc_KnowledgeStuTeachLogBy, o), [a, i] = n.split(" ");
    if (S.hasProperty(a)) {
      this.SortColumn(a, i);
      return;
    }
    v.sortcc_KnowledgeStuTeachLogBy = n, v.ascOrDesc4SortFun = s, U.sortFunStatic = r, await this.BindGv_cc_KnowledgeStuTeachLog4Func(this.listPara.listDiv);
  }
  /** 把所有的查询控件内容组合成一个条件串
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetConditionInFldValueLst)
  * @returns 相关字段的InFldId列表(Array<string>)
  **/
  async GetCondition_IdStudentInfoLst_In() {
    const e = new S();
    let o = [];
    try {
      if (this.stuId_q != "") {
        e.SetCondFldValue(S.con_StuId, this.stuId_q, "like");
        const r = await De(e);
        o.length == 0 ? o = r.map((s) => s.toString()) : o = se(o, r.map((s) => s.toString()));
      }
      if (this.stuName_q != "") {
        e.SetCondFldValue(S.con_StuName, this.stuName_q, "like");
        const r = await Ne(e);
        o.length == 0 ? o = r.map((s) => s.toString()) : o = se(o, r.map((s) => s.toString()));
      }
    } catch (r) {
      throw c("(errid:WiTsCs0029)在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}", r);
    }
    return o;
  }
  //多关键字,不支持复制功能!
  /** 根据关键字列表删除记录
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
  **/
  async DelMultiRecord_KeyLst(e) {
    const o = this.DelMultiRecord_KeyLst.name;
    try {
      const r = await zt(e);
      if (r > 0) {
        const s = `删除${this.thisTabName}记录成功,共删除${r}条记录!`;
        alert(s);
      } else {
        const s = `删除${this.thisTabName}记录不成功!`;
        alert(s);
      }
      console.log("完成DelMultiRecord!");
    } catch (r) {
      const s = `删除${this.thisTabName}记录不成功. ${r}.(in ${this.constructor.name}.${o}`;
      console.error(s), alert(s);
    }
  }
  /** 显示{0}对象的所有属性值
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
  * @param divContainer:显示容器
  * @param objcc_KnowledgeStuTeachLog:需要显示的对象
  **/
  Showcc_KnowledgeStuTeachLogObj(e, o) {
    if (e == null) {
      alert(c("所给div为空，divContainer为null!", e));
      return;
    }
    const r = Nt(o), s = document.createElement("ul");
    for (const n of r) {
      const a = o.GetFldValue(n), i = document.createElement("li");
      i.innerHTML = c("{0}:{1}", n, a), s.appendChild(i);
    }
    e.appendChild(s);
  }
  /** 函数功能:从界面列表中获取第一个关键字的值
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
  * @param pobjcc_KnowledgeStuTeachLogEN:表实体类对象
  * @returns 列表的第一个关键字值
  **/
  GetFirstKey() {
    return be.length == 1 ? be[0] : (alert(`请选择一个关键字!目前选择了:${be.length}个关键字。`), "");
  }
  /** 函数功能:预留函数,在某一个层(div)里绑定数据
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindInDiv)
  **/
  async BindInDiv(e) {
    console.log(e);
  }
  /** 函数功能:设置当前页序号
  * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetCurrPageIndex)
  * @param value:页序号
  * @param strDivName4Pager:当前分页所在的层(div)
  **/
  SetCurrPageIndex(e) {
    this.objPager.currPageIndex = e;
  }
  /**
  * 学生流水号 (Used In GetConditionInFldValueLst())
  **/
  get stuId_q() {
    const e = $e(y.refDivQuery, "txtStuId_q");
    return e == null ? "" : e.toString();
  }
  /**
  * 学生流水号 (Used In GetConditionInFldValueLst())
  **/
  get stuName_q() {
    const e = $e(y.refDivQuery, "txtStuName_q");
    return e == null ? "" : e.toString();
  }
  /**
  * 设置界面标题-相当使用ViewState功能
  **/
  set ViewTitle(e) {
    xt(y.refDivLayout, "lblViewTitle", e);
  }
  /**
  * 设置界面标题
  **/
  get ViewTitle() {
    return Ft(y.refDivLayout, "lblViewTitle");
  }
}, d(U, "vuebtn_Click"), d(U, "GetPropValue"), d(U, "objPageCRUD"), d(U, "sortFunStatic"), U);
const I = class I {
  constructor(e, o) {
    d(this, "_className", "Unknown");
    d(this, "opType", "");
    d(this, "keyId", "");
    d(this, "isShowMsg", !0);
    //编辑记录时是否显示提示信息
    d(this, "tag", "");
    d(this, "iShowList");
    d(this, "bolIsLoadEditRegion", !1);
    //记录是否导入编辑区的变量
    d(this, "divName4Edit", "divEditLayout");
    this._className = e, this.iShowList = o, I.SetPageEdit(this, 1) != !0 && I.SetPageEdit(this, 2) != !0 && I.SetPageEdit(this, 3) != !0;
  }
  // 基类中的实际字段
  // 定义虚拟属性
  get className() {
    return this._className;
  }
  //编辑区的Id
  /**
  * 获取当前组件的divEdit的层对象
  **/
  get thisDivEdit() {
    return y.refDivEdit;
  }
  /**
  * 获取当前组件的divEdit的层对象
  **/
  get thisDivLayout() {
    return y.refDivEdit;
  }
  static SetPageEdit(e, o) {
    const r = e.className;
    switch (o) {
      case 1:
        return I.objPageEdit == null || I.objPageEdit.className == r ? (I.objPageEdit = e, !0) : !1;
      case 2:
        return I.objPageEdit2 == null || I.objPageEdit2.className == r ? (I.objPageEdit2 = e, !0) : !1;
      case 3:
        return I.objPageEdit3 == null || I.objPageEdit3.className == r ? (I.objPageEdit3 = e, !0) : !1;
      default:
        return !1;
    }
  }
  static GetPageEditObj(e) {
    return I.objPageEdit != null && I.objPageEdit.className == e ? I.objPageEdit : I.objPageEdit2 != null && I.objPageEdit2.className == e ? I.objPageEdit2 : I.objPageEdit3 != null && I.objPageEdit3.className == e ? I.objPageEdit3 : null;
  }
  /**
  * 隐藏对话框
  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
  **/
  HideDialog_cc_KnowledgeStuTeachLog() {
    I.strPageDispModeId == oe.PopupBox_01 && T.value.hideDialog();
  }
  /**
  * 显示对话框
  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
  **/
  async ShowDialog_cc_KnowledgeStuTeachLog(e) {
    const o = this.ShowDialog_cc_KnowledgeStuTeachLog.name;
    if (I.strPageDispModeId == oe.PopupBox_01) {
      if (T.value == null) {
        const r = c(
          "当前编辑区的EditObj为空，请检查！(in {0}.{1})",
          this.className,
          o
        );
        return console.error(r), alert(r), !1;
      }
      await T.value.showDialog(this);
    }
    return e === "Add" || e === "AddWithMaxId" ? (this.btnSubmitcc_KnowledgeStuTeachLog = "确认添加", this.btnCancelcc_KnowledgeStuTeachLog = "取消添加") : e === "Update" && (this.btnSubmitcc_KnowledgeStuTeachLog = "确认修改", this.btnCancelcc_KnowledgeStuTeachLog = "取消修改"), !0;
  }
  /** 添加新记录
  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecord_Click)
  **/
  async btnAddNewRecord_Click() {
    const e = this.btnAddNewRecord_Click.name;
    try {
      if (this.opType = "Add", await this.ShowDialog_cc_KnowledgeStuTeachLog(this.opType) == !1)
        return;
      ["02", "03", "06"].indexOf(f.PrimaryTypeId) > -1 ? await this.AddNewRecordWithMaxId() : await this.AddNewRecord();
    } catch (o) {
      const r = c("添加新记录初始化不成功,{0}.(in {1}.{2})", o, this.className, e);
      console.error(r), alert(r);
    }
  }
  /** 在数据表里修改记录
  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecordInTab_Click)
  **/
  async btnUpdateRecordInTab_Click(e, o) {
    const r = this.btnUpdateRecordInTab_Click.name;
    try {
      if (this.opType = "Update", await this.ShowDialog_cc_KnowledgeStuTeachLog(this.opType) == !1)
        return;
      this.UpdateRecord(e, o);
    } catch (s) {
      const n = c("(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})", s, this.className, r);
      console.error(n), alert(n);
    }
  }
  /** 修改记录
  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecord_Click)
  **/
  async btnUpdateRecord_Click(e, o) {
    const r = this.btnUpdateRecord_Click.name;
    try {
      if (this.opType = "Update", await this.ShowDialog_cc_KnowledgeStuTeachLog(this.opType) == !1)
        return;
      if (this.bolIsLoadEditRegion = !0, await this.UpdateRecord(e, o) == !1) {
        const a = c("在修改记录时,显示记录数据不成功!");
        console.error(a), alert(a);
        return;
      }
    } catch (s) {
      const n = c("(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})", s, this.className, r);
      console.error(n), alert(n);
    }
  }
  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
  * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnOKUpd_Click)
  **/
  async btnSubmit_Click() {
    const e = this.btnSubmit_Click.name, o = this.btnSubmitcc_KnowledgeStuTeachLog;
    try {
      let r = !1, s = "", n = "";
      switch (o) {
        case "添加":
          this.btnSubmitcc_KnowledgeStuTeachLog = "确认添加", this.btnCancelcc_KnowledgeStuTeachLog = "取消添加", await this.AddNewRecord();
          break;
        case "确认添加":
          r = await this.AddNewRecordSave(), r == !0 && (I.strPageDispModeId == oe.PopupBox_01 && T.value.hideDialog(), this.iShowList != null && this.iShowList.BindGv(f._CurrTabName, this.keyId));
          break;
        case "确认修改":
          r = await this.UpdateRecordSave(), s = r ? "修改成功!" : "修改不成功!", s += "(In cc_KnowledgeStuTeachLog_Edit.btnSubmit_Click)", alert(s), r == !0 && (I.strPageDispModeId == oe.PopupBox_01 && T.value.hideDialog(), this.iShowList != null && this.iShowList.BindGv(f._CurrTabName, this.keyId));
          break;
        default:
          n = c("strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())", o), console.error(n), alert(n);
          break;
      }
    } catch (r) {
      const s = c("(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})", r, this.className, e, o);
      console.error(s), alert(s);
    }
  }
  /**
  *  在用户自定义控件中,设置关键字的值,是否只读
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
   * @param bolReadonly:是否只读
   **/
  SetKeyReadOnly(e) {
    kt("#txtIdStudentInfo").attr("ReadOnly", e.toString());
  }
  /** 为插入记录做准备工作
  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
  **/
  async AddNewRecord() {
    const e = this.AddNewRecord.name;
    console.log("strThisFuncName1", e), T.value.Clear();
  }
  /** 为插入记录做准备工作
  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
  **/
  async AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(!1), T.value.Clear();
  }
  /** 添加新记录,保存函数
  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
  **/
  async AddNewRecordSave() {
    const e = this.AddNewRecordSave.name;
    let o;
    try {
      o = await T.value.GetEditDatacc_KnowledgeStuTeachLogObj();
    } catch (r) {
      const s = c("从界面获取数据不成功,{0}.(in {1}.{2})", r, this.constructor.name, e);
      return console.error(s), alert(s), !1;
    }
    try {
      Xt(o);
    } catch (r) {
      const s = c("检查数据不成功,{0}.(in {1}.{2})", r, this.constructor.name, e);
      return console.error(s), alert(s), !1;
    }
    try {
      let r = !1;
      if (await Oe(o.questionId, o.idStudentInfo) == !0) {
        const n = c("添加记录时,关键字：{0}已经存在!", o.idStudentInfo);
        return console.error(n), alert(n), !1;
      }
      if (r = await Jt(o), r == !0) {
        const n = "添加[学生知识点教学日志(cc_KnowledgeStuTeachLog)]记录成功!";
        this.isShowMsg == !0 && alert(n);
      } else
        alert("添加[学生知识点教学日志(cc_KnowledgeStuTeachLog)]记录不成功!");
      return r;
    } catch (r) {
      const s = c("添加记录不成功,{0}.(in {1}.{2})", r, this.constructor.name, e);
      return console.error(s), alert(s), !1;
    }
  }
  /** 函数功能:把以该关键字的记录内容显示在界面上,
  * 在这里是把值传到表控件中
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_ShowData)
   * @param strIdStudentInfo: 表记录的关键字,显示该表关键字的内容
   **/
  async ShowData(e, o) {
    const r = this.ShowData.name;
    let s = new f();
    try {
      if (await Oe(e, o) == !1) {
        const a = c("关键字:[{0}] 的记录不存在!", o);
        alert(a);
      }
    } catch (n) {
      const a = c("检查相应关键字的记录存在不成功, {0}.(in {1}.{2})", n, this.constructor.name, r);
      console.error(a), alert(a);
    }
    try {
      const n = await ne(e, o);
      if (n == null) {
        const a = c("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.constructor.name, r);
        console.error(a), alert(a);
        return;
      }
      s = n;
    } catch (n) {
      const a = c("根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})", n, this.constructor.name, r);
      console.error(a), alert(a);
    }
    T.value.ShowDataFromcc_KnowledgeStuTeachLogObj(s);
  }
  /** 根据关键字获取相应的记录的对象
  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
  * @param sender">参数列表</param>
  **/
  async UpdateRecord(e, o) {
    const r = this.UpdateRecord.name;
    this.keyId = o;
    try {
      const s = await ne(e, o);
      if (s == null) {
        const n = c("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.className, r);
        return console.error(n), alert(n), !1;
      }
      return await T.value.ShowDataFromcc_KnowledgeStuTeachLogObj(s), console.log("完成UpdateRecord!"), !0;
    } catch (s) {
      const n = c("修改记录时，显示信息出错,{0}.(in {1}.{2})", s, this.className, r);
      return console.error(n), alert(n), !1;
    }
  }
  /** 修改记录
  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecordSave)
  **/
  async UpdateRecordSave() {
    const e = this.UpdateRecordSave.name, o = await T.value.GetEditDatacc_KnowledgeStuTeachLogObj();
    if (o.SetIdStudentInfo(this.keyId), o.sfUpdFldSetStr = o.updFldString, o.idStudentInfo == "" || o.idStudentInfo == null)
      throw console.error("关键字不能为空!"), "关键字不能为空!";
    try {
      Zt(o);
    } catch (r) {
      const s = c("检查数据不成功,{0}.(in {1}.{2})", r, this.constructor.name, e);
      return console.error(s), alert(s), !1;
    }
    try {
      const r = await Yt(o);
      return r == !0, r;
    } catch (r) {
      const s = c("修改记录不成功,{0}.(in {1}.{2})", r, this.constructor.name, e);
      return console.error(s), alert(s), !1;
    }
  }
  /**
  * 设置取消按钮的标题(Used In AddNewRecord())
  **/
  set btnCancelcc_KnowledgeStuTeachLog(e) {
    T.value.strCancelButtonText = e;
  }
  /**
  * 获取按钮的标题
  **/
  get btnSubmitcc_KnowledgeStuTeachLog() {
    return T.value.strSubmitButtonText;
  }
  /**
  * 设置确定按钮的标题(Used In AddNewRecord())
  **/
  set btnSubmitcc_KnowledgeStuTeachLog(e) {
    T.value.strSubmitButtonText = e;
  }
};
d(I, "times4TestShowDialog", 0), //编辑对象的标志，用于存放或者标志一些信息
d(I, "strPageDispModeId", "01"), //PopupBox(弹出框)
d(I, "objPageEdit"), d(I, "objPageEdit2"), d(I, "objPageEdit3");
let le = I;
class Le extends le {
  /**
   按钮单击,用于调用Js函数中btnClick
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
  **/
  static btnEdit_Click(e, o) {
    const r = this.btnEdit_Click.name, s = le.GetPageEditObj("cc_KnowledgeStuTeachLog_EditEx");
    if (s == null) {
      const u = "从预存编辑类获取关键字:[cc_KnowledgeStuTeachLog_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！";
      console.error(u), Mt.warning(u);
      return;
    }
    let n = "", a;
    const i = o;
    switch (e) {
      case "Submit":
        s.btnSubmit_Click();
        break;
      case "CreateWithMaxId":
      case "AddNewRecord":
      case "Create":
        s.btnAddNewRecord_Click();
        break;
      case "UpdateRecord":
      case "Update":
      case "UpdateRecordInTab":
        a = Wt(i), e == "UpdateRecordInTab" ? s.btnUpdateRecordInTab_Click(a.questionId, a.idStudentInfo) : s.btnUpdateRecord_Click(a.questionId, a.idStudentInfo);
        break;
      default:
        n = c(
          "命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!",
          e,
          o,
          this.constructor.name,
          r
        ), console.error(n), alert(n);
        break;
    }
  }
}
class K extends Ce {
  //public static mstrSortcc_KnowledgeStuTeachLogBy = "IdStudentInfo";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  get pageSize() {
    return 10;
  }
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  async InitVarSet() {
    console.log("InitVarSet in cc_KnowledgeStuTeachLogCRUDEx");
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  async InitCtlVar() {
    console.log("InitCtlVar in cc_KnowledgeStuTeachLogCRUDEx");
  }
  BindGv(e, o) {
    console.log(e + o), this.BindGv_cc_KnowledgeStuTeachLog4Func(y.refDivList);
  }
  BindGvCache(e, o) {
    switch (console.log("strPara", o), e) {
      case "cc_KnowledgeStuTeachLog":
        alert("该类没有绑定该函数：[this.BindGv_cc_KnowledgeStuTeachLog4Func]!");
        break;
      default:
        $t(e);
        break;
    }
  }
  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  static btn_Click(e, o) {
    let r, s;
    Ce.objPageCRUD == null && (Ce.objPageCRUD = new K()), r = K.objPageCRUD;
    let n = "";
    const a = We(y.refDivList);
    let i = "";
    switch (e) {
      case "Query":
        r.btnQuery_Click();
        break;
      case "AddNewRecordWithMaxId":
      case "CreateWithMaxId":
      case "AddNewRecord":
      case "Create":
        s = new Le("cc_KnowledgeStuTeachLog_EditEx", r), console.log(s), T.value.btncc_KnowledgeStuTeachLog_Edit_Click(
          e,
          o
        );
        break;
      case "Detail":
        B.value.btncc_KnowledgeStuTeachLog_Detail_Click(
          e,
          o
        );
        break;
      case "UpdateRecord":
      case "Update":
        if (s = new Le("cc_KnowledgeStuTeachLog_EditEx", r), console.log(s), i = Pt(y.refDivList), i == "undefined") {
          n = `在修改记录时，获取记录关键字为:${i},不成功!`, console.error(n), alert(n);
          return;
        }
        T.value.btncc_KnowledgeStuTeachLog_Edit_Click(
          e,
          i
        );
        break;
      case "ExportExcel":
        r.btnExportExcel_Click();
        break;
      case "DelRecord":
      case "Delete":
        if (a.length == 0) {
          alert(`请选择需要删除的[${r.thisTabName}]记录!`);
          return;
        }
        r.btnDelRecord_Click();
        break;
      default:
        n = `命令:${e}在函数(cc_KnowledgeStuTeachLogCRUDEx.btnClick)中没有被处理!`, console.error(n), alert(n);
        break;
    }
  }
  async SortColumn(e, o) {
    switch (e) {
      case "questionName|Ex":
        v.sortcc_KnowledgeStuTeachLogBy = `vQuestionnaire_Sim|QuestionName ${o}|cc_KnowledgeStuTeachLog.QuestionId = vQuestionnaire_Sim.QuestionId`;
        break;
      case "stuId|Ex":
        v.sortcc_KnowledgeStuTeachLogBy = `vStudentInfo_Sim|StuId ${o}|cc_KnowledgeStuTeachLog.IdStudentInfo = vStudentInfo_Sim.IdStudentInfo`;
        break;
      case "stuName|Ex":
        v.sortcc_KnowledgeStuTeachLogBy = `vStudentInfo_Sim|StuName ${o}|cc_KnowledgeStuTeachLog.IdStudentInfo = vStudentInfo_Sim.IdStudentInfo`;
        break;
      default:
        v.sortcc_KnowledgeStuTeachLogBy = c("{0} {1}", e, o);
        break;
    }
    await this.BindGv_cc_KnowledgeStuTeachLog4Func(y.refDivList);
  }
}
const ir = me({
  name: "CcKnowledgeStuTeachLogEdit",
  components: {
    // 组件注册
  },
  setup() {
    const t = Bt(), e = g(0), o = g(""), r = g(""), s = g(""), n = g(""), a = g(""), i = g(""), u = g([]);
    async function m(L) {
      let re = await Je(L);
      if (re == null)
        return;
      u.value.length = 0;
      const we = new w();
      we.questionId = 0, we.questionName = "请选择vQuestionnaire_Sim...", u.value.push(we), re = re.filter((pe) => pe.courseId == L), re.forEach((pe) => u.value.push(pe)), e.value = 0;
    }
    async function b() {
      const L = ae.value;
      await m(L);
    }
    async function P() {
      const L = new f();
      return L.SetQuestionId(e.value), L.SetIdStudentInfo(o.value), L.SetTeachingLog(r.value), L.SetCourseId(ae.value), L.SetMemo(n.value), L.SetUpdDate(Re.getTodayDateTimeStr(1)), L.SetUpdUserId(t.getUserId), L;
    }
    async function fe(L) {
      e.value = L.questionId, o.value = L.idStudentInfo, r.value = L.teachingLog, n.value = L.memo;
    }
    function Se() {
      e.value = 0, o.value = "", r.value = "", n.value = "";
    }
    const Ie = g("学生知识点教学日志编辑"), gt = g("添加"), ft = g("取消"), te = g(!1), St = g("800px");
    return {
      refDivEdit: ut,
      strTitle: Ie,
      dialogVisible: te,
      dialogWidth: St,
      showDialog: async () => {
        te.value = !0, await b();
      },
      handleSave: () => {
        te.value = !1;
      },
      hideDialog: () => {
        te.value = !1;
      },
      strSubmitButtonText: gt,
      strCancelButtonText: ft,
      GetEditDatacc_KnowledgeStuTeachLogObj: P,
      ShowDataFromcc_KnowledgeStuTeachLogObj: fe,
      Clear: Se,
      questionId: e,
      idStudentInfo: o,
      teachingLog: r,
      courseId: s,
      memo: n,
      updDate: a,
      updUserId: i,
      arrvQuestionnaire_Sim: u
    };
  },
  watch: {
    // 数据监听
  },
  mounted() {
  },
  methods: {
    // 方法定义
    /**
     *按钮单击,用于调用Js函数中btnEdit_Click
     *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
     **/
    btncc_KnowledgeStuTeachLog_Edit_Click(t, e) {
      Le.btnEdit_Click(t, e);
    }
  }
});
const cr = { class: "custom-header" }, lr = {
  id: "divEditLayout",
  ref: "refDivEdit",
  class: "tab_layout"
}, ur = {
  id: "tabEdit",
  style: { width: "600px" },
  class: "table table-bordered table-hover table td table-sm"
}, dr = { id: "trQuestionId" }, hr = { class: "text-left" }, mr = ["value"], gr = { id: "trIdStudentInfo" }, fr = { class: "text-left" }, Sr = { id: "trTeachingLog" }, Ir = { class: "text-left" }, wr = { id: "trMemo" }, pr = { class: "text-left" };
function yr(t, e, o, r, s, n) {
  const a = R("font-awesome-icon"), i = R("el-button"), u = R("el-dialog");
  return O(), je(u, {
    modelValue: t.dialogVisible,
    "onUpdate:modelValue": e[7] || (e[7] = (m) => t.dialogVisible = m),
    width: t.dialogWidth,
    "show-close": !1
  }, {
    header: x(() => [
      l("div", cr, [
        l("h3", null, H(t.strTitle), 1),
        A(i, {
          onClick: e[0] || (e[0] = (m) => t.dialogVisible = !1),
          type: "primary"
        }, {
          default: x(() => [
            A(a, { icon: "times" })
          ]),
          _: 1
        })
      ])
    ]),
    footer: x(() => [
      A(i, {
        id: "btnCancelcc_KnowledgeStuTeachLog",
        onClick: e[5] || (e[5] = (m) => t.dialogVisible = !1)
      }, {
        default: x(() => [
          E(H(t.strCancelButtonText), 1)
        ]),
        _: 1
      }),
      A(i, {
        id: "btnSubmitcc_KnowledgeStuTeachLog",
        type: "primary",
        onClick: e[6] || (e[6] = (m) => t.btncc_KnowledgeStuTeachLog_Edit_Click("Submit", ""))
      }, {
        default: x(() => [
          E(H(t.strSubmitButtonText), 1)
        ]),
        _: 1
      })
    ]),
    default: x(() => [
      l("div", lr, [
        l("table", ur, [
          l("tbody", null, [
            l("tr", dr, [
              e[8] || (e[8] = l("td", { class: "text-right" }, [
                l("label", {
                  id: "lblQuestionId",
                  name: "lblQuestionId",
                  class: "col-form-label text-right",
                  style: { width: "90px" }
                }, "题目Id ")
              ], -1)),
              l("td", hr, [
                W(l("select", {
                  id: "ddlQuestionId",
                  "onUpdate:modelValue": e[1] || (e[1] = (m) => t.questionId = m),
                  class: "form-control form-control-sm",
                  style: { width: "400px" }
                }, [
                  (O(!0), q(Ve, null, He(t.arrvQuestionnaire_Sim, (m, b) => (O(), q("option", {
                    key: b,
                    value: m.questionId
                  }, H(m.questionName), 9, mr))), 128))
                ], 512), [
                  [
                    Ot,
                    t.questionId,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            l("tr", gr, [
              e[9] || (e[9] = l("td", { class: "text-right" }, [
                l("label", {
                  id: "lblIdStudentInfo",
                  name: "lblIdStudentInfo",
                  class: "col-form-label text-right",
                  style: { width: "90px" }
                }, "学生流水号 ")
              ], -1)),
              l("td", fr, [
                W(l("input", {
                  id: "txtIdStudentInfo",
                  "onUpdate:modelValue": e[2] || (e[2] = (m) => t.idStudentInfo = m),
                  class: "form-control form-control-sm",
                  style: { width: "400px" }
                }, null, 512), [
                  [Z, t.idStudentInfo]
                ])
              ])
            ]),
            l("tr", Sr, [
              e[10] || (e[10] = l("td", { class: "text-right" }, [
                l("label", {
                  id: "lblTeachingLog",
                  name: "lblTeachingLog",
                  class: "col-form-label text-right",
                  style: { width: "90px" }
                }, "教学日志 ")
              ], -1)),
              l("td", Ir, [
                W(l("input", {
                  id: "txtTeachingLog",
                  "onUpdate:modelValue": e[3] || (e[3] = (m) => t.teachingLog = m),
                  class: "form-control form-control-sm",
                  style: { width: "400px" }
                }, null, 512), [
                  [Z, t.teachingLog]
                ])
              ])
            ]),
            l("tr", wr, [
              e[11] || (e[11] = l("td", { class: "text-right" }, [
                l("label", {
                  id: "lblMemo",
                  name: "lblMemo",
                  class: "col-form-label text-right",
                  style: { width: "90px" }
                }, "备注 ")
              ], -1)),
              l("td", pr, [
                W(l("input", {
                  id: "txtMemo",
                  "onUpdate:modelValue": e[4] || (e[4] = (m) => t.memo = m),
                  class: "form-control form-control-sm",
                  style: { width: "400px" }
                }, null, 512), [
                  [Z, t.memo]
                ])
              ])
            ])
          ])
        ])
      ], 512)
    ]),
    _: 1
  }, 8, ["modelValue", "width"]);
}
const br = /* @__PURE__ */ de(ir, [["render", yr], ["__scopeId", "data-v-8487bfb4"]]), V = class V {
  constructor(e) {
    d(this, "opType", "");
    d(this, "keyId", "");
    //PopupBox(弹出框)
    d(this, "iShowList");
    d(this, "mstrListDiv", "divDataLst");
    d(this, "bolIsLoadDetailRegion", !1);
    //记录是否导入编辑区的变量
    d(this, "divName4Detail", "divDetail");
    this.iShowList = e;
  }
  //编辑区的Id
  /**
  * 获取当前组件的divEdit的层对象
  **/
  get thisDivDetail() {
    return y.refDivDetail;
  }
  /**
  * 获取当前组件的divEdit的层对象
  **/
  get thisDivLayout() {
    return y.refDivDetail;
  }
  /**
  * 隐藏对话框
  * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
  **/
  HideDialog_cc_KnowledgeStuTeachLog() {
    B.value.hideDialog();
  }
  /**
  * 显示对话框
  * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
  **/
  async ShowDialog_cc_KnowledgeStuTeachLog(e) {
    const o = this.ShowDialog_cc_KnowledgeStuTeachLog.name;
    {
      if (B.value == null) {
        const r = c(
          "当前详细信息区的DetailObj为空，请检查！(in {0}.{1})",
          this.constructor.name,
          o
        );
        return console.error(r), alert(r), !1;
      }
      await B.value.showDialog();
    }
    if (y.refDivDetail = B.value.$refs.refDivDetail, y.refDivDetail == null) {
      if (V.times4TestShowDialog < 2)
        V.times4TestShowDialog++, setTimeout(() => {
          this.ShowDialog_cc_KnowledgeStuTeachLog(e);
        }, 100);
      else {
        const r = c("当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})", this.constructor.name, o);
        return console.error(r), alert(r), !1;
      }
      return !1;
    } else
      V.times4TestShowDialog = 0;
    return e === "Detail" && (this.btnCancelcc_KnowledgeStuTeachLog = "关闭"), !0;
  }
  /* 
   在数据表里详细信息记录
   (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
  */
  async btnDetailRecordInTab_Click(e, o) {
    const r = this.btnDetailRecordInTab_Click.name;
    if (this.opType = "Detail", await this.ShowDialog_cc_KnowledgeStuTeachLog("Detail") != !1)
      try {
        if (e == 0 || h(o) == !0)
          return alert("请选择需要详细信息的记录!"), "";
        this.DetailRecord(e, o);
      } catch (n) {
        const a = c("详细信息记录不成功. {0}.(in {1}.{2})", n, this.constructor.name, r);
        console.error(a), alert(a);
      }
  }
  /* 
   根据关键字详细信息记录
    (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord)
    <param name = "sender">参数列表</param>
  */
  async DetailRecord(e, o) {
    const r = this.DetailRecord.name;
    this.btnCancelcc_KnowledgeStuTeachLog = "关闭";
    try {
      const s = await ne(e, o);
      if (s == null) {
        const n = c("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.constructor.name, r);
        return console.error(n), alert(n), !1;
      }
      if (B.value == null) {
        const n = c(
          `当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).
refcc_KnowledgeStuTeachLog_Detail imported from: @/views/Knowledges/cc_KnowledgeStuTeachLogVueShare`,
          this.constructor.name,
          r
        );
        return console.error(n), alert(n), !1;
      }
      await B.value.ShowDataFromcc_KnowledgeStuTeachLogObj(s), console.log("完成DetailRecord!");
    } catch (s) {
      const n = c("显示详细信息不成功,{0}.(in {1}.{2})", s, this.constructor.name, r);
      return console.error(n), alert(n), !1;
    }
    return !0;
  }
  /* 修改记录
   (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
  */
  async btnDetailRecord_Click(e, o) {
    if (this.opType = "Detail", await this.ShowDialog_cc_KnowledgeStuTeachLog("Detail") != !1) {
      if (e == 0) {
        const s = "需要显示详细信息记录的关键字为空,请检查!";
        console.error(s), alert(s);
      }
      if (h(o) == !0) {
        const s = "需要显示详细信息记录的关键字为空,请检查!";
        console.error(s), alert(s);
      }
      this.bolIsLoadDetailRegion = !0, this.DetailRecord(e, o);
    }
  }
  /**
  * 设置取消按钮的标题(Used In DetailRecord())
  **/
  set btnCancelcc_KnowledgeStuTeachLog(e) {
    B.value.strCancelButtonText = e;
  }
};
d(V, "times4TestShowDialog", 0), d(V, "strPageDispModeId", "01");
let Te = V;
class xe extends Te {
  /**
   按钮单击,用于调用Js函数中btnClick
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
  **/
  static btnDetail_Click(e, o) {
    const r = this.btnDetail_Click.name, s = new K(), n = new xe(
      s
    );
    console.log(o, r, n);
    let a;
    switch (e) {
      case "Detail":
        n.btnDetailRecord_Click(0, o);
        break;
      default:
        a = `命令:${e} 在函数(cc_KnowledgeStuTeachLog_Detail.btnClick)中没有被处理!`, console.error(a), alert(a);
        break;
    }
  }
}
const _r = me({
  name: "Cc_KnowledgeStuTeachLog_Detail",
  components: {
    // 组件注册
  },
  setup() {
    const t = g("学生知识点教学日志详细信息"), e = g(), o = g("取消"), r = (m, b) => {
      let P;
      switch (m) {
        case "btnCancelcc_KnowledgeStuTeachLog":
          o.value = b;
          break;
        default:
          P = `按钮Id:${m} 在函数中没有被处理!`, console.error(P), alert(P);
          break;
      }
    }, s = (m) => {
      let b;
      switch (m) {
        case "btnCancelcc_KnowledgeStuTeachLog":
          return o.value;
        default:
          b = `按钮Id:${m} 在函数中没有被处理!`, console.error(b), alert(b);
          break;
      }
    }, n = g(!1), a = g("800px");
    return {
      strTitle: t,
      refDivDetail: e,
      dialogVisible: n,
      dialogWidth: a,
      showDialog: () => new Promise((m) => {
        n.value = !0, m("对话框打开成功"), setTimeout(() => {
          console.log("对话框已经显示!");
        }, 1e3);
      }),
      hideDialog: () => {
        n.value = !1;
      },
      strCancelButtonText: o,
      SetButtonText: r,
      GetButtonText: s
    };
  },
  watch: {
    // 数据监听
  },
  mounted() {
  },
  methods: {
    // 方法定义
    btnClick(t, e) {
      alert(c("{0}-{1}", t, e));
    },
    /**
     *按钮单击,用于调用Js函数中btnDetail_Click
     *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
     **/
    btncc_KnowledgeStuTeachLog_Detail_Click(t, e) {
      xe.btnDetail_Click(t, e);
    }
  }
});
const Cr = { class: "custom-header" }, Lr = {
  id: "divDetailLayout",
  ref: "refDivDetail",
  class: "tab_layout"
};
function Tr(t, e, o, r, s, n) {
  const a = R("font-awesome-icon"), i = R("el-button"), u = R("el-dialog");
  return O(), je(u, {
    modelValue: t.dialogVisible,
    "onUpdate:modelValue": e[2] || (e[2] = (m) => t.dialogVisible = m),
    width: t.dialogWidth,
    "show-close": !1
  }, {
    header: x(() => [
      l("div", Cr, [
        l("h3", null, H(t.strTitle), 1),
        A(i, {
          onClick: e[0] || (e[0] = (m) => t.dialogVisible = !1),
          type: "primary"
        }, {
          default: x(() => [
            A(a, { icon: "times" })
          ]),
          _: 1
        })
      ])
    ]),
    footer: x(() => [
      A(i, {
        id: "btnCancelcc_KnowledgeStuTeachLog",
        onClick: e[1] || (e[1] = (m) => t.dialogVisible = !1)
      }, {
        default: x(() => [
          E(H(t.strCancelButtonText), 1)
        ]),
        _: 1
      })
    ]),
    default: x(() => [
      l("div", Lr, e[3] || (e[3] = [
        l("table", {
          id: "tabEdit",
          style: { width: "600px" },
          class: "table table-bordered table-hover table td table-sm"
        }, [
          l("tbody", null, [
            l("tr", null, [
              l("td", { class: "text-right" }, [
                l("span", {
                  id: "spnQuestionId_d",
                  name: "spnQuestionId_d",
                  CssClass: "col-form-label text-right"
                }, "题目Id")
              ]),
              l("td", { class: "text-left" }, [
                l("label", {
                  id: "lblQuestionId_d",
                  name: "lblQuestionId_d",
                  class: "text-primary",
                  style: { width: "150px" }
                })
              ]),
              l("td", { class: "text-right" }, [
                l("span", {
                  id: "spnIdStudentInfo_d",
                  name: "spnIdStudentInfo_d",
                  CssClass: "col-form-label text-right"
                }, "学生流水号")
              ]),
              l("td", { class: "text-left" }, [
                l("label", {
                  id: "lblIdStudentInfo_d",
                  name: "lblIdStudentInfo_d",
                  class: "text-primary",
                  style: { width: "150px" }
                })
              ])
            ]),
            l("tr", null, [
              l("td", { class: "text-right" }, [
                l("span", {
                  id: "spnTeachingLog_d",
                  name: "spnTeachingLog_d",
                  CssClass: "col-form-label text-right"
                }, "教学日志")
              ]),
              l("td", { class: "text-left" }, [
                l("label", {
                  id: "lblTeachingLog_d",
                  name: "lblTeachingLog_d",
                  class: "text-primary",
                  style: { width: "150px" }
                })
              ]),
              l("td", { class: "text-right" }, [
                l("span", {
                  id: "spnCourseId_d",
                  name: "spnCourseId_d",
                  CssClass: "col-form-label text-right"
                }, "课程Id")
              ]),
              l("td", { class: "text-left" }, [
                l("label", {
                  id: "lblCourseId_d",
                  name: "lblCourseId_d",
                  class: "text-primary",
                  style: { width: "150px" }
                })
              ])
            ]),
            l("tr", null, [
              l("td", { class: "text-right" }, [
                l("span", {
                  id: "spnMemo_d",
                  name: "spnMemo_d",
                  CssClass: "col-form-label text-right"
                }, "备注")
              ]),
              l("td", { class: "text-left" }, [
                l("label", {
                  id: "lblMemo_d",
                  name: "lblMemo_d",
                  class: "text-primary",
                  style: { width: "150px" }
                })
              ])
            ])
          ])
        ], -1)
      ]), 512)
    ]),
    _: 1
  }, 8, ["modelValue", "width"]);
}
const vr = /* @__PURE__ */ de(_r, [["render", Tr], ["__scopeId", "data-v-b339663b"]]), Dr = me({
  name: "CcKnowledgeStuTeachLogList",
  components: {
    // 组件注册
  },
  props: {
    items: {
      type: Array,
      required: !0
    },
    showErrorMessage: {
      type: Boolean,
      required: !0,
      default: !1
    },
    emptyRecNumInfo: {
      type: String,
      required: !0,
      default: ""
    }
  },
  emits: ["on-edit-tab-relainfo", "on-sort-column"],
  setup(t, { emit: e }) {
    const o = g(!1), r = g(""), s = g("asc");
    return {
      btnClickInRow: (u) => {
        e("on-edit-tab-relainfo", {
          tabId: u.tabId,
          content: "这是当前表的关键字"
        });
      },
      sortColumn: (u) => {
        r.value === u ? s.value = s.value === "Asc" ? "Desc" : "Asc" : (r.value = u, s.value = "Asc"), e("on-sort-column", {
          sortColumnKey: r.value,
          sortDirection: s.value,
          content: "这是当前列表的列头排序"
        });
      },
      sortColumnKey: r,
      sortDirection: s,
      selectAllChecked: o,
      selectAllRows: () => {
        console.error(o.value);
      }
    };
  },
  watch: {
    // 监听 selectAllChecked 变化，当复选框列头状态改变时，修改所有记录的选中状态
    selectAllChecked(t) {
      this.items.forEach((e) => e.checked = t);
    }
  },
  methods: {}
});
const Nr = { key: 0 }, xr = { key: 1 }, Fr = { class: "text-primary" }, kr = { style: { width: "30px" } }, Mr = ["id", "onUpdate:modelValue"], $r = ["innerHTML"], Pr = ["innerHTML"], Br = ["innerHTML"], Ur = ["innerHTML"], Or = ["innerHTML"], Kr = ["innerHTML"];
function Ar(t, e, o, r, s, n) {
  return O(), q("div", null, [
    t.emptyRecNumInfo !== "" && t.items.length === 0 ? (O(), q("span", Nr, "{ emptyRecNumInfo }")) : (O(), q("table", xr, [
      l("tbody", null, [
        l("tr", Fr, [
          l("th", kr, [
            W(l("input", {
              "onUpdate:modelValue": e[0] || (e[0] = (a) => t.selectAllChecked = a),
              type: "checkbox",
              onChange: e[1] || (e[1] = (...a) => t.selectAllRows && t.selectAllRows(...a))
            }, null, 544), [
              [Pe, t.selectAllChecked]
            ])
          ]),
          l("th", {
            onClick: e[2] || (e[2] = (a) => t.sortColumn("questionName|Ex"))
          }, [
            e[8] || (e[8] = E(" 题目名称 ")),
            l("span", null, [
              l("i", {
                class: z(
                  t.sortColumnKey === "questionName|Ex" ? t.sortDirection === "Asc" ? "arrow-up" : "arrow-down" : "arrow-neutral"
                )
              }, null, 2)
            ])
          ]),
          l("th", {
            onClick: e[3] || (e[3] = (a) => t.sortColumn("stuId|Ex"))
          }, [
            e[9] || (e[9] = E(" 学号 ")),
            l("span", null, [
              l("i", {
                class: z(
                  t.sortColumnKey === "stuId|Ex" ? t.sortDirection === "Asc" ? "arrow-up" : "arrow-down" : "arrow-neutral"
                )
              }, null, 2)
            ])
          ]),
          l("th", {
            onClick: e[4] || (e[4] = (a) => t.sortColumn("stuName|Ex"))
          }, [
            e[10] || (e[10] = E(" 姓名 ")),
            l("span", null, [
              l("i", {
                class: z(
                  t.sortColumnKey === "stuName|Ex" ? t.sortDirection === "Asc" ? "arrow-up" : "arrow-down" : "arrow-neutral"
                )
              }, null, 2)
            ])
          ]),
          l("th", {
            onClick: e[5] || (e[5] = (a) => t.sortColumn("teachingLog"))
          }, [
            e[11] || (e[11] = E(" 教学日志 ")),
            l("span", null, [
              l("i", {
                class: z(
                  t.sortColumnKey === "teachingLog" ? t.sortDirection === "Asc" ? "arrow-up" : "arrow-down" : "arrow-neutral"
                )
              }, null, 2)
            ])
          ]),
          l("th", {
            onClick: e[6] || (e[6] = (a) => t.sortColumn("updDate"))
          }, [
            e[12] || (e[12] = E(" 修改日期 ")),
            l("span", null, [
              l("i", {
                class: z(
                  t.sortColumnKey === "updDate" ? t.sortDirection === "Asc" ? "arrow-up" : "arrow-down" : "arrow-neutral"
                )
              }, null, 2)
            ])
          ]),
          l("th", {
            onClick: e[7] || (e[7] = (a) => t.sortColumn("memo"))
          }, [
            e[13] || (e[13] = E(" 备注 ")),
            l("span", null, [
              l("i", {
                class: z(
                  t.sortColumnKey === "memo" ? t.sortDirection === "Asc" ? "arrow-up" : "arrow-down" : "arrow-neutral"
                )
              }, null, 2)
            ])
          ])
        ]),
        (O(!0), q(Ve, null, He(t.items, (a, i) => (O(), q("tr", {
          key: i,
          class: "text-secondary"
        }, [
          l("td", null, [
            W(l("input", {
              id: "chk" + a.questionId + a.idStudentInfo,
              "onUpdate:modelValue": (u) => a.checked = u,
              type: "checkbox",
              name: "chkInTab",
              class: "CheckInTab"
            }, null, 8, Mr), [
              [Pe, a.checked]
            ])
          ]),
          l("td", {
            innerHTML: a.questionName
          }, null, 8, $r),
          l("td", {
            innerHTML: a.stuId
          }, null, 8, Pr),
          l("td", {
            innerHTML: a.stuName
          }, null, 8, Br),
          l("td", {
            innerHTML: a.teachingLog
          }, null, 8, Ur),
          l("td", {
            innerHTML: a.updDate
          }, null, 8, Or),
          l("td", {
            innerHTML: a.memo
          }, null, 8, Kr)
        ]))), 128))
      ])
    ]))
  ]);
}
const Er = /* @__PURE__ */ de(Dr, [["render", Ar], ["__scopeId", "data-v-9673becd"]]), Rr = me({
  name: "Cc_KnowledgeStuTeachLogCRUD",
  components: {
    // 组件注册
    cc_KnowledgeStuTeachLog_EditCom: br,
    cc_KnowledgeStuTeachLog_DetailCom: vr,
    cc_KnowledgeStuTeachLog_ListCom: Er
  },
  setup() {
    ae.value = ee.courseId;
    const t = g([]);
    async function e() {
    }
    async function o() {
    }
    const r = g("学生知识点教学日志维护");
    Kt(() => {
      e(), o(), K.vuebtn_Click = n, K.GetPropValue = s, new K().PageLoadCache();
    });
    function s(a) {
      switch (a) {
        case "strTitle":
          return r.value;
        default:
          return "";
      }
    }
    function n(a, i) {
      K.btn_Click(a, i);
    }
    return {
      showErrorMessage: dt,
      dataListcc_KnowledgeStuTeachLog: ht,
      emptyRecNumInfo: nr,
      strTitle: r,
      btn_Click: n,
      ...y,
      refDivLayout: at,
      refDivQuery: it,
      refDivFunction: ct,
      refDivList: lt,
      refcc_KnowledgeStuTeachLog_Edit: T,
      refcc_KnowledgeStuTeachLog_Detail: B,
      refcc_KnowledgeStuTeachLog_List: Y,
      courseId_q: mt,
      stuId_q: ie,
      stuName_q: ce,
      arrcc_Course: t
    };
  },
  watch: {
    // 数据监听
  },
  mounted() {
  },
  methods: {
    /** 函数:编辑表的相关信息
     * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
     **/
    async EditTabRelaInfo(t) {
      console.log("data:", t), Ut.push({ name: "editcc_KnowledgeStuTeachLog", params: { courseId: t.courseId } });
    },
    /** 函数:根据表列进行排序
     * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
     **/
    async SortColumn(t) {
      console.log("data:", t), new K().SortColumn(t.sortColumnKey, t.sortDirection);
    }
    // 方法定义
  }
}), Qr = {
  id: "divLayout",
  ref: "refDivLayout",
  class: "div_layout"
}, Gr = { style: { position: "relative", width: "648px", height: "37px", left: "0px", top: "0px" } }, qr = {
  id: "lblViewTitle",
  name: "lblViewTitle",
  class: "h5"
}, Wr = {
  id: "divQuery",
  ref: "refDivQuery",
  class: "div_query"
}, jr = {
  id: "tabEdit",
  style: { width: "900px" },
  class: "table table-bordered table-hover table td table-sm"
}, Vr = { class: "text-left" }, Hr = { class: "text-left" }, zr = {
  id: "divFunction",
  ref: "refDivFunction",
  class: "table table-bordered table-hover"
}, Jr = { class: "nav" }, Yr = { class: "nav-item ml-3" }, Xr = { class: "nav-item ml-3" }, Zr = { class: "nav-item ml-3" }, eo = { class: "nav-item ml-3" }, to = { class: "nav-item ml-3" }, ro = {
  id: "divList",
  ref: "refDivList",
  class: "div_List"
};
function oo(t, e, o, r, s, n) {
  const a = R("cc_KnowledgeStuTeachLog_ListCom"), i = R("cc_KnowledgeStuTeachLog_EditCom"), u = R("cc_KnowledgeStuTeachLog_DetailCom");
  return O(), q("div", Qr, [
    l("div", Gr, [
      l("label", qr, H(t.strTitle) + "-Share ", 1),
      e[7] || (e[7] = l("label", {
        id: "lblMsg_List",
        name: "lblMsg_List",
        class: "text-warning",
        style: { width: "250px" }
      }, null, -1))
    ]),
    l("div", Wr, [
      l("table", jr, [
        l("tbody", null, [
          l("tr", null, [
            e[8] || (e[8] = l("td", { class: "text-right" }, [
              l("label", {
                id: "lblStuId_q",
                name: "lblStuId_q",
                class: "col-form-label text-right",
                style: { width: "90px" }
              }, "学号 ")
            ], -1)),
            l("td", Vr, [
              W(l("input", {
                id: "txtStuId_q",
                "onUpdate:modelValue": e[0] || (e[0] = (m) => t.stuId_q = m),
                class: "form-control form-control-sm",
                style: { width: "120px" }
              }, null, 512), [
                [Z, t.stuId_q]
              ])
            ]),
            e[9] || (e[9] = l("td", { class: "text-right" }, [
              l("label", {
                id: "lblStuName_q",
                name: "lblStuName_q",
                class: "col-form-label text-right",
                style: { width: "90px" }
              }, "姓名 ")
            ], -1)),
            l("td", Hr, [
              W(l("input", {
                id: "txtStuName_q",
                "onUpdate:modelValue": e[1] || (e[1] = (m) => t.stuName_q = m),
                class: "form-control form-control-sm",
                style: { width: "200px" }
              }, null, 512), [
                [Z, t.stuName_q]
              ])
            ])
          ])
        ])
      ])
    ], 512),
    l("div", zr, [
      l("ul", Jr, [
        e[10] || (e[10] = l("li", { class: "nav-item" }, [
          l("label", {
            id: "lblcc_KnowledgeStuTeachLogList",
            name: "lblcc_KnowledgeStuTeachLogList",
            class: "col-form-label text-info",
            style: { width: "250px" }
          }, "学生知识点教学日志列表 ")
        ], -1)),
        l("li", Yr, [
          l("button", {
            id: "btnQuery",
            name: "btnQuery",
            class: "btn btn-outline-info btn-sm text-nowrap",
            onClick: e[2] || (e[2] = (m) => t.btn_Click("Query", ""))
          }, "查询")
        ]),
        l("li", Xr, [
          l("button", {
            id: "btnCreate",
            name: "btnCreate",
            class: "btn btn-outline-info btn-sm text-nowrap",
            onClick: e[3] || (e[3] = (m) => t.btn_Click("Create", ""))
          }, "添加")
        ]),
        l("li", Zr, [
          l("button", {
            id: "btnUpdate",
            name: "btnUpdate",
            class: "btn btn-outline-info btn-sm text-nowrap",
            onClick: e[4] || (e[4] = (m) => t.btn_Click("Update", ""))
          }, "修改")
        ]),
        l("li", eo, [
          l("button", {
            id: "btnDelete",
            name: "btnDelete",
            class: "btn btn-outline-info btn-sm text-nowrap",
            onClick: e[5] || (e[5] = (m) => t.btn_Click("Delete", ""))
          }, "删除")
        ]),
        l("li", to, [
          l("button", {
            id: "btnExportExcel",
            name: "btnExportExcel",
            class: "btn btn-outline-warning btn-sm text-nowrap",
            onClick: e[6] || (e[6] = (m) => t.btn_Click("ExportExcel", ""))
          }, "导出Excel")
        ])
      ])
    ], 512),
    l("div", ro, [
      A(a, {
        ref: "refcc_KnowledgeStuTeachLog_List",
        items: t.dataListcc_KnowledgeStuTeachLog,
        "show-error-message": t.showErrorMessage,
        "empty-rec-num-info": t.emptyRecNumInfo,
        onOnEditTabRelainfo: t.EditTabRelaInfo,
        onOnSortColumn: t.SortColumn
      }, null, 8, ["items", "show-error-message", "empty-rec-num-info", "onOnEditTabRelainfo", "onOnSortColumn"]),
      e[11] || (e[11] = l("div", {
        id: "divPager",
        class: "pager"
      }, null, -1)),
      e[12] || (e[12] = l("input", {
        id: "hidSortcc_KnowledgeStuTeachLogBy",
        type: "hidden"
      }, null, -1))
    ], 512),
    A(i, { ref: "refcc_KnowledgeStuTeachLog_Edit" }, null, 512),
    A(u, { ref: "refcc_KnowledgeStuTeachLog_Detail" }, null, 512)
  ], 512);
}
const uo = /* @__PURE__ */ de(Rr, [["render", oo]]);
export {
  uo as default
};
