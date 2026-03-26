
 /**
 * 类名:clsge_OperationTypeWApi
 * 表名:ge_OperationType(01120911)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:00
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 操作类型(ge_OperationType)
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
import { clsge_OperationTypeEN } from "@/ts/L0Entity/GameLearn/clsge_OperationTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_OperationType_Controller = "ge_OperationTypeApi";
 export const ge_OperationType_ConstructorName = "ge_OperationType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strOperationTypeId:关键字
 * @returns 对象
 **/
export  async function ge_OperationType_GetObjByOperationTypeIdAsync(strOperationTypeId: string): Promise<clsge_OperationTypeEN|null>  
{
const strThisFuncName = "GetObjByOperationTypeIdAsync";

if (IsNullOrEmpty(strOperationTypeId) == true)
{
  const strMsg = Format("参数:[strOperationTypeId]不能为空!(In clsge_OperationTypeWApi.GetObjByOperationTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strOperationTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strOperationTypeId]的长度:[{0}]不正确!(clsge_OperationTypeWApi.GetObjByOperationTypeIdAsync)", strOperationTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByOperationTypeId";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strOperationTypeId,
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
const objge_OperationType = ge_OperationType_GetObjFromJsonObj(returnObj);
return objge_OperationType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param strOperationTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_OperationType_GetObjByOperationTypeIdlocalStorage(strOperationTypeId: string) {
const strThisFuncName = "GetObjByOperationTypeIdlocalStorage";

if (IsNullOrEmpty(strOperationTypeId) == true)
{
  const strMsg = Format("参数:[strOperationTypeId]不能为空!(In clsge_OperationTypeWApi.GetObjByOperationTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strOperationTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strOperationTypeId]的长度:[{0}]不正确!(clsge_OperationTypeWApi.GetObjByOperationTypeIdlocalStorage)", strOperationTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_OperationTypeEN._CurrTabName, strOperationTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_OperationTypeCache: clsge_OperationTypeEN = JSON.parse(strTempObj);
return objge_OperationTypeCache;
}
try
{
const objge_OperationType = await ge_OperationType_GetObjByOperationTypeIdAsync(strOperationTypeId);
if (objge_OperationType != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_OperationType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_OperationType;
}
return objge_OperationType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strOperationTypeId, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strOperationTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_OperationType_GetObjByOperationTypeIdCache(strOperationTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByOperationTypeIdCache";

if (IsNullOrEmpty(strOperationTypeId) == true)
{
  const strMsg = Format("参数:[strOperationTypeId]不能为空!(In clsge_OperationTypeWApi.GetObjByOperationTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strOperationTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strOperationTypeId]的长度:[{0}]不正确!(clsge_OperationTypeWApi.GetObjByOperationTypeIdCache)", strOperationTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstCache();
try
{
const arrge_OperationTypeSel = arrge_OperationTypeObjLstCache.filter(x => 
 x.operationTypeId == strOperationTypeId );
let objge_OperationType: clsge_OperationTypeEN;
if (arrge_OperationTypeSel.length > 0)
{
objge_OperationType = arrge_OperationTypeSel[0];
return objge_OperationType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_OperationTypeConst = await ge_OperationType_GetObjByOperationTypeIdAsync(strOperationTypeId);
if (objge_OperationTypeConst != null)
{
ge_OperationType_ReFreshThisCache();
return objge_OperationTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strOperationTypeId, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_OperationType:所给的对象
 * @returns 对象
*/
export  async function ge_OperationType_UpdateObjInLstCache(objge_OperationType: clsge_OperationTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstCache();
const obj = arrge_OperationTypeObjLstCache.find(x => x.operationTypeId == objge_OperationType.operationTypeId && x.operationTypeName == objge_OperationType.operationTypeName);
if (obj != null)
{
objge_OperationType.operationTypeId = obj.operationTypeId;
ObjectAssign( obj, objge_OperationType);
}
else
{
arrge_OperationTypeObjLstCache.push(objge_OperationType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_OperationType_ConstructorName, strThisFuncName);
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
export  function ge_OperationType_SortFunDefa(a:clsge_OperationTypeEN , b:clsge_OperationTypeEN): number 
{
return a.operationTypeId.localeCompare(b.operationTypeId);
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
export  function ge_OperationType_SortFunDefa2Fld(a:clsge_OperationTypeEN , b:clsge_OperationTypeEN): number 
{
if (a.operationTypeName == b.operationTypeName) return a.operationTypeEnName.localeCompare(b.operationTypeEnName);
else return a.operationTypeName.localeCompare(b.operationTypeName);
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
export  function ge_OperationType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_OperationTypeEN.con_OperationTypeId:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
return a.operationTypeId.localeCompare(b.operationTypeId);
}
case clsge_OperationTypeEN.con_OperationTypeName:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
if (a.operationTypeName == null) return -1;
if (b.operationTypeName == null) return 1;
return a.operationTypeName.localeCompare(b.operationTypeName);
}
case clsge_OperationTypeEN.con_OperationTypeEnName:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
if (a.operationTypeEnName == null) return -1;
if (b.operationTypeEnName == null) return 1;
return a.operationTypeEnName.localeCompare(b.operationTypeEnName);
}
case clsge_OperationTypeEN.con_UpdUser:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_OperationTypeEN.con_UpdDate:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_OperationTypeEN.con_Memo:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_OperationType]中不存在!(in ${ ge_OperationType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_OperationTypeEN.con_OperationTypeId:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
return b.operationTypeId.localeCompare(a.operationTypeId);
}
case clsge_OperationTypeEN.con_OperationTypeName:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
if (b.operationTypeName == null) return -1;
if (a.operationTypeName == null) return 1;
return b.operationTypeName.localeCompare(a.operationTypeName);
}
case clsge_OperationTypeEN.con_OperationTypeEnName:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
if (b.operationTypeEnName == null) return -1;
if (a.operationTypeEnName == null) return 1;
return b.operationTypeEnName.localeCompare(a.operationTypeEnName);
}
case clsge_OperationTypeEN.con_UpdUser:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_OperationTypeEN.con_UpdDate:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_OperationTypeEN.con_Memo:
return (a: clsge_OperationTypeEN, b: clsge_OperationTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_OperationType]中不存在!(in ${ ge_OperationType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strOperationTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_OperationType_GetNameByOperationTypeIdCache(strOperationTypeId: string) {

if (IsNullOrEmpty(strOperationTypeId) == true)
{
  const strMsg = Format("参数:[strOperationTypeId]不能为空!(In clsge_OperationTypeWApi.GetNameByOperationTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strOperationTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strOperationTypeId]的长度:[{0}]不正确!(clsge_OperationTypeWApi.GetNameByOperationTypeIdCache)", strOperationTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstCache();
if (arrge_OperationTypeObjLstCache == null) return "";
try
{
const arrge_OperationTypeSel = arrge_OperationTypeObjLstCache.filter(x => 
 x.operationTypeId == strOperationTypeId );
let objge_OperationType: clsge_OperationTypeEN;
if (arrge_OperationTypeSel.length > 0)
{
objge_OperationType = arrge_OperationTypeSel[0];
return objge_OperationType.operationTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strOperationTypeId);
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
export  async function ge_OperationType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_OperationTypeEN.con_OperationTypeId:
return (obj: clsge_OperationTypeEN) => {
return obj.operationTypeId === value;
}
case clsge_OperationTypeEN.con_OperationTypeName:
return (obj: clsge_OperationTypeEN) => {
return obj.operationTypeName === value;
}
case clsge_OperationTypeEN.con_OperationTypeEnName:
return (obj: clsge_OperationTypeEN) => {
return obj.operationTypeEnName === value;
}
case clsge_OperationTypeEN.con_UpdUser:
return (obj: clsge_OperationTypeEN) => {
return obj.updUser === value;
}
case clsge_OperationTypeEN.con_UpdDate:
return (obj: clsge_OperationTypeEN) => {
return obj.updDate === value;
}
case clsge_OperationTypeEN.con_Memo:
return (obj: clsge_OperationTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_OperationType]中不存在!(in ${ ge_OperationType_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_OperationType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsge_OperationTypeEN.con_OperationTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_OperationTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_OperationTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strOperationTypeId = strInValue;
if (IsNullOrEmpty(strOperationTypeId) == true)
{
return "";
}
const objge_OperationType = await ge_OperationType_GetObjByOperationTypeIdCache(strOperationTypeId );
if (objge_OperationType == null) return "";
if (objge_OperationType.GetFldValue(strOutFldName) == null) return "";
return objge_OperationType.GetFldValue(strOutFldName).toString();
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
export  async function ge_OperationType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsge_OperationTypeEN.con_OperationTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_OperationType = await ge_OperationType_GetObjLstCache();
if (arrge_OperationType == null) return [];
let arrge_OperationTypeSel = arrge_OperationType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_OperationTypeSel.length == 0) return [];
return arrge_OperationTypeSel.map(x=>x.operationTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_OperationType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_GetFirstObjAsync(strWhereCond: string): Promise<clsge_OperationTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const objge_OperationType = ge_OperationType_GetObjFromJsonObj(returnObj);
return objge_OperationType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_OperationTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_OperationTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_OperationTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_OperationTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_OperationTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_OperationTypeExObjLstCache: Array<clsge_OperationTypeEN> = CacheHelper.Get(strKey);
const arrge_OperationTypeObjLstT = ge_OperationType_GetObjLstByJSONObjLst(arrge_OperationTypeExObjLstCache);
return arrge_OperationTypeObjLstT;
}
try
{
const arrge_OperationTypeExObjLst = await ge_OperationType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_OperationTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_OperationTypeExObjLst.length);
console.log(strInfo);
return arrge_OperationTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_OperationType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_OperationTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_OperationTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_OperationTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_OperationTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_OperationTypeEN.CacheAddiCondition);
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
const arrge_OperationTypeExObjLstCache: Array<clsge_OperationTypeEN> = JSON.parse(strTempObjLst);
const arrge_OperationTypeObjLstT = ge_OperationType_GetObjLstByJSONObjLst(arrge_OperationTypeExObjLstCache);
return arrge_OperationTypeObjLstT;
}
try
{
const arrge_OperationTypeExObjLst = await ge_OperationType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_OperationTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_OperationTypeExObjLst.length);
console.log(strInfo);
return arrge_OperationTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_OperationType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_OperationTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_OperationTypeObjLstCache: Array<clsge_OperationTypeEN> = JSON.parse(strTempObjLst);
return arrge_OperationTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_OperationType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_OperationTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_OperationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_OperationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_OperationTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_OperationTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_OperationTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_OperationTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_OperationTypeEN.CacheAddiCondition);
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
const arrge_OperationTypeExObjLstCache: Array<clsge_OperationTypeEN> = JSON.parse(strTempObjLst);
const arrge_OperationTypeObjLstT = ge_OperationType_GetObjLstByJSONObjLst(arrge_OperationTypeExObjLstCache);
return arrge_OperationTypeObjLstT;
}
try
{
const arrge_OperationTypeExObjLst = await ge_OperationType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_OperationTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_OperationTypeExObjLst.length);
console.log(strInfo);
return arrge_OperationTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_OperationType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_OperationTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_OperationTypeObjLstCache: Array<clsge_OperationTypeEN> = JSON.parse(strTempObjLst);
return arrge_OperationTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_OperationType_GetObjLstCache(): Promise<Array<clsge_OperationTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrge_OperationTypeObjLstCache;
switch (clsge_OperationTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstClientCache();
break;
default:
arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstClientCache();
break;
}
return arrge_OperationTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_OperationType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_OperationTypeObjLstCache;
switch (clsge_OperationTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrge_OperationTypeObjLstCache = null;
break;
default:
arrge_OperationTypeObjLstCache = null;
break;
}
return arrge_OperationTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrOperationTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_OperationType_GetSubObjLstCache(objge_OperationTypeCond: clsge_OperationTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstCache();
let arrge_OperationTypeSel = arrge_OperationTypeObjLstCache;
if (objge_OperationTypeCond.sfFldComparisonOp == null || objge_OperationTypeCond.sfFldComparisonOp == "") return arrge_OperationTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_OperationTypeCond.sfFldComparisonOp);
//console.log("clsge_OperationTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_OperationTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_OperationTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_OperationTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_OperationTypeCond), ge_OperationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_OperationTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrOperationTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_OperationType_GetObjLstByOperationTypeIdLstAsync(arrOperationTypeId: Array<string>): Promise<Array<clsge_OperationTypeEN>>  
{
const strThisFuncName = "GetObjLstByOperationTypeIdLstAsync";
const strAction = "GetObjLstByOperationTypeIdLst";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrOperationTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_OperationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_OperationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param arrstrOperationTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_OperationType_GetObjLstByOperationTypeIdLstCache(arrOperationTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByOperationTypeIdLstCache";
try
{
const arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstCache();
const arrge_OperationTypeSel = arrge_OperationTypeObjLstCache.filter(x => arrOperationTypeIdLst.indexOf(x.operationTypeId)>-1);
return arrge_OperationTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrOperationTypeIdLst.join(","), ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_OperationTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_OperationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_OperationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_OperationTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_OperationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_OperationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_OperationTypeEN>();
const arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstCache();
if (arrge_OperationTypeObjLstCache.length == 0) return arrge_OperationTypeObjLstCache;
let arrge_OperationTypeSel = arrge_OperationTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_OperationTypeCond = new clsge_OperationTypeEN();
ObjectAssign(objge_OperationTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_OperationTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_OperationTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_OperationTypeSel.length == 0) return arrge_OperationTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_OperationTypeSel = arrge_OperationTypeSel.sort(ge_OperationType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_OperationTypeSel = arrge_OperationTypeSel.sort(objPagerPara.sortFun);
}
arrge_OperationTypeSel = arrge_OperationTypeSel.slice(intStart, intEnd);     
return arrge_OperationTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_OperationTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_OperationType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_OperationTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_OperationTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_OperationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_OperationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param strOperationTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_OperationType_DelRecordAsync(strOperationTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strOperationTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param arrOperationTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_OperationType_Delge_OperationTypesAsync(arrOperationTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_OperationTypesAsync";
const strAction = "Delge_OperationTypes";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrOperationTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_Delge_OperationTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_OperationTypesByCondAsync";
const strAction = "Delge_OperationTypesByCond";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param objge_OperationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_OperationType_AddNewRecordAsync(objge_OperationTypeEN: clsge_OperationTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objge_OperationTypeEN.operationTypeId === null || objge_OperationTypeEN.operationTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_OperationTypeEN);
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_OperationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param objge_OperationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_OperationType_AddNewRecordWithMaxIdAsync(objge_OperationTypeEN: clsge_OperationTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_OperationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_AddNewObjSave(objge_OperationTypeEN: clsge_OperationTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_OperationType_CheckPropertyNew(objge_OperationTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_OperationType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_OperationType_CheckUniCond4Add(objge_OperationTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const bolIsExist = await ge_OperationType_IsExistAsync(objge_OperationTypeEN.operationTypeId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objge_OperationTypeEN.operationTypeId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await ge_OperationType_AddNewRecordAsync(objge_OperationTypeEN);
if (returnBool == true)
{
ge_OperationType_ReFreshCache();
}
else
{
const strInfo = `添加[操作类型(ge_OperationType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objge_OperationTypeEN.operationTypeId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_OperationType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_OperationType_CheckUniCond4Add(objge_OperationTypeEN: clsge_OperationTypeEN): Promise<boolean>{
const strUniquenessCondition = ge_OperationType_GetUniCondStr(objge_OperationTypeEN);
const bolIsExistCondition = await ge_OperationType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_OperationType_CheckUniCond4Update(objge_OperationTypeEN: clsge_OperationTypeEN): Promise<boolean>{
const strUniquenessCondition = ge_OperationType_GetUniCondStr4Update(objge_OperationTypeEN);
const bolIsExistCondition = await ge_OperationType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_OperationType_UpdateObjSave(objge_OperationTypeEN: clsge_OperationTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_OperationTypeEN.sfUpdFldSetStr = objge_OperationTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_OperationTypeEN.operationTypeId == "" || objge_OperationTypeEN.operationTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_OperationType_CheckProperty4Update(objge_OperationTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_OperationType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_OperationType_CheckUniCond4Update(objge_OperationTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_OperationType_UpdateRecordAsync(objge_OperationTypeEN);
if (returnBool == true)
{
ge_OperationType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_OperationType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_OperationTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_OperationType_AddNewRecordWithReturnKeyAsync(objge_OperationTypeEN: clsge_OperationTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_OperationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param objge_OperationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_OperationType_UpdateRecordAsync(objge_OperationTypeEN: clsge_OperationTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_OperationTypeEN.sfUpdFldSetStr === undefined || objge_OperationTypeEN.sfUpdFldSetStr === null || objge_OperationTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_OperationTypeEN.operationTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_OperationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param objge_OperationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_OperationType_EditRecordExAsync(objge_OperationTypeEN: clsge_OperationTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_OperationTypeEN.sfUpdFldSetStr === undefined || objge_OperationTypeEN.sfUpdFldSetStr === null || objge_OperationTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_OperationTypeEN.operationTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_OperationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param objge_OperationTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_OperationType_UpdateWithConditionAsync(objge_OperationTypeEN: clsge_OperationTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_OperationTypeEN.sfUpdFldSetStr === undefined || objge_OperationTypeEN.sfUpdFldSetStr === null || objge_OperationTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_OperationTypeEN.operationTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);
objge_OperationTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_OperationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param objstrOperationTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_OperationType_IsExistRecordCache(objge_OperationTypeCond: clsge_OperationTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstCache();
if (arrge_OperationTypeObjLstCache == null) return false;
let arrge_OperationTypeSel = arrge_OperationTypeObjLstCache;
if (objge_OperationTypeCond.sfFldComparisonOp == null || objge_OperationTypeCond.sfFldComparisonOp == "") return arrge_OperationTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_OperationTypeCond.sfFldComparisonOp);
//console.log("clsge_OperationTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_OperationTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_OperationTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_OperationTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_OperationTypeCond), ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param strOperationTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_OperationType_IsExistCache(strOperationTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstCache();
if (arrge_OperationTypeObjLstCache == null) return false;
try
{
const arrge_OperationTypeSel = arrge_OperationTypeObjLstCache.filter(x => x.operationTypeId == strOperationTypeId);
if (arrge_OperationTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strOperationTypeId, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strOperationTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_OperationType_IsExistAsync(strOperationTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strOperationTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
 * @param objge_OperationTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_OperationType_GetRecCountByCondCache(objge_OperationTypeCond: clsge_OperationTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_OperationTypeObjLstCache = await ge_OperationType_GetObjLstCache();
if (arrge_OperationTypeObjLstCache == null) return 0;
let arrge_OperationTypeSel = arrge_OperationTypeObjLstCache;
if (objge_OperationTypeCond.sfFldComparisonOp == null || objge_OperationTypeCond.sfFldComparisonOp == "") return arrge_OperationTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_OperationTypeCond.sfFldComparisonOp);
//console.log("clsge_OperationTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_OperationTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_OperationTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_OperationTypeSel = arrge_OperationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_OperationTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_OperationTypeCond), ge_OperationType_ConstructorName, strThisFuncName);
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
export  async function ge_OperationType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_OperationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_OperationType_ConstructorName, strThisFuncName);
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
export  function ge_OperationType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_OperationType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsge_OperationTypeEN._CurrTabName;
switch (clsge_OperationTypeEN.CacheModeId)
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
clsge_OperationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_OperationType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsge_OperationTypeEN._CurrTabName;
switch (clsge_OperationTypeEN.CacheModeId)
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
clsge_OperationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_OperationType_GetLastRefreshTime():string
{
if (clsge_OperationTypeEN._RefreshTimeLst.length == 0) return "";
return clsge_OperationTypeEN._RefreshTimeLst[clsge_OperationTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_OperationType_BindDdl_OperationTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_OperationTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_OperationTypeIdInDivCache");
const arrObjLstSel = await ge_OperationType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_OperationTypeEN.con_OperationTypeId, clsge_OperationTypeEN.con_OperationTypeName, "操作类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_OperationType_GetArrge_OperationType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_OperationTypeIdInDivCache");
const arrge_OperationType = new Array<clsge_OperationTypeEN>();
const arrObjLstSel = await ge_OperationType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsge_OperationTypeEN();
obj0.operationTypeId = '0';
obj0.operationTypeName = '选操作类型...';
arrge_OperationType.push(obj0);
arrObjLstSel.forEach(x => arrge_OperationType.push(x));
return arrge_OperationType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_OperationType_CheckPropertyNew(pobjge_OperationTypeEN: clsge_OperationTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeId) == false && GetStrLen(pobjge_OperationTypeEN.operationTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.operationTypeId}(clsge_OperationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeName) == false && GetStrLen(pobjge_OperationTypeEN.operationTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[操作类型名(operationTypeName)]的长度不能超过50(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.operationTypeName}(clsge_OperationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeEnName) == false && GetStrLen(pobjge_OperationTypeEN.operationTypeEnName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[OperationTypeEnName(operationTypeEnName)]的长度不能超过100(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.operationTypeEnName}(clsge_OperationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.updUser) == false && GetStrLen(pobjge_OperationTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.updUser}(clsge_OperationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.updDate) == false && GetStrLen(pobjge_OperationTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.updDate}(clsge_OperationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.memo) == false && GetStrLen(pobjge_OperationTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.memo}(clsge_OperationTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeId) == false && undefined !== pobjge_OperationTypeEN.operationTypeId && tzDataType.isString(pobjge_OperationTypeEN.operationTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[操作类型ID(operationTypeId)]的值:[${pobjge_OperationTypeEN.operationTypeId}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeName) == false && undefined !== pobjge_OperationTypeEN.operationTypeName && tzDataType.isString(pobjge_OperationTypeEN.operationTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[操作类型名(operationTypeName)]的值:[${pobjge_OperationTypeEN.operationTypeName}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeEnName) == false && undefined !== pobjge_OperationTypeEN.operationTypeEnName && tzDataType.isString(pobjge_OperationTypeEN.operationTypeEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[OperationTypeEnName(operationTypeEnName)]的值:[${pobjge_OperationTypeEN.operationTypeEnName}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.updUser) == false && undefined !== pobjge_OperationTypeEN.updUser && tzDataType.isString(pobjge_OperationTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_OperationTypeEN.updUser}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.updDate) == false && undefined !== pobjge_OperationTypeEN.updDate && tzDataType.isString(pobjge_OperationTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_OperationTypeEN.updDate}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.memo) == false && undefined !== pobjge_OperationTypeEN.memo && tzDataType.isString(pobjge_OperationTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_OperationTypeEN.memo}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_OperationType_CheckProperty4Update(pobjge_OperationTypeEN: clsge_OperationTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeId) == false && GetStrLen(pobjge_OperationTypeEN.operationTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.operationTypeId}(clsge_OperationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeName) == false && GetStrLen(pobjge_OperationTypeEN.operationTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[操作类型名(operationTypeName)]的长度不能超过50(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.operationTypeName}(clsge_OperationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeEnName) == false && GetStrLen(pobjge_OperationTypeEN.operationTypeEnName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[OperationTypeEnName(operationTypeEnName)]的长度不能超过100(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.operationTypeEnName}(clsge_OperationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.updUser) == false && GetStrLen(pobjge_OperationTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.updUser}(clsge_OperationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.updDate) == false && GetStrLen(pobjge_OperationTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.updDate}(clsge_OperationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.memo) == false && GetStrLen(pobjge_OperationTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 操作类型(ge_OperationType))!值:${pobjge_OperationTypeEN.memo}(clsge_OperationTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeId) == false && undefined !== pobjge_OperationTypeEN.operationTypeId && tzDataType.isString(pobjge_OperationTypeEN.operationTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[操作类型ID(operationTypeId)]的值:[${pobjge_OperationTypeEN.operationTypeId}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeName) == false && undefined !== pobjge_OperationTypeEN.operationTypeName && tzDataType.isString(pobjge_OperationTypeEN.operationTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[操作类型名(operationTypeName)]的值:[${pobjge_OperationTypeEN.operationTypeName}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeEnName) == false && undefined !== pobjge_OperationTypeEN.operationTypeEnName && tzDataType.isString(pobjge_OperationTypeEN.operationTypeEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[OperationTypeEnName(operationTypeEnName)]的值:[${pobjge_OperationTypeEN.operationTypeEnName}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.updUser) == false && undefined !== pobjge_OperationTypeEN.updUser && tzDataType.isString(pobjge_OperationTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_OperationTypeEN.updUser}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.updDate) == false && undefined !== pobjge_OperationTypeEN.updDate && tzDataType.isString(pobjge_OperationTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_OperationTypeEN.updDate}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_OperationTypeEN.memo) == false && undefined !== pobjge_OperationTypeEN.memo && tzDataType.isString(pobjge_OperationTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_OperationTypeEN.memo}], 非法,应该为字符型(In 操作类型(ge_OperationType))!(clsge_OperationTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjge_OperationTypeEN.operationTypeId) === true )
{
 throw new Error(`(errid:Watl000064)字段[操作类型ID]不能为空(In 操作类型)!(clsge_OperationTypeBL:CheckProperty4Update)`);
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
export  function ge_OperationType_GetJSONStrByObj (pobjge_OperationTypeEN: clsge_OperationTypeEN): string
{
pobjge_OperationTypeEN.sfUpdFldSetStr = pobjge_OperationTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_OperationTypeEN);
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
export  function ge_OperationType_GetObjLstByJSONStr (strJSON: string): Array<clsge_OperationTypeEN>
{
let arrge_OperationTypeObjLst = new Array<clsge_OperationTypeEN>();
if (strJSON === "")
{
return arrge_OperationTypeObjLst;
}
try
{
arrge_OperationTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_OperationTypeObjLst;
}
return arrge_OperationTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_OperationTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_OperationType_GetObjLstByJSONObjLst (arrge_OperationTypeObjLstS: Array<clsge_OperationTypeEN>): Array<clsge_OperationTypeEN>
{
const arrge_OperationTypeObjLst = new Array<clsge_OperationTypeEN>();
for (const objInFor of arrge_OperationTypeObjLstS) {
const obj1 = ge_OperationType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_OperationTypeObjLst.push(obj1);
}
return arrge_OperationTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_OperationType_GetObjByJSONStr (strJSON: string): clsge_OperationTypeEN
{
let pobjge_OperationTypeEN = new clsge_OperationTypeEN();
if (strJSON === "")
{
return pobjge_OperationTypeEN;
}
try
{
pobjge_OperationTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_OperationTypeEN;
}
return pobjge_OperationTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_OperationType_GetCombineCondition(objge_OperationTypeCond: clsge_OperationTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_OperationTypeCond.dicFldComparisonOp, clsge_OperationTypeEN.con_OperationTypeId) == true)
{
const strComparisonOpOperationTypeId:string = objge_OperationTypeCond.dicFldComparisonOp[clsge_OperationTypeEN.con_OperationTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_OperationTypeEN.con_OperationTypeId, objge_OperationTypeCond.operationTypeId, strComparisonOpOperationTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_OperationTypeCond.dicFldComparisonOp, clsge_OperationTypeEN.con_OperationTypeName) == true)
{
const strComparisonOpOperationTypeName:string = objge_OperationTypeCond.dicFldComparisonOp[clsge_OperationTypeEN.con_OperationTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_OperationTypeEN.con_OperationTypeName, objge_OperationTypeCond.operationTypeName, strComparisonOpOperationTypeName);
}
if (Object.prototype.hasOwnProperty.call(objge_OperationTypeCond.dicFldComparisonOp, clsge_OperationTypeEN.con_OperationTypeEnName) == true)
{
const strComparisonOpOperationTypeEnName:string = objge_OperationTypeCond.dicFldComparisonOp[clsge_OperationTypeEN.con_OperationTypeEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_OperationTypeEN.con_OperationTypeEnName, objge_OperationTypeCond.operationTypeEnName, strComparisonOpOperationTypeEnName);
}
if (Object.prototype.hasOwnProperty.call(objge_OperationTypeCond.dicFldComparisonOp, clsge_OperationTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_OperationTypeCond.dicFldComparisonOp[clsge_OperationTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_OperationTypeEN.con_UpdUser, objge_OperationTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_OperationTypeCond.dicFldComparisonOp, clsge_OperationTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_OperationTypeCond.dicFldComparisonOp[clsge_OperationTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_OperationTypeEN.con_UpdDate, objge_OperationTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_OperationTypeCond.dicFldComparisonOp, clsge_OperationTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_OperationTypeCond.dicFldComparisonOp[clsge_OperationTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_OperationTypeEN.con_Memo, objge_OperationTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_OperationType(操作类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strOperationTypeId: 操作类型ID(要求唯一的字段)
 * @param strOperationTypeName: 操作类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_OperationType_GetUniCondStr(objge_OperationTypeEN: clsge_OperationTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and OperationTypeId = '{0}'", objge_OperationTypeEN.operationTypeId);
 strWhereCond +=  Format(" and OperationTypeName = '{0}'", objge_OperationTypeEN.operationTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_OperationType(操作类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strOperationTypeId: 操作类型ID(要求唯一的字段)
 * @param strOperationTypeName: 操作类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_OperationType_GetUniCondStr4Update(objge_OperationTypeEN: clsge_OperationTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and OperationTypeId <> '{0}'", objge_OperationTypeEN.operationTypeId);
 strWhereCond +=  Format(" and OperationTypeId = '{0}'", objge_OperationTypeEN.operationTypeId);
 strWhereCond +=  Format(" and OperationTypeName = '{0}'", objge_OperationTypeEN.operationTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_OperationTypeENS:源对象
 * @param objge_OperationTypeENT:目标对象
*/
export  function ge_OperationType_CopyObjTo(objge_OperationTypeENS: clsge_OperationTypeEN , objge_OperationTypeENT: clsge_OperationTypeEN ): void 
{
objge_OperationTypeENT.operationTypeId = objge_OperationTypeENS.operationTypeId; //操作类型ID
objge_OperationTypeENT.operationTypeName = objge_OperationTypeENS.operationTypeName; //操作类型名
objge_OperationTypeENT.operationTypeEnName = objge_OperationTypeENS.operationTypeEnName; //OperationTypeEnName
objge_OperationTypeENT.updUser = objge_OperationTypeENS.updUser; //修改人
objge_OperationTypeENT.updDate = objge_OperationTypeENS.updDate; //修改日期
objge_OperationTypeENT.memo = objge_OperationTypeENS.memo; //备注
objge_OperationTypeENT.sfUpdFldSetStr = objge_OperationTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_OperationTypeENS:源对象
 * @param objge_OperationTypeENT:目标对象
*/
export  function ge_OperationType_GetObjFromJsonObj(objge_OperationTypeENS: clsge_OperationTypeEN): clsge_OperationTypeEN 
{
 const objge_OperationTypeENT: clsge_OperationTypeEN = new clsge_OperationTypeEN();
ObjectAssign(objge_OperationTypeENT, objge_OperationTypeENS);
 return objge_OperationTypeENT;
}