
 /**
 * 类名:clsvge_UserCreditsLog_MaxCreditsWApi
 * 表名:vge_UserCreditsLog_MaxCredits(01120939)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:16
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
 * v用户积分日志_最高分(vge_UserCreditsLog_MaxCredits)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper,LocalStorage_GetKeyByPrefix,SessionStorage_GetKeyByPrefix } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvge_UserCreditsLog_MaxCreditsEN } from "@/ts/L0Entity/GameLearn/clsvge_UserCreditsLog_MaxCreditsEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vge_UserCreditsLog_MaxCredits_Controller = "vge_UserCreditsLog_MaxCreditsApi";
 export const vge_UserCreditsLog_MaxCredits_ConstructorName = "vge_UserCreditsLog_MaxCredits";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strGameLevelId:关键字
 * @returns 对象
 **/
export  async function vge_UserCreditsLog_MaxCredits_GetObjByGameLevelIdAsync(strGameLevelId: string): Promise<clsvge_UserCreditsLog_MaxCreditsEN|null>  
{
const strThisFuncName = "GetObjByGameLevelIdAsync";

if (IsNullOrEmpty(strGameLevelId) == true)
{
  const strMsg = Format("参数:[strGameLevelId]不能为空!(In clsvge_UserCreditsLog_MaxCreditsWApi.GetObjByGameLevelIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strGameLevelId.length != 8)
{
const strMsg = Format("缓存分类变量:[strGameLevelId]的长度:[{0}]不正确!(clsvge_UserCreditsLog_MaxCreditsWApi.GetObjByGameLevelIdAsync)", strGameLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByGameLevelId";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const objvge_UserCreditsLog_MaxCredits = vge_UserCreditsLog_MaxCredits_GetObjFromJsonObj(returnObj);
return objvge_UserCreditsLog_MaxCredits;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetObjByGameLevelIdlocalStorage(strGameLevelId: string) {
const strThisFuncName = "GetObjByGameLevelIdlocalStorage";

if (IsNullOrEmpty(strGameLevelId) == true)
{
  const strMsg = Format("参数:[strGameLevelId]不能为空!(In clsvge_UserCreditsLog_MaxCreditsWApi.GetObjByGameLevelIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strGameLevelId.length != 8)
{
const strMsg = Format("缓存分类变量:[strGameLevelId]的长度:[{0}]不正确!(clsvge_UserCreditsLog_MaxCreditsWApi.GetObjByGameLevelIdlocalStorage)", strGameLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvge_UserCreditsLog_MaxCreditsEN._CurrTabName, strGameLevelId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvge_UserCreditsLog_MaxCreditsCache: clsvge_UserCreditsLog_MaxCreditsEN = JSON.parse(strTempObj);
return objvge_UserCreditsLog_MaxCreditsCache;
}
try
{
const objvge_UserCreditsLog_MaxCredits = await vge_UserCreditsLog_MaxCredits_GetObjByGameLevelIdAsync(strGameLevelId);
if (objvge_UserCreditsLog_MaxCredits != null)
{
localStorage.setItem(strKey, JSON.stringify(objvge_UserCreditsLog_MaxCredits));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvge_UserCreditsLog_MaxCredits;
}
return objvge_UserCreditsLog_MaxCredits;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strGameLevelId, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetObjByGameLevelIdCache(strGameLevelId:string,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByGameLevelIdCache";

if (IsNullOrEmpty(strGameLevelId) == true)
{
  const strMsg = Format("参数:[strGameLevelId]不能为空!(In clsvge_UserCreditsLog_MaxCreditsWApi.GetObjByGameLevelIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strGameLevelId.length != 8)
{
const strMsg = Format("缓存分类变量:[strGameLevelId]的长度:[{0}]不正确!(clsvge_UserCreditsLog_MaxCreditsWApi.GetObjByGameLevelIdCache)", strGameLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstCache(strIdCurrEduCls);
try
{
const arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsObjLstCache.filter(x => 
 x.gameLevelId == strGameLevelId );
let objvge_UserCreditsLog_MaxCredits: clsvge_UserCreditsLog_MaxCreditsEN;
if (arrvge_UserCreditsLog_MaxCreditsSel.length > 0)
{
objvge_UserCreditsLog_MaxCredits = arrvge_UserCreditsLog_MaxCreditsSel[0];
return objvge_UserCreditsLog_MaxCredits;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvge_UserCreditsLog_MaxCreditsConst = await vge_UserCreditsLog_MaxCredits_GetObjByGameLevelIdAsync(strGameLevelId);
if (objvge_UserCreditsLog_MaxCreditsConst != null)
{
vge_UserCreditsLog_MaxCredits_ReFreshThisCache(strIdCurrEduCls);
return objvge_UserCreditsLog_MaxCreditsConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strGameLevelId, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
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
export  function vge_UserCreditsLog_MaxCredits_SortFunDefa(a:clsvge_UserCreditsLog_MaxCreditsEN , b:clsvge_UserCreditsLog_MaxCreditsEN): number 
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
export  function vge_UserCreditsLog_MaxCredits_SortFunDefa2Fld(a:clsvge_UserCreditsLog_MaxCreditsEN , b:clsvge_UserCreditsLog_MaxCreditsEN): number 
{
if (a.credits == b.credits) return a.userId.localeCompare(b.userId);
else return a.credits - b.credits;
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
export  function vge_UserCreditsLog_MaxCredits_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvge_UserCreditsLog_MaxCreditsEN.con_GameLevelId:
return (a: clsvge_UserCreditsLog_MaxCreditsEN, b: clsvge_UserCreditsLog_MaxCreditsEN) => {
return a.gameLevelId.localeCompare(b.gameLevelId);
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_Credits:
return (a: clsvge_UserCreditsLog_MaxCreditsEN, b: clsvge_UserCreditsLog_MaxCreditsEN) => {
return a.credits-b.credits;
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_UserId:
return (a: clsvge_UserCreditsLog_MaxCreditsEN, b: clsvge_UserCreditsLog_MaxCreditsEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_IdCurrEduCls:
return (a: clsvge_UserCreditsLog_MaxCreditsEN, b: clsvge_UserCreditsLog_MaxCreditsEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_CourseId:
return (a: clsvge_UserCreditsLog_MaxCreditsEN, b: clsvge_UserCreditsLog_MaxCreditsEN) => {
return a.courseId.localeCompare(b.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vge_UserCreditsLog_MaxCredits]中不存在!(in ${ vge_UserCreditsLog_MaxCredits_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvge_UserCreditsLog_MaxCreditsEN.con_GameLevelId:
return (a: clsvge_UserCreditsLog_MaxCreditsEN, b: clsvge_UserCreditsLog_MaxCreditsEN) => {
return b.gameLevelId.localeCompare(a.gameLevelId);
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_Credits:
return (a: clsvge_UserCreditsLog_MaxCreditsEN, b: clsvge_UserCreditsLog_MaxCreditsEN) => {
return b.credits-a.credits;
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_UserId:
return (a: clsvge_UserCreditsLog_MaxCreditsEN, b: clsvge_UserCreditsLog_MaxCreditsEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_IdCurrEduCls:
return (a: clsvge_UserCreditsLog_MaxCreditsEN, b: clsvge_UserCreditsLog_MaxCreditsEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_CourseId:
return (a: clsvge_UserCreditsLog_MaxCreditsEN, b: clsvge_UserCreditsLog_MaxCreditsEN) => {
return b.courseId.localeCompare(a.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vge_UserCreditsLog_MaxCredits]中不存在!(in ${ vge_UserCreditsLog_MaxCredits_ConstructorName}.${ strThisFuncName})`;
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
export  async function vge_UserCreditsLog_MaxCredits_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvge_UserCreditsLog_MaxCreditsEN.con_GameLevelId:
return (obj: clsvge_UserCreditsLog_MaxCreditsEN) => {
return obj.gameLevelId === value;
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_Credits:
return (obj: clsvge_UserCreditsLog_MaxCreditsEN) => {
return obj.credits === value;
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_UserId:
return (obj: clsvge_UserCreditsLog_MaxCreditsEN) => {
return obj.userId === value;
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_IdCurrEduCls:
return (obj: clsvge_UserCreditsLog_MaxCreditsEN) => {
return obj.idCurrEduCls === value;
}
case clsvge_UserCreditsLog_MaxCreditsEN.con_CourseId:
return (obj: clsvge_UserCreditsLog_MaxCreditsEN) => {
return obj.courseId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vge_UserCreditsLog_MaxCredits]中不存在!(in ${ vge_UserCreditsLog_MaxCredits_ConstructorName}.${ strThisFuncName})`;
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
export  async function vge_UserCreditsLog_MaxCredits_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvge_UserCreditsLog_MaxCreditsWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvge_UserCreditsLog_MaxCreditsWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvge_UserCreditsLog_MaxCreditsEN.con_GameLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvge_UserCreditsLog_MaxCreditsEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvge_UserCreditsLog_MaxCreditsEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strGameLevelId = strInValue;
if (IsNullOrEmpty(strGameLevelId) == true)
{
return "";
}
const objvge_UserCreditsLog_MaxCredits = await vge_UserCreditsLog_MaxCredits_GetObjByGameLevelIdCache(strGameLevelId , strIdCurrEduClsClassfy);
if (objvge_UserCreditsLog_MaxCredits == null) return "";
if (objvge_UserCreditsLog_MaxCredits.GetFldValue(strOutFldName) == null) return "";
return objvge_UserCreditsLog_MaxCredits.GetFldValue(strOutFldName).toString();
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
export  async function vge_UserCreditsLog_MaxCredits_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvge_UserCreditsLog_MaxCreditsWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvge_UserCreditsLog_MaxCreditsWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvge_UserCreditsLog_MaxCreditsEN.con_GameLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrvge_UserCreditsLog_MaxCredits = await vge_UserCreditsLog_MaxCredits_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrvge_UserCreditsLog_MaxCredits == null) return [];
let arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCredits;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvge_UserCreditsLog_MaxCreditsSel.length == 0) return [];
return arrvge_UserCreditsLog_MaxCreditsSel.map(x=>x.gameLevelId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vge_UserCreditsLog_MaxCredits_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetFirstObjAsync(strWhereCond: string): Promise<clsvge_UserCreditsLog_MaxCreditsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const objvge_UserCreditsLog_MaxCredits = vge_UserCreditsLog_MaxCredits_GetObjFromJsonObj(returnObj);
return objvge_UserCreditsLog_MaxCredits;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvge_UserCreditsLog_MaxCreditsEN.WhereFormat) == false)
{
strWhereCond = Format(clsvge_UserCreditsLog_MaxCreditsEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvge_UserCreditsLog_MaxCreditsEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvge_UserCreditsLog_MaxCreditsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvge_UserCreditsLog_MaxCreditsEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvge_UserCreditsLog_MaxCreditsExObjLstCache: Array<clsvge_UserCreditsLog_MaxCreditsEN> = CacheHelper.Get(strKey);
const arrvge_UserCreditsLog_MaxCreditsObjLstT = vge_UserCreditsLog_MaxCredits_GetObjLstByJSONObjLst(arrvge_UserCreditsLog_MaxCreditsExObjLstCache);
return arrvge_UserCreditsLog_MaxCreditsObjLstT;
}
try
{
const arrvge_UserCreditsLog_MaxCreditsExObjLst = await vge_UserCreditsLog_MaxCredits_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvge_UserCreditsLog_MaxCreditsExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvge_UserCreditsLog_MaxCreditsExObjLst.length);
console.log(strInfo);
return arrvge_UserCreditsLog_MaxCreditsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvge_UserCreditsLog_MaxCreditsEN.WhereFormat) == false)
{
strWhereCond = Format(clsvge_UserCreditsLog_MaxCreditsEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvge_UserCreditsLog_MaxCreditsEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvge_UserCreditsLog_MaxCreditsEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvge_UserCreditsLog_MaxCreditsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvge_UserCreditsLog_MaxCreditsEN.CacheAddiCondition);
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
const arrvge_UserCreditsLog_MaxCreditsExObjLstCache: Array<clsvge_UserCreditsLog_MaxCreditsEN> = JSON.parse(strTempObjLst);
const arrvge_UserCreditsLog_MaxCreditsObjLstT = vge_UserCreditsLog_MaxCredits_GetObjLstByJSONObjLst(arrvge_UserCreditsLog_MaxCreditsExObjLstCache);
return arrvge_UserCreditsLog_MaxCreditsObjLstT;
}
try
{
const arrvge_UserCreditsLog_MaxCreditsExObjLst = await vge_UserCreditsLog_MaxCredits_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvge_UserCreditsLog_MaxCreditsEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrvge_UserCreditsLog_MaxCreditsExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvge_UserCreditsLog_MaxCreditsExObjLst.length);
console.log(strInfo);
return arrvge_UserCreditsLog_MaxCreditsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvge_UserCreditsLog_MaxCreditsEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvge_UserCreditsLog_MaxCreditsObjLstCache: Array<clsvge_UserCreditsLog_MaxCreditsEN> = JSON.parse(strTempObjLst);
return arrvge_UserCreditsLog_MaxCreditsObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvge_UserCreditsLog_MaxCreditsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vge_UserCreditsLog_MaxCredits_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvge_UserCreditsLog_MaxCreditsEN.WhereFormat) == false)
{
strWhereCond = Format(clsvge_UserCreditsLog_MaxCreditsEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvge_UserCreditsLog_MaxCreditsEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvge_UserCreditsLog_MaxCreditsEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvge_UserCreditsLog_MaxCreditsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvge_UserCreditsLog_MaxCreditsEN.CacheAddiCondition);
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
const arrvge_UserCreditsLog_MaxCreditsExObjLstCache: Array<clsvge_UserCreditsLog_MaxCreditsEN> = JSON.parse(strTempObjLst);
const arrvge_UserCreditsLog_MaxCreditsObjLstT = vge_UserCreditsLog_MaxCredits_GetObjLstByJSONObjLst(arrvge_UserCreditsLog_MaxCreditsExObjLstCache);
return arrvge_UserCreditsLog_MaxCreditsObjLstT;
}
try
{
const arrvge_UserCreditsLog_MaxCreditsExObjLst = await vge_UserCreditsLog_MaxCredits_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvge_UserCreditsLog_MaxCreditsEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrvge_UserCreditsLog_MaxCreditsExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvge_UserCreditsLog_MaxCreditsExObjLst.length);
console.log(strInfo);
return arrvge_UserCreditsLog_MaxCreditsExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvge_UserCreditsLog_MaxCreditsEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvge_UserCreditsLog_MaxCreditsObjLstCache: Array<clsvge_UserCreditsLog_MaxCreditsEN> = JSON.parse(strTempObjLst);
return arrvge_UserCreditsLog_MaxCreditsObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsvge_UserCreditsLog_MaxCreditsEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvge_UserCreditsLog_MaxCreditsWApi.vge_UserCreditsLog_MaxCredits_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvge_UserCreditsLog_MaxCreditsWApi.vge_UserCreditsLog_MaxCredits_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrvge_UserCreditsLog_MaxCreditsObjLstCache;
switch (clsvge_UserCreditsLog_MaxCreditsEN.CacheModeId)
{
case "04"://sessionStorage
arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrvge_UserCreditsLog_MaxCreditsObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvge_UserCreditsLog_MaxCreditsObjLstCache;
switch (clsvge_UserCreditsLog_MaxCreditsEN.CacheModeId)
{
case "04"://sessionStorage
arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvge_UserCreditsLog_MaxCreditsObjLstCache = null;
break;
default:
arrvge_UserCreditsLog_MaxCreditsObjLstCache = null;
break;
}
return arrvge_UserCreditsLog_MaxCreditsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrGameLevelIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vge_UserCreditsLog_MaxCredits_GetSubObjLstCache(objvge_UserCreditsLog_MaxCreditsCond: clsvge_UserCreditsLog_MaxCreditsEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstCache(strIdCurrEduCls);
let arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsObjLstCache;
if (objvge_UserCreditsLog_MaxCreditsCond.sfFldComparisonOp == null || objvge_UserCreditsLog_MaxCreditsCond.sfFldComparisonOp == "") return arrvge_UserCreditsLog_MaxCreditsSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvge_UserCreditsLog_MaxCreditsCond.sfFldComparisonOp);
//console.log("clsvge_UserCreditsLog_MaxCreditsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvge_UserCreditsLog_MaxCreditsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvge_UserCreditsLog_MaxCreditsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvge_UserCreditsLog_MaxCreditsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvge_UserCreditsLog_MaxCreditsCond), vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvge_UserCreditsLog_MaxCreditsEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrGameLevelId:关键字列表
 * @returns 对象列表
 **/
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstByGameLevelIdLstAsync(arrGameLevelId: Array<string>): Promise<Array<clsvge_UserCreditsLog_MaxCreditsEN>>  
{
const strThisFuncName = "GetObjLstByGameLevelIdLstAsync";
const strAction = "GetObjLstByGameLevelIdLst";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vge_UserCreditsLog_MaxCredits_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstByGameLevelIdLstCache(arrGameLevelIdLst: Array<string> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByGameLevelIdLstCache";
try
{
const arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstCache(strIdCurrEduCls);
const arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsObjLstCache.filter(x => arrGameLevelIdLst.indexOf(x.gameLevelId)>-1);
return arrvge_UserCreditsLog_MaxCreditsSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrGameLevelIdLst.join(","), vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvge_UserCreditsLog_MaxCreditsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vge_UserCreditsLog_MaxCredits_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvge_UserCreditsLog_MaxCreditsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vge_UserCreditsLog_MaxCredits_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvge_UserCreditsLog_MaxCreditsEN>();
const arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstCache(strIdCurrEduCls);
if (arrvge_UserCreditsLog_MaxCreditsObjLstCache.length == 0) return arrvge_UserCreditsLog_MaxCreditsObjLstCache;
let arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvge_UserCreditsLog_MaxCreditsCond = new clsvge_UserCreditsLog_MaxCreditsEN();
ObjectAssign(objvge_UserCreditsLog_MaxCreditsCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvge_UserCreditsLog_MaxCreditsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvge_UserCreditsLog_MaxCreditsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvge_UserCreditsLog_MaxCreditsSel.length == 0) return arrvge_UserCreditsLog_MaxCreditsSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.sort(vge_UserCreditsLog_MaxCredits_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.sort(objPagerPara.sortFun);
}
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.slice(intStart, intEnd);     
return arrvge_UserCreditsLog_MaxCreditsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvge_UserCreditsLog_MaxCreditsEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vge_UserCreditsLog_MaxCredits_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvge_UserCreditsLog_MaxCreditsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvge_UserCreditsLog_MaxCreditsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vge_UserCreditsLog_MaxCredits_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_IsExistRecordCache(objvge_UserCreditsLog_MaxCreditsCond: clsvge_UserCreditsLog_MaxCreditsEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstCache(strIdCurrEduCls);
if (arrvge_UserCreditsLog_MaxCreditsObjLstCache == null) return false;
let arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsObjLstCache;
if (objvge_UserCreditsLog_MaxCreditsCond.sfFldComparisonOp == null || objvge_UserCreditsLog_MaxCreditsCond.sfFldComparisonOp == "") return arrvge_UserCreditsLog_MaxCreditsSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvge_UserCreditsLog_MaxCreditsCond.sfFldComparisonOp);
//console.log("clsvge_UserCreditsLog_MaxCreditsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvge_UserCreditsLog_MaxCreditsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvge_UserCreditsLog_MaxCreditsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvge_UserCreditsLog_MaxCreditsSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvge_UserCreditsLog_MaxCreditsCond), vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_IsExistCache(strGameLevelId:string,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstCache(strIdCurrEduCls);
if (arrvge_UserCreditsLog_MaxCreditsObjLstCache == null) return false;
try
{
const arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsObjLstCache.filter(x => x.gameLevelId == strGameLevelId);
if (arrvge_UserCreditsLog_MaxCreditsSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strGameLevelId, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_IsExistAsync(strGameLevelId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
export  async function vge_UserCreditsLog_MaxCredits_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vge_UserCreditsLog_MaxCredits_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
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
 * @param objvge_UserCreditsLog_MaxCreditsCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vge_UserCreditsLog_MaxCredits_GetRecCountByCondCache(objvge_UserCreditsLog_MaxCreditsCond: clsvge_UserCreditsLog_MaxCreditsEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvge_UserCreditsLog_MaxCreditsObjLstCache = await vge_UserCreditsLog_MaxCredits_GetObjLstCache(strIdCurrEduCls);
if (arrvge_UserCreditsLog_MaxCreditsObjLstCache == null) return 0;
let arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsObjLstCache;
if (objvge_UserCreditsLog_MaxCreditsCond.sfFldComparisonOp == null || objvge_UserCreditsLog_MaxCreditsCond.sfFldComparisonOp == "") return arrvge_UserCreditsLog_MaxCreditsSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvge_UserCreditsLog_MaxCreditsCond.sfFldComparisonOp);
//console.log("clsvge_UserCreditsLog_MaxCreditsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvge_UserCreditsLog_MaxCreditsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvge_UserCreditsLog_MaxCreditsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvge_UserCreditsLog_MaxCreditsSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvge_UserCreditsLog_MaxCreditsCond), vge_UserCreditsLog_MaxCredits_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vge_UserCreditsLog_MaxCredits_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function vge_UserCreditsLog_MaxCredits_ReFreshThisCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsvge_UserCreditsLog_MaxCreditsWApi.vge_UserCreditsLog_MaxCredits_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsvge_UserCreditsLog_MaxCreditsWApi.vge_UserCreditsLog_MaxCredits_ReFreshThisCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvge_UserCreditsLog_MaxCreditsEN._CurrTabName, strIdCurrEduCls);
switch (clsvge_UserCreditsLog_MaxCreditsEN.CacheModeId)
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
clsvge_UserCreditsLog_MaxCreditsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function vge_UserCreditsLog_MaxCredits_GetLastRefreshTime():string
{
if (clsvge_UserCreditsLog_MaxCreditsEN._RefreshTimeLst.length == 0) return "";
return clsvge_UserCreditsLog_MaxCreditsEN._RefreshTimeLst[clsvge_UserCreditsLog_MaxCreditsEN._RefreshTimeLst.length - 1];
}

//(IsNeedGC == false)该表下拉框功能不需要生成;

//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vge_UserCreditsLog_MaxCredits_GetJSONStrByObj (pobjvge_UserCreditsLog_MaxCreditsEN: clsvge_UserCreditsLog_MaxCreditsEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvge_UserCreditsLog_MaxCreditsEN);
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
export  function vge_UserCreditsLog_MaxCredits_GetObjLstByJSONStr (strJSON: string): Array<clsvge_UserCreditsLog_MaxCreditsEN>
{
let arrvge_UserCreditsLog_MaxCreditsObjLst = new Array<clsvge_UserCreditsLog_MaxCreditsEN>();
if (strJSON === "")
{
return arrvge_UserCreditsLog_MaxCreditsObjLst;
}
try
{
arrvge_UserCreditsLog_MaxCreditsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvge_UserCreditsLog_MaxCreditsObjLst;
}
return arrvge_UserCreditsLog_MaxCreditsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvge_UserCreditsLog_MaxCreditsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vge_UserCreditsLog_MaxCredits_GetObjLstByJSONObjLst (arrvge_UserCreditsLog_MaxCreditsObjLstS: Array<clsvge_UserCreditsLog_MaxCreditsEN>): Array<clsvge_UserCreditsLog_MaxCreditsEN>
{
const arrvge_UserCreditsLog_MaxCreditsObjLst = new Array<clsvge_UserCreditsLog_MaxCreditsEN>();
for (const objInFor of arrvge_UserCreditsLog_MaxCreditsObjLstS) {
const obj1 = vge_UserCreditsLog_MaxCredits_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvge_UserCreditsLog_MaxCreditsObjLst.push(obj1);
}
return arrvge_UserCreditsLog_MaxCreditsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vge_UserCreditsLog_MaxCredits_GetObjByJSONStr (strJSON: string): clsvge_UserCreditsLog_MaxCreditsEN
{
let pobjvge_UserCreditsLog_MaxCreditsEN = new clsvge_UserCreditsLog_MaxCreditsEN();
if (strJSON === "")
{
return pobjvge_UserCreditsLog_MaxCreditsEN;
}
try
{
pobjvge_UserCreditsLog_MaxCreditsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvge_UserCreditsLog_MaxCreditsEN;
}
return pobjvge_UserCreditsLog_MaxCreditsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vge_UserCreditsLog_MaxCredits_GetCombineCondition(objvge_UserCreditsLog_MaxCreditsCond: clsvge_UserCreditsLog_MaxCreditsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvge_UserCreditsLog_MaxCreditsCond.dicFldComparisonOp, clsvge_UserCreditsLog_MaxCreditsEN.con_GameLevelId) == true)
{
const strComparisonOpGameLevelId:string = objvge_UserCreditsLog_MaxCreditsCond.dicFldComparisonOp[clsvge_UserCreditsLog_MaxCreditsEN.con_GameLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvge_UserCreditsLog_MaxCreditsEN.con_GameLevelId, objvge_UserCreditsLog_MaxCreditsCond.gameLevelId, strComparisonOpGameLevelId);
}
if (Object.prototype.hasOwnProperty.call(objvge_UserCreditsLog_MaxCreditsCond.dicFldComparisonOp, clsvge_UserCreditsLog_MaxCreditsEN.con_Credits) == true)
{
const strComparisonOpCredits:string = objvge_UserCreditsLog_MaxCreditsCond.dicFldComparisonOp[clsvge_UserCreditsLog_MaxCreditsEN.con_Credits];
strWhereCond += Format(" And {0} {2} {1}", clsvge_UserCreditsLog_MaxCreditsEN.con_Credits, objvge_UserCreditsLog_MaxCreditsCond.credits, strComparisonOpCredits);
}
if (Object.prototype.hasOwnProperty.call(objvge_UserCreditsLog_MaxCreditsCond.dicFldComparisonOp, clsvge_UserCreditsLog_MaxCreditsEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objvge_UserCreditsLog_MaxCreditsCond.dicFldComparisonOp[clsvge_UserCreditsLog_MaxCreditsEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvge_UserCreditsLog_MaxCreditsEN.con_UserId, objvge_UserCreditsLog_MaxCreditsCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objvge_UserCreditsLog_MaxCreditsCond.dicFldComparisonOp, clsvge_UserCreditsLog_MaxCreditsEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvge_UserCreditsLog_MaxCreditsCond.dicFldComparisonOp[clsvge_UserCreditsLog_MaxCreditsEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvge_UserCreditsLog_MaxCreditsEN.con_IdCurrEduCls, objvge_UserCreditsLog_MaxCreditsCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvge_UserCreditsLog_MaxCreditsCond.dicFldComparisonOp, clsvge_UserCreditsLog_MaxCreditsEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvge_UserCreditsLog_MaxCreditsCond.dicFldComparisonOp[clsvge_UserCreditsLog_MaxCreditsEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvge_UserCreditsLog_MaxCreditsEN.con_CourseId, objvge_UserCreditsLog_MaxCreditsCond.courseId, strComparisonOpCourseId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvge_UserCreditsLog_MaxCreditsENS:源对象
 * @param objvge_UserCreditsLog_MaxCreditsENT:目标对象
*/
export  function vge_UserCreditsLog_MaxCredits_CopyObjTo(objvge_UserCreditsLog_MaxCreditsENS: clsvge_UserCreditsLog_MaxCreditsEN , objvge_UserCreditsLog_MaxCreditsENT: clsvge_UserCreditsLog_MaxCreditsEN ): void 
{
objvge_UserCreditsLog_MaxCreditsENT.gameLevelId = objvge_UserCreditsLog_MaxCreditsENS.gameLevelId; //游戏关卡Id
objvge_UserCreditsLog_MaxCreditsENT.credits = objvge_UserCreditsLog_MaxCreditsENS.credits; //积分
objvge_UserCreditsLog_MaxCreditsENT.userId = objvge_UserCreditsLog_MaxCreditsENS.userId; //用户ID
objvge_UserCreditsLog_MaxCreditsENT.idCurrEduCls = objvge_UserCreditsLog_MaxCreditsENS.idCurrEduCls; //教学班流水号
objvge_UserCreditsLog_MaxCreditsENT.courseId = objvge_UserCreditsLog_MaxCreditsENS.courseId; //课程Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvge_UserCreditsLog_MaxCreditsENS:源对象
 * @param objvge_UserCreditsLog_MaxCreditsENT:目标对象
*/
export  function vge_UserCreditsLog_MaxCredits_GetObjFromJsonObj(objvge_UserCreditsLog_MaxCreditsENS: clsvge_UserCreditsLog_MaxCreditsEN): clsvge_UserCreditsLog_MaxCreditsEN 
{
 const objvge_UserCreditsLog_MaxCreditsENT: clsvge_UserCreditsLog_MaxCreditsEN = new clsvge_UserCreditsLog_MaxCreditsEN();
ObjectAssign(objvge_UserCreditsLog_MaxCreditsENT, objvge_UserCreditsLog_MaxCreditsENS);
 return objvge_UserCreditsLog_MaxCreditsENT;
}