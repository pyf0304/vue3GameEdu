
 /**
 * 类名:clsBottleTypeWApi
 * 表名:BottleType(01120990)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:28
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
 * 瓶子类型(BottleType)
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
import { clsBottleTypeEN } from "@/ts/L0Entity/SysPara/clsBottleTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const bottleType_Controller = "BottleTypeApi";
 export const bottleType_ConstructorName = "bottleType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strBottleTypeId:关键字
 * @returns 对象
 **/
export  async function BottleType_GetObjByBottleTypeIdAsync(strBottleTypeId: string): Promise<clsBottleTypeEN|null>  
{
const strThisFuncName = "GetObjByBottleTypeIdAsync";

if (IsNullOrEmpty(strBottleTypeId) == true)
{
  const strMsg = Format("参数:[strBottleTypeId]不能为空!(In clsBottleTypeWApi.GetObjByBottleTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strBottleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBottleTypeId]的长度:[{0}]不正确!(clsBottleTypeWApi.GetObjByBottleTypeIdAsync)", strBottleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByBottleTypeId";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBottleTypeId,
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
const objBottleType = BottleType_GetObjFromJsonObj(returnObj);
return objBottleType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param strBottleTypeId:所给的关键字
 * @returns 对象
*/
export  async function BottleType_GetObjByBottleTypeIdlocalStorage(strBottleTypeId: string) {
const strThisFuncName = "GetObjByBottleTypeIdlocalStorage";

if (IsNullOrEmpty(strBottleTypeId) == true)
{
  const strMsg = Format("参数:[strBottleTypeId]不能为空!(In clsBottleTypeWApi.GetObjByBottleTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strBottleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBottleTypeId]的长度:[{0}]不正确!(clsBottleTypeWApi.GetObjByBottleTypeIdlocalStorage)", strBottleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsBottleTypeEN._CurrTabName, strBottleTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objBottleTypeCache: clsBottleTypeEN = JSON.parse(strTempObj);
return objBottleTypeCache;
}
try
{
const objBottleType = await BottleType_GetObjByBottleTypeIdAsync(strBottleTypeId);
if (objBottleType != null)
{
localStorage.setItem(strKey, JSON.stringify(objBottleType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objBottleType;
}
return objBottleType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strBottleTypeId, bottleType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strBottleTypeId:所给的关键字
 * @returns 对象
*/
export  async function BottleType_GetObjByBottleTypeIdCache(strBottleTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByBottleTypeIdCache";

if (IsNullOrEmpty(strBottleTypeId) == true)
{
  const strMsg = Format("参数:[strBottleTypeId]不能为空!(In clsBottleTypeWApi.GetObjByBottleTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strBottleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBottleTypeId]的长度:[{0}]不正确!(clsBottleTypeWApi.GetObjByBottleTypeIdCache)", strBottleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrBottleTypeObjLstCache = await BottleType_GetObjLstCache();
try
{
const arrBottleTypeSel = arrBottleTypeObjLstCache.filter(x => 
 x.bottleTypeId == strBottleTypeId );
let objBottleType: clsBottleTypeEN;
if (arrBottleTypeSel.length > 0)
{
objBottleType = arrBottleTypeSel[0];
return objBottleType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objBottleTypeConst = await BottleType_GetObjByBottleTypeIdAsync(strBottleTypeId);
if (objBottleTypeConst != null)
{
BottleType_ReFreshThisCache();
return objBottleTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strBottleTypeId, bottleType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objBottleType:所给的对象
 * @returns 对象
*/
export  async function BottleType_UpdateObjInLstCache(objBottleType: clsBottleTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrBottleTypeObjLstCache = await BottleType_GetObjLstCache();
const obj = arrBottleTypeObjLstCache.find(x => 
x.bottleTypeId == objBottleType.bottleTypeId);
if (obj != null)
{
objBottleType.bottleTypeId = obj.bottleTypeId;
ObjectAssign( obj, objBottleType);
}
else
{
arrBottleTypeObjLstCache.push(objBottleType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, bottleType_ConstructorName, strThisFuncName);
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
export  function BottleType_SortFunDefa(a:clsBottleTypeEN , b:clsBottleTypeEN): number 
{
return a.bottleTypeId.localeCompare(b.bottleTypeId);
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
export  function BottleType_SortFunDefa2Fld(a:clsBottleTypeEN , b:clsBottleTypeEN): number 
{
if (a.bottleTypeName == b.bottleTypeName) return a.bottleTypeEnName.localeCompare(b.bottleTypeEnName);
else return a.bottleTypeName.localeCompare(b.bottleTypeName);
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
export  function BottleType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsBottleTypeEN.con_BottleTypeId:
return (a: clsBottleTypeEN, b: clsBottleTypeEN) => {
return a.bottleTypeId.localeCompare(b.bottleTypeId);
}
case clsBottleTypeEN.con_BottleTypeName:
return (a: clsBottleTypeEN, b: clsBottleTypeEN) => {
return a.bottleTypeName.localeCompare(b.bottleTypeName);
}
case clsBottleTypeEN.con_BottleTypeEnName:
return (a: clsBottleTypeEN, b: clsBottleTypeEN) => {
return a.bottleTypeEnName.localeCompare(b.bottleTypeEnName);
}
case clsBottleTypeEN.con_Memo:
return (a: clsBottleTypeEN, b: clsBottleTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BottleType]中不存在!(in ${ bottleType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsBottleTypeEN.con_BottleTypeId:
return (a: clsBottleTypeEN, b: clsBottleTypeEN) => {
return b.bottleTypeId.localeCompare(a.bottleTypeId);
}
case clsBottleTypeEN.con_BottleTypeName:
return (a: clsBottleTypeEN, b: clsBottleTypeEN) => {
return b.bottleTypeName.localeCompare(a.bottleTypeName);
}
case clsBottleTypeEN.con_BottleTypeEnName:
return (a: clsBottleTypeEN, b: clsBottleTypeEN) => {
return b.bottleTypeEnName.localeCompare(a.bottleTypeEnName);
}
case clsBottleTypeEN.con_Memo:
return (a: clsBottleTypeEN, b: clsBottleTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BottleType]中不存在!(in ${ bottleType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strBottleTypeId:所给的关键字
 * @returns 对象
*/
export  async function BottleType_GetNameByBottleTypeIdCache(strBottleTypeId: string) {

if (IsNullOrEmpty(strBottleTypeId) == true)
{
  const strMsg = Format("参数:[strBottleTypeId]不能为空!(In clsBottleTypeWApi.GetNameByBottleTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strBottleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBottleTypeId]的长度:[{0}]不正确!(clsBottleTypeWApi.GetNameByBottleTypeIdCache)", strBottleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrBottleTypeObjLstCache = await BottleType_GetObjLstCache();
if (arrBottleTypeObjLstCache == null) return "";
try
{
const arrBottleTypeSel = arrBottleTypeObjLstCache.filter(x => 
 x.bottleTypeId == strBottleTypeId );
let objBottleType: clsBottleTypeEN;
if (arrBottleTypeSel.length > 0)
{
objBottleType = arrBottleTypeSel[0];
return objBottleType.bottleTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strBottleTypeId);
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
export  async function BottleType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsBottleTypeEN.con_BottleTypeId:
return (obj: clsBottleTypeEN) => {
return obj.bottleTypeId === value;
}
case clsBottleTypeEN.con_BottleTypeName:
return (obj: clsBottleTypeEN) => {
return obj.bottleTypeName === value;
}
case clsBottleTypeEN.con_BottleTypeEnName:
return (obj: clsBottleTypeEN) => {
return obj.bottleTypeEnName === value;
}
case clsBottleTypeEN.con_Memo:
return (obj: clsBottleTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BottleType]中不存在!(in ${ bottleType_ConstructorName}.${ strThisFuncName})`;
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
export  async function BottleType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsBottleTypeEN.con_BottleTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsBottleTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsBottleTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strBottleTypeId = strInValue;
if (IsNullOrEmpty(strBottleTypeId) == true)
{
return "";
}
const objBottleType = await BottleType_GetObjByBottleTypeIdCache(strBottleTypeId );
if (objBottleType == null) return "";
if (objBottleType.GetFldValue(strOutFldName) == null) return "";
return objBottleType.GetFldValue(strOutFldName).toString();
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
export  async function BottleType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsBottleTypeEN.con_BottleTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrBottleType = await BottleType_GetObjLstCache();
if (arrBottleType == null) return [];
let arrBottleTypeSel = arrBottleType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrBottleTypeSel = arrBottleTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrBottleTypeSel.length == 0) return [];
return arrBottleTypeSel.map(x=>x.bottleTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BottleType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_GetFirstObjAsync(strWhereCond: string): Promise<clsBottleTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const objBottleType = BottleType_GetObjFromJsonObj(returnObj);
return objBottleType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBottleTypeEN._CurrTabName;
if (IsNullOrEmpty(clsBottleTypeEN.WhereFormat) == false)
{
strWhereCond = clsBottleTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsBottleTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBottleTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrBottleTypeExObjLstCache: Array<clsBottleTypeEN> = CacheHelper.Get(strKey);
const arrBottleTypeObjLstT = BottleType_GetObjLstByJSONObjLst(arrBottleTypeExObjLstCache);
return arrBottleTypeObjLstT;
}
try
{
const arrBottleTypeExObjLst = await BottleType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrBottleTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBottleTypeExObjLst.length);
console.log(strInfo);
return arrBottleTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, bottleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BottleType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBottleTypeEN._CurrTabName;
if (IsNullOrEmpty(clsBottleTypeEN.WhereFormat) == false)
{
strWhereCond = clsBottleTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsBottleTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBottleTypeEN.CacheAddiCondition);
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
const arrBottleTypeExObjLstCache: Array<clsBottleTypeEN> = JSON.parse(strTempObjLst);
const arrBottleTypeObjLstT = BottleType_GetObjLstByJSONObjLst(arrBottleTypeExObjLstCache);
return arrBottleTypeObjLstT;
}
try
{
const arrBottleTypeExObjLst = await BottleType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrBottleTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBottleTypeExObjLst.length);
console.log(strInfo);
return arrBottleTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, bottleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BottleType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsBottleTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrBottleTypeObjLstCache: Array<clsBottleTypeEN> = JSON.parse(strTempObjLst);
return arrBottleTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function BottleType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsBottleTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bottleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BottleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBottleTypeEN._CurrTabName;
if (IsNullOrEmpty(clsBottleTypeEN.WhereFormat) == false)
{
strWhereCond = clsBottleTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsBottleTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBottleTypeEN.CacheAddiCondition);
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
const arrBottleTypeExObjLstCache: Array<clsBottleTypeEN> = JSON.parse(strTempObjLst);
const arrBottleTypeObjLstT = BottleType_GetObjLstByJSONObjLst(arrBottleTypeExObjLstCache);
return arrBottleTypeObjLstT;
}
try
{
const arrBottleTypeExObjLst = await BottleType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrBottleTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBottleTypeExObjLst.length);
console.log(strInfo);
return arrBottleTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, bottleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BottleType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsBottleTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrBottleTypeObjLstCache: Array<clsBottleTypeEN> = JSON.parse(strTempObjLst);
return arrBottleTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BottleType_GetObjLstCache(): Promise<Array<clsBottleTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrBottleTypeObjLstCache;
switch (clsBottleTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrBottleTypeObjLstCache = await BottleType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrBottleTypeObjLstCache = await BottleType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrBottleTypeObjLstCache = await BottleType_GetObjLstClientCache();
break;
default:
arrBottleTypeObjLstCache = await BottleType_GetObjLstClientCache();
break;
}
return arrBottleTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BottleType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrBottleTypeObjLstCache;
switch (clsBottleTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrBottleTypeObjLstCache = await BottleType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrBottleTypeObjLstCache = await BottleType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrBottleTypeObjLstCache = null;
break;
default:
arrBottleTypeObjLstCache = null;
break;
}
return arrBottleTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrBottleTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function BottleType_GetSubObjLstCache(objBottleTypeCond: clsBottleTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrBottleTypeObjLstCache = await BottleType_GetObjLstCache();
let arrBottleTypeSel = arrBottleTypeObjLstCache;
if (objBottleTypeCond.sfFldComparisonOp == null || objBottleTypeCond.sfFldComparisonOp == "") return arrBottleTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBottleTypeCond.sfFldComparisonOp);
//console.log("clsBottleTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBottleTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBottleTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrBottleTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objBottleTypeCond), bottleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsBottleTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrBottleTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function BottleType_GetObjLstByBottleTypeIdLstAsync(arrBottleTypeId: Array<string>): Promise<Array<clsBottleTypeEN>>  
{
const strThisFuncName = "GetObjLstByBottleTypeIdLstAsync";
const strAction = "GetObjLstByBottleTypeIdLst";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBottleTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bottleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BottleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param arrstrBottleTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function BottleType_GetObjLstByBottleTypeIdLstCache(arrBottleTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByBottleTypeIdLstCache";
try
{
const arrBottleTypeObjLstCache = await BottleType_GetObjLstCache();
const arrBottleTypeSel = arrBottleTypeObjLstCache.filter(x => arrBottleTypeIdLst.indexOf(x.bottleTypeId)>-1);
return arrBottleTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrBottleTypeIdLst.join(","), bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsBottleTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bottleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BottleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsBottleTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bottleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BottleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsBottleTypeEN>();
const arrBottleTypeObjLstCache = await BottleType_GetObjLstCache();
if (arrBottleTypeObjLstCache.length == 0) return arrBottleTypeObjLstCache;
let arrBottleTypeSel = arrBottleTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objBottleTypeCond = new clsBottleTypeEN();
ObjectAssign(objBottleTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsBottleTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBottleTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrBottleTypeSel = arrBottleTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrBottleTypeSel.length == 0) return arrBottleTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrBottleTypeSel = arrBottleTypeSel.sort(BottleType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrBottleTypeSel = arrBottleTypeSel.sort(objPagerPara.sortFun);
}
arrBottleTypeSel = arrBottleTypeSel.slice(intStart, intEnd);     
return arrBottleTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, bottleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsBottleTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function BottleType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsBottleTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsBottleTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bottleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BottleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param strBottleTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function BottleType_DelRecordAsync(strBottleTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(bottleType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strBottleTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param arrBottleTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function BottleType_DelBottleTypesAsync(arrBottleTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelBottleTypesAsync";
const strAction = "DelBottleTypes";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBottleTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_DelBottleTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelBottleTypesByCondAsync";
const strAction = "DelBottleTypesByCond";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param objBottleTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BottleType_AddNewRecordAsync(objBottleTypeEN: clsBottleTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objBottleTypeEN.bottleTypeId === null || objBottleTypeEN.bottleTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objBottleTypeEN);
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param objBottleTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BottleType_AddNewRecordWithMaxIdAsync(objBottleTypeEN: clsBottleTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_AddNewObjSave(objBottleTypeEN: clsBottleTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
BottleType_CheckPropertyNew(objBottleTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ bottleType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await BottleType_IsExistAsync(objBottleTypeEN.bottleTypeId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objBottleTypeEN.bottleTypeId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await BottleType_AddNewRecordAsync(objBottleTypeEN);
if (returnBool == true)
{
BottleType_ReFreshCache();
}
else
{
const strInfo = `添加[瓶子类型(BottleType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objBottleTypeEN.bottleTypeId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ bottleType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function BottleType_UpdateObjSave(objBottleTypeEN: clsBottleTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objBottleTypeEN.sfUpdFldSetStr = objBottleTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objBottleTypeEN.bottleTypeId == "" || objBottleTypeEN.bottleTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
BottleType_CheckProperty4Update(objBottleTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ bottleType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await BottleType_UpdateRecordAsync(objBottleTypeEN);
if (returnBool == true)
{
BottleType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ bottleType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objBottleTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function BottleType_AddNewRecordWithReturnKeyAsync(objBottleTypeEN: clsBottleTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param objBottleTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BottleType_UpdateRecordAsync(objBottleTypeEN: clsBottleTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objBottleTypeEN.sfUpdFldSetStr === undefined || objBottleTypeEN.sfUpdFldSetStr === null || objBottleTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBottleTypeEN.bottleTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param objBottleTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BottleType_EditRecordExAsync(objBottleTypeEN: clsBottleTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objBottleTypeEN.sfUpdFldSetStr === undefined || objBottleTypeEN.sfUpdFldSetStr === null || objBottleTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBottleTypeEN.bottleTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param objBottleTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BottleType_UpdateWithConditionAsync(objBottleTypeEN: clsBottleTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objBottleTypeEN.sfUpdFldSetStr === undefined || objBottleTypeEN.sfUpdFldSetStr === null || objBottleTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBottleTypeEN.bottleTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);
objBottleTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBottleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param objstrBottleTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function BottleType_IsExistRecordCache(objBottleTypeCond: clsBottleTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrBottleTypeObjLstCache = await BottleType_GetObjLstCache();
if (arrBottleTypeObjLstCache == null) return false;
let arrBottleTypeSel = arrBottleTypeObjLstCache;
if (objBottleTypeCond.sfFldComparisonOp == null || objBottleTypeCond.sfFldComparisonOp == "") return arrBottleTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBottleTypeCond.sfFldComparisonOp);
//console.log("clsBottleTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBottleTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBottleTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrBottleTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objBottleTypeCond), bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param strBottleTypeId:所给的关键字
 * @returns 对象
*/
export  async function BottleType_IsExistCache(strBottleTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrBottleTypeObjLstCache = await BottleType_GetObjLstCache();
if (arrBottleTypeObjLstCache == null) return false;
try
{
const arrBottleTypeSel = arrBottleTypeObjLstCache.filter(x => x.bottleTypeId == strBottleTypeId);
if (arrBottleTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strBottleTypeId, bottleType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strBottleTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function BottleType_IsExistAsync(strBottleTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBottleTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
 * @param objBottleTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function BottleType_GetRecCountByCondCache(objBottleTypeCond: clsBottleTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrBottleTypeObjLstCache = await BottleType_GetObjLstCache();
if (arrBottleTypeObjLstCache == null) return 0;
let arrBottleTypeSel = arrBottleTypeObjLstCache;
if (objBottleTypeCond.sfFldComparisonOp == null || objBottleTypeCond.sfFldComparisonOp == "") return arrBottleTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBottleTypeCond.sfFldComparisonOp);
//console.log("clsBottleTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBottleTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBottleTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrBottleTypeSel = arrBottleTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBottleTypeSel = arrBottleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrBottleTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objBottleTypeCond), bottleType_ConstructorName, strThisFuncName);
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
export  async function BottleType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(bottleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bottleType_ConstructorName, strThisFuncName);
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
export  function BottleType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function BottleType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsBottleTypeEN._CurrTabName;
switch (clsBottleTypeEN.CacheModeId)
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
clsBottleTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function BottleType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsBottleTypeEN._CurrTabName;
switch (clsBottleTypeEN.CacheModeId)
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
clsBottleTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function BottleType_GetLastRefreshTime():string
{
if (clsBottleTypeEN._RefreshTimeLst.length == 0) return "";
return clsBottleTypeEN._RefreshTimeLst[clsBottleTypeEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BottleType_CheckPropertyNew(pobjBottleTypeEN: clsBottleTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[瓶子类型名]不能为空(In 瓶子类型)!(clsBottleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeEnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[瓶子类型英文名]不能为空(In 瓶子类型)!(clsBottleTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeId) == false && GetStrLen(pobjBottleTypeEN.bottleTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[瓶子类型Id(bottleTypeId)]的长度不能超过2(In 瓶子类型(BottleType))!值:${pobjBottleTypeEN.bottleTypeId}(clsBottleTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeName) == false && GetStrLen(pobjBottleTypeEN.bottleTypeName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[瓶子类型名(bottleTypeName)]的长度不能超过30(In 瓶子类型(BottleType))!值:${pobjBottleTypeEN.bottleTypeName}(clsBottleTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeEnName) == false && GetStrLen(pobjBottleTypeEN.bottleTypeEnName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[瓶子类型英文名(bottleTypeEnName)]的长度不能超过30(In 瓶子类型(BottleType))!值:${pobjBottleTypeEN.bottleTypeEnName}(clsBottleTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.memo) == false && GetStrLen(pobjBottleTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 瓶子类型(BottleType))!值:${pobjBottleTypeEN.memo}(clsBottleTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeId) == false && undefined !== pobjBottleTypeEN.bottleTypeId && tzDataType.isString(pobjBottleTypeEN.bottleTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[瓶子类型Id(bottleTypeId)]的值:[${pobjBottleTypeEN.bottleTypeId}], 非法,应该为字符型(In 瓶子类型(BottleType))!(clsBottleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeName) == false && undefined !== pobjBottleTypeEN.bottleTypeName && tzDataType.isString(pobjBottleTypeEN.bottleTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[瓶子类型名(bottleTypeName)]的值:[${pobjBottleTypeEN.bottleTypeName}], 非法,应该为字符型(In 瓶子类型(BottleType))!(clsBottleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeEnName) == false && undefined !== pobjBottleTypeEN.bottleTypeEnName && tzDataType.isString(pobjBottleTypeEN.bottleTypeEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[瓶子类型英文名(bottleTypeEnName)]的值:[${pobjBottleTypeEN.bottleTypeEnName}], 非法,应该为字符型(In 瓶子类型(BottleType))!(clsBottleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.memo) == false && undefined !== pobjBottleTypeEN.memo && tzDataType.isString(pobjBottleTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjBottleTypeEN.memo}], 非法,应该为字符型(In 瓶子类型(BottleType))!(clsBottleTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BottleType_CheckProperty4Update(pobjBottleTypeEN: clsBottleTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeId) == false && GetStrLen(pobjBottleTypeEN.bottleTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[瓶子类型Id(bottleTypeId)]的长度不能超过2(In 瓶子类型(BottleType))!值:${pobjBottleTypeEN.bottleTypeId}(clsBottleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeName) == false && GetStrLen(pobjBottleTypeEN.bottleTypeName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[瓶子类型名(bottleTypeName)]的长度不能超过30(In 瓶子类型(BottleType))!值:${pobjBottleTypeEN.bottleTypeName}(clsBottleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeEnName) == false && GetStrLen(pobjBottleTypeEN.bottleTypeEnName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[瓶子类型英文名(bottleTypeEnName)]的长度不能超过30(In 瓶子类型(BottleType))!值:${pobjBottleTypeEN.bottleTypeEnName}(clsBottleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.memo) == false && GetStrLen(pobjBottleTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 瓶子类型(BottleType))!值:${pobjBottleTypeEN.memo}(clsBottleTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeId) == false && undefined !== pobjBottleTypeEN.bottleTypeId && tzDataType.isString(pobjBottleTypeEN.bottleTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[瓶子类型Id(bottleTypeId)]的值:[${pobjBottleTypeEN.bottleTypeId}], 非法,应该为字符型(In 瓶子类型(BottleType))!(clsBottleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeName) == false && undefined !== pobjBottleTypeEN.bottleTypeName && tzDataType.isString(pobjBottleTypeEN.bottleTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[瓶子类型名(bottleTypeName)]的值:[${pobjBottleTypeEN.bottleTypeName}], 非法,应该为字符型(In 瓶子类型(BottleType))!(clsBottleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeEnName) == false && undefined !== pobjBottleTypeEN.bottleTypeEnName && tzDataType.isString(pobjBottleTypeEN.bottleTypeEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[瓶子类型英文名(bottleTypeEnName)]的值:[${pobjBottleTypeEN.bottleTypeEnName}], 非法,应该为字符型(In 瓶子类型(BottleType))!(clsBottleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBottleTypeEN.memo) == false && undefined !== pobjBottleTypeEN.memo && tzDataType.isString(pobjBottleTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjBottleTypeEN.memo}], 非法,应该为字符型(In 瓶子类型(BottleType))!(clsBottleTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjBottleTypeEN.bottleTypeId) === true )
{
 throw new Error(`(errid:Watl000064)字段[瓶子类型Id]不能为空(In 瓶子类型)!(clsBottleTypeBL:CheckProperty4Update)`);
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
export  function BottleType_GetJSONStrByObj (pobjBottleTypeEN: clsBottleTypeEN): string
{
pobjBottleTypeEN.sfUpdFldSetStr = pobjBottleTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjBottleTypeEN);
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
export  function BottleType_GetObjLstByJSONStr (strJSON: string): Array<clsBottleTypeEN>
{
let arrBottleTypeObjLst = new Array<clsBottleTypeEN>();
if (strJSON === "")
{
return arrBottleTypeObjLst;
}
try
{
arrBottleTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrBottleTypeObjLst;
}
return arrBottleTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrBottleTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function BottleType_GetObjLstByJSONObjLst (arrBottleTypeObjLstS: Array<clsBottleTypeEN>): Array<clsBottleTypeEN>
{
const arrBottleTypeObjLst = new Array<clsBottleTypeEN>();
for (const objInFor of arrBottleTypeObjLstS) {
const obj1 = BottleType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrBottleTypeObjLst.push(obj1);
}
return arrBottleTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function BottleType_GetObjByJSONStr (strJSON: string): clsBottleTypeEN
{
let pobjBottleTypeEN = new clsBottleTypeEN();
if (strJSON === "")
{
return pobjBottleTypeEN;
}
try
{
pobjBottleTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjBottleTypeEN;
}
return pobjBottleTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function BottleType_GetCombineCondition(objBottleTypeCond: clsBottleTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objBottleTypeCond.dicFldComparisonOp, clsBottleTypeEN.con_BottleTypeId) == true)
{
const strComparisonOpBottleTypeId:string = objBottleTypeCond.dicFldComparisonOp[clsBottleTypeEN.con_BottleTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsBottleTypeEN.con_BottleTypeId, objBottleTypeCond.bottleTypeId, strComparisonOpBottleTypeId);
}
if (Object.prototype.hasOwnProperty.call(objBottleTypeCond.dicFldComparisonOp, clsBottleTypeEN.con_BottleTypeName) == true)
{
const strComparisonOpBottleTypeName:string = objBottleTypeCond.dicFldComparisonOp[clsBottleTypeEN.con_BottleTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBottleTypeEN.con_BottleTypeName, objBottleTypeCond.bottleTypeName, strComparisonOpBottleTypeName);
}
if (Object.prototype.hasOwnProperty.call(objBottleTypeCond.dicFldComparisonOp, clsBottleTypeEN.con_BottleTypeEnName) == true)
{
const strComparisonOpBottleTypeEnName:string = objBottleTypeCond.dicFldComparisonOp[clsBottleTypeEN.con_BottleTypeEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBottleTypeEN.con_BottleTypeEnName, objBottleTypeCond.bottleTypeEnName, strComparisonOpBottleTypeEnName);
}
if (Object.prototype.hasOwnProperty.call(objBottleTypeCond.dicFldComparisonOp, clsBottleTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objBottleTypeCond.dicFldComparisonOp[clsBottleTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsBottleTypeEN.con_Memo, objBottleTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objBottleTypeENS:源对象
 * @param objBottleTypeENT:目标对象
*/
export  function BottleType_CopyObjTo(objBottleTypeENS: clsBottleTypeEN , objBottleTypeENT: clsBottleTypeEN ): void 
{
objBottleTypeENT.bottleTypeId = objBottleTypeENS.bottleTypeId; //瓶子类型Id
objBottleTypeENT.bottleTypeName = objBottleTypeENS.bottleTypeName; //瓶子类型名
objBottleTypeENT.bottleTypeEnName = objBottleTypeENS.bottleTypeEnName; //瓶子类型英文名
objBottleTypeENT.memo = objBottleTypeENS.memo; //备注
objBottleTypeENT.sfUpdFldSetStr = objBottleTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objBottleTypeENS:源对象
 * @param objBottleTypeENT:目标对象
*/
export  function BottleType_GetObjFromJsonObj(objBottleTypeENS: clsBottleTypeEN): clsBottleTypeEN 
{
 const objBottleTypeENT: clsBottleTypeEN = new clsBottleTypeEN();
ObjectAssign(objBottleTypeENT, objBottleTypeENS);
 return objBottleTypeENT;
}