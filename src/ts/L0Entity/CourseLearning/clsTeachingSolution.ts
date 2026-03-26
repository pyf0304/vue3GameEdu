
 /**
 * 类名:clsTeachingSolution
 * 表名:TeachingSolution(01120137)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:30:30
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 教学方案(TeachingSolution)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsTeachingSolution 
{
public static _CurrTabName= "TeachingSolution"; //当前表名,与该类相关的表名
public static _KeyFldName= "TeachingSolutionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["teachingSolutionId", "teachingSolutionName", "courseId", "idTeacher", "briefIntroduction", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public teachingSolutionId = "";    //教学方案Id
public teachingSolutionName = "";    //教学方案名称
public courseId = "";    //课程Id
public idTeacher = "";    //教师流水号
public briefIntroduction = "";    //简介
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
case clsTeachingSolution.con_TeachingSolutionId:
return this.teachingSolutionId;
case clsTeachingSolution.con_TeachingSolutionName:
return this.teachingSolutionName;
case clsTeachingSolution.con_CourseId:
return this.courseId;
case clsTeachingSolution.con_IdTeacher:
return this.idTeacher;
case clsTeachingSolution.con_BriefIntroduction:
return this.briefIntroduction;
case clsTeachingSolution.con_UpdDate:
return this.updDate;
case clsTeachingSolution.con_UpdUser:
return this.updUser;
case clsTeachingSolution.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[TeachingSolution]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"TeachingSolutionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingSolutionId(): string {return "teachingSolutionId";}    //教学方案Id

 /**
 * 常量:"TeachingSolutionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingSolutionName(): string {return "teachingSolutionName";}    //教学方案名称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdTeacher"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeacher(): string {return "idTeacher";}    //教师流水号

 /**
 * 常量:"BriefIntroduction"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BriefIntroduction(): string {return "briefIntroduction";}    //简介

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