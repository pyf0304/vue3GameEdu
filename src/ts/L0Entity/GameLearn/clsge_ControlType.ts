
 /**
 * 类名:clsge_ControlType
 * 表名:ge_ControlType(01120900)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:05
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
 * 控件类型(ge_ControlType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_ControlType 
{
public static _CurrTabName= "ge_ControlType"; //当前表名,与该类相关的表名
public static _KeyFldName= "ControlTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["controlTypeId", "controlTypeName", "controlTypeEnName", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public controlTypeId = "";    //控件Id
public controlTypeName = "";    //控件名称
public controlTypeEnName = "";    //控件英文名称
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
case clsge_ControlType.con_ControlTypeId:
return this.controlTypeId;
case clsge_ControlType.con_ControlTypeName:
return this.controlTypeName;
case clsge_ControlType.con_ControlTypeEnName:
return this.controlTypeEnName;
case clsge_ControlType.con_UpdDate:
return this.updDate;
case clsge_ControlType.con_UpdUser:
return this.updUser;
case clsge_ControlType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_ControlType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"ControlTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlTypeId(): string {return "controlTypeId";}    //控件Id

 /**
 * 常量:"ControlTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlTypeName(): string {return "controlTypeName";}    //控件名称

 /**
 * 常量:"ControlTypeEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlTypeEnName(): string {return "controlTypeEnName";}    //控件英文名称

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