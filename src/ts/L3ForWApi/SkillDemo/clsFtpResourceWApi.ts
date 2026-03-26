
 /**
 * 类名:clsFtpResourceWApi
 * 表名:FtpResource(01120326)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:07
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:技能示范(SkillDemo)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * FTP资源(FtpResource)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsFtpResourceEN } from "@/ts/L0Entity/SkillDemo/clsFtpResourceEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ftpResource_Controller = "FtpResourceApi";
 export const ftpResource_ConstructorName = "ftpResource";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdFtpResource:关键字
 * @returns 对象
 **/
export  async function FtpResource_GetObjByIdFtpResourceAsync(strIdFtpResource: string): Promise<clsFtpResourceEN|null>  
{
const strThisFuncName = "GetObjByIdFtpResourceAsync";

if (IsNullOrEmpty(strIdFtpResource) == true)
{
  const strMsg = Format("参数:[strIdFtpResource]不能为空!(In clsFtpResourceWApi.GetObjByIdFtpResourceAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdFtpResource.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdFtpResource]的长度:[{0}]不正确!(clsFtpResourceWApi.GetObjByIdFtpResourceAsync)", strIdFtpResource.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdFtpResource";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdFtpResource,
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
const objFtpResource = FtpResource_GetObjFromJsonObj(returnObj);
return objFtpResource;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdFtpResourcelocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByIdFtpResourceCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function FtpResource_SortFunDefa(a:clsFtpResourceEN , b:clsFtpResourceEN): number 
{
return a.idFtpResource.localeCompare(b.idFtpResource);
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
export  function FtpResource_SortFunDefa2Fld(a:clsFtpResourceEN , b:clsFtpResourceEN): number 
{
if (a.ftpResourceID == b.ftpResourceID) return a.fileOriginalName.localeCompare(b.fileOriginalName);
else return a.ftpResourceID.localeCompare(b.ftpResourceID);
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
export  function FtpResource_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsFtpResourceEN.con_IdFtpResource:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
return a.idFtpResource.localeCompare(b.idFtpResource);
}
case clsFtpResourceEN.con_FtpResourceID:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
return a.ftpResourceID.localeCompare(b.ftpResourceID);
}
case clsFtpResourceEN.con_FileOriginalName:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.fileOriginalName == null) return -1;
if (b.fileOriginalName == null) return 1;
return a.fileOriginalName.localeCompare(b.fileOriginalName);
}
case clsFtpResourceEN.con_FileDirName:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.fileDirName == null) return -1;
if (b.fileDirName == null) return 1;
return a.fileDirName.localeCompare(b.fileDirName);
}
case clsFtpResourceEN.con_FileRename:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.fileRename == null) return -1;
if (b.fileRename == null) return 1;
return a.fileRename.localeCompare(b.fileRename);
}
case clsFtpResourceEN.con_FileUpDate:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.fileUpDate == null) return -1;
if (b.fileUpDate == null) return 1;
return a.fileUpDate.localeCompare(b.fileUpDate);
}
case clsFtpResourceEN.con_FileUpTime:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.fileUpTime == null) return -1;
if (b.fileUpTime == null) return 1;
return a.fileUpTime.localeCompare(b.fileUpTime);
}
case clsFtpResourceEN.con_Memo:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsFtpResourceEN.con_FileType:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.fileType == null) return -1;
if (b.fileType == null) return 1;
return a.fileType.localeCompare(b.fileType);
}
case clsFtpResourceEN.con_CheckDateTime:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.checkDateTime == null) return -1;
if (b.checkDateTime == null) return 1;
return a.checkDateTime.localeCompare(b.checkDateTime);
}
case clsFtpResourceEN.con_ResourceOwner:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.resourceOwner == null) return -1;
if (b.resourceOwner == null) return 1;
return a.resourceOwner.localeCompare(b.resourceOwner);
}
case clsFtpResourceEN.con_IsExistFile:
return (a: clsFtpResourceEN) => {
if (a.isExistFile == true) return 1;
else return -1
}
case clsFtpResourceEN.con_FuncModuleId:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.funcModuleId == null) return -1;
if (b.funcModuleId == null) return 1;
return a.funcModuleId.localeCompare(b.funcModuleId);
}
case clsFtpResourceEN.con_FileResourceID:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
return a.fileResourceID-b.fileResourceID;
}
case clsFtpResourceEN.con_FileNameBak:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.fileNameBak == null) return -1;
if (b.fileNameBak == null) return 1;
return a.fileNameBak.localeCompare(b.fileNameBak);
}
case clsFtpResourceEN.con_UpdDate:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsFtpResourceEN.con_UpdUser:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FtpResource]中不存在!(in ${ ftpResource_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsFtpResourceEN.con_IdFtpResource:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
return b.idFtpResource.localeCompare(a.idFtpResource);
}
case clsFtpResourceEN.con_FtpResourceID:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
return b.ftpResourceID.localeCompare(a.ftpResourceID);
}
case clsFtpResourceEN.con_FileOriginalName:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.fileOriginalName == null) return -1;
if (a.fileOriginalName == null) return 1;
return b.fileOriginalName.localeCompare(a.fileOriginalName);
}
case clsFtpResourceEN.con_FileDirName:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.fileDirName == null) return -1;
if (a.fileDirName == null) return 1;
return b.fileDirName.localeCompare(a.fileDirName);
}
case clsFtpResourceEN.con_FileRename:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.fileRename == null) return -1;
if (a.fileRename == null) return 1;
return b.fileRename.localeCompare(a.fileRename);
}
case clsFtpResourceEN.con_FileUpDate:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.fileUpDate == null) return -1;
if (a.fileUpDate == null) return 1;
return b.fileUpDate.localeCompare(a.fileUpDate);
}
case clsFtpResourceEN.con_FileUpTime:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.fileUpTime == null) return -1;
if (a.fileUpTime == null) return 1;
return b.fileUpTime.localeCompare(a.fileUpTime);
}
case clsFtpResourceEN.con_Memo:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsFtpResourceEN.con_FileType:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.fileType == null) return -1;
if (a.fileType == null) return 1;
return b.fileType.localeCompare(a.fileType);
}
case clsFtpResourceEN.con_CheckDateTime:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.checkDateTime == null) return -1;
if (a.checkDateTime == null) return 1;
return b.checkDateTime.localeCompare(a.checkDateTime);
}
case clsFtpResourceEN.con_ResourceOwner:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.resourceOwner == null) return -1;
if (a.resourceOwner == null) return 1;
return b.resourceOwner.localeCompare(a.resourceOwner);
}
case clsFtpResourceEN.con_IsExistFile:
return (b: clsFtpResourceEN) => {
if (b.isExistFile == true) return 1;
else return -1
}
case clsFtpResourceEN.con_FuncModuleId:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.funcModuleId == null) return -1;
if (a.funcModuleId == null) return 1;
return b.funcModuleId.localeCompare(a.funcModuleId);
}
case clsFtpResourceEN.con_FileResourceID:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
return b.fileResourceID-a.fileResourceID;
}
case clsFtpResourceEN.con_FileNameBak:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.fileNameBak == null) return -1;
if (a.fileNameBak == null) return 1;
return b.fileNameBak.localeCompare(a.fileNameBak);
}
case clsFtpResourceEN.con_UpdDate:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsFtpResourceEN.con_UpdUser:
return (a: clsFtpResourceEN, b: clsFtpResourceEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FtpResource]中不存在!(in ${ ftpResource_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdFtpResourceCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function FtpResource_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsFtpResourceEN.con_IdFtpResource:
return (obj: clsFtpResourceEN) => {
return obj.idFtpResource === value;
}
case clsFtpResourceEN.con_FtpResourceID:
return (obj: clsFtpResourceEN) => {
return obj.ftpResourceID === value;
}
case clsFtpResourceEN.con_FileOriginalName:
return (obj: clsFtpResourceEN) => {
return obj.fileOriginalName === value;
}
case clsFtpResourceEN.con_FileDirName:
return (obj: clsFtpResourceEN) => {
return obj.fileDirName === value;
}
case clsFtpResourceEN.con_FileRename:
return (obj: clsFtpResourceEN) => {
return obj.fileRename === value;
}
case clsFtpResourceEN.con_FileUpDate:
return (obj: clsFtpResourceEN) => {
return obj.fileUpDate === value;
}
case clsFtpResourceEN.con_FileUpTime:
return (obj: clsFtpResourceEN) => {
return obj.fileUpTime === value;
}
case clsFtpResourceEN.con_Memo:
return (obj: clsFtpResourceEN) => {
return obj.memo === value;
}
case clsFtpResourceEN.con_FileType:
return (obj: clsFtpResourceEN) => {
return obj.fileType === value;
}
case clsFtpResourceEN.con_CheckDateTime:
return (obj: clsFtpResourceEN) => {
return obj.checkDateTime === value;
}
case clsFtpResourceEN.con_ResourceOwner:
return (obj: clsFtpResourceEN) => {
return obj.resourceOwner === value;
}
case clsFtpResourceEN.con_IsExistFile:
return (obj: clsFtpResourceEN) => {
return obj.isExistFile === value;
}
case clsFtpResourceEN.con_FuncModuleId:
return (obj: clsFtpResourceEN) => {
return obj.funcModuleId === value;
}
case clsFtpResourceEN.con_FileResourceID:
return (obj: clsFtpResourceEN) => {
return obj.fileResourceID === value;
}
case clsFtpResourceEN.con_FileNameBak:
return (obj: clsFtpResourceEN) => {
return obj.fileNameBak === value;
}
case clsFtpResourceEN.con_UpdDate:
return (obj: clsFtpResourceEN) => {
return obj.updDate === value;
}
case clsFtpResourceEN.con_UpdUser:
return (obj: clsFtpResourceEN) => {
return obj.updUser === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FtpResource]中不存在!(in ${ ftpResource_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[FtpResource__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function FtpResource_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  async function FtpResource_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  async function FtpResource_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  async function FtpResource_GetFirstObjAsync(strWhereCond: string): Promise<clsFtpResourceEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const objFtpResource = FtpResource_GetObjFromJsonObj(returnObj);
return objFtpResource;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  async function FtpResource_GetObjLstAsync(strWhereCond: string): Promise<Array<clsFtpResourceEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ftpResource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FtpResource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
 * @param arrIdFtpResource:关键字列表
 * @returns 对象列表
 **/
export  async function FtpResource_GetObjLstByIdFtpResourceLstAsync(arrIdFtpResource: Array<string>): Promise<Array<clsFtpResourceEN>>  
{
const strThisFuncName = "GetObjLstByIdFtpResourceLstAsync";
const strAction = "GetObjLstByIdFtpResourceLst";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdFtpResource, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ftpResource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FtpResource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdFtpResourceLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function FtpResource_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsFtpResourceEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ftpResource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FtpResource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  async function FtpResource_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsFtpResourceEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ftpResource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FtpResource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  async function FtpResource_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsFtpResourceEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsFtpResourceEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ftpResource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FtpResource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
 * @param strIdFtpResource:关键字
 * @returns 获取删除的结果
 **/
export  async function FtpResource_DelRecordAsync(strIdFtpResource: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ftpResource_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdFtpResource);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
 * @param arrIdFtpResource:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function FtpResource_DelFtpResourcesAsync(arrIdFtpResource: Array<string>): Promise<number> 
{
const strThisFuncName = "DelFtpResourcesAsync";
const strAction = "DelFtpResources";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdFtpResource, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  async function FtpResource_DelFtpResourcesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelFtpResourcesByCondAsync";
const strAction = "DelFtpResourcesByCond";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
 * @param objFtpResourceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function FtpResource_AddNewRecordAsync(objFtpResourceEN: clsFtpResourceEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objFtpResourceEN.idFtpResource === null || objFtpResourceEN.idFtpResource === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objFtpResourceEN);
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFtpResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objFtpResourceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function FtpResource_AddNewRecordWithMaxIdAsync(objFtpResourceEN: clsFtpResourceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFtpResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  async function FtpResource_AddNewObjSave(objFtpResourceEN: clsFtpResourceEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
FtpResource_CheckPropertyNew(objFtpResourceEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ftpResource_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await FtpResource_IsExistAsync(objFtpResourceEN.idFtpResource);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objFtpResourceEN.idFtpResource);
console.error(strMsg);
throw(strMsg);
}
returnBool = await FtpResource_AddNewRecordAsync(objFtpResourceEN);
if (returnBool == true)
{
//FtpResource_ReFreshCache();
}
else
{
const strInfo = `添加[FTP资源(FtpResource)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objFtpResourceEN.idFtpResource, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ftpResource_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function FtpResource_UpdateObjSave(objFtpResourceEN: clsFtpResourceEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objFtpResourceEN.sfUpdFldSetStr = objFtpResourceEN.updFldString;//设置哪些字段被修改(脏字段)
if (objFtpResourceEN.idFtpResource == "" || objFtpResourceEN.idFtpResource == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
FtpResource_CheckProperty4Update(objFtpResourceEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ftpResource_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await FtpResource_UpdateRecordAsync(objFtpResourceEN);
if (returnBool == true)
{
//FtpResource_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ftpResource_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFtpResourceEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function FtpResource_AddNewRecordWithReturnKeyAsync(objFtpResourceEN: clsFtpResourceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFtpResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
 * @param objFtpResourceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function FtpResource_UpdateRecordAsync(objFtpResourceEN: clsFtpResourceEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objFtpResourceEN.sfUpdFldSetStr === undefined || objFtpResourceEN.sfUpdFldSetStr === null || objFtpResourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objFtpResourceEN.idFtpResource);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFtpResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
 * @param objFtpResourceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function FtpResource_EditRecordExAsync(objFtpResourceEN: clsFtpResourceEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objFtpResourceEN.sfUpdFldSetStr === undefined || objFtpResourceEN.sfUpdFldSetStr === null || objFtpResourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objFtpResourceEN.idFtpResource);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFtpResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
 * @param objFtpResourceEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function FtpResource_UpdateWithConditionAsync(objFtpResourceEN: clsFtpResourceEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objFtpResourceEN.sfUpdFldSetStr === undefined || objFtpResourceEN.sfUpdFldSetStr === null || objFtpResourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objFtpResourceEN.idFtpResource);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);
objFtpResourceEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFtpResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  async function FtpResource_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
 * @param strIdFtpResource:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function FtpResource_IsExistAsync(strIdFtpResource: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdFtpResource
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  async function FtpResource_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  async function FtpResource_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ftpResource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ftpResource_ConstructorName, strThisFuncName);
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
export  function FtpResource_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function FtpResource_BindDdl_id_FtpResourceInDiv(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_id_FtpResourceInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_FtpResourceInDivCache");
const strCondition = `1=1`;
const arrObjLstSel = await FtpResource_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsFtpResourceEN.con_IdFtpResource, clsFtpResourceEN.con_FileRename, "FTP资源...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function FtpResource_GetArrFtpResource()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_FtpResourceInDivCache");
const arrFtpResource = new Array<clsFtpResourceEN>();
const strCondition = `1=1`;
const arrObjLstSel = await FtpResource_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsFtpResourceEN();
obj0.idFtpResource = '0';
obj0.fileRename = '选fTP资源...';
arrFtpResource.push(obj0);
arrObjLstSel.forEach(x => arrFtpResource.push(x));
return arrFtpResource;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function FtpResource_CheckPropertyNew(pobjFtpResourceEN: clsFtpResourceEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjFtpResourceEN.ftpResourceID) === true )
{
 throw new Error(`(errid:Watl000411)字段[FTP资源ID]不能为空(In FTP资源)!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (null === pobjFtpResourceEN.fileResourceID 
 || pobjFtpResourceEN.fileResourceID != null && pobjFtpResourceEN.fileResourceID.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[FileResourceID]不能为空(In FTP资源)!(clsFtpResourceBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjFtpResourceEN.idFtpResource) == false && GetStrLen(pobjFtpResourceEN.idFtpResource) > 8)
{
 throw new Error(`(errid:Watl000413)字段[FTP资源流水号(idFtpResource)]的长度不能超过8(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.idFtpResource}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.ftpResourceID) == false && GetStrLen(pobjFtpResourceEN.ftpResourceID) > 8)
{
 throw new Error(`(errid:Watl000413)字段[FTP资源ID(ftpResourceID)]的长度不能超过8(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.ftpResourceID}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileOriginalName) == false && GetStrLen(pobjFtpResourceEN.fileOriginalName) > 200)
{
 throw new Error(`(errid:Watl000413)字段[文件原名(fileOriginalName)]的长度不能超过200(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileOriginalName}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileDirName) == false && GetStrLen(pobjFtpResourceEN.fileDirName) > 200)
{
 throw new Error(`(errid:Watl000413)字段[文件目录名(fileDirName)]的长度不能超过200(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileDirName}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileRename) == false && GetStrLen(pobjFtpResourceEN.fileRename) > 200)
{
 throw new Error(`(errid:Watl000413)字段[文件新名(fileRename)]的长度不能超过200(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileRename}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileUpDate) == false && GetStrLen(pobjFtpResourceEN.fileUpDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[创建日期(fileUpDate)]的长度不能超过8(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileUpDate}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileUpTime) == false && GetStrLen(pobjFtpResourceEN.fileUpTime) > 6)
{
 throw new Error(`(errid:Watl000413)字段[创建时间(fileUpTime)]的长度不能超过6(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileUpTime}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.memo) == false && GetStrLen(pobjFtpResourceEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.memo}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileType) == false && GetStrLen(pobjFtpResourceEN.fileType) > 30)
{
 throw new Error(`(errid:Watl000413)字段[文件类型(fileType)]的长度不能超过30(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileType}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.checkDateTime) == false && GetStrLen(pobjFtpResourceEN.checkDateTime) > 30)
{
 throw new Error(`(errid:Watl000413)字段[CheckDateTime(checkDateTime)]的长度不能超过30(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.checkDateTime}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.resourceOwner) == false && GetStrLen(pobjFtpResourceEN.resourceOwner) > 50)
{
 throw new Error(`(errid:Watl000413)字段[上传者(resourceOwner)]的长度不能超过50(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.resourceOwner}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.funcModuleId) == false && GetStrLen(pobjFtpResourceEN.funcModuleId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[功能模块Id(funcModuleId)]的长度不能超过4(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.funcModuleId}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileNameBak) == false && GetStrLen(pobjFtpResourceEN.fileNameBak) > 500)
{
 throw new Error(`(errid:Watl000413)字段[FileName_Bak(fileNameBak)]的长度不能超过500(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileNameBak}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.updDate) == false && GetStrLen(pobjFtpResourceEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.updDate}(clsFtpResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.updUser) == false && GetStrLen(pobjFtpResourceEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.updUser}(clsFtpResourceBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjFtpResourceEN.idFtpResource) == false && undefined !== pobjFtpResourceEN.idFtpResource && tzDataType.isString(pobjFtpResourceEN.idFtpResource) === false)
{
 throw new Error(`(errid:Watl000414)字段[FTP资源流水号(idFtpResource)]的值:[${pobjFtpResourceEN.idFtpResource}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.ftpResourceID) == false && undefined !== pobjFtpResourceEN.ftpResourceID && tzDataType.isString(pobjFtpResourceEN.ftpResourceID) === false)
{
 throw new Error(`(errid:Watl000414)字段[FTP资源ID(ftpResourceID)]的值:[${pobjFtpResourceEN.ftpResourceID}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileOriginalName) == false && undefined !== pobjFtpResourceEN.fileOriginalName && tzDataType.isString(pobjFtpResourceEN.fileOriginalName) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件原名(fileOriginalName)]的值:[${pobjFtpResourceEN.fileOriginalName}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileDirName) == false && undefined !== pobjFtpResourceEN.fileDirName && tzDataType.isString(pobjFtpResourceEN.fileDirName) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件目录名(fileDirName)]的值:[${pobjFtpResourceEN.fileDirName}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileRename) == false && undefined !== pobjFtpResourceEN.fileRename && tzDataType.isString(pobjFtpResourceEN.fileRename) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件新名(fileRename)]的值:[${pobjFtpResourceEN.fileRename}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileUpDate) == false && undefined !== pobjFtpResourceEN.fileUpDate && tzDataType.isString(pobjFtpResourceEN.fileUpDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[创建日期(fileUpDate)]的值:[${pobjFtpResourceEN.fileUpDate}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileUpTime) == false && undefined !== pobjFtpResourceEN.fileUpTime && tzDataType.isString(pobjFtpResourceEN.fileUpTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[创建时间(fileUpTime)]的值:[${pobjFtpResourceEN.fileUpTime}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.memo) == false && undefined !== pobjFtpResourceEN.memo && tzDataType.isString(pobjFtpResourceEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjFtpResourceEN.memo}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileType) == false && undefined !== pobjFtpResourceEN.fileType && tzDataType.isString(pobjFtpResourceEN.fileType) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件类型(fileType)]的值:[${pobjFtpResourceEN.fileType}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.checkDateTime) == false && undefined !== pobjFtpResourceEN.checkDateTime && tzDataType.isString(pobjFtpResourceEN.checkDateTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[CheckDateTime(checkDateTime)]的值:[${pobjFtpResourceEN.checkDateTime}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.resourceOwner) == false && undefined !== pobjFtpResourceEN.resourceOwner && tzDataType.isString(pobjFtpResourceEN.resourceOwner) === false)
{
 throw new Error(`(errid:Watl000414)字段[上传者(resourceOwner)]的值:[${pobjFtpResourceEN.resourceOwner}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (null != pobjFtpResourceEN.isExistFile && undefined !== pobjFtpResourceEN.isExistFile && tzDataType.isBoolean(pobjFtpResourceEN.isExistFile) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否存在文件(isExistFile)]的值:[${pobjFtpResourceEN.isExistFile}], 非法,应该为布尔型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.funcModuleId) == false && undefined !== pobjFtpResourceEN.funcModuleId && tzDataType.isString(pobjFtpResourceEN.funcModuleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[功能模块Id(funcModuleId)]的值:[${pobjFtpResourceEN.funcModuleId}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (null != pobjFtpResourceEN.fileResourceID && undefined !== pobjFtpResourceEN.fileResourceID && tzDataType.isNumber(pobjFtpResourceEN.fileResourceID) === false)
{
 throw new Error(`(errid:Watl000414)字段[FileResourceID(fileResourceID)]的值:[${pobjFtpResourceEN.fileResourceID}], 非法,应该为数值型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileNameBak) == false && undefined !== pobjFtpResourceEN.fileNameBak && tzDataType.isString(pobjFtpResourceEN.fileNameBak) === false)
{
 throw new Error(`(errid:Watl000414)字段[FileName_Bak(fileNameBak)]的值:[${pobjFtpResourceEN.fileNameBak}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.updDate) == false && undefined !== pobjFtpResourceEN.updDate && tzDataType.isString(pobjFtpResourceEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFtpResourceEN.updDate}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.updUser) == false && undefined !== pobjFtpResourceEN.updUser && tzDataType.isString(pobjFtpResourceEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjFtpResourceEN.updUser}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function FtpResource_CheckProperty4Update(pobjFtpResourceEN: clsFtpResourceEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjFtpResourceEN.idFtpResource) == false && GetStrLen(pobjFtpResourceEN.idFtpResource) > 8)
{
 throw new Error(`(errid:Watl000416)字段[FTP资源流水号(idFtpResource)]的长度不能超过8(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.idFtpResource}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.ftpResourceID) == false && GetStrLen(pobjFtpResourceEN.ftpResourceID) > 8)
{
 throw new Error(`(errid:Watl000416)字段[FTP资源ID(ftpResourceID)]的长度不能超过8(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.ftpResourceID}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileOriginalName) == false && GetStrLen(pobjFtpResourceEN.fileOriginalName) > 200)
{
 throw new Error(`(errid:Watl000416)字段[文件原名(fileOriginalName)]的长度不能超过200(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileOriginalName}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileDirName) == false && GetStrLen(pobjFtpResourceEN.fileDirName) > 200)
{
 throw new Error(`(errid:Watl000416)字段[文件目录名(fileDirName)]的长度不能超过200(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileDirName}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileRename) == false && GetStrLen(pobjFtpResourceEN.fileRename) > 200)
{
 throw new Error(`(errid:Watl000416)字段[文件新名(fileRename)]的长度不能超过200(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileRename}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileUpDate) == false && GetStrLen(pobjFtpResourceEN.fileUpDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[创建日期(fileUpDate)]的长度不能超过8(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileUpDate}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileUpTime) == false && GetStrLen(pobjFtpResourceEN.fileUpTime) > 6)
{
 throw new Error(`(errid:Watl000416)字段[创建时间(fileUpTime)]的长度不能超过6(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileUpTime}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.memo) == false && GetStrLen(pobjFtpResourceEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.memo}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileType) == false && GetStrLen(pobjFtpResourceEN.fileType) > 30)
{
 throw new Error(`(errid:Watl000416)字段[文件类型(fileType)]的长度不能超过30(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileType}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.checkDateTime) == false && GetStrLen(pobjFtpResourceEN.checkDateTime) > 30)
{
 throw new Error(`(errid:Watl000416)字段[CheckDateTime(checkDateTime)]的长度不能超过30(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.checkDateTime}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.resourceOwner) == false && GetStrLen(pobjFtpResourceEN.resourceOwner) > 50)
{
 throw new Error(`(errid:Watl000416)字段[上传者(resourceOwner)]的长度不能超过50(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.resourceOwner}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.funcModuleId) == false && GetStrLen(pobjFtpResourceEN.funcModuleId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[功能模块Id(funcModuleId)]的长度不能超过4(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.funcModuleId}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileNameBak) == false && GetStrLen(pobjFtpResourceEN.fileNameBak) > 500)
{
 throw new Error(`(errid:Watl000416)字段[FileName_Bak(fileNameBak)]的长度不能超过500(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.fileNameBak}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.updDate) == false && GetStrLen(pobjFtpResourceEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.updDate}(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.updUser) == false && GetStrLen(pobjFtpResourceEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In FTP资源(FtpResource))!值:${pobjFtpResourceEN.updUser}(clsFtpResourceBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjFtpResourceEN.idFtpResource) == false && undefined !== pobjFtpResourceEN.idFtpResource && tzDataType.isString(pobjFtpResourceEN.idFtpResource) === false)
{
 throw new Error(`(errid:Watl000417)字段[FTP资源流水号(idFtpResource)]的值:[${pobjFtpResourceEN.idFtpResource}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.ftpResourceID) == false && undefined !== pobjFtpResourceEN.ftpResourceID && tzDataType.isString(pobjFtpResourceEN.ftpResourceID) === false)
{
 throw new Error(`(errid:Watl000417)字段[FTP资源ID(ftpResourceID)]的值:[${pobjFtpResourceEN.ftpResourceID}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileOriginalName) == false && undefined !== pobjFtpResourceEN.fileOriginalName && tzDataType.isString(pobjFtpResourceEN.fileOriginalName) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件原名(fileOriginalName)]的值:[${pobjFtpResourceEN.fileOriginalName}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileDirName) == false && undefined !== pobjFtpResourceEN.fileDirName && tzDataType.isString(pobjFtpResourceEN.fileDirName) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件目录名(fileDirName)]的值:[${pobjFtpResourceEN.fileDirName}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileRename) == false && undefined !== pobjFtpResourceEN.fileRename && tzDataType.isString(pobjFtpResourceEN.fileRename) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件新名(fileRename)]的值:[${pobjFtpResourceEN.fileRename}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileUpDate) == false && undefined !== pobjFtpResourceEN.fileUpDate && tzDataType.isString(pobjFtpResourceEN.fileUpDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[创建日期(fileUpDate)]的值:[${pobjFtpResourceEN.fileUpDate}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileUpTime) == false && undefined !== pobjFtpResourceEN.fileUpTime && tzDataType.isString(pobjFtpResourceEN.fileUpTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[创建时间(fileUpTime)]的值:[${pobjFtpResourceEN.fileUpTime}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.memo) == false && undefined !== pobjFtpResourceEN.memo && tzDataType.isString(pobjFtpResourceEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjFtpResourceEN.memo}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileType) == false && undefined !== pobjFtpResourceEN.fileType && tzDataType.isString(pobjFtpResourceEN.fileType) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件类型(fileType)]的值:[${pobjFtpResourceEN.fileType}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.checkDateTime) == false && undefined !== pobjFtpResourceEN.checkDateTime && tzDataType.isString(pobjFtpResourceEN.checkDateTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[CheckDateTime(checkDateTime)]的值:[${pobjFtpResourceEN.checkDateTime}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.resourceOwner) == false && undefined !== pobjFtpResourceEN.resourceOwner && tzDataType.isString(pobjFtpResourceEN.resourceOwner) === false)
{
 throw new Error(`(errid:Watl000417)字段[上传者(resourceOwner)]的值:[${pobjFtpResourceEN.resourceOwner}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (null != pobjFtpResourceEN.isExistFile && undefined !== pobjFtpResourceEN.isExistFile && tzDataType.isBoolean(pobjFtpResourceEN.isExistFile) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否存在文件(isExistFile)]的值:[${pobjFtpResourceEN.isExistFile}], 非法,应该为布尔型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.funcModuleId) == false && undefined !== pobjFtpResourceEN.funcModuleId && tzDataType.isString(pobjFtpResourceEN.funcModuleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[功能模块Id(funcModuleId)]的值:[${pobjFtpResourceEN.funcModuleId}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (null != pobjFtpResourceEN.fileResourceID && undefined !== pobjFtpResourceEN.fileResourceID && tzDataType.isNumber(pobjFtpResourceEN.fileResourceID) === false)
{
 throw new Error(`(errid:Watl000417)字段[FileResourceID(fileResourceID)]的值:[${pobjFtpResourceEN.fileResourceID}], 非法,应该为数值型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.fileNameBak) == false && undefined !== pobjFtpResourceEN.fileNameBak && tzDataType.isString(pobjFtpResourceEN.fileNameBak) === false)
{
 throw new Error(`(errid:Watl000417)字段[FileName_Bak(fileNameBak)]的值:[${pobjFtpResourceEN.fileNameBak}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.updDate) == false && undefined !== pobjFtpResourceEN.updDate && tzDataType.isString(pobjFtpResourceEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFtpResourceEN.updDate}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFtpResourceEN.updUser) == false && undefined !== pobjFtpResourceEN.updUser && tzDataType.isString(pobjFtpResourceEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjFtpResourceEN.updUser}], 非法,应该为字符型(In FTP资源(FtpResource))!(clsFtpResourceBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjFtpResourceEN.idFtpResource) === true )
{
 throw new Error(`(errid:Watl000064)字段[FTP资源流水号]不能为空(In FTP资源)!(clsFtpResourceBL:CheckProperty4Update)`);
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
export  function FtpResource_GetJSONStrByObj (pobjFtpResourceEN: clsFtpResourceEN): string
{
pobjFtpResourceEN.sfUpdFldSetStr = pobjFtpResourceEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjFtpResourceEN);
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
export  function FtpResource_GetObjLstByJSONStr (strJSON: string): Array<clsFtpResourceEN>
{
let arrFtpResourceObjLst = new Array<clsFtpResourceEN>();
if (strJSON === "")
{
return arrFtpResourceObjLst;
}
try
{
arrFtpResourceObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrFtpResourceObjLst;
}
return arrFtpResourceObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFtpResourceObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function FtpResource_GetObjLstByJSONObjLst (arrFtpResourceObjLstS: Array<clsFtpResourceEN>): Array<clsFtpResourceEN>
{
const arrFtpResourceObjLst = new Array<clsFtpResourceEN>();
for (const objInFor of arrFtpResourceObjLstS) {
const obj1 = FtpResource_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrFtpResourceObjLst.push(obj1);
}
return arrFtpResourceObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function FtpResource_GetObjByJSONStr (strJSON: string): clsFtpResourceEN
{
let pobjFtpResourceEN = new clsFtpResourceEN();
if (strJSON === "")
{
return pobjFtpResourceEN;
}
try
{
pobjFtpResourceEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjFtpResourceEN;
}
return pobjFtpResourceEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function FtpResource_GetCombineCondition(objFtpResourceCond: clsFtpResourceEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_IdFtpResource) == true)
{
const strComparisonOpIdFtpResource:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_IdFtpResource];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_IdFtpResource, objFtpResourceCond.idFtpResource, strComparisonOpIdFtpResource);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_FtpResourceID) == true)
{
const strComparisonOpFtpResourceID:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_FtpResourceID];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_FtpResourceID, objFtpResourceCond.ftpResourceID, strComparisonOpFtpResourceID);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_FileOriginalName) == true)
{
const strComparisonOpFileOriginalName:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_FileOriginalName];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_FileOriginalName, objFtpResourceCond.fileOriginalName, strComparisonOpFileOriginalName);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_FileDirName) == true)
{
const strComparisonOpFileDirName:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_FileDirName];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_FileDirName, objFtpResourceCond.fileDirName, strComparisonOpFileDirName);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_FileRename) == true)
{
const strComparisonOpFileRename:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_FileRename];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_FileRename, objFtpResourceCond.fileRename, strComparisonOpFileRename);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_FileUpDate) == true)
{
const strComparisonOpFileUpDate:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_FileUpDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_FileUpDate, objFtpResourceCond.fileUpDate, strComparisonOpFileUpDate);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_FileUpTime) == true)
{
const strComparisonOpFileUpTime:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_FileUpTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_FileUpTime, objFtpResourceCond.fileUpTime, strComparisonOpFileUpTime);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_Memo, objFtpResourceCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_FileType) == true)
{
const strComparisonOpFileType:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_FileType];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_FileType, objFtpResourceCond.fileType, strComparisonOpFileType);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_CheckDateTime) == true)
{
const strComparisonOpCheckDateTime:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_CheckDateTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_CheckDateTime, objFtpResourceCond.checkDateTime, strComparisonOpCheckDateTime);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_ResourceOwner) == true)
{
const strComparisonOpResourceOwner:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_ResourceOwner];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_ResourceOwner, objFtpResourceCond.resourceOwner, strComparisonOpResourceOwner);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_IsExistFile) == true)
{
if (objFtpResourceCond.isExistFile == true)
{
strWhereCond += Format(" And {0} = '1'", clsFtpResourceEN.con_IsExistFile);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsFtpResourceEN.con_IsExistFile);
}
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_FuncModuleId) == true)
{
const strComparisonOpFuncModuleId:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_FuncModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_FuncModuleId, objFtpResourceCond.funcModuleId, strComparisonOpFuncModuleId);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_FileResourceID) == true)
{
const strComparisonOpFileResourceID:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_FileResourceID];
strWhereCond += Format(" And {0} {2} {1}", clsFtpResourceEN.con_FileResourceID, objFtpResourceCond.fileResourceID, strComparisonOpFileResourceID);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_FileNameBak) == true)
{
const strComparisonOpFileNameBak:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_FileNameBak];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_FileNameBak, objFtpResourceCond.fileNameBak, strComparisonOpFileNameBak);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_UpdDate, objFtpResourceCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objFtpResourceCond.dicFldComparisonOp, clsFtpResourceEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objFtpResourceCond.dicFldComparisonOp[clsFtpResourceEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsFtpResourceEN.con_UpdUser, objFtpResourceCond.updUser, strComparisonOpUpdUser);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objFtpResourceENS:源对象
 * @param objFtpResourceENT:目标对象
