
 /**
 * 类名:clsResourceEN
 * 表名:Resource(01120320)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 16:03:03
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 资源(Resource)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsResourceEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "Resource"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdResource"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["idResource", "resourceID", "resourceName", "saveMode", "idFtpResource", "idFile", "idResourceType", "updDate", "updTime", "memo", "funcModuleId", "checkDate", "checkUser", "checkResult"];
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
private mstrIdResource = "";    //资源流水号
private mstrResourceID = "";    //资源ID
private mstrResourceName = "";    //资源名称
private mbolSaveMode = false;    //文件存放方式
private mstrIdFtpResource = "";    //FTP资源流水号
private mstrIdFile = "";    //文件流水号
private mstrIdResourceType = "";    //资源类型流水号
private mstrUpdDate = "";    //修改日期
private mstrUpdTime = "";    //UpdTime
private mstrMemo = "";    //备注
private mstrFuncModuleId = "";    //功能模块Id
private mstrCheckDate = "";    //检查日期
private mstrCheckUser = "";    //检查用户Id
private mstrCheckResult = "";    //检查结果

/**
 * 资源流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdResource (value: string)
{
if (value  != undefined)
{
 this.idResource = value;
    this.hmProperty["idResource"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 资源ID(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetResourceID (value: string)
{
if (value  != undefined)
{
 this.resourceID = value;
    this.hmProperty["resourceID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 资源名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetResourceName (value: string)
{
if (value  != undefined)
{
 this.resourceName = value;
    this.hmProperty["resourceName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件存放方式(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSaveMode (value: boolean)
{
if (value  != undefined)
{
 this.saveMode = value;
    this.hmProperty["saveMode"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

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
 * 资源类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdResourceType (value: string)
{
if (value  != undefined)
{
 this.idResourceType = value;
    this.hmProperty["idResourceType"] = true;
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
 * UpdTime(说明:;字段类型:varchar;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdTime (value: string)
{
if (value  != undefined)
{
 this.updTime = value;
    this.hmProperty["updTime"] = true;
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
 * 检查日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCheckDate (value: string)
{
if (value  != undefined)
{
 this.checkDate = value;
    this.hmProperty["checkDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 检查用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCheckUser (value: string)
{
if (value  != undefined)
{
 this.checkUser = value;
    this.hmProperty["checkUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 检查结果(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCheckResult (value: string)
{
if (value  != undefined)
{
 this.checkResult = value;
    this.hmProperty["checkResult"] = true;
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
case clsResourceEN.con_IdResource:
return this.idResource;
case clsResourceEN.con_ResourceID:
return this.resourceID;
case clsResourceEN.con_ResourceName:
return this.resourceName;
case clsResourceEN.con_SaveMode:
return this.saveMode;
case clsResourceEN.con_IdFtpResource:
return this.idFtpResource;
case clsResourceEN.con_IdFile:
return this.idFile;
case clsResourceEN.con_IdResourceType:
return this.idResourceType;
case clsResourceEN.con_UpdDate:
return this.updDate;
case clsResourceEN.con_UpdTime:
return this.updTime;
case clsResourceEN.con_Memo:
return this.memo;
case clsResourceEN.con_FuncModuleId:
return this.funcModuleId;
case clsResourceEN.con_CheckDate:
return this.checkDate;
case clsResourceEN.con_CheckUser:
return this.checkUser;
case clsResourceEN.con_CheckResult:
return this.checkResult;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Resource]中不存在!`;
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
case clsResourceEN.con_IdResource:
this.idResource = strValue;
    this.hmProperty["idResource"] = true;
break;
case clsResourceEN.con_ResourceID:
this.resourceID = strValue;
    this.hmProperty["resourceID"] = true;
break;
case clsResourceEN.con_ResourceName:
this.resourceName = strValue;
    this.hmProperty["resourceName"] = true;
break;
case clsResourceEN.con_SaveMode:
this.saveMode = Boolean(strValue);
    this.hmProperty["saveMode"] = true;
break;
case clsResourceEN.con_IdFtpResource:
this.idFtpResource = strValue;
    this.hmProperty["idFtpResource"] = true;
break;
case clsResourceEN.con_IdFile:
this.idFile = strValue;
    this.hmProperty["idFile"] = true;
break;
case clsResourceEN.con_IdResourceType:
this.idResourceType = strValue;
    this.hmProperty["idResourceType"] = true;
break;
case clsResourceEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsResourceEN.con_UpdTime:
this.updTime = strValue;
    this.hmProperty["updTime"] = true;
break;
case clsResourceEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsResourceEN.con_FuncModuleId:
this.funcModuleId = strValue;
    this.hmProperty["funcModuleId"] = true;
break;
case clsResourceEN.con_CheckDate:
this.checkDate = strValue;
    this.hmProperty["checkDate"] = true;
break;
case clsResourceEN.con_CheckUser:
this.checkUser = strValue;
    this.hmProperty["checkUser"] = true;
break;
case clsResourceEN.con_CheckResult:
this.checkResult = strValue;
    this.hmProperty["checkResult"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Resource]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"IdResource"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdResource(): string {return "idResource";}    //资源流水号

 /**
 * 常量:"ResourceID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ResourceID(): string {return "resourceID";}    //资源ID

 /**
 * 常量:"ResourceName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ResourceName(): string {return "resourceName";}    //资源名称

 /**
 * 常量:"SaveMode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SaveMode(): string {return "saveMode";}    //文件存放方式

 /**
 * 常量:"IdFtpResource"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdFtpResource(): string {return "idFtpResource";}    //FTP资源流水号

 /**
 * 常量:"IdFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdFile(): string {return "idFile";}    //文件流水号

 /**
 * 常量:"IdResourceType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdResourceType(): string {return "idResourceType";}    //资源类型流水号

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdTime(): string {return "updTime";}    //UpdTime

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"FuncModuleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleId(): string {return "funcModuleId";}    //功能模块Id

 /**
 * 常量:"CheckDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CheckDate(): string {return "checkDate";}    //检查日期

 /**
 * 常量:"CheckUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CheckUser(): string {return "checkUser";}    //检查用户Id

 /**
 * 常量:"CheckResult"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CheckResult(): string {return "checkResult";}    //检查结果

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
//return propName in new clsResourceEN();
const instance = new clsResourceEN();
return instance.hasOwnProperty(propName);
}
}