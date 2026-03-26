
 /**
 * 类名:clsContentType
 * 表名:ContentType(01120211)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:25:39
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
 * 内容类型(ContentType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsContentType 
{
public static _CurrTabName= "ContentType"; //当前表名,与该类相关的表名
public static _KeyFldName= "ContentTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["contentTypeId", "contentTypeName", "tableName", "fldName", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public contentTypeId = "";    //内容类型Id
public contentTypeName = "";    //内容类型名
public tableName = "";    //主表表名
public fldName = "";    //字段名
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
case clsContentType.con_ContentTypeId:
return this.contentTypeId;
case clsContentType.con_ContentTypeName:
return this.contentTypeName;
case clsContentType.con_TableName:
return this.tableName;
case clsContentType.con_FldName:
return this.fldName;
case clsContentType.con_UpdDate:
return this.updDate;
case clsContentType.con_UpdUser:
return this.updUser;
case clsContentType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ContentType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"ContentTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ContentTypeId(): string {return "contentTypeId";}    //内容类型Id

 /**
 * 常量:"ContentTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ContentTypeName(): string {return "contentTypeName";}    //内容类型名

 /**
 * 常量:"TableName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TableName(): string {return "tableName";}    //主表表名

 /**
 * 常量:"FldName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FldName(): string {return "fldName";}    //字段名

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