
 /**
 * 类名:clsAnswerEN
 * 表名:Answer(01120002)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 16:02:57
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
 * 答案(Answer)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsAnswerEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "Answer"; //当前表名,与该类相关的表名
public static _KeyFldName= "AnswerId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 16;
public static AttributeName = ["answerId", "questionId", "answerIndex", "answerOptionId", "answerMultiOptions", "answerFillInBlank", "answerContent", "answerTrueOrFalse", "isAutoCorrect", "provider", "score", "isShow", "courseId", "updDate", "updUser", "memo"];
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
private mlngAnswerId = 0;    //问答ID
private mlngQuestionId = 0;    //题目Id
private mintAnswerIndex = 0;    //问答序号
private mstrAnswerOptionId = "";    //回答选项Id
private mstrAnswerMultiOptions = "";    //多选项答案
private mstrAnswerFillInBlank = "";    //填空题答案
private mstrAnswerContent = "";    //答案内容
private mbolAnswerTrueOrFalse = false;    //判断题答案
private mbolIsAutoCorrect = false;    //是否支持自动批改
private mstrProvider = "";    //提供者
private mdblScore = 0;    //得分
private mbolIsShow = false;    //是否启用
private mstrCourseId = "";    //课程Id
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 问答ID(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerId (value: number)
{
if (value  != undefined)
{
 this.answerId = value;
    this.hmProperty["answerId"] = true;
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
 * 问答序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerIndex (value: number)
{
if (value  != undefined)
{
 this.answerIndex = value;
    this.hmProperty["answerIndex"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答选项Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerOptionId (value: string)
{
if (value  != undefined)
{
 this.answerOptionId = value;
    this.hmProperty["answerOptionId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 多选项答案(说明:;字段类型:varchar;字段长度:300;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerMultiOptions (value: string)
{
if (value  != undefined)
{
 this.answerMultiOptions = value;
    this.hmProperty["answerMultiOptions"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 填空题答案(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerFillInBlank (value: string)
{
if (value  != undefined)
{
 this.answerFillInBlank = value;
    this.hmProperty["answerFillInBlank"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 答案内容(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerContent (value: string)
{
if (value  != undefined)
{
 this.answerContent = value;
    this.hmProperty["answerContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 判断题答案(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerTrueOrFalse (value: boolean)
{
if (value  != undefined)
{
 this.answerTrueOrFalse = value;
    this.hmProperty["answerTrueOrFalse"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否支持自动批改(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsAutoCorrect (value: boolean)
{
if (value  != undefined)
{
 this.isAutoCorrect = value;
    this.hmProperty["isAutoCorrect"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 提供者(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProvider (value: string)
{
if (value  != undefined)
{
 this.provider = value;
    this.hmProperty["provider"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 得分(说明:;字段类型:decimal;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScore (value: number)
{
if (value  != undefined)
{
 this.score = value;
    this.hmProperty["score"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否启用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsShow (value: boolean)
{
if (value  != undefined)
{
 this.isShow = value;
    this.hmProperty["isShow"] = true;
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
case clsAnswerEN.con_AnswerId:
return this.answerId;
case clsAnswerEN.con_QuestionId:
return this.questionId;
case clsAnswerEN.con_AnswerIndex:
return this.answerIndex;
case clsAnswerEN.con_AnswerOptionId:
return this.answerOptionId;
case clsAnswerEN.con_AnswerMultiOptions:
return this.answerMultiOptions;
case clsAnswerEN.con_AnswerFillInBlank:
return this.answerFillInBlank;
case clsAnswerEN.con_AnswerContent:
return this.answerContent;
case clsAnswerEN.con_AnswerTrueOrFalse:
return this.answerTrueOrFalse;
case clsAnswerEN.con_IsAutoCorrect:
return this.isAutoCorrect;
case clsAnswerEN.con_Provider:
return this.provider;
case clsAnswerEN.con_Score:
return this.score;
case clsAnswerEN.con_IsShow:
return this.isShow;
case clsAnswerEN.con_CourseId:
return this.courseId;
case clsAnswerEN.con_UpdDate:
return this.updDate;
case clsAnswerEN.con_UpdUser:
return this.updUser;
case clsAnswerEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Answer]中不存在!`;
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
case clsAnswerEN.con_AnswerId:
this.answerId = Number(strValue);
    this.hmProperty["answerId"] = true;
break;
case clsAnswerEN.con_QuestionId:
this.questionId = Number(strValue);
    this.hmProperty["questionId"] = true;
break;
case clsAnswerEN.con_AnswerIndex:
this.answerIndex = Number(strValue);
    this.hmProperty["answerIndex"] = true;
break;
case clsAnswerEN.con_AnswerOptionId:
this.answerOptionId = strValue;
    this.hmProperty["answerOptionId"] = true;
break;
case clsAnswerEN.con_AnswerMultiOptions:
this.answerMultiOptions = strValue;
    this.hmProperty["answerMultiOptions"] = true;
break;
case clsAnswerEN.con_AnswerFillInBlank:
this.answerFillInBlank = strValue;
    this.hmProperty["answerFillInBlank"] = true;
break;
case clsAnswerEN.con_AnswerContent:
this.answerContent = strValue;
    this.hmProperty["answerContent"] = true;
break;
case clsAnswerEN.con_AnswerTrueOrFalse:
this.answerTrueOrFalse = Boolean(strValue);
    this.hmProperty["answerTrueOrFalse"] = true;
break;
case clsAnswerEN.con_IsAutoCorrect:
this.isAutoCorrect = Boolean(strValue);
    this.hmProperty["isAutoCorrect"] = true;
break;
case clsAnswerEN.con_Provider:
this.provider = strValue;
    this.hmProperty["provider"] = true;
break;
case clsAnswerEN.con_Score:
this.score = Number(strValue);
    this.hmProperty["score"] = true;
break;
case clsAnswerEN.con_IsShow:
this.isShow = Boolean(strValue);
    this.hmProperty["isShow"] = true;
break;
case clsAnswerEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsAnswerEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsAnswerEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsAnswerEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[Answer]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public answerId = 0;    //问答ID
public questionId = 0;    //题目Id
public answerIndex = 0;    //问答序号
public answerOptionId = "";    //回答选项Id
public answerMultiOptions = "";    //多选项答案
public answerFillInBlank = "";    //填空题答案
public answerContent = "";    //答案内容
public answerTrueOrFalse = false;    //判断题答案
public isAutoCorrect = false;    //是否支持自动批改
public provider = "";    //提供者
public score = 0;    //得分
public isShow = false;    //是否启用
public courseId = "";    //课程Id
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"AnswerId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerId(): string {return "answerId";}    //问答ID

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"AnswerIndex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerIndex(): string {return "answerIndex";}    //问答序号

 /**
 * 常量:"AnswerOptionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerOptionId(): string {return "answerOptionId";}    //回答选项Id

 /**
 * 常量:"AnswerMultiOptions"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerMultiOptions(): string {return "answerMultiOptions";}    //多选项答案

 /**
 * 常量:"AnswerFillInBlank"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerFillInBlank(): string {return "answerFillInBlank";}    //填空题答案

 /**
 * 常量:"AnswerContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerContent(): string {return "answerContent";}    //答案内容

 /**
 * 常量:"AnswerTrueOrFalse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerTrueOrFalse(): string {return "answerTrueOrFalse";}    //判断题答案

 /**
 * 常量:"IsAutoCorrect"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsAutoCorrect(): string {return "isAutoCorrect";}    //是否支持自动批改

 /**
 * 常量:"Provider"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Provider(): string {return "provider";}    //提供者

 /**
 * 常量:"Score"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //得分

 /**
 * 常量:"IsShow"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

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
//return propName in new clsAnswerEN();
const instance = new clsAnswerEN();
return instance.hasOwnProperty(propName);
}
}