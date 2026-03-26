
 /**
 * 类名:clsBadgeTypeWApi
 * 表名:BadgeType(01120880)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:22
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
 * 徽章类型(BadgeType)
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
import { clsBadgeTypeEN } from "@/ts/L0Entity/GameLearn/clsBadgeTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const badgeType_Controller = "BadgeTypeApi";
 export const badgeType_ConstructorName = "badgeType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strBadgeTypeId:关键字
 * @returns 对象
 **/
export  async function BadgeType_GetObjByBadgeTypeIdAsync(strBadgeTypeId: string): Promise<clsBadgeTypeEN|null>  
{
const strThisFuncName = "GetObjByBadgeTypeIdAsync";

if (IsNullOrEmpty(strBadgeTypeId) == true)
{
  const strMsg = Format("参数:[strBadgeTypeId]不能为空!(In clsBadgeTypeWApi.GetObjByBadgeTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strBadgeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBadgeTypeId]的长度:[{0}]不正确!(clsBadgeTypeWApi.GetObjByBadgeTypeIdAsync)", strBadgeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByBadgeTypeId";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBadgeTypeId,
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
const objBadgeType = BadgeType_GetObjFromJsonObj(returnObj);
return objBadgeType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param strBadgeTypeId:所给的关键字
 * @returns 对象
*/
export  async function BadgeType_GetObjByBadgeTypeIdlocalStorage(strBadgeTypeId: string) {
const strThisFuncName = "GetObjByBadgeTypeIdlocalStorage";

if (IsNullOrEmpty(strBadgeTypeId) == true)
{
  const strMsg = Format("参数:[strBadgeTypeId]不能为空!(In clsBadgeTypeWApi.GetObjByBadgeTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strBadgeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBadgeTypeId]的长度:[{0}]不正确!(clsBadgeTypeWApi.GetObjByBadgeTypeIdlocalStorage)", strBadgeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsBadgeTypeEN._CurrTabName, strBadgeTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objBadgeTypeCache: clsBadgeTypeEN = JSON.parse(strTempObj);
return objBadgeTypeCache;
}
try
{
const objBadgeType = await BadgeType_GetObjByBadgeTypeIdAsync(strBadgeTypeId);
if (objBadgeType != null)
{
localStorage.setItem(strKey, JSON.stringify(objBadgeType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objBadgeType;
}
return objBadgeType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strBadgeTypeId, badgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strBadgeTypeId:所给的关键字
 * @returns 对象
*/
export  async function BadgeType_GetObjByBadgeTypeIdCache(strBadgeTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByBadgeTypeIdCache";

if (IsNullOrEmpty(strBadgeTypeId) == true)
{
  const strMsg = Format("参数:[strBadgeTypeId]不能为空!(In clsBadgeTypeWApi.GetObjByBadgeTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strBadgeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBadgeTypeId]的长度:[{0}]不正确!(clsBadgeTypeWApi.GetObjByBadgeTypeIdCache)", strBadgeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrBadgeTypeObjLstCache = await BadgeType_GetObjLstCache();
try
{
const arrBadgeTypeSel = arrBadgeTypeObjLstCache.filter(x => 
 x.badgeTypeId == strBadgeTypeId );
let objBadgeType: clsBadgeTypeEN;
if (arrBadgeTypeSel.length > 0)
{
objBadgeType = arrBadgeTypeSel[0];
return objBadgeType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objBadgeTypeConst = await BadgeType_GetObjByBadgeTypeIdAsync(strBadgeTypeId);
if (objBadgeTypeConst != null)
{
BadgeType_ReFreshThisCache();
return objBadgeTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strBadgeTypeId, badgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objBadgeType:所给的对象
 * @returns 对象
*/
export  async function BadgeType_UpdateObjInLstCache(objBadgeType: clsBadgeTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrBadgeTypeObjLstCache = await BadgeType_GetObjLstCache();
const obj = arrBadgeTypeObjLstCache.find(x => x.badgeTypeName == objBadgeType.badgeTypeName);
if (obj != null)
{
objBadgeType.badgeTypeId = obj.badgeTypeId;
ObjectAssign( obj, objBadgeType);
}
else
{
arrBadgeTypeObjLstCache.push(objBadgeType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, badgeType_ConstructorName, strThisFuncName);
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
export  function BadgeType_SortFunDefa(a:clsBadgeTypeEN , b:clsBadgeTypeEN): number 
{
return a.badgeTypeId.localeCompare(b.badgeTypeId);
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
export  function BadgeType_SortFunDefa2Fld(a:clsBadgeTypeEN , b:clsBadgeTypeEN): number 
{
if (a.badgeTypeName == b.badgeTypeName) return a.badgeTypeENName.localeCompare(b.badgeTypeENName);
else return a.badgeTypeName.localeCompare(b.badgeTypeName);
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
export  function BadgeType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsBadgeTypeEN.con_BadgeTypeId:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
return a.badgeTypeId.localeCompare(b.badgeTypeId);
}
case clsBadgeTypeEN.con_BadgeTypeName:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
return a.badgeTypeName.localeCompare(b.badgeTypeName);
}
case clsBadgeTypeEN.con_BadgeTypeENName:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
return a.badgeTypeENName.localeCompare(b.badgeTypeENName);
}
case clsBadgeTypeEN.con_BadgeCategoryId:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
return a.badgeCategoryId.localeCompare(b.badgeCategoryId);
}
case clsBadgeTypeEN.con_UpdDate:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsBadgeTypeEN.con_ImageDir:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
if (a.imageDir == null) return -1;
if (b.imageDir == null) return 1;
return a.imageDir.localeCompare(b.imageDir);
}
case clsBadgeTypeEN.con_Credits:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
return a.credits-b.credits;
}
case clsBadgeTypeEN.con_UpdUser:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsBadgeTypeEN.con_Memo:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BadgeType]中不存在!(in ${ badgeType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsBadgeTypeEN.con_BadgeTypeId:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
return b.badgeTypeId.localeCompare(a.badgeTypeId);
}
case clsBadgeTypeEN.con_BadgeTypeName:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
return b.badgeTypeName.localeCompare(a.badgeTypeName);
}
case clsBadgeTypeEN.con_BadgeTypeENName:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
return b.badgeTypeENName.localeCompare(a.badgeTypeENName);
}
case clsBadgeTypeEN.con_BadgeCategoryId:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
return b.badgeCategoryId.localeCompare(a.badgeCategoryId);
}
case clsBadgeTypeEN.con_UpdDate:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsBadgeTypeEN.con_ImageDir:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
if (b.imageDir == null) return -1;
if (a.imageDir == null) return 1;
return b.imageDir.localeCompare(a.imageDir);
}
case clsBadgeTypeEN.con_Credits:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
return b.credits-a.credits;
}
case clsBadgeTypeEN.con_UpdUser:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsBadgeTypeEN.con_Memo:
return (a: clsBadgeTypeEN, b: clsBadgeTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BadgeType]中不存在!(in ${ badgeType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strBadgeTypeId:所给的关键字
 * @returns 对象
*/
export  async function BadgeType_GetNameByBadgeTypeIdCache(strBadgeTypeId: string) {

if (IsNullOrEmpty(strBadgeTypeId) == true)
{
  const strMsg = Format("参数:[strBadgeTypeId]不能为空!(In clsBadgeTypeWApi.GetNameByBadgeTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strBadgeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strBadgeTypeId]的长度:[{0}]不正确!(clsBadgeTypeWApi.GetNameByBadgeTypeIdCache)", strBadgeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrBadgeTypeObjLstCache = await BadgeType_GetObjLstCache();
if (arrBadgeTypeObjLstCache == null) return "";
try
{
const arrBadgeTypeSel = arrBadgeTypeObjLstCache.filter(x => 
 x.badgeTypeId == strBadgeTypeId );
let objBadgeType: clsBadgeTypeEN;
if (arrBadgeTypeSel.length > 0)
{
objBadgeType = arrBadgeTypeSel[0];
return objBadgeType.badgeTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strBadgeTypeId);
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
export  async function BadgeType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsBadgeTypeEN.con_BadgeTypeId:
return (obj: clsBadgeTypeEN) => {
return obj.badgeTypeId === value;
}
case clsBadgeTypeEN.con_BadgeTypeName:
return (obj: clsBadgeTypeEN) => {
return obj.badgeTypeName === value;
}
case clsBadgeTypeEN.con_BadgeTypeENName:
return (obj: clsBadgeTypeEN) => {
return obj.badgeTypeENName === value;
}
case clsBadgeTypeEN.con_BadgeCategoryId:
return (obj: clsBadgeTypeEN) => {
return obj.badgeCategoryId === value;
}
case clsBadgeTypeEN.con_UpdDate:
return (obj: clsBadgeTypeEN) => {
return obj.updDate === value;
}
case clsBadgeTypeEN.con_ImageDir:
return (obj: clsBadgeTypeEN) => {
return obj.imageDir === value;
}
case clsBadgeTypeEN.con_Credits:
return (obj: clsBadgeTypeEN) => {
return obj.credits === value;
}
case clsBadgeTypeEN.con_UpdUser:
return (obj: clsBadgeTypeEN) => {
return obj.updUser === value;
}
case clsBadgeTypeEN.con_Memo:
return (obj: clsBadgeTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BadgeType]中不存在!(in ${ badgeType_ConstructorName}.${ strThisFuncName})`;
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
export  async function BadgeType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsBadgeTypeEN.con_BadgeTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsBadgeTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsBadgeTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strBadgeTypeId = strInValue;
if (IsNullOrEmpty(strBadgeTypeId) == true)
{
return "";
}
const objBadgeType = await BadgeType_GetObjByBadgeTypeIdCache(strBadgeTypeId );
if (objBadgeType == null) return "";
if (objBadgeType.GetFldValue(strOutFldName) == null) return "";
return objBadgeType.GetFldValue(strOutFldName).toString();
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
export  async function BadgeType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsBadgeTypeEN.con_BadgeTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrBadgeType = await BadgeType_GetObjLstCache();
if (arrBadgeType == null) return [];
let arrBadgeTypeSel = arrBadgeType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrBadgeTypeSel.length == 0) return [];
return arrBadgeTypeSel.map(x=>x.badgeTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BadgeType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_GetFirstObjAsync(strWhereCond: string): Promise<clsBadgeTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const objBadgeType = BadgeType_GetObjFromJsonObj(returnObj);
return objBadgeType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBadgeTypeEN._CurrTabName;
if (IsNullOrEmpty(clsBadgeTypeEN.WhereFormat) == false)
{
strWhereCond = clsBadgeTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsBadgeTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBadgeTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrBadgeTypeExObjLstCache: Array<clsBadgeTypeEN> = CacheHelper.Get(strKey);
const arrBadgeTypeObjLstT = BadgeType_GetObjLstByJSONObjLst(arrBadgeTypeExObjLstCache);
return arrBadgeTypeObjLstT;
}
try
{
const arrBadgeTypeExObjLst = await BadgeType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrBadgeTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBadgeTypeExObjLst.length);
console.log(strInfo);
return arrBadgeTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, badgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BadgeType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBadgeTypeEN._CurrTabName;
if (IsNullOrEmpty(clsBadgeTypeEN.WhereFormat) == false)
{
strWhereCond = clsBadgeTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsBadgeTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBadgeTypeEN.CacheAddiCondition);
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
const arrBadgeTypeExObjLstCache: Array<clsBadgeTypeEN> = JSON.parse(strTempObjLst);
const arrBadgeTypeObjLstT = BadgeType_GetObjLstByJSONObjLst(arrBadgeTypeExObjLstCache);
return arrBadgeTypeObjLstT;
}
try
{
const arrBadgeTypeExObjLst = await BadgeType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrBadgeTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBadgeTypeExObjLst.length);
console.log(strInfo);
return arrBadgeTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, badgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BadgeType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsBadgeTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrBadgeTypeObjLstCache: Array<clsBadgeTypeEN> = JSON.parse(strTempObjLst);
return arrBadgeTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function BadgeType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsBadgeTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", badgeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BadgeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsBadgeTypeEN._CurrTabName;
if (IsNullOrEmpty(clsBadgeTypeEN.WhereFormat) == false)
{
strWhereCond = clsBadgeTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsBadgeTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsBadgeTypeEN.CacheAddiCondition);
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
const arrBadgeTypeExObjLstCache: Array<clsBadgeTypeEN> = JSON.parse(strTempObjLst);
const arrBadgeTypeObjLstT = BadgeType_GetObjLstByJSONObjLst(arrBadgeTypeExObjLstCache);
return arrBadgeTypeObjLstT;
}
try
{
const arrBadgeTypeExObjLst = await BadgeType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrBadgeTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrBadgeTypeExObjLst.length);
console.log(strInfo);
return arrBadgeTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, badgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BadgeType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsBadgeTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrBadgeTypeObjLstCache: Array<clsBadgeTypeEN> = JSON.parse(strTempObjLst);
return arrBadgeTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BadgeType_GetObjLstCache(): Promise<Array<clsBadgeTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrBadgeTypeObjLstCache;
switch (clsBadgeTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrBadgeTypeObjLstCache = await BadgeType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrBadgeTypeObjLstCache = await BadgeType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrBadgeTypeObjLstCache = await BadgeType_GetObjLstClientCache();
break;
default:
arrBadgeTypeObjLstCache = await BadgeType_GetObjLstClientCache();
break;
}
return arrBadgeTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function BadgeType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrBadgeTypeObjLstCache;
switch (clsBadgeTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrBadgeTypeObjLstCache = await BadgeType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrBadgeTypeObjLstCache = await BadgeType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrBadgeTypeObjLstCache = null;
break;
default:
arrBadgeTypeObjLstCache = null;
break;
}
return arrBadgeTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrBadgeTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function BadgeType_GetSubObjLstCache(objBadgeTypeCond: clsBadgeTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrBadgeTypeObjLstCache = await BadgeType_GetObjLstCache();
let arrBadgeTypeSel = arrBadgeTypeObjLstCache;
if (objBadgeTypeCond.sfFldComparisonOp == null || objBadgeTypeCond.sfFldComparisonOp == "") return arrBadgeTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBadgeTypeCond.sfFldComparisonOp);
//console.log("clsBadgeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBadgeTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBadgeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrBadgeTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objBadgeTypeCond), badgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsBadgeTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrBadgeTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function BadgeType_GetObjLstByBadgeTypeIdLstAsync(arrBadgeTypeId: Array<string>): Promise<Array<clsBadgeTypeEN>>  
{
const strThisFuncName = "GetObjLstByBadgeTypeIdLstAsync";
const strAction = "GetObjLstByBadgeTypeIdLst";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBadgeTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", badgeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BadgeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param arrstrBadgeTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function BadgeType_GetObjLstByBadgeTypeIdLstCache(arrBadgeTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByBadgeTypeIdLstCache";
try
{
const arrBadgeTypeObjLstCache = await BadgeType_GetObjLstCache();
const arrBadgeTypeSel = arrBadgeTypeObjLstCache.filter(x => arrBadgeTypeIdLst.indexOf(x.badgeTypeId)>-1);
return arrBadgeTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrBadgeTypeIdLst.join(","), badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsBadgeTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", badgeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BadgeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsBadgeTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", badgeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BadgeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsBadgeTypeEN>();
const arrBadgeTypeObjLstCache = await BadgeType_GetObjLstCache();
if (arrBadgeTypeObjLstCache.length == 0) return arrBadgeTypeObjLstCache;
let arrBadgeTypeSel = arrBadgeTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objBadgeTypeCond = new clsBadgeTypeEN();
ObjectAssign(objBadgeTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsBadgeTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBadgeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrBadgeTypeSel.length == 0) return arrBadgeTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrBadgeTypeSel = arrBadgeTypeSel.sort(BadgeType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrBadgeTypeSel = arrBadgeTypeSel.sort(objPagerPara.sortFun);
}
arrBadgeTypeSel = arrBadgeTypeSel.slice(intStart, intEnd);     
return arrBadgeTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, badgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsBadgeTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function BadgeType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsBadgeTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsBadgeTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", badgeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BadgeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param strBadgeTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function BadgeType_DelRecordAsync(strBadgeTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(badgeType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strBadgeTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param arrBadgeTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function BadgeType_DelBadgeTypesAsync(arrBadgeTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelBadgeTypesAsync";
const strAction = "DelBadgeTypes";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBadgeTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_DelBadgeTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelBadgeTypesByCondAsync";
const strAction = "DelBadgeTypesByCond";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param objBadgeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BadgeType_AddNewRecordAsync(objBadgeTypeEN: clsBadgeTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objBadgeTypeEN);
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param objBadgeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BadgeType_AddNewRecordWithMaxIdAsync(objBadgeTypeEN: clsBadgeTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_AddNewObjSave(objBadgeTypeEN: clsBadgeTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
BadgeType_CheckPropertyNew(objBadgeTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ badgeType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await BadgeType_CheckUniCond4Add(objBadgeTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await BadgeType_AddNewRecordWithMaxIdAsync(objBadgeTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
BadgeType_ReFreshCache();
}
else
{
const strInfo = `添加[徽章类型(BadgeType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ badgeType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function BadgeType_CheckUniCond4Add(objBadgeTypeEN: clsBadgeTypeEN): Promise<boolean>{
const strUniquenessCondition = BadgeType_GetUniCondStr(objBadgeTypeEN);
const bolIsExistCondition = await BadgeType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function BadgeType_CheckUniCond4Update(objBadgeTypeEN: clsBadgeTypeEN): Promise<boolean>{
const strUniquenessCondition = BadgeType_GetUniCondStr4Update(objBadgeTypeEN);
const bolIsExistCondition = await BadgeType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function BadgeType_UpdateObjSave(objBadgeTypeEN: clsBadgeTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objBadgeTypeEN.sfUpdFldSetStr = objBadgeTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objBadgeTypeEN.badgeTypeId == "" || objBadgeTypeEN.badgeTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
BadgeType_CheckProperty4Update(objBadgeTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ badgeType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await BadgeType_CheckUniCond4Update(objBadgeTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await BadgeType_UpdateRecordAsync(objBadgeTypeEN);
if (returnBool == true)
{
BadgeType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ badgeType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objBadgeTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function BadgeType_AddNewRecordWithReturnKeyAsync(objBadgeTypeEN: clsBadgeTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param objBadgeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BadgeType_UpdateRecordAsync(objBadgeTypeEN: clsBadgeTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objBadgeTypeEN.sfUpdFldSetStr === undefined || objBadgeTypeEN.sfUpdFldSetStr === null || objBadgeTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBadgeTypeEN.badgeTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param objBadgeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BadgeType_EditRecordExAsync(objBadgeTypeEN: clsBadgeTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objBadgeTypeEN.sfUpdFldSetStr === undefined || objBadgeTypeEN.sfUpdFldSetStr === null || objBadgeTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBadgeTypeEN.badgeTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param objBadgeTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BadgeType_UpdateWithConditionAsync(objBadgeTypeEN: clsBadgeTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objBadgeTypeEN.sfUpdFldSetStr === undefined || objBadgeTypeEN.sfUpdFldSetStr === null || objBadgeTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBadgeTypeEN.badgeTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);
objBadgeTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBadgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param objstrBadgeTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function BadgeType_IsExistRecordCache(objBadgeTypeCond: clsBadgeTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrBadgeTypeObjLstCache = await BadgeType_GetObjLstCache();
if (arrBadgeTypeObjLstCache == null) return false;
let arrBadgeTypeSel = arrBadgeTypeObjLstCache;
if (objBadgeTypeCond.sfFldComparisonOp == null || objBadgeTypeCond.sfFldComparisonOp == "") return arrBadgeTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBadgeTypeCond.sfFldComparisonOp);
//console.log("clsBadgeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBadgeTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBadgeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrBadgeTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objBadgeTypeCond), badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param strBadgeTypeId:所给的关键字
 * @returns 对象
*/
export  async function BadgeType_IsExistCache(strBadgeTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrBadgeTypeObjLstCache = await BadgeType_GetObjLstCache();
if (arrBadgeTypeObjLstCache == null) return false;
try
{
const arrBadgeTypeSel = arrBadgeTypeObjLstCache.filter(x => x.badgeTypeId == strBadgeTypeId);
if (arrBadgeTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strBadgeTypeId, badgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strBadgeTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function BadgeType_IsExistAsync(strBadgeTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strBadgeTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
 * @param objBadgeTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function BadgeType_GetRecCountByCondCache(objBadgeTypeCond: clsBadgeTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrBadgeTypeObjLstCache = await BadgeType_GetObjLstCache();
if (arrBadgeTypeObjLstCache == null) return 0;
let arrBadgeTypeSel = arrBadgeTypeObjLstCache;
if (objBadgeTypeCond.sfFldComparisonOp == null || objBadgeTypeCond.sfFldComparisonOp == "") return arrBadgeTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objBadgeTypeCond.sfFldComparisonOp);
//console.log("clsBadgeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objBadgeTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objBadgeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrBadgeTypeSel = arrBadgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrBadgeTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objBadgeTypeCond), badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  async function BadgeType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(badgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, badgeType_ConstructorName, strThisFuncName);
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
export  function BadgeType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function BadgeType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsBadgeTypeEN._CurrTabName;
switch (clsBadgeTypeEN.CacheModeId)
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
clsBadgeTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function BadgeType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsBadgeTypeEN._CurrTabName;
switch (clsBadgeTypeEN.CacheModeId)
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
clsBadgeTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function BadgeType_GetLastRefreshTime():string
{
if (clsBadgeTypeEN._RefreshTimeLst.length == 0) return "";
return clsBadgeTypeEN._RefreshTimeLst[clsBadgeTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function BadgeType_BindDdl_BadgeTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_BadgeTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_BadgeTypeIdInDivCache");
const arrObjLstSel = await BadgeType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsBadgeTypeEN.con_BadgeTypeId, clsBadgeTypeEN.con_BadgeTypeName, "徽章类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function BadgeType_GetArrBadgeType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_BadgeTypeIdInDivCache");
const arrBadgeType = new Array<clsBadgeTypeEN>();
const arrObjLstSel = await BadgeType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsBadgeTypeEN();
obj0.badgeTypeId = '0';
obj0.badgeTypeName = '选徽章类型...';
arrBadgeType.push(obj0);
arrObjLstSel.forEach(x => arrBadgeType.push(x));
return arrBadgeType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BadgeType_CheckPropertyNew(pobjBadgeTypeEN: clsBadgeTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[徽章类型名]不能为空(In 徽章类型)!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeENName) === true )
{
 throw new Error(`(errid:Watl000411)字段[徽章类型英文名]不能为空(In 徽章类型)!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeCategoryId) === true )
{
 throw new Error(`(errid:Watl000411)字段[徽章类别Id]不能为空(In 徽章类型)!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeId) == false && GetStrLen(pobjBadgeTypeEN.badgeTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[徽章类型Id(badgeTypeId)]的长度不能超过2(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.badgeTypeId}(clsBadgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeName) == false && GetStrLen(pobjBadgeTypeEN.badgeTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[徽章类型名(badgeTypeName)]的长度不能超过50(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.badgeTypeName}(clsBadgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeENName) == false && GetStrLen(pobjBadgeTypeEN.badgeTypeENName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[徽章类型英文名(badgeTypeENName)]的长度不能超过50(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.badgeTypeENName}(clsBadgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeCategoryId) == false && GetStrLen(pobjBadgeTypeEN.badgeCategoryId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[徽章类别Id(badgeCategoryId)]的长度不能超过2(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.badgeCategoryId}(clsBadgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.updDate) == false && GetStrLen(pobjBadgeTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.updDate}(clsBadgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.imageDir) == false && GetStrLen(pobjBadgeTypeEN.imageDir) > 100)
{
 throw new Error(`(errid:Watl000413)字段[图像目录(imageDir)]的长度不能超过100(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.imageDir}(clsBadgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.updUser) == false && GetStrLen(pobjBadgeTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.updUser}(clsBadgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.memo) == false && GetStrLen(pobjBadgeTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.memo}(clsBadgeTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeId) == false && undefined !== pobjBadgeTypeEN.badgeTypeId && tzDataType.isString(pobjBadgeTypeEN.badgeTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章类型Id(badgeTypeId)]的值:[${pobjBadgeTypeEN.badgeTypeId}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeName) == false && undefined !== pobjBadgeTypeEN.badgeTypeName && tzDataType.isString(pobjBadgeTypeEN.badgeTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章类型名(badgeTypeName)]的值:[${pobjBadgeTypeEN.badgeTypeName}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeENName) == false && undefined !== pobjBadgeTypeEN.badgeTypeENName && tzDataType.isString(pobjBadgeTypeEN.badgeTypeENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章类型英文名(badgeTypeENName)]的值:[${pobjBadgeTypeEN.badgeTypeENName}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeCategoryId) == false && undefined !== pobjBadgeTypeEN.badgeCategoryId && tzDataType.isString(pobjBadgeTypeEN.badgeCategoryId) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章类别Id(badgeCategoryId)]的值:[${pobjBadgeTypeEN.badgeCategoryId}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.updDate) == false && undefined !== pobjBadgeTypeEN.updDate && tzDataType.isString(pobjBadgeTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjBadgeTypeEN.updDate}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.imageDir) == false && undefined !== pobjBadgeTypeEN.imageDir && tzDataType.isString(pobjBadgeTypeEN.imageDir) === false)
{
 throw new Error(`(errid:Watl000414)字段[图像目录(imageDir)]的值:[${pobjBadgeTypeEN.imageDir}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
if (null != pobjBadgeTypeEN.credits && undefined !== pobjBadgeTypeEN.credits && tzDataType.isNumber(pobjBadgeTypeEN.credits) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分(credits)]的值:[${pobjBadgeTypeEN.credits}], 非法,应该为数值型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.updUser) == false && undefined !== pobjBadgeTypeEN.updUser && tzDataType.isString(pobjBadgeTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjBadgeTypeEN.updUser}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.memo) == false && undefined !== pobjBadgeTypeEN.memo && tzDataType.isString(pobjBadgeTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjBadgeTypeEN.memo}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BadgeType_CheckProperty4Update(pobjBadgeTypeEN: clsBadgeTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeId) == false && GetStrLen(pobjBadgeTypeEN.badgeTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[徽章类型Id(badgeTypeId)]的长度不能超过2(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.badgeTypeId}(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeName) == false && GetStrLen(pobjBadgeTypeEN.badgeTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[徽章类型名(badgeTypeName)]的长度不能超过50(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.badgeTypeName}(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeENName) == false && GetStrLen(pobjBadgeTypeEN.badgeTypeENName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[徽章类型英文名(badgeTypeENName)]的长度不能超过50(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.badgeTypeENName}(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeCategoryId) == false && GetStrLen(pobjBadgeTypeEN.badgeCategoryId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[徽章类别Id(badgeCategoryId)]的长度不能超过2(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.badgeCategoryId}(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.updDate) == false && GetStrLen(pobjBadgeTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.updDate}(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.imageDir) == false && GetStrLen(pobjBadgeTypeEN.imageDir) > 100)
{
 throw new Error(`(errid:Watl000416)字段[图像目录(imageDir)]的长度不能超过100(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.imageDir}(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.updUser) == false && GetStrLen(pobjBadgeTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.updUser}(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.memo) == false && GetStrLen(pobjBadgeTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 徽章类型(BadgeType))!值:${pobjBadgeTypeEN.memo}(clsBadgeTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeId) == false && undefined !== pobjBadgeTypeEN.badgeTypeId && tzDataType.isString(pobjBadgeTypeEN.badgeTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章类型Id(badgeTypeId)]的值:[${pobjBadgeTypeEN.badgeTypeId}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeName) == false && undefined !== pobjBadgeTypeEN.badgeTypeName && tzDataType.isString(pobjBadgeTypeEN.badgeTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章类型名(badgeTypeName)]的值:[${pobjBadgeTypeEN.badgeTypeName}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeTypeENName) == false && undefined !== pobjBadgeTypeEN.badgeTypeENName && tzDataType.isString(pobjBadgeTypeEN.badgeTypeENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章类型英文名(badgeTypeENName)]的值:[${pobjBadgeTypeEN.badgeTypeENName}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.badgeCategoryId) == false && undefined !== pobjBadgeTypeEN.badgeCategoryId && tzDataType.isString(pobjBadgeTypeEN.badgeCategoryId) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章类别Id(badgeCategoryId)]的值:[${pobjBadgeTypeEN.badgeCategoryId}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.updDate) == false && undefined !== pobjBadgeTypeEN.updDate && tzDataType.isString(pobjBadgeTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjBadgeTypeEN.updDate}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.imageDir) == false && undefined !== pobjBadgeTypeEN.imageDir && tzDataType.isString(pobjBadgeTypeEN.imageDir) === false)
{
 throw new Error(`(errid:Watl000417)字段[图像目录(imageDir)]的值:[${pobjBadgeTypeEN.imageDir}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (null != pobjBadgeTypeEN.credits && undefined !== pobjBadgeTypeEN.credits && tzDataType.isNumber(pobjBadgeTypeEN.credits) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分(credits)]的值:[${pobjBadgeTypeEN.credits}], 非法,应该为数值型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.updUser) == false && undefined !== pobjBadgeTypeEN.updUser && tzDataType.isString(pobjBadgeTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjBadgeTypeEN.updUser}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBadgeTypeEN.memo) == false && undefined !== pobjBadgeTypeEN.memo && tzDataType.isString(pobjBadgeTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjBadgeTypeEN.memo}], 非法,应该为字符型(In 徽章类型(BadgeType))!(clsBadgeTypeBL:CheckProperty4Update)`);
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
export  function BadgeType_GetJSONStrByObj (pobjBadgeTypeEN: clsBadgeTypeEN): string
{
pobjBadgeTypeEN.sfUpdFldSetStr = pobjBadgeTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjBadgeTypeEN);
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
export  function BadgeType_GetObjLstByJSONStr (strJSON: string): Array<clsBadgeTypeEN>
{
let arrBadgeTypeObjLst = new Array<clsBadgeTypeEN>();
if (strJSON === "")
{
return arrBadgeTypeObjLst;
}
try
{
arrBadgeTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrBadgeTypeObjLst;
}
return arrBadgeTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrBadgeTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function BadgeType_GetObjLstByJSONObjLst (arrBadgeTypeObjLstS: Array<clsBadgeTypeEN>): Array<clsBadgeTypeEN>
{
const arrBadgeTypeObjLst = new Array<clsBadgeTypeEN>();
for (const objInFor of arrBadgeTypeObjLstS) {
const obj1 = BadgeType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrBadgeTypeObjLst.push(obj1);
}
return arrBadgeTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function BadgeType_GetObjByJSONStr (strJSON: string): clsBadgeTypeEN
{
let pobjBadgeTypeEN = new clsBadgeTypeEN();
if (strJSON === "")
{
return pobjBadgeTypeEN;
}
try
{
pobjBadgeTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjBadgeTypeEN;
}
return pobjBadgeTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function BadgeType_GetCombineCondition(objBadgeTypeCond: clsBadgeTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objBadgeTypeCond.dicFldComparisonOp, clsBadgeTypeEN.con_BadgeTypeId) == true)
{
const strComparisonOpBadgeTypeId:string = objBadgeTypeCond.dicFldComparisonOp[clsBadgeTypeEN.con_BadgeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeTypeEN.con_BadgeTypeId, objBadgeTypeCond.badgeTypeId, strComparisonOpBadgeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objBadgeTypeCond.dicFldComparisonOp, clsBadgeTypeEN.con_BadgeTypeName) == true)
{
const strComparisonOpBadgeTypeName:string = objBadgeTypeCond.dicFldComparisonOp[clsBadgeTypeEN.con_BadgeTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeTypeEN.con_BadgeTypeName, objBadgeTypeCond.badgeTypeName, strComparisonOpBadgeTypeName);
}
if (Object.prototype.hasOwnProperty.call(objBadgeTypeCond.dicFldComparisonOp, clsBadgeTypeEN.con_BadgeTypeENName) == true)
{
const strComparisonOpBadgeTypeENName:string = objBadgeTypeCond.dicFldComparisonOp[clsBadgeTypeEN.con_BadgeTypeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeTypeEN.con_BadgeTypeENName, objBadgeTypeCond.badgeTypeENName, strComparisonOpBadgeTypeENName);
}
if (Object.prototype.hasOwnProperty.call(objBadgeTypeCond.dicFldComparisonOp, clsBadgeTypeEN.con_BadgeCategoryId) == true)
{
const strComparisonOpBadgeCategoryId:string = objBadgeTypeCond.dicFldComparisonOp[clsBadgeTypeEN.con_BadgeCategoryId];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeTypeEN.con_BadgeCategoryId, objBadgeTypeCond.badgeCategoryId, strComparisonOpBadgeCategoryId);
}
if (Object.prototype.hasOwnProperty.call(objBadgeTypeCond.dicFldComparisonOp, clsBadgeTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objBadgeTypeCond.dicFldComparisonOp[clsBadgeTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeTypeEN.con_UpdDate, objBadgeTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objBadgeTypeCond.dicFldComparisonOp, clsBadgeTypeEN.con_ImageDir) == true)
{
const strComparisonOpImageDir:string = objBadgeTypeCond.dicFldComparisonOp[clsBadgeTypeEN.con_ImageDir];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeTypeEN.con_ImageDir, objBadgeTypeCond.imageDir, strComparisonOpImageDir);
}
if (Object.prototype.hasOwnProperty.call(objBadgeTypeCond.dicFldComparisonOp, clsBadgeTypeEN.con_Credits) == true)
{
const strComparisonOpCredits:string = objBadgeTypeCond.dicFldComparisonOp[clsBadgeTypeEN.con_Credits];
strWhereCond += Format(" And {0} {2} {1}", clsBadgeTypeEN.con_Credits, objBadgeTypeCond.credits, strComparisonOpCredits);
}
if (Object.prototype.hasOwnProperty.call(objBadgeTypeCond.dicFldComparisonOp, clsBadgeTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objBadgeTypeCond.dicFldComparisonOp[clsBadgeTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeTypeEN.con_UpdUser, objBadgeTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objBadgeTypeCond.dicFldComparisonOp, clsBadgeTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objBadgeTypeCond.dicFldComparisonOp[clsBadgeTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsBadgeTypeEN.con_Memo, objBadgeTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--BadgeType(徽章类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strBadgeTypeName: 徽章类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function BadgeType_GetUniCondStr(objBadgeTypeEN: clsBadgeTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and BadgeTypeName = '{0}'", objBadgeTypeEN.badgeTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--BadgeType(徽章类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strBadgeTypeName: 徽章类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function BadgeType_GetUniCondStr4Update(objBadgeTypeEN: clsBadgeTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and BadgeTypeId <> '{0}'", objBadgeTypeEN.badgeTypeId);
 strWhereCond +=  Format(" and BadgeTypeName = '{0}'", objBadgeTypeEN.badgeTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objBadgeTypeENS:源对象
 * @param objBadgeTypeENT:目标对象
*/
export  function BadgeType_CopyObjTo(objBadgeTypeENS: clsBadgeTypeEN , objBadgeTypeENT: clsBadgeTypeEN ): void 
{
objBadgeTypeENT.badgeTypeId = objBadgeTypeENS.badgeTypeId; //徽章类型Id
objBadgeTypeENT.badgeTypeName = objBadgeTypeENS.badgeTypeName; //徽章类型名
objBadgeTypeENT.badgeTypeENName = objBadgeTypeENS.badgeTypeENName; //徽章类型英文名
objBadgeTypeENT.badgeCategoryId = objBadgeTypeENS.badgeCategoryId; //徽章类别Id
objBadgeTypeENT.updDate = objBadgeTypeENS.updDate; //修改日期
objBadgeTypeENT.imageDir = objBadgeTypeENS.imageDir; //图像目录
objBadgeTypeENT.credits = objBadgeTypeENS.credits; //积分
objBadgeTypeENT.updUser = objBadgeTypeENS.updUser; //修改人
objBadgeTypeENT.memo = objBadgeTypeENS.memo; //备注
objBadgeTypeENT.sfUpdFldSetStr = objBadgeTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objBadgeTypeENS:源对象
 * @param objBadgeTypeENT:目标对象
*/
export  function BadgeType_GetObjFromJsonObj(objBadgeTypeENS: clsBadgeTypeEN): clsBadgeTypeEN 
{
 const objBadgeTypeENT: clsBadgeTypeEN = new clsBadgeTypeEN();
ObjectAssign(objBadgeTypeENT, objBadgeTypeENS);
 return objBadgeTypeENT;
}