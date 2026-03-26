
 /**
 * 类名:clsQuestionOptions
 * 表名:QuestionOptions(01120188)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:27:40
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
 * 题目选项(QuestionOptions)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQuestionOptions 
{
public static _CurrTabName= "QuestionOptions"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionOptionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["questionOptionId", "optionName", "questionId", "optionIndex", "optionTitle", "optionContent", "isCorrect", "score", "isShow", "courseId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public questionOptionId = "";    //题目选项Id
public optionName = "";    //选项名称
public questionId = 0;    //题目Id
public optionIndex = 0;    //选项序号
public optionTitle = "";    //选项标题
public optionContent = "";    //选项内容
public isCorrect = false;    //是否正确
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
case clsQuestionOptions.con_QuestionOptionId:
return this.questionOptionId;
case clsQuestionOptions.con_OptionName:
return this.optionName;
case clsQuestionOptions.con_QuestionId:
return this.questionId;
case clsQuestionOptions.con_OptionIndex:
return this.optionIndex;
case clsQuestionOptions.con_OptionTitle:
return this.optionTitle;
case clsQuestionOptions.con_OptionContent:
return this.optionContent;
case clsQuestionOptions.con_IsCorrect:
return this.isCorrect;
case clsQuestionOptions.con_Score:
return this.score;
case clsQuestionOptions.con_IsShow:
return this.isShow;
case clsQuestionOptions.con_CourseId:
return this.courseId;
case clsQuestionOptions.con_UpdDate:
return this.updDate;
case clsQuestionOptions.con_UpdUser:
return this.updUser;
case clsQuestionOptions.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QuestionOptions]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"QuestionOptionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionOptionId(): string {return "questionOptionId";}    //题目选项Id

 /**
 * 常量:"OptionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OptionName(): string {return "optionName";}    //选项名称

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"OptionIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OptionIndex(): string {return "optionIndex";}    //选项序号

 /**
 * 常量:"OptionTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OptionTitle(): string {return "optionTitle";}    //选项标题

 /**
 * 常量:"OptionContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OptionContent(): string {return "optionContent";}    //选项内容

 /**
 * 常量:"IsCorrect"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCorrect(): string {return "isCorrect";}    //是否正确

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