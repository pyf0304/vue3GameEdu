
 /**
 * 类名:clsvtz_ContentAttachmentWApi
 * 表名:vtz_ContentAttachment(01120208)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:10
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v内容附件(vtz_ContentAttachment)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvtz_ContentAttachmentEN } from "@/ts/L0Entity/ResourceMan/clsvtz_ContentAttachmentEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vtz_ContentAttachment_Controller = "vtz_ContentAttachmentApi";
 export const vtz_ContentAttachment_ConstructorName = "vtz_ContentAttachment";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vtz_ContentAttachment_GetObjBymIdAsync(lngmId: number): Promise<clsvtz_ContentAttachmentEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvtz_ContentAttachmentWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objvtz_ContentAttachment = vtz_ContentAttachment_GetObjFromJsonObj(returnObj);
return objvtz_ContentAttachment;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function vtz_ContentAttachment_GetObjBymIdlocalStorage(lngmId: number) {
const strThisFuncName = "GetObjBymIdlocalStorage";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvtz_ContentAttachmentWApi.GetObjBymIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvtz_ContentAttachmentEN._CurrTabName, lngmId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvtz_ContentAttachmentCache: clsvtz_ContentAttachmentEN = JSON.parse(strTempObj);
return objvtz_ContentAttachmentCache;
}
try
{
const objvtz_ContentAttachment = await vtz_ContentAttachment_GetObjBymIdAsync(lngmId);
if (objvtz_ContentAttachment != null)
{
localStorage.setItem(strKey, JSON.stringify(objvtz_ContentAttachment));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvtz_ContentAttachment;
}
return objvtz_ContentAttachment;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function vtz_ContentAttachment_GetObjBymIdCache(lngmId:number,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBymIdCache";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvtz_ContentAttachmentWApi.GetObjBymIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstCache(strCourseId);
try
{
const arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentObjLstCache.filter(x => 
 x.mId == lngmId );
let objvtz_ContentAttachment: clsvtz_ContentAttachmentEN;
if (arrvtz_ContentAttachmentSel.length > 0)
{
objvtz_ContentAttachment = arrvtz_ContentAttachmentSel[0];
return objvtz_ContentAttachment;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvtz_ContentAttachmentConst = await vtz_ContentAttachment_GetObjBymIdAsync(lngmId);
if (objvtz_ContentAttachmentConst != null)
{
vtz_ContentAttachment_ReFreshThisCache(strCourseId);
return objvtz_ContentAttachmentConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vtz_ContentAttachment_SortFunDefa(a:clsvtz_ContentAttachmentEN , b:clsvtz_ContentAttachmentEN): number 
{
return a.mId-b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vtz_ContentAttachment_SortFunDefa2Fld(a:clsvtz_ContentAttachmentEN , b:clsvtz_ContentAttachmentEN): number 
{
if (a.contentTypeId == b.contentTypeId) return a.contentTypeName.localeCompare(b.contentTypeName);
else return a.contentTypeId.localeCompare(b.contentTypeId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vtz_ContentAttachment_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvtz_ContentAttachmentEN.con_mId:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.mId-b.mId;
}
case clsvtz_ContentAttachmentEN.con_ContentTypeId:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.contentTypeId.localeCompare(b.contentTypeId);
}
case clsvtz_ContentAttachmentEN.con_ContentTypeName:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (a.contentTypeName == null) return -1;
if (b.contentTypeName == null) return 1;
return a.contentTypeName.localeCompare(b.contentTypeName);
}
case clsvtz_ContentAttachmentEN.con_TableName:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (a.tableName == null) return -1;
if (b.tableName == null) return 1;
return a.tableName.localeCompare(b.tableName);
}
case clsvtz_ContentAttachmentEN.con_FldName:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.fldName.localeCompare(b.fldName);
}
case clsvtz_ContentAttachmentEN.con_TableNameKey:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.tableNameKey.localeCompare(b.tableNameKey);
}
case clsvtz_ContentAttachmentEN.con_OrderNum:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.orderNum-b.orderNum;
}
case clsvtz_ContentAttachmentEN.con_AttachmentTitle:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (a.attachmentTitle == null) return -1;
if (b.attachmentTitle == null) return 1;
return a.attachmentTitle.localeCompare(b.attachmentTitle);
}
case clsvtz_ContentAttachmentEN.con_IdResourceType:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.idResourceType.localeCompare(b.idResourceType);
}
case clsvtz_ContentAttachmentEN.con_ResourceTypeID:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.resourceTypeID.localeCompare(b.resourceTypeID);
}
case clsvtz_ContentAttachmentEN.con_ResourceTypeName:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.resourceTypeName.localeCompare(b.resourceTypeName);
}
case clsvtz_ContentAttachmentEN.con_FileName:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (a.fileName == null) return -1;
if (b.fileName == null) return 1;
return a.fileName.localeCompare(b.fileName);
}
case clsvtz_ContentAttachmentEN.con_Extension:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (a.extension == null) return -1;
if (b.extension == null) return 1;
return a.extension.localeCompare(b.extension);
}
case clsvtz_ContentAttachmentEN.con_FilePath:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.filePath.localeCompare(b.filePath);
}
case clsvtz_ContentAttachmentEN.con_PdfFilePath:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (a.pdfFilePath == null) return -1;
if (b.pdfFilePath == null) return 1;
return a.pdfFilePath.localeCompare(b.pdfFilePath);
}
case clsvtz_ContentAttachmentEN.con_SwfFilePath:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (a.swfFilePath == null) return -1;
if (b.swfFilePath == null) return 1;
return a.swfFilePath.localeCompare(b.swfFilePath);
}
case clsvtz_ContentAttachmentEN.con_FileSize:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.fileSize-b.fileSize;
}
case clsvtz_ContentAttachmentEN.con_FileSizeUnit:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (a.fileSizeUnit == null) return -1;
if (b.fileSizeUnit == null) return 1;
return a.fileSizeUnit.localeCompare(b.fileSizeUnit);
}
case clsvtz_ContentAttachmentEN.con_ImageHeight:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.imageHeight-b.imageHeight;
}
case clsvtz_ContentAttachmentEN.con_ImageWidth:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.imageWidth-b.imageWidth;
}
case clsvtz_ContentAttachmentEN.con_UploadPerson:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.uploadPerson.localeCompare(b.uploadPerson);
}
case clsvtz_ContentAttachmentEN.con_UpdDate:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsvtz_ContentAttachmentEN.con_UpdUserId:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsvtz_ContentAttachmentEN.con_Memo:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvtz_ContentAttachmentEN.con_CourseId:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vtz_ContentAttachment]中不存在!(in ${ vtz_ContentAttachment_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvtz_ContentAttachmentEN.con_mId:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.mId-a.mId;
}
case clsvtz_ContentAttachmentEN.con_ContentTypeId:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.contentTypeId.localeCompare(a.contentTypeId);
}
case clsvtz_ContentAttachmentEN.con_ContentTypeName:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (b.contentTypeName == null) return -1;
if (a.contentTypeName == null) return 1;
return b.contentTypeName.localeCompare(a.contentTypeName);
}
case clsvtz_ContentAttachmentEN.con_TableName:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (b.tableName == null) return -1;
if (a.tableName == null) return 1;
return b.tableName.localeCompare(a.tableName);
}
case clsvtz_ContentAttachmentEN.con_FldName:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.fldName.localeCompare(a.fldName);
}
case clsvtz_ContentAttachmentEN.con_TableNameKey:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.tableNameKey.localeCompare(a.tableNameKey);
}
case clsvtz_ContentAttachmentEN.con_OrderNum:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.orderNum-a.orderNum;
}
case clsvtz_ContentAttachmentEN.con_AttachmentTitle:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (b.attachmentTitle == null) return -1;
if (a.attachmentTitle == null) return 1;
return b.attachmentTitle.localeCompare(a.attachmentTitle);
}
case clsvtz_ContentAttachmentEN.con_IdResourceType:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.idResourceType.localeCompare(a.idResourceType);
}
case clsvtz_ContentAttachmentEN.con_ResourceTypeID:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.resourceTypeID.localeCompare(a.resourceTypeID);
}
case clsvtz_ContentAttachmentEN.con_ResourceTypeName:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.resourceTypeName.localeCompare(a.resourceTypeName);
}
case clsvtz_ContentAttachmentEN.con_FileName:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (b.fileName == null) return -1;
if (a.fileName == null) return 1;
return b.fileName.localeCompare(a.fileName);
}
case clsvtz_ContentAttachmentEN.con_Extension:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (b.extension == null) return -1;
if (a.extension == null) return 1;
return b.extension.localeCompare(a.extension);
}
case clsvtz_ContentAttachmentEN.con_FilePath:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.filePath.localeCompare(a.filePath);
}
case clsvtz_ContentAttachmentEN.con_PdfFilePath:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (b.pdfFilePath == null) return -1;
if (a.pdfFilePath == null) return 1;
return b.pdfFilePath.localeCompare(a.pdfFilePath);
}
case clsvtz_ContentAttachmentEN.con_SwfFilePath:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (b.swfFilePath == null) return -1;
if (a.swfFilePath == null) return 1;
return b.swfFilePath.localeCompare(a.swfFilePath);
}
case clsvtz_ContentAttachmentEN.con_FileSize:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.fileSize-a.fileSize;
}
case clsvtz_ContentAttachmentEN.con_FileSizeUnit:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (b.fileSizeUnit == null) return -1;
if (a.fileSizeUnit == null) return 1;
return b.fileSizeUnit.localeCompare(a.fileSizeUnit);
}
case clsvtz_ContentAttachmentEN.con_ImageHeight:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.imageHeight-a.imageHeight;
}
case clsvtz_ContentAttachmentEN.con_ImageWidth:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.imageWidth-a.imageWidth;
}
case clsvtz_ContentAttachmentEN.con_UploadPerson:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.uploadPerson.localeCompare(a.uploadPerson);
}
case clsvtz_ContentAttachmentEN.con_UpdDate:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsvtz_ContentAttachmentEN.con_UpdUserId:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsvtz_ContentAttachmentEN.con_Memo:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvtz_ContentAttachmentEN.con_CourseId:
return (a: clsvtz_ContentAttachmentEN, b: clsvtz_ContentAttachmentEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vtz_ContentAttachment]中不存在!(in ${ vtz_ContentAttachment_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vtz_ContentAttachment_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvtz_ContentAttachmentEN.con_mId:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.mId === value;
}
case clsvtz_ContentAttachmentEN.con_ContentTypeId:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.contentTypeId === value;
}
case clsvtz_ContentAttachmentEN.con_ContentTypeName:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.contentTypeName === value;
}
case clsvtz_ContentAttachmentEN.con_TableName:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.tableName === value;
}
case clsvtz_ContentAttachmentEN.con_FldName:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.fldName === value;
}
case clsvtz_ContentAttachmentEN.con_TableNameKey:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.tableNameKey === value;
}
case clsvtz_ContentAttachmentEN.con_OrderNum:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.orderNum === value;
}
case clsvtz_ContentAttachmentEN.con_AttachmentTitle:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.attachmentTitle === value;
}
case clsvtz_ContentAttachmentEN.con_IdResourceType:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.idResourceType === value;
}
case clsvtz_ContentAttachmentEN.con_ResourceTypeID:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.resourceTypeID === value;
}
case clsvtz_ContentAttachmentEN.con_ResourceTypeName:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.resourceTypeName === value;
}
case clsvtz_ContentAttachmentEN.con_FileName:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.fileName === value;
}
case clsvtz_ContentAttachmentEN.con_Extension:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.extension === value;
}
case clsvtz_ContentAttachmentEN.con_FilePath:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.filePath === value;
}
case clsvtz_ContentAttachmentEN.con_PdfFilePath:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.pdfFilePath === value;
}
case clsvtz_ContentAttachmentEN.con_SwfFilePath:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.swfFilePath === value;
}
case clsvtz_ContentAttachmentEN.con_FileSize:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.fileSize === value;
}
case clsvtz_ContentAttachmentEN.con_FileSizeUnit:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.fileSizeUnit === value;
}
case clsvtz_ContentAttachmentEN.con_ImageHeight:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.imageHeight === value;
}
case clsvtz_ContentAttachmentEN.con_ImageWidth:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.imageWidth === value;
}
case clsvtz_ContentAttachmentEN.con_UploadPerson:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.uploadPerson === value;
}
case clsvtz_ContentAttachmentEN.con_UpdDate:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.updDate === value;
}
case clsvtz_ContentAttachmentEN.con_UpdUserId:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.updUserId === value;
}
case clsvtz_ContentAttachmentEN.con_Memo:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.memo === value;
}
case clsvtz_ContentAttachmentEN.con_CourseId:
return (obj: clsvtz_ContentAttachmentEN) => {
return obj.courseId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vtz_ContentAttachment]中不存在!(in ${ vtz_ContentAttachment_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function vtz_ContentAttachment_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsvtz_ContentAttachmentWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvtz_ContentAttachmentWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvtz_ContentAttachmentEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvtz_ContentAttachmentEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvtz_ContentAttachmentEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngmId = Number(strInValue);
if (lngmId == 0)
{
return "";
}
const objvtz_ContentAttachment = await vtz_ContentAttachment_GetObjBymIdCache(lngmId , strCourseIdClassfy);
if (objvtz_ContentAttachment == null) return "";
if (objvtz_ContentAttachment.GetFldValue(strOutFldName) == null) return "";
return objvtz_ContentAttachment.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCourseId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function vtz_ContentAttachment_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsvtz_ContentAttachmentWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvtz_ContentAttachmentWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvtz_ContentAttachmentEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrvtz_ContentAttachment = await vtz_ContentAttachment_GetObjLstCache(strCourseIdClassfy);
if (arrvtz_ContentAttachment == null) return [];
let arrvtz_ContentAttachmentSel = arrvtz_ContentAttachment;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvtz_ContentAttachmentSel.length == 0) return [];
return arrvtz_ContentAttachmentSel.map(x=>x.mId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vtz_ContentAttachment_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFldName,
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const arrId = data.returnStrLst.split(',');
return arrId;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vtz_ContentAttachment_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
*/
export  async function vtz_ContentAttachment_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export  async function vtz_ContentAttachment_GetFirstObjAsync(strWhereCond: string): Promise<clsvtz_ContentAttachmentEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objvtz_ContentAttachment = vtz_ContentAttachment_GetObjFromJsonObj(returnObj);
return objvtz_ContentAttachment;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vtz_ContentAttachment_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvtz_ContentAttachmentEN.WhereFormat) == false)
{
strWhereCond = Format(clsvtz_ContentAttachmentEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsvtz_ContentAttachmentEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvtz_ContentAttachmentEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvtz_ContentAttachmentEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvtz_ContentAttachmentExObjLstCache: Array<clsvtz_ContentAttachmentEN> = CacheHelper.Get(strKey);
const arrvtz_ContentAttachmentObjLstT = vtz_ContentAttachment_GetObjLstByJSONObjLst(arrvtz_ContentAttachmentExObjLstCache);
return arrvtz_ContentAttachmentObjLstT;
}
try
{
const arrvtz_ContentAttachmentExObjLst = await vtz_ContentAttachment_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvtz_ContentAttachmentExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvtz_ContentAttachmentExObjLst.length);
console.log(strInfo);
return arrvtz_ContentAttachmentExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vtz_ContentAttachment_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvtz_ContentAttachmentEN.WhereFormat) == false)
{
strWhereCond = Format(clsvtz_ContentAttachmentEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvtz_ContentAttachmentEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsvtz_ContentAttachmentEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvtz_ContentAttachmentEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvtz_ContentAttachmentEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvtz_ContentAttachmentExObjLstCache: Array<clsvtz_ContentAttachmentEN> = JSON.parse(strTempObjLst);
const arrvtz_ContentAttachmentObjLstT = vtz_ContentAttachment_GetObjLstByJSONObjLst(arrvtz_ContentAttachmentExObjLstCache);
return arrvtz_ContentAttachmentObjLstT;
}
try
{
const arrvtz_ContentAttachmentExObjLst = await vtz_ContentAttachment_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvtz_ContentAttachmentExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvtz_ContentAttachmentExObjLst.length);
console.log(strInfo);
return arrvtz_ContentAttachmentExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vtz_ContentAttachment_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvtz_ContentAttachmentEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvtz_ContentAttachmentObjLstCache: Array<clsvtz_ContentAttachmentEN> = JSON.parse(strTempObjLst);
return arrvtz_ContentAttachmentObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vtz_ContentAttachment_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvtz_ContentAttachmentEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vtz_ContentAttachment_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vtz_ContentAttachment_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvtz_ContentAttachmentEN.WhereFormat) == false)
{
strWhereCond = Format(clsvtz_ContentAttachmentEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvtz_ContentAttachmentEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsvtz_ContentAttachmentEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvtz_ContentAttachmentEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvtz_ContentAttachmentEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvtz_ContentAttachmentExObjLstCache: Array<clsvtz_ContentAttachmentEN> = JSON.parse(strTempObjLst);
const arrvtz_ContentAttachmentObjLstT = vtz_ContentAttachment_GetObjLstByJSONObjLst(arrvtz_ContentAttachmentExObjLstCache);
return arrvtz_ContentAttachmentObjLstT;
}
try
{
const arrvtz_ContentAttachmentExObjLst = await vtz_ContentAttachment_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvtz_ContentAttachmentExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvtz_ContentAttachmentExObjLst.length);
console.log(strInfo);
return arrvtz_ContentAttachmentExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vtz_ContentAttachment_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvtz_ContentAttachmentEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvtz_ContentAttachmentObjLstCache: Array<clsvtz_ContentAttachmentEN> = JSON.parse(strTempObjLst);
return arrvtz_ContentAttachmentObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vtz_ContentAttachment_GetObjLstCache(strCourseId: string): Promise<Array<clsvtz_ContentAttachmentEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvtz_ContentAttachmentWApi.vtz_ContentAttachment_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvtz_ContentAttachmentWApi.vtz_ContentAttachment_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrvtz_ContentAttachmentObjLstCache;
switch (clsvtz_ContentAttachmentEN.CacheModeId)
{
case "04"://sessionStorage
arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstClientCache(strCourseId);
break;
default:
arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstClientCache(strCourseId);
break;
}
return arrvtz_ContentAttachmentObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vtz_ContentAttachment_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvtz_ContentAttachmentObjLstCache;
switch (clsvtz_ContentAttachmentEN.CacheModeId)
{
case "04"://sessionStorage
arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrvtz_ContentAttachmentObjLstCache = null;
break;
default:
arrvtz_ContentAttachmentObjLstCache = null;
break;
}
return arrvtz_ContentAttachmentObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vtz_ContentAttachment_GetSubObjLstCache(objvtz_ContentAttachmentCond: clsvtz_ContentAttachmentEN ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstCache(strCourseId);
let arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentObjLstCache;
if (objvtz_ContentAttachmentCond.sfFldComparisonOp == null || objvtz_ContentAttachmentCond.sfFldComparisonOp == "") return arrvtz_ContentAttachmentSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvtz_ContentAttachmentCond.sfFldComparisonOp);
//console.log("clsvtz_ContentAttachmentWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvtz_ContentAttachmentCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvtz_ContentAttachmentCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvtz_ContentAttachmentSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvtz_ContentAttachmentCond), vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvtz_ContentAttachmentEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function vtz_ContentAttachment_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvtz_ContentAttachmentEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vtz_ContentAttachment_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
*/
export  async function vtz_ContentAttachment_GetObjLstBymIdLstCache(arrmIdLst: Array<number> ,strCourseId: string) {
const strThisFuncName = "GetObjLstBymIdLstCache";
try
{
const arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstCache(strCourseId);
const arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentObjLstCache.filter(x => arrmIdLst.indexOf(x.mId)>-1);
return arrvtz_ContentAttachmentSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrmIdLst.join(","), vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
}

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vtz_ContentAttachment_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvtz_ContentAttachmentEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTopPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vtz_ContentAttachment_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vtz_ContentAttachment_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvtz_ContentAttachmentEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRangePara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vtz_ContentAttachment_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function vtz_ContentAttachment_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvtz_ContentAttachmentEN>();
const arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstCache(strCourseId);
if (arrvtz_ContentAttachmentObjLstCache.length == 0) return arrvtz_ContentAttachmentObjLstCache;
let arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvtz_ContentAttachmentCond = new clsvtz_ContentAttachmentEN();
ObjectAssign(objvtz_ContentAttachmentCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvtz_ContentAttachmentWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvtz_ContentAttachmentCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvtz_ContentAttachmentSel.length == 0) return arrvtz_ContentAttachmentSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.sort(vtz_ContentAttachment_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.sort(objPagerPara.sortFun);
}
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.slice(intStart, intEnd);     
return arrvtz_ContentAttachmentSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvtz_ContentAttachmentEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vtz_ContentAttachment_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvtz_ContentAttachmentEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvtz_ContentAttachmentEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPagerPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vtz_ContentAttachment_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vtz_ContentAttachment_IsExistRecordCache(objvtz_ContentAttachmentCond: clsvtz_ContentAttachmentEN,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstCache(strCourseId);
if (arrvtz_ContentAttachmentObjLstCache == null) return false;
let arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentObjLstCache;
if (objvtz_ContentAttachmentCond.sfFldComparisonOp == null || objvtz_ContentAttachmentCond.sfFldComparisonOp == "") return arrvtz_ContentAttachmentSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvtz_ContentAttachmentCond.sfFldComparisonOp);
//console.log("clsvtz_ContentAttachmentWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvtz_ContentAttachmentCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvtz_ContentAttachmentCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvtz_ContentAttachmentSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvtz_ContentAttachmentCond), vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return false;
}

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function vtz_ContentAttachment_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function vtz_ContentAttachment_IsExistCache(lngmId:number,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstCache(strCourseId);
if (arrvtz_ContentAttachmentObjLstCache == null) return false;
try
{
const arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentObjLstCache.filter(x => x.mId == lngmId);
if (arrvtz_ContentAttachmentSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e)
{
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngmId, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vtz_ContentAttachment_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export  async function vtz_ContentAttachment_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vtz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objvtz_ContentAttachmentCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vtz_ContentAttachment_GetRecCountByCondCache(objvtz_ContentAttachmentCond: clsvtz_ContentAttachmentEN ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvtz_ContentAttachmentObjLstCache = await vtz_ContentAttachment_GetObjLstCache(strCourseId);
if (arrvtz_ContentAttachmentObjLstCache == null) return 0;
let arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentObjLstCache;
if (objvtz_ContentAttachmentCond.sfFldComparisonOp == null || objvtz_ContentAttachmentCond.sfFldComparisonOp == "") return arrvtz_ContentAttachmentSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvtz_ContentAttachmentCond.sfFldComparisonOp);
//console.log("clsvtz_ContentAttachmentWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvtz_ContentAttachmentCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvtz_ContentAttachmentCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvtz_ContentAttachmentSel = arrvtz_ContentAttachmentSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvtz_ContentAttachmentSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvtz_ContentAttachmentCond), vtz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vtz_ContentAttachment_GetWebApiUrl(strController: string, strAction: string): string {
let strServiceUrl:string;
let strCurrIPAddressAndPort = "";
if (clsSysPara4WebApi.bolIsLocalHost == false)
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
}
else
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
}
if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true)
{
strServiceUrl = Format("{0}/{1}/{2}", strCurrIPAddressAndPort, strController, strAction);
}
else
{
strServiceUrl = Format("{0}/{1}/{2}/{3}", strCurrIPAddressAndPort, clsSysPara4WebApi.CurrPrx, strController, strAction);
}
return strServiceUrl;
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function vtz_ContentAttachment_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsvtz_ContentAttachmentWApi.vtz_ContentAttachment_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvtz_ContentAttachmentWApi.vtz_ContentAttachment_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvtz_ContentAttachmentEN._CurrTabName, strCourseId);
switch (clsvtz_ContentAttachmentEN.CacheModeId)
{
case "04"://sessionStorage
sessionStorage.removeItem(strKey);
break;
case "03"://localStorage
localStorage.removeItem(strKey);
break;
case "02"://ClientCache
CacheHelper.Remove(strKey);
break;
default:
CacheHelper.Remove(strKey);
break;
}
clsvtz_ContentAttachmentEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
const strMsg = Format("刷新缓存成功!");
console.trace(strMsg);
}
else
{
const strMsg = Format("刷新缓存已经关闭。");
console.trace(strMsg);
}
}
/**
* 获取最新的缓存刷新时间
* @returns 最新的缓存刷新时间，字符串型
**/
export  function vtz_ContentAttachment_GetLastRefreshTime():string
{
if (clsvtz_ContentAttachmentEN._RefreshTimeLst.length == 0) return "";
return clsvtz_ContentAttachmentEN._RefreshTimeLst[clsvtz_ContentAttachmentEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vtz_ContentAttachment_GetJSONStrByObj (pobjvtz_ContentAttachmentEN: clsvtz_ContentAttachmentEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvtz_ContentAttachmentEN);
}
catch(objException)
{
const strEx = GetExceptionStr(objException);
myShowErrorMsg(strEx);
}
if (strJson == undefined) return "";
else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function vtz_ContentAttachment_GetObjLstByJSONStr (strJSON: string): Array<clsvtz_ContentAttachmentEN>
{
let arrvtz_ContentAttachmentObjLst = new Array<clsvtz_ContentAttachmentEN>();
if (strJSON === "")
{
return arrvtz_ContentAttachmentObjLst;
}
try
{
arrvtz_ContentAttachmentObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvtz_ContentAttachmentObjLst;
}
return arrvtz_ContentAttachmentObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvtz_ContentAttachmentObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vtz_ContentAttachment_GetObjLstByJSONObjLst (arrvtz_ContentAttachmentObjLstS: Array<clsvtz_ContentAttachmentEN>): Array<clsvtz_ContentAttachmentEN>
{
const arrvtz_ContentAttachmentObjLst = new Array<clsvtz_ContentAttachmentEN>();
for (const objInFor of arrvtz_ContentAttachmentObjLstS) {
const obj1 = vtz_ContentAttachment_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvtz_ContentAttachmentObjLst.push(obj1);
}
return arrvtz_ContentAttachmentObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vtz_ContentAttachment_GetObjByJSONStr (strJSON: string): clsvtz_ContentAttachmentEN
{
let pobjvtz_ContentAttachmentEN = new clsvtz_ContentAttachmentEN();
if (strJSON === "")
{
return pobjvtz_ContentAttachmentEN;
}
try
{
pobjvtz_ContentAttachmentEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvtz_ContentAttachmentEN;
}
return pobjvtz_ContentAttachmentEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vtz_ContentAttachment_GetCombineCondition(objvtz_ContentAttachmentCond: clsvtz_ContentAttachmentEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_mId) == true)
{
const strComparisonOpmId:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvtz_ContentAttachmentEN.con_mId, objvtz_ContentAttachmentCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_ContentTypeId) == true)
{
const strComparisonOpContentTypeId:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_ContentTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_ContentTypeId, objvtz_ContentAttachmentCond.contentTypeId, strComparisonOpContentTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_ContentTypeName) == true)
{
const strComparisonOpContentTypeName:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_ContentTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_ContentTypeName, objvtz_ContentAttachmentCond.contentTypeName, strComparisonOpContentTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_TableName) == true)
{
const strComparisonOpTableName:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_TableName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_TableName, objvtz_ContentAttachmentCond.tableName, strComparisonOpTableName);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_FldName) == true)
{
const strComparisonOpFldName:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_FldName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_FldName, objvtz_ContentAttachmentCond.fldName, strComparisonOpFldName);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_TableNameKey) == true)
{
const strComparisonOpTableNameKey:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_TableNameKey];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_TableNameKey, objvtz_ContentAttachmentCond.tableNameKey, strComparisonOpTableNameKey);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvtz_ContentAttachmentEN.con_OrderNum, objvtz_ContentAttachmentCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_AttachmentTitle) == true)
{
const strComparisonOpAttachmentTitle:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_AttachmentTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_AttachmentTitle, objvtz_ContentAttachmentCond.attachmentTitle, strComparisonOpAttachmentTitle);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_IdResourceType) == true)
{
const strComparisonOpIdResourceType:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_IdResourceType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_IdResourceType, objvtz_ContentAttachmentCond.idResourceType, strComparisonOpIdResourceType);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_ResourceTypeID) == true)
{
const strComparisonOpResourceTypeID:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_ResourceTypeID];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_ResourceTypeID, objvtz_ContentAttachmentCond.resourceTypeID, strComparisonOpResourceTypeID);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_ResourceTypeName) == true)
{
const strComparisonOpResourceTypeName:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_ResourceTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_ResourceTypeName, objvtz_ContentAttachmentCond.resourceTypeName, strComparisonOpResourceTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_FileName) == true)
{
const strComparisonOpFileName:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_FileName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_FileName, objvtz_ContentAttachmentCond.fileName, strComparisonOpFileName);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_Extension) == true)
{
const strComparisonOpExtension:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_Extension];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_Extension, objvtz_ContentAttachmentCond.extension, strComparisonOpExtension);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_FilePath) == true)
{
const strComparisonOpFilePath:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_FilePath];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_FilePath, objvtz_ContentAttachmentCond.filePath, strComparisonOpFilePath);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_PdfFilePath) == true)
{
const strComparisonOpPdfFilePath:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_PdfFilePath];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_PdfFilePath, objvtz_ContentAttachmentCond.pdfFilePath, strComparisonOpPdfFilePath);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_SwfFilePath) == true)
{
const strComparisonOpSwfFilePath:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_SwfFilePath];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_SwfFilePath, objvtz_ContentAttachmentCond.swfFilePath, strComparisonOpSwfFilePath);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_FileSize) == true)
{
const strComparisonOpFileSize:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_FileSize];
strWhereCond += Format(" And {0} {2} {1}", clsvtz_ContentAttachmentEN.con_FileSize, objvtz_ContentAttachmentCond.fileSize, strComparisonOpFileSize);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_FileSizeUnit) == true)
{
const strComparisonOpFileSizeUnit:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_FileSizeUnit];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_FileSizeUnit, objvtz_ContentAttachmentCond.fileSizeUnit, strComparisonOpFileSizeUnit);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_ImageHeight) == true)
{
const strComparisonOpImageHeight:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_ImageHeight];
strWhereCond += Format(" And {0} {2} {1}", clsvtz_ContentAttachmentEN.con_ImageHeight, objvtz_ContentAttachmentCond.imageHeight, strComparisonOpImageHeight);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_ImageWidth) == true)
{
const strComparisonOpImageWidth:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_ImageWidth];
strWhereCond += Format(" And {0} {2} {1}", clsvtz_ContentAttachmentEN.con_ImageWidth, objvtz_ContentAttachmentCond.imageWidth, strComparisonOpImageWidth);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_UploadPerson) == true)
{
const strComparisonOpUploadPerson:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_UploadPerson];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_UploadPerson, objvtz_ContentAttachmentCond.uploadPerson, strComparisonOpUploadPerson);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_UpdDate, objvtz_ContentAttachmentCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_UpdUserId, objvtz_ContentAttachmentCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_Memo, objvtz_ContentAttachmentCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvtz_ContentAttachmentCond.dicFldComparisonOp, clsvtz_ContentAttachmentEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvtz_ContentAttachmentCond.dicFldComparisonOp[clsvtz_ContentAttachmentEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvtz_ContentAttachmentEN.con_CourseId, objvtz_ContentAttachmentCond.courseId, strComparisonOpCourseId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvtz_ContentAttachmentENS:源对象
 * @param objvtz_ContentAttachmentENT:目标对象
*/
export  function vtz_ContentAttachment_CopyObjTo(objvtz_ContentAttachmentENS: clsvtz_ContentAttachmentEN , objvtz_ContentAttachmentENT: clsvtz_ContentAttachmentEN ): void 
{
objvtz_ContentAttachmentENT.mId = objvtz_ContentAttachmentENS.mId; //mId
objvtz_ContentAttachmentENT.contentTypeId = objvtz_ContentAttachmentENS.contentTypeId; //内容类型Id
objvtz_ContentAttachmentENT.contentTypeName = objvtz_ContentAttachmentENS.contentTypeName; //内容类型名
objvtz_ContentAttachmentENT.tableName = objvtz_ContentAttachmentENS.tableName; //主表表名
objvtz_ContentAttachmentENT.fldName = objvtz_ContentAttachmentENS.fldName; //字段名
objvtz_ContentAttachmentENT.tableNameKey = objvtz_ContentAttachmentENS.tableNameKey; //主表主键值
objvtz_ContentAttachmentENT.orderNum = objvtz_ContentAttachmentENS.orderNum; //序号
objvtz_ContentAttachmentENT.attachmentTitle = objvtz_ContentAttachmentENS.attachmentTitle; //附件标题
objvtz_ContentAttachmentENT.idResourceType = objvtz_ContentAttachmentENS.idResourceType; //资源类型流水号
objvtz_ContentAttachmentENT.resourceTypeID = objvtz_ContentAttachmentENS.resourceTypeID; //资源类型ID
objvtz_ContentAttachmentENT.resourceTypeName = objvtz_ContentAttachmentENS.resourceTypeName; //资源类型名称
objvtz_ContentAttachmentENT.fileName = objvtz_ContentAttachmentENS.fileName; //文件名称
objvtz_ContentAttachmentENT.extension = objvtz_ContentAttachmentENS.extension; //扩展名
objvtz_ContentAttachmentENT.filePath = objvtz_ContentAttachmentENS.filePath; //文件路径
objvtz_ContentAttachmentENT.pdfFilePath = objvtz_ContentAttachmentENS.pdfFilePath; //Pdf文件路径
objvtz_ContentAttachmentENT.swfFilePath = objvtz_ContentAttachmentENS.swfFilePath; //Swf文件路径
objvtz_ContentAttachmentENT.fileSize = objvtz_ContentAttachmentENS.fileSize; //文件大小
objvtz_ContentAttachmentENT.fileSizeUnit = objvtz_ContentAttachmentENS.fileSizeUnit; //文件大小单位
objvtz_ContentAttachmentENT.imageHeight = objvtz_ContentAttachmentENS.imageHeight; //图像高
objvtz_ContentAttachmentENT.imageWidth = objvtz_ContentAttachmentENS.imageWidth; //图像宽
objvtz_ContentAttachmentENT.uploadPerson = objvtz_ContentAttachmentENS.uploadPerson; //上传人
objvtz_ContentAttachmentENT.updDate = objvtz_ContentAttachmentENS.updDate; //修改日期
objvtz_ContentAttachmentENT.updUserId = objvtz_ContentAttachmentENS.updUserId; //修改用户Id
objvtz_ContentAttachmentENT.memo = objvtz_ContentAttachmentENS.memo; //备注
objvtz_ContentAttachmentENT.courseId = objvtz_ContentAttachmentENS.courseId; //课程Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvtz_ContentAttachmentENS:源对象
 * @param objvtz_ContentAttachmentENT:目标对象
*/
export  function vtz_ContentAttachment_GetObjFromJsonObj(objvtz_ContentAttachmentENS: clsvtz_ContentAttachmentEN): clsvtz_ContentAttachmentEN 
{
 const objvtz_ContentAttachmentENT: clsvtz_ContentAttachmentEN = new clsvtz_ContentAttachmentEN();
ObjectAssign(objvtz_ContentAttachmentENT, objvtz_ContentAttachmentENS);
 return objvtz_ContentAttachmentENT;
}