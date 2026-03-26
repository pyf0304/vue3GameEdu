
 /**
 * 类名:clsge_StructureSubmitResultsWApi
 * 表名:ge_StructureSubmitResults(01120903)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:26
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
 * 结构提交结果表(ge_StructureSubmitResults)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsge_StructureSubmitResultsEN } from "@/ts/L0Entity/Knowledges/clsge_StructureSubmitResultsEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_StructureSubmitResults_Controller = "ge_StructureSubmitResultsApi";
 export const ge_StructureSubmitResults_ConstructorName = "ge_StructureSubmitResults";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function ge_StructureSubmitResults_GetObjBymIdAsync(lngmId: number): Promise<clsge_StructureSubmitResultsEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_StructureSubmitResultsWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const objge_StructureSubmitResults = ge_StructureSubmitResults_GetObjFromJsonObj(returnObj);
return objge_StructureSubmitResults;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function ge_StructureSubmitResults_SortFunDefa(a:clsge_StructureSubmitResultsEN , b:clsge_StructureSubmitResultsEN): number 
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
export  function ge_StructureSubmitResults_SortFunDefa2Fld(a:clsge_StructureSubmitResultsEN , b:clsge_StructureSubmitResultsEN): number 
{
if (a.structureGraphId == b.structureGraphId) return a.createUser.localeCompare(b.createUser);
else return a.structureGraphId.localeCompare(b.structureGraphId);
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
export  function ge_StructureSubmitResults_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_StructureSubmitResultsEN.con_mId:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
return a.mId-b.mId;
}
case clsge_StructureSubmitResultsEN.con_StructureGraphId:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
return a.structureGraphId.localeCompare(b.structureGraphId);
}
case clsge_StructureSubmitResultsEN.con_CreateUser:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (a.createUser == null) return -1;
if (b.createUser == null) return 1;
return a.createUser.localeCompare(b.createUser);
}
case clsge_StructureSubmitResultsEN.con_TakeUpTime:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (a.takeUpTime == null) return -1;
if (b.takeUpTime == null) return 1;
return a.takeUpTime.localeCompare(b.takeUpTime);
}
case clsge_StructureSubmitResultsEN.con_CorrectNum:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
return a.correctNum-b.correctNum;
}
case clsge_StructureSubmitResultsEN.con_ErrorNum:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
return a.errorNum-b.errorNum;
}
case clsge_StructureSubmitResultsEN.con_Fraction:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
return a.fraction-b.fraction;
}
case clsge_StructureSubmitResultsEN.con_UpdDate:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_StructureSubmitResultsEN.con_UpdUser:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_StructureSubmitResultsEN.con_Memo:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsge_StructureSubmitResultsEN.con_CourseId:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureSubmitResults]中不存在!(in ${ ge_StructureSubmitResults_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_StructureSubmitResultsEN.con_mId:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
return b.mId-a.mId;
}
case clsge_StructureSubmitResultsEN.con_StructureGraphId:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
return b.structureGraphId.localeCompare(a.structureGraphId);
}
case clsge_StructureSubmitResultsEN.con_CreateUser:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (b.createUser == null) return -1;
if (a.createUser == null) return 1;
return b.createUser.localeCompare(a.createUser);
}
case clsge_StructureSubmitResultsEN.con_TakeUpTime:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (b.takeUpTime == null) return -1;
if (a.takeUpTime == null) return 1;
return b.takeUpTime.localeCompare(a.takeUpTime);
}
case clsge_StructureSubmitResultsEN.con_CorrectNum:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
return b.correctNum-a.correctNum;
}
case clsge_StructureSubmitResultsEN.con_ErrorNum:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
return b.errorNum-a.errorNum;
}
case clsge_StructureSubmitResultsEN.con_Fraction:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
return b.fraction-a.fraction;
}
case clsge_StructureSubmitResultsEN.con_UpdDate:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_StructureSubmitResultsEN.con_UpdUser:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_StructureSubmitResultsEN.con_Memo:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsge_StructureSubmitResultsEN.con_CourseId:
return (a: clsge_StructureSubmitResultsEN, b: clsge_StructureSubmitResultsEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureSubmitResults]中不存在!(in ${ ge_StructureSubmitResults_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function ge_StructureSubmitResults_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_StructureSubmitResultsEN.con_mId:
return (obj: clsge_StructureSubmitResultsEN) => {
return obj.mId === value;
}
case clsge_StructureSubmitResultsEN.con_StructureGraphId:
return (obj: clsge_StructureSubmitResultsEN) => {
return obj.structureGraphId === value;
}
case clsge_StructureSubmitResultsEN.con_CreateUser:
return (obj: clsge_StructureSubmitResultsEN) => {
return obj.createUser === value;
}
case clsge_StructureSubmitResultsEN.con_TakeUpTime:
return (obj: clsge_StructureSubmitResultsEN) => {
return obj.takeUpTime === value;
}
case clsge_StructureSubmitResultsEN.con_CorrectNum:
return (obj: clsge_StructureSubmitResultsEN) => {
return obj.correctNum === value;
}
case clsge_StructureSubmitResultsEN.con_ErrorNum:
return (obj: clsge_StructureSubmitResultsEN) => {
return obj.errorNum === value;
}
case clsge_StructureSubmitResultsEN.con_Fraction:
return (obj: clsge_StructureSubmitResultsEN) => {
return obj.fraction === value;
}
case clsge_StructureSubmitResultsEN.con_UpdDate:
return (obj: clsge_StructureSubmitResultsEN) => {
return obj.updDate === value;
}
case clsge_StructureSubmitResultsEN.con_UpdUser:
return (obj: clsge_StructureSubmitResultsEN) => {
return obj.updUser === value;
}
case clsge_StructureSubmitResultsEN.con_Memo:
return (obj: clsge_StructureSubmitResultsEN) => {
return obj.memo === value;
}
case clsge_StructureSubmitResultsEN.con_CourseId:
return (obj: clsge_StructureSubmitResultsEN) => {
return obj.courseId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureSubmitResults]中不存在!(in ${ ge_StructureSubmitResults_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_StructureSubmitResults__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StructureSubmitResults_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSubmitResults_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSubmitResults_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSubmitResults_GetFirstObjAsync(strWhereCond: string): Promise<clsge_StructureSubmitResultsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const objge_StructureSubmitResults = ge_StructureSubmitResults_GetObjFromJsonObj(returnObj);
return objge_StructureSubmitResults;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_StructureSubmitResults_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_StructureSubmitResultsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSubmitResults_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_StructureSubmitResults_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsge_StructureSubmitResultsEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSubmitResults_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function ge_StructureSubmitResults_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_StructureSubmitResultsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSubmitResults_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSubmitResults_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_StructureSubmitResultsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSubmitResults_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_StructureSubmitResults_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_StructureSubmitResultsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_StructureSubmitResultsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSubmitResults_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSubmitResults_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSubmitResults_Delge_StructureSubmitResultssAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_StructureSubmitResultssAsync";
const strAction = "Delge_StructureSubmitResultss";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSubmitResults_Delge_StructureSubmitResultssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_StructureSubmitResultssByCondAsync";
const strAction = "Delge_StructureSubmitResultssByCond";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSubmitResultsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureSubmitResults_AddNewRecordAsync(objge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_StructureSubmitResultsEN);
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSubmitResultsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSubmitResults_AddNewObjSave(objge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_StructureSubmitResults_CheckPropertyNew(objge_StructureSubmitResultsEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StructureSubmitResults_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StructureSubmitResults_CheckUniCond4Add(objge_StructureSubmitResultsEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await ge_StructureSubmitResults_AddNewRecordAsync(objge_StructureSubmitResultsEN);
if (returnBool == true)
{
//ge_StructureSubmitResults_ReFreshCache();
}
else
{
const strInfo = `添加[结构提交结果表(ge_StructureSubmitResults)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objge_StructureSubmitResultsEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_StructureSubmitResults_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_StructureSubmitResults_CheckUniCond4Add(objge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN): Promise<boolean>{
const strUniquenessCondition = ge_StructureSubmitResults_GetUniCondStr(objge_StructureSubmitResultsEN);
const bolIsExistCondition = await ge_StructureSubmitResults_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StructureSubmitResults_CheckUniCond4Update(objge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN): Promise<boolean>{
const strUniquenessCondition = ge_StructureSubmitResults_GetUniCondStr4Update(objge_StructureSubmitResultsEN);
const bolIsExistCondition = await ge_StructureSubmitResults_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StructureSubmitResults_UpdateObjSave(objge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_StructureSubmitResultsEN.sfUpdFldSetStr = objge_StructureSubmitResultsEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_StructureSubmitResultsEN.mId == 0 || objge_StructureSubmitResultsEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_StructureSubmitResults_CheckProperty4Update(objge_StructureSubmitResultsEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StructureSubmitResults_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StructureSubmitResults_CheckUniCond4Update(objge_StructureSubmitResultsEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_StructureSubmitResults_UpdateRecordAsync(objge_StructureSubmitResultsEN);
if (returnBool == true)
{
//ge_StructureSubmitResults_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_StructureSubmitResults_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_StructureSubmitResultsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_StructureSubmitResults_AddNewRecordWithReturnKeyAsync(objge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSubmitResultsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSubmitResultsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StructureSubmitResults_UpdateRecordAsync(objge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_StructureSubmitResultsEN.sfUpdFldSetStr === undefined || objge_StructureSubmitResultsEN.sfUpdFldSetStr === null || objge_StructureSubmitResultsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureSubmitResultsEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSubmitResultsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSubmitResultsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StructureSubmitResults_EditRecordExAsync(objge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_StructureSubmitResultsEN.sfUpdFldSetStr === undefined || objge_StructureSubmitResultsEN.sfUpdFldSetStr === null || objge_StructureSubmitResultsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureSubmitResultsEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSubmitResultsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSubmitResultsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StructureSubmitResults_UpdateWithConditionAsync(objge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_StructureSubmitResultsEN.sfUpdFldSetStr === undefined || objge_StructureSubmitResultsEN.sfUpdFldSetStr === null || objge_StructureSubmitResultsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureSubmitResultsEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);
objge_StructureSubmitResultsEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSubmitResultsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function ge_StructureSubmitResults_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_StructureSubmitResults_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSubmitResults_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function ge_StructureSubmitResults_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_StructureSubmitResults_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSubmitResults_ConstructorName, strThisFuncName);
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
export  function ge_StructureSubmitResults_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StructureSubmitResults_CheckPropertyNew(pobjge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.structureGraphId) === true )
{
 throw new Error(`(errid:Watl000411)字段[知识图谱Id]不能为空(In 结构提交结果表)!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.structureGraphId) == false && GetStrLen(pobjge_StructureSubmitResultsEN.structureGraphId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[知识图谱Id(structureGraphId)]的长度不能超过10(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.structureGraphId}(clsge_StructureSubmitResultsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.createUser) == false && GetStrLen(pobjge_StructureSubmitResultsEN.createUser) > 50)
{
 throw new Error(`(errid:Watl000413)字段[建立用户(createUser)]的长度不能超过50(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.createUser}(clsge_StructureSubmitResultsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.takeUpTime) == false && GetStrLen(pobjge_StructureSubmitResultsEN.takeUpTime) > 50)
{
 throw new Error(`(errid:Watl000413)字段[耗时(takeUpTime)]的长度不能超过50(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.takeUpTime}(clsge_StructureSubmitResultsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.updDate) == false && GetStrLen(pobjge_StructureSubmitResultsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.updDate}(clsge_StructureSubmitResultsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.updUser) == false && GetStrLen(pobjge_StructureSubmitResultsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.updUser}(clsge_StructureSubmitResultsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.memo) == false && GetStrLen(pobjge_StructureSubmitResultsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.memo}(clsge_StructureSubmitResultsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.courseId) == false && GetStrLen(pobjge_StructureSubmitResultsEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.courseId}(clsge_StructureSubmitResultsBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_StructureSubmitResultsEN.mId && undefined !== pobjge_StructureSubmitResultsEN.mId && tzDataType.isNumber(pobjge_StructureSubmitResultsEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjge_StructureSubmitResultsEN.mId}], 非法,应该为数值型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.structureGraphId) == false && undefined !== pobjge_StructureSubmitResultsEN.structureGraphId && tzDataType.isString(pobjge_StructureSubmitResultsEN.structureGraphId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识图谱Id(structureGraphId)]的值:[${pobjge_StructureSubmitResultsEN.structureGraphId}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.createUser) == false && undefined !== pobjge_StructureSubmitResultsEN.createUser && tzDataType.isString(pobjge_StructureSubmitResultsEN.createUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[建立用户(createUser)]的值:[${pobjge_StructureSubmitResultsEN.createUser}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.takeUpTime) == false && undefined !== pobjge_StructureSubmitResultsEN.takeUpTime && tzDataType.isString(pobjge_StructureSubmitResultsEN.takeUpTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[耗时(takeUpTime)]的值:[${pobjge_StructureSubmitResultsEN.takeUpTime}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureSubmitResultsEN.correctNum && undefined !== pobjge_StructureSubmitResultsEN.correctNum && tzDataType.isNumber(pobjge_StructureSubmitResultsEN.correctNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[正确数(correctNum)]的值:[${pobjge_StructureSubmitResultsEN.correctNum}], 非法,应该为数值型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureSubmitResultsEN.errorNum && undefined !== pobjge_StructureSubmitResultsEN.errorNum && tzDataType.isNumber(pobjge_StructureSubmitResultsEN.errorNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[错误数(errorNum)]的值:[${pobjge_StructureSubmitResultsEN.errorNum}], 非法,应该为数值型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureSubmitResultsEN.fraction && undefined !== pobjge_StructureSubmitResultsEN.fraction && tzDataType.isNumber(pobjge_StructureSubmitResultsEN.fraction) === false)
{
 throw new Error(`(errid:Watl000414)字段[分数(fraction)]的值:[${pobjge_StructureSubmitResultsEN.fraction}], 非法,应该为数值型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.updDate) == false && undefined !== pobjge_StructureSubmitResultsEN.updDate && tzDataType.isString(pobjge_StructureSubmitResultsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_StructureSubmitResultsEN.updDate}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.updUser) == false && undefined !== pobjge_StructureSubmitResultsEN.updUser && tzDataType.isString(pobjge_StructureSubmitResultsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_StructureSubmitResultsEN.updUser}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.memo) == false && undefined !== pobjge_StructureSubmitResultsEN.memo && tzDataType.isString(pobjge_StructureSubmitResultsEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_StructureSubmitResultsEN.memo}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.courseId) == false && undefined !== pobjge_StructureSubmitResultsEN.courseId && tzDataType.isString(pobjge_StructureSubmitResultsEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_StructureSubmitResultsEN.courseId}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StructureSubmitResults_CheckProperty4Update(pobjge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.structureGraphId) == false && GetStrLen(pobjge_StructureSubmitResultsEN.structureGraphId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[知识图谱Id(structureGraphId)]的长度不能超过10(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.structureGraphId}(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.createUser) == false && GetStrLen(pobjge_StructureSubmitResultsEN.createUser) > 50)
{
 throw new Error(`(errid:Watl000416)字段[建立用户(createUser)]的长度不能超过50(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.createUser}(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.takeUpTime) == false && GetStrLen(pobjge_StructureSubmitResultsEN.takeUpTime) > 50)
{
 throw new Error(`(errid:Watl000416)字段[耗时(takeUpTime)]的长度不能超过50(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.takeUpTime}(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.updDate) == false && GetStrLen(pobjge_StructureSubmitResultsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.updDate}(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.updUser) == false && GetStrLen(pobjge_StructureSubmitResultsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.updUser}(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.memo) == false && GetStrLen(pobjge_StructureSubmitResultsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.memo}(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.courseId) == false && GetStrLen(pobjge_StructureSubmitResultsEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 结构提交结果表(ge_StructureSubmitResults))!值:${pobjge_StructureSubmitResultsEN.courseId}(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_StructureSubmitResultsEN.mId && undefined !== pobjge_StructureSubmitResultsEN.mId && tzDataType.isNumber(pobjge_StructureSubmitResultsEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjge_StructureSubmitResultsEN.mId}], 非法,应该为数值型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.structureGraphId) == false && undefined !== pobjge_StructureSubmitResultsEN.structureGraphId && tzDataType.isString(pobjge_StructureSubmitResultsEN.structureGraphId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识图谱Id(structureGraphId)]的值:[${pobjge_StructureSubmitResultsEN.structureGraphId}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.createUser) == false && undefined !== pobjge_StructureSubmitResultsEN.createUser && tzDataType.isString(pobjge_StructureSubmitResultsEN.createUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[建立用户(createUser)]的值:[${pobjge_StructureSubmitResultsEN.createUser}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.takeUpTime) == false && undefined !== pobjge_StructureSubmitResultsEN.takeUpTime && tzDataType.isString(pobjge_StructureSubmitResultsEN.takeUpTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[耗时(takeUpTime)]的值:[${pobjge_StructureSubmitResultsEN.takeUpTime}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureSubmitResultsEN.correctNum && undefined !== pobjge_StructureSubmitResultsEN.correctNum && tzDataType.isNumber(pobjge_StructureSubmitResultsEN.correctNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[正确数(correctNum)]的值:[${pobjge_StructureSubmitResultsEN.correctNum}], 非法,应该为数值型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureSubmitResultsEN.errorNum && undefined !== pobjge_StructureSubmitResultsEN.errorNum && tzDataType.isNumber(pobjge_StructureSubmitResultsEN.errorNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[错误数(errorNum)]的值:[${pobjge_StructureSubmitResultsEN.errorNum}], 非法,应该为数值型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureSubmitResultsEN.fraction && undefined !== pobjge_StructureSubmitResultsEN.fraction && tzDataType.isNumber(pobjge_StructureSubmitResultsEN.fraction) === false)
{
 throw new Error(`(errid:Watl000417)字段[分数(fraction)]的值:[${pobjge_StructureSubmitResultsEN.fraction}], 非法,应该为数值型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.updDate) == false && undefined !== pobjge_StructureSubmitResultsEN.updDate && tzDataType.isString(pobjge_StructureSubmitResultsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_StructureSubmitResultsEN.updDate}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.updUser) == false && undefined !== pobjge_StructureSubmitResultsEN.updUser && tzDataType.isString(pobjge_StructureSubmitResultsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_StructureSubmitResultsEN.updUser}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.memo) == false && undefined !== pobjge_StructureSubmitResultsEN.memo && tzDataType.isString(pobjge_StructureSubmitResultsEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_StructureSubmitResultsEN.memo}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSubmitResultsEN.courseId) == false && undefined !== pobjge_StructureSubmitResultsEN.courseId && tzDataType.isString(pobjge_StructureSubmitResultsEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_StructureSubmitResultsEN.courseId}], 非法,应该为字符型(In 结构提交结果表(ge_StructureSubmitResults))!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjge_StructureSubmitResultsEN.mId 
 || pobjge_StructureSubmitResultsEN.mId != null && pobjge_StructureSubmitResultsEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 结构提交结果表)!(clsge_StructureSubmitResultsBL:CheckProperty4Update)`);
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
export  function ge_StructureSubmitResults_GetJSONStrByObj (pobjge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN): string
{
pobjge_StructureSubmitResultsEN.sfUpdFldSetStr = pobjge_StructureSubmitResultsEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_StructureSubmitResultsEN);
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
export  function ge_StructureSubmitResults_GetObjLstByJSONStr (strJSON: string): Array<clsge_StructureSubmitResultsEN>
{
let arrge_StructureSubmitResultsObjLst = new Array<clsge_StructureSubmitResultsEN>();
if (strJSON === "")
{
return arrge_StructureSubmitResultsObjLst;
}
try
{
arrge_StructureSubmitResultsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_StructureSubmitResultsObjLst;
}
return arrge_StructureSubmitResultsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_StructureSubmitResultsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_StructureSubmitResults_GetObjLstByJSONObjLst (arrge_StructureSubmitResultsObjLstS: Array<clsge_StructureSubmitResultsEN>): Array<clsge_StructureSubmitResultsEN>
{
const arrge_StructureSubmitResultsObjLst = new Array<clsge_StructureSubmitResultsEN>();
for (const objInFor of arrge_StructureSubmitResultsObjLstS) {
const obj1 = ge_StructureSubmitResults_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_StructureSubmitResultsObjLst.push(obj1);
}
return arrge_StructureSubmitResultsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_StructureSubmitResults_GetObjByJSONStr (strJSON: string): clsge_StructureSubmitResultsEN
{
let pobjge_StructureSubmitResultsEN = new clsge_StructureSubmitResultsEN();
if (strJSON === "")
{
return pobjge_StructureSubmitResultsEN;
}
try
{
pobjge_StructureSubmitResultsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_StructureSubmitResultsEN;
}
return pobjge_StructureSubmitResultsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_StructureSubmitResults_GetCombineCondition(objge_StructureSubmitResultsCond: clsge_StructureSubmitResultsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_StructureSubmitResultsCond.dicFldComparisonOp, clsge_StructureSubmitResultsEN.con_mId) == true)
{
const strComparisonOpmId:string = objge_StructureSubmitResultsCond.dicFldComparisonOp[clsge_StructureSubmitResultsEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsge_StructureSubmitResultsEN.con_mId, objge_StructureSubmitResultsCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSubmitResultsCond.dicFldComparisonOp, clsge_StructureSubmitResultsEN.con_StructureGraphId) == true)
{
const strComparisonOpStructureGraphId:string = objge_StructureSubmitResultsCond.dicFldComparisonOp[clsge_StructureSubmitResultsEN.con_StructureGraphId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSubmitResultsEN.con_StructureGraphId, objge_StructureSubmitResultsCond.structureGraphId, strComparisonOpStructureGraphId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSubmitResultsCond.dicFldComparisonOp, clsge_StructureSubmitResultsEN.con_CreateUser) == true)
{
const strComparisonOpCreateUser:string = objge_StructureSubmitResultsCond.dicFldComparisonOp[clsge_StructureSubmitResultsEN.con_CreateUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSubmitResultsEN.con_CreateUser, objge_StructureSubmitResultsCond.createUser, strComparisonOpCreateUser);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSubmitResultsCond.dicFldComparisonOp, clsge_StructureSubmitResultsEN.con_TakeUpTime) == true)
{
const strComparisonOpTakeUpTime:string = objge_StructureSubmitResultsCond.dicFldComparisonOp[clsge_StructureSubmitResultsEN.con_TakeUpTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSubmitResultsEN.con_TakeUpTime, objge_StructureSubmitResultsCond.takeUpTime, strComparisonOpTakeUpTime);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSubmitResultsCond.dicFldComparisonOp, clsge_StructureSubmitResultsEN.con_CorrectNum) == true)
{
const strComparisonOpCorrectNum:string = objge_StructureSubmitResultsCond.dicFldComparisonOp[clsge_StructureSubmitResultsEN.con_CorrectNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_StructureSubmitResultsEN.con_CorrectNum, objge_StructureSubmitResultsCond.correctNum, strComparisonOpCorrectNum);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSubmitResultsCond.dicFldComparisonOp, clsge_StructureSubmitResultsEN.con_ErrorNum) == true)
{
const strComparisonOpErrorNum:string = objge_StructureSubmitResultsCond.dicFldComparisonOp[clsge_StructureSubmitResultsEN.con_ErrorNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_StructureSubmitResultsEN.con_ErrorNum, objge_StructureSubmitResultsCond.errorNum, strComparisonOpErrorNum);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSubmitResultsCond.dicFldComparisonOp, clsge_StructureSubmitResultsEN.con_Fraction) == true)
{
const strComparisonOpFraction:string = objge_StructureSubmitResultsCond.dicFldComparisonOp[clsge_StructureSubmitResultsEN.con_Fraction];
strWhereCond += Format(" And {0} {2} {1}", clsge_StructureSubmitResultsEN.con_Fraction, objge_StructureSubmitResultsCond.fraction, strComparisonOpFraction);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSubmitResultsCond.dicFldComparisonOp, clsge_StructureSubmitResultsEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_StructureSubmitResultsCond.dicFldComparisonOp[clsge_StructureSubmitResultsEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSubmitResultsEN.con_UpdDate, objge_StructureSubmitResultsCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSubmitResultsCond.dicFldComparisonOp, clsge_StructureSubmitResultsEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_StructureSubmitResultsCond.dicFldComparisonOp[clsge_StructureSubmitResultsEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSubmitResultsEN.con_UpdUser, objge_StructureSubmitResultsCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSubmitResultsCond.dicFldComparisonOp, clsge_StructureSubmitResultsEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_StructureSubmitResultsCond.dicFldComparisonOp[clsge_StructureSubmitResultsEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSubmitResultsEN.con_Memo, objge_StructureSubmitResultsCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSubmitResultsCond.dicFldComparisonOp, clsge_StructureSubmitResultsEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_StructureSubmitResultsCond.dicFldComparisonOp[clsge_StructureSubmitResultsEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSubmitResultsEN.con_CourseId, objge_StructureSubmitResultsCond.courseId, strComparisonOpCourseId);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StructureSubmitResults(结构提交结果表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StructureSubmitResults_GetUniCondStr(objge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and mId = '{0}'", objge_StructureSubmitResultsEN.mId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StructureSubmitResults(结构提交结果表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StructureSubmitResults_GetUniCondStr4Update(objge_StructureSubmitResultsEN: clsge_StructureSubmitResultsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objge_StructureSubmitResultsEN.mId);
 strWhereCond +=  Format(" and mId = '{0}'", objge_StructureSubmitResultsEN.mId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_StructureSubmitResultsENS:源对象
 * @param objge_StructureSubmitResultsENT:目标对象
*/
export  function ge_StructureSubmitResults_CopyObjTo(objge_StructureSubmitResultsENS: clsge_StructureSubmitResultsEN , objge_StructureSubmitResultsENT: clsge_StructureSubmitResultsEN ): void 
{
objge_StructureSubmitResultsENT.mId = objge_StructureSubmitResultsENS.mId; //mId
objge_StructureSubmitResultsENT.structureGraphId = objge_StructureSubmitResultsENS.structureGraphId; //知识图谱Id
objge_StructureSubmitResultsENT.createUser = objge_StructureSubmitResultsENS.createUser; //建立用户
objge_StructureSubmitResultsENT.takeUpTime = objge_StructureSubmitResultsENS.takeUpTime; //耗时
objge_StructureSubmitResultsENT.correctNum = objge_StructureSubmitResultsENS.correctNum; //正确数
objge_StructureSubmitResultsENT.errorNum = objge_StructureSubmitResultsENS.errorNum; //错误数
objge_StructureSubmitResultsENT.fraction = objge_StructureSubmitResultsENS.fraction; //分数
objge_StructureSubmitResultsENT.updDate = objge_StructureSubmitResultsENS.updDate; //修改日期
objge_StructureSubmitResultsENT.updUser = objge_StructureSubmitResultsENS.updUser; //修改人
objge_StructureSubmitResultsENT.memo = objge_StructureSubmitResultsENS.memo; //备注
objge_StructureSubmitResultsENT.courseId = objge_StructureSubmitResultsENS.courseId; //课程Id
objge_StructureSubmitResultsENT.sfUpdFldSetStr = objge_StructureSubmitResultsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_StructureSubmitResultsENS:源对象
 * @param objge_StructureSubmitResultsENT:目标对象
*/
export  function ge_StructureSubmitResults_GetObjFromJsonObj(objge_StructureSubmitResultsENS: clsge_StructureSubmitResultsEN): clsge_StructureSubmitResultsEN 
{
 const objge_StructureSubmitResultsENT: clsge_StructureSubmitResultsEN = new clsge_StructureSubmitResultsEN();
ObjectAssign(objge_StructureSubmitResultsENT, objge_StructureSubmitResultsENS);
 return objge_StructureSubmitResultsENT;
}