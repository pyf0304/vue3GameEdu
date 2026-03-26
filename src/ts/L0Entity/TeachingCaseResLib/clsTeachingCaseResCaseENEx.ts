
 /**
 * 类名:clsTeachingCaseResCaseENEx
 * 表名:TeachingCaseResCase(01120377)
 * 版本:2025.02.18.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 12:39:13
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学案例资源(TeachingCaseResLib)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 教学案例资源案例(TeachingCaseResCase)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsTeachingCaseResCaseEN } from "@/ts/L0Entity/TeachingCaseResLib/clsTeachingCaseResCaseEN";

export class  clsTeachingCaseResCaseENEx extends clsTeachingCaseResCaseEN
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
case clsTeachingCaseResCaseENEx.con_CaseTypeName:
return this.caseTypeName;
case clsTeachingCaseResCaseENEx.con_CollegeName:
return this.collegeName;
case clsTeachingCaseResCaseENEx.con_MajorName:
return this.majorName;
case clsTeachingCaseResCaseENEx.con_CourseName:
return this.courseName;
case clsTeachingCaseResCaseENEx.con_ChapterName:
return this.chapterName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"CaseTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CaseTypeName(): string {return "caseTypeName";}    //案例类型名称

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"MajorName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"ChapterName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ChapterName(): string {return "chapterName";}    //章名

public caseTypeName = "";    //案例类型名称
public collegeName = "";    //学院名称
public majorName = "";    //专业名称
public courseName = "";    //课程名称
public chapterName = "";    //章名

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
case clsTeachingCaseResCaseENEx.con_CaseTypeName:
this.caseTypeName = strValue;
    this.hmProperty["caseTypeName"] = true;
break;
case clsTeachingCaseResCaseENEx.con_CollegeName:
this.collegeName = strValue;
    this.hmProperty["collegeName"] = true;
break;
case clsTeachingCaseResCaseENEx.con_MajorName:
this.majorName = strValue;
    this.hmProperty["majorName"] = true;
break;
case clsTeachingCaseResCaseENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsTeachingCaseResCaseENEx.con_ChapterName:
this.chapterName = strValue;
    this.hmProperty["chapterName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[TeachingCaseResCase]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsTeachingCaseResCaseENEx();
const instance = new clsTeachingCaseResCaseENEx();
return instance.hasOwnProperty(propName);
}
}