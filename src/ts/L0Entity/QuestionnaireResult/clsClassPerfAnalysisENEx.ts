
 /**
 * 类名:clsClassPerfAnalysisENEx
 * 表名:ClassPerfAnalysis(01120977)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:27:12
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 班级问题分析(ClassPerfAnalysis)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsClassPerfAnalysisEN } from "@/ts/L0Entity/QuestionnaireResult/clsClassPerfAnalysisEN";

export class  clsClassPerfAnalysisENEx extends clsClassPerfAnalysisEN
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
case clsClassPerfAnalysisENEx.con_QuestionName:
return this.questionName;
case clsClassPerfAnalysisENEx.con_CourseName:
return this.courseName;
case clsClassPerfAnalysisENEx.con_QuestionTypeName:
return this.questionTypeName;
case clsClassPerfAnalysisENEx.con_DifficultyLevelName:
return this.difficultyLevelName;
case clsClassPerfAnalysisENEx.con_DifficultyLevelId:
return this.difficultyLevelId;
case clsClassPerfAnalysisENEx.con_QuestionTypeId:
return this.questionTypeId;
case clsClassPerfAnalysisENEx.con_SchoolName:
return this.schoolName;
case clsClassPerfAnalysisENEx.con_EduClsName:
return this.eduClsName;
case clsClassPerfAnalysisENEx.con_KnowledgeNames:
return this.knowledgeNames;
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
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"QuestionTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionTypeName(): string {return "questionTypeName";}    //题目类型名

 /**
 * 常量:"DifficultyLevelName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DifficultyLevelName(): string {return "difficultyLevelName";}    //难度等级名称

 /**
 * 常量:"DifficultyLevelId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DifficultyLevelId(): string {return "difficultyLevelId";}    //难度等级Id

 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"SchoolName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_SchoolName(): string {return "schoolName";}    //学校名称

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"KnowledgeNames"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_KnowledgeNames(): string {return "knowledgeNames";}    //知识点名s

public questionName = "";    //题目名称
public courseName = "";    //课程名称
public questionTypeName = "";    //题目类型名
public difficultyLevelName = "";    //难度等级名称
public difficultyLevelId = "";    //难度等级Id
public questionTypeId = "";    //题目类型Id
public schoolName = "";    //学校名称
public eduClsName = "";    //教学班名
public knowledgeNames = "";    //知识点名s

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
case clsClassPerfAnalysisENEx.con_QuestionName:
this.questionName = strValue;
    this.hmProperty["questionName"] = true;
break;
case clsClassPerfAnalysisENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsClassPerfAnalysisENEx.con_QuestionTypeName:
this.questionTypeName = strValue;
    this.hmProperty["questionTypeName"] = true;
break;
case clsClassPerfAnalysisENEx.con_DifficultyLevelName:
this.difficultyLevelName = strValue;
    this.hmProperty["difficultyLevelName"] = true;
break;
case clsClassPerfAnalysisENEx.con_DifficultyLevelId:
this.difficultyLevelId = strValue;
    this.hmProperty["difficultyLevelId"] = true;
break;
case clsClassPerfAnalysisENEx.con_QuestionTypeId:
this.questionTypeId = strValue;
    this.hmProperty["questionTypeId"] = true;
break;
case clsClassPerfAnalysisENEx.con_SchoolName:
this.schoolName = strValue;
    this.hmProperty["schoolName"] = true;
break;
case clsClassPerfAnalysisENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clsClassPerfAnalysisENEx.con_KnowledgeNames:
this.knowledgeNames = strValue;
    this.hmProperty["knowledgeNames"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ClassPerfAnalysis]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsClassPerfAnalysisENEx();
const instance = new clsClassPerfAnalysisENEx();
return instance.hasOwnProperty(propName);
}
}