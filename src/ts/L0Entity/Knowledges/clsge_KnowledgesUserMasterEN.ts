
 /**
 * 类名:clsge_KnowledgesUserMasterEN
 * 表名:ge_KnowledgesUserMaster(01120892)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:27
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 知识点用户掌握(ge_KnowledgesUserMaster)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_KnowledgesUserMasterEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_KnowledgesUserMaster"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["mId", "courseId", "userId", "courseKnowledgeId", "rightCount", "masterTypeId", "errorCount", "masterLevelId", "masteryValue", "updDate", "goalValue", "selfPerceivedValue", "updUser", "memo"];
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
private mlngmId = 0;    //mId
private mstrCourseId = "";    //课程Id
private mstrUserId = "";    //用户ID
private mstrCourseKnowledgeId = "";    //知识点Id
private mintRightCount = 0;    //正确次数
private mstrMasterTypeId = "";    //掌握类型Id
private mintErrorCount = 0;    //错误次数
private mstrMasterLevelId = "";    //掌握度Id
private mdblMasteryValue = 0;    //掌握度
private mstrUpdDate = "";    //修改日期
private mdblGoalValue = 0;    //目标值
private mdblSelfPerceivedValue = 0;    //自我认为值
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * mId(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetmId (value: number)
{
if (value  != undefined)
{
 this.mId = value;
    this.hmProperty["mId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseId (value: string)
{
if (value  != undefined)
{
 this.courseId = value;
    this.hmProperty["courseId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserId (value: string)
{
if (value  != undefined)
{
 this.userId = value;
    this.hmProperty["userId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识点Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseKnowledgeId (value: string)
{
if (value  != undefined)
{
 this.courseKnowledgeId = value;
    this.hmProperty["courseKnowledgeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 正确次数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRightCount (value: number)
{
if (value  != undefined)
{
 this.rightCount = value;
    this.hmProperty["rightCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 掌握类型Id(说明:;字段类型:char;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMasterTypeId (value: string)
{
if (value  != undefined)
{
 this.masterTypeId = value;
    this.hmProperty["masterTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 错误次数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetErrorCount (value: number)
{
if (value  != undefined)
{
 this.errorCount = value;
    this.hmProperty["errorCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 掌握度Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMasterLevelId (value: string)
{
if (value  != undefined)
{
 this.masterLevelId = value;
    this.hmProperty["masterLevelId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 掌握度(说明:;字段类型:numeric;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMasteryValue (value: number)
{
if (value  != undefined)
{
 this.masteryValue = value;
    this.hmProperty["masteryValue"] = true;
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
 * 目标值(说明:;字段类型:numeric;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGoalValue (value: number)
{
if (value  != undefined)
{
 this.goalValue = value;
    this.hmProperty["goalValue"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 自我认为值(说明:;字段类型:numeric;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSelfPerceivedValue (value: number)
{
if (value  != undefined)
{
 this.selfPerceivedValue = value;
    this.hmProperty["selfPerceivedValue"] = true;
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
case clsge_KnowledgesUserMasterEN.con_mId:
return this.mId;
case clsge_KnowledgesUserMasterEN.con_CourseId:
return this.courseId;
case clsge_KnowledgesUserMasterEN.con_UserId:
return this.userId;
case clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsge_KnowledgesUserMasterEN.con_RightCount:
return this.rightCount;
case clsge_KnowledgesUserMasterEN.con_MasterTypeId:
return this.masterTypeId;
case clsge_KnowledgesUserMasterEN.con_ErrorCount:
return this.errorCount;
case clsge_KnowledgesUserMasterEN.con_MasterLevelId:
return this.masterLevelId;
case clsge_KnowledgesUserMasterEN.con_MasteryValue:
return this.masteryValue;
case clsge_KnowledgesUserMasterEN.con_UpdDate:
return this.updDate;
case clsge_KnowledgesUserMasterEN.con_GoalValue:
return this.goalValue;
case clsge_KnowledgesUserMasterEN.con_SelfPerceivedValue:
return this.selfPerceivedValue;
case clsge_KnowledgesUserMasterEN.con_UpdUser:
return this.updUser;
case clsge_KnowledgesUserMasterEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_KnowledgesUserMaster]中不存在!`;
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
case clsge_KnowledgesUserMasterEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId:
this.courseKnowledgeId = strValue;
    this.hmProperty["courseKnowledgeId"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_RightCount:
this.rightCount = Number(strValue);
    this.hmProperty["rightCount"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_MasterTypeId:
this.masterTypeId = strValue;
    this.hmProperty["masterTypeId"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_ErrorCount:
this.errorCount = Number(strValue);
    this.hmProperty["errorCount"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_MasterLevelId:
this.masterLevelId = strValue;
    this.hmProperty["masterLevelId"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_MasteryValue:
this.masteryValue = Number(strValue);
    this.hmProperty["masteryValue"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_GoalValue:
this.goalValue = Number(strValue);
    this.hmProperty["goalValue"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_SelfPerceivedValue:
this.selfPerceivedValue = Number(strValue);
    this.hmProperty["selfPerceivedValue"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_KnowledgesUserMasterEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[ge_KnowledgesUserMaster]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseId = "";    //课程Id
public userId = "";    //用户ID
public courseKnowledgeId = "";    //知识点Id
public rightCount = 0;    //正确次数
public masterTypeId = "";    //掌握类型Id
public errorCount = 0;    //错误次数
public masterLevelId = "";    //掌握度Id
public masteryValue = 0;    //掌握度
public updDate = "";    //修改日期
public goalValue = 0;    //目标值
public selfPerceivedValue = 0;    //自我认为值
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"RightCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RightCount(): string {return "rightCount";}    //正确次数

 /**
 * 常量:"MasterTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasterTypeId(): string {return "masterTypeId";}    //掌握类型Id

 /**
 * 常量:"ErrorCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ErrorCount(): string {return "errorCount";}    //错误次数

 /**
 * 常量:"MasterLevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasterLevelId(): string {return "masterLevelId";}    //掌握度Id

 /**
 * 常量:"MasteryValue"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasteryValue(): string {return "masteryValue";}    //掌握度

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"GoalValue"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GoalValue(): string {return "goalValue";}    //目标值

 /**
 * 常量:"SelfPerceivedValue"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SelfPerceivedValue(): string {return "selfPerceivedValue";}    //自我认为值

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
//return propName in new clsge_KnowledgesUserMasterEN();
const instance = new clsge_KnowledgesUserMasterEN();
return instance.hasOwnProperty(propName);
}
}