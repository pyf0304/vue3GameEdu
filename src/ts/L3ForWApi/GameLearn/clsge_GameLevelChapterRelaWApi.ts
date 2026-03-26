
 /**
 * 类名:clsge_GameLevelChapterRelaWApi
 * 表名:ge_GameLevelChapterRela(01120913)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:48
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
 * 游戏关卡章节关系表(ge_GameLevelChapterRela)
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
import { clsge_GameLevelChapterRelaEN } from "@/ts/L0Entity/GameLearn/clsge_GameLevelChapterRelaEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_GameLevelChapterRela_Controller = "ge_GameLevelChapterRelaApi";
 export const ge_GameLevelChapterRela_ConstructorName = "ge_GameLevelChapterRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function ge_GameLevelChapterRela_GetObjBymIdAsync(lngmId: number): Promise<clsge_GameLevelChapterRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_GameLevelChapterRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const objge_GameLevelChapterRela = ge_GameLevelChapterRela_GetObjFromJsonObj(returnObj);
return objge_GameLevelChapterRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetObjBymIdlocalStorage(lngmId: number) {
const strThisFuncName = "GetObjBymIdlocalStorage";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_GameLevelChapterRelaWApi.GetObjBymIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_GameLevelChapterRelaEN._CurrTabName, lngmId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_GameLevelChapterRelaCache: clsge_GameLevelChapterRelaEN = JSON.parse(strTempObj);
return objge_GameLevelChapterRelaCache;
}
try
{
const objge_GameLevelChapterRela = await ge_GameLevelChapterRela_GetObjBymIdAsync(lngmId);
if (objge_GameLevelChapterRela != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_GameLevelChapterRela));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_GameLevelChapterRela;
}
return objge_GameLevelChapterRela;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetObjBymIdCache(lngmId:number,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBymIdCache";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_GameLevelChapterRelaWApi.GetObjBymIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstCache(strCourseId);
try
{
const arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaObjLstCache.filter(x => 
 x.mId == lngmId );
let objge_GameLevelChapterRela: clsge_GameLevelChapterRelaEN;
if (arrge_GameLevelChapterRelaSel.length > 0)
{
objge_GameLevelChapterRela = arrge_GameLevelChapterRelaSel[0];
return objge_GameLevelChapterRela;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_GameLevelChapterRelaConst = await ge_GameLevelChapterRela_GetObjBymIdAsync(lngmId);
if (objge_GameLevelChapterRelaConst != null)
{
ge_GameLevelChapterRela_ReFreshThisCache(strCourseId);
return objge_GameLevelChapterRelaConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_GameLevelChapterRela:所给的对象
 * @returns 对象
*/
export  async function ge_GameLevelChapterRela_UpdateObjInLstCache(objge_GameLevelChapterRela: clsge_GameLevelChapterRelaEN,strCourseId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstCache(strCourseId);
const obj = arrge_GameLevelChapterRelaObjLstCache.find(x => x.mId == objge_GameLevelChapterRela.mId);
if (obj != null)
{
objge_GameLevelChapterRela.mId = obj.mId;
ObjectAssign( obj, objge_GameLevelChapterRela);
}
else
{
arrge_GameLevelChapterRelaObjLstCache.push(objge_GameLevelChapterRela);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  function ge_GameLevelChapterRela_SortFunDefa(a:clsge_GameLevelChapterRelaEN , b:clsge_GameLevelChapterRelaEN): number 
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
export  function ge_GameLevelChapterRela_SortFunDefa2Fld(a:clsge_GameLevelChapterRelaEN , b:clsge_GameLevelChapterRelaEN): number 
{
if (a.courseId == b.courseId) return a.gameLevelId.localeCompare(b.gameLevelId);
else return a.courseId.localeCompare(b.courseId);
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
export  function ge_GameLevelChapterRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_GameLevelChapterRelaEN.con_mId:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
return a.mId-b.mId;
}
case clsge_GameLevelChapterRelaEN.con_CourseId:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsge_GameLevelChapterRelaEN.con_GameLevelId:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
if (a.gameLevelId == null) return -1;
if (b.gameLevelId == null) return 1;
return a.gameLevelId.localeCompare(b.gameLevelId);
}
case clsge_GameLevelChapterRelaEN.con_CourseChapterId:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
return a.courseChapterId.localeCompare(b.courseChapterId);
}
case clsge_GameLevelChapterRelaEN.con_QuestionNum:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
return a.questionNum-b.questionNum;
}
case clsge_GameLevelChapterRelaEN.con_UpdDate:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsge_GameLevelChapterRelaEN.con_UpdUser:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_GameLevelChapterRelaEN.con_Memo:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_GameLevelChapterRela]中不存在!(in ${ ge_GameLevelChapterRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_GameLevelChapterRelaEN.con_mId:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
return b.mId-a.mId;
}
case clsge_GameLevelChapterRelaEN.con_CourseId:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsge_GameLevelChapterRelaEN.con_GameLevelId:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
if (b.gameLevelId == null) return -1;
if (a.gameLevelId == null) return 1;
return b.gameLevelId.localeCompare(a.gameLevelId);
}
case clsge_GameLevelChapterRelaEN.con_CourseChapterId:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
return b.courseChapterId.localeCompare(a.courseChapterId);
}
case clsge_GameLevelChapterRelaEN.con_QuestionNum:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
return b.questionNum-a.questionNum;
}
case clsge_GameLevelChapterRelaEN.con_UpdDate:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsge_GameLevelChapterRelaEN.con_UpdUser:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_GameLevelChapterRelaEN.con_Memo:
return (a: clsge_GameLevelChapterRelaEN, b: clsge_GameLevelChapterRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_GameLevelChapterRela]中不存在!(in ${ ge_GameLevelChapterRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_GameLevelChapterRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_GameLevelChapterRelaEN.con_mId:
return (obj: clsge_GameLevelChapterRelaEN) => {
return obj.mId === value;
}
case clsge_GameLevelChapterRelaEN.con_CourseId:
return (obj: clsge_GameLevelChapterRelaEN) => {
return obj.courseId === value;
}
case clsge_GameLevelChapterRelaEN.con_GameLevelId:
return (obj: clsge_GameLevelChapterRelaEN) => {
return obj.gameLevelId === value;
}
case clsge_GameLevelChapterRelaEN.con_CourseChapterId:
return (obj: clsge_GameLevelChapterRelaEN) => {
return obj.courseChapterId === value;
}
case clsge_GameLevelChapterRelaEN.con_QuestionNum:
return (obj: clsge_GameLevelChapterRelaEN) => {
return obj.questionNum === value;
}
case clsge_GameLevelChapterRelaEN.con_UpdDate:
return (obj: clsge_GameLevelChapterRelaEN) => {
return obj.updDate === value;
}
case clsge_GameLevelChapterRelaEN.con_UpdUser:
return (obj: clsge_GameLevelChapterRelaEN) => {
return obj.updUser === value;
}
case clsge_GameLevelChapterRelaEN.con_Memo:
return (obj: clsge_GameLevelChapterRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_GameLevelChapterRela]中不存在!(in ${ ge_GameLevelChapterRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_GameLevelChapterRela_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_GameLevelChapterRelaWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_GameLevelChapterRelaWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsge_GameLevelChapterRelaEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_GameLevelChapterRelaEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_GameLevelChapterRelaEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngmId = Number(strInValue);
if (lngmId == 0)
{
return "";
}
const objge_GameLevelChapterRela = await ge_GameLevelChapterRela_GetObjBymIdCache(lngmId , strCourseIdClassfy);
if (objge_GameLevelChapterRela == null) return "";
if (objge_GameLevelChapterRela.GetFldValue(strOutFldName) == null) return "";
return objge_GameLevelChapterRela.GetFldValue(strOutFldName).toString();
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
export  async function ge_GameLevelChapterRela_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_GameLevelChapterRelaWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_GameLevelChapterRelaWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsge_GameLevelChapterRelaEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrge_GameLevelChapterRela = await ge_GameLevelChapterRela_GetObjLstCache(strCourseIdClassfy);
if (arrge_GameLevelChapterRela == null) return [];
let arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRela;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_GameLevelChapterRelaSel.length == 0) return [];
return arrge_GameLevelChapterRelaSel.map(x=>x.mId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_GameLevelChapterRela_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetFirstObjAsync(strWhereCond: string): Promise<clsge_GameLevelChapterRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const objge_GameLevelChapterRela = ge_GameLevelChapterRela_GetObjFromJsonObj(returnObj);
return objge_GameLevelChapterRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_GameLevelChapterRelaEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_GameLevelChapterRelaEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsge_GameLevelChapterRelaEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_GameLevelChapterRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_GameLevelChapterRelaEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_GameLevelChapterRelaExObjLstCache: Array<clsge_GameLevelChapterRelaEN> = CacheHelper.Get(strKey);
const arrge_GameLevelChapterRelaObjLstT = ge_GameLevelChapterRela_GetObjLstByJSONObjLst(arrge_GameLevelChapterRelaExObjLstCache);
return arrge_GameLevelChapterRelaObjLstT;
}
try
{
const arrge_GameLevelChapterRelaExObjLst = await ge_GameLevelChapterRela_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_GameLevelChapterRelaExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_GameLevelChapterRelaExObjLst.length);
console.log(strInfo);
return arrge_GameLevelChapterRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_GameLevelChapterRela_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_GameLevelChapterRelaEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_GameLevelChapterRelaEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_GameLevelChapterRelaEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_GameLevelChapterRelaEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_GameLevelChapterRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_GameLevelChapterRelaEN.CacheAddiCondition);
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
const arrge_GameLevelChapterRelaExObjLstCache: Array<clsge_GameLevelChapterRelaEN> = JSON.parse(strTempObjLst);
const arrge_GameLevelChapterRelaObjLstT = ge_GameLevelChapterRela_GetObjLstByJSONObjLst(arrge_GameLevelChapterRelaExObjLstCache);
return arrge_GameLevelChapterRelaObjLstT;
}
try
{
const arrge_GameLevelChapterRelaExObjLst = await ge_GameLevelChapterRela_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_GameLevelChapterRelaExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_GameLevelChapterRelaExObjLst.length);
console.log(strInfo);
return arrge_GameLevelChapterRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_GameLevelChapterRela_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_GameLevelChapterRelaEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_GameLevelChapterRelaObjLstCache: Array<clsge_GameLevelChapterRelaEN> = JSON.parse(strTempObjLst);
return arrge_GameLevelChapterRelaObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_GameLevelChapterRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_GameLevelChapterRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevelChapterRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_GameLevelChapterRelaEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_GameLevelChapterRelaEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_GameLevelChapterRelaEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_GameLevelChapterRelaEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_GameLevelChapterRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_GameLevelChapterRelaEN.CacheAddiCondition);
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
const arrge_GameLevelChapterRelaExObjLstCache: Array<clsge_GameLevelChapterRelaEN> = JSON.parse(strTempObjLst);
const arrge_GameLevelChapterRelaObjLstT = ge_GameLevelChapterRela_GetObjLstByJSONObjLst(arrge_GameLevelChapterRelaExObjLstCache);
return arrge_GameLevelChapterRelaObjLstT;
}
try
{
const arrge_GameLevelChapterRelaExObjLst = await ge_GameLevelChapterRela_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_GameLevelChapterRelaExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_GameLevelChapterRelaExObjLst.length);
console.log(strInfo);
return arrge_GameLevelChapterRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_GameLevelChapterRela_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_GameLevelChapterRelaEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_GameLevelChapterRelaObjLstCache: Array<clsge_GameLevelChapterRelaEN> = JSON.parse(strTempObjLst);
return arrge_GameLevelChapterRelaObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_GameLevelChapterRela_GetObjLstCache(strCourseId: string): Promise<Array<clsge_GameLevelChapterRelaEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_GameLevelChapterRelaWApi.ge_GameLevelChapterRela_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_GameLevelChapterRelaWApi.ge_GameLevelChapterRela_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrge_GameLevelChapterRelaObjLstCache;
switch (clsge_GameLevelChapterRelaEN.CacheModeId)
{
case "04"://sessionStorage
arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstClientCache(strCourseId);
break;
default:
arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstClientCache(strCourseId);
break;
}
return arrge_GameLevelChapterRelaObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_GameLevelChapterRela_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_GameLevelChapterRelaObjLstCache;
switch (clsge_GameLevelChapterRelaEN.CacheModeId)
{
case "04"://sessionStorage
arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrge_GameLevelChapterRelaObjLstCache = null;
break;
default:
arrge_GameLevelChapterRelaObjLstCache = null;
break;
}
return arrge_GameLevelChapterRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_GameLevelChapterRela_GetSubObjLstCache(objge_GameLevelChapterRelaCond: clsge_GameLevelChapterRelaEN ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstCache(strCourseId);
let arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaObjLstCache;
if (objge_GameLevelChapterRelaCond.sfFldComparisonOp == null || objge_GameLevelChapterRelaCond.sfFldComparisonOp == "") return arrge_GameLevelChapterRelaSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_GameLevelChapterRelaCond.sfFldComparisonOp);
//console.log("clsge_GameLevelChapterRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_GameLevelChapterRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_GameLevelChapterRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_GameLevelChapterRelaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_GameLevelChapterRelaCond), ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_GameLevelChapterRelaEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_GameLevelChapterRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsge_GameLevelChapterRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevelChapterRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetObjLstBymIdLstCache(arrmIdLst: Array<number> ,strCourseId: string) {
const strThisFuncName = "GetObjLstBymIdLstCache";
try
{
const arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstCache(strCourseId);
const arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaObjLstCache.filter(x => arrmIdLst.indexOf(x.mId)>-1);
return arrge_GameLevelChapterRelaSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrmIdLst.join(","), ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_GameLevelChapterRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevelChapterRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_GameLevelChapterRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevelChapterRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_GameLevelChapterRelaEN>();
const arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstCache(strCourseId);
if (arrge_GameLevelChapterRelaObjLstCache.length == 0) return arrge_GameLevelChapterRelaObjLstCache;
let arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_GameLevelChapterRelaCond = new clsge_GameLevelChapterRelaEN();
ObjectAssign(objge_GameLevelChapterRelaCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_GameLevelChapterRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_GameLevelChapterRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_GameLevelChapterRelaSel.length == 0) return arrge_GameLevelChapterRelaSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.sort(ge_GameLevelChapterRela_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.sort(objPagerPara.sortFun);
}
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.slice(intStart, intEnd);     
return arrge_GameLevelChapterRelaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_GameLevelChapterRelaEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_GameLevelChapterRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_GameLevelChapterRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_GameLevelChapterRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_GameLevelChapterRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_Delge_GameLevelChapterRelasAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_GameLevelChapterRelasAsync";
const strAction = "Delge_GameLevelChapterRelas";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_Delge_GameLevelChapterRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_GameLevelChapterRelasByCondAsync";
const strAction = "Delge_GameLevelChapterRelasByCond";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelChapterRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_GameLevelChapterRela_AddNewRecordAsync(objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_GameLevelChapterRelaEN);
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelChapterRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_AddNewObjSave(objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_GameLevelChapterRela_CheckPropertyNew(objge_GameLevelChapterRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_GameLevelChapterRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_GameLevelChapterRela_CheckUniCond4Add(objge_GameLevelChapterRelaEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await ge_GameLevelChapterRela_AddNewRecordAsync(objge_GameLevelChapterRelaEN);
if (returnBool == true)
{
ge_GameLevelChapterRela_ReFreshCache(objge_GameLevelChapterRelaEN.courseId);
}
else
{
const strInfo = `添加[游戏关卡章节关系表(ge_GameLevelChapterRela)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objge_GameLevelChapterRelaEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_GameLevelChapterRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_GameLevelChapterRela_CheckUniCond4Add(objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN): Promise<boolean>{
const strUniquenessCondition = ge_GameLevelChapterRela_GetUniCondStr(objge_GameLevelChapterRelaEN);
const bolIsExistCondition = await ge_GameLevelChapterRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_GameLevelChapterRela_CheckUniCond4Update(objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN): Promise<boolean>{
const strUniquenessCondition = ge_GameLevelChapterRela_GetUniCondStr4Update(objge_GameLevelChapterRelaEN);
const bolIsExistCondition = await ge_GameLevelChapterRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_GameLevelChapterRela_UpdateObjSave(objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_GameLevelChapterRelaEN.sfUpdFldSetStr = objge_GameLevelChapterRelaEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_GameLevelChapterRelaEN.mId == 0 || objge_GameLevelChapterRelaEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_GameLevelChapterRela_CheckProperty4Update(objge_GameLevelChapterRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_GameLevelChapterRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_GameLevelChapterRela_CheckUniCond4Update(objge_GameLevelChapterRelaEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_GameLevelChapterRela_UpdateRecordAsync(objge_GameLevelChapterRelaEN);
if (returnBool == true)
{
ge_GameLevelChapterRela_ReFreshCache(objge_GameLevelChapterRelaEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_GameLevelChapterRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_GameLevelChapterRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_GameLevelChapterRela_AddNewRecordWithReturnKeyAsync(objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelChapterRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelChapterRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_GameLevelChapterRela_UpdateRecordAsync(objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_GameLevelChapterRelaEN.sfUpdFldSetStr === undefined || objge_GameLevelChapterRelaEN.sfUpdFldSetStr === null || objge_GameLevelChapterRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_GameLevelChapterRelaEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelChapterRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelChapterRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_GameLevelChapterRela_EditRecordExAsync(objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_GameLevelChapterRelaEN.sfUpdFldSetStr === undefined || objge_GameLevelChapterRelaEN.sfUpdFldSetStr === null || objge_GameLevelChapterRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_GameLevelChapterRelaEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelChapterRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelChapterRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_GameLevelChapterRela_UpdateWithConditionAsync(objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_GameLevelChapterRelaEN.sfUpdFldSetStr === undefined || objge_GameLevelChapterRelaEN.sfUpdFldSetStr === null || objge_GameLevelChapterRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_GameLevelChapterRelaEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);
objge_GameLevelChapterRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_GameLevelChapterRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_IsExistRecordCache(objge_GameLevelChapterRelaCond: clsge_GameLevelChapterRelaEN,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstCache(strCourseId);
if (arrge_GameLevelChapterRelaObjLstCache == null) return false;
let arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaObjLstCache;
if (objge_GameLevelChapterRelaCond.sfFldComparisonOp == null || objge_GameLevelChapterRelaCond.sfFldComparisonOp == "") return arrge_GameLevelChapterRelaSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_GameLevelChapterRelaCond.sfFldComparisonOp);
//console.log("clsge_GameLevelChapterRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_GameLevelChapterRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_GameLevelChapterRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_GameLevelChapterRelaSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_GameLevelChapterRelaCond), ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_IsExistCache(lngmId:number,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstCache(strCourseId);
if (arrge_GameLevelChapterRelaObjLstCache == null) return false;
try
{
const arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaObjLstCache.filter(x => x.mId == lngmId);
if (arrge_GameLevelChapterRelaSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngmId, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
 * @param objge_GameLevelChapterRelaCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_GameLevelChapterRela_GetRecCountByCondCache(objge_GameLevelChapterRelaCond: clsge_GameLevelChapterRelaEN ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_GameLevelChapterRelaObjLstCache = await ge_GameLevelChapterRela_GetObjLstCache(strCourseId);
if (arrge_GameLevelChapterRelaObjLstCache == null) return 0;
let arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaObjLstCache;
if (objge_GameLevelChapterRelaCond.sfFldComparisonOp == null || objge_GameLevelChapterRelaCond.sfFldComparisonOp == "") return arrge_GameLevelChapterRelaSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_GameLevelChapterRelaCond.sfFldComparisonOp);
//console.log("clsge_GameLevelChapterRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_GameLevelChapterRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_GameLevelChapterRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_GameLevelChapterRelaSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_GameLevelChapterRelaCond), ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  async function ge_GameLevelChapterRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_GameLevelChapterRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_GameLevelChapterRela_ConstructorName, strThisFuncName);
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
export  function ge_GameLevelChapterRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_GameLevelChapterRela_ReFreshCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_GameLevelChapterRelaWApi.clsge_GameLevelChapterRelaWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_GameLevelChapterRelaWApi.clsge_GameLevelChapterRelaWApi.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsge_GameLevelChapterRelaEN._CurrTabName, strCourseId);
switch (clsge_GameLevelChapterRelaEN.CacheModeId)
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
clsge_GameLevelChapterRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_GameLevelChapterRela_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_GameLevelChapterRelaWApi.ge_GameLevelChapterRela_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_GameLevelChapterRelaWApi.ge_GameLevelChapterRela_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsge_GameLevelChapterRelaEN._CurrTabName, strCourseId);
switch (clsge_GameLevelChapterRelaEN.CacheModeId)
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
clsge_GameLevelChapterRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_GameLevelChapterRela_GetLastRefreshTime():string
{
if (clsge_GameLevelChapterRelaEN._RefreshTimeLst.length == 0) return "";
return clsge_GameLevelChapterRelaEN._RefreshTimeLst[clsge_GameLevelChapterRelaEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_GameLevelChapterRela_CheckPropertyNew(pobjge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.courseChapterId) === true 
 || pobjge_GameLevelChapterRelaEN.courseChapterId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程章节ID]不能为空(In 游戏关卡章节关系表)!(clsge_GameLevelChapterRelaBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.courseId) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.courseId}(clsge_GameLevelChapterRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.gameLevelId) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.gameLevelId}(clsge_GameLevelChapterRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.courseChapterId) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.courseChapterId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.courseChapterId}(clsge_GameLevelChapterRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.updDate) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.updDate}(clsge_GameLevelChapterRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.updUser) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.updUser}(clsge_GameLevelChapterRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.memo) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.memo}(clsge_GameLevelChapterRelaBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_GameLevelChapterRelaEN.mId && undefined !== pobjge_GameLevelChapterRelaEN.mId && tzDataType.isNumber(pobjge_GameLevelChapterRelaEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjge_GameLevelChapterRelaEN.mId}], 非法,应该为数值型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.courseId) == false && undefined !== pobjge_GameLevelChapterRelaEN.courseId && tzDataType.isString(pobjge_GameLevelChapterRelaEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_GameLevelChapterRelaEN.courseId}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.gameLevelId) == false && undefined !== pobjge_GameLevelChapterRelaEN.gameLevelId && tzDataType.isString(pobjge_GameLevelChapterRelaEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_GameLevelChapterRelaEN.gameLevelId}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.courseChapterId) == false && undefined !== pobjge_GameLevelChapterRelaEN.courseChapterId && tzDataType.isString(pobjge_GameLevelChapterRelaEN.courseChapterId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程章节ID(courseChapterId)]的值:[${pobjge_GameLevelChapterRelaEN.courseChapterId}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_GameLevelChapterRelaEN.questionNum && undefined !== pobjge_GameLevelChapterRelaEN.questionNum && tzDataType.isNumber(pobjge_GameLevelChapterRelaEN.questionNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目数(questionNum)]的值:[${pobjge_GameLevelChapterRelaEN.questionNum}], 非法,应该为数值型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.updDate) == false && undefined !== pobjge_GameLevelChapterRelaEN.updDate && tzDataType.isString(pobjge_GameLevelChapterRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_GameLevelChapterRelaEN.updDate}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.updUser) == false && undefined !== pobjge_GameLevelChapterRelaEN.updUser && tzDataType.isString(pobjge_GameLevelChapterRelaEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_GameLevelChapterRelaEN.updUser}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.memo) == false && undefined !== pobjge_GameLevelChapterRelaEN.memo && tzDataType.isString(pobjge_GameLevelChapterRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_GameLevelChapterRelaEN.memo}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.courseId) == false && pobjge_GameLevelChapterRelaEN.courseId != '[nuull]' && GetStrLen(pobjge_GameLevelChapterRelaEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 游戏关卡章节关系表)!(clsge_GameLevelChapterRelaBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_GameLevelChapterRela_CheckProperty4Update(pobjge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.courseId) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.courseId}(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.gameLevelId) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.gameLevelId}(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.courseChapterId) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.courseChapterId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.courseChapterId}(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.updDate) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.updDate}(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.updUser) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.updUser}(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.memo) == false && GetStrLen(pobjge_GameLevelChapterRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!值:${pobjge_GameLevelChapterRelaEN.memo}(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_GameLevelChapterRelaEN.mId && undefined !== pobjge_GameLevelChapterRelaEN.mId && tzDataType.isNumber(pobjge_GameLevelChapterRelaEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjge_GameLevelChapterRelaEN.mId}], 非法,应该为数值型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.courseId) == false && undefined !== pobjge_GameLevelChapterRelaEN.courseId && tzDataType.isString(pobjge_GameLevelChapterRelaEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_GameLevelChapterRelaEN.courseId}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.gameLevelId) == false && undefined !== pobjge_GameLevelChapterRelaEN.gameLevelId && tzDataType.isString(pobjge_GameLevelChapterRelaEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_GameLevelChapterRelaEN.gameLevelId}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.courseChapterId) == false && undefined !== pobjge_GameLevelChapterRelaEN.courseChapterId && tzDataType.isString(pobjge_GameLevelChapterRelaEN.courseChapterId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程章节ID(courseChapterId)]的值:[${pobjge_GameLevelChapterRelaEN.courseChapterId}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_GameLevelChapterRelaEN.questionNum && undefined !== pobjge_GameLevelChapterRelaEN.questionNum && tzDataType.isNumber(pobjge_GameLevelChapterRelaEN.questionNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目数(questionNum)]的值:[${pobjge_GameLevelChapterRelaEN.questionNum}], 非法,应该为数值型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.updDate) == false && undefined !== pobjge_GameLevelChapterRelaEN.updDate && tzDataType.isString(pobjge_GameLevelChapterRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_GameLevelChapterRelaEN.updDate}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.updUser) == false && undefined !== pobjge_GameLevelChapterRelaEN.updUser && tzDataType.isString(pobjge_GameLevelChapterRelaEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_GameLevelChapterRelaEN.updUser}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.memo) == false && undefined !== pobjge_GameLevelChapterRelaEN.memo && tzDataType.isString(pobjge_GameLevelChapterRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_GameLevelChapterRelaEN.memo}], 非法,应该为字符型(In 游戏关卡章节关系表(ge_GameLevelChapterRela))!(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjge_GameLevelChapterRelaEN.mId 
 || pobjge_GameLevelChapterRelaEN.mId != null && pobjge_GameLevelChapterRelaEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 游戏关卡章节关系表)!(clsge_GameLevelChapterRelaBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjge_GameLevelChapterRelaEN.courseId) == false && pobjge_GameLevelChapterRelaEN.courseId != '[nuull]' && GetStrLen(pobjge_GameLevelChapterRelaEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 游戏关卡章节关系表)!(clsge_GameLevelChapterRelaBL:CheckPropertyNew)");
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
export  function ge_GameLevelChapterRela_GetJSONStrByObj (pobjge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN): string
{
pobjge_GameLevelChapterRelaEN.sfUpdFldSetStr = pobjge_GameLevelChapterRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_GameLevelChapterRelaEN);
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
export  function ge_GameLevelChapterRela_GetObjLstByJSONStr (strJSON: string): Array<clsge_GameLevelChapterRelaEN>
{
let arrge_GameLevelChapterRelaObjLst = new Array<clsge_GameLevelChapterRelaEN>();
if (strJSON === "")
{
return arrge_GameLevelChapterRelaObjLst;
}
try
{
arrge_GameLevelChapterRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_GameLevelChapterRelaObjLst;
}
return arrge_GameLevelChapterRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_GameLevelChapterRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_GameLevelChapterRela_GetObjLstByJSONObjLst (arrge_GameLevelChapterRelaObjLstS: Array<clsge_GameLevelChapterRelaEN>): Array<clsge_GameLevelChapterRelaEN>
{
const arrge_GameLevelChapterRelaObjLst = new Array<clsge_GameLevelChapterRelaEN>();
for (const objInFor of arrge_GameLevelChapterRelaObjLstS) {
const obj1 = ge_GameLevelChapterRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_GameLevelChapterRelaObjLst.push(obj1);
}
return arrge_GameLevelChapterRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_GameLevelChapterRela_GetObjByJSONStr (strJSON: string): clsge_GameLevelChapterRelaEN
{
let pobjge_GameLevelChapterRelaEN = new clsge_GameLevelChapterRelaEN();
if (strJSON === "")
{
return pobjge_GameLevelChapterRelaEN;
}
try
{
pobjge_GameLevelChapterRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_GameLevelChapterRelaEN;
}
return pobjge_GameLevelChapterRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_GameLevelChapterRela_GetCombineCondition(objge_GameLevelChapterRelaCond: clsge_GameLevelChapterRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_GameLevelChapterRelaCond.dicFldComparisonOp, clsge_GameLevelChapterRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objge_GameLevelChapterRelaCond.dicFldComparisonOp[clsge_GameLevelChapterRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsge_GameLevelChapterRelaEN.con_mId, objge_GameLevelChapterRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelChapterRelaCond.dicFldComparisonOp, clsge_GameLevelChapterRelaEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_GameLevelChapterRelaCond.dicFldComparisonOp[clsge_GameLevelChapterRelaEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelChapterRelaEN.con_CourseId, objge_GameLevelChapterRelaCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelChapterRelaCond.dicFldComparisonOp, clsge_GameLevelChapterRelaEN.con_GameLevelId) == true)
{
const strComparisonOpGameLevelId:string = objge_GameLevelChapterRelaCond.dicFldComparisonOp[clsge_GameLevelChapterRelaEN.con_GameLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelChapterRelaEN.con_GameLevelId, objge_GameLevelChapterRelaCond.gameLevelId, strComparisonOpGameLevelId);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelChapterRelaCond.dicFldComparisonOp, clsge_GameLevelChapterRelaEN.con_CourseChapterId) == true)
{
const strComparisonOpCourseChapterId:string = objge_GameLevelChapterRelaCond.dicFldComparisonOp[clsge_GameLevelChapterRelaEN.con_CourseChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelChapterRelaEN.con_CourseChapterId, objge_GameLevelChapterRelaCond.courseChapterId, strComparisonOpCourseChapterId);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelChapterRelaCond.dicFldComparisonOp, clsge_GameLevelChapterRelaEN.con_QuestionNum) == true)
{
const strComparisonOpQuestionNum:string = objge_GameLevelChapterRelaCond.dicFldComparisonOp[clsge_GameLevelChapterRelaEN.con_QuestionNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_GameLevelChapterRelaEN.con_QuestionNum, objge_GameLevelChapterRelaCond.questionNum, strComparisonOpQuestionNum);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelChapterRelaCond.dicFldComparisonOp, clsge_GameLevelChapterRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_GameLevelChapterRelaCond.dicFldComparisonOp[clsge_GameLevelChapterRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelChapterRelaEN.con_UpdDate, objge_GameLevelChapterRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelChapterRelaCond.dicFldComparisonOp, clsge_GameLevelChapterRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_GameLevelChapterRelaCond.dicFldComparisonOp[clsge_GameLevelChapterRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelChapterRelaEN.con_UpdUser, objge_GameLevelChapterRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_GameLevelChapterRelaCond.dicFldComparisonOp, clsge_GameLevelChapterRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_GameLevelChapterRelaCond.dicFldComparisonOp[clsge_GameLevelChapterRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_GameLevelChapterRelaEN.con_Memo, objge_GameLevelChapterRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_GameLevelChapterRela(游戏关卡章节关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_GameLevelChapterRela_GetUniCondStr(objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and mId = '{0}'", objge_GameLevelChapterRelaEN.mId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_GameLevelChapterRela(游戏关卡章节关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_GameLevelChapterRela_GetUniCondStr4Update(objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objge_GameLevelChapterRelaEN.mId);
 strWhereCond +=  Format(" and mId = '{0}'", objge_GameLevelChapterRelaEN.mId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_GameLevelChapterRelaENS:源对象
 * @param objge_GameLevelChapterRelaENT:目标对象
*/
export  function ge_GameLevelChapterRela_CopyObjTo(objge_GameLevelChapterRelaENS: clsge_GameLevelChapterRelaEN , objge_GameLevelChapterRelaENT: clsge_GameLevelChapterRelaEN ): void 
{
objge_GameLevelChapterRelaENT.mId = objge_GameLevelChapterRelaENS.mId; //mId
objge_GameLevelChapterRelaENT.courseId = objge_GameLevelChapterRelaENS.courseId; //课程Id
objge_GameLevelChapterRelaENT.gameLevelId = objge_GameLevelChapterRelaENS.gameLevelId; //游戏关卡Id
objge_GameLevelChapterRelaENT.courseChapterId = objge_GameLevelChapterRelaENS.courseChapterId; //课程章节ID
objge_GameLevelChapterRelaENT.questionNum = objge_GameLevelChapterRelaENS.questionNum; //题目数
objge_GameLevelChapterRelaENT.updDate = objge_GameLevelChapterRelaENS.updDate; //修改日期
objge_GameLevelChapterRelaENT.updUser = objge_GameLevelChapterRelaENS.updUser; //修改人
objge_GameLevelChapterRelaENT.memo = objge_GameLevelChapterRelaENS.memo; //备注
objge_GameLevelChapterRelaENT.sfUpdFldSetStr = objge_GameLevelChapterRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_GameLevelChapterRelaENS:源对象
 * @param objge_GameLevelChapterRelaENT:目标对象
*/
export  function ge_GameLevelChapterRela_GetObjFromJsonObj(objge_GameLevelChapterRelaENS: clsge_GameLevelChapterRelaEN): clsge_GameLevelChapterRelaEN 
{
 const objge_GameLevelChapterRelaENT: clsge_GameLevelChapterRelaEN = new clsge_GameLevelChapterRelaEN();
ObjectAssign(objge_GameLevelChapterRelaENT, objge_GameLevelChapterRelaENS);
 return objge_GameLevelChapterRelaENT;
}