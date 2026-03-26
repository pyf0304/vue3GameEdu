
 /**
 * 类名:clsTeachingMethodsWApi
 * 表名:TeachingMethods(01120966)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:45
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
 * 教学方式(TeachingMethods)
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
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsTeachingMethodsEN } from "@/ts/L0Entity/SysPara/clsTeachingMethodsEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const teachingMethods_Controller = "TeachingMethodsApi";
 export const teachingMethods_ConstructorName = "teachingMethods";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTeachingMethodId:关键字
 * @returns 对象
 **/
export  async function TeachingMethods_GetObjByTeachingMethodIdAsync(strTeachingMethodId: string): Promise<clsTeachingMethodsEN|null>  
{
const strThisFuncName = "GetObjByTeachingMethodIdAsync";

if (IsNullOrEmpty(strTeachingMethodId) == true)
{
  const strMsg = Format("参数:[strTeachingMethodId]不能为空!(In clsTeachingMethodsWApi.GetObjByTeachingMethodIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTeachingMethodId.length != 2)
{
const strMsg = Format("缓存分类变量:[strTeachingMethodId]的长度:[{0}]不正确!(clsTeachingMethodsWApi.GetObjByTeachingMethodIdAsync)", strTeachingMethodId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByTeachingMethodId";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTeachingMethodId,
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
const objTeachingMethods = TeachingMethods_GetObjFromJsonObj(returnObj);
return objTeachingMethods;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param strTeachingMethodId:所给的关键字
 * @returns 对象
*/
export  async function TeachingMethods_GetObjByTeachingMethodIdlocalStorage(strTeachingMethodId: string) {
const strThisFuncName = "GetObjByTeachingMethodIdlocalStorage";

if (IsNullOrEmpty(strTeachingMethodId) == true)
{
  const strMsg = Format("参数:[strTeachingMethodId]不能为空!(In clsTeachingMethodsWApi.GetObjByTeachingMethodIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strTeachingMethodId.length != 2)
{
const strMsg = Format("缓存分类变量:[strTeachingMethodId]的长度:[{0}]不正确!(clsTeachingMethodsWApi.GetObjByTeachingMethodIdlocalStorage)", strTeachingMethodId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsTeachingMethodsEN._CurrTabName, strTeachingMethodId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objTeachingMethodsCache: clsTeachingMethodsEN = JSON.parse(strTempObj);
return objTeachingMethodsCache;
}
try
{
const objTeachingMethods = await TeachingMethods_GetObjByTeachingMethodIdAsync(strTeachingMethodId);
if (objTeachingMethods != null)
{
localStorage.setItem(strKey, JSON.stringify(objTeachingMethods));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objTeachingMethods;
}
return objTeachingMethods;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strTeachingMethodId, teachingMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strTeachingMethodId:所给的关键字
 * @returns 对象
*/
export  async function TeachingMethods_GetObjByTeachingMethodIdCache(strTeachingMethodId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByTeachingMethodIdCache";

if (IsNullOrEmpty(strTeachingMethodId) == true)
{
  const strMsg = Format("参数:[strTeachingMethodId]不能为空!(In clsTeachingMethodsWApi.GetObjByTeachingMethodIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTeachingMethodId.length != 2)
{
const strMsg = Format("缓存分类变量:[strTeachingMethodId]的长度:[{0}]不正确!(clsTeachingMethodsWApi.GetObjByTeachingMethodIdCache)", strTeachingMethodId.length);
console.error(strMsg);
throw (strMsg);
}
const arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstCache();
try
{
const arrTeachingMethodsSel = arrTeachingMethodsObjLstCache.filter(x => 
 x.teachingMethodId == strTeachingMethodId );
let objTeachingMethods: clsTeachingMethodsEN;
if (arrTeachingMethodsSel.length > 0)
{
objTeachingMethods = arrTeachingMethodsSel[0];
return objTeachingMethods;
}
else
{
if (bolTryAsyncOnce == true)
{
const objTeachingMethodsConst = await TeachingMethods_GetObjByTeachingMethodIdAsync(strTeachingMethodId);
if (objTeachingMethodsConst != null)
{
TeachingMethods_ReFreshThisCache();
return objTeachingMethodsConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strTeachingMethodId, teachingMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objTeachingMethods:所给的对象
 * @returns 对象
*/
export  async function TeachingMethods_UpdateObjInLstCache(objTeachingMethods: clsTeachingMethodsEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstCache();
const obj = arrTeachingMethodsObjLstCache.find(x => x.teachingMethodName == objTeachingMethods.teachingMethodName);
if (obj != null)
{
objTeachingMethods.teachingMethodId = obj.teachingMethodId;
ObjectAssign( obj, objTeachingMethods);
}
else
{
arrTeachingMethodsObjLstCache.push(objTeachingMethods);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, teachingMethods_ConstructorName, strThisFuncName);
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
export  function TeachingMethods_SortFunDefa(a:clsTeachingMethodsEN , b:clsTeachingMethodsEN): number 
{
return a.teachingMethodId.localeCompare(b.teachingMethodId);
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
export  function TeachingMethods_SortFunDefa2Fld(a:clsTeachingMethodsEN , b:clsTeachingMethodsEN): number 
{
if (a.teachingMethodName == b.teachingMethodName) return a.teachingMethodEnName.localeCompare(b.teachingMethodEnName);
else return a.teachingMethodName.localeCompare(b.teachingMethodName);
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
export  function TeachingMethods_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsTeachingMethodsEN.con_TeachingMethodId:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
return a.teachingMethodId.localeCompare(b.teachingMethodId);
}
case clsTeachingMethodsEN.con_TeachingMethodName:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
return a.teachingMethodName.localeCompare(b.teachingMethodName);
}
case clsTeachingMethodsEN.con_TeachingMethodEnName:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
return a.teachingMethodEnName.localeCompare(b.teachingMethodEnName);
}
case clsTeachingMethodsEN.con_UpdDate:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsTeachingMethodsEN.con_UpdUser:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsTeachingMethodsEN.con_Memo:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeachingMethods]中不存在!(in ${ teachingMethods_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsTeachingMethodsEN.con_TeachingMethodId:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
return b.teachingMethodId.localeCompare(a.teachingMethodId);
}
case clsTeachingMethodsEN.con_TeachingMethodName:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
return b.teachingMethodName.localeCompare(a.teachingMethodName);
}
case clsTeachingMethodsEN.con_TeachingMethodEnName:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
return b.teachingMethodEnName.localeCompare(a.teachingMethodEnName);
}
case clsTeachingMethodsEN.con_UpdDate:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsTeachingMethodsEN.con_UpdUser:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsTeachingMethodsEN.con_Memo:
return (a: clsTeachingMethodsEN, b: clsTeachingMethodsEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeachingMethods]中不存在!(in ${ teachingMethods_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strTeachingMethodId:所给的关键字
 * @returns 对象
*/
export  async function TeachingMethods_GetNameByTeachingMethodIdCache(strTeachingMethodId: string) {

if (IsNullOrEmpty(strTeachingMethodId) == true)
{
  const strMsg = Format("参数:[strTeachingMethodId]不能为空!(In clsTeachingMethodsWApi.GetNameByTeachingMethodIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTeachingMethodId.length != 2)
{
const strMsg = Format("缓存分类变量:[strTeachingMethodId]的长度:[{0}]不正确!(clsTeachingMethodsWApi.GetNameByTeachingMethodIdCache)", strTeachingMethodId.length);
console.error(strMsg);
throw (strMsg);
}
const arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstCache();
if (arrTeachingMethodsObjLstCache == null) return "";
try
{
const arrTeachingMethodsSel = arrTeachingMethodsObjLstCache.filter(x => 
 x.teachingMethodId == strTeachingMethodId );
let objTeachingMethods: clsTeachingMethodsEN;
if (arrTeachingMethodsSel.length > 0)
{
objTeachingMethods = arrTeachingMethodsSel[0];
return objTeachingMethods.teachingMethodName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strTeachingMethodId);
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
export  async function TeachingMethods_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsTeachingMethodsEN.con_TeachingMethodId:
return (obj: clsTeachingMethodsEN) => {
return obj.teachingMethodId === value;
}
case clsTeachingMethodsEN.con_TeachingMethodName:
return (obj: clsTeachingMethodsEN) => {
return obj.teachingMethodName === value;
}
case clsTeachingMethodsEN.con_TeachingMethodEnName:
return (obj: clsTeachingMethodsEN) => {
return obj.teachingMethodEnName === value;
}
case clsTeachingMethodsEN.con_UpdDate:
return (obj: clsTeachingMethodsEN) => {
return obj.updDate === value;
}
case clsTeachingMethodsEN.con_UpdUser:
return (obj: clsTeachingMethodsEN) => {
return obj.updUser === value;
}
case clsTeachingMethodsEN.con_Memo:
return (obj: clsTeachingMethodsEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeachingMethods]中不存在!(in ${ teachingMethods_ConstructorName}.${ strThisFuncName})`;
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
export  async function TeachingMethods_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsTeachingMethodsEN.con_TeachingMethodId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsTeachingMethodsEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsTeachingMethodsEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strTeachingMethodId = strInValue;
if (IsNullOrEmpty(strTeachingMethodId) == true)
{
return "";
}
const objTeachingMethods = await TeachingMethods_GetObjByTeachingMethodIdCache(strTeachingMethodId );
if (objTeachingMethods == null) return "";
if (objTeachingMethods.GetFldValue(strOutFldName) == null) return "";
return objTeachingMethods.GetFldValue(strOutFldName).toString();
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
export  async function TeachingMethods_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsTeachingMethodsEN.con_TeachingMethodId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrTeachingMethods = await TeachingMethods_GetObjLstCache();
if (arrTeachingMethods == null) return [];
let arrTeachingMethodsSel = arrTeachingMethods;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrTeachingMethodsSel.length == 0) return [];
return arrTeachingMethodsSel.map(x=>x.teachingMethodId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function TeachingMethods_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_GetFirstObjAsync(strWhereCond: string): Promise<clsTeachingMethodsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const objTeachingMethods = TeachingMethods_GetObjFromJsonObj(returnObj);
return objTeachingMethods;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsTeachingMethodsEN._CurrTabName;
if (IsNullOrEmpty(clsTeachingMethodsEN.WhereFormat) == false)
{
strWhereCond = clsTeachingMethodsEN.WhereFormat;
}
if (IsNullOrEmpty(clsTeachingMethodsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsTeachingMethodsEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrTeachingMethodsExObjLstCache: Array<clsTeachingMethodsEN> = CacheHelper.Get(strKey);
const arrTeachingMethodsObjLstT = TeachingMethods_GetObjLstByJSONObjLst(arrTeachingMethodsExObjLstCache);
return arrTeachingMethodsObjLstT;
}
try
{
const arrTeachingMethodsExObjLst = await TeachingMethods_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrTeachingMethodsExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrTeachingMethodsExObjLst.length);
console.log(strInfo);
return arrTeachingMethodsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, teachingMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function TeachingMethods_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsTeachingMethodsEN._CurrTabName;
if (IsNullOrEmpty(clsTeachingMethodsEN.WhereFormat) == false)
{
strWhereCond = clsTeachingMethodsEN.WhereFormat;
}
if (IsNullOrEmpty(clsTeachingMethodsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsTeachingMethodsEN.CacheAddiCondition);
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
const arrTeachingMethodsExObjLstCache: Array<clsTeachingMethodsEN> = JSON.parse(strTempObjLst);
const arrTeachingMethodsObjLstT = TeachingMethods_GetObjLstByJSONObjLst(arrTeachingMethodsExObjLstCache);
return arrTeachingMethodsObjLstT;
}
try
{
const arrTeachingMethodsExObjLst = await TeachingMethods_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrTeachingMethodsExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrTeachingMethodsExObjLst.length);
console.log(strInfo);
return arrTeachingMethodsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, teachingMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function TeachingMethods_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsTeachingMethodsEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrTeachingMethodsObjLstCache: Array<clsTeachingMethodsEN> = JSON.parse(strTempObjLst);
return arrTeachingMethodsObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function TeachingMethods_GetObjLstAsync(strWhereCond: string): Promise<Array<clsTeachingMethodsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingMethods_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingMethods_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsTeachingMethodsEN._CurrTabName;
if (IsNullOrEmpty(clsTeachingMethodsEN.WhereFormat) == false)
{
strWhereCond = clsTeachingMethodsEN.WhereFormat;
}
if (IsNullOrEmpty(clsTeachingMethodsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsTeachingMethodsEN.CacheAddiCondition);
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
const arrTeachingMethodsExObjLstCache: Array<clsTeachingMethodsEN> = JSON.parse(strTempObjLst);
const arrTeachingMethodsObjLstT = TeachingMethods_GetObjLstByJSONObjLst(arrTeachingMethodsExObjLstCache);
return arrTeachingMethodsObjLstT;
}
try
{
const arrTeachingMethodsExObjLst = await TeachingMethods_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrTeachingMethodsExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrTeachingMethodsExObjLst.length);
console.log(strInfo);
return arrTeachingMethodsExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, teachingMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function TeachingMethods_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsTeachingMethodsEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrTeachingMethodsObjLstCache: Array<clsTeachingMethodsEN> = JSON.parse(strTempObjLst);
return arrTeachingMethodsObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function TeachingMethods_GetObjLstCache(): Promise<Array<clsTeachingMethodsEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrTeachingMethodsObjLstCache;
switch (clsTeachingMethodsEN.CacheModeId)
{
case "04"://sessionStorage
arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstClientCache();
break;
default:
arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstClientCache();
break;
}
return arrTeachingMethodsObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function TeachingMethods_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrTeachingMethodsObjLstCache;
switch (clsTeachingMethodsEN.CacheModeId)
{
case "04"://sessionStorage
arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrTeachingMethodsObjLstCache = null;
break;
default:
arrTeachingMethodsObjLstCache = null;
break;
}
return arrTeachingMethodsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTeachingMethodIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function TeachingMethods_GetSubObjLstCache(objTeachingMethodsCond: clsTeachingMethodsEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstCache();
let arrTeachingMethodsSel = arrTeachingMethodsObjLstCache;
if (objTeachingMethodsCond.sfFldComparisonOp == null || objTeachingMethodsCond.sfFldComparisonOp == "") return arrTeachingMethodsSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objTeachingMethodsCond.sfFldComparisonOp);
//console.log("clsTeachingMethodsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objTeachingMethodsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objTeachingMethodsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrTeachingMethodsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objTeachingMethodsCond), teachingMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsTeachingMethodsEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTeachingMethodId:关键字列表
 * @returns 对象列表
 **/
export  async function TeachingMethods_GetObjLstByTeachingMethodIdLstAsync(arrTeachingMethodId: Array<string>): Promise<Array<clsTeachingMethodsEN>>  
{
const strThisFuncName = "GetObjLstByTeachingMethodIdLstAsync";
const strAction = "GetObjLstByTeachingMethodIdLst";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrTeachingMethodId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingMethods_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingMethods_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param arrstrTeachingMethodIdLst:关键字列表
 * @returns 对象列表
*/
export  async function TeachingMethods_GetObjLstByTeachingMethodIdLstCache(arrTeachingMethodIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByTeachingMethodIdLstCache";
try
{
const arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstCache();
const arrTeachingMethodsSel = arrTeachingMethodsObjLstCache.filter(x => arrTeachingMethodIdLst.indexOf(x.teachingMethodId)>-1);
return arrTeachingMethodsSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrTeachingMethodIdLst.join(","), teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsTeachingMethodsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingMethods_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingMethods_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsTeachingMethodsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingMethods_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingMethods_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsTeachingMethodsEN>();
const arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstCache();
if (arrTeachingMethodsObjLstCache.length == 0) return arrTeachingMethodsObjLstCache;
let arrTeachingMethodsSel = arrTeachingMethodsObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objTeachingMethodsCond = new clsTeachingMethodsEN();
ObjectAssign(objTeachingMethodsCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsTeachingMethodsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objTeachingMethodsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrTeachingMethodsSel.length == 0) return arrTeachingMethodsSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrTeachingMethodsSel = arrTeachingMethodsSel.sort(TeachingMethods_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrTeachingMethodsSel = arrTeachingMethodsSel.sort(objPagerPara.sortFun);
}
arrTeachingMethodsSel = arrTeachingMethodsSel.slice(intStart, intEnd);     
return arrTeachingMethodsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, teachingMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsTeachingMethodsEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function TeachingMethods_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsTeachingMethodsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsTeachingMethodsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingMethods_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingMethods_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param strTeachingMethodId:关键字
 * @returns 获取删除的结果
 **/
export  async function TeachingMethods_DelRecordAsync(strTeachingMethodId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strTeachingMethodId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param arrTeachingMethodId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function TeachingMethods_DelTeachingMethodssAsync(arrTeachingMethodId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelTeachingMethodssAsync";
const strAction = "DelTeachingMethodss";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrTeachingMethodId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_DelTeachingMethodssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelTeachingMethodssByCondAsync";
const strAction = "DelTeachingMethodssByCond";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param objTeachingMethodsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function TeachingMethods_AddNewRecordAsync(objTeachingMethodsEN: clsTeachingMethodsEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objTeachingMethodsEN.teachingMethodId === null || objTeachingMethodsEN.teachingMethodId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objTeachingMethodsEN);
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param objTeachingMethodsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function TeachingMethods_AddNewRecordWithMaxIdAsync(objTeachingMethodsEN: clsTeachingMethodsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_AddNewObjSave(objTeachingMethodsEN: clsTeachingMethodsEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
TeachingMethods_CheckPropertyNew(objTeachingMethodsEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ teachingMethods_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await TeachingMethods_CheckUniCond4Add(objTeachingMethodsEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const bolIsExist = await TeachingMethods_IsExistAsync(objTeachingMethodsEN.teachingMethodId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objTeachingMethodsEN.teachingMethodId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await TeachingMethods_AddNewRecordAsync(objTeachingMethodsEN);
if (returnBool == true)
{
TeachingMethods_ReFreshCache();
}
else
{
const strInfo = `添加[教学方式(TeachingMethods)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objTeachingMethodsEN.teachingMethodId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ teachingMethods_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function TeachingMethods_CheckUniCond4Add(objTeachingMethodsEN: clsTeachingMethodsEN): Promise<boolean>{
const strUniquenessCondition = TeachingMethods_GetUniCondStr(objTeachingMethodsEN);
const bolIsExistCondition = await TeachingMethods_IsExistRecordAsync(strUniquenessCondition);
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
export  async function TeachingMethods_CheckUniCond4Update(objTeachingMethodsEN: clsTeachingMethodsEN): Promise<boolean>{
const strUniquenessCondition = TeachingMethods_GetUniCondStr4Update(objTeachingMethodsEN);
const bolIsExistCondition = await TeachingMethods_IsExistRecordAsync(strUniquenessCondition);
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
export  async function TeachingMethods_UpdateObjSave(objTeachingMethodsEN: clsTeachingMethodsEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objTeachingMethodsEN.sfUpdFldSetStr = objTeachingMethodsEN.updFldString;//设置哪些字段被修改(脏字段)
if (objTeachingMethodsEN.teachingMethodId == "" || objTeachingMethodsEN.teachingMethodId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
TeachingMethods_CheckProperty4Update(objTeachingMethodsEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ teachingMethods_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await TeachingMethods_CheckUniCond4Update(objTeachingMethodsEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await TeachingMethods_UpdateRecordAsync(objTeachingMethodsEN);
if (returnBool == true)
{
TeachingMethods_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ teachingMethods_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objTeachingMethodsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function TeachingMethods_AddNewRecordWithReturnKeyAsync(objTeachingMethodsEN: clsTeachingMethodsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param objTeachingMethodsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function TeachingMethods_UpdateRecordAsync(objTeachingMethodsEN: clsTeachingMethodsEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objTeachingMethodsEN.sfUpdFldSetStr === undefined || objTeachingMethodsEN.sfUpdFldSetStr === null || objTeachingMethodsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objTeachingMethodsEN.teachingMethodId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param objTeachingMethodsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function TeachingMethods_EditRecordExAsync(objTeachingMethodsEN: clsTeachingMethodsEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objTeachingMethodsEN.sfUpdFldSetStr === undefined || objTeachingMethodsEN.sfUpdFldSetStr === null || objTeachingMethodsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objTeachingMethodsEN.teachingMethodId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param objTeachingMethodsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function TeachingMethods_UpdateWithConditionAsync(objTeachingMethodsEN: clsTeachingMethodsEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objTeachingMethodsEN.sfUpdFldSetStr === undefined || objTeachingMethodsEN.sfUpdFldSetStr === null || objTeachingMethodsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objTeachingMethodsEN.teachingMethodId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);
objTeachingMethodsEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param objstrTeachingMethodIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function TeachingMethods_IsExistRecordCache(objTeachingMethodsCond: clsTeachingMethodsEN) {
const strThisFuncName = "IsExistRecordCache";
const arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstCache();
if (arrTeachingMethodsObjLstCache == null) return false;
let arrTeachingMethodsSel = arrTeachingMethodsObjLstCache;
if (objTeachingMethodsCond.sfFldComparisonOp == null || objTeachingMethodsCond.sfFldComparisonOp == "") return arrTeachingMethodsSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objTeachingMethodsCond.sfFldComparisonOp);
//console.log("clsTeachingMethodsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objTeachingMethodsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objTeachingMethodsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrTeachingMethodsSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objTeachingMethodsCond), teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param strTeachingMethodId:所给的关键字
 * @returns 对象
*/
export  async function TeachingMethods_IsExistCache(strTeachingMethodId:string) {
const strThisFuncName = "IsExistCache";
const arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstCache();
if (arrTeachingMethodsObjLstCache == null) return false;
try
{
const arrTeachingMethodsSel = arrTeachingMethodsObjLstCache.filter(x => x.teachingMethodId == strTeachingMethodId);
if (arrTeachingMethodsSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strTeachingMethodId, teachingMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strTeachingMethodId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function TeachingMethods_IsExistAsync(strTeachingMethodId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTeachingMethodId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
 * @param objTeachingMethodsCond:条件对象
 * @returns 对象列表记录数
*/
export  async function TeachingMethods_GetRecCountByCondCache(objTeachingMethodsCond: clsTeachingMethodsEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrTeachingMethodsObjLstCache = await TeachingMethods_GetObjLstCache();
if (arrTeachingMethodsObjLstCache == null) return 0;
let arrTeachingMethodsSel = arrTeachingMethodsObjLstCache;
if (objTeachingMethodsCond.sfFldComparisonOp == null || objTeachingMethodsCond.sfFldComparisonOp == "") return arrTeachingMethodsSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objTeachingMethodsCond.sfFldComparisonOp);
//console.log("clsTeachingMethodsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objTeachingMethodsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objTeachingMethodsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrTeachingMethodsSel = arrTeachingMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrTeachingMethodsSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objTeachingMethodsCond), teachingMethods_ConstructorName, strThisFuncName);
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
export  async function TeachingMethods_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(teachingMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingMethods_ConstructorName, strThisFuncName);
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
export  function TeachingMethods_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function TeachingMethods_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsTeachingMethodsEN._CurrTabName;
switch (clsTeachingMethodsEN.CacheModeId)
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
clsTeachingMethodsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function TeachingMethods_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsTeachingMethodsEN._CurrTabName;
switch (clsTeachingMethodsEN.CacheModeId)
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
clsTeachingMethodsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function TeachingMethods_GetLastRefreshTime():string
{
if (clsTeachingMethodsEN._RefreshTimeLst.length == 0) return "";
return clsTeachingMethodsEN._RefreshTimeLst[clsTeachingMethodsEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function TeachingMethods_BindDdl_TeachingMethodIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_TeachingMethodIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_TeachingMethodIdInDivCache");
const arrObjLstSel = await TeachingMethods_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsTeachingMethodsEN.con_TeachingMethodId, clsTeachingMethodsEN.con_TeachingMethodName, "教学方式...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function TeachingMethods_GetArrTeachingMethods()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_TeachingMethodIdInDivCache");
const arrTeachingMethods = new Array<clsTeachingMethodsEN>();
const arrObjLstSel = await TeachingMethods_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsTeachingMethodsEN();
obj0.teachingMethodId = '0';
obj0.teachingMethodName = '选教学方式...';
arrTeachingMethods.push(obj0);
arrObjLstSel.forEach(x => arrTeachingMethods.push(x));
return arrTeachingMethods;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function TeachingMethods_CheckPropertyNew(pobjTeachingMethodsEN: clsTeachingMethodsEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodName) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学方式名]不能为空(In 教学方式)!(clsTeachingMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodEnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学方式英文名]不能为空(In 教学方式)!(clsTeachingMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.updDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改日期]不能为空(In 教学方式)!(clsTeachingMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 教学方式)!(clsTeachingMethodsBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodId) == false && GetStrLen(pobjTeachingMethodsEN.teachingMethodId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[教学方式Id(teachingMethodId)]的长度不能超过2(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.teachingMethodId}(clsTeachingMethodsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodName) == false && GetStrLen(pobjTeachingMethodsEN.teachingMethodName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[教学方式名(teachingMethodName)]的长度不能超过50(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.teachingMethodName}(clsTeachingMethodsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodEnName) == false && GetStrLen(pobjTeachingMethodsEN.teachingMethodEnName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[教学方式英文名(teachingMethodEnName)]的长度不能超过50(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.teachingMethodEnName}(clsTeachingMethodsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.updDate) == false && GetStrLen(pobjTeachingMethodsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.updDate}(clsTeachingMethodsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.updUser) == false && GetStrLen(pobjTeachingMethodsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.updUser}(clsTeachingMethodsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.memo) == false && GetStrLen(pobjTeachingMethodsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.memo}(clsTeachingMethodsBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodId) == false && undefined !== pobjTeachingMethodsEN.teachingMethodId && tzDataType.isString(pobjTeachingMethodsEN.teachingMethodId) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学方式Id(teachingMethodId)]的值:[${pobjTeachingMethodsEN.teachingMethodId}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodName) == false && undefined !== pobjTeachingMethodsEN.teachingMethodName && tzDataType.isString(pobjTeachingMethodsEN.teachingMethodName) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学方式名(teachingMethodName)]的值:[${pobjTeachingMethodsEN.teachingMethodName}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodEnName) == false && undefined !== pobjTeachingMethodsEN.teachingMethodEnName && tzDataType.isString(pobjTeachingMethodsEN.teachingMethodEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学方式英文名(teachingMethodEnName)]的值:[${pobjTeachingMethodsEN.teachingMethodEnName}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.updDate) == false && undefined !== pobjTeachingMethodsEN.updDate && tzDataType.isString(pobjTeachingMethodsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjTeachingMethodsEN.updDate}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.updUser) == false && undefined !== pobjTeachingMethodsEN.updUser && tzDataType.isString(pobjTeachingMethodsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjTeachingMethodsEN.updUser}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.memo) == false && undefined !== pobjTeachingMethodsEN.memo && tzDataType.isString(pobjTeachingMethodsEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjTeachingMethodsEN.memo}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function TeachingMethods_CheckProperty4Update(pobjTeachingMethodsEN: clsTeachingMethodsEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodId) == false && GetStrLen(pobjTeachingMethodsEN.teachingMethodId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[教学方式Id(teachingMethodId)]的长度不能超过2(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.teachingMethodId}(clsTeachingMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodName) == false && GetStrLen(pobjTeachingMethodsEN.teachingMethodName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[教学方式名(teachingMethodName)]的长度不能超过50(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.teachingMethodName}(clsTeachingMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodEnName) == false && GetStrLen(pobjTeachingMethodsEN.teachingMethodEnName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[教学方式英文名(teachingMethodEnName)]的长度不能超过50(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.teachingMethodEnName}(clsTeachingMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.updDate) == false && GetStrLen(pobjTeachingMethodsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.updDate}(clsTeachingMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.updUser) == false && GetStrLen(pobjTeachingMethodsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.updUser}(clsTeachingMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.memo) == false && GetStrLen(pobjTeachingMethodsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教学方式(TeachingMethods))!值:${pobjTeachingMethodsEN.memo}(clsTeachingMethodsBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodId) == false && undefined !== pobjTeachingMethodsEN.teachingMethodId && tzDataType.isString(pobjTeachingMethodsEN.teachingMethodId) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学方式Id(teachingMethodId)]的值:[${pobjTeachingMethodsEN.teachingMethodId}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodName) == false && undefined !== pobjTeachingMethodsEN.teachingMethodName && tzDataType.isString(pobjTeachingMethodsEN.teachingMethodName) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学方式名(teachingMethodName)]的值:[${pobjTeachingMethodsEN.teachingMethodName}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodEnName) == false && undefined !== pobjTeachingMethodsEN.teachingMethodEnName && tzDataType.isString(pobjTeachingMethodsEN.teachingMethodEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学方式英文名(teachingMethodEnName)]的值:[${pobjTeachingMethodsEN.teachingMethodEnName}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.updDate) == false && undefined !== pobjTeachingMethodsEN.updDate && tzDataType.isString(pobjTeachingMethodsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjTeachingMethodsEN.updDate}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.updUser) == false && undefined !== pobjTeachingMethodsEN.updUser && tzDataType.isString(pobjTeachingMethodsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjTeachingMethodsEN.updUser}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingMethodsEN.memo) == false && undefined !== pobjTeachingMethodsEN.memo && tzDataType.isString(pobjTeachingMethodsEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjTeachingMethodsEN.memo}], 非法,应该为字符型(In 教学方式(TeachingMethods))!(clsTeachingMethodsBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjTeachingMethodsEN.teachingMethodId) === true 
 || pobjTeachingMethodsEN.teachingMethodId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[教学方式Id]不能为空(In 教学方式)!(clsTeachingMethodsBL:CheckProperty4Update)`);
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
export  function TeachingMethods_GetJSONStrByObj (pobjTeachingMethodsEN: clsTeachingMethodsEN): string
{
pobjTeachingMethodsEN.sfUpdFldSetStr = pobjTeachingMethodsEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjTeachingMethodsEN);
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
export  function TeachingMethods_GetObjLstByJSONStr (strJSON: string): Array<clsTeachingMethodsEN>
{
let arrTeachingMethodsObjLst = new Array<clsTeachingMethodsEN>();
if (strJSON === "")
{
return arrTeachingMethodsObjLst;
}
try
{
arrTeachingMethodsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrTeachingMethodsObjLst;
}
return arrTeachingMethodsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTeachingMethodsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function TeachingMethods_GetObjLstByJSONObjLst (arrTeachingMethodsObjLstS: Array<clsTeachingMethodsEN>): Array<clsTeachingMethodsEN>
{
const arrTeachingMethodsObjLst = new Array<clsTeachingMethodsEN>();
for (const objInFor of arrTeachingMethodsObjLstS) {
const obj1 = TeachingMethods_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrTeachingMethodsObjLst.push(obj1);
}
return arrTeachingMethodsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function TeachingMethods_GetObjByJSONStr (strJSON: string): clsTeachingMethodsEN
{
let pobjTeachingMethodsEN = new clsTeachingMethodsEN();
if (strJSON === "")
{
return pobjTeachingMethodsEN;
}
try
{
pobjTeachingMethodsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjTeachingMethodsEN;
}
return pobjTeachingMethodsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function TeachingMethods_GetCombineCondition(objTeachingMethodsCond: clsTeachingMethodsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objTeachingMethodsCond.dicFldComparisonOp, clsTeachingMethodsEN.con_TeachingMethodId) == true)
{
const strComparisonOpTeachingMethodId:string = objTeachingMethodsCond.dicFldComparisonOp[clsTeachingMethodsEN.con_TeachingMethodId];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingMethodsEN.con_TeachingMethodId, objTeachingMethodsCond.teachingMethodId, strComparisonOpTeachingMethodId);
}
if (Object.prototype.hasOwnProperty.call(objTeachingMethodsCond.dicFldComparisonOp, clsTeachingMethodsEN.con_TeachingMethodName) == true)
{
const strComparisonOpTeachingMethodName:string = objTeachingMethodsCond.dicFldComparisonOp[clsTeachingMethodsEN.con_TeachingMethodName];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingMethodsEN.con_TeachingMethodName, objTeachingMethodsCond.teachingMethodName, strComparisonOpTeachingMethodName);
}
if (Object.prototype.hasOwnProperty.call(objTeachingMethodsCond.dicFldComparisonOp, clsTeachingMethodsEN.con_TeachingMethodEnName) == true)
{
const strComparisonOpTeachingMethodEnName:string = objTeachingMethodsCond.dicFldComparisonOp[clsTeachingMethodsEN.con_TeachingMethodEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingMethodsEN.con_TeachingMethodEnName, objTeachingMethodsCond.teachingMethodEnName, strComparisonOpTeachingMethodEnName);
}
if (Object.prototype.hasOwnProperty.call(objTeachingMethodsCond.dicFldComparisonOp, clsTeachingMethodsEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objTeachingMethodsCond.dicFldComparisonOp[clsTeachingMethodsEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingMethodsEN.con_UpdDate, objTeachingMethodsCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objTeachingMethodsCond.dicFldComparisonOp, clsTeachingMethodsEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objTeachingMethodsCond.dicFldComparisonOp[clsTeachingMethodsEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingMethodsEN.con_UpdUser, objTeachingMethodsCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objTeachingMethodsCond.dicFldComparisonOp, clsTeachingMethodsEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objTeachingMethodsCond.dicFldComparisonOp[clsTeachingMethodsEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingMethodsEN.con_Memo, objTeachingMethodsCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--TeachingMethods(教学方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTeachingMethodName: 教学方式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function TeachingMethods_GetUniCondStr(objTeachingMethodsEN: clsTeachingMethodsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and TeachingMethodName = '{0}'", objTeachingMethodsEN.teachingMethodName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--TeachingMethods(教学方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTeachingMethodName: 教学方式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function TeachingMethods_GetUniCondStr4Update(objTeachingMethodsEN: clsTeachingMethodsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and TeachingMethodId <> '{0}'", objTeachingMethodsEN.teachingMethodId);
 strWhereCond +=  Format(" and TeachingMethodName = '{0}'", objTeachingMethodsEN.teachingMethodName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objTeachingMethodsENS:源对象
 * @param objTeachingMethodsENT:目标对象
*/
export  function TeachingMethods_CopyObjTo(objTeachingMethodsENS: clsTeachingMethodsEN , objTeachingMethodsENT: clsTeachingMethodsEN ): void 
{
objTeachingMethodsENT.teachingMethodId = objTeachingMethodsENS.teachingMethodId; //教学方式Id
objTeachingMethodsENT.teachingMethodName = objTeachingMethodsENS.teachingMethodName; //教学方式名
objTeachingMethodsENT.teachingMethodEnName = objTeachingMethodsENS.teachingMethodEnName; //教学方式英文名
objTeachingMethodsENT.updDate = objTeachingMethodsENS.updDate; //修改日期
objTeachingMethodsENT.updUser = objTeachingMethodsENS.updUser; //修改人
objTeachingMethodsENT.memo = objTeachingMethodsENS.memo; //备注
objTeachingMethodsENT.sfUpdFldSetStr = objTeachingMethodsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTeachingMethodsENS:源对象
 * @param objTeachingMethodsENT:目标对象
*/
export  function TeachingMethods_GetObjFromJsonObj(objTeachingMethodsENS: clsTeachingMethodsEN): clsTeachingMethodsEN 
{
 const objTeachingMethodsENT: clsTeachingMethodsEN = new clsTeachingMethodsEN();
ObjectAssign(objTeachingMethodsENT, objTeachingMethodsENS);
 return objTeachingMethodsENT;
}