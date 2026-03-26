
 /**
 * 类名:clsQuestionnaireSetWApi
 * 表名:QuestionnaireSet(01120007)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:53
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
 * 问卷集(QuestionnaireSet)
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
import { clsQuestionnaireSetEN } from "@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireSetEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const questionnaireSet_Controller = "QuestionnaireSetApi";
 export const questionnaireSet_ConstructorName = "questionnaireSet";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strQuestionnaireSetId:关键字
 * @returns 对象
 **/
export  async function QuestionnaireSet_GetObjByQuestionnaireSetIdAsync(strQuestionnaireSetId: string): Promise<clsQuestionnaireSetEN|null>  
{
const strThisFuncName = "GetObjByQuestionnaireSetIdAsync";

if (IsNullOrEmpty(strQuestionnaireSetId) == true)
{
  const strMsg = Format("参数:[strQuestionnaireSetId]不能为空!(In clsQuestionnaireSetWApi.GetObjByQuestionnaireSetIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionnaireSetId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQuestionnaireSetId]的长度:[{0}]不正确!(clsQuestionnaireSetWApi.GetObjByQuestionnaireSetIdAsync)", strQuestionnaireSetId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByQuestionnaireSetId";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQuestionnaireSetId,
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
const objQuestionnaireSet = QuestionnaireSet_GetObjFromJsonObj(returnObj);
return objQuestionnaireSet;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param strQuestionnaireSetId:所给的关键字
 * @returns 对象
*/
export  async function QuestionnaireSet_GetObjByQuestionnaireSetIdlocalStorage(strQuestionnaireSetId: string) {
const strThisFuncName = "GetObjByQuestionnaireSetIdlocalStorage";

if (IsNullOrEmpty(strQuestionnaireSetId) == true)
{
  const strMsg = Format("参数:[strQuestionnaireSetId]不能为空!(In clsQuestionnaireSetWApi.GetObjByQuestionnaireSetIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionnaireSetId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQuestionnaireSetId]的长度:[{0}]不正确!(clsQuestionnaireSetWApi.GetObjByQuestionnaireSetIdlocalStorage)", strQuestionnaireSetId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQuestionnaireSetEN._CurrTabName, strQuestionnaireSetId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQuestionnaireSetCache: clsQuestionnaireSetEN = JSON.parse(strTempObj);
return objQuestionnaireSetCache;
}
try
{
const objQuestionnaireSet = await QuestionnaireSet_GetObjByQuestionnaireSetIdAsync(strQuestionnaireSetId);
if (objQuestionnaireSet != null)
{
localStorage.setItem(strKey, JSON.stringify(objQuestionnaireSet));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQuestionnaireSet;
}
return objQuestionnaireSet;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strQuestionnaireSetId, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strQuestionnaireSetId:所给的关键字
 * @returns 对象
*/
export  async function QuestionnaireSet_GetObjByQuestionnaireSetIdCache(strQuestionnaireSetId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByQuestionnaireSetIdCache";

if (IsNullOrEmpty(strQuestionnaireSetId) == true)
{
  const strMsg = Format("参数:[strQuestionnaireSetId]不能为空!(In clsQuestionnaireSetWApi.GetObjByQuestionnaireSetIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionnaireSetId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQuestionnaireSetId]的长度:[{0}]不正确!(clsQuestionnaireSetWApi.GetObjByQuestionnaireSetIdCache)", strQuestionnaireSetId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstCache();
try
{
const arrQuestionnaireSetSel = arrQuestionnaireSetObjLstCache.filter(x => 
 x.questionnaireSetId == strQuestionnaireSetId );
let objQuestionnaireSet: clsQuestionnaireSetEN;
if (arrQuestionnaireSetSel.length > 0)
{
objQuestionnaireSet = arrQuestionnaireSetSel[0];
return objQuestionnaireSet;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQuestionnaireSetConst = await QuestionnaireSet_GetObjByQuestionnaireSetIdAsync(strQuestionnaireSetId);
if (objQuestionnaireSetConst != null)
{
QuestionnaireSet_ReFreshThisCache();
return objQuestionnaireSetConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strQuestionnaireSetId, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQuestionnaireSet:所给的对象
 * @returns 对象
*/
export  async function QuestionnaireSet_UpdateObjInLstCache(objQuestionnaireSet: clsQuestionnaireSetEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstCache();
const obj = arrQuestionnaireSetObjLstCache.find(x => x.questionnaireSetName == objQuestionnaireSet.questionnaireSetName);
if (obj != null)
{
objQuestionnaireSet.questionnaireSetId = obj.questionnaireSetId;
ObjectAssign( obj, objQuestionnaireSet);
}
else
{
arrQuestionnaireSetObjLstCache.push(objQuestionnaireSet);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, questionnaireSet_ConstructorName, strThisFuncName);
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
export  function QuestionnaireSet_SortFunDefa(a:clsQuestionnaireSetEN , b:clsQuestionnaireSetEN): number 
{
return a.questionnaireSetId.localeCompare(b.questionnaireSetId);
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
export  function QuestionnaireSet_SortFunDefa2Fld(a:clsQuestionnaireSetEN , b:clsQuestionnaireSetEN): number 
{
if (a.questionnaireSetName == b.questionnaireSetName) return a.orderFieldInExport.localeCompare(b.orderFieldInExport);
else return a.questionnaireSetName.localeCompare(b.questionnaireSetName);
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
export  function QuestionnaireSet_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQuestionnaireSetEN.con_QuestionnaireSetId:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return a.questionnaireSetId.localeCompare(b.questionnaireSetId);
}
case clsQuestionnaireSetEN.con_QuestionnaireSetName:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return a.questionnaireSetName.localeCompare(b.questionnaireSetName);
}
case clsQuestionnaireSetEN.con_OrderFieldInExport:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
if (a.orderFieldInExport == null) return -1;
if (b.orderFieldInExport == null) return 1;
return a.orderFieldInExport.localeCompare(b.orderFieldInExport);
}
case clsQuestionnaireSetEN.con_ClassNo:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return a.classNo-b.classNo;
}
case clsQuestionnaireSetEN.con_ClassNo2:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return a.classNo2-b.classNo2;
}
case clsQuestionnaireSetEN.con_IsShowQuestionNo:
return (a: clsQuestionnaireSetEN) => {
if (a.isShowQuestionNo == true) return 1;
else return -1
}
case clsQuestionnaireSetEN.con_LogoFileName:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
if (a.logoFileName == null) return -1;
if (b.logoFileName == null) return 1;
return a.logoFileName.localeCompare(b.logoFileName);
}
case clsQuestionnaireSetEN.con_UpdDate:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQuestionnaireSetEN.con_UpdUser:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsQuestionnaireSetEN.con_Memo:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionnaireSet]中不存在!(in ${ questionnaireSet_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQuestionnaireSetEN.con_QuestionnaireSetId:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return b.questionnaireSetId.localeCompare(a.questionnaireSetId);
}
case clsQuestionnaireSetEN.con_QuestionnaireSetName:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return b.questionnaireSetName.localeCompare(a.questionnaireSetName);
}
case clsQuestionnaireSetEN.con_OrderFieldInExport:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
if (b.orderFieldInExport == null) return -1;
if (a.orderFieldInExport == null) return 1;
return b.orderFieldInExport.localeCompare(a.orderFieldInExport);
}
case clsQuestionnaireSetEN.con_ClassNo:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return b.classNo-a.classNo;
}
case clsQuestionnaireSetEN.con_ClassNo2:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return b.classNo2-a.classNo2;
}
case clsQuestionnaireSetEN.con_IsShowQuestionNo:
return (b: clsQuestionnaireSetEN) => {
if (b.isShowQuestionNo == true) return 1;
else return -1
}
case clsQuestionnaireSetEN.con_LogoFileName:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
if (b.logoFileName == null) return -1;
if (a.logoFileName == null) return 1;
return b.logoFileName.localeCompare(a.logoFileName);
}
case clsQuestionnaireSetEN.con_UpdDate:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQuestionnaireSetEN.con_UpdUser:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsQuestionnaireSetEN.con_Memo:
return (a: clsQuestionnaireSetEN, b: clsQuestionnaireSetEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionnaireSet]中不存在!(in ${ questionnaireSet_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strQuestionnaireSetId:所给的关键字
 * @returns 对象
*/
export  async function QuestionnaireSet_GetNameByQuestionnaireSetIdCache(strQuestionnaireSetId: string) {

if (IsNullOrEmpty(strQuestionnaireSetId) == true)
{
  const strMsg = Format("参数:[strQuestionnaireSetId]不能为空!(In clsQuestionnaireSetWApi.GetNameByQuestionnaireSetIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionnaireSetId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQuestionnaireSetId]的长度:[{0}]不正确!(clsQuestionnaireSetWApi.GetNameByQuestionnaireSetIdCache)", strQuestionnaireSetId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstCache();
if (arrQuestionnaireSetObjLstCache == null) return "";
try
{
const arrQuestionnaireSetSel = arrQuestionnaireSetObjLstCache.filter(x => 
 x.questionnaireSetId == strQuestionnaireSetId );
let objQuestionnaireSet: clsQuestionnaireSetEN;
if (arrQuestionnaireSetSel.length > 0)
{
objQuestionnaireSet = arrQuestionnaireSetSel[0];
return objQuestionnaireSet.questionnaireSetName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strQuestionnaireSetId);
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
export  async function QuestionnaireSet_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQuestionnaireSetEN.con_QuestionnaireSetId:
return (obj: clsQuestionnaireSetEN) => {
return obj.questionnaireSetId === value;
}
case clsQuestionnaireSetEN.con_QuestionnaireSetName:
return (obj: clsQuestionnaireSetEN) => {
return obj.questionnaireSetName === value;
}
case clsQuestionnaireSetEN.con_OrderFieldInExport:
return (obj: clsQuestionnaireSetEN) => {
return obj.orderFieldInExport === value;
}
case clsQuestionnaireSetEN.con_ClassNo:
return (obj: clsQuestionnaireSetEN) => {
return obj.classNo === value;
}
case clsQuestionnaireSetEN.con_ClassNo2:
return (obj: clsQuestionnaireSetEN) => {
return obj.classNo2 === value;
}
case clsQuestionnaireSetEN.con_IsShowQuestionNo:
return (obj: clsQuestionnaireSetEN) => {
return obj.isShowQuestionNo === value;
}
case clsQuestionnaireSetEN.con_LogoFileName:
return (obj: clsQuestionnaireSetEN) => {
return obj.logoFileName === value;
}
case clsQuestionnaireSetEN.con_UpdDate:
return (obj: clsQuestionnaireSetEN) => {
return obj.updDate === value;
}
case clsQuestionnaireSetEN.con_UpdUser:
return (obj: clsQuestionnaireSetEN) => {
return obj.updUser === value;
}
case clsQuestionnaireSetEN.con_Memo:
return (obj: clsQuestionnaireSetEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionnaireSet]中不存在!(in ${ questionnaireSet_ConstructorName}.${ strThisFuncName})`;
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
export  async function QuestionnaireSet_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQuestionnaireSetEN.con_QuestionnaireSetId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQuestionnaireSetEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQuestionnaireSetEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strQuestionnaireSetId = strInValue;
if (IsNullOrEmpty(strQuestionnaireSetId) == true)
{
return "";
}
const objQuestionnaireSet = await QuestionnaireSet_GetObjByQuestionnaireSetIdCache(strQuestionnaireSetId );
if (objQuestionnaireSet == null) return "";
if (objQuestionnaireSet.GetFldValue(strOutFldName) == null) return "";
return objQuestionnaireSet.GetFldValue(strOutFldName).toString();
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
export  async function QuestionnaireSet_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQuestionnaireSetEN.con_QuestionnaireSetId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQuestionnaireSet = await QuestionnaireSet_GetObjLstCache();
if (arrQuestionnaireSet == null) return [];
let arrQuestionnaireSetSel = arrQuestionnaireSet;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQuestionnaireSetSel.length == 0) return [];
return arrQuestionnaireSetSel.map(x=>x.questionnaireSetId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QuestionnaireSet_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_GetFirstObjAsync(strWhereCond: string): Promise<clsQuestionnaireSetEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const objQuestionnaireSet = QuestionnaireSet_GetObjFromJsonObj(returnObj);
return objQuestionnaireSet;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQuestionnaireSetEN._CurrTabName;
if (IsNullOrEmpty(clsQuestionnaireSetEN.WhereFormat) == false)
{
strWhereCond = clsQuestionnaireSetEN.WhereFormat;
}
if (IsNullOrEmpty(clsQuestionnaireSetEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionnaireSetEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQuestionnaireSetExObjLstCache: Array<clsQuestionnaireSetEN> = CacheHelper.Get(strKey);
const arrQuestionnaireSetObjLstT = QuestionnaireSet_GetObjLstByJSONObjLst(arrQuestionnaireSetExObjLstCache);
return arrQuestionnaireSetObjLstT;
}
try
{
const arrQuestionnaireSetExObjLst = await QuestionnaireSet_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQuestionnaireSetExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionnaireSetExObjLst.length);
console.log(strInfo);
return arrQuestionnaireSetExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionnaireSet_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQuestionnaireSetEN._CurrTabName;
if (IsNullOrEmpty(clsQuestionnaireSetEN.WhereFormat) == false)
{
strWhereCond = clsQuestionnaireSetEN.WhereFormat;
}
if (IsNullOrEmpty(clsQuestionnaireSetEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionnaireSetEN.CacheAddiCondition);
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
const arrQuestionnaireSetExObjLstCache: Array<clsQuestionnaireSetEN> = JSON.parse(strTempObjLst);
const arrQuestionnaireSetObjLstT = QuestionnaireSet_GetObjLstByJSONObjLst(arrQuestionnaireSetExObjLstCache);
return arrQuestionnaireSetObjLstT;
}
try
{
const arrQuestionnaireSetExObjLst = await QuestionnaireSet_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQuestionnaireSetExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionnaireSetExObjLst.length);
console.log(strInfo);
return arrQuestionnaireSetExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionnaireSet_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQuestionnaireSetEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQuestionnaireSetObjLstCache: Array<clsQuestionnaireSetEN> = JSON.parse(strTempObjLst);
return arrQuestionnaireSetObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QuestionnaireSet_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQuestionnaireSetEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionnaireSet_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionnaireSet_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQuestionnaireSetEN._CurrTabName;
if (IsNullOrEmpty(clsQuestionnaireSetEN.WhereFormat) == false)
{
strWhereCond = clsQuestionnaireSetEN.WhereFormat;
}
if (IsNullOrEmpty(clsQuestionnaireSetEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionnaireSetEN.CacheAddiCondition);
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
const arrQuestionnaireSetExObjLstCache: Array<clsQuestionnaireSetEN> = JSON.parse(strTempObjLst);
const arrQuestionnaireSetObjLstT = QuestionnaireSet_GetObjLstByJSONObjLst(arrQuestionnaireSetExObjLstCache);
return arrQuestionnaireSetObjLstT;
}
try
{
const arrQuestionnaireSetExObjLst = await QuestionnaireSet_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQuestionnaireSetExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionnaireSetExObjLst.length);
console.log(strInfo);
return arrQuestionnaireSetExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionnaireSet_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQuestionnaireSetEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQuestionnaireSetObjLstCache: Array<clsQuestionnaireSetEN> = JSON.parse(strTempObjLst);
return arrQuestionnaireSetObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionnaireSet_GetObjLstCache(): Promise<Array<clsQuestionnaireSetEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQuestionnaireSetObjLstCache;
switch (clsQuestionnaireSetEN.CacheModeId)
{
case "04"://sessionStorage
arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstClientCache();
break;
default:
arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstClientCache();
break;
}
return arrQuestionnaireSetObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionnaireSet_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQuestionnaireSetObjLstCache;
switch (clsQuestionnaireSetEN.CacheModeId)
{
case "04"://sessionStorage
arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQuestionnaireSetObjLstCache = null;
break;
default:
arrQuestionnaireSetObjLstCache = null;
break;
}
return arrQuestionnaireSetObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrQuestionnaireSetIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QuestionnaireSet_GetSubObjLstCache(objQuestionnaireSetCond: clsQuestionnaireSetEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstCache();
let arrQuestionnaireSetSel = arrQuestionnaireSetObjLstCache;
if (objQuestionnaireSetCond.sfFldComparisonOp == null || objQuestionnaireSetCond.sfFldComparisonOp == "") return arrQuestionnaireSetSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionnaireSetCond.sfFldComparisonOp);
//console.log("clsQuestionnaireSetWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionnaireSetCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionnaireSetCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQuestionnaireSetSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQuestionnaireSetCond), questionnaireSet_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQuestionnaireSetEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrQuestionnaireSetId:关键字列表
 * @returns 对象列表
 **/
export  async function QuestionnaireSet_GetObjLstByQuestionnaireSetIdLstAsync(arrQuestionnaireSetId: Array<string>): Promise<Array<clsQuestionnaireSetEN>>  
{
const strThisFuncName = "GetObjLstByQuestionnaireSetIdLstAsync";
const strAction = "GetObjLstByQuestionnaireSetIdLst";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionnaireSetId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionnaireSet_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionnaireSet_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param arrstrQuestionnaireSetIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QuestionnaireSet_GetObjLstByQuestionnaireSetIdLstCache(arrQuestionnaireSetIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByQuestionnaireSetIdLstCache";
try
{
const arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstCache();
const arrQuestionnaireSetSel = arrQuestionnaireSetObjLstCache.filter(x => arrQuestionnaireSetIdLst.indexOf(x.questionnaireSetId)>-1);
return arrQuestionnaireSetSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrQuestionnaireSetIdLst.join(","), questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQuestionnaireSetEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionnaireSet_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionnaireSet_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQuestionnaireSetEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionnaireSet_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionnaireSet_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQuestionnaireSetEN>();
const arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstCache();
if (arrQuestionnaireSetObjLstCache.length == 0) return arrQuestionnaireSetObjLstCache;
let arrQuestionnaireSetSel = arrQuestionnaireSetObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQuestionnaireSetCond = new clsQuestionnaireSetEN();
ObjectAssign(objQuestionnaireSetCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQuestionnaireSetWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionnaireSetCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQuestionnaireSetSel.length == 0) return arrQuestionnaireSetSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQuestionnaireSetSel = arrQuestionnaireSetSel.sort(QuestionnaireSet_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQuestionnaireSetSel = arrQuestionnaireSetSel.sort(objPagerPara.sortFun);
}
arrQuestionnaireSetSel = arrQuestionnaireSetSel.slice(intStart, intEnd);     
return arrQuestionnaireSetSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQuestionnaireSetEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QuestionnaireSet_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQuestionnaireSetEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQuestionnaireSetEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionnaireSet_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionnaireSet_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param strQuestionnaireSetId:关键字
 * @returns 获取删除的结果
 **/
export  async function QuestionnaireSet_DelRecordAsync(strQuestionnaireSetId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strQuestionnaireSetId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param arrQuestionnaireSetId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QuestionnaireSet_DelQuestionnaireSetsAsync(arrQuestionnaireSetId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQuestionnaireSetsAsync";
const strAction = "DelQuestionnaireSets";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionnaireSetId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_DelQuestionnaireSetsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQuestionnaireSetsByCondAsync";
const strAction = "DelQuestionnaireSetsByCond";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param objQuestionnaireSetEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionnaireSet_AddNewRecordAsync(objQuestionnaireSetEN: clsQuestionnaireSetEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQuestionnaireSetEN);
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionnaireSetEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param objQuestionnaireSetEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionnaireSet_AddNewRecordWithMaxIdAsync(objQuestionnaireSetEN: clsQuestionnaireSetEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionnaireSetEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_AddNewObjSave(objQuestionnaireSetEN: clsQuestionnaireSetEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QuestionnaireSet_CheckPropertyNew(objQuestionnaireSetEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ questionnaireSet_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QuestionnaireSet_CheckUniCond4Add(objQuestionnaireSetEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await QuestionnaireSet_AddNewRecordWithMaxIdAsync(objQuestionnaireSetEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
QuestionnaireSet_ReFreshCache();
}
else
{
const strInfo = `添加[问卷集(QuestionnaireSet)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ questionnaireSet_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QuestionnaireSet_CheckUniCond4Add(objQuestionnaireSetEN: clsQuestionnaireSetEN): Promise<boolean>{
const strUniquenessCondition = QuestionnaireSet_GetUniCondStr(objQuestionnaireSetEN);
const bolIsExistCondition = await QuestionnaireSet_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QuestionnaireSet_CheckUniCond4Update(objQuestionnaireSetEN: clsQuestionnaireSetEN): Promise<boolean>{
const strUniquenessCondition = QuestionnaireSet_GetUniCondStr4Update(objQuestionnaireSetEN);
const bolIsExistCondition = await QuestionnaireSet_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QuestionnaireSet_UpdateObjSave(objQuestionnaireSetEN: clsQuestionnaireSetEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQuestionnaireSetEN.sfUpdFldSetStr = objQuestionnaireSetEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQuestionnaireSetEN.questionnaireSetId == "" || objQuestionnaireSetEN.questionnaireSetId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QuestionnaireSet_CheckProperty4Update(objQuestionnaireSetEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ questionnaireSet_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QuestionnaireSet_CheckUniCond4Update(objQuestionnaireSetEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QuestionnaireSet_UpdateRecordAsync(objQuestionnaireSetEN);
if (returnBool == true)
{
QuestionnaireSet_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ questionnaireSet_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQuestionnaireSetEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QuestionnaireSet_AddNewRecordWithReturnKeyAsync(objQuestionnaireSetEN: clsQuestionnaireSetEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionnaireSetEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param objQuestionnaireSetEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QuestionnaireSet_UpdateRecordAsync(objQuestionnaireSetEN: clsQuestionnaireSetEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQuestionnaireSetEN.sfUpdFldSetStr === undefined || objQuestionnaireSetEN.sfUpdFldSetStr === null || objQuestionnaireSetEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionnaireSetEN.questionnaireSetId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionnaireSetEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param objQuestionnaireSetEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QuestionnaireSet_EditRecordExAsync(objQuestionnaireSetEN: clsQuestionnaireSetEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQuestionnaireSetEN.sfUpdFldSetStr === undefined || objQuestionnaireSetEN.sfUpdFldSetStr === null || objQuestionnaireSetEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionnaireSetEN.questionnaireSetId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionnaireSetEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param objQuestionnaireSetEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QuestionnaireSet_UpdateWithConditionAsync(objQuestionnaireSetEN: clsQuestionnaireSetEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQuestionnaireSetEN.sfUpdFldSetStr === undefined || objQuestionnaireSetEN.sfUpdFldSetStr === null || objQuestionnaireSetEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionnaireSetEN.questionnaireSetId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);
objQuestionnaireSetEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionnaireSetEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param objstrQuestionnaireSetIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QuestionnaireSet_IsExistRecordCache(objQuestionnaireSetCond: clsQuestionnaireSetEN) {
const strThisFuncName = "IsExistRecordCache";
const arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstCache();
if (arrQuestionnaireSetObjLstCache == null) return false;
let arrQuestionnaireSetSel = arrQuestionnaireSetObjLstCache;
if (objQuestionnaireSetCond.sfFldComparisonOp == null || objQuestionnaireSetCond.sfFldComparisonOp == "") return arrQuestionnaireSetSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionnaireSetCond.sfFldComparisonOp);
//console.log("clsQuestionnaireSetWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionnaireSetCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionnaireSetCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQuestionnaireSetSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQuestionnaireSetCond), questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param strQuestionnaireSetId:所给的关键字
 * @returns 对象
*/
export  async function QuestionnaireSet_IsExistCache(strQuestionnaireSetId:string) {
const strThisFuncName = "IsExistCache";
const arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstCache();
if (arrQuestionnaireSetObjLstCache == null) return false;
try
{
const arrQuestionnaireSetSel = arrQuestionnaireSetObjLstCache.filter(x => x.questionnaireSetId == strQuestionnaireSetId);
if (arrQuestionnaireSetSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strQuestionnaireSetId, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strQuestionnaireSetId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QuestionnaireSet_IsExistAsync(strQuestionnaireSetId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQuestionnaireSetId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
 * @param objQuestionnaireSetCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QuestionnaireSet_GetRecCountByCondCache(objQuestionnaireSetCond: clsQuestionnaireSetEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQuestionnaireSetObjLstCache = await QuestionnaireSet_GetObjLstCache();
if (arrQuestionnaireSetObjLstCache == null) return 0;
let arrQuestionnaireSetSel = arrQuestionnaireSetObjLstCache;
if (objQuestionnaireSetCond.sfFldComparisonOp == null || objQuestionnaireSetCond.sfFldComparisonOp == "") return arrQuestionnaireSetSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionnaireSetCond.sfFldComparisonOp);
//console.log("clsQuestionnaireSetWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionnaireSetCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionnaireSetCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionnaireSetSel = arrQuestionnaireSetSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQuestionnaireSetSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQuestionnaireSetCond), questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  async function QuestionnaireSet_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(questionnaireSet_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaireSet_ConstructorName, strThisFuncName);
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
export  function QuestionnaireSet_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QuestionnaireSet_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQuestionnaireSetEN._CurrTabName;
switch (clsQuestionnaireSetEN.CacheModeId)
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
clsQuestionnaireSetEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function QuestionnaireSet_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQuestionnaireSetEN._CurrTabName;
switch (clsQuestionnaireSetEN.CacheModeId)
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
clsQuestionnaireSetEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function QuestionnaireSet_GetLastRefreshTime():string
{
if (clsQuestionnaireSetEN._RefreshTimeLst.length == 0) return "";
return clsQuestionnaireSetEN._RefreshTimeLst[clsQuestionnaireSetEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QuestionnaireSet_BindDdl_QuestionnaireSetIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_QuestionnaireSetIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_QuestionnaireSetIdInDivCache");
const arrObjLstSel = await QuestionnaireSet_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQuestionnaireSetEN.con_QuestionnaireSetId, clsQuestionnaireSetEN.con_QuestionnaireSetName, "问卷集...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QuestionnaireSet_GetArrQuestionnaireSet()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_QuestionnaireSetIdInDivCache");
const arrQuestionnaireSet = new Array<clsQuestionnaireSetEN>();
const arrObjLstSel = await QuestionnaireSet_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsQuestionnaireSetEN();
obj0.questionnaireSetId = '0';
obj0.questionnaireSetName = '选问卷集...';
arrQuestionnaireSet.push(obj0);
arrObjLstSel.forEach(x => arrQuestionnaireSet.push(x));
return arrQuestionnaireSet;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QuestionnaireSet_CheckPropertyNew(pobjQuestionnaireSetEN: clsQuestionnaireSetEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQuestionnaireSetEN.questionnaireSetName) === true )
{
 throw new Error(`(errid:Watl000411)字段[问卷集名]不能为空(In 问卷集)!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
if (null === pobjQuestionnaireSetEN.isShowQuestionNo 
 || pobjQuestionnaireSetEN.isShowQuestionNo != null && pobjQuestionnaireSetEN.isShowQuestionNo.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否显示问题编号]不能为空(In 问卷集)!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 问卷集)!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQuestionnaireSetEN.questionnaireSetId) == false && GetStrLen(pobjQuestionnaireSetEN.questionnaireSetId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[问卷集ID(questionnaireSetId)]的长度不能超过4(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.questionnaireSetId}(clsQuestionnaireSetBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.questionnaireSetName) == false && GetStrLen(pobjQuestionnaireSetEN.questionnaireSetName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[问卷集名(questionnaireSetName)]的长度不能超过50(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.questionnaireSetName}(clsQuestionnaireSetBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.orderFieldInExport) == false && GetStrLen(pobjQuestionnaireSetEN.orderFieldInExport) > 200)
{
 throw new Error(`(errid:Watl000413)字段[导出排序字段(orderFieldInExport)]的长度不能超过200(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.orderFieldInExport}(clsQuestionnaireSetBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.logoFileName) == false && GetStrLen(pobjQuestionnaireSetEN.logoFileName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[Logo文件名(logoFileName)]的长度不能超过50(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.logoFileName}(clsQuestionnaireSetBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.updDate) == false && GetStrLen(pobjQuestionnaireSetEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.updDate}(clsQuestionnaireSetBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.updUser) == false && GetStrLen(pobjQuestionnaireSetEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.updUser}(clsQuestionnaireSetBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.memo) == false && GetStrLen(pobjQuestionnaireSetEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.memo}(clsQuestionnaireSetBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQuestionnaireSetEN.questionnaireSetId) == false && undefined !== pobjQuestionnaireSetEN.questionnaireSetId && tzDataType.isString(pobjQuestionnaireSetEN.questionnaireSetId) === false)
{
 throw new Error(`(errid:Watl000414)字段[问卷集ID(questionnaireSetId)]的值:[${pobjQuestionnaireSetEN.questionnaireSetId}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.questionnaireSetName) == false && undefined !== pobjQuestionnaireSetEN.questionnaireSetName && tzDataType.isString(pobjQuestionnaireSetEN.questionnaireSetName) === false)
{
 throw new Error(`(errid:Watl000414)字段[问卷集名(questionnaireSetName)]的值:[${pobjQuestionnaireSetEN.questionnaireSetName}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.orderFieldInExport) == false && undefined !== pobjQuestionnaireSetEN.orderFieldInExport && tzDataType.isString(pobjQuestionnaireSetEN.orderFieldInExport) === false)
{
 throw new Error(`(errid:Watl000414)字段[导出排序字段(orderFieldInExport)]的值:[${pobjQuestionnaireSetEN.orderFieldInExport}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireSetEN.classNo && undefined !== pobjQuestionnaireSetEN.classNo && tzDataType.isNumber(pobjQuestionnaireSetEN.classNo) === false)
{
 throw new Error(`(errid:Watl000414)字段[分类号1(classNo)]的值:[${pobjQuestionnaireSetEN.classNo}], 非法,应该为数值型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireSetEN.classNo2 && undefined !== pobjQuestionnaireSetEN.classNo2 && tzDataType.isNumber(pobjQuestionnaireSetEN.classNo2) === false)
{
 throw new Error(`(errid:Watl000414)字段[分类号2(classNo2)]的值:[${pobjQuestionnaireSetEN.classNo2}], 非法,应该为数值型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireSetEN.isShowQuestionNo && undefined !== pobjQuestionnaireSetEN.isShowQuestionNo && tzDataType.isBoolean(pobjQuestionnaireSetEN.isShowQuestionNo) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否显示问题编号(isShowQuestionNo)]的值:[${pobjQuestionnaireSetEN.isShowQuestionNo}], 非法,应该为布尔型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.logoFileName) == false && undefined !== pobjQuestionnaireSetEN.logoFileName && tzDataType.isString(pobjQuestionnaireSetEN.logoFileName) === false)
{
 throw new Error(`(errid:Watl000414)字段[Logo文件名(logoFileName)]的值:[${pobjQuestionnaireSetEN.logoFileName}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.updDate) == false && undefined !== pobjQuestionnaireSetEN.updDate && tzDataType.isString(pobjQuestionnaireSetEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQuestionnaireSetEN.updDate}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.updUser) == false && undefined !== pobjQuestionnaireSetEN.updUser && tzDataType.isString(pobjQuestionnaireSetEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjQuestionnaireSetEN.updUser}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.memo) == false && undefined !== pobjQuestionnaireSetEN.memo && tzDataType.isString(pobjQuestionnaireSetEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQuestionnaireSetEN.memo}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QuestionnaireSet_CheckProperty4Update(pobjQuestionnaireSetEN: clsQuestionnaireSetEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQuestionnaireSetEN.questionnaireSetId) == false && GetStrLen(pobjQuestionnaireSetEN.questionnaireSetId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[问卷集ID(questionnaireSetId)]的长度不能超过4(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.questionnaireSetId}(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.questionnaireSetName) == false && GetStrLen(pobjQuestionnaireSetEN.questionnaireSetName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[问卷集名(questionnaireSetName)]的长度不能超过50(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.questionnaireSetName}(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.orderFieldInExport) == false && GetStrLen(pobjQuestionnaireSetEN.orderFieldInExport) > 200)
{
 throw new Error(`(errid:Watl000416)字段[导出排序字段(orderFieldInExport)]的长度不能超过200(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.orderFieldInExport}(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.logoFileName) == false && GetStrLen(pobjQuestionnaireSetEN.logoFileName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[Logo文件名(logoFileName)]的长度不能超过50(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.logoFileName}(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.updDate) == false && GetStrLen(pobjQuestionnaireSetEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.updDate}(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.updUser) == false && GetStrLen(pobjQuestionnaireSetEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.updUser}(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.memo) == false && GetStrLen(pobjQuestionnaireSetEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 问卷集(QuestionnaireSet))!值:${pobjQuestionnaireSetEN.memo}(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQuestionnaireSetEN.questionnaireSetId) == false && undefined !== pobjQuestionnaireSetEN.questionnaireSetId && tzDataType.isString(pobjQuestionnaireSetEN.questionnaireSetId) === false)
{
 throw new Error(`(errid:Watl000417)字段[问卷集ID(questionnaireSetId)]的值:[${pobjQuestionnaireSetEN.questionnaireSetId}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.questionnaireSetName) == false && undefined !== pobjQuestionnaireSetEN.questionnaireSetName && tzDataType.isString(pobjQuestionnaireSetEN.questionnaireSetName) === false)
{
 throw new Error(`(errid:Watl000417)字段[问卷集名(questionnaireSetName)]的值:[${pobjQuestionnaireSetEN.questionnaireSetName}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.orderFieldInExport) == false && undefined !== pobjQuestionnaireSetEN.orderFieldInExport && tzDataType.isString(pobjQuestionnaireSetEN.orderFieldInExport) === false)
{
 throw new Error(`(errid:Watl000417)字段[导出排序字段(orderFieldInExport)]的值:[${pobjQuestionnaireSetEN.orderFieldInExport}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireSetEN.classNo && undefined !== pobjQuestionnaireSetEN.classNo && tzDataType.isNumber(pobjQuestionnaireSetEN.classNo) === false)
{
 throw new Error(`(errid:Watl000417)字段[分类号1(classNo)]的值:[${pobjQuestionnaireSetEN.classNo}], 非法,应该为数值型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireSetEN.classNo2 && undefined !== pobjQuestionnaireSetEN.classNo2 && tzDataType.isNumber(pobjQuestionnaireSetEN.classNo2) === false)
{
 throw new Error(`(errid:Watl000417)字段[分类号2(classNo2)]的值:[${pobjQuestionnaireSetEN.classNo2}], 非法,应该为数值型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireSetEN.isShowQuestionNo && undefined !== pobjQuestionnaireSetEN.isShowQuestionNo && tzDataType.isBoolean(pobjQuestionnaireSetEN.isShowQuestionNo) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否显示问题编号(isShowQuestionNo)]的值:[${pobjQuestionnaireSetEN.isShowQuestionNo}], 非法,应该为布尔型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.logoFileName) == false && undefined !== pobjQuestionnaireSetEN.logoFileName && tzDataType.isString(pobjQuestionnaireSetEN.logoFileName) === false)
{
 throw new Error(`(errid:Watl000417)字段[Logo文件名(logoFileName)]的值:[${pobjQuestionnaireSetEN.logoFileName}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.updDate) == false && undefined !== pobjQuestionnaireSetEN.updDate && tzDataType.isString(pobjQuestionnaireSetEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQuestionnaireSetEN.updDate}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.updUser) == false && undefined !== pobjQuestionnaireSetEN.updUser && tzDataType.isString(pobjQuestionnaireSetEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjQuestionnaireSetEN.updUser}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireSetEN.memo) == false && undefined !== pobjQuestionnaireSetEN.memo && tzDataType.isString(pobjQuestionnaireSetEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQuestionnaireSetEN.memo}], 非法,应该为字符型(In 问卷集(QuestionnaireSet))!(clsQuestionnaireSetBL:CheckProperty4Update)`);
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
export  function QuestionnaireSet_GetJSONStrByObj (pobjQuestionnaireSetEN: clsQuestionnaireSetEN): string
{
pobjQuestionnaireSetEN.sfUpdFldSetStr = pobjQuestionnaireSetEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQuestionnaireSetEN);
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
export  function QuestionnaireSet_GetObjLstByJSONStr (strJSON: string): Array<clsQuestionnaireSetEN>
{
let arrQuestionnaireSetObjLst = new Array<clsQuestionnaireSetEN>();
if (strJSON === "")
{
return arrQuestionnaireSetObjLst;
}
try
{
arrQuestionnaireSetObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQuestionnaireSetObjLst;
}
return arrQuestionnaireSetObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQuestionnaireSetObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QuestionnaireSet_GetObjLstByJSONObjLst (arrQuestionnaireSetObjLstS: Array<clsQuestionnaireSetEN>): Array<clsQuestionnaireSetEN>
{
const arrQuestionnaireSetObjLst = new Array<clsQuestionnaireSetEN>();
for (const objInFor of arrQuestionnaireSetObjLstS) {
const obj1 = QuestionnaireSet_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQuestionnaireSetObjLst.push(obj1);
}
return arrQuestionnaireSetObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QuestionnaireSet_GetObjByJSONStr (strJSON: string): clsQuestionnaireSetEN
{
let pobjQuestionnaireSetEN = new clsQuestionnaireSetEN();
if (strJSON === "")
{
return pobjQuestionnaireSetEN;
}
try
{
pobjQuestionnaireSetEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQuestionnaireSetEN;
}
return pobjQuestionnaireSetEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QuestionnaireSet_GetCombineCondition(objQuestionnaireSetCond: clsQuestionnaireSetEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQuestionnaireSetCond.dicFldComparisonOp, clsQuestionnaireSetEN.con_QuestionnaireSetId) == true)
{
const strComparisonOpQuestionnaireSetId:string = objQuestionnaireSetCond.dicFldComparisonOp[clsQuestionnaireSetEN.con_QuestionnaireSetId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireSetEN.con_QuestionnaireSetId, objQuestionnaireSetCond.questionnaireSetId, strComparisonOpQuestionnaireSetId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireSetCond.dicFldComparisonOp, clsQuestionnaireSetEN.con_QuestionnaireSetName) == true)
{
const strComparisonOpQuestionnaireSetName:string = objQuestionnaireSetCond.dicFldComparisonOp[clsQuestionnaireSetEN.con_QuestionnaireSetName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireSetEN.con_QuestionnaireSetName, objQuestionnaireSetCond.questionnaireSetName, strComparisonOpQuestionnaireSetName);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireSetCond.dicFldComparisonOp, clsQuestionnaireSetEN.con_OrderFieldInExport) == true)
{
const strComparisonOpOrderFieldInExport:string = objQuestionnaireSetCond.dicFldComparisonOp[clsQuestionnaireSetEN.con_OrderFieldInExport];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireSetEN.con_OrderFieldInExport, objQuestionnaireSetCond.orderFieldInExport, strComparisonOpOrderFieldInExport);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireSetCond.dicFldComparisonOp, clsQuestionnaireSetEN.con_ClassNo) == true)
{
const strComparisonOpClassNo:string = objQuestionnaireSetCond.dicFldComparisonOp[clsQuestionnaireSetEN.con_ClassNo];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireSetEN.con_ClassNo, objQuestionnaireSetCond.classNo, strComparisonOpClassNo);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireSetCond.dicFldComparisonOp, clsQuestionnaireSetEN.con_ClassNo2) == true)
{
const strComparisonOpClassNo2:string = objQuestionnaireSetCond.dicFldComparisonOp[clsQuestionnaireSetEN.con_ClassNo2];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireSetEN.con_ClassNo2, objQuestionnaireSetCond.classNo2, strComparisonOpClassNo2);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireSetCond.dicFldComparisonOp, clsQuestionnaireSetEN.con_IsShowQuestionNo) == true)
{
if (objQuestionnaireSetCond.isShowQuestionNo == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionnaireSetEN.con_IsShowQuestionNo);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionnaireSetEN.con_IsShowQuestionNo);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireSetCond.dicFldComparisonOp, clsQuestionnaireSetEN.con_LogoFileName) == true)
{
const strComparisonOpLogoFileName:string = objQuestionnaireSetCond.dicFldComparisonOp[clsQuestionnaireSetEN.con_LogoFileName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireSetEN.con_LogoFileName, objQuestionnaireSetCond.logoFileName, strComparisonOpLogoFileName);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireSetCond.dicFldComparisonOp, clsQuestionnaireSetEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQuestionnaireSetCond.dicFldComparisonOp[clsQuestionnaireSetEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireSetEN.con_UpdDate, objQuestionnaireSetCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireSetCond.dicFldComparisonOp, clsQuestionnaireSetEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQuestionnaireSetCond.dicFldComparisonOp[clsQuestionnaireSetEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireSetEN.con_UpdUser, objQuestionnaireSetCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireSetCond.dicFldComparisonOp, clsQuestionnaireSetEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQuestionnaireSetCond.dicFldComparisonOp[clsQuestionnaireSetEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireSetEN.con_Memo, objQuestionnaireSetCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QuestionnaireSet(问卷集),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strQuestionnaireSetName: 问卷集名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QuestionnaireSet_GetUniCondStr(objQuestionnaireSetEN: clsQuestionnaireSetEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and QuestionnaireSetName = '{0}'", objQuestionnaireSetEN.questionnaireSetName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QuestionnaireSet(问卷集),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strQuestionnaireSetName: 问卷集名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QuestionnaireSet_GetUniCondStr4Update(objQuestionnaireSetEN: clsQuestionnaireSetEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and QuestionnaireSetId <> '{0}'", objQuestionnaireSetEN.questionnaireSetId);
 strWhereCond +=  Format(" and QuestionnaireSetName = '{0}'", objQuestionnaireSetEN.questionnaireSetName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objQuestionnaireSetENS:源对象
 * @param objQuestionnaireSetENT:目标对象
*/
export  function QuestionnaireSet_CopyObjTo(objQuestionnaireSetENS: clsQuestionnaireSetEN , objQuestionnaireSetENT: clsQuestionnaireSetEN ): void 
{
objQuestionnaireSetENT.questionnaireSetId = objQuestionnaireSetENS.questionnaireSetId; //问卷集ID
objQuestionnaireSetENT.questionnaireSetName = objQuestionnaireSetENS.questionnaireSetName; //问卷集名
objQuestionnaireSetENT.orderFieldInExport = objQuestionnaireSetENS.orderFieldInExport; //导出排序字段
objQuestionnaireSetENT.classNo = objQuestionnaireSetENS.classNo; //分类号1
objQuestionnaireSetENT.classNo2 = objQuestionnaireSetENS.classNo2; //分类号2
objQuestionnaireSetENT.isShowQuestionNo = objQuestionnaireSetENS.isShowQuestionNo; //是否显示问题编号
objQuestionnaireSetENT.logoFileName = objQuestionnaireSetENS.logoFileName; //Logo文件名
objQuestionnaireSetENT.updDate = objQuestionnaireSetENS.updDate; //修改日期
objQuestionnaireSetENT.updUser = objQuestionnaireSetENS.updUser; //修改人
objQuestionnaireSetENT.memo = objQuestionnaireSetENS.memo; //备注
objQuestionnaireSetENT.sfUpdFldSetStr = objQuestionnaireSetENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQuestionnaireSetENS:源对象
 * @param objQuestionnaireSetENT:目标对象
*/
export  function QuestionnaireSet_GetObjFromJsonObj(objQuestionnaireSetENS: clsQuestionnaireSetEN): clsQuestionnaireSetEN 
{
 const objQuestionnaireSetENT: clsQuestionnaireSetEN = new clsQuestionnaireSetEN();
ObjectAssign(objQuestionnaireSetENT, objQuestionnaireSetENS);
 return objQuestionnaireSetENT;
}