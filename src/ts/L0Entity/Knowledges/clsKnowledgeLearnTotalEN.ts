
 /**
 * 类名:clsKnowledgeLearnTotalEN
 * 表名:KnowledgeLearnTotal(01120155)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:41
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
 * 知识点学习汇总表(KnowledgeLearnTotal)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsKnowledgeLearnTotalEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "KnowledgeLearnTotal"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 15;
public static AttributeName = ["mId", "userId", "masterDegree", "learnCount", "courseKnowledgeId", "successCount", "failCount", "continuousSuccessCount", "continuousFailCount", "lastLearnDate", "recommendedNextReviewDate", "courseId", "updDate", "updUser", "memo"];
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
private mdblMasterDegree = 0;    //掌握程度
private mintLearnCount = 0;    //学习次数
private mstrCourseKnowledgeId = "";    //知识点Id
private mintSuccessCount = 0;    //成功次数
private mintFailCount = 0;    //失败次数
private mintContinuousSuccessCount = 0;    //连续成功次数
private mintContinuousFailCount = 0;    //连续失败次数
private mstrLastLearnDate = "";    //最后学习日期
private mstrRecommendedNextReviewDate = "";    //推荐下次复习日期
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
 * 学习次数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLearnCount (value: number)
{
if (value  != undefined)
{
 this.learnCount = value;
    this.hmProperty["learnCount"] = true;
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
 * 成功次数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSuccessCount (value: number)
{
if (value  != undefined)
{
 this.successCount = value;
    this.hmProperty["successCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 失败次数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFailCount (value: number)
{
if (value  != undefined)
{
 this.failCount = value;
    this.hmProperty["failCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 连续成功次数(说明:;字段类型:int;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetContinuousSuccessCount (value: number)
{
if (value  != undefined)
{
 this.continuousSuccessCount = value;
    this.hmProperty["continuousSuccessCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 连续失败次数(说明:;字段类型:int;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetContinuousFailCount (value: number)
{
if (value  != undefined)
{
 this.continuousFailCount = value;
    this.hmProperty["continuousFailCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 最后学习日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLastLearnDate (value: string)
{
if (value  != undefined)
{
 this.lastLearnDate = value;
    this.hmProperty["lastLearnDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 推荐下次复习日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRecommendedNextReviewDate (value: string)
{
if (value  != undefined)
{
 this.recommendedNextReviewDate = value;
    this.hmProperty["recommendedNextReviewDate"] = true;
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
case clsKnowledgeLearnTotalEN.con_mId:
return this.mId;
case clsKnowledgeLearnTotalEN.con_UserId:
return this.userId;
case clsKnowledgeLearnTotalEN.con_MasterDegree:
return this.masterDegree;
case clsKnowledgeLearnTotalEN.con_LearnCount:
return this.learnCount;
case clsKnowledgeLearnTotalEN.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsKnowledgeLearnTotalEN.con_SuccessCount:
return this.successCount;
case clsKnowledgeLearnTotalEN.con_FailCount:
return this.failCount;
case clsKnowledgeLearnTotalEN.con_ContinuousSuccessCount:
return this.continuousSuccessCount;
case clsKnowledgeLearnTotalEN.con_ContinuousFailCount:
return this.continuousFailCount;
case clsKnowledgeLearnTotalEN.con_LastLearnDate:
return this.lastLearnDate;
case clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate:
return this.recommendedNextReviewDate;
case clsKnowledgeLearnTotalEN.con_CourseId:
return this.courseId;
case clsKnowledgeLearnTotalEN.con_UpdDate:
return this.updDate;
case clsKnowledgeLearnTotalEN.con_UpdUser:
return this.updUser;
case clsKnowledgeLearnTotalEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeLearnTotal]中不存在!`;
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
case clsKnowledgeLearnTotalEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsKnowledgeLearnTotalEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsKnowledgeLearnTotalEN.con_MasterDegree:
this.masterDegree = Number(strValue);
    this.hmProperty["masterDegree"] = true;
break;
case clsKnowledgeLearnTotalEN.con_LearnCount:
this.learnCount = Number(strValue);
    this.hmProperty["learnCount"] = true;
break;
case clsKnowledgeLearnTotalEN.con_CourseKnowledgeId:
this.courseKnowledgeId = strValue;
    this.hmProperty["courseKnowledgeId"] = true;
break;
case clsKnowledgeLearnTotalEN.con_SuccessCount:
this.successCount = Number(strValue);
    this.hmProperty["successCount"] = true;
break;
case clsKnowledgeLearnTotalEN.con_FailCount:
this.failCount = Number(strValue);
    this.hmProperty["failCount"] = true;
break;
case clsKnowledgeLearnTotalEN.con_ContinuousSuccessCount:
this.continuousSuccessCount = Number(strValue);
    this.hmProperty["continuousSuccessCount"] = true;
break;
case clsKnowledgeLearnTotalEN.con_ContinuousFailCount:
this.continuousFailCount = Number(strValue);
    this.hmProperty["continuousFailCount"] = true;
break;
case clsKnowledgeLearnTotalEN.con_LastLearnDate:
this.lastLearnDate = strValue;
    this.hmProperty["lastLearnDate"] = true;
break;
case clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate:
this.recommendedNextReviewDate = strValue;
    this.hmProperty["recommendedNextReviewDate"] = true;
break;
case clsKnowledgeLearnTotalEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsKnowledgeLearnTotalEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsKnowledgeLearnTotalEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsKnowledgeLearnTotalEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeLearnTotal]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public masterDegree = 0;    //掌握程度
public learnCount = 0;    //学习次数
public courseKnowledgeId = "";    //知识点Id
public successCount = 0;    //成功次数
public failCount = 0;    //失败次数
public continuousSuccessCount = 0;    //连续成功次数
public continuousFailCount = 0;    //连续失败次数
public lastLearnDate = "";    //最后学习日期
public recommendedNextReviewDate = "";    //推荐下次复习日期
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
 * 常量:"MasterDegree"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasterDegree(): string {return "masterDegree";}    //掌握程度

 /**
 * 常量:"LearnCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LearnCount(): string {return "learnCount";}    //学习次数

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"SuccessCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SuccessCount(): string {return "successCount";}    //成功次数

 /**
 * 常量:"FailCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FailCount(): string {return "failCount";}    //失败次数

 /**
 * 常量:"ContinuousSuccessCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ContinuousSuccessCount(): string {return "continuousSuccessCount";}    //连续成功次数

 /**
 * 常量:"ContinuousFailCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ContinuousFailCount(): string {return "continuousFailCount";}    //连续失败次数

 /**
 * 常量:"LastLearnDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LastLearnDate(): string {return "lastLearnDate";}    //最后学习日期

 /**
 * 常量:"RecommendedNextReviewDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RecommendedNextReviewDate(): string {return "recommendedNextReviewDate";}    //推荐下次复习日期

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
//return propName in new clsKnowledgeLearnTotalEN();
const instance = new clsKnowledgeLearnTotalEN();
return instance.hasOwnProperty(propName);
}
}