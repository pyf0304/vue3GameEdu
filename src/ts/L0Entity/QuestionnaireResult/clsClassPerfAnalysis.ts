
 /**
 * 类名:clsClassPerfAnalysis
 * 表名:ClassPerfAnalysis(01120977)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:27:12
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 班级问题分析(ClassPerfAnalysis)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsClassPerfAnalysis 
{
public static _CurrTabName= "ClassPerfAnalysis"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCurrEduCls,QuestionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["idCurrEduCls", "questionId", "courseId", "questionCount", "rightCount", "errorCount", "markCount", "idSchool", "comment", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idCurrEduCls = "";    //教学班流水号
public questionId = 0;    //题目Id
public courseId = "";    //课程Id
public questionCount = 0;    //问题数
public rightCount = 0;    //正确次数
public errorCount = 0;    //错误次数
public markCount = 0;    //打分数
public idSchool = "";    //学校流水号
public comment = "";    //批注
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsClassPerfAnalysis.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsClassPerfAnalysis.con_QuestionId:
return this.questionId;
case clsClassPerfAnalysis.con_CourseId:
return this.courseId;
case clsClassPerfAnalysis.con_QuestionCount:
return this.questionCount;
case clsClassPerfAnalysis.con_RightCount:
return this.rightCount;
case clsClassPerfAnalysis.con_ErrorCount:
return this.errorCount;
case clsClassPerfAnalysis.con_MarkCount:
return this.markCount;
case clsClassPerfAnalysis.con_IdSchool:
return this.idSchool;
case clsClassPerfAnalysis.con_Comment:
return this.comment;
case clsClassPerfAnalysis.con_UpdDate:
return this.updDate;
case clsClassPerfAnalysis.con_UpdUser:
return this.updUser;
case clsClassPerfAnalysis.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ClassPerfAnalysis]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"QuestionCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionCount(): string {return "questionCount";}    //问题数

 /**
 * 常量:"RightCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RightCount(): string {return "rightCount";}    //正确次数

 /**
 * 常量:"ErrorCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ErrorCount(): string {return "errorCount";}    //错误次数

 /**
 * 常量:"MarkCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MarkCount(): string {return "markCount";}    //打分数

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"Comment"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Comment(): string {return "comment";}    //批注

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}