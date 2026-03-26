
 /**
 * 类名:clsRsAdminGrade
 * 表名:RsAdminGrade(01120111)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:29:34
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
 * 职务(RsAdminGrade)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsRsAdminGrade 
{
public static _CurrTabName= "RsAdminGrade"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdAdminGrade"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["idAdminGrade", "adminGradeId", "adminGradeDesc", "modifyDate", "modifyUserId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idAdminGrade = "";    //行政职务流水号
public adminGradeId = "";    //行政职务代号
public adminGradeDesc = "";    //行政职务描述
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人

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
case clsRsAdminGrade.con_IdAdminGrade:
return this.idAdminGrade;
case clsRsAdminGrade.con_AdminGradeId:
return this.adminGradeId;
case clsRsAdminGrade.con_AdminGradeDesc:
return this.adminGradeDesc;
case clsRsAdminGrade.con_ModifyDate:
return this.modifyDate;
case clsRsAdminGrade.con_ModifyUserId:
return this.modifyUserId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RsAdminGrade]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdAdminGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdAdminGrade(): string {return "idAdminGrade";}    //行政职务流水号

 /**
 * 常量:"AdminGradeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminGradeId(): string {return "adminGradeId";}    //行政职务代号

 /**
 * 常量:"AdminGradeDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminGradeDesc(): string {return "adminGradeDesc";}    //行政职务描述

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人
}