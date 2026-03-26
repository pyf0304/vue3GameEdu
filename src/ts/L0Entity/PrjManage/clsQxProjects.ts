
 /**
 * 类名:clsQxProjects
 * 表名:QxProjects(01120921)
 * 版本:2024.11.13.2(服务器:WIN-SRV103-116)
 * 日期:2024/11/14 03:59:03
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:工程管理(PrjManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 工程(QxProjects)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQxProjects 
{
public static _CurrTabName= "QxProjects"; //当前表名,与该类相关的表名
public static _KeyFldName= "QxPrjId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["qxPrjId", "prjName", "prjDomain", "isDefaultPrj", "qxPrjDataBaseId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public qxPrjId = "";    //QxPrjId
public prjName = "";    //PrjName
public prjDomain = "";    //PrjDomain
public isDefaultPrj = false;    //IsDefaultPrj
public qxPrjDataBaseId = "";    //项目数据库Id
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
case clsQxProjects.con_QxPrjId:
return this.qxPrjId;
case clsQxProjects.con_PrjName:
return this.prjName;
case clsQxProjects.con_PrjDomain:
return this.prjDomain;
case clsQxProjects.con_IsDefaultPrj:
return this.isDefaultPrj;
case clsQxProjects.con_QxPrjDataBaseId:
return this.qxPrjDataBaseId;
case clsQxProjects.con_UpdDate:
return this.updDate;
case clsQxProjects.con_UpdUser:
return this.updUser;
case clsQxProjects.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxProjects]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //QxPrjId

 /**
 * 常量:"PrjName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PrjName(): string {return "prjName";}    //PrjName

 /**
 * 常量:"PrjDomain"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PrjDomain(): string {return "prjDomain";}    //PrjDomain

 /**
 * 常量:"IsDefaultPrj"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDefaultPrj(): string {return "isDefaultPrj";}    //IsDefaultPrj

 /**
 * 常量:"QxPrjDataBaseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QxPrjDataBaseId(): string {return "qxPrjDataBaseId";}    //项目数据库Id

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