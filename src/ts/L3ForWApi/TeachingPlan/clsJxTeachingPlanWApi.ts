
 /**
 * 类名:clsJxTeachingPlanWApi
 * 表名:JxTeachingPlan(01120968)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:32
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学计划(JxTeachingPlan)
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
import { clsJxTeachingPlanEN } from "@/ts/L0Entity/TeachingPlan/clsJxTeachingPlanEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const jxTeachingPlan_Controller = "JxTeachingPlanApi";
 export const jxTeachingPlan_ConstructorName = "jxTeachingPlan";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdTeachingPlan:关键字
 * @returns 对象
 **/
export  async function JxTeachingPlan_GetObjByIdTeachingPlanAsync(strIdTeachingPlan: string): Promise<clsJxTeachingPlanEN|null>  
{
const strThisFuncName = "GetObjByIdTeachingPlanAsync";

if (IsNullOrEmpty(strIdTeachingPlan) == true)
{
  const strMsg = Format("参数:[strIdTeachingPlan]不能为空!(In clsJxTeachingPlanWApi.GetObjByIdTeachingPlanAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeachingPlan.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeachingPlan]的长度:[{0}]不正确!(clsJxTeachingPlanWApi.GetObjByIdTeachingPlanAsync)", strIdTeachingPlan.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdTeachingPlan";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeachingPlan,
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
const objJxTeachingPlan = JxTeachingPlan_GetObjFromJsonObj(returnObj);
return objJxTeachingPlan;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param strIdTeachingPlan:所给的关键字
 * @returns 对象
*/
export  async function JxTeachingPlan_GetObjByIdTeachingPlanlocalStorage(strIdTeachingPlan: string) {
const strThisFuncName = "GetObjByIdTeachingPlanlocalStorage";

if (IsNullOrEmpty(strIdTeachingPlan) == true)
{
  const strMsg = Format("参数:[strIdTeachingPlan]不能为空!(In clsJxTeachingPlanWApi.GetObjByIdTeachingPlanlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeachingPlan.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeachingPlan]的长度:[{0}]不正确!(clsJxTeachingPlanWApi.GetObjByIdTeachingPlanlocalStorage)", strIdTeachingPlan.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsJxTeachingPlanEN._CurrTabName, strIdTeachingPlan);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objJxTeachingPlanCache: clsJxTeachingPlanEN = JSON.parse(strTempObj);
return objJxTeachingPlanCache;
}
try
{
const objJxTeachingPlan = await JxTeachingPlan_GetObjByIdTeachingPlanAsync(strIdTeachingPlan);
if (objJxTeachingPlan != null)
{
localStorage.setItem(strKey, JSON.stringify(objJxTeachingPlan));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objJxTeachingPlan;
}
return objJxTeachingPlan;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdTeachingPlan, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strIdTeachingPlan:所给的关键字
 * @returns 对象
*/
export  async function JxTeachingPlan_GetObjByIdTeachingPlanCache(strIdTeachingPlan: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdTeachingPlanCache";

if (IsNullOrEmpty(strIdTeachingPlan) == true)
{
  const strMsg = Format("参数:[strIdTeachingPlan]不能为空!(In clsJxTeachingPlanWApi.GetObjByIdTeachingPlanCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeachingPlan.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeachingPlan]的长度:[{0}]不正确!(clsJxTeachingPlanWApi.GetObjByIdTeachingPlanCache)", strIdTeachingPlan.length);
console.error(strMsg);
throw (strMsg);
}
const arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstCache();
try
{
const arrJxTeachingPlanSel = arrJxTeachingPlanObjLstCache.filter(x => 
 x.idTeachingPlan == strIdTeachingPlan );
let objJxTeachingPlan: clsJxTeachingPlanEN;
if (arrJxTeachingPlanSel.length > 0)
{
objJxTeachingPlan = arrJxTeachingPlanSel[0];
return objJxTeachingPlan;
}
else
{
if (bolTryAsyncOnce == true)
{
const objJxTeachingPlanConst = await JxTeachingPlan_GetObjByIdTeachingPlanAsync(strIdTeachingPlan);
if (objJxTeachingPlanConst != null)
{
JxTeachingPlan_ReFreshThisCache();
return objJxTeachingPlanConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdTeachingPlan, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objJxTeachingPlan:所给的对象
 * @returns 对象
*/
export  async function JxTeachingPlan_UpdateObjInLstCache(objJxTeachingPlan: clsJxTeachingPlanEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstCache();
const obj = arrJxTeachingPlanObjLstCache.find(x => x.teachingPlanDesc == objJxTeachingPlan.teachingPlanDesc && x.teachingPlanId == objJxTeachingPlan.teachingPlanId);
if (obj != null)
{
objJxTeachingPlan.idTeachingPlan = obj.idTeachingPlan;
ObjectAssign( obj, objJxTeachingPlan);
}
else
{
arrJxTeachingPlanObjLstCache.push(objJxTeachingPlan);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  function JxTeachingPlan_SortFunDefa(a:clsJxTeachingPlanEN , b:clsJxTeachingPlanEN): number 
{
return a.idTeachingPlan.localeCompare(b.idTeachingPlan);
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
export  function JxTeachingPlan_SortFunDefa2Fld(a:clsJxTeachingPlanEN , b:clsJxTeachingPlanEN): number 
{
if (a.teachingPlanId == b.teachingPlanId) return a.teachingPlanDesc.localeCompare(b.teachingPlanDesc);
else return a.teachingPlanId.localeCompare(b.teachingPlanId);
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
export  function JxTeachingPlan_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsJxTeachingPlanEN.con_IdTeachingPlan:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return a.idTeachingPlan.localeCompare(b.idTeachingPlan);
}
case clsJxTeachingPlanEN.con_TeachingPlanId:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return a.teachingPlanId.localeCompare(b.teachingPlanId);
}
case clsJxTeachingPlanEN.con_TeachingPlanDesc:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return a.teachingPlanDesc.localeCompare(b.teachingPlanDesc);
}
case clsJxTeachingPlanEN.con_IdGrade:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return a.idGrade.localeCompare(b.idGrade);
}
case clsJxTeachingPlanEN.con_SchoolTerm:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clsJxTeachingPlanEN.con_CourseId:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsJxTeachingPlanEN.con_IsClgCheck:
return (a: clsJxTeachingPlanEN) => {
if (a.isClgCheck == true) return 1;
else return -1
}
case clsJxTeachingPlanEN.con_ClgNote:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (a.clgNote == null) return -1;
if (b.clgNote == null) return 1;
return a.clgNote.localeCompare(b.clgNote);
}
case clsJxTeachingPlanEN.con_ClgCheckerId:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (a.clgCheckerId == null) return -1;
if (b.clgCheckerId == null) return 1;
return a.clgCheckerId.localeCompare(b.clgCheckerId);
}
case clsJxTeachingPlanEN.con_ClgCheckDate:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (a.clgCheckDate == null) return -1;
if (b.clgCheckDate == null) return 1;
return a.clgCheckDate.localeCompare(b.clgCheckDate);
}
case clsJxTeachingPlanEN.con_IsSchCheck:
return (a: clsJxTeachingPlanEN) => {
if (a.isSchCheck == true) return 1;
else return -1
}
case clsJxTeachingPlanEN.con_SchNote:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (a.schNote == null) return -1;
if (b.schNote == null) return 1;
return a.schNote.localeCompare(b.schNote);
}
case clsJxTeachingPlanEN.con_SchCheckerId:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (a.schCheckerId == null) return -1;
if (b.schCheckerId == null) return 1;
return a.schCheckerId.localeCompare(b.schCheckerId);
}
case clsJxTeachingPlanEN.con_SchCheckDate:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (a.schCheckDate == null) return -1;
if (b.schCheckDate == null) return 1;
return a.schCheckDate.localeCompare(b.schCheckDate);
}
case clsJxTeachingPlanEN.con_IdSubmitStatus:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return a.idSubmitStatus.localeCompare(b.idSubmitStatus);
}
case clsJxTeachingPlanEN.con_Memo:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[JxTeachingPlan]中不存在!(in ${ jxTeachingPlan_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsJxTeachingPlanEN.con_IdTeachingPlan:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return b.idTeachingPlan.localeCompare(a.idTeachingPlan);
}
case clsJxTeachingPlanEN.con_TeachingPlanId:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return b.teachingPlanId.localeCompare(a.teachingPlanId);
}
case clsJxTeachingPlanEN.con_TeachingPlanDesc:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return b.teachingPlanDesc.localeCompare(a.teachingPlanDesc);
}
case clsJxTeachingPlanEN.con_IdGrade:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return b.idGrade.localeCompare(a.idGrade);
}
case clsJxTeachingPlanEN.con_SchoolTerm:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clsJxTeachingPlanEN.con_CourseId:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsJxTeachingPlanEN.con_IsClgCheck:
return (b: clsJxTeachingPlanEN) => {
if (b.isClgCheck == true) return 1;
else return -1
}
case clsJxTeachingPlanEN.con_ClgNote:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (b.clgNote == null) return -1;
if (a.clgNote == null) return 1;
return b.clgNote.localeCompare(a.clgNote);
}
case clsJxTeachingPlanEN.con_ClgCheckerId:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (b.clgCheckerId == null) return -1;
if (a.clgCheckerId == null) return 1;
return b.clgCheckerId.localeCompare(a.clgCheckerId);
}
case clsJxTeachingPlanEN.con_ClgCheckDate:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (b.clgCheckDate == null) return -1;
if (a.clgCheckDate == null) return 1;
return b.clgCheckDate.localeCompare(a.clgCheckDate);
}
case clsJxTeachingPlanEN.con_IsSchCheck:
return (b: clsJxTeachingPlanEN) => {
if (b.isSchCheck == true) return 1;
else return -1
}
case clsJxTeachingPlanEN.con_SchNote:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (b.schNote == null) return -1;
if (a.schNote == null) return 1;
return b.schNote.localeCompare(a.schNote);
}
case clsJxTeachingPlanEN.con_SchCheckerId:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (b.schCheckerId == null) return -1;
if (a.schCheckerId == null) return 1;
return b.schCheckerId.localeCompare(a.schCheckerId);
}
case clsJxTeachingPlanEN.con_SchCheckDate:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (b.schCheckDate == null) return -1;
if (a.schCheckDate == null) return 1;
return b.schCheckDate.localeCompare(a.schCheckDate);
}
case clsJxTeachingPlanEN.con_IdSubmitStatus:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
return b.idSubmitStatus.localeCompare(a.idSubmitStatus);
}
case clsJxTeachingPlanEN.con_Memo:
return (a: clsJxTeachingPlanEN, b: clsJxTeachingPlanEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[JxTeachingPlan]中不存在!(in ${ jxTeachingPlan_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdTeachingPlan:所给的关键字
 * @returns 对象
*/
export  async function JxTeachingPlan_GetNameByIdTeachingPlanCache(strIdTeachingPlan: string) {

if (IsNullOrEmpty(strIdTeachingPlan) == true)
{
  const strMsg = Format("参数:[strIdTeachingPlan]不能为空!(In clsJxTeachingPlanWApi.GetNameByIdTeachingPlanCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeachingPlan.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeachingPlan]的长度:[{0}]不正确!(clsJxTeachingPlanWApi.GetNameByIdTeachingPlanCache)", strIdTeachingPlan.length);
console.error(strMsg);
throw (strMsg);
}
const arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstCache();
if (arrJxTeachingPlanObjLstCache == null) return "";
try
{
const arrJxTeachingPlanSel = arrJxTeachingPlanObjLstCache.filter(x => 
 x.idTeachingPlan == strIdTeachingPlan );
let objJxTeachingPlan: clsJxTeachingPlanEN;
if (arrJxTeachingPlanSel.length > 0)
{
objJxTeachingPlan = arrJxTeachingPlanSel[0];
return objJxTeachingPlan.teachingPlanDesc;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdTeachingPlan);
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
export  async function JxTeachingPlan_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsJxTeachingPlanEN.con_IdTeachingPlan:
return (obj: clsJxTeachingPlanEN) => {
return obj.idTeachingPlan === value;
}
case clsJxTeachingPlanEN.con_TeachingPlanId:
return (obj: clsJxTeachingPlanEN) => {
return obj.teachingPlanId === value;
}
case clsJxTeachingPlanEN.con_TeachingPlanDesc:
return (obj: clsJxTeachingPlanEN) => {
return obj.teachingPlanDesc === value;
}
case clsJxTeachingPlanEN.con_IdGrade:
return (obj: clsJxTeachingPlanEN) => {
return obj.idGrade === value;
}
case clsJxTeachingPlanEN.con_SchoolTerm:
return (obj: clsJxTeachingPlanEN) => {
return obj.schoolTerm === value;
}
case clsJxTeachingPlanEN.con_CourseId:
return (obj: clsJxTeachingPlanEN) => {
return obj.courseId === value;
}
case clsJxTeachingPlanEN.con_IsClgCheck:
return (obj: clsJxTeachingPlanEN) => {
return obj.isClgCheck === value;
}
case clsJxTeachingPlanEN.con_ClgNote:
return (obj: clsJxTeachingPlanEN) => {
return obj.clgNote === value;
}
case clsJxTeachingPlanEN.con_ClgCheckerId:
return (obj: clsJxTeachingPlanEN) => {
return obj.clgCheckerId === value;
}
case clsJxTeachingPlanEN.con_ClgCheckDate:
return (obj: clsJxTeachingPlanEN) => {
return obj.clgCheckDate === value;
}
case clsJxTeachingPlanEN.con_IsSchCheck:
return (obj: clsJxTeachingPlanEN) => {
return obj.isSchCheck === value;
}
case clsJxTeachingPlanEN.con_SchNote:
return (obj: clsJxTeachingPlanEN) => {
return obj.schNote === value;
}
case clsJxTeachingPlanEN.con_SchCheckerId:
return (obj: clsJxTeachingPlanEN) => {
return obj.schCheckerId === value;
}
case clsJxTeachingPlanEN.con_SchCheckDate:
return (obj: clsJxTeachingPlanEN) => {
return obj.schCheckDate === value;
}
case clsJxTeachingPlanEN.con_IdSubmitStatus:
return (obj: clsJxTeachingPlanEN) => {
return obj.idSubmitStatus === value;
}
case clsJxTeachingPlanEN.con_Memo:
return (obj: clsJxTeachingPlanEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[JxTeachingPlan]中不存在!(in ${ jxTeachingPlan_ConstructorName}.${ strThisFuncName})`;
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
export  async function JxTeachingPlan_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsJxTeachingPlanEN.con_IdTeachingPlan)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsJxTeachingPlanEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsJxTeachingPlanEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdTeachingPlan = strInValue;
if (IsNullOrEmpty(strIdTeachingPlan) == true)
{
return "";
}
const objJxTeachingPlan = await JxTeachingPlan_GetObjByIdTeachingPlanCache(strIdTeachingPlan );
if (objJxTeachingPlan == null) return "";
if (objJxTeachingPlan.GetFldValue(strOutFldName) == null) return "";
return objJxTeachingPlan.GetFldValue(strOutFldName).toString();
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
export  async function JxTeachingPlan_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsJxTeachingPlanEN.con_IdTeachingPlan)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrJxTeachingPlan = await JxTeachingPlan_GetObjLstCache();
if (arrJxTeachingPlan == null) return [];
let arrJxTeachingPlanSel = arrJxTeachingPlan;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrJxTeachingPlanSel.length == 0) return [];
return arrJxTeachingPlanSel.map(x=>x.idTeachingPlan);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function JxTeachingPlan_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_GetFirstObjAsync(strWhereCond: string): Promise<clsJxTeachingPlanEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const objJxTeachingPlan = JxTeachingPlan_GetObjFromJsonObj(returnObj);
return objJxTeachingPlan;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsJxTeachingPlanEN._CurrTabName;
if (IsNullOrEmpty(clsJxTeachingPlanEN.WhereFormat) == false)
{
strWhereCond = clsJxTeachingPlanEN.WhereFormat;
}
if (IsNullOrEmpty(clsJxTeachingPlanEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsJxTeachingPlanEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrJxTeachingPlanExObjLstCache: Array<clsJxTeachingPlanEN> = CacheHelper.Get(strKey);
const arrJxTeachingPlanObjLstT = JxTeachingPlan_GetObjLstByJSONObjLst(arrJxTeachingPlanExObjLstCache);
return arrJxTeachingPlanObjLstT;
}
try
{
const arrJxTeachingPlanExObjLst = await JxTeachingPlan_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrJxTeachingPlanExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrJxTeachingPlanExObjLst.length);
console.log(strInfo);
return arrJxTeachingPlanExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function JxTeachingPlan_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsJxTeachingPlanEN._CurrTabName;
if (IsNullOrEmpty(clsJxTeachingPlanEN.WhereFormat) == false)
{
strWhereCond = clsJxTeachingPlanEN.WhereFormat;
}
if (IsNullOrEmpty(clsJxTeachingPlanEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsJxTeachingPlanEN.CacheAddiCondition);
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
const arrJxTeachingPlanExObjLstCache: Array<clsJxTeachingPlanEN> = JSON.parse(strTempObjLst);
const arrJxTeachingPlanObjLstT = JxTeachingPlan_GetObjLstByJSONObjLst(arrJxTeachingPlanExObjLstCache);
return arrJxTeachingPlanObjLstT;
}
try
{
const arrJxTeachingPlanExObjLst = await JxTeachingPlan_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrJxTeachingPlanExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrJxTeachingPlanExObjLst.length);
console.log(strInfo);
return arrJxTeachingPlanExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function JxTeachingPlan_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsJxTeachingPlanEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrJxTeachingPlanObjLstCache: Array<clsJxTeachingPlanEN> = JSON.parse(strTempObjLst);
return arrJxTeachingPlanObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function JxTeachingPlan_GetObjLstAsync(strWhereCond: string): Promise<Array<clsJxTeachingPlanEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = JxTeachingPlan_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsJxTeachingPlanEN._CurrTabName;
if (IsNullOrEmpty(clsJxTeachingPlanEN.WhereFormat) == false)
{
strWhereCond = clsJxTeachingPlanEN.WhereFormat;
}
if (IsNullOrEmpty(clsJxTeachingPlanEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsJxTeachingPlanEN.CacheAddiCondition);
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
const arrJxTeachingPlanExObjLstCache: Array<clsJxTeachingPlanEN> = JSON.parse(strTempObjLst);
const arrJxTeachingPlanObjLstT = JxTeachingPlan_GetObjLstByJSONObjLst(arrJxTeachingPlanExObjLstCache);
return arrJxTeachingPlanObjLstT;
}
try
{
const arrJxTeachingPlanExObjLst = await JxTeachingPlan_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrJxTeachingPlanExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrJxTeachingPlanExObjLst.length);
console.log(strInfo);
return arrJxTeachingPlanExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function JxTeachingPlan_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsJxTeachingPlanEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrJxTeachingPlanObjLstCache: Array<clsJxTeachingPlanEN> = JSON.parse(strTempObjLst);
return arrJxTeachingPlanObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function JxTeachingPlan_GetObjLstCache(): Promise<Array<clsJxTeachingPlanEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrJxTeachingPlanObjLstCache;
switch (clsJxTeachingPlanEN.CacheModeId)
{
case "04"://sessionStorage
arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstClientCache();
break;
default:
arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstClientCache();
break;
}
return arrJxTeachingPlanObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function JxTeachingPlan_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrJxTeachingPlanObjLstCache;
switch (clsJxTeachingPlanEN.CacheModeId)
{
case "04"://sessionStorage
arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrJxTeachingPlanObjLstCache = null;
break;
default:
arrJxTeachingPlanObjLstCache = null;
break;
}
return arrJxTeachingPlanObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdTeachingPlanCond:条件对象
 * @returns 对象列表子集
*/
export  async function JxTeachingPlan_GetSubObjLstCache(objJxTeachingPlanCond: clsJxTeachingPlanEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstCache();
let arrJxTeachingPlanSel = arrJxTeachingPlanObjLstCache;
if (objJxTeachingPlanCond.sfFldComparisonOp == null || objJxTeachingPlanCond.sfFldComparisonOp == "") return arrJxTeachingPlanSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objJxTeachingPlanCond.sfFldComparisonOp);
//console.log("clsJxTeachingPlanWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objJxTeachingPlanCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objJxTeachingPlanCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrJxTeachingPlanSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objJxTeachingPlanCond), jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsJxTeachingPlanEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdTeachingPlan:关键字列表
 * @returns 对象列表
 **/
export  async function JxTeachingPlan_GetObjLstByIdTeachingPlanLstAsync(arrIdTeachingPlan: Array<string>): Promise<Array<clsJxTeachingPlanEN>>  
{
const strThisFuncName = "GetObjLstByIdTeachingPlanLstAsync";
const strAction = "GetObjLstByIdTeachingPlanLst";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdTeachingPlan, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = JxTeachingPlan_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param arrstrIdTeachingPlanLst:关键字列表
 * @returns 对象列表
*/
export  async function JxTeachingPlan_GetObjLstByIdTeachingPlanLstCache(arrIdTeachingPlanLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdTeachingPlanLstCache";
try
{
const arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstCache();
const arrJxTeachingPlanSel = arrJxTeachingPlanObjLstCache.filter(x => arrIdTeachingPlanLst.indexOf(x.idTeachingPlan)>-1);
return arrJxTeachingPlanSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdTeachingPlanLst.join(","), jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsJxTeachingPlanEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = JxTeachingPlan_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsJxTeachingPlanEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = JxTeachingPlan_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsJxTeachingPlanEN>();
const arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstCache();
if (arrJxTeachingPlanObjLstCache.length == 0) return arrJxTeachingPlanObjLstCache;
let arrJxTeachingPlanSel = arrJxTeachingPlanObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objJxTeachingPlanCond = new clsJxTeachingPlanEN();
ObjectAssign(objJxTeachingPlanCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsJxTeachingPlanWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objJxTeachingPlanCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrJxTeachingPlanSel.length == 0) return arrJxTeachingPlanSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrJxTeachingPlanSel = arrJxTeachingPlanSel.sort(JxTeachingPlan_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrJxTeachingPlanSel = arrJxTeachingPlanSel.sort(objPagerPara.sortFun);
}
arrJxTeachingPlanSel = arrJxTeachingPlanSel.slice(intStart, intEnd);     
return arrJxTeachingPlanSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsJxTeachingPlanEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function JxTeachingPlan_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsJxTeachingPlanEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsJxTeachingPlanEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = JxTeachingPlan_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param strIdTeachingPlan:关键字
 * @returns 获取删除的结果
 **/
export  async function JxTeachingPlan_DelRecordAsync(strIdTeachingPlan: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdTeachingPlan);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param arrIdTeachingPlan:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function JxTeachingPlan_DelJxTeachingPlansAsync(arrIdTeachingPlan: Array<string>): Promise<number> 
{
const strThisFuncName = "DelJxTeachingPlansAsync";
const strAction = "DelJxTeachingPlans";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdTeachingPlan, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_DelJxTeachingPlansByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelJxTeachingPlansByCondAsync";
const strAction = "DelJxTeachingPlansByCond";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param objJxTeachingPlanEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function JxTeachingPlan_AddNewRecordAsync(objJxTeachingPlanEN: clsJxTeachingPlanEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objJxTeachingPlanEN);
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachingPlanEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param objJxTeachingPlanEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function JxTeachingPlan_AddNewRecordWithMaxIdAsync(objJxTeachingPlanEN: clsJxTeachingPlanEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachingPlanEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_AddNewObjSave(objJxTeachingPlanEN: clsJxTeachingPlanEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
JxTeachingPlan_CheckPropertyNew(objJxTeachingPlanEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ jxTeachingPlan_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await JxTeachingPlan_CheckUniCond4Add(objJxTeachingPlanEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await JxTeachingPlan_AddNewRecordWithMaxIdAsync(objJxTeachingPlanEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
JxTeachingPlan_ReFreshCache();
}
else
{
const strInfo = `添加[教学计划(JxTeachingPlan)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ jxTeachingPlan_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function JxTeachingPlan_CheckUniCond4Add(objJxTeachingPlanEN: clsJxTeachingPlanEN): Promise<boolean>{
const strUniquenessCondition = JxTeachingPlan_GetUniCondStr(objJxTeachingPlanEN);
const bolIsExistCondition = await JxTeachingPlan_IsExistRecordAsync(strUniquenessCondition);
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
export  async function JxTeachingPlan_CheckUniCond4Update(objJxTeachingPlanEN: clsJxTeachingPlanEN): Promise<boolean>{
const strUniquenessCondition = JxTeachingPlan_GetUniCondStr4Update(objJxTeachingPlanEN);
const bolIsExistCondition = await JxTeachingPlan_IsExistRecordAsync(strUniquenessCondition);
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
export  async function JxTeachingPlan_UpdateObjSave(objJxTeachingPlanEN: clsJxTeachingPlanEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objJxTeachingPlanEN.sfUpdFldSetStr = objJxTeachingPlanEN.updFldString;//设置哪些字段被修改(脏字段)
if (objJxTeachingPlanEN.idTeachingPlan == "" || objJxTeachingPlanEN.idTeachingPlan == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
JxTeachingPlan_CheckProperty4Update(objJxTeachingPlanEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ jxTeachingPlan_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await JxTeachingPlan_CheckUniCond4Update(objJxTeachingPlanEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await JxTeachingPlan_UpdateRecordAsync(objJxTeachingPlanEN);
if (returnBool == true)
{
JxTeachingPlan_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ jxTeachingPlan_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objJxTeachingPlanEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function JxTeachingPlan_AddNewRecordWithReturnKeyAsync(objJxTeachingPlanEN: clsJxTeachingPlanEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachingPlanEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param objJxTeachingPlanEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function JxTeachingPlan_UpdateRecordAsync(objJxTeachingPlanEN: clsJxTeachingPlanEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objJxTeachingPlanEN.sfUpdFldSetStr === undefined || objJxTeachingPlanEN.sfUpdFldSetStr === null || objJxTeachingPlanEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objJxTeachingPlanEN.idTeachingPlan);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachingPlanEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param objJxTeachingPlanEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function JxTeachingPlan_EditRecordExAsync(objJxTeachingPlanEN: clsJxTeachingPlanEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objJxTeachingPlanEN.sfUpdFldSetStr === undefined || objJxTeachingPlanEN.sfUpdFldSetStr === null || objJxTeachingPlanEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objJxTeachingPlanEN.idTeachingPlan);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachingPlanEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param objJxTeachingPlanEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function JxTeachingPlan_UpdateWithConditionAsync(objJxTeachingPlanEN: clsJxTeachingPlanEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objJxTeachingPlanEN.sfUpdFldSetStr === undefined || objJxTeachingPlanEN.sfUpdFldSetStr === null || objJxTeachingPlanEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objJxTeachingPlanEN.idTeachingPlan);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);
objJxTeachingPlanEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachingPlanEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param objstrIdTeachingPlanCond:条件对象
 * @returns 对象列表子集
*/
export  async function JxTeachingPlan_IsExistRecordCache(objJxTeachingPlanCond: clsJxTeachingPlanEN) {
const strThisFuncName = "IsExistRecordCache";
const arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstCache();
if (arrJxTeachingPlanObjLstCache == null) return false;
let arrJxTeachingPlanSel = arrJxTeachingPlanObjLstCache;
if (objJxTeachingPlanCond.sfFldComparisonOp == null || objJxTeachingPlanCond.sfFldComparisonOp == "") return arrJxTeachingPlanSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objJxTeachingPlanCond.sfFldComparisonOp);
//console.log("clsJxTeachingPlanWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objJxTeachingPlanCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objJxTeachingPlanCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrJxTeachingPlanSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objJxTeachingPlanCond), jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param strIdTeachingPlan:所给的关键字
 * @returns 对象
*/
export  async function JxTeachingPlan_IsExistCache(strIdTeachingPlan:string) {
const strThisFuncName = "IsExistCache";
const arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstCache();
if (arrJxTeachingPlanObjLstCache == null) return false;
try
{
const arrJxTeachingPlanSel = arrJxTeachingPlanObjLstCache.filter(x => x.idTeachingPlan == strIdTeachingPlan);
if (arrJxTeachingPlanSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdTeachingPlan, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdTeachingPlan:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function JxTeachingPlan_IsExistAsync(strIdTeachingPlan: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeachingPlan
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
 * @param objJxTeachingPlanCond:条件对象
 * @returns 对象列表记录数
*/
export  async function JxTeachingPlan_GetRecCountByCondCache(objJxTeachingPlanCond: clsJxTeachingPlanEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrJxTeachingPlanObjLstCache = await JxTeachingPlan_GetObjLstCache();
if (arrJxTeachingPlanObjLstCache == null) return 0;
let arrJxTeachingPlanSel = arrJxTeachingPlanObjLstCache;
if (objJxTeachingPlanCond.sfFldComparisonOp == null || objJxTeachingPlanCond.sfFldComparisonOp == "") return arrJxTeachingPlanSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objJxTeachingPlanCond.sfFldComparisonOp);
//console.log("clsJxTeachingPlanWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objJxTeachingPlanCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objJxTeachingPlanCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrJxTeachingPlanSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objJxTeachingPlanCond), jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  async function JxTeachingPlan_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(jxTeachingPlan_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachingPlan_ConstructorName, strThisFuncName);
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
export  function JxTeachingPlan_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function JxTeachingPlan_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsJxTeachingPlanEN._CurrTabName;
switch (clsJxTeachingPlanEN.CacheModeId)
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
clsJxTeachingPlanEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function JxTeachingPlan_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsJxTeachingPlanEN._CurrTabName;
switch (clsJxTeachingPlanEN.CacheModeId)
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
clsJxTeachingPlanEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function JxTeachingPlan_GetLastRefreshTime():string
{
if (clsJxTeachingPlanEN._RefreshTimeLst.length == 0) return "";
return clsJxTeachingPlanEN._RefreshTimeLst[clsJxTeachingPlanEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdGrade:
*/
export  async function JxTeachingPlan_BindDdl_IdTeachingPlanByIdGradeInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strIdGrade: string)
{

if (IsNullOrEmpty(strIdGrade) == true)
{
  const strMsg = Format("参数:[strIdGrade]不能为空！(In clsJxTeachingPlanWApi.BindDdl_IdTeachingPlanByIdGradeInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdGrade.length != 2)
{
const strMsg = Format("缓存分类变量:[strIdGrade]的长度:[{0}]不正确！(clsJxTeachingPlanWApi.BindDdl_IdTeachingPlanByIdGradeInDiv)", strIdGrade.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdTeachingPlanByIdGradeInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdTeachingPlanByIdGradeInDivCache");
let arrObjLstSel = await JxTeachingPlan_GetObjLstCache();
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.idGrade == strIdGrade);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsJxTeachingPlanEN.con_IdTeachingPlan, clsJxTeachingPlanEN.con_TeachingPlanDesc, "教学计划...");
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function JxTeachingPlan_BindDdl_IdTeachingPlanInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdTeachingPlanInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdTeachingPlanInDivCache");
const arrObjLstSel = await JxTeachingPlan_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsJxTeachingPlanEN.con_IdTeachingPlan, clsJxTeachingPlanEN.con_TeachingPlanDesc, "教学计划...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdGrade:
*/
export  async function JxTeachingPlan_GetArrJxTeachingPlanByIdGrade(strIdGrade: string)
{

if (IsNullOrEmpty(strIdGrade) == true)
{
  const strMsg = Format("参数:[strIdGrade]不能为空！(In clsJxTeachingPlanWApi.BindDdl_IdTeachingPlanByIdGradeInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdGrade.length != 2)
{
const strMsg = Format("缓存分类变量:[strIdGrade]的长度:[{0}]不正确！(clsJxTeachingPlanWApi.BindDdl_IdTeachingPlanByIdGradeInDiv)", strIdGrade.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdTeachingPlanByIdGradeInDivCache");
const arrJxTeachingPlan = new Array<clsJxTeachingPlanEN>();
let arrObjLstSel = await JxTeachingPlan_GetObjLstCache();
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.idGrade == strIdGrade);
const obj0 = new clsJxTeachingPlanEN();
obj0.idTeachingPlan = '0';
obj0.teachingPlanDesc = '选教学计划...';
arrJxTeachingPlan.push(obj0);
arrObjLstSel.forEach(x => arrJxTeachingPlan.push(x));
return arrJxTeachingPlan;
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function JxTeachingPlan_GetArrJxTeachingPlan()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdTeachingPlanInDivCache");
const arrJxTeachingPlan = new Array<clsJxTeachingPlanEN>();
const arrObjLstSel = await JxTeachingPlan_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsJxTeachingPlanEN();
obj0.idTeachingPlan = '0';
obj0.teachingPlanDesc = '选教学计划...';
arrJxTeachingPlan.push(obj0);
arrObjLstSel.forEach(x => arrJxTeachingPlan.push(x));
return arrJxTeachingPlan;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function JxTeachingPlan_CheckPropertyNew(pobjJxTeachingPlanEN: clsJxTeachingPlanEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjJxTeachingPlanEN.teachingPlanId) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学计划编号]不能为空(In 教学计划)!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.teachingPlanDesc) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学计划名称]不能为空(In 教学计划)!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idGrade) === true 
 || pobjJxTeachingPlanEN.idGrade.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[年级流水号]不能为空(In 教学计划)!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schoolTerm) === true 
 || pobjJxTeachingPlanEN.schoolTerm.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[学期]不能为空(In 教学计划)!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.courseId) === true 
 || pobjJxTeachingPlanEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 教学计划)!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idSubmitStatus) === true )
{
 throw new Error(`(errid:Watl000411)字段[送审状态流水号]不能为空(In 教学计划)!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idTeachingPlan) == false && GetStrLen(pobjJxTeachingPlanEN.idTeachingPlan) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教案流水号(idTeachingPlan)]的长度不能超过8(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.idTeachingPlan}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.teachingPlanId) == false && GetStrLen(pobjJxTeachingPlanEN.teachingPlanId) > 12)
{
 throw new Error(`(errid:Watl000413)字段[教学计划编号(teachingPlanId)]的长度不能超过12(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.teachingPlanId}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.teachingPlanDesc) == false && GetStrLen(pobjJxTeachingPlanEN.teachingPlanDesc) > 100)
{
 throw new Error(`(errid:Watl000413)字段[教学计划名称(teachingPlanDesc)]的长度不能超过100(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.teachingPlanDesc}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idGrade) == false && GetStrLen(pobjJxTeachingPlanEN.idGrade) > 2)
{
 throw new Error(`(errid:Watl000413)字段[年级流水号(idGrade)]的长度不能超过2(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.idGrade}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schoolTerm) == false && GetStrLen(pobjJxTeachingPlanEN.schoolTerm) > 1)
{
 throw new Error(`(errid:Watl000413)字段[学期(schoolTerm)]的长度不能超过1(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.schoolTerm}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.courseId) == false && GetStrLen(pobjJxTeachingPlanEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.courseId}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.clgCheckerId) == false && GetStrLen(pobjJxTeachingPlanEN.clgCheckerId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[学院审批人id(clgCheckerId)]的长度不能超过18(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.clgCheckerId}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.clgCheckDate) == false && GetStrLen(pobjJxTeachingPlanEN.clgCheckDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[学院审批日期(clgCheckDate)]的长度不能超过8(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.clgCheckDate}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schCheckerId) == false && GetStrLen(pobjJxTeachingPlanEN.schCheckerId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[学校审批人Id(schCheckerId)]的长度不能超过18(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.schCheckerId}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schCheckDate) == false && GetStrLen(pobjJxTeachingPlanEN.schCheckDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[学校审批日期(schCheckDate)]的长度不能超过8(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.schCheckDate}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idSubmitStatus) == false && GetStrLen(pobjJxTeachingPlanEN.idSubmitStatus) > 2)
{
 throw new Error(`(errid:Watl000413)字段[送审状态流水号(idSubmitStatus)]的长度不能超过2(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.idSubmitStatus}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.memo) == false && GetStrLen(pobjJxTeachingPlanEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.memo}(clsJxTeachingPlanBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idTeachingPlan) == false && undefined !== pobjJxTeachingPlanEN.idTeachingPlan && tzDataType.isString(pobjJxTeachingPlanEN.idTeachingPlan) === false)
{
 throw new Error(`(errid:Watl000414)字段[教案流水号(idTeachingPlan)]的值:[${pobjJxTeachingPlanEN.idTeachingPlan}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.teachingPlanId) == false && undefined !== pobjJxTeachingPlanEN.teachingPlanId && tzDataType.isString(pobjJxTeachingPlanEN.teachingPlanId) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学计划编号(teachingPlanId)]的值:[${pobjJxTeachingPlanEN.teachingPlanId}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.teachingPlanDesc) == false && undefined !== pobjJxTeachingPlanEN.teachingPlanDesc && tzDataType.isString(pobjJxTeachingPlanEN.teachingPlanDesc) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学计划名称(teachingPlanDesc)]的值:[${pobjJxTeachingPlanEN.teachingPlanDesc}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idGrade) == false && undefined !== pobjJxTeachingPlanEN.idGrade && tzDataType.isString(pobjJxTeachingPlanEN.idGrade) === false)
{
 throw new Error(`(errid:Watl000414)字段[年级流水号(idGrade)]的值:[${pobjJxTeachingPlanEN.idGrade}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schoolTerm) == false && undefined !== pobjJxTeachingPlanEN.schoolTerm && tzDataType.isString(pobjJxTeachingPlanEN.schoolTerm) === false)
{
 throw new Error(`(errid:Watl000414)字段[学期(schoolTerm)]的值:[${pobjJxTeachingPlanEN.schoolTerm}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.courseId) == false && undefined !== pobjJxTeachingPlanEN.courseId && tzDataType.isString(pobjJxTeachingPlanEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjJxTeachingPlanEN.courseId}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (null != pobjJxTeachingPlanEN.isClgCheck && undefined !== pobjJxTeachingPlanEN.isClgCheck && tzDataType.isBoolean(pobjJxTeachingPlanEN.isClgCheck) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否学院审批(isClgCheck)]的值:[${pobjJxTeachingPlanEN.isClgCheck}], 非法,应该为布尔型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.clgNote) == false && undefined !== pobjJxTeachingPlanEN.clgNote && tzDataType.isString(pobjJxTeachingPlanEN.clgNote) === false)
{
 throw new Error(`(errid:Watl000414)字段[学院审批意见(clgNote)]的值:[${pobjJxTeachingPlanEN.clgNote}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.clgCheckerId) == false && undefined !== pobjJxTeachingPlanEN.clgCheckerId && tzDataType.isString(pobjJxTeachingPlanEN.clgCheckerId) === false)
{
 throw new Error(`(errid:Watl000414)字段[学院审批人id(clgCheckerId)]的值:[${pobjJxTeachingPlanEN.clgCheckerId}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.clgCheckDate) == false && undefined !== pobjJxTeachingPlanEN.clgCheckDate && tzDataType.isString(pobjJxTeachingPlanEN.clgCheckDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[学院审批日期(clgCheckDate)]的值:[${pobjJxTeachingPlanEN.clgCheckDate}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (null != pobjJxTeachingPlanEN.isSchCheck && undefined !== pobjJxTeachingPlanEN.isSchCheck && tzDataType.isBoolean(pobjJxTeachingPlanEN.isSchCheck) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否学校审批(isSchCheck)]的值:[${pobjJxTeachingPlanEN.isSchCheck}], 非法,应该为布尔型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schNote) == false && undefined !== pobjJxTeachingPlanEN.schNote && tzDataType.isString(pobjJxTeachingPlanEN.schNote) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校审批意见(schNote)]的值:[${pobjJxTeachingPlanEN.schNote}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schCheckerId) == false && undefined !== pobjJxTeachingPlanEN.schCheckerId && tzDataType.isString(pobjJxTeachingPlanEN.schCheckerId) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校审批人Id(schCheckerId)]的值:[${pobjJxTeachingPlanEN.schCheckerId}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schCheckDate) == false && undefined !== pobjJxTeachingPlanEN.schCheckDate && tzDataType.isString(pobjJxTeachingPlanEN.schCheckDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校审批日期(schCheckDate)]的值:[${pobjJxTeachingPlanEN.schCheckDate}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idSubmitStatus) == false && undefined !== pobjJxTeachingPlanEN.idSubmitStatus && tzDataType.isString(pobjJxTeachingPlanEN.idSubmitStatus) === false)
{
 throw new Error(`(errid:Watl000414)字段[送审状态流水号(idSubmitStatus)]的值:[${pobjJxTeachingPlanEN.idSubmitStatus}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.memo) == false && undefined !== pobjJxTeachingPlanEN.memo && tzDataType.isString(pobjJxTeachingPlanEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjJxTeachingPlanEN.memo}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idSubmitStatus) == false && pobjJxTeachingPlanEN.idSubmitStatus != '[nuull]' && GetStrLen(pobjJxTeachingPlanEN.idSubmitStatus) !=  2)
{
 throw ("(errid:Watl000415)字段[送审状态流水号]作为外键字段,长度应该为2(In 教学计划)!(clsJxTeachingPlanBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function JxTeachingPlan_CheckProperty4Update(pobjJxTeachingPlanEN: clsJxTeachingPlanEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idTeachingPlan) == false && GetStrLen(pobjJxTeachingPlanEN.idTeachingPlan) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教案流水号(idTeachingPlan)]的长度不能超过8(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.idTeachingPlan}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.teachingPlanId) == false && GetStrLen(pobjJxTeachingPlanEN.teachingPlanId) > 12)
{
 throw new Error(`(errid:Watl000416)字段[教学计划编号(teachingPlanId)]的长度不能超过12(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.teachingPlanId}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.teachingPlanDesc) == false && GetStrLen(pobjJxTeachingPlanEN.teachingPlanDesc) > 100)
{
 throw new Error(`(errid:Watl000416)字段[教学计划名称(teachingPlanDesc)]的长度不能超过100(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.teachingPlanDesc}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idGrade) == false && GetStrLen(pobjJxTeachingPlanEN.idGrade) > 2)
{
 throw new Error(`(errid:Watl000416)字段[年级流水号(idGrade)]的长度不能超过2(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.idGrade}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schoolTerm) == false && GetStrLen(pobjJxTeachingPlanEN.schoolTerm) > 1)
{
 throw new Error(`(errid:Watl000416)字段[学期(schoolTerm)]的长度不能超过1(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.schoolTerm}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.courseId) == false && GetStrLen(pobjJxTeachingPlanEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.courseId}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.clgCheckerId) == false && GetStrLen(pobjJxTeachingPlanEN.clgCheckerId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[学院审批人id(clgCheckerId)]的长度不能超过18(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.clgCheckerId}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.clgCheckDate) == false && GetStrLen(pobjJxTeachingPlanEN.clgCheckDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[学院审批日期(clgCheckDate)]的长度不能超过8(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.clgCheckDate}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schCheckerId) == false && GetStrLen(pobjJxTeachingPlanEN.schCheckerId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[学校审批人Id(schCheckerId)]的长度不能超过18(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.schCheckerId}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schCheckDate) == false && GetStrLen(pobjJxTeachingPlanEN.schCheckDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[学校审批日期(schCheckDate)]的长度不能超过8(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.schCheckDate}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idSubmitStatus) == false && GetStrLen(pobjJxTeachingPlanEN.idSubmitStatus) > 2)
{
 throw new Error(`(errid:Watl000416)字段[送审状态流水号(idSubmitStatus)]的长度不能超过2(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.idSubmitStatus}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.memo) == false && GetStrLen(pobjJxTeachingPlanEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教学计划(JxTeachingPlan))!值:${pobjJxTeachingPlanEN.memo}(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idTeachingPlan) == false && undefined !== pobjJxTeachingPlanEN.idTeachingPlan && tzDataType.isString(pobjJxTeachingPlanEN.idTeachingPlan) === false)
{
 throw new Error(`(errid:Watl000417)字段[教案流水号(idTeachingPlan)]的值:[${pobjJxTeachingPlanEN.idTeachingPlan}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.teachingPlanId) == false && undefined !== pobjJxTeachingPlanEN.teachingPlanId && tzDataType.isString(pobjJxTeachingPlanEN.teachingPlanId) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学计划编号(teachingPlanId)]的值:[${pobjJxTeachingPlanEN.teachingPlanId}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.teachingPlanDesc) == false && undefined !== pobjJxTeachingPlanEN.teachingPlanDesc && tzDataType.isString(pobjJxTeachingPlanEN.teachingPlanDesc) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学计划名称(teachingPlanDesc)]的值:[${pobjJxTeachingPlanEN.teachingPlanDesc}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idGrade) == false && undefined !== pobjJxTeachingPlanEN.idGrade && tzDataType.isString(pobjJxTeachingPlanEN.idGrade) === false)
{
 throw new Error(`(errid:Watl000417)字段[年级流水号(idGrade)]的值:[${pobjJxTeachingPlanEN.idGrade}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schoolTerm) == false && undefined !== pobjJxTeachingPlanEN.schoolTerm && tzDataType.isString(pobjJxTeachingPlanEN.schoolTerm) === false)
{
 throw new Error(`(errid:Watl000417)字段[学期(schoolTerm)]的值:[${pobjJxTeachingPlanEN.schoolTerm}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.courseId) == false && undefined !== pobjJxTeachingPlanEN.courseId && tzDataType.isString(pobjJxTeachingPlanEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjJxTeachingPlanEN.courseId}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (null != pobjJxTeachingPlanEN.isClgCheck && undefined !== pobjJxTeachingPlanEN.isClgCheck && tzDataType.isBoolean(pobjJxTeachingPlanEN.isClgCheck) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否学院审批(isClgCheck)]的值:[${pobjJxTeachingPlanEN.isClgCheck}], 非法,应该为布尔型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.clgNote) == false && undefined !== pobjJxTeachingPlanEN.clgNote && tzDataType.isString(pobjJxTeachingPlanEN.clgNote) === false)
{
 throw new Error(`(errid:Watl000417)字段[学院审批意见(clgNote)]的值:[${pobjJxTeachingPlanEN.clgNote}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.clgCheckerId) == false && undefined !== pobjJxTeachingPlanEN.clgCheckerId && tzDataType.isString(pobjJxTeachingPlanEN.clgCheckerId) === false)
{
 throw new Error(`(errid:Watl000417)字段[学院审批人id(clgCheckerId)]的值:[${pobjJxTeachingPlanEN.clgCheckerId}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.clgCheckDate) == false && undefined !== pobjJxTeachingPlanEN.clgCheckDate && tzDataType.isString(pobjJxTeachingPlanEN.clgCheckDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[学院审批日期(clgCheckDate)]的值:[${pobjJxTeachingPlanEN.clgCheckDate}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (null != pobjJxTeachingPlanEN.isSchCheck && undefined !== pobjJxTeachingPlanEN.isSchCheck && tzDataType.isBoolean(pobjJxTeachingPlanEN.isSchCheck) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否学校审批(isSchCheck)]的值:[${pobjJxTeachingPlanEN.isSchCheck}], 非法,应该为布尔型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schNote) == false && undefined !== pobjJxTeachingPlanEN.schNote && tzDataType.isString(pobjJxTeachingPlanEN.schNote) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校审批意见(schNote)]的值:[${pobjJxTeachingPlanEN.schNote}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schCheckerId) == false && undefined !== pobjJxTeachingPlanEN.schCheckerId && tzDataType.isString(pobjJxTeachingPlanEN.schCheckerId) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校审批人Id(schCheckerId)]的值:[${pobjJxTeachingPlanEN.schCheckerId}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.schCheckDate) == false && undefined !== pobjJxTeachingPlanEN.schCheckDate && tzDataType.isString(pobjJxTeachingPlanEN.schCheckDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校审批日期(schCheckDate)]的值:[${pobjJxTeachingPlanEN.schCheckDate}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idSubmitStatus) == false && undefined !== pobjJxTeachingPlanEN.idSubmitStatus && tzDataType.isString(pobjJxTeachingPlanEN.idSubmitStatus) === false)
{
 throw new Error(`(errid:Watl000417)字段[送审状态流水号(idSubmitStatus)]的值:[${pobjJxTeachingPlanEN.idSubmitStatus}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachingPlanEN.memo) == false && undefined !== pobjJxTeachingPlanEN.memo && tzDataType.isString(pobjJxTeachingPlanEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjJxTeachingPlanEN.memo}], 非法,应该为字符型(In 教学计划(JxTeachingPlan))!(clsJxTeachingPlanBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjJxTeachingPlanEN.idSubmitStatus) == false && pobjJxTeachingPlanEN.idSubmitStatus != '[nuull]' && GetStrLen(pobjJxTeachingPlanEN.idSubmitStatus) !=  2)
{
 throw ("(errid:Watl000418)字段[送审状态流水号]作为外键字段,长度应该为2(In 教学计划)!(clsJxTeachingPlanBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function JxTeachingPlan_GetJSONStrByObj (pobjJxTeachingPlanEN: clsJxTeachingPlanEN): string
{
pobjJxTeachingPlanEN.sfUpdFldSetStr = pobjJxTeachingPlanEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjJxTeachingPlanEN);
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
export  function JxTeachingPlan_GetObjLstByJSONStr (strJSON: string): Array<clsJxTeachingPlanEN>
{
let arrJxTeachingPlanObjLst = new Array<clsJxTeachingPlanEN>();
if (strJSON === "")
{
return arrJxTeachingPlanObjLst;
}
try
{
arrJxTeachingPlanObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrJxTeachingPlanObjLst;
}
return arrJxTeachingPlanObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrJxTeachingPlanObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function JxTeachingPlan_GetObjLstByJSONObjLst (arrJxTeachingPlanObjLstS: Array<clsJxTeachingPlanEN>): Array<clsJxTeachingPlanEN>
{
const arrJxTeachingPlanObjLst = new Array<clsJxTeachingPlanEN>();
for (const objInFor of arrJxTeachingPlanObjLstS) {
const obj1 = JxTeachingPlan_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrJxTeachingPlanObjLst.push(obj1);
}
return arrJxTeachingPlanObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function JxTeachingPlan_GetObjByJSONStr (strJSON: string): clsJxTeachingPlanEN
{
let pobjJxTeachingPlanEN = new clsJxTeachingPlanEN();
if (strJSON === "")
{
return pobjJxTeachingPlanEN;
}
try
{
pobjJxTeachingPlanEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjJxTeachingPlanEN;
}
return pobjJxTeachingPlanEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function JxTeachingPlan_GetCombineCondition(objJxTeachingPlanCond: clsJxTeachingPlanEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_IdTeachingPlan) == true)
{
const strComparisonOpIdTeachingPlan:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_IdTeachingPlan];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_IdTeachingPlan, objJxTeachingPlanCond.idTeachingPlan, strComparisonOpIdTeachingPlan);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_TeachingPlanId) == true)
{
const strComparisonOpTeachingPlanId:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_TeachingPlanId];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_TeachingPlanId, objJxTeachingPlanCond.teachingPlanId, strComparisonOpTeachingPlanId);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_TeachingPlanDesc) == true)
{
const strComparisonOpTeachingPlanDesc:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_TeachingPlanDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_TeachingPlanDesc, objJxTeachingPlanCond.teachingPlanDesc, strComparisonOpTeachingPlanDesc);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_IdGrade) == true)
{
const strComparisonOpIdGrade:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_IdGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_IdGrade, objJxTeachingPlanCond.idGrade, strComparisonOpIdGrade);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_SchoolTerm, objJxTeachingPlanCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_CourseId, objJxTeachingPlanCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_IsClgCheck) == true)
{
if (objJxTeachingPlanCond.isClgCheck == true)
{
strWhereCond += Format(" And {0} = '1'", clsJxTeachingPlanEN.con_IsClgCheck);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsJxTeachingPlanEN.con_IsClgCheck);
}
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_ClgCheckerId) == true)
{
const strComparisonOpClgCheckerId:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_ClgCheckerId];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_ClgCheckerId, objJxTeachingPlanCond.clgCheckerId, strComparisonOpClgCheckerId);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_ClgCheckDate) == true)
{
const strComparisonOpClgCheckDate:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_ClgCheckDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_ClgCheckDate, objJxTeachingPlanCond.clgCheckDate, strComparisonOpClgCheckDate);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_IsSchCheck) == true)
{
if (objJxTeachingPlanCond.isSchCheck == true)
{
strWhereCond += Format(" And {0} = '1'", clsJxTeachingPlanEN.con_IsSchCheck);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsJxTeachingPlanEN.con_IsSchCheck);
}
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_SchCheckerId) == true)
{
const strComparisonOpSchCheckerId:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_SchCheckerId];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_SchCheckerId, objJxTeachingPlanCond.schCheckerId, strComparisonOpSchCheckerId);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_SchCheckDate) == true)
{
const strComparisonOpSchCheckDate:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_SchCheckDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_SchCheckDate, objJxTeachingPlanCond.schCheckDate, strComparisonOpSchCheckDate);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_IdSubmitStatus) == true)
{
const strComparisonOpIdSubmitStatus:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_IdSubmitStatus];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_IdSubmitStatus, objJxTeachingPlanCond.idSubmitStatus, strComparisonOpIdSubmitStatus);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachingPlanCond.dicFldComparisonOp, clsJxTeachingPlanEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objJxTeachingPlanCond.dicFldComparisonOp[clsJxTeachingPlanEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachingPlanEN.con_Memo, objJxTeachingPlanCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--JxTeachingPlan(教学计划),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTeachingPlanDesc: 教学计划名称(要求唯一的字段)
 * @param strTeachingPlanId: 教学计划编号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function JxTeachingPlan_GetUniCondStr(objJxTeachingPlanEN: clsJxTeachingPlanEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and TeachingPlanDesc = '{0}'", objJxTeachingPlanEN.teachingPlanDesc);
 strWhereCond +=  Format(" and TeachingPlanId = '{0}'", objJxTeachingPlanEN.teachingPlanId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--JxTeachingPlan(教学计划),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTeachingPlanDesc: 教学计划名称(要求唯一的字段)
 * @param strTeachingPlanId: 教学计划编号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function JxTeachingPlan_GetUniCondStr4Update(objJxTeachingPlanEN: clsJxTeachingPlanEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdTeachingPlan <> '{0}'", objJxTeachingPlanEN.idTeachingPlan);
 strWhereCond +=  Format(" and TeachingPlanDesc = '{0}'", objJxTeachingPlanEN.teachingPlanDesc);
 strWhereCond +=  Format(" and TeachingPlanId = '{0}'", objJxTeachingPlanEN.teachingPlanId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objJxTeachingPlanENS:源对象
 * @param objJxTeachingPlanENT:目标对象
*/
export  function JxTeachingPlan_CopyObjTo(objJxTeachingPlanENS: clsJxTeachingPlanEN , objJxTeachingPlanENT: clsJxTeachingPlanEN ): void 
{
objJxTeachingPlanENT.idTeachingPlan = objJxTeachingPlanENS.idTeachingPlan; //教案流水号
objJxTeachingPlanENT.teachingPlanId = objJxTeachingPlanENS.teachingPlanId; //教学计划编号
objJxTeachingPlanENT.teachingPlanDesc = objJxTeachingPlanENS.teachingPlanDesc; //教学计划名称
objJxTeachingPlanENT.idGrade = objJxTeachingPlanENS.idGrade; //年级流水号
objJxTeachingPlanENT.schoolTerm = objJxTeachingPlanENS.schoolTerm; //学期
objJxTeachingPlanENT.courseId = objJxTeachingPlanENS.courseId; //课程Id
objJxTeachingPlanENT.isClgCheck = objJxTeachingPlanENS.isClgCheck; //是否学院审批
objJxTeachingPlanENT.clgNote = objJxTeachingPlanENS.clgNote; //学院审批意见
objJxTeachingPlanENT.clgCheckerId = objJxTeachingPlanENS.clgCheckerId; //学院审批人id
objJxTeachingPlanENT.clgCheckDate = objJxTeachingPlanENS.clgCheckDate; //学院审批日期
objJxTeachingPlanENT.isSchCheck = objJxTeachingPlanENS.isSchCheck; //是否学校审批
objJxTeachingPlanENT.schNote = objJxTeachingPlanENS.schNote; //学校审批意见
objJxTeachingPlanENT.schCheckerId = objJxTeachingPlanENS.schCheckerId; //学校审批人Id
objJxTeachingPlanENT.schCheckDate = objJxTeachingPlanENS.schCheckDate; //学校审批日期
objJxTeachingPlanENT.idSubmitStatus = objJxTeachingPlanENS.idSubmitStatus; //送审状态流水号
objJxTeachingPlanENT.memo = objJxTeachingPlanENS.memo; //备注
objJxTeachingPlanENT.sfUpdFldSetStr = objJxTeachingPlanENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objJxTeachingPlanENS:源对象
 * @param objJxTeachingPlanENT:目标对象
*/
export  function JxTeachingPlan_GetObjFromJsonObj(objJxTeachingPlanENS: clsJxTeachingPlanEN): clsJxTeachingPlanEN 
{
 const objJxTeachingPlanENT: clsJxTeachingPlanEN = new clsJxTeachingPlanEN();
ObjectAssign(objJxTeachingPlanENT, objJxTeachingPlanENS);
 return objJxTeachingPlanENT;
}