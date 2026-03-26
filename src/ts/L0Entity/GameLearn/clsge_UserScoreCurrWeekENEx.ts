
 /**
 * 类名:clsge_UserScoreCurrWeekENEx
 * 表名:ge_UserScoreCurrWeek(01120989)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/11 11:10:37
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
 * 用户当前周得分(ge_UserScoreCurrWeek)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsge_UserScoreCurrWeekEN } from "@/ts/L0Entity/GameLearn/clsge_UserScoreCurrWeekEN";

export class  clsge_UserScoreCurrWeekENEx extends clsge_UserScoreCurrWeekEN
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
case clsge_UserScoreCurrWeekENEx.con_UserName:
return this.userName;
case clsge_UserScoreCurrWeekENEx.con_CourseName:
return this.courseName;
case clsge_UserScoreCurrWeekENEx.con_WeekIndex:
return this.weekIndex;
case clsge_UserScoreCurrWeekENEx.con_EduClsName:
return this.eduClsName;
case clsge_UserScoreCurrWeekENEx.con_UpdDateSim:
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
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"WeekIndex"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_WeekIndex(): string {return "weekIndex";}    //周序号

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"UpdDateSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UpdDateSim(): string {return "updDateSim";}    //修改日期

public userName = "";    //用户名
public courseName = "";    //课程名称
public weekIndex = 0;    //周序号
public eduClsName = "";    //教学班名
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
case clsge_UserScoreCurrWeekENEx.con_UserName:
this.userName = strValue;
    this.hmProperty["userName"] = true;
break;
case clsge_UserScoreCurrWeekENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsge_UserScoreCurrWeekENEx.con_WeekIndex:
this.weekIndex = Number(strValue);
    this.hmProperty["weekIndex"] = true;
break;
case clsge_UserScoreCurrWeekENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clsge_UserScoreCurrWeekENEx.con_UpdDateSim:
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
strMsg = `字段名:[${strFldName}]在表对象:[ge_UserScoreCurrWeek]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsge_UserScoreCurrWeekENEx();
const instance = new clsge_UserScoreCurrWeekENEx();
return instance.hasOwnProperty(propName);
}
}