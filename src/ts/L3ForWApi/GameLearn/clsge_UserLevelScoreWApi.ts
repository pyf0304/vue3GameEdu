
 /**
 * 类名:clsge_UserLevelScoreWApi
 * 表名:ge_UserLevelScore(01120942)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:14
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
 * 用户闯关得分(ge_UserLevelScore)
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
import { clsge_UserLevelScoreEN } from "@/ts/L0Entity/GameLearn/clsge_UserLevelScoreEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_UserLevelScore_Controller = "ge_UserLevelScoreApi";
 export const ge_UserLevelScore_ConstructorName = "ge_UserLevelScore";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function ge_UserLevelScore_SplitKeyLst(strKeyLst: string)  
{
const arrKey = strKeyLst.split('|');
if (arrKey.length != 3)
{
const strMsg = "请选择需要修改的记录!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
const objKeyLst = {
idCurrEduCls: arrKey[0],
gameLevelId: arrKey[1],
userId: arrKey[2],
};
if (IsNullOrEmpty(objKeyLst.idCurrEduCls)== true)
{
const strMsg = "关键字段(idCurrEduCls)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.gameLevelId)== true)
{
const strMsg = "关键字段(gameLevelId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.userId)== true)
{
const strMsg = "关键字段(userId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdCurrEduCls:关键字
 * @returns 对象
 **/
