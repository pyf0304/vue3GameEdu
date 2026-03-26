
 /**
 * 类名:clsQuestionSourceWApi
 * 表名:QuestionSource(01120991)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:27
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 题目来源(QuestionSource)
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
import { clsQuestionSourceEN } from "@/ts/L0Entity/QuestionaireEdit/clsQuestionSourceEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const questionSource_Controller = "QuestionSourceApi";
 export const questionSource_ConstructorName = "questionSource";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strQuestionSourceId:关键字
 * @returns 对象
 **/
export  async function QuestionSource_GetObjByQuestionSourceIdAsync(strQuestionSourceId: string): Promise<clsQuestionSourceEN|null>  
{
const strThisFuncName = "GetObjByQuestionSourceIdAsync";

if (IsNullOrEmpty(strQuestionSourceId) == true)
{
  const strMsg = Format("参数:[strQuestionSourceId]不能为空!(In clsQuestionSourceWApi.GetObjByQuestionSourceIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionSourceId.length != 2)
{
const strMsg = Format("缓存分类变量:[strQuestionSourceId]的长度:[{0}]不正确!(clsQuestionSourceWApi.GetObjByQuestionSourceIdAsync)", strQuestionSourceId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByQuestionSourceId";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQuestionSourceId,
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
const objQuestionSource = QuestionSource_GetObjFromJsonObj(returnObj);
return objQuestionSource;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param strQuestionSourceId:所给的关键字
 * @returns 对象
*/
export  async function QuestionSource_GetObjByQuestionSourceIdlocalStorage(strQuestionSourceId: string) {
const strThisFuncName = "GetObjByQuestionSourceIdlocalStorage";

if (IsNullOrEmpty(strQuestionSourceId) == true)
{
  const strMsg = Format("参数:[strQuestionSourceId]不能为空!(In clsQuestionSourceWApi.GetObjByQuestionSourceIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionSourceId.length != 2)
{
const strMsg = Format("缓存分类变量:[strQuestionSourceId]的长度:[{0}]不正确!(clsQuestionSourceWApi.GetObjByQuestionSourceIdlocalStorage)", strQuestionSourceId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQuestionSourceEN._CurrTabName, strQuestionSourceId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQuestionSourceCache: clsQuestionSourceEN = JSON.parse(strTempObj);
return objQuestionSourceCache;
}
try
{
const objQuestionSource = await QuestionSource_GetObjByQuestionSourceIdAsync(strQuestionSourceId);
if (objQuestionSource != null)
{
localStorage.setItem(strKey, JSON.stringify(objQuestionSource));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQuestionSource;
}
return objQuestionSource;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strQuestionSourceId, questionSource_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strQuestionSourceId:所给的关键字
 * @returns 对象
*/
export  async function QuestionSource_GetObjByQuestionSourceIdCache(strQuestionSourceId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByQuestionSourceIdCache";

if (IsNullOrEmpty(strQuestionSourceId) == true)
{
  const strMsg = Format("参数:[strQuestionSourceId]不能为空!(In clsQuestionSourceWApi.GetObjByQuestionSourceIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionSourceId.length != 2)
{
const strMsg = Format("缓存分类变量:[strQuestionSourceId]的长度:[{0}]不正确!(clsQuestionSourceWApi.GetObjByQuestionSourceIdCache)", strQuestionSourceId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstCache();
try
{
const arrQuestionSourceSel = arrQuestionSourceObjLstCache.filter(x => 
 x.questionSourceId == strQuestionSourceId );
let objQuestionSource: clsQuestionSourceEN;
if (arrQuestionSourceSel.length > 0)
{
objQuestionSource = arrQuestionSourceSel[0];
return objQuestionSource;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQuestionSourceConst = await QuestionSource_GetObjByQuestionSourceIdAsync(strQuestionSourceId);
if (objQuestionSourceConst != null)
{
QuestionSource_ReFreshThisCache();
return objQuestionSourceConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strQuestionSourceId, questionSource_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQuestionSource:所给的对象
 * @returns 对象
*/
export  async function QuestionSource_UpdateObjInLstCache(objQuestionSource: clsQuestionSourceEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstCache();
const obj = arrQuestionSourceObjLstCache.find(x => 
x.questionSourceId == objQuestionSource.questionSourceId);
if (obj != null)
{
objQuestionSource.questionSourceId = obj.questionSourceId;
ObjectAssign( obj, objQuestionSource);
}
else
{
arrQuestionSourceObjLstCache.push(objQuestionSource);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, questionSource_ConstructorName, strThisFuncName);
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
export  function QuestionSource_SortFunDefa(a:clsQuestionSourceEN , b:clsQuestionSourceEN): number 
{
return a.questionSourceId.localeCompare(b.questionSourceId);
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
export  function QuestionSource_SortFunDefa2Fld(a:clsQuestionSourceEN , b:clsQuestionSourceEN): number 
{
if (a.questionSourceName == b.questionSourceName) return a.questionSourceEnName.localeCompare(b.questionSourceEnName);
else return a.questionSourceName.localeCompare(b.questionSourceName);
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
export  function QuestionSource_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQuestionSourceEN.con_QuestionSourceId:
return (a: clsQuestionSourceEN, b: clsQuestionSourceEN) => {
return a.questionSourceId.localeCompare(b.questionSourceId);
}
case clsQuestionSourceEN.con_QuestionSourceName:
return (a: clsQuestionSourceEN, b: clsQuestionSourceEN) => {
return a.questionSourceName.localeCompare(b.questionSourceName);
}
case clsQuestionSourceEN.con_QuestionSourceEnName:
return (a: clsQuestionSourceEN, b: clsQuestionSourceEN) => {
return a.questionSourceEnName.localeCompare(b.questionSourceEnName);
}
case clsQuestionSourceEN.con_Memo:
return (a: clsQuestionSourceEN, b: clsQuestionSourceEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionSource]中不存在!(in ${ questionSource_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQuestionSourceEN.con_QuestionSourceId:
return (a: clsQuestionSourceEN, b: clsQuestionSourceEN) => {
return b.questionSourceId.localeCompare(a.questionSourceId);
}
case clsQuestionSourceEN.con_QuestionSourceName:
return (a: clsQuestionSourceEN, b: clsQuestionSourceEN) => {
return b.questionSourceName.localeCompare(a.questionSourceName);
}
case clsQuestionSourceEN.con_QuestionSourceEnName:
return (a: clsQuestionSourceEN, b: clsQuestionSourceEN) => {
return b.questionSourceEnName.localeCompare(a.questionSourceEnName);
}
case clsQuestionSourceEN.con_Memo:
return (a: clsQuestionSourceEN, b: clsQuestionSourceEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionSource]中不存在!(in ${ questionSource_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strQuestionSourceId:所给的关键字
 * @returns 对象
*/
export  async function QuestionSource_GetNameByQuestionSourceIdCache(strQuestionSourceId: string) {

if (IsNullOrEmpty(strQuestionSourceId) == true)
{
  const strMsg = Format("参数:[strQuestionSourceId]不能为空!(In clsQuestionSourceWApi.GetNameByQuestionSourceIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionSourceId.length != 2)
{
const strMsg = Format("缓存分类变量:[strQuestionSourceId]的长度:[{0}]不正确!(clsQuestionSourceWApi.GetNameByQuestionSourceIdCache)", strQuestionSourceId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstCache();
if (arrQuestionSourceObjLstCache == null) return "";
try
{
const arrQuestionSourceSel = arrQuestionSourceObjLstCache.filter(x => 
 x.questionSourceId == strQuestionSourceId );
let objQuestionSource: clsQuestionSourceEN;
if (arrQuestionSourceSel.length > 0)
{
objQuestionSource = arrQuestionSourceSel[0];
return objQuestionSource.questionSourceName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strQuestionSourceId);
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
export  async function QuestionSource_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQuestionSourceEN.con_QuestionSourceId:
return (obj: clsQuestionSourceEN) => {
return obj.questionSourceId === value;
}
case clsQuestionSourceEN.con_QuestionSourceName:
return (obj: clsQuestionSourceEN) => {
return obj.questionSourceName === value;
}
case clsQuestionSourceEN.con_QuestionSourceEnName:
return (obj: clsQuestionSourceEN) => {
return obj.questionSourceEnName === value;
}
case clsQuestionSourceEN.con_Memo:
return (obj: clsQuestionSourceEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionSource]中不存在!(in ${ questionSource_ConstructorName}.${ strThisFuncName})`;
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
export  async function QuestionSource_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQuestionSourceEN.con_QuestionSourceId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQuestionSourceEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQuestionSourceEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strQuestionSourceId = strInValue;
if (IsNullOrEmpty(strQuestionSourceId) == true)
{
return "";
}
const objQuestionSource = await QuestionSource_GetObjByQuestionSourceIdCache(strQuestionSourceId );
if (objQuestionSource == null) return "";
if (objQuestionSource.GetFldValue(strOutFldName) == null) return "";
return objQuestionSource.GetFldValue(strOutFldName).toString();
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
export  async function QuestionSource_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQuestionSourceEN.con_QuestionSourceId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQuestionSource = await QuestionSource_GetObjLstCache();
if (arrQuestionSource == null) return [];
let arrQuestionSourceSel = arrQuestionSource;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQuestionSourceSel.length == 0) return [];
return arrQuestionSourceSel.map(x=>x.questionSourceId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QuestionSource_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_GetFirstObjAsync(strWhereCond: string): Promise<clsQuestionSourceEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const objQuestionSource = QuestionSource_GetObjFromJsonObj(returnObj);
return objQuestionSource;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQuestionSourceEN._CurrTabName;
if (IsNullOrEmpty(clsQuestionSourceEN.WhereFormat) == false)
{
strWhereCond = clsQuestionSourceEN.WhereFormat;
}
if (IsNullOrEmpty(clsQuestionSourceEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionSourceEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQuestionSourceExObjLstCache: Array<clsQuestionSourceEN> = CacheHelper.Get(strKey);
const arrQuestionSourceObjLstT = QuestionSource_GetObjLstByJSONObjLst(arrQuestionSourceExObjLstCache);
return arrQuestionSourceObjLstT;
}
try
{
const arrQuestionSourceExObjLst = await QuestionSource_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQuestionSourceExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionSourceExObjLst.length);
console.log(strInfo);
return arrQuestionSourceExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionSource_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionSource_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQuestionSourceEN._CurrTabName;
if (IsNullOrEmpty(clsQuestionSourceEN.WhereFormat) == false)
{
strWhereCond = clsQuestionSourceEN.WhereFormat;
}
if (IsNullOrEmpty(clsQuestionSourceEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionSourceEN.CacheAddiCondition);
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
const arrQuestionSourceExObjLstCache: Array<clsQuestionSourceEN> = JSON.parse(strTempObjLst);
const arrQuestionSourceObjLstT = QuestionSource_GetObjLstByJSONObjLst(arrQuestionSourceExObjLstCache);
return arrQuestionSourceObjLstT;
}
try
{
const arrQuestionSourceExObjLst = await QuestionSource_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQuestionSourceExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionSourceExObjLst.length);
console.log(strInfo);
return arrQuestionSourceExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionSource_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionSource_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQuestionSourceEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQuestionSourceObjLstCache: Array<clsQuestionSourceEN> = JSON.parse(strTempObjLst);
return arrQuestionSourceObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QuestionSource_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQuestionSourceEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionSource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionSource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQuestionSourceEN._CurrTabName;
if (IsNullOrEmpty(clsQuestionSourceEN.WhereFormat) == false)
{
strWhereCond = clsQuestionSourceEN.WhereFormat;
}
if (IsNullOrEmpty(clsQuestionSourceEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionSourceEN.CacheAddiCondition);
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
const arrQuestionSourceExObjLstCache: Array<clsQuestionSourceEN> = JSON.parse(strTempObjLst);
const arrQuestionSourceObjLstT = QuestionSource_GetObjLstByJSONObjLst(arrQuestionSourceExObjLstCache);
return arrQuestionSourceObjLstT;
}
try
{
const arrQuestionSourceExObjLst = await QuestionSource_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQuestionSourceExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionSourceExObjLst.length);
console.log(strInfo);
return arrQuestionSourceExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionSource_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionSource_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQuestionSourceEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQuestionSourceObjLstCache: Array<clsQuestionSourceEN> = JSON.parse(strTempObjLst);
return arrQuestionSourceObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionSource_GetObjLstCache(): Promise<Array<clsQuestionSourceEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQuestionSourceObjLstCache;
switch (clsQuestionSourceEN.CacheModeId)
{
case "04"://sessionStorage
arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstClientCache();
break;
default:
arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstClientCache();
break;
}
return arrQuestionSourceObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionSource_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQuestionSourceObjLstCache;
switch (clsQuestionSourceEN.CacheModeId)
{
case "04"://sessionStorage
arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQuestionSourceObjLstCache = null;
break;
default:
arrQuestionSourceObjLstCache = null;
break;
}
return arrQuestionSourceObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrQuestionSourceIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QuestionSource_GetSubObjLstCache(objQuestionSourceCond: clsQuestionSourceEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstCache();
let arrQuestionSourceSel = arrQuestionSourceObjLstCache;
if (objQuestionSourceCond.sfFldComparisonOp == null || objQuestionSourceCond.sfFldComparisonOp == "") return arrQuestionSourceSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionSourceCond.sfFldComparisonOp);
//console.log("clsQuestionSourceWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionSourceCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionSourceCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQuestionSourceSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQuestionSourceCond), questionSource_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQuestionSourceEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrQuestionSourceId:关键字列表
 * @returns 对象列表
 **/
export  async function QuestionSource_GetObjLstByQuestionSourceIdLstAsync(arrQuestionSourceId: Array<string>): Promise<Array<clsQuestionSourceEN>>  
{
const strThisFuncName = "GetObjLstByQuestionSourceIdLstAsync";
const strAction = "GetObjLstByQuestionSourceIdLst";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionSourceId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionSource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionSource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param arrstrQuestionSourceIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QuestionSource_GetObjLstByQuestionSourceIdLstCache(arrQuestionSourceIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByQuestionSourceIdLstCache";
try
{
const arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstCache();
const arrQuestionSourceSel = arrQuestionSourceObjLstCache.filter(x => arrQuestionSourceIdLst.indexOf(x.questionSourceId)>-1);
return arrQuestionSourceSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrQuestionSourceIdLst.join(","), questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQuestionSourceEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionSource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionSource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQuestionSourceEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionSource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionSource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQuestionSourceEN>();
const arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstCache();
if (arrQuestionSourceObjLstCache.length == 0) return arrQuestionSourceObjLstCache;
let arrQuestionSourceSel = arrQuestionSourceObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQuestionSourceCond = new clsQuestionSourceEN();
ObjectAssign(objQuestionSourceCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQuestionSourceWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionSourceCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQuestionSourceSel.length == 0) return arrQuestionSourceSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQuestionSourceSel = arrQuestionSourceSel.sort(QuestionSource_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQuestionSourceSel = arrQuestionSourceSel.sort(objPagerPara.sortFun);
}
arrQuestionSourceSel = arrQuestionSourceSel.slice(intStart, intEnd);     
return arrQuestionSourceSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, questionSource_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQuestionSourceEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QuestionSource_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQuestionSourceEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQuestionSourceEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionSource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionSource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param strQuestionSourceId:关键字
 * @returns 获取删除的结果
 **/
export  async function QuestionSource_DelRecordAsync(strQuestionSourceId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(questionSource_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strQuestionSourceId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param arrQuestionSourceId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QuestionSource_DelQuestionSourcesAsync(arrQuestionSourceId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQuestionSourcesAsync";
const strAction = "DelQuestionSources";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionSourceId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_DelQuestionSourcesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQuestionSourcesByCondAsync";
const strAction = "DelQuestionSourcesByCond";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param objQuestionSourceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionSource_AddNewRecordAsync(objQuestionSourceEN: clsQuestionSourceEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQuestionSourceEN.questionSourceId === null || objQuestionSourceEN.questionSourceId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQuestionSourceEN);
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param objQuestionSourceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionSource_AddNewRecordWithMaxIdAsync(objQuestionSourceEN: clsQuestionSourceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_AddNewObjSave(objQuestionSourceEN: clsQuestionSourceEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QuestionSource_CheckPropertyNew(objQuestionSourceEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ questionSource_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await QuestionSource_IsExistAsync(objQuestionSourceEN.questionSourceId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objQuestionSourceEN.questionSourceId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await QuestionSource_AddNewRecordAsync(objQuestionSourceEN);
if (returnBool == true)
{
QuestionSource_ReFreshCache();
}
else
{
const strInfo = `添加[题目来源(QuestionSource)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQuestionSourceEN.questionSourceId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ questionSource_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function QuestionSource_UpdateObjSave(objQuestionSourceEN: clsQuestionSourceEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQuestionSourceEN.sfUpdFldSetStr = objQuestionSourceEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQuestionSourceEN.questionSourceId == "" || objQuestionSourceEN.questionSourceId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QuestionSource_CheckProperty4Update(objQuestionSourceEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ questionSource_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await QuestionSource_UpdateRecordAsync(objQuestionSourceEN);
if (returnBool == true)
{
QuestionSource_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ questionSource_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQuestionSourceEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QuestionSource_AddNewRecordWithReturnKeyAsync(objQuestionSourceEN: clsQuestionSourceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param objQuestionSourceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QuestionSource_UpdateRecordAsync(objQuestionSourceEN: clsQuestionSourceEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQuestionSourceEN.sfUpdFldSetStr === undefined || objQuestionSourceEN.sfUpdFldSetStr === null || objQuestionSourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionSourceEN.questionSourceId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param objQuestionSourceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QuestionSource_EditRecordExAsync(objQuestionSourceEN: clsQuestionSourceEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQuestionSourceEN.sfUpdFldSetStr === undefined || objQuestionSourceEN.sfUpdFldSetStr === null || objQuestionSourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionSourceEN.questionSourceId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param objQuestionSourceEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QuestionSource_UpdateWithConditionAsync(objQuestionSourceEN: clsQuestionSourceEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQuestionSourceEN.sfUpdFldSetStr === undefined || objQuestionSourceEN.sfUpdFldSetStr === null || objQuestionSourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionSourceEN.questionSourceId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);
objQuestionSourceEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param objstrQuestionSourceIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QuestionSource_IsExistRecordCache(objQuestionSourceCond: clsQuestionSourceEN) {
const strThisFuncName = "IsExistRecordCache";
const arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstCache();
if (arrQuestionSourceObjLstCache == null) return false;
let arrQuestionSourceSel = arrQuestionSourceObjLstCache;
if (objQuestionSourceCond.sfFldComparisonOp == null || objQuestionSourceCond.sfFldComparisonOp == "") return arrQuestionSourceSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionSourceCond.sfFldComparisonOp);
//console.log("clsQuestionSourceWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionSourceCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionSourceCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQuestionSourceSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQuestionSourceCond), questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param strQuestionSourceId:所给的关键字
 * @returns 对象
*/
export  async function QuestionSource_IsExistCache(strQuestionSourceId:string) {
const strThisFuncName = "IsExistCache";
const arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstCache();
if (arrQuestionSourceObjLstCache == null) return false;
try
{
const arrQuestionSourceSel = arrQuestionSourceObjLstCache.filter(x => x.questionSourceId == strQuestionSourceId);
if (arrQuestionSourceSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strQuestionSourceId, questionSource_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strQuestionSourceId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QuestionSource_IsExistAsync(strQuestionSourceId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQuestionSourceId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
 * @param objQuestionSourceCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QuestionSource_GetRecCountByCondCache(objQuestionSourceCond: clsQuestionSourceEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQuestionSourceObjLstCache = await QuestionSource_GetObjLstCache();
if (arrQuestionSourceObjLstCache == null) return 0;
let arrQuestionSourceSel = arrQuestionSourceObjLstCache;
if (objQuestionSourceCond.sfFldComparisonOp == null || objQuestionSourceCond.sfFldComparisonOp == "") return arrQuestionSourceSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionSourceCond.sfFldComparisonOp);
//console.log("clsQuestionSourceWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionSourceCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionSourceCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionSourceSel = arrQuestionSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQuestionSourceSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQuestionSourceCond), questionSource_ConstructorName, strThisFuncName);
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
export  async function QuestionSource_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(questionSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionSource_ConstructorName, strThisFuncName);
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
export  function QuestionSource_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QuestionSource_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQuestionSourceEN._CurrTabName;
switch (clsQuestionSourceEN.CacheModeId)
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
clsQuestionSourceEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function QuestionSource_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQuestionSourceEN._CurrTabName;
switch (clsQuestionSourceEN.CacheModeId)
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
clsQuestionSourceEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function QuestionSource_GetLastRefreshTime():string
{
if (clsQuestionSourceEN._RefreshTimeLst.length == 0) return "";
return clsQuestionSourceEN._RefreshTimeLst[clsQuestionSourceEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QuestionSource_CheckPropertyNew(pobjQuestionSourceEN: clsQuestionSourceEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceName) === true )
{
 throw new Error(`(errid:Watl000411)字段[题目来源名]不能为空(In 题目来源)!(clsQuestionSourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceEnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[题目来源英文名]不能为空(In 题目来源)!(clsQuestionSourceBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceId) == false && GetStrLen(pobjQuestionSourceEN.questionSourceId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[题目来源Id(questionSourceId)]的长度不能超过2(In 题目来源(QuestionSource))!值:${pobjQuestionSourceEN.questionSourceId}(clsQuestionSourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceName) == false && GetStrLen(pobjQuestionSourceEN.questionSourceName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[题目来源名(questionSourceName)]的长度不能超过30(In 题目来源(QuestionSource))!值:${pobjQuestionSourceEN.questionSourceName}(clsQuestionSourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceEnName) == false && GetStrLen(pobjQuestionSourceEN.questionSourceEnName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[题目来源英文名(questionSourceEnName)]的长度不能超过30(In 题目来源(QuestionSource))!值:${pobjQuestionSourceEN.questionSourceEnName}(clsQuestionSourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.memo) == false && GetStrLen(pobjQuestionSourceEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 题目来源(QuestionSource))!值:${pobjQuestionSourceEN.memo}(clsQuestionSourceBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceId) == false && undefined !== pobjQuestionSourceEN.questionSourceId && tzDataType.isString(pobjQuestionSourceEN.questionSourceId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目来源Id(questionSourceId)]的值:[${pobjQuestionSourceEN.questionSourceId}], 非法,应该为字符型(In 题目来源(QuestionSource))!(clsQuestionSourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceName) == false && undefined !== pobjQuestionSourceEN.questionSourceName && tzDataType.isString(pobjQuestionSourceEN.questionSourceName) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目来源名(questionSourceName)]的值:[${pobjQuestionSourceEN.questionSourceName}], 非法,应该为字符型(In 题目来源(QuestionSource))!(clsQuestionSourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceEnName) == false && undefined !== pobjQuestionSourceEN.questionSourceEnName && tzDataType.isString(pobjQuestionSourceEN.questionSourceEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目来源英文名(questionSourceEnName)]的值:[${pobjQuestionSourceEN.questionSourceEnName}], 非法,应该为字符型(In 题目来源(QuestionSource))!(clsQuestionSourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.memo) == false && undefined !== pobjQuestionSourceEN.memo && tzDataType.isString(pobjQuestionSourceEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQuestionSourceEN.memo}], 非法,应该为字符型(In 题目来源(QuestionSource))!(clsQuestionSourceBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QuestionSource_CheckProperty4Update(pobjQuestionSourceEN: clsQuestionSourceEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceId) == false && GetStrLen(pobjQuestionSourceEN.questionSourceId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[题目来源Id(questionSourceId)]的长度不能超过2(In 题目来源(QuestionSource))!值:${pobjQuestionSourceEN.questionSourceId}(clsQuestionSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceName) == false && GetStrLen(pobjQuestionSourceEN.questionSourceName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[题目来源名(questionSourceName)]的长度不能超过30(In 题目来源(QuestionSource))!值:${pobjQuestionSourceEN.questionSourceName}(clsQuestionSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceEnName) == false && GetStrLen(pobjQuestionSourceEN.questionSourceEnName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[题目来源英文名(questionSourceEnName)]的长度不能超过30(In 题目来源(QuestionSource))!值:${pobjQuestionSourceEN.questionSourceEnName}(clsQuestionSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.memo) == false && GetStrLen(pobjQuestionSourceEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 题目来源(QuestionSource))!值:${pobjQuestionSourceEN.memo}(clsQuestionSourceBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceId) == false && undefined !== pobjQuestionSourceEN.questionSourceId && tzDataType.isString(pobjQuestionSourceEN.questionSourceId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目来源Id(questionSourceId)]的值:[${pobjQuestionSourceEN.questionSourceId}], 非法,应该为字符型(In 题目来源(QuestionSource))!(clsQuestionSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceName) == false && undefined !== pobjQuestionSourceEN.questionSourceName && tzDataType.isString(pobjQuestionSourceEN.questionSourceName) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目来源名(questionSourceName)]的值:[${pobjQuestionSourceEN.questionSourceName}], 非法,应该为字符型(In 题目来源(QuestionSource))!(clsQuestionSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceEnName) == false && undefined !== pobjQuestionSourceEN.questionSourceEnName && tzDataType.isString(pobjQuestionSourceEN.questionSourceEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目来源英文名(questionSourceEnName)]的值:[${pobjQuestionSourceEN.questionSourceEnName}], 非法,应该为字符型(In 题目来源(QuestionSource))!(clsQuestionSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionSourceEN.memo) == false && undefined !== pobjQuestionSourceEN.memo && tzDataType.isString(pobjQuestionSourceEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQuestionSourceEN.memo}], 非法,应该为字符型(In 题目来源(QuestionSource))!(clsQuestionSourceBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQuestionSourceEN.questionSourceId) === true )
{
 throw new Error(`(errid:Watl000064)字段[题目来源Id]不能为空(In 题目来源)!(clsQuestionSourceBL:CheckProperty4Update)`);
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
export  function QuestionSource_GetJSONStrByObj (pobjQuestionSourceEN: clsQuestionSourceEN): string
{
pobjQuestionSourceEN.sfUpdFldSetStr = pobjQuestionSourceEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQuestionSourceEN);
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
export  function QuestionSource_GetObjLstByJSONStr (strJSON: string): Array<clsQuestionSourceEN>
{
let arrQuestionSourceObjLst = new Array<clsQuestionSourceEN>();
if (strJSON === "")
{
return arrQuestionSourceObjLst;
}
try
{
arrQuestionSourceObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQuestionSourceObjLst;
}
return arrQuestionSourceObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQuestionSourceObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QuestionSource_GetObjLstByJSONObjLst (arrQuestionSourceObjLstS: Array<clsQuestionSourceEN>): Array<clsQuestionSourceEN>
{
const arrQuestionSourceObjLst = new Array<clsQuestionSourceEN>();
for (const objInFor of arrQuestionSourceObjLstS) {
const obj1 = QuestionSource_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQuestionSourceObjLst.push(obj1);
}
return arrQuestionSourceObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QuestionSource_GetObjByJSONStr (strJSON: string): clsQuestionSourceEN
{
let pobjQuestionSourceEN = new clsQuestionSourceEN();
if (strJSON === "")
{
return pobjQuestionSourceEN;
}
try
{
pobjQuestionSourceEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQuestionSourceEN;
}
return pobjQuestionSourceEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QuestionSource_GetCombineCondition(objQuestionSourceCond: clsQuestionSourceEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQuestionSourceCond.dicFldComparisonOp, clsQuestionSourceEN.con_QuestionSourceId) == true)
{
const strComparisonOpQuestionSourceId:string = objQuestionSourceCond.dicFldComparisonOp[clsQuestionSourceEN.con_QuestionSourceId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionSourceEN.con_QuestionSourceId, objQuestionSourceCond.questionSourceId, strComparisonOpQuestionSourceId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionSourceCond.dicFldComparisonOp, clsQuestionSourceEN.con_QuestionSourceName) == true)
{
const strComparisonOpQuestionSourceName:string = objQuestionSourceCond.dicFldComparisonOp[clsQuestionSourceEN.con_QuestionSourceName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionSourceEN.con_QuestionSourceName, objQuestionSourceCond.questionSourceName, strComparisonOpQuestionSourceName);
}
if (Object.prototype.hasOwnProperty.call(objQuestionSourceCond.dicFldComparisonOp, clsQuestionSourceEN.con_QuestionSourceEnName) == true)
{
const strComparisonOpQuestionSourceEnName:string = objQuestionSourceCond.dicFldComparisonOp[clsQuestionSourceEN.con_QuestionSourceEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionSourceEN.con_QuestionSourceEnName, objQuestionSourceCond.questionSourceEnName, strComparisonOpQuestionSourceEnName);
}
if (Object.prototype.hasOwnProperty.call(objQuestionSourceCond.dicFldComparisonOp, clsQuestionSourceEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQuestionSourceCond.dicFldComparisonOp[clsQuestionSourceEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionSourceEN.con_Memo, objQuestionSourceCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objQuestionSourceENS:源对象
 * @param objQuestionSourceENT:目标对象
*/
export  function QuestionSource_CopyObjTo(objQuestionSourceENS: clsQuestionSourceEN , objQuestionSourceENT: clsQuestionSourceEN ): void 
{
objQuestionSourceENT.questionSourceId = objQuestionSourceENS.questionSourceId; //题目来源Id
objQuestionSourceENT.questionSourceName = objQuestionSourceENS.questionSourceName; //题目来源名
objQuestionSourceENT.questionSourceEnName = objQuestionSourceENS.questionSourceEnName; //题目来源英文名
objQuestionSourceENT.memo = objQuestionSourceENS.memo; //备注
objQuestionSourceENT.sfUpdFldSetStr = objQuestionSourceENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQuestionSourceENS:源对象
 * @param objQuestionSourceENT:目标对象
*/
export  function QuestionSource_GetObjFromJsonObj(objQuestionSourceENS: clsQuestionSourceEN): clsQuestionSourceEN 
{
 const objQuestionSourceENT: clsQuestionSourceEN = new clsQuestionSourceEN();
ObjectAssign(objQuestionSourceENT, objQuestionSourceENS);
 return objQuestionSourceENT;
}