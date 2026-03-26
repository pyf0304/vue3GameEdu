
 /**
 * 类名:clsRsProfGrade
 * 表名:RsProfGrade(01120104)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:29:39
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
 * 专业职称(RsProfGrade)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsRsProfGrade 
{
public static _CurrTabName= "RsProfGrade"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdProfGrade"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["idProfGrade", "profenssionalGradeId", "profenssionalGradeName", "modifyDate", "modifyUserId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idProfGrade = "";    //专业职称流水号
public profenssionalGradeId = "";    //专业职称ID
public profenssionalGradeName = "";    //专业职称
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
case clsRsProfGrade.con_IdProfGrade:
return this.idProfGrade;
case clsRsProfGrade.con_ProfenssionalGradeId:
return this.profenssionalGradeId;
case clsRsProfGrade.con_ProfenssionalGradeName:
return this.profenssionalGradeName;
case clsRsProfGrade.con_ModifyDate:
return this.modifyDate;
case clsRsProfGrade.con_ModifyUserId:
return this.modifyUserId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RsProfGrade]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdProfGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdProfGrade(): string {return "idProfGrade";}    //专业职称流水号

 /**
 * 常量:"ProfenssionalGradeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ProfenssionalGradeId(): string {return "profenssionalGradeId";}    //专业职称ID

 /**
 * 常量:"ProfenssionalGradeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ProfenssionalGradeName(): string {return "profenssionalGradeName";}    //专业职称

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