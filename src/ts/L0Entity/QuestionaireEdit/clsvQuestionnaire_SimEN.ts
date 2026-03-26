
 /**
 * 类名:clsvQuestionnaire_SimEN
 * 表名:vQuestionnaire_Sim(01120949)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:30:51
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
 * vQuestionnaire_Sim(vQuestionnaire_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQuestionnaire_SimEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQuestionnaire_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["questionId", "questionName", "questionIndex", "questionNo", "courseId", "courseChapterId", "parentQuestionId", "questionTypeId", "questionTypeId4Course", "answerTypeId", "isShow", "difficultyLevelId"];
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
case clsvQuestionnaire_SimEN.con_QuestionId:
return this.questionId;
case clsvQuestionnaire_SimEN.con_QuestionName:
return this.questionName;
case clsvQuestionnaire_SimEN.con_QuestionIndex:
return this.questionIndex;
case clsvQuestionnaire_SimEN.con_QuestionNo:
return this.questionNo;
case clsvQuestionnaire_SimEN.con_CourseId:
return this.courseId;
case clsvQuestionnaire_SimEN.con_CourseChapterId:
return this.courseChapterId;
case clsvQuestionnaire_SimEN.con_ParentQuestionId:
return this.parentQuestionId;
case clsvQuestionnaire_SimEN.con_QuestionTypeId:
return this.questionTypeId;
case clsvQuestionnaire_SimEN.con_QuestionTypeId4Course:
return this.questionTypeId4Course;
case clsvQuestionnaire_SimEN.con_AnswerTypeId:
return this.answerTypeId;
case clsvQuestionnaire_SimEN.con_IsShow:
return this.isShow;
case clsvQuestionnaire_SimEN.con_DifficultyLevelId:
return this.difficultyLevelId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQuestionnaire_Sim]中不存在!`;
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
case clsvQuestionnaire_SimEN.con_QuestionId:
this.questionId = Number(strValue);
break;
case clsvQuestionnaire_SimEN.con_QuestionName:
this.questionName = strValue;
break;
case clsvQuestionnaire_SimEN.con_QuestionIndex:
this.questionIndex = Number(strValue);
break;
case clsvQuestionnaire_SimEN.con_QuestionNo:
this.questionNo = strValue;
break;
case clsvQuestionnaire_SimEN.con_CourseId:
this.courseId = strValue;
break;
case clsvQuestionnaire_SimEN.con_CourseChapterId:
this.courseChapterId = strValue;
break;
case clsvQuestionnaire_SimEN.con_ParentQuestionId:
this.parentQuestionId = strValue;
break;
case clsvQuestionnaire_SimEN.con_QuestionTypeId:
this.questionTypeId = strValue;
break;
case clsvQuestionnaire_SimEN.con_QuestionTypeId4Course:
this.questionTypeId4Course = strValue;
break;
case clsvQuestionnaire_SimEN.con_AnswerTypeId:
this.answerTypeId = strValue;
break;
case clsvQuestionnaire_SimEN.con_IsShow:
this.isShow = Boolean(strValue);
break;
case clsvQuestionnaire_SimEN.con_DifficultyLevelId:
this.difficultyLevelId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQuestionnaire_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"QuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"QuestionName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionName(): string {return "questionName";}    //题目名称

 /**
 * 常量:"QuestionIndex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionIndex(): string {return "questionIndex";}    //题目序号

 /**
 * 常量:"QuestionNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionNo(): string {return "questionNo";}    //题目编号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"ParentQuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ParentQuestionId(): string {return "parentQuestionId";}    //父题目Id

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
 * 常量:"IsShow"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"DifficultyLevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DifficultyLevelId(): string {return "difficultyLevelId";}    //难度等级Id

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
const instance = new clsvQuestionnaire_SimEN();
return instance.hasOwnProperty(propName);
}
}