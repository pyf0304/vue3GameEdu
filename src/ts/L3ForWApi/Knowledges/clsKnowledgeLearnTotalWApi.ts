
 /**
 * 类名:clsKnowledgeLearnTotalWApi
 * 表名:KnowledgeLearnTotal(01120155)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:16
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
 * 知识点学习汇总表(KnowledgeLearnTotal)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsKnowledgeLearnTotalEN } from "@/ts/L0Entity/Knowledges/clsKnowledgeLearnTotalEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const knowledgeLearnTotal_Controller = "KnowledgeLearnTotalApi";
 export const knowledgeLearnTotal_ConstructorName = "knowledgeLearnTotal";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function KnowledgeLearnTotal_GetObjBymIdAsync(lngmId: number): Promise<clsKnowledgeLearnTotalEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsKnowledgeLearnTotalWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const objKnowledgeLearnTotal = KnowledgeLearnTotal_GetObjFromJsonObj(returnObj);
return objKnowledgeLearnTotal;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  function KnowledgeLearnTotal_SortFunDefa(a:clsKnowledgeLearnTotalEN , b:clsKnowledgeLearnTotalEN): number 
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
export  function KnowledgeLearnTotal_SortFunDefa2Fld(a:clsKnowledgeLearnTotalEN , b:clsKnowledgeLearnTotalEN): number 
{
if (a.userId == b.userId) return a.masterDegree - b.masterDegree;
else return a.userId.localeCompare(b.userId);
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
export  function KnowledgeLearnTotal_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsKnowledgeLearnTotalEN.con_mId:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return a.mId-b.mId;
}
case clsKnowledgeLearnTotalEN.con_UserId:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
case clsKnowledgeLearnTotalEN.con_MasterDegree:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return a.masterDegree-b.masterDegree;
}
case clsKnowledgeLearnTotalEN.con_LearnCount:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return a.learnCount-b.learnCount;
}
case clsKnowledgeLearnTotalEN.con_CourseKnowledgeId:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
if (a.courseKnowledgeId == null) return -1;
if (b.courseKnowledgeId == null) return 1;
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
case clsKnowledgeLearnTotalEN.con_SuccessCount:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return a.successCount-b.successCount;
}
case clsKnowledgeLearnTotalEN.con_FailCount:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return a.failCount-b.failCount;
}
case clsKnowledgeLearnTotalEN.con_ContinuousSuccessCount:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return a.continuousSuccessCount-b.continuousSuccessCount;
}
case clsKnowledgeLearnTotalEN.con_ContinuousFailCount:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return a.continuousFailCount-b.continuousFailCount;
}
case clsKnowledgeLearnTotalEN.con_LastLearnDate:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
if (a.lastLearnDate == null) return -1;
if (b.lastLearnDate == null) return 1;
return a.lastLearnDate.localeCompare(b.lastLearnDate);
}
case clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
if (a.recommendedNextReviewDate == null) return -1;
if (b.recommendedNextReviewDate == null) return 1;
return a.recommendedNextReviewDate.localeCompare(b.recommendedNextReviewDate);
}
case clsKnowledgeLearnTotalEN.con_CourseId:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsKnowledgeLearnTotalEN.con_UpdDate:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsKnowledgeLearnTotalEN.con_UpdUser:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsKnowledgeLearnTotalEN.con_Memo:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeLearnTotal]中不存在!(in ${ knowledgeLearnTotal_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsKnowledgeLearnTotalEN.con_mId:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return b.mId-a.mId;
}
case clsKnowledgeLearnTotalEN.con_UserId:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
case clsKnowledgeLearnTotalEN.con_MasterDegree:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return b.masterDegree-a.masterDegree;
}
case clsKnowledgeLearnTotalEN.con_LearnCount:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return b.learnCount-a.learnCount;
}
case clsKnowledgeLearnTotalEN.con_CourseKnowledgeId:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
if (b.courseKnowledgeId == null) return -1;
if (a.courseKnowledgeId == null) return 1;
return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
}
case clsKnowledgeLearnTotalEN.con_SuccessCount:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return b.successCount-a.successCount;
}
case clsKnowledgeLearnTotalEN.con_FailCount:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return b.failCount-a.failCount;
}
case clsKnowledgeLearnTotalEN.con_ContinuousSuccessCount:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return b.continuousSuccessCount-a.continuousSuccessCount;
}
case clsKnowledgeLearnTotalEN.con_ContinuousFailCount:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return b.continuousFailCount-a.continuousFailCount;
}
case clsKnowledgeLearnTotalEN.con_LastLearnDate:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
if (b.lastLearnDate == null) return -1;
if (a.lastLearnDate == null) return 1;
return b.lastLearnDate.localeCompare(a.lastLearnDate);
}
case clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
if (b.recommendedNextReviewDate == null) return -1;
if (a.recommendedNextReviewDate == null) return 1;
return b.recommendedNextReviewDate.localeCompare(a.recommendedNextReviewDate);
}
case clsKnowledgeLearnTotalEN.con_CourseId:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsKnowledgeLearnTotalEN.con_UpdDate:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsKnowledgeLearnTotalEN.con_UpdUser:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsKnowledgeLearnTotalEN.con_Memo:
return (a: clsKnowledgeLearnTotalEN, b: clsKnowledgeLearnTotalEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeLearnTotal]中不存在!(in ${ knowledgeLearnTotal_ConstructorName}.${ strThisFuncName})`;
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
export  async function KnowledgeLearnTotal_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsKnowledgeLearnTotalEN.con_mId:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.mId === value;
}
case clsKnowledgeLearnTotalEN.con_UserId:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.userId === value;
}
case clsKnowledgeLearnTotalEN.con_MasterDegree:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.masterDegree === value;
}
case clsKnowledgeLearnTotalEN.con_LearnCount:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.learnCount === value;
}
case clsKnowledgeLearnTotalEN.con_CourseKnowledgeId:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.courseKnowledgeId === value;
}
case clsKnowledgeLearnTotalEN.con_SuccessCount:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.successCount === value;
}
case clsKnowledgeLearnTotalEN.con_FailCount:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.failCount === value;
}
case clsKnowledgeLearnTotalEN.con_ContinuousSuccessCount:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.continuousSuccessCount === value;
}
case clsKnowledgeLearnTotalEN.con_ContinuousFailCount:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.continuousFailCount === value;
}
case clsKnowledgeLearnTotalEN.con_LastLearnDate:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.lastLearnDate === value;
}
case clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.recommendedNextReviewDate === value;
}
case clsKnowledgeLearnTotalEN.con_CourseId:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.courseId === value;
}
case clsKnowledgeLearnTotalEN.con_UpdDate:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.updDate === value;
}
case clsKnowledgeLearnTotalEN.con_UpdUser:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.updUser === value;
}
case clsKnowledgeLearnTotalEN.con_Memo:
return (obj: clsKnowledgeLearnTotalEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeLearnTotal]中不存在!(in ${ knowledgeLearnTotal_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[KnowledgeLearnTotal__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KnowledgeLearnTotal_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_GetFirstObjAsync(strWhereCond: string): Promise<clsKnowledgeLearnTotalEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const objKnowledgeLearnTotal = KnowledgeLearnTotal_GetObjFromJsonObj(returnObj);
return objKnowledgeLearnTotal;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_GetObjLstAsync(strWhereCond: string): Promise<Array<clsKnowledgeLearnTotalEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeLearnTotal_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsKnowledgeLearnTotalEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeLearnTotal_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsKnowledgeLearnTotalEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeLearnTotal_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsKnowledgeLearnTotalEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeLearnTotal_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsKnowledgeLearnTotalEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsKnowledgeLearnTotalEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeLearnTotal_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_DelKnowledgeLearnTotalsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelKnowledgeLearnTotalsAsync";
const strAction = "DelKnowledgeLearnTotals";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_DelKnowledgeLearnTotalsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelKnowledgeLearnTotalsByCondAsync";
const strAction = "DelKnowledgeLearnTotalsByCond";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeLearnTotalEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KnowledgeLearnTotal_AddNewRecordAsync(objKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objKnowledgeLearnTotalEN);
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeLearnTotalEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_AddNewObjSave(objKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
KnowledgeLearnTotal_CheckPropertyNew(objKnowledgeLearnTotalEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ knowledgeLearnTotal_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await KnowledgeLearnTotal_CheckUniCond4Add(objKnowledgeLearnTotalEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await KnowledgeLearnTotal_AddNewRecordAsync(objKnowledgeLearnTotalEN);
if (returnBool == true)
{
//KnowledgeLearnTotal_ReFreshCache();
}
else
{
const strInfo = `添加[知识点学习汇总表(KnowledgeLearnTotal)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objKnowledgeLearnTotalEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ knowledgeLearnTotal_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function KnowledgeLearnTotal_CheckUniCond4Add(objKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN): Promise<boolean>{
const strUniquenessCondition = KnowledgeLearnTotal_GetUniCondStr(objKnowledgeLearnTotalEN);
const bolIsExistCondition = await KnowledgeLearnTotal_IsExistRecordAsync(strUniquenessCondition);
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
export  async function KnowledgeLearnTotal_CheckUniCond4Update(objKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN): Promise<boolean>{
const strUniquenessCondition = KnowledgeLearnTotal_GetUniCondStr4Update(objKnowledgeLearnTotalEN);
const bolIsExistCondition = await KnowledgeLearnTotal_IsExistRecordAsync(strUniquenessCondition);
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
export  async function KnowledgeLearnTotal_UpdateObjSave(objKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objKnowledgeLearnTotalEN.sfUpdFldSetStr = objKnowledgeLearnTotalEN.updFldString;//设置哪些字段被修改(脏字段)
if (objKnowledgeLearnTotalEN.mId == 0 || objKnowledgeLearnTotalEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
KnowledgeLearnTotal_CheckProperty4Update(objKnowledgeLearnTotalEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ knowledgeLearnTotal_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await KnowledgeLearnTotal_CheckUniCond4Update(objKnowledgeLearnTotalEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await KnowledgeLearnTotal_UpdateRecordAsync(objKnowledgeLearnTotalEN);
if (returnBool == true)
{
//KnowledgeLearnTotal_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ knowledgeLearnTotal_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objKnowledgeLearnTotalEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function KnowledgeLearnTotal_AddNewRecordWithReturnKeyAsync(objKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeLearnTotalEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeLearnTotalEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KnowledgeLearnTotal_UpdateRecordAsync(objKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objKnowledgeLearnTotalEN.sfUpdFldSetStr === undefined || objKnowledgeLearnTotalEN.sfUpdFldSetStr === null || objKnowledgeLearnTotalEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeLearnTotalEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeLearnTotalEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeLearnTotalEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KnowledgeLearnTotal_EditRecordExAsync(objKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objKnowledgeLearnTotalEN.sfUpdFldSetStr === undefined || objKnowledgeLearnTotalEN.sfUpdFldSetStr === null || objKnowledgeLearnTotalEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeLearnTotalEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeLearnTotalEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeLearnTotalEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KnowledgeLearnTotal_UpdateWithConditionAsync(objKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objKnowledgeLearnTotalEN.sfUpdFldSetStr === undefined || objKnowledgeLearnTotalEN.sfUpdFldSetStr === null || objKnowledgeLearnTotalEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeLearnTotalEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);
objKnowledgeLearnTotalEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeLearnTotalEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnTotal_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(knowledgeLearnTotal_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnTotal_ConstructorName, strThisFuncName);
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
export  function KnowledgeLearnTotal_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function KnowledgeLearnTotal_CheckPropertyNew(pobjKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (null === pobjKnowledgeLearnTotalEN.masterDegree 
 || pobjKnowledgeLearnTotalEN.masterDegree != null && pobjKnowledgeLearnTotalEN.masterDegree.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[掌握程度]不能为空(In 知识点学习汇总表)!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (null === pobjKnowledgeLearnTotalEN.continuousSuccessCount 
 || pobjKnowledgeLearnTotalEN.continuousSuccessCount != null && pobjKnowledgeLearnTotalEN.continuousSuccessCount.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[连续成功次数]不能为空(In 知识点学习汇总表)!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (null === pobjKnowledgeLearnTotalEN.continuousFailCount 
 || pobjKnowledgeLearnTotalEN.continuousFailCount != null && pobjKnowledgeLearnTotalEN.continuousFailCount.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[连续失败次数]不能为空(In 知识点学习汇总表)!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.courseId) === true 
 || pobjKnowledgeLearnTotalEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 知识点学习汇总表)!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 知识点学习汇总表)!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.userId) == false && GetStrLen(pobjKnowledgeLearnTotalEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.userId}(clsKnowledgeLearnTotalBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.courseKnowledgeId) == false && GetStrLen(pobjKnowledgeLearnTotalEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.courseKnowledgeId}(clsKnowledgeLearnTotalBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.lastLearnDate) == false && GetStrLen(pobjKnowledgeLearnTotalEN.lastLearnDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[最后学习日期(lastLearnDate)]的长度不能超过14(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.lastLearnDate}(clsKnowledgeLearnTotalBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.recommendedNextReviewDate) == false && GetStrLen(pobjKnowledgeLearnTotalEN.recommendedNextReviewDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[推荐下次复习日期(recommendedNextReviewDate)]的长度不能超过14(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.recommendedNextReviewDate}(clsKnowledgeLearnTotalBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.courseId) == false && GetStrLen(pobjKnowledgeLearnTotalEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.courseId}(clsKnowledgeLearnTotalBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.updDate) == false && GetStrLen(pobjKnowledgeLearnTotalEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.updDate}(clsKnowledgeLearnTotalBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.updUser) == false && GetStrLen(pobjKnowledgeLearnTotalEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.updUser}(clsKnowledgeLearnTotalBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.memo) == false && GetStrLen(pobjKnowledgeLearnTotalEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.memo}(clsKnowledgeLearnTotalBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjKnowledgeLearnTotalEN.mId && undefined !== pobjKnowledgeLearnTotalEN.mId && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjKnowledgeLearnTotalEN.mId}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.userId) == false && undefined !== pobjKnowledgeLearnTotalEN.userId && tzDataType.isString(pobjKnowledgeLearnTotalEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjKnowledgeLearnTotalEN.userId}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeLearnTotalEN.masterDegree && undefined !== pobjKnowledgeLearnTotalEN.masterDegree && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.masterDegree) === false)
{
 throw new Error(`(errid:Watl000414)字段[掌握程度(masterDegree)]的值:[${pobjKnowledgeLearnTotalEN.masterDegree}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeLearnTotalEN.learnCount && undefined !== pobjKnowledgeLearnTotalEN.learnCount && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.learnCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[学习次数(learnCount)]的值:[${pobjKnowledgeLearnTotalEN.learnCount}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.courseKnowledgeId) == false && undefined !== pobjKnowledgeLearnTotalEN.courseKnowledgeId && tzDataType.isString(pobjKnowledgeLearnTotalEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点Id(courseKnowledgeId)]的值:[${pobjKnowledgeLearnTotalEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeLearnTotalEN.successCount && undefined !== pobjKnowledgeLearnTotalEN.successCount && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.successCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[成功次数(successCount)]的值:[${pobjKnowledgeLearnTotalEN.successCount}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeLearnTotalEN.failCount && undefined !== pobjKnowledgeLearnTotalEN.failCount && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.failCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[失败次数(failCount)]的值:[${pobjKnowledgeLearnTotalEN.failCount}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeLearnTotalEN.continuousSuccessCount && undefined !== pobjKnowledgeLearnTotalEN.continuousSuccessCount && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.continuousSuccessCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[连续成功次数(continuousSuccessCount)]的值:[${pobjKnowledgeLearnTotalEN.continuousSuccessCount}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeLearnTotalEN.continuousFailCount && undefined !== pobjKnowledgeLearnTotalEN.continuousFailCount && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.continuousFailCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[连续失败次数(continuousFailCount)]的值:[${pobjKnowledgeLearnTotalEN.continuousFailCount}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.lastLearnDate) == false && undefined !== pobjKnowledgeLearnTotalEN.lastLearnDate && tzDataType.isString(pobjKnowledgeLearnTotalEN.lastLearnDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[最后学习日期(lastLearnDate)]的值:[${pobjKnowledgeLearnTotalEN.lastLearnDate}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.recommendedNextReviewDate) == false && undefined !== pobjKnowledgeLearnTotalEN.recommendedNextReviewDate && tzDataType.isString(pobjKnowledgeLearnTotalEN.recommendedNextReviewDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[推荐下次复习日期(recommendedNextReviewDate)]的值:[${pobjKnowledgeLearnTotalEN.recommendedNextReviewDate}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.courseId) == false && undefined !== pobjKnowledgeLearnTotalEN.courseId && tzDataType.isString(pobjKnowledgeLearnTotalEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjKnowledgeLearnTotalEN.courseId}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.updDate) == false && undefined !== pobjKnowledgeLearnTotalEN.updDate && tzDataType.isString(pobjKnowledgeLearnTotalEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjKnowledgeLearnTotalEN.updDate}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.updUser) == false && undefined !== pobjKnowledgeLearnTotalEN.updUser && tzDataType.isString(pobjKnowledgeLearnTotalEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjKnowledgeLearnTotalEN.updUser}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.memo) == false && undefined !== pobjKnowledgeLearnTotalEN.memo && tzDataType.isString(pobjKnowledgeLearnTotalEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjKnowledgeLearnTotalEN.memo}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.courseKnowledgeId) == false && pobjKnowledgeLearnTotalEN.courseKnowledgeId != '[nuull]' && GetStrLen(pobjKnowledgeLearnTotalEN.courseKnowledgeId) !=  8)
{
 throw ("(errid:Watl000415)字段[知识点Id]作为外键字段,长度应该为8(In 知识点学习汇总表)!(clsKnowledgeLearnTotalBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KnowledgeLearnTotal_CheckProperty4Update(pobjKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.userId) == false && GetStrLen(pobjKnowledgeLearnTotalEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.userId}(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.courseKnowledgeId) == false && GetStrLen(pobjKnowledgeLearnTotalEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.courseKnowledgeId}(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.lastLearnDate) == false && GetStrLen(pobjKnowledgeLearnTotalEN.lastLearnDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[最后学习日期(lastLearnDate)]的长度不能超过14(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.lastLearnDate}(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.recommendedNextReviewDate) == false && GetStrLen(pobjKnowledgeLearnTotalEN.recommendedNextReviewDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[推荐下次复习日期(recommendedNextReviewDate)]的长度不能超过14(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.recommendedNextReviewDate}(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.courseId) == false && GetStrLen(pobjKnowledgeLearnTotalEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.courseId}(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.updDate) == false && GetStrLen(pobjKnowledgeLearnTotalEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.updDate}(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.updUser) == false && GetStrLen(pobjKnowledgeLearnTotalEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.updUser}(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.memo) == false && GetStrLen(pobjKnowledgeLearnTotalEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点学习汇总表(KnowledgeLearnTotal))!值:${pobjKnowledgeLearnTotalEN.memo}(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjKnowledgeLearnTotalEN.mId && undefined !== pobjKnowledgeLearnTotalEN.mId && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjKnowledgeLearnTotalEN.mId}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.userId) == false && undefined !== pobjKnowledgeLearnTotalEN.userId && tzDataType.isString(pobjKnowledgeLearnTotalEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjKnowledgeLearnTotalEN.userId}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeLearnTotalEN.masterDegree && undefined !== pobjKnowledgeLearnTotalEN.masterDegree && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.masterDegree) === false)
{
 throw new Error(`(errid:Watl000417)字段[掌握程度(masterDegree)]的值:[${pobjKnowledgeLearnTotalEN.masterDegree}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeLearnTotalEN.learnCount && undefined !== pobjKnowledgeLearnTotalEN.learnCount && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.learnCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[学习次数(learnCount)]的值:[${pobjKnowledgeLearnTotalEN.learnCount}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.courseKnowledgeId) == false && undefined !== pobjKnowledgeLearnTotalEN.courseKnowledgeId && tzDataType.isString(pobjKnowledgeLearnTotalEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点Id(courseKnowledgeId)]的值:[${pobjKnowledgeLearnTotalEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeLearnTotalEN.successCount && undefined !== pobjKnowledgeLearnTotalEN.successCount && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.successCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[成功次数(successCount)]的值:[${pobjKnowledgeLearnTotalEN.successCount}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeLearnTotalEN.failCount && undefined !== pobjKnowledgeLearnTotalEN.failCount && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.failCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[失败次数(failCount)]的值:[${pobjKnowledgeLearnTotalEN.failCount}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeLearnTotalEN.continuousSuccessCount && undefined !== pobjKnowledgeLearnTotalEN.continuousSuccessCount && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.continuousSuccessCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[连续成功次数(continuousSuccessCount)]的值:[${pobjKnowledgeLearnTotalEN.continuousSuccessCount}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeLearnTotalEN.continuousFailCount && undefined !== pobjKnowledgeLearnTotalEN.continuousFailCount && tzDataType.isNumber(pobjKnowledgeLearnTotalEN.continuousFailCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[连续失败次数(continuousFailCount)]的值:[${pobjKnowledgeLearnTotalEN.continuousFailCount}], 非法,应该为数值型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.lastLearnDate) == false && undefined !== pobjKnowledgeLearnTotalEN.lastLearnDate && tzDataType.isString(pobjKnowledgeLearnTotalEN.lastLearnDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[最后学习日期(lastLearnDate)]的值:[${pobjKnowledgeLearnTotalEN.lastLearnDate}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.recommendedNextReviewDate) == false && undefined !== pobjKnowledgeLearnTotalEN.recommendedNextReviewDate && tzDataType.isString(pobjKnowledgeLearnTotalEN.recommendedNextReviewDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[推荐下次复习日期(recommendedNextReviewDate)]的值:[${pobjKnowledgeLearnTotalEN.recommendedNextReviewDate}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.courseId) == false && undefined !== pobjKnowledgeLearnTotalEN.courseId && tzDataType.isString(pobjKnowledgeLearnTotalEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjKnowledgeLearnTotalEN.courseId}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.updDate) == false && undefined !== pobjKnowledgeLearnTotalEN.updDate && tzDataType.isString(pobjKnowledgeLearnTotalEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjKnowledgeLearnTotalEN.updDate}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.updUser) == false && undefined !== pobjKnowledgeLearnTotalEN.updUser && tzDataType.isString(pobjKnowledgeLearnTotalEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjKnowledgeLearnTotalEN.updUser}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.memo) == false && undefined !== pobjKnowledgeLearnTotalEN.memo && tzDataType.isString(pobjKnowledgeLearnTotalEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjKnowledgeLearnTotalEN.memo}], 非法,应该为字符型(In 知识点学习汇总表(KnowledgeLearnTotal))!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjKnowledgeLearnTotalEN.mId 
 || pobjKnowledgeLearnTotalEN.mId != null && pobjKnowledgeLearnTotalEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 知识点学习汇总表)!(clsKnowledgeLearnTotalBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjKnowledgeLearnTotalEN.courseKnowledgeId) == false && pobjKnowledgeLearnTotalEN.courseKnowledgeId != '[nuull]' && GetStrLen(pobjKnowledgeLearnTotalEN.courseKnowledgeId) !=  8)
{
 throw ("(errid:Watl000418)字段[知识点Id]作为外键字段,长度应该为8(In 知识点学习汇总表)!(clsKnowledgeLearnTotalBL:CheckPropertyNew)");
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
export  function KnowledgeLearnTotal_GetJSONStrByObj (pobjKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN): string
{
pobjKnowledgeLearnTotalEN.sfUpdFldSetStr = pobjKnowledgeLearnTotalEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjKnowledgeLearnTotalEN);
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
export  function KnowledgeLearnTotal_GetObjLstByJSONStr (strJSON: string): Array<clsKnowledgeLearnTotalEN>
{
let arrKnowledgeLearnTotalObjLst = new Array<clsKnowledgeLearnTotalEN>();
if (strJSON === "")
{
return arrKnowledgeLearnTotalObjLst;
}
try
{
arrKnowledgeLearnTotalObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrKnowledgeLearnTotalObjLst;
}
return arrKnowledgeLearnTotalObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrKnowledgeLearnTotalObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function KnowledgeLearnTotal_GetObjLstByJSONObjLst (arrKnowledgeLearnTotalObjLstS: Array<clsKnowledgeLearnTotalEN>): Array<clsKnowledgeLearnTotalEN>
{
const arrKnowledgeLearnTotalObjLst = new Array<clsKnowledgeLearnTotalEN>();
for (const objInFor of arrKnowledgeLearnTotalObjLstS) {
const obj1 = KnowledgeLearnTotal_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrKnowledgeLearnTotalObjLst.push(obj1);
}
return arrKnowledgeLearnTotalObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function KnowledgeLearnTotal_GetObjByJSONStr (strJSON: string): clsKnowledgeLearnTotalEN
{
let pobjKnowledgeLearnTotalEN = new clsKnowledgeLearnTotalEN();
if (strJSON === "")
{
return pobjKnowledgeLearnTotalEN;
}
try
{
pobjKnowledgeLearnTotalEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjKnowledgeLearnTotalEN;
}
return pobjKnowledgeLearnTotalEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function KnowledgeLearnTotal_GetCombineCondition(objKnowledgeLearnTotalCond: clsKnowledgeLearnTotalEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_mId) == true)
{
const strComparisonOpmId:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsKnowledgeLearnTotalEN.con_mId, objKnowledgeLearnTotalCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnTotalEN.con_UserId, objKnowledgeLearnTotalCond.userId, strComparisonOpUserId);
}
//数据类型number(numeric)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_LearnCount) == true)
{
const strComparisonOpLearnCount:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_LearnCount];
strWhereCond += Format(" And {0} {2} {1}", clsKnowledgeLearnTotalEN.con_LearnCount, objKnowledgeLearnTotalCond.learnCount, strComparisonOpLearnCount);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_CourseKnowledgeId) == true)
{
const strComparisonOpCourseKnowledgeId:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_CourseKnowledgeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnTotalEN.con_CourseKnowledgeId, objKnowledgeLearnTotalCond.courseKnowledgeId, strComparisonOpCourseKnowledgeId);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_SuccessCount) == true)
{
const strComparisonOpSuccessCount:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_SuccessCount];
strWhereCond += Format(" And {0} {2} {1}", clsKnowledgeLearnTotalEN.con_SuccessCount, objKnowledgeLearnTotalCond.successCount, strComparisonOpSuccessCount);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_FailCount) == true)
{
const strComparisonOpFailCount:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_FailCount];
strWhereCond += Format(" And {0} {2} {1}", clsKnowledgeLearnTotalEN.con_FailCount, objKnowledgeLearnTotalCond.failCount, strComparisonOpFailCount);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_ContinuousSuccessCount) == true)
{
const strComparisonOpContinuousSuccessCount:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_ContinuousSuccessCount];
strWhereCond += Format(" And {0} {2} {1}", clsKnowledgeLearnTotalEN.con_ContinuousSuccessCount, objKnowledgeLearnTotalCond.continuousSuccessCount, strComparisonOpContinuousSuccessCount);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_ContinuousFailCount) == true)
{
const strComparisonOpContinuousFailCount:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_ContinuousFailCount];
strWhereCond += Format(" And {0} {2} {1}", clsKnowledgeLearnTotalEN.con_ContinuousFailCount, objKnowledgeLearnTotalCond.continuousFailCount, strComparisonOpContinuousFailCount);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_LastLearnDate) == true)
{
const strComparisonOpLastLearnDate:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_LastLearnDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnTotalEN.con_LastLearnDate, objKnowledgeLearnTotalCond.lastLearnDate, strComparisonOpLastLearnDate);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate) == true)
{
const strComparisonOpRecommendedNextReviewDate:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate, objKnowledgeLearnTotalCond.recommendedNextReviewDate, strComparisonOpRecommendedNextReviewDate);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnTotalEN.con_CourseId, objKnowledgeLearnTotalCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnTotalEN.con_UpdDate, objKnowledgeLearnTotalCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnTotalEN.con_UpdUser, objKnowledgeLearnTotalCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnTotalCond.dicFldComparisonOp, clsKnowledgeLearnTotalEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objKnowledgeLearnTotalCond.dicFldComparisonOp[clsKnowledgeLearnTotalEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnTotalEN.con_Memo, objKnowledgeLearnTotalCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--KnowledgeLearnTotal(知识点学习汇总表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function KnowledgeLearnTotal_GetUniCondStr(objKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and UserId = '{0}'", objKnowledgeLearnTotalEN.userId);
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objKnowledgeLearnTotalEN.courseKnowledgeId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--KnowledgeLearnTotal(知识点学习汇总表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function KnowledgeLearnTotal_GetUniCondStr4Update(objKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objKnowledgeLearnTotalEN.mId);
 strWhereCond +=  Format(" and UserId = '{0}'", objKnowledgeLearnTotalEN.userId);
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objKnowledgeLearnTotalEN.courseKnowledgeId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objKnowledgeLearnTotalENS:源对象
 * @param objKnowledgeLearnTotalENT:目标对象
*/
export  function KnowledgeLearnTotal_CopyObjTo(objKnowledgeLearnTotalENS: clsKnowledgeLearnTotalEN , objKnowledgeLearnTotalENT: clsKnowledgeLearnTotalEN ): void 
{
objKnowledgeLearnTotalENT.mId = objKnowledgeLearnTotalENS.mId; //mId
objKnowledgeLearnTotalENT.userId = objKnowledgeLearnTotalENS.userId; //用户ID
objKnowledgeLearnTotalENT.masterDegree = objKnowledgeLearnTotalENS.masterDegree; //掌握程度
objKnowledgeLearnTotalENT.learnCount = objKnowledgeLearnTotalENS.learnCount; //学习次数
objKnowledgeLearnTotalENT.courseKnowledgeId = objKnowledgeLearnTotalENS.courseKnowledgeId; //知识点Id
objKnowledgeLearnTotalENT.successCount = objKnowledgeLearnTotalENS.successCount; //成功次数
objKnowledgeLearnTotalENT.failCount = objKnowledgeLearnTotalENS.failCount; //失败次数
objKnowledgeLearnTotalENT.continuousSuccessCount = objKnowledgeLearnTotalENS.continuousSuccessCount; //连续成功次数
objKnowledgeLearnTotalENT.continuousFailCount = objKnowledgeLearnTotalENS.continuousFailCount; //连续失败次数
objKnowledgeLearnTotalENT.lastLearnDate = objKnowledgeLearnTotalENS.lastLearnDate; //最后学习日期
objKnowledgeLearnTotalENT.recommendedNextReviewDate = objKnowledgeLearnTotalENS.recommendedNextReviewDate; //推荐下次复习日期
objKnowledgeLearnTotalENT.courseId = objKnowledgeLearnTotalENS.courseId; //课程Id
objKnowledgeLearnTotalENT.updDate = objKnowledgeLearnTotalENS.updDate; //修改日期
objKnowledgeLearnTotalENT.updUser = objKnowledgeLearnTotalENS.updUser; //修改人
objKnowledgeLearnTotalENT.memo = objKnowledgeLearnTotalENS.memo; //备注
objKnowledgeLearnTotalENT.sfUpdFldSetStr = objKnowledgeLearnTotalENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objKnowledgeLearnTotalENS:源对象
 * @param objKnowledgeLearnTotalENT:目标对象
*/
export  function KnowledgeLearnTotal_GetObjFromJsonObj(objKnowledgeLearnTotalENS: clsKnowledgeLearnTotalEN): clsKnowledgeLearnTotalEN 
{
 const objKnowledgeLearnTotalENT: clsKnowledgeLearnTotalEN = new clsKnowledgeLearnTotalEN();
ObjectAssign(objKnowledgeLearnTotalENT, objKnowledgeLearnTotalENS);
 return objKnowledgeLearnTotalENT;
}