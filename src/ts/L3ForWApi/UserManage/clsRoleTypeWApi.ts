
 /**
 * 类名:clsRoleTypeWApi
 * 表名:RoleType(01120994)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:40
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色类型(RoleType)
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
import { clsRoleTypeEN } from "@/ts/L0Entity/UserManage/clsRoleTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const roleType_Controller = "RoleTypeApi";
 export const roleType_ConstructorName = "roleType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRoleTypeId:关键字
 * @returns 对象
 **/
export  async function RoleType_GetObjByRoleTypeIdAsync(strRoleTypeId: string): Promise<clsRoleTypeEN|null>  
{
const strThisFuncName = "GetObjByRoleTypeIdAsync";

if (IsNullOrEmpty(strRoleTypeId) == true)
{
  const strMsg = Format("参数:[strRoleTypeId]不能为空!(In clsRoleTypeWApi.GetObjByRoleTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRoleTypeId]的长度:[{0}]不正确!(clsRoleTypeWApi.GetObjByRoleTypeIdAsync)", strRoleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByRoleTypeId";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRoleTypeId,
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
const objRoleType = RoleType_GetObjFromJsonObj(returnObj);
return objRoleType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param strRoleTypeId:所给的关键字
 * @returns 对象
*/
export  async function RoleType_GetObjByRoleTypeIdlocalStorage(strRoleTypeId: string) {
const strThisFuncName = "GetObjByRoleTypeIdlocalStorage";

if (IsNullOrEmpty(strRoleTypeId) == true)
{
  const strMsg = Format("参数:[strRoleTypeId]不能为空!(In clsRoleTypeWApi.GetObjByRoleTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRoleTypeId]的长度:[{0}]不正确!(clsRoleTypeWApi.GetObjByRoleTypeIdlocalStorage)", strRoleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsRoleTypeEN._CurrTabName, strRoleTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objRoleTypeCache: clsRoleTypeEN = JSON.parse(strTempObj);
return objRoleTypeCache;
}
try
{
const objRoleType = await RoleType_GetObjByRoleTypeIdAsync(strRoleTypeId);
if (objRoleType != null)
{
localStorage.setItem(strKey, JSON.stringify(objRoleType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objRoleType;
}
return objRoleType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strRoleTypeId, roleType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strRoleTypeId:所给的关键字
 * @returns 对象
*/
export  async function RoleType_GetObjByRoleTypeIdCache(strRoleTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByRoleTypeIdCache";

if (IsNullOrEmpty(strRoleTypeId) == true)
{
  const strMsg = Format("参数:[strRoleTypeId]不能为空!(In clsRoleTypeWApi.GetObjByRoleTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRoleTypeId]的长度:[{0}]不正确!(clsRoleTypeWApi.GetObjByRoleTypeIdCache)", strRoleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrRoleTypeObjLstCache = await RoleType_GetObjLstCache();
try
{
const arrRoleTypeSel = arrRoleTypeObjLstCache.filter(x => 
 x.roleTypeId == strRoleTypeId );
let objRoleType: clsRoleTypeEN;
if (arrRoleTypeSel.length > 0)
{
objRoleType = arrRoleTypeSel[0];
return objRoleType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objRoleTypeConst = await RoleType_GetObjByRoleTypeIdAsync(strRoleTypeId);
if (objRoleTypeConst != null)
{
RoleType_ReFreshThisCache();
return objRoleTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strRoleTypeId, roleType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objRoleType:所给的对象
 * @returns 对象
*/
export  async function RoleType_UpdateObjInLstCache(objRoleType: clsRoleTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrRoleTypeObjLstCache = await RoleType_GetObjLstCache();
const obj = arrRoleTypeObjLstCache.find(x => 
x.roleTypeId == objRoleType.roleTypeId);
if (obj != null)
{
objRoleType.roleTypeId = obj.roleTypeId;
ObjectAssign( obj, objRoleType);
}
else
{
arrRoleTypeObjLstCache.push(objRoleType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, roleType_ConstructorName, strThisFuncName);
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
export  function RoleType_SortFunDefa(a:clsRoleTypeEN , b:clsRoleTypeEN): number 
{
return a.roleTypeId.localeCompare(b.roleTypeId);
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
export  function RoleType_SortFunDefa2Fld(a:clsRoleTypeEN , b:clsRoleTypeEN): number 
{
if (a.roleTypeName == b.roleTypeName) return a.roleTypeEnName.localeCompare(b.roleTypeEnName);
else return a.roleTypeName.localeCompare(b.roleTypeName);
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
export  function RoleType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsRoleTypeEN.con_RoleTypeId:
return (a: clsRoleTypeEN, b: clsRoleTypeEN) => {
return a.roleTypeId.localeCompare(b.roleTypeId);
}
case clsRoleTypeEN.con_RoleTypeName:
return (a: clsRoleTypeEN, b: clsRoleTypeEN) => {
return a.roleTypeName.localeCompare(b.roleTypeName);
}
case clsRoleTypeEN.con_RoleTypeEnName:
return (a: clsRoleTypeEN, b: clsRoleTypeEN) => {
return a.roleTypeEnName.localeCompare(b.roleTypeEnName);
}
case clsRoleTypeEN.con_Memo:
return (a: clsRoleTypeEN, b: clsRoleTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RoleType]中不存在!(in ${ roleType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsRoleTypeEN.con_RoleTypeId:
return (a: clsRoleTypeEN, b: clsRoleTypeEN) => {
return b.roleTypeId.localeCompare(a.roleTypeId);
}
case clsRoleTypeEN.con_RoleTypeName:
return (a: clsRoleTypeEN, b: clsRoleTypeEN) => {
return b.roleTypeName.localeCompare(a.roleTypeName);
}
case clsRoleTypeEN.con_RoleTypeEnName:
return (a: clsRoleTypeEN, b: clsRoleTypeEN) => {
return b.roleTypeEnName.localeCompare(a.roleTypeEnName);
}
case clsRoleTypeEN.con_Memo:
return (a: clsRoleTypeEN, b: clsRoleTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RoleType]中不存在!(in ${ roleType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strRoleTypeId:所给的关键字
 * @returns 对象
*/
export  async function RoleType_GetNameByRoleTypeIdCache(strRoleTypeId: string) {

if (IsNullOrEmpty(strRoleTypeId) == true)
{
  const strMsg = Format("参数:[strRoleTypeId]不能为空!(In clsRoleTypeWApi.GetNameByRoleTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRoleTypeId]的长度:[{0}]不正确!(clsRoleTypeWApi.GetNameByRoleTypeIdCache)", strRoleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrRoleTypeObjLstCache = await RoleType_GetObjLstCache();
if (arrRoleTypeObjLstCache == null) return "";
try
{
const arrRoleTypeSel = arrRoleTypeObjLstCache.filter(x => 
 x.roleTypeId == strRoleTypeId );
let objRoleType: clsRoleTypeEN;
if (arrRoleTypeSel.length > 0)
{
objRoleType = arrRoleTypeSel[0];
return objRoleType.roleTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strRoleTypeId);
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
export  async function RoleType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsRoleTypeEN.con_RoleTypeId:
return (obj: clsRoleTypeEN) => {
return obj.roleTypeId === value;
}
case clsRoleTypeEN.con_RoleTypeName:
return (obj: clsRoleTypeEN) => {
return obj.roleTypeName === value;
}
case clsRoleTypeEN.con_RoleTypeEnName:
return (obj: clsRoleTypeEN) => {
return obj.roleTypeEnName === value;
}
case clsRoleTypeEN.con_Memo:
return (obj: clsRoleTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RoleType]中不存在!(in ${ roleType_ConstructorName}.${ strThisFuncName})`;
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
export  async function RoleType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsRoleTypeEN.con_RoleTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsRoleTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsRoleTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strRoleTypeId = strInValue;
if (IsNullOrEmpty(strRoleTypeId) == true)
{
return "";
}
const objRoleType = await RoleType_GetObjByRoleTypeIdCache(strRoleTypeId );
if (objRoleType == null) return "";
if (objRoleType.GetFldValue(strOutFldName) == null) return "";
return objRoleType.GetFldValue(strOutFldName).toString();
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
export  async function RoleType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsRoleTypeEN.con_RoleTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrRoleType = await RoleType_GetObjLstCache();
if (arrRoleType == null) return [];
let arrRoleTypeSel = arrRoleType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrRoleTypeSel = arrRoleTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrRoleTypeSel.length == 0) return [];
return arrRoleTypeSel.map(x=>x.roleTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RoleType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_GetFirstObjAsync(strWhereCond: string): Promise<clsRoleTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const objRoleType = RoleType_GetObjFromJsonObj(returnObj);
return objRoleType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRoleTypeEN._CurrTabName;
if (IsNullOrEmpty(clsRoleTypeEN.WhereFormat) == false)
{
strWhereCond = clsRoleTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsRoleTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRoleTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrRoleTypeExObjLstCache: Array<clsRoleTypeEN> = CacheHelper.Get(strKey);
const arrRoleTypeObjLstT = RoleType_GetObjLstByJSONObjLst(arrRoleTypeExObjLstCache);
return arrRoleTypeObjLstT;
}
try
{
const arrRoleTypeExObjLst = await RoleType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrRoleTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRoleTypeExObjLst.length);
console.log(strInfo);
return arrRoleTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, roleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RoleType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRoleTypeEN._CurrTabName;
if (IsNullOrEmpty(clsRoleTypeEN.WhereFormat) == false)
{
strWhereCond = clsRoleTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsRoleTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRoleTypeEN.CacheAddiCondition);
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
const arrRoleTypeExObjLstCache: Array<clsRoleTypeEN> = JSON.parse(strTempObjLst);
const arrRoleTypeObjLstT = RoleType_GetObjLstByJSONObjLst(arrRoleTypeExObjLstCache);
return arrRoleTypeObjLstT;
}
try
{
const arrRoleTypeExObjLst = await RoleType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrRoleTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRoleTypeExObjLst.length);
console.log(strInfo);
return arrRoleTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, roleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RoleType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRoleTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrRoleTypeObjLstCache: Array<clsRoleTypeEN> = JSON.parse(strTempObjLst);
return arrRoleTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function RoleType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRoleTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", roleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RoleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRoleTypeEN._CurrTabName;
if (IsNullOrEmpty(clsRoleTypeEN.WhereFormat) == false)
{
strWhereCond = clsRoleTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsRoleTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRoleTypeEN.CacheAddiCondition);
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
const arrRoleTypeExObjLstCache: Array<clsRoleTypeEN> = JSON.parse(strTempObjLst);
const arrRoleTypeObjLstT = RoleType_GetObjLstByJSONObjLst(arrRoleTypeExObjLstCache);
return arrRoleTypeObjLstT;
}
try
{
const arrRoleTypeExObjLst = await RoleType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrRoleTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRoleTypeExObjLst.length);
console.log(strInfo);
return arrRoleTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, roleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RoleType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRoleTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrRoleTypeObjLstCache: Array<clsRoleTypeEN> = JSON.parse(strTempObjLst);
return arrRoleTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RoleType_GetObjLstCache(): Promise<Array<clsRoleTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrRoleTypeObjLstCache;
switch (clsRoleTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrRoleTypeObjLstCache = await RoleType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrRoleTypeObjLstCache = await RoleType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrRoleTypeObjLstCache = await RoleType_GetObjLstClientCache();
break;
default:
arrRoleTypeObjLstCache = await RoleType_GetObjLstClientCache();
break;
}
return arrRoleTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RoleType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrRoleTypeObjLstCache;
switch (clsRoleTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrRoleTypeObjLstCache = await RoleType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrRoleTypeObjLstCache = await RoleType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrRoleTypeObjLstCache = null;
break;
default:
arrRoleTypeObjLstCache = null;
break;
}
return arrRoleTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRoleTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function RoleType_GetSubObjLstCache(objRoleTypeCond: clsRoleTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrRoleTypeObjLstCache = await RoleType_GetObjLstCache();
let arrRoleTypeSel = arrRoleTypeObjLstCache;
if (objRoleTypeCond.sfFldComparisonOp == null || objRoleTypeCond.sfFldComparisonOp == "") return arrRoleTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRoleTypeCond.sfFldComparisonOp);
//console.log("clsRoleTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRoleTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRoleTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRoleTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objRoleTypeCond), roleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRoleTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRoleTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function RoleType_GetObjLstByRoleTypeIdLstAsync(arrRoleTypeId: Array<string>): Promise<Array<clsRoleTypeEN>>  
{
const strThisFuncName = "GetObjLstByRoleTypeIdLstAsync";
const strAction = "GetObjLstByRoleTypeIdLst";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrRoleTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", roleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RoleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param arrstrRoleTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function RoleType_GetObjLstByRoleTypeIdLstCache(arrRoleTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByRoleTypeIdLstCache";
try
{
const arrRoleTypeObjLstCache = await RoleType_GetObjLstCache();
const arrRoleTypeSel = arrRoleTypeObjLstCache.filter(x => arrRoleTypeIdLst.indexOf(x.roleTypeId)>-1);
return arrRoleTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrRoleTypeIdLst.join(","), roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsRoleTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", roleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RoleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsRoleTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", roleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RoleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsRoleTypeEN>();
const arrRoleTypeObjLstCache = await RoleType_GetObjLstCache();
if (arrRoleTypeObjLstCache.length == 0) return arrRoleTypeObjLstCache;
let arrRoleTypeSel = arrRoleTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objRoleTypeCond = new clsRoleTypeEN();
ObjectAssign(objRoleTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsRoleTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRoleTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRoleTypeSel = arrRoleTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRoleTypeSel.length == 0) return arrRoleTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrRoleTypeSel = arrRoleTypeSel.sort(RoleType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrRoleTypeSel = arrRoleTypeSel.sort(objPagerPara.sortFun);
}
arrRoleTypeSel = arrRoleTypeSel.slice(intStart, intEnd);     
return arrRoleTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, roleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRoleTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function RoleType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsRoleTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsRoleTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", roleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RoleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param strRoleTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function RoleType_DelRecordAsync(strRoleTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(roleType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strRoleTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param arrRoleTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function RoleType_DelRoleTypesAsync(arrRoleTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRoleTypesAsync";
const strAction = "DelRoleTypes";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrRoleTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_DelRoleTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelRoleTypesByCondAsync";
const strAction = "DelRoleTypesByCond";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param objRoleTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RoleType_AddNewRecordAsync(objRoleTypeEN: clsRoleTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objRoleTypeEN.roleTypeId === null || objRoleTypeEN.roleTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objRoleTypeEN);
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param objRoleTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RoleType_AddNewRecordWithMaxIdAsync(objRoleTypeEN: clsRoleTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_AddNewObjSave(objRoleTypeEN: clsRoleTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
RoleType_CheckPropertyNew(objRoleTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ roleType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await RoleType_IsExistAsync(objRoleTypeEN.roleTypeId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objRoleTypeEN.roleTypeId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await RoleType_AddNewRecordAsync(objRoleTypeEN);
if (returnBool == true)
{
RoleType_ReFreshCache();
}
else
{
const strInfo = `添加[角色类型(RoleType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objRoleTypeEN.roleTypeId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ roleType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function RoleType_UpdateObjSave(objRoleTypeEN: clsRoleTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objRoleTypeEN.sfUpdFldSetStr = objRoleTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objRoleTypeEN.roleTypeId == "" || objRoleTypeEN.roleTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
RoleType_CheckProperty4Update(objRoleTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ roleType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await RoleType_UpdateRecordAsync(objRoleTypeEN);
if (returnBool == true)
{
RoleType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ roleType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objRoleTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function RoleType_AddNewRecordWithReturnKeyAsync(objRoleTypeEN: clsRoleTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param objRoleTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RoleType_UpdateRecordAsync(objRoleTypeEN: clsRoleTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objRoleTypeEN.sfUpdFldSetStr === undefined || objRoleTypeEN.sfUpdFldSetStr === null || objRoleTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRoleTypeEN.roleTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param objRoleTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RoleType_EditRecordExAsync(objRoleTypeEN: clsRoleTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objRoleTypeEN.sfUpdFldSetStr === undefined || objRoleTypeEN.sfUpdFldSetStr === null || objRoleTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRoleTypeEN.roleTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param objRoleTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RoleType_UpdateWithConditionAsync(objRoleTypeEN: clsRoleTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objRoleTypeEN.sfUpdFldSetStr === undefined || objRoleTypeEN.sfUpdFldSetStr === null || objRoleTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRoleTypeEN.roleTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(roleType_Controller, strAction);
objRoleTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param objstrRoleTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function RoleType_IsExistRecordCache(objRoleTypeCond: clsRoleTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrRoleTypeObjLstCache = await RoleType_GetObjLstCache();
if (arrRoleTypeObjLstCache == null) return false;
let arrRoleTypeSel = arrRoleTypeObjLstCache;
if (objRoleTypeCond.sfFldComparisonOp == null || objRoleTypeCond.sfFldComparisonOp == "") return arrRoleTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRoleTypeCond.sfFldComparisonOp);
//console.log("clsRoleTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRoleTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRoleTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRoleTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objRoleTypeCond), roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param strRoleTypeId:所给的关键字
 * @returns 对象
*/
export  async function RoleType_IsExistCache(strRoleTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrRoleTypeObjLstCache = await RoleType_GetObjLstCache();
if (arrRoleTypeObjLstCache == null) return false;
try
{
const arrRoleTypeSel = arrRoleTypeObjLstCache.filter(x => x.roleTypeId == strRoleTypeId);
if (arrRoleTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strRoleTypeId, roleType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strRoleTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function RoleType_IsExistAsync(strRoleTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRoleTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
 * @param objRoleTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function RoleType_GetRecCountByCondCache(objRoleTypeCond: clsRoleTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrRoleTypeObjLstCache = await RoleType_GetObjLstCache();
if (arrRoleTypeObjLstCache == null) return 0;
let arrRoleTypeSel = arrRoleTypeObjLstCache;
if (objRoleTypeCond.sfFldComparisonOp == null || objRoleTypeCond.sfFldComparisonOp == "") return arrRoleTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRoleTypeCond.sfFldComparisonOp);
//console.log("clsRoleTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRoleTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRoleTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRoleTypeSel = arrRoleTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRoleTypeSel = arrRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRoleTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objRoleTypeCond), roleType_ConstructorName, strThisFuncName);
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
export  async function RoleType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(roleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, roleType_ConstructorName, strThisFuncName);
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
export  function RoleType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function RoleType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsRoleTypeEN._CurrTabName;
switch (clsRoleTypeEN.CacheModeId)
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
clsRoleTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function RoleType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsRoleTypeEN._CurrTabName;
switch (clsRoleTypeEN.CacheModeId)
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
clsRoleTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function RoleType_GetLastRefreshTime():string
{
if (clsRoleTypeEN._RefreshTimeLst.length == 0) return "";
return clsRoleTypeEN._RefreshTimeLst[clsRoleTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function RoleType_BindDdl_RoleTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_RoleTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_RoleTypeIdInDivCache");
const arrObjLstSel = await RoleType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsRoleTypeEN.con_RoleTypeId, clsRoleTypeEN.con_RoleTypeName, "选角色类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function RoleType_GetArrRoleType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_RoleTypeIdInDivCache");
const arrRoleType = new Array<clsRoleTypeEN>();
const arrObjLstSel = await RoleType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsRoleTypeEN();
obj0.roleTypeId = '0';
obj0.roleTypeName = '选角色类型...';
arrRoleType.push(obj0);
arrObjLstSel.forEach(x => arrRoleType.push(x));
return arrRoleType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RoleType_CheckPropertyNew(pobjRoleTypeEN: clsRoleTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[角色类型名]不能为空(In 角色类型)!(clsRoleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeEnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[角色类型英文名]不能为空(In 角色类型)!(clsRoleTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeId) == false && GetStrLen(pobjRoleTypeEN.roleTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[角色类型Id(roleTypeId)]的长度不能超过2(In 角色类型(RoleType))!值:${pobjRoleTypeEN.roleTypeId}(clsRoleTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeName) == false && GetStrLen(pobjRoleTypeEN.roleTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[角色类型名(roleTypeName)]的长度不能超过50(In 角色类型(RoleType))!值:${pobjRoleTypeEN.roleTypeName}(clsRoleTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeEnName) == false && GetStrLen(pobjRoleTypeEN.roleTypeEnName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[角色类型英文名(roleTypeEnName)]的长度不能超过50(In 角色类型(RoleType))!值:${pobjRoleTypeEN.roleTypeEnName}(clsRoleTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.memo) == false && GetStrLen(pobjRoleTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 角色类型(RoleType))!值:${pobjRoleTypeEN.memo}(clsRoleTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeId) == false && undefined !== pobjRoleTypeEN.roleTypeId && tzDataType.isString(pobjRoleTypeEN.roleTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色类型Id(roleTypeId)]的值:[${pobjRoleTypeEN.roleTypeId}], 非法,应该为字符型(In 角色类型(RoleType))!(clsRoleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeName) == false && undefined !== pobjRoleTypeEN.roleTypeName && tzDataType.isString(pobjRoleTypeEN.roleTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色类型名(roleTypeName)]的值:[${pobjRoleTypeEN.roleTypeName}], 非法,应该为字符型(In 角色类型(RoleType))!(clsRoleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeEnName) == false && undefined !== pobjRoleTypeEN.roleTypeEnName && tzDataType.isString(pobjRoleTypeEN.roleTypeEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色类型英文名(roleTypeEnName)]的值:[${pobjRoleTypeEN.roleTypeEnName}], 非法,应该为字符型(In 角色类型(RoleType))!(clsRoleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.memo) == false && undefined !== pobjRoleTypeEN.memo && tzDataType.isString(pobjRoleTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjRoleTypeEN.memo}], 非法,应该为字符型(In 角色类型(RoleType))!(clsRoleTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RoleType_CheckProperty4Update(pobjRoleTypeEN: clsRoleTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeId) == false && GetStrLen(pobjRoleTypeEN.roleTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[角色类型Id(roleTypeId)]的长度不能超过2(In 角色类型(RoleType))!值:${pobjRoleTypeEN.roleTypeId}(clsRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeName) == false && GetStrLen(pobjRoleTypeEN.roleTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[角色类型名(roleTypeName)]的长度不能超过50(In 角色类型(RoleType))!值:${pobjRoleTypeEN.roleTypeName}(clsRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeEnName) == false && GetStrLen(pobjRoleTypeEN.roleTypeEnName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[角色类型英文名(roleTypeEnName)]的长度不能超过50(In 角色类型(RoleType))!值:${pobjRoleTypeEN.roleTypeEnName}(clsRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.memo) == false && GetStrLen(pobjRoleTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 角色类型(RoleType))!值:${pobjRoleTypeEN.memo}(clsRoleTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeId) == false && undefined !== pobjRoleTypeEN.roleTypeId && tzDataType.isString(pobjRoleTypeEN.roleTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色类型Id(roleTypeId)]的值:[${pobjRoleTypeEN.roleTypeId}], 非法,应该为字符型(In 角色类型(RoleType))!(clsRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeName) == false && undefined !== pobjRoleTypeEN.roleTypeName && tzDataType.isString(pobjRoleTypeEN.roleTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色类型名(roleTypeName)]的值:[${pobjRoleTypeEN.roleTypeName}], 非法,应该为字符型(In 角色类型(RoleType))!(clsRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeEnName) == false && undefined !== pobjRoleTypeEN.roleTypeEnName && tzDataType.isString(pobjRoleTypeEN.roleTypeEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色类型英文名(roleTypeEnName)]的值:[${pobjRoleTypeEN.roleTypeEnName}], 非法,应该为字符型(In 角色类型(RoleType))!(clsRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRoleTypeEN.memo) == false && undefined !== pobjRoleTypeEN.memo && tzDataType.isString(pobjRoleTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjRoleTypeEN.memo}], 非法,应该为字符型(In 角色类型(RoleType))!(clsRoleTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjRoleTypeEN.roleTypeId) === true )
{
 throw new Error(`(errid:Watl000064)字段[角色类型Id]不能为空(In 角色类型)!(clsRoleTypeBL:CheckProperty4Update)`);
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
export  function RoleType_GetJSONStrByObj (pobjRoleTypeEN: clsRoleTypeEN): string
{
pobjRoleTypeEN.sfUpdFldSetStr = pobjRoleTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjRoleTypeEN);
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
export  function RoleType_GetObjLstByJSONStr (strJSON: string): Array<clsRoleTypeEN>
{
let arrRoleTypeObjLst = new Array<clsRoleTypeEN>();
if (strJSON === "")
{
return arrRoleTypeObjLst;
}
try
{
arrRoleTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrRoleTypeObjLst;
}
return arrRoleTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRoleTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function RoleType_GetObjLstByJSONObjLst (arrRoleTypeObjLstS: Array<clsRoleTypeEN>): Array<clsRoleTypeEN>
{
const arrRoleTypeObjLst = new Array<clsRoleTypeEN>();
for (const objInFor of arrRoleTypeObjLstS) {
const obj1 = RoleType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrRoleTypeObjLst.push(obj1);
}
return arrRoleTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RoleType_GetObjByJSONStr (strJSON: string): clsRoleTypeEN
{
let pobjRoleTypeEN = new clsRoleTypeEN();
if (strJSON === "")
{
return pobjRoleTypeEN;
}
try
{
pobjRoleTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjRoleTypeEN;
}
return pobjRoleTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function RoleType_GetCombineCondition(objRoleTypeCond: clsRoleTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objRoleTypeCond.dicFldComparisonOp, clsRoleTypeEN.con_RoleTypeId) == true)
{
const strComparisonOpRoleTypeId:string = objRoleTypeCond.dicFldComparisonOp[clsRoleTypeEN.con_RoleTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRoleTypeEN.con_RoleTypeId, objRoleTypeCond.roleTypeId, strComparisonOpRoleTypeId);
}
if (Object.prototype.hasOwnProperty.call(objRoleTypeCond.dicFldComparisonOp, clsRoleTypeEN.con_RoleTypeName) == true)
{
const strComparisonOpRoleTypeName:string = objRoleTypeCond.dicFldComparisonOp[clsRoleTypeEN.con_RoleTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsRoleTypeEN.con_RoleTypeName, objRoleTypeCond.roleTypeName, strComparisonOpRoleTypeName);
}
if (Object.prototype.hasOwnProperty.call(objRoleTypeCond.dicFldComparisonOp, clsRoleTypeEN.con_RoleTypeEnName) == true)
{
const strComparisonOpRoleTypeEnName:string = objRoleTypeCond.dicFldComparisonOp[clsRoleTypeEN.con_RoleTypeEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsRoleTypeEN.con_RoleTypeEnName, objRoleTypeCond.roleTypeEnName, strComparisonOpRoleTypeEnName);
}
if (Object.prototype.hasOwnProperty.call(objRoleTypeCond.dicFldComparisonOp, clsRoleTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objRoleTypeCond.dicFldComparisonOp[clsRoleTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsRoleTypeEN.con_Memo, objRoleTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRoleTypeENS:源对象
 * @param objRoleTypeENT:目标对象
*/
export  function RoleType_CopyObjTo(objRoleTypeENS: clsRoleTypeEN , objRoleTypeENT: clsRoleTypeEN ): void 
{
objRoleTypeENT.roleTypeId = objRoleTypeENS.roleTypeId; //角色类型Id
objRoleTypeENT.roleTypeName = objRoleTypeENS.roleTypeName; //角色类型名
objRoleTypeENT.roleTypeEnName = objRoleTypeENS.roleTypeEnName; //角色类型英文名
objRoleTypeENT.memo = objRoleTypeENS.memo; //备注
objRoleTypeENT.sfUpdFldSetStr = objRoleTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRoleTypeENS:源对象
 * @param objRoleTypeENT:目标对象
*/
export  function RoleType_GetObjFromJsonObj(objRoleTypeENS: clsRoleTypeEN): clsRoleTypeEN 
{
 const objRoleTypeENT: clsRoleTypeEN = new clsRoleTypeEN();
ObjectAssign(objRoleTypeENT, objRoleTypeENS);
 return objRoleTypeENT;
}