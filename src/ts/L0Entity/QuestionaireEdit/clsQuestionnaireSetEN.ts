
 /**
 * 类名:clsQuestionnaireSetEN
 * 表名:QuestionnaireSet(01120007)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 17:12:34
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 问卷集(QuestionnaireSet)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQuestionnaireSetEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QuestionnaireSet"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionnaireSetId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["questionnaireSetId", "questionnaireSetName", "orderFieldInExport", "classNo", "classNo2", "isShowQuestionNo", "logoFileName", "updDate", "updUser", "memo"];
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
private mstrQuestionnaireSetId = "";    //问卷集ID
private mstrQuestionnaireSetName = "";    //问卷集名
private mstrOrderFieldInExport = "";    //导出排序字段
private mintClassNo = 0;    //分类号1
private mintClassNo2 = 0;    //分类号2
private mbolIsShowQuestionNo = false;    //是否显示问题编号
private mstrLogoFileName = "";    //Logo文件名
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 问卷集ID(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionnaireSetId (value: string)
{
if (value  != undefined)
{
 this.questionnaireSetId = value;
    this.hmProperty["questionnaireSetId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 问卷集名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionnaireSetName (value: string)
{
if (value  != undefined)
{
 this.questionnaireSetName = value;
    this.hmProperty["questionnaireSetName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 导出排序字段(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderFieldInExport (value: string)
{
if (value  != undefined)
{
 this.orderFieldInExport = value;
    this.hmProperty["orderFieldInExport"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 分类号1(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClassNo (value: number)
{
if (value  != undefined)
{
 this.classNo = value;
    this.hmProperty["classNo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 分类号2(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClassNo2 (value: number)
{
if (value  != undefined)
{
 this.classNo2 = value;
    this.hmProperty["classNo2"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否显示问题编号(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsShowQuestionNo (value: boolean)
{
if (value  != undefined)
{
 this.isShowQuestionNo = value;
    this.hmProperty["isShowQuestionNo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Logo文件名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLogoFileName (value: string)
{
if (value  != undefined)
{
 this.logoFileName = value;
    this.hmProperty["logoFileName"] = true;
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
case clsQuestionnaireSetEN.con_QuestionnaireSetId:
return this.questionnaireSetId;
case clsQuestionnaireSetEN.con_QuestionnaireSetName:
return this.questionnaireSetName;
case clsQuestionnaireSetEN.con_OrderFieldInExport:
return this.orderFieldInExport;
case clsQuestionnaireSetEN.con_ClassNo:
return this.classNo;
case clsQuestionnaireSetEN.con_ClassNo2:
return this.classNo2;
case clsQuestionnaireSetEN.con_IsShowQuestionNo:
return this.isShowQuestionNo;
case clsQuestionnaireSetEN.con_LogoFileName:
return this.logoFileName;
case clsQuestionnaireSetEN.con_UpdDate:
return this.updDate;
case clsQuestionnaireSetEN.con_UpdUser:
return this.updUser;
case clsQuestionnaireSetEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QuestionnaireSet]中不存在!`;
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
case clsQuestionnaireSetEN.con_QuestionnaireSetId:
this.questionnaireSetId = strValue;
    this.hmProperty["questionnaireSetId"] = true;
break;
case clsQuestionnaireSetEN.con_QuestionnaireSetName:
this.questionnaireSetName = strValue;
    this.hmProperty["questionnaireSetName"] = true;
break;
case clsQuestionnaireSetEN.con_OrderFieldInExport:
this.orderFieldInExport = strValue;
    this.hmProperty["orderFieldInExport"] = true;
break;
case clsQuestionnaireSetEN.con_ClassNo:
this.classNo = Number(strValue);
    this.hmProperty["classNo"] = true;
break;
case clsQuestionnaireSetEN.con_ClassNo2:
this.classNo2 = Number(strValue);
    this.hmProperty["classNo2"] = true;
break;
case clsQuestionnaireSetEN.con_IsShowQuestionNo:
this.isShowQuestionNo = Boolean(strValue);
    this.hmProperty["isShowQuestionNo"] = true;
break;
case clsQuestionnaireSetEN.con_LogoFileName:
this.logoFileName = strValue;
    this.hmProperty["logoFileName"] = true;
break;
case clsQuestionnaireSetEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQuestionnaireSetEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsQuestionnaireSetEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QuestionnaireSet]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public questionnaireSetId = "";    //问卷集ID
public questionnaireSetName = "";    //问卷集名
public orderFieldInExport = "";    //导出排序字段
public classNo = 0;    //分类号1
public classNo2 = 0;    //分类号2
public isShowQuestionNo = false;    //是否显示问题编号
public logoFileName = "";    //Logo文件名
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"QuestionnaireSetId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionnaireSetId(): string {return "questionnaireSetId";}    //问卷集ID

 /**
 * 常量:"QuestionnaireSetName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionnaireSetName(): string {return "questionnaireSetName";}    //问卷集名

 /**
 * 常量:"OrderFieldInExport"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderFieldInExport(): string {return "orderFieldInExport";}    //导出排序字段

 /**
 * 常量:"ClassNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClassNo(): string {return "classNo";}    //分类号1

 /**
 * 常量:"ClassNo2"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClassNo2(): string {return "classNo2";}    //分类号2

 /**
 * 常量:"IsShowQuestionNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsShowQuestionNo(): string {return "isShowQuestionNo";}    //是否显示问题编号

 /**
 * 常量:"LogoFileName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LogoFileName(): string {return "logoFileName";}    //Logo文件名

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
//return propName in new clsQuestionnaireSetEN();
const instance = new clsQuestionnaireSetEN();
return instance.hasOwnProperty(propName);
}
}