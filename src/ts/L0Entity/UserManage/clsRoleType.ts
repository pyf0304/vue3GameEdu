
 /**
 * 类名:clsRoleType
 * 表名:RoleType(01120994)
 * 版本:2025.02.18.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/24 02:44:45
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
 * 角色类型(RoleType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsRoleType 
{
public static _CurrTabName= "RoleType"; //当前表名,与该类相关的表名
public static _KeyFldName= "RoleTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["roleTypeId", "roleTypeName", "roleTypeEnName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public roleTypeId = "";    //角色类型Id
public roleTypeName = "";    //角色类型名
public roleTypeEnName = "";    //角色类型英文名
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
case clsRoleType.con_RoleTypeId:
return this.roleTypeId;
case clsRoleType.con_RoleTypeName:
return this.roleTypeName;
case clsRoleType.con_RoleTypeEnName:
return this.roleTypeEnName;
case clsRoleType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RoleType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"RoleTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleTypeId(): string {return "roleTypeId";}    //角色类型Id

 /**
 * 常量:"RoleTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleTypeName(): string {return "roleTypeName";}    //角色类型名

 /**
 * 常量:"RoleTypeEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleTypeEnName(): string {return "roleTypeEnName";}    //角色类型英文名

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
 export class enumRoleType
{
 /**
 * 教师
 **/
static readonly Teacher_01 = "01";
 /**
 * 学生
 **/
static readonly Student_02 = "02";
 /**
 * 教师or学生
 **/
static readonly TeacherOrStudent_03 = "03";
}