
 /**
 * 类名:clsQuestionnaire
 * 表名:Questionnaire(01120001)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/10 23:07:59
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
 * 题目(Questionnaire)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQuestionnaire 
{
public static _CurrTabName= "Questionnaire"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 54;
public static AttributeName = ["questionId", "questionIndex", "questionName", "questionContent", "questionMemo", "questionNo", "parentQuestionId", "examAnswer", "courseId", "levelNo", "questionSourceId", "courseChapterId", "questionTypeId", "questionTypeId4Course", "answerTypeId", "gridTitle", "answerModeId", "isHaveAdditionalMemo", "questionScore", "defaultValue", "defaultSelectItem", "isShow", "isCast", "likeCount", "answerAttLimitSize", "limitedResourceType", "isEffective", "isCanInPaper", "examGradeId", "textDirectId", "updDate", "updUser", "memo", "questionCode", "difficultyLevelId", "sectionTypeId", "knowledgeGraphId", "firstIndent", "questionNameAdd", "codeTab", "codeTabCode", "codeTabCondition", "codeTabName", "fillInTextHeight", "fillInTextWidth", "isMulti4FillInText", "checkBoxLimitCount", "isJs", "memoTextWidth", "relaEvent", "isTest", "levelModeTypeId", "isRandom", "answerContent"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public questionId = 0;    //题目Id
public questionIndex = 0;    //题目序号
public questionName = "";    //题目名称
public questionContent = "";    //题目内容
public questionMemo = "";    //题目说明
public questionNo = "";    //题目编号
public parentQuestionId = "";    //父题目Id
public examAnswer = "";    //题目答案
public courseId = "";    //课程Id
public levelNo = 0;    //学习关号2
public questionSourceId = "";    //题目来源Id
public courseChapterId = "";    //课程章节ID
public questionTypeId = "";    //题目类型Id
public questionTypeId4Course = "";    //题目类型Id4课程
public answerTypeId = "";    //答案类型ID
public gridTitle = "";    //表格标题
public answerModeId = "";    //答案模式Id
public isHaveAdditionalMemo = false;    //是否有附加说明
public questionScore = 0.0;    //题目得分
public defaultValue = "";    //缺省值
public defaultSelectItem = "";    //默认选项
public isShow = false;    //是否启用
public isCast = false;    //是否播放
public likeCount = 0;    //资源喜欢数量
public answerAttLimitSize = 0;    //回答附件限制大小
public limitedResourceType = "";    //限制资源类型
public isEffective = false;    //是否有效
public isCanInPaper = false;    //是否可在Paper
public examGradeId = "";    //题库等级ID
public textDirectId = "";    //文本方向ID
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public questionCode = "";    //html代码
public difficultyLevelId = "";    //难度等级Id
public sectionTypeId = "";    //节点类型Id
public knowledgeGraphId = "";    //知识点图Id
public firstIndent = false;    //首行缩进
public questionNameAdd = "";    //题目补充
public codeTab = "";    //代码表
public codeTabCode = "";    //CodeTab_Code
public codeTabCondition = "";    //代码表_条件
public codeTabName = "";    //CodeTab_Name
public fillInTextHeight = 0;    //填空框高度
public fillInTextWidth = 0;    //填空框宽度
public isMulti4FillInText = false;    //是否填空框多行
public checkBoxLimitCount = 0;    //复选框限制数
public isJs = false;    //是否是JS
public memoTextWidth = 0;    //备注框宽度
public relaEvent = "";    //相关事件
public isTest = false;    //是否测试
public levelModeTypeId = "";    //模式Id
public isRandom = false;    //是否随机
public answerContent = "";    //答案内容

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
case clsQuestionnaire.con_QuestionId:
return this.questionId;
case clsQuestionnaire.con_QuestionIndex:
return this.questionIndex;
case clsQuestionnaire.con_QuestionName:
return this.questionName;
case clsQuestionnaire.con_QuestionContent:
return this.questionContent;
case clsQuestionnaire.con_QuestionMemo:
return this.questionMemo;
case clsQuestionnaire.con_QuestionNo:
return this.questionNo;
case clsQuestionnaire.con_ParentQuestionId:
return this.parentQuestionId;
case clsQuestionnaire.con_ExamAnswer:
return this.examAnswer;
case clsQuestionnaire.con_CourseId:
return this.courseId;
case clsQuestionnaire.con_LevelNo:
return this.levelNo;
case clsQuestionnaire.con_QuestionSourceId:
return this.questionSourceId;
case clsQuestionnaire.con_CourseChapterId:
return this.courseChapterId;
case clsQuestionnaire.con_QuestionTypeId:
return this.questionTypeId;
case clsQuestionnaire.con_QuestionTypeId4Course:
return this.questionTypeId4Course;
case clsQuestionnaire.con_AnswerTypeId:
return this.answerTypeId;
case clsQuestionnaire.con_GridTitle:
return this.gridTitle;
case clsQuestionnaire.con_AnswerModeId:
return this.answerModeId;
case clsQuestionnaire.con_IsHaveAdditionalMemo:
return this.isHaveAdditionalMemo;
case clsQuestionnaire.con_QuestionScore:
return this.questionScore;
case clsQuestionnaire.con_DefaultValue:
return this.defaultValue;
case clsQuestionnaire.con_DefaultSelectItem:
return this.defaultSelectItem;
case clsQuestionnaire.con_IsShow:
return this.isShow;
case clsQuestionnaire.con_IsCast:
return this.isCast;
case clsQuestionnaire.con_LikeCount:
return this.likeCount;
case clsQuestionnaire.con_AnswerAttLimitSize:
return this.answerAttLimitSize;
case clsQuestionnaire.con_LimitedResourceType:
return this.limitedResourceType;
case clsQuestionnaire.con_IsEffective:
return this.isEffective;
case clsQuestionnaire.con_IsCanInPaper:
return this.isCanInPaper;
case clsQuestionnaire.con_ExamGradeId:
return this.examGradeId;
case clsQuestionnaire.con_TextDirectId:
return this.textDirectId;
case clsQuestionnaire.con_UpdDate:
return this.updDate;
case clsQuestionnaire.con_UpdUser:
return this.updUser;
case clsQuestionnaire.con_Memo:
return this.memo;
case clsQuestionnaire.con_QuestionCode:
return this.questionCode;
case clsQuestionnaire.con_DifficultyLevelId:
return this.difficultyLevelId;
case clsQuestionnaire.con_SectionTypeId:
return this.sectionTypeId;
case clsQuestionnaire.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsQuestionnaire.con_FirstIndent:
return this.firstIndent;
case clsQuestionnaire.con_QuestionNameAdd:
return this.questionNameAdd;
case clsQuestionnaire.con_CodeTab:
return this.codeTab;
case clsQuestionnaire.con_CodeTabCode:
return this.codeTabCode;
case clsQuestionnaire.con_CodeTabCondition:
return this.codeTabCondition;
case clsQuestionnaire.con_CodeTabName:
return this.codeTabName;
case clsQuestionnaire.con_FillInTextHeight:
return this.fillInTextHeight;
case clsQuestionnaire.con_FillInTextWidth:
return this.fillInTextWidth;
case clsQuestionnaire.con_IsMulti4FillInText:
return this.isMulti4FillInText;
case clsQuestionnaire.con_CheckBoxLimitCount:
return this.checkBoxLimitCount;
case clsQuestionnaire.con_IsJs:
return this.isJs;
case clsQuestionnaire.con_MemoTextWidth:
return this.memoTextWidth;
case clsQuestionnaire.con_RelaEvent:
return this.relaEvent;
case clsQuestionnaire.con_IsTest:
return this.isTest;
case clsQuestionnaire.con_LevelModeTypeId:
return this.levelModeTypeId;
case clsQuestionnaire.con_IsRandom:
return this.isRandom;
case clsQuestionnaire.con_AnswerContent:
return this.answerContent;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Questionnaire]中不存在!`;
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
 * 常量:"QuestionContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionContent(): string {return "questionContent";}    //题目内容

 /**
 * 常量:"QuestionMemo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionMemo(): string {return "questionMemo";}    //题目说明

 /**
 * 常量:"QuestionNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionNo(): string {return "questionNo";}    //题目编号

 /**
 * 常量:"ParentQuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ParentQuestionId(): string {return "parentQuestionId";}    //父题目Id

 /**
 * 常量:"ExamAnswer"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamAnswer(): string {return "examAnswer";}    //题目答案

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"LevelNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LevelNo(): string {return "levelNo";}    //学习关号2

 /**
 * 常量:"QuestionSourceId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionSourceId(): string {return "questionSourceId";}    //题目来源Id

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

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
 * 常量:"GridTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GridTitle(): string {return "gridTitle";}    //表格标题

 /**
 * 常量:"AnswerModeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerModeId(): string {return "answerModeId";}    //答案模式Id

 /**
 * 常量:"IsHaveAdditionalMemo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsHaveAdditionalMemo(): string {return "isHaveAdditionalMemo";}    //是否有附加说明

 /**
 * 常量:"QuestionScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionScore(): string {return "questionScore";}    //题目得分

 /**
 * 常量:"DefaultValue"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DefaultValue(): string {return "defaultValue";}    //缺省值

 /**
 * 常量:"DefaultSelectItem"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DefaultSelectItem(): string {return "defaultSelectItem";}    //默认选项

 /**
 * 常量:"IsShow"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"IsCast"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCast(): string {return "isCast";}    //是否播放

 /**
 * 常量:"LikeCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LikeCount(): string {return "likeCount";}    //资源喜欢数量

 /**
 * 常量:"AnswerAttLimitSize"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerAttLimitSize(): string {return "answerAttLimitSize";}    //回答附件限制大小

 /**
 * 常量:"LimitedResourceType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LimitedResourceType(): string {return "limitedResourceType";}    //限制资源类型

 /**
 * 常量:"IsEffective"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsEffective(): string {return "isEffective";}    //是否有效

 /**
 * 常量:"IsCanInPaper"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCanInPaper(): string {return "isCanInPaper";}    //是否可在Paper

 /**
 * 常量:"ExamGradeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamGradeId(): string {return "examGradeId";}    //题库等级ID

 /**
 * 常量:"TextDirectId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TextDirectId(): string {return "textDirectId";}    //文本方向ID

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
 * 常量:"QuestionCode"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionCode(): string {return "questionCode";}    //html代码

 /**
 * 常量:"DifficultyLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DifficultyLevelId(): string {return "difficultyLevelId";}    //难度等级Id

 /**
 * 常量:"SectionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionTypeId(): string {return "sectionTypeId";}    //节点类型Id

 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"FirstIndent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FirstIndent(): string {return "firstIndent";}    //首行缩进

 /**
 * 常量:"QuestionNameAdd"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionNameAdd(): string {return "questionNameAdd";}    //题目补充

 /**
 * 常量:"CodeTab"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CodeTab(): string {return "codeTab";}    //代码表

 /**
 * 常量:"CodeTabCode"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CodeTabCode(): string {return "codeTabCode";}    //CodeTab_Code

 /**
 * 常量:"CodeTabCondition"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CodeTabCondition(): string {return "codeTabCondition";}    //代码表_条件

 /**
 * 常量:"CodeTabName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CodeTabName(): string {return "codeTabName";}    //CodeTab_Name

 /**
 * 常量:"FillInTextHeight"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FillInTextHeight(): string {return "fillInTextHeight";}    //填空框高度

 /**
 * 常量:"FillInTextWidth"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FillInTextWidth(): string {return "fillInTextWidth";}    //填空框宽度

 /**
 * 常量:"IsMulti4FillInText"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMulti4FillInText(): string {return "isMulti4FillInText";}    //是否填空框多行

 /**
 * 常量:"CheckBoxLimitCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CheckBoxLimitCount(): string {return "checkBoxLimitCount";}    //复选框限制数

 /**
 * 常量:"IsJs"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsJs(): string {return "isJs";}    //是否是JS

 /**
 * 常量:"MemoTextWidth"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MemoTextWidth(): string {return "memoTextWidth";}    //备注框宽度

 /**
 * 常量:"RelaEvent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RelaEvent(): string {return "relaEvent";}    //相关事件

 /**
 * 常量:"IsTest"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsTest(): string {return "isTest";}    //是否测试

 /**
 * 常量:"LevelModeTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LevelModeTypeId(): string {return "levelModeTypeId";}    //模式Id

 /**
 * 常量:"IsRandom"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRandom(): string {return "isRandom";}    //是否随机

 /**
 * 常量:"AnswerContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerContent(): string {return "answerContent";}    //答案内容
}