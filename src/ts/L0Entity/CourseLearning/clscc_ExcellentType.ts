
 /**
 * 类名:clscc_ExcellentType
 * 表名:cc_ExcellentType(01120062)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:25:56
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 精品课程类型(cc_ExcellentType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_ExcellentType 
{
public static _CurrTabName= "cc_ExcellentType"; //当前表名,与该类相关的表名
public static _KeyFldName= "ExcellentTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["excellentTypeId", "excellentTypeName", "idSchool", "isUse", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public excellentTypeId = "";    //精品课程类型Id
public excellentTypeName = "";    //精品课程类型名称
public idSchool = "";    //学校流水号
public isUse = false;    //是否使用
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
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
case clscc_ExcellentType.con_ExcellentTypeId:
return this.excellentTypeId;
case clscc_ExcellentType.con_ExcellentTypeName:
return this.excellentTypeName;
case clscc_ExcellentType.con_IdSchool:
return this.idSchool;
case clscc_ExcellentType.con_IsUse:
return this.isUse;
case clscc_ExcellentType.con_UpdDate:
return this.updDate;
case clscc_ExcellentType.con_UpdUserId:
return this.updUserId;
case clscc_ExcellentType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_ExcellentType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"ExcellentTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExcellentTypeId(): string {return "excellentTypeId";}    //精品课程类型Id

 /**
 * 常量:"ExcellentTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExcellentTypeName(): string {return "excellentTypeName";}    //精品课程类型名称

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"IsUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsUse(): string {return "isUse";}    //是否使用

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}