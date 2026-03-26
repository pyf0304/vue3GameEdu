
 /**
 * 类名:clsEduClsCalendarWApi
 * 表名:EduClsCalendar(01120988)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:24
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学班学历(EduClsCalendar)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper,LocalStorage_GetKeyByPrefix,SessionStorage_GetKeyByPrefix } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsEduClsCalendarEN } from "@/ts/L0Entity/DailyRunning/clsEduClsCalendarEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const eduClsCalendar_Controller = "EduClsCalendarApi";
 export const eduClsCalendar_ConstructorName = "eduClsCalendar";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngIdEduClsCalendar:关键字
 * @returns 对象
 **/
export  async function EduClsCalendar_GetObjByIdEduClsCalendarAsync(lngIdEduClsCalendar: number): Promise<clsEduClsCalendarEN|null>  
{
const strThisFuncName = "GetObjByIdEduClsCalendarAsync";

if (lngIdEduClsCalendar == 0)
{
  const strMsg = Format("参数:[lngIdEduClsCalendar]不能为空!(In clsEduClsCalendarWApi.GetObjByIdEduClsCalendarAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByIdEduClsCalendar";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdEduClsCalendar,
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
const objEduClsCalendar = EduClsCalendar_GetObjFromJsonObj(returnObj);
return objEduClsCalendar;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
 * @param lngIdEduClsCalendar:所给的关键字
 * @returns 对象
*/
export  async function EduClsCalendar_GetObjByIdEduClsCalendarlocalStorage(lngIdEduClsCalendar: number) {
const strThisFuncName = "GetObjByIdEduClsCalendarlocalStorage";

if (lngIdEduClsCalendar == 0)
{
  const strMsg = Format("参数:[lngIdEduClsCalendar]不能为空!(In clsEduClsCalendarWApi.GetObjByIdEduClsCalendarlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsEduClsCalendarEN._CurrTabName, lngIdEduClsCalendar);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objEduClsCalendarCache: clsEduClsCalendarEN = JSON.parse(strTempObj);
return objEduClsCalendarCache;
}
try
{
const objEduClsCalendar = await EduClsCalendar_GetObjByIdEduClsCalendarAsync(lngIdEduClsCalendar);
if (objEduClsCalendar != null)
{
localStorage.setItem(strKey, JSON.stringify(objEduClsCalendar));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objEduClsCalendar;
}
return objEduClsCalendar;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngIdEduClsCalendar, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngIdEduClsCalendar:所给的关键字
 * @returns 对象
*/
export  async function EduClsCalendar_GetObjByIdEduClsCalendarCache(lngIdEduClsCalendar:number,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdEduClsCalendarCache";

if (lngIdEduClsCalendar == 0)
{
  const strMsg = Format("参数:[lngIdEduClsCalendar]不能为空!(In clsEduClsCalendarWApi.GetObjByIdEduClsCalendarCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstCache(strIdCurrEduCls);
try
{
const arrEduClsCalendarSel = arrEduClsCalendarObjLstCache.filter(x => 
 x.idEduClsCalendar == lngIdEduClsCalendar );
let objEduClsCalendar: clsEduClsCalendarEN;
if (arrEduClsCalendarSel.length > 0)
{
objEduClsCalendar = arrEduClsCalendarSel[0];
return objEduClsCalendar;
}
else
{
if (bolTryAsyncOnce == true)
{
const objEduClsCalendarConst = await EduClsCalendar_GetObjByIdEduClsCalendarAsync(lngIdEduClsCalendar);
if (objEduClsCalendarConst != null)
{
EduClsCalendar_ReFreshThisCache(strIdCurrEduCls);
return objEduClsCalendarConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngIdEduClsCalendar, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objEduClsCalendar:所给的对象
 * @returns 对象
*/
export  async function EduClsCalendar_UpdateObjInLstCache(objEduClsCalendar: clsEduClsCalendarEN,strIdCurrEduCls: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstCache(strIdCurrEduCls);
const obj = arrEduClsCalendarObjLstCache.find(x => x.idCurrEduCls == objEduClsCalendar.idCurrEduCls && x.weekIndex == objEduClsCalendar.weekIndex);
if (obj != null)
{
objEduClsCalendar.idEduClsCalendar = obj.idEduClsCalendar;
ObjectAssign( obj, objEduClsCalendar);
}
else
{
arrEduClsCalendarObjLstCache.push(objEduClsCalendar);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, eduClsCalendar_ConstructorName, strThisFuncName);
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
export  function EduClsCalendar_SortFunDefa(a:clsEduClsCalendarEN , b:clsEduClsCalendarEN): number 
{
return a.idEduClsCalendar-b.idEduClsCalendar;
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
export  function EduClsCalendar_SortFunDefa2Fld(a:clsEduClsCalendarEN , b:clsEduClsCalendarEN): number 
{
if (a.idCurrEduCls == b.idCurrEduCls) return a.startDate.localeCompare(b.startDate);
else return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export  function EduClsCalendar_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsEduClsCalendarEN.con_IdEduClsCalendar:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return a.idEduClsCalendar-b.idEduClsCalendar;
}
case clsEduClsCalendarEN.con_IdCurrEduCls:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsEduClsCalendarEN.con_StartDate:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return a.startDate.localeCompare(b.startDate);
}
case clsEduClsCalendarEN.con_EndDate:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return a.endDate.localeCompare(b.endDate);
}
case clsEduClsCalendarEN.con_WeekIndex:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return a.weekIndex-b.weekIndex;
}
case clsEduClsCalendarEN.con_UpdDate:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsEduClsCalendarEN.con_UpdUser:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsEduClsCalendarEN.con_Memo:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[EduClsCalendar]中不存在!(in ${ eduClsCalendar_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsEduClsCalendarEN.con_IdEduClsCalendar:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return b.idEduClsCalendar-a.idEduClsCalendar;
}
case clsEduClsCalendarEN.con_IdCurrEduCls:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsEduClsCalendarEN.con_StartDate:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return b.startDate.localeCompare(a.startDate);
}
case clsEduClsCalendarEN.con_EndDate:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return b.endDate.localeCompare(a.endDate);
}
case clsEduClsCalendarEN.con_WeekIndex:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return b.weekIndex-a.weekIndex;
}
case clsEduClsCalendarEN.con_UpdDate:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsEduClsCalendarEN.con_UpdUser:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsEduClsCalendarEN.con_Memo:
return (a: clsEduClsCalendarEN, b: clsEduClsCalendarEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[EduClsCalendar]中不存在!(in ${ eduClsCalendar_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function EduClsCalendar_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsEduClsCalendarEN.con_IdEduClsCalendar:
return (obj: clsEduClsCalendarEN) => {
return obj.idEduClsCalendar === value;
}
case clsEduClsCalendarEN.con_IdCurrEduCls:
return (obj: clsEduClsCalendarEN) => {
return obj.idCurrEduCls === value;
}
case clsEduClsCalendarEN.con_StartDate:
return (obj: clsEduClsCalendarEN) => {
return obj.startDate === value;
}
case clsEduClsCalendarEN.con_EndDate:
return (obj: clsEduClsCalendarEN) => {
return obj.endDate === value;
}
case clsEduClsCalendarEN.con_WeekIndex:
return (obj: clsEduClsCalendarEN) => {
return obj.weekIndex === value;
}
case clsEduClsCalendarEN.con_UpdDate:
return (obj: clsEduClsCalendarEN) => {
return obj.updDate === value;
}
case clsEduClsCalendarEN.con_UpdUser:
return (obj: clsEduClsCalendarEN) => {
return obj.updUser === value;
}
case clsEduClsCalendarEN.con_Memo:
return (obj: clsEduClsCalendarEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[EduClsCalendar]中不存在!(in ${ eduClsCalendar_ConstructorName}.${ strThisFuncName})`;
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function EduClsCalendar_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsEduClsCalendarWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsEduClsCalendarWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsEduClsCalendarEN.con_IdEduClsCalendar)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsEduClsCalendarEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsEduClsCalendarEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngIdEduClsCalendar = Number(strInValue);
if (lngIdEduClsCalendar == 0)
{
return "";
}
const objEduClsCalendar = await EduClsCalendar_GetObjByIdEduClsCalendarCache(lngIdEduClsCalendar , strIdCurrEduClsClassfy);
if (objEduClsCalendar == null) return "";
if (objEduClsCalendar.GetFldValue(strOutFldName) == null) return "";
return objEduClsCalendar.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function EduClsCalendar_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsEduClsCalendarWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsEduClsCalendarWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsEduClsCalendarEN.con_IdEduClsCalendar)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrEduClsCalendar = await EduClsCalendar_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrEduClsCalendar == null) return [];
let arrEduClsCalendarSel = arrEduClsCalendar;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrEduClsCalendarSel.length == 0) return [];
return arrEduClsCalendarSel.map(x=>x.idEduClsCalendar);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function EduClsCalendar_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_GetFirstObjAsync(strWhereCond: string): Promise<clsEduClsCalendarEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const objEduClsCalendar = EduClsCalendar_GetObjFromJsonObj(returnObj);
return objEduClsCalendar;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsEduClsCalendarEN.WhereFormat) == false)
{
strWhereCond = Format(clsEduClsCalendarEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsEduClsCalendarEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsEduClsCalendarEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsEduClsCalendarEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrEduClsCalendarExObjLstCache: Array<clsEduClsCalendarEN> = CacheHelper.Get(strKey);
const arrEduClsCalendarObjLstT = EduClsCalendar_GetObjLstByJSONObjLst(arrEduClsCalendarExObjLstCache);
return arrEduClsCalendarObjLstT;
}
try
{
const arrEduClsCalendarExObjLst = await EduClsCalendar_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrEduClsCalendarExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrEduClsCalendarExObjLst.length);
console.log(strInfo);
return arrEduClsCalendarExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function EduClsCalendar_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsEduClsCalendarEN.WhereFormat) == false)
{
strWhereCond = Format(clsEduClsCalendarEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsEduClsCalendarEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsEduClsCalendarEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsEduClsCalendarEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsEduClsCalendarEN.CacheAddiCondition);
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
const arrEduClsCalendarExObjLstCache: Array<clsEduClsCalendarEN> = JSON.parse(strTempObjLst);
const arrEduClsCalendarObjLstT = EduClsCalendar_GetObjLstByJSONObjLst(arrEduClsCalendarExObjLstCache);
return arrEduClsCalendarObjLstT;
}
try
{
const arrEduClsCalendarExObjLst = await EduClsCalendar_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsEduClsCalendarEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrEduClsCalendarExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrEduClsCalendarExObjLst.length);
console.log(strInfo);
return arrEduClsCalendarExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function EduClsCalendar_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsEduClsCalendarEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrEduClsCalendarObjLstCache: Array<clsEduClsCalendarEN> = JSON.parse(strTempObjLst);
return arrEduClsCalendarObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function EduClsCalendar_GetObjLstAsync(strWhereCond: string): Promise<Array<clsEduClsCalendarEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = EduClsCalendar_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsEduClsCalendarEN.WhereFormat) == false)
{
strWhereCond = Format(clsEduClsCalendarEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsEduClsCalendarEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsEduClsCalendarEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsEduClsCalendarEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsEduClsCalendarEN.CacheAddiCondition);
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
const arrEduClsCalendarExObjLstCache: Array<clsEduClsCalendarEN> = JSON.parse(strTempObjLst);
const arrEduClsCalendarObjLstT = EduClsCalendar_GetObjLstByJSONObjLst(arrEduClsCalendarExObjLstCache);
return arrEduClsCalendarObjLstT;
}
try
{
const arrEduClsCalendarExObjLst = await EduClsCalendar_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsEduClsCalendarEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrEduClsCalendarExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrEduClsCalendarExObjLst.length);
console.log(strInfo);
return arrEduClsCalendarExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function EduClsCalendar_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsEduClsCalendarEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrEduClsCalendarObjLstCache: Array<clsEduClsCalendarEN> = JSON.parse(strTempObjLst);
return arrEduClsCalendarObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function EduClsCalendar_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsEduClsCalendarEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsEduClsCalendarWApi.EduClsCalendar_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsEduClsCalendarWApi.EduClsCalendar_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrEduClsCalendarObjLstCache;
switch (clsEduClsCalendarEN.CacheModeId)
{
case "04"://sessionStorage
arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrEduClsCalendarObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function EduClsCalendar_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrEduClsCalendarObjLstCache;
switch (clsEduClsCalendarEN.CacheModeId)
{
case "04"://sessionStorage
arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrEduClsCalendarObjLstCache = null;
break;
default:
arrEduClsCalendarObjLstCache = null;
break;
}
return arrEduClsCalendarObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngIdEduClsCalendarCond:条件对象
 * @returns 对象列表子集
*/
export  async function EduClsCalendar_GetSubObjLstCache(objEduClsCalendarCond: clsEduClsCalendarEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstCache(strIdCurrEduCls);
let arrEduClsCalendarSel = arrEduClsCalendarObjLstCache;
if (objEduClsCalendarCond.sfFldComparisonOp == null || objEduClsCalendarCond.sfFldComparisonOp == "") return arrEduClsCalendarSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objEduClsCalendarCond.sfFldComparisonOp);
//console.log("clsEduClsCalendarWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objEduClsCalendarCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objEduClsCalendarCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrEduClsCalendarSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objEduClsCalendarCond), eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsEduClsCalendarEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdEduClsCalendar:关键字列表
 * @returns 对象列表
 **/
export  async function EduClsCalendar_GetObjLstByIdEduClsCalendarLstAsync(arrIdEduClsCalendar: Array<string>): Promise<Array<clsEduClsCalendarEN>>  
{
const strThisFuncName = "GetObjLstByIdEduClsCalendarLstAsync";
const strAction = "GetObjLstByIdEduClsCalendarLst";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdEduClsCalendar, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = EduClsCalendar_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
 * @param arrlngIdEduClsCalendarLst:关键字列表
 * @returns 对象列表
*/
export  async function EduClsCalendar_GetObjLstByIdEduClsCalendarLstCache(arrIdEduClsCalendarLst: Array<number> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByIdEduClsCalendarLstCache";
try
{
const arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstCache(strIdCurrEduCls);
const arrEduClsCalendarSel = arrEduClsCalendarObjLstCache.filter(x => arrIdEduClsCalendarLst.indexOf(x.idEduClsCalendar)>-1);
return arrEduClsCalendarSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdEduClsCalendarLst.join(","), eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsEduClsCalendarEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = EduClsCalendar_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsEduClsCalendarEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = EduClsCalendar_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsEduClsCalendarEN>();
const arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstCache(strIdCurrEduCls);
if (arrEduClsCalendarObjLstCache.length == 0) return arrEduClsCalendarObjLstCache;
let arrEduClsCalendarSel = arrEduClsCalendarObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objEduClsCalendarCond = new clsEduClsCalendarEN();
ObjectAssign(objEduClsCalendarCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsEduClsCalendarWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objEduClsCalendarCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrEduClsCalendarSel.length == 0) return arrEduClsCalendarSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrEduClsCalendarSel = arrEduClsCalendarSel.sort(EduClsCalendar_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrEduClsCalendarSel = arrEduClsCalendarSel.sort(objPagerPara.sortFun);
}
arrEduClsCalendarSel = arrEduClsCalendarSel.slice(intStart, intEnd);     
return arrEduClsCalendarSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsEduClsCalendarEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function EduClsCalendar_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsEduClsCalendarEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsEduClsCalendarEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = EduClsCalendar_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
 * @param lngIdEduClsCalendar:关键字
 * @returns 获取删除的结果
 **/
export  async function EduClsCalendar_DelRecordAsync(lngIdEduClsCalendar: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngIdEduClsCalendar);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
 * @param arrIdEduClsCalendar:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function EduClsCalendar_DelEduClsCalendarsAsync(arrIdEduClsCalendar: Array<string>): Promise<number> 
{
const strThisFuncName = "DelEduClsCalendarsAsync";
const strAction = "DelEduClsCalendars";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdEduClsCalendar, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_DelEduClsCalendarsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelEduClsCalendarsByCondAsync";
const strAction = "DelEduClsCalendarsByCond";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
 * @param objEduClsCalendarEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function EduClsCalendar_AddNewRecordAsync(objEduClsCalendarEN: clsEduClsCalendarEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objEduClsCalendarEN);
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objEduClsCalendarEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

 /** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export  async function EduClsCalendar_AddNewObjSave(objEduClsCalendarEN: clsEduClsCalendarEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
EduClsCalendar_CheckPropertyNew(objEduClsCalendarEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ eduClsCalendar_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await EduClsCalendar_CheckUniCond4Add(objEduClsCalendarEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await EduClsCalendar_AddNewRecordAsync(objEduClsCalendarEN);
if (returnBool == true)
{
EduClsCalendar_ReFreshCache(objEduClsCalendarEN.idCurrEduCls);
}
else
{
const strInfo = `添加[教学班学历(EduClsCalendar)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objEduClsCalendarEN.idEduClsCalendar.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ eduClsCalendar_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function EduClsCalendar_CheckUniCond4Add(objEduClsCalendarEN: clsEduClsCalendarEN): Promise<boolean>{
const strUniquenessCondition = EduClsCalendar_GetUniCondStr(objEduClsCalendarEN);
const bolIsExistCondition = await EduClsCalendar_IsExistRecordAsync(strUniquenessCondition);
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
export  async function EduClsCalendar_CheckUniCond4Update(objEduClsCalendarEN: clsEduClsCalendarEN): Promise<boolean>{
const strUniquenessCondition = EduClsCalendar_GetUniCondStr4Update(objEduClsCalendarEN);
const bolIsExistCondition = await EduClsCalendar_IsExistRecordAsync(strUniquenessCondition);
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
export  async function EduClsCalendar_UpdateObjSave(objEduClsCalendarEN: clsEduClsCalendarEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objEduClsCalendarEN.sfUpdFldSetStr = objEduClsCalendarEN.updFldString;//设置哪些字段被修改(脏字段)
if (objEduClsCalendarEN.idEduClsCalendar == 0 || objEduClsCalendarEN.idEduClsCalendar == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
EduClsCalendar_CheckProperty4Update(objEduClsCalendarEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ eduClsCalendar_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await EduClsCalendar_CheckUniCond4Update(objEduClsCalendarEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await EduClsCalendar_UpdateRecordAsync(objEduClsCalendarEN);
if (returnBool == true)
{
EduClsCalendar_ReFreshCache(objEduClsCalendarEN.idCurrEduCls);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ eduClsCalendar_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objEduClsCalendarEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function EduClsCalendar_AddNewRecordWithReturnKeyAsync(objEduClsCalendarEN: clsEduClsCalendarEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objEduClsCalendarEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
 * @param objEduClsCalendarEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function EduClsCalendar_UpdateRecordAsync(objEduClsCalendarEN: clsEduClsCalendarEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objEduClsCalendarEN.sfUpdFldSetStr === undefined || objEduClsCalendarEN.sfUpdFldSetStr === null || objEduClsCalendarEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objEduClsCalendarEN.idEduClsCalendar);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objEduClsCalendarEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
 * @param objEduClsCalendarEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function EduClsCalendar_EditRecordExAsync(objEduClsCalendarEN: clsEduClsCalendarEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objEduClsCalendarEN.sfUpdFldSetStr === undefined || objEduClsCalendarEN.sfUpdFldSetStr === null || objEduClsCalendarEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objEduClsCalendarEN.idEduClsCalendar);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objEduClsCalendarEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
 * @param objEduClsCalendarEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function EduClsCalendar_UpdateWithConditionAsync(objEduClsCalendarEN: clsEduClsCalendarEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objEduClsCalendarEN.sfUpdFldSetStr === undefined || objEduClsCalendarEN.sfUpdFldSetStr === null || objEduClsCalendarEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objEduClsCalendarEN.idEduClsCalendar);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);
objEduClsCalendarEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objEduClsCalendarEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
 * @param objlngIdEduClsCalendarCond:条件对象
 * @returns 对象列表子集
*/
export  async function EduClsCalendar_IsExistRecordCache(objEduClsCalendarCond: clsEduClsCalendarEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstCache(strIdCurrEduCls);
if (arrEduClsCalendarObjLstCache == null) return false;
let arrEduClsCalendarSel = arrEduClsCalendarObjLstCache;
if (objEduClsCalendarCond.sfFldComparisonOp == null || objEduClsCalendarCond.sfFldComparisonOp == "") return arrEduClsCalendarSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objEduClsCalendarCond.sfFldComparisonOp);
//console.log("clsEduClsCalendarWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objEduClsCalendarCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objEduClsCalendarCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrEduClsCalendarSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objEduClsCalendarCond), eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
 * @param lngIdEduClsCalendar:所给的关键字
 * @returns 对象
*/
export  async function EduClsCalendar_IsExistCache(lngIdEduClsCalendar:number,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstCache(strIdCurrEduCls);
if (arrEduClsCalendarObjLstCache == null) return false;
try
{
const arrEduClsCalendarSel = arrEduClsCalendarObjLstCache.filter(x => x.idEduClsCalendar == lngIdEduClsCalendar);
if (arrEduClsCalendarSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngIdEduClsCalendar, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngIdEduClsCalendar:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function EduClsCalendar_IsExistAsync(lngIdEduClsCalendar: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdEduClsCalendar
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
 * @param objEduClsCalendarCond:条件对象
 * @returns 对象列表记录数
*/
export  async function EduClsCalendar_GetRecCountByCondCache(objEduClsCalendarCond: clsEduClsCalendarEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrEduClsCalendarObjLstCache = await EduClsCalendar_GetObjLstCache(strIdCurrEduCls);
if (arrEduClsCalendarObjLstCache == null) return 0;
let arrEduClsCalendarSel = arrEduClsCalendarObjLstCache;
if (objEduClsCalendarCond.sfFldComparisonOp == null || objEduClsCalendarCond.sfFldComparisonOp == "") return arrEduClsCalendarSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objEduClsCalendarCond.sfFldComparisonOp);
//console.log("clsEduClsCalendarWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objEduClsCalendarCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objEduClsCalendarCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrEduClsCalendarSel = arrEduClsCalendarSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrEduClsCalendarSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objEduClsCalendarCond), eduClsCalendar_ConstructorName, strThisFuncName);
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
export  async function EduClsCalendar_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(eduClsCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, eduClsCalendar_ConstructorName, strThisFuncName);
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
export  function EduClsCalendar_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function EduClsCalendar_ReFreshCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsEduClsCalendarWApi.clsEduClsCalendarWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsEduClsCalendarWApi.clsEduClsCalendarWApi.ReFreshCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsEduClsCalendarEN._CurrTabName, strIdCurrEduCls);
switch (clsEduClsCalendarEN.CacheModeId)
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
clsEduClsCalendarEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function EduClsCalendar_ReFreshThisCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsEduClsCalendarWApi.EduClsCalendar_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsEduClsCalendarWApi.EduClsCalendar_ReFreshThisCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsEduClsCalendarEN._CurrTabName, strIdCurrEduCls);
switch (clsEduClsCalendarEN.CacheModeId)
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
clsEduClsCalendarEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function EduClsCalendar_GetLastRefreshTime():string
{
if (clsEduClsCalendarEN._RefreshTimeLst.length == 0) return "";
return clsEduClsCalendarEN._RefreshTimeLst[clsEduClsCalendarEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function EduClsCalendar_CheckPropertyNew(pobjEduClsCalendarEN: clsEduClsCalendarEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjEduClsCalendarEN.idCurrEduCls) === true 
 || pobjEduClsCalendarEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教学班流水号]不能为空(In 教学班学历)!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.startDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[开始日期]不能为空(In 教学班学历)!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.endDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[截止日期]不能为空(In 教学班学历)!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (null === pobjEduClsCalendarEN.weekIndex 
 || pobjEduClsCalendarEN.weekIndex != null && pobjEduClsCalendarEN.weekIndex.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[周序号]不能为空(In 教学班学历)!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.updDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改日期]不能为空(In 教学班学历)!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 教学班学历)!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjEduClsCalendarEN.idCurrEduCls) == false && GetStrLen(pobjEduClsCalendarEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.idCurrEduCls}(clsEduClsCalendarBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.startDate) == false && GetStrLen(pobjEduClsCalendarEN.startDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[开始日期(startDate)]的长度不能超过20(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.startDate}(clsEduClsCalendarBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.endDate) == false && GetStrLen(pobjEduClsCalendarEN.endDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[截止日期(endDate)]的长度不能超过20(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.endDate}(clsEduClsCalendarBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.updDate) == false && GetStrLen(pobjEduClsCalendarEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.updDate}(clsEduClsCalendarBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.updUser) == false && GetStrLen(pobjEduClsCalendarEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.updUser}(clsEduClsCalendarBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.memo) == false && GetStrLen(pobjEduClsCalendarEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.memo}(clsEduClsCalendarBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjEduClsCalendarEN.idEduClsCalendar && undefined !== pobjEduClsCalendarEN.idEduClsCalendar && tzDataType.isNumber(pobjEduClsCalendarEN.idEduClsCalendar) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班学历流水号(idEduClsCalendar)]的值:[${pobjEduClsCalendarEN.idEduClsCalendar}], 非法,应该为数值型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.idCurrEduCls) == false && undefined !== pobjEduClsCalendarEN.idCurrEduCls && tzDataType.isString(pobjEduClsCalendarEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjEduClsCalendarEN.idCurrEduCls}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.startDate) == false && undefined !== pobjEduClsCalendarEN.startDate && tzDataType.isString(pobjEduClsCalendarEN.startDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[开始日期(startDate)]的值:[${pobjEduClsCalendarEN.startDate}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.endDate) == false && undefined !== pobjEduClsCalendarEN.endDate && tzDataType.isString(pobjEduClsCalendarEN.endDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[截止日期(endDate)]的值:[${pobjEduClsCalendarEN.endDate}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (null != pobjEduClsCalendarEN.weekIndex && undefined !== pobjEduClsCalendarEN.weekIndex && tzDataType.isNumber(pobjEduClsCalendarEN.weekIndex) === false)
{
 throw new Error(`(errid:Watl000414)字段[周序号(weekIndex)]的值:[${pobjEduClsCalendarEN.weekIndex}], 非法,应该为数值型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.updDate) == false && undefined !== pobjEduClsCalendarEN.updDate && tzDataType.isString(pobjEduClsCalendarEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjEduClsCalendarEN.updDate}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.updUser) == false && undefined !== pobjEduClsCalendarEN.updUser && tzDataType.isString(pobjEduClsCalendarEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjEduClsCalendarEN.updUser}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.memo) == false && undefined !== pobjEduClsCalendarEN.memo && tzDataType.isString(pobjEduClsCalendarEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjEduClsCalendarEN.memo}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function EduClsCalendar_CheckProperty4Update(pobjEduClsCalendarEN: clsEduClsCalendarEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjEduClsCalendarEN.idCurrEduCls) == false && GetStrLen(pobjEduClsCalendarEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.idCurrEduCls}(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.startDate) == false && GetStrLen(pobjEduClsCalendarEN.startDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[开始日期(startDate)]的长度不能超过20(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.startDate}(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.endDate) == false && GetStrLen(pobjEduClsCalendarEN.endDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[截止日期(endDate)]的长度不能超过20(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.endDate}(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.updDate) == false && GetStrLen(pobjEduClsCalendarEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.updDate}(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.updUser) == false && GetStrLen(pobjEduClsCalendarEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.updUser}(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.memo) == false && GetStrLen(pobjEduClsCalendarEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教学班学历(EduClsCalendar))!值:${pobjEduClsCalendarEN.memo}(clsEduClsCalendarBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjEduClsCalendarEN.idEduClsCalendar && undefined !== pobjEduClsCalendarEN.idEduClsCalendar && tzDataType.isNumber(pobjEduClsCalendarEN.idEduClsCalendar) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班学历流水号(idEduClsCalendar)]的值:[${pobjEduClsCalendarEN.idEduClsCalendar}], 非法,应该为数值型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.idCurrEduCls) == false && undefined !== pobjEduClsCalendarEN.idCurrEduCls && tzDataType.isString(pobjEduClsCalendarEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjEduClsCalendarEN.idCurrEduCls}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.startDate) == false && undefined !== pobjEduClsCalendarEN.startDate && tzDataType.isString(pobjEduClsCalendarEN.startDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[开始日期(startDate)]的值:[${pobjEduClsCalendarEN.startDate}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.endDate) == false && undefined !== pobjEduClsCalendarEN.endDate && tzDataType.isString(pobjEduClsCalendarEN.endDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[截止日期(endDate)]的值:[${pobjEduClsCalendarEN.endDate}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (null != pobjEduClsCalendarEN.weekIndex && undefined !== pobjEduClsCalendarEN.weekIndex && tzDataType.isNumber(pobjEduClsCalendarEN.weekIndex) === false)
{
 throw new Error(`(errid:Watl000417)字段[周序号(weekIndex)]的值:[${pobjEduClsCalendarEN.weekIndex}], 非法,应该为数值型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.updDate) == false && undefined !== pobjEduClsCalendarEN.updDate && tzDataType.isString(pobjEduClsCalendarEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjEduClsCalendarEN.updDate}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.updUser) == false && undefined !== pobjEduClsCalendarEN.updUser && tzDataType.isString(pobjEduClsCalendarEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjEduClsCalendarEN.updUser}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjEduClsCalendarEN.memo) == false && undefined !== pobjEduClsCalendarEN.memo && tzDataType.isString(pobjEduClsCalendarEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjEduClsCalendarEN.memo}], 非法,应该为字符型(In 教学班学历(EduClsCalendar))!(clsEduClsCalendarBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjEduClsCalendarEN.idEduClsCalendar 
 || pobjEduClsCalendarEN.idEduClsCalendar != null && pobjEduClsCalendarEN.idEduClsCalendar.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[教学班学历流水号]不能为空(In 教学班学历)!(clsEduClsCalendarBL:CheckProperty4Update)`);
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
export  function EduClsCalendar_GetJSONStrByObj (pobjEduClsCalendarEN: clsEduClsCalendarEN): string
{
pobjEduClsCalendarEN.sfUpdFldSetStr = pobjEduClsCalendarEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjEduClsCalendarEN);
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
export  function EduClsCalendar_GetObjLstByJSONStr (strJSON: string): Array<clsEduClsCalendarEN>
{
let arrEduClsCalendarObjLst = new Array<clsEduClsCalendarEN>();
if (strJSON === "")
{
return arrEduClsCalendarObjLst;
}
try
{
arrEduClsCalendarObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrEduClsCalendarObjLst;
}
return arrEduClsCalendarObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrEduClsCalendarObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function EduClsCalendar_GetObjLstByJSONObjLst (arrEduClsCalendarObjLstS: Array<clsEduClsCalendarEN>): Array<clsEduClsCalendarEN>
{
const arrEduClsCalendarObjLst = new Array<clsEduClsCalendarEN>();
for (const objInFor of arrEduClsCalendarObjLstS) {
const obj1 = EduClsCalendar_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrEduClsCalendarObjLst.push(obj1);
}
return arrEduClsCalendarObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function EduClsCalendar_GetObjByJSONStr (strJSON: string): clsEduClsCalendarEN
{
let pobjEduClsCalendarEN = new clsEduClsCalendarEN();
if (strJSON === "")
{
return pobjEduClsCalendarEN;
}
try
{
pobjEduClsCalendarEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjEduClsCalendarEN;
}
return pobjEduClsCalendarEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function EduClsCalendar_GetCombineCondition(objEduClsCalendarCond: clsEduClsCalendarEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objEduClsCalendarCond.dicFldComparisonOp, clsEduClsCalendarEN.con_IdEduClsCalendar) == true)
{
const strComparisonOpIdEduClsCalendar:string = objEduClsCalendarCond.dicFldComparisonOp[clsEduClsCalendarEN.con_IdEduClsCalendar];
strWhereCond += Format(" And {0} {2} {1}", clsEduClsCalendarEN.con_IdEduClsCalendar, objEduClsCalendarCond.idEduClsCalendar, strComparisonOpIdEduClsCalendar);
}
if (Object.prototype.hasOwnProperty.call(objEduClsCalendarCond.dicFldComparisonOp, clsEduClsCalendarEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objEduClsCalendarCond.dicFldComparisonOp[clsEduClsCalendarEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsEduClsCalendarEN.con_IdCurrEduCls, objEduClsCalendarCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objEduClsCalendarCond.dicFldComparisonOp, clsEduClsCalendarEN.con_StartDate) == true)
{
const strComparisonOpStartDate:string = objEduClsCalendarCond.dicFldComparisonOp[clsEduClsCalendarEN.con_StartDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsEduClsCalendarEN.con_StartDate, objEduClsCalendarCond.startDate, strComparisonOpStartDate);
}
if (Object.prototype.hasOwnProperty.call(objEduClsCalendarCond.dicFldComparisonOp, clsEduClsCalendarEN.con_EndDate) == true)
{
const strComparisonOpEndDate:string = objEduClsCalendarCond.dicFldComparisonOp[clsEduClsCalendarEN.con_EndDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsEduClsCalendarEN.con_EndDate, objEduClsCalendarCond.endDate, strComparisonOpEndDate);
}
if (Object.prototype.hasOwnProperty.call(objEduClsCalendarCond.dicFldComparisonOp, clsEduClsCalendarEN.con_WeekIndex) == true)
{
const strComparisonOpWeekIndex:string = objEduClsCalendarCond.dicFldComparisonOp[clsEduClsCalendarEN.con_WeekIndex];
strWhereCond += Format(" And {0} {2} {1}", clsEduClsCalendarEN.con_WeekIndex, objEduClsCalendarCond.weekIndex, strComparisonOpWeekIndex);
}
if (Object.prototype.hasOwnProperty.call(objEduClsCalendarCond.dicFldComparisonOp, clsEduClsCalendarEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objEduClsCalendarCond.dicFldComparisonOp[clsEduClsCalendarEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsEduClsCalendarEN.con_UpdDate, objEduClsCalendarCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objEduClsCalendarCond.dicFldComparisonOp, clsEduClsCalendarEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objEduClsCalendarCond.dicFldComparisonOp[clsEduClsCalendarEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsEduClsCalendarEN.con_UpdUser, objEduClsCalendarCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objEduClsCalendarCond.dicFldComparisonOp, clsEduClsCalendarEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objEduClsCalendarCond.dicFldComparisonOp[clsEduClsCalendarEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsEduClsCalendarEN.con_Memo, objEduClsCalendarCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--EduClsCalendar(教学班学历),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param intWeekIndex: 周序号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function EduClsCalendar_GetUniCondStr(objEduClsCalendarEN: clsEduClsCalendarEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objEduClsCalendarEN.idCurrEduCls);
 strWhereCond +=  Format(" and WeekIndex = '{0}'", objEduClsCalendarEN.weekIndex);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--EduClsCalendar(教学班学历),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param intWeekIndex: 周序号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function EduClsCalendar_GetUniCondStr4Update(objEduClsCalendarEN: clsEduClsCalendarEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdEduClsCalendar <> '{0}'", objEduClsCalendarEN.idEduClsCalendar);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objEduClsCalendarEN.idCurrEduCls);
 strWhereCond +=  Format(" and WeekIndex = '{0}'", objEduClsCalendarEN.weekIndex);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objEduClsCalendarENS:源对象
 * @param objEduClsCalendarENT:目标对象
*/
export  function EduClsCalendar_CopyObjTo(objEduClsCalendarENS: clsEduClsCalendarEN , objEduClsCalendarENT: clsEduClsCalendarEN ): void 
{
objEduClsCalendarENT.idEduClsCalendar = objEduClsCalendarENS.idEduClsCalendar; //教学班学历流水号
objEduClsCalendarENT.idCurrEduCls = objEduClsCalendarENS.idCurrEduCls; //教学班流水号
objEduClsCalendarENT.startDate = objEduClsCalendarENS.startDate; //开始日期
objEduClsCalendarENT.endDate = objEduClsCalendarENS.endDate; //截止日期
objEduClsCalendarENT.weekIndex = objEduClsCalendarENS.weekIndex; //周序号
objEduClsCalendarENT.updDate = objEduClsCalendarENS.updDate; //修改日期
objEduClsCalendarENT.updUser = objEduClsCalendarENS.updUser; //修改人
objEduClsCalendarENT.memo = objEduClsCalendarENS.memo; //备注
objEduClsCalendarENT.sfUpdFldSetStr = objEduClsCalendarENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objEduClsCalendarENS:源对象
 * @param objEduClsCalendarENT:目标对象
*/
export  function EduClsCalendar_GetObjFromJsonObj(objEduClsCalendarENS: clsEduClsCalendarEN): clsEduClsCalendarEN 
{
 const objEduClsCalendarENT: clsEduClsCalendarEN = new clsEduClsCalendarEN();
ObjectAssign(objEduClsCalendarENT, objEduClsCalendarENS);
 return objEduClsCalendarENT;
}