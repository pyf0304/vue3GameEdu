
 /**
 * 类名:clsClsRmType
 * 表名:ClsRmType(01120576)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:25:52
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 教室类型(ClsRmType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsClsRmType 
{
public static _CurrTabName= "ClsRmType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdClassRoomType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["idClassRoomType", "classRoomTypeID", "classRoomTypeDesc", "classRoomTypeDescA", "modifyUserId", "modifyDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idClassRoomType = "";    //教室类型流水号
public classRoomTypeID = "";    //教室类型代号
public classRoomTypeDesc = "";    //教室类型描述
public classRoomTypeDescA = "";    //教室类型简称
public modifyUserId = "";    //修改人
public modifyDate = "";    //修改日期
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
case clsClsRmType.con_IdClassRoomType:
return this.idClassRoomType;
case clsClsRmType.con_ClassRoomTypeID:
return this.classRoomTypeID;
case clsClsRmType.con_ClassRoomTypeDesc:
return this.classRoomTypeDesc;
case clsClsRmType.con_ClassRoomTypeDescA:
return this.classRoomTypeDescA;
case clsClsRmType.con_ModifyUserId:
return this.modifyUserId;
case clsClsRmType.con_ModifyDate:
return this.modifyDate;
case clsClsRmType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ClsRmType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdClassRoomType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdClassRoomType(): string {return "idClassRoomType";}    //教室类型流水号

 /**
 * 常量:"ClassRoomTypeID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClassRoomTypeID(): string {return "classRoomTypeID";}    //教室类型代号

 /**
 * 常量:"ClassRoomTypeDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClassRoomTypeDesc(): string {return "classRoomTypeDesc";}    //教室类型描述

 /**
 * 常量:"ClassRoomTypeDescA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClassRoomTypeDescA(): string {return "classRoomTypeDescA";}    //教室类型简称

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}