
 /**
 * 类名:clsge_ControlTypeWApi
 * 表名:ge_ControlType(01120900)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:32
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
 * 控件类型(ge_ControlType)
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
import { clsge_ControlTypeEN } from "@/ts/L0Entity/GameLearn/clsge_ControlTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_ControlType_Controller = "ge_ControlTypeApi";
 export const ge_ControlType_ConstructorName = "ge_ControlType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strControlTypeId:关键字
 * @returns 对象
 **/
export  async function ge_ControlType_GetObjByControlTypeIdAsync(strControlTypeId: string): Promise<clsge_ControlTypeEN|null>  
{
const strThisFuncName = "GetObjByControlTypeIdAsync";

if (IsNullOrEmpty(strControlTypeId) == true)
{
  const strMsg = Format("参数:[strControlTypeId]不能为空!(In clsge_ControlTypeWApi.GetObjByControlTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strControlTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strControlTypeId]的长度:[{0}]不正确!(clsge_ControlTypeWApi.GetObjByControlTypeIdAsync)", strControlTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByControlTypeId";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strControlTypeId,
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
const objge_ControlType = ge_ControlType_GetObjFromJsonObj(returnObj);
return objge_ControlType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param strControlTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ControlType_GetObjByControlTypeIdlocalStorage(strControlTypeId: string) {
const strThisFuncName = "GetObjByControlTypeIdlocalStorage";

if (IsNullOrEmpty(strControlTypeId) == true)
{
  const strMsg = Format("参数:[strControlTypeId]不能为空!(In clsge_ControlTypeWApi.GetObjByControlTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strControlTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strControlTypeId]的长度:[{0}]不正确!(clsge_ControlTypeWApi.GetObjByControlTypeIdlocalStorage)", strControlTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_ControlTypeEN._CurrTabName, strControlTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_ControlTypeCache: clsge_ControlTypeEN = JSON.parse(strTempObj);
return objge_ControlTypeCache;
}
try
{
const objge_ControlType = await ge_ControlType_GetObjByControlTypeIdAsync(strControlTypeId);
if (objge_ControlType != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_ControlType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_ControlType;
}
return objge_ControlType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strControlTypeId, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strControlTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ControlType_GetObjByControlTypeIdCache(strControlTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByControlTypeIdCache";

if (IsNullOrEmpty(strControlTypeId) == true)
{
  const strMsg = Format("参数:[strControlTypeId]不能为空!(In clsge_ControlTypeWApi.GetObjByControlTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strControlTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strControlTypeId]的长度:[{0}]不正确!(clsge_ControlTypeWApi.GetObjByControlTypeIdCache)", strControlTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstCache();
try
{
const arrge_ControlTypeSel = arrge_ControlTypeObjLstCache.filter(x => 
 x.controlTypeId == strControlTypeId );
let objge_ControlType: clsge_ControlTypeEN;
if (arrge_ControlTypeSel.length > 0)
{
objge_ControlType = arrge_ControlTypeSel[0];
return objge_ControlType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_ControlTypeConst = await ge_ControlType_GetObjByControlTypeIdAsync(strControlTypeId);
if (objge_ControlTypeConst != null)
{
ge_ControlType_ReFreshThisCache();
return objge_ControlTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strControlTypeId, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_ControlType:所给的对象
 * @returns 对象
*/
export  async function ge_ControlType_UpdateObjInLstCache(objge_ControlType: clsge_ControlTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstCache();
const obj = arrge_ControlTypeObjLstCache.find(x => x.controlTypeName == objge_ControlType.controlTypeName);
if (obj != null)
{
objge_ControlType.controlTypeId = obj.controlTypeId;
ObjectAssign( obj, objge_ControlType);
}
else
{
arrge_ControlTypeObjLstCache.push(objge_ControlType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_ControlType_ConstructorName, strThisFuncName);
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
export  function ge_ControlType_SortFunDefa(a:clsge_ControlTypeEN , b:clsge_ControlTypeEN): number 
{
return a.controlTypeId.localeCompare(b.controlTypeId);
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
export  function ge_ControlType_SortFunDefa2Fld(a:clsge_ControlTypeEN , b:clsge_ControlTypeEN): number 
{
if (a.controlTypeName == b.controlTypeName) return a.controlTypeEnName.localeCompare(b.controlTypeEnName);
else return a.controlTypeName.localeCompare(b.controlTypeName);
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
export  function ge_ControlType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_ControlTypeEN.con_ControlTypeId:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
return a.controlTypeId.localeCompare(b.controlTypeId);
}
case clsge_ControlTypeEN.con_ControlTypeName:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
if (a.controlTypeName == null) return -1;
if (b.controlTypeName == null) return 1;
return a.controlTypeName.localeCompare(b.controlTypeName);
}
case clsge_ControlTypeEN.con_ControlTypeEnName:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
if (a.controlTypeEnName == null) return -1;
if (b.controlTypeEnName == null) return 1;
return a.controlTypeEnName.localeCompare(b.controlTypeEnName);
}
case clsge_ControlTypeEN.con_UpdDate:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_ControlTypeEN.con_UpdUser:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_ControlTypeEN.con_Memo:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ControlType]中不存在!(in ${ ge_ControlType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_ControlTypeEN.con_ControlTypeId:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
return b.controlTypeId.localeCompare(a.controlTypeId);
}
case clsge_ControlTypeEN.con_ControlTypeName:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
if (b.controlTypeName == null) return -1;
if (a.controlTypeName == null) return 1;
return b.controlTypeName.localeCompare(a.controlTypeName);
}
case clsge_ControlTypeEN.con_ControlTypeEnName:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
if (b.controlTypeEnName == null) return -1;
if (a.controlTypeEnName == null) return 1;
return b.controlTypeEnName.localeCompare(a.controlTypeEnName);
}
case clsge_ControlTypeEN.con_UpdDate:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_ControlTypeEN.con_UpdUser:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_ControlTypeEN.con_Memo:
return (a: clsge_ControlTypeEN, b: clsge_ControlTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ControlType]中不存在!(in ${ ge_ControlType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strControlTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ControlType_GetNameByControlTypeIdCache(strControlTypeId: string) {

if (IsNullOrEmpty(strControlTypeId) == true)
{
  const strMsg = Format("参数:[strControlTypeId]不能为空!(In clsge_ControlTypeWApi.GetNameByControlTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strControlTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strControlTypeId]的长度:[{0}]不正确!(clsge_ControlTypeWApi.GetNameByControlTypeIdCache)", strControlTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstCache();
if (arrge_ControlTypeObjLstCache == null) return "";
try
{
const arrge_ControlTypeSel = arrge_ControlTypeObjLstCache.filter(x => 
 x.controlTypeId == strControlTypeId );
let objge_ControlType: clsge_ControlTypeEN;
if (arrge_ControlTypeSel.length > 0)
{
objge_ControlType = arrge_ControlTypeSel[0];
return objge_ControlType.controlTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strControlTypeId);
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
export  async function ge_ControlType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_ControlTypeEN.con_ControlTypeId:
return (obj: clsge_ControlTypeEN) => {
return obj.controlTypeId === value;
}
case clsge_ControlTypeEN.con_ControlTypeName:
return (obj: clsge_ControlTypeEN) => {
return obj.controlTypeName === value;
}
case clsge_ControlTypeEN.con_ControlTypeEnName:
return (obj: clsge_ControlTypeEN) => {
return obj.controlTypeEnName === value;
}
case clsge_ControlTypeEN.con_UpdDate:
return (obj: clsge_ControlTypeEN) => {
return obj.updDate === value;
}
case clsge_ControlTypeEN.con_UpdUser:
return (obj: clsge_ControlTypeEN) => {
return obj.updUser === value;
}
case clsge_ControlTypeEN.con_Memo:
return (obj: clsge_ControlTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ControlType]中不存在!(in ${ ge_ControlType_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_ControlType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsge_ControlTypeEN.con_ControlTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_ControlTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_ControlTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strControlTypeId = strInValue;
if (IsNullOrEmpty(strControlTypeId) == true)
{
return "";
}
const objge_ControlType = await ge_ControlType_GetObjByControlTypeIdCache(strControlTypeId );
if (objge_ControlType == null) return "";
if (objge_ControlType.GetFldValue(strOutFldName) == null) return "";
return objge_ControlType.GetFldValue(strOutFldName).toString();
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
export  async function ge_ControlType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsge_ControlTypeEN.con_ControlTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_ControlType = await ge_ControlType_GetObjLstCache();
if (arrge_ControlType == null) return [];
let arrge_ControlTypeSel = arrge_ControlType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_ControlTypeSel.length == 0) return [];
return arrge_ControlTypeSel.map(x=>x.controlTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_ControlType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_GetFirstObjAsync(strWhereCond: string): Promise<clsge_ControlTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const objge_ControlType = ge_ControlType_GetObjFromJsonObj(returnObj);
return objge_ControlType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_ControlTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_ControlTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_ControlTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_ControlTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ControlTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_ControlTypeExObjLstCache: Array<clsge_ControlTypeEN> = CacheHelper.Get(strKey);
const arrge_ControlTypeObjLstT = ge_ControlType_GetObjLstByJSONObjLst(arrge_ControlTypeExObjLstCache);
return arrge_ControlTypeObjLstT;
}
try
{
const arrge_ControlTypeExObjLst = await ge_ControlType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_ControlTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ControlTypeExObjLst.length);
console.log(strInfo);
return arrge_ControlTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ControlType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_ControlTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_ControlTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_ControlTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_ControlTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ControlTypeEN.CacheAddiCondition);
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
const arrge_ControlTypeExObjLstCache: Array<clsge_ControlTypeEN> = JSON.parse(strTempObjLst);
const arrge_ControlTypeObjLstT = ge_ControlType_GetObjLstByJSONObjLst(arrge_ControlTypeExObjLstCache);
return arrge_ControlTypeObjLstT;
}
try
{
const arrge_ControlTypeExObjLst = await ge_ControlType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_ControlTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ControlTypeExObjLst.length);
console.log(strInfo);
return arrge_ControlTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ControlType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_ControlTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_ControlTypeObjLstCache: Array<clsge_ControlTypeEN> = JSON.parse(strTempObjLst);
return arrge_ControlTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_ControlType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_ControlTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ControlType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ControlType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_ControlTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_ControlTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_ControlTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_ControlTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ControlTypeEN.CacheAddiCondition);
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
const arrge_ControlTypeExObjLstCache: Array<clsge_ControlTypeEN> = JSON.parse(strTempObjLst);
const arrge_ControlTypeObjLstT = ge_ControlType_GetObjLstByJSONObjLst(arrge_ControlTypeExObjLstCache);
return arrge_ControlTypeObjLstT;
}
try
{
const arrge_ControlTypeExObjLst = await ge_ControlType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_ControlTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ControlTypeExObjLst.length);
console.log(strInfo);
return arrge_ControlTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ControlType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_ControlTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_ControlTypeObjLstCache: Array<clsge_ControlTypeEN> = JSON.parse(strTempObjLst);
return arrge_ControlTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ControlType_GetObjLstCache(): Promise<Array<clsge_ControlTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrge_ControlTypeObjLstCache;
switch (clsge_ControlTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstClientCache();
break;
default:
arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstClientCache();
break;
}
return arrge_ControlTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ControlType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_ControlTypeObjLstCache;
switch (clsge_ControlTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrge_ControlTypeObjLstCache = null;
break;
default:
arrge_ControlTypeObjLstCache = null;
break;
}
return arrge_ControlTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrControlTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_ControlType_GetSubObjLstCache(objge_ControlTypeCond: clsge_ControlTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstCache();
let arrge_ControlTypeSel = arrge_ControlTypeObjLstCache;
if (objge_ControlTypeCond.sfFldComparisonOp == null || objge_ControlTypeCond.sfFldComparisonOp == "") return arrge_ControlTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ControlTypeCond.sfFldComparisonOp);
//console.log("clsge_ControlTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ControlTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ControlTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_ControlTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_ControlTypeCond), ge_ControlType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_ControlTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrControlTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_ControlType_GetObjLstByControlTypeIdLstAsync(arrControlTypeId: Array<string>): Promise<Array<clsge_ControlTypeEN>>  
{
const strThisFuncName = "GetObjLstByControlTypeIdLstAsync";
const strAction = "GetObjLstByControlTypeIdLst";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrControlTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ControlType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ControlType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param arrstrControlTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_ControlType_GetObjLstByControlTypeIdLstCache(arrControlTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByControlTypeIdLstCache";
try
{
const arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstCache();
const arrge_ControlTypeSel = arrge_ControlTypeObjLstCache.filter(x => arrControlTypeIdLst.indexOf(x.controlTypeId)>-1);
return arrge_ControlTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrControlTypeIdLst.join(","), ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_ControlTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ControlType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ControlType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_ControlTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ControlType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ControlType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_ControlTypeEN>();
const arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstCache();
if (arrge_ControlTypeObjLstCache.length == 0) return arrge_ControlTypeObjLstCache;
let arrge_ControlTypeSel = arrge_ControlTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_ControlTypeCond = new clsge_ControlTypeEN();
ObjectAssign(objge_ControlTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_ControlTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ControlTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_ControlTypeSel.length == 0) return arrge_ControlTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_ControlTypeSel = arrge_ControlTypeSel.sort(ge_ControlType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_ControlTypeSel = arrge_ControlTypeSel.sort(objPagerPara.sortFun);
}
arrge_ControlTypeSel = arrge_ControlTypeSel.slice(intStart, intEnd);     
return arrge_ControlTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_ControlTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_ControlType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_ControlTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_ControlTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ControlType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ControlType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param strControlTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_ControlType_DelRecordAsync(strControlTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strControlTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param arrControlTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_ControlType_Delge_ControlTypesAsync(arrControlTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_ControlTypesAsync";
const strAction = "Delge_ControlTypes";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrControlTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_Delge_ControlTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_ControlTypesByCondAsync";
const strAction = "Delge_ControlTypesByCond";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param objge_ControlTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ControlType_AddNewRecordAsync(objge_ControlTypeEN: clsge_ControlTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_ControlTypeEN);
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param objge_ControlTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ControlType_AddNewRecordWithMaxIdAsync(objge_ControlTypeEN: clsge_ControlTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_AddNewObjSave(objge_ControlTypeEN: clsge_ControlTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_ControlType_CheckPropertyNew(objge_ControlTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_ControlType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_ControlType_CheckUniCond4Add(objge_ControlTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_ControlType_AddNewRecordWithMaxIdAsync(objge_ControlTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
ge_ControlType_ReFreshCache();
}
else
{
const strInfo = `添加[控件类型(ge_ControlType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_ControlType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_ControlType_CheckUniCond4Add(objge_ControlTypeEN: clsge_ControlTypeEN): Promise<boolean>{
const strUniquenessCondition = ge_ControlType_GetUniCondStr(objge_ControlTypeEN);
const bolIsExistCondition = await ge_ControlType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_ControlType_CheckUniCond4Update(objge_ControlTypeEN: clsge_ControlTypeEN): Promise<boolean>{
const strUniquenessCondition = ge_ControlType_GetUniCondStr4Update(objge_ControlTypeEN);
const bolIsExistCondition = await ge_ControlType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_ControlType_UpdateObjSave(objge_ControlTypeEN: clsge_ControlTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_ControlTypeEN.sfUpdFldSetStr = objge_ControlTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_ControlTypeEN.controlTypeId == "" || objge_ControlTypeEN.controlTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_ControlType_CheckProperty4Update(objge_ControlTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_ControlType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_ControlType_CheckUniCond4Update(objge_ControlTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_ControlType_UpdateRecordAsync(objge_ControlTypeEN);
if (returnBool == true)
{
ge_ControlType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_ControlType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_ControlTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_ControlType_AddNewRecordWithReturnKeyAsync(objge_ControlTypeEN: clsge_ControlTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param objge_ControlTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_ControlType_UpdateRecordAsync(objge_ControlTypeEN: clsge_ControlTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_ControlTypeEN.sfUpdFldSetStr === undefined || objge_ControlTypeEN.sfUpdFldSetStr === null || objge_ControlTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ControlTypeEN.controlTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param objge_ControlTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_ControlType_EditRecordExAsync(objge_ControlTypeEN: clsge_ControlTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_ControlTypeEN.sfUpdFldSetStr === undefined || objge_ControlTypeEN.sfUpdFldSetStr === null || objge_ControlTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ControlTypeEN.controlTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param objge_ControlTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_ControlType_UpdateWithConditionAsync(objge_ControlTypeEN: clsge_ControlTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_ControlTypeEN.sfUpdFldSetStr === undefined || objge_ControlTypeEN.sfUpdFldSetStr === null || objge_ControlTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ControlTypeEN.controlTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);
objge_ControlTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param objstrControlTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_ControlType_IsExistRecordCache(objge_ControlTypeCond: clsge_ControlTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstCache();
if (arrge_ControlTypeObjLstCache == null) return false;
let arrge_ControlTypeSel = arrge_ControlTypeObjLstCache;
if (objge_ControlTypeCond.sfFldComparisonOp == null || objge_ControlTypeCond.sfFldComparisonOp == "") return arrge_ControlTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ControlTypeCond.sfFldComparisonOp);
//console.log("clsge_ControlTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ControlTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ControlTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_ControlTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_ControlTypeCond), ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param strControlTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ControlType_IsExistCache(strControlTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstCache();
if (arrge_ControlTypeObjLstCache == null) return false;
try
{
const arrge_ControlTypeSel = arrge_ControlTypeObjLstCache.filter(x => x.controlTypeId == strControlTypeId);
if (arrge_ControlTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strControlTypeId, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strControlTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_ControlType_IsExistAsync(strControlTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strControlTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
 * @param objge_ControlTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_ControlType_GetRecCountByCondCache(objge_ControlTypeCond: clsge_ControlTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_ControlTypeObjLstCache = await ge_ControlType_GetObjLstCache();
if (arrge_ControlTypeObjLstCache == null) return 0;
let arrge_ControlTypeSel = arrge_ControlTypeObjLstCache;
if (objge_ControlTypeCond.sfFldComparisonOp == null || objge_ControlTypeCond.sfFldComparisonOp == "") return arrge_ControlTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ControlTypeCond.sfFldComparisonOp);
//console.log("clsge_ControlTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ControlTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ControlTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ControlTypeSel = arrge_ControlTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_ControlTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_ControlTypeCond), ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  async function ge_ControlType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_ControlType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlType_ConstructorName, strThisFuncName);
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
export  function ge_ControlType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_ControlType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsge_ControlTypeEN._CurrTabName;
switch (clsge_ControlTypeEN.CacheModeId)
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
clsge_ControlTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_ControlType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsge_ControlTypeEN._CurrTabName;
switch (clsge_ControlTypeEN.CacheModeId)
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
clsge_ControlTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_ControlType_GetLastRefreshTime():string
{
if (clsge_ControlTypeEN._RefreshTimeLst.length == 0) return "";
return clsge_ControlTypeEN._RefreshTimeLst[clsge_ControlTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_ControlType_BindDdl_ControlTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_ControlTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_ControlTypeIdInDivCache");
const arrObjLstSel = await ge_ControlType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_ControlTypeEN.con_ControlTypeId, clsge_ControlTypeEN.con_ControlTypeName, "控件类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_ControlType_GetArrge_ControlType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_ControlTypeIdInDivCache");
const arrge_ControlType = new Array<clsge_ControlTypeEN>();
const arrObjLstSel = await ge_ControlType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsge_ControlTypeEN();
obj0.controlTypeId = '0';
obj0.controlTypeName = '选控件类型...';
arrge_ControlType.push(obj0);
arrObjLstSel.forEach(x => arrge_ControlType.push(x));
return arrge_ControlType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_ControlType_CheckPropertyNew(pobjge_ControlTypeEN: clsge_ControlTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeId) == false && GetStrLen(pobjge_ControlTypeEN.controlTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[控件Id(controlTypeId)]的长度不能超过4(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.controlTypeId}(clsge_ControlTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeName) == false && GetStrLen(pobjge_ControlTypeEN.controlTypeName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[控件名称(controlTypeName)]的长度不能超过100(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.controlTypeName}(clsge_ControlTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeEnName) == false && GetStrLen(pobjge_ControlTypeEN.controlTypeEnName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[控件英文名称(controlTypeEnName)]的长度不能超过100(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.controlTypeEnName}(clsge_ControlTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.updDate) == false && GetStrLen(pobjge_ControlTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.updDate}(clsge_ControlTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.updUser) == false && GetStrLen(pobjge_ControlTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.updUser}(clsge_ControlTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.memo) == false && GetStrLen(pobjge_ControlTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.memo}(clsge_ControlTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeId) == false && undefined !== pobjge_ControlTypeEN.controlTypeId && tzDataType.isString(pobjge_ControlTypeEN.controlTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件Id(controlTypeId)]的值:[${pobjge_ControlTypeEN.controlTypeId}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeName) == false && undefined !== pobjge_ControlTypeEN.controlTypeName && tzDataType.isString(pobjge_ControlTypeEN.controlTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件名称(controlTypeName)]的值:[${pobjge_ControlTypeEN.controlTypeName}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeEnName) == false && undefined !== pobjge_ControlTypeEN.controlTypeEnName && tzDataType.isString(pobjge_ControlTypeEN.controlTypeEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件英文名称(controlTypeEnName)]的值:[${pobjge_ControlTypeEN.controlTypeEnName}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.updDate) == false && undefined !== pobjge_ControlTypeEN.updDate && tzDataType.isString(pobjge_ControlTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_ControlTypeEN.updDate}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.updUser) == false && undefined !== pobjge_ControlTypeEN.updUser && tzDataType.isString(pobjge_ControlTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_ControlTypeEN.updUser}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.memo) == false && undefined !== pobjge_ControlTypeEN.memo && tzDataType.isString(pobjge_ControlTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_ControlTypeEN.memo}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_ControlType_CheckProperty4Update(pobjge_ControlTypeEN: clsge_ControlTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeId) == false && GetStrLen(pobjge_ControlTypeEN.controlTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[控件Id(controlTypeId)]的长度不能超过4(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.controlTypeId}(clsge_ControlTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeName) == false && GetStrLen(pobjge_ControlTypeEN.controlTypeName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[控件名称(controlTypeName)]的长度不能超过100(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.controlTypeName}(clsge_ControlTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeEnName) == false && GetStrLen(pobjge_ControlTypeEN.controlTypeEnName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[控件英文名称(controlTypeEnName)]的长度不能超过100(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.controlTypeEnName}(clsge_ControlTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.updDate) == false && GetStrLen(pobjge_ControlTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.updDate}(clsge_ControlTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.updUser) == false && GetStrLen(pobjge_ControlTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.updUser}(clsge_ControlTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.memo) == false && GetStrLen(pobjge_ControlTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 控件类型(ge_ControlType))!值:${pobjge_ControlTypeEN.memo}(clsge_ControlTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeId) == false && undefined !== pobjge_ControlTypeEN.controlTypeId && tzDataType.isString(pobjge_ControlTypeEN.controlTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件Id(controlTypeId)]的值:[${pobjge_ControlTypeEN.controlTypeId}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeName) == false && undefined !== pobjge_ControlTypeEN.controlTypeName && tzDataType.isString(pobjge_ControlTypeEN.controlTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件名称(controlTypeName)]的值:[${pobjge_ControlTypeEN.controlTypeName}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.controlTypeEnName) == false && undefined !== pobjge_ControlTypeEN.controlTypeEnName && tzDataType.isString(pobjge_ControlTypeEN.controlTypeEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件英文名称(controlTypeEnName)]的值:[${pobjge_ControlTypeEN.controlTypeEnName}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.updDate) == false && undefined !== pobjge_ControlTypeEN.updDate && tzDataType.isString(pobjge_ControlTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_ControlTypeEN.updDate}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.updUser) == false && undefined !== pobjge_ControlTypeEN.updUser && tzDataType.isString(pobjge_ControlTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_ControlTypeEN.updUser}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlTypeEN.memo) == false && undefined !== pobjge_ControlTypeEN.memo && tzDataType.isString(pobjge_ControlTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_ControlTypeEN.memo}], 非法,应该为字符型(In 控件类型(ge_ControlType))!(clsge_ControlTypeBL:CheckProperty4Update)`);
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
export  function ge_ControlType_GetJSONStrByObj (pobjge_ControlTypeEN: clsge_ControlTypeEN): string
{
pobjge_ControlTypeEN.sfUpdFldSetStr = pobjge_ControlTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_ControlTypeEN);
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
export  function ge_ControlType_GetObjLstByJSONStr (strJSON: string): Array<clsge_ControlTypeEN>
{
let arrge_ControlTypeObjLst = new Array<clsge_ControlTypeEN>();
if (strJSON === "")
{
return arrge_ControlTypeObjLst;
}
try
{
arrge_ControlTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_ControlTypeObjLst;
}
return arrge_ControlTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_ControlTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_ControlType_GetObjLstByJSONObjLst (arrge_ControlTypeObjLstS: Array<clsge_ControlTypeEN>): Array<clsge_ControlTypeEN>
{
const arrge_ControlTypeObjLst = new Array<clsge_ControlTypeEN>();
for (const objInFor of arrge_ControlTypeObjLstS) {
const obj1 = ge_ControlType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_ControlTypeObjLst.push(obj1);
}
return arrge_ControlTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_ControlType_GetObjByJSONStr (strJSON: string): clsge_ControlTypeEN
{
let pobjge_ControlTypeEN = new clsge_ControlTypeEN();
if (strJSON === "")
{
return pobjge_ControlTypeEN;
}
try
{
pobjge_ControlTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_ControlTypeEN;
}
return pobjge_ControlTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_ControlType_GetCombineCondition(objge_ControlTypeCond: clsge_ControlTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_ControlTypeCond.dicFldComparisonOp, clsge_ControlTypeEN.con_ControlTypeId) == true)
{
const strComparisonOpControlTypeId:string = objge_ControlTypeCond.dicFldComparisonOp[clsge_ControlTypeEN.con_ControlTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ControlTypeEN.con_ControlTypeId, objge_ControlTypeCond.controlTypeId, strComparisonOpControlTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_ControlTypeCond.dicFldComparisonOp, clsge_ControlTypeEN.con_ControlTypeName) == true)
{
const strComparisonOpControlTypeName:string = objge_ControlTypeCond.dicFldComparisonOp[clsge_ControlTypeEN.con_ControlTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ControlTypeEN.con_ControlTypeName, objge_ControlTypeCond.controlTypeName, strComparisonOpControlTypeName);
}
if (Object.prototype.hasOwnProperty.call(objge_ControlTypeCond.dicFldComparisonOp, clsge_ControlTypeEN.con_ControlTypeEnName) == true)
{
const strComparisonOpControlTypeEnName:string = objge_ControlTypeCond.dicFldComparisonOp[clsge_ControlTypeEN.con_ControlTypeEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ControlTypeEN.con_ControlTypeEnName, objge_ControlTypeCond.controlTypeEnName, strComparisonOpControlTypeEnName);
}
if (Object.prototype.hasOwnProperty.call(objge_ControlTypeCond.dicFldComparisonOp, clsge_ControlTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_ControlTypeCond.dicFldComparisonOp[clsge_ControlTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ControlTypeEN.con_UpdDate, objge_ControlTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_ControlTypeCond.dicFldComparisonOp, clsge_ControlTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_ControlTypeCond.dicFldComparisonOp[clsge_ControlTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ControlTypeEN.con_UpdUser, objge_ControlTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_ControlTypeCond.dicFldComparisonOp, clsge_ControlTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_ControlTypeCond.dicFldComparisonOp[clsge_ControlTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ControlTypeEN.con_Memo, objge_ControlTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_ControlType(控件类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strControlTypeName: 控件名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_ControlType_GetUniCondStr(objge_ControlTypeEN: clsge_ControlTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ControlTypeName = '{0}'", objge_ControlTypeEN.controlTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_ControlType(控件类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strControlTypeName: 控件名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_ControlType_GetUniCondStr4Update(objge_ControlTypeEN: clsge_ControlTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ControlTypeId <> '{0}'", objge_ControlTypeEN.controlTypeId);
 strWhereCond +=  Format(" and ControlTypeName = '{0}'", objge_ControlTypeEN.controlTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_ControlTypeENS:源对象
 * @param objge_ControlTypeENT:目标对象
*/
export  function ge_ControlType_CopyObjTo(objge_ControlTypeENS: clsge_ControlTypeEN , objge_ControlTypeENT: clsge_ControlTypeEN ): void 
{
objge_ControlTypeENT.controlTypeId = objge_ControlTypeENS.controlTypeId; //控件Id
objge_ControlTypeENT.controlTypeName = objge_ControlTypeENS.controlTypeName; //控件名称
objge_ControlTypeENT.controlTypeEnName = objge_ControlTypeENS.controlTypeEnName; //控件英文名称
objge_ControlTypeENT.updDate = objge_ControlTypeENS.updDate; //修改日期
objge_ControlTypeENT.updUser = objge_ControlTypeENS.updUser; //修改人
objge_ControlTypeENT.memo = objge_ControlTypeENS.memo; //备注
objge_ControlTypeENT.sfUpdFldSetStr = objge_ControlTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_ControlTypeENS:源对象
 * @param objge_ControlTypeENT:目标对象
*/
export  function ge_ControlType_GetObjFromJsonObj(objge_ControlTypeENS: clsge_ControlTypeEN): clsge_ControlTypeEN 
{
 const objge_ControlTypeENT: clsge_ControlTypeEN = new clsge_ControlTypeEN();
ObjectAssign(objge_ControlTypeENT, objge_ControlTypeENS);
 return objge_ControlTypeENT;
}