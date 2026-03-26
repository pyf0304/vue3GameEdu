
 /**
 * 类名:clsge_ExaminationCriteriaENEx
 * 表名:ge_ExaminationCriteria(01120898)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:20
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
 * 题目检查标准表(ge_ExaminationCriteria)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsge_ExaminationCriteriaEN } from "@/ts/L0Entity/GameLearn/clsge_ExaminationCriteriaEN";

export class  clsge_ExaminationCriteriaENEx extends clsge_ExaminationCriteriaEN
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
case clsge_ExaminationCriteriaENEx.con_CourseName:
return this.courseName;
case clsge_ExaminationCriteriaENEx.con_ControlTypeName:
return this.controlTypeName;
case clsge_ExaminationCriteriaENEx.con_EventTypeName:
return this.eventTypeName;
case clsge_ExaminationCriteriaENEx.con_TypeDescribe:
return this.typeDescribe;
case clsge_ExaminationCriteriaENEx.con_QuestionName:
return this.questionName;
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
 * 常量:"ControlTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ControlTypeName(): string {return "controlTypeName";}    //控件名称

 /**
 * 常量:"EventTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_EventTypeName(): string {return "eventTypeName";}    //事件名称

 /**
 * 常量:"TypeDescribe"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_TypeDescribe(): string {return "typeDescribe";}    //属性名称

 /**
 * 常量:"QuestionName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionName(): string {return "questionName";}    //题目名称

public courseName = "";    //课程名称
public controlTypeName = "";    //控件名称
public eventTypeName = "";    //事件名称
public typeDescribe = "";    //属性名称
public questionName = "";    //题目名称

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
case clsge_ExaminationCriteriaENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsge_ExaminationCriteriaENEx.con_ControlTypeName:
this.controlTypeName = strValue;
    this.hmProperty["controlTypeName"] = true;
break;
case clsge_ExaminationCriteriaENEx.con_EventTypeName:
this.eventTypeName = strValue;
    this.hmProperty["eventTypeName"] = true;
break;
case clsge_ExaminationCriteriaENEx.con_TypeDescribe:
this.typeDescribe = strValue;
    this.hmProperty["typeDescribe"] = true;
break;
case clsge_ExaminationCriteriaENEx.con_QuestionName:
this.questionName = strValue;
    this.hmProperty["questionName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_ExaminationCriteria]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsge_ExaminationCriteriaENEx();
const instance = new clsge_ExaminationCriteriaENEx();
return instance.hasOwnProperty(propName);
}
}