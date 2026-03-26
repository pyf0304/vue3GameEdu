
 /**
 * 类名:clsGameBottle_PickUpENEx
 * 表名:GameBottle_PickUp(01120983)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/11 11:10:30
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
 * 捞游戏瓶(GameBottle_PickUp)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsGameBottle_PickUpEN } from "@/ts/L0Entity/GameLearn/clsGameBottle_PickUpEN";

export class  clsGameBottle_PickUpENEx extends clsGameBottle_PickUpEN
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
case clsGameBottle_PickUpENEx.con_QuestionTypeName:
return this.questionTypeName;
case clsGameBottle_PickUpENEx.con_QuestionName:
return this.questionName;
case clsGameBottle_PickUpENEx.con_QuestionTypeId:
return this.questionTypeId;
case clsGameBottle_PickUpENEx.con_UserName_Throw:
return this.userName_Throw;
case clsGameBottle_PickUpENEx.con_UserName_PickUp:
return this.userName_PickUp;
case clsGameBottle_PickUpENEx.con_DifficultyLevelName:
return this.difficultyLevelName;
case clsGameBottle_PickUpENEx.con_KnowledgeNames:
return this.knowledgeNames;
case clsGameBottle_PickUpENEx.con_IsMasterStr:
return this.isMasterStr;
case clsGameBottle_PickUpENEx.con_CourseKnowledgeIds:
return this.courseKnowledgeIds;
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

public questionTypeName = "";    //题目类型名
public questionName = "";    //题目名称
public questionTypeId = "";    //题目类型Id
public userName_Throw = "";    //用户名_扔
public userName_PickUp = "";    //用户名_捞
public difficultyLevelName = "";    //难度等级名称
public knowledgeNames = "";    //知识点名s
public isMasterStr = "";    //是否掌握串
public courseKnowledgeIds = "";    //知识点Ids

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
case clsGameBottle_PickUpENEx.con_QuestionTypeName:
this.questionTypeName = strValue;
    this.hmProperty["questionTypeName"] = true;
break;
case clsGameBottle_PickUpENEx.con_QuestionName:
this.questionName = strValue;
    this.hmProperty["questionName"] = true;
break;
case clsGameBottle_PickUpENEx.con_QuestionTypeId:
this.questionTypeId = strValue;
    this.hmProperty["questionTypeId"] = true;
break;
case clsGameBottle_PickUpENEx.con_UserName_Throw:
this.userName_Throw = strValue;
    this.hmProperty["userName_Throw"] = true;
break;
case clsGameBottle_PickUpENEx.con_UserName_PickUp:
this.userName_PickUp = strValue;
    this.hmProperty["userName_PickUp"] = true;
break;
case clsGameBottle_PickUpENEx.con_DifficultyLevelName:
this.difficultyLevelName = strValue;
    this.hmProperty["difficultyLevelName"] = true;
break;
case clsGameBottle_PickUpENEx.con_KnowledgeNames:
this.knowledgeNames = strValue;
    this.hmProperty["knowledgeNames"] = true;
break;
case clsGameBottle_PickUpENEx.con_IsMasterStr:
this.isMasterStr = strValue;
    this.hmProperty["isMasterStr"] = true;
break;
case clsGameBottle_PickUpENEx.con_CourseKnowledgeIds:
this.courseKnowledgeIds = strValue;
    this.hmProperty["courseKnowledgeIds"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[GameBottle_PickUp]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsGameBottle_PickUpENEx();
const instance = new clsGameBottle_PickUpENEx();
return instance.hasOwnProperty(propName);
}
}