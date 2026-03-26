
 /**
 * 类名:clsRecommendedDegreeWApi
 * 表名:RecommendedDegree(01120295)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:评价相关参数(SenateGaugePara)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 推荐度(RecommendedDegree)
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
import { clsRecommendedDegreeEN } from "@/ts/L0Entity/SenateGaugePara/clsRecommendedDegreeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const recommendedDegree_Controller = "RecommendedDegreeApi";
 export const recommendedDegree_ConstructorName = "recommendedDegree";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRecommendedDegreeId:关键字
 * @returns 对象
 **/
export  async function RecommendedDegree_GetObjByRecommendedDegreeIdAsync(strRecommendedDegreeId: string): Promise<clsRecommendedDegreeEN|null>  
{
const strThisFuncName = "GetObjByRecommendedDegreeIdAsync";

if (IsNullOrEmpty(strRecommendedDegreeId) == true)
{
  const strMsg = Format("参数:[strRecommendedDegreeId]不能为空!(In clsRecommendedDegreeWApi.GetObjByRecommendedDegreeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strRecommendedDegreeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRecommendedDegreeId]的长度:[{0}]不正确!(clsRecommendedDegreeWApi.GetObjByRecommendedDegreeIdAsync)", strRecommendedDegreeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByRecommendedDegreeId";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRecommendedDegreeId,
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
const objRecommendedDegree = RecommendedDegree_GetObjFromJsonObj(returnObj);
return objRecommendedDegree;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param strRecommendedDegreeId:所给的关键字
 * @returns 对象
*/
export  async function RecommendedDegree_GetObjByRecommendedDegreeIdlocalStorage(strRecommendedDegreeId: string) {
const strThisFuncName = "GetObjByRecommendedDegreeIdlocalStorage";

if (IsNullOrEmpty(strRecommendedDegreeId) == true)
{
  const strMsg = Format("参数:[strRecommendedDegreeId]不能为空!(In clsRecommendedDegreeWApi.GetObjByRecommendedDegreeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strRecommendedDegreeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRecommendedDegreeId]的长度:[{0}]不正确!(clsRecommendedDegreeWApi.GetObjByRecommendedDegreeIdlocalStorage)", strRecommendedDegreeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsRecommendedDegreeEN._CurrTabName, strRecommendedDegreeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objRecommendedDegreeCache: clsRecommendedDegreeEN = JSON.parse(strTempObj);
return objRecommendedDegreeCache;
}
try
{
const objRecommendedDegree = await RecommendedDegree_GetObjByRecommendedDegreeIdAsync(strRecommendedDegreeId);
if (objRecommendedDegree != null)
{
localStorage.setItem(strKey, JSON.stringify(objRecommendedDegree));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objRecommendedDegree;
}
return objRecommendedDegree;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strRecommendedDegreeId, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strRecommendedDegreeId:所给的关键字
 * @returns 对象
*/
export  async function RecommendedDegree_GetObjByRecommendedDegreeIdCache(strRecommendedDegreeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByRecommendedDegreeIdCache";

if (IsNullOrEmpty(strRecommendedDegreeId) == true)
{
  const strMsg = Format("参数:[strRecommendedDegreeId]不能为空!(In clsRecommendedDegreeWApi.GetObjByRecommendedDegreeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strRecommendedDegreeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRecommendedDegreeId]的长度:[{0}]不正确!(clsRecommendedDegreeWApi.GetObjByRecommendedDegreeIdCache)", strRecommendedDegreeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstCache();
try
{
const arrRecommendedDegreeSel = arrRecommendedDegreeObjLstCache.filter(x => 
 x.recommendedDegreeId == strRecommendedDegreeId );
let objRecommendedDegree: clsRecommendedDegreeEN;
if (arrRecommendedDegreeSel.length > 0)
{
objRecommendedDegree = arrRecommendedDegreeSel[0];
return objRecommendedDegree;
}
else
{
if (bolTryAsyncOnce == true)
{
const objRecommendedDegreeConst = await RecommendedDegree_GetObjByRecommendedDegreeIdAsync(strRecommendedDegreeId);
if (objRecommendedDegreeConst != null)
{
RecommendedDegree_ReFreshThisCache();
return objRecommendedDegreeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strRecommendedDegreeId, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objRecommendedDegree:所给的对象
 * @returns 对象
*/
export  async function RecommendedDegree_UpdateObjInLstCache(objRecommendedDegree: clsRecommendedDegreeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstCache();
const obj = arrRecommendedDegreeObjLstCache.find(x => 
x.recommendedDegreeId == objRecommendedDegree.recommendedDegreeId);
if (obj != null)
{
objRecommendedDegree.recommendedDegreeId = obj.recommendedDegreeId;
ObjectAssign( obj, objRecommendedDegree);
}
else
{
arrRecommendedDegreeObjLstCache.push(objRecommendedDegree);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, recommendedDegree_ConstructorName, strThisFuncName);
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
export  function RecommendedDegree_SortFunDefa(a:clsRecommendedDegreeEN , b:clsRecommendedDegreeEN): number 
{
return a.recommendedDegreeId.localeCompare(b.recommendedDegreeId);
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
export  function RecommendedDegree_SortFunDefa2Fld(a:clsRecommendedDegreeEN , b:clsRecommendedDegreeEN): number 
{
if (a.recommendedDegreeName == b.recommendedDegreeName) return a.memo.localeCompare(b.memo);
else return a.recommendedDegreeName.localeCompare(b.recommendedDegreeName);
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
export  function RecommendedDegree_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsRecommendedDegreeEN.con_RecommendedDegreeId:
return (a: clsRecommendedDegreeEN, b: clsRecommendedDegreeEN) => {
return a.recommendedDegreeId.localeCompare(b.recommendedDegreeId);
}
case clsRecommendedDegreeEN.con_RecommendedDegreeName:
return (a: clsRecommendedDegreeEN, b: clsRecommendedDegreeEN) => {
return a.recommendedDegreeName.localeCompare(b.recommendedDegreeName);
}
case clsRecommendedDegreeEN.con_Memo:
return (a: clsRecommendedDegreeEN, b: clsRecommendedDegreeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RecommendedDegree]中不存在!(in ${ recommendedDegree_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsRecommendedDegreeEN.con_RecommendedDegreeId:
return (a: clsRecommendedDegreeEN, b: clsRecommendedDegreeEN) => {
return b.recommendedDegreeId.localeCompare(a.recommendedDegreeId);
}
case clsRecommendedDegreeEN.con_RecommendedDegreeName:
return (a: clsRecommendedDegreeEN, b: clsRecommendedDegreeEN) => {
return b.recommendedDegreeName.localeCompare(a.recommendedDegreeName);
}
case clsRecommendedDegreeEN.con_Memo:
return (a: clsRecommendedDegreeEN, b: clsRecommendedDegreeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RecommendedDegree]中不存在!(in ${ recommendedDegree_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strRecommendedDegreeId:所给的关键字
 * @returns 对象
*/
export  async function RecommendedDegree_GetNameByRecommendedDegreeIdCache(strRecommendedDegreeId: string) {

if (IsNullOrEmpty(strRecommendedDegreeId) == true)
{
  const strMsg = Format("参数:[strRecommendedDegreeId]不能为空!(In clsRecommendedDegreeWApi.GetNameByRecommendedDegreeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strRecommendedDegreeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRecommendedDegreeId]的长度:[{0}]不正确!(clsRecommendedDegreeWApi.GetNameByRecommendedDegreeIdCache)", strRecommendedDegreeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstCache();
if (arrRecommendedDegreeObjLstCache == null) return "";
try
{
const arrRecommendedDegreeSel = arrRecommendedDegreeObjLstCache.filter(x => 
 x.recommendedDegreeId == strRecommendedDegreeId );
let objRecommendedDegree: clsRecommendedDegreeEN;
if (arrRecommendedDegreeSel.length > 0)
{
objRecommendedDegree = arrRecommendedDegreeSel[0];
return objRecommendedDegree.recommendedDegreeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strRecommendedDegreeId);
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
export  async function RecommendedDegree_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsRecommendedDegreeEN.con_RecommendedDegreeId:
return (obj: clsRecommendedDegreeEN) => {
return obj.recommendedDegreeId === value;
}
case clsRecommendedDegreeEN.con_RecommendedDegreeName:
return (obj: clsRecommendedDegreeEN) => {
return obj.recommendedDegreeName === value;
}
case clsRecommendedDegreeEN.con_Memo:
return (obj: clsRecommendedDegreeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RecommendedDegree]中不存在!(in ${ recommendedDegree_ConstructorName}.${ strThisFuncName})`;
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
export  async function RecommendedDegree_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsRecommendedDegreeEN.con_RecommendedDegreeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsRecommendedDegreeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsRecommendedDegreeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strRecommendedDegreeId = strInValue;
if (IsNullOrEmpty(strRecommendedDegreeId) == true)
{
return "";
}
const objRecommendedDegree = await RecommendedDegree_GetObjByRecommendedDegreeIdCache(strRecommendedDegreeId );
if (objRecommendedDegree == null) return "";
if (objRecommendedDegree.GetFldValue(strOutFldName) == null) return "";
return objRecommendedDegree.GetFldValue(strOutFldName).toString();
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
export  async function RecommendedDegree_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsRecommendedDegreeEN.con_RecommendedDegreeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrRecommendedDegree = await RecommendedDegree_GetObjLstCache();
if (arrRecommendedDegree == null) return [];
let arrRecommendedDegreeSel = arrRecommendedDegree;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrRecommendedDegreeSel.length == 0) return [];
return arrRecommendedDegreeSel.map(x=>x.recommendedDegreeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RecommendedDegree_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_GetFirstObjAsync(strWhereCond: string): Promise<clsRecommendedDegreeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const objRecommendedDegree = RecommendedDegree_GetObjFromJsonObj(returnObj);
return objRecommendedDegree;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRecommendedDegreeEN._CurrTabName;
if (IsNullOrEmpty(clsRecommendedDegreeEN.WhereFormat) == false)
{
strWhereCond = clsRecommendedDegreeEN.WhereFormat;
}
if (IsNullOrEmpty(clsRecommendedDegreeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRecommendedDegreeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrRecommendedDegreeExObjLstCache: Array<clsRecommendedDegreeEN> = CacheHelper.Get(strKey);
const arrRecommendedDegreeObjLstT = RecommendedDegree_GetObjLstByJSONObjLst(arrRecommendedDegreeExObjLstCache);
return arrRecommendedDegreeObjLstT;
}
try
{
const arrRecommendedDegreeExObjLst = await RecommendedDegree_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrRecommendedDegreeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRecommendedDegreeExObjLst.length);
console.log(strInfo);
return arrRecommendedDegreeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RecommendedDegree_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRecommendedDegreeEN._CurrTabName;
if (IsNullOrEmpty(clsRecommendedDegreeEN.WhereFormat) == false)
{
strWhereCond = clsRecommendedDegreeEN.WhereFormat;
}
if (IsNullOrEmpty(clsRecommendedDegreeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRecommendedDegreeEN.CacheAddiCondition);
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
const arrRecommendedDegreeExObjLstCache: Array<clsRecommendedDegreeEN> = JSON.parse(strTempObjLst);
const arrRecommendedDegreeObjLstT = RecommendedDegree_GetObjLstByJSONObjLst(arrRecommendedDegreeExObjLstCache);
return arrRecommendedDegreeObjLstT;
}
try
{
const arrRecommendedDegreeExObjLst = await RecommendedDegree_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrRecommendedDegreeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRecommendedDegreeExObjLst.length);
console.log(strInfo);
return arrRecommendedDegreeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RecommendedDegree_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRecommendedDegreeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrRecommendedDegreeObjLstCache: Array<clsRecommendedDegreeEN> = JSON.parse(strTempObjLst);
return arrRecommendedDegreeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function RecommendedDegree_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRecommendedDegreeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", recommendedDegree_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RecommendedDegree_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsRecommendedDegreeEN._CurrTabName;
if (IsNullOrEmpty(clsRecommendedDegreeEN.WhereFormat) == false)
{
strWhereCond = clsRecommendedDegreeEN.WhereFormat;
}
if (IsNullOrEmpty(clsRecommendedDegreeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRecommendedDegreeEN.CacheAddiCondition);
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
const arrRecommendedDegreeExObjLstCache: Array<clsRecommendedDegreeEN> = JSON.parse(strTempObjLst);
const arrRecommendedDegreeObjLstT = RecommendedDegree_GetObjLstByJSONObjLst(arrRecommendedDegreeExObjLstCache);
return arrRecommendedDegreeObjLstT;
}
try
{
const arrRecommendedDegreeExObjLst = await RecommendedDegree_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrRecommendedDegreeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRecommendedDegreeExObjLst.length);
console.log(strInfo);
return arrRecommendedDegreeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RecommendedDegree_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsRecommendedDegreeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrRecommendedDegreeObjLstCache: Array<clsRecommendedDegreeEN> = JSON.parse(strTempObjLst);
return arrRecommendedDegreeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RecommendedDegree_GetObjLstCache(): Promise<Array<clsRecommendedDegreeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrRecommendedDegreeObjLstCache;
switch (clsRecommendedDegreeEN.CacheModeId)
{
case "04"://sessionStorage
arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstClientCache();
break;
default:
arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstClientCache();
break;
}
return arrRecommendedDegreeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RecommendedDegree_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrRecommendedDegreeObjLstCache;
switch (clsRecommendedDegreeEN.CacheModeId)
{
case "04"://sessionStorage
arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrRecommendedDegreeObjLstCache = null;
break;
default:
arrRecommendedDegreeObjLstCache = null;
break;
}
return arrRecommendedDegreeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRecommendedDegreeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function RecommendedDegree_GetSubObjLstCache(objRecommendedDegreeCond: clsRecommendedDegreeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstCache();
let arrRecommendedDegreeSel = arrRecommendedDegreeObjLstCache;
if (objRecommendedDegreeCond.sfFldComparisonOp == null || objRecommendedDegreeCond.sfFldComparisonOp == "") return arrRecommendedDegreeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRecommendedDegreeCond.sfFldComparisonOp);
//console.log("clsRecommendedDegreeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRecommendedDegreeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRecommendedDegreeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRecommendedDegreeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objRecommendedDegreeCond), recommendedDegree_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRecommendedDegreeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRecommendedDegreeId:关键字列表
 * @returns 对象列表
 **/
export  async function RecommendedDegree_GetObjLstByRecommendedDegreeIdLstAsync(arrRecommendedDegreeId: Array<string>): Promise<Array<clsRecommendedDegreeEN>>  
{
const strThisFuncName = "GetObjLstByRecommendedDegreeIdLstAsync";
const strAction = "GetObjLstByRecommendedDegreeIdLst";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrRecommendedDegreeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", recommendedDegree_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RecommendedDegree_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param arrstrRecommendedDegreeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function RecommendedDegree_GetObjLstByRecommendedDegreeIdLstCache(arrRecommendedDegreeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByRecommendedDegreeIdLstCache";
try
{
const arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstCache();
const arrRecommendedDegreeSel = arrRecommendedDegreeObjLstCache.filter(x => arrRecommendedDegreeIdLst.indexOf(x.recommendedDegreeId)>-1);
return arrRecommendedDegreeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrRecommendedDegreeIdLst.join(","), recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsRecommendedDegreeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", recommendedDegree_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RecommendedDegree_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsRecommendedDegreeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", recommendedDegree_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RecommendedDegree_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsRecommendedDegreeEN>();
const arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstCache();
if (arrRecommendedDegreeObjLstCache.length == 0) return arrRecommendedDegreeObjLstCache;
let arrRecommendedDegreeSel = arrRecommendedDegreeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objRecommendedDegreeCond = new clsRecommendedDegreeEN();
ObjectAssign(objRecommendedDegreeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsRecommendedDegreeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRecommendedDegreeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRecommendedDegreeSel.length == 0) return arrRecommendedDegreeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrRecommendedDegreeSel = arrRecommendedDegreeSel.sort(RecommendedDegree_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrRecommendedDegreeSel = arrRecommendedDegreeSel.sort(objPagerPara.sortFun);
}
arrRecommendedDegreeSel = arrRecommendedDegreeSel.slice(intStart, intEnd);     
return arrRecommendedDegreeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRecommendedDegreeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function RecommendedDegree_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsRecommendedDegreeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsRecommendedDegreeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", recommendedDegree_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RecommendedDegree_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param strRecommendedDegreeId:关键字
 * @returns 获取删除的结果
 **/
export  async function RecommendedDegree_DelRecordAsync(strRecommendedDegreeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strRecommendedDegreeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param arrRecommendedDegreeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function RecommendedDegree_DelRecommendedDegreesAsync(arrRecommendedDegreeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecommendedDegreesAsync";
const strAction = "DelRecommendedDegrees";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrRecommendedDegreeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_DelRecommendedDegreesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelRecommendedDegreesByCondAsync";
const strAction = "DelRecommendedDegreesByCond";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param objRecommendedDegreeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RecommendedDegree_AddNewRecordAsync(objRecommendedDegreeEN: clsRecommendedDegreeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objRecommendedDegreeEN.recommendedDegreeId === null || objRecommendedDegreeEN.recommendedDegreeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objRecommendedDegreeEN);
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRecommendedDegreeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param objRecommendedDegreeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RecommendedDegree_AddNewRecordWithMaxIdAsync(objRecommendedDegreeEN: clsRecommendedDegreeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRecommendedDegreeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_AddNewObjSave(objRecommendedDegreeEN: clsRecommendedDegreeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
RecommendedDegree_CheckPropertyNew(objRecommendedDegreeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ recommendedDegree_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await RecommendedDegree_IsExistAsync(objRecommendedDegreeEN.recommendedDegreeId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objRecommendedDegreeEN.recommendedDegreeId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await RecommendedDegree_AddNewRecordAsync(objRecommendedDegreeEN);
if (returnBool == true)
{
RecommendedDegree_ReFreshCache();
}
else
{
const strInfo = `添加[推荐度(RecommendedDegree)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objRecommendedDegreeEN.recommendedDegreeId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ recommendedDegree_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function RecommendedDegree_UpdateObjSave(objRecommendedDegreeEN: clsRecommendedDegreeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objRecommendedDegreeEN.sfUpdFldSetStr = objRecommendedDegreeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objRecommendedDegreeEN.recommendedDegreeId == "" || objRecommendedDegreeEN.recommendedDegreeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
RecommendedDegree_CheckProperty4Update(objRecommendedDegreeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ recommendedDegree_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await RecommendedDegree_UpdateRecordAsync(objRecommendedDegreeEN);
if (returnBool == true)
{
RecommendedDegree_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ recommendedDegree_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objRecommendedDegreeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function RecommendedDegree_AddNewRecordWithReturnKeyAsync(objRecommendedDegreeEN: clsRecommendedDegreeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRecommendedDegreeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param objRecommendedDegreeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RecommendedDegree_UpdateRecordAsync(objRecommendedDegreeEN: clsRecommendedDegreeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objRecommendedDegreeEN.sfUpdFldSetStr === undefined || objRecommendedDegreeEN.sfUpdFldSetStr === null || objRecommendedDegreeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRecommendedDegreeEN.recommendedDegreeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRecommendedDegreeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param objRecommendedDegreeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RecommendedDegree_EditRecordExAsync(objRecommendedDegreeEN: clsRecommendedDegreeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objRecommendedDegreeEN.sfUpdFldSetStr === undefined || objRecommendedDegreeEN.sfUpdFldSetStr === null || objRecommendedDegreeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRecommendedDegreeEN.recommendedDegreeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRecommendedDegreeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param objRecommendedDegreeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RecommendedDegree_UpdateWithConditionAsync(objRecommendedDegreeEN: clsRecommendedDegreeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objRecommendedDegreeEN.sfUpdFldSetStr === undefined || objRecommendedDegreeEN.sfUpdFldSetStr === null || objRecommendedDegreeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRecommendedDegreeEN.recommendedDegreeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);
objRecommendedDegreeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRecommendedDegreeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param objstrRecommendedDegreeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function RecommendedDegree_IsExistRecordCache(objRecommendedDegreeCond: clsRecommendedDegreeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstCache();
if (arrRecommendedDegreeObjLstCache == null) return false;
let arrRecommendedDegreeSel = arrRecommendedDegreeObjLstCache;
if (objRecommendedDegreeCond.sfFldComparisonOp == null || objRecommendedDegreeCond.sfFldComparisonOp == "") return arrRecommendedDegreeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRecommendedDegreeCond.sfFldComparisonOp);
//console.log("clsRecommendedDegreeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRecommendedDegreeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRecommendedDegreeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRecommendedDegreeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objRecommendedDegreeCond), recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param strRecommendedDegreeId:所给的关键字
 * @returns 对象
*/
export  async function RecommendedDegree_IsExistCache(strRecommendedDegreeId:string) {
const strThisFuncName = "IsExistCache";
const arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstCache();
if (arrRecommendedDegreeObjLstCache == null) return false;
try
{
const arrRecommendedDegreeSel = arrRecommendedDegreeObjLstCache.filter(x => x.recommendedDegreeId == strRecommendedDegreeId);
if (arrRecommendedDegreeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strRecommendedDegreeId, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strRecommendedDegreeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function RecommendedDegree_IsExistAsync(strRecommendedDegreeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRecommendedDegreeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
 * @param objRecommendedDegreeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function RecommendedDegree_GetRecCountByCondCache(objRecommendedDegreeCond: clsRecommendedDegreeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrRecommendedDegreeObjLstCache = await RecommendedDegree_GetObjLstCache();
if (arrRecommendedDegreeObjLstCache == null) return 0;
let arrRecommendedDegreeSel = arrRecommendedDegreeObjLstCache;
if (objRecommendedDegreeCond.sfFldComparisonOp == null || objRecommendedDegreeCond.sfFldComparisonOp == "") return arrRecommendedDegreeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRecommendedDegreeCond.sfFldComparisonOp);
//console.log("clsRecommendedDegreeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRecommendedDegreeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRecommendedDegreeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRecommendedDegreeSel = arrRecommendedDegreeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRecommendedDegreeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objRecommendedDegreeCond), recommendedDegree_ConstructorName, strThisFuncName);
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
export  async function RecommendedDegree_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(recommendedDegree_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, recommendedDegree_ConstructorName, strThisFuncName);
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
export  function RecommendedDegree_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function RecommendedDegree_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsRecommendedDegreeEN._CurrTabName;
switch (clsRecommendedDegreeEN.CacheModeId)
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
clsRecommendedDegreeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function RecommendedDegree_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsRecommendedDegreeEN._CurrTabName;
switch (clsRecommendedDegreeEN.CacheModeId)
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
clsRecommendedDegreeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function RecommendedDegree_GetLastRefreshTime():string
{
if (clsRecommendedDegreeEN._RefreshTimeLst.length == 0) return "";
return clsRecommendedDegreeEN._RefreshTimeLst[clsRecommendedDegreeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function RecommendedDegree_BindDdl_RecommendedDegreeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_RecommendedDegreeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_RecommendedDegreeIdInDivCache");
const arrObjLstSel = await RecommendedDegree_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsRecommendedDegreeEN.con_RecommendedDegreeId, clsRecommendedDegreeEN.con_RecommendedDegreeName, "推荐度...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function RecommendedDegree_GetArrRecommendedDegree()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_RecommendedDegreeIdInDivCache");
const arrRecommendedDegree = new Array<clsRecommendedDegreeEN>();
const arrObjLstSel = await RecommendedDegree_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsRecommendedDegreeEN();
obj0.recommendedDegreeId = '0';
obj0.recommendedDegreeName = '选推荐度...';
arrRecommendedDegree.push(obj0);
arrObjLstSel.forEach(x => arrRecommendedDegree.push(x));
return arrRecommendedDegree;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RecommendedDegree_CheckPropertyNew(pobjRecommendedDegreeEN: clsRecommendedDegreeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjRecommendedDegreeEN.recommendedDegreeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[推荐度名称]不能为空(In 推荐度)!(clsRecommendedDegreeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRecommendedDegreeEN.recommendedDegreeId) == false && GetStrLen(pobjRecommendedDegreeEN.recommendedDegreeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[推荐度Id(recommendedDegreeId)]的长度不能超过2(In 推荐度(RecommendedDegree))!值:${pobjRecommendedDegreeEN.recommendedDegreeId}(clsRecommendedDegreeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjRecommendedDegreeEN.recommendedDegreeName) == false && GetStrLen(pobjRecommendedDegreeEN.recommendedDegreeName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[推荐度名称(recommendedDegreeName)]的长度不能超过30(In 推荐度(RecommendedDegree))!值:${pobjRecommendedDegreeEN.recommendedDegreeName}(clsRecommendedDegreeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjRecommendedDegreeEN.memo) == false && GetStrLen(pobjRecommendedDegreeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 推荐度(RecommendedDegree))!值:${pobjRecommendedDegreeEN.memo}(clsRecommendedDegreeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRecommendedDegreeEN.recommendedDegreeId) == false && undefined !== pobjRecommendedDegreeEN.recommendedDegreeId && tzDataType.isString(pobjRecommendedDegreeEN.recommendedDegreeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[推荐度Id(recommendedDegreeId)]的值:[${pobjRecommendedDegreeEN.recommendedDegreeId}], 非法,应该为字符型(In 推荐度(RecommendedDegree))!(clsRecommendedDegreeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRecommendedDegreeEN.recommendedDegreeName) == false && undefined !== pobjRecommendedDegreeEN.recommendedDegreeName && tzDataType.isString(pobjRecommendedDegreeEN.recommendedDegreeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[推荐度名称(recommendedDegreeName)]的值:[${pobjRecommendedDegreeEN.recommendedDegreeName}], 非法,应该为字符型(In 推荐度(RecommendedDegree))!(clsRecommendedDegreeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRecommendedDegreeEN.memo) == false && undefined !== pobjRecommendedDegreeEN.memo && tzDataType.isString(pobjRecommendedDegreeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjRecommendedDegreeEN.memo}], 非法,应该为字符型(In 推荐度(RecommendedDegree))!(clsRecommendedDegreeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RecommendedDegree_CheckProperty4Update(pobjRecommendedDegreeEN: clsRecommendedDegreeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRecommendedDegreeEN.recommendedDegreeId) == false && GetStrLen(pobjRecommendedDegreeEN.recommendedDegreeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[推荐度Id(recommendedDegreeId)]的长度不能超过2(In 推荐度(RecommendedDegree))!值:${pobjRecommendedDegreeEN.recommendedDegreeId}(clsRecommendedDegreeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRecommendedDegreeEN.recommendedDegreeName) == false && GetStrLen(pobjRecommendedDegreeEN.recommendedDegreeName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[推荐度名称(recommendedDegreeName)]的长度不能超过30(In 推荐度(RecommendedDegree))!值:${pobjRecommendedDegreeEN.recommendedDegreeName}(clsRecommendedDegreeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRecommendedDegreeEN.memo) == false && GetStrLen(pobjRecommendedDegreeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 推荐度(RecommendedDegree))!值:${pobjRecommendedDegreeEN.memo}(clsRecommendedDegreeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRecommendedDegreeEN.recommendedDegreeId) == false && undefined !== pobjRecommendedDegreeEN.recommendedDegreeId && tzDataType.isString(pobjRecommendedDegreeEN.recommendedDegreeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[推荐度Id(recommendedDegreeId)]的值:[${pobjRecommendedDegreeEN.recommendedDegreeId}], 非法,应该为字符型(In 推荐度(RecommendedDegree))!(clsRecommendedDegreeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRecommendedDegreeEN.recommendedDegreeName) == false && undefined !== pobjRecommendedDegreeEN.recommendedDegreeName && tzDataType.isString(pobjRecommendedDegreeEN.recommendedDegreeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[推荐度名称(recommendedDegreeName)]的值:[${pobjRecommendedDegreeEN.recommendedDegreeName}], 非法,应该为字符型(In 推荐度(RecommendedDegree))!(clsRecommendedDegreeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRecommendedDegreeEN.memo) == false && undefined !== pobjRecommendedDegreeEN.memo && tzDataType.isString(pobjRecommendedDegreeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjRecommendedDegreeEN.memo}], 非法,应该为字符型(In 推荐度(RecommendedDegree))!(clsRecommendedDegreeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjRecommendedDegreeEN.recommendedDegreeId) === true 
 || pobjRecommendedDegreeEN.recommendedDegreeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[推荐度Id]不能为空(In 推荐度)!(clsRecommendedDegreeBL:CheckProperty4Update)`);
}
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
export  function RecommendedDegree_GetJSONStrByObj (pobjRecommendedDegreeEN: clsRecommendedDegreeEN): string
{
pobjRecommendedDegreeEN.sfUpdFldSetStr = pobjRecommendedDegreeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjRecommendedDegreeEN);
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
export  function RecommendedDegree_GetObjLstByJSONStr (strJSON: string): Array<clsRecommendedDegreeEN>
{
let arrRecommendedDegreeObjLst = new Array<clsRecommendedDegreeEN>();
if (strJSON === "")
{
return arrRecommendedDegreeObjLst;
}
try
{
arrRecommendedDegreeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrRecommendedDegreeObjLst;
}
return arrRecommendedDegreeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRecommendedDegreeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function RecommendedDegree_GetObjLstByJSONObjLst (arrRecommendedDegreeObjLstS: Array<clsRecommendedDegreeEN>): Array<clsRecommendedDegreeEN>
{
const arrRecommendedDegreeObjLst = new Array<clsRecommendedDegreeEN>();
for (const objInFor of arrRecommendedDegreeObjLstS) {
const obj1 = RecommendedDegree_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrRecommendedDegreeObjLst.push(obj1);
}
return arrRecommendedDegreeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RecommendedDegree_GetObjByJSONStr (strJSON: string): clsRecommendedDegreeEN
{
let pobjRecommendedDegreeEN = new clsRecommendedDegreeEN();
if (strJSON === "")
{
return pobjRecommendedDegreeEN;
}
try
{
pobjRecommendedDegreeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjRecommendedDegreeEN;
}
return pobjRecommendedDegreeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function RecommendedDegree_GetCombineCondition(objRecommendedDegreeCond: clsRecommendedDegreeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objRecommendedDegreeCond.dicFldComparisonOp, clsRecommendedDegreeEN.con_RecommendedDegreeId) == true)
{
const strComparisonOpRecommendedDegreeId:string = objRecommendedDegreeCond.dicFldComparisonOp[clsRecommendedDegreeEN.con_RecommendedDegreeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRecommendedDegreeEN.con_RecommendedDegreeId, objRecommendedDegreeCond.recommendedDegreeId, strComparisonOpRecommendedDegreeId);
}
if (Object.prototype.hasOwnProperty.call(objRecommendedDegreeCond.dicFldComparisonOp, clsRecommendedDegreeEN.con_RecommendedDegreeName) == true)
{
const strComparisonOpRecommendedDegreeName:string = objRecommendedDegreeCond.dicFldComparisonOp[clsRecommendedDegreeEN.con_RecommendedDegreeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsRecommendedDegreeEN.con_RecommendedDegreeName, objRecommendedDegreeCond.recommendedDegreeName, strComparisonOpRecommendedDegreeName);
}
if (Object.prototype.hasOwnProperty.call(objRecommendedDegreeCond.dicFldComparisonOp, clsRecommendedDegreeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objRecommendedDegreeCond.dicFldComparisonOp[clsRecommendedDegreeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsRecommendedDegreeEN.con_Memo, objRecommendedDegreeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRecommendedDegreeENS:源对象
 * @param objRecommendedDegreeENT:目标对象
*/
export  function RecommendedDegree_CopyObjTo(objRecommendedDegreeENS: clsRecommendedDegreeEN , objRecommendedDegreeENT: clsRecommendedDegreeEN ): void 
{
objRecommendedDegreeENT.recommendedDegreeId = objRecommendedDegreeENS.recommendedDegreeId; //推荐度Id
objRecommendedDegreeENT.recommendedDegreeName = objRecommendedDegreeENS.recommendedDegreeName; //推荐度名称
objRecommendedDegreeENT.memo = objRecommendedDegreeENS.memo; //备注
objRecommendedDegreeENT.sfUpdFldSetStr = objRecommendedDegreeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRecommendedDegreeENS:源对象
 * @param objRecommendedDegreeENT:目标对象
*/
export  function RecommendedDegree_GetObjFromJsonObj(objRecommendedDegreeENS: clsRecommendedDegreeEN): clsRecommendedDegreeEN 
{
 const objRecommendedDegreeENT: clsRecommendedDegreeEN = new clsRecommendedDegreeEN();
ObjectAssign(objRecommendedDegreeENT, objRecommendedDegreeENS);
 return objRecommendedDegreeENT;
}