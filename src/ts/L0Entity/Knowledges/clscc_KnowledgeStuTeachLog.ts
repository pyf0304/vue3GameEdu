
 /**
 * 类名:clscc_KnowledgeStuTeachLog
 * 表名:cc_KnowledgeStuTeachLog(01120973)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:57
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 学生知识点教学日志(cc_KnowledgeStuTeachLog)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_KnowledgeStuTeachLog 
{
public static _CurrTabName= "cc_KnowledgeStuTeachLog"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionId,IdStudentInfo"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["questionId", "idStudentInfo", "teachingLog", "courseId", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public questionId = 0;    //题目Id
public idStudentInfo = "";    //学生流水号
public teachingLog = "";    //教学日志
public courseId = "";    //课程Id
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
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
case clscc_KnowledgeStuTeachLog.con_QuestionId:
return this.questionId;
case clscc_KnowledgeStuTeachLog.con_IdStudentInfo:
return this.idStudentInfo;
case clscc_KnowledgeStuTeachLog.con_TeachingLog:
return this.teachingLog;
case clscc_KnowledgeStuTeachLog.con_CourseId:
return this.courseId;
case clscc_KnowledgeStuTeachLog.con_UpdDate:
return this.updDate;
case clscc_KnowledgeStuTeachLog.con_UpdUserId:
return this.updUserId;
case clscc_KnowledgeStuTeachLog.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_KnowledgeStuTeachLog]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

 /**
 * 常量:"TeachingLog"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingLog(): string {return "teachingLog";}    //教学日志

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}