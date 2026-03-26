
 /**
 * 类名:clsJxTeachPlanKnowledgeWApi
 * 表名:JxTeachPlanKnowledge(01120971)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:28
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学计划知识点(JxTeachPlanKnowledge)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsJxTeachPlanKnowledgeEN } from "@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const jxTeachPlanKnowledge_Controller = "JxTeachPlanKnowledgeApi";
 export const jxTeachPlanKnowledge_ConstructorName = "jxTeachPlanKnowledge";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdTeachPlanKnowledge:关键字
 * @returns 对象
 **/
export  async function JxTeachPlanKnowledge_GetObjByIdTeachPlanKnowledgeAsync(strIdTeachPlanKnowledge: string): Promise<clsJxTeachPlanKnowledgeEN|null>  
{
const strThisFuncName = "GetObjByIdTeachPlanKnowledgeAsync";

if (IsNullOrEmpty(strIdTeachPlanKnowledge) == true)
{
  const strMsg = Format("参数:[strIdTeachPlanKnowledge]不能为空!(In clsJxTeachPlanKnowledgeWApi.GetObjByIdTeachPlanKnowledgeAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeachPlanKnowledge.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeachPlanKnowledge]的长度:[{0}]不正确!(clsJxTeachPlanKnowledgeWApi.GetObjByIdTeachPlanKnowledgeAsync)", strIdTeachPlanKnowledge.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdTeachPlanKnowledge";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeachPlanKnowledge,
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
const objJxTeachPlanKnowledge = JxTeachPlanKnowledge_GetObjFromJsonObj(returnObj);
return objJxTeachPlanKnowledge;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdTeachPlanKnowledgelocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByIdTeachPlanKnowledgeCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function JxTeachPlanKnowledge_SortFunDefa(a:clsJxTeachPlanKnowledgeEN , b:clsJxTeachPlanKnowledgeEN): number 
{
return a.idTeachPlanKnowledge.localeCompare(b.idTeachPlanKnowledge);
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
export  function JxTeachPlanKnowledge_SortFunDefa2Fld(a:clsJxTeachPlanKnowledgeEN , b:clsJxTeachPlanKnowledgeEN): number 
{
if (a.idTeachingPlan == b.idTeachingPlan) return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
else return a.idTeachingPlan.localeCompare(b.idTeachingPlan);
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
export  function JxTeachPlanKnowledge_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return a.idTeachPlanKnowledge.localeCompare(b.idTeachPlanKnowledge);
}
case clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return a.idTeachingPlan.localeCompare(b.idTeachingPlan);
}
case clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
case clsJxTeachPlanKnowledgeEN.con_CourseId:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsJxTeachPlanKnowledgeEN.con_TeachingMethodId:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return a.teachingMethodId.localeCompare(b.teachingMethodId);
}
case clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return a.assessmentMethodId.localeCompare(b.assessmentMethodId);
}
case clsJxTeachPlanKnowledgeEN.con_UpdDate:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsJxTeachPlanKnowledgeEN.con_UpdUser:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsJxTeachPlanKnowledgeEN.con_Memo:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[JxTeachPlanKnowledge]中不存在!(in ${ jxTeachPlanKnowledge_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return b.idTeachPlanKnowledge.localeCompare(a.idTeachPlanKnowledge);
}
case clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return b.idTeachingPlan.localeCompare(a.idTeachingPlan);
}
case clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
}
case clsJxTeachPlanKnowledgeEN.con_CourseId:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsJxTeachPlanKnowledgeEN.con_TeachingMethodId:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return b.teachingMethodId.localeCompare(a.teachingMethodId);
}
case clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return b.assessmentMethodId.localeCompare(a.assessmentMethodId);
}
case clsJxTeachPlanKnowledgeEN.con_UpdDate:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsJxTeachPlanKnowledgeEN.con_UpdUser:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsJxTeachPlanKnowledgeEN.con_Memo:
return (a: clsJxTeachPlanKnowledgeEN, b: clsJxTeachPlanKnowledgeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[JxTeachPlanKnowledge]中不存在!(in ${ jxTeachPlanKnowledge_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdTeachPlanKnowledgeCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function JxTeachPlanKnowledge_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge:
return (obj: clsJxTeachPlanKnowledgeEN) => {
return obj.idTeachPlanKnowledge === value;
}
case clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan:
return (obj: clsJxTeachPlanKnowledgeEN) => {
return obj.idTeachingPlan === value;
}
case clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId:
return (obj: clsJxTeachPlanKnowledgeEN) => {
return obj.courseKnowledgeId === value;
}
case clsJxTeachPlanKnowledgeEN.con_CourseId:
return (obj: clsJxTeachPlanKnowledgeEN) => {
return obj.courseId === value;
}
case clsJxTeachPlanKnowledgeEN.con_TeachingMethodId:
return (obj: clsJxTeachPlanKnowledgeEN) => {
return obj.teachingMethodId === value;
}
case clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId:
return (obj: clsJxTeachPlanKnowledgeEN) => {
return obj.assessmentMethodId === value;
}
case clsJxTeachPlanKnowledgeEN.con_UpdDate:
return (obj: clsJxTeachPlanKnowledgeEN) => {
return obj.updDate === value;
}
case clsJxTeachPlanKnowledgeEN.con_UpdUser:
return (obj: clsJxTeachPlanKnowledgeEN) => {
return obj.updUser === value;
}
case clsJxTeachPlanKnowledgeEN.con_Memo:
return (obj: clsJxTeachPlanKnowledgeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[JxTeachPlanKnowledge]中不存在!(in ${ jxTeachPlanKnowledge_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[JxTeachPlanKnowledge__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function JxTeachPlanKnowledge_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  async function JxTeachPlanKnowledge_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  async function JxTeachPlanKnowledge_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  async function JxTeachPlanKnowledge_GetFirstObjAsync(strWhereCond: string): Promise<clsJxTeachPlanKnowledgeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const objJxTeachPlanKnowledge = JxTeachPlanKnowledge_GetObjFromJsonObj(returnObj);
return objJxTeachPlanKnowledge;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  async function JxTeachPlanKnowledge_GetObjLstAsync(strWhereCond: string): Promise<Array<clsJxTeachPlanKnowledgeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = JxTeachPlanKnowledge_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
 * @param arrIdTeachPlanKnowledge:关键字列表
 * @returns 对象列表
 **/
export  async function JxTeachPlanKnowledge_GetObjLstByIdTeachPlanKnowledgeLstAsync(arrIdTeachPlanKnowledge: Array<string>): Promise<Array<clsJxTeachPlanKnowledgeEN>>  
{
const strThisFuncName = "GetObjLstByIdTeachPlanKnowledgeLstAsync";
const strAction = "GetObjLstByIdTeachPlanKnowledgeLst";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdTeachPlanKnowledge, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = JxTeachPlanKnowledge_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdTeachPlanKnowledgeLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function JxTeachPlanKnowledge_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsJxTeachPlanKnowledgeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = JxTeachPlanKnowledge_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  async function JxTeachPlanKnowledge_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsJxTeachPlanKnowledgeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = JxTeachPlanKnowledge_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  async function JxTeachPlanKnowledge_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsJxTeachPlanKnowledgeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsJxTeachPlanKnowledgeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = JxTeachPlanKnowledge_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
 * @param strIdTeachPlanKnowledge:关键字
 * @returns 获取删除的结果
 **/
export  async function JxTeachPlanKnowledge_DelRecordAsync(strIdTeachPlanKnowledge: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdTeachPlanKnowledge);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
 * @param arrIdTeachPlanKnowledge:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function JxTeachPlanKnowledge_DelJxTeachPlanKnowledgesAsync(arrIdTeachPlanKnowledge: Array<string>): Promise<number> 
{
const strThisFuncName = "DelJxTeachPlanKnowledgesAsync";
const strAction = "DelJxTeachPlanKnowledges";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdTeachPlanKnowledge, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  async function JxTeachPlanKnowledge_DelJxTeachPlanKnowledgesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelJxTeachPlanKnowledgesByCondAsync";
const strAction = "DelJxTeachPlanKnowledgesByCond";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
 * @param objJxTeachPlanKnowledgeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function JxTeachPlanKnowledge_AddNewRecordAsync(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objJxTeachPlanKnowledgeEN);
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachPlanKnowledgeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
 * @param objJxTeachPlanKnowledgeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function JxTeachPlanKnowledge_AddNewRecordWithMaxIdAsync(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachPlanKnowledgeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  async function JxTeachPlanKnowledge_AddNewObjSave(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
JxTeachPlanKnowledge_CheckPropertyNew(objJxTeachPlanKnowledgeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ jxTeachPlanKnowledge_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await JxTeachPlanKnowledge_CheckUniCond4Add(objJxTeachPlanKnowledgeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await JxTeachPlanKnowledge_AddNewRecordWithMaxIdAsync(objJxTeachPlanKnowledgeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//JxTeachPlanKnowledge_ReFreshCache();
}
else
{
const strInfo = `添加[教学计划知识点(JxTeachPlanKnowledge)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ jxTeachPlanKnowledge_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function JxTeachPlanKnowledge_CheckUniCond4Add(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN): Promise<boolean>{
const strUniquenessCondition = JxTeachPlanKnowledge_GetUniCondStr(objJxTeachPlanKnowledgeEN);
const bolIsExistCondition = await JxTeachPlanKnowledge_IsExistRecordAsync(strUniquenessCondition);
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
export  async function JxTeachPlanKnowledge_CheckUniCond4Update(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN): Promise<boolean>{
const strUniquenessCondition = JxTeachPlanKnowledge_GetUniCondStr4Update(objJxTeachPlanKnowledgeEN);
const bolIsExistCondition = await JxTeachPlanKnowledge_IsExistRecordAsync(strUniquenessCondition);
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
export  async function JxTeachPlanKnowledge_UpdateObjSave(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objJxTeachPlanKnowledgeEN.sfUpdFldSetStr = objJxTeachPlanKnowledgeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objJxTeachPlanKnowledgeEN.idTeachPlanKnowledge == "" || objJxTeachPlanKnowledgeEN.idTeachPlanKnowledge == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
JxTeachPlanKnowledge_CheckProperty4Update(objJxTeachPlanKnowledgeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ jxTeachPlanKnowledge_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await JxTeachPlanKnowledge_CheckUniCond4Update(objJxTeachPlanKnowledgeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await JxTeachPlanKnowledge_UpdateRecordAsync(objJxTeachPlanKnowledgeEN);
if (returnBool == true)
{
//JxTeachPlanKnowledge_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ jxTeachPlanKnowledge_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objJxTeachPlanKnowledgeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function JxTeachPlanKnowledge_AddNewRecordWithReturnKeyAsync(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachPlanKnowledgeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
 * @param objJxTeachPlanKnowledgeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function JxTeachPlanKnowledge_UpdateRecordAsync(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objJxTeachPlanKnowledgeEN.sfUpdFldSetStr === undefined || objJxTeachPlanKnowledgeEN.sfUpdFldSetStr === null || objJxTeachPlanKnowledgeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objJxTeachPlanKnowledgeEN.idTeachPlanKnowledge);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachPlanKnowledgeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
 * @param objJxTeachPlanKnowledgeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function JxTeachPlanKnowledge_EditRecordExAsync(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objJxTeachPlanKnowledgeEN.sfUpdFldSetStr === undefined || objJxTeachPlanKnowledgeEN.sfUpdFldSetStr === null || objJxTeachPlanKnowledgeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objJxTeachPlanKnowledgeEN.idTeachPlanKnowledge);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachPlanKnowledgeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
 * @param objJxTeachPlanKnowledgeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function JxTeachPlanKnowledge_UpdateWithConditionAsync(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objJxTeachPlanKnowledgeEN.sfUpdFldSetStr === undefined || objJxTeachPlanKnowledgeEN.sfUpdFldSetStr === null || objJxTeachPlanKnowledgeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objJxTeachPlanKnowledgeEN.idTeachPlanKnowledge);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);
objJxTeachPlanKnowledgeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objJxTeachPlanKnowledgeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  async function JxTeachPlanKnowledge_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
 * @param strIdTeachPlanKnowledge:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function JxTeachPlanKnowledge_IsExistAsync(strIdTeachPlanKnowledge: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeachPlanKnowledge
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  async function JxTeachPlanKnowledge_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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

 /**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function JxTeachPlanKnowledge_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  async function JxTeachPlanKnowledge_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(jxTeachPlanKnowledge_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, jxTeachPlanKnowledge_ConstructorName, strThisFuncName);
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
export  function JxTeachPlanKnowledge_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function JxTeachPlanKnowledge_CheckPropertyNew(pobjJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.idTeachingPlan) === true 
 || pobjJxTeachPlanKnowledgeEN.idTeachingPlan.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教案流水号]不能为空(In 教学计划知识点)!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.courseKnowledgeId) === true 
 || pobjJxTeachPlanKnowledgeEN.courseKnowledgeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[知识点Id]不能为空(In 教学计划知识点)!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.courseId) === true 
 || pobjJxTeachPlanKnowledgeEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 教学计划知识点)!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.teachingMethodId) === true 
 || pobjJxTeachPlanKnowledgeEN.teachingMethodId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教学方式Id]不能为空(In 教学计划知识点)!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.assessmentMethodId) === true 
 || pobjJxTeachPlanKnowledgeEN.assessmentMethodId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[考核方式Id]不能为空(In 教学计划知识点)!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 教学计划知识点)!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学计划知识点流水号(idTeachPlanKnowledge)]的长度不能超过8(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge}(clsJxTeachPlanKnowledgeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.idTeachingPlan) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.idTeachingPlan) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教案流水号(idTeachingPlan)]的长度不能超过8(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.idTeachingPlan}(clsJxTeachPlanKnowledgeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.courseKnowledgeId) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.courseKnowledgeId}(clsJxTeachPlanKnowledgeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.courseId) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.courseId}(clsJxTeachPlanKnowledgeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.teachingMethodId) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.teachingMethodId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[教学方式Id(teachingMethodId)]的长度不能超过2(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.teachingMethodId}(clsJxTeachPlanKnowledgeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.assessmentMethodId) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.assessmentMethodId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[考核方式Id(assessmentMethodId)]的长度不能超过2(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.assessmentMethodId}(clsJxTeachPlanKnowledgeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.updDate) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.updDate}(clsJxTeachPlanKnowledgeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.updUser) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.updUser}(clsJxTeachPlanKnowledgeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.memo) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.memo}(clsJxTeachPlanKnowledgeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge) == false && undefined !== pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学计划知识点流水号(idTeachPlanKnowledge)]的值:[${pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.idTeachingPlan) == false && undefined !== pobjJxTeachPlanKnowledgeEN.idTeachingPlan && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.idTeachingPlan) === false)
{
 throw new Error(`(errid:Watl000414)字段[教案流水号(idTeachingPlan)]的值:[${pobjJxTeachPlanKnowledgeEN.idTeachingPlan}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.courseKnowledgeId) == false && undefined !== pobjJxTeachPlanKnowledgeEN.courseKnowledgeId && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点Id(courseKnowledgeId)]的值:[${pobjJxTeachPlanKnowledgeEN.courseKnowledgeId}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.courseId) == false && undefined !== pobjJxTeachPlanKnowledgeEN.courseId && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjJxTeachPlanKnowledgeEN.courseId}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.teachingMethodId) == false && undefined !== pobjJxTeachPlanKnowledgeEN.teachingMethodId && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.teachingMethodId) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学方式Id(teachingMethodId)]的值:[${pobjJxTeachPlanKnowledgeEN.teachingMethodId}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.assessmentMethodId) == false && undefined !== pobjJxTeachPlanKnowledgeEN.assessmentMethodId && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.assessmentMethodId) === false)
{
 throw new Error(`(errid:Watl000414)字段[考核方式Id(assessmentMethodId)]的值:[${pobjJxTeachPlanKnowledgeEN.assessmentMethodId}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.updDate) == false && undefined !== pobjJxTeachPlanKnowledgeEN.updDate && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjJxTeachPlanKnowledgeEN.updDate}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.updUser) == false && undefined !== pobjJxTeachPlanKnowledgeEN.updUser && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjJxTeachPlanKnowledgeEN.updUser}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.memo) == false && undefined !== pobjJxTeachPlanKnowledgeEN.memo && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjJxTeachPlanKnowledgeEN.memo}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function JxTeachPlanKnowledge_CheckProperty4Update(pobjJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学计划知识点流水号(idTeachPlanKnowledge)]的长度不能超过8(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge}(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.idTeachingPlan) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.idTeachingPlan) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教案流水号(idTeachingPlan)]的长度不能超过8(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.idTeachingPlan}(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.courseKnowledgeId) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.courseKnowledgeId}(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.courseId) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.courseId}(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.teachingMethodId) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.teachingMethodId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[教学方式Id(teachingMethodId)]的长度不能超过2(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.teachingMethodId}(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.assessmentMethodId) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.assessmentMethodId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[考核方式Id(assessmentMethodId)]的长度不能超过2(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.assessmentMethodId}(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.updDate) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.updDate}(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.updUser) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.updUser}(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.memo) == false && GetStrLen(pobjJxTeachPlanKnowledgeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教学计划知识点(JxTeachPlanKnowledge))!值:${pobjJxTeachPlanKnowledgeEN.memo}(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge) == false && undefined !== pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学计划知识点流水号(idTeachPlanKnowledge)]的值:[${pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.idTeachingPlan) == false && undefined !== pobjJxTeachPlanKnowledgeEN.idTeachingPlan && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.idTeachingPlan) === false)
{
 throw new Error(`(errid:Watl000417)字段[教案流水号(idTeachingPlan)]的值:[${pobjJxTeachPlanKnowledgeEN.idTeachingPlan}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.courseKnowledgeId) == false && undefined !== pobjJxTeachPlanKnowledgeEN.courseKnowledgeId && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点Id(courseKnowledgeId)]的值:[${pobjJxTeachPlanKnowledgeEN.courseKnowledgeId}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.courseId) == false && undefined !== pobjJxTeachPlanKnowledgeEN.courseId && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjJxTeachPlanKnowledgeEN.courseId}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.teachingMethodId) == false && undefined !== pobjJxTeachPlanKnowledgeEN.teachingMethodId && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.teachingMethodId) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学方式Id(teachingMethodId)]的值:[${pobjJxTeachPlanKnowledgeEN.teachingMethodId}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.assessmentMethodId) == false && undefined !== pobjJxTeachPlanKnowledgeEN.assessmentMethodId && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.assessmentMethodId) === false)
{
 throw new Error(`(errid:Watl000417)字段[考核方式Id(assessmentMethodId)]的值:[${pobjJxTeachPlanKnowledgeEN.assessmentMethodId}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.updDate) == false && undefined !== pobjJxTeachPlanKnowledgeEN.updDate && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjJxTeachPlanKnowledgeEN.updDate}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.updUser) == false && undefined !== pobjJxTeachPlanKnowledgeEN.updUser && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjJxTeachPlanKnowledgeEN.updUser}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjJxTeachPlanKnowledgeEN.memo) == false && undefined !== pobjJxTeachPlanKnowledgeEN.memo && tzDataType.isString(pobjJxTeachPlanKnowledgeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjJxTeachPlanKnowledgeEN.memo}], 非法,应该为字符型(In 教学计划知识点(JxTeachPlanKnowledge))!(clsJxTeachPlanKnowledgeBL:CheckProperty4Update)`);
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
export  function JxTeachPlanKnowledge_GetJSONStrByObj (pobjJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN): string
{
pobjJxTeachPlanKnowledgeEN.sfUpdFldSetStr = pobjJxTeachPlanKnowledgeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjJxTeachPlanKnowledgeEN);
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
export  function JxTeachPlanKnowledge_GetObjLstByJSONStr (strJSON: string): Array<clsJxTeachPlanKnowledgeEN>
{
let arrJxTeachPlanKnowledgeObjLst = new Array<clsJxTeachPlanKnowledgeEN>();
if (strJSON === "")
{
return arrJxTeachPlanKnowledgeObjLst;
}
try
{
arrJxTeachPlanKnowledgeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrJxTeachPlanKnowledgeObjLst;
}
return arrJxTeachPlanKnowledgeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrJxTeachPlanKnowledgeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function JxTeachPlanKnowledge_GetObjLstByJSONObjLst (arrJxTeachPlanKnowledgeObjLstS: Array<clsJxTeachPlanKnowledgeEN>): Array<clsJxTeachPlanKnowledgeEN>
{
const arrJxTeachPlanKnowledgeObjLst = new Array<clsJxTeachPlanKnowledgeEN>();
for (const objInFor of arrJxTeachPlanKnowledgeObjLstS) {
const obj1 = JxTeachPlanKnowledge_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrJxTeachPlanKnowledgeObjLst.push(obj1);
}
return arrJxTeachPlanKnowledgeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function JxTeachPlanKnowledge_GetObjByJSONStr (strJSON: string): clsJxTeachPlanKnowledgeEN
{
let pobjJxTeachPlanKnowledgeEN = new clsJxTeachPlanKnowledgeEN();
if (strJSON === "")
{
return pobjJxTeachPlanKnowledgeEN;
}
try
{
pobjJxTeachPlanKnowledgeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjJxTeachPlanKnowledgeEN;
}
return pobjJxTeachPlanKnowledgeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function JxTeachPlanKnowledge_GetCombineCondition(objJxTeachPlanKnowledgeCond: clsJxTeachPlanKnowledgeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objJxTeachPlanKnowledgeCond.dicFldComparisonOp, clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge) == true)
{
const strComparisonOpIdTeachPlanKnowledge:string = objJxTeachPlanKnowledgeCond.dicFldComparisonOp[clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge, objJxTeachPlanKnowledgeCond.idTeachPlanKnowledge, strComparisonOpIdTeachPlanKnowledge);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachPlanKnowledgeCond.dicFldComparisonOp, clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan) == true)
{
const strComparisonOpIdTeachingPlan:string = objJxTeachPlanKnowledgeCond.dicFldComparisonOp[clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan, objJxTeachPlanKnowledgeCond.idTeachingPlan, strComparisonOpIdTeachingPlan);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachPlanKnowledgeCond.dicFldComparisonOp, clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId) == true)
{
const strComparisonOpCourseKnowledgeId:string = objJxTeachPlanKnowledgeCond.dicFldComparisonOp[clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId, objJxTeachPlanKnowledgeCond.courseKnowledgeId, strComparisonOpCourseKnowledgeId);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachPlanKnowledgeCond.dicFldComparisonOp, clsJxTeachPlanKnowledgeEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objJxTeachPlanKnowledgeCond.dicFldComparisonOp[clsJxTeachPlanKnowledgeEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachPlanKnowledgeEN.con_CourseId, objJxTeachPlanKnowledgeCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachPlanKnowledgeCond.dicFldComparisonOp, clsJxTeachPlanKnowledgeEN.con_TeachingMethodId) == true)
{
const strComparisonOpTeachingMethodId:string = objJxTeachPlanKnowledgeCond.dicFldComparisonOp[clsJxTeachPlanKnowledgeEN.con_TeachingMethodId];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachPlanKnowledgeEN.con_TeachingMethodId, objJxTeachPlanKnowledgeCond.teachingMethodId, strComparisonOpTeachingMethodId);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachPlanKnowledgeCond.dicFldComparisonOp, clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId) == true)
{
const strComparisonOpAssessmentMethodId:string = objJxTeachPlanKnowledgeCond.dicFldComparisonOp[clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId, objJxTeachPlanKnowledgeCond.assessmentMethodId, strComparisonOpAssessmentMethodId);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachPlanKnowledgeCond.dicFldComparisonOp, clsJxTeachPlanKnowledgeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objJxTeachPlanKnowledgeCond.dicFldComparisonOp[clsJxTeachPlanKnowledgeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachPlanKnowledgeEN.con_UpdDate, objJxTeachPlanKnowledgeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachPlanKnowledgeCond.dicFldComparisonOp, clsJxTeachPlanKnowledgeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objJxTeachPlanKnowledgeCond.dicFldComparisonOp[clsJxTeachPlanKnowledgeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachPlanKnowledgeEN.con_UpdUser, objJxTeachPlanKnowledgeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objJxTeachPlanKnowledgeCond.dicFldComparisonOp, clsJxTeachPlanKnowledgeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objJxTeachPlanKnowledgeCond.dicFldComparisonOp[clsJxTeachPlanKnowledgeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsJxTeachPlanKnowledgeEN.con_Memo, objJxTeachPlanKnowledgeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--JxTeachPlanKnowledge(教学计划知识点),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @param strIdTeachingPlan: 教案流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function JxTeachPlanKnowledge_GetUniCondStr(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objJxTeachPlanKnowledgeEN.courseKnowledgeId);
 strWhereCond +=  Format(" and IdTeachingPlan = '{0}'", objJxTeachPlanKnowledgeEN.idTeachingPlan);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--JxTeachPlanKnowledge(教学计划知识点),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @param strIdTeachingPlan: 教案流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function JxTeachPlanKnowledge_GetUniCondStr4Update(objJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdTeachPlanKnowledge <> '{0}'", objJxTeachPlanKnowledgeEN.idTeachPlanKnowledge);
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objJxTeachPlanKnowledgeEN.courseKnowledgeId);
 strWhereCond +=  Format(" and IdTeachingPlan = '{0}'", objJxTeachPlanKnowledgeEN.idTeachingPlan);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objJxTeachPlanKnowledgeENS:源对象
 * @param objJxTeachPlanKnowledgeENT:目标对象
*/
export  function JxTeachPlanKnowledge_CopyObjTo(objJxTeachPlanKnowledgeENS: clsJxTeachPlanKnowledgeEN , objJxTeachPlanKnowledgeENT: clsJxTeachPlanKnowledgeEN ): void 
{
objJxTeachPlanKnowledgeENT.idTeachPlanKnowledge = objJxTeachPlanKnowledgeENS.idTeachPlanKnowledge; //教学计划知识点流水号
objJxTeachPlanKnowledgeENT.idTeachingPlan = objJxTeachPlanKnowledgeENS.idTeachingPlan; //教案流水号
objJxTeachPlanKnowledgeENT.courseKnowledgeId = objJxTeachPlanKnowledgeENS.courseKnowledgeId; //知识点Id
objJxTeachPlanKnowledgeENT.courseId = objJxTeachPlanKnowledgeENS.courseId; //课程Id
objJxTeachPlanKnowledgeENT.teachingMethodId = objJxTeachPlanKnowledgeENS.teachingMethodId; //教学方式Id
objJxTeachPlanKnowledgeENT.assessmentMethodId = objJxTeachPlanKnowledgeENS.assessmentMethodId; //考核方式Id
objJxTeachPlanKnowledgeENT.updDate = objJxTeachPlanKnowledgeENS.updDate; //修改日期
objJxTeachPlanKnowledgeENT.updUser = objJxTeachPlanKnowledgeENS.updUser; //修改人
objJxTeachPlanKnowledgeENT.memo = objJxTeachPlanKnowledgeENS.memo; //备注
objJxTeachPlanKnowledgeENT.sfUpdFldSetStr = objJxTeachPlanKnowledgeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objJxTeachPlanKnowledgeENS:源对象
 * @param objJxTeachPlanKnowledgeENT:目标对象
*/
export  function JxTeachPlanKnowledge_GetObjFromJsonObj(objJxTeachPlanKnowledgeENS: clsJxTeachPlanKnowledgeEN): clsJxTeachPlanKnowledgeEN 
{
 const objJxTeachPlanKnowledgeENT: clsJxTeachPlanKnowledgeEN = new clsJxTeachPlanKnowledgeEN();
ObjectAssign(objJxTeachPlanKnowledgeENT, objJxTeachPlanKnowledgeENS);
 return objJxTeachPlanKnowledgeENT;
}