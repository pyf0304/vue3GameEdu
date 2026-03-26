
 /**
 * 类名:clsRsStaffType
 * 表名:RsStaffType(01120101)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:30:04
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
 * 职工类型(RsStaffType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsRsStaffType 
{
public static _CurrTabName= "RsStaffType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStaffType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["idStaffType", "staffTypeId", "staffTypeName", "modifyDate", "modifyUserId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idStaffType = "";    //职工类型流水号
public staffTypeId = "";    //职工类型Id
public staffTypeName = "";    //职工类型名称
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
case clsRsStaffType.con_IdStaffType:
return this.idStaffType;
case clsRsStaffType.con_StaffTypeId:
return this.staffTypeId;
case clsRsStaffType.con_StaffTypeName:
return this.staffTypeName;
case clsRsStaffType.con_ModifyDate:
return this.modifyDate;
case clsRsStaffType.con_ModifyUserId:
return this.modifyUserId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RsStaffType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdStaffType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStaffType(): string {return "idStaffType";}    //职工类型流水号

 /**
 * 常量:"StaffTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StaffTypeId(): string {return "staffTypeId";}    //职工类型Id

 /**
 * 常量:"StaffTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StaffTypeName(): string {return "staffTypeName";}    //职工类型名称

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