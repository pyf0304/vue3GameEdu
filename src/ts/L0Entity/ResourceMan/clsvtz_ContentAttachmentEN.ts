
 /**
 * 类名:clsvtz_ContentAttachmentEN
 * 表名:vtz_ContentAttachment(01120208)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/02 14:22:04
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
 * v内容附件(vtz_ContentAttachment)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvtz_ContentAttachmentEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vtz_ContentAttachment"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 25;
public static AttributeName = ["mId", "contentTypeId", "contentTypeName", "tableName", "fldName", "tableNameKey", "orderNum", "attachmentTitle", "idResourceType", "resourceTypeID", "resourceTypeName", "fileName", "extension", "filePath", "pdfFilePath", "swfFilePath", "fileSize", "fileSizeUnit", "imageHeight", "imageWidth", "uploadPerson", "updDate", "updUserId", "memo", "courseId"];
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
case clsvtz_ContentAttachmentEN.con_mId:
return this.mId;
case clsvtz_ContentAttachmentEN.con_ContentTypeId:
return this.contentTypeId;
case clsvtz_ContentAttachmentEN.con_ContentTypeName:
return this.contentTypeName;
case clsvtz_ContentAttachmentEN.con_TableName:
return this.tableName;
case clsvtz_ContentAttachmentEN.con_FldName:
return this.fldName;
case clsvtz_ContentAttachmentEN.con_TableNameKey:
return this.tableNameKey;
case clsvtz_ContentAttachmentEN.con_OrderNum:
return this.orderNum;
case clsvtz_ContentAttachmentEN.con_AttachmentTitle:
return this.attachmentTitle;
case clsvtz_ContentAttachmentEN.con_IdResourceType:
return this.idResourceType;
case clsvtz_ContentAttachmentEN.con_ResourceTypeID:
return this.resourceTypeID;
case clsvtz_ContentAttachmentEN.con_ResourceTypeName:
return this.resourceTypeName;
case clsvtz_ContentAttachmentEN.con_FileName:
return this.fileName;
case clsvtz_ContentAttachmentEN.con_Extension:
return this.extension;
case clsvtz_ContentAttachmentEN.con_FilePath:
return this.filePath;
case clsvtz_ContentAttachmentEN.con_PdfFilePath:
return this.pdfFilePath;
case clsvtz_ContentAttachmentEN.con_SwfFilePath:
return this.swfFilePath;
case clsvtz_ContentAttachmentEN.con_FileSize:
return this.fileSize;
case clsvtz_ContentAttachmentEN.con_FileSizeUnit:
return this.fileSizeUnit;
case clsvtz_ContentAttachmentEN.con_ImageHeight:
return this.imageHeight;
case clsvtz_ContentAttachmentEN.con_ImageWidth:
return this.imageWidth;
case clsvtz_ContentAttachmentEN.con_UploadPerson:
return this.uploadPerson;
case clsvtz_ContentAttachmentEN.con_UpdDate:
return this.updDate;
case clsvtz_ContentAttachmentEN.con_UpdUserId:
return this.updUserId;
case clsvtz_ContentAttachmentEN.con_Memo:
return this.memo;
case clsvtz_ContentAttachmentEN.con_CourseId:
return this.courseId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vtz_ContentAttachment]中不存在!`;
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
case clsvtz_ContentAttachmentEN.con_mId:
this.mId = Number(strValue);
break;
case clsvtz_ContentAttachmentEN.con_ContentTypeId:
this.contentTypeId = strValue;
break;
case clsvtz_ContentAttachmentEN.con_ContentTypeName:
this.contentTypeName = strValue;
break;
case clsvtz_ContentAttachmentEN.con_TableName:
this.tableName = strValue;
break;
case clsvtz_ContentAttachmentEN.con_FldName:
this.fldName = strValue;
break;
case clsvtz_ContentAttachmentEN.con_TableNameKey:
this.tableNameKey = strValue;
break;
case clsvtz_ContentAttachmentEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvtz_ContentAttachmentEN.con_AttachmentTitle:
this.attachmentTitle = strValue;
break;
case clsvtz_ContentAttachmentEN.con_IdResourceType:
this.idResourceType = strValue;
break;
case clsvtz_ContentAttachmentEN.con_ResourceTypeID:
this.resourceTypeID = strValue;
break;
case clsvtz_ContentAttachmentEN.con_ResourceTypeName:
this.resourceTypeName = strValue;
break;
case clsvtz_ContentAttachmentEN.con_FileName:
this.fileName = strValue;
break;
case clsvtz_ContentAttachmentEN.con_Extension:
this.extension = strValue;
break;
case clsvtz_ContentAttachmentEN.con_FilePath:
this.filePath = strValue;
break;
case clsvtz_ContentAttachmentEN.con_PdfFilePath:
this.pdfFilePath = strValue;
break;
case clsvtz_ContentAttachmentEN.con_SwfFilePath:
this.swfFilePath = strValue;
break;
case clsvtz_ContentAttachmentEN.con_FileSize:
this.fileSize = Number(strValue);
break;
case clsvtz_ContentAttachmentEN.con_FileSizeUnit:
this.fileSizeUnit = strValue;
break;
case clsvtz_ContentAttachmentEN.con_ImageHeight:
this.imageHeight = Number(strValue);
break;
case clsvtz_ContentAttachmentEN.con_ImageWidth:
this.imageWidth = Number(strValue);
break;
case clsvtz_ContentAttachmentEN.con_UploadPerson:
this.uploadPerson = strValue;
break;
case clsvtz_ContentAttachmentEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvtz_ContentAttachmentEN.con_UpdUserId:
this.updUserId = strValue;
break;
case clsvtz_ContentAttachmentEN.con_Memo:
this.memo = strValue;
break;
case clsvtz_ContentAttachmentEN.con_CourseId:
this.courseId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vtz_ContentAttachment]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public contentTypeName = "";    //内容类型名
public tableName = "";    //主表表名
public fldName = "";    //字段名
public tableNameKey = "";    //主表主键值
public orderNum = 0;    //序号
public attachmentTitle = "";    //附件标题
public idResourceType = "";    //资源类型流水号
public resourceTypeID = "";    //资源类型ID
public resourceTypeName = "";    //资源类型名称
public fileName = "";    //文件名称
public extension = "";    //扩展名
public filePath = "";    //文件路径
public pdfFilePath = "";    //Pdf文件路径
public swfFilePath = "";    //Swf文件路径
public fileSize = 0;    //文件大小
public fileSizeUnit = "";    //文件大小单位
public imageHeight = 0;    //图像高
public imageWidth = 0;    //图像宽
public uploadPerson = "";    //上传人
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
 * 常量:"ContentTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ContentTypeName(): string {return "contentTypeName";}    //内容类型名

 /**
 * 常量:"TableName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TableName(): string {return "tableName";}    //主表表名

 /**
 * 常量:"FldName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FldName(): string {return "fldName";}    //字段名

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
 * 常量:"ResourceTypeID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ResourceTypeID(): string {return "resourceTypeID";}    //资源类型ID

 /**
 * 常量:"ResourceTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ResourceTypeName(): string {return "resourceTypeName";}    //资源类型名称

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
//return propName in new clsvtz_ContentAttachmentEN();
const instance = new clsvtz_ContentAttachmentEN();
return instance.hasOwnProperty(propName);
}
}