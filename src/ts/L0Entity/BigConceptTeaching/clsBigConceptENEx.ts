
 /**
 * 类名:clsBigConceptENEx
 * 表名:BigConcept(01120972)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:24:15
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:大概念教学(BigConceptTeaching)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 大概念(BigConcept)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsBigConceptEN } from "@/ts/L0Entity/BigConceptTeaching/clsBigConceptEN";

export class  clsBigConceptENEx extends clsBigConceptEN
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
case clsBigConceptENEx.con_CourseName:
return this.courseName;
case clsBigConceptENEx.con_GradeName:
return this.gradeName;
case clsBigConceptENEx.con_SchoolTermName:
return this.schoolTermName;
case clsBigConceptENEx.con_SubmitStatusDesc:
return this.submitStatusDesc;
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
 * 常量:"GradeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_GradeName(): string {return "gradeName";}    //年级名称

 /**
 * 常量:"SchoolTermName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_SchoolTermName(): string {return "schoolTermName";}    //学期名

 /**
 * 常量:"SubmitStatusDesc"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_SubmitStatusDesc(): string {return "submitStatusDesc";}    //送审状态流描述

public courseName = "";    //课程名称
public gradeName = "";    //年级名称
public schoolTermName = "";    //学期名
public submitStatusDesc = "";    //送审状态流描述

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
case clsBigConceptENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsBigConceptENEx.con_GradeName:
this.gradeName = strValue;
    this.hmProperty["gradeName"] = true;
break;
case clsBigConceptENEx.con_SchoolTermName:
this.schoolTermName = strValue;
    this.hmProperty["schoolTermName"] = true;
break;
case clsBigConceptENEx.con_SubmitStatusDesc:
this.submitStatusDesc = strValue;
    this.hmProperty["submitStatusDesc"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[BigConcept]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
const instance = new clsBigConceptENEx();
return instance.hasOwnProperty(propName);
}
}