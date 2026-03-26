
 /**
 * 类名:clsSchoolTerm
 * 表名:SchoolTerm(01120135)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:29:31
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 学期(SchoolTerm)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsSchoolTerm 
{
public static _CurrTabName= "SchoolTerm"; //当前表名,与该类相关的表名
public static _KeyFldName= "SchoolTerm"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 3;
public static AttributeName = ["schoolTerm", "schoolTermName", "isCurrentSchoolTerm"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public schoolTerm = "";    //学期
public schoolTermName = "";    //学期名
public isCurrentSchoolTerm = false;    //学期

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
case clsSchoolTerm.con_SchoolTerm:
return this.schoolTerm;
case clsSchoolTerm.con_SchoolTermName:
return this.schoolTermName;
case clsSchoolTerm.con_IsCurrentSchoolTerm:
return this.isCurrentSchoolTerm;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SchoolTerm]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"SchoolTermName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTermName(): string {return "schoolTermName";}    //学期名

 /**
 * 常量:"IsCurrentSchoolTerm"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCurrentSchoolTerm(): string {return "isCurrentSchoolTerm";}    //学期
}