var tt = Object.defineProperty;
var st = (n, t, e) => t in n ? tt(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var i = (n, t, e) => (st(n, typeof t != "symbol" ? t + "" : t, e), e);
import { u as N, a as it, $ as C, C as Fe, b as rt, A as he, S as at, c as Ae, I as K, d as o, m as H, U as Ve, e as R, f as le, r as x, _ as Ce, g as Se, G as ot, h as ze, i as We, j as qe, F as E, k as oe, D as nt, l as Le, n as Ue, o as dt, p as $e, q as lt, Q as ct, s as ut, t as ht, H as pe, v as fe, w as Ct, x as xe, y as ye, z as be, B as Xe, E as mt, X as gt } from "./index-b2b0ebb3.mjs";
import { defineComponent as Te, ref as l, onMounted as ve, openBlock as ie, createElementBlock as ne, createStaticVNode as pt, reactive as X, resolveComponent as Q, createBlock as ft, withCtx as ee, createElementVNode as I, toDisplayString as V, createVNode as q, createTextVNode as ce, normalizeStyle as It, Fragment as St, renderList as yt, withDirectives as bt, vShow as Tt } from "vue";
var U;
let ae = (U = class {
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
    const t = N();
    try {
      t.getUserId != "" && (it(
        U.divLayout,
        "lnkUserName",
        `${t.getUserName}(${t.getRoleName})`
      ), C("#spanMajorName").html(`${t.getMajorName}专业`), U.GetPropValue("isShowEduCls") == "true" && (t.getRoleId == "00620001" ? await Fe(
        U.divLayout,
        U.EduCls_Click,
        "spnEduClsName_Head"
      ) : t.getRoleId == "00620002" || t.getRoleId == "00620013" ? await Fe(
        U.divLayout,
        U.EduCls_Click,
        "spnEduClsName_Head"
      ) : await rt(
        U.divLayout,
        U.EduCls_Click,
        "spnEduClsName_Head"
      )));
    } catch (e) {
      const s = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(s), alert(s);
    }
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  static btn_Click(t, e) {
    switch (console.log(e), t) {
      case "CopyRecord":
      case "Clone":
        break;
      case "ExportExcel":
        break;
      default:
        he(t, "PageEnd_Game.btn_Click");
        break;
    }
  }
  //教学班教师
  static async EduCls_Click(t, e, s, r) {
    at(U.divLayout, "spnEduClsName_Head", s);
    const d = await Ae(e);
    K(d) == !1 && (o.courseId = d), o.idCurrEduCls = e, o.eduClsTypeId = r, o.eduClsName = s;
    const h = C("#Paper_iframe")[0];
    h != null && h.contentWindow != null && h.contentWindow.btnQuery_Click(), H.success("已切换教学班！");
  }
}, i(U, "vuebtn_Click"), i(U, "GetPropValue"), i(U, "divLayout"), U);
const vt = Te({
  name: "PageEnd_Game",
  components: {
    // 组件注册
  },
  props: {
    title: {
      type: String,
      required: !0
    }
    // isShowEduCls: {
    //   type: String,
    //   required: true,
    // },
    // isShowPaperIframe: {
    //   type: String,
    //   required: true,
    // },
    // isShowTopic: {
    //   type: String,
    //   required: true,
    // },
    // isShowMajor: {
    //   type: String,
    //   required: true,
    // },
    // isShowSearch: {
    //   type: String,
    //   required: true,
    // },
    // isShowAttention: {
    //   type: String,
    //   required: true,
    // },
    // paperId: {
    //   type: String,
    //   required: true,
    // },
    // headerHeight: {
    //   type: String,
    //   required: true,
    //   default: '60',
    // },
  },
  setup(n) {
    const t = N(), e = l("关注论文"), s = l(), r = l(), d = l(!0), h = l(!0), c = l("pyf");
    async function u() {
      console.log(c);
    }
    ve(() => {
      switch (ae.divLayout = r.value, ae.vuebtn_Click = p, ae.GetPropValue = m, t.getUserType === Ve.middle_School && (d.value = !1, e.value = "关注课文"), t.roleId) {
        case R.System_Admin_00620001:
        case R.K_12_Teacher_00620013:
        case R.Regular_Teacher_00620002:
        case R.Secondary_School_System_Admin_00620018:
          h.value = !0;
          break;
        default:
          h.value = !1;
          break;
      }
    });
    function m(f) {
      switch (f) {
        case "title":
          return n.title;
        default:
          return "";
      }
    }
    function p(f, _) {
      switch (console.log(_), f) {
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
          x.push("/about"), console.log("router.push('/about');");
          break;
      }
      ae.btn_Click(f, _);
    }
    return {
      refDivLayout_End: r,
      btn_Click: p,
      getUser: u,
      isShowMajor1: d,
      canEditEduCls: h,
      UserName: c,
      selectedValue: s,
      focusPaper: e
      // headerStyle,
    };
  },
  methods: {
    async EduClsItemChange() {
      const n = this.selectedValue, t = this.refDivLayout_End, e = await le(n);
      e != null && ae.EduCls_Click(
        t,
        e.idCurrEduCls,
        e.eduClsName,
        e.eduClsTypeId
      );
    }
  }
});
const _t = {
  id: "divLayout_End",
  ref: "refDivLayout_End"
};
function wt(n, t, e, s, r, d) {
  return ie(), ne("div", _t, t[0] || (t[0] = [
    pt('<div class="footer" data-v-71f57e11><div class="foot" data-v-71f57e11><div class="fleft" data-v-71f57e11><span class="flogo" data-v-71f57e11><a href="javascript:void(0)" title="游戏化教育平台" data-v-71f57e11>游戏化教育平台</a></span><ul class="flist" data-v-71f57e11><li id="flfirst" data-v-71f57e11><a href="http://www.shnu.edu.cn/" target="_blank" data-v-71f57e11>上海师范大学</a></li><li id="flfirst" data-v-71f57e11><a href="https://www.sh-tz.com/" target="_blank" data-v-71f57e11>上海泰泽</a></li></ul><div class="copyright" data-v-71f57e11> Copyright © 2021 游戏化教育平台v1 </div></div><div class="fright" data-v-71f57e11><ul class="rlist" data-v-71f57e11><li data-v-71f57e11><a href="77240613@qq.com" class="flink3" data-v-71f57e11>Email</a></li></ul><ul class="fimg" data-v-71f57e11><li data-v-71f57e11><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=77240613&amp;site=qq&amp;menu=yes" class="fimglink1" title="关注微信" data-v-71f57e11></a></li><li data-v-71f57e11><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=77240613&amp;site=qq&amp;menu=yes" class="fimglink2" title="制作人QQ" data-v-71f57e11></a></li></ul></div></div></div>', 1)
  ]), 512);
}
const Fs = /* @__PURE__ */ Ce(vt, [["render", wt], ["__scopeId", "data-v-71f57e11"]]), y = class y extends Se {
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
    i(this, "mlngLoginLogId", 0);
    //LoginLogId
    i(this, "mstrLoginLogNumber", "");
    //LoginLogNumber
    i(this, "mstrLoginIP", "");
    //LoginIP
    i(this, "mstrFailReason", "");
    //FailReason
    i(this, "mstrLoginResult", "");
    //LoginResult
    i(this, "mstrLoginTime", "");
    //LoginTime
    i(this, "mstrLoginUserId", "");
    //LoginUserId
    i(this, "mstrOnlineTime", "");
    //OnlineTime
    i(this, "mstrOutTime", "");
    //OutTime
    i(this, "mstrMemo", "");
    /**
     * 设置对象中公共属性.
     * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
    */
    i(this, "loginLogId", 0);
    //LoginLogId
    i(this, "loginLogNumber", "");
    //LoginLogNumber
    i(this, "loginIP", "");
    //LoginIP
    i(this, "failReason", "");
    //FailReason
    i(this, "loginResult", "");
    //LoginResult
    i(this, "loginTime", "");
    //LoginTime
    i(this, "loginUserId", "");
    //LoginUserId
    i(this, "onlineTime", "");
    //OnlineTime
    i(this, "outTime", "");
    //OutTime
    i(this, "memo", "");
  }
  //备注
  /**
   * LoginLogId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetLoginLogId(e) {
    e != null && (this.loginLogId = e, this.hmProperty.loginLogId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * LoginLogNumber(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetLoginLogNumber(e) {
    e != null && (this.loginLogNumber = e, this.hmProperty.loginLogNumber = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * LoginIP(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetLoginIP(e) {
    e != null && (this.loginIP = e, this.hmProperty.loginIP = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * FailReason(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetFailReason(e) {
    e != null && (this.failReason = e, this.hmProperty.failReason = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * LoginResult(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetLoginResult(e) {
    e != null && (this.loginResult = e, this.hmProperty.loginResult = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * LoginTime(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetLoginTime(e) {
    e != null && (this.loginTime = e, this.hmProperty.loginTime = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * LoginUserId(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetLoginUserId(e) {
    e != null && (this.loginUserId = e, this.hmProperty.loginUserId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * OnlineTime(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetOnlineTime(e) {
    e != null && (this.onlineTime = e, this.hmProperty.onlineTime = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * OutTime(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetOutTime(e) {
    e != null && (this.outTime = e, this.hmProperty.outTime = !0, this.sfUpdFldSetStr = this.updFldString);
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
    let s = "";
    switch (e) {
      case y.con_LoginLogId:
        return this.loginLogId;
      case y.con_LoginLogNumber:
        return this.loginLogNumber;
      case y.con_LoginIP:
        return this.loginIP;
      case y.con_FailReason:
        return this.failReason;
      case y.con_LoginResult:
        return this.loginResult;
      case y.con_LoginTime:
        return this.loginTime;
      case y.con_LoginUserId:
        return this.loginUserId;
      case y.con_OnlineTime:
        return this.onlineTime;
      case y.con_OutTime:
        return this.outTime;
      case y.con_Memo:
        return this.memo;
      case "sfUpdFldSetStr":
        return this.sfUpdFldSetStr;
      case "sfFldComparisonOp":
        return this.sfFldComparisonOp;
      default:
        return s = `字段名:[${e}]在表对象:[LoginLog]中不存在!`, console.error(s), "";
    }
  }
  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
  */
  SetFldValue(e, s) {
    const r = "SetFldValue";
    let d = "";
    switch (e) {
      case y.con_LoginLogId:
        this.loginLogId = Number(s), this.hmProperty.loginLogId = !0;
        break;
      case y.con_LoginLogNumber:
        this.loginLogNumber = s, this.hmProperty.loginLogNumber = !0;
        break;
      case y.con_LoginIP:
        this.loginIP = s, this.hmProperty.loginIP = !0;
        break;
      case y.con_FailReason:
        this.failReason = s, this.hmProperty.failReason = !0;
        break;
      case y.con_LoginResult:
        this.loginResult = s, this.hmProperty.loginResult = !0;
        break;
      case y.con_LoginTime:
        this.loginTime = s, this.hmProperty.loginTime = !0;
        break;
      case y.con_LoginUserId:
        this.loginUserId = s, this.hmProperty.loginUserId = !0;
        break;
      case y.con_OnlineTime:
        this.onlineTime = s, this.hmProperty.onlineTime = !0;
        break;
      case y.con_OutTime:
        this.outTime = s, this.hmProperty.outTime = !0;
        break;
      case y.con_Memo:
        this.memo = s, this.hmProperty.memo = !0;
        break;
      case "sfUpdFldSetStr":
        this.sfUpdFldSetStr = s;
        break;
      case "sfFldComparisonOp":
        this.sfFldComparisonOp = s;
        break;
      default:
        d = `字段名:[${e}]在表对象:[LoginLog]中不存在!(in ${this.constructor.name}.${r})`, console.error(d);
        break;
    }
  }
  //备注
  /**
  * 常量:"LoginLogId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_LoginLogId() {
    return "loginLogId";
  }
  //LoginLogId
  /**
  * 常量:"LoginLogNumber"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_LoginLogNumber() {
    return "loginLogNumber";
  }
  //LoginLogNumber
  /**
  * 常量:"LoginIP"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_LoginIP() {
    return "loginIP";
  }
  //LoginIP
  /**
  * 常量:"FailReason"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_FailReason() {
    return "failReason";
  }
  //FailReason
  /**
  * 常量:"LoginResult"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_LoginResult() {
    return "loginResult";
  }
  //LoginResult
  /**
  * 常量:"LoginTime"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_LoginTime() {
    return "loginTime";
  }
  //LoginTime
  /**
  * 常量:"LoginUserId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_LoginUserId() {
    return "loginUserId";
  }
  //LoginUserId
  /**
  * 常量:"OnlineTime"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_OnlineTime() {
    return "onlineTime";
  }
  //OnlineTime
  /**
  * 常量:"OutTime"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_OutTime() {
    return "outTime";
  }
  //OutTime
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
  SetCondFldValue(e, s, r) {
    this.SetFldValue(e, s), Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, e) == !1 ? this.dicFldComparisonOp[e] = r : this.dicFldComparisonOp[e] = r, this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
  /**
  * 判断一个字符串是否是类的属性
  * @param propName: 属性名
  * @returns 是否是属性
  */
  static hasProperty(e) {
    return new y().hasOwnProperty(e);
  }
};
i(y, "_RefreshTimeLst", new Array()), i(y, "CacheAddiCondition", ""), //缓存附加条件,作为向后台调取数据的附加条件
i(y, "CacheModeId", "02"), //客户端缓存
i(y, "PrimaryTypeId", "02"), //identity
i(y, "IsUseDelSign", !1), //使用删除标志,记录不能删除,仅设置删除标志
i(y, "WhereFormat", ""), //条件格式串
i(y, "_CurrTabName", "LoginLog"), //当前表名,与该类相关的表名
i(y, "_KeyFldName", "LoginLogId"), //当前表中的关键字名称,与该类相关的表中关键字名
i(y, "mintAttributeCount", 10), i(y, "AttributeName", ["loginLogId", "loginLogNumber", "loginIP", "failReason", "loginResult", "loginTime", "loginUserId", "onlineTime", "outTime", "memo"]);
let Ie = y;
const Dt = "LoginLogApi", je = "loginLog";
async function Pt(n) {
  const t = "AddNewRecordAsync", s = ot(Dt, "AddNewRecord"), d = {
    headers: {
      Authorization: `${ze.get(We)}`
    }
  };
  try {
    const c = (await qe.post(s, n, d)).data;
    if (c.errorId == 0)
      return c.returnBool;
    throw console.error(c.errorMsg), c.errorMsg;
  } catch (h) {
    if (console.error(h), h.statusText == null)
      throw h;
    if (h.statusText == "error") {
      const c = E("网络错误!访问地址:{0}不成功!(in {1}.{2})", s, je, t);
      throw console.error(c), c;
    } else if (h.statusText == "Not Found") {
      const c = E("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", s, je, t);
      throw console.error(c), c;
    } else
      throw h.statusText;
  }
}
const v = class v extends Se {
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
    i(this, "mlngmId", 0);
    //mId
    i(this, "mstrDefaValNameId", "");
    //缺省值名称Id
    i(this, "mstrUserId", "");
    //用户ID
    i(this, "mstrUserDefaValue", "");
    //用户缺省值
    i(this, "mstrUpdDate", "");
    //修改日期
    i(this, "mstrUpdUser", "");
    //修改人
    i(this, "mstrMemo", "");
    /**
     * 设置对象中公共属性.
     * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
    */
    i(this, "mId", 0);
    //mId
    i(this, "defaValNameId", "");
    //缺省值名称Id
    i(this, "userId", "");
    //用户ID
    i(this, "userDefaValue", "");
    //用户缺省值
    i(this, "updDate", "");
    //修改日期
    i(this, "updUser", "");
    //修改人
    i(this, "memo", "");
  }
  //备注
  /**
   * mId(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetmId(e) {
    e != null && (this.mId = e, this.hmProperty.mId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 缺省值名称Id(说明:;字段类型:varchar;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetDefaValNameId(e) {
    e != null && (this.defaValNameId = e, this.hmProperty.defaValNameId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetUserId(e) {
    e != null && (this.userId = e, this.hmProperty.userId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 用户缺省值(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetUserDefaValue(e) {
    e != null && (this.userDefaValue = e, this.hmProperty.userDefaValue = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetUpdDate(e) {
    e != null && (this.updDate = e, this.hmProperty.updDate = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
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
    let s = "";
    switch (e) {
      case v.con_mId:
        return this.mId;
      case v.con_DefaValNameId:
        return this.defaValNameId;
      case v.con_UserId:
        return this.userId;
      case v.con_UserDefaValue:
        return this.userDefaValue;
      case v.con_UpdDate:
        return this.updDate;
      case v.con_UpdUser:
        return this.updUser;
      case v.con_Memo:
        return this.memo;
      case "sfUpdFldSetStr":
        return this.sfUpdFldSetStr;
      case "sfFldComparisonOp":
        return this.sfFldComparisonOp;
      default:
        return s = `字段名:[${e}]在表对象:[UserDefaValue]中不存在!`, console.error(s), "";
    }
  }
  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
  */
  SetFldValue(e, s) {
    const r = "SetFldValue";
    let d = "";
    switch (e) {
      case v.con_mId:
        this.mId = Number(s), this.hmProperty.mId = !0;
        break;
      case v.con_DefaValNameId:
        this.defaValNameId = s, this.hmProperty.defaValNameId = !0;
        break;
      case v.con_UserId:
        this.userId = s, this.hmProperty.userId = !0;
        break;
      case v.con_UserDefaValue:
        this.userDefaValue = s, this.hmProperty.userDefaValue = !0;
        break;
      case v.con_UpdDate:
        this.updDate = s, this.hmProperty.updDate = !0;
        break;
      case v.con_UpdUser:
        this.updUser = s, this.hmProperty.updUser = !0;
        break;
      case v.con_Memo:
        this.memo = s, this.hmProperty.memo = !0;
        break;
      case "sfUpdFldSetStr":
        this.sfUpdFldSetStr = s;
        break;
      case "sfFldComparisonOp":
        this.sfFldComparisonOp = s;
        break;
      default:
        d = `字段名:[${e}]在表对象:[UserDefaValue]中不存在!(in ${this.constructor.name}.${r})`, console.error(d);
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
  //mId
  /**
  * 常量:"DefaValNameId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_DefaValNameId() {
    return "defaValNameId";
  }
  //缺省值名称Id
  /**
  * 常量:"UserId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_UserId() {
    return "userId";
  }
  //用户ID
  /**
  * 常量:"UserDefaValue"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_UserDefaValue() {
    return "userDefaValue";
  }
  //用户缺省值
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
  //修改人
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
  SetCondFldValue(e, s, r) {
    this.SetFldValue(e, s), Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, e) == !1 ? this.dicFldComparisonOp[e] = r : this.dicFldComparisonOp[e] = r, this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
  /**
  * 判断一个字符串是否是类的属性
  * @param propName: 属性名
  * @returns 是否是属性
  */
  static hasProperty(e) {
    return new v().hasOwnProperty(e);
  }
};
i(v, "_RefreshTimeLst", new Array()), i(v, "CacheAddiCondition", ""), //缓存附加条件,作为向后台调取数据的附加条件
i(v, "CacheModeId", "05"), //未知
i(v, "PrimaryTypeId", "02"), //identity
i(v, "IsUseDelSign", !1), //使用删除标志,记录不能删除,仅设置删除标志
i(v, "WhereFormat", ""), //条件格式串
i(v, "_CurrTabName", "UserDefaValue"), //当前表名,与该类相关的表名
i(v, "_KeyFldName", "mId"), //当前表中的关键字名称,与该类相关的表中关键字名
i(v, "mintAttributeCount", 7), i(v, "AttributeName", ["mId", "defaValNameId", "userId", "userDefaValue", "updDate", "updUser", "memo"]);
let Oe = v;
const He = "UserDefaValueExApi", Me = "userDefaValueEx";
function Qe(n, t) {
  let e, s = "";
  return s = oe.CurrIPAddressAndPort, K(oe.CurrPrx) == !0 ? e = E("{0}/{1}/{2}", s, n, t) : e = E(
    "{0}/{1}/{2}/{3}",
    s,
    oe.CurrPrx,
    n,
    t
  ), e;
}
function _e(n, t, e) {
  const r = Qe(He, "setUserDefaValue"), d = new nt();
  d.add("strUserId", n), d.add("strDefaValName", t), d.add("strUserDefaValue", e);
  const h = d.getParamText();
  return new Promise(function(c, u) {
    C.ajax({
      url: r,
      method: "Get",
      dataType: "json",
      data: h,
      success(m) {
        m.errorId == 0 ? c(m.returnBool) : (console.log(m.errorMsg), u(m.errorMsg));
      },
      error(m) {
        if (console.log(m), console.log(JSON.stringify(m)), m.statusText == "error") {
          const p = `网络错误！访问地址:${r} 不成功！`;
          u(p);
        } else
          u(m.statusText);
      }
    });
  });
}
async function Ke(n, t) {
  const e = Ke.name, r = Qe(He, "getUserDefaValue"), h = {
    headers: {
      Authorization: `${ze.get(We)}`
    },
    params: {
      strUserId: n,
      strDefaValName: t
    }
  };
  try {
    const u = (await qe.get(r, h)).data;
    if (u.errorId == 0)
      return u.returnStr;
    throw console.error(u.errorMsg), u.errorMsg;
  } catch (c) {
    if (console.error(c), c.statusText == null)
      throw c;
    if (c.statusText == "error") {
      const u = E(
        "网络错误！访问地址:{0}不成功！(in {1}.{2})",
        r,
        Me,
        e
      );
      throw console.error(u), u;
    } else if (c.statusText == "Not Found") {
      const u = E(
        "网络错误！访问地址:{0}可能不存在！(in {1}.{2})",
        r,
        Me,
        e
      );
      throw console.error(u), u;
    } else
      throw c.statusText;
  }
}
const a = class a extends Se {
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
    i(this, "mstrIdTeachingCaseResCase", "");
    //教学案例资源案例流水号
    i(this, "mstrTeachingCaseResCaseID", "");
    //教学案例资源案例ID
    i(this, "mstrTeachingCaseResCaseName", "");
    //教学案例资源案例名称
    i(this, "mstrTeachingCaseResCaseTheme", "");
    //教学案例资源案例主题词
    i(this, "mstrTeachingCaseResCaseText", "");
    //案例文本内容
    i(this, "mstrTeachingCaseResCaseDate", "");
    //视频资源日期
    i(this, "mstrTeachingCaseResCaseTime", "");
    //视频资源时间
    i(this, "mstrTeachingCaseResCaseDateIn", "");
    //案例入库日期
    i(this, "mstrTeachingCaseResCaseTimeIn", "");
    //案例入库时间
    i(this, "mstrIdCaseType", "");
    //案例类型流水号
    i(this, "mstrIdTeachingCaseResCaseType", "");
    //教学案例资源类型流水号
    i(this, "mstrCourseId", "");
    //课程Id
    i(this, "mstrOwnerId", "");
    //拥有者Id
    i(this, "mstrIdStudyLevel", "");
    //学段流水号
    i(this, "mstrIdTeachingPlan", "");
    //教案流水号
    i(this, "mstrIdDiscipline", "");
    //学科流水号
    i(this, "mintBrowseCount", 0);
    //浏览次数
    i(this, "mstrIdSenateGaugeVersion", "");
    //评价量表版本流水号
    i(this, "mstrIdTeachSkill", "");
    //教学技能流水号
    i(this, "mstrCaseLevelId", "");
    //课例等级Id
    i(this, "mstrDocFile", "");
    //生成的Word文件名
    i(this, "mbolIsNeedGeneWord", !1);
    //是否需要生成Word
    i(this, "mstrWordCreateDate", "");
    //Word生成日期
    i(this, "mbolIsVisible", !1);
    //是否显示
    i(this, "mbolIsDualVideo", !1);
    //是否双视频
    i(this, "mstrIdXzCollege", "");
    //学院流水号
    i(this, "mstrIdXzMajor", "");
    //专业流水号
    i(this, "mstrCourseChapterId", "");
    //课程章节ID
    i(this, "mintViewCount", 0);
    //浏览量
    i(this, "mbolIsShow", !1);
    //是否启用
    i(this, "mintDownloadNumber", 0);
    //下载数目
    i(this, "mintFileIntegration", 0);
    //文件积分
    i(this, "mintLikeCount", 0);
    //资源喜欢数量
    i(this, "mlngCollectionCount", 0);
    //收藏数量
    i(this, "mstrRecommendedDegreeId", "");
    //推荐度Id
    i(this, "mstrftpFileType", "");
    //ftp文件类型
    i(this, "mstrVideoUrl", "");
    //视频Url
    i(this, "mstrVideoPath", "");
    //视频目录
    i(this, "mstrResErrMsg", "");
    //资源错误信息
    i(this, "mstrUpdDate", "");
    //修改日期
    i(this, "mstrUpdUserId", "");
    //修改用户Id
    i(this, "mstrMemo", "");
    /**
     * 设置对象中公共属性.
     * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
    */
    i(this, "idTeachingCaseResCase", "");
    //教学案例资源案例流水号
    i(this, "teachingCaseResCaseID", "");
    //教学案例资源案例ID
    i(this, "teachingCaseResCaseName", "");
    //教学案例资源案例名称
    i(this, "teachingCaseResCaseTheme", "");
    //教学案例资源案例主题词
    i(this, "teachingCaseResCaseText", "");
    //案例文本内容
    i(this, "teachingCaseResCaseDate", "");
    //视频资源日期
    i(this, "teachingCaseResCaseTime", "");
    //视频资源时间
    i(this, "teachingCaseResCaseDateIn", "");
    //案例入库日期
    i(this, "teachingCaseResCaseTimeIn", "");
    //案例入库时间
    i(this, "idCaseType", "");
    //案例类型流水号
    i(this, "idTeachingCaseResCaseType", "");
    //教学案例资源类型流水号
    i(this, "courseId", "");
    //课程Id
    i(this, "ownerId", "");
    //拥有者Id
    i(this, "idStudyLevel", "");
    //学段流水号
    i(this, "idTeachingPlan", "");
    //教案流水号
    i(this, "idDiscipline", "");
    //学科流水号
    i(this, "browseCount", 0);
    //浏览次数
    i(this, "idSenateGaugeVersion", "");
    //评价量表版本流水号
    i(this, "idTeachSkill", "");
    //教学技能流水号
    i(this, "caseLevelId", "");
    //课例等级Id
    i(this, "docFile", "");
    //生成的Word文件名
    i(this, "isNeedGeneWord", !1);
    //是否需要生成Word
    i(this, "wordCreateDate", "");
    //Word生成日期
    i(this, "isVisible", !1);
    //是否显示
    i(this, "isDualVideo", !1);
    //是否双视频
    i(this, "idXzCollege", "");
    //学院流水号
    i(this, "idXzMajor", "");
    //专业流水号
    i(this, "courseChapterId", "");
    //课程章节ID
    i(this, "viewCount", 0);
    //浏览量
    i(this, "isShow", !1);
    //是否启用
    i(this, "downloadNumber", 0);
    //下载数目
    i(this, "fileIntegration", 0);
    //文件积分
    i(this, "likeCount", 0);
    //资源喜欢数量
    i(this, "collectionCount", 0);
    //收藏数量
    i(this, "recommendedDegreeId", "");
    //推荐度Id
    i(this, "ftpFileType", "");
    //ftp文件类型
    i(this, "videoUrl", "");
    //视频Url
    i(this, "videoPath", "");
    //视频目录
    i(this, "resErrMsg", "");
    //资源错误信息
    i(this, "updDate", "");
    //修改日期
    i(this, "updUserId", "");
    //修改用户Id
    i(this, "memo", "");
  }
  //备注
  /**
   * 教学案例资源案例流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIdTeachingCaseResCase(e) {
    e != null && (this.idTeachingCaseResCase = e, this.hmProperty.idTeachingCaseResCase = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 教学案例资源案例ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetTeachingCaseResCaseID(e) {
    e != null && (this.teachingCaseResCaseID = e, this.hmProperty.teachingCaseResCaseID = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 教学案例资源案例名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetTeachingCaseResCaseName(e) {
    e != null && (this.teachingCaseResCaseName = e, this.hmProperty.teachingCaseResCaseName = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 教学案例资源案例主题词(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetTeachingCaseResCaseTheme(e) {
    e != null && (this.teachingCaseResCaseTheme = e, this.hmProperty.teachingCaseResCaseTheme = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 案例文本内容(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetTeachingCaseResCaseText(e) {
    e != null && (this.teachingCaseResCaseText = e, this.hmProperty.teachingCaseResCaseText = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 视频资源日期(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetTeachingCaseResCaseDate(e) {
    e != null && (this.teachingCaseResCaseDate = e, this.hmProperty.teachingCaseResCaseDate = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 视频资源时间(说明:;字段类型:char;字段长度:6;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetTeachingCaseResCaseTime(e) {
    e != null && (this.teachingCaseResCaseTime = e, this.hmProperty.teachingCaseResCaseTime = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 案例入库日期(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetTeachingCaseResCaseDateIn(e) {
    e != null && (this.teachingCaseResCaseDateIn = e, this.hmProperty.teachingCaseResCaseDateIn = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 案例入库时间(说明:;字段类型:char;字段长度:6;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetTeachingCaseResCaseTimeIn(e) {
    e != null && (this.teachingCaseResCaseTimeIn = e, this.hmProperty.teachingCaseResCaseTimeIn = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 案例类型流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIdCaseType(e) {
    e != null && (this.idCaseType = e, this.hmProperty.idCaseType = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 教学案例资源类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIdTeachingCaseResCaseType(e) {
    e != null && (this.idTeachingCaseResCaseType = e, this.hmProperty.idTeachingCaseResCaseType = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetCourseId(e) {
    e != null && (this.courseId = e, this.hmProperty.courseId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 拥有者Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetOwnerId(e) {
    e != null && (this.ownerId = e, this.hmProperty.ownerId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 学段流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIdStudyLevel(e) {
    e != null && (this.idStudyLevel = e, this.hmProperty.idStudyLevel = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 教案流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIdTeachingPlan(e) {
    e != null && (this.idTeachingPlan = e, this.hmProperty.idTeachingPlan = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 学科流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIdDiscipline(e) {
    e != null && (this.idDiscipline = e, this.hmProperty.idDiscipline = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 浏览次数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetBrowseCount(e) {
    e != null && (this.browseCount = e, this.hmProperty.browseCount = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 评价量表版本流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIdSenateGaugeVersion(e) {
    e != null && (this.idSenateGaugeVersion = e, this.hmProperty.idSenateGaugeVersion = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 教学技能流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIdTeachSkill(e) {
    e != null && (this.idTeachSkill = e, this.hmProperty.idTeachSkill = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 课例等级Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetCaseLevelId(e) {
    e != null && (this.caseLevelId = e, this.hmProperty.caseLevelId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 生成的Word文件名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetDocFile(e) {
    e != null && (this.docFile = e, this.hmProperty.docFile = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 是否需要生成Word(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIsNeedGeneWord(e) {
    e != null && (this.isNeedGeneWord = e, this.hmProperty.isNeedGeneWord = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * Word生成日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetWordCreateDate(e) {
    e != null && (this.wordCreateDate = e, this.hmProperty.wordCreateDate = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIsVisible(e) {
    e != null && (this.isVisible = e, this.hmProperty.isVisible = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 是否双视频(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIsDualVideo(e) {
    e != null && (this.isDualVideo = e, this.hmProperty.isDualVideo = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 学院流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIdXzCollege(e) {
    e != null && (this.idXzCollege = e, this.hmProperty.idXzCollege = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 专业流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIdXzMajor(e) {
    e != null && (this.idXzMajor = e, this.hmProperty.idXzMajor = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 课程章节ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetCourseChapterId(e) {
    e != null && (this.courseChapterId = e, this.hmProperty.courseChapterId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 浏览量(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetViewCount(e) {
    e != null && (this.viewCount = e, this.hmProperty.viewCount = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 是否启用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetIsShow(e) {
    e != null && (this.isShow = e, this.hmProperty.isShow = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 下载数目(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetDownloadNumber(e) {
    e != null && (this.downloadNumber = e, this.hmProperty.downloadNumber = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 文件积分(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetFileIntegration(e) {
    e != null && (this.fileIntegration = e, this.hmProperty.fileIntegration = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 资源喜欢数量(说明:;字段类型:int;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetLikeCount(e) {
    e != null && (this.likeCount = e, this.hmProperty.likeCount = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 收藏数量(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetCollectionCount(e) {
    e != null && (this.collectionCount = e, this.hmProperty.collectionCount = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 推荐度Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetRecommendedDegreeId(e) {
    e != null && (this.recommendedDegreeId = e, this.hmProperty.recommendedDegreeId = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * ftp文件类型(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetftpFileType(e) {
    e != null && (this.ftpFileType = e, this.hmProperty.ftpFileType = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 视频Url(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetVideoUrl(e) {
    e != null && (this.videoUrl = e, this.hmProperty.videoUrl = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 视频目录(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetVideoPath(e) {
    e != null && (this.videoPath = e, this.hmProperty.videoPath = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 资源错误信息(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetResErrMsg(e) {
    e != null && (this.resErrMsg = e, this.hmProperty.resErrMsg = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
  */
  SetUpdDate(e) {
    e != null && (this.updDate = e, this.hmProperty.updDate = !0, this.sfUpdFldSetStr = this.updFldString);
  }
  /**
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
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
    let s = "";
    switch (e) {
      case a.con_IdTeachingCaseResCase:
        return this.idTeachingCaseResCase;
      case a.con_TeachingCaseResCaseID:
        return this.teachingCaseResCaseID;
      case a.con_TeachingCaseResCaseName:
        return this.teachingCaseResCaseName;
      case a.con_TeachingCaseResCaseTheme:
        return this.teachingCaseResCaseTheme;
      case a.con_TeachingCaseResCaseText:
        return this.teachingCaseResCaseText;
      case a.con_TeachingCaseResCaseDate:
        return this.teachingCaseResCaseDate;
      case a.con_TeachingCaseResCaseTime:
        return this.teachingCaseResCaseTime;
      case a.con_TeachingCaseResCaseDateIn:
        return this.teachingCaseResCaseDateIn;
      case a.con_TeachingCaseResCaseTimeIn:
        return this.teachingCaseResCaseTimeIn;
      case a.con_IdCaseType:
        return this.idCaseType;
      case a.con_IdTeachingCaseResCaseType:
        return this.idTeachingCaseResCaseType;
      case a.con_CourseId:
        return this.courseId;
      case a.con_OwnerId:
        return this.ownerId;
      case a.con_IdStudyLevel:
        return this.idStudyLevel;
      case a.con_IdTeachingPlan:
        return this.idTeachingPlan;
      case a.con_IdDiscipline:
        return this.idDiscipline;
      case a.con_BrowseCount:
        return this.browseCount;
      case a.con_IdSenateGaugeVersion:
        return this.idSenateGaugeVersion;
      case a.con_IdTeachSkill:
        return this.idTeachSkill;
      case a.con_CaseLevelId:
        return this.caseLevelId;
      case a.con_DocFile:
        return this.docFile;
      case a.con_IsNeedGeneWord:
        return this.isNeedGeneWord;
      case a.con_WordCreateDate:
        return this.wordCreateDate;
      case a.con_IsVisible:
        return this.isVisible;
      case a.con_IsDualVideo:
        return this.isDualVideo;
      case a.con_IdXzCollege:
        return this.idXzCollege;
      case a.con_IdXzMajor:
        return this.idXzMajor;
      case a.con_CourseChapterId:
        return this.courseChapterId;
      case a.con_ViewCount:
        return this.viewCount;
      case a.con_IsShow:
        return this.isShow;
      case a.con_DownloadNumber:
        return this.downloadNumber;
      case a.con_FileIntegration:
        return this.fileIntegration;
      case a.con_LikeCount:
        return this.likeCount;
      case a.con_CollectionCount:
        return this.collectionCount;
      case a.con_RecommendedDegreeId:
        return this.recommendedDegreeId;
      case a.con_ftpFileType:
        return this.ftpFileType;
      case a.con_VideoUrl:
        return this.videoUrl;
      case a.con_VideoPath:
        return this.videoPath;
      case a.con_ResErrMsg:
        return this.resErrMsg;
      case a.con_UpdDate:
        return this.updDate;
      case a.con_UpdUserId:
        return this.updUserId;
      case a.con_Memo:
        return this.memo;
      case "sfUpdFldSetStr":
        return this.sfUpdFldSetStr;
      case "sfFldComparisonOp":
        return this.sfFldComparisonOp;
      default:
        return s = `字段名:[${e}]在表对象:[TeachingCaseResCase]中不存在!`, console.error(s), "";
    }
  }
  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
  */
  SetFldValue(e, s) {
    const r = "SetFldValue";
    let d = "";
    switch (e) {
      case a.con_IdTeachingCaseResCase:
        this.idTeachingCaseResCase = s, this.hmProperty.idTeachingCaseResCase = !0;
        break;
      case a.con_TeachingCaseResCaseID:
        this.teachingCaseResCaseID = s, this.hmProperty.teachingCaseResCaseID = !0;
        break;
      case a.con_TeachingCaseResCaseName:
        this.teachingCaseResCaseName = s, this.hmProperty.teachingCaseResCaseName = !0;
        break;
      case a.con_TeachingCaseResCaseTheme:
        this.teachingCaseResCaseTheme = s, this.hmProperty.teachingCaseResCaseTheme = !0;
        break;
      case a.con_TeachingCaseResCaseText:
        this.teachingCaseResCaseText = s, this.hmProperty.teachingCaseResCaseText = !0;
        break;
      case a.con_TeachingCaseResCaseDate:
        this.teachingCaseResCaseDate = s, this.hmProperty.teachingCaseResCaseDate = !0;
        break;
      case a.con_TeachingCaseResCaseTime:
        this.teachingCaseResCaseTime = s, this.hmProperty.teachingCaseResCaseTime = !0;
        break;
      case a.con_TeachingCaseResCaseDateIn:
        this.teachingCaseResCaseDateIn = s, this.hmProperty.teachingCaseResCaseDateIn = !0;
        break;
      case a.con_TeachingCaseResCaseTimeIn:
        this.teachingCaseResCaseTimeIn = s, this.hmProperty.teachingCaseResCaseTimeIn = !0;
        break;
      case a.con_IdCaseType:
        this.idCaseType = s, this.hmProperty.idCaseType = !0;
        break;
      case a.con_IdTeachingCaseResCaseType:
        this.idTeachingCaseResCaseType = s, this.hmProperty.idTeachingCaseResCaseType = !0;
        break;
      case a.con_CourseId:
        this.courseId = s, this.hmProperty.courseId = !0;
        break;
      case a.con_OwnerId:
        this.ownerId = s, this.hmProperty.ownerId = !0;
        break;
      case a.con_IdStudyLevel:
        this.idStudyLevel = s, this.hmProperty.idStudyLevel = !0;
        break;
      case a.con_IdTeachingPlan:
        this.idTeachingPlan = s, this.hmProperty.idTeachingPlan = !0;
        break;
      case a.con_IdDiscipline:
        this.idDiscipline = s, this.hmProperty.idDiscipline = !0;
        break;
      case a.con_BrowseCount:
        this.browseCount = Number(s), this.hmProperty.browseCount = !0;
        break;
      case a.con_IdSenateGaugeVersion:
        this.idSenateGaugeVersion = s, this.hmProperty.idSenateGaugeVersion = !0;
        break;
      case a.con_IdTeachSkill:
        this.idTeachSkill = s, this.hmProperty.idTeachSkill = !0;
        break;
      case a.con_CaseLevelId:
        this.caseLevelId = s, this.hmProperty.caseLevelId = !0;
        break;
      case a.con_DocFile:
        this.docFile = s, this.hmProperty.docFile = !0;
        break;
      case a.con_IsNeedGeneWord:
        this.isNeedGeneWord = !!s, this.hmProperty.isNeedGeneWord = !0;
        break;
      case a.con_WordCreateDate:
        this.wordCreateDate = s, this.hmProperty.wordCreateDate = !0;
        break;
      case a.con_IsVisible:
        this.isVisible = !!s, this.hmProperty.isVisible = !0;
        break;
      case a.con_IsDualVideo:
        this.isDualVideo = !!s, this.hmProperty.isDualVideo = !0;
        break;
      case a.con_IdXzCollege:
        this.idXzCollege = s, this.hmProperty.idXzCollege = !0;
        break;
      case a.con_IdXzMajor:
        this.idXzMajor = s, this.hmProperty.idXzMajor = !0;
        break;
      case a.con_CourseChapterId:
        this.courseChapterId = s, this.hmProperty.courseChapterId = !0;
        break;
      case a.con_ViewCount:
        this.viewCount = Number(s), this.hmProperty.viewCount = !0;
        break;
      case a.con_IsShow:
        this.isShow = !!s, this.hmProperty.isShow = !0;
        break;
      case a.con_DownloadNumber:
        this.downloadNumber = Number(s), this.hmProperty.downloadNumber = !0;
        break;
      case a.con_FileIntegration:
        this.fileIntegration = Number(s), this.hmProperty.fileIntegration = !0;
        break;
      case a.con_LikeCount:
        this.likeCount = Number(s), this.hmProperty.likeCount = !0;
        break;
      case a.con_CollectionCount:
        this.collectionCount = Number(s), this.hmProperty.collectionCount = !0;
        break;
      case a.con_RecommendedDegreeId:
        this.recommendedDegreeId = s, this.hmProperty.recommendedDegreeId = !0;
        break;
      case a.con_ftpFileType:
        this.ftpFileType = s, this.hmProperty.ftpFileType = !0;
        break;
      case a.con_VideoUrl:
        this.videoUrl = s, this.hmProperty.videoUrl = !0;
        break;
      case a.con_VideoPath:
        this.videoPath = s, this.hmProperty.videoPath = !0;
        break;
      case a.con_ResErrMsg:
        this.resErrMsg = s, this.hmProperty.resErrMsg = !0;
        break;
      case a.con_UpdDate:
        this.updDate = s, this.hmProperty.updDate = !0;
        break;
      case a.con_UpdUserId:
        this.updUserId = s, this.hmProperty.updUserId = !0;
        break;
      case a.con_Memo:
        this.memo = s, this.hmProperty.memo = !0;
        break;
      case "sfUpdFldSetStr":
        this.sfUpdFldSetStr = s;
        break;
      case "sfFldComparisonOp":
        this.sfFldComparisonOp = s;
        break;
      default:
        d = `字段名:[${e}]在表对象:[TeachingCaseResCase]中不存在!(in ${this.constructor.name}.${r})`, console.error(d);
        break;
    }
  }
  //备注
  /**
  * 常量:"IdTeachingCaseResCase"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IdTeachingCaseResCase() {
    return "idTeachingCaseResCase";
  }
  //教学案例资源案例流水号
  /**
  * 常量:"TeachingCaseResCaseID"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_TeachingCaseResCaseID() {
    return "teachingCaseResCaseID";
  }
  //教学案例资源案例ID
  /**
  * 常量:"TeachingCaseResCaseName"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_TeachingCaseResCaseName() {
    return "teachingCaseResCaseName";
  }
  //教学案例资源案例名称
  /**
  * 常量:"TeachingCaseResCaseTheme"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_TeachingCaseResCaseTheme() {
    return "teachingCaseResCaseTheme";
  }
  //教学案例资源案例主题词
  /**
  * 常量:"TeachingCaseResCaseText"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_TeachingCaseResCaseText() {
    return "teachingCaseResCaseText";
  }
  //案例文本内容
  /**
  * 常量:"TeachingCaseResCaseDate"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_TeachingCaseResCaseDate() {
    return "teachingCaseResCaseDate";
  }
  //视频资源日期
  /**
  * 常量:"TeachingCaseResCaseTime"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_TeachingCaseResCaseTime() {
    return "teachingCaseResCaseTime";
  }
  //视频资源时间
  /**
  * 常量:"TeachingCaseResCaseDateIn"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_TeachingCaseResCaseDateIn() {
    return "teachingCaseResCaseDateIn";
  }
  //案例入库日期
  /**
  * 常量:"TeachingCaseResCaseTimeIn"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_TeachingCaseResCaseTimeIn() {
    return "teachingCaseResCaseTimeIn";
  }
  //案例入库时间
  /**
  * 常量:"IdCaseType"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IdCaseType() {
    return "idCaseType";
  }
  //案例类型流水号
  /**
  * 常量:"IdTeachingCaseResCaseType"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IdTeachingCaseResCaseType() {
    return "idTeachingCaseResCaseType";
  }
  //教学案例资源类型流水号
  /**
  * 常量:"CourseId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_CourseId() {
    return "courseId";
  }
  //课程Id
  /**
  * 常量:"OwnerId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_OwnerId() {
    return "ownerId";
  }
  //拥有者Id
  /**
  * 常量:"IdStudyLevel"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IdStudyLevel() {
    return "idStudyLevel";
  }
  //学段流水号
  /**
  * 常量:"IdTeachingPlan"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IdTeachingPlan() {
    return "idTeachingPlan";
  }
  //教案流水号
  /**
  * 常量:"IdDiscipline"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IdDiscipline() {
    return "idDiscipline";
  }
  //学科流水号
  /**
  * 常量:"BrowseCount"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_BrowseCount() {
    return "browseCount";
  }
  //浏览次数
  /**
  * 常量:"IdSenateGaugeVersion"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IdSenateGaugeVersion() {
    return "idSenateGaugeVersion";
  }
  //评价量表版本流水号
  /**
  * 常量:"IdTeachSkill"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IdTeachSkill() {
    return "idTeachSkill";
  }
  //教学技能流水号
  /**
  * 常量:"CaseLevelId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_CaseLevelId() {
    return "caseLevelId";
  }
  //课例等级Id
  /**
  * 常量:"DocFile"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_DocFile() {
    return "docFile";
  }
  //生成的Word文件名
  /**
  * 常量:"IsNeedGeneWord"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IsNeedGeneWord() {
    return "isNeedGeneWord";
  }
  //是否需要生成Word
  /**
  * 常量:"WordCreateDate"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_WordCreateDate() {
    return "wordCreateDate";
  }
  //Word生成日期
  /**
  * 常量:"IsVisible"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IsVisible() {
    return "isVisible";
  }
  //是否显示
  /**
  * 常量:"IsDualVideo"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IsDualVideo() {
    return "isDualVideo";
  }
  //是否双视频
  /**
  * 常量:"IdXzCollege"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IdXzCollege() {
    return "idXzCollege";
  }
  //学院流水号
  /**
  * 常量:"IdXzMajor"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IdXzMajor() {
    return "idXzMajor";
  }
  //专业流水号
  /**
  * 常量:"CourseChapterId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_CourseChapterId() {
    return "courseChapterId";
  }
  //课程章节ID
  /**
  * 常量:"ViewCount"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_ViewCount() {
    return "viewCount";
  }
  //浏览量
  /**
  * 常量:"IsShow"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_IsShow() {
    return "isShow";
  }
  //是否启用
  /**
  * 常量:"DownloadNumber"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_DownloadNumber() {
    return "downloadNumber";
  }
  //下载数目
  /**
  * 常量:"FileIntegration"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_FileIntegration() {
    return "fileIntegration";
  }
  //文件积分
  /**
  * 常量:"LikeCount"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_LikeCount() {
    return "likeCount";
  }
  //资源喜欢数量
  /**
  * 常量:"CollectionCount"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_CollectionCount() {
    return "collectionCount";
  }
  //收藏数量
  /**
  * 常量:"RecommendedDegreeId"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_RecommendedDegreeId() {
    return "recommendedDegreeId";
  }
  //推荐度Id
  /**
  * 常量:"ftpFileType"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_ftpFileType() {
    return "ftpFileType";
  }
  //ftp文件类型
  /**
  * 常量:"VideoUrl"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_VideoUrl() {
    return "videoUrl";
  }
  //视频Url
  /**
  * 常量:"VideoPath"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_VideoPath() {
    return "videoPath";
  }
  //视频目录
  /**
  * 常量:"ResErrMsg"
  * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
  */
  static get con_ResErrMsg() {
    return "resErrMsg";
  }
  //资源错误信息
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
  SetCondFldValue(e, s, r) {
    this.SetFldValue(e, s), Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, e) == !1 ? this.dicFldComparisonOp[e] = r : this.dicFldComparisonOp[e] = r, this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
  /**
  * 判断一个字符串是否是类的属性
  * @param propName: 属性名
  * @returns 是否是属性
  */
  static hasProperty(e) {
    return new a().hasOwnProperty(e);
  }
};
i(a, "_RefreshTimeLst", new Array()), i(a, "CacheAddiCondition", ""), //缓存附加条件,作为向后台调取数据的附加条件
i(a, "CacheModeId", ""), //
i(a, "PrimaryTypeId", "03"), //自增
i(a, "IsUseDelSign", !1), //使用删除标志,记录不能删除,仅设置删除标志
i(a, "WhereFormat", ""), //条件格式串
i(a, "_CurrTabName", "TeachingCaseResCase"), //当前表名,与该类相关的表名
i(a, "_KeyFldName", "IdTeachingCaseResCase"), //当前表中的关键字名称,与该类相关的表中关键字名
i(a, "mintAttributeCount", 42), i(a, "AttributeName", ["idTeachingCaseResCase", "teachingCaseResCaseID", "teachingCaseResCaseName", "teachingCaseResCaseTheme", "teachingCaseResCaseText", "teachingCaseResCaseDate", "teachingCaseResCaseTime", "teachingCaseResCaseDateIn", "teachingCaseResCaseTimeIn", "idCaseType", "idTeachingCaseResCaseType", "courseId", "ownerId", "idStudyLevel", "idTeachingPlan", "idDiscipline", "browseCount", "idSenateGaugeVersion", "idTeachSkill", "caseLevelId", "docFile", "isNeedGeneWord", "wordCreateDate", "isVisible", "isDualVideo", "idXzCollege", "idXzMajor", "courseChapterId", "viewCount", "isShow", "downloadNumber", "fileIntegration", "likeCount", "collectionCount", "recommendedDegreeId", "ftpFileType", "videoUrl", "videoPath", "resErrMsg", "updDate", "updUserId", "memo"]);
let Be = a;
const kt = l("Asc"), Rt = l("");
X({
  ascOrDesc4SortFun: kt,
  sortTeachingCaseResCaseBy: Rt
});
l("");
const Et = l(), Nt = l(), Ft = l(), Lt = l(), Ut = l(), $t = l(), j = l(), xt = l();
X({
  refDivLayout: Et,
  refDivQuery: Nt,
  refDivFunction: Ft,
  refDivList: Lt,
  refDivEdit: Ut,
  refDivDetail: $t,
  refLogin_Edit: j,
  refTeachingCaseResCase_List: xt
});
l(!1);
l([]);
l("");
const jt = l(""), Ot = l(""), Mt = l(""), Bt = l("");
X({
  teachingCaseResCaseName_q: jt,
  idCaseType_q: Ot,
  courseId_q: Mt,
  caseLevelId_q: Bt
});
X({});
const g = class g {
  constructor(t, e) {
    i(this, "_className", "Unknown");
    i(this, "opType", "");
    i(this, "iShowList");
    this._className = t, this.iShowList = e, g.SetPageEdit(this, 1) != !0 && g.SetPageEdit(this, 2) != !0 && g.SetPageEdit(this, 3) != !0;
  }
  // 基类中的实际字段
  // 定义虚拟属性
  get className() {
    return this._className;
  }
  static SetPageEdit(t, e) {
    const s = t.className;
    switch (e) {
      case 1:
        return g.objPageEdit == null || g.objPageEdit.className == s ? (g.objPageEdit = t, !0) : !1;
      case 2:
        return g.objPageEdit2 == null || g.objPageEdit2.className == s ? (g.objPageEdit2 = t, !0) : !1;
      case 3:
        return g.objPageEdit3 == null || g.objPageEdit3.className == s ? (g.objPageEdit3 = t, !0) : !1;
      default:
        return !1;
    }
  }
  static GetPageEditObj(t) {
    return g.objPageEdit != null && g.objPageEdit.className == t ? g.objPageEdit : g.objPageEdit2 != null && g.objPageEdit2.className == t ? g.objPageEdit2 : g.objPageEdit3 != null && g.objPageEdit3.className == t ? g.objPageEdit3 : null;
  }
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /**
   按钮单击,用于调用Js函数中btn_Click
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
  **/
  static btnEdit_Click(t, e) {
    console.log(e);
    const s = g.GetPageEditObj("Login");
    switch (t) {
      case "login":
        s.PageLoad();
        break;
      case "Submit":
        s.btnLogin_Click();
        break;
      default:
        he(t, "Login.btnEdit_Click");
        break;
    }
  }
  async PageLoad() {
    this.opType = "login", await this.ShowDialog_Login(this.opType) != !1;
  }
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  async ShowDialog_Login(t) {
    const e = this.ShowDialog_Login.name;
    if (await j.value.showDialog(), g.divEdit = j.value.$refs.refDivEdit, g.divEdit == null) {
      if (g.times4TestShowDialog < 2)
        g.times4TestShowDialog++, setTimeout(() => {
          this.ShowDialog_Login(t);
        }, 100);
      else {
        const s = E(
          "当前编辑区的层(div)对象为空，请检查！(in {0}.{1})",
          this.className,
          e
        );
        return console.error(s), alert(s), !1;
      }
      return !1;
    } else
      g.times4TestShowDialog = 0;
    return !0;
  }
  /*
   * 每页记录数，在扩展类可以修改
   */
  get pageSize() {
    return 10;
  }
  async getDefaultCurrEduCls() {
    let t = "", e;
    const s = N();
    switch (s.getRoleId) {
      case R.Regular_Student_00620003:
        e = await Ue(s.getUserId), e.length > 0 && (t = e[0]);
        break;
      case R.High_School_Student_00620017:
        e = await Ue(s.getUserId), e.length > 0 && (t = e[0]);
        break;
      case R.K_12_Teacher_00620013:
      case R.Regular_Teacher_00620002:
        e = await Le(
          s.getUserId
        ), e.length > 0 && (t = e[0]);
        break;
      default:
        e = await Le(
          s.getUserId
        ), e.length > 0 && (t = e[0]);
        break;
    }
    if (t == "") {
      const r = E("新建默认教学班Id不成功，请检查!");
      return console.error(r), alert(r), "";
    } else
      await _e(s.getUserId, "默认教学班Id", t);
    return t;
  }
  //登录方法
  async btnLogin_Click() {
    const t = this.getDivName();
    if (t == null)
      return;
    const e = N(), s = this.btnLogin_Click.name;
    dt(g.divEdit, "divLoading");
    let r = "", d = "";
    try {
      d += ` ${$e.con_UserId} = '${this.userId}'`, d += ` And ${lt.con_Password} = '${this.password}'`;
      const h = ` ${$e.con_UserId} = '${this.userId}' And QxprjId = '0062' order by roleId asc `;
      if ((await ct(d)).length == 0) {
        alert(`用户:${this.userId}或密码不正确！`);
        return;
      }
      const u = await ut(h);
      if (u.length > 0) {
        r = "ok", e.afterLogin(u);
        let m = await Ke(
          e.getUserId,
          "默认教学班Id"
        );
        if (K(m) || m == "0") {
          if (m = await this.getDefaultCurrEduCls(), m == "")
            return;
        } else {
          const p = await le(m);
          if (p != null) {
            const f = p.courseId;
            o.idCurrEduCls = m, o.eduClsTypeId = p.eduClsTypeId, o.eduClsName = p.eduClsName, o.courseId = f;
            const _ = await ht(f);
            if (_ == null) {
              const b = E(
                "根据关键字获取相应的记录的对象为空.(in {0}.{1})",
                this.className,
                s
              );
              console.error(b), alert(b);
              return;
            }
            o.courseName = _.courseName;
          }
        }
        pe(t, "divLoading"), fe(t, "hidState") == "1" && CloseWindow(), await this.AddNewRecordLoginLogSave(r), this.HideDialog_Login(), this.iShowList.BindGvCache("LoginFinish", "");
      } else
        pe(t, "divLoading"), alert("用户名或密码错误！");
    } catch (h) {
      console.error("catch(e)="), console.error(h);
      const c = `登录失败,${h}.`;
      alert(c);
    }
  }
  /* 添加登录日志
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  */
  async AddNewRecordLoginLogSave(t) {
    const e = this.getDivName();
    if (e == null)
      return;
    const s = new Ie();
    this.PutDataToLoginLogClass(s, t);
    try {
      const r = await Pt(s);
      return !!r == !1 && (pe(e, "divLoading"), alert("日志添加记录不成功!")), r;
    } catch (r) {
      console.error("catch(e)="), console.error(r);
      const d = `添加记录不成功,${r}.`;
      alert(d);
    }
    return !0;
  }
  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjLoginLogEN">数据传输的目的类对象</param>
   */
  PutDataToLoginLogClass(t, e) {
    t.SetLoginUserId(this.userId), t.SetLoginLogNumber(this.getNowDateNunber()), t.SetLoginIP(""), t.SetLoginTime(Ct.getNowDate()), t.SetOutTime(""), t.SetOnlineTime(""), e == "ok" ? t.SetLoginResult("成功") : t.SetLoginResult("失败"), t.SetFailReason("");
  }
  /*
   * 获取年月日数据串
   */
  getNowDateNunber() {
    const t = /* @__PURE__ */ new Date();
    let e = t.getMonth() + 1, s = t.getDate();
    return e <= 9 && (e = `0${e}`), s <= 9 && (s = `0${s}`), t.getFullYear().toString() + e + s + t.getHours() + t.getMinutes() + t.getSeconds();
  }
  /*
   * 登录用户名
   */
  set userId(t) {
    const e = this.getDivName();
    xe(e, "txtUserId", t);
  }
  /*
   * 登录用户名
   */
  get userId() {
    const t = this.getDivName();
    return fe(t, "txtUserId");
  }
  /*
   * 密码
   */
  set password(t) {
    const e = this.getDivName();
    xe(e, "txtPassword", t);
  }
  /*
   * 密码
   */
  get password() {
    const t = this.getDivName();
    return fe(t, "txtPassword");
  }
  //    /*
  //     设置Session
  //     <param name = "Key">关键字</param>
  //     <param name = "Value">值</param>
  //    */
  //    public static SetSessionAsync(Key: string, Value: string): Promise<void> {
  //        return new Promise(function (resolve, reject) {
  //            $.ajax({
  //                url: strUrl_Session_SetString,
  //                cache: false,
  //                async: false,
  //                type: 'get',
  //                dataType: "json",
  //                data: {
  //                    Key: Key,
  //                    Value: Value
  //                },
  //                success: function (data) {
  //                    //$('#myValue').val(text);
  //                    strIdCurrEduclsstrKey = data.key;
  //                    strIdCurrEduclsstrValue = data.value;
  //                    //$('#myKey').html(strKey);
  //                    //$('#myValue').html(strValue);
  //                    console.log(strKey + strValue);
  //                }
  //            });
  //        });
  //    }
  //    /*
  //获取Session 关键字的值
  //<param name = "Key">关键字</param>
  //<return>值</return>
  //*/
  //    public static GetSessionAsync(Key: string): Promise<string> {
  //        return new Promise(function (resolve, reject) {
  //            $.ajax({
  //                url: "/Session/GetString",
  //                cache: false,
  //                async: false,
  //                type: 'get',
  //                dataType: "json",
  //                data: {
  //                    Key: Key
  //                },
  //                success: function (data) {
  //                    strIdCurrEduclsstrValue = data.value;
  //                    console.log(Key + strValue);
  //                    resolve(data);
  //                },
  //                error: (e:any) => {
  //                    strIdCurrEduclsstrErrMsg = decodeURIComponent(e.responseText)
  //                    reject(e);
  //                }
  //            });
  //        });
  //    }
  //    public async btn_Register_Click(strListDiv: string) {
  //        try {
  //            const ddl_idGradeBase = await this.BindDdl_idGradeBase("ddlIdGradeBase");
  //            const ddl_idXzCollege = await this.BindDdl_IdXzCollege("ddlIdXzCollege");
  //            //const ddl_idXzMajor = await this.BindDdl_idXzMajor("ddlIdXzMajor");
  //            const ddl_IdentityID = await this.BindDdl_IdentityID("ddlIdentityId");
  //        }
  //        catch (e:any) {
  //            strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //            alert(strMsg);
  //        }
  //    }
  //    public async selectMajor_Click() {
  //        try {
  //            //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);
  //            strWhereCond = " idXzCollege='" + this.idXzCollege + "'";
  //            const ddl_idXzMajor = await this.BindDdl_idXzMajor("ddlIdXzMajor", strWhereCond);
  //        }
  //        catch (e:any) {
  //            strIdCurrEduclsstrMsg: string = `获取数据有问题,${e}.`;
  //            alert(strMsg);
  //        }
  //    }
  //    /// <summary>
  //    /// 为下拉框获取数据,从表:[XzGradeBase]中获取
  //    /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  //    /// </summary>
  //    /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  //    public BindDdl_idGradeBase(ddlIdGradeBase: string, strWhereCond: string = "1 =1") {
  //        //strWhereCond = " 1 =1 ";
  //        const objDdl = document.getElementById(ddlIdGradeBase);
  //        if (objDdl == null) {
  //            const strMsg = `下拉框：${ddlIdGradeBase} 不存在！`;
  //            alert(strMsg);
  //            throw (strMsg);
  //        }
  //        return new Promise((resolve, reject) => {
  //            try {
  //                const responseText = XzGradeBase_GetObjLstAsync(strWhereCond).then((jsonData) => {
  //                    strIdCurrEduclsarrXzGradeBaseObjLst: Array<clsXzGradeBaseEN> = <Array<clsXzGradeBaseEN>>jsonData;
  //                    BindDdl_ObjLst(ddlIdGradeBase, arrXzGradeBaseObjLst, clsXzGradeBaseEN.con_IdGradeBase, clsXzGradeBaseEN.con_GradeBaseName, "年级");
  //                    console.log("完成BindDdl_idGradeBase!");
  //                    resolve(jsonData);
  //                });
  //            }
  //            catch (e:any) {
  //                strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //                alert(strMsg);
  //            }
  //        });
  //    }
  //    /// <summary>
  //    /// 为下拉框获取数据,从表:[XzClg]中获取
  //    /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  //    /// </summary>
  //    /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  //    public BindDdl_IdXzCollege(ddlIdXzCollege: string, strWhereCond: string = "1 =1") {
  //        //strWhereCond = " 1 =1 ";
  //        const objDdl = document.getElementById(ddlIdXzCollege);
  //        if (objDdl == null) {
  //            const strMsg = `下拉框：${ddlIdXzCollege} 不存在！`;
  //            alert(strMsg);
  //            throw (strMsg);
  //        }
  //        return new Promise((resolve, reject) => {
  //            try {
  //                const responseText = XzClg_GetObjLstAsync(strWhereCond).then((jsonData) => {
  //                    strIdCurrEduclsarrXzClgObjLst: Array<clsXzClgEN> = <Array<clsXzClgEN>>jsonData;
  //                    BindDdl_ObjLst(ddlIdXzCollege, arrXzClgObjLst, clsXzClgEN.con_IdXzCollege, clsXzClgEN.con_CollegeName, "学院");
  //                    console.log("完成BindDdl_IdXzCollege!");
  //                    resolve(jsonData);
  //                });
  //            }
  //            catch (e:any) {
  //                strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //                alert(strMsg);
  //            }
  //        });
  //    }
  //    /// <summary>
  //    /// 为下拉框获取数据,从表:[XzMajor]中获取
  //    /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  //    /// </summary>
  //    /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  //    public BindDdl_idXzMajor(ddlIdXzMajor: string, strWhereCond: string) {
  //        //strWhereCond = " 1 =1 ";
  //        const objDdl = document.getElementById(ddlIdXzMajor);
  //        if (objDdl == null) {
  //            const strMsg = `下拉框：${ddlIdXzMajor} 不存在！`;
  //            alert(strMsg);
  //            throw (strMsg);
  //        }
  //        return new Promise((resolve, reject) => {
  //            try {
  //                const responseText = XzMajor_GetObjLstAsync(strWhereCond).then((jsonData) => {
  //                    strIdCurrEduclsarrXzMajorObjLst: Array<clsXzMajorEN> = <Array<clsXzMajorEN>>jsonData;
  //                    BindDdl_ObjLst(ddlIdXzMajor, arrXzMajorObjLst, clsXzMajorEN.con_IdXzMajor, clsXzMajorEN.con_MajorName, "专业");
  //                    console.log("完成BindDdl_idXzMajor!");
  //                    resolve(jsonData);
  //                });
  //            }
  //            catch (e:any) {
  //                strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //                alert(strMsg);
  //            }
  //        });
  //    }
  //    /// <summary>
  //    /// 为下拉框获取数据,从表:[UserIdentity]中获取
  //    /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  //    /// </summary>
  //    /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  //    public BindDdl_IdentityID(ddlIdentityId: string, strWhereCond: string = "1 =1") {
  //        //strWhereCond = " 1 =1 ";
  //        const objDdl = document.getElementById(ddlIdentityId);
  //        if (objDdl == null) {
  //            const strMsg = `下拉框：${ddlIdentityId} 不存在！`;
  //            alert(strMsg);
  //            throw (strMsg);
  //        }
  //        return new Promise((resolve, reject) => {
  //            try {
  //                const responseText = UserIdentity_GetObjLstAsync(strWhereCond).then((jsonData) => {
  //                    strIdCurrEduclsarrUserIdentityObjLst: Array<clsUserIdentityEN> = <Array<clsUserIdentityEN>>jsonData;
  //                    BindDdl_ObjLst(ddlIdentityId, arrUserIdentityObjLst, clsUserIdentityEN.con_IdentityID, clsUserIdentityEN.con_identityDesc, "用户身份");
  //                    console.log("完成BindDdl_IdentityID!");
  //                    resolve(jsonData);
  //                });
  //            }
  //            catch (e:any) {
  //                strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //                alert(strMsg);
  //            }
  //        });
  //    }
  //    //注册方法
  //    public async btnRegister_Click(strListDiv: string) {
  //        if (this.idXzCollege == "") {
  //            alert("学院不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.idXzMajor == "") {
  //            alert("专业不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.idGradeBase == "") {
  //            alert("年级不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.identityID == "") {
  //            alert("身份不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.userId == "") {
  //            alert("账号不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.userName == "") {
  //            alert("姓名不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.RePassword == "") {
  //            alert("密码不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else if (this.Re_Password == "") {
  //            alert("重复密码不能为空！");
  //            window.location.href = "#pagetwo";
  //        }
  //        else {
  //            if (this.RePassword == this.Re_Password) {
  //                const responseText2 = await this.AddUserSave().then((jsonData) => {
  //                    const returnBool: boolean = jsonData;
  //                    if (returnBool == true) {
  //                        //alert("注册成功！");
  //                        window.location.href = "#pageLogin";
  //                    }
  //                });
  //            }
  //            else {
  //                alert("重复密码不一致！");
  //                window.location.href = "#pagetwo";
  //            }
  //        }
  //    }
  //    /* 添加新记录
  //    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  //   */
  //    public async AddUserSave() {
  //        this.DivName = "divAddNewRecordSave";
  //        objUsersEN: clsUsersEN = new clsUsersEN();
  //        this.PutDataToUsersClass(objUsersEN);
  //        try {
  //            const responseText = await Users_IsExistAsync(objUsersEN.userId);
  //            strIdCurrEduclsbolIsExist: boolean = responseText;
  //            if (bolIsExist == true) {
  //                strIdCurrEduclsstrMsg: string = `注册账号：${objUsersEN.userId}已经存在，请重新命名！`;
  //                alert(strMsg);
  //                return responseText;//一定要有一个返回值，否则会出错！
  //            }
  //            const responseText2 = await UsersEx_AddNewRecordAsync(objUsersEN);
  //            const returnBool: boolean = !!responseText2;
  //            if (returnBool == true) {
  //                strIdCurrEduclsstrInfo: string = `注册成功，请等待管理员审核!`;
  //
  //                //显示信息框
  //                alert(strInfo);
  //            }
  //            else {
  //                strIdCurrEduclsstrInfo: string = `注册不成功!`;
  //
  //                //显示信息框
  //                alert(strInfo);
  //            }
  //            return responseText2;//一定要有一个返回值，否则会出错！
  //        }
  //        catch (e:any) {
  //            console.error('catch(e)=');
  //            console.error(e);
  //            strIdCurrEduclsstrMsg: string = `注册记录不成功,${e}.`;
  //            alert(strMsg);
  //        }
  //        return true;//一定要有一个返回值，否则会出错！
  //    }
  //    /* 函数功能:把界面上的属性数据传到类对象中
  //     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
  //     <param name = "pobjUsersEN">数据传输的目的类对象</param>
  //   */
  //    public PutDataToUsersClass(pobjUsersEN: clsUsersEN) {
  //        pobjUsersEN.SetUserId(this.ReUserId;// 用户ID
  //        pobjUsersEN.SetUserName(this.userName;// 用户名
  //        pobjUsersEN.SetUserStateId("02";// 用户状态Id
  //        pobjUsersEN.SetPassword(this.RePassword;// password
  //        pobjUsersEN.SetIdGradeBase(this.idGradeBase;// 年级流水号
  //        pobjUsersEN.SetIdXzCollege(this.idXzCollege;// 学院流水号
  //        pobjUsersEN.SetIdXzMajor(this.idXzMajor;// 专业流水号
  //        pobjUsersEN.SetEmail(this.email;// 电子邮箱
  //        pobjUsersEN.SetIdentityID(this.identityID;// 身份编号
  //        pobjUsersEN.SetIsRegister(true;// isRegister
  //        pobjUsersEN.SetRegisterDate(this.getNowDateNunber();// registerDate
  //        pobjUsersEN.SetUpdDate(this.getNowDateNunber();// 修改日期
  //        pobjUsersEN.SetUpdUser(this.userId;// 修改人
  //        pobjUsersEN.SetMemo("移动端注册";// 备注
  //    }
  //  /*
  //  * 年级流水号
  // */
  //  public set idGradeBase(value: string) {
  //      $("#ddlIdGradeBase").val(value);
  //  }
  //  /*
  //  * 年级流水号
  // */
  //  public get idGradeBase(): string {
  //      return $("#ddlIdGradeBase").val();
  //  }
  //  /*
  //  * 学院流水号
  // */
  //  public set idXzCollege(value: string) {
  //      $("#ddlIdXzCollege").val(value);
  //  }
  //  /*
  //  * 学院流水号
  // */
  //  public get idXzCollege(): string {
  //      return $("#ddlIdXzCollege").val();
  //  }
  //  /*
  //  * 专业流水号
  // */
  //  public set idXzMajor(value: string) {
  //      $("#ddlIdXzMajor").val(value);
  //  }
  //  /*
  //  * 专业流水号
  // */
  //  public get idXzMajor(): string {
  //      return $("#ddlIdXzMajor").val();
  //  }
  //  /*
  //  * 身份编号
  // */
  //  public set identityID(value: string) {
  //      $("#ddlIdentityId").val(value);
  //  }
  //  /*
  //  * 身份编号
  // */
  //  public get identityID(): string {
  //      return $("#ddlIdentityId").val();
  //  }
  //  /*
  // * 用户ID
  //*/
  //  public set email(value: string) {
  //      $("#txtEmail").val(value);
  //  }
  //  /*
  //  * 用户ID
  // */
  //  public get email(): string {
  //      return $("#txtEmail").val();
  //  }
  //  /*
  //  * 用户ID
  // */
  //  public set ReUserId(value: string) {
  //      $("#txtReUserId").val(value);
  //  }
  //  /*
  //  * 用户ID
  // */
  //  public get ReUserId(): string {
  //      return $("#txtReUserId").val();
  //  }
  //  /*
  //  * 用户名
  // */
  //  public set userName(value: string) {
  //      $("#txtUserName").val(value);
  //  }
  //  /*
  //  * 用户名
  // */
  //  public get userName(): string {
  //      return $("#txtUserName").val();
  //  }
  //  /*
  //  * password
  //  */
  //  public set RePassword(value: string) {
  //      $("#txtRePassword").val(value);
  //  }
  //  /*
  //  * password
  // */
  //  public get RePassword(): string {
  //      return $("#txtRePassword").val();
  //  }
  //  /*
  //  * password
  //  */
  //  public set Re_Password(value: string) {
  //      $("#txtRe_Password").val(value);
  //  }
  //  /*
  //  * password
  // */
  //  public get Re_Password(): string {
  //      return $("#txtRe_Password").val();
  //  }
  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  getDivName() {
    const t = this.getDivName.name;
    if (g.divEdit = j.value.$refs.refDivEdit, g.divEdit == null) {
      if (g.times4TestShowDialog < 2)
        g.times4TestShowDialog++, setTimeout(() => {
          this.getDivName();
        }, 100);
      else {
        const e = E(
          "当前编辑区的层(div)对象为空，请检查！(in {0}.{1})",
          this.className,
          t
        );
        return console.error(e), alert(e), null;
      }
      return null;
    } else
      g.times4TestShowDialog = 0;
    return g.divEdit;
  }
  /**
   * 隐藏对话框
   **/
  HideDialog_Login() {
    j.value.hideDialog();
  }
};
// public static EditRef: Ref<any>;
i(g, "divEdit"), i(g, "times4TestShowDialog", 0), i(g, "objPageEdit"), i(g, "objPageEdit2"), i(g, "objPageEdit3");
let de = g;
const Gt = l("Asc"), At = l("");
X({
  ascOrDesc4SortFun: Gt,
  sortTeachingCaseResCaseBy: At
});
l("");
const Vt = l(), zt = l(), Wt = l(), qt = l(), Xt = l(), Ht = l(), Qt = l();
X({
  refDivLayout: Vt,
  refDivQuery: zt,
  refDivFunction: Wt,
  refDivList: qt,
  refDivEdit: Xt,
  refDivDetail: Ht,
  refTeachingCaseResCase_List: Qt
});
l(!1);
l([]);
l("");
const Kt = l(""), Jt = l(""), Yt = l(""), Zt = l(""), re = l(""), ue = l(!1);
X({
  teachingCaseResCaseName_q: Kt,
  idCaseType_q: Jt,
  courseId_q: Yt,
  caseLevelId_q: Zt
});
X({});
var L;
let te = (L = class {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  get pageSize() {
    return 10;
  }
  BindGv(t, e) {
    console.log(t, e);
  }
  BindGvCache(t, e) {
    console.log("strPara", e);
    let s;
    L.objPageCRUD == null && (L.objPageCRUD = new L()), s = L.objPageCRUD;
    let r = "";
    switch (t) {
      case "Login":
        alert("该类没有绑定该函数：[this.BindGv_vStudentInfo_Cache]！");
        break;
      case "LoginFinish":
        s.PageLoad();
        break;
      default:
        r = E("类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！", t), console.error(r), alert(r);
        break;
    }
  }
  async PageLoad() {
    const t = this.PageLoad.name, e = N();
    try {
      e.userId != "" ? (C("#cancellation").show(), C("#educls_select").show(), C("#tz_login").hide(), C("#tz_Register").hide(), re.value = e.getUserName, L.vuebtn_Click("Bind_EduClsList", ""), ue.value = !0) : (C("#educls_select").hide(), re.value = "", C("#cancellation").hide(), C("#tz_login").show());
    } catch (s) {
      const r = `根据条件获取相应的记录对象的列表不成功,${s}.(in ${this.constructor.name}.${t})`;
      console.error(r), alert(r);
    }
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  static btn_Click(t, e) {
    const s = new L();
    switch (console.log(e), t) {
      case "Register":
        break;
      case "login":
        new de("Login", s), console.log("refLogin_Edit.value:(in Index_btn_Click)", j.value), j.value.btnLogin_Edit_Click(t, e);
        break;
      case "Cancellation":
        es();
        break;
      case "Console":
        ts();
        break;
      case "CopyRecord":
      case "Clone":
        break;
      case "ExportExcel":
        break;
      default:
        he(t, "PageHead_Game.btn_Click");
        break;
    }
  }
  //教学班教师
  static async EduCls_Click(t, e, s, r) {
    const d = await Ae(e);
    K(d) == !1 && (o.courseId = d), o.idCurrEduCls = e, o.eduClsTypeId = r, o.eduClsName = s, H.success("已切换教学班！");
  }
  //教学班教师
  async Bind_EduClsTeaList() {
    const t = this.Bind_EduClsTeaList.name, e = N();
    try {
      const s = " TeacherID='" + e.userId + "' order by updDate Desc", r = await ye(s);
      let d = o.idCurrEduCls, h = o.courseId, c = o.eduClsName, u = o.courseName, m = "";
      for (let p = 0; p < r.length; p++) {
        const f = r[p].idCurrEduCls, _ = r[p].eduClsName, b = r[p].eduClsTypeId, D = r[p].courseId, P = r[p].courseName, F = _ + "(" + P + ")";
        if (p == 0)
          if (o.idCurrEduCls == "")
            C("#eduClsName").html(F), o.idCurrEduCls = f, o.eduClsTypeId = b, o.eduClsName = _, o.courseId = D, o.courseName = P, h = D, c = _, u = P;
          else {
            const J = o.eduClsName + "(" + o.courseName + ")";
            C("#eduClsName").html(J);
          }
        m += '<dd><a onclick=EduCls_Click("' + f + '","' + _ + '","' + b + '","' + D + '","' + P + '")> ' + F + "</a></dd>";
      }
      this.ShowEduClsName(
        E("{0}({1})", c, u)
      ), C("#dlEduClsList").html(m);
    } catch (s) {
      const r = `获取教学班老师关系对象列表不成功,${s}.(in ${this.constructor.name}.${t})`;
      alert(r);
    }
  }
  //教学班学生
  async Bind_EduClsStuList() {
    const t = this.Bind_EduClsStuList.name, e = N();
    try {
      let s = "选择教学班";
      const r = " stuId='" + e.userId + "' order by modifyDate Desc", d = await be(r);
      let h = o.idCurrEduCls, c = o.courseId, u = o.eduClsName, m = o.courseName, p = "";
      for (let f = 0; f < d.length; f++) {
        const _ = d[f].idCurrEduCls, b = d[f].eduClsName, D = d[f].eduClsTypeId, P = d[f].courseId, F = d[f].courseName;
        s = b + "(" + F + ")", f == 0 && (o.idCurrEduCls == "" ? (C("#eduClsName").html(s), o.idCurrEduCls = _, o.eduClsTypeId = D, o.eduClsName = b, o.courseId = P, o.courseName = F, c = P, u = b, m = F) : (s = o.eduClsName + "(" + o.courseName + ")", C("#eduClsName").html(s))), p += '<dd><a onclick=EduCls_Click("' + _ + '","' + b + '","' + D + '","' + P + '","' + F + '")> ' + s + "</a></dd>";
      }
      this.ShowEduClsName(
        E("{0}({1})", u, m)
      ), C("#dlEduClsList").html(p);
    } catch (s) {
      const r = `根据条件获取相应的记录对象的列表不成功,${s}.(in ${this.constructor.name}.${t})`;
      console.error(r), alert(r);
    }
  }
  ShowEduClsName(t) {
    Xe("Index_Layout", "eduClsName", t), console.error("设置新的教学班:", t);
  }
  //教学班教师
  async EduCls_Click(t, e, s, r, d) {
    const h = N(), c = e + "(" + d + ")";
    if (C("#eduClsName").html(c), o.idCurrEduCls = t, o.eduClsTypeId = s, o.eduClsName = e, o.courseId = r, o.courseName = d, K(t) == !1)
      await _e(h.userId, "默认教学班Id", t);
    else {
      const u = E("新建教学班Id用户缺省值不成功，请检查!");
      console.error(u), alert(u);
      return;
    }
    this.ShowEduClsName(E("{0}({1})", e, d)), H.success("已切换教学班！");
  }
  //通过用户登录ID获取用户的角色名
  async btnConsole_Click() {
    const t = N();
    t.getRoleId == "00620001" ? window.location.href = "../Web/SIndexIframe" : t.getRoleId == "00620002";
  }
  //通过用户登录ID获取用户的角色名
  async btnCancellation_Click() {
    const t = N();
    t.userId = "", C("#educls_select").hide(), C("#cancellation").hide(), C("#tz_login").show(), C("#tz_Register").show(), re.value = "";
  }
}, i(L, "vuebtn_Click"), i(L, "GetPropValue"), i(L, "divLayout"), //界面布局的层对象
// public static EditRef: Ref<any>;
i(L, "divEdit"), i(L, "times4TestShowDialog", 0), i(L, "objPageCRUD"), L);
async function es() {
  const n = N();
  n.logout(), await n.logout(), C("#lnkUserName").hide(), C("#Cancellation").hide(), C("#tz_login").show(), C("#tz_Register").show(), re.value = "", C("#box3").hide(), C("#box4").hide(), ue.value = !1;
}
async function ts() {
  N().getRoleId == "00620001" && (window.location.href = "../Web/SIndexIframe");
}
const ss = Te({
  name: "Login",
  components: {
    // 组件注册
  },
  props: {
    systemName: {
      type: String,
      required: !0
    }
  },
  setup() {
    const n = l("用户登录"), t = l(""), e = l(""), s = l("登录"), r = l("取消"), d = (b, D) => {
      let P;
      switch (b) {
        case "btnCancelLogin":
          r.value = D;
          break;
        case "btnSubmitLogin":
          s.value = D;
          break;
        default:
          P = `按钮Id:${b} 在函数中没有被处理!`, console.error(P), alert(P);
          break;
      }
    }, h = (b) => {
      let D;
      switch (b) {
        case "btnCancelLogin":
          return r.value;
        case "btnSubmitLogin":
          return s.value;
        default:
          D = `按钮Id:${b} 在函数中没有被处理!`, console.error(D), alert(D);
          break;
      }
    }, c = () => {
      t.value == "" ? alert("请输入用户名！") : e.value == "" && alert("请输入密码！");
    }, u = l(!1), m = l("400px");
    return {
      strUserId: t,
      strPassword: e,
      btnLogin_Click: c,
      strTitle: n,
      dialogVisible: u,
      dialogWidth: m,
      showDialog: () => new Promise((b) => {
        u.value = !0, b("对话框打开成功"), setTimeout(() => {
          console.log("对话框已经显示!");
        }, 1e3);
      }),
      handleSave: () => {
        u.value = !1;
      },
      hideDialog: () => {
        u.value = !1;
      },
      strSubmitButtonText: s,
      strCancelButtonText: r,
      SetButtonText: d,
      GetButtonText: h
    };
  },
  methods: {
    // 方法定义
    btnClick(n, t) {
      alert(E("{0}-{1}", n, t));
    },
    /**
     *按钮单击,用于调用Js函数中btnEdit_Click
     *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
     **/
    btnLogin_Edit_Click(n, t) {
      console.log(n, t, "in btnLogin_Edit_Click"), console.log("refLogin_Edit.value:(in btnLogin_Edit_Click)", j.value), de.btnEdit_Click(n, t);
    },
    /**
     * 提交编辑
     *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
     **/
    Submit_Login(n) {
      alert(`提交${n}`);
    }
  }
}), is = { class: "custom-header" }, rs = {
  id: "divEditLayout",
  ref: "refDivEdit",
  class: "tab_layout"
}, as = { class: "login layui-anim layui-anim-up" }, os = {
  class: "message",
  style: { "text-align": "center" }
}, ns = { class: "mt-3" }, ds = {
  id: "txtUserId",
  ref: "strUserId",
  placeholder: "用户名",
  type: "text",
  class: "layui-input"
}, ls = {
  id: "txtPassword",
  ref: "strPassword",
  placeholder: "密码",
  type: "password",
  class: "layui-input"
};
function cs(n, t, e, s, r, d) {
  const h = Q("font-awesome-icon"), c = Q("el-button"), u = Q("el-dialog");
  return ie(), ft(u, {
    modelValue: n.dialogVisible,
    "onUpdate:modelValue": t[3] || (t[3] = (m) => n.dialogVisible = m),
    width: n.dialogWidth,
    "show-close": !1
  }, {
    header: ee(() => [
      I("div", is, [
        I("h3", null, V(n.strTitle), 1),
        q(c, {
          onClick: t[0] || (t[0] = (m) => n.dialogVisible = !1),
          type: "primary"
        }, {
          default: ee(() => [
            q(h, { icon: "times" })
          ]),
          _: 1
        })
      ])
    ]),
    footer: ee(() => [
      q(c, {
        id: "btnSubmitLogin",
        type: "primary",
        onClick: t[1] || (t[1] = (m) => n.btnLogin_Edit_Click("Submit", ""))
      }, {
        default: ee(() => [
          ce(V(n.strSubmitButtonText), 1)
        ]),
        _: 1
      }),
      q(c, {
        id: "btnCancelLogin",
        onClick: t[2] || (t[2] = (m) => n.dialogVisible = !1)
      }, {
        default: ee(() => [
          ce(V(n.strCancelButtonText), 1)
        ]),
        _: 1
      })
    ]),
    default: ee(() => [
      I("div", rs, [
        t[8] || (t[8] = I("div", {
          id: "divLoading",
          style: { width: "100%", height: "100px", position: "absolute", "z-index": "100", "text-align": "center", "margin-top": "300px", display: "none" }
        }, [
          I("img", {
            src: mt,
            height: "100",
            width: "100"
          })
        ], -1)),
        I("div", as, [
          I("div", os, [
            I("h4", null, V(n.systemName), 1)
          ]),
          t[6] || (t[6] = I("div", { id: "darkbannerwrap" }, null, -1)),
          I("div", ns, [
            I("input", ds, null, 512),
            t[4] || (t[4] = I("hr", {
              class: "hr15",
              style: { width: "80%" }
            }, null, -1)),
            I("input", ls, null, 512),
            t[5] || (t[5] = I("hr", {
              class: "hr15",
              style: { width: "80%" }
            }, null, -1))
          ]),
          t[7] || (t[7] = I("div", { style: { width: "100%" } }, [
            I("div", { id: "slider" })
          ], -1))
        ]),
        t[9] || (t[9] = I("input", {
          id: "hidState",
          type: "hidden"
        }, null, -1)),
        t[10] || (t[10] = I("input", {
          id: "hidOpType",
          type: "hidden"
        }, null, -1)),
        t[11] || (t[11] = I("input", {
          id: "hidKeyId",
          type: "hidden"
        }, null, -1))
      ], 512)
    ]),
    _: 1
  }, 8, ["modelValue", "width"]);
}
const us = /* @__PURE__ */ Ce(ss, [["render", cs]]), k = class k {
  BindGv(t, e) {
    console.log(t, e);
  }
  BindGvCache(t, e) {
    console.log("strPara", e);
    let s;
    k.objPageCRUD == null && (k.objPageCRUD = new k()), s = k.objPageCRUD;
    let r = "";
    switch (t) {
      case "Login":
        alert("该类没有绑定该函数：[this.BindGv_vStudentInfo_Cache]！");
        break;
      case "LoginFinish":
        s.PageLoad();
        break;
      default:
        r = E("类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！", t), console.error(r), alert(r);
        break;
    }
  }
  static btn_Click(t, e) {
    console.log(e);
    let s;
    k.objPageCRUD == null && (k.objPageCRUD = new k()), s = k.objPageCRUD;
    const r = new de("Login", s);
    switch (console.log(r), t) {
      case "Register":
        break;
      case "liPaper":
        break;
      case "login":
        console.log("refLogin_Edit.value:(in Index_btn_Click)", j.value), j.value == null && (j.value = k.EditRef), k.EditRef.value.btnLogin_Edit_Click(t, e);
        break;
      case "Cancellation":
        s.btnCancellation_Click();
        break;
      case "Console":
        s.btnConsole_Click();
        break;
      case "Query":
        break;
      case "CopyRecord":
      case "Clone":
        alert("请选择需要复制的记录！");
        return;
      default:
        he(t, "Index_btn_Click");
        break;
    }
  }
  async PageLoad() {
    const t = this.PageLoad.name;
    try {
      N().userId != "" ? (C("#cancellation").show(), C("#educls_select").show(), C("#tz_login").hide(), C("#tz_Register").hide(), await k.vuebtn_Click("Bind_EduClsList", ""), await k.vuebtn_Click("setRoles", ""), await k.vuebtn_Click("setEduClss", "")) : (C("#educls_select").hide(), C("#cancellation").hide(), C("#tz_login").show());
    } catch (e) {
      const s = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${t})`;
      console.error(s), alert(s);
    }
  }
  //教学班教师
  async Bind_EduClsTeaList() {
    const t = this.Bind_EduClsTeaList.name;
    try {
      const s = " TeacherID='" + N().userId + "' order by updDate Desc", r = await ye(s);
      let d = o.idCurrEduCls, h = o.courseId, c = o.eduClsName, u = o.courseName, m = "";
      for (let p = 0; p < r.length; p++) {
        const f = r[p].idCurrEduCls, _ = r[p].eduClsName, b = r[p].eduClsTypeId, D = r[p].courseId, P = r[p].courseName, F = _ + "(" + P + ")";
        if (p == 0)
          if (o.idCurrEduCls == "")
            C("#eduClsName").html(F), o.idCurrEduCls = f, o.eduClsTypeId = b, o.eduClsName = _, o.courseId = D, o.courseName = P, h = D, c = _, u = P;
          else {
            const J = o.eduClsName + "(" + o.courseName + ")";
            C("#eduClsName").html(J);
          }
        m += '<dd><a onclick=EduCls_Click("' + f + '","' + _ + '","' + b + '","' + D + '","' + P + '")> ' + F + "</a></dd>";
      }
      this.ShowEduClsName(
        E("{0}({1})", c, u)
      ), C("#dlEduClsList").html(m);
    } catch (e) {
      const s = `获取教学班老师关系对象列表不成功,${e}.(in ${this.constructor.name}.${t})`;
      alert(s);
    }
  }
  //教学班学生
  async Bind_EduClsStuList() {
    const t = this.Bind_EduClsStuList.name;
    try {
      const e = N();
      let s = "选择教学班";
      const r = " stuId='" + e.userId + "' order by modifyDate Desc", d = await be(r);
      let h = o.idCurrEduCls, c = o.courseId, u = o.eduClsName, m = o.courseName, p = "";
      for (let f = 0; f < d.length; f++) {
        const _ = d[f].idCurrEduCls, b = d[f].eduClsName, D = d[f].eduClsTypeId, P = d[f].courseId, F = d[f].courseName;
        s = b + "(" + F + ")", f == 0 && (o.idCurrEduCls == "" ? (C("#eduClsName").html(s), o.idCurrEduCls = _, o.eduClsTypeId = D, o.eduClsName = b, o.courseId = P, o.courseName = F, c = P, u = b, m = F) : (s = o.eduClsName + "(" + o.courseName + ")", C("#eduClsName").html(s))), p += '<dd><a onclick=EduCls_Click("' + _ + '","' + b + '","' + D + '","' + P + '","' + F + '")> ' + s + "</a></dd>";
      }
      this.ShowEduClsName(
        E("{0}({1})", u, m)
      ), C("#dlEduClsList").html(p);
    } catch (e) {
      const s = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${t})`;
      console.error(s), alert(s);
    }
  }
  ShowEduClsName(t) {
    Xe("Index_Layout", "eduClsName", t), console.error("设置新的教学班:", t);
  }
  //教学班教师
  async EduCls_Click(t, e, s, r, d) {
    const h = N(), c = e + "(" + d + ")";
    if (C("#eduClsName").html(c), o.idCurrEduCls = t, o.eduClsTypeId = s, o.eduClsName = e, o.courseId = r, o.courseName = d, K(t) == !1)
      await _e(h.userId, "默认教学班Id", t);
    else {
      const u = E("新建教学班Id用户缺省值不成功，请检查!");
      console.error(u), alert(u);
      return;
    }
    this.ShowEduClsName(E("{0}({1})", e, d)), H.success("已切换教学班！"), Reload();
  }
  //通过用户登录ID获取用户的角色名
  async btnConsole_Click() {
    const t = N();
    t.getRoleId == "00620001" ? window.location.href = "../Web/SIndexIframe" : t.getRoleId == "00620002";
  }
  //通过用户登录ID获取用户的角色名
  async btnCancellation_Click() {
    const t = N();
    t.userId = "", C("#educls_select").hide(), C("#userName").hide(), C("#cancellation").hide(), C("#tz_login").show(), C("#tz_Register").show();
  }
  //菜单通道
  async liMenu_Click(t) {
    console.log("liMenu_Click", t);
    const e = N();
    if (e.userId != "")
      switch (t) {
        case 1:
          x.push("/Basicknowledge");
          break;
        case 2:
          x.push("/KnowledgeAssess");
          break;
        case 5:
          x.push("/KnowledgeGraph");
          break;
        case 6:
          x.push("/ExamSet");
          break;
        case 7:
          x.push("/Work");
          break;
        case 8:
          x.push("/LearningCommunity");
          break;
        case 9:
          switch (console.log("userStore.getRoleId", e.getRoleId), e.getRoleId) {
            case "00620001":
              x.push("/SIndexIframe?menuSetId=0025");
              break;
            case "00620002":
              x.push("/SIndexIframe?menuSetId=0025");
              break;
            case "00620013":
              x.push("/SIndexIframe?menuSetId=0025");
              break;
            case "00620018":
            case "00620019":
              x.push("/SIndexIframe?menuSetId=0025");
              break;
            default:
              H.warning("您的角色权限不够！");
              break;
          }
          break;
        case 10:
          switch (e.getRoleId) {
            case R.Regular_Student_00620003:
            case R.High_School_Student_00620017:
              x.push("/BottleGameStart");
              break;
            case R.Regular_Teacher_00620002:
            case R.K_12_Teacher_00620013:
            case R.System_Admin_00620001:
            case R.Secondary_School_System_Admin_00620018:
            case R.University_System_Admin_00620019:
              x.push("/BottleGame");
              break;
            default:
              H.warning("您的角色权限不够！"), window.location.href = "../Web/SIndexIframe";
              break;
          }
          break;
      }
    else
      H.warning("您还没登录，请点击右上角登录后再进入该模块！");
  }
  ////基础知识
  //public async liPaper_Click() {
  //    if (userStore.userId != "") {
  //        //window.location.href = "../Web/SIndexIframe?page=1";
  //        window.location.href = "../Web/Basicknowledge";
  //    }
  //    else {
  //        message.warning("您还没登录，请点击右上角登录后再进入该模块！");
  //    }
  //}
  ////作业
  //public async liqaTags_Click() {
  //    if (userStore.userId != "") {
  //        window.location.href = "../Web/Work";
  //        //window.location.href = "../Web/SIndexIframe?page=2";
  //    }
  //    else {
  //        message.warning("您还没登录，请点击右上角登录后再进入该模块！");
  //    }
  //}
  ////学习社区
  //public async liUserCenter_Click() {
  //    if (userStore.userId != "") {
  //        window.location.href = "../Web/LearningCommunity";
  //    }
  //    else {
  //        message.warning("您还没登录，请点击右上角登录后再进入该模块！");
  //    }
  //}
  ////系统设置
  //public async liTool_Click() {
  //    if (userStore.userId != "") {
  //        if (userStore.getRoleId == "00620001") {
  //            //window.location.href = "../Web/SIndexIframe?page=4";
  //            window.location.href = "../Web/SIndexIframe";
  //        }
  //        //老师
  //        else if (userStore.getRoleId == "00620002") {
  //            //message.warning("您的角色权限不够！");
  //            window.location.href = "../Web/SIndexIframe";
  //        }
  //        //学生
  //        else {
  //            message.warning("您的角色权限不够！");
  //            //window.location.href = "../Web/SIndexIframe";
  //        }
  //    }
  //    else {
  //        message.warning("您还没登录，请点击右上角登录后再进入该模块！");
  //    }
  //}
};
i(k, "vuebtn_Click"), i(k, "divLayout"), //界面布局的层对象
i(k, "EditRef"), i(k, "divEdit"), i(k, "times4TestShowDialog", 0), i(k, "objPageCRUD");
let se = k;
const hs = {
  name: "MyDropButton",
  props: {
    title: {
      type: String,
      required: !0,
      default: "按钮列表"
    },
    buttons: {
      type: Array,
      required: !0
    },
    isVisible: {
      type: Boolean,
      required: !0,
      default: !0
    },
    isReplaceTitle: {
      type: Boolean,
      required: !0,
      default: !1
    }
  },
  emits: ["on-button-click"],
  setup(n, { emit: t }) {
    const e = l(!1), s = l(n.isVisible), r = l(n.title);
    ve(() => {
      n.isReplaceTitle == !0 && n.buttons.length > 0 && (r.value = n.buttons[0].text);
    });
    const d = [
      { type: "btn", keyId: "button1", text: "添加按钮1111", title: "" },
      { type: "btn", keyId: "button2", text: "删除按钮2222", title: "" },
      { type: "btn", keyId: "button3", text: "修改按钮3333", title: "" }
    ];
    function h() {
      e.value = !e.value;
    }
    function c() {
      alert("myFun1");
    }
    function u(p) {
      r.value = p;
    }
    function m(p, f) {
      console.log("Clicked:", f), n.isReplaceTitle == !0 && (r.value = f), e.value = !1, t("on-button-click", {
        keyId: p,
        inputText: f,
        content: "按钮单击事件"
      });
    }
    return {
      isDropdownOpen: e,
      toggleDropdown: h,
      handleItemClick: m,
      buttonsBak: d,
      visible: s,
      btnLabel: r,
      myFun1: c,
      SetTitle: u
    };
  }
};
const Cs = {
  class: "dropdown-container",
  style: { "z-index": "999" }
}, ms = ["onClick"];
function gs(n, t, e, s, r, d) {
  const h = Q("font-awesome-icon");
  return ie(), ne("div", Cs, [
    I("button", {
      class: "dropdown-btn2",
      onClick: t[0] || (t[0] = (...c) => s.toggleDropdown && s.toggleDropdown(...c))
    }, [
      ce(V(s.btnLabel) + " ", 1),
      q(h, { icon: ["fas", "caret-down"] })
    ]),
    I("div", {
      class: "dropdown-content",
      style: It({ display: s.isDropdownOpen ? "block" : "none" })
    }, [
      (ie(!0), ne(St, null, yt(e.buttons, (c) => (ie(), ne("span", {
        class: "dropdown-item",
        key: c.keyId,
        onClick: (u) => s.handleItemClick(c.keyId, c.text)
      }, V(c.text), 9, ms))), 128))
    ], 4)
  ]);
}
const Ge = /* @__PURE__ */ Ce(hs, [["render", gs], ["__scopeId", "data-v-28d433fc"]]), ps = Te({
  name: "PageHead_Game",
  components: {
    // 组件注册
    LoginCom: us,
    MyDropButton: Ge,
    DropButtonEduCls: Ge
  },
  props: {
    title: {
      type: String,
      required: !0
    }
    //    isShowEduCls: {
    //      type: String,
    //      required: true,
    //    },
    //    isShowPaperIframe: {
    //      type: String,
    //      required: true,
    //    },
    //    isShowTopic: {
    //      type: String,
    //      required: true,
    //    },
    //    isShowMajor: {
    //      type: String,
    //      required: true,
    //    },
    //    isShowSearch: {
    //      type: String,
    //      required: true,
    //    },
    //    headerHeight: {
    //      type: String,
    //      required: true,
    //      default: '60',
    //    },
  },
  setup(n) {
    const t = N(), e = l(""), s = l(""), r = l([
      { type: "btn", keyId: "button1", text: "角色1", title: "" }
    ]), d = l([
      { type: "btn", keyId: "button1", text: "EduCls1", title: "" }
    ]), h = l(!0), c = l("角色"), u = l(), m = l(), p = async () => {
      if (t.getIdSchool != "") {
        const T = await gt(t.getIdSchool);
        T != null && (e.value = T.schoolNameA, K(e.value) && (e.value = T.schoolName));
      } else
        e.value = "无角色学校";
      console.log("schoolSimName:", e.value);
    }, f = async (T) => {
      const S = T.keyId, w = r.value.find(($) => $.keyId == S);
      w != null && (await t.setRoleId(S, oe.currSelPrjId), t.setRoleName(w.text), await p(), console.log("userStore.userTypeId:", t.userTypeId), S === "button1" ? alert("button1") : S === "button2" ? alert(w.keyId + w.text) : S === "button3" && alert("button3"));
    }, _ = async (T) => {
      const S = T.keyId;
      if (d.value.find((B) => B.keyId == S) == null)
        return;
      const $ = F.value, M = await le(S);
      M != null && te.EduCls_Click(
        $,
        M.idCurrEduCls,
        M.eduClsName,
        M.eduClsTypeId
      );
    }, b = l("游戏化教学平台"), D = l("关注论文"), P = l(), F = l(), J = l(!0), we = l(!0), Je = l("pyf");
    async function Ye() {
      console.log(Je);
    }
    ve(async () => {
      switch (te.divLayout = F.value, te.vuebtn_Click = Ne, te.GetPropValue = Ze, t.getUserType === Ve.middle_School && (J.value = !1, D.value = "关注课文"), t.roleId) {
        case R.System_Admin_00620001:
        case R.K_12_Teacher_00620013:
        case R.Regular_Teacher_00620002:
        case R.Regular_Student_00620003:
        case R.High_School_Student_00620017:
        case R.Secondary_School_System_Admin_00620018:
        case "00620019":
          we.value = !0, ue.value = !0, re.value = t.getUserName;
          break;
        default:
          we.value = !1;
          break;
      }
      p();
    });
    function Ze(T) {
      switch (T) {
        case "title":
          return n.title;
        default:
          return "";
      }
    }
    async function De() {
      r.value.splice(0, r.value.length);
      let T = t.getUserId;
      if (console.log("userId in setRoles:", T), T == "" && (T = t.getUserId), T == "") {
        console.error(`用户:[${T}]的为空，请检查！`);
        return;
      }
      let S = t.getRoleIds;
      if (S.length == 0 && (S = await t.getRoleIdLst(T), S.length == 0)) {
        console.error(`用户:[${T}]的角色为空，请检查！`);
        return;
      }
      const w = t.getRoleNames;
      for (let B = 0; B < S.length; B++)
        r.value.push({
          type: "btn",
          keyId: S[B],
          text: `${w[B]}`,
          title: ""
        });
      t.roleId == "" && (t.setRoleId(S[0], oe.currSelPrjId), t.setRoleName(w[0]));
      const M = t.roleName;
      u.value.SetTitle(`(${M})`);
    }
    async function Pe() {
      d.value.splice(0, d.value.length);
      let T = o.idCurrEduCls;
      console.log("strIdCurrEduCls in setEduClss:", T);
      const S = o.eduClsName;
      m.value.SetTitle(`(${S})`);
    }
    function et(T, S, w, $, M) {
      new se().EduCls_Click(T, S, w, $, M);
    }
    async function ke() {
      t.getRoleId == "00620003" || t.getRoleId == R.High_School_Student_00620017 ? await Ee() : await Re();
    }
    async function Re() {
      const T = Re.name;
      try {
        const S = " TeacherID='" + t.userId + "' order by updDate Desc", w = await ye(S);
        let $ = o.idCurrEduCls, M = o.courseId, B = o.eduClsName, me = o.courseName, ge = "";
        for (let G = 0; G < w.length; G++) {
          const O = w[G].idCurrEduCls, A = w[G].eduClsName, z = w[G].eduClsTypeId, Y = w[G].courseId, W = w[G].courseName, Z = A + "(" + W + ")";
          if (d.value.push({
            type: "btn",
            keyId: O,
            text: A,
            title: ""
          }), G == 0)
            if (o.idCurrEduCls == "")
              o.idCurrEduCls = O, o.eduClsTypeId = z, o.eduClsName = A, o.courseId = Y, o.courseName = W, M = Y, B = A, me = W;
            else {
              const ks = o.eduClsName + "(" + o.courseName + ")";
            }
          ge += '<dd><a @click=EduCls_Click("' + O + '","' + A + '","' + z + '","' + Y + '","' + W + '")> ' + Z + "</a></dd>";
        }
      } catch (S) {
        const w = `获取教学班老师关系对象列表不成功,${S}.(in ${T})`;
        alert(w);
      }
    }
    async function Ee() {
      const T = Ee.name;
      try {
        let S = "选择教学班";
        const w = " stuId='" + t.userId + "' order by modifyDate Desc", $ = await be(w);
        let M = o.idCurrEduCls, B = o.courseId, me = o.eduClsName, ge = o.courseName, G = "";
        for (let O = 0; O < $.length; O++) {
          const A = $[O].idCurrEduCls, z = $[O].eduClsName, Y = $[O].eduClsTypeId, W = $[O].courseId, Z = $[O].courseName;
          S = z + "(" + Z + ")", d.value.push({
            type: "btn",
            keyId: A,
            text: z,
            title: ""
          }), O == 0 && (o.idCurrEduCls == "" ? (o.idCurrEduCls = A, o.eduClsTypeId = Y, o.eduClsName = z, o.courseId = W, o.courseName = Z, B = W, me = z, ge = Z) : (S = o.eduClsName + "(" + o.courseName + ")", C("#eduClsName").html(S))), G += '<dd><a @click=EduCls_Click("' + A + '","' + z + '","' + Y + '","' + W + '","' + Z + '")> ' + S + "</a></dd>";
        }
      } catch (S) {
        const w = `根据条件获取相应的记录对象的列表不成功,${S}.(in ${T})`;
        console.error(w), alert(w);
      }
    }
    function Ne(T, S) {
      switch (console.log(S), T) {
        case "setRoles":
          De();
          return;
        case "setEduClss":
          Pe();
          return;
        case "Bind_EduClsList":
          ke();
          return;
        case "login":
          console.log("refLogin_Edit.value:", j.value);
          break;
        case "Register":
          break;
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
          x.push("/about"), console.log("router.push('/about');");
          break;
      }
      te.btn_Click(T, S);
    }
    return {
      refLogin_Edit: j,
      refDivLayout_Head: F,
      btn_Click: Ne,
      getUser: Ye,
      isShowMajor1: J,
      selectedValue: P,
      focusPaper: D,
      EduCls_Click: et,
      mySystemName: b,
      btnRoles: r,
      btnEduClss: d,
      visible: h,
      myTitle1: c,
      handleRoleChange: f,
      handleEduClsChange: _,
      refDropButtonRoles: u,
      refDropButtonEduClss: m,
      Bind_EduClsList: ke,
      setRoles: De,
      setEduClss: Pe,
      indexTitle: s,
      schoolSimName: e,
      userLoginInfo: re,
      isShowDdlRoles: ue
    };
  },
  methods: {
    PageLoad() {
      new se().PageLoad();
    },
    btnConsole_Click() {
      new se().btnConsole_Click();
    },
    //注销
    btnCancellation_Click() {
      new se().btnCancellation_Click();
    },
    async EduClsItemChange() {
      const n = this.selectedValue, t = this.refDivLayout_Head, e = await le(n);
      e != null && te.EduCls_Click(
        t,
        e.idCurrEduCls,
        e.eduClsName,
        e.eduClsTypeId
      );
    }
  }
});
const fs = {
  id: "divLayout_Head",
  ref: "refDivLayout_Head",
  style: { "z-index": "1" }
}, Is = {
  id: "Index_Layout",
  class: "top"
}, Ss = { class: "top_con" }, ys = { class: "top_title" }, bs = {
  id: "indexTitle",
  class: "sub_Title",
  style: { color: "white" }
}, Ts = { class: "myTop_login" }, vs = { class: "myContainer" }, _s = { style: { "z-index": "2000" } }, ws = {
  class: "item",
  style: { color: "white" },
  title: "当前角色所管理的学校"
}, Ds = {
  id: "educls_select",
  style: { "margin-right": "30px", "margin-top": "10px", "text-align": "center" }
};
function Ps(n, t, e, s, r, d) {
  const h = Q("MyDropButton"), c = Q("DropButtonEduCls"), u = Q("LoginCom");
  return ie(), ne("div", fs, [
    I("div", Is, [
      I("div", Ss, [
        I("div", ys, [
          t[4] || (t[4] = I("a", {
            id: "web_Title",
            class: "web_Title",
            style: { color: "white" },
            href: "index"
          }, "游戏化教育平台", -1)),
          t[5] || (t[5] = ce("   ")),
          I("a", bs, V(n.indexTitle), 1)
        ]),
        I("div", Ts, [
          I("div", vs, [
            I("a", {
              id: "tz_login",
              class: "item",
              href: "javascript:void(0)",
              onClick: t[0] || (t[0] = (m) => n.btn_Click("login", ""))
            }, " 登录 "),
            I("a", {
              id: "tz_Register",
              class: "item",
              href: "javascript:void(0)",
              onClick: t[1] || (t[1] = (m) => n.btn_Click("Register", ""))
            }, "注册"),
            I("a", {
              id: "userName1",
              class: "item",
              href: "javascript:void(0)",
              onClick: t[2] || (t[2] = (m) => n.btnConsole_Click())
            }, V(n.userLoginInfo), 1),
            bt(I("div", _s, [
              q(h, {
                class: "item",
                ref: "refDropButtonRoles",
                buttons: n.btnRoles,
                "is-visible": n.visible,
                title: n.myTitle1,
                "is-replace-title": !0,
                onOnButtonClick: n.handleRoleChange
              }, null, 8, ["buttons", "is-visible", "title", "onOnButtonClick"])
            ], 512), [
              [Tt, n.isShowDdlRoles]
            ]),
            I("a", {
              id: "cancellation",
              class: "item",
              href: "javascript:void(0)",
              style: { display: "none", color: "darkorange" },
              onClick: t[3] || (t[3] = (m) => n.btn_Click("Cancellation", ""))
            }, "注销"),
            I("span", ws, V(n.schoolSimName), 1)
          ]),
          I("div", Ds, [
            q(c, {
              ref: "refDropButtonEduClss",
              buttons: n.btnEduClss,
              "is-visible": n.visible,
              title: n.myTitle1,
              "is-replace-title": !0,
              onOnButtonClick: n.handleEduClsChange
            }, null, 8, ["buttons", "is-visible", "title", "onOnButtonClick"])
          ])
        ])
      ])
    ]),
    q(u, {
      ref: "refLogin_Edit",
      "system-name": n.mySystemName
    }, null, 8, ["system-name"])
  ], 512);
}
const Ls = /* @__PURE__ */ Ce(ps, [["render", Ps], ["__scopeId", "data-v-c7b7bfd5"]]);
export {
  se as I,
  us as L,
  Ge as M,
  Fs as P,
  Ls as a
};
