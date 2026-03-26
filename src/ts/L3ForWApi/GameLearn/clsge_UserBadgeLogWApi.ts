
 /**
 * 类名:clsge_UserBadgeLogWApi
 * 表名:ge_UserBadgeLog(01120881)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:19
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
 * 用户徽章日志(ge_UserBadgeLog)
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
import { clsge_UserBadgeLogEN } from "@/ts/L0Entity/GameLearn/clsge_UserBadgeLogEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_UserBadgeLog_Controller = "ge_UserBadgeLogApi";
 export const ge_UserBadgeLog_ConstructorName = "ge_UserBadgeLog";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function ge_UserBadgeLog_GetObjBymIdAsync(lngmId: number): Promise<clsge_UserBadgeLogEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_UserBadgeLogWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId,
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
const objge_UserBadgeLog = ge_UserBadgeLog_GetObjFromJsonObj(returnObj);
return objge_UserBadgeLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function ge_UserBadgeLog_GetObjBymIdlocalStorage(lngmId: number) {
const strThisFuncName = "GetObjBymIdlocalStorage";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_UserBadgeLogWApi.GetObjBymIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_UserBadgeLogEN._CurrTabName, lngmId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_UserBadgeLogCache: clsge_UserBadgeLogEN = JSON.parse(strTempObj);
return objge_UserBadgeLogCache;
}
try
{
const objge_UserBadgeLog = await ge_UserBadgeLog_GetObjBymIdAsync(lngmId);
if (objge_UserBadgeLog != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_UserBadgeLog));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_UserBadgeLog;
}
return objge_UserBadgeLog;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function ge_UserBadgeLog_GetObjBymIdCache(lngmId:number,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBymIdCache";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_UserBadgeLogWApi.GetObjBymIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstCache(strIdCurrEduCls);
try
{
const arrge_UserBadgeLogSel = arrge_UserBadgeLogObjLstCache.filter(x => 
 x.mId == lngmId );
let objge_UserBadgeLog: clsge_UserBadgeLogEN;
if (arrge_UserBadgeLogSel.length > 0)
{
objge_UserBadgeLog = arrge_UserBadgeLogSel[0];
return objge_UserBadgeLog;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_UserBadgeLogConst = await ge_UserBadgeLog_GetObjBymIdAsync(lngmId);
if (objge_UserBadgeLogConst != null)
{
ge_UserBadgeLog_ReFreshThisCache(strIdCurrEduCls);
return objge_UserBadgeLogConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_UserBadgeLog:所给的对象
 * @returns 对象
*/
export  async function ge_UserBadgeLog_UpdateObjInLstCache(objge_UserBadgeLog: clsge_UserBadgeLogEN,strIdCurrEduCls: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstCache(strIdCurrEduCls);
const obj = arrge_UserBadgeLogObjLstCache.find(x => x.idCurrEduCls == objge_UserBadgeLog.idCurrEduCls && x.userId == objge_UserBadgeLog.userId && x.badgeTypeId == objge_UserBadgeLog.badgeTypeId && x.gameLevelId == objge_UserBadgeLog.gameLevelId && x.getDate == objge_UserBadgeLog.getDate);
if (obj != null)
{
objge_UserBadgeLog.mId = obj.mId;
ObjectAssign( obj, objge_UserBadgeLog);
}
else
{
arrge_UserBadgeLogObjLstCache.push(objge_UserBadgeLog);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  function ge_UserBadgeLog_SortFunDefa(a:clsge_UserBadgeLogEN , b:clsge_UserBadgeLogEN): number 
{
return a.mId-b.mId;
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
export  function ge_UserBadgeLog_SortFunDefa2Fld(a:clsge_UserBadgeLogEN , b:clsge_UserBadgeLogEN): number 
{
if (a.idCurrEduCls == b.idCurrEduCls) return a.userId.localeCompare(b.userId);
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
export  function ge_UserBadgeLog_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_UserBadgeLogEN.con_mId:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
return a.mId-b.mId;
}
case clsge_UserBadgeLogEN.con_IdCurrEduCls:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsge_UserBadgeLogEN.con_UserId:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
return a.userId.localeCompare(b.userId);
}
case clsge_UserBadgeLogEN.con_BadgeTypeId:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
return a.badgeTypeId.localeCompare(b.badgeTypeId);
}
case clsge_UserBadgeLogEN.con_BadgeNum:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
return a.badgeNum-b.badgeNum;
}
case clsge_UserBadgeLogEN.con_GameLevelId:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (a.gameLevelId == null) return -1;
if (b.gameLevelId == null) return 1;
return a.gameLevelId.localeCompare(b.gameLevelId);
}
case clsge_UserBadgeLogEN.con_GetInstructions:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (a.getInstructions == null) return -1;
if (b.getInstructions == null) return 1;
return a.getInstructions.localeCompare(b.getInstructions);
}
case clsge_UserBadgeLogEN.con_GetDate:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (a.getDate == null) return -1;
if (b.getDate == null) return 1;
return a.getDate.localeCompare(b.getDate);
}
case clsge_UserBadgeLogEN.con_CourseChapterId:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (a.courseChapterId == null) return -1;
if (b.courseChapterId == null) return 1;
return a.courseChapterId.localeCompare(b.courseChapterId);
}
case clsge_UserBadgeLogEN.con_UpdDate:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_UserBadgeLogEN.con_UpdUser:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_UserBadgeLogEN.con_Memo:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserBadgeLog]中不存在!(in ${ ge_UserBadgeLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_UserBadgeLogEN.con_mId:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
return b.mId-a.mId;
}
case clsge_UserBadgeLogEN.con_IdCurrEduCls:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsge_UserBadgeLogEN.con_UserId:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
return b.userId.localeCompare(a.userId);
}
case clsge_UserBadgeLogEN.con_BadgeTypeId:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
return b.badgeTypeId.localeCompare(a.badgeTypeId);
}
case clsge_UserBadgeLogEN.con_BadgeNum:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
return b.badgeNum-a.badgeNum;
}
case clsge_UserBadgeLogEN.con_GameLevelId:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (b.gameLevelId == null) return -1;
if (a.gameLevelId == null) return 1;
return b.gameLevelId.localeCompare(a.gameLevelId);
}
case clsge_UserBadgeLogEN.con_GetInstructions:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (b.getInstructions == null) return -1;
if (a.getInstructions == null) return 1;
return b.getInstructions.localeCompare(a.getInstructions);
}
case clsge_UserBadgeLogEN.con_GetDate:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (b.getDate == null) return -1;
if (a.getDate == null) return 1;
return b.getDate.localeCompare(a.getDate);
}
case clsge_UserBadgeLogEN.con_CourseChapterId:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (b.courseChapterId == null) return -1;
if (a.courseChapterId == null) return 1;
return b.courseChapterId.localeCompare(a.courseChapterId);
}
case clsge_UserBadgeLogEN.con_UpdDate:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_UserBadgeLogEN.con_UpdUser:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_UserBadgeLogEN.con_Memo:
return (a: clsge_UserBadgeLogEN, b: clsge_UserBadgeLogEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserBadgeLog]中不存在!(in ${ ge_UserBadgeLog_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_UserBadgeLog_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_UserBadgeLogEN.con_mId:
return (obj: clsge_UserBadgeLogEN) => {
return obj.mId === value;
}
case clsge_UserBadgeLogEN.con_IdCurrEduCls:
return (obj: clsge_UserBadgeLogEN) => {
return obj.idCurrEduCls === value;
}
case clsge_UserBadgeLogEN.con_UserId:
return (obj: clsge_UserBadgeLogEN) => {
return obj.userId === value;
}
case clsge_UserBadgeLogEN.con_BadgeTypeId:
return (obj: clsge_UserBadgeLogEN) => {
return obj.badgeTypeId === value;
}
case clsge_UserBadgeLogEN.con_BadgeNum:
return (obj: clsge_UserBadgeLogEN) => {
return obj.badgeNum === value;
}
case clsge_UserBadgeLogEN.con_GameLevelId:
return (obj: clsge_UserBadgeLogEN) => {
return obj.gameLevelId === value;
}
case clsge_UserBadgeLogEN.con_GetInstructions:
return (obj: clsge_UserBadgeLogEN) => {
return obj.getInstructions === value;
}
case clsge_UserBadgeLogEN.con_GetDate:
return (obj: clsge_UserBadgeLogEN) => {
return obj.getDate === value;
}
case clsge_UserBadgeLogEN.con_CourseChapterId:
return (obj: clsge_UserBadgeLogEN) => {
return obj.courseChapterId === value;
}
case clsge_UserBadgeLogEN.con_UpdDate:
return (obj: clsge_UserBadgeLogEN) => {
return obj.updDate === value;
}
case clsge_UserBadgeLogEN.con_UpdUser:
return (obj: clsge_UserBadgeLogEN) => {
return obj.updUser === value;
}
case clsge_UserBadgeLogEN.con_Memo:
return (obj: clsge_UserBadgeLogEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserBadgeLog]中不存在!(in ${ ge_UserBadgeLog_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_UserBadgeLog_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsge_UserBadgeLogWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsge_UserBadgeLogWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsge_UserBadgeLogEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_UserBadgeLogEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_UserBadgeLogEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngmId = Number(strInValue);
if (lngmId == 0)
{
return "";
}
const objge_UserBadgeLog = await ge_UserBadgeLog_GetObjBymIdCache(lngmId , strIdCurrEduClsClassfy);
if (objge_UserBadgeLog == null) return "";
if (objge_UserBadgeLog.GetFldValue(strOutFldName) == null) return "";
return objge_UserBadgeLog.GetFldValue(strOutFldName).toString();
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
export  async function ge_UserBadgeLog_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsge_UserBadgeLogWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsge_UserBadgeLogWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsge_UserBadgeLogEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrge_UserBadgeLog = await ge_UserBadgeLog_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrge_UserBadgeLog == null) return [];
let arrge_UserBadgeLogSel = arrge_UserBadgeLog;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_UserBadgeLogSel.length == 0) return [];
return arrge_UserBadgeLogSel.map(x=>x.mId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserBadgeLog_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_GetFirstObjAsync(strWhereCond: string): Promise<clsge_UserBadgeLogEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const objge_UserBadgeLog = ge_UserBadgeLog_GetObjFromJsonObj(returnObj);
return objge_UserBadgeLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_UserBadgeLogEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_UserBadgeLogEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsge_UserBadgeLogEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsge_UserBadgeLogEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_UserBadgeLogEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_UserBadgeLogExObjLstCache: Array<clsge_UserBadgeLogEN> = CacheHelper.Get(strKey);
const arrge_UserBadgeLogObjLstT = ge_UserBadgeLog_GetObjLstByJSONObjLst(arrge_UserBadgeLogExObjLstCache);
return arrge_UserBadgeLogObjLstT;
}
try
{
const arrge_UserBadgeLogExObjLst = await ge_UserBadgeLog_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_UserBadgeLogExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_UserBadgeLogExObjLst.length);
console.log(strInfo);
return arrge_UserBadgeLogExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_UserBadgeLog_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_UserBadgeLogEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_UserBadgeLogEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_UserBadgeLogEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsge_UserBadgeLogEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsge_UserBadgeLogEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_UserBadgeLogEN.CacheAddiCondition);
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
const arrge_UserBadgeLogExObjLstCache: Array<clsge_UserBadgeLogEN> = JSON.parse(strTempObjLst);
const arrge_UserBadgeLogObjLstT = ge_UserBadgeLog_GetObjLstByJSONObjLst(arrge_UserBadgeLogExObjLstCache);
return arrge_UserBadgeLogObjLstT;
}
try
{
const arrge_UserBadgeLogExObjLst = await ge_UserBadgeLog_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_UserBadgeLogExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_UserBadgeLogExObjLst.length);
console.log(strInfo);
return arrge_UserBadgeLogExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_UserBadgeLog_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_UserBadgeLogEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_UserBadgeLogObjLstCache: Array<clsge_UserBadgeLogEN> = JSON.parse(strTempObjLst);
return arrge_UserBadgeLogObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_UserBadgeLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_UserBadgeLogEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserBadgeLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_UserBadgeLogEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_UserBadgeLogEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_UserBadgeLogEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsge_UserBadgeLogEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsge_UserBadgeLogEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_UserBadgeLogEN.CacheAddiCondition);
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
const arrge_UserBadgeLogExObjLstCache: Array<clsge_UserBadgeLogEN> = JSON.parse(strTempObjLst);
const arrge_UserBadgeLogObjLstT = ge_UserBadgeLog_GetObjLstByJSONObjLst(arrge_UserBadgeLogExObjLstCache);
return arrge_UserBadgeLogObjLstT;
}
try
{
const arrge_UserBadgeLogExObjLst = await ge_UserBadgeLog_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_UserBadgeLogExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_UserBadgeLogExObjLst.length);
console.log(strInfo);
return arrge_UserBadgeLogExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_UserBadgeLog_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_UserBadgeLogEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_UserBadgeLogObjLstCache: Array<clsge_UserBadgeLogEN> = JSON.parse(strTempObjLst);
return arrge_UserBadgeLogObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_UserBadgeLog_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsge_UserBadgeLogEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsge_UserBadgeLogWApi.ge_UserBadgeLog_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsge_UserBadgeLogWApi.ge_UserBadgeLog_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrge_UserBadgeLogObjLstCache;
switch (clsge_UserBadgeLogEN.CacheModeId)
{
case "04"://sessionStorage
arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrge_UserBadgeLogObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_UserBadgeLog_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_UserBadgeLogObjLstCache;
switch (clsge_UserBadgeLogEN.CacheModeId)
{
case "04"://sessionStorage
arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrge_UserBadgeLogObjLstCache = null;
break;
default:
arrge_UserBadgeLogObjLstCache = null;
break;
}
return arrge_UserBadgeLogObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_UserBadgeLog_GetSubObjLstCache(objge_UserBadgeLogCond: clsge_UserBadgeLogEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstCache(strIdCurrEduCls);
let arrge_UserBadgeLogSel = arrge_UserBadgeLogObjLstCache;
if (objge_UserBadgeLogCond.sfFldComparisonOp == null || objge_UserBadgeLogCond.sfFldComparisonOp == "") return arrge_UserBadgeLogSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_UserBadgeLogCond.sfFldComparisonOp);
//console.log("clsge_UserBadgeLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_UserBadgeLogCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_UserBadgeLogCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_UserBadgeLogSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_UserBadgeLogCond), ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_UserBadgeLogEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_UserBadgeLog_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsge_UserBadgeLogEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserBadgeLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_UserBadgeLog_GetObjLstBymIdLstCache(arrmIdLst: Array<number> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstBymIdLstCache";
try
{
const arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstCache(strIdCurrEduCls);
const arrge_UserBadgeLogSel = arrge_UserBadgeLogObjLstCache.filter(x => arrmIdLst.indexOf(x.mId)>-1);
return arrge_UserBadgeLogSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrmIdLst.join(","), ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_UserBadgeLogEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserBadgeLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_UserBadgeLogEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserBadgeLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_UserBadgeLogEN>();
const arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstCache(strIdCurrEduCls);
if (arrge_UserBadgeLogObjLstCache.length == 0) return arrge_UserBadgeLogObjLstCache;
let arrge_UserBadgeLogSel = arrge_UserBadgeLogObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_UserBadgeLogCond = new clsge_UserBadgeLogEN();
ObjectAssign(objge_UserBadgeLogCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_UserBadgeLogWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_UserBadgeLogCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_UserBadgeLogSel.length == 0) return arrge_UserBadgeLogSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.sort(ge_UserBadgeLog_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.sort(objPagerPara.sortFun);
}
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.slice(intStart, intEnd);     
return arrge_UserBadgeLogSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_UserBadgeLogEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_UserBadgeLog_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_UserBadgeLogEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_UserBadgeLogEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserBadgeLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_UserBadgeLog_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngmId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_UserBadgeLog_Delge_UserBadgeLogsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_UserBadgeLogsAsync";
const strAction = "Delge_UserBadgeLogs";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_Delge_UserBadgeLogsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_UserBadgeLogsByCondAsync";
const strAction = "Delge_UserBadgeLogsByCond";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
 * @param objge_UserBadgeLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_UserBadgeLog_AddNewRecordAsync(objge_UserBadgeLogEN: clsge_UserBadgeLogEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_UserBadgeLogEN);
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserBadgeLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_AddNewObjSave(objge_UserBadgeLogEN: clsge_UserBadgeLogEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_UserBadgeLog_CheckPropertyNew(objge_UserBadgeLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserBadgeLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_UserBadgeLog_CheckUniCond4Add(objge_UserBadgeLogEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await ge_UserBadgeLog_AddNewRecordAsync(objge_UserBadgeLogEN);
if (returnBool == true)
{
ge_UserBadgeLog_ReFreshCache(objge_UserBadgeLogEN.idCurrEduCls);
}
else
{
const strInfo = `添加[用户徽章日志(ge_UserBadgeLog)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objge_UserBadgeLogEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_UserBadgeLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_UserBadgeLog_CheckUniCond4Add(objge_UserBadgeLogEN: clsge_UserBadgeLogEN): Promise<boolean>{
const strUniquenessCondition = ge_UserBadgeLog_GetUniCondStr(objge_UserBadgeLogEN);
const bolIsExistCondition = await ge_UserBadgeLog_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_UserBadgeLog_CheckUniCond4Update(objge_UserBadgeLogEN: clsge_UserBadgeLogEN): Promise<boolean>{
const strUniquenessCondition = ge_UserBadgeLog_GetUniCondStr4Update(objge_UserBadgeLogEN);
const bolIsExistCondition = await ge_UserBadgeLog_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_UserBadgeLog_UpdateObjSave(objge_UserBadgeLogEN: clsge_UserBadgeLogEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_UserBadgeLogEN.sfUpdFldSetStr = objge_UserBadgeLogEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_UserBadgeLogEN.mId == 0 || objge_UserBadgeLogEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_UserBadgeLog_CheckProperty4Update(objge_UserBadgeLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserBadgeLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_UserBadgeLog_CheckUniCond4Update(objge_UserBadgeLogEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_UserBadgeLog_UpdateRecordAsync(objge_UserBadgeLogEN);
if (returnBool == true)
{
ge_UserBadgeLog_ReFreshCache(objge_UserBadgeLogEN.idCurrEduCls);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_UserBadgeLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_UserBadgeLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_UserBadgeLog_AddNewRecordWithReturnKeyAsync(objge_UserBadgeLogEN: clsge_UserBadgeLogEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserBadgeLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
 * @param objge_UserBadgeLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserBadgeLog_UpdateRecordAsync(objge_UserBadgeLogEN: clsge_UserBadgeLogEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_UserBadgeLogEN.sfUpdFldSetStr === undefined || objge_UserBadgeLogEN.sfUpdFldSetStr === null || objge_UserBadgeLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserBadgeLogEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserBadgeLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
 * @param objge_UserBadgeLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserBadgeLog_EditRecordExAsync(objge_UserBadgeLogEN: clsge_UserBadgeLogEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_UserBadgeLogEN.sfUpdFldSetStr === undefined || objge_UserBadgeLogEN.sfUpdFldSetStr === null || objge_UserBadgeLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserBadgeLogEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserBadgeLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
 * @param objge_UserBadgeLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserBadgeLog_UpdateWithConditionAsync(objge_UserBadgeLogEN: clsge_UserBadgeLogEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_UserBadgeLogEN.sfUpdFldSetStr === undefined || objge_UserBadgeLogEN.sfUpdFldSetStr === null || objge_UserBadgeLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserBadgeLogEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);
objge_UserBadgeLogEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserBadgeLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_UserBadgeLog_IsExistRecordCache(objge_UserBadgeLogCond: clsge_UserBadgeLogEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstCache(strIdCurrEduCls);
if (arrge_UserBadgeLogObjLstCache == null) return false;
let arrge_UserBadgeLogSel = arrge_UserBadgeLogObjLstCache;
if (objge_UserBadgeLogCond.sfFldComparisonOp == null || objge_UserBadgeLogCond.sfFldComparisonOp == "") return arrge_UserBadgeLogSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_UserBadgeLogCond.sfFldComparisonOp);
//console.log("clsge_UserBadgeLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_UserBadgeLogCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_UserBadgeLogCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_UserBadgeLogSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_UserBadgeLogCond), ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function ge_UserBadgeLog_IsExistCache(lngmId:number,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstCache(strIdCurrEduCls);
if (arrge_UserBadgeLogObjLstCache == null) return false;
try
{
const arrge_UserBadgeLogSel = arrge_UserBadgeLogObjLstCache.filter(x => x.mId == lngmId);
if (arrge_UserBadgeLogSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngmId, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_UserBadgeLog_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
 * @param objge_UserBadgeLogCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_UserBadgeLog_GetRecCountByCondCache(objge_UserBadgeLogCond: clsge_UserBadgeLogEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_UserBadgeLogObjLstCache = await ge_UserBadgeLog_GetObjLstCache(strIdCurrEduCls);
if (arrge_UserBadgeLogObjLstCache == null) return 0;
let arrge_UserBadgeLogSel = arrge_UserBadgeLogObjLstCache;
if (objge_UserBadgeLogCond.sfFldComparisonOp == null || objge_UserBadgeLogCond.sfFldComparisonOp == "") return arrge_UserBadgeLogSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_UserBadgeLogCond.sfFldComparisonOp);
//console.log("clsge_UserBadgeLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_UserBadgeLogCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_UserBadgeLogCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_UserBadgeLogSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_UserBadgeLogCond), ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeLog_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_UserBadgeLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeLog_ConstructorName, strThisFuncName);
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
export  function ge_UserBadgeLog_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_UserBadgeLog_ReFreshCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsge_UserBadgeLogWApi.clsge_UserBadgeLogWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsge_UserBadgeLogWApi.clsge_UserBadgeLogWApi.ReFreshCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsge_UserBadgeLogEN._CurrTabName, strIdCurrEduCls);
switch (clsge_UserBadgeLogEN.CacheModeId)
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
clsge_UserBadgeLogEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_UserBadgeLog_ReFreshThisCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsge_UserBadgeLogWApi.ge_UserBadgeLog_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsge_UserBadgeLogWApi.ge_UserBadgeLog_ReFreshThisCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsge_UserBadgeLogEN._CurrTabName, strIdCurrEduCls);
switch (clsge_UserBadgeLogEN.CacheModeId)
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
clsge_UserBadgeLogEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_UserBadgeLog_GetLastRefreshTime():string
{
if (clsge_UserBadgeLogEN._RefreshTimeLst.length == 0) return "";
return clsge_UserBadgeLogEN._RefreshTimeLst[clsge_UserBadgeLogEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_UserBadgeLog_CheckPropertyNew(pobjge_UserBadgeLogEN: clsge_UserBadgeLogEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.idCurrEduCls) === true 
 || pobjge_UserBadgeLogEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教学班流水号]不能为空(In 用户徽章日志)!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.userId) === true )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 用户徽章日志)!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.badgeTypeId) === true 
 || pobjge_UserBadgeLogEN.badgeTypeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[徽章类型Id]不能为空(In 用户徽章日志)!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.idCurrEduCls) == false && GetStrLen(pobjge_UserBadgeLogEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.idCurrEduCls}(clsge_UserBadgeLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.userId) == false && GetStrLen(pobjge_UserBadgeLogEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.userId}(clsge_UserBadgeLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.badgeTypeId) == false && GetStrLen(pobjge_UserBadgeLogEN.badgeTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[徽章类型Id(badgeTypeId)]的长度不能超过2(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.badgeTypeId}(clsge_UserBadgeLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.gameLevelId) == false && GetStrLen(pobjge_UserBadgeLogEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.gameLevelId}(clsge_UserBadgeLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.getInstructions) == false && GetStrLen(pobjge_UserBadgeLogEN.getInstructions) > 100)
{
 throw new Error(`(errid:Watl000413)字段[获取说明(getInstructions)]的长度不能超过100(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.getInstructions}(clsge_UserBadgeLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.getDate) == false && GetStrLen(pobjge_UserBadgeLogEN.getDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[获取日期(getDate)]的长度不能超过20(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.getDate}(clsge_UserBadgeLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.courseChapterId) == false && GetStrLen(pobjge_UserBadgeLogEN.courseChapterId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.courseChapterId}(clsge_UserBadgeLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.updDate) == false && GetStrLen(pobjge_UserBadgeLogEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.updDate}(clsge_UserBadgeLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.updUser) == false && GetStrLen(pobjge_UserBadgeLogEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.updUser}(clsge_UserBadgeLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.memo) == false && GetStrLen(pobjge_UserBadgeLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.memo}(clsge_UserBadgeLogBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_UserBadgeLogEN.mId && undefined !== pobjge_UserBadgeLogEN.mId && tzDataType.isNumber(pobjge_UserBadgeLogEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjge_UserBadgeLogEN.mId}], 非法,应该为数值型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.idCurrEduCls) == false && undefined !== pobjge_UserBadgeLogEN.idCurrEduCls && tzDataType.isString(pobjge_UserBadgeLogEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserBadgeLogEN.idCurrEduCls}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.userId) == false && undefined !== pobjge_UserBadgeLogEN.userId && tzDataType.isString(pobjge_UserBadgeLogEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjge_UserBadgeLogEN.userId}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.badgeTypeId) == false && undefined !== pobjge_UserBadgeLogEN.badgeTypeId && tzDataType.isString(pobjge_UserBadgeLogEN.badgeTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章类型Id(badgeTypeId)]的值:[${pobjge_UserBadgeLogEN.badgeTypeId}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserBadgeLogEN.badgeNum && undefined !== pobjge_UserBadgeLogEN.badgeNum && tzDataType.isNumber(pobjge_UserBadgeLogEN.badgeNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章数量(badgeNum)]的值:[${pobjge_UserBadgeLogEN.badgeNum}], 非法,应该为数值型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.gameLevelId) == false && undefined !== pobjge_UserBadgeLogEN.gameLevelId && tzDataType.isString(pobjge_UserBadgeLogEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_UserBadgeLogEN.gameLevelId}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.getInstructions) == false && undefined !== pobjge_UserBadgeLogEN.getInstructions && tzDataType.isString(pobjge_UserBadgeLogEN.getInstructions) === false)
{
 throw new Error(`(errid:Watl000414)字段[获取说明(getInstructions)]的值:[${pobjge_UserBadgeLogEN.getInstructions}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.getDate) == false && undefined !== pobjge_UserBadgeLogEN.getDate && tzDataType.isString(pobjge_UserBadgeLogEN.getDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[获取日期(getDate)]的值:[${pobjge_UserBadgeLogEN.getDate}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.courseChapterId) == false && undefined !== pobjge_UserBadgeLogEN.courseChapterId && tzDataType.isString(pobjge_UserBadgeLogEN.courseChapterId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程章节ID(courseChapterId)]的值:[${pobjge_UserBadgeLogEN.courseChapterId}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.updDate) == false && undefined !== pobjge_UserBadgeLogEN.updDate && tzDataType.isString(pobjge_UserBadgeLogEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_UserBadgeLogEN.updDate}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.updUser) == false && undefined !== pobjge_UserBadgeLogEN.updUser && tzDataType.isString(pobjge_UserBadgeLogEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_UserBadgeLogEN.updUser}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.memo) == false && undefined !== pobjge_UserBadgeLogEN.memo && tzDataType.isString(pobjge_UserBadgeLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_UserBadgeLogEN.memo}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_UserBadgeLog_CheckProperty4Update(pobjge_UserBadgeLogEN: clsge_UserBadgeLogEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.idCurrEduCls) == false && GetStrLen(pobjge_UserBadgeLogEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.idCurrEduCls}(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.userId) == false && GetStrLen(pobjge_UserBadgeLogEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.userId}(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.badgeTypeId) == false && GetStrLen(pobjge_UserBadgeLogEN.badgeTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[徽章类型Id(badgeTypeId)]的长度不能超过2(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.badgeTypeId}(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.gameLevelId) == false && GetStrLen(pobjge_UserBadgeLogEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.gameLevelId}(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.getInstructions) == false && GetStrLen(pobjge_UserBadgeLogEN.getInstructions) > 100)
{
 throw new Error(`(errid:Watl000416)字段[获取说明(getInstructions)]的长度不能超过100(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.getInstructions}(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.getDate) == false && GetStrLen(pobjge_UserBadgeLogEN.getDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[获取日期(getDate)]的长度不能超过20(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.getDate}(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.courseChapterId) == false && GetStrLen(pobjge_UserBadgeLogEN.courseChapterId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.courseChapterId}(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.updDate) == false && GetStrLen(pobjge_UserBadgeLogEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.updDate}(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.updUser) == false && GetStrLen(pobjge_UserBadgeLogEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.updUser}(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.memo) == false && GetStrLen(pobjge_UserBadgeLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户徽章日志(ge_UserBadgeLog))!值:${pobjge_UserBadgeLogEN.memo}(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_UserBadgeLogEN.mId && undefined !== pobjge_UserBadgeLogEN.mId && tzDataType.isNumber(pobjge_UserBadgeLogEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjge_UserBadgeLogEN.mId}], 非法,应该为数值型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.idCurrEduCls) == false && undefined !== pobjge_UserBadgeLogEN.idCurrEduCls && tzDataType.isString(pobjge_UserBadgeLogEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserBadgeLogEN.idCurrEduCls}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.userId) == false && undefined !== pobjge_UserBadgeLogEN.userId && tzDataType.isString(pobjge_UserBadgeLogEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjge_UserBadgeLogEN.userId}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.badgeTypeId) == false && undefined !== pobjge_UserBadgeLogEN.badgeTypeId && tzDataType.isString(pobjge_UserBadgeLogEN.badgeTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章类型Id(badgeTypeId)]的值:[${pobjge_UserBadgeLogEN.badgeTypeId}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (null != pobjge_UserBadgeLogEN.badgeNum && undefined !== pobjge_UserBadgeLogEN.badgeNum && tzDataType.isNumber(pobjge_UserBadgeLogEN.badgeNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章数量(badgeNum)]的值:[${pobjge_UserBadgeLogEN.badgeNum}], 非法,应该为数值型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.gameLevelId) == false && undefined !== pobjge_UserBadgeLogEN.gameLevelId && tzDataType.isString(pobjge_UserBadgeLogEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_UserBadgeLogEN.gameLevelId}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.getInstructions) == false && undefined !== pobjge_UserBadgeLogEN.getInstructions && tzDataType.isString(pobjge_UserBadgeLogEN.getInstructions) === false)
{
 throw new Error(`(errid:Watl000417)字段[获取说明(getInstructions)]的值:[${pobjge_UserBadgeLogEN.getInstructions}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.getDate) == false && undefined !== pobjge_UserBadgeLogEN.getDate && tzDataType.isString(pobjge_UserBadgeLogEN.getDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[获取日期(getDate)]的值:[${pobjge_UserBadgeLogEN.getDate}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.courseChapterId) == false && undefined !== pobjge_UserBadgeLogEN.courseChapterId && tzDataType.isString(pobjge_UserBadgeLogEN.courseChapterId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程章节ID(courseChapterId)]的值:[${pobjge_UserBadgeLogEN.courseChapterId}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.updDate) == false && undefined !== pobjge_UserBadgeLogEN.updDate && tzDataType.isString(pobjge_UserBadgeLogEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_UserBadgeLogEN.updDate}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.updUser) == false && undefined !== pobjge_UserBadgeLogEN.updUser && tzDataType.isString(pobjge_UserBadgeLogEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_UserBadgeLogEN.updUser}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeLogEN.memo) == false && undefined !== pobjge_UserBadgeLogEN.memo && tzDataType.isString(pobjge_UserBadgeLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_UserBadgeLogEN.memo}], 非法,应该为字符型(In 用户徽章日志(ge_UserBadgeLog))!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjge_UserBadgeLogEN.mId 
 || pobjge_UserBadgeLogEN.mId != null && pobjge_UserBadgeLogEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 用户徽章日志)!(clsge_UserBadgeLogBL:CheckProperty4Update)`);
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
export  function ge_UserBadgeLog_GetJSONStrByObj (pobjge_UserBadgeLogEN: clsge_UserBadgeLogEN): string
{
pobjge_UserBadgeLogEN.sfUpdFldSetStr = pobjge_UserBadgeLogEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_UserBadgeLogEN);
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
export  function ge_UserBadgeLog_GetObjLstByJSONStr (strJSON: string): Array<clsge_UserBadgeLogEN>
{
let arrge_UserBadgeLogObjLst = new Array<clsge_UserBadgeLogEN>();
if (strJSON === "")
{
return arrge_UserBadgeLogObjLst;
}
try
{
arrge_UserBadgeLogObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_UserBadgeLogObjLst;
}
return arrge_UserBadgeLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_UserBadgeLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_UserBadgeLog_GetObjLstByJSONObjLst (arrge_UserBadgeLogObjLstS: Array<clsge_UserBadgeLogEN>): Array<clsge_UserBadgeLogEN>
{
const arrge_UserBadgeLogObjLst = new Array<clsge_UserBadgeLogEN>();
for (const objInFor of arrge_UserBadgeLogObjLstS) {
const obj1 = ge_UserBadgeLog_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_UserBadgeLogObjLst.push(obj1);
}
return arrge_UserBadgeLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_UserBadgeLog_GetObjByJSONStr (strJSON: string): clsge_UserBadgeLogEN
{
let pobjge_UserBadgeLogEN = new clsge_UserBadgeLogEN();
if (strJSON === "")
{
return pobjge_UserBadgeLogEN;
}
try
{
pobjge_UserBadgeLogEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_UserBadgeLogEN;
}
return pobjge_UserBadgeLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_UserBadgeLog_GetCombineCondition(objge_UserBadgeLogCond: clsge_UserBadgeLogEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_mId) == true)
{
const strComparisonOpmId:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserBadgeLogEN.con_mId, objge_UserBadgeLogCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeLogEN.con_IdCurrEduCls, objge_UserBadgeLogCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeLogEN.con_UserId, objge_UserBadgeLogCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_BadgeTypeId) == true)
{
const strComparisonOpBadgeTypeId:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_BadgeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeLogEN.con_BadgeTypeId, objge_UserBadgeLogCond.badgeTypeId, strComparisonOpBadgeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_BadgeNum) == true)
{
const strComparisonOpBadgeNum:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_BadgeNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserBadgeLogEN.con_BadgeNum, objge_UserBadgeLogCond.badgeNum, strComparisonOpBadgeNum);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_GameLevelId) == true)
{
const strComparisonOpGameLevelId:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_GameLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeLogEN.con_GameLevelId, objge_UserBadgeLogCond.gameLevelId, strComparisonOpGameLevelId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_GetInstructions) == true)
{
const strComparisonOpGetInstructions:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_GetInstructions];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeLogEN.con_GetInstructions, objge_UserBadgeLogCond.getInstructions, strComparisonOpGetInstructions);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_GetDate) == true)
{
const strComparisonOpGetDate:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_GetDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeLogEN.con_GetDate, objge_UserBadgeLogCond.getDate, strComparisonOpGetDate);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_CourseChapterId) == true)
{
const strComparisonOpCourseChapterId:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_CourseChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeLogEN.con_CourseChapterId, objge_UserBadgeLogCond.courseChapterId, strComparisonOpCourseChapterId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeLogEN.con_UpdDate, objge_UserBadgeLogCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeLogEN.con_UpdUser, objge_UserBadgeLogCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeLogCond.dicFldComparisonOp, clsge_UserBadgeLogEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_UserBadgeLogCond.dicFldComparisonOp[clsge_UserBadgeLogEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeLogEN.con_Memo, objge_UserBadgeLogCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_UserBadgeLog(用户徽章日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strBadgeTypeId: 徽章类型Id(要求唯一的字段)
 * @param strGameLevelId: 游戏关卡Id(要求唯一的字段)
 * @param strGetDate: 获取日期(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_UserBadgeLog_GetUniCondStr(objge_UserBadgeLogEN: clsge_UserBadgeLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objge_UserBadgeLogEN.idCurrEduCls);
 strWhereCond +=  Format(" and UserId = '{0}'", objge_UserBadgeLogEN.userId);
 strWhereCond +=  Format(" and BadgeTypeId = '{0}'", objge_UserBadgeLogEN.badgeTypeId);
 strWhereCond +=  Format(" and GameLevelId = '{0}'", objge_UserBadgeLogEN.gameLevelId);
 strWhereCond +=  Format(" and GetDate = '{0}'", objge_UserBadgeLogEN.getDate);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_UserBadgeLog(用户徽章日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strBadgeTypeId: 徽章类型Id(要求唯一的字段)
 * @param strGameLevelId: 游戏关卡Id(要求唯一的字段)
 * @param strGetDate: 获取日期(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_UserBadgeLog_GetUniCondStr4Update(objge_UserBadgeLogEN: clsge_UserBadgeLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objge_UserBadgeLogEN.mId);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objge_UserBadgeLogEN.idCurrEduCls);
 strWhereCond +=  Format(" and UserId = '{0}'", objge_UserBadgeLogEN.userId);
 strWhereCond +=  Format(" and BadgeTypeId = '{0}'", objge_UserBadgeLogEN.badgeTypeId);
 strWhereCond +=  Format(" and GameLevelId = '{0}'", objge_UserBadgeLogEN.gameLevelId);
 strWhereCond +=  Format(" and GetDate = '{0}'", objge_UserBadgeLogEN.getDate);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_UserBadgeLogENS:源对象
 * @param objge_UserBadgeLogENT:目标对象
*/
export  function ge_UserBadgeLog_CopyObjTo(objge_UserBadgeLogENS: clsge_UserBadgeLogEN , objge_UserBadgeLogENT: clsge_UserBadgeLogEN ): void 
{
objge_UserBadgeLogENT.mId = objge_UserBadgeLogENS.mId; //mId
objge_UserBadgeLogENT.idCurrEduCls = objge_UserBadgeLogENS.idCurrEduCls; //教学班流水号
objge_UserBadgeLogENT.userId = objge_UserBadgeLogENS.userId; //用户ID
objge_UserBadgeLogENT.badgeTypeId = objge_UserBadgeLogENS.badgeTypeId; //徽章类型Id
objge_UserBadgeLogENT.badgeNum = objge_UserBadgeLogENS.badgeNum; //徽章数量
objge_UserBadgeLogENT.gameLevelId = objge_UserBadgeLogENS.gameLevelId; //游戏关卡Id
objge_UserBadgeLogENT.getInstructions = objge_UserBadgeLogENS.getInstructions; //获取说明
objge_UserBadgeLogENT.getDate = objge_UserBadgeLogENS.getDate; //获取日期
objge_UserBadgeLogENT.courseChapterId = objge_UserBadgeLogENS.courseChapterId; //课程章节ID
objge_UserBadgeLogENT.updDate = objge_UserBadgeLogENS.updDate; //修改日期
objge_UserBadgeLogENT.updUser = objge_UserBadgeLogENS.updUser; //修改人
objge_UserBadgeLogENT.memo = objge_UserBadgeLogENS.memo; //备注
objge_UserBadgeLogENT.sfUpdFldSetStr = objge_UserBadgeLogENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_UserBadgeLogENS:源对象
 * @param objge_UserBadgeLogENT:目标对象
*/
export  function ge_UserBadgeLog_GetObjFromJsonObj(objge_UserBadgeLogENS: clsge_UserBadgeLogEN): clsge_UserBadgeLogEN 
{
 const objge_UserBadgeLogENT: clsge_UserBadgeLogEN = new clsge_UserBadgeLogEN();
ObjectAssign(objge_UserBadgeLogENT, objge_UserBadgeLogENS);
 return objge_UserBadgeLogENT;
}