export  async function ge_UserLevelScore_GetObjByKeyLstAsync(strIdCurrEduCls: string,strGameLevelId: string,strUserId: string): Promise<clsge_UserLevelScoreEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsge_UserLevelScoreWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsge_UserLevelScoreWApi.GetObjByKeyLstAsync)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strGameLevelId) == true)
{
  const strMsg = Format("参数:[strGameLevelId]不能为空!(In clsge_UserLevelScoreWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strGameLevelId.length != 8)
{
const strMsg = Format("缓存分类变量:[strGameLevelId]的长度:[{0}]不正确!(clsge_UserLevelScoreWApi.GetObjByKeyLstAsync)", strGameLevelId.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsge_UserLevelScoreWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls,
strGameLevelId,
strUserId,
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
const objge_UserLevelScore = ge_UserLevelScore_GetObjFromJsonObj(returnObj);
return objge_UserLevelScore;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls:所给的关键字
 * @returns 对象
*/
export  async function ge_UserLevelScore_GetObjByKeyLstlocalStorage(strIdCurrEduCls: string,strGameLevelId: string,strUserId: string) {
const strThisFuncName = "GetObjByKeyLstlocalStorage";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsge_UserLevelScoreWApi.GetObjByKeyLstlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsge_UserLevelScoreWApi.GetObjByKeyLstlocalStorage)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strGameLevelId) == true)
{
  const strMsg = Format("参数:[strGameLevelId]不能为空!(In clsge_UserLevelScoreWApi.GetObjByKeyLstlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strGameLevelId.length != 8)
{
const strMsg = Format("缓存分类变量:[strGameLevelId]的长度:[{0}]不正确!(clsge_UserLevelScoreWApi.GetObjByKeyLstlocalStorage)", strGameLevelId.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsge_UserLevelScoreWApi.GetObjByKeyLstlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_UserLevelScoreEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_UserLevelScoreCache: clsge_UserLevelScoreEN = JSON.parse(strTempObj);
return objge_UserLevelScoreCache;
}
try
{
const objge_UserLevelScore = await ge_UserLevelScore_GetObjByKeyLstAsync(strIdCurrEduCls,strGameLevelId,strUserId);
if (objge_UserLevelScore != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_UserLevelScore));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_UserLevelScore;
}
return objge_UserLevelScore;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdCurrEduCls, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strIdCurrEduCls:所给的关键字
 * @returns 对象
*/
export  async function ge_UserLevelScore_GetObjByKeyLstCache(strIdCurrEduCls:string,strGameLevelId:string,strUserId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByKeyLstCache";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsge_UserLevelScoreWApi.GetObjByKeyLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsge_UserLevelScoreWApi.GetObjByKeyLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strGameLevelId) == true)
{
  const strMsg = Format("参数:[strGameLevelId]不能为空!(In clsge_UserLevelScoreWApi.GetObjByKeyLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strGameLevelId.length != 8)
{
const strMsg = Format("缓存分类变量:[strGameLevelId]的长度:[{0}]不正确!(clsge_UserLevelScoreWApi.GetObjByKeyLstCache)", strGameLevelId.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsge_UserLevelScoreWApi.GetObjByKeyLstCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstCache(strIdCurrEduCls);
try
{
const arrge_UserLevelScoreSel = arrge_UserLevelScoreObjLstCache.filter(x => 
 x.idCurrEduCls == strIdCurrEduCls 
 && x.gameLevelId == strGameLevelId 
 && x.userId == strUserId );
let objge_UserLevelScore: clsge_UserLevelScoreEN;
if (arrge_UserLevelScoreSel.length > 0)
{
objge_UserLevelScore = arrge_UserLevelScoreSel[0];
return objge_UserLevelScore;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_UserLevelScoreConst = await ge_UserLevelScore_GetObjByKeyLstAsync(strIdCurrEduCls,strGameLevelId,strUserId);
if (objge_UserLevelScoreConst != null)
{
ge_UserLevelScore_ReFreshThisCache(strIdCurrEduCls);
return objge_UserLevelScoreConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdCurrEduCls, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_UserLevelScore:所给的对象
 * @returns 对象
*/
export  async function ge_UserLevelScore_UpdateObjInLstCache(objge_UserLevelScore: clsge_UserLevelScoreEN,strIdCurrEduCls: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstCache(strIdCurrEduCls);
const obj = arrge_UserLevelScoreObjLstCache.find(x => 
x.idCurrEduCls == objge_UserLevelScore.idCurrEduCls);
if (obj != null)
{
objge_UserLevelScore.idCurrEduCls = obj.idCurrEduCls;
ObjectAssign( obj, objge_UserLevelScore);
}
else
{
arrge_UserLevelScoreObjLstCache.push(objge_UserLevelScore);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  function ge_UserLevelScore_SortFunDefa(a:clsge_UserLevelScoreEN , b:clsge_UserLevelScoreEN): number 
{
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export  function ge_UserLevelScore_SortFunDefa2Fld(a:clsge_UserLevelScoreEN , b:clsge_UserLevelScoreEN): number 
{
if (a.courseId == b.courseId) return a.credits - b.credits;
else return a.courseId.localeCompare(b.courseId);
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
export  function ge_UserLevelScore_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_UserLevelScoreEN.con_IdCurrEduCls:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsge_UserLevelScoreEN.con_GameLevelId:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return a.gameLevelId.localeCompare(b.gameLevelId);
}
case clsge_UserLevelScoreEN.con_UserId:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return a.userId.localeCompare(b.userId);
}
case clsge_UserLevelScoreEN.con_CourseId:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_UserLevelScoreEN.con_Passed:
return (a: clsge_UserLevelScoreEN) => {
if (a.passed == true) return 1;
else return -1
}
case clsge_UserLevelScoreEN.con_Credits:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return a.credits-b.credits;
}
case clsge_UserLevelScoreEN.con_GetDate:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
if (a.getDate == null) return -1;
if (b.getDate == null) return 1;
return a.getDate.localeCompare(b.getDate);
}
case clsge_UserLevelScoreEN.con_GetInstructions:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
if (a.getInstructions == null) return -1;
if (b.getInstructions == null) return 1;
return a.getInstructions.localeCompare(b.getInstructions);
}
case clsge_UserLevelScoreEN.con_BadgeNum:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return a.badgeNum-b.badgeNum;
}
case clsge_UserLevelScoreEN.con_UpdDate:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_UserLevelScoreEN.con_UpdUser:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_UserLevelScoreEN.con_Memo:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserLevelScore]中不存在!(in ${ ge_UserLevelScore_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_UserLevelScoreEN.con_IdCurrEduCls:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsge_UserLevelScoreEN.con_GameLevelId:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return b.gameLevelId.localeCompare(a.gameLevelId);
}
case clsge_UserLevelScoreEN.con_UserId:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return b.userId.localeCompare(a.userId);
}
case clsge_UserLevelScoreEN.con_CourseId:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_UserLevelScoreEN.con_Passed:
return (b: clsge_UserLevelScoreEN) => {
if (b.passed == true) return 1;
else return -1
}
case clsge_UserLevelScoreEN.con_Credits:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return b.credits-a.credits;
}
case clsge_UserLevelScoreEN.con_GetDate:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
if (b.getDate == null) return -1;
if (a.getDate == null) return 1;
return b.getDate.localeCompare(a.getDate);
}
case clsge_UserLevelScoreEN.con_GetInstructions:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
if (b.getInstructions == null) return -1;
if (a.getInstructions == null) return 1;
return b.getInstructions.localeCompare(a.getInstructions);
}
case clsge_UserLevelScoreEN.con_BadgeNum:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
return b.badgeNum-a.badgeNum;
}
case clsge_UserLevelScoreEN.con_UpdDate:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_UserLevelScoreEN.con_UpdUser:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_UserLevelScoreEN.con_Memo:
return (a: clsge_UserLevelScoreEN, b: clsge_UserLevelScoreEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserLevelScore]中不存在!(in ${ ge_UserLevelScore_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_UserLevelScore_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_UserLevelScoreEN.con_IdCurrEduCls:
return (obj: clsge_UserLevelScoreEN) => {
return obj.idCurrEduCls === value;
}
case clsge_UserLevelScoreEN.con_GameLevelId:
return (obj: clsge_UserLevelScoreEN) => {
return obj.gameLevelId === value;
}
case clsge_UserLevelScoreEN.con_UserId:
return (obj: clsge_UserLevelScoreEN) => {
return obj.userId === value;
}
case clsge_UserLevelScoreEN.con_CourseId:
return (obj: clsge_UserLevelScoreEN) => {
return obj.courseId === value;
}
case clsge_UserLevelScoreEN.con_Passed:
return (obj: clsge_UserLevelScoreEN) => {
return obj.passed === value;
}
case clsge_UserLevelScoreEN.con_Credits:
return (obj: clsge_UserLevelScoreEN) => {
return obj.credits === value;
}
case clsge_UserLevelScoreEN.con_GetDate:
return (obj: clsge_UserLevelScoreEN) => {
return obj.getDate === value;
}
case clsge_UserLevelScoreEN.con_GetInstructions:
return (obj: clsge_UserLevelScoreEN) => {
return obj.getInstructions === value;
}
case clsge_UserLevelScoreEN.con_BadgeNum:
return (obj: clsge_UserLevelScoreEN) => {
return obj.badgeNum === value;
}
case clsge_UserLevelScoreEN.con_UpdDate:
return (obj: clsge_UserLevelScoreEN) => {
return obj.updDate === value;
}
case clsge_UserLevelScoreEN.con_UpdUser:
return (obj: clsge_UserLevelScoreEN) => {
return obj.updUser === value;
}
case clsge_UserLevelScoreEN.con_Memo:
return (obj: clsge_UserLevelScoreEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserLevelScore]中不存在!(in ${ ge_UserLevelScore_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_UserLevelScore_func( strInFldName1:string , strInFldName2:string , strInFldName3:string  , strOutFldName:string ,  strInValue1:string , strInValue2:string , strInValue3:string  )
{
//const strThisFuncName = "func";

if (strInFldName1 != clsge_UserLevelScoreEN.con_IdCurrEduCls)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName1);
console.error(strMsg);
throw new Error(strMsg);
}
if (strInFldName2 != clsge_UserLevelScoreEN.con_GameLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName2);
console.error(strMsg);
throw new Error(strMsg);
}
if (strInFldName3 != clsge_UserLevelScoreEN.con_UserId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName3);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_UserLevelScoreEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_UserLevelScoreEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdCurrEduCls = strInValue1;
if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
return "";
}
const strGameLevelId = strInValue2;
if (IsNullOrEmpty(strGameLevelId) == true)
{
return "";
}
const strUserId = strInValue3;
if (IsNullOrEmpty(strUserId) == true)
{
return "";
}
const objge_UserLevelScore = await ge_UserLevelScore_GetObjByKeyLstCache(strIdCurrEduCls,strGameLevelId,strUserId );
if (objge_UserLevelScore == null) return "";
if (objge_UserLevelScore.GetFldValue(strOutFldName) == null) return "";
return objge_UserLevelScore.GetFldValue(strOutFldName).toString();
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
export  async function ge_UserLevelScore_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsge_UserLevelScoreWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsge_UserLevelScoreWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsge_UserLevelScoreEN.con_IdCurrEduCls)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (strInFldName == clsge_UserLevelScoreEN.con_GameLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (strInFldName == clsge_UserLevelScoreEN.con_UserId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_UserLevelScore = await ge_UserLevelScore_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrge_UserLevelScore == null) return [];
let arrge_UserLevelScoreSel = arrge_UserLevelScore;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_UserLevelScoreSel.length == 0) return [];
return arrge_UserLevelScore.map(x=>`${x.idCurrEduCls}|${x.gameLevelId}|${x.userId}`);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserLevelScore_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_GetFirstObjAsync(strWhereCond: string): Promise<clsge_UserLevelScoreEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const objge_UserLevelScore = ge_UserLevelScore_GetObjFromJsonObj(returnObj);
return objge_UserLevelScore;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_UserLevelScoreEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_UserLevelScoreEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsge_UserLevelScoreEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsge_UserLevelScoreEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_UserLevelScoreEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_UserLevelScoreExObjLstCache: Array<clsge_UserLevelScoreEN> = CacheHelper.Get(strKey);
const arrge_UserLevelScoreObjLstT = ge_UserLevelScore_GetObjLstByJSONObjLst(arrge_UserLevelScoreExObjLstCache);
return arrge_UserLevelScoreObjLstT;
}
try
{
const arrge_UserLevelScoreExObjLst = await ge_UserLevelScore_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_UserLevelScoreExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_UserLevelScoreExObjLst.length);
console.log(strInfo);
return arrge_UserLevelScoreExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_UserLevelScore_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_UserLevelScoreEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_UserLevelScoreEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_UserLevelScoreEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsge_UserLevelScoreEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsge_UserLevelScoreEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_UserLevelScoreEN.CacheAddiCondition);
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
const arrge_UserLevelScoreExObjLstCache: Array<clsge_UserLevelScoreEN> = JSON.parse(strTempObjLst);
const arrge_UserLevelScoreObjLstT = ge_UserLevelScore_GetObjLstByJSONObjLst(arrge_UserLevelScoreExObjLstCache);
return arrge_UserLevelScoreObjLstT;
}
try
{
const arrge_UserLevelScoreExObjLst = await ge_UserLevelScore_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsge_UserLevelScoreEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrge_UserLevelScoreExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_UserLevelScoreExObjLst.length);
console.log(strInfo);
return arrge_UserLevelScoreExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_UserLevelScore_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_UserLevelScoreEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_UserLevelScoreObjLstCache: Array<clsge_UserLevelScoreEN> = JSON.parse(strTempObjLst);
return arrge_UserLevelScoreObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_UserLevelScore_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_UserLevelScoreEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserLevelScore_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_UserLevelScoreEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_UserLevelScoreEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_UserLevelScoreEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsge_UserLevelScoreEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsge_UserLevelScoreEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_UserLevelScoreEN.CacheAddiCondition);
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
const arrge_UserLevelScoreExObjLstCache: Array<clsge_UserLevelScoreEN> = JSON.parse(strTempObjLst);
const arrge_UserLevelScoreObjLstT = ge_UserLevelScore_GetObjLstByJSONObjLst(arrge_UserLevelScoreExObjLstCache);
return arrge_UserLevelScoreObjLstT;
}
try
{
const arrge_UserLevelScoreExObjLst = await ge_UserLevelScore_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsge_UserLevelScoreEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrge_UserLevelScoreExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_UserLevelScoreExObjLst.length);
console.log(strInfo);
return arrge_UserLevelScoreExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_UserLevelScore_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_UserLevelScoreEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_UserLevelScoreObjLstCache: Array<clsge_UserLevelScoreEN> = JSON.parse(strTempObjLst);
return arrge_UserLevelScoreObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_UserLevelScore_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsge_UserLevelScoreEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsge_UserLevelScoreWApi.ge_UserLevelScore_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsge_UserLevelScoreWApi.ge_UserLevelScore_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrge_UserLevelScoreObjLstCache;
switch (clsge_UserLevelScoreEN.CacheModeId)
{
case "04"://sessionStorage
arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrge_UserLevelScoreObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_UserLevelScore_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_UserLevelScoreObjLstCache;
switch (clsge_UserLevelScoreEN.CacheModeId)
{
case "04"://sessionStorage
arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrge_UserLevelScoreObjLstCache = null;
break;
default:
arrge_UserLevelScoreObjLstCache = null;
break;
}
return arrge_UserLevelScoreObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdCurrEduClsCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_UserLevelScore_GetSubObjLstCache(objge_UserLevelScoreCond: clsge_UserLevelScoreEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstCache(strIdCurrEduCls);
let arrge_UserLevelScoreSel = arrge_UserLevelScoreObjLstCache;
if (objge_UserLevelScoreCond.sfFldComparisonOp == null || objge_UserLevelScoreCond.sfFldComparisonOp == "") return arrge_UserLevelScoreSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_UserLevelScoreCond.sfFldComparisonOp);
//console.log("clsge_UserLevelScoreWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_UserLevelScoreCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_UserLevelScoreCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_UserLevelScoreSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_UserLevelScoreCond), ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_UserLevelScoreEN>();
}


 /// <summary>
 /// 把多个关键字段的值连接起来,用|连接(Join)--ge_UserLevelScore(用户闯关得分)
 /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
 /// </summary>
 /// <param name = "objge_UserLevelScoreEN">需要连接的对象</param>
 /// <returns></returns>
