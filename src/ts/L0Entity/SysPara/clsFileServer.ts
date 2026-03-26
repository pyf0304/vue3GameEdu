
 /**
 * 类名:clsFileServer
 * 表名:FileServer(01120325)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:44
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 文件服务(FileServer)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsFileServer 
{
public static _CurrTabName= "FileServer"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdFile"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["idFile", "fileName", "fileContent", "fileType", "saveDate", "saveTime", "resourceOwner", "fileOriginName"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idFile = "";    //文件流水号
public fileName = "";    //文件名称
public fileContent = "";    //文件内容
public fileType = "";    //文件类型
public saveDate = "";    //创建日期
public saveTime = "";    //创建时间
public resourceOwner = "";    //上传者
public fileOriginName = "";    //原文件名

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
case clsFileServer.con_IdFile:
return this.idFile;
case clsFileServer.con_FileName:
return this.fileName;
case clsFileServer.con_FileType:
return this.fileType;
case clsFileServer.con_SaveDate:
return this.saveDate;
case clsFileServer.con_SaveTime:
return this.saveTime;
case clsFileServer.con_ResourceOwner:
return this.resourceOwner;
case clsFileServer.con_FileOriginName:
return this.fileOriginName;
default:
strMsg = `字段名:[${strFldName}]在表对象:[FileServer]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdFile"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdFile(): string {return "idFile";}    //文件流水号

 /**
 * 常量:"FileName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileName(): string {return "fileName";}    //文件名称

 /**
 * 常量:"FileContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileContent(): string {return "fileContent";}    //文件内容

 /**
 * 常量:"FileType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileType(): string {return "fileType";}    //文件类型

 /**
 * 常量:"SaveDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SaveDate(): string {return "saveDate";}    //创建日期

 /**
 * 常量:"SaveTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SaveTime(): string {return "saveTime";}    //创建时间

 /**
 * 常量:"ResourceOwner"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResourceOwner(): string {return "resourceOwner";}    //上传者

 /**
 * 常量:"FileOriginName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileOriginName(): string {return "fileOriginName";}    //原文件名
}