
 /**
 * 类名:clsFileServerEN
 * 表名:FileServer(01120325)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:43
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 文件服务(FileServer)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsFileServerEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "FileServer"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdFile"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["idFile", "fileName", "fileContent", "fileType", "saveDate", "saveTime", "resourceOwner", "fileOriginName"];
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
private mstrIdFile = "";    //文件流水号
private mstrFileName = "";    //文件名称
private mbytFileContent = "";    //文件内容
private mstrFileType = "";    //文件类型
private mstrSaveDate = "";    //创建日期
private mstrSaveTime = "";    //创建时间
private mstrResourceOwner = "";    //上传者
private mstrFileOriginName = "";    //原文件名

/**
 * 文件流水号(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdFile (value: string)
{
if (value  != undefined)
{
 this.idFile = value;
    this.hmProperty["idFile"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件名称(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileName (value: string)
{
if (value  != undefined)
{
 this.fileName = value;
    this.hmProperty["fileName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件内容(说明:;字段类型:image;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileContent (value: any)
{
if (value  != undefined)
{
 this.fileContent = value;
    this.hmProperty["fileContent"] = true;
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
 * 创建日期(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSaveDate (value: string)
{
if (value  != undefined)
{
 this.saveDate = value;
    this.hmProperty["saveDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 创建时间(说明:;字段类型:char;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSaveTime (value: string)
{
if (value  != undefined)
{
 this.saveTime = value;
    this.hmProperty["saveTime"] = true;
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
 * 原文件名(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileOriginName (value: string)
{
if (value  != undefined)
{
 this.fileOriginName = value;
    this.hmProperty["fileOriginName"] = true;
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
case clsFileServerEN.con_IdFile:
return this.idFile;
case clsFileServerEN.con_FileName:
return this.fileName;
case clsFileServerEN.con_FileType:
return this.fileType;
case clsFileServerEN.con_SaveDate:
return this.saveDate;
case clsFileServerEN.con_SaveTime:
return this.saveTime;
case clsFileServerEN.con_ResourceOwner:
return this.resourceOwner;
case clsFileServerEN.con_FileOriginName:
return this.fileOriginName;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[FileServer]中不存在!`;
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
case clsFileServerEN.con_IdFile:
this.idFile = strValue;
    this.hmProperty["idFile"] = true;
break;
case clsFileServerEN.con_FileName:
this.fileName = strValue;
    this.hmProperty["fileName"] = true;
break;
case clsFileServerEN.con_FileType:
this.fileType = strValue;
    this.hmProperty["fileType"] = true;
break;
case clsFileServerEN.con_SaveDate:
this.saveDate = strValue;
    this.hmProperty["saveDate"] = true;
break;
case clsFileServerEN.con_SaveTime:
this.saveTime = strValue;
    this.hmProperty["saveTime"] = true;
break;
case clsFileServerEN.con_ResourceOwner:
this.resourceOwner = strValue;
    this.hmProperty["resourceOwner"] = true;
break;
case clsFileServerEN.con_FileOriginName:
this.fileOriginName = strValue;
    this.hmProperty["fileOriginName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[FileServer]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"IdFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdFile(): string {return "idFile";}    //文件流水号

 /**
 * 常量:"FileName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileName(): string {return "fileName";}    //文件名称

 /**
 * 常量:"FileContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileContent(): string {return "fileContent";}    //文件内容

 /**
 * 常量:"FileType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileType(): string {return "fileType";}    //文件类型

 /**
 * 常量:"SaveDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SaveDate(): string {return "saveDate";}    //创建日期

 /**
 * 常量:"SaveTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SaveTime(): string {return "saveTime";}    //创建时间

 /**
 * 常量:"ResourceOwner"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ResourceOwner(): string {return "resourceOwner";}    //上传者

 /**
 * 常量:"FileOriginName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileOriginName(): string {return "fileOriginName";}    //原文件名

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
//return propName in new clsFileServerEN();
const instance = new clsFileServerEN();
return instance.hasOwnProperty(propName);
}
}