export  function ge_UserLevelScore_JoinByKeyLst(objge_UserLevelScoreEN: clsge_UserLevelScoreEN):string
{
//检测记录是否存在
const strResult = `${objge_UserLevelScoreEN.idCurrEduCls}|${objge_UserLevelScoreEN.gameLevelId}|${objge_UserLevelScoreEN.userId}`
return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrIdCurrEduClsLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_UserLevelScore_GetObjLstByKeyLstsCache(arrKeysLst: Array<string> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByKeyLstsCache";
try
{
const arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstCache(strIdCurrEduCls);
const arrge_UserLevelScoreSel = arrge_UserLevelScoreObjLstCache.filter(x => arrKeysLst.indexOf(ge_UserLevelScore_JoinByKeyLst(x))>-1);
return arrge_UserLevelScoreSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrKeysLst.join(","), ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_UserLevelScoreEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserLevelScore_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_UserLevelScoreEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserLevelScore_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_UserLevelScoreEN>();
const arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstCache(strIdCurrEduCls);
if (arrge_UserLevelScoreObjLstCache.length == 0) return arrge_UserLevelScoreObjLstCache;
let arrge_UserLevelScoreSel = arrge_UserLevelScoreObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_UserLevelScoreCond = new clsge_UserLevelScoreEN();
ObjectAssign(objge_UserLevelScoreCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_UserLevelScoreWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_UserLevelScoreCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_UserLevelScoreSel.length == 0) return arrge_UserLevelScoreSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.sort(ge_UserLevelScore_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.sort(objPagerPara.sortFun);
}
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.slice(intStart, intEnd);     
return arrge_UserLevelScoreSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_UserLevelScoreEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_UserLevelScore_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_UserLevelScoreEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_UserLevelScoreEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserLevelScore_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls,strGameLevelId,strUserId:关键字列表
 * @returns 获取删除的结果
 **/
export  async function ge_UserLevelScore_DelRecKeyLstAsync(strIdCurrEduCls: string,strGameLevelId: string,strUserId: string): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls, 
strGameLevelId, 
strUserId, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export  async function ge_UserLevelScore_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrKeyLsts, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_Delge_UserLevelScoresByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_UserLevelScoresByCondAsync";
const strAction = "Delge_UserLevelScoresByCond";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
 * @param objge_UserLevelScoreEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_UserLevelScore_AddNewRecordAsync(objge_UserLevelScoreEN: clsge_UserLevelScoreEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objge_UserLevelScoreEN.idCurrEduCls === null || objge_UserLevelScoreEN.idCurrEduCls === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_UserLevelScoreEN);
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserLevelScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
 * @param objge_UserLevelScoreEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_UserLevelScore_AddNewRecordWithMaxIdAsync(objge_UserLevelScoreEN: clsge_UserLevelScoreEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserLevelScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_AddNewObjSave(objge_UserLevelScoreEN: clsge_UserLevelScoreEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_UserLevelScore_CheckPropertyNew(objge_UserLevelScoreEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserLevelScore_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await ge_UserLevelScore_IsExistAsync(objge_UserLevelScoreEN.idCurrEduCls,objge_UserLevelScoreEN.gameLevelId,objge_UserLevelScoreEN.userId,);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objge_UserLevelScoreEN.idCurrEduCls);
console.error(strMsg);
throw(strMsg);
}
returnBool = await ge_UserLevelScore_AddNewRecordAsync(objge_UserLevelScoreEN);
if (returnBool == true)
{
ge_UserLevelScore_ReFreshCache(objge_UserLevelScoreEN.idCurrEduCls);
}
else
{
const strInfo = `添加[用户闯关得分(ge_UserLevelScore)]记录不成功!`;
//显示信息框
throw(strInfo);
}
let strReturnKeyLst = '';
strReturnKeyLst += `${ objge_UserLevelScoreEN.idCurrEduCls }`;
strReturnKeyLst += `|${ objge_UserLevelScoreEN.gameLevelId }`;
strReturnKeyLst += `|${ objge_UserLevelScoreEN.userId }`;
return { keyword: strReturnKeyLst, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_UserLevelScore_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function ge_UserLevelScore_UpdateObjSave(objge_UserLevelScoreEN: clsge_UserLevelScoreEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_UserLevelScoreEN.sfUpdFldSetStr = objge_UserLevelScoreEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_UserLevelScoreEN.idCurrEduCls == "" || objge_UserLevelScoreEN.idCurrEduCls == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_UserLevelScore_CheckProperty4Update(objge_UserLevelScoreEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserLevelScore_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await ge_UserLevelScore_UpdateRecordAsync(objge_UserLevelScoreEN);
if (returnBool == true)
{
ge_UserLevelScore_ReFreshCache(objge_UserLevelScoreEN.idCurrEduCls);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_UserLevelScore_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_UserLevelScoreEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_UserLevelScore_AddNewRecordWithReturnKeyAsync(objge_UserLevelScoreEN: clsge_UserLevelScoreEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserLevelScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
 * @param objge_UserLevelScoreEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserLevelScore_UpdateRecordAsync(objge_UserLevelScoreEN: clsge_UserLevelScoreEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_UserLevelScoreEN.sfUpdFldSetStr === undefined || objge_UserLevelScoreEN.sfUpdFldSetStr === null || objge_UserLevelScoreEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserLevelScoreEN.idCurrEduCls);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserLevelScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
 * @param objge_UserLevelScoreEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserLevelScore_EditRecordExAsync(objge_UserLevelScoreEN: clsge_UserLevelScoreEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_UserLevelScoreEN.sfUpdFldSetStr === undefined || objge_UserLevelScoreEN.sfUpdFldSetStr === null || objge_UserLevelScoreEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserLevelScoreEN.idCurrEduCls);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserLevelScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
 * @param objge_UserLevelScoreEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserLevelScore_UpdateWithConditionAsync(objge_UserLevelScoreEN: clsge_UserLevelScoreEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_UserLevelScoreEN.sfUpdFldSetStr === undefined || objge_UserLevelScoreEN.sfUpdFldSetStr === null || objge_UserLevelScoreEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserLevelScoreEN.idCurrEduCls);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);
objge_UserLevelScoreEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserLevelScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
 * @param objstrIdCurrEduClsCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_UserLevelScore_IsExistRecordCache(objge_UserLevelScoreCond: clsge_UserLevelScoreEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstCache(strIdCurrEduCls);
if (arrge_UserLevelScoreObjLstCache == null) return false;
let arrge_UserLevelScoreSel = arrge_UserLevelScoreObjLstCache;
if (objge_UserLevelScoreCond.sfFldComparisonOp == null || objge_UserLevelScoreCond.sfFldComparisonOp == "") return arrge_UserLevelScoreSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_UserLevelScoreCond.sfFldComparisonOp);
//console.log("clsge_UserLevelScoreWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_UserLevelScoreCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_UserLevelScoreCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_UserLevelScoreSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_UserLevelScoreCond), ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls:所给的关键字
 * @returns 对象
*/
export  async function ge_UserLevelScore_IsExistCache(strIdCurrEduCls:string,strGameLevelId:string,strUserId:string) {
const strThisFuncName = "IsExistCache";
const arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstCache(strIdCurrEduCls);
if (arrge_UserLevelScoreObjLstCache == null) return false;
try
{
const arrge_UserLevelScoreSel = arrge_UserLevelScoreObjLstCache.filter(x => x.idCurrEduCls == strIdCurrEduCls && x.gameLevelId == strGameLevelId && x.userId == strUserId);
if (arrge_UserLevelScoreSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdCurrEduCls, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdCurrEduCls:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_UserLevelScore_IsExistAsync(strIdCurrEduCls: string,strGameLevelId: string,strUserId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls,
strGameLevelId,
strUserId,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
 * @param objge_UserLevelScoreCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_UserLevelScore_GetRecCountByCondCache(objge_UserLevelScoreCond: clsge_UserLevelScoreEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_UserLevelScoreObjLstCache = await ge_UserLevelScore_GetObjLstCache(strIdCurrEduCls);
if (arrge_UserLevelScoreObjLstCache == null) return 0;
let arrge_UserLevelScoreSel = arrge_UserLevelScoreObjLstCache;
if (objge_UserLevelScoreCond.sfFldComparisonOp == null || objge_UserLevelScoreCond.sfFldComparisonOp == "") return arrge_UserLevelScoreSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_UserLevelScoreCond.sfFldComparisonOp);
//console.log("clsge_UserLevelScoreWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_UserLevelScoreCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_UserLevelScoreCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_UserLevelScoreSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_UserLevelScoreCond), ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserLevelScore_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_UserLevelScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserLevelScore_ConstructorName, strThisFuncName);
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
export  function ge_UserLevelScore_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_UserLevelScore_ReFreshCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsge_UserLevelScoreWApi.clsge_UserLevelScoreWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsge_UserLevelScoreWApi.clsge_UserLevelScoreWApi.ReFreshCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsge_UserLevelScoreEN._CurrTabName, strIdCurrEduCls);
switch (clsge_UserLevelScoreEN.CacheModeId)
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
clsge_UserLevelScoreEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_UserLevelScore_ReFreshThisCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsge_UserLevelScoreWApi.ge_UserLevelScore_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsge_UserLevelScoreWApi.ge_UserLevelScore_ReFreshThisCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsge_UserLevelScoreEN._CurrTabName, strIdCurrEduCls);
switch (clsge_UserLevelScoreEN.CacheModeId)
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
clsge_UserLevelScoreEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_UserLevelScore_GetLastRefreshTime():string
{
if (clsge_UserLevelScoreEN._RefreshTimeLst.length == 0) return "";
return clsge_UserLevelScoreEN._RefreshTimeLst[clsge_UserLevelScoreEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_UserLevelScore_CheckPropertyNew(pobjge_UserLevelScoreEN: clsge_UserLevelScoreEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.courseId) === true 
 || pobjge_UserLevelScoreEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 用户闯关得分)!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (null === pobjge_UserLevelScoreEN.credits 
 || pobjge_UserLevelScoreEN.credits != null && pobjge_UserLevelScoreEN.credits.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[积分]不能为空(In 用户闯关得分)!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.idCurrEduCls) == false && GetStrLen(pobjge_UserLevelScoreEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.idCurrEduCls}(clsge_UserLevelScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.gameLevelId) == false && GetStrLen(pobjge_UserLevelScoreEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.gameLevelId}(clsge_UserLevelScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.userId) == false && GetStrLen(pobjge_UserLevelScoreEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.userId}(clsge_UserLevelScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.courseId) == false && GetStrLen(pobjge_UserLevelScoreEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.courseId}(clsge_UserLevelScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.getDate) == false && GetStrLen(pobjge_UserLevelScoreEN.getDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[获取日期(getDate)]的长度不能超过20(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.getDate}(clsge_UserLevelScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.getInstructions) == false && GetStrLen(pobjge_UserLevelScoreEN.getInstructions) > 100)
{
 throw new Error(`(errid:Watl000413)字段[获取说明(getInstructions)]的长度不能超过100(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.getInstructions}(clsge_UserLevelScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.updDate) == false && GetStrLen(pobjge_UserLevelScoreEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.updDate}(clsge_UserLevelScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.updUser) == false && GetStrLen(pobjge_UserLevelScoreEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.updUser}(clsge_UserLevelScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.memo) == false && GetStrLen(pobjge_UserLevelScoreEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.memo}(clsge_UserLevelScoreBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.idCurrEduCls) == false && undefined !== pobjge_UserLevelScoreEN.idCurrEduCls && tzDataType.isString(pobjge_UserLevelScoreEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserLevelScoreEN.idCurrEduCls}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.gameLevelId) == false && undefined !== pobjge_UserLevelScoreEN.gameLevelId && tzDataType.isString(pobjge_UserLevelScoreEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_UserLevelScoreEN.gameLevelId}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.userId) == false && undefined !== pobjge_UserLevelScoreEN.userId && tzDataType.isString(pobjge_UserLevelScoreEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjge_UserLevelScoreEN.userId}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.courseId) == false && undefined !== pobjge_UserLevelScoreEN.courseId && tzDataType.isString(pobjge_UserLevelScoreEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_UserLevelScoreEN.courseId}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserLevelScoreEN.passed && undefined !== pobjge_UserLevelScoreEN.passed && tzDataType.isBoolean(pobjge_UserLevelScoreEN.passed) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否合格(passed)]的值:[${pobjge_UserLevelScoreEN.passed}], 非法,应该为布尔型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserLevelScoreEN.credits && undefined !== pobjge_UserLevelScoreEN.credits && tzDataType.isNumber(pobjge_UserLevelScoreEN.credits) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分(credits)]的值:[${pobjge_UserLevelScoreEN.credits}], 非法,应该为数值型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.getDate) == false && undefined !== pobjge_UserLevelScoreEN.getDate && tzDataType.isString(pobjge_UserLevelScoreEN.getDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[获取日期(getDate)]的值:[${pobjge_UserLevelScoreEN.getDate}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.getInstructions) == false && undefined !== pobjge_UserLevelScoreEN.getInstructions && tzDataType.isString(pobjge_UserLevelScoreEN.getInstructions) === false)
{
 throw new Error(`(errid:Watl000414)字段[获取说明(getInstructions)]的值:[${pobjge_UserLevelScoreEN.getInstructions}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserLevelScoreEN.badgeNum && undefined !== pobjge_UserLevelScoreEN.badgeNum && tzDataType.isNumber(pobjge_UserLevelScoreEN.badgeNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章数量(badgeNum)]的值:[${pobjge_UserLevelScoreEN.badgeNum}], 非法,应该为数值型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.updDate) == false && undefined !== pobjge_UserLevelScoreEN.updDate && tzDataType.isString(pobjge_UserLevelScoreEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_UserLevelScoreEN.updDate}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.updUser) == false && undefined !== pobjge_UserLevelScoreEN.updUser && tzDataType.isString(pobjge_UserLevelScoreEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_UserLevelScoreEN.updUser}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.memo) == false && undefined !== pobjge_UserLevelScoreEN.memo && tzDataType.isString(pobjge_UserLevelScoreEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_UserLevelScoreEN.memo}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_UserLevelScore_CheckProperty4Update(pobjge_UserLevelScoreEN: clsge_UserLevelScoreEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.idCurrEduCls) == false && GetStrLen(pobjge_UserLevelScoreEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.idCurrEduCls}(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.gameLevelId) == false && GetStrLen(pobjge_UserLevelScoreEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.gameLevelId}(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.userId) == false && GetStrLen(pobjge_UserLevelScoreEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.userId}(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.courseId) == false && GetStrLen(pobjge_UserLevelScoreEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.courseId}(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.getDate) == false && GetStrLen(pobjge_UserLevelScoreEN.getDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[获取日期(getDate)]的长度不能超过20(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.getDate}(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.getInstructions) == false && GetStrLen(pobjge_UserLevelScoreEN.getInstructions) > 100)
{
 throw new Error(`(errid:Watl000416)字段[获取说明(getInstructions)]的长度不能超过100(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.getInstructions}(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.updDate) == false && GetStrLen(pobjge_UserLevelScoreEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.updDate}(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.updUser) == false && GetStrLen(pobjge_UserLevelScoreEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.updUser}(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.memo) == false && GetStrLen(pobjge_UserLevelScoreEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户闯关得分(ge_UserLevelScore))!值:${pobjge_UserLevelScoreEN.memo}(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.idCurrEduCls) == false && undefined !== pobjge_UserLevelScoreEN.idCurrEduCls && tzDataType.isString(pobjge_UserLevelScoreEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserLevelScoreEN.idCurrEduCls}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.gameLevelId) == false && undefined !== pobjge_UserLevelScoreEN.gameLevelId && tzDataType.isString(pobjge_UserLevelScoreEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_UserLevelScoreEN.gameLevelId}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.userId) == false && undefined !== pobjge_UserLevelScoreEN.userId && tzDataType.isString(pobjge_UserLevelScoreEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjge_UserLevelScoreEN.userId}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.courseId) == false && undefined !== pobjge_UserLevelScoreEN.courseId && tzDataType.isString(pobjge_UserLevelScoreEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_UserLevelScoreEN.courseId}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (null != pobjge_UserLevelScoreEN.passed && undefined !== pobjge_UserLevelScoreEN.passed && tzDataType.isBoolean(pobjge_UserLevelScoreEN.passed) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否合格(passed)]的值:[${pobjge_UserLevelScoreEN.passed}], 非法,应该为布尔型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (null != pobjge_UserLevelScoreEN.credits && undefined !== pobjge_UserLevelScoreEN.credits && tzDataType.isNumber(pobjge_UserLevelScoreEN.credits) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分(credits)]的值:[${pobjge_UserLevelScoreEN.credits}], 非法,应该为数值型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.getDate) == false && undefined !== pobjge_UserLevelScoreEN.getDate && tzDataType.isString(pobjge_UserLevelScoreEN.getDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[获取日期(getDate)]的值:[${pobjge_UserLevelScoreEN.getDate}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.getInstructions) == false && undefined !== pobjge_UserLevelScoreEN.getInstructions && tzDataType.isString(pobjge_UserLevelScoreEN.getInstructions) === false)
{
 throw new Error(`(errid:Watl000417)字段[获取说明(getInstructions)]的值:[${pobjge_UserLevelScoreEN.getInstructions}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (null != pobjge_UserLevelScoreEN.badgeNum && undefined !== pobjge_UserLevelScoreEN.badgeNum && tzDataType.isNumber(pobjge_UserLevelScoreEN.badgeNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章数量(badgeNum)]的值:[${pobjge_UserLevelScoreEN.badgeNum}], 非法,应该为数值型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.updDate) == false && undefined !== pobjge_UserLevelScoreEN.updDate && tzDataType.isString(pobjge_UserLevelScoreEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_UserLevelScoreEN.updDate}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.updUser) == false && undefined !== pobjge_UserLevelScoreEN.updUser && tzDataType.isString(pobjge_UserLevelScoreEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_UserLevelScoreEN.updUser}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.memo) == false && undefined !== pobjge_UserLevelScoreEN.memo && tzDataType.isString(pobjge_UserLevelScoreEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_UserLevelScoreEN.memo}], 非法,应该为字符型(In 用户闯关得分(ge_UserLevelScore))!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjge_UserLevelScoreEN.idCurrEduCls) === true 
 || pobjge_UserLevelScoreEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[教学班流水号]不能为空(In 用户闯关得分)!(clsge_UserLevelScoreBL:CheckProperty4Update)`);
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
export  function ge_UserLevelScore_GetJSONStrByObj (pobjge_UserLevelScoreEN: clsge_UserLevelScoreEN): string
{
pobjge_UserLevelScoreEN.sfUpdFldSetStr = pobjge_UserLevelScoreEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_UserLevelScoreEN);
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
export  function ge_UserLevelScore_GetObjLstByJSONStr (strJSON: string): Array<clsge_UserLevelScoreEN>
{
let arrge_UserLevelScoreObjLst = new Array<clsge_UserLevelScoreEN>();
if (strJSON === "")
{
return arrge_UserLevelScoreObjLst;
}
try
{
arrge_UserLevelScoreObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_UserLevelScoreObjLst;
}
return arrge_UserLevelScoreObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_UserLevelScoreObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_UserLevelScore_GetObjLstByJSONObjLst (arrge_UserLevelScoreObjLstS: Array<clsge_UserLevelScoreEN>): Array<clsge_UserLevelScoreEN>
{
const arrge_UserLevelScoreObjLst = new Array<clsge_UserLevelScoreEN>();
for (const objInFor of arrge_UserLevelScoreObjLstS) {
const obj1 = ge_UserLevelScore_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_UserLevelScoreObjLst.push(obj1);
}
return arrge_UserLevelScoreObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_UserLevelScore_GetObjByJSONStr (strJSON: string): clsge_UserLevelScoreEN
{
let pobjge_UserLevelScoreEN = new clsge_UserLevelScoreEN();
if (strJSON === "")
{
return pobjge_UserLevelScoreEN;
}
try
{
pobjge_UserLevelScoreEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_UserLevelScoreEN;
}
return pobjge_UserLevelScoreEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_UserLevelScore_GetCombineCondition(objge_UserLevelScoreCond: clsge_UserLevelScoreEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objge_UserLevelScoreCond.dicFldComparisonOp[clsge_UserLevelScoreEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserLevelScoreEN.con_IdCurrEduCls, objge_UserLevelScoreCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_GameLevelId) == true)
{
const strComparisonOpGameLevelId:string = objge_UserLevelScoreCond.dicFldComparisonOp[clsge_UserLevelScoreEN.con_GameLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserLevelScoreEN.con_GameLevelId, objge_UserLevelScoreCond.gameLevelId, strComparisonOpGameLevelId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objge_UserLevelScoreCond.dicFldComparisonOp[clsge_UserLevelScoreEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserLevelScoreEN.con_UserId, objge_UserLevelScoreCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_UserLevelScoreCond.dicFldComparisonOp[clsge_UserLevelScoreEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserLevelScoreEN.con_CourseId, objge_UserLevelScoreCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_Passed) == true)
{
if (objge_UserLevelScoreCond.passed == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_UserLevelScoreEN.con_Passed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserLevelScoreEN.con_Passed);
}
}
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_Credits) == true)
{
const strComparisonOpCredits:string = objge_UserLevelScoreCond.dicFldComparisonOp[clsge_UserLevelScoreEN.con_Credits];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserLevelScoreEN.con_Credits, objge_UserLevelScoreCond.credits, strComparisonOpCredits);
}
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_GetDate) == true)
{
const strComparisonOpGetDate:string = objge_UserLevelScoreCond.dicFldComparisonOp[clsge_UserLevelScoreEN.con_GetDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserLevelScoreEN.con_GetDate, objge_UserLevelScoreCond.getDate, strComparisonOpGetDate);
}
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_GetInstructions) == true)
{
const strComparisonOpGetInstructions:string = objge_UserLevelScoreCond.dicFldComparisonOp[clsge_UserLevelScoreEN.con_GetInstructions];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserLevelScoreEN.con_GetInstructions, objge_UserLevelScoreCond.getInstructions, strComparisonOpGetInstructions);
}
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_BadgeNum) == true)
{
const strComparisonOpBadgeNum:string = objge_UserLevelScoreCond.dicFldComparisonOp[clsge_UserLevelScoreEN.con_BadgeNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserLevelScoreEN.con_BadgeNum, objge_UserLevelScoreCond.badgeNum, strComparisonOpBadgeNum);
}
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_UserLevelScoreCond.dicFldComparisonOp[clsge_UserLevelScoreEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserLevelScoreEN.con_UpdDate, objge_UserLevelScoreCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_UserLevelScoreCond.dicFldComparisonOp[clsge_UserLevelScoreEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserLevelScoreEN.con_UpdUser, objge_UserLevelScoreCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_UserLevelScoreCond.dicFldComparisonOp, clsge_UserLevelScoreEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_UserLevelScoreCond.dicFldComparisonOp[clsge_UserLevelScoreEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserLevelScoreEN.con_Memo, objge_UserLevelScoreCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_UserLevelScoreENS:源对象
 * @param objge_UserLevelScoreENT:目标对象
*/
export  function ge_UserLevelScore_CopyObjTo(objge_UserLevelScoreENS: clsge_UserLevelScoreEN , objge_UserLevelScoreENT: clsge_UserLevelScoreEN ): void 
{
objge_UserLevelScoreENT.idCurrEduCls = objge_UserLevelScoreENS.idCurrEduCls; //教学班流水号
objge_UserLevelScoreENT.gameLevelId = objge_UserLevelScoreENS.gameLevelId; //游戏关卡Id
objge_UserLevelScoreENT.userId = objge_UserLevelScoreENS.userId; //用户ID
objge_UserLevelScoreENT.courseId = objge_UserLevelScoreENS.courseId; //课程Id
objge_UserLevelScoreENT.passed = objge_UserLevelScoreENS.passed; //是否合格
objge_UserLevelScoreENT.credits = objge_UserLevelScoreENS.credits; //积分
objge_UserLevelScoreENT.getDate = objge_UserLevelScoreENS.getDate; //获取日期
objge_UserLevelScoreENT.getInstructions = objge_UserLevelScoreENS.getInstructions; //获取说明
objge_UserLevelScoreENT.badgeNum = objge_UserLevelScoreENS.badgeNum; //徽章数量
objge_UserLevelScoreENT.updDate = objge_UserLevelScoreENS.updDate; //修改日期
objge_UserLevelScoreENT.updUser = objge_UserLevelScoreENS.updUser; //修改人
objge_UserLevelScoreENT.memo = objge_UserLevelScoreENS.memo; //备注
objge_UserLevelScoreENT.sfUpdFldSetStr = objge_UserLevelScoreENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_UserLevelScoreENS:源对象
 * @param objge_UserLevelScoreENT:目标对象
*/
export  function ge_UserLevelScore_GetObjFromJsonObj(objge_UserLevelScoreENS: clsge_UserLevelScoreEN): clsge_UserLevelScoreEN 
{
 const objge_UserLevelScoreENT: clsge_UserLevelScoreEN = new clsge_UserLevelScoreEN();
ObjectAssign(objge_UserLevelScoreENT, objge_UserLevelScoreENS);
 return objge_UserLevelScoreENT;
}