
 /**
 * 类名:clsContentTypeWApi
 * 表名:ContentType(01120211)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:14
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
 * 内容类型(ContentType)
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
import { clsContentTypeEN } from "@/ts/L0Entity/SysPara/clsContentTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const contentType_Controller = "ContentTypeApi";
 export const contentType_ConstructorName = "contentType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strContentTypeId:关键字
 * @returns 对象
 **/
export  async function ContentType_GetObjByContentTypeIdAsync(strContentTypeId: string): Promise<clsContentTypeEN|null>  
{
const strThisFuncName = "GetObjByContentTypeIdAsync";

if (IsNullOrEmpty(strContentTypeId) == true)
{
  const strMsg = Format("参数:[strContentTypeId]不能为空!(In clsContentTypeWApi.GetObjByContentTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strContentTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strContentTypeId]的长度:[{0}]不正确!(clsContentTypeWApi.GetObjByContentTypeIdAsync)", strContentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByContentTypeId";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strContentTypeId,
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
const objContentType = ContentType_GetObjFromJsonObj(returnObj);
return objContentType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param strContentTypeId:所给的关键字
 * @returns 对象
*/
export  async function ContentType_GetObjByContentTypeIdlocalStorage(strContentTypeId: string) {
const strThisFuncName = "GetObjByContentTypeIdlocalStorage";

if (IsNullOrEmpty(strContentTypeId) == true)
{
  const strMsg = Format("参数:[strContentTypeId]不能为空!(In clsContentTypeWApi.GetObjByContentTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strContentTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strContentTypeId]的长度:[{0}]不正确!(clsContentTypeWApi.GetObjByContentTypeIdlocalStorage)", strContentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsContentTypeEN._CurrTabName, strContentTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objContentTypeCache: clsContentTypeEN = JSON.parse(strTempObj);
return objContentTypeCache;
}
try
{
const objContentType = await ContentType_GetObjByContentTypeIdAsync(strContentTypeId);
if (objContentType != null)
{
localStorage.setItem(strKey, JSON.stringify(objContentType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objContentType;
}
return objContentType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strContentTypeId, contentType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strContentTypeId:所给的关键字
 * @returns 对象
*/
export  async function ContentType_GetObjByContentTypeIdCache(strContentTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByContentTypeIdCache";

if (IsNullOrEmpty(strContentTypeId) == true)
{
  const strMsg = Format("参数:[strContentTypeId]不能为空!(In clsContentTypeWApi.GetObjByContentTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strContentTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strContentTypeId]的长度:[{0}]不正确!(clsContentTypeWApi.GetObjByContentTypeIdCache)", strContentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrContentTypeObjLstCache = await ContentType_GetObjLstCache();
try
{
const arrContentTypeSel = arrContentTypeObjLstCache.filter(x => 
 x.contentTypeId == strContentTypeId );
let objContentType: clsContentTypeEN;
if (arrContentTypeSel.length > 0)
{
objContentType = arrContentTypeSel[0];
return objContentType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objContentTypeConst = await ContentType_GetObjByContentTypeIdAsync(strContentTypeId);
if (objContentTypeConst != null)
{
ContentType_ReFreshThisCache();
return objContentTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strContentTypeId, contentType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objContentType:所给的对象
 * @returns 对象
*/
export  async function ContentType_UpdateObjInLstCache(objContentType: clsContentTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrContentTypeObjLstCache = await ContentType_GetObjLstCache();
const obj = arrContentTypeObjLstCache.find(x => x.contentTypeName == objContentType.contentTypeName);
if (obj != null)
{
objContentType.contentTypeId = obj.contentTypeId;
ObjectAssign( obj, objContentType);
}
else
{
arrContentTypeObjLstCache.push(objContentType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, contentType_ConstructorName, strThisFuncName);
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
export  function ContentType_SortFunDefa(a:clsContentTypeEN , b:clsContentTypeEN): number 
{
return a.contentTypeId.localeCompare(b.contentTypeId);
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
export  function ContentType_SortFunDefa2Fld(a:clsContentTypeEN , b:clsContentTypeEN): number 
{
if (a.contentTypeName == b.contentTypeName) return a.tableName.localeCompare(b.tableName);
else return a.contentTypeName.localeCompare(b.contentTypeName);
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
export  function ContentType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsContentTypeEN.con_ContentTypeId:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
return a.contentTypeId.localeCompare(b.contentTypeId);
}
case clsContentTypeEN.con_ContentTypeName:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
return a.contentTypeName.localeCompare(b.contentTypeName);
}
case clsContentTypeEN.con_TableName:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
return a.tableName.localeCompare(b.tableName);
}
case clsContentTypeEN.con_FldName:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
return a.fldName.localeCompare(b.fldName);
}
case clsContentTypeEN.con_UpdDate:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsContentTypeEN.con_UpdUser:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsContentTypeEN.con_Memo:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ContentType]中不存在!(in ${ contentType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsContentTypeEN.con_ContentTypeId:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
return b.contentTypeId.localeCompare(a.contentTypeId);
}
case clsContentTypeEN.con_ContentTypeName:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
return b.contentTypeName.localeCompare(a.contentTypeName);
}
case clsContentTypeEN.con_TableName:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
return b.tableName.localeCompare(a.tableName);
}
case clsContentTypeEN.con_FldName:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
return b.fldName.localeCompare(a.fldName);
}
case clsContentTypeEN.con_UpdDate:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsContentTypeEN.con_UpdUser:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsContentTypeEN.con_Memo:
return (a: clsContentTypeEN, b: clsContentTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ContentType]中不存在!(in ${ contentType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strContentTypeId:所给的关键字
 * @returns 对象
*/
export  async function ContentType_GetNameByContentTypeIdCache(strContentTypeId: string) {

if (IsNullOrEmpty(strContentTypeId) == true)
{
  const strMsg = Format("参数:[strContentTypeId]不能为空!(In clsContentTypeWApi.GetNameByContentTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strContentTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strContentTypeId]的长度:[{0}]不正确!(clsContentTypeWApi.GetNameByContentTypeIdCache)", strContentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrContentTypeObjLstCache = await ContentType_GetObjLstCache();
if (arrContentTypeObjLstCache == null) return "";
try
{
const arrContentTypeSel = arrContentTypeObjLstCache.filter(x => 
 x.contentTypeId == strContentTypeId );
let objContentType: clsContentTypeEN;
if (arrContentTypeSel.length > 0)
{
objContentType = arrContentTypeSel[0];
return objContentType.contentTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strContentTypeId);
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
export  async function ContentType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsContentTypeEN.con_ContentTypeId:
return (obj: clsContentTypeEN) => {
return obj.contentTypeId === value;
}
case clsContentTypeEN.con_ContentTypeName:
return (obj: clsContentTypeEN) => {
return obj.contentTypeName === value;
}
case clsContentTypeEN.con_TableName:
return (obj: clsContentTypeEN) => {
return obj.tableName === value;
}
case clsContentTypeEN.con_FldName:
return (obj: clsContentTypeEN) => {
return obj.fldName === value;
}
case clsContentTypeEN.con_UpdDate:
return (obj: clsContentTypeEN) => {
return obj.updDate === value;
}
case clsContentTypeEN.con_UpdUser:
return (obj: clsContentTypeEN) => {
return obj.updUser === value;
}
case clsContentTypeEN.con_Memo:
return (obj: clsContentTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ContentType]中不存在!(in ${ contentType_ConstructorName}.${ strThisFuncName})`;
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
export  async function ContentType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsContentTypeEN.con_ContentTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsContentTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsContentTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strContentTypeId = strInValue;
if (IsNullOrEmpty(strContentTypeId) == true)
{
return "";
}
const objContentType = await ContentType_GetObjByContentTypeIdCache(strContentTypeId );
if (objContentType == null) return "";
if (objContentType.GetFldValue(strOutFldName) == null) return "";
return objContentType.GetFldValue(strOutFldName).toString();
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
export  async function ContentType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsContentTypeEN.con_ContentTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrContentType = await ContentType_GetObjLstCache();
if (arrContentType == null) return [];
let arrContentTypeSel = arrContentType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrContentTypeSel = arrContentTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrContentTypeSel.length == 0) return [];
return arrContentTypeSel.map(x=>x.contentTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ContentType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_GetFirstObjAsync(strWhereCond: string): Promise<clsContentTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const objContentType = ContentType_GetObjFromJsonObj(returnObj);
return objContentType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsContentTypeEN._CurrTabName;
if (IsNullOrEmpty(clsContentTypeEN.WhereFormat) == false)
{
strWhereCond = clsContentTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsContentTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsContentTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrContentTypeExObjLstCache: Array<clsContentTypeEN> = CacheHelper.Get(strKey);
const arrContentTypeObjLstT = ContentType_GetObjLstByJSONObjLst(arrContentTypeExObjLstCache);
return arrContentTypeObjLstT;
}
try
{
const arrContentTypeExObjLst = await ContentType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrContentTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrContentTypeExObjLst.length);
console.log(strInfo);
return arrContentTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, contentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ContentType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsContentTypeEN._CurrTabName;
if (IsNullOrEmpty(clsContentTypeEN.WhereFormat) == false)
{
strWhereCond = clsContentTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsContentTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsContentTypeEN.CacheAddiCondition);
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
const arrContentTypeExObjLstCache: Array<clsContentTypeEN> = JSON.parse(strTempObjLst);
const arrContentTypeObjLstT = ContentType_GetObjLstByJSONObjLst(arrContentTypeExObjLstCache);
return arrContentTypeObjLstT;
}
try
{
const arrContentTypeExObjLst = await ContentType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrContentTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrContentTypeExObjLst.length);
console.log(strInfo);
return arrContentTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, contentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ContentType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsContentTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrContentTypeObjLstCache: Array<clsContentTypeEN> = JSON.parse(strTempObjLst);
return arrContentTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ContentType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsContentTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", contentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ContentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsContentTypeEN._CurrTabName;
if (IsNullOrEmpty(clsContentTypeEN.WhereFormat) == false)
{
strWhereCond = clsContentTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsContentTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsContentTypeEN.CacheAddiCondition);
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
const arrContentTypeExObjLstCache: Array<clsContentTypeEN> = JSON.parse(strTempObjLst);
const arrContentTypeObjLstT = ContentType_GetObjLstByJSONObjLst(arrContentTypeExObjLstCache);
return arrContentTypeObjLstT;
}
try
{
const arrContentTypeExObjLst = await ContentType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrContentTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrContentTypeExObjLst.length);
console.log(strInfo);
return arrContentTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, contentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ContentType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsContentTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrContentTypeObjLstCache: Array<clsContentTypeEN> = JSON.parse(strTempObjLst);
return arrContentTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ContentType_GetObjLstCache(): Promise<Array<clsContentTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrContentTypeObjLstCache;
switch (clsContentTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrContentTypeObjLstCache = await ContentType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrContentTypeObjLstCache = await ContentType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrContentTypeObjLstCache = await ContentType_GetObjLstClientCache();
break;
default:
arrContentTypeObjLstCache = await ContentType_GetObjLstClientCache();
break;
}
return arrContentTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ContentType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrContentTypeObjLstCache;
switch (clsContentTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrContentTypeObjLstCache = await ContentType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrContentTypeObjLstCache = await ContentType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrContentTypeObjLstCache = null;
break;
default:
arrContentTypeObjLstCache = null;
break;
}
return arrContentTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrContentTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ContentType_GetSubObjLstCache(objContentTypeCond: clsContentTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrContentTypeObjLstCache = await ContentType_GetObjLstCache();
let arrContentTypeSel = arrContentTypeObjLstCache;
if (objContentTypeCond.sfFldComparisonOp == null || objContentTypeCond.sfFldComparisonOp == "") return arrContentTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objContentTypeCond.sfFldComparisonOp);
//console.log("clsContentTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objContentTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objContentTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrContentTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objContentTypeCond), contentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsContentTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrContentTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function ContentType_GetObjLstByContentTypeIdLstAsync(arrContentTypeId: Array<string>): Promise<Array<clsContentTypeEN>>  
{
const strThisFuncName = "GetObjLstByContentTypeIdLstAsync";
const strAction = "GetObjLstByContentTypeIdLst";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrContentTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", contentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ContentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param arrstrContentTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ContentType_GetObjLstByContentTypeIdLstCache(arrContentTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByContentTypeIdLstCache";
try
{
const arrContentTypeObjLstCache = await ContentType_GetObjLstCache();
const arrContentTypeSel = arrContentTypeObjLstCache.filter(x => arrContentTypeIdLst.indexOf(x.contentTypeId)>-1);
return arrContentTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrContentTypeIdLst.join(","), contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsContentTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", contentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ContentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsContentTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", contentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ContentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsContentTypeEN>();
const arrContentTypeObjLstCache = await ContentType_GetObjLstCache();
if (arrContentTypeObjLstCache.length == 0) return arrContentTypeObjLstCache;
let arrContentTypeSel = arrContentTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objContentTypeCond = new clsContentTypeEN();
ObjectAssign(objContentTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsContentTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objContentTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrContentTypeSel = arrContentTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrContentTypeSel.length == 0) return arrContentTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrContentTypeSel = arrContentTypeSel.sort(ContentType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrContentTypeSel = arrContentTypeSel.sort(objPagerPara.sortFun);
}
arrContentTypeSel = arrContentTypeSel.slice(intStart, intEnd);     
return arrContentTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, contentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsContentTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ContentType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsContentTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsContentTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", contentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ContentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param strContentTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function ContentType_DelRecordAsync(strContentTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(contentType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strContentTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param arrContentTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ContentType_DelContentTypesAsync(arrContentTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelContentTypesAsync";
const strAction = "DelContentTypes";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrContentTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_DelContentTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelContentTypesByCondAsync";
const strAction = "DelContentTypesByCond";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param objContentTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ContentType_AddNewRecordAsync(objContentTypeEN: clsContentTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objContentTypeEN);
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objContentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param objContentTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ContentType_AddNewRecordWithMaxIdAsync(objContentTypeEN: clsContentTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objContentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_AddNewObjSave(objContentTypeEN: clsContentTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ContentType_CheckPropertyNew(objContentTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ contentType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ContentType_CheckUniCond4Add(objContentTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ContentType_AddNewRecordWithMaxIdAsync(objContentTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
ContentType_ReFreshCache();
}
else
{
const strInfo = `添加[内容类型(ContentType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ contentType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ContentType_CheckUniCond4Add(objContentTypeEN: clsContentTypeEN): Promise<boolean>{
const strUniquenessCondition = ContentType_GetUniCondStr(objContentTypeEN);
const bolIsExistCondition = await ContentType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ContentType_CheckUniCond4Update(objContentTypeEN: clsContentTypeEN): Promise<boolean>{
const strUniquenessCondition = ContentType_GetUniCondStr4Update(objContentTypeEN);
const bolIsExistCondition = await ContentType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ContentType_UpdateObjSave(objContentTypeEN: clsContentTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objContentTypeEN.sfUpdFldSetStr = objContentTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objContentTypeEN.contentTypeId == "" || objContentTypeEN.contentTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ContentType_CheckProperty4Update(objContentTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ contentType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ContentType_CheckUniCond4Update(objContentTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ContentType_UpdateRecordAsync(objContentTypeEN);
if (returnBool == true)
{
ContentType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ contentType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objContentTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ContentType_AddNewRecordWithReturnKeyAsync(objContentTypeEN: clsContentTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objContentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param objContentTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ContentType_UpdateRecordAsync(objContentTypeEN: clsContentTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objContentTypeEN.sfUpdFldSetStr === undefined || objContentTypeEN.sfUpdFldSetStr === null || objContentTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objContentTypeEN.contentTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objContentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param objContentTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ContentType_EditRecordExAsync(objContentTypeEN: clsContentTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objContentTypeEN.sfUpdFldSetStr === undefined || objContentTypeEN.sfUpdFldSetStr === null || objContentTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objContentTypeEN.contentTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objContentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param objContentTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ContentType_UpdateWithConditionAsync(objContentTypeEN: clsContentTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objContentTypeEN.sfUpdFldSetStr === undefined || objContentTypeEN.sfUpdFldSetStr === null || objContentTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objContentTypeEN.contentTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(contentType_Controller, strAction);
objContentTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objContentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param objstrContentTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ContentType_IsExistRecordCache(objContentTypeCond: clsContentTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrContentTypeObjLstCache = await ContentType_GetObjLstCache();
if (arrContentTypeObjLstCache == null) return false;
let arrContentTypeSel = arrContentTypeObjLstCache;
if (objContentTypeCond.sfFldComparisonOp == null || objContentTypeCond.sfFldComparisonOp == "") return arrContentTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objContentTypeCond.sfFldComparisonOp);
//console.log("clsContentTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objContentTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objContentTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrContentTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objContentTypeCond), contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param strContentTypeId:所给的关键字
 * @returns 对象
*/
export  async function ContentType_IsExistCache(strContentTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrContentTypeObjLstCache = await ContentType_GetObjLstCache();
if (arrContentTypeObjLstCache == null) return false;
try
{
const arrContentTypeSel = arrContentTypeObjLstCache.filter(x => x.contentTypeId == strContentTypeId);
if (arrContentTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strContentTypeId, contentType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strContentTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ContentType_IsExistAsync(strContentTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strContentTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
 * @param objContentTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ContentType_GetRecCountByCondCache(objContentTypeCond: clsContentTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrContentTypeObjLstCache = await ContentType_GetObjLstCache();
if (arrContentTypeObjLstCache == null) return 0;
let arrContentTypeSel = arrContentTypeObjLstCache;
if (objContentTypeCond.sfFldComparisonOp == null || objContentTypeCond.sfFldComparisonOp == "") return arrContentTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objContentTypeCond.sfFldComparisonOp);
//console.log("clsContentTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objContentTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objContentTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrContentTypeSel = arrContentTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrContentTypeSel = arrContentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrContentTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objContentTypeCond), contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  async function ContentType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(contentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, contentType_ConstructorName, strThisFuncName);
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
export  function ContentType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ContentType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsContentTypeEN._CurrTabName;
switch (clsContentTypeEN.CacheModeId)
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
clsContentTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ContentType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsContentTypeEN._CurrTabName;
switch (clsContentTypeEN.CacheModeId)
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
clsContentTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ContentType_GetLastRefreshTime():string
{
if (clsContentTypeEN._RefreshTimeLst.length == 0) return "";
return clsContentTypeEN._RefreshTimeLst[clsContentTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ContentType_Cache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrObjLstSel = await ContentType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsContentTypeEN.con_ContentTypeId, clsContentTypeEN.con_ContentTypeName, "内容类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ContentType_GetArrContentType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrContentType = new Array<clsContentTypeEN>();
const arrObjLstSel = await ContentType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsContentTypeEN();
obj0.contentTypeId = '0';
obj0.contentTypeName = '选内容类型...';
arrContentType.push(obj0);
arrObjLstSel.forEach(x => arrContentType.push(x));
return arrContentType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ContentType_CheckPropertyNew(pobjContentTypeEN: clsContentTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjContentTypeEN.contentTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[内容类型名]不能为空(In 内容类型)!(clsContentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.tableName) === true )
{
 throw new Error(`(errid:Watl000411)字段[主表表名]不能为空(In 内容类型)!(clsContentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.fldName) === true )
{
 throw new Error(`(errid:Watl000411)字段[字段名]不能为空(In 内容类型)!(clsContentTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjContentTypeEN.contentTypeId) == false && GetStrLen(pobjContentTypeEN.contentTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[内容类型Id(contentTypeId)]的长度不能超过4(In 内容类型(ContentType))!值:${pobjContentTypeEN.contentTypeId}(clsContentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.contentTypeName) == false && GetStrLen(pobjContentTypeEN.contentTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[内容类型名(contentTypeName)]的长度不能超过50(In 内容类型(ContentType))!值:${pobjContentTypeEN.contentTypeName}(clsContentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.tableName) == false && GetStrLen(pobjContentTypeEN.tableName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[主表表名(tableName)]的长度不能超过100(In 内容类型(ContentType))!值:${pobjContentTypeEN.tableName}(clsContentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.fldName) == false && GetStrLen(pobjContentTypeEN.fldName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[字段名(fldName)]的长度不能超过50(In 内容类型(ContentType))!值:${pobjContentTypeEN.fldName}(clsContentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.updDate) == false && GetStrLen(pobjContentTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 内容类型(ContentType))!值:${pobjContentTypeEN.updDate}(clsContentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.updUser) == false && GetStrLen(pobjContentTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 内容类型(ContentType))!值:${pobjContentTypeEN.updUser}(clsContentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.memo) == false && GetStrLen(pobjContentTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 内容类型(ContentType))!值:${pobjContentTypeEN.memo}(clsContentTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjContentTypeEN.contentTypeId) == false && undefined !== pobjContentTypeEN.contentTypeId && tzDataType.isString(pobjContentTypeEN.contentTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[内容类型Id(contentTypeId)]的值:[${pobjContentTypeEN.contentTypeId}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.contentTypeName) == false && undefined !== pobjContentTypeEN.contentTypeName && tzDataType.isString(pobjContentTypeEN.contentTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[内容类型名(contentTypeName)]的值:[${pobjContentTypeEN.contentTypeName}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.tableName) == false && undefined !== pobjContentTypeEN.tableName && tzDataType.isString(pobjContentTypeEN.tableName) === false)
{
 throw new Error(`(errid:Watl000414)字段[主表表名(tableName)]的值:[${pobjContentTypeEN.tableName}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.fldName) == false && undefined !== pobjContentTypeEN.fldName && tzDataType.isString(pobjContentTypeEN.fldName) === false)
{
 throw new Error(`(errid:Watl000414)字段[字段名(fldName)]的值:[${pobjContentTypeEN.fldName}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.updDate) == false && undefined !== pobjContentTypeEN.updDate && tzDataType.isString(pobjContentTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjContentTypeEN.updDate}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.updUser) == false && undefined !== pobjContentTypeEN.updUser && tzDataType.isString(pobjContentTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjContentTypeEN.updUser}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.memo) == false && undefined !== pobjContentTypeEN.memo && tzDataType.isString(pobjContentTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjContentTypeEN.memo}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ContentType_CheckProperty4Update(pobjContentTypeEN: clsContentTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjContentTypeEN.contentTypeId) == false && GetStrLen(pobjContentTypeEN.contentTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[内容类型Id(contentTypeId)]的长度不能超过4(In 内容类型(ContentType))!值:${pobjContentTypeEN.contentTypeId}(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.contentTypeName) == false && GetStrLen(pobjContentTypeEN.contentTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[内容类型名(contentTypeName)]的长度不能超过50(In 内容类型(ContentType))!值:${pobjContentTypeEN.contentTypeName}(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.tableName) == false && GetStrLen(pobjContentTypeEN.tableName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[主表表名(tableName)]的长度不能超过100(In 内容类型(ContentType))!值:${pobjContentTypeEN.tableName}(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.fldName) == false && GetStrLen(pobjContentTypeEN.fldName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[字段名(fldName)]的长度不能超过50(In 内容类型(ContentType))!值:${pobjContentTypeEN.fldName}(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.updDate) == false && GetStrLen(pobjContentTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 内容类型(ContentType))!值:${pobjContentTypeEN.updDate}(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.updUser) == false && GetStrLen(pobjContentTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 内容类型(ContentType))!值:${pobjContentTypeEN.updUser}(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.memo) == false && GetStrLen(pobjContentTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 内容类型(ContentType))!值:${pobjContentTypeEN.memo}(clsContentTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjContentTypeEN.contentTypeId) == false && undefined !== pobjContentTypeEN.contentTypeId && tzDataType.isString(pobjContentTypeEN.contentTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[内容类型Id(contentTypeId)]的值:[${pobjContentTypeEN.contentTypeId}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.contentTypeName) == false && undefined !== pobjContentTypeEN.contentTypeName && tzDataType.isString(pobjContentTypeEN.contentTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[内容类型名(contentTypeName)]的值:[${pobjContentTypeEN.contentTypeName}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.tableName) == false && undefined !== pobjContentTypeEN.tableName && tzDataType.isString(pobjContentTypeEN.tableName) === false)
{
 throw new Error(`(errid:Watl000417)字段[主表表名(tableName)]的值:[${pobjContentTypeEN.tableName}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.fldName) == false && undefined !== pobjContentTypeEN.fldName && tzDataType.isString(pobjContentTypeEN.fldName) === false)
{
 throw new Error(`(errid:Watl000417)字段[字段名(fldName)]的值:[${pobjContentTypeEN.fldName}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.updDate) == false && undefined !== pobjContentTypeEN.updDate && tzDataType.isString(pobjContentTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjContentTypeEN.updDate}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.updUser) == false && undefined !== pobjContentTypeEN.updUser && tzDataType.isString(pobjContentTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjContentTypeEN.updUser}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjContentTypeEN.memo) == false && undefined !== pobjContentTypeEN.memo && tzDataType.isString(pobjContentTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjContentTypeEN.memo}], 非法,应该为字符型(In 内容类型(ContentType))!(clsContentTypeBL:CheckProperty4Update)`);
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
export  function ContentType_GetJSONStrByObj (pobjContentTypeEN: clsContentTypeEN): string
{
pobjContentTypeEN.sfUpdFldSetStr = pobjContentTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjContentTypeEN);
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
export  function ContentType_GetObjLstByJSONStr (strJSON: string): Array<clsContentTypeEN>
{
let arrContentTypeObjLst = new Array<clsContentTypeEN>();
if (strJSON === "")
{
return arrContentTypeObjLst;
}
try
{
arrContentTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrContentTypeObjLst;
}
return arrContentTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrContentTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ContentType_GetObjLstByJSONObjLst (arrContentTypeObjLstS: Array<clsContentTypeEN>): Array<clsContentTypeEN>
{
const arrContentTypeObjLst = new Array<clsContentTypeEN>();
for (const objInFor of arrContentTypeObjLstS) {
const obj1 = ContentType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrContentTypeObjLst.push(obj1);
}
return arrContentTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ContentType_GetObjByJSONStr (strJSON: string): clsContentTypeEN
{
let pobjContentTypeEN = new clsContentTypeEN();
if (strJSON === "")
{
return pobjContentTypeEN;
}
try
{
pobjContentTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjContentTypeEN;
}
return pobjContentTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ContentType_GetCombineCondition(objContentTypeCond: clsContentTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objContentTypeCond.dicFldComparisonOp, clsContentTypeEN.con_ContentTypeId) == true)
{
const strComparisonOpContentTypeId:string = objContentTypeCond.dicFldComparisonOp[clsContentTypeEN.con_ContentTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsContentTypeEN.con_ContentTypeId, objContentTypeCond.contentTypeId, strComparisonOpContentTypeId);
}
if (Object.prototype.hasOwnProperty.call(objContentTypeCond.dicFldComparisonOp, clsContentTypeEN.con_ContentTypeName) == true)
{
const strComparisonOpContentTypeName:string = objContentTypeCond.dicFldComparisonOp[clsContentTypeEN.con_ContentTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsContentTypeEN.con_ContentTypeName, objContentTypeCond.contentTypeName, strComparisonOpContentTypeName);
}
if (Object.prototype.hasOwnProperty.call(objContentTypeCond.dicFldComparisonOp, clsContentTypeEN.con_TableName) == true)
{
const strComparisonOpTableName:string = objContentTypeCond.dicFldComparisonOp[clsContentTypeEN.con_TableName];
strWhereCond += Format(" And {0} {2} '{1}'", clsContentTypeEN.con_TableName, objContentTypeCond.tableName, strComparisonOpTableName);
}
if (Object.prototype.hasOwnProperty.call(objContentTypeCond.dicFldComparisonOp, clsContentTypeEN.con_FldName) == true)
{
const strComparisonOpFldName:string = objContentTypeCond.dicFldComparisonOp[clsContentTypeEN.con_FldName];
strWhereCond += Format(" And {0} {2} '{1}'", clsContentTypeEN.con_FldName, objContentTypeCond.fldName, strComparisonOpFldName);
}
if (Object.prototype.hasOwnProperty.call(objContentTypeCond.dicFldComparisonOp, clsContentTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objContentTypeCond.dicFldComparisonOp[clsContentTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsContentTypeEN.con_UpdDate, objContentTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objContentTypeCond.dicFldComparisonOp, clsContentTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objContentTypeCond.dicFldComparisonOp[clsContentTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsContentTypeEN.con_UpdUser, objContentTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objContentTypeCond.dicFldComparisonOp, clsContentTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objContentTypeCond.dicFldComparisonOp[clsContentTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsContentTypeEN.con_Memo, objContentTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ContentType(内容类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strContentTypeName: 内容类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ContentType_GetUniCondStr(objContentTypeEN: clsContentTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ContentTypeName = '{0}'", objContentTypeEN.contentTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ContentType(内容类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strContentTypeName: 内容类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ContentType_GetUniCondStr4Update(objContentTypeEN: clsContentTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ContentTypeId <> '{0}'", objContentTypeEN.contentTypeId);
 strWhereCond +=  Format(" and ContentTypeName = '{0}'", objContentTypeEN.contentTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objContentTypeENS:源对象
 * @param objContentTypeENT:目标对象
*/
export  function ContentType_CopyObjTo(objContentTypeENS: clsContentTypeEN , objContentTypeENT: clsContentTypeEN ): void 
{
objContentTypeENT.contentTypeId = objContentTypeENS.contentTypeId; //内容类型Id
objContentTypeENT.contentTypeName = objContentTypeENS.contentTypeName; //内容类型名
objContentTypeENT.tableName = objContentTypeENS.tableName; //主表表名
objContentTypeENT.fldName = objContentTypeENS.fldName; //字段名
objContentTypeENT.updDate = objContentTypeENS.updDate; //修改日期
objContentTypeENT.updUser = objContentTypeENS.updUser; //修改人
objContentTypeENT.memo = objContentTypeENS.memo; //备注
objContentTypeENT.sfUpdFldSetStr = objContentTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objContentTypeENS:源对象
 * @param objContentTypeENT:目标对象
*/
export  function ContentType_GetObjFromJsonObj(objContentTypeENS: clsContentTypeEN): clsContentTypeEN 
{
 const objContentTypeENT: clsContentTypeEN = new clsContentTypeEN();
ObjectAssign(objContentTypeENT, objContentTypeENS);
 return objContentTypeENT;
}