
 /**
 * 类名:clsQxUsers
 * 表名:QxUsers(01120258)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:39
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * Qx用户(QxUsers)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQxUsers 
{
public static _CurrTabName= "QxUsers"; //当前表名,与该类相关的表名
public static _KeyFldName= "UserId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 20;
public static AttributeName = ["userId", "userName", "idXzCollege", "userStateId", "idGradeBase", "password", "idSchool", "email", "phoneNumber", "effitiveBeginDate", "effitiveEndDate", "stuTeacherId", "identityId", "openId", "updDate", "updUser", "isSynch", "synchDate", "isArchive", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public userId = "";    //用户ID
public userName = "";    //用户名
public idXzCollege = "";    //学院流水号
public userStateId = "";    //用户状态Id
public idGradeBase = "";    //入学年级流水号
public password = "";    //口令
public idSchool = "";    //学校流水号
public email = "";    //电子邮箱
public phoneNumber = "";    //电话
public effitiveBeginDate = "";    //有效开始日期
public effitiveEndDate = "";    //有效结束日期
public stuTeacherId = "";    //学工号
public identityId = "";    //身份Id
public openId = "";    //微信OpenId
public updDate = "";    //修改日期
public updUser = "";    //修改人
public isSynch = false;    //是否同步
public synchDate = "";    //同步日期
public isArchive = false;    //是否归档
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
case clsQxUsers.con_UserId:
return this.userId;
case clsQxUsers.con_UserName:
return this.userName;
case clsQxUsers.con_IdXzCollege:
return this.idXzCollege;
case clsQxUsers.con_UserStateId:
return this.userStateId;
case clsQxUsers.con_IdGradeBase:
return this.idGradeBase;
case clsQxUsers.con_Password:
return this.password;
case clsQxUsers.con_IdSchool:
return this.idSchool;
case clsQxUsers.con_Email:
return this.email;
case clsQxUsers.con_PhoneNumber:
return this.phoneNumber;
case clsQxUsers.con_EffitiveBeginDate:
return this.effitiveBeginDate;
case clsQxUsers.con_EffitiveEndDate:
return this.effitiveEndDate;
case clsQxUsers.con_StuTeacherId:
return this.stuTeacherId;
case clsQxUsers.con_IdentityId:
return this.identityId;
case clsQxUsers.con_OpenId:
return this.openId;
case clsQxUsers.con_UpdDate:
return this.updDate;
case clsQxUsers.con_UpdUser:
return this.updUser;
case clsQxUsers.con_IsSynch:
return this.isSynch;
case clsQxUsers.con_SynchDate:
return this.synchDate;
case clsQxUsers.con_IsArchive:
return this.isArchive;
case clsQxUsers.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxUsers]中不存在!`;
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
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"UserStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserStateId(): string {return "userStateId";}    //用户状态Id

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //入学年级流水号

 /**
 * 常量:"Password"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Password(): string {return "password";}    //口令

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

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
 * 常量:"EffitiveBeginDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EffitiveBeginDate(): string {return "effitiveBeginDate";}    //有效开始日期

 /**
 * 常量:"EffitiveEndDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EffitiveEndDate(): string {return "effitiveEndDate";}    //有效结束日期

 /**
 * 常量:"StuTeacherId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuTeacherId(): string {return "stuTeacherId";}    //学工号

 /**
 * 常量:"IdentityId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdentityId(): string {return "identityId";}    //身份Id

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
 * 常量:"IsSynch"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSynch(): string {return "isSynch";}    //是否同步

 /**
 * 常量:"SynchDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SynchDate(): string {return "synchDate";}    //同步日期

 /**
 * 常量:"IsArchive"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsArchive(): string {return "isArchive";}    //是否归档

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}