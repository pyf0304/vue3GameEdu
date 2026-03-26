
 /**
 * 类名:clsge_OperationType
 * 表名:ge_OperationType(01120911)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/12 12:43:21
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 操作类型(ge_OperationType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_OperationType 
{
public static _CurrTabName= "ge_OperationType"; //当前表名,与该类相关的表名
public static _KeyFldName= "OperationTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["operationTypeId", "operationTypeName", "operationTypeEnName", "updUser", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public operationTypeId = "";    //操作类型ID
public operationTypeName = "";    //操作类型名
public operationTypeEnName = "";    //OperationTypeEnName
public updUser = "";    //修改人
public updDate = "";    //修改日期
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
case clsge_OperationType.con_OperationTypeId:
return this.operationTypeId;
case clsge_OperationType.con_OperationTypeName:
return this.operationTypeName;
case clsge_OperationType.con_OperationTypeEnName:
return this.operationTypeEnName;
case clsge_OperationType.con_UpdUser:
return this.updUser;
case clsge_OperationType.con_UpdDate:
return this.updDate;
case clsge_OperationType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_OperationType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"OperationTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OperationTypeId(): string {return "operationTypeId";}    //操作类型ID

 /**
 * 常量:"OperationTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OperationTypeName(): string {return "operationTypeName";}    //操作类型名

 /**
 * 常量:"OperationTypeEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OperationTypeEnName(): string {return "operationTypeEnName";}    //OperationTypeEnName

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}