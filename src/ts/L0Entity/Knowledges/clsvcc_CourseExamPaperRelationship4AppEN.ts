
 /**
 * 类名:clsvcc_CourseExamPaperRelationship4AppEN
 * 表名:vcc_CourseExamPaperRelationship4App(01120256)
 * 版本:2024.11.08.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/09 18:37:53
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v题目与试卷关系4App(vcc_CourseExamPaperRelationship4App)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvcc_CourseExamPaperRelationship4AppEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vcc_CourseExamPaperRelationship4App"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 24;
public static AttributeName = ["mId", "courseExamPaperId", "examPaperName", "courseId", "courseName", "questionId", "questionIndex", "questionName", "questionTypeId", "questionTypeName", "examGradeId", "examGradeName", "questionScore", "isEffective", "userId", "startTime", "papersBigTopicId", "papersBigTopicName", "topicDescription", "topicScores", "topicOrderNum", "orderNum", "updDate", "updUser"];
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
case clsvcc_CourseExamPaperRelationship4AppEN.con_mId:
return this.mId;
case clsvcc_CourseExamPaperRelationship4AppEN.con_CourseExamPaperId:
return this.courseExamPaperId;
case clsvcc_CourseExamPaperRelationship4AppEN.con_ExamPaperName:
return this.examPaperName;
case clsvcc_CourseExamPaperRelationship4AppEN.con_CourseId:
return this.courseId;
case clsvcc_CourseExamPaperRelationship4AppEN.con_CourseName:
return this.courseName;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionId:
return this.questionId;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionIndex:
return this.questionIndex;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionName:
return this.questionName;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionTypeId:
return this.questionTypeId;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionTypeName:
return this.questionTypeName;
case clsvcc_CourseExamPaperRelationship4AppEN.con_ExamGradeId:
return this.examGradeId;
case clsvcc_CourseExamPaperRelationship4AppEN.con_ExamGradeName:
return this.examGradeName;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionScore:
return this.questionScore;
case clsvcc_CourseExamPaperRelationship4AppEN.con_IsEffective:
return this.isEffective;
case clsvcc_CourseExamPaperRelationship4AppEN.con_UserId:
return this.userId;
case clsvcc_CourseExamPaperRelationship4AppEN.con_StartTime:
return this.startTime;
case clsvcc_CourseExamPaperRelationship4AppEN.con_PapersBigTopicId:
return this.papersBigTopicId;
case clsvcc_CourseExamPaperRelationship4AppEN.con_PapersBigTopicName:
return this.papersBigTopicName;
case clsvcc_CourseExamPaperRelationship4AppEN.con_TopicDescription:
return this.topicDescription;
case clsvcc_CourseExamPaperRelationship4AppEN.con_TopicScores:
return this.topicScores;
case clsvcc_CourseExamPaperRelationship4AppEN.con_TopicOrderNum:
return this.topicOrderNum;
case clsvcc_CourseExamPaperRelationship4AppEN.con_OrderNum:
return this.orderNum;
case clsvcc_CourseExamPaperRelationship4AppEN.con_UpdDate:
return this.updDate;
case clsvcc_CourseExamPaperRelationship4AppEN.con_UpdUser:
return this.updUser;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vcc_CourseExamPaperRelationship4App]中不存在!`;
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
case clsvcc_CourseExamPaperRelationship4AppEN.con_mId:
this.mId = Number(strValue);
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_CourseExamPaperId:
this.courseExamPaperId = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_ExamPaperName:
this.examPaperName = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_CourseId:
this.courseId = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_CourseName:
this.courseName = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionId:
this.questionId = Number(strValue);
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionIndex:
this.questionIndex = Number(strValue);
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionName:
this.questionName = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionTypeId:
this.questionTypeId = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionTypeName:
this.questionTypeName = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_ExamGradeId:
this.examGradeId = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_ExamGradeName:
this.examGradeName = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_QuestionScore:
this.questionScore = Number(strValue);
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_IsEffective:
this.isEffective = Boolean(strValue);
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_UserId:
this.userId = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_StartTime:
this.startTime = Number(strValue);
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_PapersBigTopicId:
this.papersBigTopicId = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_PapersBigTopicName:
this.papersBigTopicName = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_TopicDescription:
this.topicDescription = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_TopicScores:
this.topicScores = Number(strValue);
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_TopicOrderNum:
this.topicOrderNum = Number(strValue);
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvcc_CourseExamPaperRelationship4AppEN.con_UpdUser:
this.updUser = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vcc_CourseExamPaperRelationship4App]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseExamPaperId = "";    //考卷流水号
public examPaperName = "";    //考卷名称
public courseId = "";    //课程Id
public courseName = "";    //课程名称
public questionId = 0;    //题目Id
public questionIndex = 0;    //题目序号
public questionName = "";    //题目名称
public questionTypeId = "";    //题目类型Id
public questionTypeName = "";    //题目类型名
public examGradeId = "";    //题库等级ID
public examGradeName = "";    //题库等级名
public questionScore = 0.0;    //题目得分
public isEffective = false;    //是否有效
public userId = "";    //用户ID
public startTime = 0;    //开始时间(s)
public papersBigTopicId = "";    //试卷大题目Id
public papersBigTopicName = "";    //试卷大题目名称
public topicDescription = "";    //标题描述
public topicScores = 0;    //大题得分
public topicOrderNum = 0;    //TopicOrderNum
public orderNum = 0;    //序号
public updDate = "";    //修改日期
public updUser = "";    //修改人


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"CourseExamPaperId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

 /**
 * 常量:"ExamPaperName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExamPaperName(): string {return "examPaperName";}    //考卷名称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"QuestionIndex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionIndex(): string {return "questionIndex";}    //题目序号

 /**
 * 常量:"QuestionName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionName(): string {return "questionName";}    //题目名称

 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"QuestionTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionTypeName(): string {return "questionTypeName";}    //题目类型名

 /**
 * 常量:"ExamGradeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExamGradeId(): string {return "examGradeId";}    //题库等级ID

 /**
 * 常量:"ExamGradeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExamGradeName(): string {return "examGradeName";}    //题库等级名

 /**
 * 常量:"QuestionScore"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionScore(): string {return "questionScore";}    //题目得分

 /**
 * 常量:"IsEffective"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsEffective(): string {return "isEffective";}    //是否有效

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"StartTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StartTime(): string {return "startTime";}    //开始时间(s)

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
 * 常量:"TopicOrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TopicOrderNum(): string {return "topicOrderNum";}    //TopicOrderNum

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
}