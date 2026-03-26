
 /**
 * 类名:clsBadgeCategoryWApi
 * 表名:BadgeCategory(01120986)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:21
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 徽章种类(BadgeCategory)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsBadgeCategoryEN } from "@/ts/L0Entity/GameLearn/clsBadgeCategoryEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const badgeCategory_Controller = "BadgeCategoryApi";
 export const badgeCategory_ConstructorName = "badgeCategory";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strBadgeCategoryId:关键字
 * @returns 对象
 **/
export  async function BadgeCategory_GetObjByBadgeCategoryIdAsync(strBadgeCategoryId: string): Promise<clsBadgeCategoryEN|null>  
{
const strThisFuncName = "GetObjByBadgeCategoryIdAsync";

if (IsNullOrEmpty(strBadgeCategoryId) == true)
{
  const strMsg = Format("参数:[strBadgeCategoryId]不能为空!(In clsBadgeCategoryWApi.GetObjByBadgeCategoryIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strBadgeCategoryId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBadgeCategoryId]的长度:[{0}]不正确!(clsBadgeCategoryWApi.GetObjByBadgeCategoryIdAsync)", strBadgeCategoryId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByBadgeCategoryId";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBadgeCategoryId,
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
const objBadgeCategory = BadgeCategory_GetObjFromJsonObj(returnObj);
return objBadgeCategory;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByBadgeCategoryIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByBadgeCategoryIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function BadgeCategory_SortFunDefa(a:clsBadgeCategoryEN , b:clsBadgeCategoryEN): number 
{
return a.badgeCategoryId.localeCompare(b.badgeCategoryId);
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
export  function BadgeCategory_SortFunDefa2Fld(a:clsBadgeCategoryEN , b:clsBadgeCategoryEN): number 
{
if (a.badgeCategoryName == b.badgeCategoryName) return a.badgeCategoryENName.localeCompare(b.badgeCategoryENName);
else return a.badgeCategoryName.localeCompare(b.badgeCategoryName);
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
export  function BadgeCategory_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsBadgeCategoryEN.con_BadgeCategoryId:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
return a.badgeCategoryId.localeCompare(b.badgeCategoryId);
}
case clsBadgeCategoryEN.con_BadgeCategoryName:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
if (a.badgeCategoryName == null) return -1;
if (b.badgeCategoryName == null) return 1;
return a.badgeCategoryName.localeCompare(b.badgeCategoryName);
}
case clsBadgeCategoryEN.con_BadgeCategoryENName:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
if (a.badgeCategoryENName == null) return -1;
if (b.badgeCategoryENName == null) return 1;
return a.badgeCategoryENName.localeCompare(b.badgeCategoryENName);
}
case clsBadgeCategoryEN.con_UpdDate:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsBadgeCategoryEN.con_UpdUser:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsBadgeCategoryEN.con_Memo:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BadgeCategory]中不存在!(in ${ badgeCategory_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsBadgeCategoryEN.con_BadgeCategoryId:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
return b.badgeCategoryId.localeCompare(a.badgeCategoryId);
}
case clsBadgeCategoryEN.con_BadgeCategoryName:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
if (b.badgeCategoryName == null) return -1;
if (a.badgeCategoryName == null) return 1;
return b.badgeCategoryName.localeCompare(a.badgeCategoryName);
}
case clsBadgeCategoryEN.con_BadgeCategoryENName:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
if (b.badgeCategoryENName == null) return -1;
if (a.badgeCategoryENName == null) return 1;
return b.badgeCategoryENName.localeCompare(a.badgeCategoryENName);
}
case clsBadgeCategoryEN.con_UpdDate:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsBadgeCategoryEN.con_UpdUser:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsBadgeCategoryEN.con_Memo:
return (a: clsBadgeCategoryEN, b: clsBadgeCategoryEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BadgeCategory]中不存在!(in ${ badgeCategory_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByBadgeCategoryIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function BadgeCategory_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsBadgeCategoryEN.con_BadgeCategoryId:
return (obj: clsBadgeCategoryEN) => {
return obj.badgeCategoryId === value;
}
case clsBadgeCategoryEN.con_BadgeCategoryName:
return (obj: clsBadgeCategoryEN) => {
return obj.badgeCategoryName === value;
}
case clsBadgeCategoryEN.con_BadgeCategoryENName:
return (obj: clsBadgeCategoryEN) => {
return obj.badgeCategoryENName === value;
}
case clsBadgeCategoryEN.con_UpdDate:
return (obj: clsBadgeCategoryEN) => {
return obj.updDate === value;
}
case clsBadgeCategoryEN.con_UpdUser:
return (obj: clsBadgeCategoryEN) => {
return obj.updUser === value;
}
case clsBadgeCategoryEN.con_Memo:
return (obj: clsBadgeCategoryEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BadgeCategory]中不存在!(in ${ badgeCategory_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[BadgeCategory__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BadgeCategory_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  async function BadgeCategory_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  async function BadgeCategory_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  async function BadgeCategory_GetFirstObjAsync(strWhereCond: string): Promise<clsBadgeCategoryEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const objBadgeCategory = BadgeCategory_GetObjFromJsonObj(returnObj);
return objBadgeCategory;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  async function BadgeCategory_GetObjLstAsync(strWhereCond: string): Promise<Array<clsBadgeCategoryEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", badgeCategory_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BadgeCategory_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
 * @param arrBadgeCategoryId:关键字列表
 * @returns 对象列表
 **/
export  async function BadgeCategory_GetObjLstByBadgeCategoryIdLstAsync(arrBadgeCategoryId: Array<string>): Promise<Array<clsBadgeCategoryEN>>  
{
const strThisFuncName = "GetObjLstByBadgeCategoryIdLstAsync";
const strAction = "GetObjLstByBadgeCategoryIdLst";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBadgeCategoryId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", badgeCategory_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BadgeCategory_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByBadgeCategoryIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function BadgeCategory_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsBadgeCategoryEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", badgeCategory_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BadgeCategory_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  async function BadgeCategory_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsBadgeCategoryEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", badgeCategory_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BadgeCategory_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  async function BadgeCategory_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsBadgeCategoryEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsBadgeCategoryEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", badgeCategory_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BadgeCategory_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
 * @param strBadgeCategoryId:关键字
 * @returns 获取删除的结果
 **/
export  async function BadgeCategory_DelRecordAsync(strBadgeCategoryId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strBadgeCategoryId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
 * @param arrBadgeCategoryId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function BadgeCategory_DelBadgeCategorysAsync(arrBadgeCategoryId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelBadgeCategorysAsync";
const strAction = "DelBadgeCategorys";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBadgeCategoryId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  async function BadgeCategory_DelBadgeCategorysByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelBadgeCategorysByCondAsync";
const strAction = "DelBadgeCategorysByCond";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
 * @param objBadgeCategoryEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BadgeCategory_AddNewRecordAsync(objBadgeCategoryEN: clsBadgeCategoryEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objBadgeCategoryEN.badgeCategoryId === null || objBadgeCategoryEN.badgeCategoryId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objBadgeCategoryEN);
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeCategoryEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
 * @param objBadgeCategoryEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BadgeCategory_AddNewRecordWithMaxIdAsync(objBadgeCategoryEN: clsBadgeCategoryEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeCategoryEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  async function BadgeCategory_AddNewObjSave(objBadgeCategoryEN: clsBadgeCategoryEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
BadgeCategory_CheckPropertyNew(objBadgeCategoryEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ badgeCategory_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await BadgeCategory_IsExistAsync(objBadgeCategoryEN.badgeCategoryId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objBadgeCategoryEN.badgeCategoryId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await BadgeCategory_AddNewRecordAsync(objBadgeCategoryEN);
if (returnBool == true)
{
//BadgeCategory_ReFreshCache();
}
else
{
const strInfo = `添加[徽章种类(BadgeCategory)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objBadgeCategoryEN.badgeCategoryId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ badgeCategory_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function BadgeCategory_UpdateObjSave(objBadgeCategoryEN: clsBadgeCategoryEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objBadgeCategoryEN.sfUpdFldSetStr = objBadgeCategoryEN.updFldString;//设置哪些字段被修改(脏字段)
if (objBadgeCategoryEN.badgeCategoryId == "" || objBadgeCategoryEN.badgeCategoryId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
BadgeCategory_CheckProperty4Update(objBadgeCategoryEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ badgeCategory_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await BadgeCategory_UpdateRecordAsync(objBadgeCategoryEN);
if (returnBool == true)
{
//BadgeCategory_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ badgeCategory_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objBadgeCategoryEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function BadgeCategory_AddNewRecordWithReturnKeyAsync(objBadgeCategoryEN: clsBadgeCategoryEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeCategoryEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
 * @param objBadgeCategoryEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BadgeCategory_UpdateRecordAsync(objBadgeCategoryEN: clsBadgeCategoryEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objBadgeCategoryEN.sfUpdFldSetStr === undefined || objBadgeCategoryEN.sfUpdFldSetStr === null || objBadgeCategoryEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBadgeCategoryEN.badgeCategoryId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeCategoryEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
 * @param objBadgeCategoryEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BadgeCategory_EditRecordExAsync(objBadgeCategoryEN: clsBadgeCategoryEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objBadgeCategoryEN.sfUpdFldSetStr === undefined || objBadgeCategoryEN.sfUpdFldSetStr === null || objBadgeCategoryEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBadgeCategoryEN.badgeCategoryId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeCategoryEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
 * @param objBadgeCategoryEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BadgeCategory_UpdateWithConditionAsync(objBadgeCategoryEN: clsBadgeCategoryEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objBadgeCategoryEN.sfUpdFldSetStr === undefined || objBadgeCategoryEN.sfUpdFldSetStr === null || objBadgeCategoryEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBadgeCategoryEN.badgeCategoryId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);
objBadgeCategoryEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeCategoryEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  async function BadgeCategory_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
 * @param strBadgeCategoryId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function BadgeCategory_IsExistAsync(strBadgeCategoryId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBadgeCategoryId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  async function BadgeCategory_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  async function BadgeCategory_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(badgeCategory_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeCategory_ConstructorName, strThisFuncName);
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
export  function BadgeCategory_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function BadgeCategory_CheckPropertyNew(pobjBadgeCategoryEN: clsBadgeCategoryEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryId) == false && GetStrLen(pobjBadgeCategoryEN.badgeCategoryId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[徽章类别Id(badgeCategoryId)]的长度不能超过2(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.badgeCategoryId}(clsBadgeCategoryBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryName) == false && GetStrLen(pobjBadgeCategoryEN.badgeCategoryName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[徽章类别名(badgeCategoryName)]的长度不能超过50(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.badgeCategoryName}(clsBadgeCategoryBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryENName) == false && GetStrLen(pobjBadgeCategoryEN.badgeCategoryENName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[徽章类别英文名(badgeCategoryENName)]的长度不能超过50(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.badgeCategoryENName}(clsBadgeCategoryBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.updDate) == false && GetStrLen(pobjBadgeCategoryEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.updDate}(clsBadgeCategoryBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.updUser) == false && GetStrLen(pobjBadgeCategoryEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.updUser}(clsBadgeCategoryBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.memo) == false && GetStrLen(pobjBadgeCategoryEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.memo}(clsBadgeCategoryBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryId) == false && undefined !== pobjBadgeCategoryEN.badgeCategoryId && tzDataType.isString(pobjBadgeCategoryEN.badgeCategoryId) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章类别Id(badgeCategoryId)]的值:[${pobjBadgeCategoryEN.badgeCategoryId}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryName) == false && undefined !== pobjBadgeCategoryEN.badgeCategoryName && tzDataType.isString(pobjBadgeCategoryEN.badgeCategoryName) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章类别名(badgeCategoryName)]的值:[${pobjBadgeCategoryEN.badgeCategoryName}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryENName) == false && undefined !== pobjBadgeCategoryEN.badgeCategoryENName && tzDataType.isString(pobjBadgeCategoryEN.badgeCategoryENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章类别英文名(badgeCategoryENName)]的值:[${pobjBadgeCategoryEN.badgeCategoryENName}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.updDate) == false && undefined !== pobjBadgeCategoryEN.updDate && tzDataType.isString(pobjBadgeCategoryEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjBadgeCategoryEN.updDate}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.updUser) == false && undefined !== pobjBadgeCategoryEN.updUser && tzDataType.isString(pobjBadgeCategoryEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjBadgeCategoryEN.updUser}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.memo) == false && undefined !== pobjBadgeCategoryEN.memo && tzDataType.isString(pobjBadgeCategoryEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjBadgeCategoryEN.memo}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BadgeCategory_CheckProperty4Update(pobjBadgeCategoryEN: clsBadgeCategoryEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryId) == false && GetStrLen(pobjBadgeCategoryEN.badgeCategoryId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[徽章类别Id(badgeCategoryId)]的长度不能超过2(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.badgeCategoryId}(clsBadgeCategoryBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryName) == false && GetStrLen(pobjBadgeCategoryEN.badgeCategoryName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[徽章类别名(badgeCategoryName)]的长度不能超过50(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.badgeCategoryName}(clsBadgeCategoryBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryENName) == false && GetStrLen(pobjBadgeCategoryEN.badgeCategoryENName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[徽章类别英文名(badgeCategoryENName)]的长度不能超过50(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.badgeCategoryENName}(clsBadgeCategoryBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.updDate) == false && GetStrLen(pobjBadgeCategoryEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.updDate}(clsBadgeCategoryBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.updUser) == false && GetStrLen(pobjBadgeCategoryEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.updUser}(clsBadgeCategoryBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.memo) == false && GetStrLen(pobjBadgeCategoryEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 徽章种类(BadgeCategory))!值:${pobjBadgeCategoryEN.memo}(clsBadgeCategoryBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryId) == false && undefined !== pobjBadgeCategoryEN.badgeCategoryId && tzDataType.isString(pobjBadgeCategoryEN.badgeCategoryId) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章类别Id(badgeCategoryId)]的值:[${pobjBadgeCategoryEN.badgeCategoryId}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryName) == false && undefined !== pobjBadgeCategoryEN.badgeCategoryName && tzDataType.isString(pobjBadgeCategoryEN.badgeCategoryName) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章类别名(badgeCategoryName)]的值:[${pobjBadgeCategoryEN.badgeCategoryName}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryENName) == false && undefined !== pobjBadgeCategoryEN.badgeCategoryENName && tzDataType.isString(pobjBadgeCategoryEN.badgeCategoryENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章类别英文名(badgeCategoryENName)]的值:[${pobjBadgeCategoryEN.badgeCategoryENName}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.updDate) == false && undefined !== pobjBadgeCategoryEN.updDate && tzDataType.isString(pobjBadgeCategoryEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjBadgeCategoryEN.updDate}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.updUser) == false && undefined !== pobjBadgeCategoryEN.updUser && tzDataType.isString(pobjBadgeCategoryEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjBadgeCategoryEN.updUser}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeCategoryEN.memo) == false && undefined !== pobjBadgeCategoryEN.memo && tzDataType.isString(pobjBadgeCategoryEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjBadgeCategoryEN.memo}], 非法,应该为字符型(In 徽章种类(BadgeCategory))!(clsBadgeCategoryBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjBadgeCategoryEN.badgeCategoryId) === true )
{
 throw new Error(`(errid:Watl000064)字段[徽章类别Id]不能为空(In 徽章种类)!(clsBadgeCategoryBL:CheckProperty4Update)`);
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
export  function BadgeCategory_GetJSONStrByObj (pobjBadgeCategoryEN: clsBadgeCategoryEN): string
{
pobjBadgeCategoryEN.sfUpdFldSetStr = pobjBadgeCategoryEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjBadgeCategoryEN);
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
export  function BadgeCategory_GetObjLstByJSONStr (strJSON: string): Array<clsBadgeCategoryEN>
{
let arrBadgeCategoryObjLst = new Array<clsBadgeCategoryEN>();
if (strJSON === "")
{
return arrBadgeCategoryObjLst;
}
try
{
arrBadgeCategoryObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrBadgeCategoryObjLst;
}
return arrBadgeCategoryObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrBadgeCategoryObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function BadgeCategory_GetObjLstByJSONObjLst (arrBadgeCategoryObjLstS: Array<clsBadgeCategoryEN>): Array<clsBadgeCategoryEN>
{
const arrBadgeCategoryObjLst = new Array<clsBadgeCategoryEN>();
for (const objInFor of arrBadgeCategoryObjLstS) {
const obj1 = BadgeCategory_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrBadgeCategoryObjLst.push(obj1);
}
return arrBadgeCategoryObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function BadgeCategory_GetObjByJSONStr (strJSON: string): clsBadgeCategoryEN
{
let pobjBadgeCategoryEN = new clsBadgeCategoryEN();
if (strJSON === "")
{
return pobjBadgeCategoryEN;
}
try
{
pobjBadgeCategoryEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjBadgeCategoryEN;
}
return pobjBadgeCategoryEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function BadgeCategory_GetCombineCondition(objBadgeCategoryCond: clsBadgeCategoryEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objBadgeCategoryCond.dicFldComparisonOp, clsBadgeCategoryEN.con_BadgeCategoryId) == true)
{
const strComparisonOpBadgeCategoryId:string = objBadgeCategoryCond.dicFldComparisonOp[clsBadgeCategoryEN.con_BadgeCategoryId];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeCategoryEN.con_BadgeCategoryId, objBadgeCategoryCond.badgeCategoryId, strComparisonOpBadgeCategoryId);
}
if (Object.prototype.hasOwnProperty.call(objBadgeCategoryCond.dicFldComparisonOp, clsBadgeCategoryEN.con_BadgeCategoryName) == true)
{
const strComparisonOpBadgeCategoryName:string = objBadgeCategoryCond.dicFldComparisonOp[clsBadgeCategoryEN.con_BadgeCategoryName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeCategoryEN.con_BadgeCategoryName, objBadgeCategoryCond.badgeCategoryName, strComparisonOpBadgeCategoryName);
}
if (Object.prototype.hasOwnProperty.call(objBadgeCategoryCond.dicFldComparisonOp, clsBadgeCategoryEN.con_BadgeCategoryENName) == true)
{
const strComparisonOpBadgeCategoryENName:string = objBadgeCategoryCond.dicFldComparisonOp[clsBadgeCategoryEN.con_BadgeCategoryENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeCategoryEN.con_BadgeCategoryENName, objBadgeCategoryCond.badgeCategoryENName, strComparisonOpBadgeCategoryENName);
}
if (Object.prototype.hasOwnProperty.call(objBadgeCategoryCond.dicFldComparisonOp, clsBadgeCategoryEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objBadgeCategoryCond.dicFldComparisonOp[clsBadgeCategoryEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeCategoryEN.con_UpdDate, objBadgeCategoryCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objBadgeCategoryCond.dicFldComparisonOp, clsBadgeCategoryEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objBadgeCategoryCond.dicFldComparisonOp[clsBadgeCategoryEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeCategoryEN.con_UpdUser, objBadgeCategoryCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objBadgeCategoryCond.dicFldComparisonOp, clsBadgeCategoryEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objBadgeCategoryCond.dicFldComparisonOp[clsBadgeCategoryEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeCategoryEN.con_Memo, objBadgeCategoryCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objBadgeCategoryENS:源对象
 * @param objBadgeCategoryENT:目标对象
*/
export  function BadgeCategory_CopyObjTo(objBadgeCategoryENS: clsBadgeCategoryEN , objBadgeCategoryENT: clsBadgeCategoryEN ): void 
{
objBadgeCategoryENT.badgeCategoryId = objBadgeCategoryENS.badgeCategoryId; //徽章类别Id
objBadgeCategoryENT.badgeCategoryName = objBadgeCategoryENS.badgeCategoryName; //徽章类别名
objBadgeCategoryENT.badgeCategoryENName = objBadgeCategoryENS.badgeCategoryENName; //徽章类别英文名
objBadgeCategoryENT.updDate = objBadgeCategoryENS.updDate; //修改日期
objBadgeCategoryENT.updUser = objBadgeCategoryENS.updUser; //修改人
objBadgeCategoryENT.memo = objBadgeCategoryENS.memo; //备注
objBadgeCategoryENT.sfUpdFldSetStr = objBadgeCategoryENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objBadgeCategoryENS:源对象
 * @param objBadgeCategoryENT:目标对象
*/
export  function BadgeCategory_GetObjFromJsonObj(objBadgeCategoryENS: clsBadgeCategoryEN): clsBadgeCategoryEN 
{
 const objBadgeCategoryENT: clsBadgeCategoryEN = new clsBadgeCategoryEN();
ObjectAssign(objBadgeCategoryENT, objBadgeCategoryENS);
 return objBadgeCategoryENT;
}