
 /**
 * 类名:clsFuncModuleWApi
 * 表名:FuncModule(01120121)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:04
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数管理(SysParaMan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 功能模块(FuncModule)
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
import { clsFuncModuleEN } from "@/ts/L0Entity/SysParaMan/clsFuncModuleEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const funcModule_Controller = "FuncModuleApi";
 export const funcModule_ConstructorName = "funcModule";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncModuleId:关键字
 * @returns 对象
 **/
export  async function FuncModule_GetObjByFuncModuleIdAsync(strFuncModuleId: string): Promise<clsFuncModuleEN|null>  
{
const strThisFuncName = "GetObjByFuncModuleIdAsync";

if (IsNullOrEmpty(strFuncModuleId) == true)
{
  const strMsg = Format("参数:[strFuncModuleId]不能为空!(In clsFuncModuleWApi.GetObjByFuncModuleIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strFuncModuleId.length != 4)
{
const strMsg = Format("缓存分类变量:[strFuncModuleId]的长度:[{0}]不正确!(clsFuncModuleWApi.GetObjByFuncModuleIdAsync)", strFuncModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByFuncModuleId";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFuncModuleId,
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
const objFuncModule = FuncModule_GetObjFromJsonObj(returnObj);
return objFuncModule;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param strFuncModuleId:所给的关键字
 * @returns 对象
*/
export  async function FuncModule_GetObjByFuncModuleIdlocalStorage(strFuncModuleId: string) {
const strThisFuncName = "GetObjByFuncModuleIdlocalStorage";

if (IsNullOrEmpty(strFuncModuleId) == true)
{
  const strMsg = Format("参数:[strFuncModuleId]不能为空!(In clsFuncModuleWApi.GetObjByFuncModuleIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strFuncModuleId.length != 4)
{
const strMsg = Format("缓存分类变量:[strFuncModuleId]的长度:[{0}]不正确!(clsFuncModuleWApi.GetObjByFuncModuleIdlocalStorage)", strFuncModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsFuncModuleEN._CurrTabName, strFuncModuleId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objFuncModuleCache: clsFuncModuleEN = JSON.parse(strTempObj);
return objFuncModuleCache;
}
try
{
const objFuncModule = await FuncModule_GetObjByFuncModuleIdAsync(strFuncModuleId);
if (objFuncModule != null)
{
localStorage.setItem(strKey, JSON.stringify(objFuncModule));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objFuncModule;
}
return objFuncModule;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strFuncModuleId, funcModule_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strFuncModuleId:所给的关键字
 * @returns 对象
*/
export  async function FuncModule_GetObjByFuncModuleIdCache(strFuncModuleId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByFuncModuleIdCache";

if (IsNullOrEmpty(strFuncModuleId) == true)
{
  const strMsg = Format("参数:[strFuncModuleId]不能为空!(In clsFuncModuleWApi.GetObjByFuncModuleIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strFuncModuleId.length != 4)
{
const strMsg = Format("缓存分类变量:[strFuncModuleId]的长度:[{0}]不正确!(clsFuncModuleWApi.GetObjByFuncModuleIdCache)", strFuncModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const arrFuncModuleObjLstCache = await FuncModule_GetObjLstCache();
try
{
const arrFuncModuleSel = arrFuncModuleObjLstCache.filter(x => 
 x.funcModuleId == strFuncModuleId );
let objFuncModule: clsFuncModuleEN;
if (arrFuncModuleSel.length > 0)
{
objFuncModule = arrFuncModuleSel[0];
return objFuncModule;
}
else
{
if (bolTryAsyncOnce == true)
{
const objFuncModuleConst = await FuncModule_GetObjByFuncModuleIdAsync(strFuncModuleId);
if (objFuncModuleConst != null)
{
FuncModule_ReFreshThisCache();
return objFuncModuleConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strFuncModuleId, funcModule_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objFuncModule:所给的对象
 * @returns 对象
*/
export  async function FuncModule_UpdateObjInLstCache(objFuncModule: clsFuncModuleEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrFuncModuleObjLstCache = await FuncModule_GetObjLstCache();
const obj = arrFuncModuleObjLstCache.find(x => 
x.funcModuleId == objFuncModule.funcModuleId);
if (obj != null)
{
objFuncModule.funcModuleId = obj.funcModuleId;
ObjectAssign( obj, objFuncModule);
}
else
{
arrFuncModuleObjLstCache.push(objFuncModule);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, funcModule_ConstructorName, strThisFuncName);
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
export  function FuncModule_SortFunDefa(a:clsFuncModuleEN , b:clsFuncModuleEN): number 
{
return a.funcModuleId.localeCompare(b.funcModuleId);
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
export  function FuncModule_SortFunDefa2Fld(a:clsFuncModuleEN , b:clsFuncModuleEN): number 
{
if (a.funcModuleName == b.funcModuleName) return a.funcModuleNameSim.localeCompare(b.funcModuleNameSim);
else return a.funcModuleName.localeCompare(b.funcModuleName);
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
export  function FuncModule_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsFuncModuleEN.con_FuncModuleId:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
return a.funcModuleId.localeCompare(b.funcModuleId);
}
case clsFuncModuleEN.con_FuncModuleName:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
return a.funcModuleName.localeCompare(b.funcModuleName);
}
case clsFuncModuleEN.con_FuncModuleNameSim:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (a.funcModuleNameSim == null) return -1;
if (b.funcModuleNameSim == null) return 1;
return a.funcModuleNameSim.localeCompare(b.funcModuleNameSim);
}
case clsFuncModuleEN.con_Memo:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsFuncModuleEN.con_UpdDate:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsFuncModuleEN.con_UpdUser:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsFuncModuleEN.con_OrderNum:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
return a.orderNum-b.orderNum;
}
case clsFuncModuleEN.con_PrjId:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (a.prjId == null) return -1;
if (b.prjId == null) return 1;
return a.prjId.localeCompare(b.prjId);
}
case clsFuncModuleEN.con_FuncModuleEnName:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (a.funcModuleEnName == null) return -1;
if (b.funcModuleEnName == null) return 1;
return a.funcModuleEnName.localeCompare(b.funcModuleEnName);
}
case clsFuncModuleEN.con_UseStateId:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
return a.useStateId.localeCompare(b.useStateId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FuncModule]中不存在!(in ${ funcModule_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsFuncModuleEN.con_FuncModuleId:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
return b.funcModuleId.localeCompare(a.funcModuleId);
}
case clsFuncModuleEN.con_FuncModuleName:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
return b.funcModuleName.localeCompare(a.funcModuleName);
}
case clsFuncModuleEN.con_FuncModuleNameSim:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (b.funcModuleNameSim == null) return -1;
if (a.funcModuleNameSim == null) return 1;
return b.funcModuleNameSim.localeCompare(a.funcModuleNameSim);
}
case clsFuncModuleEN.con_Memo:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsFuncModuleEN.con_UpdDate:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsFuncModuleEN.con_UpdUser:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsFuncModuleEN.con_OrderNum:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
return b.orderNum-a.orderNum;
}
case clsFuncModuleEN.con_PrjId:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (b.prjId == null) return -1;
if (a.prjId == null) return 1;
return b.prjId.localeCompare(a.prjId);
}
case clsFuncModuleEN.con_FuncModuleEnName:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
if (b.funcModuleEnName == null) return -1;
if (a.funcModuleEnName == null) return 1;
return b.funcModuleEnName.localeCompare(a.funcModuleEnName);
}
case clsFuncModuleEN.con_UseStateId:
return (a: clsFuncModuleEN, b: clsFuncModuleEN) => {
return b.useStateId.localeCompare(a.useStateId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FuncModule]中不存在!(in ${ funcModule_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFuncModuleId:所给的关键字
 * @returns 对象
*/
export  async function FuncModule_GetNameByFuncModuleIdCache(strFuncModuleId: string) {

if (IsNullOrEmpty(strFuncModuleId) == true)
{
  const strMsg = Format("参数:[strFuncModuleId]不能为空!(In clsFuncModuleWApi.GetNameByFuncModuleIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strFuncModuleId.length != 4)
{
const strMsg = Format("缓存分类变量:[strFuncModuleId]的长度:[{0}]不正确!(clsFuncModuleWApi.GetNameByFuncModuleIdCache)", strFuncModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const arrFuncModuleObjLstCache = await FuncModule_GetObjLstCache();
if (arrFuncModuleObjLstCache == null) return "";
try
{
const arrFuncModuleSel = arrFuncModuleObjLstCache.filter(x => 
 x.funcModuleId == strFuncModuleId );
let objFuncModule: clsFuncModuleEN;
if (arrFuncModuleSel.length > 0)
{
objFuncModule = arrFuncModuleSel[0];
return objFuncModule.funcModuleName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strFuncModuleId);
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
export  async function FuncModule_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsFuncModuleEN.con_FuncModuleId:
return (obj: clsFuncModuleEN) => {
return obj.funcModuleId === value;
}
case clsFuncModuleEN.con_FuncModuleName:
return (obj: clsFuncModuleEN) => {
return obj.funcModuleName === value;
}
case clsFuncModuleEN.con_FuncModuleNameSim:
return (obj: clsFuncModuleEN) => {
return obj.funcModuleNameSim === value;
}
case clsFuncModuleEN.con_Memo:
return (obj: clsFuncModuleEN) => {
return obj.memo === value;
}
case clsFuncModuleEN.con_UpdDate:
return (obj: clsFuncModuleEN) => {
return obj.updDate === value;
}
case clsFuncModuleEN.con_UpdUser:
return (obj: clsFuncModuleEN) => {
return obj.updUser === value;
}
case clsFuncModuleEN.con_OrderNum:
return (obj: clsFuncModuleEN) => {
return obj.orderNum === value;
}
case clsFuncModuleEN.con_PrjId:
return (obj: clsFuncModuleEN) => {
return obj.prjId === value;
}
case clsFuncModuleEN.con_FuncModuleEnName:
return (obj: clsFuncModuleEN) => {
return obj.funcModuleEnName === value;
}
case clsFuncModuleEN.con_UseStateId:
return (obj: clsFuncModuleEN) => {
return obj.useStateId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[FuncModule]中不存在!(in ${ funcModule_ConstructorName}.${ strThisFuncName})`;
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
export  async function FuncModule_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsFuncModuleEN.con_FuncModuleId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsFuncModuleEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsFuncModuleEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strFuncModuleId = strInValue;
if (IsNullOrEmpty(strFuncModuleId) == true)
{
return "";
}
const objFuncModule = await FuncModule_GetObjByFuncModuleIdCache(strFuncModuleId );
if (objFuncModule == null) return "";
if (objFuncModule.GetFldValue(strOutFldName) == null) return "";
return objFuncModule.GetFldValue(strOutFldName).toString();
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
export  async function FuncModule_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsFuncModuleEN.con_FuncModuleId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrFuncModule = await FuncModule_GetObjLstCache();
if (arrFuncModule == null) return [];
let arrFuncModuleSel = arrFuncModule;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrFuncModuleSel = arrFuncModuleSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrFuncModuleSel.length == 0) return [];
return arrFuncModuleSel.map(x=>x.funcModuleId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function FuncModule_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_GetFirstObjAsync(strWhereCond: string): Promise<clsFuncModuleEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const objFuncModule = FuncModule_GetObjFromJsonObj(returnObj);
return objFuncModule;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsFuncModuleEN._CurrTabName;
if (IsNullOrEmpty(clsFuncModuleEN.WhereFormat) == false)
{
strWhereCond = clsFuncModuleEN.WhereFormat;
}
if (IsNullOrEmpty(clsFuncModuleEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsFuncModuleEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrFuncModuleExObjLstCache: Array<clsFuncModuleEN> = CacheHelper.Get(strKey);
const arrFuncModuleObjLstT = FuncModule_GetObjLstByJSONObjLst(arrFuncModuleExObjLstCache);
return arrFuncModuleObjLstT;
}
try
{
const arrFuncModuleExObjLst = await FuncModule_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrFuncModuleExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrFuncModuleExObjLst.length);
console.log(strInfo);
return arrFuncModuleExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, funcModule_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function FuncModule_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsFuncModuleEN._CurrTabName;
if (IsNullOrEmpty(clsFuncModuleEN.WhereFormat) == false)
{
strWhereCond = clsFuncModuleEN.WhereFormat;
}
if (IsNullOrEmpty(clsFuncModuleEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsFuncModuleEN.CacheAddiCondition);
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
const arrFuncModuleExObjLstCache: Array<clsFuncModuleEN> = JSON.parse(strTempObjLst);
const arrFuncModuleObjLstT = FuncModule_GetObjLstByJSONObjLst(arrFuncModuleExObjLstCache);
return arrFuncModuleObjLstT;
}
try
{
const arrFuncModuleExObjLst = await FuncModule_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrFuncModuleExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrFuncModuleExObjLst.length);
console.log(strInfo);
return arrFuncModuleExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, funcModule_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function FuncModule_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsFuncModuleEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrFuncModuleObjLstCache: Array<clsFuncModuleEN> = JSON.parse(strTempObjLst);
return arrFuncModuleObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function FuncModule_GetObjLstAsync(strWhereCond: string): Promise<Array<clsFuncModuleEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", funcModule_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FuncModule_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsFuncModuleEN._CurrTabName;
if (IsNullOrEmpty(clsFuncModuleEN.WhereFormat) == false)
{
strWhereCond = clsFuncModuleEN.WhereFormat;
}
if (IsNullOrEmpty(clsFuncModuleEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsFuncModuleEN.CacheAddiCondition);
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
const arrFuncModuleExObjLstCache: Array<clsFuncModuleEN> = JSON.parse(strTempObjLst);
const arrFuncModuleObjLstT = FuncModule_GetObjLstByJSONObjLst(arrFuncModuleExObjLstCache);
return arrFuncModuleObjLstT;
}
try
{
const arrFuncModuleExObjLst = await FuncModule_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrFuncModuleExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrFuncModuleExObjLst.length);
console.log(strInfo);
return arrFuncModuleExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, funcModule_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function FuncModule_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsFuncModuleEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrFuncModuleObjLstCache: Array<clsFuncModuleEN> = JSON.parse(strTempObjLst);
return arrFuncModuleObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function FuncModule_GetObjLstCache(): Promise<Array<clsFuncModuleEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrFuncModuleObjLstCache;
switch (clsFuncModuleEN.CacheModeId)
{
case "04"://sessionStorage
arrFuncModuleObjLstCache = await FuncModule_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrFuncModuleObjLstCache = await FuncModule_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrFuncModuleObjLstCache = await FuncModule_GetObjLstClientCache();
break;
default:
arrFuncModuleObjLstCache = await FuncModule_GetObjLstClientCache();
break;
}
return arrFuncModuleObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function FuncModule_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrFuncModuleObjLstCache;
switch (clsFuncModuleEN.CacheModeId)
{
case "04"://sessionStorage
arrFuncModuleObjLstCache = await FuncModule_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrFuncModuleObjLstCache = await FuncModule_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrFuncModuleObjLstCache = null;
break;
default:
arrFuncModuleObjLstCache = null;
break;
}
return arrFuncModuleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncModuleIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function FuncModule_GetSubObjLstCache(objFuncModuleCond: clsFuncModuleEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrFuncModuleObjLstCache = await FuncModule_GetObjLstCache();
let arrFuncModuleSel = arrFuncModuleObjLstCache;
if (objFuncModuleCond.sfFldComparisonOp == null || objFuncModuleCond.sfFldComparisonOp == "") return arrFuncModuleSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objFuncModuleCond.sfFldComparisonOp);
//console.log("clsFuncModuleWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objFuncModuleCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objFuncModuleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrFuncModuleSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objFuncModuleCond), funcModule_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsFuncModuleEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncModuleId:关键字列表
 * @returns 对象列表
 **/
export  async function FuncModule_GetObjLstByFuncModuleIdLstAsync(arrFuncModuleId: Array<string>): Promise<Array<clsFuncModuleEN>>  
{
const strThisFuncName = "GetObjLstByFuncModuleIdLstAsync";
const strAction = "GetObjLstByFuncModuleIdLst";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrFuncModuleId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", funcModule_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FuncModule_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param arrstrFuncModuleIdLst:关键字列表
 * @returns 对象列表
*/
export  async function FuncModule_GetObjLstByFuncModuleIdLstCache(arrFuncModuleIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByFuncModuleIdLstCache";
try
{
const arrFuncModuleObjLstCache = await FuncModule_GetObjLstCache();
const arrFuncModuleSel = arrFuncModuleObjLstCache.filter(x => arrFuncModuleIdLst.indexOf(x.funcModuleId)>-1);
return arrFuncModuleSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrFuncModuleIdLst.join(","), funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsFuncModuleEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", funcModule_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FuncModule_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsFuncModuleEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", funcModule_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FuncModule_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsFuncModuleEN>();
const arrFuncModuleObjLstCache = await FuncModule_GetObjLstCache();
if (arrFuncModuleObjLstCache.length == 0) return arrFuncModuleObjLstCache;
let arrFuncModuleSel = arrFuncModuleObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objFuncModuleCond = new clsFuncModuleEN();
ObjectAssign(objFuncModuleCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsFuncModuleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objFuncModuleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrFuncModuleSel = arrFuncModuleSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrFuncModuleSel.length == 0) return arrFuncModuleSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrFuncModuleSel = arrFuncModuleSel.sort(FuncModule_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrFuncModuleSel = arrFuncModuleSel.sort(objPagerPara.sortFun);
}
arrFuncModuleSel = arrFuncModuleSel.slice(intStart, intEnd);     
return arrFuncModuleSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, funcModule_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsFuncModuleEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function FuncModule_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsFuncModuleEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsFuncModuleEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", funcModule_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = FuncModule_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param strFuncModuleId:关键字
 * @returns 获取删除的结果
 **/
export  async function FuncModule_DelRecordAsync(strFuncModuleId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(funcModule_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strFuncModuleId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param arrFuncModuleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function FuncModule_DelFuncModulesAsync(arrFuncModuleId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelFuncModulesAsync";
const strAction = "DelFuncModules";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrFuncModuleId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_DelFuncModulesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelFuncModulesByCondAsync";
const strAction = "DelFuncModulesByCond";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param objFuncModuleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function FuncModule_AddNewRecordAsync(objFuncModuleEN: clsFuncModuleEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objFuncModuleEN.funcModuleId === null || objFuncModuleEN.funcModuleId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objFuncModuleEN);
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFuncModuleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param objFuncModuleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function FuncModule_AddNewRecordWithMaxIdAsync(objFuncModuleEN: clsFuncModuleEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFuncModuleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_AddNewObjSave(objFuncModuleEN: clsFuncModuleEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
FuncModule_CheckPropertyNew(objFuncModuleEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ funcModule_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await FuncModule_IsExistAsync(objFuncModuleEN.funcModuleId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objFuncModuleEN.funcModuleId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await FuncModule_AddNewRecordAsync(objFuncModuleEN);
if (returnBool == true)
{
FuncModule_ReFreshCache();
}
else
{
const strInfo = `添加[功能模块(FuncModule)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objFuncModuleEN.funcModuleId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ funcModule_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function FuncModule_UpdateObjSave(objFuncModuleEN: clsFuncModuleEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objFuncModuleEN.sfUpdFldSetStr = objFuncModuleEN.updFldString;//设置哪些字段被修改(脏字段)
if (objFuncModuleEN.funcModuleId == "" || objFuncModuleEN.funcModuleId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
FuncModule_CheckProperty4Update(objFuncModuleEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ funcModule_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await FuncModule_UpdateRecordAsync(objFuncModuleEN);
if (returnBool == true)
{
FuncModule_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ funcModule_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFuncModuleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function FuncModule_AddNewRecordWithReturnKeyAsync(objFuncModuleEN: clsFuncModuleEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFuncModuleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param objFuncModuleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function FuncModule_UpdateRecordAsync(objFuncModuleEN: clsFuncModuleEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objFuncModuleEN.sfUpdFldSetStr === undefined || objFuncModuleEN.sfUpdFldSetStr === null || objFuncModuleEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objFuncModuleEN.funcModuleId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFuncModuleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param objFuncModuleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function FuncModule_EditRecordExAsync(objFuncModuleEN: clsFuncModuleEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objFuncModuleEN.sfUpdFldSetStr === undefined || objFuncModuleEN.sfUpdFldSetStr === null || objFuncModuleEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objFuncModuleEN.funcModuleId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFuncModuleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param objFuncModuleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function FuncModule_UpdateWithConditionAsync(objFuncModuleEN: clsFuncModuleEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objFuncModuleEN.sfUpdFldSetStr === undefined || objFuncModuleEN.sfUpdFldSetStr === null || objFuncModuleEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objFuncModuleEN.funcModuleId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);
objFuncModuleEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objFuncModuleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param objstrFuncModuleIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function FuncModule_IsExistRecordCache(objFuncModuleCond: clsFuncModuleEN) {
const strThisFuncName = "IsExistRecordCache";
const arrFuncModuleObjLstCache = await FuncModule_GetObjLstCache();
if (arrFuncModuleObjLstCache == null) return false;
let arrFuncModuleSel = arrFuncModuleObjLstCache;
if (objFuncModuleCond.sfFldComparisonOp == null || objFuncModuleCond.sfFldComparisonOp == "") return arrFuncModuleSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objFuncModuleCond.sfFldComparisonOp);
//console.log("clsFuncModuleWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objFuncModuleCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objFuncModuleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrFuncModuleSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objFuncModuleCond), funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param strFuncModuleId:所给的关键字
 * @returns 对象
*/
export  async function FuncModule_IsExistCache(strFuncModuleId:string) {
const strThisFuncName = "IsExistCache";
const arrFuncModuleObjLstCache = await FuncModule_GetObjLstCache();
if (arrFuncModuleObjLstCache == null) return false;
try
{
const arrFuncModuleSel = arrFuncModuleObjLstCache.filter(x => x.funcModuleId == strFuncModuleId);
if (arrFuncModuleSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strFuncModuleId, funcModule_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strFuncModuleId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function FuncModule_IsExistAsync(strFuncModuleId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFuncModuleId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
 * @param objFuncModuleCond:条件对象
 * @returns 对象列表记录数
*/
export  async function FuncModule_GetRecCountByCondCache(objFuncModuleCond: clsFuncModuleEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrFuncModuleObjLstCache = await FuncModule_GetObjLstCache();
if (arrFuncModuleObjLstCache == null) return 0;
let arrFuncModuleSel = arrFuncModuleObjLstCache;
if (objFuncModuleCond.sfFldComparisonOp == null || objFuncModuleCond.sfFldComparisonOp == "") return arrFuncModuleSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objFuncModuleCond.sfFldComparisonOp);
//console.log("clsFuncModuleWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objFuncModuleCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objFuncModuleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrFuncModuleSel = arrFuncModuleSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrFuncModuleSel = arrFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrFuncModuleSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objFuncModuleCond), funcModule_ConstructorName, strThisFuncName);
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
export  async function FuncModule_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(funcModule_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, funcModule_ConstructorName, strThisFuncName);
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
export  function FuncModule_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function FuncModule_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsFuncModuleEN._CurrTabName;
switch (clsFuncModuleEN.CacheModeId)
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
clsFuncModuleEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function FuncModule_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsFuncModuleEN._CurrTabName;
switch (clsFuncModuleEN.CacheModeId)
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
clsFuncModuleEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function FuncModule_GetLastRefreshTime():string
{
if (clsFuncModuleEN._RefreshTimeLst.length == 0) return "";
return clsFuncModuleEN._RefreshTimeLst[clsFuncModuleEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function FuncModule_BindDdl_FuncModuleIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_FuncModuleIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_FuncModuleIdInDivCache");
const arrObjLstSel = await FuncModule_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsFuncModuleEN.con_FuncModuleId, clsFuncModuleEN.con_FuncModuleName, "选模块...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function FuncModule_GetArrFuncModule()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_FuncModuleIdInDivCache");
const arrFuncModule = new Array<clsFuncModuleEN>();
const arrObjLstSel = await FuncModule_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsFuncModuleEN();
obj0.funcModuleId = '0';
obj0.funcModuleName = '选模块...';
arrFuncModule.push(obj0);
arrObjLstSel.forEach(x => arrFuncModule.push(x));
return arrFuncModule;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function FuncModule_CheckPropertyNew(pobjFuncModuleEN: clsFuncModuleEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleName) === true )
{
 throw new Error(`(errid:Watl000411)字段[功能模块名称]不能为空(In 功能模块)!(clsFuncModuleBL:CheckPropertyNew0)`);
}
if (null === pobjFuncModuleEN.orderNum 
 || pobjFuncModuleEN.orderNum != null && pobjFuncModuleEN.orderNum.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[序号]不能为空(In 功能模块)!(clsFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.useStateId) === true )
{
 throw new Error(`(errid:Watl000411)字段[UseStateId]不能为空(In 功能模块)!(clsFuncModuleBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleId) == false && GetStrLen(pobjFuncModuleEN.funcModuleId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[功能模块Id(funcModuleId)]的长度不能超过4(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.funcModuleId}(clsFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleName) == false && GetStrLen(pobjFuncModuleEN.funcModuleName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[功能模块名称(funcModuleName)]的长度不能超过30(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.funcModuleName}(clsFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleNameSim) == false && GetStrLen(pobjFuncModuleEN.funcModuleNameSim) > 30)
{
 throw new Error(`(errid:Watl000413)字段[功能模块简称(funcModuleNameSim)]的长度不能超过30(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.funcModuleNameSim}(clsFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.memo) == false && GetStrLen(pobjFuncModuleEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.memo}(clsFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.updDate) == false && GetStrLen(pobjFuncModuleEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.updDate}(clsFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.updUser) == false && GetStrLen(pobjFuncModuleEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.updUser}(clsFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.prjId) == false && GetStrLen(pobjFuncModuleEN.prjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[PrjId(prjId)]的长度不能超过4(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.prjId}(clsFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleEnName) == false && GetStrLen(pobjFuncModuleEN.funcModuleEnName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[FuncModuleEnName(funcModuleEnName)]的长度不能超过30(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.funcModuleEnName}(clsFuncModuleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.useStateId) == false && GetStrLen(pobjFuncModuleEN.useStateId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[UseStateId(useStateId)]的长度不能超过4(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.useStateId}(clsFuncModuleBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleId) == false && undefined !== pobjFuncModuleEN.funcModuleId && tzDataType.isString(pobjFuncModuleEN.funcModuleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[功能模块Id(funcModuleId)]的值:[${pobjFuncModuleEN.funcModuleId}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleName) == false && undefined !== pobjFuncModuleEN.funcModuleName && tzDataType.isString(pobjFuncModuleEN.funcModuleName) === false)
{
 throw new Error(`(errid:Watl000414)字段[功能模块名称(funcModuleName)]的值:[${pobjFuncModuleEN.funcModuleName}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleNameSim) == false && undefined !== pobjFuncModuleEN.funcModuleNameSim && tzDataType.isString(pobjFuncModuleEN.funcModuleNameSim) === false)
{
 throw new Error(`(errid:Watl000414)字段[功能模块简称(funcModuleNameSim)]的值:[${pobjFuncModuleEN.funcModuleNameSim}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.memo) == false && undefined !== pobjFuncModuleEN.memo && tzDataType.isString(pobjFuncModuleEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjFuncModuleEN.memo}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.updDate) == false && undefined !== pobjFuncModuleEN.updDate && tzDataType.isString(pobjFuncModuleEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFuncModuleEN.updDate}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.updUser) == false && undefined !== pobjFuncModuleEN.updUser && tzDataType.isString(pobjFuncModuleEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjFuncModuleEN.updUser}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckPropertyNew0)`);
}
if (null != pobjFuncModuleEN.orderNum && undefined !== pobjFuncModuleEN.orderNum && tzDataType.isNumber(pobjFuncModuleEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjFuncModuleEN.orderNum}], 非法,应该为数值型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.prjId) == false && undefined !== pobjFuncModuleEN.prjId && tzDataType.isString(pobjFuncModuleEN.prjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[PrjId(prjId)]的值:[${pobjFuncModuleEN.prjId}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleEnName) == false && undefined !== pobjFuncModuleEN.funcModuleEnName && tzDataType.isString(pobjFuncModuleEN.funcModuleEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[FuncModuleEnName(funcModuleEnName)]的值:[${pobjFuncModuleEN.funcModuleEnName}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.useStateId) == false && undefined !== pobjFuncModuleEN.useStateId && tzDataType.isString(pobjFuncModuleEN.useStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[UseStateId(useStateId)]的值:[${pobjFuncModuleEN.useStateId}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function FuncModule_CheckProperty4Update(pobjFuncModuleEN: clsFuncModuleEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleId) == false && GetStrLen(pobjFuncModuleEN.funcModuleId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[功能模块Id(funcModuleId)]的长度不能超过4(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.funcModuleId}(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleName) == false && GetStrLen(pobjFuncModuleEN.funcModuleName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[功能模块名称(funcModuleName)]的长度不能超过30(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.funcModuleName}(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleNameSim) == false && GetStrLen(pobjFuncModuleEN.funcModuleNameSim) > 30)
{
 throw new Error(`(errid:Watl000416)字段[功能模块简称(funcModuleNameSim)]的长度不能超过30(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.funcModuleNameSim}(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.memo) == false && GetStrLen(pobjFuncModuleEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.memo}(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.updDate) == false && GetStrLen(pobjFuncModuleEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.updDate}(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.updUser) == false && GetStrLen(pobjFuncModuleEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.updUser}(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.prjId) == false && GetStrLen(pobjFuncModuleEN.prjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[PrjId(prjId)]的长度不能超过4(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.prjId}(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleEnName) == false && GetStrLen(pobjFuncModuleEN.funcModuleEnName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[FuncModuleEnName(funcModuleEnName)]的长度不能超过30(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.funcModuleEnName}(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.useStateId) == false && GetStrLen(pobjFuncModuleEN.useStateId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[UseStateId(useStateId)]的长度不能超过4(In 功能模块(FuncModule))!值:${pobjFuncModuleEN.useStateId}(clsFuncModuleBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleId) == false && undefined !== pobjFuncModuleEN.funcModuleId && tzDataType.isString(pobjFuncModuleEN.funcModuleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[功能模块Id(funcModuleId)]的值:[${pobjFuncModuleEN.funcModuleId}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleName) == false && undefined !== pobjFuncModuleEN.funcModuleName && tzDataType.isString(pobjFuncModuleEN.funcModuleName) === false)
{
 throw new Error(`(errid:Watl000417)字段[功能模块名称(funcModuleName)]的值:[${pobjFuncModuleEN.funcModuleName}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleNameSim) == false && undefined !== pobjFuncModuleEN.funcModuleNameSim && tzDataType.isString(pobjFuncModuleEN.funcModuleNameSim) === false)
{
 throw new Error(`(errid:Watl000417)字段[功能模块简称(funcModuleNameSim)]的值:[${pobjFuncModuleEN.funcModuleNameSim}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.memo) == false && undefined !== pobjFuncModuleEN.memo && tzDataType.isString(pobjFuncModuleEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjFuncModuleEN.memo}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.updDate) == false && undefined !== pobjFuncModuleEN.updDate && tzDataType.isString(pobjFuncModuleEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFuncModuleEN.updDate}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.updUser) == false && undefined !== pobjFuncModuleEN.updUser && tzDataType.isString(pobjFuncModuleEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjFuncModuleEN.updUser}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckProperty4Update)`);
}
if (null != pobjFuncModuleEN.orderNum && undefined !== pobjFuncModuleEN.orderNum && tzDataType.isNumber(pobjFuncModuleEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjFuncModuleEN.orderNum}], 非法,应该为数值型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.prjId) == false && undefined !== pobjFuncModuleEN.prjId && tzDataType.isString(pobjFuncModuleEN.prjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[PrjId(prjId)]的值:[${pobjFuncModuleEN.prjId}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleEnName) == false && undefined !== pobjFuncModuleEN.funcModuleEnName && tzDataType.isString(pobjFuncModuleEN.funcModuleEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[FuncModuleEnName(funcModuleEnName)]的值:[${pobjFuncModuleEN.funcModuleEnName}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjFuncModuleEN.useStateId) == false && undefined !== pobjFuncModuleEN.useStateId && tzDataType.isString(pobjFuncModuleEN.useStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[UseStateId(useStateId)]的值:[${pobjFuncModuleEN.useStateId}], 非法,应该为字符型(In 功能模块(FuncModule))!(clsFuncModuleBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjFuncModuleEN.funcModuleId) === true 
 || pobjFuncModuleEN.funcModuleId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[功能模块Id]不能为空(In 功能模块)!(clsFuncModuleBL:CheckProperty4Update)`);
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
export  function FuncModule_GetJSONStrByObj (pobjFuncModuleEN: clsFuncModuleEN): string
{
pobjFuncModuleEN.sfUpdFldSetStr = pobjFuncModuleEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjFuncModuleEN);
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
export  function FuncModule_GetObjLstByJSONStr (strJSON: string): Array<clsFuncModuleEN>
{
let arrFuncModuleObjLst = new Array<clsFuncModuleEN>();
if (strJSON === "")
{
return arrFuncModuleObjLst;
}
try
{
arrFuncModuleObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrFuncModuleObjLst;
}
return arrFuncModuleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFuncModuleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function FuncModule_GetObjLstByJSONObjLst (arrFuncModuleObjLstS: Array<clsFuncModuleEN>): Array<clsFuncModuleEN>
{
const arrFuncModuleObjLst = new Array<clsFuncModuleEN>();
for (const objInFor of arrFuncModuleObjLstS) {
const obj1 = FuncModule_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrFuncModuleObjLst.push(obj1);
}
return arrFuncModuleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function FuncModule_GetObjByJSONStr (strJSON: string): clsFuncModuleEN
{
let pobjFuncModuleEN = new clsFuncModuleEN();
if (strJSON === "")
{
return pobjFuncModuleEN;
}
try
{
pobjFuncModuleEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjFuncModuleEN;
}
return pobjFuncModuleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function FuncModule_GetCombineCondition(objFuncModuleCond: clsFuncModuleEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objFuncModuleCond.dicFldComparisonOp, clsFuncModuleEN.con_FuncModuleId) == true)
{
const strComparisonOpFuncModuleId:string = objFuncModuleCond.dicFldComparisonOp[clsFuncModuleEN.con_FuncModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsFuncModuleEN.con_FuncModuleId, objFuncModuleCond.funcModuleId, strComparisonOpFuncModuleId);
}
if (Object.prototype.hasOwnProperty.call(objFuncModuleCond.dicFldComparisonOp, clsFuncModuleEN.con_FuncModuleName) == true)
{
const strComparisonOpFuncModuleName:string = objFuncModuleCond.dicFldComparisonOp[clsFuncModuleEN.con_FuncModuleName];
strWhereCond += Format(" And {0} {2} '{1}'", clsFuncModuleEN.con_FuncModuleName, objFuncModuleCond.funcModuleName, strComparisonOpFuncModuleName);
}
if (Object.prototype.hasOwnProperty.call(objFuncModuleCond.dicFldComparisonOp, clsFuncModuleEN.con_FuncModuleNameSim) == true)
{
const strComparisonOpFuncModuleNameSim:string = objFuncModuleCond.dicFldComparisonOp[clsFuncModuleEN.con_FuncModuleNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsFuncModuleEN.con_FuncModuleNameSim, objFuncModuleCond.funcModuleNameSim, strComparisonOpFuncModuleNameSim);
}
if (Object.prototype.hasOwnProperty.call(objFuncModuleCond.dicFldComparisonOp, clsFuncModuleEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objFuncModuleCond.dicFldComparisonOp[clsFuncModuleEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsFuncModuleEN.con_Memo, objFuncModuleCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objFuncModuleCond.dicFldComparisonOp, clsFuncModuleEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objFuncModuleCond.dicFldComparisonOp[clsFuncModuleEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsFuncModuleEN.con_UpdDate, objFuncModuleCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objFuncModuleCond.dicFldComparisonOp, clsFuncModuleEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objFuncModuleCond.dicFldComparisonOp[clsFuncModuleEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsFuncModuleEN.con_UpdUser, objFuncModuleCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objFuncModuleCond.dicFldComparisonOp, clsFuncModuleEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objFuncModuleCond.dicFldComparisonOp[clsFuncModuleEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsFuncModuleEN.con_OrderNum, objFuncModuleCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objFuncModuleCond.dicFldComparisonOp, clsFuncModuleEN.con_PrjId) == true)
{
const strComparisonOpPrjId:string = objFuncModuleCond.dicFldComparisonOp[clsFuncModuleEN.con_PrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsFuncModuleEN.con_PrjId, objFuncModuleCond.prjId, strComparisonOpPrjId);
}
if (Object.prototype.hasOwnProperty.call(objFuncModuleCond.dicFldComparisonOp, clsFuncModuleEN.con_FuncModuleEnName) == true)
{
const strComparisonOpFuncModuleEnName:string = objFuncModuleCond.dicFldComparisonOp[clsFuncModuleEN.con_FuncModuleEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsFuncModuleEN.con_FuncModuleEnName, objFuncModuleCond.funcModuleEnName, strComparisonOpFuncModuleEnName);
}
if (Object.prototype.hasOwnProperty.call(objFuncModuleCond.dicFldComparisonOp, clsFuncModuleEN.con_UseStateId) == true)
{
const strComparisonOpUseStateId:string = objFuncModuleCond.dicFldComparisonOp[clsFuncModuleEN.con_UseStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsFuncModuleEN.con_UseStateId, objFuncModuleCond.useStateId, strComparisonOpUseStateId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objFuncModuleENS:源对象
 * @param objFuncModuleENT:目标对象
*/
export  function FuncModule_CopyObjTo(objFuncModuleENS: clsFuncModuleEN , objFuncModuleENT: clsFuncModuleEN ): void 
{
objFuncModuleENT.funcModuleId = objFuncModuleENS.funcModuleId; //功能模块Id
objFuncModuleENT.funcModuleName = objFuncModuleENS.funcModuleName; //功能模块名称
objFuncModuleENT.funcModuleNameSim = objFuncModuleENS.funcModuleNameSim; //功能模块简称
objFuncModuleENT.memo = objFuncModuleENS.memo; //备注
objFuncModuleENT.updDate = objFuncModuleENS.updDate; //修改日期
objFuncModuleENT.updUser = objFuncModuleENS.updUser; //修改人
objFuncModuleENT.orderNum = objFuncModuleENS.orderNum; //序号
objFuncModuleENT.prjId = objFuncModuleENS.prjId; //PrjId
objFuncModuleENT.funcModuleEnName = objFuncModuleENS.funcModuleEnName; //FuncModuleEnName
objFuncModuleENT.useStateId = objFuncModuleENS.useStateId; //UseStateId
objFuncModuleENT.sfUpdFldSetStr = objFuncModuleENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFuncModuleENS:源对象
 * @param objFuncModuleENT:目标对象
*/
export  function FuncModule_GetObjFromJsonObj(objFuncModuleENS: clsFuncModuleEN): clsFuncModuleEN 
{
 const objFuncModuleENT: clsFuncModuleEN = new clsFuncModuleEN();
ObjectAssign(objFuncModuleENT, objFuncModuleENS);
 return objFuncModuleENT;
}