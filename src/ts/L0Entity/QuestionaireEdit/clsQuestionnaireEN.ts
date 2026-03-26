
 /**
 * 类名:clsQuestionnaireEN
 * 表名:Questionnaire(01120001)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/10 23:07:55
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
 * 题目(Questionnaire)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQuestionnaireEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "Questionnaire"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 54;
public static AttributeName = ["questionId", "questionIndex", "questionName", "questionContent", "questionMemo", "questionNo", "parentQuestionId", "examAnswer", "courseId", "levelNo", "questionSourceId", "courseChapterId", "questionTypeId", "questionTypeId4Course", "answerTypeId", "gridTitle", "answerModeId", "isHaveAdditionalMemo", "questionScore", "defaultValue", "defaultSelectItem", "isShow", "isCast", "likeCount", "answerAttLimitSize", "limitedResourceType", "isEffective", "isCanInPaper", "examGradeId", "textDirectId", "updDate", "updUser", "memo", "questionCode", "difficultyLevelId", "sectionTypeId", "knowledgeGraphId", "firstIndent", "questionNameAdd", "codeTab", "codeTabCode", "codeTabCondition", "codeTabName", "fillInTextHeight", "fillInTextWidth", "isMulti4FillInText", "checkBoxLimitCount", "isJs", "memoTextWidth", "relaEvent", "isTest", "levelModeTypeId", "isRandom", "answerContent"];
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
private mlngQuestionId = 0;    //题目Id
private mintQuestionIndex = 0;    //题目序号
private mstrQuestionName = "";    //题目名称
private mstrQuestionContent = "";    //题目内容
private mstrQuestionMemo = "";    //题目说明
private mstrQuestionNo = "";    //题目编号
private mstrParentQuestionId = "";    //父题目Id
private mstrExamAnswer = "";    //题目答案
private mstrCourseId = "";    //课程Id
private mintLevelNo = 0;    //学习关号2
private mstrQuestionSourceId = "";    //题目来源Id
private mstrCourseChapterId = "";    //课程章节ID
private mstrQuestionTypeId = "";    //题目类型Id
private mstrQuestionTypeId4Course = "";    //题目类型Id4课程
private mstrAnswerTypeId = "";    //答案类型ID
private mstrGridTitle = "";    //表格标题
private mstrAnswerModeId = "";    //答案模式Id
private mbolIsHaveAdditionalMemo = false;    //是否有附加说明
private mfltQuestionScore = 0.0;    //题目得分
private mstrDefaultValue = "";    //缺省值
private mstrDefaultSelectItem = "";    //默认选项
private mbolIsShow = false;    //是否启用
private mbolIsCast = false;    //是否播放
private mintLikeCount = 0;    //资源喜欢数量
private mlngAnswerAttLimitSize = 0;    //回答附件限制大小
private mstrLimitedResourceType = "";    //限制资源类型
private mbolIsEffective = false;    //是否有效
private mbolIsCanInPaper = false;    //是否可在Paper
private mstrExamGradeId = "";    //题库等级ID
private mstrTextDirectId = "";    //文本方向ID
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注
private mstrQuestionCode = "";    //html代码
private mstrDifficultyLevelId = "";    //难度等级Id
private mstrSectionTypeId = "";    //节点类型Id
private mstrKnowledgeGraphId = "";    //知识点图Id
private mbolFirstIndent = false;    //首行缩进
private mstrQuestionNameAdd = "";    //题目补充
private mstrCodeTab = "";    //代码表
private mstrCodeTabCode = "";    //CodeTab_Code
private mstrCodeTabCondition = "";    //代码表_条件
private mstrCodeTabName = "";    //CodeTab_Name
private mintFillInTextHeight = 0;    //填空框高度
private mintFillInTextWidth = 0;    //填空框宽度
private mbolIsMulti4FillInText = false;    //是否填空框多行
private mintCheckBoxLimitCount = 0;    //复选框限制数
private mbolIsJs = false;    //是否是JS
private mintMemoTextWidth = 0;    //备注框宽度
private mstrRelaEvent = "";    //相关事件
private mbolIsTest = false;    //是否测试
private mstrLevelModeTypeId = "";    //模式Id
private mbolIsRandom = false;    //是否随机
private mstrAnswerContent = "";    //答案内容

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
 * 题目序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionIndex (value: number)
{
if (value  != undefined)
{
 this.questionIndex = value;
    this.hmProperty["questionIndex"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目名称(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionName (value: string)
{
if (value  != undefined)
{
 this.questionName = value;
    this.hmProperty["questionName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目内容(说明:;字段类型:varchar;字段长度:4000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionContent (value: string)
{
if (value  != undefined)
{
 this.questionContent = value;
    this.hmProperty["questionContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionMemo (value: string)
{
if (value  != undefined)
{
 this.questionMemo = value;
    this.hmProperty["questionMemo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目编号(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionNo (value: string)
{
if (value  != undefined)
{
 this.questionNo = value;
    this.hmProperty["questionNo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 父题目Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetParentQuestionId (value: string)
{
if (value  != undefined)
{
 this.parentQuestionId = value;
    this.hmProperty["parentQuestionId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目答案(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExamAnswer (value: string)
{
if (value  != undefined)
{
 this.examAnswer = value;
    this.hmProperty["examAnswer"] = true;
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
 * 学习关号2(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLevelNo (value: number)
{
if (value  != undefined)
{
 this.levelNo = value;
    this.hmProperty["levelNo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目来源Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionSourceId (value: string)
{
if (value  != undefined)
{
 this.questionSourceId = value;
    this.hmProperty["questionSourceId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程章节ID(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseChapterId (value: string)
{
if (value  != undefined)
{
 this.courseChapterId = value;
    this.hmProperty["courseChapterId"] = true;
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
 * 题目类型Id4课程(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionTypeId4Course (value: string)
{
if (value  != undefined)
{
 this.questionTypeId4Course = value;
    this.hmProperty["questionTypeId4Course"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 答案类型ID(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerTypeId (value: string)
{
if (value  != undefined)
{
 this.answerTypeId = value;
    this.hmProperty["answerTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 表格标题(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGridTitle (value: string)
{
if (value  != undefined)
{
 this.gridTitle = value;
    this.hmProperty["gridTitle"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 答案模式Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerModeId (value: string)
{
if (value  != undefined)
{
 this.answerModeId = value;
    this.hmProperty["answerModeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否有附加说明(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsHaveAdditionalMemo (value: boolean)
{
if (value  != undefined)
{
 this.isHaveAdditionalMemo = value;
    this.hmProperty["isHaveAdditionalMemo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目得分(说明:;字段类型:float;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionScore (value: number)
{
if (value  != undefined)
{
 this.questionScore = value;
    this.hmProperty["questionScore"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 缺省值(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDefaultValue (value: string)
{
if (value  != undefined)
{
 this.defaultValue = value;
    this.hmProperty["defaultValue"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 默认选项(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDefaultSelectItem (value: string)
{
if (value  != undefined)
{
 this.defaultSelectItem = value;
    this.hmProperty["defaultSelectItem"] = true;
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
 * 是否播放(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsCast (value: boolean)
{
if (value  != undefined)
{
 this.isCast = value;
    this.hmProperty["isCast"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 资源喜欢数量(说明:;字段类型:int;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLikeCount (value: number)
{
if (value  != undefined)
{
 this.likeCount = value;
    this.hmProperty["likeCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答附件限制大小(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerAttLimitSize (value: number)
{
if (value  != undefined)
{
 this.answerAttLimitSize = value;
    this.hmProperty["answerAttLimitSize"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 限制资源类型(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLimitedResourceType (value: string)
{
if (value  != undefined)
{
 this.limitedResourceType = value;
    this.hmProperty["limitedResourceType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否有效(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsEffective (value: boolean)
{
if (value  != undefined)
{
 this.isEffective = value;
    this.hmProperty["isEffective"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否可在Paper(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsCanInPaper (value: boolean)
{
if (value  != undefined)
{
 this.isCanInPaper = value;
    this.hmProperty["isCanInPaper"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题库等级ID(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExamGradeId (value: string)
{
if (value  != undefined)
{
 this.examGradeId = value;
    this.hmProperty["examGradeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文本方向ID(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTextDirectId (value: string)
{
if (value  != undefined)
{
 this.textDirectId = value;
    this.hmProperty["textDirectId"] = true;
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
 * html代码(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionCode (value: string)
{
if (value  != undefined)
{
 this.questionCode = value;
    this.hmProperty["questionCode"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 难度等级Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDifficultyLevelId (value: string)
{
if (value  != undefined)
{
 this.difficultyLevelId = value;
    this.hmProperty["difficultyLevelId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 节点类型Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSectionTypeId (value: string)
{
if (value  != undefined)
{
 this.sectionTypeId = value;
    this.hmProperty["sectionTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识点图Id(说明:;字段类型:char;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKnowledgeGraphId (value: string)
{
if (value  != undefined)
{
 this.knowledgeGraphId = value;
    this.hmProperty["knowledgeGraphId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 首行缩进(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFirstIndent (value: boolean)
{
if (value  != undefined)
{
 this.firstIndent = value;
    this.hmProperty["firstIndent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目补充(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionNameAdd (value: string)
{
if (value  != undefined)
{
 this.questionNameAdd = value;
    this.hmProperty["questionNameAdd"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 代码表(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCodeTab (value: string)
{
if (value  != undefined)
{
 this.codeTab = value;
    this.hmProperty["codeTab"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * CodeTab_Code(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCodeTabCode (value: string)
{
if (value  != undefined)
{
 this.codeTabCode = value;
    this.hmProperty["codeTabCode"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 代码表_条件(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCodeTabCondition (value: string)
{
if (value  != undefined)
{
 this.codeTabCondition = value;
    this.hmProperty["codeTabCondition"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * CodeTab_Name(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCodeTabName (value: string)
{
if (value  != undefined)
{
 this.codeTabName = value;
    this.hmProperty["codeTabName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 填空框高度(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFillInTextHeight (value: number)
{
if (value  != undefined)
{
 this.fillInTextHeight = value;
    this.hmProperty["fillInTextHeight"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 填空框宽度(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFillInTextWidth (value: number)
{
if (value  != undefined)
{
 this.fillInTextWidth = value;
    this.hmProperty["fillInTextWidth"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否填空框多行(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsMulti4FillInText (value: boolean)
{
if (value  != undefined)
{
 this.isMulti4FillInText = value;
    this.hmProperty["isMulti4FillInText"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 复选框限制数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCheckBoxLimitCount (value: number)
{
if (value  != undefined)
{
 this.checkBoxLimitCount = value;
    this.hmProperty["checkBoxLimitCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否是JS(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsJs (value: boolean)
{
if (value  != undefined)
{
 this.isJs = value;
    this.hmProperty["isJs"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注框宽度(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemoTextWidth (value: number)
{
if (value  != undefined)
{
 this.memoTextWidth = value;
    this.hmProperty["memoTextWidth"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 相关事件(说明:;字段类型:varchar;字段长度:4000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRelaEvent (value: string)
{
if (value  != undefined)
{
 this.relaEvent = value;
    this.hmProperty["relaEvent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否测试(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsTest (value: boolean)
{
if (value  != undefined)
{
 this.isTest = value;
    this.hmProperty["isTest"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 模式Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLevelModeTypeId (value: string)
{
if (value  != undefined)
{
 this.levelModeTypeId = value;
    this.hmProperty["levelModeTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否随机(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsRandom (value: boolean)
{
if (value  != undefined)
{
 this.isRandom = value;
    this.hmProperty["isRandom"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 答案内容(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerContent (value: string)
{
if (value  != undefined)
{
 this.answerContent = value;
    this.hmProperty["answerContent"] = true;
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
case clsQuestionnaireEN.con_QuestionId:
return this.questionId;
case clsQuestionnaireEN.con_QuestionIndex:
return this.questionIndex;
case clsQuestionnaireEN.con_QuestionName:
return this.questionName;
case clsQuestionnaireEN.con_QuestionContent:
return this.questionContent;
case clsQuestionnaireEN.con_QuestionMemo:
return this.questionMemo;
case clsQuestionnaireEN.con_QuestionNo:
return this.questionNo;
case clsQuestionnaireEN.con_ParentQuestionId:
return this.parentQuestionId;
case clsQuestionnaireEN.con_ExamAnswer:
return this.examAnswer;
case clsQuestionnaireEN.con_CourseId:
return this.courseId;
case clsQuestionnaireEN.con_LevelNo:
return this.levelNo;
case clsQuestionnaireEN.con_QuestionSourceId:
return this.questionSourceId;
case clsQuestionnaireEN.con_CourseChapterId:
return this.courseChapterId;
case clsQuestionnaireEN.con_QuestionTypeId:
return this.questionTypeId;
case clsQuestionnaireEN.con_QuestionTypeId4Course:
return this.questionTypeId4Course;
case clsQuestionnaireEN.con_AnswerTypeId:
return this.answerTypeId;
case clsQuestionnaireEN.con_GridTitle:
return this.gridTitle;
case clsQuestionnaireEN.con_AnswerModeId:
return this.answerModeId;
case clsQuestionnaireEN.con_IsHaveAdditionalMemo:
return this.isHaveAdditionalMemo;
case clsQuestionnaireEN.con_QuestionScore:
return this.questionScore;
case clsQuestionnaireEN.con_DefaultValue:
return this.defaultValue;
case clsQuestionnaireEN.con_DefaultSelectItem:
return this.defaultSelectItem;
case clsQuestionnaireEN.con_IsShow:
return this.isShow;
case clsQuestionnaireEN.con_IsCast:
return this.isCast;
case clsQuestionnaireEN.con_LikeCount:
return this.likeCount;
case clsQuestionnaireEN.con_AnswerAttLimitSize:
return this.answerAttLimitSize;
case clsQuestionnaireEN.con_LimitedResourceType:
return this.limitedResourceType;
case clsQuestionnaireEN.con_IsEffective:
return this.isEffective;
case clsQuestionnaireEN.con_IsCanInPaper:
return this.isCanInPaper;
case clsQuestionnaireEN.con_ExamGradeId:
return this.examGradeId;
case clsQuestionnaireEN.con_TextDirectId:
return this.textDirectId;
case clsQuestionnaireEN.con_UpdDate:
return this.updDate;
case clsQuestionnaireEN.con_UpdUser:
return this.updUser;
case clsQuestionnaireEN.con_Memo:
return this.memo;
case clsQuestionnaireEN.con_QuestionCode:
return this.questionCode;
case clsQuestionnaireEN.con_DifficultyLevelId:
return this.difficultyLevelId;
case clsQuestionnaireEN.con_SectionTypeId:
return this.sectionTypeId;
case clsQuestionnaireEN.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsQuestionnaireEN.con_FirstIndent:
return this.firstIndent;
case clsQuestionnaireEN.con_QuestionNameAdd:
return this.questionNameAdd;
case clsQuestionnaireEN.con_CodeTab:
return this.codeTab;
case clsQuestionnaireEN.con_CodeTabCode:
return this.codeTabCode;
case clsQuestionnaireEN.con_CodeTabCondition:
return this.codeTabCondition;
case clsQuestionnaireEN.con_CodeTabName:
return this.codeTabName;
case clsQuestionnaireEN.con_FillInTextHeight:
return this.fillInTextHeight;
case clsQuestionnaireEN.con_FillInTextWidth:
return this.fillInTextWidth;
case clsQuestionnaireEN.con_IsMulti4FillInText:
return this.isMulti4FillInText;
case clsQuestionnaireEN.con_CheckBoxLimitCount:
return this.checkBoxLimitCount;
case clsQuestionnaireEN.con_IsJs:
return this.isJs;
case clsQuestionnaireEN.con_MemoTextWidth:
return this.memoTextWidth;
case clsQuestionnaireEN.con_RelaEvent:
return this.relaEvent;
case clsQuestionnaireEN.con_IsTest:
return this.isTest;
case clsQuestionnaireEN.con_LevelModeTypeId:
return this.levelModeTypeId;
case clsQuestionnaireEN.con_IsRandom:
return this.isRandom;
case clsQuestionnaireEN.con_AnswerContent:
return this.answerContent;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Questionnaire]中不存在!`;
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
case clsQuestionnaireEN.con_QuestionId:
this.questionId = Number(strValue);
    this.hmProperty["questionId"] = true;
break;
case clsQuestionnaireEN.con_QuestionIndex:
this.questionIndex = Number(strValue);
    this.hmProperty["questionIndex"] = true;
break;
case clsQuestionnaireEN.con_QuestionName:
this.questionName = strValue;
    this.hmProperty["questionName"] = true;
break;
case clsQuestionnaireEN.con_QuestionContent:
this.questionContent = strValue;
    this.hmProperty["questionContent"] = true;
break;
case clsQuestionnaireEN.con_QuestionMemo:
this.questionMemo = strValue;
    this.hmProperty["questionMemo"] = true;
break;
case clsQuestionnaireEN.con_QuestionNo:
this.questionNo = strValue;
    this.hmProperty["questionNo"] = true;
break;
case clsQuestionnaireEN.con_ParentQuestionId:
this.parentQuestionId = strValue;
    this.hmProperty["parentQuestionId"] = true;
break;
case clsQuestionnaireEN.con_ExamAnswer:
this.examAnswer = strValue;
    this.hmProperty["examAnswer"] = true;
break;
case clsQuestionnaireEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsQuestionnaireEN.con_LevelNo:
this.levelNo = Number(strValue);
    this.hmProperty["levelNo"] = true;
break;
case clsQuestionnaireEN.con_QuestionSourceId:
this.questionSourceId = strValue;
    this.hmProperty["questionSourceId"] = true;
break;
case clsQuestionnaireEN.con_CourseChapterId:
this.courseChapterId = strValue;
    this.hmProperty["courseChapterId"] = true;
break;
case clsQuestionnaireEN.con_QuestionTypeId:
this.questionTypeId = strValue;
    this.hmProperty["questionTypeId"] = true;
break;
case clsQuestionnaireEN.con_QuestionTypeId4Course:
this.questionTypeId4Course = strValue;
    this.hmProperty["questionTypeId4Course"] = true;
break;
case clsQuestionnaireEN.con_AnswerTypeId:
this.answerTypeId = strValue;
    this.hmProperty["answerTypeId"] = true;
break;
case clsQuestionnaireEN.con_GridTitle:
this.gridTitle = strValue;
    this.hmProperty["gridTitle"] = true;
break;
case clsQuestionnaireEN.con_AnswerModeId:
this.answerModeId = strValue;
    this.hmProperty["answerModeId"] = true;
break;
case clsQuestionnaireEN.con_IsHaveAdditionalMemo:
this.isHaveAdditionalMemo = Boolean(strValue);
    this.hmProperty["isHaveAdditionalMemo"] = true;
break;
case clsQuestionnaireEN.con_QuestionScore:
this.questionScore = Number(strValue);
    this.hmProperty["questionScore"] = true;
break;
case clsQuestionnaireEN.con_DefaultValue:
this.defaultValue = strValue;
    this.hmProperty["defaultValue"] = true;
break;
case clsQuestionnaireEN.con_DefaultSelectItem:
this.defaultSelectItem = strValue;
    this.hmProperty["defaultSelectItem"] = true;
break;
case clsQuestionnaireEN.con_IsShow:
this.isShow = Boolean(strValue);
    this.hmProperty["isShow"] = true;
break;
case clsQuestionnaireEN.con_IsCast:
this.isCast = Boolean(strValue);
    this.hmProperty["isCast"] = true;
break;
case clsQuestionnaireEN.con_LikeCount:
this.likeCount = Number(strValue);
    this.hmProperty["likeCount"] = true;
break;
case clsQuestionnaireEN.con_AnswerAttLimitSize:
this.answerAttLimitSize = Number(strValue);
    this.hmProperty["answerAttLimitSize"] = true;
break;
case clsQuestionnaireEN.con_LimitedResourceType:
this.limitedResourceType = strValue;
    this.hmProperty["limitedResourceType"] = true;
break;
case clsQuestionnaireEN.con_IsEffective:
this.isEffective = Boolean(strValue);
    this.hmProperty["isEffective"] = true;
break;
case clsQuestionnaireEN.con_IsCanInPaper:
this.isCanInPaper = Boolean(strValue);
    this.hmProperty["isCanInPaper"] = true;
break;
case clsQuestionnaireEN.con_ExamGradeId:
this.examGradeId = strValue;
    this.hmProperty["examGradeId"] = true;
break;
case clsQuestionnaireEN.con_TextDirectId:
this.textDirectId = strValue;
    this.hmProperty["textDirectId"] = true;
break;
case clsQuestionnaireEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQuestionnaireEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsQuestionnaireEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsQuestionnaireEN.con_QuestionCode:
this.questionCode = strValue;
    this.hmProperty["questionCode"] = true;
break;
case clsQuestionnaireEN.con_DifficultyLevelId:
this.difficultyLevelId = strValue;
    this.hmProperty["difficultyLevelId"] = true;
break;
case clsQuestionnaireEN.con_SectionTypeId:
this.sectionTypeId = strValue;
    this.hmProperty["sectionTypeId"] = true;
break;
case clsQuestionnaireEN.con_KnowledgeGraphId:
this.knowledgeGraphId = strValue;
    this.hmProperty["knowledgeGraphId"] = true;
break;
case clsQuestionnaireEN.con_FirstIndent:
this.firstIndent = Boolean(strValue);
    this.hmProperty["firstIndent"] = true;
break;
case clsQuestionnaireEN.con_QuestionNameAdd:
this.questionNameAdd = strValue;
    this.hmProperty["questionNameAdd"] = true;
break;
case clsQuestionnaireEN.con_CodeTab:
this.codeTab = strValue;
    this.hmProperty["codeTab"] = true;
break;
case clsQuestionnaireEN.con_CodeTabCode:
this.codeTabCode = strValue;
    this.hmProperty["codeTabCode"] = true;
break;
case clsQuestionnaireEN.con_CodeTabCondition:
this.codeTabCondition = strValue;
    this.hmProperty["codeTabCondition"] = true;
break;
case clsQuestionnaireEN.con_CodeTabName:
this.codeTabName = strValue;
    this.hmProperty["codeTabName"] = true;
break;
case clsQuestionnaireEN.con_FillInTextHeight:
this.fillInTextHeight = Number(strValue);
    this.hmProperty["fillInTextHeight"] = true;
break;
case clsQuestionnaireEN.con_FillInTextWidth:
this.fillInTextWidth = Number(strValue);
    this.hmProperty["fillInTextWidth"] = true;
break;
case clsQuestionnaireEN.con_IsMulti4FillInText:
this.isMulti4FillInText = Boolean(strValue);
    this.hmProperty["isMulti4FillInText"] = true;
break;
case clsQuestionnaireEN.con_CheckBoxLimitCount:
this.checkBoxLimitCount = Number(strValue);
    this.hmProperty["checkBoxLimitCount"] = true;
break;
case clsQuestionnaireEN.con_IsJs:
this.isJs = Boolean(strValue);
    this.hmProperty["isJs"] = true;
break;
case clsQuestionnaireEN.con_MemoTextWidth:
this.memoTextWidth = Number(strValue);
    this.hmProperty["memoTextWidth"] = true;
break;
case clsQuestionnaireEN.con_RelaEvent:
this.relaEvent = strValue;
    this.hmProperty["relaEvent"] = true;
break;
case clsQuestionnaireEN.con_IsTest:
this.isTest = Boolean(strValue);
    this.hmProperty["isTest"] = true;
break;
case clsQuestionnaireEN.con_LevelModeTypeId:
this.levelModeTypeId = strValue;
    this.hmProperty["levelModeTypeId"] = true;
break;
case clsQuestionnaireEN.con_IsRandom:
this.isRandom = Boolean(strValue);
    this.hmProperty["isRandom"] = true;
break;
case clsQuestionnaireEN.con_AnswerContent:
this.answerContent = strValue;
    this.hmProperty["answerContent"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Questionnaire]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
 * 常量:"LevelNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelNo(): string {return "levelNo";}    //学习关号2

 /**
 * 常量:"QuestionSourceId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionSourceId(): string {return "questionSourceId";}    //题目来源Id

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"QuestionTypeId4Course"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionTypeId4Course(): string {return "questionTypeId4Course";}    //题目类型Id4课程

 /**
 * 常量:"AnswerTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerTypeId(): string {return "answerTypeId";}    //答案类型ID

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
 * 常量:"IsHaveAdditionalMemo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsHaveAdditionalMemo(): string {return "isHaveAdditionalMemo";}    //是否有附加说明

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
 * 常量:"QuestionCode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionCode(): string {return "questionCode";}    //html代码

 /**
 * 常量:"DifficultyLevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DifficultyLevelId(): string {return "difficultyLevelId";}    //难度等级Id

 /**
 * 常量:"SectionTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionTypeId(): string {return "sectionTypeId";}    //节点类型Id

 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"FirstIndent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FirstIndent(): string {return "firstIndent";}    //首行缩进

 /**
 * 常量:"QuestionNameAdd"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionNameAdd(): string {return "questionNameAdd";}    //题目补充

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
 * 常量:"IsMulti4FillInText"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsMulti4FillInText(): string {return "isMulti4FillInText";}    //是否填空框多行

 /**
 * 常量:"CheckBoxLimitCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CheckBoxLimitCount(): string {return "checkBoxLimitCount";}    //复选框限制数

 /**
 * 常量:"IsJs"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsJs(): string {return "isJs";}    //是否是JS

 /**
 * 常量:"MemoTextWidth"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MemoTextWidth(): string {return "memoTextWidth";}    //备注框宽度

 /**
 * 常量:"RelaEvent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RelaEvent(): string {return "relaEvent";}    //相关事件

 /**
 * 常量:"IsTest"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsTest(): string {return "isTest";}    //是否测试

 /**
 * 常量:"LevelModeTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelModeTypeId(): string {return "levelModeTypeId";}    //模式Id

 /**
 * 常量:"IsRandom"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRandom(): string {return "isRandom";}    //是否随机

 /**
 * 常量:"AnswerContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerContent(): string {return "answerContent";}    //答案内容

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
//return propName in new clsQuestionnaireEN();
const instance = new clsQuestionnaireEN();
return instance.hasOwnProperty(propName);
}
}