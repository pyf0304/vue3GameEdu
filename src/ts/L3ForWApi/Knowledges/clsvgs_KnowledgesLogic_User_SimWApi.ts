
 /**
 * 类名:clsvgs_KnowledgesLogic_User_SimWApi
 * 表名:vgs_KnowledgesLogic_User_Sim(01120933)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:50:42
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
 * v知识点逻辑用户关系_Sim(vgs_KnowledgesLogic_User_Sim)
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
import { clsvgs_KnowledgesLogic_User_SimEN } from "@/ts/L0Entity/Knowledges/clsvgs_KnowledgesLogic_User_SimEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vgs_KnowledgesLogic_User_Sim_Controller = "vgs_KnowledgesLogic_User_SimApi";
 export const vgs_KnowledgesLogic_User_Sim_ConstructorName = "vgs_KnowledgesLogic_User_Sim";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vgs_KnowledgesLogic_User_Sim_GetObjBymIdAsync(lngmId: number): Promise<clsvgs_KnowledgesLogic_User_SimEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvgs_KnowledgesLogic_User_SimWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const objvgs_KnowledgesLogic_User_Sim = vgs_KnowledgesLogic_User_Sim_GetObjFromJsonObj(returnObj);
return objvgs_KnowledgesLogic_User_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetObjBymIdlocalStorage(lngmId: number) {
const strThisFuncName = "GetObjBymIdlocalStorage";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvgs_KnowledgesLogic_User_SimWApi.GetObjBymIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvgs_KnowledgesLogic_User_SimEN._CurrTabName, lngmId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvgs_KnowledgesLogic_User_SimCache: clsvgs_KnowledgesLogic_User_SimEN = JSON.parse(strTempObj);
return objvgs_KnowledgesLogic_User_SimCache;
}
try
{
const objvgs_KnowledgesLogic_User_Sim = await vgs_KnowledgesLogic_User_Sim_GetObjBymIdAsync(lngmId);
if (objvgs_KnowledgesLogic_User_Sim != null)
{
localStorage.setItem(strKey, JSON.stringify(objvgs_KnowledgesLogic_User_Sim));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvgs_KnowledgesLogic_User_Sim;
}
return objvgs_KnowledgesLogic_User_Sim;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetObjBymIdCache(lngmId:number,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBymIdCache";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvgs_KnowledgesLogic_User_SimWApi.GetObjBymIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstCache(strCourseId);
try
{
const arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimObjLstCache.filter(x => 
 x.mId == lngmId );
let objvgs_KnowledgesLogic_User_Sim: clsvgs_KnowledgesLogic_User_SimEN;
if (arrvgs_KnowledgesLogic_User_SimSel.length > 0)
{
objvgs_KnowledgesLogic_User_Sim = arrvgs_KnowledgesLogic_User_SimSel[0];
return objvgs_KnowledgesLogic_User_Sim;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvgs_KnowledgesLogic_User_SimConst = await vgs_KnowledgesLogic_User_Sim_GetObjBymIdAsync(lngmId);
if (objvgs_KnowledgesLogic_User_SimConst != null)
{
vgs_KnowledgesLogic_User_Sim_ReFreshThisCache(strCourseId);
return objvgs_KnowledgesLogic_User_SimConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  function vgs_KnowledgesLogic_User_Sim_SortFunDefa(a:clsvgs_KnowledgesLogic_User_SimEN , b:clsvgs_KnowledgesLogic_User_SimEN): number 
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
export  function vgs_KnowledgesLogic_User_Sim_SortFunDefa2Fld(a:clsvgs_KnowledgesLogic_User_SimEN , b:clsvgs_KnowledgesLogic_User_SimEN): number 
{
if (a.courseKnowledgeId == b.courseKnowledgeId) return a.knowledgeGraphId.localeCompare(b.knowledgeGraphId);
else return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
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
export  function vgs_KnowledgesLogic_User_Sim_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvgs_KnowledgesLogic_User_SimEN.con_mId:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
return a.mId-b.mId;
}
case clsvgs_KnowledgesLogic_User_SimEN.con_CourseKnowledgeId:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
case clsvgs_KnowledgesLogic_User_SimEN.con_KnowledgeGraphId:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
if (a.knowledgeGraphId == null) return -1;
if (b.knowledgeGraphId == null) return 1;
return a.knowledgeGraphId.localeCompare(b.knowledgeGraphId);
}
case clsvgs_KnowledgesLogic_User_SimEN.con_ClassName:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
if (a.className == null) return -1;
if (b.className == null) return 1;
return a.className.localeCompare(b.className);
}
case clsvgs_KnowledgesLogic_User_SimEN.con_CourseId:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsvgs_KnowledgesLogic_User_SimEN.con_IdCurrEduCls:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvgs_KnowledgesLogic_User_SimEN.con_UserId:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
return a.userId.localeCompare(b.userId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_KnowledgesLogic_User_Sim]中不存在!(in ${ vgs_KnowledgesLogic_User_Sim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvgs_KnowledgesLogic_User_SimEN.con_mId:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
return b.mId-a.mId;
}
case clsvgs_KnowledgesLogic_User_SimEN.con_CourseKnowledgeId:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
}
case clsvgs_KnowledgesLogic_User_SimEN.con_KnowledgeGraphId:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
if (b.knowledgeGraphId == null) return -1;
if (a.knowledgeGraphId == null) return 1;
return b.knowledgeGraphId.localeCompare(a.knowledgeGraphId);
}
case clsvgs_KnowledgesLogic_User_SimEN.con_ClassName:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
if (b.className == null) return -1;
if (a.className == null) return 1;
return b.className.localeCompare(a.className);
}
case clsvgs_KnowledgesLogic_User_SimEN.con_CourseId:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsvgs_KnowledgesLogic_User_SimEN.con_IdCurrEduCls:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvgs_KnowledgesLogic_User_SimEN.con_UserId:
return (a: clsvgs_KnowledgesLogic_User_SimEN, b: clsvgs_KnowledgesLogic_User_SimEN) => {
return b.userId.localeCompare(a.userId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_KnowledgesLogic_User_Sim]中不存在!(in ${ vgs_KnowledgesLogic_User_Sim_ConstructorName}.${ strThisFuncName})`;
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
export  async function vgs_KnowledgesLogic_User_Sim_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvgs_KnowledgesLogic_User_SimEN.con_mId:
return (obj: clsvgs_KnowledgesLogic_User_SimEN) => {
return obj.mId === value;
}
case clsvgs_KnowledgesLogic_User_SimEN.con_CourseKnowledgeId:
return (obj: clsvgs_KnowledgesLogic_User_SimEN) => {
return obj.courseKnowledgeId === value;
}
case clsvgs_KnowledgesLogic_User_SimEN.con_KnowledgeGraphId:
return (obj: clsvgs_KnowledgesLogic_User_SimEN) => {
return obj.knowledgeGraphId === value;
}
case clsvgs_KnowledgesLogic_User_SimEN.con_ClassName:
return (obj: clsvgs_KnowledgesLogic_User_SimEN) => {
return obj.className === value;
}
case clsvgs_KnowledgesLogic_User_SimEN.con_CourseId:
return (obj: clsvgs_KnowledgesLogic_User_SimEN) => {
return obj.courseId === value;
}
case clsvgs_KnowledgesLogic_User_SimEN.con_IdCurrEduCls:
return (obj: clsvgs_KnowledgesLogic_User_SimEN) => {
return obj.idCurrEduCls === value;
}
case clsvgs_KnowledgesLogic_User_SimEN.con_UserId:
return (obj: clsvgs_KnowledgesLogic_User_SimEN) => {
return obj.userId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_KnowledgesLogic_User_Sim]中不存在!(in ${ vgs_KnowledgesLogic_User_Sim_ConstructorName}.${ strThisFuncName})`;
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
export  async function vgs_KnowledgesLogic_User_Sim_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsvgs_KnowledgesLogic_User_SimWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvgs_KnowledgesLogic_User_SimWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvgs_KnowledgesLogic_User_SimEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvgs_KnowledgesLogic_User_SimEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvgs_KnowledgesLogic_User_SimEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngmId = Number(strInValue);
if (lngmId == 0)
{
return "";
}
const objvgs_KnowledgesLogic_User_Sim = await vgs_KnowledgesLogic_User_Sim_GetObjBymIdCache(lngmId , strCourseIdClassfy);
if (objvgs_KnowledgesLogic_User_Sim == null) return "";
if (objvgs_KnowledgesLogic_User_Sim.GetFldValue(strOutFldName) == null) return "";
return objvgs_KnowledgesLogic_User_Sim.GetFldValue(strOutFldName).toString();
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
export  async function vgs_KnowledgesLogic_User_Sim_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsvgs_KnowledgesLogic_User_SimWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvgs_KnowledgesLogic_User_SimWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvgs_KnowledgesLogic_User_SimEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrvgs_KnowledgesLogic_User_Sim = await vgs_KnowledgesLogic_User_Sim_GetObjLstCache(strCourseIdClassfy);
if (arrvgs_KnowledgesLogic_User_Sim == null) return [];
let arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_Sim;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvgs_KnowledgesLogic_User_SimSel.length == 0) return [];
return arrvgs_KnowledgesLogic_User_SimSel.map(x=>x.mId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vgs_KnowledgesLogic_User_Sim_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetFirstObjAsync(strWhereCond: string): Promise<clsvgs_KnowledgesLogic_User_SimEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const objvgs_KnowledgesLogic_User_Sim = vgs_KnowledgesLogic_User_Sim_GetObjFromJsonObj(returnObj);
return objvgs_KnowledgesLogic_User_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvgs_KnowledgesLogic_User_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvgs_KnowledgesLogic_User_SimEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsvgs_KnowledgesLogic_User_SimEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvgs_KnowledgesLogic_User_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvgs_KnowledgesLogic_User_SimEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvgs_KnowledgesLogic_User_SimExObjLstCache: Array<clsvgs_KnowledgesLogic_User_SimEN> = CacheHelper.Get(strKey);
const arrvgs_KnowledgesLogic_User_SimObjLstT = vgs_KnowledgesLogic_User_Sim_GetObjLstByJSONObjLst(arrvgs_KnowledgesLogic_User_SimExObjLstCache);
return arrvgs_KnowledgesLogic_User_SimObjLstT;
}
try
{
const arrvgs_KnowledgesLogic_User_SimExObjLst = await vgs_KnowledgesLogic_User_Sim_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvgs_KnowledgesLogic_User_SimExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvgs_KnowledgesLogic_User_SimExObjLst.length);
console.log(strInfo);
return arrvgs_KnowledgesLogic_User_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvgs_KnowledgesLogic_User_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvgs_KnowledgesLogic_User_SimEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvgs_KnowledgesLogic_User_SimEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsvgs_KnowledgesLogic_User_SimEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvgs_KnowledgesLogic_User_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvgs_KnowledgesLogic_User_SimEN.CacheAddiCondition);
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
const arrvgs_KnowledgesLogic_User_SimExObjLstCache: Array<clsvgs_KnowledgesLogic_User_SimEN> = JSON.parse(strTempObjLst);
const arrvgs_KnowledgesLogic_User_SimObjLstT = vgs_KnowledgesLogic_User_Sim_GetObjLstByJSONObjLst(arrvgs_KnowledgesLogic_User_SimExObjLstCache);
return arrvgs_KnowledgesLogic_User_SimObjLstT;
}
try
{
const arrvgs_KnowledgesLogic_User_SimExObjLst = await vgs_KnowledgesLogic_User_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvgs_KnowledgesLogic_User_SimEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrvgs_KnowledgesLogic_User_SimExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvgs_KnowledgesLogic_User_SimExObjLst.length);
console.log(strInfo);
return arrvgs_KnowledgesLogic_User_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvgs_KnowledgesLogic_User_SimEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvgs_KnowledgesLogic_User_SimObjLstCache: Array<clsvgs_KnowledgesLogic_User_SimEN> = JSON.parse(strTempObjLst);
return arrvgs_KnowledgesLogic_User_SimObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvgs_KnowledgesLogic_User_SimEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_KnowledgesLogic_User_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvgs_KnowledgesLogic_User_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvgs_KnowledgesLogic_User_SimEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvgs_KnowledgesLogic_User_SimEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsvgs_KnowledgesLogic_User_SimEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvgs_KnowledgesLogic_User_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvgs_KnowledgesLogic_User_SimEN.CacheAddiCondition);
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
const arrvgs_KnowledgesLogic_User_SimExObjLstCache: Array<clsvgs_KnowledgesLogic_User_SimEN> = JSON.parse(strTempObjLst);
const arrvgs_KnowledgesLogic_User_SimObjLstT = vgs_KnowledgesLogic_User_Sim_GetObjLstByJSONObjLst(arrvgs_KnowledgesLogic_User_SimExObjLstCache);
return arrvgs_KnowledgesLogic_User_SimObjLstT;
}
try
{
const arrvgs_KnowledgesLogic_User_SimExObjLst = await vgs_KnowledgesLogic_User_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvgs_KnowledgesLogic_User_SimEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrvgs_KnowledgesLogic_User_SimExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvgs_KnowledgesLogic_User_SimExObjLst.length);
console.log(strInfo);
return arrvgs_KnowledgesLogic_User_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvgs_KnowledgesLogic_User_SimEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvgs_KnowledgesLogic_User_SimObjLstCache: Array<clsvgs_KnowledgesLogic_User_SimEN> = JSON.parse(strTempObjLst);
return arrvgs_KnowledgesLogic_User_SimObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstCache(strCourseId: string): Promise<Array<clsvgs_KnowledgesLogic_User_SimEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvgs_KnowledgesLogic_User_SimWApi.vgs_KnowledgesLogic_User_Sim_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvgs_KnowledgesLogic_User_SimWApi.vgs_KnowledgesLogic_User_Sim_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrvgs_KnowledgesLogic_User_SimObjLstCache;
switch (clsvgs_KnowledgesLogic_User_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstClientCache(strCourseId);
break;
default:
arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstClientCache(strCourseId);
break;
}
return arrvgs_KnowledgesLogic_User_SimObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvgs_KnowledgesLogic_User_SimObjLstCache;
switch (clsvgs_KnowledgesLogic_User_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrvgs_KnowledgesLogic_User_SimObjLstCache = null;
break;
default:
arrvgs_KnowledgesLogic_User_SimObjLstCache = null;
break;
}
return arrvgs_KnowledgesLogic_User_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vgs_KnowledgesLogic_User_Sim_GetSubObjLstCache(objvgs_KnowledgesLogic_User_SimCond: clsvgs_KnowledgesLogic_User_SimEN ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstCache(strCourseId);
let arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimObjLstCache;
if (objvgs_KnowledgesLogic_User_SimCond.sfFldComparisonOp == null || objvgs_KnowledgesLogic_User_SimCond.sfFldComparisonOp == "") return arrvgs_KnowledgesLogic_User_SimSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvgs_KnowledgesLogic_User_SimCond.sfFldComparisonOp);
//console.log("clsvgs_KnowledgesLogic_User_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvgs_KnowledgesLogic_User_SimCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvgs_KnowledgesLogic_User_SimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvgs_KnowledgesLogic_User_SimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvgs_KnowledgesLogic_User_SimCond), vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvgs_KnowledgesLogic_User_SimEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvgs_KnowledgesLogic_User_SimEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_KnowledgesLogic_User_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstBymIdLstCache(arrmIdLst: Array<number> ,strCourseId: string) {
const strThisFuncName = "GetObjLstBymIdLstCache";
try
{
const arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstCache(strCourseId);
const arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimObjLstCache.filter(x => arrmIdLst.indexOf(x.mId)>-1);
return arrvgs_KnowledgesLogic_User_SimSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrmIdLst.join(","), vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvgs_KnowledgesLogic_User_SimEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_KnowledgesLogic_User_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvgs_KnowledgesLogic_User_SimEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_KnowledgesLogic_User_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvgs_KnowledgesLogic_User_SimEN>();
const arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstCache(strCourseId);
if (arrvgs_KnowledgesLogic_User_SimObjLstCache.length == 0) return arrvgs_KnowledgesLogic_User_SimObjLstCache;
let arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvgs_KnowledgesLogic_User_SimCond = new clsvgs_KnowledgesLogic_User_SimEN();
ObjectAssign(objvgs_KnowledgesLogic_User_SimCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvgs_KnowledgesLogic_User_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvgs_KnowledgesLogic_User_SimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvgs_KnowledgesLogic_User_SimSel.length == 0) return arrvgs_KnowledgesLogic_User_SimSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.sort(vgs_KnowledgesLogic_User_Sim_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.sort(objPagerPara.sortFun);
}
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.slice(intStart, intEnd);     
return arrvgs_KnowledgesLogic_User_SimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvgs_KnowledgesLogic_User_SimEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vgs_KnowledgesLogic_User_Sim_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvgs_KnowledgesLogic_User_SimEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvgs_KnowledgesLogic_User_SimEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_KnowledgesLogic_User_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_IsExistRecordCache(objvgs_KnowledgesLogic_User_SimCond: clsvgs_KnowledgesLogic_User_SimEN,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstCache(strCourseId);
if (arrvgs_KnowledgesLogic_User_SimObjLstCache == null) return false;
let arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimObjLstCache;
if (objvgs_KnowledgesLogic_User_SimCond.sfFldComparisonOp == null || objvgs_KnowledgesLogic_User_SimCond.sfFldComparisonOp == "") return arrvgs_KnowledgesLogic_User_SimSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvgs_KnowledgesLogic_User_SimCond.sfFldComparisonOp);
//console.log("clsvgs_KnowledgesLogic_User_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvgs_KnowledgesLogic_User_SimCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvgs_KnowledgesLogic_User_SimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvgs_KnowledgesLogic_User_SimSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvgs_KnowledgesLogic_User_SimCond), vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_IsExistCache(lngmId:number,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstCache(strCourseId);
if (arrvgs_KnowledgesLogic_User_SimObjLstCache == null) return false;
try
{
const arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimObjLstCache.filter(x => x.mId == lngmId);
if (arrvgs_KnowledgesLogic_User_SimSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngmId, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  async function vgs_KnowledgesLogic_User_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vgs_KnowledgesLogic_User_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
 * @param objvgs_KnowledgesLogic_User_SimCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vgs_KnowledgesLogic_User_Sim_GetRecCountByCondCache(objvgs_KnowledgesLogic_User_SimCond: clsvgs_KnowledgesLogic_User_SimEN ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvgs_KnowledgesLogic_User_SimObjLstCache = await vgs_KnowledgesLogic_User_Sim_GetObjLstCache(strCourseId);
if (arrvgs_KnowledgesLogic_User_SimObjLstCache == null) return 0;
let arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimObjLstCache;
if (objvgs_KnowledgesLogic_User_SimCond.sfFldComparisonOp == null || objvgs_KnowledgesLogic_User_SimCond.sfFldComparisonOp == "") return arrvgs_KnowledgesLogic_User_SimSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvgs_KnowledgesLogic_User_SimCond.sfFldComparisonOp);
//console.log("clsvgs_KnowledgesLogic_User_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvgs_KnowledgesLogic_User_SimCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvgs_KnowledgesLogic_User_SimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvgs_KnowledgesLogic_User_SimSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvgs_KnowledgesLogic_User_SimCond), vgs_KnowledgesLogic_User_Sim_ConstructorName, strThisFuncName);
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
export  function vgs_KnowledgesLogic_User_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vgs_KnowledgesLogic_User_Sim_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsvgs_KnowledgesLogic_User_SimWApi.vgs_KnowledgesLogic_User_Sim_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvgs_KnowledgesLogic_User_SimWApi.vgs_KnowledgesLogic_User_Sim_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvgs_KnowledgesLogic_User_SimEN._CurrTabName, strCourseId);
switch (clsvgs_KnowledgesLogic_User_SimEN.CacheModeId)
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
clsvgs_KnowledgesLogic_User_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function vgs_KnowledgesLogic_User_Sim_GetLastRefreshTime():string
{
if (clsvgs_KnowledgesLogic_User_SimEN._RefreshTimeLst.length == 0) return "";
return clsvgs_KnowledgesLogic_User_SimEN._RefreshTimeLst[clsvgs_KnowledgesLogic_User_SimEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vgs_KnowledgesLogic_User_Sim_GetJSONStrByObj (pobjvgs_KnowledgesLogic_User_SimEN: clsvgs_KnowledgesLogic_User_SimEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvgs_KnowledgesLogic_User_SimEN);
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
export  function vgs_KnowledgesLogic_User_Sim_GetObjLstByJSONStr (strJSON: string): Array<clsvgs_KnowledgesLogic_User_SimEN>
{
let arrvgs_KnowledgesLogic_User_SimObjLst = new Array<clsvgs_KnowledgesLogic_User_SimEN>();
if (strJSON === "")
{
return arrvgs_KnowledgesLogic_User_SimObjLst;
}
try
{
arrvgs_KnowledgesLogic_User_SimObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvgs_KnowledgesLogic_User_SimObjLst;
}
return arrvgs_KnowledgesLogic_User_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_KnowledgesLogic_User_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vgs_KnowledgesLogic_User_Sim_GetObjLstByJSONObjLst (arrvgs_KnowledgesLogic_User_SimObjLstS: Array<clsvgs_KnowledgesLogic_User_SimEN>): Array<clsvgs_KnowledgesLogic_User_SimEN>
{
const arrvgs_KnowledgesLogic_User_SimObjLst = new Array<clsvgs_KnowledgesLogic_User_SimEN>();
for (const objInFor of arrvgs_KnowledgesLogic_User_SimObjLstS) {
const obj1 = vgs_KnowledgesLogic_User_Sim_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvgs_KnowledgesLogic_User_SimObjLst.push(obj1);
}
return arrvgs_KnowledgesLogic_User_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vgs_KnowledgesLogic_User_Sim_GetObjByJSONStr (strJSON: string): clsvgs_KnowledgesLogic_User_SimEN
{
let pobjvgs_KnowledgesLogic_User_SimEN = new clsvgs_KnowledgesLogic_User_SimEN();
if (strJSON === "")
{
return pobjvgs_KnowledgesLogic_User_SimEN;
}
try
{
pobjvgs_KnowledgesLogic_User_SimEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvgs_KnowledgesLogic_User_SimEN;
}
return pobjvgs_KnowledgesLogic_User_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vgs_KnowledgesLogic_User_Sim_GetCombineCondition(objvgs_KnowledgesLogic_User_SimCond: clsvgs_KnowledgesLogic_User_SimEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp, clsvgs_KnowledgesLogic_User_SimEN.con_mId) == true)
{
const strComparisonOpmId:string = objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp[clsvgs_KnowledgesLogic_User_SimEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_KnowledgesLogic_User_SimEN.con_mId, objvgs_KnowledgesLogic_User_SimCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp, clsvgs_KnowledgesLogic_User_SimEN.con_CourseKnowledgeId) == true)
{
const strComparisonOpCourseKnowledgeId:string = objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp[clsvgs_KnowledgesLogic_User_SimEN.con_CourseKnowledgeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_KnowledgesLogic_User_SimEN.con_CourseKnowledgeId, objvgs_KnowledgesLogic_User_SimCond.courseKnowledgeId, strComparisonOpCourseKnowledgeId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp, clsvgs_KnowledgesLogic_User_SimEN.con_KnowledgeGraphId) == true)
{
const strComparisonOpKnowledgeGraphId:string = objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp[clsvgs_KnowledgesLogic_User_SimEN.con_KnowledgeGraphId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_KnowledgesLogic_User_SimEN.con_KnowledgeGraphId, objvgs_KnowledgesLogic_User_SimCond.knowledgeGraphId, strComparisonOpKnowledgeGraphId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp, clsvgs_KnowledgesLogic_User_SimEN.con_ClassName) == true)
{
const strComparisonOpClassName:string = objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp[clsvgs_KnowledgesLogic_User_SimEN.con_ClassName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_KnowledgesLogic_User_SimEN.con_ClassName, objvgs_KnowledgesLogic_User_SimCond.className, strComparisonOpClassName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp, clsvgs_KnowledgesLogic_User_SimEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp[clsvgs_KnowledgesLogic_User_SimEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_KnowledgesLogic_User_SimEN.con_CourseId, objvgs_KnowledgesLogic_User_SimCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp, clsvgs_KnowledgesLogic_User_SimEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp[clsvgs_KnowledgesLogic_User_SimEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_KnowledgesLogic_User_SimEN.con_IdCurrEduCls, objvgs_KnowledgesLogic_User_SimCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp, clsvgs_KnowledgesLogic_User_SimEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objvgs_KnowledgesLogic_User_SimCond.dicFldComparisonOp[clsvgs_KnowledgesLogic_User_SimEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_KnowledgesLogic_User_SimEN.con_UserId, objvgs_KnowledgesLogic_User_SimCond.userId, strComparisonOpUserId);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--vgs_KnowledgesLogic_User_Sim(v知识点逻辑用户关系_Sim),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strKnowledgeGraphId: 知识点图Id(要求唯一的字段)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function vgs_KnowledgesLogic_User_Sim_GetUniCondStr(objvgs_KnowledgesLogic_User_SimEN: clsvgs_KnowledgesLogic_User_SimEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and UserId = '{0}'", objvgs_KnowledgesLogic_User_SimEN.userId);
 strWhereCond +=  Format(" and KnowledgeGraphId = '{0}'", objvgs_KnowledgesLogic_User_SimEN.knowledgeGraphId);
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objvgs_KnowledgesLogic_User_SimEN.courseKnowledgeId);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objvgs_KnowledgesLogic_User_SimEN.idCurrEduCls);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--vgs_KnowledgesLogic_User_Sim(v知识点逻辑用户关系_Sim),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strKnowledgeGraphId: 知识点图Id(要求唯一的字段)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function vgs_KnowledgesLogic_User_Sim_GetUniCondStr4Update(objvgs_KnowledgesLogic_User_SimEN: clsvgs_KnowledgesLogic_User_SimEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objvgs_KnowledgesLogic_User_SimEN.mId);
 strWhereCond +=  Format(" and UserId = '{0}'", objvgs_KnowledgesLogic_User_SimEN.userId);
 strWhereCond +=  Format(" and KnowledgeGraphId = '{0}'", objvgs_KnowledgesLogic_User_SimEN.knowledgeGraphId);
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objvgs_KnowledgesLogic_User_SimEN.courseKnowledgeId);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objvgs_KnowledgesLogic_User_SimEN.idCurrEduCls);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_KnowledgesLogic_User_SimENS:源对象
 * @param objvgs_KnowledgesLogic_User_SimENT:目标对象
*/
export  function vgs_KnowledgesLogic_User_Sim_CopyObjTo(objvgs_KnowledgesLogic_User_SimENS: clsvgs_KnowledgesLogic_User_SimEN , objvgs_KnowledgesLogic_User_SimENT: clsvgs_KnowledgesLogic_User_SimEN ): void 
{
objvgs_KnowledgesLogic_User_SimENT.mId = objvgs_KnowledgesLogic_User_SimENS.mId; //mId
objvgs_KnowledgesLogic_User_SimENT.courseKnowledgeId = objvgs_KnowledgesLogic_User_SimENS.courseKnowledgeId; //知识点Id
objvgs_KnowledgesLogic_User_SimENT.knowledgeGraphId = objvgs_KnowledgesLogic_User_SimENS.knowledgeGraphId; //知识点图Id
objvgs_KnowledgesLogic_User_SimENT.className = objvgs_KnowledgesLogic_User_SimENS.className; //样式名称
objvgs_KnowledgesLogic_User_SimENT.courseId = objvgs_KnowledgesLogic_User_SimENS.courseId; //课程Id
objvgs_KnowledgesLogic_User_SimENT.idCurrEduCls = objvgs_KnowledgesLogic_User_SimENS.idCurrEduCls; //教学班流水号
objvgs_KnowledgesLogic_User_SimENT.userId = objvgs_KnowledgesLogic_User_SimENS.userId; //用户ID
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_KnowledgesLogic_User_SimENS:源对象
 * @param objvgs_KnowledgesLogic_User_SimENT:目标对象
*/
export  function vgs_KnowledgesLogic_User_Sim_GetObjFromJsonObj(objvgs_KnowledgesLogic_User_SimENS: clsvgs_KnowledgesLogic_User_SimEN): clsvgs_KnowledgesLogic_User_SimEN 
{
 const objvgs_KnowledgesLogic_User_SimENT: clsvgs_KnowledgesLogic_User_SimEN = new clsvgs_KnowledgesLogic_User_SimEN();
ObjectAssign(objvgs_KnowledgesLogic_User_SimENT, objvgs_KnowledgesLogic_User_SimENS);
 return objvgs_KnowledgesLogic_User_SimENT;
}