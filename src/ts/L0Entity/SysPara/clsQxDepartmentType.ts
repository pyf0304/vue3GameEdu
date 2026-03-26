
 /**
 * 类名:clsQxDepartmentType
 * 表名:QxDepartmentType(01120925)
 * 版本:2024.11.13.2(服务器:WIN-SRV103-116)
 * 日期:2024/11/14 03:59:00
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 部门类型(QxDepartmentType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQxDepartmentType 
{
public static _CurrTabName= "QxDepartmentType"; //当前表名,与该类相关的表名
public static _KeyFldName= "DepartmentTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 3;
public static AttributeName = ["departmentTypeId", "departmentTypeName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public departmentTypeId = "";    //DepartmentTypeId
public departmentTypeName = "";    //DepartmentTypeName
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
case clsQxDepartmentType.con_DepartmentTypeId:
return this.departmentTypeId;
case clsQxDepartmentType.con_DepartmentTypeName:
return this.departmentTypeName;
case clsQxDepartmentType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxDepartmentType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"DepartmentTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DepartmentTypeId(): string {return "departmentTypeId";}    //DepartmentTypeId

 /**
 * 常量:"DepartmentTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DepartmentTypeName(): string {return "departmentTypeName";}    //DepartmentTypeName

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}