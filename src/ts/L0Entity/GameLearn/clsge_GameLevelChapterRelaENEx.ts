
 /**
 * 类名:clsge_GameLevelChapterRelaENEx
 * 表名:ge_GameLevelChapterRela(01120913)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 16:03:19
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
 * 游戏关卡章节关系表(ge_GameLevelChapterRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsge_GameLevelChapterRelaEN } from "@/ts/L0Entity/GameLearn/clsge_GameLevelChapterRelaEN";

export class  clsge_GameLevelChapterRelaENEx extends clsge_GameLevelChapterRelaEN
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
case clsge_GameLevelChapterRelaENEx.con_CourseName:
return this.courseName;
case clsge_GameLevelChapterRelaENEx.con_ChapterName:
return this.chapterName;
case clsge_GameLevelChapterRelaENEx.con_GameLevelName:
return this.gameLevelName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"ChapterName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ChapterName(): string {return "chapterName";}    //章名

 /**
 * 常量:"GameLevelName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_GameLevelName(): string {return "gameLevelName";}    //游戏关卡名称

public courseName = "";    //课程名称
public chapterName = "";    //章名
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
case clsge_GameLevelChapterRelaENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsge_GameLevelChapterRelaENEx.con_ChapterName:
this.chapterName = strValue;
    this.hmProperty["chapterName"] = true;
break;
case clsge_GameLevelChapterRelaENEx.con_GameLevelName:
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
strMsg = `字段名:[${strFldName}]在表对象:[ge_GameLevelChapterRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsge_GameLevelChapterRelaENEx();
const instance = new clsge_GameLevelChapterRelaENEx();
return instance.hasOwnProperty(propName);
}
}