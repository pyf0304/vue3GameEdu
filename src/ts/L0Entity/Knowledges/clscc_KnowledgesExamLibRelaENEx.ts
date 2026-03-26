
 /**
 * 类名:clscc_KnowledgesExamLibRelaENEx
 * 表名:cc_KnowledgesExamLibRela(01120140)
 * 版本:2025.02.18.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/24 02:44:57
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
 * 知识点习题关系(cc_KnowledgesExamLibRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clscc_KnowledgesExamLibRelaEN } from "@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN";

export class  clscc_KnowledgesExamLibRelaENEx extends clscc_KnowledgesExamLibRelaEN
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
case clscc_KnowledgesExamLibRelaENEx.con_QuestionName:
return this.questionName;
case clscc_KnowledgesExamLibRelaENEx.con_KnowledgeName:
return this.knowledgeName;
case clscc_KnowledgesExamLibRelaENEx.con_CourseName:
return this.courseName;
case clscc_KnowledgesExamLibRelaENEx.con_KnowledgeModuleId:
return this.knowledgeModuleId;
case clscc_KnowledgesExamLibRelaENEx.con_CourseChapterId:
return this.courseChapterId;
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
 * 常量:"KnowledgeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_KnowledgeName(): string {return "knowledgeName";}    //知识点名称

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"KnowledgeModuleId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_KnowledgeModuleId(): string {return "knowledgeModuleId";}    //知识点模块Id

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

public questionName = "";    //题目名称
public knowledgeName = "";    //知识点名称
public courseName = "";    //课程名称
public knowledgeModuleId = "";    //知识点模块Id
public courseChapterId = "";    //课程章节ID

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
case clscc_KnowledgesExamLibRelaENEx.con_QuestionName:
this.questionName = strValue;
    this.hmProperty["questionName"] = true;
break;
case clscc_KnowledgesExamLibRelaENEx.con_KnowledgeName:
this.knowledgeName = strValue;
    this.hmProperty["knowledgeName"] = true;
break;
case clscc_KnowledgesExamLibRelaENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clscc_KnowledgesExamLibRelaENEx.con_KnowledgeModuleId:
this.knowledgeModuleId = strValue;
    this.hmProperty["knowledgeModuleId"] = true;
break;
case clscc_KnowledgesExamLibRelaENEx.con_CourseChapterId:
this.courseChapterId = strValue;
    this.hmProperty["courseChapterId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_KnowledgesExamLibRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clscc_KnowledgesExamLibRelaENEx();
const instance = new clscc_KnowledgesExamLibRelaENEx();
return instance.hasOwnProperty(propName);
}
}