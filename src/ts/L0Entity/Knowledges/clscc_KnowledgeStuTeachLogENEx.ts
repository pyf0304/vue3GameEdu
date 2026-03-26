
 /**
 * 类名:clscc_KnowledgeStuTeachLogENEx
 * 表名:cc_KnowledgeStuTeachLog(01120973)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:57
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
 * 学生知识点教学日志(cc_KnowledgeStuTeachLog)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clscc_KnowledgeStuTeachLogEN } from "@/ts/L0Entity/Knowledges/clscc_KnowledgeStuTeachLogEN";

export class  clscc_KnowledgeStuTeachLogENEx extends clscc_KnowledgeStuTeachLogEN
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
case clscc_KnowledgeStuTeachLogENEx.con_CourseName:
return this.courseName;
case clscc_KnowledgeStuTeachLogENEx.con_StuId:
return this.stuId;
case clscc_KnowledgeStuTeachLogENEx.con_StuName:
return this.stuName;
case clscc_KnowledgeStuTeachLogENEx.con_QuestionName:
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
 * 常量:"QuestionName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionName(): string {return "questionName";}    //题目名称

public courseName = "";    //课程名称
public stuId = "";    //学号
public stuName = "";    //姓名
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
case clscc_KnowledgeStuTeachLogENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clscc_KnowledgeStuTeachLogENEx.con_StuId:
this.stuId = strValue;
    this.hmProperty["stuId"] = true;
break;
case clscc_KnowledgeStuTeachLogENEx.con_StuName:
this.stuName = strValue;
    this.hmProperty["stuName"] = true;
break;
case clscc_KnowledgeStuTeachLogENEx.con_QuestionName:
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
strMsg = `字段名:[${strFldName}]在表对象:[cc_KnowledgeStuTeachLog]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clscc_KnowledgeStuTeachLogENEx();
const instance = new clscc_KnowledgeStuTeachLogENEx();
return instance.hasOwnProperty(propName);
}
}