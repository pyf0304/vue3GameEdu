
 /**
 * 类名:clsge_GameLevelEduClsRelaWApi
 * 表名:ge_GameLevelEduClsRela(01120938)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:19
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 游戏关卡教学班关系(ge_GameLevelEduClsRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsge_GameLevelEduClsRelaEN } from "@/ts/L0Entity/Knowledges/clsge_GameLevelEduClsRelaEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_GameLevelEduClsRela_Controller = "ge_GameLevelEduClsRelaApi";
 export const ge_GameLevelEduClsRela_ConstructorName = "ge_GameLevelEduClsRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function ge_GameLevelEduClsRela_GetObjBymIdAsync(lngmId: number): Promise<clsge_GameLevelEduClsRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_GameLevelEduClsRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const objge_GameLevelEduClsRela = ge_GameLevelEduClsRela_GetObjFromJsonObj(returnObj);
return objge_GameLevelEduClsRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  function ge_GameLevelEduClsRela_SortFunDefa(a:clsge_GameLevelEduClsRelaEN , b:clsge_GameLevelEduClsRelaEN): number 
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
export  function ge_GameLevelEduClsRela_SortFunDefa2Fld(a:clsge_GameLevelEduClsRelaEN , b:clsge_GameLevelEduClsRelaEN): number 
{
if (a.gameLevelId == b.gameLevelId) return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
else return a.gameLevelId.localeCompare(b.gameLevelId);
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
export  function ge_GameLevelEduClsRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_GameLevelEduClsRelaEN.con_mId:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
return a.mId-b.mId;
}
case clsge_GameLevelEduClsRelaEN.con_GameLevelId:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
return a.gameLevelId.localeCompare(b.gameLevelId);
}
case clsge_GameLevelEduClsRelaEN.con_IdCurrEduCls:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsge_GameLevelEduClsRelaEN.con_UpdDate:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_GameLevelEduClsRelaEN.con_UpdUser:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_GameLevelEduClsRelaEN.con_Memo:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_GameLevelEduClsRela]中不存在!(in ${ ge_GameLevelEduClsRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_GameLevelEduClsRelaEN.con_mId:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
return b.mId-a.mId;
}
case clsge_GameLevelEduClsRelaEN.con_GameLevelId:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
return b.gameLevelId.localeCompare(a.gameLevelId);
}
case clsge_GameLevelEduClsRelaEN.con_IdCurrEduCls:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsge_GameLevelEduClsRelaEN.con_UpdDate:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_GameLevelEduClsRelaEN.con_UpdUser:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_GameLevelEduClsRelaEN.con_Memo:
return (a: clsge_GameLevelEduClsRelaEN, b: clsge_GameLevelEduClsRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_GameLevelEduClsRela]中不存在!(in ${ ge_GameLevelEduClsRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_GameLevelEduClsRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_GameLevelEduClsRelaEN.con_mId:
return (obj: clsge_GameLevelEduClsRelaEN) => {
return obj.mId === value;
}
case clsge_GameLevelEduClsRelaEN.con_GameLevelId:
return (obj: clsge_GameLevelEduClsRelaEN) => {
return obj.gameLevelId === value;
}
case clsge_GameLevelEduClsRelaEN.con_IdCurrEduCls:
return (obj: clsge_GameLevelEduClsRelaEN) => {
return obj.idCurrEduCls === value;
}
case clsge_GameLevelEduClsRelaEN.con_UpdDate:
return (obj: clsge_GameLevelEduClsRelaEN) => {
return obj.updDate === value;
}
case clsge_GameLevelEduClsRelaEN.con_UpdUser:
return (obj: clsge_GameLevelEduClsRelaEN) => {
return obj.updUser === value;
}
case clsge_GameLevelEduClsRelaEN.con_Memo:
return (obj: clsge_GameLevelEduClsRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_GameLevelEduClsRela]中不存在!(in ${ ge_GameLevelEduClsRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_GameLevelEduClsRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_GameLevelEduClsRela_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_GetFirstObjAsync(strWhereCond: string): Promise<clsge_GameLevelEduClsRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const objge_GameLevelEduClsRela = ge_GameLevelEduClsRela_GetObjFromJsonObj(returnObj);
return objge_GameLevelEduClsRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_GameLevelEduClsRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevelEduClsRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsge_GameLevelEduClsRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevelEduClsRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_GameLevelEduClsRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevelEduClsRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_GameLevelEduClsRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevelEduClsRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_GameLevelEduClsRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_GameLevelEduClsRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevelEduClsRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_Delge_GameLevelEduClsRelasAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_GameLevelEduClsRelasAsync";
const strAction = "Delge_GameLevelEduClsRelas";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_Delge_GameLevelEduClsRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_GameLevelEduClsRelasByCondAsync";
const strAction = "Delge_GameLevelEduClsRelasByCond";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelEduClsRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_GameLevelEduClsRela_AddNewRecordAsync(objge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_GameLevelEduClsRelaEN);
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelEduClsRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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

 /** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export  async function ge_GameLevelEduClsRela_AddNewObjSave(objge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_GameLevelEduClsRela_CheckPropertyNew(objge_GameLevelEduClsRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_GameLevelEduClsRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_GameLevelEduClsRela_CheckUniCond4Add(objge_GameLevelEduClsRelaEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await ge_GameLevelEduClsRela_AddNewRecordAsync(objge_GameLevelEduClsRelaEN);
if (returnBool == true)
{
//ge_GameLevelEduClsRela_ReFreshCache();
}
else
{
const strInfo = `添加[游戏关卡教学班关系(ge_GameLevelEduClsRela)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objge_GameLevelEduClsRelaEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_GameLevelEduClsRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_GameLevelEduClsRela_CheckUniCond4Add(objge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN): Promise<boolean>{
const strUniquenessCondition = ge_GameLevelEduClsRela_GetUniCondStr(objge_GameLevelEduClsRelaEN);
const bolIsExistCondition = await ge_GameLevelEduClsRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_GameLevelEduClsRela_CheckUniCond4Update(objge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN): Promise<boolean>{
const strUniquenessCondition = ge_GameLevelEduClsRela_GetUniCondStr4Update(objge_GameLevelEduClsRelaEN);
const bolIsExistCondition = await ge_GameLevelEduClsRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_GameLevelEduClsRela_UpdateObjSave(objge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_GameLevelEduClsRelaEN.sfUpdFldSetStr = objge_GameLevelEduClsRelaEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_GameLevelEduClsRelaEN.mId == 0 || objge_GameLevelEduClsRelaEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_GameLevelEduClsRela_CheckProperty4Update(objge_GameLevelEduClsRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_GameLevelEduClsRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_GameLevelEduClsRela_CheckUniCond4Update(objge_GameLevelEduClsRelaEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_GameLevelEduClsRela_UpdateRecordAsync(objge_GameLevelEduClsRelaEN);
if (returnBool == true)
{
//ge_GameLevelEduClsRela_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_GameLevelEduClsRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_GameLevelEduClsRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_GameLevelEduClsRela_AddNewRecordWithReturnKeyAsync(objge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelEduClsRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelEduClsRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_GameLevelEduClsRela_UpdateRecordAsync(objge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_GameLevelEduClsRelaEN.sfUpdFldSetStr === undefined || objge_GameLevelEduClsRelaEN.sfUpdFldSetStr === null || objge_GameLevelEduClsRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_GameLevelEduClsRelaEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelEduClsRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelEduClsRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_GameLevelEduClsRela_EditRecordExAsync(objge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_GameLevelEduClsRelaEN.sfUpdFldSetStr === undefined || objge_GameLevelEduClsRelaEN.sfUpdFldSetStr === null || objge_GameLevelEduClsRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_GameLevelEduClsRelaEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelEduClsRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelEduClsRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_GameLevelEduClsRela_UpdateWithConditionAsync(objge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_GameLevelEduClsRelaEN.sfUpdFldSetStr === undefined || objge_GameLevelEduClsRelaEN.sfUpdFldSetStr === null || objge_GameLevelEduClsRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_GameLevelEduClsRelaEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);
objge_GameLevelEduClsRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelEduClsRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelEduClsRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_GameLevelEduClsRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelEduClsRela_ConstructorName, strThisFuncName);
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
export  function ge_GameLevelEduClsRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_GameLevelEduClsRela_CheckPropertyNew(pobjge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.gameLevelId) === true )
{
 throw new Error(`(errid:Watl000411)字段[游戏关卡Id]不能为空(In 游戏关卡教学班关系)!(clsge_GameLevelEduClsRelaBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.gameLevelId) == false && GetStrLen(pobjge_GameLevelEduClsRelaEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!值:${pobjge_GameLevelEduClsRelaEN.gameLevelId}(clsge_GameLevelEduClsRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.idCurrEduCls) == false && GetStrLen(pobjge_GameLevelEduClsRelaEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!值:${pobjge_GameLevelEduClsRelaEN.idCurrEduCls}(clsge_GameLevelEduClsRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.updDate) == false && GetStrLen(pobjge_GameLevelEduClsRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!值:${pobjge_GameLevelEduClsRelaEN.updDate}(clsge_GameLevelEduClsRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.updUser) == false && GetStrLen(pobjge_GameLevelEduClsRelaEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!值:${pobjge_GameLevelEduClsRelaEN.updUser}(clsge_GameLevelEduClsRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.memo) == false && GetStrLen(pobjge_GameLevelEduClsRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!值:${pobjge_GameLevelEduClsRelaEN.memo}(clsge_GameLevelEduClsRelaBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_GameLevelEduClsRelaEN.mId && undefined !== pobjge_GameLevelEduClsRelaEN.mId && tzDataType.isNumber(pobjge_GameLevelEduClsRelaEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjge_GameLevelEduClsRelaEN.mId}], 非法,应该为数值型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.gameLevelId) == false && undefined !== pobjge_GameLevelEduClsRelaEN.gameLevelId && tzDataType.isString(pobjge_GameLevelEduClsRelaEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_GameLevelEduClsRelaEN.gameLevelId}], 非法,应该为字符型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.idCurrEduCls) == false && undefined !== pobjge_GameLevelEduClsRelaEN.idCurrEduCls && tzDataType.isString(pobjge_GameLevelEduClsRelaEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_GameLevelEduClsRelaEN.idCurrEduCls}], 非法,应该为字符型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.updDate) == false && undefined !== pobjge_GameLevelEduClsRelaEN.updDate && tzDataType.isString(pobjge_GameLevelEduClsRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_GameLevelEduClsRelaEN.updDate}], 非法,应该为字符型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.updUser) == false && undefined !== pobjge_GameLevelEduClsRelaEN.updUser && tzDataType.isString(pobjge_GameLevelEduClsRelaEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_GameLevelEduClsRelaEN.updUser}], 非法,应该为字符型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.memo) == false && undefined !== pobjge_GameLevelEduClsRelaEN.memo && tzDataType.isString(pobjge_GameLevelEduClsRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_GameLevelEduClsRelaEN.memo}], 非法,应该为字符型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_GameLevelEduClsRela_CheckProperty4Update(pobjge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.gameLevelId) == false && GetStrLen(pobjge_GameLevelEduClsRelaEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!值:${pobjge_GameLevelEduClsRelaEN.gameLevelId}(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.idCurrEduCls) == false && GetStrLen(pobjge_GameLevelEduClsRelaEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!值:${pobjge_GameLevelEduClsRelaEN.idCurrEduCls}(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.updDate) == false && GetStrLen(pobjge_GameLevelEduClsRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!值:${pobjge_GameLevelEduClsRelaEN.updDate}(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.updUser) == false && GetStrLen(pobjge_GameLevelEduClsRelaEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!值:${pobjge_GameLevelEduClsRelaEN.updUser}(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.memo) == false && GetStrLen(pobjge_GameLevelEduClsRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!值:${pobjge_GameLevelEduClsRelaEN.memo}(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_GameLevelEduClsRelaEN.mId && undefined !== pobjge_GameLevelEduClsRelaEN.mId && tzDataType.isNumber(pobjge_GameLevelEduClsRelaEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjge_GameLevelEduClsRelaEN.mId}], 非法,应该为数值型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.gameLevelId) == false && undefined !== pobjge_GameLevelEduClsRelaEN.gameLevelId && tzDataType.isString(pobjge_GameLevelEduClsRelaEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_GameLevelEduClsRelaEN.gameLevelId}], 非法,应该为字符型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.idCurrEduCls) == false && undefined !== pobjge_GameLevelEduClsRelaEN.idCurrEduCls && tzDataType.isString(pobjge_GameLevelEduClsRelaEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_GameLevelEduClsRelaEN.idCurrEduCls}], 非法,应该为字符型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.updDate) == false && undefined !== pobjge_GameLevelEduClsRelaEN.updDate && tzDataType.isString(pobjge_GameLevelEduClsRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_GameLevelEduClsRelaEN.updDate}], 非法,应该为字符型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.updUser) == false && undefined !== pobjge_GameLevelEduClsRelaEN.updUser && tzDataType.isString(pobjge_GameLevelEduClsRelaEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_GameLevelEduClsRelaEN.updUser}], 非法,应该为字符型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEduClsRelaEN.memo) == false && undefined !== pobjge_GameLevelEduClsRelaEN.memo && tzDataType.isString(pobjge_GameLevelEduClsRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_GameLevelEduClsRelaEN.memo}], 非法,应该为字符型(In 游戏关卡教学班关系(ge_GameLevelEduClsRela))!(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjge_GameLevelEduClsRelaEN.mId 
 || pobjge_GameLevelEduClsRelaEN.mId != null && pobjge_GameLevelEduClsRelaEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 游戏关卡教学班关系)!(clsge_GameLevelEduClsRelaBL:CheckProperty4Update)`);
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
export  function ge_GameLevelEduClsRela_GetJSONStrByObj (pobjge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN): string
{
pobjge_GameLevelEduClsRelaEN.sfUpdFldSetStr = pobjge_GameLevelEduClsRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_GameLevelEduClsRelaEN);
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
export  function ge_GameLevelEduClsRela_GetObjLstByJSONStr (strJSON: string): Array<clsge_GameLevelEduClsRelaEN>
{
let arrge_GameLevelEduClsRelaObjLst = new Array<clsge_GameLevelEduClsRelaEN>();
if (strJSON === "")
{
return arrge_GameLevelEduClsRelaObjLst;
}
try
{
arrge_GameLevelEduClsRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_GameLevelEduClsRelaObjLst;
}
return arrge_GameLevelEduClsRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_GameLevelEduClsRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_GameLevelEduClsRela_GetObjLstByJSONObjLst (arrge_GameLevelEduClsRelaObjLstS: Array<clsge_GameLevelEduClsRelaEN>): Array<clsge_GameLevelEduClsRelaEN>
{
const arrge_GameLevelEduClsRelaObjLst = new Array<clsge_GameLevelEduClsRelaEN>();
for (const objInFor of arrge_GameLevelEduClsRelaObjLstS) {
const obj1 = ge_GameLevelEduClsRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_GameLevelEduClsRelaObjLst.push(obj1);
}
return arrge_GameLevelEduClsRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_GameLevelEduClsRela_GetObjByJSONStr (strJSON: string): clsge_GameLevelEduClsRelaEN
{
let pobjge_GameLevelEduClsRelaEN = new clsge_GameLevelEduClsRelaEN();
if (strJSON === "")
{
return pobjge_GameLevelEduClsRelaEN;
}
try
{
pobjge_GameLevelEduClsRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_GameLevelEduClsRelaEN;
}
return pobjge_GameLevelEduClsRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_GameLevelEduClsRela_GetCombineCondition(objge_GameLevelEduClsRelaCond: clsge_GameLevelEduClsRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_GameLevelEduClsRelaCond.dicFldComparisonOp, clsge_GameLevelEduClsRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objge_GameLevelEduClsRelaCond.dicFldComparisonOp[clsge_GameLevelEduClsRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsge_GameLevelEduClsRelaEN.con_mId, objge_GameLevelEduClsRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelEduClsRelaCond.dicFldComparisonOp, clsge_GameLevelEduClsRelaEN.con_GameLevelId) == true)
{
const strComparisonOpGameLevelId:string = objge_GameLevelEduClsRelaCond.dicFldComparisonOp[clsge_GameLevelEduClsRelaEN.con_GameLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEduClsRelaEN.con_GameLevelId, objge_GameLevelEduClsRelaCond.gameLevelId, strComparisonOpGameLevelId);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelEduClsRelaCond.dicFldComparisonOp, clsge_GameLevelEduClsRelaEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objge_GameLevelEduClsRelaCond.dicFldComparisonOp[clsge_GameLevelEduClsRelaEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEduClsRelaEN.con_IdCurrEduCls, objge_GameLevelEduClsRelaCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelEduClsRelaCond.dicFldComparisonOp, clsge_GameLevelEduClsRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_GameLevelEduClsRelaCond.dicFldComparisonOp[clsge_GameLevelEduClsRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEduClsRelaEN.con_UpdDate, objge_GameLevelEduClsRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelEduClsRelaCond.dicFldComparisonOp, clsge_GameLevelEduClsRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_GameLevelEduClsRelaCond.dicFldComparisonOp[clsge_GameLevelEduClsRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEduClsRelaEN.con_UpdUser, objge_GameLevelEduClsRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelEduClsRelaCond.dicFldComparisonOp, clsge_GameLevelEduClsRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_GameLevelEduClsRelaCond.dicFldComparisonOp[clsge_GameLevelEduClsRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEduClsRelaEN.con_Memo, objge_GameLevelEduClsRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_GameLevelEduClsRela(游戏关卡教学班关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strGameLevelId: 游戏关卡Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_GameLevelEduClsRela_GetUniCondStr(objge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objge_GameLevelEduClsRelaEN.idCurrEduCls);
 strWhereCond +=  Format(" and GameLevelId = '{0}'", objge_GameLevelEduClsRelaEN.gameLevelId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_GameLevelEduClsRela(游戏关卡教学班关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strGameLevelId: 游戏关卡Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_GameLevelEduClsRela_GetUniCondStr4Update(objge_GameLevelEduClsRelaEN: clsge_GameLevelEduClsRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objge_GameLevelEduClsRelaEN.mId);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objge_GameLevelEduClsRelaEN.idCurrEduCls);
 strWhereCond +=  Format(" and GameLevelId = '{0}'", objge_GameLevelEduClsRelaEN.gameLevelId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_GameLevelEduClsRelaENS:源对象
 * @param objge_GameLevelEduClsRelaENT:目标对象
*/
export  function ge_GameLevelEduClsRela_CopyObjTo(objge_GameLevelEduClsRelaENS: clsge_GameLevelEduClsRelaEN , objge_GameLevelEduClsRelaENT: clsge_GameLevelEduClsRelaEN ): void 
{
objge_GameLevelEduClsRelaENT.mId = objge_GameLevelEduClsRelaENS.mId; //mId
objge_GameLevelEduClsRelaENT.gameLevelId = objge_GameLevelEduClsRelaENS.gameLevelId; //游戏关卡Id
objge_GameLevelEduClsRelaENT.idCurrEduCls = objge_GameLevelEduClsRelaENS.idCurrEduCls; //教学班流水号
objge_GameLevelEduClsRelaENT.updDate = objge_GameLevelEduClsRelaENS.updDate; //修改日期
objge_GameLevelEduClsRelaENT.updUser = objge_GameLevelEduClsRelaENS.updUser; //修改人
objge_GameLevelEduClsRelaENT.memo = objge_GameLevelEduClsRelaENS.memo; //备注
objge_GameLevelEduClsRelaENT.sfUpdFldSetStr = objge_GameLevelEduClsRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_GameLevelEduClsRelaENS:源对象
 * @param objge_GameLevelEduClsRelaENT:目标对象
*/
export  function ge_GameLevelEduClsRela_GetObjFromJsonObj(objge_GameLevelEduClsRelaENS: clsge_GameLevelEduClsRelaEN): clsge_GameLevelEduClsRelaEN 
{
 const objge_GameLevelEduClsRelaENT: clsge_GameLevelEduClsRelaEN = new clsge_GameLevelEduClsRelaEN();
ObjectAssign(objge_GameLevelEduClsRelaENT, objge_GameLevelEduClsRelaENS);
 return objge_GameLevelEduClsRelaENT;
}