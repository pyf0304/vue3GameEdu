
 /**
 * 类名:clsCmPrjIdUserIdRela
 * 表名:CmPrjIdUserIdRela(01120946)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 01:56:22
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * Cm项目Id用户关系(CmPrjIdUserIdRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsCmPrjIdUserIdRela 
{
public static _CurrTabName= "CmPrjIdUserIdRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "CmPrjId,UserId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["cmPrjId", "userId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public cmPrjId = "";    //CM工程Id
public userId = "";    //用户ID
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
case clsCmPrjIdUserIdRela.con_CmPrjId:
return this.cmPrjId;
case clsCmPrjIdUserIdRela.con_UserId:
return this.userId;
case clsCmPrjIdUserIdRela.con_UpdDate:
return this.updDate;
case clsCmPrjIdUserIdRela.con_UpdUser:
return this.updUser;
case clsCmPrjIdUserIdRela.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CmPrjIdUserIdRela]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"CmPrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CmPrjId(): string {return "cmPrjId";}    //CM工程Id

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

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