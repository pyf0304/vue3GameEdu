
 /**
 * 类名:clsTeachingCaseResCaseTypeWApi
 * 表名:TeachingCaseResCaseType(01120514)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:29:48
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学案例资源(TeachingCaseResLib)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学案例资源案例类型(TeachingCaseResCaseType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年12月05日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsTeachingCaseResCaseTypeEN } from "@/ts/L0Entity/TeachingCaseResLib/clsTeachingCaseResCaseTypeEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const teachingCaseResCaseType_Controller = "TeachingCaseResCaseTypeApi";
 export const teachingCaseResCaseType_ConstructorName = "teachingCaseResCaseType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdTeachingCaseResCaseType:关键字
 * @returns 对象
 **/
export  async function TeachingCaseResCaseType_GetObjByIdTeachingCaseResCaseTypeAsync(strIdTeachingCaseResCaseType: string): Promise<clsTeachingCaseResCaseTypeEN|null>  
{
const strThisFuncName = "GetObjByIdTeachingCaseResCaseTypeAsync";

if (IsNullOrEmpty(strIdTeachingCaseResCaseType) == true)
{
  const strMsg = Format("参数:[strIdTeachingCaseResCaseType]不能为空!(In clsTeachingCaseResCaseTypeWApi.GetObjByIdTeachingCaseResCaseTypeAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeachingCaseResCaseType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdTeachingCaseResCaseType]的长度:[{0}]不正确!(clsTeachingCaseResCaseTypeWApi.GetObjByIdTeachingCaseResCaseTypeAsync)", strIdTeachingCaseResCaseType.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdTeachingCaseResCaseType";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeachingCaseResCaseType,
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
const objTeachingCaseResCaseType = TeachingCaseResCaseType_GetObjFromJsonObj(returnObj);
return objTeachingCaseResCaseType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strIdTeachingCaseResCaseType:所给的关键字
 * @returns 对象
*/
export  async function TeachingCaseResCaseType_GetObjByIdTeachingCaseResCaseTypeCache(strIdTeachingCaseResCaseType: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdTeachingCaseResCaseTypeCache";

if (IsNullOrEmpty(strIdTeachingCaseResCaseType) == true)
{
  const strMsg = Format("参数:[strIdTeachingCaseResCaseType]不能为空!(In clsTeachingCaseResCaseTypeWApi.GetObjByIdTeachingCaseResCaseTypeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeachingCaseResCaseType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdTeachingCaseResCaseType]的长度:[{0}]不正确!(clsTeachingCaseResCaseTypeWApi.GetObjByIdTeachingCaseResCaseTypeCache)", strIdTeachingCaseResCaseType.length);
console.error(strMsg);
throw (strMsg);
}
const arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstCache();
try
{
const arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeObjLstCache.filter(x => 
 x.idTeachingCaseResCaseType == strIdTeachingCaseResCaseType );
let objTeachingCaseResCaseType: clsTeachingCaseResCaseTypeEN;
if (arrTeachingCaseResCaseTypeSel.length > 0)
{
objTeachingCaseResCaseType = arrTeachingCaseResCaseTypeSel[0];
return objTeachingCaseResCaseType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objTeachingCaseResCaseTypeConst = await TeachingCaseResCaseType_GetObjByIdTeachingCaseResCaseTypeAsync(strIdTeachingCaseResCaseType);
if (objTeachingCaseResCaseTypeConst != null)
{
TeachingCaseResCaseType_ReFreshThisCache();
return objTeachingCaseResCaseTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdTeachingCaseResCaseType, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdTeachingCaseResCaseType:所给的关键字
 * @returns 对象
*/
export  async function TeachingCaseResCaseType_GetObjByIdTeachingCaseResCaseTypelocalStorage(strIdTeachingCaseResCaseType: string) {
const strThisFuncName = "GetObjByIdTeachingCaseResCaseTypelocalStorage";

if (IsNullOrEmpty(strIdTeachingCaseResCaseType) == true)
{
  const strMsg = Format("参数:[strIdTeachingCaseResCaseType]不能为空!(In clsTeachingCaseResCaseTypeWApi.GetObjByIdTeachingCaseResCaseTypelocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeachingCaseResCaseType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdTeachingCaseResCaseType]的长度:[{0}]不正确!(clsTeachingCaseResCaseTypeWApi.GetObjByIdTeachingCaseResCaseTypelocalStorage)", strIdTeachingCaseResCaseType.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsTeachingCaseResCaseTypeEN._CurrTabName, strIdTeachingCaseResCaseType);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objTeachingCaseResCaseTypeCache: clsTeachingCaseResCaseTypeEN = JSON.parse(strTempObj);
return objTeachingCaseResCaseTypeCache;
}
try
{
const objTeachingCaseResCaseType = await TeachingCaseResCaseType_GetObjByIdTeachingCaseResCaseTypeAsync(strIdTeachingCaseResCaseType);
if (objTeachingCaseResCaseType != null)
{
localStorage.setItem(strKey, JSON.stringify(objTeachingCaseResCaseType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objTeachingCaseResCaseType;
}
return objTeachingCaseResCaseType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdTeachingCaseResCaseType, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objTeachingCaseResCaseType:所给的对象
 * @returns 对象
*/
export  async function TeachingCaseResCaseType_UpdateObjInLstCache(objTeachingCaseResCaseType: clsTeachingCaseResCaseTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstCache();
const obj = arrTeachingCaseResCaseTypeObjLstCache.find(x => 
x.idTeachingCaseResCaseType == objTeachingCaseResCaseType.idTeachingCaseResCaseType);
if (obj != null)
{
objTeachingCaseResCaseType.idTeachingCaseResCaseType = obj.idTeachingCaseResCaseType;
ObjectAssign( obj, objTeachingCaseResCaseType);
}
else
{
arrTeachingCaseResCaseTypeObjLstCache.push(objTeachingCaseResCaseType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdTeachingCaseResCaseType:所给的关键字
 * @returns 对象
*/
export  async function TeachingCaseResCaseType_GetNameByIdTeachingCaseResCaseTypeCache(strIdTeachingCaseResCaseType: string) {

if (IsNullOrEmpty(strIdTeachingCaseResCaseType) == true)
{
  const strMsg = Format("参数:[strIdTeachingCaseResCaseType]不能为空!(In clsTeachingCaseResCaseTypeWApi.GetNameByIdTeachingCaseResCaseTypeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeachingCaseResCaseType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdTeachingCaseResCaseType]的长度:[{0}]不正确!(clsTeachingCaseResCaseTypeWApi.GetNameByIdTeachingCaseResCaseTypeCache)", strIdTeachingCaseResCaseType.length);
console.error(strMsg);
throw (strMsg);
}
const arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstCache();
if (arrTeachingCaseResCaseTypeObjLstCache == null) return "";
try
{
const arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeObjLstCache.filter(x => 
 x.idTeachingCaseResCaseType == strIdTeachingCaseResCaseType );
let objTeachingCaseResCaseType: clsTeachingCaseResCaseTypeEN;
if (arrTeachingCaseResCaseTypeSel.length > 0)
{
objTeachingCaseResCaseType = arrTeachingCaseResCaseTypeSel[0];
return objTeachingCaseResCaseType.teachingCaseResCaseTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdTeachingCaseResCaseType);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function TeachingCaseResCaseType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsTeachingCaseResCaseTypeEN.con_IdTeachingCaseResCaseType)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsTeachingCaseResCaseTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsTeachingCaseResCaseTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdTeachingCaseResCaseType = strInValue;
if (IsNullOrEmpty(strIdTeachingCaseResCaseType) == true)
{
return "";
}
const objTeachingCaseResCaseType = await TeachingCaseResCaseType_GetObjByIdTeachingCaseResCaseTypeCache(strIdTeachingCaseResCaseType );
if (objTeachingCaseResCaseType == null) return "";
if (objTeachingCaseResCaseType.GetFldValue(strOutFldName) == null) return "";
return objTeachingCaseResCaseType.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function TeachingCaseResCaseType_SortFunDefa(a:clsTeachingCaseResCaseTypeEN , b:clsTeachingCaseResCaseTypeEN): number 
{
return a.idTeachingCaseResCaseType.localeCompare(b.idTeachingCaseResCaseType);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function TeachingCaseResCaseType_SortFunDefa2Fld(a:clsTeachingCaseResCaseTypeEN , b:clsTeachingCaseResCaseTypeEN): number 
{
if (a.teachingCaseResCaseTypeId == b.teachingCaseResCaseTypeId) return a.teachingCaseResCaseTypeName.localeCompare(b.teachingCaseResCaseTypeName);
else return a.teachingCaseResCaseTypeId.localeCompare(b.teachingCaseResCaseTypeId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function TeachingCaseResCaseType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsTeachingCaseResCaseTypeEN.con_IdTeachingCaseResCaseType:
return (a: clsTeachingCaseResCaseTypeEN, b: clsTeachingCaseResCaseTypeEN) => {
return a.idTeachingCaseResCaseType.localeCompare(b.idTeachingCaseResCaseType);
}
case clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeId:
return (a: clsTeachingCaseResCaseTypeEN, b: clsTeachingCaseResCaseTypeEN) => {
return a.teachingCaseResCaseTypeId.localeCompare(b.teachingCaseResCaseTypeId);
}
case clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeName:
return (a: clsTeachingCaseResCaseTypeEN, b: clsTeachingCaseResCaseTypeEN) => {
return a.teachingCaseResCaseTypeName.localeCompare(b.teachingCaseResCaseTypeName);
}
case clsTeachingCaseResCaseTypeEN.con_Memo:
return (a: clsTeachingCaseResCaseTypeEN, b: clsTeachingCaseResCaseTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeachingCaseResCaseType]中不存在!(in ${ teachingCaseResCaseType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsTeachingCaseResCaseTypeEN.con_IdTeachingCaseResCaseType:
return (a: clsTeachingCaseResCaseTypeEN, b: clsTeachingCaseResCaseTypeEN) => {
return b.idTeachingCaseResCaseType.localeCompare(a.idTeachingCaseResCaseType);
}
case clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeId:
return (a: clsTeachingCaseResCaseTypeEN, b: clsTeachingCaseResCaseTypeEN) => {
return b.teachingCaseResCaseTypeId.localeCompare(a.teachingCaseResCaseTypeId);
}
case clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeName:
return (a: clsTeachingCaseResCaseTypeEN, b: clsTeachingCaseResCaseTypeEN) => {
return b.teachingCaseResCaseTypeName.localeCompare(a.teachingCaseResCaseTypeName);
}
case clsTeachingCaseResCaseTypeEN.con_Memo:
return (a: clsTeachingCaseResCaseTypeEN, b: clsTeachingCaseResCaseTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeachingCaseResCaseType]中不存在!(in ${ teachingCaseResCaseType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function TeachingCaseResCaseType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsTeachingCaseResCaseTypeEN.con_IdTeachingCaseResCaseType:
return (obj: clsTeachingCaseResCaseTypeEN) => {
return obj.idTeachingCaseResCaseType === value;
}
case clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeId:
return (obj: clsTeachingCaseResCaseTypeEN) => {
return obj.teachingCaseResCaseTypeId === value;
}
case clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeName:
return (obj: clsTeachingCaseResCaseTypeEN) => {
return obj.teachingCaseResCaseTypeName === value;
}
case clsTeachingCaseResCaseTypeEN.con_Memo:
return (obj: clsTeachingCaseResCaseTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeachingCaseResCaseType]中不存在!(in ${ teachingCaseResCaseType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function TeachingCaseResCaseType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsTeachingCaseResCaseTypeEN.con_IdTeachingCaseResCaseType)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrTeachingCaseResCaseType = await TeachingCaseResCaseType_GetObjLstCache();
if (arrTeachingCaseResCaseType == null) return [];
let arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrTeachingCaseResCaseTypeSel.length == 0) return [];
return arrTeachingCaseResCaseTypeSel.map(x=>x.idTeachingCaseResCaseType);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function TeachingCaseResCaseType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function TeachingCaseResCaseType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCaseType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCaseType_GetFirstObjAsync(strWhereCond: string): Promise<clsTeachingCaseResCaseTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const objTeachingCaseResCaseType = TeachingCaseResCaseType_GetObjFromJsonObj(returnObj);
return objTeachingCaseResCaseType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCaseType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsTeachingCaseResCaseTypeEN._CurrTabName;
if (IsNullOrEmpty(clsTeachingCaseResCaseTypeEN.WhereFormat) == false)
{
strWhereCond = clsTeachingCaseResCaseTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsTeachingCaseResCaseTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsTeachingCaseResCaseTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrTeachingCaseResCaseTypeExObjLstCache: Array<clsTeachingCaseResCaseTypeEN> = CacheHelper.Get(strKey);
const arrTeachingCaseResCaseTypeObjLstT = TeachingCaseResCaseType_GetObjLstByJSONObjLst(arrTeachingCaseResCaseTypeExObjLstCache);
return arrTeachingCaseResCaseTypeObjLstT;
}
try
{
const arrTeachingCaseResCaseTypeExObjLst = await TeachingCaseResCaseType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrTeachingCaseResCaseTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrTeachingCaseResCaseTypeExObjLst.length);
console.log(strInfo);
return arrTeachingCaseResCaseTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function TeachingCaseResCaseType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsTeachingCaseResCaseTypeEN._CurrTabName;
if (IsNullOrEmpty(clsTeachingCaseResCaseTypeEN.WhereFormat) == false)
{
strWhereCond = clsTeachingCaseResCaseTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsTeachingCaseResCaseTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsTeachingCaseResCaseTypeEN.CacheAddiCondition);
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
const arrTeachingCaseResCaseTypeExObjLstCache: Array<clsTeachingCaseResCaseTypeEN> = JSON.parse(strTempObjLst);
const arrTeachingCaseResCaseTypeObjLstT = TeachingCaseResCaseType_GetObjLstByJSONObjLst(arrTeachingCaseResCaseTypeExObjLstCache);
return arrTeachingCaseResCaseTypeObjLstT;
}
try
{
const arrTeachingCaseResCaseTypeExObjLst = await TeachingCaseResCaseType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrTeachingCaseResCaseTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrTeachingCaseResCaseTypeExObjLst.length);
console.log(strInfo);
return arrTeachingCaseResCaseTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function TeachingCaseResCaseType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsTeachingCaseResCaseTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrTeachingCaseResCaseTypeObjLstCache: Array<clsTeachingCaseResCaseTypeEN> = JSON.parse(strTempObjLst);
return arrTeachingCaseResCaseTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function TeachingCaseResCaseType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsTeachingCaseResCaseTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingCaseResCaseType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCaseType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsTeachingCaseResCaseTypeEN._CurrTabName;
if (IsNullOrEmpty(clsTeachingCaseResCaseTypeEN.WhereFormat) == false)
{
strWhereCond = clsTeachingCaseResCaseTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsTeachingCaseResCaseTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsTeachingCaseResCaseTypeEN.CacheAddiCondition);
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
const arrTeachingCaseResCaseTypeExObjLstCache: Array<clsTeachingCaseResCaseTypeEN> = JSON.parse(strTempObjLst);
const arrTeachingCaseResCaseTypeObjLstT = TeachingCaseResCaseType_GetObjLstByJSONObjLst(arrTeachingCaseResCaseTypeExObjLstCache);
return arrTeachingCaseResCaseTypeObjLstT;
}
try
{
const arrTeachingCaseResCaseTypeExObjLst = await TeachingCaseResCaseType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrTeachingCaseResCaseTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrTeachingCaseResCaseTypeExObjLst.length);
console.log(strInfo);
return arrTeachingCaseResCaseTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function TeachingCaseResCaseType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsTeachingCaseResCaseTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrTeachingCaseResCaseTypeObjLstCache: Array<clsTeachingCaseResCaseTypeEN> = JSON.parse(strTempObjLst);
return arrTeachingCaseResCaseTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function TeachingCaseResCaseType_GetObjLstCache(): Promise<Array<clsTeachingCaseResCaseTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrTeachingCaseResCaseTypeObjLstCache;
switch (clsTeachingCaseResCaseTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstClientCache();
break;
default:
arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstClientCache();
break;
}
return arrTeachingCaseResCaseTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function TeachingCaseResCaseType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrTeachingCaseResCaseTypeObjLstCache;
switch (clsTeachingCaseResCaseTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrTeachingCaseResCaseTypeObjLstCache = null;
break;
default:
arrTeachingCaseResCaseTypeObjLstCache = null;
break;
}
return arrTeachingCaseResCaseTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdTeachingCaseResCaseTypeCond:条件对象
 * @returns 对象列表子集
*/
export  async function TeachingCaseResCaseType_GetSubObjLstCache(objTeachingCaseResCaseTypeCond: clsTeachingCaseResCaseTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstCache();
let arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeObjLstCache;
if (objTeachingCaseResCaseTypeCond.sfFldComparisonOp == null || objTeachingCaseResCaseTypeCond.sfFldComparisonOp == "") return arrTeachingCaseResCaseTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objTeachingCaseResCaseTypeCond.sfFldComparisonOp);
//console.log("clsTeachingCaseResCaseTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objTeachingCaseResCaseTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objTeachingCaseResCaseTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrTeachingCaseResCaseTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objTeachingCaseResCaseTypeCond), teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsTeachingCaseResCaseTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdTeachingCaseResCaseType:关键字列表
 * @returns 对象列表
 **/
export  async function TeachingCaseResCaseType_GetObjLstByIdTeachingCaseResCaseTypeLstAsync(arrIdTeachingCaseResCaseType: Array<string>): Promise<Array<clsTeachingCaseResCaseTypeEN>>  
{
const strThisFuncName = "GetObjLstByIdTeachingCaseResCaseTypeLstAsync";
const strAction = "GetObjLstByIdTeachingCaseResCaseTypeLst";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdTeachingCaseResCaseType, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingCaseResCaseType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * @param arrstrIdTeachingCaseResCaseTypeLst:关键字列表
 * @returns 对象列表
*/
export  async function TeachingCaseResCaseType_GetObjLstByIdTeachingCaseResCaseTypeLstCache(arrIdTeachingCaseResCaseTypeLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdTeachingCaseResCaseTypeLstCache";
try
{
const arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstCache();
const arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeObjLstCache.filter(x => arrIdTeachingCaseResCaseTypeLst.indexOf(x.idTeachingCaseResCaseType)>-1);
return arrTeachingCaseResCaseTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdTeachingCaseResCaseTypeLst.join(","), teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCaseType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsTeachingCaseResCaseTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingCaseResCaseType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCaseType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsTeachingCaseResCaseTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingCaseResCaseType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCaseType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsTeachingCaseResCaseTypeEN>();
const arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstCache();
if (arrTeachingCaseResCaseTypeObjLstCache.length == 0) return arrTeachingCaseResCaseTypeObjLstCache;
let arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objTeachingCaseResCaseTypeCond = new clsTeachingCaseResCaseTypeEN();
ObjectAssign(objTeachingCaseResCaseTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsTeachingCaseResCaseTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objTeachingCaseResCaseTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrTeachingCaseResCaseTypeSel.length == 0) return arrTeachingCaseResCaseTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.sort(TeachingCaseResCaseType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.sort(objPagerPara.sortFun);
}
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.slice(intStart, intEnd);     
return arrTeachingCaseResCaseTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsTeachingCaseResCaseTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function TeachingCaseResCaseType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsTeachingCaseResCaseTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsTeachingCaseResCaseTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingCaseResCaseType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * @param strIdTeachingCaseResCaseType:关键字
 * @returns 获取删除的结果
 **/
export  async function TeachingCaseResCaseType_DelRecordAsync(strIdTeachingCaseResCaseType: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdTeachingCaseResCaseType);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * @param arrIdTeachingCaseResCaseType:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function TeachingCaseResCaseType_DelTeachingCaseResCaseTypesAsync(arrIdTeachingCaseResCaseType: Array<string>): Promise<number> 
{
const strThisFuncName = "DelTeachingCaseResCaseTypesAsync";
const strAction = "DelTeachingCaseResCaseTypes";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdTeachingCaseResCaseType, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCaseType_DelTeachingCaseResCaseTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelTeachingCaseResCaseTypesByCondAsync";
const strAction = "DelTeachingCaseResCaseTypesByCond";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * @param objTeachingCaseResCaseTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function TeachingCaseResCaseType_AddNewRecordAsync(objTeachingCaseResCaseTypeEN: clsTeachingCaseResCaseTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType === null || objTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objTeachingCaseResCaseTypeEN);
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * @param objTeachingCaseResCaseTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function TeachingCaseResCaseType_AddNewRecordWithMaxIdAsync(objTeachingCaseResCaseTypeEN: clsTeachingCaseResCaseTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objTeachingCaseResCaseTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function TeachingCaseResCaseType_AddNewRecordWithReturnKeyAsync(objTeachingCaseResCaseTypeEN: clsTeachingCaseResCaseTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * @param objTeachingCaseResCaseTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function TeachingCaseResCaseType_UpdateRecordAsync(objTeachingCaseResCaseTypeEN: clsTeachingCaseResCaseTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objTeachingCaseResCaseTypeEN.sfUpdFldSetStr === undefined || objTeachingCaseResCaseTypeEN.sfUpdFldSetStr === null || objTeachingCaseResCaseTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * @param objTeachingCaseResCaseTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function TeachingCaseResCaseType_EditRecordExAsync(objTeachingCaseResCaseTypeEN: clsTeachingCaseResCaseTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objTeachingCaseResCaseTypeEN.sfUpdFldSetStr === undefined || objTeachingCaseResCaseTypeEN.sfUpdFldSetStr === null || objTeachingCaseResCaseTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * @param objTeachingCaseResCaseTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function TeachingCaseResCaseType_UpdateWithConditionAsync(objTeachingCaseResCaseTypeEN: clsTeachingCaseResCaseTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objTeachingCaseResCaseTypeEN.sfUpdFldSetStr === undefined || objTeachingCaseResCaseTypeEN.sfUpdFldSetStr === null || objTeachingCaseResCaseTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);
objTeachingCaseResCaseTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * @param objstrIdTeachingCaseResCaseTypeCond:条件对象
 * @returns 对象列表子集
*/
export  async function TeachingCaseResCaseType_IsExistRecordCache(objTeachingCaseResCaseTypeCond: clsTeachingCaseResCaseTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstCache();
if (arrTeachingCaseResCaseTypeObjLstCache == null) return false;
let arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeObjLstCache;
if (objTeachingCaseResCaseTypeCond.sfFldComparisonOp == null || objTeachingCaseResCaseTypeCond.sfFldComparisonOp == "") return arrTeachingCaseResCaseTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objTeachingCaseResCaseTypeCond.sfFldComparisonOp);
//console.log("clsTeachingCaseResCaseTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objTeachingCaseResCaseTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objTeachingCaseResCaseTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrTeachingCaseResCaseTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objTeachingCaseResCaseTypeCond), teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCaseType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * @param strIdTeachingCaseResCaseType:所给的关键字
 * @returns 对象
*/
export  async function TeachingCaseResCaseType_IsExistCache(strIdTeachingCaseResCaseType:string) {
const strThisFuncName = "IsExistCache";
const arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstCache();
if (arrTeachingCaseResCaseTypeObjLstCache == null) return false;
try
{
const arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeObjLstCache.filter(x => x.idTeachingCaseResCaseType == strIdTeachingCaseResCaseType);
if (arrTeachingCaseResCaseTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdTeachingCaseResCaseType, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdTeachingCaseResCaseType:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function TeachingCaseResCaseType_IsExistAsync(strIdTeachingCaseResCaseType: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeachingCaseResCaseType
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCaseType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
 * @param objTeachingCaseResCaseTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function TeachingCaseResCaseType_GetRecCountByCondCache(objTeachingCaseResCaseTypeCond: clsTeachingCaseResCaseTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrTeachingCaseResCaseTypeObjLstCache = await TeachingCaseResCaseType_GetObjLstCache();
if (arrTeachingCaseResCaseTypeObjLstCache == null) return 0;
let arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeObjLstCache;
if (objTeachingCaseResCaseTypeCond.sfFldComparisonOp == null || objTeachingCaseResCaseTypeCond.sfFldComparisonOp == "") return arrTeachingCaseResCaseTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objTeachingCaseResCaseTypeCond.sfFldComparisonOp);
//console.log("clsTeachingCaseResCaseTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objTeachingCaseResCaseTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objTeachingCaseResCaseTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrTeachingCaseResCaseTypeSel = arrTeachingCaseResCaseTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrTeachingCaseResCaseTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objTeachingCaseResCaseTypeCond), teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCaseType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(teachingCaseResCaseType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCaseType_ConstructorName, strThisFuncName);
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
export  function TeachingCaseResCaseType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function TeachingCaseResCaseType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsTeachingCaseResCaseTypeEN._CurrTabName;
switch (clsTeachingCaseResCaseTypeEN.CacheModeId)
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
clsTeachingCaseResCaseTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function TeachingCaseResCaseType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsTeachingCaseResCaseTypeEN._CurrTabName;
switch (clsTeachingCaseResCaseTypeEN.CacheModeId)
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
clsTeachingCaseResCaseTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function TeachingCaseResCaseType_GetLastRefreshTime():string
{
if (clsTeachingCaseResCaseTypeEN._RefreshTimeLst.length == 0) return "";
return clsTeachingCaseResCaseTypeEN._RefreshTimeLst[clsTeachingCaseResCaseTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function TeachingCaseResCaseType_BindDdl_id_TeachingCaseResCaseTypeInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_id_TeachingCaseResCaseTypeInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_TeachingCaseResCaseTypeInDivCache");
const arrObjLstSel = await TeachingCaseResCaseType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsTeachingCaseResCaseTypeEN.con_IdTeachingCaseResCaseType, clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeName, "教学案例资源案例类型");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function TeachingCaseResCaseType_GetArrTeachingCaseResCaseType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_TeachingCaseResCaseTypeInDivCache");
const arrTeachingCaseResCaseType = new Array<clsTeachingCaseResCaseTypeEN>();
const arrObjLstSel = await TeachingCaseResCaseType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsTeachingCaseResCaseTypeEN();
obj0.idTeachingCaseResCaseType = '0';
obj0.teachingCaseResCaseTypeName = '请选择教学案例资源案例类型...';
arrTeachingCaseResCaseType.push(obj0);
arrObjLstSel.forEach(x => arrTeachingCaseResCaseType.push(x));
return arrTeachingCaseResCaseType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function TeachingCaseResCaseType_CheckPropertyNew(pobjTeachingCaseResCaseTypeEN: clsTeachingCaseResCaseTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学案例资源案例类型Id]不能为空(In 教学案例资源案例类型)!(clsTeachingCaseResCaseTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学案例资源案例类型名称]不能为空(In 教学案例资源案例类型)!(clsTeachingCaseResCaseTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType) == false && GetStrLen(pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType) > 4)
{
 throw new Error(`(errid:Watl000413)字段[教学案例资源类型流水号(idTeachingCaseResCaseType)]的长度不能超过4(In 教学案例资源案例类型(TeachingCaseResCaseType))!值:${pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType}(clsTeachingCaseResCaseTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId) == false && GetStrLen(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[教学案例资源案例类型Id(teachingCaseResCaseTypeId)]的长度不能超过4(In 教学案例资源案例类型(TeachingCaseResCaseType))!值:${pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId}(clsTeachingCaseResCaseTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName) == false && GetStrLen(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[教学案例资源案例类型名称(teachingCaseResCaseTypeName)]的长度不能超过30(In 教学案例资源案例类型(TeachingCaseResCaseType))!值:${pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName}(clsTeachingCaseResCaseTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.memo) == false && GetStrLen(pobjTeachingCaseResCaseTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教学案例资源案例类型(TeachingCaseResCaseType))!值:${pobjTeachingCaseResCaseTypeEN.memo}(clsTeachingCaseResCaseTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType) == false && undefined !== pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType && tzDataType.isString(pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学案例资源类型流水号(idTeachingCaseResCaseType)]的值:[${pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType}], 非法,应该为字符型(In 教学案例资源案例类型(TeachingCaseResCaseType))!(clsTeachingCaseResCaseTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId) == false && undefined !== pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId && tzDataType.isString(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学案例资源案例类型Id(teachingCaseResCaseTypeId)]的值:[${pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId}], 非法,应该为字符型(In 教学案例资源案例类型(TeachingCaseResCaseType))!(clsTeachingCaseResCaseTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName) == false && undefined !== pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName && tzDataType.isString(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学案例资源案例类型名称(teachingCaseResCaseTypeName)]的值:[${pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName}], 非法,应该为字符型(In 教学案例资源案例类型(TeachingCaseResCaseType))!(clsTeachingCaseResCaseTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.memo) == false && undefined !== pobjTeachingCaseResCaseTypeEN.memo && tzDataType.isString(pobjTeachingCaseResCaseTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjTeachingCaseResCaseTypeEN.memo}], 非法,应该为字符型(In 教学案例资源案例类型(TeachingCaseResCaseType))!(clsTeachingCaseResCaseTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function TeachingCaseResCaseType_CheckProperty4Update(pobjTeachingCaseResCaseTypeEN: clsTeachingCaseResCaseTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType) == false && GetStrLen(pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType) > 4)
{
 throw new Error(`(errid:Watl000416)字段[教学案例资源类型流水号(idTeachingCaseResCaseType)]的长度不能超过4(In 教学案例资源案例类型(TeachingCaseResCaseType))!值:${pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType}(clsTeachingCaseResCaseTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId) == false && GetStrLen(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[教学案例资源案例类型Id(teachingCaseResCaseTypeId)]的长度不能超过4(In 教学案例资源案例类型(TeachingCaseResCaseType))!值:${pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId}(clsTeachingCaseResCaseTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName) == false && GetStrLen(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[教学案例资源案例类型名称(teachingCaseResCaseTypeName)]的长度不能超过30(In 教学案例资源案例类型(TeachingCaseResCaseType))!值:${pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName}(clsTeachingCaseResCaseTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.memo) == false && GetStrLen(pobjTeachingCaseResCaseTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教学案例资源案例类型(TeachingCaseResCaseType))!值:${pobjTeachingCaseResCaseTypeEN.memo}(clsTeachingCaseResCaseTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType) == false && undefined !== pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType && tzDataType.isString(pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学案例资源类型流水号(idTeachingCaseResCaseType)]的值:[${pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType}], 非法,应该为字符型(In 教学案例资源案例类型(TeachingCaseResCaseType))!(clsTeachingCaseResCaseTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId) == false && undefined !== pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId && tzDataType.isString(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学案例资源案例类型Id(teachingCaseResCaseTypeId)]的值:[${pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeId}], 非法,应该为字符型(In 教学案例资源案例类型(TeachingCaseResCaseType))!(clsTeachingCaseResCaseTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName) == false && undefined !== pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName && tzDataType.isString(pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学案例资源案例类型名称(teachingCaseResCaseTypeName)]的值:[${pobjTeachingCaseResCaseTypeEN.teachingCaseResCaseTypeName}], 非法,应该为字符型(In 教学案例资源案例类型(TeachingCaseResCaseType))!(clsTeachingCaseResCaseTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.memo) == false && undefined !== pobjTeachingCaseResCaseTypeEN.memo && tzDataType.isString(pobjTeachingCaseResCaseTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjTeachingCaseResCaseTypeEN.memo}], 非法,应该为字符型(In 教学案例资源案例类型(TeachingCaseResCaseType))!(clsTeachingCaseResCaseTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjTeachingCaseResCaseTypeEN.idTeachingCaseResCaseType) === true )
{
 throw new Error(`(errid:Watl000064)字段[教学案例资源类型流水号]不能为空(In 教学案例资源案例类型)!(clsTeachingCaseResCaseTypeBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function TeachingCaseResCaseType_GetJSONStrByObj (pobjTeachingCaseResCaseTypeEN: clsTeachingCaseResCaseTypeEN): string
{
pobjTeachingCaseResCaseTypeEN.sfUpdFldSetStr = pobjTeachingCaseResCaseTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjTeachingCaseResCaseTypeEN);
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
 * 日期:2024-12-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function TeachingCaseResCaseType_GetObjLstByJSONStr (strJSON: string): Array<clsTeachingCaseResCaseTypeEN>
{
let arrTeachingCaseResCaseTypeObjLst = new Array<clsTeachingCaseResCaseTypeEN>();
if (strJSON === "")
{
return arrTeachingCaseResCaseTypeObjLst;
}
try
{
arrTeachingCaseResCaseTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrTeachingCaseResCaseTypeObjLst;
}
return arrTeachingCaseResCaseTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTeachingCaseResCaseTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function TeachingCaseResCaseType_GetObjLstByJSONObjLst (arrTeachingCaseResCaseTypeObjLstS: Array<clsTeachingCaseResCaseTypeEN>): Array<clsTeachingCaseResCaseTypeEN>
{
const arrTeachingCaseResCaseTypeObjLst = new Array<clsTeachingCaseResCaseTypeEN>();
for (const objInFor of arrTeachingCaseResCaseTypeObjLstS) {
const obj1 = TeachingCaseResCaseType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrTeachingCaseResCaseTypeObjLst.push(obj1);
}
return arrTeachingCaseResCaseTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function TeachingCaseResCaseType_GetObjByJSONStr (strJSON: string): clsTeachingCaseResCaseTypeEN
{
let pobjTeachingCaseResCaseTypeEN = new clsTeachingCaseResCaseTypeEN();
if (strJSON === "")
{
return pobjTeachingCaseResCaseTypeEN;
}
try
{
pobjTeachingCaseResCaseTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjTeachingCaseResCaseTypeEN;
}
return pobjTeachingCaseResCaseTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function TeachingCaseResCaseType_GetCombineCondition(objTeachingCaseResCaseTypeCond: clsTeachingCaseResCaseTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseTypeCond.dicFldComparisonOp, clsTeachingCaseResCaseTypeEN.con_IdTeachingCaseResCaseType) == true)
{
const strComparisonOpIdTeachingCaseResCaseType:string = objTeachingCaseResCaseTypeCond.dicFldComparisonOp[clsTeachingCaseResCaseTypeEN.con_IdTeachingCaseResCaseType];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseTypeEN.con_IdTeachingCaseResCaseType, objTeachingCaseResCaseTypeCond.idTeachingCaseResCaseType, strComparisonOpIdTeachingCaseResCaseType);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseTypeCond.dicFldComparisonOp, clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeId) == true)
{
const strComparisonOpTeachingCaseResCaseTypeId:string = objTeachingCaseResCaseTypeCond.dicFldComparisonOp[clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeId, objTeachingCaseResCaseTypeCond.teachingCaseResCaseTypeId, strComparisonOpTeachingCaseResCaseTypeId);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseTypeCond.dicFldComparisonOp, clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeName) == true)
{
const strComparisonOpTeachingCaseResCaseTypeName:string = objTeachingCaseResCaseTypeCond.dicFldComparisonOp[clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseTypeEN.con_TeachingCaseResCaseTypeName, objTeachingCaseResCaseTypeCond.teachingCaseResCaseTypeName, strComparisonOpTeachingCaseResCaseTypeName);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseTypeCond.dicFldComparisonOp, clsTeachingCaseResCaseTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objTeachingCaseResCaseTypeCond.dicFldComparisonOp[clsTeachingCaseResCaseTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseTypeEN.con_Memo, objTeachingCaseResCaseTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objTeachingCaseResCaseTypeENS:源对象
 * @param objTeachingCaseResCaseTypeENT:目标对象
*/
export  function TeachingCaseResCaseType_CopyObjTo(objTeachingCaseResCaseTypeENS: clsTeachingCaseResCaseTypeEN , objTeachingCaseResCaseTypeENT: clsTeachingCaseResCaseTypeEN ): void 
{
objTeachingCaseResCaseTypeENT.idTeachingCaseResCaseType = objTeachingCaseResCaseTypeENS.idTeachingCaseResCaseType; //教学案例资源类型流水号
objTeachingCaseResCaseTypeENT.teachingCaseResCaseTypeId = objTeachingCaseResCaseTypeENS.teachingCaseResCaseTypeId; //教学案例资源案例类型Id
objTeachingCaseResCaseTypeENT.teachingCaseResCaseTypeName = objTeachingCaseResCaseTypeENS.teachingCaseResCaseTypeName; //教学案例资源案例类型名称
objTeachingCaseResCaseTypeENT.memo = objTeachingCaseResCaseTypeENS.memo; //备注
objTeachingCaseResCaseTypeENT.sfUpdFldSetStr = objTeachingCaseResCaseTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTeachingCaseResCaseTypeENS:源对象
 * @param objTeachingCaseResCaseTypeENT:目标对象
*/
export  function TeachingCaseResCaseType_GetObjFromJsonObj(objTeachingCaseResCaseTypeENS: clsTeachingCaseResCaseTypeEN): clsTeachingCaseResCaseTypeEN 
{
 const objTeachingCaseResCaseTypeENT: clsTeachingCaseResCaseTypeEN = new clsTeachingCaseResCaseTypeEN();
ObjectAssign(objTeachingCaseResCaseTypeENT, objTeachingCaseResCaseTypeENS);
 return objTeachingCaseResCaseTypeENT;
}