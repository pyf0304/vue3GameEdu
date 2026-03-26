
 /**
 * 类名:clsFileServerWApi
 * 表名:FileServer(01120325)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:08
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 文件服务(FileServer)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsFileServerEN } from "@/ts/L0Entity/SysPara/clsFileServerEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const fileServer_Controller = "FileServerApi";
 export const fileServer_ConstructorName = "fileServer";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdFile:关键字
 * @returns 对象
 **/
export  async function FileServer_GetObjByIdFileAsync(strIdFile: string): Promise<clsFileServerEN|null>  
{
const strThisFuncName = "GetObjByIdFileAsync";

if (IsNullOrEmpty(strIdFile) == true)
{
  const strMsg = Format("参数:[strIdFile]不能为空!(In clsFileServerWApi.GetObjByIdFileAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdFile.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdFile]的长度:[{0}]不正确!(clsFileServerWApi.GetObjByIdFileAsync)", strIdFile.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdFile";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdFile,
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
const objFileServer = FileServer_GetObjFromJsonObj(returnObj);
return objFileServer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdFilelocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByIdFileCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function FileServer_SortFunDefa(a:clsFileServerEN , b:clsFileServerEN): number 
{
return a.idFile.localeCompare(b.idFile);
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
export  function FileServer_SortFunDefa2Fld(a:clsFileServerEN , b:clsFileServerEN): number 
{
if (a.fileName == b.fileName) return a.fileContent.localeCompare(b.fileContent);
else return a.fileName.localeCompare(b.fileName);
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
export  function FileServer_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsFileServerEN.con_IdFile:
return (a: clsFileServerEN, b: clsFileServerEN) => {
return a.idFile.localeCompare(b.idFile);
}
case clsFileServerEN.con_FileName:
return (a: clsFileServerEN, b: clsFileServerEN) => {
if (a.fileName == null) return -1;
if (b.fileName == null) return 1;
return a.fileName.localeCompare(b.fileName);
}
case clsFileServerEN.con_FileType:
return (a: clsFileServerEN, b: clsFileServerEN) => {
if (a.fileType == null) return -1;
if (b.fileType == null) return 1;
return a.fileType.localeCompare(b.fileType);
}
case clsFileServerEN.con_SaveDate:
return (a: clsFileServerEN, b: clsFileServerEN) => {
if (a.saveDate == null) return -1;
if (b.saveDate == null) return 1;
return a.saveDate.localeCompare(b.saveDate);
}
case clsFileServerEN.con_SaveTime:
return (a: clsFileServerEN, b: clsFileServerEN) => {
if (a.saveTime == null) return -1;
if (b.saveTime == null) return 1;
return a.saveTime.localeCompare(b.saveTime);
}
case clsFileServerEN.con_ResourceOwner:
return (a: clsFileServerEN, b: clsFileServerEN) => {
return a.resourceOwner.localeCompare(b.resourceOwner);
}
case clsFileServerEN.con_FileOriginName:
return (a: clsFileServerEN, b: clsFileServerEN) => {
if (a.fileOriginName == null) return -1;
if (b.fileOriginName == null) return 1;
return a.fileOriginName.localeCompare(b.fileOriginName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FileServer]中不存在!(in ${ fileServer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsFileServerEN.con_IdFile:
return (a: clsFileServerEN, b: clsFileServerEN) => {
return b.idFile.localeCompare(a.idFile);
}
case clsFileServerEN.con_FileName:
return (a: clsFileServerEN, b: clsFileServerEN) => {
if (b.fileName == null) return -1;
if (a.fileName == null) return 1;
return b.fileName.localeCompare(a.fileName);
}
case clsFileServerEN.con_FileType:
return (a: clsFileServerEN, b: clsFileServerEN) => {
if (b.fileType == null) return -1;
if (a.fileType == null) return 1;
return b.fileType.localeCompare(a.fileType);
}
case clsFileServerEN.con_SaveDate:
return (a: clsFileServerEN, b: clsFileServerEN) => {
if (b.saveDate == null) return -1;
if (a.saveDate == null) return 1;
return b.saveDate.localeCompare(a.saveDate);
}
case clsFileServerEN.con_SaveTime:
return (a: clsFileServerEN, b: clsFileServerEN) => {
if (b.saveTime == null) return -1;
if (a.saveTime == null) return 1;
return b.saveTime.localeCompare(a.saveTime);
}
case clsFileServerEN.con_ResourceOwner:
return (a: clsFileServerEN, b: clsFileServerEN) => {
return b.resourceOwner.localeCompare(a.resourceOwner);
}
case clsFileServerEN.con_FileOriginName:
return (a: clsFileServerEN, b: clsFileServerEN) => {
if (b.fileOriginName == null) return -1;
if (a.fileOriginName == null) return 1;
return b.fileOriginName.localeCompare(a.fileOriginName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FileServer]中不存在!(in ${ fileServer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdFileCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function FileServer_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsFileServerEN.con_IdFile:
return (obj: clsFileServerEN) => {
return obj.idFile === value;
}
case clsFileServerEN.con_FileName:
return (obj: clsFileServerEN) => {
return obj.fileName === value;
}
case clsFileServerEN.con_FileType:
return (obj: clsFileServerEN) => {
return obj.fileType === value;
}
case clsFileServerEN.con_SaveDate:
return (obj: clsFileServerEN) => {
return obj.saveDate === value;
}
case clsFileServerEN.con_SaveTime:
return (obj: clsFileServerEN) => {
return obj.saveTime === value;
}
case clsFileServerEN.con_ResourceOwner:
return (obj: clsFileServerEN) => {
return obj.resourceOwner === value;
}
case clsFileServerEN.con_FileOriginName:
return (obj: clsFileServerEN) => {
return obj.fileOriginName === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FileServer]中不存在!(in ${ fileServer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[FileServer__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function FileServer_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  async function FileServer_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  async function FileServer_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  async function FileServer_GetFirstObjAsync(strWhereCond: string): Promise<clsFileServerEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const objFileServer = FileServer_GetObjFromJsonObj(returnObj);
return objFileServer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  async function FileServer_GetObjLstAsync(strWhereCond: string): Promise<Array<clsFileServerEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", fileServer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FileServer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
 * @param arrIdFile:关键字列表
 * @returns 对象列表
 **/
export  async function FileServer_GetObjLstByIdFileLstAsync(arrIdFile: Array<string>): Promise<Array<clsFileServerEN>>  
{
const strThisFuncName = "GetObjLstByIdFileLstAsync";
const strAction = "GetObjLstByIdFileLst";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdFile, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", fileServer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FileServer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdFileLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function FileServer_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsFileServerEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", fileServer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FileServer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  async function FileServer_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsFileServerEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", fileServer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FileServer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  async function FileServer_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsFileServerEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsFileServerEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", fileServer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FileServer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
 * @param strIdFile:关键字
 * @returns 获取删除的结果
 **/
export  async function FileServer_DelRecordAsync(strIdFile: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(fileServer_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdFile);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
 * @param arrIdFile:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function FileServer_DelFileServersAsync(arrIdFile: Array<string>): Promise<number> 
{
const strThisFuncName = "DelFileServersAsync";
const strAction = "DelFileServers";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdFile, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  async function FileServer_DelFileServersByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelFileServersByCondAsync";
const strAction = "DelFileServersByCond";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
 * @param objFileServerEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function FileServer_AddNewRecordAsync(objFileServerEN: clsFileServerEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objFileServerEN.idFile === null || objFileServerEN.idFile === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objFileServerEN);
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFileServerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
 * @param objFileServerEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function FileServer_AddNewRecordWithMaxIdAsync(objFileServerEN: clsFileServerEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFileServerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  async function FileServer_AddNewObjSave(objFileServerEN: clsFileServerEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
FileServer_CheckPropertyNew(objFileServerEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ fileServer_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await FileServer_IsExistAsync(objFileServerEN.idFile);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objFileServerEN.idFile);
console.error(strMsg);
throw(strMsg);
}
returnBool = await FileServer_AddNewRecordAsync(objFileServerEN);
if (returnBool == true)
{
//FileServer_ReFreshCache();
}
else
{
const strInfo = `添加[文件服务(FileServer)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objFileServerEN.idFile, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ fileServer_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function FileServer_UpdateObjSave(objFileServerEN: clsFileServerEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objFileServerEN.sfUpdFldSetStr = objFileServerEN.updFldString;//设置哪些字段被修改(脏字段)
if (objFileServerEN.idFile == "" || objFileServerEN.idFile == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
FileServer_CheckProperty4Update(objFileServerEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ fileServer_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await FileServer_UpdateRecordAsync(objFileServerEN);
if (returnBool == true)
{
//FileServer_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ fileServer_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFileServerEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function FileServer_AddNewRecordWithReturnKeyAsync(objFileServerEN: clsFileServerEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFileServerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
 * @param objFileServerEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function FileServer_UpdateRecordAsync(objFileServerEN: clsFileServerEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objFileServerEN.sfUpdFldSetStr === undefined || objFileServerEN.sfUpdFldSetStr === null || objFileServerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objFileServerEN.idFile);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFileServerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
 * @param objFileServerEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function FileServer_EditRecordExAsync(objFileServerEN: clsFileServerEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objFileServerEN.sfUpdFldSetStr === undefined || objFileServerEN.sfUpdFldSetStr === null || objFileServerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objFileServerEN.idFile);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFileServerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
 * @param objFileServerEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function FileServer_UpdateWithConditionAsync(objFileServerEN: clsFileServerEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objFileServerEN.sfUpdFldSetStr === undefined || objFileServerEN.sfUpdFldSetStr === null || objFileServerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objFileServerEN.idFile);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);
objFileServerEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFileServerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  async function FileServer_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
 * @param strIdFile:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function FileServer_IsExistAsync(strIdFile: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdFile
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  async function FileServer_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  async function FileServer_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(fileServer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, fileServer_ConstructorName, strThisFuncName);
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
export  function FileServer_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function FileServer_BindDdl_id_FileInDiv(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_id_FileInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_FileInDivCache");
const strCondition = `1=1`;
const arrObjLstSel = await FileServer_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsFileServerEN.con_IdFile, clsFileServerEN.con_FileName, "文件服务...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function FileServer_GetArrFileServer()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_FileInDivCache");
const arrFileServer = new Array<clsFileServerEN>();
const strCondition = `1=1`;
const arrObjLstSel = await FileServer_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsFileServerEN();
obj0.idFile = '0';
obj0.fileName = '选文件服务...';
arrFileServer.push(obj0);
arrObjLstSel.forEach(x => arrFileServer.push(x));
return arrFileServer;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function FileServer_CheckPropertyNew(pobjFileServerEN: clsFileServerEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjFileServerEN.resourceOwner) === true )
{
 throw new Error(`(errid:Watl000411)字段[上传者]不能为空(In 文件服务)!(clsFileServerBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjFileServerEN.idFile) == false && GetStrLen(pobjFileServerEN.idFile) > 8)
{
 throw new Error(`(errid:Watl000413)字段[文件流水号(idFile)]的长度不能超过8(In 文件服务(FileServer))!值:${pobjFileServerEN.idFile}(clsFileServerBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileName) == false && GetStrLen(pobjFileServerEN.fileName) > 500)
{
 throw new Error(`(errid:Watl000413)字段[文件名称(fileName)]的长度不能超过500(In 文件服务(FileServer))!值:${pobjFileServerEN.fileName}(clsFileServerBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileType) == false && GetStrLen(pobjFileServerEN.fileType) > 30)
{
 throw new Error(`(errid:Watl000413)字段[文件类型(fileType)]的长度不能超过30(In 文件服务(FileServer))!值:${pobjFileServerEN.fileType}(clsFileServerBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFileServerEN.saveDate) == false && GetStrLen(pobjFileServerEN.saveDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[创建日期(saveDate)]的长度不能超过8(In 文件服务(FileServer))!值:${pobjFileServerEN.saveDate}(clsFileServerBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFileServerEN.saveTime) == false && GetStrLen(pobjFileServerEN.saveTime) > 6)
{
 throw new Error(`(errid:Watl000413)字段[创建时间(saveTime)]的长度不能超过6(In 文件服务(FileServer))!值:${pobjFileServerEN.saveTime}(clsFileServerBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFileServerEN.resourceOwner) == false && GetStrLen(pobjFileServerEN.resourceOwner) > 50)
{
 throw new Error(`(errid:Watl000413)字段[上传者(resourceOwner)]的长度不能超过50(In 文件服务(FileServer))!值:${pobjFileServerEN.resourceOwner}(clsFileServerBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileOriginName) == false && GetStrLen(pobjFileServerEN.fileOriginName) > 500)
{
 throw new Error(`(errid:Watl000413)字段[原文件名(fileOriginName)]的长度不能超过500(In 文件服务(FileServer))!值:${pobjFileServerEN.fileOriginName}(clsFileServerBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjFileServerEN.idFile) == false && undefined !== pobjFileServerEN.idFile && tzDataType.isString(pobjFileServerEN.idFile) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件流水号(idFile)]的值:[${pobjFileServerEN.idFile}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileName) == false && undefined !== pobjFileServerEN.fileName && tzDataType.isString(pobjFileServerEN.fileName) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件名称(fileName)]的值:[${pobjFileServerEN.fileName}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckPropertyNew0)`);
}
{
 throw new Error(`(errid:Watl000414)字段[文件内容(fileContent)]的值:[${pobjFileServerEN.fileContent}], 非法,应该为any型(In 文件服务(FileServer))!(clsFileServerBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileType) == false && undefined !== pobjFileServerEN.fileType && tzDataType.isString(pobjFileServerEN.fileType) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件类型(fileType)]的值:[${pobjFileServerEN.fileType}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFileServerEN.saveDate) == false && undefined !== pobjFileServerEN.saveDate && tzDataType.isString(pobjFileServerEN.saveDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[创建日期(saveDate)]的值:[${pobjFileServerEN.saveDate}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFileServerEN.saveTime) == false && undefined !== pobjFileServerEN.saveTime && tzDataType.isString(pobjFileServerEN.saveTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[创建时间(saveTime)]的值:[${pobjFileServerEN.saveTime}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFileServerEN.resourceOwner) == false && undefined !== pobjFileServerEN.resourceOwner && tzDataType.isString(pobjFileServerEN.resourceOwner) === false)
{
 throw new Error(`(errid:Watl000414)字段[上传者(resourceOwner)]的值:[${pobjFileServerEN.resourceOwner}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileOriginName) == false && undefined !== pobjFileServerEN.fileOriginName && tzDataType.isString(pobjFileServerEN.fileOriginName) === false)
{
 throw new Error(`(errid:Watl000414)字段[原文件名(fileOriginName)]的值:[${pobjFileServerEN.fileOriginName}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function FileServer_CheckProperty4Update(pobjFileServerEN: clsFileServerEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjFileServerEN.idFile) == false && GetStrLen(pobjFileServerEN.idFile) > 8)
{
 throw new Error(`(errid:Watl000416)字段[文件流水号(idFile)]的长度不能超过8(In 文件服务(FileServer))!值:${pobjFileServerEN.idFile}(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileName) == false && GetStrLen(pobjFileServerEN.fileName) > 500)
{
 throw new Error(`(errid:Watl000416)字段[文件名称(fileName)]的长度不能超过500(In 文件服务(FileServer))!值:${pobjFileServerEN.fileName}(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileType) == false && GetStrLen(pobjFileServerEN.fileType) > 30)
{
 throw new Error(`(errid:Watl000416)字段[文件类型(fileType)]的长度不能超过30(In 文件服务(FileServer))!值:${pobjFileServerEN.fileType}(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.saveDate) == false && GetStrLen(pobjFileServerEN.saveDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[创建日期(saveDate)]的长度不能超过8(In 文件服务(FileServer))!值:${pobjFileServerEN.saveDate}(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.saveTime) == false && GetStrLen(pobjFileServerEN.saveTime) > 6)
{
 throw new Error(`(errid:Watl000416)字段[创建时间(saveTime)]的长度不能超过6(In 文件服务(FileServer))!值:${pobjFileServerEN.saveTime}(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.resourceOwner) == false && GetStrLen(pobjFileServerEN.resourceOwner) > 50)
{
 throw new Error(`(errid:Watl000416)字段[上传者(resourceOwner)]的长度不能超过50(In 文件服务(FileServer))!值:${pobjFileServerEN.resourceOwner}(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileOriginName) == false && GetStrLen(pobjFileServerEN.fileOriginName) > 500)
{
 throw new Error(`(errid:Watl000416)字段[原文件名(fileOriginName)]的长度不能超过500(In 文件服务(FileServer))!值:${pobjFileServerEN.fileOriginName}(clsFileServerBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjFileServerEN.idFile) == false && undefined !== pobjFileServerEN.idFile && tzDataType.isString(pobjFileServerEN.idFile) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件流水号(idFile)]的值:[${pobjFileServerEN.idFile}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileName) == false && undefined !== pobjFileServerEN.fileName && tzDataType.isString(pobjFileServerEN.fileName) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件名称(fileName)]的值:[${pobjFileServerEN.fileName}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckProperty4Update)`);
}
{
 throw new Error(`(errid:Watl000417)字段[文件内容(fileContent)]的值:[${pobjFileServerEN.fileContent}], 非法,应该为any型(In 文件服务(FileServer))!(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileType) == false && undefined !== pobjFileServerEN.fileType && tzDataType.isString(pobjFileServerEN.fileType) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件类型(fileType)]的值:[${pobjFileServerEN.fileType}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.saveDate) == false && undefined !== pobjFileServerEN.saveDate && tzDataType.isString(pobjFileServerEN.saveDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[创建日期(saveDate)]的值:[${pobjFileServerEN.saveDate}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.saveTime) == false && undefined !== pobjFileServerEN.saveTime && tzDataType.isString(pobjFileServerEN.saveTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[创建时间(saveTime)]的值:[${pobjFileServerEN.saveTime}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.resourceOwner) == false && undefined !== pobjFileServerEN.resourceOwner && tzDataType.isString(pobjFileServerEN.resourceOwner) === false)
{
 throw new Error(`(errid:Watl000417)字段[上传者(resourceOwner)]的值:[${pobjFileServerEN.resourceOwner}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFileServerEN.fileOriginName) == false && undefined !== pobjFileServerEN.fileOriginName && tzDataType.isString(pobjFileServerEN.fileOriginName) === false)
{
 throw new Error(`(errid:Watl000417)字段[原文件名(fileOriginName)]的值:[${pobjFileServerEN.fileOriginName}], 非法,应该为字符型(In 文件服务(FileServer))!(clsFileServerBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjFileServerEN.idFile) === true )
{
 throw new Error(`(errid:Watl000064)字段[文件流水号]不能为空(In 文件服务)!(clsFileServerBL:CheckProperty4Update)`);
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
export  function FileServer_GetJSONStrByObj (pobjFileServerEN: clsFileServerEN): string
{
pobjFileServerEN.sfUpdFldSetStr = pobjFileServerEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjFileServerEN);
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
export  function FileServer_GetObjLstByJSONStr (strJSON: string): Array<clsFileServerEN>
{
let arrFileServerObjLst = new Array<clsFileServerEN>();
if (strJSON === "")
{
return arrFileServerObjLst;
}
try
{
arrFileServerObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrFileServerObjLst;
}
return arrFileServerObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFileServerObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function FileServer_GetObjLstByJSONObjLst (arrFileServerObjLstS: Array<clsFileServerEN>): Array<clsFileServerEN>
{
const arrFileServerObjLst = new Array<clsFileServerEN>();
for (const objInFor of arrFileServerObjLstS) {
const obj1 = FileServer_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrFileServerObjLst.push(obj1);
}
return arrFileServerObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function FileServer_GetObjByJSONStr (strJSON: string): clsFileServerEN
{
let pobjFileServerEN = new clsFileServerEN();
if (strJSON === "")
{
return pobjFileServerEN;
}
try
{
pobjFileServerEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjFileServerEN;
}
return pobjFileServerEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function FileServer_GetCombineCondition(objFileServerCond: clsFileServerEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objFileServerCond.dicFldComparisonOp, clsFileServerEN.con_IdFile) == true)
{
const strComparisonOpIdFile:string = objFileServerCond.dicFldComparisonOp[clsFileServerEN.con_IdFile];
strWhereCond += Format(" And {0} {2} '{1}'", clsFileServerEN.con_IdFile, objFileServerCond.idFile, strComparisonOpIdFile);
}
if (Object.prototype.hasOwnProperty.call(objFileServerCond.dicFldComparisonOp, clsFileServerEN.con_FileName) == true)
{
const strComparisonOpFileName:string = objFileServerCond.dicFldComparisonOp[clsFileServerEN.con_FileName];
strWhereCond += Format(" And {0} {2} '{1}'", clsFileServerEN.con_FileName, objFileServerCond.fileName, strComparisonOpFileName);
}
//数据类型any(image)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objFileServerCond.dicFldComparisonOp, clsFileServerEN.con_FileType) == true)
{
const strComparisonOpFileType:string = objFileServerCond.dicFldComparisonOp[clsFileServerEN.con_FileType];
strWhereCond += Format(" And {0} {2} '{1}'", clsFileServerEN.con_FileType, objFileServerCond.fileType, strComparisonOpFileType);
}
if (Object.prototype.hasOwnProperty.call(objFileServerCond.dicFldComparisonOp, clsFileServerEN.con_SaveDate) == true)
{
const strComparisonOpSaveDate:string = objFileServerCond.dicFldComparisonOp[clsFileServerEN.con_SaveDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsFileServerEN.con_SaveDate, objFileServerCond.saveDate, strComparisonOpSaveDate);
}
if (Object.prototype.hasOwnProperty.call(objFileServerCond.dicFldComparisonOp, clsFileServerEN.con_SaveTime) == true)
{
const strComparisonOpSaveTime:string = objFileServerCond.dicFldComparisonOp[clsFileServerEN.con_SaveTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsFileServerEN.con_SaveTime, objFileServerCond.saveTime, strComparisonOpSaveTime);
}
if (Object.prototype.hasOwnProperty.call(objFileServerCond.dicFldComparisonOp, clsFileServerEN.con_ResourceOwner) == true)
{
const strComparisonOpResourceOwner:string = objFileServerCond.dicFldComparisonOp[clsFileServerEN.con_ResourceOwner];
strWhereCond += Format(" And {0} {2} '{1}'", clsFileServerEN.con_ResourceOwner, objFileServerCond.resourceOwner, strComparisonOpResourceOwner);
}
if (Object.prototype.hasOwnProperty.call(objFileServerCond.dicFldComparisonOp, clsFileServerEN.con_FileOriginName) == true)
{
const strComparisonOpFileOriginName:string = objFileServerCond.dicFldComparisonOp[clsFileServerEN.con_FileOriginName];
strWhereCond += Format(" And {0} {2} '{1}'", clsFileServerEN.con_FileOriginName, objFileServerCond.fileOriginName, strComparisonOpFileOriginName);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objFileServerENS:源对象
 * @param objFileServerENT:目标对象
*/
export  function FileServer_CopyObjTo(objFileServerENS: clsFileServerEN , objFileServerENT: clsFileServerEN ): void 
{
objFileServerENT.idFile = objFileServerENS.idFile; //文件流水号
objFileServerENT.fileName = objFileServerENS.fileName; //文件名称
objFileServerENT.fileContent = objFileServerENS.fileContent; //文件内容
objFileServerENT.fileType = objFileServerENS.fileType; //文件类型
objFileServerENT.saveDate = objFileServerENS.saveDate; //创建日期
objFileServerENT.saveTime = objFileServerENS.saveTime; //创建时间
objFileServerENT.resourceOwner = objFileServerENS.resourceOwner; //上传者
objFileServerENT.fileOriginName = objFileServerENS.fileOriginName; //原文件名
objFileServerENT.sfUpdFldSetStr = objFileServerENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFileServerENS:源对象
 * @param objFileServerENT:目标对象
*/
export  function FileServer_GetObjFromJsonObj(objFileServerENS: clsFileServerEN): clsFileServerEN 
{
 const objFileServerENT: clsFileServerEN = new clsFileServerEN();
ObjectAssign(objFileServerENT, objFileServerENS);
 return objFileServerENT;
}