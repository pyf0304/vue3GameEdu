
 /**
 * 类名:clsvQuestionnaire
 * 表名:vQuestionnaire(01120019)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:24:55
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
 * v题目(vQuestionnaire)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvQuestionnaire 
{
public static _CurrTabName= "vQuestionnaire"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 70;
public static AttributeName = ["questionId", "questionIndex", "questionName", "questionContent", "questionMemo", "questionNo", "parentQuestionId", "examAnswer", "courseId", "courseCode", "courseName", "levelNo", "courseChapterId", "courseChapterName", "chapterId", "sectionId", "chapterName", "sectionName", "chapterNameSim", "sectionNameSim", "parentNodeId", "courseChapterReferred", "parentNodeName", "parentNodeReferred", "questionTypeId", "questionTypeName", "questionTypeId4Course", "questionTypeName4Course", "answerTypeId", "answerTypeName", "gridTitle", "answerModeId", "answerModeName", "questionScore", "defaultValue", "defaultSelectItem", "isShow", "isCast", "likeCount", "answerAttLimitSize", "limitedResourceType", "isEffective", "isCanInPaper", "examGradeId", "examGradeName", "textDirectId", "updDate", "updUser", "memo", "firstIndent", "codeTab", "codeTabCode", "codeTabCondition", "codeTabName", "courseIdChapter", "optionNum", "chapterOrderNum", "questionNameAdd", "difficultyLevelId", "fillInTextHeight", "fillInTextWidth", "isHaveAdditionalMemo", "isJs", "isMulti4FillInText", "knowledgeGraphId", "memoTextWidth", "questionCode", "sectionTypeId", "checkBoxLimitCount", "relaEvent"];
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
case clsvQuestionnaire.con_QuestionId:
return this.questionId;
case clsvQuestionnaire.con_QuestionIndex:
return this.questionIndex;
case clsvQuestionnaire.con_QuestionName:
return this.questionName;
case clsvQuestionnaire.con_QuestionContent:
return this.questionContent;
case clsvQuestionnaire.con_QuestionMemo:
return this.questionMemo;
case clsvQuestionnaire.con_QuestionNo:
return this.questionNo;
case clsvQuestionnaire.con_ParentQuestionId:
return this.parentQuestionId;
case clsvQuestionnaire.con_ExamAnswer:
return this.examAnswer;
case clsvQuestionnaire.con_CourseId:
return this.courseId;
case clsvQuestionnaire.con_CourseCode:
return this.courseCode;
case clsvQuestionnaire.con_CourseName:
return this.courseName;
case clsvQuestionnaire.con_LevelNo:
return this.levelNo;
case clsvQuestionnaire.con_CourseChapterId:
return this.courseChapterId;
case clsvQuestionnaire.con_CourseChapterName:
return this.courseChapterName;
case clsvQuestionnaire.con_ChapterId:
return this.chapterId;
case clsvQuestionnaire.con_SectionId:
return this.sectionId;
case clsvQuestionnaire.con_ChapterName:
return this.chapterName;
case clsvQuestionnaire.con_SectionName:
return this.sectionName;
case clsvQuestionnaire.con_ChapterNameSim:
return this.chapterNameSim;
case clsvQuestionnaire.con_SectionNameSim:
return this.sectionNameSim;
case clsvQuestionnaire.con_ParentNodeId:
return this.parentNodeId;
case clsvQuestionnaire.con_CourseChapterReferred:
return this.courseChapterReferred;
case clsvQuestionnaire.con_ParentNodeName:
return this.parentNodeName;
case clsvQuestionnaire.con_ParentNodeReferred:
return this.parentNodeReferred;
case clsvQuestionnaire.con_QuestionTypeId:
return this.questionTypeId;
case clsvQuestionnaire.con_QuestionTypeName:
return this.questionTypeName;
case clsvQuestionnaire.con_QuestionTypeId4Course:
return this.questionTypeId4Course;
case clsvQuestionnaire.con_QuestionTypeName4Course:
return this.questionTypeName4Course;
case clsvQuestionnaire.con_AnswerTypeId:
return this.answerTypeId;
case clsvQuestionnaire.con_AnswerTypeName:
return this.answerTypeName;
case clsvQuestionnaire.con_GridTitle:
return this.gridTitle;
case clsvQuestionnaire.con_AnswerModeId:
return this.answerModeId;
case clsvQuestionnaire.con_AnswerModeName:
return this.answerModeName;
case clsvQuestionnaire.con_QuestionScore:
return this.questionScore;
case clsvQuestionnaire.con_DefaultValue:
return this.defaultValue;
case clsvQuestionnaire.con_DefaultSelectItem:
return this.defaultSelectItem;
case clsvQuestionnaire.con_IsShow:
return this.isShow;
case clsvQuestionnaire.con_IsCast:
return this.isCast;
case clsvQuestionnaire.con_LikeCount:
return this.likeCount;
case clsvQuestionnaire.con_AnswerAttLimitSize:
return this.answerAttLimitSize;
case clsvQuestionnaire.con_LimitedResourceType:
return this.limitedResourceType;
case clsvQuestionnaire.con_IsEffective:
return this.isEffective;
case clsvQuestionnaire.con_IsCanInPaper:
return this.isCanInPaper;
case clsvQuestionnaire.con_ExamGradeId:
return this.examGradeId;
case clsvQuestionnaire.con_ExamGradeName:
return this.examGradeName;
case clsvQuestionnaire.con_TextDirectId:
return this.textDirectId;
case clsvQuestionnaire.con_UpdDate:
return this.updDate;
case clsvQuestionnaire.con_UpdUser:
return this.updUser;
case clsvQuestionnaire.con_Memo:
return this.memo;
case clsvQuestionnaire.con_FirstIndent:
return this.firstIndent;
case clsvQuestionnaire.con_CodeTab:
return this.codeTab;
case clsvQuestionnaire.con_CodeTabCode:
return this.codeTabCode;
case clsvQuestionnaire.con_CodeTabCondition:
return this.codeTabCondition;
case clsvQuestionnaire.con_CodeTabName:
return this.codeTabName;
case clsvQuestionnaire.con_CourseIdChapter:
return this.courseIdChapter;
case clsvQuestionnaire.con_OptionNum:
return this.optionNum;
case clsvQuestionnaire.con_ChapterOrderNum:
return this.chapterOrderNum;
case clsvQuestionnaire.con_QuestionNameAdd:
return this.questionNameAdd;
case clsvQuestionnaire.con_DifficultyLevelId:
return this.difficultyLevelId;
case clsvQuestionnaire.con_FillInTextHeight:
return this.fillInTextHeight;
case clsvQuestionnaire.con_FillInTextWidth:
return this.fillInTextWidth;
case clsvQuestionnaire.con_IsHaveAdditionalMemo:
return this.isHaveAdditionalMemo;
case clsvQuestionnaire.con_IsJs:
return this.isJs;
case clsvQuestionnaire.con_IsMulti4FillInText:
return this.isMulti4FillInText;
case clsvQuestionnaire.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsvQuestionnaire.con_MemoTextWidth:
return this.memoTextWidth;
case clsvQuestionnaire.con_QuestionCode:
return this.questionCode;
case clsvQuestionnaire.con_SectionTypeId:
return this.sectionTypeId;
case clsvQuestionnaire.con_CheckBoxLimitCount:
return this.checkBoxLimitCount;
case clsvQuestionnaire.con_RelaEvent:
return this.relaEvent;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQuestionnaire]中不存在!`;
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
 * 常量:"CourseCode"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseCode(): string {return "courseCode";}    //课程代码

 /**
 * 常量:"CourseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"LevelNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LevelNo(): string {return "levelNo";}    //学习关号2

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"CourseChapterName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterName(): string {return "courseChapterName";}    //课程章节名称

 /**
 * 常量:"ChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterId(): string {return "chapterId";}    //章Id

 /**
 * 常量:"SectionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionId(): string {return "sectionId";}    //节Id

 /**
 * 常量:"ChapterName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterName(): string {return "chapterName";}    //章名

 /**
 * 常量:"SectionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionName(): string {return "sectionName";}    //节名

 /**
 * 常量:"ChapterNameSim"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterNameSim(): string {return "chapterNameSim";}    //章名简称

 /**
 * 常量:"SectionNameSim"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionNameSim(): string {return "sectionNameSim";}    //节名简称

 /**
 * 常量:"ParentNodeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ParentNodeId(): string {return "parentNodeId";}    //父节点编号

 /**
 * 常量:"CourseChapterReferred"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterReferred(): string {return "courseChapterReferred";}    //节简称

 /**
 * 常量:"ParentNodeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ParentNodeName(): string {return "parentNodeName";}    //父节点名称

 /**
 * 常量:"ParentNodeReferred"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ParentNodeReferred(): string {return "parentNodeReferred";}    //章简称

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
 * 常量:"QuestionTypeId4Course"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionTypeId4Course(): string {return "questionTypeId4Course";}    //题目类型Id4课程

 /**
 * 常量:"QuestionTypeName4Course"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionTypeName4Course(): string {return "questionTypeName4Course";}    //题目类型名4课程

 /**
 * 常量:"AnswerTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerTypeId(): string {return "answerTypeId";}    //答案类型ID

 /**
 * 常量:"AnswerTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerTypeName(): string {return "answerTypeName";}    //答案类型名

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
 * 常量:"AnswerModeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerModeName(): string {return "answerModeName";}    //答案模式名称

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
 * 常量:"ExamGradeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamGradeName(): string {return "examGradeName";}    //题库等级名

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
 * 常量:"FirstIndent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FirstIndent(): string {return "firstIndent";}    //首行缩进

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
 * 常量:"CourseIdChapter"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseIdChapter(): string {return "courseIdChapter";}    //CourseId_Chapter

 /**
 * 常量:"OptionNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OptionNum(): string {return "optionNum";}    //选项数

 /**
 * 常量:"ChapterOrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterOrderNum(): string {return "chapterOrderNum";}    //章排序号

 /**
 * 常量:"QuestionNameAdd"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionNameAdd(): string {return "questionNameAdd";}    //题目补充

 /**
 * 常量:"DifficultyLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DifficultyLevelId(): string {return "difficultyLevelId";}    //难度等级Id

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
 * 常量:"IsHaveAdditionalMemo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsHaveAdditionalMemo(): string {return "isHaveAdditionalMemo";}    //是否有附加说明

 /**
 * 常量:"IsJs"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsJs(): string {return "isJs";}    //是否是JS

 /**
 * 常量:"IsMulti4FillInText"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMulti4FillInText(): string {return "isMulti4FillInText";}    //是否填空框多行

 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"MemoTextWidth"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MemoTextWidth(): string {return "memoTextWidth";}    //备注框宽度

 /**
 * 常量:"QuestionCode"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionCode(): string {return "questionCode";}    //html代码

 /**
 * 常量:"SectionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionTypeId(): string {return "sectionTypeId";}    //节点类型Id

 /**
 * 常量:"CheckBoxLimitCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CheckBoxLimitCount(): string {return "checkBoxLimitCount";}    //复选框限制数

 /**
 * 常量:"RelaEvent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RelaEvent(): string {return "relaEvent";}    //相关事件
}