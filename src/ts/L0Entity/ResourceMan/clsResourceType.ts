
 /**
 * 类名:clsResourceType
 * 表名:ResourceType(01120089)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:29:26
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
 * 资源类型(ResourceType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsResourceType 
{
public static _CurrTabName= "ResourceType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdResourceType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["idResourceType", "resourceTypeID", "resourceTypeName", "resourceTypeENName", "fileExtentNameLst", "fileExtentNameLst2", "orderNum", "isUse", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idResourceType = "";    //资源类型流水号
public resourceTypeID = "";    //资源类型ID
public resourceTypeName = "";    //资源类型名称
public resourceTypeENName = "";    //ResourceTypeENName
public fileExtentNameLst = "";    //文件扩展名列表
public fileExtentNameLst2 = "";    //文件扩展名列表2
public orderNum = 0;    //序号
public isUse = false;    //是否使用
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
case clsResourceType.con_IdResourceType:
return this.idResourceType;
case clsResourceType.con_ResourceTypeID:
return this.resourceTypeID;
case clsResourceType.con_ResourceTypeName:
return this.resourceTypeName;
case clsResourceType.con_ResourceTypeENName:
return this.resourceTypeENName;
case clsResourceType.con_FileExtentNameLst:
return this.fileExtentNameLst;
case clsResourceType.con_FileExtentNameLst2:
return this.fileExtentNameLst2;
case clsResourceType.con_OrderNum:
return this.orderNum;
case clsResourceType.con_IsUse:
return this.isUse;
case clsResourceType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ResourceType]中不存在!`;
console.error(strMsg);
return "";
}
}


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
 * 常量:"ResourceTypeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResourceTypeENName(): string {return "resourceTypeENName";}    //ResourceTypeENName

 /**
 * 常量:"FileExtentNameLst"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileExtentNameLst(): string {return "fileExtentNameLst";}    //文件扩展名列表

 /**
 * 常量:"FileExtentNameLst2"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileExtentNameLst2(): string {return "fileExtentNameLst2";}    //文件扩展名列表2

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"IsUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsUse(): string {return "isUse";}    //是否使用

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumResourceType
{
 /**
 * 视频
 **/
static readonly Video_0001 = "0001";
 /**
 * 音频
 **/
static readonly Audio_0002 = "0002";
 /**
 * 动画
 **/
static readonly Animation_0003 = "0003";
 /**
 * 图片
 **/
static readonly Picture_0004 = "0004";
 /**
 * 其它
 **/
static readonly Other_0005 = "0005";
 /**
 * PPT
 **/
static readonly PPT_0006 = "0006";
 /**
 * Word文档
 **/
static readonly Word_0007 = "0007";
 /**
 * Access文档
 **/
static readonly Access_0008 = "0008";
 /**
 * XPS文档
 **/
static readonly XPS_0009 = "0009";
 /**
 * 纯文本
 **/
static readonly Text_0010 = "0010";
 /**
 * Html文本
 **/
static readonly Html_0011 = "0011";
 /**
 * 压缩文件
 **/
static readonly CompressedFile_0012 = "0012";
 /**
 * Pdf文件
 **/
static readonly Pdf_0013 = "0013";
 /**
 * Excel文件
 **/
static readonly Excel_0014 = "0014";
 /**
 * 源代码
 **/
static readonly SourceCode_0015 = "0015";
}