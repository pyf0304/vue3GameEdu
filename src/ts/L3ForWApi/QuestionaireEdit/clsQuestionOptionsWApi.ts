
 /**
 * 类名:clsQuestionOptionsWApi
 * 表名:QuestionOptions(01120188)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:05
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
 * 题目选项(QuestionOptions)
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
import { clsQuestionOptionsEN } from "@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const questionOptions_Controller = "QuestionOptionsApi";
 export const questionOptions_ConstructorName = "questionOptions";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strQuestionOptionId:关键字
 * @returns 对象
 **/
export  async function QuestionOptions_GetObjByQuestionOptionIdAsync(strQuestionOptionId: string): Promise<clsQuestionOptionsEN|null>  
{
const strThisFuncName = "GetObjByQuestionOptionIdAsync";

if (IsNullOrEmpty(strQuestionOptionId) == true)
{
  const strMsg = Format("参数:[strQuestionOptionId]不能为空!(In clsQuestionOptionsWApi.GetObjByQuestionOptionIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionOptionId.length != 8)
{
const strMsg = Format("缓存分类变量:[strQuestionOptionId]的长度:[{0}]不正确!(clsQuestionOptionsWApi.GetObjByQuestionOptionIdAsync)", strQuestionOptionId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByQuestionOptionId";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQuestionOptionId,
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
const objQuestionOptions = QuestionOptions_GetObjFromJsonObj(returnObj);
return objQuestionOptions;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param strQuestionOptionId:所给的关键字
 * @returns 对象
*/
export  async function QuestionOptions_GetObjByQuestionOptionIdlocalStorage(strQuestionOptionId: string) {
const strThisFuncName = "GetObjByQuestionOptionIdlocalStorage";

if (IsNullOrEmpty(strQuestionOptionId) == true)
{
  const strMsg = Format("参数:[strQuestionOptionId]不能为空!(In clsQuestionOptionsWApi.GetObjByQuestionOptionIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionOptionId.length != 8)
{
const strMsg = Format("缓存分类变量:[strQuestionOptionId]的长度:[{0}]不正确!(clsQuestionOptionsWApi.GetObjByQuestionOptionIdlocalStorage)", strQuestionOptionId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQuestionOptionsEN._CurrTabName, strQuestionOptionId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQuestionOptionsCache: clsQuestionOptionsEN = JSON.parse(strTempObj);
return objQuestionOptionsCache;
}
try
{
const objQuestionOptions = await QuestionOptions_GetObjByQuestionOptionIdAsync(strQuestionOptionId);
if (objQuestionOptions != null)
{
localStorage.setItem(strKey, JSON.stringify(objQuestionOptions));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQuestionOptions;
}
return objQuestionOptions;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strQuestionOptionId, questionOptions_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strQuestionOptionId:所给的关键字
 * @returns 对象
*/
export  async function QuestionOptions_GetObjByQuestionOptionIdCache(strQuestionOptionId:string,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByQuestionOptionIdCache";

if (IsNullOrEmpty(strQuestionOptionId) == true)
{
  const strMsg = Format("参数:[strQuestionOptionId]不能为空!(In clsQuestionOptionsWApi.GetObjByQuestionOptionIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionOptionId.length != 8)
{
const strMsg = Format("缓存分类变量:[strQuestionOptionId]的长度:[{0}]不正确!(clsQuestionOptionsWApi.GetObjByQuestionOptionIdCache)", strQuestionOptionId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstCache(strCourseId);
try
{
const arrQuestionOptionsSel = arrQuestionOptionsObjLstCache.filter(x => 
 x.questionOptionId == strQuestionOptionId );
let objQuestionOptions: clsQuestionOptionsEN;
if (arrQuestionOptionsSel.length > 0)
{
objQuestionOptions = arrQuestionOptionsSel[0];
return objQuestionOptions;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQuestionOptionsConst = await QuestionOptions_GetObjByQuestionOptionIdAsync(strQuestionOptionId);
if (objQuestionOptionsConst != null)
{
QuestionOptions_ReFreshThisCache(strCourseId);
return objQuestionOptionsConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strQuestionOptionId, questionOptions_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQuestionOptions:所给的对象
 * @returns 对象
*/
export  async function QuestionOptions_UpdateObjInLstCache(objQuestionOptions: clsQuestionOptionsEN,strCourseId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstCache(strCourseId);
const obj = arrQuestionOptionsObjLstCache.find(x => x.optionName == objQuestionOptions.optionName && x.questionId == objQuestionOptions.questionId);
if (obj != null)
{
objQuestionOptions.questionOptionId = obj.questionOptionId;
ObjectAssign( obj, objQuestionOptions);
}
else
{
arrQuestionOptionsObjLstCache.push(objQuestionOptions);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, questionOptions_ConstructorName, strThisFuncName);
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
export  function QuestionOptions_SortFunDefa(a:clsQuestionOptionsEN , b:clsQuestionOptionsEN): number 
{
return a.questionOptionId.localeCompare(b.questionOptionId);
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
export  function QuestionOptions_SortFunDefa2Fld(a:clsQuestionOptionsEN , b:clsQuestionOptionsEN): number 
{
if (a.optionName == b.optionName) return a.questionId - b.questionId;
else return a.optionName.localeCompare(b.optionName);
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
export  function QuestionOptions_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQuestionOptionsEN.con_QuestionOptionId:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return a.questionOptionId.localeCompare(b.questionOptionId);
}
case clsQuestionOptionsEN.con_OptionName:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
if (a.optionName == null) return -1;
if (b.optionName == null) return 1;
return a.optionName.localeCompare(b.optionName);
}
case clsQuestionOptionsEN.con_QuestionId:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return a.questionId-b.questionId;
}
case clsQuestionOptionsEN.con_OptionIndex:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return a.optionIndex-b.optionIndex;
}
case clsQuestionOptionsEN.con_OptionTitle:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
if (a.optionTitle == null) return -1;
if (b.optionTitle == null) return 1;
return a.optionTitle.localeCompare(b.optionTitle);
}
case clsQuestionOptionsEN.con_OptionContent:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
if (a.optionContent == null) return -1;
if (b.optionContent == null) return 1;
return a.optionContent.localeCompare(b.optionContent);
}
case clsQuestionOptionsEN.con_IsCorrect:
return (a: clsQuestionOptionsEN) => {
if (a.isCorrect == true) return 1;
else return -1
}
case clsQuestionOptionsEN.con_Score:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return a.score-b.score;
}
case clsQuestionOptionsEN.con_IsShow:
return (a: clsQuestionOptionsEN) => {
if (a.isShow == true) return 1;
else return -1
}
case clsQuestionOptionsEN.con_CourseId:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsQuestionOptionsEN.con_UpdDate:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQuestionOptionsEN.con_UpdUser:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsQuestionOptionsEN.con_Memo:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionOptions]中不存在!(in ${ questionOptions_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQuestionOptionsEN.con_QuestionOptionId:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return b.questionOptionId.localeCompare(a.questionOptionId);
}
case clsQuestionOptionsEN.con_OptionName:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
if (b.optionName == null) return -1;
if (a.optionName == null) return 1;
return b.optionName.localeCompare(a.optionName);
}
case clsQuestionOptionsEN.con_QuestionId:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return b.questionId-a.questionId;
}
case clsQuestionOptionsEN.con_OptionIndex:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return b.optionIndex-a.optionIndex;
}
case clsQuestionOptionsEN.con_OptionTitle:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
if (b.optionTitle == null) return -1;
if (a.optionTitle == null) return 1;
return b.optionTitle.localeCompare(a.optionTitle);
}
case clsQuestionOptionsEN.con_OptionContent:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
if (b.optionContent == null) return -1;
if (a.optionContent == null) return 1;
return b.optionContent.localeCompare(a.optionContent);
}
case clsQuestionOptionsEN.con_IsCorrect:
return (b: clsQuestionOptionsEN) => {
if (b.isCorrect == true) return 1;
else return -1
}
case clsQuestionOptionsEN.con_Score:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return b.score-a.score;
}
case clsQuestionOptionsEN.con_IsShow:
return (b: clsQuestionOptionsEN) => {
if (b.isShow == true) return 1;
else return -1
}
case clsQuestionOptionsEN.con_CourseId:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsQuestionOptionsEN.con_UpdDate:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQuestionOptionsEN.con_UpdUser:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsQuestionOptionsEN.con_Memo:
return (a: clsQuestionOptionsEN, b: clsQuestionOptionsEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionOptions]中不存在!(in ${ questionOptions_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strQuestionOptionId:所给的关键字
 * @returns 对象
*/
export  async function QuestionOptions_GetNameByQuestionOptionIdCache(strQuestionOptionId: string,strCourseId: string) {

if (IsNullOrEmpty(strQuestionOptionId) == true)
{
  const strMsg = Format("参数:[strQuestionOptionId]不能为空!(In clsQuestionOptionsWApi.GetNameByQuestionOptionIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionOptionId.length != 8)
{
const strMsg = Format("缓存分类变量:[strQuestionOptionId]的长度:[{0}]不正确!(clsQuestionOptionsWApi.GetNameByQuestionOptionIdCache)", strQuestionOptionId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstCache(strCourseId);
if (arrQuestionOptionsObjLstCache == null) return "";
try
{
const arrQuestionOptionsSel = arrQuestionOptionsObjLstCache.filter(x => 
 x.questionOptionId == strQuestionOptionId );
let objQuestionOptions: clsQuestionOptionsEN;
if (arrQuestionOptionsSel.length > 0)
{
objQuestionOptions = arrQuestionOptionsSel[0];
return objQuestionOptions.optionName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strQuestionOptionId);
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
export  async function QuestionOptions_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQuestionOptionsEN.con_QuestionOptionId:
return (obj: clsQuestionOptionsEN) => {
return obj.questionOptionId === value;
}
case clsQuestionOptionsEN.con_OptionName:
return (obj: clsQuestionOptionsEN) => {
return obj.optionName === value;
}
case clsQuestionOptionsEN.con_QuestionId:
return (obj: clsQuestionOptionsEN) => {
return obj.questionId === value;
}
case clsQuestionOptionsEN.con_OptionIndex:
return (obj: clsQuestionOptionsEN) => {
return obj.optionIndex === value;
}
case clsQuestionOptionsEN.con_OptionTitle:
return (obj: clsQuestionOptionsEN) => {
return obj.optionTitle === value;
}
case clsQuestionOptionsEN.con_OptionContent:
return (obj: clsQuestionOptionsEN) => {
return obj.optionContent === value;
}
case clsQuestionOptionsEN.con_IsCorrect:
return (obj: clsQuestionOptionsEN) => {
return obj.isCorrect === value;
}
case clsQuestionOptionsEN.con_Score:
return (obj: clsQuestionOptionsEN) => {
return obj.score === value;
}
case clsQuestionOptionsEN.con_IsShow:
return (obj: clsQuestionOptionsEN) => {
return obj.isShow === value;
}
case clsQuestionOptionsEN.con_CourseId:
return (obj: clsQuestionOptionsEN) => {
return obj.courseId === value;
}
case clsQuestionOptionsEN.con_UpdDate:
return (obj: clsQuestionOptionsEN) => {
return obj.updDate === value;
}
case clsQuestionOptionsEN.con_UpdUser:
return (obj: clsQuestionOptionsEN) => {
return obj.updUser === value;
}
case clsQuestionOptionsEN.con_Memo:
return (obj: clsQuestionOptionsEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionOptions]中不存在!(in ${ questionOptions_ConstructorName}.${ strThisFuncName})`;
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
export  async function QuestionOptions_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsQuestionOptionsWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsQuestionOptionsWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsQuestionOptionsEN.con_QuestionOptionId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQuestionOptionsEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQuestionOptionsEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strQuestionOptionId = strInValue;
if (IsNullOrEmpty(strQuestionOptionId) == true)
{
return "";
}
const objQuestionOptions = await QuestionOptions_GetObjByQuestionOptionIdCache(strQuestionOptionId , strCourseIdClassfy);
if (objQuestionOptions == null) return "";
if (objQuestionOptions.GetFldValue(strOutFldName) == null) return "";
return objQuestionOptions.GetFldValue(strOutFldName).toString();
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
export  async function QuestionOptions_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsQuestionOptionsWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsQuestionOptionsWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsQuestionOptionsEN.con_QuestionOptionId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQuestionOptions = await QuestionOptions_GetObjLstCache(strCourseIdClassfy);
if (arrQuestionOptions == null) return [];
let arrQuestionOptionsSel = arrQuestionOptions;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQuestionOptionsSel.length == 0) return [];
return arrQuestionOptionsSel.map(x=>x.questionOptionId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QuestionOptions_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_GetFirstObjAsync(strWhereCond: string): Promise<clsQuestionOptionsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const objQuestionOptions = QuestionOptions_GetObjFromJsonObj(returnObj);
return objQuestionOptions;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsQuestionOptionsEN.WhereFormat) == false)
{
strWhereCond = Format(clsQuestionOptionsEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsQuestionOptionsEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsQuestionOptionsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionOptionsEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQuestionOptionsExObjLstCache: Array<clsQuestionOptionsEN> = CacheHelper.Get(strKey);
const arrQuestionOptionsObjLstT = QuestionOptions_GetObjLstByJSONObjLst(arrQuestionOptionsExObjLstCache);
return arrQuestionOptionsObjLstT;
}
try
{
const arrQuestionOptionsExObjLst = await QuestionOptions_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQuestionOptionsExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionOptionsExObjLst.length);
console.log(strInfo);
return arrQuestionOptionsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionOptions_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionOptions_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsQuestionOptionsEN.WhereFormat) == false)
{
strWhereCond = Format(clsQuestionOptionsEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsQuestionOptionsEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsQuestionOptionsEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsQuestionOptionsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionOptionsEN.CacheAddiCondition);
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
const arrQuestionOptionsExObjLstCache: Array<clsQuestionOptionsEN> = JSON.parse(strTempObjLst);
const arrQuestionOptionsObjLstT = QuestionOptions_GetObjLstByJSONObjLst(arrQuestionOptionsExObjLstCache);
return arrQuestionOptionsObjLstT;
}
try
{
const arrQuestionOptionsExObjLst = await QuestionOptions_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQuestionOptionsExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionOptionsExObjLst.length);
console.log(strInfo);
return arrQuestionOptionsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionOptions_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionOptions_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsQuestionOptionsEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQuestionOptionsObjLstCache: Array<clsQuestionOptionsEN> = JSON.parse(strTempObjLst);
return arrQuestionOptionsObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QuestionOptions_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQuestionOptionsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionOptions_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionOptions_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsQuestionOptionsEN.WhereFormat) == false)
{
strWhereCond = Format(clsQuestionOptionsEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsQuestionOptionsEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsQuestionOptionsEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsQuestionOptionsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionOptionsEN.CacheAddiCondition);
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
const arrQuestionOptionsExObjLstCache: Array<clsQuestionOptionsEN> = JSON.parse(strTempObjLst);
const arrQuestionOptionsObjLstT = QuestionOptions_GetObjLstByJSONObjLst(arrQuestionOptionsExObjLstCache);
return arrQuestionOptionsObjLstT;
}
try
{
const arrQuestionOptionsExObjLst = await QuestionOptions_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQuestionOptionsExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionOptionsExObjLst.length);
console.log(strInfo);
return arrQuestionOptionsExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionOptions_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionOptions_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsQuestionOptionsEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQuestionOptionsObjLstCache: Array<clsQuestionOptionsEN> = JSON.parse(strTempObjLst);
return arrQuestionOptionsObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionOptions_GetObjLstCache(strCourseId: string): Promise<Array<clsQuestionOptionsEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsQuestionOptionsWApi.QuestionOptions_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsQuestionOptionsWApi.QuestionOptions_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrQuestionOptionsObjLstCache;
switch (clsQuestionOptionsEN.CacheModeId)
{
case "04"://sessionStorage
arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstClientCache(strCourseId);
break;
default:
arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstClientCache(strCourseId);
break;
}
return arrQuestionOptionsObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionOptions_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQuestionOptionsObjLstCache;
switch (clsQuestionOptionsEN.CacheModeId)
{
case "04"://sessionStorage
arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrQuestionOptionsObjLstCache = null;
break;
default:
arrQuestionOptionsObjLstCache = null;
break;
}
return arrQuestionOptionsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrQuestionOptionIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QuestionOptions_GetSubObjLstCache(objQuestionOptionsCond: clsQuestionOptionsEN ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstCache(strCourseId);
let arrQuestionOptionsSel = arrQuestionOptionsObjLstCache;
if (objQuestionOptionsCond.sfFldComparisonOp == null || objQuestionOptionsCond.sfFldComparisonOp == "") return arrQuestionOptionsSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionOptionsCond.sfFldComparisonOp);
//console.log("clsQuestionOptionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionOptionsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionOptionsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQuestionOptionsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQuestionOptionsCond), questionOptions_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQuestionOptionsEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrQuestionOptionId:关键字列表
 * @returns 对象列表
 **/
export  async function QuestionOptions_GetObjLstByQuestionOptionIdLstAsync(arrQuestionOptionId: Array<string>): Promise<Array<clsQuestionOptionsEN>>  
{
const strThisFuncName = "GetObjLstByQuestionOptionIdLstAsync";
const strAction = "GetObjLstByQuestionOptionIdLst";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionOptionId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionOptions_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionOptions_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param arrstrQuestionOptionIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QuestionOptions_GetObjLstByQuestionOptionIdLstCache(arrQuestionOptionIdLst: Array<string> ,strCourseId: string) {
const strThisFuncName = "GetObjLstByQuestionOptionIdLstCache";
try
{
const arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstCache(strCourseId);
const arrQuestionOptionsSel = arrQuestionOptionsObjLstCache.filter(x => arrQuestionOptionIdLst.indexOf(x.questionOptionId)>-1);
return arrQuestionOptionsSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrQuestionOptionIdLst.join(","), questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQuestionOptionsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionOptions_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionOptions_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQuestionOptionsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionOptions_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionOptions_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQuestionOptionsEN>();
const arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstCache(strCourseId);
if (arrQuestionOptionsObjLstCache.length == 0) return arrQuestionOptionsObjLstCache;
let arrQuestionOptionsSel = arrQuestionOptionsObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQuestionOptionsCond = new clsQuestionOptionsEN();
ObjectAssign(objQuestionOptionsCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQuestionOptionsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionOptionsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQuestionOptionsSel.length == 0) return arrQuestionOptionsSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQuestionOptionsSel = arrQuestionOptionsSel.sort(QuestionOptions_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQuestionOptionsSel = arrQuestionOptionsSel.sort(objPagerPara.sortFun);
}
arrQuestionOptionsSel = arrQuestionOptionsSel.slice(intStart, intEnd);     
return arrQuestionOptionsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, questionOptions_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQuestionOptionsEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QuestionOptions_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQuestionOptionsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQuestionOptionsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionOptions_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionOptions_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param strQuestionOptionId:关键字
 * @returns 获取删除的结果
 **/
export  async function QuestionOptions_DelRecordAsync(strQuestionOptionId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(questionOptions_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strQuestionOptionId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param arrQuestionOptionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QuestionOptions_DelQuestionOptionssAsync(arrQuestionOptionId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQuestionOptionssAsync";
const strAction = "DelQuestionOptionss";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionOptionId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_DelQuestionOptionssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQuestionOptionssByCondAsync";
const strAction = "DelQuestionOptionssByCond";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objQuestionOptionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionOptions_AddNewRecordAsync(objQuestionOptionsEN: clsQuestionOptionsEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQuestionOptionsEN);
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionOptionsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objQuestionOptionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionOptions_AddNewRecordWithMaxIdAsync(objQuestionOptionsEN: clsQuestionOptionsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionOptionsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objQuestionOptionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionOptions_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objQuestionOptionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionOptions_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQuestionOptionsEN);
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objQuestionOptionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionOptions_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQuestionOptionsEN);
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_AddNewObjSave(objQuestionOptionsEN: clsQuestionOptionsEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QuestionOptions_CheckPropertyNew(objQuestionOptionsEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ questionOptions_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QuestionOptions_CheckUniCond4Add(objQuestionOptionsEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await QuestionOptions_AddNewRecordWithMaxIdAsync(objQuestionOptionsEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
QuestionOptions_ReFreshCache(objQuestionOptionsEN.courseId);
}
else
{
const strInfo = `添加[题目选项(QuestionOptions)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ questionOptions_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QuestionOptions_CheckUniCond4Add(objQuestionOptionsEN: clsQuestionOptionsEN): Promise<boolean>{
const strUniquenessCondition = QuestionOptions_GetUniCondStr(objQuestionOptionsEN);
const bolIsExistCondition = await QuestionOptions_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QuestionOptions_CheckUniCond4Update(objQuestionOptionsEN: clsQuestionOptionsEN): Promise<boolean>{
const strUniquenessCondition = QuestionOptions_GetUniCondStr4Update(objQuestionOptionsEN);
const bolIsExistCondition = await QuestionOptions_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QuestionOptions_UpdateObjSave(objQuestionOptionsEN: clsQuestionOptionsEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQuestionOptionsEN.sfUpdFldSetStr = objQuestionOptionsEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQuestionOptionsEN.questionOptionId == "" || objQuestionOptionsEN.questionOptionId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QuestionOptions_CheckProperty4Update(objQuestionOptionsEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ questionOptions_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QuestionOptions_CheckUniCond4Update(objQuestionOptionsEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QuestionOptions_UpdateRecordAsync(objQuestionOptionsEN);
if (returnBool == true)
{
QuestionOptions_ReFreshCache(objQuestionOptionsEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ questionOptions_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objQuestionOptionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionOptions_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQuestionOptionsEN);
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objQuestionOptionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionOptions_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objQuestionOptionsEN);
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objQuestionOptionsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QuestionOptions_AddNewRecordWithReturnKeyAsync(objQuestionOptionsEN: clsQuestionOptionsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionOptionsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objQuestionOptionsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QuestionOptions_UpdateRecordAsync(objQuestionOptionsEN: clsQuestionOptionsEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQuestionOptionsEN.sfUpdFldSetStr === undefined || objQuestionOptionsEN.sfUpdFldSetStr === null || objQuestionOptionsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionOptionsEN.questionOptionId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionOptionsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objQuestionOptionsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QuestionOptions_EditRecordExAsync(objQuestionOptionsEN: clsQuestionOptionsEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQuestionOptionsEN.sfUpdFldSetStr === undefined || objQuestionOptionsEN.sfUpdFldSetStr === null || objQuestionOptionsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionOptionsEN.questionOptionId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionOptionsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objQuestionOptionsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QuestionOptions_UpdateWithConditionAsync(objQuestionOptionsEN: clsQuestionOptionsEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQuestionOptionsEN.sfUpdFldSetStr === undefined || objQuestionOptionsEN.sfUpdFldSetStr === null || objQuestionOptionsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionOptionsEN.questionOptionId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);
objQuestionOptionsEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionOptionsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objstrQuestionOptionIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QuestionOptions_IsExistRecordCache(objQuestionOptionsCond: clsQuestionOptionsEN,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstCache(strCourseId);
if (arrQuestionOptionsObjLstCache == null) return false;
let arrQuestionOptionsSel = arrQuestionOptionsObjLstCache;
if (objQuestionOptionsCond.sfFldComparisonOp == null || objQuestionOptionsCond.sfFldComparisonOp == "") return arrQuestionOptionsSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionOptionsCond.sfFldComparisonOp);
//console.log("clsQuestionOptionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionOptionsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionOptionsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQuestionOptionsSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQuestionOptionsCond), questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param strQuestionOptionId:所给的关键字
 * @returns 对象
*/
export  async function QuestionOptions_IsExistCache(strQuestionOptionId:string,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstCache(strCourseId);
if (arrQuestionOptionsObjLstCache == null) return false;
try
{
const arrQuestionOptionsSel = arrQuestionOptionsObjLstCache.filter(x => x.questionOptionId == strQuestionOptionId);
if (arrQuestionOptionsSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strQuestionOptionId, questionOptions_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strQuestionOptionId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QuestionOptions_IsExistAsync(strQuestionOptionId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQuestionOptionId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
 * @param objQuestionOptionsCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QuestionOptions_GetRecCountByCondCache(objQuestionOptionsCond: clsQuestionOptionsEN ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQuestionOptionsObjLstCache = await QuestionOptions_GetObjLstCache(strCourseId);
if (arrQuestionOptionsObjLstCache == null) return 0;
let arrQuestionOptionsSel = arrQuestionOptionsObjLstCache;
if (objQuestionOptionsCond.sfFldComparisonOp == null || objQuestionOptionsCond.sfFldComparisonOp == "") return arrQuestionOptionsSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionOptionsCond.sfFldComparisonOp);
//console.log("clsQuestionOptionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionOptionsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionOptionsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionOptionsSel = arrQuestionOptionsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQuestionOptionsSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQuestionOptionsCond), questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  async function QuestionOptions_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(questionOptions_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionOptions_ConstructorName, strThisFuncName);
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
export  function QuestionOptions_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QuestionOptions_ReFreshCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsQuestionOptionsWApi.clsQuestionOptionsWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsQuestionOptionsWApi.clsQuestionOptionsWApi.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsQuestionOptionsEN._CurrTabName, strCourseId);
switch (clsQuestionOptionsEN.CacheModeId)
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
clsQuestionOptionsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function QuestionOptions_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsQuestionOptionsWApi.QuestionOptions_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsQuestionOptionsWApi.QuestionOptions_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsQuestionOptionsEN._CurrTabName, strCourseId);
switch (clsQuestionOptionsEN.CacheModeId)
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
clsQuestionOptionsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function QuestionOptions_GetLastRefreshTime():string
{
if (clsQuestionOptionsEN._RefreshTimeLst.length == 0) return "";
return clsQuestionOptionsEN._RefreshTimeLst[clsQuestionOptionsEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function QuestionOptions_Cache(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsQuestionOptionsWApi.)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsQuestionOptionsWApi.)", strCourseId.length);
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
const arrObjLstSel = await QuestionOptions_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQuestionOptionsEN.con_QuestionOptionId, clsQuestionOptionsEN.con_OptionName, "题目选项...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function QuestionOptions_GetArrQuestionOptions(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsQuestionOptionsWApi.)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsQuestionOptionsWApi.)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrQuestionOptions = new Array<clsQuestionOptionsEN>();
const arrObjLstSel = await QuestionOptions_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return null;
const obj0 = new clsQuestionOptionsEN();
obj0.questionOptionId = '0';
obj0.optionName = '选题目选项...';
arrQuestionOptions.push(obj0);
arrObjLstSel.forEach(x => arrQuestionOptions.push(x));
return arrQuestionOptions;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QuestionOptions_CheckPropertyNew(pobjQuestionOptionsEN: clsQuestionOptionsEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (null === pobjQuestionOptionsEN.questionId 
 || pobjQuestionOptionsEN.questionId != null && pobjQuestionOptionsEN.questionId.toString()  ===  ""
 || pobjQuestionOptionsEN.questionId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[题目Id]不能为空(In 题目选项)!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (null === pobjQuestionOptionsEN.optionIndex 
 || pobjQuestionOptionsEN.optionIndex != null && pobjQuestionOptionsEN.optionIndex.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[选项序号]不能为空(In 题目选项)!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.courseId) === true 
 || pobjQuestionOptionsEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 题目选项)!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.updDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改日期]不能为空(In 题目选项)!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 题目选项)!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQuestionOptionsEN.questionOptionId) == false && GetStrLen(pobjQuestionOptionsEN.questionOptionId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[题目选项Id(questionOptionId)]的长度不能超过8(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.questionOptionId}(clsQuestionOptionsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionName) == false && GetStrLen(pobjQuestionOptionsEN.optionName) > 4000)
{
 throw new Error(`(errid:Watl000413)字段[选项名称(optionName)]的长度不能超过4000(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.optionName}(clsQuestionOptionsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionTitle) == false && GetStrLen(pobjQuestionOptionsEN.optionTitle) > 20)
{
 throw new Error(`(errid:Watl000413)字段[选项标题(optionTitle)]的长度不能超过20(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.optionTitle}(clsQuestionOptionsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionContent) == false && GetStrLen(pobjQuestionOptionsEN.optionContent) > 4000)
{
 throw new Error(`(errid:Watl000413)字段[选项内容(optionContent)]的长度不能超过4000(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.optionContent}(clsQuestionOptionsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.courseId) == false && GetStrLen(pobjQuestionOptionsEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.courseId}(clsQuestionOptionsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.updDate) == false && GetStrLen(pobjQuestionOptionsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.updDate}(clsQuestionOptionsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.updUser) == false && GetStrLen(pobjQuestionOptionsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.updUser}(clsQuestionOptionsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.memo) == false && GetStrLen(pobjQuestionOptionsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.memo}(clsQuestionOptionsBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQuestionOptionsEN.questionOptionId) == false && undefined !== pobjQuestionOptionsEN.questionOptionId && tzDataType.isString(pobjQuestionOptionsEN.questionOptionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目选项Id(questionOptionId)]的值:[${pobjQuestionOptionsEN.questionOptionId}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionName) == false && undefined !== pobjQuestionOptionsEN.optionName && tzDataType.isString(pobjQuestionOptionsEN.optionName) === false)
{
 throw new Error(`(errid:Watl000414)字段[选项名称(optionName)]的值:[${pobjQuestionOptionsEN.optionName}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionOptionsEN.questionId && undefined !== pobjQuestionOptionsEN.questionId && tzDataType.isNumber(pobjQuestionOptionsEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjQuestionOptionsEN.questionId}], 非法,应该为数值型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionOptionsEN.optionIndex && undefined !== pobjQuestionOptionsEN.optionIndex && tzDataType.isNumber(pobjQuestionOptionsEN.optionIndex) === false)
{
 throw new Error(`(errid:Watl000414)字段[选项序号(optionIndex)]的值:[${pobjQuestionOptionsEN.optionIndex}], 非法,应该为数值型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionTitle) == false && undefined !== pobjQuestionOptionsEN.optionTitle && tzDataType.isString(pobjQuestionOptionsEN.optionTitle) === false)
{
 throw new Error(`(errid:Watl000414)字段[选项标题(optionTitle)]的值:[${pobjQuestionOptionsEN.optionTitle}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionContent) == false && undefined !== pobjQuestionOptionsEN.optionContent && tzDataType.isString(pobjQuestionOptionsEN.optionContent) === false)
{
 throw new Error(`(errid:Watl000414)字段[选项内容(optionContent)]的值:[${pobjQuestionOptionsEN.optionContent}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionOptionsEN.isCorrect && undefined !== pobjQuestionOptionsEN.isCorrect && tzDataType.isBoolean(pobjQuestionOptionsEN.isCorrect) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否正确(isCorrect)]的值:[${pobjQuestionOptionsEN.isCorrect}], 非法,应该为布尔型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionOptionsEN.score && undefined !== pobjQuestionOptionsEN.score && tzDataType.isNumber(pobjQuestionOptionsEN.score) === false)
{
 throw new Error(`(errid:Watl000414)字段[得分(score)]的值:[${pobjQuestionOptionsEN.score}], 非法,应该为数值型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionOptionsEN.isShow && undefined !== pobjQuestionOptionsEN.isShow && tzDataType.isBoolean(pobjQuestionOptionsEN.isShow) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否启用(isShow)]的值:[${pobjQuestionOptionsEN.isShow}], 非法,应该为布尔型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.courseId) == false && undefined !== pobjQuestionOptionsEN.courseId && tzDataType.isString(pobjQuestionOptionsEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjQuestionOptionsEN.courseId}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.updDate) == false && undefined !== pobjQuestionOptionsEN.updDate && tzDataType.isString(pobjQuestionOptionsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQuestionOptionsEN.updDate}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.updUser) == false && undefined !== pobjQuestionOptionsEN.updUser && tzDataType.isString(pobjQuestionOptionsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjQuestionOptionsEN.updUser}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.memo) == false && undefined !== pobjQuestionOptionsEN.memo && tzDataType.isString(pobjQuestionOptionsEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQuestionOptionsEN.memo}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QuestionOptions_CheckProperty4Update(pobjQuestionOptionsEN: clsQuestionOptionsEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQuestionOptionsEN.questionOptionId) == false && GetStrLen(pobjQuestionOptionsEN.questionOptionId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[题目选项Id(questionOptionId)]的长度不能超过8(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.questionOptionId}(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionName) == false && GetStrLen(pobjQuestionOptionsEN.optionName) > 4000)
{
 throw new Error(`(errid:Watl000416)字段[选项名称(optionName)]的长度不能超过4000(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.optionName}(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionTitle) == false && GetStrLen(pobjQuestionOptionsEN.optionTitle) > 20)
{
 throw new Error(`(errid:Watl000416)字段[选项标题(optionTitle)]的长度不能超过20(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.optionTitle}(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionContent) == false && GetStrLen(pobjQuestionOptionsEN.optionContent) > 4000)
{
 throw new Error(`(errid:Watl000416)字段[选项内容(optionContent)]的长度不能超过4000(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.optionContent}(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.courseId) == false && GetStrLen(pobjQuestionOptionsEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.courseId}(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.updDate) == false && GetStrLen(pobjQuestionOptionsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.updDate}(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.updUser) == false && GetStrLen(pobjQuestionOptionsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.updUser}(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.memo) == false && GetStrLen(pobjQuestionOptionsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 题目选项(QuestionOptions))!值:${pobjQuestionOptionsEN.memo}(clsQuestionOptionsBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQuestionOptionsEN.questionOptionId) == false && undefined !== pobjQuestionOptionsEN.questionOptionId && tzDataType.isString(pobjQuestionOptionsEN.questionOptionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目选项Id(questionOptionId)]的值:[${pobjQuestionOptionsEN.questionOptionId}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionName) == false && undefined !== pobjQuestionOptionsEN.optionName && tzDataType.isString(pobjQuestionOptionsEN.optionName) === false)
{
 throw new Error(`(errid:Watl000417)字段[选项名称(optionName)]的值:[${pobjQuestionOptionsEN.optionName}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (null != pobjQuestionOptionsEN.questionId && undefined !== pobjQuestionOptionsEN.questionId && tzDataType.isNumber(pobjQuestionOptionsEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjQuestionOptionsEN.questionId}], 非法,应该为数值型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (null != pobjQuestionOptionsEN.optionIndex && undefined !== pobjQuestionOptionsEN.optionIndex && tzDataType.isNumber(pobjQuestionOptionsEN.optionIndex) === false)
{
 throw new Error(`(errid:Watl000417)字段[选项序号(optionIndex)]的值:[${pobjQuestionOptionsEN.optionIndex}], 非法,应该为数值型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionTitle) == false && undefined !== pobjQuestionOptionsEN.optionTitle && tzDataType.isString(pobjQuestionOptionsEN.optionTitle) === false)
{
 throw new Error(`(errid:Watl000417)字段[选项标题(optionTitle)]的值:[${pobjQuestionOptionsEN.optionTitle}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.optionContent) == false && undefined !== pobjQuestionOptionsEN.optionContent && tzDataType.isString(pobjQuestionOptionsEN.optionContent) === false)
{
 throw new Error(`(errid:Watl000417)字段[选项内容(optionContent)]的值:[${pobjQuestionOptionsEN.optionContent}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (null != pobjQuestionOptionsEN.isCorrect && undefined !== pobjQuestionOptionsEN.isCorrect && tzDataType.isBoolean(pobjQuestionOptionsEN.isCorrect) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否正确(isCorrect)]的值:[${pobjQuestionOptionsEN.isCorrect}], 非法,应该为布尔型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (null != pobjQuestionOptionsEN.score && undefined !== pobjQuestionOptionsEN.score && tzDataType.isNumber(pobjQuestionOptionsEN.score) === false)
{
 throw new Error(`(errid:Watl000417)字段[得分(score)]的值:[${pobjQuestionOptionsEN.score}], 非法,应该为数值型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (null != pobjQuestionOptionsEN.isShow && undefined !== pobjQuestionOptionsEN.isShow && tzDataType.isBoolean(pobjQuestionOptionsEN.isShow) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否启用(isShow)]的值:[${pobjQuestionOptionsEN.isShow}], 非法,应该为布尔型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.courseId) == false && undefined !== pobjQuestionOptionsEN.courseId && tzDataType.isString(pobjQuestionOptionsEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjQuestionOptionsEN.courseId}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.updDate) == false && undefined !== pobjQuestionOptionsEN.updDate && tzDataType.isString(pobjQuestionOptionsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQuestionOptionsEN.updDate}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.updUser) == false && undefined !== pobjQuestionOptionsEN.updUser && tzDataType.isString(pobjQuestionOptionsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjQuestionOptionsEN.updUser}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionOptionsEN.memo) == false && undefined !== pobjQuestionOptionsEN.memo && tzDataType.isString(pobjQuestionOptionsEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQuestionOptionsEN.memo}], 非法,应该为字符型(In 题目选项(QuestionOptions))!(clsQuestionOptionsBL:CheckProperty4Update)`);
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
export  function QuestionOptions_GetJSONStrByObj (pobjQuestionOptionsEN: clsQuestionOptionsEN): string
{
pobjQuestionOptionsEN.sfUpdFldSetStr = pobjQuestionOptionsEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQuestionOptionsEN);
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
export  function QuestionOptions_GetObjLstByJSONStr (strJSON: string): Array<clsQuestionOptionsEN>
{
let arrQuestionOptionsObjLst = new Array<clsQuestionOptionsEN>();
if (strJSON === "")
{
return arrQuestionOptionsObjLst;
}
try
{
arrQuestionOptionsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQuestionOptionsObjLst;
}
return arrQuestionOptionsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQuestionOptionsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QuestionOptions_GetObjLstByJSONObjLst (arrQuestionOptionsObjLstS: Array<clsQuestionOptionsEN>): Array<clsQuestionOptionsEN>
{
const arrQuestionOptionsObjLst = new Array<clsQuestionOptionsEN>();
for (const objInFor of arrQuestionOptionsObjLstS) {
const obj1 = QuestionOptions_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQuestionOptionsObjLst.push(obj1);
}
return arrQuestionOptionsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QuestionOptions_GetObjByJSONStr (strJSON: string): clsQuestionOptionsEN
{
let pobjQuestionOptionsEN = new clsQuestionOptionsEN();
if (strJSON === "")
{
return pobjQuestionOptionsEN;
}
try
{
pobjQuestionOptionsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQuestionOptionsEN;
}
return pobjQuestionOptionsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QuestionOptions_GetCombineCondition(objQuestionOptionsCond: clsQuestionOptionsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_QuestionOptionId) == true)
{
const strComparisonOpQuestionOptionId:string = objQuestionOptionsCond.dicFldComparisonOp[clsQuestionOptionsEN.con_QuestionOptionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionOptionsEN.con_QuestionOptionId, objQuestionOptionsCond.questionOptionId, strComparisonOpQuestionOptionId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_OptionName) == true)
{
const strComparisonOpOptionName:string = objQuestionOptionsCond.dicFldComparisonOp[clsQuestionOptionsEN.con_OptionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionOptionsEN.con_OptionName, objQuestionOptionsCond.optionName, strComparisonOpOptionName);
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objQuestionOptionsCond.dicFldComparisonOp[clsQuestionOptionsEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionOptionsEN.con_QuestionId, objQuestionOptionsCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_OptionIndex) == true)
{
const strComparisonOpOptionIndex:string = objQuestionOptionsCond.dicFldComparisonOp[clsQuestionOptionsEN.con_OptionIndex];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionOptionsEN.con_OptionIndex, objQuestionOptionsCond.optionIndex, strComparisonOpOptionIndex);
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_OptionTitle) == true)
{
const strComparisonOpOptionTitle:string = objQuestionOptionsCond.dicFldComparisonOp[clsQuestionOptionsEN.con_OptionTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionOptionsEN.con_OptionTitle, objQuestionOptionsCond.optionTitle, strComparisonOpOptionTitle);
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_OptionContent) == true)
{
const strComparisonOpOptionContent:string = objQuestionOptionsCond.dicFldComparisonOp[clsQuestionOptionsEN.con_OptionContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionOptionsEN.con_OptionContent, objQuestionOptionsCond.optionContent, strComparisonOpOptionContent);
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_IsCorrect) == true)
{
if (objQuestionOptionsCond.isCorrect == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionOptionsEN.con_IsCorrect);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionOptionsEN.con_IsCorrect);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_Score) == true)
{
const strComparisonOpScore:string = objQuestionOptionsCond.dicFldComparisonOp[clsQuestionOptionsEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionOptionsEN.con_Score, objQuestionOptionsCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_IsShow) == true)
{
if (objQuestionOptionsCond.isShow == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionOptionsEN.con_IsShow);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionOptionsEN.con_IsShow);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objQuestionOptionsCond.dicFldComparisonOp[clsQuestionOptionsEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionOptionsEN.con_CourseId, objQuestionOptionsCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQuestionOptionsCond.dicFldComparisonOp[clsQuestionOptionsEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionOptionsEN.con_UpdDate, objQuestionOptionsCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQuestionOptionsCond.dicFldComparisonOp[clsQuestionOptionsEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionOptionsEN.con_UpdUser, objQuestionOptionsCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQuestionOptionsCond.dicFldComparisonOp, clsQuestionOptionsEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQuestionOptionsCond.dicFldComparisonOp[clsQuestionOptionsEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionOptionsEN.con_Memo, objQuestionOptionsCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QuestionOptions(题目选项),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strOptionName: 选项名称(要求唯一的字段)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QuestionOptions_GetUniCondStr(objQuestionOptionsEN: clsQuestionOptionsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and OptionName = '{0}'", objQuestionOptionsEN.optionName);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objQuestionOptionsEN.questionId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QuestionOptions(题目选项),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strOptionName: 选项名称(要求唯一的字段)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QuestionOptions_GetUniCondStr4Update(objQuestionOptionsEN: clsQuestionOptionsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and QuestionOptionId <> '{0}'", objQuestionOptionsEN.questionOptionId);
 strWhereCond +=  Format(" and OptionName = '{0}'", objQuestionOptionsEN.optionName);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objQuestionOptionsEN.questionId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objQuestionOptionsENS:源对象
 * @param objQuestionOptionsENT:目标对象
*/
export  function QuestionOptions_CopyObjTo(objQuestionOptionsENS: clsQuestionOptionsEN , objQuestionOptionsENT: clsQuestionOptionsEN ): void 
{
objQuestionOptionsENT.questionOptionId = objQuestionOptionsENS.questionOptionId; //题目选项Id
objQuestionOptionsENT.optionName = objQuestionOptionsENS.optionName; //选项名称
objQuestionOptionsENT.questionId = objQuestionOptionsENS.questionId; //题目Id
objQuestionOptionsENT.optionIndex = objQuestionOptionsENS.optionIndex; //选项序号
objQuestionOptionsENT.optionTitle = objQuestionOptionsENS.optionTitle; //选项标题
objQuestionOptionsENT.optionContent = objQuestionOptionsENS.optionContent; //选项内容
objQuestionOptionsENT.isCorrect = objQuestionOptionsENS.isCorrect; //是否正确
objQuestionOptionsENT.score = objQuestionOptionsENS.score; //得分
objQuestionOptionsENT.isShow = objQuestionOptionsENS.isShow; //是否启用
objQuestionOptionsENT.courseId = objQuestionOptionsENS.courseId; //课程Id
objQuestionOptionsENT.updDate = objQuestionOptionsENS.updDate; //修改日期
objQuestionOptionsENT.updUser = objQuestionOptionsENS.updUser; //修改人
objQuestionOptionsENT.memo = objQuestionOptionsENS.memo; //备注
objQuestionOptionsENT.sfUpdFldSetStr = objQuestionOptionsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQuestionOptionsENS:源对象
 * @param objQuestionOptionsENT:目标对象
*/
export  function QuestionOptions_GetObjFromJsonObj(objQuestionOptionsENS: clsQuestionOptionsEN): clsQuestionOptionsEN 
{
 const objQuestionOptionsENT: clsQuestionOptionsEN = new clsQuestionOptionsEN();
ObjectAssign(objQuestionOptionsENT, objQuestionOptionsENS);
 return objQuestionOptionsENT;
}