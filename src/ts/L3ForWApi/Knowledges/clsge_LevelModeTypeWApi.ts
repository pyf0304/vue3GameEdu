
 /**
 * 类名:clsge_LevelModeTypeWApi
 * 表名:ge_LevelModeType(01120907)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:01
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
 * 关卡模式类型(ge_LevelModeType)
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
import { clsge_LevelModeTypeEN } from "@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_LevelModeType_Controller = "ge_LevelModeTypeApi";
 export const ge_LevelModeType_ConstructorName = "ge_LevelModeType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strLevelModeTypeId:关键字
 * @returns 对象
 **/
export  async function ge_LevelModeType_GetObjByLevelModeTypeIdAsync(strLevelModeTypeId: string): Promise<clsge_LevelModeTypeEN|null>  
{
const strThisFuncName = "GetObjByLevelModeTypeIdAsync";

if (IsNullOrEmpty(strLevelModeTypeId) == true)
{
  const strMsg = Format("参数:[strLevelModeTypeId]不能为空!(In clsge_LevelModeTypeWApi.GetObjByLevelModeTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strLevelModeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strLevelModeTypeId]的长度:[{0}]不正确!(clsge_LevelModeTypeWApi.GetObjByLevelModeTypeIdAsync)", strLevelModeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByLevelModeTypeId";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strLevelModeTypeId,
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
const objge_LevelModeType = ge_LevelModeType_GetObjFromJsonObj(returnObj);
return objge_LevelModeType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param strLevelModeTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_LevelModeType_GetObjByLevelModeTypeIdlocalStorage(strLevelModeTypeId: string) {
const strThisFuncName = "GetObjByLevelModeTypeIdlocalStorage";

if (IsNullOrEmpty(strLevelModeTypeId) == true)
{
  const strMsg = Format("参数:[strLevelModeTypeId]不能为空!(In clsge_LevelModeTypeWApi.GetObjByLevelModeTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strLevelModeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strLevelModeTypeId]的长度:[{0}]不正确!(clsge_LevelModeTypeWApi.GetObjByLevelModeTypeIdlocalStorage)", strLevelModeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_LevelModeTypeEN._CurrTabName, strLevelModeTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_LevelModeTypeCache: clsge_LevelModeTypeEN = JSON.parse(strTempObj);
return objge_LevelModeTypeCache;
}
try
{
const objge_LevelModeType = await ge_LevelModeType_GetObjByLevelModeTypeIdAsync(strLevelModeTypeId);
if (objge_LevelModeType != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_LevelModeType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_LevelModeType;
}
return objge_LevelModeType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strLevelModeTypeId, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strLevelModeTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_LevelModeType_GetObjByLevelModeTypeIdCache(strLevelModeTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByLevelModeTypeIdCache";

if (IsNullOrEmpty(strLevelModeTypeId) == true)
{
  const strMsg = Format("参数:[strLevelModeTypeId]不能为空!(In clsge_LevelModeTypeWApi.GetObjByLevelModeTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strLevelModeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strLevelModeTypeId]的长度:[{0}]不正确!(clsge_LevelModeTypeWApi.GetObjByLevelModeTypeIdCache)", strLevelModeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstCache();
try
{
const arrge_LevelModeTypeSel = arrge_LevelModeTypeObjLstCache.filter(x => 
 x.levelModeTypeId == strLevelModeTypeId );
let objge_LevelModeType: clsge_LevelModeTypeEN;
if (arrge_LevelModeTypeSel.length > 0)
{
objge_LevelModeType = arrge_LevelModeTypeSel[0];
return objge_LevelModeType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_LevelModeTypeConst = await ge_LevelModeType_GetObjByLevelModeTypeIdAsync(strLevelModeTypeId);
if (objge_LevelModeTypeConst != null)
{
ge_LevelModeType_ReFreshThisCache();
return objge_LevelModeTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strLevelModeTypeId, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_LevelModeType:所给的对象
 * @returns 对象
*/
export  async function ge_LevelModeType_UpdateObjInLstCache(objge_LevelModeType: clsge_LevelModeTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstCache();
const obj = arrge_LevelModeTypeObjLstCache.find(x => x.levelModeTypeName == objge_LevelModeType.levelModeTypeName);
if (obj != null)
{
objge_LevelModeType.levelModeTypeId = obj.levelModeTypeId;
ObjectAssign( obj, objge_LevelModeType);
}
else
{
arrge_LevelModeTypeObjLstCache.push(objge_LevelModeType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  function ge_LevelModeType_SortFunDefa(a:clsge_LevelModeTypeEN , b:clsge_LevelModeTypeEN): number 
{
return a.levelModeTypeId.localeCompare(b.levelModeTypeId);
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
export  function ge_LevelModeType_SortFunDefa2Fld(a:clsge_LevelModeTypeEN , b:clsge_LevelModeTypeEN): number 
{
if (a.levelModeTypeName == b.levelModeTypeName) return a.levelModeTypeENName.localeCompare(b.levelModeTypeENName);
else return a.levelModeTypeName.localeCompare(b.levelModeTypeName);
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
export  function ge_LevelModeType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_LevelModeTypeEN.con_LevelModeTypeId:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
return a.levelModeTypeId.localeCompare(b.levelModeTypeId);
}
case clsge_LevelModeTypeEN.con_LevelModeTypeName:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
if (a.levelModeTypeName == null) return -1;
if (b.levelModeTypeName == null) return 1;
return a.levelModeTypeName.localeCompare(b.levelModeTypeName);
}
case clsge_LevelModeTypeEN.con_LevelModeTypeENName:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
if (a.levelModeTypeENName == null) return -1;
if (b.levelModeTypeENName == null) return 1;
return a.levelModeTypeENName.localeCompare(b.levelModeTypeENName);
}
case clsge_LevelModeTypeEN.con_UpdUser:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_LevelModeTypeEN.con_UpdDate:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_LevelModeTypeEN.con_Memo:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_LevelModeType]中不存在!(in ${ ge_LevelModeType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_LevelModeTypeEN.con_LevelModeTypeId:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
return b.levelModeTypeId.localeCompare(a.levelModeTypeId);
}
case clsge_LevelModeTypeEN.con_LevelModeTypeName:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
if (b.levelModeTypeName == null) return -1;
if (a.levelModeTypeName == null) return 1;
return b.levelModeTypeName.localeCompare(a.levelModeTypeName);
}
case clsge_LevelModeTypeEN.con_LevelModeTypeENName:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
if (b.levelModeTypeENName == null) return -1;
if (a.levelModeTypeENName == null) return 1;
return b.levelModeTypeENName.localeCompare(a.levelModeTypeENName);
}
case clsge_LevelModeTypeEN.con_UpdUser:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_LevelModeTypeEN.con_UpdDate:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_LevelModeTypeEN.con_Memo:
return (a: clsge_LevelModeTypeEN, b: clsge_LevelModeTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_LevelModeType]中不存在!(in ${ ge_LevelModeType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strLevelModeTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_LevelModeType_GetNameByLevelModeTypeIdCache(strLevelModeTypeId: string) {

if (IsNullOrEmpty(strLevelModeTypeId) == true)
{
  const strMsg = Format("参数:[strLevelModeTypeId]不能为空!(In clsge_LevelModeTypeWApi.GetNameByLevelModeTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strLevelModeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strLevelModeTypeId]的长度:[{0}]不正确!(clsge_LevelModeTypeWApi.GetNameByLevelModeTypeIdCache)", strLevelModeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstCache();
if (arrge_LevelModeTypeObjLstCache == null) return "";
try
{
const arrge_LevelModeTypeSel = arrge_LevelModeTypeObjLstCache.filter(x => 
 x.levelModeTypeId == strLevelModeTypeId );
let objge_LevelModeType: clsge_LevelModeTypeEN;
if (arrge_LevelModeTypeSel.length > 0)
{
objge_LevelModeType = arrge_LevelModeTypeSel[0];
return objge_LevelModeType.levelModeTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strLevelModeTypeId);
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
export  async function ge_LevelModeType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_LevelModeTypeEN.con_LevelModeTypeId:
return (obj: clsge_LevelModeTypeEN) => {
return obj.levelModeTypeId === value;
}
case clsge_LevelModeTypeEN.con_LevelModeTypeName:
return (obj: clsge_LevelModeTypeEN) => {
return obj.levelModeTypeName === value;
}
case clsge_LevelModeTypeEN.con_LevelModeTypeENName:
return (obj: clsge_LevelModeTypeEN) => {
return obj.levelModeTypeENName === value;
}
case clsge_LevelModeTypeEN.con_UpdUser:
return (obj: clsge_LevelModeTypeEN) => {
return obj.updUser === value;
}
case clsge_LevelModeTypeEN.con_UpdDate:
return (obj: clsge_LevelModeTypeEN) => {
return obj.updDate === value;
}
case clsge_LevelModeTypeEN.con_Memo:
return (obj: clsge_LevelModeTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_LevelModeType]中不存在!(in ${ ge_LevelModeType_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_LevelModeType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsge_LevelModeTypeEN.con_LevelModeTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_LevelModeTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_LevelModeTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strLevelModeTypeId = strInValue;
if (IsNullOrEmpty(strLevelModeTypeId) == true)
{
return "";
}
const objge_LevelModeType = await ge_LevelModeType_GetObjByLevelModeTypeIdCache(strLevelModeTypeId );
if (objge_LevelModeType == null) return "";
if (objge_LevelModeType.GetFldValue(strOutFldName) == null) return "";
return objge_LevelModeType.GetFldValue(strOutFldName).toString();
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
export  async function ge_LevelModeType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsge_LevelModeTypeEN.con_LevelModeTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_LevelModeType = await ge_LevelModeType_GetObjLstCache();
if (arrge_LevelModeType == null) return [];
let arrge_LevelModeTypeSel = arrge_LevelModeType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_LevelModeTypeSel.length == 0) return [];
return arrge_LevelModeTypeSel.map(x=>x.levelModeTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_LevelModeType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_GetFirstObjAsync(strWhereCond: string): Promise<clsge_LevelModeTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const objge_LevelModeType = ge_LevelModeType_GetObjFromJsonObj(returnObj);
return objge_LevelModeType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_LevelModeTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_LevelModeTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_LevelModeTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_LevelModeTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_LevelModeTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_LevelModeTypeExObjLstCache: Array<clsge_LevelModeTypeEN> = CacheHelper.Get(strKey);
const arrge_LevelModeTypeObjLstT = ge_LevelModeType_GetObjLstByJSONObjLst(arrge_LevelModeTypeExObjLstCache);
return arrge_LevelModeTypeObjLstT;
}
try
{
const arrge_LevelModeTypeExObjLst = await ge_LevelModeType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_LevelModeTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_LevelModeTypeExObjLst.length);
console.log(strInfo);
return arrge_LevelModeTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_LevelModeType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_LevelModeTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_LevelModeTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_LevelModeTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_LevelModeTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_LevelModeTypeEN.CacheAddiCondition);
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
const arrge_LevelModeTypeExObjLstCache: Array<clsge_LevelModeTypeEN> = JSON.parse(strTempObjLst);
const arrge_LevelModeTypeObjLstT = ge_LevelModeType_GetObjLstByJSONObjLst(arrge_LevelModeTypeExObjLstCache);
return arrge_LevelModeTypeObjLstT;
}
try
{
const arrge_LevelModeTypeExObjLst = await ge_LevelModeType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_LevelModeTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_LevelModeTypeExObjLst.length);
console.log(strInfo);
return arrge_LevelModeTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_LevelModeType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_LevelModeTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_LevelModeTypeObjLstCache: Array<clsge_LevelModeTypeEN> = JSON.parse(strTempObjLst);
return arrge_LevelModeTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_LevelModeType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_LevelModeTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_LevelModeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsge_LevelModeTypeEN._CurrTabName;
if (IsNullOrEmpty(clsge_LevelModeTypeEN.WhereFormat) == false)
{
strWhereCond = clsge_LevelModeTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsge_LevelModeTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_LevelModeTypeEN.CacheAddiCondition);
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
const arrge_LevelModeTypeExObjLstCache: Array<clsge_LevelModeTypeEN> = JSON.parse(strTempObjLst);
const arrge_LevelModeTypeObjLstT = ge_LevelModeType_GetObjLstByJSONObjLst(arrge_LevelModeTypeExObjLstCache);
return arrge_LevelModeTypeObjLstT;
}
try
{
const arrge_LevelModeTypeExObjLst = await ge_LevelModeType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_LevelModeTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_LevelModeTypeExObjLst.length);
console.log(strInfo);
return arrge_LevelModeTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_LevelModeType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsge_LevelModeTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_LevelModeTypeObjLstCache: Array<clsge_LevelModeTypeEN> = JSON.parse(strTempObjLst);
return arrge_LevelModeTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_LevelModeType_GetObjLstCache(): Promise<Array<clsge_LevelModeTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrge_LevelModeTypeObjLstCache;
switch (clsge_LevelModeTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstClientCache();
break;
default:
arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstClientCache();
break;
}
return arrge_LevelModeTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_LevelModeType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_LevelModeTypeObjLstCache;
switch (clsge_LevelModeTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrge_LevelModeTypeObjLstCache = null;
break;
default:
arrge_LevelModeTypeObjLstCache = null;
break;
}
return arrge_LevelModeTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrLevelModeTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_LevelModeType_GetSubObjLstCache(objge_LevelModeTypeCond: clsge_LevelModeTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstCache();
let arrge_LevelModeTypeSel = arrge_LevelModeTypeObjLstCache;
if (objge_LevelModeTypeCond.sfFldComparisonOp == null || objge_LevelModeTypeCond.sfFldComparisonOp == "") return arrge_LevelModeTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_LevelModeTypeCond.sfFldComparisonOp);
//console.log("clsge_LevelModeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_LevelModeTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_LevelModeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_LevelModeTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_LevelModeTypeCond), ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_LevelModeTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrLevelModeTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_LevelModeType_GetObjLstByLevelModeTypeIdLstAsync(arrLevelModeTypeId: Array<string>): Promise<Array<clsge_LevelModeTypeEN>>  
{
const strThisFuncName = "GetObjLstByLevelModeTypeIdLstAsync";
const strAction = "GetObjLstByLevelModeTypeIdLst";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrLevelModeTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_LevelModeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param arrstrLevelModeTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_LevelModeType_GetObjLstByLevelModeTypeIdLstCache(arrLevelModeTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByLevelModeTypeIdLstCache";
try
{
const arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstCache();
const arrge_LevelModeTypeSel = arrge_LevelModeTypeObjLstCache.filter(x => arrLevelModeTypeIdLst.indexOf(x.levelModeTypeId)>-1);
return arrge_LevelModeTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrLevelModeTypeIdLst.join(","), ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_LevelModeTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_LevelModeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_LevelModeTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_LevelModeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_LevelModeTypeEN>();
const arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstCache();
if (arrge_LevelModeTypeObjLstCache.length == 0) return arrge_LevelModeTypeObjLstCache;
let arrge_LevelModeTypeSel = arrge_LevelModeTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_LevelModeTypeCond = new clsge_LevelModeTypeEN();
ObjectAssign(objge_LevelModeTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_LevelModeTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_LevelModeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_LevelModeTypeSel.length == 0) return arrge_LevelModeTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.sort(ge_LevelModeType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.sort(objPagerPara.sortFun);
}
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.slice(intStart, intEnd);     
return arrge_LevelModeTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_LevelModeTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_LevelModeType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_LevelModeTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_LevelModeTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_LevelModeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param strLevelModeTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_LevelModeType_DelRecordAsync(strLevelModeTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strLevelModeTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param arrLevelModeTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_LevelModeType_Delge_LevelModeTypesAsync(arrLevelModeTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_LevelModeTypesAsync";
const strAction = "Delge_LevelModeTypes";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrLevelModeTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_Delge_LevelModeTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_LevelModeTypesByCondAsync";
const strAction = "Delge_LevelModeTypesByCond";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param objge_LevelModeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_LevelModeType_AddNewRecordAsync(objge_LevelModeTypeEN: clsge_LevelModeTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_LevelModeTypeEN);
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_LevelModeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param objge_LevelModeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_LevelModeType_AddNewRecordWithMaxIdAsync(objge_LevelModeTypeEN: clsge_LevelModeTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_LevelModeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_AddNewObjSave(objge_LevelModeTypeEN: clsge_LevelModeTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_LevelModeType_CheckPropertyNew(objge_LevelModeTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_LevelModeType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_LevelModeType_CheckUniCond4Add(objge_LevelModeTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_LevelModeType_AddNewRecordWithMaxIdAsync(objge_LevelModeTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
ge_LevelModeType_ReFreshCache();
}
else
{
const strInfo = `添加[关卡模式类型(ge_LevelModeType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_LevelModeType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_LevelModeType_CheckUniCond4Add(objge_LevelModeTypeEN: clsge_LevelModeTypeEN): Promise<boolean>{
const strUniquenessCondition = ge_LevelModeType_GetUniCondStr(objge_LevelModeTypeEN);
const bolIsExistCondition = await ge_LevelModeType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_LevelModeType_CheckUniCond4Update(objge_LevelModeTypeEN: clsge_LevelModeTypeEN): Promise<boolean>{
const strUniquenessCondition = ge_LevelModeType_GetUniCondStr4Update(objge_LevelModeTypeEN);
const bolIsExistCondition = await ge_LevelModeType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_LevelModeType_UpdateObjSave(objge_LevelModeTypeEN: clsge_LevelModeTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_LevelModeTypeEN.sfUpdFldSetStr = objge_LevelModeTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_LevelModeTypeEN.levelModeTypeId == "" || objge_LevelModeTypeEN.levelModeTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_LevelModeType_CheckProperty4Update(objge_LevelModeTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_LevelModeType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_LevelModeType_CheckUniCond4Update(objge_LevelModeTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_LevelModeType_UpdateRecordAsync(objge_LevelModeTypeEN);
if (returnBool == true)
{
ge_LevelModeType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_LevelModeType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_LevelModeTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_LevelModeType_AddNewRecordWithReturnKeyAsync(objge_LevelModeTypeEN: clsge_LevelModeTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_LevelModeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param objge_LevelModeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_LevelModeType_UpdateRecordAsync(objge_LevelModeTypeEN: clsge_LevelModeTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_LevelModeTypeEN.sfUpdFldSetStr === undefined || objge_LevelModeTypeEN.sfUpdFldSetStr === null || objge_LevelModeTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_LevelModeTypeEN.levelModeTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_LevelModeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param objge_LevelModeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_LevelModeType_EditRecordExAsync(objge_LevelModeTypeEN: clsge_LevelModeTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_LevelModeTypeEN.sfUpdFldSetStr === undefined || objge_LevelModeTypeEN.sfUpdFldSetStr === null || objge_LevelModeTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_LevelModeTypeEN.levelModeTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_LevelModeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param objge_LevelModeTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_LevelModeType_UpdateWithConditionAsync(objge_LevelModeTypeEN: clsge_LevelModeTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_LevelModeTypeEN.sfUpdFldSetStr === undefined || objge_LevelModeTypeEN.sfUpdFldSetStr === null || objge_LevelModeTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_LevelModeTypeEN.levelModeTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);
objge_LevelModeTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_LevelModeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param objstrLevelModeTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_LevelModeType_IsExistRecordCache(objge_LevelModeTypeCond: clsge_LevelModeTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstCache();
if (arrge_LevelModeTypeObjLstCache == null) return false;
let arrge_LevelModeTypeSel = arrge_LevelModeTypeObjLstCache;
if (objge_LevelModeTypeCond.sfFldComparisonOp == null || objge_LevelModeTypeCond.sfFldComparisonOp == "") return arrge_LevelModeTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_LevelModeTypeCond.sfFldComparisonOp);
//console.log("clsge_LevelModeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_LevelModeTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_LevelModeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_LevelModeTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_LevelModeTypeCond), ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param strLevelModeTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_LevelModeType_IsExistCache(strLevelModeTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstCache();
if (arrge_LevelModeTypeObjLstCache == null) return false;
try
{
const arrge_LevelModeTypeSel = arrge_LevelModeTypeObjLstCache.filter(x => x.levelModeTypeId == strLevelModeTypeId);
if (arrge_LevelModeTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strLevelModeTypeId, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strLevelModeTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_LevelModeType_IsExistAsync(strLevelModeTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strLevelModeTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
 * @param objge_LevelModeTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_LevelModeType_GetRecCountByCondCache(objge_LevelModeTypeCond: clsge_LevelModeTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_LevelModeTypeObjLstCache = await ge_LevelModeType_GetObjLstCache();
if (arrge_LevelModeTypeObjLstCache == null) return 0;
let arrge_LevelModeTypeSel = arrge_LevelModeTypeObjLstCache;
if (objge_LevelModeTypeCond.sfFldComparisonOp == null || objge_LevelModeTypeCond.sfFldComparisonOp == "") return arrge_LevelModeTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objge_LevelModeTypeCond.sfFldComparisonOp);
//console.log("clsge_LevelModeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objge_LevelModeTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_LevelModeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_LevelModeTypeSel = arrge_LevelModeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_LevelModeTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_LevelModeTypeCond), ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  async function ge_LevelModeType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_LevelModeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_LevelModeType_ConstructorName, strThisFuncName);
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
export  function ge_LevelModeType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_LevelModeType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsge_LevelModeTypeEN._CurrTabName;
switch (clsge_LevelModeTypeEN.CacheModeId)
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
clsge_LevelModeTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_LevelModeType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsge_LevelModeTypeEN._CurrTabName;
switch (clsge_LevelModeTypeEN.CacheModeId)
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
clsge_LevelModeTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_LevelModeType_GetLastRefreshTime():string
{
if (clsge_LevelModeTypeEN._RefreshTimeLst.length == 0) return "";
return clsge_LevelModeTypeEN._RefreshTimeLst[clsge_LevelModeTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_LevelModeType_BindDdl_LevelModeTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_LevelModeTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_LevelModeTypeIdInDivCache");
const arrObjLstSel = await ge_LevelModeType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_LevelModeTypeEN.con_LevelModeTypeId, clsge_LevelModeTypeEN.con_LevelModeTypeName, "选关卡模式...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_LevelModeType_GetArrge_LevelModeType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_LevelModeTypeIdInDivCache");
const arrge_LevelModeType = new Array<clsge_LevelModeTypeEN>();
const arrObjLstSel = await ge_LevelModeType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsge_LevelModeTypeEN();
obj0.levelModeTypeId = '0';
obj0.levelModeTypeName = '选关卡模式...';
arrge_LevelModeType.push(obj0);
arrObjLstSel.forEach(x => arrge_LevelModeType.push(x));
return arrge_LevelModeType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_LevelModeType_CheckPropertyNew(pobjge_LevelModeTypeEN: clsge_LevelModeTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeId) == false && GetStrLen(pobjge_LevelModeTypeEN.levelModeTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[模式Id(levelModeTypeId)]的长度不能超过2(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.levelModeTypeId}(clsge_LevelModeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeName) == false && GetStrLen(pobjge_LevelModeTypeEN.levelModeTypeName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[模式名(levelModeTypeName)]的长度不能超过100(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.levelModeTypeName}(clsge_LevelModeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeENName) == false && GetStrLen(pobjge_LevelModeTypeEN.levelModeTypeENName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[模式英文名(levelModeTypeENName)]的长度不能超过100(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.levelModeTypeENName}(clsge_LevelModeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.updUser) == false && GetStrLen(pobjge_LevelModeTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.updUser}(clsge_LevelModeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.updDate) == false && GetStrLen(pobjge_LevelModeTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.updDate}(clsge_LevelModeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.memo) == false && GetStrLen(pobjge_LevelModeTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.memo}(clsge_LevelModeTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeId) == false && undefined !== pobjge_LevelModeTypeEN.levelModeTypeId && tzDataType.isString(pobjge_LevelModeTypeEN.levelModeTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[模式Id(levelModeTypeId)]的值:[${pobjge_LevelModeTypeEN.levelModeTypeId}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeName) == false && undefined !== pobjge_LevelModeTypeEN.levelModeTypeName && tzDataType.isString(pobjge_LevelModeTypeEN.levelModeTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[模式名(levelModeTypeName)]的值:[${pobjge_LevelModeTypeEN.levelModeTypeName}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeENName) == false && undefined !== pobjge_LevelModeTypeEN.levelModeTypeENName && tzDataType.isString(pobjge_LevelModeTypeEN.levelModeTypeENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[模式英文名(levelModeTypeENName)]的值:[${pobjge_LevelModeTypeEN.levelModeTypeENName}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.updUser) == false && undefined !== pobjge_LevelModeTypeEN.updUser && tzDataType.isString(pobjge_LevelModeTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_LevelModeTypeEN.updUser}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.updDate) == false && undefined !== pobjge_LevelModeTypeEN.updDate && tzDataType.isString(pobjge_LevelModeTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_LevelModeTypeEN.updDate}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.memo) == false && undefined !== pobjge_LevelModeTypeEN.memo && tzDataType.isString(pobjge_LevelModeTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_LevelModeTypeEN.memo}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_LevelModeType_CheckProperty4Update(pobjge_LevelModeTypeEN: clsge_LevelModeTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeId) == false && GetStrLen(pobjge_LevelModeTypeEN.levelModeTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[模式Id(levelModeTypeId)]的长度不能超过2(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.levelModeTypeId}(clsge_LevelModeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeName) == false && GetStrLen(pobjge_LevelModeTypeEN.levelModeTypeName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[模式名(levelModeTypeName)]的长度不能超过100(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.levelModeTypeName}(clsge_LevelModeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeENName) == false && GetStrLen(pobjge_LevelModeTypeEN.levelModeTypeENName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[模式英文名(levelModeTypeENName)]的长度不能超过100(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.levelModeTypeENName}(clsge_LevelModeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.updUser) == false && GetStrLen(pobjge_LevelModeTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.updUser}(clsge_LevelModeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.updDate) == false && GetStrLen(pobjge_LevelModeTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.updDate}(clsge_LevelModeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.memo) == false && GetStrLen(pobjge_LevelModeTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 关卡模式类型(ge_LevelModeType))!值:${pobjge_LevelModeTypeEN.memo}(clsge_LevelModeTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeId) == false && undefined !== pobjge_LevelModeTypeEN.levelModeTypeId && tzDataType.isString(pobjge_LevelModeTypeEN.levelModeTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[模式Id(levelModeTypeId)]的值:[${pobjge_LevelModeTypeEN.levelModeTypeId}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeName) == false && undefined !== pobjge_LevelModeTypeEN.levelModeTypeName && tzDataType.isString(pobjge_LevelModeTypeEN.levelModeTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[模式名(levelModeTypeName)]的值:[${pobjge_LevelModeTypeEN.levelModeTypeName}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.levelModeTypeENName) == false && undefined !== pobjge_LevelModeTypeEN.levelModeTypeENName && tzDataType.isString(pobjge_LevelModeTypeEN.levelModeTypeENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[模式英文名(levelModeTypeENName)]的值:[${pobjge_LevelModeTypeEN.levelModeTypeENName}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.updUser) == false && undefined !== pobjge_LevelModeTypeEN.updUser && tzDataType.isString(pobjge_LevelModeTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_LevelModeTypeEN.updUser}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.updDate) == false && undefined !== pobjge_LevelModeTypeEN.updDate && tzDataType.isString(pobjge_LevelModeTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_LevelModeTypeEN.updDate}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_LevelModeTypeEN.memo) == false && undefined !== pobjge_LevelModeTypeEN.memo && tzDataType.isString(pobjge_LevelModeTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_LevelModeTypeEN.memo}], 非法,应该为字符型(In 关卡模式类型(ge_LevelModeType))!(clsge_LevelModeTypeBL:CheckProperty4Update)`);
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
export  function ge_LevelModeType_GetJSONStrByObj (pobjge_LevelModeTypeEN: clsge_LevelModeTypeEN): string
{
pobjge_LevelModeTypeEN.sfUpdFldSetStr = pobjge_LevelModeTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_LevelModeTypeEN);
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
export  function ge_LevelModeType_GetObjLstByJSONStr (strJSON: string): Array<clsge_LevelModeTypeEN>
{
let arrge_LevelModeTypeObjLst = new Array<clsge_LevelModeTypeEN>();
if (strJSON === "")
{
return arrge_LevelModeTypeObjLst;
}
try
{
arrge_LevelModeTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_LevelModeTypeObjLst;
}
return arrge_LevelModeTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_LevelModeTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_LevelModeType_GetObjLstByJSONObjLst (arrge_LevelModeTypeObjLstS: Array<clsge_LevelModeTypeEN>): Array<clsge_LevelModeTypeEN>
{
const arrge_LevelModeTypeObjLst = new Array<clsge_LevelModeTypeEN>();
for (const objInFor of arrge_LevelModeTypeObjLstS) {
const obj1 = ge_LevelModeType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_LevelModeTypeObjLst.push(obj1);
}
return arrge_LevelModeTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_LevelModeType_GetObjByJSONStr (strJSON: string): clsge_LevelModeTypeEN
{
let pobjge_LevelModeTypeEN = new clsge_LevelModeTypeEN();
if (strJSON === "")
{
return pobjge_LevelModeTypeEN;
}
try
{
pobjge_LevelModeTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_LevelModeTypeEN;
}
return pobjge_LevelModeTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_LevelModeType_GetCombineCondition(objge_LevelModeTypeCond: clsge_LevelModeTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_LevelModeTypeCond.dicFldComparisonOp, clsge_LevelModeTypeEN.con_LevelModeTypeId) == true)
{
const strComparisonOpLevelModeTypeId:string = objge_LevelModeTypeCond.dicFldComparisonOp[clsge_LevelModeTypeEN.con_LevelModeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_LevelModeTypeEN.con_LevelModeTypeId, objge_LevelModeTypeCond.levelModeTypeId, strComparisonOpLevelModeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_LevelModeTypeCond.dicFldComparisonOp, clsge_LevelModeTypeEN.con_LevelModeTypeName) == true)
{
const strComparisonOpLevelModeTypeName:string = objge_LevelModeTypeCond.dicFldComparisonOp[clsge_LevelModeTypeEN.con_LevelModeTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_LevelModeTypeEN.con_LevelModeTypeName, objge_LevelModeTypeCond.levelModeTypeName, strComparisonOpLevelModeTypeName);
}
if (Object.prototype.hasOwnProperty.call(objge_LevelModeTypeCond.dicFldComparisonOp, clsge_LevelModeTypeEN.con_LevelModeTypeENName) == true)
{
const strComparisonOpLevelModeTypeENName:string = objge_LevelModeTypeCond.dicFldComparisonOp[clsge_LevelModeTypeEN.con_LevelModeTypeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_LevelModeTypeEN.con_LevelModeTypeENName, objge_LevelModeTypeCond.levelModeTypeENName, strComparisonOpLevelModeTypeENName);
}
if (Object.prototype.hasOwnProperty.call(objge_LevelModeTypeCond.dicFldComparisonOp, clsge_LevelModeTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_LevelModeTypeCond.dicFldComparisonOp[clsge_LevelModeTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_LevelModeTypeEN.con_UpdUser, objge_LevelModeTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_LevelModeTypeCond.dicFldComparisonOp, clsge_LevelModeTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_LevelModeTypeCond.dicFldComparisonOp[clsge_LevelModeTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_LevelModeTypeEN.con_UpdDate, objge_LevelModeTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_LevelModeTypeCond.dicFldComparisonOp, clsge_LevelModeTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_LevelModeTypeCond.dicFldComparisonOp[clsge_LevelModeTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_LevelModeTypeEN.con_Memo, objge_LevelModeTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_LevelModeType(关卡模式类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strLevelModeTypeName: 模式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_LevelModeType_GetUniCondStr(objge_LevelModeTypeEN: clsge_LevelModeTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and LevelModeTypeName = '{0}'", objge_LevelModeTypeEN.levelModeTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_LevelModeType(关卡模式类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strLevelModeTypeName: 模式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_LevelModeType_GetUniCondStr4Update(objge_LevelModeTypeEN: clsge_LevelModeTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and LevelModeTypeId <> '{0}'", objge_LevelModeTypeEN.levelModeTypeId);
 strWhereCond +=  Format(" and LevelModeTypeName = '{0}'", objge_LevelModeTypeEN.levelModeTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_LevelModeTypeENS:源对象
 * @param objge_LevelModeTypeENT:目标对象
*/
export  function ge_LevelModeType_CopyObjTo(objge_LevelModeTypeENS: clsge_LevelModeTypeEN , objge_LevelModeTypeENT: clsge_LevelModeTypeEN ): void 
{
objge_LevelModeTypeENT.levelModeTypeId = objge_LevelModeTypeENS.levelModeTypeId; //模式Id
objge_LevelModeTypeENT.levelModeTypeName = objge_LevelModeTypeENS.levelModeTypeName; //模式名
objge_LevelModeTypeENT.levelModeTypeENName = objge_LevelModeTypeENS.levelModeTypeENName; //模式英文名
objge_LevelModeTypeENT.updUser = objge_LevelModeTypeENS.updUser; //修改人
objge_LevelModeTypeENT.updDate = objge_LevelModeTypeENS.updDate; //修改日期
objge_LevelModeTypeENT.memo = objge_LevelModeTypeENS.memo; //备注
objge_LevelModeTypeENT.sfUpdFldSetStr = objge_LevelModeTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_LevelModeTypeENS:源对象
 * @param objge_LevelModeTypeENT:目标对象
*/
export  function ge_LevelModeType_GetObjFromJsonObj(objge_LevelModeTypeENS: clsge_LevelModeTypeEN): clsge_LevelModeTypeEN 
{
 const objge_LevelModeTypeENT: clsge_LevelModeTypeEN = new clsge_LevelModeTypeEN();
ObjectAssign(objge_LevelModeTypeENT, objge_LevelModeTypeENS);
 return objge_LevelModeTypeENT;
}