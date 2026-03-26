
 /**
 * 类名:clsge_GameLevelWApi
 * 表名:ge_GameLevel(01120904)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:34
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 游戏关卡表(ge_GameLevel)
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
import { clsge_GameLevelEN } from "@/ts/L0Entity/Knowledges/clsge_GameLevelEN";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_GameLevel_Controller = "ge_GameLevelApi";
 export const ge_GameLevel_ConstructorName = "ge_GameLevel";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strGameLevelId:关键字
 * @returns 对象
 **/
export  async function ge_GameLevel_GetObjByGameLevelIdAsync(strGameLevelId: string): Promise<clsge_GameLevelEN|null>  
{
const strThisFuncName = "GetObjByGameLevelIdAsync";

if (IsNullOrEmpty(strGameLevelId) == true)
{
  const strMsg = Format("参数:[strGameLevelId]不能为空!(In clsge_GameLevelWApi.GetObjByGameLevelIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strGameLevelId.length != 8)
{
const strMsg = Format("缓存分类变量:[strGameLevelId]的长度:[{0}]不正确!(clsge_GameLevelWApi.GetObjByGameLevelIdAsync)", strGameLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByGameLevelId";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strGameLevelId,
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
const objge_GameLevel = ge_GameLevel_GetObjFromJsonObj(returnObj);
return objge_GameLevel;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param strGameLevelId:所给的关键字
 * @returns 对象
*/
export  async function ge_GameLevel_GetObjByGameLevelIdlocalStorage(strGameLevelId: string) {
const strThisFuncName = "GetObjByGameLevelIdlocalStorage";

if (IsNullOrEmpty(strGameLevelId) == true)
{
  const strMsg = Format("参数:[strGameLevelId]不能为空!(In clsge_GameLevelWApi.GetObjByGameLevelIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strGameLevelId.length != 8)
{
const strMsg = Format("缓存分类变量:[strGameLevelId]的长度:[{0}]不正确!(clsge_GameLevelWApi.GetObjByGameLevelIdlocalStorage)", strGameLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_GameLevelEN._CurrTabName, strGameLevelId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_GameLevelCache: clsge_GameLevelEN = JSON.parse(strTempObj);
return objge_GameLevelCache;
}
try
{
const objge_GameLevel = await ge_GameLevel_GetObjByGameLevelIdAsync(strGameLevelId);
if (objge_GameLevel != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_GameLevel));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_GameLevel;
}
return objge_GameLevel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strGameLevelId, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strGameLevelId:所给的关键字
 * @returns 对象
*/
export  async function ge_GameLevel_GetObjByGameLevelIdCache(strGameLevelId:string,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByGameLevelIdCache";

if (IsNullOrEmpty(strGameLevelId) == true)
{
  const strMsg = Format("参数:[strGameLevelId]不能为空!(In clsge_GameLevelWApi.GetObjByGameLevelIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strGameLevelId.length != 8)
{
const strMsg = Format("缓存分类变量:[strGameLevelId]的长度:[{0}]不正确!(clsge_GameLevelWApi.GetObjByGameLevelIdCache)", strGameLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstCache(strCourseId);
try
{
const arrge_GameLevelSel = arrge_GameLevelObjLstCache.filter(x => 
 x.gameLevelId == strGameLevelId );
let objge_GameLevel: clsge_GameLevelEN;
if (arrge_GameLevelSel.length > 0)
{
objge_GameLevel = arrge_GameLevelSel[0];
return objge_GameLevel;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_GameLevelConst = await ge_GameLevel_GetObjByGameLevelIdAsync(strGameLevelId);
if (objge_GameLevelConst != null)
{
ge_GameLevel_ReFreshThisCache(strCourseId);
return objge_GameLevelConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strGameLevelId, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_GameLevel:所给的对象
 * @returns 对象
*/
export  async function ge_GameLevel_UpdateObjInLstCache(objge_GameLevel: clsge_GameLevelEN,strCourseId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstCache(strCourseId);
const obj = arrge_GameLevelObjLstCache.find(x => x.gameLevelName == objge_GameLevel.gameLevelName && x.idCurrEduCls == objge_GameLevel.idCurrEduCls);
if (obj != null)
{
objge_GameLevel.gameLevelId = obj.gameLevelId;
ObjectAssign( obj, objge_GameLevel);
}
else
{
arrge_GameLevelObjLstCache.push(objge_GameLevel);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  function ge_GameLevel_SortFunDefa(a:clsge_GameLevelEN , b:clsge_GameLevelEN): number 
{
return a.gameLevelId.localeCompare(b.gameLevelId);
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
export  function ge_GameLevel_SortFunDefa2Fld(a:clsge_GameLevelEN , b:clsge_GameLevelEN): number 
{
if (a.gameLevelName == b.gameLevelName) return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
else return a.gameLevelName.localeCompare(b.gameLevelName);
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
export  function ge_GameLevel_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_GameLevelEN.con_GameLevelId:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return a.gameLevelId.localeCompare(b.gameLevelId);
}
case clsge_GameLevelEN.con_GameLevelName:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (a.gameLevelName == null) return -1;
if (b.gameLevelName == null) return 1;
return a.gameLevelName.localeCompare(b.gameLevelName);
}
case clsge_GameLevelEN.con_IdCurrEduCls:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsge_GameLevelEN.con_CourseId:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsge_GameLevelEN.con_OrderNum:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return a.orderNum-b.orderNum;
}
case clsge_GameLevelEN.con_DifficultyLevelId:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (a.difficultyLevelId == null) return -1;
if (b.difficultyLevelId == null) return 1;
return a.difficultyLevelId.localeCompare(b.difficultyLevelId);
}
case clsge_GameLevelEN.con_LevelModeTypeId:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return a.levelModeTypeId.localeCompare(b.levelModeTypeId);
}
case clsge_GameLevelEN.con_QuestionTypeId:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (a.questionTypeId == null) return -1;
if (b.questionTypeId == null) return 1;
return a.questionTypeId.localeCompare(b.questionTypeId);
}
case clsge_GameLevelEN.con_QuestionNum:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return a.questionNum-b.questionNum;
}
case clsge_GameLevelEN.con_QuestionScore:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return a.questionScore-b.questionScore;
}
case clsge_GameLevelEN.con_IsRecommend:
return (a: clsge_GameLevelEN) => {
if (a.isRecommend == true) return 1;
else return -1
}
case clsge_GameLevelEN.con_UpdDate:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_GameLevelEN.con_UpdUser:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_GameLevelEN.con_Memo:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsge_GameLevelEN.con_TotalScore:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return a.totalScore-b.totalScore;
}
case clsge_GameLevelEN.con_InUse:
return (a: clsge_GameLevelEN) => {
if (a.inUse == true) return 1;
else return -1
}
case clsge_GameLevelEN.con_EndTime:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (a.endTime == null) return -1;
if (b.endTime == null) return 1;
return a.endTime.localeCompare(b.endTime);
}
case clsge_GameLevelEN.con_StartTime:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (a.startTime == null) return -1;
if (b.startTime == null) return 1;
return a.startTime.localeCompare(b.startTime);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_GameLevel]中不存在!(in ${ ge_GameLevel_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_GameLevelEN.con_GameLevelId:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return b.gameLevelId.localeCompare(a.gameLevelId);
}
case clsge_GameLevelEN.con_GameLevelName:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (b.gameLevelName == null) return -1;
if (a.gameLevelName == null) return 1;
return b.gameLevelName.localeCompare(a.gameLevelName);
}
case clsge_GameLevelEN.con_IdCurrEduCls:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsge_GameLevelEN.con_CourseId:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsge_GameLevelEN.con_OrderNum:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return b.orderNum-a.orderNum;
}
case clsge_GameLevelEN.con_DifficultyLevelId:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (b.difficultyLevelId == null) return -1;
if (a.difficultyLevelId == null) return 1;
return b.difficultyLevelId.localeCompare(a.difficultyLevelId);
}
case clsge_GameLevelEN.con_LevelModeTypeId:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return b.levelModeTypeId.localeCompare(a.levelModeTypeId);
}
case clsge_GameLevelEN.con_QuestionTypeId:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (b.questionTypeId == null) return -1;
if (a.questionTypeId == null) return 1;
return b.questionTypeId.localeCompare(a.questionTypeId);
}
case clsge_GameLevelEN.con_QuestionNum:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return b.questionNum-a.questionNum;
}
case clsge_GameLevelEN.con_QuestionScore:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return b.questionScore-a.questionScore;
}
case clsge_GameLevelEN.con_IsRecommend:
return (b: clsge_GameLevelEN) => {
if (b.isRecommend == true) return 1;
else return -1
}
case clsge_GameLevelEN.con_UpdDate:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_GameLevelEN.con_UpdUser:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_GameLevelEN.con_Memo:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsge_GameLevelEN.con_TotalScore:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
return b.totalScore-a.totalScore;
}
case clsge_GameLevelEN.con_InUse:
return (b: clsge_GameLevelEN) => {
if (b.inUse == true) return 1;
else return -1
}
case clsge_GameLevelEN.con_EndTime:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (b.endTime == null) return -1;
if (a.endTime == null) return 1;
return b.endTime.localeCompare(a.endTime);
}
case clsge_GameLevelEN.con_StartTime:
return (a: clsge_GameLevelEN, b: clsge_GameLevelEN) => {
if (b.startTime == null) return -1;
if (a.startTime == null) return 1;
return b.startTime.localeCompare(a.startTime);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_GameLevel]中不存在!(in ${ ge_GameLevel_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strGameLevelId:所给的关键字
 * @returns 对象
*/
export  async function ge_GameLevel_GetNameByGameLevelIdCache(strGameLevelId: string,strCourseId: string) {

if (IsNullOrEmpty(strGameLevelId) == true)
{
  const strMsg = Format("参数:[strGameLevelId]不能为空!(In clsge_GameLevelWApi.GetNameByGameLevelIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strGameLevelId.length != 8)
{
const strMsg = Format("缓存分类变量:[strGameLevelId]的长度:[{0}]不正确!(clsge_GameLevelWApi.GetNameByGameLevelIdCache)", strGameLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstCache(strCourseId);
if (arrge_GameLevelObjLstCache == null) return "";
try
{
const arrge_GameLevelSel = arrge_GameLevelObjLstCache.filter(x => 
 x.gameLevelId == strGameLevelId );
let objge_GameLevel: clsge_GameLevelEN;
if (arrge_GameLevelSel.length > 0)
{
objge_GameLevel = arrge_GameLevelSel[0];
return objge_GameLevel.gameLevelName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strGameLevelId);
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
export  async function ge_GameLevel_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_GameLevelEN.con_GameLevelId:
return (obj: clsge_GameLevelEN) => {
return obj.gameLevelId === value;
}
case clsge_GameLevelEN.con_GameLevelName:
return (obj: clsge_GameLevelEN) => {
return obj.gameLevelName === value;
}
case clsge_GameLevelEN.con_IdCurrEduCls:
return (obj: clsge_GameLevelEN) => {
return obj.idCurrEduCls === value;
}
case clsge_GameLevelEN.con_CourseId:
return (obj: clsge_GameLevelEN) => {
return obj.courseId === value;
}
case clsge_GameLevelEN.con_OrderNum:
return (obj: clsge_GameLevelEN) => {
return obj.orderNum === value;
}
case clsge_GameLevelEN.con_DifficultyLevelId:
return (obj: clsge_GameLevelEN) => {
return obj.difficultyLevelId === value;
}
case clsge_GameLevelEN.con_LevelModeTypeId:
return (obj: clsge_GameLevelEN) => {
return obj.levelModeTypeId === value;
}
case clsge_GameLevelEN.con_QuestionTypeId:
return (obj: clsge_GameLevelEN) => {
return obj.questionTypeId === value;
}
case clsge_GameLevelEN.con_QuestionNum:
return (obj: clsge_GameLevelEN) => {
return obj.questionNum === value;
}
case clsge_GameLevelEN.con_QuestionScore:
return (obj: clsge_GameLevelEN) => {
return obj.questionScore === value;
}
case clsge_GameLevelEN.con_IsRecommend:
return (obj: clsge_GameLevelEN) => {
return obj.isRecommend === value;
}
case clsge_GameLevelEN.con_UpdDate:
return (obj: clsge_GameLevelEN) => {
return obj.updDate === value;
}
case clsge_GameLevelEN.con_UpdUser:
return (obj: clsge_GameLevelEN) => {
return obj.updUser === value;
}
case clsge_GameLevelEN.con_Memo:
return (obj: clsge_GameLevelEN) => {
return obj.memo === value;
}
case clsge_GameLevelEN.con_TotalScore:
return (obj: clsge_GameLevelEN) => {
return obj.totalScore === value;
}
case clsge_GameLevelEN.con_InUse:
return (obj: clsge_GameLevelEN) => {
return obj.inUse === value;
}
case clsge_GameLevelEN.con_EndTime:
return (obj: clsge_GameLevelEN) => {
return obj.endTime === value;
}
case clsge_GameLevelEN.con_StartTime:
return (obj: clsge_GameLevelEN) => {
return obj.startTime === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_GameLevel]中不存在!(in ${ ge_GameLevel_ConstructorName}.${ strThisFuncName})`;
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
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function ge_GameLevel_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_GameLevelWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_GameLevelWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsge_GameLevelEN.con_GameLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_GameLevelEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_GameLevelEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strGameLevelId = strInValue;
if (IsNullOrEmpty(strGameLevelId) == true)
{
return "";
}
const objge_GameLevel = await ge_GameLevel_GetObjByGameLevelIdCache(strGameLevelId , strCourseIdClassfy);
if (objge_GameLevel == null) return "";
if (objge_GameLevel.GetFldValue(strOutFldName) == null) return "";
return objge_GameLevel.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCourseId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function ge_GameLevel_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_GameLevelWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_GameLevelWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsge_GameLevelEN.con_GameLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_GameLevel = await ge_GameLevel_GetObjLstCache(strCourseIdClassfy);
if (arrge_GameLevel == null) return [];
let arrge_GameLevelSel = arrge_GameLevel;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_GameLevelSel.length == 0) return [];
return arrge_GameLevelSel.map(x=>x.gameLevelId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_GameLevel_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_GetFirstObjAsync(strWhereCond: string): Promise<clsge_GameLevelEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const objge_GameLevel = ge_GameLevel_GetObjFromJsonObj(returnObj);
return objge_GameLevel;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_GameLevelEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_GameLevelEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsge_GameLevelEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_GameLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_GameLevelEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_GameLevelExObjLstCache: Array<clsge_GameLevelEN> = CacheHelper.Get(strKey);
const arrge_GameLevelObjLstT = ge_GameLevel_GetObjLstByJSONObjLst(arrge_GameLevelExObjLstCache);
return arrge_GameLevelObjLstT;
}
try
{
const arrge_GameLevelExObjLst = await ge_GameLevel_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_GameLevelExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_GameLevelExObjLst.length);
console.log(strInfo);
return arrge_GameLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_GameLevel_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_GameLevelEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_GameLevelEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_GameLevelEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_GameLevelEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_GameLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_GameLevelEN.CacheAddiCondition);
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
const arrge_GameLevelExObjLstCache: Array<clsge_GameLevelEN> = JSON.parse(strTempObjLst);
const arrge_GameLevelObjLstT = ge_GameLevel_GetObjLstByJSONObjLst(arrge_GameLevelExObjLstCache);
return arrge_GameLevelObjLstT;
}
try
{
const arrge_GameLevelExObjLst = await ge_GameLevel_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_GameLevelExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_GameLevelExObjLst.length);
console.log(strInfo);
return arrge_GameLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_GameLevel_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_GameLevelEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_GameLevelObjLstCache: Array<clsge_GameLevelEN> = JSON.parse(strTempObjLst);
return arrge_GameLevelObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_GameLevel_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_GameLevelEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_GameLevelEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_GameLevelEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_GameLevelEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_GameLevelEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_GameLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_GameLevelEN.CacheAddiCondition);
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
const arrge_GameLevelExObjLstCache: Array<clsge_GameLevelEN> = JSON.parse(strTempObjLst);
const arrge_GameLevelObjLstT = ge_GameLevel_GetObjLstByJSONObjLst(arrge_GameLevelExObjLstCache);
return arrge_GameLevelObjLstT;
}
try
{
const arrge_GameLevelExObjLst = await ge_GameLevel_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_GameLevelExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_GameLevelExObjLst.length);
console.log(strInfo);
return arrge_GameLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_GameLevel_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_GameLevelEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_GameLevelObjLstCache: Array<clsge_GameLevelEN> = JSON.parse(strTempObjLst);
return arrge_GameLevelObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_GameLevel_GetObjLstCache(strCourseId: string): Promise<Array<clsge_GameLevelEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_GameLevelWApi.ge_GameLevel_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_GameLevelWApi.ge_GameLevel_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrge_GameLevelObjLstCache;
switch (clsge_GameLevelEN.CacheModeId)
{
case "04"://sessionStorage
arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstClientCache(strCourseId);
break;
default:
arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstClientCache(strCourseId);
break;
}
return arrge_GameLevelObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_GameLevel_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_GameLevelObjLstCache;
switch (clsge_GameLevelEN.CacheModeId)
{
case "04"://sessionStorage
arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrge_GameLevelObjLstCache = null;
break;
default:
arrge_GameLevelObjLstCache = null;
break;
}
return arrge_GameLevelObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrGameLevelIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_GameLevel_GetSubObjLstCache(objge_GameLevelCond: clsge_GameLevelEN ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstCache(strCourseId);
let arrge_GameLevelSel = arrge_GameLevelObjLstCache;
if (objge_GameLevelCond.sfFldComparisonOp == null || objge_GameLevelCond.sfFldComparisonOp == "") return arrge_GameLevelSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_GameLevelCond.sfFldComparisonOp);
//console.log("clsge_GameLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_GameLevelCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_GameLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_GameLevelSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_GameLevelCond), ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_GameLevelEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrGameLevelId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_GameLevel_GetObjLstByGameLevelIdLstAsync(arrGameLevelId: Array<string>): Promise<Array<clsge_GameLevelEN>>  
{
const strThisFuncName = "GetObjLstByGameLevelIdLstAsync";
const strAction = "GetObjLstByGameLevelIdLst";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrGameLevelId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param arrstrGameLevelIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_GameLevel_GetObjLstByGameLevelIdLstCache(arrGameLevelIdLst: Array<string> ,strCourseId: string) {
const strThisFuncName = "GetObjLstByGameLevelIdLstCache";
try
{
const arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstCache(strCourseId);
const arrge_GameLevelSel = arrge_GameLevelObjLstCache.filter(x => arrGameLevelIdLst.indexOf(x.gameLevelId)>-1);
return arrge_GameLevelSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrGameLevelIdLst.join(","), ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_GameLevelEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_GameLevelEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_GameLevelEN>();
const arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstCache(strCourseId);
if (arrge_GameLevelObjLstCache.length == 0) return arrge_GameLevelObjLstCache;
let arrge_GameLevelSel = arrge_GameLevelObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_GameLevelCond = new clsge_GameLevelEN();
ObjectAssign(objge_GameLevelCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_GameLevelWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_GameLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_GameLevelSel.length == 0) return arrge_GameLevelSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_GameLevelSel = arrge_GameLevelSel.sort(ge_GameLevel_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_GameLevelSel = arrge_GameLevelSel.sort(objPagerPara.sortFun);
}
arrge_GameLevelSel = arrge_GameLevelSel.slice(intStart, intEnd);     
return arrge_GameLevelSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_GameLevelEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_GameLevel_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_GameLevelEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_GameLevelEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param strGameLevelId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_GameLevel_DelRecordAsync(strGameLevelId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strGameLevelId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param arrGameLevelId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_GameLevel_Delge_GameLevelsAsync(arrGameLevelId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_GameLevelsAsync";
const strAction = "Delge_GameLevels";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrGameLevelId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_Delge_GameLevelsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_GameLevelsByCondAsync";
const strAction = "Delge_GameLevelsByCond";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_GameLevel_AddNewRecordAsync(objge_GameLevelEN: clsge_GameLevelEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_GameLevelEN);
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_GameLevel_AddNewRecordWithMaxIdAsync(objge_GameLevelEN: clsge_GameLevelEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objge_GameLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_GameLevel_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objge_GameLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_GameLevel_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_GameLevelEN);
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objge_GameLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_GameLevel_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_GameLevelEN);
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_AddNewObjSave(objge_GameLevelEN: clsge_GameLevelEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_GameLevel_CheckPropertyNew(objge_GameLevelEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_GameLevel_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_GameLevel_CheckUniCond4Add(objge_GameLevelEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_GameLevel_AddNewRecordWithMaxIdAsync(objge_GameLevelEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
ge_GameLevel_ReFreshCache(objge_GameLevelEN.courseId);
}
else
{
const strInfo = `添加[游戏关卡表(ge_GameLevel)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_GameLevel_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_GameLevel_CheckUniCond4Add(objge_GameLevelEN: clsge_GameLevelEN): Promise<boolean>{
const strUniquenessCondition = ge_GameLevel_GetUniCondStr(objge_GameLevelEN);
const bolIsExistCondition = await ge_GameLevel_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_GameLevel_CheckUniCond4Update(objge_GameLevelEN: clsge_GameLevelEN): Promise<boolean>{
const strUniquenessCondition = ge_GameLevel_GetUniCondStr4Update(objge_GameLevelEN);
const bolIsExistCondition = await ge_GameLevel_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_GameLevel_UpdateObjSave(objge_GameLevelEN: clsge_GameLevelEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_GameLevelEN.sfUpdFldSetStr = objge_GameLevelEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_GameLevelEN.gameLevelId == "" || objge_GameLevelEN.gameLevelId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_GameLevel_CheckProperty4Update(objge_GameLevelEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_GameLevel_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_GameLevel_CheckUniCond4Update(objge_GameLevelEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_GameLevel_UpdateRecordAsync(objge_GameLevelEN);
if (returnBool == true)
{
ge_GameLevel_ReFreshCache(objge_GameLevelEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_GameLevel_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objge_GameLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_GameLevel_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_GameLevelEN);
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objge_GameLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_GameLevel_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objge_GameLevelEN);
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_GameLevelEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_GameLevel_AddNewRecordWithReturnKeyAsync(objge_GameLevelEN: clsge_GameLevelEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_GameLevel_UpdateRecordAsync(objge_GameLevelEN: clsge_GameLevelEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_GameLevelEN.sfUpdFldSetStr === undefined || objge_GameLevelEN.sfUpdFldSetStr === null || objge_GameLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_GameLevelEN.gameLevelId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_GameLevel_EditRecordExAsync(objge_GameLevelEN: clsge_GameLevelEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_GameLevelEN.sfUpdFldSetStr === undefined || objge_GameLevelEN.sfUpdFldSetStr === null || objge_GameLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_GameLevelEN.gameLevelId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_GameLevel_UpdateWithConditionAsync(objge_GameLevelEN: clsge_GameLevelEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_GameLevelEN.sfUpdFldSetStr === undefined || objge_GameLevelEN.sfUpdFldSetStr === null || objge_GameLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_GameLevelEN.gameLevelId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);
objge_GameLevelEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param objstrGameLevelIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_GameLevel_IsExistRecordCache(objge_GameLevelCond: clsge_GameLevelEN,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstCache(strCourseId);
if (arrge_GameLevelObjLstCache == null) return false;
let arrge_GameLevelSel = arrge_GameLevelObjLstCache;
if (objge_GameLevelCond.sfFldComparisonOp == null || objge_GameLevelCond.sfFldComparisonOp == "") return arrge_GameLevelSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_GameLevelCond.sfFldComparisonOp);
//console.log("clsge_GameLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_GameLevelCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_GameLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_GameLevelSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_GameLevelCond), ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param strGameLevelId:所给的关键字
 * @returns 对象
*/
export  async function ge_GameLevel_IsExistCache(strGameLevelId:string,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstCache(strCourseId);
if (arrge_GameLevelObjLstCache == null) return false;
try
{
const arrge_GameLevelSel = arrge_GameLevelObjLstCache.filter(x => x.gameLevelId == strGameLevelId);
if (arrge_GameLevelSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strGameLevelId, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strGameLevelId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_GameLevel_IsExistAsync(strGameLevelId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strGameLevelId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_GameLevel_GetRecCountByCondCache(objge_GameLevelCond: clsge_GameLevelEN ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_GameLevelObjLstCache = await ge_GameLevel_GetObjLstCache(strCourseId);
if (arrge_GameLevelObjLstCache == null) return 0;
let arrge_GameLevelSel = arrge_GameLevelObjLstCache;
if (objge_GameLevelCond.sfFldComparisonOp == null || objge_GameLevelCond.sfFldComparisonOp == "") return arrge_GameLevelSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_GameLevelCond.sfFldComparisonOp);
//console.log("clsge_GameLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_GameLevelCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_GameLevelCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_GameLevelSel = arrge_GameLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_GameLevelSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_GameLevelCond), ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevel_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_GameLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevel_ConstructorName, strThisFuncName);
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
export  function ge_GameLevel_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_GameLevel_ReFreshCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_GameLevelWApi.clsge_GameLevelWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_GameLevelWApi.clsge_GameLevelWApi.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsge_GameLevelEN._CurrTabName, strCourseId);
switch (clsge_GameLevelEN.CacheModeId)
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
clsge_GameLevelEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_GameLevel_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_GameLevelWApi.ge_GameLevel_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_GameLevelWApi.ge_GameLevel_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsge_GameLevelEN._CurrTabName, strCourseId);
switch (clsge_GameLevelEN.CacheModeId)
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
clsge_GameLevelEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_GameLevel_GetLastRefreshTime():string
{
if (clsge_GameLevelEN._RefreshTimeLst.length == 0) return "";
return clsge_GameLevelEN._RefreshTimeLst[clsge_GameLevelEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function ge_GameLevel_BindDdl_GameLevelIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_GameLevelWApi.BindDdl_GameLevelIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_GameLevelWApi.BindDdl_GameLevelIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_GameLevelIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_GameLevelIdInDivCache");
let arrObjLstSel = await ge_GameLevel_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_GameLevelEN.con_GameLevelId, clsge_GameLevelEN.con_GameLevelName, "选游戏关卡...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function ge_GameLevel_GetArrge_GameLevelByCourseId(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_GameLevelWApi.BindDdl_GameLevelIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_GameLevelWApi.BindDdl_GameLevelIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_GameLevelIdInDivCache");
const arrge_GameLevel = new Array<clsge_GameLevelEN>();
let arrObjLstSel = await ge_GameLevel_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
const obj0 = new clsge_GameLevelEN();
obj0.gameLevelId = '0';
obj0.gameLevelName = '选游戏关卡...';
arrge_GameLevel.push(obj0);
arrObjLstSel.forEach(x => arrge_GameLevel.push(x));
return arrge_GameLevel;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_GameLevel_CheckPropertyNew(pobjge_GameLevelEN: clsge_GameLevelEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_GameLevelEN.levelModeTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[模式Id]不能为空(In 游戏关卡表)!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_GameLevelEN.gameLevelId) == false && GetStrLen(pobjge_GameLevelEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.gameLevelId}(clsge_GameLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.gameLevelName) == false && GetStrLen(pobjge_GameLevelEN.gameLevelName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[游戏关卡名称(gameLevelName)]的长度不能超过100(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.gameLevelName}(clsge_GameLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.idCurrEduCls) == false && GetStrLen(pobjge_GameLevelEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.idCurrEduCls}(clsge_GameLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.courseId) == false && GetStrLen(pobjge_GameLevelEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.courseId}(clsge_GameLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.difficultyLevelId) == false && GetStrLen(pobjge_GameLevelEN.difficultyLevelId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[难度等级Id(difficultyLevelId)]的长度不能超过2(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.difficultyLevelId}(clsge_GameLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.levelModeTypeId) == false && GetStrLen(pobjge_GameLevelEN.levelModeTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[模式Id(levelModeTypeId)]的长度不能超过2(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.levelModeTypeId}(clsge_GameLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.questionTypeId) == false && GetStrLen(pobjge_GameLevelEN.questionTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[题目类型Id(questionTypeId)]的长度不能超过2(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.questionTypeId}(clsge_GameLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.updDate) == false && GetStrLen(pobjge_GameLevelEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.updDate}(clsge_GameLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.updUser) == false && GetStrLen(pobjge_GameLevelEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.updUser}(clsge_GameLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.memo) == false && GetStrLen(pobjge_GameLevelEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.memo}(clsge_GameLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.endTime) == false && GetStrLen(pobjge_GameLevelEN.endTime) > 20)
{
 throw new Error(`(errid:Watl000413)字段[结束时间(endTime)]的长度不能超过20(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.endTime}(clsge_GameLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.startTime) == false && GetStrLen(pobjge_GameLevelEN.startTime) > 20)
{
 throw new Error(`(errid:Watl000413)字段[开始时间(s)(startTime)]的长度不能超过20(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.startTime}(clsge_GameLevelBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_GameLevelEN.gameLevelId) == false && undefined !== pobjge_GameLevelEN.gameLevelId && tzDataType.isString(pobjge_GameLevelEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_GameLevelEN.gameLevelId}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.gameLevelName) == false && undefined !== pobjge_GameLevelEN.gameLevelName && tzDataType.isString(pobjge_GameLevelEN.gameLevelName) === false)
{
 throw new Error(`(errid:Watl000414)字段[游戏关卡名称(gameLevelName)]的值:[${pobjge_GameLevelEN.gameLevelName}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.idCurrEduCls) == false && undefined !== pobjge_GameLevelEN.idCurrEduCls && tzDataType.isString(pobjge_GameLevelEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_GameLevelEN.idCurrEduCls}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.courseId) == false && undefined !== pobjge_GameLevelEN.courseId && tzDataType.isString(pobjge_GameLevelEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_GameLevelEN.courseId}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (null != pobjge_GameLevelEN.orderNum && undefined !== pobjge_GameLevelEN.orderNum && tzDataType.isNumber(pobjge_GameLevelEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjge_GameLevelEN.orderNum}], 非法,应该为数值型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.difficultyLevelId) == false && undefined !== pobjge_GameLevelEN.difficultyLevelId && tzDataType.isString(pobjge_GameLevelEN.difficultyLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[难度等级Id(difficultyLevelId)]的值:[${pobjge_GameLevelEN.difficultyLevelId}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.levelModeTypeId) == false && undefined !== pobjge_GameLevelEN.levelModeTypeId && tzDataType.isString(pobjge_GameLevelEN.levelModeTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[模式Id(levelModeTypeId)]的值:[${pobjge_GameLevelEN.levelModeTypeId}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.questionTypeId) == false && undefined !== pobjge_GameLevelEN.questionTypeId && tzDataType.isString(pobjge_GameLevelEN.questionTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目类型Id(questionTypeId)]的值:[${pobjge_GameLevelEN.questionTypeId}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (null != pobjge_GameLevelEN.questionNum && undefined !== pobjge_GameLevelEN.questionNum && tzDataType.isNumber(pobjge_GameLevelEN.questionNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目数(questionNum)]的值:[${pobjge_GameLevelEN.questionNum}], 非法,应该为数值型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (null != pobjge_GameLevelEN.questionScore && undefined !== pobjge_GameLevelEN.questionScore && tzDataType.isNumber(pobjge_GameLevelEN.questionScore) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目得分(questionScore)]的值:[${pobjge_GameLevelEN.questionScore}], 非法,应该为数值型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (null != pobjge_GameLevelEN.isRecommend && undefined !== pobjge_GameLevelEN.isRecommend && tzDataType.isBoolean(pobjge_GameLevelEN.isRecommend) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否推荐(isRecommend)]的值:[${pobjge_GameLevelEN.isRecommend}], 非法,应该为布尔型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.updDate) == false && undefined !== pobjge_GameLevelEN.updDate && tzDataType.isString(pobjge_GameLevelEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_GameLevelEN.updDate}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.updUser) == false && undefined !== pobjge_GameLevelEN.updUser && tzDataType.isString(pobjge_GameLevelEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_GameLevelEN.updUser}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.memo) == false && undefined !== pobjge_GameLevelEN.memo && tzDataType.isString(pobjge_GameLevelEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_GameLevelEN.memo}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (null != pobjge_GameLevelEN.totalScore && undefined !== pobjge_GameLevelEN.totalScore && tzDataType.isNumber(pobjge_GameLevelEN.totalScore) === false)
{
 throw new Error(`(errid:Watl000414)字段[总得分(totalScore)]的值:[${pobjge_GameLevelEN.totalScore}], 非法,应该为数值型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (null != pobjge_GameLevelEN.inUse && undefined !== pobjge_GameLevelEN.inUse && tzDataType.isBoolean(pobjge_GameLevelEN.inUse) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjge_GameLevelEN.inUse}], 非法,应该为布尔型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.endTime) == false && undefined !== pobjge_GameLevelEN.endTime && tzDataType.isString(pobjge_GameLevelEN.endTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[结束时间(endTime)]的值:[${pobjge_GameLevelEN.endTime}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.startTime) == false && undefined !== pobjge_GameLevelEN.startTime && tzDataType.isString(pobjge_GameLevelEN.startTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[开始时间(s)(startTime)]的值:[${pobjge_GameLevelEN.startTime}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_GameLevel_CheckProperty4Update(pobjge_GameLevelEN: clsge_GameLevelEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_GameLevelEN.gameLevelId) == false && GetStrLen(pobjge_GameLevelEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.gameLevelId}(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.gameLevelName) == false && GetStrLen(pobjge_GameLevelEN.gameLevelName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[游戏关卡名称(gameLevelName)]的长度不能超过100(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.gameLevelName}(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.idCurrEduCls) == false && GetStrLen(pobjge_GameLevelEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.idCurrEduCls}(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.courseId) == false && GetStrLen(pobjge_GameLevelEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.courseId}(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.difficultyLevelId) == false && GetStrLen(pobjge_GameLevelEN.difficultyLevelId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[难度等级Id(difficultyLevelId)]的长度不能超过2(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.difficultyLevelId}(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.levelModeTypeId) == false && GetStrLen(pobjge_GameLevelEN.levelModeTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[模式Id(levelModeTypeId)]的长度不能超过2(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.levelModeTypeId}(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.questionTypeId) == false && GetStrLen(pobjge_GameLevelEN.questionTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[题目类型Id(questionTypeId)]的长度不能超过2(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.questionTypeId}(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.updDate) == false && GetStrLen(pobjge_GameLevelEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.updDate}(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.updUser) == false && GetStrLen(pobjge_GameLevelEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.updUser}(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.memo) == false && GetStrLen(pobjge_GameLevelEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.memo}(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.endTime) == false && GetStrLen(pobjge_GameLevelEN.endTime) > 20)
{
 throw new Error(`(errid:Watl000416)字段[结束时间(endTime)]的长度不能超过20(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.endTime}(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.startTime) == false && GetStrLen(pobjge_GameLevelEN.startTime) > 20)
{
 throw new Error(`(errid:Watl000416)字段[开始时间(s)(startTime)]的长度不能超过20(In 游戏关卡表(ge_GameLevel))!值:${pobjge_GameLevelEN.startTime}(clsge_GameLevelBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_GameLevelEN.gameLevelId) == false && undefined !== pobjge_GameLevelEN.gameLevelId && tzDataType.isString(pobjge_GameLevelEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_GameLevelEN.gameLevelId}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.gameLevelName) == false && undefined !== pobjge_GameLevelEN.gameLevelName && tzDataType.isString(pobjge_GameLevelEN.gameLevelName) === false)
{
 throw new Error(`(errid:Watl000417)字段[游戏关卡名称(gameLevelName)]的值:[${pobjge_GameLevelEN.gameLevelName}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.idCurrEduCls) == false && undefined !== pobjge_GameLevelEN.idCurrEduCls && tzDataType.isString(pobjge_GameLevelEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_GameLevelEN.idCurrEduCls}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.courseId) == false && undefined !== pobjge_GameLevelEN.courseId && tzDataType.isString(pobjge_GameLevelEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_GameLevelEN.courseId}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (null != pobjge_GameLevelEN.orderNum && undefined !== pobjge_GameLevelEN.orderNum && tzDataType.isNumber(pobjge_GameLevelEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjge_GameLevelEN.orderNum}], 非法,应该为数值型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.difficultyLevelId) == false && undefined !== pobjge_GameLevelEN.difficultyLevelId && tzDataType.isString(pobjge_GameLevelEN.difficultyLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[难度等级Id(difficultyLevelId)]的值:[${pobjge_GameLevelEN.difficultyLevelId}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.levelModeTypeId) == false && undefined !== pobjge_GameLevelEN.levelModeTypeId && tzDataType.isString(pobjge_GameLevelEN.levelModeTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[模式Id(levelModeTypeId)]的值:[${pobjge_GameLevelEN.levelModeTypeId}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.questionTypeId) == false && undefined !== pobjge_GameLevelEN.questionTypeId && tzDataType.isString(pobjge_GameLevelEN.questionTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目类型Id(questionTypeId)]的值:[${pobjge_GameLevelEN.questionTypeId}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (null != pobjge_GameLevelEN.questionNum && undefined !== pobjge_GameLevelEN.questionNum && tzDataType.isNumber(pobjge_GameLevelEN.questionNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目数(questionNum)]的值:[${pobjge_GameLevelEN.questionNum}], 非法,应该为数值型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (null != pobjge_GameLevelEN.questionScore && undefined !== pobjge_GameLevelEN.questionScore && tzDataType.isNumber(pobjge_GameLevelEN.questionScore) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目得分(questionScore)]的值:[${pobjge_GameLevelEN.questionScore}], 非法,应该为数值型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (null != pobjge_GameLevelEN.isRecommend && undefined !== pobjge_GameLevelEN.isRecommend && tzDataType.isBoolean(pobjge_GameLevelEN.isRecommend) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否推荐(isRecommend)]的值:[${pobjge_GameLevelEN.isRecommend}], 非法,应该为布尔型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.updDate) == false && undefined !== pobjge_GameLevelEN.updDate && tzDataType.isString(pobjge_GameLevelEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_GameLevelEN.updDate}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.updUser) == false && undefined !== pobjge_GameLevelEN.updUser && tzDataType.isString(pobjge_GameLevelEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_GameLevelEN.updUser}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.memo) == false && undefined !== pobjge_GameLevelEN.memo && tzDataType.isString(pobjge_GameLevelEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_GameLevelEN.memo}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (null != pobjge_GameLevelEN.totalScore && undefined !== pobjge_GameLevelEN.totalScore && tzDataType.isNumber(pobjge_GameLevelEN.totalScore) === false)
{
 throw new Error(`(errid:Watl000417)字段[总得分(totalScore)]的值:[${pobjge_GameLevelEN.totalScore}], 非法,应该为数值型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (null != pobjge_GameLevelEN.inUse && undefined !== pobjge_GameLevelEN.inUse && tzDataType.isBoolean(pobjge_GameLevelEN.inUse) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjge_GameLevelEN.inUse}], 非法,应该为布尔型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.endTime) == false && undefined !== pobjge_GameLevelEN.endTime && tzDataType.isString(pobjge_GameLevelEN.endTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[结束时间(endTime)]的值:[${pobjge_GameLevelEN.endTime}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelEN.startTime) == false && undefined !== pobjge_GameLevelEN.startTime && tzDataType.isString(pobjge_GameLevelEN.startTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[开始时间(s)(startTime)]的值:[${pobjge_GameLevelEN.startTime}], 非法,应该为字符型(In 游戏关卡表(ge_GameLevel))!(clsge_GameLevelBL:CheckProperty4Update)`);
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
export  function ge_GameLevel_GetJSONStrByObj (pobjge_GameLevelEN: clsge_GameLevelEN): string
{
pobjge_GameLevelEN.sfUpdFldSetStr = pobjge_GameLevelEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_GameLevelEN);
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
export  function ge_GameLevel_GetObjLstByJSONStr (strJSON: string): Array<clsge_GameLevelEN>
{
let arrge_GameLevelObjLst = new Array<clsge_GameLevelEN>();
if (strJSON === "")
{
return arrge_GameLevelObjLst;
}
try
{
arrge_GameLevelObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_GameLevelObjLst;
}
return arrge_GameLevelObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_GameLevelObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_GameLevel_GetObjLstByJSONObjLst (arrge_GameLevelObjLstS: Array<clsge_GameLevelEN>): Array<clsge_GameLevelEN>
{
const arrge_GameLevelObjLst = new Array<clsge_GameLevelEN>();
for (const objInFor of arrge_GameLevelObjLstS) {
const obj1 = ge_GameLevel_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_GameLevelObjLst.push(obj1);
}
return arrge_GameLevelObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_GameLevel_GetObjByJSONStr (strJSON: string): clsge_GameLevelEN
{
let pobjge_GameLevelEN = new clsge_GameLevelEN();
if (strJSON === "")
{
return pobjge_GameLevelEN;
}
try
{
pobjge_GameLevelEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_GameLevelEN;
}
return pobjge_GameLevelEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_GameLevel_GetCombineCondition(objge_GameLevelCond: clsge_GameLevelEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_GameLevelId) == true)
{
const strComparisonOpGameLevelId:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_GameLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_GameLevelId, objge_GameLevelCond.gameLevelId, strComparisonOpGameLevelId);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_GameLevelName) == true)
{
const strComparisonOpGameLevelName:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_GameLevelName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_GameLevelName, objge_GameLevelCond.gameLevelName, strComparisonOpGameLevelName);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_IdCurrEduCls, objge_GameLevelCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_CourseId, objge_GameLevelCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_GameLevelEN.con_OrderNum, objge_GameLevelCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_DifficultyLevelId) == true)
{
const strComparisonOpDifficultyLevelId:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_DifficultyLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_DifficultyLevelId, objge_GameLevelCond.difficultyLevelId, strComparisonOpDifficultyLevelId);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_LevelModeTypeId) == true)
{
const strComparisonOpLevelModeTypeId:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_LevelModeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_LevelModeTypeId, objge_GameLevelCond.levelModeTypeId, strComparisonOpLevelModeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_QuestionTypeId) == true)
{
const strComparisonOpQuestionTypeId:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_QuestionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_QuestionTypeId, objge_GameLevelCond.questionTypeId, strComparisonOpQuestionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_QuestionNum) == true)
{
const strComparisonOpQuestionNum:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_QuestionNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_GameLevelEN.con_QuestionNum, objge_GameLevelCond.questionNum, strComparisonOpQuestionNum);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_QuestionScore) == true)
{
const strComparisonOpQuestionScore:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_QuestionScore];
strWhereCond += Format(" And {0} {2} {1}", clsge_GameLevelEN.con_QuestionScore, objge_GameLevelCond.questionScore, strComparisonOpQuestionScore);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_IsRecommend) == true)
{
if (objge_GameLevelCond.isRecommend == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_GameLevelEN.con_IsRecommend);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_GameLevelEN.con_IsRecommend);
}
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_UpdDate, objge_GameLevelCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_UpdUser, objge_GameLevelCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_Memo, objge_GameLevelCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_TotalScore) == true)
{
const strComparisonOpTotalScore:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_TotalScore];
strWhereCond += Format(" And {0} {2} {1}", clsge_GameLevelEN.con_TotalScore, objge_GameLevelCond.totalScore, strComparisonOpTotalScore);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_InUse) == true)
{
if (objge_GameLevelCond.inUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_GameLevelEN.con_InUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_GameLevelEN.con_InUse);
}
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_EndTime) == true)
{
const strComparisonOpEndTime:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_EndTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_EndTime, objge_GameLevelCond.endTime, strComparisonOpEndTime);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelCond.dicFldComparisonOp, clsge_GameLevelEN.con_StartTime) == true)
{
const strComparisonOpStartTime:string = objge_GameLevelCond.dicFldComparisonOp[clsge_GameLevelEN.con_StartTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelEN.con_StartTime, objge_GameLevelCond.startTime, strComparisonOpStartTime);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_GameLevel(游戏关卡表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strGameLevelName: 游戏关卡名称(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_GameLevel_GetUniCondStr(objge_GameLevelEN: clsge_GameLevelEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and GameLevelName = '{0}'", objge_GameLevelEN.gameLevelName);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objge_GameLevelEN.idCurrEduCls);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_GameLevel(游戏关卡表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strGameLevelName: 游戏关卡名称(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_GameLevel_GetUniCondStr4Update(objge_GameLevelEN: clsge_GameLevelEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and GameLevelId <> '{0}'", objge_GameLevelEN.gameLevelId);
 strWhereCond +=  Format(" and GameLevelName = '{0}'", objge_GameLevelEN.gameLevelName);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objge_GameLevelEN.idCurrEduCls);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_GameLevelENS:源对象
 * @param objge_GameLevelENT:目标对象
*/
export  function ge_GameLevel_CopyObjTo(objge_GameLevelENS: clsge_GameLevelEN , objge_GameLevelENT: clsge_GameLevelEN ): void 
{
objge_GameLevelENT.gameLevelId = objge_GameLevelENS.gameLevelId; //游戏关卡Id
objge_GameLevelENT.gameLevelName = objge_GameLevelENS.gameLevelName; //游戏关卡名称
objge_GameLevelENT.idCurrEduCls = objge_GameLevelENS.idCurrEduCls; //教学班流水号
objge_GameLevelENT.courseId = objge_GameLevelENS.courseId; //课程Id
objge_GameLevelENT.orderNum = objge_GameLevelENS.orderNum; //序号
objge_GameLevelENT.difficultyLevelId = objge_GameLevelENS.difficultyLevelId; //难度等级Id
objge_GameLevelENT.levelModeTypeId = objge_GameLevelENS.levelModeTypeId; //模式Id
objge_GameLevelENT.questionTypeId = objge_GameLevelENS.questionTypeId; //题目类型Id
objge_GameLevelENT.questionNum = objge_GameLevelENS.questionNum; //题目数
objge_GameLevelENT.questionScore = objge_GameLevelENS.questionScore; //题目得分
objge_GameLevelENT.isRecommend = objge_GameLevelENS.isRecommend; //是否推荐
objge_GameLevelENT.updDate = objge_GameLevelENS.updDate; //修改日期
objge_GameLevelENT.updUser = objge_GameLevelENS.updUser; //修改人
objge_GameLevelENT.memo = objge_GameLevelENS.memo; //备注
objge_GameLevelENT.totalScore = objge_GameLevelENS.totalScore; //总得分
objge_GameLevelENT.inUse = objge_GameLevelENS.inUse; //是否在用
objge_GameLevelENT.endTime = objge_GameLevelENS.endTime; //结束时间
objge_GameLevelENT.startTime = objge_GameLevelENS.startTime; //开始时间(s)
objge_GameLevelENT.sfUpdFldSetStr = objge_GameLevelENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_GameLevelENS:源对象
 * @param objge_GameLevelENT:目标对象
*/
export  function ge_GameLevel_GetObjFromJsonObj(objge_GameLevelENS: clsge_GameLevelEN): clsge_GameLevelEN 
{
 const objge_GameLevelENT: clsge_GameLevelEN = new clsge_GameLevelEN();
ObjectAssign(objge_GameLevelENT, objge_GameLevelENS);
 return objge_GameLevelENT;
}