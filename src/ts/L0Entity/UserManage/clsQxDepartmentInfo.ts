
 /**
 * 类名:clsQxDepartmentInfo
 * 表名:QxDepartmentInfo(01120924)
 * 版本:2024.11.13.2(服务器:WIN-SRV103-116)
 * 日期:2024/11/14 03:58:58
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 部门(QxDepartmentInfo)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQxDepartmentInfo 
{
public static _CurrTabName= "QxDepartmentInfo"; //当前表名,与该类相关的表名
public static _KeyFldName= "DepartmentId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["departmentId", "departmentName", "departmentAbbrName", "departmentTypeId", "upDepartmentId", "orderNum", "inUse", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public departmentId = "";    //部门Id
public departmentName = "";    //部门名称
public departmentAbbrName = "";    //DepartmentAbbrName
public departmentTypeId = "";    //DepartmentTypeId
public upDepartmentId = "";    //UpDepartmentId
public orderNum = 0;    //序号
public inUse = false;    //是否在用
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
case clsQxDepartmentInfo.con_DepartmentId:
return this.departmentId;
case clsQxDepartmentInfo.con_DepartmentName:
return this.departmentName;
case clsQxDepartmentInfo.con_DepartmentAbbrName:
return this.departmentAbbrName;
case clsQxDepartmentInfo.con_DepartmentTypeId:
return this.departmentTypeId;
case clsQxDepartmentInfo.con_UpDepartmentId:
return this.upDepartmentId;
case clsQxDepartmentInfo.con_OrderNum:
return this.orderNum;
case clsQxDepartmentInfo.con_InUse:
return this.inUse;
case clsQxDepartmentInfo.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxDepartmentInfo]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"DepartmentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DepartmentId(): string {return "departmentId";}    //部门Id

 /**
 * 常量:"DepartmentName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DepartmentName(): string {return "departmentName";}    //部门名称

 /**
 * 常量:"DepartmentAbbrName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DepartmentAbbrName(): string {return "departmentAbbrName";}    //DepartmentAbbrName

 /**
 * 常量:"DepartmentTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DepartmentTypeId(): string {return "departmentTypeId";}    //DepartmentTypeId

 /**
 * 常量:"UpDepartmentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpDepartmentId(): string {return "upDepartmentId";}    //UpDepartmentId

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"InUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}