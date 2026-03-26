
 /**
 * 类名:clsQuestionOptionsEN
 * 表名:QuestionOptions(01120188)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:27:38
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
 * 题目选项(QuestionOptions)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQuestionOptionsEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QuestionOptions"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionOptionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["questionOptionId", "optionName", "questionId", "optionIndex", "optionTitle", "optionContent", "isCorrect", "score", "isShow", "courseId", "updDate", "updUser", "memo"];
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
private mstrQuestionOptionId = "";    //题目选项Id
private mstrOptionName = "";    //选项名称
private mlngQuestionId = 0;    //题目Id
private mintOptionIndex = 0;    //选项序号
private mstrOptionTitle = "";    //选项标题
private mstrOptionContent = "";    //选项内容
private mbolIsCorrect = false;    //是否正确
private mdblScore = 0;    //得分
private mbolIsShow = false;    //是否启用
private mstrCourseId = "";    //课程Id
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 题目选项Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionOptionId (value: string)
{
if (value  != undefined)
{
 this.questionOptionId = value;
    this.hmProperty["questionOptionId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 选项名称(说明:;字段类型:varchar;字段长度:4000;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOptionName (value: string)
{
if (value  != undefined)
{
 this.optionName = value;
    this.hmProperty["optionName"] = true;
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
 * 选项序号(说明:;字段类型:int;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOptionIndex (value: number)
{
if (value  != undefined)
{
 this.optionIndex = value;
    this.hmProperty["optionIndex"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 选项标题(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOptionTitle (value: string)
{
if (value  != undefined)
{
 this.optionTitle = value;
    this.hmProperty["optionTitle"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 选项内容(说明:;字段类型:varchar;字段长度:4000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOptionContent (value: string)
{
if (value  != undefined)
{
 this.optionContent = value;
    this.hmProperty["optionContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否正确(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsCorrect (value: boolean)
{
if (value  != undefined)
{
 this.isCorrect = value;
    this.hmProperty["isCorrect"] = true;
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
case clsQuestionOptionsEN.con_QuestionOptionId:
return this.questionOptionId;
case clsQuestionOptionsEN.con_OptionName:
return this.optionName;
case clsQuestionOptionsEN.con_QuestionId:
return this.questionId;
case clsQuestionOptionsEN.con_OptionIndex:
return this.optionIndex;
case clsQuestionOptionsEN.con_OptionTitle:
return this.optionTitle;
case clsQuestionOptionsEN.con_OptionContent:
return this.optionContent;
case clsQuestionOptionsEN.con_IsCorrect:
return this.isCorrect;
case clsQuestionOptionsEN.con_Score:
return this.score;
case clsQuestionOptionsEN.con_IsShow:
return this.isShow;
case clsQuestionOptionsEN.con_CourseId:
return this.courseId;
case clsQuestionOptionsEN.con_UpdDate:
return this.updDate;
case clsQuestionOptionsEN.con_UpdUser:
return this.updUser;
case clsQuestionOptionsEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QuestionOptions]中不存在!`;
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
case clsQuestionOptionsEN.con_QuestionOptionId:
this.questionOptionId = strValue;
    this.hmProperty["questionOptionId"] = true;
break;
case clsQuestionOptionsEN.con_OptionName:
this.optionName = strValue;
    this.hmProperty["optionName"] = true;
break;
case clsQuestionOptionsEN.con_QuestionId:
this.questionId = Number(strValue);
    this.hmProperty["questionId"] = true;
break;
case clsQuestionOptionsEN.con_OptionIndex:
this.optionIndex = Number(strValue);
    this.hmProperty["optionIndex"] = true;
break;
case clsQuestionOptionsEN.con_OptionTitle:
this.optionTitle = strValue;
    this.hmProperty["optionTitle"] = true;
break;
case clsQuestionOptionsEN.con_OptionContent:
this.optionContent = strValue;
    this.hmProperty["optionContent"] = true;
break;
case clsQuestionOptionsEN.con_IsCorrect:
this.isCorrect = Boolean(strValue);
    this.hmProperty["isCorrect"] = true;
break;
case clsQuestionOptionsEN.con_Score:
this.score = Number(strValue);
    this.hmProperty["score"] = true;
break;
case clsQuestionOptionsEN.con_IsShow:
this.isShow = Boolean(strValue);
    this.hmProperty["isShow"] = true;
break;
case clsQuestionOptionsEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsQuestionOptionsEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQuestionOptionsEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsQuestionOptionsEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QuestionOptions]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public questionOptionId = "";    //题目选项Id
public optionName = "";    //选项名称
public questionId = 0;    //题目Id
public optionIndex = 0;    //选项序号
public optionTitle = "";    //选项标题
public optionContent = "";    //选项内容
public isCorrect = false;    //是否正确
public score = 0;    //得分
public isShow = false;    //是否启用
public courseId = "";    //课程Id
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"QuestionOptionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionOptionId(): string {return "questionOptionId";}    //题目选项Id

 /**
 * 常量:"OptionName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OptionName(): string {return "optionName";}    //选项名称

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"OptionIndex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OptionIndex(): string {return "optionIndex";}    //选项序号

 /**
 * 常量:"OptionTitle"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OptionTitle(): string {return "optionTitle";}    //选项标题

 /**
 * 常量:"OptionContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OptionContent(): string {return "optionContent";}    //选项内容

 /**
 * 常量:"IsCorrect"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsCorrect(): string {return "isCorrect";}    //是否正确

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
//return propName in new clsQuestionOptionsEN();
const instance = new clsQuestionOptionsEN();
return instance.hasOwnProperty(propName);
}
}