
 /**
 * 类名:clsBottleStateWApi
 * 表名:BottleState(01120975)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:29
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
 * 瓶子状态(BottleState)
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
import { clsBottleStateEN } from "@/ts/L0Entity/SysPara/clsBottleStateEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const bottleState_Controller = "BottleStateApi";
 export const bottleState_ConstructorName = "bottleState";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strBottleStateId:关键字
 * @returns 对象
 **/
export  async function BottleState_GetObjByBottleStateIdAsync(strBottleStateId: string): Promise<clsBottleStateEN|null>  
{
const strThisFuncName = "GetObjByBottleStateIdAsync";

if (IsNullOrEmpty(strBottleStateId) == true)
{
  const strMsg = Format("参数:[strBottleStateId]不能为空!(In clsBottleStateWApi.GetObjByBottleStateIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strBottleStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBottleStateId]的长度:[{0}]不正确!(clsBottleStateWApi.GetObjByBottleStateIdAsync)", strBottleStateId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByBottleStateId";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBottleStateId,
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
const objBottleState = BottleState_GetObjFromJsonObj(returnObj);
return objBottleState;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param strBottleStateId:所给的关键字
 * @returns 对象
*/
export  async function BottleState_GetObjByBottleStateIdlocalStorage(strBottleStateId: string) {
const strThisFuncName = "GetObjByBottleStateIdlocalStorage";

if (IsNullOrEmpty(strBottleStateId) == true)
{
  const strMsg = Format("参数:[strBottleStateId]不能为空!(In clsBottleStateWApi.GetObjByBottleStateIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strBottleStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBottleStateId]的长度:[{0}]不正确!(clsBottleStateWApi.GetObjByBottleStateIdlocalStorage)", strBottleStateId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsBottleStateEN._CurrTabName, strBottleStateId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objBottleStateCache: clsBottleStateEN = JSON.parse(strTempObj);
return objBottleStateCache;
}
try
{
const objBottleState = await BottleState_GetObjByBottleStateIdAsync(strBottleStateId);
if (objBottleState != null)
{
localStorage.setItem(strKey, JSON.stringify(objBottleState));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objBottleState;
}
return objBottleState;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strBottleStateId, bottleState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strBottleStateId:所给的关键字
 * @returns 对象
*/
export  async function BottleState_GetObjByBottleStateIdCache(strBottleStateId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByBottleStateIdCache";

if (IsNullOrEmpty(strBottleStateId) == true)
{
  const strMsg = Format("参数:[strBottleStateId]不能为空!(In clsBottleStateWApi.GetObjByBottleStateIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strBottleStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBottleStateId]的长度:[{0}]不正确!(clsBottleStateWApi.GetObjByBottleStateIdCache)", strBottleStateId.length);
console.error(strMsg);
throw (strMsg);
}
const arrBottleStateObjLstCache = await BottleState_GetObjLstCache();
try
{
const arrBottleStateSel = arrBottleStateObjLstCache.filter(x => 
 x.bottleStateId == strBottleStateId );
let objBottleState: clsBottleStateEN;
if (arrBottleStateSel.length > 0)
{
objBottleState = arrBottleStateSel[0];
return objBottleState;
}
else
{
if (bolTryAsyncOnce == true)
{
const objBottleStateConst = await BottleState_GetObjByBottleStateIdAsync(strBottleStateId);
if (objBottleStateConst != null)
{
BottleState_ReFreshThisCache();
return objBottleStateConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strBottleStateId, bottleState_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objBottleState:所给的对象
 * @returns 对象
*/
export  async function BottleState_UpdateObjInLstCache(objBottleState: clsBottleStateEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrBottleStateObjLstCache = await BottleState_GetObjLstCache();
const obj = arrBottleStateObjLstCache.find(x => 
x.bottleStateId == objBottleState.bottleStateId);
if (obj != null)
{
objBottleState.bottleStateId = obj.bottleStateId;
ObjectAssign( obj, objBottleState);
}
else
{
arrBottleStateObjLstCache.push(objBottleState);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, bottleState_ConstructorName, strThisFuncName);
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
export  function BottleState_SortFunDefa(a:clsBottleStateEN , b:clsBottleStateEN): number 
{
return a.bottleStateId.localeCompare(b.bottleStateId);
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
export  function BottleState_SortFunDefa2Fld(a:clsBottleStateEN , b:clsBottleStateEN): number 
{
if (a.bottleStateName == b.bottleStateName) return a.bottleStateEnName.localeCompare(b.bottleStateEnName);
else return a.bottleStateName.localeCompare(b.bottleStateName);
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
export  function BottleState_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsBottleStateEN.con_BottleStateId:
return (a: clsBottleStateEN, b: clsBottleStateEN) => {
return a.bottleStateId.localeCompare(b.bottleStateId);
}
case clsBottleStateEN.con_BottleStateName:
return (a: clsBottleStateEN, b: clsBottleStateEN) => {
return a.bottleStateName.localeCompare(b.bottleStateName);
}
case clsBottleStateEN.con_BottleStateEnName:
return (a: clsBottleStateEN, b: clsBottleStateEN) => {
return a.bottleStateEnName.localeCompare(b.bottleStateEnName);
}
case clsBottleStateEN.con_Memo:
return (a: clsBottleStateEN, b: clsBottleStateEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BottleState]中不存在!(in ${ bottleState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsBottleStateEN.con_BottleStateId:
return (a: clsBottleStateEN, b: clsBottleStateEN) => {
return b.bottleStateId.localeCompare(a.bottleStateId);
}
case clsBottleStateEN.con_BottleStateName:
return (a: clsBottleStateEN, b: clsBottleStateEN) => {
return b.bottleStateName.localeCompare(a.bottleStateName);
}
case clsBottleStateEN.con_BottleStateEnName:
return (a: clsBottleStateEN, b: clsBottleStateEN) => {
return b.bottleStateEnName.localeCompare(a.bottleStateEnName);
}
case clsBottleStateEN.con_Memo:
return (a: clsBottleStateEN, b: clsBottleStateEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BottleState]中不存在!(in ${ bottleState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strBottleStateId:所给的关键字
 * @returns 对象
*/
export  async function BottleState_GetNameByBottleStateIdCache(strBottleStateId: string) {

if (IsNullOrEmpty(strBottleStateId) == true)
{
  const strMsg = Format("参数:[strBottleStateId]不能为空!(In clsBottleStateWApi.GetNameByBottleStateIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strBottleStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBottleStateId]的长度:[{0}]不正确!(clsBottleStateWApi.GetNameByBottleStateIdCache)", strBottleStateId.length);
console.error(strMsg);
throw (strMsg);
}
const arrBottleStateObjLstCache = await BottleState_GetObjLstCache();
if (arrBottleStateObjLstCache == null) return "";
try
{
const arrBottleStateSel = arrBottleStateObjLstCache.filter(x => 
 x.bottleStateId == strBottleStateId );
let objBottleState: clsBottleStateEN;
if (arrBottleStateSel.length > 0)
{
objBottleState = arrBottleStateSel[0];
return objBottleState.bottleStateName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strBottleStateId);
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
export  async function BottleState_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsBottleStateEN.con_BottleStateId:
return (obj: clsBottleStateEN) => {
return obj.bottleStateId === value;
}
case clsBottleStateEN.con_BottleStateName:
return (obj: clsBottleStateEN) => {
return obj.bottleStateName === value;
}
case clsBottleStateEN.con_BottleStateEnName:
return (obj: clsBottleStateEN) => {
return obj.bottleStateEnName === value;
}
case clsBottleStateEN.con_Memo:
return (obj: clsBottleStateEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BottleState]中不存在!(in ${ bottleState_ConstructorName}.${ strThisFuncName})`;
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
export  async function BottleState_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsBottleStateEN.con_BottleStateId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsBottleStateEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsBottleStateEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strBottleStateId = strInValue;
if (IsNullOrEmpty(strBottleStateId) == true)
{
return "";
}
const objBottleState = await BottleState_GetObjByBottleStateIdCache(strBottleStateId );
if (objBottleState == null) return "";
if (objBottleState.GetFldValue(strOutFldName) == null) return "";
return objBottleState.GetFldValue(strOutFldName).toString();
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
export  async function BottleState_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsBottleStateEN.con_BottleStateId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrBottleState = await BottleState_GetObjLstCache();
if (arrBottleState == null) return [];
let arrBottleStateSel = arrBottleState;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrBottleStateSel = arrBottleStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrBottleStateSel.length == 0) return [];
return arrBottleStateSel.map(x=>x.bottleStateId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BottleState_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_GetFirstObjAsync(strWhereCond: string): Promise<clsBottleStateEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const objBottleState = BottleState_GetObjFromJsonObj(returnObj);
return objBottleState;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBottleStateEN._CurrTabName;
if (IsNullOrEmpty(clsBottleStateEN.WhereFormat) == false)
{
strWhereCond = clsBottleStateEN.WhereFormat;
}
if (IsNullOrEmpty(clsBottleStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBottleStateEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrBottleStateExObjLstCache: Array<clsBottleStateEN> = CacheHelper.Get(strKey);
const arrBottleStateObjLstT = BottleState_GetObjLstByJSONObjLst(arrBottleStateExObjLstCache);
return arrBottleStateObjLstT;
}
try
{
const arrBottleStateExObjLst = await BottleState_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrBottleStateExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBottleStateExObjLst.length);
console.log(strInfo);
return arrBottleStateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, bottleState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BottleState_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBottleStateEN._CurrTabName;
if (IsNullOrEmpty(clsBottleStateEN.WhereFormat) == false)
{
strWhereCond = clsBottleStateEN.WhereFormat;
}
if (IsNullOrEmpty(clsBottleStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBottleStateEN.CacheAddiCondition);
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
const arrBottleStateExObjLstCache: Array<clsBottleStateEN> = JSON.parse(strTempObjLst);
const arrBottleStateObjLstT = BottleState_GetObjLstByJSONObjLst(arrBottleStateExObjLstCache);
return arrBottleStateObjLstT;
}
try
{
const arrBottleStateExObjLst = await BottleState_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrBottleStateExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBottleStateExObjLst.length);
console.log(strInfo);
return arrBottleStateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, bottleState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BottleState_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsBottleStateEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrBottleStateObjLstCache: Array<clsBottleStateEN> = JSON.parse(strTempObjLst);
return arrBottleStateObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function BottleState_GetObjLstAsync(strWhereCond: string): Promise<Array<clsBottleStateEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bottleState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BottleState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBottleStateEN._CurrTabName;
if (IsNullOrEmpty(clsBottleStateEN.WhereFormat) == false)
{
strWhereCond = clsBottleStateEN.WhereFormat;
}
if (IsNullOrEmpty(clsBottleStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBottleStateEN.CacheAddiCondition);
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
const arrBottleStateExObjLstCache: Array<clsBottleStateEN> = JSON.parse(strTempObjLst);
const arrBottleStateObjLstT = BottleState_GetObjLstByJSONObjLst(arrBottleStateExObjLstCache);
return arrBottleStateObjLstT;
}
try
{
const arrBottleStateExObjLst = await BottleState_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrBottleStateExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBottleStateExObjLst.length);
console.log(strInfo);
return arrBottleStateExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, bottleState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BottleState_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsBottleStateEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrBottleStateObjLstCache: Array<clsBottleStateEN> = JSON.parse(strTempObjLst);
return arrBottleStateObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BottleState_GetObjLstCache(): Promise<Array<clsBottleStateEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrBottleStateObjLstCache;
switch (clsBottleStateEN.CacheModeId)
{
case "04"://sessionStorage
arrBottleStateObjLstCache = await BottleState_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrBottleStateObjLstCache = await BottleState_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrBottleStateObjLstCache = await BottleState_GetObjLstClientCache();
break;
default:
arrBottleStateObjLstCache = await BottleState_GetObjLstClientCache();
break;
}
return arrBottleStateObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BottleState_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrBottleStateObjLstCache;
switch (clsBottleStateEN.CacheModeId)
{
case "04"://sessionStorage
arrBottleStateObjLstCache = await BottleState_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrBottleStateObjLstCache = await BottleState_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrBottleStateObjLstCache = null;
break;
default:
arrBottleStateObjLstCache = null;
break;
}
return arrBottleStateObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrBottleStateIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function BottleState_GetSubObjLstCache(objBottleStateCond: clsBottleStateEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrBottleStateObjLstCache = await BottleState_GetObjLstCache();
let arrBottleStateSel = arrBottleStateObjLstCache;
if (objBottleStateCond.sfFldComparisonOp == null || objBottleStateCond.sfFldComparisonOp == "") return arrBottleStateSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBottleStateCond.sfFldComparisonOp);
//console.log("clsBottleStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBottleStateCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBottleStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrBottleStateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objBottleStateCond), bottleState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsBottleStateEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrBottleStateId:关键字列表
 * @returns 对象列表
 **/
export  async function BottleState_GetObjLstByBottleStateIdLstAsync(arrBottleStateId: Array<string>): Promise<Array<clsBottleStateEN>>  
{
const strThisFuncName = "GetObjLstByBottleStateIdLstAsync";
const strAction = "GetObjLstByBottleStateIdLst";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBottleStateId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bottleState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BottleState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param arrstrBottleStateIdLst:关键字列表
 * @returns 对象列表
*/
export  async function BottleState_GetObjLstByBottleStateIdLstCache(arrBottleStateIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByBottleStateIdLstCache";
try
{
const arrBottleStateObjLstCache = await BottleState_GetObjLstCache();
const arrBottleStateSel = arrBottleStateObjLstCache.filter(x => arrBottleStateIdLst.indexOf(x.bottleStateId)>-1);
return arrBottleStateSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrBottleStateIdLst.join(","), bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsBottleStateEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bottleState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BottleState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsBottleStateEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bottleState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BottleState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsBottleStateEN>();
const arrBottleStateObjLstCache = await BottleState_GetObjLstCache();
if (arrBottleStateObjLstCache.length == 0) return arrBottleStateObjLstCache;
let arrBottleStateSel = arrBottleStateObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objBottleStateCond = new clsBottleStateEN();
ObjectAssign(objBottleStateCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsBottleStateWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBottleStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrBottleStateSel = arrBottleStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrBottleStateSel.length == 0) return arrBottleStateSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrBottleStateSel = arrBottleStateSel.sort(BottleState_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrBottleStateSel = arrBottleStateSel.sort(objPagerPara.sortFun);
}
arrBottleStateSel = arrBottleStateSel.slice(intStart, intEnd);     
return arrBottleStateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, bottleState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsBottleStateEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function BottleState_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsBottleStateEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsBottleStateEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bottleState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BottleState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param strBottleStateId:关键字
 * @returns 获取删除的结果
 **/
export  async function BottleState_DelRecordAsync(strBottleStateId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(bottleState_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strBottleStateId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param arrBottleStateId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function BottleState_DelBottleStatesAsync(arrBottleStateId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelBottleStatesAsync";
const strAction = "DelBottleStates";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBottleStateId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_DelBottleStatesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelBottleStatesByCondAsync";
const strAction = "DelBottleStatesByCond";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param objBottleStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BottleState_AddNewRecordAsync(objBottleStateEN: clsBottleStateEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objBottleStateEN.bottleStateId === null || objBottleStateEN.bottleStateId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objBottleStateEN);
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param objBottleStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BottleState_AddNewRecordWithMaxIdAsync(objBottleStateEN: clsBottleStateEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_AddNewObjSave(objBottleStateEN: clsBottleStateEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
BottleState_CheckPropertyNew(objBottleStateEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ bottleState_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await BottleState_IsExistAsync(objBottleStateEN.bottleStateId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objBottleStateEN.bottleStateId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await BottleState_AddNewRecordAsync(objBottleStateEN);
if (returnBool == true)
{
BottleState_ReFreshCache();
}
else
{
const strInfo = `添加[瓶子状态(BottleState)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objBottleStateEN.bottleStateId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ bottleState_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function BottleState_UpdateObjSave(objBottleStateEN: clsBottleStateEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objBottleStateEN.sfUpdFldSetStr = objBottleStateEN.updFldString;//设置哪些字段被修改(脏字段)
if (objBottleStateEN.bottleStateId == "" || objBottleStateEN.bottleStateId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
BottleState_CheckProperty4Update(objBottleStateEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ bottleState_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await BottleState_UpdateRecordAsync(objBottleStateEN);
if (returnBool == true)
{
BottleState_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ bottleState_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objBottleStateEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function BottleState_AddNewRecordWithReturnKeyAsync(objBottleStateEN: clsBottleStateEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param objBottleStateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BottleState_UpdateRecordAsync(objBottleStateEN: clsBottleStateEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objBottleStateEN.sfUpdFldSetStr === undefined || objBottleStateEN.sfUpdFldSetStr === null || objBottleStateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBottleStateEN.bottleStateId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param objBottleStateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BottleState_EditRecordExAsync(objBottleStateEN: clsBottleStateEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objBottleStateEN.sfUpdFldSetStr === undefined || objBottleStateEN.sfUpdFldSetStr === null || objBottleStateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBottleStateEN.bottleStateId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param objBottleStateEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BottleState_UpdateWithConditionAsync(objBottleStateEN: clsBottleStateEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objBottleStateEN.sfUpdFldSetStr === undefined || objBottleStateEN.sfUpdFldSetStr === null || objBottleStateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBottleStateEN.bottleStateId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);
objBottleStateEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param objstrBottleStateIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function BottleState_IsExistRecordCache(objBottleStateCond: clsBottleStateEN) {
const strThisFuncName = "IsExistRecordCache";
const arrBottleStateObjLstCache = await BottleState_GetObjLstCache();
if (arrBottleStateObjLstCache == null) return false;
let arrBottleStateSel = arrBottleStateObjLstCache;
if (objBottleStateCond.sfFldComparisonOp == null || objBottleStateCond.sfFldComparisonOp == "") return arrBottleStateSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBottleStateCond.sfFldComparisonOp);
//console.log("clsBottleStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBottleStateCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBottleStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrBottleStateSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objBottleStateCond), bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param strBottleStateId:所给的关键字
 * @returns 对象
*/
export  async function BottleState_IsExistCache(strBottleStateId:string) {
const strThisFuncName = "IsExistCache";
const arrBottleStateObjLstCache = await BottleState_GetObjLstCache();
if (arrBottleStateObjLstCache == null) return false;
try
{
const arrBottleStateSel = arrBottleStateObjLstCache.filter(x => x.bottleStateId == strBottleStateId);
if (arrBottleStateSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strBottleStateId, bottleState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strBottleStateId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function BottleState_IsExistAsync(strBottleStateId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBottleStateId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
 * @param objBottleStateCond:条件对象
 * @returns 对象列表记录数
*/
export  async function BottleState_GetRecCountByCondCache(objBottleStateCond: clsBottleStateEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrBottleStateObjLstCache = await BottleState_GetObjLstCache();
if (arrBottleStateObjLstCache == null) return 0;
let arrBottleStateSel = arrBottleStateObjLstCache;
if (objBottleStateCond.sfFldComparisonOp == null || objBottleStateCond.sfFldComparisonOp == "") return arrBottleStateSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBottleStateCond.sfFldComparisonOp);
//console.log("clsBottleStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBottleStateCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBottleStateCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrBottleStateSel = arrBottleStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBottleStateSel = arrBottleStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrBottleStateSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objBottleStateCond), bottleState_ConstructorName, strThisFuncName);
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
export  async function BottleState_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(bottleState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleState_ConstructorName, strThisFuncName);
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
export  function BottleState_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function BottleState_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsBottleStateEN._CurrTabName;
switch (clsBottleStateEN.CacheModeId)
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
clsBottleStateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function BottleState_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsBottleStateEN._CurrTabName;
switch (clsBottleStateEN.CacheModeId)
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
clsBottleStateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function BottleState_GetLastRefreshTime():string
{
if (clsBottleStateEN._RefreshTimeLst.length == 0) return "";
return clsBottleStateEN._RefreshTimeLst[clsBottleStateEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function BottleState_BindDdl_BottleStateIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_BottleStateIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_BottleStateIdInDivCache");
const arrObjLstSel = await BottleState_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsBottleStateEN.con_BottleStateId, clsBottleStateEN.con_BottleStateName, "瓶子状态...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function BottleState_GetArrBottleState()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_BottleStateIdInDivCache");
const arrBottleState = new Array<clsBottleStateEN>();
const arrObjLstSel = await BottleState_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsBottleStateEN();
obj0.bottleStateId = '0';
obj0.bottleStateName = '选瓶子状态...';
arrBottleState.push(obj0);
arrObjLstSel.forEach(x => arrBottleState.push(x));
return arrBottleState;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BottleState_CheckPropertyNew(pobjBottleStateEN: clsBottleStateEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateName) === true )
{
 throw new Error(`(errid:Watl000411)字段[瓶子状态名]不能为空(In 瓶子状态)!(clsBottleStateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateEnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[瓶子状态名]不能为空(In 瓶子状态)!(clsBottleStateBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateId) == false && GetStrLen(pobjBottleStateEN.bottleStateId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[瓶子状态Id(bottleStateId)]的长度不能超过2(In 瓶子状态(BottleState))!值:${pobjBottleStateEN.bottleStateId}(clsBottleStateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateName) == false && GetStrLen(pobjBottleStateEN.bottleStateName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[瓶子状态名(bottleStateName)]的长度不能超过30(In 瓶子状态(BottleState))!值:${pobjBottleStateEN.bottleStateName}(clsBottleStateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateEnName) == false && GetStrLen(pobjBottleStateEN.bottleStateEnName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[瓶子状态名(bottleStateEnName)]的长度不能超过30(In 瓶子状态(BottleState))!值:${pobjBottleStateEN.bottleStateEnName}(clsBottleStateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.memo) == false && GetStrLen(pobjBottleStateEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 瓶子状态(BottleState))!值:${pobjBottleStateEN.memo}(clsBottleStateBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateId) == false && undefined !== pobjBottleStateEN.bottleStateId && tzDataType.isString(pobjBottleStateEN.bottleStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[瓶子状态Id(bottleStateId)]的值:[${pobjBottleStateEN.bottleStateId}], 非法,应该为字符型(In 瓶子状态(BottleState))!(clsBottleStateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateName) == false && undefined !== pobjBottleStateEN.bottleStateName && tzDataType.isString(pobjBottleStateEN.bottleStateName) === false)
{
 throw new Error(`(errid:Watl000414)字段[瓶子状态名(bottleStateName)]的值:[${pobjBottleStateEN.bottleStateName}], 非法,应该为字符型(In 瓶子状态(BottleState))!(clsBottleStateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateEnName) == false && undefined !== pobjBottleStateEN.bottleStateEnName && tzDataType.isString(pobjBottleStateEN.bottleStateEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[瓶子状态名(bottleStateEnName)]的值:[${pobjBottleStateEN.bottleStateEnName}], 非法,应该为字符型(In 瓶子状态(BottleState))!(clsBottleStateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.memo) == false && undefined !== pobjBottleStateEN.memo && tzDataType.isString(pobjBottleStateEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjBottleStateEN.memo}], 非法,应该为字符型(In 瓶子状态(BottleState))!(clsBottleStateBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BottleState_CheckProperty4Update(pobjBottleStateEN: clsBottleStateEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateId) == false && GetStrLen(pobjBottleStateEN.bottleStateId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[瓶子状态Id(bottleStateId)]的长度不能超过2(In 瓶子状态(BottleState))!值:${pobjBottleStateEN.bottleStateId}(clsBottleStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateName) == false && GetStrLen(pobjBottleStateEN.bottleStateName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[瓶子状态名(bottleStateName)]的长度不能超过30(In 瓶子状态(BottleState))!值:${pobjBottleStateEN.bottleStateName}(clsBottleStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateEnName) == false && GetStrLen(pobjBottleStateEN.bottleStateEnName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[瓶子状态名(bottleStateEnName)]的长度不能超过30(In 瓶子状态(BottleState))!值:${pobjBottleStateEN.bottleStateEnName}(clsBottleStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.memo) == false && GetStrLen(pobjBottleStateEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 瓶子状态(BottleState))!值:${pobjBottleStateEN.memo}(clsBottleStateBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateId) == false && undefined !== pobjBottleStateEN.bottleStateId && tzDataType.isString(pobjBottleStateEN.bottleStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[瓶子状态Id(bottleStateId)]的值:[${pobjBottleStateEN.bottleStateId}], 非法,应该为字符型(In 瓶子状态(BottleState))!(clsBottleStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateName) == false && undefined !== pobjBottleStateEN.bottleStateName && tzDataType.isString(pobjBottleStateEN.bottleStateName) === false)
{
 throw new Error(`(errid:Watl000417)字段[瓶子状态名(bottleStateName)]的值:[${pobjBottleStateEN.bottleStateName}], 非法,应该为字符型(In 瓶子状态(BottleState))!(clsBottleStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateEnName) == false && undefined !== pobjBottleStateEN.bottleStateEnName && tzDataType.isString(pobjBottleStateEN.bottleStateEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[瓶子状态名(bottleStateEnName)]的值:[${pobjBottleStateEN.bottleStateEnName}], 非法,应该为字符型(In 瓶子状态(BottleState))!(clsBottleStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleStateEN.memo) == false && undefined !== pobjBottleStateEN.memo && tzDataType.isString(pobjBottleStateEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjBottleStateEN.memo}], 非法,应该为字符型(In 瓶子状态(BottleState))!(clsBottleStateBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjBottleStateEN.bottleStateId) === true 
 || pobjBottleStateEN.bottleStateId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[瓶子状态Id]不能为空(In 瓶子状态)!(clsBottleStateBL:CheckProperty4Update)`);
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
export  function BottleState_GetJSONStrByObj (pobjBottleStateEN: clsBottleStateEN): string
{
pobjBottleStateEN.sfUpdFldSetStr = pobjBottleStateEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjBottleStateEN);
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
export  function BottleState_GetObjLstByJSONStr (strJSON: string): Array<clsBottleStateEN>
{
let arrBottleStateObjLst = new Array<clsBottleStateEN>();
if (strJSON === "")
{
return arrBottleStateObjLst;
}
try
{
arrBottleStateObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrBottleStateObjLst;
}
return arrBottleStateObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrBottleStateObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function BottleState_GetObjLstByJSONObjLst (arrBottleStateObjLstS: Array<clsBottleStateEN>): Array<clsBottleStateEN>
{
const arrBottleStateObjLst = new Array<clsBottleStateEN>();
for (const objInFor of arrBottleStateObjLstS) {
const obj1 = BottleState_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrBottleStateObjLst.push(obj1);
}
return arrBottleStateObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function BottleState_GetObjByJSONStr (strJSON: string): clsBottleStateEN
{
let pobjBottleStateEN = new clsBottleStateEN();
if (strJSON === "")
{
return pobjBottleStateEN;
}
try
{
pobjBottleStateEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjBottleStateEN;
}
return pobjBottleStateEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function BottleState_GetCombineCondition(objBottleStateCond: clsBottleStateEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objBottleStateCond.dicFldComparisonOp, clsBottleStateEN.con_BottleStateId) == true)
{
const strComparisonOpBottleStateId:string = objBottleStateCond.dicFldComparisonOp[clsBottleStateEN.con_BottleStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsBottleStateEN.con_BottleStateId, objBottleStateCond.bottleStateId, strComparisonOpBottleStateId);
}
if (Object.prototype.hasOwnProperty.call(objBottleStateCond.dicFldComparisonOp, clsBottleStateEN.con_BottleStateName) == true)
{
const strComparisonOpBottleStateName:string = objBottleStateCond.dicFldComparisonOp[clsBottleStateEN.con_BottleStateName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBottleStateEN.con_BottleStateName, objBottleStateCond.bottleStateName, strComparisonOpBottleStateName);
}
if (Object.prototype.hasOwnProperty.call(objBottleStateCond.dicFldComparisonOp, clsBottleStateEN.con_BottleStateEnName) == true)
{
const strComparisonOpBottleStateEnName:string = objBottleStateCond.dicFldComparisonOp[clsBottleStateEN.con_BottleStateEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBottleStateEN.con_BottleStateEnName, objBottleStateCond.bottleStateEnName, strComparisonOpBottleStateEnName);
}
if (Object.prototype.hasOwnProperty.call(objBottleStateCond.dicFldComparisonOp, clsBottleStateEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objBottleStateCond.dicFldComparisonOp[clsBottleStateEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsBottleStateEN.con_Memo, objBottleStateCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objBottleStateENS:源对象
 * @param objBottleStateENT:目标对象
*/
export  function BottleState_CopyObjTo(objBottleStateENS: clsBottleStateEN , objBottleStateENT: clsBottleStateEN ): void 
{
objBottleStateENT.bottleStateId = objBottleStateENS.bottleStateId; //瓶子状态Id
objBottleStateENT.bottleStateName = objBottleStateENS.bottleStateName; //瓶子状态名
objBottleStateENT.bottleStateEnName = objBottleStateENS.bottleStateEnName; //瓶子状态名
objBottleStateENT.memo = objBottleStateENS.memo; //备注
objBottleStateENT.sfUpdFldSetStr = objBottleStateENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objBottleStateENS:源对象
 * @param objBottleStateENT:目标对象
*/
export  function BottleState_GetObjFromJsonObj(objBottleStateENS: clsBottleStateEN): clsBottleStateEN 
{
 const objBottleStateENT: clsBottleStateEN = new clsBottleStateEN();
ObjectAssign(objBottleStateENT, objBottleStateENS);
 return objBottleStateENT;
}