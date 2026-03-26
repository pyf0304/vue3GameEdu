
 /**
 * 类名:clsStuPerfAnalysisENEx
 * 表名:StuPerfAnalysis(01120978)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:27:03
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
 * 学生问题分析(StuPerfAnalysis)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsStuPerfAnalysisEN } from "@/ts/L0Entity/QuestionnaireResult/clsStuPerfAnalysisEN";

export class  clsStuPerfAnalysisENEx extends clsStuPerfAnalysisEN
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
case clsStuPerfAnalysisENEx.con_CourseName:
return this.courseName;
case clsStuPerfAnalysisENEx.con_SchoolName:
return this.schoolName;
case clsStuPerfAnalysisENEx.con_EduClsName:
return this.eduClsName;
case clsStuPerfAnalysisENEx.con_IdGrade:
return this.idGrade;
case clsStuPerfAnalysisENEx.con_KnowledgeNames:
return this.knowledgeNames;
case clsStuPerfAnalysisENEx.con_IdAdminCls:
return this.idAdminCls;
case clsStuPerfAnalysisENEx.con_StuId:
return this.stuId;
case clsStuPerfAnalysisENEx.con_StuName:
return this.stuName;
case clsStuPerfAnalysisENEx.con_AdminClsName:
return this.adminClsName;
case clsStuPerfAnalysisENEx.con_GradeName:
return this.gradeName;
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
 * 常量:"IdGrade"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"KnowledgeNames"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_KnowledgeNames(): string {return "knowledgeNames";}    //知识点名s

 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"StuId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_StuId(): string {return "stuId";}    //学号

 /**
 * 常量:"StuName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_StuName(): string {return "stuName";}    //姓名

 /**
 * 常量:"AdminClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_AdminClsName(): string {return "adminClsName";}    //行政班名称

 /**
 * 常量:"GradeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_GradeName(): string {return "gradeName";}    //年级名称

public courseName = "";    //课程名称
public schoolName = "";    //学校名称
public eduClsName = "";    //教学班名
public idGrade = "";    //年级流水号
public knowledgeNames = "";    //知识点名s
public idAdminCls = "";    //行政班流水号
public stuId = "";    //学号
public stuName = "";    //姓名
public adminClsName = "";    //行政班名称
public gradeName = "";    //年级名称

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
case clsStuPerfAnalysisENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsStuPerfAnalysisENEx.con_SchoolName:
this.schoolName = strValue;
    this.hmProperty["schoolName"] = true;
break;
case clsStuPerfAnalysisENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clsStuPerfAnalysisENEx.con_IdGrade:
this.idGrade = strValue;
    this.hmProperty["idGrade"] = true;
break;
case clsStuPerfAnalysisENEx.con_KnowledgeNames:
this.knowledgeNames = strValue;
    this.hmProperty["knowledgeNames"] = true;
break;
case clsStuPerfAnalysisENEx.con_IdAdminCls:
this.idAdminCls = strValue;
    this.hmProperty["idAdminCls"] = true;
break;
case clsStuPerfAnalysisENEx.con_StuId:
this.stuId = strValue;
    this.hmProperty["stuId"] = true;
break;
case clsStuPerfAnalysisENEx.con_StuName:
this.stuName = strValue;
    this.hmProperty["stuName"] = true;
break;
case clsStuPerfAnalysisENEx.con_AdminClsName:
this.adminClsName = strValue;
    this.hmProperty["adminClsName"] = true;
break;
case clsStuPerfAnalysisENEx.con_GradeName:
this.gradeName = strValue;
    this.hmProperty["gradeName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[StuPerfAnalysis]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsStuPerfAnalysisENEx();
const instance = new clsStuPerfAnalysisENEx();
return instance.hasOwnProperty(propName);
}
}