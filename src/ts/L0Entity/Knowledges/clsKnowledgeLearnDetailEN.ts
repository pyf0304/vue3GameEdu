
 /**
 * 类名:clsKnowledgeLearnDetailEN
 * 表名:KnowledgeLearnDetail(01120153)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/11 15:54:18
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
 * 知识点学习情况(KnowledgeLearnDetail)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsKnowledgeLearnDetailEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "KnowledgeLearnDetail"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["mId", "userId", "learnDate", "learnModeId", "courseKnowledgeId", "idCase", "idCaseType", "isRight", "isMaster", "masterDegree", "markerId", "markTime", "isAnalysis", "courseId", "updDate", "updUser", "memo"];
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
private mstrUserId = "";    //用户ID
private mstrLearnDate = "";    //学习日期
private mstrLearnModeId = "";    //学习模式Id
private mstrCourseKnowledgeId = "";    //知识点Id
private mstrIdCase = "";    //案例流水号
private mstrIdCaseType = "";    //案例类型流水号
private mbolIsRight = false;    //是否正确
private mbolIsMaster = false;    //是否掌握
private mdblMasterDegree = 0;    //掌握程度
private mstrMarkerId = "";    //打分者
private mstrMarkTime = "";    //批改时间
private mbolIsAnalysis = false;    //是否分析
private mstrCourseId = "";    //课程Id
private mstrUpdDate = "";    //修改日期
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
 * 学习日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLearnDate (value: string)
{
if (value  != undefined)
{
 this.learnDate = value;
    this.hmProperty["learnDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学习模式Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLearnModeId (value: string)
{
if (value  != undefined)
{
 this.learnModeId = value;
    this.hmProperty["learnModeId"] = true;
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
 * 案例流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCase (value: string)
{
if (value  != undefined)
{
 this.idCase = value;
    this.hmProperty["idCase"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例类型流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCaseType (value: string)
{
if (value  != undefined)
{
 this.idCaseType = value;
    this.hmProperty["idCaseType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否正确(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsRight (value: boolean)
{
if (value  != undefined)
{
 this.isRight = value;
    this.hmProperty["isRight"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否掌握(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsMaster (value: boolean)
{
if (value  != undefined)
{
 this.isMaster = value;
    this.hmProperty["isMaster"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 掌握程度(说明:;字段类型:numeric;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMasterDegree (value: number)
{
if (value  != undefined)
{
 this.masterDegree = value;
    this.hmProperty["masterDegree"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 打分者(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMarkerId (value: string)
{
if (value  != undefined)
{
 this.markerId = value;
    this.hmProperty["markerId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 批改时间(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMarkTime (value: string)
{
if (value  != undefined)
{
 this.markTime = value;
    this.hmProperty["markTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否分析(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsAnalysis (value: boolean)
{
if (value  != undefined)
{
 this.isAnalysis = value;
    this.hmProperty["isAnalysis"] = true;
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
case clsKnowledgeLearnDetailEN.con_mId:
return this.mId;
case clsKnowledgeLearnDetailEN.con_UserId:
return this.userId;
case clsKnowledgeLearnDetailEN.con_LearnDate:
return this.learnDate;
case clsKnowledgeLearnDetailEN.con_LearnModeId:
return this.learnModeId;
case clsKnowledgeLearnDetailEN.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsKnowledgeLearnDetailEN.con_IdCase:
return this.idCase;
case clsKnowledgeLearnDetailEN.con_IdCaseType:
return this.idCaseType;
case clsKnowledgeLearnDetailEN.con_IsRight:
return this.isRight;
case clsKnowledgeLearnDetailEN.con_IsMaster:
return this.isMaster;
case clsKnowledgeLearnDetailEN.con_MasterDegree:
return this.masterDegree;
case clsKnowledgeLearnDetailEN.con_MarkerId:
return this.markerId;
case clsKnowledgeLearnDetailEN.con_MarkTime:
return this.markTime;
case clsKnowledgeLearnDetailEN.con_IsAnalysis:
return this.isAnalysis;
case clsKnowledgeLearnDetailEN.con_CourseId:
return this.courseId;
case clsKnowledgeLearnDetailEN.con_UpdDate:
return this.updDate;
case clsKnowledgeLearnDetailEN.con_UpdUser:
return this.updUser;
case clsKnowledgeLearnDetailEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeLearnDetail]中不存在!`;
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
case clsKnowledgeLearnDetailEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsKnowledgeLearnDetailEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsKnowledgeLearnDetailEN.con_LearnDate:
this.learnDate = strValue;
    this.hmProperty["learnDate"] = true;
break;
case clsKnowledgeLearnDetailEN.con_LearnModeId:
this.learnModeId = strValue;
    this.hmProperty["learnModeId"] = true;
break;
case clsKnowledgeLearnDetailEN.con_CourseKnowledgeId:
this.courseKnowledgeId = strValue;
    this.hmProperty["courseKnowledgeId"] = true;
break;
case clsKnowledgeLearnDetailEN.con_IdCase:
this.idCase = strValue;
    this.hmProperty["idCase"] = true;
break;
case clsKnowledgeLearnDetailEN.con_IdCaseType:
this.idCaseType = strValue;
    this.hmProperty["idCaseType"] = true;
break;
case clsKnowledgeLearnDetailEN.con_IsRight:
this.isRight = Boolean(strValue);
    this.hmProperty["isRight"] = true;
break;
case clsKnowledgeLearnDetailEN.con_IsMaster:
this.isMaster = Boolean(strValue);
    this.hmProperty["isMaster"] = true;
break;
case clsKnowledgeLearnDetailEN.con_MasterDegree:
this.masterDegree = Number(strValue);
    this.hmProperty["masterDegree"] = true;
break;
case clsKnowledgeLearnDetailEN.con_MarkerId:
this.markerId = strValue;
    this.hmProperty["markerId"] = true;
break;
case clsKnowledgeLearnDetailEN.con_MarkTime:
this.markTime = strValue;
    this.hmProperty["markTime"] = true;
break;
case clsKnowledgeLearnDetailEN.con_IsAnalysis:
this.isAnalysis = Boolean(strValue);
    this.hmProperty["isAnalysis"] = true;
break;
case clsKnowledgeLearnDetailEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsKnowledgeLearnDetailEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsKnowledgeLearnDetailEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsKnowledgeLearnDetailEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeLearnDetail]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public userId = "";    //用户ID
public learnDate = "";    //学习日期
public learnModeId = "";    //学习模式Id
public courseKnowledgeId = "";    //知识点Id
public idCase = "";    //案例流水号
public idCaseType = "";    //案例类型流水号
public isRight = false;    //是否正确
public isMaster = false;    //是否掌握
public masterDegree = 0;    //掌握程度
public markerId = "";    //打分者
public markTime = "";    //批改时间
public isAnalysis = false;    //是否分析
public courseId = "";    //课程Id
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"LearnDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LearnDate(): string {return "learnDate";}    //学习日期

 /**
 * 常量:"LearnModeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LearnModeId(): string {return "learnModeId";}    //学习模式Id

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"IdCase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCase(): string {return "idCase";}    //案例流水号

 /**
 * 常量:"IdCaseType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCaseType(): string {return "idCaseType";}    //案例类型流水号

 /**
 * 常量:"IsRight"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRight(): string {return "isRight";}    //是否正确

 /**
 * 常量:"IsMaster"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsMaster(): string {return "isMaster";}    //是否掌握

 /**
 * 常量:"MasterDegree"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasterDegree(): string {return "masterDegree";}    //掌握程度

 /**
 * 常量:"MarkerId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MarkerId(): string {return "markerId";}    //打分者

 /**
 * 常量:"MarkTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MarkTime(): string {return "markTime";}    //批改时间

 /**
 * 常量:"IsAnalysis"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsAnalysis(): string {return "isAnalysis";}    //是否分析

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

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
//return propName in new clsKnowledgeLearnDetailEN();
const instance = new clsKnowledgeLearnDetailEN();
return instance.hasOwnProperty(propName);
}
}