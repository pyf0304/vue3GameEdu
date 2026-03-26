
 /**
 * 类名:clsSubmitStatusEN
 * 表名:SubmitStatus(01120970)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:30:35
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本表(BaseTab)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 送审状态(SubmitStatus)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsSubmitStatusEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "SubmitStatus"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdSubmitStatus"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["idSubmitStatus", "submitStatusDesc", "submitStatusEnDesc", "memo"];
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
private mstrIdSubmitStatus = "";    //送审状态流水号
private mstrSubmitStatusDesc = "";    //送审状态流描述
private mstrSubmitStatusEnDesc = "";    //送审状态流英文描述
private mstrMemo = "";    //备注

/**
 * 送审状态流水号(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdSubmitStatus (value: string)
{
if (value  != undefined)
{
 this.idSubmitStatus = value;
    this.hmProperty["idSubmitStatus"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 送审状态流描述(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSubmitStatusDesc (value: string)
{
if (value  != undefined)
{
 this.submitStatusDesc = value;
    this.hmProperty["submitStatusDesc"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 送审状态流英文描述(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSubmitStatusEnDesc (value: string)
{
if (value  != undefined)
{
 this.submitStatusEnDesc = value;
    this.hmProperty["submitStatusEnDesc"] = true;
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
case clsSubmitStatusEN.con_IdSubmitStatus:
return this.idSubmitStatus;
case clsSubmitStatusEN.con_SubmitStatusDesc:
return this.submitStatusDesc;
case clsSubmitStatusEN.con_SubmitStatusEnDesc:
return this.submitStatusEnDesc;
case clsSubmitStatusEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SubmitStatus]中不存在!`;
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
case clsSubmitStatusEN.con_IdSubmitStatus:
this.idSubmitStatus = strValue;
    this.hmProperty["idSubmitStatus"] = true;
break;
case clsSubmitStatusEN.con_SubmitStatusDesc:
this.submitStatusDesc = strValue;
    this.hmProperty["submitStatusDesc"] = true;
break;
case clsSubmitStatusEN.con_SubmitStatusEnDesc:
this.submitStatusEnDesc = strValue;
    this.hmProperty["submitStatusEnDesc"] = true;
break;
case clsSubmitStatusEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SubmitStatus]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idSubmitStatus = "";    //送审状态流水号
public submitStatusDesc = "";    //送审状态流描述
public submitStatusEnDesc = "";    //送审状态流英文描述
public memo = "";    //备注


 /**
 * 常量:"IdSubmitStatus"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSubmitStatus(): string {return "idSubmitStatus";}    //送审状态流水号

 /**
 * 常量:"SubmitStatusDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SubmitStatusDesc(): string {return "submitStatusDesc";}    //送审状态流描述

 /**
 * 常量:"SubmitStatusEnDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SubmitStatusEnDesc(): string {return "submitStatusEnDesc";}    //送审状态流英文描述

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
const instance = new clsSubmitStatusEN();
return instance.hasOwnProperty(propName);
}
}