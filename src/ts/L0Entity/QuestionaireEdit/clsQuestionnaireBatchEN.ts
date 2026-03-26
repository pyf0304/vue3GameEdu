
 /**
 * 类名:clsQuestionnaireBatchEN
 * 表名:QuestionnaireBatch(01120006)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:29:08
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
 * 问卷批次(QuestionnaireBatch)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQuestionnaireBatchEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QuestionnaireBatch"; //当前表名,与该类相关的表名
public static _KeyFldName= "BatchId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["batchId", "batchName", "roleId", "questionnaireSetId", "isDefault", "isDefaultUser", "createDate", "createUser", "pageName", "isRandomSelSet", "updDate", "updUser", "memo"];
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
private mstrBatchId = "";    //批次ID
private mstrBatchName = "";    //批次名称
private mstrRoleId = "";    //角色Id
private mstrQuestionnaireSetId = "";    //问卷集ID
private mbolIsDefault = false;    //是否默认
private mbolIsDefaultUser = false;    //是否默认用户
private mstrCreateDate = "";    //建立日期
private mstrCreateUser = "";    //建立用户
private mstrPageName = "";    //页面名称
private mbolIsRandomSelSet = false;    //是否随机选问卷集
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 批次ID(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBatchId (value: string)
{
if (value  != undefined)
{
 this.batchId = value;
    this.hmProperty["batchId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 批次名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBatchName (value: string)
{
if (value  != undefined)
{
 this.batchName = value;
    this.hmProperty["batchName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 角色Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRoleId (value: string)
{
if (value  != undefined)
{
 this.roleId = value;
    this.hmProperty["roleId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

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
 * 是否默认(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDefault (value: boolean)
{
if (value  != undefined)
{
 this.isDefault = value;
    this.hmProperty["isDefault"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否默认用户(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDefaultUser (value: boolean)
{
if (value  != undefined)
{
 this.isDefaultUser = value;
    this.hmProperty["isDefaultUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 建立日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreateDate (value: string)
{
if (value  != undefined)
{
 this.createDate = value;
    this.hmProperty["createDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 建立用户(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreateUser (value: string)
{
if (value  != undefined)
{
 this.createUser = value;
    this.hmProperty["createUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 页面名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPageName (value: string)
{
if (value  != undefined)
{
 this.pageName = value;
    this.hmProperty["pageName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否随机选问卷集(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsRandomSelSet (value: boolean)
{
if (value  != undefined)
{
 this.isRandomSelSet = value;
    this.hmProperty["isRandomSelSet"] = true;
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
case clsQuestionnaireBatchEN.con_BatchId:
return this.batchId;
case clsQuestionnaireBatchEN.con_BatchName:
return this.batchName;
case clsQuestionnaireBatchEN.con_RoleId:
return this.roleId;
case clsQuestionnaireBatchEN.con_QuestionnaireSetId:
return this.questionnaireSetId;
case clsQuestionnaireBatchEN.con_IsDefault:
return this.isDefault;
case clsQuestionnaireBatchEN.con_IsDefaultUser:
return this.isDefaultUser;
case clsQuestionnaireBatchEN.con_CreateDate:
return this.createDate;
case clsQuestionnaireBatchEN.con_CreateUser:
return this.createUser;
case clsQuestionnaireBatchEN.con_PageName:
return this.pageName;
case clsQuestionnaireBatchEN.con_IsRandomSelSet:
return this.isRandomSelSet;
case clsQuestionnaireBatchEN.con_UpdDate:
return this.updDate;
case clsQuestionnaireBatchEN.con_UpdUser:
return this.updUser;
case clsQuestionnaireBatchEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QuestionnaireBatch]中不存在!`;
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
case clsQuestionnaireBatchEN.con_BatchId:
this.batchId = strValue;
    this.hmProperty["batchId"] = true;
break;
case clsQuestionnaireBatchEN.con_BatchName:
this.batchName = strValue;
    this.hmProperty["batchName"] = true;
break;
case clsQuestionnaireBatchEN.con_RoleId:
this.roleId = strValue;
    this.hmProperty["roleId"] = true;
break;
case clsQuestionnaireBatchEN.con_QuestionnaireSetId:
this.questionnaireSetId = strValue;
    this.hmProperty["questionnaireSetId"] = true;
break;
case clsQuestionnaireBatchEN.con_IsDefault:
this.isDefault = Boolean(strValue);
    this.hmProperty["isDefault"] = true;
break;
case clsQuestionnaireBatchEN.con_IsDefaultUser:
this.isDefaultUser = Boolean(strValue);
    this.hmProperty["isDefaultUser"] = true;
break;
case clsQuestionnaireBatchEN.con_CreateDate:
this.createDate = strValue;
    this.hmProperty["createDate"] = true;
break;
case clsQuestionnaireBatchEN.con_CreateUser:
this.createUser = strValue;
    this.hmProperty["createUser"] = true;
break;
case clsQuestionnaireBatchEN.con_PageName:
this.pageName = strValue;
    this.hmProperty["pageName"] = true;
break;
case clsQuestionnaireBatchEN.con_IsRandomSelSet:
this.isRandomSelSet = Boolean(strValue);
    this.hmProperty["isRandomSelSet"] = true;
break;
case clsQuestionnaireBatchEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQuestionnaireBatchEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsQuestionnaireBatchEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QuestionnaireBatch]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public batchId = "";    //批次ID
public batchName = "";    //批次名称
public roleId = "";    //角色Id
public questionnaireSetId = "";    //问卷集ID
public isDefault = false;    //是否默认
public isDefaultUser = false;    //是否默认用户
public createDate = "";    //建立日期
public createUser = "";    //建立用户
public pageName = "";    //页面名称
public isRandomSelSet = false;    //是否随机选问卷集
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"BatchId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BatchId(): string {return "batchId";}    //批次ID

 /**
 * 常量:"BatchName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BatchName(): string {return "batchName";}    //批次名称

 /**
 * 常量:"RoleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RoleId(): string {return "roleId";}    //角色Id

 /**
 * 常量:"QuestionnaireSetId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionnaireSetId(): string {return "questionnaireSetId";}    //问卷集ID

 /**
 * 常量:"IsDefault"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsDefault(): string {return "isDefault";}    //是否默认

 /**
 * 常量:"IsDefaultUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsDefaultUser(): string {return "isDefaultUser";}    //是否默认用户

 /**
 * 常量:"CreateDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"CreateUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CreateUser(): string {return "createUser";}    //建立用户

 /**
 * 常量:"PageName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PageName(): string {return "pageName";}    //页面名称

 /**
 * 常量:"IsRandomSelSet"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRandomSelSet(): string {return "isRandomSelSet";}    //是否随机选问卷集

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
const instance = new clsQuestionnaireBatchEN();
return instance.hasOwnProperty(propName);
}
}