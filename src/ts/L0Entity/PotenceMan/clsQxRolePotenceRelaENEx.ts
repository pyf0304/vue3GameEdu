
 /**
 * 类名:clsQxRolePotenceRelaENEx
 * 表名:QxRolePotenceRela(00140123)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:45:37
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 角色权限关系(QxRolePotenceRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQxRolePotenceRelaEN } from "@/ts/L0Entity/PotenceMan/clsQxRolePotenceRelaEN";

export class  clsQxRolePotenceRelaENEx extends clsQxRolePotenceRelaEN
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
case clsQxRolePotenceRelaENEx.con_RoleName:
return this.roleName;
case clsQxRolePotenceRelaENEx.con_PotenceName:
return this.potenceName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"RoleName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_RoleName(): string {return "roleName";}    //角色名称

 /**
 * 常量:"PotenceName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_PotenceName(): string {return "potenceName";}    //权限名称

public roleName = "";    //角色名称
public potenceName = "";    //权限名称
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsQxRolePotenceRelaENEx();
const instance = new clsQxRolePotenceRelaENEx();
return instance.hasOwnProperty(propName);
}
}