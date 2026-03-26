
 /**
 * 类名:clscc_KnowledgesExamLibRelaWApi
 * 表名:cc_KnowledgesExamLibRela(01120140)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:41
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
 * 知识点习题关系(cc_KnowledgesExamLibRela)
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
import { clscc_KnowledgesExamLibRelaEN } from "@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const cc_KnowledgesExamLibRela_Controller = "cc_KnowledgesExamLibRelaApi";
 export const cc_KnowledgesExamLibRela_ConstructorName = "cc_KnowledgesExamLibRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function cc_KnowledgesExamLibRela_GetObjBymIdAsync(lngmId: number): Promise<clscc_KnowledgesExamLibRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clscc_KnowledgesExamLibRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const objcc_KnowledgesExamLibRela = cc_KnowledgesExamLibRela_GetObjFromJsonObj(returnObj);
return objcc_KnowledgesExamLibRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetObjBymIdlocalStorage(lngmId: number) {
const strThisFuncName = "GetObjBymIdlocalStorage";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clscc_KnowledgesExamLibRelaWApi.GetObjBymIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clscc_KnowledgesExamLibRelaEN._CurrTabName, lngmId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objcc_KnowledgesExamLibRelaCache: clscc_KnowledgesExamLibRelaEN = JSON.parse(strTempObj);
return objcc_KnowledgesExamLibRelaCache;
}
try
{
const objcc_KnowledgesExamLibRela = await cc_KnowledgesExamLibRela_GetObjBymIdAsync(lngmId);
if (objcc_KnowledgesExamLibRela != null)
{
localStorage.setItem(strKey, JSON.stringify(objcc_KnowledgesExamLibRela));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objcc_KnowledgesExamLibRela;
}
return objcc_KnowledgesExamLibRela;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetObjBymIdCache(lngmId:number,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBymIdCache";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clscc_KnowledgesExamLibRelaWApi.GetObjBymIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstCache(strCourseId);
try
{
const arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaObjLstCache.filter(x => 
 x.mId == lngmId );
let objcc_KnowledgesExamLibRela: clscc_KnowledgesExamLibRelaEN;
if (arrcc_KnowledgesExamLibRelaSel.length > 0)
{
objcc_KnowledgesExamLibRela = arrcc_KnowledgesExamLibRelaSel[0];
return objcc_KnowledgesExamLibRela;
}
else
{
if (bolTryAsyncOnce == true)
{
const objcc_KnowledgesExamLibRelaConst = await cc_KnowledgesExamLibRela_GetObjBymIdAsync(lngmId);
if (objcc_KnowledgesExamLibRelaConst != null)
{
cc_KnowledgesExamLibRela_ReFreshThisCache(strCourseId);
return objcc_KnowledgesExamLibRelaConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objcc_KnowledgesExamLibRela:所给的对象
 * @returns 对象
*/
export  async function cc_KnowledgesExamLibRela_UpdateObjInLstCache(objcc_KnowledgesExamLibRela: clscc_KnowledgesExamLibRelaEN,strCourseId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstCache(strCourseId);
const obj = arrcc_KnowledgesExamLibRelaObjLstCache.find(x => x.questionId == objcc_KnowledgesExamLibRela.questionId && x.courseKnowledgeId == objcc_KnowledgesExamLibRela.courseKnowledgeId);
if (obj != null)
{
objcc_KnowledgesExamLibRela.mId = obj.mId;
ObjectAssign( obj, objcc_KnowledgesExamLibRela);
}
else
{
arrcc_KnowledgesExamLibRelaObjLstCache.push(objcc_KnowledgesExamLibRela);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  function cc_KnowledgesExamLibRela_SortFunDefa(a:clscc_KnowledgesExamLibRelaEN , b:clscc_KnowledgesExamLibRelaEN): number 
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
export  function cc_KnowledgesExamLibRela_SortFunDefa2Fld(a:clscc_KnowledgesExamLibRelaEN , b:clscc_KnowledgesExamLibRelaEN): number 
{
if (a.questionId == b.questionId) return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
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
export  function cc_KnowledgesExamLibRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_KnowledgesExamLibRelaEN.con_mId:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return a.mId-b.mId;
}
case clscc_KnowledgesExamLibRelaEN.con_QuestionId:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return a.questionId-b.questionId;
}
case clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
case clscc_KnowledgesExamLibRelaEN.con_CourseId:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clscc_KnowledgesExamLibRelaEN.con_PositiveCorrelation:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return a.positiveCorrelation-b.positiveCorrelation;
}
case clscc_KnowledgesExamLibRelaEN.con_NegativeCorrelation:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return a.negativeCorrelation-b.negativeCorrelation;
}
case clscc_KnowledgesExamLibRelaEN.con_IsMain:
return (a: clscc_KnowledgesExamLibRelaEN) => {
if (a.isMain == true) return 1;
else return -1
}
case clscc_KnowledgesExamLibRelaEN.con_UpdDate:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clscc_KnowledgesExamLibRelaEN.con_UpdUserId:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clscc_KnowledgesExamLibRelaEN.con_Memo:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_KnowledgesExamLibRela]中不存在!(in ${ cc_KnowledgesExamLibRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_KnowledgesExamLibRelaEN.con_mId:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return b.mId-a.mId;
}
case clscc_KnowledgesExamLibRelaEN.con_QuestionId:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return b.questionId-a.questionId;
}
case clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
}
case clscc_KnowledgesExamLibRelaEN.con_CourseId:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clscc_KnowledgesExamLibRelaEN.con_PositiveCorrelation:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return b.positiveCorrelation-a.positiveCorrelation;
}
case clscc_KnowledgesExamLibRelaEN.con_NegativeCorrelation:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return b.negativeCorrelation-a.negativeCorrelation;
}
case clscc_KnowledgesExamLibRelaEN.con_IsMain:
return (b: clscc_KnowledgesExamLibRelaEN) => {
if (b.isMain == true) return 1;
else return -1
}
case clscc_KnowledgesExamLibRelaEN.con_UpdDate:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clscc_KnowledgesExamLibRelaEN.con_UpdUserId:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clscc_KnowledgesExamLibRelaEN.con_Memo:
return (a: clscc_KnowledgesExamLibRelaEN, b: clscc_KnowledgesExamLibRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_KnowledgesExamLibRela]中不存在!(in ${ cc_KnowledgesExamLibRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function cc_KnowledgesExamLibRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_KnowledgesExamLibRelaEN.con_mId:
return (obj: clscc_KnowledgesExamLibRelaEN) => {
return obj.mId === value;
}
case clscc_KnowledgesExamLibRelaEN.con_QuestionId:
return (obj: clscc_KnowledgesExamLibRelaEN) => {
return obj.questionId === value;
}
case clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId:
return (obj: clscc_KnowledgesExamLibRelaEN) => {
return obj.courseKnowledgeId === value;
}
case clscc_KnowledgesExamLibRelaEN.con_CourseId:
return (obj: clscc_KnowledgesExamLibRelaEN) => {
return obj.courseId === value;
}
case clscc_KnowledgesExamLibRelaEN.con_PositiveCorrelation:
return (obj: clscc_KnowledgesExamLibRelaEN) => {
return obj.positiveCorrelation === value;
}
case clscc_KnowledgesExamLibRelaEN.con_NegativeCorrelation:
return (obj: clscc_KnowledgesExamLibRelaEN) => {
return obj.negativeCorrelation === value;
}
case clscc_KnowledgesExamLibRelaEN.con_IsMain:
return (obj: clscc_KnowledgesExamLibRelaEN) => {
return obj.isMain === value;
}
case clscc_KnowledgesExamLibRelaEN.con_UpdDate:
return (obj: clscc_KnowledgesExamLibRelaEN) => {
return obj.updDate === value;
}
case clscc_KnowledgesExamLibRelaEN.con_UpdUserId:
return (obj: clscc_KnowledgesExamLibRelaEN) => {
return obj.updUserId === value;
}
case clscc_KnowledgesExamLibRelaEN.con_Memo:
return (obj: clscc_KnowledgesExamLibRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_KnowledgesExamLibRela]中不存在!(in ${ cc_KnowledgesExamLibRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function cc_KnowledgesExamLibRela_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clscc_KnowledgesExamLibRelaWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clscc_KnowledgesExamLibRelaWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clscc_KnowledgesExamLibRelaEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clscc_KnowledgesExamLibRelaEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clscc_KnowledgesExamLibRelaEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngmId = Number(strInValue);
if (lngmId == 0)
{
return "";
}
const objcc_KnowledgesExamLibRela = await cc_KnowledgesExamLibRela_GetObjBymIdCache(lngmId , strCourseIdClassfy);
if (objcc_KnowledgesExamLibRela == null) return "";
if (objcc_KnowledgesExamLibRela.GetFldValue(strOutFldName) == null) return "";
return objcc_KnowledgesExamLibRela.GetFldValue(strOutFldName).toString();
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
export  async function cc_KnowledgesExamLibRela_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clscc_KnowledgesExamLibRelaWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clscc_KnowledgesExamLibRelaWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clscc_KnowledgesExamLibRelaEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrcc_KnowledgesExamLibRela = await cc_KnowledgesExamLibRela_GetObjLstCache(strCourseIdClassfy);
if (arrcc_KnowledgesExamLibRela == null) return [];
let arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRela;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrcc_KnowledgesExamLibRelaSel.length == 0) return [];
return arrcc_KnowledgesExamLibRelaSel.map(x=>x.mId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_KnowledgesExamLibRela_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetFirstObjAsync(strWhereCond: string): Promise<clscc_KnowledgesExamLibRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const objcc_KnowledgesExamLibRela = cc_KnowledgesExamLibRela_GetObjFromJsonObj(returnObj);
return objcc_KnowledgesExamLibRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_KnowledgesExamLibRelaEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_KnowledgesExamLibRelaEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clscc_KnowledgesExamLibRelaEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clscc_KnowledgesExamLibRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_KnowledgesExamLibRelaEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrcc_KnowledgesExamLibRelaExObjLstCache: Array<clscc_KnowledgesExamLibRelaEN> = CacheHelper.Get(strKey);
const arrcc_KnowledgesExamLibRelaObjLstT = cc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(arrcc_KnowledgesExamLibRelaExObjLstCache);
return arrcc_KnowledgesExamLibRelaObjLstT;
}
try
{
const arrcc_KnowledgesExamLibRelaExObjLst = await cc_KnowledgesExamLibRela_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrcc_KnowledgesExamLibRelaExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_KnowledgesExamLibRelaExObjLst.length);
console.log(strInfo);
return arrcc_KnowledgesExamLibRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_KnowledgesExamLibRela_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_KnowledgesExamLibRelaEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_KnowledgesExamLibRelaEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clscc_KnowledgesExamLibRelaEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clscc_KnowledgesExamLibRelaEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clscc_KnowledgesExamLibRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_KnowledgesExamLibRelaEN.CacheAddiCondition);
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
const arrcc_KnowledgesExamLibRelaExObjLstCache: Array<clscc_KnowledgesExamLibRelaEN> = JSON.parse(strTempObjLst);
const arrcc_KnowledgesExamLibRelaObjLstT = cc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(arrcc_KnowledgesExamLibRelaExObjLstCache);
return arrcc_KnowledgesExamLibRelaObjLstT;
}
try
{
const arrcc_KnowledgesExamLibRelaExObjLst = await cc_KnowledgesExamLibRela_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrcc_KnowledgesExamLibRelaExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_KnowledgesExamLibRelaExObjLst.length);
console.log(strInfo);
return arrcc_KnowledgesExamLibRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_KnowledgesExamLibRela_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clscc_KnowledgesExamLibRelaEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrcc_KnowledgesExamLibRelaObjLstCache: Array<clscc_KnowledgesExamLibRelaEN> = JSON.parse(strTempObjLst);
return arrcc_KnowledgesExamLibRelaObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function cc_KnowledgesExamLibRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_KnowledgesExamLibRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_KnowledgesExamLibRelaEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_KnowledgesExamLibRelaEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clscc_KnowledgesExamLibRelaEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clscc_KnowledgesExamLibRelaEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clscc_KnowledgesExamLibRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_KnowledgesExamLibRelaEN.CacheAddiCondition);
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
const arrcc_KnowledgesExamLibRelaExObjLstCache: Array<clscc_KnowledgesExamLibRelaEN> = JSON.parse(strTempObjLst);
const arrcc_KnowledgesExamLibRelaObjLstT = cc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(arrcc_KnowledgesExamLibRelaExObjLstCache);
return arrcc_KnowledgesExamLibRelaObjLstT;
}
try
{
const arrcc_KnowledgesExamLibRelaExObjLst = await cc_KnowledgesExamLibRela_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrcc_KnowledgesExamLibRelaExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_KnowledgesExamLibRelaExObjLst.length);
console.log(strInfo);
return arrcc_KnowledgesExamLibRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_KnowledgesExamLibRela_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clscc_KnowledgesExamLibRelaEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrcc_KnowledgesExamLibRelaObjLstCache: Array<clscc_KnowledgesExamLibRelaEN> = JSON.parse(strTempObjLst);
return arrcc_KnowledgesExamLibRelaObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_KnowledgesExamLibRela_GetObjLstCache(strCourseId: string): Promise<Array<clscc_KnowledgesExamLibRelaEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clscc_KnowledgesExamLibRelaWApi.cc_KnowledgesExamLibRela_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clscc_KnowledgesExamLibRelaWApi.cc_KnowledgesExamLibRela_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrcc_KnowledgesExamLibRelaObjLstCache;
switch (clscc_KnowledgesExamLibRelaEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstClientCache(strCourseId);
break;
default:
arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstClientCache(strCourseId);
break;
}
return arrcc_KnowledgesExamLibRelaObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_KnowledgesExamLibRela_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrcc_KnowledgesExamLibRelaObjLstCache;
switch (clscc_KnowledgesExamLibRelaEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrcc_KnowledgesExamLibRelaObjLstCache = null;
break;
default:
arrcc_KnowledgesExamLibRelaObjLstCache = null;
break;
}
return arrcc_KnowledgesExamLibRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_KnowledgesExamLibRela_GetSubObjLstCache(objcc_KnowledgesExamLibRelaCond: clscc_KnowledgesExamLibRelaEN ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstCache(strCourseId);
let arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaObjLstCache;
if (objcc_KnowledgesExamLibRelaCond.sfFldComparisonOp == null || objcc_KnowledgesExamLibRelaCond.sfFldComparisonOp == "") return arrcc_KnowledgesExamLibRelaSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_KnowledgesExamLibRelaCond.sfFldComparisonOp);
//console.log("clscc_KnowledgesExamLibRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_KnowledgesExamLibRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_KnowledgesExamLibRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_KnowledgesExamLibRelaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objcc_KnowledgesExamLibRelaCond), cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_KnowledgesExamLibRelaEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function cc_KnowledgesExamLibRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clscc_KnowledgesExamLibRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetObjLstBymIdLstCache(arrmIdLst: Array<number> ,strCourseId: string) {
const strThisFuncName = "GetObjLstBymIdLstCache";
try
{
const arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstCache(strCourseId);
const arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaObjLstCache.filter(x => arrmIdLst.indexOf(x.mId)>-1);
return arrcc_KnowledgesExamLibRelaSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrmIdLst.join(","), cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_KnowledgesExamLibRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_KnowledgesExamLibRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clscc_KnowledgesExamLibRelaEN>();
const arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstCache(strCourseId);
if (arrcc_KnowledgesExamLibRelaObjLstCache.length == 0) return arrcc_KnowledgesExamLibRelaObjLstCache;
let arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objcc_KnowledgesExamLibRelaCond = new clscc_KnowledgesExamLibRelaEN();
ObjectAssign(objcc_KnowledgesExamLibRelaCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clscc_KnowledgesExamLibRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_KnowledgesExamLibRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_KnowledgesExamLibRelaSel.length == 0) return arrcc_KnowledgesExamLibRelaSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.sort(cc_KnowledgesExamLibRela_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.sort(objPagerPara.sortFun);
}
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.slice(intStart, intEnd);     
return arrcc_KnowledgesExamLibRelaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_KnowledgesExamLibRelaEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function cc_KnowledgesExamLibRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_KnowledgesExamLibRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_KnowledgesExamLibRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_Delcc_KnowledgesExamLibRelasAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_KnowledgesExamLibRelasAsync";
const strAction = "Delcc_KnowledgesExamLibRelas";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_Delcc_KnowledgesExamLibRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_KnowledgesExamLibRelasByCondAsync";
const strAction = "Delcc_KnowledgesExamLibRelasByCond";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgesExamLibRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_KnowledgesExamLibRela_AddNewRecordAsync(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_KnowledgesExamLibRelaEN);
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgesExamLibRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_AddNewObjSave(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
cc_KnowledgesExamLibRela_CheckPropertyNew(objcc_KnowledgesExamLibRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_KnowledgesExamLibRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_KnowledgesExamLibRela_CheckUniCond4Add(objcc_KnowledgesExamLibRelaEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await cc_KnowledgesExamLibRela_AddNewRecordAsync(objcc_KnowledgesExamLibRelaEN);
if (returnBool == true)
{
cc_KnowledgesExamLibRela_ReFreshCache(objcc_KnowledgesExamLibRelaEN.courseId);
}
else
{
const strInfo = `添加[知识点习题关系(cc_KnowledgesExamLibRela)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objcc_KnowledgesExamLibRelaEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ cc_KnowledgesExamLibRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function cc_KnowledgesExamLibRela_CheckUniCond4Add(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN): Promise<boolean>{
const strUniquenessCondition = cc_KnowledgesExamLibRela_GetUniCondStr(objcc_KnowledgesExamLibRelaEN);
const bolIsExistCondition = await cc_KnowledgesExamLibRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_KnowledgesExamLibRela_CheckUniCond4Update(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN): Promise<boolean>{
const strUniquenessCondition = cc_KnowledgesExamLibRela_GetUniCondStr4Update(objcc_KnowledgesExamLibRelaEN);
const bolIsExistCondition = await cc_KnowledgesExamLibRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_KnowledgesExamLibRela_UpdateObjSave(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr = objcc_KnowledgesExamLibRelaEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_KnowledgesExamLibRelaEN.mId == 0 || objcc_KnowledgesExamLibRelaEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_KnowledgesExamLibRela_CheckProperty4Update(objcc_KnowledgesExamLibRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_KnowledgesExamLibRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_KnowledgesExamLibRela_CheckUniCond4Update(objcc_KnowledgesExamLibRelaEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await cc_KnowledgesExamLibRela_UpdateRecordAsync(objcc_KnowledgesExamLibRelaEN);
if (returnBool == true)
{
cc_KnowledgesExamLibRela_ReFreshCache(objcc_KnowledgesExamLibRelaEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ cc_KnowledgesExamLibRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_KnowledgesExamLibRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_KnowledgesExamLibRela_AddNewRecordWithReturnKeyAsync(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgesExamLibRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgesExamLibRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_KnowledgesExamLibRela_UpdateRecordAsync(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr === undefined || objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr === null || objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_KnowledgesExamLibRelaEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgesExamLibRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgesExamLibRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_KnowledgesExamLibRela_EditRecordExAsync(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr === undefined || objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr === null || objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_KnowledgesExamLibRelaEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgesExamLibRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgesExamLibRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_KnowledgesExamLibRela_UpdateWithConditionAsync(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr === undefined || objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr === null || objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_KnowledgesExamLibRelaEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);
objcc_KnowledgesExamLibRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgesExamLibRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_IsExistRecordCache(objcc_KnowledgesExamLibRelaCond: clscc_KnowledgesExamLibRelaEN,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstCache(strCourseId);
if (arrcc_KnowledgesExamLibRelaObjLstCache == null) return false;
let arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaObjLstCache;
if (objcc_KnowledgesExamLibRelaCond.sfFldComparisonOp == null || objcc_KnowledgesExamLibRelaCond.sfFldComparisonOp == "") return arrcc_KnowledgesExamLibRelaSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_KnowledgesExamLibRelaCond.sfFldComparisonOp);
//console.log("clscc_KnowledgesExamLibRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_KnowledgesExamLibRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_KnowledgesExamLibRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_KnowledgesExamLibRelaSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objcc_KnowledgesExamLibRelaCond), cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_IsExistCache(lngmId:number,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstCache(strCourseId);
if (arrcc_KnowledgesExamLibRelaObjLstCache == null) return false;
try
{
const arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaObjLstCache.filter(x => x.mId == lngmId);
if (arrcc_KnowledgesExamLibRelaSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngmId, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgesExamLibRelaCond:条件对象
 * @returns 对象列表记录数
*/
export  async function cc_KnowledgesExamLibRela_GetRecCountByCondCache(objcc_KnowledgesExamLibRelaCond: clscc_KnowledgesExamLibRelaEN ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrcc_KnowledgesExamLibRelaObjLstCache = await cc_KnowledgesExamLibRela_GetObjLstCache(strCourseId);
if (arrcc_KnowledgesExamLibRelaObjLstCache == null) return 0;
let arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaObjLstCache;
if (objcc_KnowledgesExamLibRelaCond.sfFldComparisonOp == null || objcc_KnowledgesExamLibRelaCond.sfFldComparisonOp == "") return arrcc_KnowledgesExamLibRelaSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_KnowledgesExamLibRelaCond.sfFldComparisonOp);
//console.log("clscc_KnowledgesExamLibRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_KnowledgesExamLibRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_KnowledgesExamLibRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_KnowledgesExamLibRelaSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objcc_KnowledgesExamLibRelaCond), cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgesExamLibRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  function cc_KnowledgesExamLibRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function cc_KnowledgesExamLibRela_ReFreshCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clscc_KnowledgesExamLibRelaWApi.clscc_KnowledgesExamLibRelaWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clscc_KnowledgesExamLibRelaWApi.clscc_KnowledgesExamLibRelaWApi.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clscc_KnowledgesExamLibRelaEN._CurrTabName, strCourseId);
switch (clscc_KnowledgesExamLibRelaEN.CacheModeId)
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
clscc_KnowledgesExamLibRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function cc_KnowledgesExamLibRela_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clscc_KnowledgesExamLibRelaWApi.cc_KnowledgesExamLibRela_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clscc_KnowledgesExamLibRelaWApi.cc_KnowledgesExamLibRela_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clscc_KnowledgesExamLibRelaEN._CurrTabName, strCourseId);
switch (clscc_KnowledgesExamLibRelaEN.CacheModeId)
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
clscc_KnowledgesExamLibRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function cc_KnowledgesExamLibRela_GetLastRefreshTime():string
{
if (clscc_KnowledgesExamLibRelaEN._RefreshTimeLst.length == 0) return "";
return clscc_KnowledgesExamLibRelaEN._RefreshTimeLst[clscc_KnowledgesExamLibRelaEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_KnowledgesExamLibRela_CheckPropertyNew(pobjcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (null === pobjcc_KnowledgesExamLibRelaEN.questionId 
 || pobjcc_KnowledgesExamLibRelaEN.questionId != null && pobjcc_KnowledgesExamLibRelaEN.questionId.toString()  ===  ""
 || pobjcc_KnowledgesExamLibRelaEN.questionId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[题目Id]不能为空(In 知识点习题关系)!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) === true 
 || pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[知识点Id]不能为空(In 知识点习题关系)!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (null === pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation 
 || pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation != null && pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[正相关度]不能为空(In 知识点习题关系)!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (null === pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation 
 || pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation != null && pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[负相关度]不能为空(In 知识点习题关系)!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) == false && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点习题关系(cc_KnowledgesExamLibRela))!值:${pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId}(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseId) == false && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 知识点习题关系(cc_KnowledgesExamLibRela))!值:${pobjcc_KnowledgesExamLibRelaEN.courseId}(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.updDate) == false && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点习题关系(cc_KnowledgesExamLibRela))!值:${pobjcc_KnowledgesExamLibRelaEN.updDate}(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.updUserId) == false && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 知识点习题关系(cc_KnowledgesExamLibRela))!值:${pobjcc_KnowledgesExamLibRelaEN.updUserId}(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.memo) == false && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点习题关系(cc_KnowledgesExamLibRela))!值:${pobjcc_KnowledgesExamLibRelaEN.memo}(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_KnowledgesExamLibRelaEN.mId && undefined !== pobjcc_KnowledgesExamLibRelaEN.mId && tzDataType.isNumber(pobjcc_KnowledgesExamLibRelaEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjcc_KnowledgesExamLibRelaEN.mId}], 非法,应该为数值型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (null != pobjcc_KnowledgesExamLibRelaEN.questionId && undefined !== pobjcc_KnowledgesExamLibRelaEN.questionId && tzDataType.isNumber(pobjcc_KnowledgesExamLibRelaEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjcc_KnowledgesExamLibRelaEN.questionId}], 非法,应该为数值型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) == false && undefined !== pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId && tzDataType.isString(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点Id(courseKnowledgeId)]的值:[${pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseId) == false && undefined !== pobjcc_KnowledgesExamLibRelaEN.courseId && tzDataType.isString(pobjcc_KnowledgesExamLibRelaEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjcc_KnowledgesExamLibRelaEN.courseId}], 非法,应该为字符型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (null != pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation && undefined !== pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation && tzDataType.isNumber(pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation) === false)
{
 throw new Error(`(errid:Watl000414)字段[正相关度(positiveCorrelation)]的值:[${pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation}], 非法,应该为数值型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (null != pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation && undefined !== pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation && tzDataType.isNumber(pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation) === false)
{
 throw new Error(`(errid:Watl000414)字段[负相关度(negativeCorrelation)]的值:[${pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation}], 非法,应该为数值型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (null != pobjcc_KnowledgesExamLibRelaEN.isMain && undefined !== pobjcc_KnowledgesExamLibRelaEN.isMain && tzDataType.isBoolean(pobjcc_KnowledgesExamLibRelaEN.isMain) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否主资源(isMain)]的值:[${pobjcc_KnowledgesExamLibRelaEN.isMain}], 非法,应该为布尔型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.updDate) == false && undefined !== pobjcc_KnowledgesExamLibRelaEN.updDate && tzDataType.isString(pobjcc_KnowledgesExamLibRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcc_KnowledgesExamLibRelaEN.updDate}], 非法,应该为字符型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.updUserId) == false && undefined !== pobjcc_KnowledgesExamLibRelaEN.updUserId && tzDataType.isString(pobjcc_KnowledgesExamLibRelaEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjcc_KnowledgesExamLibRelaEN.updUserId}], 非法,应该为字符型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.memo) == false && undefined !== pobjcc_KnowledgesExamLibRelaEN.memo && tzDataType.isString(pobjcc_KnowledgesExamLibRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjcc_KnowledgesExamLibRelaEN.memo}], 非法,应该为字符型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) == false && pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId != '[nuull]' && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) !=  8)
{
 throw ("(errid:Watl000415)字段[知识点Id]作为外键字段,长度应该为8(In 知识点习题关系)!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseId) == false && pobjcc_KnowledgesExamLibRelaEN.courseId != '[nuull]' && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 知识点习题关系)!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_KnowledgesExamLibRela_CheckProperty4Update(pobjcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) == false && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点习题关系(cc_KnowledgesExamLibRela))!值:${pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId}(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseId) == false && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 知识点习题关系(cc_KnowledgesExamLibRela))!值:${pobjcc_KnowledgesExamLibRelaEN.courseId}(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.updDate) == false && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点习题关系(cc_KnowledgesExamLibRela))!值:${pobjcc_KnowledgesExamLibRelaEN.updDate}(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.updUserId) == false && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 知识点习题关系(cc_KnowledgesExamLibRela))!值:${pobjcc_KnowledgesExamLibRelaEN.updUserId}(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.memo) == false && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点习题关系(cc_KnowledgesExamLibRela))!值:${pobjcc_KnowledgesExamLibRelaEN.memo}(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_KnowledgesExamLibRelaEN.mId && undefined !== pobjcc_KnowledgesExamLibRelaEN.mId && tzDataType.isNumber(pobjcc_KnowledgesExamLibRelaEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjcc_KnowledgesExamLibRelaEN.mId}], 非法,应该为数值型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (null != pobjcc_KnowledgesExamLibRelaEN.questionId && undefined !== pobjcc_KnowledgesExamLibRelaEN.questionId && tzDataType.isNumber(pobjcc_KnowledgesExamLibRelaEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjcc_KnowledgesExamLibRelaEN.questionId}], 非法,应该为数值型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) == false && undefined !== pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId && tzDataType.isString(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点Id(courseKnowledgeId)]的值:[${pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseId) == false && undefined !== pobjcc_KnowledgesExamLibRelaEN.courseId && tzDataType.isString(pobjcc_KnowledgesExamLibRelaEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjcc_KnowledgesExamLibRelaEN.courseId}], 非法,应该为字符型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (null != pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation && undefined !== pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation && tzDataType.isNumber(pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation) === false)
{
 throw new Error(`(errid:Watl000417)字段[正相关度(positiveCorrelation)]的值:[${pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation}], 非法,应该为数值型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (null != pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation && undefined !== pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation && tzDataType.isNumber(pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation) === false)
{
 throw new Error(`(errid:Watl000417)字段[负相关度(negativeCorrelation)]的值:[${pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation}], 非法,应该为数值型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (null != pobjcc_KnowledgesExamLibRelaEN.isMain && undefined !== pobjcc_KnowledgesExamLibRelaEN.isMain && tzDataType.isBoolean(pobjcc_KnowledgesExamLibRelaEN.isMain) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否主资源(isMain)]的值:[${pobjcc_KnowledgesExamLibRelaEN.isMain}], 非法,应该为布尔型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.updDate) == false && undefined !== pobjcc_KnowledgesExamLibRelaEN.updDate && tzDataType.isString(pobjcc_KnowledgesExamLibRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcc_KnowledgesExamLibRelaEN.updDate}], 非法,应该为字符型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.updUserId) == false && undefined !== pobjcc_KnowledgesExamLibRelaEN.updUserId && tzDataType.isString(pobjcc_KnowledgesExamLibRelaEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjcc_KnowledgesExamLibRelaEN.updUserId}], 非法,应该为字符型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.memo) == false && undefined !== pobjcc_KnowledgesExamLibRelaEN.memo && tzDataType.isString(pobjcc_KnowledgesExamLibRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjcc_KnowledgesExamLibRelaEN.memo}], 非法,应该为字符型(In 知识点习题关系(cc_KnowledgesExamLibRela))!(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjcc_KnowledgesExamLibRelaEN.mId 
 || pobjcc_KnowledgesExamLibRelaEN.mId != null && pobjcc_KnowledgesExamLibRelaEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 知识点习题关系)!(clscc_KnowledgesExamLibRelaBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) == false && pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId != '[nuull]' && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId) !=  8)
{
 throw ("(errid:Watl000418)字段[知识点Id]作为外键字段,长度应该为8(In 知识点习题关系)!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_KnowledgesExamLibRelaEN.courseId) == false && pobjcc_KnowledgesExamLibRelaEN.courseId != '[nuull]' && GetStrLen(pobjcc_KnowledgesExamLibRelaEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 知识点习题关系)!(clscc_KnowledgesExamLibRelaBL:CheckPropertyNew)");
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
export  function cc_KnowledgesExamLibRela_GetJSONStrByObj (pobjcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN): string
{
pobjcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr = pobjcc_KnowledgesExamLibRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_KnowledgesExamLibRelaEN);
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
export  function cc_KnowledgesExamLibRela_GetObjLstByJSONStr (strJSON: string): Array<clscc_KnowledgesExamLibRelaEN>
{
let arrcc_KnowledgesExamLibRelaObjLst = new Array<clscc_KnowledgesExamLibRelaEN>();
if (strJSON === "")
{
return arrcc_KnowledgesExamLibRelaObjLst;
}
try
{
arrcc_KnowledgesExamLibRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_KnowledgesExamLibRelaObjLst;
}
return arrcc_KnowledgesExamLibRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_KnowledgesExamLibRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_KnowledgesExamLibRela_GetObjLstByJSONObjLst (arrcc_KnowledgesExamLibRelaObjLstS: Array<clscc_KnowledgesExamLibRelaEN>): Array<clscc_KnowledgesExamLibRelaEN>
{
const arrcc_KnowledgesExamLibRelaObjLst = new Array<clscc_KnowledgesExamLibRelaEN>();
for (const objInFor of arrcc_KnowledgesExamLibRelaObjLstS) {
const obj1 = cc_KnowledgesExamLibRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_KnowledgesExamLibRelaObjLst.push(obj1);
}
return arrcc_KnowledgesExamLibRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_KnowledgesExamLibRela_GetObjByJSONStr (strJSON: string): clscc_KnowledgesExamLibRelaEN
{
let pobjcc_KnowledgesExamLibRelaEN = new clscc_KnowledgesExamLibRelaEN();
if (strJSON === "")
{
return pobjcc_KnowledgesExamLibRelaEN;
}
try
{
pobjcc_KnowledgesExamLibRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_KnowledgesExamLibRelaEN;
}
return pobjcc_KnowledgesExamLibRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_KnowledgesExamLibRela_GetCombineCondition(objcc_KnowledgesExamLibRelaCond: clscc_KnowledgesExamLibRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clscc_KnowledgesExamLibRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clscc_KnowledgesExamLibRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clscc_KnowledgesExamLibRelaEN.con_mId, objcc_KnowledgesExamLibRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clscc_KnowledgesExamLibRelaEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clscc_KnowledgesExamLibRelaEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clscc_KnowledgesExamLibRelaEN.con_QuestionId, objcc_KnowledgesExamLibRelaCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId) == true)
{
const strComparisonOpCourseKnowledgeId:string = objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId, objcc_KnowledgesExamLibRelaCond.courseKnowledgeId, strComparisonOpCourseKnowledgeId);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clscc_KnowledgesExamLibRelaEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clscc_KnowledgesExamLibRelaEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgesExamLibRelaEN.con_CourseId, objcc_KnowledgesExamLibRelaCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clscc_KnowledgesExamLibRelaEN.con_PositiveCorrelation) == true)
{
const strComparisonOpPositiveCorrelation:string = objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clscc_KnowledgesExamLibRelaEN.con_PositiveCorrelation];
strWhereCond += Format(" And {0} {2} {1}", clscc_KnowledgesExamLibRelaEN.con_PositiveCorrelation, objcc_KnowledgesExamLibRelaCond.positiveCorrelation, strComparisonOpPositiveCorrelation);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clscc_KnowledgesExamLibRelaEN.con_NegativeCorrelation) == true)
{
const strComparisonOpNegativeCorrelation:string = objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clscc_KnowledgesExamLibRelaEN.con_NegativeCorrelation];
strWhereCond += Format(" And {0} {2} {1}", clscc_KnowledgesExamLibRelaEN.con_NegativeCorrelation, objcc_KnowledgesExamLibRelaCond.negativeCorrelation, strComparisonOpNegativeCorrelation);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clscc_KnowledgesExamLibRelaEN.con_IsMain) == true)
{
if (objcc_KnowledgesExamLibRelaCond.isMain == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_KnowledgesExamLibRelaEN.con_IsMain);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_KnowledgesExamLibRelaEN.con_IsMain);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clscc_KnowledgesExamLibRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clscc_KnowledgesExamLibRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgesExamLibRelaEN.con_UpdDate, objcc_KnowledgesExamLibRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clscc_KnowledgesExamLibRelaEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clscc_KnowledgesExamLibRelaEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgesExamLibRelaEN.con_UpdUserId, objcc_KnowledgesExamLibRelaCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clscc_KnowledgesExamLibRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clscc_KnowledgesExamLibRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgesExamLibRelaEN.con_Memo, objcc_KnowledgesExamLibRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_KnowledgesExamLibRela(知识点习题关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_KnowledgesExamLibRela_GetUniCondStr(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and QuestionId = '{0}'", objcc_KnowledgesExamLibRelaEN.questionId);
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objcc_KnowledgesExamLibRelaEN.courseKnowledgeId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_KnowledgesExamLibRela(知识点习题关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_KnowledgesExamLibRela_GetUniCondStr4Update(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objcc_KnowledgesExamLibRelaEN.mId);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objcc_KnowledgesExamLibRelaEN.questionId);
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objcc_KnowledgesExamLibRelaEN.courseKnowledgeId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_KnowledgesExamLibRelaENS:源对象
 * @param objcc_KnowledgesExamLibRelaENT:目标对象
*/
export  function cc_KnowledgesExamLibRela_CopyObjTo(objcc_KnowledgesExamLibRelaENS: clscc_KnowledgesExamLibRelaEN , objcc_KnowledgesExamLibRelaENT: clscc_KnowledgesExamLibRelaEN ): void 
{
objcc_KnowledgesExamLibRelaENT.mId = objcc_KnowledgesExamLibRelaENS.mId; //mId
objcc_KnowledgesExamLibRelaENT.questionId = objcc_KnowledgesExamLibRelaENS.questionId; //题目Id
objcc_KnowledgesExamLibRelaENT.courseKnowledgeId = objcc_KnowledgesExamLibRelaENS.courseKnowledgeId; //知识点Id
objcc_KnowledgesExamLibRelaENT.courseId = objcc_KnowledgesExamLibRelaENS.courseId; //课程Id
objcc_KnowledgesExamLibRelaENT.positiveCorrelation = objcc_KnowledgesExamLibRelaENS.positiveCorrelation; //正相关度
objcc_KnowledgesExamLibRelaENT.negativeCorrelation = objcc_KnowledgesExamLibRelaENS.negativeCorrelation; //负相关度
objcc_KnowledgesExamLibRelaENT.isMain = objcc_KnowledgesExamLibRelaENS.isMain; //是否主资源
objcc_KnowledgesExamLibRelaENT.updDate = objcc_KnowledgesExamLibRelaENS.updDate; //修改日期
objcc_KnowledgesExamLibRelaENT.updUserId = objcc_KnowledgesExamLibRelaENS.updUserId; //修改用户Id
objcc_KnowledgesExamLibRelaENT.memo = objcc_KnowledgesExamLibRelaENS.memo; //备注
objcc_KnowledgesExamLibRelaENT.sfUpdFldSetStr = objcc_KnowledgesExamLibRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_KnowledgesExamLibRelaENS:源对象
 * @param objcc_KnowledgesExamLibRelaENT:目标对象
*/
export  function cc_KnowledgesExamLibRela_GetObjFromJsonObj(objcc_KnowledgesExamLibRelaENS: clscc_KnowledgesExamLibRelaEN): clscc_KnowledgesExamLibRelaEN 
{
 const objcc_KnowledgesExamLibRelaENT: clscc_KnowledgesExamLibRelaEN = new clscc_KnowledgesExamLibRelaEN();
ObjectAssign(objcc_KnowledgesExamLibRelaENT, objcc_KnowledgesExamLibRelaENS);
 return objcc_KnowledgesExamLibRelaENT;
}