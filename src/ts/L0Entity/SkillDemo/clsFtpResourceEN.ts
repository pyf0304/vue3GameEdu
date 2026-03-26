
 /**
 * 类名:clsFtpResourceEN
 * 表名:FtpResource(01120326)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:44
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:技能示范(SkillDemo)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * FTP资源(FtpResource)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsFtpResourceEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "FtpResource"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdFtpResource"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["idFtpResource", "ftpResourceID", "fileOriginalName", "fileDirName", "fileRename", "fileUpDate", "fileUpTime", "memo", "fileType", "checkDateTime", "resourceOwner", "isExistFile", "funcModuleId", "fileResourceID", "fileNameBak", "updDate", "updUser"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mstrIdFtpResource = "";    //FTP资源流水号
private mstrFtpResourceID = "";    //FTP资源ID
private mstrFileOriginalName = "";    //文件原名
private mstrFileDirName = "";    //文件目录名
private mstrFileRename = "";    //文件新名
private mstrFileUpDate = "";    //创建日期
private mstrFileUpTime = "";    //创建时间
private mstrMemo = "";    //备注
private mstrFileType = "";    //文件类型
private mstrCheckDateTime = "";    //CheckDateTime
private mstrResourceOwner = "";    //上传者
private mbolIsExistFile = false;    //是否存在文件
private mstrFuncModuleId = "";    //功能模块Id
private mlngFileResourceID = 0;    //FileResourceID
private mstrFileNameBak = "";    //FileName_Bak
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人

/**
 * FTP资源流水号(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdFtpResource (value: string)
{
if (value  != undefined)
{
 this.idFtpResource = value;
    this.hmProperty["idFtpResource"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * FTP资源ID(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFtpResourceID (value: string)
{
if (value  != undefined)
{
 this.ftpResourceID = value;
    this.hmProperty["ftpResourceID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件原名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileOriginalName (value: string)
{
if (value  != undefined)
{
 this.fileOriginalName = value;
    this.hmProperty["fileOriginalName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件目录名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileDirName (value: string)
{
if (value  != undefined)
{
 this.fileDirName = value;
    this.hmProperty["fileDirName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件新名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileRename (value: string)
{
if (value  != undefined)
{
 this.fileRename = value;
    this.hmProperty["fileRename"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 创建日期(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileUpDate (value: string)
{
if (value  != undefined)
{
 this.fileUpDate = value;
    this.hmProperty["fileUpDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 创建时间(说明:;字段类型:char;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileUpTime (value: string)
{
if (value  != undefined)
{
 this.fileUpTime = value;
    this.hmProperty["fileUpTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件类型(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileType (value: string)
{
if (value  != undefined)
{
 this.fileType = value;
    this.hmProperty["fileType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * CheckDateTime(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCheckDateTime (value: string)
{
if (value  != undefined)
{
 this.checkDateTime = value;
    this.hmProperty["checkDateTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 上传者(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetResourceOwner (value: string)
{
if (value  != undefined)
{
 this.resourceOwner = value;
    this.hmProperty["resourceOwner"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否存在文件(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsExistFile (value: boolean)
{
if (value  != undefined)
{
 this.isExistFile = value;
    this.hmProperty["isExistFile"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 功能模块Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFuncModuleId (value: string)
{
if (value  != undefined)
{
 this.funcModuleId = value;
    this.hmProperty["funcModuleId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * FileResourceID(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileResourceID (value: number)
{
if (value  != undefined)
{
 this.fileResourceID = value;
    this.hmProperty["fileResourceID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * FileName_Bak(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileNameBak (value: string)
{
if (value  != undefined)
{
 this.fileNameBak = value;
    this.hmProperty["fileNameBak"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}


/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsFtpResourceEN.con_IdFtpResource:
return this.idFtpResource;
case clsFtpResourceEN.con_FtpResourceID:
return this.ftpResourceID;
case clsFtpResourceEN.con_FileOriginalName:
return this.fileOriginalName;
case clsFtpResourceEN.con_FileDirName:
return this.fileDirName;
case clsFtpResourceEN.con_FileRename:
return this.fileRename;
case clsFtpResourceEN.con_FileUpDate:
return this.fileUpDate;
case clsFtpResourceEN.con_FileUpTime:
return this.fileUpTime;
case clsFtpResourceEN.con_Memo:
return this.memo;
case clsFtpResourceEN.con_FileType:
return this.fileType;
case clsFtpResourceEN.con_CheckDateTime:
return this.checkDateTime;
case clsFtpResourceEN.con_ResourceOwner:
return this.resourceOwner;
case clsFtpResourceEN.con_IsExistFile:
return this.isExistFile;
case clsFtpResourceEN.con_FuncModuleId:
return this.funcModuleId;
case clsFtpResourceEN.con_FileResourceID:
return this.fileResourceID;
case clsFtpResourceEN.con_FileNameBak:
return this.fileNameBak;
case clsFtpResourceEN.con_UpdDate:
return this.updDate;
case clsFtpResourceEN.con_UpdUser:
return this.updUser;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[FtpResource]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsFtpResourceEN.con_IdFtpResource:
this.idFtpResource = strValue;
    this.hmProperty["idFtpResource"] = true;
break;
case clsFtpResourceEN.con_FtpResourceID:
this.ftpResourceID = strValue;
    this.hmProperty["ftpResourceID"] = true;
break;
case clsFtpResourceEN.con_FileOriginalName:
this.fileOriginalName = strValue;
    this.hmProperty["fileOriginalName"] = true;
break;
case clsFtpResourceEN.con_FileDirName:
this.fileDirName = strValue;
    this.hmProperty["fileDirName"] = true;
break;
case clsFtpResourceEN.con_FileRename:
this.fileRename = strValue;
    this.hmProperty["fileRename"] = true;
break;
case clsFtpResourceEN.con_FileUpDate:
this.fileUpDate = strValue;
    this.hmProperty["fileUpDate"] = true;
break;
case clsFtpResourceEN.con_FileUpTime:
this.fileUpTime = strValue;
    this.hmProperty["fileUpTime"] = true;
break;
case clsFtpResourceEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsFtpResourceEN.con_FileType:
this.fileType = strValue;
    this.hmProperty["fileType"] = true;
break;
case clsFtpResourceEN.con_CheckDateTime:
this.checkDateTime = strValue;
    this.hmProperty["checkDateTime"] = true;
break;
case clsFtpResourceEN.con_ResourceOwner:
this.resourceOwner = strValue;
    this.hmProperty["resourceOwner"] = true;
break;
case clsFtpResourceEN.con_IsExistFile:
this.isExistFile = Boolean(strValue);
    this.hmProperty["isExistFile"] = true;
break;
case clsFtpResourceEN.con_FuncModuleId:
this.funcModuleId = strValue;
    this.hmProperty["funcModuleId"] = true;
break;
case clsFtpResourceEN.con_FileResourceID:
this.fileResourceID = Number(strValue);
    this.hmProperty["fileResourceID"] = true;
break;
case clsFtpResourceEN.con_FileNameBak:
this.fileNameBak = strValue;
    this.hmProperty["fileNameBak"] = true;
break;
case clsFtpResourceEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsFtpResourceEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[FtpResource]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"IdFtpResource"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdFtpResource(): string {return "idFtpResource";}    //FTP资源流水号

 /**
 * 常量:"FtpResourceID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FtpResourceID(): string {return "ftpResourceID";}    //FTP资源ID

 /**
 * 常量:"FileOriginalName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileOriginalName(): string {return "fileOriginalName";}    //文件原名

 /**
 * 常量:"FileDirName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileDirName(): string {return "fileDirName";}    //文件目录名

 /**
 * 常量:"FileRename"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileRename(): string {return "fileRename";}    //文件新名

 /**
 * 常量:"FileUpDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileUpDate(): string {return "fileUpDate";}    //创建日期

 /**
 * 常量:"FileUpTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileUpTime(): string {return "fileUpTime";}    //创建时间

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"FileType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileType(): string {return "fileType";}    //文件类型

 /**
 * 常量:"CheckDateTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CheckDateTime(): string {return "checkDateTime";}    //CheckDateTime

 /**
 * 常量:"ResourceOwner"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ResourceOwner(): string {return "resourceOwner";}    //上传者

 /**
 * 常量:"IsExistFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsExistFile(): string {return "isExistFile";}    //是否存在文件

 /**
 * 常量:"FuncModuleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleId(): string {return "funcModuleId";}    //功能模块Id

 /**
 * 常量:"FileResourceID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileResourceID(): string {return "fileResourceID";}    //FileResourceID

 /**
 * 常量:"FileNameBak"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileNameBak(): string {return "fileNameBak";}    //FileName_Bak

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 设置条件字段值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
 * @param strFldName:字段名
 * @param strFldValue:字段值
 * @param strComparisonOp:比较操作条符
 * @returns 根据关键字获取的名称
 **/
public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {                
this.SetFldValue(strFldName, strFldValue);
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsFtpResourceEN();
const instance = new clsFtpResourceEN();
return instance.hasOwnProperty(propName);
}
}