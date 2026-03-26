
 /**
 * 类名:clsUsers
 * 表名:Users(01120034)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:48
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
 * 用户(Users)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsUsers 
{
public static _CurrTabName= "Users"; //当前表名,与该类相关的表名
public static _KeyFldName= "UserId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 30;
public static AttributeName = ["userId", "userName", "userStateId", "password", "isGpUser", "idSchool", "beginYearMonth", "endYearMonth", "idGradeBase", "idGrade", "idXzCollege", "idXzMajor", "isLeaved", "stuIdTeacherId", "email", "phoneNumber", "avatarsPicture", "identityId", "auditDate", "auditUser", "isAudit", "isRegister", "registerDate", "mobilePhone", "openId", "updDate", "updUser", "memo", "headPic", "isGSuser"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public userId = "";    //用户ID
public userName = "";    //用户名
public userStateId = "";    //用户状态Id
public password = "";    //口令
public isGpUser = false;    //是否Gp用户
public idSchool = "";    //学校流水号
public beginYearMonth = "";    //开始年月
public endYearMonth = "";    //结束年月
public idGradeBase = "";    //入学年级流水号
public idGrade = "";    //年级流水号
public idXzCollege = "";    //学院流水号
public idXzMajor = "";    //专业流水号
public isLeaved = false;    //是否离开
public stuIdTeacherId = "";    //学工号
public email = "";    //电子邮箱
public phoneNumber = "";    //电话
public avatarsPicture = "";    //虚拟头像
public identityId = "";    //身份Id
public auditDate = "";    //AuditDate
public auditUser = "";    //AuditUser
public isAudit = false;    //是否审核
public isRegister = false;    //IsRegister
public registerDate = "";    //RegisterDate
public mobilePhone = "";    //手机
public openId = "";    //微信OpenId
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public headPic = "";    //头像
public isGSuser = false;    //是否GS用户

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
case clsUsers.con_UserId:
return this.userId;
case clsUsers.con_UserName:
return this.userName;
case clsUsers.con_UserStateId:
return this.userStateId;
case clsUsers.con_Password:
return this.password;
case clsUsers.con_IsGpUser:
return this.isGpUser;
case clsUsers.con_IdSchool:
return this.idSchool;
case clsUsers.con_BeginYearMonth:
return this.beginYearMonth;
case clsUsers.con_EndYearMonth:
return this.endYearMonth;
case clsUsers.con_IdGradeBase:
return this.idGradeBase;
case clsUsers.con_IdGrade:
return this.idGrade;
case clsUsers.con_IdXzCollege:
return this.idXzCollege;
case clsUsers.con_IdXzMajor:
return this.idXzMajor;
case clsUsers.con_IsLeaved:
return this.isLeaved;
case clsUsers.con_StuIdTeacherId:
return this.stuIdTeacherId;
case clsUsers.con_Email:
return this.email;
case clsUsers.con_PhoneNumber:
return this.phoneNumber;
case clsUsers.con_AvatarsPicture:
return this.avatarsPicture;
case clsUsers.con_IdentityId:
return this.identityId;
case clsUsers.con_AuditDate:
return this.auditDate;
case clsUsers.con_AuditUser:
return this.auditUser;
case clsUsers.con_IsAudit:
return this.isAudit;
case clsUsers.con_IsRegister:
return this.isRegister;
case clsUsers.con_RegisterDate:
return this.registerDate;
case clsUsers.con_MobilePhone:
return this.mobilePhone;
case clsUsers.con_OpenId:
return this.openId;
case clsUsers.con_UpdDate:
return this.updDate;
case clsUsers.con_UpdUser:
return this.updUser;
case clsUsers.con_Memo:
return this.memo;
case clsUsers.con_HeadPic:
return this.headPic;
case clsUsers.con_IsGSuser:
return this.isGSuser;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Users]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"UserName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"UserStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserStateId(): string {return "userStateId";}    //用户状态Id

 /**
 * 常量:"Password"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Password(): string {return "password";}    //口令

 /**
 * 常量:"IsGpUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsGpUser(): string {return "isGpUser";}    //是否Gp用户

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"BeginYearMonth"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BeginYearMonth(): string {return "beginYearMonth";}    //开始年月

 /**
 * 常量:"EndYearMonth"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EndYearMonth(): string {return "endYearMonth";}    //结束年月

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //入学年级流水号

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"IsLeaved"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsLeaved(): string {return "isLeaved";}    //是否离开

 /**
 * 常量:"StuIdTeacherId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuIdTeacherId(): string {return "stuIdTeacherId";}    //学工号

 /**
 * 常量:"Email"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Email(): string {return "email";}    //电子邮箱

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PhoneNumber(): string {return "phoneNumber";}    //电话

 /**
 * 常量:"AvatarsPicture"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AvatarsPicture(): string {return "avatarsPicture";}    //虚拟头像

 /**
 * 常量:"IdentityId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdentityId(): string {return "identityId";}    //身份Id

 /**
 * 常量:"AuditDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AuditDate(): string {return "auditDate";}    //AuditDate

 /**
 * 常量:"AuditUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AuditUser(): string {return "auditUser";}    //AuditUser

 /**
 * 常量:"IsAudit"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAudit(): string {return "isAudit";}    //是否审核

 /**
 * 常量:"IsRegister"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRegister(): string {return "isRegister";}    //IsRegister

 /**
 * 常量:"RegisterDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RegisterDate(): string {return "registerDate";}    //RegisterDate

 /**
 * 常量:"MobilePhone"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MobilePhone(): string {return "mobilePhone";}    //手机

 /**
 * 常量:"OpenId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OpenId(): string {return "openId";}    //微信OpenId

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

 /**
 * 常量:"HeadPic"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_HeadPic(): string {return "headPic";}    //头像

 /**
 * 常量:"IsGSuser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsGSuser(): string {return "isGSuser";}    //是否GS用户
}