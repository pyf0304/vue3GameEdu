
 /**
 * 类名:clsvQxUserRoleRelation
 * 表名:vQxUserRoleRelation(01120257)
 * 版本:2024.01.29.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/01 11:07:48
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:权限管理(UsersRight)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * vQx用户角色关系(vQxUserRoleRelation)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvQxUserRoleRelation 
{
public static _CurrTabName= "vQxUserRoleRelation"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["mId", "userId", "roleId", "qxPrjId", "memo", "prjName", "roleName", "userName", "departmentId", "userStateId", "departmentName", "userStateName", "identityDesc", "identityId", "stuTeacherId", "collegeName", "idXzCollege", "password"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public userId = "";    //用户ID
public roleId = "";    //角色Id
public qxPrjId = "";    //QxPrjId
public memo = "";    //备注
public prjName = "";    //PrjName
public roleName = "";    //角色名
public userName = "";    //用户名
public departmentId = "";    //部门Id
public userStateId = "";    //用户状态Id
public departmentName = "";    //部门名称
public userStateName = "";    //用户状态名
public identityDesc = "";    //身份描述
public identityId = "";    //身份Id
public stuTeacherId = "";    //学工号
public collegeName = "";    //学院名称
public idXzCollege = "";    //学院流水号
public password = "";    //口令

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
case clsvQxUserRoleRelation.con_mId:
return this.mId;
case clsvQxUserRoleRelation.con_UserId:
return this.userId;
case clsvQxUserRoleRelation.con_RoleId:
return this.roleId;
case clsvQxUserRoleRelation.con_QxPrjId:
return this.qxPrjId;
case clsvQxUserRoleRelation.con_Memo:
return this.memo;
case clsvQxUserRoleRelation.con_PrjName:
return this.prjName;
case clsvQxUserRoleRelation.con_RoleName:
return this.roleName;
case clsvQxUserRoleRelation.con_UserName:
return this.userName;
case clsvQxUserRoleRelation.con_DepartmentId:
return this.departmentId;
case clsvQxUserRoleRelation.con_UserStateId:
return this.userStateId;
case clsvQxUserRoleRelation.con_DepartmentName:
return this.departmentName;
case clsvQxUserRoleRelation.con_UserStateName:
return this.userStateName;
case clsvQxUserRoleRelation.con_IdentityDesc:
return this.identityDesc;
case clsvQxUserRoleRelation.con_IdentityId:
return this.identityId;
case clsvQxUserRoleRelation.con_StuTeacherId:
return this.stuTeacherId;
case clsvQxUserRoleRelation.con_CollegeName:
return this.collegeName;
case clsvQxUserRoleRelation.con_IdXzCollege:
return this.idXzCollege;
case clsvQxUserRoleRelation.con_Password:
return this.password;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUserRoleRelation]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"mId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"RoleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleId(): string {return "roleId";}    //角色Id

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //QxPrjId

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"PrjName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PrjName(): string {return "prjName";}    //PrjName

 /**
 * 常量:"RoleName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleName(): string {return "roleName";}    //角色名

 /**
 * 常量:"UserName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"DepartmentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DepartmentId(): string {return "departmentId";}    //部门Id

 /**
 * 常量:"UserStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserStateId(): string {return "userStateId";}    //用户状态Id

 /**
 * 常量:"DepartmentName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DepartmentName(): string {return "departmentName";}    //部门名称

 /**
 * 常量:"UserStateName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserStateName(): string {return "userStateName";}    //用户状态名

 /**
 * 常量:"IdentityDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdentityDesc(): string {return "identityDesc";}    //身份描述

 /**
 * 常量:"IdentityId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdentityId(): string {return "identityId";}    //身份Id

 /**
 * 常量:"StuTeacherId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuTeacherId(): string {return "stuTeacherId";}    //学工号

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"Password"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Password(): string {return "password";}    //口令
}