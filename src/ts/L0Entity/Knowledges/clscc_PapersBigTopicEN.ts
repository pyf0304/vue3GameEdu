
 /**
 * 类名:clscc_PapersBigTopicEN
 * 表名:cc_PapersBigTopic(01120077)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:25:52
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
 * 试卷大题目(cc_PapersBigTopic)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clscc_PapersBigTopicEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "cc_PapersBigTopic"; //当前表名,与该类相关的表名
public static _KeyFldName= "PapersBigTopicId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["papersBigTopicId", "papersBigTopicName", "topicDescription", "topicScores", "courseExamPaperId", "questionTypeId", "isShow", "orderNum", "updDate", "updUser", "memo"];
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
private mstrPapersBigTopicId = "";    //试卷大题目Id
private mstrPapersBigTopicName = "";    //试卷大题目名称
private mstrTopicDescription = "";    //标题描述
private mintTopicScores = 0;    //大题得分
private mstrCourseExamPaperId = "";    //考卷流水号
private mstrQuestionTypeId = "";    //题目类型Id
private mbolIsShow = false;    //是否启用
private mintOrderNum = 0;    //序号
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 试卷大题目Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPapersBigTopicId (value: string)
{
if (value  != undefined)
{
 this.papersBigTopicId = value;
    this.hmProperty["papersBigTopicId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 试卷大题目名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPapersBigTopicName (value: string)
{
if (value  != undefined)
{
 this.papersBigTopicName = value;
    this.hmProperty["papersBigTopicName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 标题描述(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTopicDescription (value: string)
{
if (value  != undefined)
{
 this.topicDescription = value;
    this.hmProperty["topicDescription"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 大题得分(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTopicScores (value: number)
{
if (value  != undefined)
{
 this.topicScores = value;
    this.hmProperty["topicScores"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 考卷流水号(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseExamPaperId (value: string)
{
if (value  != undefined)
{
 this.courseExamPaperId = value;
    this.hmProperty["courseExamPaperId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionTypeId (value: string)
{
if (value  != undefined)
{
 this.questionTypeId = value;
    this.hmProperty["questionTypeId"] = true;
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
case clscc_PapersBigTopicEN.con_PapersBigTopicId:
return this.papersBigTopicId;
case clscc_PapersBigTopicEN.con_PapersBigTopicName:
return this.papersBigTopicName;
case clscc_PapersBigTopicEN.con_TopicDescription:
return this.topicDescription;
case clscc_PapersBigTopicEN.con_TopicScores:
return this.topicScores;
case clscc_PapersBigTopicEN.con_CourseExamPaperId:
return this.courseExamPaperId;
case clscc_PapersBigTopicEN.con_QuestionTypeId:
return this.questionTypeId;
case clscc_PapersBigTopicEN.con_IsShow:
return this.isShow;
case clscc_PapersBigTopicEN.con_OrderNum:
return this.orderNum;
case clscc_PapersBigTopicEN.con_UpdDate:
return this.updDate;
case clscc_PapersBigTopicEN.con_UpdUser:
return this.updUser;
case clscc_PapersBigTopicEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_PapersBigTopic]中不存在!`;
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
case clscc_PapersBigTopicEN.con_PapersBigTopicId:
this.papersBigTopicId = strValue;
    this.hmProperty["papersBigTopicId"] = true;
break;
case clscc_PapersBigTopicEN.con_PapersBigTopicName:
this.papersBigTopicName = strValue;
    this.hmProperty["papersBigTopicName"] = true;
break;
case clscc_PapersBigTopicEN.con_TopicDescription:
this.topicDescription = strValue;
    this.hmProperty["topicDescription"] = true;
break;
case clscc_PapersBigTopicEN.con_TopicScores:
this.topicScores = Number(strValue);
    this.hmProperty["topicScores"] = true;
break;
case clscc_PapersBigTopicEN.con_CourseExamPaperId:
this.courseExamPaperId = strValue;
    this.hmProperty["courseExamPaperId"] = true;
break;
case clscc_PapersBigTopicEN.con_QuestionTypeId:
this.questionTypeId = strValue;
    this.hmProperty["questionTypeId"] = true;
break;
case clscc_PapersBigTopicEN.con_IsShow:
this.isShow = Boolean(strValue);
    this.hmProperty["isShow"] = true;
break;
case clscc_PapersBigTopicEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clscc_PapersBigTopicEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clscc_PapersBigTopicEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clscc_PapersBigTopicEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[cc_PapersBigTopic]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public papersBigTopicId = "";    //试卷大题目Id
public papersBigTopicName = "";    //试卷大题目名称
public topicDescription = "";    //标题描述
public topicScores = 0;    //大题得分
public courseExamPaperId = "";    //考卷流水号
public questionTypeId = "";    //题目类型Id
public isShow = false;    //是否启用
public orderNum = 0;    //序号
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"PapersBigTopicId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PapersBigTopicId(): string {return "papersBigTopicId";}    //试卷大题目Id

 /**
 * 常量:"PapersBigTopicName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PapersBigTopicName(): string {return "papersBigTopicName";}    //试卷大题目名称

 /**
 * 常量:"TopicDescription"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TopicDescription(): string {return "topicDescription";}    //标题描述

 /**
 * 常量:"TopicScores"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TopicScores(): string {return "topicScores";}    //大题得分

 /**
 * 常量:"CourseExamPaperId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"IsShow"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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
const instance = new clscc_PapersBigTopicEN();
return instance.hasOwnProperty(propName);
}
}