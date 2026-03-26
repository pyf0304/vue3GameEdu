
 /**
 * 类名:clsSysDefaValName
 * 表名:SysDefaValName(01120936)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:30:18
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日志管理(LogManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * SysDefaValName(SysDefaValName)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsSysDefaValName 
{
public static _CurrTabName= "SysDefaValName"; //当前表名,与该类相关的表名
public static _KeyFldName= "DefaValNameId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 3;
public static AttributeName = ["defaValNameId", "defaValName", "sysDefaValue"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public defaValNameId = "";    //缺省值名称Id
public defaValName = "";    //缺省值名称
public sysDefaValue = "";    //SysDefaValue

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
case clsSysDefaValName.con_DefaValNameId:
return this.defaValNameId;
case clsSysDefaValName.con_DefaValName:
return this.defaValName;
case clsSysDefaValName.con_SysDefaValue:
return this.sysDefaValue;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SysDefaValName]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"DefaValNameId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DefaValNameId(): string {return "defaValNameId";}    //缺省值名称Id

 /**
 * 常量:"DefaValName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DefaValName(): string {return "defaValName";}    //缺省值名称

 /**
 * 常量:"SysDefaValue"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SysDefaValue(): string {return "sysDefaValue";}    //SysDefaValue
}