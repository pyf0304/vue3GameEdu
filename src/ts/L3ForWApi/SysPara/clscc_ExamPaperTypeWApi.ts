
 /**
 * 类名:clscc_ExamPaperTypeWApi
 * 表名:cc_ExamPaperType(01120074)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:12
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
 * 试卷类型(cc_ExamPaperType)
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
import { clscc_ExamPaperTypeEN } from "@/ts/L0Entity/SysPara/clscc_ExamPaperTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const cc_ExamPaperType_Controller = "cc_ExamPaperTypeApi";
 export const cc_ExamPaperType_ConstructorName = "cc_ExamPaperType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strExamPaperTypeId:关键字
 * @returns 对象
 **/
export  async function cc_ExamPaperType_GetObjByExamPaperTypeIdAsync(strExamPaperTypeId: string): Promise<clscc_ExamPaperTypeEN|null>  
{
const strThisFuncName = "GetObjByExamPaperTypeIdAsync";

if (IsNullOrEmpty(strExamPaperTypeId) == true)
{
  const strMsg = Format("参数:[strExamPaperTypeId]不能为空!(In clscc_ExamPaperTypeWApi.GetObjByExamPaperTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strExamPaperTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strExamPaperTypeId]的长度:[{0}]不正确!(clscc_ExamPaperTypeWApi.GetObjByExamPaperTypeIdAsync)", strExamPaperTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByExamPaperTypeId";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strExamPaperTypeId,
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
const objcc_ExamPaperType = cc_ExamPaperType_GetObjFromJsonObj(returnObj);
return objcc_ExamPaperType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param strExamPaperTypeId:所给的关键字
 * @returns 对象
*/
export  async function cc_ExamPaperType_GetObjByExamPaperTypeIdlocalStorage(strExamPaperTypeId: string) {
const strThisFuncName = "GetObjByExamPaperTypeIdlocalStorage";

if (IsNullOrEmpty(strExamPaperTypeId) == true)
{
  const strMsg = Format("参数:[strExamPaperTypeId]不能为空!(In clscc_ExamPaperTypeWApi.GetObjByExamPaperTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strExamPaperTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strExamPaperTypeId]的长度:[{0}]不正确!(clscc_ExamPaperTypeWApi.GetObjByExamPaperTypeIdlocalStorage)", strExamPaperTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clscc_ExamPaperTypeEN._CurrTabName, strExamPaperTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objcc_ExamPaperTypeCache: clscc_ExamPaperTypeEN = JSON.parse(strTempObj);
return objcc_ExamPaperTypeCache;
}
try
{
const objcc_ExamPaperType = await cc_ExamPaperType_GetObjByExamPaperTypeIdAsync(strExamPaperTypeId);
if (objcc_ExamPaperType != null)
{
localStorage.setItem(strKey, JSON.stringify(objcc_ExamPaperType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objcc_ExamPaperType;
}
return objcc_ExamPaperType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strExamPaperTypeId, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strExamPaperTypeId:所给的关键字
 * @returns 对象
*/
export  async function cc_ExamPaperType_GetObjByExamPaperTypeIdCache(strExamPaperTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByExamPaperTypeIdCache";

if (IsNullOrEmpty(strExamPaperTypeId) == true)
{
  const strMsg = Format("参数:[strExamPaperTypeId]不能为空!(In clscc_ExamPaperTypeWApi.GetObjByExamPaperTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strExamPaperTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strExamPaperTypeId]的长度:[{0}]不正确!(clscc_ExamPaperTypeWApi.GetObjByExamPaperTypeIdCache)", strExamPaperTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstCache();
try
{
const arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeObjLstCache.filter(x => 
 x.examPaperTypeId == strExamPaperTypeId );
let objcc_ExamPaperType: clscc_ExamPaperTypeEN;
if (arrcc_ExamPaperTypeSel.length > 0)
{
objcc_ExamPaperType = arrcc_ExamPaperTypeSel[0];
return objcc_ExamPaperType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objcc_ExamPaperTypeConst = await cc_ExamPaperType_GetObjByExamPaperTypeIdAsync(strExamPaperTypeId);
if (objcc_ExamPaperTypeConst != null)
{
cc_ExamPaperType_ReFreshThisCache();
return objcc_ExamPaperTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strExamPaperTypeId, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objcc_ExamPaperType:所给的对象
 * @returns 对象
*/
export  async function cc_ExamPaperType_UpdateObjInLstCache(objcc_ExamPaperType: clscc_ExamPaperTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstCache();
const obj = arrcc_ExamPaperTypeObjLstCache.find(x => x.examPaperTypeName == objcc_ExamPaperType.examPaperTypeName);
if (obj != null)
{
objcc_ExamPaperType.examPaperTypeId = obj.examPaperTypeId;
ObjectAssign( obj, objcc_ExamPaperType);
}
else
{
arrcc_ExamPaperTypeObjLstCache.push(objcc_ExamPaperType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  function cc_ExamPaperType_SortFunDefa(a:clscc_ExamPaperTypeEN , b:clscc_ExamPaperTypeEN): number 
{
return a.examPaperTypeId.localeCompare(b.examPaperTypeId);
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
export  function cc_ExamPaperType_SortFunDefa2Fld(a:clscc_ExamPaperTypeEN , b:clscc_ExamPaperTypeEN): number 
{
if (a.examPaperTypeName == b.examPaperTypeName) return a.memo.localeCompare(b.memo);
else return a.examPaperTypeName.localeCompare(b.examPaperTypeName);
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
export  function cc_ExamPaperType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_ExamPaperTypeEN.con_ExamPaperTypeId:
return (a: clscc_ExamPaperTypeEN, b: clscc_ExamPaperTypeEN) => {
return a.examPaperTypeId.localeCompare(b.examPaperTypeId);
}
case clscc_ExamPaperTypeEN.con_ExamPaperTypeName:
return (a: clscc_ExamPaperTypeEN, b: clscc_ExamPaperTypeEN) => {
return a.examPaperTypeName.localeCompare(b.examPaperTypeName);
}
case clscc_ExamPaperTypeEN.con_Memo:
return (a: clscc_ExamPaperTypeEN, b: clscc_ExamPaperTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExamPaperType]中不存在!(in ${ cc_ExamPaperType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_ExamPaperTypeEN.con_ExamPaperTypeId:
return (a: clscc_ExamPaperTypeEN, b: clscc_ExamPaperTypeEN) => {
return b.examPaperTypeId.localeCompare(a.examPaperTypeId);
}
case clscc_ExamPaperTypeEN.con_ExamPaperTypeName:
return (a: clscc_ExamPaperTypeEN, b: clscc_ExamPaperTypeEN) => {
return b.examPaperTypeName.localeCompare(a.examPaperTypeName);
}
case clscc_ExamPaperTypeEN.con_Memo:
return (a: clscc_ExamPaperTypeEN, b: clscc_ExamPaperTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExamPaperType]中不存在!(in ${ cc_ExamPaperType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strExamPaperTypeId:所给的关键字
 * @returns 对象
*/
export  async function cc_ExamPaperType_GetNameByExamPaperTypeIdCache(strExamPaperTypeId: string) {

if (IsNullOrEmpty(strExamPaperTypeId) == true)
{
  const strMsg = Format("参数:[strExamPaperTypeId]不能为空!(In clscc_ExamPaperTypeWApi.GetNameByExamPaperTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strExamPaperTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strExamPaperTypeId]的长度:[{0}]不正确!(clscc_ExamPaperTypeWApi.GetNameByExamPaperTypeIdCache)", strExamPaperTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstCache();
if (arrcc_ExamPaperTypeObjLstCache == null) return "";
try
{
const arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeObjLstCache.filter(x => 
 x.examPaperTypeId == strExamPaperTypeId );
let objcc_ExamPaperType: clscc_ExamPaperTypeEN;
if (arrcc_ExamPaperTypeSel.length > 0)
{
objcc_ExamPaperType = arrcc_ExamPaperTypeSel[0];
return objcc_ExamPaperType.examPaperTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strExamPaperTypeId);
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
export  async function cc_ExamPaperType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_ExamPaperTypeEN.con_ExamPaperTypeId:
return (obj: clscc_ExamPaperTypeEN) => {
return obj.examPaperTypeId === value;
}
case clscc_ExamPaperTypeEN.con_ExamPaperTypeName:
return (obj: clscc_ExamPaperTypeEN) => {
return obj.examPaperTypeName === value;
}
case clscc_ExamPaperTypeEN.con_Memo:
return (obj: clscc_ExamPaperTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExamPaperType]中不存在!(in ${ cc_ExamPaperType_ConstructorName}.${ strThisFuncName})`;
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
export  async function cc_ExamPaperType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clscc_ExamPaperTypeEN.con_ExamPaperTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clscc_ExamPaperTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clscc_ExamPaperTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strExamPaperTypeId = strInValue;
if (IsNullOrEmpty(strExamPaperTypeId) == true)
{
return "";
}
const objcc_ExamPaperType = await cc_ExamPaperType_GetObjByExamPaperTypeIdCache(strExamPaperTypeId );
if (objcc_ExamPaperType == null) return "";
if (objcc_ExamPaperType.GetFldValue(strOutFldName) == null) return "";
return objcc_ExamPaperType.GetFldValue(strOutFldName).toString();
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
export  async function cc_ExamPaperType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clscc_ExamPaperTypeEN.con_ExamPaperTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrcc_ExamPaperType = await cc_ExamPaperType_GetObjLstCache();
if (arrcc_ExamPaperType == null) return [];
let arrcc_ExamPaperTypeSel = arrcc_ExamPaperType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrcc_ExamPaperTypeSel.length == 0) return [];
return arrcc_ExamPaperTypeSel.map(x=>x.examPaperTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_ExamPaperType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_GetFirstObjAsync(strWhereCond: string): Promise<clscc_ExamPaperTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const objcc_ExamPaperType = cc_ExamPaperType_GetObjFromJsonObj(returnObj);
return objcc_ExamPaperType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clscc_ExamPaperTypeEN._CurrTabName;
if (IsNullOrEmpty(clscc_ExamPaperTypeEN.WhereFormat) == false)
{
strWhereCond = clscc_ExamPaperTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clscc_ExamPaperTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_ExamPaperTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrcc_ExamPaperTypeExObjLstCache: Array<clscc_ExamPaperTypeEN> = CacheHelper.Get(strKey);
const arrcc_ExamPaperTypeObjLstT = cc_ExamPaperType_GetObjLstByJSONObjLst(arrcc_ExamPaperTypeExObjLstCache);
return arrcc_ExamPaperTypeObjLstT;
}
try
{
const arrcc_ExamPaperTypeExObjLst = await cc_ExamPaperType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrcc_ExamPaperTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_ExamPaperTypeExObjLst.length);
console.log(strInfo);
return arrcc_ExamPaperTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExamPaperType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clscc_ExamPaperTypeEN._CurrTabName;
if (IsNullOrEmpty(clscc_ExamPaperTypeEN.WhereFormat) == false)
{
strWhereCond = clscc_ExamPaperTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clscc_ExamPaperTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_ExamPaperTypeEN.CacheAddiCondition);
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
const arrcc_ExamPaperTypeExObjLstCache: Array<clscc_ExamPaperTypeEN> = JSON.parse(strTempObjLst);
const arrcc_ExamPaperTypeObjLstT = cc_ExamPaperType_GetObjLstByJSONObjLst(arrcc_ExamPaperTypeExObjLstCache);
return arrcc_ExamPaperTypeObjLstT;
}
try
{
const arrcc_ExamPaperTypeExObjLst = await cc_ExamPaperType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrcc_ExamPaperTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_ExamPaperTypeExObjLst.length);
console.log(strInfo);
return arrcc_ExamPaperTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExamPaperType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clscc_ExamPaperTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrcc_ExamPaperTypeObjLstCache: Array<clscc_ExamPaperTypeEN> = JSON.parse(strTempObjLst);
return arrcc_ExamPaperTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function cc_ExamPaperType_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_ExamPaperTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clscc_ExamPaperTypeEN._CurrTabName;
if (IsNullOrEmpty(clscc_ExamPaperTypeEN.WhereFormat) == false)
{
strWhereCond = clscc_ExamPaperTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clscc_ExamPaperTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_ExamPaperTypeEN.CacheAddiCondition);
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
const arrcc_ExamPaperTypeExObjLstCache: Array<clscc_ExamPaperTypeEN> = JSON.parse(strTempObjLst);
const arrcc_ExamPaperTypeObjLstT = cc_ExamPaperType_GetObjLstByJSONObjLst(arrcc_ExamPaperTypeExObjLstCache);
return arrcc_ExamPaperTypeObjLstT;
}
try
{
const arrcc_ExamPaperTypeExObjLst = await cc_ExamPaperType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrcc_ExamPaperTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_ExamPaperTypeExObjLst.length);
console.log(strInfo);
return arrcc_ExamPaperTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExamPaperType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clscc_ExamPaperTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrcc_ExamPaperTypeObjLstCache: Array<clscc_ExamPaperTypeEN> = JSON.parse(strTempObjLst);
return arrcc_ExamPaperTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExamPaperType_GetObjLstCache(): Promise<Array<clscc_ExamPaperTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrcc_ExamPaperTypeObjLstCache;
switch (clscc_ExamPaperTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstClientCache();
break;
default:
arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstClientCache();
break;
}
return arrcc_ExamPaperTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExamPaperType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrcc_ExamPaperTypeObjLstCache;
switch (clscc_ExamPaperTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrcc_ExamPaperTypeObjLstCache = null;
break;
default:
arrcc_ExamPaperTypeObjLstCache = null;
break;
}
return arrcc_ExamPaperTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrExamPaperTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_ExamPaperType_GetSubObjLstCache(objcc_ExamPaperTypeCond: clscc_ExamPaperTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstCache();
let arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeObjLstCache;
if (objcc_ExamPaperTypeCond.sfFldComparisonOp == null || objcc_ExamPaperTypeCond.sfFldComparisonOp == "") return arrcc_ExamPaperTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_ExamPaperTypeCond.sfFldComparisonOp);
//console.log("clscc_ExamPaperTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_ExamPaperTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_ExamPaperTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_ExamPaperTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objcc_ExamPaperTypeCond), cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_ExamPaperTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrExamPaperTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function cc_ExamPaperType_GetObjLstByExamPaperTypeIdLstAsync(arrExamPaperTypeId: Array<string>): Promise<Array<clscc_ExamPaperTypeEN>>  
{
const strThisFuncName = "GetObjLstByExamPaperTypeIdLstAsync";
const strAction = "GetObjLstByExamPaperTypeIdLst";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrExamPaperTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param arrstrExamPaperTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function cc_ExamPaperType_GetObjLstByExamPaperTypeIdLstCache(arrExamPaperTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByExamPaperTypeIdLstCache";
try
{
const arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstCache();
const arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeObjLstCache.filter(x => arrExamPaperTypeIdLst.indexOf(x.examPaperTypeId)>-1);
return arrcc_ExamPaperTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrExamPaperTypeIdLst.join(","), cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_ExamPaperTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_ExamPaperTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clscc_ExamPaperTypeEN>();
const arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstCache();
if (arrcc_ExamPaperTypeObjLstCache.length == 0) return arrcc_ExamPaperTypeObjLstCache;
let arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objcc_ExamPaperTypeCond = new clscc_ExamPaperTypeEN();
ObjectAssign(objcc_ExamPaperTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clscc_ExamPaperTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_ExamPaperTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_ExamPaperTypeSel.length == 0) return arrcc_ExamPaperTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.sort(cc_ExamPaperType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.sort(objPagerPara.sortFun);
}
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.slice(intStart, intEnd);     
return arrcc_ExamPaperTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_ExamPaperTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function cc_ExamPaperType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_ExamPaperTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_ExamPaperTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param strExamPaperTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function cc_ExamPaperType_DelRecordAsync(strExamPaperTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strExamPaperTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param arrExamPaperTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function cc_ExamPaperType_Delcc_ExamPaperTypesAsync(arrExamPaperTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_ExamPaperTypesAsync";
const strAction = "Delcc_ExamPaperTypes";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrExamPaperTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_Delcc_ExamPaperTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_ExamPaperTypesByCondAsync";
const strAction = "Delcc_ExamPaperTypesByCond";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_ExamPaperType_AddNewRecordAsync(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_ExamPaperTypeEN);
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_ExamPaperType_AddNewRecordWithMaxIdAsync(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_AddNewObjSave(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
cc_ExamPaperType_CheckPropertyNew(objcc_ExamPaperTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_ExamPaperType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_ExamPaperType_CheckUniCond4Add(objcc_ExamPaperTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await cc_ExamPaperType_AddNewRecordWithMaxIdAsync(objcc_ExamPaperTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
cc_ExamPaperType_ReFreshCache();
}
else
{
const strInfo = `添加[试卷类型(cc_ExamPaperType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ cc_ExamPaperType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function cc_ExamPaperType_CheckUniCond4Add(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN): Promise<boolean>{
const strUniquenessCondition = cc_ExamPaperType_GetUniCondStr(objcc_ExamPaperTypeEN);
const bolIsExistCondition = await cc_ExamPaperType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_ExamPaperType_CheckUniCond4Update(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN): Promise<boolean>{
const strUniquenessCondition = cc_ExamPaperType_GetUniCondStr4Update(objcc_ExamPaperTypeEN);
const bolIsExistCondition = await cc_ExamPaperType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_ExamPaperType_UpdateObjSave(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objcc_ExamPaperTypeEN.sfUpdFldSetStr = objcc_ExamPaperTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_ExamPaperTypeEN.examPaperTypeId == "" || objcc_ExamPaperTypeEN.examPaperTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_ExamPaperType_CheckProperty4Update(objcc_ExamPaperTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_ExamPaperType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_ExamPaperType_CheckUniCond4Update(objcc_ExamPaperTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await cc_ExamPaperType_UpdateRecordAsync(objcc_ExamPaperTypeEN);
if (returnBool == true)
{
cc_ExamPaperType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ cc_ExamPaperType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_ExamPaperTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_ExamPaperType_AddNewRecordWithReturnKeyAsync(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_ExamPaperType_UpdateRecordAsync(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_ExamPaperTypeEN.sfUpdFldSetStr === undefined || objcc_ExamPaperTypeEN.sfUpdFldSetStr === null || objcc_ExamPaperTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_ExamPaperTypeEN.examPaperTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_ExamPaperType_EditRecordExAsync(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objcc_ExamPaperTypeEN.sfUpdFldSetStr === undefined || objcc_ExamPaperTypeEN.sfUpdFldSetStr === null || objcc_ExamPaperTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_ExamPaperTypeEN.examPaperTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_ExamPaperType_UpdateWithConditionAsync(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_ExamPaperTypeEN.sfUpdFldSetStr === undefined || objcc_ExamPaperTypeEN.sfUpdFldSetStr === null || objcc_ExamPaperTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_ExamPaperTypeEN.examPaperTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);
objcc_ExamPaperTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param objstrExamPaperTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_ExamPaperType_IsExistRecordCache(objcc_ExamPaperTypeCond: clscc_ExamPaperTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstCache();
if (arrcc_ExamPaperTypeObjLstCache == null) return false;
let arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeObjLstCache;
if (objcc_ExamPaperTypeCond.sfFldComparisonOp == null || objcc_ExamPaperTypeCond.sfFldComparisonOp == "") return arrcc_ExamPaperTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_ExamPaperTypeCond.sfFldComparisonOp);
//console.log("clscc_ExamPaperTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_ExamPaperTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_ExamPaperTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_ExamPaperTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objcc_ExamPaperTypeCond), cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param strExamPaperTypeId:所给的关键字
 * @returns 对象
*/
export  async function cc_ExamPaperType_IsExistCache(strExamPaperTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstCache();
if (arrcc_ExamPaperTypeObjLstCache == null) return false;
try
{
const arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeObjLstCache.filter(x => x.examPaperTypeId == strExamPaperTypeId);
if (arrcc_ExamPaperTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strExamPaperTypeId, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strExamPaperTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function cc_ExamPaperType_IsExistAsync(strExamPaperTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strExamPaperTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function cc_ExamPaperType_GetRecCountByCondCache(objcc_ExamPaperTypeCond: clscc_ExamPaperTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrcc_ExamPaperTypeObjLstCache = await cc_ExamPaperType_GetObjLstCache();
if (arrcc_ExamPaperTypeObjLstCache == null) return 0;
let arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeObjLstCache;
if (objcc_ExamPaperTypeCond.sfFldComparisonOp == null || objcc_ExamPaperTypeCond.sfFldComparisonOp == "") return arrcc_ExamPaperTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_ExamPaperTypeCond.sfFldComparisonOp);
//console.log("clscc_ExamPaperTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_ExamPaperTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_ExamPaperTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExamPaperTypeSel = arrcc_ExamPaperTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_ExamPaperTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objcc_ExamPaperTypeCond), cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_ExamPaperType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperType_ConstructorName, strThisFuncName);
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
export  function cc_ExamPaperType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function cc_ExamPaperType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clscc_ExamPaperTypeEN._CurrTabName;
switch (clscc_ExamPaperTypeEN.CacheModeId)
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
clscc_ExamPaperTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function cc_ExamPaperType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clscc_ExamPaperTypeEN._CurrTabName;
switch (clscc_ExamPaperTypeEN.CacheModeId)
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
clscc_ExamPaperTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function cc_ExamPaperType_GetLastRefreshTime():string
{
if (clscc_ExamPaperTypeEN._RefreshTimeLst.length == 0) return "";
return clscc_ExamPaperTypeEN._RefreshTimeLst[clscc_ExamPaperTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function cc_ExamPaperType_BindDdl_ExamPaperTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_ExamPaperTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_ExamPaperTypeIdInDivCache");
const arrObjLstSel = await cc_ExamPaperType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clscc_ExamPaperTypeEN.con_ExamPaperTypeId, clscc_ExamPaperTypeEN.con_ExamPaperTypeName, "试卷类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function cc_ExamPaperType_GetArrcc_ExamPaperType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_ExamPaperTypeIdInDivCache");
const arrcc_ExamPaperType = new Array<clscc_ExamPaperTypeEN>();
const arrObjLstSel = await cc_ExamPaperType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clscc_ExamPaperTypeEN();
obj0.examPaperTypeId = '0';
obj0.examPaperTypeName = '选试卷类型...';
arrcc_ExamPaperType.push(obj0);
arrObjLstSel.forEach(x => arrcc_ExamPaperType.push(x));
return arrcc_ExamPaperType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_ExamPaperType_CheckPropertyNew(pobjcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.examPaperTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[试卷类型名称]不能为空(In 试卷类型)!(clscc_ExamPaperTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.examPaperTypeId) == false && GetStrLen(pobjcc_ExamPaperTypeEN.examPaperTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[试卷类型Id(examPaperTypeId)]的长度不能超过2(In 试卷类型(cc_ExamPaperType))!值:${pobjcc_ExamPaperTypeEN.examPaperTypeId}(clscc_ExamPaperTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.examPaperTypeName) == false && GetStrLen(pobjcc_ExamPaperTypeEN.examPaperTypeName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[试卷类型名称(examPaperTypeName)]的长度不能超过30(In 试卷类型(cc_ExamPaperType))!值:${pobjcc_ExamPaperTypeEN.examPaperTypeName}(clscc_ExamPaperTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.memo) == false && GetStrLen(pobjcc_ExamPaperTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 试卷类型(cc_ExamPaperType))!值:${pobjcc_ExamPaperTypeEN.memo}(clscc_ExamPaperTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.examPaperTypeId) == false && undefined !== pobjcc_ExamPaperTypeEN.examPaperTypeId && tzDataType.isString(pobjcc_ExamPaperTypeEN.examPaperTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[试卷类型Id(examPaperTypeId)]的值:[${pobjcc_ExamPaperTypeEN.examPaperTypeId}], 非法,应该为字符型(In 试卷类型(cc_ExamPaperType))!(clscc_ExamPaperTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.examPaperTypeName) == false && undefined !== pobjcc_ExamPaperTypeEN.examPaperTypeName && tzDataType.isString(pobjcc_ExamPaperTypeEN.examPaperTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[试卷类型名称(examPaperTypeName)]的值:[${pobjcc_ExamPaperTypeEN.examPaperTypeName}], 非法,应该为字符型(In 试卷类型(cc_ExamPaperType))!(clscc_ExamPaperTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.memo) == false && undefined !== pobjcc_ExamPaperTypeEN.memo && tzDataType.isString(pobjcc_ExamPaperTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjcc_ExamPaperTypeEN.memo}], 非法,应该为字符型(In 试卷类型(cc_ExamPaperType))!(clscc_ExamPaperTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_ExamPaperType_CheckProperty4Update(pobjcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.examPaperTypeId) == false && GetStrLen(pobjcc_ExamPaperTypeEN.examPaperTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[试卷类型Id(examPaperTypeId)]的长度不能超过2(In 试卷类型(cc_ExamPaperType))!值:${pobjcc_ExamPaperTypeEN.examPaperTypeId}(clscc_ExamPaperTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.examPaperTypeName) == false && GetStrLen(pobjcc_ExamPaperTypeEN.examPaperTypeName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[试卷类型名称(examPaperTypeName)]的长度不能超过30(In 试卷类型(cc_ExamPaperType))!值:${pobjcc_ExamPaperTypeEN.examPaperTypeName}(clscc_ExamPaperTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.memo) == false && GetStrLen(pobjcc_ExamPaperTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 试卷类型(cc_ExamPaperType))!值:${pobjcc_ExamPaperTypeEN.memo}(clscc_ExamPaperTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.examPaperTypeId) == false && undefined !== pobjcc_ExamPaperTypeEN.examPaperTypeId && tzDataType.isString(pobjcc_ExamPaperTypeEN.examPaperTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[试卷类型Id(examPaperTypeId)]的值:[${pobjcc_ExamPaperTypeEN.examPaperTypeId}], 非法,应该为字符型(In 试卷类型(cc_ExamPaperType))!(clscc_ExamPaperTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.examPaperTypeName) == false && undefined !== pobjcc_ExamPaperTypeEN.examPaperTypeName && tzDataType.isString(pobjcc_ExamPaperTypeEN.examPaperTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[试卷类型名称(examPaperTypeName)]的值:[${pobjcc_ExamPaperTypeEN.examPaperTypeName}], 非法,应该为字符型(In 试卷类型(cc_ExamPaperType))!(clscc_ExamPaperTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperTypeEN.memo) == false && undefined !== pobjcc_ExamPaperTypeEN.memo && tzDataType.isString(pobjcc_ExamPaperTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjcc_ExamPaperTypeEN.memo}], 非法,应该为字符型(In 试卷类型(cc_ExamPaperType))!(clscc_ExamPaperTypeBL:CheckProperty4Update)`);
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
export  function cc_ExamPaperType_GetJSONStrByObj (pobjcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN): string
{
pobjcc_ExamPaperTypeEN.sfUpdFldSetStr = pobjcc_ExamPaperTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_ExamPaperTypeEN);
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
export  function cc_ExamPaperType_GetObjLstByJSONStr (strJSON: string): Array<clscc_ExamPaperTypeEN>
{
let arrcc_ExamPaperTypeObjLst = new Array<clscc_ExamPaperTypeEN>();
if (strJSON === "")
{
return arrcc_ExamPaperTypeObjLst;
}
try
{
arrcc_ExamPaperTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_ExamPaperTypeObjLst;
}
return arrcc_ExamPaperTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_ExamPaperTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_ExamPaperType_GetObjLstByJSONObjLst (arrcc_ExamPaperTypeObjLstS: Array<clscc_ExamPaperTypeEN>): Array<clscc_ExamPaperTypeEN>
{
const arrcc_ExamPaperTypeObjLst = new Array<clscc_ExamPaperTypeEN>();
for (const objInFor of arrcc_ExamPaperTypeObjLstS) {
const obj1 = cc_ExamPaperType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_ExamPaperTypeObjLst.push(obj1);
}
return arrcc_ExamPaperTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_ExamPaperType_GetObjByJSONStr (strJSON: string): clscc_ExamPaperTypeEN
{
let pobjcc_ExamPaperTypeEN = new clscc_ExamPaperTypeEN();
if (strJSON === "")
{
return pobjcc_ExamPaperTypeEN;
}
try
{
pobjcc_ExamPaperTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_ExamPaperTypeEN;
}
return pobjcc_ExamPaperTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_ExamPaperType_GetCombineCondition(objcc_ExamPaperTypeCond: clscc_ExamPaperTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperTypeCond.dicFldComparisonOp, clscc_ExamPaperTypeEN.con_ExamPaperTypeId) == true)
{
const strComparisonOpExamPaperTypeId:string = objcc_ExamPaperTypeCond.dicFldComparisonOp[clscc_ExamPaperTypeEN.con_ExamPaperTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperTypeEN.con_ExamPaperTypeId, objcc_ExamPaperTypeCond.examPaperTypeId, strComparisonOpExamPaperTypeId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperTypeCond.dicFldComparisonOp, clscc_ExamPaperTypeEN.con_ExamPaperTypeName) == true)
{
const strComparisonOpExamPaperTypeName:string = objcc_ExamPaperTypeCond.dicFldComparisonOp[clscc_ExamPaperTypeEN.con_ExamPaperTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperTypeEN.con_ExamPaperTypeName, objcc_ExamPaperTypeCond.examPaperTypeName, strComparisonOpExamPaperTypeName);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperTypeCond.dicFldComparisonOp, clscc_ExamPaperTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_ExamPaperTypeCond.dicFldComparisonOp[clscc_ExamPaperTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperTypeEN.con_Memo, objcc_ExamPaperTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_ExamPaperType(试卷类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strExamPaperTypeName: 试卷类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_ExamPaperType_GetUniCondStr(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ExamPaperTypeName = '{0}'", objcc_ExamPaperTypeEN.examPaperTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_ExamPaperType(试卷类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strExamPaperTypeName: 试卷类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_ExamPaperType_GetUniCondStr4Update(objcc_ExamPaperTypeEN: clscc_ExamPaperTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ExamPaperTypeId <> '{0}'", objcc_ExamPaperTypeEN.examPaperTypeId);
 strWhereCond +=  Format(" and ExamPaperTypeName = '{0}'", objcc_ExamPaperTypeEN.examPaperTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_ExamPaperTypeENS:源对象
 * @param objcc_ExamPaperTypeENT:目标对象
*/
export  function cc_ExamPaperType_CopyObjTo(objcc_ExamPaperTypeENS: clscc_ExamPaperTypeEN , objcc_ExamPaperTypeENT: clscc_ExamPaperTypeEN ): void 
{
objcc_ExamPaperTypeENT.examPaperTypeId = objcc_ExamPaperTypeENS.examPaperTypeId; //试卷类型Id
objcc_ExamPaperTypeENT.examPaperTypeName = objcc_ExamPaperTypeENS.examPaperTypeName; //试卷类型名称
objcc_ExamPaperTypeENT.memo = objcc_ExamPaperTypeENS.memo; //备注
objcc_ExamPaperTypeENT.sfUpdFldSetStr = objcc_ExamPaperTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_ExamPaperTypeENS:源对象
 * @param objcc_ExamPaperTypeENT:目标对象
*/
export  function cc_ExamPaperType_GetObjFromJsonObj(objcc_ExamPaperTypeENS: clscc_ExamPaperTypeEN): clscc_ExamPaperTypeEN 
{
 const objcc_ExamPaperTypeENT: clscc_ExamPaperTypeEN = new clscc_ExamPaperTypeEN();
ObjectAssign(objcc_ExamPaperTypeENT, objcc_ExamPaperTypeENS);
 return objcc_ExamPaperTypeENT;
}