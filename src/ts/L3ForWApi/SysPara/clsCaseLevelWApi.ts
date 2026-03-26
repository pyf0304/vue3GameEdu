
 /**
 * 类名:clsCaseLevelWApi
 * 表名:CaseLevel(01120298)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:17
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
 * 案例等级(CaseLevel)
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
import { clsCaseLevelEN } from "@/ts/L0Entity/SysPara/clsCaseLevelEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const caseLevel_Controller = "CaseLevelApi";
 export const caseLevel_ConstructorName = "caseLevel";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCaseLevelId:关键字
 * @returns 对象
 **/
export  async function CaseLevel_GetObjByCaseLevelIdAsync(strCaseLevelId: string): Promise<clsCaseLevelEN|null>  
{
const strThisFuncName = "GetObjByCaseLevelIdAsync";

if (IsNullOrEmpty(strCaseLevelId) == true)
{
  const strMsg = Format("参数:[strCaseLevelId]不能为空!(In clsCaseLevelWApi.GetObjByCaseLevelIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCaseLevelId.length != 2)
{
const strMsg = Format("缓存分类变量:[strCaseLevelId]的长度:[{0}]不正确!(clsCaseLevelWApi.GetObjByCaseLevelIdAsync)", strCaseLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByCaseLevelId";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCaseLevelId,
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
const objCaseLevel = CaseLevel_GetObjFromJsonObj(returnObj);
return objCaseLevel;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param strCaseLevelId:所给的关键字
 * @returns 对象
*/
export  async function CaseLevel_GetObjByCaseLevelIdlocalStorage(strCaseLevelId: string) {
const strThisFuncName = "GetObjByCaseLevelIdlocalStorage";

if (IsNullOrEmpty(strCaseLevelId) == true)
{
  const strMsg = Format("参数:[strCaseLevelId]不能为空!(In clsCaseLevelWApi.GetObjByCaseLevelIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strCaseLevelId.length != 2)
{
const strMsg = Format("缓存分类变量:[strCaseLevelId]的长度:[{0}]不正确!(clsCaseLevelWApi.GetObjByCaseLevelIdlocalStorage)", strCaseLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsCaseLevelEN._CurrTabName, strCaseLevelId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objCaseLevelCache: clsCaseLevelEN = JSON.parse(strTempObj);
return objCaseLevelCache;
}
try
{
const objCaseLevel = await CaseLevel_GetObjByCaseLevelIdAsync(strCaseLevelId);
if (objCaseLevel != null)
{
localStorage.setItem(strKey, JSON.stringify(objCaseLevel));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objCaseLevel;
}
return objCaseLevel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strCaseLevelId, caseLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strCaseLevelId:所给的关键字
 * @returns 对象
*/
export  async function CaseLevel_GetObjByCaseLevelIdCache(strCaseLevelId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByCaseLevelIdCache";

if (IsNullOrEmpty(strCaseLevelId) == true)
{
  const strMsg = Format("参数:[strCaseLevelId]不能为空!(In clsCaseLevelWApi.GetObjByCaseLevelIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCaseLevelId.length != 2)
{
const strMsg = Format("缓存分类变量:[strCaseLevelId]的长度:[{0}]不正确!(clsCaseLevelWApi.GetObjByCaseLevelIdCache)", strCaseLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const arrCaseLevelObjLstCache = await CaseLevel_GetObjLstCache();
try
{
const arrCaseLevelSel = arrCaseLevelObjLstCache.filter(x => 
 x.caseLevelId == strCaseLevelId );
let objCaseLevel: clsCaseLevelEN;
if (arrCaseLevelSel.length > 0)
{
objCaseLevel = arrCaseLevelSel[0];
return objCaseLevel;
}
else
{
if (bolTryAsyncOnce == true)
{
const objCaseLevelConst = await CaseLevel_GetObjByCaseLevelIdAsync(strCaseLevelId);
if (objCaseLevelConst != null)
{
CaseLevel_ReFreshThisCache();
return objCaseLevelConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strCaseLevelId, caseLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objCaseLevel:所给的对象
 * @returns 对象
*/
export  async function CaseLevel_UpdateObjInLstCache(objCaseLevel: clsCaseLevelEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrCaseLevelObjLstCache = await CaseLevel_GetObjLstCache();
const obj = arrCaseLevelObjLstCache.find(x => 
x.caseLevelId == objCaseLevel.caseLevelId);
if (obj != null)
{
objCaseLevel.caseLevelId = obj.caseLevelId;
ObjectAssign( obj, objCaseLevel);
}
else
{
arrCaseLevelObjLstCache.push(objCaseLevel);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, caseLevel_ConstructorName, strThisFuncName);
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
export  function CaseLevel_SortFunDefa(a:clsCaseLevelEN , b:clsCaseLevelEN): number 
{
return a.caseLevelId.localeCompare(b.caseLevelId);
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
export  function CaseLevel_SortFunDefa2Fld(a:clsCaseLevelEN , b:clsCaseLevelEN): number 
{
if (a.caseLevelName == b.caseLevelName) return a.memo.localeCompare(b.memo);
else return a.caseLevelName.localeCompare(b.caseLevelName);
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
export  function CaseLevel_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsCaseLevelEN.con_CaseLevelId:
return (a: clsCaseLevelEN, b: clsCaseLevelEN) => {
return a.caseLevelId.localeCompare(b.caseLevelId);
}
case clsCaseLevelEN.con_CaseLevelName:
return (a: clsCaseLevelEN, b: clsCaseLevelEN) => {
return a.caseLevelName.localeCompare(b.caseLevelName);
}
case clsCaseLevelEN.con_Memo:
return (a: clsCaseLevelEN, b: clsCaseLevelEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CaseLevel]中不存在!(in ${ caseLevel_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsCaseLevelEN.con_CaseLevelId:
return (a: clsCaseLevelEN, b: clsCaseLevelEN) => {
return b.caseLevelId.localeCompare(a.caseLevelId);
}
case clsCaseLevelEN.con_CaseLevelName:
return (a: clsCaseLevelEN, b: clsCaseLevelEN) => {
return b.caseLevelName.localeCompare(a.caseLevelName);
}
case clsCaseLevelEN.con_Memo:
return (a: clsCaseLevelEN, b: clsCaseLevelEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CaseLevel]中不存在!(in ${ caseLevel_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCaseLevelId:所给的关键字
 * @returns 对象
*/
export  async function CaseLevel_GetNameByCaseLevelIdCache(strCaseLevelId: string) {

if (IsNullOrEmpty(strCaseLevelId) == true)
{
  const strMsg = Format("参数:[strCaseLevelId]不能为空!(In clsCaseLevelWApi.GetNameByCaseLevelIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCaseLevelId.length != 2)
{
const strMsg = Format("缓存分类变量:[strCaseLevelId]的长度:[{0}]不正确!(clsCaseLevelWApi.GetNameByCaseLevelIdCache)", strCaseLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const arrCaseLevelObjLstCache = await CaseLevel_GetObjLstCache();
if (arrCaseLevelObjLstCache == null) return "";
try
{
const arrCaseLevelSel = arrCaseLevelObjLstCache.filter(x => 
 x.caseLevelId == strCaseLevelId );
let objCaseLevel: clsCaseLevelEN;
if (arrCaseLevelSel.length > 0)
{
objCaseLevel = arrCaseLevelSel[0];
return objCaseLevel.caseLevelName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strCaseLevelId);
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
export  async function CaseLevel_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsCaseLevelEN.con_CaseLevelId:
return (obj: clsCaseLevelEN) => {
return obj.caseLevelId === value;
}
case clsCaseLevelEN.con_CaseLevelName:
return (obj: clsCaseLevelEN) => {
return obj.caseLevelName === value;
}
case clsCaseLevelEN.con_Memo:
return (obj: clsCaseLevelEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CaseLevel]中不存在!(in ${ caseLevel_ConstructorName}.${ strThisFuncName})`;
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
export  async function CaseLevel_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsCaseLevelEN.con_CaseLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsCaseLevelEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsCaseLevelEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strCaseLevelId = strInValue;
if (IsNullOrEmpty(strCaseLevelId) == true)
{
return "";
}
const objCaseLevel = await CaseLevel_GetObjByCaseLevelIdCache(strCaseLevelId );
if (objCaseLevel == null) return "";
if (objCaseLevel.GetFldValue(strOutFldName) == null) return "";
return objCaseLevel.GetFldValue(strOutFldName).toString();
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
export  async function CaseLevel_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsCaseLevelEN.con_CaseLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrCaseLevel = await CaseLevel_GetObjLstCache();
if (arrCaseLevel == null) return [];
let arrCaseLevelSel = arrCaseLevel;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrCaseLevelSel = arrCaseLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrCaseLevelSel.length == 0) return [];
return arrCaseLevelSel.map(x=>x.caseLevelId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CaseLevel_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_GetFirstObjAsync(strWhereCond: string): Promise<clsCaseLevelEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const objCaseLevel = CaseLevel_GetObjFromJsonObj(returnObj);
return objCaseLevel;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsCaseLevelEN._CurrTabName;
if (IsNullOrEmpty(clsCaseLevelEN.WhereFormat) == false)
{
strWhereCond = clsCaseLevelEN.WhereFormat;
}
if (IsNullOrEmpty(clsCaseLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCaseLevelEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrCaseLevelExObjLstCache: Array<clsCaseLevelEN> = CacheHelper.Get(strKey);
const arrCaseLevelObjLstT = CaseLevel_GetObjLstByJSONObjLst(arrCaseLevelExObjLstCache);
return arrCaseLevelObjLstT;
}
try
{
const arrCaseLevelExObjLst = await CaseLevel_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrCaseLevelExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCaseLevelExObjLst.length);
console.log(strInfo);
return arrCaseLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, caseLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CaseLevel_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsCaseLevelEN._CurrTabName;
if (IsNullOrEmpty(clsCaseLevelEN.WhereFormat) == false)
{
strWhereCond = clsCaseLevelEN.WhereFormat;
}
if (IsNullOrEmpty(clsCaseLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCaseLevelEN.CacheAddiCondition);
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
const arrCaseLevelExObjLstCache: Array<clsCaseLevelEN> = JSON.parse(strTempObjLst);
const arrCaseLevelObjLstT = CaseLevel_GetObjLstByJSONObjLst(arrCaseLevelExObjLstCache);
return arrCaseLevelObjLstT;
}
try
{
const arrCaseLevelExObjLst = await CaseLevel_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrCaseLevelExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCaseLevelExObjLst.length);
console.log(strInfo);
return arrCaseLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, caseLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CaseLevel_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsCaseLevelEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrCaseLevelObjLstCache: Array<clsCaseLevelEN> = JSON.parse(strTempObjLst);
return arrCaseLevelObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function CaseLevel_GetObjLstAsync(strWhereCond: string): Promise<Array<clsCaseLevelEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", caseLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CaseLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsCaseLevelEN._CurrTabName;
if (IsNullOrEmpty(clsCaseLevelEN.WhereFormat) == false)
{
strWhereCond = clsCaseLevelEN.WhereFormat;
}
if (IsNullOrEmpty(clsCaseLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCaseLevelEN.CacheAddiCondition);
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
const arrCaseLevelExObjLstCache: Array<clsCaseLevelEN> = JSON.parse(strTempObjLst);
const arrCaseLevelObjLstT = CaseLevel_GetObjLstByJSONObjLst(arrCaseLevelExObjLstCache);
return arrCaseLevelObjLstT;
}
try
{
const arrCaseLevelExObjLst = await CaseLevel_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrCaseLevelExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCaseLevelExObjLst.length);
console.log(strInfo);
return arrCaseLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, caseLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CaseLevel_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsCaseLevelEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrCaseLevelObjLstCache: Array<clsCaseLevelEN> = JSON.parse(strTempObjLst);
return arrCaseLevelObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CaseLevel_GetObjLstCache(): Promise<Array<clsCaseLevelEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrCaseLevelObjLstCache;
switch (clsCaseLevelEN.CacheModeId)
{
case "04"://sessionStorage
arrCaseLevelObjLstCache = await CaseLevel_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrCaseLevelObjLstCache = await CaseLevel_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrCaseLevelObjLstCache = await CaseLevel_GetObjLstClientCache();
break;
default:
arrCaseLevelObjLstCache = await CaseLevel_GetObjLstClientCache();
break;
}
return arrCaseLevelObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CaseLevel_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrCaseLevelObjLstCache;
switch (clsCaseLevelEN.CacheModeId)
{
case "04"://sessionStorage
arrCaseLevelObjLstCache = await CaseLevel_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrCaseLevelObjLstCache = await CaseLevel_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrCaseLevelObjLstCache = null;
break;
default:
arrCaseLevelObjLstCache = null;
break;
}
return arrCaseLevelObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCaseLevelIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function CaseLevel_GetSubObjLstCache(objCaseLevelCond: clsCaseLevelEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrCaseLevelObjLstCache = await CaseLevel_GetObjLstCache();
let arrCaseLevelSel = arrCaseLevelObjLstCache;
if (objCaseLevelCond.sfFldComparisonOp == null || objCaseLevelCond.sfFldComparisonOp == "") return arrCaseLevelSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCaseLevelCond.sfFldComparisonOp);
//console.log("clsCaseLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCaseLevelCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCaseLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrCaseLevelSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objCaseLevelCond), caseLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsCaseLevelEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCaseLevelId:关键字列表
 * @returns 对象列表
 **/
export  async function CaseLevel_GetObjLstByCaseLevelIdLstAsync(arrCaseLevelId: Array<string>): Promise<Array<clsCaseLevelEN>>  
{
const strThisFuncName = "GetObjLstByCaseLevelIdLstAsync";
const strAction = "GetObjLstByCaseLevelIdLst";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCaseLevelId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", caseLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CaseLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param arrstrCaseLevelIdLst:关键字列表
 * @returns 对象列表
*/
export  async function CaseLevel_GetObjLstByCaseLevelIdLstCache(arrCaseLevelIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByCaseLevelIdLstCache";
try
{
const arrCaseLevelObjLstCache = await CaseLevel_GetObjLstCache();
const arrCaseLevelSel = arrCaseLevelObjLstCache.filter(x => arrCaseLevelIdLst.indexOf(x.caseLevelId)>-1);
return arrCaseLevelSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrCaseLevelIdLst.join(","), caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsCaseLevelEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", caseLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CaseLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsCaseLevelEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", caseLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CaseLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsCaseLevelEN>();
const arrCaseLevelObjLstCache = await CaseLevel_GetObjLstCache();
if (arrCaseLevelObjLstCache.length == 0) return arrCaseLevelObjLstCache;
let arrCaseLevelSel = arrCaseLevelObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objCaseLevelCond = new clsCaseLevelEN();
ObjectAssign(objCaseLevelCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsCaseLevelWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCaseLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrCaseLevelSel = arrCaseLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrCaseLevelSel.length == 0) return arrCaseLevelSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrCaseLevelSel = arrCaseLevelSel.sort(CaseLevel_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrCaseLevelSel = arrCaseLevelSel.sort(objPagerPara.sortFun);
}
arrCaseLevelSel = arrCaseLevelSel.slice(intStart, intEnd);     
return arrCaseLevelSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, caseLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsCaseLevelEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function CaseLevel_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsCaseLevelEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsCaseLevelEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", caseLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CaseLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param strCaseLevelId:关键字
 * @returns 获取删除的结果
 **/
export  async function CaseLevel_DelRecordAsync(strCaseLevelId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(caseLevel_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strCaseLevelId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param arrCaseLevelId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function CaseLevel_DelCaseLevelsAsync(arrCaseLevelId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelCaseLevelsAsync";
const strAction = "DelCaseLevels";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCaseLevelId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_DelCaseLevelsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelCaseLevelsByCondAsync";
const strAction = "DelCaseLevelsByCond";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param objCaseLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function CaseLevel_AddNewRecordAsync(objCaseLevelEN: clsCaseLevelEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objCaseLevelEN.caseLevelId === null || objCaseLevelEN.caseLevelId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objCaseLevelEN);
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCaseLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param objCaseLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function CaseLevel_AddNewRecordWithMaxIdAsync(objCaseLevelEN: clsCaseLevelEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCaseLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_AddNewObjSave(objCaseLevelEN: clsCaseLevelEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
CaseLevel_CheckPropertyNew(objCaseLevelEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ caseLevel_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await CaseLevel_IsExistAsync(objCaseLevelEN.caseLevelId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objCaseLevelEN.caseLevelId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await CaseLevel_AddNewRecordAsync(objCaseLevelEN);
if (returnBool == true)
{
CaseLevel_ReFreshCache();
}
else
{
const strInfo = `添加[案例等级(CaseLevel)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objCaseLevelEN.caseLevelId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ caseLevel_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function CaseLevel_UpdateObjSave(objCaseLevelEN: clsCaseLevelEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objCaseLevelEN.sfUpdFldSetStr = objCaseLevelEN.updFldString;//设置哪些字段被修改(脏字段)
if (objCaseLevelEN.caseLevelId == "" || objCaseLevelEN.caseLevelId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
CaseLevel_CheckProperty4Update(objCaseLevelEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ caseLevel_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await CaseLevel_UpdateRecordAsync(objCaseLevelEN);
if (returnBool == true)
{
CaseLevel_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ caseLevel_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objCaseLevelEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function CaseLevel_AddNewRecordWithReturnKeyAsync(objCaseLevelEN: clsCaseLevelEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCaseLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param objCaseLevelEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function CaseLevel_UpdateRecordAsync(objCaseLevelEN: clsCaseLevelEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objCaseLevelEN.sfUpdFldSetStr === undefined || objCaseLevelEN.sfUpdFldSetStr === null || objCaseLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCaseLevelEN.caseLevelId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCaseLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param objCaseLevelEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function CaseLevel_EditRecordExAsync(objCaseLevelEN: clsCaseLevelEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objCaseLevelEN.sfUpdFldSetStr === undefined || objCaseLevelEN.sfUpdFldSetStr === null || objCaseLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCaseLevelEN.caseLevelId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCaseLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param objCaseLevelEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CaseLevel_UpdateWithConditionAsync(objCaseLevelEN: clsCaseLevelEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objCaseLevelEN.sfUpdFldSetStr === undefined || objCaseLevelEN.sfUpdFldSetStr === null || objCaseLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCaseLevelEN.caseLevelId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);
objCaseLevelEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCaseLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param objstrCaseLevelIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function CaseLevel_IsExistRecordCache(objCaseLevelCond: clsCaseLevelEN) {
const strThisFuncName = "IsExistRecordCache";
const arrCaseLevelObjLstCache = await CaseLevel_GetObjLstCache();
if (arrCaseLevelObjLstCache == null) return false;
let arrCaseLevelSel = arrCaseLevelObjLstCache;
if (objCaseLevelCond.sfFldComparisonOp == null || objCaseLevelCond.sfFldComparisonOp == "") return arrCaseLevelSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCaseLevelCond.sfFldComparisonOp);
//console.log("clsCaseLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCaseLevelCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCaseLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrCaseLevelSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objCaseLevelCond), caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param strCaseLevelId:所给的关键字
 * @returns 对象
*/
export  async function CaseLevel_IsExistCache(strCaseLevelId:string) {
const strThisFuncName = "IsExistCache";
const arrCaseLevelObjLstCache = await CaseLevel_GetObjLstCache();
if (arrCaseLevelObjLstCache == null) return false;
try
{
const arrCaseLevelSel = arrCaseLevelObjLstCache.filter(x => x.caseLevelId == strCaseLevelId);
if (arrCaseLevelSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strCaseLevelId, caseLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strCaseLevelId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function CaseLevel_IsExistAsync(strCaseLevelId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCaseLevelId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
 * @param objCaseLevelCond:条件对象
 * @returns 对象列表记录数
*/
export  async function CaseLevel_GetRecCountByCondCache(objCaseLevelCond: clsCaseLevelEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrCaseLevelObjLstCache = await CaseLevel_GetObjLstCache();
if (arrCaseLevelObjLstCache == null) return 0;
let arrCaseLevelSel = arrCaseLevelObjLstCache;
if (objCaseLevelCond.sfFldComparisonOp == null || objCaseLevelCond.sfFldComparisonOp == "") return arrCaseLevelSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCaseLevelCond.sfFldComparisonOp);
//console.log("clsCaseLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCaseLevelCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCaseLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrCaseLevelSel = arrCaseLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCaseLevelSel = arrCaseLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrCaseLevelSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objCaseLevelCond), caseLevel_ConstructorName, strThisFuncName);
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
export  async function CaseLevel_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(caseLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, caseLevel_ConstructorName, strThisFuncName);
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
export  function CaseLevel_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function CaseLevel_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsCaseLevelEN._CurrTabName;
switch (clsCaseLevelEN.CacheModeId)
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
clsCaseLevelEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function CaseLevel_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsCaseLevelEN._CurrTabName;
switch (clsCaseLevelEN.CacheModeId)
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
clsCaseLevelEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function CaseLevel_GetLastRefreshTime():string
{
if (clsCaseLevelEN._RefreshTimeLst.length == 0) return "";
return clsCaseLevelEN._RefreshTimeLst[clsCaseLevelEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function CaseLevel_BindDdl_CaseLevelIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_CaseLevelIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_CaseLevelIdInDivCache");
const arrObjLstSel = await CaseLevel_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsCaseLevelEN.con_CaseLevelId, clsCaseLevelEN.con_CaseLevelName, "案例等级...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function CaseLevel_GetArrCaseLevel()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_CaseLevelIdInDivCache");
const arrCaseLevel = new Array<clsCaseLevelEN>();
const arrObjLstSel = await CaseLevel_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsCaseLevelEN();
obj0.caseLevelId = '0';
obj0.caseLevelName = '选案例等级...';
arrCaseLevel.push(obj0);
arrObjLstSel.forEach(x => arrCaseLevel.push(x));
return arrCaseLevel;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function CaseLevel_CheckPropertyNew(pobjCaseLevelEN: clsCaseLevelEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjCaseLevelEN.caseLevelName) === true )
{
 throw new Error(`(errid:Watl000411)字段[案例等级名称]不能为空(In 案例等级)!(clsCaseLevelBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCaseLevelEN.caseLevelId) == false && GetStrLen(pobjCaseLevelEN.caseLevelId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[课例等级Id(caseLevelId)]的长度不能超过2(In 案例等级(CaseLevel))!值:${pobjCaseLevelEN.caseLevelId}(clsCaseLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjCaseLevelEN.caseLevelName) == false && GetStrLen(pobjCaseLevelEN.caseLevelName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[案例等级名称(caseLevelName)]的长度不能超过30(In 案例等级(CaseLevel))!值:${pobjCaseLevelEN.caseLevelName}(clsCaseLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjCaseLevelEN.memo) == false && GetStrLen(pobjCaseLevelEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 案例等级(CaseLevel))!值:${pobjCaseLevelEN.memo}(clsCaseLevelBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjCaseLevelEN.caseLevelId) == false && undefined !== pobjCaseLevelEN.caseLevelId && tzDataType.isString(pobjCaseLevelEN.caseLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课例等级Id(caseLevelId)]的值:[${pobjCaseLevelEN.caseLevelId}], 非法,应该为字符型(In 案例等级(CaseLevel))!(clsCaseLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjCaseLevelEN.caseLevelName) == false && undefined !== pobjCaseLevelEN.caseLevelName && tzDataType.isString(pobjCaseLevelEN.caseLevelName) === false)
{
 throw new Error(`(errid:Watl000414)字段[案例等级名称(caseLevelName)]的值:[${pobjCaseLevelEN.caseLevelName}], 非法,应该为字符型(In 案例等级(CaseLevel))!(clsCaseLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjCaseLevelEN.memo) == false && undefined !== pobjCaseLevelEN.memo && tzDataType.isString(pobjCaseLevelEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjCaseLevelEN.memo}], 非法,应该为字符型(In 案例等级(CaseLevel))!(clsCaseLevelBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function CaseLevel_CheckProperty4Update(pobjCaseLevelEN: clsCaseLevelEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCaseLevelEN.caseLevelId) == false && GetStrLen(pobjCaseLevelEN.caseLevelId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[课例等级Id(caseLevelId)]的长度不能超过2(In 案例等级(CaseLevel))!值:${pobjCaseLevelEN.caseLevelId}(clsCaseLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjCaseLevelEN.caseLevelName) == false && GetStrLen(pobjCaseLevelEN.caseLevelName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[案例等级名称(caseLevelName)]的长度不能超过30(In 案例等级(CaseLevel))!值:${pobjCaseLevelEN.caseLevelName}(clsCaseLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjCaseLevelEN.memo) == false && GetStrLen(pobjCaseLevelEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 案例等级(CaseLevel))!值:${pobjCaseLevelEN.memo}(clsCaseLevelBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjCaseLevelEN.caseLevelId) == false && undefined !== pobjCaseLevelEN.caseLevelId && tzDataType.isString(pobjCaseLevelEN.caseLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课例等级Id(caseLevelId)]的值:[${pobjCaseLevelEN.caseLevelId}], 非法,应该为字符型(In 案例等级(CaseLevel))!(clsCaseLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjCaseLevelEN.caseLevelName) == false && undefined !== pobjCaseLevelEN.caseLevelName && tzDataType.isString(pobjCaseLevelEN.caseLevelName) === false)
{
 throw new Error(`(errid:Watl000417)字段[案例等级名称(caseLevelName)]的值:[${pobjCaseLevelEN.caseLevelName}], 非法,应该为字符型(In 案例等级(CaseLevel))!(clsCaseLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjCaseLevelEN.memo) == false && undefined !== pobjCaseLevelEN.memo && tzDataType.isString(pobjCaseLevelEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjCaseLevelEN.memo}], 非法,应该为字符型(In 案例等级(CaseLevel))!(clsCaseLevelBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjCaseLevelEN.caseLevelId) === true 
 || pobjCaseLevelEN.caseLevelId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[课例等级Id]不能为空(In 案例等级)!(clsCaseLevelBL:CheckProperty4Update)`);
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
export  function CaseLevel_GetJSONStrByObj (pobjCaseLevelEN: clsCaseLevelEN): string
{
pobjCaseLevelEN.sfUpdFldSetStr = pobjCaseLevelEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjCaseLevelEN);
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
export  function CaseLevel_GetObjLstByJSONStr (strJSON: string): Array<clsCaseLevelEN>
{
let arrCaseLevelObjLst = new Array<clsCaseLevelEN>();
if (strJSON === "")
{
return arrCaseLevelObjLst;
}
try
{
arrCaseLevelObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrCaseLevelObjLst;
}
return arrCaseLevelObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCaseLevelObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function CaseLevel_GetObjLstByJSONObjLst (arrCaseLevelObjLstS: Array<clsCaseLevelEN>): Array<clsCaseLevelEN>
{
const arrCaseLevelObjLst = new Array<clsCaseLevelEN>();
for (const objInFor of arrCaseLevelObjLstS) {
const obj1 = CaseLevel_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrCaseLevelObjLst.push(obj1);
}
return arrCaseLevelObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function CaseLevel_GetObjByJSONStr (strJSON: string): clsCaseLevelEN
{
let pobjCaseLevelEN = new clsCaseLevelEN();
if (strJSON === "")
{
return pobjCaseLevelEN;
}
try
{
pobjCaseLevelEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjCaseLevelEN;
}
return pobjCaseLevelEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function CaseLevel_GetCombineCondition(objCaseLevelCond: clsCaseLevelEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objCaseLevelCond.dicFldComparisonOp, clsCaseLevelEN.con_CaseLevelId) == true)
{
const strComparisonOpCaseLevelId:string = objCaseLevelCond.dicFldComparisonOp[clsCaseLevelEN.con_CaseLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCaseLevelEN.con_CaseLevelId, objCaseLevelCond.caseLevelId, strComparisonOpCaseLevelId);
}
if (Object.prototype.hasOwnProperty.call(objCaseLevelCond.dicFldComparisonOp, clsCaseLevelEN.con_CaseLevelName) == true)
{
const strComparisonOpCaseLevelName:string = objCaseLevelCond.dicFldComparisonOp[clsCaseLevelEN.con_CaseLevelName];
strWhereCond += Format(" And {0} {2} '{1}'", clsCaseLevelEN.con_CaseLevelName, objCaseLevelCond.caseLevelName, strComparisonOpCaseLevelName);
}
if (Object.prototype.hasOwnProperty.call(objCaseLevelCond.dicFldComparisonOp, clsCaseLevelEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objCaseLevelCond.dicFldComparisonOp[clsCaseLevelEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsCaseLevelEN.con_Memo, objCaseLevelCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objCaseLevelENS:源对象
 * @param objCaseLevelENT:目标对象
*/
export  function CaseLevel_CopyObjTo(objCaseLevelENS: clsCaseLevelEN , objCaseLevelENT: clsCaseLevelEN ): void 
{
objCaseLevelENT.caseLevelId = objCaseLevelENS.caseLevelId; //课例等级Id
objCaseLevelENT.caseLevelName = objCaseLevelENS.caseLevelName; //案例等级名称
objCaseLevelENT.memo = objCaseLevelENS.memo; //备注
objCaseLevelENT.sfUpdFldSetStr = objCaseLevelENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCaseLevelENS:源对象
 * @param objCaseLevelENT:目标对象
*/
export  function CaseLevel_GetObjFromJsonObj(objCaseLevelENS: clsCaseLevelEN): clsCaseLevelEN 
{
 const objCaseLevelENT: clsCaseLevelEN = new clsCaseLevelEN();
ObjectAssign(objCaseLevelENT, objCaseLevelENS);
 return objCaseLevelENT;
}