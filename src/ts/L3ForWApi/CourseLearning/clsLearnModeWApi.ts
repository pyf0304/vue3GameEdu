
 /**
 * 类名:clsLearnModeWApi
 * 表名:LearnMode(01120154)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:10
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学习模式(LearnMode)
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
import { clsLearnModeEN } from "@/ts/L0Entity/CourseLearning/clsLearnModeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const learnMode_Controller = "LearnModeApi";
 export const learnMode_ConstructorName = "learnMode";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strLearnModeId:关键字
 * @returns 对象
 **/
export  async function LearnMode_GetObjByLearnModeIdAsync(strLearnModeId: string): Promise<clsLearnModeEN|null>  
{
const strThisFuncName = "GetObjByLearnModeIdAsync";

if (IsNullOrEmpty(strLearnModeId) == true)
{
  const strMsg = Format("参数:[strLearnModeId]不能为空!(In clsLearnModeWApi.GetObjByLearnModeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strLearnModeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strLearnModeId]的长度:[{0}]不正确!(clsLearnModeWApi.GetObjByLearnModeIdAsync)", strLearnModeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByLearnModeId";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strLearnModeId,
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
const objLearnMode = LearnMode_GetObjFromJsonObj(returnObj);
return objLearnMode;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param strLearnModeId:所给的关键字
 * @returns 对象
*/
export  async function LearnMode_GetObjByLearnModeIdlocalStorage(strLearnModeId: string) {
const strThisFuncName = "GetObjByLearnModeIdlocalStorage";

if (IsNullOrEmpty(strLearnModeId) == true)
{
  const strMsg = Format("参数:[strLearnModeId]不能为空!(In clsLearnModeWApi.GetObjByLearnModeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strLearnModeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strLearnModeId]的长度:[{0}]不正确!(clsLearnModeWApi.GetObjByLearnModeIdlocalStorage)", strLearnModeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsLearnModeEN._CurrTabName, strLearnModeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objLearnModeCache: clsLearnModeEN = JSON.parse(strTempObj);
return objLearnModeCache;
}
try
{
const objLearnMode = await LearnMode_GetObjByLearnModeIdAsync(strLearnModeId);
if (objLearnMode != null)
{
localStorage.setItem(strKey, JSON.stringify(objLearnMode));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objLearnMode;
}
return objLearnMode;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strLearnModeId, learnMode_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strLearnModeId:所给的关键字
 * @returns 对象
*/
export  async function LearnMode_GetObjByLearnModeIdCache(strLearnModeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByLearnModeIdCache";

if (IsNullOrEmpty(strLearnModeId) == true)
{
  const strMsg = Format("参数:[strLearnModeId]不能为空!(In clsLearnModeWApi.GetObjByLearnModeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strLearnModeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strLearnModeId]的长度:[{0}]不正确!(clsLearnModeWApi.GetObjByLearnModeIdCache)", strLearnModeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrLearnModeObjLstCache = await LearnMode_GetObjLstCache();
try
{
const arrLearnModeSel = arrLearnModeObjLstCache.filter(x => 
 x.learnModeId == strLearnModeId );
let objLearnMode: clsLearnModeEN;
if (arrLearnModeSel.length > 0)
{
objLearnMode = arrLearnModeSel[0];
return objLearnMode;
}
else
{
if (bolTryAsyncOnce == true)
{
const objLearnModeConst = await LearnMode_GetObjByLearnModeIdAsync(strLearnModeId);
if (objLearnModeConst != null)
{
LearnMode_ReFreshThisCache();
return objLearnModeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strLearnModeId, learnMode_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objLearnMode:所给的对象
 * @returns 对象
*/
export  async function LearnMode_UpdateObjInLstCache(objLearnMode: clsLearnModeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrLearnModeObjLstCache = await LearnMode_GetObjLstCache();
const obj = arrLearnModeObjLstCache.find(x => x.learnModeName == objLearnMode.learnModeName);
if (obj != null)
{
objLearnMode.learnModeId = obj.learnModeId;
ObjectAssign( obj, objLearnMode);
}
else
{
arrLearnModeObjLstCache.push(objLearnMode);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, learnMode_ConstructorName, strThisFuncName);
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
export  function LearnMode_SortFunDefa(a:clsLearnModeEN , b:clsLearnModeEN): number 
{
return a.learnModeId.localeCompare(b.learnModeId);
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
export  function LearnMode_SortFunDefa2Fld(a:clsLearnModeEN , b:clsLearnModeEN): number 
{
if (a.learnModeName == b.learnModeName) return a.learnModeENName.localeCompare(b.learnModeENName);
else return a.learnModeName.localeCompare(b.learnModeName);
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
export  function LearnMode_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsLearnModeEN.con_LearnModeId:
return (a: clsLearnModeEN, b: clsLearnModeEN) => {
return a.learnModeId.localeCompare(b.learnModeId);
}
case clsLearnModeEN.con_LearnModeName:
return (a: clsLearnModeEN, b: clsLearnModeEN) => {
return a.learnModeName.localeCompare(b.learnModeName);
}
case clsLearnModeEN.con_LearnModeENName:
return (a: clsLearnModeEN, b: clsLearnModeEN) => {
if (a.learnModeENName == null) return -1;
if (b.learnModeENName == null) return 1;
return a.learnModeENName.localeCompare(b.learnModeENName);
}
case clsLearnModeEN.con_Memo:
return (a: clsLearnModeEN, b: clsLearnModeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[LearnMode]中不存在!(in ${ learnMode_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsLearnModeEN.con_LearnModeId:
return (a: clsLearnModeEN, b: clsLearnModeEN) => {
return b.learnModeId.localeCompare(a.learnModeId);
}
case clsLearnModeEN.con_LearnModeName:
return (a: clsLearnModeEN, b: clsLearnModeEN) => {
return b.learnModeName.localeCompare(a.learnModeName);
}
case clsLearnModeEN.con_LearnModeENName:
return (a: clsLearnModeEN, b: clsLearnModeEN) => {
if (b.learnModeENName == null) return -1;
if (a.learnModeENName == null) return 1;
return b.learnModeENName.localeCompare(a.learnModeENName);
}
case clsLearnModeEN.con_Memo:
return (a: clsLearnModeEN, b: clsLearnModeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[LearnMode]中不存在!(in ${ learnMode_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strLearnModeId:所给的关键字
 * @returns 对象
*/
export  async function LearnMode_GetNameByLearnModeIdCache(strLearnModeId: string) {

if (IsNullOrEmpty(strLearnModeId) == true)
{
  const strMsg = Format("参数:[strLearnModeId]不能为空!(In clsLearnModeWApi.GetNameByLearnModeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strLearnModeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strLearnModeId]的长度:[{0}]不正确!(clsLearnModeWApi.GetNameByLearnModeIdCache)", strLearnModeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrLearnModeObjLstCache = await LearnMode_GetObjLstCache();
if (arrLearnModeObjLstCache == null) return "";
try
{
const arrLearnModeSel = arrLearnModeObjLstCache.filter(x => 
 x.learnModeId == strLearnModeId );
let objLearnMode: clsLearnModeEN;
if (arrLearnModeSel.length > 0)
{
objLearnMode = arrLearnModeSel[0];
return objLearnMode.learnModeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strLearnModeId);
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
export  async function LearnMode_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsLearnModeEN.con_LearnModeId:
return (obj: clsLearnModeEN) => {
return obj.learnModeId === value;
}
case clsLearnModeEN.con_LearnModeName:
return (obj: clsLearnModeEN) => {
return obj.learnModeName === value;
}
case clsLearnModeEN.con_LearnModeENName:
return (obj: clsLearnModeEN) => {
return obj.learnModeENName === value;
}
case clsLearnModeEN.con_Memo:
return (obj: clsLearnModeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[LearnMode]中不存在!(in ${ learnMode_ConstructorName}.${ strThisFuncName})`;
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
export  async function LearnMode_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsLearnModeEN.con_LearnModeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsLearnModeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsLearnModeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strLearnModeId = strInValue;
if (IsNullOrEmpty(strLearnModeId) == true)
{
return "";
}
const objLearnMode = await LearnMode_GetObjByLearnModeIdCache(strLearnModeId );
if (objLearnMode == null) return "";
if (objLearnMode.GetFldValue(strOutFldName) == null) return "";
return objLearnMode.GetFldValue(strOutFldName).toString();
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
export  async function LearnMode_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsLearnModeEN.con_LearnModeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrLearnMode = await LearnMode_GetObjLstCache();
if (arrLearnMode == null) return [];
let arrLearnModeSel = arrLearnMode;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrLearnModeSel = arrLearnModeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrLearnModeSel.length == 0) return [];
return arrLearnModeSel.map(x=>x.learnModeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function LearnMode_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_GetFirstObjAsync(strWhereCond: string): Promise<clsLearnModeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const objLearnMode = LearnMode_GetObjFromJsonObj(returnObj);
return objLearnMode;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsLearnModeEN._CurrTabName;
if (IsNullOrEmpty(clsLearnModeEN.WhereFormat) == false)
{
strWhereCond = clsLearnModeEN.WhereFormat;
}
if (IsNullOrEmpty(clsLearnModeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsLearnModeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrLearnModeExObjLstCache: Array<clsLearnModeEN> = CacheHelper.Get(strKey);
const arrLearnModeObjLstT = LearnMode_GetObjLstByJSONObjLst(arrLearnModeExObjLstCache);
return arrLearnModeObjLstT;
}
try
{
const arrLearnModeExObjLst = await LearnMode_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrLearnModeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrLearnModeExObjLst.length);
console.log(strInfo);
return arrLearnModeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, learnMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function LearnMode_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsLearnModeEN._CurrTabName;
if (IsNullOrEmpty(clsLearnModeEN.WhereFormat) == false)
{
strWhereCond = clsLearnModeEN.WhereFormat;
}
if (IsNullOrEmpty(clsLearnModeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsLearnModeEN.CacheAddiCondition);
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
const arrLearnModeExObjLstCache: Array<clsLearnModeEN> = JSON.parse(strTempObjLst);
const arrLearnModeObjLstT = LearnMode_GetObjLstByJSONObjLst(arrLearnModeExObjLstCache);
return arrLearnModeObjLstT;
}
try
{
const arrLearnModeExObjLst = await LearnMode_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrLearnModeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrLearnModeExObjLst.length);
console.log(strInfo);
return arrLearnModeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, learnMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function LearnMode_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsLearnModeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrLearnModeObjLstCache: Array<clsLearnModeEN> = JSON.parse(strTempObjLst);
return arrLearnModeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function LearnMode_GetObjLstAsync(strWhereCond: string): Promise<Array<clsLearnModeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", learnMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = LearnMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsLearnModeEN._CurrTabName;
if (IsNullOrEmpty(clsLearnModeEN.WhereFormat) == false)
{
strWhereCond = clsLearnModeEN.WhereFormat;
}
if (IsNullOrEmpty(clsLearnModeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsLearnModeEN.CacheAddiCondition);
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
const arrLearnModeExObjLstCache: Array<clsLearnModeEN> = JSON.parse(strTempObjLst);
const arrLearnModeObjLstT = LearnMode_GetObjLstByJSONObjLst(arrLearnModeExObjLstCache);
return arrLearnModeObjLstT;
}
try
{
const arrLearnModeExObjLst = await LearnMode_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrLearnModeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrLearnModeExObjLst.length);
console.log(strInfo);
return arrLearnModeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, learnMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function LearnMode_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsLearnModeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrLearnModeObjLstCache: Array<clsLearnModeEN> = JSON.parse(strTempObjLst);
return arrLearnModeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function LearnMode_GetObjLstCache(): Promise<Array<clsLearnModeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrLearnModeObjLstCache;
switch (clsLearnModeEN.CacheModeId)
{
case "04"://sessionStorage
arrLearnModeObjLstCache = await LearnMode_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrLearnModeObjLstCache = await LearnMode_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrLearnModeObjLstCache = await LearnMode_GetObjLstClientCache();
break;
default:
arrLearnModeObjLstCache = await LearnMode_GetObjLstClientCache();
break;
}
return arrLearnModeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function LearnMode_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrLearnModeObjLstCache;
switch (clsLearnModeEN.CacheModeId)
{
case "04"://sessionStorage
arrLearnModeObjLstCache = await LearnMode_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrLearnModeObjLstCache = await LearnMode_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrLearnModeObjLstCache = null;
break;
default:
arrLearnModeObjLstCache = null;
break;
}
return arrLearnModeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrLearnModeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function LearnMode_GetSubObjLstCache(objLearnModeCond: clsLearnModeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrLearnModeObjLstCache = await LearnMode_GetObjLstCache();
let arrLearnModeSel = arrLearnModeObjLstCache;
if (objLearnModeCond.sfFldComparisonOp == null || objLearnModeCond.sfFldComparisonOp == "") return arrLearnModeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objLearnModeCond.sfFldComparisonOp);
//console.log("clsLearnModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objLearnModeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objLearnModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrLearnModeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objLearnModeCond), learnMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsLearnModeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrLearnModeId:关键字列表
 * @returns 对象列表
 **/
export  async function LearnMode_GetObjLstByLearnModeIdLstAsync(arrLearnModeId: Array<string>): Promise<Array<clsLearnModeEN>>  
{
const strThisFuncName = "GetObjLstByLearnModeIdLstAsync";
const strAction = "GetObjLstByLearnModeIdLst";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrLearnModeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", learnMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = LearnMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param arrstrLearnModeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function LearnMode_GetObjLstByLearnModeIdLstCache(arrLearnModeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByLearnModeIdLstCache";
try
{
const arrLearnModeObjLstCache = await LearnMode_GetObjLstCache();
const arrLearnModeSel = arrLearnModeObjLstCache.filter(x => arrLearnModeIdLst.indexOf(x.learnModeId)>-1);
return arrLearnModeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrLearnModeIdLst.join(","), learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsLearnModeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", learnMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = LearnMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsLearnModeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", learnMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = LearnMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsLearnModeEN>();
const arrLearnModeObjLstCache = await LearnMode_GetObjLstCache();
if (arrLearnModeObjLstCache.length == 0) return arrLearnModeObjLstCache;
let arrLearnModeSel = arrLearnModeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objLearnModeCond = new clsLearnModeEN();
ObjectAssign(objLearnModeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsLearnModeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objLearnModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrLearnModeSel = arrLearnModeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrLearnModeSel.length == 0) return arrLearnModeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrLearnModeSel = arrLearnModeSel.sort(LearnMode_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrLearnModeSel = arrLearnModeSel.sort(objPagerPara.sortFun);
}
arrLearnModeSel = arrLearnModeSel.slice(intStart, intEnd);     
return arrLearnModeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, learnMode_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsLearnModeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function LearnMode_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsLearnModeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsLearnModeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", learnMode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = LearnMode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param strLearnModeId:关键字
 * @returns 获取删除的结果
 **/
export  async function LearnMode_DelRecordAsync(strLearnModeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(learnMode_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strLearnModeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param arrLearnModeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function LearnMode_DelLearnModesAsync(arrLearnModeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelLearnModesAsync";
const strAction = "DelLearnModes";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrLearnModeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_DelLearnModesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelLearnModesByCondAsync";
const strAction = "DelLearnModesByCond";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param objLearnModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function LearnMode_AddNewRecordAsync(objLearnModeEN: clsLearnModeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objLearnModeEN);
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objLearnModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param objLearnModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function LearnMode_AddNewRecordWithMaxIdAsync(objLearnModeEN: clsLearnModeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objLearnModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_AddNewObjSave(objLearnModeEN: clsLearnModeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
LearnMode_CheckPropertyNew(objLearnModeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ learnMode_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await LearnMode_CheckUniCond4Add(objLearnModeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await LearnMode_AddNewRecordWithMaxIdAsync(objLearnModeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
LearnMode_ReFreshCache();
}
else
{
const strInfo = `添加[学习模式(LearnMode)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ learnMode_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function LearnMode_CheckUniCond4Add(objLearnModeEN: clsLearnModeEN): Promise<boolean>{
const strUniquenessCondition = LearnMode_GetUniCondStr(objLearnModeEN);
const bolIsExistCondition = await LearnMode_IsExistRecordAsync(strUniquenessCondition);
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
export  async function LearnMode_CheckUniCond4Update(objLearnModeEN: clsLearnModeEN): Promise<boolean>{
const strUniquenessCondition = LearnMode_GetUniCondStr4Update(objLearnModeEN);
const bolIsExistCondition = await LearnMode_IsExistRecordAsync(strUniquenessCondition);
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
export  async function LearnMode_UpdateObjSave(objLearnModeEN: clsLearnModeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objLearnModeEN.sfUpdFldSetStr = objLearnModeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objLearnModeEN.learnModeId == "" || objLearnModeEN.learnModeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
LearnMode_CheckProperty4Update(objLearnModeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ learnMode_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await LearnMode_CheckUniCond4Update(objLearnModeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await LearnMode_UpdateRecordAsync(objLearnModeEN);
if (returnBool == true)
{
LearnMode_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ learnMode_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objLearnModeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function LearnMode_AddNewRecordWithReturnKeyAsync(objLearnModeEN: clsLearnModeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objLearnModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param objLearnModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function LearnMode_UpdateRecordAsync(objLearnModeEN: clsLearnModeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objLearnModeEN.sfUpdFldSetStr === undefined || objLearnModeEN.sfUpdFldSetStr === null || objLearnModeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objLearnModeEN.learnModeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objLearnModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param objLearnModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function LearnMode_EditRecordExAsync(objLearnModeEN: clsLearnModeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objLearnModeEN.sfUpdFldSetStr === undefined || objLearnModeEN.sfUpdFldSetStr === null || objLearnModeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objLearnModeEN.learnModeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objLearnModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param objLearnModeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function LearnMode_UpdateWithConditionAsync(objLearnModeEN: clsLearnModeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objLearnModeEN.sfUpdFldSetStr === undefined || objLearnModeEN.sfUpdFldSetStr === null || objLearnModeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objLearnModeEN.learnModeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);
objLearnModeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objLearnModeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param objstrLearnModeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function LearnMode_IsExistRecordCache(objLearnModeCond: clsLearnModeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrLearnModeObjLstCache = await LearnMode_GetObjLstCache();
if (arrLearnModeObjLstCache == null) return false;
let arrLearnModeSel = arrLearnModeObjLstCache;
if (objLearnModeCond.sfFldComparisonOp == null || objLearnModeCond.sfFldComparisonOp == "") return arrLearnModeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objLearnModeCond.sfFldComparisonOp);
//console.log("clsLearnModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objLearnModeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objLearnModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrLearnModeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objLearnModeCond), learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param strLearnModeId:所给的关键字
 * @returns 对象
*/
export  async function LearnMode_IsExistCache(strLearnModeId:string) {
const strThisFuncName = "IsExistCache";
const arrLearnModeObjLstCache = await LearnMode_GetObjLstCache();
if (arrLearnModeObjLstCache == null) return false;
try
{
const arrLearnModeSel = arrLearnModeObjLstCache.filter(x => x.learnModeId == strLearnModeId);
if (arrLearnModeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strLearnModeId, learnMode_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strLearnModeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function LearnMode_IsExistAsync(strLearnModeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strLearnModeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
 * @param objLearnModeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function LearnMode_GetRecCountByCondCache(objLearnModeCond: clsLearnModeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrLearnModeObjLstCache = await LearnMode_GetObjLstCache();
if (arrLearnModeObjLstCache == null) return 0;
let arrLearnModeSel = arrLearnModeObjLstCache;
if (objLearnModeCond.sfFldComparisonOp == null || objLearnModeCond.sfFldComparisonOp == "") return arrLearnModeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objLearnModeCond.sfFldComparisonOp);
//console.log("clsLearnModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objLearnModeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objLearnModeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrLearnModeSel = arrLearnModeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrLearnModeSel = arrLearnModeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrLearnModeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objLearnModeCond), learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  async function LearnMode_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(learnMode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, learnMode_ConstructorName, strThisFuncName);
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
export  function LearnMode_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function LearnMode_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsLearnModeEN._CurrTabName;
switch (clsLearnModeEN.CacheModeId)
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
clsLearnModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function LearnMode_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsLearnModeEN._CurrTabName;
switch (clsLearnModeEN.CacheModeId)
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
clsLearnModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function LearnMode_GetLastRefreshTime():string
{
if (clsLearnModeEN._RefreshTimeLst.length == 0) return "";
return clsLearnModeEN._RefreshTimeLst[clsLearnModeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function LearnMode_BindDdl_LearnModeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_LearnModeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_LearnModeIdInDivCache");
const arrObjLstSel = await LearnMode_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsLearnModeEN.con_LearnModeId, clsLearnModeEN.con_LearnModeName, "学习模式...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function LearnMode_GetArrLearnMode()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_LearnModeIdInDivCache");
const arrLearnMode = new Array<clsLearnModeEN>();
const arrObjLstSel = await LearnMode_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsLearnModeEN();
obj0.learnModeId = '0';
obj0.learnModeName = '选学习模式...';
arrLearnMode.push(obj0);
arrObjLstSel.forEach(x => arrLearnMode.push(x));
return arrLearnMode;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function LearnMode_CheckPropertyNew(pobjLearnModeEN: clsLearnModeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjLearnModeEN.learnModeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[学习模式名]不能为空(In 学习模式)!(clsLearnModeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjLearnModeEN.learnModeId) == false && GetStrLen(pobjLearnModeEN.learnModeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学习模式Id(learnModeId)]的长度不能超过4(In 学习模式(LearnMode))!值:${pobjLearnModeEN.learnModeId}(clsLearnModeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.learnModeName) == false && GetStrLen(pobjLearnModeEN.learnModeName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[学习模式名(learnModeName)]的长度不能超过30(In 学习模式(LearnMode))!值:${pobjLearnModeEN.learnModeName}(clsLearnModeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.learnModeENName) == false && GetStrLen(pobjLearnModeEN.learnModeENName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[学习模式英文名(learnModeENName)]的长度不能超过30(In 学习模式(LearnMode))!值:${pobjLearnModeEN.learnModeENName}(clsLearnModeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.memo) == false && GetStrLen(pobjLearnModeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 学习模式(LearnMode))!值:${pobjLearnModeEN.memo}(clsLearnModeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjLearnModeEN.learnModeId) == false && undefined !== pobjLearnModeEN.learnModeId && tzDataType.isString(pobjLearnModeEN.learnModeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[学习模式Id(learnModeId)]的值:[${pobjLearnModeEN.learnModeId}], 非法,应该为字符型(In 学习模式(LearnMode))!(clsLearnModeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.learnModeName) == false && undefined !== pobjLearnModeEN.learnModeName && tzDataType.isString(pobjLearnModeEN.learnModeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[学习模式名(learnModeName)]的值:[${pobjLearnModeEN.learnModeName}], 非法,应该为字符型(In 学习模式(LearnMode))!(clsLearnModeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.learnModeENName) == false && undefined !== pobjLearnModeEN.learnModeENName && tzDataType.isString(pobjLearnModeEN.learnModeENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[学习模式英文名(learnModeENName)]的值:[${pobjLearnModeEN.learnModeENName}], 非法,应该为字符型(In 学习模式(LearnMode))!(clsLearnModeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.memo) == false && undefined !== pobjLearnModeEN.memo && tzDataType.isString(pobjLearnModeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjLearnModeEN.memo}], 非法,应该为字符型(In 学习模式(LearnMode))!(clsLearnModeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function LearnMode_CheckProperty4Update(pobjLearnModeEN: clsLearnModeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjLearnModeEN.learnModeId) == false && GetStrLen(pobjLearnModeEN.learnModeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学习模式Id(learnModeId)]的长度不能超过4(In 学习模式(LearnMode))!值:${pobjLearnModeEN.learnModeId}(clsLearnModeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.learnModeName) == false && GetStrLen(pobjLearnModeEN.learnModeName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[学习模式名(learnModeName)]的长度不能超过30(In 学习模式(LearnMode))!值:${pobjLearnModeEN.learnModeName}(clsLearnModeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.learnModeENName) == false && GetStrLen(pobjLearnModeEN.learnModeENName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[学习模式英文名(learnModeENName)]的长度不能超过30(In 学习模式(LearnMode))!值:${pobjLearnModeEN.learnModeENName}(clsLearnModeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.memo) == false && GetStrLen(pobjLearnModeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 学习模式(LearnMode))!值:${pobjLearnModeEN.memo}(clsLearnModeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjLearnModeEN.learnModeId) == false && undefined !== pobjLearnModeEN.learnModeId && tzDataType.isString(pobjLearnModeEN.learnModeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[学习模式Id(learnModeId)]的值:[${pobjLearnModeEN.learnModeId}], 非法,应该为字符型(In 学习模式(LearnMode))!(clsLearnModeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.learnModeName) == false && undefined !== pobjLearnModeEN.learnModeName && tzDataType.isString(pobjLearnModeEN.learnModeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[学习模式名(learnModeName)]的值:[${pobjLearnModeEN.learnModeName}], 非法,应该为字符型(In 学习模式(LearnMode))!(clsLearnModeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.learnModeENName) == false && undefined !== pobjLearnModeEN.learnModeENName && tzDataType.isString(pobjLearnModeEN.learnModeENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[学习模式英文名(learnModeENName)]的值:[${pobjLearnModeEN.learnModeENName}], 非法,应该为字符型(In 学习模式(LearnMode))!(clsLearnModeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjLearnModeEN.memo) == false && undefined !== pobjLearnModeEN.memo && tzDataType.isString(pobjLearnModeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjLearnModeEN.memo}], 非法,应该为字符型(In 学习模式(LearnMode))!(clsLearnModeBL:CheckProperty4Update)`);
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
export  function LearnMode_GetJSONStrByObj (pobjLearnModeEN: clsLearnModeEN): string
{
pobjLearnModeEN.sfUpdFldSetStr = pobjLearnModeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjLearnModeEN);
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
export  function LearnMode_GetObjLstByJSONStr (strJSON: string): Array<clsLearnModeEN>
{
let arrLearnModeObjLst = new Array<clsLearnModeEN>();
if (strJSON === "")
{
return arrLearnModeObjLst;
}
try
{
arrLearnModeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrLearnModeObjLst;
}
return arrLearnModeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrLearnModeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function LearnMode_GetObjLstByJSONObjLst (arrLearnModeObjLstS: Array<clsLearnModeEN>): Array<clsLearnModeEN>
{
const arrLearnModeObjLst = new Array<clsLearnModeEN>();
for (const objInFor of arrLearnModeObjLstS) {
const obj1 = LearnMode_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrLearnModeObjLst.push(obj1);
}
return arrLearnModeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function LearnMode_GetObjByJSONStr (strJSON: string): clsLearnModeEN
{
let pobjLearnModeEN = new clsLearnModeEN();
if (strJSON === "")
{
return pobjLearnModeEN;
}
try
{
pobjLearnModeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjLearnModeEN;
}
return pobjLearnModeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function LearnMode_GetCombineCondition(objLearnModeCond: clsLearnModeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objLearnModeCond.dicFldComparisonOp, clsLearnModeEN.con_LearnModeId) == true)
{
const strComparisonOpLearnModeId:string = objLearnModeCond.dicFldComparisonOp[clsLearnModeEN.con_LearnModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsLearnModeEN.con_LearnModeId, objLearnModeCond.learnModeId, strComparisonOpLearnModeId);
}
if (Object.prototype.hasOwnProperty.call(objLearnModeCond.dicFldComparisonOp, clsLearnModeEN.con_LearnModeName) == true)
{
const strComparisonOpLearnModeName:string = objLearnModeCond.dicFldComparisonOp[clsLearnModeEN.con_LearnModeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsLearnModeEN.con_LearnModeName, objLearnModeCond.learnModeName, strComparisonOpLearnModeName);
}
if (Object.prototype.hasOwnProperty.call(objLearnModeCond.dicFldComparisonOp, clsLearnModeEN.con_LearnModeENName) == true)
{
const strComparisonOpLearnModeENName:string = objLearnModeCond.dicFldComparisonOp[clsLearnModeEN.con_LearnModeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsLearnModeEN.con_LearnModeENName, objLearnModeCond.learnModeENName, strComparisonOpLearnModeENName);
}
if (Object.prototype.hasOwnProperty.call(objLearnModeCond.dicFldComparisonOp, clsLearnModeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objLearnModeCond.dicFldComparisonOp[clsLearnModeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsLearnModeEN.con_Memo, objLearnModeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--LearnMode(学习模式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strLearnModeName: 学习模式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function LearnMode_GetUniCondStr(objLearnModeEN: clsLearnModeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and LearnModeName = '{0}'", objLearnModeEN.learnModeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--LearnMode(学习模式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strLearnModeName: 学习模式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function LearnMode_GetUniCondStr4Update(objLearnModeEN: clsLearnModeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and LearnModeId <> '{0}'", objLearnModeEN.learnModeId);
 strWhereCond +=  Format(" and LearnModeName = '{0}'", objLearnModeEN.learnModeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objLearnModeENS:源对象
 * @param objLearnModeENT:目标对象
*/
export  function LearnMode_CopyObjTo(objLearnModeENS: clsLearnModeEN , objLearnModeENT: clsLearnModeEN ): void 
{
objLearnModeENT.learnModeId = objLearnModeENS.learnModeId; //学习模式Id
objLearnModeENT.learnModeName = objLearnModeENS.learnModeName; //学习模式名
objLearnModeENT.learnModeENName = objLearnModeENS.learnModeENName; //学习模式英文名
objLearnModeENT.memo = objLearnModeENS.memo; //备注
objLearnModeENT.sfUpdFldSetStr = objLearnModeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objLearnModeENS:源对象
 * @param objLearnModeENT:目标对象
*/
export  function LearnMode_GetObjFromJsonObj(objLearnModeENS: clsLearnModeEN): clsLearnModeEN 
{
 const objLearnModeENT: clsLearnModeEN = new clsLearnModeEN();
ObjectAssign(objLearnModeENT, objLearnModeENS);
 return objLearnModeENT;
}