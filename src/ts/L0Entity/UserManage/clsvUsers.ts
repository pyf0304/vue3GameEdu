
 /**
 * 类名:clsvUsers
 * 表名:vUsers(01120027)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:49
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
 * v用户(vUsers)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvUsers 
{
public static _CurrTabName= "vUsers"; //当前表名,与该类相关的表名
public static _KeyFldName= "UserId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 36;
public static AttributeName = ["userId", "userName", "userStateId", "userStateName", "password", "isGpUser", "beginYearMonth", "endYearMonth", "idGradeBase", "gradeBaseName", "idXzCollege", "collegeId", "collegeName", "collegeNameA", "idXzMajor", "majorName", "isLeaved", "stuIdTeacherId", "identityId", "identityDesc", "auditDate", "auditUser", "isAudit", "isRegister", "registerDate", "mobilePhone", "updDate", "updUser", "memo", "userNameWithUserId", "openId", "avatarsPicture", "email", "phoneNumber", "headPic", "isGSuser"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public userId = "";    //用户ID
public userName = "";    //用户名
public userStateId = "";    //用户状态Id
public userStateName = "";    //用户状态名
public password = "";    //口令
public isGpUser = false;    //是否Gp用户
public beginYearMonth = "";    //开始年月
public endYearMonth = "";    //结束年月
public idGradeBase = "";    //入学年级流水号
public gradeBaseName = "";    //年级名称
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public collegeName = "";    //学院名称
public collegeNameA = "";    //学院名称简写
public idXzMajor = "";    //专业流水号
public majorName = "";    //专业名称
public isLeaved = false;    //是否离开
public stuIdTeacherId = "";    //学工号
public identityId = "";    //身份Id
public identityDesc = "";    //身份描述
public auditDate = "";    //AuditDate
public auditUser = "";    //AuditUser
public isAudit = false;    //是否审核
public isRegister = false;    //IsRegister
public registerDate = "";    //RegisterDate
public mobilePhone = "";    //手机
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public userNameWithUserId = "";    //UserNameWithUserId
public openId = "";    //微信OpenId
public avatarsPicture = "";    //虚拟头像
public email = "";    //电子邮箱
public phoneNumber = "";    //电话
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
case clsvUsers.con_UserId:
return this.userId;
case clsvUsers.con_UserName:
return this.userName;
case clsvUsers.con_UserStateId:
return this.userStateId;
case clsvUsers.con_UserStateName:
return this.userStateName;
case clsvUsers.con_Password:
return this.password;
case clsvUsers.con_IsGpUser:
return this.isGpUser;
case clsvUsers.con_BeginYearMonth:
return this.beginYearMonth;
case clsvUsers.con_EndYearMonth:
return this.endYearMonth;
case clsvUsers.con_IdGradeBase:
return this.idGradeBase;
case clsvUsers.con_GradeBaseName:
return this.gradeBaseName;
case clsvUsers.con_IdXzCollege:
return this.idXzCollege;
case clsvUsers.con_CollegeId:
return this.collegeId;
case clsvUsers.con_CollegeName:
return this.collegeName;
case clsvUsers.con_CollegeNameA:
return this.collegeNameA;
case clsvUsers.con_IdXzMajor:
return this.idXzMajor;
case clsvUsers.con_MajorName:
return this.majorName;
case clsvUsers.con_IsLeaved:
return this.isLeaved;
case clsvUsers.con_StuIdTeacherId:
return this.stuIdTeacherId;
case clsvUsers.con_IdentityId:
return this.identityId;
case clsvUsers.con_IdentityDesc:
return this.identityDesc;
case clsvUsers.con_AuditDate:
return this.auditDate;
case clsvUsers.con_AuditUser:
return this.auditUser;
case clsvUsers.con_IsAudit:
return this.isAudit;
case clsvUsers.con_IsRegister:
return this.isRegister;
case clsvUsers.con_RegisterDate:
return this.registerDate;
case clsvUsers.con_MobilePhone:
return this.mobilePhone;
case clsvUsers.con_UpdDate:
return this.updDate;
case clsvUsers.con_UpdUser:
return this.updUser;
case clsvUsers.con_Memo:
return this.memo;
case clsvUsers.con_UserNameWithUserId:
return this.userNameWithUserId;
case clsvUsers.con_OpenId:
return this.openId;
case clsvUsers.con_AvatarsPicture:
return this.avatarsPicture;
case clsvUsers.con_Email:
return this.email;
case clsvUsers.con_PhoneNumber:
return this.phoneNumber;
case clsvUsers.con_HeadPic:
return this.headPic;
case clsvUsers.con_IsGSuser:
return this.isGSuser;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vUsers]中不存在!`;
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
 * 常量:"UserStateName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserStateName(): string {return "userStateName";}    //用户状态名

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
 * 常量:"GradeBaseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeBaseName(): string {return "gradeBaseName";}    //年级名称

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"CollegeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeId(): string {return "collegeId";}    //学院ID

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"CollegeNameA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeNameA(): string {return "collegeNameA";}    //学院名称简写

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"MajorName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

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
 * 常量:"UserNameWithUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserNameWithUserId(): string {return "userNameWithUserId";}    //UserNameWithUserId

 /**
 * 常量:"OpenId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OpenId(): string {return "openId";}    //微信OpenId

 /**
 * 常量:"AvatarsPicture"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AvatarsPicture(): string {return "avatarsPicture";}    //虚拟头像

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