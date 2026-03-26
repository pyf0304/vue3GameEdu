
 /**
 * 类名:clsge_StuErrorLibWApi
 * 表名:ge_StuErrorLib(01120887)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:25
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学生错误作业集(ge_StuErrorLib)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsge_StuErrorLibEN } from "@/ts/L0Entity/InteractManage/clsge_StuErrorLibEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_StuErrorLib_Controller = "ge_StuErrorLibApi";
 export const ge_StuErrorLib_ConstructorName = "ge_StuErrorLib";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function ge_StuErrorLib_GetObjBymIdAsync(lngmId: number): Promise<clsge_StuErrorLibEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_StuErrorLibWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const objge_StuErrorLib = ge_StuErrorLib_GetObjFromJsonObj(returnObj);
return objge_StuErrorLib;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  function ge_StuErrorLib_SortFunDefa(a:clsge_StuErrorLibEN , b:clsge_StuErrorLibEN): number 
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
export  function ge_StuErrorLib_SortFunDefa2Fld(a:clsge_StuErrorLibEN , b:clsge_StuErrorLibEN): number 
{
if (a.courseId == b.courseId) return a.idStudentInfo.localeCompare(b.idStudentInfo);
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
export  function ge_StuErrorLib_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_StuErrorLibEN.con_mId:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
return a.mId-b.mId;
}
case clsge_StuErrorLibEN.con_CourseId:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_StuErrorLibEN.con_IdStudentInfo:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
return a.idStudentInfo.localeCompare(b.idStudentInfo);
}
case clsge_StuErrorLibEN.con_QuestionId:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
return a.questionId-b.questionId;
}
case clsge_StuErrorLibEN.con_Creator:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (a.creator == null) return -1;
if (b.creator == null) return 1;
return a.creator.localeCompare(b.creator);
}
case clsge_StuErrorLibEN.con_CreateDate:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsge_StuErrorLibEN.con_SourceTypeId:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
return a.sourceTypeId.localeCompare(b.sourceTypeId);
}
case clsge_StuErrorLibEN.con_IsRedo:
return (a: clsge_StuErrorLibEN) => {
if (a.isRedo == true) return 1;
else return -1
}
case clsge_StuErrorLibEN.con_RedoDate:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (a.redoDate == null) return -1;
if (b.redoDate == null) return 1;
return a.redoDate.localeCompare(b.redoDate);
}
case clsge_StuErrorLibEN.con_IsPassed:
return (a: clsge_StuErrorLibEN) => {
if (a.isPassed == true) return 1;
else return -1
}
case clsge_StuErrorLibEN.con_UpdDate:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_StuErrorLibEN.con_UpdUser:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_StuErrorLibEN.con_Memo:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StuErrorLib]中不存在!(in ${ ge_StuErrorLib_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_StuErrorLibEN.con_mId:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
return b.mId-a.mId;
}
case clsge_StuErrorLibEN.con_CourseId:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_StuErrorLibEN.con_IdStudentInfo:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
return b.idStudentInfo.localeCompare(a.idStudentInfo);
}
case clsge_StuErrorLibEN.con_QuestionId:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
return b.questionId-a.questionId;
}
case clsge_StuErrorLibEN.con_Creator:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (b.creator == null) return -1;
if (a.creator == null) return 1;
return b.creator.localeCompare(a.creator);
}
case clsge_StuErrorLibEN.con_CreateDate:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsge_StuErrorLibEN.con_SourceTypeId:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
return b.sourceTypeId.localeCompare(a.sourceTypeId);
}
case clsge_StuErrorLibEN.con_IsRedo:
return (b: clsge_StuErrorLibEN) => {
if (b.isRedo == true) return 1;
else return -1
}
case clsge_StuErrorLibEN.con_RedoDate:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (b.redoDate == null) return -1;
if (a.redoDate == null) return 1;
return b.redoDate.localeCompare(a.redoDate);
}
case clsge_StuErrorLibEN.con_IsPassed:
return (b: clsge_StuErrorLibEN) => {
if (b.isPassed == true) return 1;
else return -1
}
case clsge_StuErrorLibEN.con_UpdDate:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_StuErrorLibEN.con_UpdUser:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_StuErrorLibEN.con_Memo:
return (a: clsge_StuErrorLibEN, b: clsge_StuErrorLibEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StuErrorLib]中不存在!(in ${ ge_StuErrorLib_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_StuErrorLib_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_StuErrorLibEN.con_mId:
return (obj: clsge_StuErrorLibEN) => {
return obj.mId === value;
}
case clsge_StuErrorLibEN.con_CourseId:
return (obj: clsge_StuErrorLibEN) => {
return obj.courseId === value;
}
case clsge_StuErrorLibEN.con_IdStudentInfo:
return (obj: clsge_StuErrorLibEN) => {
return obj.idStudentInfo === value;
}
case clsge_StuErrorLibEN.con_QuestionId:
return (obj: clsge_StuErrorLibEN) => {
return obj.questionId === value;
}
case clsge_StuErrorLibEN.con_Creator:
return (obj: clsge_StuErrorLibEN) => {
return obj.creator === value;
}
case clsge_StuErrorLibEN.con_CreateDate:
return (obj: clsge_StuErrorLibEN) => {
return obj.createDate === value;
}
case clsge_StuErrorLibEN.con_SourceTypeId:
return (obj: clsge_StuErrorLibEN) => {
return obj.sourceTypeId === value;
}
case clsge_StuErrorLibEN.con_IsRedo:
return (obj: clsge_StuErrorLibEN) => {
return obj.isRedo === value;
}
case clsge_StuErrorLibEN.con_RedoDate:
return (obj: clsge_StuErrorLibEN) => {
return obj.redoDate === value;
}
case clsge_StuErrorLibEN.con_IsPassed:
return (obj: clsge_StuErrorLibEN) => {
return obj.isPassed === value;
}
case clsge_StuErrorLibEN.con_UpdDate:
return (obj: clsge_StuErrorLibEN) => {
return obj.updDate === value;
}
case clsge_StuErrorLibEN.con_UpdUser:
return (obj: clsge_StuErrorLibEN) => {
return obj.updUser === value;
}
case clsge_StuErrorLibEN.con_Memo:
return (obj: clsge_StuErrorLibEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StuErrorLib]中不存在!(in ${ ge_StuErrorLib_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_StuErrorLib__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StuErrorLib_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_GetFirstObjAsync(strWhereCond: string): Promise<clsge_StuErrorLibEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const objge_StuErrorLib = ge_StuErrorLib_GetObjFromJsonObj(returnObj);
return objge_StuErrorLib;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_StuErrorLibEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StuErrorLib_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsge_StuErrorLibEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StuErrorLib_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_StuErrorLibEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StuErrorLib_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_StuErrorLibEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StuErrorLib_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_StuErrorLibEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_StuErrorLibEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StuErrorLib_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_Delge_StuErrorLibsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_StuErrorLibsAsync";
const strAction = "Delge_StuErrorLibs";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_Delge_StuErrorLibsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_StuErrorLibsByCondAsync";
const strAction = "Delge_StuErrorLibsByCond";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
 * @param objge_StuErrorLibEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StuErrorLib_AddNewRecordAsync(objge_StuErrorLibEN: clsge_StuErrorLibEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_StuErrorLibEN);
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StuErrorLibEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_AddNewObjSave(objge_StuErrorLibEN: clsge_StuErrorLibEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_StuErrorLib_CheckPropertyNew(objge_StuErrorLibEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StuErrorLib_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StuErrorLib_CheckUniCond4Add(objge_StuErrorLibEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await ge_StuErrorLib_AddNewRecordAsync(objge_StuErrorLibEN);
if (returnBool == true)
{
//ge_StuErrorLib_ReFreshCache(, );
}
else
{
const strInfo = `添加[学生错误作业集(ge_StuErrorLib)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objge_StuErrorLibEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_StuErrorLib_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_StuErrorLib_CheckUniCond4Add(objge_StuErrorLibEN: clsge_StuErrorLibEN): Promise<boolean>{
const strUniquenessCondition = ge_StuErrorLib_GetUniCondStr(objge_StuErrorLibEN);
const bolIsExistCondition = await ge_StuErrorLib_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StuErrorLib_CheckUniCond4Update(objge_StuErrorLibEN: clsge_StuErrorLibEN): Promise<boolean>{
const strUniquenessCondition = ge_StuErrorLib_GetUniCondStr4Update(objge_StuErrorLibEN);
const bolIsExistCondition = await ge_StuErrorLib_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StuErrorLib_UpdateObjSave(objge_StuErrorLibEN: clsge_StuErrorLibEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_StuErrorLibEN.sfUpdFldSetStr = objge_StuErrorLibEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_StuErrorLibEN.mId == 0 || objge_StuErrorLibEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_StuErrorLib_CheckProperty4Update(objge_StuErrorLibEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StuErrorLib_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StuErrorLib_CheckUniCond4Update(objge_StuErrorLibEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_StuErrorLib_UpdateRecordAsync(objge_StuErrorLibEN);
if (returnBool == true)
{
//ge_StuErrorLib_ReFreshCache(, );
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_StuErrorLib_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_StuErrorLibEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_StuErrorLib_AddNewRecordWithReturnKeyAsync(objge_StuErrorLibEN: clsge_StuErrorLibEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StuErrorLibEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
 * @param objge_StuErrorLibEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StuErrorLib_UpdateRecordAsync(objge_StuErrorLibEN: clsge_StuErrorLibEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_StuErrorLibEN.sfUpdFldSetStr === undefined || objge_StuErrorLibEN.sfUpdFldSetStr === null || objge_StuErrorLibEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StuErrorLibEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StuErrorLibEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
 * @param objge_StuErrorLibEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StuErrorLib_EditRecordExAsync(objge_StuErrorLibEN: clsge_StuErrorLibEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_StuErrorLibEN.sfUpdFldSetStr === undefined || objge_StuErrorLibEN.sfUpdFldSetStr === null || objge_StuErrorLibEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StuErrorLibEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StuErrorLibEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
 * @param objge_StuErrorLibEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StuErrorLib_UpdateWithConditionAsync(objge_StuErrorLibEN: clsge_StuErrorLibEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_StuErrorLibEN.sfUpdFldSetStr === undefined || objge_StuErrorLibEN.sfUpdFldSetStr === null || objge_StuErrorLibEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StuErrorLibEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);
objge_StuErrorLibEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StuErrorLibEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  async function ge_StuErrorLib_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_StuErrorLib_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuErrorLib_ConstructorName, strThisFuncName);
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
export  function ge_StuErrorLib_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_StuErrorLib_CheckPropertyNew(pobjge_StuErrorLibEN: clsge_StuErrorLibEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_StuErrorLibEN.courseId) === true 
 || pobjge_StuErrorLibEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 学生错误作业集)!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.idStudentInfo) === true 
 || pobjge_StuErrorLibEN.idStudentInfo.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[学生流水号]不能为空(In 学生错误作业集)!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (null === pobjge_StuErrorLibEN.questionId 
 || pobjge_StuErrorLibEN.questionId != null && pobjge_StuErrorLibEN.questionId.toString()  ===  ""
 || pobjge_StuErrorLibEN.questionId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[题目Id]不能为空(In 学生错误作业集)!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.sourceTypeId) === true 
 || pobjge_StuErrorLibEN.sourceTypeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[来源类型Id]不能为空(In 学生错误作业集)!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StuErrorLibEN.courseId) == false && GetStrLen(pobjge_StuErrorLibEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.courseId}(clsge_StuErrorLibBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.idStudentInfo) == false && GetStrLen(pobjge_StuErrorLibEN.idStudentInfo) > 8)
{
 throw new Error(`(errid:Watl000413)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.idStudentInfo}(clsge_StuErrorLibBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.creator) == false && GetStrLen(pobjge_StuErrorLibEN.creator) > 18)
{
 throw new Error(`(errid:Watl000413)字段[创建者(creator)]的长度不能超过18(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.creator}(clsge_StuErrorLibBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.createDate) == false && GetStrLen(pobjge_StuErrorLibEN.createDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.createDate}(clsge_StuErrorLibBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.sourceTypeId) == false && GetStrLen(pobjge_StuErrorLibEN.sourceTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[来源类型Id(sourceTypeId)]的长度不能超过2(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.sourceTypeId}(clsge_StuErrorLibBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.redoDate) == false && GetStrLen(pobjge_StuErrorLibEN.redoDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[重做日期(redoDate)]的长度不能超过8(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.redoDate}(clsge_StuErrorLibBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.updDate) == false && GetStrLen(pobjge_StuErrorLibEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.updDate}(clsge_StuErrorLibBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.updUser) == false && GetStrLen(pobjge_StuErrorLibEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.updUser}(clsge_StuErrorLibBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.memo) == false && GetStrLen(pobjge_StuErrorLibEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.memo}(clsge_StuErrorLibBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_StuErrorLibEN.mId && undefined !== pobjge_StuErrorLibEN.mId && tzDataType.isNumber(pobjge_StuErrorLibEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjge_StuErrorLibEN.mId}], 非法,应该为数值型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.courseId) == false && undefined !== pobjge_StuErrorLibEN.courseId && tzDataType.isString(pobjge_StuErrorLibEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_StuErrorLibEN.courseId}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.idStudentInfo) == false && undefined !== pobjge_StuErrorLibEN.idStudentInfo && tzDataType.isString(pobjge_StuErrorLibEN.idStudentInfo) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生流水号(idStudentInfo)]的值:[${pobjge_StuErrorLibEN.idStudentInfo}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuErrorLibEN.questionId && undefined !== pobjge_StuErrorLibEN.questionId && tzDataType.isNumber(pobjge_StuErrorLibEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjge_StuErrorLibEN.questionId}], 非法,应该为数值型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.creator) == false && undefined !== pobjge_StuErrorLibEN.creator && tzDataType.isString(pobjge_StuErrorLibEN.creator) === false)
{
 throw new Error(`(errid:Watl000414)字段[创建者(creator)]的值:[${pobjge_StuErrorLibEN.creator}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.createDate) == false && undefined !== pobjge_StuErrorLibEN.createDate && tzDataType.isString(pobjge_StuErrorLibEN.createDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[建立日期(createDate)]的值:[${pobjge_StuErrorLibEN.createDate}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.sourceTypeId) == false && undefined !== pobjge_StuErrorLibEN.sourceTypeId && tzDataType.isString(pobjge_StuErrorLibEN.sourceTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[来源类型Id(sourceTypeId)]的值:[${pobjge_StuErrorLibEN.sourceTypeId}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuErrorLibEN.isRedo && undefined !== pobjge_StuErrorLibEN.isRedo && tzDataType.isBoolean(pobjge_StuErrorLibEN.isRedo) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否重做(isRedo)]的值:[${pobjge_StuErrorLibEN.isRedo}], 非法,应该为布尔型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.redoDate) == false && undefined !== pobjge_StuErrorLibEN.redoDate && tzDataType.isString(pobjge_StuErrorLibEN.redoDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[重做日期(redoDate)]的值:[${pobjge_StuErrorLibEN.redoDate}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuErrorLibEN.isPassed && undefined !== pobjge_StuErrorLibEN.isPassed && tzDataType.isBoolean(pobjge_StuErrorLibEN.isPassed) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否通过(isPassed)]的值:[${pobjge_StuErrorLibEN.isPassed}], 非法,应该为布尔型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.updDate) == false && undefined !== pobjge_StuErrorLibEN.updDate && tzDataType.isString(pobjge_StuErrorLibEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_StuErrorLibEN.updDate}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.updUser) == false && undefined !== pobjge_StuErrorLibEN.updUser && tzDataType.isString(pobjge_StuErrorLibEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_StuErrorLibEN.updUser}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.memo) == false && undefined !== pobjge_StuErrorLibEN.memo && tzDataType.isString(pobjge_StuErrorLibEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_StuErrorLibEN.memo}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StuErrorLib_CheckProperty4Update(pobjge_StuErrorLibEN: clsge_StuErrorLibEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StuErrorLibEN.courseId) == false && GetStrLen(pobjge_StuErrorLibEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.courseId}(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.idStudentInfo) == false && GetStrLen(pobjge_StuErrorLibEN.idStudentInfo) > 8)
{
 throw new Error(`(errid:Watl000416)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.idStudentInfo}(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.creator) == false && GetStrLen(pobjge_StuErrorLibEN.creator) > 18)
{
 throw new Error(`(errid:Watl000416)字段[创建者(creator)]的长度不能超过18(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.creator}(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.createDate) == false && GetStrLen(pobjge_StuErrorLibEN.createDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.createDate}(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.sourceTypeId) == false && GetStrLen(pobjge_StuErrorLibEN.sourceTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[来源类型Id(sourceTypeId)]的长度不能超过2(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.sourceTypeId}(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.redoDate) == false && GetStrLen(pobjge_StuErrorLibEN.redoDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[重做日期(redoDate)]的长度不能超过8(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.redoDate}(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.updDate) == false && GetStrLen(pobjge_StuErrorLibEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.updDate}(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.updUser) == false && GetStrLen(pobjge_StuErrorLibEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.updUser}(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.memo) == false && GetStrLen(pobjge_StuErrorLibEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 学生错误作业集(ge_StuErrorLib))!值:${pobjge_StuErrorLibEN.memo}(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_StuErrorLibEN.mId && undefined !== pobjge_StuErrorLibEN.mId && tzDataType.isNumber(pobjge_StuErrorLibEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjge_StuErrorLibEN.mId}], 非法,应该为数值型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.courseId) == false && undefined !== pobjge_StuErrorLibEN.courseId && tzDataType.isString(pobjge_StuErrorLibEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_StuErrorLibEN.courseId}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.idStudentInfo) == false && undefined !== pobjge_StuErrorLibEN.idStudentInfo && tzDataType.isString(pobjge_StuErrorLibEN.idStudentInfo) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生流水号(idStudentInfo)]的值:[${pobjge_StuErrorLibEN.idStudentInfo}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (null != pobjge_StuErrorLibEN.questionId && undefined !== pobjge_StuErrorLibEN.questionId && tzDataType.isNumber(pobjge_StuErrorLibEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjge_StuErrorLibEN.questionId}], 非法,应该为数值型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.creator) == false && undefined !== pobjge_StuErrorLibEN.creator && tzDataType.isString(pobjge_StuErrorLibEN.creator) === false)
{
 throw new Error(`(errid:Watl000417)字段[创建者(creator)]的值:[${pobjge_StuErrorLibEN.creator}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.createDate) == false && undefined !== pobjge_StuErrorLibEN.createDate && tzDataType.isString(pobjge_StuErrorLibEN.createDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[建立日期(createDate)]的值:[${pobjge_StuErrorLibEN.createDate}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.sourceTypeId) == false && undefined !== pobjge_StuErrorLibEN.sourceTypeId && tzDataType.isString(pobjge_StuErrorLibEN.sourceTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[来源类型Id(sourceTypeId)]的值:[${pobjge_StuErrorLibEN.sourceTypeId}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (null != pobjge_StuErrorLibEN.isRedo && undefined !== pobjge_StuErrorLibEN.isRedo && tzDataType.isBoolean(pobjge_StuErrorLibEN.isRedo) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否重做(isRedo)]的值:[${pobjge_StuErrorLibEN.isRedo}], 非法,应该为布尔型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.redoDate) == false && undefined !== pobjge_StuErrorLibEN.redoDate && tzDataType.isString(pobjge_StuErrorLibEN.redoDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[重做日期(redoDate)]的值:[${pobjge_StuErrorLibEN.redoDate}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (null != pobjge_StuErrorLibEN.isPassed && undefined !== pobjge_StuErrorLibEN.isPassed && tzDataType.isBoolean(pobjge_StuErrorLibEN.isPassed) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否通过(isPassed)]的值:[${pobjge_StuErrorLibEN.isPassed}], 非法,应该为布尔型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.updDate) == false && undefined !== pobjge_StuErrorLibEN.updDate && tzDataType.isString(pobjge_StuErrorLibEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_StuErrorLibEN.updDate}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.updUser) == false && undefined !== pobjge_StuErrorLibEN.updUser && tzDataType.isString(pobjge_StuErrorLibEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_StuErrorLibEN.updUser}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuErrorLibEN.memo) == false && undefined !== pobjge_StuErrorLibEN.memo && tzDataType.isString(pobjge_StuErrorLibEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_StuErrorLibEN.memo}], 非法,应该为字符型(In 学生错误作业集(ge_StuErrorLib))!(clsge_StuErrorLibBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjge_StuErrorLibEN.mId 
 || pobjge_StuErrorLibEN.mId != null && pobjge_StuErrorLibEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 学生错误作业集)!(clsge_StuErrorLibBL:CheckProperty4Update)`);
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
export  function ge_StuErrorLib_GetJSONStrByObj (pobjge_StuErrorLibEN: clsge_StuErrorLibEN): string
{
pobjge_StuErrorLibEN.sfUpdFldSetStr = pobjge_StuErrorLibEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_StuErrorLibEN);
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
export  function ge_StuErrorLib_GetObjLstByJSONStr (strJSON: string): Array<clsge_StuErrorLibEN>
{
let arrge_StuErrorLibObjLst = new Array<clsge_StuErrorLibEN>();
if (strJSON === "")
{
return arrge_StuErrorLibObjLst;
}
try
{
arrge_StuErrorLibObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_StuErrorLibObjLst;
}
return arrge_StuErrorLibObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_StuErrorLibObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_StuErrorLib_GetObjLstByJSONObjLst (arrge_StuErrorLibObjLstS: Array<clsge_StuErrorLibEN>): Array<clsge_StuErrorLibEN>
{
const arrge_StuErrorLibObjLst = new Array<clsge_StuErrorLibEN>();
for (const objInFor of arrge_StuErrorLibObjLstS) {
const obj1 = ge_StuErrorLib_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_StuErrorLibObjLst.push(obj1);
}
return arrge_StuErrorLibObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_StuErrorLib_GetObjByJSONStr (strJSON: string): clsge_StuErrorLibEN
{
let pobjge_StuErrorLibEN = new clsge_StuErrorLibEN();
if (strJSON === "")
{
return pobjge_StuErrorLibEN;
}
try
{
pobjge_StuErrorLibEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_StuErrorLibEN;
}
return pobjge_StuErrorLibEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_StuErrorLib_GetCombineCondition(objge_StuErrorLibCond: clsge_StuErrorLibEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_mId) == true)
{
const strComparisonOpmId:string = objge_StuErrorLibCond.dicFldComparisonOp[clsge_StuErrorLibEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsge_StuErrorLibEN.con_mId, objge_StuErrorLibCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_StuErrorLibCond.dicFldComparisonOp[clsge_StuErrorLibEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuErrorLibEN.con_CourseId, objge_StuErrorLibCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_IdStudentInfo) == true)
{
const strComparisonOpIdStudentInfo:string = objge_StuErrorLibCond.dicFldComparisonOp[clsge_StuErrorLibEN.con_IdStudentInfo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuErrorLibEN.con_IdStudentInfo, objge_StuErrorLibCond.idStudentInfo, strComparisonOpIdStudentInfo);
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objge_StuErrorLibCond.dicFldComparisonOp[clsge_StuErrorLibEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsge_StuErrorLibEN.con_QuestionId, objge_StuErrorLibCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_Creator) == true)
{
const strComparisonOpCreator:string = objge_StuErrorLibCond.dicFldComparisonOp[clsge_StuErrorLibEN.con_Creator];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuErrorLibEN.con_Creator, objge_StuErrorLibCond.creator, strComparisonOpCreator);
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objge_StuErrorLibCond.dicFldComparisonOp[clsge_StuErrorLibEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuErrorLibEN.con_CreateDate, objge_StuErrorLibCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_SourceTypeId) == true)
{
const strComparisonOpSourceTypeId:string = objge_StuErrorLibCond.dicFldComparisonOp[clsge_StuErrorLibEN.con_SourceTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuErrorLibEN.con_SourceTypeId, objge_StuErrorLibCond.sourceTypeId, strComparisonOpSourceTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_IsRedo) == true)
{
if (objge_StuErrorLibCond.isRedo == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuErrorLibEN.con_IsRedo);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuErrorLibEN.con_IsRedo);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_RedoDate) == true)
{
const strComparisonOpRedoDate:string = objge_StuErrorLibCond.dicFldComparisonOp[clsge_StuErrorLibEN.con_RedoDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuErrorLibEN.con_RedoDate, objge_StuErrorLibCond.redoDate, strComparisonOpRedoDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_IsPassed) == true)
{
if (objge_StuErrorLibCond.isPassed == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuErrorLibEN.con_IsPassed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuErrorLibEN.con_IsPassed);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_StuErrorLibCond.dicFldComparisonOp[clsge_StuErrorLibEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuErrorLibEN.con_UpdDate, objge_StuErrorLibCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_StuErrorLibCond.dicFldComparisonOp[clsge_StuErrorLibEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuErrorLibEN.con_UpdUser, objge_StuErrorLibCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_StuErrorLibCond.dicFldComparisonOp, clsge_StuErrorLibEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_StuErrorLibCond.dicFldComparisonOp[clsge_StuErrorLibEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuErrorLibEN.con_Memo, objge_StuErrorLibCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StuErrorLib(学生错误作业集),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdStudentInfo: 学生流水号(要求唯一的字段)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StuErrorLib_GetUniCondStr(objge_StuErrorLibEN: clsge_StuErrorLibEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and IdStudentInfo = '{0}'", objge_StuErrorLibEN.idStudentInfo);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objge_StuErrorLibEN.questionId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StuErrorLib(学生错误作业集),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdStudentInfo: 学生流水号(要求唯一的字段)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StuErrorLib_GetUniCondStr4Update(objge_StuErrorLibEN: clsge_StuErrorLibEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objge_StuErrorLibEN.mId);
 strWhereCond +=  Format(" and IdStudentInfo = '{0}'", objge_StuErrorLibEN.idStudentInfo);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objge_StuErrorLibEN.questionId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_StuErrorLibENS:源对象
 * @param objge_StuErrorLibENT:目标对象
*/
export  function ge_StuErrorLib_CopyObjTo(objge_StuErrorLibENS: clsge_StuErrorLibEN , objge_StuErrorLibENT: clsge_StuErrorLibEN ): void 
{
objge_StuErrorLibENT.mId = objge_StuErrorLibENS.mId; //mId
objge_StuErrorLibENT.courseId = objge_StuErrorLibENS.courseId; //课程Id
objge_StuErrorLibENT.idStudentInfo = objge_StuErrorLibENS.idStudentInfo; //学生流水号
objge_StuErrorLibENT.questionId = objge_StuErrorLibENS.questionId; //题目Id
objge_StuErrorLibENT.creator = objge_StuErrorLibENS.creator; //创建者
objge_StuErrorLibENT.createDate = objge_StuErrorLibENS.createDate; //建立日期
objge_StuErrorLibENT.sourceTypeId = objge_StuErrorLibENS.sourceTypeId; //来源类型Id
objge_StuErrorLibENT.isRedo = objge_StuErrorLibENS.isRedo; //是否重做
objge_StuErrorLibENT.redoDate = objge_StuErrorLibENS.redoDate; //重做日期
objge_StuErrorLibENT.isPassed = objge_StuErrorLibENS.isPassed; //是否通过
objge_StuErrorLibENT.updDate = objge_StuErrorLibENS.updDate; //修改日期
objge_StuErrorLibENT.updUser = objge_StuErrorLibENS.updUser; //修改人
objge_StuErrorLibENT.memo = objge_StuErrorLibENS.memo; //备注
objge_StuErrorLibENT.sfUpdFldSetStr = objge_StuErrorLibENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_StuErrorLibENS:源对象
 * @param objge_StuErrorLibENT:目标对象
*/
export  function ge_StuErrorLib_GetObjFromJsonObj(objge_StuErrorLibENS: clsge_StuErrorLibEN): clsge_StuErrorLibEN 
{
 const objge_StuErrorLibENT: clsge_StuErrorLibEN = new clsge_StuErrorLibEN();
ObjectAssign(objge_StuErrorLibENT, objge_StuErrorLibENS);
 return objge_StuErrorLibENT;
}