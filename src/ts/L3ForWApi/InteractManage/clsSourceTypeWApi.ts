
 /**
 * 类名:clsSourceTypeWApi
 * 表名:SourceType(01120185)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:42
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 来源类型(SourceType)
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
import { clsSourceTypeEN } from "@/ts/L0Entity/InteractManage/clsSourceTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const sourceType_Controller = "SourceTypeApi";
 export const sourceType_ConstructorName = "sourceType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSourceTypeId:关键字
 * @returns 对象
 **/
export  async function SourceType_GetObjBySourceTypeIdAsync(strSourceTypeId: string): Promise<clsSourceTypeEN|null>  
{
const strThisFuncName = "GetObjBySourceTypeIdAsync";

if (IsNullOrEmpty(strSourceTypeId) == true)
{
  const strMsg = Format("参数:[strSourceTypeId]不能为空!(In clsSourceTypeWApi.GetObjBySourceTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strSourceTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strSourceTypeId]的长度:[{0}]不正确!(clsSourceTypeWApi.GetObjBySourceTypeIdAsync)", strSourceTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjBySourceTypeId";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSourceTypeId,
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
const objSourceType = SourceType_GetObjFromJsonObj(returnObj);
return objSourceType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param strSourceTypeId:所给的关键字
 * @returns 对象
*/
export  async function SourceType_GetObjBySourceTypeIdlocalStorage(strSourceTypeId: string) {
const strThisFuncName = "GetObjBySourceTypeIdlocalStorage";

if (IsNullOrEmpty(strSourceTypeId) == true)
{
  const strMsg = Format("参数:[strSourceTypeId]不能为空!(In clsSourceTypeWApi.GetObjBySourceTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strSourceTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strSourceTypeId]的长度:[{0}]不正确!(clsSourceTypeWApi.GetObjBySourceTypeIdlocalStorage)", strSourceTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsSourceTypeEN._CurrTabName, strSourceTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objSourceTypeCache: clsSourceTypeEN = JSON.parse(strTempObj);
return objSourceTypeCache;
}
try
{
const objSourceType = await SourceType_GetObjBySourceTypeIdAsync(strSourceTypeId);
if (objSourceType != null)
{
localStorage.setItem(strKey, JSON.stringify(objSourceType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objSourceType;
}
return objSourceType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strSourceTypeId, sourceType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strSourceTypeId:所给的关键字
 * @returns 对象
*/
export  async function SourceType_GetObjBySourceTypeIdCache(strSourceTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBySourceTypeIdCache";

if (IsNullOrEmpty(strSourceTypeId) == true)
{
  const strMsg = Format("参数:[strSourceTypeId]不能为空!(In clsSourceTypeWApi.GetObjBySourceTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strSourceTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strSourceTypeId]的长度:[{0}]不正确!(clsSourceTypeWApi.GetObjBySourceTypeIdCache)", strSourceTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrSourceTypeObjLstCache = await SourceType_GetObjLstCache();
try
{
const arrSourceTypeSel = arrSourceTypeObjLstCache.filter(x => 
 x.sourceTypeId == strSourceTypeId );
let objSourceType: clsSourceTypeEN;
if (arrSourceTypeSel.length > 0)
{
objSourceType = arrSourceTypeSel[0];
return objSourceType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objSourceTypeConst = await SourceType_GetObjBySourceTypeIdAsync(strSourceTypeId);
if (objSourceTypeConst != null)
{
SourceType_ReFreshThisCache();
return objSourceTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strSourceTypeId, sourceType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objSourceType:所给的对象
 * @returns 对象
*/
export  async function SourceType_UpdateObjInLstCache(objSourceType: clsSourceTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrSourceTypeObjLstCache = await SourceType_GetObjLstCache();
const obj = arrSourceTypeObjLstCache.find(x => x.sourceTypeName == objSourceType.sourceTypeName);
if (obj != null)
{
objSourceType.sourceTypeId = obj.sourceTypeId;
ObjectAssign( obj, objSourceType);
}
else
{
arrSourceTypeObjLstCache.push(objSourceType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, sourceType_ConstructorName, strThisFuncName);
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
export  function SourceType_SortFunDefa(a:clsSourceTypeEN , b:clsSourceTypeEN): number 
{
return a.sourceTypeId.localeCompare(b.sourceTypeId);
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
export  function SourceType_SortFunDefa2Fld(a:clsSourceTypeEN , b:clsSourceTypeEN): number 
{
if (a.sourceTypeName == b.sourceTypeName) return a.memo.localeCompare(b.memo);
else return a.sourceTypeName.localeCompare(b.sourceTypeName);
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
export  function SourceType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsSourceTypeEN.con_SourceTypeId:
return (a: clsSourceTypeEN, b: clsSourceTypeEN) => {
return a.sourceTypeId.localeCompare(b.sourceTypeId);
}
case clsSourceTypeEN.con_SourceTypeName:
return (a: clsSourceTypeEN, b: clsSourceTypeEN) => {
return a.sourceTypeName.localeCompare(b.sourceTypeName);
}
case clsSourceTypeEN.con_Memo:
return (a: clsSourceTypeEN, b: clsSourceTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SourceType]中不存在!(in ${ sourceType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsSourceTypeEN.con_SourceTypeId:
return (a: clsSourceTypeEN, b: clsSourceTypeEN) => {
return b.sourceTypeId.localeCompare(a.sourceTypeId);
}
case clsSourceTypeEN.con_SourceTypeName:
return (a: clsSourceTypeEN, b: clsSourceTypeEN) => {
return b.sourceTypeName.localeCompare(a.sourceTypeName);
}
case clsSourceTypeEN.con_Memo:
return (a: clsSourceTypeEN, b: clsSourceTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SourceType]中不存在!(in ${ sourceType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strSourceTypeId:所给的关键字
 * @returns 对象
*/
export  async function SourceType_GetNameBySourceTypeIdCache(strSourceTypeId: string) {

if (IsNullOrEmpty(strSourceTypeId) == true)
{
  const strMsg = Format("参数:[strSourceTypeId]不能为空!(In clsSourceTypeWApi.GetNameBySourceTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strSourceTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strSourceTypeId]的长度:[{0}]不正确!(clsSourceTypeWApi.GetNameBySourceTypeIdCache)", strSourceTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrSourceTypeObjLstCache = await SourceType_GetObjLstCache();
if (arrSourceTypeObjLstCache == null) return "";
try
{
const arrSourceTypeSel = arrSourceTypeObjLstCache.filter(x => 
 x.sourceTypeId == strSourceTypeId );
let objSourceType: clsSourceTypeEN;
if (arrSourceTypeSel.length > 0)
{
objSourceType = arrSourceTypeSel[0];
return objSourceType.sourceTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strSourceTypeId);
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
export  async function SourceType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsSourceTypeEN.con_SourceTypeId:
return (obj: clsSourceTypeEN) => {
return obj.sourceTypeId === value;
}
case clsSourceTypeEN.con_SourceTypeName:
return (obj: clsSourceTypeEN) => {
return obj.sourceTypeName === value;
}
case clsSourceTypeEN.con_Memo:
return (obj: clsSourceTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SourceType]中不存在!(in ${ sourceType_ConstructorName}.${ strThisFuncName})`;
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
export  async function SourceType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsSourceTypeEN.con_SourceTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsSourceTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsSourceTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strSourceTypeId = strInValue;
if (IsNullOrEmpty(strSourceTypeId) == true)
{
return "";
}
const objSourceType = await SourceType_GetObjBySourceTypeIdCache(strSourceTypeId );
if (objSourceType == null) return "";
if (objSourceType.GetFldValue(strOutFldName) == null) return "";
return objSourceType.GetFldValue(strOutFldName).toString();
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
export  async function SourceType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsSourceTypeEN.con_SourceTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrSourceType = await SourceType_GetObjLstCache();
if (arrSourceType == null) return [];
let arrSourceTypeSel = arrSourceType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrSourceTypeSel = arrSourceTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrSourceTypeSel.length == 0) return [];
return arrSourceTypeSel.map(x=>x.sourceTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SourceType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_GetFirstObjAsync(strWhereCond: string): Promise<clsSourceTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const objSourceType = SourceType_GetObjFromJsonObj(returnObj);
return objSourceType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsSourceTypeEN._CurrTabName;
if (IsNullOrEmpty(clsSourceTypeEN.WhereFormat) == false)
{
strWhereCond = clsSourceTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsSourceTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSourceTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrSourceTypeExObjLstCache: Array<clsSourceTypeEN> = CacheHelper.Get(strKey);
const arrSourceTypeObjLstT = SourceType_GetObjLstByJSONObjLst(arrSourceTypeExObjLstCache);
return arrSourceTypeObjLstT;
}
try
{
const arrSourceTypeExObjLst = await SourceType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrSourceTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSourceTypeExObjLst.length);
console.log(strInfo);
return arrSourceTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, sourceType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SourceType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsSourceTypeEN._CurrTabName;
if (IsNullOrEmpty(clsSourceTypeEN.WhereFormat) == false)
{
strWhereCond = clsSourceTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsSourceTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSourceTypeEN.CacheAddiCondition);
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
const arrSourceTypeExObjLstCache: Array<clsSourceTypeEN> = JSON.parse(strTempObjLst);
const arrSourceTypeObjLstT = SourceType_GetObjLstByJSONObjLst(arrSourceTypeExObjLstCache);
return arrSourceTypeObjLstT;
}
try
{
const arrSourceTypeExObjLst = await SourceType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrSourceTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSourceTypeExObjLst.length);
console.log(strInfo);
return arrSourceTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, sourceType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SourceType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsSourceTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrSourceTypeObjLstCache: Array<clsSourceTypeEN> = JSON.parse(strTempObjLst);
return arrSourceTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function SourceType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSourceTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sourceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SourceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsSourceTypeEN._CurrTabName;
if (IsNullOrEmpty(clsSourceTypeEN.WhereFormat) == false)
{
strWhereCond = clsSourceTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsSourceTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSourceTypeEN.CacheAddiCondition);
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
const arrSourceTypeExObjLstCache: Array<clsSourceTypeEN> = JSON.parse(strTempObjLst);
const arrSourceTypeObjLstT = SourceType_GetObjLstByJSONObjLst(arrSourceTypeExObjLstCache);
return arrSourceTypeObjLstT;
}
try
{
const arrSourceTypeExObjLst = await SourceType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrSourceTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSourceTypeExObjLst.length);
console.log(strInfo);
return arrSourceTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, sourceType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SourceType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsSourceTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrSourceTypeObjLstCache: Array<clsSourceTypeEN> = JSON.parse(strTempObjLst);
return arrSourceTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SourceType_GetObjLstCache(): Promise<Array<clsSourceTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrSourceTypeObjLstCache;
switch (clsSourceTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrSourceTypeObjLstCache = await SourceType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrSourceTypeObjLstCache = await SourceType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrSourceTypeObjLstCache = await SourceType_GetObjLstClientCache();
break;
default:
arrSourceTypeObjLstCache = await SourceType_GetObjLstClientCache();
break;
}
return arrSourceTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SourceType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrSourceTypeObjLstCache;
switch (clsSourceTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrSourceTypeObjLstCache = await SourceType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrSourceTypeObjLstCache = await SourceType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrSourceTypeObjLstCache = null;
break;
default:
arrSourceTypeObjLstCache = null;
break;
}
return arrSourceTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSourceTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function SourceType_GetSubObjLstCache(objSourceTypeCond: clsSourceTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrSourceTypeObjLstCache = await SourceType_GetObjLstCache();
let arrSourceTypeSel = arrSourceTypeObjLstCache;
if (objSourceTypeCond.sfFldComparisonOp == null || objSourceTypeCond.sfFldComparisonOp == "") return arrSourceTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objSourceTypeCond.sfFldComparisonOp);
//console.log("clsSourceTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objSourceTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objSourceTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrSourceTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objSourceTypeCond), sourceType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsSourceTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSourceTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function SourceType_GetObjLstBySourceTypeIdLstAsync(arrSourceTypeId: Array<string>): Promise<Array<clsSourceTypeEN>>  
{
const strThisFuncName = "GetObjLstBySourceTypeIdLstAsync";
const strAction = "GetObjLstBySourceTypeIdLst";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSourceTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sourceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SourceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param arrstrSourceTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function SourceType_GetObjLstBySourceTypeIdLstCache(arrSourceTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstBySourceTypeIdLstCache";
try
{
const arrSourceTypeObjLstCache = await SourceType_GetObjLstCache();
const arrSourceTypeSel = arrSourceTypeObjLstCache.filter(x => arrSourceTypeIdLst.indexOf(x.sourceTypeId)>-1);
return arrSourceTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrSourceTypeIdLst.join(","), sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsSourceTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sourceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SourceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsSourceTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sourceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SourceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsSourceTypeEN>();
const arrSourceTypeObjLstCache = await SourceType_GetObjLstCache();
if (arrSourceTypeObjLstCache.length == 0) return arrSourceTypeObjLstCache;
let arrSourceTypeSel = arrSourceTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objSourceTypeCond = new clsSourceTypeEN();
ObjectAssign(objSourceTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsSourceTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objSourceTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrSourceTypeSel = arrSourceTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrSourceTypeSel.length == 0) return arrSourceTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrSourceTypeSel = arrSourceTypeSel.sort(SourceType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrSourceTypeSel = arrSourceTypeSel.sort(objPagerPara.sortFun);
}
arrSourceTypeSel = arrSourceTypeSel.slice(intStart, intEnd);     
return arrSourceTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, sourceType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsSourceTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function SourceType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsSourceTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsSourceTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sourceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SourceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param strSourceTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function SourceType_DelRecordAsync(strSourceTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(sourceType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strSourceTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param arrSourceTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function SourceType_DelSourceTypesAsync(arrSourceTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelSourceTypesAsync";
const strAction = "DelSourceTypes";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSourceTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_DelSourceTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelSourceTypesByCondAsync";
const strAction = "DelSourceTypesByCond";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param objSourceTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SourceType_AddNewRecordAsync(objSourceTypeEN: clsSourceTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objSourceTypeEN);
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSourceTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param objSourceTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SourceType_AddNewRecordWithMaxIdAsync(objSourceTypeEN: clsSourceTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSourceTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_AddNewObjSave(objSourceTypeEN: clsSourceTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
SourceType_CheckPropertyNew(objSourceTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ sourceType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await SourceType_CheckUniCond4Add(objSourceTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await SourceType_AddNewRecordWithMaxIdAsync(objSourceTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
SourceType_ReFreshCache();
}
else
{
const strInfo = `添加[来源类型(SourceType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ sourceType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function SourceType_CheckUniCond4Add(objSourceTypeEN: clsSourceTypeEN): Promise<boolean>{
const strUniquenessCondition = SourceType_GetUniCondStr(objSourceTypeEN);
const bolIsExistCondition = await SourceType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function SourceType_CheckUniCond4Update(objSourceTypeEN: clsSourceTypeEN): Promise<boolean>{
const strUniquenessCondition = SourceType_GetUniCondStr4Update(objSourceTypeEN);
const bolIsExistCondition = await SourceType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function SourceType_UpdateObjSave(objSourceTypeEN: clsSourceTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objSourceTypeEN.sfUpdFldSetStr = objSourceTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objSourceTypeEN.sourceTypeId == "" || objSourceTypeEN.sourceTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
SourceType_CheckProperty4Update(objSourceTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ sourceType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await SourceType_CheckUniCond4Update(objSourceTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await SourceType_UpdateRecordAsync(objSourceTypeEN);
if (returnBool == true)
{
SourceType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ sourceType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objSourceTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function SourceType_AddNewRecordWithReturnKeyAsync(objSourceTypeEN: clsSourceTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSourceTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param objSourceTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SourceType_UpdateRecordAsync(objSourceTypeEN: clsSourceTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objSourceTypeEN.sfUpdFldSetStr === undefined || objSourceTypeEN.sfUpdFldSetStr === null || objSourceTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSourceTypeEN.sourceTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSourceTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param objSourceTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SourceType_EditRecordExAsync(objSourceTypeEN: clsSourceTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objSourceTypeEN.sfUpdFldSetStr === undefined || objSourceTypeEN.sfUpdFldSetStr === null || objSourceTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSourceTypeEN.sourceTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSourceTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param objSourceTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SourceType_UpdateWithConditionAsync(objSourceTypeEN: clsSourceTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objSourceTypeEN.sfUpdFldSetStr === undefined || objSourceTypeEN.sfUpdFldSetStr === null || objSourceTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSourceTypeEN.sourceTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);
objSourceTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSourceTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param objstrSourceTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function SourceType_IsExistRecordCache(objSourceTypeCond: clsSourceTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrSourceTypeObjLstCache = await SourceType_GetObjLstCache();
if (arrSourceTypeObjLstCache == null) return false;
let arrSourceTypeSel = arrSourceTypeObjLstCache;
if (objSourceTypeCond.sfFldComparisonOp == null || objSourceTypeCond.sfFldComparisonOp == "") return arrSourceTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objSourceTypeCond.sfFldComparisonOp);
//console.log("clsSourceTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objSourceTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objSourceTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrSourceTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objSourceTypeCond), sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param strSourceTypeId:所给的关键字
 * @returns 对象
*/
export  async function SourceType_IsExistCache(strSourceTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrSourceTypeObjLstCache = await SourceType_GetObjLstCache();
if (arrSourceTypeObjLstCache == null) return false;
try
{
const arrSourceTypeSel = arrSourceTypeObjLstCache.filter(x => x.sourceTypeId == strSourceTypeId);
if (arrSourceTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strSourceTypeId, sourceType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strSourceTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function SourceType_IsExistAsync(strSourceTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSourceTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
 * @param objSourceTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function SourceType_GetRecCountByCondCache(objSourceTypeCond: clsSourceTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrSourceTypeObjLstCache = await SourceType_GetObjLstCache();
if (arrSourceTypeObjLstCache == null) return 0;
let arrSourceTypeSel = arrSourceTypeObjLstCache;
if (objSourceTypeCond.sfFldComparisonOp == null || objSourceTypeCond.sfFldComparisonOp == "") return arrSourceTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objSourceTypeCond.sfFldComparisonOp);
//console.log("clsSourceTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objSourceTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objSourceTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrSourceTypeSel = arrSourceTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSourceTypeSel = arrSourceTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrSourceTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objSourceTypeCond), sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  async function SourceType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(sourceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sourceType_ConstructorName, strThisFuncName);
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
export  function SourceType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function SourceType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsSourceTypeEN._CurrTabName;
switch (clsSourceTypeEN.CacheModeId)
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
clsSourceTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function SourceType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsSourceTypeEN._CurrTabName;
switch (clsSourceTypeEN.CacheModeId)
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
clsSourceTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function SourceType_GetLastRefreshTime():string
{
if (clsSourceTypeEN._RefreshTimeLst.length == 0) return "";
return clsSourceTypeEN._RefreshTimeLst[clsSourceTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function SourceType_BindDdl_SourceTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_SourceTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_SourceTypeIdInDivCache");
const arrObjLstSel = await SourceType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsSourceTypeEN.con_SourceTypeId, clsSourceTypeEN.con_SourceTypeName, "来源类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function SourceType_GetArrSourceType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_SourceTypeIdInDivCache");
const arrSourceType = new Array<clsSourceTypeEN>();
const arrObjLstSel = await SourceType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsSourceTypeEN();
obj0.sourceTypeId = '0';
obj0.sourceTypeName = '选来源类型...';
arrSourceType.push(obj0);
arrObjLstSel.forEach(x => arrSourceType.push(x));
return arrSourceType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SourceType_CheckPropertyNew(pobjSourceTypeEN: clsSourceTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjSourceTypeEN.sourceTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[来源类型名称]不能为空(In 来源类型)!(clsSourceTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSourceTypeEN.sourceTypeId) == false && GetStrLen(pobjSourceTypeEN.sourceTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[来源类型Id(sourceTypeId)]的长度不能超过2(In 来源类型(SourceType))!值:${pobjSourceTypeEN.sourceTypeId}(clsSourceTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSourceTypeEN.sourceTypeName) == false && GetStrLen(pobjSourceTypeEN.sourceTypeName) > 20)
{
 throw new Error(`(errid:Watl000413)字段[来源类型名称(sourceTypeName)]的长度不能超过20(In 来源类型(SourceType))!值:${pobjSourceTypeEN.sourceTypeName}(clsSourceTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSourceTypeEN.memo) == false && GetStrLen(pobjSourceTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 来源类型(SourceType))!值:${pobjSourceTypeEN.memo}(clsSourceTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSourceTypeEN.sourceTypeId) == false && undefined !== pobjSourceTypeEN.sourceTypeId && tzDataType.isString(pobjSourceTypeEN.sourceTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[来源类型Id(sourceTypeId)]的值:[${pobjSourceTypeEN.sourceTypeId}], 非法,应该为字符型(In 来源类型(SourceType))!(clsSourceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSourceTypeEN.sourceTypeName) == false && undefined !== pobjSourceTypeEN.sourceTypeName && tzDataType.isString(pobjSourceTypeEN.sourceTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[来源类型名称(sourceTypeName)]的值:[${pobjSourceTypeEN.sourceTypeName}], 非法,应该为字符型(In 来源类型(SourceType))!(clsSourceTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSourceTypeEN.memo) == false && undefined !== pobjSourceTypeEN.memo && tzDataType.isString(pobjSourceTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjSourceTypeEN.memo}], 非法,应该为字符型(In 来源类型(SourceType))!(clsSourceTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SourceType_CheckProperty4Update(pobjSourceTypeEN: clsSourceTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSourceTypeEN.sourceTypeId) == false && GetStrLen(pobjSourceTypeEN.sourceTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[来源类型Id(sourceTypeId)]的长度不能超过2(In 来源类型(SourceType))!值:${pobjSourceTypeEN.sourceTypeId}(clsSourceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSourceTypeEN.sourceTypeName) == false && GetStrLen(pobjSourceTypeEN.sourceTypeName) > 20)
{
 throw new Error(`(errid:Watl000416)字段[来源类型名称(sourceTypeName)]的长度不能超过20(In 来源类型(SourceType))!值:${pobjSourceTypeEN.sourceTypeName}(clsSourceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSourceTypeEN.memo) == false && GetStrLen(pobjSourceTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 来源类型(SourceType))!值:${pobjSourceTypeEN.memo}(clsSourceTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSourceTypeEN.sourceTypeId) == false && undefined !== pobjSourceTypeEN.sourceTypeId && tzDataType.isString(pobjSourceTypeEN.sourceTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[来源类型Id(sourceTypeId)]的值:[${pobjSourceTypeEN.sourceTypeId}], 非法,应该为字符型(In 来源类型(SourceType))!(clsSourceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSourceTypeEN.sourceTypeName) == false && undefined !== pobjSourceTypeEN.sourceTypeName && tzDataType.isString(pobjSourceTypeEN.sourceTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[来源类型名称(sourceTypeName)]的值:[${pobjSourceTypeEN.sourceTypeName}], 非法,应该为字符型(In 来源类型(SourceType))!(clsSourceTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSourceTypeEN.memo) == false && undefined !== pobjSourceTypeEN.memo && tzDataType.isString(pobjSourceTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjSourceTypeEN.memo}], 非法,应该为字符型(In 来源类型(SourceType))!(clsSourceTypeBL:CheckProperty4Update)`);
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
export  function SourceType_GetJSONStrByObj (pobjSourceTypeEN: clsSourceTypeEN): string
{
pobjSourceTypeEN.sfUpdFldSetStr = pobjSourceTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjSourceTypeEN);
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
export  function SourceType_GetObjLstByJSONStr (strJSON: string): Array<clsSourceTypeEN>
{
let arrSourceTypeObjLst = new Array<clsSourceTypeEN>();
if (strJSON === "")
{
return arrSourceTypeObjLst;
}
try
{
arrSourceTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrSourceTypeObjLst;
}
return arrSourceTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSourceTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function SourceType_GetObjLstByJSONObjLst (arrSourceTypeObjLstS: Array<clsSourceTypeEN>): Array<clsSourceTypeEN>
{
const arrSourceTypeObjLst = new Array<clsSourceTypeEN>();
for (const objInFor of arrSourceTypeObjLstS) {
const obj1 = SourceType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrSourceTypeObjLst.push(obj1);
}
return arrSourceTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SourceType_GetObjByJSONStr (strJSON: string): clsSourceTypeEN
{
let pobjSourceTypeEN = new clsSourceTypeEN();
if (strJSON === "")
{
return pobjSourceTypeEN;
}
try
{
pobjSourceTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjSourceTypeEN;
}
return pobjSourceTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function SourceType_GetCombineCondition(objSourceTypeCond: clsSourceTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objSourceTypeCond.dicFldComparisonOp, clsSourceTypeEN.con_SourceTypeId) == true)
{
const strComparisonOpSourceTypeId:string = objSourceTypeCond.dicFldComparisonOp[clsSourceTypeEN.con_SourceTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSourceTypeEN.con_SourceTypeId, objSourceTypeCond.sourceTypeId, strComparisonOpSourceTypeId);
}
if (Object.prototype.hasOwnProperty.call(objSourceTypeCond.dicFldComparisonOp, clsSourceTypeEN.con_SourceTypeName) == true)
{
const strComparisonOpSourceTypeName:string = objSourceTypeCond.dicFldComparisonOp[clsSourceTypeEN.con_SourceTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsSourceTypeEN.con_SourceTypeName, objSourceTypeCond.sourceTypeName, strComparisonOpSourceTypeName);
}
if (Object.prototype.hasOwnProperty.call(objSourceTypeCond.dicFldComparisonOp, clsSourceTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objSourceTypeCond.dicFldComparisonOp[clsSourceTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsSourceTypeEN.con_Memo, objSourceTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SourceType(来源类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strSourceTypeName: 来源类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SourceType_GetUniCondStr(objSourceTypeEN: clsSourceTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and SourceTypeName = '{0}'", objSourceTypeEN.sourceTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SourceType(来源类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strSourceTypeName: 来源类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SourceType_GetUniCondStr4Update(objSourceTypeEN: clsSourceTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and SourceTypeId <> '{0}'", objSourceTypeEN.sourceTypeId);
 strWhereCond +=  Format(" and SourceTypeName = '{0}'", objSourceTypeEN.sourceTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSourceTypeENS:源对象
 * @param objSourceTypeENT:目标对象
*/
export  function SourceType_CopyObjTo(objSourceTypeENS: clsSourceTypeEN , objSourceTypeENT: clsSourceTypeEN ): void 
{
objSourceTypeENT.sourceTypeId = objSourceTypeENS.sourceTypeId; //来源类型Id
objSourceTypeENT.sourceTypeName = objSourceTypeENS.sourceTypeName; //来源类型名称
objSourceTypeENT.memo = objSourceTypeENS.memo; //备注
objSourceTypeENT.sfUpdFldSetStr = objSourceTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSourceTypeENS:源对象
 * @param objSourceTypeENT:目标对象
*/
export  function SourceType_GetObjFromJsonObj(objSourceTypeENS: clsSourceTypeEN): clsSourceTypeEN 
{
 const objSourceTypeENT: clsSourceTypeEN = new clsSourceTypeEN();
ObjectAssign(objSourceTypeENT, objSourceTypeENS);
 return objSourceTypeENT;
}