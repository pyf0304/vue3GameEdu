
 /**
 * 类名:clsLoginLog
 * 表名:LoginLog(01120357)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:11
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日志管理(LogManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 登录日志(LoginLog)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsLoginLog 
{
public static _CurrTabName= "LoginLog"; //当前表名,与该类相关的表名
public static _KeyFldName= "LoginLogId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["loginLogId", "loginLogNumber", "loginIP", "failReason", "loginResult", "loginTime", "loginUserId", "onlineTime", "outTime", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public loginLogId = 0;    //LoginLogId
public loginLogNumber = "";    //LoginLogNumber
public loginIP = "";    //LoginIP
public failReason = "";    //FailReason
public loginResult = "";    //LoginResult
public loginTime = "";    //LoginTime
public loginUserId = "";    //LoginUserId
public onlineTime = "";    //OnlineTime
public outTime = "";    //OutTime
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
case clsLoginLog.con_LoginLogId:
return this.loginLogId;
case clsLoginLog.con_LoginLogNumber:
return this.loginLogNumber;
case clsLoginLog.con_LoginIP:
return this.loginIP;
case clsLoginLog.con_FailReason:
return this.failReason;
case clsLoginLog.con_LoginResult:
return this.loginResult;
case clsLoginLog.con_LoginTime:
return this.loginTime;
case clsLoginLog.con_LoginUserId:
return this.loginUserId;
case clsLoginLog.con_OnlineTime:
return this.onlineTime;
case clsLoginLog.con_OutTime:
return this.outTime;
case clsLoginLog.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[LoginLog]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"LoginLogId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LoginLogId(): string {return "loginLogId";}    //LoginLogId

 /**
 * 常量:"LoginLogNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LoginLogNumber(): string {return "loginLogNumber";}    //LoginLogNumber

 /**
 * 常量:"LoginIP"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LoginIP(): string {return "loginIP";}    //LoginIP

 /**
 * 常量:"FailReason"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FailReason(): string {return "failReason";}    //FailReason

 /**
 * 常量:"LoginResult"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LoginResult(): string {return "loginResult";}    //LoginResult

 /**
 * 常量:"LoginTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LoginTime(): string {return "loginTime";}    //LoginTime

 /**
 * 常量:"LoginUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LoginUserId(): string {return "loginUserId";}    //LoginUserId

 /**
 * 常量:"OnlineTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OnlineTime(): string {return "onlineTime";}    //OnlineTime

 /**
 * 常量:"OutTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OutTime(): string {return "outTime";}    //OutTime

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}