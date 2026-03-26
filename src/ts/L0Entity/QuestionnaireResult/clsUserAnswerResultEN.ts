
 /**
 * 类名:clsUserAnswerResultEN
 * 表名:UserAnswerResult(01120032)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/07 08:48:52
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 用户答题结果(UserAnswerResult)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsUserAnswerResultEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "UserAnswerResult"; //当前表名,与该类相关的表名
public static _KeyFldName= "MinId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 31;
public static AttributeName = ["minId", "questionId", "courseId", "idCurrEduCls", "examBatchNo", "courseExamPaperId", "answerOptionId", "batchId", "userId", "answerText", "answerDate", "answerTime", "answerIP", "isAccess", "isAccessC", "idSchool", "school", "answerMode", "isMarking", "isRight", "score", "markTime", "markerId", "comment", "isAccessKnowledge", "answerId", "answerMultiOption", "updDate", "updUser", "memo", "questionnaireSetId"];
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
private mlngMinId = 0;    //MinId
private mlngQuestionId = 0;    //题目Id
private mstrCourseId = "";    //课程Id
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrExamBatchNo = "";    //学生批次号
private mstrCourseExamPaperId = "";    //考卷流水号
private mstrAnswerOptionId = "";    //回答选项Id
private mstrBatchId = "";    //批次ID
private mstrUserId = "";    //用户ID
private mstrAnswerText = "";    //回答文本
private mstrAnswerDate = "";    //回答日期
private mstrAnswerTime = "";    //回答时间
private mstrAnswerIP = "";    //回答IP
private mbolIsAccess = false;    //IsAccess
private mbolIsAccessC = false;    //IsAccessC
private mstrIdSchool = "";    //学校流水号
private mstrSchool = "";    //School
private mintAnswerMode = 0;    //AnswerMode
private mbolIsMarking = false;    //是否批阅
private mbolIsRight = false;    //是否正确
private mdblScore = 0;    //得分
private mstrMarkTime = "";    //批改时间
private mstrMarkerId = "";    //打分者
private mstrComment = "";    //批注
private mbolIsAccessKnowledge = false;    //是否处理知识点
private mlngAnswerId = 0;    //问答ID
private mstrAnswerMultiOption = "";    //多选项答案
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注
private mstrQuestionnaireSetId = "";    //问卷集ID

/**
 * MinId(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMinId (value: number)
{
if (value  != undefined)
{
 this.minId = value;
    this.hmProperty["minId"] = true;
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
 * 回答文本(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerText (value: string)
{
if (value  != undefined)
{
 this.answerText = value;
    this.hmProperty["answerText"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答日期(说明:;字段类型:varchar;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerDate (value: string)
{
if (value  != undefined)
{
 this.answerDate = value;
    this.hmProperty["answerDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答时间(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerTime (value: string)
{
if (value  != undefined)
{
 this.answerTime = value;
    this.hmProperty["answerTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答IP(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerIP (value: string)
{
if (value  != undefined)
{
 this.answerIP = value;
    this.hmProperty["answerIP"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * IsAccess(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsAccess (value: boolean)
{
if (value  != undefined)
{
 this.isAccess = value;
    this.hmProperty["isAccess"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * IsAccessC(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsAccessC (value: boolean)
{
if (value  != undefined)
{
 this.isAccessC = value;
    this.hmProperty["isAccessC"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdSchool (value: string)
{
if (value  != undefined)
{
 this.idSchool = value;
    this.hmProperty["idSchool"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * School(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchool (value: string)
{
if (value  != undefined)
{
 this.school = value;
    this.hmProperty["school"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * AnswerMode(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerMode (value: number)
{
if (value  != undefined)
{
 this.answerMode = value;
    this.hmProperty["answerMode"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否批阅(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsMarking (value: boolean)
{
if (value  != undefined)
{
 this.isMarking = value;
    this.hmProperty["isMarking"] = true;
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
 * 批注(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetComment (value: string)
{
if (value  != undefined)
{
 this.comment = value;
    this.hmProperty["comment"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否处理知识点(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsAccessKnowledge (value: boolean)
{
if (value  != undefined)
{
 this.isAccessKnowledge = value;
    this.hmProperty["isAccessKnowledge"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

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
 * 多选项答案(说明:;字段类型:varchar;字段长度:300;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerMultiOption (value: string)
{
if (value  != undefined)
{
 this.answerMultiOption = value;
    this.hmProperty["answerMultiOption"] = true;
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
case clsUserAnswerResultEN.con_MinId:
return this.minId;
case clsUserAnswerResultEN.con_QuestionId:
return this.questionId;
case clsUserAnswerResultEN.con_CourseId:
return this.courseId;
case clsUserAnswerResultEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsUserAnswerResultEN.con_ExamBatchNo:
return this.examBatchNo;
case clsUserAnswerResultEN.con_CourseExamPaperId:
return this.courseExamPaperId;
case clsUserAnswerResultEN.con_AnswerOptionId:
return this.answerOptionId;
case clsUserAnswerResultEN.con_BatchId:
return this.batchId;
case clsUserAnswerResultEN.con_UserId:
return this.userId;
case clsUserAnswerResultEN.con_AnswerText:
return this.answerText;
case clsUserAnswerResultEN.con_AnswerDate:
return this.answerDate;
case clsUserAnswerResultEN.con_AnswerTime:
return this.answerTime;
case clsUserAnswerResultEN.con_AnswerIP:
return this.answerIP;
case clsUserAnswerResultEN.con_IsAccess:
return this.isAccess;
case clsUserAnswerResultEN.con_IsAccessC:
return this.isAccessC;
case clsUserAnswerResultEN.con_IdSchool:
return this.idSchool;
case clsUserAnswerResultEN.con_School:
return this.school;
case clsUserAnswerResultEN.con_AnswerMode:
return this.answerMode;
case clsUserAnswerResultEN.con_IsMarking:
return this.isMarking;
case clsUserAnswerResultEN.con_IsRight:
return this.isRight;
case clsUserAnswerResultEN.con_Score:
return this.score;
case clsUserAnswerResultEN.con_MarkTime:
return this.markTime;
case clsUserAnswerResultEN.con_MarkerId:
return this.markerId;
case clsUserAnswerResultEN.con_Comment:
return this.comment;
case clsUserAnswerResultEN.con_IsAccessKnowledge:
return this.isAccessKnowledge;
case clsUserAnswerResultEN.con_AnswerId:
return this.answerId;
case clsUserAnswerResultEN.con_AnswerMultiOption:
return this.answerMultiOption;
case clsUserAnswerResultEN.con_UpdDate:
return this.updDate;
case clsUserAnswerResultEN.con_UpdUser:
return this.updUser;
case clsUserAnswerResultEN.con_Memo:
return this.memo;
case clsUserAnswerResultEN.con_QuestionnaireSetId:
return this.questionnaireSetId;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[UserAnswerResult]中不存在!`;
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
case clsUserAnswerResultEN.con_MinId:
this.minId = Number(strValue);
    this.hmProperty["minId"] = true;
break;
case clsUserAnswerResultEN.con_QuestionId:
this.questionId = Number(strValue);
    this.hmProperty["questionId"] = true;
break;
case clsUserAnswerResultEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsUserAnswerResultEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsUserAnswerResultEN.con_ExamBatchNo:
this.examBatchNo = strValue;
    this.hmProperty["examBatchNo"] = true;
break;
case clsUserAnswerResultEN.con_CourseExamPaperId:
this.courseExamPaperId = strValue;
    this.hmProperty["courseExamPaperId"] = true;
break;
case clsUserAnswerResultEN.con_AnswerOptionId:
this.answerOptionId = strValue;
    this.hmProperty["answerOptionId"] = true;
break;
case clsUserAnswerResultEN.con_BatchId:
this.batchId = strValue;
    this.hmProperty["batchId"] = true;
break;
case clsUserAnswerResultEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsUserAnswerResultEN.con_AnswerText:
this.answerText = strValue;
    this.hmProperty["answerText"] = true;
break;
case clsUserAnswerResultEN.con_AnswerDate:
this.answerDate = strValue;
    this.hmProperty["answerDate"] = true;
break;
case clsUserAnswerResultEN.con_AnswerTime:
this.answerTime = strValue;
    this.hmProperty["answerTime"] = true;
break;
case clsUserAnswerResultEN.con_AnswerIP:
this.answerIP = strValue;
    this.hmProperty["answerIP"] = true;
break;
case clsUserAnswerResultEN.con_IsAccess:
this.isAccess = Boolean(strValue);
    this.hmProperty["isAccess"] = true;
break;
case clsUserAnswerResultEN.con_IsAccessC:
this.isAccessC = Boolean(strValue);
    this.hmProperty["isAccessC"] = true;
break;
case clsUserAnswerResultEN.con_IdSchool:
this.idSchool = strValue;
    this.hmProperty["idSchool"] = true;
break;
case clsUserAnswerResultEN.con_School:
this.school = strValue;
    this.hmProperty["school"] = true;
break;
case clsUserAnswerResultEN.con_AnswerMode:
this.answerMode = Number(strValue);
    this.hmProperty["answerMode"] = true;
break;
case clsUserAnswerResultEN.con_IsMarking:
this.isMarking = Boolean(strValue);
    this.hmProperty["isMarking"] = true;
break;
case clsUserAnswerResultEN.con_IsRight:
this.isRight = Boolean(strValue);
    this.hmProperty["isRight"] = true;
break;
case clsUserAnswerResultEN.con_Score:
this.score = Number(strValue);
    this.hmProperty["score"] = true;
break;
case clsUserAnswerResultEN.con_MarkTime:
this.markTime = strValue;
    this.hmProperty["markTime"] = true;
break;
case clsUserAnswerResultEN.con_MarkerId:
this.markerId = strValue;
    this.hmProperty["markerId"] = true;
break;
case clsUserAnswerResultEN.con_Comment:
this.comment = strValue;
    this.hmProperty["comment"] = true;
break;
case clsUserAnswerResultEN.con_IsAccessKnowledge:
this.isAccessKnowledge = Boolean(strValue);
    this.hmProperty["isAccessKnowledge"] = true;
break;
case clsUserAnswerResultEN.con_AnswerId:
this.answerId = Number(strValue);
    this.hmProperty["answerId"] = true;
break;
case clsUserAnswerResultEN.con_AnswerMultiOption:
this.answerMultiOption = strValue;
    this.hmProperty["answerMultiOption"] = true;
break;
case clsUserAnswerResultEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsUserAnswerResultEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsUserAnswerResultEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsUserAnswerResultEN.con_QuestionnaireSetId:
this.questionnaireSetId = strValue;
    this.hmProperty["questionnaireSetId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[UserAnswerResult]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public minId = 0;    //MinId
public questionId = 0;    //题目Id
public courseId = "";    //课程Id
public idCurrEduCls = "";    //教学班流水号
public examBatchNo = "";    //学生批次号
public courseExamPaperId = "";    //考卷流水号
public answerOptionId = "";    //回答选项Id
public batchId = "";    //批次ID
public userId = "";    //用户ID
public answerText = "";    //回答文本
public answerDate = "";    //回答日期
public answerTime = "";    //回答时间
public answerIP = "";    //回答IP
public isAccess = false;    //IsAccess
public isAccessC = false;    //IsAccessC
public idSchool = "";    //学校流水号
public school = "";    //School
public answerMode = 0;    //AnswerMode
public isMarking = false;    //是否批阅
public isRight = false;    //是否正确
public score = 0;    //得分
public markTime = "";    //批改时间
public markerId = "";    //打分者
public comment = "";    //批注
public isAccessKnowledge = false;    //是否处理知识点
public answerId = 0;    //问答ID
public answerMultiOption = "";    //多选项答案
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public questionnaireSetId = "";    //问卷集ID


 /**
 * 常量:"MinId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MinId(): string {return "minId";}    //MinId

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"ExamBatchNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExamBatchNo(): string {return "examBatchNo";}    //学生批次号

 /**
 * 常量:"CourseExamPaperId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

 /**
 * 常量:"AnswerOptionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerOptionId(): string {return "answerOptionId";}    //回答选项Id

 /**
 * 常量:"BatchId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BatchId(): string {return "batchId";}    //批次ID

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"AnswerText"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerText(): string {return "answerText";}    //回答文本

 /**
 * 常量:"AnswerDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerDate(): string {return "answerDate";}    //回答日期

 /**
 * 常量:"AnswerTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerTime(): string {return "answerTime";}    //回答时间

 /**
 * 常量:"AnswerIP"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerIP(): string {return "answerIP";}    //回答IP

 /**
 * 常量:"IsAccess"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsAccess(): string {return "isAccess";}    //IsAccess

 /**
 * 常量:"IsAccessC"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsAccessC(): string {return "isAccessC";}    //IsAccessC

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"School"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_School(): string {return "school";}    //School

 /**
 * 常量:"AnswerMode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerMode(): string {return "answerMode";}    //AnswerMode

 /**
 * 常量:"IsMarking"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsMarking(): string {return "isMarking";}    //是否批阅

 /**
 * 常量:"IsRight"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRight(): string {return "isRight";}    //是否正确

 /**
 * 常量:"Score"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //得分

 /**
 * 常量:"MarkTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MarkTime(): string {return "markTime";}    //批改时间

 /**
 * 常量:"MarkerId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MarkerId(): string {return "markerId";}    //打分者

 /**
 * 常量:"Comment"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Comment(): string {return "comment";}    //批注

 /**
 * 常量:"IsAccessKnowledge"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsAccessKnowledge(): string {return "isAccessKnowledge";}    //是否处理知识点

 /**
 * 常量:"AnswerId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerId(): string {return "answerId";}    //问答ID

 /**
 * 常量:"AnswerMultiOption"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerMultiOption(): string {return "answerMultiOption";}    //多选项答案

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
 * 常量:"QuestionnaireSetId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionnaireSetId(): string {return "questionnaireSetId";}    //问卷集ID

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
//return propName in new clsUserAnswerResultEN();
const instance = new clsUserAnswerResultEN();
return instance.hasOwnProperty(propName);
}
}