*/
export  function FtpResource_CopyObjTo(objFtpResourceENS: clsFtpResourceEN , objFtpResourceENT: clsFtpResourceEN ): void 
{
objFtpResourceENT.idFtpResource = objFtpResourceENS.idFtpResource; //FTP资源流水号
objFtpResourceENT.ftpResourceID = objFtpResourceENS.ftpResourceID; //FTP资源ID
objFtpResourceENT.fileOriginalName = objFtpResourceENS.fileOriginalName; //文件原名
objFtpResourceENT.fileDirName = objFtpResourceENS.fileDirName; //文件目录名
objFtpResourceENT.fileRename = objFtpResourceENS.fileRename; //文件新名
objFtpResourceENT.fileUpDate = objFtpResourceENS.fileUpDate; //创建日期
objFtpResourceENT.fileUpTime = objFtpResourceENS.fileUpTime; //创建时间
objFtpResourceENT.memo = objFtpResourceENS.memo; //备注
objFtpResourceENT.fileType = objFtpResourceENS.fileType; //文件类型
objFtpResourceENT.checkDateTime = objFtpResourceENS.checkDateTime; //CheckDateTime
objFtpResourceENT.resourceOwner = objFtpResourceENS.resourceOwner; //上传者
objFtpResourceENT.isExistFile = objFtpResourceENS.isExistFile; //是否存在文件
objFtpResourceENT.funcModuleId = objFtpResourceENS.funcModuleId; //功能模块Id
objFtpResourceENT.fileResourceID = objFtpResourceENS.fileResourceID; //FileResourceID
objFtpResourceENT.fileNameBak = objFtpResourceENS.fileNameBak; //FileName_Bak
objFtpResourceENT.updDate = objFtpResourceENS.updDate; //修改日期
objFtpResourceENT.updUser = objFtpResourceENS.updUser; //修改人
objFtpResourceENT.sfUpdFldSetStr = objFtpResourceENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFtpResourceENS:源对象
 * @param objFtpResourceENT:目标对象
*/
export  function FtpResource_GetObjFromJsonObj(objFtpResourceENS: clsFtpResourceEN): clsFtpResourceEN 
{
 const objFtpResourceENT: clsFtpResourceEN = new clsFtpResourceEN();
ObjectAssign(objFtpResourceENT, objFtpResourceENS);
 return objFtpResourceENT;
}