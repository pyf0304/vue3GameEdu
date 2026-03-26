
 /**
 * 类名:clscc_ExamPaperStuBatchRelaENEx
 * 表名:cc_ExamPaperStuBatchRela(01120239)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:46
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 考卷与学生批次关系(cc_ExamPaperStuBatchRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clscc_ExamPaperStuBatchRelaEN } from "@/ts/L0Entity/InteractManage/clscc_ExamPaperStuBatchRelaEN";

export class  clscc_ExamPaperStuBatchRelaENEx extends clscc_ExamPaperStuBatchRelaEN
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
case clscc_ExamPaperStuBatchRelaENEx.con_StuName:
return this.stuName;
case clscc_ExamPaperStuBatchRelaENEx.con_EduClsName:
return this.eduClsName;
case clscc_ExamPaperStuBatchRelaENEx.con_CourseId:
return this.courseId;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"StuName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_StuName(): string {return "stuName";}    //姓名

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

public stuName = "";    //姓名
public eduClsName = "";    //教学班名
public courseId = "";    //课程Id

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
case clscc_ExamPaperStuBatchRelaENEx.con_StuName:
this.stuName = strValue;
    this.hmProperty["stuName"] = true;
break;
case clscc_ExamPaperStuBatchRelaENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clscc_ExamPaperStuBatchRelaENEx.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_ExamPaperStuBatchRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clscc_ExamPaperStuBatchRelaENEx();
const instance = new clscc_ExamPaperStuBatchRelaENEx();
return instance.hasOwnProperty(propName);
}
}