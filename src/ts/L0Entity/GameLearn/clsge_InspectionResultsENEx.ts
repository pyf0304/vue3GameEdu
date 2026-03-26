
 /**
 * 类名:clsge_InspectionResultsENEx
 * 表名:ge_InspectionResults(01120897)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:14
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
 * 编程检查结果表(ge_InspectionResults)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsge_InspectionResultsEN } from "@/ts/L0Entity/GameLearn/clsge_InspectionResultsEN";

export class  clsge_InspectionResultsENEx extends clsge_InspectionResultsEN
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
case clsge_InspectionResultsENEx.con_QuestionName:
return this.questionName;
case clsge_InspectionResultsENEx.con_CourseId:
return this.courseId;
case clsge_InspectionResultsENEx.con_ControlId:
return this.controlId;
case clsge_InspectionResultsENEx.con_ControlClass:
return this.controlClass;
case clsge_InspectionResultsENEx.con_ControlHtml:
return this.controlHtml;
case clsge_InspectionResultsENEx.con_Result:
return this.result;
case clsge_InspectionResultsENEx.con_ControlValue:
return this.controlValue;
case clsge_InspectionResultsENEx.con_Describe:
return this.describe;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"QuestionName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionName(): string {return "questionName";}    //题目名称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"ControlId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ControlId(): string {return "controlId";}    //控件Id

 /**
 * 常量:"ControlClass"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ControlClass(): string {return "controlClass";}    //控件样式

 /**
 * 常量:"ControlHtml"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ControlHtml(): string {return "controlHtml";}    //控件html

 /**
 * 常量:"Result"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_Result(): string {return "result";}    //结果

 /**
 * 常量:"ControlValue"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ControlValue(): string {return "controlValue";}    //控件值

 /**
 * 常量:"Describe"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_Describe(): string {return "describe";}    //标准描述

public questionName = "";    //题目名称
public courseId = "";    //课程Id
public controlId = "";    //控件Id
public controlClass = "";    //控件样式
public controlHtml = "";    //控件html
public result = "";    //结果
public controlValue = "";    //控件值
public describe = "";    //标准描述

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
case clsge_InspectionResultsENEx.con_QuestionName:
this.questionName = strValue;
    this.hmProperty["questionName"] = true;
break;
case clsge_InspectionResultsENEx.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsge_InspectionResultsENEx.con_ControlId:
this.controlId = strValue;
    this.hmProperty["controlId"] = true;
break;
case clsge_InspectionResultsENEx.con_ControlClass:
this.controlClass = strValue;
    this.hmProperty["controlClass"] = true;
break;
case clsge_InspectionResultsENEx.con_ControlHtml:
this.controlHtml = strValue;
    this.hmProperty["controlHtml"] = true;
break;
case clsge_InspectionResultsENEx.con_Result:
this.result = strValue;
    this.hmProperty["result"] = true;
break;
case clsge_InspectionResultsENEx.con_ControlValue:
this.controlValue = strValue;
    this.hmProperty["controlValue"] = true;
break;
case clsge_InspectionResultsENEx.con_Describe:
this.describe = strValue;
    this.hmProperty["describe"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_InspectionResults]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsge_InspectionResultsENEx();
const instance = new clsge_InspectionResultsENEx();
return instance.hasOwnProperty(propName);
}
}