
 /**
 * 类名:clsvQuestionnaire_SimWApi
 * 表名:vQuestionnaire_Sim(01120949)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:43
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vQuestionnaire_Sim(vQuestionnaire_Sim)
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
import { GetObjKeys,BindDdl_ObjLstInDivObj_V,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvQuestionnaire_SimEN } from "@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vQuestionnaire_Sim_Controller = "vQuestionnaire_SimApi";
 export const vQuestionnaire_Sim_ConstructorName = "vQuestionnaire_Sim";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngQuestionId:关键字
 * @returns 对象
 **/
export  async function vQuestionnaire_Sim_GetObjByQuestionIdAsync(lngQuestionId: number): Promise<clsvQuestionnaire_SimEN|null>  
{
const strThisFuncName = "GetObjByQuestionIdAsync";

if (lngQuestionId == 0)
{
  const strMsg = Format("参数:[lngQuestionId]不能为空!(In clsvQuestionnaire_SimWApi.GetObjByQuestionIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByQuestionId";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngQuestionId,
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
const objvQuestionnaire_Sim = vQuestionnaire_Sim_GetObjFromJsonObj(returnObj);
return objvQuestionnaire_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
 * @param lngQuestionId:所给的关键字
 * @returns 对象
*/
export  async function vQuestionnaire_Sim_GetObjByQuestionIdlocalStorage(lngQuestionId: number) {
const strThisFuncName = "GetObjByQuestionIdlocalStorage";

if (lngQuestionId == 0)
{
  const strMsg = Format("参数:[lngQuestionId]不能为空!(In clsvQuestionnaire_SimWApi.GetObjByQuestionIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvQuestionnaire_SimEN._CurrTabName, lngQuestionId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvQuestionnaire_SimCache: clsvQuestionnaire_SimEN = JSON.parse(strTempObj);
return objvQuestionnaire_SimCache;
}
try
{
const objvQuestionnaire_Sim = await vQuestionnaire_Sim_GetObjByQuestionIdAsync(lngQuestionId);
if (objvQuestionnaire_Sim != null)
{
localStorage.setItem(strKey, JSON.stringify(objvQuestionnaire_Sim));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvQuestionnaire_Sim;
}
return objvQuestionnaire_Sim;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngQuestionId, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngQuestionId:所给的关键字
 * @returns 对象
*/
export  async function vQuestionnaire_Sim_GetObjByQuestionIdCache(lngQuestionId:number,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByQuestionIdCache";

if (lngQuestionId == 0)
{
  const strMsg = Format("参数:[lngQuestionId]不能为空!(In clsvQuestionnaire_SimWApi.GetObjByQuestionIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
try
{
const arrvQuestionnaire_SimSel = arrvQuestionnaire_SimObjLstCache.filter(x => 
 x.questionId == lngQuestionId );
let objvQuestionnaire_Sim: clsvQuestionnaire_SimEN;
if (arrvQuestionnaire_SimSel.length > 0)
{
objvQuestionnaire_Sim = arrvQuestionnaire_SimSel[0];
return objvQuestionnaire_Sim;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvQuestionnaire_SimConst = await vQuestionnaire_Sim_GetObjByQuestionIdAsync(lngQuestionId);
if (objvQuestionnaire_SimConst != null)
{
vQuestionnaire_Sim_ReFreshThisCache(strCourseId);
return objvQuestionnaire_SimConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngQuestionId, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  function vQuestionnaire_Sim_SortFunDefa(a:clsvQuestionnaire_SimEN , b:clsvQuestionnaire_SimEN): number 
{
return a.questionId-b.questionId;
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
export  function vQuestionnaire_Sim_SortFunDefa2Fld(a:clsvQuestionnaire_SimEN , b:clsvQuestionnaire_SimEN): number 
{
if (a.questionName == b.questionName) return a.questionIndex - b.questionIndex;
else return a.questionName.localeCompare(b.questionName);
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
export  function vQuestionnaire_Sim_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQuestionnaire_SimEN.con_QuestionId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
return a.questionId-b.questionId;
}
case clsvQuestionnaire_SimEN.con_QuestionName:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (a.questionName == null) return -1;
if (b.questionName == null) return 1;
return a.questionName.localeCompare(b.questionName);
}
case clsvQuestionnaire_SimEN.con_QuestionIndex:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
return a.questionIndex-b.questionIndex;
}
case clsvQuestionnaire_SimEN.con_QuestionNo:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (a.questionNo == null) return -1;
if (b.questionNo == null) return 1;
return a.questionNo.localeCompare(b.questionNo);
}
case clsvQuestionnaire_SimEN.con_CourseId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsvQuestionnaire_SimEN.con_CourseChapterId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
return a.courseChapterId.localeCompare(b.courseChapterId);
}
case clsvQuestionnaire_SimEN.con_ParentQuestionId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (a.parentQuestionId == null) return -1;
if (b.parentQuestionId == null) return 1;
return a.parentQuestionId.localeCompare(b.parentQuestionId);
}
case clsvQuestionnaire_SimEN.con_QuestionTypeId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (a.questionTypeId == null) return -1;
if (b.questionTypeId == null) return 1;
return a.questionTypeId.localeCompare(b.questionTypeId);
}
case clsvQuestionnaire_SimEN.con_QuestionTypeId4Course:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
return a.questionTypeId4Course.localeCompare(b.questionTypeId4Course);
}
case clsvQuestionnaire_SimEN.con_AnswerTypeId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (a.answerTypeId == null) return -1;
if (b.answerTypeId == null) return 1;
return a.answerTypeId.localeCompare(b.answerTypeId);
}
case clsvQuestionnaire_SimEN.con_IsShow:
return (a: clsvQuestionnaire_SimEN) => {
if (a.isShow == true) return 1;
else return -1
}
case clsvQuestionnaire_SimEN.con_DifficultyLevelId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (a.difficultyLevelId == null) return -1;
if (b.difficultyLevelId == null) return 1;
return a.difficultyLevelId.localeCompare(b.difficultyLevelId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQuestionnaire_Sim]中不存在!(in ${ vQuestionnaire_Sim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQuestionnaire_SimEN.con_QuestionId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
return b.questionId-a.questionId;
}
case clsvQuestionnaire_SimEN.con_QuestionName:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (b.questionName == null) return -1;
if (a.questionName == null) return 1;
return b.questionName.localeCompare(a.questionName);
}
case clsvQuestionnaire_SimEN.con_QuestionIndex:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
return b.questionIndex-a.questionIndex;
}
case clsvQuestionnaire_SimEN.con_QuestionNo:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (b.questionNo == null) return -1;
if (a.questionNo == null) return 1;
return b.questionNo.localeCompare(a.questionNo);
}
case clsvQuestionnaire_SimEN.con_CourseId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsvQuestionnaire_SimEN.con_CourseChapterId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
return b.courseChapterId.localeCompare(a.courseChapterId);
}
case clsvQuestionnaire_SimEN.con_ParentQuestionId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (b.parentQuestionId == null) return -1;
if (a.parentQuestionId == null) return 1;
return b.parentQuestionId.localeCompare(a.parentQuestionId);
}
case clsvQuestionnaire_SimEN.con_QuestionTypeId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (b.questionTypeId == null) return -1;
if (a.questionTypeId == null) return 1;
return b.questionTypeId.localeCompare(a.questionTypeId);
}
case clsvQuestionnaire_SimEN.con_QuestionTypeId4Course:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
return b.questionTypeId4Course.localeCompare(a.questionTypeId4Course);
}
case clsvQuestionnaire_SimEN.con_AnswerTypeId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (b.answerTypeId == null) return -1;
if (a.answerTypeId == null) return 1;
return b.answerTypeId.localeCompare(a.answerTypeId);
}
case clsvQuestionnaire_SimEN.con_IsShow:
return (b: clsvQuestionnaire_SimEN) => {
if (b.isShow == true) return 1;
else return -1
}
case clsvQuestionnaire_SimEN.con_DifficultyLevelId:
return (a: clsvQuestionnaire_SimEN, b: clsvQuestionnaire_SimEN) => {
if (b.difficultyLevelId == null) return -1;
if (a.difficultyLevelId == null) return 1;
return b.difficultyLevelId.localeCompare(a.difficultyLevelId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQuestionnaire_Sim]中不存在!(in ${ vQuestionnaire_Sim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param lngQuestionId:所给的关键字
 * @returns 对象
*/
export  async function vQuestionnaire_Sim_GetNameByQuestionIdCache(lngQuestionId: number,strCourseId: string) {

if (lngQuestionId == 0)
{
  const strMsg = Format("参数:[lngQuestionId]不能为空!(In clsvQuestionnaire_SimWApi.GetNameByQuestionIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
if (arrvQuestionnaire_SimObjLstCache == null) return "";
try
{
const arrvQuestionnaire_SimSel = arrvQuestionnaire_SimObjLstCache.filter(x => 
 x.questionId == lngQuestionId );
let objvQuestionnaire_Sim: clsvQuestionnaire_SimEN;
if (arrvQuestionnaire_SimSel.length > 0)
{
objvQuestionnaire_Sim = arrvQuestionnaire_SimSel[0];
return objvQuestionnaire_Sim.questionName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, lngQuestionId);
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
export  async function vQuestionnaire_Sim_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQuestionnaire_SimEN.con_QuestionId:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.questionId === value;
}
case clsvQuestionnaire_SimEN.con_QuestionName:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.questionName === value;
}
case clsvQuestionnaire_SimEN.con_QuestionIndex:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.questionIndex === value;
}
case clsvQuestionnaire_SimEN.con_QuestionNo:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.questionNo === value;
}
case clsvQuestionnaire_SimEN.con_CourseId:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.courseId === value;
}
case clsvQuestionnaire_SimEN.con_CourseChapterId:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.courseChapterId === value;
}
case clsvQuestionnaire_SimEN.con_ParentQuestionId:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.parentQuestionId === value;
}
case clsvQuestionnaire_SimEN.con_QuestionTypeId:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.questionTypeId === value;
}
case clsvQuestionnaire_SimEN.con_QuestionTypeId4Course:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.questionTypeId4Course === value;
}
case clsvQuestionnaire_SimEN.con_AnswerTypeId:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.answerTypeId === value;
}
case clsvQuestionnaire_SimEN.con_IsShow:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.isShow === value;
}
case clsvQuestionnaire_SimEN.con_DifficultyLevelId:
return (obj: clsvQuestionnaire_SimEN) => {
return obj.difficultyLevelId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQuestionnaire_Sim]中不存在!(in ${ vQuestionnaire_Sim_ConstructorName}.${ strThisFuncName})`;
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
export  async function vQuestionnaire_Sim_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsvQuestionnaire_SimWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvQuestionnaire_SimWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvQuestionnaire_SimEN.con_QuestionId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvQuestionnaire_SimEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvQuestionnaire_SimEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngQuestionId = Number(strInValue);
if (lngQuestionId == 0)
{
return "";
}
const objvQuestionnaire_Sim = await vQuestionnaire_Sim_GetObjByQuestionIdCache(lngQuestionId , strCourseIdClassfy);
if (objvQuestionnaire_Sim == null) return "";
if (objvQuestionnaire_Sim.GetFldValue(strOutFldName) == null) return "";
return objvQuestionnaire_Sim.GetFldValue(strOutFldName).toString();
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
export  async function vQuestionnaire_Sim_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsvQuestionnaire_SimWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvQuestionnaire_SimWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvQuestionnaire_SimEN.con_QuestionId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrvQuestionnaire_Sim = await vQuestionnaire_Sim_GetObjLstCache(strCourseIdClassfy);
if (arrvQuestionnaire_Sim == null) return [];
let arrvQuestionnaire_SimSel = arrvQuestionnaire_Sim;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvQuestionnaire_SimSel.length == 0) return [];
return arrvQuestionnaire_SimSel.map(x=>x.questionId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQuestionnaire_Sim_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_Sim_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_Sim_GetFirstObjAsync(strWhereCond: string): Promise<clsvQuestionnaire_SimEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

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
const objvQuestionnaire_Sim = vQuestionnaire_Sim_GetObjFromJsonObj(returnObj);
return objvQuestionnaire_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_Sim_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvQuestionnaire_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvQuestionnaire_SimEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsvQuestionnaire_SimEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvQuestionnaire_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQuestionnaire_SimEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvQuestionnaire_SimExObjLstCache: Array<clsvQuestionnaire_SimEN> = CacheHelper.Get(strKey);
const arrvQuestionnaire_SimObjLstT = vQuestionnaire_Sim_GetObjLstByJSONObjLst(arrvQuestionnaire_SimExObjLstCache);
return arrvQuestionnaire_SimObjLstT;
}
try
{
const arrvQuestionnaire_SimExObjLst = await vQuestionnaire_Sim_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvQuestionnaire_SimExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQuestionnaire_SimExObjLst.length);
console.log(strInfo);
return arrvQuestionnaire_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQuestionnaire_Sim_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvQuestionnaire_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvQuestionnaire_SimEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvQuestionnaire_SimEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsvQuestionnaire_SimEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvQuestionnaire_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQuestionnaire_SimEN.CacheAddiCondition);
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
const arrvQuestionnaire_SimExObjLstCache: Array<clsvQuestionnaire_SimEN> = JSON.parse(strTempObjLst);
const arrvQuestionnaire_SimObjLstT = vQuestionnaire_Sim_GetObjLstByJSONObjLst(arrvQuestionnaire_SimExObjLstCache);
return arrvQuestionnaire_SimObjLstT;
}
try
{
const arrvQuestionnaire_SimExObjLst = await vQuestionnaire_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvQuestionnaire_SimEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrvQuestionnaire_SimExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQuestionnaire_SimExObjLst.length);
console.log(strInfo);
return arrvQuestionnaire_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQuestionnaire_Sim_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvQuestionnaire_SimEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvQuestionnaire_SimObjLstCache: Array<clsvQuestionnaire_SimEN> = JSON.parse(strTempObjLst);
return arrvQuestionnaire_SimObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vQuestionnaire_Sim_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQuestionnaire_SimEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaire_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_Sim_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvQuestionnaire_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvQuestionnaire_SimEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvQuestionnaire_SimEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsvQuestionnaire_SimEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvQuestionnaire_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQuestionnaire_SimEN.CacheAddiCondition);
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
const arrvQuestionnaire_SimExObjLstCache: Array<clsvQuestionnaire_SimEN> = JSON.parse(strTempObjLst);
const arrvQuestionnaire_SimObjLstT = vQuestionnaire_Sim_GetObjLstByJSONObjLst(arrvQuestionnaire_SimExObjLstCache);
return arrvQuestionnaire_SimObjLstT;
}
try
{
const arrvQuestionnaire_SimExObjLst = await vQuestionnaire_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvQuestionnaire_SimEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrvQuestionnaire_SimExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQuestionnaire_SimExObjLst.length);
console.log(strInfo);
return arrvQuestionnaire_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQuestionnaire_Sim_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvQuestionnaire_SimEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvQuestionnaire_SimObjLstCache: Array<clsvQuestionnaire_SimEN> = JSON.parse(strTempObjLst);
return arrvQuestionnaire_SimObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQuestionnaire_Sim_GetObjLstCache(strCourseId: string): Promise<Array<clsvQuestionnaire_SimEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvQuestionnaire_SimWApi.vQuestionnaire_Sim_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvQuestionnaire_SimWApi.vQuestionnaire_Sim_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrvQuestionnaire_SimObjLstCache;
switch (clsvQuestionnaire_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstClientCache(strCourseId);
break;
default:
arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstClientCache(strCourseId);
break;
}
return arrvQuestionnaire_SimObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQuestionnaire_Sim_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvQuestionnaire_SimObjLstCache;
switch (clsvQuestionnaire_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrvQuestionnaire_SimObjLstCache = null;
break;
default:
arrvQuestionnaire_SimObjLstCache = null;
break;
}
return arrvQuestionnaire_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngQuestionIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vQuestionnaire_Sim_GetSubObjLstCache(objvQuestionnaire_SimCond: clsvQuestionnaire_SimEN ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
let arrvQuestionnaire_SimSel = arrvQuestionnaire_SimObjLstCache;
if (objvQuestionnaire_SimCond.sfFldComparisonOp == null || objvQuestionnaire_SimCond.sfFldComparisonOp == "") return arrvQuestionnaire_SimSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvQuestionnaire_SimCond.sfFldComparisonOp);
//console.log("clsvQuestionnaire_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvQuestionnaire_SimCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvQuestionnaire_SimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvQuestionnaire_SimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvQuestionnaire_SimCond), vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvQuestionnaire_SimEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrQuestionId:关键字列表
 * @returns 对象列表
 **/
export  async function vQuestionnaire_Sim_GetObjLstByQuestionIdLstAsync(arrQuestionId: Array<string>): Promise<Array<clsvQuestionnaire_SimEN>>  
{
const strThisFuncName = "GetObjLstByQuestionIdLstAsync";
const strAction = "GetObjLstByQuestionIdLst";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaire_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
 * @param arrlngQuestionIdLst:关键字列表
 * @returns 对象列表
*/
export  async function vQuestionnaire_Sim_GetObjLstByQuestionIdLstCache(arrQuestionIdLst: Array<number> ,strCourseId: string) {
const strThisFuncName = "GetObjLstByQuestionIdLstCache";
try
{
const arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
const arrvQuestionnaire_SimSel = arrvQuestionnaire_SimObjLstCache.filter(x => arrQuestionIdLst.indexOf(x.questionId)>-1);
return arrvQuestionnaire_SimSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrQuestionIdLst.join(","), vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_Sim_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQuestionnaire_SimEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaire_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_Sim_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQuestionnaire_SimEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaire_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_Sim_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvQuestionnaire_SimEN>();
const arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
if (arrvQuestionnaire_SimObjLstCache.length == 0) return arrvQuestionnaire_SimObjLstCache;
let arrvQuestionnaire_SimSel = arrvQuestionnaire_SimObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvQuestionnaire_SimCond = new clsvQuestionnaire_SimEN();
ObjectAssign(objvQuestionnaire_SimCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvQuestionnaire_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvQuestionnaire_SimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvQuestionnaire_SimSel.length == 0) return arrvQuestionnaire_SimSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.sort(vQuestionnaire_Sim_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.sort(objPagerPara.sortFun);
}
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.slice(intStart, intEnd);     
return arrvQuestionnaire_SimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvQuestionnaire_SimEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vQuestionnaire_Sim_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvQuestionnaire_SimEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvQuestionnaire_SimEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaire_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
 * @param objlngQuestionIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vQuestionnaire_Sim_IsExistRecordCache(objvQuestionnaire_SimCond: clsvQuestionnaire_SimEN,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
if (arrvQuestionnaire_SimObjLstCache == null) return false;
let arrvQuestionnaire_SimSel = arrvQuestionnaire_SimObjLstCache;
if (objvQuestionnaire_SimCond.sfFldComparisonOp == null || objvQuestionnaire_SimCond.sfFldComparisonOp == "") return arrvQuestionnaire_SimSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvQuestionnaire_SimCond.sfFldComparisonOp);
//console.log("clsvQuestionnaire_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvQuestionnaire_SimCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvQuestionnaire_SimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvQuestionnaire_SimSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvQuestionnaire_SimCond), vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
 * @param lngQuestionId:所给的关键字
 * @returns 对象
*/
export  async function vQuestionnaire_Sim_IsExistCache(lngQuestionId:number,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
if (arrvQuestionnaire_SimObjLstCache == null) return false;
try
{
const arrvQuestionnaire_SimSel = arrvQuestionnaire_SimObjLstCache.filter(x => x.questionId == lngQuestionId);
if (arrvQuestionnaire_SimSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngQuestionId, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngQuestionId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vQuestionnaire_Sim_IsExistAsync(lngQuestionId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngQuestionId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vQuestionnaire_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
 * @param objvQuestionnaire_SimCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vQuestionnaire_Sim_GetRecCountByCondCache(objvQuestionnaire_SimCond: clsvQuestionnaire_SimEN ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvQuestionnaire_SimObjLstCache = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
if (arrvQuestionnaire_SimObjLstCache == null) return 0;
let arrvQuestionnaire_SimSel = arrvQuestionnaire_SimObjLstCache;
if (objvQuestionnaire_SimCond.sfFldComparisonOp == null || objvQuestionnaire_SimCond.sfFldComparisonOp == "") return arrvQuestionnaire_SimSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvQuestionnaire_SimCond.sfFldComparisonOp);
//console.log("clsvQuestionnaire_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvQuestionnaire_SimCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvQuestionnaire_SimCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvQuestionnaire_SimSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvQuestionnaire_SimCond), vQuestionnaire_Sim_ConstructorName, strThisFuncName);
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
export  function vQuestionnaire_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vQuestionnaire_Sim_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsvQuestionnaire_SimWApi.vQuestionnaire_Sim_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvQuestionnaire_SimWApi.vQuestionnaire_Sim_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvQuestionnaire_SimEN._CurrTabName, strCourseId);
switch (clsvQuestionnaire_SimEN.CacheModeId)
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
clsvQuestionnaire_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function vQuestionnaire_Sim_GetLastRefreshTime():string
{
if (clsvQuestionnaire_SimEN._RefreshTimeLst.length == 0) return "";
return clsvQuestionnaire_SimEN._RefreshTimeLst[clsvQuestionnaire_SimEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function vQuestionnaire_Sim_BindDdl_QuestionIdByCourseIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvQuestionnaire_SimWApi.BindDdl_QuestionIdByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvQuestionnaire_SimWApi.BindDdl_QuestionIdByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_QuestionIdByCourseIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_QuestionIdByCourseIdInDivCache");
let arrObjLstSel = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvQuestionnaire_SimEN.con_QuestionId, clsvQuestionnaire_SimEN.con_QuestionName, "vQuestionnaire_Sim...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function vQuestionnaire_Sim_GetArrvQuestionnaire_SimByCourseId(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvQuestionnaire_SimWApi.BindDdl_QuestionIdByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvQuestionnaire_SimWApi.BindDdl_QuestionIdByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_QuestionIdByCourseIdInDivCache");
const arrvQuestionnaire_Sim = new Array<clsvQuestionnaire_SimEN>();
let arrObjLstSel = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
const obj0 = new clsvQuestionnaire_SimEN();
obj0.questionId = 0;
obj0.questionName = '选vQuestionnaire_Sim...';
arrvQuestionnaire_Sim.push(obj0);
arrObjLstSel.forEach(x => arrvQuestionnaire_Sim.push(x));
return arrvQuestionnaire_Sim;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQuestionnaire_Sim_GetJSONStrByObj (pobjvQuestionnaire_SimEN: clsvQuestionnaire_SimEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQuestionnaire_SimEN);
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
export  function vQuestionnaire_Sim_GetObjLstByJSONStr (strJSON: string): Array<clsvQuestionnaire_SimEN>
{
let arrvQuestionnaire_SimObjLst = new Array<clsvQuestionnaire_SimEN>();
if (strJSON === "")
{
return arrvQuestionnaire_SimObjLst;
}
try
{
arrvQuestionnaire_SimObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQuestionnaire_SimObjLst;
}
return arrvQuestionnaire_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQuestionnaire_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQuestionnaire_Sim_GetObjLstByJSONObjLst (arrvQuestionnaire_SimObjLstS: Array<clsvQuestionnaire_SimEN>): Array<clsvQuestionnaire_SimEN>
{
const arrvQuestionnaire_SimObjLst = new Array<clsvQuestionnaire_SimEN>();
for (const objInFor of arrvQuestionnaire_SimObjLstS) {
const obj1 = vQuestionnaire_Sim_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQuestionnaire_SimObjLst.push(obj1);
}
return arrvQuestionnaire_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQuestionnaire_Sim_GetObjByJSONStr (strJSON: string): clsvQuestionnaire_SimEN
{
let pobjvQuestionnaire_SimEN = new clsvQuestionnaire_SimEN();
if (strJSON === "")
{
return pobjvQuestionnaire_SimEN;
}
try
{
pobjvQuestionnaire_SimEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQuestionnaire_SimEN;
}
return pobjvQuestionnaire_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQuestionnaire_Sim_GetCombineCondition(objvQuestionnaire_SimCond: clsvQuestionnaire_SimEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objvQuestionnaire_SimCond.dicFldComparisonOp[clsvQuestionnaire_SimEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaire_SimEN.con_QuestionId, objvQuestionnaire_SimCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_QuestionName) == true)
{
const strComparisonOpQuestionName:string = objvQuestionnaire_SimCond.dicFldComparisonOp[clsvQuestionnaire_SimEN.con_QuestionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaire_SimEN.con_QuestionName, objvQuestionnaire_SimCond.questionName, strComparisonOpQuestionName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_QuestionIndex) == true)
{
const strComparisonOpQuestionIndex:string = objvQuestionnaire_SimCond.dicFldComparisonOp[clsvQuestionnaire_SimEN.con_QuestionIndex];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaire_SimEN.con_QuestionIndex, objvQuestionnaire_SimCond.questionIndex, strComparisonOpQuestionIndex);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_QuestionNo) == true)
{
const strComparisonOpQuestionNo:string = objvQuestionnaire_SimCond.dicFldComparisonOp[clsvQuestionnaire_SimEN.con_QuestionNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaire_SimEN.con_QuestionNo, objvQuestionnaire_SimCond.questionNo, strComparisonOpQuestionNo);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvQuestionnaire_SimCond.dicFldComparisonOp[clsvQuestionnaire_SimEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaire_SimEN.con_CourseId, objvQuestionnaire_SimCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_CourseChapterId) == true)
{
const strComparisonOpCourseChapterId:string = objvQuestionnaire_SimCond.dicFldComparisonOp[clsvQuestionnaire_SimEN.con_CourseChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaire_SimEN.con_CourseChapterId, objvQuestionnaire_SimCond.courseChapterId, strComparisonOpCourseChapterId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_ParentQuestionId) == true)
{
const strComparisonOpParentQuestionId:string = objvQuestionnaire_SimCond.dicFldComparisonOp[clsvQuestionnaire_SimEN.con_ParentQuestionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaire_SimEN.con_ParentQuestionId, objvQuestionnaire_SimCond.parentQuestionId, strComparisonOpParentQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_QuestionTypeId) == true)
{
const strComparisonOpQuestionTypeId:string = objvQuestionnaire_SimCond.dicFldComparisonOp[clsvQuestionnaire_SimEN.con_QuestionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaire_SimEN.con_QuestionTypeId, objvQuestionnaire_SimCond.questionTypeId, strComparisonOpQuestionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_QuestionTypeId4Course) == true)
{
const strComparisonOpQuestionTypeId4Course:string = objvQuestionnaire_SimCond.dicFldComparisonOp[clsvQuestionnaire_SimEN.con_QuestionTypeId4Course];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaire_SimEN.con_QuestionTypeId4Course, objvQuestionnaire_SimCond.questionTypeId4Course, strComparisonOpQuestionTypeId4Course);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_AnswerTypeId) == true)
{
const strComparisonOpAnswerTypeId:string = objvQuestionnaire_SimCond.dicFldComparisonOp[clsvQuestionnaire_SimEN.con_AnswerTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaire_SimEN.con_AnswerTypeId, objvQuestionnaire_SimCond.answerTypeId, strComparisonOpAnswerTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_IsShow) == true)
{
if (objvQuestionnaire_SimCond.isShow == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQuestionnaire_SimEN.con_IsShow);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQuestionnaire_SimEN.con_IsShow);
}
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaire_SimCond.dicFldComparisonOp, clsvQuestionnaire_SimEN.con_DifficultyLevelId) == true)
{
const strComparisonOpDifficultyLevelId:string = objvQuestionnaire_SimCond.dicFldComparisonOp[clsvQuestionnaire_SimEN.con_DifficultyLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaire_SimEN.con_DifficultyLevelId, objvQuestionnaire_SimCond.difficultyLevelId, strComparisonOpDifficultyLevelId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvQuestionnaire_SimENS:源对象
 * @param objvQuestionnaire_SimENT:目标对象
*/
export  function vQuestionnaire_Sim_CopyObjTo(objvQuestionnaire_SimENS: clsvQuestionnaire_SimEN , objvQuestionnaire_SimENT: clsvQuestionnaire_SimEN ): void 
{
objvQuestionnaire_SimENT.questionId = objvQuestionnaire_SimENS.questionId; //题目Id
objvQuestionnaire_SimENT.questionName = objvQuestionnaire_SimENS.questionName; //题目名称
objvQuestionnaire_SimENT.questionIndex = objvQuestionnaire_SimENS.questionIndex; //题目序号
objvQuestionnaire_SimENT.questionNo = objvQuestionnaire_SimENS.questionNo; //题目编号
objvQuestionnaire_SimENT.courseId = objvQuestionnaire_SimENS.courseId; //课程Id
objvQuestionnaire_SimENT.courseChapterId = objvQuestionnaire_SimENS.courseChapterId; //课程章节ID
objvQuestionnaire_SimENT.parentQuestionId = objvQuestionnaire_SimENS.parentQuestionId; //父题目Id
objvQuestionnaire_SimENT.questionTypeId = objvQuestionnaire_SimENS.questionTypeId; //题目类型Id
objvQuestionnaire_SimENT.questionTypeId4Course = objvQuestionnaire_SimENS.questionTypeId4Course; //题目类型Id4课程
objvQuestionnaire_SimENT.answerTypeId = objvQuestionnaire_SimENS.answerTypeId; //答案类型ID
objvQuestionnaire_SimENT.isShow = objvQuestionnaire_SimENS.isShow; //是否启用
objvQuestionnaire_SimENT.difficultyLevelId = objvQuestionnaire_SimENS.difficultyLevelId; //难度等级Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQuestionnaire_SimENS:源对象
 * @param objvQuestionnaire_SimENT:目标对象
*/
export  function vQuestionnaire_Sim_GetObjFromJsonObj(objvQuestionnaire_SimENS: clsvQuestionnaire_SimEN): clsvQuestionnaire_SimEN 
{
 const objvQuestionnaire_SimENT: clsvQuestionnaire_SimEN = new clsvQuestionnaire_SimEN();
ObjectAssign(objvQuestionnaire_SimENT, objvQuestionnaire_SimENS);
 return objvQuestionnaire_SimENT;
}