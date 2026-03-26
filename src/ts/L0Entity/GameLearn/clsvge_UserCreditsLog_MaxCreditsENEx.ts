
 /**
 * 类名:clsvge_UserCreditsLog_MaxCreditsENEx
 * 表名:vge_UserCreditsLog_MaxCredits(01120939)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/06 16:39:47
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
 * v用户积分日志_最高分(vge_UserCreditsLog_MaxCredits)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvge_UserCreditsLog_MaxCreditsEN } from "@/ts/L0Entity/GameLearn/clsvge_UserCreditsLog_MaxCreditsEN";

export class  clsvge_UserCreditsLog_MaxCreditsENEx extends clsvge_UserCreditsLog_MaxCreditsEN
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
case clsvge_UserCreditsLog_MaxCreditsENEx.con_EduClsName:
return this.eduClsName;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_CourseName:
return this.courseName;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_GameLevelName:
return this.gameLevelName;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserName:
return this.userName;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_OrderNum:
return this.orderNum;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_Passed:
return this.passed;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserNameEx:
return this.userNameEx;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


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

 /**
 * 常量:"UserName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"Passed"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_Passed(): string {return "passed";}    //是否合格

 /**
 * 常量:"UserNameEx"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserNameEx(): string {return "userNameEx";}    //用户名

public eduClsName = "";    //教学班名
public courseName = "";    //课程名称
public gameLevelName = "";    //游戏关卡名称
public userName = "";    //用户名
public orderNum = 0;    //序号
public passed = false;    //是否合格
public userNameEx = "";    //用户名

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
case clsvge_UserCreditsLog_MaxCreditsENEx.con_EduClsName:
this.eduClsName = strValue;
break;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_CourseName:
this.courseName = strValue;
break;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_GameLevelName:
this.gameLevelName = strValue;
break;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserName:
this.userName = strValue;
break;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_Passed:
this.passed = Boolean(strValue);
break;
case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserNameEx:
this.userNameEx = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vge_UserCreditsLog_MaxCredits]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsvge_UserCreditsLog_MaxCreditsENEx();
const instance = new clsvge_UserCreditsLog_MaxCreditsENEx();
return instance.hasOwnProperty(propName);
}
}