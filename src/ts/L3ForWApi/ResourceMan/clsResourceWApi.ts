
 /**
 * 类名:clsResourceWApi
 * 表名:Resource(01120320)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:46
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
 * 资源(Resource)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsResourceEN } from "@/ts/L0Entity/ResourceMan/clsResourceEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const resource_Controller = "ResourceApi";
 export const resource_ConstructorName = "resource";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdResource:关键字
 * @returns 对象
 **/
export  async function Resource_GetObjByIdResourceAsync(strIdResource: string): Promise<clsResourceEN|null>  
{
const strThisFuncName = "GetObjByIdResourceAsync";

if (IsNullOrEmpty(strIdResource) == true)
{
  const strMsg = Format("参数:[strIdResource]不能为空!(In clsResourceWApi.GetObjByIdResourceAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdResource.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdResource]的长度:[{0}]不正确!(clsResourceWApi.GetObjByIdResourceAsync)", strIdResource.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdResource";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdResource,
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
const objResource = Resource_GetObjFromJsonObj(returnObj);
return objResource;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdResourcelocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByIdResourceCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function Resource_SortFunDefa(a:clsResourceEN , b:clsResourceEN): number 
{
return a.idResource.localeCompare(b.idResource);
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
export  function Resource_SortFunDefa2Fld(a:clsResourceEN , b:clsResourceEN): number 
{
if (a.resourceID == b.resourceID) return a.resourceName.localeCompare(b.resourceName);
else return a.resourceID.localeCompare(b.resourceID);
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
export  function Resource_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsResourceEN.con_IdResource:
return (a: clsResourceEN, b: clsResourceEN) => {
return a.idResource.localeCompare(b.idResource);
}
case clsResourceEN.con_ResourceID:
return (a: clsResourceEN, b: clsResourceEN) => {
return a.resourceID.localeCompare(b.resourceID);
}
case clsResourceEN.con_ResourceName:
return (a: clsResourceEN, b: clsResourceEN) => {
return a.resourceName.localeCompare(b.resourceName);
}
case clsResourceEN.con_SaveMode:
return (a: clsResourceEN) => {
if (a.saveMode == true) return 1;
else return -1
}
case clsResourceEN.con_IdFtpResource:
return (a: clsResourceEN, b: clsResourceEN) => {
if (a.idFtpResource == null) return -1;
if (b.idFtpResource == null) return 1;
return a.idFtpResource.localeCompare(b.idFtpResource);
}
case clsResourceEN.con_IdFile:
return (a: clsResourceEN, b: clsResourceEN) => {
if (a.idFile == null) return -1;
if (b.idFile == null) return 1;
return a.idFile.localeCompare(b.idFile);
}
case clsResourceEN.con_IdResourceType:
return (a: clsResourceEN, b: clsResourceEN) => {
return a.idResourceType.localeCompare(b.idResourceType);
}
case clsResourceEN.con_UpdDate:
return (a: clsResourceEN, b: clsResourceEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsResourceEN.con_UpdTime:
return (a: clsResourceEN, b: clsResourceEN) => {
if (a.updTime == null) return -1;
if (b.updTime == null) return 1;
return a.updTime.localeCompare(b.updTime);
}
case clsResourceEN.con_Memo:
return (a: clsResourceEN, b: clsResourceEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsResourceEN.con_FuncModuleId:
return (a: clsResourceEN, b: clsResourceEN) => {
if (a.funcModuleId == null) return -1;
if (b.funcModuleId == null) return 1;
return a.funcModuleId.localeCompare(b.funcModuleId);
}
case clsResourceEN.con_CheckDate:
return (a: clsResourceEN, b: clsResourceEN) => {
if (a.checkDate == null) return -1;
if (b.checkDate == null) return 1;
return a.checkDate.localeCompare(b.checkDate);
}
case clsResourceEN.con_CheckUser:
return (a: clsResourceEN, b: clsResourceEN) => {
if (a.checkUser == null) return -1;
if (b.checkUser == null) return 1;
return a.checkUser.localeCompare(b.checkUser);
}
case clsResourceEN.con_CheckResult:
return (a: clsResourceEN, b: clsResourceEN) => {
if (a.checkResult == null) return -1;
if (b.checkResult == null) return 1;
return a.checkResult.localeCompare(b.checkResult);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Resource]中不存在!(in ${ resource_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsResourceEN.con_IdResource:
return (a: clsResourceEN, b: clsResourceEN) => {
return b.idResource.localeCompare(a.idResource);
}
case clsResourceEN.con_ResourceID:
return (a: clsResourceEN, b: clsResourceEN) => {
return b.resourceID.localeCompare(a.resourceID);
}
case clsResourceEN.con_ResourceName:
return (a: clsResourceEN, b: clsResourceEN) => {
return b.resourceName.localeCompare(a.resourceName);
}
case clsResourceEN.con_SaveMode:
return (b: clsResourceEN) => {
if (b.saveMode == true) return 1;
else return -1
}
case clsResourceEN.con_IdFtpResource:
return (a: clsResourceEN, b: clsResourceEN) => {
if (b.idFtpResource == null) return -1;
if (a.idFtpResource == null) return 1;
return b.idFtpResource.localeCompare(a.idFtpResource);
}
case clsResourceEN.con_IdFile:
return (a: clsResourceEN, b: clsResourceEN) => {
if (b.idFile == null) return -1;
if (a.idFile == null) return 1;
return b.idFile.localeCompare(a.idFile);
}
case clsResourceEN.con_IdResourceType:
return (a: clsResourceEN, b: clsResourceEN) => {
return b.idResourceType.localeCompare(a.idResourceType);
}
case clsResourceEN.con_UpdDate:
return (a: clsResourceEN, b: clsResourceEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsResourceEN.con_UpdTime:
return (a: clsResourceEN, b: clsResourceEN) => {
if (b.updTime == null) return -1;
if (a.updTime == null) return 1;
return b.updTime.localeCompare(a.updTime);
}
case clsResourceEN.con_Memo:
return (a: clsResourceEN, b: clsResourceEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsResourceEN.con_FuncModuleId:
return (a: clsResourceEN, b: clsResourceEN) => {
if (b.funcModuleId == null) return -1;
if (a.funcModuleId == null) return 1;
return b.funcModuleId.localeCompare(a.funcModuleId);
}
case clsResourceEN.con_CheckDate:
return (a: clsResourceEN, b: clsResourceEN) => {
if (b.checkDate == null) return -1;
if (a.checkDate == null) return 1;
return b.checkDate.localeCompare(a.checkDate);
}
case clsResourceEN.con_CheckUser:
return (a: clsResourceEN, b: clsResourceEN) => {
if (b.checkUser == null) return -1;
if (a.checkUser == null) return 1;
return b.checkUser.localeCompare(a.checkUser);
}
case clsResourceEN.con_CheckResult:
return (a: clsResourceEN, b: clsResourceEN) => {
if (b.checkResult == null) return -1;
if (a.checkResult == null) return 1;
return b.checkResult.localeCompare(a.checkResult);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Resource]中不存在!(in ${ resource_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdResourceCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function Resource_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsResourceEN.con_IdResource:
return (obj: clsResourceEN) => {
return obj.idResource === value;
}
case clsResourceEN.con_ResourceID:
return (obj: clsResourceEN) => {
return obj.resourceID === value;
}
case clsResourceEN.con_ResourceName:
return (obj: clsResourceEN) => {
return obj.resourceName === value;
}
case clsResourceEN.con_SaveMode:
return (obj: clsResourceEN) => {
return obj.saveMode === value;
}
case clsResourceEN.con_IdFtpResource:
return (obj: clsResourceEN) => {
return obj.idFtpResource === value;
}
case clsResourceEN.con_IdFile:
return (obj: clsResourceEN) => {
return obj.idFile === value;
}
case clsResourceEN.con_IdResourceType:
return (obj: clsResourceEN) => {
return obj.idResourceType === value;
}
case clsResourceEN.con_UpdDate:
return (obj: clsResourceEN) => {
return obj.updDate === value;
}
case clsResourceEN.con_UpdTime:
return (obj: clsResourceEN) => {
return obj.updTime === value;
}
case clsResourceEN.con_Memo:
return (obj: clsResourceEN) => {
return obj.memo === value;
}
case clsResourceEN.con_FuncModuleId:
return (obj: clsResourceEN) => {
return obj.funcModuleId === value;
}
case clsResourceEN.con_CheckDate:
return (obj: clsResourceEN) => {
return obj.checkDate === value;
}
case clsResourceEN.con_CheckUser:
return (obj: clsResourceEN) => {
return obj.checkUser === value;
}
case clsResourceEN.con_CheckResult:
return (obj: clsResourceEN) => {
return obj.checkResult === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Resource]中不存在!(in ${ resource_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[Resource__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Resource_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
export  async function Resource_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
export  async function Resource_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
export  async function Resource_GetFirstObjAsync(strWhereCond: string): Promise<clsResourceEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const objResource = Resource_GetObjFromJsonObj(returnObj);
return objResource;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
export  async function Resource_GetObjLstAsync(strWhereCond: string): Promise<Array<clsResourceEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", resource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Resource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
 * @param arrIdResource:关键字列表
 * @returns 对象列表
 **/
export  async function Resource_GetObjLstByIdResourceLstAsync(arrIdResource: Array<string>): Promise<Array<clsResourceEN>>  
{
const strThisFuncName = "GetObjLstByIdResourceLstAsync";
const strAction = "GetObjLstByIdResourceLst";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdResource, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", resource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Resource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdResourceLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function Resource_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsResourceEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", resource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Resource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
export  async function Resource_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsResourceEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", resource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Resource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
export  async function Resource_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsResourceEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsResourceEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", resource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Resource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
 * @param strIdResource:关键字
 * @returns 获取删除的结果
 **/
export  async function Resource_DelRecordAsync(strIdResource: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(resource_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdResource);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
 * @param arrIdResource:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function Resource_DelResourcesAsync(arrIdResource: Array<string>): Promise<number> 
{
const strThisFuncName = "DelResourcesAsync";
const strAction = "DelResources";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdResource, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
export  async function Resource_DelResourcesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelResourcesByCondAsync";
const strAction = "DelResourcesByCond";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
 * @param objResourceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Resource_AddNewRecordAsync(objResourceEN: clsResourceEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objResourceEN);
const strUrl = GetWebApiUrl(resource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
 * @param objResourceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Resource_AddNewRecordWithMaxIdAsync(objResourceEN: clsResourceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
export  async function Resource_AddNewObjSave(objResourceEN: clsResourceEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
Resource_CheckPropertyNew(objResourceEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ resource_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await Resource_CheckUniCond4Add(objResourceEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await Resource_AddNewRecordWithMaxIdAsync(objResourceEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//Resource_ReFreshCache();
}
else
{
const strInfo = `添加[资源(Resource)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ resource_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function Resource_CheckUniCond4Add(objResourceEN: clsResourceEN): Promise<boolean>{
const strUniquenessCondition = Resource_GetUniCondStr(objResourceEN);
const bolIsExistCondition = await Resource_IsExistRecordAsync(strUniquenessCondition);
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
export  async function Resource_CheckUniCond4Update(objResourceEN: clsResourceEN): Promise<boolean>{
const strUniquenessCondition = Resource_GetUniCondStr4Update(objResourceEN);
const bolIsExistCondition = await Resource_IsExistRecordAsync(strUniquenessCondition);
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
export  async function Resource_UpdateObjSave(objResourceEN: clsResourceEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objResourceEN.sfUpdFldSetStr = objResourceEN.updFldString;//设置哪些字段被修改(脏字段)
if (objResourceEN.idResource == "" || objResourceEN.idResource == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
Resource_CheckProperty4Update(objResourceEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ resource_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await Resource_CheckUniCond4Update(objResourceEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await Resource_UpdateRecordAsync(objResourceEN);
if (returnBool == true)
{
//Resource_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ resource_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objResourceEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function Resource_AddNewRecordWithReturnKeyAsync(objResourceEN: clsResourceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
 * @param objResourceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function Resource_UpdateRecordAsync(objResourceEN: clsResourceEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objResourceEN.sfUpdFldSetStr === undefined || objResourceEN.sfUpdFldSetStr === null || objResourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objResourceEN.idResource);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(resource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
 * @param objResourceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function Resource_EditRecordExAsync(objResourceEN: clsResourceEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objResourceEN.sfUpdFldSetStr === undefined || objResourceEN.sfUpdFldSetStr === null || objResourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objResourceEN.idResource);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(resource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
 * @param objResourceEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Resource_UpdateWithConditionAsync(objResourceEN: clsResourceEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objResourceEN.sfUpdFldSetStr === undefined || objResourceEN.sfUpdFldSetStr === null || objResourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objResourceEN.idResource);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(resource_Controller, strAction);
objResourceEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objResourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
export  async function Resource_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
 * @param strIdResource:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function Resource_IsExistAsync(strIdResource: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdResource
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
export  async function Resource_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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

 /**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function Resource_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function Resource_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(resource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, resource_ConstructorName, strThisFuncName);
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
export  function Resource_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function Resource_BindDdl_id_ResourceInDiv(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_id_ResourceInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_ResourceInDivCache");
const strCondition = `1=1`;
const arrObjLstSel = await Resource_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsResourceEN.con_IdResource, clsResourceEN.con_ResourceName, "资源...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function Resource_GetArrResource()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_ResourceInDivCache");
const arrResource = new Array<clsResourceEN>();
const strCondition = `1=1`;
const arrObjLstSel = await Resource_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsResourceEN();
obj0.idResource = '0';
obj0.resourceName = '选资源...';
arrResource.push(obj0);
arrObjLstSel.forEach(x => arrResource.push(x));
return arrResource;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Resource_CheckPropertyNew(pobjResourceEN: clsResourceEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjResourceEN.resourceID) === true )
{
 throw new Error(`(errid:Watl000411)字段[资源ID]不能为空(In 资源)!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.resourceName) === true )
{
 throw new Error(`(errid:Watl000411)字段[资源名称]不能为空(In 资源)!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.idResourceType) === true 
 || pobjResourceEN.idResourceType.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[资源类型流水号]不能为空(In 资源)!(clsResourceBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjResourceEN.idResource) == false && GetStrLen(pobjResourceEN.idResource) > 8)
{
 throw new Error(`(errid:Watl000413)字段[资源流水号(idResource)]的长度不能超过8(In 资源(Resource))!值:${pobjResourceEN.idResource}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.resourceID) == false && GetStrLen(pobjResourceEN.resourceID) > 8)
{
 throw new Error(`(errid:Watl000413)字段[资源ID(resourceID)]的长度不能超过8(In 资源(Resource))!值:${pobjResourceEN.resourceID}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.resourceName) == false && GetStrLen(pobjResourceEN.resourceName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[资源名称(resourceName)]的长度不能超过100(In 资源(Resource))!值:${pobjResourceEN.resourceName}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.idFtpResource) == false && GetStrLen(pobjResourceEN.idFtpResource) > 8)
{
 throw new Error(`(errid:Watl000413)字段[FTP资源流水号(idFtpResource)]的长度不能超过8(In 资源(Resource))!值:${pobjResourceEN.idFtpResource}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.idFile) == false && GetStrLen(pobjResourceEN.idFile) > 8)
{
 throw new Error(`(errid:Watl000413)字段[文件流水号(idFile)]的长度不能超过8(In 资源(Resource))!值:${pobjResourceEN.idFile}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.idResourceType) == false && GetStrLen(pobjResourceEN.idResourceType) > 4)
{
 throw new Error(`(errid:Watl000413)字段[资源类型流水号(idResourceType)]的长度不能超过4(In 资源(Resource))!值:${pobjResourceEN.idResourceType}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.updDate) == false && GetStrLen(pobjResourceEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 资源(Resource))!值:${pobjResourceEN.updDate}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.updTime) == false && GetStrLen(pobjResourceEN.updTime) > 6)
{
 throw new Error(`(errid:Watl000413)字段[UpdTime(updTime)]的长度不能超过6(In 资源(Resource))!值:${pobjResourceEN.updTime}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.memo) == false && GetStrLen(pobjResourceEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 资源(Resource))!值:${pobjResourceEN.memo}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.funcModuleId) == false && GetStrLen(pobjResourceEN.funcModuleId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[功能模块Id(funcModuleId)]的长度不能超过4(In 资源(Resource))!值:${pobjResourceEN.funcModuleId}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkDate) == false && GetStrLen(pobjResourceEN.checkDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[检查日期(checkDate)]的长度不能超过20(In 资源(Resource))!值:${pobjResourceEN.checkDate}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkUser) == false && GetStrLen(pobjResourceEN.checkUser) > 18)
{
 throw new Error(`(errid:Watl000413)字段[检查用户Id(checkUser)]的长度不能超过18(In 资源(Resource))!值:${pobjResourceEN.checkUser}(clsResourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkResult) == false && GetStrLen(pobjResourceEN.checkResult) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[检查结果(checkResult)]的长度不能超过1000(In 资源(Resource))!值:${pobjResourceEN.checkResult}(clsResourceBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjResourceEN.idResource) == false && undefined !== pobjResourceEN.idResource && tzDataType.isString(pobjResourceEN.idResource) === false)
{
 throw new Error(`(errid:Watl000414)字段[资源流水号(idResource)]的值:[${pobjResourceEN.idResource}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.resourceID) == false && undefined !== pobjResourceEN.resourceID && tzDataType.isString(pobjResourceEN.resourceID) === false)
{
 throw new Error(`(errid:Watl000414)字段[资源ID(resourceID)]的值:[${pobjResourceEN.resourceID}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.resourceName) == false && undefined !== pobjResourceEN.resourceName && tzDataType.isString(pobjResourceEN.resourceName) === false)
{
 throw new Error(`(errid:Watl000414)字段[资源名称(resourceName)]的值:[${pobjResourceEN.resourceName}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (null != pobjResourceEN.saveMode && undefined !== pobjResourceEN.saveMode && tzDataType.isBoolean(pobjResourceEN.saveMode) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件存放方式(saveMode)]的值:[${pobjResourceEN.saveMode}], 非法,应该为布尔型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.idFtpResource) == false && undefined !== pobjResourceEN.idFtpResource && tzDataType.isString(pobjResourceEN.idFtpResource) === false)
{
 throw new Error(`(errid:Watl000414)字段[FTP资源流水号(idFtpResource)]的值:[${pobjResourceEN.idFtpResource}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.idFile) == false && undefined !== pobjResourceEN.idFile && tzDataType.isString(pobjResourceEN.idFile) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件流水号(idFile)]的值:[${pobjResourceEN.idFile}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.idResourceType) == false && undefined !== pobjResourceEN.idResourceType && tzDataType.isString(pobjResourceEN.idResourceType) === false)
{
 throw new Error(`(errid:Watl000414)字段[资源类型流水号(idResourceType)]的值:[${pobjResourceEN.idResourceType}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.updDate) == false && undefined !== pobjResourceEN.updDate && tzDataType.isString(pobjResourceEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjResourceEN.updDate}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.updTime) == false && undefined !== pobjResourceEN.updTime && tzDataType.isString(pobjResourceEN.updTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[UpdTime(updTime)]的值:[${pobjResourceEN.updTime}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.memo) == false && undefined !== pobjResourceEN.memo && tzDataType.isString(pobjResourceEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjResourceEN.memo}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.funcModuleId) == false && undefined !== pobjResourceEN.funcModuleId && tzDataType.isString(pobjResourceEN.funcModuleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[功能模块Id(funcModuleId)]的值:[${pobjResourceEN.funcModuleId}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkDate) == false && undefined !== pobjResourceEN.checkDate && tzDataType.isString(pobjResourceEN.checkDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[检查日期(checkDate)]的值:[${pobjResourceEN.checkDate}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkUser) == false && undefined !== pobjResourceEN.checkUser && tzDataType.isString(pobjResourceEN.checkUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[检查用户Id(checkUser)]的值:[${pobjResourceEN.checkUser}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkResult) == false && undefined !== pobjResourceEN.checkResult && tzDataType.isString(pobjResourceEN.checkResult) === false)
{
 throw new Error(`(errid:Watl000414)字段[检查结果(checkResult)]的值:[${pobjResourceEN.checkResult}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjResourceEN.idFtpResource) == false && pobjResourceEN.idFtpResource != '[nuull]' && GetStrLen(pobjResourceEN.idFtpResource) !=  8)
{
 throw ("(errid:Watl000415)字段[FTP资源流水号]作为外键字段,长度应该为8(In 资源)!(clsResourceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjResourceEN.idFile) == false && pobjResourceEN.idFile != '[nuull]' && GetStrLen(pobjResourceEN.idFile) !=  8)
{
 throw ("(errid:Watl000415)字段[文件流水号]作为外键字段,长度应该为8(In 资源)!(clsResourceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjResourceEN.idResourceType) == false && pobjResourceEN.idResourceType != '[nuull]' && GetStrLen(pobjResourceEN.idResourceType) !=  4)
{
 throw ("(errid:Watl000415)字段[资源类型流水号]作为外键字段,长度应该为4(In 资源)!(clsResourceBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Resource_CheckProperty4Update(pobjResourceEN: clsResourceEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjResourceEN.idResource) == false && GetStrLen(pobjResourceEN.idResource) > 8)
{
 throw new Error(`(errid:Watl000416)字段[资源流水号(idResource)]的长度不能超过8(In 资源(Resource))!值:${pobjResourceEN.idResource}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.resourceID) == false && GetStrLen(pobjResourceEN.resourceID) > 8)
{
 throw new Error(`(errid:Watl000416)字段[资源ID(resourceID)]的长度不能超过8(In 资源(Resource))!值:${pobjResourceEN.resourceID}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.resourceName) == false && GetStrLen(pobjResourceEN.resourceName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[资源名称(resourceName)]的长度不能超过100(In 资源(Resource))!值:${pobjResourceEN.resourceName}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.idFtpResource) == false && GetStrLen(pobjResourceEN.idFtpResource) > 8)
{
 throw new Error(`(errid:Watl000416)字段[FTP资源流水号(idFtpResource)]的长度不能超过8(In 资源(Resource))!值:${pobjResourceEN.idFtpResource}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.idFile) == false && GetStrLen(pobjResourceEN.idFile) > 8)
{
 throw new Error(`(errid:Watl000416)字段[文件流水号(idFile)]的长度不能超过8(In 资源(Resource))!值:${pobjResourceEN.idFile}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.idResourceType) == false && GetStrLen(pobjResourceEN.idResourceType) > 4)
{
 throw new Error(`(errid:Watl000416)字段[资源类型流水号(idResourceType)]的长度不能超过4(In 资源(Resource))!值:${pobjResourceEN.idResourceType}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.updDate) == false && GetStrLen(pobjResourceEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 资源(Resource))!值:${pobjResourceEN.updDate}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.updTime) == false && GetStrLen(pobjResourceEN.updTime) > 6)
{
 throw new Error(`(errid:Watl000416)字段[UpdTime(updTime)]的长度不能超过6(In 资源(Resource))!值:${pobjResourceEN.updTime}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.memo) == false && GetStrLen(pobjResourceEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 资源(Resource))!值:${pobjResourceEN.memo}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.funcModuleId) == false && GetStrLen(pobjResourceEN.funcModuleId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[功能模块Id(funcModuleId)]的长度不能超过4(In 资源(Resource))!值:${pobjResourceEN.funcModuleId}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkDate) == false && GetStrLen(pobjResourceEN.checkDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[检查日期(checkDate)]的长度不能超过20(In 资源(Resource))!值:${pobjResourceEN.checkDate}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkUser) == false && GetStrLen(pobjResourceEN.checkUser) > 18)
{
 throw new Error(`(errid:Watl000416)字段[检查用户Id(checkUser)]的长度不能超过18(In 资源(Resource))!值:${pobjResourceEN.checkUser}(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkResult) == false && GetStrLen(pobjResourceEN.checkResult) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[检查结果(checkResult)]的长度不能超过1000(In 资源(Resource))!值:${pobjResourceEN.checkResult}(clsResourceBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjResourceEN.idResource) == false && undefined !== pobjResourceEN.idResource && tzDataType.isString(pobjResourceEN.idResource) === false)
{
 throw new Error(`(errid:Watl000417)字段[资源流水号(idResource)]的值:[${pobjResourceEN.idResource}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.resourceID) == false && undefined !== pobjResourceEN.resourceID && tzDataType.isString(pobjResourceEN.resourceID) === false)
{
 throw new Error(`(errid:Watl000417)字段[资源ID(resourceID)]的值:[${pobjResourceEN.resourceID}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.resourceName) == false && undefined !== pobjResourceEN.resourceName && tzDataType.isString(pobjResourceEN.resourceName) === false)
{
 throw new Error(`(errid:Watl000417)字段[资源名称(resourceName)]的值:[${pobjResourceEN.resourceName}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (null != pobjResourceEN.saveMode && undefined !== pobjResourceEN.saveMode && tzDataType.isBoolean(pobjResourceEN.saveMode) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件存放方式(saveMode)]的值:[${pobjResourceEN.saveMode}], 非法,应该为布尔型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.idFtpResource) == false && undefined !== pobjResourceEN.idFtpResource && tzDataType.isString(pobjResourceEN.idFtpResource) === false)
{
 throw new Error(`(errid:Watl000417)字段[FTP资源流水号(idFtpResource)]的值:[${pobjResourceEN.idFtpResource}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.idFile) == false && undefined !== pobjResourceEN.idFile && tzDataType.isString(pobjResourceEN.idFile) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件流水号(idFile)]的值:[${pobjResourceEN.idFile}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.idResourceType) == false && undefined !== pobjResourceEN.idResourceType && tzDataType.isString(pobjResourceEN.idResourceType) === false)
{
 throw new Error(`(errid:Watl000417)字段[资源类型流水号(idResourceType)]的值:[${pobjResourceEN.idResourceType}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.updDate) == false && undefined !== pobjResourceEN.updDate && tzDataType.isString(pobjResourceEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjResourceEN.updDate}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.updTime) == false && undefined !== pobjResourceEN.updTime && tzDataType.isString(pobjResourceEN.updTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[UpdTime(updTime)]的值:[${pobjResourceEN.updTime}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.memo) == false && undefined !== pobjResourceEN.memo && tzDataType.isString(pobjResourceEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjResourceEN.memo}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.funcModuleId) == false && undefined !== pobjResourceEN.funcModuleId && tzDataType.isString(pobjResourceEN.funcModuleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[功能模块Id(funcModuleId)]的值:[${pobjResourceEN.funcModuleId}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkDate) == false && undefined !== pobjResourceEN.checkDate && tzDataType.isString(pobjResourceEN.checkDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[检查日期(checkDate)]的值:[${pobjResourceEN.checkDate}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkUser) == false && undefined !== pobjResourceEN.checkUser && tzDataType.isString(pobjResourceEN.checkUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[检查用户Id(checkUser)]的值:[${pobjResourceEN.checkUser}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjResourceEN.checkResult) == false && undefined !== pobjResourceEN.checkResult && tzDataType.isString(pobjResourceEN.checkResult) === false)
{
 throw new Error(`(errid:Watl000417)字段[检查结果(checkResult)]的值:[${pobjResourceEN.checkResult}], 非法,应该为字符型(In 资源(Resource))!(clsResourceBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjResourceEN.idFtpResource) == false && pobjResourceEN.idFtpResource != '[nuull]' && GetStrLen(pobjResourceEN.idFtpResource) !=  8)
{
 throw ("(errid:Watl000418)字段[FTP资源流水号]作为外键字段,长度应该为8(In 资源)!(clsResourceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjResourceEN.idFile) == false && pobjResourceEN.idFile != '[nuull]' && GetStrLen(pobjResourceEN.idFile) !=  8)
{
 throw ("(errid:Watl000418)字段[文件流水号]作为外键字段,长度应该为8(In 资源)!(clsResourceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjResourceEN.idResourceType) == false && pobjResourceEN.idResourceType != '[nuull]' && GetStrLen(pobjResourceEN.idResourceType) !=  4)
{
 throw ("(errid:Watl000418)字段[资源类型流水号]作为外键字段,长度应该为4(In 资源)!(clsResourceBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Resource_GetJSONStrByObj (pobjResourceEN: clsResourceEN): string
{
pobjResourceEN.sfUpdFldSetStr = pobjResourceEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjResourceEN);
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
export  function Resource_GetObjLstByJSONStr (strJSON: string): Array<clsResourceEN>
{
let arrResourceObjLst = new Array<clsResourceEN>();
if (strJSON === "")
{
return arrResourceObjLst;
}
try
{
arrResourceObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrResourceObjLst;
}
return arrResourceObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrResourceObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function Resource_GetObjLstByJSONObjLst (arrResourceObjLstS: Array<clsResourceEN>): Array<clsResourceEN>
{
const arrResourceObjLst = new Array<clsResourceEN>();
for (const objInFor of arrResourceObjLstS) {
const obj1 = Resource_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrResourceObjLst.push(obj1);
}
return arrResourceObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Resource_GetObjByJSONStr (strJSON: string): clsResourceEN
{
let pobjResourceEN = new clsResourceEN();
if (strJSON === "")
{
return pobjResourceEN;
}
try
{
pobjResourceEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjResourceEN;
}
return pobjResourceEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function Resource_GetCombineCondition(objResourceCond: clsResourceEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_IdResource) == true)
{
const strComparisonOpIdResource:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_IdResource];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_IdResource, objResourceCond.idResource, strComparisonOpIdResource);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_ResourceID) == true)
{
const strComparisonOpResourceID:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_ResourceID];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_ResourceID, objResourceCond.resourceID, strComparisonOpResourceID);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_ResourceName) == true)
{
const strComparisonOpResourceName:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_ResourceName];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_ResourceName, objResourceCond.resourceName, strComparisonOpResourceName);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_SaveMode) == true)
{
if (objResourceCond.saveMode == true)
{
strWhereCond += Format(" And {0} = '1'", clsResourceEN.con_SaveMode);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsResourceEN.con_SaveMode);
}
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_IdFtpResource) == true)
{
const strComparisonOpIdFtpResource:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_IdFtpResource];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_IdFtpResource, objResourceCond.idFtpResource, strComparisonOpIdFtpResource);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_IdFile) == true)
{
const strComparisonOpIdFile:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_IdFile];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_IdFile, objResourceCond.idFile, strComparisonOpIdFile);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_IdResourceType) == true)
{
const strComparisonOpIdResourceType:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_IdResourceType];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_IdResourceType, objResourceCond.idResourceType, strComparisonOpIdResourceType);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_UpdDate, objResourceCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_UpdTime) == true)
{
const strComparisonOpUpdTime:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_UpdTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_UpdTime, objResourceCond.updTime, strComparisonOpUpdTime);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_Memo, objResourceCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_FuncModuleId) == true)
{
const strComparisonOpFuncModuleId:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_FuncModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_FuncModuleId, objResourceCond.funcModuleId, strComparisonOpFuncModuleId);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_CheckDate) == true)
{
const strComparisonOpCheckDate:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_CheckDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_CheckDate, objResourceCond.checkDate, strComparisonOpCheckDate);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_CheckUser) == true)
{
const strComparisonOpCheckUser:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_CheckUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_CheckUser, objResourceCond.checkUser, strComparisonOpCheckUser);
}
if (Object.prototype.hasOwnProperty.call(objResourceCond.dicFldComparisonOp, clsResourceEN.con_CheckResult) == true)
{
const strComparisonOpCheckResult:string = objResourceCond.dicFldComparisonOp[clsResourceEN.con_CheckResult];
strWhereCond += Format(" And {0} {2} '{1}'", clsResourceEN.con_CheckResult, objResourceCond.checkResult, strComparisonOpCheckResult);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--Resource(资源),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strResourceID: 资源ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function Resource_GetUniCondStr(objResourceEN: clsResourceEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ResourceID = '{0}'", objResourceEN.resourceID);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--Resource(资源),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strResourceID: 资源ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function Resource_GetUniCondStr4Update(objResourceEN: clsResourceEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdResource <> '{0}'", objResourceEN.idResource);
 strWhereCond +=  Format(" and ResourceID = '{0}'", objResourceEN.resourceID);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objResourceENS:源对象
 * @param objResourceENT:目标对象
*/
export  function Resource_CopyObjTo(objResourceENS: clsResourceEN , objResourceENT: clsResourceEN ): void 
{
objResourceENT.idResource = objResourceENS.idResource; //资源流水号
objResourceENT.resourceID = objResourceENS.resourceID; //资源ID
objResourceENT.resourceName = objResourceENS.resourceName; //资源名称
objResourceENT.saveMode = objResourceENS.saveMode; //文件存放方式
objResourceENT.idFtpResource = objResourceENS.idFtpResource; //FTP资源流水号
objResourceENT.idFile = objResourceENS.idFile; //文件流水号
objResourceENT.idResourceType = objResourceENS.idResourceType; //资源类型流水号
objResourceENT.updDate = objResourceENS.updDate; //修改日期
objResourceENT.updTime = objResourceENS.updTime; //UpdTime
objResourceENT.memo = objResourceENS.memo; //备注
objResourceENT.funcModuleId = objResourceENS.funcModuleId; //功能模块Id
objResourceENT.checkDate = objResourceENS.checkDate; //检查日期
objResourceENT.checkUser = objResourceENS.checkUser; //检查用户Id
objResourceENT.checkResult = objResourceENS.checkResult; //检查结果
objResourceENT.sfUpdFldSetStr = objResourceENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objResourceENS:源对象
 * @param objResourceENT:目标对象
*/
export  function Resource_GetObjFromJsonObj(objResourceENS: clsResourceEN): clsResourceEN 
{
 const objResourceENT: clsResourceEN = new clsResourceEN();
ObjectAssign(objResourceENT, objResourceENS);
 return objResourceENT;
}