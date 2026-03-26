
 /**
 * 类名:clsge_UserCreditsLogENEx
 * 表名:ge_UserCreditsLog(01120883)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/07 09:11:29
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
 * 用户积分日志(ge_UserCreditsLog)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsge_UserCreditsLogEN } from "@/ts/L0Entity/GameLearn/clsge_UserCreditsLogEN";

export class  clsge_UserCreditsLogENEx extends clsge_UserCreditsLogEN
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
case clsge_UserCreditsLogENEx.con_UserName:
return this.userName;
case clsge_UserCreditsLogENEx.con_UserNameEx:
return this.userNameEx;
case clsge_UserCreditsLogENEx.con_CourseName:
return this.courseName;
case clsge_UserCreditsLogENEx.con_EduClsName:
return this.eduClsName;
case clsge_UserCreditsLogENEx.con_GameLevelName:
return this.gameLevelName;
case clsge_UserCreditsLogENEx.con_UpdDateSim:
return this.updDateSim;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"UserName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"UserNameEx"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserNameEx(): string {return "userNameEx";}    //用户名

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"GameLevelName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_GameLevelName(): string {return "gameLevelName";}    //游戏关卡名称

 /**
 * 常量:"UpdDateSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UpdDateSim(): string {return "updDateSim";}    //修改日期

public userName = "";    //用户名
public userNameEx = "";    //用户名
public courseName = "";    //课程名称
public eduClsName = "";    //教学班名
public gameLevelName = "";    //游戏关卡名称
public updDateSim = "";    //修改日期

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
case clsge_UserCreditsLogENEx.con_UserName:
this.userName = strValue;
    this.hmProperty["userName"] = true;
break;
case clsge_UserCreditsLogENEx.con_UserNameEx:
this.userNameEx = strValue;
    this.hmProperty["userNameEx"] = true;
break;
case clsge_UserCreditsLogENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsge_UserCreditsLogENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clsge_UserCreditsLogENEx.con_GameLevelName:
this.gameLevelName = strValue;
    this.hmProperty["gameLevelName"] = true;
break;
case clsge_UserCreditsLogENEx.con_UpdDateSim:
this.updDateSim = strValue;
    this.hmProperty["updDateSim"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_UserCreditsLog]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsge_UserCreditsLogENEx();
const instance = new clsge_UserCreditsLogENEx();
return instance.hasOwnProperty(propName);
}
}