
 /**
 * 类名:clsAnswer
 * 表名:Answer(01120002)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 16:03:01
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
 * 答案(Answer)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsAnswer 
{
public static _CurrTabName= "Answer"; //当前表名,与该类相关的表名
public static _KeyFldName= "AnswerId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 16;
public static AttributeName = ["answerId", "questionId", "answerIndex", "answerOptionId", "answerMultiOptions", "answerFillInBlank", "answerContent", "answerTrueOrFalse", "isAutoCorrect", "provider", "score", "isShow", "courseId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public answerId = 0;    //问答ID
public questionId = 0;    //题目Id
public answerIndex = 0;    //问答序号
public answerOptionId = "";    //回答选项Id
public answerMultiOptions = "";    //多选项答案
public answerFillInBlank = "";    //填空题答案
public answerContent = "";    //答案内容
public answerTrueOrFalse = false;    //判断题答案
public isAutoCorrect = false;    //是否支持自动批改
public provider = "";    //提供者
public score = 0;    //得分
public isShow = false;    //是否启用
public courseId = "";    //课程Id
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注

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
case clsAnswer.con_AnswerId:
return this.answerId;
case clsAnswer.con_QuestionId:
return this.questionId;
case clsAnswer.con_AnswerIndex:
return this.answerIndex;
case clsAnswer.con_AnswerOptionId:
return this.answerOptionId;
case clsAnswer.con_AnswerMultiOptions:
return this.answerMultiOptions;
case clsAnswer.con_AnswerFillInBlank:
return this.answerFillInBlank;
case clsAnswer.con_AnswerContent:
return this.answerContent;
case clsAnswer.con_AnswerTrueOrFalse:
return this.answerTrueOrFalse;
case clsAnswer.con_IsAutoCorrect:
return this.isAutoCorrect;
case clsAnswer.con_Provider:
return this.provider;
case clsAnswer.con_Score:
return this.score;
case clsAnswer.con_IsShow:
return this.isShow;
case clsAnswer.con_CourseId:
return this.courseId;
case clsAnswer.con_UpdDate:
return this.updDate;
case clsAnswer.con_UpdUser:
return this.updUser;
case clsAnswer.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Answer]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"AnswerId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerId(): string {return "answerId";}    //问答ID

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"AnswerIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerIndex(): string {return "answerIndex";}    //问答序号

 /**
 * 常量:"AnswerOptionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerOptionId(): string {return "answerOptionId";}    //回答选项Id

 /**
 * 常量:"AnswerMultiOptions"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerMultiOptions(): string {return "answerMultiOptions";}    //多选项答案

 /**
 * 常量:"AnswerFillInBlank"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerFillInBlank(): string {return "answerFillInBlank";}    //填空题答案

 /**
 * 常量:"AnswerContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerContent(): string {return "answerContent";}    //答案内容

 /**
 * 常量:"AnswerTrueOrFalse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerTrueOrFalse(): string {return "answerTrueOrFalse";}    //判断题答案

 /**
 * 常量:"IsAutoCorrect"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAutoCorrect(): string {return "isAutoCorrect";}    //是否支持自动批改

 /**
 * 常量:"Provider"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Provider(): string {return "provider";}    //提供者

 /**
 * 常量:"Score"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //得分

 /**
 * 常量:"IsShow"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

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
}