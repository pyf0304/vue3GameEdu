
 /**
 * 类名:clsAnswerModeWApi
 * 表名:AnswerMode(01120003)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:18
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
 * 答案模式(AnswerMode)
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
import { clsAnswerModeEN } from "@/ts/L0Entity/SysPara/clsAnswerModeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const answerMode_Controller = "AnswerModeApi";
 export const answerMode_ConstructorName = "answerMode";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strAnswerModeId:关键字
 * @returns 对象
 **/
export  async function AnswerMode_GetObjByAnswerModeIdAsync(strAnswerModeId: string): Promise<clsAnswerModeEN|null>  
{
const strThisFuncName = "GetObjByAnswerModeIdAsync";

if (IsNullOrEmpty(strAnswerModeId) == true)
{
  const strMsg = Format("参数:[strAnswerModeId]不能为空!(In clsAnswerModeWApi.GetObjByAnswerModeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strAnswerModeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strAnswerModeId]的长度:[{0}]不正确!(clsAnswerModeWApi.GetObjByAnswerModeIdAsync)", strAnswerModeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByAnswerModeId";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strAnswerModeId,
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
const objAnswerMode = AnswerMode_GetObjFromJsonObj(returnObj);
return objAnswerMode;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param strAnswerModeId:所给的关键字
 * @returns 对象
*/
export  async function AnswerMode_GetObjByAnswerModeIdlocalStorage(strAnswerModeId: string) {
const strThisFuncName = "GetObjByAnswerModeIdlocalStorage";

if (IsNullOrEmpty(strAnswerModeId) == true)
{
  const strMsg = Format("参数:[strAnswerModeId]不能为空!(In clsAnswerModeWApi.GetObjByAnswerModeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strAnswerModeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strAnswerModeId]的长度:[{0}]不正确!(clsAnswerModeWApi.GetObjByAnswerModeIdlocalStorage)", strAnswerModeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsAnswerModeEN._CurrTabName, strAnswerModeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objAnswerModeCache: clsAnswerModeEN = JSON.parse(strTempObj);
return objAnswerModeCache;
}
try
{
const objAnswerMode = await AnswerMode_GetObjByAnswerModeIdAsync(strAnswerModeId);
if (objAnswerMode != null)
{
localStorage.setItem(strKey, JSON.stringify(objAnswerMode));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objAnswerMode;
}
return objAnswerMode;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strAnswerModeId, answerMode_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strAnswerModeId:所给的关键字
 * @returns 对象
*/
export  async function AnswerMode_GetObjByAnswerModeIdCache(strAnswerModeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByAnswerModeIdCache";

if (IsNullOrEmpty(strAnswerModeId) == true)
{
  const strMsg = Format("参数:[strAnswerModeId]不能为空!(In clsAnswerModeWApi.GetObjByAnswerModeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strAnswerModeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strAnswerModeId]的长度:[{0}]不正确!(clsAnswerModeWApi.GetObjByAnswerModeIdCache)", strAnswerModeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrAnswerModeObjLstCache = await AnswerMode_GetObjLstCache();
try
{
const arrAnswerModeSel = arrAnswerModeObjLstCache.filter(x => 
 x.answerModeId == strAnswerModeId );
let objAnswerMode: clsAnswerModeEN;
if (arrAnswerModeSel.length > 0)
{
objAnswerMode = arrAnswerModeSel[0];
return objAnswerMode;
}
else
{
if (bolTryAsyncOnce == true)
{
const objAnswerModeConst = await AnswerMode_GetObjByAnswerModeIdAsync(strAnswerModeId);
if (objAnswerModeConst != null)
{
AnswerMode_ReFreshThisCache();
return objAnswerModeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strAnswerModeId, answerMode_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objAnswerMode:所给的对象
 * @returns 对象
*/
export  async function AnswerMode_UpdateObjInLstCache(objAnswerMode: clsAnswerModeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrAnswerModeObjLstCache = await AnswerMode_GetObjLstCache();
const obj = arrAnswerModeObjLstCache.find(x => 
x.answerModeId == objAnswerMode.answerModeId);
if (obj != null)
{
objAnswerMode.answerModeId = obj.answerModeId;
ObjectAssign( obj, objAnswerMode);
}
else
{
arrAnswerModeObjLstCache.push(objAnswerMode);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, answerMode_ConstructorName, strThisFuncName);
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
export  function AnswerMode_SortFunDefa(a:clsAnswerModeEN , b:clsAnswerModeEN): number 
{
return a.answerModeId.localeCompare(b.answerModeId);
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
export  function AnswerMode_SortFunDefa2Fld(a:clsAnswerModeEN , b:clsAnswerModeEN): number 
{
if (a.answerModeName == b.answerModeName) return a.memo.localeCompare(b.memo);
else return a.answerModeName.localeCompare(b.answerModeName);
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
export  function AnswerMode_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsAnswerModeEN.con_AnswerModeId:
return (a: clsAnswerModeEN, b: clsAnswerModeEN) => {
return a.answerModeId.localeCompare(b.answerModeId);
}
case clsAnswerModeEN.con_AnswerModeName:
return (a: clsAnswerModeEN, b: clsAnswerModeEN) => {
return a.answerModeName.localeCompare(b.answerModeName);
}
case clsAnswerModeEN.con_Memo:
return (a: clsAnswerModeEN, b: clsAnswerModeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[AnswerMode]中不存在!(in ${ answerMode_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsAnswerModeEN.con_AnswerModeId:
return (a: clsAnswerModeEN, b: clsAnswerModeEN) => {
return b.answerModeId.localeCompare(a.answerModeId);
}
case clsAnswerModeEN.con_AnswerModeName:
return (a: clsAnswerModeEN, b: clsAnswerModeEN) => {
return b.answerModeName.localeCompare(a.answerModeName);
}
case clsAnswerModeEN.con_Memo:
return (a: clsAnswerModeEN, b: clsAnswerModeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[AnswerMode]中不存在!(in ${ answerMode_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strAnswerModeId:所给的关键字
 * @returns 对象
*/
export  async function AnswerMode_GetNameByAnswerModeIdCache(strAnswerModeId: string) {

if (IsNullOrEmpty(strAnswerModeId) == true)
{
  const strMsg = Format("参数:[strAnswerModeId]不能为空!(In clsAnswerModeWApi.GetNameByAnswerModeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strAnswerModeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strAnswerModeId]的长度:[{0}]不正确!(clsAnswerModeWApi.GetNameByAnswerModeIdCache)", strAnswerModeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrAnswerModeObjLstCache = await AnswerMode_GetObjLstCache();
if (arrAnswerModeObjLstCache == null) return "";
try
{
const arrAnswerModeSel = arrAnswerModeObjLstCache.filter(x => 
 x.answerModeId == strAnswerModeId );
let objAnswerMode: clsAnswerModeEN;
if (arrAnswerModeSel.length > 0)
{
objAnswerMode = arrAnswerModeSel[0];
return objAnswerMode.answerModeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strAnswerModeId);
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
export  async function AnswerMode_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsAnswerModeEN.con_AnswerModeId:
return (obj: clsAnswerModeEN) => {
return obj.answerModeId === value;
}
case clsAnswerModeEN.con_AnswerModeName:
return (obj: clsAnswerModeEN) => {
return obj.answerModeName === value;
}
case clsAnswerModeEN.con_Memo:
return (obj: clsAnswerModeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[AnswerMode]中不存在!(in ${ answerMode_ConstructorName}.${ strThisFuncName})`;
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
export  async function AnswerMode_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsAnswerModeEN.con_AnswerModeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsAnswerModeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsAnswerModeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strAnswerModeId = strInValue;
if (IsNullOrEmpty(strAnswerModeId) == true)
{
return "";
}
const objAnswerMode = await AnswerMode_GetObjByAnswerModeIdCache(strAnswerModeId );
if (objAnswerMode == null) return "";
if (objAnswerMode.GetFldValue(strOutFldName) == null) return "";
return objAnswerMode.GetFldValue(strOutFldName).toString();
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
export  async function AnswerMode_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsAnswerModeEN.con_AnswerModeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrAnswerMode = await AnswerMode_GetObjLstCache();
if (arrAnswerMode == null) return [];
let arrAnswerModeSel = arrAnswerMode;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrAnswerModeSel = arrAnswerModeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrAnswerModeSel.length == 0) return [];
return arrAnswerModeSel.map(x=>x.answerModeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function AnswerMode_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_GetFirstObjAsync(strWhereCond: string): Promise<clsAnswerModeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const objAnswerMode = AnswerMode_GetObjFromJsonObj(returnObj);
return objAnswerMode;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsAnswerModeEN._CurrTabName;
if (IsNullOrEmpty(clsAnswerModeEN.WhereFormat) == false)
{
strWhereCond = clsAnswerModeEN.WhereFormat;
}
if (IsNullOrEmpty(clsAnswerModeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsAnswerModeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrAnswerModeExObjLstCache: Array<clsAnswerModeEN> = CacheHelper.Get(strKey);
const arrAnswerModeObjLstT = AnswerMode_GetObjLstByJSONObjLst(arrAnswerModeExObjLstCache);
return arrAnswerModeObjLstT;
}
try
{
const arrAnswerModeExObjLst = await AnswerMode_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrAnswerModeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrAnswerModeExObjLst.length);
console.log(strInfo);
return arrAnswerModeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, answerMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function AnswerMode_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsAnswerModeEN._CurrTabName;
if (IsNullOrEmpty(clsAnswerModeEN.WhereFormat) == false)
{
strWhereCond = clsAnswerModeEN.WhereFormat;
}
if (IsNullOrEmpty(clsAnswerModeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsAnswerModeEN.CacheAddiCondition);
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
const arrAnswerModeExObjLstCache: Array<clsAnswerModeEN> = JSON.parse(strTempObjLst);
const arrAnswerModeObjLstT = AnswerMode_GetObjLstByJSONObjLst(arrAnswerModeExObjLstCache);
return arrAnswerModeObjLstT;
}
try
{
const arrAnswerModeExObjLst = await AnswerMode_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrAnswerModeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrAnswerModeExObjLst.length);
console.log(strInfo);
return arrAnswerModeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, answerMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function AnswerMode_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsAnswerModeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrAnswerModeObjLstCache: Array<clsAnswerModeEN> = JSON.parse(strTempObjLst);
return arrAnswerModeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function AnswerMode_GetObjLstAsync(strWhereCond: string): Promise<Array<clsAnswerModeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", answerMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = AnswerMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsAnswerModeEN._CurrTabName;
if (IsNullOrEmpty(clsAnswerModeEN.WhereFormat) == false)
{
strWhereCond = clsAnswerModeEN.WhereFormat;
}
if (IsNullOrEmpty(clsAnswerModeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsAnswerModeEN.CacheAddiCondition);
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
const arrAnswerModeExObjLstCache: Array<clsAnswerModeEN> = JSON.parse(strTempObjLst);
const arrAnswerModeObjLstT = AnswerMode_GetObjLstByJSONObjLst(arrAnswerModeExObjLstCache);
return arrAnswerModeObjLstT;
}
try
{
const arrAnswerModeExObjLst = await AnswerMode_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrAnswerModeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrAnswerModeExObjLst.length);
console.log(strInfo);
return arrAnswerModeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, answerMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function AnswerMode_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsAnswerModeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrAnswerModeObjLstCache: Array<clsAnswerModeEN> = JSON.parse(strTempObjLst);
return arrAnswerModeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function AnswerMode_GetObjLstCache(): Promise<Array<clsAnswerModeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrAnswerModeObjLstCache;
switch (clsAnswerModeEN.CacheModeId)
{
case "04"://sessionStorage
arrAnswerModeObjLstCache = await AnswerMode_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrAnswerModeObjLstCache = await AnswerMode_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrAnswerModeObjLstCache = await AnswerMode_GetObjLstClientCache();
break;
default:
arrAnswerModeObjLstCache = await AnswerMode_GetObjLstClientCache();
break;
}
return arrAnswerModeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function AnswerMode_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrAnswerModeObjLstCache;
switch (clsAnswerModeEN.CacheModeId)
{
case "04"://sessionStorage
arrAnswerModeObjLstCache = await AnswerMode_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrAnswerModeObjLstCache = await AnswerMode_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrAnswerModeObjLstCache = null;
break;
default:
arrAnswerModeObjLstCache = null;
break;
}
return arrAnswerModeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrAnswerModeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function AnswerMode_GetSubObjLstCache(objAnswerModeCond: clsAnswerModeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrAnswerModeObjLstCache = await AnswerMode_GetObjLstCache();
let arrAnswerModeSel = arrAnswerModeObjLstCache;
if (objAnswerModeCond.sfFldComparisonOp == null || objAnswerModeCond.sfFldComparisonOp == "") return arrAnswerModeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objAnswerModeCond.sfFldComparisonOp);
//console.log("clsAnswerModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objAnswerModeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objAnswerModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrAnswerModeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objAnswerModeCond), answerMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsAnswerModeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrAnswerModeId:关键字列表
 * @returns 对象列表
 **/
export  async function AnswerMode_GetObjLstByAnswerModeIdLstAsync(arrAnswerModeId: Array<string>): Promise<Array<clsAnswerModeEN>>  
{
const strThisFuncName = "GetObjLstByAnswerModeIdLstAsync";
const strAction = "GetObjLstByAnswerModeIdLst";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrAnswerModeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", answerMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = AnswerMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param arrstrAnswerModeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function AnswerMode_GetObjLstByAnswerModeIdLstCache(arrAnswerModeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByAnswerModeIdLstCache";
try
{
const arrAnswerModeObjLstCache = await AnswerMode_GetObjLstCache();
const arrAnswerModeSel = arrAnswerModeObjLstCache.filter(x => arrAnswerModeIdLst.indexOf(x.answerModeId)>-1);
return arrAnswerModeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrAnswerModeIdLst.join(","), answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsAnswerModeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", answerMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = AnswerMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsAnswerModeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", answerMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = AnswerMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsAnswerModeEN>();
const arrAnswerModeObjLstCache = await AnswerMode_GetObjLstCache();
if (arrAnswerModeObjLstCache.length == 0) return arrAnswerModeObjLstCache;
let arrAnswerModeSel = arrAnswerModeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objAnswerModeCond = new clsAnswerModeEN();
ObjectAssign(objAnswerModeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsAnswerModeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objAnswerModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrAnswerModeSel = arrAnswerModeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrAnswerModeSel.length == 0) return arrAnswerModeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrAnswerModeSel = arrAnswerModeSel.sort(AnswerMode_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrAnswerModeSel = arrAnswerModeSel.sort(objPagerPara.sortFun);
}
arrAnswerModeSel = arrAnswerModeSel.slice(intStart, intEnd);     
return arrAnswerModeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, answerMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsAnswerModeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function AnswerMode_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsAnswerModeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsAnswerModeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", answerMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = AnswerMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param strAnswerModeId:关键字
 * @returns 获取删除的结果
 **/
export  async function AnswerMode_DelRecordAsync(strAnswerModeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(answerMode_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strAnswerModeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param arrAnswerModeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function AnswerMode_DelAnswerModesAsync(arrAnswerModeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelAnswerModesAsync";
const strAction = "DelAnswerModes";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrAnswerModeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_DelAnswerModesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelAnswerModesByCondAsync";
const strAction = "DelAnswerModesByCond";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param objAnswerModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function AnswerMode_AddNewRecordAsync(objAnswerModeEN: clsAnswerModeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objAnswerModeEN.answerModeId === null || objAnswerModeEN.answerModeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objAnswerModeEN);
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAnswerModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param objAnswerModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function AnswerMode_AddNewRecordWithMaxIdAsync(objAnswerModeEN: clsAnswerModeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAnswerModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_AddNewObjSave(objAnswerModeEN: clsAnswerModeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
AnswerMode_CheckPropertyNew(objAnswerModeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ answerMode_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await AnswerMode_IsExistAsync(objAnswerModeEN.answerModeId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objAnswerModeEN.answerModeId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await AnswerMode_AddNewRecordAsync(objAnswerModeEN);
if (returnBool == true)
{
AnswerMode_ReFreshCache();
}
else
{
const strInfo = `添加[答案模式(AnswerMode)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objAnswerModeEN.answerModeId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ answerMode_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function AnswerMode_UpdateObjSave(objAnswerModeEN: clsAnswerModeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objAnswerModeEN.sfUpdFldSetStr = objAnswerModeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objAnswerModeEN.answerModeId == "" || objAnswerModeEN.answerModeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
AnswerMode_CheckProperty4Update(objAnswerModeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ answerMode_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await AnswerMode_UpdateRecordAsync(objAnswerModeEN);
if (returnBool == true)
{
AnswerMode_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ answerMode_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objAnswerModeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function AnswerMode_AddNewRecordWithReturnKeyAsync(objAnswerModeEN: clsAnswerModeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAnswerModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param objAnswerModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function AnswerMode_UpdateRecordAsync(objAnswerModeEN: clsAnswerModeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objAnswerModeEN.sfUpdFldSetStr === undefined || objAnswerModeEN.sfUpdFldSetStr === null || objAnswerModeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objAnswerModeEN.answerModeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAnswerModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param objAnswerModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function AnswerMode_EditRecordExAsync(objAnswerModeEN: clsAnswerModeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objAnswerModeEN.sfUpdFldSetStr === undefined || objAnswerModeEN.sfUpdFldSetStr === null || objAnswerModeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objAnswerModeEN.answerModeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAnswerModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param objAnswerModeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function AnswerMode_UpdateWithConditionAsync(objAnswerModeEN: clsAnswerModeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objAnswerModeEN.sfUpdFldSetStr === undefined || objAnswerModeEN.sfUpdFldSetStr === null || objAnswerModeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objAnswerModeEN.answerModeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);
objAnswerModeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAnswerModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param objstrAnswerModeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function AnswerMode_IsExistRecordCache(objAnswerModeCond: clsAnswerModeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrAnswerModeObjLstCache = await AnswerMode_GetObjLstCache();
if (arrAnswerModeObjLstCache == null) return false;
let arrAnswerModeSel = arrAnswerModeObjLstCache;
if (objAnswerModeCond.sfFldComparisonOp == null || objAnswerModeCond.sfFldComparisonOp == "") return arrAnswerModeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objAnswerModeCond.sfFldComparisonOp);
//console.log("clsAnswerModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objAnswerModeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objAnswerModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrAnswerModeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objAnswerModeCond), answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param strAnswerModeId:所给的关键字
 * @returns 对象
*/
export  async function AnswerMode_IsExistCache(strAnswerModeId:string) {
const strThisFuncName = "IsExistCache";
const arrAnswerModeObjLstCache = await AnswerMode_GetObjLstCache();
if (arrAnswerModeObjLstCache == null) return false;
try
{
const arrAnswerModeSel = arrAnswerModeObjLstCache.filter(x => x.answerModeId == strAnswerModeId);
if (arrAnswerModeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strAnswerModeId, answerMode_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strAnswerModeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function AnswerMode_IsExistAsync(strAnswerModeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strAnswerModeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
 * @param objAnswerModeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function AnswerMode_GetRecCountByCondCache(objAnswerModeCond: clsAnswerModeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrAnswerModeObjLstCache = await AnswerMode_GetObjLstCache();
if (arrAnswerModeObjLstCache == null) return 0;
let arrAnswerModeSel = arrAnswerModeObjLstCache;
if (objAnswerModeCond.sfFldComparisonOp == null || objAnswerModeCond.sfFldComparisonOp == "") return arrAnswerModeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objAnswerModeCond.sfFldComparisonOp);
//console.log("clsAnswerModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objAnswerModeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objAnswerModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrAnswerModeSel = arrAnswerModeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrAnswerModeSel = arrAnswerModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrAnswerModeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objAnswerModeCond), answerMode_ConstructorName, strThisFuncName);
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
export  async function AnswerMode_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(answerMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, answerMode_ConstructorName, strThisFuncName);
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
export  function AnswerMode_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function AnswerMode_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsAnswerModeEN._CurrTabName;
switch (clsAnswerModeEN.CacheModeId)
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
clsAnswerModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function AnswerMode_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsAnswerModeEN._CurrTabName;
switch (clsAnswerModeEN.CacheModeId)
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
clsAnswerModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function AnswerMode_GetLastRefreshTime():string
{
if (clsAnswerModeEN._RefreshTimeLst.length == 0) return "";
return clsAnswerModeEN._RefreshTimeLst[clsAnswerModeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function AnswerMode_BindDdl_AnswerModeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_AnswerModeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_AnswerModeIdInDivCache");
const arrObjLstSel = await AnswerMode_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsAnswerModeEN.con_AnswerModeId, clsAnswerModeEN.con_AnswerModeName, "答案模式...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function AnswerMode_GetArrAnswerMode()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_AnswerModeIdInDivCache");
const arrAnswerMode = new Array<clsAnswerModeEN>();
const arrObjLstSel = await AnswerMode_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsAnswerModeEN();
obj0.answerModeId = '0';
obj0.answerModeName = '选答案模式...';
arrAnswerMode.push(obj0);
arrObjLstSel.forEach(x => arrAnswerMode.push(x));
return arrAnswerMode;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function AnswerMode_CheckPropertyNew(pobjAnswerModeEN: clsAnswerModeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjAnswerModeEN.answerModeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[答案模式名称]不能为空(In 答案模式)!(clsAnswerModeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjAnswerModeEN.answerModeId) == false && GetStrLen(pobjAnswerModeEN.answerModeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[答案模式Id(answerModeId)]的长度不能超过4(In 答案模式(AnswerMode))!值:${pobjAnswerModeEN.answerModeId}(clsAnswerModeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjAnswerModeEN.answerModeName) == false && GetStrLen(pobjAnswerModeEN.answerModeName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[答案模式名称(answerModeName)]的长度不能超过30(In 答案模式(AnswerMode))!值:${pobjAnswerModeEN.answerModeName}(clsAnswerModeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjAnswerModeEN.memo) == false && GetStrLen(pobjAnswerModeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 答案模式(AnswerMode))!值:${pobjAnswerModeEN.memo}(clsAnswerModeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjAnswerModeEN.answerModeId) == false && undefined !== pobjAnswerModeEN.answerModeId && tzDataType.isString(pobjAnswerModeEN.answerModeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[答案模式Id(answerModeId)]的值:[${pobjAnswerModeEN.answerModeId}], 非法,应该为字符型(In 答案模式(AnswerMode))!(clsAnswerModeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjAnswerModeEN.answerModeName) == false && undefined !== pobjAnswerModeEN.answerModeName && tzDataType.isString(pobjAnswerModeEN.answerModeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[答案模式名称(answerModeName)]的值:[${pobjAnswerModeEN.answerModeName}], 非法,应该为字符型(In 答案模式(AnswerMode))!(clsAnswerModeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjAnswerModeEN.memo) == false && undefined !== pobjAnswerModeEN.memo && tzDataType.isString(pobjAnswerModeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjAnswerModeEN.memo}], 非法,应该为字符型(In 答案模式(AnswerMode))!(clsAnswerModeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function AnswerMode_CheckProperty4Update(pobjAnswerModeEN: clsAnswerModeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjAnswerModeEN.answerModeId) == false && GetStrLen(pobjAnswerModeEN.answerModeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[答案模式Id(answerModeId)]的长度不能超过4(In 答案模式(AnswerMode))!值:${pobjAnswerModeEN.answerModeId}(clsAnswerModeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAnswerModeEN.answerModeName) == false && GetStrLen(pobjAnswerModeEN.answerModeName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[答案模式名称(answerModeName)]的长度不能超过30(In 答案模式(AnswerMode))!值:${pobjAnswerModeEN.answerModeName}(clsAnswerModeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAnswerModeEN.memo) == false && GetStrLen(pobjAnswerModeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 答案模式(AnswerMode))!值:${pobjAnswerModeEN.memo}(clsAnswerModeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjAnswerModeEN.answerModeId) == false && undefined !== pobjAnswerModeEN.answerModeId && tzDataType.isString(pobjAnswerModeEN.answerModeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[答案模式Id(answerModeId)]的值:[${pobjAnswerModeEN.answerModeId}], 非法,应该为字符型(In 答案模式(AnswerMode))!(clsAnswerModeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAnswerModeEN.answerModeName) == false && undefined !== pobjAnswerModeEN.answerModeName && tzDataType.isString(pobjAnswerModeEN.answerModeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[答案模式名称(answerModeName)]的值:[${pobjAnswerModeEN.answerModeName}], 非法,应该为字符型(In 答案模式(AnswerMode))!(clsAnswerModeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAnswerModeEN.memo) == false && undefined !== pobjAnswerModeEN.memo && tzDataType.isString(pobjAnswerModeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjAnswerModeEN.memo}], 非法,应该为字符型(In 答案模式(AnswerMode))!(clsAnswerModeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjAnswerModeEN.answerModeId) === true 
 || pobjAnswerModeEN.answerModeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[答案模式Id]不能为空(In 答案模式)!(clsAnswerModeBL:CheckProperty4Update)`);
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
export  function AnswerMode_GetJSONStrByObj (pobjAnswerModeEN: clsAnswerModeEN): string
{
pobjAnswerModeEN.sfUpdFldSetStr = pobjAnswerModeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjAnswerModeEN);
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
export  function AnswerMode_GetObjLstByJSONStr (strJSON: string): Array<clsAnswerModeEN>
{
let arrAnswerModeObjLst = new Array<clsAnswerModeEN>();
if (strJSON === "")
{
return arrAnswerModeObjLst;
}
try
{
arrAnswerModeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrAnswerModeObjLst;
}
return arrAnswerModeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrAnswerModeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function AnswerMode_GetObjLstByJSONObjLst (arrAnswerModeObjLstS: Array<clsAnswerModeEN>): Array<clsAnswerModeEN>
{
const arrAnswerModeObjLst = new Array<clsAnswerModeEN>();
for (const objInFor of arrAnswerModeObjLstS) {
const obj1 = AnswerMode_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrAnswerModeObjLst.push(obj1);
}
return arrAnswerModeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function AnswerMode_GetObjByJSONStr (strJSON: string): clsAnswerModeEN
{
let pobjAnswerModeEN = new clsAnswerModeEN();
if (strJSON === "")
{
return pobjAnswerModeEN;
}
try
{
pobjAnswerModeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjAnswerModeEN;
}
return pobjAnswerModeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function AnswerMode_GetCombineCondition(objAnswerModeCond: clsAnswerModeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objAnswerModeCond.dicFldComparisonOp, clsAnswerModeEN.con_AnswerModeId) == true)
{
const strComparisonOpAnswerModeId:string = objAnswerModeCond.dicFldComparisonOp[clsAnswerModeEN.con_AnswerModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsAnswerModeEN.con_AnswerModeId, objAnswerModeCond.answerModeId, strComparisonOpAnswerModeId);
}
if (Object.prototype.hasOwnProperty.call(objAnswerModeCond.dicFldComparisonOp, clsAnswerModeEN.con_AnswerModeName) == true)
{
const strComparisonOpAnswerModeName:string = objAnswerModeCond.dicFldComparisonOp[clsAnswerModeEN.con_AnswerModeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsAnswerModeEN.con_AnswerModeName, objAnswerModeCond.answerModeName, strComparisonOpAnswerModeName);
}
if (Object.prototype.hasOwnProperty.call(objAnswerModeCond.dicFldComparisonOp, clsAnswerModeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objAnswerModeCond.dicFldComparisonOp[clsAnswerModeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsAnswerModeEN.con_Memo, objAnswerModeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objAnswerModeENS:源对象
 * @param objAnswerModeENT:目标对象
*/
export  function AnswerMode_CopyObjTo(objAnswerModeENS: clsAnswerModeEN , objAnswerModeENT: clsAnswerModeEN ): void 
{
objAnswerModeENT.answerModeId = objAnswerModeENS.answerModeId; //答案模式Id
objAnswerModeENT.answerModeName = objAnswerModeENS.answerModeName; //答案模式名称
objAnswerModeENT.memo = objAnswerModeENS.memo; //备注
objAnswerModeENT.sfUpdFldSetStr = objAnswerModeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objAnswerModeENS:源对象
 * @param objAnswerModeENT:目标对象
*/
export  function AnswerMode_GetObjFromJsonObj(objAnswerModeENS: clsAnswerModeEN): clsAnswerModeEN 
{
 const objAnswerModeENT: clsAnswerModeEN = new clsAnswerModeEN();
ObjectAssign(objAnswerModeENT, objAnswerModeENS);
 return objAnswerModeENT;
}