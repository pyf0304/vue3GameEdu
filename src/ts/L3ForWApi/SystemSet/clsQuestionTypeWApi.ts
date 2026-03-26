
 /**
 * 类名:clsQuestionTypeWApi
 * 表名:QuestionType(01120008)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:57
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 题目类型(QuestionType)
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
import { clsQuestionTypeEN } from "@/ts/L0Entity/SystemSet/clsQuestionTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const questionType_Controller = "QuestionTypeApi";
 export const questionType_ConstructorName = "questionType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strQuestionTypeId:关键字
 * @returns 对象
 **/
export  async function QuestionType_GetObjByQuestionTypeIdAsync(strQuestionTypeId: string): Promise<clsQuestionTypeEN|null>  
{
const strThisFuncName = "GetObjByQuestionTypeIdAsync";

if (IsNullOrEmpty(strQuestionTypeId) == true)
{
  const strMsg = Format("参数:[strQuestionTypeId]不能为空!(In clsQuestionTypeWApi.GetObjByQuestionTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strQuestionTypeId]的长度:[{0}]不正确!(clsQuestionTypeWApi.GetObjByQuestionTypeIdAsync)", strQuestionTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByQuestionTypeId";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQuestionTypeId,
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
const objQuestionType = QuestionType_GetObjFromJsonObj(returnObj);
return objQuestionType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param strQuestionTypeId:所给的关键字
 * @returns 对象
*/
export  async function QuestionType_GetObjByQuestionTypeIdlocalStorage(strQuestionTypeId: string) {
const strThisFuncName = "GetObjByQuestionTypeIdlocalStorage";

if (IsNullOrEmpty(strQuestionTypeId) == true)
{
  const strMsg = Format("参数:[strQuestionTypeId]不能为空!(In clsQuestionTypeWApi.GetObjByQuestionTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strQuestionTypeId]的长度:[{0}]不正确!(clsQuestionTypeWApi.GetObjByQuestionTypeIdlocalStorage)", strQuestionTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQuestionTypeEN._CurrTabName, strQuestionTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQuestionTypeCache: clsQuestionTypeEN = JSON.parse(strTempObj);
return objQuestionTypeCache;
}
try
{
const objQuestionType = await QuestionType_GetObjByQuestionTypeIdAsync(strQuestionTypeId);
if (objQuestionType != null)
{
localStorage.setItem(strKey, JSON.stringify(objQuestionType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQuestionType;
}
return objQuestionType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strQuestionTypeId, questionType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strQuestionTypeId:所给的关键字
 * @returns 对象
*/
export  async function QuestionType_GetObjByQuestionTypeIdCache(strQuestionTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByQuestionTypeIdCache";

if (IsNullOrEmpty(strQuestionTypeId) == true)
{
  const strMsg = Format("参数:[strQuestionTypeId]不能为空!(In clsQuestionTypeWApi.GetObjByQuestionTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strQuestionTypeId]的长度:[{0}]不正确!(clsQuestionTypeWApi.GetObjByQuestionTypeIdCache)", strQuestionTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQuestionTypeObjLstCache = await QuestionType_GetObjLstCache();
try
{
const arrQuestionTypeSel = arrQuestionTypeObjLstCache.filter(x => 
 x.questionTypeId == strQuestionTypeId );
let objQuestionType: clsQuestionTypeEN;
if (arrQuestionTypeSel.length > 0)
{
objQuestionType = arrQuestionTypeSel[0];
return objQuestionType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQuestionTypeConst = await QuestionType_GetObjByQuestionTypeIdAsync(strQuestionTypeId);
if (objQuestionTypeConst != null)
{
QuestionType_ReFreshThisCache();
return objQuestionTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strQuestionTypeId, questionType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQuestionType:所给的对象
 * @returns 对象
*/
export  async function QuestionType_UpdateObjInLstCache(objQuestionType: clsQuestionTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQuestionTypeObjLstCache = await QuestionType_GetObjLstCache();
const obj = arrQuestionTypeObjLstCache.find(x => x.questionTypeName == objQuestionType.questionTypeName);
if (obj != null)
{
objQuestionType.questionTypeId = obj.questionTypeId;
ObjectAssign( obj, objQuestionType);
}
else
{
arrQuestionTypeObjLstCache.push(objQuestionType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, questionType_ConstructorName, strThisFuncName);
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
export  function QuestionType_SortFunDefa(a:clsQuestionTypeEN , b:clsQuestionTypeEN): number 
{
return a.questionTypeId.localeCompare(b.questionTypeId);
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
export  function QuestionType_SortFunDefa2Fld(a:clsQuestionTypeEN , b:clsQuestionTypeEN): number 
{
if (a.questionTypeName == b.questionTypeName) return a.questionTypeENName.localeCompare(b.questionTypeENName);
else return a.questionTypeName.localeCompare(b.questionTypeName);
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
export  function QuestionType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQuestionTypeEN.con_QuestionTypeId:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
return a.questionTypeId.localeCompare(b.questionTypeId);
}
case clsQuestionTypeEN.con_QuestionTypeName:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
return a.questionTypeName.localeCompare(b.questionTypeName);
}
case clsQuestionTypeEN.con_QuestionTypeENName:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
if (a.questionTypeENName == null) return -1;
if (b.questionTypeENName == null) return 1;
return a.questionTypeENName.localeCompare(b.questionTypeENName);
}
case clsQuestionTypeEN.con_DefaAnswerModeId:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
if (a.defaAnswerModeId == null) return -1;
if (b.defaAnswerModeId == null) return 1;
return a.defaAnswerModeId.localeCompare(b.defaAnswerModeId);
}
case clsQuestionTypeEN.con_DefaAnswerTypeId:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
if (a.defaAnswerTypeId == null) return -1;
if (b.defaAnswerTypeId == null) return 1;
return a.defaAnswerTypeId.localeCompare(b.defaAnswerTypeId);
}
case clsQuestionTypeEN.con_OrderNum:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
return a.orderNum-b.orderNum;
}
case clsQuestionTypeEN.con_IsUse:
return (a: clsQuestionTypeEN) => {
if (a.isUse == true) return 1;
else return -1
}
case clsQuestionTypeEN.con_IsExercise:
return (a: clsQuestionTypeEN) => {
if (a.isExercise == true) return 1;
else return -1
}
case clsQuestionTypeEN.con_UpdDate:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQuestionTypeEN.con_UpdUser:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsQuestionTypeEN.con_Memo:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionType]中不存在!(in ${ questionType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQuestionTypeEN.con_QuestionTypeId:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
return b.questionTypeId.localeCompare(a.questionTypeId);
}
case clsQuestionTypeEN.con_QuestionTypeName:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
return b.questionTypeName.localeCompare(a.questionTypeName);
}
case clsQuestionTypeEN.con_QuestionTypeENName:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
if (b.questionTypeENName == null) return -1;
if (a.questionTypeENName == null) return 1;
return b.questionTypeENName.localeCompare(a.questionTypeENName);
}
case clsQuestionTypeEN.con_DefaAnswerModeId:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
if (b.defaAnswerModeId == null) return -1;
if (a.defaAnswerModeId == null) return 1;
return b.defaAnswerModeId.localeCompare(a.defaAnswerModeId);
}
case clsQuestionTypeEN.con_DefaAnswerTypeId:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
if (b.defaAnswerTypeId == null) return -1;
if (a.defaAnswerTypeId == null) return 1;
return b.defaAnswerTypeId.localeCompare(a.defaAnswerTypeId);
}
case clsQuestionTypeEN.con_OrderNum:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
return b.orderNum-a.orderNum;
}
case clsQuestionTypeEN.con_IsUse:
return (b: clsQuestionTypeEN) => {
if (b.isUse == true) return 1;
else return -1
}
case clsQuestionTypeEN.con_IsExercise:
return (b: clsQuestionTypeEN) => {
if (b.isExercise == true) return 1;
else return -1
}
case clsQuestionTypeEN.con_UpdDate:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQuestionTypeEN.con_UpdUser:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsQuestionTypeEN.con_Memo:
return (a: clsQuestionTypeEN, b: clsQuestionTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionType]中不存在!(in ${ questionType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strQuestionTypeId:所给的关键字
 * @returns 对象
*/
export  async function QuestionType_GetNameByQuestionTypeIdCache(strQuestionTypeId: string) {

if (IsNullOrEmpty(strQuestionTypeId) == true)
{
  const strMsg = Format("参数:[strQuestionTypeId]不能为空!(In clsQuestionTypeWApi.GetNameByQuestionTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strQuestionTypeId]的长度:[{0}]不正确!(clsQuestionTypeWApi.GetNameByQuestionTypeIdCache)", strQuestionTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQuestionTypeObjLstCache = await QuestionType_GetObjLstCache();
if (arrQuestionTypeObjLstCache == null) return "";
try
{
const arrQuestionTypeSel = arrQuestionTypeObjLstCache.filter(x => 
 x.questionTypeId == strQuestionTypeId );
let objQuestionType: clsQuestionTypeEN;
if (arrQuestionTypeSel.length > 0)
{
objQuestionType = arrQuestionTypeSel[0];
return objQuestionType.questionTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strQuestionTypeId);
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
export  async function QuestionType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQuestionTypeEN.con_QuestionTypeId:
return (obj: clsQuestionTypeEN) => {
return obj.questionTypeId === value;
}
case clsQuestionTypeEN.con_QuestionTypeName:
return (obj: clsQuestionTypeEN) => {
return obj.questionTypeName === value;
}
case clsQuestionTypeEN.con_QuestionTypeENName:
return (obj: clsQuestionTypeEN) => {
return obj.questionTypeENName === value;
}
case clsQuestionTypeEN.con_DefaAnswerModeId:
return (obj: clsQuestionTypeEN) => {
return obj.defaAnswerModeId === value;
}
case clsQuestionTypeEN.con_DefaAnswerTypeId:
return (obj: clsQuestionTypeEN) => {
return obj.defaAnswerTypeId === value;
}
case clsQuestionTypeEN.con_OrderNum:
return (obj: clsQuestionTypeEN) => {
return obj.orderNum === value;
}
case clsQuestionTypeEN.con_IsUse:
return (obj: clsQuestionTypeEN) => {
return obj.isUse === value;
}
case clsQuestionTypeEN.con_IsExercise:
return (obj: clsQuestionTypeEN) => {
return obj.isExercise === value;
}
case clsQuestionTypeEN.con_UpdDate:
return (obj: clsQuestionTypeEN) => {
return obj.updDate === value;
}
case clsQuestionTypeEN.con_UpdUser:
return (obj: clsQuestionTypeEN) => {
return obj.updUser === value;
}
case clsQuestionTypeEN.con_Memo:
return (obj: clsQuestionTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QuestionType]中不存在!(in ${ questionType_ConstructorName}.${ strThisFuncName})`;
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
export  async function QuestionType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQuestionTypeEN.con_QuestionTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQuestionTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQuestionTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strQuestionTypeId = strInValue;
if (IsNullOrEmpty(strQuestionTypeId) == true)
{
return "";
}
const objQuestionType = await QuestionType_GetObjByQuestionTypeIdCache(strQuestionTypeId );
if (objQuestionType == null) return "";
if (objQuestionType.GetFldValue(strOutFldName) == null) return "";
return objQuestionType.GetFldValue(strOutFldName).toString();
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
export  async function QuestionType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQuestionTypeEN.con_QuestionTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQuestionType = await QuestionType_GetObjLstCache();
if (arrQuestionType == null) return [];
let arrQuestionTypeSel = arrQuestionType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQuestionTypeSel.length == 0) return [];
return arrQuestionTypeSel.map(x=>x.questionTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QuestionType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_GetFirstObjAsync(strWhereCond: string): Promise<clsQuestionTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const objQuestionType = QuestionType_GetObjFromJsonObj(returnObj);
return objQuestionType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQuestionTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQuestionTypeEN.WhereFormat) == false)
{
strWhereCond = clsQuestionTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsQuestionTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQuestionTypeExObjLstCache: Array<clsQuestionTypeEN> = CacheHelper.Get(strKey);
const arrQuestionTypeObjLstT = QuestionType_GetObjLstByJSONObjLst(arrQuestionTypeExObjLstCache);
return arrQuestionTypeObjLstT;
}
try
{
const arrQuestionTypeExObjLst = await QuestionType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQuestionTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionTypeExObjLst.length);
console.log(strInfo);
return arrQuestionTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQuestionTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQuestionTypeEN.WhereFormat) == false)
{
strWhereCond = clsQuestionTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsQuestionTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionTypeEN.CacheAddiCondition);
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
const arrQuestionTypeExObjLstCache: Array<clsQuestionTypeEN> = JSON.parse(strTempObjLst);
const arrQuestionTypeObjLstT = QuestionType_GetObjLstByJSONObjLst(arrQuestionTypeExObjLstCache);
return arrQuestionTypeObjLstT;
}
try
{
const arrQuestionTypeExObjLst = await QuestionType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQuestionTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionTypeExObjLst.length);
console.log(strInfo);
return arrQuestionTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQuestionTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQuestionTypeObjLstCache: Array<clsQuestionTypeEN> = JSON.parse(strTempObjLst);
return arrQuestionTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QuestionType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQuestionTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQuestionTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQuestionTypeEN.WhereFormat) == false)
{
strWhereCond = clsQuestionTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsQuestionTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQuestionTypeEN.CacheAddiCondition);
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
const arrQuestionTypeExObjLstCache: Array<clsQuestionTypeEN> = JSON.parse(strTempObjLst);
const arrQuestionTypeObjLstT = QuestionType_GetObjLstByJSONObjLst(arrQuestionTypeExObjLstCache);
return arrQuestionTypeObjLstT;
}
try
{
const arrQuestionTypeExObjLst = await QuestionType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQuestionTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQuestionTypeExObjLst.length);
console.log(strInfo);
return arrQuestionTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, questionType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQuestionTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQuestionTypeObjLstCache: Array<clsQuestionTypeEN> = JSON.parse(strTempObjLst);
return arrQuestionTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionType_GetObjLstCache(): Promise<Array<clsQuestionTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQuestionTypeObjLstCache;
switch (clsQuestionTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrQuestionTypeObjLstCache = await QuestionType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQuestionTypeObjLstCache = await QuestionType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQuestionTypeObjLstCache = await QuestionType_GetObjLstClientCache();
break;
default:
arrQuestionTypeObjLstCache = await QuestionType_GetObjLstClientCache();
break;
}
return arrQuestionTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QuestionType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQuestionTypeObjLstCache;
switch (clsQuestionTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrQuestionTypeObjLstCache = await QuestionType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQuestionTypeObjLstCache = await QuestionType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQuestionTypeObjLstCache = null;
break;
default:
arrQuestionTypeObjLstCache = null;
break;
}
return arrQuestionTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrQuestionTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QuestionType_GetSubObjLstCache(objQuestionTypeCond: clsQuestionTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQuestionTypeObjLstCache = await QuestionType_GetObjLstCache();
let arrQuestionTypeSel = arrQuestionTypeObjLstCache;
if (objQuestionTypeCond.sfFldComparisonOp == null || objQuestionTypeCond.sfFldComparisonOp == "") return arrQuestionTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionTypeCond.sfFldComparisonOp);
//console.log("clsQuestionTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQuestionTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQuestionTypeCond), questionType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQuestionTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrQuestionTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function QuestionType_GetObjLstByQuestionTypeIdLstAsync(arrQuestionTypeId: Array<string>): Promise<Array<clsQuestionTypeEN>>  
{
const strThisFuncName = "GetObjLstByQuestionTypeIdLstAsync";
const strAction = "GetObjLstByQuestionTypeIdLst";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param arrstrQuestionTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QuestionType_GetObjLstByQuestionTypeIdLstCache(arrQuestionTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByQuestionTypeIdLstCache";
try
{
const arrQuestionTypeObjLstCache = await QuestionType_GetObjLstCache();
const arrQuestionTypeSel = arrQuestionTypeObjLstCache.filter(x => arrQuestionTypeIdLst.indexOf(x.questionTypeId)>-1);
return arrQuestionTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrQuestionTypeIdLst.join(","), questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQuestionTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQuestionTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQuestionTypeEN>();
const arrQuestionTypeObjLstCache = await QuestionType_GetObjLstCache();
if (arrQuestionTypeObjLstCache.length == 0) return arrQuestionTypeObjLstCache;
let arrQuestionTypeSel = arrQuestionTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQuestionTypeCond = new clsQuestionTypeEN();
ObjectAssign(objQuestionTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQuestionTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQuestionTypeSel.length == 0) return arrQuestionTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQuestionTypeSel = arrQuestionTypeSel.sort(QuestionType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQuestionTypeSel = arrQuestionTypeSel.sort(objPagerPara.sortFun);
}
arrQuestionTypeSel = arrQuestionTypeSel.slice(intStart, intEnd);     
return arrQuestionTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, questionType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQuestionTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QuestionType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQuestionTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQuestionTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QuestionType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param strQuestionTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function QuestionType_DelRecordAsync(strQuestionTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(questionType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strQuestionTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param arrQuestionTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QuestionType_DelQuestionTypesAsync(arrQuestionTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQuestionTypesAsync";
const strAction = "DelQuestionTypes";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_DelQuestionTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQuestionTypesByCondAsync";
const strAction = "DelQuestionTypesByCond";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param objQuestionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionType_AddNewRecordAsync(objQuestionTypeEN: clsQuestionTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQuestionTypeEN);
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param objQuestionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QuestionType_AddNewRecordWithMaxIdAsync(objQuestionTypeEN: clsQuestionTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_AddNewObjSave(objQuestionTypeEN: clsQuestionTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QuestionType_CheckPropertyNew(objQuestionTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ questionType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QuestionType_CheckUniCond4Add(objQuestionTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await QuestionType_AddNewRecordWithMaxIdAsync(objQuestionTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
QuestionType_ReFreshCache();
}
else
{
const strInfo = `添加[题目类型(QuestionType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ questionType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QuestionType_CheckUniCond4Add(objQuestionTypeEN: clsQuestionTypeEN): Promise<boolean>{
const strUniquenessCondition = QuestionType_GetUniCondStr(objQuestionTypeEN);
const bolIsExistCondition = await QuestionType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QuestionType_CheckUniCond4Update(objQuestionTypeEN: clsQuestionTypeEN): Promise<boolean>{
const strUniquenessCondition = QuestionType_GetUniCondStr4Update(objQuestionTypeEN);
const bolIsExistCondition = await QuestionType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QuestionType_UpdateObjSave(objQuestionTypeEN: clsQuestionTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQuestionTypeEN.sfUpdFldSetStr = objQuestionTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQuestionTypeEN.questionTypeId == "" || objQuestionTypeEN.questionTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QuestionType_CheckProperty4Update(objQuestionTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ questionType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QuestionType_CheckUniCond4Update(objQuestionTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QuestionType_UpdateRecordAsync(objQuestionTypeEN);
if (returnBool == true)
{
QuestionType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ questionType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQuestionTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QuestionType_AddNewRecordWithReturnKeyAsync(objQuestionTypeEN: clsQuestionTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param objQuestionTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QuestionType_UpdateRecordAsync(objQuestionTypeEN: clsQuestionTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQuestionTypeEN.sfUpdFldSetStr === undefined || objQuestionTypeEN.sfUpdFldSetStr === null || objQuestionTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionTypeEN.questionTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param objQuestionTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QuestionType_EditRecordExAsync(objQuestionTypeEN: clsQuestionTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQuestionTypeEN.sfUpdFldSetStr === undefined || objQuestionTypeEN.sfUpdFldSetStr === null || objQuestionTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionTypeEN.questionTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param objQuestionTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QuestionType_UpdateWithConditionAsync(objQuestionTypeEN: clsQuestionTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQuestionTypeEN.sfUpdFldSetStr === undefined || objQuestionTypeEN.sfUpdFldSetStr === null || objQuestionTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionTypeEN.questionTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(questionType_Controller, strAction);
objQuestionTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param objstrQuestionTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QuestionType_IsExistRecordCache(objQuestionTypeCond: clsQuestionTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrQuestionTypeObjLstCache = await QuestionType_GetObjLstCache();
if (arrQuestionTypeObjLstCache == null) return false;
let arrQuestionTypeSel = arrQuestionTypeObjLstCache;
if (objQuestionTypeCond.sfFldComparisonOp == null || objQuestionTypeCond.sfFldComparisonOp == "") return arrQuestionTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionTypeCond.sfFldComparisonOp);
//console.log("clsQuestionTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQuestionTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQuestionTypeCond), questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param strQuestionTypeId:所给的关键字
 * @returns 对象
*/
export  async function QuestionType_IsExistCache(strQuestionTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrQuestionTypeObjLstCache = await QuestionType_GetObjLstCache();
if (arrQuestionTypeObjLstCache == null) return false;
try
{
const arrQuestionTypeSel = arrQuestionTypeObjLstCache.filter(x => x.questionTypeId == strQuestionTypeId);
if (arrQuestionTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strQuestionTypeId, questionType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strQuestionTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QuestionType_IsExistAsync(strQuestionTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQuestionTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
 * @param objQuestionTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QuestionType_GetRecCountByCondCache(objQuestionTypeCond: clsQuestionTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQuestionTypeObjLstCache = await QuestionType_GetObjLstCache();
if (arrQuestionTypeObjLstCache == null) return 0;
let arrQuestionTypeSel = arrQuestionTypeObjLstCache;
if (objQuestionTypeCond.sfFldComparisonOp == null || objQuestionTypeCond.sfFldComparisonOp == "") return arrQuestionTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objQuestionTypeCond.sfFldComparisonOp);
//console.log("clsQuestionTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objQuestionTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQuestionTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQuestionTypeSel = arrQuestionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQuestionTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQuestionTypeCond), questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  async function QuestionType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(questionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionType_ConstructorName, strThisFuncName);
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
export  function QuestionType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QuestionType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQuestionTypeEN._CurrTabName;
switch (clsQuestionTypeEN.CacheModeId)
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
clsQuestionTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function QuestionType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQuestionTypeEN._CurrTabName;
switch (clsQuestionTypeEN.CacheModeId)
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
clsQuestionTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function QuestionType_GetLastRefreshTime():string
{
if (clsQuestionTypeEN._RefreshTimeLst.length == 0) return "";
return clsQuestionTypeEN._RefreshTimeLst[clsQuestionTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param bolIsUse:
*/
export  async function QuestionType_BindDdl_QuestionTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,bolIsUse: boolean)
{


const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_QuestionTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_QuestionTypeIdInDivCache");
let arrObjLstSel = await QuestionType_GetObjLstCache();
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.isUse == bolIsUse);
arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQuestionTypeEN.con_QuestionTypeId, clsQuestionTypeEN.con_QuestionTypeName, "题目类型...");
}
//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param bolIsUse:
*/
export  async function QuestionType_GetArrQuestionTypeByIsUse(bolIsUse: boolean)
{


//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_QuestionTypeIdInDivCache");
const arrQuestionType = new Array<clsQuestionTypeEN>();
let arrObjLstSel = await QuestionType_GetObjLstCache();
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.isUse == bolIsUse);
arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
const obj0 = new clsQuestionTypeEN();
obj0.questionTypeId = '0';
obj0.questionTypeName = '选题目类型...';
arrQuestionType.push(obj0);
arrObjLstSel.forEach(x => arrQuestionType.push(x));
return arrQuestionType;
}
//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QuestionType_CheckPropertyNew(pobjQuestionTypeEN: clsQuestionTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[题目类型名]不能为空(In 题目类型)!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 题目类型)!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeId) == false && GetStrLen(pobjQuestionTypeEN.questionTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[题目类型Id(questionTypeId)]的长度不能超过2(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.questionTypeId}(clsQuestionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeName) == false && GetStrLen(pobjQuestionTypeEN.questionTypeName) > 20)
{
 throw new Error(`(errid:Watl000413)字段[题目类型名(questionTypeName)]的长度不能超过20(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.questionTypeName}(clsQuestionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeENName) == false && GetStrLen(pobjQuestionTypeEN.questionTypeENName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[题目类型英文名(questionTypeENName)]的长度不能超过50(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.questionTypeENName}(clsQuestionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.defaAnswerModeId) == false && GetStrLen(pobjQuestionTypeEN.defaAnswerModeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[默认答案模式Id(defaAnswerModeId)]的长度不能超过4(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.defaAnswerModeId}(clsQuestionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.defaAnswerTypeId) == false && GetStrLen(pobjQuestionTypeEN.defaAnswerTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[默认答案类型Id(defaAnswerTypeId)]的长度不能超过2(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.defaAnswerTypeId}(clsQuestionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.updDate) == false && GetStrLen(pobjQuestionTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.updDate}(clsQuestionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.updUser) == false && GetStrLen(pobjQuestionTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.updUser}(clsQuestionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.memo) == false && GetStrLen(pobjQuestionTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.memo}(clsQuestionTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeId) == false && undefined !== pobjQuestionTypeEN.questionTypeId && tzDataType.isString(pobjQuestionTypeEN.questionTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目类型Id(questionTypeId)]的值:[${pobjQuestionTypeEN.questionTypeId}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeName) == false && undefined !== pobjQuestionTypeEN.questionTypeName && tzDataType.isString(pobjQuestionTypeEN.questionTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目类型名(questionTypeName)]的值:[${pobjQuestionTypeEN.questionTypeName}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeENName) == false && undefined !== pobjQuestionTypeEN.questionTypeENName && tzDataType.isString(pobjQuestionTypeEN.questionTypeENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目类型英文名(questionTypeENName)]的值:[${pobjQuestionTypeEN.questionTypeENName}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.defaAnswerModeId) == false && undefined !== pobjQuestionTypeEN.defaAnswerModeId && tzDataType.isString(pobjQuestionTypeEN.defaAnswerModeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[默认答案模式Id(defaAnswerModeId)]的值:[${pobjQuestionTypeEN.defaAnswerModeId}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.defaAnswerTypeId) == false && undefined !== pobjQuestionTypeEN.defaAnswerTypeId && tzDataType.isString(pobjQuestionTypeEN.defaAnswerTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[默认答案类型Id(defaAnswerTypeId)]的值:[${pobjQuestionTypeEN.defaAnswerTypeId}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionTypeEN.orderNum && undefined !== pobjQuestionTypeEN.orderNum && tzDataType.isNumber(pobjQuestionTypeEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjQuestionTypeEN.orderNum}], 非法,应该为数值型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionTypeEN.isUse && undefined !== pobjQuestionTypeEN.isUse && tzDataType.isBoolean(pobjQuestionTypeEN.isUse) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否使用(isUse)]的值:[${pobjQuestionTypeEN.isUse}], 非法,应该为布尔型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionTypeEN.isExercise && undefined !== pobjQuestionTypeEN.isExercise && tzDataType.isBoolean(pobjQuestionTypeEN.isExercise) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否练习题(isExercise)]的值:[${pobjQuestionTypeEN.isExercise}], 非法,应该为布尔型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.updDate) == false && undefined !== pobjQuestionTypeEN.updDate && tzDataType.isString(pobjQuestionTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQuestionTypeEN.updDate}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.updUser) == false && undefined !== pobjQuestionTypeEN.updUser && tzDataType.isString(pobjQuestionTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjQuestionTypeEN.updUser}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.memo) == false && undefined !== pobjQuestionTypeEN.memo && tzDataType.isString(pobjQuestionTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQuestionTypeEN.memo}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QuestionType_CheckProperty4Update(pobjQuestionTypeEN: clsQuestionTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeId) == false && GetStrLen(pobjQuestionTypeEN.questionTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[题目类型Id(questionTypeId)]的长度不能超过2(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.questionTypeId}(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeName) == false && GetStrLen(pobjQuestionTypeEN.questionTypeName) > 20)
{
 throw new Error(`(errid:Watl000416)字段[题目类型名(questionTypeName)]的长度不能超过20(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.questionTypeName}(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeENName) == false && GetStrLen(pobjQuestionTypeEN.questionTypeENName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[题目类型英文名(questionTypeENName)]的长度不能超过50(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.questionTypeENName}(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.defaAnswerModeId) == false && GetStrLen(pobjQuestionTypeEN.defaAnswerModeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[默认答案模式Id(defaAnswerModeId)]的长度不能超过4(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.defaAnswerModeId}(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.defaAnswerTypeId) == false && GetStrLen(pobjQuestionTypeEN.defaAnswerTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[默认答案类型Id(defaAnswerTypeId)]的长度不能超过2(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.defaAnswerTypeId}(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.updDate) == false && GetStrLen(pobjQuestionTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.updDate}(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.updUser) == false && GetStrLen(pobjQuestionTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.updUser}(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.memo) == false && GetStrLen(pobjQuestionTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 题目类型(QuestionType))!值:${pobjQuestionTypeEN.memo}(clsQuestionTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeId) == false && undefined !== pobjQuestionTypeEN.questionTypeId && tzDataType.isString(pobjQuestionTypeEN.questionTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目类型Id(questionTypeId)]的值:[${pobjQuestionTypeEN.questionTypeId}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeName) == false && undefined !== pobjQuestionTypeEN.questionTypeName && tzDataType.isString(pobjQuestionTypeEN.questionTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目类型名(questionTypeName)]的值:[${pobjQuestionTypeEN.questionTypeName}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.questionTypeENName) == false && undefined !== pobjQuestionTypeEN.questionTypeENName && tzDataType.isString(pobjQuestionTypeEN.questionTypeENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目类型英文名(questionTypeENName)]的值:[${pobjQuestionTypeEN.questionTypeENName}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.defaAnswerModeId) == false && undefined !== pobjQuestionTypeEN.defaAnswerModeId && tzDataType.isString(pobjQuestionTypeEN.defaAnswerModeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[默认答案模式Id(defaAnswerModeId)]的值:[${pobjQuestionTypeEN.defaAnswerModeId}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.defaAnswerTypeId) == false && undefined !== pobjQuestionTypeEN.defaAnswerTypeId && tzDataType.isString(pobjQuestionTypeEN.defaAnswerTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[默认答案类型Id(defaAnswerTypeId)]的值:[${pobjQuestionTypeEN.defaAnswerTypeId}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (null != pobjQuestionTypeEN.orderNum && undefined !== pobjQuestionTypeEN.orderNum && tzDataType.isNumber(pobjQuestionTypeEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjQuestionTypeEN.orderNum}], 非法,应该为数值型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (null != pobjQuestionTypeEN.isUse && undefined !== pobjQuestionTypeEN.isUse && tzDataType.isBoolean(pobjQuestionTypeEN.isUse) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否使用(isUse)]的值:[${pobjQuestionTypeEN.isUse}], 非法,应该为布尔型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (null != pobjQuestionTypeEN.isExercise && undefined !== pobjQuestionTypeEN.isExercise && tzDataType.isBoolean(pobjQuestionTypeEN.isExercise) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否练习题(isExercise)]的值:[${pobjQuestionTypeEN.isExercise}], 非法,应该为布尔型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.updDate) == false && undefined !== pobjQuestionTypeEN.updDate && tzDataType.isString(pobjQuestionTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQuestionTypeEN.updDate}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.updUser) == false && undefined !== pobjQuestionTypeEN.updUser && tzDataType.isString(pobjQuestionTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjQuestionTypeEN.updUser}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionTypeEN.memo) == false && undefined !== pobjQuestionTypeEN.memo && tzDataType.isString(pobjQuestionTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQuestionTypeEN.memo}], 非法,应该为字符型(In 题目类型(QuestionType))!(clsQuestionTypeBL:CheckProperty4Update)`);
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
export  function QuestionType_GetJSONStrByObj (pobjQuestionTypeEN: clsQuestionTypeEN): string
{
pobjQuestionTypeEN.sfUpdFldSetStr = pobjQuestionTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQuestionTypeEN);
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
export  function QuestionType_GetObjLstByJSONStr (strJSON: string): Array<clsQuestionTypeEN>
{
let arrQuestionTypeObjLst = new Array<clsQuestionTypeEN>();
if (strJSON === "")
{
return arrQuestionTypeObjLst;
}
try
{
arrQuestionTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQuestionTypeObjLst;
}
return arrQuestionTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQuestionTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QuestionType_GetObjLstByJSONObjLst (arrQuestionTypeObjLstS: Array<clsQuestionTypeEN>): Array<clsQuestionTypeEN>
{
const arrQuestionTypeObjLst = new Array<clsQuestionTypeEN>();
for (const objInFor of arrQuestionTypeObjLstS) {
const obj1 = QuestionType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQuestionTypeObjLst.push(obj1);
}
return arrQuestionTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QuestionType_GetObjByJSONStr (strJSON: string): clsQuestionTypeEN
{
let pobjQuestionTypeEN = new clsQuestionTypeEN();
if (strJSON === "")
{
return pobjQuestionTypeEN;
}
try
{
pobjQuestionTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQuestionTypeEN;
}
return pobjQuestionTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QuestionType_GetCombineCondition(objQuestionTypeCond: clsQuestionTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQuestionTypeCond.dicFldComparisonOp, clsQuestionTypeEN.con_QuestionTypeId) == true)
{
const strComparisonOpQuestionTypeId:string = objQuestionTypeCond.dicFldComparisonOp[clsQuestionTypeEN.con_QuestionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionTypeEN.con_QuestionTypeId, objQuestionTypeCond.questionTypeId, strComparisonOpQuestionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionTypeCond.dicFldComparisonOp, clsQuestionTypeEN.con_QuestionTypeName) == true)
{
const strComparisonOpQuestionTypeName:string = objQuestionTypeCond.dicFldComparisonOp[clsQuestionTypeEN.con_QuestionTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionTypeEN.con_QuestionTypeName, objQuestionTypeCond.questionTypeName, strComparisonOpQuestionTypeName);
}
if (Object.prototype.hasOwnProperty.call(objQuestionTypeCond.dicFldComparisonOp, clsQuestionTypeEN.con_QuestionTypeENName) == true)
{
const strComparisonOpQuestionTypeENName:string = objQuestionTypeCond.dicFldComparisonOp[clsQuestionTypeEN.con_QuestionTypeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionTypeEN.con_QuestionTypeENName, objQuestionTypeCond.questionTypeENName, strComparisonOpQuestionTypeENName);
}
if (Object.prototype.hasOwnProperty.call(objQuestionTypeCond.dicFldComparisonOp, clsQuestionTypeEN.con_DefaAnswerModeId) == true)
{
const strComparisonOpDefaAnswerModeId:string = objQuestionTypeCond.dicFldComparisonOp[clsQuestionTypeEN.con_DefaAnswerModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionTypeEN.con_DefaAnswerModeId, objQuestionTypeCond.defaAnswerModeId, strComparisonOpDefaAnswerModeId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionTypeCond.dicFldComparisonOp, clsQuestionTypeEN.con_DefaAnswerTypeId) == true)
{
const strComparisonOpDefaAnswerTypeId:string = objQuestionTypeCond.dicFldComparisonOp[clsQuestionTypeEN.con_DefaAnswerTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionTypeEN.con_DefaAnswerTypeId, objQuestionTypeCond.defaAnswerTypeId, strComparisonOpDefaAnswerTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionTypeCond.dicFldComparisonOp, clsQuestionTypeEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objQuestionTypeCond.dicFldComparisonOp[clsQuestionTypeEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionTypeEN.con_OrderNum, objQuestionTypeCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objQuestionTypeCond.dicFldComparisonOp, clsQuestionTypeEN.con_IsUse) == true)
{
if (objQuestionTypeCond.isUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionTypeEN.con_IsUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionTypeEN.con_IsUse);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionTypeCond.dicFldComparisonOp, clsQuestionTypeEN.con_IsExercise) == true)
{
if (objQuestionTypeCond.isExercise == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionTypeEN.con_IsExercise);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionTypeEN.con_IsExercise);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionTypeCond.dicFldComparisonOp, clsQuestionTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQuestionTypeCond.dicFldComparisonOp[clsQuestionTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionTypeEN.con_UpdDate, objQuestionTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQuestionTypeCond.dicFldComparisonOp, clsQuestionTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQuestionTypeCond.dicFldComparisonOp[clsQuestionTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionTypeEN.con_UpdUser, objQuestionTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQuestionTypeCond.dicFldComparisonOp, clsQuestionTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQuestionTypeCond.dicFldComparisonOp[clsQuestionTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionTypeEN.con_Memo, objQuestionTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QuestionType(题目类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strQuestionTypeName: 题目类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QuestionType_GetUniCondStr(objQuestionTypeEN: clsQuestionTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and QuestionTypeName = '{0}'", objQuestionTypeEN.questionTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QuestionType(题目类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strQuestionTypeName: 题目类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QuestionType_GetUniCondStr4Update(objQuestionTypeEN: clsQuestionTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and QuestionTypeId <> '{0}'", objQuestionTypeEN.questionTypeId);
 strWhereCond +=  Format(" and QuestionTypeName = '{0}'", objQuestionTypeEN.questionTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objQuestionTypeENS:源对象
 * @param objQuestionTypeENT:目标对象
*/
export  function QuestionType_CopyObjTo(objQuestionTypeENS: clsQuestionTypeEN , objQuestionTypeENT: clsQuestionTypeEN ): void 
{
objQuestionTypeENT.questionTypeId = objQuestionTypeENS.questionTypeId; //题目类型Id
objQuestionTypeENT.questionTypeName = objQuestionTypeENS.questionTypeName; //题目类型名
objQuestionTypeENT.questionTypeENName = objQuestionTypeENS.questionTypeENName; //题目类型英文名
objQuestionTypeENT.defaAnswerModeId = objQuestionTypeENS.defaAnswerModeId; //默认答案模式Id
objQuestionTypeENT.defaAnswerTypeId = objQuestionTypeENS.defaAnswerTypeId; //默认答案类型Id
objQuestionTypeENT.orderNum = objQuestionTypeENS.orderNum; //序号
objQuestionTypeENT.isUse = objQuestionTypeENS.isUse; //是否使用
objQuestionTypeENT.isExercise = objQuestionTypeENS.isExercise; //是否练习题
objQuestionTypeENT.updDate = objQuestionTypeENS.updDate; //修改日期
objQuestionTypeENT.updUser = objQuestionTypeENS.updUser; //修改人
objQuestionTypeENT.memo = objQuestionTypeENS.memo; //备注
objQuestionTypeENT.sfUpdFldSetStr = objQuestionTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQuestionTypeENS:源对象
 * @param objQuestionTypeENT:目标对象
*/
export  function QuestionType_GetObjFromJsonObj(objQuestionTypeENS: clsQuestionTypeEN): clsQuestionTypeEN 
{
 const objQuestionTypeENT: clsQuestionTypeEN = new clsQuestionTypeEN();
ObjectAssign(objQuestionTypeENT, objQuestionTypeENS);
 return objQuestionTypeENT;
}