
 /**
 * 类名:clsRsEthnic
 * 表名:RsEthnic(01120105)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:29:44
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
 * 民族(RsEthnic)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsRsEthnic 
{
public static _CurrTabName= "RsEthnic"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEthnic"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["idEthnic", "ethnicId", "ethnicName", "modifyDate", "modifyUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idEthnic = "";    //民族流水号
public ethnicId = "";    //民族Id
public ethnicName = "";    //民族名称
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
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
case clsRsEthnic.con_IdEthnic:
return this.idEthnic;
case clsRsEthnic.con_EthnicId:
return this.ethnicId;
case clsRsEthnic.con_EthnicName:
return this.ethnicName;
case clsRsEthnic.con_ModifyDate:
return this.modifyDate;
case clsRsEthnic.con_ModifyUserId:
return this.modifyUserId;
case clsRsEthnic.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RsEthnic]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdEthnic"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEthnic(): string {return "idEthnic";}    //民族流水号

 /**
 * 常量:"EthnicId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EthnicId(): string {return "ethnicId";}    //民族Id

 /**
 * 常量:"EthnicName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EthnicName(): string {return "ethnicName";}    //民族名称

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}