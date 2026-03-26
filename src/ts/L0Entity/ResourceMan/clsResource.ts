
 /**
 * 类名:clsResource
 * 表名:Resource(01120320)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 16:03:06
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 资源(Resource)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsResource 
{
public static _CurrTabName= "Resource"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdResource"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["idResource", "resourceID", "resourceName", "saveMode", "idFtpResource", "idFile", "idResourceType", "updDate", "updTime", "memo", "funcModuleId", "checkDate", "checkUser", "checkResult"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idResource = "";    //资源流水号
public resourceID = "";    //资源ID
public resourceName = "";    //资源名称
public saveMode = false;    //文件存放方式
public idFtpResource = "";    //FTP资源流水号
public idFile = "";    //文件流水号
public idResourceType = "";    //资源类型流水号
public updDate = "";    //修改日期
public updTime = "";    //UpdTime
public memo = "";    //备注
public funcModuleId = "";    //功能模块Id
public checkDate = "";    //检查日期
public checkUser = "";    //检查用户Id
public checkResult = "";    //检查结果

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
case clsResource.con_IdResource:
return this.idResource;
case clsResource.con_ResourceID:
return this.resourceID;
case clsResource.con_ResourceName:
return this.resourceName;
case clsResource.con_SaveMode:
return this.saveMode;
case clsResource.con_IdFtpResource:
return this.idFtpResource;
case clsResource.con_IdFile:
return this.idFile;
case clsResource.con_IdResourceType:
return this.idResourceType;
case clsResource.con_UpdDate:
return this.updDate;
case clsResource.con_UpdTime:
return this.updTime;
case clsResource.con_Memo:
return this.memo;
case clsResource.con_FuncModuleId:
return this.funcModuleId;
case clsResource.con_CheckDate:
return this.checkDate;
case clsResource.con_CheckUser:
return this.checkUser;
case clsResource.con_CheckResult:
return this.checkResult;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Resource]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdResource"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdResource(): string {return "idResource";}    //资源流水号

 /**
 * 常量:"ResourceID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResourceID(): string {return "resourceID";}    //资源ID

 /**
 * 常量:"ResourceName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResourceName(): string {return "resourceName";}    //资源名称

 /**
 * 常量:"SaveMode"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SaveMode(): string {return "saveMode";}    //文件存放方式

 /**
 * 常量:"IdFtpResource"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdFtpResource(): string {return "idFtpResource";}    //FTP资源流水号

 /**
 * 常量:"IdFile"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdFile(): string {return "idFile";}    //文件流水号

 /**
 * 常量:"IdResourceType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdResourceType(): string {return "idResourceType";}    //资源类型流水号

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdTime(): string {return "updTime";}    //UpdTime

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"FuncModuleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FuncModuleId(): string {return "funcModuleId";}    //功能模块Id

 /**
 * 常量:"CheckDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CheckDate(): string {return "checkDate";}    //检查日期

 /**
 * 常量:"CheckUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CheckUser(): string {return "checkUser";}    //检查用户Id

 /**
 * 常量:"CheckResult"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CheckResult(): string {return "checkResult";}    //检查结果
}