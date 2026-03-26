
 /**
 * 类名:clsJxTeachPlanKnowledgeENEx
 * 表名:JxTeachPlanKnowledge(01120971)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:15
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 教学计划知识点(JxTeachPlanKnowledge)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsJxTeachPlanKnowledgeEN } from "@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeEN";

export class  clsJxTeachPlanKnowledgeENEx extends clsJxTeachPlanKnowledgeEN
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
case clsJxTeachPlanKnowledgeENEx.con_AssessmentMethodName:
return this.assessmentMethodName;
case clsJxTeachPlanKnowledgeENEx.con_KnowledgeName:
return this.knowledgeName;
case clsJxTeachPlanKnowledgeENEx.con_TeachingMethodName:
return this.teachingMethodName;
case clsJxTeachPlanKnowledgeENEx.con_TeachingPlanDesc:
return this.teachingPlanDesc;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"AssessmentMethodName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_AssessmentMethodName(): string {return "assessmentMethodName";}    //考核方式名

 /**
 * 常量:"KnowledgeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_KnowledgeName(): string {return "knowledgeName";}    //知识点名称

 /**
 * 常量:"TeachingMethodName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_TeachingMethodName(): string {return "teachingMethodName";}    //教学方式名

 /**
 * 常量:"TeachingPlanDesc"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_TeachingPlanDesc(): string {return "teachingPlanDesc";}    //教学计划名称

public assessmentMethodName = "";    //考核方式名
public knowledgeName = "";    //知识点名称
public teachingMethodName = "";    //教学方式名
public teachingPlanDesc = "";    //教学计划名称

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
case clsJxTeachPlanKnowledgeENEx.con_AssessmentMethodName:
this.assessmentMethodName = strValue;
    this.hmProperty["assessmentMethodName"] = true;
break;
case clsJxTeachPlanKnowledgeENEx.con_KnowledgeName:
this.knowledgeName = strValue;
    this.hmProperty["knowledgeName"] = true;
break;
case clsJxTeachPlanKnowledgeENEx.con_TeachingMethodName:
this.teachingMethodName = strValue;
    this.hmProperty["teachingMethodName"] = true;
break;
case clsJxTeachPlanKnowledgeENEx.con_TeachingPlanDesc:
this.teachingPlanDesc = strValue;
    this.hmProperty["teachingPlanDesc"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[JxTeachPlanKnowledge]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsJxTeachPlanKnowledgeENEx();
const instance = new clsJxTeachPlanKnowledgeENEx();
return instance.hasOwnProperty(propName);
}
}