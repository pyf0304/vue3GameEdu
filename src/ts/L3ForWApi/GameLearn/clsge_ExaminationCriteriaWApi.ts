
 /**
 * 类名:clsge_ExaminationCriteriaWApi
 * 表名:ge_ExaminationCriteria(01120898)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:35
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
 * 题目检查标准表(ge_ExaminationCriteria)
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
import { clsge_ExaminationCriteriaEN } from "@/ts/L0Entity/GameLearn/clsge_ExaminationCriteriaEN";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_ExaminationCriteria_Controller = "ge_ExaminationCriteriaApi";
 export const ge_ExaminationCriteria_ConstructorName = "ge_ExaminationCriteria";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCriteriaId:关键字
 * @returns 对象
 **/
export  async function ge_ExaminationCriteria_GetObjByCriteriaIdAsync(strCriteriaId: string): Promise<clsge_ExaminationCriteriaEN|null>  
{
const strThisFuncName = "GetObjByCriteriaIdAsync";

if (IsNullOrEmpty(strCriteriaId) == true)
{
  const strMsg = Format("参数:[strCriteriaId]不能为空!(In clsge_ExaminationCriteriaWApi.GetObjByCriteriaIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCriteriaId.length != 10)
{
const strMsg = Format("缓存分类变量:[strCriteriaId]的长度:[{0}]不正确!(clsge_ExaminationCriteriaWApi.GetObjByCriteriaIdAsync)", strCriteriaId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByCriteriaId";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCriteriaId,
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
const objge_ExaminationCriteria = ge_ExaminationCriteria_GetObjFromJsonObj(returnObj);
return objge_ExaminationCriteria;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param strCriteriaId:所给的关键字
 * @returns 对象
*/
export  async function ge_ExaminationCriteria_GetObjByCriteriaIdlocalStorage(strCriteriaId: string) {
const strThisFuncName = "GetObjByCriteriaIdlocalStorage";

if (IsNullOrEmpty(strCriteriaId) == true)
{
  const strMsg = Format("参数:[strCriteriaId]不能为空!(In clsge_ExaminationCriteriaWApi.GetObjByCriteriaIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strCriteriaId.length != 10)
{
const strMsg = Format("缓存分类变量:[strCriteriaId]的长度:[{0}]不正确!(clsge_ExaminationCriteriaWApi.GetObjByCriteriaIdlocalStorage)", strCriteriaId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_ExaminationCriteriaEN._CurrTabName, strCriteriaId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_ExaminationCriteriaCache: clsge_ExaminationCriteriaEN = JSON.parse(strTempObj);
return objge_ExaminationCriteriaCache;
}
try
{
const objge_ExaminationCriteria = await ge_ExaminationCriteria_GetObjByCriteriaIdAsync(strCriteriaId);
if (objge_ExaminationCriteria != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_ExaminationCriteria));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_ExaminationCriteria;
}
return objge_ExaminationCriteria;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strCriteriaId, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strCriteriaId:所给的关键字
 * @returns 对象
*/
export  async function ge_ExaminationCriteria_GetObjByCriteriaIdCache(strCriteriaId:string,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByCriteriaIdCache";

if (IsNullOrEmpty(strCriteriaId) == true)
{
  const strMsg = Format("参数:[strCriteriaId]不能为空!(In clsge_ExaminationCriteriaWApi.GetObjByCriteriaIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCriteriaId.length != 10)
{
const strMsg = Format("缓存分类变量:[strCriteriaId]的长度:[{0}]不正确!(clsge_ExaminationCriteriaWApi.GetObjByCriteriaIdCache)", strCriteriaId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstCache(strCourseId);
try
{
const arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaObjLstCache.filter(x => 
 x.criteriaId == strCriteriaId );
let objge_ExaminationCriteria: clsge_ExaminationCriteriaEN;
if (arrge_ExaminationCriteriaSel.length > 0)
{
objge_ExaminationCriteria = arrge_ExaminationCriteriaSel[0];
return objge_ExaminationCriteria;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_ExaminationCriteriaConst = await ge_ExaminationCriteria_GetObjByCriteriaIdAsync(strCriteriaId);
if (objge_ExaminationCriteriaConst != null)
{
ge_ExaminationCriteria_ReFreshThisCache(strCourseId);
return objge_ExaminationCriteriaConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strCriteriaId, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_ExaminationCriteria:所给的对象
 * @returns 对象
*/
export  async function ge_ExaminationCriteria_UpdateObjInLstCache(objge_ExaminationCriteria: clsge_ExaminationCriteriaEN,strCourseId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstCache(strCourseId);
const obj = arrge_ExaminationCriteriaObjLstCache.find(x => x.questionId == objge_ExaminationCriteria.questionId && x.controlTypeId == objge_ExaminationCriteria.controlTypeId && x.eventTypeId == objge_ExaminationCriteria.eventTypeId);
if (obj != null)
{
objge_ExaminationCriteria.criteriaId = obj.criteriaId;
ObjectAssign( obj, objge_ExaminationCriteria);
}
else
{
arrge_ExaminationCriteriaObjLstCache.push(objge_ExaminationCriteria);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  function ge_ExaminationCriteria_SortFunDefa(a:clsge_ExaminationCriteriaEN , b:clsge_ExaminationCriteriaEN): number 
{
return a.criteriaId.localeCompare(b.criteriaId);
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
export  function ge_ExaminationCriteria_SortFunDefa2Fld(a:clsge_ExaminationCriteriaEN , b:clsge_ExaminationCriteriaEN): number 
{
if (a.questionId == b.questionId) return a.courseId.localeCompare(b.courseId);
else return a.questionId - b.questionId;
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
export  function ge_ExaminationCriteria_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_ExaminationCriteriaEN.con_CriteriaId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
return a.criteriaId.localeCompare(b.criteriaId);
}
case clsge_ExaminationCriteriaEN.con_QuestionId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
return a.questionId-b.questionId;
}
case clsge_ExaminationCriteriaEN.con_CourseId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_ExaminationCriteriaEN.con_Describe:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (a.describe == null) return -1;
if (b.describe == null) return 1;
return a.describe.localeCompare(b.describe);
}
case clsge_ExaminationCriteriaEN.con_ControlTypeId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
return a.controlTypeId.localeCompare(b.controlTypeId);
}
case clsge_ExaminationCriteriaEN.con_EventTypeId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (a.eventTypeId == null) return -1;
if (b.eventTypeId == null) return 1;
return a.eventTypeId.localeCompare(b.eventTypeId);
}
case clsge_ExaminationCriteriaEN.con_ExaminationTypeId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (a.examinationTypeId == null) return -1;
if (b.examinationTypeId == null) return 1;
return a.examinationTypeId.localeCompare(b.examinationTypeId);
}
case clsge_ExaminationCriteriaEN.con_ControlId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (a.controlId == null) return -1;
if (b.controlId == null) return 1;
return a.controlId.localeCompare(b.controlId);
}
case clsge_ExaminationCriteriaEN.con_ControlClass:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (a.controlClass == null) return -1;
if (b.controlClass == null) return 1;
return a.controlClass.localeCompare(b.controlClass);
}
case clsge_ExaminationCriteriaEN.con_ControlValue:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (a.controlValue == null) return -1;
if (b.controlValue == null) return 1;
return a.controlValue.localeCompare(b.controlValue);
}
case clsge_ExaminationCriteriaEN.con_ControlHtml:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (a.controlHtml == null) return -1;
if (b.controlHtml == null) return 1;
return a.controlHtml.localeCompare(b.controlHtml);
}
case clsge_ExaminationCriteriaEN.con_UpdDate:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_ExaminationCriteriaEN.con_UpdUser:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_ExaminationCriteriaEN.con_Memo:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsge_ExaminationCriteriaEN.con_OrderNum:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
return a.orderNum-b.orderNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ExaminationCriteria]中不存在!(in ${ ge_ExaminationCriteria_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_ExaminationCriteriaEN.con_CriteriaId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
return b.criteriaId.localeCompare(a.criteriaId);
}
case clsge_ExaminationCriteriaEN.con_QuestionId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
return b.questionId-a.questionId;
}
case clsge_ExaminationCriteriaEN.con_CourseId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_ExaminationCriteriaEN.con_Describe:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (b.describe == null) return -1;
if (a.describe == null) return 1;
return b.describe.localeCompare(a.describe);
}
case clsge_ExaminationCriteriaEN.con_ControlTypeId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
return b.controlTypeId.localeCompare(a.controlTypeId);
}
case clsge_ExaminationCriteriaEN.con_EventTypeId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (b.eventTypeId == null) return -1;
if (a.eventTypeId == null) return 1;
return b.eventTypeId.localeCompare(a.eventTypeId);
}
case clsge_ExaminationCriteriaEN.con_ExaminationTypeId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (b.examinationTypeId == null) return -1;
if (a.examinationTypeId == null) return 1;
return b.examinationTypeId.localeCompare(a.examinationTypeId);
}
case clsge_ExaminationCriteriaEN.con_ControlId:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (b.controlId == null) return -1;
if (a.controlId == null) return 1;
return b.controlId.localeCompare(a.controlId);
}
case clsge_ExaminationCriteriaEN.con_ControlClass:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (b.controlClass == null) return -1;
if (a.controlClass == null) return 1;
return b.controlClass.localeCompare(a.controlClass);
}
case clsge_ExaminationCriteriaEN.con_ControlValue:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (b.controlValue == null) return -1;
if (a.controlValue == null) return 1;
return b.controlValue.localeCompare(a.controlValue);
}
case clsge_ExaminationCriteriaEN.con_ControlHtml:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (b.controlHtml == null) return -1;
if (a.controlHtml == null) return 1;
return b.controlHtml.localeCompare(a.controlHtml);
}
case clsge_ExaminationCriteriaEN.con_UpdDate:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_ExaminationCriteriaEN.con_UpdUser:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_ExaminationCriteriaEN.con_Memo:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsge_ExaminationCriteriaEN.con_OrderNum:
return (a: clsge_ExaminationCriteriaEN, b: clsge_ExaminationCriteriaEN) => {
return b.orderNum-a.orderNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ExaminationCriteria]中不存在!(in ${ ge_ExaminationCriteria_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_ExaminationCriteria_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_ExaminationCriteriaEN.con_CriteriaId:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.criteriaId === value;
}
case clsge_ExaminationCriteriaEN.con_QuestionId:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.questionId === value;
}
case clsge_ExaminationCriteriaEN.con_CourseId:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.courseId === value;
}
case clsge_ExaminationCriteriaEN.con_Describe:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.describe === value;
}
case clsge_ExaminationCriteriaEN.con_ControlTypeId:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.controlTypeId === value;
}
case clsge_ExaminationCriteriaEN.con_EventTypeId:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.eventTypeId === value;
}
case clsge_ExaminationCriteriaEN.con_ExaminationTypeId:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.examinationTypeId === value;
}
case clsge_ExaminationCriteriaEN.con_ControlId:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.controlId === value;
}
case clsge_ExaminationCriteriaEN.con_ControlClass:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.controlClass === value;
}
case clsge_ExaminationCriteriaEN.con_ControlValue:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.controlValue === value;
}
case clsge_ExaminationCriteriaEN.con_ControlHtml:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.controlHtml === value;
}
case clsge_ExaminationCriteriaEN.con_UpdDate:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.updDate === value;
}
case clsge_ExaminationCriteriaEN.con_UpdUser:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.updUser === value;
}
case clsge_ExaminationCriteriaEN.con_Memo:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.memo === value;
}
case clsge_ExaminationCriteriaEN.con_OrderNum:
return (obj: clsge_ExaminationCriteriaEN) => {
return obj.orderNum === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ExaminationCriteria]中不存在!(in ${ ge_ExaminationCriteria_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_ExaminationCriteria_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_ExaminationCriteriaWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_ExaminationCriteriaWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsge_ExaminationCriteriaEN.con_CriteriaId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_ExaminationCriteriaEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_ExaminationCriteriaEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strCriteriaId = strInValue;
if (IsNullOrEmpty(strCriteriaId) == true)
{
return "";
}
const objge_ExaminationCriteria = await ge_ExaminationCriteria_GetObjByCriteriaIdCache(strCriteriaId , strCourseIdClassfy);
if (objge_ExaminationCriteria == null) return "";
if (objge_ExaminationCriteria.GetFldValue(strOutFldName) == null) return "";
return objge_ExaminationCriteria.GetFldValue(strOutFldName).toString();
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
export  async function ge_ExaminationCriteria_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_ExaminationCriteriaWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_ExaminationCriteriaWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsge_ExaminationCriteriaEN.con_CriteriaId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_ExaminationCriteria = await ge_ExaminationCriteria_GetObjLstCache(strCourseIdClassfy);
if (arrge_ExaminationCriteria == null) return [];
let arrge_ExaminationCriteriaSel = arrge_ExaminationCriteria;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_ExaminationCriteriaSel.length == 0) return [];
return arrge_ExaminationCriteriaSel.map(x=>x.criteriaId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_ExaminationCriteria_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_GetFirstObjAsync(strWhereCond: string): Promise<clsge_ExaminationCriteriaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const objge_ExaminationCriteria = ge_ExaminationCriteria_GetObjFromJsonObj(returnObj);
return objge_ExaminationCriteria;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_ExaminationCriteriaEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_ExaminationCriteriaEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsge_ExaminationCriteriaEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_ExaminationCriteriaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ExaminationCriteriaEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_ExaminationCriteriaExObjLstCache: Array<clsge_ExaminationCriteriaEN> = CacheHelper.Get(strKey);
const arrge_ExaminationCriteriaObjLstT = ge_ExaminationCriteria_GetObjLstByJSONObjLst(arrge_ExaminationCriteriaExObjLstCache);
return arrge_ExaminationCriteriaObjLstT;
}
try
{
const arrge_ExaminationCriteriaExObjLst = await ge_ExaminationCriteria_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_ExaminationCriteriaExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ExaminationCriteriaExObjLst.length);
console.log(strInfo);
return arrge_ExaminationCriteriaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ExaminationCriteria_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_ExaminationCriteriaEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_ExaminationCriteriaEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_ExaminationCriteriaEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_ExaminationCriteriaEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_ExaminationCriteriaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ExaminationCriteriaEN.CacheAddiCondition);
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
const arrge_ExaminationCriteriaExObjLstCache: Array<clsge_ExaminationCriteriaEN> = JSON.parse(strTempObjLst);
const arrge_ExaminationCriteriaObjLstT = ge_ExaminationCriteria_GetObjLstByJSONObjLst(arrge_ExaminationCriteriaExObjLstCache);
return arrge_ExaminationCriteriaObjLstT;
}
try
{
const arrge_ExaminationCriteriaExObjLst = await ge_ExaminationCriteria_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_ExaminationCriteriaExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ExaminationCriteriaExObjLst.length);
console.log(strInfo);
return arrge_ExaminationCriteriaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ExaminationCriteria_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_ExaminationCriteriaEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_ExaminationCriteriaObjLstCache: Array<clsge_ExaminationCriteriaEN> = JSON.parse(strTempObjLst);
return arrge_ExaminationCriteriaObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_ExaminationCriteria_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_ExaminationCriteriaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ExaminationCriteria_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_ExaminationCriteriaEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_ExaminationCriteriaEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_ExaminationCriteriaEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_ExaminationCriteriaEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_ExaminationCriteriaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ExaminationCriteriaEN.CacheAddiCondition);
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
const arrge_ExaminationCriteriaExObjLstCache: Array<clsge_ExaminationCriteriaEN> = JSON.parse(strTempObjLst);
const arrge_ExaminationCriteriaObjLstT = ge_ExaminationCriteria_GetObjLstByJSONObjLst(arrge_ExaminationCriteriaExObjLstCache);
return arrge_ExaminationCriteriaObjLstT;
}
try
{
const arrge_ExaminationCriteriaExObjLst = await ge_ExaminationCriteria_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_ExaminationCriteriaExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ExaminationCriteriaExObjLst.length);
console.log(strInfo);
return arrge_ExaminationCriteriaExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ExaminationCriteria_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_ExaminationCriteriaEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_ExaminationCriteriaObjLstCache: Array<clsge_ExaminationCriteriaEN> = JSON.parse(strTempObjLst);
return arrge_ExaminationCriteriaObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ExaminationCriteria_GetObjLstCache(strCourseId: string): Promise<Array<clsge_ExaminationCriteriaEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_ExaminationCriteriaWApi.ge_ExaminationCriteria_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_ExaminationCriteriaWApi.ge_ExaminationCriteria_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrge_ExaminationCriteriaObjLstCache;
switch (clsge_ExaminationCriteriaEN.CacheModeId)
{
case "04"://sessionStorage
arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstClientCache(strCourseId);
break;
default:
arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstClientCache(strCourseId);
break;
}
return arrge_ExaminationCriteriaObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ExaminationCriteria_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_ExaminationCriteriaObjLstCache;
switch (clsge_ExaminationCriteriaEN.CacheModeId)
{
case "04"://sessionStorage
arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrge_ExaminationCriteriaObjLstCache = null;
break;
default:
arrge_ExaminationCriteriaObjLstCache = null;
break;
}
return arrge_ExaminationCriteriaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCriteriaIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_ExaminationCriteria_GetSubObjLstCache(objge_ExaminationCriteriaCond: clsge_ExaminationCriteriaEN ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstCache(strCourseId);
let arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaObjLstCache;
if (objge_ExaminationCriteriaCond.sfFldComparisonOp == null || objge_ExaminationCriteriaCond.sfFldComparisonOp == "") return arrge_ExaminationCriteriaSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ExaminationCriteriaCond.sfFldComparisonOp);
//console.log("clsge_ExaminationCriteriaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ExaminationCriteriaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ExaminationCriteriaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_ExaminationCriteriaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_ExaminationCriteriaCond), ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_ExaminationCriteriaEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCriteriaId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_ExaminationCriteria_GetObjLstByCriteriaIdLstAsync(arrCriteriaId: Array<string>): Promise<Array<clsge_ExaminationCriteriaEN>>  
{
const strThisFuncName = "GetObjLstByCriteriaIdLstAsync";
const strAction = "GetObjLstByCriteriaIdLst";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCriteriaId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ExaminationCriteria_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param arrstrCriteriaIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_ExaminationCriteria_GetObjLstByCriteriaIdLstCache(arrCriteriaIdLst: Array<string> ,strCourseId: string) {
const strThisFuncName = "GetObjLstByCriteriaIdLstCache";
try
{
const arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstCache(strCourseId);
const arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaObjLstCache.filter(x => arrCriteriaIdLst.indexOf(x.criteriaId)>-1);
return arrge_ExaminationCriteriaSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrCriteriaIdLst.join(","), ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_ExaminationCriteriaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ExaminationCriteria_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_ExaminationCriteriaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ExaminationCriteria_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_ExaminationCriteriaEN>();
const arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstCache(strCourseId);
if (arrge_ExaminationCriteriaObjLstCache.length == 0) return arrge_ExaminationCriteriaObjLstCache;
let arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_ExaminationCriteriaCond = new clsge_ExaminationCriteriaEN();
ObjectAssign(objge_ExaminationCriteriaCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_ExaminationCriteriaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ExaminationCriteriaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_ExaminationCriteriaSel.length == 0) return arrge_ExaminationCriteriaSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.sort(ge_ExaminationCriteria_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.sort(objPagerPara.sortFun);
}
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.slice(intStart, intEnd);     
return arrge_ExaminationCriteriaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_ExaminationCriteriaEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_ExaminationCriteria_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_ExaminationCriteriaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_ExaminationCriteriaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ExaminationCriteria_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param strCriteriaId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_ExaminationCriteria_DelRecordAsync(strCriteriaId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strCriteriaId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param arrCriteriaId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_ExaminationCriteria_Delge_ExaminationCriteriasAsync(arrCriteriaId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_ExaminationCriteriasAsync";
const strAction = "Delge_ExaminationCriterias";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCriteriaId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_Delge_ExaminationCriteriasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_ExaminationCriteriasByCondAsync";
const strAction = "Delge_ExaminationCriteriasByCond";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationCriteriaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ExaminationCriteria_AddNewRecordAsync(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_ExaminationCriteriaEN);
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationCriteriaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationCriteriaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ExaminationCriteria_AddNewRecordWithMaxIdAsync(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationCriteriaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationCriteriaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ExaminationCriteria_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationCriteriaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ExaminationCriteria_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_ExaminationCriteriaEN);
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationCriteriaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ExaminationCriteria_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_ExaminationCriteriaEN);
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_AddNewObjSave(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_ExaminationCriteria_CheckPropertyNew(objge_ExaminationCriteriaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_ExaminationCriteria_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_ExaminationCriteria_CheckUniCond4Add(objge_ExaminationCriteriaEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_ExaminationCriteria_AddNewRecordWithMaxIdAsync(objge_ExaminationCriteriaEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
ge_ExaminationCriteria_ReFreshCache(objge_ExaminationCriteriaEN.courseId);
}
else
{
const strInfo = `添加[题目检查标准表(ge_ExaminationCriteria)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_ExaminationCriteria_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_ExaminationCriteria_CheckUniCond4Add(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN): Promise<boolean>{
const strUniquenessCondition = ge_ExaminationCriteria_GetUniCondStr(objge_ExaminationCriteriaEN);
const bolIsExistCondition = await ge_ExaminationCriteria_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_ExaminationCriteria_CheckUniCond4Update(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN): Promise<boolean>{
const strUniquenessCondition = ge_ExaminationCriteria_GetUniCondStr4Update(objge_ExaminationCriteriaEN);
const bolIsExistCondition = await ge_ExaminationCriteria_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_ExaminationCriteria_UpdateObjSave(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_ExaminationCriteriaEN.sfUpdFldSetStr = objge_ExaminationCriteriaEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_ExaminationCriteriaEN.criteriaId == "" || objge_ExaminationCriteriaEN.criteriaId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_ExaminationCriteria_CheckProperty4Update(objge_ExaminationCriteriaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_ExaminationCriteria_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_ExaminationCriteria_CheckUniCond4Update(objge_ExaminationCriteriaEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_ExaminationCriteria_UpdateRecordAsync(objge_ExaminationCriteriaEN);
if (returnBool == true)
{
ge_ExaminationCriteria_ReFreshCache(objge_ExaminationCriteriaEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_ExaminationCriteria_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objge_ExaminationCriteriaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ExaminationCriteria_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_ExaminationCriteriaEN);
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationCriteriaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ExaminationCriteria_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objge_ExaminationCriteriaEN);
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationCriteriaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_ExaminationCriteria_AddNewRecordWithReturnKeyAsync(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationCriteriaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationCriteriaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_ExaminationCriteria_UpdateRecordAsync(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_ExaminationCriteriaEN.sfUpdFldSetStr === undefined || objge_ExaminationCriteriaEN.sfUpdFldSetStr === null || objge_ExaminationCriteriaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ExaminationCriteriaEN.criteriaId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationCriteriaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationCriteriaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_ExaminationCriteria_EditRecordExAsync(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_ExaminationCriteriaEN.sfUpdFldSetStr === undefined || objge_ExaminationCriteriaEN.sfUpdFldSetStr === null || objge_ExaminationCriteriaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ExaminationCriteriaEN.criteriaId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationCriteriaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationCriteriaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_ExaminationCriteria_UpdateWithConditionAsync(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_ExaminationCriteriaEN.sfUpdFldSetStr === undefined || objge_ExaminationCriteriaEN.sfUpdFldSetStr === null || objge_ExaminationCriteriaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ExaminationCriteriaEN.criteriaId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);
objge_ExaminationCriteriaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationCriteriaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objstrCriteriaIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_ExaminationCriteria_IsExistRecordCache(objge_ExaminationCriteriaCond: clsge_ExaminationCriteriaEN,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstCache(strCourseId);
if (arrge_ExaminationCriteriaObjLstCache == null) return false;
let arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaObjLstCache;
if (objge_ExaminationCriteriaCond.sfFldComparisonOp == null || objge_ExaminationCriteriaCond.sfFldComparisonOp == "") return arrge_ExaminationCriteriaSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ExaminationCriteriaCond.sfFldComparisonOp);
//console.log("clsge_ExaminationCriteriaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ExaminationCriteriaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ExaminationCriteriaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_ExaminationCriteriaSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_ExaminationCriteriaCond), ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param strCriteriaId:所给的关键字
 * @returns 对象
*/
export  async function ge_ExaminationCriteria_IsExistCache(strCriteriaId:string,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstCache(strCourseId);
if (arrge_ExaminationCriteriaObjLstCache == null) return false;
try
{
const arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaObjLstCache.filter(x => x.criteriaId == strCriteriaId);
if (arrge_ExaminationCriteriaSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strCriteriaId, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strCriteriaId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_ExaminationCriteria_IsExistAsync(strCriteriaId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCriteriaId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationCriteriaCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_ExaminationCriteria_GetRecCountByCondCache(objge_ExaminationCriteriaCond: clsge_ExaminationCriteriaEN ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_ExaminationCriteriaObjLstCache = await ge_ExaminationCriteria_GetObjLstCache(strCourseId);
if (arrge_ExaminationCriteriaObjLstCache == null) return 0;
let arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaObjLstCache;
if (objge_ExaminationCriteriaCond.sfFldComparisonOp == null || objge_ExaminationCriteriaCond.sfFldComparisonOp == "") return arrge_ExaminationCriteriaSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ExaminationCriteriaCond.sfFldComparisonOp);
//console.log("clsge_ExaminationCriteriaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ExaminationCriteriaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ExaminationCriteriaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_ExaminationCriteriaSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_ExaminationCriteriaCond), ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationCriteria_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_ExaminationCriteria_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationCriteria_ConstructorName, strThisFuncName);
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
export  function ge_ExaminationCriteria_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_ExaminationCriteria_ReFreshCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_ExaminationCriteriaWApi.clsge_ExaminationCriteriaWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_ExaminationCriteriaWApi.clsge_ExaminationCriteriaWApi.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsge_ExaminationCriteriaEN._CurrTabName, strCourseId);
switch (clsge_ExaminationCriteriaEN.CacheModeId)
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
clsge_ExaminationCriteriaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_ExaminationCriteria_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_ExaminationCriteriaWApi.ge_ExaminationCriteria_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_ExaminationCriteriaWApi.ge_ExaminationCriteria_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsge_ExaminationCriteriaEN._CurrTabName, strCourseId);
switch (clsge_ExaminationCriteriaEN.CacheModeId)
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
clsge_ExaminationCriteriaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_ExaminationCriteria_GetLastRefreshTime():string
{
if (clsge_ExaminationCriteriaEN._RefreshTimeLst.length == 0) return "";
return clsge_ExaminationCriteriaEN._RefreshTimeLst[clsge_ExaminationCriteriaEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_ExaminationCriteria_CheckPropertyNew(pobjge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (null === pobjge_ExaminationCriteriaEN.questionId 
 || pobjge_ExaminationCriteriaEN.questionId != null && pobjge_ExaminationCriteriaEN.questionId.toString()  ===  ""
 || pobjge_ExaminationCriteriaEN.questionId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[题目Id]不能为空(In 题目检查标准表)!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.courseId) === true 
 || pobjge_ExaminationCriteriaEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 题目检查标准表)!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[控件Id]不能为空(In 题目检查标准表)!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.criteriaId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.criteriaId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[标准Id(criteriaId)]的长度不能超过10(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.criteriaId}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.courseId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.courseId}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.describe) == false && GetStrLen(pobjge_ExaminationCriteriaEN.describe) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[标准描述(describe)]的长度不能超过1000(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.describe}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlTypeId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.controlTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[控件Id(controlTypeId)]的长度不能超过4(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.controlTypeId}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.eventTypeId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.eventTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[事件Id(eventTypeId)]的长度不能超过4(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.eventTypeId}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.examinationTypeId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.examinationTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[检查类型Id(examinationTypeId)]的长度不能超过4(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.examinationTypeId}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.controlId) > 50)
{
 throw new Error(`(errid:Watl000413)字段[控件Id(controlId)]的长度不能超过50(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.controlId}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlClass) == false && GetStrLen(pobjge_ExaminationCriteriaEN.controlClass) > 100)
{
 throw new Error(`(errid:Watl000413)字段[控件样式(controlClass)]的长度不能超过100(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.controlClass}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlValue) == false && GetStrLen(pobjge_ExaminationCriteriaEN.controlValue) > 100)
{
 throw new Error(`(errid:Watl000413)字段[控件值(controlValue)]的长度不能超过100(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.controlValue}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlHtml) == false && GetStrLen(pobjge_ExaminationCriteriaEN.controlHtml) > 100)
{
 throw new Error(`(errid:Watl000413)字段[控件html(controlHtml)]的长度不能超过100(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.controlHtml}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.updDate) == false && GetStrLen(pobjge_ExaminationCriteriaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.updDate}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.updUser) == false && GetStrLen(pobjge_ExaminationCriteriaEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.updUser}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.memo) == false && GetStrLen(pobjge_ExaminationCriteriaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.memo}(clsge_ExaminationCriteriaBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.criteriaId) == false && undefined !== pobjge_ExaminationCriteriaEN.criteriaId && tzDataType.isString(pobjge_ExaminationCriteriaEN.criteriaId) === false)
{
 throw new Error(`(errid:Watl000414)字段[标准Id(criteriaId)]的值:[${pobjge_ExaminationCriteriaEN.criteriaId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (null != pobjge_ExaminationCriteriaEN.questionId && undefined !== pobjge_ExaminationCriteriaEN.questionId && tzDataType.isNumber(pobjge_ExaminationCriteriaEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjge_ExaminationCriteriaEN.questionId}], 非法,应该为数值型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.courseId) == false && undefined !== pobjge_ExaminationCriteriaEN.courseId && tzDataType.isString(pobjge_ExaminationCriteriaEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_ExaminationCriteriaEN.courseId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.describe) == false && undefined !== pobjge_ExaminationCriteriaEN.describe && tzDataType.isString(pobjge_ExaminationCriteriaEN.describe) === false)
{
 throw new Error(`(errid:Watl000414)字段[标准描述(describe)]的值:[${pobjge_ExaminationCriteriaEN.describe}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlTypeId) == false && undefined !== pobjge_ExaminationCriteriaEN.controlTypeId && tzDataType.isString(pobjge_ExaminationCriteriaEN.controlTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件Id(controlTypeId)]的值:[${pobjge_ExaminationCriteriaEN.controlTypeId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.eventTypeId) == false && undefined !== pobjge_ExaminationCriteriaEN.eventTypeId && tzDataType.isString(pobjge_ExaminationCriteriaEN.eventTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[事件Id(eventTypeId)]的值:[${pobjge_ExaminationCriteriaEN.eventTypeId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.examinationTypeId) == false && undefined !== pobjge_ExaminationCriteriaEN.examinationTypeId && tzDataType.isString(pobjge_ExaminationCriteriaEN.examinationTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[检查类型Id(examinationTypeId)]的值:[${pobjge_ExaminationCriteriaEN.examinationTypeId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlId) == false && undefined !== pobjge_ExaminationCriteriaEN.controlId && tzDataType.isString(pobjge_ExaminationCriteriaEN.controlId) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件Id(controlId)]的值:[${pobjge_ExaminationCriteriaEN.controlId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlClass) == false && undefined !== pobjge_ExaminationCriteriaEN.controlClass && tzDataType.isString(pobjge_ExaminationCriteriaEN.controlClass) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件样式(controlClass)]的值:[${pobjge_ExaminationCriteriaEN.controlClass}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlValue) == false && undefined !== pobjge_ExaminationCriteriaEN.controlValue && tzDataType.isString(pobjge_ExaminationCriteriaEN.controlValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件值(controlValue)]的值:[${pobjge_ExaminationCriteriaEN.controlValue}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlHtml) == false && undefined !== pobjge_ExaminationCriteriaEN.controlHtml && tzDataType.isString(pobjge_ExaminationCriteriaEN.controlHtml) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件html(controlHtml)]的值:[${pobjge_ExaminationCriteriaEN.controlHtml}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.updDate) == false && undefined !== pobjge_ExaminationCriteriaEN.updDate && tzDataType.isString(pobjge_ExaminationCriteriaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_ExaminationCriteriaEN.updDate}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.updUser) == false && undefined !== pobjge_ExaminationCriteriaEN.updUser && tzDataType.isString(pobjge_ExaminationCriteriaEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_ExaminationCriteriaEN.updUser}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.memo) == false && undefined !== pobjge_ExaminationCriteriaEN.memo && tzDataType.isString(pobjge_ExaminationCriteriaEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_ExaminationCriteriaEN.memo}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
if (null != pobjge_ExaminationCriteriaEN.orderNum && undefined !== pobjge_ExaminationCriteriaEN.orderNum && tzDataType.isNumber(pobjge_ExaminationCriteriaEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjge_ExaminationCriteriaEN.orderNum}], 非法,应该为数值型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_ExaminationCriteria_CheckProperty4Update(pobjge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.criteriaId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.criteriaId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[标准Id(criteriaId)]的长度不能超过10(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.criteriaId}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.courseId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.courseId}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.describe) == false && GetStrLen(pobjge_ExaminationCriteriaEN.describe) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[标准描述(describe)]的长度不能超过1000(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.describe}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlTypeId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.controlTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[控件Id(controlTypeId)]的长度不能超过4(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.controlTypeId}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.eventTypeId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.eventTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[事件Id(eventTypeId)]的长度不能超过4(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.eventTypeId}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.examinationTypeId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.examinationTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[检查类型Id(examinationTypeId)]的长度不能超过4(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.examinationTypeId}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlId) == false && GetStrLen(pobjge_ExaminationCriteriaEN.controlId) > 50)
{
 throw new Error(`(errid:Watl000416)字段[控件Id(controlId)]的长度不能超过50(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.controlId}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlClass) == false && GetStrLen(pobjge_ExaminationCriteriaEN.controlClass) > 100)
{
 throw new Error(`(errid:Watl000416)字段[控件样式(controlClass)]的长度不能超过100(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.controlClass}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlValue) == false && GetStrLen(pobjge_ExaminationCriteriaEN.controlValue) > 100)
{
 throw new Error(`(errid:Watl000416)字段[控件值(controlValue)]的长度不能超过100(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.controlValue}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlHtml) == false && GetStrLen(pobjge_ExaminationCriteriaEN.controlHtml) > 100)
{
 throw new Error(`(errid:Watl000416)字段[控件html(controlHtml)]的长度不能超过100(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.controlHtml}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.updDate) == false && GetStrLen(pobjge_ExaminationCriteriaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.updDate}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.updUser) == false && GetStrLen(pobjge_ExaminationCriteriaEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.updUser}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.memo) == false && GetStrLen(pobjge_ExaminationCriteriaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 题目检查标准表(ge_ExaminationCriteria))!值:${pobjge_ExaminationCriteriaEN.memo}(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.criteriaId) == false && undefined !== pobjge_ExaminationCriteriaEN.criteriaId && tzDataType.isString(pobjge_ExaminationCriteriaEN.criteriaId) === false)
{
 throw new Error(`(errid:Watl000417)字段[标准Id(criteriaId)]的值:[${pobjge_ExaminationCriteriaEN.criteriaId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (null != pobjge_ExaminationCriteriaEN.questionId && undefined !== pobjge_ExaminationCriteriaEN.questionId && tzDataType.isNumber(pobjge_ExaminationCriteriaEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjge_ExaminationCriteriaEN.questionId}], 非法,应该为数值型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.courseId) == false && undefined !== pobjge_ExaminationCriteriaEN.courseId && tzDataType.isString(pobjge_ExaminationCriteriaEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_ExaminationCriteriaEN.courseId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.describe) == false && undefined !== pobjge_ExaminationCriteriaEN.describe && tzDataType.isString(pobjge_ExaminationCriteriaEN.describe) === false)
{
 throw new Error(`(errid:Watl000417)字段[标准描述(describe)]的值:[${pobjge_ExaminationCriteriaEN.describe}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlTypeId) == false && undefined !== pobjge_ExaminationCriteriaEN.controlTypeId && tzDataType.isString(pobjge_ExaminationCriteriaEN.controlTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件Id(controlTypeId)]的值:[${pobjge_ExaminationCriteriaEN.controlTypeId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.eventTypeId) == false && undefined !== pobjge_ExaminationCriteriaEN.eventTypeId && tzDataType.isString(pobjge_ExaminationCriteriaEN.eventTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[事件Id(eventTypeId)]的值:[${pobjge_ExaminationCriteriaEN.eventTypeId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.examinationTypeId) == false && undefined !== pobjge_ExaminationCriteriaEN.examinationTypeId && tzDataType.isString(pobjge_ExaminationCriteriaEN.examinationTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[检查类型Id(examinationTypeId)]的值:[${pobjge_ExaminationCriteriaEN.examinationTypeId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlId) == false && undefined !== pobjge_ExaminationCriteriaEN.controlId && tzDataType.isString(pobjge_ExaminationCriteriaEN.controlId) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件Id(controlId)]的值:[${pobjge_ExaminationCriteriaEN.controlId}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlClass) == false && undefined !== pobjge_ExaminationCriteriaEN.controlClass && tzDataType.isString(pobjge_ExaminationCriteriaEN.controlClass) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件样式(controlClass)]的值:[${pobjge_ExaminationCriteriaEN.controlClass}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlValue) == false && undefined !== pobjge_ExaminationCriteriaEN.controlValue && tzDataType.isString(pobjge_ExaminationCriteriaEN.controlValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件值(controlValue)]的值:[${pobjge_ExaminationCriteriaEN.controlValue}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.controlHtml) == false && undefined !== pobjge_ExaminationCriteriaEN.controlHtml && tzDataType.isString(pobjge_ExaminationCriteriaEN.controlHtml) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件html(controlHtml)]的值:[${pobjge_ExaminationCriteriaEN.controlHtml}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.updDate) == false && undefined !== pobjge_ExaminationCriteriaEN.updDate && tzDataType.isString(pobjge_ExaminationCriteriaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_ExaminationCriteriaEN.updDate}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.updUser) == false && undefined !== pobjge_ExaminationCriteriaEN.updUser && tzDataType.isString(pobjge_ExaminationCriteriaEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_ExaminationCriteriaEN.updUser}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationCriteriaEN.memo) == false && undefined !== pobjge_ExaminationCriteriaEN.memo && tzDataType.isString(pobjge_ExaminationCriteriaEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_ExaminationCriteriaEN.memo}], 非法,应该为字符型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
}
if (null != pobjge_ExaminationCriteriaEN.orderNum && undefined !== pobjge_ExaminationCriteriaEN.orderNum && tzDataType.isNumber(pobjge_ExaminationCriteriaEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjge_ExaminationCriteriaEN.orderNum}], 非法,应该为数值型(In 题目检查标准表(ge_ExaminationCriteria))!(clsge_ExaminationCriteriaBL:CheckProperty4Update)`);
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
export  function ge_ExaminationCriteria_GetJSONStrByObj (pobjge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN): string
{
pobjge_ExaminationCriteriaEN.sfUpdFldSetStr = pobjge_ExaminationCriteriaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_ExaminationCriteriaEN);
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
export  function ge_ExaminationCriteria_GetObjLstByJSONStr (strJSON: string): Array<clsge_ExaminationCriteriaEN>
{
let arrge_ExaminationCriteriaObjLst = new Array<clsge_ExaminationCriteriaEN>();
if (strJSON === "")
{
return arrge_ExaminationCriteriaObjLst;
}
try
{
arrge_ExaminationCriteriaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_ExaminationCriteriaObjLst;
}
return arrge_ExaminationCriteriaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_ExaminationCriteriaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_ExaminationCriteria_GetObjLstByJSONObjLst (arrge_ExaminationCriteriaObjLstS: Array<clsge_ExaminationCriteriaEN>): Array<clsge_ExaminationCriteriaEN>
{
const arrge_ExaminationCriteriaObjLst = new Array<clsge_ExaminationCriteriaEN>();
for (const objInFor of arrge_ExaminationCriteriaObjLstS) {
const obj1 = ge_ExaminationCriteria_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_ExaminationCriteriaObjLst.push(obj1);
}
return arrge_ExaminationCriteriaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_ExaminationCriteria_GetObjByJSONStr (strJSON: string): clsge_ExaminationCriteriaEN
{
let pobjge_ExaminationCriteriaEN = new clsge_ExaminationCriteriaEN();
if (strJSON === "")
{
return pobjge_ExaminationCriteriaEN;
}
try
{
pobjge_ExaminationCriteriaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_ExaminationCriteriaEN;
}
return pobjge_ExaminationCriteriaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_ExaminationCriteria_GetCombineCondition(objge_ExaminationCriteriaCond: clsge_ExaminationCriteriaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_CriteriaId) == true)
{
const strComparisonOpCriteriaId:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_CriteriaId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_CriteriaId, objge_ExaminationCriteriaCond.criteriaId, strComparisonOpCriteriaId);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsge_ExaminationCriteriaEN.con_QuestionId, objge_ExaminationCriteriaCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_CourseId, objge_ExaminationCriteriaCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_Describe) == true)
{
const strComparisonOpDescribe:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_Describe];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_Describe, objge_ExaminationCriteriaCond.describe, strComparisonOpDescribe);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_ControlTypeId) == true)
{
const strComparisonOpControlTypeId:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_ControlTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_ControlTypeId, objge_ExaminationCriteriaCond.controlTypeId, strComparisonOpControlTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_EventTypeId) == true)
{
const strComparisonOpEventTypeId:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_EventTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_EventTypeId, objge_ExaminationCriteriaCond.eventTypeId, strComparisonOpEventTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_ExaminationTypeId) == true)
{
const strComparisonOpExaminationTypeId:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_ExaminationTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_ExaminationTypeId, objge_ExaminationCriteriaCond.examinationTypeId, strComparisonOpExaminationTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_ControlId) == true)
{
const strComparisonOpControlId:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_ControlId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_ControlId, objge_ExaminationCriteriaCond.controlId, strComparisonOpControlId);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_ControlClass) == true)
{
const strComparisonOpControlClass:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_ControlClass];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_ControlClass, objge_ExaminationCriteriaCond.controlClass, strComparisonOpControlClass);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_ControlValue) == true)
{
const strComparisonOpControlValue:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_ControlValue];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_ControlValue, objge_ExaminationCriteriaCond.controlValue, strComparisonOpControlValue);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_ControlHtml) == true)
{
const strComparisonOpControlHtml:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_ControlHtml];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_ControlHtml, objge_ExaminationCriteriaCond.controlHtml, strComparisonOpControlHtml);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_UpdDate, objge_ExaminationCriteriaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_UpdUser, objge_ExaminationCriteriaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationCriteriaEN.con_Memo, objge_ExaminationCriteriaCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationCriteriaCond.dicFldComparisonOp, clsge_ExaminationCriteriaEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objge_ExaminationCriteriaCond.dicFldComparisonOp[clsge_ExaminationCriteriaEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_ExaminationCriteriaEN.con_OrderNum, objge_ExaminationCriteriaCond.orderNum, strComparisonOpOrderNum);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_ExaminationCriteria(题目检查标准表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @param strControlTypeId: 控件Id(要求唯一的字段)
 * @param strEventTypeId: 事件Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_ExaminationCriteria_GetUniCondStr(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and QuestionId = '{0}'", objge_ExaminationCriteriaEN.questionId);
 strWhereCond +=  Format(" and ControlTypeId = '{0}'", objge_ExaminationCriteriaEN.controlTypeId);
 strWhereCond +=  Format(" and EventTypeId = '{0}'", objge_ExaminationCriteriaEN.eventTypeId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_ExaminationCriteria(题目检查标准表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @param strControlTypeId: 控件Id(要求唯一的字段)
 * @param strEventTypeId: 事件Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_ExaminationCriteria_GetUniCondStr4Update(objge_ExaminationCriteriaEN: clsge_ExaminationCriteriaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and CriteriaId <> '{0}'", objge_ExaminationCriteriaEN.criteriaId);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objge_ExaminationCriteriaEN.questionId);
 strWhereCond +=  Format(" and ControlTypeId = '{0}'", objge_ExaminationCriteriaEN.controlTypeId);
 strWhereCond +=  Format(" and EventTypeId = '{0}'", objge_ExaminationCriteriaEN.eventTypeId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_ExaminationCriteriaENS:源对象
 * @param objge_ExaminationCriteriaENT:目标对象
*/
export  function ge_ExaminationCriteria_CopyObjTo(objge_ExaminationCriteriaENS: clsge_ExaminationCriteriaEN , objge_ExaminationCriteriaENT: clsge_ExaminationCriteriaEN ): void 
{
objge_ExaminationCriteriaENT.criteriaId = objge_ExaminationCriteriaENS.criteriaId; //标准Id
objge_ExaminationCriteriaENT.questionId = objge_ExaminationCriteriaENS.questionId; //题目Id
objge_ExaminationCriteriaENT.courseId = objge_ExaminationCriteriaENS.courseId; //课程Id
objge_ExaminationCriteriaENT.describe = objge_ExaminationCriteriaENS.describe; //标准描述
objge_ExaminationCriteriaENT.controlTypeId = objge_ExaminationCriteriaENS.controlTypeId; //控件Id
objge_ExaminationCriteriaENT.eventTypeId = objge_ExaminationCriteriaENS.eventTypeId; //事件Id
objge_ExaminationCriteriaENT.examinationTypeId = objge_ExaminationCriteriaENS.examinationTypeId; //检查类型Id
objge_ExaminationCriteriaENT.controlId = objge_ExaminationCriteriaENS.controlId; //控件Id
objge_ExaminationCriteriaENT.controlClass = objge_ExaminationCriteriaENS.controlClass; //控件样式
objge_ExaminationCriteriaENT.controlValue = objge_ExaminationCriteriaENS.controlValue; //控件值
objge_ExaminationCriteriaENT.controlHtml = objge_ExaminationCriteriaENS.controlHtml; //控件html
objge_ExaminationCriteriaENT.updDate = objge_ExaminationCriteriaENS.updDate; //修改日期
objge_ExaminationCriteriaENT.updUser = objge_ExaminationCriteriaENS.updUser; //修改人
objge_ExaminationCriteriaENT.memo = objge_ExaminationCriteriaENS.memo; //备注
objge_ExaminationCriteriaENT.orderNum = objge_ExaminationCriteriaENS.orderNum; //序号
objge_ExaminationCriteriaENT.sfUpdFldSetStr = objge_ExaminationCriteriaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_ExaminationCriteriaENS:源对象
 * @param objge_ExaminationCriteriaENT:目标对象
*/
export  function ge_ExaminationCriteria_GetObjFromJsonObj(objge_ExaminationCriteriaENS: clsge_ExaminationCriteriaEN): clsge_ExaminationCriteriaEN 
{
 const objge_ExaminationCriteriaENT: clsge_ExaminationCriteriaEN = new clsge_ExaminationCriteriaEN();
ObjectAssign(objge_ExaminationCriteriaENT, objge_ExaminationCriteriaENS);
 return objge_ExaminationCriteriaENT;
}