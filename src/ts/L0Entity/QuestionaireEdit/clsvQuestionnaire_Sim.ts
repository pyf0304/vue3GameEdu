
 /**
 * 类名:clsvQuestionnaire_Sim
 * 表名:vQuestionnaire_Sim(01120949)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:30:53
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * vQuestionnaire_Sim(vQuestionnaire_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvQuestionnaire_Sim 
{
public static _CurrTabName= "vQuestionnaire_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["questionId", "questionName", "questionIndex", "questionNo", "courseId", "courseChapterId", "parentQuestionId", "questionTypeId", "questionTypeId4Course", "answerTypeId", "isShow", "difficultyLevelId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public questionId = 0;    //题目Id
public questionName = "";    //题目名称
public questionIndex = 0;    //题目序号
public questionNo = "";    //题目编号
public courseId = "";    //课程Id
public courseChapterId = "";    //课程章节ID
public parentQuestionId = "";    //父题目Id
public questionTypeId = "";    //题目类型Id
public questionTypeId4Course = "";    //题目类型Id4课程
public answerTypeId = "";    //答案类型ID
public isShow = false;    //是否启用
public difficultyLevelId = "";    //难度等级Id

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
case clsvQuestionnaire_Sim.con_QuestionId:
return this.questionId;
case clsvQuestionnaire_Sim.con_QuestionName:
return this.questionName;
case clsvQuestionnaire_Sim.con_QuestionIndex:
return this.questionIndex;
case clsvQuestionnaire_Sim.con_QuestionNo:
return this.questionNo;
case clsvQuestionnaire_Sim.con_CourseId:
return this.courseId;
case clsvQuestionnaire_Sim.con_CourseChapterId:
return this.courseChapterId;
case clsvQuestionnaire_Sim.con_ParentQuestionId:
return this.parentQuestionId;
case clsvQuestionnaire_Sim.con_QuestionTypeId:
return this.questionTypeId;
case clsvQuestionnaire_Sim.con_QuestionTypeId4Course:
return this.questionTypeId4Course;
case clsvQuestionnaire_Sim.con_AnswerTypeId:
return this.answerTypeId;
case clsvQuestionnaire_Sim.con_IsShow:
return this.isShow;
case clsvQuestionnaire_Sim.con_DifficultyLevelId:
return this.difficultyLevelId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQuestionnaire_Sim]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"QuestionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionName(): string {return "questionName";}    //题目名称

 /**
 * 常量:"QuestionIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionIndex(): string {return "questionIndex";}    //题目序号

 /**
 * 常量:"QuestionNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionNo(): string {return "questionNo";}    //题目编号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"ParentQuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ParentQuestionId(): string {return "parentQuestionId";}    //父题目Id

 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"QuestionTypeId4Course"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionTypeId4Course(): string {return "questionTypeId4Course";}    //题目类型Id4课程

 /**
 * 常量:"AnswerTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerTypeId(): string {return "answerTypeId";}    //答案类型ID

 /**
 * 常量:"IsShow"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"DifficultyLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DifficultyLevelId(): string {return "difficultyLevelId";}    //难度等级Id
}