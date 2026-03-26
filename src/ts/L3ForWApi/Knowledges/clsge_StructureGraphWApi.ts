
 /**
 * 类名:clsge_StructureGraphWApi
 * 表名:ge_StructureGraph(01120895)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:50
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
 * 结构图谱表(ge_StructureGraph)
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
import { clsge_StructureGraphEN } from "@/ts/L0Entity/Knowledges/clsge_StructureGraphEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_StructureGraph_Controller = "ge_StructureGraphApi";
 export const ge_StructureGraph_ConstructorName = "ge_StructureGraph";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strStructureGraphId:关键字
 * @returns 对象
 **/
export  async function ge_StructureGraph_GetObjByStructureGraphIdAsync(strStructureGraphId: string): Promise<clsge_StructureGraphEN|null>  
{
const strThisFuncName = "GetObjByStructureGraphIdAsync";

if (IsNullOrEmpty(strStructureGraphId) == true)
{
  const strMsg = Format("参数:[strStructureGraphId]不能为空!(In clsge_StructureGraphWApi.GetObjByStructureGraphIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strStructureGraphId.length != 10)
{
const strMsg = Format("缓存分类变量:[strStructureGraphId]的长度:[{0}]不正确!(clsge_StructureGraphWApi.GetObjByStructureGraphIdAsync)", strStructureGraphId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByStructureGraphId";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strStructureGraphId,
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
const objge_StructureGraph = ge_StructureGraph_GetObjFromJsonObj(returnObj);
return objge_StructureGraph;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param strStructureGraphId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureGraph_GetObjByStructureGraphIdlocalStorage(strStructureGraphId: string) {
const strThisFuncName = "GetObjByStructureGraphIdlocalStorage";

if (IsNullOrEmpty(strStructureGraphId) == true)
{
  const strMsg = Format("参数:[strStructureGraphId]不能为空!(In clsge_StructureGraphWApi.GetObjByStructureGraphIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strStructureGraphId.length != 10)
{
const strMsg = Format("缓存分类变量:[strStructureGraphId]的长度:[{0}]不正确!(clsge_StructureGraphWApi.GetObjByStructureGraphIdlocalStorage)", strStructureGraphId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_StructureGraphEN._CurrTabName, strStructureGraphId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_StructureGraphCache: clsge_StructureGraphEN = JSON.parse(strTempObj);
return objge_StructureGraphCache;
}
try
{
const objge_StructureGraph = await ge_StructureGraph_GetObjByStructureGraphIdAsync(strStructureGraphId);
if (objge_StructureGraph != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_StructureGraph));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_StructureGraph;
}
return objge_StructureGraph;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strStructureGraphId, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strStructureGraphId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureGraph_GetObjByStructureGraphIdCache(strStructureGraphId:string,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByStructureGraphIdCache";

if (IsNullOrEmpty(strStructureGraphId) == true)
{
  const strMsg = Format("参数:[strStructureGraphId]不能为空!(In clsge_StructureGraphWApi.GetObjByStructureGraphIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strStructureGraphId.length != 10)
{
const strMsg = Format("缓存分类变量:[strStructureGraphId]的长度:[{0}]不正确!(clsge_StructureGraphWApi.GetObjByStructureGraphIdCache)", strStructureGraphId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstCache(strCourseId);
try
{
const arrge_StructureGraphSel = arrge_StructureGraphObjLstCache.filter(x => 
 x.structureGraphId == strStructureGraphId );
let objge_StructureGraph: clsge_StructureGraphEN;
if (arrge_StructureGraphSel.length > 0)
{
objge_StructureGraph = arrge_StructureGraphSel[0];
return objge_StructureGraph;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_StructureGraphConst = await ge_StructureGraph_GetObjByStructureGraphIdAsync(strStructureGraphId);
if (objge_StructureGraphConst != null)
{
ge_StructureGraph_ReFreshThisCache(strCourseId);
return objge_StructureGraphConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strStructureGraphId, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_StructureGraph:所给的对象
 * @returns 对象
*/
export  async function ge_StructureGraph_UpdateObjInLstCache(objge_StructureGraph: clsge_StructureGraphEN,strCourseId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstCache(strCourseId);
const obj = arrge_StructureGraphObjLstCache.find(x => x.structureGraphId == objge_StructureGraph.structureGraphId);
if (obj != null)
{
objge_StructureGraph.structureGraphId = obj.structureGraphId;
ObjectAssign( obj, objge_StructureGraph);
}
else
{
arrge_StructureGraphObjLstCache.push(objge_StructureGraph);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  function ge_StructureGraph_SortFunDefa(a:clsge_StructureGraphEN , b:clsge_StructureGraphEN): number 
{
return a.structureGraphId.localeCompare(b.structureGraphId);
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
export  function ge_StructureGraph_SortFunDefa2Fld(a:clsge_StructureGraphEN , b:clsge_StructureGraphEN): number 
{
if (a.structureGraphName == b.structureGraphName) return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
else return a.structureGraphName.localeCompare(b.structureGraphName);
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
export  function ge_StructureGraph_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_StructureGraphEN.con_StructureGraphId:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
return a.structureGraphId.localeCompare(b.structureGraphId);
}
case clsge_StructureGraphEN.con_StructureGraphName:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.structureGraphName == null) return -1;
if (b.structureGraphName == null) return 1;
return a.structureGraphName.localeCompare(b.structureGraphName);
}
case clsge_StructureGraphEN.con_IdCurrEduCls:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsge_StructureGraphEN.con_CourseId:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsge_StructureGraphEN.con_CreateUser:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.createUser == null) return -1;
if (b.createUser == null) return 1;
return a.createUser.localeCompare(b.createUser);
}
case clsge_StructureGraphEN.con_UpdDate:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_StructureGraphEN.con_UpdUser:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_StructureGraphEN.con_Memo:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsge_StructureGraphEN.con_GraphTypeId:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.graphTypeId == null) return -1;
if (b.graphTypeId == null) return 1;
return a.graphTypeId.localeCompare(b.graphTypeId);
}
case clsge_StructureGraphEN.con_IsDisplay:
return (a: clsge_StructureGraphEN) => {
if (a.isDisplay == true) return 1;
else return -1
}
case clsge_StructureGraphEN.con_IsExtend:
return (a: clsge_StructureGraphEN) => {
if (a.isExtend == true) return 1;
else return -1
}
case clsge_StructureGraphEN.con_IsRecommend:
return (a: clsge_StructureGraphEN) => {
if (a.isRecommend == true) return 1;
else return -1
}
case clsge_StructureGraphEN.con_Theme:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.theme == null) return -1;
if (b.theme == null) return 1;
return a.theme.localeCompare(b.theme);
}
case clsge_StructureGraphEN.con_IsSubmit:
return (a: clsge_StructureGraphEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsge_StructureGraphEN.con_SectionTypeId:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
return a.sectionTypeId.localeCompare(b.sectionTypeId);
}
case clsge_StructureGraphEN.con_TakeUpTime:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.takeUpTime == null) return -1;
if (b.takeUpTime == null) return 1;
return a.takeUpTime.localeCompare(b.takeUpTime);
}
case clsge_StructureGraphEN.con_SubmitTime:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.submitTime == null) return -1;
if (b.submitTime == null) return 1;
return a.submitTime.localeCompare(b.submitTime);
}
case clsge_StructureGraphEN.con_StartTime:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (a.startTime == null) return -1;
if (b.startTime == null) return 1;
return a.startTime.localeCompare(b.startTime);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureGraph]中不存在!(in ${ ge_StructureGraph_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_StructureGraphEN.con_StructureGraphId:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
return b.structureGraphId.localeCompare(a.structureGraphId);
}
case clsge_StructureGraphEN.con_StructureGraphName:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.structureGraphName == null) return -1;
if (a.structureGraphName == null) return 1;
return b.structureGraphName.localeCompare(a.structureGraphName);
}
case clsge_StructureGraphEN.con_IdCurrEduCls:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsge_StructureGraphEN.con_CourseId:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsge_StructureGraphEN.con_CreateUser:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.createUser == null) return -1;
if (a.createUser == null) return 1;
return b.createUser.localeCompare(a.createUser);
}
case clsge_StructureGraphEN.con_UpdDate:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_StructureGraphEN.con_UpdUser:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_StructureGraphEN.con_Memo:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsge_StructureGraphEN.con_GraphTypeId:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.graphTypeId == null) return -1;
if (a.graphTypeId == null) return 1;
return b.graphTypeId.localeCompare(a.graphTypeId);
}
case clsge_StructureGraphEN.con_IsDisplay:
return (b: clsge_StructureGraphEN) => {
if (b.isDisplay == true) return 1;
else return -1
}
case clsge_StructureGraphEN.con_IsExtend:
return (b: clsge_StructureGraphEN) => {
if (b.isExtend == true) return 1;
else return -1
}
case clsge_StructureGraphEN.con_IsRecommend:
return (b: clsge_StructureGraphEN) => {
if (b.isRecommend == true) return 1;
else return -1
}
case clsge_StructureGraphEN.con_Theme:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.theme == null) return -1;
if (a.theme == null) return 1;
return b.theme.localeCompare(a.theme);
}
case clsge_StructureGraphEN.con_IsSubmit:
return (b: clsge_StructureGraphEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsge_StructureGraphEN.con_SectionTypeId:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
return b.sectionTypeId.localeCompare(a.sectionTypeId);
}
case clsge_StructureGraphEN.con_TakeUpTime:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.takeUpTime == null) return -1;
if (a.takeUpTime == null) return 1;
return b.takeUpTime.localeCompare(a.takeUpTime);
}
case clsge_StructureGraphEN.con_SubmitTime:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.submitTime == null) return -1;
if (a.submitTime == null) return 1;
return b.submitTime.localeCompare(a.submitTime);
}
case clsge_StructureGraphEN.con_StartTime:
return (a: clsge_StructureGraphEN, b: clsge_StructureGraphEN) => {
if (b.startTime == null) return -1;
if (a.startTime == null) return 1;
return b.startTime.localeCompare(a.startTime);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureGraph]中不存在!(in ${ ge_StructureGraph_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strStructureGraphId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureGraph_GetNameByStructureGraphIdCache(strStructureGraphId: string,strCourseId: string) {

if (IsNullOrEmpty(strStructureGraphId) == true)
{
  const strMsg = Format("参数:[strStructureGraphId]不能为空!(In clsge_StructureGraphWApi.GetNameByStructureGraphIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strStructureGraphId.length != 10)
{
const strMsg = Format("缓存分类变量:[strStructureGraphId]的长度:[{0}]不正确!(clsge_StructureGraphWApi.GetNameByStructureGraphIdCache)", strStructureGraphId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstCache(strCourseId);
if (arrge_StructureGraphObjLstCache == null) return "";
try
{
const arrge_StructureGraphSel = arrge_StructureGraphObjLstCache.filter(x => 
 x.structureGraphId == strStructureGraphId );
let objge_StructureGraph: clsge_StructureGraphEN;
if (arrge_StructureGraphSel.length > 0)
{
objge_StructureGraph = arrge_StructureGraphSel[0];
return objge_StructureGraph.structureGraphName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strStructureGraphId);
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
export  async function ge_StructureGraph_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_StructureGraphEN.con_StructureGraphId:
return (obj: clsge_StructureGraphEN) => {
return obj.structureGraphId === value;
}
case clsge_StructureGraphEN.con_StructureGraphName:
return (obj: clsge_StructureGraphEN) => {
return obj.structureGraphName === value;
}
case clsge_StructureGraphEN.con_IdCurrEduCls:
return (obj: clsge_StructureGraphEN) => {
return obj.idCurrEduCls === value;
}
case clsge_StructureGraphEN.con_CourseId:
return (obj: clsge_StructureGraphEN) => {
return obj.courseId === value;
}
case clsge_StructureGraphEN.con_CreateUser:
return (obj: clsge_StructureGraphEN) => {
return obj.createUser === value;
}
case clsge_StructureGraphEN.con_UpdDate:
return (obj: clsge_StructureGraphEN) => {
return obj.updDate === value;
}
case clsge_StructureGraphEN.con_UpdUser:
return (obj: clsge_StructureGraphEN) => {
return obj.updUser === value;
}
case clsge_StructureGraphEN.con_Memo:
return (obj: clsge_StructureGraphEN) => {
return obj.memo === value;
}
case clsge_StructureGraphEN.con_GraphTypeId:
return (obj: clsge_StructureGraphEN) => {
return obj.graphTypeId === value;
}
case clsge_StructureGraphEN.con_IsDisplay:
return (obj: clsge_StructureGraphEN) => {
return obj.isDisplay === value;
}
case clsge_StructureGraphEN.con_IsExtend:
return (obj: clsge_StructureGraphEN) => {
return obj.isExtend === value;
}
case clsge_StructureGraphEN.con_IsRecommend:
return (obj: clsge_StructureGraphEN) => {
return obj.isRecommend === value;
}
case clsge_StructureGraphEN.con_Theme:
return (obj: clsge_StructureGraphEN) => {
return obj.theme === value;
}
case clsge_StructureGraphEN.con_IsSubmit:
return (obj: clsge_StructureGraphEN) => {
return obj.isSubmit === value;
}
case clsge_StructureGraphEN.con_SectionTypeId:
return (obj: clsge_StructureGraphEN) => {
return obj.sectionTypeId === value;
}
case clsge_StructureGraphEN.con_TakeUpTime:
return (obj: clsge_StructureGraphEN) => {
return obj.takeUpTime === value;
}
case clsge_StructureGraphEN.con_SubmitTime:
return (obj: clsge_StructureGraphEN) => {
return obj.submitTime === value;
}
case clsge_StructureGraphEN.con_StartTime:
return (obj: clsge_StructureGraphEN) => {
return obj.startTime === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureGraph]中不存在!(in ${ ge_StructureGraph_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_StructureGraph_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_StructureGraphWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_StructureGraphWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsge_StructureGraphEN.con_StructureGraphId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_StructureGraphEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_StructureGraphEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strStructureGraphId = strInValue;
if (IsNullOrEmpty(strStructureGraphId) == true)
{
return "";
}
const objge_StructureGraph = await ge_StructureGraph_GetObjByStructureGraphIdCache(strStructureGraphId , strCourseIdClassfy);
if (objge_StructureGraph == null) return "";
if (objge_StructureGraph.GetFldValue(strOutFldName) == null) return "";
return objge_StructureGraph.GetFldValue(strOutFldName).toString();
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
export  async function ge_StructureGraph_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_StructureGraphWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_StructureGraphWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsge_StructureGraphEN.con_StructureGraphId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_StructureGraph = await ge_StructureGraph_GetObjLstCache(strCourseIdClassfy);
if (arrge_StructureGraph == null) return [];
let arrge_StructureGraphSel = arrge_StructureGraph;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_StructureGraphSel.length == 0) return [];
return arrge_StructureGraphSel.map(x=>x.structureGraphId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StructureGraph_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_GetFirstObjAsync(strWhereCond: string): Promise<clsge_StructureGraphEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const objge_StructureGraph = ge_StructureGraph_GetObjFromJsonObj(returnObj);
return objge_StructureGraph;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_StructureGraphEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_StructureGraphEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsge_StructureGraphEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_StructureGraphEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_StructureGraphEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_StructureGraphExObjLstCache: Array<clsge_StructureGraphEN> = CacheHelper.Get(strKey);
const arrge_StructureGraphObjLstT = ge_StructureGraph_GetObjLstByJSONObjLst(arrge_StructureGraphExObjLstCache);
return arrge_StructureGraphObjLstT;
}
try
{
const arrge_StructureGraphExObjLst = await ge_StructureGraph_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_StructureGraphExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_StructureGraphExObjLst.length);
console.log(strInfo);
return arrge_StructureGraphExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureGraph_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_StructureGraphEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_StructureGraphEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_StructureGraphEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_StructureGraphEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_StructureGraphEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_StructureGraphEN.CacheAddiCondition);
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
const arrge_StructureGraphExObjLstCache: Array<clsge_StructureGraphEN> = JSON.parse(strTempObjLst);
const arrge_StructureGraphObjLstT = ge_StructureGraph_GetObjLstByJSONObjLst(arrge_StructureGraphExObjLstCache);
return arrge_StructureGraphObjLstT;
}
try
{
const arrge_StructureGraphExObjLst = await ge_StructureGraph_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_StructureGraphExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_StructureGraphExObjLst.length);
console.log(strInfo);
return arrge_StructureGraphExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureGraph_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_StructureGraphEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_StructureGraphObjLstCache: Array<clsge_StructureGraphEN> = JSON.parse(strTempObjLst);
return arrge_StructureGraphObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_StructureGraph_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_StructureGraphEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureGraph_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_StructureGraphEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_StructureGraphEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_StructureGraphEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_StructureGraphEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_StructureGraphEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_StructureGraphEN.CacheAddiCondition);
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
const arrge_StructureGraphExObjLstCache: Array<clsge_StructureGraphEN> = JSON.parse(strTempObjLst);
const arrge_StructureGraphObjLstT = ge_StructureGraph_GetObjLstByJSONObjLst(arrge_StructureGraphExObjLstCache);
return arrge_StructureGraphObjLstT;
}
try
{
const arrge_StructureGraphExObjLst = await ge_StructureGraph_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_StructureGraphExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_StructureGraphExObjLst.length);
console.log(strInfo);
return arrge_StructureGraphExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureGraph_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_StructureGraphEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_StructureGraphObjLstCache: Array<clsge_StructureGraphEN> = JSON.parse(strTempObjLst);
return arrge_StructureGraphObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureGraph_GetObjLstCache(strCourseId: string): Promise<Array<clsge_StructureGraphEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_StructureGraphWApi.ge_StructureGraph_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_StructureGraphWApi.ge_StructureGraph_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrge_StructureGraphObjLstCache;
switch (clsge_StructureGraphEN.CacheModeId)
{
case "04"://sessionStorage
arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstClientCache(strCourseId);
break;
default:
arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstClientCache(strCourseId);
break;
}
return arrge_StructureGraphObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureGraph_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_StructureGraphObjLstCache;
switch (clsge_StructureGraphEN.CacheModeId)
{
case "04"://sessionStorage
arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrge_StructureGraphObjLstCache = null;
break;
default:
arrge_StructureGraphObjLstCache = null;
break;
}
return arrge_StructureGraphObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrStructureGraphIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_StructureGraph_GetSubObjLstCache(objge_StructureGraphCond: clsge_StructureGraphEN ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstCache(strCourseId);
let arrge_StructureGraphSel = arrge_StructureGraphObjLstCache;
if (objge_StructureGraphCond.sfFldComparisonOp == null || objge_StructureGraphCond.sfFldComparisonOp == "") return arrge_StructureGraphSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_StructureGraphCond.sfFldComparisonOp);
//console.log("clsge_StructureGraphWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_StructureGraphCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_StructureGraphCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_StructureGraphSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_StructureGraphCond), ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_StructureGraphEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrStructureGraphId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_StructureGraph_GetObjLstByStructureGraphIdLstAsync(arrStructureGraphId: Array<string>): Promise<Array<clsge_StructureGraphEN>>  
{
const strThisFuncName = "GetObjLstByStructureGraphIdLstAsync";
const strAction = "GetObjLstByStructureGraphIdLst";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrStructureGraphId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureGraph_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param arrstrStructureGraphIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_StructureGraph_GetObjLstByStructureGraphIdLstCache(arrStructureGraphIdLst: Array<string> ,strCourseId: string) {
const strThisFuncName = "GetObjLstByStructureGraphIdLstCache";
try
{
const arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstCache(strCourseId);
const arrge_StructureGraphSel = arrge_StructureGraphObjLstCache.filter(x => arrStructureGraphIdLst.indexOf(x.structureGraphId)>-1);
return arrge_StructureGraphSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrStructureGraphIdLst.join(","), ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_StructureGraphEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureGraph_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_StructureGraphEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureGraph_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_StructureGraphEN>();
const arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstCache(strCourseId);
if (arrge_StructureGraphObjLstCache.length == 0) return arrge_StructureGraphObjLstCache;
let arrge_StructureGraphSel = arrge_StructureGraphObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_StructureGraphCond = new clsge_StructureGraphEN();
ObjectAssign(objge_StructureGraphCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_StructureGraphWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_StructureGraphCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_StructureGraphSel.length == 0) return arrge_StructureGraphSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_StructureGraphSel = arrge_StructureGraphSel.sort(ge_StructureGraph_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_StructureGraphSel = arrge_StructureGraphSel.sort(objPagerPara.sortFun);
}
arrge_StructureGraphSel = arrge_StructureGraphSel.slice(intStart, intEnd);     
return arrge_StructureGraphSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_StructureGraphEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_StructureGraph_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_StructureGraphEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_StructureGraphEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureGraph_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param strStructureGraphId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_StructureGraph_DelRecordAsync(strStructureGraphId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strStructureGraphId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param arrStructureGraphId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_StructureGraph_Delge_StructureGraphsAsync(arrStructureGraphId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_StructureGraphsAsync";
const strAction = "Delge_StructureGraphs";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrStructureGraphId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_Delge_StructureGraphsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_StructureGraphsByCondAsync";
const strAction = "Delge_StructureGraphsByCond";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param objge_StructureGraphEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureGraph_AddNewRecordAsync(objge_StructureGraphEN: clsge_StructureGraphEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_StructureGraphEN);
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureGraphEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param objge_StructureGraphEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureGraph_AddNewRecordWithMaxIdAsync(objge_StructureGraphEN: clsge_StructureGraphEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureGraphEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_AddNewObjSave(objge_StructureGraphEN: clsge_StructureGraphEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_StructureGraph_CheckPropertyNew(objge_StructureGraphEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StructureGraph_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StructureGraph_CheckUniCond4Add(objge_StructureGraphEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_StructureGraph_AddNewRecordWithMaxIdAsync(objge_StructureGraphEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
ge_StructureGraph_ReFreshCache(objge_StructureGraphEN.courseId);
}
else
{
const strInfo = `添加[结构图谱表(ge_StructureGraph)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_StructureGraph_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_StructureGraph_CheckUniCond4Add(objge_StructureGraphEN: clsge_StructureGraphEN): Promise<boolean>{
const strUniquenessCondition = ge_StructureGraph_GetUniCondStr(objge_StructureGraphEN);
const bolIsExistCondition = await ge_StructureGraph_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StructureGraph_CheckUniCond4Update(objge_StructureGraphEN: clsge_StructureGraphEN): Promise<boolean>{
const strUniquenessCondition = ge_StructureGraph_GetUniCondStr4Update(objge_StructureGraphEN);
const bolIsExistCondition = await ge_StructureGraph_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StructureGraph_UpdateObjSave(objge_StructureGraphEN: clsge_StructureGraphEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_StructureGraphEN.sfUpdFldSetStr = objge_StructureGraphEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_StructureGraphEN.structureGraphId == "" || objge_StructureGraphEN.structureGraphId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_StructureGraph_CheckProperty4Update(objge_StructureGraphEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StructureGraph_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StructureGraph_CheckUniCond4Update(objge_StructureGraphEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_StructureGraph_UpdateRecordAsync(objge_StructureGraphEN);
if (returnBool == true)
{
ge_StructureGraph_ReFreshCache(objge_StructureGraphEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_StructureGraph_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_StructureGraphEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_StructureGraph_AddNewRecordWithReturnKeyAsync(objge_StructureGraphEN: clsge_StructureGraphEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureGraphEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param objge_StructureGraphEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StructureGraph_UpdateRecordAsync(objge_StructureGraphEN: clsge_StructureGraphEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_StructureGraphEN.sfUpdFldSetStr === undefined || objge_StructureGraphEN.sfUpdFldSetStr === null || objge_StructureGraphEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureGraphEN.structureGraphId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureGraphEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param objge_StructureGraphEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StructureGraph_EditRecordExAsync(objge_StructureGraphEN: clsge_StructureGraphEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_StructureGraphEN.sfUpdFldSetStr === undefined || objge_StructureGraphEN.sfUpdFldSetStr === null || objge_StructureGraphEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureGraphEN.structureGraphId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureGraphEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param objge_StructureGraphEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StructureGraph_UpdateWithConditionAsync(objge_StructureGraphEN: clsge_StructureGraphEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_StructureGraphEN.sfUpdFldSetStr === undefined || objge_StructureGraphEN.sfUpdFldSetStr === null || objge_StructureGraphEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureGraphEN.structureGraphId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);
objge_StructureGraphEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureGraphEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param objstrStructureGraphIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_StructureGraph_IsExistRecordCache(objge_StructureGraphCond: clsge_StructureGraphEN,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstCache(strCourseId);
if (arrge_StructureGraphObjLstCache == null) return false;
let arrge_StructureGraphSel = arrge_StructureGraphObjLstCache;
if (objge_StructureGraphCond.sfFldComparisonOp == null || objge_StructureGraphCond.sfFldComparisonOp == "") return arrge_StructureGraphSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_StructureGraphCond.sfFldComparisonOp);
//console.log("clsge_StructureGraphWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_StructureGraphCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_StructureGraphCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_StructureGraphSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_StructureGraphCond), ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param strStructureGraphId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureGraph_IsExistCache(strStructureGraphId:string,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstCache(strCourseId);
if (arrge_StructureGraphObjLstCache == null) return false;
try
{
const arrge_StructureGraphSel = arrge_StructureGraphObjLstCache.filter(x => x.structureGraphId == strStructureGraphId);
if (arrge_StructureGraphSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strStructureGraphId, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strStructureGraphId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_StructureGraph_IsExistAsync(strStructureGraphId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strStructureGraphId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
 * @param objge_StructureGraphCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_StructureGraph_GetRecCountByCondCache(objge_StructureGraphCond: clsge_StructureGraphEN ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_StructureGraphObjLstCache = await ge_StructureGraph_GetObjLstCache(strCourseId);
if (arrge_StructureGraphObjLstCache == null) return 0;
let arrge_StructureGraphSel = arrge_StructureGraphObjLstCache;
if (objge_StructureGraphCond.sfFldComparisonOp == null || objge_StructureGraphCond.sfFldComparisonOp == "") return arrge_StructureGraphSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_StructureGraphCond.sfFldComparisonOp);
//console.log("clsge_StructureGraphWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_StructureGraphCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_StructureGraphCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureGraphSel = arrge_StructureGraphSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_StructureGraphSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_StructureGraphCond), ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  async function ge_StructureGraph_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_StructureGraph_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureGraph_ConstructorName, strThisFuncName);
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
export  function ge_StructureGraph_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_StructureGraph_ReFreshCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_StructureGraphWApi.clsge_StructureGraphWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_StructureGraphWApi.clsge_StructureGraphWApi.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsge_StructureGraphEN._CurrTabName, strCourseId);
switch (clsge_StructureGraphEN.CacheModeId)
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
clsge_StructureGraphEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_StructureGraph_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_StructureGraphWApi.ge_StructureGraph_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_StructureGraphWApi.ge_StructureGraph_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsge_StructureGraphEN._CurrTabName, strCourseId);
switch (clsge_StructureGraphEN.CacheModeId)
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
clsge_StructureGraphEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_StructureGraph_GetLastRefreshTime():string
{
if (clsge_StructureGraphEN._RefreshTimeLst.length == 0) return "";
return clsge_StructureGraphEN._RefreshTimeLst[clsge_StructureGraphEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function ge_StructureGraph_Cache(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_StructureGraphWApi.)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_StructureGraphWApi.)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrObjLstSel = await ge_StructureGraph_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_StructureGraphEN.con_StructureGraphId, clsge_StructureGraphEN.con_StructureGraphName, "结构图谱表...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function ge_StructureGraph_GetArrge_StructureGraph(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_StructureGraphWApi.)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_StructureGraphWApi.)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrge_StructureGraph = new Array<clsge_StructureGraphEN>();
const arrObjLstSel = await ge_StructureGraph_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return null;
const obj0 = new clsge_StructureGraphEN();
obj0.structureGraphId = '0';
obj0.structureGraphName = '选结构图谱表...';
arrge_StructureGraph.push(obj0);
arrObjLstSel.forEach(x => arrge_StructureGraph.push(x));
return arrge_StructureGraph;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StructureGraph_CheckPropertyNew(pobjge_StructureGraphEN: clsge_StructureGraphEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_StructureGraphEN.sectionTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[节点类型Id]不能为空(In 结构图谱表)!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StructureGraphEN.structureGraphId) == false && GetStrLen(pobjge_StructureGraphEN.structureGraphId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[知识图谱Id(structureGraphId)]的长度不能超过10(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.structureGraphId}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.structureGraphName) == false && GetStrLen(pobjge_StructureGraphEN.structureGraphName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[结构图谱名称(structureGraphName)]的长度不能超过100(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.structureGraphName}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.idCurrEduCls) == false && GetStrLen(pobjge_StructureGraphEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.idCurrEduCls}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.courseId) == false && GetStrLen(pobjge_StructureGraphEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.courseId}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.createUser) == false && GetStrLen(pobjge_StructureGraphEN.createUser) > 50)
{
 throw new Error(`(errid:Watl000413)字段[建立用户(createUser)]的长度不能超过50(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.createUser}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.updDate) == false && GetStrLen(pobjge_StructureGraphEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.updDate}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.updUser) == false && GetStrLen(pobjge_StructureGraphEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.updUser}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.memo) == false && GetStrLen(pobjge_StructureGraphEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.memo}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.graphTypeId) == false && GetStrLen(pobjge_StructureGraphEN.graphTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[图谱类型Id(graphTypeId)]的长度不能超过2(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.graphTypeId}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.theme) == false && GetStrLen(pobjge_StructureGraphEN.theme) > 100)
{
 throw new Error(`(errid:Watl000413)字段[主题(theme)]的长度不能超过100(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.theme}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.sectionTypeId) == false && GetStrLen(pobjge_StructureGraphEN.sectionTypeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[节点类型Id(sectionTypeId)]的长度不能超过8(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.sectionTypeId}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.takeUpTime) == false && GetStrLen(pobjge_StructureGraphEN.takeUpTime) > 50)
{
 throw new Error(`(errid:Watl000413)字段[耗时(takeUpTime)]的长度不能超过50(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.takeUpTime}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.submitTime) == false && GetStrLen(pobjge_StructureGraphEN.submitTime) > 20)
{
 throw new Error(`(errid:Watl000413)字段[提交时间(submitTime)]的长度不能超过20(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.submitTime}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.startTime) == false && GetStrLen(pobjge_StructureGraphEN.startTime) > 20)
{
 throw new Error(`(errid:Watl000413)字段[开始时间(s)(startTime)]的长度不能超过20(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.startTime}(clsge_StructureGraphBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_StructureGraphEN.structureGraphId) == false && undefined !== pobjge_StructureGraphEN.structureGraphId && tzDataType.isString(pobjge_StructureGraphEN.structureGraphId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识图谱Id(structureGraphId)]的值:[${pobjge_StructureGraphEN.structureGraphId}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.structureGraphName) == false && undefined !== pobjge_StructureGraphEN.structureGraphName && tzDataType.isString(pobjge_StructureGraphEN.structureGraphName) === false)
{
 throw new Error(`(errid:Watl000414)字段[结构图谱名称(structureGraphName)]的值:[${pobjge_StructureGraphEN.structureGraphName}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.idCurrEduCls) == false && undefined !== pobjge_StructureGraphEN.idCurrEduCls && tzDataType.isString(pobjge_StructureGraphEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_StructureGraphEN.idCurrEduCls}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.courseId) == false && undefined !== pobjge_StructureGraphEN.courseId && tzDataType.isString(pobjge_StructureGraphEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_StructureGraphEN.courseId}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.createUser) == false && undefined !== pobjge_StructureGraphEN.createUser && tzDataType.isString(pobjge_StructureGraphEN.createUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[建立用户(createUser)]的值:[${pobjge_StructureGraphEN.createUser}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.updDate) == false && undefined !== pobjge_StructureGraphEN.updDate && tzDataType.isString(pobjge_StructureGraphEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_StructureGraphEN.updDate}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.updUser) == false && undefined !== pobjge_StructureGraphEN.updUser && tzDataType.isString(pobjge_StructureGraphEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_StructureGraphEN.updUser}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.memo) == false && undefined !== pobjge_StructureGraphEN.memo && tzDataType.isString(pobjge_StructureGraphEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_StructureGraphEN.memo}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.graphTypeId) == false && undefined !== pobjge_StructureGraphEN.graphTypeId && tzDataType.isString(pobjge_StructureGraphEN.graphTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[图谱类型Id(graphTypeId)]的值:[${pobjge_StructureGraphEN.graphTypeId}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureGraphEN.isDisplay && undefined !== pobjge_StructureGraphEN.isDisplay && tzDataType.isBoolean(pobjge_StructureGraphEN.isDisplay) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否显示(isDisplay)]的值:[${pobjge_StructureGraphEN.isDisplay}], 非法,应该为布尔型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureGraphEN.isExtend && undefined !== pobjge_StructureGraphEN.isExtend && tzDataType.isBoolean(pobjge_StructureGraphEN.isExtend) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否扩展(isExtend)]的值:[${pobjge_StructureGraphEN.isExtend}], 非法,应该为布尔型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureGraphEN.isRecommend && undefined !== pobjge_StructureGraphEN.isRecommend && tzDataType.isBoolean(pobjge_StructureGraphEN.isRecommend) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否推荐(isRecommend)]的值:[${pobjge_StructureGraphEN.isRecommend}], 非法,应该为布尔型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.theme) == false && undefined !== pobjge_StructureGraphEN.theme && tzDataType.isString(pobjge_StructureGraphEN.theme) === false)
{
 throw new Error(`(errid:Watl000414)字段[主题(theme)]的值:[${pobjge_StructureGraphEN.theme}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureGraphEN.isSubmit && undefined !== pobjge_StructureGraphEN.isSubmit && tzDataType.isBoolean(pobjge_StructureGraphEN.isSubmit) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否提交(isSubmit)]的值:[${pobjge_StructureGraphEN.isSubmit}], 非法,应该为布尔型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.sectionTypeId) == false && undefined !== pobjge_StructureGraphEN.sectionTypeId && tzDataType.isString(pobjge_StructureGraphEN.sectionTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[节点类型Id(sectionTypeId)]的值:[${pobjge_StructureGraphEN.sectionTypeId}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.takeUpTime) == false && undefined !== pobjge_StructureGraphEN.takeUpTime && tzDataType.isString(pobjge_StructureGraphEN.takeUpTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[耗时(takeUpTime)]的值:[${pobjge_StructureGraphEN.takeUpTime}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.submitTime) == false && undefined !== pobjge_StructureGraphEN.submitTime && tzDataType.isString(pobjge_StructureGraphEN.submitTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[提交时间(submitTime)]的值:[${pobjge_StructureGraphEN.submitTime}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.startTime) == false && undefined !== pobjge_StructureGraphEN.startTime && tzDataType.isString(pobjge_StructureGraphEN.startTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[开始时间(s)(startTime)]的值:[${pobjge_StructureGraphEN.startTime}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StructureGraph_CheckProperty4Update(pobjge_StructureGraphEN: clsge_StructureGraphEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StructureGraphEN.structureGraphId) == false && GetStrLen(pobjge_StructureGraphEN.structureGraphId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[知识图谱Id(structureGraphId)]的长度不能超过10(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.structureGraphId}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.structureGraphName) == false && GetStrLen(pobjge_StructureGraphEN.structureGraphName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[结构图谱名称(structureGraphName)]的长度不能超过100(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.structureGraphName}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.idCurrEduCls) == false && GetStrLen(pobjge_StructureGraphEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.idCurrEduCls}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.courseId) == false && GetStrLen(pobjge_StructureGraphEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.courseId}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.createUser) == false && GetStrLen(pobjge_StructureGraphEN.createUser) > 50)
{
 throw new Error(`(errid:Watl000416)字段[建立用户(createUser)]的长度不能超过50(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.createUser}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.updDate) == false && GetStrLen(pobjge_StructureGraphEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.updDate}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.updUser) == false && GetStrLen(pobjge_StructureGraphEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.updUser}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.memo) == false && GetStrLen(pobjge_StructureGraphEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.memo}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.graphTypeId) == false && GetStrLen(pobjge_StructureGraphEN.graphTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[图谱类型Id(graphTypeId)]的长度不能超过2(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.graphTypeId}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.theme) == false && GetStrLen(pobjge_StructureGraphEN.theme) > 100)
{
 throw new Error(`(errid:Watl000416)字段[主题(theme)]的长度不能超过100(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.theme}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.sectionTypeId) == false && GetStrLen(pobjge_StructureGraphEN.sectionTypeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[节点类型Id(sectionTypeId)]的长度不能超过8(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.sectionTypeId}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.takeUpTime) == false && GetStrLen(pobjge_StructureGraphEN.takeUpTime) > 50)
{
 throw new Error(`(errid:Watl000416)字段[耗时(takeUpTime)]的长度不能超过50(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.takeUpTime}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.submitTime) == false && GetStrLen(pobjge_StructureGraphEN.submitTime) > 20)
{
 throw new Error(`(errid:Watl000416)字段[提交时间(submitTime)]的长度不能超过20(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.submitTime}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.startTime) == false && GetStrLen(pobjge_StructureGraphEN.startTime) > 20)
{
 throw new Error(`(errid:Watl000416)字段[开始时间(s)(startTime)]的长度不能超过20(In 结构图谱表(ge_StructureGraph))!值:${pobjge_StructureGraphEN.startTime}(clsge_StructureGraphBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_StructureGraphEN.structureGraphId) == false && undefined !== pobjge_StructureGraphEN.structureGraphId && tzDataType.isString(pobjge_StructureGraphEN.structureGraphId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识图谱Id(structureGraphId)]的值:[${pobjge_StructureGraphEN.structureGraphId}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.structureGraphName) == false && undefined !== pobjge_StructureGraphEN.structureGraphName && tzDataType.isString(pobjge_StructureGraphEN.structureGraphName) === false)
{
 throw new Error(`(errid:Watl000417)字段[结构图谱名称(structureGraphName)]的值:[${pobjge_StructureGraphEN.structureGraphName}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.idCurrEduCls) == false && undefined !== pobjge_StructureGraphEN.idCurrEduCls && tzDataType.isString(pobjge_StructureGraphEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_StructureGraphEN.idCurrEduCls}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.courseId) == false && undefined !== pobjge_StructureGraphEN.courseId && tzDataType.isString(pobjge_StructureGraphEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_StructureGraphEN.courseId}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.createUser) == false && undefined !== pobjge_StructureGraphEN.createUser && tzDataType.isString(pobjge_StructureGraphEN.createUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[建立用户(createUser)]的值:[${pobjge_StructureGraphEN.createUser}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.updDate) == false && undefined !== pobjge_StructureGraphEN.updDate && tzDataType.isString(pobjge_StructureGraphEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_StructureGraphEN.updDate}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.updUser) == false && undefined !== pobjge_StructureGraphEN.updUser && tzDataType.isString(pobjge_StructureGraphEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_StructureGraphEN.updUser}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.memo) == false && undefined !== pobjge_StructureGraphEN.memo && tzDataType.isString(pobjge_StructureGraphEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_StructureGraphEN.memo}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.graphTypeId) == false && undefined !== pobjge_StructureGraphEN.graphTypeId && tzDataType.isString(pobjge_StructureGraphEN.graphTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[图谱类型Id(graphTypeId)]的值:[${pobjge_StructureGraphEN.graphTypeId}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureGraphEN.isDisplay && undefined !== pobjge_StructureGraphEN.isDisplay && tzDataType.isBoolean(pobjge_StructureGraphEN.isDisplay) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否显示(isDisplay)]的值:[${pobjge_StructureGraphEN.isDisplay}], 非法,应该为布尔型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureGraphEN.isExtend && undefined !== pobjge_StructureGraphEN.isExtend && tzDataType.isBoolean(pobjge_StructureGraphEN.isExtend) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否扩展(isExtend)]的值:[${pobjge_StructureGraphEN.isExtend}], 非法,应该为布尔型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureGraphEN.isRecommend && undefined !== pobjge_StructureGraphEN.isRecommend && tzDataType.isBoolean(pobjge_StructureGraphEN.isRecommend) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否推荐(isRecommend)]的值:[${pobjge_StructureGraphEN.isRecommend}], 非法,应该为布尔型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.theme) == false && undefined !== pobjge_StructureGraphEN.theme && tzDataType.isString(pobjge_StructureGraphEN.theme) === false)
{
 throw new Error(`(errid:Watl000417)字段[主题(theme)]的值:[${pobjge_StructureGraphEN.theme}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureGraphEN.isSubmit && undefined !== pobjge_StructureGraphEN.isSubmit && tzDataType.isBoolean(pobjge_StructureGraphEN.isSubmit) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否提交(isSubmit)]的值:[${pobjge_StructureGraphEN.isSubmit}], 非法,应该为布尔型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.sectionTypeId) == false && undefined !== pobjge_StructureGraphEN.sectionTypeId && tzDataType.isString(pobjge_StructureGraphEN.sectionTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[节点类型Id(sectionTypeId)]的值:[${pobjge_StructureGraphEN.sectionTypeId}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.takeUpTime) == false && undefined !== pobjge_StructureGraphEN.takeUpTime && tzDataType.isString(pobjge_StructureGraphEN.takeUpTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[耗时(takeUpTime)]的值:[${pobjge_StructureGraphEN.takeUpTime}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.submitTime) == false && undefined !== pobjge_StructureGraphEN.submitTime && tzDataType.isString(pobjge_StructureGraphEN.submitTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[提交时间(submitTime)]的值:[${pobjge_StructureGraphEN.submitTime}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureGraphEN.startTime) == false && undefined !== pobjge_StructureGraphEN.startTime && tzDataType.isString(pobjge_StructureGraphEN.startTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[开始时间(s)(startTime)]的值:[${pobjge_StructureGraphEN.startTime}], 非法,应该为字符型(In 结构图谱表(ge_StructureGraph))!(clsge_StructureGraphBL:CheckProperty4Update)`);
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
export  function ge_StructureGraph_GetJSONStrByObj (pobjge_StructureGraphEN: clsge_StructureGraphEN): string
{
pobjge_StructureGraphEN.sfUpdFldSetStr = pobjge_StructureGraphEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_StructureGraphEN);
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
export  function ge_StructureGraph_GetObjLstByJSONStr (strJSON: string): Array<clsge_StructureGraphEN>
{
let arrge_StructureGraphObjLst = new Array<clsge_StructureGraphEN>();
if (strJSON === "")
{
return arrge_StructureGraphObjLst;
}
try
{
arrge_StructureGraphObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_StructureGraphObjLst;
}
return arrge_StructureGraphObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_StructureGraphObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_StructureGraph_GetObjLstByJSONObjLst (arrge_StructureGraphObjLstS: Array<clsge_StructureGraphEN>): Array<clsge_StructureGraphEN>
{
const arrge_StructureGraphObjLst = new Array<clsge_StructureGraphEN>();
for (const objInFor of arrge_StructureGraphObjLstS) {
const obj1 = ge_StructureGraph_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_StructureGraphObjLst.push(obj1);
}
return arrge_StructureGraphObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_StructureGraph_GetObjByJSONStr (strJSON: string): clsge_StructureGraphEN
{
let pobjge_StructureGraphEN = new clsge_StructureGraphEN();
if (strJSON === "")
{
return pobjge_StructureGraphEN;
}
try
{
pobjge_StructureGraphEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_StructureGraphEN;
}
return pobjge_StructureGraphEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_StructureGraph_GetCombineCondition(objge_StructureGraphCond: clsge_StructureGraphEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_StructureGraphId) == true)
{
const strComparisonOpStructureGraphId:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_StructureGraphId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_StructureGraphId, objge_StructureGraphCond.structureGraphId, strComparisonOpStructureGraphId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_StructureGraphName) == true)
{
const strComparisonOpStructureGraphName:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_StructureGraphName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_StructureGraphName, objge_StructureGraphCond.structureGraphName, strComparisonOpStructureGraphName);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_IdCurrEduCls, objge_StructureGraphCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_CourseId, objge_StructureGraphCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_CreateUser) == true)
{
const strComparisonOpCreateUser:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_CreateUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_CreateUser, objge_StructureGraphCond.createUser, strComparisonOpCreateUser);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_UpdDate, objge_StructureGraphCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_UpdUser, objge_StructureGraphCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_Memo, objge_StructureGraphCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_GraphTypeId) == true)
{
const strComparisonOpGraphTypeId:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_GraphTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_GraphTypeId, objge_StructureGraphCond.graphTypeId, strComparisonOpGraphTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_IsDisplay) == true)
{
if (objge_StructureGraphCond.isDisplay == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StructureGraphEN.con_IsDisplay);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StructureGraphEN.con_IsDisplay);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_IsExtend) == true)
{
if (objge_StructureGraphCond.isExtend == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StructureGraphEN.con_IsExtend);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StructureGraphEN.con_IsExtend);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_IsRecommend) == true)
{
if (objge_StructureGraphCond.isRecommend == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StructureGraphEN.con_IsRecommend);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StructureGraphEN.con_IsRecommend);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_Theme) == true)
{
const strComparisonOpTheme:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_Theme];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_Theme, objge_StructureGraphCond.theme, strComparisonOpTheme);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_IsSubmit) == true)
{
if (objge_StructureGraphCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StructureGraphEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StructureGraphEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_SectionTypeId) == true)
{
const strComparisonOpSectionTypeId:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_SectionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_SectionTypeId, objge_StructureGraphCond.sectionTypeId, strComparisonOpSectionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_TakeUpTime) == true)
{
const strComparisonOpTakeUpTime:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_TakeUpTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_TakeUpTime, objge_StructureGraphCond.takeUpTime, strComparisonOpTakeUpTime);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_SubmitTime) == true)
{
const strComparisonOpSubmitTime:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_SubmitTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_SubmitTime, objge_StructureGraphCond.submitTime, strComparisonOpSubmitTime);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureGraphCond.dicFldComparisonOp, clsge_StructureGraphEN.con_StartTime) == true)
{
const strComparisonOpStartTime:string = objge_StructureGraphCond.dicFldComparisonOp[clsge_StructureGraphEN.con_StartTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureGraphEN.con_StartTime, objge_StructureGraphCond.startTime, strComparisonOpStartTime);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StructureGraph(结构图谱表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strStructureGraphId: 知识图谱Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StructureGraph_GetUniCondStr(objge_StructureGraphEN: clsge_StructureGraphEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and StructureGraphId = '{0}'", objge_StructureGraphEN.structureGraphId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StructureGraph(结构图谱表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strStructureGraphId: 知识图谱Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StructureGraph_GetUniCondStr4Update(objge_StructureGraphEN: clsge_StructureGraphEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and StructureGraphId <> '{0}'", objge_StructureGraphEN.structureGraphId);
 strWhereCond +=  Format(" and StructureGraphId = '{0}'", objge_StructureGraphEN.structureGraphId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_StructureGraphENS:源对象
 * @param objge_StructureGraphENT:目标对象
*/
export  function ge_StructureGraph_CopyObjTo(objge_StructureGraphENS: clsge_StructureGraphEN , objge_StructureGraphENT: clsge_StructureGraphEN ): void 
{
objge_StructureGraphENT.structureGraphId = objge_StructureGraphENS.structureGraphId; //知识图谱Id
objge_StructureGraphENT.structureGraphName = objge_StructureGraphENS.structureGraphName; //结构图谱名称
objge_StructureGraphENT.idCurrEduCls = objge_StructureGraphENS.idCurrEduCls; //教学班流水号
objge_StructureGraphENT.courseId = objge_StructureGraphENS.courseId; //课程Id
objge_StructureGraphENT.createUser = objge_StructureGraphENS.createUser; //建立用户
objge_StructureGraphENT.updDate = objge_StructureGraphENS.updDate; //修改日期
objge_StructureGraphENT.updUser = objge_StructureGraphENS.updUser; //修改人
objge_StructureGraphENT.memo = objge_StructureGraphENS.memo; //备注
objge_StructureGraphENT.graphTypeId = objge_StructureGraphENS.graphTypeId; //图谱类型Id
objge_StructureGraphENT.isDisplay = objge_StructureGraphENS.isDisplay; //是否显示
objge_StructureGraphENT.isExtend = objge_StructureGraphENS.isExtend; //是否扩展
objge_StructureGraphENT.isRecommend = objge_StructureGraphENS.isRecommend; //是否推荐
objge_StructureGraphENT.theme = objge_StructureGraphENS.theme; //主题
objge_StructureGraphENT.isSubmit = objge_StructureGraphENS.isSubmit; //是否提交
objge_StructureGraphENT.sectionTypeId = objge_StructureGraphENS.sectionTypeId; //节点类型Id
objge_StructureGraphENT.takeUpTime = objge_StructureGraphENS.takeUpTime; //耗时
objge_StructureGraphENT.submitTime = objge_StructureGraphENS.submitTime; //提交时间
objge_StructureGraphENT.startTime = objge_StructureGraphENS.startTime; //开始时间(s)
objge_StructureGraphENT.sfUpdFldSetStr = objge_StructureGraphENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_StructureGraphENS:源对象
 * @param objge_StructureGraphENT:目标对象
*/
export  function ge_StructureGraph_GetObjFromJsonObj(objge_StructureGraphENS: clsge_StructureGraphEN): clsge_StructureGraphEN 
{
 const objge_StructureGraphENT: clsge_StructureGraphEN = new clsge_StructureGraphEN();
ObjectAssign(objge_StructureGraphENT, objge_StructureGraphENS);
 return objge_StructureGraphENT;
}