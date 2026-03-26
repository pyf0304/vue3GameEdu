
 /**
 * 类名:clsge_DifficultyLevelWApi
 * 表名:ge_DifficultyLevel(01120905)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:02
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 难度等级表(ge_DifficultyLevel)
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
import { clsge_DifficultyLevelEN } from "@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_DifficultyLevel_Controller = "ge_DifficultyLevelApi";
 export const ge_DifficultyLevel_ConstructorName = "ge_DifficultyLevel";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDifficultyLevelId:关键字
 * @returns 对象
 **/
export  async function ge_DifficultyLevel_GetObjByDifficultyLevelIdAsync(strDifficultyLevelId: string): Promise<clsge_DifficultyLevelEN|null>  
{
const strThisFuncName = "GetObjByDifficultyLevelIdAsync";

if (IsNullOrEmpty(strDifficultyLevelId) == true)
{
  const strMsg = Format("参数:[strDifficultyLevelId]不能为空!(In clsge_DifficultyLevelWApi.GetObjByDifficultyLevelIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strDifficultyLevelId.length != 2)
{
const strMsg = Format("缓存分类变量:[strDifficultyLevelId]的长度:[{0}]不正确!(clsge_DifficultyLevelWApi.GetObjByDifficultyLevelIdAsync)", strDifficultyLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByDifficultyLevelId";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strDifficultyLevelId,
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
const objge_DifficultyLevel = ge_DifficultyLevel_GetObjFromJsonObj(returnObj);
return objge_DifficultyLevel;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param strDifficultyLevelId:所给的关键字
 * @returns 对象
*/
export  async function ge_DifficultyLevel_GetObjByDifficultyLevelIdlocalStorage(strDifficultyLevelId: string) {
const strThisFuncName = "GetObjByDifficultyLevelIdlocalStorage";

if (IsNullOrEmpty(strDifficultyLevelId) == true)
{
  const strMsg = Format("参数:[strDifficultyLevelId]不能为空!(In clsge_DifficultyLevelWApi.GetObjByDifficultyLevelIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strDifficultyLevelId.length != 2)
{
const strMsg = Format("缓存分类变量:[strDifficultyLevelId]的长度:[{0}]不正确!(clsge_DifficultyLevelWApi.GetObjByDifficultyLevelIdlocalStorage)", strDifficultyLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_DifficultyLevelEN._CurrTabName, strDifficultyLevelId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_DifficultyLevelCache: clsge_DifficultyLevelEN = JSON.parse(strTempObj);
return objge_DifficultyLevelCache;
}
try
{
const objge_DifficultyLevel = await ge_DifficultyLevel_GetObjByDifficultyLevelIdAsync(strDifficultyLevelId);
if (objge_DifficultyLevel != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_DifficultyLevel));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_DifficultyLevel;
}
return objge_DifficultyLevel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strDifficultyLevelId, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strDifficultyLevelId:所给的关键字
 * @returns 对象
*/
export  async function ge_DifficultyLevel_GetObjByDifficultyLevelIdCache(strDifficultyLevelId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByDifficultyLevelIdCache";

if (IsNullOrEmpty(strDifficultyLevelId) == true)
{
  const strMsg = Format("参数:[strDifficultyLevelId]不能为空!(In clsge_DifficultyLevelWApi.GetObjByDifficultyLevelIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strDifficultyLevelId.length != 2)
{
const strMsg = Format("缓存分类变量:[strDifficultyLevelId]的长度:[{0}]不正确!(clsge_DifficultyLevelWApi.GetObjByDifficultyLevelIdCache)", strDifficultyLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstCache();
try
{
const arrge_DifficultyLevelSel = arrge_DifficultyLevelObjLstCache.filter(x => 
 x.difficultyLevelId == strDifficultyLevelId );
let objge_DifficultyLevel: clsge_DifficultyLevelEN;
if (arrge_DifficultyLevelSel.length > 0)
{
objge_DifficultyLevel = arrge_DifficultyLevelSel[0];
return objge_DifficultyLevel;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_DifficultyLevelConst = await ge_DifficultyLevel_GetObjByDifficultyLevelIdAsync(strDifficultyLevelId);
if (objge_DifficultyLevelConst != null)
{
ge_DifficultyLevel_ReFreshThisCache();
return objge_DifficultyLevelConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strDifficultyLevelId, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_DifficultyLevel:所给的对象
 * @returns 对象
*/
export  async function ge_DifficultyLevel_UpdateObjInLstCache(objge_DifficultyLevel: clsge_DifficultyLevelEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstCache();
const obj = arrge_DifficultyLevelObjLstCache.find(x => x.difficultyLevelName == objge_DifficultyLevel.difficultyLevelName);
if (obj != null)
{
objge_DifficultyLevel.difficultyLevelId = obj.difficultyLevelId;
ObjectAssign( obj, objge_DifficultyLevel);
}
else
{
arrge_DifficultyLevelObjLstCache.push(objge_DifficultyLevel);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  function ge_DifficultyLevel_SortFunDefa(a:clsge_DifficultyLevelEN , b:clsge_DifficultyLevelEN): number 
{
return a.difficultyLevelId.localeCompare(b.difficultyLevelId);
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
export  function ge_DifficultyLevel_SortFunDefa2Fld(a:clsge_DifficultyLevelEN , b:clsge_DifficultyLevelEN): number 
{
if (a.difficultyLevelName == b.difficultyLevelName) return a.difficultyLevelENName.localeCompare(b.difficultyLevelENName);
else return a.difficultyLevelName.localeCompare(b.difficultyLevelName);
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
export  function ge_DifficultyLevel_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_DifficultyLevelEN.con_DifficultyLevelId:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
return a.difficultyLevelId.localeCompare(b.difficultyLevelId);
}
case clsge_DifficultyLevelEN.con_DifficultyLevelName:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
if (a.difficultyLevelName == null) return -1;
if (b.difficultyLevelName == null) return 1;
return a.difficultyLevelName.localeCompare(b.difficultyLevelName);
}
case clsge_DifficultyLevelEN.con_DifficultyLevelENName:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
if (a.difficultyLevelENName == null) return -1;
if (b.difficultyLevelENName == null) return 1;
return a.difficultyLevelENName.localeCompare(b.difficultyLevelENName);
}
case clsge_DifficultyLevelEN.con_UpdDate:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_DifficultyLevelEN.con_UpdUser:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_DifficultyLevelEN.con_Memo:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_DifficultyLevel]中不存在!(in ${ ge_DifficultyLevel_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_DifficultyLevelEN.con_DifficultyLevelId:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
return b.difficultyLevelId.localeCompare(a.difficultyLevelId);
}
case clsge_DifficultyLevelEN.con_DifficultyLevelName:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
if (b.difficultyLevelName == null) return -1;
if (a.difficultyLevelName == null) return 1;
return b.difficultyLevelName.localeCompare(a.difficultyLevelName);
}
case clsge_DifficultyLevelEN.con_DifficultyLevelENName:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
if (b.difficultyLevelENName == null) return -1;
if (a.difficultyLevelENName == null) return 1;
return b.difficultyLevelENName.localeCompare(a.difficultyLevelENName);
}
case clsge_DifficultyLevelEN.con_UpdDate:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_DifficultyLevelEN.con_UpdUser:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_DifficultyLevelEN.con_Memo:
return (a: clsge_DifficultyLevelEN, b: clsge_DifficultyLevelEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_DifficultyLevel]中不存在!(in ${ ge_DifficultyLevel_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDifficultyLevelId:所给的关键字
 * @returns 对象
*/
export  async function ge_DifficultyLevel_GetNameByDifficultyLevelIdCache(strDifficultyLevelId: string) {

if (IsNullOrEmpty(strDifficultyLevelId) == true)
{
  const strMsg = Format("参数:[strDifficultyLevelId]不能为空!(In clsge_DifficultyLevelWApi.GetNameByDifficultyLevelIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strDifficultyLevelId.length != 2)
{
const strMsg = Format("缓存分类变量:[strDifficultyLevelId]的长度:[{0}]不正确!(clsge_DifficultyLevelWApi.GetNameByDifficultyLevelIdCache)", strDifficultyLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstCache();
if (arrge_DifficultyLevelObjLstCache == null) return "";
try
{
const arrge_DifficultyLevelSel = arrge_DifficultyLevelObjLstCache.filter(x => 
 x.difficultyLevelId == strDifficultyLevelId );
let objge_DifficultyLevel: clsge_DifficultyLevelEN;
if (arrge_DifficultyLevelSel.length > 0)
{
objge_DifficultyLevel = arrge_DifficultyLevelSel[0];
return objge_DifficultyLevel.difficultyLevelName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strDifficultyLevelId);
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
export  async function ge_DifficultyLevel_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_DifficultyLevelEN.con_DifficultyLevelId:
return (obj: clsge_DifficultyLevelEN) => {
return obj.difficultyLevelId === value;
}
case clsge_DifficultyLevelEN.con_DifficultyLevelName:
return (obj: clsge_DifficultyLevelEN) => {
return obj.difficultyLevelName === value;
}
case clsge_DifficultyLevelEN.con_DifficultyLevelENName:
return (obj: clsge_DifficultyLevelEN) => {
return obj.difficultyLevelENName === value;
}
case clsge_DifficultyLevelEN.con_UpdDate:
return (obj: clsge_DifficultyLevelEN) => {
return obj.updDate === value;
}
case clsge_DifficultyLevelEN.con_UpdUser:
return (obj: clsge_DifficultyLevelEN) => {
return obj.updUser === value;
}
case clsge_DifficultyLevelEN.con_Memo:
return (obj: clsge_DifficultyLevelEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_DifficultyLevel]中不存在!(in ${ ge_DifficultyLevel_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_DifficultyLevel_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsge_DifficultyLevelEN.con_DifficultyLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_DifficultyLevelEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_DifficultyLevelEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strDifficultyLevelId = strInValue;
if (IsNullOrEmpty(strDifficultyLevelId) == true)
{
return "";
}
const objge_DifficultyLevel = await ge_DifficultyLevel_GetObjByDifficultyLevelIdCache(strDifficultyLevelId );
if (objge_DifficultyLevel == null) return "";
if (objge_DifficultyLevel.GetFldValue(strOutFldName) == null) return "";
return objge_DifficultyLevel.GetFldValue(strOutFldName).toString();
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
export  async function ge_DifficultyLevel_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsge_DifficultyLevelEN.con_DifficultyLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_DifficultyLevel = await ge_DifficultyLevel_GetObjLstCache();
if (arrge_DifficultyLevel == null) return [];
let arrge_DifficultyLevelSel = arrge_DifficultyLevel;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_DifficultyLevelSel.length == 0) return [];
return arrge_DifficultyLevelSel.map(x=>x.difficultyLevelId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_DifficultyLevel_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_GetFirstObjAsync(strWhereCond: string): Promise<clsge_DifficultyLevelEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const objge_DifficultyLevel = ge_DifficultyLevel_GetObjFromJsonObj(returnObj);
return objge_DifficultyLevel;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_DifficultyLevelEN._CurrTabName;
if (IsNullOrEmpty(clsge_DifficultyLevelEN.WhereFormat) == false)
{
strWhereCond = clsge_DifficultyLevelEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_DifficultyLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_DifficultyLevelEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_DifficultyLevelExObjLstCache: Array<clsge_DifficultyLevelEN> = CacheHelper.Get(strKey);
const arrge_DifficultyLevelObjLstT = ge_DifficultyLevel_GetObjLstByJSONObjLst(arrge_DifficultyLevelExObjLstCache);
return arrge_DifficultyLevelObjLstT;
}
try
{
const arrge_DifficultyLevelExObjLst = await ge_DifficultyLevel_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_DifficultyLevelExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_DifficultyLevelExObjLst.length);
console.log(strInfo);
return arrge_DifficultyLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_DifficultyLevel_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_DifficultyLevelEN._CurrTabName;
if (IsNullOrEmpty(clsge_DifficultyLevelEN.WhereFormat) == false)
{
strWhereCond = clsge_DifficultyLevelEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_DifficultyLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_DifficultyLevelEN.CacheAddiCondition);
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
const arrge_DifficultyLevelExObjLstCache: Array<clsge_DifficultyLevelEN> = JSON.parse(strTempObjLst);
const arrge_DifficultyLevelObjLstT = ge_DifficultyLevel_GetObjLstByJSONObjLst(arrge_DifficultyLevelExObjLstCache);
return arrge_DifficultyLevelObjLstT;
}
try
{
const arrge_DifficultyLevelExObjLst = await ge_DifficultyLevel_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_DifficultyLevelExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_DifficultyLevelExObjLst.length);
console.log(strInfo);
return arrge_DifficultyLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_DifficultyLevel_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_DifficultyLevelEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_DifficultyLevelObjLstCache: Array<clsge_DifficultyLevelEN> = JSON.parse(strTempObjLst);
return arrge_DifficultyLevelObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_DifficultyLevel_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_DifficultyLevelEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_DifficultyLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_DifficultyLevelEN._CurrTabName;
if (IsNullOrEmpty(clsge_DifficultyLevelEN.WhereFormat) == false)
{
strWhereCond = clsge_DifficultyLevelEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_DifficultyLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_DifficultyLevelEN.CacheAddiCondition);
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
const arrge_DifficultyLevelExObjLstCache: Array<clsge_DifficultyLevelEN> = JSON.parse(strTempObjLst);
const arrge_DifficultyLevelObjLstT = ge_DifficultyLevel_GetObjLstByJSONObjLst(arrge_DifficultyLevelExObjLstCache);
return arrge_DifficultyLevelObjLstT;
}
try
{
const arrge_DifficultyLevelExObjLst = await ge_DifficultyLevel_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_DifficultyLevelExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_DifficultyLevelExObjLst.length);
console.log(strInfo);
return arrge_DifficultyLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_DifficultyLevel_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_DifficultyLevelEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_DifficultyLevelObjLstCache: Array<clsge_DifficultyLevelEN> = JSON.parse(strTempObjLst);
return arrge_DifficultyLevelObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_DifficultyLevel_GetObjLstCache(): Promise<Array<clsge_DifficultyLevelEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrge_DifficultyLevelObjLstCache;
switch (clsge_DifficultyLevelEN.CacheModeId)
{
case "04"://sessionStorage
arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstClientCache();
break;
default:
arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstClientCache();
break;
}
return arrge_DifficultyLevelObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_DifficultyLevel_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_DifficultyLevelObjLstCache;
switch (clsge_DifficultyLevelEN.CacheModeId)
{
case "04"://sessionStorage
arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrge_DifficultyLevelObjLstCache = null;
break;
default:
arrge_DifficultyLevelObjLstCache = null;
break;
}
return arrge_DifficultyLevelObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDifficultyLevelIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_DifficultyLevel_GetSubObjLstCache(objge_DifficultyLevelCond: clsge_DifficultyLevelEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstCache();
let arrge_DifficultyLevelSel = arrge_DifficultyLevelObjLstCache;
if (objge_DifficultyLevelCond.sfFldComparisonOp == null || objge_DifficultyLevelCond.sfFldComparisonOp == "") return arrge_DifficultyLevelSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_DifficultyLevelCond.sfFldComparisonOp);
//console.log("clsge_DifficultyLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_DifficultyLevelCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_DifficultyLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_DifficultyLevelSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_DifficultyLevelCond), ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_DifficultyLevelEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDifficultyLevelId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_DifficultyLevel_GetObjLstByDifficultyLevelIdLstAsync(arrDifficultyLevelId: Array<string>): Promise<Array<clsge_DifficultyLevelEN>>  
{
const strThisFuncName = "GetObjLstByDifficultyLevelIdLstAsync";
const strAction = "GetObjLstByDifficultyLevelIdLst";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrDifficultyLevelId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_DifficultyLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param arrstrDifficultyLevelIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_DifficultyLevel_GetObjLstByDifficultyLevelIdLstCache(arrDifficultyLevelIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByDifficultyLevelIdLstCache";
try
{
const arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstCache();
const arrge_DifficultyLevelSel = arrge_DifficultyLevelObjLstCache.filter(x => arrDifficultyLevelIdLst.indexOf(x.difficultyLevelId)>-1);
return arrge_DifficultyLevelSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrDifficultyLevelIdLst.join(","), ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_DifficultyLevelEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_DifficultyLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_DifficultyLevelEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_DifficultyLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_DifficultyLevelEN>();
const arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstCache();
if (arrge_DifficultyLevelObjLstCache.length == 0) return arrge_DifficultyLevelObjLstCache;
let arrge_DifficultyLevelSel = arrge_DifficultyLevelObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_DifficultyLevelCond = new clsge_DifficultyLevelEN();
ObjectAssign(objge_DifficultyLevelCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_DifficultyLevelWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_DifficultyLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_DifficultyLevelSel.length == 0) return arrge_DifficultyLevelSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.sort(ge_DifficultyLevel_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.sort(objPagerPara.sortFun);
}
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.slice(intStart, intEnd);     
return arrge_DifficultyLevelSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_DifficultyLevelEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_DifficultyLevel_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_DifficultyLevelEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_DifficultyLevelEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_DifficultyLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param strDifficultyLevelId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_DifficultyLevel_DelRecordAsync(strDifficultyLevelId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strDifficultyLevelId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param arrDifficultyLevelId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_DifficultyLevel_Delge_DifficultyLevelsAsync(arrDifficultyLevelId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_DifficultyLevelsAsync";
const strAction = "Delge_DifficultyLevels";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrDifficultyLevelId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_Delge_DifficultyLevelsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_DifficultyLevelsByCondAsync";
const strAction = "Delge_DifficultyLevelsByCond";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param objge_DifficultyLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_DifficultyLevel_AddNewRecordAsync(objge_DifficultyLevelEN: clsge_DifficultyLevelEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_DifficultyLevelEN);
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_DifficultyLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param objge_DifficultyLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_DifficultyLevel_AddNewRecordWithMaxIdAsync(objge_DifficultyLevelEN: clsge_DifficultyLevelEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_DifficultyLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_AddNewObjSave(objge_DifficultyLevelEN: clsge_DifficultyLevelEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_DifficultyLevel_CheckPropertyNew(objge_DifficultyLevelEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_DifficultyLevel_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_DifficultyLevel_CheckUniCond4Add(objge_DifficultyLevelEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_DifficultyLevel_AddNewRecordWithMaxIdAsync(objge_DifficultyLevelEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
ge_DifficultyLevel_ReFreshCache();
}
else
{
const strInfo = `添加[难度等级表(ge_DifficultyLevel)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_DifficultyLevel_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_DifficultyLevel_CheckUniCond4Add(objge_DifficultyLevelEN: clsge_DifficultyLevelEN): Promise<boolean>{
const strUniquenessCondition = ge_DifficultyLevel_GetUniCondStr(objge_DifficultyLevelEN);
const bolIsExistCondition = await ge_DifficultyLevel_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_DifficultyLevel_CheckUniCond4Update(objge_DifficultyLevelEN: clsge_DifficultyLevelEN): Promise<boolean>{
const strUniquenessCondition = ge_DifficultyLevel_GetUniCondStr4Update(objge_DifficultyLevelEN);
const bolIsExistCondition = await ge_DifficultyLevel_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_DifficultyLevel_UpdateObjSave(objge_DifficultyLevelEN: clsge_DifficultyLevelEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_DifficultyLevelEN.sfUpdFldSetStr = objge_DifficultyLevelEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_DifficultyLevelEN.difficultyLevelId == "" || objge_DifficultyLevelEN.difficultyLevelId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_DifficultyLevel_CheckProperty4Update(objge_DifficultyLevelEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_DifficultyLevel_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_DifficultyLevel_CheckUniCond4Update(objge_DifficultyLevelEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_DifficultyLevel_UpdateRecordAsync(objge_DifficultyLevelEN);
if (returnBool == true)
{
ge_DifficultyLevel_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_DifficultyLevel_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_DifficultyLevelEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_DifficultyLevel_AddNewRecordWithReturnKeyAsync(objge_DifficultyLevelEN: clsge_DifficultyLevelEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_DifficultyLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param objge_DifficultyLevelEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_DifficultyLevel_UpdateRecordAsync(objge_DifficultyLevelEN: clsge_DifficultyLevelEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_DifficultyLevelEN.sfUpdFldSetStr === undefined || objge_DifficultyLevelEN.sfUpdFldSetStr === null || objge_DifficultyLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_DifficultyLevelEN.difficultyLevelId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_DifficultyLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param objge_DifficultyLevelEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_DifficultyLevel_EditRecordExAsync(objge_DifficultyLevelEN: clsge_DifficultyLevelEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_DifficultyLevelEN.sfUpdFldSetStr === undefined || objge_DifficultyLevelEN.sfUpdFldSetStr === null || objge_DifficultyLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_DifficultyLevelEN.difficultyLevelId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_DifficultyLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param objge_DifficultyLevelEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_DifficultyLevel_UpdateWithConditionAsync(objge_DifficultyLevelEN: clsge_DifficultyLevelEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_DifficultyLevelEN.sfUpdFldSetStr === undefined || objge_DifficultyLevelEN.sfUpdFldSetStr === null || objge_DifficultyLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_DifficultyLevelEN.difficultyLevelId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);
objge_DifficultyLevelEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_DifficultyLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param objstrDifficultyLevelIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_DifficultyLevel_IsExistRecordCache(objge_DifficultyLevelCond: clsge_DifficultyLevelEN) {
const strThisFuncName = "IsExistRecordCache";
const arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstCache();
if (arrge_DifficultyLevelObjLstCache == null) return false;
let arrge_DifficultyLevelSel = arrge_DifficultyLevelObjLstCache;
if (objge_DifficultyLevelCond.sfFldComparisonOp == null || objge_DifficultyLevelCond.sfFldComparisonOp == "") return arrge_DifficultyLevelSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_DifficultyLevelCond.sfFldComparisonOp);
//console.log("clsge_DifficultyLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_DifficultyLevelCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_DifficultyLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_DifficultyLevelSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_DifficultyLevelCond), ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param strDifficultyLevelId:所给的关键字
 * @returns 对象
*/
export  async function ge_DifficultyLevel_IsExistCache(strDifficultyLevelId:string) {
const strThisFuncName = "IsExistCache";
const arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstCache();
if (arrge_DifficultyLevelObjLstCache == null) return false;
try
{
const arrge_DifficultyLevelSel = arrge_DifficultyLevelObjLstCache.filter(x => x.difficultyLevelId == strDifficultyLevelId);
if (arrge_DifficultyLevelSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strDifficultyLevelId, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strDifficultyLevelId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_DifficultyLevel_IsExistAsync(strDifficultyLevelId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strDifficultyLevelId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
 * @param objge_DifficultyLevelCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_DifficultyLevel_GetRecCountByCondCache(objge_DifficultyLevelCond: clsge_DifficultyLevelEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_DifficultyLevelObjLstCache = await ge_DifficultyLevel_GetObjLstCache();
if (arrge_DifficultyLevelObjLstCache == null) return 0;
let arrge_DifficultyLevelSel = arrge_DifficultyLevelObjLstCache;
if (objge_DifficultyLevelCond.sfFldComparisonOp == null || objge_DifficultyLevelCond.sfFldComparisonOp == "") return arrge_DifficultyLevelSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_DifficultyLevelCond.sfFldComparisonOp);
//console.log("clsge_DifficultyLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_DifficultyLevelCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_DifficultyLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_DifficultyLevelSel = arrge_DifficultyLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_DifficultyLevelSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_DifficultyLevelCond), ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

 /**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function ge_DifficultyLevel_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  async function ge_DifficultyLevel_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_DifficultyLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_DifficultyLevel_ConstructorName, strThisFuncName);
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
export  function ge_DifficultyLevel_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_DifficultyLevel_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsge_DifficultyLevelEN._CurrTabName;
switch (clsge_DifficultyLevelEN.CacheModeId)
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
clsge_DifficultyLevelEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_DifficultyLevel_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsge_DifficultyLevelEN._CurrTabName;
switch (clsge_DifficultyLevelEN.CacheModeId)
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
clsge_DifficultyLevelEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_DifficultyLevel_GetLastRefreshTime():string
{
if (clsge_DifficultyLevelEN._RefreshTimeLst.length == 0) return "";
return clsge_DifficultyLevelEN._RefreshTimeLst[clsge_DifficultyLevelEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_DifficultyLevel_BindDdl_DifficultyLevelIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_DifficultyLevelIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_DifficultyLevelIdInDivCache");
const arrObjLstSel = await ge_DifficultyLevel_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_DifficultyLevelEN.con_DifficultyLevelId, clsge_DifficultyLevelEN.con_DifficultyLevelName, "选难度...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_DifficultyLevel_GetArrge_DifficultyLevel()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_DifficultyLevelIdInDivCache");
const arrge_DifficultyLevel = new Array<clsge_DifficultyLevelEN>();
const arrObjLstSel = await ge_DifficultyLevel_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsge_DifficultyLevelEN();
obj0.difficultyLevelId = '0';
obj0.difficultyLevelName = '选难度...';
arrge_DifficultyLevel.push(obj0);
arrObjLstSel.forEach(x => arrge_DifficultyLevel.push(x));
return arrge_DifficultyLevel;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_DifficultyLevel_CheckPropertyNew(pobjge_DifficultyLevelEN: clsge_DifficultyLevelEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelId) == false && GetStrLen(pobjge_DifficultyLevelEN.difficultyLevelId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[难度等级Id(difficultyLevelId)]的长度不能超过2(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.difficultyLevelId}(clsge_DifficultyLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelName) == false && GetStrLen(pobjge_DifficultyLevelEN.difficultyLevelName) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[难度等级名称(difficultyLevelName)]的长度不能超过1000(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.difficultyLevelName}(clsge_DifficultyLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelENName) == false && GetStrLen(pobjge_DifficultyLevelEN.difficultyLevelENName) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[难度等级英文名(difficultyLevelENName)]的长度不能超过1000(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.difficultyLevelENName}(clsge_DifficultyLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.updDate) == false && GetStrLen(pobjge_DifficultyLevelEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.updDate}(clsge_DifficultyLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.updUser) == false && GetStrLen(pobjge_DifficultyLevelEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.updUser}(clsge_DifficultyLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.memo) == false && GetStrLen(pobjge_DifficultyLevelEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.memo}(clsge_DifficultyLevelBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelId) == false && undefined !== pobjge_DifficultyLevelEN.difficultyLevelId && tzDataType.isString(pobjge_DifficultyLevelEN.difficultyLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[难度等级Id(difficultyLevelId)]的值:[${pobjge_DifficultyLevelEN.difficultyLevelId}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelName) == false && undefined !== pobjge_DifficultyLevelEN.difficultyLevelName && tzDataType.isString(pobjge_DifficultyLevelEN.difficultyLevelName) === false)
{
 throw new Error(`(errid:Watl000414)字段[难度等级名称(difficultyLevelName)]的值:[${pobjge_DifficultyLevelEN.difficultyLevelName}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelENName) == false && undefined !== pobjge_DifficultyLevelEN.difficultyLevelENName && tzDataType.isString(pobjge_DifficultyLevelEN.difficultyLevelENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[难度等级英文名(difficultyLevelENName)]的值:[${pobjge_DifficultyLevelEN.difficultyLevelENName}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.updDate) == false && undefined !== pobjge_DifficultyLevelEN.updDate && tzDataType.isString(pobjge_DifficultyLevelEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_DifficultyLevelEN.updDate}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.updUser) == false && undefined !== pobjge_DifficultyLevelEN.updUser && tzDataType.isString(pobjge_DifficultyLevelEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_DifficultyLevelEN.updUser}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.memo) == false && undefined !== pobjge_DifficultyLevelEN.memo && tzDataType.isString(pobjge_DifficultyLevelEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_DifficultyLevelEN.memo}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_DifficultyLevel_CheckProperty4Update(pobjge_DifficultyLevelEN: clsge_DifficultyLevelEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelId) == false && GetStrLen(pobjge_DifficultyLevelEN.difficultyLevelId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[难度等级Id(difficultyLevelId)]的长度不能超过2(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.difficultyLevelId}(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelName) == false && GetStrLen(pobjge_DifficultyLevelEN.difficultyLevelName) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[难度等级名称(difficultyLevelName)]的长度不能超过1000(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.difficultyLevelName}(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelENName) == false && GetStrLen(pobjge_DifficultyLevelEN.difficultyLevelENName) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[难度等级英文名(difficultyLevelENName)]的长度不能超过1000(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.difficultyLevelENName}(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.updDate) == false && GetStrLen(pobjge_DifficultyLevelEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.updDate}(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.updUser) == false && GetStrLen(pobjge_DifficultyLevelEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.updUser}(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.memo) == false && GetStrLen(pobjge_DifficultyLevelEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 难度等级表(ge_DifficultyLevel))!值:${pobjge_DifficultyLevelEN.memo}(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelId) == false && undefined !== pobjge_DifficultyLevelEN.difficultyLevelId && tzDataType.isString(pobjge_DifficultyLevelEN.difficultyLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[难度等级Id(difficultyLevelId)]的值:[${pobjge_DifficultyLevelEN.difficultyLevelId}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelName) == false && undefined !== pobjge_DifficultyLevelEN.difficultyLevelName && tzDataType.isString(pobjge_DifficultyLevelEN.difficultyLevelName) === false)
{
 throw new Error(`(errid:Watl000417)字段[难度等级名称(difficultyLevelName)]的值:[${pobjge_DifficultyLevelEN.difficultyLevelName}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.difficultyLevelENName) == false && undefined !== pobjge_DifficultyLevelEN.difficultyLevelENName && tzDataType.isString(pobjge_DifficultyLevelEN.difficultyLevelENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[难度等级英文名(difficultyLevelENName)]的值:[${pobjge_DifficultyLevelEN.difficultyLevelENName}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.updDate) == false && undefined !== pobjge_DifficultyLevelEN.updDate && tzDataType.isString(pobjge_DifficultyLevelEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_DifficultyLevelEN.updDate}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.updUser) == false && undefined !== pobjge_DifficultyLevelEN.updUser && tzDataType.isString(pobjge_DifficultyLevelEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_DifficultyLevelEN.updUser}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_DifficultyLevelEN.memo) == false && undefined !== pobjge_DifficultyLevelEN.memo && tzDataType.isString(pobjge_DifficultyLevelEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_DifficultyLevelEN.memo}], 非法,应该为字符型(In 难度等级表(ge_DifficultyLevel))!(clsge_DifficultyLevelBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
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
export  function ge_DifficultyLevel_GetJSONStrByObj (pobjge_DifficultyLevelEN: clsge_DifficultyLevelEN): string
{
pobjge_DifficultyLevelEN.sfUpdFldSetStr = pobjge_DifficultyLevelEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_DifficultyLevelEN);
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
export  function ge_DifficultyLevel_GetObjLstByJSONStr (strJSON: string): Array<clsge_DifficultyLevelEN>
{
let arrge_DifficultyLevelObjLst = new Array<clsge_DifficultyLevelEN>();
if (strJSON === "")
{
return arrge_DifficultyLevelObjLst;
}
try
{
arrge_DifficultyLevelObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_DifficultyLevelObjLst;
}
return arrge_DifficultyLevelObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_DifficultyLevelObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_DifficultyLevel_GetObjLstByJSONObjLst (arrge_DifficultyLevelObjLstS: Array<clsge_DifficultyLevelEN>): Array<clsge_DifficultyLevelEN>
{
const arrge_DifficultyLevelObjLst = new Array<clsge_DifficultyLevelEN>();
for (const objInFor of arrge_DifficultyLevelObjLstS) {
const obj1 = ge_DifficultyLevel_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_DifficultyLevelObjLst.push(obj1);
}
return arrge_DifficultyLevelObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_DifficultyLevel_GetObjByJSONStr (strJSON: string): clsge_DifficultyLevelEN
{
let pobjge_DifficultyLevelEN = new clsge_DifficultyLevelEN();
if (strJSON === "")
{
return pobjge_DifficultyLevelEN;
}
try
{
pobjge_DifficultyLevelEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_DifficultyLevelEN;
}
return pobjge_DifficultyLevelEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_DifficultyLevel_GetCombineCondition(objge_DifficultyLevelCond: clsge_DifficultyLevelEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_DifficultyLevelCond.dicFldComparisonOp, clsge_DifficultyLevelEN.con_DifficultyLevelId) == true)
{
const strComparisonOpDifficultyLevelId:string = objge_DifficultyLevelCond.dicFldComparisonOp[clsge_DifficultyLevelEN.con_DifficultyLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_DifficultyLevelEN.con_DifficultyLevelId, objge_DifficultyLevelCond.difficultyLevelId, strComparisonOpDifficultyLevelId);
}
if (Object.prototype.hasOwnProperty.call(objge_DifficultyLevelCond.dicFldComparisonOp, clsge_DifficultyLevelEN.con_DifficultyLevelName) == true)
{
const strComparisonOpDifficultyLevelName:string = objge_DifficultyLevelCond.dicFldComparisonOp[clsge_DifficultyLevelEN.con_DifficultyLevelName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_DifficultyLevelEN.con_DifficultyLevelName, objge_DifficultyLevelCond.difficultyLevelName, strComparisonOpDifficultyLevelName);
}
if (Object.prototype.hasOwnProperty.call(objge_DifficultyLevelCond.dicFldComparisonOp, clsge_DifficultyLevelEN.con_DifficultyLevelENName) == true)
{
const strComparisonOpDifficultyLevelENName:string = objge_DifficultyLevelCond.dicFldComparisonOp[clsge_DifficultyLevelEN.con_DifficultyLevelENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_DifficultyLevelEN.con_DifficultyLevelENName, objge_DifficultyLevelCond.difficultyLevelENName, strComparisonOpDifficultyLevelENName);
}
if (Object.prototype.hasOwnProperty.call(objge_DifficultyLevelCond.dicFldComparisonOp, clsge_DifficultyLevelEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_DifficultyLevelCond.dicFldComparisonOp[clsge_DifficultyLevelEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_DifficultyLevelEN.con_UpdDate, objge_DifficultyLevelCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_DifficultyLevelCond.dicFldComparisonOp, clsge_DifficultyLevelEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_DifficultyLevelCond.dicFldComparisonOp[clsge_DifficultyLevelEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_DifficultyLevelEN.con_UpdUser, objge_DifficultyLevelCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_DifficultyLevelCond.dicFldComparisonOp, clsge_DifficultyLevelEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_DifficultyLevelCond.dicFldComparisonOp[clsge_DifficultyLevelEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_DifficultyLevelEN.con_Memo, objge_DifficultyLevelCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_DifficultyLevel(难度等级表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strDifficultyLevelName: 难度等级名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_DifficultyLevel_GetUniCondStr(objge_DifficultyLevelEN: clsge_DifficultyLevelEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and DifficultyLevelName = '{0}'", objge_DifficultyLevelEN.difficultyLevelName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_DifficultyLevel(难度等级表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strDifficultyLevelName: 难度等级名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_DifficultyLevel_GetUniCondStr4Update(objge_DifficultyLevelEN: clsge_DifficultyLevelEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and DifficultyLevelId <> '{0}'", objge_DifficultyLevelEN.difficultyLevelId);
 strWhereCond +=  Format(" and DifficultyLevelName = '{0}'", objge_DifficultyLevelEN.difficultyLevelName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_DifficultyLevelENS:源对象
 * @param objge_DifficultyLevelENT:目标对象
*/
export  function ge_DifficultyLevel_CopyObjTo(objge_DifficultyLevelENS: clsge_DifficultyLevelEN , objge_DifficultyLevelENT: clsge_DifficultyLevelEN ): void 
{
objge_DifficultyLevelENT.difficultyLevelId = objge_DifficultyLevelENS.difficultyLevelId; //难度等级Id
objge_DifficultyLevelENT.difficultyLevelName = objge_DifficultyLevelENS.difficultyLevelName; //难度等级名称
objge_DifficultyLevelENT.difficultyLevelENName = objge_DifficultyLevelENS.difficultyLevelENName; //难度等级英文名
objge_DifficultyLevelENT.updDate = objge_DifficultyLevelENS.updDate; //修改日期
objge_DifficultyLevelENT.updUser = objge_DifficultyLevelENS.updUser; //修改人
objge_DifficultyLevelENT.memo = objge_DifficultyLevelENS.memo; //备注
objge_DifficultyLevelENT.sfUpdFldSetStr = objge_DifficultyLevelENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_DifficultyLevelENS:源对象
 * @param objge_DifficultyLevelENT:目标对象
*/
export  function ge_DifficultyLevel_GetObjFromJsonObj(objge_DifficultyLevelENS: clsge_DifficultyLevelEN): clsge_DifficultyLevelEN 
{
 const objge_DifficultyLevelENT: clsge_DifficultyLevelEN = new clsge_DifficultyLevelEN();
ObjectAssign(objge_DifficultyLevelENT, objge_DifficultyLevelENS);
 return objge_DifficultyLevelENT;
}