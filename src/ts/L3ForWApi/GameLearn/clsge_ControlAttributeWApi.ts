
 /**
 * 类名:clsge_ControlAttributeWApi
 * 表名:ge_ControlAttribute(01120914)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:31
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
 * 属性表(ge_ControlAttribute)
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
import { clsge_ControlAttributeEN } from "@/ts/L0Entity/GameLearn/clsge_ControlAttributeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_ControlAttribute_Controller = "ge_ControlAttributeApi";
 export const ge_ControlAttribute_ConstructorName = "ge_ControlAttribute";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strAttributeId:关键字
 * @returns 对象
 **/
export  async function ge_ControlAttribute_GetObjByAttributeIdAsync(strAttributeId: string): Promise<clsge_ControlAttributeEN|null>  
{
const strThisFuncName = "GetObjByAttributeIdAsync";

if (IsNullOrEmpty(strAttributeId) == true)
{
  const strMsg = Format("参数:[strAttributeId]不能为空!(In clsge_ControlAttributeWApi.GetObjByAttributeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strAttributeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strAttributeId]的长度:[{0}]不正确!(clsge_ControlAttributeWApi.GetObjByAttributeIdAsync)", strAttributeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByAttributeId";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strAttributeId,
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
const objge_ControlAttribute = ge_ControlAttribute_GetObjFromJsonObj(returnObj);
return objge_ControlAttribute;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param strAttributeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ControlAttribute_GetObjByAttributeIdlocalStorage(strAttributeId: string) {
const strThisFuncName = "GetObjByAttributeIdlocalStorage";

if (IsNullOrEmpty(strAttributeId) == true)
{
  const strMsg = Format("参数:[strAttributeId]不能为空!(In clsge_ControlAttributeWApi.GetObjByAttributeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strAttributeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strAttributeId]的长度:[{0}]不正确!(clsge_ControlAttributeWApi.GetObjByAttributeIdlocalStorage)", strAttributeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_ControlAttributeEN._CurrTabName, strAttributeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_ControlAttributeCache: clsge_ControlAttributeEN = JSON.parse(strTempObj);
return objge_ControlAttributeCache;
}
try
{
const objge_ControlAttribute = await ge_ControlAttribute_GetObjByAttributeIdAsync(strAttributeId);
if (objge_ControlAttribute != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_ControlAttribute));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_ControlAttribute;
}
return objge_ControlAttribute;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strAttributeId, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strAttributeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ControlAttribute_GetObjByAttributeIdCache(strAttributeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByAttributeIdCache";

if (IsNullOrEmpty(strAttributeId) == true)
{
  const strMsg = Format("参数:[strAttributeId]不能为空!(In clsge_ControlAttributeWApi.GetObjByAttributeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strAttributeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strAttributeId]的长度:[{0}]不正确!(clsge_ControlAttributeWApi.GetObjByAttributeIdCache)", strAttributeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstCache();
try
{
const arrge_ControlAttributeSel = arrge_ControlAttributeObjLstCache.filter(x => 
 x.attributeId == strAttributeId );
let objge_ControlAttribute: clsge_ControlAttributeEN;
if (arrge_ControlAttributeSel.length > 0)
{
objge_ControlAttribute = arrge_ControlAttributeSel[0];
return objge_ControlAttribute;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_ControlAttributeConst = await ge_ControlAttribute_GetObjByAttributeIdAsync(strAttributeId);
if (objge_ControlAttributeConst != null)
{
ge_ControlAttribute_ReFreshThisCache();
return objge_ControlAttributeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strAttributeId, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_ControlAttribute:所给的对象
 * @returns 对象
*/
export  async function ge_ControlAttribute_UpdateObjInLstCache(objge_ControlAttribute: clsge_ControlAttributeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstCache();
const obj = arrge_ControlAttributeObjLstCache.find(x => x.attributeId == objge_ControlAttribute.attributeId);
if (obj != null)
{
objge_ControlAttribute.attributeId = obj.attributeId;
ObjectAssign( obj, objge_ControlAttribute);
}
else
{
arrge_ControlAttributeObjLstCache.push(objge_ControlAttribute);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  function ge_ControlAttribute_SortFunDefa(a:clsge_ControlAttributeEN , b:clsge_ControlAttributeEN): number 
{
return a.attributeId.localeCompare(b.attributeId);
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
export  function ge_ControlAttribute_SortFunDefa2Fld(a:clsge_ControlAttributeEN , b:clsge_ControlAttributeEN): number 
{
if (a.controlAttributeName == b.controlAttributeName) return a.updDate.localeCompare(b.updDate);
else return a.controlAttributeName.localeCompare(b.controlAttributeName);
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
export  function ge_ControlAttribute_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_ControlAttributeEN.con_AttributeId:
return (a: clsge_ControlAttributeEN, b: clsge_ControlAttributeEN) => {
return a.attributeId.localeCompare(b.attributeId);
}
case clsge_ControlAttributeEN.con_ControlAttributeName:
return (a: clsge_ControlAttributeEN, b: clsge_ControlAttributeEN) => {
if (a.controlAttributeName == null) return -1;
if (b.controlAttributeName == null) return 1;
return a.controlAttributeName.localeCompare(b.controlAttributeName);
}
case clsge_ControlAttributeEN.con_UpdDate:
return (a: clsge_ControlAttributeEN, b: clsge_ControlAttributeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_ControlAttributeEN.con_UpdUser:
return (a: clsge_ControlAttributeEN, b: clsge_ControlAttributeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_ControlAttributeEN.con_Memo:
return (a: clsge_ControlAttributeEN, b: clsge_ControlAttributeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ControlAttribute]中不存在!(in ${ ge_ControlAttribute_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_ControlAttributeEN.con_AttributeId:
return (a: clsge_ControlAttributeEN, b: clsge_ControlAttributeEN) => {
return b.attributeId.localeCompare(a.attributeId);
}
case clsge_ControlAttributeEN.con_ControlAttributeName:
return (a: clsge_ControlAttributeEN, b: clsge_ControlAttributeEN) => {
if (b.controlAttributeName == null) return -1;
if (a.controlAttributeName == null) return 1;
return b.controlAttributeName.localeCompare(a.controlAttributeName);
}
case clsge_ControlAttributeEN.con_UpdDate:
return (a: clsge_ControlAttributeEN, b: clsge_ControlAttributeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_ControlAttributeEN.con_UpdUser:
return (a: clsge_ControlAttributeEN, b: clsge_ControlAttributeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_ControlAttributeEN.con_Memo:
return (a: clsge_ControlAttributeEN, b: clsge_ControlAttributeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ControlAttribute]中不存在!(in ${ ge_ControlAttribute_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strAttributeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ControlAttribute_GetNameByAttributeIdCache(strAttributeId: string) {

if (IsNullOrEmpty(strAttributeId) == true)
{
  const strMsg = Format("参数:[strAttributeId]不能为空!(In clsge_ControlAttributeWApi.GetNameByAttributeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strAttributeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strAttributeId]的长度:[{0}]不正确!(clsge_ControlAttributeWApi.GetNameByAttributeIdCache)", strAttributeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstCache();
if (arrge_ControlAttributeObjLstCache == null) return "";
try
{
const arrge_ControlAttributeSel = arrge_ControlAttributeObjLstCache.filter(x => 
 x.attributeId == strAttributeId );
let objge_ControlAttribute: clsge_ControlAttributeEN;
if (arrge_ControlAttributeSel.length > 0)
{
objge_ControlAttribute = arrge_ControlAttributeSel[0];
return objge_ControlAttribute.controlAttributeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strAttributeId);
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
export  async function ge_ControlAttribute_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_ControlAttributeEN.con_AttributeId:
return (obj: clsge_ControlAttributeEN) => {
return obj.attributeId === value;
}
case clsge_ControlAttributeEN.con_ControlAttributeName:
return (obj: clsge_ControlAttributeEN) => {
return obj.controlAttributeName === value;
}
case clsge_ControlAttributeEN.con_UpdDate:
return (obj: clsge_ControlAttributeEN) => {
return obj.updDate === value;
}
case clsge_ControlAttributeEN.con_UpdUser:
return (obj: clsge_ControlAttributeEN) => {
return obj.updUser === value;
}
case clsge_ControlAttributeEN.con_Memo:
return (obj: clsge_ControlAttributeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ControlAttribute]中不存在!(in ${ ge_ControlAttribute_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_ControlAttribute_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsge_ControlAttributeEN.con_AttributeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_ControlAttributeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_ControlAttributeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strAttributeId = strInValue;
if (IsNullOrEmpty(strAttributeId) == true)
{
return "";
}
const objge_ControlAttribute = await ge_ControlAttribute_GetObjByAttributeIdCache(strAttributeId );
if (objge_ControlAttribute == null) return "";
if (objge_ControlAttribute.GetFldValue(strOutFldName) == null) return "";
return objge_ControlAttribute.GetFldValue(strOutFldName).toString();
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
export  async function ge_ControlAttribute_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsge_ControlAttributeEN.con_AttributeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_ControlAttribute = await ge_ControlAttribute_GetObjLstCache();
if (arrge_ControlAttribute == null) return [];
let arrge_ControlAttributeSel = arrge_ControlAttribute;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_ControlAttributeSel.length == 0) return [];
return arrge_ControlAttributeSel.map(x=>x.attributeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_ControlAttribute_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_GetFirstObjAsync(strWhereCond: string): Promise<clsge_ControlAttributeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const objge_ControlAttribute = ge_ControlAttribute_GetObjFromJsonObj(returnObj);
return objge_ControlAttribute;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_ControlAttributeEN._CurrTabName;
if (IsNullOrEmpty(clsge_ControlAttributeEN.WhereFormat) == false)
{
strWhereCond = clsge_ControlAttributeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_ControlAttributeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ControlAttributeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_ControlAttributeExObjLstCache: Array<clsge_ControlAttributeEN> = CacheHelper.Get(strKey);
const arrge_ControlAttributeObjLstT = ge_ControlAttribute_GetObjLstByJSONObjLst(arrge_ControlAttributeExObjLstCache);
return arrge_ControlAttributeObjLstT;
}
try
{
const arrge_ControlAttributeExObjLst = await ge_ControlAttribute_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_ControlAttributeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ControlAttributeExObjLst.length);
console.log(strInfo);
return arrge_ControlAttributeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ControlAttribute_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_ControlAttributeEN._CurrTabName;
if (IsNullOrEmpty(clsge_ControlAttributeEN.WhereFormat) == false)
{
strWhereCond = clsge_ControlAttributeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_ControlAttributeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ControlAttributeEN.CacheAddiCondition);
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
const arrge_ControlAttributeExObjLstCache: Array<clsge_ControlAttributeEN> = JSON.parse(strTempObjLst);
const arrge_ControlAttributeObjLstT = ge_ControlAttribute_GetObjLstByJSONObjLst(arrge_ControlAttributeExObjLstCache);
return arrge_ControlAttributeObjLstT;
}
try
{
const arrge_ControlAttributeExObjLst = await ge_ControlAttribute_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_ControlAttributeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ControlAttributeExObjLst.length);
console.log(strInfo);
return arrge_ControlAttributeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ControlAttribute_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_ControlAttributeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_ControlAttributeObjLstCache: Array<clsge_ControlAttributeEN> = JSON.parse(strTempObjLst);
return arrge_ControlAttributeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_ControlAttribute_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_ControlAttributeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ControlAttribute_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_ControlAttributeEN._CurrTabName;
if (IsNullOrEmpty(clsge_ControlAttributeEN.WhereFormat) == false)
{
strWhereCond = clsge_ControlAttributeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_ControlAttributeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ControlAttributeEN.CacheAddiCondition);
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
const arrge_ControlAttributeExObjLstCache: Array<clsge_ControlAttributeEN> = JSON.parse(strTempObjLst);
const arrge_ControlAttributeObjLstT = ge_ControlAttribute_GetObjLstByJSONObjLst(arrge_ControlAttributeExObjLstCache);
return arrge_ControlAttributeObjLstT;
}
try
{
const arrge_ControlAttributeExObjLst = await ge_ControlAttribute_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_ControlAttributeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ControlAttributeExObjLst.length);
console.log(strInfo);
return arrge_ControlAttributeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ControlAttribute_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_ControlAttributeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_ControlAttributeObjLstCache: Array<clsge_ControlAttributeEN> = JSON.parse(strTempObjLst);
return arrge_ControlAttributeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ControlAttribute_GetObjLstCache(): Promise<Array<clsge_ControlAttributeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrge_ControlAttributeObjLstCache;
switch (clsge_ControlAttributeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstClientCache();
break;
default:
arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstClientCache();
break;
}
return arrge_ControlAttributeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ControlAttribute_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_ControlAttributeObjLstCache;
switch (clsge_ControlAttributeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrge_ControlAttributeObjLstCache = null;
break;
default:
arrge_ControlAttributeObjLstCache = null;
break;
}
return arrge_ControlAttributeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrAttributeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_ControlAttribute_GetSubObjLstCache(objge_ControlAttributeCond: clsge_ControlAttributeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstCache();
let arrge_ControlAttributeSel = arrge_ControlAttributeObjLstCache;
if (objge_ControlAttributeCond.sfFldComparisonOp == null || objge_ControlAttributeCond.sfFldComparisonOp == "") return arrge_ControlAttributeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ControlAttributeCond.sfFldComparisonOp);
//console.log("clsge_ControlAttributeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ControlAttributeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ControlAttributeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_ControlAttributeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_ControlAttributeCond), ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_ControlAttributeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrAttributeId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_ControlAttribute_GetObjLstByAttributeIdLstAsync(arrAttributeId: Array<string>): Promise<Array<clsge_ControlAttributeEN>>  
{
const strThisFuncName = "GetObjLstByAttributeIdLstAsync";
const strAction = "GetObjLstByAttributeIdLst";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrAttributeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ControlAttribute_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param arrstrAttributeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_ControlAttribute_GetObjLstByAttributeIdLstCache(arrAttributeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByAttributeIdLstCache";
try
{
const arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstCache();
const arrge_ControlAttributeSel = arrge_ControlAttributeObjLstCache.filter(x => arrAttributeIdLst.indexOf(x.attributeId)>-1);
return arrge_ControlAttributeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrAttributeIdLst.join(","), ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_ControlAttributeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ControlAttribute_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_ControlAttributeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ControlAttribute_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_ControlAttributeEN>();
const arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstCache();
if (arrge_ControlAttributeObjLstCache.length == 0) return arrge_ControlAttributeObjLstCache;
let arrge_ControlAttributeSel = arrge_ControlAttributeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_ControlAttributeCond = new clsge_ControlAttributeEN();
ObjectAssign(objge_ControlAttributeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_ControlAttributeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ControlAttributeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_ControlAttributeSel.length == 0) return arrge_ControlAttributeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_ControlAttributeSel = arrge_ControlAttributeSel.sort(ge_ControlAttribute_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_ControlAttributeSel = arrge_ControlAttributeSel.sort(objPagerPara.sortFun);
}
arrge_ControlAttributeSel = arrge_ControlAttributeSel.slice(intStart, intEnd);     
return arrge_ControlAttributeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_ControlAttributeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_ControlAttribute_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_ControlAttributeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_ControlAttributeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ControlAttribute_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param strAttributeId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_ControlAttribute_DelRecordAsync(strAttributeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strAttributeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param arrAttributeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_ControlAttribute_Delge_ControlAttributesAsync(arrAttributeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_ControlAttributesAsync";
const strAction = "Delge_ControlAttributes";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrAttributeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_Delge_ControlAttributesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_ControlAttributesByCondAsync";
const strAction = "Delge_ControlAttributesByCond";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param objge_ControlAttributeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ControlAttribute_AddNewRecordAsync(objge_ControlAttributeEN: clsge_ControlAttributeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_ControlAttributeEN);
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlAttributeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param objge_ControlAttributeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ControlAttribute_AddNewRecordWithMaxIdAsync(objge_ControlAttributeEN: clsge_ControlAttributeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlAttributeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_AddNewObjSave(objge_ControlAttributeEN: clsge_ControlAttributeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_ControlAttribute_CheckPropertyNew(objge_ControlAttributeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_ControlAttribute_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_ControlAttribute_CheckUniCond4Add(objge_ControlAttributeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_ControlAttribute_AddNewRecordWithMaxIdAsync(objge_ControlAttributeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
ge_ControlAttribute_ReFreshCache();
}
else
{
const strInfo = `添加[属性表(ge_ControlAttribute)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_ControlAttribute_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_ControlAttribute_CheckUniCond4Add(objge_ControlAttributeEN: clsge_ControlAttributeEN): Promise<boolean>{
const strUniquenessCondition = ge_ControlAttribute_GetUniCondStr(objge_ControlAttributeEN);
const bolIsExistCondition = await ge_ControlAttribute_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_ControlAttribute_CheckUniCond4Update(objge_ControlAttributeEN: clsge_ControlAttributeEN): Promise<boolean>{
const strUniquenessCondition = ge_ControlAttribute_GetUniCondStr4Update(objge_ControlAttributeEN);
const bolIsExistCondition = await ge_ControlAttribute_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_ControlAttribute_UpdateObjSave(objge_ControlAttributeEN: clsge_ControlAttributeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_ControlAttributeEN.sfUpdFldSetStr = objge_ControlAttributeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_ControlAttributeEN.attributeId == "" || objge_ControlAttributeEN.attributeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_ControlAttribute_CheckProperty4Update(objge_ControlAttributeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_ControlAttribute_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_ControlAttribute_CheckUniCond4Update(objge_ControlAttributeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_ControlAttribute_UpdateRecordAsync(objge_ControlAttributeEN);
if (returnBool == true)
{
ge_ControlAttribute_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_ControlAttribute_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_ControlAttributeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_ControlAttribute_AddNewRecordWithReturnKeyAsync(objge_ControlAttributeEN: clsge_ControlAttributeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlAttributeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param objge_ControlAttributeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_ControlAttribute_UpdateRecordAsync(objge_ControlAttributeEN: clsge_ControlAttributeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_ControlAttributeEN.sfUpdFldSetStr === undefined || objge_ControlAttributeEN.sfUpdFldSetStr === null || objge_ControlAttributeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ControlAttributeEN.attributeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlAttributeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param objge_ControlAttributeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_ControlAttribute_EditRecordExAsync(objge_ControlAttributeEN: clsge_ControlAttributeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_ControlAttributeEN.sfUpdFldSetStr === undefined || objge_ControlAttributeEN.sfUpdFldSetStr === null || objge_ControlAttributeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ControlAttributeEN.attributeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlAttributeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param objge_ControlAttributeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_ControlAttribute_UpdateWithConditionAsync(objge_ControlAttributeEN: clsge_ControlAttributeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_ControlAttributeEN.sfUpdFldSetStr === undefined || objge_ControlAttributeEN.sfUpdFldSetStr === null || objge_ControlAttributeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ControlAttributeEN.attributeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);
objge_ControlAttributeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ControlAttributeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param objstrAttributeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_ControlAttribute_IsExistRecordCache(objge_ControlAttributeCond: clsge_ControlAttributeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstCache();
if (arrge_ControlAttributeObjLstCache == null) return false;
let arrge_ControlAttributeSel = arrge_ControlAttributeObjLstCache;
if (objge_ControlAttributeCond.sfFldComparisonOp == null || objge_ControlAttributeCond.sfFldComparisonOp == "") return arrge_ControlAttributeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ControlAttributeCond.sfFldComparisonOp);
//console.log("clsge_ControlAttributeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ControlAttributeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ControlAttributeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_ControlAttributeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_ControlAttributeCond), ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param strAttributeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ControlAttribute_IsExistCache(strAttributeId:string) {
const strThisFuncName = "IsExistCache";
const arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstCache();
if (arrge_ControlAttributeObjLstCache == null) return false;
try
{
const arrge_ControlAttributeSel = arrge_ControlAttributeObjLstCache.filter(x => x.attributeId == strAttributeId);
if (arrge_ControlAttributeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strAttributeId, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strAttributeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_ControlAttribute_IsExistAsync(strAttributeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strAttributeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
 * @param objge_ControlAttributeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_ControlAttribute_GetRecCountByCondCache(objge_ControlAttributeCond: clsge_ControlAttributeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_ControlAttributeObjLstCache = await ge_ControlAttribute_GetObjLstCache();
if (arrge_ControlAttributeObjLstCache == null) return 0;
let arrge_ControlAttributeSel = arrge_ControlAttributeObjLstCache;
if (objge_ControlAttributeCond.sfFldComparisonOp == null || objge_ControlAttributeCond.sfFldComparisonOp == "") return arrge_ControlAttributeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ControlAttributeCond.sfFldComparisonOp);
//console.log("clsge_ControlAttributeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ControlAttributeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ControlAttributeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ControlAttributeSel = arrge_ControlAttributeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_ControlAttributeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_ControlAttributeCond), ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  async function ge_ControlAttribute_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_ControlAttribute_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ControlAttribute_ConstructorName, strThisFuncName);
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
export  function ge_ControlAttribute_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_ControlAttribute_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsge_ControlAttributeEN._CurrTabName;
switch (clsge_ControlAttributeEN.CacheModeId)
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
clsge_ControlAttributeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_ControlAttribute_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsge_ControlAttributeEN._CurrTabName;
switch (clsge_ControlAttributeEN.CacheModeId)
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
clsge_ControlAttributeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_ControlAttribute_GetLastRefreshTime():string
{
if (clsge_ControlAttributeEN._RefreshTimeLst.length == 0) return "";
return clsge_ControlAttributeEN._RefreshTimeLst[clsge_ControlAttributeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_ControlAttribute_BindDdl_AttributeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_AttributeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_AttributeIdInDivCache");
const arrObjLstSel = await ge_ControlAttribute_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_ControlAttributeEN.con_AttributeId, clsge_ControlAttributeEN.con_ControlAttributeName, "属性表...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_ControlAttribute_GetArrge_ControlAttribute()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_AttributeIdInDivCache");
const arrge_ControlAttribute = new Array<clsge_ControlAttributeEN>();
const arrObjLstSel = await ge_ControlAttribute_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsge_ControlAttributeEN();
obj0.attributeId = '0';
obj0.controlAttributeName = '选属性表...';
arrge_ControlAttribute.push(obj0);
arrObjLstSel.forEach(x => arrge_ControlAttribute.push(x));
return arrge_ControlAttribute;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_ControlAttribute_CheckPropertyNew(pobjge_ControlAttributeEN: clsge_ControlAttributeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_ControlAttributeEN.attributeId) == false && GetStrLen(pobjge_ControlAttributeEN.attributeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[控件属性Id(attributeId)]的长度不能超过4(In 属性表(ge_ControlAttribute))!值:${pobjge_ControlAttributeEN.attributeId}(clsge_ControlAttributeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.controlAttributeName) == false && GetStrLen(pobjge_ControlAttributeEN.controlAttributeName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[属性名称(controlAttributeName)]的长度不能超过100(In 属性表(ge_ControlAttribute))!值:${pobjge_ControlAttributeEN.controlAttributeName}(clsge_ControlAttributeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.updDate) == false && GetStrLen(pobjge_ControlAttributeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 属性表(ge_ControlAttribute))!值:${pobjge_ControlAttributeEN.updDate}(clsge_ControlAttributeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.updUser) == false && GetStrLen(pobjge_ControlAttributeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 属性表(ge_ControlAttribute))!值:${pobjge_ControlAttributeEN.updUser}(clsge_ControlAttributeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.memo) == false && GetStrLen(pobjge_ControlAttributeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 属性表(ge_ControlAttribute))!值:${pobjge_ControlAttributeEN.memo}(clsge_ControlAttributeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_ControlAttributeEN.attributeId) == false && undefined !== pobjge_ControlAttributeEN.attributeId && tzDataType.isString(pobjge_ControlAttributeEN.attributeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件属性Id(attributeId)]的值:[${pobjge_ControlAttributeEN.attributeId}], 非法,应该为字符型(In 属性表(ge_ControlAttribute))!(clsge_ControlAttributeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.controlAttributeName) == false && undefined !== pobjge_ControlAttributeEN.controlAttributeName && tzDataType.isString(pobjge_ControlAttributeEN.controlAttributeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[属性名称(controlAttributeName)]的值:[${pobjge_ControlAttributeEN.controlAttributeName}], 非法,应该为字符型(In 属性表(ge_ControlAttribute))!(clsge_ControlAttributeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.updDate) == false && undefined !== pobjge_ControlAttributeEN.updDate && tzDataType.isString(pobjge_ControlAttributeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_ControlAttributeEN.updDate}], 非法,应该为字符型(In 属性表(ge_ControlAttribute))!(clsge_ControlAttributeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.updUser) == false && undefined !== pobjge_ControlAttributeEN.updUser && tzDataType.isString(pobjge_ControlAttributeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_ControlAttributeEN.updUser}], 非法,应该为字符型(In 属性表(ge_ControlAttribute))!(clsge_ControlAttributeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.memo) == false && undefined !== pobjge_ControlAttributeEN.memo && tzDataType.isString(pobjge_ControlAttributeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_ControlAttributeEN.memo}], 非法,应该为字符型(In 属性表(ge_ControlAttribute))!(clsge_ControlAttributeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_ControlAttribute_CheckProperty4Update(pobjge_ControlAttributeEN: clsge_ControlAttributeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_ControlAttributeEN.attributeId) == false && GetStrLen(pobjge_ControlAttributeEN.attributeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[控件属性Id(attributeId)]的长度不能超过4(In 属性表(ge_ControlAttribute))!值:${pobjge_ControlAttributeEN.attributeId}(clsge_ControlAttributeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.controlAttributeName) == false && GetStrLen(pobjge_ControlAttributeEN.controlAttributeName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[属性名称(controlAttributeName)]的长度不能超过100(In 属性表(ge_ControlAttribute))!值:${pobjge_ControlAttributeEN.controlAttributeName}(clsge_ControlAttributeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.updDate) == false && GetStrLen(pobjge_ControlAttributeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 属性表(ge_ControlAttribute))!值:${pobjge_ControlAttributeEN.updDate}(clsge_ControlAttributeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.updUser) == false && GetStrLen(pobjge_ControlAttributeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 属性表(ge_ControlAttribute))!值:${pobjge_ControlAttributeEN.updUser}(clsge_ControlAttributeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.memo) == false && GetStrLen(pobjge_ControlAttributeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 属性表(ge_ControlAttribute))!值:${pobjge_ControlAttributeEN.memo}(clsge_ControlAttributeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_ControlAttributeEN.attributeId) == false && undefined !== pobjge_ControlAttributeEN.attributeId && tzDataType.isString(pobjge_ControlAttributeEN.attributeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件属性Id(attributeId)]的值:[${pobjge_ControlAttributeEN.attributeId}], 非法,应该为字符型(In 属性表(ge_ControlAttribute))!(clsge_ControlAttributeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.controlAttributeName) == false && undefined !== pobjge_ControlAttributeEN.controlAttributeName && tzDataType.isString(pobjge_ControlAttributeEN.controlAttributeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[属性名称(controlAttributeName)]的值:[${pobjge_ControlAttributeEN.controlAttributeName}], 非法,应该为字符型(In 属性表(ge_ControlAttribute))!(clsge_ControlAttributeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.updDate) == false && undefined !== pobjge_ControlAttributeEN.updDate && tzDataType.isString(pobjge_ControlAttributeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_ControlAttributeEN.updDate}], 非法,应该为字符型(In 属性表(ge_ControlAttribute))!(clsge_ControlAttributeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.updUser) == false && undefined !== pobjge_ControlAttributeEN.updUser && tzDataType.isString(pobjge_ControlAttributeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_ControlAttributeEN.updUser}], 非法,应该为字符型(In 属性表(ge_ControlAttribute))!(clsge_ControlAttributeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ControlAttributeEN.memo) == false && undefined !== pobjge_ControlAttributeEN.memo && tzDataType.isString(pobjge_ControlAttributeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_ControlAttributeEN.memo}], 非法,应该为字符型(In 属性表(ge_ControlAttribute))!(clsge_ControlAttributeBL:CheckProperty4Update)`);
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
export  function ge_ControlAttribute_GetJSONStrByObj (pobjge_ControlAttributeEN: clsge_ControlAttributeEN): string
{
pobjge_ControlAttributeEN.sfUpdFldSetStr = pobjge_ControlAttributeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_ControlAttributeEN);
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
export  function ge_ControlAttribute_GetObjLstByJSONStr (strJSON: string): Array<clsge_ControlAttributeEN>
{
let arrge_ControlAttributeObjLst = new Array<clsge_ControlAttributeEN>();
if (strJSON === "")
{
return arrge_ControlAttributeObjLst;
}
try
{
arrge_ControlAttributeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_ControlAttributeObjLst;
}
return arrge_ControlAttributeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_ControlAttributeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_ControlAttribute_GetObjLstByJSONObjLst (arrge_ControlAttributeObjLstS: Array<clsge_ControlAttributeEN>): Array<clsge_ControlAttributeEN>
{
const arrge_ControlAttributeObjLst = new Array<clsge_ControlAttributeEN>();
for (const objInFor of arrge_ControlAttributeObjLstS) {
const obj1 = ge_ControlAttribute_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_ControlAttributeObjLst.push(obj1);
}
return arrge_ControlAttributeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_ControlAttribute_GetObjByJSONStr (strJSON: string): clsge_ControlAttributeEN
{
let pobjge_ControlAttributeEN = new clsge_ControlAttributeEN();
if (strJSON === "")
{
return pobjge_ControlAttributeEN;
}
try
{
pobjge_ControlAttributeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_ControlAttributeEN;
}
return pobjge_ControlAttributeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_ControlAttribute_GetCombineCondition(objge_ControlAttributeCond: clsge_ControlAttributeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_ControlAttributeCond.dicFldComparisonOp, clsge_ControlAttributeEN.con_AttributeId) == true)
{
const strComparisonOpAttributeId:string = objge_ControlAttributeCond.dicFldComparisonOp[clsge_ControlAttributeEN.con_AttributeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ControlAttributeEN.con_AttributeId, objge_ControlAttributeCond.attributeId, strComparisonOpAttributeId);
}
if (Object.prototype.hasOwnProperty.call(objge_ControlAttributeCond.dicFldComparisonOp, clsge_ControlAttributeEN.con_ControlAttributeName) == true)
{
const strComparisonOpControlAttributeName:string = objge_ControlAttributeCond.dicFldComparisonOp[clsge_ControlAttributeEN.con_ControlAttributeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ControlAttributeEN.con_ControlAttributeName, objge_ControlAttributeCond.controlAttributeName, strComparisonOpControlAttributeName);
}
if (Object.prototype.hasOwnProperty.call(objge_ControlAttributeCond.dicFldComparisonOp, clsge_ControlAttributeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_ControlAttributeCond.dicFldComparisonOp[clsge_ControlAttributeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ControlAttributeEN.con_UpdDate, objge_ControlAttributeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_ControlAttributeCond.dicFldComparisonOp, clsge_ControlAttributeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_ControlAttributeCond.dicFldComparisonOp[clsge_ControlAttributeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ControlAttributeEN.con_UpdUser, objge_ControlAttributeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_ControlAttributeCond.dicFldComparisonOp, clsge_ControlAttributeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_ControlAttributeCond.dicFldComparisonOp[clsge_ControlAttributeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ControlAttributeEN.con_Memo, objge_ControlAttributeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_ControlAttribute(属性表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strAttributeId: 控件属性Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_ControlAttribute_GetUniCondStr(objge_ControlAttributeEN: clsge_ControlAttributeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and AttributeId = '{0}'", objge_ControlAttributeEN.attributeId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_ControlAttribute(属性表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strAttributeId: 控件属性Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_ControlAttribute_GetUniCondStr4Update(objge_ControlAttributeEN: clsge_ControlAttributeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and AttributeId <> '{0}'", objge_ControlAttributeEN.attributeId);
 strWhereCond +=  Format(" and AttributeId = '{0}'", objge_ControlAttributeEN.attributeId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_ControlAttributeENS:源对象
 * @param objge_ControlAttributeENT:目标对象
*/
export  function ge_ControlAttribute_CopyObjTo(objge_ControlAttributeENS: clsge_ControlAttributeEN , objge_ControlAttributeENT: clsge_ControlAttributeEN ): void 
{
objge_ControlAttributeENT.attributeId = objge_ControlAttributeENS.attributeId; //控件属性Id
objge_ControlAttributeENT.controlAttributeName = objge_ControlAttributeENS.controlAttributeName; //属性名称
objge_ControlAttributeENT.updDate = objge_ControlAttributeENS.updDate; //修改日期
objge_ControlAttributeENT.updUser = objge_ControlAttributeENS.updUser; //修改人
objge_ControlAttributeENT.memo = objge_ControlAttributeENS.memo; //备注
objge_ControlAttributeENT.sfUpdFldSetStr = objge_ControlAttributeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_ControlAttributeENS:源对象
 * @param objge_ControlAttributeENT:目标对象
*/
export  function ge_ControlAttribute_GetObjFromJsonObj(objge_ControlAttributeENS: clsge_ControlAttributeEN): clsge_ControlAttributeEN 
{
 const objge_ControlAttributeENT: clsge_ControlAttributeEN = new clsge_ControlAttributeEN();
ObjectAssign(objge_ControlAttributeENT, objge_ControlAttributeENS);
 return objge_ControlAttributeENT;
}