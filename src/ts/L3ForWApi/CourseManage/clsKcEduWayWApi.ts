
 /**
 * 类名:clsKcEduWayWApi
 * 表名:KcEduWay(01120347)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:32
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程管理(CourseManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学方式(KcEduWay)
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
import { clsKcEduWayEN } from "@/ts/L0Entity/CourseManage/clsKcEduWayEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const kcEduWay_Controller = "KcEduWayApi";
 export const kcEduWay_ConstructorName = "kcEduWay";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdEduWay:关键字
 * @returns 对象
 **/
export  async function KcEduWay_GetObjByIdEduWayAsync(strIdEduWay: string): Promise<clsKcEduWayEN|null>  
{
const strThisFuncName = "GetObjByIdEduWayAsync";

if (IsNullOrEmpty(strIdEduWay) == true)
{
  const strMsg = Format("参数:[strIdEduWay]不能为空!(In clsKcEduWayWApi.GetObjByIdEduWayAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdEduWay.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdEduWay]的长度:[{0}]不正确!(clsKcEduWayWApi.GetObjByIdEduWayAsync)", strIdEduWay.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdEduWay";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdEduWay,
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
const objKcEduWay = KcEduWay_GetObjFromJsonObj(returnObj);
return objKcEduWay;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param strIdEduWay:所给的关键字
 * @returns 对象
*/
export  async function KcEduWay_GetObjByIdEduWaylocalStorage(strIdEduWay: string) {
const strThisFuncName = "GetObjByIdEduWaylocalStorage";

if (IsNullOrEmpty(strIdEduWay) == true)
{
  const strMsg = Format("参数:[strIdEduWay]不能为空!(In clsKcEduWayWApi.GetObjByIdEduWaylocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdEduWay.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdEduWay]的长度:[{0}]不正确!(clsKcEduWayWApi.GetObjByIdEduWaylocalStorage)", strIdEduWay.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsKcEduWayEN._CurrTabName, strIdEduWay);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objKcEduWayCache: clsKcEduWayEN = JSON.parse(strTempObj);
return objKcEduWayCache;
}
try
{
const objKcEduWay = await KcEduWay_GetObjByIdEduWayAsync(strIdEduWay);
if (objKcEduWay != null)
{
localStorage.setItem(strKey, JSON.stringify(objKcEduWay));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objKcEduWay;
}
return objKcEduWay;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdEduWay, kcEduWay_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strIdEduWay:所给的关键字
 * @returns 对象
*/
export  async function KcEduWay_GetObjByIdEduWayCache(strIdEduWay: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdEduWayCache";

if (IsNullOrEmpty(strIdEduWay) == true)
{
  const strMsg = Format("参数:[strIdEduWay]不能为空!(In clsKcEduWayWApi.GetObjByIdEduWayCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdEduWay.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdEduWay]的长度:[{0}]不正确!(clsKcEduWayWApi.GetObjByIdEduWayCache)", strIdEduWay.length);
console.error(strMsg);
throw (strMsg);
}
const arrKcEduWayObjLstCache = await KcEduWay_GetObjLstCache();
try
{
const arrKcEduWaySel = arrKcEduWayObjLstCache.filter(x => 
 x.idEduWay == strIdEduWay );
let objKcEduWay: clsKcEduWayEN;
if (arrKcEduWaySel.length > 0)
{
objKcEduWay = arrKcEduWaySel[0];
return objKcEduWay;
}
else
{
if (bolTryAsyncOnce == true)
{
const objKcEduWayConst = await KcEduWay_GetObjByIdEduWayAsync(strIdEduWay);
if (objKcEduWayConst != null)
{
KcEduWay_ReFreshThisCache();
return objKcEduWayConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdEduWay, kcEduWay_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objKcEduWay:所给的对象
 * @returns 对象
*/
export  async function KcEduWay_UpdateObjInLstCache(objKcEduWay: clsKcEduWayEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrKcEduWayObjLstCache = await KcEduWay_GetObjLstCache();
const obj = arrKcEduWayObjLstCache.find(x => 
x.idEduWay == objKcEduWay.idEduWay);
if (obj != null)
{
objKcEduWay.idEduWay = obj.idEduWay;
ObjectAssign( obj, objKcEduWay);
}
else
{
arrKcEduWayObjLstCache.push(objKcEduWay);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, kcEduWay_ConstructorName, strThisFuncName);
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
export  function KcEduWay_SortFunDefa(a:clsKcEduWayEN , b:clsKcEduWayEN): number 
{
return a.idEduWay.localeCompare(b.idEduWay);
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
export  function KcEduWay_SortFunDefa2Fld(a:clsKcEduWayEN , b:clsKcEduWayEN): number 
{
if (a.eduWayID == b.eduWayID) return a.eduWayName.localeCompare(b.eduWayName);
else return a.eduWayID.localeCompare(b.eduWayID);
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
export  function KcEduWay_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsKcEduWayEN.con_IdEduWay:
return (a: clsKcEduWayEN, b: clsKcEduWayEN) => {
return a.idEduWay.localeCompare(b.idEduWay);
}
case clsKcEduWayEN.con_EduWayID:
return (a: clsKcEduWayEN, b: clsKcEduWayEN) => {
return a.eduWayID.localeCompare(b.eduWayID);
}
case clsKcEduWayEN.con_EduWayName:
return (a: clsKcEduWayEN, b: clsKcEduWayEN) => {
return a.eduWayName.localeCompare(b.eduWayName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KcEduWay]中不存在!(in ${ kcEduWay_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsKcEduWayEN.con_IdEduWay:
return (a: clsKcEduWayEN, b: clsKcEduWayEN) => {
return b.idEduWay.localeCompare(a.idEduWay);
}
case clsKcEduWayEN.con_EduWayID:
return (a: clsKcEduWayEN, b: clsKcEduWayEN) => {
return b.eduWayID.localeCompare(a.eduWayID);
}
case clsKcEduWayEN.con_EduWayName:
return (a: clsKcEduWayEN, b: clsKcEduWayEN) => {
return b.eduWayName.localeCompare(a.eduWayName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KcEduWay]中不存在!(in ${ kcEduWay_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdEduWay:所给的关键字
 * @returns 对象
*/
export  async function KcEduWay_GetNameByIdEduWayCache(strIdEduWay: string) {

if (IsNullOrEmpty(strIdEduWay) == true)
{
  const strMsg = Format("参数:[strIdEduWay]不能为空!(In clsKcEduWayWApi.GetNameByIdEduWayCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdEduWay.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdEduWay]的长度:[{0}]不正确!(clsKcEduWayWApi.GetNameByIdEduWayCache)", strIdEduWay.length);
console.error(strMsg);
throw (strMsg);
}
const arrKcEduWayObjLstCache = await KcEduWay_GetObjLstCache();
if (arrKcEduWayObjLstCache == null) return "";
try
{
const arrKcEduWaySel = arrKcEduWayObjLstCache.filter(x => 
 x.idEduWay == strIdEduWay );
let objKcEduWay: clsKcEduWayEN;
if (arrKcEduWaySel.length > 0)
{
objKcEduWay = arrKcEduWaySel[0];
return objKcEduWay.eduWayName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdEduWay);
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
export  async function KcEduWay_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsKcEduWayEN.con_IdEduWay:
return (obj: clsKcEduWayEN) => {
return obj.idEduWay === value;
}
case clsKcEduWayEN.con_EduWayID:
return (obj: clsKcEduWayEN) => {
return obj.eduWayID === value;
}
case clsKcEduWayEN.con_EduWayName:
return (obj: clsKcEduWayEN) => {
return obj.eduWayName === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KcEduWay]中不存在!(in ${ kcEduWay_ConstructorName}.${ strThisFuncName})`;
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
export  async function KcEduWay_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsKcEduWayEN.con_IdEduWay)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsKcEduWayEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsKcEduWayEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdEduWay = strInValue;
if (IsNullOrEmpty(strIdEduWay) == true)
{
return "";
}
const objKcEduWay = await KcEduWay_GetObjByIdEduWayCache(strIdEduWay );
if (objKcEduWay == null) return "";
if (objKcEduWay.GetFldValue(strOutFldName) == null) return "";
return objKcEduWay.GetFldValue(strOutFldName).toString();
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
export  async function KcEduWay_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsKcEduWayEN.con_IdEduWay)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrKcEduWay = await KcEduWay_GetObjLstCache();
if (arrKcEduWay == null) return [];
let arrKcEduWaySel = arrKcEduWay;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrKcEduWaySel = arrKcEduWaySel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrKcEduWaySel.length == 0) return [];
return arrKcEduWaySel.map(x=>x.idEduWay);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KcEduWay_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_GetFirstObjAsync(strWhereCond: string): Promise<clsKcEduWayEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const objKcEduWay = KcEduWay_GetObjFromJsonObj(returnObj);
return objKcEduWay;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKcEduWayEN._CurrTabName;
if (IsNullOrEmpty(clsKcEduWayEN.WhereFormat) == false)
{
strWhereCond = clsKcEduWayEN.WhereFormat;
}
if (IsNullOrEmpty(clsKcEduWayEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKcEduWayEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrKcEduWayExObjLstCache: Array<clsKcEduWayEN> = CacheHelper.Get(strKey);
const arrKcEduWayObjLstT = KcEduWay_GetObjLstByJSONObjLst(arrKcEduWayExObjLstCache);
return arrKcEduWayObjLstT;
}
try
{
const arrKcEduWayExObjLst = await KcEduWay_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrKcEduWayExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKcEduWayExObjLst.length);
console.log(strInfo);
return arrKcEduWayExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, kcEduWay_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KcEduWay_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKcEduWayEN._CurrTabName;
if (IsNullOrEmpty(clsKcEduWayEN.WhereFormat) == false)
{
strWhereCond = clsKcEduWayEN.WhereFormat;
}
if (IsNullOrEmpty(clsKcEduWayEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKcEduWayEN.CacheAddiCondition);
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
const arrKcEduWayExObjLstCache: Array<clsKcEduWayEN> = JSON.parse(strTempObjLst);
const arrKcEduWayObjLstT = KcEduWay_GetObjLstByJSONObjLst(arrKcEduWayExObjLstCache);
return arrKcEduWayObjLstT;
}
try
{
const arrKcEduWayExObjLst = await KcEduWay_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrKcEduWayExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKcEduWayExObjLst.length);
console.log(strInfo);
return arrKcEduWayExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, kcEduWay_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KcEduWay_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsKcEduWayEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrKcEduWayObjLstCache: Array<clsKcEduWayEN> = JSON.parse(strTempObjLst);
return arrKcEduWayObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function KcEduWay_GetObjLstAsync(strWhereCond: string): Promise<Array<clsKcEduWayEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kcEduWay_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KcEduWay_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKcEduWayEN._CurrTabName;
if (IsNullOrEmpty(clsKcEduWayEN.WhereFormat) == false)
{
strWhereCond = clsKcEduWayEN.WhereFormat;
}
if (IsNullOrEmpty(clsKcEduWayEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKcEduWayEN.CacheAddiCondition);
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
const arrKcEduWayExObjLstCache: Array<clsKcEduWayEN> = JSON.parse(strTempObjLst);
const arrKcEduWayObjLstT = KcEduWay_GetObjLstByJSONObjLst(arrKcEduWayExObjLstCache);
return arrKcEduWayObjLstT;
}
try
{
const arrKcEduWayExObjLst = await KcEduWay_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrKcEduWayExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKcEduWayExObjLst.length);
console.log(strInfo);
return arrKcEduWayExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, kcEduWay_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KcEduWay_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsKcEduWayEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrKcEduWayObjLstCache: Array<clsKcEduWayEN> = JSON.parse(strTempObjLst);
return arrKcEduWayObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KcEduWay_GetObjLstCache(): Promise<Array<clsKcEduWayEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrKcEduWayObjLstCache;
switch (clsKcEduWayEN.CacheModeId)
{
case "04"://sessionStorage
arrKcEduWayObjLstCache = await KcEduWay_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrKcEduWayObjLstCache = await KcEduWay_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrKcEduWayObjLstCache = await KcEduWay_GetObjLstClientCache();
break;
default:
arrKcEduWayObjLstCache = await KcEduWay_GetObjLstClientCache();
break;
}
return arrKcEduWayObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KcEduWay_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrKcEduWayObjLstCache;
switch (clsKcEduWayEN.CacheModeId)
{
case "04"://sessionStorage
arrKcEduWayObjLstCache = await KcEduWay_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrKcEduWayObjLstCache = await KcEduWay_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrKcEduWayObjLstCache = null;
break;
default:
arrKcEduWayObjLstCache = null;
break;
}
return arrKcEduWayObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdEduWayCond:条件对象
 * @returns 对象列表子集
*/
export  async function KcEduWay_GetSubObjLstCache(objKcEduWayCond: clsKcEduWayEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrKcEduWayObjLstCache = await KcEduWay_GetObjLstCache();
let arrKcEduWaySel = arrKcEduWayObjLstCache;
if (objKcEduWayCond.sfFldComparisonOp == null || objKcEduWayCond.sfFldComparisonOp == "") return arrKcEduWaySel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objKcEduWayCond.sfFldComparisonOp);
//console.log("clsKcEduWayWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objKcEduWayCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objKcEduWayCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrKcEduWaySel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objKcEduWayCond), kcEduWay_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsKcEduWayEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdEduWay:关键字列表
 * @returns 对象列表
 **/
export  async function KcEduWay_GetObjLstByIdEduWayLstAsync(arrIdEduWay: Array<string>): Promise<Array<clsKcEduWayEN>>  
{
const strThisFuncName = "GetObjLstByIdEduWayLstAsync";
const strAction = "GetObjLstByIdEduWayLst";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdEduWay, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kcEduWay_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KcEduWay_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param arrstrIdEduWayLst:关键字列表
 * @returns 对象列表
*/
export  async function KcEduWay_GetObjLstByIdEduWayLstCache(arrIdEduWayLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdEduWayLstCache";
try
{
const arrKcEduWayObjLstCache = await KcEduWay_GetObjLstCache();
const arrKcEduWaySel = arrKcEduWayObjLstCache.filter(x => arrIdEduWayLst.indexOf(x.idEduWay)>-1);
return arrKcEduWaySel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdEduWayLst.join(","), kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsKcEduWayEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kcEduWay_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KcEduWay_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsKcEduWayEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kcEduWay_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KcEduWay_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsKcEduWayEN>();
const arrKcEduWayObjLstCache = await KcEduWay_GetObjLstCache();
if (arrKcEduWayObjLstCache.length == 0) return arrKcEduWayObjLstCache;
let arrKcEduWaySel = arrKcEduWayObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objKcEduWayCond = new clsKcEduWayEN();
ObjectAssign(objKcEduWayCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsKcEduWayWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objKcEduWayCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrKcEduWaySel = arrKcEduWaySel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrKcEduWaySel.length == 0) return arrKcEduWaySel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrKcEduWaySel = arrKcEduWaySel.sort(KcEduWay_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrKcEduWaySel = arrKcEduWaySel.sort(objPagerPara.sortFun);
}
arrKcEduWaySel = arrKcEduWaySel.slice(intStart, intEnd);     
return arrKcEduWaySel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, kcEduWay_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsKcEduWayEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function KcEduWay_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsKcEduWayEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsKcEduWayEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kcEduWay_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KcEduWay_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param strIdEduWay:关键字
 * @returns 获取删除的结果
 **/
export  async function KcEduWay_DelRecordAsync(strIdEduWay: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdEduWay);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param arrIdEduWay:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function KcEduWay_DelKcEduWaysAsync(arrIdEduWay: Array<string>): Promise<number> 
{
const strThisFuncName = "DelKcEduWaysAsync";
const strAction = "DelKcEduWays";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdEduWay, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_DelKcEduWaysByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelKcEduWaysByCondAsync";
const strAction = "DelKcEduWaysByCond";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param objKcEduWayEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KcEduWay_AddNewRecordAsync(objKcEduWayEN: clsKcEduWayEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objKcEduWayEN.idEduWay === null || objKcEduWayEN.idEduWay === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objKcEduWayEN);
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcEduWayEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param objKcEduWayEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KcEduWay_AddNewRecordWithMaxIdAsync(objKcEduWayEN: clsKcEduWayEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcEduWayEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_AddNewObjSave(objKcEduWayEN: clsKcEduWayEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
KcEduWay_CheckPropertyNew(objKcEduWayEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ kcEduWay_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await KcEduWay_IsExistAsync(objKcEduWayEN.idEduWay);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objKcEduWayEN.idEduWay);
console.error(strMsg);
throw(strMsg);
}
returnBool = await KcEduWay_AddNewRecordAsync(objKcEduWayEN);
if (returnBool == true)
{
KcEduWay_ReFreshCache();
}
else
{
const strInfo = `添加[教学方式(KcEduWay)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objKcEduWayEN.idEduWay, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ kcEduWay_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function KcEduWay_UpdateObjSave(objKcEduWayEN: clsKcEduWayEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objKcEduWayEN.sfUpdFldSetStr = objKcEduWayEN.updFldString;//设置哪些字段被修改(脏字段)
if (objKcEduWayEN.idEduWay == "" || objKcEduWayEN.idEduWay == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
KcEduWay_CheckProperty4Update(objKcEduWayEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ kcEduWay_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await KcEduWay_UpdateRecordAsync(objKcEduWayEN);
if (returnBool == true)
{
KcEduWay_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ kcEduWay_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objKcEduWayEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function KcEduWay_AddNewRecordWithReturnKeyAsync(objKcEduWayEN: clsKcEduWayEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcEduWayEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param objKcEduWayEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KcEduWay_UpdateRecordAsync(objKcEduWayEN: clsKcEduWayEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objKcEduWayEN.sfUpdFldSetStr === undefined || objKcEduWayEN.sfUpdFldSetStr === null || objKcEduWayEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKcEduWayEN.idEduWay);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcEduWayEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param objKcEduWayEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KcEduWay_EditRecordExAsync(objKcEduWayEN: clsKcEduWayEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objKcEduWayEN.sfUpdFldSetStr === undefined || objKcEduWayEN.sfUpdFldSetStr === null || objKcEduWayEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKcEduWayEN.idEduWay);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcEduWayEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param objKcEduWayEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KcEduWay_UpdateWithConditionAsync(objKcEduWayEN: clsKcEduWayEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objKcEduWayEN.sfUpdFldSetStr === undefined || objKcEduWayEN.sfUpdFldSetStr === null || objKcEduWayEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKcEduWayEN.idEduWay);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);
objKcEduWayEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcEduWayEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param objstrIdEduWayCond:条件对象
 * @returns 对象列表子集
*/
export  async function KcEduWay_IsExistRecordCache(objKcEduWayCond: clsKcEduWayEN) {
const strThisFuncName = "IsExistRecordCache";
const arrKcEduWayObjLstCache = await KcEduWay_GetObjLstCache();
if (arrKcEduWayObjLstCache == null) return false;
let arrKcEduWaySel = arrKcEduWayObjLstCache;
if (objKcEduWayCond.sfFldComparisonOp == null || objKcEduWayCond.sfFldComparisonOp == "") return arrKcEduWaySel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objKcEduWayCond.sfFldComparisonOp);
//console.log("clsKcEduWayWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objKcEduWayCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objKcEduWayCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrKcEduWaySel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objKcEduWayCond), kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param strIdEduWay:所给的关键字
 * @returns 对象
*/
export  async function KcEduWay_IsExistCache(strIdEduWay:string) {
const strThisFuncName = "IsExistCache";
const arrKcEduWayObjLstCache = await KcEduWay_GetObjLstCache();
if (arrKcEduWayObjLstCache == null) return false;
try
{
const arrKcEduWaySel = arrKcEduWayObjLstCache.filter(x => x.idEduWay == strIdEduWay);
if (arrKcEduWaySel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdEduWay, kcEduWay_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdEduWay:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function KcEduWay_IsExistAsync(strIdEduWay: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdEduWay
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
 * @param objKcEduWayCond:条件对象
 * @returns 对象列表记录数
*/
export  async function KcEduWay_GetRecCountByCondCache(objKcEduWayCond: clsKcEduWayEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrKcEduWayObjLstCache = await KcEduWay_GetObjLstCache();
if (arrKcEduWayObjLstCache == null) return 0;
let arrKcEduWaySel = arrKcEduWayObjLstCache;
if (objKcEduWayCond.sfFldComparisonOp == null || objKcEduWayCond.sfFldComparisonOp == "") return arrKcEduWaySel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objKcEduWayCond.sfFldComparisonOp);
//console.log("clsKcEduWayWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objKcEduWayCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objKcEduWayCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrKcEduWaySel = arrKcEduWaySel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKcEduWaySel = arrKcEduWaySel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrKcEduWaySel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objKcEduWayCond), kcEduWay_ConstructorName, strThisFuncName);
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
export  async function KcEduWay_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(kcEduWay_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcEduWay_ConstructorName, strThisFuncName);
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
export  function KcEduWay_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function KcEduWay_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsKcEduWayEN._CurrTabName;
switch (clsKcEduWayEN.CacheModeId)
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
clsKcEduWayEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function KcEduWay_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsKcEduWayEN._CurrTabName;
switch (clsKcEduWayEN.CacheModeId)
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
clsKcEduWayEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function KcEduWay_GetLastRefreshTime():string
{
if (clsKcEduWayEN._RefreshTimeLst.length == 0) return "";
return clsKcEduWayEN._RefreshTimeLst[clsKcEduWayEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function KcEduWay_BindDdl_id_EduWayInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_id_EduWayInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_EduWayInDivCache");
const arrObjLstSel = await KcEduWay_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsKcEduWayEN.con_IdEduWay, clsKcEduWayEN.con_EduWayName, "教学方式...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function KcEduWay_GetArrKcEduWay()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_EduWayInDivCache");
const arrKcEduWay = new Array<clsKcEduWayEN>();
const arrObjLstSel = await KcEduWay_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsKcEduWayEN();
obj0.idEduWay = '0';
obj0.eduWayName = '选教学方式...';
arrKcEduWay.push(obj0);
arrObjLstSel.forEach(x => arrKcEduWay.push(x));
return arrKcEduWay;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KcEduWay_CheckPropertyNew(pobjKcEduWayEN: clsKcEduWayEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjKcEduWayEN.eduWayID) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学方式代号]不能为空(In 教学方式)!(clsKcEduWayBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKcEduWayEN.eduWayName) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学方式名称]不能为空(In 教学方式)!(clsKcEduWayBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKcEduWayEN.idEduWay) == false && GetStrLen(pobjKcEduWayEN.idEduWay) > 4)
{
 throw new Error(`(errid:Watl000413)字段[教学方式流水号(idEduWay)]的长度不能超过4(In 教学方式(KcEduWay))!值:${pobjKcEduWayEN.idEduWay}(clsKcEduWayBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKcEduWayEN.eduWayID) == false && GetStrLen(pobjKcEduWayEN.eduWayID) > 4)
{
 throw new Error(`(errid:Watl000413)字段[教学方式代号(eduWayID)]的长度不能超过4(In 教学方式(KcEduWay))!值:${pobjKcEduWayEN.eduWayID}(clsKcEduWayBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKcEduWayEN.eduWayName) == false && GetStrLen(pobjKcEduWayEN.eduWayName) > 10)
{
 throw new Error(`(errid:Watl000413)字段[教学方式名称(eduWayName)]的长度不能超过10(In 教学方式(KcEduWay))!值:${pobjKcEduWayEN.eduWayName}(clsKcEduWayBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjKcEduWayEN.idEduWay) == false && undefined !== pobjKcEduWayEN.idEduWay && tzDataType.isString(pobjKcEduWayEN.idEduWay) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学方式流水号(idEduWay)]的值:[${pobjKcEduWayEN.idEduWay}], 非法,应该为字符型(In 教学方式(KcEduWay))!(clsKcEduWayBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKcEduWayEN.eduWayID) == false && undefined !== pobjKcEduWayEN.eduWayID && tzDataType.isString(pobjKcEduWayEN.eduWayID) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学方式代号(eduWayID)]的值:[${pobjKcEduWayEN.eduWayID}], 非法,应该为字符型(In 教学方式(KcEduWay))!(clsKcEduWayBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKcEduWayEN.eduWayName) == false && undefined !== pobjKcEduWayEN.eduWayName && tzDataType.isString(pobjKcEduWayEN.eduWayName) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学方式名称(eduWayName)]的值:[${pobjKcEduWayEN.eduWayName}], 非法,应该为字符型(In 教学方式(KcEduWay))!(clsKcEduWayBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KcEduWay_CheckProperty4Update(pobjKcEduWayEN: clsKcEduWayEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKcEduWayEN.idEduWay) == false && GetStrLen(pobjKcEduWayEN.idEduWay) > 4)
{
 throw new Error(`(errid:Watl000416)字段[教学方式流水号(idEduWay)]的长度不能超过4(In 教学方式(KcEduWay))!值:${pobjKcEduWayEN.idEduWay}(clsKcEduWayBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcEduWayEN.eduWayID) == false && GetStrLen(pobjKcEduWayEN.eduWayID) > 4)
{
 throw new Error(`(errid:Watl000416)字段[教学方式代号(eduWayID)]的长度不能超过4(In 教学方式(KcEduWay))!值:${pobjKcEduWayEN.eduWayID}(clsKcEduWayBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcEduWayEN.eduWayName) == false && GetStrLen(pobjKcEduWayEN.eduWayName) > 10)
{
 throw new Error(`(errid:Watl000416)字段[教学方式名称(eduWayName)]的长度不能超过10(In 教学方式(KcEduWay))!值:${pobjKcEduWayEN.eduWayName}(clsKcEduWayBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjKcEduWayEN.idEduWay) == false && undefined !== pobjKcEduWayEN.idEduWay && tzDataType.isString(pobjKcEduWayEN.idEduWay) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学方式流水号(idEduWay)]的值:[${pobjKcEduWayEN.idEduWay}], 非法,应该为字符型(In 教学方式(KcEduWay))!(clsKcEduWayBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcEduWayEN.eduWayID) == false && undefined !== pobjKcEduWayEN.eduWayID && tzDataType.isString(pobjKcEduWayEN.eduWayID) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学方式代号(eduWayID)]的值:[${pobjKcEduWayEN.eduWayID}], 非法,应该为字符型(In 教学方式(KcEduWay))!(clsKcEduWayBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcEduWayEN.eduWayName) == false && undefined !== pobjKcEduWayEN.eduWayName && tzDataType.isString(pobjKcEduWayEN.eduWayName) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学方式名称(eduWayName)]的值:[${pobjKcEduWayEN.eduWayName}], 非法,应该为字符型(In 教学方式(KcEduWay))!(clsKcEduWayBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjKcEduWayEN.idEduWay) === true 
 || pobjKcEduWayEN.idEduWay.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[教学方式流水号]不能为空(In 教学方式)!(clsKcEduWayBL:CheckProperty4Update)`);
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
export  function KcEduWay_GetJSONStrByObj (pobjKcEduWayEN: clsKcEduWayEN): string
{
pobjKcEduWayEN.sfUpdFldSetStr = pobjKcEduWayEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjKcEduWayEN);
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
export  function KcEduWay_GetObjLstByJSONStr (strJSON: string): Array<clsKcEduWayEN>
{
let arrKcEduWayObjLst = new Array<clsKcEduWayEN>();
if (strJSON === "")
{
return arrKcEduWayObjLst;
}
try
{
arrKcEduWayObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrKcEduWayObjLst;
}
return arrKcEduWayObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrKcEduWayObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function KcEduWay_GetObjLstByJSONObjLst (arrKcEduWayObjLstS: Array<clsKcEduWayEN>): Array<clsKcEduWayEN>
{
const arrKcEduWayObjLst = new Array<clsKcEduWayEN>();
for (const objInFor of arrKcEduWayObjLstS) {
const obj1 = KcEduWay_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrKcEduWayObjLst.push(obj1);
}
return arrKcEduWayObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function KcEduWay_GetObjByJSONStr (strJSON: string): clsKcEduWayEN
{
let pobjKcEduWayEN = new clsKcEduWayEN();
if (strJSON === "")
{
return pobjKcEduWayEN;
}
try
{
pobjKcEduWayEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjKcEduWayEN;
}
return pobjKcEduWayEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function KcEduWay_GetCombineCondition(objKcEduWayCond: clsKcEduWayEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objKcEduWayCond.dicFldComparisonOp, clsKcEduWayEN.con_IdEduWay) == true)
{
const strComparisonOpIdEduWay:string = objKcEduWayCond.dicFldComparisonOp[clsKcEduWayEN.con_IdEduWay];
strWhereCond += Format(" And {0} {2} '{1}'", clsKcEduWayEN.con_IdEduWay, objKcEduWayCond.idEduWay, strComparisonOpIdEduWay);
}
if (Object.prototype.hasOwnProperty.call(objKcEduWayCond.dicFldComparisonOp, clsKcEduWayEN.con_EduWayID) == true)
{
const strComparisonOpEduWayID:string = objKcEduWayCond.dicFldComparisonOp[clsKcEduWayEN.con_EduWayID];
strWhereCond += Format(" And {0} {2} '{1}'", clsKcEduWayEN.con_EduWayID, objKcEduWayCond.eduWayID, strComparisonOpEduWayID);
}
if (Object.prototype.hasOwnProperty.call(objKcEduWayCond.dicFldComparisonOp, clsKcEduWayEN.con_EduWayName) == true)
{
const strComparisonOpEduWayName:string = objKcEduWayCond.dicFldComparisonOp[clsKcEduWayEN.con_EduWayName];
strWhereCond += Format(" And {0} {2} '{1}'", clsKcEduWayEN.con_EduWayName, objKcEduWayCond.eduWayName, strComparisonOpEduWayName);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objKcEduWayENS:源对象
 * @param objKcEduWayENT:目标对象
*/
export  function KcEduWay_CopyObjTo(objKcEduWayENS: clsKcEduWayEN , objKcEduWayENT: clsKcEduWayEN ): void 
{
objKcEduWayENT.idEduWay = objKcEduWayENS.idEduWay; //教学方式流水号
objKcEduWayENT.eduWayID = objKcEduWayENS.eduWayID; //教学方式代号
objKcEduWayENT.eduWayName = objKcEduWayENS.eduWayName; //教学方式名称
objKcEduWayENT.sfUpdFldSetStr = objKcEduWayENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objKcEduWayENS:源对象
 * @param objKcEduWayENT:目标对象
*/
export  function KcEduWay_GetObjFromJsonObj(objKcEduWayENS: clsKcEduWayEN): clsKcEduWayEN 
{
 const objKcEduWayENT: clsKcEduWayEN = new clsKcEduWayEN();
ObjectAssign(objKcEduWayENT, objKcEduWayENS);
 return objKcEduWayENT;
}