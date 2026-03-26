
 /**
 * 类名:clsAssessmentMethodsWApi
 * 表名:AssessmentMethods(01120967)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:09
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
 * 考核方式(AssessmentMethods)
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
import { clsAssessmentMethodsEN } from "@/ts/L0Entity/SysPara/clsAssessmentMethodsEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const assessmentMethods_Controller = "AssessmentMethodsApi";
 export const assessmentMethods_ConstructorName = "assessmentMethods";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strAssessmentMethodId:关键字
 * @returns 对象
 **/
export  async function AssessmentMethods_GetObjByAssessmentMethodIdAsync(strAssessmentMethodId: string): Promise<clsAssessmentMethodsEN|null>  
{
const strThisFuncName = "GetObjByAssessmentMethodIdAsync";

if (IsNullOrEmpty(strAssessmentMethodId) == true)
{
  const strMsg = Format("参数:[strAssessmentMethodId]不能为空!(In clsAssessmentMethodsWApi.GetObjByAssessmentMethodIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strAssessmentMethodId.length != 2)
{
const strMsg = Format("缓存分类变量:[strAssessmentMethodId]的长度:[{0}]不正确!(clsAssessmentMethodsWApi.GetObjByAssessmentMethodIdAsync)", strAssessmentMethodId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByAssessmentMethodId";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strAssessmentMethodId,
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
const objAssessmentMethods = AssessmentMethods_GetObjFromJsonObj(returnObj);
return objAssessmentMethods;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param strAssessmentMethodId:所给的关键字
 * @returns 对象
*/
export  async function AssessmentMethods_GetObjByAssessmentMethodIdlocalStorage(strAssessmentMethodId: string) {
const strThisFuncName = "GetObjByAssessmentMethodIdlocalStorage";

if (IsNullOrEmpty(strAssessmentMethodId) == true)
{
  const strMsg = Format("参数:[strAssessmentMethodId]不能为空!(In clsAssessmentMethodsWApi.GetObjByAssessmentMethodIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strAssessmentMethodId.length != 2)
{
const strMsg = Format("缓存分类变量:[strAssessmentMethodId]的长度:[{0}]不正确!(clsAssessmentMethodsWApi.GetObjByAssessmentMethodIdlocalStorage)", strAssessmentMethodId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsAssessmentMethodsEN._CurrTabName, strAssessmentMethodId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objAssessmentMethodsCache: clsAssessmentMethodsEN = JSON.parse(strTempObj);
return objAssessmentMethodsCache;
}
try
{
const objAssessmentMethods = await AssessmentMethods_GetObjByAssessmentMethodIdAsync(strAssessmentMethodId);
if (objAssessmentMethods != null)
{
localStorage.setItem(strKey, JSON.stringify(objAssessmentMethods));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objAssessmentMethods;
}
return objAssessmentMethods;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strAssessmentMethodId, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strAssessmentMethodId:所给的关键字
 * @returns 对象
*/
export  async function AssessmentMethods_GetObjByAssessmentMethodIdCache(strAssessmentMethodId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByAssessmentMethodIdCache";

if (IsNullOrEmpty(strAssessmentMethodId) == true)
{
  const strMsg = Format("参数:[strAssessmentMethodId]不能为空!(In clsAssessmentMethodsWApi.GetObjByAssessmentMethodIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strAssessmentMethodId.length != 2)
{
const strMsg = Format("缓存分类变量:[strAssessmentMethodId]的长度:[{0}]不正确!(clsAssessmentMethodsWApi.GetObjByAssessmentMethodIdCache)", strAssessmentMethodId.length);
console.error(strMsg);
throw (strMsg);
}
const arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstCache();
try
{
const arrAssessmentMethodsSel = arrAssessmentMethodsObjLstCache.filter(x => 
 x.assessmentMethodId == strAssessmentMethodId );
let objAssessmentMethods: clsAssessmentMethodsEN;
if (arrAssessmentMethodsSel.length > 0)
{
objAssessmentMethods = arrAssessmentMethodsSel[0];
return objAssessmentMethods;
}
else
{
if (bolTryAsyncOnce == true)
{
const objAssessmentMethodsConst = await AssessmentMethods_GetObjByAssessmentMethodIdAsync(strAssessmentMethodId);
if (objAssessmentMethodsConst != null)
{
AssessmentMethods_ReFreshThisCache();
return objAssessmentMethodsConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strAssessmentMethodId, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objAssessmentMethods:所给的对象
 * @returns 对象
*/
export  async function AssessmentMethods_UpdateObjInLstCache(objAssessmentMethods: clsAssessmentMethodsEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstCache();
const obj = arrAssessmentMethodsObjLstCache.find(x => x.assessmentMethodName == objAssessmentMethods.assessmentMethodName);
if (obj != null)
{
objAssessmentMethods.assessmentMethodId = obj.assessmentMethodId;
ObjectAssign( obj, objAssessmentMethods);
}
else
{
arrAssessmentMethodsObjLstCache.push(objAssessmentMethods);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, assessmentMethods_ConstructorName, strThisFuncName);
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
export  function AssessmentMethods_SortFunDefa(a:clsAssessmentMethodsEN , b:clsAssessmentMethodsEN): number 
{
return a.assessmentMethodId.localeCompare(b.assessmentMethodId);
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
export  function AssessmentMethods_SortFunDefa2Fld(a:clsAssessmentMethodsEN , b:clsAssessmentMethodsEN): number 
{
if (a.assessmentMethodName == b.assessmentMethodName) return a.assessmentMethodEnName.localeCompare(b.assessmentMethodEnName);
else return a.assessmentMethodName.localeCompare(b.assessmentMethodName);
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
export  function AssessmentMethods_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsAssessmentMethodsEN.con_AssessmentMethodId:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return a.assessmentMethodId.localeCompare(b.assessmentMethodId);
}
case clsAssessmentMethodsEN.con_AssessmentMethodName:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return a.assessmentMethodName.localeCompare(b.assessmentMethodName);
}
case clsAssessmentMethodsEN.con_AssessmentMethodEnName:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return a.assessmentMethodEnName.localeCompare(b.assessmentMethodEnName);
}
case clsAssessmentMethodsEN.con_UpdDate:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsAssessmentMethodsEN.con_UpdUser:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsAssessmentMethodsEN.con_Memo:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[AssessmentMethods]中不存在!(in ${ assessmentMethods_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsAssessmentMethodsEN.con_AssessmentMethodId:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return b.assessmentMethodId.localeCompare(a.assessmentMethodId);
}
case clsAssessmentMethodsEN.con_AssessmentMethodName:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return b.assessmentMethodName.localeCompare(a.assessmentMethodName);
}
case clsAssessmentMethodsEN.con_AssessmentMethodEnName:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return b.assessmentMethodEnName.localeCompare(a.assessmentMethodEnName);
}
case clsAssessmentMethodsEN.con_UpdDate:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsAssessmentMethodsEN.con_UpdUser:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsAssessmentMethodsEN.con_Memo:
return (a: clsAssessmentMethodsEN, b: clsAssessmentMethodsEN) => {
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[AssessmentMethods]中不存在!(in ${ assessmentMethods_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strAssessmentMethodId:所给的关键字
 * @returns 对象
*/
export  async function AssessmentMethods_GetNameByAssessmentMethodIdCache(strAssessmentMethodId: string) {

if (IsNullOrEmpty(strAssessmentMethodId) == true)
{
  const strMsg = Format("参数:[strAssessmentMethodId]不能为空!(In clsAssessmentMethodsWApi.GetNameByAssessmentMethodIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strAssessmentMethodId.length != 2)
{
const strMsg = Format("缓存分类变量:[strAssessmentMethodId]的长度:[{0}]不正确!(clsAssessmentMethodsWApi.GetNameByAssessmentMethodIdCache)", strAssessmentMethodId.length);
console.error(strMsg);
throw (strMsg);
}
const arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstCache();
if (arrAssessmentMethodsObjLstCache == null) return "";
try
{
const arrAssessmentMethodsSel = arrAssessmentMethodsObjLstCache.filter(x => 
 x.assessmentMethodId == strAssessmentMethodId );
let objAssessmentMethods: clsAssessmentMethodsEN;
if (arrAssessmentMethodsSel.length > 0)
{
objAssessmentMethods = arrAssessmentMethodsSel[0];
return objAssessmentMethods.assessmentMethodName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strAssessmentMethodId);
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
export  async function AssessmentMethods_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsAssessmentMethodsEN.con_AssessmentMethodId:
return (obj: clsAssessmentMethodsEN) => {
return obj.assessmentMethodId === value;
}
case clsAssessmentMethodsEN.con_AssessmentMethodName:
return (obj: clsAssessmentMethodsEN) => {
return obj.assessmentMethodName === value;
}
case clsAssessmentMethodsEN.con_AssessmentMethodEnName:
return (obj: clsAssessmentMethodsEN) => {
return obj.assessmentMethodEnName === value;
}
case clsAssessmentMethodsEN.con_UpdDate:
return (obj: clsAssessmentMethodsEN) => {
return obj.updDate === value;
}
case clsAssessmentMethodsEN.con_UpdUser:
return (obj: clsAssessmentMethodsEN) => {
return obj.updUser === value;
}
case clsAssessmentMethodsEN.con_Memo:
return (obj: clsAssessmentMethodsEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[AssessmentMethods]中不存在!(in ${ assessmentMethods_ConstructorName}.${ strThisFuncName})`;
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
export  async function AssessmentMethods_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsAssessmentMethodsEN.con_AssessmentMethodId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsAssessmentMethodsEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsAssessmentMethodsEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strAssessmentMethodId = strInValue;
if (IsNullOrEmpty(strAssessmentMethodId) == true)
{
return "";
}
const objAssessmentMethods = await AssessmentMethods_GetObjByAssessmentMethodIdCache(strAssessmentMethodId );
if (objAssessmentMethods == null) return "";
if (objAssessmentMethods.GetFldValue(strOutFldName) == null) return "";
return objAssessmentMethods.GetFldValue(strOutFldName).toString();
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
export  async function AssessmentMethods_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsAssessmentMethodsEN.con_AssessmentMethodId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrAssessmentMethods = await AssessmentMethods_GetObjLstCache();
if (arrAssessmentMethods == null) return [];
let arrAssessmentMethodsSel = arrAssessmentMethods;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrAssessmentMethodsSel.length == 0) return [];
return arrAssessmentMethodsSel.map(x=>x.assessmentMethodId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function AssessmentMethods_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_GetFirstObjAsync(strWhereCond: string): Promise<clsAssessmentMethodsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const objAssessmentMethods = AssessmentMethods_GetObjFromJsonObj(returnObj);
return objAssessmentMethods;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsAssessmentMethodsEN._CurrTabName;
if (IsNullOrEmpty(clsAssessmentMethodsEN.WhereFormat) == false)
{
strWhereCond = clsAssessmentMethodsEN.WhereFormat;
}
if (IsNullOrEmpty(clsAssessmentMethodsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsAssessmentMethodsEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrAssessmentMethodsExObjLstCache: Array<clsAssessmentMethodsEN> = CacheHelper.Get(strKey);
const arrAssessmentMethodsObjLstT = AssessmentMethods_GetObjLstByJSONObjLst(arrAssessmentMethodsExObjLstCache);
return arrAssessmentMethodsObjLstT;
}
try
{
const arrAssessmentMethodsExObjLst = await AssessmentMethods_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrAssessmentMethodsExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrAssessmentMethodsExObjLst.length);
console.log(strInfo);
return arrAssessmentMethodsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function AssessmentMethods_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsAssessmentMethodsEN._CurrTabName;
if (IsNullOrEmpty(clsAssessmentMethodsEN.WhereFormat) == false)
{
strWhereCond = clsAssessmentMethodsEN.WhereFormat;
}
if (IsNullOrEmpty(clsAssessmentMethodsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsAssessmentMethodsEN.CacheAddiCondition);
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
const arrAssessmentMethodsExObjLstCache: Array<clsAssessmentMethodsEN> = JSON.parse(strTempObjLst);
const arrAssessmentMethodsObjLstT = AssessmentMethods_GetObjLstByJSONObjLst(arrAssessmentMethodsExObjLstCache);
return arrAssessmentMethodsObjLstT;
}
try
{
const arrAssessmentMethodsExObjLst = await AssessmentMethods_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrAssessmentMethodsExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrAssessmentMethodsExObjLst.length);
console.log(strInfo);
return arrAssessmentMethodsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function AssessmentMethods_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsAssessmentMethodsEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrAssessmentMethodsObjLstCache: Array<clsAssessmentMethodsEN> = JSON.parse(strTempObjLst);
return arrAssessmentMethodsObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function AssessmentMethods_GetObjLstAsync(strWhereCond: string): Promise<Array<clsAssessmentMethodsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", assessmentMethods_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = AssessmentMethods_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsAssessmentMethodsEN._CurrTabName;
if (IsNullOrEmpty(clsAssessmentMethodsEN.WhereFormat) == false)
{
strWhereCond = clsAssessmentMethodsEN.WhereFormat;
}
if (IsNullOrEmpty(clsAssessmentMethodsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsAssessmentMethodsEN.CacheAddiCondition);
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
const arrAssessmentMethodsExObjLstCache: Array<clsAssessmentMethodsEN> = JSON.parse(strTempObjLst);
const arrAssessmentMethodsObjLstT = AssessmentMethods_GetObjLstByJSONObjLst(arrAssessmentMethodsExObjLstCache);
return arrAssessmentMethodsObjLstT;
}
try
{
const arrAssessmentMethodsExObjLst = await AssessmentMethods_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrAssessmentMethodsExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrAssessmentMethodsExObjLst.length);
console.log(strInfo);
return arrAssessmentMethodsExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function AssessmentMethods_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsAssessmentMethodsEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrAssessmentMethodsObjLstCache: Array<clsAssessmentMethodsEN> = JSON.parse(strTempObjLst);
return arrAssessmentMethodsObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function AssessmentMethods_GetObjLstCache(): Promise<Array<clsAssessmentMethodsEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrAssessmentMethodsObjLstCache;
switch (clsAssessmentMethodsEN.CacheModeId)
{
case "04"://sessionStorage
arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstClientCache();
break;
default:
arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstClientCache();
break;
}
return arrAssessmentMethodsObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function AssessmentMethods_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrAssessmentMethodsObjLstCache;
switch (clsAssessmentMethodsEN.CacheModeId)
{
case "04"://sessionStorage
arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrAssessmentMethodsObjLstCache = null;
break;
default:
arrAssessmentMethodsObjLstCache = null;
break;
}
return arrAssessmentMethodsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrAssessmentMethodIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function AssessmentMethods_GetSubObjLstCache(objAssessmentMethodsCond: clsAssessmentMethodsEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstCache();
let arrAssessmentMethodsSel = arrAssessmentMethodsObjLstCache;
if (objAssessmentMethodsCond.sfFldComparisonOp == null || objAssessmentMethodsCond.sfFldComparisonOp == "") return arrAssessmentMethodsSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objAssessmentMethodsCond.sfFldComparisonOp);
//console.log("clsAssessmentMethodsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objAssessmentMethodsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objAssessmentMethodsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrAssessmentMethodsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objAssessmentMethodsCond), assessmentMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsAssessmentMethodsEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrAssessmentMethodId:关键字列表
 * @returns 对象列表
 **/
export  async function AssessmentMethods_GetObjLstByAssessmentMethodIdLstAsync(arrAssessmentMethodId: Array<string>): Promise<Array<clsAssessmentMethodsEN>>  
{
const strThisFuncName = "GetObjLstByAssessmentMethodIdLstAsync";
const strAction = "GetObjLstByAssessmentMethodIdLst";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrAssessmentMethodId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", assessmentMethods_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = AssessmentMethods_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param arrstrAssessmentMethodIdLst:关键字列表
 * @returns 对象列表
*/
export  async function AssessmentMethods_GetObjLstByAssessmentMethodIdLstCache(arrAssessmentMethodIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByAssessmentMethodIdLstCache";
try
{
const arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstCache();
const arrAssessmentMethodsSel = arrAssessmentMethodsObjLstCache.filter(x => arrAssessmentMethodIdLst.indexOf(x.assessmentMethodId)>-1);
return arrAssessmentMethodsSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrAssessmentMethodIdLst.join(","), assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsAssessmentMethodsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", assessmentMethods_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = AssessmentMethods_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsAssessmentMethodsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", assessmentMethods_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = AssessmentMethods_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsAssessmentMethodsEN>();
const arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstCache();
if (arrAssessmentMethodsObjLstCache.length == 0) return arrAssessmentMethodsObjLstCache;
let arrAssessmentMethodsSel = arrAssessmentMethodsObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objAssessmentMethodsCond = new clsAssessmentMethodsEN();
ObjectAssign(objAssessmentMethodsCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsAssessmentMethodsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objAssessmentMethodsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrAssessmentMethodsSel.length == 0) return arrAssessmentMethodsSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrAssessmentMethodsSel = arrAssessmentMethodsSel.sort(AssessmentMethods_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrAssessmentMethodsSel = arrAssessmentMethodsSel.sort(objPagerPara.sortFun);
}
arrAssessmentMethodsSel = arrAssessmentMethodsSel.slice(intStart, intEnd);     
return arrAssessmentMethodsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsAssessmentMethodsEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function AssessmentMethods_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsAssessmentMethodsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsAssessmentMethodsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", assessmentMethods_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = AssessmentMethods_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param strAssessmentMethodId:关键字
 * @returns 获取删除的结果
 **/
export  async function AssessmentMethods_DelRecordAsync(strAssessmentMethodId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strAssessmentMethodId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param arrAssessmentMethodId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function AssessmentMethods_DelAssessmentMethodssAsync(arrAssessmentMethodId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelAssessmentMethodssAsync";
const strAction = "DelAssessmentMethodss";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrAssessmentMethodId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_DelAssessmentMethodssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelAssessmentMethodssByCondAsync";
const strAction = "DelAssessmentMethodssByCond";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param objAssessmentMethodsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function AssessmentMethods_AddNewRecordAsync(objAssessmentMethodsEN: clsAssessmentMethodsEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objAssessmentMethodsEN);
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAssessmentMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param objAssessmentMethodsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function AssessmentMethods_AddNewRecordWithMaxIdAsync(objAssessmentMethodsEN: clsAssessmentMethodsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAssessmentMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_AddNewObjSave(objAssessmentMethodsEN: clsAssessmentMethodsEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
AssessmentMethods_CheckPropertyNew(objAssessmentMethodsEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ assessmentMethods_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await AssessmentMethods_CheckUniCond4Add(objAssessmentMethodsEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await AssessmentMethods_AddNewRecordWithMaxIdAsync(objAssessmentMethodsEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
AssessmentMethods_ReFreshCache();
}
else
{
const strInfo = `添加[考核方式(AssessmentMethods)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ assessmentMethods_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function AssessmentMethods_CheckUniCond4Add(objAssessmentMethodsEN: clsAssessmentMethodsEN): Promise<boolean>{
const strUniquenessCondition = AssessmentMethods_GetUniCondStr(objAssessmentMethodsEN);
const bolIsExistCondition = await AssessmentMethods_IsExistRecordAsync(strUniquenessCondition);
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
export  async function AssessmentMethods_CheckUniCond4Update(objAssessmentMethodsEN: clsAssessmentMethodsEN): Promise<boolean>{
const strUniquenessCondition = AssessmentMethods_GetUniCondStr4Update(objAssessmentMethodsEN);
const bolIsExistCondition = await AssessmentMethods_IsExistRecordAsync(strUniquenessCondition);
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
export  async function AssessmentMethods_UpdateObjSave(objAssessmentMethodsEN: clsAssessmentMethodsEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objAssessmentMethodsEN.sfUpdFldSetStr = objAssessmentMethodsEN.updFldString;//设置哪些字段被修改(脏字段)
if (objAssessmentMethodsEN.assessmentMethodId == "" || objAssessmentMethodsEN.assessmentMethodId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
AssessmentMethods_CheckProperty4Update(objAssessmentMethodsEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ assessmentMethods_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await AssessmentMethods_CheckUniCond4Update(objAssessmentMethodsEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await AssessmentMethods_UpdateRecordAsync(objAssessmentMethodsEN);
if (returnBool == true)
{
AssessmentMethods_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ assessmentMethods_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objAssessmentMethodsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function AssessmentMethods_AddNewRecordWithReturnKeyAsync(objAssessmentMethodsEN: clsAssessmentMethodsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAssessmentMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param objAssessmentMethodsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function AssessmentMethods_UpdateRecordAsync(objAssessmentMethodsEN: clsAssessmentMethodsEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objAssessmentMethodsEN.sfUpdFldSetStr === undefined || objAssessmentMethodsEN.sfUpdFldSetStr === null || objAssessmentMethodsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objAssessmentMethodsEN.assessmentMethodId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAssessmentMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param objAssessmentMethodsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function AssessmentMethods_EditRecordExAsync(objAssessmentMethodsEN: clsAssessmentMethodsEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objAssessmentMethodsEN.sfUpdFldSetStr === undefined || objAssessmentMethodsEN.sfUpdFldSetStr === null || objAssessmentMethodsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objAssessmentMethodsEN.assessmentMethodId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAssessmentMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param objAssessmentMethodsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function AssessmentMethods_UpdateWithConditionAsync(objAssessmentMethodsEN: clsAssessmentMethodsEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objAssessmentMethodsEN.sfUpdFldSetStr === undefined || objAssessmentMethodsEN.sfUpdFldSetStr === null || objAssessmentMethodsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objAssessmentMethodsEN.assessmentMethodId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);
objAssessmentMethodsEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objAssessmentMethodsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param objstrAssessmentMethodIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function AssessmentMethods_IsExistRecordCache(objAssessmentMethodsCond: clsAssessmentMethodsEN) {
const strThisFuncName = "IsExistRecordCache";
const arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstCache();
if (arrAssessmentMethodsObjLstCache == null) return false;
let arrAssessmentMethodsSel = arrAssessmentMethodsObjLstCache;
if (objAssessmentMethodsCond.sfFldComparisonOp == null || objAssessmentMethodsCond.sfFldComparisonOp == "") return arrAssessmentMethodsSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objAssessmentMethodsCond.sfFldComparisonOp);
//console.log("clsAssessmentMethodsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objAssessmentMethodsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objAssessmentMethodsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrAssessmentMethodsSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objAssessmentMethodsCond), assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param strAssessmentMethodId:所给的关键字
 * @returns 对象
*/
export  async function AssessmentMethods_IsExistCache(strAssessmentMethodId:string) {
const strThisFuncName = "IsExistCache";
const arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstCache();
if (arrAssessmentMethodsObjLstCache == null) return false;
try
{
const arrAssessmentMethodsSel = arrAssessmentMethodsObjLstCache.filter(x => x.assessmentMethodId == strAssessmentMethodId);
if (arrAssessmentMethodsSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strAssessmentMethodId, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strAssessmentMethodId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function AssessmentMethods_IsExistAsync(strAssessmentMethodId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strAssessmentMethodId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
 * @param objAssessmentMethodsCond:条件对象
 * @returns 对象列表记录数
*/
export  async function AssessmentMethods_GetRecCountByCondCache(objAssessmentMethodsCond: clsAssessmentMethodsEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrAssessmentMethodsObjLstCache = await AssessmentMethods_GetObjLstCache();
if (arrAssessmentMethodsObjLstCache == null) return 0;
let arrAssessmentMethodsSel = arrAssessmentMethodsObjLstCache;
if (objAssessmentMethodsCond.sfFldComparisonOp == null || objAssessmentMethodsCond.sfFldComparisonOp == "") return arrAssessmentMethodsSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objAssessmentMethodsCond.sfFldComparisonOp);
//console.log("clsAssessmentMethodsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objAssessmentMethodsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objAssessmentMethodsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrAssessmentMethodsSel = arrAssessmentMethodsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrAssessmentMethodsSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objAssessmentMethodsCond), assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  async function AssessmentMethods_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(assessmentMethods_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, assessmentMethods_ConstructorName, strThisFuncName);
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
export  function AssessmentMethods_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function AssessmentMethods_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsAssessmentMethodsEN._CurrTabName;
switch (clsAssessmentMethodsEN.CacheModeId)
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
clsAssessmentMethodsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function AssessmentMethods_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsAssessmentMethodsEN._CurrTabName;
switch (clsAssessmentMethodsEN.CacheModeId)
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
clsAssessmentMethodsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function AssessmentMethods_GetLastRefreshTime():string
{
if (clsAssessmentMethodsEN._RefreshTimeLst.length == 0) return "";
return clsAssessmentMethodsEN._RefreshTimeLst[clsAssessmentMethodsEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function AssessmentMethods_BindDdl_AssessmentMethodIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_AssessmentMethodIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_AssessmentMethodIdInDivCache");
const arrObjLstSel = await AssessmentMethods_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsAssessmentMethodsEN.con_AssessmentMethodId, clsAssessmentMethodsEN.con_AssessmentMethodName, "考核方式...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function AssessmentMethods_GetArrAssessmentMethods()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_AssessmentMethodIdInDivCache");
const arrAssessmentMethods = new Array<clsAssessmentMethodsEN>();
const arrObjLstSel = await AssessmentMethods_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsAssessmentMethodsEN();
obj0.assessmentMethodId = '0';
obj0.assessmentMethodName = '选考核方式...';
arrAssessmentMethods.push(obj0);
arrObjLstSel.forEach(x => arrAssessmentMethods.push(x));
return arrAssessmentMethods;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function AssessmentMethods_CheckPropertyNew(pobjAssessmentMethodsEN: clsAssessmentMethodsEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodName) === true )
{
 throw new Error(`(errid:Watl000411)字段[考核方式名]不能为空(In 考核方式)!(clsAssessmentMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodEnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[考核方式英文名]不能为空(In 考核方式)!(clsAssessmentMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.updDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改日期]不能为空(In 考核方式)!(clsAssessmentMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 考核方式)!(clsAssessmentMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.memo) === true )
{
 throw new Error(`(errid:Watl000411)字段[备注]不能为空(In 考核方式)!(clsAssessmentMethodsBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodId) == false && GetStrLen(pobjAssessmentMethodsEN.assessmentMethodId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[考核方式Id(assessmentMethodId)]的长度不能超过2(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.assessmentMethodId}(clsAssessmentMethodsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodName) == false && GetStrLen(pobjAssessmentMethodsEN.assessmentMethodName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[考核方式名(assessmentMethodName)]的长度不能超过50(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.assessmentMethodName}(clsAssessmentMethodsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodEnName) == false && GetStrLen(pobjAssessmentMethodsEN.assessmentMethodEnName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[考核方式英文名(assessmentMethodEnName)]的长度不能超过50(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.assessmentMethodEnName}(clsAssessmentMethodsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.updDate) == false && GetStrLen(pobjAssessmentMethodsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.updDate}(clsAssessmentMethodsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.updUser) == false && GetStrLen(pobjAssessmentMethodsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.updUser}(clsAssessmentMethodsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.memo) == false && GetStrLen(pobjAssessmentMethodsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.memo}(clsAssessmentMethodsBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodId) == false && undefined !== pobjAssessmentMethodsEN.assessmentMethodId && tzDataType.isString(pobjAssessmentMethodsEN.assessmentMethodId) === false)
{
 throw new Error(`(errid:Watl000414)字段[考核方式Id(assessmentMethodId)]的值:[${pobjAssessmentMethodsEN.assessmentMethodId}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodName) == false && undefined !== pobjAssessmentMethodsEN.assessmentMethodName && tzDataType.isString(pobjAssessmentMethodsEN.assessmentMethodName) === false)
{
 throw new Error(`(errid:Watl000414)字段[考核方式名(assessmentMethodName)]的值:[${pobjAssessmentMethodsEN.assessmentMethodName}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodEnName) == false && undefined !== pobjAssessmentMethodsEN.assessmentMethodEnName && tzDataType.isString(pobjAssessmentMethodsEN.assessmentMethodEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[考核方式英文名(assessmentMethodEnName)]的值:[${pobjAssessmentMethodsEN.assessmentMethodEnName}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.updDate) == false && undefined !== pobjAssessmentMethodsEN.updDate && tzDataType.isString(pobjAssessmentMethodsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjAssessmentMethodsEN.updDate}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.updUser) == false && undefined !== pobjAssessmentMethodsEN.updUser && tzDataType.isString(pobjAssessmentMethodsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjAssessmentMethodsEN.updUser}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.memo) == false && undefined !== pobjAssessmentMethodsEN.memo && tzDataType.isString(pobjAssessmentMethodsEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjAssessmentMethodsEN.memo}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function AssessmentMethods_CheckProperty4Update(pobjAssessmentMethodsEN: clsAssessmentMethodsEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodId) == false && GetStrLen(pobjAssessmentMethodsEN.assessmentMethodId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[考核方式Id(assessmentMethodId)]的长度不能超过2(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.assessmentMethodId}(clsAssessmentMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodName) == false && GetStrLen(pobjAssessmentMethodsEN.assessmentMethodName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[考核方式名(assessmentMethodName)]的长度不能超过50(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.assessmentMethodName}(clsAssessmentMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodEnName) == false && GetStrLen(pobjAssessmentMethodsEN.assessmentMethodEnName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[考核方式英文名(assessmentMethodEnName)]的长度不能超过50(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.assessmentMethodEnName}(clsAssessmentMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.updDate) == false && GetStrLen(pobjAssessmentMethodsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.updDate}(clsAssessmentMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.updUser) == false && GetStrLen(pobjAssessmentMethodsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.updUser}(clsAssessmentMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.memo) == false && GetStrLen(pobjAssessmentMethodsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 考核方式(AssessmentMethods))!值:${pobjAssessmentMethodsEN.memo}(clsAssessmentMethodsBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodId) == false && undefined !== pobjAssessmentMethodsEN.assessmentMethodId && tzDataType.isString(pobjAssessmentMethodsEN.assessmentMethodId) === false)
{
 throw new Error(`(errid:Watl000417)字段[考核方式Id(assessmentMethodId)]的值:[${pobjAssessmentMethodsEN.assessmentMethodId}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodName) == false && undefined !== pobjAssessmentMethodsEN.assessmentMethodName && tzDataType.isString(pobjAssessmentMethodsEN.assessmentMethodName) === false)
{
 throw new Error(`(errid:Watl000417)字段[考核方式名(assessmentMethodName)]的值:[${pobjAssessmentMethodsEN.assessmentMethodName}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.assessmentMethodEnName) == false && undefined !== pobjAssessmentMethodsEN.assessmentMethodEnName && tzDataType.isString(pobjAssessmentMethodsEN.assessmentMethodEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[考核方式英文名(assessmentMethodEnName)]的值:[${pobjAssessmentMethodsEN.assessmentMethodEnName}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.updDate) == false && undefined !== pobjAssessmentMethodsEN.updDate && tzDataType.isString(pobjAssessmentMethodsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjAssessmentMethodsEN.updDate}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.updUser) == false && undefined !== pobjAssessmentMethodsEN.updUser && tzDataType.isString(pobjAssessmentMethodsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjAssessmentMethodsEN.updUser}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjAssessmentMethodsEN.memo) == false && undefined !== pobjAssessmentMethodsEN.memo && tzDataType.isString(pobjAssessmentMethodsEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjAssessmentMethodsEN.memo}], 非法,应该为字符型(In 考核方式(AssessmentMethods))!(clsAssessmentMethodsBL:CheckProperty4Update)`);
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
export  function AssessmentMethods_GetJSONStrByObj (pobjAssessmentMethodsEN: clsAssessmentMethodsEN): string
{
pobjAssessmentMethodsEN.sfUpdFldSetStr = pobjAssessmentMethodsEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjAssessmentMethodsEN);
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
export  function AssessmentMethods_GetObjLstByJSONStr (strJSON: string): Array<clsAssessmentMethodsEN>
{
let arrAssessmentMethodsObjLst = new Array<clsAssessmentMethodsEN>();
if (strJSON === "")
{
return arrAssessmentMethodsObjLst;
}
try
{
arrAssessmentMethodsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrAssessmentMethodsObjLst;
}
return arrAssessmentMethodsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrAssessmentMethodsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function AssessmentMethods_GetObjLstByJSONObjLst (arrAssessmentMethodsObjLstS: Array<clsAssessmentMethodsEN>): Array<clsAssessmentMethodsEN>
{
const arrAssessmentMethodsObjLst = new Array<clsAssessmentMethodsEN>();
for (const objInFor of arrAssessmentMethodsObjLstS) {
const obj1 = AssessmentMethods_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrAssessmentMethodsObjLst.push(obj1);
}
return arrAssessmentMethodsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function AssessmentMethods_GetObjByJSONStr (strJSON: string): clsAssessmentMethodsEN
{
let pobjAssessmentMethodsEN = new clsAssessmentMethodsEN();
if (strJSON === "")
{
return pobjAssessmentMethodsEN;
}
try
{
pobjAssessmentMethodsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjAssessmentMethodsEN;
}
return pobjAssessmentMethodsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function AssessmentMethods_GetCombineCondition(objAssessmentMethodsCond: clsAssessmentMethodsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objAssessmentMethodsCond.dicFldComparisonOp, clsAssessmentMethodsEN.con_AssessmentMethodId) == true)
{
const strComparisonOpAssessmentMethodId:string = objAssessmentMethodsCond.dicFldComparisonOp[clsAssessmentMethodsEN.con_AssessmentMethodId];
strWhereCond += Format(" And {0} {2} '{1}'", clsAssessmentMethodsEN.con_AssessmentMethodId, objAssessmentMethodsCond.assessmentMethodId, strComparisonOpAssessmentMethodId);
}
if (Object.prototype.hasOwnProperty.call(objAssessmentMethodsCond.dicFldComparisonOp, clsAssessmentMethodsEN.con_AssessmentMethodName) == true)
{
const strComparisonOpAssessmentMethodName:string = objAssessmentMethodsCond.dicFldComparisonOp[clsAssessmentMethodsEN.con_AssessmentMethodName];
strWhereCond += Format(" And {0} {2} '{1}'", clsAssessmentMethodsEN.con_AssessmentMethodName, objAssessmentMethodsCond.assessmentMethodName, strComparisonOpAssessmentMethodName);
}
if (Object.prototype.hasOwnProperty.call(objAssessmentMethodsCond.dicFldComparisonOp, clsAssessmentMethodsEN.con_AssessmentMethodEnName) == true)
{
const strComparisonOpAssessmentMethodEnName:string = objAssessmentMethodsCond.dicFldComparisonOp[clsAssessmentMethodsEN.con_AssessmentMethodEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsAssessmentMethodsEN.con_AssessmentMethodEnName, objAssessmentMethodsCond.assessmentMethodEnName, strComparisonOpAssessmentMethodEnName);
}
if (Object.prototype.hasOwnProperty.call(objAssessmentMethodsCond.dicFldComparisonOp, clsAssessmentMethodsEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objAssessmentMethodsCond.dicFldComparisonOp[clsAssessmentMethodsEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsAssessmentMethodsEN.con_UpdDate, objAssessmentMethodsCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objAssessmentMethodsCond.dicFldComparisonOp, clsAssessmentMethodsEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objAssessmentMethodsCond.dicFldComparisonOp[clsAssessmentMethodsEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsAssessmentMethodsEN.con_UpdUser, objAssessmentMethodsCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objAssessmentMethodsCond.dicFldComparisonOp, clsAssessmentMethodsEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objAssessmentMethodsCond.dicFldComparisonOp[clsAssessmentMethodsEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsAssessmentMethodsEN.con_Memo, objAssessmentMethodsCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--AssessmentMethods(考核方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strAssessmentMethodName: 考核方式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function AssessmentMethods_GetUniCondStr(objAssessmentMethodsEN: clsAssessmentMethodsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and AssessmentMethodName = '{0}'", objAssessmentMethodsEN.assessmentMethodName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--AssessmentMethods(考核方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strAssessmentMethodName: 考核方式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function AssessmentMethods_GetUniCondStr4Update(objAssessmentMethodsEN: clsAssessmentMethodsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and AssessmentMethodId <> '{0}'", objAssessmentMethodsEN.assessmentMethodId);
 strWhereCond +=  Format(" and AssessmentMethodName = '{0}'", objAssessmentMethodsEN.assessmentMethodName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objAssessmentMethodsENS:源对象
 * @param objAssessmentMethodsENT:目标对象
*/
export  function AssessmentMethods_CopyObjTo(objAssessmentMethodsENS: clsAssessmentMethodsEN , objAssessmentMethodsENT: clsAssessmentMethodsEN ): void 
{
objAssessmentMethodsENT.assessmentMethodId = objAssessmentMethodsENS.assessmentMethodId; //考核方式Id
objAssessmentMethodsENT.assessmentMethodName = objAssessmentMethodsENS.assessmentMethodName; //考核方式名
objAssessmentMethodsENT.assessmentMethodEnName = objAssessmentMethodsENS.assessmentMethodEnName; //考核方式英文名
objAssessmentMethodsENT.updDate = objAssessmentMethodsENS.updDate; //修改日期
objAssessmentMethodsENT.updUser = objAssessmentMethodsENS.updUser; //修改人
objAssessmentMethodsENT.memo = objAssessmentMethodsENS.memo; //备注
objAssessmentMethodsENT.sfUpdFldSetStr = objAssessmentMethodsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objAssessmentMethodsENS:源对象
 * @param objAssessmentMethodsENT:目标对象
*/
export  function AssessmentMethods_GetObjFromJsonObj(objAssessmentMethodsENS: clsAssessmentMethodsEN): clsAssessmentMethodsEN 
{
 const objAssessmentMethodsENT: clsAssessmentMethodsEN = new clsAssessmentMethodsEN();
ObjectAssign(objAssessmentMethodsENT, objAssessmentMethodsENS);
 return objAssessmentMethodsENT;
}