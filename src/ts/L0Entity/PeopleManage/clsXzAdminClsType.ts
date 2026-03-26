
 /**
 * 类名:clsXzAdminClsType
 * 表名:XzAdminClsType(01120195)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:24:23
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:人员管理(PeopleManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 行政班类型(XzAdminClsType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsXzAdminClsType 
{
public static _CurrTabName= "XzAdminClsType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdAdminClsType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["idAdminClsType", "adminClsTypeId", "adminClsTypeName", "adminClsTypeENName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idAdminClsType = "";    //行政班级类型流水号
public adminClsTypeId = "";    //行政班级类型ID
public adminClsTypeName = "";    //行政班级类型名称
public adminClsTypeENName = "";    //行政班级类型英文名
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
case clsXzAdminClsType.con_IdAdminClsType:
return this.idAdminClsType;
case clsXzAdminClsType.con_AdminClsTypeId:
return this.adminClsTypeId;
case clsXzAdminClsType.con_AdminClsTypeName:
return this.adminClsTypeName;
case clsXzAdminClsType.con_AdminClsTypeENName:
return this.adminClsTypeENName;
case clsXzAdminClsType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzAdminClsType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdAdminClsType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdAdminClsType(): string {return "idAdminClsType";}    //行政班级类型流水号

 /**
 * 常量:"AdminClsTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminClsTypeId(): string {return "adminClsTypeId";}    //行政班级类型ID

 /**
 * 常量:"AdminClsTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminClsTypeName(): string {return "adminClsTypeName";}    //行政班级类型名称

 /**
 * 常量:"AdminClsTypeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminClsTypeENName(): string {return "adminClsTypeENName";}    //行政班级类型英文名

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumXzAdminClsType
{
 /**
 * 普通班
 **/
static readonly RegularClass_0001 = "0001";
 /**
 * 成人班
 **/
static readonly AdultClass_0002 = "0002";
 /**
 * 中小学
 **/
static readonly PrimaryandSecondarySchool_0003 = "0003";
 /**
 * 特殊班
 **/
static readonly SpecialClass_0004 = "0004";
}