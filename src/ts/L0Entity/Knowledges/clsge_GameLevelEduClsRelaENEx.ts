
 /**
 * 类名:clsge_GameLevelEduClsRelaENEx
 * 表名:ge_GameLevelEduClsRela(01120938)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:51
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 游戏关卡教学班关系(ge_GameLevelEduClsRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsge_GameLevelEduClsRelaEN } from "@/ts/L0Entity/Knowledges/clsge_GameLevelEduClsRelaEN";

export class  clsge_GameLevelEduClsRelaENEx extends clsge_GameLevelEduClsRelaEN
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
case clsge_GameLevelEduClsRelaENEx.con_ChapterNameName:
return this.chapterNameName;
case clsge_GameLevelEduClsRelaENEx.con_QuestionTypeName:
return this.questionTypeName;
case clsge_GameLevelEduClsRelaENEx.con_LevelModeTypeName:
return this.levelModeTypeName;
case clsge_GameLevelEduClsRelaENEx.con_DifficultyLevelName:
return this.difficultyLevelName;
case clsge_GameLevelEduClsRelaENEx.con_EduClsName:
return this.eduClsName;
case clsge_GameLevelEduClsRelaENEx.con_CourseName:
return this.courseName;
case clsge_GameLevelEduClsRelaENEx.con_GameLevelName:
return this.gameLevelName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"ChapterNameName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ChapterNameName(): string {return "chapterNameName";}    //模式名

 /**
 * 常量:"QuestionTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionTypeName(): string {return "questionTypeName";}    //题目类型名

 /**
 * 常量:"LevelModeTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_LevelModeTypeName(): string {return "levelModeTypeName";}    //模式名

 /**
 * 常量:"DifficultyLevelName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DifficultyLevelName(): string {return "difficultyLevelName";}    //难度等级名称

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"GameLevelName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_GameLevelName(): string {return "gameLevelName";}    //游戏关卡名称

public chapterNameName = "";    //模式名
public questionTypeName = "";    //题目类型名
public levelModeTypeName = "";    //模式名
public difficultyLevelName = "";    //难度等级名称
public eduClsName = "";    //教学班名
public courseName = "";    //课程名称
public gameLevelName = "";    //游戏关卡名称

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
case clsge_GameLevelEduClsRelaENEx.con_ChapterNameName:
this.chapterNameName = strValue;
    this.hmProperty["chapterNameName"] = true;
break;
case clsge_GameLevelEduClsRelaENEx.con_QuestionTypeName:
this.questionTypeName = strValue;
    this.hmProperty["questionTypeName"] = true;
break;
case clsge_GameLevelEduClsRelaENEx.con_LevelModeTypeName:
this.levelModeTypeName = strValue;
    this.hmProperty["levelModeTypeName"] = true;
break;
case clsge_GameLevelEduClsRelaENEx.con_DifficultyLevelName:
this.difficultyLevelName = strValue;
    this.hmProperty["difficultyLevelName"] = true;
break;
case clsge_GameLevelEduClsRelaENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clsge_GameLevelEduClsRelaENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsge_GameLevelEduClsRelaENEx.con_GameLevelName:
this.gameLevelName = strValue;
    this.hmProperty["gameLevelName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_GameLevelEduClsRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsge_GameLevelEduClsRelaENEx();
const instance = new clsge_GameLevelEduClsRelaENEx();
return instance.hasOwnProperty(propName);
}
}