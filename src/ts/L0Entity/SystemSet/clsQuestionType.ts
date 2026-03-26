
 /**
 * 类名:clsQuestionType
 * 表名:QuestionType(01120008)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/09 00:10:05
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 题目类型(QuestionType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQuestionType 
{
public static _CurrTabName= "QuestionType"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["questionTypeId", "questionTypeName", "questionTypeENName", "defaAnswerModeId", "defaAnswerTypeId", "orderNum", "isUse", "isExercise", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public questionTypeId = "";    //题目类型Id
public questionTypeName = "";    //题目类型名
public questionTypeENName = "";    //题目类型英文名
public defaAnswerModeId = "";    //默认答案模式Id
public defaAnswerTypeId = "";    //默认答案类型Id
public orderNum = 0;    //序号
public isUse = false;    //是否使用
public isExercise = false;    //是否练习题
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
case clsQuestionType.con_QuestionTypeId:
return this.questionTypeId;
case clsQuestionType.con_QuestionTypeName:
return this.questionTypeName;
case clsQuestionType.con_QuestionTypeENName:
return this.questionTypeENName;
case clsQuestionType.con_DefaAnswerModeId:
return this.defaAnswerModeId;
case clsQuestionType.con_DefaAnswerTypeId:
return this.defaAnswerTypeId;
case clsQuestionType.con_OrderNum:
return this.orderNum;
case clsQuestionType.con_IsUse:
return this.isUse;
case clsQuestionType.con_IsExercise:
return this.isExercise;
case clsQuestionType.con_UpdDate:
return this.updDate;
case clsQuestionType.con_UpdUser:
return this.updUser;
case clsQuestionType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QuestionType]中不存在!`;
console.error(strMsg);
return "";
}
}


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
 * 常量:"QuestionTypeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionTypeENName(): string {return "questionTypeENName";}    //题目类型英文名

 /**
 * 常量:"DefaAnswerModeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DefaAnswerModeId(): string {return "defaAnswerModeId";}    //默认答案模式Id

 /**
 * 常量:"DefaAnswerTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DefaAnswerTypeId(): string {return "defaAnswerTypeId";}    //默认答案类型Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"IsUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsUse(): string {return "isUse";}    //是否使用

 /**
 * 常量:"IsExercise"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsExercise(): string {return "isExercise";}    //是否练习题

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
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumQuestionType
{
 /**
 * 填空题
 **/
static readonly FillInBlank_01 = "01";
 /**
 * 单选题
 **/
static readonly SingleChoice_02 = "02";
 /**
 * 多选题
 **/
static readonly MultipleChoice_03 = "03";
 /**
 * 开放题
 **/
static readonly OpenQuestion_04 = "04";
 /**
 * 解答题
 **/
static readonly AnswerQuestions_05 = "05";
 /**
 * 标题
 **/
static readonly Title_06 = "06";
 /**
 * 说明性内容
 **/
static readonly ExplanatoryContent_07 = "07";
 /**
 * 单选题(下拉框)
 **/
static readonly SingleChoice_DropDownBox_08 = "08";
 /**
 * 操作题
 **/
static readonly OperationQuestions_09 = "09";
 /**
 * 简答题
 **/
static readonly ShortAnswer_10 = "10";
 /**
 * 判断题
 **/
static readonly TrueorFalse_11 = "11";
 /**
 * 案例分析题
 **/
static readonly CaseAnysisMultiChoice_12 = "12";
 /**
 * 录音分析题
 **/
static readonly RecorderAndAnysis_13 = "13";
 /**
 * 知识结构图
 **/
static readonly KnowledgeStructureDiagram_14 = "14";
 /**
 * 知识逻辑关系图
 **/
static readonly KnowledgeLogicDiagram_15 = "15";
 /**
 * 连连看多选题
 **/
static readonly LianliankanMultipleChoiceQuestions_17 = "17";
 /**
 * 概念题
 **/
static readonly ConceptQuestion_18 = "18";
}