
 /**
 * 类名:clsGameBottleENEx
 * 表名:GameBottle(01120974)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/11 11:10:34
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 游戏瓶(GameBottle)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsGameBottleEN } from "@/ts/L0Entity/GameLearn/clsGameBottleEN";

export class  clsGameBottleENEx extends clsGameBottleEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clsGameBottleENEx.con_QuestionTypeName:
return this.questionTypeName;
case clsGameBottleENEx.con_QuestionName:
return this.questionName;
case clsGameBottleENEx.con_QuestionTypeId:
return this.questionTypeId;
case clsGameBottleENEx.con_UserName_Throw:
return this.userName_Throw;
case clsGameBottleENEx.con_UserName_PickUp:
return this.userName_PickUp;
case clsGameBottleENEx.con_DifficultyLevelName:
return this.difficultyLevelName;
case clsGameBottleENEx.con_KnowledgeNames:
return this.knowledgeNames;
case clsGameBottleENEx.con_IsMasterStr:
return this.isMasterStr;
case clsGameBottleENEx.con_CourseKnowledgeIds:
return this.courseKnowledgeIds;
case clsGameBottleENEx.con_UserId_PickUp:
return this.userId_PickUp;
case clsGameBottleENEx.con_PickUpTime:
return this.pickUpTime;
case clsGameBottleENEx.con_FinishedTime:
return this.finishedTime;
case clsGameBottleENEx.con_IsMaster:
return this.isMaster;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"QuestionTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionTypeName(): string {return "questionTypeName";}    //题目类型名

 /**
 * 常量:"QuestionName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionName(): string {return "questionName";}    //题目名称

 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"UserName_Throw"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserName_Throw(): string {return "userName_Throw";}    //用户名_扔

 /**
 * 常量:"UserName_PickUp"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserName_PickUp(): string {return "userName_PickUp";}    //用户名_捞

 /**
 * 常量:"DifficultyLevelName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DifficultyLevelName(): string {return "difficultyLevelName";}    //难度等级名称

 /**
 * 常量:"KnowledgeNames"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_KnowledgeNames(): string {return "knowledgeNames";}    //知识点名s

 /**
 * 常量:"IsMasterStr"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_IsMasterStr(): string {return "isMasterStr";}    //是否掌握串

 /**
 * 常量:"CourseKnowledgeIds"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseKnowledgeIds(): string {return "courseKnowledgeIds";}    //知识点Ids

 /**
 * 常量:"UserId_PickUp"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserId_PickUp(): string {return "userId_PickUp";}    //用户ID

 /**
 * 常量:"PickUpTime"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_PickUpTime(): string {return "pickUpTime";}    //捞的时间

 /**
 * 常量:"FinishedTime"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_FinishedTime(): string {return "finishedTime";}    //完成时间

 /**
 * 常量:"IsMaster"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_IsMaster(): string {return "isMaster";}    //是否掌握

public questionTypeName = "";    //题目类型名
public questionName = "";    //题目名称
public questionTypeId = "";    //题目类型Id
public userName_Throw = "";    //用户名_扔
public userName_PickUp = "";    //用户名_捞
public difficultyLevelName = "";    //难度等级名称
public knowledgeNames = "";    //知识点名s
public isMasterStr = "";    //是否掌握串
public courseKnowledgeIds = "";    //知识点Ids
public userId_PickUp = "";    //用户ID
public pickUpTime = "";    //捞的时间
public finishedTime = "";    //完成时间
public isMaster = false;    //是否掌握

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
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
case clsGameBottleENEx.con_QuestionTypeName:
this.questionTypeName = strValue;
    this.hmProperty["questionTypeName"] = true;
break;
case clsGameBottleENEx.con_QuestionName:
this.questionName = strValue;
    this.hmProperty["questionName"] = true;
break;
case clsGameBottleENEx.con_QuestionTypeId:
this.questionTypeId = strValue;
    this.hmProperty["questionTypeId"] = true;
break;
case clsGameBottleENEx.con_UserName_Throw:
this.userName_Throw = strValue;
    this.hmProperty["userName_Throw"] = true;
break;
case clsGameBottleENEx.con_UserName_PickUp:
this.userName_PickUp = strValue;
    this.hmProperty["userName_PickUp"] = true;
break;
case clsGameBottleENEx.con_DifficultyLevelName:
this.difficultyLevelName = strValue;
    this.hmProperty["difficultyLevelName"] = true;
break;
case clsGameBottleENEx.con_KnowledgeNames:
this.knowledgeNames = strValue;
    this.hmProperty["knowledgeNames"] = true;
break;
case clsGameBottleENEx.con_IsMasterStr:
this.isMasterStr = strValue;
    this.hmProperty["isMasterStr"] = true;
break;
case clsGameBottleENEx.con_CourseKnowledgeIds:
this.courseKnowledgeIds = strValue;
    this.hmProperty["courseKnowledgeIds"] = true;
break;
case clsGameBottleENEx.con_UserId_PickUp:
this.userId_PickUp = strValue;
    this.hmProperty["userId_PickUp"] = true;
break;
case clsGameBottleENEx.con_PickUpTime:
this.pickUpTime = strValue;
    this.hmProperty["pickUpTime"] = true;
break;
case clsGameBottleENEx.con_FinishedTime:
this.finishedTime = strValue;
    this.hmProperty["finishedTime"] = true;
break;
case clsGameBottleENEx.con_IsMaster:
this.isMaster = Boolean(strValue);
    this.hmProperty["isMaster"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[GameBottle]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsGameBottleENEx();
const instance = new clsGameBottleENEx();
return instance.hasOwnProperty(propName);
}
}