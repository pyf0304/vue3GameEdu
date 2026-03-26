
 /**
 * 类名:clsvQuestionnaireEN
 * 表名:vQuestionnaire(01120019)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:24:53
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
 * v题目(vQuestionnaire)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQuestionnaireEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQuestionnaire"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 70;
public static AttributeName = ["questionId", "questionIndex", "questionName", "questionContent", "questionMemo", "questionNo", "parentQuestionId", "examAnswer", "courseId", "courseCode", "courseName", "levelNo", "courseChapterId", "courseChapterName", "chapterId", "sectionId", "chapterName", "sectionName", "chapterNameSim", "sectionNameSim", "parentNodeId", "courseChapterReferred", "parentNodeName", "parentNodeReferred", "questionTypeId", "questionTypeName", "questionTypeId4Course", "questionTypeName4Course", "answerTypeId", "answerTypeName", "gridTitle", "answerModeId", "answerModeName", "questionScore", "defaultValue", "defaultSelectItem", "isShow", "isCast", "likeCount", "answerAttLimitSize", "limitedResourceType", "isEffective", "isCanInPaper", "examGradeId", "examGradeName", "textDirectId", "updDate", "updUser", "memo", "firstIndent", "codeTab", "codeTabCode", "codeTabCondition", "codeTabName", "courseIdChapter", "optionNum", "chapterOrderNum", "questionNameAdd", "difficultyLevelId", "fillInTextHeight", "fillInTextWidth", "isHaveAdditionalMemo", "isJs", "isMulti4FillInText", "knowledgeGraphId", "memoTextWidth", "questionCode", "sectionTypeId", "checkBoxLimitCount", "relaEvent"];
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
case clsvQuestionnaireEN.con_QuestionId:
return this.questionId;
case clsvQuestionnaireEN.con_QuestionIndex:
return this.questionIndex;
case clsvQuestionnaireEN.con_QuestionName:
return this.questionName;
case clsvQuestionnaireEN.con_QuestionContent:
return this.questionContent;
case clsvQuestionnaireEN.con_QuestionMemo:
return this.questionMemo;
case clsvQuestionnaireEN.con_QuestionNo:
return this.questionNo;
case clsvQuestionnaireEN.con_ParentQuestionId:
return this.parentQuestionId;
case clsvQuestionnaireEN.con_ExamAnswer:
return this.examAnswer;
case clsvQuestionnaireEN.con_CourseId:
return this.courseId;
case clsvQuestionnaireEN.con_CourseCode:
return this.courseCode;
case clsvQuestionnaireEN.con_CourseName:
return this.courseName;
case clsvQuestionnaireEN.con_LevelNo:
return this.levelNo;
case clsvQuestionnaireEN.con_CourseChapterId:
return this.courseChapterId;
case clsvQuestionnaireEN.con_CourseChapterName:
return this.courseChapterName;
case clsvQuestionnaireEN.con_ChapterId:
return this.chapterId;
case clsvQuestionnaireEN.con_SectionId:
return this.sectionId;
case clsvQuestionnaireEN.con_ChapterName:
return this.chapterName;
case clsvQuestionnaireEN.con_SectionName:
return this.sectionName;
case clsvQuestionnaireEN.con_ChapterNameSim:
return this.chapterNameSim;
case clsvQuestionnaireEN.con_SectionNameSim:
return this.sectionNameSim;
case clsvQuestionnaireEN.con_ParentNodeId:
return this.parentNodeId;
case clsvQuestionnaireEN.con_CourseChapterReferred:
return this.courseChapterReferred;
case clsvQuestionnaireEN.con_ParentNodeName:
return this.parentNodeName;
case clsvQuestionnaireEN.con_ParentNodeReferred:
return this.parentNodeReferred;
case clsvQuestionnaireEN.con_QuestionTypeId:
return this.questionTypeId;
case clsvQuestionnaireEN.con_QuestionTypeName:
return this.questionTypeName;
case clsvQuestionnaireEN.con_QuestionTypeId4Course:
return this.questionTypeId4Course;
case clsvQuestionnaireEN.con_QuestionTypeName4Course:
return this.questionTypeName4Course;
case clsvQuestionnaireEN.con_AnswerTypeId:
return this.answerTypeId;
case clsvQuestionnaireEN.con_AnswerTypeName:
return this.answerTypeName;
case clsvQuestionnaireEN.con_GridTitle:
return this.gridTitle;
case clsvQuestionnaireEN.con_AnswerModeId:
return this.answerModeId;
case clsvQuestionnaireEN.con_AnswerModeName:
return this.answerModeName;
case clsvQuestionnaireEN.con_QuestionScore:
return this.questionScore;
case clsvQuestionnaireEN.con_DefaultValue:
return this.defaultValue;
case clsvQuestionnaireEN.con_DefaultSelectItem:
return this.defaultSelectItem;
case clsvQuestionnaireEN.con_IsShow:
return this.isShow;
case clsvQuestionnaireEN.con_IsCast:
return this.isCast;
case clsvQuestionnaireEN.con_LikeCount:
return this.likeCount;
case clsvQuestionnaireEN.con_AnswerAttLimitSize:
return this.answerAttLimitSize;
case clsvQuestionnaireEN.con_LimitedResourceType:
return this.limitedResourceType;
case clsvQuestionnaireEN.con_IsEffective:
return this.isEffective;
case clsvQuestionnaireEN.con_IsCanInPaper:
return this.isCanInPaper;
case clsvQuestionnaireEN.con_ExamGradeId:
return this.examGradeId;
case clsvQuestionnaireEN.con_ExamGradeName:
return this.examGradeName;
case clsvQuestionnaireEN.con_TextDirectId:
return this.textDirectId;
case clsvQuestionnaireEN.con_UpdDate:
return this.updDate;
case clsvQuestionnaireEN.con_UpdUser:
return this.updUser;
case clsvQuestionnaireEN.con_Memo:
return this.memo;
case clsvQuestionnaireEN.con_FirstIndent:
return this.firstIndent;
case clsvQuestionnaireEN.con_CodeTab:
return this.codeTab;
case clsvQuestionnaireEN.con_CodeTabCode:
return this.codeTabCode;
case clsvQuestionnaireEN.con_CodeTabCondition:
return this.codeTabCondition;
case clsvQuestionnaireEN.con_CodeTabName:
return this.codeTabName;
case clsvQuestionnaireEN.con_CourseIdChapter:
return this.courseIdChapter;
case clsvQuestionnaireEN.con_OptionNum:
return this.optionNum;
case clsvQuestionnaireEN.con_ChapterOrderNum:
return this.chapterOrderNum;
case clsvQuestionnaireEN.con_QuestionNameAdd:
return this.questionNameAdd;
case clsvQuestionnaireEN.con_DifficultyLevelId:
return this.difficultyLevelId;
case clsvQuestionnaireEN.con_FillInTextHeight:
return this.fillInTextHeight;
case clsvQuestionnaireEN.con_FillInTextWidth:
return this.fillInTextWidth;
case clsvQuestionnaireEN.con_IsHaveAdditionalMemo:
return this.isHaveAdditionalMemo;
case clsvQuestionnaireEN.con_IsJs:
return this.isJs;
case clsvQuestionnaireEN.con_IsMulti4FillInText:
return this.isMulti4FillInText;
case clsvQuestionnaireEN.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsvQuestionnaireEN.con_MemoTextWidth:
return this.memoTextWidth;
case clsvQuestionnaireEN.con_QuestionCode:
return this.questionCode;
case clsvQuestionnaireEN.con_SectionTypeId:
return this.sectionTypeId;
case clsvQuestionnaireEN.con_CheckBoxLimitCount:
return this.checkBoxLimitCount;
case clsvQuestionnaireEN.con_RelaEvent:
return this.relaEvent;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQuestionnaire]中不存在!`;
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
case clsvQuestionnaireEN.con_QuestionId:
this.questionId = Number(strValue);
break;
case clsvQuestionnaireEN.con_QuestionIndex:
this.questionIndex = Number(strValue);
break;
case clsvQuestionnaireEN.con_QuestionName:
this.questionName = strValue;
break;
case clsvQuestionnaireEN.con_QuestionContent:
this.questionContent = strValue;
break;
case clsvQuestionnaireEN.con_QuestionMemo:
this.questionMemo = strValue;
break;
case clsvQuestionnaireEN.con_QuestionNo:
this.questionNo = strValue;
break;
case clsvQuestionnaireEN.con_ParentQuestionId:
this.parentQuestionId = strValue;
break;
case clsvQuestionnaireEN.con_ExamAnswer:
this.examAnswer = strValue;
break;
case clsvQuestionnaireEN.con_CourseId:
this.courseId = strValue;
break;
case clsvQuestionnaireEN.con_CourseCode:
this.courseCode = strValue;
break;
case clsvQuestionnaireEN.con_CourseName:
this.courseName = strValue;
break;
case clsvQuestionnaireEN.con_LevelNo:
this.levelNo = Number(strValue);
break;
case clsvQuestionnaireEN.con_CourseChapterId:
this.courseChapterId = strValue;
break;
case clsvQuestionnaireEN.con_CourseChapterName:
this.courseChapterName = strValue;
break;
case clsvQuestionnaireEN.con_ChapterId:
this.chapterId = strValue;
break;
case clsvQuestionnaireEN.con_SectionId:
this.sectionId = strValue;
break;
case clsvQuestionnaireEN.con_ChapterName:
this.chapterName = strValue;
break;
case clsvQuestionnaireEN.con_SectionName:
this.sectionName = strValue;
break;
case clsvQuestionnaireEN.con_ChapterNameSim:
this.chapterNameSim = strValue;
break;
case clsvQuestionnaireEN.con_SectionNameSim:
this.sectionNameSim = strValue;
break;
case clsvQuestionnaireEN.con_ParentNodeId:
this.parentNodeId = strValue;
break;
case clsvQuestionnaireEN.con_CourseChapterReferred:
this.courseChapterReferred = strValue;
break;
case clsvQuestionnaireEN.con_ParentNodeName:
this.parentNodeName = strValue;
break;
case clsvQuestionnaireEN.con_ParentNodeReferred:
this.parentNodeReferred = strValue;
break;
case clsvQuestionnaireEN.con_QuestionTypeId:
this.questionTypeId = strValue;
break;
case clsvQuestionnaireEN.con_QuestionTypeName:
this.questionTypeName = strValue;
break;
case clsvQuestionnaireEN.con_QuestionTypeId4Course:
this.questionTypeId4Course = strValue;
break;
case clsvQuestionnaireEN.con_QuestionTypeName4Course:
this.questionTypeName4Course = strValue;
break;
case clsvQuestionnaireEN.con_AnswerTypeId:
this.answerTypeId = strValue;
break;
case clsvQuestionnaireEN.con_AnswerTypeName:
this.answerTypeName = strValue;
break;
case clsvQuestionnaireEN.con_GridTitle:
this.gridTitle = strValue;
break;
case clsvQuestionnaireEN.con_AnswerModeId:
this.answerModeId = strValue;
break;
case clsvQuestionnaireEN.con_AnswerModeName:
this.answerModeName = strValue;
break;
case clsvQuestionnaireEN.con_QuestionScore:
this.questionScore = Number(strValue);
break;
case clsvQuestionnaireEN.con_DefaultValue:
this.defaultValue = strValue;
break;
case clsvQuestionnaireEN.con_DefaultSelectItem:
this.defaultSelectItem = strValue;
break;
case clsvQuestionnaireEN.con_IsShow:
this.isShow = Boolean(strValue);
break;
case clsvQuestionnaireEN.con_IsCast:
this.isCast = Boolean(strValue);
break;
case clsvQuestionnaireEN.con_LikeCount:
this.likeCount = Number(strValue);
break;
case clsvQuestionnaireEN.con_AnswerAttLimitSize:
this.answerAttLimitSize = Number(strValue);
break;
case clsvQuestionnaireEN.con_LimitedResourceType:
this.limitedResourceType = strValue;
break;
case clsvQuestionnaireEN.con_IsEffective:
this.isEffective = Boolean(strValue);
break;
case clsvQuestionnaireEN.con_IsCanInPaper:
this.isCanInPaper = Boolean(strValue);
break;
case clsvQuestionnaireEN.con_ExamGradeId:
this.examGradeId = strValue;
break;
case clsvQuestionnaireEN.con_ExamGradeName:
this.examGradeName = strValue;
break;
case clsvQuestionnaireEN.con_TextDirectId:
this.textDirectId = strValue;
break;
case clsvQuestionnaireEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQuestionnaireEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvQuestionnaireEN.con_Memo:
this.memo = strValue;
break;
case clsvQuestionnaireEN.con_FirstIndent:
this.firstIndent = Boolean(strValue);
break;
case clsvQuestionnaireEN.con_CodeTab:
this.codeTab = strValue;
break;
case clsvQuestionnaireEN.con_CodeTabCode:
this.codeTabCode = strValue;
break;
case clsvQuestionnaireEN.con_CodeTabCondition:
this.codeTabCondition = strValue;
break;
case clsvQuestionnaireEN.con_CodeTabName:
this.codeTabName = strValue;
break;
case clsvQuestionnaireEN.con_CourseIdChapter:
this.courseIdChapter = strValue;
break;
case clsvQuestionnaireEN.con_OptionNum:
this.optionNum = Number(strValue);
break;
case clsvQuestionnaireEN.con_ChapterOrderNum:
this.chapterOrderNum = Number(strValue);
break;
case clsvQuestionnaireEN.con_QuestionNameAdd:
this.questionNameAdd = strValue;
break;
case clsvQuestionnaireEN.con_DifficultyLevelId:
this.difficultyLevelId = strValue;
break;
case clsvQuestionnaireEN.con_FillInTextHeight:
this.fillInTextHeight = Number(strValue);
break;
case clsvQuestionnaireEN.con_FillInTextWidth:
this.fillInTextWidth = Number(strValue);
break;
case clsvQuestionnaireEN.con_IsHaveAdditionalMemo:
this.isHaveAdditionalMemo = Boolean(strValue);
break;
case clsvQuestionnaireEN.con_IsJs:
this.isJs = Boolean(strValue);
break;
case clsvQuestionnaireEN.con_IsMulti4FillInText:
this.isMulti4FillInText = Boolean(strValue);
break;
case clsvQuestionnaireEN.con_KnowledgeGraphId:
this.knowledgeGraphId = strValue;
break;
case clsvQuestionnaireEN.con_MemoTextWidth:
this.memoTextWidth = Number(strValue);
break;
case clsvQuestionnaireEN.con_QuestionCode:
this.questionCode = strValue;
break;
case clsvQuestionnaireEN.con_SectionTypeId:
this.sectionTypeId = strValue;
break;
case clsvQuestionnaireEN.con_CheckBoxLimitCount:
this.checkBoxLimitCount = Number(strValue);
break;
case clsvQuestionnaireEN.con_RelaEvent:
this.relaEvent = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQuestionnaire]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
public courseCode = "";    //课程代码
public courseName = "";    //课程名称
public levelNo = 0;    //学习关号2
public courseChapterId = "";    //课程章节ID
public courseChapterName = "";    //课程章节名称
public chapterId = "";    //章Id
public sectionId = "";    //节Id
public chapterName = "";    //章名
public sectionName = "";    //节名
public chapterNameSim = "";    //章名简称
public sectionNameSim = "";    //节名简称
public parentNodeId = "";    //父节点编号
public courseChapterReferred = "";    //节简称
public parentNodeName = "";    //父节点名称
public parentNodeReferred = "";    //章简称
public questionTypeId = "";    //题目类型Id
public questionTypeName = "";    //题目类型名
public questionTypeId4Course = "";    //题目类型Id4课程
public questionTypeName4Course = "";    //题目类型名4课程
public answerTypeId = "";    //答案类型ID
public answerTypeName = "";    //答案类型名
public gridTitle = "";    //表格标题
public answerModeId = "";    //答案模式Id
public answerModeName = "";    //答案模式名称
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
public examGradeName = "";    //题库等级名
public textDirectId = "";    //文本方向ID
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public firstIndent = false;    //首行缩进
public codeTab = "";    //代码表
public codeTabCode = "";    //CodeTab_Code
public codeTabCondition = "";    //代码表_条件
public codeTabName = "";    //CodeTab_Name
public courseIdChapter = "";    //CourseId_Chapter
public optionNum = 0;    //选项数
public chapterOrderNum = 0;    //章排序号
public questionNameAdd = "";    //题目补充
public difficultyLevelId = "";    //难度等级Id
public fillInTextHeight = 0;    //填空框高度
public fillInTextWidth = 0;    //填空框宽度
public isHaveAdditionalMemo = false;    //是否有附加说明
public isJs = false;    //是否是JS
public isMulti4FillInText = false;    //是否填空框多行
public knowledgeGraphId = "";    //知识点图Id
public memoTextWidth = 0;    //备注框宽度
public questionCode = "";    //html代码
public sectionTypeId = "";    //节点类型Id
public checkBoxLimitCount = 0;    //复选框限制数
public relaEvent = "";    //相关事件


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
 * 常量:"QuestionContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionContent(): string {return "questionContent";}    //题目内容

 /**
 * 常量:"QuestionMemo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionMemo(): string {return "questionMemo";}    //题目说明

 /**
 * 常量:"QuestionNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionNo(): string {return "questionNo";}    //题目编号

 /**
 * 常量:"ParentQuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ParentQuestionId(): string {return "parentQuestionId";}    //父题目Id

 /**
 * 常量:"ExamAnswer"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExamAnswer(): string {return "examAnswer";}    //题目答案

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CourseCode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseCode(): string {return "courseCode";}    //课程代码

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"LevelNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelNo(): string {return "levelNo";}    //学习关号2

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"CourseChapterName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseChapterName(): string {return "courseChapterName";}    //课程章节名称

 /**
 * 常量:"ChapterId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ChapterId(): string {return "chapterId";}    //章Id

 /**
 * 常量:"SectionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionId(): string {return "sectionId";}    //节Id

 /**
 * 常量:"ChapterName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ChapterName(): string {return "chapterName";}    //章名

 /**
 * 常量:"SectionName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionName(): string {return "sectionName";}    //节名

 /**
 * 常量:"ChapterNameSim"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ChapterNameSim(): string {return "chapterNameSim";}    //章名简称

 /**
 * 常量:"SectionNameSim"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionNameSim(): string {return "sectionNameSim";}    //节名简称

 /**
 * 常量:"ParentNodeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ParentNodeId(): string {return "parentNodeId";}    //父节点编号

 /**
 * 常量:"CourseChapterReferred"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseChapterReferred(): string {return "courseChapterReferred";}    //节简称

 /**
 * 常量:"ParentNodeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ParentNodeName(): string {return "parentNodeName";}    //父节点名称

 /**
 * 常量:"ParentNodeReferred"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ParentNodeReferred(): string {return "parentNodeReferred";}    //章简称

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
 * 常量:"QuestionTypeId4Course"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionTypeId4Course(): string {return "questionTypeId4Course";}    //题目类型Id4课程

 /**
 * 常量:"QuestionTypeName4Course"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionTypeName4Course(): string {return "questionTypeName4Course";}    //题目类型名4课程

 /**
 * 常量:"AnswerTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerTypeId(): string {return "answerTypeId";}    //答案类型ID

 /**
 * 常量:"AnswerTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerTypeName(): string {return "answerTypeName";}    //答案类型名

 /**
 * 常量:"GridTitle"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GridTitle(): string {return "gridTitle";}    //表格标题

 /**
 * 常量:"AnswerModeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerModeId(): string {return "answerModeId";}    //答案模式Id

 /**
 * 常量:"AnswerModeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerModeName(): string {return "answerModeName";}    //答案模式名称

 /**
 * 常量:"QuestionScore"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionScore(): string {return "questionScore";}    //题目得分

 /**
 * 常量:"DefaultValue"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DefaultValue(): string {return "defaultValue";}    //缺省值

 /**
 * 常量:"DefaultSelectItem"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DefaultSelectItem(): string {return "defaultSelectItem";}    //默认选项

 /**
 * 常量:"IsShow"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"IsCast"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsCast(): string {return "isCast";}    //是否播放

 /**
 * 常量:"LikeCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LikeCount(): string {return "likeCount";}    //资源喜欢数量

 /**
 * 常量:"AnswerAttLimitSize"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerAttLimitSize(): string {return "answerAttLimitSize";}    //回答附件限制大小

 /**
 * 常量:"LimitedResourceType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LimitedResourceType(): string {return "limitedResourceType";}    //限制资源类型

 /**
 * 常量:"IsEffective"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsEffective(): string {return "isEffective";}    //是否有效

 /**
 * 常量:"IsCanInPaper"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsCanInPaper(): string {return "isCanInPaper";}    //是否可在Paper

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
 * 常量:"TextDirectId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TextDirectId(): string {return "textDirectId";}    //文本方向ID

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
 * 常量:"FirstIndent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FirstIndent(): string {return "firstIndent";}    //首行缩进

 /**
 * 常量:"CodeTab"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CodeTab(): string {return "codeTab";}    //代码表

 /**
 * 常量:"CodeTabCode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CodeTabCode(): string {return "codeTabCode";}    //CodeTab_Code

 /**
 * 常量:"CodeTabCondition"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CodeTabCondition(): string {return "codeTabCondition";}    //代码表_条件

 /**
 * 常量:"CodeTabName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CodeTabName(): string {return "codeTabName";}    //CodeTab_Name

 /**
 * 常量:"CourseIdChapter"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseIdChapter(): string {return "courseIdChapter";}    //CourseId_Chapter

 /**
 * 常量:"OptionNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OptionNum(): string {return "optionNum";}    //选项数

 /**
 * 常量:"ChapterOrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ChapterOrderNum(): string {return "chapterOrderNum";}    //章排序号

 /**
 * 常量:"QuestionNameAdd"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionNameAdd(): string {return "questionNameAdd";}    //题目补充

 /**
 * 常量:"DifficultyLevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DifficultyLevelId(): string {return "difficultyLevelId";}    //难度等级Id

 /**
 * 常量:"FillInTextHeight"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FillInTextHeight(): string {return "fillInTextHeight";}    //填空框高度

 /**
 * 常量:"FillInTextWidth"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FillInTextWidth(): string {return "fillInTextWidth";}    //填空框宽度

 /**
 * 常量:"IsHaveAdditionalMemo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsHaveAdditionalMemo(): string {return "isHaveAdditionalMemo";}    //是否有附加说明

 /**
 * 常量:"IsJs"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsJs(): string {return "isJs";}    //是否是JS

 /**
 * 常量:"IsMulti4FillInText"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsMulti4FillInText(): string {return "isMulti4FillInText";}    //是否填空框多行

 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"MemoTextWidth"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MemoTextWidth(): string {return "memoTextWidth";}    //备注框宽度

 /**
 * 常量:"QuestionCode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionCode(): string {return "questionCode";}    //html代码

 /**
 * 常量:"SectionTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionTypeId(): string {return "sectionTypeId";}    //节点类型Id

 /**
 * 常量:"CheckBoxLimitCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CheckBoxLimitCount(): string {return "checkBoxLimitCount";}    //复选框限制数

 /**
 * 常量:"RelaEvent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RelaEvent(): string {return "relaEvent";}    //相关事件

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
const instance = new clsvQuestionnaireEN();
return instance.hasOwnProperty(propName);
}
}