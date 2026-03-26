
 /**
 * 类名:clsRsPolitics
 * 表名:RsPolitics(01120110)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:29:29
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
 * 政治面貌(RsPolitics)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsRsPolitics 
{
public static _CurrTabName= "RsPolitics"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdPolitics"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["idPolitics", "politicsId", "politicsName", "politicsIdNgb", "politicsRecruitId", "modifyDate", "modifyUserId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idPolitics = "";    //政治面貌流水号
public politicsId = "";    //政治面貌Id
public politicsName = "";    //政治面貌
public politicsIdNgb = "";    //PoliticsId_NGB
public politicsRecruitId = "";    //PoliticsRecruitId
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人

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
case clsRsPolitics.con_IdPolitics:
return this.idPolitics;
case clsRsPolitics.con_PoliticsId:
return this.politicsId;
case clsRsPolitics.con_PoliticsName:
return this.politicsName;
case clsRsPolitics.con_PoliticsIdNgb:
return this.politicsIdNgb;
case clsRsPolitics.con_PoliticsRecruitId:
return this.politicsRecruitId;
case clsRsPolitics.con_ModifyDate:
return this.modifyDate;
case clsRsPolitics.con_ModifyUserId:
return this.modifyUserId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RsPolitics]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdPolitics"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdPolitics(): string {return "idPolitics";}    //政治面貌流水号

 /**
 * 常量:"PoliticsId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PoliticsId(): string {return "politicsId";}    //政治面貌Id

 /**
 * 常量:"PoliticsName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PoliticsName(): string {return "politicsName";}    //政治面貌

 /**
 * 常量:"PoliticsIdNgb"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PoliticsIdNgb(): string {return "politicsIdNgb";}    //PoliticsId_NGB

 /**
 * 常量:"PoliticsRecruitId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PoliticsRecruitId(): string {return "politicsRecruitId";}    //PoliticsRecruitId

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
}