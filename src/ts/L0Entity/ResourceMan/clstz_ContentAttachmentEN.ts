
 /**
 * 类名:clstz_ContentAttachmentEN
 * 表名:tz_ContentAttachment(01120207)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 16:02:41
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
 * 内容附件(tz_ContentAttachment)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clstz_ContentAttachmentEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "tz_ContentAttachment"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 22;
public static AttributeName = ["mId", "contentTypeId", "tableNameKey", "orderNum", "attachmentTitle", "idResourceType", "fileName", "extension", "filePath", "pdfFilePath", "swfFilePath", "textContent", "fileSize", "fileSizeUnit", "imageHeight", "imageWidth", "uploadPerson", "uploadDate", "updDate", "updUserId", "memo", "courseId"];
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
private mlngmId = 0;    //mId
private mstrContentTypeId = "";    //内容类型Id
private mstrTableNameKey = "";    //主表主键值
private mintOrderNum = 0;    //序号
private mstrAttachmentTitle = "";    //附件标题
private mstrIdResourceType = "";    //资源类型流水号
private mstrFileName = "";    //文件名称
private mstrExtension = "";    //扩展名
private mstrFilePath = "";    //文件路径
private mstrPdfFilePath = "";    //Pdf文件路径
private mstrSwfFilePath = "";    //Swf文件路径
private mstrTextContent = "";    //TextContent
private mdblFileSize = 0;    //文件大小
private mstrFileSizeUnit = "";    //文件大小单位
private mintImageHeight = 0;    //图像高
private mintImageWidth = 0;    //图像宽
private mstrUploadPerson = "";    //上传人
private mstrUploadDate = "";    //上传时间
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注
private mstrCourseId = "";    //课程Id

/**
 * mId(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetmId (value: number)
{
if (value  != undefined)
{
 this.mId = value;
    this.hmProperty["mId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 内容类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetContentTypeId (value: string)
{
if (value  != undefined)
{
 this.contentTypeId = value;
    this.hmProperty["contentTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 主表主键值(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTableNameKey (value: string)
{
if (value  != undefined)
{
 this.tableNameKey = value;
    this.hmProperty["tableNameKey"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 附件标题(说明:;字段类型:varchar;字段长度:100;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAttachmentTitle (value: string)
{
if (value  != undefined)
{
 this.attachmentTitle = value;
    this.hmProperty["attachmentTitle"] = true;
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
 * 扩展名(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExtension (value: string)
{
if (value  != undefined)
{
 this.extension = value;
    this.hmProperty["extension"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件路径(说明:;字段类型:varchar;字段长度:500;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFilePath (value: string)
{
if (value  != undefined)
{
 this.filePath = value;
    this.hmProperty["filePath"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Pdf文件路径(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPdfFilePath (value: string)
{
if (value  != undefined)
{
 this.pdfFilePath = value;
    this.hmProperty["pdfFilePath"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Swf文件路径(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSwfFilePath (value: string)
{
if (value  != undefined)
{
 this.swfFilePath = value;
    this.hmProperty["swfFilePath"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * TextContent(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTextContent (value: string)
{
if (value  != undefined)
{
 this.textContent = value;
    this.hmProperty["textContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件大小(说明:;字段类型:decimal;字段长度:22;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileSize (value: number)
{
if (value  != undefined)
{
 this.fileSize = value;
    this.hmProperty["fileSize"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件大小单位(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileSizeUnit (value: string)
{
if (value  != undefined)
{
 this.fileSizeUnit = value;
    this.hmProperty["fileSizeUnit"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 图像高(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetImageHeight (value: number)
{
if (value  != undefined)
{
 this.imageHeight = value;
    this.hmProperty["imageHeight"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 图像宽(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetImageWidth (value: number)
{
if (value  != undefined)
{
 this.imageWidth = value;
    this.hmProperty["imageWidth"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 上传人(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUploadPerson (value: string)
{
if (value  != undefined)
{
 this.uploadPerson = value;
    this.hmProperty["uploadPerson"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 上传时间(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUploadDate (value: string)
{
if (value  != undefined)
{
 this.uploadDate = value;
    this.hmProperty["uploadDate"] = true;
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
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
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
 * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseId (value: string)
{
if (value  != undefined)
{
 this.courseId = value;
    this.hmProperty["courseId"] = true;
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
case clstz_ContentAttachmentEN.con_mId:
return this.mId;
case clstz_ContentAttachmentEN.con_ContentTypeId:
return this.contentTypeId;
case clstz_ContentAttachmentEN.con_TableNameKey:
return this.tableNameKey;
case clstz_ContentAttachmentEN.con_OrderNum:
return this.orderNum;
case clstz_ContentAttachmentEN.con_AttachmentTitle:
return this.attachmentTitle;
case clstz_ContentAttachmentEN.con_IdResourceType:
return this.idResourceType;
case clstz_ContentAttachmentEN.con_FileName:
return this.fileName;
case clstz_ContentAttachmentEN.con_Extension:
return this.extension;
case clstz_ContentAttachmentEN.con_FilePath:
return this.filePath;
case clstz_ContentAttachmentEN.con_PdfFilePath:
return this.pdfFilePath;
case clstz_ContentAttachmentEN.con_SwfFilePath:
return this.swfFilePath;
case clstz_ContentAttachmentEN.con_TextContent:
return this.textContent;
case clstz_ContentAttachmentEN.con_FileSize:
return this.fileSize;
case clstz_ContentAttachmentEN.con_FileSizeUnit:
return this.fileSizeUnit;
case clstz_ContentAttachmentEN.con_ImageHeight:
return this.imageHeight;
case clstz_ContentAttachmentEN.con_ImageWidth:
return this.imageWidth;
case clstz_ContentAttachmentEN.con_UploadPerson:
return this.uploadPerson;
case clstz_ContentAttachmentEN.con_UploadDate:
return this.uploadDate;
case clstz_ContentAttachmentEN.con_UpdDate:
return this.updDate;
case clstz_ContentAttachmentEN.con_UpdUserId:
return this.updUserId;
case clstz_ContentAttachmentEN.con_Memo:
return this.memo;
case clstz_ContentAttachmentEN.con_CourseId:
return this.courseId;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[tz_ContentAttachment]中不存在!`;
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
case clstz_ContentAttachmentEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clstz_ContentAttachmentEN.con_ContentTypeId:
this.contentTypeId = strValue;
    this.hmProperty["contentTypeId"] = true;
break;
case clstz_ContentAttachmentEN.con_TableNameKey:
this.tableNameKey = strValue;
    this.hmProperty["tableNameKey"] = true;
break;
case clstz_ContentAttachmentEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clstz_ContentAttachmentEN.con_AttachmentTitle:
this.attachmentTitle = strValue;
    this.hmProperty["attachmentTitle"] = true;
break;
case clstz_ContentAttachmentEN.con_IdResourceType:
this.idResourceType = strValue;
    this.hmProperty["idResourceType"] = true;
break;
case clstz_ContentAttachmentEN.con_FileName:
this.fileName = strValue;
    this.hmProperty["fileName"] = true;
break;
case clstz_ContentAttachmentEN.con_Extension:
this.extension = strValue;
    this.hmProperty["extension"] = true;
break;
case clstz_ContentAttachmentEN.con_FilePath:
this.filePath = strValue;
    this.hmProperty["filePath"] = true;
break;
case clstz_ContentAttachmentEN.con_PdfFilePath:
this.pdfFilePath = strValue;
    this.hmProperty["pdfFilePath"] = true;
break;
case clstz_ContentAttachmentEN.con_SwfFilePath:
this.swfFilePath = strValue;
    this.hmProperty["swfFilePath"] = true;
break;
case clstz_ContentAttachmentEN.con_TextContent:
this.textContent = strValue;
    this.hmProperty["textContent"] = true;
break;
case clstz_ContentAttachmentEN.con_FileSize:
this.fileSize = Number(strValue);
    this.hmProperty["fileSize"] = true;
break;
case clstz_ContentAttachmentEN.con_FileSizeUnit:
this.fileSizeUnit = strValue;
    this.hmProperty["fileSizeUnit"] = true;
break;
case clstz_ContentAttachmentEN.con_ImageHeight:
this.imageHeight = Number(strValue);
    this.hmProperty["imageHeight"] = true;
break;
case clstz_ContentAttachmentEN.con_ImageWidth:
this.imageWidth = Number(strValue);
    this.hmProperty["imageWidth"] = true;
break;
case clstz_ContentAttachmentEN.con_UploadPerson:
this.uploadPerson = strValue;
    this.hmProperty["uploadPerson"] = true;
break;
case clstz_ContentAttachmentEN.con_UploadDate:
this.uploadDate = strValue;
    this.hmProperty["uploadDate"] = true;
break;
case clstz_ContentAttachmentEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clstz_ContentAttachmentEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clstz_ContentAttachmentEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clstz_ContentAttachmentEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[tz_ContentAttachment]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public contentTypeId = "";    //内容类型Id
public tableNameKey = "";    //主表主键值
public orderNum = 0;    //序号
public attachmentTitle = "";    //附件标题
public idResourceType = "";    //资源类型流水号
public fileName = "";    //文件名称
public extension = "";    //扩展名
public filePath = "";    //文件路径
public pdfFilePath = "";    //Pdf文件路径
public swfFilePath = "";    //Swf文件路径
public textContent = "";    //TextContent
public fileSize = 0;    //文件大小
public fileSizeUnit = "";    //文件大小单位
public imageHeight = 0;    //图像高
public imageWidth = 0;    //图像宽
public uploadPerson = "";    //上传人
public uploadDate = "";    //上传时间
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注
public courseId = "";    //课程Id


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"ContentTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ContentTypeId(): string {return "contentTypeId";}    //内容类型Id

 /**
 * 常量:"TableNameKey"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TableNameKey(): string {return "tableNameKey";}    //主表主键值

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"AttachmentTitle"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AttachmentTitle(): string {return "attachmentTitle";}    //附件标题

 /**
 * 常量:"IdResourceType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdResourceType(): string {return "idResourceType";}    //资源类型流水号

 /**
 * 常量:"FileName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileName(): string {return "fileName";}    //文件名称

 /**
 * 常量:"Extension"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Extension(): string {return "extension";}    //扩展名

 /**
 * 常量:"FilePath"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FilePath(): string {return "filePath";}    //文件路径

 /**
 * 常量:"PdfFilePath"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PdfFilePath(): string {return "pdfFilePath";}    //Pdf文件路径

 /**
 * 常量:"SwfFilePath"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SwfFilePath(): string {return "swfFilePath";}    //Swf文件路径

 /**
 * 常量:"TextContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TextContent(): string {return "textContent";}    //TextContent

 /**
 * 常量:"FileSize"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileSize(): string {return "fileSize";}    //文件大小

 /**
 * 常量:"FileSizeUnit"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileSizeUnit(): string {return "fileSizeUnit";}    //文件大小单位

 /**
 * 常量:"ImageHeight"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ImageHeight(): string {return "imageHeight";}    //图像高

 /**
 * 常量:"ImageWidth"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ImageWidth(): string {return "imageWidth";}    //图像宽

 /**
 * 常量:"UploadPerson"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UploadPerson(): string {return "uploadPerson";}    //上传人

 /**
 * 常量:"UploadDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UploadDate(): string {return "uploadDate";}    //上传时间

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

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
//return propName in new clstz_ContentAttachmentEN();
const instance = new clstz_ContentAttachmentEN();
return instance.hasOwnProperty(propName);
}
}