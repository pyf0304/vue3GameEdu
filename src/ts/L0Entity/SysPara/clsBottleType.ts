
 /**
 * 类名:clsBottleType
 * 表名:BottleType(01120990)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/10 23:08:05
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
 * 瓶子类型(BottleType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsBottleType 
{
public static _CurrTabName= "BottleType"; //当前表名,与该类相关的表名
public static _KeyFldName= "BottleTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["bottleTypeId", "bottleTypeName", "bottleTypeEnName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public bottleTypeId = "";    //瓶子类型Id
public bottleTypeName = "";    //瓶子类型名
public bottleTypeEnName = "";    //瓶子类型英文名
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
case clsBottleType.con_BottleTypeId:
return this.bottleTypeId;
case clsBottleType.con_BottleTypeName:
return this.bottleTypeName;
case clsBottleType.con_BottleTypeEnName:
return this.bottleTypeEnName;
case clsBottleType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[BottleType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"BottleTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BottleTypeId(): string {return "bottleTypeId";}    //瓶子类型Id

 /**
 * 常量:"BottleTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BottleTypeName(): string {return "bottleTypeName";}    //瓶子类型名

 /**
 * 常量:"BottleTypeEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BottleTypeEnName(): string {return "bottleTypeEnName";}    //瓶子类型英文名

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumBottleType
{
 /**
 * 智慧瓶
 **/
static readonly SmartBottle_01 = "01";
 /**
 * 求知瓶
 **/
static readonly KnowledgeBottle_02 = "02";
}