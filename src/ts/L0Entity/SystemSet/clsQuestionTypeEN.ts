
 /**
 * 类名:clsQuestionTypeEN
 * 表名:QuestionType(01120008)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/09 00:10:02
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 题目类型(QuestionType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQuestionTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QuestionType"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["questionTypeId", "questionTypeName", "questionTypeENName", "defaAnswerModeId", "defaAnswerTypeId", "orderNum", "isUse", "isExercise", "updDate", "updUser", "memo"];
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
private mstrQuestionTypeId = "";    //题目类型Id
private mstrQuestionTypeName = "";    //题目类型名
private mstrQuestionTypeENName = "";    //题目类型英文名
private mstrDefaAnswerModeId = "";    //默认答案模式Id
private mstrDefaAnswerTypeId = "";    //默认答案类型Id
private mintOrderNum = 0;    //序号
private mbolIsUse = false;    //是否使用
private mbolIsExercise = false;    //是否练习题
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

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
 * 题目类型名(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionTypeName (value: string)
{
if (value  != undefined)
{
 this.questionTypeName = value;
    this.hmProperty["questionTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionTypeENName (value: string)
{
if (value  != undefined)
{
 this.questionTypeENName = value;
    this.hmProperty["questionTypeENName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 默认答案模式Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDefaAnswerModeId (value: string)
{
if (value  != undefined)
{
 this.defaAnswerModeId = value;
    this.hmProperty["defaAnswerModeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 默认答案类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDefaAnswerTypeId (value: string)
{
if (value  != undefined)
{
 this.defaAnswerTypeId = value;
    this.hmProperty["defaAnswerTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsUse (value: boolean)
{
if (value  != undefined)
{
 this.isUse = value;
    this.hmProperty["isUse"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否练习题(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsExercise (value: boolean)
{
if (value  != undefined)
{
 this.isExercise = value;
    this.hmProperty["isExercise"] = true;
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
case clsQuestionTypeEN.con_QuestionTypeId:
return this.questionTypeId;
case clsQuestionTypeEN.con_QuestionTypeName:
return this.questionTypeName;
case clsQuestionTypeEN.con_QuestionTypeENName:
return this.questionTypeENName;
case clsQuestionTypeEN.con_DefaAnswerModeId:
return this.defaAnswerModeId;
case clsQuestionTypeEN.con_DefaAnswerTypeId:
return this.defaAnswerTypeId;
case clsQuestionTypeEN.con_OrderNum:
return this.orderNum;
case clsQuestionTypeEN.con_IsUse:
return this.isUse;
case clsQuestionTypeEN.con_IsExercise:
return this.isExercise;
case clsQuestionTypeEN.con_UpdDate:
return this.updDate;
case clsQuestionTypeEN.con_UpdUser:
return this.updUser;
case clsQuestionTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QuestionType]中不存在!`;
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
case clsQuestionTypeEN.con_QuestionTypeId:
this.questionTypeId = strValue;
    this.hmProperty["questionTypeId"] = true;
break;
case clsQuestionTypeEN.con_QuestionTypeName:
this.questionTypeName = strValue;
    this.hmProperty["questionTypeName"] = true;
break;
case clsQuestionTypeEN.con_QuestionTypeENName:
this.questionTypeENName = strValue;
    this.hmProperty["questionTypeENName"] = true;
break;
case clsQuestionTypeEN.con_DefaAnswerModeId:
this.defaAnswerModeId = strValue;
    this.hmProperty["defaAnswerModeId"] = true;
break;
case clsQuestionTypeEN.con_DefaAnswerTypeId:
this.defaAnswerTypeId = strValue;
    this.hmProperty["defaAnswerTypeId"] = true;
break;
case clsQuestionTypeEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsQuestionTypeEN.con_IsUse:
this.isUse = Boolean(strValue);
    this.hmProperty["isUse"] = true;
break;
case clsQuestionTypeEN.con_IsExercise:
this.isExercise = Boolean(strValue);
    this.hmProperty["isExercise"] = true;
break;
case clsQuestionTypeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQuestionTypeEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsQuestionTypeEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QuestionType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"QuestionTypeENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionTypeENName(): string {return "questionTypeENName";}    //题目类型英文名

 /**
 * 常量:"DefaAnswerModeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DefaAnswerModeId(): string {return "defaAnswerModeId";}    //默认答案模式Id

 /**
 * 常量:"DefaAnswerTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DefaAnswerTypeId(): string {return "defaAnswerTypeId";}    //默认答案类型Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"IsUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsUse(): string {return "isUse";}    //是否使用

 /**
 * 常量:"IsExercise"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsExercise(): string {return "isExercise";}    //是否练习题

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
//return propName in new clsQuestionTypeEN();
const instance = new clsQuestionTypeEN();
return instance.hasOwnProperty(propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
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