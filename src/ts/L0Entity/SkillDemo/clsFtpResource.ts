
 /**
 * 类名:clsFtpResource
 * 表名:FtpResource(01120326)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:45
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:技能示范(SkillDemo)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * FTP资源(FtpResource)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsFtpResource 
{
public static _CurrTabName= "FtpResource"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdFtpResource"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["idFtpResource", "ftpResourceID", "fileOriginalName", "fileDirName", "fileRename", "fileUpDate", "fileUpTime", "memo", "fileType", "checkDateTime", "resourceOwner", "isExistFile", "funcModuleId", "fileResourceID", "fileNameBak", "updDate", "updUser"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idFtpResource = "";    //FTP资源流水号
public ftpResourceID = "";    //FTP资源ID
public fileOriginalName = "";    //文件原名
public fileDirName = "";    //文件目录名
public fileRename = "";    //文件新名
public fileUpDate = "";    //创建日期
public fileUpTime = "";    //创建时间
public memo = "";    //备注
public fileType = "";    //文件类型
public checkDateTime = "";    //CheckDateTime
public resourceOwner = "";    //上传者
public isExistFile = false;    //是否存在文件
public funcModuleId = "";    //功能模块Id
public fileResourceID = 0;    //FileResourceID
public fileNameBak = "";    //FileName_Bak
public updDate = "";    //修改日期
public updUser = "";    //修改人

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
case clsFtpResource.con_IdFtpResource:
return this.idFtpResource;
case clsFtpResource.con_FtpResourceID:
return this.ftpResourceID;
case clsFtpResource.con_FileOriginalName:
return this.fileOriginalName;
case clsFtpResource.con_FileDirName:
return this.fileDirName;
case clsFtpResource.con_FileRename:
return this.fileRename;
case clsFtpResource.con_FileUpDate:
return this.fileUpDate;
case clsFtpResource.con_FileUpTime:
return this.fileUpTime;
case clsFtpResource.con_Memo:
return this.memo;
case clsFtpResource.con_FileType:
return this.fileType;
case clsFtpResource.con_CheckDateTime:
return this.checkDateTime;
case clsFtpResource.con_ResourceOwner:
return this.resourceOwner;
case clsFtpResource.con_IsExistFile:
return this.isExistFile;
case clsFtpResource.con_FuncModuleId:
return this.funcModuleId;
case clsFtpResource.con_FileResourceID:
return this.fileResourceID;
case clsFtpResource.con_FileNameBak:
return this.fileNameBak;
case clsFtpResource.con_UpdDate:
return this.updDate;
case clsFtpResource.con_UpdUser:
return this.updUser;
default:
strMsg = `字段名:[${strFldName}]在表对象:[FtpResource]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdFtpResource"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdFtpResource(): string {return "idFtpResource";}    //FTP资源流水号

 /**
 * 常量:"FtpResourceID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FtpResourceID(): string {return "ftpResourceID";}    //FTP资源ID

 /**
 * 常量:"FileOriginalName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileOriginalName(): string {return "fileOriginalName";}    //文件原名

 /**
 * 常量:"FileDirName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileDirName(): string {return "fileDirName";}    //文件目录名

 /**
 * 常量:"FileRename"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileRename(): string {return "fileRename";}    //文件新名

 /**
 * 常量:"FileUpDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileUpDate(): string {return "fileUpDate";}    //创建日期

 /**
 * 常量:"FileUpTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileUpTime(): string {return "fileUpTime";}    //创建时间

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"FileType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileType(): string {return "fileType";}    //文件类型

 /**
 * 常量:"CheckDateTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CheckDateTime(): string {return "checkDateTime";}    //CheckDateTime

 /**
 * 常量:"ResourceOwner"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResourceOwner(): string {return "resourceOwner";}    //上传者

 /**
 * 常量:"IsExistFile"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsExistFile(): string {return "isExistFile";}    //是否存在文件

 /**
 * 常量:"FuncModuleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FuncModuleId(): string {return "funcModuleId";}    //功能模块Id

 /**
 * 常量:"FileResourceID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileResourceID(): string {return "fileResourceID";}    //FileResourceID

 /**
 * 常量:"FileNameBak"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileNameBak(): string {return "fileNameBak";}    //FileName_Bak

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
}