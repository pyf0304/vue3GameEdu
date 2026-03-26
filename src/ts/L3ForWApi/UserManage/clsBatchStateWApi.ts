
 /**
 * 类名:clsBatchStateWApi
 * 表名:BatchState(01120979)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:14
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 批次状态(BatchState)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsBatchStateEN } from "@/ts/L0Entity/UserManage/clsBatchStateEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const batchState_Controller = "BatchStateApi";
 export const batchState_ConstructorName = "batchState";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strBatchStateId:关键字
 * @returns 对象
 **/
export  async function BatchState_GetObjByBatchStateIdAsync(strBatchStateId: string): Promise<clsBatchStateEN|null>  
{
const strThisFuncName = "GetObjByBatchStateIdAsync";

if (IsNullOrEmpty(strBatchStateId) == true)
{
  const strMsg = Format("参数:[strBatchStateId]不能为空!(In clsBatchStateWApi.GetObjByBatchStateIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strBatchStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBatchStateId]的长度:[{0}]不正确!(clsBatchStateWApi.GetObjByBatchStateIdAsync)", strBatchStateId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByBatchStateId";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBatchStateId,
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
const objBatchState = BatchState_GetObjFromJsonObj(returnObj);
return objBatchState;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param strBatchStateId:所给的关键字
 * @returns 对象
*/
export  async function BatchState_GetObjByBatchStateIdlocalStorage(strBatchStateId: string) {
const strThisFuncName = "GetObjByBatchStateIdlocalStorage";

if (IsNullOrEmpty(strBatchStateId) == true)
{
  const strMsg = Format("参数:[strBatchStateId]不能为空!(In clsBatchStateWApi.GetObjByBatchStateIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strBatchStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBatchStateId]的长度:[{0}]不正确!(clsBatchStateWApi.GetObjByBatchStateIdlocalStorage)", strBatchStateId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsBatchStateEN._CurrTabName, strBatchStateId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objBatchStateCache: clsBatchStateEN = JSON.parse(strTempObj);
return objBatchStateCache;
}
try
{
const objBatchState = await BatchState_GetObjByBatchStateIdAsync(strBatchStateId);
if (objBatchState != null)
{
localStorage.setItem(strKey, JSON.stringify(objBatchState));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objBatchState;
}
return objBatchState;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strBatchStateId, batchState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strBatchStateId:所给的关键字
 * @returns 对象
*/
export  async function BatchState_GetObjByBatchStateIdCache(strBatchStateId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByBatchStateIdCache";

if (IsNullOrEmpty(strBatchStateId) == true)
{
  const strMsg = Format("参数:[strBatchStateId]不能为空!(In clsBatchStateWApi.GetObjByBatchStateIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strBatchStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBatchStateId]的长度:[{0}]不正确!(clsBatchStateWApi.GetObjByBatchStateIdCache)", strBatchStateId.length);
console.error(strMsg);
throw (strMsg);
}
const arrBatchStateObjLstCache = await BatchState_GetObjLstCache();
try
{
const arrBatchStateSel = arrBatchStateObjLstCache.filter(x => 
 x.batchStateId == strBatchStateId );
let objBatchState: clsBatchStateEN;
if (arrBatchStateSel.length > 0)
{
objBatchState = arrBatchStateSel[0];
return objBatchState;
}
else
{
if (bolTryAsyncOnce == true)
{
const objBatchStateConst = await BatchState_GetObjByBatchStateIdAsync(strBatchStateId);
if (objBatchStateConst != null)
{
BatchState_ReFreshThisCache();
return objBatchStateConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strBatchStateId, batchState_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objBatchState:所给的对象
 * @returns 对象
*/
export  async function BatchState_UpdateObjInLstCache(objBatchState: clsBatchStateEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrBatchStateObjLstCache = await BatchState_GetObjLstCache();
const obj = arrBatchStateObjLstCache.find(x => 
x.batchStateId == objBatchState.batchStateId);
if (obj != null)
{
objBatchState.batchStateId = obj.batchStateId;
ObjectAssign( obj, objBatchState);
}
else
{
arrBatchStateObjLstCache.push(objBatchState);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, batchState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
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
export  function BatchState_SortFunDefa(a:clsBatchStateEN , b:clsBatchStateEN): number 
{
return a.batchStateId.localeCompare(b.batchStateId);
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
export  function BatchState_SortFunDefa2Fld(a:clsBatchStateEN , b:clsBatchStateEN): number 
{
if (a.batchStateName == b.batchStateName) return a.batchStateEnName.localeCompare(b.batchStateEnName);
else return a.batchStateName.localeCompare(b.batchStateName);
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
export  function BatchState_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsBatchStateEN.con_BatchStateId:
return (a: clsBatchStateEN, b: clsBatchStateEN) => {
return a.batchStateId.localeCompare(b.batchStateId);
}
case clsBatchStateEN.con_BatchStateName:
return (a: clsBatchStateEN, b: clsBatchStateEN) => {
return a.batchStateName.localeCompare(b.batchStateName);
}
case clsBatchStateEN.con_BatchStateEnName:
return (a: clsBatchStateEN, b: clsBatchStateEN) => {
return a.batchStateEnName.localeCompare(b.batchStateEnName);
}
case clsBatchStateEN.con_Memo:
return (a: clsBatchStateEN, b: clsBatchStateEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BatchState]中不存在!(in ${ batchState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsBatchStateEN.con_BatchStateId:
return (a: clsBatchStateEN, b: clsBatchStateEN) => {
return b.batchStateId.localeCompare(a.batchStateId);
}
case clsBatchStateEN.con_BatchStateName:
return (a: clsBatchStateEN, b: clsBatchStateEN) => {
return b.batchStateName.localeCompare(a.batchStateName);
}
case clsBatchStateEN.con_BatchStateEnName:
return (a: clsBatchStateEN, b: clsBatchStateEN) => {
return b.batchStateEnName.localeCompare(a.batchStateEnName);
}
case clsBatchStateEN.con_Memo:
return (a: clsBatchStateEN, b: clsBatchStateEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BatchState]中不存在!(in ${ batchState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strBatchStateId:所给的关键字
 * @returns 对象
*/
export  async function BatchState_GetNameByBatchStateIdCache(strBatchStateId: string) {

if (IsNullOrEmpty(strBatchStateId) == true)
{
  const strMsg = Format("参数:[strBatchStateId]不能为空!(In clsBatchStateWApi.GetNameByBatchStateIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strBatchStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBatchStateId]的长度:[{0}]不正确!(clsBatchStateWApi.GetNameByBatchStateIdCache)", strBatchStateId.length);
console.error(strMsg);
throw (strMsg);
}
const arrBatchStateObjLstCache = await BatchState_GetObjLstCache();
if (arrBatchStateObjLstCache == null) return "";
try
{
const arrBatchStateSel = arrBatchStateObjLstCache.filter(x => 
 x.batchStateId == strBatchStateId );
let objBatchState: clsBatchStateEN;
if (arrBatchStateSel.length > 0)
{
objBatchState = arrBatchStateSel[0];
return objBatchState.batchStateName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strBatchStateId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function BatchState_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsBatchStateEN.con_BatchStateId:
return (obj: clsBatchStateEN) => {
return obj.batchStateId === value;
}
case clsBatchStateEN.con_BatchStateName:
return (obj: clsBatchStateEN) => {
return obj.batchStateName === value;
}
case clsBatchStateEN.con_BatchStateEnName:
return (obj: clsBatchStateEN) => {
return obj.batchStateEnName === value;
}
case clsBatchStateEN.con_Memo:
return (obj: clsBatchStateEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BatchState]中不存在!(in ${ batchState_ConstructorName}.${ strThisFuncName})`;
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
 * @returns 返回一个输出字段值
*/
export  async function BatchState_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsBatchStateEN.con_BatchStateId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsBatchStateEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsBatchStateEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strBatchStateId = strInValue;
if (IsNullOrEmpty(strBatchStateId) == true)
{
return "";
}
const objBatchState = await BatchState_GetObjByBatchStateIdCache(strBatchStateId );
if (objBatchState == null) return "";
if (objBatchState.GetFldValue(strOutFldName) == null) return "";
return objBatchState.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function BatchState_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsBatchStateEN.con_BatchStateId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrBatchState = await BatchState_GetObjLstCache();
if (arrBatchState == null) return [];
let arrBatchStateSel = arrBatchState;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrBatchStateSel = arrBatchStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrBatchStateSel.length == 0) return [];
return arrBatchStateSel.map(x=>x.batchStateId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BatchState_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_GetFirstObjAsync(strWhereCond: string): Promise<clsBatchStateEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const objBatchState = BatchState_GetObjFromJsonObj(returnObj);
return objBatchState;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBatchStateEN._CurrTabName;
if (IsNullOrEmpty(clsBatchStateEN.WhereFormat) == false)
{
strWhereCond = clsBatchStateEN.WhereFormat;
}
if (IsNullOrEmpty(clsBatchStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBatchStateEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrBatchStateExObjLstCache: Array<clsBatchStateEN> = CacheHelper.Get(strKey);
const arrBatchStateObjLstT = BatchState_GetObjLstByJSONObjLst(arrBatchStateExObjLstCache);
return arrBatchStateObjLstT;
}
try
{
const arrBatchStateExObjLst = await BatchState_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrBatchStateExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBatchStateExObjLst.length);
console.log(strInfo);
return arrBatchStateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, batchState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BatchState_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBatchStateEN._CurrTabName;
if (IsNullOrEmpty(clsBatchStateEN.WhereFormat) == false)
{
strWhereCond = clsBatchStateEN.WhereFormat;
}
if (IsNullOrEmpty(clsBatchStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBatchStateEN.CacheAddiCondition);
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
const arrBatchStateExObjLstCache: Array<clsBatchStateEN> = JSON.parse(strTempObjLst);
const arrBatchStateObjLstT = BatchState_GetObjLstByJSONObjLst(arrBatchStateExObjLstCache);
return arrBatchStateObjLstT;
}
try
{
const arrBatchStateExObjLst = await BatchState_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrBatchStateExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBatchStateExObjLst.length);
console.log(strInfo);
return arrBatchStateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, batchState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BatchState_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsBatchStateEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrBatchStateObjLstCache: Array<clsBatchStateEN> = JSON.parse(strTempObjLst);
return arrBatchStateObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function BatchState_GetObjLstAsync(strWhereCond: string): Promise<Array<clsBatchStateEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", batchState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BatchState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBatchStateEN._CurrTabName;
if (IsNullOrEmpty(clsBatchStateEN.WhereFormat) == false)
{
strWhereCond = clsBatchStateEN.WhereFormat;
}
if (IsNullOrEmpty(clsBatchStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBatchStateEN.CacheAddiCondition);
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
const arrBatchStateExObjLstCache: Array<clsBatchStateEN> = JSON.parse(strTempObjLst);
const arrBatchStateObjLstT = BatchState_GetObjLstByJSONObjLst(arrBatchStateExObjLstCache);
return arrBatchStateObjLstT;
}
try
{
const arrBatchStateExObjLst = await BatchState_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrBatchStateExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBatchStateExObjLst.length);
console.log(strInfo);
return arrBatchStateExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, batchState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BatchState_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsBatchStateEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrBatchStateObjLstCache: Array<clsBatchStateEN> = JSON.parse(strTempObjLst);
return arrBatchStateObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BatchState_GetObjLstCache(): Promise<Array<clsBatchStateEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrBatchStateObjLstCache;
switch (clsBatchStateEN.CacheModeId)
{
case "04"://sessionStorage
arrBatchStateObjLstCache = await BatchState_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrBatchStateObjLstCache = await BatchState_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrBatchStateObjLstCache = await BatchState_GetObjLstClientCache();
break;
default:
arrBatchStateObjLstCache = await BatchState_GetObjLstClientCache();
break;
}
return arrBatchStateObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BatchState_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrBatchStateObjLstCache;
switch (clsBatchStateEN.CacheModeId)
{
case "04"://sessionStorage
arrBatchStateObjLstCache = await BatchState_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrBatchStateObjLstCache = await BatchState_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrBatchStateObjLstCache = null;
break;
default:
arrBatchStateObjLstCache = null;
break;
}
return arrBatchStateObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrBatchStateIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function BatchState_GetSubObjLstCache(objBatchStateCond: clsBatchStateEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrBatchStateObjLstCache = await BatchState_GetObjLstCache();
let arrBatchStateSel = arrBatchStateObjLstCache;
if (objBatchStateCond.sfFldComparisonOp == null || objBatchStateCond.sfFldComparisonOp == "") return arrBatchStateSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBatchStateCond.sfFldComparisonOp);
//console.log("clsBatchStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBatchStateCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBatchStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrBatchStateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objBatchStateCond), batchState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsBatchStateEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrBatchStateId:关键字列表
 * @returns 对象列表
 **/
export  async function BatchState_GetObjLstByBatchStateIdLstAsync(arrBatchStateId: Array<string>): Promise<Array<clsBatchStateEN>>  
{
const strThisFuncName = "GetObjLstByBatchStateIdLstAsync";
const strAction = "GetObjLstByBatchStateIdLst";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBatchStateId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", batchState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BatchState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param arrstrBatchStateIdLst:关键字列表
 * @returns 对象列表
*/
export  async function BatchState_GetObjLstByBatchStateIdLstCache(arrBatchStateIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByBatchStateIdLstCache";
try
{
const arrBatchStateObjLstCache = await BatchState_GetObjLstCache();
const arrBatchStateSel = arrBatchStateObjLstCache.filter(x => arrBatchStateIdLst.indexOf(x.batchStateId)>-1);
return arrBatchStateSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrBatchStateIdLst.join(","), batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsBatchStateEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", batchState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BatchState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsBatchStateEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", batchState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BatchState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsBatchStateEN>();
const arrBatchStateObjLstCache = await BatchState_GetObjLstCache();
if (arrBatchStateObjLstCache.length == 0) return arrBatchStateObjLstCache;
let arrBatchStateSel = arrBatchStateObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objBatchStateCond = new clsBatchStateEN();
ObjectAssign(objBatchStateCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsBatchStateWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBatchStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrBatchStateSel = arrBatchStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrBatchStateSel.length == 0) return arrBatchStateSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrBatchStateSel = arrBatchStateSel.sort(BatchState_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrBatchStateSel = arrBatchStateSel.sort(objPagerPara.sortFun);
}
arrBatchStateSel = arrBatchStateSel.slice(intStart, intEnd);     
return arrBatchStateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, batchState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsBatchStateEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function BatchState_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsBatchStateEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsBatchStateEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", batchState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BatchState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param strBatchStateId:关键字
 * @returns 获取删除的结果
 **/
export  async function BatchState_DelRecordAsync(strBatchStateId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(batchState_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strBatchStateId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param arrBatchStateId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function BatchState_DelBatchStatesAsync(arrBatchStateId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelBatchStatesAsync";
const strAction = "DelBatchStates";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBatchStateId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_DelBatchStatesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelBatchStatesByCondAsync";
const strAction = "DelBatchStatesByCond";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param objBatchStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BatchState_AddNewRecordAsync(objBatchStateEN: clsBatchStateEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objBatchStateEN.batchStateId === null || objBatchStateEN.batchStateId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objBatchStateEN);
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param objBatchStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BatchState_AddNewRecordWithMaxIdAsync(objBatchStateEN: clsBatchStateEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_AddNewObjSave(objBatchStateEN: clsBatchStateEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
BatchState_CheckPropertyNew(objBatchStateEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ batchState_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await BatchState_IsExistAsync(objBatchStateEN.batchStateId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objBatchStateEN.batchStateId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await BatchState_AddNewRecordAsync(objBatchStateEN);
if (returnBool == true)
{
BatchState_ReFreshCache();
}
else
{
const strInfo = `添加[批次状态(BatchState)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objBatchStateEN.batchStateId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ batchState_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function BatchState_UpdateObjSave(objBatchStateEN: clsBatchStateEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objBatchStateEN.sfUpdFldSetStr = objBatchStateEN.updFldString;//设置哪些字段被修改(脏字段)
if (objBatchStateEN.batchStateId == "" || objBatchStateEN.batchStateId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
BatchState_CheckProperty4Update(objBatchStateEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ batchState_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await BatchState_UpdateRecordAsync(objBatchStateEN);
if (returnBool == true)
{
BatchState_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ batchState_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objBatchStateEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function BatchState_AddNewRecordWithReturnKeyAsync(objBatchStateEN: clsBatchStateEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param objBatchStateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BatchState_UpdateRecordAsync(objBatchStateEN: clsBatchStateEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objBatchStateEN.sfUpdFldSetStr === undefined || objBatchStateEN.sfUpdFldSetStr === null || objBatchStateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBatchStateEN.batchStateId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param objBatchStateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BatchState_EditRecordExAsync(objBatchStateEN: clsBatchStateEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objBatchStateEN.sfUpdFldSetStr === undefined || objBatchStateEN.sfUpdFldSetStr === null || objBatchStateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBatchStateEN.batchStateId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param objBatchStateEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BatchState_UpdateWithConditionAsync(objBatchStateEN: clsBatchStateEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objBatchStateEN.sfUpdFldSetStr === undefined || objBatchStateEN.sfUpdFldSetStr === null || objBatchStateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBatchStateEN.batchStateId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(batchState_Controller, strAction);
objBatchStateEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param objstrBatchStateIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function BatchState_IsExistRecordCache(objBatchStateCond: clsBatchStateEN) {
const strThisFuncName = "IsExistRecordCache";
const arrBatchStateObjLstCache = await BatchState_GetObjLstCache();
if (arrBatchStateObjLstCache == null) return false;
let arrBatchStateSel = arrBatchStateObjLstCache;
if (objBatchStateCond.sfFldComparisonOp == null || objBatchStateCond.sfFldComparisonOp == "") return arrBatchStateSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBatchStateCond.sfFldComparisonOp);
//console.log("clsBatchStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBatchStateCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBatchStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrBatchStateSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objBatchStateCond), batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param strBatchStateId:所给的关键字
 * @returns 对象
*/
export  async function BatchState_IsExistCache(strBatchStateId:string) {
const strThisFuncName = "IsExistCache";
const arrBatchStateObjLstCache = await BatchState_GetObjLstCache();
if (arrBatchStateObjLstCache == null) return false;
try
{
const arrBatchStateSel = arrBatchStateObjLstCache.filter(x => x.batchStateId == strBatchStateId);
if (arrBatchStateSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strBatchStateId, batchState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strBatchStateId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function BatchState_IsExistAsync(strBatchStateId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBatchStateId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
export  async function BatchState_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
 * @param objBatchStateCond:条件对象
 * @returns 对象列表记录数
*/
export  async function BatchState_GetRecCountByCondCache(objBatchStateCond: clsBatchStateEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrBatchStateObjLstCache = await BatchState_GetObjLstCache();
if (arrBatchStateObjLstCache == null) return 0;
let arrBatchStateSel = arrBatchStateObjLstCache;
if (objBatchStateCond.sfFldComparisonOp == null || objBatchStateCond.sfFldComparisonOp == "") return arrBatchStateSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBatchStateCond.sfFldComparisonOp);
//console.log("clsBatchStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBatchStateCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBatchStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrBatchStateSel = arrBatchStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBatchStateSel = arrBatchStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrBatchStateSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objBatchStateCond), batchState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function BatchState_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(batchState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchState_ConstructorName, strThisFuncName);
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
export  function BatchState_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export  function BatchState_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsBatchStateEN._CurrTabName;
switch (clsBatchStateEN.CacheModeId)
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
clsBatchStateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function BatchState_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsBatchStateEN._CurrTabName;
switch (clsBatchStateEN.CacheModeId)
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
clsBatchStateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function BatchState_GetLastRefreshTime():string
{
if (clsBatchStateEN._RefreshTimeLst.length == 0) return "";
return clsBatchStateEN._RefreshTimeLst[clsBatchStateEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BatchState_CheckPropertyNew(pobjBatchStateEN: clsBatchStateEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjBatchStateEN.batchStateName) === true )
{
 throw new Error(`(errid:Watl000411)字段[批次状态名]不能为空(In 批次状态)!(clsBatchStateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.batchStateEnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[批次状态英文名]不能为空(In 批次状态)!(clsBatchStateBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBatchStateEN.batchStateId) == false && GetStrLen(pobjBatchStateEN.batchStateId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[批次状态Id(batchStateId)]的长度不能超过2(In 批次状态(BatchState))!值:${pobjBatchStateEN.batchStateId}(clsBatchStateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.batchStateName) == false && GetStrLen(pobjBatchStateEN.batchStateName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[批次状态名(batchStateName)]的长度不能超过50(In 批次状态(BatchState))!值:${pobjBatchStateEN.batchStateName}(clsBatchStateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.batchStateEnName) == false && GetStrLen(pobjBatchStateEN.batchStateEnName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[批次状态英文名(batchStateEnName)]的长度不能超过50(In 批次状态(BatchState))!值:${pobjBatchStateEN.batchStateEnName}(clsBatchStateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.memo) == false && GetStrLen(pobjBatchStateEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 批次状态(BatchState))!值:${pobjBatchStateEN.memo}(clsBatchStateBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBatchStateEN.batchStateId) == false && undefined !== pobjBatchStateEN.batchStateId && tzDataType.isString(pobjBatchStateEN.batchStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[批次状态Id(batchStateId)]的值:[${pobjBatchStateEN.batchStateId}], 非法,应该为字符型(In 批次状态(BatchState))!(clsBatchStateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.batchStateName) == false && undefined !== pobjBatchStateEN.batchStateName && tzDataType.isString(pobjBatchStateEN.batchStateName) === false)
{
 throw new Error(`(errid:Watl000414)字段[批次状态名(batchStateName)]的值:[${pobjBatchStateEN.batchStateName}], 非法,应该为字符型(In 批次状态(BatchState))!(clsBatchStateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.batchStateEnName) == false && undefined !== pobjBatchStateEN.batchStateEnName && tzDataType.isString(pobjBatchStateEN.batchStateEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[批次状态英文名(batchStateEnName)]的值:[${pobjBatchStateEN.batchStateEnName}], 非法,应该为字符型(In 批次状态(BatchState))!(clsBatchStateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.memo) == false && undefined !== pobjBatchStateEN.memo && tzDataType.isString(pobjBatchStateEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjBatchStateEN.memo}], 非法,应该为字符型(In 批次状态(BatchState))!(clsBatchStateBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BatchState_CheckProperty4Update(pobjBatchStateEN: clsBatchStateEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBatchStateEN.batchStateId) == false && GetStrLen(pobjBatchStateEN.batchStateId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[批次状态Id(batchStateId)]的长度不能超过2(In 批次状态(BatchState))!值:${pobjBatchStateEN.batchStateId}(clsBatchStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.batchStateName) == false && GetStrLen(pobjBatchStateEN.batchStateName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[批次状态名(batchStateName)]的长度不能超过50(In 批次状态(BatchState))!值:${pobjBatchStateEN.batchStateName}(clsBatchStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.batchStateEnName) == false && GetStrLen(pobjBatchStateEN.batchStateEnName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[批次状态英文名(batchStateEnName)]的长度不能超过50(In 批次状态(BatchState))!值:${pobjBatchStateEN.batchStateEnName}(clsBatchStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.memo) == false && GetStrLen(pobjBatchStateEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 批次状态(BatchState))!值:${pobjBatchStateEN.memo}(clsBatchStateBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBatchStateEN.batchStateId) == false && undefined !== pobjBatchStateEN.batchStateId && tzDataType.isString(pobjBatchStateEN.batchStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[批次状态Id(batchStateId)]的值:[${pobjBatchStateEN.batchStateId}], 非法,应该为字符型(In 批次状态(BatchState))!(clsBatchStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.batchStateName) == false && undefined !== pobjBatchStateEN.batchStateName && tzDataType.isString(pobjBatchStateEN.batchStateName) === false)
{
 throw new Error(`(errid:Watl000417)字段[批次状态名(batchStateName)]的值:[${pobjBatchStateEN.batchStateName}], 非法,应该为字符型(In 批次状态(BatchState))!(clsBatchStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.batchStateEnName) == false && undefined !== pobjBatchStateEN.batchStateEnName && tzDataType.isString(pobjBatchStateEN.batchStateEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[批次状态英文名(batchStateEnName)]的值:[${pobjBatchStateEN.batchStateEnName}], 非法,应该为字符型(In 批次状态(BatchState))!(clsBatchStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchStateEN.memo) == false && undefined !== pobjBatchStateEN.memo && tzDataType.isString(pobjBatchStateEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjBatchStateEN.memo}], 非法,应该为字符型(In 批次状态(BatchState))!(clsBatchStateBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjBatchStateEN.batchStateId) === true 
 || pobjBatchStateEN.batchStateId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[批次状态Id]不能为空(In 批次状态)!(clsBatchStateBL:CheckProperty4Update)`);
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
export  function BatchState_GetJSONStrByObj (pobjBatchStateEN: clsBatchStateEN): string
{
pobjBatchStateEN.sfUpdFldSetStr = pobjBatchStateEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjBatchStateEN);
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
export  function BatchState_GetObjLstByJSONStr (strJSON: string): Array<clsBatchStateEN>
{
let arrBatchStateObjLst = new Array<clsBatchStateEN>();
if (strJSON === "")
{
return arrBatchStateObjLst;
}
try
{
arrBatchStateObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrBatchStateObjLst;
}
return arrBatchStateObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrBatchStateObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function BatchState_GetObjLstByJSONObjLst (arrBatchStateObjLstS: Array<clsBatchStateEN>): Array<clsBatchStateEN>
{
const arrBatchStateObjLst = new Array<clsBatchStateEN>();
for (const objInFor of arrBatchStateObjLstS) {
const obj1 = BatchState_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrBatchStateObjLst.push(obj1);
}
return arrBatchStateObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function BatchState_GetObjByJSONStr (strJSON: string): clsBatchStateEN
{
let pobjBatchStateEN = new clsBatchStateEN();
if (strJSON === "")
{
return pobjBatchStateEN;
}
try
{
pobjBatchStateEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjBatchStateEN;
}
return pobjBatchStateEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function BatchState_GetCombineCondition(objBatchStateCond: clsBatchStateEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objBatchStateCond.dicFldComparisonOp, clsBatchStateEN.con_BatchStateId) == true)
{
const strComparisonOpBatchStateId:string = objBatchStateCond.dicFldComparisonOp[clsBatchStateEN.con_BatchStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsBatchStateEN.con_BatchStateId, objBatchStateCond.batchStateId, strComparisonOpBatchStateId);
}
if (Object.prototype.hasOwnProperty.call(objBatchStateCond.dicFldComparisonOp, clsBatchStateEN.con_BatchStateName) == true)
{
const strComparisonOpBatchStateName:string = objBatchStateCond.dicFldComparisonOp[clsBatchStateEN.con_BatchStateName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBatchStateEN.con_BatchStateName, objBatchStateCond.batchStateName, strComparisonOpBatchStateName);
}
if (Object.prototype.hasOwnProperty.call(objBatchStateCond.dicFldComparisonOp, clsBatchStateEN.con_BatchStateEnName) == true)
{
const strComparisonOpBatchStateEnName:string = objBatchStateCond.dicFldComparisonOp[clsBatchStateEN.con_BatchStateEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBatchStateEN.con_BatchStateEnName, objBatchStateCond.batchStateEnName, strComparisonOpBatchStateEnName);
}
if (Object.prototype.hasOwnProperty.call(objBatchStateCond.dicFldComparisonOp, clsBatchStateEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objBatchStateCond.dicFldComparisonOp[clsBatchStateEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsBatchStateEN.con_Memo, objBatchStateCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objBatchStateENS:源对象
 * @param objBatchStateENT:目标对象
*/
export  function BatchState_CopyObjTo(objBatchStateENS: clsBatchStateEN , objBatchStateENT: clsBatchStateEN ): void 
{
objBatchStateENT.batchStateId = objBatchStateENS.batchStateId; //批次状态Id
objBatchStateENT.batchStateName = objBatchStateENS.batchStateName; //批次状态名
objBatchStateENT.batchStateEnName = objBatchStateENS.batchStateEnName; //批次状态英文名
objBatchStateENT.memo = objBatchStateENS.memo; //备注
objBatchStateENT.sfUpdFldSetStr = objBatchStateENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objBatchStateENS:源对象
 * @param objBatchStateENT:目标对象
*/
export  function BatchState_GetObjFromJsonObj(objBatchStateENS: clsBatchStateEN): clsBatchStateEN 
{
 const objBatchStateENT: clsBatchStateEN = new clsBatchStateEN();
ObjectAssign(objBatchStateENT, objBatchStateENS);
 return objBatchStateENT;
}