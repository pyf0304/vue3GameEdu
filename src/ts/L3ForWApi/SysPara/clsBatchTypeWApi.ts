
 /**
 * 类名:clsBatchTypeWApi
 * 表名:BatchType(01120981)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:13
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
 * 批次类型(BatchType)
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
import { clsBatchTypeEN } from "@/ts/L0Entity/SysPara/clsBatchTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const batchType_Controller = "BatchTypeApi";
 export const batchType_ConstructorName = "batchType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strBatchTypeId:关键字
 * @returns 对象
 **/
export  async function BatchType_GetObjByBatchTypeIdAsync(strBatchTypeId: string): Promise<clsBatchTypeEN|null>  
{
const strThisFuncName = "GetObjByBatchTypeIdAsync";

if (IsNullOrEmpty(strBatchTypeId) == true)
{
  const strMsg = Format("参数:[strBatchTypeId]不能为空!(In clsBatchTypeWApi.GetObjByBatchTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strBatchTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBatchTypeId]的长度:[{0}]不正确!(clsBatchTypeWApi.GetObjByBatchTypeIdAsync)", strBatchTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByBatchTypeId";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBatchTypeId,
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
const objBatchType = BatchType_GetObjFromJsonObj(returnObj);
return objBatchType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param strBatchTypeId:所给的关键字
 * @returns 对象
*/
export  async function BatchType_GetObjByBatchTypeIdlocalStorage(strBatchTypeId: string) {
const strThisFuncName = "GetObjByBatchTypeIdlocalStorage";

if (IsNullOrEmpty(strBatchTypeId) == true)
{
  const strMsg = Format("参数:[strBatchTypeId]不能为空!(In clsBatchTypeWApi.GetObjByBatchTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strBatchTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBatchTypeId]的长度:[{0}]不正确!(clsBatchTypeWApi.GetObjByBatchTypeIdlocalStorage)", strBatchTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsBatchTypeEN._CurrTabName, strBatchTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objBatchTypeCache: clsBatchTypeEN = JSON.parse(strTempObj);
return objBatchTypeCache;
}
try
{
const objBatchType = await BatchType_GetObjByBatchTypeIdAsync(strBatchTypeId);
if (objBatchType != null)
{
localStorage.setItem(strKey, JSON.stringify(objBatchType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objBatchType;
}
return objBatchType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strBatchTypeId, batchType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strBatchTypeId:所给的关键字
 * @returns 对象
*/
export  async function BatchType_GetObjByBatchTypeIdCache(strBatchTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByBatchTypeIdCache";

if (IsNullOrEmpty(strBatchTypeId) == true)
{
  const strMsg = Format("参数:[strBatchTypeId]不能为空!(In clsBatchTypeWApi.GetObjByBatchTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strBatchTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBatchTypeId]的长度:[{0}]不正确!(clsBatchTypeWApi.GetObjByBatchTypeIdCache)", strBatchTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrBatchTypeObjLstCache = await BatchType_GetObjLstCache();
try
{
const arrBatchTypeSel = arrBatchTypeObjLstCache.filter(x => 
 x.batchTypeId == strBatchTypeId );
let objBatchType: clsBatchTypeEN;
if (arrBatchTypeSel.length > 0)
{
objBatchType = arrBatchTypeSel[0];
return objBatchType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objBatchTypeConst = await BatchType_GetObjByBatchTypeIdAsync(strBatchTypeId);
if (objBatchTypeConst != null)
{
BatchType_ReFreshThisCache();
return objBatchTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strBatchTypeId, batchType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objBatchType:所给的对象
 * @returns 对象
*/
export  async function BatchType_UpdateObjInLstCache(objBatchType: clsBatchTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrBatchTypeObjLstCache = await BatchType_GetObjLstCache();
const obj = arrBatchTypeObjLstCache.find(x => 
x.batchTypeId == objBatchType.batchTypeId);
if (obj != null)
{
objBatchType.batchTypeId = obj.batchTypeId;
ObjectAssign( obj, objBatchType);
}
else
{
arrBatchTypeObjLstCache.push(objBatchType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, batchType_ConstructorName, strThisFuncName);
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
export  function BatchType_SortFunDefa(a:clsBatchTypeEN , b:clsBatchTypeEN): number 
{
return a.batchTypeId.localeCompare(b.batchTypeId);
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
export  function BatchType_SortFunDefa2Fld(a:clsBatchTypeEN , b:clsBatchTypeEN): number 
{
if (a.batchTypeName == b.batchTypeName) return a.batchTypeEnName.localeCompare(b.batchTypeEnName);
else return a.batchTypeName.localeCompare(b.batchTypeName);
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
export  function BatchType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsBatchTypeEN.con_BatchTypeId:
return (a: clsBatchTypeEN, b: clsBatchTypeEN) => {
return a.batchTypeId.localeCompare(b.batchTypeId);
}
case clsBatchTypeEN.con_BatchTypeName:
return (a: clsBatchTypeEN, b: clsBatchTypeEN) => {
return a.batchTypeName.localeCompare(b.batchTypeName);
}
case clsBatchTypeEN.con_BatchTypeEnName:
return (a: clsBatchTypeEN, b: clsBatchTypeEN) => {
return a.batchTypeEnName.localeCompare(b.batchTypeEnName);
}
case clsBatchTypeEN.con_Memo:
return (a: clsBatchTypeEN, b: clsBatchTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BatchType]中不存在!(in ${ batchType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsBatchTypeEN.con_BatchTypeId:
return (a: clsBatchTypeEN, b: clsBatchTypeEN) => {
return b.batchTypeId.localeCompare(a.batchTypeId);
}
case clsBatchTypeEN.con_BatchTypeName:
return (a: clsBatchTypeEN, b: clsBatchTypeEN) => {
return b.batchTypeName.localeCompare(a.batchTypeName);
}
case clsBatchTypeEN.con_BatchTypeEnName:
return (a: clsBatchTypeEN, b: clsBatchTypeEN) => {
return b.batchTypeEnName.localeCompare(a.batchTypeEnName);
}
case clsBatchTypeEN.con_Memo:
return (a: clsBatchTypeEN, b: clsBatchTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BatchType]中不存在!(in ${ batchType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strBatchTypeId:所给的关键字
 * @returns 对象
*/
export  async function BatchType_GetNameByBatchTypeIdCache(strBatchTypeId: string) {

if (IsNullOrEmpty(strBatchTypeId) == true)
{
  const strMsg = Format("参数:[strBatchTypeId]不能为空!(In clsBatchTypeWApi.GetNameByBatchTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strBatchTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBatchTypeId]的长度:[{0}]不正确!(clsBatchTypeWApi.GetNameByBatchTypeIdCache)", strBatchTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrBatchTypeObjLstCache = await BatchType_GetObjLstCache();
if (arrBatchTypeObjLstCache == null) return "";
try
{
const arrBatchTypeSel = arrBatchTypeObjLstCache.filter(x => 
 x.batchTypeId == strBatchTypeId );
let objBatchType: clsBatchTypeEN;
if (arrBatchTypeSel.length > 0)
{
objBatchType = arrBatchTypeSel[0];
return objBatchType.batchTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strBatchTypeId);
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
export  async function BatchType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsBatchTypeEN.con_BatchTypeId:
return (obj: clsBatchTypeEN) => {
return obj.batchTypeId === value;
}
case clsBatchTypeEN.con_BatchTypeName:
return (obj: clsBatchTypeEN) => {
return obj.batchTypeName === value;
}
case clsBatchTypeEN.con_BatchTypeEnName:
return (obj: clsBatchTypeEN) => {
return obj.batchTypeEnName === value;
}
case clsBatchTypeEN.con_Memo:
return (obj: clsBatchTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BatchType]中不存在!(in ${ batchType_ConstructorName}.${ strThisFuncName})`;
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
export  async function BatchType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsBatchTypeEN.con_BatchTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsBatchTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsBatchTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strBatchTypeId = strInValue;
if (IsNullOrEmpty(strBatchTypeId) == true)
{
return "";
}
const objBatchType = await BatchType_GetObjByBatchTypeIdCache(strBatchTypeId );
if (objBatchType == null) return "";
if (objBatchType.GetFldValue(strOutFldName) == null) return "";
return objBatchType.GetFldValue(strOutFldName).toString();
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
export  async function BatchType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsBatchTypeEN.con_BatchTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrBatchType = await BatchType_GetObjLstCache();
if (arrBatchType == null) return [];
let arrBatchTypeSel = arrBatchType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrBatchTypeSel = arrBatchTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrBatchTypeSel.length == 0) return [];
return arrBatchTypeSel.map(x=>x.batchTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BatchType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_GetFirstObjAsync(strWhereCond: string): Promise<clsBatchTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const objBatchType = BatchType_GetObjFromJsonObj(returnObj);
return objBatchType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBatchTypeEN._CurrTabName;
if (IsNullOrEmpty(clsBatchTypeEN.WhereFormat) == false)
{
strWhereCond = clsBatchTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsBatchTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBatchTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrBatchTypeExObjLstCache: Array<clsBatchTypeEN> = CacheHelper.Get(strKey);
const arrBatchTypeObjLstT = BatchType_GetObjLstByJSONObjLst(arrBatchTypeExObjLstCache);
return arrBatchTypeObjLstT;
}
try
{
const arrBatchTypeExObjLst = await BatchType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrBatchTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBatchTypeExObjLst.length);
console.log(strInfo);
return arrBatchTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, batchType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BatchType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBatchTypeEN._CurrTabName;
if (IsNullOrEmpty(clsBatchTypeEN.WhereFormat) == false)
{
strWhereCond = clsBatchTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsBatchTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBatchTypeEN.CacheAddiCondition);
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
const arrBatchTypeExObjLstCache: Array<clsBatchTypeEN> = JSON.parse(strTempObjLst);
const arrBatchTypeObjLstT = BatchType_GetObjLstByJSONObjLst(arrBatchTypeExObjLstCache);
return arrBatchTypeObjLstT;
}
try
{
const arrBatchTypeExObjLst = await BatchType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrBatchTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBatchTypeExObjLst.length);
console.log(strInfo);
return arrBatchTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, batchType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BatchType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsBatchTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrBatchTypeObjLstCache: Array<clsBatchTypeEN> = JSON.parse(strTempObjLst);
return arrBatchTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function BatchType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsBatchTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", batchType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BatchType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBatchTypeEN._CurrTabName;
if (IsNullOrEmpty(clsBatchTypeEN.WhereFormat) == false)
{
strWhereCond = clsBatchTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsBatchTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBatchTypeEN.CacheAddiCondition);
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
const arrBatchTypeExObjLstCache: Array<clsBatchTypeEN> = JSON.parse(strTempObjLst);
const arrBatchTypeObjLstT = BatchType_GetObjLstByJSONObjLst(arrBatchTypeExObjLstCache);
return arrBatchTypeObjLstT;
}
try
{
const arrBatchTypeExObjLst = await BatchType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrBatchTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBatchTypeExObjLst.length);
console.log(strInfo);
return arrBatchTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, batchType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BatchType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsBatchTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrBatchTypeObjLstCache: Array<clsBatchTypeEN> = JSON.parse(strTempObjLst);
return arrBatchTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BatchType_GetObjLstCache(): Promise<Array<clsBatchTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrBatchTypeObjLstCache;
switch (clsBatchTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrBatchTypeObjLstCache = await BatchType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrBatchTypeObjLstCache = await BatchType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrBatchTypeObjLstCache = await BatchType_GetObjLstClientCache();
break;
default:
arrBatchTypeObjLstCache = await BatchType_GetObjLstClientCache();
break;
}
return arrBatchTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BatchType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrBatchTypeObjLstCache;
switch (clsBatchTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrBatchTypeObjLstCache = await BatchType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrBatchTypeObjLstCache = await BatchType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrBatchTypeObjLstCache = null;
break;
default:
arrBatchTypeObjLstCache = null;
break;
}
return arrBatchTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrBatchTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function BatchType_GetSubObjLstCache(objBatchTypeCond: clsBatchTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrBatchTypeObjLstCache = await BatchType_GetObjLstCache();
let arrBatchTypeSel = arrBatchTypeObjLstCache;
if (objBatchTypeCond.sfFldComparisonOp == null || objBatchTypeCond.sfFldComparisonOp == "") return arrBatchTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBatchTypeCond.sfFldComparisonOp);
//console.log("clsBatchTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBatchTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBatchTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrBatchTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objBatchTypeCond), batchType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsBatchTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrBatchTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function BatchType_GetObjLstByBatchTypeIdLstAsync(arrBatchTypeId: Array<string>): Promise<Array<clsBatchTypeEN>>  
{
const strThisFuncName = "GetObjLstByBatchTypeIdLstAsync";
const strAction = "GetObjLstByBatchTypeIdLst";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBatchTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", batchType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BatchType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param arrstrBatchTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function BatchType_GetObjLstByBatchTypeIdLstCache(arrBatchTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByBatchTypeIdLstCache";
try
{
const arrBatchTypeObjLstCache = await BatchType_GetObjLstCache();
const arrBatchTypeSel = arrBatchTypeObjLstCache.filter(x => arrBatchTypeIdLst.indexOf(x.batchTypeId)>-1);
return arrBatchTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrBatchTypeIdLst.join(","), batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsBatchTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", batchType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BatchType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsBatchTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", batchType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BatchType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsBatchTypeEN>();
const arrBatchTypeObjLstCache = await BatchType_GetObjLstCache();
if (arrBatchTypeObjLstCache.length == 0) return arrBatchTypeObjLstCache;
let arrBatchTypeSel = arrBatchTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objBatchTypeCond = new clsBatchTypeEN();
ObjectAssign(objBatchTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsBatchTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBatchTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrBatchTypeSel = arrBatchTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrBatchTypeSel.length == 0) return arrBatchTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrBatchTypeSel = arrBatchTypeSel.sort(BatchType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrBatchTypeSel = arrBatchTypeSel.sort(objPagerPara.sortFun);
}
arrBatchTypeSel = arrBatchTypeSel.slice(intStart, intEnd);     
return arrBatchTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, batchType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsBatchTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function BatchType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsBatchTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsBatchTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", batchType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BatchType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param strBatchTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function BatchType_DelRecordAsync(strBatchTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(batchType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strBatchTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param arrBatchTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function BatchType_DelBatchTypesAsync(arrBatchTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelBatchTypesAsync";
const strAction = "DelBatchTypes";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBatchTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_DelBatchTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelBatchTypesByCondAsync";
const strAction = "DelBatchTypesByCond";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param objBatchTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BatchType_AddNewRecordAsync(objBatchTypeEN: clsBatchTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objBatchTypeEN.batchTypeId === null || objBatchTypeEN.batchTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objBatchTypeEN);
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param objBatchTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BatchType_AddNewRecordWithMaxIdAsync(objBatchTypeEN: clsBatchTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_AddNewObjSave(objBatchTypeEN: clsBatchTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
BatchType_CheckPropertyNew(objBatchTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ batchType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await BatchType_IsExistAsync(objBatchTypeEN.batchTypeId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objBatchTypeEN.batchTypeId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await BatchType_AddNewRecordAsync(objBatchTypeEN);
if (returnBool == true)
{
BatchType_ReFreshCache();
}
else
{
const strInfo = `添加[批次类型(BatchType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objBatchTypeEN.batchTypeId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ batchType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function BatchType_UpdateObjSave(objBatchTypeEN: clsBatchTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objBatchTypeEN.sfUpdFldSetStr = objBatchTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objBatchTypeEN.batchTypeId == "" || objBatchTypeEN.batchTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
BatchType_CheckProperty4Update(objBatchTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ batchType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await BatchType_UpdateRecordAsync(objBatchTypeEN);
if (returnBool == true)
{
BatchType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ batchType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objBatchTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function BatchType_AddNewRecordWithReturnKeyAsync(objBatchTypeEN: clsBatchTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param objBatchTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BatchType_UpdateRecordAsync(objBatchTypeEN: clsBatchTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objBatchTypeEN.sfUpdFldSetStr === undefined || objBatchTypeEN.sfUpdFldSetStr === null || objBatchTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBatchTypeEN.batchTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param objBatchTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BatchType_EditRecordExAsync(objBatchTypeEN: clsBatchTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objBatchTypeEN.sfUpdFldSetStr === undefined || objBatchTypeEN.sfUpdFldSetStr === null || objBatchTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBatchTypeEN.batchTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param objBatchTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BatchType_UpdateWithConditionAsync(objBatchTypeEN: clsBatchTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objBatchTypeEN.sfUpdFldSetStr === undefined || objBatchTypeEN.sfUpdFldSetStr === null || objBatchTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBatchTypeEN.batchTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(batchType_Controller, strAction);
objBatchTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBatchTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param objstrBatchTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function BatchType_IsExistRecordCache(objBatchTypeCond: clsBatchTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrBatchTypeObjLstCache = await BatchType_GetObjLstCache();
if (arrBatchTypeObjLstCache == null) return false;
let arrBatchTypeSel = arrBatchTypeObjLstCache;
if (objBatchTypeCond.sfFldComparisonOp == null || objBatchTypeCond.sfFldComparisonOp == "") return arrBatchTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBatchTypeCond.sfFldComparisonOp);
//console.log("clsBatchTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBatchTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBatchTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrBatchTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objBatchTypeCond), batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param strBatchTypeId:所给的关键字
 * @returns 对象
*/
export  async function BatchType_IsExistCache(strBatchTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrBatchTypeObjLstCache = await BatchType_GetObjLstCache();
if (arrBatchTypeObjLstCache == null) return false;
try
{
const arrBatchTypeSel = arrBatchTypeObjLstCache.filter(x => x.batchTypeId == strBatchTypeId);
if (arrBatchTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strBatchTypeId, batchType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strBatchTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function BatchType_IsExistAsync(strBatchTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBatchTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
 * @param objBatchTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function BatchType_GetRecCountByCondCache(objBatchTypeCond: clsBatchTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrBatchTypeObjLstCache = await BatchType_GetObjLstCache();
if (arrBatchTypeObjLstCache == null) return 0;
let arrBatchTypeSel = arrBatchTypeObjLstCache;
if (objBatchTypeCond.sfFldComparisonOp == null || objBatchTypeCond.sfFldComparisonOp == "") return arrBatchTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBatchTypeCond.sfFldComparisonOp);
//console.log("clsBatchTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBatchTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBatchTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrBatchTypeSel = arrBatchTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBatchTypeSel = arrBatchTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrBatchTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objBatchTypeCond), batchType_ConstructorName, strThisFuncName);
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
export  async function BatchType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(batchType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, batchType_ConstructorName, strThisFuncName);
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
export  function BatchType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function BatchType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsBatchTypeEN._CurrTabName;
switch (clsBatchTypeEN.CacheModeId)
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
clsBatchTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function BatchType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsBatchTypeEN._CurrTabName;
switch (clsBatchTypeEN.CacheModeId)
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
clsBatchTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function BatchType_GetLastRefreshTime():string
{
if (clsBatchTypeEN._RefreshTimeLst.length == 0) return "";
return clsBatchTypeEN._RefreshTimeLst[clsBatchTypeEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BatchType_CheckPropertyNew(pobjBatchTypeEN: clsBatchTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[批次类型名]不能为空(In 批次类型)!(clsBatchTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeEnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[批次类型英文名]不能为空(In 批次类型)!(clsBatchTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeId) == false && GetStrLen(pobjBatchTypeEN.batchTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[批次类型Id(batchTypeId)]的长度不能超过2(In 批次类型(BatchType))!值:${pobjBatchTypeEN.batchTypeId}(clsBatchTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeName) == false && GetStrLen(pobjBatchTypeEN.batchTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[批次类型名(batchTypeName)]的长度不能超过50(In 批次类型(BatchType))!值:${pobjBatchTypeEN.batchTypeName}(clsBatchTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeEnName) == false && GetStrLen(pobjBatchTypeEN.batchTypeEnName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[批次类型英文名(batchTypeEnName)]的长度不能超过50(In 批次类型(BatchType))!值:${pobjBatchTypeEN.batchTypeEnName}(clsBatchTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.memo) == false && GetStrLen(pobjBatchTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 批次类型(BatchType))!值:${pobjBatchTypeEN.memo}(clsBatchTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeId) == false && undefined !== pobjBatchTypeEN.batchTypeId && tzDataType.isString(pobjBatchTypeEN.batchTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[批次类型Id(batchTypeId)]的值:[${pobjBatchTypeEN.batchTypeId}], 非法,应该为字符型(In 批次类型(BatchType))!(clsBatchTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeName) == false && undefined !== pobjBatchTypeEN.batchTypeName && tzDataType.isString(pobjBatchTypeEN.batchTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[批次类型名(batchTypeName)]的值:[${pobjBatchTypeEN.batchTypeName}], 非法,应该为字符型(In 批次类型(BatchType))!(clsBatchTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeEnName) == false && undefined !== pobjBatchTypeEN.batchTypeEnName && tzDataType.isString(pobjBatchTypeEN.batchTypeEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[批次类型英文名(batchTypeEnName)]的值:[${pobjBatchTypeEN.batchTypeEnName}], 非法,应该为字符型(In 批次类型(BatchType))!(clsBatchTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.memo) == false && undefined !== pobjBatchTypeEN.memo && tzDataType.isString(pobjBatchTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjBatchTypeEN.memo}], 非法,应该为字符型(In 批次类型(BatchType))!(clsBatchTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BatchType_CheckProperty4Update(pobjBatchTypeEN: clsBatchTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeId) == false && GetStrLen(pobjBatchTypeEN.batchTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[批次类型Id(batchTypeId)]的长度不能超过2(In 批次类型(BatchType))!值:${pobjBatchTypeEN.batchTypeId}(clsBatchTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeName) == false && GetStrLen(pobjBatchTypeEN.batchTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[批次类型名(batchTypeName)]的长度不能超过50(In 批次类型(BatchType))!值:${pobjBatchTypeEN.batchTypeName}(clsBatchTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeEnName) == false && GetStrLen(pobjBatchTypeEN.batchTypeEnName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[批次类型英文名(batchTypeEnName)]的长度不能超过50(In 批次类型(BatchType))!值:${pobjBatchTypeEN.batchTypeEnName}(clsBatchTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.memo) == false && GetStrLen(pobjBatchTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 批次类型(BatchType))!值:${pobjBatchTypeEN.memo}(clsBatchTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeId) == false && undefined !== pobjBatchTypeEN.batchTypeId && tzDataType.isString(pobjBatchTypeEN.batchTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[批次类型Id(batchTypeId)]的值:[${pobjBatchTypeEN.batchTypeId}], 非法,应该为字符型(In 批次类型(BatchType))!(clsBatchTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeName) == false && undefined !== pobjBatchTypeEN.batchTypeName && tzDataType.isString(pobjBatchTypeEN.batchTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[批次类型名(batchTypeName)]的值:[${pobjBatchTypeEN.batchTypeName}], 非法,应该为字符型(In 批次类型(BatchType))!(clsBatchTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeEnName) == false && undefined !== pobjBatchTypeEN.batchTypeEnName && tzDataType.isString(pobjBatchTypeEN.batchTypeEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[批次类型英文名(batchTypeEnName)]的值:[${pobjBatchTypeEN.batchTypeEnName}], 非法,应该为字符型(In 批次类型(BatchType))!(clsBatchTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBatchTypeEN.memo) == false && undefined !== pobjBatchTypeEN.memo && tzDataType.isString(pobjBatchTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjBatchTypeEN.memo}], 非法,应该为字符型(In 批次类型(BatchType))!(clsBatchTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjBatchTypeEN.batchTypeId) === true )
{
 throw new Error(`(errid:Watl000064)字段[批次类型Id]不能为空(In 批次类型)!(clsBatchTypeBL:CheckProperty4Update)`);
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
export  function BatchType_GetJSONStrByObj (pobjBatchTypeEN: clsBatchTypeEN): string
{
pobjBatchTypeEN.sfUpdFldSetStr = pobjBatchTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjBatchTypeEN);
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
export  function BatchType_GetObjLstByJSONStr (strJSON: string): Array<clsBatchTypeEN>
{
let arrBatchTypeObjLst = new Array<clsBatchTypeEN>();
if (strJSON === "")
{
return arrBatchTypeObjLst;
}
try
{
arrBatchTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrBatchTypeObjLst;
}
return arrBatchTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrBatchTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function BatchType_GetObjLstByJSONObjLst (arrBatchTypeObjLstS: Array<clsBatchTypeEN>): Array<clsBatchTypeEN>
{
const arrBatchTypeObjLst = new Array<clsBatchTypeEN>();
for (const objInFor of arrBatchTypeObjLstS) {
const obj1 = BatchType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrBatchTypeObjLst.push(obj1);
}
return arrBatchTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function BatchType_GetObjByJSONStr (strJSON: string): clsBatchTypeEN
{
let pobjBatchTypeEN = new clsBatchTypeEN();
if (strJSON === "")
{
return pobjBatchTypeEN;
}
try
{
pobjBatchTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjBatchTypeEN;
}
return pobjBatchTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function BatchType_GetCombineCondition(objBatchTypeCond: clsBatchTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objBatchTypeCond.dicFldComparisonOp, clsBatchTypeEN.con_BatchTypeId) == true)
{
const strComparisonOpBatchTypeId:string = objBatchTypeCond.dicFldComparisonOp[clsBatchTypeEN.con_BatchTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsBatchTypeEN.con_BatchTypeId, objBatchTypeCond.batchTypeId, strComparisonOpBatchTypeId);
}
if (Object.prototype.hasOwnProperty.call(objBatchTypeCond.dicFldComparisonOp, clsBatchTypeEN.con_BatchTypeName) == true)
{
const strComparisonOpBatchTypeName:string = objBatchTypeCond.dicFldComparisonOp[clsBatchTypeEN.con_BatchTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBatchTypeEN.con_BatchTypeName, objBatchTypeCond.batchTypeName, strComparisonOpBatchTypeName);
}
if (Object.prototype.hasOwnProperty.call(objBatchTypeCond.dicFldComparisonOp, clsBatchTypeEN.con_BatchTypeEnName) == true)
{
const strComparisonOpBatchTypeEnName:string = objBatchTypeCond.dicFldComparisonOp[clsBatchTypeEN.con_BatchTypeEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBatchTypeEN.con_BatchTypeEnName, objBatchTypeCond.batchTypeEnName, strComparisonOpBatchTypeEnName);
}
if (Object.prototype.hasOwnProperty.call(objBatchTypeCond.dicFldComparisonOp, clsBatchTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objBatchTypeCond.dicFldComparisonOp[clsBatchTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsBatchTypeEN.con_Memo, objBatchTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objBatchTypeENS:源对象
 * @param objBatchTypeENT:目标对象
*/
export  function BatchType_CopyObjTo(objBatchTypeENS: clsBatchTypeEN , objBatchTypeENT: clsBatchTypeEN ): void 
{
objBatchTypeENT.batchTypeId = objBatchTypeENS.batchTypeId; //批次类型Id
objBatchTypeENT.batchTypeName = objBatchTypeENS.batchTypeName; //批次类型名
objBatchTypeENT.batchTypeEnName = objBatchTypeENS.batchTypeEnName; //批次类型英文名
objBatchTypeENT.memo = objBatchTypeENS.memo; //备注
objBatchTypeENT.sfUpdFldSetStr = objBatchTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objBatchTypeENS:源对象
 * @param objBatchTypeENT:目标对象
*/
export  function BatchType_GetObjFromJsonObj(objBatchTypeENS: clsBatchTypeEN): clsBatchTypeEN 
{
 const objBatchTypeENT: clsBatchTypeEN = new clsBatchTypeEN();
ObjectAssign(objBatchTypeENT, objBatchTypeENS);
 return objBatchTypeENT;
}