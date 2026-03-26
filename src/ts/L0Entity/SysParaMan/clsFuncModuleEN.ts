
 /**
 * 类名:clsFuncModuleEN
 * 表名:FuncModule(01120121)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:19
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数管理(SysParaMan)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 功能模块(FuncModule)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsFuncModuleEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "FuncModule"; //当前表名,与该类相关的表名
public static _KeyFldName= "FuncModuleId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["funcModuleId", "funcModuleName", "funcModuleNameSim", "memo", "updDate", "updUser", "orderNum", "prjId", "funcModuleEnName", "useStateId"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mstrFuncModuleId = "";    //功能模块Id
private mstrFuncModuleName = "";    //功能模块名称
private mstrFuncModuleNameSim = "";    //功能模块简称
private mstrMemo = "";    //备注
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mintOrderNum = 0;    //序号
private mstrPrjId = "";    //PrjId
private mstrFuncModuleEnName = "";    //FuncModuleEnName
private mstrUseStateId = "";    //UseStateId

/**
 * 功能模块Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFuncModuleId (value: string)
{
if (value  != undefined)
{
 this.funcModuleId = value;
    this.hmProperty["funcModuleId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 功能模块名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFuncModuleName (value: string)
{
if (value  != undefined)
{
 this.funcModuleName = value;
    this.hmProperty["funcModuleName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 功能模块简称(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFuncModuleNameSim (value: string)
{
if (value  != undefined)
{
 this.funcModuleNameSim = value;
    this.hmProperty["funcModuleNameSim"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * PrjId(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPrjId (value: string)
{
if (value  != undefined)
{
 this.prjId = value;
    this.hmProperty["prjId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * FuncModuleEnName(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFuncModuleEnName (value: string)
{
if (value  != undefined)
{
 this.funcModuleEnName = value;
    this.hmProperty["funcModuleEnName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * UseStateId(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUseStateId (value: string)
{
if (value  != undefined)
{
 this.useStateId = value;
    this.hmProperty["useStateId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}


/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsFuncModuleEN.con_FuncModuleId:
return this.funcModuleId;
case clsFuncModuleEN.con_FuncModuleName:
return this.funcModuleName;
case clsFuncModuleEN.con_FuncModuleNameSim:
return this.funcModuleNameSim;
case clsFuncModuleEN.con_Memo:
return this.memo;
case clsFuncModuleEN.con_UpdDate:
return this.updDate;
case clsFuncModuleEN.con_UpdUser:
return this.updUser;
case clsFuncModuleEN.con_OrderNum:
return this.orderNum;
case clsFuncModuleEN.con_PrjId:
return this.prjId;
case clsFuncModuleEN.con_FuncModuleEnName:
return this.funcModuleEnName;
case clsFuncModuleEN.con_UseStateId:
return this.useStateId;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[FuncModule]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsFuncModuleEN.con_FuncModuleId:
this.funcModuleId = strValue;
    this.hmProperty["funcModuleId"] = true;
break;
case clsFuncModuleEN.con_FuncModuleName:
this.funcModuleName = strValue;
    this.hmProperty["funcModuleName"] = true;
break;
case clsFuncModuleEN.con_FuncModuleNameSim:
this.funcModuleNameSim = strValue;
    this.hmProperty["funcModuleNameSim"] = true;
break;
case clsFuncModuleEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsFuncModuleEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsFuncModuleEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsFuncModuleEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsFuncModuleEN.con_PrjId:
this.prjId = strValue;
    this.hmProperty["prjId"] = true;
break;
case clsFuncModuleEN.con_FuncModuleEnName:
this.funcModuleEnName = strValue;
    this.hmProperty["funcModuleEnName"] = true;
break;
case clsFuncModuleEN.con_UseStateId:
this.useStateId = strValue;
    this.hmProperty["useStateId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[FuncModule]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public funcModuleId = "";    //功能模块Id
public funcModuleName = "";    //功能模块名称
public funcModuleNameSim = "";    //功能模块简称
public memo = "";    //备注
public updDate = "";    //修改日期
public updUser = "";    //修改人
public orderNum = 0;    //序号
public prjId = "";    //PrjId
public funcModuleEnName = "";    //FuncModuleEnName
public useStateId = "";    //UseStateId


 /**
 * 常量:"FuncModuleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleId(): string {return "funcModuleId";}    //功能模块Id

 /**
 * 常量:"FuncModuleName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleName(): string {return "funcModuleName";}    //功能模块名称

 /**
 * 常量:"FuncModuleNameSim"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleNameSim(): string {return "funcModuleNameSim";}    //功能模块简称

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"PrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PrjId(): string {return "prjId";}    //PrjId

 /**
 * 常量:"FuncModuleEnName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleEnName(): string {return "funcModuleEnName";}    //FuncModuleEnName

 /**
 * 常量:"UseStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UseStateId(): string {return "useStateId";}    //UseStateId

 /**
 * 设置条件字段值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
 * @param strFldName:字段名
 * @param strFldValue:字段值
 * @param strComparisonOp:比较操作条符
 * @returns 根据关键字获取的名称
 **/
public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {                
this.SetFldValue(strFldName, strFldValue);
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsFuncModuleEN();
const instance = new clsFuncModuleEN();
return instance.hasOwnProperty(propName);
}
}