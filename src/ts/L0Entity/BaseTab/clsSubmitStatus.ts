
 /**
 * 类名:clsSubmitStatus
 * 表名:SubmitStatus(01120970)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:30:37
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本表(BaseTab)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 送审状态(SubmitStatus)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsSubmitStatus 
{
public static _CurrTabName= "SubmitStatus"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdSubmitStatus"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["idSubmitStatus", "submitStatusDesc", "submitStatusEnDesc", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idSubmitStatus = "";    //送审状态流水号
public submitStatusDesc = "";    //送审状态流描述
public submitStatusEnDesc = "";    //送审状态流英文描述
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
case clsSubmitStatus.con_IdSubmitStatus:
return this.idSubmitStatus;
case clsSubmitStatus.con_SubmitStatusDesc:
return this.submitStatusDesc;
case clsSubmitStatus.con_SubmitStatusEnDesc:
return this.submitStatusEnDesc;
case clsSubmitStatus.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SubmitStatus]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdSubmitStatus"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSubmitStatus(): string {return "idSubmitStatus";}    //送审状态流水号

 /**
 * 常量:"SubmitStatusDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SubmitStatusDesc(): string {return "submitStatusDesc";}    //送审状态流描述

 /**
 * 常量:"SubmitStatusEnDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SubmitStatusEnDesc(): string {return "submitStatusEnDesc";}    //送审状态流英文描述

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}