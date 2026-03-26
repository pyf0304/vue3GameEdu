
 /**
 * 类名:clsvcc_CourseExamPaperRelationship4App
 * 表名:vcc_CourseExamPaperRelationship4App(01120256)
 * 版本:2024.11.08.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/09 18:37:55
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * v题目与试卷关系4App(vcc_CourseExamPaperRelationship4App)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvcc_CourseExamPaperRelationship4App 
{
public static _CurrTabName= "vcc_CourseExamPaperRelationship4App"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 24;
public static AttributeName = ["mId", "courseExamPaperId", "examPaperName", "courseId", "courseName", "questionId", "questionIndex", "questionName", "questionTypeId", "questionTypeName", "examGradeId", "examGradeName", "questionScore", "isEffective", "userId", "startTime", "papersBigTopicId", "papersBigTopicName", "topicDescription", "topicScores", "topicOrderNum", "orderNum", "updDate", "updUser"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
case clsvcc_CourseExamPaperRelationship4App.con_mId:
return this.mId;
case clsvcc_CourseExamPaperRelationship4App.con_CourseExamPaperId:
return this.courseExamPaperId;
case clsvcc_CourseExamPaperRelationship4App.con_ExamPaperName:
return this.examPaperName;
case clsvcc_CourseExamPaperRelationship4App.con_CourseId:
return this.courseId;
case clsvcc_CourseExamPaperRelationship4App.con_CourseName:
return this.courseName;
case clsvcc_CourseExamPaperRelationship4App.con_QuestionId:
return this.questionId;
case clsvcc_CourseExamPaperRelationship4App.con_QuestionIndex:
return this.questionIndex;
case clsvcc_CourseExamPaperRelationship4App.con_QuestionName:
return this.questionName;
case clsvcc_CourseExamPaperRelationship4App.con_QuestionTypeId:
return this.questionTypeId;
case clsvcc_CourseExamPaperRelationship4App.con_QuestionTypeName:
return this.questionTypeName;
case clsvcc_CourseExamPaperRelationship4App.con_ExamGradeId:
return this.examGradeId;
case clsvcc_CourseExamPaperRelationship4App.con_ExamGradeName:
return this.examGradeName;
case clsvcc_CourseExamPaperRelationship4App.con_QuestionScore:
return this.questionScore;
case clsvcc_CourseExamPaperRelationship4App.con_IsEffective:
return this.isEffective;
case clsvcc_CourseExamPaperRelationship4App.con_UserId:
return this.userId;
case clsvcc_CourseExamPaperRelationship4App.con_StartTime:
return this.startTime;
case clsvcc_CourseExamPaperRelationship4App.con_PapersBigTopicId:
return this.papersBigTopicId;
case clsvcc_CourseExamPaperRelationship4App.con_PapersBigTopicName:
return this.papersBigTopicName;
case clsvcc_CourseExamPaperRelationship4App.con_TopicDescription:
return this.topicDescription;
case clsvcc_CourseExamPaperRelationship4App.con_TopicScores:
return this.topicScores;
case clsvcc_CourseExamPaperRelationship4App.con_TopicOrderNum:
return this.topicOrderNum;
case clsvcc_CourseExamPaperRelationship4App.con_OrderNum:
return this.orderNum;
case clsvcc_CourseExamPaperRelationship4App.con_UpdDate:
return this.updDate;
case clsvcc_CourseExamPaperRelationship4App.con_UpdUser:
return this.updUser;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vcc_CourseExamPaperRelationship4App]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"mId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"CourseExamPaperId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

 /**
 * 常量:"ExamPaperName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamPaperName(): string {return "examPaperName";}    //考卷名称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CourseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"QuestionIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionIndex(): string {return "questionIndex";}    //题目序号

 /**
 * 常量:"QuestionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionName(): string {return "questionName";}    //题目名称

 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"QuestionTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionTypeName(): string {return "questionTypeName";}    //题目类型名

 /**
 * 常量:"ExamGradeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamGradeId(): string {return "examGradeId";}    //题库等级ID

 /**
 * 常量:"ExamGradeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamGradeName(): string {return "examGradeName";}    //题库等级名

 /**
 * 常量:"QuestionScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionScore(): string {return "questionScore";}    //题目得分

 /**
 * 常量:"IsEffective"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsEffective(): string {return "isEffective";}    //是否有效

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"StartTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StartTime(): string {return "startTime";}    //开始时间(s)

 /**
 * 常量:"PapersBigTopicId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PapersBigTopicId(): string {return "papersBigTopicId";}    //试卷大题目Id

 /**
 * 常量:"PapersBigTopicName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PapersBigTopicName(): string {return "papersBigTopicName";}    //试卷大题目名称

 /**
 * 常量:"TopicDescription"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TopicDescription(): string {return "topicDescription";}    //标题描述

 /**
 * 常量:"TopicScores"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TopicScores(): string {return "topicScores";}    //大题得分

 /**
 * 常量:"TopicOrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TopicOrderNum(): string {return "topicOrderNum";}    //TopicOrderNum

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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
}