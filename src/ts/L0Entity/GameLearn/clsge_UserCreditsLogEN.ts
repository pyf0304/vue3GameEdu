
 /**
 * 类名:clsge_UserCreditsLogEN
 * 表名:ge_UserCreditsLog(01120883)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/07 09:11:28
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 用户积分日志(ge_UserCreditsLog)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_UserCreditsLogEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_UserCreditsLog"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["mId", "userId", "questionId", "examBatchNo", "credits", "creditTypeId", "badgeNum", "passed", "isSubmit", "getInstructions", "getDate", "idCurrEduCls", "gameLevelId", "courseId", "updDate", "updUser", "memo"];
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
private mlngQuestionId = 0;    //题目Id
private mstrExamBatchNo = "";    //学生批次号
private mintCredits = 0;    //积分
private mstrCreditTypeId = "";    //积分类型Id
private mintBadgeNum = 0;    //徽章数量
private mbolPassed = false;    //是否合格
private mbolIsSubmit = false;    //是否提交
private mstrGetInstructions = "";    //获取说明
private mstrGetDate = "";    //获取日期
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrGameLevelId = "";    //游戏关卡Id
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
 * 题目Id(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionId (value: number)
{
if (value  != undefined)
{
 this.questionId = value;
    this.hmProperty["questionId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学生批次号(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExamBatchNo (value: string)
{
if (value  != undefined)
{
 this.examBatchNo = value;
    this.hmProperty["examBatchNo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 积分(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCredits (value: number)
{
if (value  != undefined)
{
 this.credits = value;
    this.hmProperty["credits"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 积分类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreditTypeId (value: string)
{
if (value  != undefined)
{
 this.creditTypeId = value;
    this.hmProperty["creditTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 徽章数量(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBadgeNum (value: number)
{
if (value  != undefined)
{
 this.badgeNum = value;
    this.hmProperty["badgeNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否合格(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPassed (value: boolean)
{
if (value  != undefined)
{
 this.passed = value;
    this.hmProperty["passed"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否提交(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSubmit (value: boolean)
{
if (value  != undefined)
{
 this.isSubmit = value;
    this.hmProperty["isSubmit"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 获取说明(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGetInstructions (value: string)
{
if (value  != undefined)
{
 this.getInstructions = value;
    this.hmProperty["getInstructions"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 获取日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGetDate (value: string)
{
if (value  != undefined)
{
 this.getDate = value;
    this.hmProperty["getDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCurrEduCls (value: string)
{
if (value  != undefined)
{
 this.idCurrEduCls = value;
    this.hmProperty["idCurrEduCls"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 游戏关卡Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGameLevelId (value: string)
{
if (value  != undefined)
{
 this.gameLevelId = value;
    this.hmProperty["gameLevelId"] = true;
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
case clsge_UserCreditsLogEN.con_mId:
return this.mId;
case clsge_UserCreditsLogEN.con_UserId:
return this.userId;
case clsge_UserCreditsLogEN.con_QuestionId:
return this.questionId;
case clsge_UserCreditsLogEN.con_ExamBatchNo:
return this.examBatchNo;
case clsge_UserCreditsLogEN.con_Credits:
return this.credits;
case clsge_UserCreditsLogEN.con_CreditTypeId:
return this.creditTypeId;
case clsge_UserCreditsLogEN.con_BadgeNum:
return this.badgeNum;
case clsge_UserCreditsLogEN.con_Passed:
return this.passed;
case clsge_UserCreditsLogEN.con_IsSubmit:
return this.isSubmit;
case clsge_UserCreditsLogEN.con_GetInstructions:
return this.getInstructions;
case clsge_UserCreditsLogEN.con_GetDate:
return this.getDate;
case clsge_UserCreditsLogEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsge_UserCreditsLogEN.con_GameLevelId:
return this.gameLevelId;
case clsge_UserCreditsLogEN.con_CourseId:
return this.courseId;
case clsge_UserCreditsLogEN.con_UpdDate:
return this.updDate;
case clsge_UserCreditsLogEN.con_UpdUser:
return this.updUser;
case clsge_UserCreditsLogEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_UserCreditsLog]中不存在!`;
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
case clsge_UserCreditsLogEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsge_UserCreditsLogEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsge_UserCreditsLogEN.con_QuestionId:
this.questionId = Number(strValue);
    this.hmProperty["questionId"] = true;
break;
case clsge_UserCreditsLogEN.con_ExamBatchNo:
this.examBatchNo = strValue;
    this.hmProperty["examBatchNo"] = true;
break;
case clsge_UserCreditsLogEN.con_Credits:
this.credits = Number(strValue);
    this.hmProperty["credits"] = true;
break;
case clsge_UserCreditsLogEN.con_CreditTypeId:
this.creditTypeId = strValue;
    this.hmProperty["creditTypeId"] = true;
break;
case clsge_UserCreditsLogEN.con_BadgeNum:
this.badgeNum = Number(strValue);
    this.hmProperty["badgeNum"] = true;
break;
case clsge_UserCreditsLogEN.con_Passed:
this.passed = Boolean(strValue);
    this.hmProperty["passed"] = true;
break;
case clsge_UserCreditsLogEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
    this.hmProperty["isSubmit"] = true;
break;
case clsge_UserCreditsLogEN.con_GetInstructions:
this.getInstructions = strValue;
    this.hmProperty["getInstructions"] = true;
break;
case clsge_UserCreditsLogEN.con_GetDate:
this.getDate = strValue;
    this.hmProperty["getDate"] = true;
break;
case clsge_UserCreditsLogEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsge_UserCreditsLogEN.con_GameLevelId:
this.gameLevelId = strValue;
    this.hmProperty["gameLevelId"] = true;
break;
case clsge_UserCreditsLogEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsge_UserCreditsLogEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_UserCreditsLogEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_UserCreditsLogEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[ge_UserCreditsLog]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public questionId = 0;    //题目Id
public examBatchNo = "";    //学生批次号
public credits = 0;    //积分
public creditTypeId = "";    //积分类型Id
public badgeNum = 0;    //徽章数量
public passed = false;    //是否合格
public isSubmit = false;    //是否提交
public getInstructions = "";    //获取说明
public getDate = "";    //获取日期
public idCurrEduCls = "";    //教学班流水号
public gameLevelId = "";    //游戏关卡Id
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
 * 常量:"QuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"ExamBatchNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExamBatchNo(): string {return "examBatchNo";}    //学生批次号

 /**
 * 常量:"Credits"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Credits(): string {return "credits";}    //积分

 /**
 * 常量:"CreditTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CreditTypeId(): string {return "creditTypeId";}    //积分类型Id

 /**
 * 常量:"BadgeNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BadgeNum(): string {return "badgeNum";}    //徽章数量

 /**
 * 常量:"Passed"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Passed(): string {return "passed";}    //是否合格

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"GetInstructions"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GetInstructions(): string {return "getInstructions";}    //获取说明

 /**
 * 常量:"GetDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GetDate(): string {return "getDate";}    //获取日期

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"GameLevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GameLevelId(): string {return "gameLevelId";}    //游戏关卡Id

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
//return propName in new clsge_UserCreditsLogEN();
const instance = new clsge_UserCreditsLogEN();
return instance.hasOwnProperty(propName);
}
}