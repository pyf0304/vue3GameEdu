
 /**
 * 类名:clsvtz_ContentAttachment
 * 表名:vtz_ContentAttachment(01120208)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/02 14:22:05
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
 * v内容附件(vtz_ContentAttachment)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvtz_ContentAttachment 
{
public static _CurrTabName= "vtz_ContentAttachment"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 25;
public static AttributeName = ["mId", "contentTypeId", "contentTypeName", "tableName", "fldName", "tableNameKey", "orderNum", "attachmentTitle", "idResourceType", "resourceTypeID", "resourceTypeName", "fileName", "extension", "filePath", "pdfFilePath", "swfFilePath", "fileSize", "fileSizeUnit", "imageHeight", "imageWidth", "uploadPerson", "updDate", "updUserId", "memo", "courseId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
case clsvtz_ContentAttachment.con_mId:
return this.mId;
case clsvtz_ContentAttachment.con_ContentTypeId:
return this.contentTypeId;
case clsvtz_ContentAttachment.con_ContentTypeName:
return this.contentTypeName;
case clsvtz_ContentAttachment.con_TableName:
return this.tableName;
case clsvtz_ContentAttachment.con_FldName:
return this.fldName;
case clsvtz_ContentAttachment.con_TableNameKey:
return this.tableNameKey;
case clsvtz_ContentAttachment.con_OrderNum:
return this.orderNum;
case clsvtz_ContentAttachment.con_AttachmentTitle:
return this.attachmentTitle;
case clsvtz_ContentAttachment.con_IdResourceType:
return this.idResourceType;
case clsvtz_ContentAttachment.con_ResourceTypeID:
return this.resourceTypeID;
case clsvtz_ContentAttachment.con_ResourceTypeName:
return this.resourceTypeName;
case clsvtz_ContentAttachment.con_FileName:
return this.fileName;
case clsvtz_ContentAttachment.con_Extension:
return this.extension;
case clsvtz_ContentAttachment.con_FilePath:
return this.filePath;
case clsvtz_ContentAttachment.con_PdfFilePath:
return this.pdfFilePath;
case clsvtz_ContentAttachment.con_SwfFilePath:
return this.swfFilePath;
case clsvtz_ContentAttachment.con_FileSize:
return this.fileSize;
case clsvtz_ContentAttachment.con_FileSizeUnit:
return this.fileSizeUnit;
case clsvtz_ContentAttachment.con_ImageHeight:
return this.imageHeight;
case clsvtz_ContentAttachment.con_ImageWidth:
return this.imageWidth;
case clsvtz_ContentAttachment.con_UploadPerson:
return this.uploadPerson;
case clsvtz_ContentAttachment.con_UpdDate:
return this.updDate;
case clsvtz_ContentAttachment.con_UpdUserId:
return this.updUserId;
case clsvtz_ContentAttachment.con_Memo:
return this.memo;
case clsvtz_ContentAttachment.con_CourseId:
return this.courseId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vtz_ContentAttachment]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"mId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"ContentTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ContentTypeId(): string {return "contentTypeId";}    //内容类型Id

 /**
 * 常量:"ContentTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ContentTypeName(): string {return "contentTypeName";}    //内容类型名

 /**
 * 常量:"TableName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TableName(): string {return "tableName";}    //主表表名

 /**
 * 常量:"FldName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FldName(): string {return "fldName";}    //字段名

 /**
 * 常量:"TableNameKey"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TableNameKey(): string {return "tableNameKey";}    //主表主键值

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"AttachmentTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AttachmentTitle(): string {return "attachmentTitle";}    //附件标题

 /**
 * 常量:"IdResourceType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdResourceType(): string {return "idResourceType";}    //资源类型流水号

 /**
 * 常量:"ResourceTypeID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResourceTypeID(): string {return "resourceTypeID";}    //资源类型ID

 /**
 * 常量:"ResourceTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResourceTypeName(): string {return "resourceTypeName";}    //资源类型名称

 /**
 * 常量:"FileName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileName(): string {return "fileName";}    //文件名称

 /**
 * 常量:"Extension"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Extension(): string {return "extension";}    //扩展名

 /**
 * 常量:"FilePath"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FilePath(): string {return "filePath";}    //文件路径

 /**
 * 常量:"PdfFilePath"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PdfFilePath(): string {return "pdfFilePath";}    //Pdf文件路径

 /**
 * 常量:"SwfFilePath"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SwfFilePath(): string {return "swfFilePath";}    //Swf文件路径

 /**
 * 常量:"FileSize"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileSize(): string {return "fileSize";}    //文件大小

 /**
 * 常量:"FileSizeUnit"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileSizeUnit(): string {return "fileSizeUnit";}    //文件大小单位

 /**
 * 常量:"ImageHeight"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ImageHeight(): string {return "imageHeight";}    //图像高

 /**
 * 常量:"ImageWidth"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ImageWidth(): string {return "imageWidth";}    //图像宽

 /**
 * 常量:"UploadPerson"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UploadPerson(): string {return "uploadPerson";}    //上传人

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id
}