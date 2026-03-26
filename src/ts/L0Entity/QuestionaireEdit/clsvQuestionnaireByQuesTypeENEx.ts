
 /**
 * 类名:clsvQuestionnaireByQuesTypeENEx
 * 表名:vQuestionnaireByQuesType(01120982)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/13 11:31:32
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * vQuestionnaireByQuesType(vQuestionnaireByQuesType)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvQuestionnaireByQuesTypeEN } from "@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaireByQuesTypeEN";

export class  clsvQuestionnaireByQuesTypeENEx extends clsvQuestionnaireByQuesTypeEN
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
case clsvQuestionnaireByQuesTypeENEx.con_QuestionTypeNameEx:
return this.questionTypeNameEx;
case clsvQuestionnaireByQuesTypeENEx.con_CourseName:
return this.courseName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"QuestionTypeNameEx"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionTypeNameEx(): string {return "questionTypeNameEx";}    //题目类型名Ex

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

public questionTypeNameEx = "";    //题目类型名Ex
public courseName = "";    //课程名称

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
case clsvQuestionnaireByQuesTypeENEx.con_QuestionTypeNameEx:
this.questionTypeNameEx = strValue;
break;
case clsvQuestionnaireByQuesTypeENEx.con_CourseName:
this.courseName = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQuestionnaireByQuesType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsvQuestionnaireByQuesTypeENEx();
const instance = new clsvQuestionnaireByQuesTypeENEx();
return instance.hasOwnProperty(propName);
}
}