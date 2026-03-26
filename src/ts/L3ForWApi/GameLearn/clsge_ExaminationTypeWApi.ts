
 /**
 * 类名:clsge_ExaminationTypeWApi
 * 表名:ge_ExaminationType(01120902)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:21
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
 * 检查类型(ge_ExaminationType)
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
import { clsge_ExaminationTypeEN } from "@/ts/L0Entity/GameLearn/clsge_ExaminationTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_ExaminationType_Controller = "ge_ExaminationTypeApi";
 export const ge_ExaminationType_ConstructorName = "ge_ExaminationType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strExaminationTypeId:关键字
 * @returns 对象
 **/
export  async function ge_ExaminationType_GetObjByExaminationTypeIdAsync(strExaminationTypeId: string): Promise<clsge_ExaminationTypeEN|null>  
{
const strThisFuncName = "GetObjByExaminationTypeIdAsync";

if (IsNullOrEmpty(strExaminationTypeId) == true)
{
  const strMsg = Format("参数:[strExaminationTypeId]不能为空!(In clsge_ExaminationTypeWApi.GetObjByExaminationTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strExaminationTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strExaminationTypeId]的长度:[{0}]不正确!(clsge_ExaminationTypeWApi.GetObjByExaminationTypeIdAsync)", strExaminationTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByExaminationTypeId";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strExaminationTypeId,
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
const objge_ExaminationType = ge_ExaminationType_GetObjFromJsonObj(returnObj);
return objge_ExaminationType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param strExaminationTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ExaminationType_GetObjByExaminationTypeIdlocalStorage(strExaminationTypeId: string) {
const strThisFuncName = "GetObjByExaminationTypeIdlocalStorage";

if (IsNullOrEmpty(strExaminationTypeId) == true)
{
  const strMsg = Format("参数:[strExaminationTypeId]不能为空!(In clsge_ExaminationTypeWApi.GetObjByExaminationTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strExaminationTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strExaminationTypeId]的长度:[{0}]不正确!(clsge_ExaminationTypeWApi.GetObjByExaminationTypeIdlocalStorage)", strExaminationTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_ExaminationTypeEN._CurrTabName, strExaminationTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_ExaminationTypeCache: clsge_ExaminationTypeEN = JSON.parse(strTempObj);
return objge_ExaminationTypeCache;
}
try
{
const objge_ExaminationType = await ge_ExaminationType_GetObjByExaminationTypeIdAsync(strExaminationTypeId);
if (objge_ExaminationType != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_ExaminationType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_ExaminationType;
}
return objge_ExaminationType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strExaminationTypeId, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strExaminationTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ExaminationType_GetObjByExaminationTypeIdCache(strExaminationTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByExaminationTypeIdCache";

if (IsNullOrEmpty(strExaminationTypeId) == true)
{
  const strMsg = Format("参数:[strExaminationTypeId]不能为空!(In clsge_ExaminationTypeWApi.GetObjByExaminationTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strExaminationTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strExaminationTypeId]的长度:[{0}]不正确!(clsge_ExaminationTypeWApi.GetObjByExaminationTypeIdCache)", strExaminationTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstCache();
try
{
const arrge_ExaminationTypeSel = arrge_ExaminationTypeObjLstCache.filter(x => 
 x.examinationTypeId == strExaminationTypeId );
let objge_ExaminationType: clsge_ExaminationTypeEN;
if (arrge_ExaminationTypeSel.length > 0)
{
objge_ExaminationType = arrge_ExaminationTypeSel[0];
return objge_ExaminationType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_ExaminationTypeConst = await ge_ExaminationType_GetObjByExaminationTypeIdAsync(strExaminationTypeId);
if (objge_ExaminationTypeConst != null)
{
ge_ExaminationType_ReFreshThisCache();
return objge_ExaminationTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strExaminationTypeId, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_ExaminationType:所给的对象
 * @returns 对象
*/
export  async function ge_ExaminationType_UpdateObjInLstCache(objge_ExaminationType: clsge_ExaminationTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstCache();
const obj = arrge_ExaminationTypeObjLstCache.find(x => x.typeDescribe == objge_ExaminationType.typeDescribe);
if (obj != null)
{
objge_ExaminationType.examinationTypeId = obj.examinationTypeId;
ObjectAssign( obj, objge_ExaminationType);
}
else
{
arrge_ExaminationTypeObjLstCache.push(objge_ExaminationType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  function ge_ExaminationType_SortFunDefa(a:clsge_ExaminationTypeEN , b:clsge_ExaminationTypeEN): number 
{
return a.examinationTypeId.localeCompare(b.examinationTypeId);
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
export  function ge_ExaminationType_SortFunDefa2Fld(a:clsge_ExaminationTypeEN , b:clsge_ExaminationTypeEN): number 
{
if (a.typeDescribe == b.typeDescribe) return a.updDate.localeCompare(b.updDate);
else return a.typeDescribe.localeCompare(b.typeDescribe);
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
export  function ge_ExaminationType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_ExaminationTypeEN.con_ExaminationTypeId:
return (a: clsge_ExaminationTypeEN, b: clsge_ExaminationTypeEN) => {
return a.examinationTypeId.localeCompare(b.examinationTypeId);
}
case clsge_ExaminationTypeEN.con_TypeDescribe:
return (a: clsge_ExaminationTypeEN, b: clsge_ExaminationTypeEN) => {
if (a.typeDescribe == null) return -1;
if (b.typeDescribe == null) return 1;
return a.typeDescribe.localeCompare(b.typeDescribe);
}
case clsge_ExaminationTypeEN.con_UpdDate:
return (a: clsge_ExaminationTypeEN, b: clsge_ExaminationTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_ExaminationTypeEN.con_UpdUser:
return (a: clsge_ExaminationTypeEN, b: clsge_ExaminationTypeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_ExaminationTypeEN.con_Memo:
return (a: clsge_ExaminationTypeEN, b: clsge_ExaminationTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ExaminationType]中不存在!(in ${ ge_ExaminationType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_ExaminationTypeEN.con_ExaminationTypeId:
return (a: clsge_ExaminationTypeEN, b: clsge_ExaminationTypeEN) => {
return b.examinationTypeId.localeCompare(a.examinationTypeId);
}
case clsge_ExaminationTypeEN.con_TypeDescribe:
return (a: clsge_ExaminationTypeEN, b: clsge_ExaminationTypeEN) => {
if (b.typeDescribe == null) return -1;
if (a.typeDescribe == null) return 1;
return b.typeDescribe.localeCompare(a.typeDescribe);
}
case clsge_ExaminationTypeEN.con_UpdDate:
return (a: clsge_ExaminationTypeEN, b: clsge_ExaminationTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_ExaminationTypeEN.con_UpdUser:
return (a: clsge_ExaminationTypeEN, b: clsge_ExaminationTypeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_ExaminationTypeEN.con_Memo:
return (a: clsge_ExaminationTypeEN, b: clsge_ExaminationTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ExaminationType]中不存在!(in ${ ge_ExaminationType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strExaminationTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ExaminationType_GetNameByExaminationTypeIdCache(strExaminationTypeId: string) {

if (IsNullOrEmpty(strExaminationTypeId) == true)
{
  const strMsg = Format("参数:[strExaminationTypeId]不能为空!(In clsge_ExaminationTypeWApi.GetNameByExaminationTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strExaminationTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strExaminationTypeId]的长度:[{0}]不正确!(clsge_ExaminationTypeWApi.GetNameByExaminationTypeIdCache)", strExaminationTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstCache();
if (arrge_ExaminationTypeObjLstCache == null) return "";
try
{
const arrge_ExaminationTypeSel = arrge_ExaminationTypeObjLstCache.filter(x => 
 x.examinationTypeId == strExaminationTypeId );
let objge_ExaminationType: clsge_ExaminationTypeEN;
if (arrge_ExaminationTypeSel.length > 0)
{
objge_ExaminationType = arrge_ExaminationTypeSel[0];
return objge_ExaminationType.typeDescribe;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strExaminationTypeId);
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
export  async function ge_ExaminationType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_ExaminationTypeEN.con_ExaminationTypeId:
return (obj: clsge_ExaminationTypeEN) => {
return obj.examinationTypeId === value;
}
case clsge_ExaminationTypeEN.con_TypeDescribe:
return (obj: clsge_ExaminationTypeEN) => {
return obj.typeDescribe === value;
}
case clsge_ExaminationTypeEN.con_UpdDate:
return (obj: clsge_ExaminationTypeEN) => {
return obj.updDate === value;
}
case clsge_ExaminationTypeEN.con_UpdUser:
return (obj: clsge_ExaminationTypeEN) => {
return obj.updUser === value;
}
case clsge_ExaminationTypeEN.con_Memo:
return (obj: clsge_ExaminationTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_ExaminationType]中不存在!(in ${ ge_ExaminationType_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_ExaminationType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsge_ExaminationTypeEN.con_ExaminationTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_ExaminationTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_ExaminationTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strExaminationTypeId = strInValue;
if (IsNullOrEmpty(strExaminationTypeId) == true)
{
return "";
}
const objge_ExaminationType = await ge_ExaminationType_GetObjByExaminationTypeIdCache(strExaminationTypeId );
if (objge_ExaminationType == null) return "";
if (objge_ExaminationType.GetFldValue(strOutFldName) == null) return "";
return objge_ExaminationType.GetFldValue(strOutFldName).toString();
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
export  async function ge_ExaminationType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsge_ExaminationTypeEN.con_ExaminationTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_ExaminationType = await ge_ExaminationType_GetObjLstCache();
if (arrge_ExaminationType == null) return [];
let arrge_ExaminationTypeSel = arrge_ExaminationType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_ExaminationTypeSel.length == 0) return [];
return arrge_ExaminationTypeSel.map(x=>x.examinationTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_ExaminationType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_GetFirstObjAsync(strWhereCond: string): Promise<clsge_ExaminationTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const objge_ExaminationType = ge_ExaminationType_GetObjFromJsonObj(returnObj);
return objge_ExaminationType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_ExaminationTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_ExaminationTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_ExaminationTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_ExaminationTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ExaminationTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_ExaminationTypeExObjLstCache: Array<clsge_ExaminationTypeEN> = CacheHelper.Get(strKey);
const arrge_ExaminationTypeObjLstT = ge_ExaminationType_GetObjLstByJSONObjLst(arrge_ExaminationTypeExObjLstCache);
return arrge_ExaminationTypeObjLstT;
}
try
{
const arrge_ExaminationTypeExObjLst = await ge_ExaminationType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_ExaminationTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ExaminationTypeExObjLst.length);
console.log(strInfo);
return arrge_ExaminationTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ExaminationType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_ExaminationTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_ExaminationTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_ExaminationTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_ExaminationTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ExaminationTypeEN.CacheAddiCondition);
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
const arrge_ExaminationTypeExObjLstCache: Array<clsge_ExaminationTypeEN> = JSON.parse(strTempObjLst);
const arrge_ExaminationTypeObjLstT = ge_ExaminationType_GetObjLstByJSONObjLst(arrge_ExaminationTypeExObjLstCache);
return arrge_ExaminationTypeObjLstT;
}
try
{
const arrge_ExaminationTypeExObjLst = await ge_ExaminationType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_ExaminationTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ExaminationTypeExObjLst.length);
console.log(strInfo);
return arrge_ExaminationTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ExaminationType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_ExaminationTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_ExaminationTypeObjLstCache: Array<clsge_ExaminationTypeEN> = JSON.parse(strTempObjLst);
return arrge_ExaminationTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_ExaminationType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_ExaminationTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ExaminationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_ExaminationTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_ExaminationTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_ExaminationTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_ExaminationTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_ExaminationTypeEN.CacheAddiCondition);
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
const arrge_ExaminationTypeExObjLstCache: Array<clsge_ExaminationTypeEN> = JSON.parse(strTempObjLst);
const arrge_ExaminationTypeObjLstT = ge_ExaminationType_GetObjLstByJSONObjLst(arrge_ExaminationTypeExObjLstCache);
return arrge_ExaminationTypeObjLstT;
}
try
{
const arrge_ExaminationTypeExObjLst = await ge_ExaminationType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_ExaminationTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_ExaminationTypeExObjLst.length);
console.log(strInfo);
return arrge_ExaminationTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ExaminationType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_ExaminationTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_ExaminationTypeObjLstCache: Array<clsge_ExaminationTypeEN> = JSON.parse(strTempObjLst);
return arrge_ExaminationTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ExaminationType_GetObjLstCache(): Promise<Array<clsge_ExaminationTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrge_ExaminationTypeObjLstCache;
switch (clsge_ExaminationTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstClientCache();
break;
default:
arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstClientCache();
break;
}
return arrge_ExaminationTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_ExaminationType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_ExaminationTypeObjLstCache;
switch (clsge_ExaminationTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrge_ExaminationTypeObjLstCache = null;
break;
default:
arrge_ExaminationTypeObjLstCache = null;
break;
}
return arrge_ExaminationTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrExaminationTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_ExaminationType_GetSubObjLstCache(objge_ExaminationTypeCond: clsge_ExaminationTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstCache();
let arrge_ExaminationTypeSel = arrge_ExaminationTypeObjLstCache;
if (objge_ExaminationTypeCond.sfFldComparisonOp == null || objge_ExaminationTypeCond.sfFldComparisonOp == "") return arrge_ExaminationTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ExaminationTypeCond.sfFldComparisonOp);
//console.log("clsge_ExaminationTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ExaminationTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ExaminationTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_ExaminationTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_ExaminationTypeCond), ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_ExaminationTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrExaminationTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_ExaminationType_GetObjLstByExaminationTypeIdLstAsync(arrExaminationTypeId: Array<string>): Promise<Array<clsge_ExaminationTypeEN>>  
{
const strThisFuncName = "GetObjLstByExaminationTypeIdLstAsync";
const strAction = "GetObjLstByExaminationTypeIdLst";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrExaminationTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ExaminationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param arrstrExaminationTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_ExaminationType_GetObjLstByExaminationTypeIdLstCache(arrExaminationTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByExaminationTypeIdLstCache";
try
{
const arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstCache();
const arrge_ExaminationTypeSel = arrge_ExaminationTypeObjLstCache.filter(x => arrExaminationTypeIdLst.indexOf(x.examinationTypeId)>-1);
return arrge_ExaminationTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrExaminationTypeIdLst.join(","), ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_ExaminationTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ExaminationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_ExaminationTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ExaminationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_ExaminationTypeEN>();
const arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstCache();
if (arrge_ExaminationTypeObjLstCache.length == 0) return arrge_ExaminationTypeObjLstCache;
let arrge_ExaminationTypeSel = arrge_ExaminationTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_ExaminationTypeCond = new clsge_ExaminationTypeEN();
ObjectAssign(objge_ExaminationTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_ExaminationTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ExaminationTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_ExaminationTypeSel.length == 0) return arrge_ExaminationTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.sort(ge_ExaminationType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.sort(objPagerPara.sortFun);
}
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.slice(intStart, intEnd);     
return arrge_ExaminationTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_ExaminationTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_ExaminationType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_ExaminationTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_ExaminationTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_ExaminationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param strExaminationTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_ExaminationType_DelRecordAsync(strExaminationTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strExaminationTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param arrExaminationTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_ExaminationType_Delge_ExaminationTypesAsync(arrExaminationTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_ExaminationTypesAsync";
const strAction = "Delge_ExaminationTypes";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrExaminationTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_Delge_ExaminationTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_ExaminationTypesByCondAsync";
const strAction = "Delge_ExaminationTypesByCond";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ExaminationType_AddNewRecordAsync(objge_ExaminationTypeEN: clsge_ExaminationTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_ExaminationTypeEN);
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_ExaminationType_AddNewRecordWithMaxIdAsync(objge_ExaminationTypeEN: clsge_ExaminationTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_AddNewObjSave(objge_ExaminationTypeEN: clsge_ExaminationTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_ExaminationType_CheckPropertyNew(objge_ExaminationTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_ExaminationType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_ExaminationType_CheckUniCond4Add(objge_ExaminationTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_ExaminationType_AddNewRecordWithMaxIdAsync(objge_ExaminationTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
ge_ExaminationType_ReFreshCache();
}
else
{
const strInfo = `添加[检查类型(ge_ExaminationType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_ExaminationType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_ExaminationType_CheckUniCond4Add(objge_ExaminationTypeEN: clsge_ExaminationTypeEN): Promise<boolean>{
const strUniquenessCondition = ge_ExaminationType_GetUniCondStr(objge_ExaminationTypeEN);
const bolIsExistCondition = await ge_ExaminationType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_ExaminationType_CheckUniCond4Update(objge_ExaminationTypeEN: clsge_ExaminationTypeEN): Promise<boolean>{
const strUniquenessCondition = ge_ExaminationType_GetUniCondStr4Update(objge_ExaminationTypeEN);
const bolIsExistCondition = await ge_ExaminationType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_ExaminationType_UpdateObjSave(objge_ExaminationTypeEN: clsge_ExaminationTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_ExaminationTypeEN.sfUpdFldSetStr = objge_ExaminationTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_ExaminationTypeEN.examinationTypeId == "" || objge_ExaminationTypeEN.examinationTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_ExaminationType_CheckProperty4Update(objge_ExaminationTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_ExaminationType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_ExaminationType_CheckUniCond4Update(objge_ExaminationTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_ExaminationType_UpdateRecordAsync(objge_ExaminationTypeEN);
if (returnBool == true)
{
ge_ExaminationType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_ExaminationType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_ExaminationTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_ExaminationType_AddNewRecordWithReturnKeyAsync(objge_ExaminationTypeEN: clsge_ExaminationTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_ExaminationType_UpdateRecordAsync(objge_ExaminationTypeEN: clsge_ExaminationTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_ExaminationTypeEN.sfUpdFldSetStr === undefined || objge_ExaminationTypeEN.sfUpdFldSetStr === null || objge_ExaminationTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ExaminationTypeEN.examinationTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_ExaminationType_EditRecordExAsync(objge_ExaminationTypeEN: clsge_ExaminationTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_ExaminationTypeEN.sfUpdFldSetStr === undefined || objge_ExaminationTypeEN.sfUpdFldSetStr === null || objge_ExaminationTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ExaminationTypeEN.examinationTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_ExaminationType_UpdateWithConditionAsync(objge_ExaminationTypeEN: clsge_ExaminationTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_ExaminationTypeEN.sfUpdFldSetStr === undefined || objge_ExaminationTypeEN.sfUpdFldSetStr === null || objge_ExaminationTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_ExaminationTypeEN.examinationTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);
objge_ExaminationTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_ExaminationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param objstrExaminationTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_ExaminationType_IsExistRecordCache(objge_ExaminationTypeCond: clsge_ExaminationTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstCache();
if (arrge_ExaminationTypeObjLstCache == null) return false;
let arrge_ExaminationTypeSel = arrge_ExaminationTypeObjLstCache;
if (objge_ExaminationTypeCond.sfFldComparisonOp == null || objge_ExaminationTypeCond.sfFldComparisonOp == "") return arrge_ExaminationTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ExaminationTypeCond.sfFldComparisonOp);
//console.log("clsge_ExaminationTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ExaminationTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ExaminationTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_ExaminationTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_ExaminationTypeCond), ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param strExaminationTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_ExaminationType_IsExistCache(strExaminationTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstCache();
if (arrge_ExaminationTypeObjLstCache == null) return false;
try
{
const arrge_ExaminationTypeSel = arrge_ExaminationTypeObjLstCache.filter(x => x.examinationTypeId == strExaminationTypeId);
if (arrge_ExaminationTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strExaminationTypeId, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strExaminationTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_ExaminationType_IsExistAsync(strExaminationTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strExaminationTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
 * @param objge_ExaminationTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_ExaminationType_GetRecCountByCondCache(objge_ExaminationTypeCond: clsge_ExaminationTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_ExaminationTypeObjLstCache = await ge_ExaminationType_GetObjLstCache();
if (arrge_ExaminationTypeObjLstCache == null) return 0;
let arrge_ExaminationTypeSel = arrge_ExaminationTypeObjLstCache;
if (objge_ExaminationTypeCond.sfFldComparisonOp == null || objge_ExaminationTypeCond.sfFldComparisonOp == "") return arrge_ExaminationTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_ExaminationTypeCond.sfFldComparisonOp);
//console.log("clsge_ExaminationTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_ExaminationTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ExaminationTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ExaminationTypeSel = arrge_ExaminationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_ExaminationTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_ExaminationTypeCond), ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  async function ge_ExaminationType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_ExaminationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_ExaminationType_ConstructorName, strThisFuncName);
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
export  function ge_ExaminationType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_ExaminationType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsge_ExaminationTypeEN._CurrTabName;
switch (clsge_ExaminationTypeEN.CacheModeId)
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
clsge_ExaminationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_ExaminationType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsge_ExaminationTypeEN._CurrTabName;
switch (clsge_ExaminationTypeEN.CacheModeId)
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
clsge_ExaminationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_ExaminationType_GetLastRefreshTime():string
{
if (clsge_ExaminationTypeEN._RefreshTimeLst.length == 0) return "";
return clsge_ExaminationTypeEN._RefreshTimeLst[clsge_ExaminationTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_ExaminationType_BindDdl_ExaminationTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_ExaminationTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_ExaminationTypeIdInDivCache");
const arrObjLstSel = await ge_ExaminationType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_ExaminationTypeEN.con_ExaminationTypeId, clsge_ExaminationTypeEN.con_TypeDescribe, "检查类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_ExaminationType_GetArrge_ExaminationType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_ExaminationTypeIdInDivCache");
const arrge_ExaminationType = new Array<clsge_ExaminationTypeEN>();
const arrObjLstSel = await ge_ExaminationType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsge_ExaminationTypeEN();
obj0.examinationTypeId = '0';
obj0.typeDescribe = '选检查类型...';
arrge_ExaminationType.push(obj0);
arrObjLstSel.forEach(x => arrge_ExaminationType.push(x));
return arrge_ExaminationType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_ExaminationType_CheckPropertyNew(pobjge_ExaminationTypeEN: clsge_ExaminationTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.examinationTypeId) == false && GetStrLen(pobjge_ExaminationTypeEN.examinationTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[检查类型Id(examinationTypeId)]的长度不能超过4(In 检查类型(ge_ExaminationType))!值:${pobjge_ExaminationTypeEN.examinationTypeId}(clsge_ExaminationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.typeDescribe) == false && GetStrLen(pobjge_ExaminationTypeEN.typeDescribe) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[属性名称(typeDescribe)]的长度不能超过1000(In 检查类型(ge_ExaminationType))!值:${pobjge_ExaminationTypeEN.typeDescribe}(clsge_ExaminationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.updDate) == false && GetStrLen(pobjge_ExaminationTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 检查类型(ge_ExaminationType))!值:${pobjge_ExaminationTypeEN.updDate}(clsge_ExaminationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.updUser) == false && GetStrLen(pobjge_ExaminationTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 检查类型(ge_ExaminationType))!值:${pobjge_ExaminationTypeEN.updUser}(clsge_ExaminationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.memo) == false && GetStrLen(pobjge_ExaminationTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 检查类型(ge_ExaminationType))!值:${pobjge_ExaminationTypeEN.memo}(clsge_ExaminationTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.examinationTypeId) == false && undefined !== pobjge_ExaminationTypeEN.examinationTypeId && tzDataType.isString(pobjge_ExaminationTypeEN.examinationTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[检查类型Id(examinationTypeId)]的值:[${pobjge_ExaminationTypeEN.examinationTypeId}], 非法,应该为字符型(In 检查类型(ge_ExaminationType))!(clsge_ExaminationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.typeDescribe) == false && undefined !== pobjge_ExaminationTypeEN.typeDescribe && tzDataType.isString(pobjge_ExaminationTypeEN.typeDescribe) === false)
{
 throw new Error(`(errid:Watl000414)字段[属性名称(typeDescribe)]的值:[${pobjge_ExaminationTypeEN.typeDescribe}], 非法,应该为字符型(In 检查类型(ge_ExaminationType))!(clsge_ExaminationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.updDate) == false && undefined !== pobjge_ExaminationTypeEN.updDate && tzDataType.isString(pobjge_ExaminationTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_ExaminationTypeEN.updDate}], 非法,应该为字符型(In 检查类型(ge_ExaminationType))!(clsge_ExaminationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.updUser) == false && undefined !== pobjge_ExaminationTypeEN.updUser && tzDataType.isString(pobjge_ExaminationTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_ExaminationTypeEN.updUser}], 非法,应该为字符型(In 检查类型(ge_ExaminationType))!(clsge_ExaminationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.memo) == false && undefined !== pobjge_ExaminationTypeEN.memo && tzDataType.isString(pobjge_ExaminationTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_ExaminationTypeEN.memo}], 非法,应该为字符型(In 检查类型(ge_ExaminationType))!(clsge_ExaminationTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_ExaminationType_CheckProperty4Update(pobjge_ExaminationTypeEN: clsge_ExaminationTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.examinationTypeId) == false && GetStrLen(pobjge_ExaminationTypeEN.examinationTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[检查类型Id(examinationTypeId)]的长度不能超过4(In 检查类型(ge_ExaminationType))!值:${pobjge_ExaminationTypeEN.examinationTypeId}(clsge_ExaminationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.typeDescribe) == false && GetStrLen(pobjge_ExaminationTypeEN.typeDescribe) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[属性名称(typeDescribe)]的长度不能超过1000(In 检查类型(ge_ExaminationType))!值:${pobjge_ExaminationTypeEN.typeDescribe}(clsge_ExaminationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.updDate) == false && GetStrLen(pobjge_ExaminationTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 检查类型(ge_ExaminationType))!值:${pobjge_ExaminationTypeEN.updDate}(clsge_ExaminationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.updUser) == false && GetStrLen(pobjge_ExaminationTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 检查类型(ge_ExaminationType))!值:${pobjge_ExaminationTypeEN.updUser}(clsge_ExaminationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.memo) == false && GetStrLen(pobjge_ExaminationTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 检查类型(ge_ExaminationType))!值:${pobjge_ExaminationTypeEN.memo}(clsge_ExaminationTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.examinationTypeId) == false && undefined !== pobjge_ExaminationTypeEN.examinationTypeId && tzDataType.isString(pobjge_ExaminationTypeEN.examinationTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[检查类型Id(examinationTypeId)]的值:[${pobjge_ExaminationTypeEN.examinationTypeId}], 非法,应该为字符型(In 检查类型(ge_ExaminationType))!(clsge_ExaminationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.typeDescribe) == false && undefined !== pobjge_ExaminationTypeEN.typeDescribe && tzDataType.isString(pobjge_ExaminationTypeEN.typeDescribe) === false)
{
 throw new Error(`(errid:Watl000417)字段[属性名称(typeDescribe)]的值:[${pobjge_ExaminationTypeEN.typeDescribe}], 非法,应该为字符型(In 检查类型(ge_ExaminationType))!(clsge_ExaminationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.updDate) == false && undefined !== pobjge_ExaminationTypeEN.updDate && tzDataType.isString(pobjge_ExaminationTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_ExaminationTypeEN.updDate}], 非法,应该为字符型(In 检查类型(ge_ExaminationType))!(clsge_ExaminationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.updUser) == false && undefined !== pobjge_ExaminationTypeEN.updUser && tzDataType.isString(pobjge_ExaminationTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_ExaminationTypeEN.updUser}], 非法,应该为字符型(In 检查类型(ge_ExaminationType))!(clsge_ExaminationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_ExaminationTypeEN.memo) == false && undefined !== pobjge_ExaminationTypeEN.memo && tzDataType.isString(pobjge_ExaminationTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_ExaminationTypeEN.memo}], 非法,应该为字符型(In 检查类型(ge_ExaminationType))!(clsge_ExaminationTypeBL:CheckProperty4Update)`);
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
export  function ge_ExaminationType_GetJSONStrByObj (pobjge_ExaminationTypeEN: clsge_ExaminationTypeEN): string
{
pobjge_ExaminationTypeEN.sfUpdFldSetStr = pobjge_ExaminationTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_ExaminationTypeEN);
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
export  function ge_ExaminationType_GetObjLstByJSONStr (strJSON: string): Array<clsge_ExaminationTypeEN>
{
let arrge_ExaminationTypeObjLst = new Array<clsge_ExaminationTypeEN>();
if (strJSON === "")
{
return arrge_ExaminationTypeObjLst;
}
try
{
arrge_ExaminationTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_ExaminationTypeObjLst;
}
return arrge_ExaminationTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_ExaminationTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_ExaminationType_GetObjLstByJSONObjLst (arrge_ExaminationTypeObjLstS: Array<clsge_ExaminationTypeEN>): Array<clsge_ExaminationTypeEN>
{
const arrge_ExaminationTypeObjLst = new Array<clsge_ExaminationTypeEN>();
for (const objInFor of arrge_ExaminationTypeObjLstS) {
const obj1 = ge_ExaminationType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_ExaminationTypeObjLst.push(obj1);
}
return arrge_ExaminationTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_ExaminationType_GetObjByJSONStr (strJSON: string): clsge_ExaminationTypeEN
{
let pobjge_ExaminationTypeEN = new clsge_ExaminationTypeEN();
if (strJSON === "")
{
return pobjge_ExaminationTypeEN;
}
try
{
pobjge_ExaminationTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_ExaminationTypeEN;
}
return pobjge_ExaminationTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_ExaminationType_GetCombineCondition(objge_ExaminationTypeCond: clsge_ExaminationTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_ExaminationTypeCond.dicFldComparisonOp, clsge_ExaminationTypeEN.con_ExaminationTypeId) == true)
{
const strComparisonOpExaminationTypeId:string = objge_ExaminationTypeCond.dicFldComparisonOp[clsge_ExaminationTypeEN.con_ExaminationTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationTypeEN.con_ExaminationTypeId, objge_ExaminationTypeCond.examinationTypeId, strComparisonOpExaminationTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationTypeCond.dicFldComparisonOp, clsge_ExaminationTypeEN.con_TypeDescribe) == true)
{
const strComparisonOpTypeDescribe:string = objge_ExaminationTypeCond.dicFldComparisonOp[clsge_ExaminationTypeEN.con_TypeDescribe];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationTypeEN.con_TypeDescribe, objge_ExaminationTypeCond.typeDescribe, strComparisonOpTypeDescribe);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationTypeCond.dicFldComparisonOp, clsge_ExaminationTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_ExaminationTypeCond.dicFldComparisonOp[clsge_ExaminationTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationTypeEN.con_UpdDate, objge_ExaminationTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationTypeCond.dicFldComparisonOp, clsge_ExaminationTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_ExaminationTypeCond.dicFldComparisonOp[clsge_ExaminationTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationTypeEN.con_UpdUser, objge_ExaminationTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_ExaminationTypeCond.dicFldComparisonOp, clsge_ExaminationTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_ExaminationTypeCond.dicFldComparisonOp[clsge_ExaminationTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_ExaminationTypeEN.con_Memo, objge_ExaminationTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_ExaminationType(检查类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTypeDescribe: 属性名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_ExaminationType_GetUniCondStr(objge_ExaminationTypeEN: clsge_ExaminationTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and TypeDescribe = '{0}'", objge_ExaminationTypeEN.typeDescribe);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_ExaminationType(检查类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTypeDescribe: 属性名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_ExaminationType_GetUniCondStr4Update(objge_ExaminationTypeEN: clsge_ExaminationTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ExaminationTypeId <> '{0}'", objge_ExaminationTypeEN.examinationTypeId);
 strWhereCond +=  Format(" and TypeDescribe = '{0}'", objge_ExaminationTypeEN.typeDescribe);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_ExaminationTypeENS:源对象
 * @param objge_ExaminationTypeENT:目标对象
*/
export  function ge_ExaminationType_CopyObjTo(objge_ExaminationTypeENS: clsge_ExaminationTypeEN , objge_ExaminationTypeENT: clsge_ExaminationTypeEN ): void 
{
objge_ExaminationTypeENT.examinationTypeId = objge_ExaminationTypeENS.examinationTypeId; //检查类型Id
objge_ExaminationTypeENT.typeDescribe = objge_ExaminationTypeENS.typeDescribe; //属性名称
objge_ExaminationTypeENT.updDate = objge_ExaminationTypeENS.updDate; //修改日期
objge_ExaminationTypeENT.updUser = objge_ExaminationTypeENS.updUser; //修改人
objge_ExaminationTypeENT.memo = objge_ExaminationTypeENS.memo; //备注
objge_ExaminationTypeENT.sfUpdFldSetStr = objge_ExaminationTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_ExaminationTypeENS:源对象
 * @param objge_ExaminationTypeENT:目标对象
*/
export  function ge_ExaminationType_GetObjFromJsonObj(objge_ExaminationTypeENS: clsge_ExaminationTypeEN): clsge_ExaminationTypeEN 
{
 const objge_ExaminationTypeENT: clsge_ExaminationTypeEN = new clsge_ExaminationTypeEN();
ObjectAssign(objge_ExaminationTypeENT, objge_ExaminationTypeENS);
 return objge_ExaminationTypeENT;
}