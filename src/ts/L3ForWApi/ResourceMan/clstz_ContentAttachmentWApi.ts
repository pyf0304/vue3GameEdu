
 /**
 * 类名:clstz_ContentAttachmentWApi
 * 表名:tz_ContentAttachment(01120207)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:44
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
 * 内容附件(tz_ContentAttachment)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clstz_ContentAttachmentEN } from "@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const tz_ContentAttachment_Controller = "tz_ContentAttachmentApi";
 export const tz_ContentAttachment_ConstructorName = "tz_ContentAttachment";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function tz_ContentAttachment_GetObjBymIdAsync(lngmId: number): Promise<clstz_ContentAttachmentEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clstz_ContentAttachmentWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const objtz_ContentAttachment = tz_ContentAttachment_GetObjFromJsonObj(returnObj);
return objtz_ContentAttachment;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function tz_ContentAttachment_SortFunDefa(a:clstz_ContentAttachmentEN , b:clstz_ContentAttachmentEN): number 
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
export  function tz_ContentAttachment_SortFunDefa2Fld(a:clstz_ContentAttachmentEN , b:clstz_ContentAttachmentEN): number 
{
if (a.contentTypeId == b.contentTypeId) return a.tableNameKey.localeCompare(b.tableNameKey);
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
export  function tz_ContentAttachment_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clstz_ContentAttachmentEN.con_mId:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return a.mId-b.mId;
}
case clstz_ContentAttachmentEN.con_ContentTypeId:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return a.contentTypeId.localeCompare(b.contentTypeId);
}
case clstz_ContentAttachmentEN.con_TableNameKey:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return a.tableNameKey.localeCompare(b.tableNameKey);
}
case clstz_ContentAttachmentEN.con_OrderNum:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return a.orderNum-b.orderNum;
}
case clstz_ContentAttachmentEN.con_AttachmentTitle:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.attachmentTitle == null) return -1;
if (b.attachmentTitle == null) return 1;
return a.attachmentTitle.localeCompare(b.attachmentTitle);
}
case clstz_ContentAttachmentEN.con_IdResourceType:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return a.idResourceType.localeCompare(b.idResourceType);
}
case clstz_ContentAttachmentEN.con_FileName:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.fileName == null) return -1;
if (b.fileName == null) return 1;
return a.fileName.localeCompare(b.fileName);
}
case clstz_ContentAttachmentEN.con_Extension:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.extension == null) return -1;
if (b.extension == null) return 1;
return a.extension.localeCompare(b.extension);
}
case clstz_ContentAttachmentEN.con_FilePath:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.filePath == null) return -1;
if (b.filePath == null) return 1;
return a.filePath.localeCompare(b.filePath);
}
case clstz_ContentAttachmentEN.con_PdfFilePath:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.pdfFilePath == null) return -1;
if (b.pdfFilePath == null) return 1;
return a.pdfFilePath.localeCompare(b.pdfFilePath);
}
case clstz_ContentAttachmentEN.con_SwfFilePath:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.swfFilePath == null) return -1;
if (b.swfFilePath == null) return 1;
return a.swfFilePath.localeCompare(b.swfFilePath);
}
case clstz_ContentAttachmentEN.con_TextContent:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.textContent == null) return -1;
if (b.textContent == null) return 1;
return a.textContent.localeCompare(b.textContent);
}
case clstz_ContentAttachmentEN.con_FileSize:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return a.fileSize-b.fileSize;
}
case clstz_ContentAttachmentEN.con_FileSizeUnit:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.fileSizeUnit == null) return -1;
if (b.fileSizeUnit == null) return 1;
return a.fileSizeUnit.localeCompare(b.fileSizeUnit);
}
case clstz_ContentAttachmentEN.con_ImageHeight:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return a.imageHeight-b.imageHeight;
}
case clstz_ContentAttachmentEN.con_ImageWidth:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return a.imageWidth-b.imageWidth;
}
case clstz_ContentAttachmentEN.con_UploadPerson:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.uploadPerson == null) return -1;
if (b.uploadPerson == null) return 1;
return a.uploadPerson.localeCompare(b.uploadPerson);
}
case clstz_ContentAttachmentEN.con_UploadDate:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return a.uploadDate.localeCompare(b.uploadDate);
}
case clstz_ContentAttachmentEN.con_UpdDate:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clstz_ContentAttachmentEN.con_UpdUserId:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clstz_ContentAttachmentEN.con_Memo:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clstz_ContentAttachmentEN.con_CourseId:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[tz_ContentAttachment]中不存在!(in ${ tz_ContentAttachment_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clstz_ContentAttachmentEN.con_mId:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return b.mId-a.mId;
}
case clstz_ContentAttachmentEN.con_ContentTypeId:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return b.contentTypeId.localeCompare(a.contentTypeId);
}
case clstz_ContentAttachmentEN.con_TableNameKey:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return b.tableNameKey.localeCompare(a.tableNameKey);
}
case clstz_ContentAttachmentEN.con_OrderNum:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return b.orderNum-a.orderNum;
}
case clstz_ContentAttachmentEN.con_AttachmentTitle:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.attachmentTitle == null) return -1;
if (a.attachmentTitle == null) return 1;
return b.attachmentTitle.localeCompare(a.attachmentTitle);
}
case clstz_ContentAttachmentEN.con_IdResourceType:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return b.idResourceType.localeCompare(a.idResourceType);
}
case clstz_ContentAttachmentEN.con_FileName:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.fileName == null) return -1;
if (a.fileName == null) return 1;
return b.fileName.localeCompare(a.fileName);
}
case clstz_ContentAttachmentEN.con_Extension:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.extension == null) return -1;
if (a.extension == null) return 1;
return b.extension.localeCompare(a.extension);
}
case clstz_ContentAttachmentEN.con_FilePath:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.filePath == null) return -1;
if (a.filePath == null) return 1;
return b.filePath.localeCompare(a.filePath);
}
case clstz_ContentAttachmentEN.con_PdfFilePath:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.pdfFilePath == null) return -1;
if (a.pdfFilePath == null) return 1;
return b.pdfFilePath.localeCompare(a.pdfFilePath);
}
case clstz_ContentAttachmentEN.con_SwfFilePath:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.swfFilePath == null) return -1;
if (a.swfFilePath == null) return 1;
return b.swfFilePath.localeCompare(a.swfFilePath);
}
case clstz_ContentAttachmentEN.con_TextContent:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.textContent == null) return -1;
if (a.textContent == null) return 1;
return b.textContent.localeCompare(a.textContent);
}
case clstz_ContentAttachmentEN.con_FileSize:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return b.fileSize-a.fileSize;
}
case clstz_ContentAttachmentEN.con_FileSizeUnit:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.fileSizeUnit == null) return -1;
if (a.fileSizeUnit == null) return 1;
return b.fileSizeUnit.localeCompare(a.fileSizeUnit);
}
case clstz_ContentAttachmentEN.con_ImageHeight:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return b.imageHeight-a.imageHeight;
}
case clstz_ContentAttachmentEN.con_ImageWidth:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return b.imageWidth-a.imageWidth;
}
case clstz_ContentAttachmentEN.con_UploadPerson:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.uploadPerson == null) return -1;
if (a.uploadPerson == null) return 1;
return b.uploadPerson.localeCompare(a.uploadPerson);
}
case clstz_ContentAttachmentEN.con_UploadDate:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return b.uploadDate.localeCompare(a.uploadDate);
}
case clstz_ContentAttachmentEN.con_UpdDate:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clstz_ContentAttachmentEN.con_UpdUserId:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clstz_ContentAttachmentEN.con_Memo:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clstz_ContentAttachmentEN.con_CourseId:
return (a: clstz_ContentAttachmentEN, b: clstz_ContentAttachmentEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[tz_ContentAttachment]中不存在!(in ${ tz_ContentAttachment_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function tz_ContentAttachment_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clstz_ContentAttachmentEN.con_mId:
return (obj: clstz_ContentAttachmentEN) => {
return obj.mId === value;
}
case clstz_ContentAttachmentEN.con_ContentTypeId:
return (obj: clstz_ContentAttachmentEN) => {
return obj.contentTypeId === value;
}
case clstz_ContentAttachmentEN.con_TableNameKey:
return (obj: clstz_ContentAttachmentEN) => {
return obj.tableNameKey === value;
}
case clstz_ContentAttachmentEN.con_OrderNum:
return (obj: clstz_ContentAttachmentEN) => {
return obj.orderNum === value;
}
case clstz_ContentAttachmentEN.con_AttachmentTitle:
return (obj: clstz_ContentAttachmentEN) => {
return obj.attachmentTitle === value;
}
case clstz_ContentAttachmentEN.con_IdResourceType:
return (obj: clstz_ContentAttachmentEN) => {
return obj.idResourceType === value;
}
case clstz_ContentAttachmentEN.con_FileName:
return (obj: clstz_ContentAttachmentEN) => {
return obj.fileName === value;
}
case clstz_ContentAttachmentEN.con_Extension:
return (obj: clstz_ContentAttachmentEN) => {
return obj.extension === value;
}
case clstz_ContentAttachmentEN.con_FilePath:
return (obj: clstz_ContentAttachmentEN) => {
return obj.filePath === value;
}
case clstz_ContentAttachmentEN.con_PdfFilePath:
return (obj: clstz_ContentAttachmentEN) => {
return obj.pdfFilePath === value;
}
case clstz_ContentAttachmentEN.con_SwfFilePath:
return (obj: clstz_ContentAttachmentEN) => {
return obj.swfFilePath === value;
}
case clstz_ContentAttachmentEN.con_TextContent:
return (obj: clstz_ContentAttachmentEN) => {
return obj.textContent === value;
}
case clstz_ContentAttachmentEN.con_FileSize:
return (obj: clstz_ContentAttachmentEN) => {
return obj.fileSize === value;
}
case clstz_ContentAttachmentEN.con_FileSizeUnit:
return (obj: clstz_ContentAttachmentEN) => {
return obj.fileSizeUnit === value;
}
case clstz_ContentAttachmentEN.con_ImageHeight:
return (obj: clstz_ContentAttachmentEN) => {
return obj.imageHeight === value;
}
case clstz_ContentAttachmentEN.con_ImageWidth:
return (obj: clstz_ContentAttachmentEN) => {
return obj.imageWidth === value;
}
case clstz_ContentAttachmentEN.con_UploadPerson:
return (obj: clstz_ContentAttachmentEN) => {
return obj.uploadPerson === value;
}
case clstz_ContentAttachmentEN.con_UploadDate:
return (obj: clstz_ContentAttachmentEN) => {
return obj.uploadDate === value;
}
case clstz_ContentAttachmentEN.con_UpdDate:
return (obj: clstz_ContentAttachmentEN) => {
return obj.updDate === value;
}
case clstz_ContentAttachmentEN.con_UpdUserId:
return (obj: clstz_ContentAttachmentEN) => {
return obj.updUserId === value;
}
case clstz_ContentAttachmentEN.con_Memo:
return (obj: clstz_ContentAttachmentEN) => {
return obj.memo === value;
}
case clstz_ContentAttachmentEN.con_CourseId:
return (obj: clstz_ContentAttachmentEN) => {
return obj.courseId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[tz_ContentAttachment]中不存在!(in ${ tz_ContentAttachment_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[tz_ContentAttachment__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function tz_ContentAttachment_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
export  async function tz_ContentAttachment_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
export  async function tz_ContentAttachment_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
export  async function tz_ContentAttachment_GetFirstObjAsync(strWhereCond: string): Promise<clstz_ContentAttachmentEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const objtz_ContentAttachment = tz_ContentAttachment_GetObjFromJsonObj(returnObj);
return objtz_ContentAttachment;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function tz_ContentAttachment_GetObjLstAsync(strWhereCond: string): Promise<Array<clstz_ContentAttachmentEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = tz_ContentAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function tz_ContentAttachment_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clstz_ContentAttachmentEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = tz_ContentAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function tz_ContentAttachment_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clstz_ContentAttachmentEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = tz_ContentAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
export  async function tz_ContentAttachment_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clstz_ContentAttachmentEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = tz_ContentAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function tz_ContentAttachment_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clstz_ContentAttachmentEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clstz_ContentAttachmentEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = tz_ContentAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export  async function tz_ContentAttachment_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngmId);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const configDel = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.delete(strUrl, configDel);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function tz_ContentAttachment_Deltz_ContentAttachmentsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Deltz_ContentAttachmentsAsync";
const strAction = "Deltz_ContentAttachments";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw data.errorMsg;
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function tz_ContentAttachment_Deltz_ContentAttachmentsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Deltz_ContentAttachmentsByCondAsync";
const strAction = "Deltz_ContentAttachmentsByCond";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objtz_ContentAttachmentEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function tz_ContentAttachment_AddNewRecordAsync(objtz_ContentAttachmentEN: clstz_ContentAttachmentEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objtz_ContentAttachmentEN);
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objtz_ContentAttachmentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

 /**
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objtz_ContentAttachmentEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function tz_ContentAttachment_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objtz_ContentAttachmentEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function tz_ContentAttachment_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objtz_ContentAttachmentEN);
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objtz_ContentAttachmentEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function tz_ContentAttachment_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objtz_ContentAttachmentEN);
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export  async function tz_ContentAttachment_AddNewObjSave(objtz_ContentAttachmentEN: clstz_ContentAttachmentEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
tz_ContentAttachment_CheckPropertyNew(objtz_ContentAttachmentEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ tz_ContentAttachment_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await tz_ContentAttachment_CheckUniCond4Add(objtz_ContentAttachmentEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await tz_ContentAttachment_AddNewRecordAsync(objtz_ContentAttachmentEN);
if (returnBool == true)
{
//tz_ContentAttachment_ReFreshCache();
}
else
{
const strInfo = `添加[内容附件(tz_ContentAttachment)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objtz_ContentAttachmentEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ tz_ContentAttachment_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function tz_ContentAttachment_CheckUniCond4Add(objtz_ContentAttachmentEN: clstz_ContentAttachmentEN): Promise<boolean>{
const strUniquenessCondition = tz_ContentAttachment_GetUniCondStr(objtz_ContentAttachmentEN);
const bolIsExistCondition = await tz_ContentAttachment_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export  async function tz_ContentAttachment_CheckUniCond4Update(objtz_ContentAttachmentEN: clstz_ContentAttachmentEN): Promise<boolean>{
const strUniquenessCondition = tz_ContentAttachment_GetUniCondStr4Update(objtz_ContentAttachmentEN);
const bolIsExistCondition = await tz_ContentAttachment_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function tz_ContentAttachment_UpdateObjSave(objtz_ContentAttachmentEN: clstz_ContentAttachmentEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objtz_ContentAttachmentEN.sfUpdFldSetStr = objtz_ContentAttachmentEN.updFldString;//设置哪些字段被修改(脏字段)
if (objtz_ContentAttachmentEN.mId == 0 || objtz_ContentAttachmentEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
tz_ContentAttachment_CheckProperty4Update(objtz_ContentAttachmentEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ tz_ContentAttachment_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await tz_ContentAttachment_CheckUniCond4Update(objtz_ContentAttachmentEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await tz_ContentAttachment_UpdateRecordAsync(objtz_ContentAttachmentEN);
if (returnBool == true)
{
//tz_ContentAttachment_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ tz_ContentAttachment_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objtz_ContentAttachmentEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function tz_ContentAttachment_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objtz_ContentAttachmentEN);
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objtz_ContentAttachmentEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function tz_ContentAttachment_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objtz_ContentAttachmentEN);
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objtz_ContentAttachmentEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function tz_ContentAttachment_AddNewRecordWithReturnKeyAsync(objtz_ContentAttachmentEN: clstz_ContentAttachmentEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objtz_ContentAttachmentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objtz_ContentAttachmentEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function tz_ContentAttachment_UpdateRecordAsync(objtz_ContentAttachmentEN: clstz_ContentAttachmentEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objtz_ContentAttachmentEN.sfUpdFldSetStr === undefined || objtz_ContentAttachmentEN.sfUpdFldSetStr === null || objtz_ContentAttachmentEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objtz_ContentAttachmentEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objtz_ContentAttachmentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objtz_ContentAttachmentEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function tz_ContentAttachment_EditRecordExAsync(objtz_ContentAttachmentEN: clstz_ContentAttachmentEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objtz_ContentAttachmentEN.sfUpdFldSetStr === undefined || objtz_ContentAttachmentEN.sfUpdFldSetStr === null || objtz_ContentAttachmentEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objtz_ContentAttachmentEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objtz_ContentAttachmentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objtz_ContentAttachmentEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function tz_ContentAttachment_UpdateWithConditionAsync(objtz_ContentAttachmentEN: clstz_ContentAttachmentEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objtz_ContentAttachmentEN.sfUpdFldSetStr === undefined || objtz_ContentAttachmentEN.sfUpdFldSetStr === null || objtz_ContentAttachmentEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objtz_ContentAttachmentEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);
objtz_ContentAttachmentEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objtz_ContentAttachmentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function tz_ContentAttachment_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function tz_ContentAttachment_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
export  async function tz_ContentAttachment_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function tz_ContentAttachment_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(tz_ContentAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPrefix,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, tz_ContentAttachment_ConstructorName, strThisFuncName);
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function tz_ContentAttachment_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function tz_ContentAttachment_CheckPropertyNew(pobjtz_ContentAttachmentEN: clstz_ContentAttachmentEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.contentTypeId) === true 
 || pobjtz_ContentAttachmentEN.contentTypeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[内容类型Id]不能为空(In 内容附件)!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.tableNameKey) === true )
{
 throw new Error(`(errid:Watl000411)字段[主表主键值]不能为空(In 内容附件)!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.idResourceType) === true 
 || pobjtz_ContentAttachmentEN.idResourceType.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[资源类型流水号]不能为空(In 内容附件)!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.uploadDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[上传时间]不能为空(In 内容附件)!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.updDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改日期]不能为空(In 内容附件)!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.contentTypeId) == false && GetStrLen(pobjtz_ContentAttachmentEN.contentTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[内容类型Id(contentTypeId)]的长度不能超过4(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.contentTypeId}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.tableNameKey) == false && GetStrLen(pobjtz_ContentAttachmentEN.tableNameKey) > 20)
{
 throw new Error(`(errid:Watl000413)字段[主表主键值(tableNameKey)]的长度不能超过20(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.tableNameKey}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.attachmentTitle) == false && GetStrLen(pobjtz_ContentAttachmentEN.attachmentTitle) > 100)
{
 throw new Error(`(errid:Watl000413)字段[附件标题(attachmentTitle)]的长度不能超过100(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.attachmentTitle}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.idResourceType) == false && GetStrLen(pobjtz_ContentAttachmentEN.idResourceType) > 4)
{
 throw new Error(`(errid:Watl000413)字段[资源类型流水号(idResourceType)]的长度不能超过4(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.idResourceType}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.fileName) == false && GetStrLen(pobjtz_ContentAttachmentEN.fileName) > 500)
{
 throw new Error(`(errid:Watl000413)字段[文件名称(fileName)]的长度不能超过500(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.fileName}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.extension) == false && GetStrLen(pobjtz_ContentAttachmentEN.extension) > 10)
{
 throw new Error(`(errid:Watl000413)字段[扩展名(extension)]的长度不能超过10(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.extension}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.filePath) == false && GetStrLen(pobjtz_ContentAttachmentEN.filePath) > 500)
{
 throw new Error(`(errid:Watl000413)字段[文件路径(filePath)]的长度不能超过500(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.filePath}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.pdfFilePath) == false && GetStrLen(pobjtz_ContentAttachmentEN.pdfFilePath) > 500)
{
 throw new Error(`(errid:Watl000413)字段[Pdf文件路径(pdfFilePath)]的长度不能超过500(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.pdfFilePath}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.swfFilePath) == false && GetStrLen(pobjtz_ContentAttachmentEN.swfFilePath) > 500)
{
 throw new Error(`(errid:Watl000413)字段[Swf文件路径(swfFilePath)]的长度不能超过500(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.swfFilePath}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.textContent) == false && GetStrLen(pobjtz_ContentAttachmentEN.textContent) > 8000)
{
 throw new Error(`(errid:Watl000413)字段[TextContent(textContent)]的长度不能超过8000(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.textContent}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.fileSizeUnit) == false && GetStrLen(pobjtz_ContentAttachmentEN.fileSizeUnit) > 10)
{
 throw new Error(`(errid:Watl000413)字段[文件大小单位(fileSizeUnit)]的长度不能超过10(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.fileSizeUnit}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.uploadPerson) == false && GetStrLen(pobjtz_ContentAttachmentEN.uploadPerson) > 20)
{
 throw new Error(`(errid:Watl000413)字段[上传人(uploadPerson)]的长度不能超过20(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.uploadPerson}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.uploadDate) == false && GetStrLen(pobjtz_ContentAttachmentEN.uploadDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[上传时间(uploadDate)]的长度不能超过20(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.uploadDate}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.updDate) == false && GetStrLen(pobjtz_ContentAttachmentEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.updDate}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.updUserId) == false && GetStrLen(pobjtz_ContentAttachmentEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.updUserId}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.memo) == false && GetStrLen(pobjtz_ContentAttachmentEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.memo}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.courseId) == false && GetStrLen(pobjtz_ContentAttachmentEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.courseId}(clstz_ContentAttachmentBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjtz_ContentAttachmentEN.mId && undefined !== pobjtz_ContentAttachmentEN.mId && tzDataType.isNumber(pobjtz_ContentAttachmentEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjtz_ContentAttachmentEN.mId}], 非法,应该为数值型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.contentTypeId) == false && undefined !== pobjtz_ContentAttachmentEN.contentTypeId && tzDataType.isString(pobjtz_ContentAttachmentEN.contentTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[内容类型Id(contentTypeId)]的值:[${pobjtz_ContentAttachmentEN.contentTypeId}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.tableNameKey) == false && undefined !== pobjtz_ContentAttachmentEN.tableNameKey && tzDataType.isString(pobjtz_ContentAttachmentEN.tableNameKey) === false)
{
 throw new Error(`(errid:Watl000414)字段[主表主键值(tableNameKey)]的值:[${pobjtz_ContentAttachmentEN.tableNameKey}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (null != pobjtz_ContentAttachmentEN.orderNum && undefined !== pobjtz_ContentAttachmentEN.orderNum && tzDataType.isNumber(pobjtz_ContentAttachmentEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjtz_ContentAttachmentEN.orderNum}], 非法,应该为数值型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.attachmentTitle) == false && undefined !== pobjtz_ContentAttachmentEN.attachmentTitle && tzDataType.isString(pobjtz_ContentAttachmentEN.attachmentTitle) === false)
{
 throw new Error(`(errid:Watl000414)字段[附件标题(attachmentTitle)]的值:[${pobjtz_ContentAttachmentEN.attachmentTitle}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.idResourceType) == false && undefined !== pobjtz_ContentAttachmentEN.idResourceType && tzDataType.isString(pobjtz_ContentAttachmentEN.idResourceType) === false)
{
 throw new Error(`(errid:Watl000414)字段[资源类型流水号(idResourceType)]的值:[${pobjtz_ContentAttachmentEN.idResourceType}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.fileName) == false && undefined !== pobjtz_ContentAttachmentEN.fileName && tzDataType.isString(pobjtz_ContentAttachmentEN.fileName) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件名称(fileName)]的值:[${pobjtz_ContentAttachmentEN.fileName}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.extension) == false && undefined !== pobjtz_ContentAttachmentEN.extension && tzDataType.isString(pobjtz_ContentAttachmentEN.extension) === false)
{
 throw new Error(`(errid:Watl000414)字段[扩展名(extension)]的值:[${pobjtz_ContentAttachmentEN.extension}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.filePath) == false && undefined !== pobjtz_ContentAttachmentEN.filePath && tzDataType.isString(pobjtz_ContentAttachmentEN.filePath) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件路径(filePath)]的值:[${pobjtz_ContentAttachmentEN.filePath}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.pdfFilePath) == false && undefined !== pobjtz_ContentAttachmentEN.pdfFilePath && tzDataType.isString(pobjtz_ContentAttachmentEN.pdfFilePath) === false)
{
 throw new Error(`(errid:Watl000414)字段[Pdf文件路径(pdfFilePath)]的值:[${pobjtz_ContentAttachmentEN.pdfFilePath}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.swfFilePath) == false && undefined !== pobjtz_ContentAttachmentEN.swfFilePath && tzDataType.isString(pobjtz_ContentAttachmentEN.swfFilePath) === false)
{
 throw new Error(`(errid:Watl000414)字段[Swf文件路径(swfFilePath)]的值:[${pobjtz_ContentAttachmentEN.swfFilePath}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.textContent) == false && undefined !== pobjtz_ContentAttachmentEN.textContent && tzDataType.isString(pobjtz_ContentAttachmentEN.textContent) === false)
{
 throw new Error(`(errid:Watl000414)字段[TextContent(textContent)]的值:[${pobjtz_ContentAttachmentEN.textContent}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (null != pobjtz_ContentAttachmentEN.fileSize && undefined !== pobjtz_ContentAttachmentEN.fileSize && tzDataType.isNumber(pobjtz_ContentAttachmentEN.fileSize) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件大小(fileSize)]的值:[${pobjtz_ContentAttachmentEN.fileSize}], 非法,应该为数值型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.fileSizeUnit) == false && undefined !== pobjtz_ContentAttachmentEN.fileSizeUnit && tzDataType.isString(pobjtz_ContentAttachmentEN.fileSizeUnit) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件大小单位(fileSizeUnit)]的值:[${pobjtz_ContentAttachmentEN.fileSizeUnit}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (null != pobjtz_ContentAttachmentEN.imageHeight && undefined !== pobjtz_ContentAttachmentEN.imageHeight && tzDataType.isNumber(pobjtz_ContentAttachmentEN.imageHeight) === false)
{
 throw new Error(`(errid:Watl000414)字段[图像高(imageHeight)]的值:[${pobjtz_ContentAttachmentEN.imageHeight}], 非法,应该为数值型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (null != pobjtz_ContentAttachmentEN.imageWidth && undefined !== pobjtz_ContentAttachmentEN.imageWidth && tzDataType.isNumber(pobjtz_ContentAttachmentEN.imageWidth) === false)
{
 throw new Error(`(errid:Watl000414)字段[图像宽(imageWidth)]的值:[${pobjtz_ContentAttachmentEN.imageWidth}], 非法,应该为数值型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.uploadPerson) == false && undefined !== pobjtz_ContentAttachmentEN.uploadPerson && tzDataType.isString(pobjtz_ContentAttachmentEN.uploadPerson) === false)
{
 throw new Error(`(errid:Watl000414)字段[上传人(uploadPerson)]的值:[${pobjtz_ContentAttachmentEN.uploadPerson}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.uploadDate) == false && undefined !== pobjtz_ContentAttachmentEN.uploadDate && tzDataType.isString(pobjtz_ContentAttachmentEN.uploadDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[上传时间(uploadDate)]的值:[${pobjtz_ContentAttachmentEN.uploadDate}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.updDate) == false && undefined !== pobjtz_ContentAttachmentEN.updDate && tzDataType.isString(pobjtz_ContentAttachmentEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjtz_ContentAttachmentEN.updDate}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.updUserId) == false && undefined !== pobjtz_ContentAttachmentEN.updUserId && tzDataType.isString(pobjtz_ContentAttachmentEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjtz_ContentAttachmentEN.updUserId}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.memo) == false && undefined !== pobjtz_ContentAttachmentEN.memo && tzDataType.isString(pobjtz_ContentAttachmentEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjtz_ContentAttachmentEN.memo}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.courseId) == false && undefined !== pobjtz_ContentAttachmentEN.courseId && tzDataType.isString(pobjtz_ContentAttachmentEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjtz_ContentAttachmentEN.courseId}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function tz_ContentAttachment_CheckProperty4Update(pobjtz_ContentAttachmentEN: clstz_ContentAttachmentEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.contentTypeId) == false && GetStrLen(pobjtz_ContentAttachmentEN.contentTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[内容类型Id(contentTypeId)]的长度不能超过4(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.contentTypeId}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.tableNameKey) == false && GetStrLen(pobjtz_ContentAttachmentEN.tableNameKey) > 20)
{
 throw new Error(`(errid:Watl000416)字段[主表主键值(tableNameKey)]的长度不能超过20(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.tableNameKey}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.attachmentTitle) == false && GetStrLen(pobjtz_ContentAttachmentEN.attachmentTitle) > 100)
{
 throw new Error(`(errid:Watl000416)字段[附件标题(attachmentTitle)]的长度不能超过100(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.attachmentTitle}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.idResourceType) == false && GetStrLen(pobjtz_ContentAttachmentEN.idResourceType) > 4)
{
 throw new Error(`(errid:Watl000416)字段[资源类型流水号(idResourceType)]的长度不能超过4(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.idResourceType}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.fileName) == false && GetStrLen(pobjtz_ContentAttachmentEN.fileName) > 500)
{
 throw new Error(`(errid:Watl000416)字段[文件名称(fileName)]的长度不能超过500(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.fileName}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.extension) == false && GetStrLen(pobjtz_ContentAttachmentEN.extension) > 10)
{
 throw new Error(`(errid:Watl000416)字段[扩展名(extension)]的长度不能超过10(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.extension}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.filePath) == false && GetStrLen(pobjtz_ContentAttachmentEN.filePath) > 500)
{
 throw new Error(`(errid:Watl000416)字段[文件路径(filePath)]的长度不能超过500(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.filePath}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.pdfFilePath) == false && GetStrLen(pobjtz_ContentAttachmentEN.pdfFilePath) > 500)
{
 throw new Error(`(errid:Watl000416)字段[Pdf文件路径(pdfFilePath)]的长度不能超过500(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.pdfFilePath}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.swfFilePath) == false && GetStrLen(pobjtz_ContentAttachmentEN.swfFilePath) > 500)
{
 throw new Error(`(errid:Watl000416)字段[Swf文件路径(swfFilePath)]的长度不能超过500(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.swfFilePath}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.textContent) == false && GetStrLen(pobjtz_ContentAttachmentEN.textContent) > 8000)
{
 throw new Error(`(errid:Watl000416)字段[TextContent(textContent)]的长度不能超过8000(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.textContent}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.fileSizeUnit) == false && GetStrLen(pobjtz_ContentAttachmentEN.fileSizeUnit) > 10)
{
 throw new Error(`(errid:Watl000416)字段[文件大小单位(fileSizeUnit)]的长度不能超过10(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.fileSizeUnit}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.uploadPerson) == false && GetStrLen(pobjtz_ContentAttachmentEN.uploadPerson) > 20)
{
 throw new Error(`(errid:Watl000416)字段[上传人(uploadPerson)]的长度不能超过20(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.uploadPerson}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.uploadDate) == false && GetStrLen(pobjtz_ContentAttachmentEN.uploadDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[上传时间(uploadDate)]的长度不能超过20(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.uploadDate}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.updDate) == false && GetStrLen(pobjtz_ContentAttachmentEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.updDate}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.updUserId) == false && GetStrLen(pobjtz_ContentAttachmentEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.updUserId}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.memo) == false && GetStrLen(pobjtz_ContentAttachmentEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.memo}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.courseId) == false && GetStrLen(pobjtz_ContentAttachmentEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 内容附件(tz_ContentAttachment))!值:${pobjtz_ContentAttachmentEN.courseId}(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjtz_ContentAttachmentEN.mId && undefined !== pobjtz_ContentAttachmentEN.mId && tzDataType.isNumber(pobjtz_ContentAttachmentEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjtz_ContentAttachmentEN.mId}], 非法,应该为数值型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.contentTypeId) == false && undefined !== pobjtz_ContentAttachmentEN.contentTypeId && tzDataType.isString(pobjtz_ContentAttachmentEN.contentTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[内容类型Id(contentTypeId)]的值:[${pobjtz_ContentAttachmentEN.contentTypeId}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.tableNameKey) == false && undefined !== pobjtz_ContentAttachmentEN.tableNameKey && tzDataType.isString(pobjtz_ContentAttachmentEN.tableNameKey) === false)
{
 throw new Error(`(errid:Watl000417)字段[主表主键值(tableNameKey)]的值:[${pobjtz_ContentAttachmentEN.tableNameKey}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (null != pobjtz_ContentAttachmentEN.orderNum && undefined !== pobjtz_ContentAttachmentEN.orderNum && tzDataType.isNumber(pobjtz_ContentAttachmentEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjtz_ContentAttachmentEN.orderNum}], 非法,应该为数值型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.attachmentTitle) == false && undefined !== pobjtz_ContentAttachmentEN.attachmentTitle && tzDataType.isString(pobjtz_ContentAttachmentEN.attachmentTitle) === false)
{
 throw new Error(`(errid:Watl000417)字段[附件标题(attachmentTitle)]的值:[${pobjtz_ContentAttachmentEN.attachmentTitle}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.idResourceType) == false && undefined !== pobjtz_ContentAttachmentEN.idResourceType && tzDataType.isString(pobjtz_ContentAttachmentEN.idResourceType) === false)
{
 throw new Error(`(errid:Watl000417)字段[资源类型流水号(idResourceType)]的值:[${pobjtz_ContentAttachmentEN.idResourceType}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.fileName) == false && undefined !== pobjtz_ContentAttachmentEN.fileName && tzDataType.isString(pobjtz_ContentAttachmentEN.fileName) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件名称(fileName)]的值:[${pobjtz_ContentAttachmentEN.fileName}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.extension) == false && undefined !== pobjtz_ContentAttachmentEN.extension && tzDataType.isString(pobjtz_ContentAttachmentEN.extension) === false)
{
 throw new Error(`(errid:Watl000417)字段[扩展名(extension)]的值:[${pobjtz_ContentAttachmentEN.extension}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.filePath) == false && undefined !== pobjtz_ContentAttachmentEN.filePath && tzDataType.isString(pobjtz_ContentAttachmentEN.filePath) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件路径(filePath)]的值:[${pobjtz_ContentAttachmentEN.filePath}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.pdfFilePath) == false && undefined !== pobjtz_ContentAttachmentEN.pdfFilePath && tzDataType.isString(pobjtz_ContentAttachmentEN.pdfFilePath) === false)
{
 throw new Error(`(errid:Watl000417)字段[Pdf文件路径(pdfFilePath)]的值:[${pobjtz_ContentAttachmentEN.pdfFilePath}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.swfFilePath) == false && undefined !== pobjtz_ContentAttachmentEN.swfFilePath && tzDataType.isString(pobjtz_ContentAttachmentEN.swfFilePath) === false)
{
 throw new Error(`(errid:Watl000417)字段[Swf文件路径(swfFilePath)]的值:[${pobjtz_ContentAttachmentEN.swfFilePath}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.textContent) == false && undefined !== pobjtz_ContentAttachmentEN.textContent && tzDataType.isString(pobjtz_ContentAttachmentEN.textContent) === false)
{
 throw new Error(`(errid:Watl000417)字段[TextContent(textContent)]的值:[${pobjtz_ContentAttachmentEN.textContent}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (null != pobjtz_ContentAttachmentEN.fileSize && undefined !== pobjtz_ContentAttachmentEN.fileSize && tzDataType.isNumber(pobjtz_ContentAttachmentEN.fileSize) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件大小(fileSize)]的值:[${pobjtz_ContentAttachmentEN.fileSize}], 非法,应该为数值型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.fileSizeUnit) == false && undefined !== pobjtz_ContentAttachmentEN.fileSizeUnit && tzDataType.isString(pobjtz_ContentAttachmentEN.fileSizeUnit) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件大小单位(fileSizeUnit)]的值:[${pobjtz_ContentAttachmentEN.fileSizeUnit}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (null != pobjtz_ContentAttachmentEN.imageHeight && undefined !== pobjtz_ContentAttachmentEN.imageHeight && tzDataType.isNumber(pobjtz_ContentAttachmentEN.imageHeight) === false)
{
 throw new Error(`(errid:Watl000417)字段[图像高(imageHeight)]的值:[${pobjtz_ContentAttachmentEN.imageHeight}], 非法,应该为数值型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (null != pobjtz_ContentAttachmentEN.imageWidth && undefined !== pobjtz_ContentAttachmentEN.imageWidth && tzDataType.isNumber(pobjtz_ContentAttachmentEN.imageWidth) === false)
{
 throw new Error(`(errid:Watl000417)字段[图像宽(imageWidth)]的值:[${pobjtz_ContentAttachmentEN.imageWidth}], 非法,应该为数值型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.uploadPerson) == false && undefined !== pobjtz_ContentAttachmentEN.uploadPerson && tzDataType.isString(pobjtz_ContentAttachmentEN.uploadPerson) === false)
{
 throw new Error(`(errid:Watl000417)字段[上传人(uploadPerson)]的值:[${pobjtz_ContentAttachmentEN.uploadPerson}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.uploadDate) == false && undefined !== pobjtz_ContentAttachmentEN.uploadDate && tzDataType.isString(pobjtz_ContentAttachmentEN.uploadDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[上传时间(uploadDate)]的值:[${pobjtz_ContentAttachmentEN.uploadDate}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.updDate) == false && undefined !== pobjtz_ContentAttachmentEN.updDate && tzDataType.isString(pobjtz_ContentAttachmentEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjtz_ContentAttachmentEN.updDate}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.updUserId) == false && undefined !== pobjtz_ContentAttachmentEN.updUserId && tzDataType.isString(pobjtz_ContentAttachmentEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjtz_ContentAttachmentEN.updUserId}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.memo) == false && undefined !== pobjtz_ContentAttachmentEN.memo && tzDataType.isString(pobjtz_ContentAttachmentEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjtz_ContentAttachmentEN.memo}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjtz_ContentAttachmentEN.courseId) == false && undefined !== pobjtz_ContentAttachmentEN.courseId && tzDataType.isString(pobjtz_ContentAttachmentEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjtz_ContentAttachmentEN.courseId}], 非法,应该为字符型(In 内容附件(tz_ContentAttachment))!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjtz_ContentAttachmentEN.mId 
 || pobjtz_ContentAttachmentEN.mId != null && pobjtz_ContentAttachmentEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 内容附件)!(clstz_ContentAttachmentBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function tz_ContentAttachment_GetJSONStrByObj (pobjtz_ContentAttachmentEN: clstz_ContentAttachmentEN): string
{
pobjtz_ContentAttachmentEN.sfUpdFldSetStr = pobjtz_ContentAttachmentEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjtz_ContentAttachmentEN);
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
export  function tz_ContentAttachment_GetObjLstByJSONStr (strJSON: string): Array<clstz_ContentAttachmentEN>
{
let arrtz_ContentAttachmentObjLst = new Array<clstz_ContentAttachmentEN>();
if (strJSON === "")
{
return arrtz_ContentAttachmentObjLst;
}
try
{
arrtz_ContentAttachmentObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrtz_ContentAttachmentObjLst;
}
return arrtz_ContentAttachmentObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrtz_ContentAttachmentObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function tz_ContentAttachment_GetObjLstByJSONObjLst (arrtz_ContentAttachmentObjLstS: Array<clstz_ContentAttachmentEN>): Array<clstz_ContentAttachmentEN>
{
const arrtz_ContentAttachmentObjLst = new Array<clstz_ContentAttachmentEN>();
for (const objInFor of arrtz_ContentAttachmentObjLstS) {
const obj1 = tz_ContentAttachment_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrtz_ContentAttachmentObjLst.push(obj1);
}
return arrtz_ContentAttachmentObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function tz_ContentAttachment_GetObjByJSONStr (strJSON: string): clstz_ContentAttachmentEN
{
let pobjtz_ContentAttachmentEN = new clstz_ContentAttachmentEN();
if (strJSON === "")
{
return pobjtz_ContentAttachmentEN;
}
try
{
pobjtz_ContentAttachmentEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjtz_ContentAttachmentEN;
}
return pobjtz_ContentAttachmentEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function tz_ContentAttachment_GetCombineCondition(objtz_ContentAttachmentCond: clstz_ContentAttachmentEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_mId) == true)
{
const strComparisonOpmId:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clstz_ContentAttachmentEN.con_mId, objtz_ContentAttachmentCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_ContentTypeId) == true)
{
const strComparisonOpContentTypeId:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_ContentTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_ContentTypeId, objtz_ContentAttachmentCond.contentTypeId, strComparisonOpContentTypeId);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_TableNameKey) == true)
{
const strComparisonOpTableNameKey:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_TableNameKey];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_TableNameKey, objtz_ContentAttachmentCond.tableNameKey, strComparisonOpTableNameKey);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clstz_ContentAttachmentEN.con_OrderNum, objtz_ContentAttachmentCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_AttachmentTitle) == true)
{
const strComparisonOpAttachmentTitle:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_AttachmentTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_AttachmentTitle, objtz_ContentAttachmentCond.attachmentTitle, strComparisonOpAttachmentTitle);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_IdResourceType) == true)
{
const strComparisonOpIdResourceType:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_IdResourceType];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_IdResourceType, objtz_ContentAttachmentCond.idResourceType, strComparisonOpIdResourceType);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_FileName) == true)
{
const strComparisonOpFileName:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_FileName];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_FileName, objtz_ContentAttachmentCond.fileName, strComparisonOpFileName);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_Extension) == true)
{
const strComparisonOpExtension:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_Extension];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_Extension, objtz_ContentAttachmentCond.extension, strComparisonOpExtension);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_FilePath) == true)
{
const strComparisonOpFilePath:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_FilePath];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_FilePath, objtz_ContentAttachmentCond.filePath, strComparisonOpFilePath);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_PdfFilePath) == true)
{
const strComparisonOpPdfFilePath:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_PdfFilePath];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_PdfFilePath, objtz_ContentAttachmentCond.pdfFilePath, strComparisonOpPdfFilePath);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_SwfFilePath) == true)
{
const strComparisonOpSwfFilePath:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_SwfFilePath];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_SwfFilePath, objtz_ContentAttachmentCond.swfFilePath, strComparisonOpSwfFilePath);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_TextContent) == true)
{
const strComparisonOpTextContent:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_TextContent];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_TextContent, objtz_ContentAttachmentCond.textContent, strComparisonOpTextContent);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_FileSize) == true)
{
const strComparisonOpFileSize:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_FileSize];
strWhereCond += Format(" And {0} {2} {1}", clstz_ContentAttachmentEN.con_FileSize, objtz_ContentAttachmentCond.fileSize, strComparisonOpFileSize);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_FileSizeUnit) == true)
{
const strComparisonOpFileSizeUnit:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_FileSizeUnit];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_FileSizeUnit, objtz_ContentAttachmentCond.fileSizeUnit, strComparisonOpFileSizeUnit);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_ImageHeight) == true)
{
const strComparisonOpImageHeight:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_ImageHeight];
strWhereCond += Format(" And {0} {2} {1}", clstz_ContentAttachmentEN.con_ImageHeight, objtz_ContentAttachmentCond.imageHeight, strComparisonOpImageHeight);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_ImageWidth) == true)
{
const strComparisonOpImageWidth:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_ImageWidth];
strWhereCond += Format(" And {0} {2} {1}", clstz_ContentAttachmentEN.con_ImageWidth, objtz_ContentAttachmentCond.imageWidth, strComparisonOpImageWidth);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_UploadPerson) == true)
{
const strComparisonOpUploadPerson:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_UploadPerson];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_UploadPerson, objtz_ContentAttachmentCond.uploadPerson, strComparisonOpUploadPerson);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_UploadDate) == true)
{
const strComparisonOpUploadDate:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_UploadDate];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_UploadDate, objtz_ContentAttachmentCond.uploadDate, strComparisonOpUploadDate);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_UpdDate, objtz_ContentAttachmentCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_UpdUserId, objtz_ContentAttachmentCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_Memo, objtz_ContentAttachmentCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objtz_ContentAttachmentCond.dicFldComparisonOp, clstz_ContentAttachmentEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objtz_ContentAttachmentCond.dicFldComparisonOp[clstz_ContentAttachmentEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clstz_ContentAttachmentEN.con_CourseId, objtz_ContentAttachmentCond.courseId, strComparisonOpCourseId);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--tz_ContentAttachment(内容附件),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strContentTypeId: 内容类型Id(要求唯一的字段)
 * @param strTableNameKey: 主表主键值(要求唯一的字段)
 * @param strAttachmentTitle: 附件标题(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function tz_ContentAttachment_GetUniCondStr(objtz_ContentAttachmentEN: clstz_ContentAttachmentEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ContentTypeId = '{0}'", objtz_ContentAttachmentEN.contentTypeId);
 strWhereCond +=  Format(" and TableNameKey = '{0}'", objtz_ContentAttachmentEN.tableNameKey);
 strWhereCond +=  Format(" and AttachmentTitle = '{0}'", objtz_ContentAttachmentEN.attachmentTitle);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--tz_ContentAttachment(内容附件),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strContentTypeId: 内容类型Id(要求唯一的字段)
 * @param strTableNameKey: 主表主键值(要求唯一的字段)
 * @param strAttachmentTitle: 附件标题(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function tz_ContentAttachment_GetUniCondStr4Update(objtz_ContentAttachmentEN: clstz_ContentAttachmentEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objtz_ContentAttachmentEN.mId);
 strWhereCond +=  Format(" and ContentTypeId = '{0}'", objtz_ContentAttachmentEN.contentTypeId);
 strWhereCond +=  Format(" and TableNameKey = '{0}'", objtz_ContentAttachmentEN.tableNameKey);
 strWhereCond +=  Format(" and AttachmentTitle = '{0}'", objtz_ContentAttachmentEN.attachmentTitle);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objtz_ContentAttachmentENS:源对象
 * @param objtz_ContentAttachmentENT:目标对象
*/
export  function tz_ContentAttachment_CopyObjTo(objtz_ContentAttachmentENS: clstz_ContentAttachmentEN , objtz_ContentAttachmentENT: clstz_ContentAttachmentEN ): void 
{
objtz_ContentAttachmentENT.mId = objtz_ContentAttachmentENS.mId; //mId
objtz_ContentAttachmentENT.contentTypeId = objtz_ContentAttachmentENS.contentTypeId; //内容类型Id
objtz_ContentAttachmentENT.tableNameKey = objtz_ContentAttachmentENS.tableNameKey; //主表主键值
objtz_ContentAttachmentENT.orderNum = objtz_ContentAttachmentENS.orderNum; //序号
objtz_ContentAttachmentENT.attachmentTitle = objtz_ContentAttachmentENS.attachmentTitle; //附件标题
objtz_ContentAttachmentENT.idResourceType = objtz_ContentAttachmentENS.idResourceType; //资源类型流水号
objtz_ContentAttachmentENT.fileName = objtz_ContentAttachmentENS.fileName; //文件名称
objtz_ContentAttachmentENT.extension = objtz_ContentAttachmentENS.extension; //扩展名
objtz_ContentAttachmentENT.filePath = objtz_ContentAttachmentENS.filePath; //文件路径
objtz_ContentAttachmentENT.pdfFilePath = objtz_ContentAttachmentENS.pdfFilePath; //Pdf文件路径
objtz_ContentAttachmentENT.swfFilePath = objtz_ContentAttachmentENS.swfFilePath; //Swf文件路径
objtz_ContentAttachmentENT.textContent = objtz_ContentAttachmentENS.textContent; //TextContent
objtz_ContentAttachmentENT.fileSize = objtz_ContentAttachmentENS.fileSize; //文件大小
objtz_ContentAttachmentENT.fileSizeUnit = objtz_ContentAttachmentENS.fileSizeUnit; //文件大小单位
objtz_ContentAttachmentENT.imageHeight = objtz_ContentAttachmentENS.imageHeight; //图像高
objtz_ContentAttachmentENT.imageWidth = objtz_ContentAttachmentENS.imageWidth; //图像宽
objtz_ContentAttachmentENT.uploadPerson = objtz_ContentAttachmentENS.uploadPerson; //上传人
objtz_ContentAttachmentENT.uploadDate = objtz_ContentAttachmentENS.uploadDate; //上传时间
objtz_ContentAttachmentENT.updDate = objtz_ContentAttachmentENS.updDate; //修改日期
objtz_ContentAttachmentENT.updUserId = objtz_ContentAttachmentENS.updUserId; //修改用户Id
objtz_ContentAttachmentENT.memo = objtz_ContentAttachmentENS.memo; //备注
objtz_ContentAttachmentENT.courseId = objtz_ContentAttachmentENS.courseId; //课程Id
objtz_ContentAttachmentENT.sfUpdFldSetStr = objtz_ContentAttachmentENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objtz_ContentAttachmentENS:源对象
 * @param objtz_ContentAttachmentENT:目标对象
*/
export  function tz_ContentAttachment_GetObjFromJsonObj(objtz_ContentAttachmentENS: clstz_ContentAttachmentEN): clstz_ContentAttachmentEN 
{
 const objtz_ContentAttachmentENT: clstz_ContentAttachmentEN = new clstz_ContentAttachmentEN();
ObjectAssign(objtz_ContentAttachmentENT, objtz_ContentAttachmentENS);
 return objtz_ContentAttachmentENT;
}