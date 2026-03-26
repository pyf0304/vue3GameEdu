
 /**
 * 类名:clsUserAnswerResult
 * 表名:UserAnswerResult(01120032)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/07 08:48:53
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 用户答题结果(UserAnswerResult)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsUserAnswerResult 
{
public static _CurrTabName= "UserAnswerResult"; //当前表名,与该类相关的表名
public static _KeyFldName= "MinId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 31;
public static AttributeName = ["minId", "questionId", "courseId", "idCurrEduCls", "examBatchNo", "courseExamPaperId", "answerOptionId", "batchId", "userId", "answerText", "answerDate", "answerTime", "answerIP", "isAccess", "isAccessC", "idSchool", "school", "answerMode", "isMarking", "isRight", "score", "markTime", "markerId", "comment", "isAccessKnowledge", "answerId", "answerMultiOption", "updDate", "updUser", "memo", "questionnaireSetId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsUserAnswerResult.con_MinId:
return this.minId;
case clsUserAnswerResult.con_QuestionId:
return this.questionId;
case clsUserAnswerResult.con_CourseId:
return this.courseId;
case clsUserAnswerResult.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsUserAnswerResult.con_ExamBatchNo:
return this.examBatchNo;
case clsUserAnswerResult.con_CourseExamPaperId:
return this.courseExamPaperId;
case clsUserAnswerResult.con_AnswerOptionId:
return this.answerOptionId;
case clsUserAnswerResult.con_BatchId:
return this.batchId;
case clsUserAnswerResult.con_UserId:
return this.userId;
case clsUserAnswerResult.con_AnswerText:
return this.answerText;
case clsUserAnswerResult.con_AnswerDate:
return this.answerDate;
case clsUserAnswerResult.con_AnswerTime:
return this.answerTime;
case clsUserAnswerResult.con_AnswerIP:
return this.answerIP;
case clsUserAnswerResult.con_IsAccess:
return this.isAccess;
case clsUserAnswerResult.con_IsAccessC:
return this.isAccessC;
case clsUserAnswerResult.con_IdSchool:
return this.idSchool;
case clsUserAnswerResult.con_School:
return this.school;
case clsUserAnswerResult.con_AnswerMode:
return this.answerMode;
case clsUserAnswerResult.con_IsMarking:
return this.isMarking;
case clsUserAnswerResult.con_IsRight:
return this.isRight;
case clsUserAnswerResult.con_Score:
return this.score;
case clsUserAnswerResult.con_MarkTime:
return this.markTime;
case clsUserAnswerResult.con_MarkerId:
return this.markerId;
case clsUserAnswerResult.con_Comment:
return this.comment;
case clsUserAnswerResult.con_IsAccessKnowledge:
return this.isAccessKnowledge;
case clsUserAnswerResult.con_AnswerId:
return this.answerId;
case clsUserAnswerResult.con_AnswerMultiOption:
return this.answerMultiOption;
case clsUserAnswerResult.con_UpdDate:
return this.updDate;
case clsUserAnswerResult.con_UpdUser:
return this.updUser;
case clsUserAnswerResult.con_Memo:
return this.memo;
case clsUserAnswerResult.con_QuestionnaireSetId:
return this.questionnaireSetId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[UserAnswerResult]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"MinId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MinId(): string {return "minId";}    //MinId

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"ExamBatchNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamBatchNo(): string {return "examBatchNo";}    //学生批次号

 /**
 * 常量:"CourseExamPaperId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

 /**
 * 常量:"AnswerOptionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerOptionId(): string {return "answerOptionId";}    //回答选项Id

 /**
 * 常量:"BatchId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BatchId(): string {return "batchId";}    //批次ID

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"AnswerText"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerText(): string {return "answerText";}    //回答文本

 /**
 * 常量:"AnswerDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerDate(): string {return "answerDate";}    //回答日期

 /**
 * 常量:"AnswerTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerTime(): string {return "answerTime";}    //回答时间

 /**
 * 常量:"AnswerIP"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerIP(): string {return "answerIP";}    //回答IP

 /**
 * 常量:"IsAccess"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAccess(): string {return "isAccess";}    //IsAccess

 /**
 * 常量:"IsAccessC"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAccessC(): string {return "isAccessC";}    //IsAccessC

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"School"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_School(): string {return "school";}    //School

 /**
 * 常量:"AnswerMode"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerMode(): string {return "answerMode";}    //AnswerMode

 /**
 * 常量:"IsMarking"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMarking(): string {return "isMarking";}    //是否批阅

 /**
 * 常量:"IsRight"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRight(): string {return "isRight";}    //是否正确

 /**
 * 常量:"Score"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //得分

 /**
 * 常量:"MarkTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MarkTime(): string {return "markTime";}    //批改时间

 /**
 * 常量:"MarkerId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MarkerId(): string {return "markerId";}    //打分者

 /**
 * 常量:"Comment"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Comment(): string {return "comment";}    //批注

 /**
 * 常量:"IsAccessKnowledge"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAccessKnowledge(): string {return "isAccessKnowledge";}    //是否处理知识点

 /**
 * 常量:"AnswerId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerId(): string {return "answerId";}    //问答ID

 /**
 * 常量:"AnswerMultiOption"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerMultiOption(): string {return "answerMultiOption";}    //多选项答案

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"QuestionnaireSetId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionnaireSetId(): string {return "questionnaireSetId";}    //问卷集ID
}