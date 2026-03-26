
 /**
 * 类名:clsCreditTypeWApi
 * 表名:CreditType(01120984)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:18
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
 * 积分类型(CreditType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsCreditTypeEN } from "@/ts/L0Entity/SysPara/clsCreditTypeEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const creditType_Controller = "CreditTypeApi";
 export const creditType_ConstructorName = "creditType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCreditTypeId:关键字
 * @returns 对象
 **/
export  async function CreditType_GetObjByCreditTypeIdAsync(strCreditTypeId: string): Promise<clsCreditTypeEN|null>  
{
const strThisFuncName = "GetObjByCreditTypeIdAsync";

if (IsNullOrEmpty(strCreditTypeId) == true)
{
  const strMsg = Format("参数:[strCreditTypeId]不能为空!(In clsCreditTypeWApi.GetObjByCreditTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCreditTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strCreditTypeId]的长度:[{0}]不正确!(clsCreditTypeWApi.GetObjByCreditTypeIdAsync)", strCreditTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByCreditTypeId";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCreditTypeId,
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
const objCreditType = CreditType_GetObjFromJsonObj(returnObj);
return objCreditType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByCreditTypeIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByCreditTypeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function CreditType_SortFunDefa(a:clsCreditTypeEN , b:clsCreditTypeEN): number 
{
return a.creditTypeId.localeCompare(b.creditTypeId);
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
export  function CreditType_SortFunDefa2Fld(a:clsCreditTypeEN , b:clsCreditTypeEN): number 
{
if (a.creditTypeName == b.creditTypeName) return a.creditTypeEnName.localeCompare(b.creditTypeEnName);
else return a.creditTypeName.localeCompare(b.creditTypeName);
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
export  function CreditType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsCreditTypeEN.con_CreditTypeId:
return (a: clsCreditTypeEN, b: clsCreditTypeEN) => {
return a.creditTypeId.localeCompare(b.creditTypeId);
}
case clsCreditTypeEN.con_CreditTypeName:
return (a: clsCreditTypeEN, b: clsCreditTypeEN) => {
return a.creditTypeName.localeCompare(b.creditTypeName);
}
case clsCreditTypeEN.con_CreditTypeEnName:
return (a: clsCreditTypeEN, b: clsCreditTypeEN) => {
return a.creditTypeEnName.localeCompare(b.creditTypeEnName);
}
case clsCreditTypeEN.con_Credits:
return (a: clsCreditTypeEN, b: clsCreditTypeEN) => {
return a.credits-b.credits;
}
case clsCreditTypeEN.con_Memo:
return (a: clsCreditTypeEN, b: clsCreditTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CreditType]中不存在!(in ${ creditType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsCreditTypeEN.con_CreditTypeId:
return (a: clsCreditTypeEN, b: clsCreditTypeEN) => {
return b.creditTypeId.localeCompare(a.creditTypeId);
}
case clsCreditTypeEN.con_CreditTypeName:
return (a: clsCreditTypeEN, b: clsCreditTypeEN) => {
return b.creditTypeName.localeCompare(a.creditTypeName);
}
case clsCreditTypeEN.con_CreditTypeEnName:
return (a: clsCreditTypeEN, b: clsCreditTypeEN) => {
return b.creditTypeEnName.localeCompare(a.creditTypeEnName);
}
case clsCreditTypeEN.con_Credits:
return (a: clsCreditTypeEN, b: clsCreditTypeEN) => {
return b.credits-a.credits;
}
case clsCreditTypeEN.con_Memo:
return (a: clsCreditTypeEN, b: clsCreditTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CreditType]中不存在!(in ${ creditType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByCreditTypeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function CreditType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsCreditTypeEN.con_CreditTypeId:
return (obj: clsCreditTypeEN) => {
return obj.creditTypeId === value;
}
case clsCreditTypeEN.con_CreditTypeName:
return (obj: clsCreditTypeEN) => {
return obj.creditTypeName === value;
}
case clsCreditTypeEN.con_CreditTypeEnName:
return (obj: clsCreditTypeEN) => {
return obj.creditTypeEnName === value;
}
case clsCreditTypeEN.con_Credits:
return (obj: clsCreditTypeEN) => {
return obj.credits === value;
}
case clsCreditTypeEN.con_Memo:
return (obj: clsCreditTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CreditType]中不存在!(in ${ creditType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[CreditType__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CreditType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  async function CreditType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  async function CreditType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  async function CreditType_GetFirstObjAsync(strWhereCond: string): Promise<clsCreditTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const objCreditType = CreditType_GetObjFromJsonObj(returnObj);
return objCreditType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  async function CreditType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsCreditTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", creditType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CreditType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
 * @param arrCreditTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function CreditType_GetObjLstByCreditTypeIdLstAsync(arrCreditTypeId: Array<string>): Promise<Array<clsCreditTypeEN>>  
{
const strThisFuncName = "GetObjLstByCreditTypeIdLstAsync";
const strAction = "GetObjLstByCreditTypeIdLst";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCreditTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", creditType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CreditType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByCreditTypeIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function CreditType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsCreditTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", creditType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CreditType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  async function CreditType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsCreditTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", creditType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CreditType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  async function CreditType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsCreditTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsCreditTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", creditType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CreditType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
 * @param strCreditTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function CreditType_DelRecordAsync(strCreditTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(creditType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strCreditTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
 * @param arrCreditTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function CreditType_DelCreditTypesAsync(arrCreditTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelCreditTypesAsync";
const strAction = "DelCreditTypes";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCreditTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  async function CreditType_DelCreditTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelCreditTypesByCondAsync";
const strAction = "DelCreditTypesByCond";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
 * @param objCreditTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function CreditType_AddNewRecordAsync(objCreditTypeEN: clsCreditTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objCreditTypeEN.creditTypeId === null || objCreditTypeEN.creditTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objCreditTypeEN);
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCreditTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
 * @param objCreditTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function CreditType_AddNewRecordWithMaxIdAsync(objCreditTypeEN: clsCreditTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCreditTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  async function CreditType_AddNewObjSave(objCreditTypeEN: clsCreditTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
CreditType_CheckPropertyNew(objCreditTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ creditType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await CreditType_IsExistAsync(objCreditTypeEN.creditTypeId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objCreditTypeEN.creditTypeId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await CreditType_AddNewRecordAsync(objCreditTypeEN);
if (returnBool == true)
{
//CreditType_ReFreshCache();
}
else
{
const strInfo = `添加[积分类型(CreditType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objCreditTypeEN.creditTypeId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ creditType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function CreditType_UpdateObjSave(objCreditTypeEN: clsCreditTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objCreditTypeEN.sfUpdFldSetStr = objCreditTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objCreditTypeEN.creditTypeId == "" || objCreditTypeEN.creditTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
CreditType_CheckProperty4Update(objCreditTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ creditType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await CreditType_UpdateRecordAsync(objCreditTypeEN);
if (returnBool == true)
{
//CreditType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ creditType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objCreditTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function CreditType_AddNewRecordWithReturnKeyAsync(objCreditTypeEN: clsCreditTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCreditTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
 * @param objCreditTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function CreditType_UpdateRecordAsync(objCreditTypeEN: clsCreditTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objCreditTypeEN.sfUpdFldSetStr === undefined || objCreditTypeEN.sfUpdFldSetStr === null || objCreditTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCreditTypeEN.creditTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCreditTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
 * @param objCreditTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function CreditType_EditRecordExAsync(objCreditTypeEN: clsCreditTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objCreditTypeEN.sfUpdFldSetStr === undefined || objCreditTypeEN.sfUpdFldSetStr === null || objCreditTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCreditTypeEN.creditTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCreditTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
 * @param objCreditTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CreditType_UpdateWithConditionAsync(objCreditTypeEN: clsCreditTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objCreditTypeEN.sfUpdFldSetStr === undefined || objCreditTypeEN.sfUpdFldSetStr === null || objCreditTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCreditTypeEN.creditTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(creditType_Controller, strAction);
objCreditTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCreditTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  async function CreditType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
 * @param strCreditTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function CreditType_IsExistAsync(strCreditTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCreditTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  async function CreditType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  async function CreditType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(creditType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, creditType_ConstructorName, strThisFuncName);
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
export  function CreditType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function CreditType_CheckPropertyNew(pobjCreditTypeEN: clsCreditTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[积分类型名]不能为空(In 积分类型)!(clsCreditTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeEnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[积分类型英文名]不能为空(In 积分类型)!(clsCreditTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeId) == false && GetStrLen(pobjCreditTypeEN.creditTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[积分类型Id(creditTypeId)]的长度不能超过2(In 积分类型(CreditType))!值:${pobjCreditTypeEN.creditTypeId}(clsCreditTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeName) == false && GetStrLen(pobjCreditTypeEN.creditTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[积分类型名(creditTypeName)]的长度不能超过50(In 积分类型(CreditType))!值:${pobjCreditTypeEN.creditTypeName}(clsCreditTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeEnName) == false && GetStrLen(pobjCreditTypeEN.creditTypeEnName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[积分类型英文名(creditTypeEnName)]的长度不能超过50(In 积分类型(CreditType))!值:${pobjCreditTypeEN.creditTypeEnName}(clsCreditTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.memo) == false && GetStrLen(pobjCreditTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 积分类型(CreditType))!值:${pobjCreditTypeEN.memo}(clsCreditTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeId) == false && undefined !== pobjCreditTypeEN.creditTypeId && tzDataType.isString(pobjCreditTypeEN.creditTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分类型Id(creditTypeId)]的值:[${pobjCreditTypeEN.creditTypeId}], 非法,应该为字符型(In 积分类型(CreditType))!(clsCreditTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeName) == false && undefined !== pobjCreditTypeEN.creditTypeName && tzDataType.isString(pobjCreditTypeEN.creditTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分类型名(creditTypeName)]的值:[${pobjCreditTypeEN.creditTypeName}], 非法,应该为字符型(In 积分类型(CreditType))!(clsCreditTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeEnName) == false && undefined !== pobjCreditTypeEN.creditTypeEnName && tzDataType.isString(pobjCreditTypeEN.creditTypeEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分类型英文名(creditTypeEnName)]的值:[${pobjCreditTypeEN.creditTypeEnName}], 非法,应该为字符型(In 积分类型(CreditType))!(clsCreditTypeBL:CheckPropertyNew0)`);
}
if (null != pobjCreditTypeEN.credits && undefined !== pobjCreditTypeEN.credits && tzDataType.isNumber(pobjCreditTypeEN.credits) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分(credits)]的值:[${pobjCreditTypeEN.credits}], 非法,应该为数值型(In 积分类型(CreditType))!(clsCreditTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.memo) == false && undefined !== pobjCreditTypeEN.memo && tzDataType.isString(pobjCreditTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjCreditTypeEN.memo}], 非法,应该为字符型(In 积分类型(CreditType))!(clsCreditTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function CreditType_CheckProperty4Update(pobjCreditTypeEN: clsCreditTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeId) == false && GetStrLen(pobjCreditTypeEN.creditTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[积分类型Id(creditTypeId)]的长度不能超过2(In 积分类型(CreditType))!值:${pobjCreditTypeEN.creditTypeId}(clsCreditTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeName) == false && GetStrLen(pobjCreditTypeEN.creditTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[积分类型名(creditTypeName)]的长度不能超过50(In 积分类型(CreditType))!值:${pobjCreditTypeEN.creditTypeName}(clsCreditTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeEnName) == false && GetStrLen(pobjCreditTypeEN.creditTypeEnName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[积分类型英文名(creditTypeEnName)]的长度不能超过50(In 积分类型(CreditType))!值:${pobjCreditTypeEN.creditTypeEnName}(clsCreditTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.memo) == false && GetStrLen(pobjCreditTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 积分类型(CreditType))!值:${pobjCreditTypeEN.memo}(clsCreditTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeId) == false && undefined !== pobjCreditTypeEN.creditTypeId && tzDataType.isString(pobjCreditTypeEN.creditTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分类型Id(creditTypeId)]的值:[${pobjCreditTypeEN.creditTypeId}], 非法,应该为字符型(In 积分类型(CreditType))!(clsCreditTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeName) == false && undefined !== pobjCreditTypeEN.creditTypeName && tzDataType.isString(pobjCreditTypeEN.creditTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分类型名(creditTypeName)]的值:[${pobjCreditTypeEN.creditTypeName}], 非法,应该为字符型(In 积分类型(CreditType))!(clsCreditTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeEnName) == false && undefined !== pobjCreditTypeEN.creditTypeEnName && tzDataType.isString(pobjCreditTypeEN.creditTypeEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分类型英文名(creditTypeEnName)]的值:[${pobjCreditTypeEN.creditTypeEnName}], 非法,应该为字符型(In 积分类型(CreditType))!(clsCreditTypeBL:CheckProperty4Update)`);
}
if (null != pobjCreditTypeEN.credits && undefined !== pobjCreditTypeEN.credits && tzDataType.isNumber(pobjCreditTypeEN.credits) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分(credits)]的值:[${pobjCreditTypeEN.credits}], 非法,应该为数值型(In 积分类型(CreditType))!(clsCreditTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjCreditTypeEN.memo) == false && undefined !== pobjCreditTypeEN.memo && tzDataType.isString(pobjCreditTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjCreditTypeEN.memo}], 非法,应该为字符型(In 积分类型(CreditType))!(clsCreditTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjCreditTypeEN.creditTypeId) === true 
 || pobjCreditTypeEN.creditTypeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[积分类型Id]不能为空(In 积分类型)!(clsCreditTypeBL:CheckProperty4Update)`);
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
export  function CreditType_GetJSONStrByObj (pobjCreditTypeEN: clsCreditTypeEN): string
{
pobjCreditTypeEN.sfUpdFldSetStr = pobjCreditTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjCreditTypeEN);
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
export  function CreditType_GetObjLstByJSONStr (strJSON: string): Array<clsCreditTypeEN>
{
let arrCreditTypeObjLst = new Array<clsCreditTypeEN>();
if (strJSON === "")
{
return arrCreditTypeObjLst;
}
try
{
arrCreditTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrCreditTypeObjLst;
}
return arrCreditTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCreditTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function CreditType_GetObjLstByJSONObjLst (arrCreditTypeObjLstS: Array<clsCreditTypeEN>): Array<clsCreditTypeEN>
{
const arrCreditTypeObjLst = new Array<clsCreditTypeEN>();
for (const objInFor of arrCreditTypeObjLstS) {
const obj1 = CreditType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrCreditTypeObjLst.push(obj1);
}
return arrCreditTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function CreditType_GetObjByJSONStr (strJSON: string): clsCreditTypeEN
{
let pobjCreditTypeEN = new clsCreditTypeEN();
if (strJSON === "")
{
return pobjCreditTypeEN;
}
try
{
pobjCreditTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjCreditTypeEN;
}
return pobjCreditTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function CreditType_GetCombineCondition(objCreditTypeCond: clsCreditTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objCreditTypeCond.dicFldComparisonOp, clsCreditTypeEN.con_CreditTypeId) == true)
{
const strComparisonOpCreditTypeId:string = objCreditTypeCond.dicFldComparisonOp[clsCreditTypeEN.con_CreditTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCreditTypeEN.con_CreditTypeId, objCreditTypeCond.creditTypeId, strComparisonOpCreditTypeId);
}
if (Object.prototype.hasOwnProperty.call(objCreditTypeCond.dicFldComparisonOp, clsCreditTypeEN.con_CreditTypeName) == true)
{
const strComparisonOpCreditTypeName:string = objCreditTypeCond.dicFldComparisonOp[clsCreditTypeEN.con_CreditTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsCreditTypeEN.con_CreditTypeName, objCreditTypeCond.creditTypeName, strComparisonOpCreditTypeName);
}
if (Object.prototype.hasOwnProperty.call(objCreditTypeCond.dicFldComparisonOp, clsCreditTypeEN.con_CreditTypeEnName) == true)
{
const strComparisonOpCreditTypeEnName:string = objCreditTypeCond.dicFldComparisonOp[clsCreditTypeEN.con_CreditTypeEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsCreditTypeEN.con_CreditTypeEnName, objCreditTypeCond.creditTypeEnName, strComparisonOpCreditTypeEnName);
}
if (Object.prototype.hasOwnProperty.call(objCreditTypeCond.dicFldComparisonOp, clsCreditTypeEN.con_Credits) == true)
{
const strComparisonOpCredits:string = objCreditTypeCond.dicFldComparisonOp[clsCreditTypeEN.con_Credits];
strWhereCond += Format(" And {0} {2} {1}", clsCreditTypeEN.con_Credits, objCreditTypeCond.credits, strComparisonOpCredits);
}
if (Object.prototype.hasOwnProperty.call(objCreditTypeCond.dicFldComparisonOp, clsCreditTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objCreditTypeCond.dicFldComparisonOp[clsCreditTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsCreditTypeEN.con_Memo, objCreditTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objCreditTypeENS:源对象
 * @param objCreditTypeENT:目标对象
*/
export  function CreditType_CopyObjTo(objCreditTypeENS: clsCreditTypeEN , objCreditTypeENT: clsCreditTypeEN ): void 
{
objCreditTypeENT.creditTypeId = objCreditTypeENS.creditTypeId; //积分类型Id
objCreditTypeENT.creditTypeName = objCreditTypeENS.creditTypeName; //积分类型名
objCreditTypeENT.creditTypeEnName = objCreditTypeENS.creditTypeEnName; //积分类型英文名
objCreditTypeENT.credits = objCreditTypeENS.credits; //积分
objCreditTypeENT.memo = objCreditTypeENS.memo; //备注
objCreditTypeENT.sfUpdFldSetStr = objCreditTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCreditTypeENS:源对象
 * @param objCreditTypeENT:目标对象
*/
export  function CreditType_GetObjFromJsonObj(objCreditTypeENS: clsCreditTypeEN): clsCreditTypeEN 
{
 const objCreditTypeENT: clsCreditTypeEN = new clsCreditTypeEN();
ObjectAssign(objCreditTypeENT, objCreditTypeENS);
 return objCreditTypeENT;
}