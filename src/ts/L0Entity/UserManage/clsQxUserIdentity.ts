
 /**
 * 类名:clsQxUserIdentity
 * 表名:QxUserIdentity(01120922)
 * 版本:2024.11.13.2(服务器:WIN-SRV103-116)
 * 日期:2024/11/14 03:59:08
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 用户权限身份(QxUserIdentity)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQxUserIdentity 
{
public static _CurrTabName= "QxUserIdentity"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdentityId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["identityId", "identityDesc", "identityEnName", "userType", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public identityId = "";    //身份Id
public identityDesc = "";    //身份描述
public identityEnName = "";    //身份英文名
public userType = "";    //用户类型
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
case clsQxUserIdentity.con_IdentityId:
return this.identityId;
case clsQxUserIdentity.con_IdentityDesc:
return this.identityDesc;
case clsQxUserIdentity.con_IdentityEnName:
return this.identityEnName;
case clsQxUserIdentity.con_UserType:
return this.userType;
case clsQxUserIdentity.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxUserIdentity]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdentityId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdentityId(): string {return "identityId";}    //身份Id

 /**
 * 常量:"IdentityDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdentityDesc(): string {return "identityDesc";}    //身份描述

 /**
 * 常量:"IdentityEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdentityEnName(): string {return "identityEnName";}    //身份英文名

 /**
 * 常量:"UserType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserType(): string {return "userType";}    //用户类型

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
 export class enumQxUserIdentity
{
 /**
 * 未知
 **/
static readonly Unknown_00 = "00";
 /**
 * 大学管理员
 **/
static readonly University_Administrator_01 = "01";
 /**
 * 中学管理员
 **/
static readonly Secondary_School_Administrator_02 = "02";
 /**
 * 大学教师
 **/
static readonly University_Teacher_03 = "03";
 /**
 * 大学学生(包括研究生)
 **/
static readonly University_Student_04 = "04";
 /**
 * 公司员工
 **/
static readonly Company_Employee_05 = "05";
 /**
 * 公司管理
 **/
static readonly Company_Management_06 = "06";
 /**
 * 中小学教师
 **/
static readonly K_12_Teacher_07 = "07";
 /**
 * 中小学学生
 **/
static readonly K_12_Student_08 = "08";
}